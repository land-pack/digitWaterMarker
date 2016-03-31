!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length, n = J.type(e);
        return "function" === n || J.isWindow(e)?!1 : 1 === e.nodeType && t?!0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function i(e, t, n) {
        if (J.isFunction(t))
            return J.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return J.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (re.test(t))
                return J.filter(t, e, n);
            t = J.filter(t, e)
        }
        return J.grep(e, function(e) {
            return V.call(t, e) >= 0 !== n
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function a(e) {
        var t = fe[e] = {};
        return J.each(e.match(he) || [], function(e, n) {
            t[n]=!0
        }), t
    }
    function s() {
        K.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), J.ready()
    }
    function r() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + r.uid++
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(we, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n?!0 : "false" === n?!1 : "null" === n ? null : + n + "" === n?+n : be.test(n) ? J.parseJSON(n) : n
                } catch (o) {}
                ye.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function c() {
        return !0
    }
    function u() {
        return !1
    }
    function d() {
        try {
            return K.activeElement
        } catch (e) {}
    }
    function p(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function f(e) {
        var t = Oe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++)
            ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }
    function g(e, t) {
        var n, i, o, a, s, r, l, c;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (a = ve.access(e), s = ve.set(t, a), c = a.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; i > n; n++)
                        J.event.add(t, o, c[o][n])
                    }
            ye.hasData(e) && (r = ye.access(e), l = J.extend({}, r), ye.set(t, l))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*"): e.querySelectorAll ? e.querySelectorAll(t || "*"): [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && $e.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function b(t, n) {
        var i, o = J(n.createElement(t)).appendTo(n.body), a = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display: J.css(o[0], "display");
        return o.detach(), a
    }
    function w(e) {
        var t = K, n = ze[e];
        return n || (n = b(e, t), "none" !== n && n || (Ne = (Ne || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ne[0].contentDocument, t.write(), t.close(), n = b(e, t), Ne.detach()), ze[e] = n), n
    }
    function x(e, t, n) {
        var i, o, a, s, r = e.style;
        return n = n || Be(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), He.test(s) && Re.test(t) && (i = r.width, o = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = s, s = n.width, r.width = i, r.minWidth = o, r.maxWidth = a)), void 0 !== s ? s + "" : s
    }
    function C(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function k(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ge.length; o--;)
            if (t = Ge[o] + n, t in e)
                return t;
        return i
    }
    function $(e, t, n) {
        var i = Ue.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function T(e, t, n, i, o) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2)
            "margin" === n && (s += J.css(e, n + Ce[a], !0, o)), i ? ("content" === n && (s -= J.css(e, "padding" + Ce[a], !0, o)), "margin" !== n && (s -= J.css(e, "border" + Ce[a] + "Width", !0, o))) : (s += J.css(e, "padding" + Ce[a], !0, o), "padding" !== n && (s += J.css(e, "border" + Ce[a] + "Width", !0, o)));
        return s
    }
    function _(e, t, n) {
        var i=!0, o = "width" === t ? e.offsetWidth : e.offsetHeight, a = Be(e), s = "border-box" === J.css(e, "boxSizing", !1, a);
        if (0 >= o || null == o) {
            if (o = x(e, t, a), (0 > o || null == o) && (o = e.style[t]), He.test(o))
                return o;
            i = s && (Z.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + T(e, t, n || (s ? "border" : "content"), i, a) + "px"
    }
    function E(e, t) {
        for (var n, i, o, a = [], s = 0, r = e.length; r > s; s++)
            i = e[s], i.style && (a[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (a[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && ke(i) && (a[s] = ve.access(i, "olddisplay", w(i.nodeName)))) : (o = ke(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : J.css(i, "display"))));
        for (s = 0; r > s; s++)
            i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none"));
        return e
    }
    function S(e, t, n, i, o) {
        return new S.prototype.init(e, t, n, i, o)
    }
    function A() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = J.now()
    }
    function D(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = Ce[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }
    function F(e, t, n) {
        for (var i, o = (nt[t] || []).concat(nt["*"]), a = 0, s = o.length; s > a; a++)
            if (i = o[a].call(n, t, e))
                return i
    }
    function j(e, t, n) {
        var i, o, a, s, r, l, c, u, d = this, p = {}, h = e.style, f = e.nodeType && ke(e), m = ve.get(e, "fxshow");
        n.queue || (r = J._queueHooks(e, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
            r.unqueued || l()
        }), r.unqueued++, d.always(function() {
            d.always(function() {
                r.unqueued--, J.queue(e, "fx").length || r.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = J.css(e, "display"), u = "none" === c ? ve.get(e, "olddisplay") || w(e.nodeName) : c, "inline" === u && "none" === J.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], Qe.exec(o)) {
                if (delete t[i], a = a || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o ||!m || void 0 === m[i])
                        continue;
                        f=!0
                }
                p[i] = m && m[i] || J.style(e, i)
            } else
                c = void 0;
        if (J.isEmptyObject(p))
            "inline" === ("none" === c ? w(e.nodeName) : c) && (h.display = c);
        else {
            m ? "hidden"in m && (f = m.hidden) : m = ve.access(e, "fxshow", {}), a && (m.hidden=!f), f ? J(e).show() : d.done(function() {
                J(e).hide()
            }), d.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p)
                    J.style(e, t, p[t])
            });
            for (i in p)
                s = F(f ? m[i] : 0, i, d), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function P(e, t) {
        var n, i, o, a, s;
        for (n in e)
            if (i = J.camelCase(n), o = t[i], a = e[n], J.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), s = J.cssHooks[i], s && "expand"in s) {
                a = s.expand(a), delete e[i];
                for (n in a)
                    n in e || (e[n] = a[n], t[n] = o)
            } else
                t[i] = o
    }
    function I(e, t, n) {
        var i, o, a = 0, s = tt.length, r = J.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = Ze || A(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, s = 0, l = c.tweens.length; l > s; s++)
                c.tweens[s].run(a);
            return r.notifyWith(e, [c, a, n]), 1 > a && l ? n : (r.resolveWith(e, [c]), !1)
        }, c = r.promise({
            elem: e,
            props: J.extend({}, t),
            opts: J.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || A(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function(t) {
                var n = 0, i = t ? c.tweens.length: 0;
                if (o)
                    return this;
                for (o=!0; i > n; n++)
                    c.tweens[n].run(1);
                return t ? r.resolveWith(e, [c, t]) : r.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (P(u, c.opts.specialEasing);
        s > a;
        a++)if (i = tt[a].call(c, e, u, c.opts))
            return i;
        return J.map(u, F, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, a = t.toLowerCase().match(he) || [];
            if (J.isFunction(n))
                for (; i = a[o++];)
                    "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function O(e, t, n, i) {
        function o(r) {
            var l;
            return a[r]=!0, J.each(e[r] || [], function(e, r) {
                var c = r(t, n, i);
                return "string" != typeof c || s || a[c] ? s?!(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var a = {}, s = e === bt;
        return o(t.dataTypes[0]) ||!a["*"] && o("*")
    }
    function L(e, t) {
        var n, i, o = J.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && J.extend(!0, e, i), e
    }
    function M(e, t, n) {
        for (var i, o, a, s, r = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in r)
                if (r[o] && r[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0]in n)
            a = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }
    function N(e, t, n, i) {
        var o, a, s, r, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (a = u.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                if ("*" === a)
                    a = l;
                else if ("*" !== l && l !== a) {
                    if (s = c[l + " " + a] || c["* " + a], !s)
                        for (o in c)
                            if (r = o.split(" "), r[1] === a && (s = c[l + " " + r[0]] || c["* " + r[0]])) {
                                s===!0 ? s = c[o] : c[o]!==!0 && (a = r[0], u.unshift(r[1]));
                                break
                            }
                            if (s!==!0)
                                if (s && e["throws"])
                                    t = s(t);
                                else
                                    try {
                                        t = s(t)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: s ? d: "No conversion from " + l + " to " + a
                                        }
                                    }
                                }
        return {
            state: "success",
            data: t
        }
    }
    function z(e, t, n, i) {
        var o;
        if (J.isArray(t))
            J.each(t, function(t, o) {
                n || $t.test(e) ? i(e, o) : z(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            });
        else if (n || "object" !== J.type(t))
            i(e, t);
        else
            for (o in t)
                z(e + "[" + o + "]", t[o], n, i)
            }
    function R(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var H = [], B = H.slice, W = H.concat, U = H.push, V = H.indexOf, Y = {}, X = Y.toString, G = Y.hasOwnProperty, Z = {}, K = e.document, Q = "2.1.3", J = function(e, t) {
        return new J.fn.init(e, t)
    }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, ie = function(e, t) {
        return t.toUpperCase()
    };
    J.fn = J.prototype = {
        jquery: Q,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function(e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return J.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length, n =+ e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: H.sort,
        splice: H.splice
    }, J.extend = J.fn.extend = function() {
        var e, t, n, i, o, a, s = arguments[0] || {}, r = 1, l = arguments.length, c=!1;
        for ("boolean" == typeof s && (c = s, s = arguments[r] || {}, r++), "object" == typeof s || J.isFunction(s) || (s = {}), r === l && (s = this, r--); l > r; r++)
            if (null != (e = arguments[r]))
                for (t in e)
                    n = s[t], i = e[t], s !== i && (c && i && (J.isPlainObject(i) || (o = J.isArray(i))) ? (o ? (o=!1, a = n && J.isArray(n) ? n : []) : a = n && J.isPlainObject(n) ? n : {}, s[t] = J.extend(c, a, i)) : void 0 !== i && (s[t] = i));
        return s
    }, J.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== J.type(e) || e.nodeType || J.isWindow(e)?!1 : e.constructor&&!G.call(e.constructor.prototype, "isPrototypeOf")?!1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[X.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, a = 0, s = e.length, r = n(e);
            if (i) {
                if (r)
                    for (; s > a && (o = t.apply(e[a], i), o!==!1); a++);
                else
                    for (a in e)
                        if (o = t.apply(e[a], i), o===!1)
                            break
            } else if (r)
                for (; s > a && (o = t.call(e[a], a, e[a]), o!==!1); a++);
            else
                for (a in e)
                    if (o = t.call(e[a], a, e[a]), o===!1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : U.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t?-1 : V.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n =+ t.length, i = 0, o = e.length; n > i; i++)
                e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], a = 0, s = e.length, r=!n; s > a; a++)
                i=!t(e[a], a), i !== r && o.push(e[a]);
            return o
        },
        map: function(e, t, i) {
            var o, a = 0, s = e.length, r = n(e), l = [];
            if (r)
                for (; s > a; a++)
                    o = t(e[a], a, i), null != o && l.push(o);
            else
                for (a in e)
                    o = t(e[a], a, i), null != o && l.push(o);
            return W.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = B.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(B.call(arguments)))
            }, o.guid = e.guid = e.guid || J.guid++, o) : void 0
        },
        now: Date.now,
        support: Z
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Y["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function(e) {
        function t(e, t, n, i) {
            var o, a, s, r, l, c, d, h, f, m;
            if ((t ? t.ownerDocument || t : z) !== j && F(t), t = t || j, n = n || [], r = t.nodeType, "string" != typeof e ||!e || 1 !== r && 9 !== r && 11 !== r)
                return n;
            if (!i && I) {
                if (11 !== r && (o = ye.exec(e)))
                    if (s = o[1]) {
                        if (9 === r) {
                            if (a = t.getElementById(s), !a ||!a.parentNode)
                                return n;
                                if (a.id === s)
                                    return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && M(t, a) && a.id === s)
                            return n.push(a), n
                    } else {
                        if (o[2])
                            return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = o[3]) && x.getElementsByClassName)
                                return Q.apply(n, t.getElementsByClassName(s)), n
                    }
                if (x.qsa && (!q ||!q.test(e))) {
                    if (h = d = N, f = t, m = 1 !== r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
                        for (c = T(e), (d = t.getAttribute("id")) ? h = d.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;)
                            c[l] = h + p(c[l]);
                        f = be.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m)
                        try {
                            return Q.apply(n, f.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(le, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[N]=!0, e
        }
        function o(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--;)
                C.attrHandle[n[i]] = t
        }
        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return - 1;
            return e ? 1 : - 1
        }
        function r(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t =+ t, i(function(n, i) {
                    for (var o, a = e([], n.length, t), s = a.length; s--;)
                        n[o = a[s]] && (n[o]=!(i[o] = n[o]))
                })
            })
        }
        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function h(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, a = H++;
            return t.first ? function(t, n, a) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o)
                        return e(t, n, a)
            } : function(t, n, s) {
                var r, l, c = [R, a];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[N] || (t[N] = {}), (r = l[i]) && r[0] === R && r[1] === a)
                                return c[2] = r[2];
                                if (l[i] = c, c[2] = e(t, n, s))
                                    return !0
                        }
            }
        }
        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            } : e[0]
        }
        function m(e, n, i) {
            for (var o = 0, a = n.length; a > o; o++)
                t(e, n[o], i);
            return i
        }
        function g(e, t, n, i, o) {
            for (var a, s = [], r = 0, l = e.length, c = null != t; l > r; r++)(a = e[r])
                && (!n || n(a, i, o)) && (s.push(a), c && t.push(r));
            return s
        }
        function v(e, t, n, o, a, s) {
            return o&&!o[N] && (o = v(o)), a&&!a[N] && (a = v(a, s)), i(function(i, s, r, l) {
                var c, u, d, p = [], h = [], f = s.length, v = i || m(t || "*", r.nodeType ? [r] : r, []), y=!e ||!i && t ? v : g(v, p, e, r, l), b = n ? a || (i ? e : f || o) ? [] : s : y;
                if (n && n(y, b, r, l), o)
                    for (c = g(b, h), o(c, [], r, l), u = c.length; u--;)(d = c[u])
                        && (b[h[u]]=!(y[h[u]] = d));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (c = [], u = b.length; u--;)(d = b[u])
                                && c.push(y[u] = d);
                            a(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u])
                            && (c = a ? ee(i, d) : p[u])>-1 && (i[c]=!(s[c] = d))
                        }
                } else
                    b = g(b === s ? b.splice(f, b.length) : b), a ? a(null, s, b, l) : Q.apply(s, b)
            })
        }
        function y(e) {
            for (var t, n, i, o = e.length, a = C.relative[e[0].type], s = a || C.relative[" "], r = a ? 1 : 0, l = h(function(e) {
                return e === t
            }, s, !0), c = h(function(e) {
                return ee(t, e)>-1
            }, s, !0), u = [function(e, n, i) {
                var o=!a && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o
            }
            ]; o > r; r++)
                if (n = C.relative[e[r].type])
                    u = [h(f(u), n)];
                else {
                    if (n = C.filter[e[r].type].apply(null, e[r].matches), n[N]) {
                        for (i=++r; o > i&&!C.relative[e[i].type]; i++);
                        return v(r > 1 && f(u), r > 1 && p(e.slice(0, r - 1).concat({
                            value: " " === e[r - 2].type ? "*": ""
                        })).replace(le, "$1"), n, i > r && y(e.slice(r, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                    }
                    u.push(n)
                }
            return f(u)
        }
        function b(e, n) {
            var o = n.length > 0, a = e.length > 0, s = function(i, s, r, l, c) {
                var u, d, p, h = 0, f = "0", m = i && [], v = [], y = S, b = i || a && C.find.TAG("*", c), w = R += null == y ? 1: Math.random() || .1, x = b.length;
                for (c && (S = s !== j && s); f !== x && null != (u = b[f]); f++) {
                    if (a && u) {
                        for (d = 0; p = e[d++];)
                            if (p(u, s, r)) {
                                l.push(u);
                                break
                            }
                        c && (R = w)
                    }
                    o && ((u=!p && u) && h--, i && m.push(u))
                }
                if (h += f, o && f !== h) {
                    for (d = 0; p = n[d++];)
                        p(m, v, s, r);
                    if (i) {
                        if (h > 0)
                            for (; f--;)
                                m[f] || v[f] || (v[f] = Z.call(l));
                        v = g(v)
                    }
                    Q.apply(l, v), c&&!i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                }
                return c && (R = w, S = y), m
            };
            return o ? i(s) : s
        }
        var w, x, C, k, $, T, _, E, S, A, D, F, j, P, I, q, O, L, M, N = "sizzle" + 1 * new Date, z = e.document, R = 0, H = 0, B = n(), W = n(), U = n(), V = function(e, t) {
            return e === t && (D=!0), 0
        }, Y = 1<<31, X = {}.hasOwnProperty, G = [], Z = G.pop, K = G.push, Q = G.push, J = G.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; i > n; n++)
                if (e[n] === t)
                    return n;
            return - 1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), ae = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", re = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(se), he = new RegExp("^" + oe + "$"), fe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ce = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i>>10 | 55296, 1023 & i | 56320)
        }, ke = function() {
            F()
        };
        try {
            Q.apply(G = J.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
        } catch ($e) {
            Q = {
                apply: G.length ? function(e, t) {
                    K.apply(e, J.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, $ = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, F = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e: z;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, P = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), I=!$(i), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = o(function(e) {
                return P.appendChild(e).id = N, !i.getElementsByName ||!i.getElementsByName(N).length
            }), x.getById ? (C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(xe, Ce);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(xe, Ce);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [], o = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[o++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, C.find.CLASS = x.getElementsByClassName && function(e, t) {
                return I ? t.getElementsByClassName(e) : void 0
            }, O = [], q = [], (x.qsa = ve.test(i.querySelectorAll)) && (o(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + N + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || q.push(".#.+[+~]")
            }), o(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (x.matchesSelector = ve.test(L = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), O.push("!=", se)
            }), q = q.length && new RegExp(q.join("|")), O = O.length && new RegExp(O.join("|")), t = ve.test(P.compareDocumentPosition), M = t || ve.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e, i = t && t.parentNode;
                return e === i ||!(!i || 1 !== i.nodeType ||!(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t)
                    return D=!0, 0;
                var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n ||!x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === z && M(z, e)?-1 : t === i || t.ownerDocument === z && M(z, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n?-1 : 1)
            } : function(e, t) {
                if (e === t)
                    return D=!0, 0;
                var n, o = 0, a = e.parentNode, r = t.parentNode, l = [e], c = [t];
                if (!a ||!r)
                    return e === i?-1 : t === i ? 1 : a?-1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (a === r)
                    return s(e, t);
                for (n = e; n = n.parentNode;)
                    l.unshift(n);
                for (n = t; n = n.parentNode;)
                    c.unshift(n);
                for (; l[o] === c[o];)
                    o++;
                return o ? s(l[o], c[o]) : l[o] === z?-1 : c[o] === z ? 1 : 0
            }, i) : j
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && F(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector ||!I || O && O.test(n) || q && q.test(n)))
                try {
                    var i = L.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
            } catch (o) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && F(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && F(e);
            var n = C.attrHandle[t.toLowerCase()], i = n && X.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I): void 0;
            return void 0 !== i ? i : x.attributes ||!I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (D=!x.detectDuplicates, A=!x.sortStable && e.slice(0), e.sort(V), D) {
                for (; t = e[o++];)
                    t === e[o] && (i = n.push(o));
                for (; i--;)
                    e.splice(n[i], 1)
            }
            return A = null, e
        }, k = t.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += k(e)
                    } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++];)
                    n += k(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] =+ (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =+ (e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n=!e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, Ce).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var a = t.attr(o, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i)>-1 : "$=" === n ? i && a.slice( - i.length) === i : "~=" === n ? (" " + a.replace(re, " ") + " ").indexOf(i)>-1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var a = "nth" !== e.slice(0, 3), s = "last" !== e.slice( - 4), r = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, h, f, m = a !== s ? "nextSibling": "previousSibling", g = t.parentNode, v = r && t.nodeName.toLowerCase(), y=!l&&!r;
                        if (g) {
                            if (a) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    f = m = "only" === e&&!f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild: g.lastChild], s && y) {
                                for (u = g[N] || (g[N] = {}), c = u[e] || [], h = c[0] === R && c[1], p = c[0] === R && c[2], d = h && g.childNodes[h]; d=++h && d && d[m] || (p = h = 0)
                                    || f.pop();
                                )if (1 === d.nodeType&&++p && d === t) {
                                    u[e] = [R, h, p];
                                    break
                                }
                            } else if (y && (c = (t[N] || (t[N] = {}))[e]) && c[0] === R)
                                p = c[1];
                            else
                                for (; (d=++h && d && d[m] || (p = h = 0) || f.pop())
                                    && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType)||!++p || (y && ((d[N] || (d[N] = {}))[e] = [R, p]), d !== t));
                            );
                            return p -= o, p === i || p%i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, a = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[N] ? a(n) : a.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = a(e, n), s = o.length; s--;)
                            i = ee(e, o[s]), e[i]=!(t[i] = o[s])
                    }) : function(e) {
                        return a(e, 0, o)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], o = _(e.replace(le, "$1"));
                    return o[N] ? i(function(e, t, n, i) {
                        for (var a, s = o(e, null, i, []), r = e.length; r--;)(a = s[r])
                            && (e[r]=!(t[r] = a))
                    }) : function(e, i, a) {
                        return t[0] = e, o(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xe, Ce), function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e)>-1
                    }
                }),
                lang: i(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ce).toLowerCase(), function(t) {
                        var n;
                        do
                            if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus())&&!!(e.type || e.href||~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled===!1
                },
                disabled: function(e) {
                    return e.disabled===!0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t&&!!e.checked || "option" === t&&!!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected===!0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;)
                        e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;)
                        e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[w] = r(w);
        for (w in{
            submit: !0,
            reset: !0
        })
            C.pseudos[w] = l(w);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, T = t.tokenize = function(e, n) {
            var i, o, a, s, r, l, c, u = W[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (r = e, l = [], c = C.preFilter; r;) {
                (!i || (o = ce.exec(r))) && (o && (r = r.slice(o[0].length) || r), l.push(a = [])), i=!1, (o = ue.exec(r)) && (i = o.shift(), a.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), r = r.slice(i.length));
                for (s in C.filter)
                    !(o = fe[s].exec(r)) || c[s]&&!(o = c[s](o)) || (i = o.shift(), a.push({
                        value: i,
                        type: s,
                        matches: o
                    }), r = r.slice(i.length));
                if (!i)
                    break
            }
            return n ? r.length : r ? t.error(e) : W(e, l).slice(0)
        }, _ = t.compile = function(e, t) {
            var n, i = [], o = [], a = U[e + " "];
            if (!a) {
                for (t || (t = T(e)), n = t.length; n--;)
                    a = y(t[n]), a[N] ? i.push(a) : o.push(a);
                a = U(e, b(o, i)), a.selector = e
            }
            return a
        }, E = t.select = function(e, t, n, i) {
            var o, a, s, r, l, c = "function" == typeof e && e, d=!i && T(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && x.getById && 9 === t.nodeType && I && C.relative[a[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(xe, Ce), t) || [])[0], !t)
                        return n;
                    c && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : a.length; o--&&(s = a[o], !C.relative[r = s.type]);)
                    if ((l = C.find[r]) && (i = l(s.matches[0].replace(xe, Ce), be.test(a[0].type) && u(t.parentNode) || t))) {
                        if (a.splice(o, 1), e = i.length && p(a), !e)
                            return Q.apply(n, i), n;
                            break
                    }
            }
            return (c || _(e, d))(i, t, !I, n, be.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates=!!D, F(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t]===!0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    J.find = oe, J.expr = oe.selectors, J.expr[":"] = J.expr.pseudos, J.unique = oe.uniqueSort, J.text = oe.getText, J.isXMLDoc = oe.isXML, J.contains = oe.contains;
    var ae = J.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, re = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, J.fn.extend({
        find: function(e) {
            var t, n = this.length, i = [], o = this;
            if ("string" != typeof e)
                return this.pushStack(J(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (J.contains(o[t], this))
                            return !0
                        }));
            for (t = 0; n > t; t++)
                J.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ae.test(e) ? J(e) : e || [], !1).length
        }
    });
    var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = J.fn.init = function(e, t) {
        var n, i;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n ||!n[1] && t)
                return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), se.test(n[1]) && J.isPlainObject(t))
                    for (n in t)
                        J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
    };
    ue.prototype = J.fn, le = J(K);
    var de = /^(?:parents|prev(?:Until|All))/, pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    J.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && J(e).is(n))
                        break;
                        i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), J.fn.extend({
        has: function(e) {
            var t = J(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (J.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, a = [], s = ae.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n)>-1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? J.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? V.call(J(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return J.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || J.merge([], e.childNodes)
        }
    }, function(e, t) {
        J.fn[e] = function(n, i) {
            var o = J.map(this, t, n);
            return "Until" !== e.slice( - 5) && (i = n), i && "string" == typeof i && (o = J.filter(i, o)), this.length > 1 && (pe[e] || J.unique(o), de.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var he = /\S+/g, fe = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? fe[e] || a(e) : J.extend({}, e);
        var t, n, i, o, s, r, l = [], c=!e.once && [], u = function(a) {
            for (t = e.memory && a, n=!0, r = o || 0, o = 0, s = l.length, i=!0; l && s > r; r++)
                if (l[r].apply(a[0], a[1])===!1 && e.stopOnFalse) {
                    t=!1;
                    break
                }
            i=!1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
        }, d = {
            add: function() {
                if (l) {
                    var n = l.length;
                    !function a(t) {
                        J.each(t, function(t, n) {
                            var i = J.type(n);
                            "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && a(n)
                        })
                    }(arguments), i ? s = l.length : t && (o = n, u(t))
                }
                return this
            },
            remove: function() {
                return l && J.each(arguments, function(e, t) {
                    for (var n; (n = J.inArray(t, l, n))>-1;)
                        l.splice(n, 1), i && (s >= n && s--, r >= n && r--)
                }), this
            },
            has: function(e) {
                return e ? J.inArray(e, l)>-1 : !(!l ||!l.length)
            },
            empty: function() {
                return l = [], s = 0, this
            },
            disable: function() {
                return l = c = t = void 0, this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = void 0, t || d.disable(), this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return !l || n&&!c || (t = t || [], t = [e, t.slice ? t.slice(): t], i ? c.push(t) : u(t)), this
            },
            fire: function() {
                return d.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
        return d
    }, J.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]], n = "pending", i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this
                },
                then: function() {
                    var e = arguments;
                    return J.Deferred(function(n) {
                        J.each(t, function(t, a) {
                            var s = J.isFunction(e[t]) && e[t];
                            o[a[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? J.extend(e, i) : i
                }
            }, o = {};
            return i.pipe = i.then, J.each(t, function(e, a) {
                var s = a[2], r = a[3];
                i[a[1]] = s.add, r && s.add(function() {
                    n = r
                }, t[1^e][2].disable, t[2][2].lock), o[a[0]] = function() {
                    return o[a[0] + "With"](this === o ? i : this, arguments), this
                }, o[a[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0, a = B.call(arguments), s = a.length, r = 1 !== s || e && J.isFunction(e.promise) ? s: 0, l = 1 === r ? e: J.Deferred(), c = function(e, n, i) {
                return function(o) {
                    n[e] = this, i[e] = arguments.length > 1 ? B.call(arguments) : o, i === t ? l.notifyWith(n, i) : --r || l.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)
                    a[o] && J.isFunction(a[o].promise) ? a[o].promise().done(c(o, i, a)).fail(l.reject).progress(c(o, n, t)) : --r;
            return r || l.resolveWith(i, a), l.promise()
        }
    });
    var me;
    J.fn.ready = function(e) {
        return J.ready.promise().done(e), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function(e) {
            (e===!0?--J.readyWait : J.isReady) || (J.isReady=!0, e!==!0&&--J.readyWait > 0 || (me.resolveWith(K, [J]), J.fn.triggerHandler && (J(K).triggerHandler("ready"), J(K).off("ready"))))
        }
    }), J.ready.promise = function(t) {
        return me || (me = J.Deferred(), "complete" === K.readyState ? setTimeout(J.ready) : (K.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), me.promise(t)
    }, J.ready.promise();
    var ge = J.access = function(e, t, n, i, o, a, s) {
        var r = 0, l = e.length, c = null == n;
        if ("object" === J.type(n)) {
            o=!0;
            for (r in n)
                J.access(e, t, r, n[r], !0, a, s)
        } else if (void 0 !== i && (o=!0, J.isFunction(i) || (s=!0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
            return c.call(J(e), n)
        })), t))for (; l > r; r++)
            t(e[r], n, s ? i : i.call(e[r], r, t(e[r], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
    };
    J.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType||!+e.nodeType
    }, r.uid = 1, r.accepts = J.acceptData, r.prototype = {
        key: function(e) {
            if (!r.accepts(e))
                return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = r.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, J.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, o = this.key(e), a = this.cache[o];
            if ("string" == typeof t)
                a[t] = n;
            else if (J.isEmptyObject(a))
                J.extend(this.cache[o], t);
            else
                for (i in t)
                    a[i] = t[i];
            return a
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, a = this.key(e), s = this.cache[a];
            if (void 0 === t)
                this.cache[a] = {};
            else {
                J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (o = J.camelCase(t), t in s ? i = [t, o] : (i = o, i = i in s ? [i] : i.match(he) || [])), n = i.length;
                for (; n--;)
                    delete s[i[n]]
            }
        },
        hasData: function(e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new r, ye = new r, be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, we = /([A-Z])/g;
    J.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), J.fn.extend({
        data: function(e, t) {
            var n, i, o, a = this[0], s = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (o = ye.get(a), 1 === a.nodeType&&!ve.get(a, "hasDataAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(a, i, o[i])));
                    ve.set(a, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : ge(this, function(t) {
                var n, i = J.camelCase(e);
                if (a && void 0 === t) {
                    if (n = ye.get(a, e), void 0 !== n)
                        return n;
                    if (n = ye.get(a, i), void 0 !== n)
                        return n;
                    if (n = l(a, i, void 0), void 0 !== n)
                        return n
                } else
                    this.each(function() {
                        var n = ye.get(this, i);
                        ye.set(this, i, t), - 1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), J.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || J.isArray(n) ? i = ve.access(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t), i = n.length, o = n.shift(), a = J._queueHooks(e, t), s = function() {
                J.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, s, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), J.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = J.Deferred(), a = this, s = this.length, r = function() {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)
                n = ve.get(a[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(r));
            return r(), o.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ce = ["Top", "Right", "Bottom", "Left"], ke = function(e, t) {
        return e = t || e, "none" === J.css(e, "display") ||!J.contains(e.ownerDocument, e)
    }, $e = /^(?:checkbox|radio)$/i;
    !function() {
        var e = K.createDocumentFragment(), t = e.appendChild(K.createElement("div")), n = K.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Te = "undefined";
    Z.focusinBubbles = "onfocusin"in e;
    var _e = /^key/, Ee = /^(?:mouse|pointer|contextmenu)|click/, Se = /^(?:focusinfocus|focusoutblur)$/, Ae = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var a, s, r, l, c, u, d, p, h, f, m, g = ve.get(e);
            if (g)
                for (n.handler && (a = n, n = a.handler, o = a.selector), n.guid || (n.guid = J.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                    return typeof J !== Te && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(he) || [""], c = t.length; c--;)
                    r = Ae.exec(t[c]) || [], h = m = r[1], f = (r[2] || "").split(".").sort(), h && (d = J.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = J.event.special[h] || {}, u = J.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && J.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, a), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, f, s)!==!1 || e.addEventListener && e.addEventListener(h, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[h]=!0)
        },
        remove: function(e, t, n, i, o) {
            var a, s, r, l, c, u, d, p, h, f, m, g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(he) || [""], c = t.length; c--;)
                    if (r = Ae.exec(t[c]) || [], h = m = r[1], f = (r[2] || "").split(".").sort(), h) {
                        for (d = J.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;)
                            u = p[a], !o && m !== u.origType || n && n.guid !== u.guid || r&&!r.test(u.namespace) || i && i !== u.selector && ("**" !== i ||!u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            s&&!p.length && (d.teardown && d.teardown.call(e, f, g.handle)!==!1 || J.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l)
                            J.event.remove(e, h + t[c], n, i, !0);
                J.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var a, s, r, l, c, u, d, p = [i || K], h = G.call(t, "type") ? t.type: t, f = G.call(t, "namespace") ? t.namespace.split("."): [];
            if (s = r = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType&&!Se.test(h + J.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[J.expando] ? t : new J.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), d = J.event.special[h] || {}, o ||!d.trigger || d.trigger.apply(i, n)!==!1)
                ) {
                if (!o&&!d.noBubble&&!J.isWindow(i)) {
                    for (l = d.delegateType || h, Se.test(l + h) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s), r = s;
                    r === (i.ownerDocument || K) && p.push(r.defaultView || r.parentWindow || e)
                }
                for (a = 0; (s = p[a++])&&!t.isPropagationStopped();)
                    t.type = a > 1 ? l : d.bindType || h, u = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && J.acceptData(s) && (t.result = u.apply(s, n), t.result===!1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n)!==!1 ||!J.acceptData(i) || c && J.isFunction(i[h])&&!J.isWindow(i) && (r = i[c], r && (i[c] = null), J.event.triggered = h, i[h](), J.event.triggered = void 0, r && (i[c] = r)), t.result
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, i, o, a, s = [], r = B.call(arguments), l = (ve.get(this, "events") || {})[e.type] || [], c = J.event.special[e.type] || {};
            if (r[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e)!==!1) {
                for (s = J.event.handlers.call(this, e, l), t = 0; (o = s[t++])&&!e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0; (a = o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)
                        ) && (e.handleObj = a, e.data = a.data, i = ((J.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, r), void 0 !== i && (e.result = i)===!1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, a, s = [], r = t.delegateCount, l = e.target;
            if (r && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled!==!0 || "click" !== e.type) {
                        for (i = [], n = 0; r > n; n++)
                            a = t[n], o = a.selector + " ", void 0 === i[o] && (i[o] = a.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [l]).length), i[o] && i.push(a);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                    }
            return r < t.length && s.push({
                elem: this,
                handlers: t.slice(r)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, a = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[J.expando])
                return e;
            var t, n, i, o = e.type, a = e, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ee.test(o) ? this.mouseHooks : _e.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(a), t = i.length; t--;)
                n = i[t], e[n] = a[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return J.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(o, null, t) : J.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue===!1 ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando]=!0)) : new J.Event(e, t)
    }, J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, o = e.relatedTarget, a = e.handleObj;
                return (!o || o !== i&&!J.contains(i, o)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Z.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this, o = ve.access(i, t);
                o || i.addEventListener(e, n, !0), ve.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this, o = ve.access(i, t) - 1;
                o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), J.fn.extend({
        on: function(e, t, n, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e)
                    this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i===!1)
                i = u;
            else if (!i)
                return this;
            return 1 === o && (a = i, i = function(e) {
                return J().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = J.guid++)), this.each(function() {
                J.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return (t===!1 || "function" == typeof t) && (n = t, t = void 0), n===!1 && (n = u), this.each(function() {
                J.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? J.event.trigger(e, t, n, !0) : void 0
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fe = /<([\w:]+)/, je = /<|&#?\w+;/, Pe = /<(?:script|style|link)/i, Ie = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^$|\/(?:java|ecma)script/i, Oe = /^true\/(.*)/, Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, J.extend({
        clone: function(e, t, n) {
            var i, o, a, s, r = e.cloneNode(!0), l = J.contains(e.ownerDocument, e);
            if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                for (s = v(r), a = v(e), i = 0, o = a.length; o > i; i++)
                    y(a[i], s[i]);
            if (t)
                if (n)
                    for (a = a || v(e), s = s || v(r), i = 0, o = a.length; o > i; i++)
                        g(a[i], s[i]);
                else
                    g(e, r);
            return s = v(r, "script"), s.length > 0 && m(s, !l && v(e, "script")), r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, a, s, r, l, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; h > p; p++)
                if (o = e[p], o || 0 === o)
                    if ("object" === J.type(o))
                        J.merge(d, o.nodeType ? [o] : o);
                    else if (je.test(o)) {
                        for (a = a || u.appendChild(t.createElement("div")), s = (Fe.exec(o) || ["", ""])[1].toLowerCase(), r = Me[s] || Me._default, a.innerHTML = r[1] + o.replace(De, "<$1></$2>") + r[2], c = r[0]; c--;)
                            a = a.lastChild;
                            J.merge(d, a.childNodes), a = u.firstChild, a.textContent = ""
                    } else
                        d.push(t.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if ((!i||-1 === J.inArray(o, i)) && (l = J.contains(o.ownerDocument, o), a = v(u.appendChild(o), "script"), l && m(a), n))
                    for (c = 0; o = a[c++];)
                        qe.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function(e) {
            for (var t, n, i, o, a = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (J.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (t.events)
                        for (i in t.events)
                            a[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), J.fn.extend({
        text: function(e) {
            return ge(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? J.filter(e, this) : this, o = 0; null != (n = i[o]); o++)
                t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e?!1 : e, t = null == t ? e : t, this.map(function() {
                return J.clone(this, e, t)
            })
        },
        html: function(e) {
            return ge(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e&&!Pe.test(e)&&!Me[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(De, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = W.apply([], e);
            var n, i, o, a, s, r, l = 0, c = this.length, u = this, d = c - 1, p = e[0], m = J.isFunction(p);
            if (m || c > 1 && "string" == typeof p&&!Z.checkClone && Ie.test(p))
                return this.each(function(n) {
                    var i = u.eq(n);
                    m && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
            if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = J.map(v(n, "script"), h), a = o.length; c > l; l++)
                    s = n, l !== d && (s = J.clone(s, !0, !0), a && J.merge(o, v(s, "script"))), t.call(this[l], s, l);
                if (a)
                    for (r = o[o.length - 1].ownerDocument, J.map(o, f), l = 0; a > l; l++)
                        s = o[l], qe.test(s.type || "")&&!ve.access(s, "globalEval") && J.contains(r, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Le, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        J.fn[e] = function(e) {
            for (var n, i = [], o = J(e), a = o.length - 1, s = 0; a >= s; s++)
                n = s === a ? this : this.clone(!0), J(o[s])[t](n), U.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ne, ze = {}, Re = /^margin/, He = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"), Be = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(a);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(a)
        }
        var n, i, o = K.documentElement, a = K.createElement("div"), s = K.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", a.appendChild(s), e.getComputedStyle && J.extend(Z, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(K.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(a), t=!parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(a), s.removeChild(n), t
            }
        }))
    }(), J.swap = function(e, t, n, i) {
        var o, a, s = {};
        for (a in t)
            s[a] = e.style[a], e.style[a] = t[a];
        o = n.apply(e, i || []);
        for (a in t)
            e.style[a] = s[a];
        return o
    };
    var We = /^(none|table(?!-c[ea]).+)/, Ue = new RegExp("^(" + xe + ")(.*)$", "i"), Ve = new RegExp("^([+-])=(" + xe + ")", "i"), Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Xe = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ge = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, r = J.camelCase(t), l = e.style;
                return t = J.cssProps[r] || (J.cssProps[r] = k(l, r)), s = J.cssHooks[t] || J.cssHooks[r], void 0 === n ? s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (a = typeof n, "string" === a && (o = Ve.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(J.css(e, t)), a = "number"), void(null != n && n === n && ("number" !== a || J.cssNumber[r] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, a, s, r = J.camelCase(t);
            return t = J.cssProps[r] || (J.cssProps[r] = k(e.style, r)), s = J.cssHooks[t] || J.cssHooks[r], s && "get"in s && (o = s.get(e, !0, n)), void 0 === o && (o = x(e, t, i)), "normal" === o && t in Xe && (o = Xe[t]), "" === n || n ? (a = parseFloat(o), n===!0 || J.isNumeric(a) ? a || 0 : o) : o
        }
    }), J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? We.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ye, function() {
                    return _(e, t, i)
                }) : _(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && Be(e);
                return $(e, n, i ? T(e, t, i, "border-box" === J.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), J.cssHooks.marginRight = C(Z.reliableMarginRight, function(e, t) {
        return t ? J.swap(e, {
            display: "inline-block"
        }, x, [e, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    o[e + Ce[i] + t] = a[i] || a[i - 2] || a[0];
                return o
            }
        }, Re.test(e) || (J.cssHooks[e + t].set = $)
    }), J.fn.extend({
        css: function(e, t) {
            return ge(this, function(e, t, n) {
                var i, o, a = {}, s = 0;
                if (J.isArray(t)) {
                    for (i = Be(e), o = t.length; o > s; s++)
                        a[t[s]] = J.css(e, t[s], !1, i);
                    return a
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ke(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = S, S.prototype = {
        constructor: S,
        init: function(e, t, n, i, o, a) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = S.propHooks[this.prop];
            return e && e.get ? e.get(this) : S.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = S.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
        }
    }, S.prototype.init.prototype = S.prototype, S.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.fx = S.prototype.init, J.fx.step = {};
    var Ze, Ke, Qe = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [j], nt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t), i = n.cur(), o = Je.exec(t), a = o && o[3] || (J.cssNumber[e] ? "" : "px"), s = (J.cssNumber[e] || "px" !== a&&+i) && Je.exec(J.css(n.elem, e)), r = 1, l = 20;
            if (s && s[3] !== a) {
                a = a || s[3], o = o || [], s =+ i || 1;
                do
                    r = r || ".5", s/=r, J.style(n.elem, e, s + a);
                while (r !== (r = n.cur() / i) && 1 !== r&&--l)
                }
            return o && (s = n.start =+ s||+i || 0, n.unit = a, n.end = o[1] ? s + (o[1] + 1) * o[2] : + o[2]), n
        }
        ]
    };
    J.Animation = J.extend(I, {
        tweener: function(e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]): e = e.split(" ");
            for (var n,
            i = 0,
            o = e.length;
            o > i;
            i++)n = e[i],
            nt[n] = nt[n] || [],
            nt[n].unshift(t)
        }, prefilter : function(e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), J.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e): {
            complete: n ||!n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t&&!J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue===!0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
        }, i
    }, J.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ke).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = J.isEmptyObject(e), a = J.speed(t, n, i), s = function() {
                var t = I(this, J.extend({}, e), a);
                (o || ve.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, o || a.queue===!1 ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e!==!1 && this.queue(e || "fx", []), this.each(function() {
                var t=!0, o = null != e && e + "queueHooks", a = J.timers, s = ve.get(this);
                if (o)
                    s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && et.test(o) && i(s[o]);
                for (o = a.length; o--;)
                    a[o].elem !== this || null != e && a[o].queue !== e || (a[o].anim.stop(n), t=!1, a.splice(o, 1));
                (t ||!n) && J.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e!==!1 && (e = e || "fx"), this.each(function() {
                var t, n = ve.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], a = J.timers, s = i ? i.length: 0;
                for (n.finish=!0, J.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;)
                    a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                    a.splice(t, 1));
                for (t = 0; s > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), J.each(["toggle", "show", "hide"], function(e, t) {
        var n = J.fn[t];
        J.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, i, o)
        }
    }), J.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        J.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), J.timers = [], J.fx.tick = function() {
        var e, t = 0, n = J.timers;
        for (Ze = J.now(); t < n.length; t++)
            e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || J.fx.stop(), Ze = void 0
    }, J.fx.timer = function(e) {
        J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
    }, J.fx.interval = 13, J.fx.start = function() {
        Ke || (Ke = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.stop = function() {
        clearInterval(Ke), Ke = null
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fn.delay = function(e, t) {
        return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }, function() {
        var e = K.createElement("input"), t = K.createElement("select"), n = t.appendChild(K.createElement("option"));
        e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = n.selected, t.disabled=!0, Z.optDisabled=!n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", Z.radioValue = "t" === e.value
    }();
    var it, ot, at = J.expr.attrHandle;
    J.fn.extend({
        attr: function(e, t) {
            return ge(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e)
            })
        }
    }), J.extend({
        attr: function(e, t, n) {
            var i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === Te ? J.prop(e, t, n) : (1 === a && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? ot : it)), void 0 === n ? i && "get"in i && null !== (o = i.get(e, t)) ? o : (o = J.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, o = 0, a = t && t.match(he);
            if (a && 1 === e.nodeType)
                for (; n = a[o++];)
                    i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i]=!1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Z.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ot = {
        set: function(e, t, n) {
            return t===!1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = at[t] || J.find.attr;
        at[t] = function(e, t, i) {
            var o, a;
            return i || (a = at[t], at[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, at[t] = a), o
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(e, t) {
            return ge(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[J.propFix[e] || e]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s ||!J.isXMLDoc(e), a && (t = J.propFix[t] || t, o = J.propHooks[t]), void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : - 1
                }
            }
        }
    }), Z.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(e) {
            var t, n, i, o, a, s, r = "string" == typeof e && e, l = 0, c = this.length;
            if (J.isFunction(e))
                return this.each(function(t) {
                    J(this).addClass(e.call(this, t, this.className))
                });
            if (r)
                for (t = (e || "").match(he) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : " ")) {
                        for (a = 0; o = t[a++];)
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = J.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, a, s, r = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
            if (J.isFunction(e))
                return this.each(function(t) {
                    J(this).removeClass(e.call(this, t, this.className))
                });
            if (r)
                for (t = (e || "").match(he) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : "")) {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") >= 0;)
                                i = i.replace(" " + o + " ", " ");
                                s = e ? J.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = J(this), a = e.match(he) || []; t = a[i++];)
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else (n === Te || "boolean" === n)
                    && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e===!1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(rt, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var lt = /\r/g;
    J.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = J.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, J(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, a = "select-one" === e.type || 0 > o, s = a ? null : [], r = a ? o + 1 : i.length, l = 0 > o ? r : a ? o : 0; r > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (Z.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), a)
                                return t;
                                s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, a = J.makeArray(t), s = o.length; s--;)
                        i = o[s], (i.selected = J.inArray(i.value, a) >= 0) && (n=!0);
                    return n || (e.selectedIndex =- 1), a
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        }, Z.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        J.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), J.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = J.now(), ut = /\?/;
    J.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, J.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
    };
    var dt = /#.*$/, pt = /([?&])_=[^&]*/, ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mt = /^(?:GET|HEAD)$/, gt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, bt = {}, wt = "*/".concat("*"), xt = e.location.href, Ct = vt.exec(xt.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt,
            type: "GET",
            isLocal: ft.test(Ct[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, J.ajaxSettings), t) : L(J.ajaxSettings, e)
        },
        ajaxPrefilter: q(yt),
        ajaxTransport: q(bt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var l, u, v, y, w, C = t;
                2 !== b && (b = 2, r && clearTimeout(r), i = void 0, a = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = M(d, x, n)), y = N(d, y, x, l), l ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (J.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (J.etag[o] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, l=!v)) : (v = C, (e ||!C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || C) + "", l ? f.resolveWith(p, [u, C, x]) : f.rejectWith(p, [x, C, v]), x.statusCode(g), g = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? u: v]), m.fireWith(p, [x, C]), c && (h.trigger("ajaxComplete", [x, d]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, a, s, r, l, c, u, d = J.ajaxSetup({}, t), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? J(p): J.event, f = J.Deferred(), m = J.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!s)
                            for (s = {}; t = ht.exec(a);)
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, v[e] = t), this
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e), this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return i && i.abort(t), n(0, t), this
                }
            };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || xt) + "").replace(dt, "").replace(gt, Ct[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(he) || [""], null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain=!(!l || l[1] === Ct[1] && l[2] === Ct[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), O(yt, d, t, x), 2 === b)
                return x;
            c = J.event && d.global, c && 0 === J.active++&&J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent=!mt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ut.test(o) ? "&" : "?") + d.data, delete d.data), d.cache===!1 && (d.url = pt.test(o) ? o.replace(pt, "$1_=" + ct++) : o + (ut.test(o) ? "&" : "?") + "_=" + ct++)), d.ifModified && (J.lastModified[o] && x.setRequestHeader("If-Modified-Since", J.lastModified[o]), J.etag[o] && x.setRequestHeader("If-None-Match", J.etag[o])), (d.data && d.hasContent && d.contentType!==!1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers)
                x.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d)===!1 || 2 === b))
                return x.abort();
            w = "abort";
            for (u in{
                success: 1,
                error: 1,
                complete: 1
            })
                x[u](d[u]);
            if (i = O(bt, d, t, x)) {
                x.readyState = 1, c && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (r = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, i.send(v, n)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    n( - 1, C)
                }
            } else
                n( - 1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return J.get(e, void 0, t, "script")
        }
    }), J.each(["get", "post"], function(e, t) {
        J[t] = function(e, n, i, o) {
            return J.isFunction(n) && (o = o || i, i = n, n = void 0), J.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), J._evalUrl = function(e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(e) {
            var t;
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;)
                    e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(J.isFunction(e) ? function(t) {
                J(this).wrapInner(e.call(this, t))
            } : function() {
                var t = J(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = J.isFunction(e);
            return this.each(function(n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
    };
    var kt = /%20/g, $t = /\[\]$/, Tt = /\r?\n/g, _t = /^(?:submit|button|image|reset|file)$/i, Et = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery&&!J.isPlainObject(e)
            )J.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e)
                z(n, e[n], t, o);
        return i.join("&").replace(kt, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name&&!J(this).is(":disabled") && Et.test(this.nodeName)&&!_t.test(e) && (this.checked ||!$e.test(e))
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var St = 0, At = {}, Dt = {
        0: 200,
        1223: 204
    }, Ft = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in At)
            At[e]()
    }), Z.cors=!!Ft && "withCredentials"in Ft, Z.ajax = Ft=!!Ft, J.ajaxTransport(function(e) {
        var t;
        return Z.cors || Ft&&!e.crossDomain ? {
            send: function(n, i) {
                var o, a = e.xhr(), s=++St;
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields)
                        a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n)
                    a.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete At[s], t = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? i(a.status, a.statusText) : i(Dt[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : void 0, a.getAllResponseHeaders()))
                    }
                }, a.onload = t(), a.onerror = t("error"), t = At[s] = t("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (r) {
                    if (t)
                        throw r
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache=!1), e.crossDomain && (e.type = "GET")
    }), J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var jt = [], Pt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jt.pop() || J.expando + "_" + ct++;
            return this[e]=!0, e
        }
    }), J.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, a, s, r = t.jsonp!==!1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data&&!(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
        return r || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Pt, "$1" + o) : t.jsonp!==!1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || J.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, t[o] && (t.jsonpCallback = n.jsonpCallback, jt.push(o)), s && J.isFunction(a) && a(s[0]), s = a = void 0
        }), "script") : void 0
    }), J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t=!1), t = t || K;
        var i = se.exec(e), o=!n && [];
        return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, o), o && o.length && J(o).remove(), J.merge([], i.childNodes))
    };
    var It = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && It)
            return It.apply(this, arguments);
        var i, o, a, s = this, r = e.indexOf(" ");
        return r >= 0 && (i = J.trim(e.slice(r)), e = e.slice(0, r)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && J.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, a || [e.responseText, t, e])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem
        }).length
    };
    var qt = e.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var i, o, a, s, r, l, c, u = J.css(e, "position"), d = J(e), p = {};
            "static" === u && (e.style.position = "relative"), r = d.offset(), a = J.css(e, "top"), l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto")>-1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(a) || 0, o = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, r)), null != t.top && (p.top = t.top - r.top + s), null != t.left && (p.left = t.left - r.left + o), "using"in t ? t.using.call(e, p) : d.css(p)
        }
    }, J.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                J.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0], o = {
                top: 0,
                left: 0
            }, a = i && i.ownerDocument;
            return a ? (t = a.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== Te && (o = i.getBoundingClientRect()), n = R(a), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - J.css(n, "marginTop", !0),
                    left: t.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || qt; e&&!J.nodeName(e, "html") && "static" === J.css(e, "position");)
                    e = e.offsetParent;
                return e || qt
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        J.fn[t] = function(o) {
            return ge(this, function(t, o, a) {
                var s = R(t);
                return void 0 === a ? s ? s[n] : t[o] : void(s ? s.scrollTo(i ? e.pageXOffset : a, i ? a : e.pageYOffset) : t[o] = a)
            }, t, o, arguments.length, null)
        }
    }), J.each(["top", "left"], function(e, t) {
        J.cssHooks[t] = C(Z.pixelPosition, function(e, n) {
            return n ? (n = x(e, t), He.test(n) ? J(e).position()[t] + "px" : n) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        J.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            J.fn[i] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i), s = n || (i===!0 || o===!0 ? "margin" : "border");
                return ge(this, function(t, n, i) {
                    var o;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? J.css(t, n, s) : J.style(t, n, i, s)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var Ot = e.jQuery, Lt = e.$;
    return J.noConflict = function(t) {
        return e.$ === J && (e.$ = Lt), t && e.jQuery === J && (e.jQuery = Ot), J
    }, typeof t === Te && (e.jQuery = e.$ = J), J
}), function(e) {
    "function" == typeof define && define.amd ? define("jquery.readyselector", ["jquery"], e) : e(jQuery)
}(function(e) {
    var t = e.fn.ready;
    e.fn.ready = function(n) {
        t(void 0 === this.context ? n : this.selector ? e.proxy(function() {
            e(this.selector, this.context).each(n)
        }, this) : e.proxy(function() {
            e(this).each(n)
        }, this))
    }
}), define("page/error", ["require", "jquery", "jquery.readyselector"], function(e) {
    var t = e("jquery");
    e("jquery.readyselector");
    t(".page.error").ready(function() {})
}), function(e) {
    "function" == typeof define && define.amd ? define("jquery.placeholder", ["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t) {
        var n = {}, i = /^jQuery\d+$/;
        return e.each(t.attributes, function(e, t) {
            t.specified&&!i.test(t.name) && (n[t.name] = t.value)
        }), n
    }
    function n(t, n) {
        var i = this, a = e(i);
        if (i.value == a.attr("placeholder") && a.hasClass(p.customClass))
            if (a.data("placeholder-password")) {
                if (a = a.hide().nextAll('input[type="password"]:first').show().attr("id", a.removeAttr("id").data("placeholder-id")), t===!0)
                    return a[0].value = n;
                    a.focus()
            } else
                i.value = "", a.removeClass(p.customClass), i == o() && i.select()
    }
    function i() {
        var i, o = this, a = e(o), s = this.id;
        if ("" === o.value) {
            if ("password" === o.type) {
                if (!a.data("placeholder-textinput")) {
                    try {
                        i = a.clone().attr({
                            type: "text"
                        })
                    } catch (r) {
                        i = e("<input>").attr(e.extend(t(this), {
                            type: "text"
                        }))
                    }
                    i.removeAttr("name").data({
                        "placeholder-password": a,
                        "placeholder-id": s
                    }).bind("focus.placeholder", n), a.data({
                        "placeholder-textinput": i,
                        "placeholder-id": s
                    }).before(i)
                }
                a = a.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s).show()
            }
            a.addClass(p.customClass), a[0].value = a.attr("placeholder")
        } else
            a.removeClass(p.customClass)
    }
    function o() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var a, s, r = "[object OperaMini]" == Object.prototype.toString.call(window.operamini), l = "placeholder"in document.createElement("input")&&!r, c = "placeholder"in document.createElement("textarea")&&!r, u = e.valHooks, d = e.propHooks;
    if (l && c)
        s = e.fn.placeholder = function() {
            return this
        }, s.input = s.textarea=!0;
    else {
        var p = {};
        s = e.fn.placeholder = function(t) {
            var o = {
                customClass: "placeholder"
            };
            p = e.extend({}, o, t);
            var a = this;
            return a.filter((l ? "textarea" : ":input") + "[placeholder]").not("." + p.customClass).bind({
                "focus.placeholder": n,
                "blur.placeholder": i
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
        }, s.input = l, s.textarea = c, a = {
            get: function(t) {
                var n = e(t), i = n.data("placeholder-password");
                return i ? i[0].value : n.data("placeholder-enabled") && n.hasClass("placeholder") ? "" : t.value
            },
            set: function(t, a) {
                var s = e(t), r = s.data("placeholder-password");
                return r ? r[0].value = a : s.data("placeholder-enabled") ? ("" === a ? (t.value = a, t != o() && i.call(t)) : s.hasClass(p.customClass) ? n.call(t, !0, a) || (t.value = a) : t.value = a, s) : t.value = a
            }
        }, l || (u.input = a, d.value = a), c || (u.textarea = a, d.value = a), e(function() {
            e(document).delegate("form", "submit.placeholder", function() {
                var t = e("." + p.customClass, this).each(n);
                setTimeout(function() {
                    t.each(i)
                }, 10)
            })
        }), e(window).bind("beforeunload.placeholder", function() {
            e("." + p.customClass).each(function() {
                this.value = ""
            })
        })
    }
}), define("bootstrap/collapse", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return e(i)
        }
        function n(t) {
            return this.each(function() {
                var n = e(this), o = n.data("bs.collapse"), a = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                !o && a.toggle && "show" == t && (a.toggle=!1), o || n.data("bs.collapse", o = new i(this, a)), "string" == typeof t && o[t]()
            })
        }
        var i = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.2", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0,
            trigger: '[data-toggle="collapse"]'
        }, i.prototype.dimension = function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning&&!this.$element.hasClass("in")) {
                var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                    var a = e.Event("show.bs.collapse");
                    if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                        o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var r = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!e.support.transition)
                            return r.call(this);
                        var l = e.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide": "show"]()
        }, i.prototype.getParent = function() {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
                var o = e(i);
                this.addAriaAndCollapsedClass(t(o), o)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
            var n = e.hasClass("in");
            e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var o = e.fn.collapse;
        e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = o, this
        }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var o = e(this);
            o.attr("data-target") || i.preventDefault();
            var a = t(o), s = a.data("bs.collapse"), r = s ? "toggle": e.extend({}, o.data(), {
                trigger: this
            });
            n.call(a, r)
        })
    }(e), {}
}), define("slidebars", ["jquery"], function(e) {
    return function(e) {
        e.slidebars = function(t) {
            function n() {
                !c.disableOver || "number" == typeof c.disableOver && c.disableOver >= C ? (x=!0, e("html").addClass("sb-init"), c.hideControlClasses && k.removeClass("sb-hide"), i()) : "number" == typeof c.disableOver && c.disableOver < C && (x=!1, e("html").removeClass("sb-init"), c.hideControlClasses && k.addClass("sb-hide"), g.css("minHeight", ""), (y || w) && s())
            }
            function i() {
                g.css("minHeight", ""), v && v.hasClass("sb-width-custom") && v.css("width", v.attr("data-sb-width")), b && b.hasClass("sb-width-custom") && b.css("width", b.attr("data-sb-width")), v && (v.hasClass("sb-style-push") || v.hasClass("sb-style-overlay")) && v.css("marginLeft", "-" + v.css("width")), b && (b.hasClass("sb-style-push") || b.hasClass("sb-style-overlay")) && b.css("marginRight", "-" + b.css("width")), c.scrollLock && e("html").addClass("sb-scroll-lock")
            }
            function o(e, t, n) {
                var o;
                if (o = e.hasClass("sb-style-push") ? g.add(e).add($) : e.hasClass("sb-style-overlay") ? e : g.add($), "translate" === T)
                    o.css("transform", "translate(" + t + ")");
                else if ("side" === T)
                    "-" === t[0] && (t = t.substr(1)), "0px" !== t && o.css(n, "0px"), setTimeout(function() {
                        o.css(n, t)
                    }, 1);
                else if ("jQuery" === T) {
                    "-" === t[0] && (t = t.substr(1));
                    var a = {};
                    a[n] = t, o.stop().animate(a, 400)
                }
                setTimeout(function() {
                    "0px" === t && (o.removeAttr("style"), i())
                }, 400)
            }
            function a(t) {
                function n() {
                    x && "left" === t && v ? (e("html").addClass("sb-active sb-active-left"), v.addClass("sb-active"), o(v, v.css("width"), "left"), setTimeout(function() {
                        y=!0
                    }, 400)) : x && "right" === t && b && (e("html").addClass("sb-active sb-active-right"), b.addClass("sb-active"), o(b, "-" + b.css("width"), "right"), setTimeout(function() {
                        w=!0
                    }, 400))
                }
                "left" === t && v && w || "right" === t && b && y ? (s(), setTimeout(n, 400)) : n()
            }
            function s(t) {
                (y || w) && (y && (o(v, "0px", "left"), y=!1), w && (o(b, "0px", "right"), w=!1), setTimeout(function() {
                    e("html").removeClass("sb-active sb-active-left sb-active-right"), v && v.removeClass("sb-active"), b && b.removeClass("sb-active"), "function" == typeof t && t()
                }, 400))
            }
            function r(e) {
                "left" === e && v && (y ? s() : a("left")), "right" === e && b && (w ? s() : a("right"))
            }
            function l(e, t) {
                e.stopPropagation(), e.preventDefault(), "touchend" === e.type && t.off("click")
            }
            var c = e.extend({
                siteClose: !0,
                scrollLock: !1,
                disableOver: !1,
                hideControlClasses: !1
            }, t), u = document.createElement("div").style, d=!1, p=!1;
            ("" === u.MozTransition || "" === u.WebkitTransition || "" === u.OTransition || "" === u.transition) && (d=!0), ("" === u.MozTransform || "" === u.WebkitTransform || "" === u.OTransform || "" === u.transform) && (p=!0);
            var h = navigator.userAgent, f=!1, m=!1;
            /Android/.test(h) ? f = h.substr(h.indexOf("Android") + 8, 3) : /(iPhone|iPod|iPad)/.test(h) && (m = h.substr(h.indexOf("OS ") + 3, 3).replace("_", ".")), (f && 3 > f || m && 5 > m) && e("html").addClass("sb-static");
            var g = e("#sb-site, .sb-site-container");
            if (e(".sb-left").length)
                var v = e(".sb-left"), y=!1;
            if (e(".sb-right").length)
                var b = e(".sb-right"), w=!1;
            var x=!1, C = e(window).width(), k = e(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"), $ = e(".sb-slide");
            n(), e(window).resize(function() {
                var t = e(window).width();
                C !== t && (C = t, n(), y && a("left"), w && a("right"))
            });
            var T;
            d && p ? (T = "translate", f && 4.4 > f && (T = "side")) : T = "jQuery", this.slidebars = {
                open: a,
                close: s,
                toggle: r,
                init: function() {
                    return x
                },
                active: function(e) {
                    return "left" === e && v ? y : "right" === e && b ? w : void 0
                },
                destroy: function(e) {
                    "left" === e && v && (y && s(), setTimeout(function() {
                        v.remove(), v=!1
                    }, 400)), "right" === e && b && (w && s(), setTimeout(function() {
                        b.remove(), b=!1
                    }, 400))
                }
            }, e(".sb-toggle-left").on("touchend click", function(t) {
                l(t, e(this)), r("left")
            }), e(".sb-toggle-right").on("touchend click", function(t) {
                l(t, e(this)), r("right")
            }), e(".sb-open-left").on("touchend click", function(t) {
                l(t, e(this)), a("left")
            }), e(".sb-open-right").on("touchend click", function(t) {
                l(t, e(this)), a("right")
            }), e(".sb-close").on("touchend click", function(t) {
                if (e(this).is("a") || e(this).children().is("a")) {
                    if ("click" === t.type) {
                        t.preventDefault();
                        var n = e(this).is("a") ? e(this).attr("href"): e(this).find("a").attr("href");
                        s(n)
                    }
                } else
                    l(t, e(this)), s()
            }), g.on("touchend click", function(t) {
                c.siteClose && (y || w) && (l(t, e(this)), s())
            })
        }
    }(e), {}
}), function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define("spin", t) : e.Spinner = t()
}(this, function() {
    "use strict";
    function e(e, t) {
        var n, i = document.createElement(e || "div");
        for (n in t)
            i[n] = t[n];
        return i
    }
    function t(e) {
        for (var t = 1, n = arguments.length; n > t; t++)
            e.appendChild(arguments[t]);
        return e
    }
    function n(e, t, n, i) {
        var o = ["opacity", t, ~~(100 * e), n, i].join("-"), a = .01 + n / i * 100, s = Math.max(1 - (1 - e) / t * (100 - a), e), r = c.substring(0, c.indexOf("Animation")).toLowerCase(), l = r && "-" + r + "-" || "";
        return d[o] || (p.insertRule("@" + l + "keyframes " + o + "{0%{opacity:" + s + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + t)%100 + "%{opacity:" + e + "}100%{opacity:" + s + "}}", p.cssRules.length), d[o] = 1), o
    }
    function i(e, t) {
        var n, i, o = e.style;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < u.length; i++)
            if (n = u[i] + t, void 0 !== o[n])
                return n;
        return void 0 !== o[t] ? t : void 0
    }
    function o(e, t) {
        for (var n in t)
            e.style[i(e, n) || n] = t[n];
        return e
    }
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                void 0 === e[i] && (e[i] = n[i])
        }
        return e
    }
    function s(e, t) {
        return "string" == typeof e ? e : e[t%e.length]
    }
    function r(e) {
        this.opts = a(e || {}, r.defaults, h)
    }
    function l() {
        function n(t, n) {
            return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
        }
        p.addRule(".spin-vml", "behavior:url(#default#VML)"), r.prototype.lines = function(e, i) {
            function a() {
                return o(n("group", {
                    coordsize: u + " " + u,
                    coordorigin: - c + " " +- c
                }), {
                    width: u,
                    height: u
                })
            }
            function r(e, r, l) {
                t(p, t(o(a(), {
                    rotation: 360 / i.lines * e + "deg",
                    left: ~~r
                }), t(o(n("roundrect", {
                    arcsize: i.corners
                }), {
                    width: c,
                    height: i.width,
                    left: i.radius,
                    top: - i.width>>1,
                    filter: l
                }), n("fill", {
                    color: s(i.color, e),
                    opacity: i.opacity
                }), n("stroke", {
                    opacity: 0
                }))))
            }
            var l, c = i.length + i.width, u = 2 * c, d = 2*-(i.width + i.length) + "px", p = o(a(), {
                position: "absolute",
                top: d,
                left: d
            });
            if (i.shadow)
                for (l = 1; l <= i.lines; l++)
                    r(l, - 2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= i.lines; l++)
                r(l);
            return t(e, p)
        }, r.prototype.opacity = function(e, t, n, i) {
            var o = e.firstChild;
            i = i.shadow && i.lines || 0, o && t + i < o.childNodes.length && (o = o.childNodes[t + i], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = n))
        }
    }
    var c, u = ["webkit", "Moz", "ms", "O"], d = {}, p = function() {
        var n = e("style", {
            type: "text/css"
        });
        return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
    }(), h = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        position: "absolute"
    };
    r.defaults = {}, a(r.prototype, {
        spin: function(t) {
            this.stop();
            var n = this, i = n.opts, a = n.el = o(e(0, {
                className: i.className
            }), {
                position: i.position,
                width: 0,
                zIndex: i.zIndex
            });
            if (o(a, {
                left: i.left,
                top: i.top
            }), t && t.insertBefore(a, t.firstChild || null), a.setAttribute("role", "progressbar"), n.lines(a, n.opts), !c) {
                var s, r = 0, l = (i.lines - 1) * (1 - i.direction) / 2, u = i.fps, d = u / i.speed, p = (1 - i.opacity) / (d * i.trail / 100), h = d / i.lines;
                !function f() {
                    r++;
                    for (var e = 0; e < i.lines; e++)
                        s = Math.max(1 - (r + (i.lines - e) * h)%d * p, i.opacity), n.opacity(a, e * i.direction + l, s, i);
                    n.timeout = n.el && setTimeout(f, ~~(1e3 / u))
                }()
            }
            return n
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
        },
        lines: function(i, a) {
            function r(t, n) {
                return o(e(), {
                    position: "absolute",
                    width: a.length + a.width + "px",
                    height: a.width + "px",
                    background: t,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate("+~~(360 / a.lines * u + a.rotate) + "deg) translate(" + a.radius + "px,0)",
                    borderRadius: (a.corners * a.width>>1) + "px"
                })
            }
            for (var l, u = 0, d = (a.lines - 1) * (1 - a.direction) / 2; u < a.lines; u++)
                l = o(e(), {
                    position: "absolute",
                    top: 1+~(a.width / 2) + "px",
                    transform: a.hwaccel ? "translate3d(0,0,0)": "",
                    opacity: a.opacity,
                    animation: c && n(a.opacity, a.trail, d + u * a.direction, a.lines) + " " + 1 / a.speed + "s linear infinite"
                }), a.shadow && t(l, o(r("#000", "0 0 4px #000"), {
                    top: "2px"
                })), t(i, t(l, r(s(a.color, u), "0 0 1px rgba(0,0,0,.1)")));
            return i
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    });
    var f = o(e("group"), {
        behavior: "url(#default#VML)"
    });
    return !i(f, "transform") && f.adj ? l() : c = i(f, "animation"), r
}), function(e, t) {
    "object" == typeof exports ? module.exports = t(require("spin.js")) : "function" == typeof define && define.amd ? define("ladda", ["spin"], t) : e.Ladda = t(e.Spinner)
}(this, function(e) {
    "use strict";
    function t(e) {
        if ("undefined" == typeof e)
            return void console.warn("Ladda button target must be defined.");
        e.querySelector(".ladda-label") || (e.innerHTML = '<span class="ladda-label">' + e.innerHTML + "</span>");
        var t, n = e.querySelector(".ladda-spinner");
        n || (n = document.createElement("span"), n.className = "ladda-spinner"), e.appendChild(n);
        var i, o = {
            start: function() {
                return t || (t = s(e)), e.setAttribute("disabled", ""), e.setAttribute("data-loading", ""), clearTimeout(i), t.spin(n), this.setProgress(0), this
            },
            startAfter: function(e) {
                return clearTimeout(i), i = setTimeout(function() {
                    o.start()
                }, e), this
            },
            stop: function() {
                return e.removeAttribute("disabled"), e.removeAttribute("data-loading"), clearTimeout(i), t && (i = setTimeout(function() {
                    t.stop()
                }, 1e3)), this
            },
            toggle: function() {
                return this.isLoading() ? this.stop() : this.start(), this
            },
            setProgress: function(t) {
                t = Math.max(Math.min(t, 1), 0);
                var n = e.querySelector(".ladda-progress");
                0 === t && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", e.appendChild(n)), n.style.width = (t || 0) * e.offsetWidth + "px")
            },
            enable: function() {
                return this.stop(), this
            },
            disable: function() {
                return this.stop(), e.setAttribute("disabled", ""), this
            },
            isLoading: function() {
                return e.hasAttribute("data-loading")
            },
            remove: function() {
                clearTimeout(i), e.removeAttribute("disabled", ""), e.removeAttribute("data-loading", ""), t && (t.stop(), t = null);
                for (var n = 0, a = l.length; a > n; n++)
                    if (o === l[n]) {
                        l.splice(n, 1);
                        break
                    }
            }
        };
        return l.push(o), o
    }
    function n(e, t) {
        for (; e.parentNode && e.tagName !== t;)
            e = e.parentNode;
        return t === e.tagName ? e : void 0
    }
    function i(e) {
        for (var t = ["input", "textarea", "select"], n = [], i = 0; i < t.length; i++)
            for (var o = e.getElementsByTagName(t[i]), a = 0; a < o.length; a++)
                o[a].hasAttribute("required") && n.push(o[a]);
        return n
    }
    function o(e, o) {
        o = o || {};
        var a = [];
        "string" == typeof e ? a = r(document.querySelectorAll(e)) : "object" == typeof e && "string" == typeof e.nodeName && (a = [e]);
        for (var s = 0, l = a.length; l > s; s++)
            !function() {
                var e = a[s];
                if ("function" == typeof e.addEventListener) {
                    var r = t(e), l =- 1;
                    e.addEventListener("click", function(t) {
                        var a=!0, s = n(e, "FORM");
                        if ("undefined" != typeof s)
                            for (var c = i(s), u = 0; u < c.length; u++)
                                "" === c[u].value.replace(/^\s+|\s+$/g, "") && (a=!1), "checkbox" !== c[u].type && "radio" !== c[u].type || c[u].checked || (a=!1), "email" === c[u].type && (a = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(c[u].value));
                                a && (r.startAfter(1), "number" == typeof o.timeout && (clearTimeout(l), l = setTimeout(r.stop, o.timeout)), "function" == typeof o.callback && o.callback.apply(null, [r]))
                            }, !1)
                }
            }()
    }
    function a() {
        for (var e = 0, t = l.length; t > e; e++)
            l[e].stop()
    }
    function s(t) {
        var n, i = t.offsetHeight;
        0 === i && (i = parseFloat(window.getComputedStyle(t).height)), i > 32 && (i*=.8), t.hasAttribute("data-spinner-size") && (i = parseInt(t.getAttribute("data-spinner-size"), 10)), t.hasAttribute("data-spinner-color") && (n = t.getAttribute("data-spinner-color"));
        var o = 12, a = .2 * i, s = .6 * a, r = 7 > a ? 2: 3;
        return new e({
            color: n || "#fff",
            lines: o,
            radius: a,
            length: s,
            width: r,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }
    function r(e) {
        for (var t = [], n = 0; n < e.length; n++)
            t.push(e[n]);
        return t
    }
    var l = [];
    return {
        bind: o,
        create: t,
        stopAll: a
    }
}), define("jquery.ladda", ["jquery", "ladda"], function(e, t) {
    return function(e, t) {
        if (void 0 === t)
            return console.error("jQuery required for Ladda.jQuery");
        var n = [];
        t = t.extend(t, {
            ladda: function(t) {
                "stopAll" === t && e.stopAll()
            }
        }), t.fn = t.extend(t.fn, {
            ladda: function(i) {
                var o = n.slice.call(arguments, 1);
                return "bind" === i ? (o.unshift(t(this).selector), e.bind.apply(e, o)) : t(this).each(function() {
                    var n, a = t(this);
                    void 0 === i ? a.data("ladda", e.create(this)) : (n = a.data("ladda"), n[i].apply(n, o))
                }), this
            }
        })
    }(t, e), {}
}), define("bootstrap/tooltip", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            return this.each(function() {
                var i = e(this), o = i.data("bs.tooltip"), a = "object" == typeof t && t;
                (o || "destroy" != t) && (o || i.data("bs.tooltip", o = new n(this, a)), "string" == typeof t && o[t]())
            })
        }
        var n = function(e, t) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
        };
        n.VERSION = "3.3.2", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function(t, n, i) {
            this.enabled=!0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
            for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
                var s = o[a];
                if ("click" == s)
                    this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var r = "hover" == s ? "mouseenter": "focusin", l = "hover" == s ? "mouseleave": "focusout";
                    this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.getOptions = function(t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, n.prototype.getDelegateOptions = function() {
            var t = {}, n = this.getDefaults();
            return this._options && e.each(this._options, function(e, i) {
                n[e] != i && (t[e] = i)
            }), t
        }, n.prototype.enter = function(t) {
            var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
            return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.leave = function(t) {
            var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
        }, n.prototype.show = function() {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() ||!i)
                    return;
                var o = this, a = this.tip(), s = this.getUID(this.type);
                this.setContent(), a.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && a.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]): this.options.placement, l = /\s?auto?\s?/i, c = l.test(r);
                c && (r = r.replace(l, "") || "top"), a.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(r).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element);
                var u = this.getPosition(), d = a[0].offsetWidth, p = a[0].offsetHeight;
                if (c) {
                    var h = r, f = this.options.container ? e(this.options.container): this.$element.parent(), m = this.getPosition(f);
                    r = "bottom" == r && u.bottom + p > m.bottom ? "top" : "top" == r && u.top - p < m.top ? "bottom" : "right" == r && u.right + d > m.width ? "left" : "left" == r && u.left - d < m.left ? "right" : r, a.removeClass(h).addClass(r)
                }
                var g = this.getCalculatedOffset(r, u, d, p);
                this.applyPlacement(g, r);
                var v = function() {
                    var e = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
                };
                e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
            }
        }, n.prototype.applyPlacement = function(t, n) {
            var i = this.tip(), o = i[0].offsetWidth, a = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), r = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(r) && (r = 0), t.top = t.top + s, t.left = t.left + r, e.offset.setOffset(i[0], e.extend({
                using: function(e) {
                    i.css({
                        top: Math.round(e.top),
                        left: Math.round(e.left)
                    })
                }
            }, t), 0), i.addClass("in");
            var l = i[0].offsetWidth, c = i[0].offsetHeight;
            "top" == n && c != a && (t.top = t.top + a - c);
            var u = this.getViewportAdjustedDelta(n, t, l, c);
            u.left ? t.left += u.left : t.top += u.top;
            var d = /top|bottom/.test(n), p = d ? 2 * u.left - o + l: 2 * u.top - a + c, h = d ? "offsetWidth": "offsetHeight";
            i.offset(t), this.replaceArrow(p, i[0][h], d)
        }, n.prototype.replaceArrow = function(e, t, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function() {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html": "text"](t), e.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function(t) {
            function i() {
                "in" != o.hoverState && a.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
            }
            var o = this, a = this.tip(), s = e.Event("hide.bs." + this.type);
            return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (a.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
        }, n.prototype.fixTitle = function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function() {
            return this.getTitle()
        }, n.prototype.getPosition = function(t) {
            t = t || this.$element;
            var n = t[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
            null == o.width && (o = e.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var a = i ? {
                top: 0,
                left: 0
            }
            : t.offset(), s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop: t.scrollTop()
            }, r = i ? {
                width: e(window).width(),
                height: e(window).height()
            }
            : null;
            return e.extend({}, o, s, r, a)
        }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
            return "bottom" == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - n / 2
            } : "top" == e ? {
                top: t.top - i,
                left: t.left + t.width / 2 - n / 2
            } : "left" == e ? {
                top: t.top + t.height / 2 - i / 2,
                left: t.left - n
            } : {
                top: t.top + t.height / 2 - i / 2,
                left: t.left + t.width
            }
        }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport)
                return o;
            var a = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var r = t.top - a - s.scroll, l = t.top + a - s.scroll + i;
                r < s.top ? o.top = s.top - r : l > s.top + s.height && (o.top = s.top + s.height - l)
            } else {
                var c = t.left - a, u = t.left + a + n;
                c < s.left ? o.left = s.left - c : u > s.width && (o.left = s.left + s.width - u)
            }
            return o
        }, n.prototype.getTitle = function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        }, n.prototype.getUID = function(e) {
            do
                e+=~~(1e6 * Math.random());
            while (document.getElementById(e));
            return e
        }, n.prototype.tip = function() {
            return this.$tip = this.$tip || e(this.options.template)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function() {
            this.enabled=!0
        }, n.prototype.disable = function() {
            this.enabled=!1
        }, n.prototype.toggleEnabled = function() {
            this.enabled=!this.enabled
        }, n.prototype.toggle = function(t) {
            var n = this;
            t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function() {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() {
                e.$element.off("." + e.type).removeData("bs." + e.type)
            })
        };
        var i = e.fn.tooltip;
        e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = i, this
        }
    }(e), {}
}), define("bootstrap/popover", ["jquery", "bootstrap/tooltip"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            return this.each(function() {
                var i = e(this), o = i.data("bs.popover"), a = "object" == typeof t && t;
                (o || "destroy" != t) && (o || i.data("bs.popover", o = new n(this, a)), "string" == typeof t && o[t]())
            })
        }
        var n = function(e, t) {
            this.init("popover", e, t)
        };
        if (!e.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.2", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.setContent = function() {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html": "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html": "append": "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
        }, n.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function() {
            var e = this.$element, t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, n.prototype.tip = function() {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        };
        var i = e.fn.popover;
        e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
            return e.fn.popover = i, this
        }
    }(e), {}
}), define("module/popover", ["require", "jquery", "bootstrap/popover"], function(e) {
    var t = e("jquery"), n = (e("bootstrap/popover"), {
        init: function() {
            t("[data-toggle='popover']").popover({
                container: "body"
            }), t("[data-trigger='focus']").popover().click(function(e) {
                e.preventDefault();
                var n = t(this);
                n.is(":focus") || n.focus()
            })
        },
        set: function(e) {
            e.popover({
                container: "body"
            })
        }
    });
    return n
}), define("bootstrap/alert", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            return this.each(function() {
                var n = e(this), o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
            })
        }
        var n = '[data-dismiss="alert"]', i = function(t) {
            e(t).on("click", n, this.close)
        };
        i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
            function n() {
                s.detach().trigger("closed.bs.alert").remove()
            }
            var o = e(this), a = o.attr("data-target");
            a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
            var s = e(a);
            t && t.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var o = e.fn.alert;
        e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
            return e.fn.alert = o, this
        }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(e), {}
}), define("text", ["module"], function(e) {
    "use strict";
    var t, n, i, o, a, s = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], r = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, c = "undefined" != typeof location && location.href, u = c && location.protocol && location.protocol.replace(/\:/, ""), d = c && location.hostname, p = c && (location.port || void 0), h = {}, f = e.config && e.config() || {};
    return t = {
        version: "2.0.14",
        strip: function(e) {
            if (e) {
                e = e.replace(r, "");
                var t = e.match(l);
                t && (e = t[1])
            } else
                e = "";
            return e
        },
        jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: f.createXhr || function() {
            var e, t, n;
            if ("undefined" != typeof XMLHttpRequest)
                return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (t = 0; 3 > t; t += 1) {
                    n = s[t];
                    try {
                        e = new ActiveXObject(n)
                    } catch (i) {}
                    if (e) {
                        s = [n];
                        break
                    }
            }
            return e
        },
        parseName: function(e) {
            var t, n, i, o=!1, a = e.lastIndexOf("."), s = 0 === e.indexOf("./") || 0 === e.indexOf("../");
            return - 1 !== a && (!s || a > 1) ? (t = e.substring(0, a), n = e.substring(a + 1)) : t = e, i = n || t, a = i.indexOf("!"), - 1 !== a && (o = "strip" === i.substring(a + 1), i = i.substring(0, a), n ? n = i : t = i), {
                moduleName: t,
                ext: n,
                strip: o
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(e, n, i, o) {
            var a, s, r, l = t.xdRegExp.exec(e);
            return l ? (a = l[2], s = l[3], s = s.split(":"), r = s[1], s = s[0], !(a && a !== n || s && s.toLowerCase() !== i.toLowerCase() || (r || s) && r !== o)) : !0
        },
        finishLoad: function(e, n, i, o) {
            i = n ? t.strip(i) : i, f.isBuild && (h[e] = i), o(i)
        },
        load: function(e, n, i, o) {
            if (o && o.isBuild&&!o.inlineText)
                return void i();
            f.isBuild = o && o.isBuild;
            var a = t.parseName(e), s = a.moduleName + (a.ext ? "." + a.ext : ""), r = n.toUrl(s), l = f.useXhr || t.useXhr;
            return 0 === r.indexOf("empty:") ? void i() : void(!c || l(r, u, d, p) ? t.get(r, function(n) {
                t.finishLoad(e, a.strip, n, i)
            }, function(e) {
                i.error && i.error(e)
            }) : n([s], function(e) {
                t.finishLoad(a.moduleName + "." + a.ext, a.strip, e, i)
            }))
        },
        write: function(e, n, i, o) {
            if (h.hasOwnProperty(n)) {
                var a = t.jsEscape(h[n]);
                i.asModule(e + "!" + n, "define(function () { return '" + a + "';});\n")
            }
        },
        writeFile: function(e, n, i, o, a) {
            var s = t.parseName(n), r = s.ext ? "." + s.ext: "", l = s.moduleName + r, c = i.toUrl(s.moduleName + r) + ".js";
            t.load(l, i, function(n) {
                var i = function(e) {
                    return o(c, e)
                };
                i.asModule = function(e, t) {
                    return o.asModule(e, c, t)
                }, t.write(e, l, i, a)
            }, a)
        }
    }, "node" === f.env ||!f.env && "undefined" != typeof process && process.versions && process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"] ? (n = require.nodeRequire("fs"), t.get = function(e, t, i) {
        try {
            var o = n.readFileSync(e, "utf8");
            "\ufeff" === o[0] && (o = o.substring(1)), t(o)
        } catch (a) {
            i && i(a)
        }
    }) : "xhr" === f.env ||!f.env && t.createXhr() ? t.get = function(e, n, i, o) {
        var a, s = t.createXhr();
        if (s.open("GET", e, !0), o)
            for (a in o)
                o.hasOwnProperty(a) && s.setRequestHeader(a.toLowerCase(), o[a]);
        f.onXhr && f.onXhr(s, e), s.onreadystatechange = function(t) {
            var o, a;
            4 === s.readyState && (o = s.status || 0, o > 399 && 600 > o ? (a = new Error(e + " HTTP status: " + o), a.xhr = s, i && i(a)) : n(s.responseText), f.onXhrComplete && f.onXhrComplete(s, e))
        }, s.send(null)
    } : "rhino" === f.env ||!f.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function(e, t) {
        var n, i, o = "utf-8", a = new java.io.File(e), s = java.lang.System.getProperty("line.separator"), r = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a), o)), l = "";
        try {
            for (n = new java.lang.StringBuffer, i = r.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), null !== i && n.append(i); null !== (i = r.readLine());)
                n.append(s), n.append(i);
            l = String(n.toString())
        } finally {
            r.close()
        }
        t(l)
    } : ("xpconnect" === f.env ||!f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (i = Components.classes, o = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), a = "@mozilla.org/windows-registry-key;1"in i, t.get = function(e, t) {
        var n, s, r, l = {};
        a && (e = e.replace(/\//g, "\\")), r = new FileUtils.File(e);
        try {
            n = i["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream), n.init(r, 1, 0, !1), s = i["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream), s.init(n, "utf-8", n.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), s.readString(n.available(), l), s.close(), n.close(), t(l.value)
        } catch (c) {
            throw new Error((r && r.path || "") + ": " + c)
        }
    }), t
}), define("text!include/notification.html", [], function() {
    return '<div role="alert" id="notify">\r\n	<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\r\n	<span class="message"></span>\r\n</div>\r\n'
}), define("module/notify", ["require", "jquery", "bootstrap/alert"], function(e) {
    var t = e("jquery"), n = (e("bootstrap/alert"), {
        params: {
            offset: 0
        },
        elements: {
            $notify: null
        },
        functions: {
            buildNotify: function(e) {
                t("body").append(n.elements.$notify), n.elements.$notify.stop(!0, !0), n.elements.$notify.css("bottom", - n.elements.$notify.height() + n.params.offset + "px"), n.elements.$notify.attr("class", "alert alert-" + e.type).find(".message").html(e.message), e.sticky && n.elements.$notify.find(".close").hide(), !e.sticky && n.elements.$notify.addClass("alert-dismissible"), n.elements.$notify.click(function() {
                    !e.sticky && n.functions.hideNotify()
                }), n.elements.$notify.animate({
                    bottom: n.params.offset
                }, {
                    complete: function() {}
                })
            },
            showNotify: function(i) {
                n.elements.$confirm ? (n.functions.buildNotify(i), n.params.isOpen=!0) : e(["text!include/notification.html"], function(e) {
                    n.elements.$notify = t(e), n.functions.buildNotify(i), n.params.isOpen=!0
                })
            },
            hideNotify: function() {
                n.elements.$notify && n.elements.$notify.alert("close")
            },
            setClass: function(e) {
                n.elements.$notify && n.elements.$notify.attr({
                    "class": e
                })
            }
        }
    });
    return n
}), define("bootstrap/dropdown", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            t && 3 === t.which || (e(o).remove(), e(a).each(function() {
                var i = e(this), o = n(i), a = {
                    relatedTarget: this
                };
                o.hasClass("open") && (o.trigger(t = e.Event("hide.bs.dropdown", a)), t.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", a)))
            }))
        }
        function n(t) {
            var n = t.attr("data-target");
            n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && e(n);
            return i && i.length ? i : t.parent()
        }
        function i(t) {
            return this.each(function() {
                var n = e(this), i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
            })
        }
        var o = ".dropdown-backdrop", a = '[data-toggle="dropdown"]', s = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
        s.VERSION = "3.3.2", s.prototype.toggle = function(i) {
            var o = e(this);
            if (!o.is(".disabled, :disabled")) {
                var a = n(o), s = a.hasClass("open");
                if (t(), !s) {
                    "ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                    var r = {
                        relatedTarget: this
                    };
                    if (a.trigger(i = e.Event("show.bs.dropdown", r)), i.isDefaultPrevented())
                        return;
                    o.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger("shown.bs.dropdown", r)
                }
                return !1
            }
        }, s.prototype.keydown = function(t) {
            if (/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)) {
                var i = e(this);
                if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var o = n(i), s = o.hasClass("open");
                    if (!s && 27 != t.which || s && 27 == t.which)
                        return 27 == t.which && o.find(a).trigger("focus"), i.trigger("click");
                    var r = " li:not(.divider):visible a", l = o.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                    if (l.length) {
                        var c = l.index(t.target);
                        38 == t.which && c > 0 && c--, 40 == t.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var r = e.fn.dropdown;
        e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = r, this
        }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", a, s.prototype.toggle).on("keydown.bs.dropdown.data-api", a, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
    }(e), {}
}), define("module/dropdown", ["require", "jquery", "bootstrap/dropdown"], function(e) {
    var t = e("jquery");
    e("bootstrap/dropdown");
    t(function() {
        t(document).on("show.bs.dropdown", function(e, t) {}), t(document).on("shown.bs.dropdown", function(e, n) {
            t(e.target).offset().top > t(window).height() / 2 && t(e.target).addClass("flipped")
        }), t(document).on("hidden.bs.dropdown", function(e, n) {
            t(e.target).removeClass("flipped")
        })
    })
}), window.Modernizr = function(e, t, n) {
    function i(e) {
        b.cssText = e
    }
    function o(e, t) {
        return i(k.join(e + ";") + (t || ""))
    }
    function a(e, t) {
        return typeof e === t
    }
    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function r(e, t) {
        for (var i in e) {
            var o = e[i];
            if (!s(o, "-") && b[o] !== n)
                return "pfx" == t ? o : !0
        }
        return !1
    }
    function l(e, t, i) {
        for (var o in e) {
            var s = t[e[o]];
            if (s !== n)
                return i===!1 ? e[o] : a(s, "function") ? s.bind(i || t) : s
        }
        return !1
    }
    function c(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + T.join(i + " ") + i).split(" ");
        return a(t, "string") || a(t, "undefined") ? r(o, t) : (o = (e + " " + _.join(i + " ") + i).split(" "), l(o, t, n))
    }
    function u() {
        f.input = function(n) {
            for (var i = 0, o = n.length; o > i; i++)
                D[n[i]]=!!(n[i]in w);
            return D.list && (D.list=!(!t.createElement("datalist") ||!e.HTMLDataListElement)), D
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(e) {
            for (var i, o, a, s = 0, r = e.length; r > s; s++)
                w.setAttribute("type", o = e[s]), i = "text" !== w.type, i && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (g.appendChild(w), a = t.defaultView, i = a.getComputedStyle && "textfield" !== a.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity()===!1 : w.value != x)), A[e[s]]=!!i;
            return A
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, p, h = "2.8.3", f = {}, m=!0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, w = t.createElement("input"), x = ":)", C = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "), $ = "Webkit Moz O ms", T = $.split(" "), _ = $.toLowerCase().split(" "), E = {
        svg: "http://www.w3.org/2000/svg"
    }, S = {}, A = {}, D = {}, F = [], j = F.slice, P = function(e, n, i, o) {
        var a, s, r, l, c = t.createElement("div"), u = t.body, d = u || t.createElement("body");
        if (parseInt(i, 10))
            for (; i--;)
                r = t.createElement("div"), r.id = o ? o[i] : v + (i + 1), c.appendChild(r);
        return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (u ? c : d).innerHTML += a, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), s = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = l), !!s
    }, I = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)
            return n(t) && n(t).matches ||!1;
        var i;
        return P("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
            i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }), i
    }, q = function() {
        function e(e, o) {
            o = o || t.createElement(i[e] || "div"), e = "on" + e;
            var s = e in o;
            return s || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), s = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, s
        }
        var i = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), O = {}.hasOwnProperty;
    p = a(O, "undefined") || a(O.call, "undefined") ? function(e, t) {
        return t in e && a(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return O.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = j.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var o = function() {};
                o.prototype = t.prototype;
                var a = new o, s = t.apply(a, n.concat(j.call(arguments)));
                return Object(s) === s ? s : a
            }
            return t.apply(e, n.concat(j.call(arguments)))
        };
        return i
    }), S.flexbox = function() {
        return c("flexWrap")
    }, S.flexboxlegacy = function() {
        return c("boxDirection")
    }, S.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext ||!e.getContext("2d"))
    }, S.canvastext = function() {
        return !(!f.canvas ||!a(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, S.webgl = function() {
        return !!e.WebGLRenderingContext
    }, S.touch = function() {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n=!0 : P(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }), n
    }, S.geolocation = function() {
        return "geolocation"in navigator
    }, S.postmessage = function() {
        return !!e.postMessage
    }, S.websqldatabase = function() {
        return !!e.openDatabase
    }, S.indexedDB = function() {
        return !!c("indexedDB", e)
    }, S.hashchange = function() {
        return q("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, S.history = function() {
        return !(!e.history ||!history.pushState)
    }, S.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }, S.websockets = function() {
        return "WebSocket"in e || "MozWebSocket"in e
    }, S.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba")
    }, S.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
    }, S.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, S.backgroundsize = function() {
        return c("backgroundSize")
    }, S.borderimage = function() {
        return c("borderImage")
    }, S.borderradius = function() {
        return c("borderRadius")
    }, S.boxshadow = function() {
        return c("boxShadow")
    }, S.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }, S.opacity = function() {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, S.cssanimations = function() {
        return c("animationName")
    }, S.csscolumns = function() {
        return c("columnCount")
    }, S.cssgradients = function() {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return i((e + "-webkit- ".split(" ").join(t + e) + k.join(n + e)).slice(0, - e.length)), s(b.backgroundImage, "gradient")
    }, S.cssreflections = function() {
        return c("boxReflect")
    }, S.csstransforms = function() {
        return !!c("transform")
    }, S.csstransforms3d = function() {
        var e=!!c("perspective");
        return e && "webkitPerspective"in g.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, S.csstransitions = function() {
        return c("transition")
    }, S.fontface = function() {
        var e;
        return P('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
            var o = t.getElementById("smodernizr"), a = o.sheet || o.styleSheet, s = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText: a.cssText || "": "";
            e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
        }), e
    }, S.generatedcontent = function() {
        var e;
        return P(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, S.video = function() {
        var e = t.createElement("video"), n=!1;
        try {
            (n=!!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (i) {}
        return n
    }, S.audio = function() {
        var e = t.createElement("audio"), n=!1;
        try {
            (n=!!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (i) {}
        return n
    }, S.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, S.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, S.webworkers = function() {
        return !!e.Worker
    }, S.applicationcache = function() {
        return !!e.applicationCache
    }, S.svg = function() {
        return !!t.createElementNS&&!!t.createElementNS(E.svg, "svg").createSVGRect
    }, S.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == E.svg
    }, S.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(C.call(t.createElementNS(E.svg, "animate")))
    }, S.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(C.call(t.createElementNS(E.svg, "clipPath")))
    };
    for (var L in S)
        p(S, L) && (d = L.toLowerCase(), f[d] = S[L](), F.push((f[d] ? "" : "no-") + d));
    return f.input || u(), f.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var i in e)
                p(e, i) && f.addTest(i, e[i]);
        else {
            if (e = e.toLowerCase(), f[e] !== n)
                return f;
            t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), f[e] = t
        }
        return f
    }, i(""), y = w = null, function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"), i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function o(e) {
            var t = v[e[m]];
            return t || (t = {}, g++, e[m] = g, v[g] = t), t
        }
        function a(e, n, i) {
            if (n || (n = t), u)
                return n.createElement(e);
            i || (i = o(n));
            var a;
            return a = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !a.canHaveChildren || h.test(e) || a.tagUrn ? a : i.frag.appendChild(a)
        }
        function s(e, n) {
            if (e || (e = t), u)
                return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), s = 0, r = i(), l = r.length; l > s; s++)
                a.createElement(r[s]);
            return a
        }
        function r(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return y.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function l(e) {
            e || (e = t);
            var i = o(e);
            return !y.shivCSS || c || i.hasCSS || (i.hasCSS=!!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || r(e, i), e
        }
        var c, u, d = "3.7.0", p = e.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, m = "_html5shiv", g = 0, v = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden"in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c=!0, u=!0
            }
        }();
        var y = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS!==!1,
            supportsUnknownElements: u,
            shivMethods: p.shivMethods!==!1,
            type: "default",
            shivDocument: l,
            createElement: a,
            createDocumentFragment: s
        };
        e.html5 = y, l(t)
    }(this, t), f._version = h, f._prefixes = k, f._domPrefixes = _, f._cssomPrefixes = T, f.mq = I, f.hasEvent = q, f.testProp = function(e) {
        return r([e])
    }, f.testAllProps = c, f.testStyles = P, f.prefixed = function(e, t, n) {
        return t ? c(e, t, n) : c(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + F.join(" ") : ""), f
}(this, this.document), define("modernizr", function() {}), define("module/client", [], function() {
    function e(e, t) {
        return {
            type: "number",
            val: e,
            unit: t
        }
    }
    return {
        intScreenSmallWidth: e(768, "px"),
        intNavbarHeight: e(50, "px"),
        intThumbHeight: e(200, "px"),
        intThumbWidth: e(360, "px")
    }
}), function(e, t) {
    "function" == typeof define && define.amd ? define("blazy", t) : "object" == typeof exports ? module.exports = t() : e.Blazy = t()
}(this, function() {
    "use strict";
    function e(e) {
        if (!document.querySelectorAll) {
            var i = document.createStyleSheet();
            document.querySelectorAll = function(e, t, n, o, a) {
                for (a = document.all, t = [], e = e.replace(/\[for\b/gi, "[htmlFor").split(","), n = e.length; n--;) {
                    for (i.addRule(e[n], "k:v"), o = a.length; o--;)
                        a[o].currentStyle.k && t.push(a[o]);
                    i.removeRule(0)
                }
                return t
            }
        }
        y=!0, m = [], f = {}, h = e || {}, h.error = h.error ||!1, h.offset = h.offset || 100, h.success = h.success ||!1, h.selector = h.selector || ".b-lazy", h.separator = h.separator || "|", h.container = h.container ? document.querySelectorAll(h.container) : !1, h.errorClass = h.errorClass || "b-error", h.breakpoints = h.breakpoints ||!1, h.successClass = h.successClass || "b-loaded", h.src = p = h.src || "data-src", v = window.devicePixelRatio > 1, f.top = 0 - h.offset, f.left = 0 - h.offset, b = d(n, 25), w = d(r, 50), r(), u(h.breakpoints, function(e) {
            return e.width >= window.screen.width ? (p = e.src, !1) : void 0
        }), t()
    }
    function t() {
        s(h.selector), y && (y=!1, h.container && u(h.container, function(e) {
            l(e, "scroll", b)
        }), l(window, "resize", w), l(window, "resize", b), l(window, "scroll", b)), n()
    }
    function n() {
        for (var t = 0; g > t; t++) {
            var n = m[t];
            (o(n) || a(n)) && (e.prototype.load(n), m.splice(t, 1), g--, t--)
        }
        0 === g && e.prototype.destroy()
    }
    function i(e, t) {
        if (t || e.offsetWidth > 0 && e.offsetHeight > 0) {
            var n = e.getAttribute(p) || e.getAttribute(h.src);
            if (n) {
                var i = n.split(h.separator), o = i[v && i.length > 1 ? 1: 0], a = new Image;
                u(h.breakpoints, function(t) {
                    e.removeAttribute(t.src)
                }), e.removeAttribute(h.src), a.onerror = function() {
                    h.error && h.error(e, "invalid"), e.className = e.className + " " + h.errorClass
                }, a.onload = function() {
                    "img" === e.nodeName.toLowerCase() ? e.src = o : e.style.backgroundImage = 'url("' + o + '")', e.className = e.className + " " + h.successClass, h.success && h.success(e)
                }, a.src = o
            } else
                h.error && h.error(e, "missing"), e.className = e.className + " " + h.errorClass
        }
    }
    function o(e) {
        var t = e.getBoundingClientRect();
        return t.right >= f.left && t.bottom >= f.top && t.left <= f.right && t.top <= f.bottom
    }
    function a(e) {
        return - 1 !== (" " + e.className + " ").indexOf(" " + h.successClass + " ")
    }
    function s(e) {
        var t = document.querySelectorAll(e);
        g = t.length;
        for (var n = g; n--; m.unshift(t[n]));
    }
    function r() {
        f.bottom = (window.innerHeight || document.documentElement.clientHeight) + h.offset, f.right = (window.innerWidth || document.documentElement.clientWidth) + h.offset
    }
    function l(e, t, n) {
        e.attachEvent ? e.attachEvent && e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1)
    }
    function c(e, t, n) {
        e.detachEvent ? e.detachEvent && e.detachEvent("on" + t, n) : e.removeEventListener(t, n, !1)
    }
    function u(e, t) {
        if (e && t)
            for (var n = e.length, i = 0; n > i && t(e[i], i)!==!1; i++);
    }
    function d(e, t) {
        var n = 0;
        return function() {
            var i =+ new Date;
            t > i - n || (n = i, e.apply(m, arguments))
        }
    }
    var p, h, f, m, g, v, y, b, w;
    return e.prototype.revalidate = function() {
        t()
    }, e.prototype.load = function(e, t) {
        a(e) || i(e, t)
    }, e.prototype.destroy = function() {
        h.container && u(h.container, function(e) {
            c(e, "scroll", b)
        }), c(window, "scroll", b), c(window, "resize", b), c(window, "resize", w), g = 0, m.length = 0, y=!0
    }, e
}), define("module/lazyload", ["require", "jquery", "module/client", "blazy"], function(e) {
    var t, n = e("jquery"), i = e("module/client"), o = e("blazy"), a = {
        init: function(e) {
            t = new o({
                breakpoints: [{
                    width: i.intScreenSmallWidth.val - 1,
                    src: "data-src-icon"
                }
                ],
                success: function(t) {
                    e && e(n(t))
                },
                offset: 200
            })
        },
        revalidate: function() {
            t.revalidate()
        }
    };
    return a
}), define("page/include/page", ["require", "jquery", "jquery.placeholder", "jquery.readyselector", "bootstrap/collapse", "slidebars", "jquery.ladda", "module/popover", "module/notify", "module/dropdown", "modernizr", "module/client", "module/lazyload"], function(e) {
    var t = e("jquery"), n = (e("jquery.placeholder"), e("jquery.readyselector"), e("bootstrap/collapse"), e("slidebars"), e("jquery.ladda"), e("module/popover")), i = (e("module/notify"), e("module/dropdown"), e("modernizr"), e("module/client"), e("module/lazyload"));
    return {
        ready: function() {
            i.init(), n.init(), t(".ladda-button").ladda(), t(document).on("mousedown", ".btn-upgrade", function(e) {
                var n = t(this), i = n.data("plan") ? n.data("plan"): "plus";
                return n.attr({
                    disabled: !0
                }), location.href = window.pageVars.site_url + "plans/monthly/" + i, !1
            }), t(document).on("click", "a.ladda-button", function() {
                t(this).ladda("start")
            }), t.slidebars({
                siteClose: !1
            }), t(".navbar-fixed-top .navbar-toggle").on("click", function() {
                t.slidebars.active("left") || (t(".sb-site-container").css({
                    "z-index": 1
                }), t.slidebars.open("left"))
            }), t("#slide-content").on("click", function() {
                return t.slidebars.active("left") ? (t.slidebars.close(function() {
                    t(".sb-site-container").css({
                        "z-index": "auto"
                    })
                }), !1) : void 0
            }), t("input").placeholder()
        }
    }
}), define("headroom", [], function() {
    return function(e, t) {
        "use strict";
        function n(e) {
            this.callback = e, this.ticking=!1
        }
        function i(t) {
            return t && "undefined" != typeof e && (t === e || t.nodeType)
        }
        function o(e) {
            if (arguments.length <= 0)
                throw new Error("Missing arguments in extend function");
            var t, n, a = e || {};
            for (n = 1; n < arguments.length; n++) {
                var s = arguments[n] || {};
                for (t in s)
                    "object" != typeof a[t] || i(a[t]) ? a[t] = a[t] || s[t] : a[t] = o(a[t], s[t])
            }
            return a
        }
        function a(e) {
            return e === Object(e) ? e : {
                down: e,
                up: e
            }
        }
        function s(e, t) {
            t = o(t, s.options), this.lastKnownScrollY = 0, this.elem = e, this.debouncer = new n(this.update.bind(this)), this.tolerance = a(t.tolerance), this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised=!1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop
        }
        var r = {
            bind: !!function() {}.bind,
            classList: "classList"in t.documentElement,
            rAF: !!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame)
        };
        e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame, n.prototype = {
            constructor: n,
            update: function() {
                this.callback && this.callback(), this.ticking=!1
            },
            requestTick: function() {
                this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking=!0)
            },
            handleEvent: function() {
                this.requestTick()
            }
        }, s.prototype = {
            constructor: s,
            init: function() {
                return s.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
            },
            destroy: function() {
                var e = this.classes;
                this.initialised=!1, this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
            },
            attachEvent: function() {
                this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised=!0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
            },
            unpin: function() {
                var e = this.elem.classList, t = this.classes;
                (e.contains(t.pinned) ||!e.contains(t.unpinned)) && (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this))
            },
            pin: function() {
                var e = this.elem.classList, t = this.classes;
                e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this))
            },
            top: function() {
                var e = this.elem.classList, t = this.classes;
                e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this))
            },
            notTop: function() {
                var e = this.elem.classList, t = this.classes;
                e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this))
            },
            getScrollY: function() {
                return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (t.documentElement || t.body.parentNode || t.body).scrollTop
            },
            getViewportHeight: function() {
                return e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
            },
            getDocumentHeight: function() {
                var e = t.body, n = t.documentElement;
                return Math.max(e.scrollHeight, n.scrollHeight, e.offsetHeight, n.offsetHeight, e.clientHeight, n.clientHeight)
            },
            getElementHeight: function(e) {
                return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
            },
            getScrollerHeight: function() {
                return this.scroller === e || this.scroller === t.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
            },
            isOutOfBounds: function(e) {
                var t = 0 > e, n = e + this.getViewportHeight() > this.getScrollerHeight();
                return t || n
            },
            toleranceExceeded: function(e, t) {
                return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t]
            },
            shouldUnpin: function(e, t) {
                var n = e > this.lastKnownScrollY, i = e >= this.offset;
                return n && i && t
            },
            shouldPin: function(e, t) {
                var n = e < this.lastKnownScrollY, i = e <= this.offset;
                return n && t || i
            },
            update: function() {
                var e = this.getScrollY(), t = e > this.lastKnownScrollY ? "down": "up", n = this.toleranceExceeded(e, t);
                this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e)
            }
        }, s.options = {
            tolerance: {
                up: 0,
                down: 0
            },
            offset: 0,
            scroller: e,
            classes: {
                pinned: "headroom--pinned",
                unpinned: "headroom--unpinned",
                top: "headroom--top",
                notTop: "headroom--not-top",
                initial: "headroom"
            }
        }, s.cutsTheMustard = "undefined" != typeof r && r.rAF && r.bind && r.classList, e.Headroom = s
    }(window, document), Headroom
}), define("page/include/guest", ["require", "jquery", "page/include/page", "headroom"], function(e) {
    var t = (e("jquery"), e("page/include/page")), n = e("headroom");
    return {
        ready: function() {
            t.ready();
            var e = document.querySelector(".navbar-guest");
            if (e) {
                new n(e, {
                    offset: 5,
                    tolerance: 20
                }).init()
            }
        }
    }
}), define("bootstrap/carousel", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            return this.each(function() {
                var i = e(this), o = i.data("bs.carousel"), a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t), s = "string" == typeof t ? t: a.slide;
                o || i.data("bs.carousel", o = new n(this, a)), "number" == typeof t ? o.to(t) : s ? o[s]() : a.interval && o.pause().cycle()
            })
        }
        var n = function(t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause&&!("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.2", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
                }
                e.preventDefault()
            }
        }, n.prototype.cycle = function(t) {
            return t || (this.paused=!1), this.interval && clearInterval(this.interval), this.options.interval&&!this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
        }, n.prototype.getItemForDirection = function(e, t) {
            var n = this.getItemIndex(t), i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
            if (i&&!this.options.wrap)
                return t;
            var o = "prev" == e?-1 : 1, a = (n + o)%this.$items.length;
            return this.$items.eq(a)
        }, n.prototype.to = function(e) {
            var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
        }, n.prototype.pause = function(t) {
            return t || (this.paused=!0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, n.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, n.prototype.slide = function(t, i) {
            var o = this.$element.find(".item.active"), a = i || this.getItemForDirection(t, o), s = this.interval, r = "next" == t ? "left": "right", l = this;
            if (a.hasClass("active"))
                return this.sliding=!1;
            var c = a[0], u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: r
            });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding=!0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = e(this.$indicators.children()[this.getItemIndex(a)]);
                    d && d.addClass("active")
                }
                var p = e.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: r
                });
                return e.support.transition && this.$element.hasClass("slide") ? (a.addClass(t), a[0].offsetWidth, o.addClass(r), a.addClass(r), o.one("bsTransitionEnd", function() {
                    a.removeClass([t, r].join(" ")).addClass("active"), o.removeClass(["active", r].join(" ")), l.sliding=!1, setTimeout(function() {
                        l.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), a.addClass("active"), this.sliding=!1, this.$element.trigger(p)), s && this.cycle(), this
            }
        };
        var i = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = i, this
        };
        var o = function(n) {
            var i, o = e(this), a = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (a.hasClass("carousel")) {
                var s = e.extend({}, a.data(), o.data()), r = o.attr("data-slide-to");
                r && (s.interval=!1), t.call(a, s), r && a.data("bs.carousel").to(r), n.preventDefault()
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
            e('[data-ride="carousel"]').each(function() {
                var n = e(this);
                t.call(n, n.data())
            })
        })
    }(e), {}
}), define("module/transition", ["require", "jquery"], function(e) {
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    var n = e("jquery"), i = {
        ready: function() {
            n.support.transition = t(), n.support.transition && (n.event.special.bsTransitionEnd = {
                bindType: n.support.transition.end,
                delegateType: n.support.transition.end,
                handle: function(e) {
                    return n(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        }
    };
    return n.fn.emulateTransitionEnd = function(e) {
        var t=!1, i = this;
        n(this).one("bsTransitionEnd", function() {
            t=!0
        });
        var o = function() {
            t || n(i).trigger(n.support.transition.end)
        };
        return setTimeout(o, e), this
    }, i
}), define("page/features", ["require", "jquery", "page/include/guest", "bootstrap/carousel", "module/transition"], function(e) {
    var t = e("jquery"), n = e("page/include/guest"), i = (e("bootstrap/carousel"), e("module/transition"));
    t(".page.features").ready(function() {
        n.ready(), i.ready()
    })
}), define("module/form", ["require", "jquery"], function(e) {
    var t = e("jquery");
    return {
        ready: function() {
            var e = t(":submit");
            e.is(".ladda-button") && e.ladda(), t("form").on("submit", function() {
                var e = t(this).find(":submit");
                e.is(".ladda-button") && e.ladda("start")
            })
        }
    }
}), define("page/forgot", ["require", "jquery", "page/include/guest", "module/form"], function(e) {
    var t = e("jquery"), n = e("page/include/guest"), i = e("module/form");
    t(".page.forgot").ready(function() {
        n.ready(), i.ready()
    })
}), define("page/index", ["require", "page/include/guest", "jquery"], function(e) {
    var t = e("page/include/guest"), n = e("jquery");
    n(".page.index").ready(function() {
        t.ready()
    })
}), define("page/login", ["require", "jquery", "page/include/guest", "module/form"], function(e) {
    var t = e("jquery"), n = e("page/include/guest"), i = e("module/form");
    t(".page.login").ready(function() {
        n.ready(), i.ready()
    })
}), define("page/maintenance", ["require", "jquery", "page/include/page"], function(e) {
    var t = e("jquery"), n = e("page/include/page");
    t(".page.maintenance").ready(function() {
        n.ready(), setInterval(function() {
            location.reload()
        }, 15e3)
    })
}), define("ajaxq", ["jquery"], function(e) {
    return function(e) {
        var t = {}, n = {};
        e.ajaxq = function(i, o) {
            function a(e) {
                if (t[i])
                    t[i].push(e);
                else {
                    t[i] = [];
                    var o = e();
                    n[i] = o
                }
            }
            function s() {
                if (t[i]) {
                    var e = t[i].shift();
                    if (e) {
                        var o = e();
                        n[i] = o
                    } else
                        delete t[i], delete n[i]
                }
            }
            if ("undefined" == typeof o)
                throw "AjaxQ: queue name is not provided";
            var r = e.Deferred(), l = r.promise();
            l.success = l.done, l.error = l.fail, l.complete = l.always;
            var c = e.extend(!0, {}, o);
            return a(function() {
                var t = e.ajax.apply(window, [c]);
                return t.done(function() {
                    r.resolve.apply(this, arguments)
                }), t.fail(function() {
                    r.reject.apply(this, arguments)
                }), t.always(s), t
            }), l
        }, e.each(["getq", "postq"], function(t, n) {
            e[n] = function(t, i, o, a, s) {
                return e.isFunction(o) && (s = s || a, a = o, o = void 0), e.ajaxq(t, {
                    type: "postq" === n ? "post": "get",
                    url: i,
                    data: o,
                    success: a,
                    dataType: s
                })
            }
        });
        var i = function(e) {
            return t.hasOwnProperty(e)
        }, o = function() {
            for (var e in t)
                if (i(e))
                    return !0;
            return !1
        };
        e.ajaxq.isRunning = function(e) {
            return e ? i(e) : o()
        }, e.ajaxq.getActiveRequest = function(e) {
            if (!e)
                throw "AjaxQ: queue name is required";
            return n[e]
        }, e.ajaxq.abort = function(i) {
            if (!i)
                throw "AjaxQ: queue name is required";
            var o = e.ajaxq.getActiveRequest(i);
            delete t[i], delete n[i], o && o.abort()
        }, e.ajaxq.clear = function(e) {
            if (e)
                t[e] && (t[e] = []);
            else
                for (var n in t)
                    t.hasOwnProperty(n) && (t[n] = [])
        }
    }(e), {}
}), define("bootstrap/modal", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t, i) {
            return this.each(function() {
                var o = e(this), a = o.data("bs.modal"), s = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
                a || o.data("bs.modal", a = new n(this, s)), "string" == typeof t ? a[t](i) : s.show && a.show(i)
            })
        }
        var n = function(t, n) {
            this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.2", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e)
        }, n.prototype.show = function(t) {
            var i = this, o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown=!0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
                var o = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
                var a = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                o ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(a)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
            }))
        }, n.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown&&!t.isDefaultPrevented() && (this.isShown=!1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(t) {
            var i = this, o = this.$element.hasClass("fade") ? "fade": "";
            if (this.isShown && this.options.backdrop) {
                var a = e.support.transition && o;
                if (this.$backdrop = e('<div class="modal-backdrop ' + o + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)
                    return;
                a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function() {
                    i.removeBackdrop(), t && t()
                };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else
                t && t()
        }, n.prototype.handleUpdate = function() {
            this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
        }, n.prototype.adjustBackdrop = function() {
            this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
        }, n.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth: "",
                paddingRight: this.bodyIsOverflowing&&!e ? this.scrollbarWidth: ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", "")
        }, n.prototype.measureScrollbar = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var i = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
            return e.fn.modal = i, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = e(this), o = i.attr("href"), a = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), s = a.data("bs.modal") ? "toggle": e.extend({
                remote: !/#/.test(o) && o
            }, a.data(), i.data());
            i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(e) {
                e.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), t.call(a, s, this)
        })
    }(e), {}
}), define("text!include/alert.html", [], function() {
    return '<div class="modal modal-alert fade" tabindex="-1" aria-hidden="true">\r\n    <div class="modal-dialog modal-md">\r\n        <div class="modal-content">\r\n            <div class="modal-header">\r\n                <i class="fa fa-close pull-right" data-dismiss="modal" aria-label="Close"></i>\r\n                <h4 class="modal-title">\r\n                    <i class="fa fa-warning"></i>\r\n                    Oops!<span class="hidden-xs"> Something went wrong.</span>\r\n                </h4>\r\n            </div>\r\n            <div class="modal-body" id="alert-message"></div>\r\n        </div>\r\n    </div>\r\n</div>'
}), define("module/alert", ["require", "jquery", "module/popover", "bootstrap/modal"], function(e) {
    var t = e("jquery"), n = e("module/popover"), i = (e("bootstrap/modal"), {
        params: {
            isOpen: !1
        },
        elements: {
            $alert: null
        },
        functions: {
            buildAlert: function(e, t, n) {
                i.params.$alert = e, i.params.$alert.on("shown.bs.modal", function() {
                    i.params.isOpen=!0, n && n()
                }), i.params.$alert.on("hidden.bs.modal", function() {
                    i.params.isOpen=!1, t && t()
                }), i.params.$alert.modal({
                    backdrop: "static",
                    keyboard: !1
                })
            },
            showAlert: function(o, a, s) {
                i.params.isOpen || (e(["text!include/alert.html"], function(e) {
                    var a = t(e);
                    i.functions.buildAlert(a, s, function() {
                        a.find("#alert-message").html(o), n.init()
                    })
                }), a && analytics.track("Alert: " + a, {}))
            },
            hideAlert: function() {
                i.params.$alert.modal("hide")
            },
            showUploadFailedAlert: function(e) {
                var n = "<b>" + e.length + " of your files didn't import</b>.<br> Uploads may fail for <a class='no-wrap' href='#' data-toggle='popover' data-placement='bottom' data-html='true' data-content='<small><b>Unsupported format</b><br> Uploads must be of type <i>JPG, PNG, GIF, BMP, TIF, CR2, NEF, PSD ( + TTF, OTF for fonts )</i>. <br><hr><b>Upload error</b><br> Re-try uploading the file or contact support. <br><hr><b>Corrupt file</b><br> File is corrupt beyond repair and can not be uploaded.</small>'><b>various reasons</b> <i class='fa fa-question-circle'></i></a>.<br><br>";
                n += "<div class='failed-uploads'>", t.each(e, function(e, t) {
                    n += "<b>" + t.name + "</b> <span class='text-danger'>( " + t.reason + " )</span><br>"
                }), n += "</div>", i.functions.showAlert(n)
            },
            showContentNotAvailableAlert: function(e) {
                i.functions.showAlert("<b>" + e + "</b><br><a href='javascript: location.reload();'>Click here to refresh this page</a>")
            },
            showCardDeclinedAlert: function(e) {
                i.functions.showAlert("<b>" + e + "</b><br> Cards may get declined for <a class='no-wrap' href='#' data-toggle='popover' data-placement='bottom' data-html='true' data-content='<small><b>1. Inaccurate card info entered.</b> Verify all entered card information. <br><hr><b>2. Insufficient funds.</b> Verify that you have enough money on your card. <br><hr><b>3. Some cards require a PIN</b> to be entered. If you are trying to use one of these cards, please use another card.<br><hr><b>4. Restricted cross-border usage</b>. Some cards will not work if they are issued in a country other than where your business is located.<br><hr><b>5. Restricted business category</b> Some cards can only be used in specific categories like travel or health care.</small>'><b>various reasons</b> <i class='fa fa-question-circle'></i></a>. <br><br> If none of these reasons apply to you, let us know.")
            }
        }
    });
    return i
}), define("module/ajax", ["require", "jquery", "ajaxq", "module/alert"], function(e) {
    function t(e, t, o, a, s, r, l) {
        var c = {
            type: e,
            url: window.pageVars.site_url + t,
            data: o,
            cache: !1,
            dataType: "json",
            complete: function(n, i, a) {
                var s = "Ajax Success";
                401 == n.status ? s = "Ajax Authentication Error" : 402 == n.status ? s = "Ajax Validation Error" : 200 != n.status && (s = "Ajax Error"), n && 200 == n.status || analytics.track(s, {
                    method: e,
                    script: t,
                    data: o,
                    xhr: n,
                    status: i,
                    thrown: a
                }), r && r(n)
            },
            success: function(e, t, n) {
                a && a(e)
            },
            error: function(e, t, n) {
                var o = e.responseJSON;
                if (401 == e.status)
                    location.href = window.pageVars.site_url + "login";
                else if (o) {
                    var a = o.error ? o.error: "<b>Error " + e.status + " : " + n + "</b>. Please contact support!";
                    "404" == o.code ? (a = "This content no longer exists.", i.functions.showContentNotAvailableAlert(a)) : "card_declined" == o.code ? i.functions.showCardDeclinedAlert(a) : i.functions.showAlert(a)
                }
                s && s(o)
            }
        }, u = {
            processData: !1,
            contentType: !1
        };
        l && n.extend(c, u), n.ajaxq("queue", c)
    }
    var n = e("jquery"), i = (e("ajaxq"), e("module/alert"));
    return {
        get: function(e, n, i, o, a, s) {
            t("GET", e, n, i, o, a, s)
        },
        post: function(e, n, i, o, a, s) {
            t("POST", e, n, i, o, a, s);
        }
    }
}), define("page/include/application", ["require", "page/include/page"], function(e) {
    var t = e("page/include/page");
    return {
        ready: function() {
            t.ready()
        }
    }
}), define("bootstrap/button", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            return this.each(function() {
                var i = e(this), o = i.data("bs.button"), a = "object" == typeof t && t;
                o || i.data("bs.button", o = new n(this, a)), "toggle" == t ? o.toggle() : t && o.setState(t)
            })
        }
        var n = function(t, i) {
            this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading=!1
        };
        n.VERSION = "3.3.2", n.DEFAULTS = {
            loadingText: "loading..."
        }, n.prototype.setState = function(t) {
            var n = "disabled", i = this.$element, o = i.is("input") ? "val": "html", a = i.data();
            t += "Text", null == a.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
                i[o](null == a[t] ? this.options[t] : a[t]), "loadingText" == t ? (this.isLoading=!0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading=!1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, n.prototype.toggle = function() {
            var e=!0, t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e=!1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
            } else
                this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            e && this.$element.toggleClass("active")
        };
        var i = e.fn.button;
        e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
            return e.fn.button = i, this
        }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = e(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), n.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
            e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(e), {}
}), function(e) {
    "function" == typeof define && define.amd ? define("module/jquery.spotlight", ["jquery"], e) : e(jQuery)
}(function(e) {
    function t(e, t) {
        var n = {
            position: e.css("position"),
            "z-index": e.css("z-index")
        };
        return e.addClass("spotlight").css("position", "relative").css("z-index", t.zindex), {
            $element: e,
            css: n
        }
    }
    function n(e) {
        e.$element.removeClass("spotlight").css("position", e.css.position).css("z-index", e.css["z-index"])
    }
    function i(t) {
        t.scroll || a(!1), r || (r = e("<div />").attr("id", t.overlay)), r.prependTo(e("body")), l=!0
    }
    function o(e) {
        a(!0), r.remove(), e(), l=!1
    }
    function a(t) {
        var n = e("html"), i = e("body");
        if (t) {
            if (n.hasClass("noscroll")) {
                var o = parseInt(n.css("top"));
                n.removeClass("noscroll").scrollTop( - o), i.scrollTop( - o)
            }
        } else if (e(document).height() > e(window).height()) {
            var o = n.scrollTop() ? n.scrollTop(): i.scrollTop();
            n.addClass("noscroll").css("top", - o)
        }
    }
    var s, r, l;
    e.fn.spotlight = function(o) {
        var a = e(this), r = e.extend({
            zindex: 900,
            overlay: "spotlight-overlay",
            opacity: .8,
            scroll: !1
        }, o);
        s && n(s), s = t(a, r), l || i(r)
    }, e.spotlight = {
        off: function() {
            l && o(function() {
                n(s), s = null
            })
        }
    }
}), define("text!include/confirm.html", [], function() {
    return '<div id="confirm">\r\n	<form>\r\n		<div class="form-group">\r\n			<p class="message"></p>\r\n		</div>\r\n		<div class="form-group text-center">\r\n			<div class="has-feedback col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">\r\n				<input type="text" name="input" class="form-control">\r\n				<span class="form-control-feedback fa"></span>\r\n			</div>\r\n		</div>\r\n		<div class="form-group col-sm-12">\r\n			<button type="submit" class="accept btn btn-primary" data-style="expand-right" value="Confirm"></button>\r\n			<button type="button" class="reject btn btn-default">Cancel</button>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n'
}), define("module/confirm", ["require", "jquery", "module/jquery.spotlight"], function(e) {
    var t = e("jquery"), n = (e("module/jquery.spotlight"), {
        "default": {
            isOpen: !1,
            message: "Are you sure you want to perform this action?",
            accept: {
                text: "Confirm",
                type: "success"
            },
            reject: {
                text: "Cancel",
                type: "default"
            },
            form: {
                input: !1,
                inputval: "",
                placeholder: null
            },
            $spotlight: t("body"),
            onAccept: function(e) {
                return !0
            },
            onReject: function() {
                return !0
            }
        },
        params: {},
        elements: {
            $confirm: null
        },
        functions: {
            buildConfirm: function(e) {
                n.params = t.extend({}, n["default"], e), t("body").prepend(n.elements.$confirm), n.elements.$form = n.elements.$confirm.find("form"), n.elements.$input = n.elements.$form.find("input[type='text']"), n.elements.$accept = n.elements.$confirm.find(".accept"), n.elements.$reject = n.elements.$confirm.find(".reject"), n.params.form.input ? n.elements.$input.val(n.params.form.inputval).attr("placeholder", n.params.form.placeholder).parent().parent().show() : n.elements.$input.parent().parent().hide(), n.elements.$form.off("submit").one("submit", function(e) {
                    e.preventDefault(), n.functions.onAccept()
                }).one("click", function(e) {
                    e.stopPropagation()
                }), n.elements.$confirm.find(".message").html(n.params.message), n.elements.$accept.attr({
                    disabled: !1
                }), n.elements.$reject.attr({
                    disabled: !1
                }), n.elements.$accept.attr("class", "accept btn ladda-button btn-" + n.params.accept.type).html(n.params.accept.text), n.elements.$accept.ladda(), n.elements.$reject.attr("class", "reject btn btn-" + n.params.reject.type).html(n.params.reject.text).one("click", function(e) {
                    e.stopPropagation(), !t(this).is(":disabled") && n.functions.onReject()
                }), n.elements.$confirm.css("bottom", - n.elements.$confirm.outerHeight() + "px"), n.params.$spotlight.spotlight(), n.elements.$confirm.animate({
                    bottom: 0
                }, {
                    duration: 300,
                    complete: function() {
                        n.elements.$input.focus()
                    }
                })
            },
            showConfirm: function(i) {
                n.elements.$confirm ? (n.functions.buildConfirm(i), n.params.isOpen=!0) : e(["text!include/confirm.html"], function(e) {
                    n.elements.$confirm = t(e), n.functions.buildConfirm(i), n.params.isOpen=!0
                })
            },
            hideConfirm: function() {
                return n.params.isOpen ? (t.spotlight.off(), void n.elements.$confirm.animate({
                    bottom : - n.elements.$confirm.outerHeight()
                }, {
                    duration : 300, complete : function() {
                        n.params.isOpen=!1
                    }
                })): !1
            },
            onAccept: function() {
                var e = n.elements.$confirm.find(".btn"), t = n.elements.$confirm.find(".accept");
                if (!t.is(":disabled")) {
                    e.prop("disabled", !0), t.ladda("start");
                    var i = n.elements.$confirm.find("input");
                    n.params.onAccept(i.val()) && n.functions.hideConfirm()
                }
            },
            onReject: function() {
                var e = n.elements.$confirm.find(".btn"), t = n.elements.$confirm.find(".reject");
                t.is(":disabled") || (e.prop("disabled", !0), n.params.onReject() && n.functions.hideConfirm())
            }
        }
    });
    return t(function() {
        t(document).on("keyup", function(e) {
            if (n.params.isOpen) {
                var i = e.which || e.keyCode;
                return 13 == i&&!t(e.target).is("input") && n.functions.onAccept(), 27 == i && n.functions.onReject(), !1
            }
        })
    }), n
}), define("page/plans", ["require", "jquery", "module/ajax", "page/include/application", "page/include/guest", "bootstrap/button", "module/notify", "module/confirm", "module/client"], function(e) {
    var t = e("jquery"), n = (e("module/ajax"), e("page/include/application"));
    e("page/include/guest"), e("bootstrap/button"), e("module/notify"), e("module/confirm"), e("module/client");
    t(".page.plans").ready(function() {
        n.ready()
    })
}), define("page/privacy", ["require", "page/include/guest", "jquery"], function(e) {
    var t = e("page/include/guest"), n = e("jquery");
    n(".page.privacy").ready(function() {
        t.ready()
    })
}), define("page/register", ["require", "jquery", "page/include/guest", "module/form"], function(e) {
    var t = e("jquery"), n = e("page/include/guest"), i = e("module/form");
    t(".page.register").ready(function() {
        n.ready(), i.ready()
    })
}), define("page/terms", ["require", "page/include/guest", "jquery"], function(e) {
    var t = e("page/include/guest"), n = e("jquery");
    n(".page.terms").ready(function() {
        t.ready()
    })
}), define("guest", ["require", "page/error", "page/features", "page/forgot", "page/index", "page/login", "page/maintenance", "page/plans", "page/privacy", "page/register", "page/terms"], function(e) {
    e("page/error"), e("page/features"), e("page/forgot"), e("page/index"), e("page/login"), e("page/maintenance"), e("page/plans"), e("page/privacy"), e("page/register"), e("page/terms")
}), define("page/account", ["require", "jquery", "module/ajax", "page/include/application", "module/confirm", "module/form", "bootstrap/button", "module/alert", "module/client"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("page/include/application"), o = e("module/confirm"), a = e("module/form"), s = (e("bootstrap/button"), e("module/alert"));
    e("module/client");
    t(".page.account").ready(function() {
        i.ready(), a.ready(), t(".change-plan").on("click", function() {
            var e = t(this), i = e.data("plan-id"), a = e.data("plan-name"), r = a.toLowerCase(), l = e.data("period");
            if ("basic" == r)
                window.pageVars.arrUser.isSubscribed ? o.functions.showConfirm({
                    message: "We are sorry to see you go! If you can, please explain your reason for unsubscribing.",
                    accept: {
                        text: "Unsubscribe",
                        type: "danger"
                    },
                    form: {
                        input: !0
                    },
                    onAccept: function(e) {
                        n.post("subscription/unsubscribe", {
                            reason: e
                        }, function(e) {
                            e.error ? s.functions.showAlert(e.error, "Un-subscribe Failed") : location.reload()
                        })
                    }
                }) : s.functions.showAlert("<b>It looks like you have already un-subscribed from your plan</b>. Your account will be switched to the Basic plan on subscription end.", "Already Un-subscribed");
            else {
                var c = {
                    gateway: "stripe",
                    plan: i
                };
                o.functions.showConfirm({
                    message: "Are you sure you want to switch to the <b>" + a + ("yearly" == l ? " Annual" : "") + "</b> plan?",
                    accept: {
                        text: "Switch Plan",
                        type: "primary"
                    },
                    onAccept: function() {
                        n.post("subscription/subscribe", c, function(e) {
                            e.error ? location.href = window.pageVars.site_url + "plans/" + l + "/" + r : location.reload()
                        }, function(e) {
                            o.functions.hideConfirm()
                        })
                    }
                })
            }
        }), t("#resubscribe").on("click", function() {
            n.post("subscription/resubscribe", {}, function(e) {
                e.error ? s.functions.showAlert(e.error, "Re-subscribe Failed") : location.reload()
            })
        })
    })
}), define("page/billing", ["require", "jquery", "page/include/application"], function(e) {
    var t = e("jquery"), n = e("page/include/application");
    t(".page.billing").ready(function() {
        n.ready()
    })
}), define("jquery.payment", ["jquery"], function(e) {
    return function() {
        var t, n, i, o, a, s, r, l, c, u, d, p, h, f, m, g, v, y, b, w, x, C = [].slice, k = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e)
                    return t;
            return - 1
        };
        e.payment = {}, e.payment.fn = {}, e.fn.payment = function() {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? C.call(arguments, 1) : [], e.payment.fn[n].apply(this, t)
        }, o = /(\d{1,4})/g, e.payment.cards = i = [{
            type: "visaelectron",
            pattern: /^4(026|17500|405|508|844|91[37])/,
            format: o,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "maestro",
            pattern: /^(5(018|0[23]|[68])|6(39|7))/,
            format: o,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "forbrugsforeningen",
            pattern: /^600/,
            format: o,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "dankort",
            pattern: /^5019/,
            format: o,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "visa",
            pattern: /^4/,
            format: o,
            length: [13, 16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "mastercard",
            pattern: /^5[0-5]/,
            format: o,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0
        }, {
            type: "dinersclub",
            pattern: /^3[0689]/,
            format: o,
            length: [14],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "discover",
            pattern: /^6([045]|22)/,
            format: o,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "unionpay",
            pattern: /^(62|88)/,
            format: o,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1
        }, {
            type: "jcb",
            pattern: /^35/,
            format: o,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }
        ], t = function(e) {
            var t, n, o;
            for (e = (e + "").replace(/\D/g, ""), n = 0, o = i.length; o > n; n++)
                if (t = i[n], t.pattern.test(e))
                    return t
        }, n = function(e) {
            var t, n, o;
            for (n = 0, o = i.length; o > n; n++)
                if (t = i[n], t.type === e)
                    return t
        }, p = function(e) {
            var t, n, i, o, a, s;
            for (i=!0, o = 0, n = (e + "").split("").reverse(), a = 0, s = n.length; s > a; a++)
                t = n[a], t = parseInt(t, 10), (i=!i) && (t*=2), t > 9 && (t -= 9), o += t;
            return o%10 === 0
        }, d = function(e) {
            var t;
            return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd")?!0 : null != ("undefined" != typeof document && null !== document && null != (t = document.selection) ? t.createRange : void 0) && document.selection.createRange().text?!0 : !1
        }, g = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = i.replace(/\D/g, ""), n.val(i)
            })
        }, f = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = e.payment.formatCardNumber(i), n.val(i)
            })
        }, r = function(n) {
            var i, o, a, s, r, l, c;
            return a = String.fromCharCode(n.which), !/^\d+$/.test(a) || (i = e(n.currentTarget), c = i.val(), o = t(c + a), s = (c.replace(/\D/g, "") + a).length, l = 16, o && (l = o.length[o.length.length - 1]), s >= l || null != i.prop("selectionStart") && i.prop("selectionStart") !== c.length) ? void 0 : (r = o && "amex" === o.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, r.test(c) ? (n.preventDefault(), setTimeout(function() {
                return i.val(c + " " + a)
            })) : r.test(c + a) ? (n.preventDefault(), setTimeout(function() {
                return i.val(c + a + " ")
            })) : void 0)
        }, a = function(t) {
            var n, i;
            return n = e(t.currentTarget), i = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== i.length ? void 0 : /\d\s$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d\s$/, ""))
            })) : /\s\d?$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d$/, ""))
            })) : void 0
        }, m = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = e.payment.formatExpiry(i), n.val(i)
            })
        }, l = function(t) {
            var n, i, o;
            return i = String.fromCharCode(t.which), /^\d+$/.test(i) ? (n = e(t.currentTarget), o = n.val() + i, /^\d$/.test(o) && "0" !== o && "1" !== o ? (t.preventDefault(), setTimeout(function() {
                return n.val("0" + o + " / ")
            })) : /^\d\d$/.test(o) ? (t.preventDefault(), setTimeout(function() {
                return n.val("" + o + " / ")
            })) : void 0) : void 0
        }, c = function(t) {
            var n, i, o;
            return i = String.fromCharCode(t.which), /^\d+$/.test(i) ? (n = e(t.currentTarget), o = n.val(), /^\d\d$/.test(o) ? n.val("" + o + " / ") : void 0) : void 0
        }, u = function(t) {
            var n, i, o;
            return o = String.fromCharCode(t.which), "/" === o || " " === o ? (n = e(t.currentTarget), i = n.val(), /^\d$/.test(i) && "0" !== i ? n.val("0" + i + " / ") : void 0) : void 0
        }, s = function(t) {
            var n, i;
            return n = e(t.currentTarget), i = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== i.length ? void 0 : /\d\s\/\s$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d\s\/\s$/, ""))
            })) : void 0
        }, h = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = i.replace(/\D/g, "").slice(0, 4), n.val(i)
            })
        }, w = function(e) {
            var t;
            return e.metaKey || e.ctrlKey?!0 : 32 === e.which?!1 : 0 === e.which?!0 : e.which < 33?!0 : (t = String.fromCharCode(e.which), !!/[\d\s]/.test(t))
        }, y = function(n) {
            var i, o, a, s;
            return i = e(n.currentTarget), a = String.fromCharCode(n.which), /^\d+$/.test(a)&&!d(i) ? (s = (i.val() + a).replace(/\D/g, ""), o = t(s), o ? s.length <= o.length[o.length.length - 1] : s.length <= 16) : void 0
        }, b = function(t) {
            var n, i, o;
            return n = e(t.currentTarget), i = String.fromCharCode(t.which), /^\d+$/.test(i)&&!d(n) ? (o = n.val() + i, o = o.replace(/\D/g, ""), o.length > 6?!1 : void 0) : void 0
        }, v = function(t) {
            var n, i, o;
            return n = e(t.currentTarget), i = String.fromCharCode(t.which), /^\d+$/.test(i)&&!d(n) ? (o = n.val() + i, o.length <= 4) : void 0
        }, x = function(t) {
            var n, o, a, s, r;
            return n = e(t.currentTarget), r = n.val(), s = e.payment.cardType(r) || "unknown", n.hasClass(s) ? void 0 : (o = function() {
                var e, t, n;
                for (n = [], e = 0, t = i.length; t > e; e++)
                    a = i[e], n.push(a.type);
                return n
            }(), n.removeClass("unknown"), n.removeClass(o.join(" ")), n.addClass(s), n.toggleClass("identified", "unknown" !== s), n.trigger("payment.cardType", s))
        }, e.payment.fn.formatCardCVC = function() {
            return this.on("keypress", w), this.on("keypress", v), this.on("paste", h), this.on("change", h), this.on("input", h), this
        }, e.payment.fn.formatCardExpiry = function() {
            return this.on("keypress", w), this.on("keypress", b), this.on("keypress", l), this.on("keypress", u), this.on("keypress", c), this.on("keydown", s), this.on("change", m), this.on("input", m), this
        }, e.payment.fn.formatCardNumber = function() {
            return this.on("keypress", w), this.on("keypress", y), this.on("keypress", r), this.on("keydown", a), this.on("keyup", x), this.on("paste", f), this.on("change", f), this.on("input", f), this.on("input", x), this
        }, e.payment.fn.restrictNumeric = function() {
            return this.on("keypress", w), this.on("paste", g), this.on("change", g), this.on("input", g), this
        }, e.payment.fn.cardExpiryVal = function() {
            return e.payment.cardExpiryVal(e(this).val())
        }, e.payment.cardExpiryVal = function(e) {
            var t, n, i, o;
            return e = e.replace(/\s/g, ""), o = e.split("/", 2), t = o[0], i = o[1], 2 === (null != i ? i.length : void 0) && /^\d+$/.test(i) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), i = n + i), t = parseInt(t, 10), i = parseInt(i, 10), {
                month: t,
                year: i
            }
        }, e.payment.validateCardNumber = function(e) {
            var n, i;
            return e = (e + "").replace(/\s+|-/g, ""), /^\d+$/.test(e) ? (n = t(e), n ? (i = e.length, k.call(n.length, i) >= 0 && (n.luhn===!1 || p(e))) : !1) : !1
        }, e.payment.validateCardExpiry = function(t, n) {
            var i, o, a;
            return "object" == typeof t && "month"in t && (a = t, t = a.month, n = a.year), t && n ? (t = e.trim(t), n = e.trim(n), /^\d+$/.test(t) && /^\d+$/.test(n) && t >= 1 && 12 >= t ? (2 === n.length && (n = 70 > n ? "20" + n : "19" + n), 4 !== n.length?!1 : (o = new Date(n, t), i = new Date, o.setMonth(o.getMonth() - 1), o.setMonth(o.getMonth() + 1, 1), o > i)) : !1) : !1
        }, e.payment.validateCardCVC = function(t, i) {
            var o, a;
            return t = e.trim(t), /^\d+$/.test(t) ? (o = n(i), null != o ? (a = t.length, k.call(o.cvcLength, a) >= 0) : t.length >= 3 && t.length <= 4) : !1
        }, e.payment.cardType = function(e) {
            var n;
            return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
        }, e.payment.formatCardNumber = function(n) {
            var i, o, a, s;
            return n = n.replace(/\D/g, ""), (i = t(n)) ? (a = i.length[i.length.length - 1], n = n.slice(0, a), i.format.global ? null != (s = n.match(i.format)) ? s.join(" ") : void 0 : (o = i.format.exec(n), null != o ? (o.shift(), o = e.grep(o, function(e) {
                return e
            }), o.join(" ")) : void 0)) : n
        }, e.payment.formatExpiry = function(e) {
            var t, n, i, o;
            return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", i = n[2] || "", o = n[3] || "", o.length > 0 ? i = " / " : " /" === i ? (t = t.substring(0, 1), i = "") : 2 === t.length || i.length > 0 ? i = " / " : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, i = " / "), t + i + o) : ""
        }
    }.call(this), {}
}), function(e) {
    "function" == typeof define && define.amd ? define("module/jquery.stripe", ["jquery", "jquery.payment"], e) : e(jQuery)
}(function(e) {
    var t, n = {
        key: "",
        fields: {},
        onStripeResponse: function(e, t) {}
    };
    e.fn.stripe = function(i) {
        t = e.extend({}, n, i), Stripe.setPublishableKey(t.key);
        var o = e(t.fields.number), a = e(t.fields.expiry), s = e(t.fields.cvc);
        o.payment("formatCardNumber"), a.payment("formatCardExpiry"), s.payment("formatCardCVC"), e(this).submit(function(n) {
            n.preventDefault();
            var i = a.payment("cardExpiryVal"), r = {
                number: o.val(),
                exp_month: i.month,
                exp_year: i.year,
                cvc: s.val(),
                name: e(t.fields.name).val(),
                address_country: e(t.fields.address_country).val(),
                address_city: e(t.fields.address_city).val(),
                address_state: e(t.fields.address_state).val(),
                address_zip: e(t.fields.address_zip).val(),
                address_line1: e(t.fields.address_line1).val()
            };
            Stripe.card.createToken(r, t.onStripeResponse)
        })
    }
}), define("page/billingupdate", ["require", "jquery", "module/ajax", "page/include/application", "module/jquery.stripe", "module/notify", "module/form"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("page/include/application"), o = (e("module/jquery.stripe"), e("module/notify")), a = e("module/form");
    t(".page.billingupdate").ready(function() {
        function e(e) {
            var n = r.find(":submit");
            n.is(".ladda-button") && n.ladda("stop");
            var i = s(e.code);
            i && t(i).parent().addClass("has-error"), o.functions.showNotify({
                type: "danger",
                message: e.message
            })
        }
        function s(e) {
            switch (e) {
            case"incorrect_number":
            case"invalid_number":
            case"expired_card":
            case"card_declined":
                return ".cc-number";
            case"invalid_cvc":
            case"incorrect_cvc":
                return ".cc-cvc";
            case"invalid_expiry_month":
            case"invalid_expiry_year":
                return ".cc-exp";
            case"incorrect_zip":
                return ".v-postal";
            case"invalid_email":
                return ".v-email"
            }
        }
        var r = t("#payment-form");
        i.ready(), a.ready(), r.stripe({
            key: window.pageVars.strStripeApiKey,
            fields: {
                number: ".cc-number",
                expiry: ".cc-exp",
                cvc: ".cc-cvc",
                name: 'input[name="strName"]',
                address_country: 'select[name="strCountryCode"]',
                address_city: 'input[name="strCity"]',
                address_state: 'input[name="strState"]',
                address_zip: 'input[name="strPostal"]',
                address_line1: 'input[name="strAddress"]'
            },
            onStripeResponse: function(t, i) {
                i.error ? (e(i.error), analytics.track("Stripe Error Occurred", {
                    status: t,
                    stripeResponse: i
                })) : n.post("account/billing/update", {
                    token: i.id
                }, function(e) {
                    analytics.track("Updated Credit Card", {
                        status: t,
                        stripeResponse: i
                    }), location.reload()
                }, function(e) {
                    var n = r.find(":submit");
                    n.is(".ladda-button") && n.ladda("stop"), 200 != t && e.error && o.functions.showNotify({
                        type: "danger",
                        message: e.error
                    })
                })
            }
        }), t("#card-cvc-feedback").click(function() {
            t(this).prev().focus()
        }), t(".form-control").on("focus", function() {
            t(this).parent().removeClass("has-error")
        }), r.find("select[name='strCountryCode']").on("change", function() {
            var e = "City", n = "Region", i = "Postal Code";
            switch (t(this).val()) {
            case"US":
                n = "State", i = "Zip";
                break;
            case"CA":
                n = "Province", i = "Postal Code";
                break;
            case"GB":
                n = "County", i = "Postcode"
            }
            t("#location-label").html(e + " / " + n), t("#zip-label").html(i), r.find("input[name='strCity']").attr({
                placeholder: e
            }), r.find("input[name='strState']").attr({
                placeholder: n
            }), r.find("input[name='strPostal']").attr({
                placeholder: i
            })
        })
    })
}), define("page/subscribe", ["require", "jquery", "module/ajax", "page/include/application", "module/jquery.stripe", "module/notify", "module/form"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("page/include/application"), o = (e("module/jquery.stripe"), e("module/notify")), a = e("module/form");
    t(".page.subscribe").ready(function() {
        function e(e) {
            var n = r.find(":submit");
            n.is(".ladda-button") && n.ladda("stop");
            var i = s(e.code);
            i && t(i).parent().addClass("has-error"), o.functions.showNotify({
                type: "danger",
                message: e.message
            })
        }
        function s(e) {
            switch (e) {
            case"incorrect_number":
            case"invalid_number":
            case"expired_card":
            case"card_declined":
                return ".cc-number";
            case"invalid_cvc":
            case"incorrect_cvc":
                return ".cc-cvc";
            case"invalid_expiry_month":
            case"invalid_expiry_year":
                return ".cc-exp";
            case"incorrect_zip":
                return ".v-postal";
            case"invalid_email":
                return ".v-email"
            }
        }
        var r = t("#payment-form");
        i.ready(), a.ready(), t(".cc-cvc").focus(function() {
            t(".hidden-at-first").removeClass("hidden")
        }), r.stripe({
            key: window.pageVars.strStripeApiKey,
            fields: {
                number: ".cc-number",
                expiry: ".cc-exp",
                cvc: ".cc-cvc",
                name: 'input[name="strName"]',
                address_country: 'select[name="strCountryCode"]',
                address_city: 'input[name="strCity"]',
                address_state: 'input[name="strState"]',
                address_zip: 'input[name="strPostal"]',
                address_line1: 'input[name="strAddress"]'
            },
            onStripeResponse: function(i, a) {
                if (a.error)
                    e(a.error), analytics.track("Stripe Error Occurred", {
                        status: i,
                        stripeResponse: a
                    });
                else {
                    var s = (t("#payment-periods .selected").data("period"), t("#payment-periods .selected").data("plan-id")), l = {
                        gateway: "stripe",
                        token: a.id,
                        plan: s
                    };
                    n.post("subscription/subscribe", l, function(e) {
                        location.href = window.pageVars.site_url + "upgrade/" + e.strPeriod + "/" + e.strPlanName + "/stripe"
                    }, function(e) {
                        var t = r.find(":submit");
                        t.is(".ladda-button") && t.ladda("stop"), 200 != i && e.error && o.functions.showNotify({
                            type: "danger",
                            message: e.error
                        })
                    })
                }
            }
        }), t("#paypal-checkout").click(function() {
            var e = t("#payment-periods .selected").data("period"), i = t("#payment-periods .selected").data("plan-id");
            t(this).addClass("redirecting");
            var o = {
                gateway: "paypal",
                plan: i
            };
            n.post("subscription/subscribe", o, function(e) {
                location.href = e.url
            }), analytics.track("Paypal Checkout Started", {
                period: e,
                plan: i
            })
        }), t("#card-cvc-feedback").click(function() {
            t(this).prev().focus()
        }), t("#payment-tiers > div").on("click", function() {
            var e = t(this);
            e.parent().find(".tier").removeClass("selected"), e.addClass("selected"), t("#photolimit").html(e.find("b").html()), t("#planname").html(e.data("name"))
        }), t("#payment-periods > div").on("click", function() {
            var e = t(this);
            t(this).data("plan-id");
            e.parent().find(".period").removeClass("selected"), e.addClass("selected"), t("#payment-tiers").attr({
                "class": "row payment-tier payment-tier-" + e.data("period")
            })
        }), t(".form-control").on("focus", function() {
            t(this).parent().removeClass("has-error")
        }), r.find("select[name='strCountryCode']").on("change", function() {
            var e = "City", n = "Region", i = "Postal Code";
            switch (t(this).val()) {
            case"US":
                n = "State", i = "Zip";
                break;
            case"CA":
                n = "Province", i = "Postal Code";
                break;
            case"GB":
                n = "County", i = "Postcode"
            }
            t("#location-label").html(e + " / " + n), t("#zip-label").html(i), r.find("input[name='strCity']").attr({
                placeholder: e
            }), r.find("input[name='strState']").attr({
                placeholder: n
            }), r.find("input[name='strPostal']").attr({
                placeholder: i
            })
        })
    })
}), define("page/upgrade", ["require", "jquery", "page/include/application"], function(e) {
    var t = e("jquery"), n = e("page/include/application");
    t(".page.upgrade").ready(function() {
        n.ready()
    })
}), function() {
    var e = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
            if (t in this && this[t] === e)
                return t;
        return - 1
    }, t = [].slice;
    !function(e, t) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
            return t(n, e)
        }) : t(e.jQuery, e)
    }(window, function(n, i) {
        var o, a, s, r, l, c, u, d, p, h, f, m, g, v, y, b;
        return o = n(i), d = e.call(i, "ontouchstart") >= 0, r = {
            horizontal: {},
            vertical: {}
        }, l = 1, u = {}, c = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", a = function() {
            function e(e) {
                var t = this;
                this.$element = e, this.element = e[0], this.didResize=!1, this.didScroll=!1, this.id = "context" + l++, this.oldScroll = {
                    x: e.scrollLeft(),
                    y: e.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, this.element[c] = this.id, u[this.id] = this, e.bind(m, function() {
                    var e;
                    return t.didScroll || d ? void 0 : (t.didScroll=!0, e = function() {
                        return t.doScroll(), t.didScroll=!1
                    }, i.setTimeout(e, n[b].settings.scrollThrottle))
                }), e.bind(f, function() {
                    var e;
                    return t.didResize ? void 0 : (t.didResize=!0, e = function() {
                        return n[b]("refresh"), t.didResize=!1
                    }, i.setTimeout(e, n[b].settings.resizeThrottle))
                })
            }
            return e.prototype.doScroll = function() {
                var e, t = this;
                return e = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !d || e.vertical.oldScroll && e.vertical.newScroll || n[b]("refresh"), n.each(e, function(e, i) {
                    var o, a, s;
                    return s = [], a = i.newScroll > i.oldScroll, o = a ? i.forward : i.backward, n.each(t.waypoints[e], function(e, t) {
                        var n, o;
                        return i.oldScroll < (n = t.offset) && n <= i.newScroll ? s.push(t) : i.newScroll < (o = t.offset) && o <= i.oldScroll ? s.push(t) : void 0
                    }), s.sort(function(e, t) {
                        return e.offset - t.offset
                    }), a || s.reverse(), n.each(s, function(e, t) {
                        return t.options.continuous || e === s.length - 1 ? t.trigger([o]) : void 0
                    })
                }), this.oldScroll = {
                    x: e.horizontal.newScroll,
                    y: e.vertical.newScroll
                }
            }, e.prototype.refresh = function() {
                var e, t, i, o = this;
                return i = n.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                    horizontal: {
                        contextOffset: i ? 0: t.left,
                        contextScroll: i ? 0: this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: i ? 0: t.top,
                        contextScroll: i ? 0: this.oldScroll.y,
                        contextDimension: i ? n[b]("viewportHeight"): this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(e, function(e, t) {
                    return n.each(o.waypoints[e], function(e, i) {
                        var o, a, s, r, l;
                        return o = i.options.offset, s = i.offset, a = n.isWindow(i.element) ? 0 : i.$element.offset()[t.offsetProp], n.isFunction(o) ? o = o.apply(i.element) : "string" == typeof o && (o = parseFloat(o), i.options.offset.indexOf("%")>-1 && (o = Math.ceil(t.contextDimension * o / 100))), i.offset = a - t.contextOffset + t.contextScroll - o, i.options.onlyOnScroll && null != s ||!i.enabled ? void 0 : null !== s && s < (r = t.oldScroll) && r <= i.offset ? i.trigger([t.backward]) : null !== s && s > (l = t.oldScroll) && l >= i.offset ? i.trigger([t.forward]) : null === s && t.oldScroll >= i.offset ? i.trigger([t.forward]) : void 0
                    })
                })
            }, e.prototype.checkEmpty = function() {
                return n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, m].join(" ")), delete u[this.id]) : void 0
            }, e
        }(), s = function() {
            function e(e, t, i) {
                var o, a;
                "bottom-in-view" === i.offset && (i.offset = function() {
                    var e;
                    return e = n[b]("viewportHeight"), n.isWindow(t.element) || (e = t.$element.height()), e - n(this).outerHeight()
                }), this.$element = e, this.element = e[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = t, this.enabled = i.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = i, t.waypoints[this.axis][this.id] = this, r[this.axis][this.id] = this, o = null != (a = this.element[v]) ? a : [], o.push(this.id), this.element[v] = o
            }
            return e.prototype.trigger = function(e) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            }, e.prototype.disable = function() {
                return this.enabled=!1
            }, e.prototype.enable = function() {
                return this.context.refresh(), this.enabled=!0
            }, e.prototype.destroy = function() {
                return delete r[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, e.getWaypointsByElement = function(e) {
                var t, i;
                return (i = e[v]) ? (t = n.extend({}, r.horizontal, r.vertical), n.map(i, function(e) {
                    return t[e]
                })) : []
            }, e
        }(), h = {
            init: function(e, t) {
                var i;
                return t = n.extend({}, n.fn[y].defaults, t), null == (i = t.handler) && (t.handler = e), this.each(function() {
                    var e, i, o, r;
                    return e = n(this), o = null != (r = t.context) ? r : n.fn[y].defaults.context, n.isWindow(o) || (o = e.closest(o)), o = n(o), i = u[o[0][c]], i || (i = new a(o)), new s(e, i, t)
                }), n[b]("refresh"), this
            },
            disable: function() {
                return h._invoke.call(this, "disable")
            },
            enable: function() {
                return h._invoke.call(this, "enable")
            },
            destroy: function() {
                return h._invoke.call(this, "destroy")
            },
            prev: function(e, t) {
                return h._traverse.call(this, e, t, function(e, t, n) {
                    return t > 0 ? e.push(n[t - 1]) : void 0
                })
            },
            next: function(e, t) {
                return h._traverse.call(this, e, t, function(e, t, n) {
                    return t < n.length - 1 ? e.push(n[t + 1]) : void 0
                })
            },
            _traverse: function(e, t, o) {
                var a, s;
                return null == e && (e = "vertical"), null == t && (t = i), s = p.aggregate(t), a = [], this.each(function() {
                    var t;
                    return t = n.inArray(this, s[e]), o(a, t, s[e])
                }), this.pushStack(a)
            },
            _invoke: function(e) {
                return this.each(function() {
                    var t;
                    return t = s.getWaypointsByElement(this), n.each(t, function(t, n) {
                        return n[e](), !0
                    })
                }), this
            }
        }, n.fn[y] = function() {
            var e, i;
            return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], h[i] ? h[i].apply(this, e) : n.isFunction(i) ? h.init.apply(this, arguments) : n.isPlainObject(i) ? h.init.apply(this, [null, i]) : i ? n.error("The " + i + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[y].defaults = {
            context: i,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, p = {
            refresh: function() {
                return n.each(u, function(e, t) {
                    return t.refresh()
                })
            },
            viewportHeight: function() {
                var e;
                return null != (e = i.innerHeight) ? e : o.height()
            },
            aggregate: function(e) {
                var t, i, o;
                return t = r, e && (t = null != (o = u[n(e)[0][c]]) ? o.waypoints : void 0), t ? (i = {
                    horizontal: [],
                    vertical: []
                }, n.each(i, function(e, o) {
                    return n.each(t[e], function(e, t) {
                        return o.push(t)
                    }), o.sort(function(e, t) {
                        return e.offset - t.offset
                    }), i[e] = n.map(o, function(e) {
                        return e.element
                    }), i[e] = n.unique(i[e])
                }), i) : []
            },
            above: function(e) {
                return null == e && (e = i), p._filter(e, "vertical", function(e, t) {
                    return t.offset <= e.oldScroll.y
                })
            },
            below: function(e) {
                return null == e && (e = i), p._filter(e, "vertical", function(e, t) {
                    return t.offset > e.oldScroll.y
                })
            },
            left: function(e) {
                return null == e && (e = i), p._filter(e, "horizontal", function(e, t) {
                    return t.offset <= e.oldScroll.x
                })
            },
            right: function(e) {
                return null == e && (e = i), p._filter(e, "horizontal", function(e, t) {
                    return t.offset > e.oldScroll.x
                })
            },
            enable: function() {
                return p._invoke("enable")
            },
            disable: function() {
                return p._invoke("disable")
            },
            destroy: function() {
                return p._invoke("destroy")
            },
            extendFn: function(e, t) {
                return h[e] = t
            },
            _invoke: function(e) {
                var t;
                return t = n.extend({}, r.vertical, r.horizontal), n.each(t, function(t, n) {
                    return n[e](), !0
                })
            },
            _filter: function(e, t, i) {
                var o, a;
                return (o = u[n(e)[0][c]]) ? (a = [], n.each(o.waypoints[t], function(e, t) {
                    return i(o, t) ? a.push(t) : void 0
                }), a.sort(function(e, t) {
                    return e.offset - t.offset
                }), n.map(a, function(e) {
                    return e.element
                })) : []
            }
        }, n[b] = function() {
            var e, n;
            return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[n] ? p[n].apply(null, e) : p.aggregate.call(null, n)
        }, n[b].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, o.on("load.waypoints", function() {
            return n[b]("refresh")
        })
    })
}.call(this), define("page/include/mainframe", ["require", "jquery", "module/ajax", "page/include/application", "waypoints", "module/confirm", "module/client"], function(e) {
    var t, n = e("jquery"), i = e("module/ajax"), o = e("page/include/application"), a = (e("waypoints"), e("module/confirm")), s = e("module/client");
    return {
        ready: function() {
            o.ready(), n(window).resize(function() {
                n("#nodes img").each(function() {
                    var e = n(this);
                    return e.css("top", (s.intThumbHeight.val - e.data("height")) / 2)
                })
            }), n(document).on("keydown", function(e) {
                var t = e.which || e.keyCode, i = [27];
                - 1 !== n.inArray(t, i) && e.preventDefault()
            })
        },
        infiniteScroll: function(e, i, o, a, s) {
            var r = this;
            t = {
                script: e,
                data: i,
                node: o,
                onNodeAdd: a,
                onPageLoad: s
            }, n("#nodes-more").waypoint({
                offset: "100%",
                handler: function(e) {
                    "down" == e && r.loadNextPage()
                }
            })
        },
        loadNextPage: function(e) {
            var o = this, a = {
                shared: t.data.shared
            };
            t.data.after && (a.after = t.data.after), n.extend(a, t.node), i.post(t.script, a, function(i) {
                var a = n("#navbar-fixed-bottom");
                if (n("#nodes-more").waypoint("disable").detach(), 0 == i.total)
                    o.toggleContentState(i.total), t.data.shared || a.addClass("empty").removeClass("full");
                else {
                    var s = n(i.html);
                    s.appendTo("#nodes"), s.find(".ladda-button").ladda(), i.more && o.infiniteScroll(t.script, {
                        after: i.after,
                        shared: t.data.shared
                    }, t.node, t.onNodeAdd, t.onPageLoad), t.onNodeAdd && s.find(".node").parent().each(function(e, i) {
                        t.onNodeAdd(n(i))
                    }), t.data.shared || a.removeClass("empty").addClass("full")
                }
                t.onPageLoad && t.onPageLoad(i.total), e && e()
            })
        },
        addNode: function(e) {
            var t = e.find("img");
            e.find("button.node-child-edit").ladda(), n("#nodes").prepend(e), this.toggleContentState(), t.css("top", (s.intThumbHeight.val - t.data("height")) / 2)
        },
        deleteNode: function(e, t) {
            var i = this;
            e.parent().fadeOut({
                complete: function() {
                    n(this).remove(), i.toggleContentState(), n.waypoints("refresh"), t && t()
                }
            })
        },
        toggleContentState: function() {
            var e = n("#navbar-fixed-bottom"), t = n("#nodes"), i = t.hasClass("hidden"), o = 0 == t.find(".node").length;
            (i&&!o ||!i && o) && (t.toggleClass("hidden"), n("#nodes-empty").toggleClass("hidden"), t.trigger("emptyChange", o)), o ? e.addClass("empty").removeClass("full") : e.removeClass("empty").addClass("full")
        },
        nodeClick: function(e, t) {
            n(document).on("click", e, function(e) {
                var i = n(this).closest(".node"), o = i.data("node-id");
                return t(i, o)
            })
        },
        createBatch: function(e, t, n) {
            var o = {
                blnWhiteList: 1 == t ? 1: 0,
                strFileIds: n
            };
            i.post("batch/" + e, o, function(e) {
                location.href = window.pageVars.site_url + "batch/" + e.batchId + "/edit"
            })
        },
        deleteFiles: function(e, t, n, o) {
            i.post("folder/" + e + "/file", {
                _method: "DELETE",
                strFileIds: n,
                blnWhiteList: 1 == t ? 1: 0
            }, function(e) {
                o(e)
            }, null, function() {
                a.functions.hideConfirm()
            })
        },
        renameFiles: function(e, t, n, o, a) {
            if (a) {
                var s = {
                    _method: "PUT",
                    blnWhiteList: 1 == t ? 1: 0,
                    strFileIds: n,
                    strFileName: a
                };
                i.post("folder/" + e + "/file/", s, function(e) {
                    o(e)
                })
            }
        }
    }
}), define("module/browser", ["require", "jquery", "module/client"], function(e) {
    var t = e("jquery"), n = e("module/client"), i = {
        supportsTransitions: function() {
            return Modernizr.csstransitions
        },
        isTouch: function() {
            return Modernizr.touch
        },
        supportsFormData: function() {
            return void 0 !== window.FormData
        },
        supportsDragnDrop: function() {
            return Modernizr.draganddrop
        },
        supportsCanvas: function() {
            return Modernizr.canvas
        },
        isMobileScreen: function() {
            return t(window).width() < n.intScreenSmallWidth.val
        }
    };
    return i
}), define("page/home", ["require", "page/include/mainframe", "jquery", "module/confirm", "module/ajax", "module/client", "module/browser"], function(e) {
    var t = e("page/include/mainframe"), n = e("jquery"), i = e("module/confirm"), o = e("module/ajax"), a = (e("module/client"), e("module/browser")), s = {
        params: {
            site_url: window.pageVars.site_url,
            file_count: window.pageVars.total,
            load_after: window.pageVars.after
        },
        functions: {
            buildHome: function() {
                s.elements = {}, s.functions.initInfiniteScroll(), s.functions.buildNodeEvents(), s.functions.buildClickEvents()
            },
            initInfiniteScroll: function() {
                s.params.load_after && t.infiniteScroll("folder/load", {
                    after: s.params.load_after
                })
            },
            deleteFolder: function(e, n) {
                e.is(".standby") || (e.addClass("standby"), o.post("folder/" + n, {
                    _method: "DELETE"
                }, function(n) {
                    t.deleteNode(e)
                }))
            },
            buildClickEvents: function() {
                n(document).on("contextmenu", ".node-parent", function(e) {
                    return n(this).find(".btn-group").addClass("open").find("button").attr({
                        "aria-expanded": !0
                    }), !1
                }), n(document).bind("drop dragover", function(e) {
                    a.supportsDragnDrop() && "drop" == e.type && analytics.track("Dropped File Into Folders Page", {
                        files: e.originalEvent.dataTransfer.files.length,
                        mimetypes: e.originalEvent.dataTransfer.files[0] ? e.originalEvent.dataTransfer.files[0].type: ""
                    }), e.preventDefault()
                }), n(document).on("click", ".create-folder", function(e) {
                    i.functions.showConfirm({
                        message: "Enter a name for your new folder.",
                        accept: {
                            text: "Add <span class='hidden-xs'>Folder</span>",
                            type: "primary"
                        },
                        form: {
                            input: !0,
                            placeholder: "Untitled",
                            required: !1
                        },
                        onAccept: function(e) {
                            var t = {
                                strFolderName: e
                            };
                            return o.post("folder", t, function(e) {
                                location.href = s.params.site_url + "folder/" + e.intFolderId
                            }), !1
                        }
                    })
                })
            },
            buildNodeEvents: function() {
                t.nodeClick(".node", function(e, t) {
                    e.is(".standby") || (location.href = s.params.site_url + "folder/" + t)
                }), t.nodeClick(".folder-edit", function(e, n) {
                    return e.is(".standby") || (e.addClass("standby"), t.createBatch(n, !1, "")), !1
                }), t.nodeClick(".folder-rename", function(e, t) {
                    var n = e.find(".node-parent-name").html();
                    return i.functions.showConfirm({
                        message: "Enter a name for your folder.",
                        accept: {
                            text: "Rename <span class='hidden-xs'>Folder</span>",
                            type: "primary"
                        },
                        form: {
                            input: !0,
                            inputval: "Untitled" == n ? "": n,
                            placeholder: "Untitled",
                            required: !0
                        },
                        onAccept: function(n) {
                            var i = n ? n: "Untitled";
                            return o.post("folder/" + t, {
                                _method: "PUT",
                                strFolderName: i
                            }, function(t) {
                                e.find(".node-parent-name").html(i)
                            }), !0
                        },
                        $spotlight: e
                    }), !1
                }), t.nodeClick(".folder-delete", function(e, t) {
                    return e.data("file-count") > 0 ? i.functions.showConfirm({
                        message: "Delete this folder?",
                        accept: {
                            text: "Delete <span class='hidden-xs'>Folder</span>",
                            type: "danger"
                        },
                        $spotlight: e,
                        onAccept: function() {
                            return s.functions.deleteFolder(e, t), !0
                        }
                    }) : s.functions.deleteFolder(e, t), !1
                })
            }
        }
    };
    n(".page.home").ready(function() {
        t.ready(), s.functions.buildHome()
    })
}), define("text!include/progress.html", [], function() {
    return '<div>\r\n	<div class="count">\r\n		<i class="fa fa-fw fa-spin fa-spinner"></i>\r\n		<div class="text"><span></span> <b></b></div>\r\n		<b><span>1</span> / <span>0</span></b>\r\n	</div>\r\n	<div class="progress">\r\n		<div class="progress-bar progress-bar-striped active" data-bucket-limit="0" data-bucket-filled="0"></div>\r\n	</div>\r\n</div>'
}), define("module/progress", ["require", "jquery", "page/include/mainframe", "module/notify"], function(e) {
    var t = e("jquery"), n = (e("page/include/mainframe"), e("module/notify")), i = {
        params: {
            isProcessing: !1,
            hasSucceeded: 0,
            totalFileCount: 0,
            currentFileOrder: 1
        },
        elements: {
            $progress: null
        },
        functions: {
            buildProgress: function(n, o) {
                var a = n ? n: "Import";
                i.params.hasSucceeded = 0, i.params.currentFileOrder = 1, i.params.totalFileCount = 0, e(["text!include/progress.html"], function(e) {
                    i.elements.$progress = t(e), i.elements.$progress.find(".text span").html(a + "ing"), i.elements.$text = i.elements.$progress.find(".text"), i.elements.$action = i.elements.$progress.find(".text span"), i.elements.$type = i.elements.$progress.find(".text b"), i.elements.$progressbar = i.elements.$progress.find(".progress-bar"), i.elements.$count = i.elements.$progress.find(".count b"), i.elements.$current = i.elements.$count.find("span:first-child"), i.elements.$total = i.elements.$count.find("span:last-child"), o && o()
                })
            },
            showProgress: function(e, o) {
                t("#subnav").removeClass("hidden"), i.params.isProcessing || (o || t(window).on("beforeunload", function(e) {
                    return analytics.track("Upload Still In Progress", {}), "Upload is still in progress! Leaving or reloading this page will cancel your current upload."
                }), e && i.elements.$type && i.elements.$type.html(e), n.functions.showNotify({
                    type: "info",
                    message: i.elements.$progress,
                    sticky: !0
                }), i.elements.$progressbar && i.elements.$progressbar.css({
                    width: i.params.currentFileOrder / i.params.totalFileCount * 100 + "%"
                }), i.params.isProcessing=!0)
            },
            incrementTotalCount: function() {
                i.params.totalFileCount++, i.functions.updateTotalCount(i.params.totalFileCount)
            },
            updateTotalCount: function(e) {
                i.params.totalFileCount = e, i.elements.$total && i.elements.$total.html(i.params.totalFileCount)
            },
            fileCompleted: function(e, t) {
                i.params.currentFileOrder = void 0 !== e ? e : i.params.currentFileOrder + 1, i.params.currentFileOrder > i.params.totalFileCount && (t || null == t) ? i.functions.resetProgress() : (i.elements.$progressbar.css({
                    width: i.params.currentFileOrder / i.params.totalFileCount * 100 + "%"
                }), i.elements.$current.html(i.params.currentFileOrder))
            },
            resetProgress: function() {
                i.elements.$progressbar && i.elements.$progressbar.css({
                    width: 0
                }), i.elements.$current && i.elements.$current.html(1), i.elements.$total && i.elements.$total.html(0), i.params.isProcessing=!1, i.params.currentFileOrder = 1, i.params.totalFileCount = 0, n.functions.hideNotify(), t(window).off("beforeunload")
            },
            updateBarElements: function(e, t, o, a, s) {
                t && n.functions.setClass(t), o && i.elements.$progressbar.attr({
                    "class": o
                }), s && i.elements.$progressbar.css({
                    width: "100%"
                }), e && i.elements.$text.html(e), a && i.elements.$count.hide()
            }
        }
    };
    return i
}), define("text!include/finish.html", [], function() {
    return '<div class="modal fade">\r\n	<div class="modal-dialog modal-md">\r\n		<div class="modal-content">\r\n			<div class="modal-header">\r\n				<h4 class="modal-title"><i class="fa fa-fw fa-spinner fa-spin"></i> Finalizing photos...</h4>\r\n			</div>\r\n			<div class="modal-body">\r\n				<div class="progress">\r\n					<div class="progress-bar progress-bar-success progress-bar-striped active" style="width: 100%;"></div>\r\n				</div>\r\n				<br>\r\n				You will be redirected to the finished photos page shortly.\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'
}), define("text!include/finished.html", [], function() {
    return '<div class="modal fade">\r\n	<div class="modal-dialog modal-md">\r\n		<div class="modal-content">\r\n			<div class="modal-header">\r\n				<h4 class="modal-title"><i class="fa fa-fw fa-check"></i> Batch already finished</h4>\r\n			</div>\r\n			<div class="modal-body">\r\n				Once you finish your batch, you can not come back to re-edit it.\r\n                To create a new batch, click \'Photos\' at the top.<br><br>\r\n                Remember, you can <strong>apply multiple effects on photos</strong> by clicking the tools icon ( <i class="fa fa-fw fa-wrench"></i> )\r\n                in the bottom left when editing.\r\n			</div>\r\n            <div class="modal-footer">\r\n                <a class="btn btn-primary hidden-xs" href="/home">Back To Photos</a>\r\n                <a id="viewfinished" class="btn btn-success" href="javascript:void(0);">View Finished</a>\r\n            </div>\r\n		</div>\r\n	</div>\r\n</div>'
}), define("text!include/share.html", [], function() {
    return '<div class="modal modal-upgrade fade">\r\n	<div class="modal-dialog modal-md">\r\n		<div class="modal-content">\r\n            <div class="modal-icon fa-share"></div>\r\n            <div class="modal-body">\r\n                <i class="fa fa-close" data-dismiss="modal"></i>\r\n                <h4 id="modal-title"></h4>\r\n                <div id="upgrade-message"></div>\r\n                <div>\r\n                    <strong>Copy the link below</strong> and share it with your clients and customers safely.\r\n                </div>\r\n                <div class="modal-input">\r\n                    <div class="input-group">\r\n                        <div class="input-group-addon"><i class="fa fa-link"></i></div>\r\n                        <input id="public-link" type="text" value="">\r\n                    </div>\r\n                    <a href="" id="public-link-href" target="_blank">View Shared Page</a>\r\n                </div>\r\n                <small>\r\n                    To ensure your link works, <strong>keep this batch in shared mode!</strong>\r\n                </small>\r\n			</div>\r\n		</div>\r\n    </div>\r\n</div>\r\n'
}), define("text!include/upgrade.html", [], function() {
    return '<div class="modal modal-upgrade fade">\r\n	<div class="modal-dialog modal-lg">\r\n		<div class="modal-content">\r\n            <div class="modal-icon fa-crown"></div>\r\n			<div class="modal-body">\r\n                <i class="fa fa-close" data-dismiss="modal"></i>\r\n                <h4></h4>\r\n                <div class="modal-message" id="upgrade-message"></div>\r\n                <div class="plans">\r\n\r\n                    <div class="plan plan-basic">\r\n\r\n                        <div class="plan-arrow"></div>\r\n\r\n                        <ul class="list-unstyled">\r\n\r\n                            <li class="plan-title">\r\n                                Your Plan\r\n                            </li>\r\n\r\n                            <li>\r\n                                <i class="fa fa-fw fa-image-add"></i>\r\n                                <span id="upgrade-limit"></span>\r\n                            </li>\r\n\r\n                            <li>\r\n                                <i class="fa fa-fw fa-discard"></i>\r\n                                Features locked\r\n                            </li>\r\n\r\n                            <li>\r\n                                <i class="fa fa-fw fa-discard"></i>\r\n                                Can\'t save watermarks\r\n                            </li>\r\n\r\n                            <li>\r\n                                <i class="fa fa-fw fa-discard"></i>\r\n                                Can\'t use premium fonts\r\n                            </li>\r\n\r\n                            <li>\r\n                                <i class="fa fa-fw fa-discard"></i>\r\n                                Can\'t import fonts\r\n                            </li>\r\n\r\n                            <li>\r\n                                <i class="fa fa-fw fa-discard"></i>\r\n                                Can\'t export to cloud\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n\r\n\r\n                    <div class="plan plan-premium">\r\n\r\n                        <a class="upgrade-link" href="javascript:void(0);">\r\n\r\n                            <ul class="list-unstyled">\r\n\r\n                                <li class="plan-title">\r\n                                    Premium Plan <i class="fa fa-crown"></i>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <i class="fa fa-fw fa-image-add"></i>\r\n                                    Unlimited photos\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <i class="fa fa-fw fa-check"></i>\r\n                                    All features unlocked\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <i class="fa fa-fw fa-star"></i>\r\n                                    Save watermarks\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <i class="fa fa-fw fa-diamond"></i>\r\n                                    Use premium fonts\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <i class="fa fa-fw fa-font-import"></i>\r\n                                    Import custom fonts\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <i class="fa fa-fw fa-cloud-upload"></i>\r\n                                    Export to cloud\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </a>\r\n\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <a class="upgrade-link btn btn-success" href="javascript:void(0);">Continue <i class="fa fa-angle-left fa-flip-horizontal"></i></a><br>\r\n                </div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'
}), define("module/modal", ["require", "jquery", "bootstrap/modal"], function(e) {
    var t = e("jquery"), n = (e("bootstrap/modal"), {
        params: {
            user: window.pageVars.arrUser,
            batch: window.pageVars.batch,
            message: "",
            isOpen: !1
        },
        elements: {
            $modal: null
        },
        functions: {
            buildModal: function(e, i, o, a) {
                n.elements.$modal = e;
                var s = i ? {
                    backdrop: "isStatic",
                    keyboard: !1
                }
                : {}, r = n.elements.$modal.find(".ladda-button");
                n.elements.$modal.on("onModalShown.bs.modal", function() {
                    n.params.isOpen=!0, n.functions.onShow(), a && a()
                }), n.elements.$modal.on("hidden.bs.modal", function() {
                    n.params.isOpen=!1, n.functions.onHide(), o && o()
                }), r.ladda().on("click", function() {
                    t(this).ladda("start")
                }), n.elements.$modal.modal(s)
            },
            showModal: function(i, o, a, s) {
                var r = i;
                "finish" == i ? e(["text!include/finish.html"], function(e) {
                    n.functions.buildModal(t(e), o, a)
                }) : "finished" == i ? e(["text!include/finished.html"], function(e) {
                    var i = t(e);
                    i.find("#viewfinished").attr("href", "/batch/" + n.params.batch.id), n.functions.buildModal(i, o, a)
                }) : "share" == i ? e(["text!include/share.html"], function(e) {
                    var i = t(e), r = i.find("#public-link"), l = i.find("#public-link-href");
                    i.find("#modal-title").html("<span>Share Finished Photos</span> " + (1 != s.count ? "<span>( " + s.subtitle + " )</span>" : "")), r.val(s.url).on("click", function() {
                        t(this).select()
                    }), l.attr({
                        href: s.url
                    }), n.functions.buildModal(i, o, a)
                }) : (r = "upgrade", e(["text!include/upgrade.html"], function(e) {
                    var o = "", r = t(e), l = n.params.user.monthly_file_limit ? "You've exceeded your monthly limit of " + n.params.user.monthly_file_limit + " photos / month.": "You've exceeded your total limit of " + n.params.user.total_file_limit + " photos you can store on your account.", c = n.params.user.monthly_file_limit ? n.params.user.monthly_file_limit + " photos / month": n.params.user.total_file_limit + " photo limit";
                    "add_photos" == i ? o = "<span>" + l + "</span>" : "add_font" == i ? o = "<span>Importing custom fonts is only available to Premium users.</span>" : "export_to_cloud" == i ? o = "<span>Exporting finished photos to the cloud is only available to Premium users.</span>" : "use_watermark_template" == i ? o = "<span>Using saved watermark templates is only available to Premium users.</span>" : "use_premium_font" == i ? o = "<span>The font '" + s.name + "' is only available to Premium users.</span>" : "publish" == i && (o = "<span>Publishing finished folders and photos is only available to Premium users.</span>"), o += "add_photos" == i ? "<br>To continue, either delete some photos or <a href='javascript:void(0);' class='upgrade-link'>Upgrade to Premium <i class='fa fa-crown'></i></a>." : "use_premium_font" == i ? "<br>To continue, either select a basic font or <a href='javascript:void(0);' class='upgrade-link'>Upgrade to Premium <i class='fa fa-crown'></i></a>." : "<br>To continue, you will need to <a href='javascript:void(0);' class='upgrade-link'>Upgrade to Premium <i class='fa fa-crown'></i></a> ", r.find("#upgrade-message").html(o), r.find("#upgrade-limit").html(c), r.find(".upgrade-link").on("mousedown", function() {
                        location.href = "/plans/yearly/premium?feature=" + i
                    }), r.find(".upgrade-cancel").on("click", function(e) {
                        e.stopPropagation(), n.functions.hideModal()
                    }), n.functions.buildModal(r, !0, a)
                }), i && (analytics.track("Viewed Upgrade Modal", {
                    funnel: i
                }), analytics.track("Modal: " + i, {}))), window.location.hash = r
            },
            hideModal: function() {
                n.elements.$modal.modal("hide")
            },
            onShow: function() {},
            onHide: function() {}
        }
    });
    return n
}), function(e) {
    "function" == typeof define && define.amd ? define("dropzone-amd-module", ["jquery"], e) : e(jQuery)
}(function(e) {
    var t = {
        exports: {}
    };
    return function() {
        var n, i, o, a, s, r, l, c, u = [].slice, d = {}.hasOwnProperty, p = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t)
                d.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
        l = function() {}, i = function() {
            function e() {}
            return e.prototype.addEventListener = e.prototype.on, e.prototype.on = function(e, t) {
                return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
            }, e.prototype.emit = function() {
                var e, t, n, i, o, a;
                if (i = arguments[0], e = 2 <= arguments.length ? u.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, n = this._callbacks[i])
                    for (o = 0, a = n.length; a > o; o++)
                        t = n[o], t.apply(this, e);
                return this
            }, e.prototype.removeListener = e.prototype.off, e.prototype.removeAllListeners = e.prototype.off, e.prototype.removeEventListener = e.prototype.off, e.prototype.off = function(e, t) {
                var n, i, o, a, s;
                if (!this._callbacks || 0 === arguments.length)
                    return this._callbacks = {}, this;
                if (i = this._callbacks[e], !i)
                    return this;
                if (1 === arguments.length)
                    return delete this._callbacks[e], this;
                for (o = a = 0, s = i.length; s > a; o=++a)
                    if (n = i[o], n === t) {
                        i.splice(o, 1);
                        break
                    }
                return this
            }, e
        }(), n = function(e) {
            function t(e, i) {
                var o, a, s;
                if (this.element = e, this.version = t.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType)
                    throw new Error("Invalid dropzone element.");
                if (this.element.dropzone)
                    throw new Error("Dropzone already attached.");
                if (t.instances.push(this), this.element.dropzone = this, o = null != (s = t.optionsForElement(this.element)) ? s : {}, this.options = n({}, this.defaultOptions, o, null != i ? i : {}), this.options.forceFallback ||!t.isBrowserSupported())
                    return this.options.fallback.call(this);
                if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url)
                    throw new Error("No URL provided.");
                if (this.options.acceptedFiles && this.options.acceptedMimeTypes)
                    throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (a = this.getExistingFallback()) && a.parentNode && a.parentNode.removeChild(a), this.options.previewsContainer!==!1 && (this.options.previewsContainer ? this.previewsContainer = t.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable===!0 ? this.clickableElements = [this.element] : this.clickableElements = t.getElements(this.options.clickable, "clickable")), this.init()
            }
            var n, o;
            return p(t, e), t.prototype.Emitter = i, t.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], t.prototype.defaultOptions = {
                url: null,
                method: "post",
                withCredentials: !1,
                parallelUploads: 2,
                uploadMultiple: !1,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                filesizeBase: 1e3,
                maxFiles: null,
                filesizeBase: 1e3,
                params: {},
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                capture: null,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                accept: function(e, t) {
                    return t()
                },
                init: function() {
                    return l
                },
                forceFallback: !1,
                fallback: function() {
                    var e, n, i, o, a, s;
                    for (this.element.className = "" + this.element.className + " dz-browser-not-supported", s = this.element.getElementsByTagName("div"), o = 0, a = s.length; a > o; o++)
                        e = s[o], /(^| )dz-message($| )/.test(e.className) && (n = e, e.className = "dz-message");
                    return n || (n = t.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(n)), i = n.getElementsByTagName("span")[0], i && (i.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm())
                },
                resize: function(e) {
                    var t, n, i;
                    return t = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: e.width,
                        srcHeight: e.height
                    }, n = e.width / e.height, t.optWidth = this.options.thumbnailWidth, t.optHeight = this.options.thumbnailHeight, null == t.optWidth && null == t.optHeight ? (t.optWidth = t.srcWidth, t.optHeight = t.srcHeight) : null == t.optWidth ? t.optWidth = n * t.optHeight : null == t.optHeight && (t.optHeight = 1 / n * t.optWidth), i = t.optWidth / t.optHeight, e.height < t.optHeight || e.width < t.optWidth ? (t.trgHeight = t.srcHeight, t.trgWidth = t.srcWidth) : n > i ? (t.srcHeight = e.height, t.srcWidth = t.srcHeight * i) : (t.srcWidth = e.width, t.srcHeight = t.srcWidth / i), t.srcX = (e.width - t.srcWidth) / 2, t.srcY = (e.height - t.srcHeight) / 2, t
                },
                drop: function(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragstart: l,
                dragend: function(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragenter: function(e) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragover: function(e) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragleave: function(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                paste: l,
                reset: function() {
                    return this.element.classList.remove("dz-started")
                },
                addedfile: function(e) {
                    var n, i, o, a, s, r, l, c, u, d, p, h, f;
                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                        for (e.previewElement = t.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement), d = e.previewElement.querySelectorAll("[data-dz-name]"), a = 0, l = d.length; l > a; a++)
                            n = d[a], n.textContent = e.name;
                        for (p = e.previewElement.querySelectorAll("[data-dz-size]"), s = 0, c = p.length; c > s; s++)
                            n = p[s], n.innerHTML = this.filesize(e.size);
                        for (this.options.addRemoveLinks && (e._removeLink = t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink)), i = function(n) {
                            return function(i) {
                                return i.preventDefault(), i.stopPropagation(), e.status === t.UPLOADING ? t.confirm(n.options.dictCancelUploadConfirmation, function() {
                                    return n.removeFile(e)
                                }) : n.options.dictRemoveFileConfirmation ? t.confirm(n.options.dictRemoveFileConfirmation, function() {
                                    return n.removeFile(e)
                                }) : n.removeFile(e)
                            }
                        }(this), h = e.previewElement.querySelectorAll("[data-dz-remove]"), f = [], r = 0, u = h.length; u > r; r++)
                            o = h[r], f.push(o.addEventListener("click", i));
                        return f
                    }
                },
                removedfile: function(e) {
                    var t;
                    return e.previewElement && null != (t = e.previewElement) && t.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
                },
                thumbnail: function(e, t) {
                    var n, i, o, a;
                    if (e.previewElement) {
                        for (e.previewElement.classList.remove("dz-file-preview"), a = e.previewElement.querySelectorAll("[data-dz-thumbnail]"), i = 0, o = a.length; o > i; i++)
                            n = a[i], n.alt = e.name, n.src = t;
                        return setTimeout(function(t) {
                            return function() {
                                return e.previewElement.classList.add("dz-image-preview")
                            }
                        }(this), 1)
                    }
                },
                error: function(e, t) {
                    var n, i, o, a, s;
                    if (e.previewElement) {
                        for (e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error), a = e.previewElement.querySelectorAll("[data-dz-errormessage]"), s = [], i = 0, o = a.length; o > i; i++)
                            n = a[i], s.push(n.textContent = t);
                        return s
                    }
                },
                errormultiple: l,
                processing: function(e) {
                    return e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink) ? e._removeLink.textContent = this.options.dictCancelUpload : void 0
                },
                processingmultiple: l,
                uploadprogress: function(e, t, n) {
                    var i, o, a, s, r;
                    if (e.previewElement) {
                        for (s = e.previewElement.querySelectorAll("[data-dz-uploadprogress]"), r = [], o = 0, a = s.length; a > o; o++)
                            i = s[o], "PROGRESS" === i.nodeName ? r.push(i.value = t) : r.push(i.style.width = "" + t + "%");
                        return r
                    }
                },
                totaluploadprogress: l,
                sending: l,
                sendingmultiple: l,
                success: function(e) {
                    return e.previewElement ? e.previewElement.classList.add("dz-success") : void 0
                },
                successmultiple: l,
                canceled: function(e) {
                    return this.emit("error", e, "Upload canceled.")
                },
                canceledmultiple: l,
                complete: function(e) {
                    return e._removeLink && (e._removeLink.textContent = this.options.dictRemoveFile), e.previewElement ? e.previewElement.classList.add("dz-complete") : void 0
                },
                completemultiple: l,
                maxfilesexceeded: l,
                maxfilesreached: l,
                queuecomplete: l,
                previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
            }, n = function() {
                var e, t, n, i, o, a, s;
                for (i = arguments[0], n = 2 <= arguments.length ? u.call(arguments, 1) : [], a = 0, s = n.length; s > a; a++) {
                    t = n[a];
                    for (e in t)
                        o = t[e], i[e] = o
                }
                return i
            }, t.prototype.getAcceptedFiles = function() {
                var e, t, n, i, o;
                for (i = this.files, o = [], t = 0, n = i.length; n > t; t++)
                    e = i[t], e.accepted && o.push(e);
                return o
            }, t.prototype.getRejectedFiles = function() {
                var e, t, n, i, o;
                for (i = this.files, o = [], t = 0, n = i.length; n > t; t++)
                    e = i[t], e.accepted || o.push(e);
                return o
            }, t.prototype.getFilesWithStatus = function(e) {
                var t, n, i, o, a;
                for (o = this.files, a = [], n = 0, i = o.length; i > n; n++)
                    t = o[n], t.status === e && a.push(t);
                return a
            }, t.prototype.getQueuedFiles = function() {
                return this.getFilesWithStatus(t.QUEUED)
            }, t.prototype.getUploadingFiles = function() {
                return this.getFilesWithStatus(t.UPLOADING);
            }, t.prototype.getActiveFiles = function() {
                var e, n, i, o, a;
                for (o = this.files, a = [], n = 0, i = o.length; i > n; n++)
                    e = o[n], (e.status === t.UPLOADING || e.status === t.QUEUED) && a.push(e);
                return a
            }, t.prototype.init = function() {
                var e, n, i, o, a, s, r;
                for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message") && this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (i = function(e) {
                    return function() {
                        return e.hiddenFileInput && document.body.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null == e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null != e.options.reference && (e.hiddenFileInput.id = e.options.reference), null != e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null != e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", document.body.appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function() {
                            var t, n, o, a;
                            if (n = e.hiddenFileInput.files, n.length)
                                for (o = 0, a = n.length; a > o; o++)
                                    t = n[o], e.addFile(t);
                            return i()
                        })
                    }
                }(this))(), this.URL = null != (s = window.URL) ? s : window.webkitURL, r = this.events, o = 0, a = r.length; a > o; o++)
                    e = r[o], this.on(e, this.options[e]);
                return this.on("uploadprogress", function(e) {
                    return function() {
                        return e.updateTotalUploadProgress()
                    }
                }(this)), this.on("removedfile", function(e) {
                    return function() {
                        return e.updateTotalUploadProgress()
                    }
                }(this)), this.on("canceled", function(e) {
                    return function(t) {
                        return e.emit("complete", t)
                    }
                }(this)), this.on("complete", function(e) {
                    return function(t) {
                        return 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length ? setTimeout(function() {
                            return e.emit("queuecomplete")
                        }, 0) : void 0
                    }
                }(this)), n = function(e) {
                    return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue=!1
                }, this.listeners = [{
                    element: this.element,
                    events: {
                        dragstart: function(e) {
                            return function(t) {
                                return e.emit("dragstart", t)
                            }
                        }(this),
                        dragenter: function(e) {
                            return function(t) {
                                return n(t), e.emit("dragenter", t)
                            }
                        }(this),
                        dragover: function(e) {
                            return function(t) {
                                var i;
                                try {
                                    i = t.dataTransfer.effectAllowed
                                } catch (o) {}
                                return t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy", n(t), e.emit("dragover", t)
                            }
                        }(this),
                        dragleave: function(e) {
                            return function(t) {
                                return e.emit("dragleave", t)
                            }
                        }(this),
                        drop: function(e) {
                            return function(t) {
                                return n(t), e.drop(t)
                            }
                        }(this),
                        dragend: function(e) {
                            return function(t) {
                                return e.emit("dragend", t)
                            }
                        }(this)
                    }
                }
                ], this.clickableElements.forEach(function(e) {
                    return function(n) {
                        return e.listeners.push({
                            element: n,
                            events: {
                                click: function(i) {
                                    return n !== e.element || i.target === e.element || t.elementInside(i.target, e.element.querySelector(".dz-message")) ? e.hiddenFileInput.click() : void 0
                                }
                            }
                        })
                    }
                }(this)), this.enable(), this.options.init.call(this)
            }, t.prototype.destroy = function() {
                var e;
                return this.disable(), this.removeAllFiles(!0), (null != (e = this.hiddenFileInput) ? e.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, t.instances.splice(t.instances.indexOf(this), 1)
            }, t.prototype.updateTotalUploadProgress = function() {
                var e, t, n, i, o, a, s, r;
                if (i = 0, n = 0, e = this.getActiveFiles(), e.length) {
                    for (r = this.getActiveFiles(), a = 0, s = r.length; s > a; a++)
                        t = r[a], i += t.upload.bytesSent, n += t.upload.total;
                    o = 100 * i / n
                } else
                    o = 100;
                return this.emit("totaluploadprogress", o, n, i)
            }, t.prototype._getParamName = function(e) {
                return "function" == typeof this.options.paramName ? this.options.paramName(e) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
            }, t.prototype.getFallbackForm = function() {
                var e, n, i, o;
                return (e = this.getExistingFallback()) ? e : (i = '<div class="dz-fallback">', this.options.dictFallbackText && (i += "<p>" + this.options.dictFallbackText + "</p>"), i += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', n = t.createElement(i), "FORM" !== this.element.tagName ? (o = t.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), o.appendChild(n)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != o ? o : n)
            }, t.prototype.getExistingFallback = function() {
                var e, t, n, i, o, a;
                for (t = function(e) {
                    var t, n, i;
                    for (n = 0, i = e.length; i > n; n++)
                        if (t = e[n], /(^| )fallback($| )/.test(t.className))
                            return t
                }, a = ["div", "form"], i = 0, o = a.length; o > i; i++)
                    if (n = a[i], e = t(this.element.getElementsByTagName(n)))
                        return e
            }, t.prototype.setupEventListeners = function() {
                var e, t, n, i, o, a, s;
                for (a = this.listeners, s = [], i = 0, o = a.length; o > i; i++)
                    e = a[i], s.push(function() {
                        var i, o;
                        i = e.events, o = [];
                        for (t in i)
                            n = i[t], o.push(e.element.addEventListener(t, n, !1));
                            return o
                        }());
                return s
            }, t.prototype.removeEventListeners = function() {
                var e, t, n, i, o, a, s;
                for (a = this.listeners, s = [], i = 0, o = a.length; o > i; i++)
                    e = a[i], s.push(function() {
                        var i, o;
                        i = e.events, o = [];
                        for (t in i)
                            n = i[t], o.push(e.element.removeEventListener(t, n, !1));
                            return o
                        }());
                return s
            }, t.prototype.disable = function() {
                var e, t, n, i, o;
                for (this.clickableElements.forEach(function(e) {
                    return e.classList.remove("dz-clickable")
                }), this.removeEventListeners(), i = this.files, o = [], t = 0, n = i.length; n > t; t++)
                    e = i[t], o.push(this.cancelUpload(e));
                return o
            }, t.prototype.enable = function() {
                return this.clickableElements.forEach(function(e) {
                    return e.classList.add("dz-clickable")
                }), this.setupEventListeners()
            }, t.prototype.filesize = function(e) {
                var t, n, i, o, a, s, r, l;
                for (s = ["TB", "GB", "MB", "KB", "b"], i = o = null, n = r = 0, l = s.length; l > r; n=++r)
                    if (a = s[n], t = Math.pow(this.options.filesizeBase, 4 - n) / 10, e >= t) {
                        i = e / Math.pow(this.options.filesizeBase, 4 - n), o = a;
                        break
                    }
                return i = Math.round(10 * i) / 10, "<strong>" + i + "</strong> " + o
            }, t.prototype._updateMaxFilesReachedClass = function() {
                return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
            }, t.prototype.drop = function(e) {
                var t, n;
                e.dataTransfer && (this.emit("drop", e), t = e.dataTransfer.files, t.length && (n = e.dataTransfer.items, n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t)))
            }, t.prototype.paste = function(e) {
                var t, n;
                if (null != (null != e && null != (n = e.clipboardData) ? n.items : void 0))
                    return this.emit("paste", e), t = e.clipboardData.items, t.length ? this._addFilesFromItems(t) : void 0
            }, t.prototype.handleFiles = function(e) {
                var t, n, i, o;
                for (o = [], n = 0, i = e.length; i > n; n++)
                    t = e[n], o.push(this.addFile(t));
                return o
            }, t.prototype._addFilesFromItems = function(e) {
                var t, n, i, o, a;
                for (a = [], i = 0, o = e.length; o > i; i++)
                    n = e[i], null != n.webkitGetAsEntry && (t = n.webkitGetAsEntry()) ? t.isFile ? a.push(this.addFile(n.getAsFile())) : t.isDirectory ? a.push(this._addFilesFromDirectory(t, t.name)) : a.push(void 0) : null != n.getAsFile && (null == n.kind || "file" === n.kind) ? a.push(this.addFile(n.getAsFile())) : a.push(void 0);
                return a
            }, t.prototype._addFilesFromDirectory = function(e, t) {
                var n, i;
                return n = e.createReader(), i = function(e) {
                    return function(n) {
                        var i, o, a;
                        for (o = 0, a = n.length; a > o; o++)
                            i = n[o], i.isFile ? i.file(function(n) {
                                return e.options.ignoreHiddenFiles && "." === n.name.substring(0, 1) ? void 0 : (n.fullPath = "" + t + "/" + n.name, e.addFile(n))
                            }) : i.isDirectory && e._addFilesFromDirectory(i, "" + t + "/" + i.name)
                    }
                }(this), n.readEntries(i, function(e) {
                    return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(e) : void 0
                })
            }, t.prototype.accept = function(e, n) {
                return e.size > 1024 * this.options.maxFilesize * 1024 ? n(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : t.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (n(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, n) : n(this.options.dictInvalidFileType)
            }, t.prototype.addFile = function(e) {
                return e.upload = {
                    progress: 0,
                    total: e.size,
                    bytesSent: 0
                }, this.files.push(e), e.status = t.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function(t) {
                    return function(n) {
                        return n ? (e.accepted=!1, t._errorProcessing([e], n)) : (e.accepted=!0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass()
                    }
                }(this))
            }, t.prototype.enqueueFiles = function(e) {
                var t, n, i;
                for (n = 0, i = e.length; i > n; n++)
                    t = e[n], this.enqueueFile(t);
                return null
            }, t.prototype.enqueueFile = function(e) {
                if (e.status !== t.ADDED || e.accepted!==!0)
                    throw new Error("This file can't be queued because it has already been processed or was rejected.");
                return e.status = t.QUEUED, this.options.autoProcessQueue ? setTimeout(function(e) {
                    return function() {
                        return e.processQueue()
                    }
                }(this), 0) : void 0
            }, t.prototype._thumbnailQueue = [], t.prototype._processingThumbnail=!1, t.prototype._enqueueThumbnail = function(e) {
                return this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(e), setTimeout(function(e) {
                    return function() {
                        return e._processThumbnailQueue()
                    }
                }(this), 0)) : void 0
            }, t.prototype._processThumbnailQueue = function() {
                return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail=!0, this.createThumbnail(this._thumbnailQueue.shift(), function(e) {
                    return function() {
                        return e._processingThumbnail=!1, e._processThumbnailQueue()
                    }
                }(this)))
            }, t.prototype.removeFile = function(e) {
                return e.status === t.UPLOADING && this.cancelUpload(e), this.files = c(this.files, e), this.emit("removedfile", e), 0 === this.files.length ? this.emit("reset") : void 0
            }, t.prototype.removeAllFiles = function(e) {
                var n, i, o, a;
                for (null == e && (e=!1), a = this.files.slice(), i = 0, o = a.length; o > i; i++)
                    n = a[i], (n.status !== t.UPLOADING || e) && this.removeFile(n);
                return null
            }, t.prototype.createThumbnail = function(e, t) {
                var n;
                return n = new FileReader, n.onload = function(i) {
                    return function() {
                        return "image/svg+xml" === e.type ? (i.emit("thumbnail", e, n.result), void(null != t && t())) : i.createThumbnailFromUrl(e, n.result, t)
                    }
                }(this), n.readAsDataURL(e)
            }, t.prototype.createThumbnailFromUrl = function(e, t, n) {
                var i;
                return i = document.createElement("img"), i.onload = function(t) {
                    return function() {
                        var o, a, s, l, c, u, d, p;
                        return e.width = i.width, e.height = i.height, s = t.options.resize.call(t, e), null == s.trgWidth && (s.trgWidth = s.optWidth), null == s.trgHeight && (s.trgHeight = s.optHeight), o = document.createElement("canvas"), a = o.getContext("2d"), o.width = s.trgWidth, o.height = s.trgHeight, r(a, i, null != (c = s.srcX) ? c : 0, null != (u = s.srcY) ? u : 0, s.srcWidth, s.srcHeight, null != (d = s.trgX) ? d : 0, null != (p = s.trgY) ? p : 0, s.trgWidth, s.trgHeight), l = o.toDataURL("image/png"), t.emit("thumbnail", e, l), null != n ? n() : void 0
                    }
                }(this), null != n && (i.onerror = n), i.src = t
            }, t.prototype.processQueue = function() {
                var e, t, n, i;
                if (t = this.options.parallelUploads, n = this.getUploadingFiles().length, e = n, !(n >= t) && (i = this.getQueuedFiles(), i.length > 0)) {
                    if (this.options.uploadMultiple)
                        return this.processFiles(i.slice(0, t - n));
                    for (; t > e;) {
                        if (!i.length)
                            return;
                        this.processFile(i.shift()), e++
                    }
                }
            }, t.prototype.processFile = function(e) {
                return this.processFiles([e])
            }, t.prototype.processFiles = function(e) {
                var n, i, o;
                for (i = 0, o = e.length; o > i; i++)
                    n = e[i], n.processing=!0, n.status = t.UPLOADING, this.emit("processing", n);
                return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
            }, t.prototype._getFilesWithXhr = function(e) {
                var t, n;
                return n = function() {
                    var n, i, o, a;
                    for (o = this.files, a = [], n = 0, i = o.length; i > n; n++)
                        t = o[n], t.xhr === e && a.push(t);
                    return a
                }.call(this)
            }, t.prototype.cancelUpload = function(e) {
                var n, i, o, a, s, r, l;
                if (e.status === t.UPLOADING) {
                    for (i = this._getFilesWithXhr(e.xhr), o = 0, s = i.length; s > o; o++)
                        n = i[o], n.status = t.CANCELED;
                    for (e.xhr.abort(), a = 0, r = i.length; r > a; a++)
                        n = i[a], this.emit("canceled", n);
                    this.options.uploadMultiple && this.emit("canceledmultiple", i)
                } else ((l = e.status) === t.ADDED || l === t.QUEUED)
                    && (e.status = t.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                return this.options.autoProcessQueue ? this.processQueue() : void 0
            }, o = function() {
                var e, t;
                return t = arguments[0], e = 2 <= arguments.length ? u.call(arguments, 1) : [], "function" == typeof t ? t.apply(this, e) : t
            }, t.prototype.uploadFile = function(e) {
                return this.uploadFiles([e])
            }, t.prototype.uploadFiles = function(e) {
                var i, a, s, r, l, c, u, d, p, h, f, m, g, v, y, b, w, x, C, k, $, T, _, E, S, A, D, F, j, P, I, q, O, L;
                for (C = new XMLHttpRequest, k = 0, E = e.length; E > k; k++)
                    i = e[k], i.xhr = C;
                m = o(this.options.method, e), w = o(this.options.url, e), C.open(m, w, !0), C.withCredentials=!!this.options.withCredentials, y = null, s = function(t) {
                    return function() {
                        var n, o, a;
                        for (a = [], n = 0, o = e.length; o > n; n++)
                            i = e[n], a.push(t._errorProcessing(e, y || t.options.dictResponseError.replace("{{statusCode}}", C.status), C));
                        return a
                    }
                }(this), b = function(t) {
                    return function(n) {
                        var o, a, s, r, l, c, u, d, p;
                        if (null != n)
                            for (a = 100 * n.loaded / n.total, s = 0, c = e.length; c > s; s++)
                                i = e[s], i.upload = {
                                    progress: a,
                                    total: n.total,
                                    bytesSent: n.loaded
                                };
                        else {
                            for (o=!0, a = 100, r = 0, u = e.length; u > r; r++)
                                i = e[r], (100 !== i.upload.progress || i.upload.bytesSent !== i.upload.total) && (o=!1), i.upload.progress = a, i.upload.bytesSent = i.upload.total;
                            if (o)
                                return
                        }
                        for (p = [], l = 0, d = e.length; d > l; l++)
                            i = e[l], p.push(t.emit("uploadprogress", i, a, i.upload.bytesSent));
                        return p
                    }
                }(this), C.onload = function(n) {
                    return function(i) {
                        var o;
                        if (e[0].status !== t.CANCELED && 4 === C.readyState) {
                            if (y = C.responseText, C.getResponseHeader("content-type")&&~C.getResponseHeader("content-type").indexOf("application/json"))
                                try {
                                    y = JSON.parse(y)
                                } catch (a) {
                                i = a, y = "Invalid JSON response from server."
                            }
                            return b(), 200 <= (o = C.status) && 300 > o ? n._finished(e, y, i) : s()
                        }
                    }
                }(this), C.onerror = function(n) {
                    return function() {
                        return e[0].status !== t.CANCELED ? s() : void 0
                    }
                }(this), v = null != (j = C.upload) ? j : C, v.onprogress = b, c = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                }, this.options.headers && n(c, this.options.headers);
                for (r in c)
                    l = c[r], C.setRequestHeader(r, l);
                if (a = new FormData, this.options.params) {
                    P = this.options.params;
                    for (f in P)
                        x = P[f], a.append(f, x)
                }
                for ($ = 0, S = e.length; S > $; $++)
                    i = e[$], this.emit("sending", i, C, a);
                if (this.options.uploadMultiple && this.emit("sendingmultiple", e, C, a), "FORM" === this.element.tagName)
                    for (I = this.element.querySelectorAll("input, textarea, select, button"), T = 0, A = I.length; A > T; T++)
                        if (d = I[T], p = d.getAttribute("name"), h = d.getAttribute("type"), "SELECT" === d.tagName && d.hasAttribute("multiple"))
                            for (q = d.options, _ = 0, D = q.length; D > _; _++)
                                g = q[_], g.selected && a.append(p, g.value);
                        else (!h || "checkbox" !== (O = h.toLowerCase()) && "radio" !== O || d.checked)
                            && a.append(p, d.value);
                for (u = F = 0, L = e.length - 1; L >= 0 ? L >= F : F >= L; u = L >= 0?++F : --F)
                    a.append(this._getParamName(u), e[u], e[u].name);
                return C.send(a)
            }, t.prototype._finished = function(e, n, i) {
                var o, a, s;
                for (a = 0, s = e.length; s > a; a++)
                    o = e[a], o.status = t.SUCCESS, this.emit("success", o, n, i), this.emit("complete", o);
                return this.options.uploadMultiple && (this.emit("successmultiple", e, n, i), this.emit("completemultiple", e)), this.options.autoProcessQueue ? this.processQueue() : void 0
            }, t.prototype._errorProcessing = function(e, n, i) {
                var o, a, s;
                for (a = 0, s = e.length; s > a; a++)
                    o = e[a], o.status = t.ERROR, this.emit("error", o, n, i), this.emit("complete", o);
                return this.options.uploadMultiple && (this.emit("errormultiple", e, n, i), this.emit("completemultiple", e)), this.options.autoProcessQueue ? this.processQueue() : void 0
            }, t
        }(i), n.version = "4.0.1", n.options = {}, n.optionsForElement = function(e) {
            return e.getAttribute("id") ? n.options[o(e.getAttribute("id"))] : void 0
        }, n.instances = [], n.forElement = function(e) {
            if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0))
                throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
            return e.dropzone
        }, n.autoDiscover=!0, n.discover = function() {
            var e, t, i, o, a, s;
            for (document.querySelectorAll ? i = document.querySelectorAll(".dropzone") : (i = [], e = function(e) {
                var t, n, o, a;
                for (a = [], n = 0, o = e.length; o > n; n++)
                    t = e[n], /(^| )dropzone($| )/.test(t.className) ? a.push(i.push(t)) : a.push(void 0);
                return a
            }, e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))), s = [], o = 0, a = i.length; a > o; o++)
                t = i[o], n.optionsForElement(t)!==!1 ? s.push(new n(t)) : s.push(void 0);
            return s
        }, n.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], n.isBrowserSupported = function() {
            var e, t, i, o, a;
            if (e=!0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                if ("classList"in document.createElement("a"))
                    for (a = n.blacklistedBrowsers, i = 0, o = a.length; o > i; i++)
                        t = a[i], t.test(navigator.userAgent) && (e=!1);
                else
                    e=!1;
            else
                e=!1;
            return e
        }, c = function(e, t) {
            var n, i, o, a;
            for (a = [], i = 0, o = e.length; o > i; i++)
                n = e[i], n !== t && a.push(n);
            return a
        }, o = function(e) {
            return e.replace(/[\-_](\w)/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        }, n.createElement = function(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.childNodes[0]
        }, n.elementInside = function(e, t) {
            if (e === t)
                return !0;
            for (; e = e.parentNode;)
                if (e === t)
                    return !0;
            return !1
        }, n.getElement = function(e, t) {
            var n;
            if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n)
                throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
            return n
        }, n.getElements = function(e, t) {
            var n, i, o, a, s, r, l, c;
            if (e instanceof Array) {
                o = [];
                try {
                    for (a = 0, r = e.length; r > a; a++)
                        i = e[a], o.push(this.getElement(i, t))
                    } catch (u) {
                    n = u, o = null
                }
            } else if ("string" == typeof e)
                for (o = [], c = document.querySelectorAll(e), s = 0, l = c.length; l > s; s++)
                    i = c[s], o.push(i);
            else
                null != e.nodeType && (o = [e]);
            if (null == o ||!o.length)
                throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
            return o
        }, n.confirm = function(e, t, n) {
            return window.confirm(e) ? t() : null != n ? n() : void 0
        }, n.isValidFile = function(e, t) {
            var n, i, o, a, s;
            if (!t)
                return !0;
            for (t = t.split(","), i = e.type, n = i.replace(/\/.*$/, ""), a = 0, s = t.length; s > a; a++)
                if (o = t[a], o = o.trim(), "." === o.charAt(0)) {
                    if ( - 1 !== e.name.toLowerCase().indexOf(o.toLowerCase(), e.name.length - o.length))
                        return !0
                } else if (/\/\*$/.test(o)) {
                    if (n === o.replace(/\/.*$/, ""))
                        return !0
                } else if (i === o)
                    return !0;
            return !1
        }, "undefined" != typeof e && null !== e && (e.fn.dropzone = function(e) {
            return this.each(function() {
                return new n(this, e)
            })
        }), "undefined" != typeof t && null !== t ? t.exports = n : window.Dropzone = n, n.ADDED = "added", n.QUEUED = "queued", n.ACCEPTED = n.QUEUED, n.UPLOADING = "uploading", n.PROCESSING = n.UPLOADING, n.CANCELED = "canceled", n.ERROR = "error", n.SUCCESS = "success", s = function(e) {
            var t, n, i, o, a, s, r, l, c, u;
            for (r = e.naturalWidth, s = e.naturalHeight, n = document.createElement("canvas"), n.width = 1, n.height = s, i = n.getContext("2d"), i.drawImage(e, 0, 0), o = i.getImageData(0, 0, 1, s).data, u = 0, a = s, l = s; l > u;)
                t = o[4 * (l - 1) + 3], 0 === t ? a = l : u = l, l = a + u>>1;
            return c = l / s, 0 === c ? 1 : c
        }, r = function(e, t, n, i, o, a, r, l, c, u) {
            var d;
            return d = s(t), e.drawImage(t, n, i, o, a, r, l, c, u / d)
        }, a = function(e, t) {
            var n, i, o, a, s, r, l, c, u;
            if (o=!1, u=!0, i = e.document, c = i.documentElement, n = i.addEventListener ? "addEventListener" : "attachEvent", l = i.addEventListener ? "removeEventListener" : "detachEvent", r = i.addEventListener ? "" : "on", a = function(n) {
                return "readystatechange" !== n.type || "complete" === i.readyState ? (("load" === n.type ? e : i)[l](r + n.type, a, !1), !o && (o=!0) ? t.call(e, n.type || n) : void 0) : void 0
            }, s = function() {
                var e;
                try {
                    c.doScroll("left")
                } catch (t) {
                    return e = t, void setTimeout(s, 50)
                }
                return a("poll")
            }, "complete" !== i.readyState) {
                if (i.createEventObject && c.doScroll) {
                    try {
                        u=!e.frameElement
                    } catch (d) {}
                    u && s()
                }
                return i[n](r + "DOMContentLoaded", a, !1), i[n](r + "readystatechange", a, !1), e[n](r + "load", a, !1)
            }
        }, n._autoDiscoverFunction = function() {
            return n.autoDiscover ? n.discover() : void 0
        }, a(window, n._autoDiscoverFunction)
    }.call(this), t.exports
}), define("module/dropzone", ["require", "jquery", "module/progress", "module/alert", "module/modal", "dropzone-amd-module"], function(e) {
    var t = e("jquery"), n = e("module/progress"), i = e("module/alert"), o = e("module/modal"), a = (e("dropzone-amd-module"), {
        params: {
            dropzone: null,
            uploadType: "select",
            uploadErrors: [],
            isImporting: !1
        },
        functions: {
            initDropzone: function(e) {
                var s = {
                    url: e.url,
                    method: "post",
                    createImageThumbnails: !1,
                    uploadMultiple: e.uploadMultiple?!0: !1,
                    parallelUploads: e.parallelUploads ? e.parallelUploads: 1,
                    paramName: "file",
                    maxFilesize: e.maxFilesize / 1024 / 1024,
                    previewsContainer: !1,
                    reference: e.reference,
                    fallback: function() {
                        i.functions.showAlert("<b>Your browser is out of date</b> and not compatible with our application. You can either update your browser to a newer version or <a href='https://www.google.ca/chrome/browser/desktop/' target='_blank'>Download Google Chrome</a>.",
                        "Browser Outdated")
                    }, init : function() {
                        this.on("drop", function(t, n, i) {
                            a.params.uploadType = "drop", e.onDrop && e.onDrop()
                        }), this.on("addedfile", function(e) {
                            n.functions.incrementTotalCount()
                        }), this.on("sending", function(n, i, o) {
                            o.append("strUploadType", a.params.uploadType), t(e.clickButtonId).attr({
                                disabled: !0
                            }).addClass("disabled").find("i").removeClass(e.icon).addClass("fa-spinner fa-spin").end().find("span").html("Importing " + e.name + " ..."), a.params.isImporting=!0, e.onSending && e.onSending(o)
                        }), this.on("processing", function() {
                            n.functions.showProgress(e.name), e.onProcessing && e.onProcessing()
                        }), this.on("uploadprogress", function(t, n, i) {
                            e.onProgress && e.onProgress(t, n, i)
                        }), this.on("queuecomplete", function(n) {
                            a.params.isImporting=!1, a.params.uploadType = "select", t(e.clickButtonId).attr({
                                disabled: !1
                            }).removeClass("disabled").find("i").removeClass("fa-spinner fa-spin").addClass(e.icon), e.text && t(e.clickButtonId).find("span").html(e.text), a.params.uploadErrors.length > 0 && i.functions.showUploadFailedAlert(a.params.uploadErrors), e.onQueueComplete && e.onQueueComplete(a.params.uploadErrors.length > 0), a.params.uploadErrors = []
                        }), this.on("error", function(t, i, o) {
                            n.functions.fileCompleted(), o ? 422 == o.status ? a.params.uploadErrors.push({
                                name: t.name,
                                reason: "unsupported format"
                            }) : 500 == o.status && a.params.uploadErrors.push({
                                name: t.name,
                                reason: "corrupt file"
                            }) : a.params.uploadErrors.push({
                                name: t.name,
                                reason: "upload error"
                            }), analytics.track(e.name + " Upload Failed", {
                                file: t,
                                errorMessage: i,
                                xhr: o,
                                name: t && t.name,
                                size: t && t.size,
                                type: t && t.type,
                                lastModifiedDate: t && t.lastModifiedDate
                            }), e.onError && e.onError(t, i, o)
                        }), this.on("success", function(t, i) {
                            n.functions.fileCompleted(), i.restricted ? (this.removeAllFiles(), o.functions.showModal("add_" + e.name.toLowerCase(), !0, e.onModalHidden), n.functions.resetProgress(), e.onRestricted && e.onRestricted(t, i)) : e.onSuccess && e.onSuccess(t, i)
                        }), a.params.dropzone = this
                    }, onBuild: function(e) {
                        t("body").dropzone(e)
                    }
                };
                t.extend(s,
                e),
                e.clickable && (s.clickable = e.clickButtonId),
                n.functions.buildProgress(),
                s.onBuild && s.onBuild(s)
            }
        }
    });
    return a
}), define("module/list", ["require", "jquery", "module/browser"], function(e) {
    var t = e("jquery"), n = e("module/browser"), i = {
        params: {
            isOpen: !1,
            $container: null,
            $list: null,
            $items: null,
            $li: null
        },
        functions: {
            buildList: function(e) {
                var n = this, o = ".sb-site-container";
                i.params.$container = t(o + ", .sb-slide"), n.params.listIsBuilt=!0, t(o).bind("webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend", function(n) {
                    t(n.target).is(o) && e()
                })
            },
            slideIn: function(e) {
                i.params.$list = this.elements.$attribute, i.params.$items = this.elements.$items, i.params.offsetTop = this.params.offsetTop, i.params.$li = e.elements.$li, i.functions.adjustBoundaryBox(), i.params.isOpen=!0, i.params.$container.addClass("open")
            },
            slideOut: function() {
                i.params.$container.removeClass("open"), i.params.isOpen=!1
            },
            adjustBoundaryBox: function() {
                if (n.isMobileScreen())
                    return !1;
                var e = t(window).height(), o = (i.params.$items, i.params.$li.offset().left), a = i.params.isOpen ? 0: 250;
                i.params.$list.css({
                    left: - 1 * (o + a)
                }), i.params.$list.css({
                    top: - 1 * e + "px",
                    height: e + "px"
                }), i.params.$items.css({
                    height: e - i.params.offsetTop + "px"
                })
            }
        }
    };
    return i
}), function(e, t) {
    "function" == typeof define && define.amd ? define("tether", t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.Tether = t()
}(this, function(e, t, n) {
    return function() {
        var e, t, n, i, o, a, s, r, l, c, u, d, p, h, f, m, g, v = {}.hasOwnProperty, y = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e)
                    return t;
            return - 1
        }, b = [].slice;
        null == this.Tether && (this.Tether = {
            modules: []
        }), u = function(e) {
            var t, n, i, o, a;
            if (n = getComputedStyle(e).position, "fixed" === n)
                return e;
            for (i = void 0, t = e; t = t.parentNode;) {
                try {
                    o = getComputedStyle(t)
                } catch (s) {}
                if (null == o)
                    return t;
                if (/(auto|scroll)/.test(o.overflow + o["overflow-y"] + o["overflow-x"]) && ("absolute" !== n || "relative" === (a = o.position) || "absolute" === a || "fixed" === a))
                    return t
            }
            return document.body
        }, f = function() {
            var e;
            return e = 0, function() {
                return e++
            }
        }(), g = {}, l = function(e) {
            var t, i, a, s, r;
            if (a = e._tetherZeroElement, null == a && (a = e.createElement("div"), a.setAttribute("data-tether-id", f()), o(a.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), e.body.appendChild(a), e._tetherZeroElement = a), t = a.getAttribute("data-tether-id"), null == g[t]) {
                g[t] = {}, r = a.getBoundingClientRect();
                for (i in r)
                    s = r[i], g[t][i] = s;
                n(function() {
                    return g[t] = void 0
                })
            }
            return g[t]
        }, p = null, s = function(e) {
            var t, n, i, o, a, s, r;
            e === document ? (n = document, e = document.documentElement) : n = e.ownerDocument, i = n.documentElement, t = {}, r = e.getBoundingClientRect();
            for (o in r)
                s = r[o], t[o] = s;
            return a = l(n), t.top -= a.top, t.left -= a.left, null == t.width && (t.width = document.body.scrollWidth - t.left - t.right), null == t.height && (t.height = document.body.scrollHeight - t.top - t.bottom), t.top = t.top - i.clientTop, t.left = t.left - i.clientLeft, t.right = n.body.clientWidth - t.width - t.left, t.bottom = n.body.clientHeight - t.height - t.top, t
        }, r = function(e) {
            return e.offsetParent || document.documentElement
        }, c = function() {
            var e, t, n, i, a;
            return e = document.createElement("div"), e.style.width = "100%", e.style.height = "200px", t = document.createElement("div"), o(t.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), t.appendChild(e), document.body.appendChild(t), i = e.offsetWidth, t.style.overflow = "scroll", a = e.offsetWidth, i === a && (a = t.clientWidth), document.body.removeChild(t), n = i - a, {
                width: n,
                height: n
            }
        }, o = function(e) {
            var t, n, i, o, a, s, r;
            for (null == e && (e = {}), t = [], Array.prototype.push.apply(t, arguments), r = t.slice(1), a = 0, s = r.length; s > a; a++)
                if (i = r[a])
                    for (n in i)
                        v.call(i, n) && (o = i[n], e[n] = o);
            return e
        }, h = function(e, t) {
            var n, i, o, a, s;
            if (null != e.classList) {
                for (a = t.split(" "), s = [], i = 0, o = a.length; o > i; i++)
                    n = a[i], n.trim() && s.push(e.classList.remove(n));
                return s
            }
            return e.className = e.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"), " ")
        }, t = function(e, t) {
            var n, i, o, a, s;
            if (null != e.classList) {
                for (a = t.split(" "), s = [], i = 0, o = a.length; o > i; i++)
                    n = a[i], n.trim() && s.push(e.classList.add(n));
                return s
            }
            return h(e, t), e.className += " " + t
        }, d = function(e, t) {
            return null != e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
        }, m = function(e, n, i) {
            var o, a, s, r, l, c;
            for (a = 0, r = i.length; r > a; a++)
                o = i[a], y.call(n, o) < 0 && d(e, o) && h(e, o);
            for (c = [], s = 0, l = n.length; l > s; s++)
                o = n[s], d(e, o) ? c.push(void 0) : c.push(t(e, o));
            return c
        }, i = [], n = function(e) {
            return i.push(e)
        }, a = function() {
            var e, t;
            for (t = []; e = i.pop();)
                t.push(e());
            return t
        }, e = function() {
            function e() {}
            return e.prototype.on = function(e, t, n, i) {
                var o;
                return null == i && (i=!1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[e] && (o[e] = []), this.bindings[e].push({
                    handler: t,
                    ctx: n,
                    once: i
                })
            }, e.prototype.once = function(e, t, n) {
                return this.on(e, t, n, !0)
            }, e.prototype.off = function(e, t) {
                var n, i, o;
                if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                    if (null == t)
                        return delete this.bindings[e];
                    for (n = 0, o = []; n < this.bindings[e].length;)
                        this.bindings[e][n].handler === t ? o.push(this.bindings[e].splice(n, 1)) : o.push(n++);
                    return o
                }
            }, e.prototype.trigger = function() {
                var e, t, n, i, o, a, s, r, l;
                if (n = arguments[0], e = 2 <= arguments.length ? b.call(arguments, 1) : [], null != (s = this.bindings) ? s[n] : void 0) {
                    for (o = 0, l = []; o < this.bindings[n].length;)
                        r = this.bindings[n][o], i = r.handler, t = r.ctx, a = r.once, i.apply(null != t ? t : this, e), a ? l.push(this.bindings[n].splice(o, 1)) : l.push(o++);
                    return l
                }
            }, e
        }(), this.Tether.Utils = {
            getScrollParent: u,
            getBounds: s,
            getOffsetParent: r,
            extend: o,
            addClass: t,
            removeClass: h,
            hasClass: d,
            updateClasses: m,
            defer: n,
            flush: a,
            uniqueId: f,
            Evented: e,
            getScrollBarSize: c
        }
    }.call(this), function() {
        var e, t, n, i, o, a, s, r, l, c, u, d, p, h, f, m, g, v, y, b, w, x, C, k, $, T, _, E, S, A = [].slice, D = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        if (null == this.Tether)
            throw new Error("You must include the utils.js file before tether.js");
        i = this.Tether, S = i.Utils, m = S.getScrollParent, g = S.getSize, h = S.getOuterSize, d = S.getBounds, p = S.getOffsetParent, c = S.extend, o = S.addClass, C = S.removeClass, T = S.updateClasses, l = S.defer, u = S.flush, f = S.getScrollBarSize, _ = function(e, t, n) {
            return null == n && (n = 1), e + n >= t && t >= e - n
        }, $ = function() {
            var e, t, n, i, o;
            for (e = document.createElement("div"), o = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0, i = o.length; i > n; n++)
                if (t = o[n], void 0 !== e.style[t])
                    return t
        }(), k = [], x = function() {
            var e, t, n;
            for (t = 0, n = k.length; n > t; t++)
                e = k[t], e.position(!1);
            return u()
        }, v = function() {
            var e;
            return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : + new Date
        }, function() {
            var e, t, n, i, o, a, s, r, l;
            for (t = null, n = null, i = null, o = function() {
                if (null != n && n > 16)
                    return n = Math.min(n - 16, 250), void(i = setTimeout(o, 250));
                if (!(null != t && v() - t < 10))
                    return null != i && (clearTimeout(i), i = null), t = v(), x(), n = v() - t
            }, r = ["resize", "scroll", "touchmove"], l = [], a = 0, s = r.length; s > a; a++)
                e = r[a], l.push(window.addEventListener(e, o));
            return l
        }(), e = {
            center: "center",
            left: "right",
            right: "left"
        }, t = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        }, n = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        }, r = function(n, i) {
            var o, a;
            return o = n.left, a = n.top, "auto" === o && (o = e[i.left]), "auto" === a && (a = t[i.top]), {
                left: o,
                top: a
            }
        }, s = function(e) {
            var t, i;
            return {
                left: null != (t = n[e.left]) ? t: e.left,
                top: null != (i = n[e.top]) ? i: e.top
            }
        }, a = function() {
            var e, t, n, i, o, a, s;
            for (t = 1 <= arguments.length ? A.call(arguments, 0) : [], n = {
                top: 0,
                left: 0
            }, o = 0, a = t.length; a > o; o++)
                s = t[o], i = s.top, e = s.left, "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof e && (e = parseFloat(e, 10)), n.top += i, n.left += e;
            return n
        }, y = function(e, t) {
            return "string" == typeof e.left&&-1 !== e.left.indexOf("%") && (e.left = parseFloat(e.left, 10) / 100 * t.width), "string" == typeof e.top&&-1 !== e.top.indexOf("%") && (e.top = parseFloat(e.top, 10) / 100 * t.height), e
        }, b = w = function(e) {
            var t, n, i;
            return i = e.split(" "), n = i[0], t = i[1], {
                top: n,
                left: t
            }
        }, E = function() {
            function e(e) {
                this.position = D(this.position, this);
                var t, n, o, a, s;
                for (k.push(this), this.history = [], this.setOptions(e, !1), a = i.modules, n = 0, o = a.length; o > n; n++)
                    t = a[n], null != (s = t.initialize) && s.call(this);
                this.position()
            }
            return e.modules = [], e.prototype.getClass = function(e) {
                var t, n;
                return (null != (t = this.options.classes) ? t[e] : void 0) ? this.options.classes[e] : (null != (n = this.options.classes) ? n[e] : void 0)!==!1 ? this.options.classPrefix ? "" + this.options.classPrefix + "-" + e : e : ""
            }, e.prototype.setOptions = function(e, t) {
                var n, i, a, s, r, l;
                for (this.options = e, null == t && (t=!0), n = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether"
                }, this.options = c(n, this.options), r = this.options, this.element = r.element, this.target = r.target, this.targetModifier = r.targetModifier, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), l = ["element", "target"], a = 0, s = l.length; s > a; a++) {
                    if (i = l[a], null == this[i])
                        throw new Error("Tether Error: Both element and target must be defined");
                    null != this[i].jquery ? this[i] = this[i][0] : "string" == typeof this[i] && (this[i] = document.querySelector(this[i]))
                }
                if (o(this.element, this.getClass("element")), o(this.target, this.getClass("target")), !this.options.attachment)
                    throw new Error("Tether Error: You must provide an attachment");
                return this.targetAttachment = b(this.options.targetAttachment), this.attachment = b(this.options.attachment), this.offset = w(this.options.offset), this.targetOffset = w(this.options.targetOffset), null != this.scrollParent && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = m(this.target), this.options.enabled!==!1 ? this.enable(t) : void 0
            }, e.prototype.getTargetBounds = function() {
                var e, t, n, i, o, a, s, r, l;
                if (null == this.targetModifier)
                    return d(this.target);
                switch (this.targetModifier) {
                case"visible":
                    return this.target === document.body ? {
                        top: pageYOffset,
                        left: pageXOffset,
                        height: innerHeight,
                        width: innerWidth
                    } : (e = d(this.target), o = {
                        height: e.height,
                        width: e.width,
                        top: e.top,
                        left: e.left
                    }, o.height = Math.min(o.height, e.height - (pageYOffset - e.top)), o.height = Math.min(o.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))), o.height = Math.min(innerHeight, o.height), o.height -= 2, o.width = Math.min(o.width, e.width - (pageXOffset - e.left)), o.width = Math.min(o.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))), o.width = Math.min(innerWidth, o.width), o.width -= 2, o.top < pageYOffset && (o.top = pageYOffset), o.left < pageXOffset && (o.left = pageXOffset), o);
                case"scroll-handle":
                    return l = this.target, l === document.body ? (l = document.documentElement, e = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth
                    }) : e = d(l), r = getComputedStyle(l), n = l.scrollWidth > l.clientWidth || "scroll" === [r.overflow, r.overflowX] || this.target !== document.body, a = 0, n && (a = 15), i = e.height - parseFloat(r.borderTopWidth) - parseFloat(r.borderBottomWidth) - a, o = {
                        width: 15,
                        height: .975 * i * (i / l.scrollHeight),
                        left: e.left + e.width - parseFloat(r.borderLeftWidth) - 15
                    }, t = 0, 408 > i && this.target === document.body && (t =- 11e-5 * Math.pow(i, 2) - .00727 * i + 22.58), this.target !== document.body && (o.height = Math.max(o.height, 24)), s = this.target.scrollTop / (l.scrollHeight - i), o.top = s * (i - o.height - t) + e.top + parseFloat(r.borderTopWidth), this.target === document.body && (o.height = Math.max(o.height, 24)), o
                }
            }, e.prototype.clearCache = function() {
                return this._cache = {}
            }, e.prototype.cache = function(e, t) {
                return null == this._cache && (this._cache = {}), null == this._cache[e] && (this._cache[e] = t.call(this)), this._cache[e]
            }, e.prototype.enable = function(e) {
                return null == e && (e=!0), o(this.target, this.getClass("enabled")), o(this.element, this.getClass("enabled")), this.enabled=!0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), e ? this.position() : void 0
            }, e.prototype.disable = function() {
                return C(this.target, this.getClass("enabled")), C(this.element, this.getClass("enabled")), this.enabled=!1, null != this.scrollParent ? this.scrollParent.removeEventListener("scroll", this.position) : void 0
            }, e.prototype.destroy = function() {
                var e, t, n, i, o;
                for (this.disable(), o = [], e = n = 0, i = k.length; i > n; e=++n) {
                    if (t = k[e], t === this) {
                        k.splice(e, 1);
                        break
                    }
                    o.push(void 0)
                }
                return o
            }, e.prototype.updateAttachClasses = function(e, t) {
                var n, i, o, a, s, r, c, u, d, p = this;
                for (null == e && (e = this.attachment), null == t && (t = this.targetAttachment), a = ["left", "top", "bottom", "right", "middle", "center"], (null != (d = this._addAttachClasses) ? d.length : void 0) && this._addAttachClasses.splice(0, this._addAttachClasses.length), n = null != this._addAttachClasses ? this._addAttachClasses : this._addAttachClasses = [], e.top && n.push("" + this.getClass("element-attached") + "-" + e.top), e.left && n.push("" + this.getClass("element-attached") + "-" + e.left), t.top && n.push("" + this.getClass("target-attached") + "-" + t.top), t.left && n.push("" + this.getClass("target-attached") + "-" + t.left), i = [], s = 0, c = a.length; c > s; s++)
                    o = a[s], i.push("" + this.getClass("element-attached") + "-" + o);
                for (r = 0, u = a.length; u > r; r++)
                    o = a[r], i.push("" + this.getClass("target-attached") + "-" + o);
                return l(function() {
                    return null != p._addAttachClasses ? (T(p.element, p._addAttachClasses, i), T(p.target, p._addAttachClasses, i), p._addAttachClasses = void 0) : void 0
                })
            }, e.prototype.position = function(e) {
                var t, n, o, l, c, h, m, g, v, b, w, x, C, k, $, T, _, E, S, A, D, F, j, P, I, q, O, L, M, N, z, R, H, B, W, U = this;
                if (null == e && (e=!0), this.enabled) {
                    for (this.clearCache(), A = r(this.targetAttachment, this.attachment), this.updateAttachClasses(this.attachment, A), t = this.cache("element-bounds", function() {
                        return d(U.element)
                    }), I = t.width, o = t.height, 0 === I && 0 === o && null != this.lastSize ? (N = this.lastSize, I = N.width, o = N.height) : this.lastSize = {
                        width: I,
                        height: o
                    }, j = F = this.cache("target-bounds", function() {
                        return U.getTargetBounds()
                    }), v = y(s(this.attachment), {
                        width: I,
                        height: o
                    }), D = y(s(A), j), c = y(this.offset, {
                        width: I,
                        height: o
                    }), h = y(this.targetOffset, j), v = a(v, c), D = a(D, h), l = F.left + D.left - v.left, P = F.top + D.top - v.top, z = i.modules, q = 0, L = z.length; L > q; q++)
                        if (m = z[q], $ = m.position.call(this, {
                            left: l,
                            top: P,
                            targetAttachment: A,
                            targetPos: F,
                            attachment: this.attachment,
                            elementPos: t,
                            offset: v,
                            targetOffset: D,
                            manualOffset: c,
                            manualTargetOffset: h,
                            scrollbarSize: E
                        }), null != $ && "object" == typeof $) {
                            if ($===!1)
                                return !1;
                                P = $.top, l = $.left
                        }
                    if (g = {
                        page: {
                            top: P,
                            left: l
                        },
                        viewport: {
                            top: P - pageYOffset,
                            bottom: pageYOffset - P - o + innerHeight,
                            left: l - pageXOffset,
                            right: pageXOffset - l - I + innerWidth
                        }
                    }, document.body.scrollWidth > window.innerWidth && (E = this.cache("scrollbar-size", f), g.viewport.bottom -= E.height), document.body.scrollHeight > window.innerHeight && (E = this.cache("scrollbar-size", f), g.viewport.right -= E.width), ("" !== (R = document.body.style.position) && "static" !== R || "" !== (H = document.body.parentElement.style.position) && "static" !== H) && (g.page.bottom = document.body.scrollHeight - P - o, g.page.right = document.body.scrollWidth - l - I), (null != (B = this.options.optimizations) ? B.moveElement : void 0)!==!1 && null == this.targetModifier) {
                        for (w = this.cache("target-offsetparent", function() {
                            return p(U.target)
                        }), k = this.cache("target-offsetparent-bounds", function() {
                            return d(w)
                        }), C = getComputedStyle(w), n = getComputedStyle(this.element), x = k, b = {}, W = ["Top", "Left", "Bottom", "Right"], O = 0, M = W.length; M > O; O++)
                            S = W[O], b[S.toLowerCase()] = parseFloat(C["border" + S + "Width"]);
                        k.right = document.body.scrollWidth - k.left - x.width + b.right, k.bottom = document.body.scrollHeight - k.top - x.height + b.bottom, g.page.top >= k.top + b.top && g.page.bottom >= k.bottom && g.page.left >= k.left + b.left && g.page.right >= k.right && (_ = w.scrollTop, T = w.scrollLeft, g.offset = {
                            top: g.page.top - k.top + _ - b.top,
                            left: g.page.left - k.left + T - b.left
                        })
                    }
                    return this.move(g), this.history.unshift(g), this.history.length > 3 && this.history.pop(), e && u(), !0
                }
            }, e.prototype.move = function(e) {
                var t, n, i, o, a, s, r, u, d, h, f, m, g, v, y, b, w, x = this;
                if (null != this.element.parentNode) {
                    u = {};
                    for (h in e) {
                        u[h] = {};
                        for (o in e[h]) {
                            for (i=!1, b = this.history, v = 0, y = b.length; y > v; v++)
                                if (r = b[v], !_(null != (w = r[h]) ? w[o] : void 0, e[h][o])) {
                                    i=!0;
                                    break
                                }
                            i || (u[h][o]=!0)
                        }
                    }
                    t = {
                        top: "",
                        left: "",
                        right: "",
                        bottom: ""
                    }, d = function(e, n) {
                        var i, o, a;
                        return (null != (a = x.options.optimizations) ? a.gpu : void 0)===!1 ? (e.top ? t.top = "" + n.top + "px" : t.bottom = "" + n.bottom + "px", e.left ? t.left = "" + n.left + "px" : t.right = "" + n.right + "px") : (e.top ? (t.top = 0, o = n.top) : (t.bottom = 0, o =- n.bottom), e.left ? (t.left = 0, i = n.left) : (t.right = 0, i =- n.right), t[$] = "translateX(" + Math.round(i) + "px) translateY(" + Math.round(o) + "px)", "msTransform" !== $ ? t[$] += " translateZ(0)" : void 0)
                    }, a=!1, (u.page.top || u.page.bottom) && (u.page.left || u.page.right) ? (t.position = "absolute", d(u.page, e.page)) : (u.viewport.top || u.viewport.bottom) && (u.viewport.left || u.viewport.right) ? (t.position = "fixed", d(u.viewport, e.viewport)) : null != u.offset && u.offset.top && u.offset.left ? (t.position = "absolute", s = this.cache("target-offsetparent", function() {
                        return p(x.target)
                    }), p(this.element) !== s && l(function() {
                        return x.element.parentNode.removeChild(x.element), s.appendChild(x.element)
                    }), d(u.offset, e.offset), a=!0) : (t.position = "absolute", d({
                        top: !0,
                        left: !0
                    }, e.page)), a || "BODY" === this.element.parentNode.tagName || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element)), g = {}, m=!1;
                    for (o in t)
                        f = t[o], n = this.element.style[o], "" === n || "" === f || "top" !== o && "left" !== o && "bottom" !== o && "right" !== o || (n = parseFloat(n), f = parseFloat(f)), n !== f && (m=!0, g[o] = t[o]);
                    return m ? l(function() {
                        return c(x.element.style, g)
                    }) : void 0
                }
            }, e
        }(), i.position = x, this.Tether = c(E, i)
    }.call(this), function() {
        var e, t, n, i, o, a, s, r, l, c, u = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e)
                    return t;
            return - 1
        };
        c = this.Tether.Utils, s = c.getOuterSize, a = c.getBounds, r = c.getSize, i = c.extend, l = c.updateClasses, n = c.defer, t = {
            left: "right",
            right: "left",
            top: "bottom",
            bottom: "top",
            middle: "middle"
        }, e = ["left", "top", "right", "bottom"], o = function(t, n) {
            var i, o, s, r, l, c, u;
            if ("scrollParent" === n ? n = t.scrollParent : "window" === n && (n = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), n === document && (n = n.documentElement), null != n.nodeType)
                for (o = r = a(n), l = getComputedStyle(n), n = [o.left, o.top, r.width + o.left, r.height + o.top], i = c = 0, u = e.length; u > c; i=++c)
                    s = e[i], s = s[0].toUpperCase() + s.substr(1), "Top" === s || "Left" === s ? n[i] += parseFloat(l["border" + s + "Width"]) : n[i] -= parseFloat(l["border" + s + "Width"]);
            return n
        }, this.Tether.modules.push({
            position: function(t) {
                var s, r, c, d, p, h, f, m, g, v, y, b, w, x, C, k, $, T, _, E, S, A, D, F, j, P, I, q, O, L, M, N, z, R, H, B, W, U, V, Y, X, G, Z, K, Q, J, ee, te = this;
                if (P = t.top, y = t.left, S = t.targetAttachment, !this.options.constraints)
                    return !0;
                for (T = function(t) {
                    var n, i, o, a;
                    for (te.removeClass(t), a = [], i = 0, o = e.length; o > i; i++)
                        n = e[i], a.push(te.removeClass("" + t + "-" + n));
                    return a
                }, Y = this.cache("element-bounds", function() {
                    return a(te.element)
                }), v = Y.height, I = Y.width, 0 === I && 0 === v && null != this.lastSize && (X = this.lastSize, I = X.width, v = X.height), D = this.cache("target-bounds", function() {
                    return te.getTargetBounds()
                }), A = D.height, F = D.width, E = {}, g = {}, r = [this.getClass("pinned"), this.getClass("out-of-bounds")], G = this.options.constraints, q = 0, N = G.length; N > q; q++)
                    m = G[q], m.outOfBoundsClass && r.push(m.outOfBoundsClass), m.pinnedClass && r.push(m.pinnedClass);
                for (O = 0, z = r.length; z > O; O++)
                    for (f = r[O], Z = ["left", "top", "right", "bottom"], L = 0, R = Z.length; R > L; L++)
                        _ = Z[L], r.push("" + f + "-" + _);
                for (s = [], E = i({}, S), g = i({}, this.attachment), K = this.options.constraints, M = 0, H = K.length; H > M; M++) {
                    if (m = K[M], j = m.to, c = m.attachment, C = m.pin, null == c && (c = ""), u.call(c, " ") >= 0 ? (Q = c.split(" "), h = Q[0], p = Q[1]) : p = h = c, d = o(this, j), ("target" === h || "both" === h) && (P < d[1] && "top" === E.top && (P += A, E.top = "bottom"), P + v > d[3] && "bottom" === E.top && (P -= A, E.top = "top")), "together" === h && (P < d[1] && "top" === E.top && ("bottom" === g.top ? (P += A, E.top = "bottom", P += v, g.top = "top") : "top" === g.top && (P += A, E.top = "bottom", P -= v, g.top = "bottom")), P + v > d[3] && "bottom" === E.top && ("top" === g.top ? (P -= A, E.top = "top", P -= v, g.top = "bottom") : "bottom" === g.top && (P -= A, E.top = "top", P += v, g.top = "top")), "middle" === E.top && (P + v > d[3] && "top" === g.top ? (P -= v, g.top = "bottom") : P < d[1] && "bottom" === g.top && (P += v, g.top = "top"))), ("target" === p || "both" === p) && (y < d[0] && "left" === E.left && (y += F, E.left = "right"), y + I > d[2] && "right" === E.left && (y -= F, E.left = "left")), "together" === p && (y < d[0] && "left" === E.left ? "right" === g.left ? (y += F, E.left = "right", y += I, g.left = "left") : "left" === g.left && (y += F, E.left = "right", y -= I, g.left = "right") : y + I > d[2] && "right" === E.left ? "left" === g.left ? (y -= F, E.left = "left", y -= I, g.left = "right") : "right" === g.left && (y -= F, E.left = "left", y += I, g.left = "left") : "center" === E.left && (y + I > d[2] && "left" === g.left ? (y -= I, g.left = "right") : y < d[0] && "right" === g.left && (y += I, g.left = "left"))), ("element" === h || "both" === h) && (P < d[1] && "bottom" === g.top && (P += v, g.top = "top"), P + v > d[3] && "top" === g.top && (P -= v, g.top = "bottom")), ("element" === p || "both" === p) && (y < d[0] && "right" === g.left && (y += I, g.left = "left"), y + I > d[2] && "left" === g.left && (y -= I, g.left = "right")), "string" == typeof C ? C = function() {
                        var e, t, n, i;
                        for (n = C.split(","), i = [], t = 0, e = n.length; e > t; t++)
                            x = n[t], i.push(x.trim());
                        return i
                    }() : C===!0 && (C = ["top", "left", "right", "bottom"]), C || (C = []), k = [], b = [], P < d[1] && (u.call(C, "top") >= 0 ? (P = d[1], k.push("top")) : b.push("top")), P + v > d[3] && (u.call(C, "bottom") >= 0 ? (P = d[3] - v, k.push("bottom")) : b.push("bottom")), y < d[0] && (u.call(C, "left") >= 0 ? (y = d[0], k.push("left")) : b.push("left")), y + I > d[2] && (u.call(C, "right") >= 0 ? (y = d[2] - I, k.push("right")) : b.push("right")), k.length)
                        for ($ = null != (J = this.options.pinnedClass) ? J : this.getClass("pinned"), s.push($), U = 0, B = k.length; B > U; U++)
                            _ = k[U], s.push("" + $ + "-" + _);
                    if (b.length)
                        for (w = null != (ee = this.options.outOfBoundsClass) ? ee : this.getClass("out-of-bounds"), s.push(w), V = 0, W = b.length; W > V; V++)
                            _ = b[V], s.push("" + w + "-" + _);
                    (u.call(k, "left") >= 0 || u.call(k, "right") >= 0) && (g.left = E.left=!1), (u.call(k, "top") >= 0 || u.call(k, "bottom") >= 0) && (g.top = E.top=!1), (E.top !== S.top || E.left !== S.left || g.top !== this.attachment.top || g.left !== this.attachment.left) && this.updateAttachClasses(g, E)
                }
                return n(function() {
                    return l(te.target, s, r), l(te.element, s, r)
                }), {
                    top: P,
                    left: y
                }
            }
        })
    }.call(this), function() {
        var e, t, n, i;
        i = this.Tether.Utils, t = i.getBounds, n = i.updateClasses, e = i.defer, this.Tether.modules.push({
            position: function(i) {
                var o, a, s, r, l, c, u, d, p, h, f, m, g, v, y, b, w, x, C, k, $, T, _, E, S, A = this;
                if (f = i.top, c = i.left, $ = this.cache("element-bounds", function() {
                    return t(A.element)
                }), l = $.height, m = $.width, h = this.getTargetBounds(), r = f + l, u = c + m, o = [], f <= h.bottom && r >= h.top)
                    for (T = ["left", "right"], g = 0, w = T.length; w > g; g++)
                        d = T[g], ((_ = h[d]) === c || _ === u) && o.push(d);
                if (c <= h.right && u >= h.left)
                    for (E = ["top", "bottom"], v = 0, x = E.length; x > v; v++)
                        d = E[v], ((S = h[d]) === f || S === r) && o.push(d);
                for (s = [], a = [], p = ["left", "top", "right", "bottom"], s.push(this.getClass("abutted")), y = 0, C = p.length; C > y; y++)
                    d = p[y], s.push("" + this.getClass("abutted") + "-" + d);
                for (o.length && a.push(this.getClass("abutted")), b = 0, k = o.length; k > b; b++)
                    d = o[b], a.push("" + this.getClass("abutted") + "-" + d);
                return e(function() {
                    return n(A.target, a, s), n(A.element, a, s)
                }), !0
            }
        })
    }.call(this), function() {
        this.Tether.modules.push({
            position: function(e) {
                var t, n, i, o, a, s, r;
                return s = e.top, t = e.left, this.options.shift ? (n = function(e) {
                    return "function" == typeof e ? e.call(this, {
                        top: s,
                        left: t
                    }) : e
                }, i = n(this.options.shift), "string" == typeof i ? (i = i.split(" "), i[1] || (i[1] = i[0]), a = i[0], o = i[1], a = parseFloat(a, 10), o = parseFloat(o, 10)) : (r = [i.top, i.left], a = r[0], o = r[1]), s += a, t += o, {
                    top: s,
                    left: t
                }) : void 0
            }
        })
    }.call(this), this.Tether
}), function(e, t) {
    "function" == typeof define && define.amd ? define("shepherd-amd", ["tether"], t) : "object" == typeof exports ? module.exports = t(require("tether")) : e.Shepherd = t(e.Tether)
}(this, function(e) {
    return function() {
        var t, n, i, o, a, s, r, l, c, u, d, p, h, f, m, g = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }, v = {}.hasOwnProperty, y = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t)
                v.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
        m = e.Utils, l = m.extend, h = m.removeClass, s = m.addClass, u = m.hasClass, n = m.Evented, c = m.getBounds, f = m.uniqueId, i = new n, t = {
            top: "bottom center",
            left: "middle right",
            right: "middle left",
            bottom: "top center"
        }, r = function(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.children[0]
        }, d = function(e, t) {
            var n, i, o, a, s, r;
            return n = null != (i = null != (o = null != (a = null != (s = null != (r = e.matches) ? r : e.matchesSelector) ? s : e.webkitMatchesSelector) ? a : e.mozMatchesSelector) ? o : e.oMatchesSelector) ? i : e.msMatchesSelector, n.call(e, t)
        }, p = function(e, t) {
            var n, i, o, a, s, r;
            if (null == e)
                return e;
            if ("object" == typeof e)
                return e;
            for (a = e.split(" "), a.length > t.length && (a[0] = a.slice(0, + (a.length - t.length) + 1 || 9e9).join(" "), a.splice(1, a.length - t.length)), i = {}, n = s = 0, r = t.length; r > s; n=++s)
                o = t[n], i[o] = a[n];
            return i
        }, o = function(n) {
            function i(e, t) {
                this.tour = e, this.destroy = g(this.destroy, this), this.scrollTo = g(this.scrollTo, this), this.complete = g(this.complete, this), this.cancel = g(this.cancel, this), this.isOpen = g(this.isOpen, this), this.hide = g(this.hide, this), this.show = g(this.show, this), this.setOptions(t)
            }
            return y(i, n), i.prototype.setOptions = function(e) {
                var t, n, i, o;
                if (this.options = null != e ? e : {}, this.destroy(), this.id = this.options.id || this.id || "step-" + f(), this.options.when) {
                    o = this.options.when;
                    for (t in o)
                        n = o[t], this.on(t, n, this)
                }
                return null != (i = this.options).buttons ? i.buttons : i.buttons = [{
                    text: "Next",
                    action: this.tour.next
                }
                ]
            }, i.prototype.getTour = function() {
                return this.tour
            }, i.prototype.bindAdvance = function() {
                var e, t, n, i;
                return i = p(this.options.advanceOn, ["selector", "event"]), e = i.event, n = i.selector, t = function(e) {
                    return function(t) {
                        if (e.isOpen())
                            if (null != n) {
                                if (d(t.target, n))
                                    return e.tour.next()
                            } else if (e.el && t.target === e.el)
                                return e.tour.next()
                    }
                }(this), document.body.addEventListener(e, t), this.on("destroy", function() {
                    return document.body.removeEventListener(e, t)
                })
            }, i.prototype.getAttachTo = function() {
                var e;
                if (e = p(this.options.attachTo, ["element", "on"]), null == e && (e = {}), "string" == typeof e.element && (e.element = document.querySelector(e.element), null == e.element))
                    throw new Error("Shepherd step's attachTo was not found in the page");
                return e
            }, i.prototype.setupTether = function() {
                var n, i, o;
                if ("undefined" == typeof e || null === e)
                    throw new Error("Using the attachment feature of Shepherd requires the Tether library");
                return i = this.getAttachTo(), n = t[i.on || "right"], null == i.element && (i.element = "viewport", n = "middle center"), o = {
                    classPrefix: "shepherd",
                    element: this.el,
                    constraints: [{
                        to: "window",
                        pin: !0,
                        attachment: "together"
                    }
                    ],
                    target: i.element,
                    offset: i.offset || "0 0",
                    attachment: n
                }, this.tether = new e(l(o, this.options.tetherOptions))
            }, i.prototype.show = function() {
                return null == this.el && this.render(), s(this.el, "shepherd-open"), document.body.setAttribute("data-shepherd-step", this.id), this.setupTether(), this.options.scrollTo && setTimeout(function(e) {
                    return function() {
                        return e.scrollTo()
                    }
                }(this)), this.trigger("show")
            }, i.prototype.hide = function() {
                var e;
                return h(this.el, "shepherd-open"), document.body.removeAttribute("data-shepherd-step"), null != (e = this.tether) && e.destroy(), this.tether = null, this.trigger("hide")
            }, i.prototype.isOpen = function() {
                return u(this.el, "shepherd-open")
            }, i.prototype.cancel = function() {
                return this.tour.cancel(), this.trigger("cancel")
            }, i.prototype.complete = function() {
                return this.tour.complete(), this.trigger("complete")
            }, i.prototype.scrollTo = function() {
                var e;
                return e = this.getAttachTo().element, null != e ? e.scrollIntoView() : void 0
            }, i.prototype.destroy = function() {
                var e;
                return null != this.el && (document.body.removeChild(this.el), delete this.el), null != (e = this.tether) && e.destroy(), this.tether = null, this.trigger("destroy")
            }, i.prototype.render = function() {
                var e, t, n, i, o, a, s, l, c, u, d, p, h, f, m, g, v;
                if (null != this.el && this.destroy(), this.el = r("<div class='shepherd-step " + (null != (m = this.options.classes) ? m : "") + "' data-id='" + this.id + "'></div>"), i = document.createElement("div"), i.className = "shepherd-content", this.el.appendChild(i), a = document.createElement("header"), i.appendChild(a), null != this.options.title && (a.innerHTML += "<h3 class='shepherd-title'>" + this.options.title + "</h3>", this.el.className += " shepherd-has-title"), this.options.showCancelLink && (s = r("<a href class='shepherd-cancel-link'>✕</a>"), a.appendChild(s), this.el.className += " shepherd-has-cancel-link", this.bindCancelLink(s)), null != this.options.text) {
                    for (u = r("<div class='shepherd-text'></div>"), c = this.options.text, "string" == typeof c && (c = [c]), d = 0, h = c.length; h > d; d++)
                        l = c[d], u.innerHTML += "<p>" + l + "</p>";
                    i.appendChild(u)
                }
                if (o = document.createElement("footer"), this.options.buttons) {
                    for (t = r("<ul class='shepherd-buttons'></ul>"), g = this.options.buttons, p = 0, f = g.length; f > p; p++)
                        n = g[p], e = r("<li><a class='shepherd-button " + (null != (v = n.classes) ? v : "") + "'>" + n.text + "</a>"), t.appendChild(e), this.bindButtonEvents(n, e.querySelector("a"));
                    o.appendChild(t)
                }
                return i.appendChild(o), document.body.appendChild(this.el), this.setupTether(), this.options.advanceOn ? this.bindAdvance() : void 0
            }, i.prototype.bindCancelLink = function(e) {
                return e.addEventListener("click", function(e) {
                    return function(t) {
                        return t.preventDefault(), e.cancel()
                    }
                }(this))
            }, i.prototype.bindButtonEvents = function(e, t) {
                var n, i, o, a;
                null == e.events && (e.events = {}), null != e.action && (e.events.click = e.action), a = e.events;
                for (n in a)
                    i = a[n], "string" == typeof i && (o = i, i = function(e) {
                        return function() {
                            return e.tour.show(o)
                        }
                    }(this)), t.addEventListener(n, i);
                return this.on("destroy", function() {
                    var o, a;
                    o = e.events, a = [];
                    for (n in o)
                        i = o[n], a.push(t.removeEventListener(n, i));
                    return a
                })
            }, i
        }(n), a = function(e) {
            function t(e) {
                var t, n, o, a, s, r;
                for (this.options = null != e ? e : {}, this.hide = g(this.hide, this), this.complete = g(this.complete, this), this.cancel = g(this.cancel, this), this.back = g(this.back, this), this.next = g(this.next, this), this.steps = null != (s = this.options.steps) ? s : [], r = ["complete", "cancel", "hide", "start", "show", "active", "inactive"], n = function(e) {
                    return function(t) {
                        return e.on(t, function(n) {
                            return null == n && (n = {}), n.tour = e, i.trigger(t, n)
                        })
                    }
                }(this), o = 0, a = r.length; a > o; o++)
                    t = r[o], n(t)
            }
            return y(t, e), t.prototype.addStep = function(e, t) {
                var n;
                return null == t && (t = e), t instanceof o ? t.tour = this : (("string" == (n = typeof e) || "number" === n) && (t.id = e.toString()), t = l({}, this.options.defaults, t), t = new o(this, t)), this.steps.push(t), t
            }, t.prototype.getById = function(e) {
                var t, n, i, o;
                for (o = this.steps, n = 0, i = o.length; i > n; n++)
                    if (t = o[n], t.id === e)
                        return t
            }, t.prototype.getCurrentStep = function() {
                return this.currentStep
            }, t.prototype.next = function() {
                var e;
                return e = this.steps.indexOf(this.currentStep), e === this.steps.length - 1 ? (this.hide(e), this.trigger("complete"), this.done()) : this.show(e + 1)
            }, t.prototype.back = function() {
                var e;
                return e = this.steps.indexOf(this.currentStep), this.show(e - 1)
            }, t.prototype.cancel = function() {
                var e;
                return null != (e = this.currentStep) && e.hide(), this.trigger("cancel"), this.done()
            }, t.prototype.complete = function() {
                var e;
                return null != (e = this.currentStep) && e.hide(), this.trigger("complete"), this.done()
            }, t.prototype.hide = function() {
                var e;
                return null != (e = this.currentStep) && e.hide(), this.trigger("hide"), this.done()
            }, t.prototype.done = function() {
                return i.activeTour = null, h(document.body, "shepherd-active"), this.trigger("inactive", {
                    tour: this
                })
            }, t.prototype.show = function(e) {
                var t;
                return null == e && (e = 0), this.currentStep ? this.currentStep.hide() : (s(document.body, "shepherd-active"), this.trigger("active", {
                    tour: this
                })), i.activeTour = this, t = "string" == typeof e ? this.getById(e) : this.steps[e], t ? (this.trigger("show", {
                    step: t,
                    previous: this.currentStep
                }), this.currentStep = t, t.show()) : void 0
            }, t.prototype.start = function() {
                return this.trigger("start"), this.currentStep = null, this.next()
            }, t
        }(n), l(i, {
            Tour: a,
            Step: o,
            Evented: n
        }), window.Shepherd = i
    }.call(this), Shepherd
}), define("module/guide", ["require", "jquery", "module/ajax", "module/list", "shepherd-amd", "module/jquery.spotlight"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = (e("module/list"), e("shepherd-amd"), e("module/jquery.spotlight"), {
        params: {
            guidesEffectMap: {},
            guidesDefined: {},
            guidePrepared: null,
            currentStep: null
        },
        elements: {
            $body: t("body")
        },
        functions: {
            buildGuides: function(e) {
                t.each(e, function() {
                    i.functions.initGuide.call(i, this)
                })
            },
            initGuide: function(e) {
                var o = new Shepherd.Tour({
                    defaults: {
                        classes: "shepherd-element shepherd-open shepherd-theme-arrows",
                        showCancelLink: !1,
                        title: null
                    }
                });
                return o.on("start", function(e) {
                    window.scrollTo(0, 0)
                }), o.on("show", function(e) {
                    t(e.step.options.attachTo).spotlight(), i.elements.$body.addClass("tour_" + this.params.id), this.params.autoStart=!1
                }), o.on("hide", function(e) {
                    i.elements.$body.removeClass("tour_" + this.params.id), i.params.currentStep = null
                }), o.on("cancel", function(e) {
                    t.spotlight.off()
                }), o.on("complete", function(e) {
                    t.spotlight.off(), n.post("guide", {
                        code: this.params.id
                    })
                }), o.params = t.extend({
                    effect: ["parent"],
                    autoStart: !( - 1 !== t.inArray(e.params.id, i.params.guidesShown))
                }, e.params), t.each(e.steps, function(t) {
                    var n = this;
                    t = n.step ? n.step : t + 1, t >= e.steps.length ? (n.buttons = [], e.steps.length > 1 && n.buttons.push({
                        text: "Back",
                        classes: "shepherd-button-secondary",
                        action: o.back
                    }), n.buttons.push({
                        text: "Ok",
                        action: o.next
                    })) : (n.buttons = [{
                        text: "Next",
                        action: o.next
                    }
                    ], this.showCancelLink && n.buttons.unshift({
                        text: "Exit",
                        classes: "shepherd-button-secondary",
                        action: o.cancel
                    })), o.addStep(t, n)
                }), i.params.guidesDefined[o.params.name] = o, t.each(o.params.effect, function() {
                    var e = i.params.guidesEffectMap[this] ? i.params.guidesEffectMap[this]: {};
                    e[o.params.name] = o, i.params.guidesEffectMap[this] = e
                }), o
            },
            showGuide: function(e) {
                var n = this, o = n.params.effect, a = o ? o.params.name.toLowerCase(): "parent", s = i.params.guidesEffectMap[a];
                return o && t.extend(s, i.params.guidesEffectMap["*"]), i.params.guidePrepared&&!s[i.params.guidePrepared.name] ? (o ? n.functions.closeEffect() : n.functions.openEffect.call(n.params.effects[i.params.guidePrepared.effect]), !1) : (i.params.guidePrepared = null, void(s && t.each(s, function() {
                    var n = this;
                    n.params.autoStart && (t.slidebars.active("left") ? t.slidebars.close(function() {
                        e ? n.show(e) : n.start()
                    }) : e ? n.show(e) : n.start())
                })))
            },
            setGuidesShown: function(e) {
                this.params.guidesShown = e
            },
            onShowHowTo: function(e) {
                var n = t(this).data(), o = i.params.guidesDefined[n.name];
                i.params.guidePrepared = n, o.params.autoStart=!0, i.functions.showGuide.call(e), analytics.track("How To: " + n.name, {})
            }
        }
    });
    return i
}), define("module/bar", ["require", "jquery", "module/browser"], function(e) {
    var t = e("jquery"), n = e("module/browser"), i = {
        params: {
            currentSide: "primary",
            prepareSide: "primary",
            isRotating: !1,
            nextSides: {
                primary: "secondary",
                secondary: "tertiary",
                tertiary: "quartenary",
                quartenary: "primary"
            },
            prevSides: {
                secondary: "primary",
                tertiary: "secondary",
                quartenary: "tertiary",
                primary: "quartenary"
            },
            openTools: [],
            $side: null
        },
        functions: {
            onRotate: function(e) {
                var n = "#navbar-primary";
                t(n).bind("webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend", function(o) {
                    t(o.target).is(n) && (i.params.isRotating=!1, e())
                })
            },
            rotateToSide: function(e, t) {
                i.params.isRotating=!0, i.params.currentSide = t;
                var o = n.supportsTransitions() ? "": "-fallback";
                e.attr("class", "navbar navbar-fixed-bottom sb-slide navbar-rotate-" + t + o + " full")
            },
            rotateNext: function(e) {
                i.params.isRotating=!0, i.functions.rotateToSide(e, i.params.nextSides[i.params.currentSide])
            },
            rotatePrev: function(e, t) {
                i.params.isRotating=!0, i.functions.rotateToSide(e, i.params.prevSides[i.params.currentSide])
            },
            getNextSide: function() {
                return i.params.nextSides[i.params.currentSide]
            },
            getPrevSide: function() {
                return i.params.prevSides[i.params.currentSide]
            },
            setButtonSide: function(e) {
                return i.params.prepareSide = e, i.params.$side = t("#navbar-" + i.params.prepareSide + " > div > div > ul"), i.params.$side
            },
            pushOpenTool: function() {
                i.params.openTools.push(this)
            },
            getToolsAndReset: function() {
                var e = i.params.openTools;
                return i.params.openTools = [], e
            },
            updateNavButtons: function(e) {
                var t = i.params.$side.parent().next().find("span"), n = e.params.text ? e.params.text: e.params.name;
                t.html(n), e.elements.$finish.attr({
                    disabled: e.params.empty?!0: !1
                })
            }
        }
    };
    return i
}), define("module/jquery.selectable", ["require", "jquery"], function(e) {
    var t = e("jquery");
    !function(e, t) {
        function n(t, n) {
            this.element = t, this.$element = e(t), this.settings = e.extend({}, o, n), this.enabled=!1, this.list = [], this.isWhiteList=!0, this.size = parseInt(this.settings.size), this.count = 0, this.$all = e(this.settings.selectAll), this.init()
        }
        var i = "selectable", o = {
            selectAll: null,
            size: - 1,
            onSelectableValue: function(e) {},
            onSelectItem: function(e, t, n) {},
            onSelectAll: function(e, t) {},
            onEmptyChange: function(e, t, n) {},
            onFullChange: function(e, t) {},
            onSizeChange: function(e, t) {}
        };
        n.prototype = {
            init: function() {
                var e = this;
                this.$all.on("click", function() {
                    e.isEnabled() && e.toggleSelectAll()
                })
            },
            toggleSelectAll: function() {
                this.selectAll(!this.isFull())
            },
            toggleSelect: function(e) {
                this.select(e, !e.data("selected"))
            },
            select: function(e, t, n) {
                var i = this.isEmpty(), o = this.isFull(), a = this.settings.onSelectableValue(e);
                this.isWhiteList && t ||!this.isWhiteList&&!t ? this.add(a) : this.remove(a), this.count += t ? 1 : - 1, this.settings.onSelectItem(e, t, this.getCount()), e.data("selected", t), t && i&&!this.isEmpty() ||!t&&!i && this.isEmpty() ? this.settings.onEmptyChange(this.$all, !t, n) : (!t && o&&!this.isFull() || t&&!o && this.isFull()) && this.settings.onFullChange(this.$all, t)
            },
            selectAll: function(n) {
                var i = this;
                this.list = [], this.isWhiteList=!n, e(this.settings.selectableItem).each(function() {
                    var o = e(this);
                    (n && o.data("selected") == t || o.data("selected")==!n) && i.select(o, n, !0)
                }), this.settings.onSelectAll(this.$all, this.isWhiteList)
            },
            setSize: function(e) {
                this.size = e, this.settings.onSizeChange(this.size, this.getCount())
            },
            changeSize: function(e) {
                this.setSize(this.size + e)
            },
            add: function(e) {
                this.list.push(e)
            },
            remove: function(t) {
                this.list = e.grep(this.list, function(e) {
                    return e != t
                })
            },
            getCount: function() {
                return this.isWhiteList || this.size <= 0 ? this.count : this.size - this.list.length
            },
            getListAsString: function() {
                return this.isEmpty() ? null : this.list.join(",")
            },
            enable: function(e) {
                this.enabled = e
            },
            isEnabled: function() {
                return this.enabled
            },
            isMultiple: function() {
                return this.getCount() > 1
            },
            isEmpty: function() {
                return 0 == this.getCount()
            },
            isFull: function() {
                return this.getCount() == this.size
            }
        }, e.fn[i] = function(t) {
            return this.each(function() {
                e.data(this, i) || e.data(this, i, new n(this, t))
            }), this
        }
    }(t)
}), function(e) {
    "function" == typeof define && define.amd ? define("jquery.knob", ["jquery"], e) : e(jQuery)
}(function(e) {
    "use strict";
    var t = {}, n = Math.max, i = Math.min;
    t.c = {}, t.c.d = e(document), t.c.t = function(e) {
        return e.originalEvent.touches.length - 1
    }, t.o = function() {
        var n = this;
        this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit=!1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative=!1, this.relativeWidth=!1, this.relativeHeight=!1, this.$div = null, this.run = function() {
            var t = function(e, t) {
                var i;
                for (i in t)
                    n.o[i] = t[i];
                n._carve().init(), n._configure()._draw()
            };
            if (!this.$.data("kontroled")) {
                if (this.$.data("kontroled", !0), this.extend(), this.o = e.extend({
                    min: void 0 !== this.$.data("min") ? this.$.data("min"): 0,
                    max: void 0 !== this.$.data("max") ? this.$.data("max"): 100,
                    stopper: !0,
                    readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                    cursor: this.$.data("cursor")===!0 && 30 || this.$.data("cursor") || 0,
                    thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"),
                    1),
                    .01) || .35,
                    lineCap: this.$.data("linecap") || "butt",
                    width: this.$.data("width") || 200,
                    height: this.$.data("height") || 200,
                    displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                    displayPrevious: this.$.data("displayprevious"),
                    fgColor: this.$.data("fgcolor") || "#87CEEB",
                    inputColor: this.$.data("inputcolor"),
                    font: this.$.data("font") || "Arial",
                    fontWeight: this.$.data("font-weight") || "bold",
                    inline: !1,
                    step: this.$.data("step") || 1,
                    rotation: this.$.data("rotation"),
                    draw: null,
                    change: null,
                    cancel: null,
                    release: null,
                    format: function(e) {
                        return e
                    }, parse : function(e) {
                        return parseFloat(e)
                        }
                }, this.o), this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation, this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(t) {
                    var i = e(this);
                    n.i[t] = i, n.v[t] = n.o.parse(i.val()), i.bind("change blur", function() {
                        var e = {};
                        e[t] = i.val(), n.val(n._validate(e))
                    })
                }), this.$.find("legend").remove()) : (this.i = this.$, this.v = this.o.parse(this.$.val()), "" === this.v && (this.v = this.o.min), this.$.bind("change blur", function() {
                    n.val(n._validate(n.o.parse(n.$.val())))
                })), !this.o.displayInput && this.$.hide(), this.$c = e(document.createElement("canvas")).attr({
                    width: this.o.width,
                    height: this.o.height
                }), this.$div = e('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null, !this.c)throw {
                    name: "CanvasNotSupportedException",
                    message: "Canvas not supported. Please use excanvas on IE8.0.",
                    toString: function() {
                        return this.name + ": " + this.message
                    }
                };
                return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width%1 !== 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height%1 !== 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind("configure", t).parent().bind("configure", t), this._listen()._configure()._xy().init(), this.isInit=!0, this.$.val(this.o.format(this.v)), this._draw(), this
            }
        }, this._carve = function() {
            if (this.relative) {
                var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100: this.$div.parent().width(), t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100: this.$div.parent().height();
                this.w = this.h = Math.min(e, t)
            } else
                this.w = this.o.width, this.h = this.o.height;
            return this.$div.css({
                width: this.w + "px",
                height: this.h + "px"
            }), this.$c.attr({
                width: this.w,
                height: this.h
            }), 1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), this
        }, this._draw = function() {
            var e=!0;
            n.g = n.c, n.clear(), n.dH && (e = n.dH()), e!==!1 && n.draw()
        }, this._touch = function(e) {
            var i = function(e) {
                var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
                t != n.cv && (n.cH && n.cH(t)===!1 || (n.change(n._validate(t)), n._draw()))
            };
            return this.t = t.c.t(e), i(e), t.c.d.bind("touchmove.k", i).bind("touchend.k", function() {
                t.c.d.unbind("touchmove.k touchend.k"), n.val(n.cv)
            }), this
        }, this._mouse = function(e) {
            var i = function(e) {
                var t = n.xy2val(e.pageX, e.pageY);
                t != n.cv && (n.cH && n.cH(t)===!1 || (n.change(n._validate(t)), n._draw()))
            };
            return i(e), t.c.d.bind("mousemove.k", i).bind("keyup.k", function(e) {
                if (27 === e.keyCode) {
                    if (t.c.d.unbind("mouseup.k mousemove.k keyup.k"), n.eH && n.eH()===!1)
                        return;
                    n.cancel()
                }
            }).bind("mouseup.k", function(e) {
                t.c.d.unbind("mousemove.k mouseup.k keyup.k"), n.val(n.cv)
            }), this
        }, this._xy = function() {
            var e = this.$c.offset();
            return this.x = e.left, this.y = e.top, this
        }, this._listen = function() {
            return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(e) {
                e.preventDefault(), n._xy()._mouse(e)
            }).bind("touchstart", function(e) {
                e.preventDefault(), n._xy()._touch(e)
            }), this.listen()), this.relative && e(window).resize(function() {
                n._carve().init(), n._draw()
            }), this
        }, this._configure = function() {
            return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor, this
        }, this._clear = function() {
            this.$c[0].width = this.$c[0].width
        }, this._validate = function(e) {
            var t=~~((0 > e?-.5 : .5) + e / this.o.step) * this.o.step;
            return Math.round(100 * t) / 100
        }, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function(e) {}, this.val = function(e) {}, this.xy2val = function(e, t) {}, this.draw = function() {}, this.clear = function() {
            this._clear()
        }, this.h2rgba = function(e, t) {
            var n;
            return e = e.substring(1, 7), n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)], "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")"
        }, this.copy = function(e, t) {
            for (var n in e)
                t[n] = e[n]
        }
    }, t.Dial = function() {
        t.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
            this.o = e.extend({
                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                angleOffset: this.$.data("angleoffset") || 0,
                angleArc: this.$.data("anglearc") || 360,
                inline: !0
            }, this.o)
        }, this.val = function(e, t) {
            return null == e ? this.v : (e = this.o.parse(e), void(t!==!1 && e != this.v && this.rH && this.rH(e)===!1 || (this.cv = this.o.stopper ? n(i(e, this.o.max), this.o.min) : e, this.v = this.cv, this.$.val(this.o.format(this.v)), this._draw())))
        }, this.xy2val = function(e, t) {
            var o, a;
            return o = Math.atan2(e - (this.x + this.w2), - (t - this.y - this.w2)) - this.angleOffset, this.o.flip && (o = this.angleArc - o - this.PI2), this.angleArc != this.PI2 && 0 > o && o>-.5 ? o = 0 : 0 > o && (o += this.PI2), a = o * (this.o.max - this.o.min) / this.angleArc + this.o.min, this.o.stopper && (a = n(i(a, this.o.max), this.o.min)), a
        }, this.listen = function() {
            var t, o, a, s, r = this, l = function(e) {
                e.preventDefault();
                var a = e.originalEvent, s = a.detail || a.wheelDeltaX, l = a.detail || a.wheelDeltaY, c = r._validate(r.o.parse(r.$.val())) + (s > 0 || l > 0 ? r.o.step : 0 > s || 0 > l?-r.o.step : 0);
                c = n(i(c, r.o.max), r.o.min), r.val(c, !1), r.rH && (clearTimeout(t), t = setTimeout(function() {
                    r.rH(c), t = null
                }, 100), o || (o = setTimeout(function() {
                    t && r.rH(c), o = null
                }, 200)))
            }, c = 1, u = {
                37: - r.o.step,
                38: r.o.step,
                39: r.o.step,
                40: - r.o.step
            };
            this.$.bind("keydown", function(t) {
                var o = t.keyCode;
                if (o >= 96 && 105 >= o && (o = t.keyCode = o - 48), a = parseInt(String.fromCharCode(o)), isNaN(a) && (13 !== o && 8 !== o && 9 !== o && 189 !== o && (190 !== o || r.$.val().match(/\./)) && t.preventDefault(), e.inArray(o, [37, 38, 39, 40])>-1)) {
                    t.preventDefault();
                    var l = r.o.parse(r.$.val()) + u[o] * c;
                    r.o.stopper && (l = n(i(l, r.o.max), r.o.min)), r.change(r._validate(l)), r._draw(), s = window.setTimeout(function() {
                        c*=2
                    }, 30)
                }
            }).bind("keyup", function(e) {
                isNaN(a) ? s && (window.clearTimeout(s), s = null, c = 1, r.val(r.$.val())) : r.$.val() > r.o.max && r.$.val(r.o.max) || r.$.val() < r.o.min && r.$.val(r.o.min)
            }), this.$c.bind("mousewheel DOMMouseScroll", l), this.$.bind("mousewheel DOMMouseScroll", l)
        }, this.init = function() {
            (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            var e = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
            this.o.displayInput && this.i.css({
                width: (this.w / 2 + 4>>0) + "px",
                height: (this.w / 3>>0) + "px",
                position: "absolute",
                "vertical-align": "middle",
                "margin-top": (this.w / 3>>0) + "px",
                "margin-left": "-" + (3 * this.w / 4 + 2>>0) + "px",
                border: 0,
                background: "none",
                font: this.o.fontWeight + " " + (this.w / e>>0) + "px " + this.o.font,
                "text-align": "center",
                color: this.o.inputColor || this.o.fgColor,
                padding: "0px",
                "-webkit-appearance": "none"
            }) || this.i.css({
                width: "0px",
                visibility: "hidden"
            })
        }, this.change = function(e) {
            this.cv = e, this.$.val(this.o.format(e))
        }, this.angle = function(e) {
            return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min)
        }, this.arc = function(e) {
            var t, n;
            return e = this.angle(e), this.o.flip ? (t = this.endAngle + 1e-5, n = t - e - 1e-5) : (t = this.startAngle - 1e-5, n = t + e + 1e-5), this.o.cursor && (t = n - this.cursorExt) && (n += this.cursorExt), {
                s: t,
                e: n,
                d: this.o.flip&&!this.o.cursor
            }
        }, this.draw = function() {
            var e, t = this.g, n = this.arc(this.cv), i = 1;
            t.lineWidth = this.lineWidth, t.lineCap = this.lineCap, "none" !== this.o.bgColor && (t.beginPath(), t.strokeStyle = this.o.bgColor, t.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), t.stroke()), this.o.displayPrevious && (e = this.arc(this.v), t.beginPath(), t.strokeStyle = this.pColor, t.arc(this.xy, this.xy, this.radius, e.s, e.e, e.d), t.stroke(), i = this.cv == this.v), t.beginPath(), t.strokeStyle = i ? this.o.fgColor : this.fgColor, t.arc(this.xy, this.xy, this.radius, n.s, n.e, n.d), t.stroke()
        }, this.cancel = function() {
            this.val(this.v)
        }
    }, e.fn.dial = e.fn.knob = function(n) {
        return this.each(function() {
            var i = new t.Dial;
            i.o = n, i.$ = e(this), i.run()
        }).parent()
    }
}), define("module/jquery.loader", ["require", "jquery", "jquery.knob"], function(e) {
    var t = e("jquery");
    e("jquery.knob");
    !function(e, t) {
        e.fn.loader = function(t) {
            return e(this).knob({
                readOnly: !0,
                width: 75,
                height: 75,
                font: "Proxima Nova",
                fontWeight: 400,
                thickness: .2,
                fgColor: "#5b89ae",
                inputColor: "#5b89ae",
                inline: !1,
                draw: function() {
                    e(this.i).val(this.cv + "%")
                }
            }), this
        }
    }(t)
}), define("module/filepicker", ["require", "jquery", "module/ajax", "module/alert", "module/progress"], function(e) {
    var t, n = e("jquery"), i = e("module/ajax"), o = e("module/alert"), a = e("module/progress"), s = {
        services: "",
        service: "cloud",
        openTo: "",
        onComplete: function(e) {
            return !0
        },
        onSuccess: function(e) {
            return !0
        },
        onError: function() {
            return !0
        }
    }, r=!1, l = {
        buildFilepicker: function(e) {
            t = n.extend({}, s, e), this.getFilepicker().pickMultiple({
                mimetypes: "image/*",
                maxSize: window.pageVars.max_file_size,
                folders: !0,
                multiple: !0,
                container: "modal",
                services: t.services
            }, function(e) {
                a.functions.updateTotalCount(e.length), a.functions.showProgress("Photos"), l.uploadFiles(e)
            }, function(e) {
                t.onError(e)
            })
        },
        getFilepicker: function() {
            return "undefined" == typeof filepicker ? (r || (analytics.track("Filepicker Not Loaded", {}), r=!0), {
                pickMultiple: function() {
                    o.functions.showAlert("<b>Cloud import could not be loaded.</b> Try re-loading the page. Otherwise, contact customer support.")
                },
                exportFile: function() {
                    o.functions.showAlert("<b>Cloud export could not be loaded.</b> Try re-loading the page. Otherwise, contact customer support.")
                }
            }) : (filepicker.setKey(window.pageVars.filepicker_key), filepicker)
        },
        uploadFiles: function(e) {
            if (!e[0])
                return !1;
            var n = e[0];
            n._dataUrl = n.url;
            var o = window.pageVars.folder_id, a = new FormData, s = n.filename && n.filename.split("."), r = s[0], c = s[1];
            a.append("strUploadType", t.service), a.append("url", n.url), a.append("fileName", r), a.append("extension", c), a.append("mimeType", n.mimetype), i.post("folder/" + o + "/file/import", a, function(n) {
                e.shift(), l.uploadFiles(e), t.onSuccess(n)
            }, !1, function(e) {
                t.onComplete(e)
            }, !0)
        },
        exportFiles: function(e) {
            t = n.extend({}, s, e), this.getFilepicker().exportFile(e.url, {
                mimetypes: "image/*",
                multiple: !0,
                services: t.services,
                suggestedFilename: e.name,
                openTo: t.openTo
            }, function(e) {
                t.onExport(e)
            }, function(e) {
                t.onError(e)
            })
        }
    };
    return l
}), define("module/oauth", ["require", "jquery"], function(e) {
    var t = e("jquery");
    return window.OAuth = {
        authenticate: function(e, n, i) {
            var o = 420, a = 480, s = (t(window).width() - o - 10) / 2, r = (t(window).height() - a) / 2;
            this.callback = n;
            var l = window.pageVars.site_url + "oauth/" + e + "?scopes=" + i + "&popup=true";
            this.popup = window.open(l, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=" + r + ", left=" + s + ", width=" + o + ", height=" + a)
        }
    }
}), define("module/facebook_select", ["require", "jquery", "module/oauth"], function(e) {
    var t = e("jquery"), n = e("module/oauth");
    !function(e, t, i, o) {
        function a(t, n) {
            this.element = t, this.$element = e(t), this.settings = e.extend({}, r, n), this.reset(), this.init()
        }
        var s = "facebook_select", r = {
            appId: null,
            results: {
                account: 8,
                album: 8,
                photo: 8
            },
            selector: {
                wrapper: "#fb_sel_wrap",
                views: "#fb_sel_views",
                container: "#fb_sel",
                accounts: "#fb_sel_acc",
                albums: "#fb_sel_alb",
                photos: "#fb_sel_phts",
                title: "#fb_sel_title_cnt",
                next: "#fb_sel_next",
                previous: "#fb_sel_prev",
                back: "#fb_sel_back",
                close: "#fb_sel_x",
                done: "#fb_sel_done",
                all: "#fb_sel_all",
                loader: "#fb_sel_ld",
                counter: "#fb_sel_cnt"
            },
            title: {
                plugin: "Select an account type.",
                view: "Select a business page.",
                account: "Select an album.",
                album: "Select photos to import."
            },
            onOpen: function(e, t) {
                t.show()
            },
            onClose: function(e, t) {
                t.hide()
            },
            onLoadView: function(t) {
                var n = "me" == t.name ? "Personal": "Pages", i = "me" == t.name ? "Browse albums and photos from your personal Facebook account.": "Browse albums and photos from your business pages.", o = e("<span />").html(i), a = e("<a>").addClass("fb_sel_view").attr("href", "#").html(n).append(o);
                return a
            },
            onLoadAccount: function(t) {
                var n = e("<a>").addClass("fb_sel_acc").attr("href", "#").html(t.name);
                return n
            },
            onLoadAlbum: function(t, n) {
                var i = e("<a>").addClass("fb_sel_alb").attr("href", "#");
                return i.append(e("<img>").attr("src", n)), i.append(e("<div>").html(t.name)), i
            },
            onLoadPhoto: function(t) {
                var n = e("<a>").addClass("fb_sel_phto").attr("href", "#");
                return n.append(e("<img>").attr("src", t.picture)), n
            },
            onEmptyData: function(t) {
                var n = e("<div>").addClass("fb_sel_empty").html("No " + t + " found.");
                return n
            },
            onChangeBack: function(t) {
                var n = "me" == t.name ? "Business Pages": "Personal Account";
                return e("<div>").html(n)
            },
            onSelected: function(e, t, n) {},
            onUnselected: function(e, t, n) {},
            onPhotoSelected: function(e, t, n) {
                e.addClass("selected")
            },
            onPhotoUnselected: function(e, t) {
                e.removeClass("selected")
            },
            onDone: function(e) {}
        };
        a.prototype = {
            loadFacebookSDK: function() {
                var n = this;
                t.fbAsyncInit = function() {
                    FB.init({
                        appId: n.settings.appId,
                        status: !0,
                        cookie: !0,
                        xfbml: !1
                    })
                }, function() {
                    var t = i.createElement("script");
                    t.async=!0, t.src = i.location.protocol + "//connect.facebook.net/en_US/all.js", e("head").append(t)
                }()
            },
            init: function() {
                var t = this;
                t.loadFacebookSDK(), t.$element.click(function() {
                    t.openContainer()
                }), t.$close.click(function() {
                    t.closeContainer()
                }), t.$back.click(function() {
                    return t.$back.data("open") ? void(t.album ? (t.unselect("album"), t.loadAlbums(0, t.account)) : t.account ? (t.unselect("account"), "accounts" == t.view.name ? t.loadAccounts(0) : t.toggleView()) : t.view && t.toggleView()) : !1
                }), t.$previous.click(function() {
                    return t.$previous.data("open") ? void(t.album ? t.loadPhotos(t.page.photo - 1, t.album) : t.account ? t.loadAlbums(t.page.album - 1, t.account) : t.loadAccounts(t.page.account - 1)) : !1
                }), t.$next.click(function() {
                    return t.$next.data("open") ? void(t.album ? t.loadPhotos(t.page.photo + 1, t.album) : t.account ? t.loadAlbums(t.page.album + 1, t.account) : t.loadAccounts(t.page.account + 1)) : !1
                }), t.$all.click(function() {
                    var n = t.toggleSelectAll();
                    e.each(t.response.data, function() {
                        var e = this, i = t.filterByData(t.$photos.children(), "photo-id", e.id);
                        t.selectPhoto(i, e, n)
                    })
                }), t.$done.click(function() {
                    return t.$done.data("open") ? (t.settings.onDone(t.photos), void t.closeContainer()) : !1
                })
            },
            toggleSelectAll: function() {
                var e = this, t = 0 == e.$photos.find(".selected").length, n = t ? "Select All": "Unselect All";
                return e.$all.html(n), t
            },
            reset: function() {
                var t = this;
                t.accessToken = null, t.cache = {}, t.response = null, t.views = [{
                    name: "me",
                    _pages: [null]
                }, {
                    name: "accounts",
                    _pages: [null]
                }
                ], t.plugin = this, t.view = null, t.account = null, t.album = null, t.page = {
                    account: 0,
                    album: 0,
                    photo: 0
                }, t._pages = [null], t.photos = [], e.each(["wrapper", "views", "accounts", "albums", "photos", "title", "next", "previous", "back", "done", "close", "all", "loader", "counter"], function(n, i) {
                    var o = t["$" + i] = e(t.settings.selector[i]);
                    "close" != i && "counter" != i && "title" != i && t.close(o, !0)
                }), t.$counter.html(0), t.$title.html(t.settings.title.plugin)
            },
            authenticate: function(e, t) {
                var i = this;
                n.authenticate("facebook", function(n) {
                    i.accessToken = n, "accounts" == e.name ? i.loadAccounts(0) : i.loadAccount(), i.open(i.$back), t()
                }, i.getScope(e.name))
            },
            getScope: function(e) {
                switch (e) {
                case"accounts":
                    return "manage_pages";
                case"me":
                default:
                    return "user_photos"
                }
            },
            getRequest: function(e, t, n) {
                var i = this, o = e + "/" + t + "s?limit=" + i.settings.results[t] + "&access_token=" + i.accessToken;
                if (n) {
                    var e = i[i.getParentType(t)], a = e._pages, s = a[n];
                    o += "&after=" + s
                }
                return o
            },
            getData: function(e, t) {
                var n = this, i = n.cache[e];
                i ? (n.response = i, t(i)) : (n.open(n.$loader), FB.api(e, function(i) {
                    i&&!i.error && (n.cache[e] = n.response = i, n.close(n.$loader), t(i))
                }))
            },
            openContainer: function() {
                var e = this, t = e.views[0];
                e.select("view", t), e.authenticate(t, function() {
                    e.open(e.$wrapper)
                })
            },
            closeContainer: function() {
                var e = this;
                e.close(e.$wrapper), e.reset()
            },
            select: function(e, t) {
                var n = this;
                n[e] = t, n.settings.onSelected(n, e, t), n.$title.html(n.settings.title[e]), "view" == e || "account" == e && "me" == n.view.name ? n.$back.html(n.settings.onChangeBack(n.view)) : n.$back.html("Back")
            },
            unselect: function(e) {
                var t = this;
                t.settings.onUnselected(t, e, t[e]), t[e] = null;
                var n = t.getParentType(e);
                t.select(n, t[n])
            },
            loadAccount: function() {
                var e = this;
                e.close(e.$views);
                var t = "me?access_token=" + e.accessToken;
                e.getData(t, function(t) {
                    var n = t;
                    n._pages = [null], e.select("account", n), e.loadAlbums(0, n)
                })
            },
            loadAccounts: function(e) {
                var t = this;
                t.close(t.$views), t.close(t.$accounts), t.close(t.$albums);
                var n = t.getRequest("me", "account", e);
                t.getData(n, function(n) {
                    t.showAccounts(e, n)
                })
            },
            showAccounts: function(t, n) {
                var i = this;
                i.$accounts.empty(), n.data.length ? e.each(n.data, function() {
                    var e = this;
                    e._pages = [null];
                    var t = i.settings.onLoadAccount(e);
                    i.$accounts.append(t), t.click(function() {
                        i.select("account", e), i.loadAlbums(0, e)
                    })
                }) : i.$accounts.html(i.settings.onEmptyData("accounts")), n.paging && i.updatePagination("account", t, n.paging), i.open(i.$accounts)
            },
            showViews: function() {
                var t = this;
                t.$views.empty(), t.$accounts.empty(), t.$albums.empty(), t.close(t.$back), t.close(t.$next), t.close(t.$previous), e.each(t.views, function(e, n) {
                    var i = t.settings.onLoadView(n);
                    t.$views.append(i), i.click(function() {
                        t.select("view", n), t.authenticate(n)
                    })
                }), t.open(t.$views)
            },
            loadAlbums: function(e, t) {
                var n = this;
                n.close(n.$accounts), n.close(n.$albums), n.close(n.$photos), n.close(n.$all);
                var i = n.getRequest(t.id, "album", e);
                n.getData(i, function(t) {
                    n.showAlbums(e, t)
                })
            },
            showAlbums: function(t, n) {
                var i = this;
                i.$albums.empty(), n.data.length ? e.each(n.data, function() {
                    var e = this;
                    e._pages = [null];
                    var t = i.settings.onLoadAlbum(e, "https://graph.facebook.com/" + e.id + "/picture?type=small&access_token=" + i.accessToken);
                    i.$albums.append(t), t.click(function() {
                        i.select("album", e), i.loadPhotos(0, e)
                    })
                }) : i.$albums.html(i.settings.onEmptyData("albums")), n.paging && i.updatePagination("album", t, n.paging), i.open(i.$albums)
            },
            loadPhotos: function(e, t) {
                var n = this;
                n.close(n.$albums), n.close(n.$photos);
                var i = n.getRequest(t.id, "photo", e);
                n.getData(i, function(t) {
                    n.showPhotos(e, t)
                })
            },
            showPhotos: function(t, n) {
                var i = this;
                i.$photos.empty(), n.data.length ? e.each(n.data, function() {
                    var e = this, t = i.settings.onLoadPhoto(e);
                    t.data("photo-id", e.id), e._selected && i.settings.onPhotoSelected(t, e, !1), i.$photos.append(t), t.click(function() {
                        i.selectPhoto(t, e, !e._selected)
                    })
                }) : i.$photos.html(i.settings.onEmptyData("photos")), n.paging && i.updatePagination("photo", t, n.paging), i.open(i.$photos), i.toggleSelectAll(), i.open(i.$all)
            },
            updatePagination: function(e, t, n) {
                var i = this;
                if (n.cursors && n.cursors.after) {
                    var o = i[i.getParentType(e)];
                    t + 1 == o._pages.length && o._pages.push(n.cursors.after)
                }
                i.page[e] = t, i.toggle(i.$previous, n.previous), i.toggle(i.$next, n.next)
            },
            getParentType: function(e) {
                switch (e) {
                case"photo":
                    return "album";
                case"album":
                    return "account";
                case"account":
                    return "view";
                case"view":
                default:
                    return "plugin"
                }
            },
            toggleView: function() {
                var e = this, t = e.view == e.views[0] ? e.views[1]: e.views[0];
                e.authenticate(t, function() {
                    e.unselect("view"), e.select("view", t)
                })
            },
            selectPhoto: function(e, t, n) {
                var i = this;
                n ? t._selected || (i.photos.push(t), t._selected=!0, i.settings.onPhotoSelected(e, t, !0)) : t._selected && (i.photos.splice(i.find(i.photos, t, "id"), 1), t._selected=!1, i.settings.onPhotoUnselected(e, t)), i.toggleSelectAll(), i.$counter.html(i.photos.length), i.toggle(i.$done, i.photos.length)
            },
            open: function(e) {
                var t = this;
                e.data("open") || (e.data("open", !0), t.settings.onOpen(t, e))
            },
            close: function(e, t) {
                var n = this;
                (e.data("open") || t) && (e.data("open", !1), n.settings.onClose(n, e))
            },
            find: function(t, n, i) {
                return e.each(t, function(e) {
                    return this[i] == n[i] ? e : void 0
                }), - 1
            },
            filterByData: function(t, n, i) {
                return t.filter(function() {
                    return e(this).data(n) == i
                })
            },
            toggle: function(e, t) {
                var n = this;
                t ? n.open(e) : n.close(e)
            }
        }, e.fn[s] = function(t) {
            return this.each(function() {
                e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t))
            }), this
        }
    }(t, window, document)
}), function(e, t) {
    "function" == typeof define && define.amd ? define("photoswipe", t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function() {
    "use strict";
    var e = function(e, t, n, i) {
        var o = {
            features: null,
            bind: function(e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var a = 0; a < t.length; a++)
                    t[a] && e[o](t[a], n, !1)
            },
            isArray: function(e) {
                return e instanceof Array
            },
            createEl: function(e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            },
            getScrollY: function() {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function(e, t, n) {
                o.bind(e, t, n, !0)
            },
            removeClass: function(e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function(e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function(e, t) {
                for (var n = e.firstChild; n;) {
                    if (o.hasClass(n, t))
                        return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function(e, t, n) {
                for (var i = e.length; i--;)
                    if (e[i][n] === t)
                        return i;
                return - 1
            },
            extend: function(e, t, n) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i))
                            continue;
                            e[i] = t[i]
                    }
            },
            easing: {
                sine: {
                    out: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function(e) {
                        return - (Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function(e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function() {
                if (o.features)
                    return o.features;
                var e = o.createEl(), t = e.style, n = "", i = {};
                if (i.oldIE = document.all&&!document.addEventListener, i.touch = "ontouchstart"in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                    var a = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        s && s.length > 0 && (s = parseInt(s[1], 10), s >= 1 && 8 > s && (i.isOldIOSPhone=!0))
                    }
                    var r = a.match(/Android\s([0-9\.]*)/), l = r ? r[1]: 0;
                    l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid=!0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(a)
                }
                for (var c, u, d = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
                    n = p[h];
                    for (var f = 0; 3 > f; f++)
                        c = d[f], u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c), !i[c] && u in t && (i[c] = u);
                    n&&!i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                }
                if (!i.raf) {
                    var m = 0;
                    i.raf = function(e) {
                        var t = (new Date).getTime(), n = Math.max(0, 16 - (t - m)), i = window.setTimeout(function() {
                            e(t + n)
                        }, n);
                        return m = t + n, i
                    }, i.caf = function(e) {
                        clearTimeout(e)
                    }
                }
                return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, n, i) {
            t = t.split(" ");
            for (var o, a = (i ? "detach" : "attach") + "Event", s = function() {
                n.handleEvent.call(n)
            }, r = 0; r < t.length; r++)
                if (o = t[r])
                    if ("object" == typeof n && n.handleEvent) {
                        if (i) {
                            if (!n["oldIE" + o])
                                return !1
                        } else
                            n["oldIE" + o] = s;
                            e[a]("on" + o, n["oldIE" + o])
                    } else
                        e[a]("on" + o, n)
        });
        var a = this, s = 25, r = 3, l = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function(e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit",
            alwaysFadeIn: !1
        };
        o.extend(l, i);
        var c, u, d, p, h, f, m, g, v, y, b, w, x, C, k, $, T, _, E, S, A, D, F, j, P, I, q, O, L, M, N, z, R, H, B, W, U, V, Y, X, G, Z, K, Q, J, ee, te, ne, ie, oe, ae, se, re, le, ce, ue, de = function() {
            return {
                x: 0,
                y: 0
            }
        }, pe = de(), he = de(), fe = de(), me = {}, ge = 0, ve = {}, ye = de(), be = 0, we=!0, xe = [], Ce = {}, ke=!1, $e=!0, Te=!0, _e = function(e, t) {
            o.extend(a, t.publicMethods), xe.push(e)
        }, Ee = function(e) {
            var t = tn();
            return e > t - 1 ? e - t : 0 > e ? t + e : e
        }, Se = {}, Ae = function(e, t) {
            return Se[e] || (Se[e] = []), Se[e].push(t)
        }, De = function(e) {
            var t = Se[e];
            if (t) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var i = 0; i < t.length; i++)
                    t[i].apply(a, n)
            }
        }, Fe = function() {
            return (new Date).getTime()
        }, je = function(e) {
            le = e, a.bg.style.opacity = e * l.bgOpacity
        }, Pe = function(e, t, n, i, o) {
            (!ke || o && o !== a.currItem) && (i/=o ? o.fitRatio : a.currItem.fitRatio), e[D] = w + t + "px, " + n + "px" + x + " scale(" + i + ")"
        }, Ie = function(e) {
            ie && (e && (y > a.currItem.fitRatio ? ke || (fn(a.currItem, !1, !0), ke=!0) : ke && (fn(a.currItem), ke=!1)), Pe(ie, fe.x, fe.y, y))
        }, qe = function(e) {
            e.container && Pe(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
        }, Oe = function(e, t) {
            t[D] = w + e + "px, 0px" + x
        }, Le = function(e, t) {
            if (!l.loop && t) {
                var n = p + (ye.x * ge - e) / ye.x, i = Math.round(e - wt.x);
                (0 > n && i > 0 || n >= tn() - 1 && 0 > i) && (e = wt.x + i * l.mainScrollEndFriction)
            }
            wt.x = e, Oe(e, h)
        }, Me = function(e, t) {
            var n = xt[e] - ve[e];
            return he[e] + pe[e] + n - n * (t / b)
        }, Ne = function(e, t) {
            e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
        }, ze = function(e) {
            e.x = Math.round(e.x), e.y = Math.round(e.y)
        }, Re = null, He = function() {
            Re && (o.unbind(document, "mousemove", He), o.addClass(e, "pswp--has_mouse"), l.mouseUsed=!0, De("mouseUsed")), Re = setTimeout(function() {
                Re = null
            }, 100)
        }, Be = function() {
            o.bind(document, "keydown", a), N.transform && o.bind(a.scrollWrap, "click", a), l.mouseUsed || o.bind(document, "mousemove", He), o.bind(window, "resize scroll", a), De("bindEvents")
        }, We = function() {
            o.unbind(window, "resize", a), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", He), N.transform && o.unbind(a.scrollWrap, "click", a), V && o.unbind(window, m, a), De("unbindEvents")
        }, Ue = function(e, t) {
            var n = un(a.currItem, me, e);
            return t && (ne = n), n
        }, Ve = function(e) {
            return e || (e = a.currItem), e.initialZoomLevel
        }, Ye = function(e) {
            return e || (e = a.currItem), e.w > 0 ? l.maxSpreadZoom : 1
        }, Xe = function(e, t, n, i) {
            return i === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e], !0) : (n[e] = Me(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] ? (n[e] = t.max[e], !0) : !1)
        }, Ge = function() {
            if (D) {
                var t = N.perspective&&!j;
                return w = "translate" + (t ? "3d(" : "("), void(x = N.perspective ? ", 0px)" : ")")
            }
            D = "left", o.addClass(e, "pswp--ie"), Oe = function(e, t) {
                t.left = e + "px"
            }, qe = function(e) {
                var t = e.fitRatio > 1 ? 1: e.fitRatio, n = e.container.style, i = t * e.w, o = t * e.h;
                n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
            }, Ie = function() {
                if (ie) {
                    var e = ie, t = a.currItem, n = t.fitRatio > 1 ? 1: t.fitRatio, i = n * t.w, o = n * t.h;
                    e.width = i + "px", e.height = o + "px", e.left = fe.x + "px", e.top = fe.y + "px"
                }
            }
        }, Ze = function(e) {
            var t = "";
            l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue=!1, a[t]()))
        }, Ke = function(e) {
            e && (G || X || oe || W) && (e.preventDefault(), e.stopPropagation())
        }, Qe = function() {
            a.setScrollOffset(0, o.getScrollY())
        }, Je = {}, et = 0, tt = function(e) {
            Je[e] && (Je[e].raf && I(Je[e].raf), et--, delete Je[e])
        }, nt = function(e) {
            Je[e] && tt(e), Je[e] || (et++, Je[e] = {})
        }, it = function() {
            for (var e in Je)
                Je.hasOwnProperty(e) && tt(e)
        }, ot = function(e, t, n, i, o, a, s) {
            var r, l = Fe();
            nt(e);
            var c = function() {
                if (Je[e]) {
                    if (r = Fe() - l, r >= i)
                        return tt(e), a(n), void(s && s());
                    a((n - t) * o(r / i) + t), Je[e].raf = P(c)
                }
            };
            c()
        }, at = {
            shout: De,
            listen: Ae,
            viewportSize: me,
            options: l,
            isMainScrollAnimating: function() {
                return oe
            },
            getZoomLevel: function() {
                return y
            },
            getCurrentIndex: function() {
                return p
            },
            isDragging: function() {
                return V
            },
            isZooming: function() {
                return J
            },
            setScrollOffset: function(e, t) {
                ve.x = e, M = ve.y = t, De("updateScrollOffset", ve)
            },
            applyZoomPan: function(e, t, n, i) {
                fe.x = t, fe.y = n, y = e, Ie(i)
            },
            init: function() {
                if (!c&&!u) {
                    var n;
                    a.framework = o, a.template = e, a.bg = o.getChildByClass(e, "pswp__bg"), q = e.className, c=!0, N = o.detectFeatures(), P = N.raf, I = N.caf, D = N.transform, L = N.oldIE, a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), h = a.container.style, a.itemHolders = $ = [{
                        el: a.container.children[0],
                        wrap: 0,
                        index: - 1
                    }, {
                        el: a.container.children[1],
                        wrap: 0,
                        index: - 1
                    }, {
                        el: a.container.children[2],
                        wrap: 0,
                        index: - 1
                    }
                    ], $[0].el.style.display = $[2].el.style.display = "none", Ge(), v = {
                        resize: a.updateSize,
                        scroll: Qe,
                        keydown: Ze,
                        click: Ke
                    };
                    var i = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                    for (N.animationName && N.transform&&!i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < xe.length; n++)
                        a["init" + xe[n]]();
                    if (t) {
                        var s = a.ui = new t(a, o);
                        s.init()
                    }
                    De("firstUpdate"), p = p || l.index || 0, (isNaN(p) || 0 > p || p >= tn()) && (p = 0), a.currItem = en(p), (N.isOldIOSPhone || N.isOldAndroid) && (we=!1), e.setAttribute("aria-hidden", "false"), l.modal && (we ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === M && (De("initialLayout"), M = O = o.getScrollY());
                    var d = "pswp--open ";
                    for (l.mainClass && (d += l.mainClass + " "), l.showHideOpacity && (d += "pswp--animate_opacity "), d += j ? "pswp--touch" : "pswp--notouch", d += N.animationName ? " pswp--css_animation" : "", d += N.svg ? " pswp--svg" : "", o.addClass(e, d), a.updateSize(), f =- 1, be = null, n = 0; r > n; n++)
                        Oe((n + f) * ye.x, $[n].el.style);
                    L || o.bind(a.scrollWrap, g, a), Ae("initialZoomInEnd", function() {
                        a.setContent($[0], p - 1), a.setContent($[2], p + 1), $[0].el.style.display = $[2].el.style.display = "block", l.focus && e.focus(), Be()
                    }), a.setContent($[1], p), a.updateCurrItem(), De("afterInit"), we || (C = setInterval(function() {
                        et || V || J || y !== a.currItem.initialZoomLevel || a.updateSize()
                    }, 1e3)), o.addClass(e, "pswp--visible")
                }
            },
            close: function() {
                c && (c=!1, u=!0, De("close"), We(), on(a.currItem, null, !0, a.destroy))
            },
            destroy: function() {
                De("destroy"), Zt && clearTimeout(Zt), e.setAttribute("aria-hidden", "true"), e.className = q, C && clearInterval(C), o.unbind(a.scrollWrap, g, a), o.unbind(window, "scroll", a), _t(), it(), Se = null
            },
            panTo: function(e, t, n) {
                n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), fe.x = e, fe.y = t, Ie()
            },
            handleEvent: function(e) {
                e = e || window.event, v[e.type] && v[e.type](e)
            },
            goTo: function(e) {
                e = Ee(e);
                var t = e - p;
                be = t, p = e, a.currItem = en(p), ge -= t, Le(ye.x * ge), it(), oe=!1, a.updateCurrItem()
            },
            next: function() {
                Te && a.goTo(p + 1)
            },
            prev: function() {
                $e && a.goTo(p - 1)
            },
            allowNext: function(e) {
                return Te = e, this
            },
            allowPrevious: function(e) {
                return $e = e, this
            },
            updateCurrZoomItem: function(e) {
                if (e && De("beforeChange", 0), $[1].el.children.length) {
                    var t = $[1].el.children[0];
                    ie = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                } else
                    ie = null;
                ne = a.currItem.bounds, b = y = a.currItem.initialZoomLevel, fe.x = ne.center.x, fe.y = ne.center.y, e && De("afterChange")
            },
            invalidateCurrItems: function() {
                k=!0;
                for (var e = 0; r > e; e++)
                    $[e].item && ($[e].item.needsUpdate=!0)
            },
            updateCurrItem: function(e) {
                if (0 !== be) {
                    var t, n = Math.abs(be);
                    if (!(e && 2 > n)) {
                        a.currItem = en(p), ke=!1, De("beforeChange", be), n >= r && (f += be + (be > 0?-r : r), n = r);
                        for (var i = 0; n > i; i++)
                            be > 0 ? (t = $.shift(), $[r - 1] = t, f++, Oe((f + 2) * ye.x, t.el.style), a.setContent(t, p - n + i + 1 + 1)) : (t = $.pop(), $.unshift(t), f--, Oe(f * ye.x, t.el.style), a.setContent(t, p + n - i - 1 - 1));
                        if (ie && 1 === Math.abs(be)) {
                            var o = en(T);
                            o.initialZoomLevel !== y && (un(o, me), fn(o), qe(o))
                        }
                        be = 0, a.updateCurrZoomItem(), T = p, De("afterChange")
                    }
                }
            },
            updateSize: function(t) {
                if (!we && l.modal) {
                    var n = o.getScrollY();
                    if (M !== n && (e.style.top = n + "px", M = n), !t && Ce.x === window.innerWidth && Ce.y === window.innerHeight)
                        return;
                    Ce.x = window.innerWidth, Ce.y = window.innerHeight, e.style.height = Ce.y + "px"
                }
                if (me.x = a.scrollWrap.clientWidth, me.y = a.scrollWrap.clientHeight, Qe(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, Le(ye.x * ge), De("beforeResize"), void 0 !== f) {
                    for (var i, s, c, u = 0; r > u; u++)
                        i = $[u], Oe((u + f) * ye.x, i.el.style), c = p + u - 1, l.loop && tn() > 2 && (c = Ee(c)), s = en(c), s && (k || s.needsUpdate ||!s.bounds) ? (a.cleanSlide(s), a.setContent(i, c), 1 === u && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate=!1) : - 1 === i.index && c >= 0 && a.setContent(i, c), s && s.container && (un(s, me), fn(s), qe(s));
                    k=!1
                }
                b = y = a.currItem.initialZoomLevel, ne = a.currItem.bounds, ne && (fe.x = ne.center.x, fe.y = ne.center.y, Ie(!0)), De("resize")
            },
            zoomTo: function(e, t, n, i, a) {
                t && (b = y, xt.x = Math.abs(t.x) - fe.x, xt.y = Math.abs(t.y) - fe.y, Ne(he, fe));
                var s = Ue(e, !1), r = {};
                Xe("x", s, r, e), Xe("y", s, r, e);
                var l = y, c = {
                    x: fe.x,
                    y: fe.y
                };
                ze(r);
                var u = function(t) {
                    1 === t ? (y = e, fe.x = r.x, fe.y = r.y) : (y = (e - l) * t + l, fe.x = (r.x - c.x) * t + c.x, fe.y = (r.y - c.y) * t + c.y), a && a(t), Ie(1 === t)
                };
                n ? ot("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
            }
        }, st = 30, rt = 10, lt = {}, ct = {}, ut = {}, dt = {}, pt = {}, ht = [], ft = {}, mt = [], gt = {}, vt = 0, yt = de(), bt = 0, wt = de(), xt = de(), Ct = de(), kt = function(e, t) {
            return e.x === t.x && e.y === t.y
        }, $t = function(e, t) {
            return Math.abs(e.x - t.x) < s && Math.abs(e.y - t.y) < s
        }, Tt = function(e, t) {
            return gt.x = Math.abs(e.x - t.x), gt.y = Math.abs(e.y - t.y), Math.sqrt(gt.x * gt.x + gt.y * gt.y)
        }, _t = function() {
            Z && (I(Z), Z = null)
        }, Et = function() {
            V && (Z = P(Et), Bt())
        }, St = function() {
            return !("fit" === l.scaleMode && y === a.currItem.initialZoomLevel)
        }, At = function(e, t) {
            return e ? e.className && e.className.indexOf("pswp__scroll-wrap")>-1?!1 : t(e) ? e : At(e.parentNode, t) : !1
        }, Dt = {}, Ft = function(e, t) {
            return Dt.prevent=!At(e.target, l.isClickableElement), De("preventDragEvent", e, t, Dt), Dt.prevent
        }, jt = function(e, t) {
            return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
        }, Pt = function(e, t, n) {
            n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
        }, It = function(e, t, n) {
            if (e - R > 50) {
                var i = mt.length > 2 ? mt.shift(): {};
                i.x = t, i.y = n, mt.push(i), R = e
            }
        }, qt = function() {
            var e = fe.y - a.currItem.initialPosition.y;
            return 1 - Math.abs(e / (me.y / 2))
        }, Ot = {}, Lt = {}, Mt = [], Nt = function(e) {
            for (; Mt.length > 0;)
                Mt.pop();
            return F ? (ue = 0, ht.forEach(function(e) {
                0 === ue ? Mt[0] = e : 1 === ue && (Mt[1] = e), ue++
            })) : e.type.indexOf("touch")>-1 ? e.touches && e.touches.length > 0 && (Mt[0] = jt(e.touches[0], Ot), e.touches.length > 1 && (Mt[1] = jt(e.touches[1], Lt))) : (Ot.x = e.pageX, Ot.y = e.pageY, Ot.id = "", Mt[0] = Ot), Mt
        }, zt = function(e, t) {
            var n, i, o, s, r = 0, c = fe[e] + t[e], u = t[e] > 0, d = wt.x + t.x, p = wt.x - ft.x;
            return n = c > ne.min[e] || c < ne.max[e] ? l.panEndFriction : 1, c = fe[e] + t[e] * n, !l.allowPanToNext && y !== a.currItem.initialZoomLevel || (ie ? "h" !== ae || "x" !== e || X || (u ? (c > ne.min[e] && (n = l.panEndFriction, r = ne.min[e] - c, i = ne.min[e] - he[e]), (0 >= i || 0 > p) && tn() > 1 ? (s = d, 0 > p && d > ft.x && (s = ft.x)) : ne.min.x !== ne.max.x && (o = c)) : (c < ne.max[e] && (n = l.panEndFriction, r = c - ne.max[e], i = he[e] - ne.max[e]), (0 >= i || p > 0) && tn() > 1 ? (s = d, p > 0 && d < ft.x && (s = ft.x)) : ne.min.x !== ne.max.x && (o = c))) : s = d,
            "x" !== e) ? void(oe || K || y > a.currItem.fitRatio && (fe[e] += t[e] * n)) : (void 0 !== s && (Le(s, !0), K = s === ft.x?!1 : !0), ne.min.x !== ne.max.x && (void 0 !== o ? fe.x = o : K || (fe.x += t.x * n)), void 0 !== s)
        }, Rt = function(e) {
            if (!("mousedown" === e.type && e.button > 0)) {
                if (Jt)
                    return void e.preventDefault();
                if (!U || "mousedown" !== e.type) {
                    if (Ft(e, !0) && e.preventDefault(), De("pointerDown"), F) {
                        var t = o.arraySearch(ht, e.pointerId, "id");
                        0 > t && (t = ht.length), ht[t] = {
                            x: e.pageX,
                            y: e.pageY,
                            id: e.pointerId
                        }
                    }
                    var n = Nt(e), i = n.length;
                    Q = null, it(), V && 1 !== i || (V = se=!0, o.bind(window, m, a), B = ce = re = W = K = G = Y = X=!1, ae = null, De("firstTouchStart", n), Ne(he, fe), pe.x = pe.y = 0, Ne(dt, n[0]), Ne(pt, dt), ft.x = ye.x * ge, mt = [{
                        x: dt.x,
                        y: dt.y
                    }
                    ], R = z = Fe(), Ue(y, !0), _t(), Et()), !J && i > 1&&!oe&&!K && (b = y, X=!1, J = Y=!0, pe.y = pe.x = 0, Ne(he, fe), Ne(lt, n[0]), Ne(ct, n[1]), Pt(lt, ct, Ct), xt.x = Math.abs(Ct.x) - fe.x, xt.y = Math.abs(Ct.y) - fe.y, ee = te = Tt(lt, ct))
                }
            }
        }, Ht = function(e) {
            if (e.preventDefault(), F) {
                var t = o.arraySearch(ht, e.pointerId, "id");
                if (t>-1) {
                    var n = ht[t];
                    n.x = e.pageX, n.y = e.pageY
                }
            }
            if (V) {
                var i = Nt(e);
                if (ae || G || J)
                    Q = i;
                else if (wt.x !== ye.x * ge)
                    ae = "h";
                else {
                    var a = Math.abs(i[0].x - dt.x) - Math.abs(i[0].y - dt.y);
                    Math.abs(a) >= rt && (ae = a > 0 ? "h" : "v", Q = i)
                }
            }
        }, Bt = function() {
            if (Q) {
                var e = Q.length;
                if (0 !== e)
                    if (Ne(lt, Q[0]), ut.x = lt.x - dt.x, ut.y = lt.y - dt.y, J && e > 1) {
                        if (dt.x = lt.x, dt.y = lt.y, !ut.x&&!ut.y && kt(Q[1], ct))
                            return;
                            Ne(ct, Q[1]), X || (X=!0, De("zoomGestureStarted"));
                            var t = Tt(lt, ct), n = Xt(t);
                            n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (ce=!0);
                            var i = 1, o = Ve(), s = Ye();
                            if (o > n)
                                if (l.pinchToClose&&!ce && b <= a.currItem.initialZoomLevel) {
                                    var r = o - n, c = 1 - r / (o / 1.2);
                                    je(c), De("onPinchClose", c), re=!0
                                } else
                                    i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                            else
                                n > s && (i = (n - s) / (6 * o), i > 1 && (i = 1), n = s + i * o);
                                0 > i && (i = 0), ee = t, Pt(lt, ct, yt), pe.x += yt.x - Ct.x, pe.y += yt.y - Ct.y, Ne(Ct, yt), fe.x = Me("x", n), fe.y = Me("y", n), B = n > y, y = n, Ie()
                    } else {
                        if (!ae)
                            return;
                            if (se && (se=!1, Math.abs(ut.x) >= rt && (ut.x -= Q[0].x - pt.x), Math.abs(ut.y) >= rt && (ut.y -= Q[0].y - pt.y)), dt.x = lt.x, dt.y = lt.y, 0 === ut.x && 0 === ut.y)
                                return;
                                if ("v" === ae && l.closeOnVerticalDrag&&!St()) {
                                    pe.y += ut.y, fe.y += ut.y;
                                    var u = qt();
                                    return W=!0, De("onVerticalDrag", u), je(u), void Ie()
                                }
                                It(Fe(), lt.x, lt.y), G=!0, ne = a.currItem.bounds;
                                var d = zt("x", ut);
                                d || (zt("y", ut), ze(fe), Ie())
                            }
                        }
            }, Wt = function(e) {
            if (N.isOldAndroid) {
                if (U && "mouseup" === e.type)
                    return;
                e.type.indexOf("touch")>-1 && (clearTimeout(U), U = setTimeout(function() {
                    U = 0
                }, 600))
            }
            De("pointerUp"), Ft(e, !1) && e.preventDefault();
            var t;
            if (F) {
                var n = o.arraySearch(ht, e.pointerId, "id");
                if (n>-1)
                    if (t = ht.splice(n, 1)[0], navigator.pointerEnabled)
                        t.type = e.pointerType || "mouse";
                    else {
                        var i = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        };
                        t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                    }
                }
            var s, r = Nt(e), c = r.length;
            if ("mouseup" === e.type && (c = 0), 2 === c)
                return Q = null, !0;
            1 === c && Ne(pt, r[0]), 0 !== c || ae || oe || (t || ("mouseup" === e.type ? t = {
                x: e.pageX,
                y: e.pageY,
                type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (t = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                type: "touch"
            })), De("touchRelease", e, t));
            var u =- 1;
            if (0 === c && (V=!1, o.unbind(window, m, a), _t(), J ? u = 0 : - 1 !== bt && (u = Fe() - bt)), bt = 1 === c ? Fe() : - 1, s =- 1 !== u && 150 > u ? "zoom" : "swipe", J && 2 > c && (J=!1, 1 === c && (s = "zoomPointerUp"), De("zoomGestureEnded")), Q = null, G || X || oe || W)
                if (it(), H || (H = Ut()), H.calculateSwipeSpeed("x"), W) {
                    var d = qt();
                    if (d < l.verticalDragRange)
                        a.close();
                    else {
                        var p = fe.y, h = le;
                        ot("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                            fe.y = (a.currItem.initialPosition.y - p) * e + p, je((1 - h) * e + h), Ie()
                        }), De("onVerticalDrag", 1)
                    }
                } else {
                    if ((K || oe) && 0 === c) {
                        var f = Yt(s, H);
                        if (f)
                            return;
                            s = "zoomPointerUp"
                    }
                    if (!oe)
                        return "swipe" !== s ? void Gt() : void(!K && y > a.currItem.fitRatio && Vt(H))
                }
            }, Ut = function() {
            var e, t, n = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function(i) {
                    mt.length > 1 ? (e = Fe() - R + 50, t = mt[mt.length - 2][i]) : (e = Fe() - z, t = pt[i]), n.lastFlickOffset[i] = dt[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                },
                calculateOverBoundsAnimOffset: function(e, t) {
                    n.backAnimStarted[e] || (fe[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : fe[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e]=!0, ot("bounceZoomPan" + e, fe[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                        fe[e] = t, Ie()
                    }))))
                },
                calculateAnimOffset: function(e) {
                    n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, fe[e] += n.distanceOffset[e])
                },
                panAnimLoop: function() {
                    return Je.zoomPan && (Je.zoomPan.raf = P(n.panAnimLoop), n.now = Fe(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ie(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (fe.x = Math.round(fe.x), fe.y = Math.round(fe.y), Ie(), void tt("zoomPan")) : void 0
                }
            };
            return n
        }, Vt = function(e) {
            return e.calculateSwipeSpeed("y"), ne = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (nt("zoomPan"), e.lastNow = Fe(), void e.panAnimLoop())
        }, Yt = function(e, t) {
            var n;
            oe || (vt = p);
            var i;
            if ("swipe" === e) {
                var s = dt.x - pt.x, r = t.lastFlickDist.x < 10;
                s > st && (r || t.lastFlickOffset.x > 20) ? i =- 1 : - st > s && (r || t.lastFlickOffset.x<-20) && (i = 1)
            }
            var c;
            i && (p += i, 0 > p ? (p = l.loop ? tn() - 1 : 0, c=!0) : p >= tn() && (p = l.loop ? 0 : tn() - 1, c=!0), (!c || l.loop) && (be += i, ge -= i, n=!0));
            var u, d = ye.x * ge, h = Math.abs(d - wt.x);
            return n || d > wt.x == t.lastFlickSpeed.x > 0 ? (u = Math.abs(t.lastFlickSpeed.x) > 0 ? h / Math.abs(t.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, vt === p && (n=!1), oe=!0, De("mainScrollAnimStart"), ot("mainScroll", wt.x, d, u, o.easing.cubic.out, Le, function() {
                it(), oe=!1, vt =- 1, (n || vt !== p) && a.updateCurrItem(), De("mainScrollAnimComplete")
            }), n && a.updateCurrItem(!0), n
        }, Xt = function(e) {
            return 1 / te * e * b
        }, Gt = function() {
            var e = y, t = Ve(), n = Ye();
            t > y ? e = t : y > n && (e = n);
            var i, s = 1, r = le;
            return re&&!B&&!ce && t > y ? (a.close(), !0) : (re && (i = function(e) {
                je((s - r) * e + r)
            }), a.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
        };
        _e("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var e = function(e, t, n, i, o) {
                        _ = e + t, E = e + n, S = e + i, A = o ? e + o : ""
                    };
                    F = N.pointerEvent, F && N.touch && (N.touch=!1), F ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (e("touch", "start", "move", "end", "cancel"), j=!0) : e("mouse", "down", "move", "up"), m = E + " " + S + " " + A, g = _, F&&!j && (j = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = j, v[_] = Rt, v[E] = Ht, v[S] = Wt, A && (v[A] = v[S]), N.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[_], v.mousemove = v[E], v.mouseup = v[S]), j || (l.allowPanToNext=!1)
                }
            }
        });
        var Zt, Kt, Qt, Jt, en, tn, nn, on = function(t, n, i, s) {
            Zt && clearTimeout(Zt), Jt=!0, Qt=!0;
            var r;
            t.initialLayout ? (r = t.initialLayout, t.initialLayout = null) : r = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
            var c = i ? l.hideAnimationDuration: l.showAnimationDuration, u = function() {
                tt("initialZoom"), i ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (je(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), De("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Jt=!1
            };
            if (!c ||!r || void 0 === r.x) {
                var h = function() {
                    De("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Ne(fe, t.initialPosition), Ie(), e.style.opacity = i ? 0 : 1, je(1), u()
                };
                return void h()
            }
            var f = function() {
                var n = d, s=!a.currItem.src || a.currItem.loadError || l.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = r.w / t.w, fe.x = r.x, fe.y = r.y - O, a[s ? "template": "bg"].style.opacity = .001, Ie()), nt("initialZoom"), i&&!n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                    o.addClass(e, "pswp--animate_opacity")
                }, 30)), Zt = setTimeout(function() {
                    if (De("initialZoom" + (i ? "Out" : "In")), i) {
                        var a = r.w / t.w, l = {
                            x: fe.x,
                            y: fe.y
                        }, d = y, p = le, h = function(t) {
                            1 === t ? (y = a, fe.x = r.x, fe.y = r.y - M) : (y = (a - d) * t + d, fe.x = (r.x - l.x) * t + l.x, fe.y = (r.y - M - l.y) * t + l.y), Ie(), s ? e.style.opacity = 1 - t : je(p - t * p)
                        };
                        n ? ot("initialZoom", 0, 1, c, o.easing.cubic.out, h, u) : (h(1), Zt = setTimeout(u, c + 20))
                    } else
                        y = t.initialZoomLevel, Ne(fe, t.initialPosition), Ie(), je(1), s ? e.style.opacity = 1 : je(1), Zt = setTimeout(u, c + 20)
                }, i ? 25 : 90)
            };
            f()
        }, an = {}, sn = [], rn = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function() {
                return Kt.length
            }
        }, ln = function() {
            return {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            }
        }, cn = function(e, t, n) {
            var i = e.bounds;
            i.center.x = Math.round((an.x - t) / 2), i.center.y = Math.round((an.y - n) / 2) + e.vGap.top, i.max.x = t > an.x ? Math.round(an.x - t) : i.center.x, i.max.y = n > an.y ? Math.round(an.y - n) + e.vGap.top : i.center.y, i.min.x = t > an.x ? 0 : i.center.x, i.min.y = n > an.y ? e.vGap.top : i.center.y
        }, un = function(e, t, n) {
            if (e.src&&!e.loadError) {
                var i=!n;
                if (i && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }), De("parseVerticalMargin", e)), an.x = t.x, an.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                    var o = an.x / e.w, a = an.y / e.h;
                    e.fitRatio = a > o ? o : a;
                    var s = l.scaleMode;
                    "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = ln())
                }
                if (!n)
                    return;
                return cn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
            }
            return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = ln(), e.initialPosition = e.bounds.center, e.bounds
        }, dn = function(e, t, n, i, o, a) {
            t.loadError || i && (t.imageAppended=!0, fn(t, i), n.appendChild(i), a && setTimeout(function() {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }, pn = function(e) {
            e.loading=!0, e.loaded=!1;
            var t = e.img = o.createEl("pswp__img", "img"), n = function() {
                e.loading=!1, e.loaded=!0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
            };
            return t.onload = n, t.onerror = function() {
                e.loadError=!0, n()
            }, t.src = e.src, t
        }, hn = function(e, t) {
            return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0) : void 0
        }, fn = function(e, t, n) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var i = n ? e.w: Math.round(e.w * e.fitRatio), o = n ? e.h: Math.round(e.h * e.fitRatio);
                e.placeholder&&!e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
            }
        }, mn = function() {
            if (sn.length) {
                for (var e, t = 0; t < sn.length; t++)
                    e = sn[t], e.holder.index === e.index && dn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                sn = []
            }
        };
        _e("Controller", {
            publicMethods: {
                lazyLoadItem: function(e) {
                    e = Ee(e);
                    var t = en(e);
                    !t || t.loaded || t.loading || (De("gettingData", e, t), t.src && pn(t))
                },
                initController: function() {
                    o.extend(l, rn, !0), a.items = Kt = n, en = a.getItemAt, tn = l.getNumItemsFn, nn = l.loop, tn() < 3 && (l.loop=!1), Ae("beforeChange", function(e) {
                        var t, n = l.preload, i = null === e?!0 : e > 0, o = Math.min(n[0], tn()), s = Math.min(n[1], tn());
                        for (t = 1; (i ? s : o) >= t; t++)
                            a.lazyLoadItem(p + t);
                        for (t = 1; (i ? o : s) >= t; t++)
                            a.lazyLoadItem(p - t)
                    }), Ae("initialLayout", function() {
                        a.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p)
                    }), Ae("mainScrollAnimComplete", mn), Ae("initialZoomInEnd", mn), Ae("destroy", function() {
                        for (var e, t = 0; t < Kt.length; t++)
                            e = Kt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError=!1);
                        sn = null
                    })
                },
                getItemAt: function(e) {
                    return e >= 0 && void 0 !== Kt[e] ? Kt[e] : !1
                },
                allowProgressiveImg: function() {
                    return l.forceProgressiveLoading ||!j || l.mouseUsed || screen.width > 1200
                },
                setContent: function(e, t) {
                    l.loop && (t = Ee(t));
                    var n = a.getItemAt(e.index);
                    n && (n.container = null);
                    var i, s = a.getItemAt(t);
                    if (!s)
                        return void(e.el.innerHTML = "");
                    De("gettingData", t, s), e.index = t, e.item = s;
                    var r = s.container = o.createEl("pswp__zoom-wrap");
                    if (!s.src && s.html && (s.html.tagName ? r.appendChild(s.html) : r.innerHTML = s.html), hn(s), un(s, me), !s.src || s.loadError || s.loaded)
                        s.src&&!s.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = s.src, fn(s, i), dn(t, s, r, i, !0));
                    else {
                        if (s.loadComplete = function(n) {
                            if (c) {
                                if (e && e.index === t) {
                                    if (hn(n, !0))
                                        return n.loadComplete = n.img = null, un(n, me), qe(n), void(e.index === p && a.updateCurrZoomItem());
                                    n.imageAppended?!Jt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : N.transform && (oe || Jt) ? sn.push({
                                        item: n,
                                        baseDiv: r,
                                        img: n.img,
                                        index: t,
                                        holder: e,
                                        clearPlaceholder: !0
                                    }) : dn(t, n, r, n.img, oe || Jt, !0)
                                }
                                n.loadComplete = null, n.img = null, De("imageLoadComplete", t, n)
                            }
                        }, o.features.transform) {
                            var u = "pswp__img pswp__img--placeholder";
                            u += s.msrc ? "" : " pswp__img--placeholder--blank";
                            var d = o.createEl(u, s.msrc ? "img" : "");
                            s.msrc && (d.src = s.msrc), fn(s, d), r.appendChild(d), s.placeholder = d
                        }
                        s.loading || pn(s), a.allowProgressiveImg() && (!Qt && N.transform ? sn.push({
                            item: s,
                            baseDiv: r,
                            img: s.img,
                            index: t,
                            holder: e
                        }) : dn(t, s, r, s.img, !0, !0))
                    }
                    Qt || t !== p ? qe(s) : (ie = r.style, on(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(r)
                },
                cleanSlide: function(e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended=!1
                }
            }
        });
        var gn, vn = {}, yn = function(e, t, n) {
            var i = document.createEvent("CustomEvent"), o = {
                origEvent: e,
                target: e.target,
                releasePoint: t,
                pointerType: n || "touch"
            };
            i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
        };
        _e("Tap", {
            publicMethods: {
                initTap: function() {
                    Ae("firstTouchStart", a.onTapStart), Ae("touchRelease", a.onTapRelease), Ae("destroy", function() {
                        vn = {}, gn = null
                    })
                },
                onTapStart: function(e) {
                    e.length > 1 && (clearTimeout(gn), gn = null)
                },
                onTapRelease: function(e, t) {
                    if (t&&!G&&!Y&&!et) {
                        var n = t;
                        if (gn && (clearTimeout(gn), gn = null, $t(n, vn)))
                            return void De("doubleTap", n);
                        if ("mouse" === t.type)
                            return void yn(e, t, "mouse");
                        var i = e.target.tagName.toUpperCase();
                        if ("BUTTON" === i || o.hasClass(e.target, "pswp__single-tap"))
                            return void yn(e, t);
                        Ne(vn, n), gn = setTimeout(function() {
                            yn(e, t), gn = null
                        }, 300)
                    }
                }
            }
        });
        var bn;
        _e("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    L || (j ? Ae("mouseUsed", function() {
                        a.setupDesktopZoom()
                    }) : a.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(t) {
                    bn = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Ae("bindEvents", function() {
                        o.bind(e, n, a.handleMouseWheel)
                    }), Ae("unbindEvents", function() {
                        bn && o.unbind(e, n, a.handleMouseWheel)
                    }), a.mouseZoomedIn=!1;
                    var i, s = function() {
                        a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn=!1), 1 > y ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), r()
                    }, r = function() {
                        i && (o.removeClass(e, "pswp--dragging"), i=!1)
                    };
                    Ae("resize", s), Ae("afterChange", s), Ae("pointerDown", function() {
                        a.mouseZoomedIn && (i=!0, o.addClass(e, "pswp--dragging"))
                    }), Ae("pointerUp", r), t || s()
                },
                handleMouseWheel: function(e) {
                    if (y <= a.currItem.fitRatio)
                        return l.modal && (!l.closeOnScroll || et || V ? e.preventDefault() : D && Math.abs(e.deltaY) > 2 && (d=!0, a.close())), !0;
                    if (e.stopPropagation(), bn.x = 0, "deltaX"in e)
                        1 === e.deltaMode ? (bn.x = 18 * e.deltaX, bn.y = 18 * e.deltaY) : (bn.x = e.deltaX, bn.y = e.deltaY);
                    else if ("wheelDelta"in e)
                        e.wheelDeltaX && (bn.x =- .16 * e.wheelDeltaX), e.wheelDeltaY ? bn.y =- .16 * e.wheelDeltaY : bn.y =- .16 * e.wheelDelta;
                    else {
                        if (!("detail"in e))
                            return;
                        bn.y = e.detail
                    }
                    Ue(y, !0);
                    var t = fe.x - bn.x, n = fe.y - bn.y;
                    (l.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), a.panTo(t, n)
                },
                toggleDesktopZoom: function(t) {
                    t = t || {
                        x: me.x / 2 + ve.x,
                        y: me.y / 2 + ve.y
                    };
                    var n = l.getDoubleTapZoom(!0, a.currItem), i = y === n;
                    a.mouseZoomedIn=!i, a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var wn, xn, Cn, kn, $n, Tn, _n, En, Sn, An, Dn, Fn, jn = {
            history: !0,
            galleryUID: 1
        }, Pn = function() {
            return Dn.hash.substring(1)
        }, In = function() {
            wn && clearTimeout(wn), Cn && clearTimeout(Cn)
        }, qn = function() {
            var e = Pn(), t = {};
            if (e.length < 5)
                return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++)
                if (i[n]) {
                    var o = i[n].split("=");
                    o.length < 2 || (t[o[0]] = o[1])
                }
            if (l.galleryPIDs) {
                var a = t.pid;
                for (t.pid = 0, n = 0; n < Kt.length; n++)
                    if (Kt[n].pid === a) {
                        t.pid = n;
                        break
                    }
            } else
                t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }, On = function() {
            if (Cn && clearTimeout(Cn), et || V)
                return void(Cn = setTimeout(On, 500));
            kn ? clearTimeout(xn) : kn=!0;
            var e = p + 1, t = en(p);
            t.hasOwnProperty("pid") && (e = t.pid);
            var n = _n + "&gid=" + l.galleryUID + "&pid=" + e;
            En||-1 === Dn.hash.indexOf(n) && (An=!0);
            var i = Dn.href.split("#")[0] + "#" + n;
            Fn ? "#" + n !== window.location.hash && history[En ? "replaceState": "pushState"]("", document.title, i) : En ? Dn.replace(i) : Dn.hash = n, En=!0, xn = setTimeout(function() {
                kn=!1
            }, 60)
        };
        _e("History", {
            publicMethods: {
                initHistory: function() {
                    if (o.extend(l, jn, !0), l.history) {
                        Dn = window.location, An=!1, Sn=!1, En=!1, _n = Pn(), Fn = "pushState"in history, _n.indexOf("gid=")>-1 && (_n = _n.split("&gid=")[0], _n = _n.split("?gid=")[0]), Ae("afterChange", a.updateURL), Ae("unbindEvents", function() {
                            o.unbind(window, "hashchange", a.onHashChange)
                        });
                        var e = function() {
                            Tn=!0, Sn || (An ? history.back() : _n ? Dn.hash = _n : Fn ? history.pushState("", document.title, Dn.pathname + Dn.search) : Dn.hash = ""), In()
                        };
                        Ae("unbindEvents", function() {
                            d && e()
                        }), Ae("destroy", function() {
                            Tn || e()
                        }), Ae("firstUpdate", function() {
                            p = qn().pid
                        });
                        var t = _n.indexOf("pid=");
                        t>-1 && (_n = _n.substring(0, t), "&" === _n.slice( - 1) && (_n = _n.slice(0, - 1))), setTimeout(function() {
                            c && o.bind(window, "hashchange", a.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function() {
                    return Pn() === _n ? (Sn=!0, void a.close()) : void(kn || ($n=!0, a.goTo(qn().pid), $n=!1))
                },
                updateURL: function() {
                    In(), $n || (En ? wn = setTimeout(On, 800) : On())
                }
            }
        }), o.extend(a, at)
    };
    return e
}), function(e, t) {
    "function" == typeof define && define.amd ? define("photoswipe-ui-default", t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function() {
    "use strict";
    var e = function(e, t) {
        var n, i, o, a, s, r, l, c, u, d, p, h, f, m, g, v, y, b, w, x = this, C=!1, k=!0, $=!0, T = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function(e, t) {
                return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
                id: "download",
                label: "Download image",
                url: "{{raw_image_url}}",
                download: !0
            }
            ],
            getImageURLForShare: function() {
                return e.currItem.src || ""
            },
            getPageURLForShare: function() {
                return window.location.href
            },
            getTextForShare: function() {
                return e.currItem.title || ""
            },
            indexIndicatorSep: " / "
        }, _ = function(e) {
            if (v)
                return !0;
            e = e || window.event, g.timeToIdle && g.mouseUsed&&!u && O();
            for (var n, i, o = e.target || e.srcElement, a = o.className, s = 0; s < W.length; s++)
                n = W[s], n.onTap && a.indexOf("pswp__" + n.name)>-1 && (n.onTap(), i=!0);
            if (i) {
                e.stopPropagation && e.stopPropagation(), v=!0;
                var r = t.features.isOldAndroid ? 600: 30;
                y = setTimeout(function() {
                    v=!1
                }, r)
            }
        }, E = function() {
            return !e.likelyTouchDevice || g.mouseUsed || screen.width > 1200
        }, S = function(e, n, i) {
            t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
        }, A = function() {
            var e = 1 === g.getNumItemsFn();
            e !== m && (S(i, "ui--one-slide", e), m = e)
        }, D = function() {
            S(l, "share-modal--hidden", $)
        }, F = function() {
            return $=!$, $ ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                $ && D()
            }, 300)) : (D(), setTimeout(function() {
                $ || t.addClass(l, "pswp__share-modal--fade-in")
            }, 30)), $ || P(), !1
        }, j = function(t) {
            t = t || window.event;
            var n = t.target || t.srcElement;
            return e.shout("shareLinkClick", t, n), n.href ? n.hasAttribute("download")?!0 : (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), $ || F(), !1) : !1
        }, P = function() {
            for (var e, t, n, i, o, a = "", s = 0; s < g.shareButtons.length; s++)
                e = g.shareButtons[s], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (a = g.parseShareButtonOut(e, a));
            l.children[0].innerHTML = a, l.children[0].onclick = j
        }, I = function(e) {
            for (var n = 0; n < g.closeElClasses.length; n++)
                if (t.hasClass(e, "pswp__" + g.closeElClasses[n]))
                    return !0
        }, q = 0, O = function() {
            clearTimeout(w), q = 0, u && x.setIdle(!1)
        }, L = function(e) {
            e = e ? e : window.event;
            var t = e.relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() {
                x.setIdle(!0)
            }, g.timeToIdleOutside))
        }, M = function() {
            g.fullscreenEl && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
        }, N = function() {
            g.preloaderEl && (z(!0), d("beforeChange", function() {
                clearTimeout(f), f = setTimeout(function() {
                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img&&!e.currItem.img.naturalWidth) && z(!1) : z(!0)
                }, g.loadingIndicatorDelay)
            }), d("imageLoadComplete", function(t, n) {
                e.currItem === n && z(!0)
            }))
        }, z = function(e) {
            h !== e && (S(p, "preloader--active", !e), h = e)
        }, R = function(e) {
            var n = e.vGap;
            if (E()) {
                var s = g.barsSize;
                if (g.captionEl && "auto" === s.bottom)
                    if (a || (a = t.createEl("pswp__caption pswp__caption--fake"), a.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(a, o), t.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(e, a, !0)) {
                        var r = a.clientHeight;
                        n.bottom = parseInt(r, 10) || 44
                    } else
                        n.bottom = s.top;
                else
                    n.bottom = "auto" === s.bottom ? 0 : s.bottom;
                n.top = s.top
            } else
                n.top = n.bottom = 0
        }, H = function() {
            g.timeToIdle && d("mouseUsed", function() {
                t.bind(document, "mousemove", O), t.bind(document, "mouseout", L), b = setInterval(function() {
                    q++, 2 === q && x.setIdle(!0)
                }, g.timeToIdle / 2)
            })
        }, B = function() {
            d("onVerticalDrag", function(e) {
                k && .95 > e ? x.hideControls() : !k && e >= .95 && x.showControls()
            });
            var e;
            d("onPinchClose", function(t) {
                k && .9 > t ? (x.hideControls(), e=!0) : e&&!k && t > .9 && x.showControls()
            }), d("zoomGestureEnded", function() {
                e=!1, e&&!k && x.showControls()
            })
        }, W = [{
            name: "caption",
            option: "captionEl",
            onInit: function(e) {
                o = e
            }
        }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(e) {
                l = e
            },
            onTap: function() {
                F()
            }
        }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(e) {
                r = e
            },
            onTap: function() {
                F()
            }
        }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: e.toggleDesktopZoom
        }, {
            name: "counter",
            option: "counterEl",
            onInit: function(e) {
                s = e
            }
        }, {
            name: "button--close",
            option: "closeEl",
            onTap: e.close
        }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
        }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: e.next
        }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(e) {
                p = e
            }
        }
        ], U = function() {
            var e, n, o, a = function(i) {
                if (i)
                    for (var a = i.length, s = 0; a > s; s++) {
                        e = i[s], n = e.className;
                        for (var r = 0; r < W.length; r++)
                            o = W[r], n.indexOf("pswp__" + o.name)>-1 && (g[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                    }
            };
            a(i.children);
            var s = t.getChildByClass(i, "pswp__top-bar");
            s && a(s.children)
        };
        x.init = function() {
            t.extend(e.options, T, !0), g = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, B(), d("beforeChange", x.update), d("doubleTap", function(t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), d("preventDragEvent", function(e, t, n) {
                var i = e.target || e.srcElement;
                i && i.className && e.type.indexOf("mouse")>-1 && (i.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent=!1)
            }), d("bindEvents", function() {
                t.bind(i, "pswpTap click", _), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
            }), d("unbindEvents", function() {
                $ || F(), b && clearInterval(b), t.unbind(document, "mouseout", L), t.unbind(document, "mousemove", O), t.unbind(i, "pswpTap click", _), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
            }), d("destroy", function() {
                g.captionEl && (a && i.removeChild(a), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
            }), g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function() {
                g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
            }), d("initialZoomOut", function() {
                t.addClass(i, "pswp__ui--hidden")
            }), d("parseVerticalMargin", R), U(), g.shareEl && r && l && ($=!0), A(), H(), M(), N()
        }, x.setIdle = function(e) {
            u = e, S(i, "ui--idle", e)
        }, x.update = function() {
            k && e.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, o), S(o, "caption--empty", !e.currItem.title)), C=!0) : C=!1, $ || F(), A()
        }, x.updateFullscreen = function(i) {
            i && setTimeout(function() {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function() {
            g.counterEl && (s.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
        }, x.onGlobalTap = function(n) {
            n = n || window.event;
            var i = n.target || n.srcElement;
            if (!v)
                if (n.detail && "mouse" === n.detail.pointerType) {
                    if (I(i))
                        return void e.close();
                        t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                } else if (g.tapToToggleControls && (k ? x.hideControls() : x.showControls()), g.tapToClose && (t.hasClass(i, "pswp__img") || I(i)))
                    return void e.close()
        }, x.onMouseOver = function(e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            S(i, "ui--over-close", I(t))
        }, x.hideControls = function() {
            t.addClass(i, "pswp__ui--hidden"), k=!1
        }, x.showControls = function() {
            k=!0, C || x.update(), t.removeClass(i, "pswp__ui--hidden")
        }, x.supportsFullscreen = function() {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function() {
            var t, n = document.documentElement, i = "fullscreenchange";
            return n.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: i
            } : n.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + i
            } : n.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + i
            } : n.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), t && (t.enter = function() {
                return c = g.closeOnScroll, g.closeOnScroll=!1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function() {
                return g.closeOnScroll = c, document[this.exitK]()
            }, t.isFullscreen = function() {
                return document[this.elementK]
            }), t
        }
    };
    return e
}), define("module/gallery", ["require", "photoswipe", "photoswipe-ui-default"], function(e) {
    var t, n = e("photoswipe"), i = e("photoswipe-ui-default"), o = null, a = 0, s = 0, r = [], l = {}, c = {
        init: function(e, n, i) {
            $.each(n, function() {
                var e = $(this), t = e.parent(), n = {
                    src: t.data("preview-path"),
                    w: t.data("preview-width"),
                    h: t.data("preview-height"),
                    title: t.find(".node-child-name").text()
                };
                c.append(n, e.data("node-id"))
            }), c.setTotal(e), t = i
        },
        setTotal: function(e) {
            a = e;
            for (var t = 0; e > t; t++) {
                var n = {
                    src: window.pageVars.site_url + "/images/spinner.gif",
                    w: 20,
                    h: 20,
                    index: t
                };
                r.push(n)
            }
        },
        changeTotal: function(e) {
            a += e
        },
        append: function(e, t) {
            this.add(e, t, !1)
        },
        prepend: function(e, t) {
            this.add(e, t, !0)
        },
        add: function(e, t, n) {
            e.id = t, n ? (e.index = 0, r.unshift(e), c.updateIndexes(1, - 1)) : (e.index = s, r.splice(e.index, 0, e)), s++, l[t] = e
        },
        remove: function(e) {
            var t = l[e];
            r.splice(t.index, 1), delete l[e], c.updateIndexes( - 1, t.index), s--
        },
        removeMultiple: function(e) {
            $.each(e, function(e, t) {
                c.remove(t)
            })
        },
        show: function(e) {
            var c = document.querySelectorAll(".pswp")[0], u = {
                history: !1,
                loop: !1,
                getNumItemsFn: function() {
                    return a
                },
                bgOpacity: .8,
                showHideOpacity: !0
            };
            o = new n(c, i, r, u), o.listen("beforeChange", function() {
                var e = $(".pswp__button--arrow--left"), n = $(".pswp__button--arrow--right"), i = 0 != o.getCurrentIndex(), r = o.getCurrentIndex() != a - 1;
                e.attr("disabled", !i), o.allowPrevious(i), n.attr("disabled", !r), o.allowNext(r);
                var l = o.getCurrentIndex() == s, c = o.getCurrentIndex() == a;
                l&&!c && t(function() {
                    o.invalidateCurrItems(), o.updateSize(!0)
                })
            }), o.init();
            var d = l[e];
            o.goTo(d.index)
        },
        updateIndexes: function(e, t) {
            for (var n in l) {
                var i = l[n];
                i.index > t && (i.index += e)
            }
        }
    };
    return c
}), define("module/keyboard", ["require", "jquery"], function(e) {
    var t = e("jquery"), n = {
        params: {
            isShiftPressed: !1,
            isCtrlPressed: !1
        }
    };
    return t(function() {
        t(document).on("keydown", function(e) {
            var t = e.which || e.keyCode;
            n.params.isShiftPressed = 16 == t?!0 : n.params.isShiftPressed, n.params.isCtrlPressed = 17 == t?!0 : n.params.isCtrlPressed
        }), t(document).on("keyup", function(e) {
            var t = e.which || e.keyCode;
            n.params.isShiftPressed = 16 == t?!1 : n.params.isShiftPressed, n.params.isCtrlPressed = 17 == t?!1 : n.params.isCtrlPressed
        })
    }), n
}), define("page/folder", ["require", "jquery", "module/ajax", "page/include/mainframe", "module/dropzone", "module/confirm", "module/guide", "module/bar", "module/browser", "module/client", "module/progress", "module/jquery.selectable", "module/jquery.loader", "module/filepicker", "module/facebook_select", "module/gallery", "module/alert", "module/modal", "module/keyboard"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("page/include/mainframe"), o = e("module/dropzone"), a = e("module/confirm"), s = e("module/guide"), r = e("module/bar"), l = e("module/browser"), c = e("module/client"), u = e("module/progress"), d = (e("module/jquery.selectable"), e("module/jquery.loader"), e("module/filepicker")), p = (e("module/facebook_select"), e("module/gallery")), h = e("module/alert"), f = e("module/modal"), m = e("module/keyboard"), g = {
        params: {
            site_url: window.pageVars.site_url,
            folder_id: window.pageVars.folder_id,
            facebookappid: window.pageVars.facebook_app_id,
            file_count: window.pageVars.total,
            load_after: window.pageVars.after,
            max_file_size: window.pageVars.max_file_size,
            user: window.pageVars.arrUser,
            keys: [13, 27, 46, 65]
        },
        functions: {
            buildFolder: function() {
                g.elements = {
                    $nodecontent: t("#nodes"),
                    $cancel: t("#select-close"),
                    $selectallprimary: t("#select-all-primary"),
                    $selectcount: t("#select-count"),
                    $withselected: t("#with-selected"),
                    $batchedit: t("#batch-edit"),
                    $bottom: t("#navbar-fixed-bottom"),
                    $uploading: null
                }, g.functions.defineGuides(), g.functions.initGallery(), g.functions.initPhotoSelection(), g.functions.initInfiniteScroll(), g.functions.buildNodeEvents(), g.functions.buildClickEvents(), g.functions.buildKeyboardEvents(), g.functions.initFileDropzone(), g.functions.initCloudImport(), g.functions.initFacebookImport()
            },
            initGallery: function() {
                p.init(g.params.file_count, t(".node"), function(e) {
                    i.loadNextPage(e)
                })
            },
            initPhotoSelection: function() {
                g.selectable = g.elements.$nodecontent.selectable({
                    selectAll: "#select-all-secondary",
                    selectableItem: ".file",
                    size: g.params.file_count,
                    onSelectableValue: function(e) {
                        return e.data("node-id")
                    },
                    onSelectItem: function(e, t, n) {
                        t ? (e.find(".check > i").removeClass("fa-square-o").addClass("fa-check-square-o"), e.addClass("selected")) : (e.find(".check > i").removeClass("fa-check-square-o").addClass("fa-square-o"), e.removeClass("selected")), g.elements.$selectcount.html(n)
                    },
                    onSelectAll: function(e, t) {
                        g.elements.$withselected.prop("disabled", t), g.elements.$batchedit.prop("disabled", t), t ? e.find("i").removeClass("fa-check-square-o").addClass("fa-square-o") : e.find("i").removeClass("fa-square-o").addClass("fa-check-square-o")
                    },
                    onEmptyChange: function(e, t, n) {
                        g.elements.$withselected.prop("disabled", t), g.elements.$batchedit.prop("disabled", t), t&&!n && g.functions.toggleSelectMode(!1)
                    },
                    onFullChange: function(e, t) {
                        t ? e.find("i").removeClass("fa-square-o").addClass("fa-check-square-o") : e.find("i").removeClass("fa-check-square-o").addClass("fa-square-o")
                    },
                    onSizeChange: function(e, t) {
                        g.elements.$selectcount.html(t)
                    }
                }).data("selectable")
            },
            initInfiniteScroll: function() {
                g.params.load_after && i.infiniteScroll("folder/" + g.params.folder_id + "/load", {
                    after: g.params.load_after
                }, {}, function(e) {
                    var t = e.find("img"), n = e.find(g.selectable.settings.selectableItem);
                    g.selectable.isWhiteList || g.selectable.select(n, !0), e.find("button.node-child-edit").ladda(), t.css("top", (c.intThumbHeight.val - t.data("height")) / 2);
                    var i = {
                        src: e.data("preview-path"),
                        w: e.data("preview-width"),
                        h: e.data("preview-height"),
                        title: e.find(".node-child-name").text()
                    };
                    p.append(i, n.data("node-id"))
                }, function(e) {
                    g.selectable.setSize(e), p.setTotal(e)
                })
            },
            selectAll: function() {
                var e = g.selectable.isEnabled();
                g.selectable.selectAll(!0), !e && g.functions.toggleSelectMode(!0)
            },
            selectFile: function(e) {
                e.is(".standby") || (g.selectable.isEnabled() || g.functions.toggleSelectMode(!0), g.selectable.toggleSelect(e))
            },
            renameFile: function(e, t) {
                var n = e.find(".node-child-name-prefix").html();
                a.functions.showConfirm({
                    message: "Enter new name for your photo.",
                    accept: {
                        text: "Rename <span class='hidden-xs'>Photo</span>",
                        type: "primary"
                    },
                    form: {
                        input: !0,
                        inputval: n,
                        placeholder: "New file name.",
                        required: !0
                    },
                    $spotlight: e,
                    onAccept: function(n) {
                        return i.renameFiles(g.params.folder_id, !0, t, function(t) {
                            e.find(".node-child-name-prefix").html(n)
                        }, n), g.selectable.isEnabled() && g.functions.toggleSelectMode(!1), !0
                    }
                })
            },
            deleteFile: function(e, t) {
                a.functions.showConfirm({
                    message: "Delete this photo?",
                    accept: {
                        text: "Delete <span class='hidden-xs'>Photo</span>",
                        type: "danger"
                    },
                    $spotlight: e,
                    onAccept: function() {
                        i.deleteFiles(g.params.folder_id, !0, t, function(n) {
                            i.deleteNode(e), g.selectable.changeSize( - 1), p.changeTotal( - 1), e.addClass("standby"), g.selectable.isEnabled() && g.functions.toggleSelectMode(!1), p.remove(t)
                        })
                    }
                })
            },
            previewFile: function(e, t) {
                p.show(t), analytics.track("Preview File")
            },
            batchDeleteFiles: function() {
                a.functions.showConfirm({
                    message: "Delete the selected <b>" + g.selectable.getCount() + "</b> photos?",
                    accept: {
                        text: "Delete <span class='hidden-xs'>Photos</span>",
                        type: "danger"
                    },
                    $spotlight: t(".selected"),
                    onAccept: function() {
                        i.deleteFiles(g.params.folder_id, g.selectable.isWhiteList, g.selectable.getListAsString(), function(e) {
                            var n = t(".selected");
                            n.addClass("standby"), i.deleteNode(n), p.removeMultiple(g.selectable.list), g.selectable.changeSize( - n.length), p.changeTotal( - n.length), g.functions.toggleSelectMode(!1)
                        })
                    }
                })
            },
            toggleSelectMode: function(e) {
                g.selectable.enable(e), e ? (g.elements.$cancel.attr({
                    disabled: !1
                }), g.elements.$nodecontent.addClass("selectable"), r.functions.rotateNext(g.elements.$bottom)) : (g.selectable.selectAll(!1), g.elements.$cancel.attr({
                    disabled: !0
                }), g.elements.$nodecontent.removeClass("selectable"), r.functions.rotatePrev(g.elements.$bottom))
            },
            addStringPadding: function(e, t) {
                return e = e.toString(), e.length < t ? g.functions.addStringPadding("0" + e, t) : e
            },
            appendFileUploading: function() {
                g.elements.$uploading = t("<div class='col-sm-4 col-md-3 col-lg-2' id='uploading'></div>");
                var e = t("<div class='row node node-child node-child-uploading'></div>"), n = t("<input>").val(0);
                t("<div>").addClass("file-loader").appendTo(e).append(n), n.loader(), g.elements.$uploading.append(e), i.addNode(g.elements.$uploading), g.elements.$nodecontent.prepend(g.elements.$uploading)
            },
            fileUploadCompleted: function(e) {
                var t = e.find(".file");
                g.elements.$uploading && g.elements.$uploading.remove(), i.addNode(e), g.selectable.changeSize(1), p.changeTotal(1);
                var n = {
                    src: e.data("preview-path"),
                    w: e.data("preview-width"),
                    h: e.data("preview-height"),
                    title: e.find(".node-child-name").text()
                };
                p.prepend(n, t.data("node-id")), g.selectable.isEnabled()&&!g.selectable.isWhiteList && g.selectable.select(t, !0), 0 == u.params.totalFileCount && s.functions.showGuide.call(g)
            },
            importPhotosFromFacebook: function(e) {
                if (!l.supportsFormData())
                    return h.functions.showAlert("<b>Your browser is out of date</b> and not compatible with our application. You can either update your browser to a newer version or <b><a href='https://www.google.ca/chrome/browser/desktop/' target='_blank'>Download Google Chrome</a></b>.", "Browser Outdated"), !1;
                if (!e[0])
                    return !1;
                var o = e[0], a = new FormData;
                a.append("strUploadType", "facebook"), a.append("url", o.images[0].source), a.append("fileName", o.id), a.append("extension", "jpg"), n.post("folder/" + g.params.folder_id + "/file/import", a, function(n) {
                    n.restricted ? (f.functions.showModal("add_photos", !0, function() {
                        t("#nodes div:first-child .node-child").length > 0 ? s.functions.showGuide.call(g) : i.toggleContentState()
                    }), u.functions.resetProgress()) : (u.functions.fileCompleted(), g.functions.fileUploadCompleted(t(n.html)), e.shift(), g.functions.importPhotosFromFacebook(e))
                }, !1, !1, !0)
            },
            initFileDropzone: function() {
                o.functions.initDropzone({
                    url: g.params.site_url + "folder/" + g.params.folder_id + "/file/upload",
                    name: "Photos",
                    text: "Select From Computer",
                    icon: "fa-image-add",
                    maxFilesize: g.params.max_file_size / 1024 / 1024,
                    clickButtonId: ".add-photos-upload",
                    clickable: !0,
                    thumbnailWidth: c.intThumbWidth.val,
                    thumbnailHeight: c.intThumbHeight.val,
                    onProgress: function(e, t, n) {
                        g.elements.$uploading.find(".file-loader input").val(Math.round(t)).trigger("change")
                    },
                    onProcessing: function() {
                        g.functions.appendFileUploading()
                    },
                    onQueueComplete: function(e) {
                        e && i.toggleContentState()
                    },
                    onRestricted: function() {
                        g.elements.$uploading && g.elements.$uploading.remove()
                    },
                    onModalHidden: function() {
                        t("#nodes div:first-child .node-child").length > 0 ? s.functions.showGuide.call(g) : i.toggleContentState()
                    },
                    onError: function() {
                        g.elements.$uploading && g.elements.$uploading.remove()
                    },
                    onSuccess: function(e, n) {
                        g.functions.fileUploadCompleted(t(n.html))
                    }
                })
            },
            initCloudImport: function() {
                t("#cloud-upload, .addphotos > ul > li:nth-child(2)").on("click", function() {
                    d.buildFilepicker({
                        services: window.pageVars.importServices,
                        onComplete: function(e) {
                            u.functions.fileCompleted(), 500 == e.status && u.functions.resetProgress()
                        },
                        onSuccess: function(e) {
                            e.restricted ? (f.functions.showModal("add_photos", !0, function() {
                                t("#nodes div:first-child .node-child").length > 0 ? s.functions.showGuide.call(g) : i.toggleContentState()
                            }), u.functions.resetProgress()) : g.functions.fileUploadCompleted(t(e.html))
                        },
                        onError: function(e) {
                            var t = "";
                            400 == e.code ? t = "Filepicker: Bad parameters passed" : 403 == e.code && (t = "Filepicker: Invalid request"), t && analytics.track(t, {
                                error: e
                            })
                        }
                    })
                })
            },
            initFacebookImport: function() {
                t(".addphotos > ul > li:nth-child(3)").facebook_select({
                    appId: g.params.facebookappid,
                    view: "accounts",
                    results: {
                        account: 8,
                        album: 24,
                        photo: 20
                    },
                    onOpen: function(e, t) {
                        t == e.$wrapper ? t.fadeIn() : t == e.$all ? t.show() : t.hasClass("btn") ? t.removeClass("unusable") : t.show()
                    },
                    onClose: function(e, t) {
                        t == e.$all ? t.hide() : t.hasClass("btn") ? t.addClass("unusable") : t.hide()
                    },
                    onDone: function(e) {
                        u.functions.updateTotalCount(e.length), u.functions.showProgress("Photos"), g.functions.importPhotosFromFacebook(e)
                    }
                })
            },
            defineGuides: function() {
                var e = [{
                    params: {
                        id: 1,
                        name: "upload",
                        autoStart: !1
                    },
                    steps: [{
                        text: ["Click <span class='visible-xs-inline'>the photo icon ( <i class='fa fa-fw fa-image-add'></i> )</span><b class='hidden-xs'>Add Photos</b> to import your photos into this folder at any time. <div class='hidden-xs'><hr />You can also <b>drag and drop</b> your photos from your computer into this page.</div>"],
                        attachTo: ".addphotos",
                        tetherOptions: {
                            attachment: "top right",
                            targetAttachment: "bottom right"
                        }
                    }
                    ]
                }, {
                    params: {
                        id: 2,
                        name: "edit"
                    },
                    steps: [{
                        text: ["<span class='visible-xs-inline'><b>Tap on a photo</b> to edit it</span><span class='hidden-xs'>To edit a photo, click the <b>Edit</b> button that appears when you hover over the photo</span>. To edit multiple photos at once, click the checkboxes ( <i class='fa fa-fw fa-check-square-o'></i> ) on each photo to select multiple photos for editing."],
                        attachTo: "#nodes div:first-child .node-child",
                        tetherOptions: {
                            attachment: "top left",
                            targetAttachment: "bottom left"
                        }
                    }, {
                        text: ["Use the <b><span class='hidden-xs'>Select </span>All</b> button to select and edit all photos in this folder."],
                        attachTo: "#select-all-primary",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top right"
                        }
                    }
                    ]
                }
                ];
                s.functions.setGuidesShown.call(s, g.params.user.guidesShown), s.functions.buildGuides.call(s, e)
            },
            buildKeyboardEvents: function() {
                t(document).on("keyup", function(e) {
                    var n = e.which || e.keyCode;
                    - 1 !== t.inArray(n, g.params.keys) && (27 == n && g.selectable.isEnabled()&&!a.params.isOpen && g.functions.toggleSelectMode(), 46 == n && g.selectable.isEnabled() && g.functions.batchDeleteFiles(), 65 == n && m.params.isCtrlPressed && g.functions.selectAll())
                })
            },
            buildClickEvents: function() {
                g.elements.$cancel.on("click", function() {
                    g.functions.toggleSelectMode(!1)
                }), g.elements.$nodecontent.on("emptyChange", function(e, t) {
                    g.elements.$selectallprimary.toggleClass("hidden", t)
                }), t(document).on("click", ".select-all", g.functions.selectAll), t(document).on("click", ".add-photos-upload", function(e) {
                    analytics.track("Clicked Import File", {
                        type: "upload"
                    })
                }), t(document).on("click", ".add-photos-cloud", function(e) {
                    analytics.track("Clicked Import File", {
                        type: "cloud"
                    })
                }), t(document).on("click", ".add-more-photos", function(e) {
                    o.params.dropzone.hiddenFileInput.click()
                }), t(document).on("mouseover", ".file .check", function(e) {
                    t(this).siblings(".node-child-label").toggleClass("node-child-label-select", !0)
                }).on("mouseout", ".file .check", function(e) {
                    t(this).siblings(".node-child-label").toggleClass("node-child-label-select", !1)
                }), t(".batch-edit").click(function(e) {
                    t(this).ladda("start"), i.createBatch(g.params.folder_id, g.selectable.isWhiteList, g.selectable.getListAsString())
                }), t(".batch-delete").click(g.functions.batchDeleteFiles), t(".batch-rename").click(function() {
                    g.selectable.isMultiple() ? a.functions.showConfirm({
                        message: "Enter new prefix for your photos.",
                        accept: {
                            text: "Rename <span class='hidden-xs'>Photos</span>",
                            type: "primary"
                        },
                        form: {
                            input: !0,
                            placeholder: "New file name prefix.",
                            required: !0
                        },
                        $spotlight: t(".selected"),
                        onAccept: function(e) {
                            return i.renameFiles(g.params.folder_id, g.selectable.isWhiteList, g.selectable.getListAsString(), function(n) {
                                t(".selected").find(".node-child-name-prefix").each(function(i, o) {
                                    t(o).html(e + "_" + g.functions.addStringPadding(i + 1, n.intFileCount.toString().length))
                                }), g.functions.toggleSelectMode(!1)
                            }, e), !0
                        }
                    }) : g.functions.renameFile(t(".selected"), g.selectable.getListAsString())
                }), t(document).on("click", ".howto > li > a", function(e) {
                    s.functions.onShowHowTo.call(this, g)
                }), t(document).on("contextmenu", ".node-child", function(e) {
                    return t(this).is(".standby") || t(this).find(".btn-group").addClass("open").find("button").attr({
                        "aria-expanded": !0
                    }), !1
                })
            },
            buildNodeEvents: function() {
                i.nodeClick(".node", function(e, t) {
                    e.is(".standby") || (!g.selectable.isEnabled() && l.isMobileScreen() ? i.createBatch(g.params.folder_id, !0, t) : g.selectable.isEnabled() && g.selectable.toggleSelect(e))
                }), i.nodeClick(".file .check", function(e, t) {
                    return g.functions.selectFile(e), !1
                }), i.nodeClick(".node-child-edit", function(e, t) {
                    return e.is(".standby") || (e.addClass("standby"), e.find("button.node-child-edit").ladda("start"), g.selectable.isEnabled() ? i.createBatch(g.params.folder_id, g.selectable.isWhiteList, g.selectable.getListAsString()) : i.createBatch(g.params.folder_id, !0, t)), !1
                }), i.nodeClick(".node-child-select", function(e, t) {
                    return g.functions.selectFile(e), !1
                }), i.nodeClick(".node-child-delete", function(e, t) {
                    return g.functions.deleteFile(e, t), !1
                }), i.nodeClick(".node-child-rename", function(e, t) {
                    return g.functions.renameFile(e, t), !1
                }), i.nodeClick(".node-child-preview", function(e, t) {
                    g.functions.previewFile(e, t)
                })
            }
        }
    };
    t(".page.folder").ready(function() {
        i.ready(), g.functions.buildFolder()
    })
}), define("jquery.viewport", ["jquery"], function(e) {
    return function(e) {
        e.belowthefold = function(t, n) {
            var i = e(window).height() + e(window).scrollTop();
            return i <= e(t).offset().top - n.threshold
        }, e.abovethetop = function(t, n) {
            var i = e(window).scrollTop();
            return i >= e(t).offset().top + e(t).height() - n.threshold
        }, e.rightofscreen = function(t, n) {
            var i = e(window).width() + e(window).scrollLeft();
            return i <= e(t).offset().left - n.threshold
        }, e.leftofscreen = function(t, n) {
            var i = e(window).scrollLeft();
            return i >= e(t).offset().left + e(t).width() - n.threshold
        }, e.inviewport = function(t, n) {
            return !(e.rightofscreen(t, n) || e.leftofscreen(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
        }, e.extend(e.expr[":"], {
            "below-the-fold": function(t, n, i) {
                return e.belowthefold(t, {
                    threshold: 0
                })
            },
            "above-the-top": function(t, n, i) {
                return e.abovethetop(t, {
                    threshold: 0
                })
            },
            "left-of-screen": function(t, n, i) {
                return e.leftofscreen(t, {
                    threshold: 0
                })
            },
            "right-of-screen": function(t, n, i) {
                return e.rightofscreen(t, {
                    threshold: 0
                })
            },
            "in-viewport": function(t, n, i) {
                return e.inviewport(t, {
                    threshold: 0
                })
            }
        })
    }(e), {}
}), define("module/batch", ["require", "jquery", "module/ajax", "module/modal", "module/confirm", "module/dropzone", "module/browser"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("module/modal"), o = e("module/confirm"), a = e("module/dropzone"), s = e("module/browser"), r = {
        params: {
            id: null,
            order_previous: 1,
            order: 1,
            effect_id: 0,
            effect_id_newest: 0,
            iterations: [],
            loaders: [],
            pages: {
                from: 1,
                to: 1,
                current: 0,
                offset: 0
            },
            isSliding: !1,
            isSwitching: !1,
            isExecuting: !1
        },
        functions: {
            buildBatch: function(e, n) {
                var i = this;
                return r.elements = {
                    $batch: t("#editor-batch"),
                    $batchlist: t("#batch"),
                    $order: t("#currorder"),
                    $prev: t("#prev"),
                    $next: t("#next"),
                    $slideprev: t("#batch-prev"),
                    $slidenext: t("#batch-next"),
                    $undo: t("#btn-undo"),
                    $redo: t("#btn-redo"),
                    $loader: t("<i class='fa fa-fw fa-spinner fa-spin'></i>")
                }, r.params.id = e, r.params.position = {
                    width: r.elements.$batchlist.length ? r.elements.$batchlist.width(): 0,
                    height: r.elements.$batchlist.height(),
                    border: 5
                }, r.elements.$slideprev.on("click", function() {
                    r.functions.slideBatchThumbs.call(i, "prev")
                }), r.elements.$slidenext.on("click", function() {
                    r.functions.slideBatchThumbs.call(i, "next")
                }), r.elements.$prev.on("click", function() {
                    r.functions.navigatePhotos.call(i, "prev")
                }), r.elements.$next.on("click", function() {
                    r.functions.navigatePhotos.call(i, "next")
                }), r.elements.$undo.on("click", function() {
                    r.functions.navigateIterations.call(i, "undo")
                }), r.elements.$redo.on("click", function() {
                    r.functions.navigateIterations.call(i, "redo")
                }), r.functions.onSlide(n), r
            },
            onSlide: function(e) {
                r.elements.$batch.bind("webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend", function(t) {
                    r.params.isSliding=!1, e && e()
                })
            },
            setBatchEffectIdsTo: function(e, t) {
                t || (this.params.effect_id = e), this.params.effect_id_newest = e
            },
            updateBatchParams: function(e, n, i) {
                var o = this, a=!0, s = o.params.pages.from;
                t.extend(!0, o.params, n), t.each(n.batch_files, function(n, r) {
                    o.params.batch_files[n].isAppened ? o.params.batch_files[n].iterations = r.iterations : o.functions.appendBatchThumb.call(o, e, n), a && (o.params.iterations = [], t.each(o.params.batch_files[n].iterations, function(e, t) {
                        parseInt(e) <= o.params.effect_id && o.params.iterations.push(parseInt(e))
                    })), i && a && (o.params.pages.from = parseInt(n), a=!1), s = n
                }), i && (o.params.pages.to = parseInt(s)), o.params.pages.to != o.params.batch.file_count ? o.elements.$slidenext.addClass("active") : o.elements.$slidenext.removeClass("active"), 1 != o.params.pages.from ? o.elements.$slideprev.addClass("active") : o.elements.$slideprev.removeClass("active"), o.functions.updateBatchThumbs.call(o)
            },
            updatePreviewImage: function(e) {
                e.elements.$preview.attr("src", r.functions.getImagePath.call(r, "preview"))
            },
            updateBatchThumbs: function() {
                if (!t.isEmptyObject(r.params.batch_files))
                    for (var e = r.params.pages.from; e <= r.params.pages.to; e++)
                        if (r.params.batch_files[e])
                            try {
                                r.params.batch_files[e].$img.attr("src", r.functions.getImagePath.call(r, "icon", e))
                            } catch (n) {}
            },
            getImagePath: function(e, t, n) {
                var i = 1e5 * Math.random() + 1e4, o = t ? t: this.params.order, a = n ? this.params.effect_id_newest: this.params.effect_id, s = this.params.batch_files[o].iterations[a], r = "icon" == e ? s.icon.path: s.preview.path;
                return r + "?" + i
            },
            appendBatchThumb: function(e, n) {
                r.params.batch_files[n].$img = t("<img src='" + r.params.batch_files[n].iterations[r.params.effect_id].icon.path + "' />").on("load", function() {
                    t(this).parent().css({
                        width: "auto",
                        height: "auto"
                    })
                }), r.params.batch_files[n].$li = t("<li" + (n == r.params.order ? " class='active'" : "") + "></li>").append(r.params.batch_files[n].$img), r.params.batch_files[n].$li.on("click", function() {
                    r.functions.switchPhoto.call(r, e, n)
                }), r.params.batch_files[n].$li.css({
                    width: r.params.batch_files[n].iterations[r.params.effect_id].icon.width,
                    height: r.params.batch_files[n].iterations[r.params.effect_id].icon.height
                }), r.params.batch_files[n].isAppened=!0, r.elements.$batchlist.append(r.params.batch_files[n].$li)
            },
            navigatePhotos: function(e) {
                var t = parseInt(r.params.order), n = "next" == e ? r.elements.$next: r.elements.$prev;
                t = "next" == e && t + 1 <= r.params.batch.file_count ? t + 1 : t, t = "prev" == e && t - 1 > 0 ? t - 1 : t, t != r.params.order && (r.functions.showLoadingIconOn(n), r.functions.switchPhoto.call(r, this, t))
            },
            switchPhoto: function(e, t) {
                r.params.isSwitching || r.params.isExecuting || a.params.isImporting || (r.params.order_previous = r.params.order, r.params.order = parseInt(t), r.params.isSwitching=!0, e.params.effect && e.params.effect.params.server && (r.params.isExecuting=!0), r.functions.slideBatchThumbs.call(e, null, function() {
                    r.params.batch_files[r.params.order].$li.siblings().removeClass("active").end().addClass("active"), r.elements.$order.html(t), r.functions.showLoadingIconOn(r.params.batch_files[r.params.order].$li), n.post("batch/" + r.params.id + "/job/preview", {
                        batch_file_id: r.params.batch_files[r.params.order].id
                    }, function(t) {
                        r.functions.updatePreviewImage(e)
                    })
                }))
            },
            slideBatchThumbs: function(e, t) {
                var n = this, i = e ? e: r.params.order > r.params.pages.to ? "next": "prev", o = "next" == i ? r.elements.$slidenext: r.elements.$slideprev;
                return !e && r.params.order && r.params.order >= r.params.pages.from && r.params.order <= r.params.pages.to ? (t && t(), !1) : !o.is(".active") || r.params.isSliding?!1 : (r.params.isSliding = s.supportsTransitions() && r.elements.$batch.is(":visible")?!0 : !1, r.functions.showLoadingIconOn(o), r.params.pages.current = "next" == i ? r.params.pages.current + 1 : r.params.pages.current - 1, void r.functions.processBatchThumbs.call(n, i, function() {
                    r.params.pages.offset = r.params.pages.offset - r.params.batch_files[r.params.pages.from].$li.offset().left + n.params.position.padding, r.elements.$batchlist.css({
                        left: r.params.pages.offset
                    }), t && t()
                }))
            },
            processBatchThumbs: function(e, t) {
                var i = this, o = {
                    batch_width: r.params.batch.file_count > 1 ? r.elements.$batch.width(): 0,
                    batch_padding: r.params.position.border,
                    action: e
                };
                n.post("batch/" + r.params.id + "/job/visible", o, function(e) {
                    r.functions.hideAllLoadingIcons(), e && e.batch_files && r.functions.updateBatchParams.call(r, i, e, !0), t && t()
                })
            },
            showLoadingIconOn: function(e) {
                e.each(function() {
                    var e = t(this), n = r.elements.$loader.clone();
                    e.find("i").css({
                        display: "none"
                    }), e.append(n), r.params.loaders.push(n)
                })
            },
            hideAllLoadingIcons: function() {
                t.each(r.params.loaders, function() {
                    var e = t(this);
                    e.siblings("i").css({
                        display: "inline-block"
                    }), e.remove()
                }), r.params.loaders = []
            },
            getDimensions: function() {
                return this.params.batch_files[this.params.order].iterations[this.params.effect_id]
            },
            navigateIterations: function(e) {
                var n = this, i = "undo" == e ? r.elements.$undo: r.elements.$redo, o = t.inArray(r.params.effect_id, r.params.iterations);
                return i.is(":disabled")?!1 : (n.elements.$preview.css({
                    "min-height": 0
                }), o = "undo" == e ? o - 1 : o + 1, r.functions.setBatchEffectIdsTo.call(r, r.params.iterations[o]), void r.functions.switchIteration(n))
            },
            switchIteration: function(e) {
                r.functions.updatePreviewImage.call(r, e), r.functions.updateBatchThumbs.call(r)
            },
            updateIterationAndNavigationButtons: function(e) {
                0 == r.params.effect_id ? (r.elements.$undo.removeClass("active").attr({
                    disabled: !0
                }), e.elements.$finishmain.attr({
                    disabled: !0
                })) : (r.elements.$undo.addClass("active").attr({
                    disabled: !1
                }), e.elements.$finishmain.attr({
                    disabled: !1
                })), r.params.effect_id == r.params.iterations[r.params.iterations.length - 1] ? r.elements.$redo.removeClass("active").attr({
                    disabled: !0
                }) : r.elements.$redo.addClass("active").attr({
                    disabled: !1
                }), r.params.order != r.params.batch.file_count ? r.elements.$next.addClass("active") : r.elements.$next.removeClass("active"), 1 != r.params.order ? r.elements.$prev.addClass("active") : r.elements.$prev.removeClass("active")
            },
            confirmToFinishEditing: function(e) {
                var t = e.params.effect;
                o.functions.showConfirm({
                    message: "Clicking <b>Finish</b> will save your changes and process" + (1 == r.params.batch.file_count ? " this" : " all") + " photo" + (1 == r.params.batch.file_count ? "" : "s") + ".",
                    accept: {
                        text: "Finish",
                        type: "success"
                    },
                    reject: {
                        text: "Cancel",
                        type: "default"
                    },
                    onAccept: function() {
                        t ? t.functions.runEffect.call(t, e, {
                            apply: 1,
                            finish: 1
                        }) : r.functions.finishEditing()
                    }
                })
            },
            finishEditing: function() {
                t(window).off("beforeunload"), i.functions.showModal("finish", !0), n.post("batch/" + r.params.id + "/finish", {
                    effect_id: r.params.effect_id
                }, function(e) {
                    location.href = window.pageVars.site_url + "batch/" + r.params.id
                }, function() {
                    i.functions.hideModal(), o.functions.hideConfirm()
                })
            }
        }
    };
    return r
}), define("module/Class", ["require"], function(e) {
    var t=!1, n = /xyz/.test(function() {
        xyz
    }) ? /\b_super\b/ : /.*/;
    return this.Class = function() {}, Class.extend = function(e) {
        function i() {
            !t && this.init && this.init.apply(this, arguments)
        }
        var o = this.prototype;
        t=!0;
        var a = new this;
        t=!1;
        for (var s in e)
            a[s] = "function" == typeof e[s] && "function" == typeof o[s] && n.test(e[s]) ? function(e, t) {
                return function() {
                    var n = this._super;
                    this._super = o[e];
                    var i = t.apply(this, arguments);
                    return this._super = n, i
                }
            }(s, e[s]) : e[s];
        return i.prototype = a, i.prototype.constructor = i, i.extend = arguments.callee, i
    }, this.Class
}), define("module/calculate", ["require", "jquery"], function(e) {
    var t = (e("jquery"), {
        updateBoundaryBox: function(e) {
            var n = this, i = n.functions.getData.call(n), o = i.position, a = n.component.elements.$component, s = n.elements.$stage, r = s.offset();
            o || (o = i.position = {}), o.container = {
                left: r.left,
                top: r.top,
                width: s.width(),
                height: s.height()
            }, o.container.right = r.left + o.container.width, o.container.bottom = r.top + o.container.height, (!e || o.width > o.container.width || o.height > o.container.height) && (o.width = o.width_original = a.width(), o.height = o.height_original = a.height()), o.ratio = a.width() / a.height(), o.rotation && t.updateBoundaryDimensions(o), o.x = void 0 == o.x && o.left_percent ? Math.round(o.left_percent * o.container.width) : o.x, o.y = void 0 == o.y && o.top_percent ? Math.round(o.top_percent * o.container.height) : o.y, o.align_left = void 0 == o.align_left ? 1 : o.align_left, o.align_top = void 0 == o.align_top ? 1 : o.align_top, o.left = 0 == o.align_left ? o.container.left + o.container.width - o.width - o.x : o.container.left + o.x, o.top = 0 == o.align_top ? o.container.top + o.container.height - o.height - o.y : o.container.top + o.y, o.left = o.horizontal_snap ? o.container.left + o.container.width / 2 - o.width / 2 : o.left, o.top = o.vertical_snap ? o.container.top + o.container.height / 2 - o.height / 2 : o.top, o.left_percent = (o.left - o.container.left) / o.container.width, o.top_percent = (o.top - o.container.top) / o.container.height, o.width_percent = o.width ? Math.min(o.width / o.container.width, 1) : o.width_percent, o.height_percent = o.height ? Math.min(o.height / o.container.height, 1) : o.height_percent, o.width_percent + o.left_percent > 1 && (o.width_percent = 1 - o.left_percent, o.width = o.width_percent * o.container.width), o.height_percent + o.top_percent > 1 && (o.height_percent = 1 - o.top_percent, o.height = o.height_percent * o.container.height), o.left_center = o.left + o.width / 2, o.top_center = o.top + o.height / 2, o.right = o.left + o.width, o.bottom = o.top + o.height
        },
        updateBoundaryDimensions: function(e) {
            var t = e.rotation * Math.PI / 180, n = (90 - e.rotation) * Math.PI / 180, i = 2 * Math.abs(Math.cos(n) * e.height_original / 2), o = 2 * Math.abs(Math.sin(n) * e.height_original / 2);
            e.width = Math.abs(Math.cos(t) * e.width_original) + i, e.height = Math.abs(Math.sin(t) * e.width_original) + o
        },
        checkPositionSnap: function(e, n) {
            var i = e.left + e.width / 2, o = e.container.left + e.container.width / 2, a = e.top + e.height / 2, s = e.container.top + e.container.height / 2;
            e.horizontal_snap = i >= o - n && o + n >= i ? 1 : 0, e.vertical_snap = a >= s - n && s + n >= a ? 1 : 0, t.adjustPositionSnapped(e)
        },
        adjustPositionSnapped: function(e) {
            e.left = e.horizontal_snap ? e.container.left + e.container.width / 2 - e.width / 2 : e.left, e.top = e.vertical_snap ? e.container.top + e.container.height / 2 - e.height / 2 : e.top
        }
    });
    return t
}), function(e, t, n, i) {
    "use strict";
    function o(e, t, n) {
        return setTimeout(u(e, n), t)
    }
    function a(e, t, n) {
        return Array.isArray(e) ? (s(e, n[t], n), !0) : !1
    }
    function s(e, t, n) {
        var o;
        if (e)
            if (e.forEach)
                e.forEach(t, n);
            else if (e.length !== i)
                for (o = 0; o < e.length;)
                    t.call(n, e[o], o, e), o++;
            else
                for (o in e)
                    e.hasOwnProperty(o) && t.call(n, e[o], o, e)
    }
    function r(e, t, n) {
        for (var o = Object.keys(t), a = 0; a < o.length;)(!n || n && e[o[a]] === i)
            && (e[o[a]] = t[o[a]]), a++;
        return e
    }
    function l(e, t) {
        return r(e, t, !0)
    }
    function c(e, t, n) {
        var i, o = t.prototype;
        i = e.prototype = Object.create(o), i.constructor = e, i._super = o, n && r(i, n)
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function d(e, t) {
        return typeof e == ue ? e.apply(t ? t[0] || i : i, t) : e
    }
    function p(e, t) {
        return e === i ? t : e
    }
    function h(e, t, n) {
        s(v(t), function(t) {
            e.addEventListener(t, n, !1)
        })
    }
    function f(e, t, n) {
        s(v(t), function(t) {
            e.removeEventListener(t, n, !1)
        })
    }
    function m(e, t) {
        for (; e;) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function g(e, t) {
        return e.indexOf(t)>-1
    }
    function v(e) {
        return e.trim().split(/\s+/g)
    }
    function y(e, t, n) {
        if (e.indexOf&&!n)
            return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if (n && e[i][n] == t ||!n && e[i] === t)
                return i;
            i++
        }
        return - 1
    }
    function b(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function w(e, t, n) {
        for (var i = [], o = [], a = 0; a < e.length;) {
            var s = t ? e[a][t]: e[a];
            y(o, s) < 0 && i.push(e[a]), o[a] = s, a++
        }
        return n && (i = t ? i.sort(function(e, n) {
            return e[t] > n[t]
        }) : i.sort()), i
    }
    function x(e, t) {
        for (var n, o, a = t[0].toUpperCase() + t.slice(1), s = 0; s < le.length;) {
            if (n = le[s], o = n ? n + a : t, o in e)
                return o;
            s++
        }
        return i
    }
    function C() {
        return fe++
    }
    function k(e) {
        var t = e.ownerDocument;
        return t.defaultView || t.parentWindow
    }
    function $(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            d(e.options.enable, [e]) && n.handler(t)
        }, this.init()
    }
    function T(e) {
        var t, n = e.options.inputClass;
        return new (t = n ? n : ve ? N : ye ? H : ge ? W : M)(e, _)
    }
    function _(e, t, n) {
        var i = n.pointers.length, o = n.changedPointers.length, a = t & $e && i - o === 0, s = t & (_e | Ee) && i - o === 0;
        n.isFirst=!!a, n.isFinal=!!s, a && (e.session = {}), n.eventType = t, E(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }
    function E(e, t) {
        var n = e.session, i = t.pointers, o = i.length;
        n.firstInput || (n.firstInput = D(t)), o > 1&&!n.firstMultiple ? n.firstMultiple = D(t) : 1 === o && (n.firstMultiple=!1);
        var a = n.firstInput, s = n.firstMultiple, r = s ? s.center: a.center, l = t.center = F(i);
        t.timeStamp = he(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = q(r, l), t.distance = I(r, l), S(n, t), t.offsetDirection = P(t.deltaX, t.deltaY), t.scale = s ? L(s.pointers, i) : 1, t.rotation = s ? O(s.pointers, i) : 0, A(n, t);
        var c = e.element;
        m(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
    }
    function S(e, t) {
        var n = t.center, i = e.offsetDelta || {}, o = e.prevDelta || {}, a = e.prevInput || {};
        (t.eventType === $e || a.eventType === _e) && (o = e.prevDelta = {
            x: a.deltaX || 0,
            y: a.deltaY || 0
        }, i = e.offsetDelta = {
            x: n.x,
            y: n.y
        }), t.deltaX = o.x + (n.x - i.x), t.deltaY = o.y + (n.y - i.y)
    }
    function A(e, t) {
        var n, o, a, s, r = e.lastInterval || t, l = t.timeStamp - r.timeStamp;
        if (t.eventType != Ee && (l > ke || r.velocity === i)) {
            var c = r.deltaX - t.deltaX, u = r.deltaY - t.deltaY, d = j(l, c, u);
            o = d.x, a = d.y, n = pe(d.x) > pe(d.y) ? d.x : d.y, s = P(c, u), e.lastInterval = t
        } else
            n = r.velocity, o = r.velocityX, a = r.velocityY, s = r.direction;
        t.velocity = n, t.velocityX = o, t.velocityY = a, t.direction = s
    }
    function D(e) {
        for (var t = [], n = 0; n < e.pointers.length;)
            t[n] = {
                clientX: de(e.pointers[n].clientX),
                clientY: de(e.pointers[n].clientY)
            }, n++;
        return {
            timeStamp: he(),
            pointers: t,
            center: F(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function F(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: de(e[0].clientX),
                y: de(e[0].clientY)
            };
        for (var n = 0, i = 0, o = 0; t > o;)
            n += e[o].clientX, i += e[o].clientY, o++;
        return {
            x: de(n / t),
            y: de(i / t)
        }
    }
    function j(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }
    function P(e, t) {
        return e === t ? Se : pe(e) >= pe(t) ? e > 0 ? Ae : De : t > 0 ? Fe : je
    }
    function I(e, t, n) {
        n || (n = Oe);
        var i = t[n[0]] - e[n[0]], o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o)
    }
    function q(e, t, n) {
        n || (n = Oe);
        var i = t[n[0]] - e[n[0]], o = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI
    }
    function O(e, t) {
        return q(t[1], t[0], Le) - q(e[1], e[0], Le)
    }
    function L(e, t) {
        return I(t[0], t[1], Le) / I(e[0], e[1], Le)
    }
    function M() {
        this.evEl = Ne, this.evWin = ze, this.allow=!0, this.pressed=!1, $.apply(this, arguments)
    }
    function N() {
        this.evEl = Be, this.evWin = We, $.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }
    function z() {
        this.evTarget = Ve, this.evWin = Ye, this.started=!1, $.apply(this, arguments)
    }
    function R(e, t) {
        var n = b(e.touches), i = b(e.changedTouches);
        return t & (_e | Ee) && (n = w(n.concat(i), "identifier", !0)), [n, i]
    }
    function H() {
        this.evTarget = Ge, this.targetIds = {}, $.apply(this, arguments)
    }
    function B(e, t) {
        var n = b(e.touches), i = this.targetIds;
        if (t & ($e | Te) && 1 === n.length)
            return i[n[0].identifier]=!0, [n, n];
        var o, a, s = b(e.changedTouches), r = [], l = this.target;
        if (a = n.filter(function(e) {
            return m(e.target, l)
        }), t === $e)
            for (o = 0; o < a.length;)
                i[a[o].identifier]=!0, o++;
        for (o = 0; o < s.length;)
            i[s[o].identifier] && r.push(s[o]), t & (_e | Ee) && delete i[s[o].identifier], o++;
        return r.length ? [w(a.concat(r), "identifier", !0), r] : void 0
    }
    function W() {
        $.apply(this, arguments);
        var e = u(this.handler, this);
        this.touch = new H(this.manager, e), this.mouse = new M(this.manager, e)
    }
    function U(e, t) {
        this.manager = e, this.set(t)
    }
    function V(e) {
        if (g(e, tt))
            return tt;
        var t = g(e, nt), n = g(e, it);
        return t && n ? nt + " " + it : t || n ? t ? nt : it : g(e, et) ? et : Je
    }
    function Y(e) {
        this.id = C(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = ot, this.simultaneous = {}, this.requireFail = []
    }
    function X(e) {
        return e & ct ? "cancel" : e & rt ? "end" : e & st ? "move" : e & at ? "start" : ""
    }
    function G(e) {
        return e == je ? "down" : e == Fe ? "up" : e == Ae ? "left" : e == De ? "right" : ""
    }
    function Z(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }
    function K() {
        Y.apply(this, arguments)
    }
    function Q() {
        K.apply(this, arguments), this.pX = null, this.pY = null
    }
    function J() {
        K.apply(this, arguments)
    }
    function ee() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }
    function te() {
        K.apply(this, arguments)
    }
    function ne() {
        K.apply(this, arguments)
    }
    function ie() {
        Y.apply(this, arguments), this.pTime=!1, this.pCenter=!1, this._timer = null, this._input = null, this.count = 0
    }
    function oe(e, t) {
        return t = t || {}, t.recognizers = p(t.recognizers, oe.defaults.preset), new ae(e, t)
    }
    function ae(e, t) {
        t = t || {}, this.options = l(t, oe.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = T(this), this.touchAction = new U(this, this.options.touchAction), se(this, !0), s(t.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
    }
    function se(e, t) {
        var n = e.element;
        s(e.options.cssProps, function(e, i) {
            n.style[x(n.style, i)] = t ? e : ""
        })
    }
    function re(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var le = ["", "webkit", "moz", "MS", "ms", "o"], ce = t.createElement("div"), ue = "function", de = Math.round, pe = Math.abs, he = Date.now, fe = 1, me = /mobile|tablet|ip(ad|hone|od)|android/i, ge = "ontouchstart"in e, ve = x(e, "PointerEvent") !== i, ye = ge && me.test(navigator.userAgent), be = "touch", we = "pen", xe = "mouse", Ce = "kinect", ke = 25, $e = 1, Te = 2, _e = 4, Ee = 8, Se = 1, Ae = 2, De = 4, Fe = 8, je = 16, Pe = Ae | De, Ie = Fe | je, qe = Pe | Ie, Oe = ["x", "y"], Le = ["clientX", "clientY"];
    $.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(k(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(k(this.element), this.evWin, this.domHandler)
        }
    };
    var Me = {
        mousedown: $e,
        mousemove: Te,
        mouseup: _e
    }, Ne = "mousedown", ze = "mousemove mouseup";
    c(M, $, {
        handler: function(e) {
            var t = Me[e.type];
            t & $e && 0 === e.button && (this.pressed=!0), t & Te && 1 !== e.which && (t = _e), this.pressed && this.allow && (t & _e && (this.pressed=!1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: xe,
                srcEvent: e
            }))
        }
    });
    var Re = {
        pointerdown: $e,
        pointermove: Te,
        pointerup: _e,
        pointercancel: Ee,
        pointerout: Ee
    }, He = {
        2: be,
        3: we,
        4: xe,
        5: Ce
    }, Be = "pointerdown", We = "pointermove pointerup pointercancel";
    e.MSPointerEvent && (Be = "MSPointerDown", We = "MSPointerMove MSPointerUp MSPointerCancel"), c(N, $, {
        handler: function(e) {
            var t = this.store, n=!1, i = e.type.toLowerCase().replace("ms", ""), o = Re[i], a = He[e.pointerType] || e.pointerType, s = a == be, r = y(t, e.pointerId, "pointerId");
            o & $e && (0 === e.button || s) ? 0 > r && (t.push(e), r = t.length - 1) : o & (_e | Ee) && (n=!0), 0 > r || (t[r] = e, this.callback(this.manager, o, {
                pointers: t,
                changedPointers: [e],
                pointerType: a,
                srcEvent: e
            }), n && t.splice(r, 1))
        }
    });
    var Ue = {
        touchstart: $e,
        touchmove: Te,
        touchend: _e,
        touchcancel: Ee
    }, Ve = "touchstart", Ye = "touchstart touchmove touchend touchcancel";
    c(z, $, {
        handler: function(e) {
            var t = Ue[e.type];
            if (t === $e && (this.started=!0), this.started) {
                var n = R.call(this, e, t);
                t & (_e | Ee) && n[0].length - n[1].length === 0 && (this.started=!1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: be,
                    srcEvent: e
                })
            }
        }
    });
    var Xe = {
        touchstart: $e,
        touchmove: Te,
        touchend: _e,
        touchcancel: Ee
    }, Ge = "touchstart touchmove touchend touchcancel";
    c(H, $, {
        handler: function(e) {
            var t = Xe[e.type], n = B.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: be,
                srcEvent: e
            })
        }
    }), c(W, $, {
        handler: function(e, t, n) {
            var i = n.pointerType == be, o = n.pointerType == xe;
            if (i)
                this.mouse.allow=!1;
            else if (o&&!this.mouse.allow)
                return;
            t & (_e | Ee) && (this.mouse.allow=!0), this.callback(e, t, n)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ze = x(ce.style, "touchAction"), Ke = Ze !== i, Qe = "compute", Je = "auto", et = "manipulation", tt = "none", nt = "pan-x", it = "pan-y";
    U.prototype = {
        set: function(e) {
            e == Qe && (e = this.compute()), Ke && (this.manager.element.style[Ze] = e), this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return s(this.manager.recognizers, function(t) {
                d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }), V(e.join(" "))
        },
        preventDefaults: function(e) {
            if (!Ke) {
                var t = e.srcEvent, n = e.offsetDirection;
                if (this.manager.session.prevented)
                    return void t.preventDefault();
                var i = this.actions, o = g(i, tt), a = g(i, it), s = g(i, nt);
                return o || a && n & Pe || s && n & Ie ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented=!0, e.preventDefault()
        }
    };
    var ot = 1, at = 2, st = 4, rt = 8, lt = rt, ct = 16, ut = 32;
    Y.prototype = {
        defaults: {},
        set: function(e) {
            return r(this.options, e), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(e) {
            if (a(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return e = Z(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
        },
        dropRecognizeWith: function(e) {
            return a(e, "dropRecognizeWith", this) ? this : (e = Z(e, this), delete this.simultaneous[e.id], this)
        },
        requireFailure: function(e) {
            if (a(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return e = Z(e, this), - 1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
        },
        dropRequireFailure: function(e) {
            if (a(e, "dropRequireFailure", this))
                return this;
            e = Z(e, this);
            var t = y(this.requireFail, e);
            return t>-1 && this.requireFail.splice(t, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                n.manager.emit(n.options.event + (t ? X(i) : ""), e)
            }
            var n = this, i = this.state;
            rt > i && t(!0), t(), i >= rt && t(!0)
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void(this.state = ut)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (ut | ot)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = r({}, e);
            return d(this.options.enable, [this, t]) ? (this.state & (lt | ct | ut) && (this.state = ot), this.state = this.process(t), void(this.state & (at | st | rt | ct) && this.tryEmit(t))) : (this.reset(), void(this.state = ut))
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    }, c(K, Y, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state, n = e.eventType, i = t & (at | st), o = this.attrTest(e);
            return i && (n & Ee ||!o) ? t | ct : i || o ? n & _e ? t | rt : t & at ? t | st : at : ut
        }
    }), c(Q, K, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: qe
        },
        getTouchAction: function() {
            var e = this.options.direction, t = [];
            return e & Pe && t.push(it), e & Ie && t.push(nt), t
        },
        directionTest: function(e) {
            var t = this.options, n=!0, i = e.distance, o = e.direction, a = e.deltaX, s = e.deltaY;
            return o & t.direction || (t.direction & Pe ? (o = 0 === a ? Se : 0 > a ? Ae : De, n = a != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === s ? Se : 0 > s ? Fe : je, n = s != this.pY, i = Math.abs(e.deltaY))), e.direction = o, n && i > t.threshold && o & t.direction
        },
        attrTest: function(e) {
            return K.prototype.attrTest.call(this, e) && (this.state & at ||!(this.state & at) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = G(e.direction);
            t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
        }
    }), c(J, K, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [tt]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & at)
        },
        emit: function(e) {
            if (this._super.emit.call(this, e), 1 !== e.scale) {
                var t = e.scale < 1 ? "in": "out";
                this.manager.emit(this.options.event + t, e)
            }
        }
    }), c(ee, Y, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Je]
        },
        process: function(e) {
            var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold, a = e.deltaTime > t.time;
            if (this._input = e, !i ||!n || e.eventType & (_e | Ee)&&!a)
                this.reset();
            else if (e.eventType & $e)
                this.reset(), this._timer = o(function() {
                    this.state = lt, this.tryEmit()
                }, t.time, this);
            else if (e.eventType & _e)
                return lt;
            return ut
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === lt && (e && e.eventType & _e ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = he(), this.manager.emit(this.options.event, this._input)))
        }
    }), c(te, K, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [tt]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & at)
        }
    }), c(ne, K, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Pe | Ie,
            pointers: 1
        },
        getTouchAction: function() {
            return Q.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (Pe | Ie) ? t = e.velocity : n & Pe ? t = e.velocityX : n & Ie && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && pe(t) > this.options.velocity && e.eventType & _e
        },
        emit: function(e) {
            var t = G(e.direction);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), c(ie, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [et]
        },
        process: function(e) {
            var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold, a = e.deltaTime < t.time;
            if (this.reset(), e.eventType & $e && 0 === this.count)
                return this.failTimeout();
            if (i && a && n) {
                if (e.eventType != _e)
                    return this.failTimeout();
                var s = this.pTime ? e.timeStamp - this.pTime < t.interval: !0, r=!this.pCenter || I(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp, this.pCenter = e.center, r && s ? this.count += 1 : this.count = 1, this._input = e;
                var l = this.count%t.taps;
                if (0 === l)
                    return this.hasRequireFailures() ? (this._timer = o(function() {
                        this.state = lt, this.tryEmit()
                    }, t.interval, this), at) : lt
            }
            return ut
        },
        failTimeout: function() {
            return this._timer = o(function() {
                this.state = ut
            }, this.options.interval, this), ut
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == lt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), oe.VERSION = "2.0.4", oe.defaults = {
        domEvents: !1,
        touchAction: Qe,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[te, {
            enable: !1
        }
        ], [J, {
            enable: !1
        }, ["rotate"]], [ne, {
            direction: Pe
        }
        ], [Q, {
            direction: Pe
        }, ["swipe"]], [ie], [ie, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [ee]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var dt = 1, pt = 2;
    ae.prototype = {
        set: function(e) {
            return r(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        },
        stop: function(e) {
            this.session.stopped = e ? pt : dt
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers, o = t.curRecognizer;
                (!o || o && o.state & lt) && (o = t.curRecognizer = null);
                for (var a = 0; a < i.length;)
                    n = i[a], t.stopped === pt || o && n != o&&!n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (at | st | rt) && (o = t.curRecognizer = n), a++
            }
        },
        get: function(e) {
            if (e instanceof Y)
                return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e)
                    return t[n];
            return null
        },
        add: function(e) {
            if (a(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        },
        remove: function(e) {
            if (a(e, "remove", this))
                return this;
            var t = this.recognizers;
            return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
        },
        on: function(e, t) {
            var n = this.handlers;
            return s(v(e), function(e) {
                n[e] = n[e] || [], n[e].push(t)
            }), this
        },
        off: function(e, t) {
            var n = this.handlers;
            return s(v(e), function(e) {
                t ? n[e].splice(y(n[e], t), 1) : delete n[e]
            }), this
        },
        emit: function(e, t) {
            this.options.domEvents && re(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e, t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;)
                    n[i](t), i++
            }
        },
        destroy: function() {
            this.element && se(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, r(oe, {
        INPUT_START: $e,
        INPUT_MOVE: Te,
        INPUT_END: _e,
        INPUT_CANCEL: Ee,
        STATE_POSSIBLE: ot,
        STATE_BEGAN: at,
        STATE_CHANGED: st,
        STATE_ENDED: rt,
        STATE_RECOGNIZED: lt,
        STATE_CANCELLED: ct,
        STATE_FAILED: ut,
        DIRECTION_NONE: Se,
        DIRECTION_LEFT: Ae,
        DIRECTION_RIGHT: De,
        DIRECTION_UP: Fe,
        DIRECTION_DOWN: je,
        DIRECTION_HORIZONTAL: Pe,
        DIRECTION_VERTICAL: Ie,
        DIRECTION_ALL: qe,
        Manager: ae,
        Input: $,
        TouchAction: U,
        TouchInput: H,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: W,
        SingleTouchInput: z,
        Recognizer: Y,
        AttrRecognizer: K,
        Tap: ie,
        Pan: Q,
        Swipe: ne,
        Pinch: J,
        Rotate: te,
        Press: ee,
        on: h,
        off: f,
        each: s,
        merge: l,
        extend: r,
        inherit: c,
        bindFn: u,
        prefixed: x
    }), typeof define == ue && define.amd ? define("hammerjs", [], function() {
        return oe
    }) : "undefined" != typeof module && module.exports ? module.exports = oe : e[n] = oe
}(window, document, "Hammer"), define("module/canvas", ["require", "jquery"], function(e) {
    var t = e("jquery");
    return {
        params: {},
        functions: {
            buildCanvas: function(e, n, i) {
                var o = t("<canvas />"), a = o.get(0), s = a.getContext("2d");
                return e && (o.attr({
                    width: e,
                    height: n
                }), i && (a.style.width = "100%", a.style.height = "100%")), {
                    $element: o,
                    canvas: a,
                    context: s
                }
            },
            resizeCanvas: function() {
                var e = this.canvas.clientWidth, t = this.canvas.clientHeight;
                0 != e && this.canvas.width != e && (this.canvas.width = e, this.canvas.height = t)
            },
            getCanvasImageData: function(e) {
                return this.context.drawImage(e, 0, 0), this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }
}), define("module/draw", ["require", "jquery", "module/canvas"], function(e) {
    var t = (e("jquery"), e("module/canvas")), n = {
        params: {},
        functions: {
            drawDiagonalLines: function(e) {
                t.functions.resizeCanvas.call(this), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), e && (this.context.beginPath(), this.context.strokeStyle = "#" + e, this.context.moveTo(0, 0), this.context.lineTo(this.canvas.width, this.canvas.height), this.context.moveTo(this.canvas.width, 0), this.context.lineTo(0, this.canvas.height), this.context.stroke())
            },
            drawText: function(e) {
                var t = e.text ? e.text: "Your Text Here";
                n.functions.styleText.call(this, e);
                var i = this.context.measureText(t).width, o = n.functions.getTextHeight(e, t, Math.ceil(i));
                return this.$element.attr({
                    width: i,
                    height: o
                }), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), n.functions.styleText.call(this, e), this.context.fillText(t, 0, 0), this.$element
            },
            styleText: function(e, t) {
                this.context.font = e.font_size + "px Arial", this.context.textBaseline = "hanging", t || (this.context.fillStyle = "#" + e.font_color)
            },
            getTextHeight: function(e, i, o) {
                var a = e.font_size, s = t.functions.buildCanvas(o, a);
                n.functions.styleText.call(s, e, !0), s.context.fillStyle = "#ffffff", s.context.fillRect(0, 0, o, a), s.context.fillStyle = "#000000", s.context.fillText(i, 0, 0);
                for (var r = s.context.getImageData(0, 0, o, a).data, l=!1, c = a; !l && c;) {
                    for (var u = o; u >= 0; u--) {
                        var d = 4 * (c * o - u);
                        if (255 != r[d - 4]) {
                            l = c;
                            break
                        }
                    }
                    c--
                }
                return l
            }
        }
    };
    return n
}), define("plugin/draggable", ["require", "jquery", "module/calculate", "hammerjs"], function(e) {
    var t = e("jquery"), n = e("module/calculate"), i = e("hammerjs");
    !function(e, t) {
        function o(e, t, n) {
            t ? e.append(l) : l.detach(), n ? e.append(r) : r.detach()
        }
        var a = 0, s = 0, r = e("<div />").addClass("line line-horizontal"), l = e("<div />").addClass("line line-vertical");
        e.fn.draggable = function(t, c, u, d) {
            return this.each(function() {
                var p = this, h = e(p).addClass("draggable"), f = d ? d.get(0): p, m = e(f);
                p.settings = e.extend({}, e.fn.draggable.defaults, t, p.settings), p.settings.mc || (p.settings.mc = new i.Manager(f)), p.settings.mc.add(new i.Tap({
                    threshold: 2,
                    pointers: 1
                })), p.settings.mc.add(new i.Pan({
                    threshold: 0,
                    pointers: 0
                })).recognizeWith(p.settings.mc.get("tap")), m.on("mousedown", function(e) {
                    e.stopPropagation(), e.preventDefault()
                }), p.settings.mc.on("tap", function(t) {
                    e.isFunction(p.settings.onClick) && p.settings.onClick.call(p)
                }), p.settings.mc.on("panstart", function(e) {
                    var t = c.functions.getData.call(c);
                    return !h.is(".draggable") || p.settings.isTransforming?!1 : (a = t.position.left_center, s = t.position.top_center, void p.settings.onDragStart.call(p))
                }), p.settings.mc.on("panmove", function(e) {
                    var t = c.functions.getData.call(c);
                    return !h.is(".draggable") || p.settings.isTransforming?!1 : (t.position.left = a - t.position.width / 2 + e.deltaX, t.position.top = s - t.position.height / 2 + e.deltaY, u && (t.position.left = t.position.left < t.position.container.left ? t.position.container.left : t.position.left, t.position.left = t.position.left + t.position.width > t.position.container.left + t.position.container.width ? t.position.container.left + t.position.container.width - t.position.width : t.position.left, t.position.top = t.position.top < t.position.container.top ? t.position.container.top : t.position.top, t.position.top = t.position.top + t.position.height > t.position.container.top + t.position.container.height ? t.position.container.top + t.position.container.height - t.position.height : t.position.top), t.position.align_left = t.position.left + t.position.width / 2 <= t.position.container.left + t.position.container.width / 2 ? 1 : 0, t.position.align_top = t.position.top + t.position.height / 2 <= t.position.container.top + t.position.container.height / 2 ? 1 : 0, p.settings.snapsToCenter && (n.checkPositionSnap(t.position, p.settings.snapSensitivity), o(u, t.position.horizontal_snap, t.position.vertical_snap)), t.position.x = t.position.align_left ? Math.round(t.position.left - t.position.container.left) : Math.round(t.position.container.left + t.position.container.width - (t.position.left + t.position.width)), t.position.y = t.position.align_top ? Math.round(t.position.top - t.position.container.top) : Math.round(t.position.container.top + t.position.container.height - (t.position.top + t.position.height)), t.position.left_percent = (t.position.left - t.position.container.left) / t.position.container.width, t.position.top_percent = (t.position.top - t.position.container.top) / t.position.container.height, void p.settings.onDrag.call(p))
                }), p.settings.mc.on("panend", function(e) {
                    var t = c.functions.getData.call(c);
                    return h.is(".draggable") ? (t.position.left_center = t.position.left + t.position.width / 2, t.position.top_center = t.position.top + t.position.height / 2, r.detach(), l.detach(), void p.settings.onDragEnd.call(p)) : !1
                })
            })
        }, e.fn.draggable.defaults = {
            snapsToCenter: !0,
            snapSensitivity: 10,
            onClick: function() {},
            onDragStart: function() {},
            onDrag: function() {},
            onDragEnd: function() {}
        }
    }(t)
}), define("plugin/resizable", ["require", "jquery", "module/calculate", "module/popover", "hammerjs"], function(e) {
    var t = e("jquery"), n = e("module/calculate"), i = (e("module/popover"), e("hammerjs"));
    !function(e, t) {
        function o(t) {
            var n = this, i = n.functions.getData.call(n);
            e(t).addClass("resizing"), i.position.width_start = e(t).width(), i.position.height_start = e(t).height(), i.position.ratio = i.position.width_start / i.position.height_start
        }
        function a(e, t, i) {
            var o = this, a = o.functions.getData.call(o), s = a.position.container.width;
            a.position.width_original = t.scale ? a.position.width_start * t.scale : a.position.width_start + t.gesture.deltaX, a.position.height_original = t.scale ? a.position.height_start * t.scale : a.position.height_start + t.gesture.deltaY, a.position.width_original = i && a.position.width_original > s ? s : a.position.width_original, a.position.width_original = a.position.width_original < e.settings.minResizeWidth ? e.settings.minResizeWidth : a.position.width_original, a.position.width_percent = a.position.width_original / a.position.container.width, a.position.height_percent = a.position.height_original / a.position.container.height, e.settings.isProportional && (a.position.height_original = a.position.width_original / a.position.ratio, a.position.height_percent = a.position.height_original / a.position.container.height), n.updateBoundaryDimensions(a.position), a.position.left = a.position.align_left ? a.position.left : a.position.container.left + a.position.container.width - a.position.width - a.position.x, a.position.top = a.position.align_top ? a.position.top : a.position.container.top + a.position.container.height - a.position.height - a.position.y, e.settings.snapsToCenter && (a.position.horizontal_snap || a.position.vertical_snap) && n.adjustPositionSnapped(a.position), a.position.left_center = a.position.left + a.position.width / 2, a.position.top_center = a.position.top + a.position.height / 2
        }
        e.fn.resizable = function(t, n, s) {
            return this.each(function() {
                var r = this, l = e("<div />").addClass("rs").append("<i class='fa fa-expand fa-flip-horizontal'></i>"), c = e(r).addClass("resizable").append(l);
                r.settings = e.extend({}, e.fn.resizable.defaults, t, r.settings), r.settings.mc || (r.settings.mc = new i.Manager(r)), r.settings.mc.get("pan") && r.settings.mc.add(new i.Pinch({
                    threshold: 0
                })).recognizeWith([r.settings.mc.get("tap"), r.settings.mc.get("pan")]), l.on("mousedown", function(e) {
                    e.stopPropagation(), c.addClass("resizing")
                }), l.hammer().bind("panstart", function(e) {
                    o.call(n, r), r.settings.onResizeStart.call(r)
                }), l.hammer().bind("panmove", function(e) {
                    a.call(n, r, e, s), r.settings.onResize.call(r)
                }), l.hammer().bind("panend", function(e) {
                    c.removeClass("resizing"), r.settings.onResizeEnd.call(r)
                }), r.settings.mc.on("pinchstart", function(e) {
                    r.settings.isTransforming=!0, o.call(n, r), r.settings.onResizeStart.call(r)
                }), r.settings.mc.on("pinchmove", function(e) {
                    a.call(n, r, e, s), r.settings.onResize.call(r)
                }), r.settings.mc.on("pinchend", function(e) {
                    r.settings.isTransforming=!1, c.removeClass("resizing"), r.settings.onResizeEnd.call(r)
                }), l.on("mouseup", function(e) {
                    c.removeClass("resizing")
                }), l.data("hammer").get("pan").set({
                    threshold: 1
                })
            })
        }, e.fn.resizable.defaults = {
            minResizeWidth: 25,
            isProportional: !0,
            autoHeight: !0,
            onResizeStart: function() {},
            onResize: function() {},
            onResizeEnd: function() {}
        }
    }(t)
}), function(e) {
    "function" == typeof define && define.amd ? define("jquery.hammer", ["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function(e, t) {
    function n(n, i) {
        var o = e(n);
        o.data("hammer") || o.data("hammer", new t(o[0], i))
    }
    e.fn.hammer = function(e) {
        return this.each(function() {
            n(this, e)
        })
    }, t.Manager.prototype.emit = function(t) {
        return function(n, i) {
            t.call(this, n, i), e(this.element).trigger({
                type: n,
                gesture: i
            })
        }
    }(t.Manager.prototype.emit)
}), define("plugin/rotatable", ["require", "jquery", "jquery.hammer", "module/keyboard", "module/calculate", "hammerjs"], function(e) {
    var t = e("jquery"), n = (e("jquery.hammer"), e("module/keyboard")), i = e("module/calculate"), o = e("hammerjs");
    !function(e, t) {
        function a(t, n) {
            var i = this, o = i.functions.getData.call(i);
            if (e(t).addClass("rotating"), l = o.position.rotation * Math.PI / 180, n.rotation)
                c = n.rotation * Math.PI / 180;
            else {
                var a = n.gesture.center.x - o.position.left_center, s = n.gesture.center.y - o.position.top_center;
                c = Math.atan2(s, a)
            }
        }
        function s(e, t) {
            var o = this, a = o.functions.getData.call(o), s = 0;
            if (t.rotation)
                s = t.rotation * Math.PI / 180;
            else {
                var r = t.gesture.center.x - a.position.left_center, u = t.gesture.center.y - a.position.top_center;
                s = Math.atan2(u, r)
            }
            var d = s - c + l, p = Math.floor(d / (Math.PI / 180));
            p = n.params.isShiftPressed ? 10 * Math.ceil(p / 10) : p, a.position.rotation = 0 > p ? 360 + p : p > 360 ? p - 360 : p, i.updateBoundaryDimensions(a.position)
        }
        function r(t) {
            var n = this, i = e(t), o = n.functions.getData.call(n);
            i.removeClass("rotating"), i.is(".tile") && (o.position.left_center = o.position.align_left ? o.position.container.left + o.position.x + o.position.width / 2 : o.position.container.left + o.position.container.width - (o.position.x + o.position.width / 2), o.position.top_center = o.position.align_top ? o.position.container.top + o.position.y + o.position.height / 2 : o.position.container.top + o.position.container.height - (o.position.y + o.position.height / 2)), o.position.left = o.position.left_center - o.position.width / 2, o.position.top = o.position.top_center - o.position.height / 2, o.position.x = o.position.align_left ? Math.round(o.position.left - o.position.container.left) : Math.round(o.position.container.left + o.position.container.width - (o.position.left + o.position.width)), o.position.y = o.position.align_top ? Math.round(o.position.top - o.position.container.top) : Math.round(o.position.container.top + o.position.container.height - (o.position.top + o.position.height))
        }
        var l = 0, c = 0;
        e.fn.rotatable = function(t, n) {
            return this.each(function() {
                var i = this, l = e("<div />").addClass("rt").append("<i class='fa fa-undo fa-flip-horizontal'></i>"), c = e(i).addClass("rotatable").append(l);
                i.settings = e.extend({}, e.fn.rotatable.defaults, t, i.settings), i.settings.mc || (i.settings.mc = new o.Manager(i)), i.settings.mc.get("pinch") && i.settings.mc.add(new o.Rotate({
                    threshold: 0
                })).recognizeWith([i.settings.mc.get("tap"), i.settings.mc.get("pan"), i.settings.mc.get("pinch")]), l.on("mousedown", function(e) {
                    e.stopPropagation(), c.addClass("rotating")
                }), l.hammer().bind("panstart", function(e) {
                    a.call(n, i, e), i.settings.onRotateStart.call(i)
                }), l.hammer().bind("panmove", function(e) {
                    s.call(n, i, e), i.settings.onRotate.call(i)
                }), l.hammer().bind("panend", function(e) {
                    r.call(n, i), i.settings.onRotateEnd.call(i)
                }), i.settings.mc.on("rotatestart", function(e) {
                    i.settings.isTransforming=!0, a.call(n, i, e), i.settings.onRotateStart.call(i)
                }), i.settings.mc.on("rotatemove", function(e) {
                    s.call(n, i, e), i.settings.onRotate.call(i)
                }), i.settings.mc.on("rotateend", function(e) {
                    i.settings.isTransforming=!1, r.call(n, i), i.settings.onRotateEnd.call(i)
                }), l.on("mouseup", function(e) {
                    c.removeClass("rotating")
                }), l.data("hammer").get("pan").set({
                    threshold: 1
                })
            })
        }, e.fn.rotatable.defaults = {
            onRotateStart: function() {},
            onRotate: function() {},
            onRotateEnd: function() {},
            onMobileRotateStart: function() {},
            onMobileRotate: function() {},
            onMobileRotateEnd: function() {}
        }
    }(t)
}), define("module/effect/watermark", ["require", "jquery", "module/ajax", "page/include/mainframe", "module/browser", "module/confirm", "module/dropzone", "module/calculate", "module/canvas", "module/draw", "plugin/draggable", "plugin/resizable", "plugin/rotatable"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), o = (e("page/include/mainframe"), e("module/browser")), a = e("module/confirm"), s = e("module/dropzone"), r = e("module/calculate"), l = e("module/canvas"), c = e("module/draw");
    e("plugin/draggable"), e("plugin/resizable"), e("plugin/rotatable");
    return {
        buildComponent: function(e, n) {
            var i = this, a = e.functions.getData.call(e);
            t.extend(i.params, {
                selected: !1,
                request: null,
                template: !1,
                scale: !0,
                clicked: !1,
                canvas_watermark: l.functions.buildCanvas()
            }), i.elements.subelements = {
                $img: t("<img />").attr("src", a.path),
                $tile: t("<div />").addClass("effect").append(t("<img />").attr("src", a.path))
            }, i.elements.$tiles = t("<div />").addClass("tiles").addClass("hidden"), i.elements.$component.on("mousedown", function() {
                i.params.clicked=!0
            }), i.elements.$component.hammer().on("tap", function(t) {
                t.stopPropagation(), t.gesture && t.gesture.srcEvent.stopPropagation(), i.params.clicked=!1, i.functions.selectComponent.call(i, e, !0)
            }), n.elements.$stagewrap.hammer().on("tap", function(t) {
                i.params.clicked || i.functions.unselectComponent.call(i, e), i.params.clicked=!1
            }), i.elements.$component.draggable({
                onDrag: function() {
                    var t = e.functions.getData.call(e);
                    i.functions.adjustPosition.call(e, {
                        left: t.position.left,
                        top: t.position.top
                    })
                },
                onDragEnd: function() {
                    i.params.modified=!0
                }
            }, e, e.elements.$stage, i.elements.subelements.$img), i.elements.$component.resizable({
                onResize: function() {
                    var t = e.functions.getData.call(e);
                    i.functions.adjustPosition.call(e, {
                        width_percent: t.position.width_percent
                    })
                },
                onResizeEnd: function() {
                    var t = e.functions.getData.call(e), n = t.position.width_original / t.position.width_start, i = {};
                    n && t.font_size && (i.font_size = Math.ceil(n * t.font_size)), n && t.image_scale && (i.image_scale = Math.min(n * t.image_scale, 100)), e.functions.updateParams.call(e, i)
                }
            }, e, e.elements.$stage, i.elements.subelements.$img), i.elements.$component.rotatable({
                onRotate: function() {
                    var t = e.functions.getData.call(e);
                    i.functions.adjustPosition.call(e, {
                        rotation: t.position.rotation
                    })
                },
                onRotateEnd: function() {
                    i.params.modified=!0
                }
            }, e), t(document).on("mouseup", function(e) {
                var i = t(e.target), a = n.params.effect;
                o.isTouch() ||!a || "text" != a.params.name.toLowerCase() || i.is("input") || i.is("textarea") || a.elements.$keyboard.focus()
            }), i.elements.subelements.$img.on("load", function() {
                i.functions.onWatermarkLoad.call(i, e)
            }).data({
                id: e.params.name.toLowerCase()
            }), "text" == e.params.name.toLowerCase() && (i.elements.$component.addClass("selected empty"), e.elements.$keyboard.on("keyup", function(n) {
                var o = n.which || n.keyCode, a = [13, 27, 37, 39];
                - 1 === t.inArray(o, a) ? i.functions.updateText.call(e, {
                    text: e.elements.$keyboard.val()
                }) : 13 == o && e.elements.$keyboard.blur()
            })), i.elements.$component.addClass(e.params.name.toLowerCase()).append(i.elements.subelements.$img).css({
                left: a.position.x,
                top: a.position.y
            }), "text" == e.params.name.toLowerCase() ? i.functions.initFontDropzone.call(e) : i.functions.initLogoDropzone.call(e, n)
        },
        selectComponent: function(e, t) {
            if (this.params.selected || e.params.dropzone.isOverlayVisible || (this.elements.$component.addClass("selected"), this.params.selected=!0), !o.isTouch() || t) {
                var n = e.elements.$keyboard.val();
                e.elements.$keyboard.focus().val("").val(n)
            }
        },
        unselectComponent: function(e) {
            this.params.selected && (this.elements.$component.removeClass("selected"), this.params.selected=!1), o.isTouch() && e.elements.$keyboard.blur()
        },
        updateComponent: function(e, n) {
            var i = this, o = i.component, a = e ? e: i.functions.getData.call(i);
            (n || e && e.watermark_template_used_id) && (o.elements.$component.css({
                visibility: "hidden"
            }), o.elements.$tiles.hide(), i.elements.$keyboard.focus().val("").val(a.text));
            var s = [{
                "function": "adjustPosition",
                filters: ["position"]
            }, {
                "function": "updateImage",
                filters: ["text", "font_color", "background_color", "stroke_color", "stroke_size", "font_size", "font_id", "watermark_file_id", "background_opacity", "image_scale"]
            }, {
                "function": "insertSymbol",
                filters: ["symbol"]
            }, {
                "function": "generateLines",
                filters: ["lines_opacity", "lines_color"]
            }, {
                "function": "switchMultiplicity",
                filters: ["multiplicity"]
            }, {
                "function": "generateTiles",
                filters: ["tile_spacing"]
            }, {
                "function": "adjustOpacity",
                filters: ["opacity"]
            }
            ];
            t.each(s, function() {
                var e = this;
                t.each(e.filters, function() {
                    var t = "adjustPosition" == e["function"] ? a.position: a;
                    return this in a ? (o.functions[e["function"]].call(i, t), !1) : void 0
                })
            }), o.functions.selectComponent.call(o, i), o.params.modified=!0
        },
        onWatermarkLoad: function(e) {
            var t = this;
            t.elements.$component.css({
                visibility: "visible"
            }), t.elements.$tiles.show(), t.elements.subelements.$img.width("auto").height("auto").parent().width("auto").height("auto"), t.elements.$tiles && t.elements.$tiles.find("img").width("auto").height("auto").parent().width("auto").height("auto"), t.functions.adjustPosition.call(e)
        },
        adjustPosition: function(e, n) {
            var i = this.functions.getData.call(this), o = i.position;
            e && t.extend(o, e), e && void 0 == e.container || r.updateBoundaryBox.call(this), e && void 0 === e.rotation || this.elements.$stage.find(".effect").css({
                transform: "rotate(" + o.rotation + "deg)",
                "-moz-transform": "rotate(" + o.rotation + "deg)",
                "-webkit-transform": "rotate(" + o.rotation + "deg)",
                "-o-transform": "rotate(" + o.rotation + "deg)",
                "-ms-transform": "rotate(" + o.rotation + "deg)"
            }), (!e || e.left || e.width_percent || "tiled" == i.multiplicity) && this.component.elements.$component.offset({
                left: o.left,
                top: o.top
            }), e && e.width_percent && (this.elements.$stage.find(".effect").css({
                width: 100 * o.width_percent + "%",
                height: 100 * o.height_percent + "%"
            }), this.elements.$stage.find(".effect > img").css({
                width: "100%"
            })), "tiled" != i.multiplicity || n || this.component.functions.generateTiles.call(this)
        },
        adjustOpacity: function(e) {
            this.elements.$stage.find(".effect > img").css({
                opacity: e.opacity / 100,
                "-moz-opacity": e.opacity / 100
            })
        },
        updateImage: function(e) {
            var n = this, i = n.component, o = n.functions.getData.call(n), a = Math.floor(1e5 * Math.random() + 1e4);
            i.params.request && i.params.request.abort();
            var s = window.pageVars.site_url + "watermark/" + n.params.name.toLowerCase() + "?batch_id=" + n.params.batch_id + "&" + t.param(o);
            i.params.request = t.get(s, null, function(e) {
                var t = i.params.template ? .8: 1, s = i.functions.adjustScale.call(n, e.width, e.height, t);
                i.params.scale != s ? n.functions.updateParams.call(n, {
                    image_scale: o.image_scale * s,
                    font_size: Math.ceil(o.font_size * s)
                }) : (o.path = e.path ? e.path + "?" + a : n.params["default"].path, i.elements.subelements.$img.attr("src", o.path)), i.params.scale = s, i.params.template=!1
            }, !1, function() {
                i.params.request = null
            })
        },
        adjustScale: function(e, t, n) {
            var i = this, o = 1, a = i.elements.$stage.width(), s = i.elements.$stage.height(), r = e / a, l = t / s;
            return r > l ? e >= a * n && (o = a * n / e) : t >= s * n && (o = s * n / t), o
        },
        updateText: function(e) {
            var t = this, n = t.component;
            "" == e.text ? n.elements.$component.addClass("empty") : n.elements.$component.removeClass("empty"), t.functions.updateParams.call(t, e)
        },
        insertSymbol: function(e) {
            var t = this, n = t.functions.getData.call(t);
            if (e.symbol) {
                var i = n.text += String.fromCharCode(e.symbol);
                t.elements.$keyboard.val(i), delete n.symbol, t.component.functions.updateText.call(t, {
                    text: i
                })
            }
        },
        switchMultiplicity: function(e) {
            var t = this, n = t.functions.getData.call(t), i = t.component, o = "text" == t.params.name.toLowerCase() ? t.tools[5]: t.tools[2], a = "tiled" == n.multiplicity ? 1: 0;
            "tiled" == n.multiplicity ? (i.elements.$tiles.html("").removeClass("hidden"), i.functions.generateTiles.call(t), i.elements.$component.addClass("tile").removeClass("draggable")) : (i.elements.$tiles.html("").detach(), i.elements.$component.removeClass("tile").addClass("draggable")), o.elements.$i.removeClass(o.params.options[1 - a].icon).addClass(o.params.options[a].icon), o.elements.$span.html(o.params.options[a].text)
        },
        generateTiles: function() {
            var e = this, n = e.component, o = e.functions.getData.call(e), a = o.position;
            if ("tiled" == o.multiplicity) {
                n.functions.adjustPosition.call(e, {
                    x: Math.round(o.tile_spacing / 2),
                    y: Math.round(o.tile_spacing / 2),
                    left: a.container.left + o.tile_spacing / 2,
                    top: a.container.top + o.tile_spacing / 2,
                    left_center: a.container.left + o.tile_spacing / 2 + a.width / 2,
                    top_center: a.container.top + o.tile_spacing / 2 + a.height / 2,
                    horizontal_snap: 0,
                    vertical_snap: 0,
                    align_left: 1,
                    align_top: 1
                }, !0);
                var s = Math.ceil(a.container.width / (a.width + o.tile_spacing)), r = Math.ceil(a.container.height / (a.height + o.tile_spacing)), l = s * r, c = n.elements.$tiles.children().length, u = c - l, d = 1, p = 0;
                for (i = 0; i < u; i++)
                    n.elements.$tiles.find("div:eq(" + (c - 1 - i) + ")").remove();
                for (i = c; i < l; i++)
                    n.elements.$tiles.append(n.functions.cloneComponent.call(n));
                n.elements.$tiles.find("img").attr("src", o.path), n.elements.$tiles.children().each(function() {
                    0 != d && d%s == 0 && (p++, d = 0), n.functions.setTilePosition.call(o, t(this), d, p), d++
                }), e.elements.$stage.append(n.elements.$tiles)
            }
        },
        cloneComponent: function() {
            var e = this.elements.$component.clone().css({
                visibility: "visible"
            }), t = this.elements.subelements.$img.clone();
            return e.html("").append(t)
        },
        setTilePosition: function(e, t, n) {
            var i = this.position, o = this.tile_spacing / 2 + t * (i.width + this.tile_spacing) + (i.width - i.width_original) / 2, a = this.tile_spacing / 2 + n * (i.height + this.tile_spacing) + (i.height - i.height_original) / 2;
            e.css({
                left: o,
                top: a
            })
        },
        generateLines: function() {
            var e = this, t = e.component, n = e.functions.getData.call(e);
            t.elements.$lines || (t.params.canvas_lines = l.functions.buildCanvas(e.elements.$stage.width(), e.elements.$stage.height(), !0), t.elements.$lines = t.params.canvas_lines.$element, e.elements.$stage.append(t.elements.$lines)), t.elements.$lines.css({
                opacity: n.lines_opacity / 100
            }), c.functions.drawDiagonalLines.call(t.params.canvas_lines, n.lines_color)
        },
        showLogoImportOverlay: function(e) {
            var t = this, n = e.functions.getData.call(e);
            n.disabled=!1, e.params.dropzone.isOverlayVisible=!0, t.functions.toggleComponent.call(e), t.elements.$dropzone.show()
        },
        hideLogoImportOverlay: function(e, t) {
            var n = this;
            e.functions.getData.call(e);
            e.params.empty ? t.functions.closeEffect() : (e.params.dropzone.isOverlayVisible=!1, n.elements.$dropzone.hide(), n.functions.selectComponent.call(n, e))
        },
        saveAsTemplate: function(e, i) {
            var o = this, s = o.params.effect, r = s.functions.getData.call(s), l = s.component.elements.subelements.$img.clone(), c = t("<div />").html(l).addClass("wm"), u = t("<div><div>Would you like to <b>save this watermark as a template</b> for later use?</div></div>").append(c);
            0 == r.watermark_template_used_id ? a.functions.showConfirm({
                message: u,
                accept: {
                    text: "Save <span class='hidden-xs'>As Template</span>",
                    type: "primary"
                },
                reject: {
                    text: "Skip",
                    type: "default"
                },
                onAccept: function() {
                    var t = {
                        effect_id: e
                    };
                    n.post("watermarkTemplate", t, function(e) {
                        var t = o.params.effects[2], n = t.attributes[0];
                        n.params.listIsBuilt ? n.functions.appendTemplate.call(n, t, o, e.watermarkTemplate, !0) : n.params.data.unshift(e.watermarkTemplate)
                    }, !1, function() {
                        a.functions.hideConfirm(), i()
                    })
                },
                onReject: function() {
                    return i(), !0
                }
            }) : i()
        },
        onAttach: function(e) {
            var t = this;
            e.functions.getData.call(e);
            e.params.reset && ("text" == e.params.name.toLowerCase() ? e.elements.$keyboard.val("").focus() : e.params.empty && (t.functions.unselectComponent.call(t, e), t.functions.showLogoImportOverlay.call(t, e)), e.functions.updateParams.call(e, e.params["default"], !0), e.params.reset=!1)
        },
        onDetach: function(e) {
            e.elements.$keyboard.blur()
        },
        deleteEmptyOrders: function() {
            var e = this;
            t.each(e.params.data, function(t) {
                this.watermark_file_id || delete e.params.data[t]
            })
        },
        initFontDropzone: function() {
            var e = this, n = t.extend({}, e.params.dropzone, {
                onBuild: function(n) {
                    var i = e.component;
                    i.elements.$dropzone = t('<div class="upload" id="upload-text" style="display:none;"></div>'), e.elements.$stage.append(i.elements.$dropzone), i.elements.$dropzone.dropzone(n)
                },
                onSuccess: function(t, n) {
                    var i = e.tools[0].attributes[0], o = i.functions.appendFont.call(i, e, n.font, !0);
                    i.functions.selectFont.call(i, e, o)
                }
            });
            s.functions.initDropzone(n)
        },
        initLogoDropzone: function(e) {
            var n = this, i = t.extend({}, n.params.dropzone, {
                onBuild: function(i) {
                    var o = n.component;
                    n.params.dropzone.isOverlayVisible = n.params.empty, o.elements.$dropzone = t('<div class="upload" id="upload-image" style="' + (n.params.empty ? "" : "display:none") + '"><i class="fa fa-close"></i><div><a class="btn btn-success" id="btn-logo-import"> <i class="fa fa-fw fa-image-add"></i> <span>Import Logo</span></a></div></div>'), n.elements.$stage.append(o.elements.$dropzone), o.elements.$dropzone.dropzone(i), o.elements.$dropzone.find("i").on("click", function() {
                        o.functions.hideLogoImportOverlay.call(o, n, e)
                    })
                },
                onSending: function(e) {
                    e.append("previewWidth", n.elements.$stage.width()), e.append("previewHeight", n.elements.$stage.height())
                },
                onSuccess: function(t, i) {
                    var o = n.component;
                    n.params.empty=!1, n.functions.updateParams.call(n, i), o.functions.deleteEmptyOrders.call(n), o.functions.hideLogoImportOverlay.call(o, n, e), o.functions.toggleComponent.call(n), o.functions.selectComponent.call(o, n), n.functions.toggleTools.call(n)
                }
            });
            s.functions.initDropzone(i)
        }
    }
}), define("plugin/croppable", ["require", "jquery", "module/calculate", "hammerjs"], function(e) {
    var t = e("jquery");
    e("module/calculate"), e("hammerjs");
    !function(e, t) {
        var n = 0, i = 0;
        e.fn.croppable = function(t, o) {
            return this.each(function() {
                var a = this, s = e(a).addClass("croppable");
                a.settings = e.extend({}, e.fn.croppable.defaults, t, a.settings), a.settings.knobs = ["top", "right", "bottom", "left"];
                for (var r = 0; 4 > r; r++) {
                    var l = r%2 == 1 ? "-v fa-rotate-90": "-v", c = e('<div class="rs ' + a.settings.knobs[r] + '"><i class="fa fa-arrows' + l + '"></i></div>').data({
                        knob: a.settings.knobs[r]
                    });
                    c.on("mousedown", function(e) {
                        e.stopPropagation()
                    }), c.hammer().bind("panstart", function(t) {
                        var r = o.functions.getData.call(o);
                        s.addClass("cropping"), a.settings.knobBeingDragged = e(this).data("knob"), r.position.width_start = r.position.width, r.position.height_start = r.position.height, n = r.position.left, i = r.position.top, a.settings.onCropStart.call(a)
                    }), c.hammer().bind("panmove", function(e) {
                        var t=!1, s=!0, r = "left" == a.settings.knobBeingDragged || "top" == a.settings.knobBeingDragged?-1 : 1, l = o.functions.getData.call(o), c = l.position, u = c.width, d = c.height, p = c.left, h = c.top;
                        if ("left" == a.settings.knobBeingDragged || "right" == a.settings.knobBeingDragged) {
                            var f = r * e.gesture.deltaX, m =- 1 == r ? n - c.container.left + c.width_start : c.container.width - (c.left - c.container.left), g = n + c.width_start - a.settings.minWidth;
                            p =- 1 == r ? n - f : n, u = c.width_start + f, s=!(c.left < c.container.left), p = p < c.container.left ? c.container.left : p, p = p > g ? g : p, u = u > m ||!s ? m : u, u = u < a.settings.minWidth ? a.settings.minWidth : u, c.width = c.width_original = u, c.width_percent = c.width / c.container.width, c.left = p, c.left_center = c.left + c.width / 2, c.x = c.align_left ? Math.round(c.left - c.container.left) : Math.round(c.container.left + c.container.width - (c.left + c.width)), c.left_percent = (c.left - l.position.container.left) / c.container.width, t=!0
                        }
                        if ("top" == a.settings.knobBeingDragged || "bottom" == a.settings.knobBeingDragged) {
                            var v = r * e.gesture.deltaY, y =- 1 == r ? i - c.container.top + c.height_start : c.container.height - (c.top - c.container.top), b = i + c.height_start - a.settings.minHeight;
                            h =- 1 == r ? i - v : i, d = c.height_start + v, s=!(c.top < c.container.top), h = h < c.container.top ? c.container.top : h, h = h > b ? b : h, d = d > y ||!s ? y : d, d = d < a.settings.minHeight ? a.settings.minHeight : d, c.height = c.height_original = d, c.height_percent = c.height / c.container.height, c.top = h, c.top_center = c.top + c.height / 2, c.y = c.align_top ? Math.round(c.top - c.container.top) : Math.round(c.container.top + c.container.height - (c.top + c.height)), c.top_percent = (c.top - l.position.container.top) / c.container.height, t=!0
                        }
                        t && a.settings.onCrop.call(a)
                    }), c.hammer().bind("panend", function(e) {
                        s.removeClass("cropping"), a.settings.onCropEnd.call(a)
                    }), c.data("hammer").get("pan").set({
                        threshold: 1
                    }), s.append(c)
                }
            })
        }, e.fn.croppable.defaults = {
            minWidth: 50,
            minHeight: 50,
            onCropStart: function() {},
            onCrop: function() {},
            onCropEnd: function() {}
        }
    }(t)
}), define("module/effect/crop", ["require", "jquery", "module/batch", "module/calculate", "plugin/croppable"], function(e) {
    var t = e("jquery"), n = e("module/batch"), i = e("module/calculate");
    e("plugin/croppable");
    return {
        buildComponent: function(e, n) {
            var i = this, o = e.functions.getData.call(e), a = n.elements.$preview.data();
            i.elements.$dims = t('<span class="dims">' + a.width + " x " + a.height + "</span>"), i.elements.subelements = {
                $dims: t('<span class="dims"></span>')
            }, i.elements.$component.append(i.elements.subelements.$dims), i.elements.$component.croppable({
                onCrop: function() {
                    var t = e.functions.getData.call(e);
                    i.functions.adjustPosition.call(e, {
                        width_percent: t.position.width_percent,
                        height_percent: t.position.height_percent
                    })
                },
                onCropEnd: function() {
                    i.params.modified=!0
                }
            }, e), i.elements.$component.draggable({
                snapsToCenter: !1,
                onDrag: function() {
                    var t = e.functions.getData.call(e);
                    i.functions.adjustPosition.call(e, {
                        left: t.position.left,
                        top: t.position.top
                    })
                },
                onDragEnd: function() {
                    i.params.modified=!0
                }
            }, e, e.elements.$stage), i.elements.$component.addClass(e.params.name.toLowerCase()).css({
                left: Math.round(e.params["default"].position.left_percent * e.elements.$stage.width()),
                top: Math.round(e.params["default"].position.top_percent * e.elements.$stage.height()),
                width: 100 * o.position.width_percent + "%",
                height: 100 * o.position.height_percent + "%"
            })
        },
        adjustPosition: function(e) {
            var o = this, a = o.functions.getData.call(o), s = a.position, r = n.functions.getDimensions.call(n);
            e && t.extend(s, e), e && void 0 == e.container || i.updateBoundaryBox.call(this, !0), (!e || e.width_percent || e.height_percent || e.left || e.top) && (this.component.elements.$component.css({
                width: 100 * s.width_percent + "%",
                height: 100 * s.height_percent + "%"
            }), this.component.elements.$component.offset({
                left: s.left,
                top: s.top
            }), this.component.elements.$component.css({
                "background-image": "url(" + o.elements.$preview.attr("src") + ")",
                "background-position": - 1 * (s.left - s.container.left) + "px " +- 1 * (s.top - s.container.top) + "px",
                "background-size": s.container.width + "px auto"
            }), this.component.elements.$dims.html(r.original.width + " x " + r.original.height), this.component.elements.subelements.$dims.html(Math.round(s.width_percent * r.original.width) + " x " + Math.round(s.height_percent * r.original.height)))
        }
    }
}), define("module/effect/resize", ["require", "jquery", "module/batch", "module/calculate", "plugin/resizable"], function(e) {
    var t = e("jquery"), n = e("module/batch"), i = e("module/calculate");
    e("plugin/resizable");
    return {
        buildComponent: function(e, n) {
            var i = this, o = e.functions.getData.call(e), a = n.elements.$preview.data();
            i.elements.$dims = t('<span class="dims">' + a.width + " x " + a.height + "</span>"), i.elements.subelements = {
                $dims: t('<span class="dims"></span>')
            }, i.elements.$component.append(i.elements.subelements.$dims), i.elements.$component.resizable({
                onResize: function() {
                    var t = e.functions.getData.call(e);
                    i.functions.adjustPosition.call(e, {
                        width_percent: t.position.width_percent
                    })
                },
                onResizeEnd: function() {
                    i.params.modified=!0
                }
            }, e, e.elements.$stage), i.elements.$component.addClass(e.params.name.toLowerCase()).css({
                width: 100 * o.position.width_percent + "%",
                height: 100 * o.position.height_percent + "%"
            })
        },
        adjustPosition: function(e) {
            var o = this, a = o.functions.getData.call(o), s = a.position, r = n.functions.getDimensions.call(n);
            e && t.extend(s, e), e && void 0 == e.container || i.updateBoundaryBox.call(this, !0), (!e || e.width_percent || e.height_percent) && (this.component.elements.$component.css({
                width: 100 * s.width_percent + "%",
                height: 100 * s.height_percent + "%"
            }), this.component.elements.$component.css({
                "background-image": "url(" + o.elements.$preview.attr("src") + ")",
                "background-size": "100%"
            }), this.component.elements.$dims.html(r.original.width + " x " + r.original.height), this.component.elements.subelements.$dims.html(Math.round(s.width_percent * r.original.width) + " x " + Math.round(s.height_percent * r.original.height)))
        }
    }
}), define("module/effect/rotate", ["require", "jquery", "module/calculate", "module/browser"], function(e) {
    var t = e("jquery"), n = e("module/calculate"), i = e("module/browser");
    return {
        buildComponent: function(e, t) {
            var n = this, i = e.functions.getData.call(e);
            n.elements.$component.bind("webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend", function(t) {
                n.functions.adjustPosition.call(e), n.elements.$component.addClass("notransition")
            }), n.elements.$component.addClass("mask notransition").addClass(e.params.name.toLowerCase()).css({
                left: i.position.x,
                top: i.position.y,
                width: 100 * i.position.width_percent + "%",
                height: 100 * i.position.height_percent + "%"
            })
        },
        performAction: function(e) {
            var t = this, n = t.component, i = t.functions.getData.call(t), o = i.position;
            n.params.modified=!0, o.rotation = "rotate-right" == e ? o.rotation + 90 : o.rotation, o.rotation = "rotate-left" == e ? o.rotation - 90 : o.rotation, n.elements.$component.removeClass("notransition"), n.functions.updateComponent.call(t, {
                rotation: o.rotation
            })
        },
        adjustApplyDisablePosition: function() {
            if (!i.isMobileScreen()) {
                var e = this.component, t = e.elements.$apply.outerWidth() + 1, n = e.elements.$apply.position().left, o = e.elements.$apply.offset().left, a = e.elements.$component.offset().left - t, s = o - a;
                n = e.elements.$apply.position().left - s, e.elements.$apply.css({
                    left: n
                }), e.elements.$hide.css({
                    left: n
                })
            }
        },
        adjustPosition: function(e) {
            var i = this, o = i.functions.getData.call(i), a = o.position;
            e && t.extend(a, e), e && void 0 == e.container || n.updateBoundaryBox.call(this, !0), a.rotation_scale = Math.abs(a.rotation - 90)%180 == 0 ? i.elements.$preview.height() / i.elements.$preview.width() : 1, e && void 0 === e.rotation || (i.component.elements.$component.css({
                "background-image": "url(" + i.elements.$preview.attr("src") + ")",
                "background-size": "100%"
            }), i.component.elements.$component.css({
                "-webkit-transform": "rotate(" + a.rotation + "deg) scale(" + a.rotation_scale + ")",
                "-moz-transform": "rotate(" + a.rotation + "deg) scale(" + a.rotation_scale + ")",
                "-ms-transform": "rotate(" + a.rotation + "deg) scale(" + a.rotation_scale + ")",
                "-o-transform": "rotate(" + a.rotation + "deg) scale(" + a.rotation_scale + ")",
                transform: "rotate(" + a.rotation + "deg) scale(" + a.rotation_scale + ")"
            })), i.component.functions.adjustApplyDisablePosition.call(i)
        }
    }
}), define("module/effect/flip", ["require", "jquery", "module/browser", "module/calculate"], function(e) {
    var t = e("jquery"), n = e("module/browser"), i = e("module/calculate");
    return {
        buildComponent: function(e, t) {
            var n = this, i = e.functions.getData.call(e);
            n.elements.$component.bind("webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend", function(e) {
                n.elements.$component.addClass("notransition")
            }), n.elements.$component.addClass("mask notransition").addClass(e.params.name.toLowerCase()).css({
                left: i.position.x,
                top: i.position.y,
                width: 100 * i.position.width_percent + "%",
                height: 100 * i.position.height_percent + "%"
            })
        },
        performAction: function(e) {
            var t = this, n = t.component, i = t.functions.getData.call(t), o = i.position;
            n.params.modified=!0, o.flip_horizontal = "flip-horizontal" == e ? 1 - o.flip_horizontal : o.flip_horizontal, o.flip_vertical = "flip-vertical" == e ? 1 - o.flip_vertical : o.flip_vertical, n.elements.$component.removeClass("notransition"), n.functions.updateComponent.call(t, {
                flip_horizontal: o.flip_horizontal,
                flip_vertical: o.flip_vertical
            })
        },
        adjustPosition: function(e) {
            var o = this, a = o.functions.getData.call(o), s = a.position;
            if (e && t.extend(s, e), e && void 0 == e.container || i.updateBoundaryBox.call(this, !0), !e || void 0 !== e.flip_horizontal || void 0 !== e.flip_vertical) {
                var r = s.flip_vertical ? 180: 0, l = s.flip_horizontal ? 180: 0;
                this.component.elements.$component.css({
                    "background-image": "url(" + o.elements.$preview.attr("src") + ")",
                    "background-size": "100%"
                }), n.supportsTransitions() && this.component.elements.$component.css({
                    "-webkit-transform": "rotateX(" + r + "deg) rotateY(" + l + "deg)",
                    "-moz-transform": "rotateX(" + r + "deg) rotateY(" + l + "deg)",
                    "-ms-transform": "rotateX(" + r + "deg) rotateY(" + l + "deg)",
                    "-o-transform": "rotateX(" + r + "deg) rotateY(" + l + "deg)",
                    transform: "rotateX(" + r + "deg) rotateY(" + l + "deg)"
                })
            }
        }
    }
}), define("module/filter", ["require", "jquery"], function(e) {
    var t = (e("jquery"), {
        params: {},
        functions: {
            grayscale: function(e, t) {
                for (var n = 0; n < e.length; n += 4)
                    e[n + 0] = e[n + 1] = e[n + 2] = (e[n] + e[n + 1] + e[n + 2]) / 3
            },
            exposure: function(e, t) {
                for (var n = t.brightness / 100 * 255, i = t.contrast / 100 * 255, o = 255 * (i + 255) / (255 * (255 - i)), a = 0; a < e.length; a += 4)
                    e[a] = o * (e[a] - 128) + 128, e[a + 1] = o * (e[a + 1] - 128) + 128, e[a + 2] = o * (e[a + 2] - 128) + 128;
                for (var a = 0; a < e.length; a += 4)
                    e[a] += n, e[a + 1] += n, e[a + 2] += n
            },
            sepia: function(e, t) {
                for (var n = 0; n < e.length; n += 4) {
                    var i = e[n], o = e[n + 1], a = e[n + 2];
                    e[n] = .393 * i + .769 * o + .189 * a, e[n + 1] = .349 * i + .686 * o + .168 * a, e[n + 2] = .272 * i + .534 * o + .131 * a
                }
            }
        }
    });
    return t
}), define("module/effect/modify", ["require", "jquery", "module/browser", "module/batch", "module/canvas", "module/filter"], function(e) {
    var t = e("jquery"), n = e("module/browser"), i = e("module/batch"), o = e("module/canvas"), a = e("module/filter");
    return {
        buildComponent: function(e, n) {
            var i = this;
            e.functions.getData.call(e);
            i.elements.subelements.$mask = t("<img />").on("load", function() {
                i.functions.onMaskLoad.call(i, e)
            }), i.elements.subelements.$mask.on("dragstart", function(e) {
                e.preventDefault()
            }), i.elements.$loader = t('<span class="mask-loader"><i class="fa fa-fw fa-spinner fa-spin"></i> Generating ' + e.params.name + " ..</span>"), i.elements.$component.addClass("mask").addClass(e.params.name.toLowerCase()).append(i.elements.subelements.$mask)
        },
        updateComponent: function(e, s) {
            var r = this, l = r.component;
            if (s && (l.elements.$component.css({
                visibility: "hidden"
            }), l.elements.$loader.show()), l.params.modified=!0, !n.supportsCanvas() || r.params.server) {
                var c = r.functions.getData.call(r);
                c.disabled || r.functions.runEffect.call(r, l.params.editor, {
                    onSuccess: function(e) {
                        i.params.isExecuting=!1, i.params.effect_id_newest = e.effect_id_newest, !t.isEmptyObject(e.batch_files) && i.functions.updateBatchParams.call(i, l.params.editor, e), l.elements.subelements.$mask.attr({
                            src: i.functions.getImagePath.call(i, "preview", i.params.order, !0)
                        })
                    }
                })
            } else {
                var u = new Image;
                u.crossOrigin = "anonymous", u.src = r.elements.$preview.attr("src"), u.onload = function() {
                    var e = o.functions.buildCanvas(u.width, u.height, !0), t = o.functions.getCanvasImageData.call(e, u);
                    a.functions[r.params.name.toLowerCase()].call(e, t.data, r.functions.getData.call(r)), e.context.putImageData(t, 0, 0), l.elements.subelements.$mask.attr({
                        src: e.canvas.toDataURL()
                    })
                }
            }
            this.component.functions.adjustPosition.call(this, e)
        },
        onMaskLoad: function(e) {
            var t = this;
            t.elements.$component.css({
                visibility: "visible"
            }), t.elements.$loader.hide()
        },
        onAttach: function(e) {
            e.component.functions.updateComponent.call(e, null, !0)
        }
    }
}), define("module/component", ["require", "jquery", "hammerjs", "module/Class", "module/batch", "module/browser", "module/popover", "module/effect/watermark", "module/effect/crop", "module/effect/resize", "module/effect/rotate", "module/effect/flip", "module/effect/modify"], function(e) {
    var t = e("jquery"), n = (e("hammerjs"), e("module/Class")), i = e("module/batch"), o = e("module/browser"), a = e("module/popover"), s = e("module/effect/watermark"), r = e("module/effect/crop"), l = e("module/effect/resize"), c = e("module/effect/rotate"), u = e("module/effect/flip"), d = e("module/effect/modify");
    return n.extend({
        init: function(e, n) {
            var s = this;
            e.component = s, s.params = {
                editor: n,
                name: e.params.name.toLowerCase(),
                confirm: !0,
                modified: !1,
                stagemousedown: !1
            }, s.functions = {
                buildComponent: function() {},
                attachElements: function(n) {
                    n.addClass(e.params.name.toLowerCase() + "-stage " + (e.params.mask ? "mask-stage " : "") + "active"), t.each(s.elements, function() {
                        n.prepend(this)
                    }), s.functions.selectComponent.call(s, e), s.functions.onAttach.call(s, e)
                },
                detachElements: function(n) {
                    s.functions.onDetach.call(s, e), n.removeClass(e.params.name.toLowerCase() + "-stage mask-stage active"), t.each(s.elements, function() {
                        t(this).detach()
                    }), s.functions.unselectComponent.call(s, e)
                },
                buildApplyAndHideButtons: function(e, n, s) {
                    var r = this;
                    r.elements.subelements.$hide = t("<button />").attr({
                        "data-toggle": "popover",
                        "data-trigger": "hover",
                        "data-html": !0,
                        "data-placement": "left",
                        "data-content": "Disable " + (e.params.text ? e.params.text : e.params.name)
                    }).addClass("btn btn-danger").html('<i class="fa fa-discard"></i>'), r.elements.subelements.$applyicon = t('<i class="fa fa-check"></i>'), r.elements.subelements.$apply = t("<button />").attr({
                        "data-toggle": "popover",
                        "data-trigger": "hover",
                        "data-html": !0,
                        "data-placement": "left",
                        "data-content": "Apply " + (e.params.text ? e.params.text : e.params.name)
                    }).addClass("btn btn-success"), r.elements.subelements.$apply.append(r.elements.subelements.$applyicon), r.elements.subelements.$hide.on("click", function() {
                        r.functions.toggleComponent.call(e, 1, !0)
                    }), r.elements.subelements.$apply.on("click", function() {
                        n.params.isApplyingOnly=!0, r.elements.subelements.$apply.attr({
                            disabled: !0
                        }), r.elements.subelements.$applyicon.addClass("fa-spin fa-spinner").removeClass("fa-check"), e.functions.runEffect.call(e, n, {
                            apply: 1,
                            onComplete: function(e) {
                                r.elements.subelements.$apply.attr({
                                    disabled: !1
                                }), r.elements.subelements.$applyicon.removeClass("fa-spin fa-spinner").addClass("fa-check")
                            }
                        })
                    }), o.isMobileScreen() || (a.set(r.elements.subelements.$apply), a.set(r.elements.subelements.$hide)), r.elements.subelements.$hide.on("mousedown", function(e) {
                        e.stopPropagation()
                    }), r.elements.subelements.$apply.on("mousedown", function(e) {
                        e.stopPropagation(), t(this).popover("hide")
                    }), s ? (r.elements.$hide = r.elements.subelements.$hide, r.elements.$apply = r.elements.subelements.$apply) : (r.elements.$component.append(r.elements.subelements.$apply), i.params.batch.file_count > 1 && r.elements.$component.append(r.elements.subelements.$hide))
                },
                buildDisabledStage: function(e) {
                    var n = this;
                    n.elements.subelements.$text = t('<div class="ds-text"><b>' + (e.params.text ? e.params.text : e.params.name) + " is disabled on this photo</b>. This photo will not be modified. </div>"), n.elements.subelements.$enable = t('<div class="ds-buttons"><button class="btn btn-success">' + (e.params.icon ? '<i class="fa fa-fw fa-' + e.params.icon + '"></i>' : "") + " Enable " + (e.params.text ? e.params.text : e.params.name) + "</button></div>"), n.elements.subelements.$enable.on("click", function() {
                        n.functions.toggleComponent.call(e, 0, !0)
                    }), n.elements.$component_disabled.append(n.elements.subelements.$text).append(n.elements.subelements.$enable)
                },
                selectComponent: function() {},
                unselectComponent: function() {},
                updateComponent: function(e, t) {
                    this.component.functions.adjustPosition.call(this, e)
                },
                adjustPosition: function(e, t) {},
                resetComponent: function() {},
                toggleComponent: function(e, n) {
                    var o = this, a = o.functions.getData.call(o), s = o.component;
                    a.disabled = void 0 !== e ? e : a.disabled, a.disabled ? (s.elements.$component.hide(), s.elements.$component_disabled.show(), s.elements.$tiles && s.elements.$tiles.show(), o.params.mask && (s.elements.$hide.hide(), s.elements.$apply.hide()), - 1 == t.inArray(i.params.order + "", o.params.list) && o.params.list.push(i.params.order + ""), o.params.list.length == Object.keys(o.params.data).length && o.elements.$finish.attr({
                        disabled: !0
                    })) : (s.elements.$component.show(), s.elements.$component_disabled.hide(), s.elements.$tiles && s.elements.$tiles.show(), o.params.mask && (i.params.batch.file_count > 1 && s.elements.$hide.show(), s.elements.$apply.show()), o.params.list = jQuery.grep(o.params.list, function(e) {
                        return e != i.params.order
                    }), !o.params.empty && o.elements.$finish.attr({
                        disabled: !1
                    }), n && o.component.functions.updateComponent.call(o), s.functions.selectComponent.call(s, o))
                },
                saveAsTemplate: function(e, t) {
                    t()
                },
                onResize: function() {
                    this.component.functions.adjustPosition.call(this)
                },
                onAttach: function(e) {
                    e.component.functions.updateComponent.call(e)
                },
                onDetach: function() {}
            }, s.elements = {
                $component: t("<div />").addClass("effect"),
                $component_disabled: t("<div />").addClass("ds"),
                subelements: {}
            }, s.extendModuleFunctions(e.params.name.toLowerCase()), s.functions.buildComponent.call(s, e, n), s.functions.buildDisabledStage.call(s, e), s.functions.buildApplyAndHideButtons.call(s, e, n, e.params.mask)
        },
        extendModuleFunctions: function(e) {
            var n = null;
            n = "text" == e || "image" == e ? s : "crop" == e ? r : "resize" == e ? l : "rotate" == e ? c : "flip" == e ? u : d, t.extend(this.functions, n)
        }
    })
}), define("module/button/effect", ["require", "jquery", "module/ajax", "module/modal", "module/confirm", "module/batch", "module/bar", "module/calculate", "module/component"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("module/modal"), o = e("module/confirm"), a = e("module/batch"), s = e("module/bar"), r = e("module/calculate"), l = e("module/component");
    return {
        onButtonClick: function() {
            var e = this;
            e.elements.$li.click(function() {
                e.functions.clickCallback.call(e)
            })
        },
        onButtonClickCallback: function(e) {
            this.functions.clickCallback = e
        },
        attachTools: function(e) {
            var n = this, i = s.functions.setButtonSide(s.functions.getNextSide());
            n.tools && t.each(n.tools, function() {
                this.functions.buildButton.call(this, n, e), this.functions.attachButton(i), s.functions.pushOpenTool.call(this)
            })
        },
        detachAllTools: function() {
            var e = s.functions.getToolsAndReset();
            t.each(e, function() {
                this.functions.detachButton()
            })
        },
        toggleTools: function() {
            var e = this;
            t.each(this.tools, function() {
                this.elements.$btn.attr({
                    disabled: e.params.empty
                })
            })
        },
        attachComponent: function(e) {
            !this.component && new l(this, e), this.component && this.component.functions.attachElements(this.elements.$stage), r.updateBoundaryBox.call(this)
        },
        detachComponent: function() {
            this.component && this.component.functions.detachElements(this.elements.$stage)
        },
        updateParams: function(e, n, i) {
            n && (this.params.data = {}, this.params.data[a.params.order] = e), t.extend(!0, this.params.data[a.params.order], e), !i && this.component.functions.updateComponent.call(this, e, n)
        },
        formatParams: function() {
            var e = this, n = {};
            return t.each(e.params.data, function(i, o) {
                var a = t.extend({}, this), s = {};
                a.disabled || (delete a.position, delete a.disabled, this.position && e.params["default"].position && t.each(this.position, function(t, n) {
                    t in e.params["default"].position && (s[t] = n)
                }), n[i] = t.extend(a, s))
            }), n
        },
        confirmWhiteOrBlackList: function(e, n) {
            var i = this, o = [], s = {
                isWhiteList: n ? 1: 0,
                order_primary: a.params.order
            };
            s.isWhiteList && (t.grep(Object.keys(i.params.data), function(e) {
                - 1 == t.inArray(e, i.params.list) && o.push(e)
            }), s.list = o.join(","), s.order_primary = o[0]), e(s)
        },
        confirmHowToApply: function(e, t) {
            var n = this, i = n.functions.getData.call(n), s = Object.keys(n.params.data).length;
            if (!e.apply || 1 == a.params.batch.file_count || s == a.params.batch.file_count || i.disabled)
                n.functions.confirmWhiteOrBlackList.call(n, t, 1 == i.disabled);
            else {
                var r = null, l = null, c = null, u = a.params.batch.file_count - s, d = "text" == n.params.name.toLowerCase() || "image" == n.params.name.toLowerCase() ? "watermark": n.params.name.toLowerCase();
                1 == s ? (r = "Would you like to <b>apply the " + d + " to all photos</b> or this photo only?", l = "Apply To All", c = "This Photo Only") : s > 1 && (r = '<b class="text-danger">' + u + " photo" + (1 != u ? "s were" : " was") + " not modified!</b> Would you like to <b>copy over your " + d + " settings</b> to those photos as well?", l = "Copy Over", c = "Leave Those Unmodified"), o.functions.showConfirm({
                    message: r,
                    accept: {
                        text: l,
                        type: "primary"
                    },
                    reject: {
                        text: c,
                        type: "default"
                    },
                    onAccept: function() {
                        t()
                    },
                    onReject: function() {
                        n.functions.confirmWhiteOrBlackList.call(n, t, !0)
                    }
                })
            }
        },
        runEffect: function(e, s) {
            var r = this, l = r.functions.formatParams.call(r), c = r.params.list.length > 0 ? r.params.list.join(","): "", u = {
                action: "sample",
                apply: s.apply ? 1: 0,
                batch_width: e.params.batch ? e.params.batch.params.position.width: 0,
                available_width: e.params.position.width - e.params.position.padding,
                available_height: Math.round(e.params.position.height - e.params.position.padding - e.params.position.top - e.params.position.bottom - e.params.batch.params.position.height),
                isWhiteList: r.params.isWhiteList,
                list: c,
                order_primary: a.params.order,
                effect_id: a.params.effect_id,
                effect_type: r.params.type ? r.params.type: r.params.name,
                effect_data: l
            };
            r.functions.confirmHowToApply.call(r, u, function(l) {
                l && t.extend(u, l), n.post("batch/" + r.params.batch_id + "/job/sample", t.param(u), function(t) {
                    t.restricted && "use_premium_font" == t.type ? (o.functions.hideConfirm(), i.functions.showModal(t.type, !0, !1, {
                        name: t.name
                    }), r.elements.$tools.attr({
                        disabled: !1
                    })) : (s.onSuccess && s.onSuccess(t), a.functions.setBatchEffectIdsTo.call(a, t.effect_id_newest, "0" == t.apply), s.apply && r.functions.afterEffectApplied.call(r, e, t, s.finish))
                }, function(t) {
                    s.onError && s.onError(t), o.functions.hideConfirm(), e.functions.closeEffect()
                }, function(e) {
                    s.onComplete && s.onComplete(e)
                })
            })
        },
        afterEffectApplied: function(e, t, n, i) {
            var s = e.params.effect, r = s.component;
            a.functions.updateBatchParams.call(a, e, t), r.functions.saveAsTemplate.call(e, a.params.effect_id, function() {
                e.params.isApplyingOnly && (o.functions.hideConfirm(), e.functions.closeEffect(!0), a.functions.switchIteration.call(a, e)), e.params.isApplyingOnly=!1, s.functions.resetEffectParams.call(s), n && a.functions.finishEditing(), i && i.call(e)
            })
        },
        resetEffectParams: function() {
            this.params.list = [], this.params.isWhiteList = 0, this.params.data = {}, this.params.order_primary = null, void 0 !== this.params.empty && (this.params.empty=!0, this.functions.toggleTools.call(this))
        },
        getData: function() {
            return this.params.data[a.params.order] || (this.params.data[a.params.order] = this.params.data[a.params.order_previous] ? t.extend(!0, {}, this.params.data[a.params.order_previous]) : t.extend(!0, {}, this.params["default"])), this.params.data[a.params.order]
        }
    }
}), define("module/button/dropdown", ["require", "jquery", "module/client", "module/list"], function(e) {
    var t = e("jquery"), n = e("module/client"), i = e("module/list");
    return {
        buildButton: function(e, o) {
            var a = this;
            return a.elements.$dropdown?!1 : (a.elements.$dropdown = t('<ul class="dropdown-menu"></ul>'), a.elements.$li.addClass("dropdown"), a.elements.$btn.attr({
                "data-toggle": "dropdown"
            }).addClass("dropdown-toggle").dropdown().after(a.elements.$dropdown), a.elements.$li.on("show.bs.dropdown", function(e) {}), a.elements.$li.on("shown.bs.dropdown", function() {
                a.functions.onOpen && a.functions.onOpen.call(a, e, o)
            }), a.elements.$li.on("hide.bs.dropdown", function(e) {
                return o.params.position.width > n.intScreenSmallWidth.val && t(e.target).is(".list-slide") ? (i.functions.slideOut(), !1) : !t(this).is(".keep-open")
            }), void a.elements.$li.on("hidden.bs.dropdown", function() {
                a.functions.onClose && a.functions.onClose.call(a, e)
            }))
        }
    }
}), define("module/button/tool", ["require", "jquery", "module/browser", "module/popover", "module/button/dropdown"], function(e) {
    var t = e("jquery"), n = e("module/browser"), i = e("module/popover"), o = e("module/button/dropdown"), a = {
        onOpen: function(e, o) {
            var a = this;
            e.functions.setOpenTool.call(e, a), a.elements.$dropdown.is(":empty") ? (t.each(a.attributes, function() {
                var t = this;
                t.functions.buildAttribute.call(t, e, o), t.functions.attachAttribute.call(a), t.functions.onOpen.call(t, e)
            }), !n.isMobileScreen() && i.init()) : t.each(a.attributes, function() {
                this.functions.onOpen.call(this, e)
            }), a.functions.setHeaderTextIcon.call(e, !0)
        },
        onClose: function(e) {
            var n = this;
            n.functions.setHeaderTextIcon.call(e), e.functions.setOpenTool.call(e, !1), t.each(n.attributes, function() {
                this.functions.onClose.call(this, e)
            })
        },
        setHeaderTextIcon: function(e) {
            if (!this.params.open)
                return !1;
            var t = this.params.open, n = e ? t: this, i = t.elements.$li.parents(".navbar-collapse").next().find("button");
            e ? t.elements.$li.parent().addClass("active") : t.elements.$li.parent().removeClass("active"), i.find("span").html(n.elements.$span.html()).end().find("i#brand-icon").attr({
                "class": n.elements.$i.attr("class")
            })
        }
    };
    return t.extend(a, o)
}), define("module/button/action", ["require", "jquery"], function(e) {
    e("jquery");
    return {
        buildButton: function(e) {
            var t = this;
            t.elements.$btn.off("click").on("click", function() {
                e.component.functions.performAction.call(e, t.params.action)
            })
        }
    }
}), define("module/button", ["require", "jquery", "module/Class", "module/batch", "module/button/effect", "module/button/dropdown", "module/button/tool", "module/button/action"], function(e) {
    var t = e("jquery"), n = e("module/Class"), i = (e("module/batch"), e("module/button/effect")), o = e("module/button/dropdown"), a = e("module/button/tool"), s = e("module/button/action");
    return n.extend({
        init: function(e) {
            var n = this;
            n.params = {
                type: null,
                name: null,
                text: "",
                icon: "",
                list: [],
                isWhiteList: 0
            }, n.functions = {
                buildButton: function() {},
                attachButton: function(e) {
                    "more" == n.params["class"] ? e.find(".moremenu ul").append(n.elements.$li) : e.append(n.elements.$li)
                },
                detachButton: function() {
                    n.elements.$li.detach()
                },
                setOpenTool: function(e) {
                    this.params.open = e
                },
                onButtonClick: function() {},
                onButtonClickCallback: function(e) {},
                extendParams: function(e) {
                    t.extend(n.params, e)
                },
                extendElements: function(e) {
                    t.each(e, function() {
                        n.elements[this.key] = this.val
                    })
                }
            }, n.tools = null, n.attributes = null, n.extendModuleFunctions(e), n.elements = {}, n.elements.$i = t('<i class="fa fa-fw"></i>'), n.elements.$span = t("<span>" + (n.params.text ? n.params.text : n.params.name) + "</span>"), n.elements.$btn = t('<button class="btn btn-default"></button>').append(n.elements.$i).append(n.elements.$span), n.elements.$li = t("<li />").append(n.elements.$btn), n.params.id && n.elements.$li.attr({
                id: n.params.id
            }), n.params.icon ? n.elements.$i.addClass("fa-" + n.params.icon) : n.elements.$i.remove(), n.params.disabled && n.elements.$btn.attr("disabled", !0), n.params["class"] && n.elements.$li.addClass(n.params["class"]), n.functions.onButtonClick.call(n)
        },
        extendModuleFunctions: function(e) {
            var n = null;
            "effect" == e.params.category ? n = i : "tool" == e.params.category ? n = a : "dropdown" == e.params.category ? n = o : "action" == e.params.category && (n = s), t.extend(!0, this, e), t.extend(this.functions, n)
        }
    })
}), define("module/attribute/color", ["require", "jquery", "hammerjs", "module/popover"], function(e) {
    function t(e) {
        return e && i(n(e)) || {
            hue: - 1,
            saturation: - 1,
            brightness: - 1
        }
    }
    function n(e) {
        return e = parseInt(e.indexOf("#")>-1 ? e.substring(1) : e, 16), {
            red: e>>16,
            green: (65280 & e)>>8,
            blue: 255 & e
        }
    }
    function i(e) {
        var t = {
            hue: 0,
            saturation: 0,
            brightness: 0
        }, n = Math.min(e.red, e.green, e.blue), i = Math.max(e.red, e.green, e.blue), o = i - n;
        return t.brightness = i, t.saturation = 0 != i ? 255 * o / i : 0, 0 != t.saturation ? e.red == i ? t.hue = (e.green - e.blue) / o : e.green == i ? t.hue = 2 + (e.blue - e.red) / o : t.hue = 4 + (e.red - e.green) / o : t.hue =- 1, t.hue*=60, t.hue < 0 && (t.hue += 360), t.saturation*=100 / 255, t.brightness*=100 / 255, t
    }
    var o = e("jquery");
    e("hammerjs"), e("module/popover");
    return {
        buildAttribute: function(e) {
            var n = this, i = e.functions.getData.call(e);
            n.elements.$circle = o("<i />").addClass("fa fa-circle-thin"), n.elements.$bar = o("<div />").addClass("bar"), n.elements.$pick = o("<div />").addClass("pick").append(n.elements.$circle), n.elements.$hue = o("<div />").addClass("hue").append(n.elements.$bar),
            n.elements.$input = o('<input maxlength="7" type="text" class="hex" spellcheck="false" />'), n.elements.$transparent = o("<button />").addClass("transparent").append("<i />").addClass("fa fa-eraser"), n.elements.$wrapper = o("<div />").addClass("wrapper").append(n.elements.$pick).append(n.elements.$hue).append(n.elements.$input).append(n.elements.$transparent);
            var a = {
                key: "",
                value: i[n.params.key] ? i[n.params.key]: "",
                hue: 0,
                saturation: - 1,
                brightness: - 1,
                updatehuebase: !0,
                callback: !0,
                live: !1,
                hidden: !1,
                required: !1,
                text: "no color selected",
                override: !1
            };
            n.params = o.extend(a, n.params), n.params.value && o.extend(n.params, t(n.params.value)), n.params.popover && n.elements.$transparent.attr({
                "data-toggle": "popover",
                "data-trigger": "hover",
                "data-html": !0,
                "data-placement": "top",
                "data-content": n.params.popover
            }), n.params.required && n.elements.$transparent.attr({
                disabled: "disabled"
            }), !n.params.value && n.elements.$input.attr({
                disabled: !0
            }), n.elements.$pick.hammer().bind("tap", function(t) {
                n.functions.setHexBasedOnSB.call(n, e, t)
            }), n.elements.$hue.hammer().bind("tap", function(t) {
                n.functions.setHexBasedOnHue.call(n, e, t)
            }), n.elements.$pick.hammer().bind("panstart", function(t) {
                n.params.callback = n.params.live?!0 : !1, n.functions.setHexBasedOnSB.call(n, e, t)
            }), n.elements.$hue.hammer().bind("panstart", function(t) {
                n.params.callback = n.params.live?!0 : !1, n.functions.setHexBasedOnHue.call(n, e, t)
            }), n.elements.$pick.hammer().bind("panmove", function(t) {
                n.functions.setHexBasedOnSB.call(n, e, t)
            }), n.elements.$hue.hammer().bind("panmove", function(t) {
                n.functions.setHexBasedOnHue.call(n, e, t)
            }), n.elements.$pick.hammer().bind("panend", function(t) {
                n.params.live || (n.params.callback=!0, n.functions.setHexBasedOnSB.call(n, e, t))
            }), n.elements.$hue.hammer().bind("panend", function(t) {
                n.params.live || (n.params.callback=!0, n.functions.setHexBasedOnHue.call(n, e, t))
            }), n.elements.$transparent.hammer().bind("tap", function(t) {
                var i = {};
                n.params.value = "", n.params.updatehuebase=!0, n.elements.$input.attr({
                    disabled: !0
                }), i[n.params.key] = n.params.value, e.functions.updateParams.call(e, i), n.functions.updateAttribute.call(n, e)
            }), n.elements.$input.on("keyup", function(t) {
                var i = o(this).val().replace("#", ""), a = /^[0-9A-F]{6}$/i.test(i);
                if (a && i != n.params.value) {
                    var s = {};
                    n.params.value = i, n.params.updatehuebase=!0, s[n.params.key] = n.params.value, e.functions.updateParams.call(e, s), n.functions.updateAttribute.call(n, e)
                }
            }), n.elements.$pick.data("hammer").get("pan").set({
                threshold: 1
            }), n.elements.$hue.data("hammer").get("pan").set({
                threshold: 1
            }), n.params.hidden && n.elements.$attribute.addClass("hidden"), n.elements.$attribute.addClass("color").append(n.elements.$wrapper)
        },
        calculateColorHex: function(e) {
            var t = this;
            e||-1 != t.params.saturation||-1 != t.params.brightness?-1 == t.params.saturation&&-1 == t.params.brightness && (t.params.saturation = 0, t.params.brightness = 0) : t.params.value = "";
            var n = {}, i = [], a = Math.round(t.params.hue), s = e ? 255: Math.round(255 * t.params.saturation / 100), r = e ? 255: Math.round(255 * t.params.brightness / 100);
            if (0 == s)
                n.red = n.green = n.blue = r;
            else {
                var l = r, c = (255 - s) * r / 255, u = (l - c) * (a%60) / 60;
                360 == a && (a = 0), 60 > a ? (n.red = l, n.blue = c, n.green = c + u) : 120 > a ? (n.green = l, n.blue = c, n.red = l - u) : 180 > a ? (n.green = l, n.red = c, n.blue = c + u) : 240 > a ? (n.blue = l, n.red = c, n.green = l - u) : 300 > a ? (n.blue = l, n.green = c, n.red = c + u) : 360 > a ? (n.red = l, n.green = c, n.blue = l - u) : (n.red = 0, n.green = 0, n.blue = 0)
            }
            return i = [Math.round(n.red).toString(16), Math.round(n.green).toString(16), Math.round(n.blue).toString(16)], o.each(i, function(e, t) {
                1 == t.length && (i[e] = "0" + t)
            }), i.join("")
        },
        setHexBasedOnSB: function(e, t) {
            var n = {};
            this.params.saturation = parseInt(Math.max(0, Math.min(100, (t.gesture.center.x - this.elements.$pick.offset().left) / this.elements.$pick.width() * 100)), 10), this.params.brightness = 100 - parseInt(Math.max(0, Math.min(100, (t.gesture.center.y - this.elements.$pick.offset().top) / this.elements.$pick.height() * 100)), 10), this.params.value = this.functions.calculateColorHex.call(this), n[this.params.key] = this.params.value, e.functions.updateParams.call(e, n, !1, !this.params.callback), this.functions.updateAttribute.call(this, e)
        },
        setHexBasedOnHue: function(e, t) {
            var n = {}, i = this.elements.$hue.height();
            this.params.hue = parseInt(360 * (i - Math.max(0, Math.min(i, t.gesture.center.y - this.elements.$hue.offset().top))) / i, 10), this.params.value = this.functions.calculateColorHex.call(this), this.params.updatehuebase=!0, n[this.params.key] = this.params.value, e.functions.updateParams.call(e, n, !1, !this.params.callback), this.functions.updateAttribute.call(this, e)
        },
        updateAttribute: function(e, n) {
            var i = this;
            i.params.value = i.params.override ? e.functions.getData.call(e)[i.params.key] : i.params.value;
            var o = {}, a = t(i.params.value);
            if (this.params.hue = a.hue, this.params.saturation = a.saturation, this.params.brightness = a.brightness, o[i.params.key] = i.params.value, n || i.params.updatehuebase) {
                i.params.base = i.functions.calculateColorHex.call(i, !0);
                var s = (360 - i.params.hue) / 360 * i.elements.$hue.height() - i.elements.$bar.height() / 2 - 1;
                i.elements.$pick.css({
                    "background-color": "#" + i.params.base
                }), i.elements.$bar.css({
                    top: s
                }), i.params.updatehuebase=!1
            }
            var r = i.params.saturation / 100 * i.elements.$pick.width() - i.elements.$circle.width() / 2, l = i.elements.$pick.height() - i.params.brightness / 100 * i.elements.$pick.height() - i.elements.$circle.width() / 2;
            i.elements.$circle.css({
                left: r,
                top: l
            }), i.elements.$input.val(i.params.value ? "#" + i.params.value : i.params.text), i.params.value && i.elements.$input.attr({
                disabled: !1
            }), o[i.params.key] = i.params.value, n && i.params.update!==!1 && e.functions.updateParams.call(e, o), i.params.override=!0
        }
    }
}), define("module/attribute/toggle", ["require", "jquery"], function(e) {
    var t = e("jquery");
    return {
        buildAttribute: function(e) {
            var n = this, i = e.functions.getData.call(e), o = {
                key: "",
                value: i[n.params.key] ? i[n.params.key]: "",
                text: [],
                icon: "",
                index: 0,
                offset: 0
            };
            n.elements.subelements = [], n.params = t.extend(o, n.params), n.elements.$group = t("<div />").addClass("btn-group").attr({
                "data-toggle": "buttons"
            }), n.params["class"] && n.elements.$group.addClass(n.params["class"]), t.each(n.params.data, function(i) {
                var o = this;
                n.elements.subelements[i] = {}, n.elements.subelements[i].$label = t("<label />").addClass("btn btn-default").css({
                    width: o.width + "%"
                }), n.elements.subelements[i].$input = t("<input />").attr({
                    type: "radio",
                    name: n.params.key
                }).data({
                    value: o.value
                }), n.elements.subelements[i].$text = t("<span />").html(o.text), o.icon && (n.elements.subelements[i].$icon = t("<i />").addClass("fa fa-" + o.icon), n.elements.subelements[i].$label.append(n.elements.subelements[i].$icon)), n.elements.subelements[i].$input.click(function() {
                    (!n.params.highlight ||!o.selected) && n.functions.setToggleState.call(n, e, i)
                }), n.elements.$group.append(n.elements.subelements[i].$label.append(n.elements.subelements[i].$input).append(n.elements.subelements[i].$text))
            }), n.elements.$attribute.addClass("switch").append(n.elements.$group)
        },
        setToggleState: function(e, n) {
            var i = this, o = {};
            i.params.index = n, t.each(i.params.data, function(e) {
                e == i.params.index ? (this.selected=!0, i.params.value = this.value) : this.selected=!1
            }), o[i.params.key] = i.params.value, e.functions.updateParams.call(e, o), i.functions.updateAttribute.call(i, e)
        },
        updateAttribute: function(e, n) {
            var i = this, o = e.functions.getData.call(e);
            t.each(i.params.data, function(e) {
                o[i.params.key] == this.value ? (i.params.index = e, this.selected=!0) : this.selected=!1
            });
            var a = i.params.index - i.params.offset, s = "." + i.params.target + ":eq(" + a + ")";
            i.elements.$group.parent().siblings().addClass("hidden"), a>-1 && i.elements.$group.parent().siblings(s).removeClass("hidden"), t.each(i.params.data, function(e) {
                this.selected ? (i.params.highlight && i.elements.subelements[e].$label.addClass("active"), i.params.value = this.value) : i.params.highlight && i.elements.subelements[e].$label.removeClass("active")
            })
        }
    }
}), define("module/attribute/slider", ["require", "jquery", "jquery.hammer", "module/browser"], function(e) {
    var t = e("jquery");
    e("jquery.hammer"), e("module/browser");
    return {
        buildAttribute: function(e) {
            var n = this, i = e.functions.getData.call(e), o = {
                key: "",
                value: i[n.params.key] ? i[n.params.key]: 100,
                "class": n.params["class"] ? n.params["class"]: "slider",
                title: "",
                min: 0,
                max: 100,
                prefix: "%",
                live: !1,
                hidden: !1,
                callback: !0,
                override: !1
            };
            n.params = t.extend(o, n.params), n.elements.$fill = t("<div />").addClass("fill"), n.elements.$handle = t("<div />").addClass("handle"), n.elements.$count = t("<div />").addClass("count"), n.elements.$bar = t("<div />").addClass("bar").append(n.elements.$fill).append(n.elements.$handle), n.elements.$wrapper = t("<div />").addClass("wrapper").append(n.elements.$bar).append(n.elements.$count), n.params.title && (n.elements.$title = t("<div />").addClass("title").html(n.params.title), n.elements.$wrapper.append(n.elements.$title), n.elements.$attribute.addClass("slider-titled")), n.params.popover && n.elements.$wrapper.attr({
                "data-toggle": "popover",
                "data-trigger": "hover",
                "data-html": !0,
                "data-placement": "top",
                "data-content": n.params.popover
            }), n.elements.$wrapper.hammer().bind("tap", function(t) {
                n.functions.moveSlider.call(n, e, t)
            }), n.elements.$wrapper.hammer().bind("panstart", function(t) {
                n.params.callback = n.params.live&&!e.params.server?!0 : !1, n.elements.$wrapper.addClass("active")
            }), n.elements.$wrapper.hammer().bind("panmove", function(t) {
                n.functions.moveSlider.call(n, e, t)
            }), n.elements.$wrapper.hammer().bind("panend", function(t) {
                n.elements.$wrapper.removeClass("active"), (!n.params.live || e.params.server) && (n.params.callback=!0, n.functions.moveSlider.call(n, e, t))
            }), n.elements.$wrapper.data("hammer").get("pan").set({
                threshold: 1
            }), n.params.hidden && n.elements.$attribute.addClass("hidden"), n.elements.$attribute.addClass(n.params["class"]).append(n.elements.$wrapper)
        },
        moveSlider: function(e, t) {
            var n = this, i = n.params.max - n.params.min, o = n.elements.$bar.width(), a = t.gesture.center.x - n.elements.$bar.offset().left, s = a / o * 100, r = {};
            s = 0 > s ? 0 : s > 100 ? 100 : s, n.params.value = Math.round(n.params.min + i * s / 100), r[n.params.key] = n.params.value, e.functions.updateParams.call(e, r, !1, !n.params.callback), n.functions.updateAttribute.call(n, e)
        },
        updateAttribute: function(e, t) {
            var n = this;
            n.params.value = n.params.override ? e.functions.getData.call(e)[n.params.key] : n.params.value;
            var i = {}, o = (n.params.value - n.params.min) / (n.params.max - n.params.min) * 100;
            i[n.params.key] = n.params.value, n.elements.$handle.css({
                left: o + "%"
            }), n.elements.$fill.css({
                width: o + "%"
            }), n.elements.$count.html(n.params.value + " " + n.params.prefix), t && n.params.update!==!1 && e.functions.updateParams.call(e, i), n.params.override=!0
        }
    }
}), define("module/attribute/font", ["require", "jquery", "module/ajax", "module/confirm", "jquery.hammer", "module/list"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("module/confirm"), o = (e("jquery.hammer"), e("module/list"));
    return {
        buildAttribute: function(e, n) {
            var i = this, a = e.functions.getData.call(e), s = {
                scripts: [{
                    name: "latin",
                    count: 0
                }, {
                    name: "cyrillic",
                    count: 0
                }, {
                    name: "arabic",
                    count: 0
                }, {
                    name: "hebrew",
                    count: 0
                }, {
                    name: "greek",
                    count: 0
                }, {
                    name: "devanagari",
                    count: 0
                }, {
                    name: "telugu",
                    count: 0
                }, {
                    name: "thai",
                    count: 0
                }, {
                    name: "vietnamese",
                    count: 0
                }, {
                    name: "gujarati",
                    count: 0
                }, {
                    name: "khmer",
                    count: 0
                }, {
                    name: "tamil",
                    count: 0
                }
                ]
            }, r = {
                key: "",
                fontHash: "",
                value: a[i.params.key] ? a[i.params.key]: "",
                script: 0,
                rescript: !1,
                listIsBuilt: !1,
                offsetTop: 75
            };
            i.params = t.extend(r, i.params, s), i.elements.$shadow = t("<div class='list-shadow'></div>"), i.elements.$import = t("<span />").append("<i class='fa fa-font-import'>").attr({
                id: "btn-font-import",
                "data-toggle": "popover",
                "data-trigger": "hover",
                "data-html": !0,
                "data-placement": "bottom",
                "data-content": i.params.popover["import"]
            }).on("click", function(e) {
                e.stopPropagation(), t("#dz-fonts").one("click", function(e) {
                    e.stopPropagation()
                }).click()
            }), i.elements.$heading = t("<li class='list-heading'>Fonts</li>").append(i.elements.$import), i.elements.$scriptselect = t("<div>Script: <span>latin</span> ( <b>0</b> )<i class='fa fa-caret-down'></i></div>").on("click", function() {
                i.functions.toggleScripts.call(i, e)
            }), i.elements.$scriptlist = t("<ul class='hidden'></ul>"), i.elements.$imported = t("<ul />"), i.elements.$presets = t("<ul />"), i.elements.$scripts = t("<strong class='fonts-scripts'></strong>").append(i.elements.$scriptselect).append(i.elements.$scriptlist), i.elements.$items = t("<div class='list-items'></div>").append(i.elements.$imported).append(i.elements.$presets), t.each(i.params.data, function() {
                i.functions.appendFont.call(i, e, this)
            }), t.each(i.params.scripts, function(n, o) {
                var a = t("<li />").html(this.name).append("<span>" + this.count + "</span>").on("click", function() {
                    i.functions.toggleScripts.call(i, e, n)
                });
                i.elements.$scriptlist.append(a)
            }), i.elements.$scriptselect.find("b").html(i.params.scripts[0].count), t(document).on("keyup", function(t) {
                if (i.elements.$attribute.is(":visible")) {
                    var n = i.elements.$select.prevAll(":visible:first"), o = i.elements.$select.nextAll(":visible:first"), a = t.which || t.keyCode;
                    38 == a && n.length&&!n.is(".h") ? i.functions.selectFont.call(i, e, n) : 40 == a && o.length && o.is(":visible") && i.functions.selectFont.call(i, e, o)
                }
            }), i.elements.$attribute.addClass(i.params["class"].join(" ")).append(i.elements.$shadow).append(i.elements.$heading).append(i.elements.$scripts).append(i.elements.$items), o.functions.buildList.call(i, function() {
                o.params.isOpen ? i.functions.onOpened.call(i, e) : i.functions.onClosed.call(i, e)
            })
        },
        onOpen: function(e) {
            o.functions.slideIn.call(this, e.params.open)
        },
        onOpened: function(e) {
            e.component.functions.updateComponent.call(e, {
                font_id: null
            })
        },
        onClosed: function(e) {
            e.tools[0].elements.$li.removeClass("open").parent().removeClass("active"), e.functions.setOpenTool.call(e, !1), e.component.functions.updateComponent.call(e, {
                font_id: null
            })
        },
        appendFont: function(e, n, i) {
            var o = this, a = n.isPreset ? o.elements.$presets: o.elements.$imported, s = t("<i />"), r = t("<li />").addClass("font-" + n.hash).data(n).on("click", function(n) {
                o.functions.selectFont.call(o, e, t(this))
            }), l = t("<i />").addClass("fa fa-trash-o").attr({
                "data-toggle": "popover",
                "data-trigger": "hover",
                "data-html": !0,
                "data-placement": "right",
                "data-content": o.params.popover["delete"]
            }).on("click", function(t) {
                t.stopPropagation(), o.functions.deleteFont.call(o, e, r, n)
            });
            return n.id == o.params.value && (o.elements.$select = r.addClass("active")), !window.pageVars.arrUser.canUsePremiumFont && n.premium && s.addClass("fa fa-crown").attr({
                "data-toggle": "popover",
                "data-trigger": "hover",
                "data-html": !0,
                "data-placement": "right",
                "data-content": o.params.popover.premium
            }), n.isPreset ? n.isDeleted || r.append(s) : r.css({
                "background-image": "url('" + n.imagePath + "')"
            }).append(l), (!n.latin && n.isPreset || n.legacy || n.isDeleted) && r.hide(), n.isPreset && t.each(o.params.scripts, function(e) {
                n[this.name] && r.addClass(this.name) && o.params.scripts[e].count++
            }), i ? a.prepend(r) : a.append(r), r
        },
        toggleScripts: function(e, t) {
            var n = this;
            n.elements.$scriptlist.toggleClass("hidden"), void 0 !== t && (n.params.script = t, n.params.rescript=!0, n.functions.updateAttribute.call(n, e))
        },
        selectFont: function(e, t) {
            var n = this, i = t.data();
            n.params.value = i.id, n.params.highlight && (n.elements.$unselect = n.elements.$select, n.elements.$select = t), n.functions.updateAttribute.call(n, e)
        },
        deleteFont: function(e, t, o) {
            var a = this;
            i.functions.showConfirm({
                message: 'Delete the font "' + o.name + '"?',
                accept: {
                    text: "Delete<span class='hidden-xs'> Font</span>",
                    type: "danger"
                },
                onAccept: function() {
                    return n.post("font/" + o.id, {
                        _method: "DELETE"
                    }, function(n) {
                        t.fadeOut();
                        var i = t.parent().next().find(".font-" + a.params.fontHash);
                        a.functions.selectFont.call(a, e, i)
                    }), !0
                }
            })
        },
        updateAttribute: function(e) {
            var t = this, n = {};
            t.params.rescript && (t.elements.$scriptlist.prev().find("span").html(t.params.scripts[t.params.script].name).end().find("b").html(t.params.scripts[t.params.script].count), t.elements.$presets.children().hide().end().find("li." + t.params.scripts[t.params.script].name).show(), t.params.rescript=!1), t.params.highlight && (t.elements.$unselect && t.elements.$unselect.removeClass("active"), t.elements.$select.addClass("active")), n[t.params.key] = t.params.value, e.functions.updateParams.call(e, n)
        }
    }
}), define("module/attribute/template", ["require", "jquery", "module/ajax", "module/confirm", "module/calculate", "jquery.hammer", "module/modal", "module/list"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("module/confirm"), o = e("module/calculate"), a = (e("jquery.hammer"), e("module/modal")), s = e("module/list");
    return {
        buildAttribute: function(e, n) {
            var i = this, o = {
                key: "",
                value: "",
                listIsBuilt: !1,
                offsetTop: 40
            };
            i.params = t.extend(o, i.params), i.elements.$shadow = t("<div class='list-shadow'></div>"), i.elements.$heading = t("<li class='list-heading'>Templates</li>"), i.elements.$saved = t("<ul class='saved'></ul>"), i.elements.$samples = t("<ul class='samples'></ul>"), i.elements.$items = t("<div class='list-items'></div>").append(i.elements.$saved).append(i.elements.$samples), i.elements.$attribute.addClass(i.params["class"].join(" ")).append(i.elements.$shadow).append(i.elements.$heading).append(i.elements.$items), t.each(i.params.data, function() {
                i.functions.appendTemplate.call(i, e, n, this)
            }), s.functions.buildList.call(i, function() {
                s.params.isOpen ? i.functions.onOpened.call(i, e) : i.functions.onClosed.call(i, e, n)
            })
        },
        onOpen: function(e) {
            s.functions.slideIn.call(this, e)
        },
        onOpened: function(e) {},
        onClosed: function(e, t) {
            e.elements.$li.removeClass("open").parent().removeClass("active"), e.functions.setOpenTool.call(e, !1), t.params.effect && o.updateBoundaryBox.call(t.params.effect)
        },
        appendTemplate: function(e, n, i, o) {
            var a = this, s = i.isPreset ? a.elements.$samples: a.elements.$saved, r = t("<div />"), l = t("<div />").append(r), c = t("<li />").addClass("template-" + i.hash).data(i).append(l).on("click", function(i) {
                a.functions.selectTemplate.call(a, e, n, t(this))
            }), u = t("<i />").addClass("fa fa-trash-o").attr({
                "data-toggle": "popover",
                "data-trigger": "hover",
                "data-html": !0,
                "data-placement": "right",
                "data-content": a.params.popover["delete"]
            }).on("click", function(t) {
                t.stopPropagation(), a.functions.deleteTemplate.call(a, e, c, i)
            });
            return i.isPreset || (c.append(u), r.css({
                "background-image": "url('" + i.thumbPath + "')"
            }), i.backgroundColor && c.css({
                "background-color": "#" + i.backgroundColor
            })), o ? s.prepend(c) : s.append(c), c
        },
        formatPositionParams: function(e) {
            var n = {}, i = ["x", "y", "align_left", "align_top", "horizontal_snap", "vertical_snap", "rotation"];
            t.each(e, function(o, a) {
                - 1 !== t.inArray(o, i) && (n[o] = a, delete e[o])
            }), e.position = n
        },
        selectTemplate: function(e, n, i) {
            var o = this, s = i.data(), r = "text" == s.watermark.type ? 0: 1, l = n.params.effects[r], c = l.functions.getData.call(l);
            return o.functions.formatPositionParams(s.watermark), window.pageVars.arrUser.canUseWatermarkTemplate || s.isPreset ? (o.params.value = s.id, s.isPreset ? (delete s.watermark.text, delete s.watermark.multiplicity, delete s.watermark.position) : (t.extend(s.watermark, {
                watermark_template_used_id: s.id
            }), t.extend(c, {
                watermark_template_used_id: s.id
            })), "image" == s.watermark.type && (l.params.empty=!1, l.component && l.component.functions.hideLogoImportOverlay.call(l.component, l, n), l.functions.toggleTools.call(l)), void n.functions.openEffect.call(l, s.watermark)) : (a.functions.showModal("use_watermark_template", !0), !1)
        },
        deleteTemplate: function(e, t, o) {
            i.functions.showConfirm({
                message: "Delete watermark template" + (o.watermark.text ? ' containing text "' + o.watermark.text + '"' : "") + "?",
                accept: {
                    text: "Delete<span class='hidden-xs'> Template</span>",
                    type: "danger"
                },
                onAccept: function() {
                    return n.post("watermarkTemplate/" + o.id, {
                        _method: "DELETE"
                    }, function(e) {
                        t.fadeOut()
                    }), !0
                }
            })
        }
    }
}), define("module/attribute/logo", ["require", "jquery"], function(e) {
    var t = e("jquery");
    return {
        buildAttribute: function(e) {
            var n = this, i = e.component, o = e.functions.getData.call(e), a = {
                key: "",
                path: o.path
            };
            n.params = t.extend(a, n.params), n.elements.$img = t("<img />").attr({
                src: n.params.path
            }), n.elements.$btn = t('<a class="btn btn-info" >Change Logo</a>'), n.elements.$imgdiv = t("<div />").append(n.elements.$img), n.elements.$btndiv = t("<div />").append(n.elements.$btn), n.elements.$btn.on("click", function() {
                i.functions.adjustPosition.call(e), i.functions.showLogoImportOverlay.call(i, e)
            }), n.elements.$attribute.addClass("change").append(n.elements.$imgdiv).append(n.elements.$btndiv)
        },
        updateAttribute: function(e) {
            var t = this, n = e.functions.getData.call(e), i = Math.floor(1e5 * Math.random() + 1e4);
            t.elements.$img.attr({
                src: n.path + "?" + i
            })
        }
    }
}), define("module/attribute", ["require", "jquery", "module/Class", "module/attribute/color", "module/attribute/toggle", "module/attribute/slider", "module/attribute/font", "module/attribute/template", "module/attribute/logo"], function(e) {
    var t = e("jquery"), n = e("module/Class"), i = e("module/attribute/color"), o = e("module/attribute/toggle"), a = e("module/attribute/slider"), s = e("module/attribute/font"), r = e("module/attribute/template"), l = e("module/attribute/logo");
    return n.extend({
        init: function(e) {
            var n = this;
            n.params = {
                category: void 0,
                key: void 0,
                value: void 0
            }, n.elements = {}, n.functions = {
                buildAttribute: function(e) {},
                attachAttribute: function() {
                    this.elements.$dropdown.append(n.elements.$attribute)
                },
                updateAttribute: function() {},
                onOpen: function(e) {
                    this.functions.updateAttribute.call(this, e, !0)
                },
                onClose: function() {},
                onResize: function() {}
            }, n.extendModuleParamsAndFunctions(e), n.elements.$attribute = t("<div />").on("click", function(e) {
                !n.params.propagate && e.stopPropagation()
            })
        },
        extendModuleParamsAndFunctions: function(e) {
            var n = null;
            "color" == e.params.category ? n = i : "toggle" == e.params.category ? n = o : "slider" == e.params.category ? n = a : "font" == e.params.category ? n = s : "template" == e.params.category ? n = r : "logo" == e.params.category && (n = l), t.extend(!0, this, e), t.extend(this.functions, n)
        }
    })
}), define("module/buttons", ["require", "jquery", "module/button", "module/attribute"], function(e) {
    var t = (e("jquery"), e("module/button")), n = e("module/attribute");
    return {
        init: function() {
            return [new t({
                params: {
                    category: "effect",
                    name: "Text",
                    icon: "keyboard-o",
                    type: "TextWatermark",
                    model: "server",
                    dropzone: {
                        url: window.pageVars.site_url + "font",
                        name: "Font",
                        icon: "fa-font-import",
                        maxFilesize: 10485760,
                        clickButtonId: "#btn-font-import",
                        reference: "dz-fonts"
                    },
                    "default": {
                        text: "",
                        font_color: "FFFFFF",
                        stroke_color: "000000",
                        font_size: 40,
                        background_color: "",
                        opacity: 100,
                        stroke_size: 0,
                        type: "text",
                        tile_spacing: 50,
                        color_toggle: "text",
                        multiplicity: "single",
                        lines_color: "",
                        lines_opacity: 50,
                        watermark_template_used_id: 0,
                        font_id: 310,
                        path: window.pageVars.site_url + "images/watermark/default.png",
                        position: {
                            x: 25,
                            y: 25,
                            align_left: 1,
                            align_top: 1,
                            horizontal_snap: 0,
                            vertical_snap: 0,
                            rotation: 0
                        }
                    },
                    data: {}
                },
                tools: [new t({
                    params: {
                        category: "tool",
                        name: "Font",
                        icon: "font",
                        id: "btn-fonts",
                        "class": "list-slide"
                    },
                    attributes: [new n({
                        params: {
                            category: "font",
                            key: "font_id",
                            "class": ["list", "fonts"],
                            highlight: !0,
                            fontHash: "0c20",
                            popover: {
                                "import": "<b>Import your own custom font</b> from your computer and use it for your watermarks.",
                                "delete": "Delete imported font?",
                                premium: "<b>This is a premium font</b>. You may preview it, but will need to upgrade to use it for your watermark."
                            },
                            data: []
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Color",
                        icon: "paint-brush"
                    },
                    attributes: [new n({
                        params: {
                            category: "toggle",
                            key: "color_toggle",
                            highlight: !0,
                            target: "color",
                            data: [{
                                text: "Text",
                                value: "text",
                                width: 30,
                                selected: !0
                            }, {
                                text: "Background",
                                value: "background",
                                width: 70
                            }
                            ]
                        }
                    }), new n({
                        params: {
                            category: "color",
                            key: "font_color",
                            value: "63f0c1",
                            required: !0
                        }
                    }), new n({
                        params: {
                            category: "color",
                            key: "background_color",
                            value: "000000",
                            hidden: !0,
                            update: !1,
                            popover: "Click to <b>remove the background color</b> of your watermark."
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Stroke",
                        icon: "stroke"
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "stroke_size",
                            group: !0,
                            value: 5,
                            popover: "Move slider to <b>adjust the thickness of the stroke</b> around your watermark text."
                        }
                    }), new n({
                        params: {
                            category: "color",
                            key: "stroke_color",
                            group: !0,
                            value: "000000",
                            update: !1,
                            popover: "Click to <b>remove the stroke</b> around the text of your watermark."
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Sign",
                        icon: "copyright"
                    },
                    attributes: [new n({
                        params: {
                            category: "toggle",
                            key: "symbol",
                            update: !1,
                            data: [{
                                icon: "copyright",
                                value: "0x00A9",
                                width: 33.33
                            }, {
                                icon: "registered",
                                value: "0x00AE",
                                width: 33.33
                            }, {
                                icon: "trademark",
                                value: "0x2122",
                                width: 33.33
                            }
                            ]
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Opacity",
                        icon: "eye"
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "opacity",
                            popover: "Move slider to <b>adjust the opacity</b> of your watermark.",
                            live: !0
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Single",
                        icon: "stop",
                        "class": "multiplicity",
                        options: [{
                            text: "Single",
                            icon: "stop"
                        }, {
                            text: "Tiled",
                            icon: "th"
                        }
                        ]
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "tile_spacing",
                            hidden: !0,
                            live: !0,
                            prefix: "px",
                            min: 20,
                            update: !1,
                            popover: "Move slider to <b>adjust the spacing</b> between the watermark tiles."
                        }
                    }), new n({
                        params: {
                            category: "toggle",
                            key: "multiplicity",
                            highlight: !0,
                            target: "slider",
                            "class": "has-icons",
                            offset: 1,
                            update: !1,
                            data: [{
                                text: "Single",
                                icon: "stop",
                                value: "single",
                                width: 50,
                                selected: !0
                            }, {
                                text: "Tiled",
                                icon: "th",
                                value: "tiled",
                                width: 50
                            }
                            ]
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Lines",
                        icon: "close"
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "lines_opacity",
                            live: !0,
                            group: !0,
                            popover: "Move slider to <b>adjust the opacity</b> of watermark lines."
                        }
                    }), new n({
                        params: {
                            category: "color",
                            key: "lines_color",
                            group: !0,
                            live: !0,
                            value: "FFFFFF",
                            popover: "Click to <b>remove watermark lines</b>."
                        }
                    })]
                })]
            }), new t({
                params: {
                    category: "effect",
                    name: "Image",
                    text: "Logo",
                    icon: "image-add",
                    type: "ImageWatermark",
                    empty: !0,
                    dropzone: {
                        url: window.pageVars.site_url + "batch/" + window.pageVars.batch.id + "/watermarkFile/",
                        name: "Logo",
                        icon: "fa-image-add",
                        text: "Import Logo",
                        maxFilesize: 10485760,
                        clickButtonId: "#btn-logo-import",
                        clickable: !0,
                        isOverlayVisible: !0
                    },
                    "default": {
                        opacity: 100,
                        watermark_template_used_id: 0,
                        type: "image",
                        tile_spacing: 50,
                        multiplicity: "single",
                        background_opacity: 100,
                        lines_color: "",
                        lines_opacity: 50,
                        watermark_file_id: null,
                        image_scale: 100,
                        path: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                        position: {
                            x: 25,
                            y: 25,
                            align_left: 1,
                            align_top: 1,
                            horizontal_snap: 0,
                            vertical_snap: 0,
                            rotation: 0
                        }
                    },
                    data: {}
                },
                tools: [new t({
                    params: {
                        category: "tool",
                        name: "Logo",
                        icon: "image-add",
                        disabled: !0
                    },
                    attributes: [new n({
                        params: {
                            category: "logo",
                            key: "watermark_file_id",
                            propagate: !0
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Opacity",
                        icon: "eye",
                        disabled: !0
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "opacity",
                            popover: "Move slider to <b>adjust the opacity</b> of your watermark.",
                            live: !0,
                            title: "Watermark Opacity"
                        }
                    }), new n({
                        params: {
                            category: "slider",
                            key: "background_opacity",
                            popover: "Move slider to <b>strip away the background of your logo</b>. Adjust the tolerance level to remove noise around your logo edges.",
                            title: "Background Tolerance",
                            min: 1
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Single",
                        icon: "stop",
                        "class": "multiplicity",
                        options: [{
                            text: "Single",
                            icon: "stop"
                        }, {
                            text: "Tiled",
                            icon: "th"
                        }
                        ],
                        disabled: !0
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "tile_spacing",
                            hidden: !0,
                            live: !0,
                            prefix: "px",
                            min: 20,
                            popover: "Move slider to <b>adjust the spacing</b> between the watermark tiles."
                        }
                    }), new n({
                        params: {
                            category: "toggle",
                            key: "multiplicity",
                            highlight: !0,
                            target: "slider",
                            "class": "has-icons",
                            offset: 1,
                            data: [{
                                text: "Single",
                                icon: "stop",
                                value: "single",
                                width: 50,
                                selected: !0
                            }, {
                                text: "Tiled",
                                icon: "th",
                                value: "tiled",
                                width: 50
                            }
                            ]
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Lines",
                        icon: "close",
                        disabled: !0
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "lines_opacity",
                            live: !0,
                            group: !0,
                            popover: "Move slider to <b>adjust the opacity</b> of watermark lines."
                        }
                    }), new n({
                        params: {
                            category: "color",
                            key: "lines_color",
                            group: !0,
                            live: !0,
                            value: "FFFFFF",
                            popover: "Click to <b>remove watermark lines</b>."
                        }
                    })]
                })]
            }), new t({
                params: {
                    category: "tool",
                    name: "Template",
                    icon: "star",
                    id: "btn-templates",
                    "class": "list-slide"
                },
                attributes: [new n({
                    params: {
                        category: "template",
                        key: "watermark_template_used_id",
                        "class": ["list", "templates"],
                        propagate: !0,
                        popover: {
                            "delete": "Delete saved template?"
                        },
                        data: []
                    }
                })]
            }), new t({
                params: {
                    category: "effect",
                    name: "Crop",
                    icon: "crop",
                    "default": {
                        position: {
                            left_percent: .1,
                            top_percent: .1,
                            width_percent: .5,
                            height_percent: .5
                        }
                    },
                    data: {}
                }
            }), new t({
                params: {
                    category: "effect",
                    name: "Rotate",
                    icon: "rotate",
                    mask: !0,
                    "default": {
                        position: {
                            rotation: 0,
                            rotation_scale: 1
                        }
                    },
                    data: {}
                },
                tools: [new t({
                    params: {
                        category: "action",
                        name: "Left",
                        icon: "rotate fa-flip-horizontal",
                        action: "rotate-left"
                    }
                }), new t({
                    params: {
                        category: "action",
                        name: "Right",
                        icon: "rotate",
                        action: "rotate-right"
                    }
                })]
            }), new t({
                params: {
                    category: "dropdown",
                    name: "More",
                    icon: "caret-down fa-flip-vertical",
                    "class": "moremenu"
                },
                options: []
            }), new t({
                params: {
                    category: "effect",
                    name: "Exposure",
                    icon: "sun-o",
                    "class": "more",
                    mask: !0,
                    server: !0,
                    "default": {
                        brightness: 0,
                        contrast: 0
                    },
                    data: {}
                },
                tools: [new t({
                    params: {
                        category: "tool",
                        name: "Brightness",
                        icon: "sun-o"
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "brightness",
                            popover: "Move slider to <b>adjust the brightness</b> of your photo.",
                            min: - 100,
                            live: !0
                        }
                    })]
                }), new t({
                    params: {
                        category: "tool",
                        name: "Contrast",
                        icon: "adjust"
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "contrast",
                            popover: "Move slider to <b>adjust the contrast</b> of your photo.",
                            min: - 100,
                            live: !0
                        }
                    })]
                })]
            }), new t({
                params: {
                    category: "effect",
                    name: "Grayscale",
                    icon: "delicious",
                    "class": "more",
                    mask: !0,
                    "default": {
                        grayscale: 100
                    },
                    data: {}
                }
            }), new t({
                params: {
                    category: "effect",
                    name: "Sepia",
                    icon: "pagelines",
                    "class": "more",
                    mask: !0,
                    server: !0,
                    "default": {
                        threshold: 80
                    },
                    data: {}
                },
                tools: [new t({
                    params: {
                        category: "tool",
                        name: "Threshold",
                        icon: "sliders"
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "threshold",
                            popover: "Move slider to <b>adjust the sepia threshold</b> on your photo.",
                            live: !0
                        }
                    })]
                })]
            }), new t({
                params: {
                    category: "effect",
                    name: "Compress",
                    icon: "compress",
                    "class": "more",
                    server: !0,
                    mask: !0,
                    "default": {
                        quality: 100
                    },
                    data: {}
                },
                tools: [new t({
                    params: {
                        category: "tool",
                        name: "Quality",
                        icon: "sliders"
                    },
                    attributes: [new n({
                        params: {
                            category: "slider",
                            key: "quality",
                            min: 1,
                            popover: "Move slider to <b>adjust photo quality</b>."
                        }
                    })]
                })]
            }), new t({
                params: {
                    category: "effect",
                    name: "Resize",
                    icon: "resize fa-rotate-90",
                    "class": "more",
                    mask: !0,
                    "default": {
                        resize_type: "relative",
                        position: {
                            width_percent: .5,
                            height_percent: .5
                        }
                    },
                    data: {}
                }
            }), new t({
                params: {
                    category: "effect",
                    name: "Flip",
                    icon: "flip",
                    "class": "more",
                    mask: !0,
                    "default": {
                        position: {
                            flip_horizontal: 0,
                            flip_vertical: 0
                        }
                    },
                    data: {}
                },
                tools: [new t({
                    params: {
                        category: "action",
                        name: "Horizontal",
                        icon: "flip",
                        action: "flip-horizontal"
                    }
                }), new t({
                    params: {
                        category: "action",
                        name: "Vertical",
                        icon: "flip fa-rotate-270",
                        action: "flip-vertical"
                    }
                })]
            })]
        }
    }
}), define("page/editor", ["require", "jquery", "jquery.viewport", "module/ajax", "page/include/mainframe", "module/confirm", "module/client", "module/keyboard", "module/guide", "module/batch", "module/bar", "module/list", "module/browser", "module/modal", "module/buttons"], function(e) {
    var t = e("jquery"), n = (e("jquery.viewport"), e("module/ajax")), i = e("page/include/mainframe"), o = e("module/confirm"), a = e("module/client"), s = e("module/keyboard"), r = e("module/guide"), l = e("module/batch"), c = e("module/bar"), u = e("module/list"), d = e("module/browser"), p = e("module/modal"), h = e("module/buttons"), f = {
        params: {
            user: window.pageVars.arrUser,
            batch: window.pageVars.batch,
            effects: null,
            effect: null,
            keys: [13, 27, 32, 37, 39, 46, 89, 90]
        },
        elements: {},
        functions: {
            buildEditor: function(e) {
                f.elements = {
                    $editor: t("body"),
                    $stagewrap: t("#editor-stage-wrap"),
                    $stage: t("#editor-stage"),
                    $keyboard: t("#keyboard"),
                    $preview: t("#editor-preview"),
                    $dims: t("#dims"),
                    $tools: t("#editor-tools"),
                    $top: t("#navbar-fixed-top"),
                    $bottom: t("#navbar-fixed-bottom"),
                    $control: t("#editor-control"),
                    $nav: t("#editor-nav"),
                    $ur: t("#editor-ur"),
                    $finishmain: t("#btn-finish"),
                    $finish: t("#btn-finish-effect"),
                    $loader: t("#spinner")
                }, f.params = t.extend(f.params, {
                    position: {
                        padding: 30,
                        top: f.elements.$top.height(),
                        bottom: f.elements.$bottom.height() + f.elements.$control.outerHeight()
                    }
                }), f.params.batch = l.functions.buildBatch.call(f, e), f.functions.defineGuides(), c.functions.onRotate(f.functions.onBarRotation), f.params.effects = f.functions.buildEffects(), f.functions.updateEditorDimensions.call(f.params.position), f.functions.buildKeyboardEvents(), f.functions.buildWindowEvents(), f.functions.buildClickEvents()
            },
            buildEffects: function() {
                var e = c.functions.setButtonSide(c.params.currentSide), n = h.init();
                return t.each(n, function() {
                    this.functions.buildButton.call(this, this, f), this.functions.attachButton(e), this.functions.onButtonClickCallback.call(this, f.functions.openEffect), this.functions.extendParams({
                        batch_id: f.params.batch.params.id
                    }), this.functions.extendElements([{
                        key: "$keyboard",
                        val: f.elements.$keyboard
                    }, {
                        key: "$stage",
                        val: f.elements.$stage
                    }, {
                        key: "$preview",
                        val: f.elements.$preview
                    }, {
                        key: "$tools",
                        val: f.elements.$tools
                    }, {
                        key: "$finish",
                        val: f.elements.$finish
                    }
                    ])
                }), n
            },
            openEffect: function(e) {
                var t = this;
                return c.params.isRotating?!1 : (f.params.effect = t, t.functions.attachComponent.call(t, f), t.functions.detachAllTools.call(t), t.functions.attachTools.call(t, f), c.functions.updateNavButtons(t), c.functions.rotateNext(f.elements.$bottom), f.elements.$tools.attr({
                    disabled: !1
                }), f.elements.$ur.hide(), t && t.component.functions.toggleComponent.call(t), void t.functions.updateParams.call(t, e))
            },
            closeEffect: function(e) {
                var t = f.params.effect;
                t.params.reset = e?!0 : t.params.reset, t && t.functions.detachComponent.call(t), c.functions.rotatePrev(f.elements.$bottom, e), f.elements.$ur.show(), f.params.effect = null
            },
            confirmBeforeClosingEffect: function() {
                var e = f.params.effect;
                f.elements.$tools.attr({
                    disabled: !0
                }), e.component.params.modified&&!e.params.empty && e.params.list.length != Object.keys(e.params.data).length ? (f.params.isApplyingOnly=!0, o.functions.showConfirm({
                    message: "Would you like to apply changes made with <b>" + e.params.name + "</b> ?",
                    accept: {
                        text: "Apply",
                        type: "primary"
                    },
                    reject: {
                        text: "Discard",
                        type: "default"
                    },
                    onAccept: function() {
                        e.functions.runEffect.call(e, f, {
                            apply: 1
                        })
                    },
                    onReject: function() {
                        return f.functions.closeEffect(), !0
                    }
                })) : f.functions.closeEffect()
            },
            confirmBeforeExiting: function() {
                var e = t(this).attr("href");
                return o.functions.showConfirm({
                    message: "You have unsaved changes. ",
                    accept: {
                        text: "<span class='hidden-xs'>Exit Editor</span><span class='visible-xs-inline'>Exit</span>",
                        type: "danger"
                    },
                    reject: {
                        text: "<span class='hidden-xs'>Stay On Page</span><span class='visible-xs-inline'>Cancel</span>",
                        type: "default"
                    },
                    onAccept: function() {
                        location.href = e
                    },
                    onReject: function() {
                        return t(window).on("beforeunload", function(e) {
                            return "You have unsaved changes! Click 'Tools' to apply more effects or click 'Finish' to save your changes and process your photos."
                        }), !0
                    }
                }), !1
            },
            escapeToolOrEffect: function() {
                var e = this.params.open;
                e ? e.elements.$btn.dropdown("toggle") : f.functions.confirmBeforeClosingEffect()
            },
            updateEditorDimensions: function() {
                var e = this, n = t(window);
                e.width = n.width(), e.height = n.height(), f.functions.adjustPreviewBoundaryBox(), f.params.effect && f.params.effect.component.functions.onResize.call(f.params.effect), u.params.isOpen && u.functions.adjustBoundaryBox()
            },
            adjustPreviewBoundaryBox: function() {
                var e = f.params.position, n = e.height - e.top - e.bottom - e.padding - t(".editor-batch:visible").height(), i = e.width - e.padding;
                i = parseInt(i) > 1 ? parseInt(i) : 1, n = parseInt(n) > 1 ? parseInt(n) : 1, f.elements.$preview.css({
                    "max-height": n
                });
                var o = i < a.intScreenSmallWidth.val - e.padding || n < f.elements.$preview.height() ? n: f.elements.$preview.height();
                f.elements.$stage.css({
                    "margin-top": (n - o) / 2
                })
            },
            onPreviewLoad: function() {
                var e = f.params.effect, n = t(this);
                d.isMobileScreen() && n.css({
                    "min-height": n.height()
                }), l.params.isSwitching=!1, f.functions.adjustPreviewBoundaryBox.call(this), e && e.component.functions.toggleComponent.call(e), e && e.component.functions.updateComponent.call(e, null, !0), l.functions.updateIterationAndNavigationButtons.call(l, f), l.functions.hideAllLoadingIcons()
            },
            onBarRotation: function() {
                r.functions.showGuide.call(f)
            },
            onRightClickedImageOrStage: function() {
                var e = f.params.effect, t = {
                    name: e ? "finish": "edit"
                }, n = e ? null: 1, i = r.params.guidesDefined[t.name];
                return r.params.guidePrepared = t, i.params.autoStart=!0, r.functions.showGuide.call(f, n), !1
            },
            defineGuides: function() {
                var e = [{
                    params: {
                        id: 3,
                        name: "edit"
                    },
                    steps: [{
                        text: ["<span class='hidden-xs'>The bottom bar contains all your editing tools.</span> <span class='visible-xs-inline'>Cligking the <b>Edit</b> button will open your tools.</span> <span>Choose <b>Text</b> to customize your own watermark or <b>Logo</b> to import your watermark logo.</span>"],
                        attachTo: "#navbar-primary",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top middle"
                        }
                    }, {
                        text: ["Once you are satisfied with the changes you've applied, click <span class='visible-xs-inline'>the finish icon ( <i class='fa fa-flag-checkered'></i> )</span><b class='hidden-xs'>Finish</b> to process your photos."],
                        attachTo: "#btn-finish",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top right"
                        }
                    }
                    ]
                }, {
                    params: {
                        id: 4,
                        name: "text",
                        effect: ["text", "image"]
                    },
                    steps: [{
                        text: ["<span class='hidden-xs'>Use the tools at the bottom</span><span class='visible-xs-inline'>Click <b>Text</b> to toggle tools</span> to customize your <b>watermark font, color, opacity, stroke</b>, add copyright symbols and more."],
                        attachTo: "#navbar-secondary",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top middle"
                        }
                    }, {
                        step: 3,
                        text: ["<b><span class='visible-xs-inline'>Tap</span><span class='hidden-xs'>Click</span> the watermark</b> to edit the text. Additionally, you can drag, resize and rotate your watermark using icons ( <i class='fa fa-fw fa-undo fa-flip-horizontal'></i> ) and ( <i class='fa fa-fw fa-expand fa-flip-horizontal'></i> )."],
                        attachTo: ".effect",
                        tetherOptions: {
                            attachment: "top left",
                            targetAttachment: "bottom left"
                        }
                    }
                    ]
                }, {
                    params: {
                        id: 6,
                        name: "finish",
                        effect: ["*"],
                        autoStart: !1
                    },
                    steps: [{
                        step: 4,
                        text: ["Once you are satisfied with the changes you've applied, click <span class='visible-xs-inline'>the finish icon ( <i class='fa fa-flag-checkered'></i> )</span><b class='hidden-xs'>Finish</b> to process your photos."],
                        attachTo: ".apply-effect",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top right"
                        }
                    }
                    ]
                }, {
                    params: {
                        id: 7,
                        name: "template",
                        autoStart: !1
                    },
                    steps: [{
                        text: ["To save your watermark, first create one using <b>Text</b> or <b>Logo</b>, apply it using <b>Tools</b> or <b>Finish</b>, then click <b>Save As Template</b>. Use the <b>Template</b> button to access your saved templates."],
                        attachTo: "#navbar-primary",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top middle"
                        }
                    }
                    ]
                }, {
                    params: {
                        id: 8,
                        name: "multieffect",
                        effect: ["text", "image"],
                        autoStart: !1
                    },
                    steps: [{
                        text: ["To add multiple watermarks to a photo, click <b>Tools</b> to apply the current watermark and continue watermarking."],
                        attachTo: "#editor-tools",
                        tetherOptions: {
                            attachment: "bottom left",
                            targetAttachment: "top left"
                        }
                    }
                    ]
                }
                ];
                r.functions.setGuidesShown.call(r, f.params.user.guidesShown), r.functions.buildGuides.call(r, e)
            },
            buildKeyboardEvents: function() {
                t(document).on("keyup", function(e) {
                    var n = t(e.target), i = n.is("input"), o = e.which || e.keyCode;
                    if ( - 1 !== t.inArray(o, f.params.keys)) {
                        var a = f.params.effect;
                        27 == o && a && f.functions.escapeToolOrEffect.call(a), 90 == o && s.params.isCtrlPressed&&!a && l.functions.navigateIterations.call(f, "undo"), 89 == o && s.params.isCtrlPressed&&!a && l.functions.navigateIterations.call(f, "redo"), 37 == o&&!i && l.functions.navigatePhotos.call(f, "prev"), 39 == o&&!i && l.functions.navigatePhotos.call(f, "next")
                    }
                })
            },
            buildWindowEvents: function() {
                t(window).on("resize", function() {
                    f.functions.updateEditorDimensions.call(f.params.position)
                }), t(window).on("beforeunload", function(e) {
                    return "You have unsaved changes! Click 'Tools' to apply more effects or click 'Finish' to save your changes and process your photos."
                })
            },
            buildClickEvents: function() {
                f.elements.$preview.on("load", f.functions.onPreviewLoad), f.elements.$tools.on("click", f.functions.confirmBeforeClosingEffect), f.elements.$stage.on("touchmove", function(e) {
                    e.preventDefault()
                }), f.elements.$preview.on("dragstart", function(e) {
                    e.preventDefault()
                }), f.elements.$stage.on("contextmenu", f.functions.onRightClickedImageOrStage), t(document).on("mousedown", "a", function(e) {
                    t(window).off("beforeunload")
                }), t(document).on("click", "a.nav", f.functions.confirmBeforeExiting), t(document).on("click", ".howto > li > a", function(e) {
                    r.functions.onShowHowTo.call(this, f)
                }), t(document).on("contextmenu", "img", f.functions.onRightClickedImageOrStage)
            }
        }
    };
    t(".page.editor").ready(function() {
        i.ready(), f.functions.buildEditor(f.params.batch.id), n.post("batch/" + f.params.batch.params.id + "/edit/initialize", {
            batch_width: f.params.batch.params.position.width
        }, function(e) {
            f.elements.$loader.remove(), l.functions.setBatchEffectIdsTo.call(l, e.effect_id_newest), l.functions.updateBatchParams.call(l, f, e, !0), f.elements.$finish.on("click", function() {
                l.functions.confirmToFinishEditing.call(l, f)
            }), f.elements.$finishmain.on("click", function() {
                l.functions.confirmToFinishEditing.call(l, f)
            }), f.elements.$preview.attr({
                src: l.params.batch_files[l.params.order].newestPreviewUrl
            }).data({
                width: l.params.batch_files[l.params.order].original_width,
                height: l.params.batch_files[l.params.order].original_height
            }), f.elements.$dims.html(l.params.batch_files[l.params.order].original_width + " x " + l.params.batch_files[l.params.order].original_height), l.params.fonts && t.merge(f.params.effects[0].tools[0].attributes[0].params.data, l.params.fonts), l.params.templates && t.merge(f.params.effects[2].attributes[0].params.data, l.params.templates), f.elements.$bottom.animate({
                bottom: 0
            }, {
                duration: 300,
                complete: function() {
                    f.elements.$editor.addClass("editor-loaded"), f.elements.$control.show(), l.elements.$batch.animate({
                        top: 0
                    }, {
                        duration: 300
                    }), r.params.guidesDefined.edit.params.autoStart && r.params.guidesDefined.edit.start()
                }
            }), l.params.batch.isFinished && p.functions.showModal("finished", !0)
        }, function() {})
    })
}), define("page/batches", ["require", "jquery", "module/ajax", "page/include/mainframe", "module/confirm", "module/client"], function(e) {
    var t = e("jquery"), n = e("module/ajax"), i = e("page/include/mainframe"), o = e("module/confirm"), a = (e("module/client"), {
        params: {
            site_url: window.pageVars.site_url,
            file_count: window.pageVars.total,
            load_after: window.pageVars.after
        },
        functions: {
            buildBatches: function() {
                a.elements = {}, a.functions.initInfiniteScroll(), a.functions.buildNodeEvents(), a.functions.buildClickEvents()
            },
            initInfiniteScroll: function() {
                a.params.load_after && i.infiniteScroll("batch/load", {
                    after: a.params.load_after
                })
            },
            buildClickEvents: function() {
                t(document).on("contextmenu", ".node-parent", function(e) {
                    return t(this).find(".btn-group").addClass("open").find("button").attr({
                        "aria-expanded": !0
                    }), !1
                }), t(".deleteall > ul > li").on("click", function() {
                    var e = t(this).is(".private") ? 0: 1, a = e ? "": "-private", s = e ? "": " private", r = t(".batch" + a);
                    o.functions.showConfirm({
                        message: "Delete all" + s + " batches?",
                        accept: {
                            text: "Delete",
                            type: "danger"
                        },
                        $spotlight: r,
                        onAccept: function() {
                            return n.post("batches", {
                                _method: "DELETE",
                                shared: e
                            }, function(e) {
                                i.deleteNode(r)
                            }), !0
                        }
                    })
                })
            },
            buildNodeEvents: function() {
                i.nodeClick(".node", function(e, t) {
                    location.href = a.params.site_url + "batch/" + t
                }), i.nodeClick(".batch-delete", function(e, t) {
                    return o.functions.showConfirm({
                        message: "Delete this batch?",
                        accept: {
                            text: "Delete",
                            type: "danger"
                        },
                        onAccept: function() {
                            return n.post("batch/" + t, {
                                _method: "DELETE"
                            }, function(t) {
                                i.deleteNode(e)
                            }), !0
                        },
                        $spotlight: e
                    }), !1
                })
            }
        }
    });
    t(".page.batches").ready(function() {
        i.ready(), a.functions.buildBatches()
    })
}), define("bootstrap-toggle", ["jquery"], function(e) {
    return + function(e) {
        "use strict";
        function t(t) {
            return this.each(function() {
                var i = e(this), o = i.data("bs.toggle"), a = "object" == typeof t && t;
                o || i.data("bs.toggle", o = new n(this, a)), "string" == typeof t && o[t] && o[t]()
            })
        }
        var n = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, this.defaults(), n), this.render()
        };
        n.VERSION = "2.2.0", n.DEFAULTS = {
            on: "On",
            off: "Off",
            onstyle: "primary",
            offstyle: "default",
            size: "normal",
            style: "",
            width: null,
            height: null
        }, n.prototype.defaults = function() {
            return {
                on: this.$element.attr("data-on") || n.DEFAULTS.on,
                off: this.$element.attr("data-off") || n.DEFAULTS.off,
                onstyle: this.$element.attr("data-onstyle") || n.DEFAULTS.onstyle,
                offstyle: this.$element.attr("data-offstyle") || n.DEFAULTS.offstyle,
                size: this.$element.attr("data-size") || n.DEFAULTS.size,
                style: this.$element.attr("data-style") || n.DEFAULTS.style,
                width: this.$element.attr("data-width") || n.DEFAULTS.width,
                height: this.$element.attr("data-height") || n.DEFAULTS.height
            }
        }, n.prototype.render = function() {
            this._onstyle = "btn-" + this.options.onstyle, this._offstyle = "btn-" + this.options.offstyle;
            var t = "large" === this.options.size ? "btn-lg": "small" === this.options.size ? "btn-sm": "mini" === this.options.size ? "btn-xs": "", n = e('<label class="btn">').html(this.options.on).addClass(this._onstyle + " " + t), i = e('<label class="btn">').html(this.options.off).addClass(this._offstyle + " " + t + " active"), o = e('<span class="toggle-handle btn btn-default">').addClass(t), a = e('<div class="toggle-group">').append(n, i, o), s = e('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked") ? this._onstyle : this._offstyle + " off").addClass(t).addClass(this.options.style);
            this.$element.wrap(s), e.extend(this, {
                $toggle: this.$element.parent(),
                $toggleOn: n,
                $toggleOff: i,
                $toggleGroup: a
            }), this.$toggle.append(a);
            var r = this.options.width || Math.max(n.outerWidth(), i.outerWidth()) + o.outerWidth() / 2, l = this.options.height || Math.max(n.outerHeight(), i.outerHeight());
            n.addClass("toggle-on"), i.addClass("toggle-off"), this.$toggle.css({
                width: r,
                height: l
            }), this.options.height && (n.css("line-height", n.height() + "px"), i.css("line-height", i.height() + "px")), this.update(!0), this.trigger(!0)
        }, n.prototype.toggle = function() {
            this.$element.prop("checked") ? this.off() : this.on()
        }, n.prototype.on = function(e) {
            return this.$element.prop("disabled")?!1 : (this.$toggle.removeClass(this._offstyle + " off").addClass(this._onstyle), this.$element.prop("checked", !0), void(e || this.trigger()))
        }, n.prototype.off = function(e) {
            return this.$element.prop("disabled")?!1 : (this.$toggle.removeClass(this._onstyle).addClass(this._offstyle + " off"), this.$element.prop("checked", !1), void(e || this.trigger()))
        }, n.prototype.enable = function() {
            this.$toggle.removeAttr("disabled"), this.$element.prop("disabled", !1)
        }, n.prototype.disable = function() {
            this.$toggle.attr("disabled", "disabled"), this.$element.prop("disabled", !0)
        }, n.prototype.update = function(e) {
            this.$element.prop("disabled") ? this.disable() : this.enable(), this.$element.prop("checked") ? this.on(e) : this.off(e)
        }, n.prototype.trigger = function(t) {
            this.$element.off("change.bs.toggle"), t || this.$element.change(), this.$element.on("change.bs.toggle", e.proxy(function() {
                this.update()
            }, this))
        }, n.prototype.destroy = function() {
            this.$element.off("change.bs.toggle"), this.$toggleGroup.remove(), this.$element.removeData("bs.toggle"), this.$element.unwrap()
        };
        var i = e.fn.bootstrapToggle;
        e.fn.bootstrapToggle = t, e.fn.bootstrapToggle.Constructor = n, e.fn.toggle.noConflict = function() {
            return e.fn.bootstrapToggle = i, this
        }, e(function() {
            e("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()
        }), e(document).on("click.bs.toggle", "div[data-toggle^=toggle]", function(t) {
            var n = e(this).find("input[type=checkbox]");
            n.bootstrapToggle("toggle"), t.preventDefault()
        })
    }(e), {}
}), define("module/toggle", ["require", "jquery", "bootstrap-toggle"], function(e) {
    var t, n = e("jquery"), i = (e("bootstrap-toggle"), {
        init: function(e, i) {
            t = n("#" + e).find(".toggle"), t.find("input").bootstrapToggle(), t.find(".toggle-group").bind("webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend", function(e) {
                var n = t.is(".off") ? 0: 1;
                i && i(n)
            })
        }
    });
    return i
}), define("page/batch", ["require", "page/include/mainframe", "jquery", "module/ajax", "module/client", "module/progress", "module/guide", "module/filepicker", "module/popover", "module/gallery", "module/modal", "module/alert", "module/toggle"], function(e) {
    var t = e("page/include/mainframe"), n = e("jquery"), i = e("module/ajax"), o = e("module/client"), a = e("module/progress"), s = e("module/guide"), r = e("module/filepicker"), l = e("module/popover"), c = e("module/gallery"), u = e("module/modal"), d = e("module/alert"), p = e("module/toggle"), h = {
        params: {
            site_url: window.pageVars.site_url,
            load_after: window.pageVars.after,
            isShared: window.pageVars.shared,
            batch: window.pageVars.batch,
            user: window.pageVars.arrUser,
            progress_interval: null
        },
        functions: {
            buildBatch: function() {
                return h.elements = {
                    $navbar: n("#navbar-fixed-bottom"),
                    $count: n("#pcount"),
                    $message: n("#fmessage"),
                    $download: n(".navbar-right #download-all")
                }, h.functions.adjustPreviewHeight(), h.functions.initInfiniteScroll(), h.functions.initGallery(), h.functions.buildClickEvents(), h.params.isShared?!1 : (h.functions.defineGuides(), h.functions.initToggle(), h.functions.buildWindowEvents(), a.functions.buildProgress("Process", function() {
                    h.params.batch.hasCompletedFinalProcessing || (h.params.progress_interval = setInterval(h.functions.updateProgress, 5e3), h.functions.updateProgress())
                }), h.params.batch.hasCompletedFinalProcessing && h.functions.updateBottomBar(), void s.functions.showGuide.call(h))
            },
            initGallery: function() {
                c.init(h.params.batch.file_count, n(".node"), function(e) {
                    t.loadNextPage(e)
                })
            },
            initToggle: function() {
                p.init("share-toggle", function(e) {
                    var t = {
                        share: e
                    };
                    i.post("batch/" + h.params.batch.id + "/share", t, function(t) {
                        e && u.functions.showModal("share", !0, !1, {
                            subtitle: n("#subnav-title").html(),
                            url: t.url
                        })
                    })
                })
            },
            initInfiniteScroll: function() {
                h.params.load_after && t.infiniteScroll("batch/" + h.params.batch.id + "/load", {
                    after: h.params.load_after,
                    shared: h.params.isShared ? 1: 0
                }, {}, function(e) {
                    var t = e.find(".node-child"), n = {
                        src: e.data("preview-path"),
                        w: e.data("preview-width"),
                        h: e.data("preview-height")
                    };
                    c.append(n, t.data("node-id"))
                }, function(e) {
                    l.init(), c.setTotal(e)
                })
            },
            updateProgress: function() {
                var e = {
                    last: n(".batchfile").length
                };
                i.post("batch/" + h.params.batch.id + "/progress", e, function(e) {
                    if (n.extend(h.params.batch, e.batch), e.batch.hasCompletedFinalProcessing)
                        clearInterval(h.params.progress_interval), a.functions.resetProgress(), h.functions.updateBottomBar();
                    else {
                        "waiting" == e.batch.finalJob.status ? "warning" : "info";
                        a.functions.updateTotalCount(e.batch.file_count), a.functions.showProgress("Photos", !0), "waiting" == e.batch.finalJob.status ? a.functions.updateBarElements("Queued for processing", "alert alert-warning", "progress-bar progress-bar-striped progress-bar-success active", !0, !0) : e.batch.file_count > 1 && e.batch.final_processed_count == e.batch.file_count ? a.functions.updateBarElements("Creating ZIP file", null, "progress-bar progress-bar-striped active", !0, !0) : (a.functions.updateBarElements("Processing Photos", "alert alert-info", "progress-bar progress-bar-striped active"), a.functions.fileCompleted(e.batch.final_processed_count + 1, e.batch.isDownloadable))
                    }
                    h.functions.updateProcessedFiles(e)
                }, function(e) {
                    clearInterval(h.params.progress_interval), n(".node-processing").removeClass("node-processing").addClass("node-failed").end().find(".node-child-download-btn").remove()
                })
            },
            updateProcessedFiles: function(e) {
                n.each(e.progress, function(e) {
                    var t = n(".nodes > div:nth-child(" + e + ") > div");
                    if (!this.done ||!t.length)
                        return !1;
                    if (t.is(".node-processing")) {
                        var i = t.find(".node-child-download");
                        this.success ? i.data({
                            processed: 1
                        }) : (i.parents(".node-child-download-btn").remove(), t.addClass("node-failed")), t.removeClass("node-processing")
                    }
                })
            },
            updateBottomBar: function() {
                h.elements.$navbar.addClass("done"), h.elements.$count.html(h.params.batch.final_processed_count + " photo" + (1 == h.params.batch.final_processed_count ? "" : "s")), h.params.batch.final_failed_count ? h.elements.$message.removeClass("hidden").find("span").html(h.params.batch.final_failed_count) : h.elements.$message.addClass("hidden"), h.params.batch.isDownloadable && (1 == h.params.batch.file_count || h.params.batch.hasDownloadableZip ? h.elements.$download.attr({
                    disabled: !1,
                    src: h.params.batch.downloadAllUrl
                }) : d.functions.showAlert("<b>The Zip file for this batch could not be created</b>. Please re-try editing this batch or contact customer support.", "Zip File Creation Failed"))
            },
            adjustPreviewHeight: function() {
                if (1 != h.params.batch.file_count)
                    return !1;
                var e = n("#node-preview"), t = 50, i = 15, a = n(window).height() - n(".navbar-fixed-top").height() - n(".navbar-fixed-bottom").height() - n("#subnav").height() - i, s = n(window).width() - i;
                a -= t, s = parseInt(s) > 1 ? parseInt(s) : 1, a = parseInt(a) > 1 ? parseInt(a) : 1;
                s < o.intScreenSmallWidth.val - i || a < e.height() ? a : e.height();
                e.css({
                    "max-height": a
                }).parents(".node-single").css({
                    display: "inline-block"
                })
            },
            defineGuides: function() {
                var e = [{
                    params: {
                        id: 5,
                        name: "download"
                    },
                    steps: [{
                        text: ["Once a photo has been processed, click <b>Download</b> to save it to your <span class='hidden-xs'>computer</span><span class='visible-xs-inline'>device</span>. Use the dropdown ( <i class='fa fa-caret-down'></i> ) to <b>preview your photo</b>, <b>export it to the cloud</b> or <b>publish it online</b>."],
                        attachTo: "#nodes div:first-child .node-child",
                        tetherOptions: {
                            attachment: "bottom left",
                            targetAttachment: "bottom right"
                        }
                    }, {
                        text: ["Click <b>Download All</b> to download all finished photos. ( Note: Your photos will be downloaded in a Zip archive. )"],
                        attachTo: "#download-all",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top middle"
                        }
                    }
                    ]
                }, {
                    params: {
                        id: 9,
                        name: "share",
                        autoStart: !1
                    },
                    steps: [{
                        text: ["By default, all finished photos are <b>private and can only be viewed by you</b>. Click this button to obtain your shared link and share your watermarked photos with your clients. Feel free to post your shared link to any website, blog or social media."],
                        attachTo: "#share-toggle",
                        tetherOptions: {
                            attachment: "bottom right",
                            targetAttachment: "top middle"
                        }
                    }
                    ]
                }
                ];
                s.functions.setGuidesShown.call(s, h.params.user.guidesShown), s.functions.buildGuides.call(s, e)
            },
            buildClickEvents: function() {
                n(document).on("click", ".node-child", function(e) {
                    !n(e.target).is(".preview") || n(this).is(".node-processing") || n(this).is(".node-failed") || (c.show(n(this).data("node-id")), analytics.track("Preview Batch File"))
                }), n(document).on("contextmenu", ".batchfile", function(e) {
                    return n(this).is(".standby") || n(this).find(".btn-group").addClass("open").find("button").attr({
                        "aria-expanded": !0
                    }), !1
                }), n(document).on("click", ".node-child-download", function(e) {
                    e.stopPropagation(), "1" == n(this).data("processed") && (location.href = h.params.site_url + "batch/" + h.params.batch.id + "/batchFile/" + n(this).data("id") + "/download")
                }), n(document).on("click", ".node-child-export", function(e) {
                    e.stopPropagation();
                    var t = n(this).data("id");
                    return h.params.user.canExportToCloud ? void r.exportFiles({
                        url : n(this).data("original-path"), name : n(this).data("file-name"), services : window.pageVars.exportServices, openTo : n(this).data("opento"), onExport : function(e) {
                            i.post("batch/" + h.params.batch.id + "/batchFile/" + t + "/publish", {
                                type: "cloud"
                            })
                        }, onError: function(e) {
                            var t = "";
                            400 == e.code ? t = "Filepicker Export: Bad parameters passed" : 403 == e.code && (t = "Filepicker Export: Invalid request"), t && analytics.track(t, {
                                error: e
                            })
                        }
                    }) : (u.functions.showModal("export_to_cloud", !0), !1)
                }),
                n(document).on("click",
                ".howto > li > a",
                function(e) {
                    s.functions.onShowHowTo.call(this,
                    h)
                })
            }, buildWindowEvents : function() {
                n(window).on("resize", function() {
                    h.functions.adjustPreviewHeight()
                })
            }
        }
    }; n(".page.batch").ready(function() {
        t.ready(), h.functions.buildBatch()
    })
}), define("app", ["require", "guest", "page/account", "page/billing", "page/billingupdate", "page/subscribe", "page/upgrade", "page/home", "page/folder", "page/editor", "page/batches", "page/batch"], function(e) {
    e("guest"), e("page/account"), e("page/billing"), e("page/billingupdate"), e("page/subscribe"), e("page/upgrade"), e("page/home"), e("page/folder"), e("page/editor"), e("page/batches"), e("page/batch")
});
//# sourceMappingURL=app.js.map

