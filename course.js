function Jsboot(t, e) {
    var n;
    t.jsboot = t.jsboot || {
        callbacks: {}
    },
    n = t.jsboot,
    n.on = function(t, e) {
        t = t.replace("#", "-"),
        n.callbacks["jsboot-" + t] = e
    },
    n.runBootstrapping = function(t) {
        var i,
            r,
            o = e(t),
            s = o.attr("id"),
            a = n.callbacks[s];
        "function" == typeof a && (i = o.html(), r = "" === i ? {} : JSON.parse(i), a(r))
    },
    n.runAllBootstrapping = function() {
        e("script.jsboot-data").each(function(t, e) {
            n.runBootstrapping(e)
        })
    },
    e(function() {
        n.runAllBootstrapping()
    })
}
function compareObjects(t, e) {
    function n(t) {
        return t && "object" == typeof t
    }
    function i(t, e, r) {
        var o,
            s,
            a,
            l,
            u,
            c,
            d,
            h,
            f;
        if (typeof t != typeof e)
            return !1;
        if (!n(t))
            return t === e;
        if (a = Object.keys(t), l = a.length, l !== Object.keys(e).length)
            return !1;
        for (u = [], u.push.apply(u, r), c = r.length, o = 0; l > o; o += 1)
            if (n(t[a[o]]) && n(e[a[o]])) {
                for (d = t[a[o]], h = e[a[o]], f = !1, s = 0; c > s; s += 1)
                    if (!(r[s][0] !== d && r[s][1] !== d || r[s][0] !== h && r[s][1] !== h)) {
                        f = !0;
                        break
                    }
                if (!f) {
                    if (u.push([d, h]), !i(d, h, u))
                        return !1;
                    u.pop()
                }
            } else if (t[a[o]] !== e[a[o]])
                return !1;
        return !0
    }
    return i(t, e, [])
}
!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = fe.type(t);
        return "function" === n || fe.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (fe.isFunction(e))
            return fe.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return fe.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (Ce.test(e))
                return fe.filter(e, t, n);
            e = fe.filter(e, t)
        }
        return fe.grep(t, function(t) {
            return fe.inArray(t, e) > -1 !== n
        })
    }
    function r(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = {};
        return fe.each(t.match(Ae) || [], function(t, n) {
            e[n] = !0
        }), e
    }
    function s() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() {
        (ie.addEventListener || "load" === t.event.type || "complete" === ie.readyState) && (s(), fe.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Ne, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? fe.parseJSON(n) : n
                } catch (r) {}
                fe.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !fe.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, i) {
        if (Pe(t)) {
            var r,
                o,
                s = fe.expando,
                a = t.nodeType,
                l = a ? fe.cache : t,
                u = a ? t[s] : t[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)
                return u || (u = a ? t[s] = ne.pop() || fe.guid++ : s), l[u] || (l[u] = a ? {} : {
                    toJSON: fe.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = fe.extend(l[u], e) : l[u].data = fe.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[fe.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[fe.camelCase(e)])) : r = o, r
        }
    }
    function d(t, e, n) {
        if (Pe(t)) {
            var i,
                r,
                o = t.nodeType,
                s = o ? fe.cache : t,
                a = o ? t[fe.expando] : fe.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    fe.isArray(e) ? e = e.concat(fe.map(e, fe.camelCase)) : e in i ? e = [e] : (e = fe.camelCase(e), e = e in i ? [e] : e.split(" ")),
                    r = e.length;
                    for (; r--;)
                        delete i[e[r]];
                    if (n ? !u(i) : !fe.isEmptyObject(i))
                        return
                }
                (n || (delete s[a].data, u(s[a]))) && (o ? fe.cleanData([t], !0) : de.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }
    function h(t, e, n, i) {
        var r,
            o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return fe.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (fe.cssNumber[e] ? "" : "px"),
            c = (fe.cssNumber[e] || "px" !== u && +l) && Me.exec(fe.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do o = o || ".5",
            c /= o,
            fe.style(t, e, c + u);
            while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    function f(t) {
        var e = ze.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;)
                n.createElement(e.pop());
        return n
    }
    function p(t, e) {
        var n,
            i,
            r = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)
                !e || fe.nodeName(i, e) ? o.push(i) : fe.merge(o, p(i, e));
        return void 0 === e || e && fe.nodeName(t, e) ? fe.merge([t], o) : o
    }
    function m(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            fe._data(n, "globalEval", !e || fe._data(e[i], "globalEval"))
    }
    function g(t) {
        Be.test(t.type) && (t.defaultChecked = t.checked)
    }
    function v(t, e, n, i, r) {
        for (var o, s, a, l, u, c, d, h = t.length, v = f(e), y = [], b = 0; h > b; b++)
            if (s = t[b], s || 0 === s)
                if ("object" === fe.type(s))
                    fe.merge(y, s.nodeType ? [s] : s);
                else if (We.test(s)) {
                    for (l = l || v.appendChild(e.createElement("div")), u = (qe.exec(s) || ["", ""])[1].toLowerCase(), d = Ye[u] || Ye._default, l.innerHTML = d[1] + fe.htmlPrefilter(s) + d[2], o = d[0]; o--;)
                        l = l.lastChild;
                    if (!de.leadingWhitespace && Ve.test(s) && y.push(e.createTextNode(Ve.exec(s)[0])), !de.tbody)
                        for (s = "table" !== u || Ue.test(s) ? "<table>" !== d[1] || Ue.test(s) ? 0 : l : l.firstChild, o = s && s.childNodes.length; o--;)
                            fe.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;)
                        l.removeChild(l.firstChild);
                    l = v.lastChild
                } else
                    y.push(e.createTextNode(s));
        for (l && v.removeChild(l), de.appendChecked || fe.grep(p(y, "input"), g), b = 0; s = y[b++];)
            if (i && fe.inArray(s, i) > -1)
                r && r.push(s);
            else if (a = fe.contains(s.ownerDocument, s), l = p(v.appendChild(s), "script"), a && m(l), n)
                for (o = 0; s = l[o++];)
                    He.test(s.type || "") && n.push(s);
        return l = null, v
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function w() {
        try {
            return ie.activeElement
        } catch (t) {}
    }
    function _(t, e, n, i, r, o) {
        var s,
            a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e)
                _(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1)
            r = b;
        else if (!r)
            return t;
        return 1 === o && (s = r, r = function(t) {
            return fe().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = fe.guid++)), t.each(function() {
            fe.event.add(this, e, r, i, n)
        })
    }
    function x(t, e) {
        return fe.nodeName(t, "table") && fe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function C(t) {
        return t.type = (null !== fe.find.attr(t, "type")) + "/" + t.type, t
    }
    function k(t) {
        var e = on.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function S(t, e) {
        if (1 === e.nodeType && fe.hasData(t)) {
            var n,
                i,
                r,
                o = fe._data(t),
                s = fe._data(e, o),
                a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++)
                        fe.event.add(e, n, a[n][i])
            }
            s.data && (s.data = fe.extend({}, s.data))
        }
    }
    function T(t, e) {
        var n,
            i,
            r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !de.noCloneEvent && e[fe.expando]) {
                r = fe._data(e);
                for (i in r.events)
                    fe.removeEvent(e, i, r.handle);
                e.removeAttribute(fe.expando)
            }
            "script" === n && e.text !== t.text ? (C(e).text = t.text, k(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), de.html5Clone && t.innerHTML && !fe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Be.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function $(t, e, n, i) {
        e = oe.apply([], e);
        var r,
            o,
            s,
            a,
            l,
            u,
            c = 0,
            d = t.length,
            h = d - 1,
            f = e[0],
            m = fe.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !de.checkClone && rn.test(f))
            return t.each(function(r) {
                var o = t.eq(r);
                m && (e[0] = f.call(this, r, o.html())),
                $(o, e, n, i)
            });
        if (d && (u = v(e, t[0].ownerDocument, !1, t, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
            for (a = fe.map(p(u, "script"), C), s = a.length; d > c; c++)
                o = u,
                c !== h && (o = fe.clone(o, !0, !0), s && fe.merge(a, p(o, "script"))),
                n.call(t[c], o, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, fe.map(a, k), c = 0; s > c; c++)
                    o = a[c],
                    He.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(l, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(sn, "")));
            u = r = null
        }
        return t
    }
    function E(t, e, n) {
        for (var i, r = e ? fe.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || fe.cleanData(p(i)),
            i.parentNode && (n && fe.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    function A(t, e) {
        var n = fe(e.createElement(t)).appendTo(e.body),
            i = fe.css(n[0], "display");
        return n.detach(), i
    }
    function F(t) {
        var e = ie,
            n = cn[t];
        return n || (n = A(t, e), "none" !== n && n || (un = (un || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (un[0].contentWindow || un[0].contentDocument).document, e.write(), e.close(), n = A(t, e), un.detach()), cn[t] = n), n
    }
    function D(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function P(t) {
        if (t in Sn)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = kn.length; n--;)
            if (t = kn[n] + e, t in Sn)
                return t
    }
    function O(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)
            i = t[s],
            i.style && (o[s] = fe._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (o[s] = fe._data(i, "olddisplay", F(i.nodeName)))) : (r = Le(i), (n && "none" !== n || !r) && fe._data(i, "olddisplay", r ? n : fe.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = t[s],
            i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function N(t, e, n) {
        var i = _n.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function j(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += fe.css(t, n + Ie[o], !0, r)),
            i ? ("content" === n && (s -= fe.css(t, "padding" + Ie[o], !0, r)), "margin" !== n && (s -= fe.css(t, "border" + Ie[o] + "Width", !0, r))) : (s += fe.css(t, "padding" + Ie[o], !0, r), "padding" !== n && (s += fe.css(t, "border" + Ie[o] + "Width", !0, r)));
        return s
    }
    function M(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = mn(t),
            s = de.boxSizing && "border-box" === fe.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = gn(t, e, o), (0 > r || null == r) && (r = t.style[e]), hn.test(r))
                return r;
            i = s && (de.boxSizingReliable() || r === t.style[e]),
            r = parseFloat(r) || 0
        }
        return r + j(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }
    function I(t, e, n, i, r) {
        return new I.prototype.init(t, e, n, i, r)
    }
    function L() {
        return t.setTimeout(function() {
            Tn = void 0
        }), Tn = fe.now()
    }
    function R(t, e) {
        var n,
            i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)
            n = Ie[r],
            i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function B(t, e, n) {
        for (var i, r = (V.tweeners[e] || []).concat(V.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function q(t, e, n) {
        var i,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            d = this,
            h = {},
            f = t.style,
            p = t.nodeType && Le(t),
            m = fe._data(t, "fxshow");
        n.queue || (a = fe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--,
                fe.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = fe.css(t, "display"), c = "none" === u ? fe._data(t, "olddisplay") || F(t.nodeName) : u, "inline" === c && "none" === fe.css(t, "float") && (de.inlineBlockNeedsLayout && "inline" !== F(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], En.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    p = !0
                }
                h[i] = m && m[i] || fe.style(t, i)
            } else
                u = void 0;
        if (fe.isEmptyObject(h))
            "inline" === ("none" === u ? F(t.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = fe._data(t, "fxshow", {}),
            o && (m.hidden = !p),
            p ? fe(t).show() : d.done(function() {
                fe(t).hide()
            }),
            d.done(function() {
                var e;
                fe._removeData(t, "fxshow");
                for (e in h)
                    fe.style(t, e, h[e])
            });
            for (i in h)
                s = B(p ? m[i] : 0, i, d),
                i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function H(t, e) {
        var n,
            i,
            r,
            o,
            s;
        for (n in t)
            if (i = fe.camelCase(n), r = e[i], o = t[n], fe.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = fe.cssHooks[i], s && "expand" in s) {
                o = s.expand(o),
                delete t[i];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = r)
            } else
                e[i] = r
    }
    function V(t, e, n) {
        var i,
            r,
            o = 0,
            s = V.prefilters.length,
            a = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r)
                    return !1;
                for (var e = Tn || L(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++)
                    u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: fe.extend({}, e),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Tn || L(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = fe.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; i > n; n++)
                        u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (H(c, u.opts.specialEasing); s > o; o++)
            if (i = V.prefilters[o].call(u, t, c, u.opts))
                return fe.isFunction(i.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(i.stop, i)), i;
        return fe.map(c, B, u), fe.isFunction(u.opts.start) && u.opts.start.call(t, u), fe.fx.timer(fe.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function z(t) {
        return fe.attr(t, "class") || ""
    }
    function Y(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i,
                r = 0,
                o = e.toLowerCase().match(Ae) || [];
            if (fe.isFunction(n))
                for (; i = o[r++];)
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function W(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, fe.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = t === Xn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function U(t, e) {
        var n,
            i,
            r = fe.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && fe.extend(!0, t, n), t
    }
    function G(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];)
            l.shift(),
            void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n)
            o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }
    function K(t, e, n, i) {
        var r,
            o,
            s,
            a,
            l,
            u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o], !s)
                        for (r in u)
                            if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t["throws"])
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: s ? d : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function J(t) {
        return t.style && t.style.display || fe.css(t, "display")
    }
    function Z(t) {
        if (!fe.contains(t.ownerDocument || ie, t))
            return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === J(t) || "hidden" === t.type)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function Q(t, e, n, i) {
        var r;
        if (fe.isArray(e))
            fe.each(e, function(e, r) {
                n || ri.test(t) ? i(t, r) : Q(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== fe.type(e))
            i(t, e);
        else
            for (r in e)
                Q(t + "[" + r + "]", e[r], n, i)
    }
    function X() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function te() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function ee(t) {
        return fe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var ne = [],
        ie = t.document,
        re = ne.slice,
        oe = ne.concat,
        se = ne.push,
        ae = ne.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        de = {},
        he = "1.12.4",
        fe = function(t, e) {
            return new fe.fn.init(t, e)
        },
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function(t, e) {
            return e.toUpperCase()
        };
    fe.fn = fe.prototype = {
        jquery: he,
        constructor: fe,
        selector: "",
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : re.call(this)
        },
        pushStack: function(t) {
            var e = fe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return fe.each(this, t)
        },
        map: function(t) {
            return this.pushStack(fe.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: ne.sort,
        splice: ne.splice
    },
    fe.extend = fe.fn.extend = function() {
        var t,
            e,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || fe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (i in r)
                    t = s[i],
                    n = r[i],
                    s !== n && (u && n && (fe.isPlainObject(n) || (e = fe.isArray(n))) ? (e ? (e = !1, o = t && fe.isArray(t) ? t : []) : o = t && fe.isPlainObject(t) ? t : {}, s[i] = fe.extend(u, o, n)) : void 0 !== n && (s[i] = n));
        return s
    },
    fe.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === fe.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === fe.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !fe.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== fe.type(t) || t.nodeType || fe.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ce.call(t, "constructor") && !ce.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (e in t)
                    return ce.call(t, e);
            for (e in t)
                ;
            return void 0 === e || ce.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? le[ue.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && fe.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i,
                r = 0;
            if (n(t))
                for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++)
                    ;
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1)
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(pe, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? fe.merge(i, "string" == typeof t ? [t] : t) : se.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (ae)
                    return ae.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i;)
                t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];)
                    t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++)
                i = !e(t[o], o),
                i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r,
                o,
                s = 0,
                a = [];
            if (n(t))
                for (r = t.length; r > s; s++)
                    o = e(t[s], s, i),
                    null != o && a.push(o);
            else
                for (s in t)
                    o = e(t[s], s, i),
                    null != o && a.push(o);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n,
                i,
                r;
            return "string" == typeof e && (r = t[e], e = t, t = r), fe.isFunction(t) ? (n = re.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(re.call(arguments)))
            }, i.guid = t.guid = t.guid || fe.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }),
    "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        le["[object " + e + "]"] = e.toLowerCase()
    });
    var ye = function(t) {
        function e(t, e, n, i) {
            var r,
                o,
                s,
                a,
                l,
                u,
                d,
                f,
                p = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((e ? e.ownerDocument || e : B) !== P && D(e), e = e || P, N)) {
                if (11 !== m && (u = ve.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s), n
                        } else if (p && (s = p.getElementById(r)) && L(e, s) && s.id === r)
                            return n.push(s), n
                    } else {
                        if (u[2])
                            return Q.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && _.getElementsByClassName && e.getElementsByClassName)
                            return Q.apply(n, e.getElementsByClassName(r)), n
                    }
                if (!(!_.qsa || Y[t + " "] || j && j.test(t))) {
                    if (1 !== m)
                        p = e,
                        f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(be, "\\$&") : e.setAttribute("id", a = R), d = S(t), o = d.length, l = he.test(a) ? "#" + a : "[id='" + a + "']"; o--;)
                            d[o] = l + " " + h(d[o]);
                        f = d.join(","),
                        p = ye.test(t) && c(e.parentNode) || e
                    }
                    if (f)
                        try {
                            return Q.apply(n, p.querySelectorAll(f)), n
                        } catch (g) {} finally {
                            a === R && e.removeAttribute("id")
                        }
                }
            }
            return $(t.replace(ae, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[R] = !0, t
        }
        function r(t) {
            var e = P.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;)
                x.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;)
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function d() {}
        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = H++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r)
                        return t(e, n, o)
            } : function(e, n, s) {
                var a,
                    l,
                    u,
                    c = [q, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s))
                            return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (u = e[R] || (e[R] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === q && a[1] === o)
                                return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s))
                                return !0
                        }
            }
        }
        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            } : t[0]
        }
        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                e(t, n[r], i);
            return i
        }
        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)
                (o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
            return s
        }
        function v(t, e, n, r, o, s) {
            return r && !r[R] && (r = v(r)), o && !o[R] && (o = v(o, s)), i(function(i, s, a, l) {
                var u,
                    c,
                    d,
                    h = [],
                    f = [],
                    p = s.length,
                    v = i || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : g(v, h, t, a, l),
                    b = n ? o || (i ? t : p || r) ? [] : s : y;
                if (n && n(y, b, a, l), r)
                    for (u = g(b, f), r(u, [], a, l), c = u.length; c--;)
                        (d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)
                                (d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)
                            (d = b[c]) && (u = o ? te(i, d) : h[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else
                    b = g(b === s ? b.splice(p, b.length) : b),
                    o ? o(null, s, b, l) : Q.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, s, !0), u = f(function(t) {
                    return te(e, t) > -1
                }, s, !0), c = [function(t, n, i) {
                    var r = !o && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = x.relative[t[a].type])
                    c = [f(p(c), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                        for (i = ++a; r > i && !x.relative[t[i].type]; i++)
                            ;
                        return v(a > 1 && p(c), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function b(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function(i, s, a, l, u) {
                    var c,
                        d,
                        h,
                        f = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = E,
                        b = i || o && x.find.TAG("*", u),
                        w = q += null == y ? 1 : Math.random() || .1,
                        _ = b.length;
                    for (u && (E = s === P || s || u); p !== _ && null != (c = b[p]); p++) {
                        if (o && c) {
                            for (d = 0, s || c.ownerDocument === P || (D(c), a = !N); h = t[d++];)
                                if (h(c, s || P, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (q = w)
                        }
                        r && ((c = !h && c) && f--, i && m.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (d = 0; h = n[d++];)
                            h(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;)
                                    m[p] || v[p] || (v[p] = J.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v),
                        u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (q = w, E = y), m
                };
            return r ? i(s) : s
        }
        var w,
            _,
            x,
            C,
            k,
            S,
            T,
            $,
            E,
            A,
            F,
            D,
            P,
            O,
            N,
            j,
            M,
            I,
            L,
            R = "sizzle" + 1 * new Date,
            B = t.document,
            q = 0,
            H = 0,
            V = n(),
            z = n(),
            Y = n(),
            W = function(t, e) {
                return t === e && (F = !0), 0
            },
            U = 1 << 31,
            G = {}.hasOwnProperty,
            K = [],
            J = K.pop,
            Z = K.push,
            Q = K.push,
            X = K.slice,
            te = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e)
                        return n;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            he = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function() {
                D()
            };
        try {
            Q.apply(K = X.call(B.childNodes), B.childNodes),
            K[B.childNodes.length].nodeType
        } catch (Ce) {
            Q = {
                apply: K.length ? function(t, e) {
                    Z.apply(t, X.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];)
                        ;
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {},
        k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        },
        D = e.setDocument = function(t) {
            var e,
                n,
                i = t ? t.ownerDocument || t : B;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, O = P.documentElement, N = !k(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), _.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = r(function(t) {
                return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = ge.test(P.getElementsByClassName), _.getById = r(function(t) {
                return O.appendChild(t).id = R, !P.getElementsByName || !P.getElementsByName(R).length
            }), _.getById ? (x.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = _.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n,
                    i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = _.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && N ? e.getElementsByClassName(t) : void 0
            }, M = [], j = [], (_.qsa = ge.test(P.querySelectorAll)) && (r(function(t) {
                O.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + ee + ")"),
                t.querySelectorAll("[id~=" + R + "-]").length || j.push("~="),
                t.querySelectorAll(":checked").length || j.push(":checked"),
                t.querySelectorAll("a#" + R + "+*").length || j.push(".#.+[+~]")
            }), r(function(t) {
                var e = P.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                j.push(",.*:")
            })), (_.matchesSelector = ge.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(t) {
                _.disconnectedMatch = I.call(t, "div"),
                I.call(t, "[s!='']:x"),
                M.push("!=", oe)
            }), j = j.length && new RegExp(j.join("|")), M = M.length && new RegExp(M.join("|")), e = ge.test(O.compareDocumentPosition), L = e || ge.test(O.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, W = e ? function(t, e) {
                if (t === e)
                    return F = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === P || t.ownerDocument === B && L(B, t) ? -1 : e === P || e.ownerDocument === B && L(B, e) ? 1 : A ? te(A, t) - te(A, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e)
                    return F = !0, 0;
                var n,
                    i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !o)
                    return t === P ? -1 : e === P ? 1 : r ? -1 : o ? 1 : A ? te(A, t) - te(A, e) : 0;
                if (r === o)
                    return s(t, e);
                for (n = t; n = n.parentNode;)
                    a.unshift(n);
                for (n = e; n = n.parentNode;)
                    l.unshift(n);
                for (; a[i] === l[i];)
                    i++;
                return i ? s(a[i], l[i]) : a[i] === B ? -1 : l[i] === B ? 1 : 0
            }, P) : P
        },
        e.matches = function(t, n) {
            return e(t, null, null, n)
        },
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== P && D(t), n = n.replace(ce, "='$1']"), !(!_.matchesSelector || !N || Y[n + " "] || M && M.test(n) || j && j.test(n)))
                try {
                    var i = I.call(t, n);
                    if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (r) {}
            return e(n, P, null, [t]).length > 0
        },
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== P && D(t), L(t, e)
        },
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== P && D(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
            return void 0 !== i ? i : _.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        },
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function(t) {
            var e,
                n = [],
                i = 0,
                r = 0;
            if (F = !_.detectDuplicates, A = !_.sortStable && t.slice(0), t.sort(W), F) {
                for (; e = t[r++];)
                    e === t[r] && (i = n.push(r));
                for (; i--;)
                    t.splice(n[i], 1)
            }
            return A = null, t
        },
        C = e.getText = function(t) {
            var e,
                n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += C(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++];)
                    n += C(e);
            return n
        },
        x = e.selectors = {
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, _e), t[3] = (t[3] || t[4] || t[5] || "").replace(we, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e,
                        n = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, _e).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = V[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && V(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u,
                            c,
                            d,
                            h,
                            f,
                            p,
                            m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (h = g, d = h[R] || (h[R] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], b = f && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)
                                    if (1 === h.nodeType && ++b && h === e) {
                                        c[t] = [q, f, b];
                                        break
                                    }
                            } else if (y && (h = e, d = h[R] || (h[R] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], b = f), b === !1)
                                for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[R] || (h[R] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[t] = [q, b]), h !== e));)
                                    ;
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r,
                        o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[R] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;)
                            i = te(t, r[s]),
                            t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = T(t.replace(ae, "$1"));
                    return r[R] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)
                            (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(we, _e), function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, _e).toLowerCase(), function(e) {
                        var n;
                        do if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                            return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === O
                },
                focus: function(t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return pe.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)
                        t.push(i);
                    return t
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            x.pseudos[w] = l(w);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d, S = e.tokenize = function(t, n) {
            var i,
                r,
                o,
                s,
                a,
                l,
                u,
                c = z[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t, l = [], u = x.preFilter; a;) {
                (!i || (r = le.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])),
                i = !1,
                (r = ue.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in x.filter)
                    !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
        }, T = e.compile = function(t, e) {
            var n,
                i = [],
                r = [],
                o = Y[t + " "];
            if (!o) {
                for (e || (e = S(t)), n = e.length; n--;)
                    o = y(e[n]),
                    o[R] ? i.push(o) : r.push(o);
                o = Y(t, b(r, i)),
                o.selector = t
            }
            return o
        }, $ = e.select = function(t, e, n, i) {
            var r,
                o,
                s,
                a,
                l,
                u = "function" == typeof t && t,
                d = !i && S(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && N && x.relative[o[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace(we, _e), e) || [])[0], !e)
                        return n;
                    u && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(we, _e), ye.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && h(o), !t)
                            return Q.apply(n, i), n;
                        break
                    }
            }
            return (u || T(t, d))(i, e, !N, n, !e || ye.test(t) && c(e.parentNode) || e), n
        }, _.sortStable = R.split("").sort(W).join("") === R, _.detectDuplicates = !!F, D(), _.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(P.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ee, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    fe.find = ye,
    fe.expr = ye.selectors,
    fe.expr[":"] = fe.expr.pseudos,
    fe.uniqueSort = fe.unique = ye.uniqueSort,
    fe.text = ye.getText,
    fe.isXMLDoc = ye.isXML,
    fe.contains = ye.contains;
    var be = function(t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && fe(t).is(n))
                        break;
                    i.push(t)
                }
            return i
        },
        we = function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        _e = fe.expr.match.needsContext,
        xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    fe.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? fe.find.matchesSelector(i, t) ? [i] : [] : fe.find.matches(t, fe.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    },
    fe.fn.extend({
        find: function(t) {
            var e,
                n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t)
                return this.pushStack(fe(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (fe.contains(i[e], this))
                            return !0
                }));
            for (e = 0; r > e; e++)
                fe.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && _e.test(t) ? fe(t) : t || [], !1).length
        }
    });
    var ke,
        Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Te = fe.fn.init = function(t, e, n) {
            var i,
                r;
            if (!t)
                return this;
            if (n = n || ke, "string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Se.exec(t), !i || !i[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof fe ? e[0] : e, fe.merge(this, fe.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ie, !0)), xe.test(i[1]) && fe.isPlainObject(e))
                        for (i in e)
                            fe.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (r = ie.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2])
                        return ke.find(t);
                    this.length = 1,
                    this[0] = r
                }
                return this.context = ie, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : fe.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(fe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), fe.makeArray(t, this))
        };
    Te.prototype = fe.fn,
    ke = fe(ie);
    var $e = /^(?:parents|prev(?:Until|All))/,
        Ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function(t) {
            var e,
                n = fe(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (fe.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = _e.test(t) || "string" != typeof t ? fe(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? fe.inArray(this[0], fe(t)) : fe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    fe.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return be(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return be(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return be(t, "nextSibling")
        },
        prevAll: function(t) {
            return be(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return be(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return be(t, "previousSibling", n)
        },
        siblings: function(t) {
            return we((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return we(t.firstChild)
        },
        contents: function(t) {
            return fe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : fe.merge([], t.childNodes)
        }
    }, function(t, e) {
        fe.fn[t] = function(n, i) {
            var r = fe.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (Ee[t] || (r = fe.uniqueSort(r)), $e.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Ae = /\S+/g;
    fe.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : fe.extend({}, t);
        var e,
            n,
            i,
            r,
            s = [],
            a = [],
            l = -1,
            u = function() {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;)
                        s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1),
                e = !1,
                r && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        fe.each(e, function(e, n) {
                            fe.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== fe.type(n) && i(n)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function() {
                    return fe.each(arguments, function(t, e) {
                        for (var n; (n = fe.inArray(e, s, n)) > -1;)
                            s.splice(n, 1),
                            l >= n && l--
                    }), this
                },
                has: function(t) {
                    return t ? fe.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    },
    fe.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return fe.Deferred(function(n) {
                            fe.each(e, function(e, o) {
                                var s = fe.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && fe.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? fe.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, fe.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                },
                r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e,
                n,
                i,
                r = 0,
                o = re.call(arguments),
                s = o.length,
                a = 1 !== s || t && fe.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : fe.Deferred(),
                u = function(t, n, i) {
                    return function(r) {
                        n[t] = this,
                        i[t] = arguments.length > 1 ? re.call(arguments) : r,
                        i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)
                    o[r] && fe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var Fe;
    fe.fn.ready = function(t) {
        return fe.ready.promise().done(t), this
    },
    fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, t !== !0 && --fe.readyWait > 0 || (Fe.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready"))))
        }
    }),
    fe.ready.promise = function(e) {
        if (!Fe)
            if (Fe = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll)
                t.setTimeout(fe.ready);
            else if (ie.addEventListener)
                ie.addEventListener("DOMContentLoaded", a),
                t.addEventListener("load", a);
            else {
                ie.attachEvent("onreadystatechange", a),
                t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && ie.documentElement
                } catch (i) {}
                n && n.doScroll && !function r() {
                    if (!fe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return t.setTimeout(r, 50)
                        }
                        s(),
                        fe.ready()
                    }
                }()
            }
        return Fe.promise(e)
    },
    fe.ready.promise();
    var De;
    for (De in fe(de))
        break;
    de.ownFirst = "0" === De,
    de.inlineBlockNeedsLayout = !1,
    fe(function() {
        var t,
            e,
            n,
            i;
        n = ie.getElementsByTagName("body")[0],
        n && n.style && (e = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }),
    function() {
        var t = ie.createElement("div");
        de.deleteExpando = !0;
        try {
            delete t.test
        } catch (e) {
            de.deleteExpando = !1
        }
        t = null
    }();
    var Pe = function(t) {
            var e = fe.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        },
        Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /([A-Z])/g;
    fe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? fe.cache[t[fe.expando]] : t[fe.expando], !!t && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }),
    fe.fn.extend({
        data: function(t, e) {
            var n,
                i,
                r,
                o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = fe.data(o), 1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(o, i, r[i])));
                    fe._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                fe.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                fe.data(this, t, e)
            }) : o ? l(o, t, fe.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                fe.removeData(this, t)
            })
        }
    }),
    fe.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = fe._data(t, e), n && (!i || fe.isArray(n) ? i = fe._data(t, e, fe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = fe.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = fe._queueHooks(t, e),
                s = function() {
                    fe.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--),
            r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return fe._data(t, n) || fe._data(t, n, {
                    empty: fe.Callbacks("once memory").add(function() {
                        fe._removeData(t, e + "queue"),
                        fe._removeData(t, n)
                    })
                })
        }
    }),
    fe.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? fe.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = fe.queue(this, t, e);
                fe._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && fe.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                fe.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n,
                i = 1,
                r = fe.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                n = fe._data(o[s], t + "queueHooks"),
                n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    }),
    function() {
        var t;
        de.shrinkWrapBlocks = function() {
            if (null != t)
                return t;
            t = !1;
            var e,
                n,
                i;
            return n = ie.getElementsByTagName("body")[0], n && n.style ? (e = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ie.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Me = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Ie = ["Top", "Right", "Bottom", "Left"],
        Le = function(t, e) {
            return t = e || t, "none" === fe.css(t, "display") || !fe.contains(t.ownerDocument, t)
        },
        Re = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === fe.type(n)) {
                r = !0;
                for (a in n)
                    Re(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, fe.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                return u.call(fe(t), n)
            })), e))
                for (; l > a; a++)
                    e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        Be = /^(?:checkbox|radio)$/i,
        qe = /<([\w:-]+)/,
        He = /^$|\/(?:java|ecma)script/i,
        Ve = /^\s+/,
        ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var t = ie.createElement("div"),
            e = ie.createDocumentFragment(),
            n = ie.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        de.leadingWhitespace = 3 === t.firstChild.nodeType,
        de.tbody = !t.getElementsByTagName("tbody").length,
        de.htmlSerialize = !!t.getElementsByTagName("link").length,
        de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        e.appendChild(n),
        de.appendChecked = n.checked,
        t.innerHTML = "<textarea>x</textarea>",
        de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        e.appendChild(t),
        n = ie.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        de.noCloneEvent = !!t.addEventListener,
        t[fe.expando] = 1,
        de.attributes = !t.getAttribute(fe.expando)
    }();
    var Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ye.optgroup = Ye.option,
    Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead,
    Ye.th = Ye.td;
    var We = /<|&#?\w+;/,
        Ue = /<tbody/i;
    !function() {
        var e,
            n,
            i = ie.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e,
            (de[e] = n in t) || (i.setAttribute(n, "t"), de[e] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ge = /^(?:input|select|textarea)$/i,
        Ke = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^(?:focusinfocus|focusoutblur)$/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o,
                s,
                a,
                l,
                u,
                c,
                d,
                h,
                f,
                p,
                m,
                g = fe._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = fe.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                    return "undefined" == typeof fe || t && fe.event.triggered === t.type ? void 0 : fe.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), e = (e || "").match(Ae) || [""], a = e.length; a--;)
                    o = Qe.exec(e[a]) || [],
                    f = m = o[1],
                    p = (o[2] || "").split(".").sort(),
                    f && (u = fe.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = fe.event.special[f] || {}, d = fe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && fe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, l), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), fe.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o,
                s,
                a,
                l,
                u,
                c,
                d,
                h,
                f,
                p,
                m,
                g = fe.hasData(t) && fe._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(Ae) || [""], u = e.length; u--;)
                    if (a = Qe.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = fe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;)
                            s = h[o],
                            !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                        l && !h.length && (d.teardown && d.teardown.call(t, p, g.handle) !== !1 || fe.removeEvent(t, f, g.handle), delete c[f])
                    } else
                        for (f in c)
                            fe.event.remove(t, f + e[u], n, i, !0);
                fe.isEmptyObject(c) && (delete g.handle, fe._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o,
                s,
                a,
                l,
                u,
                c,
                d,
                h = [i || ie],
                f = ce.call(e, "type") ? e.type : e,
                p = ce.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ze.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[fe.expando] ? e : new fe.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : fe.makeArray(n, [e]), u = fe.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !fe.isWindow(i)) {
                    for (l = u.delegateType || f, Ze.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
                        h.push(a),
                        c = a;
                    c === (i.ownerDocument || ie) && h.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (a = h[d++]) && !e.isPropagationStopped();)
                    e.type = d > 1 ? l : u.bindType || f,
                    o = (fe._data(a, "events") || {})[e.type] && fe._data(a, "handle"),
                    o && o.apply(a, n),
                    o = s && a[s],
                    o && o.apply && Pe(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), n) === !1) && Pe(i) && s && i[f] && !fe.isWindow(i)) {
                    c = i[s],
                    c && (i[s] = null),
                    fe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (m) {}
                    fe.event.triggered = void 0,
                    c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = fe.event.fix(t);
            var e,
                n,
                i,
                r,
                o,
                s = [],
                a = re.call(arguments),
                l = (fe._data(this, "events") || {})[t.type] || [],
                u = fe.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = fe.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)
                        (!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n,
                i,
                r,
                o,
                s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++)
                            o = e[n],
                            r = o.selector + " ",
                            void 0 === i[r] && (i[r] = o.needsContext ? fe(r, this).index(l) > -1 : fe.find(r, this, null, [l]).length),
                            i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[fe.expando])
                return t;
            var e,
                n,
                i,
                r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Je.test(r) ? this.mouseHooks : Ke.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new fe.Event(o), e = i.length; e--;)
                n = i[e],
                t[n] = o[n];
            return t.target || (t.target = o.srcElement || ie), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n,
                    i,
                    r,
                    o = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ie, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === w() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return fe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return fe.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = fe.extend(new fe.Event, n, {
                type: t,
                isSimulated: !0
            });
            fe.event.trigger(i, null, e),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    fe.removeEvent = ie.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    },
    fe.Event = function(t, e) {
        return this instanceof fe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && fe.extend(this, e), this.timeStamp = t && t.timeStamp || fe.now(), void (this[fe.expando] = !0)) : new fe.Event(t, e)
    },
    fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        fe.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n,
                    i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !fe.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }),
    de.submit || (fe.event.special.submit = {
        setup: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = fe.nodeName(e, "input") || fe.nodeName(e, "button") ? fe.prop(e, "form") : void 0;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), fe._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && fe.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.remove(this, "._submit")
        }
    }),
    de.change || (fe.event.special.change = {
        setup: function() {
            return Ge.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fe.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), fe.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1),
                fe.event.simulate("change", this, t)
            })), !1) : void fe.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ge.test(e.nodeName) && !fe._data(e, "change") && (fe.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || fe.event.simulate("change", this.parentNode, t)
                }), fe._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return fe.event.remove(this, "._change"), !Ge.test(this.nodeName)
        }
    }),
    de.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            fe.event.simulate(e, t.target, fe.event.fix(t))
        };
        fe.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = fe._data(i, e);
                r || i.addEventListener(t, n, !0),
                fe._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = fe._data(i, e) - 1;
                r ? fe._data(i, e, r) : (i.removeEventListener(t, n, !0), fe._removeData(i, e))
            }
        }
    }),
    fe.fn.extend({
        on: function(t, e, n, i) {
            return _(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return _(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i,
                r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj, fe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                fe.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                fe.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? fe.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Xe = / jQuery\d+="(?:null|\d+)"/g,
        tn = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        en = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nn = /<script|<style|<link/i,
        rn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        on = /^true\/(.*)/,
        sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        an = f(ie),
        ln = an.appendChild(ie.createElement("div"));
    fe.extend({
        htmlPrefilter: function(t) {
            return t.replace(en, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i,
                r,
                o,
                s,
                a,
                l = fe.contains(t.ownerDocument, t);
            if (de.html5Clone || fe.isXMLDoc(t) || !tn.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ln.innerHTML = t.outerHTML, ln.removeChild(o = ln.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || fe.isXMLDoc(t)))
                for (i = p(o), a = p(t), s = 0; null != (r = a[s]); ++s)
                    i[s] && T(r, i[s]);
            if (e)
                if (n)
                    for (a = a || p(t), i = i || p(o), s = 0; null != (r = a[s]); s++)
                        S(r, i[s]);
                else
                    S(t, o);
            return i = p(o, "script"), i.length > 0 && m(i, !l && p(t, "script")), i = a = r = null, o
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0, a = fe.expando, l = fe.cache, u = de.attributes, c = fe.event.special; null != (n = t[s]); s++)
                if ((e || Pe(n)) && (r = n[a], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), ne.push(r))
                }
        }
    }),
    fe.fn.extend({
        domManip: $,
        detach: function(t) {
            return E(this, t, !0)
        },
        remove: function(t) {
            return E(this, t)
        },
        text: function(t) {
            return Re(this, function(t) {
                return void 0 === t ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return $(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return $(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && fe.cleanData(p(t, !1)); t.firstChild;)
                    t.removeChild(t.firstChild);
                t.options && fe.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return fe.clone(this, t, e)
            })
        },
        html: function(t) {
            return Re(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Xe, "") : void 0;
                if (!("string" != typeof t || nn.test(t) || !de.htmlSerialize && tn.test(t) || !de.leadingWhitespace && Ve.test(t) || Ye[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = fe.htmlPrefilter(t);
                    try {
                        for (; i > n; n++)
                            e = this[n] || {},
                            1 === e.nodeType && (fe.cleanData(p(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return $(this, arguments, function(e) {
                var n = this.parentNode;
                fe.inArray(this, t) < 0 && (fe.cleanData(p(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }),
    fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        fe.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = fe(t), s = o.length - 1; s >= i; i++)
                n = i === s ? this : this.clone(!0),
                fe(o[i])[e](n),
                se.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var un,
        cn = {
            HTML: "block",
            BODY: "block"
        },
        dn = /^margin/,
        hn = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        fn = function(t, e, n, i) {
            var r,
                o,
                s = {};
            for (o in e)
                s[o] = t.style[o],
                t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e)
                t.style[o] = s[o];
            return r
        },
        pn = ie.documentElement;
    !function() {
        function e() {
            var e,
                c,
                d = ie.documentElement;
            d.appendChild(l),
            u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = r = a = !1,
            i = s = !0,
            t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, e = u.appendChild(ie.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)),
            u.style.display = "none",
            o = 0 === u.getClientRects().length,
            o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)),
            d.removeChild(l)
        }
        var n,
            i,
            r,
            o,
            s,
            a,
            l = ie.createElement("div"),
            u = ie.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, fe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && e(), o
            },
            boxSizingReliable: function() {
                return null == n && e(), r
            },
            pixelMarginRight: function() {
                return null == n && e(), i
            },
            pixelPosition: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                return null == n && e(), s
            },
            reliableMarginLeft: function() {
                return null == n && e(), a
            }
        }))
    }();
    var mn,
        gn,
        vn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (mn = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, gn = function(t, e, n) {
        var i,
            r,
            o,
            s,
            a = t.style;
        return n = n || mn(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || fe.contains(t.ownerDocument, t) || (s = fe.style(t, e)), n && !de.pixelMarginRight() && hn.test(s) && dn.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 === s ? s : s + ""
    }) : pn.currentStyle && (mn = function(t) {
        return t.currentStyle
    }, gn = function(t, e, n) {
        var i,
            r,
            o,
            s,
            a = t.style;
        return n = n || mn(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), hn.test(s) && !vn.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
    });
    var yn = /alpha\([^)]*\)/i,
        bn = /opacity\s*=\s*([^)]*)/i,
        wn = /^(none|table(?!-c[ea]).+)/,
        _n = new RegExp("^(" + je + ")(.*)$", "i"),
        xn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Cn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        kn = ["Webkit", "O", "Moz", "ms"],
        Sn = ie.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = gn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r,
                    o,
                    s,
                    a = fe.camelCase(e),
                    l = t.style;
                if (e = fe.cssProps[a] || (fe.cssProps[a] = P(a) || a), s = fe.cssHooks[e] || fe.cssHooks[a], void 0 === n)
                    return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                if (o = typeof n, "string" === o && (r = Me.exec(n)) && r[1] && (n = h(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (fe.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))
                    try {
                        l[e] = n
                    } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var r,
                o,
                s,
                a = fe.camelCase(e);
            return e = fe.cssProps[a] || (fe.cssProps[a] = P(a) || a), s = fe.cssHooks[e] || fe.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = gn(t, e, i)), "normal" === o && e in Cn && (o = Cn[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }),
    fe.each(["height", "width"], function(t, e) {
        fe.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? wn.test(fe.css(t, "display")) && 0 === t.offsetWidth ? fn(t, xn, function() {
                    return M(t, e, i)
                }) : M(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && mn(t);
                return N(t, n, i ? j(t, e, i, de.boxSizing && "border-box" === fe.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    de.opacity || (fe.cssHooks.opacity = {
        get: function(t, e) {
            return bn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = fe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === fe.trim(o.replace(yn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = yn.test(o) ? o.replace(yn, r) : o + " " + r)
        }
    }),
    fe.cssHooks.marginRight = D(de.reliableMarginRight, function(t, e) {
        return e ? fn(t, {
            display: "inline-block"
        }, gn, [t, "marginRight"]) : void 0
    }),
    fe.cssHooks.marginLeft = D(de.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(gn(t, "marginLeft")) || (fe.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - fn(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        fe.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[t + Ie[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        dn.test(t) || (fe.cssHooks[t + e].set = N)
    }),
    fe.fn.extend({
        css: function(t, e) {
            return Re(this, function(t, e, n) {
                var i,
                    r,
                    o = {},
                    s = 0;
                if (fe.isArray(e)) {
                    for (i = mn(t), r = e.length; r > s; s++)
                        o[e[s]] = fe.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? fe.style(t, e, n) : fe.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Le(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }),
    fe.Tween = I,
    I.prototype = {
        constructor: I,
        init: function(t, e, n, i, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || fe.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this)
        },
        run: function(t) {
            var e,
                n = I.propHooks[this.prop];
            return this.pos = e = this.options.duration ? fe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    },
    I.prototype.init.prototype = I.prototype,
    I.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = fe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                fe.fx.step[t.prop] ? fe.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[fe.cssProps[t.prop]] && !fe.cssHooks[t.prop] ? t.elem[t.prop] = t.now : fe.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    fe.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    fe.fx = I.prototype.init,
    fe.fx.step = {};
    var Tn,
        $n,
        En = /^(?:toggle|show|hide)$/,
        An = /queueHooks$/;
    fe.Animation = fe.extend(V, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return h(n.elem, t, Me.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            fe.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Ae);
            for (var n, i = 0, r = t.length; r > i; i++)
                n = t[i],
                V.tweeners[n] = V.tweeners[n] || [],
                V.tweeners[n].unshift(e)
        },
        prefilters: [q],
        prefilter: function(t, e) {
            e ? V.prefilters.unshift(t) : V.prefilters.push(t)
        }
    }),
    fe.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? fe.extend({}, t) : {
            complete: n || !n && e || fe.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !fe.isFunction(e) && e
        };
        return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            fe.isFunction(i.old) && i.old.call(this),
            i.queue && fe.dequeue(this, i.queue)
        }, i
    },
    fe.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Le).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = fe.isEmptyObject(t),
                o = fe.speed(e, n, i),
                s = function() {
                    var e = V(this, fe.extend({}, t), o);
                    (r || fe._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    o = fe.timers,
                    s = fe._data(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && An.test(r) && i(s[r]);
                for (r = o.length; r--;)
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                (e || !n) && fe.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e,
                    n = fe._data(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    o = fe.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, fe.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    fe.each(["toggle", "show", "hide"], function(t, e) {
        var n = fe.fn[e];
        fe.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, r)
        }
    }),
    fe.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        fe.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    fe.timers = [],
    fe.fx.tick = function() {
        var t,
            e = fe.timers,
            n = 0;
        for (Tn = fe.now(); n < e.length; n++)
            t = e[n],
            t() || e[n] !== t || e.splice(n--, 1);
        e.length || fe.fx.stop(),
        Tn = void 0
    },
    fe.fx.timer = function(t) {
        fe.timers.push(t),
        t() ? fe.fx.start() : fe.timers.pop()
    },
    fe.fx.interval = 13,
    fe.fx.start = function() {
        $n || ($n = t.setInterval(fe.fx.tick, fe.fx.interval))
    },
    fe.fx.stop = function() {
        t.clearInterval($n),
        $n = null
    },
    fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    fe.fn.delay = function(e, n) {
        return e = fe.fx ? fe.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r)
            }
        })
    },
    function() {
        var t,
            e = ie.createElement("input"),
            n = ie.createElement("div"),
            i = ie.createElement("select"),
            r = i.appendChild(ie.createElement("option"));
        n = ie.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = n.getElementsByTagName("a")[0],
        e.setAttribute("type", "checkbox"),
        n.appendChild(e),
        t = n.getElementsByTagName("a")[0],
        t.style.cssText = "top:1px",
        de.getSetAttribute = "t" !== n.className,
        de.style = /top/.test(t.getAttribute("style")),
        de.hrefNormalized = "/a" === t.getAttribute("href"),
        de.checkOn = !!e.value,
        de.optSelected = r.selected,
        de.enctype = !!ie.createElement("form").enctype,
        i.disabled = !0,
        de.optDisabled = !r.disabled,
        e = ie.createElement("input"),
        e.setAttribute("value", ""),
        de.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        de.radioValue = "t" === e.value
    }();
    var Fn = /\r/g,
        Dn = /[\x20\t\r\n\f]+/g;
    fe.fn.extend({
        val: function(t) {
            var e,
                n,
                i,
                r = this[0];
            {
                if (arguments.length)
                    return i = fe.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, fe(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : fe.isArray(r) && (r = fe.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return e = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Fn, "") : null == n ? "" : n)
            }
        }
    }),
    fe.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = fe.find.attr(t, "value");
                    return null != e ? e : fe.trim(fe.text(t)).replace(Dn, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (de.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && fe.nodeName(n.parentNode, "optgroup"))) {
                            if (e = fe(n).val(), o)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = fe.makeArray(e), s = r.length; s--;)
                        if (i = r[s], fe.inArray(fe.valHooks.option.get(i), o) > -1)
                            try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }),
    fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(t, e) {
                return fe.isArray(e) ? t.checked = fe.inArray(fe(t).val(), e) > -1 : void 0
            }
        },
        de.checkOn || (fe.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Pn,
        On,
        Nn = fe.expr.attrHandle,
        jn = /^(?:checked|selected)$/i,
        Mn = de.getSetAttribute,
        In = de.input;
    fe.fn.extend({
        attr: function(t, e) {
            return Re(this, fe.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                fe.removeAttr(this, t)
            })
        }
    }),
    fe.extend({
        attr: function(t, e, n) {
            var i,
                r,
                o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof t.getAttribute ? fe.prop(t, e, n) : (1 === o && fe.isXMLDoc(t) || (e = e.toLowerCase(), r = fe.attrHooks[e] || (fe.expr.match.bool.test(e) ? On : Pn)), void 0 !== n ? null === n ? void fe.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = fe.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!de.radioValue && "radio" === e && fe.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n,
                i,
                r = 0,
                o = e && e.match(Ae);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];)
                    i = fe.propFix[n] || n,
                    fe.expr.match.bool.test(n) ? In && Mn || !jn.test(n) ? t[i] = !1 : t[fe.camelCase("default-" + n)] = t[i] = !1 : fe.attr(t, n, ""),
                    t.removeAttribute(Mn ? n : i)
        }
    }),
    On = {
        set: function(t, e, n) {
            return e === !1 ? fe.removeAttr(t, n) : In && Mn || !jn.test(n) ? t.setAttribute(!Mn && fe.propFix[n] || n, n) : t[fe.camelCase("default-" + n)] = t[n] = !0, n
        }
    },
    fe.each(fe.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Nn[e] || fe.find.attr;
        Nn[e] = In && Mn || !jn.test(e) ? function(t, e, i) {
            var r,
                o;
            return i || (o = Nn[e], Nn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Nn[e] = o), r
        } : function(t, e, n) {
            return n ? void 0 : t[fe.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    In && Mn || (fe.attrHooks.value = {
        set: function(t, e, n) {
            return fe.nodeName(t, "input") ? void (t.defaultValue = e) : Pn && Pn.set(t, e, n)
        }
    }),
    Mn || (Pn = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Nn.id = Nn.name = Nn.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, fe.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Pn.set
    }, fe.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Pn.set(t, "" === e ? !1 : e, n)
        }
    }, fe.each(["width", "height"], function(t, e) {
        fe.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })),
    de.style || (fe.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ln = /^(?:input|select|textarea|button|object)$/i,
        Rn = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(t, e) {
            return Re(this, fe.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = fe.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (e) {}
            })
        }
    }),
    fe.extend({
        prop: function(t, e, n) {
            var i,
                r,
                o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && fe.isXMLDoc(t) || (e = fe.propFix[e] || e, r = fe.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = fe.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ln.test(t.nodeName) || Rn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    de.hrefNormalized || fe.each(["href", "src"], function(t, e) {
        fe.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    de.optSelected || (fe.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }),
    de.enctype || (fe.propFix.enctype = "encoding");
    var Bn = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(t) {
            var e,
                n,
                i,
                r,
                o,
                s,
                a,
                l = 0;
            if (fe.isFunction(t))
                return this.each(function(e) {
                    fe(this).addClass(t.call(this, e, z(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(Ae) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Bn, " ")) {
                        for (s = 0; o = e[s++];)
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = fe.trim(i),
                        r !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e,
                n,
                i,
                r,
                o,
                s,
                a,
                l = 0;
            if (fe.isFunction(t))
                return this.each(function(e) {
                    fe(this).removeClass(t.call(this, e, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Ae) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Bn, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;)
                                i = i.replace(" " + o + " ", " ");
                        a = fe.trim(i),
                        r !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(fe.isFunction(t) ? function(n) {
                fe(this).toggleClass(t.call(this, n, z(this), e), e)
            } : function() {
                var e,
                    i,
                    r,
                    o;
                if ("string" === n)
                    for (i = 0, r = fe(this), o = t.match(Ae) || []; e = o[i++];)
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    (void 0 === t || "boolean" === n) && (e = z(this), e && fe._data(this, "__className__", e), fe.attr(this, "class", e || t === !1 ? "" : fe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e,
                n,
                i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Bn, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    }),
    fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        fe.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    fe.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var qn = t.location,
        Hn = fe.now(),
        Vn = /\?/,
        zn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n,
            i = null,
            r = fe.trim(e + "");
        return r && !fe.trim(r.replace(zn, function(t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : fe.error("Invalid JSON: " + e)
    },
    fe.parseXML = function(e) {
        var n,
            i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + e), n
    };
    var Yn = /#.*$/,
        Wn = /([?&])_=[^&]*/,
        Un = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kn = /^(?:GET|HEAD)$/,
        Jn = /^\/\//,
        Zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qn = {},
        Xn = {},
        ti = "*/".concat("*"),
        ei = qn.href,
        ni = Zn.exec(ei.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ei,
            type: "GET",
            isLocal: Gn.test(ni[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ti,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? U(U(t, fe.ajaxSettings), e) : U(fe.ajaxSettings, t)
        },
        ajaxPrefilter: Y(Qn),
        ajaxTransport: Y(Xn),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var o,
                    d,
                    y,
                    b,
                    _,
                    C = n;
                2 !== w && (w = 2, l && t.clearTimeout(l), c = void 0, a = r || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = G(h, x, i)), b = K(h, b, x, o), o ? (h.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (fe.lastModified[s] = _), _ = x.getResponseHeader("etag"), _ && (fe.etag[s] = _)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, o = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || C) + "", o ? m.resolveWith(f, [d, C, x]) : m.rejectWith(f, [x, C, y]), x.statusCode(v), v = void 0, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, h, o ? d : y]), g.fireWith(f, [x, C]), u && (p.trigger("ajaxComplete", [x, h]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0),
            n = n || {};
            var r,
                o,
                s,
                a,
                l,
                u,
                c,
                d,
                h = fe.ajaxSetup({}, n),
                f = h.context || h,
                p = h.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
                m = fe.Deferred(),
                g = fe.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                b = {},
                w = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; e = Un.exec(a);)
                                    d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t)
                                    v[e] = [v[e], t[e]];
                            else
                                x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || ei) + "").replace(Yn, "").replace(Jn, ni[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = fe.trim(h.dataType || "*").toLowerCase().match(Ae) || [""], null == h.crossDomain && (r = Zn.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === ni[1] && r[2] === ni[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (ni[3] || ("http:" === ni[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = fe.param(h.data, h.traditional)), W(Qn, h, n, x), 2 === w)
                return x;
            u = fe.event && h.global,
            u && 0 === fe.active++ && fe.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Kn.test(h.type),
            s = h.url,
            h.hasContent || (h.data && (s = h.url += (Vn.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Wn.test(s) ? s.replace(Wn, "$1_=" + Hn++) : s + (Vn.test(s) ? "&" : "?") + "_=" + Hn++)),
            h.ifModified && (fe.lastModified[s] && x.setRequestHeader("If-Modified-Since", fe.lastModified[s]), fe.etag[s] && x.setRequestHeader("If-None-Match", fe.etag[s])),
            (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", h.contentType),
            x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ti + "; q=0.01" : "") : h.accepts["*"]);
            for (o in h.headers)
                x.setRequestHeader(o, h.headers[o]);
            if (h.beforeSend && (h.beforeSend.call(f, x, h) === !1 || 2 === w))
                return x.abort();
            _ = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[o](h[o]);
            if (c = W(Xn, h, n, x)) {
                if (x.readyState = 1, u && p.trigger("ajaxSend", [x, h]), 2 === w)
                    return x;
                h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    w = 1,
                    c.send(y, i)
                } catch (C) {
                    if (!(2 > w))
                        throw C;
                    i(-1, C)
                }
            } else
                i(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return fe.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return fe.get(t, void 0, e, "script")
        }
    }),
    fe.each(["get", "post"], function(t, e) {
        fe[e] = function(t, n, i, r) {
            return fe.isFunction(n) && (r = r || i, i = n, n = void 0), fe.ajax(fe.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, fe.isPlainObject(t) && t))
        }
    }),
    fe._evalUrl = function(t) {
        return fe.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    fe.fn.extend({
        wrapAll: function(t) {
            if (fe.isFunction(t))
                return this.each(function(e) {
                    fe(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = fe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(fe.isFunction(t) ? function(e) {
                fe(this).wrapInner(t.call(this, e))
            } : function() {
                var e = fe(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = fe.isFunction(t);
            return this.each(function(n) {
                fe(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    fe.expr.filters.hidden = function(t) {
        return de.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Z(t)
    },
    fe.expr.filters.visible = function(t) {
        return !fe.expr.filters.hidden(t)
    };
    var ii = /%20/g,
        ri = /\[\]$/,
        oi = /\r?\n/g,
        si = /^(?:submit|button|image|reset|file)$/i,
        ai = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(t, e) {
        var n,
            i = [],
            r = function(t, e) {
                e = fe.isFunction(e) ? e() : null == e ? "" : e,
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(t) || t.jquery && !fe.isPlainObject(t))
            fe.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                Q(n, t[n], e, r);
        return i.join("&").replace(ii, "+")
    },
    fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = fe.prop(this, "elements");
                return t ? fe.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !fe(this).is(":disabled") && ai.test(this.nodeName) && !si.test(t) && (this.checked || !Be.test(t))
            }).map(function(t, e) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(oi, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(oi, "\r\n")
                }
            }).get()
        }
    }),
    fe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? te() : ie.documentMode > 8 ? X() : /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || te()
    } : X;
    var li = 0,
        ui = {},
        ci = fe.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in ui)
            ui[t](void 0, !0)
    }),
    de.cors = !!ci && "withCredentials" in ci,
    ci = de.ajax = !!ci,
    ci && fe.ajaxTransport(function(e) {
        if (!e.crossDomain || de.cors) {
            var n;
            return {
                send: function(i, r) {
                    var o,
                        s = e.xhr(),
                        a = ++li;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields)
                            s[o] = e.xhrFields[o];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i)
                        void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                    s.send(e.hasContent && e.data || null),
                    n = function(t, i) {
                        var o,
                            l,
                            u;
                        if (n && (i || 4 === s.readyState))
                            if (delete ui[a], n = void 0, s.onreadystatechange = fe.noop, i)
                                4 !== s.readyState && s.abort();
                            else {
                                u = {},
                                o = s.status,
                                "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (c) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && r(o, l, u, s.getAllResponseHeaders())
                    },
                    e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = ui[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return fe.globalEval(t), t
            }
        }
    }),
    fe.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    fe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e,
                n = ie.head || fe("head")[0] || ie.documentElement;
            return {
                send: function(i, r) {
                    e = ie.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    },
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var di = [],
        hi = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = di.pop() || fe.expando + "_" + Hn++;
            return this[t] = !0, t
        }
    }),
    fe.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r,
            o,
            s,
            a = e.jsonp !== !1 && (hi.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hi.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = fe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(hi, "$1" + r) : e.jsonp !== !1 && (e.url += (Vn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || fe.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? fe(t).removeProp(r) : t[r] = o,
            e[r] && (e.jsonpCallback = n.jsonpCallback, di.push(r)),
            s && fe.isFunction(o) && o(s[0]),
            s = o = void 0
        }), "script") : void 0
    }),
    fe.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e = !1),
        e = e || ie;
        var i = xe.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = v([t], e, r), r && r.length && fe(r).remove(), fe.merge([], i.childNodes))
    };
    var fi = fe.fn.load;
    fe.fn.load = function(t, e, n) {
        if ("string" != typeof t && fi)
            return fi.apply(this, arguments);
        var i,
            r,
            o,
            s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = fe.trim(t.slice(a, t.length)), t = t.slice(0, a)), fe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && fe.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(i ? fe("<div>").append(fe.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    },
    fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        fe.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    fe.expr.filters.animated = function(t) {
        return fe.grep(fe.timers, function(e) {
            return t === e.elem
        }).length
    },
    fe.offset = {
        setOffset: function(t, e, n) {
            var i,
                r,
                o,
                s,
                a,
                l,
                u,
                c = fe.css(t, "position"),
                d = fe(t),
                h = {};
            "static" === c && (t.style.position = "relative"),
            a = d.offset(),
            o = fe.css(t, "top"),
            l = fe.css(t, "left"),
            u = ("absolute" === c || "fixed" === c) && fe.inArray("auto", [o, l]) > -1,
            u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0),
            fe.isFunction(e) && (e = e.call(t, n, fe.extend({}, a))),
            null != e.top && (h.top = e.top - a.top + s),
            null != e.left && (h.left = e.left - a.left + r),
            "using" in e ? e.using.call(t, h) : d.css(h)
        }
    },
    fe.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    fe.offset.setOffset(this, t, e)
                });
            var e,
                n,
                i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o)
                return e = o.documentElement, fe.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = ee(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
        },
        position: function() {
            if (this[0]) {
                var t,
                    e,
                    n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === fe.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), fe.nodeName(t[0], "html") || (n = t.offset()), n.top += fe.css(t[0], "borderTopWidth", !0), n.left += fe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - fe.css(i, "marginTop", !0),
                    left: e.left - n.left - fe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !fe.nodeName(t, "html") && "static" === fe.css(t, "position");)
                    t = t.offsetParent;
                return t || pn
            })
        }
    }),
    fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        fe.fn[t] = function(i) {
            return Re(this, function(t, i, r) {
                var o = ee(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void (o ? o.scrollTo(n ? fe(o).scrollLeft() : r, n ? r : fe(o).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }),
    fe.each(["top", "left"], function(t, e) {
        fe.cssHooks[e] = D(de.pixelPosition, function(t, n) {
            return n ? (n = gn(t, e), hn.test(n) ? fe(t).position()[e] + "px" : n) : void 0
        })
    }),
    fe.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        fe.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            fe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Re(this, function(e, n, i) {
                    var r;
                    return fe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? fe.css(e, n, s) : fe.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }),
    fe.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    fe.fn.size = function() {
        return this.length
    },
    fe.fn.andSelf = fe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var pi = t.jQuery,
        mi = t.$;
    return fe.noConflict = function(e) {
        return t.$ === fe && (t.$ = mi), e && t.jQuery === fe && (t.jQuery = pi), fe
    }, e || (t.jQuery = t.$ = fe), fe
}),
function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n,
        i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function(i) {
            var r,
                o,
                s,
                a,
                l,
                u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"),
                    o = i.data("ujs:submit-button-formaction") || i.attr("action"),
                    s = t(i[0]).serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null)),
                    i.data("ujs:submit-button-formmethod", null),
                    i.data("ujs:submit-button-formaction", null)
                } else
                    i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = n.csrfToken(),
                l = n.csrfParam(),
                u = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
            s && u.attr("target", s),
            u.hide().append(c).appendTo("body"),
            u.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n,
                i;
            n = t.is("button") ? "html" : "val",
            i = t.data("disable-with"),
            i !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)),
            t.prop("disabled", !0),
            t.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.prop("disabled", !1),
            t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e,
                i = t.data("confirm"),
                r = !1;
            if (!i)
                return !0;
            if (n.fire(t, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                e = n.fire(t, "confirm:complete", [r])
            }
            return r && e
        },
        blankInputs: function(e, n, i) {
            var r,
                o,
                s,
                a,
                l = t(),
                u = n || "input,textarea",
                c = e.find(u),
                d = {};
            return c.each(function() {
                r = t(this),
                r.is("input[type=radio]") ? (a = r.attr("name"), d[a] || (0 === e.find('input[type=radio]:checked[name="' + a + '"]').length && (s = e.find('input[type=radio][name="' + a + '"]'), l = l.add(s)), d[a] = a)) : (o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), o === i && (l = l.add(r)))
            }), l.length ? l : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)),
            t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            }),
            t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable"),
            t.removeData("ujs:disabled")
        }
    },
    n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableFormElement(e)
        }),
        t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableElement(e)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(t(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(t(this))
    }), i.on("click.rails", n.linkClickSelector, function(e) {
        var i = t(this),
            r = i.data("method"),
            o = i.data("params"),
            s = e.metaKey || e.ctrlKey;
        if (!n.allowAction(i))
            return n.stopEverything(e);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (s && (!r || "GET" === r) && !o)
                return !0;
            var a = n.handleRemote(i);
            return a === !1 ? n.enableElement(i) : a.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i) || !n.isRemote(i))
            return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(e) {
        var i = t(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var r,
            o,
            s = t(this),
            a = n.isRemote(s);
        if (!n.allowAction(s))
            return n.stopEverything(i);
        if (s.attr("novalidate") === e)
            if (s.data("ujs:formnovalidate-button") === e) {
                if (r = n.blankInputs(s, n.requiredInputSelector, !1), r && n.fire(s, "ajax:aborted:required", [r]))
                    return n.stopEverything(i)
            } else
                s.data("ujs:formnovalidate-button", e);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null,
            s = i.closest("form");
        0 === s.length && (s = t("#" + i.attr("form"))),
        s.data("ujs:submit-button", o),
        s.data("ujs:formnovalidate-button", i.attr("formnovalidate")),
        s.data("ujs:submit-button-formaction", i.attr("formaction")),
        s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.disableFormElements(t(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var n = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0],
                r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                o = document.createElement("div");
            o.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>",
            i.appendChild(o.childNodes[1])
        }
        return e && t.extend(n, e), this.each(function() {
            var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            n.customSelector && e.push(n.customSelector);
            var i = t(this).find(e.join(","));
            i = i.not("object object"),
            i.each(function() {
                var e = t(this);
                if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    var n = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                        i = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                        r = n / i;
                    if (!e.attr("id")) {
                        var o = "fitvid" + Math.floor(999999 * Math.random());
                        e.attr("id", o)
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"),
                    e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t) {
        return a.raw ? t : encodeURIComponent(t)
    }
    function n(t) {
        return a.raw ? t : decodeURIComponent(t)
    }
    function i(t) {
        return e(a.json ? JSON.stringify(t) : String(t))
    }
    function r(t) {
        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t = decodeURIComponent(t.replace(s, " ")), a.json ? JSON.parse(t) : t
        } catch (e) {}
    }
    function o(e, n) {
        var i = a.raw ? e : r(e);
        return t.isFunction(n) ? n(i) : i
    }
    var s = /\+/g,
        a = t.cookie = function(r, s, l) {
            if (void 0 !== s && !t.isFunction(s)) {
                if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                    var u = l.expires,
                        c = l.expires = new Date;
                    c.setTime(+c + 864e5 * u)
                }
                return document.cookie = [e(r), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0, p = h.length; p > f; f++) {
                var m = h[f].split("="),
                    g = n(m.shift()),
                    v = m.join("=");
                if (r && r === g) {
                    d = o(v, s);
                    break
                }
                r || void 0 === (v = o(v)) || (d[g] = v)
            }
            return d
        };
    a.defaults = {},
    t.removeCookie = function(e, n) {
        return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, n, {
            expires: -1
        })), !t.cookie(e))
    }
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
    "use strict";
    function t() {
        return Ni.apply(null, arguments)
    }
    function e(t) {
        Ni = t
    }
    function n(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    function i(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }
    function r(t, e) {
        var n,
            i = [];
        for (n = 0; n < t.length; ++n)
            i.push(e(t[n], n));
        return i
    }
    function o(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    function s(t, e) {
        for (var n in e)
            o(e, n) && (t[n] = e[n]);
        return o(e, "toString") && (t.toString = e.toString), o(e, "valueOf") && (t.valueOf = e.valueOf), t
    }
    function a(t, e, n, i) {
        return Ee(t, e, n, i, !0).utc()
    }
    function l() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function u(t) {
        return null == t._pf && (t._pf = l()), t._pf
    }
    function c(t) {
        if (null == t._isValid) {
            var e = u(t);
            t._isValid = !(isNaN(t._d.getTime()) || !(e.overflow < 0) || e.empty || e.invalidMonth || e.invalidWeekday || e.nullInput || e.invalidFormat || e.userInvalidated),
            t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
        }
        return t._isValid
    }
    function d(t) {
        var e = a(0 / 0);
        return null != t ? s(u(e), t) : u(e).userInvalidated = !0, e
    }
    function h(t, e) {
        var n,
            i,
            r;
        if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = u(e)), "undefined" != typeof e._locale && (t._locale = e._locale), Mi.length > 0)
            for (n in Mi)
                i = Mi[n],
                r = e[i],
                "undefined" != typeof r && (t[i] = r);
        return t
    }
    function f(e) {
        h(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : 0 / 0),
        Ii === !1 && (Ii = !0, t.updateOffset(this), Ii = !1)
    }
    function p(t) {
        return t instanceof f || null != t && null != t._isAMomentObject
    }
    function m(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }
    function g(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = m(e)), n
    }
    function v(t, e, n) {
        var i,
            r = Math.min(t.length, e.length),
            o = Math.abs(t.length - e.length),
            s = 0;
        for (i = 0; r > i; i++)
            (n && t[i] !== e[i] || !n && g(t[i]) !== g(e[i])) && s++;
        return s + o
    }
    function y() {}
    function b(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }
    function w(t) {
        for (var e, n, i, r, o = 0; o < t.length;) {
            for (r = b(t[o]).split("-"), e = r.length, n = b(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (i = _(r.slice(0, e).join("-")))
                    return i;
                if (n && n.length >= e && v(r, n, !0) >= e - 1)
                    break;
                e--
            }
            o++
        }
        return null
    }
    function _(t) {
        var e = null;
        if (!Li[t] && "undefined" != typeof module && module && module.exports)
            try {
                e = ji._abbr,
                require("./locale/" + t),
                x(e)
            } catch (n) {}
        return Li[t]
    }
    function x(t, e) {
        var n;
        return t && (n = "undefined" == typeof e ? k(t) : C(t, e), n && (ji = n)), ji._abbr
    }
    function C(t, e) {
        return null !== e ? (e.abbr = t, Li[t] = Li[t] || new y, Li[t].set(e), x(t), Li[t]) : (delete Li[t], null)
    }
    function k(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
            return ji;
        if (!n(t)) {
            if (e = _(t))
                return e;
            t = [t]
        }
        return w(t)
    }
    function S(t, e) {
        var n = t.toLowerCase();
        Ri[n] = Ri[n + "s"] = Ri[e] = t
    }
    function T(t) {
        return "string" == typeof t ? Ri[t] || Ri[t.toLowerCase()] : void 0
    }
    function $(t) {
        var e,
            n,
            i = {};
        for (n in t)
            o(t, n) && (e = T(n), e && (i[e] = t[n]));
        return i
    }
    function E(e, n) {
        return function(i) {
            return null != i ? (F(this, e, i), t.updateOffset(this, n), this) : A(this, e)
        }
    }
    function A(t, e) {
        return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
    }
    function F(t, e, n) {
        return t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }
    function D(t, e) {
        var n;
        if ("object" == typeof t)
            for (n in t)
                this.set(n, t[n]);
        else if (t = T(t), "function" == typeof this[t])
            return this[t](e);
        return this
    }
    function P(t, e, n) {
        var i = "" + Math.abs(t),
            r = e - i.length,
            o = t >= 0;
        return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }
    function O(t, e, n, i) {
        var r = i;
        "string" == typeof i && (r = function() {
            return this[i]()
        }),
        t && (Vi[t] = r),
        e && (Vi[e[0]] = function() {
            return P(r.apply(this, arguments), e[1], e[2])
        }),
        n && (Vi[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), t)
        })
    }
    function N(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }
    function j(t) {
        var e,
            n,
            i = t.match(Bi);
        for (e = 0, n = i.length; n > e; e++)
            i[e] = Vi[i[e]] ? Vi[i[e]] : N(i[e]);
        return function(r) {
            var o = "";
            for (e = 0; n > e; e++)
                o += i[e] instanceof Function ? i[e].call(r, t) : i[e];
            return o
        }
    }
    function M(t, e) {
        return t.isValid() ? (e = I(e, t.localeData()), Hi[e] = Hi[e] || j(e), Hi[e](t)) : t.localeData().invalidDate()
    }
    function I(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (qi.lastIndex = 0; i >= 0 && qi.test(t);)
            t = t.replace(qi, n),
            qi.lastIndex = 0,
            i -= 1;
        return t
    }
    function L(t) {
        return "function" == typeof t && "[object Function]" === Object.prototype.toString.call(t)
    }
    function R(t, e, n) {
        rr[t] = L(e) ? e : function(t) {
            return t && n ? n : e
        }
    }
    function B(t, e) {
        return o(rr, t) ? rr[t](e._strict, e._locale) : new RegExp(q(t))
    }
    function q(t) {
        return t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
            return e || n || i || r
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function H(t, e) {
        var n,
            i = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function(t, n) {
            n[e] = g(t)
        }), n = 0; n < t.length; n++)
            or[t[n]] = i
    }
    function V(t, e) {
        H(t, function(t, n, i, r) {
            i._w = i._w || {},
            e(t, i._w, i, r)
        })
    }
    function z(t, e, n) {
        null != e && o(or, t) && or[t](e, n._a, n, t)
    }
    function Y(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }
    function W(t) {
        return this._months[t.month()]
    }
    function U(t) {
        return this._monthsShort[t.month()]
    }
    function G(t, e, n) {
        var i,
            r,
            o;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
            if (r = a([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t))
                return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                return i;
            if (!n && this._monthsParse[i].test(t))
                return i
        }
    }
    function K(t, e) {
        var n;
        return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), Y(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
    }
    function J(e) {
        return null != e ? (K(this, e), t.updateOffset(this, !0), this) : A(this, "Month")
    }
    function Z() {
        return Y(this.year(), this.month())
    }
    function Q(t) {
        var e,
            n = t._a;
        return n && -2 === u(t).overflow && (e = n[ar] < 0 || n[ar] > 11 ? ar : n[lr] < 1 || n[lr] > Y(n[sr], n[ar]) ? lr : n[ur] < 0 || n[ur] > 24 || 24 === n[ur] && (0 !== n[cr] || 0 !== n[dr] || 0 !== n[hr]) ? ur : n[cr] < 0 || n[cr] > 59 ? cr : n[dr] < 0 || n[dr] > 59 ? dr : n[hr] < 0 || n[hr] > 999 ? hr : -1, u(t)._overflowDayOfYear && (sr > e || e > lr) && (e = lr), u(t).overflow = e), t
    }
    function X(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function te(t, e) {
        var n = !0;
        return s(function() {
            return n && (X(t + "\n" + (new Error).stack), n = !1), e.apply(this, arguments)
        }, e)
    }
    function ee(t, e) {
        mr[t] || (X(e), mr[t] = !0)
    }
    function ne(t) {
        var e,
            n,
            i = t._i,
            r = gr.exec(i);
        if (r) {
            for (u(t).iso = !0, e = 0, n = vr.length; n > e; e++)
                if (vr[e][1].exec(i)) {
                    t._f = vr[e][0];
                    break
                }
            for (e = 0, n = yr.length; n > e; e++)
                if (yr[e][1].exec(i)) {
                    t._f += (r[6] || " ") + yr[e][0];
                    break
                }
            i.match(er) && (t._f += "Z"),
            _e(t)
        } else
            t._isValid = !1
    }
    function ie(e) {
        var n = br.exec(e._i);
        return null !== n ? void (e._d = new Date(+n[1])) : (ne(e), void (e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
    }
    function re(t, e, n, i, r, o, s) {
        var a = new Date(t, e, n, i, r, o, s);
        return 1970 > t && a.setFullYear(t), a
    }
    function oe(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 1970 > t && e.setUTCFullYear(t), e
    }
    function se(t) {
        return ae(t) ? 366 : 365
    }
    function ae(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }
    function le() {
        return ae(this.year())
    }
    function ue(t, e, n) {
        var i,
            r = n - e,
            o = n - t.day();
        return o > r && (o -= 7), r - 7 > o && (o += 7), i = Ae(t).add(o, "d"), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }
    function ce(t) {
        return ue(t, this._week.dow, this._week.doy).week
    }
    function de() {
        return this._week.dow
    }
    function he() {
        return this._week.doy
    }
    function fe(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }
    function pe(t) {
        var e = ue(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }
    function me(t, e, n, i, r) {
        var o,
            s = 6 + r - i,
            a = oe(t, 0, 1 + s),
            l = a.getUTCDay();
        return r > l && (l += 7), n = null != n ? 1 * n : r, o = 1 + s + 7 * (e - 1) - l + n, {
            year: o > 0 ? t : t - 1,
            dayOfYear: o > 0 ? o : se(t - 1) + o
        }
    }
    function ge(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }
    function ve(t, e, n) {
        return null != t ? t : null != e ? e : n
    }
    function ye(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }
    function be(t) {
        var e,
            n,
            i,
            r,
            o = [];
        if (!t._d) {
            for (i = ye(t), t._w && null == t._a[lr] && null == t._a[ar] && we(t), t._dayOfYear && (r = ve(t._a[sr], i[sr]), t._dayOfYear > se(r) && (u(t)._overflowDayOfYear = !0), n = oe(r, 0, t._dayOfYear), t._a[ar] = n.getUTCMonth(), t._a[lr] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e)
                t._a[e] = o[e] = i[e];
            for (; 7 > e; e++)
                t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[ur] && 0 === t._a[cr] && 0 === t._a[dr] && 0 === t._a[hr] && (t._nextDay = !0, t._a[ur] = 0),
            t._d = (t._useUTC ? oe : re).apply(null, o),
            null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
            t._nextDay && (t._a[ur] = 24)
        }
    }
    function we(t) {
        var e,
            n,
            i,
            r,
            o,
            s,
            a;
        e = t._w,
        null != e.GG || null != e.W || null != e.E ? (o = 1, s = 4, n = ve(e.GG, t._a[sr], ue(Ae(), 1, 4).year), i = ve(e.W, 1), r = ve(e.E, 1)) : (o = t._locale._week.dow, s = t._locale._week.doy, n = ve(e.gg, t._a[sr], ue(Ae(), o, s).year), i = ve(e.w, 1), null != e.d ? (r = e.d, o > r && ++i) : r = null != e.e ? e.e + o : o),
        a = me(n, i, r, s, o),
        t._a[sr] = a.year,
        t._dayOfYear = a.dayOfYear
    }
    function _e(e) {
        if (e._f === t.ISO_8601)
            return void ne(e);
        e._a = [],
        u(e).empty = !0;
        var n,
            i,
            r,
            o,
            s,
            a = "" + e._i,
            l = a.length,
            c = 0;
        for (r = I(e._f, e._locale).match(Bi) || [], n = 0; n < r.length; n++)
            o = r[n],
            i = (a.match(B(o, e)) || [])[0],
            i && (s = a.substr(0, a.indexOf(i)), s.length > 0 && u(e).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), c += i.length),
            Vi[o] ? (i ? u(e).empty = !1 : u(e).unusedTokens.push(o), z(o, i, e)) : e._strict && !i && u(e).unusedTokens.push(o);
        u(e).charsLeftOver = l - c,
        a.length > 0 && u(e).unusedInput.push(a),
        u(e).bigHour === !0 && e._a[ur] <= 12 && e._a[ur] > 0 && (u(e).bigHour = void 0),
        e._a[ur] = xe(e._locale, e._a[ur], e._meridiem),
        be(e),
        Q(e)
    }
    function xe(t, e, n) {
        var i;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
    }
    function Ce(t) {
        var e,
            n,
            i,
            r,
            o;
        if (0 === t._f.length)
            return u(t).invalidFormat = !0, void (t._d = new Date(0 / 0));
        for (r = 0; r < t._f.length; r++)
            o = 0,
            e = h({}, t),
            null != t._useUTC && (e._useUTC = t._useUTC),
            e._f = t._f[r],
            _e(e),
            c(e) && (o += u(e).charsLeftOver, o += 10 * u(e).unusedTokens.length, u(e).score = o, (null == i || i > o) && (i = o, n = e));
        s(t, n || e)
    }
    function ke(t) {
        if (!t._d) {
            var e = $(t._i);
            t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond],
            be(t)
        }
    }
    function Se(t) {
        var e = new f(Q(Te(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }
    function Te(t) {
        var e = t._i,
            r = t._f;
        return t._locale = t._locale || k(t._l), null === e || void 0 === r && "" === e ? d({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), p(e) ? new f(Q(e)) : (n(r) ? Ce(t) : r ? _e(t) : i(e) ? t._d = e : $e(t), t))
    }
    function $e(e) {
        var o = e._i;
        void 0 === o ? e._d = new Date : i(o) ? e._d = new Date(+o) : "string" == typeof o ? ie(e) : n(o) ? (e._a = r(o.slice(0), function(t) {
            return parseInt(t, 10)
        }), be(e)) : "object" == typeof o ? ke(e) : "number" == typeof o ? e._d = new Date(o) : t.createFromInputFallback(e)
    }
    function Ee(t, e, n, i, r) {
        var o = {};
        return "boolean" == typeof n && (i = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = r, o._l = n, o._i = t, o._f = e, o._strict = i, Se(o)
    }
    function Ae(t, e, n, i) {
        return Ee(t, e, n, i, !1)
    }
    function Fe(t, e) {
        var i,
            r;
        if (1 === e.length && n(e[0]) && (e = e[0]), !e.length)
            return Ae();
        for (i = e[0], r = 1; r < e.length; ++r)
            (!e[r].isValid() || e[r][t](i)) && (i = e[r]);
        return i
    }
    function De() {
        var t = [].slice.call(arguments, 0);
        return Fe("isBefore", t)
    }
    function Pe() {
        var t = [].slice.call(arguments, 0);
        return Fe("isAfter", t)
    }
    function Oe(t) {
        var e = $(t),
            n = e.year || 0,
            i = e.quarter || 0,
            r = e.month || 0,
            o = e.week || 0,
            s = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            c = e.millisecond || 0;
        this._milliseconds = +c + 1e3 * u + 6e4 * l + 36e5 * a,
        this._days = +s + 7 * o,
        this._months = +r + 3 * i + 12 * n,
        this._data = {},
        this._locale = k(),
        this._bubble()
    }
    function Ne(t) {
        return t instanceof Oe
    }
    function je(t, e) {
        O(t, 0, 0, function() {
            var t = this.utcOffset(),
                n = "+";
            return 0 > t && (t = -t, n = "-"), n + P(~~(t / 60), 2) + e + P(~~t % 60, 2)
        })
    }
    function Me(t) {
        var e = (t || "").match(er) || [],
            n = e[e.length - 1] || [],
            i = (n + "").match(kr) || ["-", 0, 0],
            r = +(60 * i[1]) + g(i[2]);
        return "+" === i[0] ? r : -r
    }
    function Ie(e, n) {
        var r,
            o;
        return n._isUTC ? (r = n.clone(), o = (p(e) || i(e) ? +e : +Ae(e)) - +r, r._d.setTime(+r._d + o), t.updateOffset(r, !1), r) : Ae(e).local()
    }
    function Le(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }
    function Re(e, n) {
        var i,
            r = this._offset || 0;
        return null != e ? ("string" == typeof e && (e = Me(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = Le(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!n || this._changeInProgress ? en(this, Je(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Le(this)
    }
    function Be(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }
    function qe(t) {
        return this.utcOffset(0, t)
    }
    function He(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Le(this), "m")), this
    }
    function Ve() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Me(this._i)), this
    }
    function ze(t) {
        return t = t ? Ae(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0
    }
    function Ye() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function We() {
        if ("undefined" != typeof this._isDSTShifted)
            return this._isDSTShifted;
        var t = {};
        if (h(t, this), t = Te(t), t._a) {
            var e = t._isUTC ? a(t._a) : Ae(t._a);
            this._isDSTShifted = this.isValid() && v(t._a, e.toArray()) > 0
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    }
    function Ue() {
        return !this._isUTC
    }
    function Ge() {
        return this._isUTC
    }
    function Ke() {
        return this._isUTC && 0 === this._offset
    }
    function Je(t, e) {
        var n,
            i,
            r,
            s = t,
            a = null;
        return Ne(t) ? s = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (a = Sr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, s = {
            y: 0,
            d: g(a[lr]) * n,
            h: g(a[ur]) * n,
            m: g(a[cr]) * n,
            s: g(a[dr]) * n,
            ms: g(a[hr]) * n
        }) : (a = Tr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, s = {
            y: Ze(a[2], n),
            M: Ze(a[3], n),
            d: Ze(a[4], n),
            h: Ze(a[5], n),
            m: Ze(a[6], n),
            s: Ze(a[7], n),
            w: Ze(a[8], n)
        }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = Xe(Ae(s.from), Ae(s.to)), s = {}, s.ms = r.milliseconds, s.M = r.months), i = new Oe(s), Ne(t) && o(t, "_locale") && (i._locale = t._locale), i
    }
    function Ze(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }
    function Qe(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }
    function Xe(t, e) {
        var n;
        return e = Ie(e, t), t.isBefore(e) ? n = Qe(t, e) : (n = Qe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }
    function tn(t, e) {
        return function(n, i) {
            var r,
                o;
            return null === i || isNaN(+i) || (ee(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = Je(n, i), en(this, r, t), this
        }
    }
    function en(e, n, i, r) {
        var o = n._milliseconds,
            s = n._days,
            a = n._months;
        r = null == r ? !0 : r,
        o && e._d.setTime(+e._d + o * i),
        s && F(e, "Date", A(e, "Date") + s * i),
        a && K(e, A(e, "Month") + a * i),
        r && t.updateOffset(e, s || a)
    }
    function nn(t, e) {
        var n = t || Ae(),
            i = Ie(n, this).startOf("day"),
            r = this.diff(i, "days", !0),
            o = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
        return this.format(e && e[o] || this.localeData().calendar(o, this, Ae(n)))
    }
    function rn() {
        return new f(this)
    }
    function on(t, e) {
        var n;
        return e = T("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = p(t) ? t : Ae(t), +this > +t) : (n = p(t) ? +t : +Ae(t), n < +this.clone().startOf(e))
    }
    function sn(t, e) {
        var n;
        return e = T("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = p(t) ? t : Ae(t), +t > +this) : (n = p(t) ? +t : +Ae(t), +this.clone().endOf(e) < n)
    }
    function an(t, e, n) {
        return this.isAfter(t, n) && this.isBefore(e, n)
    }
    function ln(t, e) {
        var n;
        return e = T(e || "millisecond"), "millisecond" === e ? (t = p(t) ? t : Ae(t), +this === +t) : (n = +Ae(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
    }
    function un(t, e, n) {
        var i,
            r,
            o = Ie(t, this),
            s = 6e4 * (o.utcOffset() - this.utcOffset());
        return e = T(e), "year" === e || "month" === e || "quarter" === e ? (r = cn(this, o), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (i = this - o, r = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - s) / 864e5 : "week" === e ? (i - s) / 6048e5 : i), n ? r : m(r)
    }
    function cn(t, e) {
        var n,
            i,
            r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            o = t.clone().add(r, "months");
        return 0 > e - o ? (n = t.clone().add(r - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"), i = (e - o) / (n - o)), -(r + i)
    }
    function dn() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function hn() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : M(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }
    function fn(e) {
        var n = M(this, e || t.defaultFormat);
        return this.localeData().postformat(n)
    }
    function pn(t, e) {
        return this.isValid() ? Je({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }
    function mn(t) {
        return this.from(Ae(), t)
    }
    function gn(t, e) {
        return this.isValid() ? Je({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }
    function vn(t) {
        return this.to(Ae(), t)
    }
    function yn(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = k(t), null != e && (this._locale = e), this)
    }
    function bn() {
        return this._locale
    }
    function wn(t) {
        switch (t = T(t)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }
    function _n(t) {
        return t = T(t), void 0 === t || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
    }
    function xn() {
        return +this._d - 6e4 * (this._offset || 0)
    }
    function Cn() {
        return Math.floor(+this / 1e3)
    }
    function kn() {
        return this._offset ? new Date(+this) : this._d
    }
    function Sn() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }
    function Tn() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }
    function $n() {
        return c(this)
    }
    function En() {
        return s({}, u(this))
    }
    function An() {
        return u(this).overflow
    }
    function Fn(t, e) {
        O(0, [t, t.length], 0, e)
    }
    function Dn(t, e, n) {
        return ue(Ae([t, 11, 31 + e - n]), e, n).week
    }
    function Pn(t) {
        var e = ue(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == t ? e : this.add(t - e, "y")
    }
    function On(t) {
        var e = ue(this, 1, 4).year;
        return null == t ? e : this.add(t - e, "y")
    }
    function Nn() {
        return Dn(this.year(), 1, 4)
    }
    function jn() {
        var t = this.localeData()._week;
        return Dn(this.year(), t.dow, t.doy)
    }
    function Mn(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }
    function In(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }
    function Ln(t) {
        return this._weekdays[t.day()]
    }
    function Rn(t) {
        return this._weekdaysShort[t.day()]
    }
    function Bn(t) {
        return this._weekdaysMin[t.day()]
    }
    function qn(t) {
        var e,
            n,
            i;
        for (this._weekdaysParse = this._weekdaysParse || [], e = 0; 7 > e; e++)
            if (this._weekdaysParse[e] || (n = Ae([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t))
                return e
    }
    function Hn(t) {
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = In(t, this.localeData()), this.add(t - e, "d")) : e
    }
    function Vn(t) {
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }
    function zn(t) {
        return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
    }
    function Yn(t, e) {
        O(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }
    function Wn(t, e) {
        return e._meridiemParse
    }
    function Un(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }
    function Gn(t, e, n) {
        return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    function Kn(t, e) {
        e[hr] = g(1e3 * ("0." + t))
    }
    function Jn() {
        return this._isUTC ? "UTC" : ""
    }
    function Zn() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    function Qn(t) {
        return Ae(1e3 * t)
    }
    function Xn() {
        return Ae.apply(null, arguments).parseZone()
    }
    function ti(t, e, n) {
        var i = this._calendar[t];
        return "function" == typeof i ? i.call(e, n) : i
    }
    function ei(t) {
        var e = this._longDateFormat[t],
            n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }
    function ni() {
        return this._invalidDate
    }
    function ii(t) {
        return this._ordinal.replace("%d", t)
    }
    function ri(t) {
        return t
    }
    function oi(t, e, n, i) {
        var r = this._relativeTime[n];
        return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t)
    }
    function si(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
    }
    function ai(t) {
        var e,
            n;
        for (n in t)
            e = t[n],
            "function" == typeof e ? this[n] = e : this["_" + n] = e;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    function li(t, e, n, i) {
        var r = k(),
            o = a().set(i, e);
        return r[n](o, t)
    }
    function ui(t, e, n, i, r) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)
            return li(t, e, n, r);
        var o,
            s = [];
        for (o = 0; i > o; o++)
            s[o] = li(t, o, n, r);
        return s
    }
    function ci(t, e) {
        return ui(t, e, "months", 12, "month")
    }
    function di(t, e) {
        return ui(t, e, "monthsShort", 12, "month")
    }
    function hi(t, e) {
        return ui(t, e, "weekdays", 7, "day")
    }
    function fi(t, e) {
        return ui(t, e, "weekdaysShort", 7, "day")
    }
    function pi(t, e) {
        return ui(t, e, "weekdaysMin", 7, "day")
    }
    function mi() {
        var t = this._data;
        return this._milliseconds = Kr(this._milliseconds), this._days = Kr(this._days), this._months = Kr(this._months), t.milliseconds = Kr(t.milliseconds), t.seconds = Kr(t.seconds), t.minutes = Kr(t.minutes), t.hours = Kr(t.hours), t.months = Kr(t.months), t.years = Kr(t.years), this
    }
    function gi(t, e, n, i) {
        var r = Je(e, n);
        return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
    }
    function vi(t, e) {
        return gi(this, t, e, 1)
    }
    function yi(t, e) {
        return gi(this, t, e, -1)
    }
    function bi(t) {
        return 0 > t ? Math.floor(t) : Math.ceil(t)
    }
    function wi() {
        var t,
            e,
            n,
            i,
            r,
            o = this._milliseconds,
            s = this._days,
            a = this._months,
            l = this._data;
        return o >= 0 && s >= 0 && a >= 0 || 0 >= o && 0 >= s && 0 >= a || (o += 864e5 * bi(xi(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, t = m(o / 1e3), l.seconds = t % 60, e = m(t / 60), l.minutes = e % 60, n = m(e / 60), l.hours = n % 24, s += m(n / 24), r = m(_i(s)), a += r, s -= bi(xi(r)), i = m(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this
    }
    function _i(t) {
        return 4800 * t / 146097
    }
    function xi(t) {
        return 146097 * t / 4800
    }
    function Ci(t) {
        var e,
            n,
            i = this._milliseconds;
        if (t = T(t), "month" === t || "year" === t)
            return e = this._days + i / 864e5, n = this._months + _i(e), "month" === t ? n : n / 12;
        switch (e = this._days + Math.round(xi(this._months)), t) {
        case "week":
            return e / 7 + i / 6048e5;
        case "day":
            return e + i / 864e5;
        case "hour":
            return 24 * e + i / 36e5;
        case "minute":
            return 1440 * e + i / 6e4;
        case "second":
            return 86400 * e + i / 1e3;
        case "millisecond":
            return Math.floor(864e5 * e) + i;
        default:
            throw new Error("Unknown unit " + t)
        }
    }
    function ki() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
    }
    function Si(t) {
        return function() {
            return this.as(t)
        }
    }
    function Ti(t) {
        return t = T(t), this[t + "s"]()
    }
    function $i(t) {
        return function() {
            return this._data[t]
        }
    }
    function Ei() {
        return m(this.days() / 7)
    }
    function Ai(t, e, n, i, r) {
        return r.relativeTime(e || 1, !!n, t, i)
    }
    function Fi(t, e, n) {
        var i = Je(t).abs(),
            r = ho(i.as("s")),
            o = ho(i.as("m")),
            s = ho(i.as("h")),
            a = ho(i.as("d")),
            l = ho(i.as("M")),
            u = ho(i.as("y")),
            c = r < fo.s && ["s", r] || 1 === o && ["m"] || o < fo.m && ["mm", o] || 1 === s && ["h"] || s < fo.h && ["hh", s] || 1 === a && ["d"] || a < fo.d && ["dd", a] || 1 === l && ["M"] || l < fo.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
        return c[2] = e, c[3] = +t > 0, c[4] = n, Ai.apply(null, c)
    }
    function Di(t, e) {
        return void 0 === fo[t] ? !1 : void 0 === e ? fo[t] : (fo[t] = e, !0)
    }
    function Pi(t) {
        var e = this.localeData(),
            n = Fi(this, !t, e);
        return t && (n = e.pastFuture(+this, n)), e.postformat(n)
    }
    function Oi() {
        var t,
            e,
            n,
            i = po(this._milliseconds) / 1e3,
            r = po(this._days),
            o = po(this._months);
        t = m(i / 60),
        e = m(t / 60),
        i %= 60,
        t %= 60,
        n = m(o / 12),
        o %= 12;
        var s = n,
            a = o,
            l = r,
            u = e,
            c = t,
            d = i,
            h = this.asSeconds();
        return h ? (0 > h ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (u || c || d ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
    }
    var Ni,
        ji,
        Mi = t.momentProperties = [],
        Ii = !1,
        Li = {},
        Ri = {},
        Bi = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        qi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Hi = {},
        Vi = {},
        zi = /\d/,
        Yi = /\d\d/,
        Wi = /\d{3}/,
        Ui = /\d{4}/,
        Gi = /[+-]?\d{6}/,
        Ki = /\d\d?/,
        Ji = /\d{1,3}/,
        Zi = /\d{1,4}/,
        Qi = /[+-]?\d{1,6}/,
        Xi = /\d+/,
        tr = /[+-]?\d+/,
        er = /Z|[+-]\d\d:?\d\d/gi,
        nr = /[+-]?\d+(\.\d{1,3})?/,
        ir = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        rr = {},
        or = {},
        sr = 0,
        ar = 1,
        lr = 2,
        ur = 3,
        cr = 4,
        dr = 5,
        hr = 6;
    O("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    O("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    }),
    O("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    }),
    S("month", "M"),
    R("M", Ki),
    R("MM", Ki, Yi),
    R("MMM", ir),
    R("MMMM", ir),
    H(["M", "MM"], function(t, e) {
        e[ar] = g(t) - 1
    }),
    H(["MMM", "MMMM"], function(t, e, n, i) {
        var r = n._locale.monthsParse(t, i, n._strict);
        null != r ? e[ar] = r : u(n).invalidMonth = t
    });
    var fr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        pr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        mr = {};
    t.suppressDeprecationWarnings = !1;
    var gr = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        vr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
        yr = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
        br = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = te("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }),
    O(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    O(0, ["YYYY", 4], 0, "year"),
    O(0, ["YYYYY", 5], 0, "year"),
    O(0, ["YYYYYY", 6, !0], 0, "year"),
    S("year", "y"),
    R("Y", tr),
    R("YY", Ki, Yi),
    R("YYYY", Zi, Ui),
    R("YYYYY", Qi, Gi),
    R("YYYYYY", Qi, Gi),
    H(["YYYYY", "YYYYYY"], sr),
    H("YYYY", function(e, n) {
        n[sr] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e)
    }),
    H("YY", function(e, n) {
        n[sr] = t.parseTwoDigitYear(e)
    }),
    t.parseTwoDigitYear = function(t) {
        return g(t) + (g(t) > 68 ? 1900 : 2e3)
    };
    var wr = E("FullYear", !1);
    O("w", ["ww", 2], "wo", "week"),
    O("W", ["WW", 2], "Wo", "isoWeek"),
    S("week", "w"),
    S("isoWeek", "W"),
    R("w", Ki),
    R("ww", Ki, Yi),
    R("W", Ki),
    R("WW", Ki, Yi),
    V(["w", "ww", "W", "WW"], function(t, e, n, i) {
        e[i.substr(0, 1)] = g(t)
    });
    var _r = {
        dow: 0,
        doy: 6
    };
    O("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    S("dayOfYear", "DDD"),
    R("DDD", Ji),
    R("DDDD", Wi),
    H(["DDD", "DDDD"], function(t, e, n) {
        n._dayOfYear = g(t)
    }),
    t.ISO_8601 = function() {};
    var xr = te("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var t = Ae.apply(null, arguments);
            return this > t ? this : t
        }),
        Cr = te("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var t = Ae.apply(null, arguments);
            return t > this ? this : t
        });
    je("Z", ":"),
    je("ZZ", ""),
    R("Z", er),
    R("ZZ", er),
    H(["Z", "ZZ"], function(t, e, n) {
        n._useUTC = !0,
        n._tzm = Me(t)
    });
    var kr = /([\+\-]|\d\d)/gi;
    t.updateOffset = function() {};
    var Sr = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        Tr = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Je.fn = Oe.prototype;
    var $r = tn(1, "add"),
        Er = tn(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Ar = te("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    O(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    O(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    Fn("gggg", "weekYear"),
    Fn("ggggg", "weekYear"),
    Fn("GGGG", "isoWeekYear"),
    Fn("GGGGG", "isoWeekYear"),
    S("weekYear", "gg"),
    S("isoWeekYear", "GG"),
    R("G", tr),
    R("g", tr),
    R("GG", Ki, Yi),
    R("gg", Ki, Yi),
    R("GGGG", Zi, Ui),
    R("gggg", Zi, Ui),
    R("GGGGG", Qi, Gi),
    R("ggggg", Qi, Gi),
    V(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
        e[i.substr(0, 2)] = g(t)
    }),
    V(["gg", "GG"], function(e, n, i, r) {
        n[r] = t.parseTwoDigitYear(e)
    }),
    O("Q", 0, 0, "quarter"),
    S("quarter", "Q"),
    R("Q", zi),
    H("Q", function(t, e) {
        e[ar] = 3 * (g(t) - 1)
    }),
    O("D", ["DD", 2], "Do", "date"),
    S("date", "D"),
    R("D", Ki),
    R("DD", Ki, Yi),
    R("Do", function(t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }),
    H(["D", "DD"], lr),
    H("Do", function(t, e) {
        e[lr] = g(t.match(Ki)[0], 10)
    });
    var Fr = E("Date", !0);
    O("d", 0, "do", "day"),
    O("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    }),
    O("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    }),
    O("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    }),
    O("e", 0, 0, "weekday"),
    O("E", 0, 0, "isoWeekday"),
    S("day", "d"),
    S("weekday", "e"),
    S("isoWeekday", "E"),
    R("d", Ki),
    R("e", Ki),
    R("E", Ki),
    R("dd", ir),
    R("ddd", ir),
    R("dddd", ir),
    V(["dd", "ddd", "dddd"], function(t, e, n) {
        var i = n._locale.weekdaysParse(t);
        null != i ? e.d = i : u(n).invalidWeekday = t
    }),
    V(["d", "e", "E"], function(t, e, n, i) {
        e[i] = g(t)
    });
    var Dr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Pr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Or = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    O("H", ["HH", 2], 0, "hour"),
    O("h", ["hh", 2], 0, function() {
        return this.hours() % 12 || 12
    }),
    Yn("a", !0),
    Yn("A", !1),
    S("hour", "h"),
    R("a", Wn),
    R("A", Wn),
    R("H", Ki),
    R("h", Ki),
    R("HH", Ki, Yi),
    R("hh", Ki, Yi),
    H(["H", "HH"], ur),
    H(["a", "A"], function(t, e, n) {
        n._isPm = n._locale.isPM(t),
        n._meridiem = t
    }),
    H(["h", "hh"], function(t, e, n) {
        e[ur] = g(t),
        u(n).bigHour = !0
    });
    var Nr = /[ap]\.?m?\.?/i,
        jr = E("Hours", !0);
    O("m", ["mm", 2], 0, "minute"),
    S("minute", "m"),
    R("m", Ki),
    R("mm", Ki, Yi),
    H(["m", "mm"], cr);
    var Mr = E("Minutes", !1);
    O("s", ["ss", 2], 0, "second"),
    S("second", "s"),
    R("s", Ki),
    R("ss", Ki, Yi),
    H(["s", "ss"], dr);
    var Ir = E("Seconds", !1);
    O("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    O(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    O(0, ["SSS", 3], 0, "millisecond"),
    O(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    O(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    O(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    O(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    O(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    O(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    S("millisecond", "ms"),
    R("S", Ji, zi),
    R("SS", Ji, Yi),
    R("SSS", Ji, Wi);
    var Lr;
    for (Lr = "SSSS"; Lr.length <= 9; Lr += "S")
        R(Lr, Xi);
    for (Lr = "S"; Lr.length <= 9; Lr += "S")
        H(Lr, Kn);
    var Rr = E("Milliseconds", !1);
    O("z", 0, 0, "zoneAbbr"),
    O("zz", 0, 0, "zoneName");
    var Br = f.prototype;
    Br.add = $r,
    Br.calendar = nn,
    Br.clone = rn,
    Br.diff = un,
    Br.endOf = _n,
    Br.format = fn,
    Br.from = pn,
    Br.fromNow = mn,
    Br.to = gn,
    Br.toNow = vn,
    Br.get = D,
    Br.invalidAt = An,
    Br.isAfter = on,
    Br.isBefore = sn,
    Br.isBetween = an,
    Br.isSame = ln,
    Br.isValid = $n,
    Br.lang = Ar,
    Br.locale = yn,
    Br.localeData = bn,
    Br.max = Cr,
    Br.min = xr,
    Br.parsingFlags = En,
    Br.set = D,
    Br.startOf = wn,
    Br.subtract = Er,
    Br.toArray = Sn,
    Br.toObject = Tn,
    Br.toDate = kn,
    Br.toISOString = hn,
    Br.toJSON = hn,
    Br.toString = dn,
    Br.unix = Cn,
    Br.valueOf = xn,
    Br.year = wr,
    Br.isLeapYear = le,
    Br.weekYear = Pn,
    Br.isoWeekYear = On,
    Br.quarter = Br.quarters = Mn,
    Br.month = J,
    Br.daysInMonth = Z,
    Br.week = Br.weeks = fe,
    Br.isoWeek = Br.isoWeeks = pe,
    Br.weeksInYear = jn,
    Br.isoWeeksInYear = Nn,
    Br.date = Fr,
    Br.day = Br.days = Hn,
    Br.weekday = Vn,
    Br.isoWeekday = zn,
    Br.dayOfYear = ge,
    Br.hour = Br.hours = jr,
    Br.minute = Br.minutes = Mr,
    Br.second = Br.seconds = Ir,
    Br.millisecond = Br.milliseconds = Rr,
    Br.utcOffset = Re,
    Br.utc = qe,
    Br.local = He,
    Br.parseZone = Ve,
    Br.hasAlignedHourOffset = ze,
    Br.isDST = Ye,
    Br.isDSTShifted = We,
    Br.isLocal = Ue,
    Br.isUtcOffset = Ge,
    Br.isUtc = Ke,
    Br.isUTC = Ke,
    Br.zoneAbbr = Jn,
    Br.zoneName = Zn,
    Br.dates = te("dates accessor is deprecated. Use date instead.", Fr),
    Br.months = te("months accessor is deprecated. Use month instead", J),
    Br.years = te("years accessor is deprecated. Use year instead", wr),
    Br.zone = te("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Be);
    var qr = Br,
        Hr = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Vr = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        zr = "Invalid date",
        Yr = "%d",
        Wr = /\d{1,2}/,
        Ur = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Gr = y.prototype;
    Gr._calendar = Hr,
    Gr.calendar = ti,
    Gr._longDateFormat = Vr,
    Gr.longDateFormat = ei,
    Gr._invalidDate = zr,
    Gr.invalidDate = ni,
    Gr._ordinal = Yr,
    Gr.ordinal = ii,
    Gr._ordinalParse = Wr,
    Gr.preparse = ri,
    Gr.postformat = ri,
    Gr._relativeTime = Ur,
    Gr.relativeTime = oi,
    Gr.pastFuture = si,
    Gr.set = ai,
    Gr.months = W,
    Gr._months = fr,
    Gr.monthsShort = U,
    Gr._monthsShort = pr,
    Gr.monthsParse = G,
    Gr.week = ce,
    Gr._week = _r,
    Gr.firstDayOfYear = he,
    Gr.firstDayOfWeek = de,
    Gr.weekdays = Ln,
    Gr._weekdays = Dr,
    Gr.weekdaysMin = Bn,
    Gr._weekdaysMin = Or,
    Gr.weekdaysShort = Rn,
    Gr._weekdaysShort = Pr,
    Gr.weekdaysParse = qn,
    Gr.isPM = Un,
    Gr._meridiemParse = Nr,
    Gr.meridiem = Gn,
    x("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10,
                n = 1 === g(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }),
    t.lang = te("moment.lang is deprecated. Use moment.locale instead.", x),
    t.langData = te("moment.langData is deprecated. Use moment.localeData instead.", k);
    var Kr = Math.abs,
        Jr = Si("ms"),
        Zr = Si("s"),
        Qr = Si("m"),
        Xr = Si("h"),
        to = Si("d"),
        eo = Si("w"),
        no = Si("M"),
        io = Si("y"),
        ro = $i("milliseconds"),
        oo = $i("seconds"),
        so = $i("minutes"),
        ao = $i("hours"),
        lo = $i("days"),
        uo = $i("months"),
        co = $i("years"),
        ho = Math.round,
        fo = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        po = Math.abs,
        mo = Oe.prototype;
    mo.abs = mi,
    mo.add = vi,
    mo.subtract = yi,
    mo.as = Ci,
    mo.asMilliseconds = Jr,
    mo.asSeconds = Zr,
    mo.asMinutes = Qr,
    mo.asHours = Xr,
    mo.asDays = to,
    mo.asWeeks = eo,
    mo.asMonths = no,
    mo.asYears = io,
    mo.valueOf = ki,
    mo._bubble = wi,
    mo.get = Ti,
    mo.milliseconds = ro,
    mo.seconds = oo,
    mo.minutes = so,
    mo.hours = ao,
    mo.days = lo,
    mo.weeks = Ei,
    mo.months = uo,
    mo.years = co,
    mo.humanize = Pi,
    mo.toISOString = Oi,
    mo.toString = Oi,
    mo.toJSON = Oi,
    mo.locale = yn,
    mo.localeData = bn,
    mo.toIsoString = te("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Oi),
    mo.lang = Ar,
    O("X", 0, 0, "unix"),
    O("x", 0, 0, "valueOf"),
    R("x", tr),
    R("X", nr),
    H("X", function(t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }),
    H("x", function(t, e, n) {
        n._d = new Date(g(t))
    }),
    t.version = "2.10.6",
    e(Ae),
    t.fn = qr,
    t.min = De,
    t.max = Pe,
    t.utc = a,
    t.unix = Qn,
    t.months = ci,
    t.isDate = i,
    t.locale = x,
    t.invalid = d,
    t.duration = Je,
    t.isMoment = p,
    t.weekdays = hi,
    t.parseZone = Xn,
    t.localeData = k,
    t.isDuration = Ne,
    t.monthsShort = di,
    t.weekdaysMin = pi,
    t.defineLocale = C,
    t.weekdaysShort = fi,
    t.normalizeUnits = T,
    t.relativeTimeThreshold = Di;
    var go = t;
    return go
}),
function() {
    var t,
        e,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        u,
        c,
        d,
        h,
        f,
        p,
        m,
        g,
        v,
        y,
        b,
        w,
        _,
        x,
        C,
        k,
        S,
        T,
        E,
        A,
        F = [].slice;
    for (window.Twine = {}, Twine.shouldDiscardEvent = {}, i = {}, m = 0, _ = null, h = /^[a-z]\w*(\.[a-z]\w*|\[\d+\])*$/i, w = !1, x = null, n = null, Twine.reset = function(t, e) {
        var n,
            r,
            o,
            s,
            a,
            l;
        null == e && (e = document.documentElement);
        for (o in i)
            if (n = null != (l = i[o]) ? l.bindings : void 0)
                for (r = 0, s = n.length; s > r; r++)
                    a = n[r],
                    a.teardown && a.teardown();
        return i = {}, _ = t, x = e, x.bindingId = m = 1, this
    }, Twine.bind = function(t, n) {
        return null == t && (t = x), null == n && (n = Twine.context(t)), e(n, t, !0)
    }, Twine.afterBound = function(t) {
        return n ? n.push(t) : t()
    }, e = function(t, r, o) {
        var s,
            l,
            u,
            c,
            h,
            f,
            p,
            g,
            v,
            y,
            b,
            w,
            x,
            k,
            S,
            T,
            $;
        n = [],
        r.bindingId && Twine.unbind(r),
        k = Twine.bindingTypes;
        for ($ in k)
            s = k[$],
            (h = r.getAttribute($)) && (f || (f = {
                bindings: []
            }), p = s(r, t, h, f), p && f.bindings.push(p));
        for ((x = r.getAttribute("context")) && (y = d(x), "$root" === y[0] && (t = _, y = y.slice(1)), t = a(t, y) || C(t, y, {})), (f || x || o) && ((null != f ? f : f = {}).childContext = t, i[null != r.bindingId ? r.bindingId : r.bindingId = ++m] = f), u = n, S = r.children || [], g = 0, b = S.length; b > g; g++)
            c = S[g],
            e(t, c);
        for (Twine.count = m, T = u || [], v = 0, w = T.length; w > v; v++)
            (l = T[v])();
        return n = null, Twine
    }, Twine.refresh = function() {
        return w ? void 0 : (w = !0, setTimeout(Twine.refreshImmediately, 0))
    }, b = function(t) {
        var e,
            n,
            i,
            r;
        if (t.bindings)
            for (r = t.bindings, e = 0, n = r.length; n > e; e++)
                i = r[e],
                null != i.refresh && i.refresh()
    }, Twine.refreshImmediately = function() {
        var t,
            e;
        w = !1;
        for (e in i)
            t = i[e],
            b(t)
    }, Twine.change = function(t, e) {
        var n;
        return null == e && (e = !1), n = document.createEvent("HTMLEvents"), n.initEvent("change", e, !0), t.dispatchEvent(n)
    }, Twine.unbind = function(t) {
        var e,
            n,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            d;
        if (r = t.bindingId) {
            if (e = null != (c = i[r]) ? c.bindings : void 0)
                for (o = 0, a = e.length; a > o; o++)
                    u = e[o],
                    u.teardown && u.teardown();
            delete i[r],
            delete t.bindingId
        }
        for (d = t.children || [], s = 0, l = d.length; l > s; s++)
            n = d[s],
            Twine.unbind(n);
        return this
    }, Twine.context = function(t) {
        return s(t, !1)
    }, Twine.childContext = function(t) {
        return s(t, !0)
    }, s = function(t, e) {
        for (var n, r, o; t;) {
            if (t === x)
                return _;
            if (e || (t = t.parentNode), (r = t.bindingId) && (n = null != (o = i[r]) ? o.childContext : void 0))
                return n;
            e && (t = t.parentNode)
        }
    }, Twine.contextKey = function(t, e) {
        var n,
            r,
            o,
            s,
            a;
        for (s = [], n = function(t) {
            var n,
                i;
            for (n in t)
                if (i = t[n], e === i) {
                    s.unshift(n);
                    break
                }
            return e = t
        }; t && t !== x && (t = t.parentNode);)
            (o = t.bindingId) && (r = null != (a = i[o]) ? a.childContext : void 0) && n(r);
        return t === x && n(_), s.join(".")
    }, E = function(t) {
        var e,
            n;
        return e = t.nodeName.toLowerCase(), "input" === e || "textarea" === e || "select" === e ? "checkbox" === (n = t.getAttribute("type")) || "radio" === n ? "checked" : "value" : "textContent"
    }, d = function(t) {
        var e,
            n,
            i,
            r,
            o,
            s;
        for (i = [], o = t.split("."), n = 0, r = o.length; r > n; n++)
            if (t = o[n], -1 !== (s = t.indexOf("[")))
                for (i.push(t.substr(0, s)), t = t.substr(s); -1 !== (e = t.indexOf("]"));)
                    i.push(parseInt(t.substr(1, e), 10)),
                    t = t.substr(e + 1);
            else
                i.push(t);
        return i
    }, a = function(t, e) {
        var n,
            i,
            r;
        for (n = 0, r = e.length; r > n; n++)
            i = e[n],
            null != t && (t = t[i]);
        return t
    }, C = function(t, e, n) {
        var i,
            r,
            o,
            s,
            a,
            l;
        for (l = e, e = 2 <= l.length ? F.call(l, 0, i = l.length - 1) : (i = 0, []), s = l[i++], r = 0, a = e.length; a > r; r++)
            o = e[r],
            t = null != t[o] ? t[o] : t[o] = {};
        return t[s] = n
    }, T = function(t) {
        var e,
            n,
            i,
            r;
        for (i = t.attributes.length, n = 0, r = ""; i > n;)
            e = t.attributes.item(n),
            r += e.nodeName + "='" + e.textContent + "'",
            n += 1;
        return r
    }, A = function(t, e, n) {
        var i,
            r;
        if (l(t) && (r = d(t)))
            return "$root" === r[0] ? function(t, e) {
                return a(e, r)
            } : function(t) {
                return a(t, r)
            };
        try {
            return new Function(e, "with($context) { return " + t + " }")
        } catch (o) {
            throw i = o, "Twine error: Unable to create function on " + n.nodeName + " node with attributes " + T(n)
        }
    }, l = function(t) {
        return "true" !== t && "false" !== t && "null" !== t && "undefined" !== t && h.test(t)
    }, o = function(t) {
        var e;
        return e = document.createEvent("CustomEvent"), e.initCustomEvent("bindings:change", !0, !1, {}), t.dispatchEvent(e)
    }, Twine.bindingTypes = {
        bind: function(t, e, n) {
            var i,
                r,
                s,
                u,
                c,
                h,
                f,
                p,
                m,
                g,
                v,
                y;
            return y = E(t), v = t[y], c = void 0, m = void 0, r = "radio" === t.getAttribute("type"), s = A(n, "$context,$root", t), f = function() {
                var n;
                return n = s.call(t, e, _), n !== c && (c = n, n !== t[y]) ? (t[y] = r ? n === t.value : n, o(t)) : void 0
            }, l(n) ? (p = function() {
                if (r) {
                    if (!t.checked)
                        return;
                    return C(e, u, t.value)
                }
                return C(e, u, t[y])
            }, u = d(n), g = "textContent" !== y && "hidden" !== t.type, "$root" === u[0] && (e = _, u = u.slice(1)), null == v || !g && "" === v || null != (h = a(e, u)) || p(), g && (i = function() {
                return a(e, u) !== this[y] ? (p(), Twine.refreshImmediately()) : void 0
            }, $(t).on("input keyup change", i), m = function() {
                return $(t).off("input keyup change", i)
            }), {
                refresh: f,
                teardown: m
            }) : {
                refresh: f
            }
        },
        "bind-show": function(t, e, n) {
            var i,
                r;
            return i = A(n, "$context,$root", t), r = void 0, {
                refresh: function() {
                    var n;
                    return n = !i.call(t, e, _), n !== r ? $(t).toggleClass("hide", r = n) : void 0
                }
            }
        },
        "bind-class": function(t, e, n) {
            var i,
                r;
            return i = A(n, "$context,$root", t), r = {}, {
                refresh: function() {
                    var n,
                        o,
                        s;
                    o = i.call(t, e, _);
                    for (n in o)
                        s = o[n],
                        !r[n] != !s && $(t).toggleClass(n, !!s);
                    return r = o
                }
            }
        },
        "bind-attribute": function(t, e, n) {
            var i,
                r;
            return i = A(n, "$context,$root", t), r = {}, {
                refresh: function() {
                    var n,
                        o,
                        s;
                    o = i.call(t, e, _);
                    for (n in o)
                        s = o[n],
                        r[n] !== s && $(t).attr(n, s || null);
                    return r = o
                }
            }
        },
        define: function(t, e, n) {
            var i,
                r,
                o,
                s;
            i = A(n, "$context,$root", t),
            o = i.call(t, e, _);
            for (r in o)
                s = o[r],
                e[r] = s
        },
        eval: function(t, e, n) {
            var i;
            i = A(n, "$context,$root", t),
            i.call(t, e, _)
        }
    }, k = function(t, e) {
        var n;
        return n = "checked" === t || "disabled" === t || "readOnly" === t, Twine.bindingTypes["bind-" + e] = function(e, i, r) {
            var s,
                a;
            return s = A(r, "$context,$root", e), a = void 0, {
                refresh: function() {
                    var r;
                    return r = s.call(e, i, _), n && (r = !!r), r !== a ? (e[t] = a = r, "checked" === t ? o(e) : void 0) : void 0
                }
            }
        }
    }, v = ["placeholder", "checked", "disabled", "href", "title", "readOnly", "src"], u = 0, f = v.length; f > u; u++)
        t = v[u],
        k(t, t);
    for (k("innerHTML", "unsafe-html"), g = function(t) {
        return ("submit" === t.type || "a" === t.currentTarget.nodeName.toLowerCase()) && "1" !== t.currentTarget.getAttribute("allow-default")
    }, S = function(t) {
        return Twine.bindingTypes["bind-event-" + t] = function(e, n, i) {
            var r;
            return r = function(r, o) {
                var s,
                    a;
                return a = "function" == typeof (s = Twine.shouldDiscardEvent)[t] ? s[t](r) : void 0, (a || g(r)) && r.preventDefault(), a ? void 0 : (A(i, "$context,$root,event,data", e).call(e, n, _, r, o), Twine.refreshImmediately())
            }, $(e).on(t, r), {
                teardown: function() {
                    return $(e).off(t, r)
                }
            }
        }
    }, y = ["click", "dblclick", "mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "submit", "dragenter", "dragleave", "dragover", "drop", "drag", "change", "keypress", "keydown", "keyup", "input", "error", "done", "success", "fail", "blur", "focus", "load"], c = 0, p = y.length; p > c; c++)
        r = y[c],
        S(r)
}.call(this),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.affix"),
                o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, o)),
            "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i);
        var r = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = r.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.4.1",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(t, e, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed)
            return n > r ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : t - i >= r + s ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? r : o.top,
            u = a ? s : e;
        return null != n && n >= r ? "top" : null != i && l + u >= t - i ? "bottom" : !1
    },
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    },
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    },
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = r = i),
            "function" == typeof r && (r = i.top(this.$element)),
            "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented())
                    return;
                this.affixed = a,
                this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e,
    t.fn.affix.Constructor = n,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    },
    t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {},
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            e.call(n, i)
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)),
            "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.4.1",
    i.TRANSITION_DURATION = 150,
    i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")),
        o = "#" === o ? [] : o;
        var s = t(document).find(o);
        e && e.preventDefault(),
        s.length || (s = r.closest(".alert")),
        s.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e,
    t.fn.alert.Constructor = i,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    },
    t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.button"),
                o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, o)),
            "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e),
        this.options = t.extend({}, n.DEFAULTS, i),
        this.isLoading = !1
    };
    n.VERSION = "3.4.1",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text",
        null == o.resetText && i.data("resetText", i[r]()),
        setTimeout(t.proxy(function() {
            i[r](null == o[e] ? this.options[e] : o[e]),
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    },
    n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e,
    t.fn.button.Constructor = n,
    t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    },
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"),
        t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)),
            "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    },
    n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    },
    n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    },
    n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)
            return e;
        var r = "prev" == t ? -1 : 1,
            o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    },
    n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    },
    n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    },
    n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    },
    n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    },
    n.prototype.slide = function(e, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(e, r),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active"))
            return this.sliding = !1;
        var u = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), "object" == typeof o && o.length && o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"),
                r.removeClass(["active", a].join(" ")),
                l.sliding = !1,
                setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e,
    t.fn.carousel.Constructor = n,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var r = function(n) {
        var i = t(this),
            r = i.attr("href");
        r && (r = r.replace(/.*(?=#[^\s]+$)/, ""));
        var o = i.attr("data-target") || r,
            s = t(document).find(o);
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), i.data()),
                l = i.attr("data-slide-to");
            l && (a.interval = !1),
            e.call(s, a),
            l && s.data("bs.carousel").to(l),
            n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r),
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        var n,
            i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(i)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.collapse"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
            r || n.data("bs.collapse", r = new i(this, o)),
            "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e),
        this.options = t.extend({}, i.DEFAULTS, n),
        this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    i.VERSION = "3.4.1",
    i.TRANSITION_DURATION = 350,
    i.DEFAULTS = {
        toggle: !0
    },
    i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    },
    i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e,
                r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    },
    i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    },
    i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    },
    i.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    },
    i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
        e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = n,
    t.fn.collapse.Constructor = i,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    },
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== n ? t(document).find(n) : null;
        return i && i.length ? i : e.parent()
    }
    function n(n) {
        n && 3 === n.which || (t(r).remove(), t(o).each(function() {
            var i = t(this),
                r = e(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }
    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)),
            "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.4.1",
    s.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r),
                s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())
                    return;
                r.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    },
    s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = e(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)
                    return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--,
                    40 == n.which && u < l.length - 1 && u++,
                    ~u || (u = 0),
                    l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i,
    t.fn.dropdown.Constructor = s,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    },
    t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
+function(t) {
    "use strict";
    function e(e, i) {
        return this.each(function() {
            var r = t(this),
                o = r.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this, s)),
            "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    },
    n.prototype.show = function(e) {
        var i = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r),
        this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            r && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    },
    n.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    },
    n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    },
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    },
    n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    },
    n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    },
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    n.prototype.backdrop = function(e) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else
            e && e()
    },
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    },
    n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    },
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    },
    n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    },
    n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each(function(e, i) {
            var r = i.style.paddingRight,
                o = t(i).css("padding-right");
            t(i).data("padding-right", r).css("padding-right", parseFloat(o) + n + "px")
        }))
    },
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad),
        t(this.fixedContent).each(function(e, n) {
            var i = t(n).data("padding-right");
            t(n).removeData("padding-right"),
            n.style.paddingRight = i ? i : ""
        })
    },
    n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = n,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    },
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            r = i.attr("href"),
            o = i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""),
            s = t(document).find(o),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(),
        s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }),
        e.call(s, a, this)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body),
        this.$scrollElement = t(t(n).is(document.body) ? window : n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)),
            "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.4.1",
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    },
    e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, r]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    },
    e.prototype.process = function() {
        var t,
            e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)
            return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0])
            return this.activeTarget = null, this.clear();
        for (t = r.length; t--;)
            s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    },
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    },
    e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    },
    t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)),
            "string" == typeof e && r[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(document).find(i);
                this.activate(e.closest("li"), n),
                this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    },
    n.prototype.activate = function(e, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            r && r()
        }
        var s = i.find("> .active"),
            a = r && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(),
        s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e,
    t.fn.tab.Constructor = n,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var r = function(n) {
        n.preventDefault(),
        e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
+function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    },
    t(function() {
        t.support.transition = e(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e, n) {
        var i = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(i, n))
            return -1 !== t.inArray(i, o) ? Boolean(e.nodeValue.match(l) || e.nodeValue.match(u)) : !0;
        for (var r = t(n).filter(function(t, e) {
                return e instanceof RegExp
            }), s = 0, a = r.length; a > s; s++)
            if (i.match(r[s]))
                return !0;
        return !1
    }
    function n(n, i, r) {
        if (0 === n.length)
            return n;
        if (r && "function" == typeof r)
            return r(n);
        if (!document.implementation || !document.implementation.createHTMLDocument)
            return n;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = n;
        for (var s = t.map(i, function(t, e) {
                return e
            }), a = t(o.body).find("*"), l = 0, u = a.length; u > l; l++) {
            var c = a[l],
                d = c.nodeName.toLowerCase();
            if (-1 !== t.inArray(d, s))
                for (var h = t.map(c.attributes, function(t) {
                        return t
                    }), f = [].concat(i["*"] || [], i[d] || []), p = 0, m = h.length; m > p; p++)
                    e(h[p], f) || c.removeAttribute(h[p].nodeName);
            else
                c.parentNode.removeChild(c)
        }
        return o.body.innerHTML
    }
    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (i || !/destroy|hide/.test(e)) && (i || n.data("bs.tooltip", i = new c(this, r)), "string" == typeof e && i[e]())
        })
    }
    var r = ["sanitize", "whiteList", "sanitizeFn"],
        o = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        s = /^aria-[\w-]*$/i,
        a = {
            "*": ["class", "dir", "id", "lang", "role", s],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        u = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
        c = function(t, e) {
            this.type = null,
            this.options = null,
            this.enabled = null,
            this.timeout = null,
            this.hoverState = null,
            this.$element = null,
            this.inState = null,
            this.init("tooltip", t, e)
        };
    c.VERSION = "3.4.1",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
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
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: a
    },
    c.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    },
    c.prototype.getOptions = function(e) {
        var i = this.$element.data();
        for (var o in i)
            i.hasOwnProperty(o) && -1 !== t.inArray(o, r) && delete i[o];
        return e = t.extend({}, this.getDefaults(), i, e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e.sanitize && (e.template = n(e.template, e.whiteList, e.sanitizeFn)), e
    },
    c.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    },
    c.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    },
    c.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    },
    c.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    },
    c.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n)
                return;
            var i = this,
                r = this.tip(),
                o = this.getUID(this.type);
            this.setContent(),
            r.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(s);
            l && (s = s.replace(a, "") || "top"),
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this),
            this.options.container ? r.appendTo(t(document).find(this.options.container)) : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                h = r[0].offsetHeight;
            if (l) {
                var f = s,
                    p = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + h > p.bottom ? "top" : "top" == s && u.top - h < p.top ? "bottom" : "right" == s && u.right + d > p.width ? "left" : "left" == s && u.left - d < p.left ? "right" : s,
                r.removeClass(f).addClass(s)
            }
            var m = this.getCalculatedOffset(s, u, d, h);
            this.applyPlacement(m, s);
            var g = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type),
                i.hoverState = null,
                "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(c.TRANSITION_DURATION) : g()
        }
    },
    c.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(a) && (a = 0),
        e.top += s,
        e.left += a,
        t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * c.left - r + l : 2 * c.top - o + u,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(e),
        this.replaceArrow(h, i[0][f], d)
    },
    c.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    },
    c.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e),
        t.removeClass("fade in top bottom left right")
    },
    c.prototype.hide = function(e) {
        function n() {
            "in" != i.hoverState && r.detach(),
            i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
            e && e()
        }
        var i = this,
            r = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(c.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    },
    c.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    },
    c.prototype.hasContent = function() {
        return this.getTitle()
    },
    c.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : o ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, a, l, s)
    },
    c.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    },
    c.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
                l = e.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < s.left ? r.left = s.left - u : c > s.right && (r.left = s.left + s.width - c)
        }
        return r
    },
    c.prototype.getTitle = function() {
        var t,
            e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    },
    c.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    },
    c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    },
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    c.prototype.enable = function() {
        this.enabled = !0
    },
    c.prototype.disable = function() {
        this.enabled = !1
    },
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    c.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))),
        e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    },
    c.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        })
    },
    c.prototype.sanitizeHtml = function(t) {
        return n(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var d = t.fn.tooltip;
    t.fn.tooltip = i,
    t.fn.tooltip.Constructor = c,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = d, this
    }
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.popover"),
                o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.4.1",
    n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    },
    n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        if (this.options.html) {
            var i = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))),
            t.find(".popover-title").html(e),
            t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
        } else
            t.find(".popover-title").text(e),
            t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    },
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    },
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e,
    t.fn.popover.Constructor = n,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function() {
    var t,
        e,
        n,
        i,
        r,
        o,
        s;
    r = new function() {},
    s = r.toString,
    i = function(t) {
        return t !== t
    },
    n = function(t) {
        return (("undefined" != typeof window && null !== window ? window.isFinite : void 0) || global.isFinite)(t) && !i(parseFloat(t))
    },
    e = function(t) {
        return "[object Array]" === s.call(t)
    },
    o = [{
        name: "second",
        value: 1e3
    }, {
        name: "minute",
        value: 6e4
    }, {
        name: "hour",
        value: 36e5
    }, {
        name: "day",
        value: 864e5
    }, {
        name: "week",
        value: 6048e5
    }],
    t = {},
    t.intword = function(e, n, i) {
        return null == i && (i = 2), t.compactInteger(e, i)
    },
    t.compactInteger = function(t, e) {
        var n,
            i,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            d,
            h,
            f,
            p,
            m,
            g,
            v,
            y,
            b,
            w;
        if (null == e && (e = 0), e = Math.max(e, 0), a = parseInt(t, 10), h = 0 > a ? "-" : "", f = Math.abs(a), m = "" + f, l = m.length, u = [13, 10, 7, 4], n = ["T", "B", "M", "k"], 1e3 > f)
            return "" + h + m;
        if (l > u[0] + 3)
            return a.toExponential(e).replace("e+", "x10^");
        for (y = 0, b = u.length; b > y; y++)
            if (w = u[y], l >= w) {
                s = w;
                break
            }
        return i = l - s + 1, p = m.split(""), v = p.slice(0, i), o = p.slice(i, i + e + 1), g = v.join(""), r = o.join(""), r.length < e && (r += "" + Array(e - r.length + 1).join("0")), 0 === e ? c = "" + h + g + n[u.indexOf(s)] : (d = (+("" + g + "." + r)).toFixed(e), c = "" + h + d + n[u.indexOf(s)]), c
    },
    t.intcomma = t.intComma = function(e, n) {
        return null == n && (n = 0), t.formatNumber(e, n)
    },
    t.filesize = t.fileSize = function(e) {
        var n;
        return n = e >= 1073741824 ? t.formatNumber(e / 1073741824, 2, "") + " GB" : e >= 1048576 ? t.formatNumber(e / 1048576, 2, "") + " MB" : e >= 1024 ? t.formatNumber(e / 1024, 0) + " KB" : t.formatNumber(e, 0) + t.pluralize(e, " byte")
    },
    t.formatNumber = function(e, n, i, r) {
        var o,
            s,
            a,
            l,
            u,
            c,
            d;
        return null == n && (n = 0), null == i && (i = ","), null == r && (r = "."), l = function(t, e, n) {
            return n ? t.substr(0, n) + e : ""
        }, s = function(t, e, n) {
            return t.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + e)
        }, a = function(e, n, i) {
            return i ? n + t.toFixed(Math.abs(e), i).split(".")[1] : ""
        }, d = t.normalizePrecision(n), c = 0 > e && "-" || "", o = parseInt(t.toFixed(Math.abs(e || 0), d), 10) + "", u = o.length > 3 ? o.length % 3 : 0, c + l(o, i, u) + s(o, i, u) + a(e, r, d)
    },
    t.toFixed = function(e, n) {
        var i;
        return null == n && (n = t.normalizePrecision(n, 0)), i = Math.pow(10, n), (Math.round(e * i) / i).toFixed(n)
    },
    t.normalizePrecision = function(t, e) {
        return t = Math.round(Math.abs(t)), i(t) ? e : t
    },
    t.ordinal = function(t) {
        var e,
            n,
            i,
            r;
        if (i = parseInt(t, 10), 0 === i)
            return t;
        if (r = i % 100, 11 === r || 12 === r || 13 === r)
            return "" + i + "th";
        switch (n = i % 10) {
        case 1:
            e = "st";
            break;
        case 2:
            e = "nd";
            break;
        case 3:
            e = "rd";
            break;
        default:
            e = "th"
        }
        return "" + i + e
    },
    t.times = function(t, e) {
        var i,
            r,
            o;
        return null == e && (e = {}), n(t) && t >= 0 ? (i = parseFloat(t), r = ["never", "once", "twice"], null != e[i] ? "" + e[i] : "" + ((null != (o = r[i]) ? o.toString() : void 0) || i.toString() + " times")) : void 0
    },
    t.pluralize = function(t, e, n) {
        return null != t && null != e ? (null == n && (n = e + "s"), 1 === parseInt(t, 10) ? e : n) : void 0
    },
    t.truncate = function(t, e, n) {
        return null == e && (e = 100), null == n && (n = "..."), t.length > e ? t.substring(0, e - n.length) + n : t
    },
    t.truncatewords = t.truncateWords = function(t, e) {
        var n,
            i,
            r;
        for (n = t.split(" "), r = "", i = 0; e > i;)
            null != n[i] && (r += "" + n[i] + " "),
            i++;
        return n.length > e ? r += "..." : void 0
    },
    t.truncatenumber = t.boundedNumber = function(t, e, i) {
        var r;
        return null == e && (e = 100), null == i && (i = "+"), r = null, n(t) && n(e) && t > e && (r = e + i), (r || t).toString()
    },
    t.oxford = function(e, n, i) {
        var r,
            o,
            s;
        return s = e.length, 2 > s ? "" + e : 2 === s ? e.join(" and ") : (null != n && s > n ? (r = s - n, o = n, null == i && (i = ", and " + r + " " + t.pluralize(r, "other"))) : (o = -1, i = ", and " + e[s - 1]), e.slice(0, o).join(", ") + i)
    },
    t.dictionary = function(t, e, n) {
        var i,
            r,
            o,
            s;
        if (null == e && (e = " is "), null == n && (n = ", "), o = "", null != t && "object" == typeof t && "[object Array]" !== Object.prototype.toString.call(t)) {
            i = [];
            for (r in t)
                s = t[r],
                i.push("" + r + e + s);
            o = i.join(n)
        }
        return o
    },
    t.frequency = function(n, i) {
        var r,
            o,
            s;
        if (e(n))
            return r = n.length, s = t.times(r), o = 0 === r ? "" + s + " " + i : "" + i + " " + s
    },
    t.pace = function(e, n, i) {
        var r,
            s,
            a,
            l,
            u,
            c,
            d,
            h;
        if (null == i && (i = "time"), 0 === e || 0 === n)
            return "No " + t.pluralize(i);
        for (s = "Approximately", c = null, a = e / n, d = 0, h = o.length; h > d; d++)
            if (r = o[d], l = a * r.value, l > 1) {
                c = r.name;
                break
            }
        return c || (s = "Less than", l = 1, c = o[o.length - 1].name), u = Math.round(l), i = t.pluralize(u, i), "" + s + " " + u + " " + i + " per " + c
    },
    t.nl2br = function(t, e) {
        return null == e && (e = "<br/>"), t.replace(/\n/g, e)
    },
    t.br2nl = function(t, e) {
        return null == e && (e = "\r\n"), t.replace(/\<br\s*\/?\>/g, e)
    },
    t.capitalize = function(t, e) {
        return null == e && (e = !1), "" + t.charAt(0).toUpperCase() + (e ? t.slice(1).toLowerCase() : t.slice(1))
    },
    t.capitalizeAll = function(t) {
        return t.replace(/(?:^|\s)\S/g, function(t) {
            return t.toUpperCase()
        })
    },
    t.titlecase = t.titleCase = function(e) {
        var n,
            i,
            r,
            o,
            s;
        return r = /\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i, i = /\S+[A-Z]+\S*/, s = /\s+/, o = /-/, (n = function(e, a, l) {
            var u,
                c,
                d,
                h,
                f,
                p;
            for (null == a && (a = !1), null == l && (l = !0), d = [], c = e.split(a ? o : s), u = f = 0, p = c.length; p > f; u = ++f)
                h = c[u],
                d.push(-1 === h.indexOf("-") ? !l || 0 !== u && u !== c.length - 1 ? i.test(h) ? h : r.test(h) ? h.toLowerCase() : t.capitalize(h) : i.test(h) ? h : t.capitalize(h) : n(h, !0, 0 === u || u === c.length - 1));
            return d.join(a ? "-" : " ")
        })(e)
    },
    this.Humanize = t,
    "undefined" != typeof module && null !== module && (module.exports = t)
}.call(this),
function(t) {
    function e(t, e, r) {
        var o = t[0],
            s = /er/.test(r) ? g : /bl/.test(r) ? p : h,
            a = r == v ? {
                checked: o[h],
                disabled: o[p],
                indeterminate: "true" == t.attr(g) || "false" == t.attr(m)
            } : o[s];
        if (/^(ch|di|in)/.test(r) && !a)
            n(t, s);
        else if (/^(un|en|de)/.test(r) && a)
            i(t, s);
        else if (r == v)
            for (var l in a)
                a[l] ? n(t, l, !0) : i(t, l, !0);
        else
            e && "toggle" != r || (e || t[C]("ifClicked"), a ? o[y] !== d && i(t, s) : n(t, s))
    }
    function n(e, n, r) {
        var c = e[0],
            v = e.parent(),
            b = n == h,
            w = n == g,
            C = n == p,
            k = w ? m : b ? f : "enabled",
            T = o(e, k + s(c[y])),
            $ = o(e, n + s(c[y]));
        if (c[n] !== !0) {
            if (!r && n == h && c[y] == d && c.name) {
                var E = e.closest("form"),
                    A = 'input[name="' + c.name + '"]';
                A = E.length ? E.find(A) : t(A),
                A.each(function() {
                    this !== c && t(this).data(l) && i(t(this), n)
                })
            }
            w ? (c[n] = !0, c[h] && i(e, h, "force")) : (r || (c[n] = !0), b && c[g] && i(e, g, !1)),
            a(e, b, n, r)
        }
        c[p] && o(e, S, !0) && v.find("." + u).css(S, "default"),
        v[_]($ || o(e, n) || ""),
        v.attr("role") && !w && v.attr("aria-" + (C ? p : h), "true"),
        v[x](T || o(e, k) || "")
    }
    function i(t, e, n) {
        var i = t[0],
            r = t.parent(),
            l = e == h,
            c = e == g,
            d = e == p,
            v = c ? m : l ? f : "enabled",
            b = o(t, v + s(i[y])),
            w = o(t, e + s(i[y]));
        i[e] !== !1 && ((c || !n || "force" == n) && (i[e] = !1), a(t, l, v, n)),
        !i[p] && o(t, S, !0) && r.find("." + u).css(S, "pointer"),
        r[x](w || o(t, e) || ""),
        r.attr("role") && !c && r.attr("aria-" + (d ? p : h), "false"),
        r[_](b || o(t, v) || "")
    }
    function r(e, n) {
        e.data(l) && (e.parent().html(e.attr("style", e.data(l).s || "")), n && e[C](n), e.off(".i").unwrap(), t(k + '[for="' + e[0].id + '"]').add(e.closest(k)).off(".i"))
    }
    function o(t, e, n) {
        return t.data(l) ? t.data(l).o[e + (n ? "" : "Class")] : void 0
    }
    function s(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    function a(t, e, n, i) {
        i || (e && t[C]("ifToggled"), t[C]("ifChanged")[C]("if" + s(n)))
    }
    var l = "iCheck",
        u = l + "-helper",
        c = "checkbox",
        d = "radio",
        h = "checked",
        f = "un" + h,
        p = "disabled",
        m = "determinate",
        g = "in" + m,
        v = "update",
        y = "type",
        b = "click",
        w = "touchbegin.i touchend.i",
        _ = "addClass",
        x = "removeClass",
        C = "trigger",
        k = "label",
        S = "cursor",
        T = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    t.fn[l] = function(o, s) {
        var a = 'input[type="' + c + '"], input[type="' + d + '"]',
            f = t(),
            m = function(e) {
                e.each(function() {
                    var e = t(this);
                    f = f.add(e.is(a) ? e : e.find(a))
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(o))
            return o = o.toLowerCase(), m(this), f.each(function() {
                var n = t(this);
                "destroy" == o ? r(n, "ifDestroyed") : e(n, !0, o),
                t.isFunction(s) && s()
            });
        if ("object" != typeof o && o)
            return this;
        var S = t.extend({
                checkedClass: h,
                disabledClass: p,
                indeterminateClass: g,
                labelHover: !0
            }, o),
            $ = S.handle,
            E = S.hoverClass || "hover",
            A = S.focusClass || "focus",
            F = S.activeClass || "active",
            D = !!S.labelHover,
            P = S.labelHoverClass || "hover",
            O = 0 | ("" + S.increaseArea).replace("%", "");
        return ($ == c || $ == d) && (a = 'input[type="' + $ + '"]'), -50 > O && (O = -50), m(this), f.each(function() {
            var o = t(this);
            r(o);
            var s,
                a = this,
                f = a.id,
                m = -O + "%",
                g = 100 + 2 * O + "%",
                $ = {
                    position: "absolute",
                    top: m,
                    left: m,
                    display: "block",
                    width: g,
                    height: g,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                },
                N = T ? {
                    position: "absolute",
                    visibility: "hidden"
                } : O ? $ : {
                    position: "absolute",
                    opacity: 0
                },
                j = a[y] == c ? S.checkboxClass || "i" + c : S.radioClass || "i" + d,
                M = t(k + '[for="' + f + '"]').add(o.closest(k)),
                I = !!S.aria,
                L = l + "-" + Math.random().toString(36).substr(2, 6),
                R = '<div class="' + j + '" ' + (I ? 'role="' + a[y] + '" ' : "");
            I && M.each(function() {
                R += 'aria-labelledby="',
                this.id ? R += this.id : (this.id = L, R += L),
                R += '"'
            }),
            R = o.wrap(R + "/>")[C]("ifCreated").parent().append(S.insert),
            s = t('<ins class="' + u + '"/>').css($).appendTo(R),
            o.data(l, {
                o: S,
                s: o.attr("style")
            }).css(N),
            !!S.inheritClass && R[_](a.className || ""),
            !!S.inheritID && f && R.attr("id", l + "-" + f),
            "static" == R.css("position") && R.css("position", "relative"),
            e(o, !0, v),
            M.length && M.on(b + ".i mouseover.i mouseout.i " + w, function(n) {
                var i = n[y],
                    r = t(this);
                if (!a[p]) {
                    if (i == b) {
                        if (t(n.target).is("a"))
                            return;
                        e(o, !1, !0)
                    } else
                        D && (/ut|nd/.test(i) ? (R[x](E), r[x](P)) : (R[_](E), r[_](P)));
                    if (!T)
                        return !1;
                    n.stopPropagation()
                }
            }),
            o.on(b + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(t) {
                var e = t[y],
                    r = t.keyCode;
                return e == b ? !1 : "keydown" == e && 32 == r ? (a[y] == d && a[h] || (a[h] ? i(o, h) : n(o, h)), !1) : void ("keyup" == e && a[y] == d ? !a[h] && n(o, h) : /us|ur/.test(e) && R["blur" == e ? x : _](A))
            }),
            s.on(b + " mousedown mouseup mouseover mouseout " + w, function(t) {
                var n = t[y],
                    i = /wn|up/.test(n) ? F : E;
                if (!a[p]) {
                    if (n == b ? e(o, !1, !0) : (/wn|er|in/.test(n) ? R[_](i) : R[x](i + " " + F), M.length && D && i == E && M[/ut|nd/.test(n) ? x : _](P)), !T)
                        return !1;
                    t.stopPropagation()
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
$.extend({
    getQueryParameters: function(t) {
        return t || (t = document.location.search), t ? t.replace(/(^\?)/, "").split("&").map(function(t) {
            t = t.split("=");
            var e = decodeURIComponent(t[0]);
            return this[e] = decodeURIComponent(t[1]), this
        }.bind({}))[0] : {}
    }
}),
window.ParsleyExtend = {
    asyncValidators: {
        kjb_offer_checkout_email_validator: {
            fn: function(t) {
                return 200 !== t.status && t.responseJSON && t.responseJSON.message && window.ParsleyValidator.addMessage("en", "remote", t.responseJSON.message), 200 === t.status
            },
            url: "checkout/validate_email",
            options: {
                data: {
                    preview: function() {
                        var t = new URLSearchParams(location.search);
                        if (null !== document.querySelector(".offer-checkout"))
                            return "true" === t.get("preview")
                    }()
                }
            }
        },
        kjb_email_validator: {
            fn: function(t) {
                return 200 !== t.status && t.responseJSON && t.responseJSON.message && window.ParsleyValidator.addMessage("en", "remote", t.responseJSON.message), 200 === t.status
            },
            url: "/email_validations",
            options: {
                type: "POST"
            }
        }
    }
},
window.ParsleyExtend = window.ParsleyExtend || {},
window.ParsleyExtend = $.extend(window.ParsleyExtend, {
    asyncSupport: !0,
    asyncValidators: $.extend({
        "default": {
            fn: function(t) {
                return "resolved" === t.state()
            },
            url: !1
        },
        reverse: {
            fn: function(t) {
                return "rejected" === t.state()
            },
            url: !1
        }
    }, window.ParsleyExtend.asyncValidators),
    addAsyncValidator: function(t, e, n, i) {
        return this.asyncValidators[t.toLowerCase()] = {
            fn: e,
            url: n || !1,
            options: i || {}
        }, this
    },
    asyncValidate: function() {
        return "ParsleyForm" === this.__class__ ? this._asyncValidateForm.apply(this, arguments) : this._asyncValidateField.apply(this, arguments)
    },
    asyncIsValid: function() {
        return "ParsleyField" === this.__class__ ? this._asyncIsValidField.apply(this, arguments) : this._asyncIsValidForm.apply(this, arguments)
    },
    onSubmitValidate: function(t) {
        var e = this;
        if (!0 !== t.parsley)
            return this.submitEvent = $.extend(!0, {}, t), t instanceof $.Event && (t.stopImmediatePropagation(), t.preventDefault()), this._asyncValidateForm(void 0, t).done(function() {
                e.submitEvent.isDefaultPrevented() || e.$element.trigger($.extend($.Event("submit"), {
                    parsley: !0
                }))
            })
    },
    eventValidate: function(t) {
        new RegExp("key").test(t.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.asyncValidate())
    },
    _asyncValidateForm: function(t) {
        var e = this,
            n = [];
        this._refreshFields(),
        $.emit("parsley:form:validate", this);
        for (var i = 0; i < this.fields.length; i++)
            t && t !== this.fields[i].options.group || n.push(this.fields[i]._asyncValidateField());
        return $.when.apply($, n).done(function() {
            $.emit("parsley:form:success", e)
        }).fail(function() {
            $.emit("parsley:form:error", e)
        }).always(function() {
            $.emit("parsley:form:validated", e)
        })
    },
    _asyncIsValidForm: function(t, e) {
        var n = [];
        this._refreshFields();
        for (var i = 0; i < this.fields.length; i++)
            t && t !== this.fields[i].options.group || n.push(this.fields[i]._asyncIsValidField(e));
        return $.when.apply($, n)
    },
    _asyncValidateField: function(t) {
        var e = this;
        return $.emit("parsley:field:validate", this), this._asyncIsValidField(t).done(function() {
            $.emit("parsley:field:success", e)
        }).fail(function() {
            $.emit("parsley:field:error", e)
        }).always(function() {
            $.emit("parsley:field:validated", e)
        })
    },
    _asyncIsValidField: function(t, e) {
        var n = $.Deferred();
        return !1 === this.isValid(t, e) ? n.rejectWith(this) : "undefined" != typeof this.constraintsByName.remote ? this._remote(n) : n.resolveWith(this), n.promise()
    },
    _remote: function(t) {
        var e,
            n,
            i = this,
            r = {},
            o = this.options.remoteValidator || (!0 === this.options.remoteReverse ? "reverse" : "default");
        if (o = o.toLowerCase(), "undefined" == typeof this.asyncValidators[o])
            throw new Error("Calling an undefined async validator: `" + o + "`");
        r[this.$element.attr("name") || this.$element.attr("id")] = this.getValue(),
        this.options.remoteOptions = $.extend(!0, this.options.remoteOptions || {}, this.asyncValidators[o].options),
        e = $.extend(!0, {}, {
            url: this.asyncValidators[o].url || this.options.remote,
            data: r,
            type: "GET"
        }, this.options.remoteOptions || {}),
        n = $.param(e),
        "undefined" == typeof this._remoteCache && (this._remoteCache = {}),
        this._remoteCache[n] || (this._xhr && "pending" === this._xhr.state() && this._xhr.abort(), this._xhr = $.ajax(e), this._remoteCache[n] = this._xhr),
        this._remoteCache[n].done(function(e, n, r) {
            i._handleRemoteResult(o, r, t)
        }).fail(function(e, n) {
            "abort" !== n && i._handleRemoteResult(o, e, t)
        })
    },
    _handleRemoteResult: function(t, e, n) {
        return "function" == typeof this.asyncValidators[t].fn && this.asyncValidators[t].fn.call(this, e) ? void n.resolveWith(this) : (this.validationResult = [new window.ParsleyValidator.Validator.Violation(this.constraintsByName.remote, this.getValue(), null)], void n.rejectWith(this))
    }
}),
window.ParsleyConfig = window.ParsleyConfig || {},
window.ParsleyConfig.validators = window.ParsleyConfig.validators || {},
window.ParsleyConfig.validators.remote = {
    fn: function() {
        return !0
    },
    priority: -1
},
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "undefined" == typeof t && "undefined" != typeof window.jQuery && (t = window.jQuery);
    var e = {
            attr: function(t, e, n) {
                var i,
                    r = {},
                    o = this.msieversion(),
                    s = new RegExp("^" + e, "i");
                if ("undefined" == typeof t || "undefined" == typeof t[0])
                    return {};
                for (var a in t[0].attributes)
                    if (i = t[0].attributes[a], "undefined" != typeof i && null !== i && (!o || o >= 8 || i.specified) && s.test(i.name)) {
                        if ("undefined" != typeof n && new RegExp(n + "$", "i").test(i.name))
                            return !0;
                        r[this.camelize(i.name.replace(e, ""))] = this.deserializeValue(i.value)
                    }
                return "undefined" == typeof n ? r : !1
            },
            setAttr: function(t, e, n, i) {
                t[0].setAttribute(this.dasherize(e + n), String(i))
            },
            get: function(t, e) {
                for (var n = 0, i = (e || "").split("."); this.isObject(t) || this.isArray(t);)
                    if (t = t[i[n++]], n === i.length)
                        return t;
                return void 0
            },
            hash: function(t) {
                return String(Math.random()).substring(2, t ? t + 2 : 9)
            },
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            isObject: function(t) {
                return t === Object(t)
            },
            deserializeValue: function(e) {
                var n;
                try {
                    return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null : isNaN(n = Number(e)) ? /^[\[\{]/.test(e) ? t.parseJSON(e) : e : n) : e
                } catch (i) {
                    return e
                }
            },
            camelize: function(t) {
                return t.replace(/-+(.)?/g, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            },
            dasherize: function(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            },
            msieversion: function() {
                var t = window.navigator.userAgent,
                    e = t.indexOf("MSIE ");
                return e > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? parseInt(t.substring(e + 5, t.indexOf(".", e)), 10) : 0
            }
        },
        n = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function() {},
            errorsContainer: function() {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        i = function() {};
    i.prototype = {
        asyncSupport: !1,
        actualizeOptions: function() {
            return this.options = this.OptionsFactory.get(this), this
        },
        validateThroughValidator: function(t, e, n) {
            return window.ParsleyValidator.validate(t, e, n)
        },
        subscribe: function(e, n) {
            return t.listenTo(this, e.toLowerCase(), n), this
        },
        unsubscribe: function(e) {
            return t.unsubscribeTo(this, e.toLowerCase()), this
        },
        reset: function() {
            if ("ParsleyForm" !== this.__class__)
                return t.emit("parsley:field:reset", this);
            for (var e = 0; e < this.fields.length; e++)
                t.emit("parsley:field:reset", this.fields[e]);
            t.emit("parsley:form:reset", this)
        },
        destroy: function() {
            if ("ParsleyForm" !== this.__class__)
                return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void t.emit("parsley:field:destroy", this);
            for (var e = 0; e < this.fields.length; e++)
                this.fields[e].destroy();
            this.$element.removeData("Parsley"),
            t.emit("parsley:form:destroy", this)
        }
    };
    var r = function() {
        var t = {},
            e = function(t) {
                this.__class__ = "Validator",
                this.__version__ = "1.0.1",
                this.options = t || {},
                this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
            };
        e.prototype = {
            constructor: e,
            validate: function(t, e, n) {
                if ("string" != typeof t && "object" != typeof t)
                    throw new Error("You must validate an object or a string");
                return "string" == typeof t || s(t) ? this._validateString(t, e, n) : this.isBinded(t) ? this._validateBindedObject(t, e) : this._validateObject(t, e, n)
            },
            bind: function(t, e) {
                if ("object" != typeof t)
                    throw new Error("Must bind a Constraint to an object");
                return t[this.bindingKey] = new n(e), this
            },
            unbind: function(t) {
                return "undefined" == typeof t._validatorjsConstraint ? this : (delete t[this.bindingKey], this)
            },
            isBinded: function(t) {
                return "undefined" != typeof t[this.bindingKey]
            },
            getBinded: function(t) {
                return this.isBinded(t) ? t[this.bindingKey] : null
            },
            _validateString: function(t, e, n) {
                var o,
                    a = [];
                s(e) || (e = [e]);
                for (var l = 0; l < e.length; l++) {
                    if (!(e[l] instanceof r))
                        throw new Error("You must give an Assert or an Asserts array to validate a string");
                    o = e[l].check(t, n),
                    o instanceof i && a.push(o)
                }
                return a.length ? a : !0
            },
            _validateObject: function(t, e, i) {
                if ("object" != typeof e)
                    throw new Error("You must give a constraint to validate an object");
                return e instanceof n ? e.check(t, i) : new n(e).check(t, i)
            },
            _validateBindedObject: function(t, e) {
                return t[this.bindingKey].check(t, e)
            }
        },
        e.errorCode = {
            must_be_a_string: "must_be_a_string",
            must_be_an_array: "must_be_an_array",
            must_be_a_number: "must_be_a_number",
            must_be_a_string_or_array: "must_be_a_string_or_array"
        };
        var n = function(t, e) {
            if (this.__class__ = "Constraint", this.options = e || {}, this.nodes = {}, t)
                try {
                    this._bootstrap(t)
                } catch (n) {
                    throw new Error("Should give a valid mapping object to Constraint", n, t)
                }
        };
        n.prototype = {
            constructor: n,
            check: function(t, e) {
                var n,
                    i = {};
                for (var a in this.nodes) {
                    for (var l = !1, u = this.get(a), c = s(u) ? u : [u], d = c.length - 1; d >= 0; d--)
                        "Required" !== c[d].__class__ || (l = c[d].requiresValidation(e));
                    if (this.has(a, t) || this.options.strict || l)
                        try {
                            this.has(a, this.options.strict || l ? t : void 0) || (new r).HaveProperty(a).validate(t),
                            n = this._check(a, t[a], e),
                            (s(n) && n.length > 0 || !s(n) && !o(n)) && (i[a] = n)
                        } catch (h) {
                            i[a] = h
                        }
                }
                return o(i) ? !0 : i
            },
            add: function(t, e) {
                if (e instanceof r || s(e) && e[0] instanceof r)
                    return this.nodes[t] = e, this;
                if ("object" == typeof e && !s(e))
                    return this.nodes[t] = e instanceof n ? e : new n(e), this;
                throw new Error("Should give an Assert, an Asserts array, a Constraint", e)
            },
            has: function(t, e) {
                return e = "undefined" != typeof e ? e : this.nodes, "undefined" != typeof e[t]
            },
            get: function(t, e) {
                return this.has(t) ? this.nodes[t] : e || null
            },
            remove: function(t) {
                var e = [];
                for (var n in this.nodes)
                    n !== t && (e[n] = this.nodes[n]);
                return this.nodes = e, this
            },
            _bootstrap: function(t) {
                if (t instanceof n)
                    return this.nodes = t.nodes;
                for (var e in t)
                    this.add(e, t[e])
            },
            _check: function(t, e, i) {
                if (this.nodes[t] instanceof r)
                    return this._checkAsserts(e, [this.nodes[t]], i);
                if (s(this.nodes[t]))
                    return this._checkAsserts(e, this.nodes[t], i);
                if (this.nodes[t] instanceof n)
                    return this.nodes[t].check(e, i);
                throw new Error("Invalid node", this.nodes[t])
            },
            _checkAsserts: function(t, e, n) {
                for (var i, r = [], o = 0; o < e.length; o++)
                    i = e[o].check(t, n),
                    "undefined" != typeof i && !0 !== i && r.push(i);
                return r
            }
        };
        var i = function(t, e, n) {
            if (this.__class__ = "Violation", !(t instanceof r))
                throw new Error("Should give an assertion implementing the Assert interface");
            this.assert = t,
            this.value = e,
            "undefined" != typeof n && (this.violation = n)
        };
        i.prototype = {
            show: function() {
                var t = {
                    assert: this.assert.__class__,
                    value: this.value
                };
                return this.violation && (t.violation = this.violation), t
            },
            __toString: function() {
                return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
            },
            getViolation: function() {
                var t,
                    e;
                for (t in this.violation)
                    e = this.violation[t];
                return {
                    constraint: t,
                    expected: e
                }
            }
        };
        var r = function(t) {
            this.__class__ = "Assert",
            this.__parentClass__ = this.__class__,
            this.groups = [],
            "undefined" != typeof t && this.addGroup(t)
        };
        r.prototype = {
            construct: r,
            requiresValidation: function(t) {
                return t && !this.hasGroup(t) ? !1 : !t && this.hasGroups() ? !1 : !0
            },
            check: function(t, e) {
                if (this.requiresValidation(e))
                    try {
                        return this.validate(t, e)
                    } catch (n) {
                        return n
                    }
            },
            hasGroup: function(t) {
                return s(t) ? this.hasOneOf(t) : "Any" === t ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(t) : "Default" === t
            },
            hasOneOf: function(t) {
                for (var e = 0; e < t.length; e++)
                    if (this.hasGroup(t[e]))
                        return !0;
                return !1
            },
            hasGroups: function() {
                return this.groups.length > 0
            },
            addGroup: function(t) {
                return s(t) ? this.addGroups(t) : (this.hasGroup(t) || this.groups.push(t), this)
            },
            removeGroup: function(t) {
                for (var e = [], n = 0; n < this.groups.length; n++)
                    t !== this.groups[n] && e.push(this.groups[n]);
                return this.groups = e, this
            },
            addGroups: function(t) {
                for (var e = 0; e < t.length; e++)
                    this.addGroup(t[e]);
                return this
            },
            HaveProperty: function(t) {
                return this.__class__ = "HaveProperty", this.node = t, this.validate = function(t) {
                    if ("undefined" == typeof t[this.node])
                        throw new i(this, t, {
                            value: this.node
                        });
                    return !0
                }, this
            },
            Blank: function() {
                return this.__class__ = "Blank", this.validate = function(t) {
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if ("" !== t.replace(/^\s+/g, "").replace(/\s+$/g, ""))
                        throw new i(this, t);
                    return !0
                }, this
            },
            Callback: function(t) {
                if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof t)
                    throw new Error("Callback must be instanciated with a function");
                return this.fn = t, this.validate = function(t) {
                    var e = this.fn.apply(this, [t].concat(this.arguments));
                    if (!0 !== e)
                        throw new i(this, t, {
                            result: e
                        });
                    return !0
                }, this
            },
            Choice: function(t) {
                if (this.__class__ = "Choice", !s(t) && "function" != typeof t)
                    throw new Error("Choice must be instanciated with an array or a function");
                return this.list = t, this.validate = function(t) {
                    for (var e = "function" == typeof this.list ? this.list() : this.list, n = 0; n < e.length; n++)
                        if (t === e[n])
                            return !0;
                    throw new i(this, t, {
                        choices: e
                    })
                }, this
            },
            Collection: function(t) {
                return this.__class__ = "Collection", this.constraint = "undefined" != typeof t ? t instanceof r ? t : new n(t) : !1, this.validate = function(t, n) {
                    var r,
                        a = new e,
                        l = 0,
                        u = {},
                        c = this.groups.length ? this.groups : n;
                    if (!s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_an_array
                        });
                    for (var d = 0; d < t.length; d++)
                        r = this.constraint ? a.validate(t[d], this.constraint, c) : a.validate(t[d], c),
                        o(r) || (u[l] = r),
                        l++;
                    return o(u) ? !0 : u
                }, this
            },
            Count: function(t) {
                return this.__class__ = "Count", this.count = t, this.validate = function(t) {
                    if (!s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_an_array
                        });
                    var n = "function" == typeof this.count ? this.count(t) : this.count;
                    if (isNaN(Number(n)))
                        throw new Error("Count must be a valid interger", n);
                    if (n !== t.length)
                        throw new i(this, t, {
                            count: n
                        });
                    return !0
                }, this
            },
            Email: function() {
                return this.__class__ = "Email", this.validate = function(t) {
                    var n = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if (!n.test(t))
                        throw new i(this, t);
                    return !0
                }, this
            },
            EqualTo: function(t) {
                if (this.__class__ = "EqualTo", "undefined" == typeof t)
                    throw new Error("EqualTo must be instanciated with a value or a function");
                return this.reference = t, this.validate = function(t) {
                    var e = "function" == typeof this.reference ? this.reference(t) : this.reference;
                    if (e !== t)
                        throw new i(this, t, {
                            value: e
                        });
                    return !0
                }, this
            },
            GreaterThan: function(t) {
                if (this.__class__ = "GreaterThan", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold >= t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            GreaterThanOrEqual: function(t) {
                if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold > t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            InstanceOf: function(t) {
                if (this.__class__ = "InstanceOf", "undefined" == typeof t)
                    throw new Error("InstanceOf must be instanciated with a value");
                return this.classRef = t, this.validate = function(t) {
                    if (!0 != t instanceof this.classRef)
                        throw new i(this, t, {
                            classRef: this.classRef
                        });
                    return !0
                }, this
            },
            Length: function(t) {
                if (this.__class__ = "Length", !t.min && !t.max)
                    throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                return this.min = t.min, this.max = t.max, this.validate = function(t) {
                    if ("string" != typeof t && !s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string_or_array
                        });
                    if ("undefined" != typeof this.min && this.min === this.max && t.length !== this.min)
                        throw new i(this, t, {
                            min: this.min,
                            max: this.max
                        });
                    if ("undefined" != typeof this.max && t.length > this.max)
                        throw new i(this, t, {
                            max: this.max
                        });
                    if ("undefined" != typeof this.min && t.length < this.min)
                        throw new i(this, t, {
                            min: this.min
                        });
                    return !0
                }, this
            },
            LessThan: function(t) {
                if (this.__class__ = "LessThan", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold <= t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            LessThanOrEqual: function(t) {
                if (this.__class__ = "LessThanOrEqual", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold < t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            NotNull: function() {
                return this.__class__ = "NotNull", this.validate = function(t) {
                    if (null === t || "undefined" == typeof t)
                        throw new i(this, t);
                    return !0
                }, this
            },
            NotBlank: function() {
                return this.__class__ = "NotBlank", this.validate = function(t) {
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if ("" === t.replace(/^\s+/g, "").replace(/\s+$/g, ""))
                        throw new i(this, t);
                    return !0
                }, this
            },
            Null: function() {
                return this.__class__ = "Null", this.validate = function(t) {
                    if (null !== t)
                        throw new i(this, t);
                    return !0
                }, this
            },
            Range: function(t, e) {
                if (this.__class__ = "Range", "undefined" == typeof t || "undefined" == typeof e)
                    throw new Error("Range assert expects min and max values");
                return this.min = t, this.max = e, this.validate = function(t) {
                    try {
                        return "string" == typeof t && isNaN(Number(t)) || s(t) ? (new r).Length({
                            min: this.min,
                            max: this.max
                        }).validate(t) : (new r).GreaterThanOrEqual(this.min).validate(t) && (new r).LessThanOrEqual(this.max).validate(t), !0
                    } catch (e) {
                        throw new i(this, t, e.violation)
                    }
                    return !0
                }, this
            },
            Regexp: function(t, n) {
                if (this.__class__ = "Regexp", "undefined" == typeof t)
                    throw new Error("You must give a regexp");
                return this.regexp = t, this.flag = n || "", this.validate = function(t) {
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if (!new RegExp(this.regexp, this.flag).test(t))
                        throw new i(this, t, {
                            regexp: this.regexp,
                            flag: this.flag
                        });
                    return !0
                }, this
            },
            Required: function() {
                return this.__class__ = "Required", this.validate = function(t) {
                    if ("undefined" == typeof t)
                        throw new i(this, t);
                    try {
                        "string" == typeof t ? (new r).NotNull().validate(t) && (new r).NotBlank().validate(t) : !0 === s(t) && (new r).Length({
                            min: 1
                        }).validate(t)
                    } catch (e) {
                        throw new i(this, t)
                    }
                    return !0
                }, this
            },
            Unique: function(t) {
                return this.__class__ = "Unique", "object" == typeof t && (this.key = t.key), this.validate = function(t) {
                    var n,
                        r = [];
                    if (!s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_an_array
                        });
                    for (var o = 0; o < t.length; o++)
                        if (n = "object" == typeof t[o] ? t[o][this.key] : t[o], "undefined" != typeof n) {
                            if (-1 !== r.indexOf(n))
                                throw new i(this, t, {
                                    value: n
                                });
                            r.push(n)
                        }
                    return !0
                }, this
            }
        },
        t.Assert = r,
        t.Validator = e,
        t.Violation = i,
        t.Constraint = n,
        Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
            if (null === this)
                throw new TypeError;
            var e = Object(this),
                n = e.length >>> 0;
            if (0 === n)
                return -1;
            var i = 0;
            if (arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : 0 !== i && 1 / 0 != i && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n)
                return -1;
            for (var r = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > r; r++)
                if (r in e && e[r] === t)
                    return r;
            return -1
        });
        var o = function(t) {
                for (var e in t)
                    return !1;
                return !0
            },
            s = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
        return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function() {
            return t
        }) : "undefined" != typeof module && module.exports ? module.exports = t : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = t, t
    }();
    r = "undefined" != typeof r ? r : "undefined" != typeof module ? module.exports : null;
    var o = function(t, e) {
        this.__class__ = "ParsleyValidator",
        this.Validator = r,
        this.locale = "en",
        this.init(t || {}, e || {})
    };
    o.prototype = {
        init: function(e, n) {
            this.catalog = n;
            for (var i in e)
                this.addValidator(i, e[i].fn, e[i].priority, e[i].requirementsTransformer);
            t.emit("parsley:validator:init")
        },
        setLocale: function(t) {
            if ("undefined" == typeof this.catalog[t])
                throw new Error(t + " is not available in the catalog");
            return this.locale = t, this
        },
        addCatalog: function(t, e, n) {
            return "object" == typeof e && (this.catalog[t] = e), !0 === n ? this.setLocale(t) : this
        },
        addMessage: function(t, e, n) {
            return "undefined" == typeof this.catalog[t] && (this.catalog[t] = {}), this.catalog[t][e.toLowerCase()] = n, this
        },
        validate: function() {
            return (new this.Validator.Validator).validate.apply(new r.Validator, arguments)
        },
        addValidator: function(e, n, i, o) {
            return this.validators[e.toLowerCase()] = function(e) {
                return t.extend((new r.Assert).Callback(n, e), {
                    priority: i,
                    requirementsTransformer: o
                })
            }, this
        },
        updateValidator: function(t, e, n, i) {
            return this.addValidator(t, e, n, i)
        },
        removeValidator: function(t) {
            return delete this.validators[t], this
        },
        getErrorMessage: function(t) {
            var e;
            return e = "type" === t.name ? this.catalog[this.locale][t.name][t.requirements] : this.formatMessage(this.catalog[this.locale][t.name], t.requirements), "" !== e ? e : this.catalog[this.locale].defaultMessage
        },
        formatMessage: function(t, e) {
            if ("object" == typeof e) {
                for (var n in e)
                    t = this.formatMessage(t, e[n]);
                return t
            }
            return "string" == typeof t ? t.replace(new RegExp("%s", "i"), e) : ""
        },
        validators: {
            notblank: function() {
                return t.extend((new r.Assert).NotBlank(), {
                    priority: 2
                })
            },
            required: function() {
                return t.extend((new r.Assert).Required(), {
                    priority: 512
                })
            },
            type: function(e) {
                var n;
                switch (e) {
                case "email":
                    n = (new r.Assert).Email();
                    break;
                case "range":
                case "number":
                    n = (new r.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                    break;
                case "integer":
                    n = (new r.Assert).Regexp("^-?\\d+$");
                    break;
                case "digits":
                    n = (new r.Assert).Regexp("^\\d+$");
                    break;
                case "alphanum":
                    n = (new r.Assert).Regexp("^\\w+$", "i");
                    break;
                case "url":
                    n = (new r.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,24}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
                    break;
                default:
                    throw new Error("validator type `" + e + "` is not supported")
                }
                return t.extend(n, {
                    priority: 256
                })
            },
            pattern: function(e) {
                var n = "";
                return /^\/.*\/(?:[gimy]*)$/.test(e) && (n = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + n + "$"), "$1")), t.extend((new r.Assert).Regexp(e, n), {
                    priority: 64
                })
            },
            minlength: function(e) {
                return t.extend((new r.Assert).Length({
                    min: e
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            maxlength: function(e) {
                return t.extend((new r.Assert).Length({
                    max: e
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            length: function(e) {
                return t.extend((new r.Assert).Length({
                    min: e[0],
                    max: e[1]
                }), {
                    priority: 32
                })
            },
            mincheck: function(t) {
                return this.minlength(t)
            },
            maxcheck: function(t) {
                return this.maxlength(t)
            },
            check: function(t) {
                return this.length(t)
            },
            min: function(e) {
                return t.extend((new r.Assert).GreaterThanOrEqual(e), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            max: function(e) {
                return t.extend((new r.Assert).LessThanOrEqual(e), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            range: function(e) {
                return t.extend((new r.Assert).Range(e[0], e[1]), {
                    priority: 32,
                    requirementsTransformer: function() {
                        for (var t = 0; t < e.length; t++)
                            e[t] = "string" != typeof e[t] || isNaN(e[t]) ? e[t] : parseInt(e[t], 10);
                        return e
                    }
                })
            },
            equalto: function(e) {
                return t.extend((new r.Assert).EqualTo(e), {
                    priority: 256,
                    requirementsTransformer: function() {
                        return t(e).length ? t(e).val() : e
                    }
                })
            }
        }
    };
    var s = function() {
        this.__class__ = "ParsleyUI"
    };
    s.prototype = {
        listen: function() {
            return t.listen("parsley:form:init", this, this.setupForm), t.listen("parsley:field:init", this, this.setupField), t.listen("parsley:field:validated", this, this.reflow), t.listen("parsley:form:validated", this, this.focus), t.listen("parsley:field:reset", this, this.reset), t.listen("parsley:form:destroy", this, this.destroy), t.listen("parsley:field:destroy", this, this.destroy), this
        },
        reflow: function(t) {
            if ("undefined" != typeof t._ui && !1 !== t._ui.active) {
                var e = this._diff(t.validationResult, t._ui.lastValidationResult);
                t._ui.lastValidationResult = t.validationResult,
                t._ui.validatedOnce = !0,
                this.manageStatusClass(t),
                this.manageErrorsMessages(t, e),
                this.actualizeTriggers(t),
                (e.kept.length || e.added.length) && "undefined" == typeof t._ui.failedOnce && this.manageFailingFieldTrigger(t)
            }
        },
        getErrorsMessages: function(t) {
            if (!0 === t.validationResult)
                return [];
            for (var e = [], n = 0; n < t.validationResult.length; n++)
                e.push(this._getErrorMessage(t, t.validationResult[n].assert));
            return e
        },
        manageStatusClass: function(t) {
            !0 === t.validationResult ? this._successClass(t) : t.validationResult.length > 0 ? this._errorClass(t) : this._resetClass(t)
        },
        manageErrorsMessages: function(e, n) {
            if ("undefined" == typeof e.options.errorsMessagesDisabled) {
                if ("undefined" != typeof e.options.errorMessage)
                    return n.added.length || n.kept.length ? (0 === e._ui.$errorsWrapper.find(".parsley-custom-error-message").length && e._ui.$errorsWrapper.append(t(e.options.errorTemplate).addClass("parsley-custom-error-message")), e._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(e.options.errorMessage)) : e._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var i = 0; i < n.removed.length; i++)
                    this.removeError(e, n.removed[i].assert.name, !0);
                for (i = 0; i < n.added.length; i++)
                    this.addError(e, n.added[i].assert.name, void 0, n.added[i].assert, !0);
                for (i = 0; i < n.kept.length; i++)
                    this.updateError(e, n.kept[i].assert.name, void 0, n.kept[i].assert, !0)
            }
        },
        addError: function(e, n, i, r, o) {
            e._ui.$errorsWrapper.addClass("filled").append(t(e.options.errorTemplate).addClass("parsley-" + n).html(i || this._getErrorMessage(e, r))),
            !0 !== o && this._errorClass(e)
        },
        updateError: function(t, e, n, i, r) {
            t._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(n || this._getErrorMessage(t, i)),
            !0 !== r && this._errorClass(t)
        },
        removeError: function(t, e, n) {
            t._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove(),
            !0 !== n && this.manageStatusClass(t)
        },
        focus: function(t) {
            if (!0 === t.validationResult || "none" === t.options.focus)
                return t._focusedField = null;
            t._focusedField = null;
            for (var e = 0; e < t.fields.length; e++)
                if (!0 !== t.fields[e].validationResult && t.fields[e].validationResult.length > 0 && "undefined" == typeof t.fields[e].options.noFocus) {
                    if ("first" === t.options.focus)
                        return t._focusedField = t.fields[e].$element, t._focusedField.focus();
                    t._focusedField = t.fields[e].$element
                }
            return null === t._focusedField ? null : t._focusedField.focus()
        },
        _getErrorMessage: function(t, e) {
            var n = e.name + "Message";
            return "undefined" != typeof t.options[n] ? window.ParsleyValidator.formatMessage(t.options[n], e.requirements) : window.ParsleyValidator.getErrorMessage(e)
        },
        _diff: function(t, e, n) {
            for (var i = [], r = [], o = 0; o < t.length; o++) {
                for (var s = !1, a = 0; a < e.length; a++)
                    if (t[o].assert.name === e[a].assert.name) {
                        s = !0;
                        break
                    }
                s ? r.push(t[o]) : i.push(t[o])
            }
            return {
                kept: r,
                added: i,
                removed: n ? [] : this._diff(e, t, !0).added
            }
        },
        setupForm: function(e) {
            e.$element.on("submit.Parsley", !1, t.proxy(e.onSubmitValidate, e)),
            !1 !== e.options.uiEnabled && e.$element.attr("novalidate", "")
        },
        setupField: function(e) {
            var n = {
                active: !1
            };
            !1 !== e.options.uiEnabled && (n.active = !0, e.$element.attr(e.options.namespace + "id", e.__id__), n.$errorClassHandler = this._manageClassHandler(e), n.errorsWrapperId = "parsley-id-" + ("undefined" != typeof e.options.multiple ? "multiple-" + e.options.multiple : e.__id__), n.$errorsWrapper = t(e.options.errorsWrapper).attr("id", n.errorsWrapperId), n.lastValidationResult = [], n.validatedOnce = !1, n.validationInformationVisible = !1, e._ui = n, e.$element.is(e.options.excluded) || this._insertErrorWrapper(e), this.actualizeTriggers(e))
        },
        _manageClassHandler: function(e) {
            if ("string" == typeof e.options.classHandler && t(e.options.classHandler).length)
                return t(e.options.classHandler);
            var n = e.options.classHandler(e);
            return "undefined" != typeof n && n.length ? n : "undefined" == typeof e.options.multiple || e.$element.is("select") ? e.$element : e.$element.parent()
        },
        _insertErrorWrapper: function(e) {
            var n;
            if ("string" == typeof e.options.errorsContainer) {
                if (t(e.options.errorsContainer).length)
                    return t(e.options.errorsContainer).append(e._ui.$errorsWrapper);
                window.console && window.console.warn && window.console.warn("The errors container `" + e.options.errorsContainer + "` does not exist in DOM")
            } else
                "function" == typeof e.options.errorsContainer && (n = e.options.errorsContainer(e));
            return "undefined" != typeof n && n.length ? n.append(e._ui.$errorsWrapper) : "undefined" == typeof e.options.multiple ? e.$element.after(e._ui.$errorsWrapper) : e.$element.parent().after(e._ui.$errorsWrapper)
        },
        actualizeTriggers: function(e) {
            var n = e.$element;
            if (e.options.multiple && (n = t("[" + e.options.namespace + 'multiple="' + e.options.multiple + '"]')), n.off(".Parsley"), !1 !== e.options.trigger) {
                var i = e.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                "" !== i && n.on(i.split(" ").join(".Parsley ") + ".Parsley", t.proxy("function" == typeof e.eventValidate ? e.eventValidate : this.eventValidate, e))
            }
        },
        eventValidate: function(t) {
            new RegExp("key").test(t.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
        },
        manageFailingFieldTrigger: function(e) {
            return e._ui.failedOnce = !0, e.options.multiple && t("[" + e.options.namespace + 'multiple="' + e.options.multiple + '"]').each(function() {
                return new RegExp("change", "i").test(t(this).parsley().options.trigger || "") ? void 0 : t(this).on("change.ParsleyFailedOnce", !1, t.proxy(e.validate, e))
            }), e.$element.is("select") && !new RegExp("change", "i").test(e.options.trigger || "") ? e.$element.on("change.ParsleyFailedOnce", !1, t.proxy(e.validate, e)) : new RegExp("keyup", "i").test(e.options.trigger || "") ? void 0 : e.$element.on("keyup.ParsleyFailedOnce", !1, t.proxy(e.validate, e))
        },
        reset: function(t) {
            t.$element.off(".Parsley"),
            t.$element.off(".ParsleyFailedOnce"),
            "undefined" != typeof t._ui && "ParsleyForm" !== t.__class__ && (t._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(t), t._ui.validatedOnce = !1, t._ui.lastValidationResult = [], t._ui.validationInformationVisible = !1)
        },
        destroy: function(t) {
            this.reset(t),
            "ParsleyForm" !== t.__class__ && ("undefined" != typeof t._ui && t._ui.$errorsWrapper.remove(), delete t._ui)
        },
        _successClass: function(t) {
            t._ui.validationInformationVisible = !0,
            t._ui.$errorClassHandler.removeClass(t.options.errorClass).addClass(t.options.successClass)
        },
        _errorClass: function(t) {
            t._ui.validationInformationVisible = !0,
            t._ui.$errorClassHandler.removeClass(t.options.successClass).addClass(t.options.errorClass)
        },
        _resetClass: function(t) {
            t._ui.$errorClassHandler.removeClass(t.options.successClass).removeClass(t.options.errorClass)
        }
    };
    var a = function(n, i, r, o) {
        this.__class__ = "OptionsFactory",
        this.__id__ = e.hash(4),
        this.formOptions = null,
        this.fieldOptions = null,
        this.staticOptions = t.extend(!0, {}, n, i, r, {
            namespace: o
        })
    };
    a.prototype = {
        get: function(t) {
            if ("undefined" == typeof t.__class__)
                throw new Error("Parsley Instance expected");
            switch (t.__class__) {
            case "Parsley":
                return this.staticOptions;
            case "ParsleyForm":
                return this.getFormOptions(t);
            case "ParsleyField":
            case "ParsleyFieldMultiple":
                return this.getFieldOptions(t);
            default:
                throw new Error("Instance " + t.__class__ + " is not supported")
            }
        },
        getFormOptions: function(n) {
            return this.formOptions = e.attr(n.$element, this.staticOptions.namespace), t.extend({}, this.staticOptions, this.formOptions)
        },
        getFieldOptions: function(n) {
            return this.fieldOptions = e.attr(n.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof n.parent && (this.formOptions = this.getFormOptions(n.parent)), t.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
        }
    };
    var l = function(n, i) {
        if (this.__class__ = "ParsleyForm", this.__id__ = e.hash(4), "OptionsFactory" !== e.get(i, "__class__"))
            throw new Error("You must give an OptionsFactory instance");
        this.OptionsFactory = i,
        this.$element = t(n),
        this.validationResult = null,
        this.options = this.OptionsFactory.get(this)
    };
    l.prototype = {
        onSubmitValidate: function(e) {
            return this.validate(void 0, void 0, e), !1 === this.validationResult && e instanceof t.Event && (e.stopImmediatePropagation(), e.preventDefault()), this
        },
        validate: function(e, n, i) {
            this.submitEvent = i,
            this.validationResult = !0;
            var r = [];
            t.emit("parsley:form:validate", this),
            this._refreshFields();
            for (var o = 0; o < this.fields.length; o++)
                (!e || this._isFieldInGroup(this.fields[o], e)) && (r = this.fields[o].validate(n), !0 !== r && r.length > 0 && this.validationResult && (this.validationResult = !1));
            return t.emit("parsley:form:" + (this.validationResult ? "success" : "error"), this), t.emit("parsley:form:validated", this), this.validationResult
        },
        isValid: function(t, e) {
            this._refreshFields();
            for (var n = 0; n < this.fields.length; n++)
                if ((!t || this._isFieldInGroup(this.fields[n], t)) && !1 === this.fields[n].isValid(e))
                    return !1;
            return !0
        },
        _isFieldInGroup: function(n, i) {
            return e.isArray(n.options.group) ? -1 !== t.inArray(i, n.options.group) : n.options.group === i
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var t = this;
            return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
                var e = new window.Parsley(this, {}, t);
                "ParsleyField" !== e.__class__ && "ParsleyFieldMultiple" !== e.__class__ || e.$element.is(e.options.excluded) || "undefined" == typeof t.fieldsMappedById[e.__class__ + "-" + e.__id__] && (t.fieldsMappedById[e.__class__ + "-" + e.__id__] = e, t.fields.push(e))
            }), this
        }
    };
    var u = function(n, i, r, o, s) {
            var a = {};
            if (!new RegExp("ParsleyField").test(e.get(n, "__class__")))
                throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
            if ("function" == typeof window.ParsleyValidator.validators[i] && (a = window.ParsleyValidator.validators[i](r)), "Assert" !== a.__parentClass__)
                throw new Error("Valid validator expected");
            var l = function() {
                return "undefined" != typeof n.options[i + "Priority"] ? n.options[i + "Priority"] : e.get(a, "priority") || 2
            };
            return o = o || l(), "function" == typeof a.requirementsTransformer && (r = a.requirementsTransformer(), a = window.ParsleyValidator.validators[i](r)), t.extend(a, {
                name: i,
                requirements: r,
                priority: o,
                groups: [o],
                isDomConstraint: s || e.attr(n.$element, n.options.namespace, i)
            })
        },
        c = function(n, i, r) {
            this.__class__ = "ParsleyField",
            this.__id__ = e.hash(4),
            this.$element = t(n),
            "undefined" != typeof r ? (this.parent = r, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = i, this.options = this.OptionsFactory.get(this)),
            this.constraints = [],
            this.constraintsByName = {},
            this.validationResult = [],
            this._bindConstraints()
        };
    c.prototype = {
        validate: function(e) {
            return this.value = this.getValue(), t.emit("parsley:field:validate", this), t.emit("parsley:field:" + (this.isValid(e, this.value) ? "success" : "error"), this), t.emit("parsley:field:validated", this), this.validationResult
        },
        isValid: function(t, e) {
            this.refreshConstraints();
            var n = this._getConstraintsSortedPriorities();
            if (0 === n.length)
                return this.validationResult = [];
            if (("undefined" == typeof e || null === e) && (e = this.getValue()), !e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== t)
                return this.validationResult = [];
            if (!1 === this.options.priorityEnabled)
                return !0 === (this.validationResult = this.validateThroughValidator(e, this.constraints, "Any"));
            for (var i = 0; i < n.length; i++)
                if (!0 !== (this.validationResult = this.validateThroughValidator(e, this.constraints, n[i])))
                    return !1;
            return !0
        },
        getValue: function() {
            var t;
            return t = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof t || null === t ? "" : !0 === this.options.trimValue ? t.replace(/^\s+|\s+$/g, "") : t
        },
        refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        addConstraint: function(t, e, n, i) {
            if (t = t.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[t]) {
                var r = new u(this, t, e, n, i);
                "undefined" !== this.constraintsByName[r.name] && this.removeConstraint(r.name),
                this.constraints.push(r),
                this.constraintsByName[r.name] = r
            }
            return this
        },
        removeConstraint: function(t) {
            for (var e = 0; e < this.constraints.length; e++)
                if (t === this.constraints[e].name) {
                    this.constraints.splice(e, 1);
                    break
                }
            return delete this.constraintsByName[t], this
        },
        updateConstraint: function(t, e, n) {
            return this.removeConstraint(t).addConstraint(t, e, n)
        },
        _bindConstraints: function() {
            for (var t = [], e = {}, n = 0; n < this.constraints.length; n++)
                !1 === this.constraints[n].isDomConstraint && (t.push(this.constraints[n]), e[this.constraints[n].name] = this.constraints[n]);
            this.constraints = t,
            this.constraintsByName = e;
            for (var i in this.options)
                this.addConstraint(i, this.options[i]);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0),
            "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0),
            "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0),
            "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
            var t = this.$element.attr("type");
            return "undefined" == typeof t ? this : "number" === t ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : new RegExp(t, "i").test("email url range") ? this.addConstraint("type", t, void 0, !0) : this
        },
        _isRequired: function() {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        },
        _getConstraintsSortedPriorities: function() {
            for (var t = [], e = 0; e < this.constraints.length; e++)
                -1 === t.indexOf(this.constraints[e].priority) && t.push(this.constraints[e].priority);
            return t.sort(function(t, e) {
                return e - t
            }), t
        }
    };
    var d = function() {
        this.__class__ = "ParsleyFieldMultiple"
    };
    d.prototype = {
        addElement: function(t) {
            return this.$elements.push(t), this
        },
        refreshConstraints: function() {
            var e;
            if (this.constraints = [], this.$element.is("select"))
                return this.actualizeOptions()._bindConstraints(), this;
            for (var n = 0; n < this.$elements.length; n++)
                if (t("html").has(this.$elements[n]).length) {
                    e = this.$elements[n].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var i = 0; i < e.length; i++)
                        this.addConstraint(e[i].name, e[i].requirements, e[i].priority, e[i].isDomConstraint)
                } else
                    this.$elements.splice(n, 1);
            return this
        },
        getValue: function() {
            if ("undefined" != typeof this.options.value)
                return this.options.value;
            if (this.$element.is("input[type=radio]"))
                return t("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var e = [];
                return t("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
                    e.push(t(this).val())
                }), e.length ? e : []
            }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function(t) {
            return this.$elements = [this.$element], this.options.multiple = t, this
        }
    };
    var h = t({}),
        f = {};
    t.listen = function(t) {
        if ("undefined" == typeof f[t] && (f[t] = []), "function" == typeof arguments[1])
            return f[t].push({
                fn: arguments[1]
            });
        if ("object" == typeof arguments[1] && "function" == typeof arguments[2])
            return f[t].push({
                fn: arguments[2],
                ctxt: arguments[1]
            });
        throw new Error("Wrong parameters")
    },
    t.listenTo = function(t, e, n) {
        if ("undefined" == typeof f[e] && (f[e] = []), !(t instanceof c || t instanceof l))
            throw new Error("Must give Parsley instance");
        if ("string" != typeof e || "function" != typeof n)
            throw new Error("Wrong parameters");
        f[e].push({
            instance: t,
            fn: n
        })
    },
    t.unsubscribe = function(t, e) {
        if ("undefined" != typeof f[t]) {
            if ("string" != typeof t || "function" != typeof e)
                throw new Error("Wrong arguments");
            for (var n = 0; n < f[t].length; n++)
                if (f[t][n].fn === e)
                    return f[t].splice(n, 1)
        }
    },
    t.unsubscribeTo = function(t, e) {
        if ("undefined" != typeof f[e]) {
            if (!(t instanceof c || t instanceof l))
                throw new Error("Must give Parsley instance");
            for (var n = 0; n < f[e].length; n++)
                if ("undefined" != typeof f[e][n].instance && f[e][n].instance.__id__ === t.__id__)
                    return f[e].splice(n, 1)
        }
    },
    t.unsubscribeAll = function(t) {
        "undefined" != typeof f[t] && delete f[t]
    },
    t.emit = function(t, e) {
        if ("undefined" != typeof f[t])
            for (var n = 0; n < f[t].length; n++)
                if ("undefined" != typeof f[t][n].instance) {
                    if (e instanceof c || e instanceof l)
                        if (f[t][n].instance.__id__ !== e.__id__) {
                            if (f[t][n].instance instanceof l && e instanceof c)
                                for (var i = 0; i < f[t][n].instance.fields.length; i++)
                                    if (f[t][n].instance.fields[i].__id__ === e.__id__) {
                                        f[t][n].fn.apply(h, Array.prototype.slice.call(arguments, 1));
                                        continue
                                    }
                        } else
                            f[t][n].fn.apply(h, Array.prototype.slice.call(arguments, 1))
                } else
                    f[t][n].fn.apply("undefined" != typeof f[t][n].ctxt ? f[t][n].ctxt : h, Array.prototype.slice.call(arguments, 1))
    },
    t.subscribed = function() {
        return f
    },
    window.ParsleyConfig = window.ParsleyConfig || {},
    window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {},
    window.ParsleyConfig.i18n.en = t.extend(window.ParsleyConfig.i18n.en || {}, {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }),
    "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var p = function(n, i, r) {
        if (this.__class__ = "Parsley", this.__version__ = "2.0.6", this.__id__ = e.hash(4), "undefined" == typeof n)
            throw new Error("You must give an element");
        if ("undefined" != typeof r && "ParsleyForm" !== r.__class__)
            throw new Error("Parent instance must be a ParsleyForm instance");
        return this.init(t(n), i, r)
    };
    p.prototype = {
        init: function(t, i, r) {
            if (!t.length)
                throw new Error("You must bind Parsley on an existing element.");
            if (this.$element = t, this.$element.data("Parsley")) {
                var o = this.$element.data("Parsley");
                return "undefined" != typeof r && (o.parent = r), o
            }
            return this.OptionsFactory = new a(n, e.get(window, "ParsleyConfig") || {}, i, this.getNamespace(i)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || e.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(r) : this.bind("parsleyField", r) : this
        },
        isMultiple: function() {
            return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        },
        handleMultiple: function(n) {
            var i,
                r,
                o,
                s = this;
            if (this.options = t.extend(this.options, n ? n.OptionsFactory.get(n) : {}, e.attr(this.$element, this.options.namespace)), this.options.multiple ? r = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? r = i = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (r = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple"))
                return this.bind("parsleyFieldMultiple", n, r || this.__id__);
            if ("undefined" == typeof r)
                return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            if (r = r.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof i && t('input[name="' + i + '"]').each(function() {
                t(this).is("input[type=radio], input[type=checkbox]") && t(this).attr(s.options.namespace + "multiple", r)
            }), t("[" + this.options.namespace + "multiple=" + r + "]").length)
                for (var a = 0; a < t("[" + this.options.namespace + "multiple=" + r + "]").length; a++)
                    if ("undefined" != typeof t(t("[" + this.options.namespace + "multiple=" + r + "]").get(a)).data("Parsley")) {
                        o = t(t("[" + this.options.namespace + "multiple=" + r + "]").get(a)).data("Parsley"),
                        this.$element.data("ParsleyFieldMultiple") || (o.addElement(this.$element), this.$element.attr(this.options.namespace + "id", o.__id__));
                        break
                    }
            return this.bind("parsleyField", n, r, !0), o || this.bind("parsleyFieldMultiple", n, r)
        },
        getNamespace: function(t) {
            return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof e.get(t, "namespace") ? t.namespace : "undefined" != typeof e.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : n.namespace
        },
        bind: function(n, r, o, s) {
            var a;
            switch (n) {
            case "parsleyForm":
                a = t.extend(new l(this.$element, this.OptionsFactory), new i, window.ParsleyExtend)._bindFields();
                break;
            case "parsleyField":
                a = t.extend(new c(this.$element, this.OptionsFactory, r), new i, window.ParsleyExtend);
                break;
            case "parsleyFieldMultiple":
                a = t.extend(new c(this.$element, this.OptionsFactory, r), new i, new d, window.ParsleyExtend)._init(o);
                break;
            default:
                throw new Error(n + "is not a supported Parsley type")
            }
            return "undefined" != typeof o && e.setAttr(this.$element, this.options.namespace, "multiple", o), "undefined" != typeof s ? (this.$element.data("ParsleyFieldMultiple", a), a) : (new RegExp("ParsleyF", "i").test(a.__class__) && (this.$element.data("Parsley", a), t.emit("parsley:" + ("parsleyForm" === n ? "form" : "field") + ":init", a)), a)
        }
    },
    t.fn.parsley = t.fn.psly = function(e) {
        if (this.length > 1) {
            var n = [];
            return this.each(function() {
                n.push(t(this).parsley(e))
            }), n
        }
        return t(this).length ? new p(this, e) : void (window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
    },
    window.ParsleyUI = "function" == typeof e.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new s).listen(),
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}),
    window.Parsley = window.psly = p,
    window.ParsleyUtils = e,
    window.ParsleyValidator = new o(window.ParsleyConfig.validators, window.ParsleyConfig.i18n),
    !1 !== e.get(window, "ParsleyConfig.autoBind") && t(function() {
        t("[data-parsley-validate]").length && t("[data-parsley-validate]").parsley()
    })
}),
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "undefined" == typeof t && "undefined" != typeof window.jQuery && (t = window.jQuery);
    var e = {
            attr: function(t, e, n) {
                var i,
                    r = {},
                    o = this.msieversion(),
                    s = new RegExp("^" + e, "i");
                if ("undefined" == typeof t || "undefined" == typeof t[0])
                    return {};
                for (var a in t[0].attributes)
                    if (i = t[0].attributes[a], "undefined" != typeof i && null !== i && (!o || o >= 8 || i.specified) && s.test(i.name)) {
                        if ("undefined" != typeof n && new RegExp(n + "$", "i").test(i.name))
                            return !0;
                        r[this.camelize(i.name.replace(e, ""))] = this.deserializeValue(i.value)
                    }
                return "undefined" == typeof n ? r : !1
            },
            setAttr: function(t, e, n, i) {
                t[0].setAttribute(this.dasherize(e + n), String(i))
            },
            get: function(t, e) {
                for (var n = 0, i = (e || "").split("."); this.isObject(t) || this.isArray(t);)
                    if (t = t[i[n++]], n === i.length)
                        return t;
                return void 0
            },
            hash: function(t) {
                return String(Math.random()).substring(2, t ? t + 2 : 9)
            },
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            isObject: function(t) {
                return t === Object(t)
            },
            deserializeValue: function(e) {
                var n;
                try {
                    return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null : isNaN(n = Number(e)) ? /^[\[\{]/.test(e) ? t.parseJSON(e) : e : n) : e
                } catch (i) {
                    return e
                }
            },
            camelize: function(t) {
                return t.replace(/-+(.)?/g, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            },
            dasherize: function(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            },
            msieversion: function() {
                var t = window.navigator.userAgent,
                    e = t.indexOf("MSIE ");
                return e > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? parseInt(t.substring(e + 5, t.indexOf(".", e)), 10) : 0
            }
        },
        n = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function() {},
            errorsContainer: function() {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        i = function() {};
    i.prototype = {
        asyncSupport: !1,
        actualizeOptions: function() {
            return this.options = this.OptionsFactory.get(this), this
        },
        validateThroughValidator: function(t, e, n) {
            return window.ParsleyValidator.validate(t, e, n)
        },
        subscribe: function(e, n) {
            return t.listenTo(this, e.toLowerCase(), n), this
        },
        unsubscribe: function(e) {
            return t.unsubscribeTo(this, e.toLowerCase()), this
        },
        reset: function() {
            if ("ParsleyForm" !== this.__class__)
                return t.emit("parsley:field:reset", this);
            for (var e = 0; e < this.fields.length; e++)
                t.emit("parsley:field:reset", this.fields[e]);
            t.emit("parsley:form:reset", this)
        },
        destroy: function() {
            if ("ParsleyForm" !== this.__class__)
                return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void t.emit("parsley:field:destroy", this);
            for (var e = 0; e < this.fields.length; e++)
                this.fields[e].destroy();
            this.$element.removeData("Parsley"),
            t.emit("parsley:form:destroy", this)
        }
    };
    var r = function() {
        var t = {},
            e = function(t) {
                this.__class__ = "Validator",
                this.__version__ = "1.0.1",
                this.options = t || {},
                this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
            };
        e.prototype = {
            constructor: e,
            validate: function(t, e, n) {
                if ("string" != typeof t && "object" != typeof t)
                    throw new Error("You must validate an object or a string");
                return "string" == typeof t || s(t) ? this._validateString(t, e, n) : this.isBinded(t) ? this._validateBindedObject(t, e) : this._validateObject(t, e, n)
            },
            bind: function(t, e) {
                if ("object" != typeof t)
                    throw new Error("Must bind a Constraint to an object");
                return t[this.bindingKey] = new n(e), this
            },
            unbind: function(t) {
                return "undefined" == typeof t._validatorjsConstraint ? this : (delete t[this.bindingKey], this)
            },
            isBinded: function(t) {
                return "undefined" != typeof t[this.bindingKey]
            },
            getBinded: function(t) {
                return this.isBinded(t) ? t[this.bindingKey] : null
            },
            _validateString: function(t, e, n) {
                var o,
                    a = [];
                s(e) || (e = [e]);
                for (var l = 0; l < e.length; l++) {
                    if (!(e[l] instanceof r))
                        throw new Error("You must give an Assert or an Asserts array to validate a string");
                    o = e[l].check(t, n),
                    o instanceof i && a.push(o)
                }
                return a.length ? a : !0
            },
            _validateObject: function(t, e, i) {
                if ("object" != typeof e)
                    throw new Error("You must give a constraint to validate an object");
                return e instanceof n ? e.check(t, i) : new n(e).check(t, i)
            },
            _validateBindedObject: function(t, e) {
                return t[this.bindingKey].check(t, e)
            }
        },
        e.errorCode = {
            must_be_a_string: "must_be_a_string",
            must_be_an_array: "must_be_an_array",
            must_be_a_number: "must_be_a_number",
            must_be_a_string_or_array: "must_be_a_string_or_array"
        };
        var n = function(t, e) {
            if (this.__class__ = "Constraint", this.options = e || {}, this.nodes = {}, t)
                try {
                    this._bootstrap(t)
                } catch (n) {
                    throw new Error("Should give a valid mapping object to Constraint", n, t)
                }
        };
        n.prototype = {
            constructor: n,
            check: function(t, e) {
                var n,
                    i = {};
                for (var a in this.nodes) {
                    for (var l = !1, u = this.get(a), c = s(u) ? u : [u], d = c.length - 1; d >= 0; d--)
                        "Required" !== c[d].__class__ || (l = c[d].requiresValidation(e));
                    if (this.has(a, t) || this.options.strict || l)
                        try {
                            this.has(a, this.options.strict || l ? t : void 0) || (new r).HaveProperty(a).validate(t),
                            n = this._check(a, t[a], e),
                            (s(n) && n.length > 0 || !s(n) && !o(n)) && (i[a] = n)
                        } catch (h) {
                            i[a] = h
                        }
                }
                return o(i) ? !0 : i
            },
            add: function(t, e) {
                if (e instanceof r || s(e) && e[0] instanceof r)
                    return this.nodes[t] = e, this;
                if ("object" == typeof e && !s(e))
                    return this.nodes[t] = e instanceof n ? e : new n(e), this;
                throw new Error("Should give an Assert, an Asserts array, a Constraint", e)
            },
            has: function(t, e) {
                return e = "undefined" != typeof e ? e : this.nodes, "undefined" != typeof e[t]
            },
            get: function(t, e) {
                return this.has(t) ? this.nodes[t] : e || null
            },
            remove: function(t) {
                var e = [];
                for (var n in this.nodes)
                    n !== t && (e[n] = this.nodes[n]);
                return this.nodes = e, this
            },
            _bootstrap: function(t) {
                if (t instanceof n)
                    return this.nodes = t.nodes;
                for (var e in t)
                    this.add(e, t[e])
            },
            _check: function(t, e, i) {
                if (this.nodes[t] instanceof r)
                    return this._checkAsserts(e, [this.nodes[t]], i);
                if (s(this.nodes[t]))
                    return this._checkAsserts(e, this.nodes[t], i);
                if (this.nodes[t] instanceof n)
                    return this.nodes[t].check(e, i);
                throw new Error("Invalid node", this.nodes[t])
            },
            _checkAsserts: function(t, e, n) {
                for (var i, r = [], o = 0; o < e.length; o++)
                    i = e[o].check(t, n),
                    "undefined" != typeof i && !0 !== i && r.push(i);
                return r
            }
        };
        var i = function(t, e, n) {
            if (this.__class__ = "Violation", !(t instanceof r))
                throw new Error("Should give an assertion implementing the Assert interface");
            this.assert = t,
            this.value = e,
            "undefined" != typeof n && (this.violation = n)
        };
        i.prototype = {
            show: function() {
                var t = {
                    assert: this.assert.__class__,
                    value: this.value
                };
                return this.violation && (t.violation = this.violation), t
            },
            __toString: function() {
                return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
            },
            getViolation: function() {
                var t,
                    e;
                for (t in this.violation)
                    e = this.violation[t];
                return {
                    constraint: t,
                    expected: e
                }
            }
        };
        var r = function(t) {
            this.__class__ = "Assert",
            this.__parentClass__ = this.__class__,
            this.groups = [],
            "undefined" != typeof t && this.addGroup(t)
        };
        r.prototype = {
            construct: r,
            requiresValidation: function(t) {
                return t && !this.hasGroup(t) ? !1 : !t && this.hasGroups() ? !1 : !0
            },
            check: function(t, e) {
                if (this.requiresValidation(e))
                    try {
                        return this.validate(t, e)
                    } catch (n) {
                        return n
                    }
            },
            hasGroup: function(t) {
                return s(t) ? this.hasOneOf(t) : "Any" === t ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(t) : "Default" === t
            },
            hasOneOf: function(t) {
                for (var e = 0; e < t.length; e++)
                    if (this.hasGroup(t[e]))
                        return !0;
                return !1
            },
            hasGroups: function() {
                return this.groups.length > 0
            },
            addGroup: function(t) {
                return s(t) ? this.addGroups(t) : (this.hasGroup(t) || this.groups.push(t), this)
            },
            removeGroup: function(t) {
                for (var e = [], n = 0; n < this.groups.length; n++)
                    t !== this.groups[n] && e.push(this.groups[n]);
                return this.groups = e, this
            },
            addGroups: function(t) {
                for (var e = 0; e < t.length; e++)
                    this.addGroup(t[e]);
                return this
            },
            HaveProperty: function(t) {
                return this.__class__ = "HaveProperty", this.node = t, this.validate = function(t) {
                    if ("undefined" == typeof t[this.node])
                        throw new i(this, t, {
                            value: this.node
                        });
                    return !0
                }, this
            },
            Blank: function() {
                return this.__class__ = "Blank", this.validate = function(t) {
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if ("" !== t.replace(/^\s+/g, "").replace(/\s+$/g, ""))
                        throw new i(this, t);
                    return !0
                }, this
            },
            Callback: function(t) {
                if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof t)
                    throw new Error("Callback must be instanciated with a function");
                return this.fn = t, this.validate = function(t) {
                    var e = this.fn.apply(this, [t].concat(this.arguments));
                    if (!0 !== e)
                        throw new i(this, t, {
                            result: e
                        });
                    return !0
                }, this
            },
            Choice: function(t) {
                if (this.__class__ = "Choice", !s(t) && "function" != typeof t)
                    throw new Error("Choice must be instanciated with an array or a function");
                return this.list = t, this.validate = function(t) {
                    for (var e = "function" == typeof this.list ? this.list() : this.list, n = 0; n < e.length; n++)
                        if (t === e[n])
                            return !0;
                    throw new i(this, t, {
                        choices: e
                    })
                }, this
            },
            Collection: function(t) {
                return this.__class__ = "Collection", this.constraint = "undefined" != typeof t ? t instanceof r ? t : new n(t) : !1, this.validate = function(t, n) {
                    var r,
                        a = new e,
                        l = 0,
                        u = {},
                        c = this.groups.length ? this.groups : n;
                    if (!s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_an_array
                        });
                    for (var d = 0; d < t.length; d++)
                        r = this.constraint ? a.validate(t[d], this.constraint, c) : a.validate(t[d], c),
                        o(r) || (u[l] = r),
                        l++;
                    return o(u) ? !0 : u
                }, this
            },
            Count: function(t) {
                return this.__class__ = "Count", this.count = t, this.validate = function(t) {
                    if (!s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_an_array
                        });
                    var n = "function" == typeof this.count ? this.count(t) : this.count;
                    if (isNaN(Number(n)))
                        throw new Error("Count must be a valid interger", n);
                    if (n !== t.length)
                        throw new i(this, t, {
                            count: n
                        });
                    return !0
                }, this
            },
            Email: function() {
                return this.__class__ = "Email", this.validate = function(t) {
                    var n = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if (!n.test(t))
                        throw new i(this, t);
                    return !0
                }, this
            },
            EqualTo: function(t) {
                if (this.__class__ = "EqualTo", "undefined" == typeof t)
                    throw new Error("EqualTo must be instanciated with a value or a function");
                return this.reference = t, this.validate = function(t) {
                    var e = "function" == typeof this.reference ? this.reference(t) : this.reference;
                    if (e !== t)
                        throw new i(this, t, {
                            value: e
                        });
                    return !0
                }, this
            },
            GreaterThan: function(t) {
                if (this.__class__ = "GreaterThan", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold >= t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            GreaterThanOrEqual: function(t) {
                if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold > t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            InstanceOf: function(t) {
                if (this.__class__ = "InstanceOf", "undefined" == typeof t)
                    throw new Error("InstanceOf must be instanciated with a value");
                return this.classRef = t, this.validate = function(t) {
                    if (!0 != t instanceof this.classRef)
                        throw new i(this, t, {
                            classRef: this.classRef
                        });
                    return !0
                }, this
            },
            Length: function(t) {
                if (this.__class__ = "Length", !t.min && !t.max)
                    throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                return this.min = t.min, this.max = t.max, this.validate = function(t) {
                    if ("string" != typeof t && !s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string_or_array
                        });
                    if ("undefined" != typeof this.min && this.min === this.max && t.length !== this.min)
                        throw new i(this, t, {
                            min: this.min,
                            max: this.max
                        });
                    if ("undefined" != typeof this.max && t.length > this.max)
                        throw new i(this, t, {
                            max: this.max
                        });
                    if ("undefined" != typeof this.min && t.length < this.min)
                        throw new i(this, t, {
                            min: this.min
                        });
                    return !0
                }, this
            },
            LessThan: function(t) {
                if (this.__class__ = "LessThan", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold <= t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            LessThanOrEqual: function(t) {
                if (this.__class__ = "LessThanOrEqual", "undefined" == typeof t)
                    throw new Error("Should give a threshold value");
                return this.threshold = t, this.validate = function(t) {
                    if ("" === t || isNaN(Number(t)))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_number
                        });
                    if (this.threshold < t)
                        throw new i(this, t, {
                            threshold: this.threshold
                        });
                    return !0
                }, this
            },
            NotNull: function() {
                return this.__class__ = "NotNull", this.validate = function(t) {
                    if (null === t || "undefined" == typeof t)
                        throw new i(this, t);
                    return !0
                }, this
            },
            NotBlank: function() {
                return this.__class__ = "NotBlank", this.validate = function(t) {
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if ("" === t.replace(/^\s+/g, "").replace(/\s+$/g, ""))
                        throw new i(this, t);
                    return !0
                }, this
            },
            Null: function() {
                return this.__class__ = "Null", this.validate = function(t) {
                    if (null !== t)
                        throw new i(this, t);
                    return !0
                }, this
            },
            Range: function(t, e) {
                if (this.__class__ = "Range", "undefined" == typeof t || "undefined" == typeof e)
                    throw new Error("Range assert expects min and max values");
                return this.min = t, this.max = e, this.validate = function(t) {
                    try {
                        return "string" == typeof t && isNaN(Number(t)) || s(t) ? (new r).Length({
                            min: this.min,
                            max: this.max
                        }).validate(t) : (new r).GreaterThanOrEqual(this.min).validate(t) && (new r).LessThanOrEqual(this.max).validate(t), !0
                    } catch (e) {
                        throw new i(this, t, e.violation)
                    }
                    return !0
                }, this
            },
            Regexp: function(t, n) {
                if (this.__class__ = "Regexp", "undefined" == typeof t)
                    throw new Error("You must give a regexp");
                return this.regexp = t, this.flag = n || "", this.validate = function(t) {
                    if ("string" != typeof t)
                        throw new i(this, t, {
                            value: e.errorCode.must_be_a_string
                        });
                    if (!new RegExp(this.regexp, this.flag).test(t))
                        throw new i(this, t, {
                            regexp: this.regexp,
                            flag: this.flag
                        });
                    return !0
                }, this
            },
            Required: function() {
                return this.__class__ = "Required", this.validate = function(t) {
                    if ("undefined" == typeof t)
                        throw new i(this, t);
                    try {
                        "string" == typeof t ? (new r).NotNull().validate(t) && (new r).NotBlank().validate(t) : !0 === s(t) && (new r).Length({
                            min: 1
                        }).validate(t)
                    } catch (e) {
                        throw new i(this, t)
                    }
                    return !0
                }, this
            },
            Unique: function(t) {
                return this.__class__ = "Unique", "object" == typeof t && (this.key = t.key), this.validate = function(t) {
                    var n,
                        r = [];
                    if (!s(t))
                        throw new i(this, t, {
                            value: e.errorCode.must_be_an_array
                        });
                    for (var o = 0; o < t.length; o++)
                        if (n = "object" == typeof t[o] ? t[o][this.key] : t[o], "undefined" != typeof n) {
                            if (-1 !== r.indexOf(n))
                                throw new i(this, t, {
                                    value: n
                                });
                            r.push(n)
                        }
                    return !0
                }, this
            }
        },
        t.Assert = r,
        t.Validator = e,
        t.Violation = i,
        t.Constraint = n,
        Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
            if (null === this)
                throw new TypeError;
            var e = Object(this),
                n = e.length >>> 0;
            if (0 === n)
                return -1;
            var i = 0;
            if (arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : 0 !== i && 1 / 0 != i && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n)
                return -1;
            for (var r = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > r; r++)
                if (r in e && e[r] === t)
                    return r;
            return -1
        });
        var o = function(t) {
                for (var e in t)
                    return !1;
                return !0
            },
            s = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
        return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function() {
            return t
        }) : "undefined" != typeof module && module.exports ? module.exports = t : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = t, t
    }();
    r = "undefined" != typeof r ? r : "undefined" != typeof module ? module.exports : null;
    var o = function(t, e) {
        this.__class__ = "ParsleyValidator",
        this.Validator = r,
        this.locale = "en",
        this.init(t || {}, e || {})
    };
    o.prototype = {
        init: function(e, n) {
            this.catalog = n;
            for (var i in e)
                this.addValidator(i, e[i].fn, e[i].priority, e[i].requirementsTransformer);
            t.emit("parsley:validator:init")
        },
        setLocale: function(t) {
            if ("undefined" == typeof this.catalog[t])
                throw new Error(t + " is not available in the catalog");
            return this.locale = t, this
        },
        addCatalog: function(t, e, n) {
            return "object" == typeof e && (this.catalog[t] = e), !0 === n ? this.setLocale(t) : this
        },
        addMessage: function(t, e, n) {
            return "undefined" == typeof this.catalog[t] && (this.catalog[t] = {}), this.catalog[t][e.toLowerCase()] = n, this
        },
        validate: function() {
            return (new this.Validator.Validator).validate.apply(new r.Validator, arguments)
        },
        addValidator: function(e, n, i, o) {
            return this.validators[e.toLowerCase()] = function(e) {
                return t.extend((new r.Assert).Callback(n, e), {
                    priority: i,
                    requirementsTransformer: o
                })
            }, this
        },
        updateValidator: function(t, e, n, i) {
            return this.addValidator(t, e, n, i)
        },
        removeValidator: function(t) {
            return delete this.validators[t], this
        },
        getErrorMessage: function(t) {
            var e;
            return e = "type" === t.name ? this.catalog[this.locale][t.name][t.requirements] : this.formatMessage(this.catalog[this.locale][t.name], t.requirements), "" !== e ? e : this.catalog[this.locale].defaultMessage
        },
        formatMessage: function(t, e) {
            if ("object" == typeof e) {
                for (var n in e)
                    t = this.formatMessage(t, e[n]);
                return t
            }
            return "string" == typeof t ? t.replace(new RegExp("%s", "i"), e) : ""
        },
        validators: {
            notblank: function() {
                return t.extend((new r.Assert).NotBlank(), {
                    priority: 2
                })
            },
            required: function() {
                return t.extend((new r.Assert).Required(), {
                    priority: 512
                })
            },
            type: function(e) {
                var n;
                switch (e) {
                case "email":
                    n = (new r.Assert).Email();
                    break;
                case "range":
                case "number":
                    n = (new r.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                    break;
                case "integer":
                    n = (new r.Assert).Regexp("^-?\\d+$");
                    break;
                case "digits":
                    n = (new r.Assert).Regexp("^\\d+$");
                    break;
                case "alphanum":
                    n = (new r.Assert).Regexp("^\\w+$", "i");
                    break;
                case "url":
                    n = (new r.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,24}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
                    break;
                default:
                    throw new Error("validator type `" + e + "` is not supported")
                }
                return t.extend(n, {
                    priority: 256
                })
            },
            pattern: function(e) {
                var n = "";
                return /^\/.*\/(?:[gimy]*)$/.test(e) && (n = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + n + "$"), "$1")), t.extend((new r.Assert).Regexp(e, n), {
                    priority: 64
                })
            },
            minlength: function(e) {
                return t.extend((new r.Assert).Length({
                    min: e
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            maxlength: function(e) {
                return t.extend((new r.Assert).Length({
                    max: e
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            length: function(e) {
                return t.extend((new r.Assert).Length({
                    min: e[0],
                    max: e[1]
                }), {
                    priority: 32
                })
            },
            mincheck: function(t) {
                return this.minlength(t)
            },
            maxcheck: function(t) {
                return this.maxlength(t)
            },
            check: function(t) {
                return this.length(t)
            },
            min: function(e) {
                return t.extend((new r.Assert).GreaterThanOrEqual(e), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            max: function(e) {
                return t.extend((new r.Assert).LessThanOrEqual(e), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                    }
                })
            },
            range: function(e) {
                return t.extend((new r.Assert).Range(e[0], e[1]), {
                    priority: 32,
                    requirementsTransformer: function() {
                        for (var t = 0; t < e.length; t++)
                            e[t] = "string" != typeof e[t] || isNaN(e[t]) ? e[t] : parseInt(e[t], 10);
                        return e
                    }
                })
            },
            equalto: function(e) {
                return t.extend((new r.Assert).EqualTo(e), {
                    priority: 256,
                    requirementsTransformer: function() {
                        return t(e).length ? t(e).val() : e
                    }
                })
            }
        }
    };
    var s = function() {
        this.__class__ = "ParsleyUI"
    };
    s.prototype = {
        listen: function() {
            return t.listen("parsley:form:init", this, this.setupForm), t.listen("parsley:field:init", this, this.setupField), t.listen("parsley:field:validated", this, this.reflow), t.listen("parsley:form:validated", this, this.focus), t.listen("parsley:field:reset", this, this.reset), t.listen("parsley:form:destroy", this, this.destroy), t.listen("parsley:field:destroy", this, this.destroy), this
        },
        reflow: function(t) {
            if ("undefined" != typeof t._ui && !1 !== t._ui.active) {
                var e = this._diff(t.validationResult, t._ui.lastValidationResult);
                t._ui.lastValidationResult = t.validationResult,
                t._ui.validatedOnce = !0,
                this.manageStatusClass(t),
                this.manageErrorsMessages(t, e),
                this.actualizeTriggers(t),
                (e.kept.length || e.added.length) && "undefined" == typeof t._ui.failedOnce && this.manageFailingFieldTrigger(t)
            }
        },
        getErrorsMessages: function(t) {
            if (!0 === t.validationResult)
                return [];
            for (var e = [], n = 0; n < t.validationResult.length; n++)
                e.push(this._getErrorMessage(t, t.validationResult[n].assert));
            return e
        },
        manageStatusClass: function(t) {
            !0 === t.validationResult ? this._successClass(t) : t.validationResult.length > 0 ? this._errorClass(t) : this._resetClass(t)
        },
        manageErrorsMessages: function(e, n) {
            if ("undefined" == typeof e.options.errorsMessagesDisabled) {
                if ("undefined" != typeof e.options.errorMessage)
                    return n.added.length || n.kept.length ? (0 === e._ui.$errorsWrapper.find(".parsley-custom-error-message").length && e._ui.$errorsWrapper.append(t(e.options.errorTemplate).addClass("parsley-custom-error-message")), e._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(e.options.errorMessage)) : e._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var i = 0; i < n.removed.length; i++)
                    this.removeError(e, n.removed[i].assert.name, !0);
                for (i = 0; i < n.added.length; i++)
                    this.addError(e, n.added[i].assert.name, void 0, n.added[i].assert, !0);
                for (i = 0; i < n.kept.length; i++)
                    this.updateError(e, n.kept[i].assert.name, void 0, n.kept[i].assert, !0)
            }
        },
        addError: function(e, n, i, r, o) {
            e._ui.$errorsWrapper.addClass("filled").append(t(e.options.errorTemplate).addClass("parsley-" + n).html(i || this._getErrorMessage(e, r))),
            !0 !== o && this._errorClass(e)
        },
        updateError: function(t, e, n, i, r) {
            t._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(n || this._getErrorMessage(t, i)),
            !0 !== r && this._errorClass(t)
        },
        removeError: function(t, e, n) {
            t._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove(),
            !0 !== n && this.manageStatusClass(t)
        },
        focus: function(t) {
            if (!0 === t.validationResult || "none" === t.options.focus)
                return t._focusedField = null;
            t._focusedField = null;
            for (var e = 0; e < t.fields.length; e++)
                if (!0 !== t.fields[e].validationResult && t.fields[e].validationResult.length > 0 && "undefined" == typeof t.fields[e].options.noFocus) {
                    if ("first" === t.options.focus)
                        return t._focusedField = t.fields[e].$element, t._focusedField.focus();
                    t._focusedField = t.fields[e].$element
                }
            return null === t._focusedField ? null : t._focusedField.focus()
        },
        _getErrorMessage: function(t, e) {
            var n = e.name + "Message";
            return "undefined" != typeof t.options[n] ? window.ParsleyValidator.formatMessage(t.options[n], e.requirements) : window.ParsleyValidator.getErrorMessage(e)
        },
        _diff: function(t, e, n) {
            for (var i = [], r = [], o = 0; o < t.length; o++) {
                for (var s = !1, a = 0; a < e.length; a++)
                    if (t[o].assert.name === e[a].assert.name) {
                        s = !0;
                        break
                    }
                s ? r.push(t[o]) : i.push(t[o])
            }
            return {
                kept: r,
                added: i,
                removed: n ? [] : this._diff(e, t, !0).added
            }
        },
        setupForm: function(e) {
            e.$element.on("submit.Parsley", !1, t.proxy(e.onSubmitValidate, e)),
            !1 !== e.options.uiEnabled && e.$element.attr("novalidate", "")
        },
        setupField: function(e) {
            var n = {
                active: !1
            };
            !1 !== e.options.uiEnabled && (n.active = !0, e.$element.attr(e.options.namespace + "id", e.__id__), n.$errorClassHandler = this._manageClassHandler(e), n.errorsWrapperId = "parsley-id-" + ("undefined" != typeof e.options.multiple ? "multiple-" + e.options.multiple : e.__id__), n.$errorsWrapper = t(e.options.errorsWrapper).attr("id", n.errorsWrapperId), n.lastValidationResult = [], n.validatedOnce = !1, n.validationInformationVisible = !1, e._ui = n, e.$element.is(e.options.excluded) || this._insertErrorWrapper(e), this.actualizeTriggers(e))
        },
        _manageClassHandler: function(e) {
            if ("string" == typeof e.options.classHandler && t(e.options.classHandler).length)
                return t(e.options.classHandler);
            var n = e.options.classHandler(e);
            return "undefined" != typeof n && n.length ? n : "undefined" == typeof e.options.multiple || e.$element.is("select") ? e.$element : e.$element.parent()
        },
        _insertErrorWrapper: function(e) {
            var n;
            if ("string" == typeof e.options.errorsContainer) {
                if (t(e.options.errorsContainer).length)
                    return t(e.options.errorsContainer).append(e._ui.$errorsWrapper);
                window.console && window.console.warn && window.console.warn("The errors container `" + e.options.errorsContainer + "` does not exist in DOM")
            } else
                "function" == typeof e.options.errorsContainer && (n = e.options.errorsContainer(e));
            return "undefined" != typeof n && n.length ? n.append(e._ui.$errorsWrapper) : "undefined" == typeof e.options.multiple ? e.$element.after(e._ui.$errorsWrapper) : e.$element.parent().after(e._ui.$errorsWrapper)
        },
        actualizeTriggers: function(e) {
            var n = e.$element;
            if (e.options.multiple && (n = t("[" + e.options.namespace + 'multiple="' + e.options.multiple + '"]')), n.off(".Parsley"), !1 !== e.options.trigger) {
                var i = e.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                "" !== i && n.on(i.split(" ").join(".Parsley ") + ".Parsley", t.proxy("function" == typeof e.eventValidate ? e.eventValidate : this.eventValidate, e))
            }
        },
        eventValidate: function(t) {
            new RegExp("key").test(t.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
        },
        manageFailingFieldTrigger: function(e) {
            return e._ui.failedOnce = !0, e.options.multiple && t("[" + e.options.namespace + 'multiple="' + e.options.multiple + '"]').each(function() {
                return new RegExp("change", "i").test(t(this).parsley().options.trigger || "") ? void 0 : t(this).on("change.ParsleyFailedOnce", !1, t.proxy(e.validate, e))
            }), e.$element.is("select") && !new RegExp("change", "i").test(e.options.trigger || "") ? e.$element.on("change.ParsleyFailedOnce", !1, t.proxy(e.validate, e)) : new RegExp("keyup", "i").test(e.options.trigger || "") ? void 0 : e.$element.on("keyup.ParsleyFailedOnce", !1, t.proxy(e.validate, e))
        },
        reset: function(t) {
            t.$element.off(".Parsley"),
            t.$element.off(".ParsleyFailedOnce"),
            "undefined" != typeof t._ui && "ParsleyForm" !== t.__class__ && (t._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(t), t._ui.validatedOnce = !1, t._ui.lastValidationResult = [], t._ui.validationInformationVisible = !1)
        },
        destroy: function(t) {
            this.reset(t),
            "ParsleyForm" !== t.__class__ && ("undefined" != typeof t._ui && t._ui.$errorsWrapper.remove(), delete t._ui)
        },
        _successClass: function(t) {
            t._ui.validationInformationVisible = !0,
            t._ui.$errorClassHandler.removeClass(t.options.errorClass).addClass(t.options.successClass)
        },
        _errorClass: function(t) {
            t._ui.validationInformationVisible = !0,
            t._ui.$errorClassHandler.removeClass(t.options.successClass).addClass(t.options.errorClass)
        },
        _resetClass: function(t) {
            t._ui.$errorClassHandler.removeClass(t.options.successClass).removeClass(t.options.errorClass)
        }
    };
    var a = function(n, i, r, o) {
        this.__class__ = "OptionsFactory",
        this.__id__ = e.hash(4),
        this.formOptions = null,
        this.fieldOptions = null,
        this.staticOptions = t.extend(!0, {}, n, i, r, {
            namespace: o
        })
    };
    a.prototype = {
        get: function(t) {
            if ("undefined" == typeof t.__class__)
                throw new Error("Parsley Instance expected");
            switch (t.__class__) {
            case "Parsley":
                return this.staticOptions;
            case "ParsleyForm":
                return this.getFormOptions(t);
            case "ParsleyField":
            case "ParsleyFieldMultiple":
                return this.getFieldOptions(t);
            default:
                throw new Error("Instance " + t.__class__ + " is not supported")
            }
        },
        getFormOptions: function(n) {
            return this.formOptions = e.attr(n.$element, this.staticOptions.namespace), t.extend({}, this.staticOptions, this.formOptions)
        },
        getFieldOptions: function(n) {
            return this.fieldOptions = e.attr(n.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof n.parent && (this.formOptions = this.getFormOptions(n.parent)), t.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
        }
    };
    var l = function(n, i) {
        if (this.__class__ = "ParsleyForm", this.__id__ = e.hash(4), "OptionsFactory" !== e.get(i, "__class__"))
            throw new Error("You must give an OptionsFactory instance");
        this.OptionsFactory = i,
        this.$element = t(n),
        this.validationResult = null,
        this.options = this.OptionsFactory.get(this)
    };
    l.prototype = {
        onSubmitValidate: function(e) {
            return this.validate(void 0, void 0, e), !1 === this.validationResult && e instanceof t.Event && (e.stopImmediatePropagation(), e.preventDefault()), this
        },
        validate: function(e, n, i) {
            this.submitEvent = i,
            this.validationResult = !0;
            var r = [];
            t.emit("parsley:form:validate", this),
            this._refreshFields();
            for (var o = 0; o < this.fields.length; o++)
                (!e || this._isFieldInGroup(this.fields[o], e)) && (r = this.fields[o].validate(n), !0 !== r && r.length > 0 && this.validationResult && (this.validationResult = !1));
            return t.emit("parsley:form:" + (this.validationResult ? "success" : "error"), this), t.emit("parsley:form:validated", this), this.validationResult
        },
        isValid: function(t, e) {
            this._refreshFields();
            for (var n = 0; n < this.fields.length; n++)
                if ((!t || this._isFieldInGroup(this.fields[n], t)) && !1 === this.fields[n].isValid(e))
                    return !1;
            return !0
        },
        _isFieldInGroup: function(n, i) {
            return e.isArray(n.options.group) ? -1 !== t.inArray(i, n.options.group) : n.options.group === i
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var t = this;
            return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
                var e = new window.Parsley(this, {}, t);
                "ParsleyField" !== e.__class__ && "ParsleyFieldMultiple" !== e.__class__ || e.$element.is(e.options.excluded) || "undefined" == typeof t.fieldsMappedById[e.__class__ + "-" + e.__id__] && (t.fieldsMappedById[e.__class__ + "-" + e.__id__] = e, t.fields.push(e))
            }), this
        }
    };
    var u = function(n, i, r, o, s) {
            var a = {};
            if (!new RegExp("ParsleyField").test(e.get(n, "__class__")))
                throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
            if ("function" == typeof window.ParsleyValidator.validators[i] && (a = window.ParsleyValidator.validators[i](r)), "Assert" !== a.__parentClass__)
                throw new Error("Valid validator expected");
            var l = function() {
                return "undefined" != typeof n.options[i + "Priority"] ? n.options[i + "Priority"] : e.get(a, "priority") || 2
            };
            return o = o || l(), "function" == typeof a.requirementsTransformer && (r = a.requirementsTransformer(), a = window.ParsleyValidator.validators[i](r)), t.extend(a, {
                name: i,
                requirements: r,
                priority: o,
                groups: [o],
                isDomConstraint: s || e.attr(n.$element, n.options.namespace, i)
            })
        },
        c = function(n, i, r) {
            this.__class__ = "ParsleyField",
            this.__id__ = e.hash(4),
            this.$element = t(n),
            "undefined" != typeof r ? (this.parent = r, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = i, this.options = this.OptionsFactory.get(this)),
            this.constraints = [],
            this.constraintsByName = {},
            this.validationResult = [],
            this._bindConstraints()
        };
    c.prototype = {
        validate: function(e) {
            return this.value = this.getValue(), t.emit("parsley:field:validate", this), t.emit("parsley:field:" + (this.isValid(e, this.value) ? "success" : "error"), this), t.emit("parsley:field:validated", this), this.validationResult
        },
        isValid: function(t, e) {
            this.refreshConstraints();
            var n = this._getConstraintsSortedPriorities();
            if (0 === n.length)
                return this.validationResult = [];
            if (("undefined" == typeof e || null === e) && (e = this.getValue()), !e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== t)
                return this.validationResult = [];
            if (!1 === this.options.priorityEnabled)
                return !0 === (this.validationResult = this.validateThroughValidator(e, this.constraints, "Any"));
            for (var i = 0; i < n.length; i++)
                if (!0 !== (this.validationResult = this.validateThroughValidator(e, this.constraints, n[i])))
                    return !1;
            return !0
        },
        getValue: function() {
            var t;
            return t = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof t || null === t ? "" : !0 === this.options.trimValue ? t.replace(/^\s+|\s+$/g, "") : t
        },
        refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        addConstraint: function(t, e, n, i) {
            if (t = t.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[t]) {
                var r = new u(this, t, e, n, i);
                "undefined" !== this.constraintsByName[r.name] && this.removeConstraint(r.name),
                this.constraints.push(r),
                this.constraintsByName[r.name] = r
            }
            return this
        },
        removeConstraint: function(t) {
            for (var e = 0; e < this.constraints.length; e++)
                if (t === this.constraints[e].name) {
                    this.constraints.splice(e, 1);
                    break
                }
            return delete this.constraintsByName[t], this
        },
        updateConstraint: function(t, e, n) {
            return this.removeConstraint(t).addConstraint(t, e, n)
        },
        _bindConstraints: function() {
            for (var t = [], e = {}, n = 0; n < this.constraints.length; n++)
                !1 === this.constraints[n].isDomConstraint && (t.push(this.constraints[n]), e[this.constraints[n].name] = this.constraints[n]);
            this.constraints = t,
            this.constraintsByName = e;
            for (var i in this.options)
                this.addConstraint(i, this.options[i]);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0),
            "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0),
            "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0),
            "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
            var t = this.$element.attr("type");
            return "undefined" == typeof t ? this : "number" === t ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : new RegExp(t, "i").test("email url range") ? this.addConstraint("type", t, void 0, !0) : this
        },
        _isRequired: function() {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        },
        _getConstraintsSortedPriorities: function() {
            for (var t = [], e = 0; e < this.constraints.length; e++)
                -1 === t.indexOf(this.constraints[e].priority) && t.push(this.constraints[e].priority);
            return t.sort(function(t, e) {
                return e - t
            }), t
        }
    };
    var d = function() {
        this.__class__ = "ParsleyFieldMultiple"
    };
    d.prototype = {
        addElement: function(t) {
            return this.$elements.push(t), this
        },
        refreshConstraints: function() {
            var e;
            if (this.constraints = [], this.$element.is("select"))
                return this.actualizeOptions()._bindConstraints(), this;
            for (var n = 0; n < this.$elements.length; n++)
                if (t("html").has(this.$elements[n]).length) {
                    e = this.$elements[n].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var i = 0; i < e.length; i++)
                        this.addConstraint(e[i].name, e[i].requirements, e[i].priority, e[i].isDomConstraint)
                } else
                    this.$elements.splice(n, 1);
            return this
        },
        getValue: function() {
            if ("undefined" != typeof this.options.value)
                return this.options.value;
            if (this.$element.is("input[type=radio]"))
                return t("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var e = [];
                return t("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
                    e.push(t(this).val())
                }), e.length ? e : []
            }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function(t) {
            return this.$elements = [this.$element], this.options.multiple = t, this
        }
    };
    var h = t({}),
        f = {};
    t.listen = function(t) {
        if ("undefined" == typeof f[t] && (f[t] = []), "function" == typeof arguments[1])
            return f[t].push({
                fn: arguments[1]
            });
        if ("object" == typeof arguments[1] && "function" == typeof arguments[2])
            return f[t].push({
                fn: arguments[2],
                ctxt: arguments[1]
            });
        throw new Error("Wrong parameters")
    },
    t.listenTo = function(t, e, n) {
        if ("undefined" == typeof f[e] && (f[e] = []), !(t instanceof c || t instanceof l))
            throw new Error("Must give Parsley instance");
        if ("string" != typeof e || "function" != typeof n)
            throw new Error("Wrong parameters");
        f[e].push({
            instance: t,
            fn: n
        })
    },
    t.unsubscribe = function(t, e) {
        if ("undefined" != typeof f[t]) {
            if ("string" != typeof t || "function" != typeof e)
                throw new Error("Wrong arguments");
            for (var n = 0; n < f[t].length; n++)
                if (f[t][n].fn === e)
                    return f[t].splice(n, 1)
        }
    },
    t.unsubscribeTo = function(t, e) {
        if ("undefined" != typeof f[e]) {
            if (!(t instanceof c || t instanceof l))
                throw new Error("Must give Parsley instance");
            for (var n = 0; n < f[e].length; n++)
                if ("undefined" != typeof f[e][n].instance && f[e][n].instance.__id__ === t.__id__)
                    return f[e].splice(n, 1)
        }
    },
    t.unsubscribeAll = function(t) {
        "undefined" != typeof f[t] && delete f[t]
    },
    t.emit = function(t, e) {
        if ("undefined" != typeof f[t])
            for (var n = 0; n < f[t].length; n++)
                if ("undefined" != typeof f[t][n].instance) {
                    if (e instanceof c || e instanceof l)
                        if (f[t][n].instance.__id__ !== e.__id__) {
                            if (f[t][n].instance instanceof l && e instanceof c)
                                for (var i = 0; i < f[t][n].instance.fields.length; i++)
                                    if (f[t][n].instance.fields[i].__id__ === e.__id__) {
                                        f[t][n].fn.apply(h, Array.prototype.slice.call(arguments, 1));
                                        continue
                                    }
                        } else
                            f[t][n].fn.apply(h, Array.prototype.slice.call(arguments, 1))
                } else
                    f[t][n].fn.apply("undefined" != typeof f[t][n].ctxt ? f[t][n].ctxt : h, Array.prototype.slice.call(arguments, 1))
    },
    t.subscribed = function() {
        return f
    },
    window.ParsleyConfig = window.ParsleyConfig || {},
    window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {},
    window.ParsleyConfig.i18n.en = t.extend(window.ParsleyConfig.i18n.en || {}, {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }),
    "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var p = function(n, i, r) {
        if (this.__class__ = "Parsley", this.__version__ = "2.0.6", this.__id__ = e.hash(4), "undefined" == typeof n)
            throw new Error("You must give an element");
        if ("undefined" != typeof r && "ParsleyForm" !== r.__class__)
            throw new Error("Parent instance must be a ParsleyForm instance");
        return this.init(t(n), i, r)
    };
    p.prototype = {
        init: function(t, i, r) {
            if (!t.length)
                throw new Error("You must bind Parsley on an existing element.");
            if (this.$element = t, this.$element.data("Parsley")) {
                var o = this.$element.data("Parsley");
                return "undefined" != typeof r && (o.parent = r), o
            }
            return this.OptionsFactory = new a(n, e.get(window, "ParsleyConfig") || {}, i, this.getNamespace(i)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || e.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(r) : this.bind("parsleyField", r) : this
        },
        isMultiple: function() {
            return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        },
        handleMultiple: function(n) {
            var i,
                r,
                o,
                s = this;
            if (this.options = t.extend(this.options, n ? n.OptionsFactory.get(n) : {}, e.attr(this.$element, this.options.namespace)), this.options.multiple ? r = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? r = i = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (r = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple"))
                return this.bind("parsleyFieldMultiple", n, r || this.__id__);
            if ("undefined" == typeof r)
                return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            if (r = r.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof i && t('input[name="' + i + '"]').each(function() {
                t(this).is("input[type=radio], input[type=checkbox]") && t(this).attr(s.options.namespace + "multiple", r)
            }), t("[" + this.options.namespace + "multiple=" + r + "]").length)
                for (var a = 0; a < t("[" + this.options.namespace + "multiple=" + r + "]").length; a++)
                    if ("undefined" != typeof t(t("[" + this.options.namespace + "multiple=" + r + "]").get(a)).data("Parsley")) {
                        o = t(t("[" + this.options.namespace + "multiple=" + r + "]").get(a)).data("Parsley"),
                        this.$element.data("ParsleyFieldMultiple") || (o.addElement(this.$element), this.$element.attr(this.options.namespace + "id", o.__id__));
                        break
                    }
            return this.bind("parsleyField", n, r, !0), o || this.bind("parsleyFieldMultiple", n, r)
        },
        getNamespace: function(t) {
            return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof e.get(t, "namespace") ? t.namespace : "undefined" != typeof e.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : n.namespace
        },
        bind: function(n, r, o, s) {
            var a;
            switch (n) {
            case "parsleyForm":
                a = t.extend(new l(this.$element, this.OptionsFactory), new i, window.ParsleyExtend)._bindFields();
                break;
            case "parsleyField":
                a = t.extend(new c(this.$element, this.OptionsFactory, r), new i, window.ParsleyExtend);
                break;
            case "parsleyFieldMultiple":
                a = t.extend(new c(this.$element, this.OptionsFactory, r), new i, new d, window.ParsleyExtend)._init(o);
                break;
            default:
                throw new Error(n + "is not a supported Parsley type")
            }
            return "undefined" != typeof o && e.setAttr(this.$element, this.options.namespace, "multiple", o), "undefined" != typeof s ? (this.$element.data("ParsleyFieldMultiple", a), a) : (new RegExp("ParsleyF", "i").test(a.__class__) && (this.$element.data("Parsley", a), t.emit("parsley:" + ("parsleyForm" === n ? "form" : "field") + ":init", a)), a)
        }
    },
    t.fn.parsley = t.fn.psly = function(e) {
        if (this.length > 1) {
            var n = [];
            return this.each(function() {
                n.push(t(this).parsley(e))
            }), n
        }
        return t(this).length ? new p(this, e) : void (window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
    },
    window.ParsleyUI = "function" == typeof e.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new s).listen(),
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}),
    window.Parsley = window.psly = p,
    window.ParsleyUtils = e,
    window.ParsleyValidator = new o(window.ParsleyConfig.validators, window.ParsleyConfig.i18n),
    !1 !== e.get(window, "ParsleyConfig.autoBind") && t(function() {
        t("[data-parsley-validate]").length && t("[data-parsley-validate]").parsley()
    })
}),
window.ParsleyConfig.i18n.en = window.ParsleyConfig.i18n.en || {},
window.ParsleyConfig.i18n.en.required = "can't be blank",
window.ParsleyConfig.i18n.en.default_error = "Please review the problems",
window.ParsleyConfig.i18n.es = window.ParsleyConfig.i18n.es || {},
window.ParsleyConfig.i18n.es.required = "no puede estar en blanco",
window.ParsleyConfig.i18n.es.default_error = "Por favor revise los problemas",
window.ParsleyConfig.i18n.hu = window.ParsleyConfig.i18n.hu || {},
window.ParsleyConfig.i18n.hu.required = "nincs megadva",
window.ParsleyConfig.i18n.hu.default_error = "K\xe9rj\xfck, ellen\u0151rizze a probl\xe9m\xe1kat",
window.ParsleyConfig.i18n.de = window.ParsleyConfig.i18n.de || {},
window.ParsleyConfig.i18n.de.required = "muss ausgef\xfcllt werden",
window.ParsleyConfig.i18n.de.default_error = "Bitte \xfcberpr\xfcfen Sie die Probleme",
window.ParsleyConfig.i18n.it = window.ParsleyConfig.i18n.it || {},
window.ParsleyConfig.i18n.it.required = "non pu\xf2 essere lasciato in bianco",
window.ParsleyConfig.i18n.it.default_error = "Si prega di esaminare i problemi",
window.ParsleyConfig.i18n.fi = window.ParsleyConfig.i18n.fi || {},
window.ParsleyConfig.i18n.fi.required = "ei voi olla sis\xe4ll\xf6t\xf6n",
window.ParsleyConfig.i18n.fi.default_error = "Tutustu ongelmien",
window.ParsleyConfig.i18n.fr = window.ParsleyConfig.i18n.fr || {},
window.ParsleyConfig.i18n.fr.required = "doit \xeatre rempli(e)",
window.ParsleyConfig.i18n.fr.default_error = "Veuillez examiner les probl\xe8mes",
window.ParsleyConfig.i18n.pl = window.ParsleyConfig.i18n.pl || {},
window.ParsleyConfig.i18n.pl.required = "nie mo\u017ce by\u0107 puste",
window.ParsleyConfig.i18n.pl.default_error = "Analise os problemas",
window.ParsleyConfig.i18n.nl = window.ParsleyConfig.i18n.nl || {},
window.ParsleyConfig.i18n.nl.required = "moet opgegeven zijn",
window.ParsleyConfig.i18n.nl.default_error = "Lees de problemen",
window.ParsleyConfig.i18n.nn = window.ParsleyConfig.i18n.nn || {},
window.ParsleyConfig.i18n.nn.required = "kan ikke v\xe6re blank",
window.ParsleyConfig.i18n.nn.default_error = "G\xe5 gjennom problemene",
window.ParsleyConfig.i18n.pt = window.ParsleyConfig.i18n.pt || {},
window.ParsleyConfig.i18n.pt.required = "n\xe3o pode estar em branco",
window.ParsleyConfig.i18n.pt.default_error = "Por favor verifique os problemas abaixo:",
window.ParsleyConfig.i18n.tr = window.ParsleyConfig.i18n.tr || {},
window.ParsleyConfig.i18n.tr.required = "doldurulmal\u0131",
window.ParsleyConfig.i18n.tr.default_error = "L\xfctfen sorunlar\u0131 g\xf6zden ge\xe7irin",
window.ParsleyConfig.i18n.sv = window.ParsleyConfig.i18n.sv || {},
window.ParsleyConfig.i18n.sv.required = "m\xe5ste anges",
window.ParsleyConfig.i18n.sv.default_error = "L\xe4s igenom problemen",
window.ParsleyConfig.i18n.ja = window.ParsleyConfig.i18n.ja || {},
window.ParsleyConfig.i18n.ja.required = "\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
window.ParsleyConfig.i18n.ja.default_error = "\u554f\u984c\u3092\u518d\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044",
window.ParsleyConfig.i18n.da = window.ParsleyConfig.i18n.da || {},
window.ParsleyConfig.i18n.da.required = "skal udfyldes",
window.ParsleyConfig.i18n.da.default_error = "L\xe6s venligst de problemer",
window.ParsleyConfig.i18n.ru = window.ParsleyConfig.i18n.ru || {},
window.ParsleyConfig.i18n.ru.required = "\u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",
window.ParsleyConfig.i18n.ru.default_error = "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c\u0438",
window.ParsleyConfig.i18n.zh = window.ParsleyConfig.i18n.zh || {},
window.ParsleyConfig.i18n.zh.required = "\u4e0d\u80fd\u4e3a\u7a7a\u5b57\u7b26",
window.ParsleyConfig.i18n.zh.default_error = "\u8bf7\u67e5\u770b\u4ee5\u4e0b\u95ee\u9898:",
function() {
    function t() {
        return $('meta[name="site_locale"]').attr("content")
    }
    function e() {
        return t() || "en"
    }
    function n() {
        $.each($('form[data-parsley-validate="true"]'), function(t, n) {
            if ($(n).data("parsley-installed") !== !0) {
                var i = {
                        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden], input[type=filepicker]"
                    },
                    r = $(n).parsley(i);
                r.subscribe("parsley:form:error", function() {
                    App.flashError({
                        text: window.ParsleyConfig.i18n[e()].default_error
                    })
                }),
                r.subscribe("parsley:form:validate", function() {
                    window.tinyMCE && tinyMCE.triggerSave()
                }),
                $(n).data("parsley-installed", !0)
            }
        })
    }
    $(document).ready(n),
    $(document).ajaxSuccess(n)
}(),
function(t) {
    var e = function() {
        "use strict";
        var t = "s",
            n = function(t) {
                var e = -t.getTimezoneOffset();
                return null !== e ? e : 0
            },
            i = function(t, e, n) {
                var i = new Date;
                return void 0 !== t && i.setFullYear(t), i.setMonth(e), i.setDate(n), i
            },
            r = function(t) {
                return n(i(t, 0, 2))
            },
            o = function(t) {
                return n(i(t, 5, 2))
            },
            s = function(t) {
                var e = t.getMonth() > 7,
                    i = e ? o(t.getFullYear()) : r(t.getFullYear()),
                    s = n(t),
                    a = 0 > i,
                    l = i - s;
                return a || e ? 0 !== l : 0 > l
            },
            a = function() {
                var e = r(),
                    n = o(),
                    i = e - n;
                return 0 > i ? e + ",1" : i > 0 ? n + ",1," + t : e + ",0"
            },
            l = function() {
                var t = a();
                return new e.TimeZone(e.olson.timezones[t])
            },
            u = function(t) {
                var e = new Date(2010, 6, 15, 1, 0, 0, 0),
                    n = {
                        "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                        "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                        "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                        "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                        "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                        "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                        "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                        "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                        "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                        "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                        "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                        "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                        "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                        "Europe/Helsinki": new Date(2013, 2, 31, 5, 0, 0, 0),
                        "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                        "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                        "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                        "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                        "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                        "Europe/Moscow": e,
                        "Asia/Amman": new Date(2013, 2, 29, 1, 0, 0, 0),
                        "Asia/Beirut": new Date(2013, 2, 31, 2, 0, 0, 0),
                        "Asia/Damascus": new Date(2013, 3, 6, 2, 0, 0, 0),
                        "Asia/Jerusalem": new Date(2013, 2, 29, 5, 0, 0, 0),
                        "Asia/Yekaterinburg": e,
                        "Asia/Omsk": e,
                        "Asia/Krasnoyarsk": e,
                        "Asia/Irkutsk": e,
                        "Asia/Yakutsk": e,
                        "Asia/Vladivostok": e,
                        "Asia/Baku": new Date(2013, 2, 31, 4, 0, 0),
                        "Asia/Yerevan": new Date(2013, 2, 31, 3, 0, 0),
                        "Asia/Kamchatka": e,
                        "Asia/Gaza": new Date(2010, 2, 27, 4, 0, 0),
                        "Africa/Cairo": new Date(2010, 4, 1, 3, 0, 0),
                        "Europe/Minsk": e,
                        "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                        "Pacific/Fiji": new Date(2010, 11, 1, 0, 0, 0),
                        "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
                    };
                return n[t]
            };
        return {
            determine: l,
            date_is_dst: s,
            dst_start_for: u
        }
    }();
    e.TimeZone = function(t) {
        "use strict";
        var n = {
                "America/Denver": ["America/Denver", "America/Mazatlan"],
                "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Asia/Beirut", "Europe/Helsinki", "Asia/Damascus"],
                "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                "America/New_York": ["America/Havana", "America/New_York"],
                "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                "America/Godthab": ["America/Miquelon", "America/Godthab"],
                "Asia/Dubai": ["Europe/Moscow"],
                "Asia/Dhaka": ["Asia/Yekaterinburg"],
                "Asia/Jakarta": ["Asia/Omsk"],
                "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                "Asia/Tokyo": ["Asia/Irkutsk"],
                "Australia/Brisbane": ["Asia/Yakutsk"],
                "Pacific/Noumea": ["Asia/Vladivostok"],
                "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
                "Pacific/Tongatapu": ["Pacific/Apia"],
                "Asia/Baghdad": ["Europe/Minsk"],
                "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
                "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
            },
            i = t,
            r = function() {
                for (var t = n[i], r = t.length, o = 0, s = t[0]; r > o; o += 1)
                    if (s = t[o], e.date_is_dst(e.dst_start_for(s)))
                        return void (i = s)
            },
            o = function() {
                return "undefined" != typeof n[i]
            };
        return o() && r(), {
            name: function() {
                return i
            }
        }
    },
    e.olson = {},
    e.olson.timezones = {
        "-720,0": "Pacific/Majuro",
        "-660,0": "Pacific/Pago_Pago",
        "-600,1": "America/Adak",
        "-600,0": "Pacific/Honolulu",
        "-570,0": "Pacific/Marquesas",
        "-540,0": "Pacific/Gambier",
        "-540,1": "America/Anchorage",
        "-480,1": "America/Los_Angeles",
        "-480,0": "Pacific/Pitcairn",
        "-420,0": "America/Phoenix",
        "-420,1": "America/Denver",
        "-360,0": "America/Guatemala",
        "-360,1": "America/Chicago",
        "-360,1,s": "Pacific/Easter",
        "-300,0": "America/Bogota",
        "-300,1": "America/New_York",
        "-270,0": "America/Caracas",
        "-240,1": "America/Halifax",
        "-240,0": "America/Santo_Domingo",
        "-240,1,s": "America/Santiago",
        "-210,1": "America/St_Johns",
        "-180,1": "America/Godthab",
        "-180,0": "America/Argentina/Buenos_Aires",
        "-180,1,s": "America/Montevideo",
        "-120,0": "America/Noronha",
        "-120,1": "America/Noronha",
        "-60,1": "Atlantic/Azores",
        "-60,0": "Atlantic/Cape_Verde",
        "0,0": "UTC",
        "0,1": "Europe/London",
        "60,1": "Europe/Berlin",
        "60,0": "Africa/Lagos",
        "60,1,s": "Africa/Windhoek",
        "120,1": "Asia/Beirut",
        "120,0": "Africa/Johannesburg",
        "180,0": "Asia/Baghdad",
        "180,1": "Europe/Moscow",
        "210,1": "Asia/Tehran",
        "240,0": "Asia/Dubai",
        "240,1": "Asia/Baku",
        "270,0": "Asia/Kabul",
        "300,1": "Asia/Yekaterinburg",
        "300,0": "Asia/Karachi",
        "330,0": "Asia/Kolkata",
        "345,0": "Asia/Kathmandu",
        "360,0": "Asia/Dhaka",
        "360,1": "Asia/Omsk",
        "390,0": "Asia/Rangoon",
        "420,1": "Asia/Krasnoyarsk",
        "420,0": "Asia/Jakarta",
        "480,0": "Asia/Shanghai",
        "480,1": "Asia/Irkutsk",
        "525,0": "Australia/Eucla",
        "525,1,s": "Australia/Eucla",
        "540,1": "Asia/Yakutsk",
        "540,0": "Asia/Tokyo",
        "570,0": "Australia/Darwin",
        "570,1,s": "Australia/Adelaide",
        "600,0": "Australia/Brisbane",
        "600,1": "Asia/Vladivostok",
        "600,1,s": "Australia/Sydney",
        "630,1,s": "Australia/Lord_Howe",
        "660,1": "Asia/Kamchatka",
        "660,0": "Pacific/Noumea",
        "690,0": "Pacific/Norfolk",
        "720,1,s": "Pacific/Auckland",
        "720,0": "Pacific/Tarawa",
        "765,1,s": "Pacific/Chatham",
        "780,0": "Pacific/Tongatapu",
        "780,1,s": "Pacific/Apia",
        "840,0": "Pacific/Kiritimati"
    },
    "undefined" != typeof exports ? exports.jstz = e : t.jstz = e
}(this),
function(t) {
    t.fn.browserTimeZone = function() {
        var t = jstz.determine();
        this.val(t.name())
    },
    t("input[data-js-time-zone]").browserTimeZone()
}(jQuery),
function() {
    var t = this;
    (function() {
        (function() {
            var t = [].slice;
            this.LocalTime = {
                config: {},
                run: function() {
                    return this.getController().processElements()
                },
                process: function() {
                    var e,
                        n,
                        i,
                        r;
                    for (n = 1 <= arguments.length ? t.call(arguments, 0) : [], i = 0, r = n.length; r > i; i++)
                        e = n[i],
                        this.getController().processElement(e);
                    return n.length
                },
                getController: function() {
                    return null != this.controller ? this.controller : this.controller = new e.Controller
                }
            }
        }).call(this)
    }).call(t);
    var e = t.LocalTime;
    (function() {
        (function() {
            e.config.i18n = {
                en: {
                    date: {
                        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        abbrMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        yesterday: "yesterday",
                        today: "today",
                        tomorrow: "tomorrow",
                        on: "on {date}",
                        formats: {
                            "default": "%b %e, %Y",
                            thisYear: "%b %e"
                        }
                    },
                    time: {
                        am: "am",
                        pm: "pm",
                        singular: "a {time}",
                        singularAn: "an {time}",
                        elapsed: "{time} ago",
                        second: "second",
                        seconds: "seconds",
                        minute: "minute",
                        minutes: "minutes",
                        hour: "hour",
                        hours: "hours",
                        formats: {
                            "default": "%l:%M%P"
                        }
                    },
                    datetime: {
                        at: "{date} at {time}",
                        formats: {
                            "default": "%B %e, %Y at %l:%M%P %Z"
                        }
                    }
                }
            }
        }).call(this),
        function() {
            e.config.locale = "en",
            e.config.defaultLocale = "en"
        }.call(this),
        function() {
            e.config.timerInterval = 6e4
        }.call(this),
        function() {
            var t,
                n,
                i;
            i = !isNaN(Date.parse("2011-01-01T12:00:00-05:00")),
            e.parseDate = function(t) {
                return t = t.toString(), i || (t = n(t)), new Date(Date.parse(t))
            },
            t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/,
            n = function(e) {
                var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c;
                return (r = e.match(t)) ? (r[0], u = r[1], s = r[2], n = r[3], i = r[4], o = r[5], l = r[6], c = r[7], "Z" !== c && (a = c.replace(":", "")), u + "/" + s + "/" + n + " " + i + ":" + o + ":" + l + " GMT" + [a]) : void 0
            }
        }.call(this),
        function() {
            e.elementMatchesSelector = function() {
                var t,
                    e,
                    n,
                    i,
                    r,
                    o;
                return t = document.documentElement, e = null != (n = null != (i = null != (r = null != (o = t.matches) ? o : t.matchesSelector) ? r : t.webkitMatchesSelector) ? i : t.mozMatchesSelector) ? n : t.msMatchesSelector, function(t, n) {
                    return (null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE ? e.call(t, n) : void 0
                }
            }()
        }.call(this),
        function() {
            var t,
                n,
                i;
            t = e.config,
            i = t.i18n,
            e.getI18nValue = function(r, o) {
                var s,
                    a;
                return null == r && (r = ""), s = (null != o ? o : {
                    locale: t.locale
                }).locale, a = n(i[s], r), null != a ? a : s !== t.defaultLocale ? e.getI18nValue(r, {
                    locale: t.defaultLocale
                }) : void 0
            },
            e.translate = function(t, n, i) {
                var r,
                    o,
                    s;
                null == n && (n = {}),
                s = e.getI18nValue(t, i);
                for (r in n)
                    o = n[r],
                    s = s.replace("{" + r + "}", o);
                return s
            },
            n = function(t, e) {
                var n,
                    i,
                    r,
                    o,
                    s;
                for (s = t, o = e.split("."), n = 0, r = o.length; r > n; n++) {
                    if (i = o[n], null == s[i])
                        return null;
                    s = s[i]
                }
                return s
            }
        }.call(this),
        function() {
            var t,
                n,
                i,
                r,
                o;
            t = e.getI18nValue,
            o = e.translate,
            e.strftime = r = function(e, s) {
                var a,
                    l,
                    u,
                    c,
                    d,
                    h,
                    f;
                return l = e.getDay(), a = e.getDate(), d = e.getMonth(), f = e.getFullYear(), u = e.getHours(), c = e.getMinutes(), h = e.getSeconds(), s.replace(/%(-?)([%aAbBcdeHIlmMpPSwyYZ])/g, function(s, p, m) {
                    switch (m) {
                    case "%":
                        return "%";
                    case "a":
                        return t("date.abbrDayNames")[l];
                    case "A":
                        return t("date.dayNames")[l];
                    case "b":
                        return t("date.abbrMonthNames")[d];
                    case "B":
                        return t("date.monthNames")[d];
                    case "c":
                        return e.toString();
                    case "d":
                        return n(a, p);
                    case "e":
                        return a;
                    case "H":
                        return n(u, p);
                    case "I":
                        return n(r(e, "%l"), p);
                    case "l":
                        return 0 === u || 12 === u ? 12 : (u + 12) % 12;
                    case "m":
                        return n(d + 1, p);
                    case "M":
                        return n(c, p);
                    case "p":
                        return o("time." + (u > 11 ? "pm" : "am")).toUpperCase();
                    case "P":
                        return o("time." + (u > 11 ? "pm" : "am"));
                    case "S":
                        return n(h, p);
                    case "w":
                        return l;
                    case "y":
                        return n(f % 100, p);
                    case "Y":
                        return f;
                    case "Z":
                        return i(e)
                    }
                })
            },
            n = function(t, e) {
                switch (e) {
                case "-":
                    return t;
                default:
                    return ("0" + t).slice(-2)
                }
            },
            i = function(t) {
                var e,
                    n,
                    i,
                    r,
                    o;
                return o = t.toString(), (e = null != (n = o.match(/\(([\w\s]+)\)$/)) ? n[1] : void 0) ? /\s/.test(e) ? e.match(/\b(\w)/g).join("") : e : (e = null != (i = o.match(/(\w{3,4})\s\d{4}$/)) ? i[1] : void 0) ? e : (e = null != (r = o.match(/(UTC[\+\-]\d+)/)) ? r[1] : void 0) ? e : ""
            }
        }.call(this),
        function() {
            e.CalendarDate = function() {
                function t(t, e, n) {
                    this.date = new Date(Date.UTC(t, e - 1)),
                    this.date.setUTCDate(n),
                    this.year = this.date.getUTCFullYear(),
                    this.month = this.date.getUTCMonth() + 1,
                    this.day = this.date.getUTCDate(),
                    this.value = this.date.getTime()
                }
                return t.fromDate = function(t) {
                    return new this(t.getFullYear(), t.getMonth() + 1, t.getDate())
                }, t.today = function() {
                    return this.fromDate(new Date)
                }, t.prototype.equals = function(t) {
                    return (null != t ? t.value : void 0) === this.value
                }, t.prototype.is = function(t) {
                    return this.equals(t)
                }, t.prototype.isToday = function() {
                    return this.is(this.constructor.today())
                }, t.prototype.occursOnSameYearAs = function(t) {
                    return this.year === (null != t ? t.year : void 0)
                }, t.prototype.occursThisYear = function() {
                    return this.occursOnSameYearAs(this.constructor.today())
                }, t.prototype.daysSince = function(t) {
                    return t ? (this.date - t.date) / 864e5 : void 0
                }, t.prototype.daysPassed = function() {
                    return this.constructor.today().daysSince(this)
                }, t
            }()
        }.call(this),
        function() {
            var t,
                n,
                i;
            n = e.strftime,
            i = e.translate,
            t = e.getI18nValue,
            e.RelativeTime = function() {
                function r(t) {
                    this.date = t,
                    this.calendarDate = e.CalendarDate.fromDate(this.date)
                }
                return r.prototype.toString = function() {
                    var t,
                        e;
                    return (e = this.toTimeElapsedString()) ? i("time.elapsed", {
                        time: e
                    }) : (t = this.toWeekdayString()) ? (e = this.toTimeString(), i("datetime.at", {
                        date: t,
                        time: e
                    })) : i("date.on", {
                        date: this.toDateString()
                    })
                }, r.prototype.toTimeOrDateString = function() {
                    return this.calendarDate.isToday() ? this.toTimeString() : this.toDateString()
                }, r.prototype.toTimeElapsedString = function() {
                    var t,
                        e,
                        n,
                        r,
                        o;
                    return n = (new Date).getTime() - this.date.getTime(), r = Math.round(n / 1e3), e = Math.round(r / 60), t = Math.round(e / 60), 0 > n ? null : 10 > r ? (o = i("time.second"), i("time.singular", {
                        time: o
                    })) : 45 > r ? r + " " + i("time.seconds") : 90 > r ? (o = i("time.minute"), i("time.singular", {
                        time: o
                    })) : 45 > e ? e + " " + i("time.minutes") : 90 > e ? (o = i("time.hour"), i("time.singularAn", {
                        time: o
                    })) : 24 > t ? t + " " + i("time.hours") : ""
                }, r.prototype.toWeekdayString = function() {
                    switch (this.calendarDate.daysPassed()) {
                    case 0:
                        return i("date.today");
                    case 1:
                        return i("date.yesterday");
                    case -1:
                        return i("date.tomorrow");
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        return n(this.date, "%A");
                    default:
                        return ""
                    }
                }, r.prototype.toDateString = function() {
                    var e;
                    return e = t(this.calendarDate.occursThisYear() ? "date.formats.thisYear" : "date.formats.default"), n(this.date, e)
                }, r.prototype.toTimeString = function() {
                    return n(this.date, t("time.formats.default"))
                }, r
            }()
        }.call(this),
        function() {
            var t,
                n = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
            t = e.elementMatchesSelector,
            e.PageObserver = function() {
                function e(t, e) {
                    this.selector = t,
                    this.callback = e,
                    this.processInsertion = n(this.processInsertion, this),
                    this.processMutations = n(this.processMutations, this)
                }
                return e.prototype.start = function() {
                    return this.started ? void 0 : (this.observeWithMutationObserver() || this.observeWithMutationEvent(), this.started = !0)
                }, e.prototype.observeWithMutationObserver = function() {
                    var t;
                    return "undefined" != typeof MutationObserver && null !== MutationObserver ? (t = new MutationObserver(this.processMutations), t.observe(document.documentElement, {
                        childList: !0,
                        subtree: !0
                    }), !0) : void 0
                }, e.prototype.observeWithMutationEvent = function() {
                    return addEventListener("DOMNodeInserted", this.processInsertion, !1), !0
                }, e.prototype.findSignificantElements = function(e) {
                    var n;
                    return n = [], (null != e ? e.nodeType : void 0) === Node.ELEMENT_NODE && (t(e, this.selector) && n.push(e), n.push.apply(n, e.querySelectorAll(this.selector))), n
                }, e.prototype.processMutations = function(t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l;
                    for (e = [], n = 0, r = t.length; r > n; n++)
                        switch (s = t[n], s.type) {
                        case "childList":
                            for (l = s.addedNodes, i = 0, o = l.length; o > i; i++)
                                a = l[i],
                                e.push.apply(e, this.findSignificantElements(a))
                        }
                    return this.notify(e)
                }, e.prototype.processInsertion = function(t) {
                    var e;
                    return e = this.findSignificantElements(t.target), this.notify(e)
                }, e.prototype.notify = function(t) {
                    return (null != t ? t.length : void 0) && "function" == typeof this.callback ? this.callback(t) : void 0
                }, e
            }()
        }.call(this),
        function() {
            var t,
                n,
                i,
                r,
                o = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
            i = e.parseDate,
            r = e.strftime,
            n = e.getI18nValue,
            t = e.config,
            e.Controller = function() {
                function s() {
                    this.processElements = o(this.processElements, this),
                    this.pageObserver = new e.PageObserver(a, this.processElements)
                }
                var a,
                    l,
                    u;
                return a = "time[data-local]:not([data-localized])", s.prototype.start = function() {
                    return this.started ? void 0 : (this.processElements(), this.startTimer(), this.pageObserver.start(), this.started = !0)
                }, s.prototype.startTimer = function() {
                    var e;
                    return (e = t.timerInterval) ? null != this.timer ? this.timer : this.timer = setInterval(this.processElements, e) : void 0
                }, s.prototype.processElements = function(t) {
                    var e,
                        n,
                        i;
                    for (null == t && (t = document.querySelectorAll(a)), n = 0, i = t.length; i > n; n++)
                        e = t[n],
                        this.processElement(e);
                    return t.length
                }, s.prototype.processElement = function(t) {
                    var e,
                        o,
                        s,
                        a,
                        c,
                        d;
                    return o = t.getAttribute("datetime"), s = t.getAttribute("data-format"), a = t.getAttribute("data-local"), c = i(o), isNaN(c) ? void 0 : (t.hasAttribute("title") || (d = r(c, n("datetime.formats.default")), t.setAttribute("title", d)), t.textContent = e = function() {
                        switch (a) {
                        case "time":
                            return l(t), r(c, s);
                        case "date":
                            return l(t), u(c).toDateString();
                        case "time-ago":
                            return u(c).toString();
                        case "time-or-date":
                            return u(c).toTimeOrDateString();
                        case "weekday":
                            return u(c).toWeekdayString();
                        case "weekday-or-date":
                            return u(c).toWeekdayString() || u(c).toDateString()
                        }
                    }(), t.hasAttribute("aria-label") ? void 0 : t.setAttribute("aria-label", e))
                }, l = function(t) {
                    return t.setAttribute("data-localized", "")
                }, u = function(t) {
                    return new e.RelativeTime(t)
                }, s
            }()
        }.call(this),
        function() {
            var t,
                n,
                i,
                r;
            r = !1,
            t = function() {
                return document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState
            },
            n = function(t) {
                var e;
                return null != (e = "function" == typeof requestAnimationFrame ? requestAnimationFrame(t) : void 0) ? e : setTimeout(t, 17)
            },
            i = function() {
                var t;
                return t = e.getController(), t.start()
            },
            e.start = function() {
                return r ? void 0 : (r = !0, "undefined" != typeof MutationObserver && null !== MutationObserver || t() ? i() : n(i))
            },
            window.LocalTime === e && e.start()
        }.call(this)
    }).call(this),
    "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
}.call(this),
function() {
    function t(t) {
        function e(e, n, i, r, o, s) {
            for (; o >= 0 && s > o; o += t) {
                var a = r ? r[o] : o;
                i = n(i, e[a], a, e)
            }
            return i
        }
        return function(n, i, r, o) {
            i = y(i, o, 4);
            var s = !C(n) && v.keys(n),
                a = (s || n).length,
                l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = n[s ? s[l] : l], l += t), e(n, i, r, s, l, a)
        }
    }
    function e(t) {
        return function(e, n, i) {
            n = b(n, i);
            for (var r = null != e && e.length, o = t > 0 ? 0 : r - 1; o >= 0 && r > o; o += t)
                if (n(e[o], o, e))
                    return o;
            return -1
        }
    }
    function n(t, e) {
        var n = E.length,
            i = t.constructor,
            r = v.isFunction(i) && i.prototype || s,
            o = "constructor";
        for (v.has(t, o) && !v.contains(e, o) && e.push(o); n--;)
            o = E[n],
            o in t && t[o] !== r[o] && !v.contains(e, o) && e.push(o)
    }
    var i = this,
        r = i._,
        o = Array.prototype,
        s = Object.prototype,
        a = Function.prototype,
        l = o.push,
        u = o.slice,
        c = s.toString,
        d = s.hasOwnProperty,
        h = Array.isArray,
        f = Object.keys,
        p = a.bind,
        m = Object.create,
        g = function() {},
        v = function(t) {
            return t instanceof v ? t : this instanceof v ? void (this._wrapped = t) : new v(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : i._ = v,
    v.VERSION = "1.8.2";
    var y = function(t, e, n) {
            if (void 0 === e)
                return t;
            switch (null == n ? 3 : n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                };
            case 4:
                return function(n, i, r, o) {
                    return t.call(e, n, i, r, o)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        b = function(t, e, n) {
            return null == t ? v.identity : v.isFunction(t) ? y(t, e, n) : v.isObject(t) ? v.matcher(t) : v.property(t)
        };
    v.iteratee = function(t, e) {
        return b(t, e, 1 / 0)
    };
    var w = function(t, e) {
            return function(n) {
                var i = arguments.length;
                if (2 > i || null == n)
                    return n;
                for (var r = 1; i > r; r++)
                    for (var o = arguments[r], s = t(o), a = s.length, l = 0; a > l; l++) {
                        var u = s[l];
                        e && void 0 !== n[u] || (n[u] = o[u])
                    }
                return n
            }
        },
        _ = function(t) {
            if (!v.isObject(t))
                return {};
            if (m)
                return m(t);
            g.prototype = t;
            var e = new g;
            return g.prototype = null, e
        },
        x = Math.pow(2, 53) - 1,
        C = function(t) {
            var e = t && t.length;
            return "number" == typeof e && e >= 0 && x >= e
        };
    v.each = v.forEach = function(t, e, n) {
        e = y(e, n);
        var i,
            r;
        if (C(t))
            for (i = 0, r = t.length; r > i; i++)
                e(t[i], i, t);
        else {
            var o = v.keys(t);
            for (i = 0, r = o.length; r > i; i++)
                e(t[o[i]], o[i], t)
        }
        return t
    },
    v.map = v.collect = function(t, e, n) {
        e = b(e, n);
        for (var i = !C(t) && v.keys(t), r = (i || t).length, o = Array(r), s = 0; r > s; s++) {
            var a = i ? i[s] : s;
            o[s] = e(t[a], a, t)
        }
        return o
    },
    v.reduce = v.foldl = v.inject = t(1),
    v.reduceRight = v.foldr = t(-1),
    v.find = v.detect = function(t, e, n) {
        var i;
        return i = C(t) ? v.findIndex(t, e, n) : v.findKey(t, e, n), void 0 !== i && -1 !== i ? t[i] : void 0
    },
    v.filter = v.select = function(t, e, n) {
        var i = [];
        return e = b(e, n), v.each(t, function(t, n, r) {
            e(t, n, r) && i.push(t)
        }), i
    },
    v.reject = function(t, e, n) {
        return v.filter(t, v.negate(b(e)), n)
    },
    v.every = v.all = function(t, e, n) {
        e = b(e, n);
        for (var i = !C(t) && v.keys(t), r = (i || t).length, o = 0; r > o; o++) {
            var s = i ? i[o] : o;
            if (!e(t[s], s, t))
                return !1
        }
        return !0
    },
    v.some = v.any = function(t, e, n) {
        e = b(e, n);
        for (var i = !C(t) && v.keys(t), r = (i || t).length, o = 0; r > o; o++) {
            var s = i ? i[o] : o;
            if (e(t[s], s, t))
                return !0
        }
        return !1
    },
    v.contains = v.includes = v.include = function(t, e, n) {
        return C(t) || (t = v.values(t)), v.indexOf(t, e, "number" == typeof n && n) >= 0
    },
    v.invoke = function(t, e) {
        var n = u.call(arguments, 2),
            i = v.isFunction(e);
        return v.map(t, function(t) {
            var r = i ? e : t[e];
            return null == r ? r : r.apply(t, n)
        })
    },
    v.pluck = function(t, e) {
        return v.map(t, v.property(e))
    },
    v.where = function(t, e) {
        return v.filter(t, v.matcher(e))
    },
    v.findWhere = function(t, e) {
        return v.find(t, v.matcher(e))
    },
    v.max = function(t, e, n) {
        var i,
            r,
            o = -1 / 0,
            s = -1 / 0;
        if (null == e && null != t) {
            t = C(t) ? t : v.values(t);
            for (var a = 0, l = t.length; l > a; a++)
                i = t[a],
                i > o && (o = i)
        } else
            e = b(e, n),
            v.each(t, function(t, n, i) {
                r = e(t, n, i),
                (r > s || r === -1 / 0 && o === -1 / 0) && (o = t, s = r)
            });
        return o
    },
    v.min = function(t, e, n) {
        var i,
            r,
            o = 1 / 0,
            s = 1 / 0;
        if (null == e && null != t) {
            t = C(t) ? t : v.values(t);
            for (var a = 0, l = t.length; l > a; a++)
                i = t[a],
                o > i && (o = i)
        } else
            e = b(e, n),
            v.each(t, function(t, n, i) {
                r = e(t, n, i),
                (s > r || 1 / 0 === r && 1 / 0 === o) && (o = t, s = r)
            });
        return o
    },
    v.shuffle = function(t) {
        for (var e, n = C(t) ? t : v.values(t), i = n.length, r = Array(i), o = 0; i > o; o++)
            e = v.random(0, o),
            e !== o && (r[o] = r[e]),
            r[e] = n[o];
        return r
    },
    v.sample = function(t, e, n) {
        return null == e || n ? (C(t) || (t = v.values(t)), t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, e))
    },
    v.sortBy = function(t, e, n) {
        return e = b(e, n), v.pluck(v.map(t, function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
                i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)
                    return 1;
                if (i > n || void 0 === i)
                    return -1
            }
            return t.index - e.index
        }), "value")
    };
    var k = function(t) {
        return function(e, n, i) {
            var r = {};
            return n = b(n, i), v.each(e, function(i, o) {
                var s = n(i, o, e);
                t(r, i, s)
            }), r
        }
    };
    v.groupBy = k(function(t, e, n) {
        v.has(t, n) ? t[n].push(e) : t[n] = [e]
    }),
    v.indexBy = k(function(t, e, n) {
        t[n] = e
    }),
    v.countBy = k(function(t, e, n) {
        v.has(t, n) ? t[n]++ : t[n] = 1
    }),
    v.toArray = function(t) {
        return t ? v.isArray(t) ? u.call(t) : C(t) ? v.map(t, v.identity) : v.values(t) : []
    },
    v.size = function(t) {
        return null == t ? 0 : C(t) ? t.length : v.keys(t).length
    },
    v.partition = function(t, e, n) {
        e = b(e, n);
        var i = [],
            r = [];
        return v.each(t, function(t, n, o) {
            (e(t, n, o) ? i : r).push(t)
        }), [i, r]
    },
    v.first = v.head = v.take = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : v.initial(t, t.length - e)
    },
    v.initial = function(t, e, n) {
        return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    },
    v.last = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
    },
    v.rest = v.tail = v.drop = function(t, e, n) {
        return u.call(t, null == e || n ? 1 : e)
    },
    v.compact = function(t) {
        return v.filter(t, v.identity)
    };
    var S = function(t, e, n, i) {
        for (var r = [], o = 0, s = i || 0, a = t && t.length; a > s; s++) {
            var l = t[s];
            if (C(l) && (v.isArray(l) || v.isArguments(l))) {
                e || (l = S(l, e, n));
                var u = 0,
                    c = l.length;
                for (r.length += c; c > u;)
                    r[o++] = l[u++]
            } else
                n || (r[o++] = l)
        }
        return r
    };
    v.flatten = function(t, e) {
        return S(t, e, !1)
    },
    v.without = function(t) {
        return v.difference(t, u.call(arguments, 1))
    },
    v.uniq = v.unique = function(t, e, n, i) {
        if (null == t)
            return [];
        v.isBoolean(e) || (i = n, n = e, e = !1),
        null != n && (n = b(n, i));
        for (var r = [], o = [], s = 0, a = t.length; a > s; s++) {
            var l = t[s],
                u = n ? n(l, s, t) : l;
            e ? (s && o === u || r.push(l), o = u) : n ? v.contains(o, u) || (o.push(u), r.push(l)) : v.contains(r, l) || r.push(l)
        }
        return r
    },
    v.union = function() {
        return v.uniq(S(arguments, !0, !0))
    },
    v.intersection = function(t) {
        if (null == t)
            return [];
        for (var e = [], n = arguments.length, i = 0, r = t.length; r > i; i++) {
            var o = t[i];
            if (!v.contains(e, o)) {
                for (var s = 1; n > s && v.contains(arguments[s], o); s++)
                    ;
                s === n && e.push(o)
            }
        }
        return e
    },
    v.difference = function(t) {
        var e = S(arguments, !0, !0, 1);
        return v.filter(t, function(t) {
            return !v.contains(e, t)
        })
    },
    v.zip = function() {
        return v.unzip(arguments)
    },
    v.unzip = function(t) {
        for (var e = t && v.max(t, "length").length || 0, n = Array(e), i = 0; e > i; i++)
            n[i] = v.pluck(t, i);
        return n
    },
    v.object = function(t, e) {
        for (var n = {}, i = 0, r = t && t.length; r > i; i++)
            e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    },
    v.indexOf = function(t, e, n) {
        var i = 0,
            r = t && t.length;
        if ("number" == typeof n)
            i = 0 > n ? Math.max(0, r + n) : n;
        else if (n && r)
            return i = v.sortedIndex(t, e), t[i] === e ? i : -1;
        if (e !== e)
            return v.findIndex(u.call(t, i), v.isNaN);
        for (; r > i; i++)
            if (t[i] === e)
                return i;
        return -1
    },
    v.lastIndexOf = function(t, e, n) {
        var i = t ? t.length : 0;
        if ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)), e !== e)
            return v.findLastIndex(u.call(t, 0, i), v.isNaN);
        for (; --i >= 0;)
            if (t[i] === e)
                return i;
        return -1
    },
    v.findIndex = e(1),
    v.findLastIndex = e(-1),
    v.sortedIndex = function(t, e, n, i) {
        n = b(n, i, 1);
        for (var r = n(e), o = 0, s = t.length; s > o;) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < r ? o = a + 1 : s = a
        }
        return o
    },
    v.range = function(t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0),
        n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; i > o; o++, t += n)
            r[o] = t;
        return r
    };
    var T = function(t, e, n, i, r) {
        if (!(i instanceof e))
            return t.apply(n, r);
        var o = _(t.prototype),
            s = t.apply(o, r);
        return v.isObject(s) ? s : o
    };
    v.bind = function(t, e) {
        if (p && t.bind === p)
            return p.apply(t, u.call(arguments, 1));
        if (!v.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        var n = u.call(arguments, 2),
            i = function() {
                return T(t, i, e, this, n.concat(u.call(arguments)))
            };
        return i
    },
    v.partial = function(t) {
        var e = u.call(arguments, 1),
            n = function() {
                for (var i = 0, r = e.length, o = Array(r), s = 0; r > s; s++)
                    o[s] = e[s] === v ? arguments[i++] : e[s];
                for (; i < arguments.length;)
                    o.push(arguments[i++]);
                return T(t, n, this, this, o)
            };
        return n
    },
    v.bindAll = function(t) {
        var e,
            n,
            i = arguments.length;
        if (1 >= i)
            throw new Error("bindAll must be passed function names");
        for (e = 1; i > e; e++)
            n = arguments[e],
            t[n] = v.bind(t[n], t);
        return t
    },
    v.memoize = function(t, e) {
        var n = function(i) {
            var r = n.cache,
                o = "" + (e ? e.apply(this, arguments) : i);
            return v.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
        };
        return n.cache = {}, n
    },
    v.delay = function(t, e) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    },
    v.defer = v.partial(v.delay, v, 1),
    v.throttle = function(t, e, n) {
        var i,
            r,
            o,
            s = null,
            a = 0;
        n || (n = {});
        var l = function() {
            a = n.leading === !1 ? 0 : v.now(),
            s = null,
            o = t.apply(i, r),
            s || (i = r = null)
        };
        return function() {
            var u = v.now();
            a || n.leading !== !1 || (a = u);
            var c = e - (u - a);
            return i = this, r = arguments, 0 >= c || c > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(i, r), s || (i = r = null)) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
        }
    },
    v.debounce = function(t, e, n) {
        var i,
            r,
            o,
            s,
            a,
            l = function() {
                var u = v.now() - s;
                e > u && u >= 0 ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)))
            };
        return function() {
            o = this,
            r = arguments,
            s = v.now();
            var u = n && !i;
            return i || (i = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a
        }
    },
    v.wrap = function(t, e) {
        return v.partial(e, t)
    },
    v.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    },
    v.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var n = e, i = t[e].apply(this, arguments); n--;)
                i = t[n].call(this, i);
            return i
        }
    },
    v.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    },
    v.before = function(t, e) {
        var n;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = null), n
        }
    },
    v.once = v.partial(v.before, 2);
    var $ = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        E = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    v.keys = function(t) {
        if (!v.isObject(t))
            return [];
        if (f)
            return f(t);
        var e = [];
        for (var i in t)
            v.has(t, i) && e.push(i);
        return $ && n(t, e), e
    },
    v.allKeys = function(t) {
        if (!v.isObject(t))
            return [];
        var e = [];
        for (var i in t)
            e.push(i);
        return $ && n(t, e), e
    },
    v.values = function(t) {
        for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
            i[r] = t[e[r]];
        return i
    },
    v.mapObject = function(t, e, n) {
        e = b(e, n);
        for (var i, r = v.keys(t), o = r.length, s = {}, a = 0; o > a; a++)
            i = r[a],
            s[i] = e(t[i], i, t);
        return s
    },
    v.pairs = function(t) {
        for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
            i[r] = [e[r], t[e[r]]];
        return i
    },
    v.invert = function(t) {
        for (var e = {}, n = v.keys(t), i = 0, r = n.length; r > i; i++)
            e[t[n[i]]] = n[i];
        return e
    },
    v.functions = v.methods = function(t) {
        var e = [];
        for (var n in t)
            v.isFunction(t[n]) && e.push(n);
        return e.sort()
    },
    v.extend = w(v.allKeys),
    v.extendOwn = v.assign = w(v.keys),
    v.findKey = function(t, e, n) {
        e = b(e, n);
        for (var i, r = v.keys(t), o = 0, s = r.length; s > o; o++)
            if (i = r[o], e(t[i], i, t))
                return i
    },
    v.pick = function(t, e, n) {
        var i,
            r,
            o = {},
            s = t;
        if (null == s)
            return o;
        v.isFunction(e) ? (r = v.allKeys(s), i = y(e, n)) : (r = S(arguments, !1, !1, 1), i = function(t, e, n) {
            return e in n
        }, s = Object(s));
        for (var a = 0, l = r.length; l > a; a++) {
            var u = r[a],
                c = s[u];
            i(c, u, s) && (o[u] = c)
        }
        return o
    },
    v.omit = function(t, e, n) {
        if (v.isFunction(e))
            e = v.negate(e);
        else {
            var i = v.map(S(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !v.contains(i, e)
            }
        }
        return v.pick(t, e, n)
    },
    v.defaults = w(v.allKeys, !0),
    v.clone = function(t) {
        return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t
    },
    v.tap = function(t, e) {
        return e(t), t
    },
    v.isMatch = function(t, e) {
        var n = v.keys(e),
            i = n.length;
        if (null == t)
            return !i;
        for (var r = Object(t), o = 0; i > o; o++) {
            var s = n[o];
            if (e[s] !== r[s] || !(s in r))
                return !1
        }
        return !0
    };
    var A = function(t, e, n, i) {
        if (t === e)
            return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof v && (t = t._wrapped),
        e instanceof v && (e = e._wrapped);
        var r = c.call(t);
        if (r !== c.call(e))
            return !1;
        switch (r) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t === +e
        }
        var o = "[object Array]" === r;
        if (!o) {
            if ("object" != typeof t || "object" != typeof e)
                return !1;
            var s = t.constructor,
                a = e.constructor;
            if (s !== a && !(v.isFunction(s) && s instanceof s && v.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e)
                return !1
        }
        n = n || [],
        i = i || [];
        for (var l = n.length; l--;)
            if (n[l] === t)
                return i[l] === e;
        if (n.push(t), i.push(e), o) {
            if (l = t.length, l !== e.length)
                return !1;
            for (; l--;)
                if (!A(t[l], e[l], n, i))
                    return !1
        } else {
            var u,
                d = v.keys(t);
            if (l = d.length, v.keys(e).length !== l)
                return !1;
            for (; l--;)
                if (u = d[l], !v.has(e, u) || !A(t[u], e[u], n, i))
                    return !1
        }
        return n.pop(), i.pop(), !0
    };
    v.isEqual = function(t, e) {
        return A(t, e)
    },
    v.isEmpty = function(t) {
        return null == t ? !0 : C(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length
    },
    v.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    },
    v.isArray = h || function(t) {
        return "[object Array]" === c.call(t)
    },
    v.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    },
    v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        v["is" + t] = function(e) {
            return c.call(e) === "[object " + t + "]"
        }
    }),
    v.isArguments(arguments) || (v.isArguments = function(t) {
        return v.has(t, "callee")
    }),
    "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(t) {
        return "function" == typeof t || !1
    }),
    v.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    },
    v.isNaN = function(t) {
        return v.isNumber(t) && t !== +t
    },
    v.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === c.call(t)
    },
    v.isNull = function(t) {
        return null === t
    },
    v.isUndefined = function(t) {
        return void 0 === t
    },
    v.has = function(t, e) {
        return null != t && d.call(t, e)
    },
    v.noConflict = function() {
        return i._ = r, this
    },
    v.identity = function(t) {
        return t
    },
    v.constant = function(t) {
        return function() {
            return t
        }
    },
    v.noop = function() {},
    v.property = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    },
    v.propertyOf = function(t) {
        return null == t ? function() {} : function(e) {
            return t[e]
        }
    },
    v.matcher = v.matches = function(t) {
        return t = v.extendOwn({}, t), function(e) {
            return v.isMatch(e, t)
        }
    },
    v.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = y(e, n, 1);
        for (var r = 0; t > r; r++)
            i[r] = e(r);
        return i
    },
    v.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    },
    v.now = Date.now || function() {
        return (new Date).getTime()
    };
    var F = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        D = v.invert(F),
        P = function(t) {
            var e = function(e) {
                    return t[e]
                },
                n = "(?:" + v.keys(t).join("|") + ")",
                i = RegExp(n),
                r = RegExp(n, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
            }
        };
    v.escape = P(F),
    v.unescape = P(D),
    v.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n), v.isFunction(i) ? i.call(t) : i
    };
    var O = 0;
    v.uniqueId = function(t) {
        var e = ++O + "";
        return t ? t + e : e
    },
    v.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var N = /(.)^/,
        j = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        M = /\\|'|\r|\n|\u2028|\u2029/g,
        I = function(t) {
            return "\\" + j[t]
        };
    v.template = function(t, e, n) {
        !e && n && (e = n),
        e = v.defaults({}, e, v.templateSettings);
        var i = RegExp([(e.escape || N).source, (e.interpolate || N).source, (e.evaluate || N).source].join("|") + "|$", "g"),
            r = 0,
            o = "__p+='";
        t.replace(i, function(e, n, i, s, a) {
            return o += t.slice(r, a).replace(M, I), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
        }),
        o += "';\n",
        e.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", o)
        } catch (a) {
            throw a.source = o, a
        }
        var l = function(t) {
                return s.call(this, t, v)
            },
            u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + o + "}", l
    },
    v.chain = function(t) {
        var e = v(t);
        return e._chain = !0, e
    };
    var L = function(t, e) {
        return t._chain ? v(e).chain() : e
    };
    v.mixin = function(t) {
        v.each(v.functions(t), function(e) {
            var n = v[e] = t[e];
            v.prototype[e] = function() {
                var t = [this._wrapped];
                return l.apply(t, arguments), L(this, n.apply(v, t))
            }
        })
    },
    v.mixin(v),
    v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = o[t];
        v.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], L(this, n)
        }
    }),
    v.each(["concat", "join", "slice"], function(t) {
        var e = o[t];
        v.prototype[t] = function() {
            return L(this, e.apply(this._wrapped, arguments))
        }
    }),
    v.prototype.value = function() {
        return this._wrapped
    },
    v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
    v.prototype.toString = function() {
        return "" + this._wrapped
    },
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return v
    })
}.call(this),
function(t) {
    "use strict";
    function e() {}
    function n() {
        try {
            return document.activeElement
        } catch (t) {}
    }
    function i(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e)
                return !0;
        return !1
    }
    function r(t, e, n) {
        return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : void 0
    }
    function o(t, e) {
        var n;
        t.createTextRange ? (n = t.createTextRange(), n.move("character", e), n.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }
    function s(t, e) {
        try {
            return t.type = e, !0
        } catch (n) {
            return !1
        }
    }
    function a(t, e) {
        if (t && t.getAttribute($))
            e(t);
        else
            for (var n, i = t ? t.getElementsByTagName("input") : R, r = t ? t.getElementsByTagName("textarea") : B, o = i ? i.length : 0, s = r ? r.length : 0, a = o + s, l = 0; a > l; l++)
                n = o > l ? i[l] : r[l - o],
                e(n)
    }
    function l(t) {
        a(t, c)
    }
    function u(t) {
        a(t, d)
    }
    function c(t, e) {
        var n = !!e && t.value !== e,
            i = t.value === t.getAttribute($);
        if ((n || i) && "true" === t.getAttribute(E)) {
            t.removeAttribute(E),
            t.value = t.value.replace(t.getAttribute($), ""),
            t.className = t.className.replace(T, "");
            var r = t.getAttribute(N);
            parseInt(r, 10) >= 0 && (t.setAttribute("maxLength", r), t.removeAttribute(N));
            var o = t.getAttribute(A);
            return o && (t.type = o), !0
        }
        return !1
    }
    function d(t) {
        var e = t.getAttribute($);
        if ("" === t.value && e) {
            t.setAttribute(E, "true"),
            t.value = e,
            t.className += " " + S;
            var n = t.getAttribute(N);
            n || (t.setAttribute(N, t.maxLength), t.removeAttribute("maxLength"));
            var i = t.getAttribute(A);
            return i ? t.type = "text" : "password" === t.type && s(t, "text") && t.setAttribute(A, "password"), !0
        }
        return !1
    }
    function h(t) {
        return function() {
            q && t.value === t.getAttribute($) && "true" === t.getAttribute(E) ? o(t, 0) : c(t)
        }
    }
    function f(t) {
        return function() {
            d(t)
        }
    }
    function p(t) {
        return function() {
            l(t)
        }
    }
    function m(t) {
        return function(e) {
            return _ = t.value, "true" === t.getAttribute(E) && _ === t.getAttribute($) && i(C, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }
    function g(t) {
        return function() {
            c(t, _),
            "" === t.value && (t.blur(), o(t, 0))
        }
    }
    function v(t) {
        return function() {
            t === n() && t.value === t.getAttribute($) && "true" === t.getAttribute(E) && o(t, 0)
        }
    }
    function y(t) {
        var e = t.form;
        e && "string" == typeof e && (e = document.getElementById(e), e.getAttribute(F) || (r(e, "submit", p(e)), e.setAttribute(F, "true"))),
        r(t, "focus", h(t)),
        r(t, "blur", f(t)),
        q && (r(t, "keydown", m(t)), r(t, "keyup", g(t)), r(t, "click", v(t))),
        t.setAttribute(D, "true"),
        t.setAttribute($, Y),
        (q || t !== n()) && d(t)
    }
    var b = document.createElement("input"),
        w = void 0 !== b.placeholder;
    if (t.Placeholders = {
        nativeSupport: w,
        disable: w ? e : l,
        enable: w ? e : u
    }, !w) {
        var _,
            x = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
            C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
            k = "#ccc",
            S = "placeholdersjs",
            T = new RegExp("(?:^|\\s)" + S + "(?!\\S)"),
            $ = "data-placeholder-value",
            E = "data-placeholder-active",
            A = "data-placeholder-type",
            F = "data-placeholder-submit",
            D = "data-placeholder-bound",
            P = "data-placeholder-focus",
            O = "data-placeholder-live",
            N = "data-placeholder-maxlength",
            j = 100,
            M = document.getElementsByTagName("head")[0],
            I = document.documentElement,
            L = t.Placeholders,
            R = document.getElementsByTagName("input"),
            B = document.getElementsByTagName("textarea"),
            q = "false" === I.getAttribute(P),
            H = "false" !== I.getAttribute(O),
            V = document.createElement("style");
        V.type = "text/css";
        var z = document.createTextNode("." + S + " {color:" + k + ";}");
        V.styleSheet ? V.styleSheet.cssText = z.nodeValue : V.appendChild(z),
        M.insertBefore(V, M.firstChild);
        for (var Y, W, U = 0, G = R.length + B.length; G > U; U++)
            W = U < R.length ? R[U] : B[U - R.length],
            Y = W.attributes.placeholder,
            Y && (Y = Y.nodeValue, Y && i(x, W.type) && y(W));
        var K = setInterval(function() {
            for (var t = 0, e = R.length + B.length; e > t; t++)
                W = t < R.length ? R[t] : B[t - R.length],
                Y = W.attributes.placeholder,
                Y ? (Y = Y.nodeValue, Y && i(x, W.type) && (W.getAttribute(D) || y(W), (Y !== W.getAttribute($) || "password" === W.type && !W.getAttribute(A)) && ("password" === W.type && !W.getAttribute(A) && s(W, "text") && W.setAttribute(A, "password"), W.value === W.getAttribute($) && (W.value = Y), W.setAttribute($, Y)))) : W.getAttribute(E) && (c(W), W.removeAttribute($));
            H || clearInterval(K)
        }, j);
        r(t, "beforeunload", function() {
            L.disable()
        })
    }
}(this),
function(t) {
    function e(e, n, i) {
        if (i.mailgunRequest && (i.mailgunRequest.abort(), i.mailgunRequest = null), e) {
            if (n && n.in_progress && n.in_progress(n.e), i.mailgunLastSuccessReturn && e == i.mailgunLastSuccessReturn.address)
                return void (n && n.success && n.success(i.mailgunLastSuccessReturn, n.e));
            var r = !1;
            if (e.length > 512 ? r = "Email address exceeds maxiumum allowable length of 512." : 1 !== e.split("@").length - 1 && (r = "Email address must contain only one @."), r)
                return void (n && n.error ? n.error(r, n.e) : console && console.log(r));
            n && void 0 == n.api_key && console && console.log("Please pass in api_key to mailgun_validator.");
            var o = setTimeout(function() {
                r = "Error occurred, unable to validate address.",
                success || (i.mailgunRequest && (i.mailgunRequest.abort(), i.mailgunRequest = null), n && n.error ? n.error(r, n.e) : console && console.log(r))
            }, 3e4);
            i.mailgunRequest = t.ajax({
                type: "GET",
                url: "https://api.mailgun.net/v2/address/validate?callback=?",
                data: {
                    address: e,
                    api_key: n.api_key
                },
                dataType: "jsonp",
                crossDomain: !0,
                success: function(t) {
                    clearTimeout(o),
                    i.mailgunLastSuccessReturn = t,
                    n && n.success && n.success(t, n.e)
                },
                error: function() {
                    clearTimeout(o),
                    r = "Error occurred, unable to validate address.",
                    n && n.error ? n.error(r, n.e) : console && console.log(r)
                }
            })
        }
    }
    t.fn.mailgun_validator = function(n) {
        return this.each(function() {
            var i = t(this);
            i.focusout(function(r) {
                var o = i.val();
                o = t.trim(o),
                i.val(o),
                n.e = r,
                e(o, n, i)
            })
        })
    }
}(jQuery),
function(t) {
    t.fn.unveil = function(e, n) {
        function i() {
            var e = u.filter(function() {
                var e = t(this);
                if (!e.is(":hidden")) {
                    var n = o.scrollTop(),
                        i = n + o.height(),
                        r = e.offset().top,
                        a = r + e.height();
                    return a >= n - s && i + s >= r
                }
            });
            r = e.trigger("unveil"),
            u = u.not(r)
        }
        var r,
            o = t(window),
            s = e || 0,
            a = window.devicePixelRatio > 1,
            l = a ? "data-src-retina" : "data-src",
            u = this;
        return this.one("unveil", function() {
            var t = this.getAttribute(l);
            t = t || this.getAttribute("data-src"),
            t && (this.setAttribute("src", t), "function" == typeof n && n.call(this))
        }), o.on("scroll.unveil resize.unveil lookup.unveil", i), i(), this
    }
}(window.jQuery || window.Zepto),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.Clipboard = t()
    }
}(function() {
    var t;
    return function e(t, n, i) {
        function r(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(s, !0);
                    if (o)
                        return o(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var n = t[s][1][e];
                    return r(n ? n : e)
                }, c, c.exports, e, t, n, i)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
            r(i[s]);
        return r
    }({
        1: [function(t, e) {
            var n = t("matches-selector");
            e.exports = function(t, e, i) {
                for (var r = i ? t : t.parentNode; r && r !== document;) {
                    if (n(r, e))
                        return r;
                    r = r.parentNode
                }
            }
        }, {
            "matches-selector": 5
        }],
        2: [function(t, e) {
            function n(t, e, n, r, o) {
                var s = i.apply(this, arguments);
                return t.addEventListener(n, s, o), {
                    destroy: function() {
                        t.removeEventListener(n, s, o)
                    }
                }
            }
            function i(t, e, n, i) {
                return function(n) {
                    n.delegateTarget = r(n.target, e, !0),
                    n.delegateTarget && i.call(t, n)
                }
            }
            var r = t("closest");
            e.exports = n
        }, {
            closest: 1
        }],
        3: [function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            },
            n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            },
            n.string = function(t) {
                return "string" == typeof t || t instanceof String
            },
            n.fn = function(t) {
                var e = Object.prototype.toString.call(t);
                return "[object Function]" === e
            }
        }, {}],
        4: [function(t, e) {
            function n(t, e, n) {
                if (!t && !e && !n)
                    throw new Error("Missing required arguments");
                if (!s.string(e))
                    throw new TypeError("Second argument must be a String");
                if (!s.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (s.node(t))
                    return i(t, e, n);
                if (s.nodeList(t))
                    return r(t, e, n);
                if (s.string(t))
                    return o(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
            function i(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function() {
                        t.removeEventListener(e, n)
                    }
                }
            }
            function r(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }
            function o(t, e, n) {
                return a(document.body, t, e, n)
            }
            var s = t("./is"),
                a = t("delegate");
            e.exports = n
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(t, e) {
            function n(t, e) {
                if (r)
                    return r.call(t, e);
                for (var n = t.parentNode.querySelectorAll(e), i = 0; i < n.length; ++i)
                    if (n[i] == t)
                        return !0;
                return !1
            }
            var i = Element.prototype,
                r = i.matchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector;
            e.exports = n
        }, {}],
        6: [function(t, e) {
            function n(t) {
                var e;
                if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName)
                    t.focus(),
                    t.setSelectionRange(0, t.value.length),
                    e = t.value;
                else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var n = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(t),
                    n.removeAllRanges(),
                    n.addRange(i),
                    e = n.toString()
                }
                return e
            }
            e.exports = n
        }, {}],
        7: [function(t, e) {
            function n() {}
            n.prototype = {
                on: function(t, e, n) {
                    var i = this.e || (this.e = {});
                    return (i[t] || (i[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    function i() {
                        r.off(t, i),
                        e.apply(n, arguments)
                    }
                    var r = this;
                    return i._ = e, this.on(t, i, n)
                },
                emit: function(t) {
                    var e = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[t] || []).slice(),
                        i = 0,
                        r = n.length;
                    for (i; r > i; i++)
                        n[i].fn.apply(n[i].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        i = n[t],
                        r = [];
                    if (i && e)
                        for (var o = 0, s = i.length; s > o; o++)
                            i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
                    return r.length ? n[t] = r : delete n[t], this
                }
            },
            e.exports = n
        }, {}],
        8: [function(e, n, i) {
            !function(r, o) {
                if ("function" == typeof t && t.amd)
                    t(["module", "select"], o);
                else if ("undefined" != typeof i)
                    o(n, e("select"));
                else {
                    var s = {
                        exports: {}
                    };
                    o(s, r.select),
                    r.clipboardAction = s.exports
                }
            }(this, function(t, e) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                var r = n(e),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                    },
                    s = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    a = function() {
                        function t(e) {
                            i(this, t),
                            this.resolveOptions(e),
                            this.initSelection()
                        }
                        return t.prototype.resolveOptions = function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = t.action,
                            this.emitter = t.emitter,
                            this.target = t.target,
                            this.text = t.text,
                            this.trigger = t.trigger,
                            this.selectedText = ""
                        }, t.prototype.initSelection = function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }, t.prototype.selectFake = function() {
                            var t = this,
                                e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(),
                            this.fakeHandler = document.body.addEventListener("click", function() {
                                return t.removeFake()
                            }),
                            this.fakeElem = document.createElement("textarea"),
                            this.fakeElem.style.fontSize = "12pt",
                            this.fakeElem.style.border = "0",
                            this.fakeElem.style.padding = "0",
                            this.fakeElem.style.margin = "0",
                            this.fakeElem.style.position = "fixed",
                            this.fakeElem.style[e ? "right" : "left"] = "-9999px",
                            this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px",
                            this.fakeElem.setAttribute("readonly", ""),
                            this.fakeElem.value = this.text,
                            document.body.appendChild(this.fakeElem),
                            this.selectedText = r["default"](this.fakeElem),
                            this.copyText()
                        }, t.prototype.removeFake = function() {
                            this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null),
                            this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                        }, t.prototype.selectTarget = function() {
                            this.selectedText = r["default"](this.target),
                            this.copyText()
                        }, t.prototype.copyText = function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }, t.prototype.handleResult = function(t) {
                            t ? this.emitter.emit("success", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            }) : this.emitter.emit("error", {
                                action: this.action,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }, t.prototype.clearSelection = function() {
                            this.target && this.target.blur(),
                            window.getSelection().removeAllRanges()
                        }, t.prototype.destroy = function() {
                            this.removeFake()
                        }, s(t, [{
                            key: "action",
                            set: function() {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                if (this._action = t, "copy" !== this._action && "cut" !== this._action)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(t) {
                                if (void 0 !== t) {
                                    if (!t || "object" !== ("undefined" == typeof t ? "undefined" : o(t)) || 1 !== t.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && t.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), t
                    }();
                t.exports = a
            })
        }, {
            select: 6
        }],
        9: [function(e, n, i) {
            !function(r, o) {
                if ("function" == typeof t && t.amd)
                    t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], o);
                else if ("undefined" != typeof i)
                    o(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                else {
                    var s = {
                        exports: {}
                    };
                    o(s, r.clipboardAction, r.tinyEmitter, r.goodListener),
                    r.clipboard = s.exports
                }
            }(this, function(t, e, n, i) {
                "use strict";
                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                function o(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                function s(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }
                function a(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function l(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n))
                        return e.getAttribute(n)
                }
                var u = r(e),
                    c = r(n),
                    d = r(i),
                    h = function(t) {
                        function e(n, i) {
                            o(this, e);
                            var r = s(this, t.call(this));
                            return r.resolveOptions(i), r.listenClick(n), r
                        }
                        return a(e, t), e.prototype.resolveOptions = function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                            this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                            this.text = "function" == typeof t.text ? t.text : this.defaultText
                        }, e.prototype.listenClick = function(t) {
                            var e = this;
                            this.listener = d["default"](t, "click", function(t) {
                                return e.onClick(t)
                            })
                        }, e.prototype.onClick = function(t) {
                            var e = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null),
                            this.clipboardAction = new u["default"]({
                                action: this.action(e),
                                target: this.target(e),
                                text: this.text(e),
                                trigger: e,
                                emitter: this
                            })
                        }, e.prototype.defaultAction = function(t) {
                            return l("action", t)
                        }, e.prototype.defaultTarget = function(t) {
                            var e = l("target", t);
                            return e ? document.querySelector(e) : void 0
                        }, e.prototype.defaultText = function(t) {
                            return l("text", t)
                        }, e.prototype.destroy = function() {
                            this.listener.destroy(),
                            this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }, e
                    }(c["default"]);
                t.exports = h
            })
        }, {
            "./clipboard-action": 8,
            "good-listener": 4,
            "tiny-emitter": 7
        }]
    }, {}, [9])(9)
}),
$(document).on("page:update", function() {
    $("[data-clipboard-button]").install("clipboard-button", function() {
        var t = new Clipboard("[data-clipboard-button]");
        t.on("success", function() {
            App.flashReset(),
            App.flashSuccess({
                text: "Text has been copied to your clipboard"
            })
        }),
        $('.clipboard-input-editable input[type="text"]').one("keyup", function() {
            $(this).siblings(".input-group-btn").hide()
        })
    })
}),
$(document).on("click", "[data-clipboard-button]", function(t) {
    t.preventDefault()
}),
window.App = {},
Jsboot(window.App, jQuery),
$('a[data-toggle="tooltip"], span[data-toggle="tooltip"], div[data-toggle="tooltip"]').tooltip(),
$(document).on("click", 'input[type="text"][data-click-select]', function() {
    $(this).select()
}),
$(function() {
    Twine.reset({}).bind().refresh()
}),
$(function() {
    $(".modal.modal-autoshow").modal("show")
}),
jQuery.fn.extend({
    install: function(t, e) {
        return this.each(function() {
            installedBehaviors = $(this).data("installed_behaviors"),
            installedBehaviors || (installedBehaviors = {}),
            installedBehaviors[t] || (e.call(this, this), installedBehaviors[t] = !0, $(this).data("installed_behaviors", installedBehaviors))
        })
    }
}),
$(document).ready(function() {
    $(this).trigger("page:update")
}),
$(document).ajaxComplete(function() {
    $(this).trigger("page:update")
}),
$(document).on("turbolinks:load", function() {
    $(this).trigger("page:update")
}),
App.scrollTo = function(t, e) {
    var n = $(window),
        i = $(e || "html, body"),
        r = $(t),
        o = r.offset().top,
        s = r.height(),
        a = n.height(),
        l = i.scrollTop() + o - n.scrollTop() - (a - s) / 2;
    i.stop().animate({
        scrollTop: l
    })
},
function(t, e) {
    function n(t) {
        t = t || e,
        s.removeClass(a),
        $(t).find(".alert").remove()
    }
    function i(t, n) {
        n = n || e,
        $(n).empty().prepend(t)
    }
    function r(t) {
        var e = $("<div>"),
            n = t.type || "error",
            i = $('<div class="media">'),
            r = $('<div class="media-left"><i class="mi"></i></div>');
        r.find("i").append(u[n]);
        var o = $('<div class="media-body">'),
            s = $('<div class="media-right media-middle alert-dismiss"><i data-dismiss="alert" class="mi">close</i></div>');
        return e.append(i), i.append(r).append(o), i.append(s), o.text(t.text), e.addClass("notifications").addClass("alert alert-" + l[n]).addClass(t["class"] || ""), e
    }
    function o(t) {
        var e = r(t);
        t.replace && n(t.target),
        i(e, t.target)
    }
    var s = $("#content"),
        a = "has-sticky-alert",
        l = {
            success: "success",
            notice: "info",
            error: "danger"
        },
        u = {
            success: "done",
            notice: "error",
            error: "warning"
        };
    t.flash = o,
    t.flashSuccess = function(t) {
        t.type = "success",
        o(t)
    },
    t.flashNotice = function(t) {
        t.type = "notice",
        o(t)
    },
    t.flashError = function(t) {
        t.type = "error",
        o(t)
    },
    t.flashReset = function(t) {
        t = t || {},
        n(t.target)
    }
}(App, "#main-flash-messages"),
$(document).on("click", "a[href^='appcues:']", function(t) {
    t.preventDefault(),
    Appcues.show(t.target.href.replace("appcues:", ""))
}),
App.initializeCheckboxes = function() {
    $("[data-icheck]").iCheck({
        checkboxClass: "icheckbox icheckbox_minimal-grey",
        increaseArea: "150%"
    })
},
App.initializeCheckboxes(),
$("[data-fancy-placeholders]").each(function() {
    function t(t) {
        $(t).parents(".form-group").children("label").addClass("active")
    }
    function e(t) {
        $(t).parents(".form-group").children("label").removeClass("active")
    }
    var n = $(this).find(".form-group"),
        i = $(this).find(".form-control");
    n.on("click", function() {
        $(this).children(".form-control").focus()
    }),
    i.on("focus", function() {
        t(this)
    }),
    i.on("blur", function() {
        "" == $(this).val() && e(this)
    }),
    i.each(function() {
        "" == $(this).val() ? e(this) : t(this)
    })
});
var stateInput = $(".checkout-form-container #checkout_offer_extra_contact_information_address_state");
$(".checkout-form-container #input-address-country").on("change", function(t) {
    var e = ["US", "CA"].indexOf($(t.target).val()) > -1;
    stateInput.toggleClass("required", e),
    stateInput.parsley().reset()
}),
App.CheckoutActiveCouponDisplay = function(t) {
    this.$eventBus = $(document),
    this.$el = $(t),
    this.$descriptionEl = this.$el.find(".coupon-code-description"),
    this.$eventBus.on("kjb:checkout:coupon:applied", this.onCouponApplied.bind(this)),
    this.$eventBus.on("kjb:checkout:coupon:removed", this.onCouponRemoved.bind(this)),
    this.$el.hide()
},
App.CheckoutActiveCouponDisplay.prototype = {
    onCouponApplied: function(t, e) {
        this.$descriptionEl.html(e.coupon_description),
        this.$el.show()
    },
    onCouponRemoved: function() {
        this.$el.hide(),
        this.$descriptionEl.html("")
    }
},
App.CheckoutBusinessNumberDisplay = function(t) {
    this.$eventBus = $(document),
    this.$el = $(t),
    this.loadingSpinner = this.$el.parents("[data-loading-spinner]").find(".loading-spinner"),
    this.parentGroup = this.$el.parents(".business-number"),
    $(".business-number__hint").length && (this.businessNumberTooltip = this.parentGroup.find("[data-toggle='tooltip']"), this.businessNumberTooltip.tooltip()),
    this.$el.on("change", _.debounce(this.onBusinessFieldEntry.bind(this), 250))
},
App.CheckoutBusinessNumberDisplay.prototype = {
    onBusinessFieldEntry: function() {
        var t = this.$el.val().trim(),
            e = $("#input-address-country").val(),
            n = window.location.pathname + "/validate_business_number?country=" + e + "&business_number=" + t;
        0 !== t.length && (App.CheckoutBusinessNumberDisplay.prototype.onBusinessFieldLoading.call(this), $.ajax({
            dataType: "json",
            method: "GET",
            url: n
        }).always(this.onBusinessFieldComplete.bind(this)))
    },
    onBusinessFieldLoading: function() {
        this.businessNumberTooltip.removeClass("active"),
        this.loadingSpinner.hasClass("active") ? (this.$el.prop("readonly", !1), this.loadingSpinner.removeClass("active")) : (this.$el.prop("readonly", !0), this.loadingSpinner.addClass("active"))
    },
    onBusinessFieldComplete: function(t) {
        App.CheckoutBusinessNumberDisplay.prototype.onBusinessFieldLoading.call(this),
        "valid" === t.status ? App.CheckoutBusinessNumberDisplay.prototype.onBusinessFieldSuccess.call(this) : App.CheckoutBusinessNumberDisplay.prototype.onBusinessFieldError.call(this)
    },
    onBusinessFieldSuccess: function() {
        this.businessNumberTooltip.removeClass("active")
    },
    onBusinessFieldError: function() {
        this.businessNumberTooltip.addClass("active")
    }
},
App.CheckoutOrderBumpToggle = function(t) {
    this.$eventBus = $(document),
    this.$el = $(t),
    this.$el.on("click", this.onClick.bind(this)),
    this.$eventBus.on("kjb:checkout:giftCoupon:applied", this.resetInput.bind(this))
},
App.CheckoutOrderBumpToggle.prototype = {
    isChecked: function() {
        return this.$el.is(":checked")
    },
    resetInput: function() {
        this.$el.prop("checked", !1)
    },
    onClick: function() {
        this.$eventBus.trigger("kjb:checkout:orderBump:changed", {
            includeOrderBump: this.isChecked()
        })
    }
},
App.CheckoutPanel = function(t, e) {
    this.emailAutofillEnabled = null !== document.querySelector(".checkout-email-autofill") ? !0 : !1,
    this.hasCheckoutAnalytics = null !== document.querySelector(".offer-checkout--analytics"),
    this.$el = $(t),
    this.eventBus = $(document),
    this.$memberEmail = this.$el.find("#checkout_offer_member_email"),
    this.$accountCheckContainer = this.$el.find(".checkout-personal-info-container"),
    this.$taxEl = this.$el.find('[data-checkout="tax-due"]'),
    this.$dueNowEl = this.$el.find('[data-checkout="due-now"]'),
    this.$contactCountry = this.$el.find("#input-address-country"),
    this.$contactState = this.$el.find("#checkout_offer_extra_contact_information_address_state"),
    this.$hiddenCouponField = this.$el.find("#stripe_coupon_id"),
    this.$hiddenSingleUseField = this.$el.find("#single_use_code"),
    this.$hiddenAffiliateCouponField = this.$el.find("#affiliate_coupon_code"),
    this.discountedClass = "js-checkout-panel-discounted",
    this.pendingLoginClass = "checkout-email-account-exists-pending",
    this.options = $.extend({}, e),
    this.accountExists = !1,
    this.showOrderBump = !0,
    this.showPayment = !0,
    this.freeForeverCouponApplied = !1,
    this.eventBus.on("kjb:checkout:giftCoupon:applied", this.onCheckoutGiftCouponApplied.bind(this)),
    this.eventBus.on("kjb:checkout:coupon:applied", this.onCheckoutCouponApplied.bind(this)),
    this.eventBus.on("kjb:checkout:coupon:removed", this.onCheckoutCouponRemoved.bind(this)),
    this.eventBus.on("kjb:checkout:freeForeverCoupon:applied", this.onCheckoutFreeForeverCouponApplied.bind(this)),
    this.$memberEmail.on("keyup", _.debounce(this.checkMemberEmailExists.bind(this), 300)),
    this.$contactCountry.on("change", this.populateCountrySubdivisions.bind(this)),
    $(document).on("click", ".remove-coupon", this.onRemoveCouponClicked.bind(this))
},
App.CheckoutPanel.prototype = {
    populateCountrySubdivisions: function() {
        var t = this.$contactCountry.val();
        this.$contactState.prop("disabled", "disabled"),
        $.ajax({
            type: "get",
            url: "checkout/country_subdivisions",
            data: {
                country: t
            }
        }).done(this.populateCountrySubdivisionsSuccess.bind(this))
    },
    populateCountrySubdivisionsSuccess: function(t) {
        if (this.$contactState.find("option").slice(1).remove(), Array.isArray(t) && t.length) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = new Option(t[e][0], t[e][1]);
                this.$contactState.append(i)
            }
            this.$contactState.addClass("required"),
            this.$contactState.prop("disabled", !1)
        } else
            this.$contactState.removeClass("required"),
            this.$contactState.prop("disabled", "disabled")
    },
    checkMemberEmailExists: function() {
        {
            var t = this.$memberEmail.val().trim().toLowerCase();
            this.$memberEmail.siblings(".parsley-errors-list"),
            this.$memberEmail.data("parsley-invalid-email")
        }
        0 !== t.length && ($.ajax({
            type: "get",
            url: "checkout/check_account_exists",
            data: {
                email: t
            }
        }).done(this.checkMemberEmailExistsSuccess.bind(this)), this.$accountCheckContainer.addClass(this.pendingLoginClass))
    },
    checkMemberEmailExistsSuccess: function(t) {
        if (this.accountExists = t.accountExists, this.$accountCheckContainer.removeClass(this.pendingLoginClass), Twine.refresh(), this.emailAutofillEnabled && this.accountExists) {
            var e = this.$memberEmail.val().trim().toLowerCase(),
                n = "&" + $.param({
                    member: {
                        email: e
                    }
                }),
                i = $("a.checkout-panel-btn");
            i.attr("href", i.attr("href") + n);
            var r = $("a.account-exists-link");
            r.attr("href", r.attr("href") + n)
        }
        this.$memberHeading && this.$memberHeading.text(this.$memberHeading.data("heading-new-member"))
    },
    onCheckoutCouponApplied: function(t, e) {
        this.$el.addClass(this.discountedClass),
        this.$hiddenCouponField.val(e.coupon_code),
        e.single_use_code && this.$hiddenSingleUseField.val(e.single_use_code),
        e.affiliate_coupon_code && this.$hiddenAffiliateCouponField.val(e.affiliate_coupon_code)
    },
    onCheckoutCouponRemoved: function() {
        this.showPayment = !0,
        this.showOrderBump = !0,
        this.freeForeverCouponApplied = !1,
        this.eventBus.trigger("kjb:checkoutPaymentStepShow"),
        this.$hiddenCouponField.val(""),
        this.$hiddenSingleUseField.val(""),
        this.$hiddenAffiliateCouponField.val(""),
        this.$el.removeClass(this.discountedClass),
        Twine.refresh()
    },
    onCheckoutGiftCouponApplied: function() {
        this.showPayment = !1,
        this.showOrderBump = !1,
        this.eventBus.trigger("kjb:checkoutPaymentStepHide"),
        Twine.refresh()
    },
    onCheckoutFreeForeverCouponApplied: function() {
        this.freeForeverCouponApplied = !0,
        Twine.refresh()
    },
    onRemoveCouponClicked: function(t) {
        t.preventDefault(),
        this.eventBus.trigger("kjb:checkout:coupon:remove")
    },
    submitCheckout: function(t) {
        this.hasCheckoutAnalytics && ktag("event", "begin_checkout", t)
    }
},
App.CheckoutPaymentStep = function(t, e, n) {
    this.hasCheckoutAnalytics = null !== document.querySelector(".offer-checkout--analytics"),
    this.eventBus = $(document),
    this.$el = $(t),
    this.$cardElement = $("#card-element"),
    this.$form = this.$cardElement.closest("form"),
    this.$defaultPaymentMethodInput = $("#default_stripe_payment_method"),
    this.$newPaymentMethodInput = $("#new_stripe_payment_method"),
    this.stripeFormDisabledState = e,
    this.paymentChoice = e ? "cardOnFile" : "newCard",
    this.paymentType = n,
    this.paymentChoiceChanged(),
    this.serviceAgreementValid = 0 === $("#checkout_offer_service_agreement").length,
    Twine.refresh(),
    this.$cardElement.on("card-change", this.onCardChange.bind(this)),
    this.$cardElement.on("card-brand-change", function(t, e) {
        this.cardBrand = e,
        this.showCardBrand()
    }.bind(this)),
    this.eventBus.on("kjb:checkoutPaymentStepInvalid", this.onCheckoutPaymentStepInvalid.bind(this)),
    this.eventBus.on("kjb:checkoutPaymentStepHide", this.onPaymentStepHide.bind(this)),
    this.eventBus.on("kjb:checkoutPaymentStepShow", this.toggle.bind(this, !1)),
    1 === $("#checkout_offer_service_agreement").length && $("#checkout_offer_service_agreement:checkbox").on("change", function(t) {
        this.serviceAgreementValid = t.currentTarget.checked,
        this.eventBus.trigger("kjb:checkoutOfferServiceAgreementUpdated", this.serviceAgreementValid),
        Twine.refresh()
    }.bind(this))
},
App.CheckoutPaymentStep.prototype = {
    toggle: function(t) {
        this.stripeFormDisabledState = t,
        window.kjbStripeElementSkip = this.stripeFormDisabledState,
        this.$el.find("[data-stripe=name]").toggleClass("required", !this.stripeFormDisabledState)
    },
    onCardChange: function(t, e) {
        this.eventBus.trigger(e.complete ? "kjb:checkoutPaymentStepComplete" : "kjb:checkoutPaymentStepIncomplete")
    },
    onStripeCardSuccess: function(t) {
        this.hasCheckoutAnalytics && ktag("event", "add_payment_info", t)
    },
    onCheckoutPaymentStepInvalid: function() {
        this.$cardElement.trigger("card-error")
    },
    changePaymentType: function() {
        this.paymentType = null
    },
    setPaymentChoice: function(t) {
        this.paymentChoice = t,
        this.paymentChoiceChanged()
    },
    paymentChoiceChanged: function() {
        "stripe" === this.paymentType && "newCard" === this.paymentChoice ? (this.$cardElement.trigger("card-reset"), this.enableNewPaymentMethodInput(), this.eventBus.trigger("kjb:checkoutPaymentStepIncomplete")) : (this.enableDefaultPaymentMethodInput(), this.eventBus.trigger("kjb:checkoutPaymentStepComplete")),
        this.toggle("cardOnFile" === this.paymentChoice || "paypal" === this.paymentType || "test" === this.paymentType)
    },
    enableNewPaymentMethodInput: function() {
        this.$newPaymentMethodInput.attr("disabled", !1),
        this.$defaultPaymentMethodInput.attr("disabled", !0)
    },
    enableDefaultPaymentMethodInput: function() {
        this.$newPaymentMethodInput.attr("disabled", !0),
        this.$defaultPaymentMethodInput.attr("disabled", !1)
    },
    showCardOnFile: function() {
        return "cardOnFile" === this.paymentChoice
    },
    showNewCard: function() {
        return "newCard" === this.paymentChoice
    },
    showCardBrand: function() {
        var t = {
            visa: "Visa",
            mastercard: "MasterCard",
            discover: "Discover",
            amex: "American Express",
            unknown: "Unknown"
        };
        t[this.cardBrand] || (this.cardBrand = "unknown"),
        this.cardBrandName = t[this.cardBrand]
    },
    onPaymentStepHide: function() {
        this.toggle(!0),
        this.changePaymentType()
    }
},
App.CheckoutPriceBreakdown = function(t, e) {
    this.$eventBus = $(document),
    this.$el = $(t),
    this.loadingClass = "loading",
    this.opts = e,
    this.includeOrderBump = !1,
    this.couponCode = null,
    this.couponName = null,
    this.affiliateCouponCode = null,
    this.addressInfo = {},
    this.businessNumber = null,
    this.extraContactInfoFields = new App.ExtraContactInfoFields,
    this.$eventBus.on("kjb:checkout:coupon:applied", this.onCouponApplied.bind(this)),
    this.$eventBus.on("kjb:checkout:coupon:removed", this.onCouponRemoved.bind(this)),
    this.$eventBus.on("kjb:checkout:orderBump:changed", this.onOrderBumpChanged.bind(this)),
    this.$eventBus.on("kjb:checkout:priceBreakdown:refreshed", this.onPriceBreakdownRefreshed.bind(this)),
    this.$eventBus.on("kjb:extraContactInfoFields:change", _.debounce(this.onContactFieldsChanged.bind(this), 300)),
    this.refreshPriceBreakdown()
},
App.CheckoutPriceBreakdown.prototype = {
    alwaysShowBreakdown: function() {
        return this.opts.alwaysShowBreakdown === !0
    },
    onContactFieldsChanged: function(t, e) {
        this.addressInfo = {
            to_country: e.address_country,
            to_zip: e.address_zip,
            to_street: e.address_line_1,
            to_city: e.address_city,
            to_state: e.address_state
        },
        this.businessNumber = e.business_number,
        this.refreshPriceBreakdown()
    },
    onCouponApplied: function(t, e) {
        e.gift_coupon && (this.includeOrderBump = !1),
        this.couponCode = e.coupon_code,
        this.couponName = e.coupon_name,
        this.affiliateCouponCode = e.affiliate_coupon_code,
        this.refreshPriceBreakdown()
    },
    onCouponRemoved: function() {
        this.couponCode = null,
        this.couponName = null,
        this.refreshPriceBreakdown()
    },
    onOrderBumpChanged: function(t, e) {
        this.includeOrderBump = e.includeOrderBump,
        this.refreshPriceBreakdown()
    },
    onPriceBreakdownRefreshed: function() {
        this.$el.find(".coupon-code").html(this.couponName)
    },
    payload: function() {
        return {
            include_order_bump: this.includeOrderBump,
            coupon_code: this.couponCode,
            affiliate_coupon_code: this.affiliateCouponCode,
            sales_tax: this.addressInfo,
            business_number: this.businessNumber,
            always_show_breakdown: this.alwaysShowBreakdown()
        }
    },
    refreshPriceBreakdown: function() {
        this.startLoading(),
        $.ajax({
            url: "checkout/price_breakdown",
            data: this.payload()
        }).done(function(t) {
            this.$el.html(t),
            this.stopLoading(),
            Twine.refresh(),
            this.$eventBus.trigger("kjb:checkout:priceBreakdown:refreshed")
        }.bind(this))
    },
    startLoading: function() {
        this.$el.addClass(this.loadingClass)
    },
    stopLoading: function() {
        this.$el.removeClass(this.loadingClass)
    }
},
App.CheckoutSteps = function(t, e) {
    this.eventBus = $(document),
    this.options = e,
    this.steps = e.steps,
    this.editor = e.editor,
    this.captureUrl = e.captureUrl,
    this.captureEnabled = e.captureEnabled,
    this.checkSubscriptionUrl = e.checkSubscriptionUrl,
    this.completedSteps = e.completedSteps,
    this.currentStep = this.nextIncompleteStep(),
    this.paymentStepComplete = !1,
    this.paymentFormErrorMessage = this.options.paymentFormErrorMessage,
    this.discountedClass = "js-checkout-panel-discounted",
    this.mediaQuery = window.matchMedia("(max-width: 991px)"),
    this.$el = $(t),
    this.$form = this.$el.closest("form"),
    this.$contactCountry = this.$el.find("#input-address-country"),
    this.$contactState = this.$el.find("#checkout_offer_extra_contact_information_address_state"),
    this.$hiddenCouponField = this.$el.find("#stripe_coupon_id"),
    this.$hiddenSingleUseField = this.$el.find("#single_use_code"),
    this.editor || this.focusOnFirstInput(),
    this.$form.submit(function(t) {
        return this.isOnLastStep() ? void 0 : (this.completeStep(this.currentStep), t.preventDefault(), t.stopImmediatePropagation(), !1)
    }.bind(this)),
    this.$el.on("keydown", this.onPressingEnter.bind(this)),
    this.eventBus.on("kjb:checkoutPaymentStepComplete", this.onCheckoutPaymentStepComplete.bind(this)),
    this.eventBus.on("kjb:checkoutPaymentStepIncomplete", this.onCheckoutPaymentStepIncomplete.bind(this)),
    this.eventBus.on("kjb:checkout:giftCoupon:applied", this.onCheckoutGiftCouponApplied.bind(this)),
    this.eventBus.on("kjb:checkout:coupon:applied", this.onCheckoutCouponApplied.bind(this)),
    this.eventBus.on("kjb:checkout:coupon:removed", this.onCheckoutCouponRemoved.bind(this)),
    this.eventBus.on("kjb:checkout:freeForeverCoupon:applied", this.onCheckoutFreeForeverCouponApplied.bind(this)),
    this.$contactCountry.on("change", this.populateCountrySubdivisions.bind(this)),
    $(document).on("click", ".add-coupon", this.onAddCouponClicked.bind(this)),
    $(document).on("click", ".remove-coupon", this.onRemoveCouponClicked.bind(this)),
    window.onePassword.disable()
},
App.CheckoutSteps.prototype = {
    gotoStep: function(t) {
        window.onePassword.disable(),
        this.isComplete(this.currentStep) ? this.validateStep(this.currentStep).then(function() {
            this.currentStep = t,
            Twine.refresh(),
            setTimeout(this.focusOnFirstInput.bind(this), 1)
        }.bind(this)) : this.currentStep = t
    },
    completeStep: function(t) {
        this.validateStep(t).then(function() {
            this.isComplete(t) || this.completedSteps.push(t),
            this.currentStep = this.nextIncompleteStep(),
            this.isOnLastStep() && window.onePassword.enable(),
            this.captureEnabled && this.captureProgress(),
            Twine.refresh(),
            setTimeout(this.focusOnFirstInput.bind(this), 1)
        }.bind(this))
    },
    focusOnFirstInput: function(t) {
        if (!this.mediaQuery.matches) {
            var e = t || this.currentStep;
            this.$el.find('[data-step-id="' + e + '"] :input:visible:first').not(":submit").not('input[type="checkbox"]').click().focus()
        }
    },
    isActive: function(t) {
        return this.editor ? !0 : this.currentStep === t
    },
    isComplete: function(t) {
        return -1 !== $.inArray(t, this.completedSteps)
    },
    isOnLastStep: function() {
        return this.currentStep === this.steps[this.steps.length - 1]
    },
    showActiveState: function(t) {
        return this.isActive(t)
    },
    showCompletedState: function(t) {
        return !this.isActive(t) && this.isComplete(t)
    },
    showIncompleteState: function(t) {
        return !this.isActive(t) && !this.isComplete(t)
    },
    nextIncompleteStep: function() {
        for (var t in this.steps) {
            var e = this.steps[t];
            if (!this.isComplete(e))
                return e
        }
    },
    onAddCouponClicked: function(t) {
        t.preventDefault(),
        this.eventBus.trigger("kjb:checkout:coupon:add")
    },
    onCheckoutCouponApplied: function(t, e) {
        $("body").addClass(this.discountedClass),
        this.$hiddenCouponField.val(e.coupon_code),
        e.single_use_code && this.$hiddenSingleUseField.val(e.single_use_code)
    },
    onCheckoutPaymentStepComplete: function() {
        this.paymentStepComplete = !0
    },
    onCheckoutPaymentStepIncomplete: function() {
        this.paymentStepComplete = !1
    },
    onRemoveCouponClicked: function(t) {
        t.preventDefault(),
        this.eventBus.trigger("kjb:checkout:coupon:remove")
    },
    validateStep: function(t) {
        return "payment" != this.currentStep || this.paymentStepComplete || window.kjbStripeElementSkip ? "account_information" == this.currentStep ? this.$form.parsley().asyncValidate(t).then(this.checkSubscription(this.checkSubscriptionUrl)) : this.$form.parsley().asyncValidate(t) : (this.eventBus.trigger("kjb:checkoutPaymentStepInvalid"), $.Deferred(function(t) {
            App.flashError({
                text: this.paymentFormErrorMessage
            }),
            t.reject()
        }.bind(this)))
    },
    onPressingEnter: function(t) {
        var e = t.keyCode || t.which;
        return 13 !== e || this.isOnLastStep() ? void 0 : (this.completeStep(this.currentStep), t.preventDefault(), t.stopImmediatePropagation(), !1)
    },
    captureProgress: function() {
        $.ajax({
            url: this.captureUrl,
            data: {
                email: $("#checkout_offer_member_email").val()
            }
        })
    },
    checkSubscription: function(t) {
        return $.ajax({
            url: t,
            data: {
                email: $("#checkout_offer_member_email").val()
            },
            success: function(t) {
                t.subscribed ? $("#checkout-optin-checkbox").hide() : $("#checkout-optin-checkbox").show()
            }
        })
    },
    onCheckoutGiftCouponApplied: function() {
        this.giftCouponApplied = !0,
        this.$el.find('[data-step-id="payment"]').hide(),
        this.$el.find(".checkout-order-bump").hide(),
        this.isComplete("payment") || this.completedSteps.push("payment"),
        this.currentStep = this.nextIncompleteStep(),
        Twine.refresh(),
        this.eventBus.trigger("kjb:checkoutPaymentStepHide")
    },
    onCheckoutCouponRemoved: function() {
        if (this.giftCouponApplied) {
            var t = $.inArray("payment", this.completedSteps);
            -1 !== t && this.completedSteps.splice(t, 1),
            this.currentStep = this.nextIncompleteStep(),
            this.giftCouponApplied = !1,
            this.$el.find('[data-step-id="payment"]').show(),
            this.$el.find(".checkout-order-bump").show(),
            this.eventBus.trigger("kjb:checkoutPaymentStepShow")
        }
        this.freeForeverCouponApplied = !1,
        this.$hiddenCouponField.val(""),
        this.$hiddenSingleUseField.val(""),
        $("body").removeClass(this.discountedClass),
        Twine.refresh()
    },
    onCheckoutFreeForeverCouponApplied: function() {
        this.freeForeverCouponApplied = !0,
        Twine.refresh()
    },
    populateCountrySubdivisions: function() {
        var t = this.$contactCountry.val();
        this.$contactState.prop("disabled", "disabled"),
        $.ajax({
            type: "get",
            url: "checkout/country_subdivisions",
            data: {
                country: t
            }
        }).done(this.populateCountrySubdivisionsSuccess.bind(this))
    },
    populateCountrySubdivisionsSuccess: function(t) {
        if (this.$contactState.find("option").slice(1).remove(), Array.isArray(t) && t.length) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = new Option(t[e][0], t[e][1]);
                this.$contactState.append(i)
            }
            this.$contactState.addClass("required"),
            this.$contactState.prop("disabled", !1)
        } else
            this.$contactState.removeClass("required"),
            this.$contactState.prop("disabled", "disabled")
    }
},
App.CheckoutModal = function(t) {
    function e() {
        var t = document.querySelector('.modal[data-show="true"]');
        document.body.classList.remove("modal-open"),
        i.classList.remove("show"),
        t.setAttribute("data-show", !1),
        i.removeEventListener("click", e)
    }
    var n,
        i = document.querySelector(".modal-backdrop"),
        r = Array.prototype.slice.apply(document.querySelectorAll('[data-dismiss="modal"]'));
    this.$el = $(t),
    this.$originalMarkup = this.$el.html(),
    this.$el.on("hidden.bs.modal", this.onHidden.bind(this)),
    null !== document.querySelector(".modal--offer") && (n = document.querySelector(".modal--offer"), n.focus(), i.classList.add("show")),
    r.forEach(function(t) {
        t.addEventListener("click", e)
    }),
    i.addEventListener("click", e),
    document.addEventListener("keyup", function(t) {
        var i = "which" in t ? t.which : t.keyCode;
        27 === i && null !== n && e()
    })
},
App.CheckoutModal.prototype = {
    onHidden: function() {
        this.$el.html(this.$originalMarkup)
    }
},
function() {
    function t() {
        return "undefined" == typeof Sage
    }
    function e(e) {
        t() ? (e.on("hidden.bs.modal", e.detach), e.modal()) : $("body").append(e)
    }
    function n(t, e) {
        t.data(e, null),
        t.trigger("click.rails")
    }
    function i(t, e) {
        var n = $(t).text(),
            i = _.template(n);
        return $(i(e))
    }
    function r(e) {
        var n = {
            type: "danger",
            cancel: "Cancel",
            title: "Are you sure?"
        };
        return e = $.extend(n, e), t() ? i("#confirmation-modal-template-legacy", e) : i("#confirmation-modal-template", e)
    }
    function o(t, n) {
        var i = t.find("[data-js-confirmation-modal-confirm]");
        i.on("click", {
            callback: n
        }, l),
        e(t)
    }
    function s(t, n, i) {
        var r = t.find('input[type="text"]'),
            o = t.find("[data-js-confirmation-modal-confirm]");
        u(o),
        e(t),
        r.on("input", function() {
            var t = r.val();
            t === n ? (c(o), o.on("click", {
                callback: i
            }, l)) : u(o)
        })
    }
    function a(t, e) {
        var n = e.find("[data-js-confirmation-modal-confirm]");
        t.on("ajax:error", function() {
            c(n)
        })
    }
    function l(t) {
        var e = $(this);
        u(e),
        t.data.callback()
    }
    function u(t) {
        t.addClass("disabled"),
        t.prop("disabled", !0)
    }
    function c(t) {
        t.removeClass("disabled"),
        t.prop("disabled", !1)
    }
    function d(e, n, r, o, l) {
        var u = {
            resourceType: e,
            matchText: r,
            additionalMessage: n,
            title: "Delete this " + e + "?"
        };
        if (t())
            var c = i("#confirmation-match-modal-template-legacy", u);
        else
            var c = i("#confirmation-match-modal-template", u);
        a(o, c),
        s(c, r, l)
    }
    function h(t, e) {
        var i = t.data(e),
            r = i.match_text,
            o = i.resource_type,
            s = i.additional_message;
        return r ? void d(o, s, r, t, function() {
            n(t, e)
        }) : !0
    }
    function f(t, e, n) {
        var i = r(t);
        a(e, i),
        o(i, n)
    }
    function p(t, e) {
        var i = t.data(e),
            r = {
                confirmation: $(t).text()
            };
        "string" == typeof i && (i = {
            message: i
        }),
        i = $.extend(r, i),
        f(i, t, function() {
            n(t, e)
        })
    }
    var m = $.rails.allowAction;
    $.rails.allowAction = function(t) {
        return t.data("confirm-with-match") ? (h(t, "confirm-with-match"), !1) : t.data("confirm-modal") ? (p(t, "confirm-modal"), !1) : m(t)
    },
    App.confirmation = {
        buildModal: r,
        bindClick: o
    }
}(),
App.CouponPanel = function(t) {
    this.$eventBus = $(document),
    this.$el = $(t),
    this.$input = this.$el.find("input"),
    this.$button = this.$el.find("button"),
    this.loading = !1,
    this.$input.on("change keyup paste", this.buttonDisabledStatusUpdate.bind(this)),
    this.$button.on("click", this.submit.bind(this)),
    this.$input.on("keypress", function(t) {
        13 === t.keyCode && this.submit(t)
    }.bind(this)),
    this.$eventBus.on("kjb:checkout:coupon:add", this.highlightCouponInput.bind(this)),
    this.$eventBus.on("kjb:checkout:coupon:remove", this.removeCoupon.bind(this)),
    this.buttonDisabledStatusUpdate(),
    this.setInitialState()
},
App.CouponPanel.prototype = {
    buttonDisabledStatusUpdate: function() {
        this.$button.hasClass("js-keep-visible") || (!this.loading && this.$input.val() ? this.$button.show() : this.$button.hide())
    },
    highlightCouponInput: function() {
        this.$input.click().focus(),
        App.scrollTo(this.$el)
    },
    onSubmitAlways: function() {
        this.loading = !1,
        this.buttonDisabledStatusUpdate(),
        this.updateSignInLinkCouponCode()
    },
    onSubmitDone: function(t) {
        this.$el.hide(),
        t.gift_coupon && this.$eventBus.trigger("kjb:checkout:giftCoupon:applied"),
        t.free_forever_coupon && this.$eventBus.trigger("kjb:checkout:freeForeverCoupon:applied"),
        this.$eventBus.trigger("kjb:checkout:coupon:applied", _.extend(t, {
            coupon_code: t.coupon || t.single_use_code
        })),
        this.$input.val("").change().parsley().validate()
    },
    onSubmitFail: function() {
        App.flashError({
            text: this.$input.data("invalid-message")
        })
    },
    removeCoupon: function() {
        this.$input.val(""),
        this.$el.show(),
        this.$eventBus.trigger("kjb:checkout:coupon:removed")
    },
    setInitialState: function() {
        this.$input.val().length > 0 && this.$button.click()
    },
    submit: function(t) {
        t.preventDefault(),
        this.$input.val() && (this.loading = !0, this.buttonDisabledStatusUpdate(), $.ajax({
            url: this.$button.data().url,
            method: "POST",
            data: {
                coupon_code: $.trim(this.$input.val())
            }
        }).done(this.onSubmitDone.bind(this)).fail(this.onSubmitFail.bind(this)).always(this.onSubmitAlways.bind(this)))
    },
    updateSignInLinkCouponCode: function() {
        var t = $("a#sign-in-link"),
            e = $("#stripe_coupon_id").val();
        if (t.length && e) {
            var n = t.attr("href");
            $(t).attr("original-href") || t.attr("original-href", n);
            var n = t.attr("original-href");
            new_href = -1 != n.indexOf("?") ? n + "&coupon_code=" + e : n + "?coupon_code=" + e,
            t.attr("href", new_href)
        }
    }
},
App.ExtraContactInfoFields = function() {
    this.$eventBus = $(document),
    this.addressFieldsSelector = '[name^="checkout_offer[extra_contact_information"]',
    this.allowedFields = ["address_line_1", "address_city", "address_state", "address_zip", "address_country", "business_number"],
    $(document).on("change", this.addressFieldsSelector, this.onAddressFieldsChange.bind(this))
},
App.ExtraContactInfoFields.prototype = {
    data: function() {
        var t = $(document).find(this.addressFieldsSelector);
        return _(t.serializeArray()).chain().map(function(t) {
            return t.name = this.extractFieldName(t.name), [t.name, t.value]
        }.bind(this)).object().pick(this.allowedFields).value()
    },
    extractFieldName: function(t) {
        return _.last(t.match(/\[(.*?)\]/g)).replace(/\[|\]/g, "")
    },
    onAddressFieldsChange: function() {
        this.$eventBus.trigger("kjb:extraContactInfoFields:change", this.data())
    }
},
$(window).on("message", function(t) {
    var e = t.originalEvent.data;
    e && e.type && $(window).trigger("message:" + e.type, e)
}),
ThemeEditorBindings = function() {
    this.editing = !0,
    $(window).on("message:reload", this.reload.bind(this)),
    $(window).on("message:reloadSection", this.reloadSection.bind(this)),
    $(window).on("message:reorderSection", this.reorderSection.bind(this)),
    $(window).on("message:removeSection", this.removeSection.bind(this)),
    $(window).on("message:addSection", this.addSection.bind(this)),
    $(window).on("message:scrollToSection", this.scrollToSection.bind(this)),
    $(window).on("message:scrollToBlock", this.scrollToBlock.bind(this)),
    $(window).on("message:highlightSection", this.highlightSection.bind(this)),
    $(window).on("message:endHighlight", this.endHighlight.bind(this)),
    $(window).on("message:toggleEditing", this.toggleEditing.bind(this)),
    $(window).on("click", function(t) {
        t.preventDefault()
    }),
    $(document).on({
        mouseenter: this.onMouseEnter.bind(this),
        mouseleave: this.onMouseLeave.bind(this),
        click: this.onClick.bind(this)
    }, "[kjb-settings-id]"),
    $("[data-method]").each(function(t, e) {
        e.removeAttribute("data-method")
    }),
    $("[href='#two-step']").each(function(t, e) {
        e.removeAttribute("href")
    }),
    $("body").append("<div id='editor-overlay'><div class='editor-overlay-button'>Edit</div></div>")
},
ThemeEditorBindings.prototype = {
    reload: function() {
        window.location.reload()
    },
    reloadSection: function(t, e) {
        var n = this,
            i = e.overrides;
        i.overrides && i.overrides.block_order && !i.overrides.block_order.length && (i.overrides.block_order = [""]);
        var r = $.extend({
            theme_section_type: e.sectionType,
            theme_section_id: e.id,
            _method: "GET"
        }, i);
        $.post("", r, function(t) {
            n.section(e.id).replaceWith(t),
            n.postMessage("finishedLoadingSection"),
            $(window).trigger("section:reload", e)
        })
    },
    reorderSection: function(t, e) {
        var n = this.section(e.id),
            i = this.section(e.nextId);
        i.length ? n.insertBefore(i) : $("[data-dynamic-sections]").append(n),
        this.scrollTo(n)
    },
    removeSection: function(t, e) {
        this.section(e.id).remove()
    },
    addSection: function(t, e) {
        var n = this,
            i = this.scrollTo,
            r = e.overrides,
            o = {
                theme_section_type: e.sectionType,
                theme_section_id: e.id,
                _method: "GET"
            };
        r && -1 === _.keys(r)[0].indexOf("override") ? o.overrides = r : $.extend(o, r),
        $.post("", o, function(t) {
            var e = $(t);
            $("[data-dynamic-sections]").append(e),
            i(e),
            n.postMessage("finishedLoadingSection")
        })
    },
    scrollToBlock: function(t, e) {
        this.scrollTo($("#block-" + e.id))
    },
    scrollToSection: function(t, e) {
        var n = this.section(e.id);
        this.scrollTo(n)
    },
    highlightSection: function(t, e) {
        $("[data-section-id]").css("opacity", .3);
        var n = this.section(e.id);
        n.css("opacity", 1),
        n.css("box-shadow", "0 5px 45px 5px rgba(0, 0, 0, 0.3)"),
        this.scrollTo(n)
    },
    endHighlight: function() {
        $("[data-section-id]").removeAttr("style")
    },
    toggleEditing: function(t, e) {
        this.editing = e.edit
    },
    scrollTo: function(t) {
        var e = $(window),
            n = $(t),
            i = n.offset().top,
            r = n.height(),
            o = e.height(),
            s = i - (o - r) / 2;
        $("html, body").stop().animate({
            scrollTop: s
        })
    },
    section: function(t) {
        return $("[data-section-id='" + t + "']")
    },
    postMessage: function(t, e) {
        e = e || {},
        e.type = t,
        window.parent.postMessage(e, "*")
    },
    onMouseEnter: function(t) {
        if (this.editing) {
            var e = $(t.currentTarget);
            $("#editor-overlay").css({
                width: e.outerWidth() + 16,
                height: e.outerHeight() + 16,
                top: e.offset().top - 8,
                left: e.offset().left - 8
            }).show()
        }
    },
    onMouseLeave: function() {
        $("#editor-overlay").hide()
    },
    onClick: function(t) {
        this.editing && (t.preventDefault(), t.stopPropagation(), this.postMessage("editSetting", {
            setting: t.currentTarget.getAttribute("kjb-settings-id")
        }))
    }
};
var isFramed = function() {
    return self !== top
};
!function() {
    function t() {
        return "0" === $.cookie("_abv")
    }
    if ("object" == typeof Kajabi && !isFramed() && "User" === Kajabi.currentSiteUser.type) {
        var e = "<style>  #admin_bar_iframe {    height: 50px;    position: fixed;     top: 0px;    left: auto;    right: 0;    z-index: 2147483647;    width: 30px;    background: transparent;  }</style>";
        $("head").prepend(e);
        var n = "/preview_bar?preview_theme_id=" + Kajabi.theme.previewThemeId,
            i = '<iframe allowtransparency="true" frameborder="0" id="admin_bar_iframe" src="' + n + '" width="30px">{}</iframe>';
        $("body").prepend(i),
        $("#admin_bar_iframe").on("load", function() {
            t() || $("html").css("padding-top", "50px")
        })
    }
}(),
function() {
    "object" == typeof Kajabi && isFramed() && Kajabi.theme.previewThemeId && Kajabi.theme.editor && new ThemeEditorBindings
}(),
function() {
    "object" == typeof Kajabi && isFramed() && Kajabi.theme.editor && document.addEventListener("play", function() {
        if (!$(event.target).parents().hasClass("backgroundVideo")) {
            var t = $(event.target);
            t.get(0).pause()
        }
    }, !0)
}(),
$(function() {
    var t = $("[data-mailgun-validation]");
    t.mailgun_validator({
        api_key: t.data("mailgun-public-api-key"),
        success: function(t, e) {
            var n = $(e.target),
                i = n.parsley();
            if (n.siblings(".mailgun-validation").remove(), i.isValid() && !t.is_valid) {
                var r = "Please double check your email address.";
                t.did_you_mean && (r = "Did you mean " + t.did_you_mean + "?"),
                n.after($('<p class="mailgun-validation">').text(r))
            }
        },
        error: function() {}
    }).keyup(function() {
        var t = $(this);
        "" == t.val() && t.siblings(".mailgun-validation").remove()
    })
}),
App.DropdownSearch = function() {
    this.filterKey = null,
    this.filterQuery = null
},
App.DropdownSearch.prototype = {
    formSubmit: function() {
        var t = {};
        t[this.filterKey] = this.filterQuery,
        location.search = $.param(t)
    }
},
!function(t) {
    var e;
    if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
        var n = window.Cookies,
            i = window.Cookies = t();
        i.noConflict = function() {
            return window.Cookies = n, i
        }
    }
}(function() {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                e[i] = n[i]
        }
        return e
    }
    function e(t) {
        return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    function n(i) {
        function r() {}
        function o(e, n, o) {
            if ("undefined" != typeof document) {
                o = t({
                    path: "/"
                }, r.defaults, o),
                "number" == typeof o.expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                o.expires = o.expires ? o.expires.toUTCString() : "";
                try {
                    var s = JSON.stringify(n);
                    /^[\{\[]/.test(s) && (n = s)
                } catch (a) {}
                n = i.write ? i.write(n, e) : encodeURIComponent(n + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                e = encodeURIComponent(e + "").replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var l = "";
                for (var u in o)
                    o[u] && (l += "; " + u, !0 !== o[u] && (l += "=" + o[u].split(";")[0]));
                return document.cookie = e + "=" + n + l
            }
        }
        function s(t, n) {
            if ("undefined" != typeof document) {
                for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
                    var a = o[s].split("="),
                        l = a.slice(1).join("=");
                    n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                    try {
                        var u = e(a[0]);
                        if (l = (i.read || i)(l, u) || e(l), n)
                            try {
                                l = JSON.parse(l)
                            } catch (c) {}
                        if (r[u] = l, t === u)
                            break
                    } catch (c) {}
                }
                return t ? r[t] : r
            }
        }
        return r.set = o, r.get = function(t) {
            return s(t, !1)
        }, r.getJSON = function(t) {
            return s(t, !0)
        }, r.remove = function(e, n) {
            o(e, "", t(n, {
                expires: -1
            }))
        }, r.defaults = {}, r.withConverter = n, r
    }
    return n(function() {})
}),
window.initKajabiRecaptcha = function(t, e, n) {
    var i = document.getElementById(t),
        r = i.form.querySelector("[type=submit]"),
        o = grecaptcha.render(e, {
            sitekey: n,
            size: "invisible",
            callback: function(t) {
                r && (r.disabled = !0),
                i.value = t,
                i.form.submit()
            }
        }),
        s = function(t) {
            return r && (r.disabled = !1), grecaptcha.execute(o), t.preventDefault(), !1
        };
    window.jQuery ? window.jQuery(i.form).submit(s) : i.form.addEventListener("submit", s)
};
var _kajabi = window._kajabi || {};
_kajabi.embedModal = function(t, e, n) {
    function i() {
        (void 0 === Cookies.get(n) || 0 === e) && (s.style.display = "block", Cookies.set(n, "true", {
            expires: e
        }))
    }
    function r() {
        s.style.display = "none"
    }
    function o() {
        Cookies.set(n, "true", {
            expires: 30
        })
    }
    var s = document.querySelector(".kajabi-modal"),
        a = document.querySelector(".kajabi-modal__close"),
        l = document.querySelector(".kajabi-form--form");
    window.setTimeout(i, t),
    a.addEventListener("click", r),
    l.addEventListener("submit", o)
},
function(t) {
    var e = t(document);
    e.delegate("button[data-submit]", "click", function() {
        t(t(this).data("submit")).submit()
    }),
    e.delegate("form", "submit", function() {
        if (!t(this).data("remote")) {
            var e = t(this).find("input[type='submit']:last"),
                n = e.data("disable-with");
            n && t("button[data-action='save']").attr("disabled", !0).text(n)
        }
    })
}(jQuery),
$(function() {
    $("[data-kajabi-email-validation]").on("blur", function() {
        $.ajax({
            url: "checkout/validate_email",
            data: {
                email: this.value
            },
            success: function() {
                $(".checkout-email-validation-error").show()
            },
            error: function() {
                $(".checkout-email-validation-error").hide()
            }
        })
    })
}),
function() {
    function t() {
        var t,
            i,
            r,
            o,
            s = $("input[type=radio][data-radio-toggle]");
        for (t = 0, i = s.length; i > t; t += 1)
            o = $(s[t]),
            r = o.prop("name"),
            (n[r] = n[r] || []).push({
                value: o.val(),
                target: o.data("radioToggle")
            });
        for (r in n)
            $('input[type=radio][name="' + r + '"]').click(e)
    }
    function e() {
        var t,
            e,
            i = $(this),
            r = n[i.prop("name")],
            o = i.val();
        for (t = 0, e = r.length; e > t; t += 1)
            $(r[t].target)[o !== r[t].value ? "removeClass" : "addClass"]("in")
    }
    var n = {};
    t()
}(),
function(t) {
    if (!t.hasInitialised) {
        var e = {
            escapeRegExp: function(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            hasClass: function(t, e) {
                var n = " ";
                return 1 === t.nodeType && (n + t.className + n).replace(/[\n\t]/g, n).indexOf(n + e + n) >= 0
            },
            addClass: function(t, e) {
                t.className += " " + e
            },
            removeClass: function(t, e) {
                var n = new RegExp("\\b" + this.escapeRegExp(e) + "\\b");
                t.className = t.className.replace(n, "")
            },
            interpolateString: function(t, e) {
                var n = /{{([a-z][a-z0-9\-_]*)}}/gi;
                return t.replace(n, function() {
                    return e(arguments[1]) || ""
                })
            },
            getCookie: function(t) {
                var e = "; " + document.cookie,
                    n = e.split("; " + t + "=");
                return 2 != n.length ? void 0 : n.pop().split(";").shift()
            },
            setCookie: function(t, e, n, i, r) {
                var o = new Date;
                o.setDate(o.getDate() + (n || 365));
                var s = [t + "=" + e, "expires=" + o.toUTCString(), "path=" + (r || "/")];
                i && s.push("domain=" + i),
                document.cookie = s.join(";")
            },
            deepExtend: function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (n in t && this.isPlainObject(t[n]) && this.isPlainObject(e[n]) ? this.deepExtend(t[n], e[n]) : t[n] = e[n]);
                return t
            },
            throttle: function(t, e) {
                var n = !1;
                return function() {
                    n || (t.apply(this, arguments), n = !0, setTimeout(function() {
                        n = !1
                    }, e))
                }
            },
            hash: function(t) {
                var e,
                    n,
                    i,
                    r = 0;
                if (0 === t.length)
                    return r;
                for (e = 0, i = t.length; i > e; ++e)
                    n = t.charCodeAt(e),
                    r = (r << 5) - r + n,
                    r |= 0;
                return r
            },
            normaliseHex: function(t) {
                return "#" == t[0] && (t = t.substr(1)), 3 == t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t
            },
            getContrast: function(t) {
                t = this.normaliseHex(t);
                var e = parseInt(t.substr(0, 2), 16),
                    n = parseInt(t.substr(2, 2), 16),
                    i = parseInt(t.substr(4, 2), 16),
                    r = (299 * e + 587 * n + 114 * i) / 1e3;
                return r >= 128 ? "#000" : "#fff"
            },
            getLuminance: function(t) {
                var e = parseInt(this.normaliseHex(t), 16),
                    n = 38,
                    i = (e >> 16) + n,
                    r = (e >> 8 & 255) + n,
                    o = (255 & e) + n,
                    s = (16777216 + 65536 * (255 > i ? 1 > i ? 0 : i : 255) + 256 * (255 > r ? 1 > r ? 0 : r : 255) + (255 > o ? 1 > o ? 0 : o : 255)).toString(16).slice(1);
                return "#" + s
            },
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            },
            isPlainObject: function(t) {
                return "object" == typeof t && null !== t && t.constructor == Object
            }
        };
        t.status = {
            deny: "deny",
            allow: "allow",
            dismiss: "dismiss"
        },
        t.transitionEnd = function() {
            var t = document.createElement("div"),
                e = {
                    t: "transitionend",
                    OT: "oTransitionEnd",
                    msT: "MSTransitionEnd",
                    MozT: "transitionend",
                    WebkitT: "webkitTransitionEnd"
                };
            for (var n in e)
                if (e.hasOwnProperty(n) && "undefined" != typeof t.style[n + "ransition"])
                    return e[n];
            return ""
        }(),
        t.hasTransition = !!t.transitionEnd;
        var n = Object.keys(t.status).map(e.escapeRegExp);
        t.customStyles = {},
        t.Popup = function() {
            function i() {
                this.initialise.apply(this, arguments)
            }
            function r(t) {
                this.openingTimeout = null,
                e.removeClass(t, "cc-invisible")
            }
            function o(e) {
                e.style.display = "none",
                e.removeEventListener(t.transitionEnd, this.afterTransition),
                this.afterTransition = null
            }
            function s() {
                var e = this.options.onInitialise.bind(this);
                if (!window.navigator.cookieEnabled)
                    return e(t.status.deny), !0;
                if (window.CookiesOK || window.navigator.CookiesOK)
                    return e(t.status.allow), !0;
                var n = Object.keys(t.status),
                    i = this.getStatus(),
                    r = n.indexOf(i) >= 0;
                return r && e(i), r
            }
            function a() {
                var t = this.options.position.split("-"),
                    e = [];
                return t.forEach(function(t) {
                    e.push("cc-" + t)
                }), e
            }
            function l() {
                var t = this.options,
                    n = "top" == t.position || "bottom" == t.position ? "banner" : "floating";
                e.isMobile() && (n = "floating");
                var i = ["cc-" + n, "cc-type-" + t.type, "cc-theme-" + t.theme];
                t["static"] && i.push("cc-static"),
                i.push.apply(i, a.call(this));
                h.call(this, this.options.palette);
                return this.customStyleSelector && i.push(this.customStyleSelector), i
            }
            function u() {
                var t = {},
                    n = this.options;
                n.showLink || (n.elements.link = "", n.elements.messagelink = n.elements.message),
                Object.keys(n.elements).forEach(function(i) {
                    t[i] = e.interpolateString(n.elements[i], function(t) {
                        var e = n.content[t];
                        return t && "string" == typeof e && e.length ? e : ""
                    })
                });
                var i = n.compliance[n.type];
                i || (i = n.compliance.info),
                t.compliance = e.interpolateString(i, function(e) {
                    return t[e]
                });
                var r = n.layouts[n.layout];
                return r || (r = n.layouts.basic), e.interpolateString(r, function(e) {
                    return t[e]
                })
            }
            function c(n) {
                var i = this.options,
                    r = document.createElement("div"),
                    o = i.container && 1 === i.container.nodeType ? i.container : document.body;
                r.innerHTML = n;
                var s = r.children[0];
                return s.style.display = "none", e.hasClass(s, "cc-window") && t.hasTransition && e.addClass(s, "cc-invisible"), this.onButtonClick = d.bind(this), s.addEventListener("click", this.onButtonClick), i.autoAttach && (o.firstChild ? o.insertBefore(s, o.firstChild) : o.appendChild(s)), s
            }
            function d(i) {
                var r = i.target;
                if (e.hasClass(r, "cc-btn")) {
                    var o = r.className.match(new RegExp("\\bcc-(" + n.join("|") + ")\\b")),
                        s = o && o[1] || !1;
                    s && (this.setStatus(s), this.close(!0))
                }
                e.hasClass(r, "cc-close") && (this.setStatus(t.status.dismiss), this.close(!0)),
                e.hasClass(r, "cc-revoke") && this.revokeChoice()
            }
            function h(t) {
                var n = e.hash(JSON.stringify(t)),
                    i = "cc-color-override-" + n,
                    r = e.isPlainObject(t);
                return this.customStyleSelector = r ? i : null, r && f(n, t, "." + i), r
            }
            function f(n, i, r) {
                if (t.customStyles[n])
                    return void ++t.customStyles[n].references;
                var o = {},
                    s = i.popup,
                    a = i.button,
                    l = i.highlight;
                s && (s.text = s.text ? s.text : e.getContrast(s.background), s.link = s.link ? s.link : s.text, o[r + ".cc-window"] = ["color: " + s.text, "background-color: " + s.background], o[r + ".cc-revoke"] = ["color: " + s.text, "background-color: " + s.background], o[r + " .cc-link," + r + " .cc-link:active," + r + " .cc-link:visited"] = ["color: " + s.link], a && (a.text = a.text ? a.text : e.getContrast(a.background), a.border = a.border ? a.border : "transparent", o[r + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background], "transparent" != a.background && (o[r + " .cc-btn:hover, " + r + " .cc-btn:focus"] = ["background-color: " + p(a.background)]), l ? (l.text = l.text ? l.text : e.getContrast(l.background), l.border = l.border ? l.border : "transparent", o[r + " .cc-highlight .cc-btn:first-child"] = ["color: " + l.text, "border-color: " + l.border, "background-color: " + l.background]) : o[r + " .cc-highlight .cc-btn:first-child"] = ["color: " + s.text]));
                var u = document.createElement("style");
                document.head.appendChild(u),
                t.customStyles[n] = {
                    references: 1,
                    element: u.sheet
                };
                var c = -1;
                for (var d in o)
                    o.hasOwnProperty(d) && u.sheet.insertRule(d + "{" + o[d].join(";") + "}", ++c)
            }
            function p(t) {
                return t = e.normaliseHex(t), "000000" == t ? "#222" : e.getLuminance(t)
            }
            function m(n) {
                if (e.isPlainObject(n)) {
                    var i = e.hash(JSON.stringify(n)),
                        r = t.customStyles[i];
                    if (r && !--r.references) {
                        var o = r.element.ownerNode;
                        o && o.parentNode && o.parentNode.removeChild(o),
                        t.customStyles[i] = null
                    }
                }
            }
            function g(t, e) {
                for (var n = 0, i = t.length; i > n; ++n) {
                    var r = t[n];
                    if (r instanceof RegExp && r.test(e) || "string" == typeof r && r.length && r === e)
                        return !0
                }
                return !1
            }
            function v() {
                var e = this.setStatus.bind(this),
                    n = this.options.dismissOnTimeout;
                "number" == typeof n && n >= 0 && (this.dismissTimeout = window.setTimeout(function() {
                    e(t.status.dismiss)
                }, Math.floor(n)));
                var i = this.options.dismissOnScroll;
                if ("number" == typeof i && i >= 0) {
                    var r = function() {
                        window.pageYOffset > Math.floor(i) && (e(t.status.dismiss), window.removeEventListener("scroll", r), this.onWindowScroll = null)
                    };
                    this.onWindowScroll = r,
                    window.addEventListener("scroll", r)
                }
            }
            function y() {
                if ("info" != this.options.type && (this.options.revokable = !0), e.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
                    var t = a.call(this);
                    this.options.animateRevokable && t.push("cc-animate"),
                    this.customStyleSelector && t.push(this.customStyleSelector);
                    var n = this.options.revokeBtn.replace("{{classes}}", t.join(" "));
                    this.revokeBtn = c.call(this, n);
                    var i = this.revokeBtn;
                    if (this.options.animateRevokable) {
                        var r = e.throttle(function(t) {
                            var n = !1,
                                r = 20,
                                o = window.innerHeight - 20;
                            e.hasClass(i, "cc-top") && t.clientY < r && (n = !0),
                            e.hasClass(i, "cc-bottom") && t.clientY > o && (n = !0),
                            n ? e.hasClass(i, "cc-active") || e.addClass(i, "cc-active") : e.hasClass(i, "cc-active") && e.removeClass(i, "cc-active")
                        }, 200);
                        this.onMouseMove = r,
                        window.addEventListener("mousemove", r)
                    }
                }
            }
            var b = {
                enabled: !0,
                container: null,
                cookie: {
                    name: "cookieconsent_status",
                    path: "/",
                    domain: "",
                    expiryDays: 365
                },
                onPopupOpen: function() {},
                onPopupClose: function() {},
                onInitialise: function() {},
                onStatusChange: function() {},
                onRevokeChoice: function() {},
                content: {
                    header: "Cookies used on the website!",
                    message: "This website uses cookies to ensure you get the best experience on our website.",
                    dismiss: "Got it!",
                    allow: "Allow cookies",
                    deny: "Decline",
                    link: "Learn more",
                    href: "http://cookiesandyou.com",
                    close: "&#x274c;"
                },
                elements: {
                    header: '<span class="cc-header">{{header}}</span>&nbsp;',
                    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="_blank">{{link}}</a></span>',
                    dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                    allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                    deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
                    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                },
                window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
                revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
                compliance: {
                    info: '<div class="cc-compliance">{{dismiss}}</div>',
                    "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
                    "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
                },
                type: "info",
                layouts: {
                    basic: "{{messagelink}}{{compliance}}",
                    "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                    "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                },
                layout: "basic",
                position: "bottom",
                theme: "block",
                "static": !1,
                palette: null,
                revokable: !1,
                animateRevokable: !0,
                showLink: !0,
                dismissOnScroll: !1,
                dismissOnTimeout: !1,
                autoOpen: !0,
                autoAttach: !0,
                whitelistPage: [],
                blacklistPage: [],
                overrideHTML: null
            };
            return i.prototype.initialise = function(t) {
                this.options && this.destroy(),
                e.deepExtend(this.options = {}, b),
                e.isPlainObject(t) && e.deepExtend(this.options, t),
                s.call(this) && (this.options.enabled = !1),
                g(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1),
                g(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                var n = this.options.window.replace("{{classes}}", l.call(this).join(" ")).replace("{{children}}", u.call(this)),
                    i = this.options.overrideHTML;
                if ("string" == typeof i && i.length && (n = i), this.options["static"]) {
                    var r = c.call(this, '<div class="cc-grower">' + n + "</div>");
                    r.style.display = "",
                    this.element = r.firstChild,
                    this.element.style.display = "none",
                    e.addClass(this.element, "cc-invisible")
                } else
                    this.element = c.call(this, n);
                v.call(this),
                y.call(this),
                this.options.autoOpen && this.autoOpen()
            }, i.prototype.destroy = function() {
                this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null),
                this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null),
                this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null),
                this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null),
                this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
                this.element = null,
                this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn),
                this.revokeBtn = null,
                m(this.options.palette),
                this.options = null
            }, i.prototype.open = function() {
                return this.element ? (this.isOpen() || (t.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this) : void 0
            }, i.prototype.close = function(e) {
                return this.element ? (this.isOpen() && (t.hasTransition ? this.fadeOut() : this.element.style.display = "none", e && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this) : void 0
            }, i.prototype.fadeIn = function() {
                var n = this.element;
                if (t.hasTransition && n && (this.afterTransition && o.call(this, n), e.hasClass(n, "cc-invisible"))) {
                    if (n.style.display = "", this.options["static"]) {
                        var i = this.element.clientHeight;
                        this.element.parentNode.style.maxHeight = i + "px"
                    }
                    var s = 20;
                    this.openingTimeout = setTimeout(r.bind(this, n), s)
                }
            }, i.prototype.fadeOut = function() {
                var n = this.element;
                t.hasTransition && n && (this.openingTimeout && (clearTimeout(this.openingTimeout), r.bind(this, n)), e.hasClass(n, "cc-invisible") || (this.options["static"] && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = o.bind(this, n), n.addEventListener(t.transitionEnd, this.afterTransition), e.addClass(n, "cc-invisible")))
            }, i.prototype.isOpen = function() {
                return this.element && "" == this.element.style.display && (t.hasTransition ? !e.hasClass(this.element, "cc-invisible") : !0)
            }, i.prototype.toggleRevokeButton = function(t) {
                this.revokeBtn && (this.revokeBtn.style.display = t ? "" : "none")
            }, i.prototype.revokeChoice = function(t) {
                this.options.enabled = !0,
                this.clearStatus(),
                this.options.onRevokeChoice.call(this),
                t || this.autoOpen()
            }, i.prototype.hasAnswered = function() {
                return Object.keys(t.status).indexOf(this.getStatus()) >= 0
            }, i.prototype.hasConsented = function() {
                var e = this.getStatus();
                return e == t.status.allow || e == t.status.dismiss
            }, i.prototype.autoOpen = function() {
                !this.hasAnswered() && this.options.enabled && this.open()
            }, i.prototype.setStatus = function(n) {
                var i = this.options.cookie,
                    r = e.getCookie(i.name),
                    o = Object.keys(t.status).indexOf(r) >= 0;
                Object.keys(t.status).indexOf(n) >= 0 ? (e.setCookie(i.name, n, i.expiryDays, i.domain, i.path), this.options.onStatusChange.call(this, n, o)) : this.clearStatus()
            }, i.prototype.getStatus = function() {
                return e.getCookie(this.options.cookie.name)
            }, i.prototype.clearStatus = function() {
                var t = this.options.cookie;
                e.setCookie(t.name, "", -1, t.domain, t.path)
            }, i
        }(),
        t.Location = function() {
            function t(t) {
                e.deepExtend(this.options = {}, o),
                e.isPlainObject(t) && e.deepExtend(this.options, t),
                this.currentServiceIndex = -1
            }
            function n(t, e, n) {
                var i,
                    r = document.createElement("script");
                r.type = "text/" + (t.type || "javascript"),
                r.src = t.src || t,
                r.async = !1,
                r.onreadystatechange = r.onload = function() {
                    var t = r.readyState;
                    clearTimeout(i),
                    e.done || t && !/loaded|complete/.test(t) || (e.done = !0, e(), r.onreadystatechange = r.onload = null)
                },
                document.body.appendChild(r),
                i = setTimeout(function() {
                    e.done = !0,
                    e(),
                    r.onreadystatechange = r.onload = null
                }, n)
            }
            function i(t, e, n, i, r) {
                var o = new (window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                if (o.open(i ? "POST" : "GET", t, 1), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(r))
                    for (var s = 0, a = r.length; a > s; ++s) {
                        var l = r[s].split(":", 2);
                        o.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
                    }
                "function" == typeof e && (o.onreadystatechange = function() {
                    o.readyState > 3 && e(o)
                }),
                o.send(i)
            }
            function r(t) {
                return new Error("Error [" + (t.code || "UNKNOWN") + "]: " + t.error)
            }
            var o = {
                timeout: 5e3,
                services: ["freegeoip", "ipinfo", "maxmind"],
                serviceDefinitions: {
                    freegeoip: function() {
                        return {
                            url: "//freegeoip.net/json/?callback={callback}",
                            isScript: !0,
                            callback: function(t, e) {
                                try {
                                    var n = JSON.parse(e);
                                    return n.error ? r(n) : {
                                        code: n.country_code
                                    }
                                } catch (i) {
                                    return r({
                                        error: "Invalid response (" + i + ")"
                                    })
                                }
                            }
                        }
                    },
                    ipinfo: function() {
                        return {
                            url: "//ipinfo.io",
                            headers: ["Accept: application/json"],
                            callback: function(t, e) {
                                try {
                                    var n = JSON.parse(e);
                                    return n.error ? r(n) : {
                                        code: n.country
                                    }
                                } catch (i) {
                                    return r({
                                        error: "Invalid response (" + i + ")"
                                    })
                                }
                            }
                        }
                    },
                    ipinfodb: function() {
                        return {
                            url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                            isScript: !0,
                            callback: function(t, e) {
                                try {
                                    var n = JSON.parse(e);
                                    return "ERROR" == n.statusCode ? r({
                                        error: n.statusMessage
                                    }) : {
                                        code: n.countryCode
                                    }
                                } catch (i) {
                                    return r({
                                        error: "Invalid response (" + i + ")"
                                    })
                                }
                            }
                        }
                    },
                    maxmind: function() {
                        return {
                            url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                            isScript: !0,
                            callback: function(t) {
                                return window.geoip2 ? void geoip2.country(function(e) {
                                    try {
                                        t({
                                            code: e.country.iso_code
                                        })
                                    } catch (n) {
                                        t(r(n))
                                    }
                                }, function(e) {
                                    t(r(e))
                                }) : void t(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                            }
                        }
                    }
                }
            };
            return t.prototype.getNextService = function() {
                var t;
                do t = this.getServiceByIdx(++this.currentServiceIndex);
                while (this.currentServiceIndex < this.options.services.length && !t);
                return t
            }, t.prototype.getServiceByIdx = function(t) {
                var n = this.options.services[t];
                if ("function" == typeof n) {
                    var i = n();
                    return i.name && e.deepExtend(i, this.options.serviceDefinitions[i.name](i)), i
                }
                return "string" == typeof n ? this.options.serviceDefinitions[n]() : e.isPlainObject(n) ? this.options.serviceDefinitions[n.name](n) : null
            }, t.prototype.locate = function(t, e) {
                var n = this.getNextService();
                return n ? (this.callbackComplete = t, this.callbackError = e, void this.runService(n, this.runNextServiceOnError.bind(this))) : void e(new Error("No services to run"))
            }, t.prototype.setupUrl = function(t) {
                var e = this.getCurrentServiceOpts();
                return t.url.replace(/\{(.*?)\}/g, function(n, i) {
                    if ("callback" === i) {
                        var r = "callback" + Date.now();
                        return window[r] = function(e) {
                            t.__JSONP_DATA = JSON.stringify(e)
                        }, r
                    }
                    return i in e.interpolateUrl ? e.interpolateUrl[i] : void 0
                })
            }, t.prototype.runService = function(t, e) {
                var r = this;
                if (t && t.url && t.callback) {
                    var o = t.isScript ? n : i,
                        s = this.setupUrl(t);
                    o(s, function(n) {
                        var i = n ? n.responseText : "";
                        t.__JSONP_DATA && (i = t.__JSONP_DATA, delete t.__JSONP_DATA),
                        r.runServiceCallback.call(r, e, t, i)
                    }, this.options.timeout, t.data, t.headers)
                }
            }, t.prototype.runServiceCallback = function(t, e, n) {
                var i = this,
                    r = function(e) {
                        o || i.onServiceResult.call(i, t, e)
                    },
                    o = e.callback(r, n);
                o && this.onServiceResult.call(this, t, o)
            }, t.prototype.onServiceResult = function(t, e) {
                e instanceof Error || e && e.error ? t.call(this, e, null) : t.call(this, null, e)
            }, t.prototype.runNextServiceOnError = function(t, e) {
                if (t) {
                    this.logError(t);
                    var n = this.getNextService();
                    n ? this.runService(n, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                } else
                    this.completeService.call(this, this.callbackComplete, e)
            }, t.prototype.getCurrentServiceOpts = function() {
                var t = this.options.services[this.currentServiceIndex];
                return "string" == typeof t ? {
                    name: t
                } : "function" == typeof t ? t() : e.isPlainObject(t) ? t : {}
            }, t.prototype.completeService = function(t, e) {
                this.currentServiceIndex = -1,
                t && t(e)
            }, t.prototype.logError = function(t) {
                var e = this.currentServiceIndex,
                    n = this.getServiceByIdx(e);
                console.error("The service[" + e + "] (" + n.url + ") responded with the following error", t)
            }, t
        }(),
        t.Law = function() {
            function t() {
                this.initialise.apply(this, arguments)
            }
            var n = {
                regionalLaw: !0,
                hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
                revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                explicitAction: ["HR", "IT", "ES"]
            };
            return t.prototype.initialise = function(t) {
                e.deepExtend(this.options = {}, n),
                e.isPlainObject(t) && e.deepExtend(this.options, t)
            }, t.prototype.get = function(t) {
                var e = this.options;
                return {
                    hasLaw: e.hasLaw.indexOf(t) >= 0,
                    revokable: e.revokable.indexOf(t) >= 0,
                    explicitAction: e.explicitAction.indexOf(t) >= 0
                }
            }, t.prototype.applyLaw = function(t, e) {
                var n = this.get(e);
                return n.hasLaw || (t.enabled = !1), this.options.regionalLaw && (n.revokable && (t.revokable = !0), n.explicitAction && (t.dismissOnScroll = !1, t.dismissOnTimeout = !1)), t
            }, t
        }(),
        t.initialise = function(e, n, i) {
            var r = new t.Law(e.law);
            n || (n = function() {}),
            i || (i = function() {}),
            t.getCountryCode(e, function(i) {
                delete e.law,
                delete e.location,
                i.code && (e = r.applyLaw(e, i.code)),
                n(new t.Popup(e))
            }, function(n) {
                delete e.law,
                delete e.location,
                i(n, new t.Popup(e))
            })
        },
        t.getCountryCode = function(e, n, i) {
            if (e.law && e.law.countryCode)
                return void n({
                    code: e.law.countryCode
                });
            if (e.location) {
                var r = new t.Location(e.location);
                return void r.locate(function(t) {
                    n(t || {})
                }, i)
            }
            n({})
        },
        t.utils = e,
        t.hasInitialised = !0,
        window.cookieconsent = t
    }
}(window.cookieconsent || {}),
App.OfferCheckoutEditorBindings = function() {
    $(window).on("message:reload", function() {
        window.location.reload()
    }),
    $(window).on("click", function(t) {
        t.preventDefault()
    }),
    $(document).on({
        mouseenter: this.onMouseEnter.bind(this),
        mouseleave: this.onMouseLeave.bind(this),
        click: this.onClick.bind(this)
    }, "[kjb-settings-id]"),
    $("body").append("<div id='editor-overlay'><div class='editor-overlay-button'>Edit</div></div>")
},
App.OfferCheckoutEditorBindings.prototype = {
    postMessage: function(t, e) {
        e = e || {},
        e.type = t,
        window.parent.postMessage(e, "*")
    },
    onMouseEnter: function(t) {
        var e = $(t.currentTarget);
        $("#editor-overlay").css({
            width: e.outerWidth() + 16,
            height: e.outerHeight() + 16,
            top: e.offset().top - 8,
            left: e.offset().left - 8
        }).show()
    },
    onMouseLeave: function() {
        $("#editor-overlay").hide()
    },
    onClick: function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        this.postMessage("editSetting", {
            setting: t.currentTarget.getAttribute("kjb-settings-id")
        })
    }
},
window.onePassword = {
    disable: function() {
        this.set("no")
    },
    enable: function() {
        this.set("yes")
    },
    set: function(t) {
        $('meta[name="com.agilebits.onepassword.autosave"]').length ? $('meta[name="com.agilebits.onepassword.autosave"]').attr("content", t) : $("head").append('<meta name="com.agilebits.onepassword.autosave" content="' + t + '" />')
    }
},
App.PaypalButton = function(t, e) {
    this.$container = $(t),
    this.$form = this.$container.closest("form"),
    this.hasCheckoutAnalytics = null !== document.querySelector(".offer-checkout--analytics"),
    this.eventBus = $(document),
    this.serviceAgreementValid = this.getServiceAgreementValid(),
    this.opts = this.buildOpts(e),
    this.extraContactInfoFields = new App.ExtraContactInfoFields,
    this.init()
},
App.PaypalButton.prototype = {
    buildAddressFormData: function() {
        var t = {};
        return _(this.extraContactInfoFields.data()).each(function(e, n) {
            var i = "address_info[" + n + "]";
            t[i] = e
        }), t
    },
    buildOpts: function(t) {
        return $.extend({
            url: null,
            env: "sandbox"
        }, t)
    },
    formIsValid: function() {
        return this.$form.parsley().isValid()
    },
    formIsSubmittableToPaypal: function() {
        return this.serviceAgreementValid && this.formIsValid()
    },
    getServiceAgreementValid: function() {
        var t = Twine.context(this.$container[0]),
            e = t.checkoutPaymentStep;
        return e ? e.serviceAgreementValid : !0
    },
    init: function() {
        paypal.Button.render({
            style: {
                size: "responsive",
                shape: "rect"
            },
            validate: this.validateHandler.bind(this),
            env: this.opts.env,
            payment: this.paymentHandler.bind(this),
            onAuthorize: this.onAuthorizeHandler.bind(this),
            onClick: this.onClickHandler.bind(this)
        }, this.$container[0])
    },
    onAuthorizeHandler: function(t) {
        this.hasCheckoutAnalytics && this.opts.analytics_options && ktag("event", "begin_checkout", this.opts.analytics_options),
        this.$container.css("pointer-events", "none").css("opacity", "0.5"),
        this.$form.find("input[data-paypal-token]").val(t.paymentToken),
        this.$form.find("input[data-paypal-payer-id]").val(t.payerID),
        this.$form.find("input[data-paypal-payment-id]").val(t.paymentID),
        this.$form.submit()
    },
    onClickHandler: function() {
        this.hasCheckoutAnalytics && this.opts.analytics_options && ktag("event", "add_payment_info", this.opts.analytics_options),
        this.formIsSubmittableToPaypal() || this.$form.submit()
    },
    paymentHandler: function() {
        var t = this.$form.find("input[name='coupon_code']").val(),
            e = {
                coupon_code: t
            };
        return _.extend(e, this.buildAddressFormData()), paypal.request.post(this.opts.url, e).then(function(t) {
            return t.id || t.token
        })
    },
    toggleButton: function(t) {
        return this.formIsSubmittableToPaypal() ? t.enable() : t.disable()
    },
    validateHandler: function(t) {
        this.toggleButton(t),
        this.$form.on("change keyup", function() {
            this.toggleButton(t)
        }.bind(this)),
        this.eventBus.on("kjb:checkoutOfferServiceAgreementUpdated", function(e, n) {
            this.serviceAgreementValid = n,
            this.toggleButton(t)
        }.bind(this))
    }
},
App.StripeElementsForm = function(t, e, n) {
    function i(t) {
        b.toggleClass(x, t)
    }
    function r() {
        !F && S && T && (F = !0, ktag("event", "add_payment_info", T))
    }
    function o() {
        t.attr("data-return-to") && window.location.replace(t.attr("data-return-to"))
    }
    function s(e) {
        if (w.length) {
            var n = $(w).find("input[type='checkbox']");
            w.hide()
        }
        if (e.error)
            i(!0),
            l(e),
            u(e),
            o();
        else if (e.setupIntent) {
            i(!1);
            var s = e.setupIntent.payment_method;
            E.paymentMethodField.val(s),
            t[0].submit()
        } else if (e.paymentMethod) {
            i(!1);
            var s = e.paymentMethod.id;
            E.paymentMethodField.val(s),
            t[0].submit()
        } else
            e.complete && (i(!1), m(n), w.show(), r(event))
    }
    function a(e, n) {
        if (e.error)
            "invalid_request_error" === e.error.type && "payment_intent_authentication_failure" === e.error.code ? n ? f() : p() : s(e);
        else if (e.paymentIntent) {
            i(!1);
            var r = e.paymentIntent.id;
            E.paymentIntentField.val(r),
            t[0].submit()
        } else
            s(e)
    }
    function l(e) {
        App.flashError({
            text: e.error.message
        }),
        setTimeout(function() {
            $.rails.enableFormElements(t)
        }, 100)
    }
    function u(e) {
        var n;
        t.find("input.email")[0] && (n = t.find("input.email").val());
        var i = {
            stripe_elements_error_report: {
                email: n,
                stripe_result: e
            }
        };
        $.post("/stripe_elements_error_reports.json", i)
    }
    function c(t) {
        t.brand !== v && (b.trigger("card-brand-change", t.brand), v = t.brand)
    }
    function d(t, e) {
        "manual" === t.confirmation_method ? C.handleCardAction(D).then(function(t) {
            a(t, e)
        }) : C.handleCardPayment(D).then(function(t) {
            a(t, e)
        })
    }
    function h(t, e) {
        C.retrievePaymentIntent(t).then(function(t) {
            t.paymentIntent && "requires_action" === t.paymentIntent.status ? d(t.paymentIntent, e) : t.paymentIntent && "requires_confirmation" === t.paymentIntent.status ? f() : s(t)
        })
    }
    function f() {
        $.ajax({
            url: t.attr("action"),
            method: "POST",
            dataType: "json",
            data: t.serialize()
        }).done(function(t) {
            t.paymentIntent && "requires_action" === t.paymentIntent.status ? d(t.paymentIntent, !1) : a(t, !1)
        })
    }
    function p() {
        $.ajax({
            url: t.attr("action").replace("confirm", "cancel"),
            method: "POST",
            dataType: "json",
            data: t.serialize()
        }).done(function(t) {
            t.paymentIntent && "canceled" === t.paymentIntent.status ? o() : a(t, !1)
        })
    }
    function m(t) {
        w.length && t.prop("checked", _)
    }
    var g,
        v,
        y = "#card-element",
        b = $(y),
        w = $("#manage_payment_method"),
        _ = w.prop("checked"),
        x = "card-element-has-error",
        C = Stripe(e, {
            stripeAccount: n.stripeAccount
        }),
        k = C.elements({
            locale: n.locale,
            fonts: [{
                cssSrc: "https://fonts.googleapis.com/css?family=Open+Sans:400,400i"
            }]
        }),
        S = null !== document.querySelector(".offer-checkout--analytics"),
        T = n.analyticsOptions,
        E = $.extend({
            color: "#151515",
            colorDanger: "#b94a48",
            fontSize: "14px",
            paymentMethodField: t.find("[data-stripe-payment-method]").first(),
            paymentIntentField: t.find("[data-stripe-payment-intent]").first(),
            lineHeight: "36px",
            placeholderColor: "#999999"
        }, n),
        A = "true" === E.hidePostalCode,
        F = !1;
    if (b.length) {
        var g = k.create("card", {
            hidePostalCode: A,
            iconStyle: "solid",
            style: {
                base: {
                    iconColor: E.placeholderColor,
                    color: E.color,
                    lineHeight: E.lineHeight,
                    fontSize: E.fontSize,
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: "normal",
                    fontSmoothing: "antialiased",
                    "::placeholder": {
                        fontFamily: '"Open Sans", sans-serif',
                        color: E.placeholderColor,
                        iconColor: E.placeholderColor
                    }
                },
                invalid: {
                    color: E.colorDanger,
                    iconColor: E.colorDanger
                }
            }
        });
        if (g.mount(y), null !== document.querySelector(".offer-checkout--preview") && null !== document.querySelector(".offer-checkout-next-gen"))
            return;
        g.on("change", function(t) {
            b.trigger("card-change", t),
            s(t),
            c(t)
        }),
        b.on("card-reset", function() {
            i(!1),
            g.clear(),
            g.focus()
        }),
        b.on("card-error", function() {
            i(!0)
        })
    }
    if (t.on("submit", function(e) {
        if (!window.kjbStripeElementSkip) {
            e.preventDefault(),
            $.rails.disableFormElements(t);
            var i = {};
            t.find('input[data-stripe="name"]')[0] && (i.name = t.find('input[data-stripe="name"]').val()),
            t.find('input[data-stripe="address_zip"]')[0] && (i.address = {
                postal_code: t.find('input[data-stripe="address_zip"]').val()
            }),
            n.intent ? C.handleCardSetup(n.intent, g, {
                payment_method_data: {
                    billing_details: i
                }
            }).then(s) : g ? C.createPaymentMethod("card", g, {
                billing_details: i
            }).then(s) : t[0].submit()
        }
    }), t.attr("data-payment-intent-client-secret")) {
        var D = t.attr("data-payment-intent-client-secret"),
            P = "true" === t.attr("data-reconfirmable");
        t.attr("data-automatic-confirmation") && h(D, P),
        $("[data-confirm-stripe-payment-intent]").on("click", function() {
            event.preventDefault(),
            h(D, P)
        })
    }
},
$(function() {
    $("[data-stripe-elements-form]").each(function(t, e) {
        var n = $(e),
            i = n.closest("form"),
            r = JSON.parse(n.attr("data-stripe-elements-options") || "{}");
        new App.StripeElementsForm(i, n.attr("data-stripe-elements-form"), r)
    })
}),
App.UpdateCardCheckout = function(t, e) {
    var n = $(t);
    this.stripeFormDisabledState = e,
    this.offerCheckoutForm = n.closest("form"),
    this.checkoutOfferCardholderName = n.find("#checkout_offer_cardholder_name")
},
App.UpdateCardCheckout.prototype = {
    show: function() {
        this.toggle(!1)
    },
    hide: function() {
        this.toggle(!0)
    },
    toggle: function(t) {
        this.stripeFormDisabledState = t,
        this.offerCheckoutForm.data("stripe-form-disabled", this.stripeFormDisabledState),
        this.checkoutOfferCardholderName.toggleClass("required", !this.stripeFormDisabledState)
    }
},
App.WaitingLoader = function(t, e, n, i) {
    this.loader = $(t),
    this.title = this.loader.find(".waiting-loader-title"),
    i ? (this.phrases = _.shuffle(n) || [], this.phraseInterval = setInterval(this.switchPhraseShuffle.bind(this), 3e3)) : (this.phrases = n || [], this.phraseInterval = setInterval(this.switchPhrase.bind(this), 3e3)),
    this.say(e),
    $.ajax({
        dataType: "script"
    })
},
App.WaitingLoader.prototype = {
    finish: function(t) {
        clearInterval(this.phraseInterval),
        clearTimeout(this.phraseTimeout),
        this.loader.addClass("waiting-loader-complete"),
        this.say(t)
    },
    say: function(t) {
        this.hidePhrase(),
        this.title.removeClass("waiting-loader-title-fadeout").addClass("waiting-loader-title-fadein").text(t)
    },
    hidePhrase: function() {
        this.title.removeClass("waiting-loader-title-fadein").addClass("waiting-loader-title-fadeout")
    },
    switchPhraseShuffle: function() {
        this.hidePhrase(),
        this.phraseTimeout = setTimeout(function() {
            var t = this.phrases.shift();
            this.phrases.push(t),
            this.say(t)
        }.bind(this), 500)
    },
    switchPhrase: function() {
        0 != this.phrases.length && (this.hidePhrase(), this.phraseTimeout = setTimeout(function() {
            var t = this.phrases.shift();
            this.say(t)
        }.bind(this), 500))
    }
};

