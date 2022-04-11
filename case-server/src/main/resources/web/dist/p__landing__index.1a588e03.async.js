(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
  "1SIV": function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = m(r("QbLZ")), a = m(r("jo6Y")), o = m(r("iCc5")), i = m(r("FYw3")), s = m(r("V7oC")), l = m(r("mRg0")),
      c = m(r("q1tI")), u = m(r("i8i4")), p = m(r("17x9")), f = m(r("6ebc")), d = r("mUgZ");

    function m(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var h = function (e) {
      function t(e) {
        (0, o.default)(this, t);
        var r = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.getParam = function (e) {
          r.clientHeight = r.target ? r.target.clientHeight : (0, d.windowHeight)();
          var t = r.target ? r.target.scrollTop : (0, d.currentScrollTop)(), n = r.dom.getBoundingClientRect(),
            a = r.target ? r.target.getBoundingClientRect().top : 0, o = n.top + t - a;
          r.elementShowHeight = t - o + r.clientHeight;
          var i = (0, d.transformArguments)(r.props.playScale), s = /([\+\-]?[0-9#\.]+)(px|vh|%)?/.exec(String(i[0]));
          s[2] ? "px" === s[2] ? r.playHeight = parseFloat(s[1]) : r.playHeight = r.clientHeight * parseFloat(s[1]) / 100 : r.playHeight = r.clientHeight * parseFloat(i[0]);
          var l = n.height, c = /([\+\-]?[0-9#\.]+)(px|vh|%)?/.exec(String(i[1]));
          c[2] ? "px" === c[2] ? r.leavePlayHeight = parseFloat(c[1]) : r.leavePlayHeight = l * parseFloat(c[1]) / 100 : r.leavePlayHeight = l * parseFloat(i[1]);
          var u = r.props.replay ? r.elementShowHeight >= r.playHeight && r.elementShowHeight <= r.clientHeight + r.leavePlayHeight : r.elementShowHeight >= r.playHeight,
            p = u ? "enter" : "leave", f = r.enter !== u || "boolean" != typeof r.enter ? p : null;
          f && r.props.onChange({mode: f, id: r.props.id}), r.props.onScroll({
            domEvent: e,
            scrollTop: t,
            showHeight: r.elementShowHeight,
            offsetTop: o,
            id: r.props.id
          }), r.enter = u
        }, r.addScrollEvent = function () {
          f.default.addEventListener(r.eventType, r.scrollEventListener, r.target), (0, d.currentScrollTop)() || r.scrollEventListener()
        }, r.scrollEventListener = function (e) {
          r.getParam(e)
        }, r.state = {$self: r}, r
      }

      return (0, l.default)(t, e), (0, s.default)(t, null, [{
        key: "getDerivedStateFromProps", value: function (e, t) {
          var r = t.prevProps, n = t.$self, a = {prevProps: e};
          return r && e !== r && n.scrollEventListener(), a
        }
      }]), (0, s.default)(t, [{
        key: "componentDidMount", value: function () {
          if (!d.windowIsUndefined) {
            this.dom = u.default.findDOMNode(this);
            var e = Date.now();
            this.target = this.props.targetId && document.getElementById(this.props.targetId);
            var t = f.default._listeners.scroll ? f.default._listeners.scroll.length : 0;
            this.eventType = "scroll.scrollEvent" + e + t, this.addScrollEvent()
          }
        }
      }, {
        key: "componentWillUnmount", value: function () {
          f.default.removeEventListener(this.eventType, this.scrollEventListener, this.target)
        }
      }, {
        key: "render", value: function () {
          var e = this.props, t = e.component,
            r = (e.playScale, e.location, e.targetId, e.onScroll, e.onChange, e.replay, e.componentProps),
            o = (0, a.default)(e, ["component", "playScale", "location", "targetId", "onScroll", "onChange", "replay", "componentProps"]);
          return c.default.createElement(t, (0, n.default)({}, o, r))
        }
      }]), t
    }(c.default.Component);
    h.propTypes = {
      component: p.default.any,
      playScale: p.default.any,
      id: p.default.string,
      onChange: p.default.func,
      onScroll: p.default.func,
      location: p.default.string,
      targetId: p.default.string,
      replay: p.default.bool,
      componentProps: p.default.object
    }, h.defaultProps = {
      component: "div",
      onChange: d.noop,
      onScroll: d.noop,
      playScale: .5,
      replay: !1,
      componentProps: {}
    }, h.isScrollElement = !0, t.default = h, e.exports = t.default
  }, "4zCG": function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.enquireScreen = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
      if (!n) return;
      var r = {
        match: function () {
          e && e(!0)
        }, unmatch: function () {
          e && e()
        }
      };
      return n.register(t, r), r
    }, t.unenquireScreen = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
      if (!n) return;
      n.unregister(t, e)
    };
    var n = void 0;
    if ("undefined" != typeof window) {
      window.matchMedia = window.matchMedia || function (e) {
        return {
          media: e, matches: !1, addListener: function () {
          }, removeListener: function () {
          }
        }
      }, n = r("jpXb")
    }
    var a = "only screen and (max-width: 767.99px)";
    t.default = n
  }, "6ebc": function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = r("mUgZ");

    function a(e) {
      this._listeners = {}, this._eventTarget = e || {}, this.recoverLists = [], this._listFun = {}
    }

    a.prototype = {
      addEventListener: function (e, t, r, n) {
        var a = e.split("."), o = a[0], i = a[1];
        r && !r.getAttribute("scroll-id") && r.setAttribute("scroll-id", (Date.now() + Math.random()).toString(32).replace(".", ""));
        var s = o + (r ? "_" + r.getAttribute("scroll-id") : ""), l = this._listeners[s], c = 0, u = void 0, p = void 0;
        for (l || (l = [], this._listeners[s] = l), p = l.length; --p > -1;) (u = l[p]).n === i && u.c === t ? l.splice(p, 1) : 0 === c && (c = p + 1);
        var f = r || this._eventTarget;
        l.splice(c, 0, {
          c: t,
          n: i,
          t: o
        }), this._listFun[s] || (this._listFun[s] = this._listFun[s] || this.dispatchEvent.bind(this, {
          type: o,
          target: r
        }), f.addEventListener ? f.addEventListener(o, this._listFun[s], n) : f.attachEvent && f.attachEvent("on" + o, this._listFun[s]))
      }, removeEventListener: function (e, t, r, n) {
        var a = e.split("."), o = a[0], i = a[1], s = o + (r ? "_" + r.getAttribute("scroll-id") : ""),
          l = this._listeners[s], c = void 0, u = n;
        if (i || (u = !0), l) {
          c = l.length;
          for (var p = r || this._eventTarget; --c > -1;) if (l[c].c === t && (u || l[c].n === i)) {
            if (l.splice(c, 1), !l.length) {
              var f = this._listFun[s];
              delete this._listeners[s], delete this._listFun[s], p.removeEventListener ? p.removeEventListener(o, f) : p.detachEvent && p.detachEvent("on" + o, f)
            }
            if (!u) return
          }
        }
      }, dispatchEvent: function (e, t) {
        var r = e.type, n = e.target, a = r + (n ? "_" + n.getAttribute("scroll-id") : ""), o = this._listeners[a],
          i = void 0, s = void 0, l = void 0;
        if (o) for (i = o.length, s = this._eventTarget; --i > -1;) if (l = o[i]) {
          var c = t || {type: r, target: s};
          l.c.call(s, c)
        }
      }, removeAllType: function (e, t) {
        var r = this, a = e.split("."), o = a[0], i = a[1], s = o + (t ? "_" + t.getAttribute("scroll-id") : ""),
          l = this._listeners[s];
        this.recoverLists = this.recoverLists.concat((0, n.dataToArray)(l).filter(function (e) {
          return e.n && e.n.match(i)
        })), this.recoverLists.forEach(function (e) {
          r.removeEventListener(e.t + "." + e.n, e.c, t)
        })
      }, reAllType: function (e, t) {
        var r = this, n = e.split("."), a = n[0], o = n[1];
        this.recoverLists = this.recoverLists.map(function (e) {
          return e.t === a && e.n.match(o) ? (r.addEventListener(e.t + "." + e.n, e.c, t), null) : e
        }).filter(function (e) {
          return e
        })
      }
    }, t.default = new a("undefined" != typeof window && "undefined" != typeof document && window), e.exports = t.default
  }, LF3p: function (e, t, r) {
    e.exports = {
      video: "video",
      "react-content": "react-content",
      "home-page-wrapper": "home-page-wrapper",
      "home-page": "home-page",
      "title-wrapper": "title-wrapper",
      "title-h1": "title-h1",
      banner3: "banner3",
      "banner3-text-wrapper": "banner3-text-wrapper",
      "queue-anim-leaving": "queue-anim-leaving",
      "banner3-slogan": "banner3-slogan",
      "banner3-logo": "banner3-logo",
      "banner3-name-en": "banner3-name-en",
      "banner3-name": "banner3-name",
      "banner3-button": "banner3-button",
      "banner3-time": "banner3-time",
      "footer0-wrapper": "footer0-wrapper",
      footer0: "footer0",
      login: "login",
      card: "card",
      title: "title",
      btn: "btn",
      btn_active: "btn_active",
      input: "input",
      onBtn: "onBtn",
      zIndex: "zIndex",
      dropStyle: "dropStyle",
      user: "user",
      dowm: "dowm",
      userIcon: "userIcon",
      username: "username",
      loginCss: "loginCss"
    }
  }, TWld: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.toCssLowerCase = function (e) {
      return e.replace(/[A-Z]/, function (e) {
        return "-" + e.toLocaleLowerCase()
      })
    }, t.toStyleUpperCase = function (e) {
      return e.replace(/-(.?)/g, function (e) {
        return e.replace("-", "").toLocaleUpperCase()
      })
    }, t.toFixed = d, t.createMatrix = function (e) {
      if ("undefined" == typeof document) return null;
      var t = ["WebKitCSS", "MozCSS", "DOM", "MsCSS", "MSCSS", "OCSS", "CSS"].filter(function (e) {
        return e + "Matrix" in window
      });
      if (t.length) return new window[t[0] + "Matrix"](e);
      return ""
    }, t.checkStyleName = function (e) {
      if ("undefined" == typeof document) return null;
      if ("filter" !== e && e in document.body.style) return e;
      var t = e.charAt(0).toUpperCase() + e.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"].filter(function (e) {
        return "" + e + t in document.body.style
      });
      return r[0] ? "" + r[0] + t : null
    }, t.getGsapType = function (e) {
      var t = e;
      return t = "z" === (t = "y" === (t = "x" === t ? "translateX" : t) ? "translateY" : t) ? "translateZ" : t
    }, t.parseColor = m, t.parseShadow = function (e) {
      if (!e) return [0, 0, 0, 0, 0, 0, 0];
      var t = e.replace(/,\s+/gi, ",").split(/\s+/).filter(function (e) {
        return e
      }), r = t.indexOf("inset");
      r >= 0 && t.splice(r, 1);
      var n = t.find(function (e) {
        return l[e] || e.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|(rgb|hsl)+(?:a)?\((.*)\)/i)
      }) || "black", a = t.indexOf(n);
      t.splice(a, 1);
      var o = m(n);
      return o[3] = "number" == typeof o[3] ? o[3] : 1, t.concat(o, r >= 0 ? ["inset"] : [])
    }, t.getColor = function (e) {
      var t = 4 === e.length ? "rgba" : "rgb", r = e.map(function (e, t) {
        return t < 3 ? Math.round(e) : e
      });
      return t + "(" + r.join(",") + ")"
    }, t.isTransform = h, t.isConvert = function (e) {
      var t = h(e);
      return f.filter.indexOf(t) >= 0 ? "filter" : t
    }, t.splitFilterToObject = function (e) {
      if ("none" === e || !e || "" === e) return null;
      var t = {};
      return e.replace(" ", "").split(")").filter(function (e) {
        return e
      }).forEach(function (e) {
        var r = e.split("(");
        t[r[0]] = r[1]
      }), t
    }, t.getMatrix = y, t.getTransform = function (e) {
      var t = e && "none" !== e && "" !== e ? e : "matrix(1, 0, 0, 1, 0, 0)";
      if (!t.match("matrix")) return function (e) {
        var t = {
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
          skewX: 0,
          skewY: 0,
          perspective: 0
        };
        return (e.trim().match(/(\w+)\([^\)]+\)/gi) || []).forEach(function (e) {
          var r = e.split("("), n = r[0].trim(), a = r[1].replace(")", "").trim();
          a.match(/%|em|rem/gi), a = a.replace(/px|deg|\)/gi, ""), f.transformGroup[n] && "rotate" !== n ? (a = a.split(",").map(function (e) {
            return parseFloat(e)
          }), "scale3d" === n || "translate3d" === n ? ["X", "Y", "Z"].forEach(function (e, r) {
            var o = n.substring(0, n.length - 2);
            t["" + o + e] = a[r] || t["" + o + e]
          }) : "rotate3d" === n ? (t.rotateX = a[0] && a[3] || t.rotateX, t.rotateY = a[1] && a[3] || t.rotateY, t.rotate = a[2] && a[3] || t.rotate) : ["X", "Y"].forEach(function (e, r) {
            t["" + n + e] = a[r] || t["" + n + e]
          })) : "rotateZ" === n ? t.rotate = parseFloat(a) || t.rotate : t[n] = parseFloat(a) || t[n]
        }), t
      }(e);
      var r = y(t), n = r.m11, a = r.m12, o = r.m13, i = r.m14, s = r.m21, l = r.m22, c = r.m23, p = r.m24, m = r.m31,
        h = r.m32, v = r.m33, g = r.m34, b = r.m43, w = void 0, k = void 0, T = void 0, E = {}, O = Math.atan2(c, v),
        S = Math.tan(s), C = Math.tan(a), x = void 0, A = void 0;
      E.rotateX = d(O * u) || 0, O && (x = Math.cos(-O), A = Math.sin(-O), w = s * x + m * A, k = l * x + h * A, T = c * x + v * A, m = s * -A + m * x, h = l * -A + h * x, v = c * -A + v * x, g = p * -A + g * x, s = w, l = k, c = T);
      O = Math.atan2(-o, v), E.rotateY = d(O * u) || 0, O && (x = Math.cos(-O), A = Math.sin(-O), k = a * x - h * A, T = o * x - v * A, h = a * A + h * x, v = o * A + v * x, g = i * A + g * x, n = w = n * x - m * A, a = k, o = T);
      O = Math.atan2(a, n), E.rotate = d(O * u) || 0, O && (x = Math.cos(O), A = Math.sin(O), w = n * x + a * A, k = s * x + l * A, T = m * x + h * A, a = a * x - n * A, l = l * x - s * A, h = h * x - m * A, n = w, s = k, m = T);
      E.rotateX && Math.abs(E.rotateX) + Math.abs(E.rotate) > 359.9 && (E.rotateX = E.rotate = 0, E.rotateY = 180 - E.rotateY || 0);
      return E.scaleX = d(Math.sqrt(n * n + a * a + o * o)), E.scaleY = d(Math.sqrt(l * l + c * c)), E.scaleZ = d(Math.sqrt(m * m + h * h + v * v)), E.skewX = S === -C ? 0 : S, E.skewY = C === -S ? 0 : C, E.perspective = g ? 1 / (g < 0 ? -g : g) : 0, E.translateX = r.m41, E.translateY = r.m42, E.translateZ = b, E
    }, t.stylesToCss = function (e, t) {
      var r = void 0;
      n[e] || "number" != typeof t ? "content" !== e || o.test(t) || (r = "'" + t.replace(/'/g, "\\'") + "'") : r = " " + t + "px";
      return r || t
    }, t.getUnit = function (e, t) {
      var r = t && t.toString().replace(/[^a-z|%]/gi, ""), n = "";
      e.indexOf("translate") >= 0 || e.indexOf("perspective") >= 0 || e.indexOf("blur") >= 0 ? n = "px" : (e.indexOf("skew") >= 0 || e.indexOf("rotate") >= 0) && (n = "deg");
      return r || n
    }, t.getValues = function (e, t, r) {
      return e + "(" + t + (r || "") + ")"
    }, t.findStyleByName = v, t.mergeStyle = function (e, t) {
      if (!e || "" === e) return t;
      if (!t || "" === t) return e;
      var r = e.replace(/\s/g, "").split(")").filter(function (e) {
        return "" !== e && e
      }).map(function (e) {
        return e + ")"
      });
      return t.replace(/\s/g, "").split(")").filter(function (e) {
        return "" !== e && e
      }).forEach(function (e) {
        var t = e.split("(")[0], n = v(r, t);
        if (n) {
          var a = r.indexOf(n);
          r[a] = e + ")"
        } else r.push(e + ")")
      }), r.forEach(function (e, t) {
        e.indexOf("perspective") >= 0 && t && (r.splice(t, 1), r.unshift(e))
      }), r.join(" ").trim()
    };
    var n = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridRow: !0,
      gridColumn: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    }, a = ["Webkit", "ms", "Moz", "O"];
    Object.keys(n).forEach(function (e) {
      a.forEach(function (t) {
        n[function (e, t) {
          return e + t.charAt(0).toUpperCase() + t.substring(1)
        }(t, e)] = n[e]
      })
    });
    var o = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/,
      i = "undefined" != typeof document && !(!navigator || !(navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0)),
      s = 1e5, l = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        fuchsia: [255, 0, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
      }, c = function (e, t, r) {
        var n = e > 1 ? e - 1 : e;
        return 255 * (6 * (n = e < 0 ? e + 1 : n) < 1 ? t + (r - t) * n * 6 : n < .5 ? r : 3 * n < 2 ? t + (r - t) * (2 / 3 - n) * 6 : t) + .5 | 0
      }, u = (Math.PI, 180 / Math.PI), p = {
        _lists: {
          transformsBase: ["translate", "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ", "rotate"],
          transforms3D: ["translate3d", "translateZ", "scaleZ", "rotateX", "rotateY", "perspective"]
        },
        transformGroup: {translate: 1, translate3d: 1, scale: 1, scale3d: 1, rotate: 1, rotate3d: 1, skew: 1},
        filter: ["grayScale", "sepia", "hueRotate", "invert", "brightness", "contrast", "blur"],
        filterConvert: {grayScale: "grayscale", hueRotate: "hue-rotate"}
      };
    p._lists.transformsBase = i ? p._lists.transformsBase : p._lists.transformsBase.concat(p._lists.transforms3D);
    var f = t.cssList = p;

    function d(e, t) {
      var r = t ? Math.pow(10, t) : s, n = 0 | e, a = e - n, o = e;
      if (a) {
        var i = (a * r + (e < 0 ? -.5 : .5) | 0) / r, l = 0 | i, c = i.toString().split(".")[1] || "";
        o = (e < 0 && !(n + l) ? "-" : "") + (n + l) + "." + c
      }
      return parseFloat(o)
    }

    function m(e) {
      var t = void 0, r = void 0, n = void 0, a = void 0, o = void 0, i = void 0, s = void 0, u = e,
        p = /(?:\d|\-\d|\.\d|\-\.\d)+/g;
      return u ? "number" == typeof u ? t = [u >> 16, u >> 8 & 255, 255 & u] : ("," === u.charAt(u.length - 1) && (u = u.substr(0, u.length - 1)), l[u] ? t = l[u] : "#" === u.charAt(0) ? (4 === u.length && (u = "#" + (r = u.charAt(1)) + r + (n = u.charAt(2)) + n + (a = u.charAt(3)) + a), t = [(u = parseInt(u.substr(1), 16)) >> 16, u >> 8 & 255, 255 & u]) : "hsl" === u.substr(0, 3) ? (t = u.match(p), o = Number(t[0]) % 360 / 360, i = Number(t[1]) / 100, r = 2 * (s = Number(t[2]) / 100) - (n = s <= .5 ? s * (i + 1) : s + i - s * i), t.length > 3 && (t[3] = Number(t[3])), t[0] = c(o + 1 / 3, r, n), t[1] = c(o, r, n), t[2] = c(o - 1 / 3, r, n)) : t = u.match(p) || l.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3]))) : t = l.black, t
    }

    function h(e) {
      return f._lists.transformsBase.indexOf(e) >= 0 ? "transform" : e
    }

    function y(e) {
      var t = e.match(/(?:\-|\b)[\d\-\.e]+\b/gi), r = {};
      return 6 === t.length ? (r.m11 = parseFloat(t[0]), r.m12 = parseFloat(t[1]), r.m13 = 0, r.m14 = 0, r.m21 = parseFloat(t[2]), r.m22 = parseFloat(t[3]), r.m23 = 0, r.m24 = 0, r.m31 = 0, r.m32 = 0, r.m33 = 1, r.m34 = 0, r.m41 = parseFloat(t[4]), r.m42 = parseFloat(t[5]), r.m43 = 0, r.m44 = 0) : t.forEach(function (e, t) {
        var n = t % 4 + 1, a = Math.floor(t / 4) + 1;
        r["m" + a + n] = parseFloat(e)
      }), r
    }

    function v(e, t) {
      var r = null;
      return e && e.forEach(function (e) {
        if (!r) {
          var n = e.split("(")[0], a = n in f.transformGroup && t.substring(0, t.length - 1).indexOf(n) >= 0,
            o = t in f.transformGroup && n.substring(0, n.length - 1).indexOf(t) >= 0,
            i = n in f.transformGroup && t in f.transformGroup && (n.substring(0, n.length - 2) === t || t.substring(0, t.length - 2) === n);
          (n === t || a || o || i) && (r = e)
        }
      }), r
    }
  }, WTR2: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r("q1tI"), a = r.n(n), o = r("4zCG"), i = (r("+L6B"), r("2/Rp")), s = r("Y/ft"), l = r.n(s), c = r("jehZ"),
      u = r.n(c), p = r("QbLZ"), f = r.n(p), d = r("jo6Y"), m = r.n(d), h = r("m1cH"), y = r.n(h), v = r("iCc5"),
      g = r.n(v), b = r("FYw3"), w = r.n(b), k = r("V7oC"), T = r.n(k), E = r("mRg0"), O = r.n(E), S = r("17x9"),
      C = r.n(S), x = r("i8i4"), A = r.n(x), j = r("VCL8"),
      M = !("undefined" != typeof window && window.document && window.document.createElement), D = {
        transform: 1,
        "-ms-transform": 1,
        "-moz-transform": 1,
        "-webkit-transform": 1,
        "-o-transform": 1,
        filter: 1,
        "-webkit-filter": 1
      }, F = {margin: 1, padding: 1, borderWidth: 1, borderRadius: 1};

    function P(e) {
      var t = [];
      return a.a.Children.forEach(e, function (e) {
        t.push(e)
      }), t
    }

    function N(e) {
      return e || 0 === e ? Array.isArray(e) ? e : [e] : []
    }

    function I(e, t) {
      if (e === t || function (e, t) {
        if (!e || !t) return !1;
        var r = Object.keys(e), n = Object.keys(t);
        return !(!r.length || !n.length || r.length !== n.length || r.some(function (r) {
          var n = e[r], a = t[r];
          if (Array.isArray(n) && Array.isArray(a)) {
            var o = n.join(), i = a.join();
            o !== i || o.match(/\[object object\]/gi) || (n = o, a = i)
          }
          return n !== a
        }))
      }(e, t)) return !0;
      if (!e || !t || Object.keys(e).length !== Object.keys(t).length) return !1;
      var r = !0, n = function (e, t) {
        var n = Object.keys(e).length > Object.keys(t).length ? e : t,
          a = Object.keys(e).length > Object.keys(t).length ? t : e;
        Object.keys(n).forEach(function (e) {
          r && (e in a || (r = !1), "object" == typeof n[e] && "object" == typeof a[e] ? r = I(n[e], a[e]) : "function" == typeof n[e] && "function" == typeof a[e] ? n[e].toString().replace(/\s+/g, "") !== a[e].toString().replace(/\s+/g, "") && (r = !1) : n[e] !== a[e] && (r = !1))
        })
      };
      if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return !1;
        e.forEach(function (e, r) {
          n(e, t[r])
        })
      } else n(e, t);
      return r
    }

    function L(e, t) {
      var r = null;
      return e && e.forEach(function (e) {
        !r && e && e.key === t && (r = e)
      }), r
    }

    function _(e, t, r) {
      return "function" == typeof e ? e({key: t, index: r}) : e
    }

    function R(e) {
      return e && e.children
    }

    function U(e, t, r, n, a, o, i, s) {
      if (M) return n;
      var l = /(?:Left|Right|Width|X)/i.test(r) || s;
      l = "padding" === r || "marign" === r || l;
      var c = -1 !== r.indexOf("border") || -1 !== r.indexOf("translate") || "transformOrigin" === r ? e : e.parentNode || document.body;
      c = i ? document.body : c;
      var u = void 0, p = void 0;
      switch (a) {
        case"%":
          u = parseFloat(n) / 100 * (l ? c.clientWidth : c.clientHeight);
          break;
        case"vw":
          u = parseFloat(n) * document.body.clientWidth / 100;
          break;
        case"vh":
          u = parseFloat(n) * document.body.clientHeight / 100;
          break;
        case"em":
          u = parseFloat(n) * parseFloat(t.fontSize);
          break;
        case"rem":
          p = window.getComputedStyle(document.getElementsByTagName("html")[0]), u = parseFloat(n) * parseFloat(p.fontSize);
          break;
        default:
          u = parseFloat(n)
      }
      switch (o) {
        case"%":
          u = u ? 100 * u / (l ? c.clientWidth : c.clientHeight) : 0;
          break;
        case"vw":
          u = parseFloat(n) / document.body.clientWidth * 100;
          break;
        case"vh":
          u = parseFloat(n) / document.body.clientHeight * 100;
          break;
        case"em":
          u = parseFloat(n) / parseFloat(t.fontSize);
          break;
        case"rem":
          p = p || window.getComputedStyle(document.getElementsByTagName("html")[0]), u = parseFloat(n) / parseFloat(p.fontSize)
      }
      return u
    }

    function Y(e) {
      if ("string" == typeof e) return e;
      var t = e.perspective, r = e.rotate, n = e.rotateX, a = e.rotateY, o = e.scaleX, i = e.scaleY, s = e.scaleZ,
        l = e.skewX, c = e.skewY, u = "string" == typeof e.translateX ? e.translateX : e.translateX + "px",
        p = "string" == typeof e.translateY ? e.translateY : e.translateY + "px",
        f = "string" == typeof e.translateZ ? e.translateZ : e.translateZ + "px",
        d = l || c ? "skew(" + l + "deg," + c + "deg)" : "", m = r ? "rotate(" + r + "deg)" : "",
        h = 1 !== o || 1 !== i || 1 !== s ? "scale3d(" + o + "," + i + "," + s + ")" : "",
        y = n ? "rotateX(" + n + "deg)" : "", v = a ? "rotateY(" + a + "deg)" : "",
        g = h || m || y || v || d ? "" : "translate(0px, 0px)";
      return ((t ? "perspective(" + t + "px)" : "") + " " + (e.translateZ ? "translate3d(" + u + "," + p + "," + f + ")" : (e.translateX || e.translateY) && "translate(" + u + "," + p + ")" || g) + " " + h + " " + m + " " + y + " " + v + " " + d).trim()
    }

    var X = r("TWld"), B = r("tQyb"), H = r.n(B);
    H.a.path = function (e, t) {
      var r = t || {};
      if (M) return "linear";
      for (var n = function (e) {
        if ("string" == typeof e) {
          if (e.charAt(0).match(/m/i)) {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return t.setAttributeNS(null, "d", e), t
          }
          return document.querySelector(e)
        }
        if (e.style) return e;
        throw new Error("Error while parsing the path")
      }(e), a = n.getTotalLength(), o = r.rect || 100, i = r.lengthPixel || 200, s = [], l = 0; l < i - 1; l++) s.push(n.getPointAtLength(a / (i - 1) * l));
      return s.push(n.getPointAtLength(i)), function (e, t, r, i) {
        var l = H.a.linear(e, t, r, i), c = o * l;
        return 1 - (s.filter(function (e) {
          return e.x >= c
        })[0] || n.getPointAtLength(l * a)).y / o
      }
    };
    var q = H.a, V = function () {
    };
    V.prototype.push = function (e) {
      this[e.prototype.name] = e
    };
    var z = new V, Q = function (e, t, r) {
      this.target = e, this.vars = t, this.type = r, this.propsData = {}, this.setDefaultData()
    }, G = Q.prototype = {name: "style"};
    G.getTweenData = function (e, t) {
      var r = {data: {}, dataType: {}, dataUnit: {}, dataCount: {}, dataSplitStr: {}}, n = t;
      if (F[e] && ((n = (n = n.toString().split(" ")).map(function (e) {
        return "number" == typeof t ? e + "px" : e
      }))[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1] || n[0], n = n.join(" ")), e.match(/colo|fill|storker/i) ? (r.data[e] = Object(X.parseColor)(n), r.dataType[e] = "color") : "strokeDasharray" === e ? (r.data[e] = n.split(","), r.dataType[e] = "strokeDasharray") : e.match(/shadow/i) ? (r.data[e] = Object(X.parseShadow)(n), r.dataType[e] = "shadow") : "string" == typeof n && n.split(/[\s|,]/).length > 1 ? (r.data[e] = n.split(/[\s|,]/), r.dataSplitStr[e] = n.replace(/[^\s|,]/g, "").replace(/\s+/g, " "), r.dataType[e] = "string") : (r.data[e] = n, r.dataType[e] = "other"), Array.isArray(r.data[e])) r.dataUnit[e] = r.data[e].map(function (e) {
        return e.toString().replace(/[^a-z|%]/g, "")
      }), r.dataCount[e] = r.data[e].map(function (e) {
        return e.toString().replace(/[^+|=|-]/g, "")
      }), r.data[e] = r.data[e].map(function (e) {
        return parseFloat(e) || 0 === parseFloat(e) ? parseFloat(e) : e
      }); else {
        r.dataUnit[e] = r.data[e].toString().replace(/[^a-z|%]/g, ""), r.dataCount[e] = r.data[e].toString().replace(/[^+|=|-]/g, "");
        var a = parseFloat(r.data[e].toString().replace(/[a-z|%|=]/g, ""));
        r.data[e] = a || 0 === a ? a : r.data[e]
      }
      return r
    }, G.setDefaultData = function () {
      var e = this;
      this.propsData.data = {}, this.propsData.dataType = {}, this.propsData.dataUnit = {}, this.propsData.dataCount = {}, this.propsData.dataSplitStr = {}, Object.keys(this.vars).forEach(function (t) {
        if (t in z) e.propsData.data[t] = new z[t](e.target, e.vars[t]); else {
          var r = Object(X.getGsapType)(t), n = e.getTweenData(r, e.vars[t]);
          e.propsData.data[r] = n.data[r], e.propsData.dataType[r] = n.dataType[r], e.propsData.dataUnit[r] = n.dataUnit[r], e.propsData.dataCount[r] = n.dataCount[r], n.dataSplitStr[r] && (e.propsData.dataSplitStr[r] = n.dataSplitStr[r])
        }
      })
    }, G.convertToMarksArray = function (e, t, r, n, a) {
      var o = n.toString().replace(/[^a-z|%]/g, ""), i = t[a];
      return o === i ? parseFloat(n) : parseFloat(n) || 0 === parseFloat(n) ? U(this.target, e, r, n, o, i, null, "transformOrigin" === r && !a) : n
    }, G.getAnimStart = function (e, t, r) {
      var n = this, a = {}, o = t.style || {}, i = void 0;
      return Object.keys(this.propsData.data).forEach(function (t) {
        var s = Object(X.isConvert)(t), l = o[s] || e[s], c = "fixed" === e.position;
        l && "none" !== l && "auto" !== l || (l = "");
        var u = void 0, p = void 0;
        if (t in z) "bezier" === t && (n.transform = Object(X.checkStyleName)("transform"), l = e[r ? "transformSVG" : n.transform], i = i || (o.transform ? f()({}, o.transform) : a.transform || Object(X.getTransform)(l)), a.transform = i), n.propsData.data[t].getAnimStart(e, r); else if ("transform" === s) {
          n.transform = Object(X.checkStyleName)("transform"), l = e[r ? "transformSVG" : n.transform], u = n.propsData.dataUnit[t], i = i || (o.transform ? f()({}, o.transform) : a.transform || Object(X.getTransform)(l));
          var d = /%|vw|vh|em|rem/i;
          u && u.match(d) && (i[t] = i[t] && i[t].toString().match(d) ? parseFloat(i[t]) : U(n.target, e, t, i[t], null, u)), a.transform = i
        } else "filter" === s ? (o[s] ? l = o[s] : (n.filterName = Object(X.checkStyleName)("filter") || "filter", l = e[n.filterName], n.filterObject = f()({}, n.filterObject, Object(X.splitFilterToObject)(l)), l = n.filterObject[t] || 0), p = l.toString().replace(/[^a-z|%]/g, ""), (u = n.propsData.dataUnit[t]) !== p && (l = U(n.target, e, s, parseFloat(l), p, u, c)), a[t] = parseFloat(l)) : t.match(/color|fill/i) || "stroke" === t ? (l = l || "stroke" !== t ? l : "rgba(255, 255, 255, 0)", a[s] = Object(X.parseColor)(l)) : t.match(/shadow/i) ? (l = Object(X.parseShadow)(l), u = n.propsData.dataUnit[t], l = l.map(n.convertToMarksArray.bind(n, e, u, t)), a[s] = l) : Array.isArray(n.propsData.data[t]) ? (l = l.split(/[\s|,]/).filter(function (e) {
          return e || 0 === e
        }), u = n.propsData.dataUnit[t], l = l.map(n.convertToMarksArray.bind(n, e, u, t)), a[s] = l) : ((u = n.propsData.dataUnit[s]) !== (p = l.toString().replace(/[^a-z|%]/g, "")) && (l = U(n.target, e, s, parseFloat(l), p, u, c)), a[s] = parseFloat(l || 0))
      }), this.start = a, a
    }, G.setArrayRatio = function (e, t, r, n, a) {
      "color" === a && 4 === t.length && 3 === r.length && (r[3] = 1);
      var o = t.indexOf("inset") >= 0, i = r.indexOf("inset") >= 0;
      if (o && !i || i && !o) throw void 0;
      var s = i ? 9 : 8;
      t.length === s && r.length === s - 1 ? (r.splice(3, 0, 0), n.splice(3, 0, "")) : r.length === s && t.length === s - 1 && t.splice(3, 0, 0);
      var l = r.map(function (r, o) {
        var i = "color" !== a || 3 !== o || t[o] ? 0 : 1, s = "number" == typeof t[o] ? t[o] : i;
        return "string" == typeof r ? r : (r - s) * e + s + (n[o] || 0)
      });
      if ("color" === a) return Object(X.getColor)(l);
      if ("shadow" === a) {
        var c = l.length === s ? 4 : 3, u = l.slice(0, c).map(function (e) {
          return "number" == typeof e ? e + "px" : e
        }), p = l.slice(c, i ? l.length - 1 : l.length), f = Object(X.getColor)(p);
        return (u.join(" ") + " " + f + " " + (i ? "inset" : "")).trim()
      }
      return l
    }, G.setRatio = function (e, t, r) {
      var n = this;
      t.style = t.style || {}, this.start.transform && (t.style.transform = t.style.transform || f()({}, this.start.transform));
      var a = this.target.style;
      Object.keys(this.propsData.data).forEach(function (o) {
        var i = "transform" === Object(X.isTransform)(o), s = i ? n.start.transform[o] : n.start[o],
          l = n.propsData.data[o], c = n.propsData.dataUnit[o], u = n.propsData.dataCount[o];
        if (o in z) return n.propsData.data[o].setRatio(e, t, r), void ("bezier" === o ? a[n.transform] = Y(t.style.transform) : Object.keys(t.style).forEach(function (e) {
          a[e] = t.style[e]
        }));
        if (i) {
          if (c && c.match(/%|vw|vh|em|rem/i)) s = parseFloat(n.start.transform[o]), "=" === u.charAt(1) ? t.style.transform[o] = s + l * e + c : t.style.transform[o] = (l - s) * e + s + c; else if ("scale" === o) {
            var p = n.start.transform.scaleX, f = n.start.transform.scaleY;
            "=" === u.charAt(1) ? (t.style.transform.scaleX = p + l * e, t.style.transform.scaleY = f + l * e) : (t.style.transform.scaleX = (l - p) * e + p, t.style.transform.scaleY = (l - f) * e + f)
          } else "=" === u.charAt(1) ? t.style.transform[o] = s + l * e : t.style.transform[o] = (l - s) * e + s;
          return a[n.transform] = Y(t.style.transform), void (r && (r.transformSVG = Object(X.createMatrix)(a[n.transform]).toString()))
        }
        if (Array.isArray(l)) {
          var d = n.propsData.dataType[o];
          t.style[o] = n.setArrayRatio(e, s, l, c, d), "string" === d && (t.style[o] = t.style[o].join(n.propsData.dataSplitStr[o]))
        } else {
          var m = Object(X.stylesToCss)(o, 0);
          if (m = "number" == typeof m ? "" : m.replace(/[^a-z|%]/g, ""), c = c || (X.cssList.filter.indexOf(o) >= 0 ? "" : m), "string" == typeof l) t.style[o] = l; else if ("=" === u.charAt(1)) t.style[o] = s + l * e + c; else {
            var h = (l - s) * e + s;
            t.style[o] = c ? "" + h + c : h
          }
        }
        if (X.cssList.filter.indexOf(o) >= 0) {
          if (!n.filterObject) return;
          n.filterObject[o] = t.style[o];
          var y = "";
          return Object.keys(n.filterObject).forEach(function (e) {
            y += " " + e + "(" + n.filterObject[e] + ")"
          }), void (a[n.filterName] = y.trim())
        }
        a[o] = t.style[o]
      })
    };
    var Z = Q, W = "easeInOutQuad", J = 450, $ = 0;

    function K() {
    }

    function ee(e, t) {
      var r = e.duration || 0 === e.duration ? e.duration : J;
      return {
        duration: "set" === e.type ? 0 : r,
        delay: e.delay || $,
        ease: "function" == typeof e.ease ? e.ease : q[e.ease || W],
        onUpdate: e.onUpdate || K,
        onComplete: e.onComplete || K,
        onStart: e.onStart || K,
        onRepeat: e.onRepeat || K,
        repeat: e.repeat || 0,
        repeatDelay: e.repeatDelay || 0,
        yoyo: e.yoyo || !1,
        type: "from" === e.type ? "from" : "to",
        initTime: t,
        appearTo: "number" == typeof e.appearTo ? e.appearTo : null,
        perTime: 0,
        currentRepeat: 0
      }
    }

    z.push(Z);
    var te = function (e, t, r) {
      var n = N(t);
      this.target = e, this.attr = r || "style", this.accuracy = 1e-5, this.totalTime = 0, this.progressTime = 0, this.defaultData = [], this.start = {}, this.startDefaultData = {}, this.tween = {}, this.data = n, this.perFrame = Math.round(1e3 / 60), this.register = !1, this.isSvg = this.target.ownerSVGElement;
      var a = this.setAttrIsStyle();
      this.setDefaultData(a)
    }, re = te.prototype;
    re.setAttrIsStyle = function () {
      var e = this, t = [], r = ee({}, 0);
      return this.data.forEach(function (n, a) {
        var o = f()({}, n);
        "style" === e.attr ? (t[a] = {}, Object.keys(o).forEach(function (e) {
          e in r && (t[a][e] = o[e], delete o[e])
        }), t[a].style = o, e.startDefaultData.style = e.target.getAttribute("style") || "") : "attr" === e.attr && (Object.keys(o).forEach(function (t) {
          if ("style" === t && Array.isArray(n[t])) throw new Error("Style should be the object.");
          if ("bezier" === t) o.style = f()({}, o.style, {bezier: o[t]}), delete o[t], e.startDefaultData.style = e.target.getAttribute("style") || ""; else {
            if (t in r) return;
            e.startDefaultData[t] = e.getValue(t)
          }
        }), t[a] = o)
      }), t
    }, re.setDefaultData = function (e) {
      var t = this, r = 0, n = !1, a = e.map(function (e) {
        var a = "number" == typeof e.appearTo;
        a || (r += e.delay || 0);
        var o = (e.appearTo || 0) + (e.delay || 0), i = ee(e, a ? o : r);
        i.vars = {}, Object.keys(e).forEach(function (r) {
          if (!(r in i)) {
            var n = e[r];
            if (r in z) i.vars[r] = new z[r](t.target, n, i.type); else if (("d" === r || "points" === r) && "SVGMorph" in z) i.vars[r] = new z.SVGMorph(t.target, n, r); else if (r.match(/color/i) || "stroke" === r || "fill" === r) i.vars[r] = {
              type: "color",
              vars: Object(X.parseColor)(n)
            }; else if ("number" == typeof n || n.split(/[,|\s]/g).length <= 1) {
              var a = parseFloat(n), o = n.toString().replace(/[^a-z|%]/g, ""),
                s = n.toString().replace(/[^+|=|-]/g, "");
              i.vars[r] = {unit: o, vars: a, count: s}
            }
          }
        }), i.yoyo && i.repeat, -1 === i.repeat && (n = !0);
        var s = -1 === i.repeat ? 0 : i.repeat;
        if (a) {
          var l = e.appearTo + (e.delay || 0) + i.duration * (s + 1) + i.repeatDelay * s;
          r = l >= r ? l : r
        } else i.delay < -i.duration ? r -= i.delay : r += i.duration * (s + 1) + i.repeatDelay * s;
        return i.mode = "", i
      });
      this.totalTime = n ? Number.MAX_VALUE : r, this.defaultData = a
    }, re.getComputedStyle = function () {
      var e = "undefined" != typeof window && document.defaultView ? document.defaultView.getComputedStyle(this.target) : {};
      if (this.isSvg) {
        var t = e[Object(X.checkStyleName)("transform")] || "none";
        if ("none" === t) {
          var r = this.target.getAttribute("style");
          r && r.indexOf("transform:") >= 0 ? t = r.split(";").filter(function (e) {
            return e.indexOf("transform:") >= 0
          }).map(function (e) {
            return Object(X.createMatrix)(e.split(":")[1].trim()).toString()
          })[0] : this.target.getAttribute("transform")
        }
        e.transformSVG = t
      }
      return e
    }, re.getAnimStartData = function (e) {
      var t = this, r = {};
      return Object.keys(e).forEach(function (n) {
        if (n in z || "attr" === t.attr && ("d" === n || "points" === n)) return t.computedStyle = t.computedStyle || (t.target.getAttribute ? t.getComputedStyle() : f()({}, t.target)), void (r[n] = e[n].getAnimStart(t.computedStyle, t.tween, t.isSvg));
        if ("attr" !== t.attr) r[n] = t.target[n] || 0; else {
          var a = t.getValue(n), o = n.match(/opacity/gi) ? 1 : 0, i = "null" !== a && a ? a : o;
          if (n.match(/color/i) || "stroke" === n || "fill" === n) i = i || "stroke" !== n ? i : "rgba(255, 255, 255, 0)", i = Object(X.parseColor)(i), r[n] = i; else if (parseFloat(i) || 0 === parseFloat(i) || 0 === i) {
            var s = i.toString().replace(/[^a-z|%]/g, "");
            r[n] = s !== e[n].unit ? U(t.target, n, parseFloat(i), s, e[n].unit) : parseFloat(i)
          }
        }
      }), r
    }, re.setAnimData = function (e) {
      var t = this;
      Object.keys(e).forEach(function (r) {
        r in z || "attr" === t.attr && ("d" === r || "points" === r) || (t.target[r] = e[r])
      })
    }, re.setRatio = function (e, t, r) {
      var n = this;
      Object.keys(t.vars).forEach(function (a) {
        if (a in z || "attr" === n.attr && ("d" === a || "points" === a)) t.vars[a].setRatio(e, n.tween, n.isSvg && n.computedStyle); else {
          var o = t.vars[a], i = n.start[r][a], s = void 0;
          "attr" === n.attr && (o.type ? "color" === o.type && (3 === o.vars.length && 4 === i.length && (o.vars[3] = 1), s = o.vars.map(function (t, r) {
            var n = i[r] || 0;
            return (t - n) * e + n
          }), n.setValue(a, Object(X.getColor)(s))) : (s = "=" === o.unit.charAt(1) ? i + o.vars * e + o.unit : (o.vars - i) * e + i + o.unit, n.setValue(a, o.unit ? s : parseFloat(s))))
        }
      }), this.setAnimData(this.tween)
    }, re.getValue = function (e) {
      return this.target.getAttribute ? this.target.getAttribute(e) : this.target[e]
    }, re.setValue = function (e, t) {
      this.target.setAttribute ? this.target.setAttribute(e, t) : this.target[e] = t
    }, re.render = function () {
      var e = this, t = this.reverse;
      this.defaultData.forEach(function (r, n) {
        var a = r.initTime, o = Object(X.toFixed)(r.duration),
          i = Math.ceil((e.progressTime - a) / (o + r.repeatDelay)) - 1 || 0;
        if (i = i < 0 ? 0 : i, r.repeat) {
          if (r.repeat < i && -1 !== r.repeat) return;
          (r.repeat || r.repeat <= i) && (a += i * (o + r.repeatDelay))
        }
        var s = r.yoyo && i % 2 ? 1 : 0, l = r.yoyo && i % 2 ? 0 : 1;
        s = "from" === r.type ? 1 - s : s, l = "from" === r.type ? 1 - l : l;
        var c = Object(X.toFixed)(e.progressTime - a), u = void 0;
        if (!(c + ("from" === r.type ? r.delay : 0) >= 0 && !e.start[n] && (e.start[n] = e.getAnimStartData(r.vars), c < e.perFrame ? (u = r.duration || r.delay ? r.ease(0, s, l, 1) : r.ease(1, s, l, 1), e.setRatio(u, r, n)) : c > o && (u = r.ease(1, s, l, 1), e.setRatio(u, r, n)), (!e.register || n && !a) && (e.register = !0, 0 === c && r.duration && r.delay)))) {
          var p = {index: n, target: e.target}, d = f()({moment: e.progressTime}, p), m = e.perFrame - e.accuracy,
            h = r.delay && t ? -m : 0;
          if ((c >= h && !(c > o && "onComplete" === r.mode) || c < h && r.mode && "onStart" !== r.mode) && e.start[n]) {
            var y = "update" === e.updateAnim;
            if (((c = c < m && !t && r.duration >= e.perFrame ? 0 : c) >= o - e.accuracy && !t || t && c <= 0) && i >= r.repeat) {
              if ("onComplete" === r.mode) return;
              if (u = r.ease(t ? 0 : 1, s, l, 1), e.setRatio(u, r, n, r.currentRepeat !== i), r.reset && !(r.reset && c >= o) || y) {
                if (c >= o + m) return
              } else o < m && (o || (r.onStart(p), d.mode = "onStart", e.onChange(d)), r.onUpdate(f()({ratio: u}, p)), d.mode = "onUpdate", e.onChange(d)), r.onComplete(p);
              r.mode = "onComplete"
            } else if (o > m) {
              var v = c < 0 ? 0 : c;
              v = v > o ? o : v, u = r.ease(v, s, l, o), e.setRatio(u, r, n), y || (r.repeat && i > 0 && r.currentRepeat !== i ? (r.mode = "onRepeat", r.currentRepeat = i, r.onRepeat(f()({}, p, {repeatNum: i}))) : (r.perTime <= 0 || t && r.perTime >= e.reverseStartTime - a) && "onStart" !== r.mode ? (r.mode = "onStart", r.onStart(p)) : (r.mode = "onUpdate", r.onUpdate(f()({ratio: u}, p))))
            }
            y || (d.mode = r.mode, e.onChange(d)), r.perTime = c, r.reset && delete r.reset
          }
        }
      })
    }, re.frame = function (e) {
      var t = this;
      this.progressTime = e, this.defaultData.forEach(function (e) {
        var r = t.progressTime - e.duration - e.initTime;
        r < t.perFrame && r > 0 && (t.progressTime = e.duration + e.initTime)
      }), this.render()
    }, re.init = re.frame, re.resetAnimData = function () {
      this.tween = {}, this.start = {}
    };
    re.resetDefaultStyle = function () {
      var e = this;
      this.tween = {}, this.defaultData = this.defaultData.map(function (e) {
        return e.reset = !0, delete e.mode, e
      });
      var t = ee({}, 0);
      Object.keys(this.startDefaultData).forEach(function (r) {
        if (!(r in t)) {
          if ("style" === r) {
            var n = (a = e.target.style.cssText, o = e.startDefaultData.style, i = e.data, s = ee({}, 0), c = (l = function (e) {
              return e.split(";").filter(function (e) {
                return e
              }).map(function (e) {
                return e.split(":").map(function (e) {
                  return e.trim()
                })
              })
            })(o), u = l(a), i.forEach(function (e) {
              Object.keys(e).forEach(function (e) {
                if (!(e in s)) {
                  var t = "bezier" === e ? "transform" : e,
                    r = Object(X.toCssLowerCase)(Object(X.isTransform)(Object(X.getGsapType)(t)));
                  u = u.filter(function (e) {
                    return !(D[e[0]] && D[r] || e[0] === r)
                  })
                }
              })
            }), c.forEach(function (e) {
              u = u.filter(function (t) {
                return t[0] !== e[0]
              })
            }), c.concat(u).map(function (e) {
              return e.join(":")
            }).join(";"));
            e.setValue(r, n)
          } else e.setValue(r, e.startDefaultData[r]);
          e.computedStyle = null
        }
        var a, o, i, s, l, c, u
      })
    }, re.reStart = function (e, t, r) {
      var n = this;
      this.start = {}, this.tween = {}, Object.keys(e || {}).forEach(function (a) {
        !r && t && e[a] === t[a] || (n.target.style[a] = Object(X.stylesToCss)(a, e[a]))
      }), this.setAttrIsStyle(), this.computedStyle = null
    }, re.onChange = K;
    var ne = te, ae = r("xEkU"), oe = r.n(ae), ie = Date.now || function () {
      return (new Date).getTime()
    }, se = {interval: 1, timeout: 1, TweenOneTicker: 2}, le = function (e) {
      return Object.keys(e).map(function (t) {
        return {key: t, func: e[t]}
      }).sort(function (e, t) {
        var r = e.key.split("_")[0], n = t.key.split("_")[0];
        return se[n] - se[r]
      })
    }, ce = function () {
    }, ue = ce.prototype = {
      tickFnArray: [],
      tickKeyObject: {},
      id: -1,
      tweenId: 0,
      frame: 0,
      perFrame: Math.round(1e3 / 60),
      elapsed: 0,
      lastUpdate: ie(),
      startTime: ie(),
      nextTime: 0,
      time: 0
    };
    ue.add = function (e) {
      var t = "TweenOneTicker_" + this.tweenId;
      return this.tweenId++, this.wake(t, e), t
    }, ue.wake = function (e, t) {
      this.tickKeyObject[e] = t, this.tickFnArray = le(this.tickKeyObject), -1 === this.id && (this.id = oe()(this.tick))
    }, ue.clear = function (e) {
      delete this.tickKeyObject[e], this.tickFnArray = le(this.tickKeyObject)
    }, ue.sleep = function () {
      oe.a.cancel(this.id), this.id = -1, this.frame = 0
    };
    var pe = new ce;
    ue.tick = function (e) {
      pe.elapsed = ie() - pe.lastUpdate, pe.elapsed > 300 && (pe.startTime += pe.elapsed - pe.perFrame), pe.lastUpdate += pe.elapsed, pe.time = pe.lastUpdate - pe.startTime;
      var t = pe.time - pe.nextTime;
      (t > 0 || !pe.frame) && (pe.frame++, pe.nextTime += t), pe.tickFnArray.forEach(function (t) {
        return t.func(e)
      }), pe.tickFnArray.length ? pe.id = oe()(pe.tick) : pe.sleep()
    };
    var fe = 0;
    ue.timeout = function (e, t) {
      var r = this;
      if ("function" == typeof e) {
        var n = "timeout_" + Date.now() + "-" + fe, a = this.time;
        return this.wake(n, function () {
          r.time - a >= (t || 0) && (r.clear(n), e())
        }), fe++, n
      }
    };
    var de = 0;
    ue.interval = function (e, t) {
      var r = this;
      if ("function" != typeof e) return null;
      var n = "interval_" + Date.now() + "-" + de, a = this.time;
      return this.wake(n, function () {
        r.time - a >= (t || 0) && (a = r.time, e())
      }), de++, n
    };
    var me = pe;
    var he = Math.round(1e3 / 60), ye = C.a.oneOfType([C.a.object, C.a.array]), ve = function (e) {
      function t(e) {
        g()(this, t);
        var r = w()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return ge.call(r), r.rafID = -1, r.paused = e.paused, r.reverse = e.reverse, r.updateAnim = !1, r.repeatNum = 0, r.currentRef = null, r.forced = {}, r.setForcedJudg(e), r.state = {$self: r}, r
      }

      return O()(t, e), T()(t, null, [{
        key: "getDerivedStateFromProps", value: function (e, t) {
          var r = t.prevProps, n = t.$self, a = {prevProps: e};
          if (r && e !== r) {
            if (!n.tween && !n.dom) return n.updateAnim = !0, a;
            var o = e.animation;
            I(r.animation, o) || (e.resetStyle && n.tween && n.tween.resetDefaultStyle(), n.updateAnim = !0);
            var i = e.moment;
            "number" == typeof i && i !== r.moment && (n.tween && !n.updateAnim ? (n.startMoment = i, n.startTime = me.time, e.paused && n.raf(), n.tween.progressTime >= n.tween.totalTime && n.play()) : n.updateAnim = !0), n.paused === e.paused && n.reverse === e.reverse || (n.paused = e.paused, n.reverse = e.reverse, n.paused ? n.cancelRequestAnimationFrame() : n.reverse && e.reverseDelay ? (n.cancelRequestAnimationFrame(), me.timeout(n.restart, e.reverseDelay)) : (n.tween && (n.tween.resetAnimData(), n.tween.resetDefaultStyle()), n.updateAnim || n.restart())), I(r.style, e.style) || n.tween && (n.tween.reStart(e.style, r.style, n.tween.progressTime < n.tween.totalTime), n.paused && n.raf()), n.setForcedJudg(e)
          }
          return a
        }
      }]), T()(t, [{
        key: "componentDidMount", value: function () {
          this.dom = A.a.findDOMNode(this), this.dom && "#text" !== this.dom.nodeName && this.start()
        }
      }, {
        key: "componentDidUpdate", value: function () {
          this.dom || (this.dom = A.a.findDOMNode(this)), this.updateAnim && this.dom && "#text" !== this.dom.nodeName && (this.tween && this.cancelRequestAnimationFrame(), this.start())
        }
      }, {
        key: "componentWillUnmount", value: function () {
          this.cancelRequestAnimationFrame()
        }
      }, {
        key: "render", value: function () {
          var e = this, t = this.props, r = (t.animation, t.component), n = t.componentProps,
            o = (t.reverseDelay, t.attr, t.paused, t.reverse, t.repeat, t.yoyo, t.moment, t.resetStyle, t.forcedJudg, m()(t, ["animation", "component", "componentProps", "reverseDelay", "attr", "paused", "reverse", "repeat", "yoyo", "moment", "resetStyle", "forcedJudg"]));
          Object.keys(o.style || {}).forEach(function (e) {
            e.match(/filter/i) && ["Webkit", "Moz", "Ms", "ms"].forEach(function (t) {
              o.style[t + "Filter"] = o.style[e]
            })
          });
          var i = function (t) {
            e.currentRef = t
          }, s = o.className, l = o.children;
          if (!r && "string" != typeof l) {
            if (!l) return l;
            var c = l.props || {}, u = c.style, p = c.className, d = f()({}, u, o.style), h = s ? s + " " + p : p;
            return a.a.cloneElement(l, {style: d, ref: i, className: h})
          }
          return a.a.createElement(r, f()({ref: i}, o, n))
        }
      }]), t
    }(n.Component);
    ve.propTypes = {
      component: C.a.any,
      componentProps: C.a.any,
      animation: ye,
      children: C.a.any,
      style: C.a.object,
      paused: C.a.bool,
      reverse: C.a.bool,
      reverseDelay: C.a.number,
      yoyo: C.a.bool,
      repeat: C.a.number,
      moment: C.a.number,
      attr: C.a.string,
      onChange: C.a.func,
      resetStyle: C.a.bool,
      forcedJudg: C.a.object
    }, ve.defaultProps = {
      component: "div",
      componentProps: {},
      reverseDelay: 0,
      repeat: 0,
      attr: "style",
      onChange: function () {
      }
    };
    var ge = function () {
      var e = this;
      this.setForcedJudg = function (t) {
        Object.keys(e.forced).forEach(function (t) {
          delete e[t], delete e.forced[t]
        }), t.forcedJudg && Object.keys(t.forcedJudg).forEach(function (r) {
          e[r] || (e[r] = t.forcedJudg[r], e.forced[r] = 1)
        })
      }, this.setDefault = function (t) {
        e.moment = t.moment || 0, e.startMoment = t.moment || 0, e.startTime = me.time
      }, this.restart = function () {
        e.tween && (e.startMoment = e.moment, e.startTime = me.time, e.tween.reverse = e.reverse, e.tween.reverseStartTime = e.startMoment, e.raf(), e.play())
      }, this.start = function () {
        e.updateAnim = !1;
        var t = e.props;
        t.animation && Object.keys(t.animation).length ? (e.setDefault(t), e.tween = new ne(e.dom, t.animation, t.attr), e.tween.reverse = e.reverse, e.raf(), e.play()) : e.tween = null
      }, this.play = function () {
        e.cancelRequestAnimationFrame(), e.paused || (e.rafID = me.add(e.raf))
      }, this.frame = function () {
        var t = e.props.yoyo, r = e.props.repeat, n = -1 === r ? Number.MAX_VALUE : e.tween.totalTime * (r + 1);
        r = r >= 0 ? r : Number.MAX_VALUE;
        var a = me.time - e.startTime + e.startMoment;
        e.reverse && (a = (e.startMoment || 0) - (me.time - e.startTime)), a = (a = a > n ? n : a) <= 0 ? 0 : a;
        var o = Math.floor(a / e.tween.totalTime) || 0;
        o = o > r ? r : o;
        var i = a - e.tween.totalTime * o;
        i = i < he && !e.reverse && n >= he ? 0 : i, r && a && a - e.tween.totalTime * o < he && e.tween.frame(e.tween.totalTime * o), (a < e.moment && !e.reverse || 0 !== r && o && o !== e.repeatNum) && (e.tween.resetAnimData(), e.tween.resetDefaultStyle()), t && o % 2 && (i = e.tween.totalTime - i), e.tween.onChange = function (t) {
          var r = f()({}, t, {timelineMode: ""});
          e.moment === e.startMoment && !e.reverse && !t.index && "onStart" === t.mode || e.reverse ? r.timelineMode = "onTimelineStart" : a >= n && !e.reverse || !a && e.reverse ? r.timelineMode = "onTimelineComplete" : o !== e.timelineRepeatNum ? r.timelineMode = "onTimelineRepeat" : r.timelineMode = "onTimelineUpdate", e.timelineRepeatNum = o, e.props.onChange(r)
        }, e.moment = a, e.repeatNum = o, e.tween.frame(i)
      }, this.raf = function () {
        var t = e.tween;
        if (e.frame(), t !== e.tween) return null;
        var r = e.props.repeat, n = -1 === r ? Number.MAX_VALUE : e.tween.totalTime * (r + 1);
        return e.moment >= n && !e.reverse || e.paused || e.reverse && 0 === e.moment ? e.cancelRequestAnimationFrame() : null
      }, this.cancelRequestAnimationFrame = function () {
        me.clear(e.rafID), e.rafID = -1
      }
    };
    ve.isTweenOne = !0;
    var be = Object(j.polyfill)(ve);
    var we = function (e) {
      function t(e) {
        g()(this, t);
        var r = w()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        ke.call(r), r.keysToEnter = [], r.keysToLeave = [], r.saveTweenTag = {}, r.onEnterBool = !1, r.animQueue = [], r.isTween = {};
        var n = P(R(r.props));
        return r.currentChildren = P(R(r.props)), r.state = {children: n, $self: r}, r
      }

      return O()(t, e), T()(t, null, [{
        key: "getDerivedStateFromProps", value: function (e, t) {
          var r = t.prevProps, n = t.$self, a = {prevProps: e};
          if (r && e !== r) {
            var o = P(e.children);
            if (Object.keys(n.isTween).length && !e.exclusive) return n.animQueue.push(o), a;
            var i = P(n.currentChildren);
            a.children = n.changeChildren(o, i)
          }
          return a
        }
      }]), T()(t, [{
        key: "componentDidMount", value: function () {
          this.onEnterBool = !0
        }
      }, {
        key: "changeChildren", value: function (e, t) {
          var r, n, o, i, s, l = this, c = (r = e, n = [], o = {}, i = [], s = void 0, t.forEach(function (e) {
            e && (L(r, e.key) ? (i.length && (o[e.key] = i, i = []), s = e.key) : e.key && i.push(e))
          }), s || (n = n.concat(i)), r.forEach(function (e) {
            e && (o.hasOwnProperty(e.key) && (n = n.concat(o[e.key])), n.push(e), e.key === s && (n = n.concat(i)))
          }), n);
          return this.keysToEnter = [], this.keysToLeave = [], e.forEach(function (e) {
            if (e) {
              var r = e.key, n = L(t, r);
              l.saveTweenTag[r] && (l.saveTweenTag[r] = a.a.cloneElement(l.saveTweenTag[r], {}, e)), !n && r && l.keysToEnter.push(r)
            }
          }), t.forEach(function (t) {
            if (t) {
              var r = t.key;
              !L(e, r) && r && (l.keysToLeave.push(r), delete l.saveTweenTag[r])
            }
          }), c
        }
      }, {
        key: "render", value: function () {
          var e = this.state.children;
          this.currentChildren = e;
          var t = this.getChildrenToRender(e), r = this.props, a = r.component, o = r.componentProps,
            i = (r.appear, r.enter, r.leave, r.animatingClassName, r.onEnd, r.exclusive, r.resetStyle, m()(r, ["component", "componentProps", "appear", "enter", "leave", "animatingClassName", "onEnd", "exclusive", "resetStyle"]));
          return a ? Object(n.createElement)(a, f()({}, i, o), t) : t[0] || null
        }
      }]), t
    }(n.Component), ke = function () {
      var e = this;
      this.onChange = function (t, r, n, a) {
        var o = N(t).length, i = a.target, s = "object" == typeof i.className && "baseVal" in i.className,
          l = "enter" === n || "appear" === n;
        if ("onStart" === a.mode) s ? i.className.baseVal = e.setClassName(i.className.baseVal, l) : i.className = e.setClassName(i.className, l); else if (a.index === o - 1 && "onComplete" === a.mode) {
          if (delete e.isTween[r], s ? i.className.baseVal = i.className.baseVal.replace(e.props.animatingClassName[l ? 0 : 1], "").trim() : i.className = i.className.replace(e.props.animatingClassName[l ? 0 : 1], "").trim(), "enter" === n) e.keysToEnter.splice(e.keysToEnter.indexOf(r), 1), e.keysToEnter.length || e.reAnimQueue(); else if ("leave" === n && (e.keysToLeave.splice(e.keysToLeave.indexOf(r), 1), e.currentChildren = e.currentChildren.filter(function (e) {
            return r !== e.key
          }), !e.keysToLeave.length)) {
            var c = e.currentChildren.map(function (e) {
              return e.key
            });
            Object.keys(e.saveTweenTag).forEach(function (t) {
              -1 === c.indexOf(t) && delete e.saveTweenTag[t]
            }), e.setState({children: e.currentChildren}, e.reAnimQueue)
          }
          var u = {key: r, type: n};
          e.props.onEnd(u)
        }
      }, this.setClassName = function (t, r) {
        var n = t.replace(e.props.animatingClassName[r ? 1 : 0], "").trim();
        return -1 === n.indexOf(e.props.animatingClassName[r ? 0 : 1]) && (n = (n + " " + e.props.animatingClassName[r ? 0 : 1]).trim()), n
      }, this.getTweenChild = function (t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.key;
        return e.saveTweenTag[n] = a.a.createElement(be, f()({}, r, {key: n, component: null}), t), e.saveTweenTag[n]
      }, this.getCoverAnimation = function (t, r, n) {
        var a = void 0;
        (a = "leave" === n ? e.props.leave : e.props.enter, "appear" === n) && (a = _(e.props.appear, t.key, r) && e.props.enter || null);
        var o = _(a, t.key, r), i = e.onChange.bind(e, o, t.key, n),
          s = {key: t.key, animation: o, onChange: i, resetStyle: e.props.resetStyle};
        return (e.keysToEnter.concat(e.keysToLeave).indexOf(t.key) >= 0 || !e.onEnterBool && a) && (e.saveTweenTag[t.key] || (e.isTween[t.key] = n)), e.getTweenChild(t, s)
      }, this.getChildrenToRender = function (t) {
        return t.map(function (t, r) {
          if (!t || !t.key) return t;
          var n = t.key;
          return e.keysToLeave.indexOf(n) >= 0 ? e.getCoverAnimation(t, r, "leave") : !(e.keysToEnter.indexOf(n) >= 0 || e.isTween[n] && -1 === e.keysToLeave.indexOf(n)) || "enter" === e.isTween[n] && e.saveTweenTag[n] ? e.onEnterBool ? e.saveTweenTag[n] : e.getCoverAnimation(t, r, "appear") : e.getCoverAnimation(t, r, "enter")
        })
      }, this.reAnimQueue = function () {
        if (!Object.keys(e.isTween).length && e.animQueue.length) {
          var t = e.changeChildren(e.animQueue[e.animQueue.length - 1], e.state.children);
          e.setState({children: t}), e.animQueue = []
        }
      }
    };
    we.propTypes = {
      component: C.a.any,
      componentProps: C.a.object,
      children: C.a.any,
      style: C.a.object,
      appear: C.a.bool,
      enter: C.a.any,
      leave: C.a.any,
      animatingClassName: C.a.array,
      onEnd: C.a.func,
      resetStyle: C.a.bool,
      exclusive: C.a.bool
    }, we.defaultProps = {
      component: "div",
      componentProps: {},
      appear: !0,
      animatingClassName: ["tween-one-entering", "tween-one-leaving"],
      enter: {x: 50, opacity: 0, type: "from"},
      leave: {x: -50, opacity: 0},
      onEnd: function () {
      },
      resetStyle: !0,
      exclusive: !1
    }, we.isTweenOneGroup = !0;
    var Te = Object(j.polyfill)(we);
    be.TweenOneGroup = Te, be.easing = q, be.plugins = z, be.ticker = me, be.Tween = ne;
    var Ee = be, Oe = Te, Se = me,
      Ce = !("undefined" != typeof window && window.document && window.document.createElement);

    function xe(e) {
      var t = [];
      return a.a.Children.forEach(e, function (e) {
        t.push(e)
      }), t
    }

    function Ae(e, t) {
      var r = null;
      return e && e.forEach(function (e) {
        !r && e && e.key === t && (r = e)
      }), r
    }

    function je(e, t) {
      var r = [], n = {}, a = [], o = void 0;
      return e.forEach(function (e) {
        e && (Ae(t, e.key) ? (a.length && (n[e.key] = a, a = []), o = e.key) : e.key && a.push(e))
      }), o || (r = r.concat(a)), t.forEach(function (e) {
        e && (n.hasOwnProperty(e.key) && (r = r.concat(n[e.key])), r.push(e), e.key === o && (r = r.concat(a)))
      }), r
    }

    function Me(e, t, r) {
      var n = void 0;
      return n = "function" == typeof e ? e({
        key: t,
        index: r
      }) : e, Array.isArray(n) ? 2 === n.length ? n : [n[0], n[0]] : [n, n]
    }

    function De(e) {
      return e && e.children
    }

    var Fe = {
        left: {opacity: [1, 0], translateX: [0, -30]},
        top: {opacity: [1, 0], translateY: [0, -30]},
        right: {opacity: [1, 0], translateX: [0, 30]},
        bottom: {opacity: [1, 0], translateY: [0, 30]},
        alpha: {opacity: [1, 0]},
        scale: {opacity: [1, 0], scale: [1, 0]},
        scaleBig: {opacity: [1, 0], scale: [1, 2]},
        scaleX: {opacity: [1, 0], scaleX: [1, 0]},
        scaleY: {opacity: [1, 0], scaleY: [1, 0]}
      },
      Pe = ["displayName", "propTypes", "getDefaultProps", "defaultProps", "childContextTypes", "contextTypes", "contextType"],
      Ne = function (e) {
        function t(e) {
          g()(this, t);
          var r = w()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          Ie.call(r), r.tweenToEnter = {}, r.leaveUnfinishedChild = [], r.saveTweenOneTag = {}, r.childrenShow = {}, r.keysToEnter = [], r.keysToLeave = [], r.keysToEnterPaused = {}, r.placeholderTimeoutIds = {}, r.childRefs = {}, r.currentRef = null;
          var n = xe(De(e)), a = {};
          return n.forEach(function (e) {
            e && e.key && (r.props.appear ? r.keysToEnter.push(e.key) : (a[e.key] = !0, r.tweenToEnter[e.key] = !0))
          }), r.originalChildren = xe(De(e)), r.state = {children: n, childrenShow: a, $self: r}, r
        }

        return O()(t, e), T()(t, null, [{
          key: "getDerivedStateFromProps", value: function (e, t) {
            var r = t.prevProps, n = t.children, a = t.childrenShow, o = t.$self, i = {prevProps: e};
            if (r && e !== r) {
              var s = xe(e.children).filter(function (e) {
                return e
              }), l = o.originalChildren.filter(function (e) {
                return e
              });
              if (n.length) {
                var c = n.filter(function (e) {
                  return e && o.keysToLeave.indexOf(e.key) >= 0
                });
                o.leaveUnfinishedChild = c.map(function (e) {
                  return o.placeholderTimeoutIds[e.key] ? e.key : null
                }).filter(function (e) {
                  return e
                });
                var u = je(l, n), p = [], f = function (e) {
                  e.forEach(function (e) {
                    var t = u.findIndex(function (t) {
                      return t.key === e.key
                    });
                    -1 === p.indexOf(e) && (-1 === t ? p.push(e) : p.splice(t, 0, e))
                  })
                };
                f(c), f(l), l = p.filter(function (e) {
                  return e
                })
              }
              var d = je(l, s), m = d.length ? a : {};
              if (o.keysToEnterPaused = {}, !(!s.length && !l.length && n.length)) {
                var h = s.map(function (e) {
                  return e.key
                });
                o.keysToLeave.forEach(function (t) {
                  h.indexOf(t) >= 0 && (o.keysToEnterPaused[t] = !0, l = l.filter(function (e) {
                    return e.key !== t
                  }), e.forcedReplay && delete m[t])
                })
              }
              o.keysToEnter = [], o.keysToLeave = [], i.childrenShow = m, i.children = d, s.forEach(function (e) {
                if (e) {
                  var t = e.key;
                  !Ae(l, t) && t && o.keysToEnter.push(t)
                }
              }), l.forEach(function (e) {
                if (e) {
                  var t = e.key;
                  !Ae(s, t) && t && (o.keysToLeave.push(t), Se.clear(o.placeholderTimeoutIds[t]), delete o.placeholderTimeoutIds[t])
                }
              })
            }
            return i
          }
        }]), T()(t, [{
          key: "componentDidMount", value: function () {
            this.props.appear && this.componentDidUpdate()
          }
        }, {
          key: "componentDidUpdate", value: function () {
            this.originalChildren = xe(De(this.props));
            var e = [].concat(y()(this.keysToEnter)), t = [].concat(y()(this.keysToLeave));
            e.forEach(this.performEnter), t.forEach(this.performLeave)
          }
        }, {
          key: "componentWillUnmount", value: function () {
            var e = this;
            Object.keys(this.placeholderTimeoutIds).forEach(function (t) {
              Se.clear(e.placeholderTimeoutIds[t])
            }), this.keysToEnter = [], this.keysToLeave = [], this.childrenShow = {}
          }
        }, {
          key: "getTweenType", value: function (e, t) {
            var r = Fe[e];
            return this.getTweenAnimConfig(r, t)
          }
        }, {
          key: "getTweenAnimConfig", value: function (e, t, r) {
            var n = this;
            return Array.isArray(e) ? e.map(function (e) {
              return n.getTweenSingleConfig(e, t, r)
            }) : this.getTweenSingleConfig(e, t, r)
          }
        }, {
          key: "render", value: function () {
            var e = this, t = this.props, r = t.component, a = t.componentProps,
              o = (t.interval, t.duration, t.delay, t.type, t.animConfig, t.ease, t.leaveReverse, t.animatingClassName, t.forcedReplay, t.onEnd, t.appear, m()(t, ["component", "componentProps", "interval", "duration", "delay", "type", "animConfig", "ease", "leaveReverse", "animatingClassName", "forcedReplay", "onEnd", "appear"]));
            if (Ce) return Object(n.createElement)(r, f()({}, o, a), this.props.children);
            var i = xe(this.state.children).map(this.getChildrenToRender), s = f()({}, o, this.props.componentProps, {
              ref: function (t) {
                e.currentRef = t
              }
            });
            return Object(n.createElement)(this.props.component, s, i)
          }
        }]), t
      }(a.a.Component);
    Ne.propTypes = {
      children: C.a.any,
      component: C.a.any,
      componentProps: C.a.object,
      interval: C.a.any,
      duration: C.a.any,
      delay: C.a.any,
      type: C.a.any,
      animConfig: C.a.any,
      ease: C.a.any,
      leaveReverse: C.a.bool,
      forcedReplay: C.a.bool,
      animatingClassName: C.a.array,
      onEnd: C.a.func,
      appear: C.a.bool
    }, Ne.defaultProps = {
      component: "div",
      componentProps: {},
      interval: 100,
      duration: 450,
      delay: 0,
      type: "right",
      animConfig: null,
      ease: "easeOutQuart",
      leaveReverse: !1,
      forcedReplay: !1,
      animatingClassName: ["queue-anim-entering", "queue-anim-leaving"],
      onEnd: function () {
      },
      appear: !0
    };
    var Ie = function () {
      var e = this;
      this.getTweenSingleConfig = function (e, t, r) {
        var n = {};
        return Object.keys(e).forEach(function (a) {
          Array.isArray(e[a]) ? n[a] = e[a][t] : (!r && !t || r && t) && (n[a] = e[a])
        }), n
      }, this.getTweenData = function (t, r, n) {
        var a = e.props, o = "enter" === n ? 0 : 1, i = "enter" === n ? 1 : 0, s = "enter" === n ? 0 : 1,
          l = e.getAnimData(a, t, r, o, s),
          c = "enter" !== n || !a.forcedReplay && e.childrenShow[t] ? null : e.getAnimData(a, t, r, o, i),
          u = Me(a.ease, t, r)[o], p = Me(a.duration, t, r)[o];
        return Array.isArray(u) && (u = u.map(function (e) {
          return 100 * e
        }), u = Ee.easing.path("M0,100C" + u[0] + "," + (100 - u[1]) + "," + u[2] + "," + (100 - u[3]) + ",100,0", {lengthPixel: p / 16.6667})), {
          startAnim: c,
          animate: l,
          ease: u,
          duration: p,
          isArray: Array.isArray(l)
        }
      }, this.getTweenSingleData = function (e, t, r, n, a, o, i) {
        var s = Object.keys(e || {}).length;
        return {
          animation: f()({onStart: o, onComplete: i, duration: n, delay: a, ease: r}, t),
          startAnimate: s ? f()({duration: 0}, e) : null
        }
      }, this.getTweenEnterOrLeaveData = function (t, r, n, a) {
        var o = e.getTweenData(t, r, a), i = o.startAnim, s = o.animate,
          l = ("enter" === a ? e.enterBegin : e.leaveBegin).bind(e, t),
          c = ("enter" === a ? e.enterComplete : e.leaveComplete).bind(e, t);
        if (o.isArray) {
          var u = s.length - 1, p = [], f = [];
          return s.forEach(function (t, r) {
            var a = i && i[r],
              s = e.getTweenSingleData(a, t, o.ease, o.duration / u, r ? 0 : n, r ? null : l, r === u ? c : null);
            p.push(s.animation), s.startAnimate && f.push(s.startAnimate)
          }), f.concat(p)
        }
        return [(o = e.getTweenSingleData(i, s, o.ease, o.duration, n, l, c)).startAnimate, o.animation].filter(function (e) {
          return e
        })
      }, this.getAnimData = function (t, r, n, a, o) {
        return t.animConfig ? e.getTweenAnimConfig(Me(t.animConfig, r, n)[a], o, a) : e.getTweenType(Me(t.type, r, n)[a], o)
      }, this.getChildrenToRender = function (t) {
        var r = e.props, a = r.forcedReplay, o = r.leaveReverse, i = r.delay, s = r.interval, l = r.children;
        if (!t || !t.key) return t;
        var c = t.key;
        if (!e.state.childrenShow[c]) return null;
        var u = e.keysToLeave.indexOf(c), p = void 0, f = "function" == typeof t.type, d = f ? {} : null;
        f && Object.keys(t.type).forEach(function (e) {
          -1 === Pe.indexOf(e) && (d[e] = t.type[e])
        });
        var m = function () {
          delete e.childRefs[c]
        };
        if (u >= 0) {
          if (e.leaveUnfinishedChild.indexOf(c) >= 0) return e.saveTweenOneTag[c];
          var h = Me(s, c, u)[1], y = Me(i, c, u)[1];
          y = h * ((o ? e.keysToLeave.length - u - 1 : u) - e.leaveUnfinishedChild.length) + y, p = e.getTweenEnterOrLeaveData(c, u, y, "leave")
        } else {
          if (u = xe(l).findIndex(function (e) {
            return e && e.key === c
          }), m = function (t) {
            e.childRefs[c] = t && t.currentRef ? t.currentRef : t
          }, e.tweenToEnter[c] && !a) return Object(n.createElement)(Ee, {
            key: c,
            component: t.type,
            forcedJudg: d,
            componentProps: t.props,
            ref: m
          });
          e.tweenToEnter[c] && !a || (p = e.getTweenEnterOrLeaveData(c, u, 0, "enter"))
        }
        p = e.keysToEnterPaused[c] && -1 === e.keysToLeave.indexOf(c) ? null : p;
        var v = Object(n.createElement)(Ee, {
          key: c,
          component: t.type,
          forcedJudg: d,
          componentProps: t.props,
          animation: p,
          ref: m
        });
        return e.saveTweenOneTag[c] = v, v
      }, this.performEnter = function (t, r) {
        var n = Me(e.props.interval, t, r)[0], a = Me(e.props.delay, t, r)[0];
        e.placeholderTimeoutIds[t] = Se.timeout(e.performEnterBegin.bind(e, t), n * r + a), e.keysToEnter.indexOf(t) >= 0 && e.keysToEnter.splice(e.keysToEnter.indexOf(t), 1)
      }, this.performEnterBegin = function (t) {
        var r = e.state.childrenShow;
        r[t] = !0, delete e.keysToEnterPaused[t], Se.clear(e.placeholderTimeoutIds[t]), delete e.placeholderTimeoutIds[t], e.setState({childrenShow: r})
      }, this.performLeave = function (t) {
        Se.clear(e.placeholderTimeoutIds[t]), delete e.placeholderTimeoutIds[t]
      }, this.enterBegin = function (t, r) {
        var n = r.target, a = e.props.animatingClassName;
        n.className = n.className.replace(a[1], ""), -1 === n.className.indexOf(a[0]) && (n.className = (n.className + " " + a[0]).trim()), e.childrenShow[t] = !0
      }, this.enterComplete = function (t, r) {
        if (!(e.keysToEnterPaused[t] || e.keysToLeave.indexOf(t) >= 0)) {
          var n = r.target;
          n.className = n.className.replace(e.props.animatingClassName[0], "").trim(), e.tweenToEnter[t] = !0, e.props.onEnd({
            key: t,
            type: "enter",
            target: n
          })
        }
      }, this.leaveBegin = function (t, r) {
        var n = r.target, a = e.props.animatingClassName;
        n.className = n.className.replace(a[0], ""), -1 === n.className.indexOf(a[1]) && (n.className = (n.className + " " + a[1]).trim()), delete e.tweenToEnter[t]
      }, this.leaveComplete = function (t, r) {
        if (!(xe(e.props.children).findIndex(function (e) {
          return e && e.key === t
        }) >= 0)) {
          var n = e.state.childrenShow;
          if (delete n[t], delete e.saveTweenOneTag[t], delete e.childrenShow[t], e.keysToLeave.indexOf(t) >= 0 && e.keysToLeave.splice(e.keysToLeave.indexOf(t), 1), !e.keysToLeave.some(function (e) {
            return n[e]
          })) {
            var a = xe(De(e.props));
            e.setState({children: a, childrenShow: n})
          }
          var o = r.target;
          o.className = o.className.replace(e.props.animatingClassName[1], "").trim(), e.props.onEnd({
            key: t,
            type: "leave",
            target: o
          })
        }
      }
    };
    Ne.isQueueAnim = !0;
    var Le = Object(j.polyfill)(Ne), _e = r("TSYQ"), Re = r.n(_e), Ue = {
      left: {x: 30, opacity: 0},
      right: {x: -30, opacity: 0},
      top: {y: -30, opacity: 0},
      bottom: {y: 30, opacity: 0},
      alpha: {opacity: 0},
      scale: {scale: 0, opacity: 0},
      scaleBig: {scale: 2, opacity: 0},
      scaleX: {opacity: 0, scaleX: 0},
      scaleY: {opacity: 0, scaleY: 0},
      "mask-bottom": {opacity: 0, scale: .8, y: "100%"},
      "mask-top": {opacity: 0, scale: .8, y: "-100%"},
      flash: {
        enter: [{opacity: 0, type: "from", duration: 150}, {opacity: 0, duration: 150}, {
          opacity: 1,
          duration: 150
        }], leave: [{opacity: 0, duration: 150}, {opacity: 1, duration: 150}, {opacity: 0, duration: 150}]
      },
      bounce: {
        enter: [{opacity: 0, type: "set"}, {y: -30, opacity: 1, duration: 300}, {y: 15, duration: 200}, {
          y: -10,
          duration: 200
        }, {y: 5, duration: 200}, {y: 0, duration: 200}],
        leave: [{y: 5, duration: 200}, {y: -10, duration: 200}, {y: 15, duration: 200}, {
          y: -30,
          opacity: 0,
          duration: 300
        }]
      },
      swing: {
        enter: [{opacity: 0, type: "set"}, {x: 10, opacity: 1, duration: 150}, {x: -10, duration: 150}, {
          x: 8,
          duration: 100
        }, {x: -8, duration: 100}, {x: 5, duration: 100}, {x: -5, duration: 100}, {x: 0, duration: 100}],
        leave: [{x: -5, duration: 100}, {x: 5, duration: 100}, {x: -8, duration: 100}, {x: 8, duration: 100}, {
          x: -10,
          duration: 150
        }, {x: 10, opacity: 0, duration: 150}]
      },
      "swing-rotate": {
        enter: [{opacity: 0, transformOrigin: "50% 0", type: "set"}, {
          rotate: 30,
          opacity: 1,
          duration: 300
        }, {rotate: -30, duration: 300}, {rotate: 15, duration: 200}, {rotate: -15, duration: 200}, {
          rotate: 5,
          duration: 100
        }, {rotate: -5, duration: 100}, {rotate: 0, duration: 50}],
        leave: [{rotate: -5, duration: 100}, {rotate: 5, duration: 100}, {rotate: -15, duration: 200}, {
          rotate: 15,
          duration: 200
        }, {rotate: -30, duration: 300}, {rotate: 30, opacity: 0, duration: 300}]
      },
      "swing-y": {
        enter: [{opacity: 0, type: "set"}, {y: 10, opacity: 1, duration: 150}, {y: -10, duration: 150}, {
          y: 8,
          duration: 100
        }, {y: -8, duration: 100}, {y: 5, duration: 100}, {y: -5, duration: 100}, {y: 0, duration: 100}],
        leave: [{y: -5, duration: 100}, {y: 5, duration: 100}, {y: -8, duration: 100}, {y: 8, duration: 100}, {
          y: -10,
          duration: 150
        }, {y: 10, opacity: 0, duration: 150}]
      }
    }, Ye = function (e, t) {
      var r = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var a = 0;
        for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && (r[n[a]] = e[n[a]])
      }
      return r
    };

    function Xe(e, t) {
      return "function" == typeof e ? e(t) : e
    }

    var Be = function (e) {
      function t() {
        g()(this, t);
        var r = w()(this, e.apply(this, arguments));
        return r.getChildrenToRender = function (e) {
          if (!e) return [];
          var t = r.props.split;
          return (t ? t(e) : e.split("")).map(function (e, t) {
            return n.createElement("span", {key: e + "-" + t.toString()}, e)
          })
        }, r.getEnterOrLeave = function (e, t, n) {
          var a = r.props, o = a.mode, i = a.type, s = a.enter, l = a.appear, c = a.interval, u = a.duration;
          if (!l && "enter" === t || n < 0) return null;
          var p = f()({}, e, {type: t}), d = Xe(u, p), m = Xe(c, p), h = void 0;
          if ("function" == typeof c) h = m; else switch (o) {
            case"reverse":
              h = (n - e.index) * m;
              break;
            case"sync":
              h = 0;
              break;
            case"random":
              h = n * m * Math.random();
              break;
            default:
              h = e.index * m
          }
          h += Xe(r.props.delay, p);
          var y = "enter" === t ? "from" : "to", v = r.props[t] || s;
          return v && "function" == typeof v ? v = v(f()({}, e, {delay: h})) : v || (v = Ue[i]), v.enter && (v = v[t] || v.etner), Array.isArray(v) ? v.map(function (e, t) {
            return t || e.duration && "set" !== e.type ? 1 !== t || v[0].duration && "set" !== e.type ? f()({delay: t ? 0 : h}, e) : f()({delay: h}, e) : e
          }) : f()({delay: h, duration: d, type: y}, v)
        }, r
      }

      return O()(t, e), t.prototype.render = function () {
        var e, t = this, r = this.props, a = r.prefixCls, o = r.type, i = r.className, s = r.enter,
          l = (r.mode, r.duration, r.delay, r.interval, r.children),
          c = (r.split, Ye(r, ["prefixCls", "type", "className", "enter", "mode", "duration", "delay", "interval", "children", "split"])),
          u = this.getChildrenToRender(l), p = Re()(a, ((e = {})[o] = o && !s, e[i] = !!i, e));
        return n.createElement(Oe, f()({}, c, {
          className: p, enter: function (e) {
            return t.getEnterOrLeave(e, "enter", u.length - 1)
          }, leave: function (e) {
            return t.getEnterOrLeave(e, "leave", t.tweenGrooup.keysToLeave.length - 1)
          }, ref: function (e) {
            t.tweenGrooup = e
          }
        }), u)
      }, t
    }(n.Component), He = Be;
    Be.defaultProps = {
      type: "top",
      mode: "smooth",
      prefixCls: "texty",
      component: "div",
      delay: 0,
      interval: 50,
      appear: !0
    };
    var qe = He;
    r("vAZa");
    var Ve = class extends a.a.PureComponent {
      render() {
        var e = u()({}, this.props), t = e.dataSource;
        delete e.dataSource, delete e.isMobile;
        var r = t.textWrapper.children.map(e => {
          var t = e.name, r = e.texty, n = l()(e, ["name", "texty"]);
          return t.match("button") ? a.a.createElement(i.a, u()({
            type: "primary",
            key: t
          }, n), e.children) : a.a.createElement("div", u()({key: t}, n), r ? a.a.createElement(qe, {type: "mask-bottom"}, e.children) : e.children)
        });
        return a.a.createElement("div", u()({}, e, t.wrapper), a.a.createElement(Le, u()({
          key: "QueueAnim",
          type: ["bottom", "top"],
          delay: 200
        }, t.textWrapper), r))
      }
    }, ze = r("bqU7"), Qe = r.n(ze);
    var Ge = class extends a.a.PureComponent {
      render() {
        var e = u()({}, this.props), t = e.dataSource;
        return delete e.dataSource, delete e.isMobile, a.a.createElement("div", u()({}, e, t.wrapper), a.a.createElement(Qe.a, t.OverPack, a.a.createElement(Ee, u()({
          animation: {
            y: "+=30",
            opacity: 0,
            type: "from"
          }, key: "footer"
        }, t.copyright), t.copyright.children)))
      }
    }, Ze = r("FG+t"), We = r("c+Mq"), Je = r.n(We), $e = r("i2du"), Ke = r.n($e).a.getCookie, et = {
      wrapper: {className: "banner3"},
      textWrapper: {
        className: "banner3-text-wrapper",
        children: [{
          name: "slogan",
          className: "banner3-slogan",
          children: a.a.createElement("div", null, a.a.createElement("img", {
            src: Je.a,
            className: "banner3-logo"
          }), a.a.createElement("br", null), a.a.createElement("span", null, "XC-TC"))
        }, {
          name: "name",
          className: "banner3-name",
          children: a.a.createElement("span", null, a.a.createElement("p", null, "一套敏捷的测试用例管理平台"))
        }, {
          name: "nameEn",
          className: "banner3-name-en",
          children: a.a.createElement("span", {style: {color: "#7d899b"}}, "以脑图方式编辑可快速上手，用例关联需求形成流程闭环，并支持组件化引用，", a.a.createElement("br", null), "可在各个平台嵌入使用，是测试人员的贴心助手")
        }, {
          name: "button",
          className: "banner3-button",
          children: a.a.createElement("span", null, a.a.createElement("p", null, "开始使用")),
          href: Ke("username") ? "/case/caseList/1" : "/login?/case/caseList/1"
        }]
      }
    }, tt = {
      wrapper: {className: "home-page-wrapper footer0-wrapper"},
      OverPack: {className: "home-page footer0", playScale: .05},
      copyright: {
        className: "copyright",
        children: a.a.createElement("span", null, a.a.createElement("p", null, a.a.createElement("span", null, "©2022 XC-TC")))
      }
    };
    r("LF3p");
    r.d(t, "default", function () {
      return ot
    });
    var rt = {};
    Object(o.enquireScreen)(e => {
      rt = e
    });
    var nt = ("undefined" != typeof window ? window : {}).location, at = void 0 === nt ? {} : nt;

    class ot extends a.a.Component {
      constructor(e) {
        super(e), this.state = {isMobile: rt, show: !at.port}
      }

      componentDidMount() {
        Object(o.enquireScreen)(e => {
          this.setState({isMobile: !!e})
        }), at.port && setTimeout(() => {
          this.setState({show: !0})
        }, 500)
      }

      render() {
        var e = [a.a.createElement(Ve, {
          id: "Banner3_0",
          key: "Banner3_0",
          dataSource: et,
          isMobile: this.state.isMobile
        }), a.a.createElement(Ge, {id: "Footer0_0", key: "Footer0_0", dataSource: tt, isMobile: this.state.isMobile})];
        return a.a.createElement("div", {
          className: "templates-wrapper", ref: e => {
            this.dom = e
          }
        }, a.a.createElement(Ze.a, null), this.state.show && e)
      }
    }
  }, bqU7: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = h(r("QbLZ")), a = h(r("jo6Y")), o = h(r("iCc5")), i = h(r("FYw3")), s = h(r("V7oC")), l = h(r("mRg0")),
      c = r("q1tI"), u = h(c), p = h(r("17x9")), f = h(r("6ebc")), d = h(r("1SIV")), m = r("mUgZ");

    function h(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var y = function (e) {
      function t(e) {
        (0, o.default)(this, t);
        var r = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.scrollEventListener = function (e) {
          r.getParam(e);
          var t = r.state.show, n = r.props, a = n.always, o = n.replay,
            i = r.elementShowHeight > r.clientHeight + r.leavePlayHeight;
          if (r.enter || !o && i) t || r.setState({show: !0}), !a && r.eventType && f.default.removeEventListener(r.eventType, r.scrollEventListener, r.target); else if (a) {
            var s = r.elementShowHeight < r.playHeight;
            ((o ? i : null) || s) && t && r.setState({show: !1})
          }
        }, r.children = (0, m.toArrayChildren)(e.children), r.oneEnter = !1, r.enter = !1, r.state = {
          show: !1,
          children: (0, m.toArrayChildren)(e.children)
        }, r
      }

      return (0, l.default)(t, e), (0, s.default)(t, null, [{
        key: "getDerivedStateFromProps", value: function (e, t) {
          var r = t.prevProps, n = {prevProps: e};
          return r && e !== r && (n.children = (0, m.toArrayChildren)(e.children)), n
        }
      }]), (0, s.default)(t, [{
        key: "componentDidUpdate", value: function (e) {
          var t = this;
          if (e !== this.props) {
            var r = this.props.always, n = this.state.show,
              a = f.default._listeners.scroll && f.default._listeners.scroll.some(function (e) {
                return e.n === t.eventType.split(".")[1]
              });
            r && !a ? this.addScrollEvent() : r || n || this.scrollEventListener()
          }
        }
      }, {
        key: "render", value: function () {
          var e = this.props, t = (e.playScale, e.replay, e.component), r = (e.always, e.scrollEvent, e.appear),
            o = (e.location, e.targetId, e.onChange, e.onScroll, e.componentProps),
            i = (0, a.default)(e, ["playScale", "replay", "component", "always", "scrollEvent", "appear", "location", "targetId", "onChange", "onScroll", "componentProps"]);
          if (m.windowIsUndefined) return (0, c.createElement)(t, (0, n.default)({}, i, o), i.children);
          var s = void 0;
          if (this.oneEnter) this.state.show ? this.children = this.state.children : this.children = this.children.map(function (e) {
            if (!e) return null;
            var t = e.key || (Date.now() + Math.random()).toString(16).replace(".", "");
            return e.type.isTweenOne ? u.default.cloneElement(e, {
              key: t,
              reverse: !0
            }) : u.default.cloneElement(e, {key: t}, null)
          }), s = (0, c.createElement)(t, (0, n.default)({}, i, o), this.children); else {
            var l = !r, p = (0, m.toArrayChildren)(i.children).map(function (e) {
              if (!e) return null;
              var t = e.key || (Date.now() + Math.random()).toString(16).replace(".", "");
              return e.type.isTweenOne ? u.default.cloneElement(e, (0, n.default)({}, e.props, {
                key: t,
                paused: !l
              })) : u.default.cloneElement(e, (0, n.default)({}, e.props, {key: t}), l && e.props.children)
            });
            s = (0, c.createElement)(t, (0, n.default)({}, i, o), p), this.oneEnter = !0
          }
          return s
        }
      }]), t
    }(d.default);
    y.propTypes = {
      component: p.default.any,
      playScale: p.default.any,
      always: p.default.bool,
      scrollEvent: p.default.func,
      children: p.default.any,
      className: p.default.string,
      style: p.default.any,
      replay: p.default.bool,
      onChange: p.default.func,
      onScroll: p.default.func,
      appear: p.default.bool,
      componentProps: p.default.object
    }, y.defaultProps = {
      component: "div",
      playScale: .5,
      always: !0,
      scrollEvent: m.noop,
      replay: !1,
      onChange: m.noop,
      onScroll: m.noop,
      appear: !0,
      componentProps: {}
    }, y.isScrollOverPack = !0, t.default = y, e.exports = t.default
  }, "c+Mq": function (e, t, r) {
    e.exports = r.p + "static/platform_icon2.png"
  }, mUgZ: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getPassive = t.windowIsUndefined = void 0, t.toArrayChildren = function (e) {
      var t = [];
      return o.default.Children.forEach(e, function (e) {
        t.push(e)
      }), t
    }, t.dataToArray = function (e) {
      if (!e && 0 !== e) return [];
      if (Array.isArray(e)) return e;
      return [e]
    }, t.transformArguments = function (e) {
      if (Array.isArray(e)) return 2 === e.length ? e : [e.join(), e.join()];
      return [e, e]
    }, t.objectEqual = function e(t, r) {
      if (!t || !r) return !1;
      if (t === r) return !0;
      var n = !0;

      function a(t, r) {
        Object.keys(t).forEach(function (a) {
          t[a] !== r[a] && (n = "object" == typeof t[a] && "object" == typeof r[a] && e(t[a], r[a]))
        })
      }

      if (Array.isArray(t) && Array.isArray(r)) for (var o = 0; o < t.length; o++) {
        var i = t[o], s = r[o];
        a(i, s)
      }
      Object.keys(t).forEach(function (a) {
        a in r ? "object" == typeof t[a] && "object" == typeof r[a] ? n = e(t[a], r[a]) : "function" == typeof t[a] && "function" == typeof r[a] ? t[a].name !== r[a].name && (n = !1) : t[a] !== r[a] && (n = !1) : n = !1
      });
      Object.keys(r).forEach(function (a) {
        a in t ? "object" == typeof r[a] && "object" == typeof t[a] ? n = e(r[a], t[a]) : "function" == typeof t[a] && "function" == typeof r[a] ? t[a].name !== r[a].name && (n = !1) : r[a] !== t[a] && (n = !1) : n = !1
      });
      return n
    }, t.currentScrollTop = function () {
      return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    }, t.windowHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }, t.noop = function () {
    };
    var n, a = r("q1tI"), o = (n = a) && n.__esModule ? n : {default: n};
    var i = t.windowIsUndefined = !("undefined" != typeof window && window.document && window.document.createElement);
    t.getPassive = function () {
      if (i) return !1;
      var e = !1;
      return window.addEventListener("test", function () {
      }, Object.defineProperty({}, "passive", {
        get: function () {
          return e = !0, null
        }
      })), !!e && {passive: !1}
    }
  }, tQyb: function (e, t, r) {
    "use strict";
    var n = {
      linear: function (e, t, r, n) {
        return (r - t) * e / n + t
      }, easeInQuad: function (e, t, r, n) {
        return (r - t) * (e /= n) * e + t
      }, easeOutQuad: function (e, t, r, n) {
        return -(r - t) * (e /= n) * (e - 2) + t
      }, easeInOutQuad: function (e, t, r, n) {
        var a = r - t;
        return (e /= n / 2) < 1 ? a / 2 * e * e + t : -a / 2 * (--e * (e - 2) - 1) + t
      }, easeInCubic: function (e, t, r, n) {
        return (r - t) * (e /= n) * e * e + t
      }, easeOutCubic: function (e, t, r, n) {
        return (r - t) * ((e = e / n - 1) * e * e + 1) + t
      }, easeInOutCubic: function (e, t, r, n) {
        var a = r - t;
        return (e /= n / 2) < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t
      }, easeInQuart: function (e, t, r, n) {
        return (r - t) * (e /= n) * e * e * e + t
      }, easeOutQuart: function (e, t, r, n) {
        return -(r - t) * ((e = e / n - 1) * e * e * e - 1) + t
      }, easeInOutQuart: function (e, t, r, n) {
        var a = r - t;
        return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + t : -a / 2 * ((e -= 2) * e * e * e - 2) + t
      }, easeInQuint: function (e, t, r, n) {
        return (r - t) * (e /= n) * e * e * e * e + t
      }, easeOutQuint: function (e, t, r, n) {
        return (r - t) * ((e = e / n - 1) * e * e * e * e + 1) + t
      }, easeInOutQuint: function (e, t, r, n) {
        var a = r - t;
        return (e /= n / 2) < 1 ? a / 2 * e * e * e * e * e + t : a / 2 * ((e -= 2) * e * e * e * e + 2) + t
      }, easeInSine: function (e, t, r, n) {
        var a = r - t;
        return -a * Math.cos(e / n * (Math.PI / 2)) + a + t
      }, easeOutSine: function (e, t, r, n) {
        return (r - t) * Math.sin(e / n * (Math.PI / 2)) + t
      }, easeInOutSine: function (e, t, r, n) {
        return -(r - t) / 2 * (Math.cos(Math.PI * e / n) - 1) + t
      }, easeInExpo: function (e, t, r, n) {
        return 0 == e ? t : (r - t) * Math.pow(2, 10 * (e / n - 1)) + t
      }, easeOutExpo: function (e, t, r, n) {
        var a = r - t;
        return e == n ? t + a : a * (1 - Math.pow(2, -10 * e / n)) + t
      }, easeInOutExpo: function (e, t, r, n) {
        var a = r - t;
        return 0 === e ? t : e === n ? t + a : (e /= n / 2) < 1 ? a / 2 * Math.pow(2, 10 * (e - 1)) + t : a / 2 * (2 - Math.pow(2, -10 * --e)) + t
      }, easeInCirc: function (e, t, r, n) {
        return -(r - t) * (Math.sqrt(1 - (e /= n) * e) - 1) + t
      }, easeOutCirc: function (e, t, r, n) {
        return (r - t) * Math.sqrt(1 - (e = e / n - 1) * e) + t
      }, easeInOutCirc: function (e, t, r, n) {
        var a = r - t;
        return (e /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + t : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
      }, easeInElastic: function (e, t, r, n) {
        var a, o, i, s = r - t;
        return i = 1.70158, o = 0, a = s, 0 === e ? t : 1 == (e /= n) ? t + s : (o || (o = .3 * n), a < Math.abs(s) ? (a = s, i = o / 4) : i = o / (2 * Math.PI) * Math.asin(s / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) + t)
      }, easeOutElastic: function (e, t, r, n) {
        var a, o, i, s = r - t;
        return i = 1.70158, o = 0, a = s, 0 === e ? t : 1 == (e /= n) ? t + s : (o || (o = .3 * n), a < Math.abs(s) ? (a = s, i = o / 4) : i = o / (2 * Math.PI) * Math.asin(s / a), a * Math.pow(2, -10 * e) * Math.sin((e * n - i) * (2 * Math.PI) / o) + s + t)
      }, easeInOutElastic: function (e, t, r, n) {
        var a, o, i, s = r - t;
        return i = 1.70158, o = 0, a = s, 0 === e ? t : 2 == (e /= n / 2) ? t + s : (o || (o = n * (.3 * 1.5)), a < Math.abs(s) ? (a = s, i = o / 4) : i = o / (2 * Math.PI) * Math.asin(s / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * -.5 + t : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * .5 + s + t)
      }, easeInBack: function (e, t, r, n, a) {
        return void 0 === a && (a = 1.70158), (r - t) * (e /= n) * e * ((a + 1) * e - a) + t
      }, easeOutBack: function (e, t, r, n, a) {
        return void 0 === a && (a = 1.70158), (r - t) * ((e = e / n - 1) * e * ((a + 1) * e + a) + 1) + t
      }, easeInOutBack: function (e, t, r, n, a) {
        var o = r - t;
        return void 0 === a && (a = 1.70158), (e /= n / 2) < 1 ? o / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + t : o / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + t
      }, easeInBounce: function (e, t, r, a) {
        var o = r - t;
        return o - n.easeOutBounce(a - e, 0, o, a) + t
      }, easeOutBounce: function (e, t, r, n) {
        var a = r - t;
        return (e /= n) < 1 / 2.75 ? a * (7.5625 * e * e) + t : e < 2 / 2.75 ? a * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? a * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : a * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
      }, easeInOutBounce: function (e, t, r, a) {
        var o = r - t;
        return e < a / 2 ? .5 * n.easeInBounce(2 * e, 0, o, a) + t : .5 * n.easeOutBounce(2 * e - a, 0, o, a) + .5 * o + t
      }
    };
    e.exports = n
  }, vAZa: function (e, t, r) {
  }
}]);
