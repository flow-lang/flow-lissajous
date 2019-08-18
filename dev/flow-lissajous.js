export default ({ REC_START, REC_STOP, EVAL }) => {
  console.log(REC_START, REC_STOP, EVAL)

  return {
    update: (snippets = []) => 
      window.meta.flow(snippets.map(snippet => ({
        action: EVAL,
        payload: snippet
      }))),
    eval: snippet => () => {
      console.log(snippet)
      // We don't want to have to write `var x = ...` whenever we're declrating a 
      // new variable when live coding. If we drop the `var` though the browser will
      // complain about things not being defined. To get around this we force them
      // to be global by assigning them to the window. eg:
      //   var a = new track()
      // becomes
      //   window.a = new track()
      const globalCode = snippet.replace(/([a-zA-Z]+)\s*=/g, 'window.$1 =')
      eval(globalCode)
    },
    // Plugin data ===============================================================
    // The runtime needs to know what type of plugin to install
    __pluginType: 'event',
    // In the future, __pluginName will be used to stop duplicate plugins being
    // registered.
    __pluginName: 'Lissajous',
    // The event type should match the __eventType of any event objects you want
    // this plugin to handle.
    __eventType: 'lissajous',
    // Install is called after a program has been started. It is always passed an
    // object with $context, $root, and $dispatch but a plugin may choose to ignore
    // any or all of these fields.
    __install ({ $dispatch }) {
      this.$dispatch = $dispatch
      window.meta = new window.track()
      window.meta.vol(0)

      window.meta.record = () => this.$dispatch({ action: REC_START })
      window.meta.stop = () => this.$dispatch({ action: REC_STOP })
    },
    __update() {},
    //
    $dispatch: null,
    $track: null
  }
}