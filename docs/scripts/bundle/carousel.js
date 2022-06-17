"use strict";

var _excluded = ["premium", "referrerPolicy"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;

  var __commonJS = function __commonJS(cb, mod) {
    return function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
        exports: {}
      }).exports, mod), mod.exports;
    };
  };

  var __copyProps = function __copyProps(to, from, except, desc) {
    if (from && _typeof(from) === "object" || typeof from === "function") {
      var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
          _step;

      try {
        var _loop = function _loop() {
          var key = _step.value;
          if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: function get() {
              return from[key];
            },
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return to;
  };

  var __toESM = function __toESM(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
      value: mod,
      enumerable: true
    }) : target, mod);
  }; // node_modules/plyr/dist/plyr.min.js


  var require_plyr_min = __commonJS({
    "node_modules/plyr/dist/plyr.min.js": function node_modulesPlyrDistPlyrMinJs(exports, module) {
      (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) == "object" && function (e, t) {
        _typeof(exports) == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define("Plyr", t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).Plyr = t();
      }(exports, function () {
        "use strict";

        function e(e2, t2, i2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, {
            value: i2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e2[t2] = i2, e2;
        }

        function t(e2, t2) {
          for (var i2 = 0; i2 < t2.length; i2++) {
            var s2 = t2[i2];
            s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(e2, s2.key, s2);
          }
        }

        function i(e2, t2, i2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, {
            value: i2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e2[t2] = i2, e2;
        }

        function s(e2, t2) {
          var i2 = Object.keys(e2);

          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e2);
            t2 && (s2 = s2.filter(function (t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), i2.push.apply(i2, s2);
          }

          return i2;
        }

        function n(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2] != null ? arguments[t2] : {};
            t2 % 2 ? s(Object(n2), true).forEach(function (t3) {
              i(e2, t3, n2[t3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : s(Object(n2)).forEach(function (t3) {
              Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
            });
          }

          return e2;
        }

        var a = {
          addCSS: true,
          thumbWidth: 15,
          watch: true
        };

        function l(e2, t2) {
          return function () {
            return Array.from(document.querySelectorAll(t2)).includes(this);
          }.call(e2, t2);
        }

        var o = function o(e2) {
          return e2 != null ? e2.constructor : null;
        },
            r = function r(e2, t2) {
          return !!(e2 && t2 && e2 instanceof t2);
        },
            c = function c(e2) {
          return e2 == null;
        },
            h = function h(e2) {
          return o(e2) === Object;
        },
            u = function u(e2) {
          return o(e2) === String;
        },
            d = function d(e2) {
          return Array.isArray(e2);
        },
            m = function m(e2) {
          return r(e2, NodeList);
        },
            p = u,
            g = d,
            f = m,
            b = function b(e2) {
          return r(e2, Element);
        },
            y = function y(e2) {
          return r(e2, Event);
        },
            v = function v(e2) {
          return c(e2) || (u(e2) || d(e2) || m(e2)) && !e2.length || h(e2) && !Object.keys(e2).length;
        };

        function w(e2, t2) {
          if (1 > t2) {
            var i2 = function (e3) {
              var t3 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t3 ? Math.max(0, (t3[1] ? t3[1].length : 0) - (t3[2] ? +t3[2] : 0)) : 0;
            }(t2);

            return parseFloat(e2.toFixed(i2));
          }

          return Math.round(e2 / t2) * t2;
        }

        var T = function () {
          function e2(t2, i2) {
            (function (e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            })(this, e2), b(t2) ? this.element = t2 : p(t2) && (this.element = document.querySelector(t2)), b(this.element) && v(this.element.rangeTouch) && (this.config = n({}, a, {}, i2), this.init());
          }

          return function (e3, i2, s2) {
            i2 && t(e3.prototype, i2), s2 && t(e3, s2);
          }(e2, [{
            key: "init",
            value: function value() {
              e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
            }
          }, {
            key: "destroy",
            value: function value() {
              e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
            }
          }, {
            key: "listeners",
            value: function value(e3) {
              var t2 = this,
                  i2 = e3 ? "addEventListener" : "removeEventListener";
              ["touchstart", "touchmove", "touchend"].forEach(function (e4) {
                t2.element[i2](e4, function (e5) {
                  return t2.set(e5);
                }, false);
              });
            }
          }, {
            key: "get",
            value: function value(t2) {
              if (!e2.enabled || !y(t2)) return null;
              var i2,
                  s2 = t2.target,
                  n2 = t2.changedTouches[0],
                  a2 = parseFloat(s2.getAttribute("min")) || 0,
                  l2 = parseFloat(s2.getAttribute("max")) || 100,
                  o2 = parseFloat(s2.getAttribute("step")) || 1,
                  r2 = s2.getBoundingClientRect(),
                  c2 = 100 / r2.width * (this.config.thumbWidth / 2) / 100;
              return 0 > (i2 = 100 / r2.width * (n2.clientX - r2.left)) ? i2 = 0 : 100 < i2 && (i2 = 100), 50 > i2 ? i2 -= (100 - 2 * i2) * c2 : 50 < i2 && (i2 += 2 * (i2 - 50) * c2), a2 + w(i2 / 100 * (l2 - a2), o2);
            }
          }, {
            key: "set",
            value: function value(t2) {
              e2.enabled && y(t2) && !t2.target.disabled && (t2.preventDefault(), t2.target.value = this.get(t2), function (e3, t3) {
                if (e3 && t3) {
                  var i2 = new Event(t3, {
                    bubbles: true
                  });
                  e3.dispatchEvent(i2);
                }
              }(t2.target, t2.type === "touchend" ? "change" : "input"));
            }
          }], [{
            key: "setup",
            value: function value(t2) {
              var i2 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                  s2 = null;
              if (v(t2) || p(t2) ? s2 = Array.from(document.querySelectorAll(p(t2) ? t2 : 'input[type="range"]')) : b(t2) ? s2 = [t2] : f(t2) ? s2 = Array.from(t2) : g(t2) && (s2 = t2.filter(b)), v(s2)) return null;
              var o2 = n({}, a, {}, i2);

              if (p(t2) && o2.watch) {
                var r2 = new MutationObserver(function (i3) {
                  Array.from(i3).forEach(function (i4) {
                    Array.from(i4.addedNodes).forEach(function (i5) {
                      b(i5) && l(i5, t2) && new e2(i5, o2);
                    });
                  });
                });
                r2.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              }

              return s2.map(function (t3) {
                return new e2(t3, i2);
              });
            }
          }, {
            key: "enabled",
            get: function get() {
              return "ontouchstart" in document.documentElement;
            }
          }]), e2;
        }();

        var k = function k(e2) {
          return e2 != null ? e2.constructor : null;
        },
            C = function C(e2, t2) {
          return Boolean(e2 && t2 && e2 instanceof t2);
        },
            A = function A(e2) {
          return e2 == null;
        },
            S = function S(e2) {
          return k(e2) === Object;
        },
            E = function E(e2) {
          return k(e2) === String;
        },
            P = function P(e2) {
          return k(e2) === Function;
        },
            M = function M(e2) {
          return Array.isArray(e2);
        },
            N = function N(e2) {
          return C(e2, NodeList);
        },
            x = function x(e2) {
          return A(e2) || (E(e2) || M(e2) || N(e2)) && !e2.length || S(e2) && !Object.keys(e2).length;
        };

        var I = A,
            L = S,
            $ = function $(e2) {
          return k(e2) === Number && !Number.isNaN(e2);
        },
            _ = E,
            O = function O(e2) {
          return k(e2) === Boolean;
        },
            j = P,
            D = M,
            q = N,
            H = function H(e2) {
          return e2 !== null && _typeof(e2) == "object" && e2.nodeType === 1 && _typeof(e2.style) == "object" && _typeof(e2.ownerDocument) == "object";
        },
            R = function R(e2) {
          return C(e2, Event);
        },
            F = function F(e2) {
          return C(e2, KeyboardEvent);
        },
            V = function V(e2) {
          return C(e2, TextTrack) || !A(e2) && E(e2.kind);
        },
            B = function B(e2) {
          return C(e2, Promise) && P(e2.then);
        },
            U = function U(e2) {
          if (C(e2, window.URL)) return true;
          if (!E(e2)) return false;
          var t2 = e2;
          e2.startsWith("http://") && e2.startsWith("https://") || (t2 = "http://".concat(e2));

          try {
            return !x(new URL(t2).hostname);
          } catch (e3) {
            return false;
          }
        },
            W = x;

        var z = function () {
          var e2 = document.createElement("span"),
              t2 = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          },
              i2 = Object.keys(t2).find(function (t3) {
            return e2.style[t3] !== void 0;
          });
          return !!_(i2) && t2[i2];
        }();

        function K(e2, t2) {
          setTimeout(function () {
            try {
              e2.hidden = true, e2.offsetHeight, e2.hidden = false;
            } catch (e3) {}
          }, t2);
        }

        var Y = {
          isIE: Boolean(window.document.documentMode),
          isEdge: window.navigator.userAgent.includes("Edge"),
          isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
          isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
          isIos: navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        };

        function Q(e2, t2) {
          return t2.split(".").reduce(function (e3, t3) {
            return e3 && e3[t3];
          }, e2);
        }

        function X() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          for (var _len = arguments.length, t2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            t2[_key - 1] = arguments[_key];
          }

          if (!t2.length) return e2;
          var i2 = t2.shift();
          return L(i2) ? (Object.keys(i2).forEach(function (t3) {
            L(i2[t3]) ? (Object.keys(e2).includes(t3) || Object.assign(e2, _defineProperty({}, t3, {})), X(e2[t3], i2[t3])) : Object.assign(e2, _defineProperty({}, t3, i2[t3]));
          }), X.apply(void 0, [e2].concat(t2))) : e2;
        }

        function J(e2, t2) {
          var i2 = e2.length ? e2 : [e2];
          Array.from(i2).reverse().forEach(function (e3, i3) {
            var s2 = i3 > 0 ? t2.cloneNode(true) : t2,
                n2 = e3.parentNode,
                a2 = e3.nextSibling;
            s2.appendChild(e3), a2 ? n2.insertBefore(s2, a2) : n2.appendChild(s2);
          });
        }

        function G(e2, t2) {
          H(e2) && !W(t2) && Object.entries(t2).filter(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                e3 = _ref2[1];

            return !I(e3);
          }).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                t3 = _ref4[0],
                i2 = _ref4[1];

            return e2.setAttribute(t3, i2);
          });
        }

        function Z(e2, t2, i2) {
          var s2 = document.createElement(e2);
          return L(t2) && G(s2, t2), _(i2) && (s2.innerText = i2), s2;
        }

        function ee(e2, t2, i2, s2) {
          H(t2) && t2.appendChild(Z(e2, i2, s2));
        }

        function te(e2) {
          q(e2) || D(e2) ? Array.from(e2).forEach(te) : H(e2) && H(e2.parentNode) && e2.parentNode.removeChild(e2);
        }

        function ie(e2) {
          if (!H(e2)) return;
          var t2 = e2.childNodes.length;

          for (; t2 > 0;) {
            e2.removeChild(e2.lastChild), t2 -= 1;
          }
        }

        function se(e2, t2) {
          return H(t2) && H(t2.parentNode) && H(e2) ? (t2.parentNode.replaceChild(e2, t2), e2) : null;
        }

        function ne(e2, t2) {
          if (!_(e2) || W(e2)) return {};
          var i2 = {},
              s2 = X({}, t2);
          return e2.split(",").forEach(function (e3) {
            var t3 = e3.trim(),
                n2 = t3.replace(".", ""),
                a2 = t3.replace(/[[\]]/g, "").split("="),
                _a = _slicedToArray(a2, 1),
                l2 = _a[0],
                o2 = a2.length > 1 ? a2[1].replace(/["']/g, "") : "";

            switch (t3.charAt(0)) {
              case ".":
                _(s2["class"]) ? i2["class"] = "".concat(s2["class"], " ").concat(n2) : i2["class"] = n2;
                break;

              case "#":
                i2.id = t3.replace("#", "");
                break;

              case "[":
                i2[l2] = o2;
            }
          }), X(s2, i2);
        }

        function ae(e2, t2) {
          if (!H(e2)) return;
          var i2 = t2;
          O(i2) || (i2 = !e2.hidden), e2.hidden = i2;
        }

        function le(e2, t2, i2) {
          if (q(e2)) return Array.from(e2).map(function (e3) {
            return le(e3, t2, i2);
          });

          if (H(e2)) {
            var s2 = "toggle";
            return i2 !== void 0 && (s2 = i2 ? "add" : "remove"), e2.classList[s2](t2), e2.classList.contains(t2);
          }

          return false;
        }

        function oe(e2, t2) {
          return H(e2) && e2.classList.contains(t2);
        }

        function re(e2, t2) {
          var _Element = Element,
              i2 = _Element.prototype;
          return (i2.matches || i2.webkitMatchesSelector || i2.mozMatchesSelector || i2.msMatchesSelector || function () {
            return Array.from(document.querySelectorAll(t2)).includes(this);
          }).call(e2, t2);
        }

        function ce(e2) {
          return this.elements.container.querySelectorAll(e2);
        }

        function he(e2) {
          return this.elements.container.querySelector(e2);
        }

        function ue() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          H(e2) && (e2.focus({
            preventScroll: true
          }), t2 && le(e2, this.config.classNames.tabFocus));
        }

        var de = {
          "audio/ogg": "vorbis",
          "audio/wav": "1",
          "video/webm": "vp8, vorbis",
          "video/mp4": "avc1.42E01E, mp4a.40.2",
          "video/ogg": "theora"
        },
            me = {
          audio: "canPlayType" in document.createElement("audio"),
          video: "canPlayType" in document.createElement("video"),
          check: function check(e2, t2, i2) {
            var s2 = Y.isIPhone && i2 && me.playsinline,
                n2 = me[e2] || t2 !== "html5";
            return {
              api: n2,
              ui: n2 && me.rangeInput && (e2 !== "video" || !Y.isIPhone || s2)
            };
          },
          pip: !(Y.isIPhone || !j(Z("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Z("video").disablePictureInPicture)),
          airplay: j(window.WebKitPlaybackTargetAvailabilityEvent),
          playsinline: "playsInline" in document.createElement("video"),
          mime: function mime(e2) {
            if (W(e2)) return false;

            var _e2$split = e2.split("/"),
                _e2$split2 = _slicedToArray(_e2$split, 1),
                t2 = _e2$split2[0];

            var i2 = e2;
            if (!this.isHTML5 || t2 !== this.type) return false;
            Object.keys(de).includes(i2) && (i2 += "; codecs=\"".concat(de[e2], "\""));

            try {
              return Boolean(i2 && this.media.canPlayType(i2).replace(/no/, ""));
            } catch (e3) {
              return false;
            }
          },
          textTracks: "textTracks" in document.createElement("video"),
          rangeInput: function () {
            var e2 = document.createElement("input");
            return e2.type = "range", e2.type === "range";
          }(),
          touch: "ontouchstart" in document.documentElement,
          transitions: z !== false,
          reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
            pe = function () {
          var e2 = false;

          try {
            var t2 = Object.defineProperty({}, "passive", {
              get: function get() {
                return e2 = true, null;
              }
            });
            window.addEventListener("test", null, t2), window.removeEventListener("test", null, t2);
          } catch (e3) {}

          return e2;
        }();

        function ge(e2, t2, i2) {
          var _this = this;

          var s2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var n2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var a2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          if (!e2 || !("addEventListener" in e2) || W(t2) || !j(i2)) return;
          var l2 = t2.split(" ");
          var o2 = a2;
          pe && (o2 = {
            passive: n2,
            capture: a2
          }), l2.forEach(function (t3) {
            _this && _this.eventListeners && s2 && _this.eventListeners.push({
              element: e2,
              type: t3,
              callback: i2,
              options: o2
            }), e2[s2 ? "addEventListener" : "removeEventListener"](t3, i2, o2);
          });
        }

        function fe(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var i2 = arguments.length > 2 ? arguments[2] : undefined;
          var s2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var n2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          ge.call(this, e2, t2, i2, true, s2, n2);
        }

        function be(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var i2 = arguments.length > 2 ? arguments[2] : undefined;
          var s2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var n2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          ge.call(this, e2, t2, i2, false, s2, n2);
        }

        function ye(e2) {
          var _this2 = this;

          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var i2 = arguments.length > 2 ? arguments[2] : undefined;
          var s2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var n2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          var a2 = function a2() {
            for (var _len2 = arguments.length, l2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              l2[_key2] = arguments[_key2];
            }

            be(e2, t2, a2, s2, n2), i2.apply(_this2, l2);
          };

          ge.call(this, e2, t2, a2, true, s2, n2);
        }

        function ve(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var s2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          if (!H(e2) || W(t2)) return;
          var n2 = new CustomEvent(t2, {
            bubbles: i2,
            detail: _objectSpread(_objectSpread({}, s2), {}, {
              plyr: this
            })
          });
          e2.dispatchEvent(n2);
        }

        function we() {
          this && this.eventListeners && (this.eventListeners.forEach(function (e2) {
            var t2 = e2.element,
                i2 = e2.type,
                s2 = e2.callback,
                n2 = e2.options;
            t2.removeEventListener(i2, s2, n2);
          }), this.eventListeners = []);
        }

        function Te() {
          var _this3 = this;

          return new Promise(function (e2) {
            return _this3.ready ? setTimeout(e2, 0) : fe.call(_this3, _this3.elements.container, "ready", e2);
          }).then(function () {});
        }

        function ke(e2) {
          B(e2) && e2.then(null, function () {});
        }

        function Ce(e2) {
          return D(e2) ? e2.filter(function (t2, i2) {
            return e2.indexOf(t2) === i2;
          }) : e2;
        }

        function Ae(e2, t2) {
          return D(e2) && e2.length ? e2.reduce(function (e3, i2) {
            return Math.abs(i2 - t2) < Math.abs(e3 - t2) ? i2 : e3;
          }) : null;
        }

        function Se(e2) {
          return !(!window || !window.CSS) && window.CSS.supports(e2);
        }

        var Ee = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce(function (e2, _ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              t2 = _ref6[0],
              i2 = _ref6[1];

          return _objectSpread(_objectSpread({}, e2), {}, _defineProperty({}, t2 / i2, [t2, i2]));
        }, {});

        function Pe(e2) {
          if (!(D(e2) || _(e2) && e2.includes(":"))) return false;
          return (D(e2) ? e2 : e2.split(":")).map(Number).every($);
        }

        function Me(e2) {
          if (!D(e2) || !e2.every($)) return null;

          var _e2 = _slicedToArray(e2, 2),
              t2 = _e2[0],
              i2 = _e2[1],
              s2 = function s2(e3, t3) {
            return t3 === 0 ? e3 : s2(t3, e3 % t3);
          },
              n2 = s2(t2, i2);

          return [t2 / n2, i2 / n2];
        }

        function Ne(e2) {
          var _this$embed;

          var t2 = function t2(e3) {
            return Pe(e3) ? e3.split(":").map(Number) : null;
          };

          var i2 = t2(e2);

          if (i2 === null && (i2 = t2(this.config.ratio)), i2 === null && !W(this.embed) && D(this.embed.ratio) && (_this$embed = this.embed, i2 = _this$embed.ratio, _this$embed), i2 === null && this.isHTML5) {
            var _this$media = this.media,
                e3 = _this$media.videoWidth,
                t3 = _this$media.videoHeight;
            i2 = [e3, t3];
          }

          return Me(i2);
        }

        function xe(e2) {
          if (!this.isVideo) return {};
          var t2 = this.elements.wrapper,
              i2 = Ne.call(this, e2);
          if (!D(i2)) return {};

          var _Me = Me(i2),
              _Me2 = _slicedToArray(_Me, 2),
              s2 = _Me2[0],
              n2 = _Me2[1],
              a2 = 100 / s2 * n2;

          if (Se("aspect-ratio: ".concat(s2, "/").concat(n2)) ? t2.style.aspectRatio = "".concat(s2, "/").concat(n2) : t2.style.paddingBottom = "".concat(a2, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            var e3 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                i3 = (e3 - a2) / (e3 / 50);
            this.fullscreen.active ? t2.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(i3, "%)");
          } else this.isHTML5 && t2.classList.add(this.config.classNames.videoFixedRatio);

          return {
            padding: a2,
            ratio: i2
          };
        }

        function Ie(e2, t2) {
          var i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.05;
          var s2 = e2 / t2,
              n2 = Ae(Object.keys(Ee), s2);
          return Math.abs(n2 - s2) <= i2 ? Ee[n2] : [e2, t2];
        }

        var Le = {
          getSources: function getSources() {
            var _this4 = this;

            if (!this.isHTML5) return [];
            return Array.from(this.media.querySelectorAll("source")).filter(function (e2) {
              var t2 = e2.getAttribute("type");
              return !!W(t2) || me.mime.call(_this4, t2);
            });
          },
          getQualityOptions: function getQualityOptions() {
            return this.config.quality.forced ? this.config.quality.options : Le.getSources.call(this).map(function (e2) {
              return Number(e2.getAttribute("size"));
            }).filter(Boolean);
          },
          setup: function setup() {
            if (!this.isHTML5) return;
            var e2 = this;
            e2.options.speed = e2.config.speed.options, W(this.config.ratio) || xe.call(e2), Object.defineProperty(e2.media, "quality", {
              get: function get() {
                var t2 = Le.getSources.call(e2).find(function (t3) {
                  return t3.getAttribute("src") === e2.source;
                });
                return t2 && Number(t2.getAttribute("size"));
              },
              set: function set(t2) {
                if (e2.quality !== t2) {
                  if (e2.config.quality.forced && j(e2.config.quality.onChange)) e2.config.quality.onChange(t2);else {
                    var i2 = Le.getSources.call(e2).find(function (e3) {
                      return Number(e3.getAttribute("size")) === t2;
                    });
                    if (!i2) return;
                    var _e2$media = e2.media,
                        s2 = _e2$media.currentTime,
                        n2 = _e2$media.paused,
                        a2 = _e2$media.preload,
                        l2 = _e2$media.readyState,
                        o2 = _e2$media.playbackRate;
                    e2.media.src = i2.getAttribute("src"), (a2 !== "none" || l2) && (e2.once("loadedmetadata", function () {
                      e2.speed = o2, e2.currentTime = s2, n2 || ke(e2.play());
                    }), e2.media.load());
                  }
                  ve.call(e2, e2.media, "qualitychange", false, {
                    quality: t2
                  });
                }
              }
            });
          },
          cancelRequests: function cancelRequests() {
            this.isHTML5 && (te(Le.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
          }
        };

        function $e(e2) {
          for (var _len3 = arguments.length, t2 = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            t2[_key3 - 1] = arguments[_key3];
          }

          return W(e2) ? e2 : e2.toString().replace(/{(\d+)}/g, function (e3, i2) {
            return t2[i2].toString();
          });
        }

        var _e = function _e() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          return e2.replace(new RegExp(t2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i2.toString());
        },
            Oe = function Oe() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return e2.toString().replace(/\w\S*/g, function (e3) {
            return e3.charAt(0).toUpperCase() + e3.slice(1).toLowerCase();
          });
        };

        function je() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t2 = e2.toString();
          return t2 = function () {
            var e3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t3 = e3.toString();
            return t3 = _e(t3, "-", " "), t3 = _e(t3, "_", " "), t3 = Oe(t3), _e(t3, " ", "");
          }(t2), t2.charAt(0).toLowerCase() + t2.slice(1);
        }

        function De(e2) {
          var t2 = document.createElement("div");
          return t2.appendChild(e2), t2.innerHTML;
        }

        var qe = {
          pip: "PIP",
          airplay: "AirPlay",
          html5: "HTML5",
          vimeo: "Vimeo",
          youtube: "YouTube"
        },
            He = {
          get: function get() {
            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (W(e2) || W(t2)) return "";
            var i2 = Q(t2.i18n, e2);
            if (W(i2)) return Object.keys(qe).includes(e2) ? qe[e2] : "";
            var s2 = {
              "{seektime}": t2.seekTime,
              "{title}": t2.title
            };
            return Object.entries(s2).forEach(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  e3 = _ref8[0],
                  t3 = _ref8[1];

              i2 = _e(i2, e3, t3);
            }), i2;
          }
        };

        var Re = /*#__PURE__*/function () {
          function Re(t2) {
            var _this5 = this;

            _classCallCheck(this, Re);

            e(this, "get", function (e2) {
              if (!Re.supported || !_this5.enabled) return null;
              var t3 = window.localStorage.getItem(_this5.key);
              if (W(t3)) return null;
              var i2 = JSON.parse(t3);
              return _(e2) && e2.length ? i2[e2] : i2;
            }), e(this, "set", function (e2) {
              if (!Re.supported || !_this5.enabled) return;
              if (!L(e2)) return;

              var t3 = _this5.get();

              W(t3) && (t3 = {}), X(t3, e2);

              try {
                window.localStorage.setItem(_this5.key, JSON.stringify(t3));
              } catch (e3) {}
            }), this.enabled = t2.config.storage.enabled, this.key = t2.config.storage.key;
          }

          _createClass(Re, null, [{
            key: "supported",
            get: function get() {
              try {
                if (!("localStorage" in window)) return false;
                var e2 = "___test";
                return window.localStorage.setItem(e2, e2), window.localStorage.removeItem(e2), true;
              } catch (e2) {
                return false;
              }
            }
          }]);

          return Re;
        }();

        function Fe(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
          return new Promise(function (i2, s2) {
            try {
              var s3 = new XMLHttpRequest();
              if (!("withCredentials" in s3)) return;
              s3.addEventListener("load", function () {
                if (t2 === "text") try {
                  i2(JSON.parse(s3.responseText));
                } catch (e3) {
                  i2(s3.responseText);
                } else i2(s3.response);
              }), s3.addEventListener("error", function () {
                throw new Error(s3.status);
              }), s3.open("GET", e2, true), s3.responseType = t2, s3.send();
            } catch (e3) {
              s2(e3);
            }
          });
        }

        function Ve(e2, t2) {
          if (!_(e2)) return;

          var i2 = _(t2);

          var s2 = false;

          var n2 = function n2() {
            return document.getElementById(t2) !== null;
          },
              a2 = function a2(e3, t3) {
            e3.innerHTML = t3, i2 && n2() || document.body.insertAdjacentElement("afterbegin", e3);
          };

          if (!i2 || !n2()) {
            var n3 = Re.supported,
                l2 = document.createElement("div");

            if (l2.setAttribute("hidden", ""), i2 && l2.setAttribute("id", t2), n3) {
              var e3 = window.localStorage.getItem("cache-".concat(t2));

              if (s2 = e3 !== null, s2) {
                var t3 = JSON.parse(e3);
                a2(l2, t3.content);
              }
            }

            Fe(e2).then(function (e3) {
              if (!W(e3)) {
                if (n3) try {
                  window.localStorage.setItem("cache-".concat(t2), JSON.stringify({
                    content: e3
                  }));
                } catch (e4) {}
                a2(l2, e3);
              }
            })["catch"](function () {});
          }
        }

        var Be = function Be(e2) {
          return Math.trunc(e2 / 60 / 60 % 60, 10);
        };

        function Ue() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          if (!$(e2)) return Ue(void 0, t2, i2);

          var s2 = function s2(e3) {
            return "0".concat(e3).slice(-2);
          };

          var n2 = Be(e2);
          var a2 = (l2 = e2, Math.trunc(l2 / 60 % 60, 10));
          var l2;

          var o2 = function (e3) {
            return Math.trunc(e3 % 60, 10);
          }(e2);

          return n2 = t2 || n2 > 0 ? "".concat(n2, ":") : "", "".concat(i2 && e2 > 0 ? "-" : "").concat(n2).concat(s2(a2), ":").concat(s2(o2));
        }

        var We = {
          getIconUrl: function getIconUrl() {
            var e2 = new URL(this.config.iconUrl, window.location),
                t2 = window.location.host ? window.location.host : window.top.location.host,
                i2 = e2.host !== t2 || Y.isIE && !window.svg4everybody;
            return {
              url: this.config.iconUrl,
              cors: i2
            };
          },
          findElements: function findElements() {
            try {
              return this.elements.controls = he.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                play: ce.call(this, this.config.selectors.buttons.play),
                pause: he.call(this, this.config.selectors.buttons.pause),
                restart: he.call(this, this.config.selectors.buttons.restart),
                rewind: he.call(this, this.config.selectors.buttons.rewind),
                fastForward: he.call(this, this.config.selectors.buttons.fastForward),
                mute: he.call(this, this.config.selectors.buttons.mute),
                pip: he.call(this, this.config.selectors.buttons.pip),
                airplay: he.call(this, this.config.selectors.buttons.airplay),
                settings: he.call(this, this.config.selectors.buttons.settings),
                captions: he.call(this, this.config.selectors.buttons.captions),
                fullscreen: he.call(this, this.config.selectors.buttons.fullscreen)
              }, this.elements.progress = he.call(this, this.config.selectors.progress), this.elements.inputs = {
                seek: he.call(this, this.config.selectors.inputs.seek),
                volume: he.call(this, this.config.selectors.inputs.volume)
              }, this.elements.display = {
                buffer: he.call(this, this.config.selectors.display.buffer),
                currentTime: he.call(this, this.config.selectors.display.currentTime),
                duration: he.call(this, this.config.selectors.display.duration)
              }, H(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), true;
            } catch (e2) {
              return this.debug.warn("It looks like there is a problem with your custom controls HTML", e2), this.toggleNativeControls(true), false;
            }
          },
          createIcon: function createIcon(e2, t2) {
            var i2 = "http://www.w3.org/2000/svg",
                s2 = We.getIconUrl.call(this),
                n2 = "".concat(s2.cors ? "" : s2.url, "#").concat(this.config.iconPrefix),
                a2 = document.createElementNS(i2, "svg");
            G(a2, X(t2, {
              "aria-hidden": "true",
              focusable: "false"
            }));
            var l2 = document.createElementNS(i2, "use"),
                o2 = "".concat(n2, "-").concat(e2);
            return "href" in l2 && l2.setAttributeNS("http://www.w3.org/1999/xlink", "href", o2), l2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o2), a2.appendChild(l2), a2;
          },
          createLabel: function createLabel(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var i2 = He.get(e2, this.config);
            return Z("span", _objectSpread(_objectSpread({}, t2), {}, {
              "class": [t2["class"], this.config.classNames.hidden].filter(Boolean).join(" ")
            }), i2);
          },
          createBadge: function createBadge(e2) {
            if (W(e2)) return null;
            var t2 = Z("span", {
              "class": this.config.classNames.menu.value
            });
            return t2.appendChild(Z("span", {
              "class": this.config.classNames.menu.badge
            }, e2)), t2;
          },
          createButton: function createButton(e2, t2) {
            var _this6 = this;

            var i2 = X({}, t2);
            var s2 = je(e2);
            var n2 = {
              element: "button",
              toggle: false,
              label: null,
              icon: null,
              labelPressed: null,
              iconPressed: null
            };

            switch (["element", "icon", "label"].forEach(function (e3) {
              Object.keys(i2).includes(e3) && (n2[e3] = i2[e3], delete i2[e3]);
            }), n2.element !== "button" || Object.keys(i2).includes("type") || (i2.type = "button"), Object.keys(i2).includes("class") ? i2["class"].split(" ").some(function (e3) {
              return e3 === _this6.config.classNames.control;
            }) || X(i2, {
              "class": "".concat(i2["class"], " ").concat(this.config.classNames.control)
            }) : i2["class"] = this.config.classNames.control, e2) {
              case "play":
                n2.toggle = true, n2.label = "play", n2.labelPressed = "pause", n2.icon = "play", n2.iconPressed = "pause";
                break;

              case "mute":
                n2.toggle = true, n2.label = "mute", n2.labelPressed = "unmute", n2.icon = "volume", n2.iconPressed = "muted";
                break;

              case "captions":
                n2.toggle = true, n2.label = "enableCaptions", n2.labelPressed = "disableCaptions", n2.icon = "captions-off", n2.iconPressed = "captions-on";
                break;

              case "fullscreen":
                n2.toggle = true, n2.label = "enterFullscreen", n2.labelPressed = "exitFullscreen", n2.icon = "enter-fullscreen", n2.iconPressed = "exit-fullscreen";
                break;

              case "play-large":
                i2["class"] += " ".concat(this.config.classNames.control, "--overlaid"), s2 = "play", n2.label = "play", n2.icon = "play";
                break;

              default:
                W(n2.label) && (n2.label = s2), W(n2.icon) && (n2.icon = e2);
            }

            var a2 = Z(n2.element);
            return n2.toggle ? (a2.appendChild(We.createIcon.call(this, n2.iconPressed, {
              "class": "icon--pressed"
            })), a2.appendChild(We.createIcon.call(this, n2.icon, {
              "class": "icon--not-pressed"
            })), a2.appendChild(We.createLabel.call(this, n2.labelPressed, {
              "class": "label--pressed"
            })), a2.appendChild(We.createLabel.call(this, n2.label, {
              "class": "label--not-pressed"
            }))) : (a2.appendChild(We.createIcon.call(this, n2.icon)), a2.appendChild(We.createLabel.call(this, n2.label))), X(i2, ne(this.config.selectors.buttons[s2], i2)), G(a2, i2), s2 === "play" ? (D(this.elements.buttons[s2]) || (this.elements.buttons[s2] = []), this.elements.buttons[s2].push(a2)) : this.elements.buttons[s2] = a2, a2;
          },
          createRange: function createRange(e2, t2) {
            var i2 = Z("input", X(ne(this.config.selectors.inputs[e2]), {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": He.get(e2, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0
            }, t2));
            return this.elements.inputs[e2] = i2, We.updateRangeFill.call(this, i2), T.setup(i2), i2;
          },
          createProgress: function createProgress(e2, t2) {
            var i2 = Z("progress", X(ne(this.config.selectors.display[e2]), {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": true
            }, t2));

            if (e2 !== "volume") {
              i2.appendChild(Z("span", null, "0"));
              var t3 = {
                played: "played",
                buffer: "buffered"
              }[e2],
                  s2 = t3 ? He.get(t3, this.config) : "";
              i2.innerText = "% ".concat(s2.toLowerCase());
            }

            return this.elements.display[e2] = i2, i2;
          },
          createTime: function createTime(e2, t2) {
            var i2 = ne(this.config.selectors.display[e2], t2),
                s2 = Z("div", X(i2, {
              "class": "".concat(i2["class"] ? i2["class"] : "", " ").concat(this.config.classNames.display.time, " ").trim(),
              "aria-label": He.get(e2, this.config)
            }), "00:00");
            return this.elements.display[e2] = s2, s2;
          },
          bindMenuItemShortcuts: function bindMenuItemShortcuts(e2, t2) {
            var _this7 = this;

            fe.call(this, e2, "keydown keyup", function (i2) {
              if (!["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i2.key)) return;
              if (i2.preventDefault(), i2.stopPropagation(), i2.type === "keydown") return;
              var s2 = re(e2, '[role="menuitemradio"]');
              if (!s2 && ["Space", "ArrowRight"].includes(i2.key)) We.showMenuPanel.call(_this7, t2, true);else {
                var t3;
                i2.key !== "Space" && (i2.key === "ArrowDown" || s2 && i2.key === "ArrowRight" ? (t3 = e2.nextElementSibling, H(t3) || (t3 = e2.parentNode.firstElementChild)) : (t3 = e2.previousElementSibling, H(t3) || (t3 = e2.parentNode.lastElementChild)), ue.call(_this7, t3, true));
              }
            }, false), fe.call(this, e2, "keyup", function (e3) {
              e3.key === "Return" && We.focusFirstMenuItem.call(_this7, null, true);
            });
          },
          createMenuItem: function createMenuItem(_ref9) {
            var _this8 = this;

            var e2 = _ref9.value,
                t2 = _ref9.list,
                i2 = _ref9.type,
                s2 = _ref9.title,
                _ref9$badge = _ref9.badge,
                n2 = _ref9$badge === void 0 ? null : _ref9$badge,
                _ref9$checked = _ref9.checked,
                a2 = _ref9$checked === void 0 ? false : _ref9$checked;
            var l2 = ne(this.config.selectors.inputs[i2]),
                o2 = Z("button", X(l2, {
              type: "button",
              role: "menuitemradio",
              "class": "".concat(this.config.classNames.control, " ").concat(l2["class"] ? l2["class"] : "").trim(),
              "aria-checked": a2,
              value: e2
            })),
                r2 = Z("span");
            r2.innerHTML = s2, H(n2) && r2.appendChild(n2), o2.appendChild(r2), Object.defineProperty(o2, "checked", {
              enumerable: true,
              get: function get() {
                return o2.getAttribute("aria-checked") === "true";
              },
              set: function set(e3) {
                e3 && Array.from(o2.parentNode.children).filter(function (e4) {
                  return re(e4, '[role="menuitemradio"]');
                }).forEach(function (e4) {
                  return e4.setAttribute("aria-checked", "false");
                }), o2.setAttribute("aria-checked", e3 ? "true" : "false");
              }
            }), this.listeners.bind(o2, "click keyup", function (t3) {
              if (!F(t3) || t3.key === "Space") {
                switch (t3.preventDefault(), t3.stopPropagation(), o2.checked = true, i2) {
                  case "language":
                    _this8.currentTrack = Number(e2);
                    break;

                  case "quality":
                    _this8.quality = e2;
                    break;

                  case "speed":
                    _this8.speed = parseFloat(e2);
                }

                We.showMenuPanel.call(_this8, "home", F(t3));
              }
            }, i2, false), We.bindMenuItemShortcuts.call(this, o2, i2), t2.appendChild(o2);
          },
          formatTime: function formatTime() {
            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!$(e2)) return e2;
            return Ue(e2, Be(this.duration) > 0, t2);
          },
          updateTimeDisplay: function updateTimeDisplay() {
            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            H(e2) && $(t2) && (e2.innerText = We.formatTime(t2, i2));
          },
          updateVolume: function updateVolume() {
            this.supported.ui && (H(this.elements.inputs.volume) && We.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), H(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || this.volume === 0));
          },
          setRange: function setRange(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            H(e2) && (e2.value = t2, We.updateRangeFill.call(this, e2));
          },
          updateProgress: function updateProgress(e2) {
            var _this9 = this;

            if (!this.supported.ui || !R(e2)) return;
            var t2 = 0;

            var i2 = function i2(e3, t3) {
              var i3 = $(t3) ? t3 : 0,
                  s3 = H(e3) ? e3 : _this9.elements.display.buffer;

              if (H(s3)) {
                s3.value = i3;
                var e4 = s3.getElementsByTagName("span")[0];
                H(e4) && (e4.childNodes[0].nodeValue = i3);
              }
            };

            if (e2) switch (e2.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                s2 = this.currentTime, n2 = this.duration, t2 = s2 === 0 || n2 === 0 || Number.isNaN(s2) || Number.isNaN(n2) ? 0 : (s2 / n2 * 100).toFixed(2), e2.type === "timeupdate" && We.setRange.call(this, this.elements.inputs.seek, t2);
                break;

              case "playing":
              case "progress":
                i2(this.elements.display.buffer, 100 * this.buffered);
            }
            var s2, n2;
          },
          updateRangeFill: function updateRangeFill(e2) {
            var t2 = R(e2) ? e2.target : e2;

            if (H(t2) && t2.getAttribute("type") === "range") {
              if (re(t2, this.config.selectors.inputs.seek)) {
                t2.setAttribute("aria-valuenow", this.currentTime);
                var e3 = We.formatTime(this.currentTime),
                    i2 = We.formatTime(this.duration),
                    s2 = He.get("seekLabel", this.config);
                t2.setAttribute("aria-valuetext", s2.replace("{currentTime}", e3).replace("{duration}", i2));
              } else if (re(t2, this.config.selectors.inputs.volume)) {
                var _e3 = 100 * t2.value;

                t2.setAttribute("aria-valuenow", _e3), t2.setAttribute("aria-valuetext", "".concat(_e3.toFixed(1), "%"));
              } else t2.setAttribute("aria-valuenow", t2.value);

              Y.isWebkit && t2.style.setProperty("--value", t2.value / t2.max * 100 + "%");
            }
          },
          updateSeekTooltip: function updateSeekTooltip(e2) {
            var t2, i2;
            if (!this.config.tooltips.seek || !H(this.elements.inputs.seek) || !H(this.elements.display.seekTooltip) || this.duration === 0) return;

            var s2 = this.elements.display.seekTooltip,
                n2 = "".concat(this.config.classNames.tooltip, "--visible"),
                a2 = function a2(e3) {
              return le(s2, n2, e3);
            };

            if (this.touch) return void a2(false);
            var l2 = 0;
            var o2 = this.elements.progress.getBoundingClientRect();
            if (R(e2)) l2 = 100 / o2.width * (e2.pageX - o2.left);else {
              if (!oe(s2, n2)) return;
              l2 = parseFloat(s2.style.left, 10);
            }
            l2 < 0 ? l2 = 0 : l2 > 100 && (l2 = 100);
            var r2 = this.duration / 100 * l2;
            s2.innerText = We.formatTime(r2);
            var c2 = (t2 = this.config.markers) === null || t2 === void 0 || (i2 = t2.points) === null || i2 === void 0 ? void 0 : i2.find(function (_ref10) {
              var e3 = _ref10.time;
              return e3 === Math.round(r2);
            });
            c2 && s2.insertAdjacentHTML("afterbegin", "".concat(c2.label, "<br>")), s2.style.left = "".concat(l2, "%"), R(e2) && ["mouseenter", "mouseleave"].includes(e2.type) && a2(e2.type === "mouseenter");
          },
          timeUpdate: function timeUpdate(e2) {
            var t2 = !H(this.elements.display.duration) && this.config.invertTime;
            We.updateTimeDisplay.call(this, this.elements.display.currentTime, t2 ? this.duration - this.currentTime : this.currentTime, t2), e2 && e2.type === "timeupdate" && this.media.seeking || We.updateProgress.call(this, e2);
          },
          durationUpdate: function durationUpdate() {
            if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
            if (this.duration >= Math.pow(2, 32)) return ae(this.elements.display.currentTime, true), void ae(this.elements.progress, true);
            H(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            var e2 = H(this.elements.display.duration);
            !e2 && this.config.displayDuration && this.paused && We.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e2 && We.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && We.setMarkers.call(this), We.updateSeekTooltip.call(this);
          },
          toggleMenuButton: function toggleMenuButton(e2, t2) {
            ae(this.elements.settings.buttons[e2], !t2);
          },
          updateSetting: function updateSetting(e2, t2, i2) {
            var s2 = this.elements.settings.panels[e2];
            var n2 = null,
                a2 = t2;
            if (e2 === "captions") n2 = this.currentTrack;else {
              if (n2 = W(i2) ? this[e2] : i2, W(n2) && (n2 = this.config[e2]["default"]), !W(this.options[e2]) && !this.options[e2].includes(n2)) return void this.debug.warn("Unsupported value of '".concat(n2, "' for ").concat(e2));
              if (!this.config[e2].options.includes(n2)) return void this.debug.warn("Disabled value of '".concat(n2, "' for ").concat(e2));
            }
            if (H(a2) || (a2 = s2 && s2.querySelector('[role="menu"]')), !H(a2)) return;
            this.elements.settings.buttons[e2].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = We.getLabel.call(this, e2, n2);
            var l2 = a2 && a2.querySelector("[value=\"".concat(n2, "\"]"));
            H(l2) && (l2.checked = true);
          },
          getLabel: function getLabel(e2, t2) {
            switch (e2) {
              case "speed":
                return t2 === 1 ? He.get("normal", this.config) : "".concat(t2, "&times;");

              case "quality":
                if ($(t2)) {
                  var e3 = He.get("qualityLabel.".concat(t2), this.config);
                  return e3.length ? e3 : "".concat(t2, "p");
                }

                return Oe(t2);

              case "captions":
                return Ye.getLabel.call(this);

              default:
                return null;
            }
          },
          setQualityMenu: function setQualityMenu(e2) {
            var _this10 = this;

            if (!H(this.elements.settings.panels.quality)) return;
            var t2 = "quality",
                i2 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            D(e2) && (this.options.quality = Ce(e2).filter(function (e3) {
              return _this10.config.quality.options.includes(e3);
            }));
            var s2 = !W(this.options.quality) && this.options.quality.length > 1;
            if (We.toggleMenuButton.call(this, t2, s2), ie(i2), We.checkMenu.call(this), !s2) return;

            var n2 = function n2(e3) {
              var t3 = He.get("qualityBadge.".concat(e3), _this10.config);
              return t3.length ? We.createBadge.call(_this10, t3) : null;
            };

            this.options.quality.sort(function (e3, t3) {
              var i3 = _this10.config.quality.options;
              return i3.indexOf(e3) > i3.indexOf(t3) ? 1 : -1;
            }).forEach(function (e3) {
              We.createMenuItem.call(_this10, {
                value: e3,
                list: i2,
                type: t2,
                title: We.getLabel.call(_this10, "quality", e3),
                badge: n2(e3)
              });
            }), We.updateSetting.call(this, t2, i2);
          },
          setCaptionsMenu: function setCaptionsMenu() {
            var _this11 = this;

            if (!H(this.elements.settings.panels.captions)) return;
            var e2 = "captions",
                t2 = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                i2 = Ye.getTracks.call(this),
                s2 = Boolean(i2.length);
            if (We.toggleMenuButton.call(this, e2, s2), ie(t2), We.checkMenu.call(this), !s2) return;
            var n2 = i2.map(function (e3, i3) {
              return {
                value: i3,
                checked: _this11.captions.toggled && _this11.currentTrack === i3,
                title: Ye.getLabel.call(_this11, e3),
                badge: e3.language && We.createBadge.call(_this11, e3.language.toUpperCase()),
                list: t2,
                type: "language"
              };
            });
            n2.unshift({
              value: -1,
              checked: !this.captions.toggled,
              title: He.get("disabled", this.config),
              list: t2,
              type: "language"
            }), n2.forEach(We.createMenuItem.bind(this)), We.updateSetting.call(this, e2, t2);
          },
          setSpeedMenu: function setSpeedMenu() {
            var _this12 = this;

            if (!H(this.elements.settings.panels.speed)) return;
            var e2 = "speed",
                t2 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            this.options.speed = this.options.speed.filter(function (e3) {
              return e3 >= _this12.minimumSpeed && e3 <= _this12.maximumSpeed;
            });
            var i2 = !W(this.options.speed) && this.options.speed.length > 1;
            We.toggleMenuButton.call(this, e2, i2), ie(t2), We.checkMenu.call(this), i2 && (this.options.speed.forEach(function (i3) {
              We.createMenuItem.call(_this12, {
                value: i3,
                list: t2,
                type: e2,
                title: We.getLabel.call(_this12, "speed", i3)
              });
            }), We.updateSetting.call(this, e2, t2));
          },
          checkMenu: function checkMenu() {
            var e2 = this.elements.settings.buttons,
                t2 = !W(e2) && Object.values(e2).some(function (e3) {
              return !e3.hidden;
            });
            ae(this.elements.settings.menu, !t2);
          },
          focusFirstMenuItem: function focusFirstMenuItem(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (this.elements.settings.popup.hidden) return;
            var i2 = e2;
            H(i2) || (i2 = Object.values(this.elements.settings.panels).find(function (e3) {
              return !e3.hidden;
            }));
            var s2 = i2.querySelector('[role^="menuitem"]');
            ue.call(this, s2, t2);
          },
          toggleMenu: function toggleMenu(e2) {
            var t2 = this.elements.settings.popup,
                i2 = this.elements.buttons.settings;
            if (!H(t2) || !H(i2)) return;
            var s2 = t2.hidden;
            var n2 = s2;
            if (O(e2)) n2 = e2;else if (F(e2) && e2.key === "Escape") n2 = false;else if (R(e2)) {
              var s3 = j(e2.composedPath) ? e2.composedPath()[0] : e2.target,
                  a2 = t2.contains(s3);
              if (a2 || !a2 && e2.target !== i2 && n2) return;
            }
            i2.setAttribute("aria-expanded", n2), ae(t2, !n2), le(this.elements.container, this.config.classNames.menu.open, n2), n2 && F(e2) ? We.focusFirstMenuItem.call(this, null, true) : n2 || s2 || ue.call(this, i2, F(e2));
          },
          getMenuSize: function getMenuSize(e2) {
            var t2 = e2.cloneNode(true);
            t2.style.position = "absolute", t2.style.opacity = 0, t2.removeAttribute("hidden"), e2.parentNode.appendChild(t2);
            var i2 = t2.scrollWidth,
                s2 = t2.scrollHeight;
            return te(t2), {
              width: i2,
              height: s2
            };
          },
          showMenuPanel: function showMenuPanel() {
            var _this13 = this;

            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var i2 = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e2));
            if (!H(i2)) return;
            var s2 = i2.parentNode,
                n2 = Array.from(s2.children).find(function (e3) {
              return !e3.hidden;
            });

            if (me.transitions && !me.reducedMotion) {
              s2.style.width = "".concat(n2.scrollWidth, "px"), s2.style.height = "".concat(n2.scrollHeight, "px");

              var e3 = We.getMenuSize.call(this, i2),
                  t3 = function t3(e4) {
                e4.target === s2 && ["width", "height"].includes(e4.propertyName) && (s2.style.width = "", s2.style.height = "", be.call(_this13, s2, z, t3));
              };

              fe.call(this, s2, z, t3), s2.style.width = "".concat(e3.width, "px"), s2.style.height = "".concat(e3.height, "px");
            }

            ae(n2, true), ae(i2, false), We.focusFirstMenuItem.call(this, i2, t2);
          },
          setDownloadUrl: function setDownloadUrl() {
            var e2 = this.elements.buttons.download;
            H(e2) && e2.setAttribute("href", this.download);
          },
          create: function create(e2) {
            var _this14 = this;

            var t2 = We.bindMenuItemShortcuts,
                i2 = We.createButton,
                s2 = We.createProgress,
                n2 = We.createRange,
                a2 = We.createTime,
                l2 = We.setQualityMenu,
                o2 = We.setSpeedMenu,
                r2 = We.showMenuPanel;
            this.elements.controls = null, D(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i2.call(this, "play-large"));
            var c2 = Z("div", ne(this.config.selectors.controls.wrapper));
            this.elements.controls = c2;
            var h2 = {
              "class": "plyr__controls__item"
            };
            return Ce(D(this.config.controls) ? this.config.controls : []).forEach(function (l3) {
              if (l3 === "restart" && c2.appendChild(i2.call(_this14, "restart", h2)), l3 === "rewind" && c2.appendChild(i2.call(_this14, "rewind", h2)), l3 === "play" && c2.appendChild(i2.call(_this14, "play", h2)), l3 === "fast-forward" && c2.appendChild(i2.call(_this14, "fast-forward", h2)), l3 === "progress") {
                var t3 = Z("div", {
                  "class": "".concat(h2["class"], " plyr__progress__container")
                }),
                    i3 = Z("div", ne(_this14.config.selectors.progress));

                if (i3.appendChild(n2.call(_this14, "seek", {
                  id: "plyr-seek-".concat(e2.id)
                })), i3.appendChild(s2.call(_this14, "buffer")), _this14.config.tooltips.seek) {
                  var e3 = Z("span", {
                    "class": _this14.config.classNames.tooltip
                  }, "00:00");
                  i3.appendChild(e3), _this14.elements.display.seekTooltip = e3;
                }

                _this14.elements.progress = i3, t3.appendChild(_this14.elements.progress), c2.appendChild(t3);
              }

              if (l3 === "current-time" && c2.appendChild(a2.call(_this14, "currentTime", h2)), l3 === "duration" && c2.appendChild(a2.call(_this14, "duration", h2)), l3 === "mute" || l3 === "volume") {
                var _t = _this14.elements.volume;

                if (H(_t) && c2.contains(_t) || (_t = Z("div", X({}, h2, {
                  "class": "".concat(h2["class"], " plyr__volume").trim()
                })), _this14.elements.volume = _t, c2.appendChild(_t)), l3 === "mute" && _t.appendChild(i2.call(_this14, "mute")), l3 === "volume" && !Y.isIos) {
                  var _i2 = {
                    max: 1,
                    step: 0.05,
                    value: _this14.config.volume
                  };

                  _t.appendChild(n2.call(_this14, "volume", X(_i2, {
                    id: "plyr-volume-".concat(e2.id)
                  })));
                }
              }

              if (l3 === "captions" && c2.appendChild(i2.call(_this14, "captions", h2)), l3 === "settings" && !W(_this14.config.settings)) {
                var s3 = Z("div", X({}, h2, {
                  "class": "".concat(h2["class"], " plyr__menu").trim(),
                  hidden: ""
                }));
                s3.appendChild(i2.call(_this14, "settings", {
                  "aria-haspopup": true,
                  "aria-controls": "plyr-settings-".concat(e2.id),
                  "aria-expanded": false
                }));
                var n3 = Z("div", {
                  "class": "plyr__menu__container",
                  id: "plyr-settings-".concat(e2.id),
                  hidden: ""
                }),
                    a3 = Z("div"),
                    l4 = Z("div", {
                  id: "plyr-settings-".concat(e2.id, "-home")
                }),
                    o3 = Z("div", {
                  role: "menu"
                });
                l4.appendChild(o3), a3.appendChild(l4), _this14.elements.settings.panels.home = l4, _this14.config.settings.forEach(function (i3) {
                  var s4 = Z("button", X(ne(_this14.config.selectors.buttons.settings), {
                    type: "button",
                    "class": "".concat(_this14.config.classNames.control, " ").concat(_this14.config.classNames.control, "--forward"),
                    role: "menuitem",
                    "aria-haspopup": true,
                    hidden: ""
                  }));
                  t2.call(_this14, s4, i3), fe.call(_this14, s4, "click", function () {
                    r2.call(_this14, i3, false);
                  });
                  var n4 = Z("span", null, He.get(i3, _this14.config)),
                      l5 = Z("span", {
                    "class": _this14.config.classNames.menu.value
                  });
                  l5.innerHTML = e2[i3], n4.appendChild(l5), s4.appendChild(n4), o3.appendChild(s4);
                  var c3 = Z("div", {
                    id: "plyr-settings-".concat(e2.id, "-").concat(i3),
                    hidden: ""
                  }),
                      h3 = Z("button", {
                    type: "button",
                    "class": "".concat(_this14.config.classNames.control, " ").concat(_this14.config.classNames.control, "--back")
                  });
                  h3.appendChild(Z("span", {
                    "aria-hidden": true
                  }, He.get(i3, _this14.config))), h3.appendChild(Z("span", {
                    "class": _this14.config.classNames.hidden
                  }, He.get("menuBack", _this14.config))), fe.call(_this14, c3, "keydown", function (e3) {
                    e3.key === "ArrowLeft" && (e3.preventDefault(), e3.stopPropagation(), r2.call(_this14, "home", true));
                  }, false), fe.call(_this14, h3, "click", function () {
                    r2.call(_this14, "home", false);
                  }), c3.appendChild(h3), c3.appendChild(Z("div", {
                    role: "menu"
                  })), a3.appendChild(c3), _this14.elements.settings.buttons[i3] = s4, _this14.elements.settings.panels[i3] = c3;
                }), n3.appendChild(a3), s3.appendChild(n3), c2.appendChild(s3), _this14.elements.settings.popup = n3, _this14.elements.settings.menu = s3;
              }

              if (l3 === "pip" && me.pip && c2.appendChild(i2.call(_this14, "pip", h2)), l3 === "airplay" && me.airplay && c2.appendChild(i2.call(_this14, "airplay", h2)), l3 === "download") {
                var _e4 = X({}, h2, {
                  element: "a",
                  href: _this14.download,
                  target: "_blank"
                });

                _this14.isHTML5 && (_e4.download = "");
                var _t2 = _this14.config.urls.download;
                !U(_t2) && _this14.isEmbed && X(_e4, {
                  icon: "logo-".concat(_this14.provider),
                  label: _this14.provider
                }), c2.appendChild(i2.call(_this14, "download", _e4));
              }

              l3 === "fullscreen" && c2.appendChild(i2.call(_this14, "fullscreen", h2));
            }), this.isHTML5 && l2.call(this, Le.getQualityOptions.call(this)), o2.call(this), c2;
          },
          inject: function inject() {
            var _this15 = this;

            if (this.config.loadSprite) {
              var e3 = We.getIconUrl.call(this);
              e3.cors && Ve(e3.url, "sprite-plyr");
            }

            this.id = Math.floor(1e4 * Math.random());
            var e2 = null;
            this.elements.controls = null;
            var t2 = {
              id: this.id,
              seektime: this.config.seekTime,
              title: this.config.title
            };
            var i2 = true;
            j(this.config.controls) && (this.config.controls = this.config.controls.call(this, t2)), this.config.controls || (this.config.controls = []), H(this.config.controls) || _(this.config.controls) ? e2 = this.config.controls : (e2 = We.create.call(this, {
              id: this.id,
              seektime: this.config.seekTime,
              speed: this.speed,
              quality: this.quality,
              captions: Ye.getLabel.call(this)
            }), i2 = false);
            var s2;
            i2 && _(this.config.controls) && (e2 = function (e3) {
              var i3 = e3;
              return Object.entries(t2).forEach(function (_ref11) {
                var _ref12 = _slicedToArray(_ref11, 2),
                    e4 = _ref12[0],
                    t3 = _ref12[1];

                i3 = _e(i3, "{".concat(e4, "}"), t3);
              }), i3;
            }(e2)), _(this.config.selectors.controls.container) && (s2 = document.querySelector(this.config.selectors.controls.container)), H(s2) || (s2 = this.elements.container);

            if (s2[H(e2) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e2), H(this.elements.controls) || We.findElements.call(this), !W(this.elements.buttons)) {
              var _e5 = function _e5(e4) {
                var t3 = _this15.config.classNames.controlPressed;
                Object.defineProperty(e4, "pressed", {
                  enumerable: true,
                  get: function get() {
                    return oe(e4, t3);
                  },
                  set: function set() {
                    var i3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    le(e4, t3, i3);
                  }
                });
              };

              Object.values(this.elements.buttons).filter(Boolean).forEach(function (t3) {
                D(t3) || q(t3) ? Array.from(t3).filter(Boolean).forEach(_e5) : _e5(t3);
              });
            }

            if (Y.isEdge && K(s2), this.config.tooltips.controls) {
              var _this$config = this.config,
                  _e6 = _this$config.classNames,
                  t3 = _this$config.selectors,
                  i3 = "".concat(t3.controls.wrapper, " ").concat(t3.labels, " .").concat(_e6.hidden),
                  s3 = ce.call(this, i3);
              Array.from(s3).forEach(function (e4) {
                le(e4, _this15.config.classNames.hidden, false), le(e4, _this15.config.classNames.tooltip, true);
              });
            }
          },
          setMediaMetadata: function setMediaMetadata() {
            try {
              "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                title: this.config.mediaMetadata.title,
                artist: this.config.mediaMetadata.artist,
                album: this.config.mediaMetadata.album,
                artwork: this.config.mediaMetadata.artwork
              }));
            } catch (e2) {}
          },
          setMarkers: function setMarkers() {
            var _this16 = this;

            var e2, t2;
            if (!this.duration || this.elements.markers) return;
            var i2 = (e2 = this.config.markers) === null || e2 === void 0 || (t2 = e2.points) === null || t2 === void 0 ? void 0 : t2.filter(function (_ref13) {
              var e3 = _ref13.time;
              return e3 > 0 && e3 < _this16.duration;
            });
            if (i2 == null || !i2.length) return;
            var s2 = document.createDocumentFragment(),
                n2 = document.createDocumentFragment();
            var a2 = null;

            var l2 = "".concat(this.config.classNames.tooltip, "--visible"),
                o2 = function o2(e3) {
              return le(a2, l2, e3);
            };

            i2.forEach(function (e3) {
              var t3 = Z("span", {
                "class": _this16.config.classNames.marker
              }, ""),
                  i3 = e3.time / _this16.duration * 100 + "%";
              a2 && (t3.addEventListener("mouseenter", function () {
                e3.label || (a2.style.left = i3, a2.innerHTML = e3.label, o2(true));
              }), t3.addEventListener("mouseleave", function () {
                o2(false);
              })), t3.addEventListener("click", function () {
                _this16.currentTime = e3.time;
              }), t3.style.left = i3, n2.appendChild(t3);
            }), s2.appendChild(n2), this.config.tooltips.seek || (a2 = Z("span", {
              "class": this.config.classNames.tooltip
            }, ""), s2.appendChild(a2)), this.elements.markers = {
              points: n2,
              tip: a2
            }, this.elements.progress.appendChild(s2);
          }
        };

        function ze(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var i2 = e2;

          if (t2) {
            var e3 = document.createElement("a");
            e3.href = i2, i2 = e3.href;
          }

          try {
            return new URL(i2);
          } catch (e3) {
            return null;
          }
        }

        function Ke(e2) {
          var t2 = new URLSearchParams();
          return L(e2) && Object.entries(e2).forEach(function (_ref14) {
            var _ref15 = _slicedToArray(_ref14, 2),
                e3 = _ref15[0],
                i2 = _ref15[1];

            t2.set(e3, i2);
          }), t2;
        }

        var Ye = {
          setup: function setup() {
            var _i3, _i4, _this$config$captions;

            if (!this.supported.ui) return;
            if (!this.isVideo || this.isYouTube || this.isHTML5 && !me.textTracks) return void (D(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this));
            var e2, t2;

            if (H(this.elements.captions) || (this.elements.captions = Z("div", ne(this.config.selectors.captions)), e2 = this.elements.captions, t2 = this.elements.wrapper, H(e2) && H(t2) && t2.parentNode.insertBefore(e2, t2.nextSibling)), Y.isIE && window.URL) {
              var e3 = this.media.querySelectorAll("track");
              Array.from(e3).forEach(function (e4) {
                var t3 = e4.getAttribute("src"),
                    i3 = ze(t3);
                i3 !== null && i3.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i3.protocol) && Fe(t3, "blob").then(function (t4) {
                  e4.setAttribute("src", window.URL.createObjectURL(t4));
                })["catch"](function () {
                  te(e4);
                });
              });
            }

            var i2 = Ce((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e3) {
              return e3.split("-")[0];
            }));
            var s2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
            s2 === "auto" && (_i3 = i2, _i4 = _slicedToArray(_i3, 1), s2 = _i4[0], _i3);
            var n2 = this.storage.get("captions");

            if (O(n2) || (_this$config$captions = this.config.captions, n2 = _this$config$captions.active, _this$config$captions), Object.assign(this.captions, {
              toggled: false,
              active: n2,
              language: s2,
              languages: i2
            }), this.isHTML5) {
              var e3 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
              fe.call(this, this.media.textTracks, e3, Ye.update.bind(this));
            }

            setTimeout(Ye.update.bind(this), 0);
          },
          update: function update() {
            var _this17 = this;

            var e2 = Ye.getTracks.call(this, true),
                _this$captions = this.captions,
                t2 = _this$captions.active,
                i2 = _this$captions.language,
                s2 = _this$captions.meta,
                n2 = _this$captions.currentTrackNode,
                a2 = Boolean(e2.find(function (e3) {
              return e3.language === i2;
            }));
            this.isHTML5 && this.isVideo && e2.filter(function (e3) {
              return !s2.get(e3);
            }).forEach(function (e3) {
              _this17.debug.log("Track added", e3), s2.set(e3, {
                "default": e3.mode === "showing"
              }), e3.mode === "showing" && (e3.mode = "hidden"), fe.call(_this17, e3, "cuechange", function () {
                return Ye.updateCues.call(_this17);
              });
            }), (a2 && this.language !== i2 || !e2.includes(n2)) && (Ye.setLanguage.call(this, i2), Ye.toggle.call(this, t2 && a2)), this.elements && le(this.elements.container, this.config.classNames.captions.enabled, !W(e2)), D(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this);
          },
          toggle: function toggle(e2) {
            var _this18 = this;

            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (!this.supported.ui) return;
            var i2 = this.captions.toggled,
                s2 = this.config.classNames.captions.active,
                n2 = I(e2) ? !i2 : e2;

            if (n2 !== i2) {
              if (t2 || (this.captions.active = n2, this.storage.set({
                captions: n2
              })), !this.language && n2 && !t2) {
                var e3 = Ye.getTracks.call(this),
                    t3 = Ye.findTrack.call(this, [this.captions.language].concat(_toConsumableArray(this.captions.languages)), true);
                return this.captions.language = t3.language, void Ye.set.call(this, e3.indexOf(t3));
              }

              this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n2), le(this.elements.container, s2, n2), this.captions.toggled = n2, We.updateSetting.call(this, "captions"), ve.call(this, this.media, n2 ? "captionsenabled" : "captionsdisabled");
            }

            setTimeout(function () {
              n2 && _this18.captions.toggled && (_this18.captions.currentTrackNode.mode = "hidden");
            });
          },
          set: function set(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var i2 = Ye.getTracks.call(this);
            if (e2 !== -1) {
              if ($(e2)) {
                if (e2 in i2) {
                  if (this.captions.currentTrack !== e2) {
                    this.captions.currentTrack = e2;

                    var s2 = i2[e2],
                        _ref16 = s2 || {},
                        n2 = _ref16.language;

                    this.captions.currentTrackNode = s2, We.updateSetting.call(this, "captions"), t2 || (this.captions.language = n2, this.storage.set({
                      language: n2
                    })), this.isVimeo && this.embed.enableTextTrack(n2), ve.call(this, this.media, "languagechange");
                  }

                  Ye.toggle.call(this, true, t2), this.isHTML5 && this.isVideo && Ye.updateCues.call(this);
                } else this.debug.warn("Track not found", e2);
              } else this.debug.warn("Invalid caption argument", e2);
            } else Ye.toggle.call(this, false, t2);
          },
          setLanguage: function setLanguage(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (!_(e2)) return void this.debug.warn("Invalid language argument", e2);
            var i2 = e2.toLowerCase();
            this.captions.language = i2;
            var s2 = Ye.getTracks.call(this),
                n2 = Ye.findTrack.call(this, [i2]);
            Ye.set.call(this, s2.indexOf(n2), t2);
          },
          getTracks: function getTracks() {
            var _this19 = this;

            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Array.from((this.media || {}).textTracks || []).filter(function (t2) {
              return !_this19.isHTML5 || e2 || _this19.captions.meta.has(t2);
            }).filter(function (e3) {
              return ["captions", "subtitles"].includes(e3.kind);
            });
          },
          findTrack: function findTrack(e2) {
            var _this20 = this;

            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var i2 = Ye.getTracks.call(this),
                s2 = function s2(e3) {
              return Number((_this20.captions.meta.get(e3) || {})["default"]);
            },
                n2 = Array.from(i2).sort(function (e3, t3) {
              return s2(t3) - s2(e3);
            });

            var a2;
            return e2.every(function (e3) {
              return a2 = n2.find(function (t3) {
                return t3.language === e3;
              }), !a2;
            }), a2 || (t2 ? n2[0] : void 0);
          },
          getCurrentTrack: function getCurrentTrack() {
            return Ye.getTracks.call(this)[this.currentTrack];
          },
          getLabel: function getLabel(e2) {
            var t2 = e2;
            return !V(t2) && me.textTracks && this.captions.toggled && (t2 = Ye.getCurrentTrack.call(this)), V(t2) ? W(t2.label) ? W(t2.language) ? He.get("enabled", this.config) : e2.language.toUpperCase() : t2.label : He.get("disabled", this.config);
          },
          updateCues: function updateCues(e2) {
            if (!this.supported.ui) return;
            if (!H(this.elements.captions)) return void this.debug.warn("No captions element to render to");
            if (!I(e2) && !Array.isArray(e2)) return void this.debug.warn("updateCues: Invalid input", e2);
            var t2 = e2;

            if (!t2) {
              var e3 = Ye.getCurrentTrack.call(this);
              t2 = Array.from((e3 || {}).activeCues || []).map(function (e4) {
                return e4.getCueAsHTML();
              }).map(De);
            }

            var i2 = t2.map(function (e3) {
              return e3.trim();
            }).join("\n");

            if (i2 !== this.elements.captions.innerHTML) {
              ie(this.elements.captions);

              var _e7 = Z("span", ne(this.config.selectors.caption));

              _e7.innerHTML = i2, this.elements.captions.appendChild(_e7), ve.call(this, this.media, "cuechange");
            }
          }
        },
            Qe = {
          enabled: true,
          title: "",
          debug: false,
          autoplay: false,
          autopause: true,
          playsinline: true,
          seekTime: 10,
          volume: 1,
          muted: false,
          duration: null,
          displayDuration: true,
          invertTime: true,
          toggleInvert: true,
          ratio: null,
          clickToPlay: true,
          hideControls: true,
          resetOnEnd: false,
          disableContextMenu: true,
          loadSprite: true,
          iconPrefix: "plyr",
          iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
          blankVideo: "https://cdn.plyr.io/static/blank.mp4",
          quality: {
            "default": 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
            forced: false,
            onChange: null
          },
          loop: {
            active: false
          },
          speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
          },
          keyboard: {
            focused: true,
            global: false
          },
          tooltips: {
            controls: false,
            seek: true
          },
          captions: {
            active: false,
            language: "auto",
            update: false
          },
          fullscreen: {
            enabled: true,
            fallback: true,
            iosNative: false
          },
          storage: {
            enabled: true,
            key: "plyr"
          },
          controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
          settings: ["captions", "quality", "speed"],
          i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
              2160: "4K",
              1440: "HD",
              1080: "HD",
              720: "HD",
              576: "SD",
              480: "SD"
            }
          },
          urls: {
            download: null,
            vimeo: {
              sdk: "https://player.vimeo.com/api/player.js",
              iframe: "https://player.vimeo.com/video/{0}?{1}",
              api: "https://vimeo.com/api/oembed.json?url={0}"
            },
            youtube: {
              sdk: "https://www.youtube.com/iframe_api",
              api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
              sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
          },
          listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
          },
          events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
          selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
              container: null,
              wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
              play: '[data-plyr="play"]',
              pause: '[data-plyr="pause"]',
              restart: '[data-plyr="restart"]',
              rewind: '[data-plyr="rewind"]',
              fastForward: '[data-plyr="fast-forward"]',
              mute: '[data-plyr="mute"]',
              captions: '[data-plyr="captions"]',
              download: '[data-plyr="download"]',
              fullscreen: '[data-plyr="fullscreen"]',
              pip: '[data-plyr="pip"]',
              airplay: '[data-plyr="airplay"]',
              settings: '[data-plyr="settings"]',
              loop: '[data-plyr="loop"]'
            },
            inputs: {
              seek: '[data-plyr="seek"]',
              volume: '[data-plyr="volume"]',
              speed: '[data-plyr="speed"]',
              language: '[data-plyr="language"]',
              quality: '[data-plyr="quality"]'
            },
            display: {
              currentTime: ".plyr__time--current",
              duration: ".plyr__time--duration",
              buffer: ".plyr__progress__buffer",
              loop: ".plyr__progress__loop",
              volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
          },
          classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            marker: "plyr__progress__marker",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
              time: "plyr__time"
            },
            menu: {
              value: "plyr__menu__value",
              badge: "plyr__badge",
              open: "plyr--menu-open"
            },
            captions: {
              enabled: "plyr--captions-enabled",
              active: "plyr--captions-active"
            },
            fullscreen: {
              enabled: "plyr--fullscreen-enabled",
              fallback: "plyr--fullscreen-fallback"
            },
            pip: {
              supported: "plyr--pip-supported",
              active: "plyr--pip-active"
            },
            airplay: {
              supported: "plyr--airplay-supported",
              active: "plyr--airplay-active"
            },
            tabFocus: "plyr__tab-focus",
            previewThumbnails: {
              thumbContainer: "plyr__preview-thumb",
              thumbContainerShown: "plyr__preview-thumb--is-shown",
              imageContainer: "plyr__preview-thumb__image-container",
              timeContainer: "plyr__preview-thumb__time-container",
              scrubbingContainer: "plyr__preview-scrubbing",
              scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
          },
          attributes: {
            embed: {
              provider: "data-plyr-provider",
              id: "data-plyr-embed-id",
              hash: "data-plyr-embed-hash"
            }
          },
          ads: {
            enabled: false,
            publisherId: "",
            tagUrl: ""
          },
          previewThumbnails: {
            enabled: false,
            src: ""
          },
          vimeo: {
            byline: false,
            portrait: false,
            title: false,
            speed: true,
            transparent: false,
            customControls: true,
            referrerPolicy: null,
            premium: false
          },
          youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            customControls: true,
            noCookie: false
          },
          mediaMetadata: {
            title: "",
            artist: "",
            album: "",
            artwork: []
          },
          markers: {
            enabled: false,
            points: []
          }
        },
            Xe = "picture-in-picture",
            Je = "inline",
            Ge = {
          html5: "html5",
          youtube: "youtube",
          vimeo: "vimeo"
        },
            Ze = "audio",
            et = "video";

        var tt = function tt() {};

        var it = /*#__PURE__*/function () {
          function it() {
            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _classCallCheck(this, it);

            this.enabled = window.console && e2, this.enabled && this.log("Debugging enabled");
          }

          _createClass(it, [{
            key: "log",
            get: function get() {
              return this.enabled ? Function.prototype.bind.call(console.log, console) : tt;
            }
          }, {
            key: "warn",
            get: function get() {
              return this.enabled ? Function.prototype.bind.call(console.warn, console) : tt;
            }
          }, {
            key: "error",
            get: function get() {
              return this.enabled ? Function.prototype.bind.call(console.error, console) : tt;
            }
          }]);

          return it;
        }();

        var st = /*#__PURE__*/function () {
          function st(t2) {
            var _this21 = this;

            _classCallCheck(this, st);

            e(this, "onChange", function () {
              if (!_this21.enabled) return;
              var e2 = _this21.player.elements.buttons.fullscreen;
              H(e2) && (e2.pressed = _this21.active);
              var t3 = _this21.target === _this21.player.media ? _this21.target : _this21.player.elements.container;
              ve.call(_this21.player, t3, _this21.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e(this, "toggleFallback", function () {
              var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

              if (e2 ? _this21.scrollPosition = {
                x: window.scrollX || 0,
                y: window.scrollY || 0
              } : window.scrollTo(_this21.scrollPosition.x, _this21.scrollPosition.y), document.body.style.overflow = e2 ? "hidden" : "", le(_this21.target, _this21.player.config.classNames.fullscreen.fallback, e2), Y.isIos) {
                var t3 = document.head.querySelector('meta[name="viewport"]');
                var i2 = "viewport-fit=cover";
                t3 || (t3 = document.createElement("meta"), t3.setAttribute("name", "viewport"));
                var s2 = _(t3.content) && t3.content.includes(i2);
                e2 ? (_this21.cleanupViewport = !s2, s2 || (t3.content += ",".concat(i2))) : _this21.cleanupViewport && (t3.content = t3.content.split(",").filter(function (e3) {
                  return e3.trim() !== i2;
                }).join(","));
              }

              _this21.onChange();
            }), e(this, "trapFocus", function (e2) {
              if (Y.isIos || !_this21.active || e2.key !== "Tab") return;

              var t3 = document.activeElement,
                  i2 = ce.call(_this21.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                  _i5 = _slicedToArray(i2, 1),
                  s2 = _i5[0],
                  n2 = i2[i2.length - 1];

              t3 !== n2 || e2.shiftKey ? t3 === s2 && e2.shiftKey && (n2.focus(), e2.preventDefault()) : (s2.focus(), e2.preventDefault());
            }), e(this, "update", function () {
              if (_this21.enabled) {
                var e2;
                e2 = _this21.forceFallback ? "Fallback (forced)" : st["native"] ? "Native" : "Fallback", _this21.player.debug.log("".concat(e2, " fullscreen enabled"));
              } else _this21.player.debug.log("Fullscreen not supported and fallback disabled");

              le(_this21.player.elements.container, _this21.player.config.classNames.fullscreen.enabled, _this21.enabled);
            }), e(this, "enter", function () {
              _this21.enabled && (Y.isIos && _this21.player.config.fullscreen.iosNative ? _this21.player.isVimeo ? _this21.player.embed.requestFullscreen() : _this21.target.webkitEnterFullscreen() : !st["native"] || _this21.forceFallback ? _this21.toggleFallback(true) : _this21.prefix ? W(_this21.prefix) || _this21.target["".concat(_this21.prefix, "Request").concat(_this21.property)]() : _this21.target.requestFullscreen({
                navigationUI: "hide"
              }));
            }), e(this, "exit", function () {
              if (_this21.enabled) if (Y.isIos && _this21.player.config.fullscreen.iosNative) _this21.target.webkitExitFullscreen(), ke(_this21.player.play());else if (!st["native"] || _this21.forceFallback) _this21.toggleFallback(false);else if (_this21.prefix) {
                if (!W(_this21.prefix)) {
                  var e2 = _this21.prefix === "moz" ? "Cancel" : "Exit";
                  document["".concat(_this21.prefix).concat(e2).concat(_this21.property)]();
                }
              } else (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e(this, "toggle", function () {
              _this21.active ? _this21.exit() : _this21.enter();
            }), this.player = t2, this.prefix = st.prefix, this.property = st.property, this.scrollPosition = {
              x: 0,
              y: 0
            }, this.forceFallback = t2.config.fullscreen.fallback === "force", this.player.elements.fullscreen = t2.config.fullscreen.container && function (e2, t3) {
              var _Element2 = Element,
                  i2 = _Element2.prototype;
              return (i2.closest || function () {
                var e3 = this;

                do {
                  if (re.matches(e3, t3)) return e3;
                  e3 = e3.parentElement || e3.parentNode;
                } while (e3 !== null && e3.nodeType === 1);

                return null;
              }).call(e2, t3);
            }(this.player.elements.container, t2.config.fullscreen.container), fe.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
              _this21.onChange();
            }), fe.call(this.player, this.player.elements.container, "dblclick", function (e2) {
              H(_this21.player.elements.controls) && _this21.player.elements.controls.contains(e2.target) || _this21.player.listeners.proxy(e2, _this21.toggle, "fullscreen");
            }), fe.call(this, this.player.elements.container, "keydown", function (e2) {
              return _this21.trapFocus(e2);
            }), this.update();
          }

          _createClass(st, [{
            key: "usingNative",
            get: function get() {
              return st["native"] && !this.forceFallback;
            }
          }, {
            key: "enabled",
            get: function get() {
              return (st["native"] || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
            }
          }, {
            key: "active",
            get: function get() {
              if (!this.enabled) return false;
              if (!st["native"] || this.forceFallback) return oe(this.target, this.player.config.classNames.fullscreen.fallback);
              var e2 = this.prefix ? this.target.getRootNode()["".concat(this.prefix).concat(this.property, "Element")] : this.target.getRootNode().fullscreenElement;
              return e2 && e2.shadowRoot ? e2 === this.target.getRootNode().host : e2 === this.target;
            }
          }, {
            key: "target",
            get: function get() {
              return Y.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
            }
          }], [{
            key: "native",
            get: function get() {
              return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
            }
          }, {
            key: "prefix",
            get: function get() {
              if (j(document.exitFullscreen)) return "";
              var e2 = "";
              return ["webkit", "moz", "ms"].some(function (t2) {
                return !(!j(document["".concat(t2, "ExitFullscreen")]) && !j(document["".concat(t2, "CancelFullScreen")])) && (e2 = t2, true);
              }), e2;
            }
          }, {
            key: "property",
            get: function get() {
              return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
            }
          }]);

          return st;
        }();

        function nt(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return new Promise(function (i2, s2) {
            var n2 = new Image(),
                a2 = function a2() {
              delete n2.onload, delete n2.onerror, (n2.naturalWidth >= t2 ? i2 : s2)(n2);
            };

            Object.assign(n2, {
              onload: a2,
              onerror: a2,
              src: e2
            });
          });
        }

        var at = {
          addStyleHook: function addStyleHook() {
            le(this.elements.container, this.config.selectors.container.replace(".", ""), true), le(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
          },
          toggleNativeControls: function toggleNativeControls() {
            var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            e2 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
          },
          build: function build() {
            var _this22 = this;

            if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void at.toggleNativeControls.call(this, true);
            H(this.elements.controls) || (We.inject.call(this), this.listeners.controls()), at.toggleNativeControls.call(this), this.isHTML5 && Ye.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, We.updateVolume.call(this), We.timeUpdate.call(this), We.durationUpdate.call(this), at.checkPlaying.call(this), le(this.elements.container, this.config.classNames.pip.supported, me.pip && this.isHTML5 && this.isVideo), le(this.elements.container, this.config.classNames.airplay.supported, me.airplay && this.isHTML5), le(this.elements.container, this.config.classNames.isIos, Y.isIos), le(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(function () {
              ve.call(_this22, _this22.media, "ready");
            }, 0), at.setTitle.call(this), this.poster && at.setPoster.call(this, this.poster, false)["catch"](function () {}), this.config.duration && We.durationUpdate.call(this), this.config.mediaMetadata && We.setMediaMetadata.call(this);
          },
          setTitle: function setTitle() {
            var e2 = He.get("play", this.config);

            if (_(this.config.title) && !W(this.config.title) && (e2 += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t2) {
              t2.setAttribute("aria-label", e2);
            }), this.isEmbed) {
              var e3 = he.call(this, "iframe");
              if (!H(e3)) return;
              var t2 = W(this.config.title) ? "video" : this.config.title,
                  i2 = He.get("frameTitle", this.config);
              e3.setAttribute("title", i2.replace("{title}", t2));
            }
          },
          togglePoster: function togglePoster(e2) {
            le(this.elements.container, this.config.classNames.posterEnabled, e2);
          },
          setPoster: function setPoster(e2) {
            var _this23 = this;

            var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return t2 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e2), this.elements.poster.removeAttribute("hidden"), Te.call(this).then(function () {
              return nt(e2);
            })["catch"](function (t3) {
              throw e2 === _this23.poster && at.togglePoster.call(_this23, false), t3;
            }).then(function () {
              if (e2 !== _this23.poster) throw new Error("setPoster cancelled by later call to setPoster");
            }).then(function () {
              return Object.assign(_this23.elements.poster.style, {
                backgroundImage: "url('".concat(e2, "')"),
                backgroundSize: ""
              }), at.togglePoster.call(_this23, true), e2;
            }));
          },
          checkPlaying: function checkPlaying(e2) {
            var _this24 = this;

            le(this.elements.container, this.config.classNames.playing, this.playing), le(this.elements.container, this.config.classNames.paused, this.paused), le(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e3) {
              Object.assign(e3, {
                pressed: _this24.playing
              }), e3.setAttribute("aria-label", He.get(_this24.playing ? "pause" : "play", _this24.config));
            }), R(e2) && e2.type === "timeupdate" || at.toggleControls.call(this);
          },
          checkLoading: function checkLoading(e2) {
            var _this25 = this;

            this.loading = ["stalled", "waiting"].includes(e2.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
              le(_this25.elements.container, _this25.config.classNames.loading, _this25.loading), at.toggleControls.call(_this25);
            }, this.loading ? 250 : 0);
          },
          toggleControls: function toggleControls(e2) {
            var t2 = this.elements.controls;

            if (t2 && this.config.hideControls) {
              var i2 = this.touch && this.lastSeekTime + 2e3 > Date.now();
              this.toggleControls(Boolean(e2 || this.loading || this.paused || t2.pressed || t2.hover || i2));
            }
          },
          migrateStyles: function migrateStyles() {
            var _this26 = this;

            Object.values(_objectSpread({}, this.media.style)).filter(function (e2) {
              return !W(e2) && _(e2) && e2.startsWith("--plyr");
            }).forEach(function (e2) {
              _this26.elements.container.style.setProperty(e2, _this26.media.style.getPropertyValue(e2)), _this26.media.style.removeProperty(e2);
            }), W(this.media.style) && this.media.removeAttribute("style");
          }
        };

        var lt = /*#__PURE__*/function () {
          function lt(t2) {
            var _this27 = this;

            _classCallCheck(this, lt);

            e(this, "firstTouch", function () {
              var e2 = _this27.player,
                  t3 = e2.elements;
              e2.touch = true, le(t3.container, e2.config.classNames.isTouch, true);
            }), e(this, "setTabFocus", function (e2) {
              var t3 = _this27.player,
                  i2 = t3.elements,
                  s2 = e2.key,
                  n2 = e2.type,
                  a2 = e2.timeStamp;
              if (clearTimeout(_this27.focusTimer), n2 === "keydown" && s2 !== "Tab") return;
              n2 === "keydown" && (_this27.lastKeyDown = a2);
              var l2 = a2 - _this27.lastKeyDown <= 20;
              (n2 !== "focus" || l2) && (function () {
                var e3 = t3.config.classNames.tabFocus;
                le(ce.call(t3, ".".concat(e3)), e3, false);
              }(), n2 !== "focusout" && (_this27.focusTimer = setTimeout(function () {
                var e3 = document.activeElement;
                i2.container.contains(e3) && le(document.activeElement, t3.config.classNames.tabFocus, true);
              }, 10)));
            }), e(this, "global", function () {
              var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
              var t3 = _this27.player;
              t3.config.keyboard.global && ge.call(t3, window, "keydown keyup", _this27.handleKey, e2, false), ge.call(t3, document.body, "click", _this27.toggleMenu, e2), ye.call(t3, document.body, "touchstart", _this27.firstTouch), ge.call(t3, document.body, "keydown focus blur focusout", _this27.setTabFocus, e2, false, true);
            }), e(this, "container", function () {
              var e2 = _this27.player,
                  t3 = e2.config,
                  i2 = e2.elements,
                  s2 = e2.timers;
              !t3.keyboard.global && t3.keyboard.focused && fe.call(e2, i2.container, "keydown keyup", _this27.handleKey, false), fe.call(e2, i2.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t4) {
                var n3 = i2.controls;
                n3 && t4.type === "enterfullscreen" && (n3.pressed = false, n3.hover = false);
                var a3 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t4.type) && (at.toggleControls.call(e2, true), a3 = e2.touch ? 3e3 : 2e3), clearTimeout(s2.controls), s2.controls = setTimeout(function () {
                  return at.toggleControls.call(e2, false);
                }, a3);
              });

              var n2 = function n2() {
                if (!e2.isVimeo || e2.config.vimeo.premium) return;

                var t4 = i2.wrapper,
                    s3 = e2.fullscreen.active,
                    _Ne$call = Ne.call(e2),
                    _Ne$call2 = _slicedToArray(_Ne$call, 2),
                    n3 = _Ne$call2[0],
                    a3 = _Ne$call2[1],
                    l2 = Se("aspect-ratio: ".concat(n3, " / ").concat(a3));

                if (!s3) return void (l2 ? (t4.style.width = null, t4.style.height = null) : (t4.style.maxWidth = null, t4.style.margin = null));
                var _ref17 = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)],
                    o2 = _ref17[0],
                    r2 = _ref17[1],
                    c2 = o2 / r2 > n3 / a3;
                l2 ? (t4.style.width = c2 ? "auto" : "100%", t4.style.height = c2 ? "100%" : "auto") : (t4.style.maxWidth = c2 ? r2 / a3 * n3 + "px" : null, t4.style.margin = c2 ? "0 auto" : null);
              },
                  a2 = function a2() {
                clearTimeout(s2.resized), s2.resized = setTimeout(n2, 50);
              };

              fe.call(e2, i2.container, "enterfullscreen exitfullscreen", function (t4) {
                var s3 = e2.fullscreen.target;
                if (s3 !== i2.container) return;
                if (!e2.isEmbed && W(e2.config.ratio)) return;
                n2();
                (t4.type === "enterfullscreen" ? fe : be).call(e2, window, "resize", a2);
              });
            }), e(this, "media", function () {
              var e2 = _this27.player,
                  t3 = e2.elements;

              if (fe.call(e2, e2.media, "timeupdate seeking seeked", function (t4) {
                return We.timeUpdate.call(e2, t4);
              }), fe.call(e2, e2.media, "durationchange loadeddata loadedmetadata", function (t4) {
                return We.durationUpdate.call(e2, t4);
              }), fe.call(e2, e2.media, "ended", function () {
                e2.isHTML5 && e2.isVideo && e2.config.resetOnEnd && (e2.restart(), e2.pause());
              }), fe.call(e2, e2.media, "progress playing seeking seeked", function (t4) {
                return We.updateProgress.call(e2, t4);
              }), fe.call(e2, e2.media, "volumechange", function (t4) {
                return We.updateVolume.call(e2, t4);
              }), fe.call(e2, e2.media, "playing play pause ended emptied timeupdate", function (t4) {
                return at.checkPlaying.call(e2, t4);
              }), fe.call(e2, e2.media, "waiting canplay seeked playing", function (t4) {
                return at.checkLoading.call(e2, t4);
              }), e2.supported.ui && e2.config.clickToPlay && !e2.isAudio) {
                var i3 = he.call(e2, ".".concat(e2.config.classNames.video));
                if (!H(i3)) return;
                fe.call(e2, t3.container, "click", function (s2) {
                  ([t3.container, i3].includes(s2.target) || i3.contains(s2.target)) && (e2.touch && e2.config.hideControls || (e2.ended ? (_this27.proxy(s2, e2.restart, "restart"), _this27.proxy(s2, function () {
                    ke(e2.play());
                  }, "play")) : _this27.proxy(s2, function () {
                    ke(e2.togglePlay());
                  }, "play")));
                });
              }

              e2.supported.ui && e2.config.disableContextMenu && fe.call(e2, t3.wrapper, "contextmenu", function (e3) {
                e3.preventDefault();
              }, false), fe.call(e2, e2.media, "volumechange", function () {
                e2.storage.set({
                  volume: e2.volume,
                  muted: e2.muted
                });
              }), fe.call(e2, e2.media, "ratechange", function () {
                We.updateSetting.call(e2, "speed"), e2.storage.set({
                  speed: e2.speed
                });
              }), fe.call(e2, e2.media, "qualitychange", function (t4) {
                We.updateSetting.call(e2, "quality", null, t4.detail.quality);
              }), fe.call(e2, e2.media, "ready qualitychange", function () {
                We.setDownloadUrl.call(e2);
              });
              var i2 = e2.config.events.concat(["keyup", "keydown"]).join(" ");
              fe.call(e2, e2.media, i2, function (i3) {
                var _i3$detail = i3.detail,
                    s2 = _i3$detail === void 0 ? {} : _i3$detail;
                i3.type === "error" && (s2 = e2.media.error), ve.call(e2, t3.container, i3.type, true, s2);
              });
            }), e(this, "proxy", function (e2, t3, i2) {
              var s2 = _this27.player,
                  n2 = s2.config.listeners[i2];
              var a2 = true;
              j(n2) && (a2 = n2.call(s2, e2)), a2 !== false && j(t3) && t3.call(s2, e2);
            }), e(this, "bind", function (e2, t3, i2, s2) {
              var n2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
              var a2 = _this27.player,
                  l2 = a2.config.listeners[s2],
                  o2 = j(l2);
              fe.call(a2, e2, t3, function (e3) {
                return _this27.proxy(e3, i2, s2);
              }, n2 && !o2);
            }), e(this, "controls", function () {
              var e2 = _this27.player,
                  t3 = e2.elements,
                  i2 = Y.isIE ? "change" : "input";

              if (t3.buttons.play && Array.from(t3.buttons.play).forEach(function (t4) {
                _this27.bind(t4, "click", function () {
                  ke(e2.togglePlay());
                }, "play");
              }), _this27.bind(t3.buttons.restart, "click", e2.restart, "restart"), _this27.bind(t3.buttons.rewind, "click", function () {
                e2.lastSeekTime = Date.now(), e2.rewind();
              }, "rewind"), _this27.bind(t3.buttons.fastForward, "click", function () {
                e2.lastSeekTime = Date.now(), e2.forward();
              }, "fastForward"), _this27.bind(t3.buttons.mute, "click", function () {
                e2.muted = !e2.muted;
              }, "mute"), _this27.bind(t3.buttons.captions, "click", function () {
                return e2.toggleCaptions();
              }), _this27.bind(t3.buttons.download, "click", function () {
                ve.call(e2, e2.media, "download");
              }, "download"), _this27.bind(t3.buttons.fullscreen, "click", function () {
                e2.fullscreen.toggle();
              }, "fullscreen"), _this27.bind(t3.buttons.pip, "click", function () {
                e2.pip = "toggle";
              }, "pip"), _this27.bind(t3.buttons.airplay, "click", e2.airplay, "airplay"), _this27.bind(t3.buttons.settings, "click", function (t4) {
                t4.stopPropagation(), t4.preventDefault(), We.toggleMenu.call(e2, t4);
              }, null, false), _this27.bind(t3.buttons.settings, "keyup", function (t4) {
                ["Space", "Enter"].includes(t4.key) && (t4.key !== "Enter" ? (t4.preventDefault(), t4.stopPropagation(), We.toggleMenu.call(e2, t4)) : We.focusFirstMenuItem.call(e2, null, true));
              }, null, false), _this27.bind(t3.settings.menu, "keydown", function (t4) {
                t4.key === "Escape" && We.toggleMenu.call(e2, t4);
              }), _this27.bind(t3.inputs.seek, "mousedown mousemove", function (e3) {
                var i3 = t3.progress.getBoundingClientRect(),
                    s2 = 100 / i3.width * (e3.pageX - i3.left);
                e3.currentTarget.setAttribute("seek-value", s2);
              }), _this27.bind(t3.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t4) {
                var i3 = t4.currentTarget,
                    s2 = "play-on-seeked";
                if (F(t4) && !["ArrowLeft", "ArrowRight"].includes(t4.key)) return;
                e2.lastSeekTime = Date.now();
                var n2 = i3.hasAttribute(s2),
                    a2 = ["mouseup", "touchend", "keyup"].includes(t4.type);
                n2 && a2 ? (i3.removeAttribute(s2), ke(e2.play())) : !a2 && e2.playing && (i3.setAttribute(s2, ""), e2.pause());
              }), Y.isIos) {
                var t4 = ce.call(e2, 'input[type="range"]');
                Array.from(t4).forEach(function (e3) {
                  return _this27.bind(e3, i2, function (e4) {
                    return K(e4.target);
                  });
                });
              }

              _this27.bind(t3.inputs.seek, i2, function (t4) {
                var i3 = t4.currentTarget;
                var s2 = i3.getAttribute("seek-value");
                W(s2) && (s2 = i3.value), i3.removeAttribute("seek-value"), e2.currentTime = s2 / i3.max * e2.duration;
              }, "seek"), _this27.bind(t3.progress, "mouseenter mouseleave mousemove", function (t4) {
                return We.updateSeekTooltip.call(e2, t4);
              }), _this27.bind(t3.progress, "mousemove touchmove", function (t4) {
                var i3 = e2.previewThumbnails;
                i3 && i3.loaded && i3.startMove(t4);
              }), _this27.bind(t3.progress, "mouseleave touchend click", function () {
                var t4 = e2.previewThumbnails;
                t4 && t4.loaded && t4.endMove(false, true);
              }), _this27.bind(t3.progress, "mousedown touchstart", function (t4) {
                var i3 = e2.previewThumbnails;
                i3 && i3.loaded && i3.startScrubbing(t4);
              }), _this27.bind(t3.progress, "mouseup touchend", function (t4) {
                var i3 = e2.previewThumbnails;
                i3 && i3.loaded && i3.endScrubbing(t4);
              }), Y.isWebkit && Array.from(ce.call(e2, 'input[type="range"]')).forEach(function (t4) {
                _this27.bind(t4, "input", function (t5) {
                  return We.updateRangeFill.call(e2, t5.target);
                });
              }), e2.config.toggleInvert && !H(t3.display.duration) && _this27.bind(t3.display.currentTime, "click", function () {
                e2.currentTime !== 0 && (e2.config.invertTime = !e2.config.invertTime, We.timeUpdate.call(e2));
              }), _this27.bind(t3.inputs.volume, i2, function (t4) {
                e2.volume = t4.target.value;
              }, "volume"), _this27.bind(t3.controls, "mouseenter mouseleave", function (i3) {
                t3.controls.hover = !e2.touch && i3.type === "mouseenter";
              }), t3.fullscreen && Array.from(t3.fullscreen.children).filter(function (e3) {
                return !e3.contains(t3.container);
              }).forEach(function (i3) {
                _this27.bind(i3, "mouseenter mouseleave", function (i4) {
                  t3.controls && (t3.controls.hover = !e2.touch && i4.type === "mouseenter");
                });
              }), _this27.bind(t3.controls, "mousedown mouseup touchstart touchend touchcancel", function (e3) {
                t3.controls.pressed = ["mousedown", "touchstart"].includes(e3.type);
              }), _this27.bind(t3.controls, "focusin", function () {
                var i3 = e2.config,
                    s2 = e2.timers;
                le(t3.controls, i3.classNames.noTransition, true), at.toggleControls.call(e2, true), setTimeout(function () {
                  le(t3.controls, i3.classNames.noTransition, false);
                }, 0);
                var n2 = _this27.touch ? 3e3 : 4e3;
                clearTimeout(s2.controls), s2.controls = setTimeout(function () {
                  return at.toggleControls.call(e2, false);
                }, n2);
              }), _this27.bind(t3.inputs.volume, "wheel", function (t4) {
                var i3 = t4.webkitDirectionInvertedFromDevice,
                    _map = [t4.deltaX, -t4.deltaY].map(function (e3) {
                  return i3 ? -e3 : e3;
                }),
                    _map2 = _slicedToArray(_map, 2),
                    s2 = _map2[0],
                    n2 = _map2[1],
                    a2 = Math.sign(Math.abs(s2) > Math.abs(n2) ? s2 : n2);

                e2.increaseVolume(a2 / 50);
                var l2 = e2.media.volume;
                (a2 === 1 && l2 < 1 || a2 === -1 && l2 > 0) && t4.preventDefault();
              }, "volume", false);
            }), this.player = t2, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }

          _createClass(lt, [{
            key: "handleKey",
            value: function handleKey(e2) {
              var t2 = this.player,
                  i2 = t2.elements,
                  s2 = e2.key,
                  n2 = e2.type,
                  a2 = e2.altKey,
                  l2 = e2.ctrlKey,
                  o2 = e2.metaKey,
                  r2 = e2.shiftKey,
                  c2 = n2 === "keydown",
                  h2 = c2 && s2 === this.lastKey;
              if (a2 || l2 || o2 || r2) return;
              if (!s2) return;

              if (c2) {
                var n3 = document.activeElement;

                if (H(n3)) {
                  var s3 = t2.config.selectors.editable,
                      a3 = i2.inputs.seek;
                  if (n3 !== a3 && re(n3, s3)) return;
                  if (e2.key === "Space" && re(n3, 'button, [role^="menuitem"]')) return;
                }

                switch (["Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s2) && (e2.preventDefault(), e2.stopPropagation()), s2) {
                  case "0":
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                  case "7":
                  case "8":
                  case "9":
                    h2 || (u2 = parseInt(s2, 10), t2.currentTime = t2.duration / 10 * u2);
                    break;

                  case "Space":
                  case "k":
                    h2 || ke(t2.togglePlay());
                    break;

                  case "ArrowUp":
                    t2.increaseVolume(0.1);
                    break;

                  case "ArrowDown":
                    t2.decreaseVolume(0.1);
                    break;

                  case "m":
                    h2 || (t2.muted = !t2.muted);
                    break;

                  case "ArrowRight":
                    t2.forward();
                    break;

                  case "ArrowLeft":
                    t2.rewind();
                    break;

                  case "f":
                    t2.fullscreen.toggle();
                    break;

                  case "c":
                    h2 || t2.toggleCaptions();
                    break;

                  case "l":
                    t2.loop = !t2.loop;
                }

                s2 === "Escape" && !t2.fullscreen.usingNative && t2.fullscreen.active && t2.fullscreen.toggle(), this.lastKey = s2;
              } else this.lastKey = null;

              var u2;
            }
          }, {
            key: "toggleMenu",
            value: function toggleMenu(e2) {
              We.toggleMenu.call(this.player, e2);
            }
          }]);

          return lt;
        }();

        typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" && self;

        var ot = function (e2, t2) {
          return e2(t2 = {
            exports: {}
          }, t2.exports), t2.exports;
        }(function (e2, t2) {
          e2.exports = function () {
            var e3 = function e3() {},
                t3 = {},
                i2 = {},
                s2 = {};

            function n2(e4, t4) {
              e4 = e4.push ? e4 : [e4];
              var n3,
                  a3,
                  l3,
                  o3 = [],
                  r3 = e4.length,
                  c3 = r3;

              for (n3 = function n3(e5, i3) {
                i3.length && o3.push(e5), --c3 || t4(o3);
              }; r3--;) {
                a3 = e4[r3], (l3 = i2[a3]) ? n3(a3, l3) : (s2[a3] = s2[a3] || []).push(n3);
              }
            }

            function a2(e4, t4) {
              if (e4) {
                var n3 = s2[e4];
                if (i2[e4] = t4, n3) for (; n3.length;) {
                  n3[0](e4, t4), n3.splice(0, 1);
                }
              }
            }

            function l2(t4, i3) {
              t4.call && (t4 = {
                success: t4
              }), i3.length ? (t4.error || e3)(i3) : (t4.success || e3)(t4);
            }

            function o2(t4, i3, s3, n3) {
              var a3,
                  l3,
                  r3 = document,
                  c3 = s3.async,
                  h2 = (s3.numRetries || 0) + 1,
                  u2 = s3.before || e3,
                  d2 = t4.replace(/[\?|#].*$/, ""),
                  m2 = t4.replace(/^(css|img)!/, "");
              n3 = n3 || 0, /(^css!|\.css$)/.test(d2) ? ((l3 = r3.createElement("link")).rel = "stylesheet", l3.href = m2, (a3 = "hideFocus" in l3) && l3.relList && (a3 = 0, l3.rel = "preload", l3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l3 = r3.createElement("img")).src = m2 : ((l3 = r3.createElement("script")).src = t4, l3.async = c3 === void 0 || c3), l3.onload = l3.onerror = l3.onbeforeload = function (e4) {
                var r4 = e4.type[0];
                if (a3) try {
                  l3.sheet.cssText.length || (r4 = "e");
                } catch (e5) {
                  e5.code != 18 && (r4 = "e");
                }

                if (r4 == "e") {
                  if ((n3 += 1) < h2) return o2(t4, i3, s3, n3);
                } else if (l3.rel == "preload" && l3.as == "style") return l3.rel = "stylesheet";

                i3(t4, r4, e4.defaultPrevented);
              }, u2(t4, l3) !== false && r3.head.appendChild(l3);
            }

            function r2(e4, t4, i3) {
              var s3,
                  n3,
                  a3 = (e4 = e4.push ? e4 : [e4]).length,
                  l3 = a3,
                  r3 = [];

              for (s3 = function s3(e5, i4, s4) {
                if (i4 == "e" && r3.push(e5), i4 == "b") {
                  if (!s4) return;
                  r3.push(e5);
                }

                --a3 || t4(r3);
              }, n3 = 0; n3 < l3; n3++) {
                o2(e4[n3], s3, i3);
              }
            }

            function c2(e4, i3, s3) {
              var n3, o3;

              if (i3 && i3.trim && (n3 = i3), o3 = (n3 ? s3 : i3) || {}, n3) {
                if (n3 in t3) throw "LoadJS";
                t3[n3] = true;
              }

              function c3(t4, i4) {
                r2(e4, function (e5) {
                  l2(o3, e5), t4 && l2({
                    success: t4,
                    error: i4
                  }, e5), a2(n3, e5);
                }, o3);
              }

              if (o3.returnPromise) return new Promise(c3);
              c3();
            }

            return c2.ready = function (e4, t4) {
              return n2(e4, function (e5) {
                l2(t4, e5);
              }), c2;
            }, c2.done = function (e4) {
              a2(e4, []);
            }, c2.reset = function () {
              t3 = {}, i2 = {}, s2 = {};
            }, c2.isDefined = function (e4) {
              return e4 in t3;
            }, c2;
          }();
        });

        function rt(e2) {
          return new Promise(function (t2, i2) {
            ot(e2, {
              success: t2,
              error: i2
            });
          });
        }

        function ct(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, ve.call(this, this.media, e2 ? "play" : "pause"));
        }

        var ht = {
          setup: function setup() {
            var e2 = this;
            le(e2.elements.wrapper, e2.config.classNames.embed, true), e2.options.speed = e2.config.speed.options, xe.call(e2), L(window.Vimeo) ? ht.ready.call(e2) : rt(e2.config.urls.vimeo.sdk).then(function () {
              ht.ready.call(e2);
            })["catch"](function (t2) {
              e2.debug.warn("Vimeo SDK (player.js) failed to load", t2);
            });
          },
          ready: function ready() {
            var _this28 = this;

            var e2 = this,
                t2 = e2.config.vimeo,
                i2 = t2.premium,
                s2 = t2.referrerPolicy,
                n2 = _objectWithoutProperties(t2, _excluded);

            var a2 = e2.media.getAttribute("src"),
                l2 = "";
            W(a2) ? (a2 = e2.media.getAttribute(e2.config.attributes.embed.id), l2 = e2.media.getAttribute(e2.config.attributes.embed.hash)) : l2 = function (e3) {
              var t3 = e3.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
              return t3 && t3.length === 5 ? t3[4] : null;
            }(a2);
            var o2 = l2 ? {
              h: l2
            } : {};
            i2 && Object.assign(n2, {
              controls: false,
              sidedock: false
            });
            var r2 = Ke(_objectSpread(_objectSpread({
              loop: e2.config.loop.active,
              autoplay: e2.autoplay,
              muted: e2.muted,
              gesture: "media",
              playsinline: !this.config.fullscreen.iosNative
            }, o2), n2)),
                c2 = W(h2 = a2) ? null : $(Number(h2)) ? h2 : h2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : h2;
            var h2;
            var u2 = Z("iframe"),
                d2 = $e(e2.config.urls.vimeo.iframe, c2, r2);
            if (u2.setAttribute("src", d2), u2.setAttribute("allowfullscreen", ""), u2.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), W(s2) || u2.setAttribute("referrerPolicy", s2), i2 || !t2.customControls) u2.setAttribute("data-poster", e2.poster), e2.media = se(u2, e2.media);else {
              var t3 = Z("div", {
                "class": e2.config.classNames.embedContainer,
                "data-poster": e2.poster
              });
              t3.appendChild(u2), e2.media = se(t3, e2.media);
            }
            t2.customControls || Fe($e(e2.config.urls.vimeo.api, d2)).then(function (t3) {
              !W(t3) && t3.thumbnail_url && at.setPoster.call(e2, t3.thumbnail_url)["catch"](function () {});
            }), e2.embed = new window.Vimeo.Player(u2, {
              autopause: e2.config.autopause,
              muted: e2.muted
            }), e2.media.paused = true, e2.media.currentTime = 0, e2.supported.ui && e2.embed.disableTextTrack(), e2.media.play = function () {
              return ct.call(e2, true), e2.embed.play();
            }, e2.media.pause = function () {
              return ct.call(e2, false), e2.embed.pause();
            }, e2.media.stop = function () {
              e2.pause(), e2.currentTime = 0;
            };
            var m2 = e2.media.currentTime;
            Object.defineProperty(e2.media, "currentTime", {
              get: function get() {
                return m2;
              },
              set: function set(t3) {
                var i3 = e2.embed,
                    s3 = e2.media,
                    n3 = e2.paused,
                    a3 = e2.volume,
                    l3 = n3 && !i3.hasPlayed;
                s3.seeking = true, ve.call(e2, s3, "seeking"), Promise.resolve(l3 && i3.setVolume(0)).then(function () {
                  return i3.setCurrentTime(t3);
                }).then(function () {
                  return l3 && i3.pause();
                }).then(function () {
                  return l3 && i3.setVolume(a3);
                })["catch"](function () {});
              }
            });
            var p2 = e2.config.speed.selected;
            Object.defineProperty(e2.media, "playbackRate", {
              get: function get() {
                return p2;
              },
              set: function set(t3) {
                e2.embed.setPlaybackRate(t3).then(function () {
                  p2 = t3, ve.call(e2, e2.media, "ratechange");
                })["catch"](function () {
                  e2.options.speed = [1];
                });
              }
            });
            var g2 = e2.config.volume;
            Object.defineProperty(e2.media, "volume", {
              get: function get() {
                return g2;
              },
              set: function set(t3) {
                e2.embed.setVolume(t3).then(function () {
                  g2 = t3, ve.call(e2, e2.media, "volumechange");
                });
              }
            });
            var f2 = e2.config.muted;
            Object.defineProperty(e2.media, "muted", {
              get: function get() {
                return f2;
              },
              set: function set(t3) {
                var i3 = !!O(t3) && t3;
                e2.embed.setVolume(i3 ? 0 : e2.config.volume).then(function () {
                  f2 = i3, ve.call(e2, e2.media, "volumechange");
                });
              }
            });
            var b2,
                y2 = e2.config.loop;
            Object.defineProperty(e2.media, "loop", {
              get: function get() {
                return y2;
              },
              set: function set(t3) {
                var i3 = O(t3) ? t3 : e2.config.loop.active;
                e2.embed.setLoop(i3).then(function () {
                  y2 = i3;
                });
              }
            }), e2.embed.getVideoUrl().then(function (t3) {
              b2 = t3, We.setDownloadUrl.call(e2);
            })["catch"](function (e3) {
              _this28.debug.warn(e3);
            }), Object.defineProperty(e2.media, "currentSrc", {
              get: function get() {
                return b2;
              }
            }), Object.defineProperty(e2.media, "ended", {
              get: function get() {
                return e2.currentTime === e2.duration;
              }
            }), Promise.all([e2.embed.getVideoWidth(), e2.embed.getVideoHeight()]).then(function (t3) {
              var _t3 = _slicedToArray(t3, 2),
                  i3 = _t3[0],
                  s3 = _t3[1];

              e2.embed.ratio = Ie(i3, s3), xe.call(_this28);
            }), e2.embed.setAutopause(e2.config.autopause).then(function (t3) {
              e2.config.autopause = t3;
            }), e2.embed.getVideoTitle().then(function (t3) {
              e2.config.title = t3, at.setTitle.call(_this28);
            }), e2.embed.getCurrentTime().then(function (t3) {
              m2 = t3, ve.call(e2, e2.media, "timeupdate");
            }), e2.embed.getDuration().then(function (t3) {
              e2.media.duration = t3, ve.call(e2, e2.media, "durationchange");
            }), e2.embed.getTextTracks().then(function (t3) {
              e2.media.textTracks = t3, Ye.setup.call(e2);
            }), e2.embed.on("cuechange", function (_ref18) {
              var _ref18$cues = _ref18.cues,
                  t3 = _ref18$cues === void 0 ? [] : _ref18$cues;
              var i3 = t3.map(function (e3) {
                return function (e4) {
                  var t4 = document.createDocumentFragment(),
                      i4 = document.createElement("div");
                  return t4.appendChild(i4), i4.innerHTML = e4, t4.firstChild.innerText;
                }(e3.text);
              });
              Ye.updateCues.call(e2, i3);
            }), e2.embed.on("loaded", function () {
              if (e2.embed.getPaused().then(function (t3) {
                ct.call(e2, !t3), t3 || ve.call(e2, e2.media, "playing");
              }), H(e2.embed.element) && e2.supported.ui) {
                e2.embed.element.setAttribute("tabindex", -1);
              }
            }), e2.embed.on("bufferstart", function () {
              ve.call(e2, e2.media, "waiting");
            }), e2.embed.on("bufferend", function () {
              ve.call(e2, e2.media, "playing");
            }), e2.embed.on("play", function () {
              ct.call(e2, true), ve.call(e2, e2.media, "playing");
            }), e2.embed.on("pause", function () {
              ct.call(e2, false);
            }), e2.embed.on("timeupdate", function (t3) {
              e2.media.seeking = false, m2 = t3.seconds, ve.call(e2, e2.media, "timeupdate");
            }), e2.embed.on("progress", function (t3) {
              e2.media.buffered = t3.percent, ve.call(e2, e2.media, "progress"), parseInt(t3.percent, 10) === 1 && ve.call(e2, e2.media, "canplaythrough"), e2.embed.getDuration().then(function (t4) {
                t4 !== e2.media.duration && (e2.media.duration = t4, ve.call(e2, e2.media, "durationchange"));
              });
            }), e2.embed.on("seeked", function () {
              e2.media.seeking = false, ve.call(e2, e2.media, "seeked");
            }), e2.embed.on("ended", function () {
              e2.media.paused = true, ve.call(e2, e2.media, "ended");
            }), e2.embed.on("error", function (t3) {
              e2.media.error = t3, ve.call(e2, e2.media, "error");
            }), t2.customControls && setTimeout(function () {
              return at.build.call(e2);
            }, 0);
          }
        };

        function ut(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, ve.call(this, this.media, e2 ? "play" : "pause"));
        }

        function dt(e2) {
          return e2.noCookie ? "https://www.youtube-nocookie.com" : window.location.protocol === "http:" ? "http://www.youtube.com" : void 0;
        }

        var mt = {
          setup: function setup() {
            var _this29 = this;

            if (le(this.elements.wrapper, this.config.classNames.embed, true), L(window.YT) && j(window.YT.Player)) mt.ready.call(this);else {
              var e2 = window.onYouTubeIframeAPIReady;
              window.onYouTubeIframeAPIReady = function () {
                j(e2) && e2(), mt.ready.call(_this29);
              }, rt(this.config.urls.youtube.sdk)["catch"](function (e3) {
                _this29.debug.warn("YouTube API failed to load", e3);
              });
            }
          },
          getTitle: function getTitle(e2) {
            var _this30 = this;

            Fe($e(this.config.urls.youtube.api, e2)).then(function (e3) {
              if (L(e3)) {
                var t2 = e3.title,
                    i2 = e3.height,
                    s2 = e3.width;
                _this30.config.title = t2, at.setTitle.call(_this30), _this30.embed.ratio = Ie(s2, i2);
              }

              xe.call(_this30);
            })["catch"](function () {
              xe.call(_this30);
            });
          },
          ready: function ready() {
            var e2 = this,
                t2 = e2.config.youtube,
                i2 = e2.media && e2.media.getAttribute("id");
            if (!W(i2) && i2.startsWith("youtube-")) return;
            var s2 = e2.media.getAttribute("src");
            W(s2) && (s2 = e2.media.getAttribute(this.config.attributes.embed.id));
            var n2 = W(a2 = s2) ? null : a2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a2;
            var a2;
            var l2 = Z("div", {
              id: "".concat(e2.provider, "-").concat(Math.floor(1e4 * Math.random())),
              "data-poster": t2.customControls ? e2.poster : void 0
            });

            if (e2.media = se(l2, e2.media), t2.customControls) {
              var t3 = function t3(e3) {
                return "https://i.ytimg.com/vi/".concat(n2, "/").concat(e3, "default.jpg");
              };

              nt(t3("maxres"), 121)["catch"](function () {
                return nt(t3("sd"), 121);
              })["catch"](function () {
                return nt(t3("hq"));
              }).then(function (t4) {
                return at.setPoster.call(e2, t4.src);
              }).then(function (t4) {
                t4.includes("maxres") || (e2.elements.poster.style.backgroundSize = "cover");
              })["catch"](function () {});
            }

            e2.embed = new window.YT.Player(e2.media, {
              videoId: n2,
              host: dt(t2),
              playerVars: X({}, {
                autoplay: e2.config.autoplay ? 1 : 0,
                hl: e2.config.hl,
                controls: e2.supported.ui && t2.customControls ? 0 : 1,
                disablekb: 1,
                playsinline: e2.config.fullscreen.iosNative ? 0 : 1,
                cc_load_policy: e2.captions.active ? 1 : 0,
                cc_lang_pref: e2.config.captions.language,
                widget_referrer: window ? window.location.href : null
              }, t2),
              events: {
                onError: function onError(t3) {
                  if (!e2.media.error) {
                    var i3 = t3.data,
                        s3 = {
                      2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                      5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                      100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                      101: "The owner of the requested video does not allow it to be played in embedded players.",
                      150: "The owner of the requested video does not allow it to be played in embedded players."
                    }[i3] || "An unknown error occured";
                    e2.media.error = {
                      code: i3,
                      message: s3
                    }, ve.call(e2, e2.media, "error");
                  }
                },
                onPlaybackRateChange: function onPlaybackRateChange(t3) {
                  var i3 = t3.target;
                  e2.media.playbackRate = i3.getPlaybackRate(), ve.call(e2, e2.media, "ratechange");
                },
                onReady: function onReady(i3) {
                  if (j(e2.media.play)) return;
                  var s3 = i3.target;
                  mt.getTitle.call(e2, n2), e2.media.play = function () {
                    ut.call(e2, true), s3.playVideo();
                  }, e2.media.pause = function () {
                    ut.call(e2, false), s3.pauseVideo();
                  }, e2.media.stop = function () {
                    s3.stopVideo();
                  }, e2.media.duration = s3.getDuration(), e2.media.paused = true, e2.media.currentTime = 0, Object.defineProperty(e2.media, "currentTime", {
                    get: function get() {
                      return Number(s3.getCurrentTime());
                    },
                    set: function set(t3) {
                      e2.paused && !e2.embed.hasPlayed && e2.embed.mute(), e2.media.seeking = true, ve.call(e2, e2.media, "seeking"), s3.seekTo(t3);
                    }
                  }), Object.defineProperty(e2.media, "playbackRate", {
                    get: function get() {
                      return s3.getPlaybackRate();
                    },
                    set: function set(e3) {
                      s3.setPlaybackRate(e3);
                    }
                  });
                  var a3 = e2.config.volume;
                  Object.defineProperty(e2.media, "volume", {
                    get: function get() {
                      return a3;
                    },
                    set: function set(t3) {
                      a3 = t3, s3.setVolume(100 * a3), ve.call(e2, e2.media, "volumechange");
                    }
                  });
                  var l3 = e2.config.muted;
                  Object.defineProperty(e2.media, "muted", {
                    get: function get() {
                      return l3;
                    },
                    set: function set(t3) {
                      var i4 = O(t3) ? t3 : l3;
                      l3 = i4, s3[i4 ? "mute" : "unMute"](), s3.setVolume(100 * a3), ve.call(e2, e2.media, "volumechange");
                    }
                  }), Object.defineProperty(e2.media, "currentSrc", {
                    get: function get() {
                      return s3.getVideoUrl();
                    }
                  }), Object.defineProperty(e2.media, "ended", {
                    get: function get() {
                      return e2.currentTime === e2.duration;
                    }
                  });
                  var o2 = s3.getAvailablePlaybackRates();
                  e2.options.speed = o2.filter(function (t3) {
                    return e2.config.speed.options.includes(t3);
                  }), e2.supported.ui && t2.customControls && e2.media.setAttribute("tabindex", -1), ve.call(e2, e2.media, "timeupdate"), ve.call(e2, e2.media, "durationchange"), clearInterval(e2.timers.buffering), e2.timers.buffering = setInterval(function () {
                    e2.media.buffered = s3.getVideoLoadedFraction(), (e2.media.lastBuffered === null || e2.media.lastBuffered < e2.media.buffered) && ve.call(e2, e2.media, "progress"), e2.media.lastBuffered = e2.media.buffered, e2.media.buffered === 1 && (clearInterval(e2.timers.buffering), ve.call(e2, e2.media, "canplaythrough"));
                  }, 200), t2.customControls && setTimeout(function () {
                    return at.build.call(e2);
                  }, 50);
                },
                onStateChange: function onStateChange(i3) {
                  var s3 = i3.target;
                  clearInterval(e2.timers.playing);

                  switch (e2.media.seeking && [1, 2].includes(i3.data) && (e2.media.seeking = false, ve.call(e2, e2.media, "seeked")), i3.data) {
                    case -1:
                      ve.call(e2, e2.media, "timeupdate"), e2.media.buffered = s3.getVideoLoadedFraction(), ve.call(e2, e2.media, "progress");
                      break;

                    case 0:
                      ut.call(e2, false), e2.media.loop ? (s3.stopVideo(), s3.playVideo()) : ve.call(e2, e2.media, "ended");
                      break;

                    case 1:
                      t2.customControls && !e2.config.autoplay && e2.media.paused && !e2.embed.hasPlayed ? e2.media.pause() : (ut.call(e2, true), ve.call(e2, e2.media, "playing"), e2.timers.playing = setInterval(function () {
                        ve.call(e2, e2.media, "timeupdate");
                      }, 50), e2.media.duration !== s3.getDuration() && (e2.media.duration = s3.getDuration(), ve.call(e2, e2.media, "durationchange")));
                      break;

                    case 2:
                      e2.muted || e2.embed.unMute(), ut.call(e2, false);
                      break;

                    case 3:
                      ve.call(e2, e2.media, "waiting");
                  }

                  ve.call(e2, e2.elements.container, "statechange", false, {
                    code: i3.data
                  });
                }
              }
            });
          }
        },
            pt = {
          setup: function setup() {
            this.media ? (le(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), le(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && le(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = Z("div", {
              "class": this.config.classNames.video
            }), J(this.media, this.elements.wrapper), this.elements.poster = Z("div", {
              "class": this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Le.setup.call(this) : this.isYouTube ? mt.setup.call(this) : this.isVimeo && ht.setup.call(this)) : this.debug.warn("No media element found!");
          }
        };

        var gt = /*#__PURE__*/function () {
          function gt(t2) {
            var _this31 = this;

            _classCallCheck(this, gt);

            e(this, "load", function () {
              _this31.enabled && (L(window.google) && L(window.google.ima) ? _this31.ready() : rt(_this31.player.config.urls.googleIMA.sdk).then(function () {
                _this31.ready();
              })["catch"](function () {
                _this31.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e(this, "ready", function () {
              var e2;
              _this31.enabled || ((e2 = _this31).manager && e2.manager.destroy(), e2.elements.displayContainer && e2.elements.displayContainer.destroy(), e2.elements.container.remove()), _this31.startSafetyTimer(12e3, "ready()"), _this31.managerPromise.then(function () {
                _this31.clearSafetyTimer("onAdsManagerLoaded()");
              }), _this31.listeners(), _this31.setupIMA();
            }), e(this, "setupIMA", function () {
              _this31.elements.container = Z("div", {
                "class": _this31.player.config.classNames.ads
              }), _this31.player.elements.container.appendChild(_this31.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(_this31.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(_this31.player.config.playsinline), _this31.elements.displayContainer = new google.ima.AdDisplayContainer(_this31.elements.container, _this31.player.media), _this31.loader = new google.ima.AdsLoader(_this31.elements.displayContainer), _this31.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e2) {
                return _this31.onAdsManagerLoaded(e2);
              }, false), _this31.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e2) {
                return _this31.onAdError(e2);
              }, false), _this31.requestAds();
            }), e(this, "requestAds", function () {
              var e2 = _this31.player.elements.container;

              try {
                var t3 = new google.ima.AdsRequest();
                t3.adTagUrl = _this31.tagUrl, t3.linearAdSlotWidth = e2.offsetWidth, t3.linearAdSlotHeight = e2.offsetHeight, t3.nonLinearAdSlotWidth = e2.offsetWidth, t3.nonLinearAdSlotHeight = e2.offsetHeight, t3.forceNonLinearFullSlot = false, t3.setAdWillPlayMuted(!_this31.player.muted), _this31.loader.requestAds(t3);
              } catch (e3) {
                _this31.onAdError(e3);
              }
            }), e(this, "pollCountdown", function () {
              var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              if (!e2) return clearInterval(_this31.countdownTimer), void _this31.elements.container.removeAttribute("data-badge-text");
              _this31.countdownTimer = setInterval(function () {
                var e3 = Ue(Math.max(_this31.manager.getRemainingTime(), 0)),
                    t3 = "".concat(He.get("advertisement", _this31.player.config), " - ").concat(e3);

                _this31.elements.container.setAttribute("data-badge-text", t3);
              }, 100);
            }), e(this, "onAdsManagerLoaded", function (e2) {
              if (!_this31.enabled) return;
              var t3 = new google.ima.AdsRenderingSettings();
              t3.restoreCustomPlaybackStateOnAdBreakComplete = true, t3.enablePreloading = true, _this31.manager = e2.getAdsManager(_this31.player, t3), _this31.cuePoints = _this31.manager.getCuePoints(), _this31.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e3) {
                return _this31.onAdError(e3);
              }), Object.keys(google.ima.AdEvent.Type).forEach(function (e3) {
                _this31.manager.addEventListener(google.ima.AdEvent.Type[e3], function (e4) {
                  return _this31.onAdEvent(e4);
                });
              }), _this31.trigger("loaded");
            }), e(this, "addCuePoints", function () {
              W(_this31.cuePoints) || _this31.cuePoints.forEach(function (e2) {
                if (e2 !== 0 && e2 !== -1 && e2 < _this31.player.duration) {
                  var t3 = _this31.player.elements.progress;

                  if (H(t3)) {
                    var i2 = 100 / _this31.player.duration * e2,
                        s2 = Z("span", {
                      "class": _this31.player.config.classNames.cues
                    });
                    s2.style.left = "".concat(i2.toString(), "%"), t3.appendChild(s2);
                  }
                }
              });
            }), e(this, "onAdEvent", function (e2) {
              var t3 = _this31.player.elements.container,
                  i2 = e2.getAd(),
                  s2 = e2.getAdData();

              switch (function (e3) {
                ve.call(_this31.player, _this31.player.media, "ads".concat(e3.replace(/_/g, "").toLowerCase()));
              }(e2.type), e2.type) {
                case google.ima.AdEvent.Type.LOADED:
                  _this31.trigger("loaded"), _this31.pollCountdown(true), i2.isLinear() || (i2.width = t3.offsetWidth, i2.height = t3.offsetHeight);
                  break;

                case google.ima.AdEvent.Type.STARTED:
                  _this31.manager.setVolume(_this31.player.volume);

                  break;

                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  _this31.player.ended ? _this31.loadAds() : _this31.loader.contentComplete();
                  break;

                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  _this31.pauseContent();

                  break;

                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  _this31.pollCountdown(), _this31.resumeContent();
                  break;

                case google.ima.AdEvent.Type.LOG:
                  s2.adError && _this31.player.debug.warn("Non-fatal ad error: ".concat(s2.adError.getMessage()));
              }
            }), e(this, "onAdError", function (e2) {
              _this31.cancel(), _this31.player.debug.warn("Ads error", e2);
            }), e(this, "listeners", function () {
              var e2 = _this31.player.elements.container;
              var t3;
              _this31.player.on("canplay", function () {
                _this31.addCuePoints();
              }), _this31.player.on("ended", function () {
                _this31.loader.contentComplete();
              }), _this31.player.on("timeupdate", function () {
                t3 = _this31.player.currentTime;
              }), _this31.player.on("seeked", function () {
                var e3 = _this31.player.currentTime;
                W(_this31.cuePoints) || _this31.cuePoints.forEach(function (i2, s2) {
                  t3 < i2 && i2 < e3 && (_this31.manager.discardAdBreak(), _this31.cuePoints.splice(s2, 1));
                });
              }), window.addEventListener("resize", function () {
                _this31.manager && _this31.manager.resize(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e(this, "play", function () {
              var e2 = _this31.player.elements.container;
              _this31.managerPromise || _this31.resumeContent(), _this31.managerPromise.then(function () {
                _this31.manager.setVolume(_this31.player.volume), _this31.elements.displayContainer.initialize();

                try {
                  _this31.initialized || (_this31.manager.init(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL), _this31.manager.start()), _this31.initialized = true;
                } catch (e3) {
                  _this31.onAdError(e3);
                }
              })["catch"](function () {});
            }), e(this, "resumeContent", function () {
              _this31.elements.container.style.zIndex = "", _this31.playing = false, ke(_this31.player.media.play());
            }), e(this, "pauseContent", function () {
              _this31.elements.container.style.zIndex = 3, _this31.playing = true, _this31.player.media.pause();
            }), e(this, "cancel", function () {
              _this31.initialized && _this31.resumeContent(), _this31.trigger("error"), _this31.loadAds();
            }), e(this, "loadAds", function () {
              _this31.managerPromise.then(function () {
                _this31.manager && _this31.manager.destroy(), _this31.managerPromise = new Promise(function (e2) {
                  _this31.on("loaded", e2), _this31.player.debug.log(_this31.manager);
                }), _this31.initialized = false, _this31.requestAds();
              })["catch"](function () {});
            }), e(this, "trigger", function (e2) {
              for (var _len4 = arguments.length, t3 = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                t3[_key4 - 1] = arguments[_key4];
              }

              var i2 = _this31.events[e2];
              D(i2) && i2.forEach(function (e3) {
                j(e3) && e3.apply(_this31, t3);
              });
            }), e(this, "on", function (e2, t3) {
              return D(_this31.events[e2]) || (_this31.events[e2] = []), _this31.events[e2].push(t3), _this31;
            }), e(this, "startSafetyTimer", function (e2, t3) {
              _this31.player.debug.log("Safety timer invoked from: ".concat(t3)), _this31.safetyTimer = setTimeout(function () {
                _this31.cancel(), _this31.clearSafetyTimer("startSafetyTimer()");
              }, e2);
            }), e(this, "clearSafetyTimer", function (e2) {
              I(_this31.safetyTimer) || (_this31.player.debug.log("Safety timer cleared from: ".concat(e2)), clearTimeout(_this31.safetyTimer), _this31.safetyTimer = null);
            }), this.player = t2, this.config = t2.config.ads, this.playing = false, this.initialized = false, this.elements = {
              container: null,
              displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e2, t3) {
              _this31.on("loaded", e2), _this31.on("error", t3);
            }), this.load();
          }

          _createClass(gt, [{
            key: "enabled",
            get: function get() {
              var e2 = this.config;
              return this.player.isHTML5 && this.player.isVideo && e2.enabled && (!W(e2.publisherId) || U(e2.tagUrl));
            }
          }, {
            key: "tagUrl",
            get: function get() {
              var e2 = this.config;
              if (U(e2.tagUrl)) return e2.tagUrl;
              return "https://go.aniview.com/api/adserver6/vast/?".concat(Ke({
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e2.publisherId
              }));
            }
          }]);

          return gt;
        }();

        function ft() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var i2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;
          return Math.min(Math.max(e2, t2), i2);
        }

        var bt = function bt(e2) {
          var t2 = [];
          return e2.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e3) {
            var i2 = {};
            e3.split(/\r\n|\n|\r/).forEach(function (e4) {
              if ($(i2.startTime)) {
                if (!W(e4.trim()) && W(i2.text)) {
                  var _t4, _t5, _t3$1$split, _t3$1$split2;

                  var t3 = e4.trim().split("#xywh=");
                  (_t4 = t3, _t5 = _slicedToArray(_t4, 1), i2.text = _t5[0], _t4), t3[1] && (_t3$1$split = t3[1].split(","), _t3$1$split2 = _slicedToArray(_t3$1$split, 4), i2.x = _t3$1$split2[0], i2.y = _t3$1$split2[1], i2.w = _t3$1$split2[2], i2.h = _t3$1$split2[3], _t3$1$split);
                }
              } else {
                var _t6 = e4.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);

                _t6 && (i2.startTime = 60 * Number(_t6[1] || 0) * 60 + 60 * Number(_t6[2]) + Number(_t6[3]) + Number("0.".concat(_t6[4])), i2.endTime = 60 * Number(_t6[6] || 0) * 60 + 60 * Number(_t6[7]) + Number(_t6[8]) + Number("0.".concat(_t6[9])));
              }
            }), i2.text && t2.push(i2);
          }), t2;
        },
            yt = function yt(e2, t2) {
          var i2 = {};
          return e2 > t2.width / t2.height ? (i2.width = t2.width, i2.height = 1 / e2 * t2.width) : (i2.height = t2.height, i2.width = e2 * t2.height), i2;
        };

        var vt = /*#__PURE__*/function () {
          function vt(t2) {
            var _this32 = this;

            _classCallCheck(this, vt);

            e(this, "load", function () {
              _this32.player.elements.display.seekTooltip && (_this32.player.elements.display.seekTooltip.hidden = _this32.enabled), _this32.enabled && _this32.getThumbnails().then(function () {
                _this32.enabled && (_this32.render(), _this32.determineContainerAutoSizing(), _this32.loaded = true);
              });
            }), e(this, "getThumbnails", function () {
              return new Promise(function (e2) {
                var t3 = _this32.player.config.previewThumbnails.src;
                if (W(t3)) throw new Error("Missing previewThumbnails.src config attribute");

                var i2 = function i2() {
                  _this32.thumbnails.sort(function (e3, t4) {
                    return e3.height - t4.height;
                  }), _this32.player.debug.log("Preview thumbnails", _this32.thumbnails), e2();
                };

                if (j(t3)) t3(function (e3) {
                  _this32.thumbnails = e3, i2();
                });else {
                  var e3 = (_(t3) ? [t3] : t3).map(function (e4) {
                    return _this32.getThumbnail(e4);
                  });
                  Promise.all(e3).then(i2);
                }
              });
            }), e(this, "getThumbnail", function (e2) {
              return new Promise(function (t3) {
                Fe(e2).then(function (i2) {
                  var s2 = {
                    frames: bt(i2),
                    height: null,
                    urlPrefix: ""
                  };
                  s2.frames[0].text.startsWith("/") || s2.frames[0].text.startsWith("http://") || s2.frames[0].text.startsWith("https://") || (s2.urlPrefix = e2.substring(0, e2.lastIndexOf("/") + 1));
                  var n2 = new Image();
                  n2.onload = function () {
                    s2.height = n2.naturalHeight, s2.width = n2.naturalWidth, _this32.thumbnails.push(s2), t3();
                  }, n2.src = s2.urlPrefix + s2.frames[0].text;
                });
              });
            }), e(this, "startMove", function (e2) {
              if (_this32.loaded && R(e2) && ["touchmove", "mousemove"].includes(e2.type) && _this32.player.media.duration) {
                if (e2.type === "touchmove") _this32.seekTime = _this32.player.media.duration * (_this32.player.elements.inputs.seek.value / 100);else {
                  var t3, i2;

                  var s2 = _this32.player.elements.progress.getBoundingClientRect(),
                      n2 = 100 / s2.width * (e2.pageX - s2.left);

                  _this32.seekTime = _this32.player.media.duration * (n2 / 100), _this32.seekTime < 0 && (_this32.seekTime = 0), _this32.seekTime > _this32.player.media.duration - 1 && (_this32.seekTime = _this32.player.media.duration - 1), _this32.mousePosX = e2.pageX, _this32.elements.thumb.time.innerText = Ue(_this32.seekTime);
                  var a2 = (t3 = _this32.player.config.markers) === null || t3 === void 0 || (i2 = t3.points) === null || i2 === void 0 ? void 0 : i2.find(function (_ref19) {
                    var e3 = _ref19.time;
                    return e3 === Math.round(_this32.seekTime);
                  });
                  a2 && _this32.elements.thumb.time.insertAdjacentHTML("afterbegin", "".concat(a2.label, "<br>"));
                }

                _this32.showImageAtCurrentTime();
              }
            }), e(this, "endMove", function () {
              _this32.toggleThumbContainer(false, true);
            }), e(this, "startScrubbing", function (e2) {
              (I(e2.button) || e2.button === false || e2.button === 0) && (_this32.mouseDown = true, _this32.player.media.duration && (_this32.toggleScrubbingContainer(true), _this32.toggleThumbContainer(false, true), _this32.showImageAtCurrentTime()));
            }), e(this, "endScrubbing", function () {
              _this32.mouseDown = false, Math.ceil(_this32.lastTime) === Math.ceil(_this32.player.media.currentTime) ? _this32.toggleScrubbingContainer(false) : ye.call(_this32.player, _this32.player.media, "timeupdate", function () {
                _this32.mouseDown || _this32.toggleScrubbingContainer(false);
              });
            }), e(this, "listeners", function () {
              _this32.player.on("play", function () {
                _this32.toggleThumbContainer(false, true);
              }), _this32.player.on("seeked", function () {
                _this32.toggleThumbContainer(false);
              }), _this32.player.on("timeupdate", function () {
                _this32.lastTime = _this32.player.media.currentTime;
              });
            }), e(this, "render", function () {
              _this32.elements.thumb.container = Z("div", {
                "class": _this32.player.config.classNames.previewThumbnails.thumbContainer
              }), _this32.elements.thumb.imageContainer = Z("div", {
                "class": _this32.player.config.classNames.previewThumbnails.imageContainer
              }), _this32.elements.thumb.container.appendChild(_this32.elements.thumb.imageContainer);
              var e2 = Z("div", {
                "class": _this32.player.config.classNames.previewThumbnails.timeContainer
              });
              _this32.elements.thumb.time = Z("span", {}, "00:00"), e2.appendChild(_this32.elements.thumb.time), _this32.elements.thumb.imageContainer.appendChild(e2), H(_this32.player.elements.progress) && _this32.player.elements.progress.appendChild(_this32.elements.thumb.container), _this32.elements.scrubbing.container = Z("div", {
                "class": _this32.player.config.classNames.previewThumbnails.scrubbingContainer
              }), _this32.player.elements.wrapper.appendChild(_this32.elements.scrubbing.container);
            }), e(this, "destroy", function () {
              _this32.elements.thumb.container && _this32.elements.thumb.container.remove(), _this32.elements.scrubbing.container && _this32.elements.scrubbing.container.remove();
            }), e(this, "showImageAtCurrentTime", function () {
              _this32.mouseDown ? _this32.setScrubbingContainerSize() : _this32.setThumbContainerSizeAndPos();

              var e2 = _this32.thumbnails[0].frames.findIndex(function (e3) {
                return _this32.seekTime >= e3.startTime && _this32.seekTime <= e3.endTime;
              }),
                  t3 = e2 >= 0;

              var i2 = 0;
              _this32.mouseDown || _this32.toggleThumbContainer(t3), t3 && (_this32.thumbnails.forEach(function (t4, s2) {
                _this32.loadedImages.includes(t4.frames[e2].text) && (i2 = s2);
              }), e2 !== _this32.showingThumb && (_this32.showingThumb = e2, _this32.loadImage(i2)));
            }), e(this, "loadImage", function () {
              var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var t3 = _this32.showingThumb,
                  i2 = _this32.thumbnails[e2],
                  s2 = i2.urlPrefix,
                  n2 = i2.frames[t3],
                  a2 = i2.frames[t3].text,
                  l2 = s2 + a2;
              if (_this32.currentImageElement && _this32.currentImageElement.dataset.filename === a2) _this32.showImage(_this32.currentImageElement, n2, e2, t3, a2, false), _this32.currentImageElement.dataset.index = t3, _this32.removeOldImages(_this32.currentImageElement);else {
                _this32.loadingImage && _this32.usingSprites && (_this32.loadingImage.onload = null);
                var i3 = new Image();
                i3.src = l2, i3.dataset.index = t3, i3.dataset.filename = a2, _this32.showingThumbFilename = a2, _this32.player.debug.log("Loading image: ".concat(l2)), i3.onload = function () {
                  return _this32.showImage(i3, n2, e2, t3, a2, true);
                }, _this32.loadingImage = i3, _this32.removeOldImages(i3);
              }
            }), e(this, "showImage", function (e2, t3, i2, s2, n2) {
              var a2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
              _this32.player.debug.log("Showing thumb: ".concat(n2, ". num: ").concat(s2, ". qual: ").concat(i2, ". newimg: ").concat(a2)), _this32.setImageSizeAndOffset(e2, t3), a2 && (_this32.currentImageContainer.appendChild(e2), _this32.currentImageElement = e2, _this32.loadedImages.includes(n2) || _this32.loadedImages.push(n2)), _this32.preloadNearby(s2, true).then(_this32.preloadNearby(s2, false)).then(_this32.getHigherQuality(i2, e2, t3, n2));
            }), e(this, "removeOldImages", function (e2) {
              Array.from(_this32.currentImageContainer.children).forEach(function (t3) {
                if (t3.tagName.toLowerCase() !== "img") return;
                var i2 = _this32.usingSprites ? 500 : 1e3;

                if (t3.dataset.index !== e2.dataset.index && !t3.dataset.deleting) {
                  t3.dataset.deleting = true;
                  var e3 = _this32.currentImageContainer;
                  setTimeout(function () {
                    e3.removeChild(t3), _this32.player.debug.log("Removing thumb: ".concat(t3.dataset.filename));
                  }, i2);
                }
              });
            }), e(this, "preloadNearby", function (e2) {
              var t3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              return new Promise(function (i2) {
                setTimeout(function () {
                  var s2 = _this32.thumbnails[0].frames[e2].text;

                  if (_this32.showingThumbFilename === s2) {
                    var n2;
                    n2 = t3 ? _this32.thumbnails[0].frames.slice(e2) : _this32.thumbnails[0].frames.slice(0, e2).reverse();
                    var a2 = false;
                    n2.forEach(function (e3) {
                      var t4 = e3.text;

                      if (t4 !== s2 && !_this32.loadedImages.includes(t4)) {
                        a2 = true, _this32.player.debug.log("Preloading thumb filename: ".concat(t4));
                        var e4 = _this32.thumbnails[0].urlPrefix,
                            s3 = e4 + t4,
                            n3 = new Image();
                        n3.src = s3, n3.onload = function () {
                          _this32.player.debug.log("Preloaded thumb filename: ".concat(t4)), _this32.loadedImages.includes(t4) || _this32.loadedImages.push(t4), i2();
                        };
                      }
                    }), a2 || i2();
                  }
                }, 300);
              });
            }), e(this, "getHigherQuality", function (e2, t3, i2, s2) {
              if (e2 < _this32.thumbnails.length - 1) {
                var n2 = t3.naturalHeight;
                _this32.usingSprites && (n2 = i2.h), n2 < _this32.thumbContainerHeight && setTimeout(function () {
                  _this32.showingThumbFilename === s2 && (_this32.player.debug.log("Showing higher quality thumb for: ".concat(s2)), _this32.loadImage(e2 + 1));
                }, 300);
              }
            }), e(this, "toggleThumbContainer", function () {
              var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              var t3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              var i2 = _this32.player.config.classNames.previewThumbnails.thumbContainerShown;
              _this32.elements.thumb.container.classList.toggle(i2, e2), !e2 && t3 && (_this32.showingThumb = null, _this32.showingThumbFilename = null);
            }), e(this, "toggleScrubbingContainer", function () {
              var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              var t3 = _this32.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              _this32.elements.scrubbing.container.classList.toggle(t3, e2), e2 || (_this32.showingThumb = null, _this32.showingThumbFilename = null);
            }), e(this, "determineContainerAutoSizing", function () {
              (_this32.elements.thumb.imageContainer.clientHeight > 20 || _this32.elements.thumb.imageContainer.clientWidth > 20) && (_this32.sizeSpecifiedInCSS = true);
            }), e(this, "setThumbContainerSizeAndPos", function () {
              var e2 = _this32.elements.thumb.imageContainer;

              if (_this32.sizeSpecifiedInCSS) {
                if (e2.clientHeight > 20 && e2.clientWidth < 20) {
                  var t3 = Math.floor(e2.clientHeight * _this32.thumbAspectRatio);
                  e2.style.width = "".concat(t3, "px");
                } else if (e2.clientHeight < 20 && e2.clientWidth > 20) {
                  var _t7 = Math.floor(e2.clientWidth / _this32.thumbAspectRatio);

                  e2.style.height = "".concat(_t7, "px");
                }
              } else {
                var _t8 = Math.floor(_this32.thumbContainerHeight * _this32.thumbAspectRatio);

                e2.style.height = "".concat(_this32.thumbContainerHeight, "px"), e2.style.width = "".concat(_t8, "px");
              }

              _this32.setThumbContainerPos();
            }), e(this, "setThumbContainerPos", function () {
              var e2 = _this32.player.elements.progress.getBoundingClientRect(),
                  t3 = _this32.player.elements.container.getBoundingClientRect(),
                  i2 = _this32.elements.thumb.container,
                  s2 = t3.left - e2.left + 10,
                  n2 = t3.right - e2.left - i2.clientWidth - 10,
                  a2 = _this32.mousePosX - e2.left - i2.clientWidth / 2,
                  l2 = ft(a2, s2, n2);

              i2.style.left = "".concat(l2, "px"), i2.style.setProperty("--preview-arrow-offset", a2 - l2 + "px");
            }), e(this, "setScrubbingContainerSize", function () {
              var _yt = yt(_this32.thumbAspectRatio, {
                width: _this32.player.media.clientWidth,
                height: _this32.player.media.clientHeight
              }),
                  e2 = _yt.width,
                  t3 = _yt.height;

              _this32.elements.scrubbing.container.style.width = "".concat(e2, "px"), _this32.elements.scrubbing.container.style.height = "".concat(t3, "px");
            }), e(this, "setImageSizeAndOffset", function (e2, t3) {
              if (!_this32.usingSprites) return;
              var i2 = _this32.thumbContainerHeight / t3.h;
              e2.style.height = e2.naturalHeight * i2 + "px", e2.style.width = e2.naturalWidth * i2 + "px", e2.style.left = "-".concat(t3.x * i2, "px"), e2.style.top = "-".concat(t3.y * i2, "px");
            }), this.player = t2, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = {
              thumb: {},
              scrubbing: {}
            }, this.load();
          }

          _createClass(vt, [{
            key: "enabled",
            get: function get() {
              return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
            }
          }, {
            key: "currentImageContainer",
            get: function get() {
              return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
            }
          }, {
            key: "usingSprites",
            get: function get() {
              return Object.keys(this.thumbnails[0].frames[0]).includes("w");
            }
          }, {
            key: "thumbAspectRatio",
            get: function get() {
              return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
            }
          }, {
            key: "thumbContainerHeight",
            get: function get() {
              if (this.mouseDown) {
                var _yt2 = yt(this.thumbAspectRatio, {
                  width: this.player.media.clientWidth,
                  height: this.player.media.clientHeight
                }),
                    e2 = _yt2.height;

                return e2;
              }

              return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
            }
          }, {
            key: "currentImageElement",
            get: function get() {
              return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
            },
            set: function set(e2) {
              this.mouseDown ? this.currentScrubbingImageElement = e2 : this.currentThumbnailImageElement = e2;
            }
          }]);

          return vt;
        }();

        var wt = {
          insertElements: function insertElements(e2, t2) {
            var _this33 = this;

            _(t2) ? ee(e2, this.media, {
              src: t2
            }) : D(t2) && t2.forEach(function (t3) {
              ee(e2, _this33.media, t3);
            });
          },
          change: function change(e2) {
            var _this34 = this;

            Q(e2, "sources.length") ? (Le.cancelRequests.call(this), this.destroy.call(this, function () {
              _this34.options.quality = [], te(_this34.media), _this34.media = null, H(_this34.elements.container) && _this34.elements.container.removeAttribute("class");

              var t2 = e2.sources,
                  i2 = e2.type,
                  _t9 = _slicedToArray(t2, 1),
                  _t9$ = _t9[0],
                  _t9$$provider = _t9$.provider,
                  s2 = _t9$$provider === void 0 ? Ge.html5 : _t9$$provider,
                  n2 = _t9$.src,
                  a2 = s2 === "html5" ? i2 : "div",
                  l2 = s2 === "html5" ? {} : {
                src: n2
              };

              Object.assign(_this34, {
                provider: s2,
                type: i2,
                supported: me.check(i2, s2, _this34.config.playsinline),
                media: Z(a2, l2)
              }), _this34.elements.container.appendChild(_this34.media), O(e2.autoplay) && (_this34.config.autoplay = e2.autoplay), _this34.isHTML5 && (_this34.config.crossorigin && _this34.media.setAttribute("crossorigin", ""), _this34.config.autoplay && _this34.media.setAttribute("autoplay", ""), W(e2.poster) || (_this34.poster = e2.poster), _this34.config.loop.active && _this34.media.setAttribute("loop", ""), _this34.config.muted && _this34.media.setAttribute("muted", ""), _this34.config.playsinline && _this34.media.setAttribute("playsinline", "")), at.addStyleHook.call(_this34), _this34.isHTML5 && wt.insertElements.call(_this34, "source", t2), _this34.config.title = e2.title, pt.setup.call(_this34), _this34.isHTML5 && Object.keys(e2).includes("tracks") && wt.insertElements.call(_this34, "track", e2.tracks), (_this34.isHTML5 || _this34.isEmbed && !_this34.supported.ui) && at.build.call(_this34), _this34.isHTML5 && _this34.media.load(), W(e2.previewThumbnails) || (Object.assign(_this34.config.previewThumbnails, e2.previewThumbnails), _this34.previewThumbnails && _this34.previewThumbnails.loaded && (_this34.previewThumbnails.destroy(), _this34.previewThumbnails = null), _this34.config.previewThumbnails.enabled && (_this34.previewThumbnails = new vt(_this34))), _this34.fullscreen.update();
            }, true)) : this.debug.warn("Invalid source format");
          }
        };

        var Tt = /*#__PURE__*/function () {
          function Tt(t2, i2) {
            var _this35 = this;

            _classCallCheck(this, Tt);

            if (e(this, "play", function () {
              return j(_this35.media.play) ? (_this35.ads && _this35.ads.enabled && _this35.ads.managerPromise.then(function () {
                return _this35.ads.play();
              })["catch"](function () {
                return ke(_this35.media.play());
              }), _this35.media.play()) : null;
            }), e(this, "pause", function () {
              return _this35.playing && j(_this35.media.pause) ? _this35.media.pause() : null;
            }), e(this, "togglePlay", function (e2) {
              return (O(e2) ? e2 : !_this35.playing) ? _this35.play() : _this35.pause();
            }), e(this, "stop", function () {
              _this35.isHTML5 ? (_this35.pause(), _this35.restart()) : j(_this35.media.stop) && _this35.media.stop();
            }), e(this, "restart", function () {
              _this35.currentTime = 0;
            }), e(this, "rewind", function (e2) {
              _this35.currentTime -= $(e2) ? e2 : _this35.config.seekTime;
            }), e(this, "forward", function (e2) {
              _this35.currentTime += $(e2) ? e2 : _this35.config.seekTime;
            }), e(this, "increaseVolume", function (e2) {
              var t3 = _this35.media.muted ? 0 : _this35.volume;
              _this35.volume = t3 + ($(e2) ? e2 : 0);
            }), e(this, "decreaseVolume", function (e2) {
              _this35.increaseVolume(-e2);
            }), e(this, "airplay", function () {
              me.airplay && _this35.media.webkitShowPlaybackTargetPicker();
            }), e(this, "toggleControls", function (e2) {
              if (_this35.supported.ui && !_this35.isAudio) {
                var t3 = oe(_this35.elements.container, _this35.config.classNames.hideControls),
                    i3 = e2 === void 0 ? void 0 : !e2,
                    s3 = le(_this35.elements.container, _this35.config.classNames.hideControls, i3);

                if (s3 && D(_this35.config.controls) && _this35.config.controls.includes("settings") && !W(_this35.config.settings) && We.toggleMenu.call(_this35, false), s3 !== t3) {
                  var e3 = s3 ? "controlshidden" : "controlsshown";
                  ve.call(_this35, _this35.media, e3);
                }

                return !s3;
              }

              return false;
            }), e(this, "on", function (e2, t3) {
              fe.call(_this35, _this35.elements.container, e2, t3);
            }), e(this, "once", function (e2, t3) {
              ye.call(_this35, _this35.elements.container, e2, t3);
            }), e(this, "off", function (e2, t3) {
              be(_this35.elements.container, e2, t3);
            }), e(this, "destroy", function (e2) {
              var t3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              if (!_this35.ready) return;

              var i3 = function i3() {
                document.body.style.overflow = "", _this35.embed = null, t3 ? (Object.keys(_this35.elements).length && (te(_this35.elements.buttons.play), te(_this35.elements.captions), te(_this35.elements.controls), te(_this35.elements.wrapper), _this35.elements.buttons.play = null, _this35.elements.captions = null, _this35.elements.controls = null, _this35.elements.wrapper = null), j(e2) && e2()) : (we.call(_this35), Le.cancelRequests.call(_this35), se(_this35.elements.original, _this35.elements.container), ve.call(_this35, _this35.elements.original, "destroyed", true), j(e2) && e2.call(_this35.elements.original), _this35.ready = false, setTimeout(function () {
                  _this35.elements = null, _this35.media = null;
                }, 200));
              };

              _this35.stop(), clearTimeout(_this35.timers.loading), clearTimeout(_this35.timers.controls), clearTimeout(_this35.timers.resized), _this35.isHTML5 ? (at.toggleNativeControls.call(_this35, true), i3()) : _this35.isYouTube ? (clearInterval(_this35.timers.buffering), clearInterval(_this35.timers.playing), _this35.embed !== null && j(_this35.embed.destroy) && _this35.embed.destroy(), i3()) : _this35.isVimeo && (_this35.embed !== null && _this35.embed.unload().then(i3), setTimeout(i3, 200));
            }), e(this, "supports", function (e2) {
              return me.mime.call(_this35, e2);
            }), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = me.touch, this.media = t2, _(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || q(this.media) || D(this.media)) && (this.media = this.media[0]), this.config = X({}, Qe, Tt.defaults, i2 || {}, function () {
              try {
                return JSON.parse(_this35.media.getAttribute("data-plyr-config"));
              } catch (e2) {
                return {};
              }
            }()), this.elements = {
              container: null,
              fullscreen: null,
              captions: null,
              buttons: {},
              display: {},
              progress: {},
              inputs: {},
              settings: {
                popup: null,
                menu: null,
                panels: {},
                buttons: {}
              }
            }, this.captions = {
              active: null,
              currentTrack: -1,
              meta: /* @__PURE__ */new WeakMap()
            }, this.fullscreen = {
              active: false
            }, this.options = {
              speed: [],
              quality: []
            }, this.debug = new it(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", me), I(this.media) || !H(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!me.check().api) return void this.debug.error("Setup failed: no support");
            var s2 = this.media.cloneNode(true);
            s2.autoplay = false, this.elements.original = s2;
            var n2 = this.media.tagName.toLowerCase();
            var a2 = null,
                l2 = null;

            switch (n2) {
              case "div":
                if (a2 = this.media.querySelector("iframe"), H(a2)) {
                  if (l2 = ze(a2.getAttribute("src")), this.provider = function (e2) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e2) ? Ge.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e2) ? Ge.vimeo : null;
                  }(l2.toString()), this.elements.container = this.media, this.media = a2, this.elements.container.className = "", l2.search.length) {
                    var e2 = ["1", "true"];
                    e2.includes(l2.searchParams.get("autoplay")) && (this.config.autoplay = true), e2.includes(l2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e2.includes(l2.searchParams.get("playsinline")), this.config.youtube.hl = l2.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

                if (W(this.provider) || !Object.values(Ge).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = et;
                break;

              case "video":
              case "audio":
                this.type = n2, this.provider = Ge.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;

              default:
                return void this.debug.error("Setup failed: unsupported type");
            }

            this.supported = me.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new lt(this), this.storage = new Re(this), this.media.plyr = this, H(this.elements.container) || (this.elements.container = Z("div", {
              tabindex: 0
            }), J(this.media, this.elements.container)), at.migrateStyles.call(this), at.addStyleHook.call(this), pt.setup.call(this), this.config.debug && fe.call(this, this.elements.container, this.config.events.join(" "), function (e2) {
              _this35.debug.log("event: ".concat(e2.type));
            }), this.fullscreen = new st(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && at.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new gt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function () {
              return ke(_this35.play());
            }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new vt(this))) : this.debug.error("Setup failed: no support");
          }

          _createClass(Tt, [{
            key: "isHTML5",
            get: function get() {
              return this.provider === Ge.html5;
            }
          }, {
            key: "isEmbed",
            get: function get() {
              return this.isYouTube || this.isVimeo;
            }
          }, {
            key: "isYouTube",
            get: function get() {
              return this.provider === Ge.youtube;
            }
          }, {
            key: "isVimeo",
            get: function get() {
              return this.provider === Ge.vimeo;
            }
          }, {
            key: "isVideo",
            get: function get() {
              return this.type === et;
            }
          }, {
            key: "isAudio",
            get: function get() {
              return this.type === Ze;
            }
          }, {
            key: "playing",
            get: function get() {
              return Boolean(this.ready && !this.paused && !this.ended);
            }
          }, {
            key: "paused",
            get: function get() {
              return Boolean(this.media.paused);
            }
          }, {
            key: "stopped",
            get: function get() {
              return Boolean(this.paused && this.currentTime === 0);
            }
          }, {
            key: "ended",
            get: function get() {
              return Boolean(this.media.ended);
            }
          }, {
            key: "currentTime",
            get: function get() {
              return Number(this.media.currentTime);
            },
            set: function set(e2) {
              if (!this.duration) return;
              var t2 = $(e2) && e2 > 0;
              this.media.currentTime = t2 ? Math.min(e2, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
            }
          }, {
            key: "buffered",
            get: function get() {
              var e2 = this.media.buffered;
              return $(e2) ? e2 : e2 && e2.length && this.duration > 0 ? e2.end(0) / this.duration : 0;
            }
          }, {
            key: "seeking",
            get: function get() {
              return Boolean(this.media.seeking);
            }
          }, {
            key: "duration",
            get: function get() {
              var e2 = parseFloat(this.config.duration),
                  t2 = (this.media || {}).duration,
                  i2 = $(t2) && t2 !== 1 / 0 ? t2 : 0;
              return e2 || i2;
            }
          }, {
            key: "volume",
            get: function get() {
              return Number(this.media.volume);
            },
            set: function set(e2) {
              var _this$config2;

              var t2 = e2;
              _(t2) && (t2 = Number(t2)), $(t2) || (t2 = this.storage.get("volume")), $(t2) || (_this$config2 = this.config, t2 = _this$config2.volume, _this$config2), t2 > 1 && (t2 = 1), t2 < 0 && (t2 = 0), this.config.volume = t2, this.media.volume = t2, !W(e2) && this.muted && t2 > 0 && (this.muted = false);
            }
          }, {
            key: "muted",
            get: function get() {
              return Boolean(this.media.muted);
            },
            set: function set(e2) {
              var t2 = e2;
              O(t2) || (t2 = this.storage.get("muted")), O(t2) || (t2 = this.config.muted), this.config.muted = t2, this.media.muted = t2;
            }
          }, {
            key: "hasAudio",
            get: function get() {
              return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
            }
          }, {
            key: "speed",
            get: function get() {
              return Number(this.media.playbackRate);
            },
            set: function set(e2) {
              var _this36 = this;

              var t2 = null;
              $(e2) && (t2 = e2), $(t2) || (t2 = this.storage.get("speed")), $(t2) || (t2 = this.config.speed.selected);
              var i2 = this.minimumSpeed,
                  s2 = this.maximumSpeed;
              t2 = ft(t2, i2, s2), this.config.speed.selected = t2, setTimeout(function () {
                _this36.media && (_this36.media.playbackRate = t2);
              }, 0);
            }
          }, {
            key: "minimumSpeed",
            get: function get() {
              return this.isYouTube ? Math.min.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? 0.5 : 0.0625;
            }
          }, {
            key: "maximumSpeed",
            get: function get() {
              return this.isYouTube ? Math.max.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? 2 : 16;
            }
          }, {
            key: "quality",
            get: function get() {
              return this.media.quality;
            },
            set: function set(e2) {
              var t2 = this.config.quality,
                  i2 = this.options.quality;
              if (!i2.length) return;
              var s2 = [!W(e2) && Number(e2), this.storage.get("quality"), t2.selected, t2["default"]].find($),
                  n2 = true;

              if (!i2.includes(s2)) {
                var e3 = Ae(i2, s2);
                this.debug.warn("Unsupported quality option: ".concat(s2, ", using ").concat(e3, " instead")), s2 = e3, n2 = false;
              }

              t2.selected = s2, this.media.quality = s2, n2 && this.storage.set({
                quality: s2
              });
            }
          }, {
            key: "loop",
            get: function get() {
              return Boolean(this.media.loop);
            },
            set: function set(e2) {
              var t2 = O(e2) ? e2 : this.config.loop.active;
              this.config.loop.active = t2, this.media.loop = t2;
            }
          }, {
            key: "source",
            get: function get() {
              return this.media.currentSrc;
            },
            set: function set(e2) {
              wt.change.call(this, e2);
            }
          }, {
            key: "download",
            get: function get() {
              var e2 = this.config.urls.download;
              return U(e2) ? e2 : this.source;
            },
            set: function set(e2) {
              U(e2) && (this.config.urls.download = e2, We.setDownloadUrl.call(this));
            }
          }, {
            key: "poster",
            get: function get() {
              return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
            },
            set: function set(e2) {
              this.isVideo ? at.setPoster.call(this, e2, false)["catch"](function () {}) : this.debug.warn("Poster can only be set for video");
            }
          }, {
            key: "ratio",
            get: function get() {
              if (!this.isVideo) return null;
              var e2 = Me(Ne.call(this));
              return D(e2) ? e2.join(":") : e2;
            },
            set: function set(e2) {
              this.isVideo ? _(e2) && Pe(e2) ? (this.config.ratio = Me(e2), xe.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e2, ")")) : this.debug.warn("Aspect ratio can only be set for video");
            }
          }, {
            key: "autoplay",
            get: function get() {
              return Boolean(this.config.autoplay);
            },
            set: function set(e2) {
              this.config.autoplay = O(e2) ? e2 : this.config.autoplay;
            }
          }, {
            key: "toggleCaptions",
            value: function toggleCaptions(e2) {
              Ye.toggle.call(this, e2, false);
            }
          }, {
            key: "currentTrack",
            get: function get() {
              var _this$captions2 = this.captions,
                  e2 = _this$captions2.toggled,
                  t2 = _this$captions2.currentTrack;
              return e2 ? t2 : -1;
            },
            set: function set(e2) {
              Ye.set.call(this, e2, false), Ye.setup.call(this);
            }
          }, {
            key: "language",
            get: function get() {
              return (Ye.getCurrentTrack.call(this) || {}).language;
            },
            set: function set(e2) {
              Ye.setLanguage.call(this, e2, false);
            }
          }, {
            key: "pip",
            get: function get() {
              return me.pip ? W(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Xe : null;
            },
            set: function set(e2) {
              if (!me.pip) return;
              var t2 = O(e2) ? e2 : !this.pip;
              j(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t2 ? Xe : Je), j(this.media.requestPictureInPicture) && (!this.pip && t2 ? this.media.requestPictureInPicture() : this.pip && !t2 && document.exitPictureInPicture());
            }
          }, {
            key: "setPreviewThumbnails",
            value: function setPreviewThumbnails(e2) {
              this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e2), this.config.previewThumbnails.enabled && (this.previewThumbnails = new vt(this));
            }
          }], [{
            key: "supported",
            value: function supported(e2, t2, i2) {
              return me.check(e2, t2, i2);
            }
          }, {
            key: "loadSprite",
            value: function loadSprite(e2, t2) {
              return Ve(e2, t2);
            }
          }, {
            key: "setup",
            value: function setup(e2) {
              var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var i2 = null;
              return _(e2) ? i2 = Array.from(document.querySelectorAll(e2)) : q(e2) ? i2 = Array.from(e2) : D(e2) && (i2 = e2.filter(H)), W(i2) ? null : i2.map(function (e3) {
                return new Tt(e3, t2);
              });
            }
          }]);

          return Tt;
        }();

        var kt;
        return Tt.defaults = (kt = Qe, JSON.parse(JSON.stringify(kt))), Tt;
      });
    }
  }); // scripts/carousel.js


  var import_plyr = __toESM(require_plyr_min());

  var playerIndexes = ["", "2", "3", "4"];
  var players = playerIndexes.map(function (playerIndex) {
    return new import_plyr["default"]("#player".concat(playerIndex));
  });
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    noSwipingClass: "swiper-no-swiping",
    initialSlide: 2,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 0
      },
      2500: {
        slidesPerView: "auto"
      }
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  });
  var swiperBtnPrev = document.getElementsByClassName("button-prev")[0];
  var swiperBtnNext = document.getElementsByClassName("button-next")[0];
  swiperBtnNext.addEventListener("click", function () {
    swiper.slideNext();
  });
  swiperBtnPrev.addEventListener("click", function () {
    swiper.slidePrev();
  });
  var playerNodes = document.querySelectorAll("#player,#player2,#player3,#player4");
  var swiperPlayerBtns = document.querySelectorAll(".plyr__control--overlaid");
  swiperPlayerBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var video = btn.previousElementSibling.previousElementSibling.firstChild;
      playerNodes.forEach(function (player, i) {
        if (video.id !== player.id && !video.paused) {
          player.pause();
        }
      });
    });
  });
  players.forEach(function (player, i) {
    player.on("click", function (e) {
      if (e.target.previousElementSibling.paused === false) {
        player.pause();
      }
    });
  });
})();