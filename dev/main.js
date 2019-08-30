import { Program, Audio, DOM } from '@flow-lang/framework'
// This plugin is a function rather than an object. It returns a proper plugin
// object once it has been constructed.
import LissajousPlugin from './flow-lissajous'

window.addEventListener('click', function resumeContext () {
  window.removeEventListener('click', resumeContext)
  window.context.resume()
})

// Model -----------------------------------------------------------------------
function init (flags) {
  return {
    recording: false,
    code: '',
    history: []
  }
}

// Update ----------------------------------------------------------------------
const EVAL = 'eval'
const REC_START = 'rec-start'
const REC_STOP = 'rec-stop'
const NOOP = 'no-op'

function update ({ action, payload }, model) {
  if (!action) return model

  switch (action) {
    case NOOP: return model

    case EVAL: {
      const redacted = payload
        .replace('meta.record()', '')
        .replace('meta.stop()', '')
        
      return [{ ...model,
        code: payload,
        history: model.recording && /\S/.test(redacted)
          ? [ ...model.history, redacted ]
          : model.history
      }, Lissajous.eval(payload)]
    }

    case REC_START: {
      return [{ ...model,
        history: [],
        recording: true
      }, Lissajous.update([])]
    }

    case REC_STOP: {
      return [{ ...model,
        recording: false
      }, Lissajous.update(model.history)]
    }

    default: {
      console.warn(`Unhandled action: ${action}!!`)
      return model
    }
  }
}

// View ------------------------------------------------------------------------
const { Element: E, Attribute: A } = DOM

function view (model) {
  // DOM node for the code editor
  const editor = E.textarea([ A.className(`
    bg-gray-800 rounded leading-normal resize-none w-full h-full p-6
    outline-none focus:outline-none
  `) ])
  // DOM node that displays the snippet of code that was most recently
  // evaluated. 
  const history = E.pre([ A.className(`
    bg-gray-900 leading-normal w-full h-full p-6 font-mono whitespace-pre-wrap
  `) ], [ model.code ])

  return E.main([ A.className('text-gray-100 text-sm') ], [
    // Header ------------------------------------------------------------------
    E.h1([ A.className('text-center text-3xl') ], [
      'Lissajous + Flow = ❤️'
    ]),
    // Info --------------------------------------------------------------------
    E.section([A.className('flex text-gray-700 text-justify') ], [
      E.div([ A.className('flex-1 py-2 px-6')], [ 
        'Drag and drop audio files anywhere on the page to load them into ',
        'Lissajous. You can then reference them by filename in your tracks. ',
        'Ctrl+Enter will evaluate the current line. Ctrl+Shift+Enter will ',
        'evaluate everything. You can evualute multiple lines by selecting them ',
        'and then pressing Ctrl+Enter.'
      ]),
      E.div([ A.className('flex-1 py-2 px-6')], [ 
        'The most recent snippet of code that was evaluated gets shown here!'
      ]),
    ]),
    // Editor ------------------------------------------------------------------
    E.section([A.className('flex pt-4') ], [    
      editor, 
      history
    ])
  ])
}

// Listen ----------------------------------------------------------------------
function listen (model) {
  return [
    DOM.Event.keydown('textarea', ({ key, ctrlKey, shiftKey, target }) => {
      const { value, selectionStart, selectionEnd } = target
      const line = value.substr(0, selectionStart).split('\n').length - 1
      const code = selectionStart !== selectionEnd
        ? value.substring(selectionStart, selectionEnd)
        : value.split('\n')[line]
  
      if (key == 'Enter' && ctrlKey) {
        return {
          action: EVAL,
          payload: shiftKey ? value : code
        }
      } else {
        return {
          action: NOOP
        }
      }
    })
  ]
}

// App -------------------------------------------------------------------------
const App = Program.instrument(init, update, () => [], view, listen)
const Lissajous = LissajousPlugin({ REC_START, REC_STOP, EVAL })

App.use(Lissajous)
App.use(DOM.Event)

App.start({
  context: window.context,
  root: document.querySelector('#app'),
  flags: {}
})