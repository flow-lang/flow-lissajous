parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"geg8":[function(require,module,exports) {
"use strict";function e(e,o){return a(e)||n(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(s){o=!0,r=s}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return n}function a(e){if(Array.isArray(e))return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(e){return setTimeout(e,0)},s=window.AudioContext||window.webkitAudioContext,d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),this.$context=e,this.$nodes={$:this.$context.createGain()},this.$nodes.$.gain.linearRampToValueAtTime(1,this.$context.currentTime+1),this.$nodes.$.connect(this.$context.destination),this.vPrev={},n.autostart&&this.resume()}return c(t,null,[{key:"prepare",value:function(){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.forEach(function(o,r){"RefNode"!==o.type&&(n[o.key]=o),o.connections&&e(o.connections,n,a+1),a>0&&(t[r]={type:"RefNode",key:o.key})}),n}(function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.forEach(function(t,a){"RefNode"!==t.type&&(t.key||(t.key="".concat(n,"_").concat(a)),t.connections&&t.connections.length>0&&e(t.connections,t.key))}),t}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]))}},{key:"diff",value:function(e,t){for(var n={created:[],updated:[],removed:[]},a=function(){var t=r[o],a=e[t.key];if(a)if(a.type!==t.type)n.updated.push({type:"node",key:t.key,data:t}),t.connections.forEach(function(e){n.created.push({type:"connection",key:t.key,data:e.key.split(".")})});else{for(var c=0;c<Math.max(a.properties.length,t.properties.length);c++){var i=a.properties[c],s=t.properties[c];i?s?i.label!==s.label?(n.removed.push({type:"property",key:a.key,data:i}),n.created.push({type:"property",key:a.key,data:s})):i.value!==s.value&&n.updated.push({type:"property",key:a.key,data:s}):n.removed.push({type:"property",key:a.key,data:i}):n.created.push({type:"property",key:a.key,data:s})}for(var d=0;d<Math.max(a.connections.length,t.connections.length);d++){var u=a.connections[d],l=t.connections[d];u?l?u.key!==l.key&&(n.removed.push({type:"connection",key:a.key,data:u.key.split(".")}),n.created.push({type:"connection",key:a.key,data:l.key.split(".")})):n.removed.push({type:"connection",key:a.key,data:u.key.split(".")}):n.created.push({type:"connection",key:a.key,data:l.key.split(".")})}}else n.created.push({type:"node",key:t.key,data:t}),t.connections.forEach(function(e){n.created.push({type:"connection",key:t.key,data:e.key.split(".")})});delete e[t.key]},o=0,r=Object.values(t);o<r.length;o++)a();for(var c=0,i=Object.values(e);c<i.length;c++){var s=i[c];n.removed.push({type:"node",key:s.key,data:s})}return n}}]),c(t,[{key:"update",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=t.prepare(n),o=t.diff(this.vPrev,a);o.removed.forEach(function(t){switch(t.type){case"node":e._destroyNode(t.key);break;case"property":e._removeProperty(t.key,t.data);break;case"connection":e._disconnect(t.key,t.data)}}),o.created.forEach(function(t){switch(t.type){case"node":e._createNode(t.key,t.data);break;case"property":e._setProperty(t.key,t.data);break;case"connection":i(function(){return e._connect(t.key,t.data)})}}),o.updated.forEach(function(t){switch(t.type){case"node":e._destroyNode(t.key),e._createNode(t.key,t.data);break;case"property":e._setProperty(t.key,t.data)}}),this.vPrev=a}},{key:"suspend",value:function(){this.$nodes.$.gain.value=0,this.$context.suspend()}},{key:"resume",value:function(){this.$context.resume(),this.$nodes.$.gain.linearRampToValueAtTime(1,this.$context.currentTime+.1)}},{key:"_createNode",value:function(e,t){var n=this,a=t.type,o=t.properties,r=null;switch(a){case"AnalyserNode":r=this.$context.createAnalyser();break;case"AudioBufferSourceNode":r=this.$context.createBufferSource();break;case"AudioDestinationNode":r=this.$nodes.$;break;case"BiquadFilterNode":r=this.$context.createBiquadFilter();break;case"ChannelMergerNode":r=this.$context.createChannelMerger();break;case"ChannelSplitterNode":r=this.$context.createChannelSplitter();break;case"ConstantSourceNode":r=this.$context.createConstantSource();break;case"ConvolverNode":r=this.$context.createConvolver();break;case"DelayNode":var c=o.find(function(e){return"maxDelayTime"===e.label});r=this.$context.createDelay(c&&c.value||1);break;case"DynamicsCompressorNode":r=this.$context.createDynamicsCompressor();break;case"GainNode":r=this.$context.createGain();break;case"IIRFilterNode":var i=o.find(function(e){return"feedforward"===e.label}),s=o.find(function(e){return"feedback"===e.label});r=this.$context.createIIRFilter(i&&i.value||[0],s&&s.value||[1]);break;case"MediaElementAudioSourceNode":var d=o.find(function(e){return"mediaElement"===e.label});r=this.$context.createMediaElementSource(document.querySelector(d.value));break;case"MediaStreamAudioDestinationNode":r=this.$context.createMediaStreamDestination();break;case"OscillatorNode":r=this.$context.createOscillator();break;case"PannerNode":r=this.$context.createPanner();break;case"StereoPannerNode":r=this.$context.createStereoPanner();break;case"WaveShaperNode":r=this.$context.createWaveShaper();break;default:console.warn("Invalide node type of: ".concat(a,". Defaulting to GainNode to avoid crashing the AudioContext.")),r=this.$context.createGain()}this.$nodes[e]=r,o.forEach(function(t){return n._setProperty(e,t)}),r.start&&r.start()}},{key:"_destroyNode",value:function(e){var t=this.$nodes[e];t.stop&&t.stop(),t.disconnect(),delete this.$nodes[e]}},{key:"_setProperty",value:function(e,t){var n=t.type,a=t.label,o=t.value,r=this.$nodes[e];switch(n){case"NodeProperty":r[a]=o;break;case"AudioParam":r[a].linearRampToValueAtTime(o,this.$context.currentTime+.05);break;case"ScheduledAudioParam":r[a][o.method](o.target,o.time)}}},{key:"_removeProperty",value:function(e,t){var n=t.type,a=t.label,o=(t.value,this.$nodes[e]);switch(n){case"NodeProperty":break;case"AudioParam":o[a].value=o[a].linearRampToValueAtTime(o[a].default,this.$context.currentTime+.05)}}},{key:"_connect",value:function(t,n){var a=e(n,2),o=a[0],r=a[1],c=void 0===r?null:r;o&&this.$nodes[t].connect(c?this.$nodes[o][c]:this.$nodes[o])}},{key:"_disconnect",value:function(t,n){var a=e(n,2),o=a[0],r=a[1],c=void 0===r?null:r;o&&this.$nodes[t].disconnect(c?this.$nodes[o][c]:this.$nodes[o])}}]),t}();exports.default=d;
},{}],"FO+Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defer=void 0;var e=function(e){return setTimeout(e,0)};exports.defer=e;
},{}],"ERfL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../utils");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var i=function(){function n(e){for(r(this,n),this.$root=e,this.vPrev=null;this.$root.firstChild;)this.$root.removeChild(this.$root.firstChild)}return o(n,null,[{key:"isText",value:function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}},{key:"isVirtualNode",value:function(e){return"object"===t(e)&&e.attrs&&e.children}},{key:"isComponent",value:function(e){return"function"==typeof e}}]),o(n,[{key:"update",value:function(e,r,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;r=r||this.vPrev;var a=(o=o||this.$root).childNodes[i];if(r&&a)if(e)if(t(r)!==t(e))this._replace(o,a,e);else if(n.isText(r)&&n.isText(e))r!==e&&this._replace(o,a,e);else if(n.isVirtualNode(r)&&n.isVirtualNode(e)){if(r.tag!==e.tag)this._replace(o,a,e);else for(var l=0;l<r.attrs.length||l<e.attrs.length;l++){var u=r.attrs[l],s=e.attrs[l];s?a.setAttribute(s.name,s.value):a.removeAttribute(u.name)}for(var f=0;f<Math.max(r.children.length,e.children.length);f++)this.update(e.children[f],r.children[f],a,f)}else n.isComponent(r)&&n.isComponent(e);else a&&this._remove(a);else this._append(o,e);this.vPrev=e}},{key:"_create",value:function(e){if(n.isText(e))return document.createTextNode("".concat(e));if(n.isVirtualNode(e)){var t=document.createElement(e.tag),r=!0,o=!1,i=void 0;try{for(var a,l=e.attrs[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;t.setAttribute(u.name,u.value)}}catch(y){o=!0,i=y}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}var s=!0,f=!1,c=void 0;try{for(var v,h=e.children[Symbol.iterator]();!(s=(v=h.next()).done);s=!0){var d=v.value;t.appendChild(this._create(d))}}catch(y){f=!0,c=y}finally{try{s||null==h.return||h.return()}finally{if(f)throw c}}return t}return n.isComponent(e),document.createTextNode("")}},{key:"_replace",value:function(e,t,r){e.replaceChild(this._create(r),t)}},{key:"_append",value:function(e,t){e.appendChild(this._create(t))}},{key:"_remove",value:function(t){(0,e.defer)(function(){return t.remove()})}}]),n}();exports.default=i;
},{"../utils":"FO+Z"}],"P/9A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c;var e=o(require("../runtime/virtual-audio")),n=o(require("../runtime/virtual-dom")),t=require("../utils");function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){return a(e)||l(e,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var u,l=e[Symbol.iterator]();!(o=(u=l.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(a){r=!0,i=a}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return t}function a(e){if(Array.isArray(e))return e}function c(o){var u,l,a,c,s,f=o.init,d=o.update,p=o.audio,y=o.view,m=o.listen,v=f,g=d,_=p,h=y,b=m,w=!1,$={audio:[],html:[],event:[]},S=function(e){return(0,t.defer)(function(){var n=g(e,a);Array.isArray(n)?E(n):E([n])})},E=function(e){var n=i(e,2),t=n[0],o=n[1],u=void 0===o?void 0:o;if(w&&console.time("Total update time"),w&&console.group("$update"),null==t)console.warn("Your update function returned undefined or null, the model will remain unchainged. Did you forget to handle all of your Actions?");else if(JSON.stringify(a)!==JSON.stringify(t)){a=t,w&&console.time("$audio");var l=_(a);c.update(l),w&&console.timeEnd("$audio"),w&&console.time("$view");var f=h(a);s.update(f),w&&console.timeEnd("$view"),w&&console.time("$events");var d=b(a);$.event.forEach(function(e){e.__update(d.filter(function(n){return n.__eventType===e.__eventType}))}),w&&console.timeEnd("$events")}u&&("object"===r(u)?u.run(S,a):u(S,a)),w&&console.groupEnd("$update"),w&&console.timeEnd("Total update time")};return{use:function(e){console.log("Registering ".concat(e.__pluginName," plugin.")),function(e){switch(e.__pluginType){case"audio":case"html":break;case"event":$.event.push(e)}}(e)},start:function(t){var o=t.context,r=t.root,i=t.flags;for(var a in(w=i&&i.debug||w)&&console.log("Starting Program..."),u=o,l=r,c=new e.default(u),s=new n.default(l),w&&console.log("Installing plugins..."),$)$[a].forEach(function(e){w&&console.log("Installing ".concat(e.__pluginName," plugin.")),e.__install({$context:u,$root:l,$dispatch:S})});w&&console.log("Running initial update..."),E([v(i,u.currentTime,l)])},send:function(e){S(e)}}}
},{"../runtime/virtual-audio":"geg8","../runtime/virtual-dom":"ERfL","../utils":"FO+Z"}],"N3PB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.batch=exports.none=void 0;var e=function(){};exports.none=e;var r=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e,t){return(r||[]).forEach(function(r){return r(e,t)})}};exports.batch=r;var t={none:e,batch:r};exports.default=t;
},{}],"RuQU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"instrument",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"effect",{enumerable:!0,get:function(){return t.default}});var e=r(require("./instrument")),t=r(require("./effect"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./instrument":"P/9A","./effect":"N3PB"}]},{},["RuQU"], null)
//# sourceMappingURL=/program/index.js.map