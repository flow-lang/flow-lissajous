// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"flow/program/index.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "geg8": [function (require, module, exports) {
    "use strict";

    function e(e, o) {
      return a(e) || n(e, o) || t();
    }

    function t() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function n(e, t) {
      var n = [],
          a = !0,
          o = !1,
          r = void 0;

      try {
        for (var c, i = e[Symbol.iterator](); !(a = (c = i.next()).done) && (n.push(c.value), !t || n.length !== t); a = !0) {
          ;
        }
      } catch (s) {
        o = !0, r = s;
      } finally {
        try {
          a || null == i.return || i.return();
        } finally {
          if (o) throw r;
        }
      }

      return n;
    }

    function a(e) {
      if (Array.isArray(e)) return e;
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }

    function c(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var i = function i(e) {
      return setTimeout(e, 0);
    },
        s = window.AudioContext || window.webkitAudioContext,
        d = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new s(),
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o(this, t), this.$context = e, this.$nodes = {
          $: this.$context.createGain()
        }, this.$nodes.$.gain.linearRampToValueAtTime(1, this.$context.currentTime + 1), this.$nodes.$.connect(this.$context.destination), this.vPrev = {}, n.autostart && this.resume();
      }

      return c(t, null, [{
        key: "prepare",
        value: function value() {
          return function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return t.forEach(function (o, r) {
              "RefNode" !== o.type && (n[o.key] = o), o.connections && e(o.connections, n, a + 1), a > 0 && (t[r] = {
                type: "RefNode",
                key: o.key
              });
            }), n;
          }(function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return t.forEach(function (t, a) {
              "RefNode" !== t.type && (t.key || (t.key = "".concat(n, "_").concat(a)), t.connections && t.connections.length > 0 && e(t.connections, t.key));
            }), t;
          }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []));
        }
      }, {
        key: "diff",
        value: function value(e, t) {
          for (var n = {
            created: [],
            updated: [],
            removed: []
          }, a = function a() {
            var t = r[o],
                a = e[t.key];
            if (a) {
              if (a.type !== t.type) n.updated.push({
                type: "node",
                key: t.key,
                data: t
              }), t.connections.forEach(function (e) {
                n.created.push({
                  type: "connection",
                  key: t.key,
                  data: e.key.split(".")
                });
              });else {
                for (var c = 0; c < Math.max(a.properties.length, t.properties.length); c++) {
                  var i = a.properties[c],
                      s = t.properties[c];
                  i ? s ? i.label !== s.label ? (n.removed.push({
                    type: "property",
                    key: a.key,
                    data: i
                  }), n.created.push({
                    type: "property",
                    key: a.key,
                    data: s
                  })) : i.value !== s.value && n.updated.push({
                    type: "property",
                    key: a.key,
                    data: s
                  }) : n.removed.push({
                    type: "property",
                    key: a.key,
                    data: i
                  }) : n.created.push({
                    type: "property",
                    key: a.key,
                    data: s
                  });
                }

                for (var d = 0; d < Math.max(a.connections.length, t.connections.length); d++) {
                  var u = a.connections[d],
                      l = t.connections[d];
                  u ? l ? u.key !== l.key && (n.removed.push({
                    type: "connection",
                    key: a.key,
                    data: u.key.split(".")
                  }), n.created.push({
                    type: "connection",
                    key: a.key,
                    data: l.key.split(".")
                  })) : n.removed.push({
                    type: "connection",
                    key: a.key,
                    data: u.key.split(".")
                  }) : n.created.push({
                    type: "connection",
                    key: a.key,
                    data: l.key.split(".")
                  });
                }
              }
            } else n.created.push({
              type: "node",
              key: t.key,
              data: t
            }), t.connections.forEach(function (e) {
              n.created.push({
                type: "connection",
                key: t.key,
                data: e.key.split(".")
              });
            });
            delete e[t.key];
          }, o = 0, r = Object.values(t); o < r.length; o++) {
            a();
          }

          for (var c = 0, i = Object.values(e); c < i.length; c++) {
            var s = i[c];
            n.removed.push({
              type: "node",
              key: s.key,
              data: s
            });
          }

          return n;
        }
      }]), c(t, [{
        key: "update",
        value: function value() {
          var e = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              a = t.prepare(n),
              o = t.diff(this.vPrev, a);
          o.removed.forEach(function (t) {
            switch (t.type) {
              case "node":
                e._destroyNode(t.key);

                break;

              case "property":
                e._removeProperty(t.key, t.data);

                break;

              case "connection":
                e._disconnect(t.key, t.data);

            }
          }), o.created.forEach(function (t) {
            switch (t.type) {
              case "node":
                e._createNode(t.key, t.data);

                break;

              case "property":
                e._setProperty(t.key, t.data);

                break;

              case "connection":
                i(function () {
                  return e._connect(t.key, t.data);
                });
            }
          }), o.updated.forEach(function (t) {
            switch (t.type) {
              case "node":
                e._destroyNode(t.key), e._createNode(t.key, t.data);
                break;

              case "property":
                e._setProperty(t.key, t.data);

            }
          }), this.vPrev = a;
        }
      }, {
        key: "suspend",
        value: function value() {
          this.$nodes.$.gain.value = 0, this.$context.suspend();
        }
      }, {
        key: "resume",
        value: function value() {
          this.$context.resume(), this.$nodes.$.gain.linearRampToValueAtTime(1, this.$context.currentTime + .1);
        }
      }, {
        key: "_createNode",
        value: function value(e, t) {
          var n = this,
              a = t.type,
              o = t.properties,
              r = null;

          switch (a) {
            case "AnalyserNode":
              r = this.$context.createAnalyser();
              break;

            case "AudioBufferSourceNode":
              r = this.$context.createBufferSource();
              break;

            case "AudioDestinationNode":
              r = this.$nodes.$;
              break;

            case "BiquadFilterNode":
              r = this.$context.createBiquadFilter();
              break;

            case "ChannelMergerNode":
              r = this.$context.createChannelMerger();
              break;

            case "ChannelSplitterNode":
              r = this.$context.createChannelSplitter();
              break;

            case "ConstantSourceNode":
              r = this.$context.createConstantSource();
              break;

            case "ConvolverNode":
              r = this.$context.createConvolver();
              break;

            case "DelayNode":
              var c = o.find(function (e) {
                return "maxDelayTime" === e.label;
              });
              r = this.$context.createDelay(c && c.value || 1);
              break;

            case "DynamicsCompressorNode":
              r = this.$context.createDynamicsCompressor();
              break;

            case "GainNode":
              r = this.$context.createGain();
              break;

            case "IIRFilterNode":
              var i = o.find(function (e) {
                return "feedforward" === e.label;
              }),
                  s = o.find(function (e) {
                return "feedback" === e.label;
              });
              r = this.$context.createIIRFilter(i && i.value || [0], s && s.value || [1]);
              break;

            case "MediaElementAudioSourceNode":
              var d = o.find(function (e) {
                return "mediaElement" === e.label;
              });
              r = this.$context.createMediaElementSource(document.querySelector(d.value));
              break;

            case "MediaStreamAudioDestinationNode":
              r = this.$context.createMediaStreamDestination();
              break;

            case "OscillatorNode":
              r = this.$context.createOscillator();
              break;

            case "PannerNode":
              r = this.$context.createPanner();
              break;

            case "StereoPannerNode":
              r = this.$context.createStereoPanner();
              break;

            case "WaveShaperNode":
              r = this.$context.createWaveShaper();
              break;

            default:
              console.warn("Invalide node type of: ".concat(a, ". Defaulting to GainNode to avoid crashing the AudioContext.")), r = this.$context.createGain();
          }

          this.$nodes[e] = r, o.forEach(function (t) {
            return n._setProperty(e, t);
          }), r.start && r.start();
        }
      }, {
        key: "_destroyNode",
        value: function value(e) {
          var t = this.$nodes[e];
          t.stop && t.stop(), t.disconnect(), delete this.$nodes[e];
        }
      }, {
        key: "_setProperty",
        value: function value(e, t) {
          var n = t.type,
              a = t.label,
              o = t.value,
              r = this.$nodes[e];

          switch (n) {
            case "NodeProperty":
              r[a] = o;
              break;

            case "AudioParam":
              r[a].linearRampToValueAtTime(o, this.$context.currentTime + .05);
              break;

            case "ScheduledAudioParam":
              r[a][o.method](o.target, o.time);
          }
        }
      }, {
        key: "_removeProperty",
        value: function value(e, t) {
          var n = t.type,
              a = t.label,
              o = (t.value, this.$nodes[e]);

          switch (n) {
            case "NodeProperty":
              break;

            case "AudioParam":
              o[a].value = o[a].linearRampToValueAtTime(o[a].default, this.$context.currentTime + .05);
          }
        }
      }, {
        key: "_connect",
        value: function value(t, n) {
          var a = e(n, 2),
              o = a[0],
              r = a[1],
              c = void 0 === r ? null : r;
          o && this.$nodes[t].connect(c ? this.$nodes[o][c] : this.$nodes[o]);
        }
      }, {
        key: "_disconnect",
        value: function value(t, n) {
          var a = e(n, 2),
              o = a[0],
              r = a[1],
              c = void 0 === r ? null : r;
          o && this.$nodes[t].disconnect(c ? this.$nodes[o][c] : this.$nodes[o]);
        }
      }]), t;
    }();

    exports.default = d;
  }, {}],
  "FO+Z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.defer = void 0;

    var e = function e(_e) {
      return setTimeout(_e, 0);
    };

    exports.defer = e;
  }, {}],
  "ERfL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../utils");

    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function n(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function o(e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    }

    var i = function () {
      function n(e) {
        for (r(this, n), this.$root = e, this.vPrev = null; this.$root.firstChild;) {
          this.$root.removeChild(this.$root.firstChild);
        }
      }

      return o(n, null, [{
        key: "isText",
        value: function value(e) {
          return "string" == typeof e || "number" == typeof e || "boolean" == typeof e;
        }
      }, {
        key: "isVirtualNode",
        value: function value(e) {
          return "object" === t(e) && e.attrs && e.children;
        }
      }, {
        key: "isComponent",
        value: function value(e) {
          return "function" == typeof e;
        }
      }]), o(n, [{
        key: "update",
        value: function value(e, r, o) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          r = r || this.vPrev;
          var a = (o = o || this.$root).childNodes[i];
          if (r && a) {
            if (e) {
              if (t(r) !== t(e)) this._replace(o, a, e);else if (n.isText(r) && n.isText(e)) r !== e && this._replace(o, a, e);else if (n.isVirtualNode(r) && n.isVirtualNode(e)) {
                if (r.tag !== e.tag) this._replace(o, a, e);else for (var l = 0; l < r.attrs.length || l < e.attrs.length; l++) {
                  var u = r.attrs[l],
                      s = e.attrs[l];
                  s ? a.setAttribute(s.name, s.value) : a.removeAttribute(u.name);
                }

                for (var f = 0; f < Math.max(r.children.length, e.children.length); f++) {
                  this.update(e.children[f], r.children[f], a, f);
                }
              } else n.isComponent(r) && n.isComponent(e);
            } else a && this._remove(a);
          } else this._append(o, e);
          this.vPrev = e;
        }
      }, {
        key: "_create",
        value: function value(e) {
          if (n.isText(e)) return document.createTextNode("".concat(e));

          if (n.isVirtualNode(e)) {
            var t = document.createElement(e.tag),
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, l = e.attrs[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                var u = a.value;
                t.setAttribute(u.name, u.value);
              }
            } catch (y) {
              o = !0, i = y;
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw i;
              }
            }

            var s = !0,
                f = !1,
                c = void 0;

            try {
              for (var v, h = e.children[Symbol.iterator](); !(s = (v = h.next()).done); s = !0) {
                var d = v.value;
                t.appendChild(this._create(d));
              }
            } catch (y) {
              f = !0, c = y;
            } finally {
              try {
                s || null == h.return || h.return();
              } finally {
                if (f) throw c;
              }
            }

            return t;
          }

          return n.isComponent(e), document.createTextNode("");
        }
      }, {
        key: "_replace",
        value: function value(e, t, r) {
          e.replaceChild(this._create(r), t);
        }
      }, {
        key: "_append",
        value: function value(e, t) {
          e.appendChild(this._create(t));
        }
      }, {
        key: "_remove",
        value: function value(t) {
          (0, e.defer)(function () {
            return t.remove();
          });
        }
      }]), n;
    }();

    exports.default = i;
  }, {
    "../utils": "FO+Z"
  }],
  "P/9A": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var e = o(require("../runtime/virtual-audio")),
        n = o(require("../runtime/virtual-dom")),
        t = require("../utils");

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function i(e, n) {
      return a(e) || l(e, n) || u();
    }

    function u() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function l(e, n) {
      var t = [],
          o = !0,
          r = !1,
          i = void 0;

      try {
        for (var u, l = e[Symbol.iterator](); !(o = (u = l.next()).done) && (t.push(u.value), !n || t.length !== n); o = !0) {
          ;
        }
      } catch (a) {
        r = !0, i = a;
      } finally {
        try {
          o || null == l.return || l.return();
        } finally {
          if (r) throw i;
        }
      }

      return t;
    }

    function a(e) {
      if (Array.isArray(e)) return e;
    }

    function c(o) {
      var u,
          l,
          a,
          c,
          s,
          f = o.init,
          d = o.update,
          p = o.audio,
          y = o.view,
          m = o.listen,
          v = f,
          g = d,
          _ = p,
          h = y,
          b = m,
          w = !1,
          $ = {
        audio: [],
        html: [],
        event: []
      },
          S = function S(e) {
        return (0, t.defer)(function () {
          var n = g(e, a);
          Array.isArray(n) ? E(n) : E([n]);
        });
      },
          E = function E(e) {
        var n = i(e, 2),
            t = n[0],
            o = n[1],
            u = void 0 === o ? void 0 : o;
        if (w && console.time("Total update time"), w && console.group("$update"), null == t) console.warn("Your update function returned undefined or null, the model will remain unchainged. Did you forget to handle all of your Actions?");else if (JSON.stringify(a) !== JSON.stringify(t)) {
          a = t, w && console.time("$audio");

          var l = _(a);

          c.update(l), w && console.timeEnd("$audio"), w && console.time("$view");
          var f = h(a);
          s.update(f), w && console.timeEnd("$view"), w && console.time("$events");
          var d = b(a);
          $.event.forEach(function (e) {
            e.__update(d.filter(function (n) {
              return n.__eventType === e.__eventType;
            }));
          }), w && console.timeEnd("$events");
        }
        u && ("object" === r(u) ? u.run(S, a) : u(S, a)), w && console.groupEnd("$update"), w && console.timeEnd("Total update time");
      };

      return {
        use: function use(e) {
          console.log("Registering ".concat(e.__pluginName, " plugin.")), function (e) {
            switch (e.__pluginType) {
              case "audio":
              case "html":
                break;

              case "event":
                $.event.push(e);
            }
          }(e);
        },
        start: function start(t) {
          var o = t.context,
              r = t.root,
              i = t.flags;

          for (var a in (w = i && i.debug || w) && console.log("Starting Program..."), u = o, l = r, c = new e.default(u), s = new n.default(l), w && console.log("Installing plugins..."), $) {
            $[a].forEach(function (e) {
              w && console.log("Installing ".concat(e.__pluginName, " plugin.")), e.__install({
                $context: u,
                $root: l,
                $dispatch: S
              });
            });
          }

          w && console.log("Running initial update..."), E([v(i, u.currentTime, l)]);
        },
        send: function send(e) {
          S(e);
        }
      };
    }
  }, {
    "../runtime/virtual-audio": "geg8",
    "../runtime/virtual-dom": "ERfL",
    "../utils": "FO+Z"
  }],
  "N3PB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.batch = exports.none = void 0;

    var e = function e() {};

    exports.none = e;

    var r = function r() {
      for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) {
        r[t] = arguments[t];
      }

      return function (e, t) {
        return (r || []).forEach(function (r) {
          return r(e, t);
        });
      };
    };

    exports.batch = r;
    var t = {
      none: e,
      batch: r
    };
    exports.default = t;
  }, {}],
  "RuQU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "instrument", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "effect", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    });
    var e = r(require("./instrument")),
        t = r(require("./effect"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./instrument": "P/9A",
    "./effect": "N3PB"
  }]
}, {}, ["RuQU"], null);
},{}],"flow/dom/index.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "RgX7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rtc = exports.rt = exports.rp = exports.rb = exports.q = exports.progress = exports.pre = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.element = void 0, exports.default = exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.text = exports.template = void 0;

    var r = function r(_r2) {
      return {
        tag: _r2,
        attrs: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        children: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
      };
    };

    exports.element = r;

    var t = function t(_t, e) {
      return r("a", _t, e);
    };

    exports.a = t;

    var e = function e(t, _e) {
      return r("abbr", t, _e);
    };

    exports.abbr = e;

    var o = function o(t, e) {
      return r("address", t, e);
    };

    exports.address = o;

    var n = function n(t, e) {
      return r("area", t, e);
    };

    exports.area = n;

    var s = function s(t, e) {
      return r("article", t, e);
    };

    exports.article = s;

    var p = function p(t, e) {
      return r("aside", t, e);
    };

    exports.aside = p;

    var u = function u(t, e) {
      return r("audio", t, e);
    };

    exports.audio = u;

    var a = function a(t, e) {
      return r("b", t, e);
    };

    exports.b = a;

    var x = function x(t, e) {
      return r("base", t, e);
    };

    exports.base = x;

    var i = function i(t, e) {
      return r("bdi", t, e);
    };

    exports.bdi = i;

    var c = function c(t, e) {
      return r("bdo", t, e);
    };

    exports.bdo = c;

    var f = function f(t, e) {
      return r("blockquote", t, e);
    };

    exports.blockquote = f;

    var v = function v(t, e) {
      return r("body", t, e);
    };

    exports.body = v;

    var d = function d(t, e) {
      return r("br", t, e);
    };

    exports.br = d;

    var l = function l(t, e) {
      return r("button", t, e);
    };

    exports.button = l;

    var m = function m(t, e) {
      return r("canvas", t, e);
    };

    exports.canvas = m;

    var b = function b(t, e) {
      return r("caption", t, e);
    };

    exports.caption = b;

    var h = function h(t, e) {
      return r("cite", t, e);
    };

    exports.cite = h;

    var g = function g(t, e) {
      return r("code", t, e);
    };

    exports.code = g;

    var y = function y(t, e) {
      return r("col", t, e);
    };

    exports.col = y;

    var k = function k(t, e) {
      return r("colgroup", t, e);
    };

    exports.colgroup = k;

    var q = function q(t, e) {
      return r("data", t, e);
    };

    exports.data = q;

    var j = function j(t, e) {
      return r("datalist", t, e);
    };

    exports.datalist = j;

    var _ = function _(t, e) {
      return r("dd", t, e);
    };

    exports.dd = _;

    var w = function w(t, e) {
      return r("del", t, e);
    };

    exports.del = w;

    var M = function M(t, e) {
      return r("details", t, e);
    };

    exports.details = M;

    var O = function O(t, e) {
      return r("dfn", t, e);
    };

    exports.dfn = O;

    var P = function P(t, e) {
      return r("dialog", t, e);
    };

    exports.dialog = P;

    var z = function z(t, e) {
      return r("div", t, e);
    };

    exports.div = z;

    var A = function A(t, e) {
      return r("dl", t, e);
    };

    exports.dl = A;

    var B = function B(t, e) {
      return r("dt", t, e);
    };

    exports.dt = B;

    var C = function C(t, e) {
      return r("em", t, e);
    };

    exports.em = C;

    var D = function D(t, e) {
      return r("embed", t, e);
    };

    exports.embed = D;

    var E = function E(t, e) {
      return r("fieldset", t, e);
    };

    exports.fieldset = E;

    var F = function F(t, e) {
      return r("figure", t, e);
    };

    exports.figure = F;

    var G = function G(t, e) {
      return r("footer", t, e);
    };

    exports.footer = G;

    var H = function H(t, e) {
      return r("form", t, e);
    };

    exports.form = H;

    var I = function I(t, e) {
      return r("h1", t, e);
    };

    exports.h1 = I;

    var J = function J(t, e) {
      return r("h2", t, e);
    };

    exports.h2 = J;

    var K = function K(t, e) {
      return r("h3", t, e);
    };

    exports.h3 = K;

    var L = function L(t, e) {
      return r("h4", t, e);
    };

    exports.h4 = L;

    var N = function N(t, e) {
      return r("h5", t, e);
    };

    exports.h5 = N;

    var Q = function Q(t, e) {
      return r("h6", t, e);
    };

    exports.h6 = Q;

    var R = function R(t, e) {
      return r("head", t, e);
    };

    exports.head = R;

    var S = function S(t, e) {
      return r("header", t, e);
    };

    exports.header = S;

    var T = function T(t, e) {
      return r("hgroup", t, e);
    };

    exports.hgroup = T;

    var U = function U(t, e) {
      return r("hr", t, e);
    };

    exports.hr = U;

    var V = function V(t, e) {
      return r("html", t, e);
    };

    exports.html = V;

    var W = function W(t, e) {
      return r("i", t, e);
    };

    exports.i = W;

    var X = function X(t, e) {
      return r("iframe", t, e);
    };

    exports.iframe = X;

    var Y = function Y(t, e) {
      return r("img", t, e);
    };

    exports.img = Y;

    var Z = function Z(t, e) {
      return r("input", t, e);
    };

    exports.input = Z;

    var $ = function $(t, e) {
      return r("ins", t, e);
    };

    exports.ins = $;

    var rr = function rr(t, e) {
      return r("kbd", t, e);
    };

    exports.kbd = rr;

    var tr = function tr(t, e) {
      return r("keygen", t, e);
    };

    exports.keygen = tr;

    var er = function er(t, e) {
      return r("label", t, e);
    };

    exports.label = er;

    var or = function or(t, e) {
      return r("legend", t, e);
    };

    exports.legend = or;

    var nr = function nr(t, e) {
      return r("li", t, e);
    };

    exports.li = nr;

    var sr = function sr(t, e) {
      return r("link", t, e);
    };

    exports.link = sr;

    var pr = function pr(t, e) {
      return r("main", t, e);
    };

    exports.main = pr;

    var ur = function ur(t, e) {
      return r("map", t, e);
    };

    exports.map = ur;

    var ar = function ar(t, e) {
      return r("mark", t, e);
    };

    exports.mark = ar;

    var xr = function xr(t, e) {
      return r("menu", t, e);
    };

    exports.menu = xr;

    var ir = function ir(t, e) {
      return r("menuitem", t, e);
    };

    exports.menuitem = ir;

    var cr = function cr(t, e) {
      return r("meta", t, e);
    };

    exports.meta = cr;

    var fr = function fr(t, e) {
      return r("meter", t, e);
    };

    exports.meter = fr;

    var vr = function vr(t, e) {
      return r("nav", t, e);
    };

    exports.nav = vr;

    var dr = function dr(t, e) {
      return r("noscript", t, e);
    };

    exports.noscript = dr;

    var lr = function lr(t, e) {
      return r("object", t, e);
    };

    exports.object = lr;

    var mr = function mr(t, e) {
      return r("ol", t, e);
    };

    exports.ol = mr;

    var br = function br(t, e) {
      return r("optgroup", t, e);
    };

    exports.optgroup = br;

    var hr = function hr(t, e) {
      return r("option", t, e);
    };

    exports.option = hr;

    var gr = function gr(t, e) {
      return r("output", t, e);
    };

    exports.output = gr;

    var yr = function yr(t, e) {
      return r("p", t, e);
    };

    exports.p = yr;

    var kr = function kr(t, e) {
      return r("param", t, e);
    };

    exports.param = kr;

    var qr = function qr(t, e) {
      return r("pre", t, e);
    };

    exports.pre = qr;

    var jr = function jr(t, e) {
      return r("progress", t, e);
    };

    exports.progress = jr;

    var _r = function _r(t, e) {
      return r("q", t, e);
    };

    exports.q = _r;

    var wr = function wr(t, e) {
      return r("rb", t, e);
    };

    exports.rb = wr;

    var Mr = function Mr(t, e) {
      return r("rp", t, e);
    };

    exports.rp = Mr;

    var Or = function Or(t, e) {
      return r("rt", t, e);
    };

    exports.rt = Or;

    var Pr = function Pr(t, e) {
      return r("rtc", t, e);
    };

    exports.rtc = Pr;

    var zr = function zr(t, e) {
      return r("ruby", t, e);
    };

    exports.ruby = zr;

    var Ar = function Ar(t, e) {
      return r("s", t, e);
    };

    exports.s = Ar;

    var Br = function Br(t, e) {
      return r("samp", t, e);
    };

    exports.samp = Br;

    var Cr = function Cr(t, e) {
      return r("script", t, e);
    };

    exports.script = Cr;

    var Dr = function Dr(t, e) {
      return r("section", t, e);
    };

    exports.section = Dr;

    var Er = function Er(t, e) {
      return r("select", t, e);
    };

    exports.select = Er;

    var Fr = function Fr(t, e) {
      return r("small", t, e);
    };

    exports.small = Fr;

    var Gr = function Gr(t, e) {
      return r("source", t, e);
    };

    exports.source = Gr;

    var Hr = function Hr(t, e) {
      return r("span", t, e);
    };

    exports.span = Hr;

    var Ir = function Ir(t, e) {
      return r("strong", t, e);
    };

    exports.strong = Ir;

    var Jr = function Jr(t, e) {
      return r("style", t, e);
    };

    exports.style = Jr;

    var Kr = function Kr(t, e) {
      return r("sub", t, e);
    };

    exports.sub = Kr;

    var Lr = function Lr(t, e) {
      return r("summary", t, e);
    };

    exports.summary = Lr;

    var Nr = function Nr(t, e) {
      return r("sup", t, e);
    };

    exports.sup = Nr;

    var Qr = function Qr(t, e) {
      return r("table", t, e);
    };

    exports.table = Qr;

    var Rr = function Rr(t, e) {
      return r("tbody", t, e);
    };

    exports.tbody = Rr;

    var Sr = function Sr(t, e) {
      return r("td", t, e);
    };

    exports.td = Sr;

    var Tr = function Tr(t, e) {
      return r("template", t, e);
    };

    exports.template = Tr;

    var Ur = function Ur(r) {
      return "".concat(r);
    };

    exports.text = Ur;

    var Vr = function Vr(t, e) {
      return r("textarea", t, e);
    };

    exports.textarea = Vr;

    var Wr = function Wr(t, e) {
      return r("tfoot", t, e);
    };

    exports.tfoot = Wr;

    var Xr = function Xr(t, e) {
      return r("th", t, e);
    };

    exports.th = Xr;

    var Yr = function Yr(t, e) {
      return r("thead", t, e);
    };

    exports.thead = Yr;

    var Zr = function Zr(t, e) {
      return r("time", t, e);
    };

    exports.time = Zr;

    var $r = function $r(t, e) {
      return r("title", t, e);
    };

    exports.title = $r;

    var rt = function rt(t, e) {
      return r("tr", t, e);
    };

    exports.tr = rt;

    var tt = function tt(t, e) {
      return r("track", t, e);
    };

    exports.track = tt;

    var et = function et(t, e) {
      return r("u", t, e);
    };

    exports.u = et;

    var ot = function ot(t, e) {
      return r("ul", t, e);
    };

    exports.ul = ot;

    var nt = function nt(t, e) {
      return r("var", t, e);
    };

    exports.var_ = nt;

    var st = function st(t, e) {
      return r("video", t, e);
    };

    exports.video = st;

    var pt = function pt(t, e) {
      return r("wbr", t, e);
    };

    exports.wbr = pt;
    var ut = {
      element: r,
      a: t,
      abbr: e,
      address: o,
      area: n,
      article: s,
      aside: p,
      audio: u,
      b: a,
      base: x,
      bdi: i,
      bdo: c,
      blockquote: f,
      body: v,
      br: d,
      button: l,
      canvas: m,
      caption: b,
      cite: h,
      code: g,
      col: y,
      colgroup: k,
      data: q,
      datalist: j,
      dd: _,
      del: w,
      details: M,
      dfn: O,
      dialog: P,
      div: z,
      dl: A,
      dt: B,
      em: C,
      embed: D,
      fieldset: E,
      figure: F,
      footer: G,
      form: H,
      h1: I,
      h2: J,
      h3: K,
      h4: L,
      h5: N,
      h6: Q,
      head: R,
      header: S,
      hgroup: T,
      hr: U,
      html: V,
      i: W,
      iframe: X,
      img: Y,
      input: Z,
      ins: $,
      kbd: rr,
      keygen: tr,
      label: er,
      legend: or,
      li: nr,
      link: sr,
      main: pr,
      map: ur,
      mark: ar,
      menu: xr,
      menuitem: ir,
      meta: cr,
      meter: fr,
      nav: vr,
      noscript: dr,
      object: lr,
      ol: mr,
      optgroup: br,
      option: hr,
      output: gr,
      p: yr,
      param: kr,
      pre: qr,
      progress: jr,
      q: _r,
      rb: wr,
      rp: Mr,
      rt: Or,
      rtc: Pr,
      ruby: zr,
      s: Ar,
      samp: Br,
      script: Cr,
      section: Dr,
      select: Er,
      small: Fr,
      source: Gr,
      span: Hr,
      strong: Ir,
      style: Jr,
      sub: Kr,
      summary: Lr,
      sup: Nr,
      table: Qr,
      tbody: Rr,
      td: Sr,
      template: Tr,
      text: Ur,
      textarea: Vr,
      tfoot: Wr,
      th: Xr,
      thead: Yr,
      time: Zr,
      title: $r,
      tr: rt,
      track: tt,
      u: et,
      ul: ot,
      var_: nt,
      video: st,
      wbr: pt
    };
    exports.default = ut;
  }, {}],
  "idhG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.shape = exports.selected = exports.scoped = exports.scope = exports.sandbox = exports.rowspan = exports.rows = exports.reversed = exports.required = exports.rel = exports.referrerpolicy = exports.readonly = exports.radiogroup = exports.preload = exports.poster = exports.placeholder = exports.ping = exports.pattern = exports.optimum = exports.open = exports.novalidate = exports.name = exports.muted = exports.multiple = exports.min = exports.method = exports.media = exports.minlength = exports.maxlength = exports.max = exports.manifest = exports.low = exports.loop = exports.list = exports.lazyload = exports.language = exports.lang = exports.label = exports.kind = exports.keytype = exports.itemprop = exports.ismap = exports.integrity = exports.importance = exports.id = exports.icon = exports.httpEquiv = exports.hreflang = exports.href = exports.high = exports.hidden = exports.height = exports.headers = exports.formaction = exports.form = exports.for_ = exports.enctype = exports.dropzone = exports.draggable = exports.download = exports.disabled = exports.dirname = exports.dir = exports.defer = exports.default_ = exports.decoding = exports.datetime = exports.dataCustom = exports.data = exports.csp = exports.crossorigin = exports.coords = exports.controls = exports.contextmenu = exports.contenteditable = exports.content = exports.colspan = exports.cols = exports.color = exports.codebase = exports.code = exports.className = exports.cite = exports.checked = exports.charset = exports.challenge = exports.buffered = exports.autoplay = exports.autofocus = exports.autocomplete = exports.autocapitalize = exports.async = exports.alt = exports.allow = exports.align = exports.action = exports.accesskey = exports.acceptCharset = exports.accept = exports.attribute = void 0, exports.default = exports.wrap = exports.width = exports.value = exports.usemap = exports.type = exports.translate = exports.title = exports.target = exports.tabindex = exports.summary = exports.style = exports.step = exports.start = exports.srcset = exports.srclang = exports.srcdoc = exports.src = exports.spellcheck = exports.span = exports.slot = exports.sizes = exports.size = void 0;

    var r = function r(_r3, e) {
      return {
        name: _r3,
        value: e
      };
    };

    exports.attribute = r;

    var e = function e(_e2) {
      return r("accept", _e2);
    };

    exports.accept = e;

    var t = function t(e) {
      return r("accept-charset", e);
    };

    exports.acceptCharset = t;

    var o = function o(e) {
      return r("accesskey", e);
    };

    exports.accesskey = o;

    var n = function n(e) {
      return r("action", e);
    };

    exports.action = n;

    var s = function s(e) {
      return r("align", e);
    };

    exports.align = s;

    var a = function a(e) {
      return r("allow", e);
    };

    exports.allow = a;

    var p = function p(e) {
      return r("alt", e);
    };

    exports.alt = p;

    var u = function u(e) {
      return r("async", e);
    };

    exports.async = u;

    var c = function c(e) {
      return r("autocapitalize", e);
    };

    exports.autocapitalize = c;

    var i = function i(e) {
      return r("autocomplete", e);
    };

    exports.autocomplete = i;

    var x = function x(e) {
      return r("autofocus", e);
    };

    exports.autofocus = x;

    var l = function l(e) {
      return r("autoplay", e);
    };

    exports.autoplay = l;

    var d = function d(e) {
      return r("buffered", e);
    };

    exports.buffered = d;

    var f = function f(e) {
      return r("challenge", e);
    };

    exports.challenge = f;

    var v = function v(e) {
      return r("charset", e);
    };

    exports.charset = v;

    var m = function m(e) {
      return r("checked", e);
    };

    exports.checked = m;

    var h = function h(e) {
      return r("cite", e);
    };

    exports.cite = h;

    var g = function g(e) {
      return r("class", e);
    };

    exports.className = g;

    var y = function y(e) {
      return r("code", e);
    };

    exports.code = y;

    var b = function b(e) {
      return r("codebase", e);
    };

    exports.codebase = b;

    var w = function w(e) {
      return r("color", e);
    };

    exports.color = w;

    var k = function k(e) {
      return r("cols", e);
    };

    exports.cols = k;

    var z = function z(e) {
      return r("colspan", e);
    };

    exports.colspan = z;

    var q = function q(e) {
      return r("content", e);
    };

    exports.content = q;

    var _ = function _(e) {
      return r("contenteditable", e);
    };

    exports.contenteditable = _;

    var C = function C(e) {
      return r("contextmenu", e);
    };

    exports.contextmenu = C;

    var E = function E(e) {
      return r("controls", e);
    };

    exports.controls = E;

    var N = function N(e) {
      return r("coords", e);
    };

    exports.coords = N;

    var j = function j(e) {
      return r("crossorigin", e);
    };

    exports.crossorigin = j;

    var M = function M(e) {
      return r("csp", e);
    };

    exports.csp = M;

    var O = function O(e) {
      return r("data", e);
    };

    exports.data = O;

    var P = function P(e, t) {
      return r("data-".concat(e), t);
    };

    exports.dataCustom = P;

    var A = function A(e) {
      return r("datetime", e);
    };

    exports.datetime = A;

    var B = function B(e) {
      return r("decoding", e);
    };

    exports.decoding = B;

    var D = function D(e) {
      return r("default", e);
    };

    exports.default_ = D;

    var F = function F(e) {
      return r("defer", e);
    };

    exports.defer = F;

    var G = function G(e) {
      return r("dir", e);
    };

    exports.dir = G;

    var H = function H(e) {
      return r("dirname", e);
    };

    exports.dirname = H;

    var I = function I(e) {
      return r("disabled", e);
    };

    exports.disabled = I;

    var J = function J(e) {
      return r("download", e);
    };

    exports.download = J;

    var K = function K(e) {
      return r("draggable", e);
    };

    exports.draggable = K;

    var L = function L(e) {
      return r("dropzone", e);
    };

    exports.dropzone = L;

    var Q = function Q(e) {
      return r("enctype", e);
    };

    exports.enctype = Q;

    var R = function R(e) {
      return r("for", e);
    };

    exports.for_ = R;

    var S = function S(e) {
      return r("form", e);
    };

    exports.form = S;

    var T = function T(e) {
      return r("formaction", e);
    };

    exports.formaction = T;

    var U = function U(e) {
      return r("headers", e);
    };

    exports.headers = U;

    var V = function V(e) {
      return r("height", e);
    };

    exports.height = V;

    var W = function W(e) {
      return r("hidden", e);
    };

    exports.hidden = W;

    var X = function X(e) {
      return r("high", e);
    };

    exports.high = X;

    var Y = function Y(e) {
      return r("href", e);
    };

    exports.href = Y;

    var Z = function Z(e) {
      return r("hreflang", e);
    };

    exports.hreflang = Z;

    var $ = function $(e) {
      return r("http-equiv", e);
    };

    exports.httpEquiv = $;

    var rr = function rr(e) {
      return r("icon", e);
    };

    exports.icon = rr;

    var er = function er(e) {
      return r("id", e);
    };

    exports.id = er;

    var tr = function tr(e) {
      return r("importance", e);
    };

    exports.importance = tr;

    var or = function or(e) {
      return r("integrity", e);
    };

    exports.integrity = or;

    var nr = function nr(e) {
      return r("ismap", e);
    };

    exports.ismap = nr;

    var sr = function sr(e) {
      return r("itemprop", e);
    };

    exports.itemprop = sr;

    var ar = function ar(e) {
      return r("keytype", e);
    };

    exports.keytype = ar;

    var pr = function pr(e) {
      return r("kind", e);
    };

    exports.kind = pr;

    var ur = function ur(e) {
      return r("label", e);
    };

    exports.label = ur;

    var cr = function cr(e) {
      return r("lang", e);
    };

    exports.lang = cr;

    var ir = function ir(e) {
      return r("language", e);
    };

    exports.language = ir;

    var xr = function xr(e) {
      return r("lazyload", e);
    };

    exports.lazyload = xr;

    var lr = function lr(e) {
      return r("list", e);
    };

    exports.list = lr;

    var dr = function dr(e) {
      return r("loop", e);
    };

    exports.loop = dr;

    var fr = function fr(e) {
      return r("low", e);
    };

    exports.low = fr;

    var vr = function vr(e) {
      return r("manifest", e);
    };

    exports.manifest = vr;

    var mr = function mr(e) {
      return r("max", e);
    };

    exports.max = mr;

    var hr = function hr(e) {
      return r("maxlength", e);
    };

    exports.maxlength = hr;

    var gr = function gr(e) {
      return r("minlength", e);
    };

    exports.minlength = gr;

    var yr = function yr(e) {
      return r("media", e);
    };

    exports.media = yr;

    var br = function br(e) {
      return r("method", e);
    };

    exports.method = br;

    var wr = function wr(e) {
      return r("min", e);
    };

    exports.min = wr;

    var kr = function kr(e) {
      return r("multiple", e);
    };

    exports.multiple = kr;

    var zr = function zr(e) {
      return r("muted", e);
    };

    exports.muted = zr;

    var qr = function qr(e) {
      return r("name", e);
    };

    exports.name = qr;

    var _r = function _r(e) {
      return r("novalidate", e);
    };

    exports.novalidate = _r;

    var Cr = function Cr(e) {
      return r("open", e);
    };

    exports.open = Cr;

    var Er = function Er(e) {
      return r("optimum", e);
    };

    exports.optimum = Er;

    var Nr = function Nr(e) {
      return r("pattern", e);
    };

    exports.pattern = Nr;

    var jr = function jr(e) {
      return r("ping", e);
    };

    exports.ping = jr;

    var Mr = function Mr(e) {
      return r("placeholder", e);
    };

    exports.placeholder = Mr;

    var Or = function Or(e) {
      return r("poster", e);
    };

    exports.poster = Or;

    var Pr = function Pr(e) {
      return r("preload", e);
    };

    exports.preload = Pr;

    var Ar = function Ar(e) {
      return r("radiogroup", e);
    };

    exports.radiogroup = Ar;

    var Br = function Br(e) {
      return r("readonly", e);
    };

    exports.readonly = Br;

    var Dr = function Dr(e) {
      return r("referrerpolicy", e);
    };

    exports.referrerpolicy = Dr;

    var Fr = function Fr(e) {
      return r("rel", e);
    };

    exports.rel = Fr;

    var Gr = function Gr(e) {
      return r("required", e);
    };

    exports.required = Gr;

    var Hr = function Hr(e) {
      return r("reversed", e);
    };

    exports.reversed = Hr;

    var Ir = function Ir(e) {
      return r("rows", e);
    };

    exports.rows = Ir;

    var Jr = function Jr(e) {
      return r("rowspan", e);
    };

    exports.rowspan = Jr;

    var Kr = function Kr(e) {
      return r("sandbox", e);
    };

    exports.sandbox = Kr;

    var Lr = function Lr(e) {
      return r("scope", e);
    };

    exports.scope = Lr;

    var Qr = function Qr(e) {
      return r("scoped", e);
    };

    exports.scoped = Qr;

    var Rr = function Rr(e) {
      return r("selected", e);
    };

    exports.selected = Rr;

    var Sr = function Sr(e) {
      return r("shape", e);
    };

    exports.shape = Sr;

    var Tr = function Tr(e) {
      return r("size", e);
    };

    exports.size = Tr;

    var Ur = function Ur(e) {
      return r("sizes", e);
    };

    exports.sizes = Ur;

    var Vr = function Vr(e) {
      return r("slot", e);
    };

    exports.slot = Vr;

    var Wr = function Wr(e) {
      return r("span", e);
    };

    exports.span = Wr;

    var Xr = function Xr(e) {
      return r("spellcheck", e);
    };

    exports.spellcheck = Xr;

    var Yr = function Yr(e) {
      return r("src", e);
    };

    exports.src = Yr;

    var Zr = function Zr(e) {
      return r("srcdoc", e);
    };

    exports.srcdoc = Zr;

    var $r = function $r(e) {
      return r("srclang", e);
    };

    exports.srclang = $r;

    var re = function re(e) {
      return r("srcset", e);
    };

    exports.srcset = re;

    var ee = function ee(e) {
      return r("start", e);
    };

    exports.start = ee;

    var te = function te(e) {
      return r("step", e);
    };

    exports.step = te;

    var oe = function oe(e) {
      return r("style", e);
    };

    exports.style = oe;

    var ne = function ne(e) {
      return r("summary", e);
    };

    exports.summary = ne;

    var se = function se(e) {
      return r("tabindex", e);
    };

    exports.tabindex = se;

    var ae = function ae(e) {
      return r("target", e);
    };

    exports.target = ae;

    var pe = function pe(e) {
      return r("title", e);
    };

    exports.title = pe;

    var ue = function ue(e) {
      return r("translate", e);
    };

    exports.translate = ue;

    var ce = function ce(e) {
      return r("type", e);
    };

    exports.type = ce;

    var ie = function ie(e) {
      return r("usemap", e);
    };

    exports.usemap = ie;

    var xe = function xe(e) {
      return r("value", e);
    };

    exports.value = xe;

    var le = function le(e) {
      return r("width", e);
    };

    exports.width = le;

    var de = function de(e) {
      return r("wrap", e);
    };

    exports.wrap = de;
    var fe = {
      attribute: r,
      accept: e,
      acceptCharset: t,
      accesskey: o,
      action: n,
      align: s,
      allow: a,
      alt: p,
      async: u,
      autocapitalize: c,
      autocomplete: i,
      autofocus: x,
      autoplay: l,
      buffered: d,
      challenge: f,
      charset: v,
      checked: m,
      cite: h,
      className: g,
      code: y,
      codebase: b,
      color: w,
      cols: k,
      colspan: z,
      content: q,
      contenteditable: _,
      contextmenu: C,
      controls: E,
      coords: N,
      crossorigin: j,
      csp: M,
      data: O,
      dataCustom: P,
      datetime: A,
      decoding: B,
      default_: D,
      defer: F,
      dir: G,
      dirname: H,
      disabled: I,
      download: J,
      draggable: K,
      dropzone: L,
      enctype: Q,
      for_: R,
      form: S,
      formaction: T,
      headers: U,
      height: V,
      hidden: W,
      high: X,
      href: Y,
      hreflang: Z,
      httpEquiv: $,
      icon: rr,
      id: er,
      importance: tr,
      integrity: or,
      ismap: nr,
      itemprop: sr,
      keytype: ar,
      kind: pr,
      label: ur,
      lang: cr,
      language: ir,
      lazyload: xr,
      list: lr,
      loop: dr,
      low: fr,
      manifest: vr,
      max: mr,
      maxlength: hr,
      minlength: gr,
      media: yr,
      method: br,
      min: wr,
      multiple: kr,
      muted: zr,
      name: qr,
      novalidate: _r,
      open: Cr,
      optimum: Er,
      pattern: Nr,
      ping: jr,
      placeholder: Mr,
      poster: Or,
      preload: Pr,
      radiogroup: Ar,
      readonly: Br,
      referrerpolicy: Dr,
      rel: Fr,
      required: Gr,
      reversed: Hr,
      rows: Ir,
      rowspan: Jr,
      sandbox: Kr,
      scope: Lr,
      scoped: Qr,
      selected: Rr,
      shape: Sr,
      size: Tr,
      sizes: Ur,
      slot: Vr,
      span: Wr,
      spellcheck: Xr,
      src: Yr,
      srcdoc: Zr,
      srclang: $r,
      srcset: re,
      start: ee,
      step: te,
      style: oe,
      summary: ne,
      tabindex: se,
      target: ae,
      title: pe,
      translate: ue,
      type: ce,
      usemap: ie,
      value: xe,
      width: le,
      wrap: de
    };
    exports.default = fe;
  }, {}],
  "8q2w": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
      }

      return t;
    }

    function r(r) {
      for (var o = 1; o < arguments.length; o++) {
        var n = null != arguments[o] ? arguments[o] : {};
        o % 2 ? e(n, !0).forEach(function (e) {
          t(r, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : e(n).forEach(function (e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return r;
    }

    function t(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.lostpointercapture = exports.gotpointercapture = exports.pointerleave = exports.pointerout = exports.pointercancel = exports.pointerup = exports.pointermove = exports.pointerdown = exports.pointerenter = exports.pointerover = exports.touchstart = exports.touchmove = exports.touchleave = exports.touchenter = exports.touchend = exports.touchcancel = exports.userproximity = exports.orientationchange = exports.deviceproximity = exports.deviceorientation = exports.devicemotion = exports.devicelight = exports.compassneedscalibration = exports.ValueChange = exports.readystatechange = exports.RadioStateChange = exports.input = exports.hashchange = exports.CheckboxStateChange = exports.broadcast = exports.drop = exports.dragover = exports.dragleave = exports.dragstart = exports.dragenter = exports.dragend = exports.drag = exports.wheel = exports.select = exports.pointerlockerror = exports.pointerlockchange = exports.mouseup = exports.mouseout = exports.mouseover = exports.mousemove = exports.mouseleave = exports.mouseenter = exports.mousedown = exports.dblclick = exports.contextmenu = exports.click = exports.auxclick = exports.keyup = exports.keypress = exports.keydown = exports.paste = exports.copy = exports.cut = exports.scroll = exports.resize = exports.fullscreenerror = exports.fullscreenchange = exports.submit = exports.reset = exports.blur = exports.focus = exports.event = void 0;

    var o = function o(e, r, t) {
      return {
        __eventType: "DOM",
        selector: e,
        eventName: r,
        handler: t,
        opts: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
    };

    exports.event = o;

    var n = function n(e, r, t) {
      return o(e, "focus", r, t);
    };

    exports.focus = n;

    var u = function u(e, r, t) {
      return o(e, "blur", r, t);
    };

    exports.blur = u;

    var c = function c(e, r, t) {
      return o(e, "reset", r, t);
    };

    exports.reset = c;

    var s = function s(e, r, t) {
      return o(e, "submit", r, t);
    };

    exports.submit = s;

    var a = function a(e, r, t) {
      return o(e, "fullscreenchange", r, t);
    };

    exports.fullscreenchange = a;

    var i = function i(e, r, t) {
      return o(e, "fullscreenerror", r, t);
    };

    exports.fullscreenerror = i;

    var p = function p(e, r, t) {
      return o(e, "resize", r, t);
    };

    exports.resize = p;

    var v = function v(e, r, t) {
      return o(e, "scroll", r, t);
    };

    exports.scroll = v;

    var l = function l(e, r, t) {
      return o(e, "cut", r, t);
    };

    exports.cut = l;

    var x = function x(e, r, t) {
      return o(e, "copy", r, t);
    };

    exports.copy = x;

    var d = function d(e, r, t) {
      return o(e, "paste", r, t);
    };

    exports.paste = d;

    var f = function f(e, r, t) {
      return o(e, "keydown", r, t);
    };

    exports.keydown = f;

    var h = function h(e, r, t) {
      return o(e, "keypress", r, t);
    };

    exports.keypress = h;

    var g = function g(e, r, t) {
      return o(e, "keyup", r, t);
    };

    exports.keyup = g;

    var m = function m(e, r, t) {
      return o(e, "auxclick", r, t);
    };

    exports.auxclick = m;

    var y = function y(e, r, t) {
      return o(e, "click", r, t);
    };

    exports.click = y;

    var b = function b(e, r, t) {
      return o(e, "contextmenu", r, t);
    };

    exports.contextmenu = b;

    var k = function k(e, r, t) {
      return o(e, "dblclick", r, t);
    };

    exports.dblclick = k;

    var w = function w(e, r, t) {
      return o(e, "mousedown", r, t);
    };

    exports.mousedown = w;

    var C = function C(e, r, t) {
      return o(e, "mouseenter", r, t);
    };

    exports.mouseenter = C;

    var O = function O(e, r, t) {
      return o(e, "mouseleave", r, t);
    };

    exports.mouseleave = O;

    var _ = function _(e, r, t) {
      return o(e, "mousemove", r, t);
    };

    exports.mousemove = _;

    var S = function S(e, r, t) {
      return o(e, "mouseover", r, t);
    };

    exports.mouseover = S;

    var $ = function $(e, r, t) {
      return o(e, "mouseout", r, t);
    };

    exports.mouseout = $;

    var j = function j(e, r, t) {
      return o(e, "mouseup", r, t);
    };

    exports.mouseup = j;

    var P = function P(e, r, t) {
      return o(e, "pointerlockchange", r, t);
    };

    exports.pointerlockchange = P;

    var D = function D(e, r, t) {
      return o(e, "pointerlockerror", r, t);
    };

    exports.pointerlockerror = D;

    var E = function E(e, r, t) {
      return o(e, "select", r, t);
    };

    exports.select = E;

    var z = function z(e, r, t) {
      return o(e, "wheel", r, t);
    };

    exports.wheel = z;

    var R = function R(e, r, t) {
      return o(e, "drag", r, t);
    };

    exports.drag = R;

    var V = function V(e, r, t) {
      return o(e, "dragend", r, t);
    };

    exports.dragend = V;

    var G = function G(e, r, t) {
      return o(e, "dragenter", r, t);
    };

    exports.dragenter = G;

    var M = function M(e, r, t) {
      return o(e, "dragstart", r, t);
    };

    exports.dragstart = M;

    var N = function N(e, r, t) {
      return o(e, "dragleave", r, t);
    };

    exports.dragleave = N;

    var T = function T(e, r, t) {
      return o(e, "dragover", r, t);
    };

    exports.dragover = T;

    var H = function H(e, r, t) {
      return o(e, "drop", r, t);
    };

    exports.drop = H;

    var L = function L(e, r, t) {
      return o(e, "broadcast", r, t);
    };

    exports.broadcast = L;

    var q = function q(e, r, t) {
      return o(e, "CheckboxStateChange", r, t);
    };

    exports.CheckboxStateChange = q;

    var A = function A(e, r, t) {
      return o(e, "hashchange", r, t);
    };

    exports.hashchange = A;

    var B = function B(e, r, t) {
      return o(e, "input", r, t);
    };

    exports.input = B;

    var F = function F(e, r, t) {
      return o(e, "RadioStateChange", r, t);
    };

    exports.RadioStateChange = F;

    var I = function I(e, r, t) {
      return o(e, "readystatechange", r, t);
    };

    exports.readystatechange = I;

    var J = function J(e, r, t) {
      return o(e, "ValueChange", r, t);
    };

    exports.ValueChange = J;

    var K = function K(e, r, t) {
      return o(e, "compassneedscalibration", r, t);
    };

    exports.compassneedscalibration = K;

    var Q = function Q(e, r, t) {
      return o(e, "devicelight", r, t);
    };

    exports.devicelight = Q;

    var U = function U(e, r, t) {
      return o(e, "devicemotion", r, t);
    };

    exports.devicemotion = U;

    var W = function W(e, r, t) {
      return o(e, "deviceorientation", r, t);
    };

    exports.deviceorientation = W;

    var X = function X(e, r, t) {
      return o(e, "deviceproximity", r, t);
    };

    exports.deviceproximity = X;

    var Y = function Y(e, r, t) {
      return o(e, "orientationchange", r, t);
    };

    exports.orientationchange = Y;

    var Z = function Z(e, r, t) {
      return o(e, "userproximity", r, t);
    };

    exports.userproximity = Z;

    var ee = function ee(e, r, t) {
      return o(e, "touchcancel", r, t);
    };

    exports.touchcancel = ee;

    var re = function re(e, r, t) {
      return o(e, "touchend", r, t);
    };

    exports.touchend = re;

    var te = function te(e, r, t) {
      return o(e, "touchenter", r, t);
    };

    exports.touchenter = te;

    var oe = function oe(e, r, t) {
      return o(e, "touchleave", r, t);
    };

    exports.touchleave = oe;

    var ne = function ne(e, r, t) {
      return o(e, "touchmove", r, t);
    };

    exports.touchmove = ne;

    var ue = function ue(e, r, t) {
      return o(e, "touchstart", r, t);
    };

    exports.touchstart = ue;

    var ce = function ce(e, r, t) {
      return o(e, "pointerover", r, t);
    };

    exports.pointerover = ce;

    var se = function se(e, r, t) {
      return o(e, "pointerenter", r, t);
    };

    exports.pointerenter = se;

    var ae = function ae(e, r, t) {
      return o(e, "pointerdown", r, t);
    };

    exports.pointerdown = ae;

    var ie = function ie(e, r, t) {
      return o(e, "pointermove", r, t);
    };

    exports.pointermove = ie;

    var pe = function pe(e, r, t) {
      return o(e, "pointerup", r, t);
    };

    exports.pointerup = pe;

    var ve = function ve(e, r, t) {
      return o(e, "pointercancel", r, t);
    };

    exports.pointercancel = ve;

    var le = function le(e, r, t) {
      return o(e, "pointerout", r, t);
    };

    exports.pointerout = le;

    var xe = function xe(e, r, t) {
      return o(e, "pointerleave", r, t);
    };

    exports.pointerleave = xe;

    var de = function de(e, r, t) {
      return o(e, "gotpointercapture", r, t);
    };

    exports.gotpointercapture = de;

    var fe = function fe(e, r, t) {
      return o(e, "lostpointercapture", r, t);
    };

    exports.lostpointercapture = fe;
    var he = {
      event: o,
      focus: n,
      blur: u,
      reset: c,
      submit: s,
      fullscreenchange: a,
      fullscreenerror: i,
      resize: p,
      scroll: v,
      cut: l,
      copy: x,
      paste: d,
      keydown: f,
      keypress: h,
      keyup: g,
      auxclick: m,
      click: y,
      contextmenu: b,
      dblclick: k,
      mousedown: w,
      mouseenter: C,
      mouseleave: O,
      mousemove: _,
      mouseover: S,
      mouseout: $,
      mouseup: j,
      pointerlockchange: P,
      pointerlockerror: D,
      select: E,
      wheel: z,
      drag: R,
      dragend: V,
      dragenter: G,
      dragstart: M,
      dragleave: N,
      dragover: T,
      drop: H,
      broadcast: L,
      CheckboxStateChange: q,
      hashchange: A,
      input: B,
      RadioStateChange: F,
      readystatechange: I,
      ValueChange: J,
      compassneedscalibration: K,
      devicelight: Q,
      devicemotion: U,
      deviceorientation: W,
      deviceproximity: X,
      orientationchange: Y,
      userproximity: Z,
      touchcancel: ee,
      touchend: re,
      touchenter: te,
      touchleave: oe,
      touchmove: ne,
      touchstart: ue,
      pointerover: ce,
      pointerenter: se,
      pointerdown: ae,
      pointermove: ie,
      pointerup: pe,
      pointercancel: ve,
      pointerout: le,
      pointerleave: xe,
      gotpointercapture: de,
      lostpointercapture: fe,
      __pluginType: "event",
      __pluginName: "Html.Event",
      __eventType: "DOM",
      __install: function __install(e) {
        var r = this,
            t = e.$dispatch;
        this.$dispatch = t, ge.forEach(function (e) {
          r.$events[e] = [], window.addEventListener(e, function (t) {
            r.$events[e].forEach(function (e) {
              var o = e.selector,
                  n = e.handler;
              (r.$isGlobal(o) || t.target.matches(o)) && n(t);
            });
          });
        });
      },
      __update: function __update(e) {
        var t = this;
        e = e.map(function (e) {
          var o = e.opts.specific || t.$isGlobal(e.selector) ? e.selector : "".concat(e.selector, ", ").concat(e.selector, " > *");
          return r({}, e, {
            handler: function handler(r) {
              return t.$dispatch(e.handler(r));
            },
            selector: o
          });
        });

        var o = function o(r) {
          t.$events[r] = e.filter(function (e) {
            return e.eventName === r;
          });
        };

        for (var n in this.$events) {
          o(n);
        }
      },
      $dispatch: null,
      $events: {},
      $isGlobal: function $isGlobal(e) {
        return "document" === e || "window" === e;
      }
    };
    exports.default = he;
    var ge = ["focus", "blur", "reset", "submit", "fullscreenchange", "fullscreenerror", "resize", "scroll", "cut", "copy", "paste", "keydown", "keypress", "keyup", "auxclick", "click", "contextmenu", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "mouseup", "pointerlockchange", "pointerlockerror", "select", "wheel", "drag", "dragend", "dragenter", "dragstart", "dragleave", "dragover", "drop", "broadcast", "CheckboxStateChange", "hashchange", "input", "RadioStateChange", "readystatechange", "ValueChange", "compassneedscalibration", "devicelight", "devicemotion", "deviceorientation", "deviceproximity", "orientationchange", "userproximity", "touchcancel", "touchend", "touchenter", "touchleave", "touchmove", "touchstart", "pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture"];
  }, {}],
  "mHFU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "Element", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "Attribute", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "Event", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });
    var e = u(require("./element")),
        t = u(require("./attribute")),
        r = u(require("./event"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./element": "RgX7",
    "./attribute": "idhG",
    "./event": "8q2w"
  }]
}, {}, ["mHFU"], null);
},{}],"flow-lissajous.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var REC_START = _ref.REC_START,
      REC_STOP = _ref.REC_STOP,
      EVAL = _ref.EVAL;
  console.log(REC_START, REC_STOP, EVAL);
  return {
    update: function update() {
      var snippets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return window.meta.flow(snippets.map(function (snippet) {
        return {
          action: EVAL,
          payload: snippet
        };
      }));
    },
    eval: function _eval(snippet) {
      return function () {
        console.log(snippet); // We don't want to have to write `var x = ...` whenever we're declrating a 
        // new variable when live coding. If we drop the `var` though the browser will
        // complain about things not being defined. To get around this we force them
        // to be global by assigning them to the window. eg:
        //   var a = new track()
        // becomes
        //   window.a = new track()

        var globalCode = snippet.replace(/([a-zA-Z]+)\s*=/g, 'window.$1 =');
        eval(globalCode);
      };
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
    __install: function __install(_ref2) {
      var _this = this;

      var $dispatch = _ref2.$dispatch;
      this.$dispatch = $dispatch;
      window.meta = new window.track();
      window.meta.vol(0);

      window.meta.record = function () {
        return _this.$dispatch({
          action: REC_START
        });
      };

      window.meta.stop = function () {
        return _this.$dispatch({
          action: REC_STOP
        });
      };
    },
    __update: function __update() {},
    //
    $dispatch: null,
    $track: null
  };
};

exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _program = require("./flow/program");

var _dom = require("./flow/dom");

var _flowLissajous = _interopRequireDefault(require("./flow-lissajous"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.addEventListener('click', function resumeContext() {
  window.removeEventListener('click', resumeContext);
  window.context.resume();
}); // Model -----------------------------------------------------------------------

function init(flags) {
  return {
    recording: false,
    code: '',
    history: []
  };
} // Update ----------------------------------------------------------------------


var EVAL = 'eval';
var REC_START = 'rec-start';
var REC_STOP = 'rec-stop';

function update(_ref, model) {
  var action = _ref.action,
      payload = _ref.payload;
  if (!action) return model;

  switch (action) {
    case EVAL:
      {
        var redacted = payload.replace('meta.record()', '').replace('meta.stop()', '');
        return [_objectSpread({}, model, {
          code: payload,
          history: model.recording && /\S/.test(redacted) ? [].concat(_toConsumableArray(model.history), [redacted]) : model.history
        }), Lissajous.eval(payload)];
      }

    case REC_START:
      {
        return [_objectSpread({}, model, {
          recording: true
        })];
      }

    case REC_STOP:
      {
        return [_objectSpread({}, model, {
          recording: false
        }), Lissajous.update(model.history)];
      }

    default:
      {
        console.warn("Unhandled action: ".concat(action, "!!"));
        return model;
      }
  }
} // View ------------------------------------------------------------------------


function view(model) {
  var editor = _dom.Element.textarea([_dom.Attribute.className("\n    bg-gray-800 rounded leading-normal resize-none w-full h-full py-2 px-3\n    outline-none focus:outline-none\n    text-gray-100\n  ")]);

  var history = _dom.Element.div([_dom.Attribute.className("\n    bg-gray-900 leading-normal w-full h-full py-2 px-3\n    text-gray-100\n  ")], [_dom.Element.pre([], [model.code])]);

  return _dom.Element.main([_dom.Attribute.className('h-full')], [_dom.Element.section([_dom.Attribute.id('code')], [editor, history])]);
} // Listen ----------------------------------------------------------------------


function listen(model) {
  return [_dom.Event.keydown('textarea', function (_ref2) {
    var key = _ref2.key,
        ctrlKey = _ref2.ctrlKey,
        shiftKey = _ref2.shiftKey,
        target = _ref2.target;
    var value = target.value,
        selectionStart = target.selectionStart,
        selectionEnd = target.selectionEnd;
    var line = value.substr(0, selectionStart).split('\n').length - 1;
    var code = selectionStart !== selectionEnd ? value.substring(selectionStart, selectionEnd) : value.split('\n')[line];
    return key == 'Enter' && ctrlKey ? {
      action: EVAL,
      payload: shiftKey ? value : code
    } : {};
  })];
} // App -------------------------------------------------------------------------


var App = (0, _program.instrument)({
  init: init,
  update: update,
  audio: function audio() {
    return [];
  },
  view: view,
  listen: listen
});
var Lissajous = (0, _flowLissajous.default)({
  REC_START: REC_START,
  REC_STOP: REC_STOP,
  EVAL: EVAL
});
App.use(Lissajous);
App.use(_dom.Event);
App.start({
  context: window.context,
  root: document.querySelector('#app'),
  flags: {}
});
},{"./flow/program":"flow/program/index.js","./flow/dom":"flow/dom/index.js","./flow-lissajous":"flow-lissajous.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64660" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.js.map