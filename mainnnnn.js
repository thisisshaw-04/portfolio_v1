const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["_astro/browserAll.OIhgtlpz.js", "_astro/webworkerAll.DPLUA6eM.js", "_astro/colorToUniform.ctgBpyc5.js", "_astro/WebGPURenderer.wV-uZUc6.js", "_astro/SharedSystems.DRdb9S1w.js", "_astro/WebGLRenderer.BRxGlJXR.js"]))) => i.map(i => d[i]);
function Jx() {
    const n = document.createElement("div");
    Object.assign(n.style, {
        position: "fixed",
        top: "-9999px",
        width: "100px",
        height: "100px",
        overflow: "scroll"
    }),
    document.body.appendChild(n);
    const t = n.offsetWidth - n.clientWidth;
    return document.body.removeChild(n),
    t
}
let Wr = []
  , Dn = 0;
const ha = 4;
let Rl = n => {
    let t = []
      , e = {
        get() {
            return e.lc || e.listen( () => {}
            )(),
            e.value
        },
        lc: 0,
        listen(r) {
            return e.lc = t.push(r),
            () => {
                for (let s = Dn + ha; s < Wr.length; )
                    Wr[s] === r ? Wr.splice(s, ha) : s += ha;
                let i = t.indexOf(r);
                ~i && (t.splice(i, 1),
                --e.lc)
            }
        },
        notify(r, i) {
            let s = !Wr.length;
            for (let o of t)
                Wr.push(o, e.value, r, i);
            if (s) {
                for (Dn = 0; Dn < Wr.length; Dn += ha)
                    Wr[Dn](Wr[Dn + 1], Wr[Dn + 2], Wr[Dn + 3]);
                Wr.length = 0
            }
        },
        off() {},
        set(r) {
            let i = e.value;
            i !== r && (e.value = r,
            e.notify(i))
        },
        subscribe(r) {
            let i = e.listen(r);
            return r(e.value),
            i
        },
        value: n
    };
    return e
}
;
const _s = Rl(!1);
function Ju() {
    return _s.get()
}
const tc = Rl("light");
function tv() {
    tc.set(tc.get() === "light" ? "dark" : "light")
}
function Ep() {
    return tc.get()
}
const yh = Rl("grid");
function vf(n) {
    if (!["grid", "list"].includes(n))
        return console.warn("Invalid layout type");
    yh.set(n)
}
function ev() {
    return yh.get()
}
function Je() {
    if (!(this instanceof Je))
        return new Je;
    this.size = 0,
    this.uid = 0,
    this.selectors = [],
    this.selectorObjects = {},
    this.indexes = Object.create(this.indexes),
    this.activeIndexes = []
}
var Ks = window.document.documentElement
  , rv = Ks.matches || Ks.webkitMatchesSelector || Ks.mozMatchesSelector || Ks.oMatchesSelector || Ks.msMatchesSelector;
Je.prototype.matchesSelector = function(n, t) {
    return rv.call(n, t)
}
;
Je.prototype.querySelectorAll = function(n, t) {
    return t.querySelectorAll(n)
}
;
Je.prototype.indexes = [];
var nv = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
Je.prototype.indexes.push({
    name: "ID",
    selector: function(t) {
        var e;
        if (e = t.match(nv))
            return e[0].slice(1)
    },
    element: function(t) {
        if (t.id)
            return [t.id]
    }
});
var iv = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
Je.prototype.indexes.push({
    name: "CLASS",
    selector: function(t) {
        var e;
        if (e = t.match(iv))
            return e[0].slice(1)
    },
    element: function(t) {
        var e = t.className;
        if (e) {
            if (typeof e == "string")
                return e.split(/\s/);
            if (typeof e == "object" && "baseVal"in e)
                return e.baseVal.split(/\s/)
        }
    }
});
var sv = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
Je.prototype.indexes.push({
    name: "TAG",
    selector: function(t) {
        var e;
        if (e = t.match(sv))
            return e[0].toUpperCase()
    },
    element: function(t) {
        return [t.nodeName.toUpperCase()]
    }
});
Je.prototype.indexes.default = {
    name: "UNIVERSAL",
    selector: function() {
        return !0
    },
    element: function() {
        return [!0]
    }
};
var ec;
typeof window.Map == "function" ? ec = window.Map : ec = function() {
    function n() {
        this.map = {}
    }
    return n.prototype.get = function(t) {
        return this.map[t + " "]
    }
    ,
    n.prototype.set = function(t, e) {
        this.map[t + " "] = e
    }
    ,
    n
}();
var _f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
function Ip(n, t) {
    n = n.slice(0).concat(n.default);
    var e = n.length, r, i, s, o, a = t, l, u, c = [];
    do
        if (_f.exec(""),
        (s = _f.exec(a)) && (a = s[3],
        s[2] || !a)) {
            for (r = 0; r < e; r++)
                if (u = n[r],
                l = u.selector(s[1])) {
                    for (i = c.length,
                    o = !1; i--; )
                        if (c[i].index === u && c[i].key === l) {
                            o = !0;
                            break
                        }
                    o || c.push({
                        index: u,
                        key: l
                    });
                    break
                }
        }
    while (s);
    return c
}
function ov(n, t) {
    var e, r, i;
    for (e = 0,
    r = n.length; e < r; e++)
        if (i = n[e],
        t.isPrototypeOf(i))
            return i
}
Je.prototype.logDefaultIndexUsed = function() {}
;
Je.prototype.add = function(n, t) {
    var e, r, i, s, o, a, l, u, c = this.activeIndexes, f = this.selectors, d = this.selectorObjects;
    if (typeof n == "string") {
        for (e = {
            id: this.uid++,
            selector: n,
            data: t
        },
        d[e.id] = e,
        l = Ip(this.indexes, n),
        r = 0; r < l.length; r++)
            u = l[r],
            s = u.key,
            i = u.index,
            o = ov(c, i),
            o || (o = Object.create(i),
            o.map = new ec,
            c.push(o)),
            i === this.indexes.default && this.logDefaultIndexUsed(e),
            a = o.map.get(s),
            a || (a = [],
            o.map.set(s, a)),
            a.push(e);
        this.size++,
        f.push(n)
    }
}
;
Je.prototype.remove = function(n, t) {
    if (typeof n == "string") {
        var e, r, i, s, o, a, l, u, c = this.activeIndexes, f = this.selectors = [], d = this.selectorObjects, h = {}, m = arguments.length === 1;
        for (e = Ip(this.indexes, n),
        i = 0; i < e.length; i++)
            for (r = e[i],
            s = c.length; s--; )
                if (a = c[s],
                r.index.isPrototypeOf(a)) {
                    if (l = a.map.get(r.key),
                    l)
                        for (o = l.length; o--; )
                            u = l[o],
                            u.selector === n && (m || u.data === t) && (l.splice(o, 1),
                            h[u.id] = !0);
                    break
                }
        for (i in h)
            delete d[i],
            this.size--;
        for (i in d)
            f.push(d[i].selector)
    }
}
;
function kp(n, t) {
    return n.id - t.id
}
Je.prototype.queryAll = function(n) {
    if (!this.selectors.length)
        return [];
    var t = {}, e = [], r = this.querySelectorAll(this.selectors.join(", "), n), i, s, o, a, l, u, c, f;
    for (i = 0,
    o = r.length; i < o; i++)
        for (l = r[i],
        u = this.matches(l),
        s = 0,
        a = u.length; s < a; s++)
            f = u[s],
            t[f.id] ? c = t[f.id] : (c = {
                id: f.id,
                selector: f.selector,
                data: f.data,
                elements: []
            },
            t[f.id] = c,
            e.push(c)),
            c.elements.push(l);
    return e.sort(kp)
}
;
Je.prototype.matches = function(n) {
    if (!n)
        return [];
    var t, e, r, i, s, o, a, l, u, c, f, d = this.activeIndexes, h = {}, m = [];
    for (t = 0,
    i = d.length; t < i; t++)
        if (a = d[t],
        l = a.element(n),
        l) {
            for (e = 0,
            s = l.length; e < s; e++)
                if (u = a.map.get(l[e]))
                    for (r = 0,
                    o = u.length; r < o; r++)
                        c = u[r],
                        f = c.id,
                        !h[f] && this.matchesSelector(n, c.selector) && (h[f] = !0,
                        m.push(c))
        }
    return m.sort(kp)
}
;
const is = {}
  , Xn = {}
  , rc = ["mouseenter", "mouseleave", "pointerenter", "pointerleave", "blur", "focus"];
function yf(n) {
    Xn[n] === void 0 && (Xn[n] = new Set)
}
function av(n, t) {
    Xn[n] && Xn[n].forEach(e => {
        e(...t)
    }
    )
}
function bf(n) {
    return typeof n == "string" ? document.querySelectorAll(n) : n
}
function fa(n) {
    let t = lv(is[n.type], n.target);
    if (t.length)
        for (let e = 0; e < t.length; e++)
            for (let r = 0; r < t[e].stack.length; r++)
                rc.indexOf(n.type) !== -1 ? (Sf(n, t[e].delegatedTarget),
                n.target === t[e].delegatedTarget && t[e].stack[r].data(n)) : (Sf(n, t[e].delegatedTarget),
                t[e].stack[r].data(n))
}
function lv(n, t) {
    const e = [];
    let r = t;
    do {
        if (r.nodeType !== 1)
            break;
        const i = n.matches(r);
        i.length && e.push({
            delegatedTarget: r,
            stack: i
        })
    } while (r = r.parentElement);
    return e
}
function Sf(n, t) {
    Object.defineProperty(n, "currentTarget", {
        configurable: !0,
        enumerable: !0,
        get: () => t
    })
}
function uv(n) {
    const t = {};
    for (const e in n)
        t[e] = [...n[e]];
    return t
}
class cv {
    bindAll(t, e) {
        e || (e = Object.getOwnPropertyNames(Object.getPrototypeOf(t)));
        for (let r = 0; r < e.length; r++)
            t[e[r]] = t[e[r]].bind(t)
    }
    on(t, e, r, i) {
        const s = t.split(" ");
        for (let o = 0; o < s.length; o++) {
            if (typeof e == "function" && r === void 0) {
                yf(s[o]),
                Xn[s[o]].add(e);
                continue
            }
            if (e.nodeType && e.nodeType === 1 || e === window || e === document) {
                e.addEventListener(s[o], r, i);
                continue
            }
            e = bf(e);
            for (let a = 0; a < e.length; a++)
                e[a].addEventListener(s[o], r, i)
        }
    }
    delegate(t, e, r) {
        const i = t.split(" ");
        for (let s = 0; s < i.length; s++) {
            let o = is[i[s]];
            o === void 0 && (o = new Je,
            is[i[s]] = o,
            rc.indexOf(i[s]) !== -1 ? document.addEventListener(i[s], fa, !0) : document.addEventListener(i[s], fa)),
            o.add(e, r)
        }
    }
    off(t, e, r, i) {
        const s = t.split(" ");
        for (let o = 0; o < s.length; o++) {
            if (e === void 0) {
                Xn[s[o]]?.clear();
                continue
            }
            if (typeof e == "function") {
                yf(s[o]),
                Xn[s[o]].delete(e);
                continue
            }
            const a = is[s[o]];
            if (a !== void 0 && (a.remove(e, r),
            a.size === 0)) {
                delete is[s[o]],
                rc.indexOf(s[o]) !== -1 ? document.removeEventListener(s[o], fa, !0) : document.removeEventListener(s[o], fa);
                continue
            }
            if (e.removeEventListener !== void 0) {
                e.removeEventListener(s[o], r, i);
                continue
            }
            e = bf(e);
            for (let l = 0; l < e.length; l++)
                e[l].removeEventListener(s[o], r, i)
        }
    }
    emit(t, ...e) {
        av(t, e)
    }
    debugDelegated() {
        return JSON.parse(JSON.stringify(is))
    }
    debugBus() {
        return uv(Xn)
    }
    hasBus(t) {
        return this.debugBus().hasOwnProperty(t)
    }
}
const Bn = new cv
  , hv = new DOMParser;
function fv(n) {
    return typeof n == "string" ? hv.parseFromString(n, "text/html") : n
}
function Un(n) {
    const t = new URL(n,window.location.origin)
      , e = t.hash.length ? n.replace(t.hash, "") : null;
    return {
        hasHash: t.hash.length > 0,
        pathname: t.pathname,
        host: t.host,
        search: t.search,
        raw: n,
        href: e || t.href
    }
}
function wf(n, t) {
    n.parentNode.replaceChild(zp(n, t), n)
}
function Cf(n, t) {
    (n.parentNode.tagName === "HEAD" ? document.head : document.body).appendChild(zp(n, t))
}
function zp(n, t) {
    const e = document.createElement(t);
    for (let r = 0; r < n.attributes.length; r++) {
        const i = n.attributes[r];
        e.setAttribute(i.nodeName, i.nodeValue)
    }
    return n.innerHTML && (e.innerHTML = n.innerHTML),
    e
}
class fl {
    constructor({wrapper: t}) {
        this.wrapper = t
    }
    leave(t) {
        return new Promise(e => {
            this.onLeave({
                ...t,
                done: e
            })
        }
        )
    }
    enter(t) {
        return new Promise(e => {
            this.onEnter({
                ...t,
                done: e
            })
        }
        )
    }
    onLeave({from: t, trigger: e, done: r}) {
        r()
    }
    onEnter({to: t, trigger: e, done: r}) {
        r()
    }
}
class nc {
    constructor({content: t, page: e, title: r, wrapper: i}) {
        this._contentString = t.outerHTML,
        this._DOM = null,
        this.page = e,
        this.title = r,
        this.wrapper = i,
        this.content = this.wrapper.lastElementChild
    }
    onEnter() {}
    onEnterCompleted() {}
    onLeave() {}
    onLeaveCompleted() {}
    initialLoad() {
        this.onEnter(),
        this.onEnterCompleted()
    }
    update() {
        document.title = this.title,
        this.wrapper.appendChild(this._DOM.firstElementChild),
        this.content = this.wrapper.lastElementChild,
        this._DOM = null
    }
    createDom() {
        this._DOM || (this._DOM = document.createElement("div"),
        this._DOM.innerHTML = this._contentString)
    }
    remove() {
        this.wrapper.firstElementChild.remove()
    }
    enter(t, e) {
        return new Promise(r => {
            this.onEnter(),
            t.enter({
                trigger: e,
                to: this.content
            }).then( () => {
                this.onEnterCompleted(),
                r()
            }
            )
        }
        )
    }
    leave(t, e, r) {
        return new Promise(i => {
            this.onLeave(),
            t.leave({
                trigger: e,
                from: this.content
            }).then( () => {
                r && this.remove(),
                this.onLeaveCompleted(),
                i()
            }
            )
        }
        )
    }
}
class dv {
    data = new Map;
    regexCache = new Map;
    add(t, e, r) {
        this.data.has(t) || (this.data.set(t, new Map),
        this.regexCache.set(t, new RegExp(`^${t}$`))),
        this.data.get(t).set(e, r),
        this.regexCache.set(e, new RegExp(`^${e}$`))
    }
    findMatch(t, e) {
        for (const [r,i] of this.data)
            if (t.pathname.match(this.regexCache.get(r))) {
                for (const [s,o] of i)
                    if (e.pathname.match(this.regexCache.get(s)))
                        return o;
                break
            }
        return null
    }
}
const Tf = "A transition is currently in progress";
class pv {
    isTransitioning = !1;
    currentCacheEntry = null;
    cache = new Map;
    activePromises = new Map;
    constructor(t={}) {
        const {links: e="a:not([target]):not([href^=\\#]):not([data-taxi-ignore])", removeOldContent: r=!0, allowInterruption: i=!1, bypassCache: s=!1, enablePrefetch: o=!0, renderers: a={
            default: nc
        }, transitions: l={
            default: fl
        }, reloadJsFilter: u=f => f.dataset.taxiReload !== void 0, reloadCssFilter: c=f => !0} = t;
        this.renderers = a,
        this.transitions = l,
        this.defaultRenderer = this.renderers.default || nc,
        this.defaultTransition = this.transitions.default || fl,
        this.wrapper = document.querySelector("[data-taxi]"),
        this.reloadJsFilter = u,
        this.reloadCssFilter = c,
        this.removeOldContent = r,
        this.allowInterruption = i,
        this.bypassCache = s,
        this.enablePrefetch = o,
        this.cache = new Map,
        this.isPopping = !1,
        this.attachEvents(e),
        this.currentLocation = Un(window.location.href),
        this.cache.set(this.currentLocation.href, this.createCacheEntry(document.cloneNode(!0), window.location.href)),
        this.currentCacheEntry = this.cache.get(this.currentLocation.href),
        this.currentCacheEntry.renderer.initialLoad()
    }
    setDefaultRenderer(t) {
        this.defaultRenderer = this.renderers[t]
    }
    setDefaultTransition(t) {
        this.defaultTransition = this.transitions[t]
    }
    addRoute(t, e, r) {
        this.router || (this.router = new dv),
        this.router.add(t, e, r)
    }
    preload(t, e=!1) {
        return t = Un(t).href,
        this.cache.has(t) ? Promise.resolve() : this.fetch(t, !1).then(async r => {
            this.cache.set(t, this.createCacheEntry(r.html, r.url)),
            e && this.cache.get(t).renderer.createDom()
        }
        ).catch(r => console.warn(r))
    }
    updateCache(t) {
        const e = Un(t || window.location.href).href;
        this.cache.has(e) && this.cache.delete(e),
        this.cache.set(e, this.createCacheEntry(document.cloneNode(!0), e))
    }
    clearCache(t) {
        const e = Un(t || window.location.href).href;
        this.cache.has(e) && this.cache.delete(e)
    }
    navigateTo(t, e=!1, r=!1) {
        return new Promise( (i, s) => {
            if (!this.allowInterruption && this.isTransitioning) {
                s(new Error(Tf));
                return
            }
            this.isTransitioning = !0,
            this.isPopping = !0,
            this.targetLocation = Un(t),
            this.popTarget = window.location.href;
            const o = new (this.chooseTransition(e))({
                wrapper: this.wrapper
            });
            let a;
            if (this.bypassCache || !this.cache.has(this.targetLocation.href) || this.cache.get(this.targetLocation.href).skipCache) {
                const l = this.fetch(this.targetLocation.href).then(u => {
                    this.cache.set(this.targetLocation.href, this.createCacheEntry(u.html, u.url)),
                    this.cache.get(this.targetLocation.href).renderer.createDom()
                }
                ).catch(u => {
                    window.location.href = t
                }
                );
                a = this.beforeFetch(this.targetLocation, o, r).then(async () => l.then(async () => await this.afterFetch(this.targetLocation, o, this.cache.get(this.targetLocation.href), r)))
            } else
                this.cache.get(this.targetLocation.href).renderer.createDom(),
                a = this.beforeFetch(this.targetLocation, o, r).then(async () => await this.afterFetch(this.targetLocation, o, this.cache.get(this.targetLocation.href), r));
            a.then( () => {
                i()
            }
            )
        }
        )
    }
    on(t, e) {
        Bn.on(t, e)
    }
    off(t, e) {
        Bn.off(t, e)
    }
    beforeFetch(t, e, r) {
        return Bn.emit("NAVIGATE_OUT", {
            from: this.currentCacheEntry,
            trigger: r
        }),
        new Promise(i => {
            this.currentCacheEntry.renderer.leave(e, r, this.removeOldContent).then( () => {
                r !== "popstate" && window.history.pushState({}, "", t.raw),
                i()
            }
            )
        }
        )
    }
    afterFetch(t, e, r, i) {
        return this.currentLocation = t,
        this.popTarget = this.currentLocation.href,
        new Promise(s => {
            r.renderer.update(),
            Bn.emit("NAVIGATE_IN", {
                from: this.currentCacheEntry,
                to: r,
                trigger: i
            }),
            this.reloadJsFilter && this.loadScripts(r.scripts),
            this.reloadCssFilter && this.loadStyles(r.styles),
            i !== "popstate" && t.href !== r.finalUrl && window.history.replaceState({}, "", r.finalUrl),
            r.renderer.enter(e, i).then( () => {
                Bn.emit("NAVIGATE_END", {
                    from: this.currentCacheEntry,
                    to: r,
                    trigger: i
                }),
                this.currentCacheEntry = r,
                this.isTransitioning = !1,
                this.isPopping = !1,
                s()
            }
            )
        }
        )
    }
    loadScripts(t) {
        const e = [...t]
          , r = Array.from(document.querySelectorAll("script")).filter(this.reloadJsFilter);
        for (let i = 0; i < r.length; i++)
            for (let s = 0; s < e.length; s++)
                if (r[i].outerHTML === e[s].outerHTML) {
                    wf(r[i], "SCRIPT"),
                    e.splice(s, 1);
                    break
                }
        for (const i of e)
            Cf(i, "SCRIPT")
    }
    loadStyles(t) {
        const e = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter(this.reloadCssFilter)
          , r = Array.from(document.querySelectorAll("style")).filter(this.reloadCssFilter)
          , i = t.filter(s => {
            if (s.href) {
                if (!e.find(o => o.href === s.href))
                    return document.body.append(s),
                    !1
            } else
                return !0
        }
        );
        for (let s = 0; s < r.length; s++)
            for (let o = 0; o < i.length; o++)
                if (r[s].outerHTML === i[o].outerHTML) {
                    wf(r[s], "STYLE"),
                    i.splice(o, 1);
                    break
                }
        for (const s of i)
            Cf(s, "STYLE")
    }
    attachEvents(t) {
        Bn.delegate("click", t, this.onClick),
        Bn.on("popstate", window, this.onPopstate),
        this.enablePrefetch && Bn.delegate("mouseenter focus", t, this.onPrefetch)
    }
    onClick = t => {
        if (!(t.metaKey || t.ctrlKey)) {
            const e = Un(t.currentTarget.href);
            if (this.currentLocation = Un(window.location.href),
            this.currentLocation.host !== e.host)
                return;
            if (this.currentLocation.href !== e.href || this.currentLocation.hasHash && !e.hasHash) {
                t.preventDefault(),
                this.navigateTo(e.raw, t.currentTarget.dataset.transition || !1, t.currentTarget).catch(r => console.warn(r));
                return
            }
            !this.currentLocation.hasHash && !e.hasHash && t.preventDefault()
        }
    }
    ;
    onPopstate = () => {
        if (window.location.pathname === this.currentLocation.pathname && window.location.search === this.currentLocation.search && !this.isPopping)
            return !1;
        if (!this.allowInterruption && (this.isTransitioning || this.isPopping))
            return window.history.pushState({}, "", this.popTarget),
            console.warn(Tf),
            !1;
        this.isPopping || (this.popTarget = window.location.href),
        this.isPopping = !0,
        this.navigateTo(window.location.href, !1, "popstate")
    }
    ;
    onPrefetch = t => {
        const e = Un(t.currentTarget.href);
        this.currentLocation.host === e.host && this.preload(t.currentTarget.href, !1)
    }
    ;
    fetch(t, e=!0) {
        if (this.activePromises.has(t))
            return this.activePromises.get(t);
        const r = new Promise( (i, s) => {
            let o;
            fetch(t, {
                mode: "same-origin",
                method: "GET",
                headers: {
                    "X-Requested-With": "Taxi"
                },
                credentials: "same-origin"
            }).then(a => (a.ok || (s("Taxi encountered a non 2xx HTTP status code"),
            e && (window.location.href = t)),
            o = a.url,
            a.text())).then(a => {
                i({
                    html: fv(a),
                    url: o
                })
            }
            ).catch(a => {
                s(a),
                e && (window.location.href = t)
            }
            ).finally( () => {
                this.activePromises.delete(t)
            }
            )
        }
        );
        return this.activePromises.set(t, r),
        r
    }
    chooseTransition(t) {
        if (t)
            return this.transitions[t];
        const e = this.router?.findMatch(this.currentLocation, this.targetLocation);
        return e ? this.transitions[e] : this.defaultTransition
    }
    createCacheEntry(t, e) {
        const r = t.querySelector("[data-taxi-view]")
          , i = r.dataset.taxiView.length ? this.renderers[r.dataset.taxiView] : this.defaultRenderer;
        return i || console.warn(`The Renderer "${r.dataset.taxiView}" was set in the data-taxi-view of the requested page, but not registered in Taxi.`),
        {
            page: t,
            content: r,
            finalUrl: e,
            skipCache: r.hasAttribute("data-taxi-nocache"),
            scripts: this.reloadJsFilter ? Array.from(t.querySelectorAll("script")).filter(this.reloadJsFilter) : [],
            styles: this.reloadCssFilter ? Array.from(t.querySelectorAll('link[rel="stylesheet"], style')).filter(this.reloadCssFilter) : [],
            title: t.title,
            renderer: new i({
                wrapper: this.wrapper,
                title: t.title,
                content: r,
                page: t
            })
        }
    }
}
class mv extends nc {
    initialLoad() {
        this.onEnter(),
        this.onEnterCompleted()
    }
    onEnter() {}
    onEnterCompleted() {}
    onLeave() {}
    onLeaveCompleted() {}
}
function Tn(n) {
    if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}
function Rp(n, t) {
    n.prototype = Object.create(t.prototype),
    n.prototype.constructor = n,
    n.__proto__ = t
}
/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Tr = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Es = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, bh, Ue, ie, Lr = 1e8, $t = 1 / Lr, ic = Math.PI * 2, gv = ic / 4, xv = 0, Lp = Math.sqrt, vv = Math.cos, _v = Math.sin, Me = function(t) {
    return typeof t == "string"
}, se = function(t) {
    return typeof t == "function"
}, Rn = function(t) {
    return typeof t == "number"
}, Sh = function(t) {
    return typeof t > "u"
}, vn = function(t) {
    return typeof t == "object"
}, lr = function(t) {
    return t !== !1
}, wh = function() {
    return typeof window < "u"
}, da = function(t) {
    return se(t) || Me(t)
}, Dp = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, $e = Array.isArray, sc = /(?:-?\.?\d|\.)+/gi, Bp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ds = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ql = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Up = /[+-]=-?[.\d]+/, $p = /[^,'"\[\]\s]+/gi, yv = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Kt, Ir, oc, Ch, Pr = {}, dl = {}, Np, Gp = function(t) {
    return (dl = $i(t, Pr)) && dr
}, Th = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, $o = function(t, e) {
    return !e && console.warn(t)
}, Vp = function(t, e) {
    return t && (Pr[t] = e) && dl && (dl[t] = e) || Pr
}, No = function() {
    return 0
}, bv = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Ga = {
    suppressEvents: !0,
    kill: !1
}, Sv = {
    suppressEvents: !0
}, Ah = {}, Jn = [], ac = {}, Wp, yr = {}, Kl = {}, Af = 30, Va = [], Ph = "", Mh = function(t) {
    var e = t[0], r, i;
    if (vn(e) || se(e) || (t = [t]),
    !(r = (e._gsap || {}).harness)) {
        for (i = Va.length; i-- && !Va[i].targetTest(e); )
            ;
        r = Va[i]
    }
    for (i = t.length; i--; )
        t[i] && (t[i]._gsap || (t[i]._gsap = new pm(t[i],r))) || t.splice(i, 1);
    return t
}, Oi = function(t) {
    return t._gsap || Mh(Dr(t))[0]._gsap
}, Xp = function(t, e, r) {
    return (r = t[e]) && se(r) ? t[e]() : Sh(r) && t.getAttribute && t.getAttribute(e) || r
}, ur = function(t, e) {
    return (t = t.split(",")).forEach(e) || t
}, le = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, Pe = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, ys = function(t, e) {
    var r = e.charAt(0)
      , i = parseFloat(e.substr(2));
    return t = parseFloat(t),
    r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
}, wv = function(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
        ;
    return i < r
}, pl = function() {
    var t = Jn.length, e = Jn.slice(0), r, i;
    for (ac = {},
    Jn.length = 0,
    r = 0; r < t; r++)
        i = e[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, Hp = function(t, e, r, i) {
    Jn.length && !Ue && pl(),
    t.render(e, r, Ue && e < 0 && (t._initted || t._startAt)),
    Jn.length && !Ue && pl()
}, Yp = function(t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match($p).length < 2 ? e : Me(t) ? t.trim() : t
}, jp = function(t) {
    return t
}, Nr = function(t, e) {
    for (var r in e)
        r in t || (t[r] = e[r]);
    return t
}, Cv = function(t) {
    return function(e, r) {
        for (var i in r)
            i in e || i === "duration" && t || i === "ease" || (e[i] = r[i])
    }
}, $i = function(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t
}, Pf = function n(t, e) {
    for (var r in e)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = vn(e[r]) ? n(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t
}, ml = function(t, e) {
    var r = {}, i;
    for (i in t)
        i in e || (r[i] = t[i]);
    return r
}, yo = function(t) {
    var e = t.parent || Kt
      , r = t.keyframes ? Cv($e(t.keyframes)) : Nr;
    if (lr(t.inherit))
        for (; e; )
            r(t, e.vars.defaults),
            e = e.parent || e._dp;
    return t
}, Tv = function(t, e) {
    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
        ;
    return r < 0
}, qp = function(t, e, r, i, s) {
    var o = t[i], a;
    if (s)
        for (a = e[s]; o && o[s] > a; )
            o = o._prev;
    return o ? (e._next = o._next,
    o._next = e) : (e._next = t[r],
    t[r] = e),
    e._next ? e._next._prev = e : t[i] = e,
    e._prev = o,
    e.parent = e._dp = t,
    e
}, Ll = function(t, e, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var s = e._prev
      , o = e._next;
    s ? s._next = o : t[r] === e && (t[r] = o),
    o ? o._prev = s : t[i] === e && (t[i] = s),
    e._next = e._prev = e.parent = null
}, ni = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
    t._act = 0
}, Fi = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; )
            r._dirty = 1,
            r = r.parent;
    return t
}, Av = function(t) {
    for (var e = t.parent; e && e.parent; )
        e._dirty = 1,
        e.totalDuration(),
        e = e.parent;
    return t
}, lc = function(t, e, r, i) {
    return t._startAt && (Ue ? t._startAt.revert(Ga) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
}, Pv = function n(t) {
    return !t || t._ts && n(t.parent)
}, Mf = function(t) {
    return t._repeat ? Is(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Is = function(t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r
}, gl = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, Dl = function(t) {
    return t._end = Pe(t._start + (t._tDur / Math.abs(t._ts || t._rts || $t) || 0))
}, Bl = function(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = Pe(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
    Dl(t),
    r._dirty || Fi(r, t)),
    t
}, Kp = function(t, e) {
    var r;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = gl(t.rawTime(), e),
    (!e._dur || aa(0, e.totalDuration(), r) - e._tTime > $t) && e.render(r, !0)),
    Fi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        t._zTime = -$t
    }
}, dn = function(t, e, r, i) {
    return e.parent && ni(e),
    e._start = Pe((Rn(r) ? r : r || t !== Kt ? Er(t, r, e) : t._time) + e._delay),
    e._end = Pe(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
    qp(t, e, "_first", "_last", t._sort ? "_start" : 0),
    uc(e) || (t._recent = e),
    i || Kp(t, e),
    t._ts < 0 && Bl(t, t._tTime),
    t
}, Zp = function(t, e) {
    return (Pr.ScrollTrigger || Th("scrollTrigger", e)) && Pr.ScrollTrigger.create(e, t)
}, Qp = function(t, e, r, i, s) {
    if (Fh(t, e, s),
    !t._initted)
        return 1;
    if (!r && t._pt && !Ue && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Wp !== br.frame)
        return Jn.push(t),
        t._lazy = [s, i],
        1
}, Mv = function n(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e))
}, uc = function(t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart"
}, Ov = function(t, e, r, i) {
    var s = t.ratio, o = e < 0 || !e && (!t._start && Mv(t) && !(!t._initted && uc(t)) || (t._ts < 0 || t._dp._ts < 0) && !uc(t)) ? 0 : 1, a = t._rDelay, l = 0, u, c, f;
    if (a && t._repeat && (l = aa(0, t._tDur, e),
    c = Is(l, a),
    t._yoyo && c & 1 && (o = 1 - o),
    c !== Is(t._tTime, a) && (s = 1 - o,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    o !== s || Ue || i || t._zTime === $t || !e && t._zTime) {
        if (!t._initted && Qp(t, e, i, r, l))
            return;
        for (f = t._zTime,
        t._zTime = e || (r ? $t : 0),
        r || (r = e && !f),
        t.ratio = o,
        t._from && (o = 1 - o),
        t._time = 0,
        t._tTime = l,
        u = t._pt; u; )
            u.r(o, u.d),
            u = u._next;
        e < 0 && lc(t, e, r, !0),
        t._onUpdate && !r && Cr(t, "onUpdate"),
        l && t._repeat && !r && t.parent && Cr(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === o && (o && ni(t, 1),
        !r && !Ue && (Cr(t, o ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = e)
}, Fv = function(t, e, r) {
    var i;
    if (r > e)
        for (i = t._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > e)
                return i;
            i = i._next
        }
    else
        for (i = t._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < e)
                return i;
            i = i._prev
        }
}, ks = function(t, e, r, i) {
    var s = t._repeat
      , o = Pe(e) || 0
      , a = t._tTime / t._tDur;
    return a && !i && (t._time *= o / t._dur),
    t._dur = o,
    t._tDur = s ? s < 0 ? 1e10 : Pe(o * (s + 1) + t._rDelay * s) : o,
    a > 0 && !i && Bl(t, t._tTime = t._tDur * a),
    t.parent && Dl(t),
    r || Fi(t.parent, t),
    t
}, Of = function(t) {
    return t instanceof qe ? Fi(t) : ks(t, t._dur)
}, Ev = {
    _start: 0,
    endTime: No,
    totalDuration: No
}, Er = function n(t, e, r) {
    var i = t.labels, s = t._recent || Ev, o = t.duration() >= Lr ? s.endTime(!1) : t._dur, a, l, u;
    return Me(e) && (isNaN(e) || e in i) ? (l = e.charAt(0),
    u = e.substr(-1) === "%",
    a = e.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")),
    (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = o),
    i[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)),
    u && r && (l = l / 100 * ($e(r) ? r[0] : r).totalDuration()),
    a > 1 ? n(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e
}, bo = function(t, e, r) {
    var i = Rn(e[1]), s = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = e[s], a, l;
    if (i && (o.duration = e[1]),
    o.parent = r,
    t) {
        for (a = o,
        l = r; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = lr(l.vars.inherit) && l.parent;
        o.immediateRender = lr(a.immediateRender),
        t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1]
    }
    return new pe(e[0],o,e[s + 1])
}, oi = function(t, e) {
    return t || t === 0 ? e(t) : e
}, aa = function(t, e, r) {
    return r < t ? t : r > e ? e : r
}, De = function(t, e) {
    return !Me(t) || !(e = yv.exec(t)) ? "" : e[1]
}, Iv = function(t, e, r) {
    return oi(r, function(i) {
        return aa(t, e, i)
    })
}, cc = [].slice, Jp = function(t, e) {
    return t && vn(t) && "length"in t && (!e && !t.length || t.length - 1 in t && vn(t[0])) && !t.nodeType && t !== Ir
}, kv = function(t, e, r) {
    return r === void 0 && (r = []),
    t.forEach(function(i) {
        var s;
        return Me(i) && !e || Jp(i, 1) ? (s = r).push.apply(s, Dr(i)) : r.push(i)
    }) || r
}, Dr = function(t, e, r) {
    return ie && !e && ie.selector ? ie.selector(t) : Me(t) && !r && (oc || !zs()) ? cc.call((e || Ch).querySelectorAll(t), 0) : $e(t) ? kv(t, r) : Jp(t) ? cc.call(t, 0) : t ? [t] : []
}, hc = function(t) {
    return t = Dr(t)[0] || $o("Invalid scope") || {},
    function(e) {
        var r = t.current || t.nativeElement || t;
        return Dr(e, r.querySelectorAll ? r : r === t ? $o("Invalid scope") || Ch.createElement("div") : t)
    }
}, tm = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, em = function(t) {
    if (se(t))
        return t;
    var e = vn(t) ? t : {
        each: t
    }
      , r = Ei(e.ease)
      , i = e.from || 0
      , s = parseFloat(e.base) || 0
      , o = {}
      , a = i > 0 && i < 1
      , l = isNaN(i) || a
      , u = e.axis
      , c = i
      , f = i;
    return Me(i) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !a && l && (c = i[0],
    f = i[1]),
    function(d, h, m) {
        var p = (m || e).length, g = o[p], x, v, _, y, S, O, w, P, T;
        if (!g) {
            if (T = e.grid === "auto" ? 0 : (e.grid || [1, Lr])[1],
            !T) {
                for (w = -Lr; w < (w = m[T++].getBoundingClientRect().left) && T < p; )
                    ;
                T < p && T--
            }
            for (g = o[p] = [],
            x = l ? Math.min(T, p) * c - .5 : i % T,
            v = T === Lr ? 0 : l ? p * f / T - .5 : i / T | 0,
            w = 0,
            P = Lr,
            O = 0; O < p; O++)
                _ = O % T - x,
                y = v - (O / T | 0),
                g[O] = S = u ? Math.abs(u === "y" ? y : _) : Lp(_ * _ + y * y),
                S > w && (w = S),
                S < P && (P = S);
            i === "random" && tm(g),
            g.max = w - P,
            g.min = P,
            g.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (T > p ? p - 1 : u ? u === "y" ? p / T : T : Math.max(T, p / T)) || 0) * (i === "edges" ? -1 : 1),
            g.b = p < 0 ? s - p : s,
            g.u = De(e.amount || e.each) || 0,
            r = r && p < 0 ? hm(r) : r
        }
        return p = (g[d] - g.min) / g.max || 0,
        Pe(g.b + (r ? r(p) : p) * g.v) + g.u
    }
}, fc = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(r) {
        var i = Pe(Math.round(parseFloat(r) / t) * t * e);
        return (i - i % 1) / e + (Rn(r) ? 0 : De(r))
    }
}, rm = function(t, e) {
    var r = $e(t), i, s;
    return !r && vn(t) && (i = r = t.radius || Lr,
    t.values ? (t = Dr(t.values),
    (s = !Rn(t[0])) && (i *= i)) : t = fc(t.increment)),
    oi(e, r ? se(t) ? function(o) {
        return s = t(o),
        Math.abs(s - o) <= i ? s : o
    }
    : function(o) {
        for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = Lr, c = 0, f = t.length, d, h; f--; )
            s ? (d = t[f].x - a,
            h = t[f].y - l,
            d = d * d + h * h) : d = Math.abs(t[f] - a),
            d < u && (u = d,
            c = f);
        return c = !i || u <= i ? t[c] : o,
        s || c === o || Rn(o) ? c : c + De(o)
    }
    : fc(t))
}, nm = function(t, e, r, i) {
    return oi($e(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
        return $e(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * .99)) / r) * r * i) / i
    })
}, zv = function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    return function(i) {
        return e.reduce(function(s, o) {
            return o(s)
        }, i)
    }
}, Rv = function(t, e) {
    return function(r) {
        return t(parseFloat(r)) + (e || De(r))
    }
}, Lv = function(t, e, r) {
    return sm(t, e, 0, 1, r)
}, im = function(t, e, r) {
    return oi(r, function(i) {
        return t[~~e(i)]
    })
}, Dv = function n(t, e, r) {
    var i = e - t;
    return $e(t) ? im(t, n(0, t.length), e) : oi(r, function(s) {
        return (i + (s - t) % i) % i + t
    })
}, Bv = function n(t, e, r) {
    var i = e - t
      , s = i * 2;
    return $e(t) ? im(t, n(0, t.length - 1), e) : oi(r, function(o) {
        return o = (s + (o - t) % s) % s || 0,
        t + (o > i ? s - o : o)
    })
}, Go = function(t) {
    for (var e = 0, r = "", i, s, o, a; ~(i = t.indexOf("random(", e)); )
        o = t.indexOf(")", i),
        a = t.charAt(i + 7) === "[",
        s = t.substr(i + 7, o - i - 7).match(a ? $p : sc),
        r += t.substr(e, i - e) + nm(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5),
        e = o + 1;
    return r + t.substr(e, t.length - e)
}, sm = function(t, e, r, i, s) {
    var o = e - t
      , a = i - r;
    return oi(s, function(l) {
        return r + ((l - t) / o * a || 0)
    })
}, Uv = function n(t, e, r, i) {
    var s = isNaN(t + e) ? 0 : function(h) {
        return (1 - h) * t + h * e
    }
    ;
    if (!s) {
        var o = Me(t), a = {}, l, u, c, f, d;
        if (r === !0 && (i = 1) && (r = null),
        o)
            t = {
                p: t
            },
            e = {
                p: e
            };
        else if ($e(t) && !$e(e)) {
            for (c = [],
            f = t.length,
            d = f - 2,
            u = 1; u < f; u++)
                c.push(n(t[u - 1], t[u]));
            f--,
            s = function(m) {
                m *= f;
                var p = Math.min(d, ~~m);
                return c[p](m - p)
            }
            ,
            r = e
        } else
            i || (t = $i($e(t) ? [] : {}, t));
        if (!c) {
            for (l in e)
                Oh.call(a, t, l, "get", e[l]);
            s = function(m) {
                return kh(m, a) || (o ? t.p : t)
            }
        }
    }
    return oi(r, s)
}, Ff = function(t, e, r) {
    var i = t.labels, s = Lr, o, a, l;
    for (o in i)
        a = i[o] - e,
        a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o,
        s = a);
    return l
}, Cr = function(t, e, r) {
    var i = t.vars, s = i[e], o = ie, a = t._ctx, l, u, c;
    if (s)
        return l = i[e + "Params"],
        u = i.callbackScope || t,
        r && Jn.length && pl(),
        a && (ie = a),
        c = l ? s.apply(u, l) : s.call(u),
        ie = o,
        c
}, oo = function(t) {
    return ni(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!Ue),
    t.progress() < 1 && Cr(t, "onInterrupt"),
    t
}, ps, om = [], am = function(t) {
    if (wh() && t) {
        t = !t.name && t.default || t;
        var e = t.name
          , r = se(t)
          , i = e && !r && t.init ? function() {
            this._props = []
        }
        : t
          , s = {
            init: No,
            render: kh,
            add: Oh,
            kill: e_,
            modifier: t_,
            rawVars: 0
        }
          , o = {
            targetTest: 0,
            get: 0,
            getSetter: Ih,
            aliases: {},
            register: 0
        };
        if (zs(),
        t !== i) {
            if (yr[e])
                return;
            Nr(i, Nr(ml(t, s), o)),
            $i(i.prototype, $i(s, ml(t, o))),
            yr[i.prop = e] = i,
            t.targetTest && (Va.push(i),
            Ah[e] = 1),
            e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        Vp(e, i),
        t.register && t.register(dr, i, cr)
    } else
        t && om.push(t)
}, Bt = 255, ao = {
    aqua: [0, Bt, Bt],
    lime: [0, Bt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Bt],
    navy: [0, 0, 128],
    white: [Bt, Bt, Bt],
    olive: [128, 128, 0],
    yellow: [Bt, Bt, 0],
    orange: [Bt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Bt, 0, 0],
    pink: [Bt, 192, 203],
    cyan: [0, Bt, Bt],
    transparent: [Bt, Bt, Bt, 0]
}, Zl = function(t, e, r) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? e + (r - e) * t * 6 : t < .5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Bt + .5 | 0
}, lm = function(t, e, r) {
    var i = t ? Rn(t) ? [t >> 16, t >> 8 & Bt, t & Bt] : 0 : ao.black, s, o, a, l, u, c, f, d, h, m;
    if (!i) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
        ao[t])
            i = ao[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (s = t.charAt(1),
            o = t.charAt(2),
            a = t.charAt(3),
            t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return i = parseInt(t.substr(1, 6), 16),
                [i >> 16, i >> 8 & Bt, i & Bt, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
            i = [t >> 16, t >> 8 & Bt, t & Bt]
        } else if (t.substr(0, 3) === "hsl") {
            if (i = m = t.match(sc),
            !e)
                l = +i[0] % 360 / 360,
                u = +i[1] / 100,
                c = +i[2] / 100,
                o = c <= .5 ? c * (u + 1) : c + u - c * u,
                s = c * 2 - o,
                i.length > 3 && (i[3] *= 1),
                i[0] = Zl(l + 1 / 3, s, o),
                i[1] = Zl(l, s, o),
                i[2] = Zl(l - 1 / 3, s, o);
            else if (~t.indexOf("="))
                return i = t.match(Bp),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = t.match(sc) || ao.transparent;
        i = i.map(Number)
    }
    return e && !m && (s = i[0] / Bt,
    o = i[1] / Bt,
    a = i[2] / Bt,
    f = Math.max(s, o, a),
    d = Math.min(s, o, a),
    c = (f + d) / 2,
    f === d ? l = u = 0 : (h = f - d,
    u = c > .5 ? h / (2 - f - d) : h / (f + d),
    l = f === s ? (o - a) / h + (o < a ? 6 : 0) : f === o ? (a - s) / h + 2 : (s - o) / h + 4,
    l *= 60),
    i[0] = ~~(l + .5),
    i[1] = ~~(u * 100 + .5),
    i[2] = ~~(c * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, um = function(t) {
    var e = []
      , r = []
      , i = -1;
    return t.split(ti).forEach(function(s) {
        var o = s.match(ds) || [];
        e.push.apply(e, o),
        r.push(i += o.length + 1)
    }),
    e.c = r,
    e
}, Ef = function(t, e, r) {
    var i = "", s = (t + i).match(ti), o = e ? "hsla(" : "rgba(", a = 0, l, u, c, f;
    if (!s)
        return t;
    if (s = s.map(function(d) {
        return (d = lm(d, e, 1)) && o + (e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
    }),
    r && (c = um(t),
    l = r.c,
    l.join(i) !== c.c.join(i)))
        for (u = t.replace(ti, "1").split(ds),
        f = u.length - 1; a < f; a++)
            i += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
    if (!u)
        for (u = t.split(ti),
        f = u.length - 1; a < f; a++)
            i += u[a] + s[a];
    return i + u[f]
}, ti = function() {
    var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in ao)
        n += "|" + t + "\\b";
    return new RegExp(n + ")","gi")
}(), $v = /hsl[a]?\(/, cm = function(t) {
    var e = t.join(" "), r;
    if (ti.lastIndex = 0,
    ti.test(e))
        return r = $v.test(e),
        t[1] = Ef(t[1], r),
        t[0] = Ef(t[0], r, um(t[1])),
        !0
}, Vo, br = function() {
    var n = Date.now, t = 500, e = 33, r = n(), i = r, s = 1e3 / 240, o = s, a = [], l, u, c, f, d, h, m = function p(g) {
        var x = n() - i, v = g === !0, _, y, S, O;
        if (x > t && (r += x - e),
        i += x,
        S = i - r,
        _ = S - o,
        (_ > 0 || v) && (O = ++f.frame,
        d = S - f.time * 1e3,
        f.time = S = S / 1e3,
        o += _ + (_ >= s ? 4 : s - _),
        y = 1),
        v || (l = u(p)),
        y)
            for (h = 0; h < a.length; h++)
                a[h](S, d, O, g)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            m(!0)
        },
        deltaRatio: function(g) {
            return d / (1e3 / (g || 60))
        },
        wake: function() {
            Np && (!oc && wh() && (Ir = oc = window,
            Ch = Ir.document || {},
            Pr.gsap = dr,
            (Ir.gsapVersions || (Ir.gsapVersions = [])).push(dr.version),
            Gp(dl || Ir.GreenSockGlobals || !Ir.gsap && Ir || {}),
            c = Ir.requestAnimationFrame,
            om.forEach(am)),
            l && f.sleep(),
            u = c || function(g) {
                return setTimeout(g, o - f.time * 1e3 + 1 | 0)
            }
            ,
            Vo = 1,
            m(2))
        },
        sleep: function() {
            (c ? Ir.cancelAnimationFrame : clearTimeout)(l),
            Vo = 0,
            u = No
        },
        lagSmoothing: function(g, x) {
            t = g || 1 / 0,
            e = Math.min(x || 33, t)
        },
        fps: function(g) {
            s = 1e3 / (g || 240),
            o = f.time * 1e3 + s
        },
        add: function(g, x, v) {
            var _ = x ? function(y, S, O, w) {
                g(y, S, O, w),
                f.remove(_)
            }
            : g;
            return f.remove(g),
            a[v ? "unshift" : "push"](_),
            zs(),
            _
        },
        remove: function(g, x) {
            ~(x = a.indexOf(g)) && a.splice(x, 1) && h >= x && h--
        },
        _listeners: a
    },
    f
}(), zs = function() {
    return !Vo && br.wake()
}, St = {}, Nv = /^[\d.\-M][\d.\-,\s]/, Gv = /["']/g, Vv = function(t) {
    for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
        l = r[s],
        a = s !== o - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        e[i] = isNaN(u) ? u.replace(Gv, "").trim() : +u,
        i = l.substr(a + 1).trim();
    return e
}, Wv = function(t) {
    var e = t.indexOf("(") + 1
      , r = t.indexOf(")")
      , i = t.indexOf("(", e);
    return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
}, Xv = function(t) {
    var e = (t + "").split("(")
      , r = St[e[0]];
    return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Vv(e[1])] : Wv(t).split(",").map(Yp)) : St._CE && Nv.test(t) ? St._CE("", t) : r
}, hm = function(t) {
    return function(e) {
        return 1 - t(1 - e)
    }
}, fm = function n(t, e) {
    for (var r = t._first, i; r; )
        r instanceof qe ? n(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? n(r.timeline, e) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = e)),
        r = r._next
}, Ei = function(t, e) {
    return t && (se(t) ? t : St[t] || Xv(t)) || e
}, ji = function(t, e, r, i) {
    r === void 0 && (r = function(l) {
        return 1 - e(1 - l)
    }
    ),
    i === void 0 && (i = function(l) {
        return l < .5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2
    }
    );
    var s = {
        easeIn: e,
        easeOut: r,
        easeInOut: i
    }, o;
    return ur(t, function(a) {
        St[a] = Pr[a] = s,
        St[o = a.toLowerCase()] = r;
        for (var l in s)
            St[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = St[a + "." + l] = s[l]
    }),
    s
}, dm = function(t) {
    return function(e) {
        return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
    }
}, Ql = function n(t, e, r) {
    var i = e >= 1 ? e : 1
      , s = (r || (t ? .3 : .45)) / (e < 1 ? e : 1)
      , o = s / ic * (Math.asin(1 / i) || 0)
      , a = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * _v((c - o) * s) + 1
    }
      , l = t === "out" ? a : t === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : dm(a);
    return s = ic / s,
    l.config = function(u, c) {
        return n(t, u, c)
    }
    ,
    l
}, Jl = function n(t, e) {
    e === void 0 && (e = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((e + 1) * o + e) + 1 : 0
    }
      , i = t === "out" ? r : t === "in" ? function(s) {
        return 1 - r(1 - s)
    }
    : dm(r);
    return i.config = function(s) {
        return n(t, s)
    }
    ,
    i
};
ur("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, t) {
    var e = t < 5 ? t + 1 : t;
    ji(n + ",Power" + (e - 1), t ? function(r) {
        return Math.pow(r, e)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, e)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2
    })
});
St.Linear.easeNone = St.none = St.Linear.easeIn;
ji("Elastic", Ql("in"), Ql("out"), Ql());
(function(n, t) {
    var e = 1 / t
      , r = 2 * e
      , i = 2.5 * e
      , s = function(a) {
        return a < e ? n * a * a : a < r ? n * Math.pow(a - 1.5 / t, 2) + .75 : a < i ? n * (a -= 2.25 / t) * a + .9375 : n * Math.pow(a - 2.625 / t, 2) + .984375
    };
    ji("Bounce", function(o) {
        return 1 - s(1 - o)
    }, s)
}
)(7.5625, 2.75);
ji("Expo", function(n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0
});
ji("Circ", function(n) {
    return -(Lp(1 - n * n) - 1)
});
ji("Sine", function(n) {
    return n === 1 ? 1 : -vv(n * gv) + 1
});
ji("Back", Jl("in"), Jl("out"), Jl());
St.SteppedEase = St.steps = Pr.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var r = 1 / t
          , i = t + (e ? 0 : 1)
          , s = e ? 1 : 0
          , o = 1 - $t;
        return function(a) {
            return ((i * aa(0, o, a) | 0) + s) * r
        }
    }
};
Es.ease = St["quad.out"];
ur("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
    return Ph += n + "," + n + "Params,"
});
var pm = function(t, e) {
    this.id = xv++,
    t._gsap = this,
    this.target = t,
    this.harness = e,
    this.get = e ? e.get : Xp,
    this.set = e ? e.getSetter : Ih
}
  , Wo = function() {
    function n(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        ks(this, +e.duration, 1, 1),
        this.data = e.data,
        ie && (this._ctx = ie,
        ie.data.push(this)),
        Vo || br.wake()
    }
    var t = n.prototype;
    return t.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    t.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        ks(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(r, i) {
        if (zs(),
        !arguments.length)
            return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
            for (Bl(this, r),
            !s._dp || s.parent || Kp(s, this); s && s.parent; )
                s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0),
                s = s.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && dn(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === $t || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        Hp(this, r, i)),
        this
    }
    ,
    t.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Mf(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    t.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    t.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Mf(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    t.iteration = function(r, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? Is(this._tTime, s) + 1 : 1
    }
    ,
    t.timeScale = function(r, i) {
        if (!arguments.length)
            return this._rts === -$t ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var s = this.parent && this._ts ? gl(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -$t ? 0 : this._rts,
        this.totalTime(aa(-Math.abs(this._delay), this._tDur, s), i !== !1),
        Dl(this),
        Av(this)
    }
    ,
    t.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (zs(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== $t && (this._tTime -= $t)))),
        this) : this._ps
    }
    ,
    t.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && dn(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(r) {
        return this._start + (lr(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? gl(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(r) {
        r === void 0 && (r = Sv);
        var i = Ue;
        return Ue = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Ue = i,
        this
    }
    ,
    t.globalTime = function(r) {
        for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            s = i._start + s / (Math.abs(i._ts) || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : s
    }
    ,
    t.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        Of(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            Of(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    t.seek = function(r, i) {
        return this.totalTime(Er(this, r), lr(i))
    }
    ,
    t.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, lr(i))
    }
    ,
    t.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -$t : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -$t,
        this
    }
    ,
    t.isActive = function() {
        var r = this.parent || this._dp, i = this._start, s;
        return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - $t)
    }
    ,
    t.eventCallback = function(r, i, s) {
        var o = this.vars;
        return arguments.length > 1 ? (i ? (o[r] = i,
        s && (o[r + "Params"] = s),
        r === "onUpdate" && (this._onUpdate = i)) : delete o[r],
        this) : o[r]
    }
    ,
    t.then = function(r) {
        var i = this;
        return new Promise(function(s) {
            var o = se(r) ? r : jp
              , a = function() {
                var u = i.then;
                i.then = null,
                se(o) && (o = o(i)) && (o.then || o === i) && (i.then = u),
                s(o),
                i.then = u
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
        }
        )
    }
    ,
    t.kill = function() {
        oo(this)
    }
    ,
    n
}();
Nr(Wo.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -$t,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var qe = function(n) {
    Rp(t, n);
    function t(r, i) {
        var s;
        return r === void 0 && (r = {}),
        s = n.call(this, r) || this,
        s.labels = {},
        s.smoothChildTiming = !!r.smoothChildTiming,
        s.autoRemoveChildren = !!r.autoRemoveChildren,
        s._sort = lr(r.sortChildren),
        Kt && dn(r.parent || Kt, Tn(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && Zp(Tn(s), r.scrollTrigger),
        s
    }
    var e = t.prototype;
    return e.to = function(i, s, o) {
        return bo(0, arguments, this),
        this
    }
    ,
    e.from = function(i, s, o) {
        return bo(1, arguments, this),
        this
    }
    ,
    e.fromTo = function(i, s, o, a) {
        return bo(2, arguments, this),
        this
    }
    ,
    e.set = function(i, s, o) {
        return s.duration = 0,
        s.parent = this,
        yo(s).repeatDelay || (s.repeat = 0),
        s.immediateRender = !!s.immediateRender,
        new pe(i,s,Er(this, o),1),
        this
    }
    ,
    e.call = function(i, s, o) {
        return dn(this, pe.delayedCall(0, i, s), o)
    }
    ,
    e.staggerTo = function(i, s, o, a, l, u, c) {
        return o.duration = s,
        o.stagger = o.stagger || a,
        o.onComplete = u,
        o.onCompleteParams = c,
        o.parent = this,
        new pe(i,o,Er(this, l)),
        this
    }
    ,
    e.staggerFrom = function(i, s, o, a, l, u, c) {
        return o.runBackwards = 1,
        yo(o).immediateRender = lr(o.immediateRender),
        this.staggerTo(i, s, o, a, l, u, c)
    }
    ,
    e.staggerFromTo = function(i, s, o, a, l, u, c, f) {
        return a.startAt = o,
        yo(a).immediateRender = lr(a.immediateRender),
        this.staggerTo(i, s, a, l, u, c, f)
    }
    ,
    e.render = function(i, s, o) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : Pe(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), d, h, m, p, g, x, v, _, y, S, O, w;
        if (this !== Kt && c > l && i >= 0 && (c = l),
        c !== this._tTime || o || f) {
            if (a !== this._time && u && (c += this._time - a,
            i += this._time - a),
            d = c,
            y = this._start,
            _ = this._ts,
            x = !_,
            f && (u || (a = this._zTime),
            (i || !s) && (this._zTime = i)),
            this._repeat) {
                if (O = this._yoyo,
                g = u + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(g * 100 + i, s, o);
                if (d = Pe(c % g),
                c === l ? (p = this._repeat,
                d = u) : (p = ~~(c / g),
                p && p === c / g && (d = u,
                p--),
                d > u && (d = u)),
                S = Is(this._tTime, g),
                !a && this._tTime && S !== p && this._tTime - S * g - this._dur <= 0 && (S = p),
                O && p & 1 && (d = u - d,
                w = 1),
                p !== S && !this._lock) {
                    var P = O && S & 1
                      , T = P === (O && p & 1);
                    if (p < S && (P = !P),
                    a = P ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(a || (w ? 0 : Pe(p * g)), s, !u)._lock = 0,
                    this._tTime = c,
                    !s && this.parent && Cr(this, "onRepeat"),
                    this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
                    a && a !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    T && (this._lock = 2,
                    a = P ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !w && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !x)
                        return this;
                    fm(this, w)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (v = Fv(this, Pe(a), Pe(d)),
            v && (c -= d - (d = v._start))),
            this._tTime = c,
            this._time = d,
            this._act = !_,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            a = 0),
            !a && d && !s && !p && (Cr(this, "onStart"),
            this._tTime !== c))
                return this;
            if (d >= a && i >= 0)
                for (h = this._first; h; ) {
                    if (m = h._next,
                    (h._act || d >= h._start) && h._ts && v !== h) {
                        if (h.parent !== this)
                            return this.render(i, s, o);
                        if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, s, o),
                        d !== this._time || !this._ts && !x) {
                            v = 0,
                            m && (c += this._zTime = -$t);
                            break
                        }
                    }
                    h = m
                }
            else {
                h = this._last;
                for (var M = i < 0 ? i : d; h; ) {
                    if (m = h._prev,
                    (h._act || M <= h._end) && h._ts && v !== h) {
                        if (h.parent !== this)
                            return this.render(i, s, o);
                        if (h.render(h._ts > 0 ? (M - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (M - h._start) * h._ts, s, o || Ue && (h._initted || h._startAt)),
                        d !== this._time || !this._ts && !x) {
                            v = 0,
                            m && (c += this._zTime = M ? -$t : $t);
                            break
                        }
                    }
                    h = m
                }
            }
            if (v && !s && (this.pause(),
            v.render(d >= a ? 0 : -$t)._zTime = d >= a ? 1 : -1,
            this._ts))
                return this._start = y,
                Dl(this),
                this.render(i, s, o);
            this._onUpdate && !s && Cr(this, "onUpdate", !0),
            (c === l && this._tTime >= this.totalDuration() || !c && a) && (y === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && ni(this, 1),
            !s && !(i < 0 && !a) && (c || a || !l) && (Cr(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    e.add = function(i, s) {
        var o = this;
        if (Rn(s) || (s = Er(this, s, i)),
        !(i instanceof Wo)) {
            if ($e(i))
                return i.forEach(function(a) {
                    return o.add(a, s)
                }),
                this;
            if (Me(i))
                return this.addLabel(i, s);
            if (se(i))
                i = pe.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? dn(this, i, s) : this
    }
    ,
    e.getChildren = function(i, s, o, a) {
        i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Lr);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof pe ? s && l.push(u) : (o && l.push(u),
            i && l.push.apply(l, u.getChildren(!0, s, o)))),
            u = u._next;
        return l
    }
    ,
    e.getById = function(i) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
            if (s[o].vars.id === i)
                return s[o]
    }
    ,
    e.remove = function(i) {
        return Me(i) ? this.removeLabel(i) : se(i) ? this.killTweensOf(i) : (Ll(this, i),
        i === this._recent && (this._recent = this._last),
        Fi(this))
    }
    ,
    e.totalTime = function(i, s) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Pe(br.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        n.prototype.totalTime.call(this, i, s),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    e.addLabel = function(i, s) {
        return this.labels[i] = Er(this, s),
        this
    }
    ,
    e.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    e.addPause = function(i, s, o) {
        var a = pe.delayedCall(0, s || No, o);
        return a.data = "isPause",
        this._hasPause = 1,
        dn(this, a, Er(this, i))
    }
    ,
    e.removePause = function(i) {
        var s = this._first;
        for (i = Er(this, i); s; )
            s._start === i && s.data === "isPause" && ni(s),
            s = s._next
    }
    ,
    e.killTweensOf = function(i, s, o) {
        for (var a = this.getTweensOf(i, o), l = a.length; l--; )
            Hn !== a[l] && a[l].kill(i, s);
        return this
    }
    ,
    e.getTweensOf = function(i, s) {
        for (var o = [], a = Dr(i), l = this._first, u = Rn(s), c; l; )
            l instanceof pe ? wv(l._targets, a) && (u ? (!Hn || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
            l = l._next;
        return o
    }
    ,
    e.tweenTo = function(i, s) {
        s = s || {};
        var o = this, a = Er(o, i), l = s, u = l.startAt, c = l.onStart, f = l.onStartParams, d = l.immediateRender, h, m = pe.to(o, Nr({
            ease: s.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: s.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale()) || $t,
            onStart: function() {
                if (o.pause(),
                !h) {
                    var g = s.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale());
                    m._dur !== g && ks(m, g, 0, 1).render(m._time, !0, !0),
                    h = 1
                }
                c && c.apply(m, f || [])
            }
        }, s));
        return d ? m.render(0) : m
    }
    ,
    e.tweenFromTo = function(i, s, o) {
        return this.tweenTo(s, Nr({
            startAt: {
                time: Er(this, i)
            }
        }, o))
    }
    ,
    e.recent = function() {
        return this._recent
    }
    ,
    e.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        Ff(this, Er(this, i))
    }
    ,
    e.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        Ff(this, Er(this, i), 1)
    }
    ,
    e.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + $t)
    }
    ,
    e.shiftChildren = function(i, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= o && (a._start += i,
            a._end += i),
            a = a._next;
        if (s)
            for (u in l)
                l[u] >= o && (l[u] += i);
        return Fi(this)
    }
    ,
    e.invalidate = function(i) {
        var s = this._first;
        for (this._lock = 0; s; )
            s.invalidate(i),
            s = s._next;
        return n.prototype.invalidate.call(this, i)
    }
    ,
    e.clear = function(i) {
        i === void 0 && (i = !0);
        for (var s = this._first, o; s; )
            o = s._next,
            this.remove(s),
            s = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Fi(this)
    }
    ,
    e.totalDuration = function(i) {
        var s = 0, o = this, a = o._last, l = Lr, u, c, f;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
        if (o._dirty) {
            for (f = o.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                c = a._start,
                c > l && o._sort && a._ts && !o._lock ? (o._lock = 1,
                dn(o, a, c - a._delay, 1)._lock = 0) : l = c,
                c < 0 && a._ts && (s -= c,
                (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts,
                o._time -= c,
                o._tTime -= c),
                o.shiftChildren(-c, !1, -1 / 0),
                l = 0),
                a._end > s && a._ts && (s = a._end),
                a = u;
            ks(o, o === Kt && o._time > s ? o._time : s, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    t.updateRoot = function(i) {
        if (Kt._ts && (Hp(Kt, gl(i, Kt)),
        Wp = br.frame),
        br.frame >= Af) {
            Af += Tr.autoSleep || 120;
            var s = Kt._first;
            if ((!s || !s._ts) && Tr.autoSleep && br._listeners.length < 2) {
                for (; s && !s._ts; )
                    s = s._next;
                s || br.sleep()
            }
        }
    }
    ,
    t
}(Wo);
Nr(qe.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Hv = function(t, e, r, i, s, o, a) {
    var l = new cr(this._pt,t,e,0,1,ym,null,s), u = 0, c = 0, f, d, h, m, p, g, x, v;
    for (l.b = r,
    l.e = i,
    r += "",
    i += "",
    (x = ~i.indexOf("random(")) && (i = Go(i)),
    o && (v = [r, i],
    o(v, t, e),
    r = v[0],
    i = v[1]),
    d = r.match(ql) || []; f = ql.exec(i); )
        m = f[0],
        p = i.substring(u, f.index),
        h ? h = (h + 1) % 5 : p.substr(-5) === "rgba(" && (h = 1),
        m !== d[c++] && (g = parseFloat(d[c - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: g,
            c: m.charAt(1) === "=" ? ys(g, m) - g : parseFloat(m) - g,
            m: h && h < 4 ? Math.round : 0
        },
        u = ql.lastIndex);
    return l.c = u < i.length ? i.substring(u, i.length) : "",
    l.fp = a,
    (Up.test(i) || x) && (l.e = 0),
    this._pt = l,
    l
}, Oh = function(t, e, r, i, s, o, a, l, u, c) {
    se(i) && (i = i(s || 0, t, o));
    var f = t[e], d = r !== "get" ? r : se(f) ? u ? t[e.indexOf("set") || !se(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f, h = se(f) ? u ? Zv : vm : Eh, m;
    if (Me(i) && (~i.indexOf("random(") && (i = Go(i)),
    i.charAt(1) === "=" && (m = ys(d, i) + (De(d) || 0),
    (m || m === 0) && (i = m))),
    !c || d !== i || dc)
        return !isNaN(d * i) && i !== "" ? (m = new cr(this._pt,t,e,+d || 0,i - (d || 0),typeof f == "boolean" ? Jv : _m,0,h),
        u && (m.fp = u),
        a && m.modifier(a, this, t),
        this._pt = m) : (!f && !(e in t) && Th(e, i),
        Hv.call(this, t, e, d, i, h, l || Tr.stringFilter, u))
}, Yv = function(t, e, r, i, s) {
    if (se(t) && (t = So(t, s, e, r, i)),
    !vn(t) || t.style && t.nodeType || $e(t) || Dp(t))
        return Me(t) ? So(t, s, e, r, i) : t;
    var o = {}, a;
    for (a in t)
        o[a] = So(t[a], s, e, r, i);
    return o
}, mm = function(t, e, r, i, s, o) {
    var a, l, u, c;
    if (yr[t] && (a = new yr[t]).init(s, a.rawVars ? e[t] : Yv(e[t], i, s, o, r), r, i, o) !== !1 && (r._pt = l = new cr(r._pt,s,t,0,1,a.render,a,0,a.priority),
    r !== ps))
        for (u = r._ptLookup[r._targets.indexOf(s)],
        c = a._props.length; c--; )
            u[a._props[c]] = l;
    return a
}, Hn, dc, Fh = function n(t, e, r) {
    var i = t.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, f = i.yoyoEase, d = i.keyframes, h = i.autoRevert, m = t._dur, p = t._startAt, g = t._targets, x = t.parent, v = x && x.data === "nested" ? x.vars.targets : g, _ = t._overwrite === "auto" && !bh, y = t.timeline, S, O, w, P, T, M, B, U, z, L, V, G, k;
    if (y && (!d || !s) && (s = "none"),
    t._ease = Ei(s, Es.ease),
    t._yEase = f ? hm(Ei(f === !0 ? s : f, Es.ease)) : 0,
    f && t._yoyo && !t._repeat && (f = t._yEase,
    t._yEase = t._ease,
    t._ease = f),
    t._from = !y && !!i.runBackwards,
    !y || d && !i.stagger) {
        if (U = g[0] ? Oi(g[0]).harness : 0,
        G = U && i[U.prop],
        S = ml(i, Ah),
        p && (p._zTime < 0 && p.progress(1),
        e < 0 && c && a && !h ? p.render(-1, !0) : p.revert(c && m ? Ga : bv),
        p._lazy = 0),
        o) {
            if (ni(t._startAt = pe.set(g, Nr({
                data: "isStart",
                overwrite: !1,
                parent: x,
                immediateRender: !0,
                lazy: !p && lr(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return Cr(t, "onUpdate")
                }
                ,
                stagger: 0
            }, o))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (Ue || !a && !h) && t._startAt.revert(Ga),
            a && m && e <= 0 && r <= 0) {
                e && (t._zTime = e);
                return
            }
        } else if (c && m && !p) {
            if (e && (a = !1),
            w = Nr({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && lr(l),
                immediateRender: a,
                stagger: 0,
                parent: x
            }, S),
            G && (w[U.prop] = G),
            ni(t._startAt = pe.set(g, w)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (Ue ? t._startAt.revert(Ga) : t._startAt.render(-1, !0)),
            t._zTime = e,
            !a)
                n(t._startAt, $t, $t);
            else if (!e)
                return
        }
        for (t._pt = t._ptCache = 0,
        l = m && lr(l) || l && !m,
        O = 0; O < g.length; O++) {
            if (T = g[O],
            B = T._gsap || Mh(g)[O]._gsap,
            t._ptLookup[O] = L = {},
            ac[B.id] && Jn.length && pl(),
            V = v === g ? O : v.indexOf(T),
            U && (z = new U).init(T, G || S, t, V, v) !== !1 && (t._pt = P = new cr(t._pt,T,z.name,0,1,z.render,z,0,z.priority),
            z._props.forEach(function(X) {
                L[X] = P
            }),
            z.priority && (M = 1)),
            !U || G)
                for (w in S)
                    yr[w] && (z = mm(w, S, t, V, T, v)) ? z.priority && (M = 1) : L[w] = P = Oh.call(t, T, w, "get", S[w], V, v, 0, i.stringFilter);
            t._op && t._op[O] && t.kill(T, t._op[O]),
            _ && t._pt && (Hn = t,
            Kt.killTweensOf(T, L, t.globalTime(e)),
            k = !t.parent,
            Hn = 0),
            t._pt && l && (ac[B.id] = 1)
        }
        M && bm(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = u,
    t._initted = (!t._op || t._pt) && !k,
    d && e <= 0 && y.render(Lr, !0, !0)
}, jv = function(t, e, r, i, s, o, a, l) {
    var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, f, d, h;
    if (!u)
        for (u = t._ptCache[e] = [],
        d = t._ptLookup,
        h = t._targets.length; h--; ) {
            if (c = d[h][e],
            c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
                    c = c._next;
            if (!c)
                return dc = 1,
                t.vars[e] = "+=0",
                Fh(t, a),
                dc = 0,
                l ? $o(e + " not eligible for reset") : 1;
            u.push(c)
        }
    for (h = u.length; h--; )
        f = u[h],
        c = f._pt || f,
        c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c,
        c.c = r - c.s,
        f.e && (f.e = le(r) + De(f.e)),
        f.b && (f.b = c.s + De(f.b))
}, qv = function(t, e) {
    var r = t[0] ? Oi(t[0]).harness : 0, i = r && r.aliases, s, o, a, l;
    if (!i)
        return e;
    s = $i({}, e);
    for (o in i)
        if (o in s)
            for (l = i[o].split(","),
            a = l.length; a--; )
                s[l[a]] = s[o];
    return s
}, Kv = function(t, e, r, i) {
    var s = e.ease || i || "power1.inOut", o, a;
    if ($e(e))
        a = r[t] || (r[t] = []),
        e.forEach(function(l, u) {
            return a.push({
                t: u / (e.length - 1) * 100,
                v: l,
                e: s
            })
        });
    else
        for (o in e)
            a = r[o] || (r[o] = []),
            o === "ease" || a.push({
                t: parseFloat(t),
                v: e[o],
                e: s
            })
}, So = function(t, e, r, i, s) {
    return se(t) ? t.call(e, r, i, s) : Me(t) && ~t.indexOf("random(") ? Go(t) : t
}, gm = Ph + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", xm = {};
ur(gm + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
    return xm[n] = 1
});
var pe = function(n) {
    Rp(t, n);
    function t(r, i, s, o) {
        var a;
        typeof i == "number" && (s.duration = i,
        i = s,
        s = null),
        a = n.call(this, o ? i : yo(i)) || this;
        var l = a.vars, u = l.duration, c = l.delay, f = l.immediateRender, d = l.stagger, h = l.overwrite, m = l.keyframes, p = l.defaults, g = l.scrollTrigger, x = l.yoyoEase, v = i.parent || Kt, _ = ($e(r) || Dp(r) ? Rn(r[0]) : "length"in i) ? [r] : Dr(r), y, S, O, w, P, T, M, B;
        if (a._targets = _.length ? Mh(_) : $o("GSAP target " + r + " not found. https://gsap.com", !Tr.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = h,
        m || d || da(u) || da(c)) {
            if (i = a.vars,
            y = a.timeline = new qe({
                data: "nested",
                defaults: p || {},
                targets: v && v.data === "nested" ? v.vars.targets : _
            }),
            y.kill(),
            y.parent = y._dp = Tn(a),
            y._start = 0,
            d || da(u) || da(c)) {
                if (w = _.length,
                M = d && em(d),
                vn(d))
                    for (P in d)
                        ~gm.indexOf(P) && (B || (B = {}),
                        B[P] = d[P]);
                for (S = 0; S < w; S++)
                    O = ml(i, xm),
                    O.stagger = 0,
                    x && (O.yoyoEase = x),
                    B && $i(O, B),
                    T = _[S],
                    O.duration = +So(u, Tn(a), S, T, _),
                    O.delay = (+So(c, Tn(a), S, T, _) || 0) - a._delay,
                    !d && w === 1 && O.delay && (a._delay = c = O.delay,
                    a._start += c,
                    O.delay = 0),
                    y.to(T, O, M ? M(S, T, _) : 0),
                    y._ease = St.none;
                y.duration() ? u = c = 0 : a.timeline = 0
            } else if (m) {
                yo(Nr(y.vars.defaults, {
                    ease: "none"
                })),
                y._ease = Ei(m.ease || i.ease || "none");
                var U = 0, z, L, V;
                if ($e(m))
                    m.forEach(function(G) {
                        return y.to(_, G, ">")
                    }),
                    y.duration();
                else {
                    O = {};
                    for (P in m)
                        P === "ease" || P === "easeEach" || Kv(P, m[P], O, m.easeEach);
                    for (P in O)
                        for (z = O[P].sort(function(G, k) {
                            return G.t - k.t
                        }),
                        U = 0,
                        S = 0; S < z.length; S++)
                            L = z[S],
                            V = {
                                ease: L.e,
                                duration: (L.t - (S ? z[S - 1].t : 0)) / 100 * u
                            },
                            V[P] = L.v,
                            y.to(_, V, U),
                            U += V.duration;
                    y.duration() < u && y.to({}, {
                        duration: u - y.duration()
                    })
                }
            }
            u || a.duration(u = y.duration())
        } else
            a.timeline = 0;
        return h === !0 && !bh && (Hn = Tn(a),
        Kt.killTweensOf(_),
        Hn = 0),
        dn(v, Tn(a), s),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (f || !u && !m && a._start === Pe(v._time) && lr(f) && Pv(Tn(a)) && v.data !== "nested") && (a._tTime = -$t,
        a.render(Math.max(0, -c) || 0)),
        g && Zp(Tn(a), g),
        a
    }
    var e = t.prototype;
    return e.render = function(i, s, o) {
        var a = this._time, l = this._tDur, u = this._dur, c = i < 0, f = i > l - $t && !c ? l : i < $t ? 0 : i, d, h, m, p, g, x, v, _, y;
        if (!u)
            Ov(this, i, s, o);
        else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (d = f,
            _ = this.timeline,
            this._repeat) {
                if (p = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(p * 100 + i, s, o);
                if (d = Pe(f % p),
                f === l ? (m = this._repeat,
                d = u) : (m = ~~(f / p),
                m && m === Pe(f / p) && (d = u,
                m--),
                d > u && (d = u)),
                x = this._yoyo && m & 1,
                x && (y = this._yEase,
                d = u - d),
                g = Is(this._tTime, p),
                d === a && !o && this._initted && m === g)
                    return this._tTime = f,
                    this;
                m !== g && (_ && this._yEase && fm(_, x),
                this.vars.repeatRefresh && !x && !this._lock && this._time !== u && this._initted && (this._lock = o = 1,
                this.render(Pe(p * m), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Qp(this, c ? i : d, o, s, f))
                    return this._tTime = 0,
                    this;
                if (a !== this._time && !(o && this.vars.repeatRefresh && m !== g))
                    return this;
                if (u !== this._dur)
                    return this.render(i, s, o)
            }
            if (this._tTime = f,
            this._time = d,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = v = (y || this._ease)(d / u),
            this._from && (this.ratio = v = 1 - v),
            d && !a && !s && !m && (Cr(this, "onStart"),
            this._tTime !== f))
                return this;
            for (h = this._pt; h; )
                h.r(v, h.d),
                h = h._next;
            _ && _.render(i < 0 ? i : !d && x ? -$t : _._dur * _._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i),
            this._onUpdate && !s && (c && lc(this, i, s, o),
            Cr(this, "onUpdate")),
            this._repeat && m !== g && this.vars.onRepeat && !s && this.parent && Cr(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && lc(this, i, !0, !0),
            (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && ni(this, 1),
            !s && !(c && !a) && (f || a || x) && (Cr(this, f === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    e.targets = function() {
        return this._targets
    }
    ,
    e.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        n.prototype.invalidate.call(this, i)
    }
    ,
    e.resetTo = function(i, s, o, a, l) {
        Vo || br.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || Fh(this, u),
        c = this._ease(u / this._dur),
        jv(this, i, s, o, a, c, u, l) ? this.resetTo(i, s, o, a, 1) : (Bl(this, 0),
        this.parent || qp(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    e.kill = function(i, s) {
        if (s === void 0 && (s = "all"),
        !i && (!s || s === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? oo(this) : this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, s, Hn && Hn.vars.overwrite !== !0)._first || oo(this),
            this.parent && o !== this.timeline.totalDuration() && ks(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var a = this._targets, l = i ? Dr(i) : a, u = this._ptLookup, c = this._pt, f, d, h, m, p, g, x;
        if ((!s || s === "all") && Tv(a, l))
            return s === "all" && (this._pt = 0),
            oo(this);
        for (f = this._op = this._op || [],
        s !== "all" && (Me(s) && (p = {},
        ur(s, function(v) {
            return p[v] = 1
        }),
        s = p),
        s = qv(a, s)),
        x = a.length; x--; )
            if (~l.indexOf(a[x])) {
                d = u[x],
                s === "all" ? (f[x] = s,
                m = d,
                h = {}) : (h = f[x] = f[x] || {},
                m = s);
                for (p in m)
                    g = d && d[p],
                    g && ((!("kill"in g.d) || g.d.kill(p) === !0) && Ll(this, g, "_pt"),
                    delete d[p]),
                    h !== "all" && (h[p] = 1)
            }
        return this._initted && !this._pt && c && oo(this),
        this
    }
    ,
    t.to = function(i, s) {
        return new t(i,s,arguments[2])
    }
    ,
    t.from = function(i, s) {
        return bo(1, arguments)
    }
    ,
    t.delayedCall = function(i, s, o, a) {
        return new t(s,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: s,
            onReverseComplete: s,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }
    ,
    t.fromTo = function(i, s, o) {
        return bo(2, arguments)
    }
    ,
    t.set = function(i, s) {
        return s.duration = 0,
        s.repeatDelay || (s.repeat = 0),
        new t(i,s)
    }
    ,
    t.killTweensOf = function(i, s, o) {
        return Kt.killTweensOf(i, s, o)
    }
    ,
    t
}(Wo);
Nr(pe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
ur("staggerTo,staggerFrom,staggerFromTo", function(n) {
    pe[n] = function() {
        var t = new qe
          , e = cc.call(arguments, 0);
        return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0),
        t[n].apply(t, e)
    }
});
var Eh = function(t, e, r) {
    return t[e] = r
}
  , vm = function(t, e, r) {
    return t[e](r)
}
  , Zv = function(t, e, r, i) {
    return t[e](i.fp, r)
}
  , Qv = function(t, e, r) {
    return t.setAttribute(e, r)
}
  , Ih = function(t, e) {
    return se(t[e]) ? vm : Sh(t[e]) && t.setAttribute ? Qv : Eh
}
  , _m = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}
  , Jv = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
  , ym = function(t, e) {
    var r = e._pt
      , i = "";
    if (!t && e.b)
        i = e.b;
    else if (t === 1 && e.e)
        i = e.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i,
            r = r._next;
        i += e.c
    }
    e.set(e.t, e.p, i, e)
}
  , kh = function(t, e) {
    for (var r = e._pt; r; )
        r.r(t, r.d),
        r = r._next
}
  , t_ = function(t, e, r, i) {
    for (var s = this._pt, o; s; )
        o = s._next,
        s.p === i && s.modifier(t, e, r),
        s = o
}
  , e_ = function(t) {
    for (var e = this._pt, r, i; e; )
        i = e._next,
        e.p === t && !e.op || e.op === t ? Ll(this, e, "_pt") : e.dep || (r = 1),
        e = i;
    return !r
}
  , r_ = function(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
}
  , bm = function(t) {
    for (var e = t._pt, r, i, s, o; e; ) {
        for (r = e._next,
        i = s; i && i.pr > e.pr; )
            i = i._next;
        (e._prev = i ? i._prev : o) ? e._prev._next = e : s = e,
        (e._next = i) ? i._prev = e : o = e,
        e = r
    }
    t._pt = s
}
  , cr = function() {
    function n(e, r, i, s, o, a, l, u, c) {
        this.t = r,
        this.s = s,
        this.c = o,
        this.p = i,
        this.r = a || _m,
        this.d = l || this,
        this.set = u || Eh,
        this.pr = c || 0,
        this._next = e,
        e && (e._prev = this)
    }
    var t = n.prototype;
    return t.modifier = function(r, i, s) {
        this.mSet = this.mSet || this.set,
        this.set = r_,
        this.m = r,
        this.mt = s,
        this.tween = i
    }
    ,
    n
}();
ur(Ph + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
    return Ah[n] = 1
});
Pr.TweenMax = Pr.TweenLite = pe;
Pr.TimelineLite = Pr.TimelineMax = qe;
Kt = new qe({
    sortChildren: !1,
    defaults: Es,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Tr.stringFilter = cm;
var Ii = []
  , Wa = {}
  , n_ = []
  , If = 0
  , i_ = 0
  , tu = function(t) {
    return (Wa[t] || n_).map(function(e) {
        return e()
    })
}
  , pc = function() {
    var t = Date.now()
      , e = [];
    t - If > 2 && (tu("matchMediaInit"),
    Ii.forEach(function(r) {
        var i = r.queries, s = r.conditions, o, a, l, u;
        for (a in i)
            o = Ir.matchMedia(i[a]).matches,
            o && (l = 1),
            o !== s[a] && (s[a] = o,
            u = 1);
        u && (r.revert(),
        l && e.push(r))
    }),
    tu("matchMediaRevert"),
    e.forEach(function(r) {
        return r.onMatch(r, function(i) {
            return r.add(null, i)
        })
    }),
    If = t,
    tu("matchMedia"))
}
  , Sm = function() {
    function n(e, r) {
        this.selector = r && hc(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = i_++,
        e && this.add(e)
    }
    var t = n.prototype;
    return t.add = function(r, i, s) {
        se(r) && (s = i,
        i = r,
        r = se);
        var o = this
          , a = function() {
            var u = ie, c = o.selector, f;
            return u && u !== o && u.data.push(o),
            s && (o.selector = hc(s)),
            ie = o,
            f = i.apply(o, arguments),
            se(f) && o._r.push(f),
            ie = u,
            o.selector = c,
            o.isReverted = !1,
            f
        };
        return o.last = a,
        r === se ? a(o, function(l) {
            return o.add(null, l)
        }) : r ? o[r] = a : a
    }
    ,
    t.ignore = function(r) {
        var i = ie;
        ie = null,
        r(this),
        ie = i
    }
    ,
    t.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof n ? r.push.apply(r, i.getTweens()) : i instanceof pe && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(r, i) {
        var s = this;
        if (r ? function() {
            for (var a = s.getTweens(), l = s.data.length, u; l--; )
                u = s.data[l],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(c) {
                    return a.splice(a.indexOf(c), 1)
                }));
            for (a.map(function(c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function(c, f) {
                return f.g - c.g || -1 / 0
            }).forEach(function(c) {
                return c.t.revert(r)
            }),
            l = s.data.length; l--; )
                u = s.data[l],
                u instanceof qe ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof pe) && u.revert && u.revert(r);
            s._r.forEach(function(c) {
                return c(r, s)
            }),
            s.isReverted = !0
        }() : this.data.forEach(function(a) {
            return a.kill && a.kill()
        }),
        this.clear(),
        i)
            for (var o = Ii.length; o--; )
                Ii[o].id === this.id && Ii.splice(o, 1)
    }
    ,
    t.revert = function(r) {
        this.kill(r || {})
    }
    ,
    n
}()
  , s_ = function() {
    function n(e) {
        this.contexts = [],
        this.scope = e
    }
    var t = n.prototype;
    return t.add = function(r, i, s) {
        vn(r) || (r = {
            matches: r
        });
        var o = new Sm(0,s || this.scope), a = o.conditions = {}, l, u, c;
        ie && !o.selector && (o.selector = ie.selector),
        this.contexts.push(o),
        i = o.add("onMatch", i),
        o.queries = r;
        for (u in r)
            u === "all" ? c = 1 : (l = Ir.matchMedia(r[u]),
            l && (Ii.indexOf(o) < 0 && Ii.push(o),
            (a[u] = l.matches) && (c = 1),
            l.addListener ? l.addListener(pc) : l.addEventListener("change", pc)));
        return c && i(o, function(f) {
            return o.add(null, f)
        }),
        this
    }
    ,
    t.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    n
}()
  , xl = {
    registerPlugin: function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
        e.forEach(function(i) {
            return am(i)
        })
    },
    timeline: function(t) {
        return new qe(t)
    },
    getTweensOf: function(t, e) {
        return Kt.getTweensOf(t, e)
    },
    getProperty: function(t, e, r, i) {
        Me(t) && (t = Dr(t)[0]);
        var s = Oi(t || {}).get
          , o = r ? jp : Yp;
        return r === "native" && (r = ""),
        t && (e ? o((yr[e] && yr[e].get || s)(t, e, r, i)) : function(a, l, u) {
            return o((yr[a] && yr[a].get || s)(t, a, l, u))
        }
        )
    },
    quickSetter: function(t, e, r) {
        if (t = Dr(t),
        t.length > 1) {
            var i = t.map(function(c) {
                return dr.quickSetter(c, e, r)
            })
              , s = i.length;
            return function(c) {
                for (var f = s; f--; )
                    i[f](c)
            }
        }
        t = t[0] || {};
        var o = yr[e]
          , a = Oi(t)
          , l = a.harness && (a.harness.aliases || {})[e] || e
          , u = o ? function(c) {
            var f = new o;
            ps._pt = 0,
            f.init(t, r ? c + r : c, ps, 0, [t]),
            f.render(1, f),
            ps._pt && kh(1, ps)
        }
        : a.set(t, l);
        return o ? u : function(c) {
            return u(t, l, r ? c + r : c, a, 1)
        }
    },
    quickTo: function(t, e, r) {
        var i, s = dr.to(t, $i((i = {},
        i[e] = "+=0.1",
        i.paused = !0,
        i), r || {})), o = function(l, u, c) {
            return s.resetTo(e, l, u, c)
        };
        return o.tween = s,
        o
    },
    isTweening: function(t) {
        return Kt.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = Ei(t.ease, Es.ease)),
        Pf(Es, t || {})
    },
    config: function(t) {
        return Pf(Tr, t || {})
    },
    registerEffect: function(t) {
        var e = t.name
          , r = t.effect
          , i = t.plugins
          , s = t.defaults
          , o = t.extendTimeline;
        (i || "").split(",").forEach(function(a) {
            return a && !yr[a] && !Pr[a] && $o(e + " effect requires " + a + " plugin.")
        }),
        Kl[e] = function(a, l, u) {
            return r(Dr(a), Nr(l || {}, s), u)
        }
        ,
        o && (qe.prototype[e] = function(a, l, u) {
            return this.add(Kl[e](a, vn(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(t, e) {
        St[t] = Ei(e)
    },
    parseEase: function(t, e) {
        return arguments.length ? Ei(t, e) : St
    },
    getById: function(t) {
        return Kt.getById(t)
    },
    exportRoot: function(t, e) {
        t === void 0 && (t = {});
        var r = new qe(t), i, s;
        for (r.smoothChildTiming = lr(t.smoothChildTiming),
        Kt.remove(r),
        r._dp = 0,
        r._time = r._tTime = Kt._time,
        i = Kt._first; i; )
            s = i._next,
            (e || !(!i._dur && i instanceof pe && i.vars.onComplete === i._targets[0])) && dn(r, i, i._start - i._delay),
            i = s;
        return dn(Kt, r, 0),
        r
    },
    context: function(t, e) {
        return t ? new Sm(t,e) : ie
    },
    matchMedia: function(t) {
        return new s_(t)
    },
    matchMediaRefresh: function() {
        return Ii.forEach(function(t) {
            var e = t.conditions, r, i;
            for (i in e)
                e[i] && (e[i] = !1,
                r = 1);
            r && t.revert()
        }) || pc()
    },
    addEventListener: function(t, e) {
        var r = Wa[t] || (Wa[t] = []);
        ~r.indexOf(e) || r.push(e)
    },
    removeEventListener: function(t, e) {
        var r = Wa[t]
          , i = r && r.indexOf(e);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: Dv,
        wrapYoyo: Bv,
        distribute: em,
        random: nm,
        snap: rm,
        normalize: Lv,
        getUnit: De,
        clamp: Iv,
        splitColor: lm,
        toArray: Dr,
        selector: hc,
        mapRange: sm,
        pipe: zv,
        unitize: Rv,
        interpolate: Uv,
        shuffle: tm
    },
    install: Gp,
    effects: Kl,
    ticker: br,
    updateRoot: qe.updateRoot,
    plugins: yr,
    globalTimeline: Kt,
    core: {
        PropTween: cr,
        globals: Vp,
        Tween: pe,
        Timeline: qe,
        Animation: Wo,
        getCache: Oi,
        _removeLinkedListItem: Ll,
        reverting: function() {
            return Ue
        },
        context: function(t) {
            return t && ie && (ie.data.push(t),
            t._ctx = ie),
            ie
        },
        suppressOverwrites: function(t) {
            return bh = t
        }
    }
};
ur("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
    return xl[n] = pe[n]
});
br.add(qe.updateRoot);
ps = xl.to({}, {
    duration: 0
});
var o_ = function(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
    return r
}
  , a_ = function(t, e) {
    var r = t._targets, i, s, o;
    for (i in e)
        for (s = r.length; s--; )
            o = t._ptLookup[s][i],
            o && (o = o.d) && (o._pt && (o = o_(o, i)),
            o && o.modifier && o.modifier(e[i], t, r[s], i))
}
  , eu = function(t, e) {
    return {
        name: t,
        rawVars: 1,
        init: function(i, s, o) {
            o._onInit = function(a) {
                var l, u;
                if (Me(s) && (l = {},
                ur(s, function(c) {
                    return l[c] = 1
                }),
                s = l),
                e) {
                    l = {};
                    for (u in s)
                        l[u] = e(s[u]);
                    s = l
                }
                a_(a, s)
            }
        }
    }
}
  , dr = xl.registerPlugin({
    name: "attr",
    init: function(t, e, r, i, s) {
        var o, a, l;
        this.tween = r;
        for (o in e)
            l = t.getAttribute(o) || "",
            a = this.add(t, "setAttribute", (l || 0) + "", e[o], i, s, 0, 0, o),
            a.op = o,
            a.b = l,
            this._props.push(o)
    },
    render: function(t, e) {
        for (var r = e._pt; r; )
            Ue ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(t, e) {
        for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
    }
}, eu("roundProps", fc), eu("modifiers"), eu("snap", rm)) || xl;
pe.version = qe.version = dr.version = "3.12.4";
Np = 1;
wh() && zs();
St.Power0;
St.Power1;
St.Power2;
St.Power3;
St.Power4;
St.Linear;
St.Quad;
St.Cubic;
St.Quart;
St.Quint;
St.Strong;
St.Elastic;
St.Back;
St.SteppedEase;
St.Bounce;
St.Sine;
St.Expo;
St.Circ;
/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var kf, Yn, bs, zh, Ci, zf, Rh, l_ = function() {
    return typeof window < "u"
}, Ln = {}, pi = 180 / Math.PI, Ss = Math.PI / 180, Qi = Math.atan2, Rf = 1e8, Lh = /([A-Z])/g, u_ = /(left|right|width|margin|padding|x)/i, c_ = /[\s,\(]\S/, pn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, mc = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, h_ = function(t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, f_ = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
}, d_ = function(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
}, wm = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
}, Cm = function(t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
}, p_ = function(t, e, r) {
    return t.style[e] = r
}, m_ = function(t, e, r) {
    return t.style.setProperty(e, r)
}, g_ = function(t, e, r) {
    return t._gsap[e] = r
}, x_ = function(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r
}, v_ = function(t, e, r, i, s) {
    var o = t._gsap;
    o.scaleX = o.scaleY = r,
    o.renderTransform(s, o)
}, __ = function(t, e, r, i, s) {
    var o = t._gsap;
    o[e] = r,
    o.renderTransform(s, o)
}, Zt = "transform", hr = Zt + "Origin", y_ = function n(t, e) {
    var r = this
      , i = this.target
      , s = i.style
      , o = i._gsap;
    if (t in Ln && s) {
        if (this.tfm = this.tfm || {},
        t !== "transform")
            t = pn[t] || t,
            ~t.indexOf(",") ? t.split(",").forEach(function(a) {
                return r.tfm[a] = An(i, a)
            }) : this.tfm[t] = o.x ? o[t] : An(i, t),
            t === hr && (this.tfm.zOrigin = o.zOrigin);
        else
            return pn.transform.split(",").forEach(function(a) {
                return n.call(r, a, e)
            });
        if (this.props.indexOf(Zt) >= 0)
            return;
        o.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(hr, e, "")),
        t = Zt
    }
    (s || e) && this.props.push(t, e, s[t])
}, Tm = function(t) {
    t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, b_ = function() {
    var t = this.props, e = this.target, r = e.style, i = e._gsap, s, o;
    for (s = 0; s < t.length; s += 3)
        t[s + 1] ? e[t[s]] = t[s + 2] : t[s + 2] ? r[t[s]] = t[s + 2] : r.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(Lh, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            i[o] = this.tfm[o];
        i.svg && (i.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        s = Rh(),
        (!s || !s.isStart) && !r[Zt] && (Tm(r),
        i.zOrigin && r[hr] && (r[hr] += " " + i.zOrigin + "px",
        i.zOrigin = 0,
        i.renderTransform()),
        i.uncache = 1)
    }
}, Am = function(t, e) {
    var r = {
        target: t,
        props: [],
        revert: b_,
        save: y_
    };
    return t._gsap || dr.core.getCache(t),
    e && e.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, Pm, gc = function(t, e) {
    var r = Yn.createElementNS ? Yn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Yn.createElement(t);
    return r && r.style ? r : Yn.createElement(t)
}, gn = function n(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Lh, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && n(t, Rs(e) || e, 1) || ""
}, Lf = "O,Moz,ms,Ms,Webkit".split(","), Rs = function(t, e, r) {
    var i = e || Ci
      , s = i.style
      , o = 5;
    if (t in s && !r)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Lf[o] + t in s); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Lf[o] : "") + t
}, xc = function() {
    l_() && window.document && (kf = window,
    Yn = kf.document,
    bs = Yn.documentElement,
    Ci = gc("div") || {
        style: {}
    },
    gc("div"),
    Zt = Rs(Zt),
    hr = Zt + "Origin",
    Ci.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Pm = !!Rs("perspective"),
    Rh = dr.core.reverting,
    zh = 1)
}, ru = function n(t) {
    var e = gc("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, s = this.style.cssText, o;
    if (bs.appendChild(e),
    e.appendChild(this),
    this.style.display = "block",
    t)
        try {
            o = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = n
        } catch {}
    else
        this._gsapBBox && (o = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    bs.removeChild(e),
    this.style.cssText = s,
    o
}, Df = function(t, e) {
    for (var r = e.length; r--; )
        if (t.hasAttribute(e[r]))
            return t.getAttribute(e[r])
}, Mm = function(t) {
    var e;
    try {
        e = t.getBBox()
    } catch {
        e = ru.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === ru || (e = ru.call(t, !0)),
    e && !e.width && !e.x && !e.y ? {
        x: +Df(t, ["x", "cx", "x1"]) || 0,
        y: +Df(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : e
}, Om = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mm(t))
}, Ni = function(t, e) {
    if (e) {
        var r = t.style, i;
        e in Ln && e !== hr && (e = Zt),
        r.removeProperty ? (i = e.substr(0, 2),
        (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
        r.removeProperty(i === "--" ? e : e.replace(Lh, "-$1").toLowerCase())) : r.removeAttribute(e)
    }
}, jn = function(t, e, r, i, s, o) {
    var a = new cr(t._pt,e,r,0,1,o ? Cm : wm);
    return t._pt = a,
    a.b = i,
    a.e = s,
    t._props.push(r),
    a
}, Bf = {
    deg: 1,
    rad: 1,
    turn: 1
}, S_ = {
    grid: 1,
    flex: 1
}, ii = function n(t, e, r, i) {
    var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = Ci.style, l = u_.test(e), u = t.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, d = i === "px", h = i === "%", m, p, g, x;
    if (i === o || !s || Bf[i] || Bf[o])
        return s;
    if (o !== "px" && !d && (s = n(t, e, r, "px")),
    x = t.getCTM && Om(t),
    (h || o === "%") && (Ln[e] || ~e.indexOf("adius")))
        return m = x ? t.getBBox()[l ? "width" : "height"] : t[c],
        le(h ? s / m * f : s / 100 * m);
    if (a[l ? "width" : "height"] = f + (d ? o : i),
    p = ~e.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode,
    x && (p = (t.ownerSVGElement || {}).parentNode),
    (!p || p === Yn || !p.appendChild) && (p = Yn.body),
    g = p._gsap,
    g && h && g.width && l && g.time === br.time && !g.uncache)
        return le(s / g.width * f);
    if (h && (e === "height" || e === "width")) {
        var v = t.style[e];
        t.style[e] = f + i,
        m = t[c],
        v ? t.style[e] = v : Ni(t, e)
    } else
        (h || o === "%") && !S_[gn(p, "display")] && (a.position = gn(t, "position")),
        p === t && (a.position = "static"),
        p.appendChild(Ci),
        m = Ci[c],
        p.removeChild(Ci),
        a.position = "absolute";
    return l && h && (g = Oi(p),
    g.time = br.time,
    g.width = p[c]),
    le(d ? m * s / f : m && s ? f / m * s : 0)
}, An = function(t, e, r, i) {
    var s;
    return zh || xc(),
    e in pn && e !== "transform" && (e = pn[e],
    ~e.indexOf(",") && (e = e.split(",")[0])),
    Ln[e] && e !== "transform" ? (s = Ho(t, i),
    s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : _l(gn(t, hr)) + " " + s.zOrigin + "px") : (s = t.style[e],
    (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = vl[e] && vl[e](t, e, r) || gn(t, e) || Xp(t, e) || (e === "opacity" ? 1 : 0))),
    r && !~(s + "").trim().indexOf(" ") ? ii(t, e, s, r) + r : s
}, w_ = function(t, e, r, i) {
    if (!r || r === "none") {
        var s = Rs(e, t, 1)
          , o = s && gn(t, s, 1);
        o && o !== r ? (e = s,
        r = o) : e === "borderColor" && (r = gn(t, "borderTopColor"))
    }
    var a = new cr(this._pt,t.style,e,0,1,ym), l = 0, u = 0, c, f, d, h, m, p, g, x, v, _, y, S;
    if (a.b = r,
    a.e = i,
    r += "",
    i += "",
    i === "auto" && (p = t.style[e],
    t.style[e] = i,
    i = gn(t, e) || i,
    p ? t.style[e] = p : Ni(t, e)),
    c = [r, i],
    cm(c),
    r = c[0],
    i = c[1],
    d = r.match(ds) || [],
    S = i.match(ds) || [],
    S.length) {
        for (; f = ds.exec(i); )
            g = f[0],
            v = i.substring(l, f.index),
            m ? m = (m + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1),
            g !== (p = d[u++] || "") && (h = parseFloat(p) || 0,
            y = p.substr((h + "").length),
            g.charAt(1) === "=" && (g = ys(h, g) + y),
            x = parseFloat(g),
            _ = g.substr((x + "").length),
            l = ds.lastIndex - _.length,
            _ || (_ = _ || Tr.units[e] || y,
            l === i.length && (i += _,
            a.e += _)),
            y !== _ && (h = ii(t, e, p, _) || 0),
            a._pt = {
                _next: a._pt,
                p: v || u === 1 ? v : ",",
                s: h,
                c: x - h,
                m: m && m < 4 || e === "zIndex" ? Math.round : 0
            });
        a.c = l < i.length ? i.substring(l, i.length) : ""
    } else
        a.r = e === "display" && i === "none" ? Cm : wm;
    return Up.test(i) && (a.e = 0),
    this._pt = a,
    a
}, Uf = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, C_ = function(t) {
    var e = t.split(" ")
      , r = e[0]
      , i = e[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r,
    r = i,
    i = t),
    e[0] = Uf[r] || r,
    e[1] = Uf[i] || i,
    e.join(" ")
}, T_ = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
        var r = e.t, i = r.style, s = e.u, o = r._gsap, a, l, u;
        if (s === "all" || s === !0)
            i.cssText = "",
            l = 1;
        else
            for (s = s.split(","),
            u = s.length; --u > -1; )
                a = s[u],
                Ln[a] && (l = 1,
                a = a === "transformOrigin" ? hr : Zt),
                Ni(r, a);
        l && (Ni(r, Zt),
        o && (o.svg && r.removeAttribute("transform"),
        Ho(r, 1),
        o.uncache = 1,
        Tm(i)))
    }
}, vl = {
    clearProps: function(t, e, r, i, s) {
        if (s.data !== "isFromStart") {
            var o = t._pt = new cr(t._pt,e,r,0,0,T_);
            return o.u = i,
            o.pr = -10,
            o.tween = s,
            t._props.push(r),
            1
        }
    }
}, Xo = [1, 0, 0, 1, 0, 0], Fm = {}, Em = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, $f = function(t) {
    var e = gn(t, Zt);
    return Em(e) ? Xo : e.substr(7).match(Bp).map(le)
}, Dh = function(t, e) {
    var r = t._gsap || Oi(t), i = t.style, s = $f(t), o, a, l, u;
    return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix,
    s = [l.a, l.b, l.c, l.d, l.e, l.f],
    s.join(",") === "1,0,0,1,0,0" ? Xo : s) : (s === Xo && !t.offsetParent && t !== bs && !r.svg && (l = i.display,
    i.display = "block",
    o = t.parentNode,
    (!o || !t.offsetParent) && (u = 1,
    a = t.nextElementSibling,
    bs.appendChild(t)),
    s = $f(t),
    l ? i.display = l : Ni(t, "display"),
    u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : bs.removeChild(t))),
    e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
}, vc = function(t, e, r, i, s, o) {
    var a = t._gsap, l = s || Dh(t, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, d = a.yOffset || 0, h = l[0], m = l[1], p = l[2], g = l[3], x = l[4], v = l[5], _ = e.split(" "), y = parseFloat(_[0]) || 0, S = parseFloat(_[1]) || 0, O, w, P, T;
    r ? l !== Xo && (w = h * g - m * p) && (P = y * (g / w) + S * (-p / w) + (p * v - g * x) / w,
    T = y * (-m / w) + S * (h / w) - (h * v - m * x) / w,
    y = P,
    S = T) : (O = Mm(t),
    y = O.x + (~_[0].indexOf("%") ? y / 100 * O.width : y),
    S = O.y + (~(_[1] || _[0]).indexOf("%") ? S / 100 * O.height : S)),
    i || i !== !1 && a.smooth ? (x = y - u,
    v = S - c,
    a.xOffset = f + (x * h + v * p) - x,
    a.yOffset = d + (x * m + v * g) - v) : a.xOffset = a.yOffset = 0,
    a.xOrigin = y,
    a.yOrigin = S,
    a.smooth = !!i,
    a.origin = e,
    a.originIsAbsolute = !!r,
    t.style[hr] = "0px 0px",
    o && (jn(o, a, "xOrigin", u, y),
    jn(o, a, "yOrigin", c, S),
    jn(o, a, "xOffset", f, a.xOffset),
    jn(o, a, "yOffset", d, a.yOffset)),
    t.setAttribute("data-svg-origin", y + " " + S)
}, Ho = function(t, e) {
    var r = t._gsap || new pm(t);
    if ("x"in r && !e && !r.uncache)
        return r;
    var i = t.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = gn(t, hr) || "0", c, f, d, h, m, p, g, x, v, _, y, S, O, w, P, T, M, B, U, z, L, V, G, k, X, $, b, tt, Y, ht, nt, Rt;
    return c = f = d = p = g = x = v = _ = y = 0,
    h = m = 1,
    r.svg = !!(t.getCTM && Om(t)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Zt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Zt] !== "none" ? l[Zt] : "")),
    i.scale = i.rotate = i.translate = "none"),
    w = Dh(t, r.svg),
    r.svg && (r.uncache ? (X = t.getBBox(),
    u = r.xOrigin - X.x + "px " + (r.yOrigin - X.y) + "px",
    k = "") : k = !e && t.getAttribute("data-svg-origin"),
    vc(t, k || u, !!k || r.originIsAbsolute, r.smooth !== !1, w)),
    S = r.xOrigin || 0,
    O = r.yOrigin || 0,
    w !== Xo && (B = w[0],
    U = w[1],
    z = w[2],
    L = w[3],
    c = V = w[4],
    f = G = w[5],
    w.length === 6 ? (h = Math.sqrt(B * B + U * U),
    m = Math.sqrt(L * L + z * z),
    p = B || U ? Qi(U, B) * pi : 0,
    v = z || L ? Qi(z, L) * pi + p : 0,
    v && (m *= Math.abs(Math.cos(v * Ss))),
    r.svg && (c -= S - (S * B + O * z),
    f -= O - (S * U + O * L))) : (Rt = w[6],
    ht = w[7],
    b = w[8],
    tt = w[9],
    Y = w[10],
    nt = w[11],
    c = w[12],
    f = w[13],
    d = w[14],
    P = Qi(Rt, Y),
    g = P * pi,
    P && (T = Math.cos(-P),
    M = Math.sin(-P),
    k = V * T + b * M,
    X = G * T + tt * M,
    $ = Rt * T + Y * M,
    b = V * -M + b * T,
    tt = G * -M + tt * T,
    Y = Rt * -M + Y * T,
    nt = ht * -M + nt * T,
    V = k,
    G = X,
    Rt = $),
    P = Qi(-z, Y),
    x = P * pi,
    P && (T = Math.cos(-P),
    M = Math.sin(-P),
    k = B * T - b * M,
    X = U * T - tt * M,
    $ = z * T - Y * M,
    nt = L * M + nt * T,
    B = k,
    U = X,
    z = $),
    P = Qi(U, B),
    p = P * pi,
    P && (T = Math.cos(P),
    M = Math.sin(P),
    k = B * T + U * M,
    X = V * T + G * M,
    U = U * T - B * M,
    G = G * T - V * M,
    B = k,
    V = X),
    g && Math.abs(g) + Math.abs(p) > 359.9 && (g = p = 0,
    x = 180 - x),
    h = le(Math.sqrt(B * B + U * U + z * z)),
    m = le(Math.sqrt(G * G + Rt * Rt)),
    P = Qi(V, G),
    v = Math.abs(P) > 2e-4 ? P * pi : 0,
    y = nt ? 1 / (nt < 0 ? -nt : nt) : 0),
    r.svg && (k = t.getAttribute("transform"),
    r.forceCSS = t.setAttribute("transform", "") || !Em(gn(t, Zt)),
    k && t.setAttribute("transform", k))),
    Math.abs(v) > 90 && Math.abs(v) < 270 && (s ? (h *= -1,
    v += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (m *= -1,
    v += v <= 0 ? 180 : -180)),
    e = e || r.uncache,
    r.x = c - ((r.xPercent = c && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o,
    r.y = f - ((r.yPercent = f && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o,
    r.z = d + o,
    r.scaleX = le(h),
    r.scaleY = le(m),
    r.rotation = le(p) + a,
    r.rotationX = le(g) + a,
    r.rotationY = le(x) + a,
    r.skewX = v + a,
    r.skewY = _ + a,
    r.transformPerspective = y + o,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || !e && r.zOrigin || 0) && (i[hr] = _l(u)),
    r.xOffset = r.yOffset = 0,
    r.force3D = Tr.force3D,
    r.renderTransform = r.svg ? P_ : Pm ? Im : A_,
    r.uncache = 0,
    r
}, _l = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, nu = function(t, e, r) {
    var i = De(e);
    return le(parseFloat(e) + parseFloat(ii(t, "x", r + "px", i))) + i
}, A_ = function(t, e) {
    e.z = "0px",
    e.rotationY = e.rotationX = "0deg",
    e.force3D = 0,
    Im(t, e)
}, ui = "0deg", Zs = "0px", ci = ") ", Im = function(t, e) {
    var r = e || this
      , i = r.xPercent
      , s = r.yPercent
      , o = r.x
      , a = r.y
      , l = r.z
      , u = r.rotation
      , c = r.rotationY
      , f = r.rotationX
      , d = r.skewX
      , h = r.skewY
      , m = r.scaleX
      , p = r.scaleY
      , g = r.transformPerspective
      , x = r.force3D
      , v = r.target
      , _ = r.zOrigin
      , y = ""
      , S = x === "auto" && t && t !== 1 || x === !0;
    if (_ && (f !== ui || c !== ui)) {
        var O = parseFloat(c) * Ss, w = Math.sin(O), P = Math.cos(O), T;
        O = parseFloat(f) * Ss,
        T = Math.cos(O),
        o = nu(v, o, w * T * -_),
        a = nu(v, a, -Math.sin(O) * -_),
        l = nu(v, l, P * T * -_ + _)
    }
    g !== Zs && (y += "perspective(" + g + ci),
    (i || s) && (y += "translate(" + i + "%, " + s + "%) "),
    (S || o !== Zs || a !== Zs || l !== Zs) && (y += l !== Zs || S ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + ci),
    u !== ui && (y += "rotate(" + u + ci),
    c !== ui && (y += "rotateY(" + c + ci),
    f !== ui && (y += "rotateX(" + f + ci),
    (d !== ui || h !== ui) && (y += "skew(" + d + ", " + h + ci),
    (m !== 1 || p !== 1) && (y += "scale(" + m + ", " + p + ci),
    v.style[Zt] = y || "translate(0, 0)"
}, P_ = function(t, e) {
    var r = e || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, d = r.scaleY, h = r.target, m = r.xOrigin, p = r.yOrigin, g = r.xOffset, x = r.yOffset, v = r.forceCSS, _ = parseFloat(o), y = parseFloat(a), S, O, w, P, T;
    l = parseFloat(l),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    l += c),
    l || u ? (l *= Ss,
    u *= Ss,
    S = Math.cos(l) * f,
    O = Math.sin(l) * f,
    w = Math.sin(l - u) * -d,
    P = Math.cos(l - u) * d,
    u && (c *= Ss,
    T = Math.tan(u - c),
    T = Math.sqrt(1 + T * T),
    w *= T,
    P *= T,
    c && (T = Math.tan(c),
    T = Math.sqrt(1 + T * T),
    S *= T,
    O *= T)),
    S = le(S),
    O = le(O),
    w = le(w),
    P = le(P)) : (S = f,
    P = d,
    O = w = 0),
    (_ && !~(o + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (_ = ii(h, "x", o, "px"),
    y = ii(h, "y", a, "px")),
    (m || p || g || x) && (_ = le(_ + m - (m * S + p * w) + g),
    y = le(y + p - (m * O + p * P) + x)),
    (i || s) && (T = h.getBBox(),
    _ = le(_ + i / 100 * T.width),
    y = le(y + s / 100 * T.height)),
    T = "matrix(" + S + "," + O + "," + w + "," + P + "," + _ + "," + y + ")",
    h.setAttribute("transform", T),
    v && (h.style[Zt] = T)
}, M_ = function(t, e, r, i, s) {
    var o = 360, a = Me(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? pi : 1), u = l - i, c = i + u + "deg", f, d;
    return a && (f = s.split("_")[1],
    f === "short" && (u %= o,
    u !== u % (o / 2) && (u += u < 0 ? o : -o)),
    f === "cw" && u < 0 ? u = (u + o * Rf) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * Rf) % o - ~~(u / o) * o)),
    t._pt = d = new cr(t._pt,e,r,i,u,h_),
    d.e = c,
    d.u = "deg",
    t._props.push(r),
    d
}, Nf = function(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t
}, O_ = function(t, e, r) {
    var i = Nf({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, f, d, h, m;
    i.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    o[Zt] = e,
    a = Ho(r, 1),
    Ni(r, Zt),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Zt],
    o[Zt] = e,
    a = Ho(r, 1),
    o[Zt] = u);
    for (l in Ln)
        u = i[l],
        c = a[l],
        u !== c && s.indexOf(l) < 0 && (h = De(u),
        m = De(c),
        f = h !== m ? ii(r, l, u, m) : parseFloat(u),
        d = parseFloat(c),
        t._pt = new cr(t._pt,a,l,f,d - f,mc),
        t._pt.u = m || 0,
        t._props.push(l));
    Nf(a, i)
};
ur("padding,margin,Width,Radius", function(n, t) {
    var e = "Top"
      , r = "Right"
      , i = "Bottom"
      , s = "Left"
      , o = (t < 3 ? [e, r, i, s] : [e + s, e + r, i + r, i + s]).map(function(a) {
        return t < 2 ? n + a : "border" + a + n
    });
    vl[t > 1 ? "border" + n : n] = function(a, l, u, c, f) {
        var d, h;
        if (arguments.length < 4)
            return d = o.map(function(m) {
                return An(a, m, u)
            }),
            h = d.join(" "),
            h.split(d[0]).length === 5 ? d[0] : h;
        d = (c + "").split(" "),
        h = {},
        o.forEach(function(m, p) {
            return h[m] = d[p] = d[p] || d[(p - 1) / 2 | 0]
        }),
        a.init(l, h, f)
    }
});
var km = {
    name: "css",
    register: xc,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, r, i, s) {
        var o = this._props, a = t.style, l = r.vars.startAt, u, c, f, d, h, m, p, g, x, v, _, y, S, O, w, P;
        zh || xc(),
        this.styles = this.styles || Am(t),
        P = this.styles.props,
        this.tween = r;
        for (p in e)
            if (p !== "autoRound" && (c = e[p],
            !(yr[p] && mm(p, e, r, i, t, s)))) {
                if (h = typeof c,
                m = vl[p],
                h === "function" && (c = c.call(r, i, t, s),
                h = typeof c),
                h === "string" && ~c.indexOf("random(") && (c = Go(c)),
                m)
                    m(this, t, p, c, r) && (w = 1);
                else if (p.substr(0, 2) === "--")
                    u = (getComputedStyle(t).getPropertyValue(p) + "").trim(),
                    c += "",
                    ti.lastIndex = 0,
                    ti.test(u) || (g = De(u),
                    x = De(c)),
                    x ? g !== x && (u = ii(t, p, u, x) + x) : g && (c += g),
                    this.add(a, "setProperty", u, c, i, s, 0, 0, p),
                    o.push(p),
                    P.push(p, 0, a[p]);
                else if (h !== "undefined") {
                    if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, i, t, s) : l[p],
                    Me(u) && ~u.indexOf("random(") && (u = Go(u)),
                    De(u + "") || u === "auto" || (u += Tr.units[p] || De(An(t, p)) || ""),
                    (u + "").charAt(1) === "=" && (u = An(t, p))) : u = An(t, p),
                    d = parseFloat(u),
                    v = h === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    v && (c = c.substr(2)),
                    f = parseFloat(c),
                    p in pn && (p === "autoAlpha" && (d === 1 && An(t, "visibility") === "hidden" && f && (d = 0),
                    P.push("visibility", 0, a.visibility),
                    jn(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    p !== "scale" && p !== "transform" && (p = pn[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    _ = p in Ln,
                    _) {
                        if (this.styles.save(p),
                        y || (S = t._gsap,
                        S.renderTransform && !e.parseTransform || Ho(t, e.parseTransform),
                        O = e.smoothOrigin !== !1 && S.smooth,
                        y = this._pt = new cr(this._pt,a,Zt,0,1,S.renderTransform,S,0,-1),
                        y.dep = 1),
                        p === "scale")
                            this._pt = new cr(this._pt,S,"scaleY",S.scaleY,(v ? ys(S.scaleY, v + f) : f) - S.scaleY || 0,mc),
                            this._pt.u = 0,
                            o.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            P.push(hr, 0, a[hr]),
                            c = C_(c),
                            S.svg ? vc(t, c, 0, O, 0, this) : (x = parseFloat(c.split(" ")[2]) || 0,
                            x !== S.zOrigin && jn(this, S, "zOrigin", S.zOrigin, x),
                            jn(this, a, p, _l(u), _l(c)));
                            continue
                        } else if (p === "svgOrigin") {
                            vc(t, c, 1, O, 0, this);
                            continue
                        } else if (p in Fm) {
                            M_(this, S, p, d, v ? ys(d, v + c) : c);
                            continue
                        } else if (p === "smoothOrigin") {
                            jn(this, S, "smooth", S.smooth, c);
                            continue
                        } else if (p === "force3D") {
                            S[p] = c;
                            continue
                        } else if (p === "transform") {
                            O_(this, c, t);
                            continue
                        }
                    } else
                        p in a || (p = Rs(p) || p);
                    if (_ || (f || f === 0) && (d || d === 0) && !c_.test(c) && p in a)
                        g = (u + "").substr((d + "").length),
                        f || (f = 0),
                        x = De(c) || (p in Tr.units ? Tr.units[p] : g),
                        g !== x && (d = ii(t, p, u, x)),
                        this._pt = new cr(this._pt,_ ? S : a,p,d,(v ? ys(d, v + f) : f) - d,!_ && (x === "px" || p === "zIndex") && e.autoRound !== !1 ? d_ : mc),
                        this._pt.u = x || 0,
                        g !== x && x !== "%" && (this._pt.b = u,
                        this._pt.r = f_);
                    else if (p in a)
                        w_.call(this, t, p, u, v ? v + c : c);
                    else if (p in t)
                        this.add(t, p, u || t[p], v ? v + c : c, i, s);
                    else if (p !== "parseTransform") {
                        Th(p, c);
                        continue
                    }
                    _ || (p in a ? P.push(p, 0, a[p]) : P.push(p, 1, u || t[p])),
                    o.push(p)
                }
            }
        w && bm(this)
    },
    render: function(t, e) {
        if (e.tween._time || !Rh())
            for (var r = e._pt; r; )
                r.r(t, r.d),
                r = r._next;
        else
            e.styles.revert()
    },
    get: An,
    aliases: pn,
    getSetter: function(t, e, r) {
        var i = pn[e];
        return i && i.indexOf(",") < 0 && (e = i),
        e in Ln && e !== hr && (t._gsap.x || An(t, "x")) ? r && zf === r ? e === "scale" ? x_ : g_ : (zf = r || {}) && (e === "scale" ? v_ : __) : t.style && !Sh(t.style[e]) ? p_ : ~e.indexOf("-") ? m_ : Ih(t, e)
    },
    core: {
        _removeProperty: Ni,
        _getMatrix: Dh
    }
};
dr.utils.checkPrefix = Rs;
dr.core.getStyleSaver = Am;
(function(n, t, e, r) {
    var i = ur(n + "," + t + "," + e, function(s) {
        Ln[s] = 1
    });
    ur(t, function(s) {
        Tr.units[s] = "deg",
        Fm[s] = 1
    }),
    pn[i[13]] = n + "," + t,
    ur(r, function(s) {
        var o = s.split(":");
        pn[o[1]] = i[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ur("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
    Tr.units[n] = "px"
});
dr.registerPlugin(km);
var it = dr.registerPlugin(km) || dr;
it.core.Tween;
const Ul = Rl(!1);
function Yo() {
    Ul.set(!0)
}
function Bh() {
    Ul.set(!1)
}
function zm() {
    return Ul.get()
}
const ue = Object.freeze({
    SCROLL_TOP: "scroll:top",
    SCROLL_TO_HEADER: "scroll:header",
    PAGE_TRANSITION_DONE: "page-transition:done",
    SHOW_GRID_CONTROLS: "grid-controls:show",
    HIDE_GRID_CONTROLS: "grid-controls:hide",
    SHOW_ARCHIVE_LOADER: "archive-loader:show",
    HIDE_ARCHIVE_LOADER: "archive-loader:hide"
});
function F_(n) {
    return {
        all: n = n || new Map,
        on: function(t, e) {
            var r = n.get(t);
            r ? r.push(e) : n.set(t, [e])
        },
        off: function(t, e) {
            var r = n.get(t);
            r && (e ? r.splice(r.indexOf(e) >>> 0, 1) : n.set(t, []))
        },
        emit: function(t, e) {
            var r = n.get(t);
            r && r.slice().map(function(i) {
                i(e)
            }),
            (r = n.get("*")) && r.slice().map(function(i) {
                i(t, e)
            })
        }
    }
}
const Xt = F_();
Xt.once = (n, t) => {
    const e = r => {
        Xt.off(n, e),
        t(r)
    }
    ;
    Xt.on(n, e),
    t._ = e
}
;
class E_ extends fl {
    async onLeave({from: t, trigger: e, done: r}) {
        Bh(),
        e.getAttribute?.("href") !== "/" && Xt.emit(ue.HIDE_GRID_CONTROLS),
        Xt.emit(ue.HIDE_ARCHIVE_LOADER),
        Xt.once(ue.PAGE_TRANSITION_DONE, () => {
            t.remove()
        }
        ),
        it.fromTo("[data-transition-overlay]", {
            opacity: 0
        }, {
            opacity: 1,
            duration: .6
        }),
        r()
    }
    async onEnter({to: t, trigger: e, done: r}) {
        document.querySelector(".site-footer").style.zIndex = 60;
        const i = it.getProperty(".site-header", "height")
          , s = it.timeline({
            paused: !0
        });
        s.addLabel("start"),
        s.fromTo(t, {
            paddingTop: i,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: () => Ju() ? 60 : 30,
            y: "100dvh"
        }, {
            y: 0,
            duration: 1,
            ease: "power2.out"
        }),
        await s.play(),
        new URL(window.location.href).pathname === "/" && Xt.emit(ue.SHOW_GRID_CONTROLS),
        Ju() && it.fromTo(".site-header", {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: .8
        }),
        it.set(".navigation", {
            zIndex: -9999,
            left: "-300dvw"
        }),
        _s.set(!1),
        it.set([t, "[data-transition-overlay]", ".site-footer"], {
            clearProps: "all"
        }),
        Yo(),
        Xt.emit(ue.PAGE_TRANSITION_DONE),
        Xt.emit(ue.SCROLL_TOP),
        r()
    }
}
class I_ extends fl {
    onLeave({from: t, trigger: e, done: r}) {
        Bh(),
        Xt.emit(ue.HIDE_GRID_CONTROLS),
        Xt.once(ue.PAGE_TRANSITION_DONE, () => {
            t.remove()
        }
        ),
        it.fromTo("[data-transition-overlay]", {
            opacity: 0
        }, {
            opacity: 1,
            duration: .6
        }),
        r()
    }
    async onEnter({to: t, trigger: e, done: r}) {
        const i = this.getScreenHeight()
          , s = it.getProperty(t.querySelector(".hero"), "height")
          , o = it.getProperty(".site-header", "height")
          , a = s + o;
        it.set(t, {
            paddingTop: o
        });
        const l = it.timeline({
            paused: !0
        });
        l.addLabel("start"),
        l.addLabel("animateInHero", "start"),
        l.fromTo(t, {
            position: "fixed",
            zIndex: 30,
            transform: "translate3d(0, 100dvh, 0)",
            top: 0,
            left: 0,
            width: "100%"
        }, {
            transform: () => a >= i ? "translate3d(0, 0, 0)" : `translate3d(0, calc(100dvh - ${a}px), 0)`,
            duration: .8,
            ease: "power2.out"
        }, "animateInHero"),
        l.fromTo([...t.querySelectorAll(".hero .header, .hero .year")], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            yPercent: 80
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            yPercent: 0,
            duration: .5,
            stagger: .1,
            ease: "power1.out"
        }, "<0.2"),
        a < i && (l.addLabel("animateInContent", ">0.3"),
        l.to(t, {
            y: 0,
            duration: .9,
            ease: "power2.out"
        }, "animateInContent")),
        await l.play(),
        it.set([t, "[data-transition-overlay]"], {
            clearProps: "all"
        }),
        Yo(),
        Xt.emit(ue.PAGE_TRANSITION_DONE),
        Xt.emit(ue.SCROLL_TOP),
        r()
    }
    getScreenHeight() {
        const t = document.createElement("div");
        Object.assign(t.style, {
            position: "fixed",
            top: 0,
            left: "-9999px",
            height: "100dvh"
        }),
        document.body.append(t);
        const e = t.offsetHeight;
        return t.remove(),
        e
    }
}
window._taxi = new pv({
    removeOldContent: !1,
    renderers: {
        default: mv
    },
    transitions: {
        default: E_,
        toCaseStudy: I_
    }
});
const Gf = n => {
    var t = Object.prototype.toString.call(n);
    return typeof n == "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && typeof n.length == "number" && (n.length === 0 || typeof n[0] == "object" && n[0].nodeType > 0)
}
;
let k_ = class {
    constructor() {
        this.piecesCount = 0,
        this.currentPieces = {}
    }
    addPiece(t) {
        typeof this.currentPieces[t.name] != "object" && (this.currentPieces[t.name] = {}),
        this.currentPieces[t.name][t.id] = t
    }
    removePiece(t) {
        delete this.currentPieces[t.name][t.id]
    }
}
  , z_ = new k_
  , qi = class extends HTMLElement {
    constructor(t, {stylesheets: e=[]}={}) {
        super(),
        this.name = t,
        this.template = document.createElement("template"),
        this.piecesManager = z_,
        this.stylesheets = e,
        this.innerHTML != "" && (this.baseHTML = this.innerHTML)
    }
    connectedCallback(t=!0) {
        t && (typeof this.cid == "string" ? this.cid = this.cid : this.cid = `c${this.piecesManager.piecesCount++}`,
        this.piecesManager.addPiece({
            name: this.name,
            id: this.cid,
            piece: this
        })),
        this.privatePremount(t),
        this.baseHTML == null && (this.innerHTML = "",
        this.template.innerHTML = this.render() != null ? this.render() : "",
        this.appendChild(this.template.cloneNode(!0).content)),
        this.privateMount(t)
    }
    render() {
        if (this.baseHTML != null)
            return this.baseHTML
    }
    disconnectedCallback() {
        this.privateUnmount()
    }
    adoptedCallback() {}
    privatePremount(t=!0) {
        this.baseHTML == null && (this.innerHTML = ""),
        this.log && console.log("🚧 premount", this.name),
        this.loadStyles(t),
        this.premount(t)
    }
    premount(t=!0) {}
    privateMount(t) {
        this.log && console.log("✅ mount", this.name),
        this.mount(t)
    }
    mount(t=!0) {}
    privateUpdate() {
        this.log && console.log("🔃 update", this.name),
        this.update(),
        this.privateUnmount(!0),
        this.connectedCallback(!1)
    }
    update() {}
    privateUnmount(t=!1) {
        t || this.piecesManager.removePiece({
            name: this.name,
            id: this.cid
        }),
        this.log && console.log("❌ unmount", this.name),
        this.unmount(t)
    }
    unmount(t=!1) {}
    attributeChangedCallback(t, e, r) {
        e !== r && (this[t] = r,
        this.privateUpdate())
    }
    $(t, e=this) {
        return e.querySelectorAll(t)
    }
    dom(t, e=this) {
        return e.querySelectorAll(t)
    }
    domAttr(t, e=this) {
        return e.querySelectorAll(`[data-dom="${t}"]`)
    }
    captureTree(t=this) {
        const e = this.querySelectorAll("[data-dom]");
        let r = {};
        for (let i of e) {
            const s = i.getAttribute("data-dom");
            typeof r[s] > "u" && (r[s] = []),
            r[s].push(i)
        }
        return r
    }
    on(t, e, r, i=null) {
        e != null && (Gf(e) ? e.length > 0 && e.forEach(s => {
            i == null ? s.addEventListener(t, r.bind(this)) : s.addEventListener(t, r.bind(this, i))
        }
        ) : i == null ? e.addEventListener(t, r.bind(this)) : e.addEventListener(t, r.bind(this, i)))
    }
    off(t, e, r) {
        e != null && (Gf(e) ? e.length > 0 && e.forEach(i => {
            i.removeEventListener(t, r.bind(this))
        }
        ) : e.removeEventListener(t, r.bind(this)))
    }
    emit(t, e=document, r) {
        const i = new CustomEvent(t,{
            detail: r
        });
        e.dispatchEvent(i)
    }
    call(t, e, r, i) {
        Object.keys(this.piecesManager.currentPieces).forEach(s => {
            s == r && Object.keys(this.piecesManager.currentPieces[s]).forEach(o => {
                i != null ? o == i && this.piecesManager.currentPieces[s][o].piece[t](e) : this.piecesManager.currentPieces[s][o].piece[t](e)
            }
            )
        }
        )
    }
    async loadStyles(t=!0) {
        if (t)
            for (let e = 0; e < this.stylesheets.length; e++)
                await this.stylesheets[e]()
    }
    get log() {
        return typeof this.getAttribute("log") == "string"
    }
    get cid() {
        return this.getAttribute("cid")
    }
    set cid(t) {
        return this.setAttribute("cid", t)
    }
    get properties() {
        return Object.values(this.attributes).map(t => `${t.name}="${t.value}"`).join(" ")
    }
}
;
function R_(n) {
    return n.replace(/\/$/, "")
}
class L_ extends qi {
    constructor() {
        super("Navigation")
    }
    mount() {
        this.$navigation = this.domAttr("navigation")[0],
        this.$closeMenuButton = this.domAttr("close-menu-button")[0],
        this.$navMenu = this.domAttr("nav-menu")[0],
        this.$socialMenu = this.domAttr("social-menu")[0],
        this.$emailLink = this.domAttr("email-link")[0],
        this.on("click", this.$closeMenuButton, () => {
            _s.set(!1),
            Yo()
        }
        ),
        this.on("keyup", window, t => {
            t.code === "Escape" && (_s.set(!1),
            Yo())
        }
        ),
        Xt.on(ue.PAGE_TRANSITION_DONE, this.onPageChange.bind(this)),
        this.onPageChange(),
        _s.listen( () => {
            Ju() ? this.openMenu() : this.closeMenu()
        }
        )
    }
    openMenu() {
        this.$navigation.style.zIndex = null,
        this.$navigation.style.left = null;
        const t = [...this.$navMenu.querySelectorAll("li")].reverse()
          , e = [...this.$socialMenu.querySelectorAll("li")]
          , r = new it.timeline({
            onComplete: () => {
                it.set([t, e, this.$emailLink], {
                    clearProps: "all"
                })
            }
        });
        r.timeScale(1.25),
        r.addLabel("start"),
        r.fromTo(this.$navigation, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            visibility: "visible"
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            overwrite: "auto",
            duration: .9,
            ease: "power2.out"
        }, "start"),
        r.addLabel("animateInMainLinks", "start+=0.3"),
        r.fromTo([e, this.$emailLink, t], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            yPercent: 100
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            yPercent: 0,
            stagger: .1,
            duration: .5,
            ease: "power1.out"
        }, "animateInMainLinks")
    }
    closeMenu() {
        it.to(this.$navigation, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            overwrite: "auto",
            duration: .75,
            ease: "power2.out",
            onComplete: () => {
                it.set(this.$navigation, {
                    visibility: "hidden"
                })
            }
        })
    }
    onPageChange() {
        const t = this.$navMenu.querySelectorAll("a")
          , e = window.location.pathname === "/" ? "/" : R_(window.location.pathname);
        for (const r of t)
            r.getAttribute("href").endsWith(e) ? r.classList.add("is-active") : r.classList.remove("is-active")
    }
}
customElements.define("c-navigation", L_);
class D_ extends qi {
    constructor() {
        super("Preloader")
    }
    mount() {
        this.$logo = this.domAttr("logo")[0],
        this.$counter = this.domAttr("counter")[0],
        this.animateIn()
    }
    animateIn() {
        const t = !!document.querySelector('meta[name="show_site_logo"]')
          , e = new it.timeline({
            delay: .5,
            onStart: () => {
                Xt.emit(ue.SCROLL_TOP)
            }
            ,
            onComplete: () => {
                this.remove(),
                Yo()
            }
        });
        e.addLabel("start");
        const r = [...this.$logo.querySelectorAll(".letter")];
        e.to(r, {
            translate: () => t ? "0% 0%" : "0% -50%",
            duration: .75,
            stagger: .1,
            ease: "power2.out"
        }, "start");
        const i = {
            value: 0
        };
        if (e.to(i, {
            value: 100,
            snap: "value",
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => {
                this.$counter.textContent = `${i.value}%`
            }
        }, "start"),
        t) {
            e.addLabel("animateLogo", ">0.5");
            const s = it.getProperty(document.querySelector(".site-header"), "height");
            e.to(this.$logo, {
                y: s + 16,
                duration: .85,
                ease: "power2.out"
            }, "animateLogo"),
            e.to(this.$counter, {
                autoAlpha: 0,
                duration: .4
            }, "animateLogo"),
            e.addLabel("animateOut", "animateLogo+=0.85"),
            e.to(this, {
                "--tw-bg-opacity": 0,
                duration: .6,
                ease: "power2.out"
            }, "animateOut"),
            e.call( () => {
                document.documentElement.dataset.preloaderDone = ""
            }
            , null, "<")
        } else
            e.addLabel("animateLogo", ">0.5"),
            e.to(r, {
                translate: "0% 70%",
                duration: .95,
                stagger: .035,
                ease: "power2.out"
            }, "animateLogo"),
            e.to(this.$counter, {
                autoAlpha: 0,
                duration: .4
            }, "animateLogo"),
            e.to(this, {
                "--tw-bg-opacity": 0,
                duration: .7,
                ease: "power2.out"
            }, "animateLogo+=0.65"),
            e.call( () => {
                document.documentElement.dataset.preloaderDone = ""
            }
            , null, "<")
    }
}
customElements.define("c-preloader", D_);
class B_ extends qi {
    constructor() {
        super("SiteHeader")
    }
    mount() {
        this.$menuButton = this.domAttr("toggle-menu")[0],
        this.$gridButton = this.domAttr("set-projects-layout-grid")[0],
        this.$listButton = this.domAttr("set-projects-layout-list")[0],
        this.$archiveCanvasLoader = this.domAttr("archive-canvas-loader")[0],
        this.$archiveCanvasLoaderCounter = this.domAttr("archive-canvas-loader-counter")[0],
        this.on("click", this.$menuButton, this.onMenuButtonClick.bind(this)),
        this.on("click", this.$gridButton, this.onGridButtonClick.bind(this)),
        this.on("click", this.$listButton, this.onListButtonClick.bind(this)),
        Xt.on(ue.SHOW_GRID_CONTROLS, this.showGridControls.bind(this)),
        Xt.on(ue.HIDE_GRID_CONTROLS, this.hideGridControls.bind(this)),
        Xt.on(ue.SHOW_ARCHIVE_LOADER, this.showArchiveCanvasLoader.bind(this)),
        Xt.on(ue.HIDE_ARCHIVE_LOADER, this.hideArchiveCanvasLoader.bind(this))
    }
    onMenuButtonClick() {
        _s.set(!0),
        Bh()
    }
    onGridButtonClick() {
        this.$gridButton.classList.add("is-active"),
        this.$listButton.classList.remove("is-active"),
        vf("grid")
    }
    onListButtonClick() {
        this.$gridButton.classList.remove("is-active"),
        this.$listButton.classList.add("is-active"),
        vf("list")
    }
    showGridControls() {
        this.$gridButton.classList.add("is-visible"),
        this.$listButton.classList.add("is-visible")
    }
    hideGridControls() {
        this.$gridButton.classList.remove("is-visible"),
        this.$listButton.classList.remove("is-visible")
    }
    showArchiveCanvasLoader() {
        this.$archiveCanvasLoaderCounter.textContent = "0%",
        this.$archiveCanvasLoader.classList.add("is-visible")
    }
    hideArchiveCanvasLoader() {
        this.$archiveCanvasLoader.classList.remove("is-visible")
    }
}
customElements.define("c-site-header", B_);
class U_ extends qi {
    constructor() {
        super("ThemeSwitcher")
    }
    mount() {
        this.on("click", this, () => {
            tv(),
            document.documentElement.dataset.theme = Ep()
        }
        )
    }
}
customElements.define("c-theme-switcher", U_);
class $_ extends qi {
    constructor() {
        super("Media")
    }
    mount() {
        this.$img = this.domAttr("image")[0],
        this.$video = this.domAttr("video")[0],
        this.checkInitialVisibility(),
        this.$img ? this.$img.complete ? this.onImageLoad() : this.on("load", this.$img, this.onImageLoad) : this.$video && (this.$video.readyState >= HTMLMediaElement.HAVE_METADATA ? this.onVideoLoad() : this.on("loadedmetadata", this.$video, this.onVideoLoad))
    }
    unmount() {
        this.off("load", this.$img, this.onImageLoad)
    }
    checkInitialVisibility() {
        const t = (i, s) => {
            i[0].isIntersecting && (this.dataset.enterViewport = "",
            s.unobserve(i[0].target))
        }
          , e = {
            threshold: 0,
            rootMargin: "0px 0px -100px 0px"
        };
        new IntersectionObserver(t,e).observe(this)
    }
    monitorVideoVisibility() {
        const t = (i, s) => {
            if (!i[0].isIntersecting) {
                this.$video.pause();
                return
            }
            this.$video.play()
        }
          , e = {
            threshold: 0
        };
        new IntersectionObserver(t,e).observe(this)
    }
    onImageLoad() {
        this.dataset.loaded = ""
    }
    onVideoLoad() {
        this.dataset.loaded = "",
        this.monitorVideoVisibility()
    }
}
customElements.define("c-media", $_);
class N_ extends qi {
    #e = null;
    constructor() {
        super("ProjectsGrid")
    }
    mount() {
        this.$grid = this.domAttr("grid")[0],
        this.$list = this.domAttr("list")[0],
        this.hideLayoutOnMount(),
        this.#e = yh.listen(t => {
            switch (Xt.emit(ue.SCROLL_TO_HEADER),
            t) {
            case "grid":
                this.showGrid();
                break;
            case "list":
                this.showList();
                break
            }
        }
        )
    }
    unmount() {
        this.#e()
    }
    showGrid() {
        const t = [...this.domAttr("grid-item")]
          , e = [...this.domAttr("list-item")];
        this.style.overflow = "hidden",
        this.$grid.style.display = null;
        const r = it.getProperty(this.$grid, "height")
          , i = new it.timeline;
        i.addLabel("start"),
        i.to(this, {
            "--height": `${r}px`,
            duration: 1,
            ease: "none",
            overwrite: !0,
            onComplete: () => {
                this.style.overflow = null
            }
        }, "start"),
        i.to(e, {
            opacity: 0,
            duration: .5,
            stagger: .07,
            overwrite: !0
        }, "start"),
        i.fromTo(t, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .65,
            stagger: .1,
            overwrite: !0
        }, "<0.4")
    }
    showList() {
        const t = [...this.domAttr("grid-item")]
          , e = [...this.domAttr("list-item")];
        this.style.overflow = "hidden",
        this.$list.style.display = null;
        const r = it.getProperty(this.$list, "height")
          , i = new it.timeline;
        i.addLabel("start"),
        i.to(this, {
            "--height": `${r}px`,
            duration: 1,
            ease: "none",
            overwrite: !0,
            onComplete: () => {
                this.style.overflow = null
            }
        }, "start"),
        i.to(t, {
            opacity: 0,
            duration: .5,
            stagger: .07,
            overwrite: !0,
            onComplete: () => {
                this.$grid.style.display = "none"
            }
        }, "start"),
        i.fromTo(e, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .65,
            stagger: .07,
            overwrite: !0
        }, "<0.2")
    }
    hideLayoutOnMount() {
        const t = ev() === "grid" ? this.$list : this.$grid;
        t.style.display = "none"
    }
}
customElements.define("c-projects-grid", N_);
const G_ = "modulepreload"
  , V_ = function(n) {
    return "/" + n
}
  , Vf = {}
  , yl = function(t, e, r) {
    let i = Promise.resolve();
    if (e && e.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = o?.nonce || o?.getAttribute("nonce");
        i = Promise.allSettled(e.map(l => {
            if (l = V_(l),
            l in Vf)
                return;
            Vf[l] = !0;
            const u = l.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const f = document.createElement("link");
            if (f.rel = u ? "stylesheet" : G_,
            u || (f.as = "script"),
            f.crossOrigin = "",
            f.href = l,
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
                return new Promise( (d, h) => {
                    f.addEventListener("load", d),
                    f.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function s(o) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = o,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw o
    }
    return i.then(o => {
        for (const a of o || [])
            a.status === "rejected" && s(a.reason);
        return t().catch(s)
    }
    )
};
var Q = (n => (n.Application = "application",
n.WebGLPipes = "webgl-pipes",
n.WebGLPipesAdaptor = "webgl-pipes-adaptor",
n.WebGLSystem = "webgl-system",
n.WebGPUPipes = "webgpu-pipes",
n.WebGPUPipesAdaptor = "webgpu-pipes-adaptor",
n.WebGPUSystem = "webgpu-system",
n.CanvasSystem = "canvas-system",
n.CanvasPipesAdaptor = "canvas-pipes-adaptor",
n.CanvasPipes = "canvas-pipes",
n.Asset = "asset",
n.LoadParser = "load-parser",
n.ResolveParser = "resolve-parser",
n.CacheParser = "cache-parser",
n.DetectionParser = "detection-parser",
n.MaskEffect = "mask-effect",
n.BlendMode = "blend-mode",
n.TextureSource = "texture-source",
n.Environment = "environment",
n.ShapeBuilder = "shape-builder",
n.Batcher = "batcher",
n))(Q || {});
const _c = n => {
    if (typeof n == "function" || typeof n == "object" && n.extension) {
        if (!n.extension)
            throw new Error("Extension class must have an extension object");
        n = {
            ...typeof n.extension != "object" ? {
                type: n.extension
            } : n.extension,
            ref: n
        }
    }
    if (typeof n == "object")
        n = {
            ...n
        };
    else
        throw new Error("Invalid extension type");
    return typeof n.type == "string" && (n.type = [n.type]),
    n
}
  , pa = (n, t) => _c(n).priority ?? t
  , Qe = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...n) {
        return n.map(_c).forEach(t => {
            t.type.forEach(e => this._removeHandlers[e]?.(t))
        }
        ),
        this
    },
    add(...n) {
        return n.map(_c).forEach(t => {
            t.type.forEach(e => {
                const r = this._addHandlers
                  , i = this._queue;
                r[e] ? r[e]?.(t) : (i[e] = i[e] || [],
                i[e]?.push(t))
            }
            )
        }
        ),
        this
    },
    handle(n, t, e) {
        const r = this._addHandlers
          , i = this._removeHandlers;
        if (r[n] || i[n])
            throw new Error(`Extension type ${n} already has a handler`);
        r[n] = t,
        i[n] = e;
        const s = this._queue;
        return s[n] && (s[n]?.forEach(o => t(o)),
        delete s[n]),
        this
    },
    handleByMap(n, t) {
        return this.handle(n, e => {
            e.name && (t[e.name] = e.ref)
        }
        , e => {
            e.name && delete t[e.name]
        }
        )
    },
    handleByNamedList(n, t, e=-1) {
        return this.handle(n, r => {
            t.findIndex(s => s.name === r.name) >= 0 || (t.push({
                name: r.name,
                value: r.ref
            }),
            t.sort( (s, o) => pa(o.value, e) - pa(s.value, e)))
        }
        , r => {
            const i = t.findIndex(s => s.name === r.name);
            i !== -1 && t.splice(i, 1)
        }
        )
    },
    handleByList(n, t, e=-1) {
        return this.handle(n, r => {
            t.includes(r.ref) || (t.push(r.ref),
            t.sort( (i, s) => pa(s, e) - pa(i, e)))
        }
        , r => {
            const i = t.indexOf(r.ref);
            i !== -1 && t.splice(i, 1)
        }
        )
    }
}
  , W_ = {
    extension: {
        type: Q.Environment,
        name: "browser",
        priority: -1
    },
    test: () => !0,
    load: async () => {
        await yl( () => import("./browserAll.OIhgtlpz.js"), __vite__mapDeps([0, 1, 2]))
    }
}
  , X_ = {
    extension: {
        type: Q.Environment,
        name: "webworker",
        priority: 0
    },
    test: () => typeof self < "u" && self.WorkerGlobalScope !== void 0,
    load: async () => {
        await yl( () => import("./webworkerAll.DPLUA6eM.js"), __vite__mapDeps([1, 2]))
    }
};
class or {
    constructor(t, e, r) {
        this._x = e || 0,
        this._y = r || 0,
        this._observer = t
    }
    clone(t) {
        return new or(t ?? this._observer,this._x,this._y)
    }
    set(t=0, e=t) {
        return (this._x !== t || this._y !== e) && (this._x = t,
        this._y = e,
        this._observer._onUpdate(this)),
        this
    }
    copyFrom(t) {
        return (this._x !== t.x || this._y !== t.y) && (this._x = t.x,
        this._y = t.y,
        this._observer._onUpdate(this)),
        this
    }
    copyTo(t) {
        return t.set(this._x, this._y),
        t
    }
    equals(t) {
        return t.x === this._x && t.y === this._y
    }
    toString() {
        return `[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x !== t && (this._x = t,
        this._observer._onUpdate(this))
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y !== t && (this._y = t,
        this._observer._onUpdate(this))
    }
}
function Uh(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Rm = {
    exports: {}
};
(function(n) {
    var t = Object.prototype.hasOwnProperty
      , e = "~";
    function r() {}
    Object.create && (r.prototype = Object.create(null),
    new r().__proto__ || (e = !1));
    function i(l, u, c) {
        this.fn = l,
        this.context = u,
        this.once = c || !1
    }
    function s(l, u, c, f, d) {
        if (typeof c != "function")
            throw new TypeError("The listener must be a function");
        var h = new i(c,f || l,d)
          , m = e ? e + u : u;
        return l._events[m] ? l._events[m].fn ? l._events[m] = [l._events[m], h] : l._events[m].push(h) : (l._events[m] = h,
        l._eventsCount++),
        l
    }
    function o(l, u) {
        --l._eventsCount === 0 ? l._events = new r : delete l._events[u]
    }
    function a() {
        this._events = new r,
        this._eventsCount = 0
    }
    a.prototype.eventNames = function() {
        var u = [], c, f;
        if (this._eventsCount === 0)
            return u;
        for (f in c = this._events)
            t.call(c, f) && u.push(e ? f.slice(1) : f);
        return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(c)) : u
    }
    ,
    a.prototype.listeners = function(u) {
        var c = e ? e + u : u
          , f = this._events[c];
        if (!f)
            return [];
        if (f.fn)
            return [f.fn];
        for (var d = 0, h = f.length, m = new Array(h); d < h; d++)
            m[d] = f[d].fn;
        return m
    }
    ,
    a.prototype.listenerCount = function(u) {
        var c = e ? e + u : u
          , f = this._events[c];
        return f ? f.fn ? 1 : f.length : 0
    }
    ,
    a.prototype.emit = function(u, c, f, d, h, m) {
        var p = e ? e + u : u;
        if (!this._events[p])
            return !1;
        var g = this._events[p], x = arguments.length, v, _;
        if (g.fn) {
            switch (g.once && this.removeListener(u, g.fn, void 0, !0),
            x) {
            case 1:
                return g.fn.call(g.context),
                !0;
            case 2:
                return g.fn.call(g.context, c),
                !0;
            case 3:
                return g.fn.call(g.context, c, f),
                !0;
            case 4:
                return g.fn.call(g.context, c, f, d),
                !0;
            case 5:
                return g.fn.call(g.context, c, f, d, h),
                !0;
            case 6:
                return g.fn.call(g.context, c, f, d, h, m),
                !0
            }
            for (_ = 1,
            v = new Array(x - 1); _ < x; _++)
                v[_ - 1] = arguments[_];
            g.fn.apply(g.context, v)
        } else {
            var y = g.length, S;
            for (_ = 0; _ < y; _++)
                switch (g[_].once && this.removeListener(u, g[_].fn, void 0, !0),
                x) {
                case 1:
                    g[_].fn.call(g[_].context);
                    break;
                case 2:
                    g[_].fn.call(g[_].context, c);
                    break;
                case 3:
                    g[_].fn.call(g[_].context, c, f);
                    break;
                case 4:
                    g[_].fn.call(g[_].context, c, f, d);
                    break;
                default:
                    if (!v)
                        for (S = 1,
                        v = new Array(x - 1); S < x; S++)
                            v[S - 1] = arguments[S];
                    g[_].fn.apply(g[_].context, v)
                }
        }
        return !0
    }
    ,
    a.prototype.on = function(u, c, f) {
        return s(this, u, c, f, !1)
    }
    ,
    a.prototype.once = function(u, c, f) {
        return s(this, u, c, f, !0)
    }
    ,
    a.prototype.removeListener = function(u, c, f, d) {
        var h = e ? e + u : u;
        if (!this._events[h])
            return this;
        if (!c)
            return o(this, h),
            this;
        var m = this._events[h];
        if (m.fn)
            m.fn === c && (!d || m.once) && (!f || m.context === f) && o(this, h);
        else {
            for (var p = 0, g = [], x = m.length; p < x; p++)
                (m[p].fn !== c || d && !m[p].once || f && m[p].context !== f) && g.push(m[p]);
            g.length ? this._events[h] = g.length === 1 ? g[0] : g : o(this, h)
        }
        return this
    }
    ,
    a.prototype.removeAllListeners = function(u) {
        var c;
        return u ? (c = e ? e + u : u,
        this._events[c] && o(this, c)) : (this._events = new r,
        this._eventsCount = 0),
        this
    }
    ,
    a.prototype.off = a.prototype.removeListener,
    a.prototype.addListener = a.prototype.on,
    a.prefixed = e,
    a.EventEmitter = a,
    n.exports = a
}
)(Rm);
var H_ = Rm.exports;
const Jr = Uh(H_)
  , Y_ = Math.PI * 2
  , j_ = 180 / Math.PI
  , Ls = Math.PI / 180;
class Be {
    constructor(t=0, e=0) {
        this.x = 0,
        this.y = 0,
        this.x = t,
        this.y = e
    }
    clone() {
        return new Be(this.x,this.y)
    }
    copyFrom(t) {
        return this.set(t.x, t.y),
        this
    }
    copyTo(t) {
        return t.set(this.x, this.y),
        t
    }
    equals(t) {
        return t.x === this.x && t.y === this.y
    }
    set(t=0, e=t) {
        return this.x = t,
        this.y = e,
        this
    }
    toString() {
        return `[pixi.js/math:Point x=${this.x} y=${this.y}]`
    }
    static get shared() {
        return iu.x = 0,
        iu.y = 0,
        iu
    }
}
const iu = new Be;
class Ot {
    constructor(t=1, e=0, r=0, i=1, s=0, o=0) {
        this.array = null,
        this.a = t,
        this.b = e,
        this.c = r,
        this.d = i,
        this.tx = s,
        this.ty = o
    }
    fromArray(t) {
        this.a = t[0],
        this.b = t[1],
        this.c = t[3],
        this.d = t[4],
        this.tx = t[2],
        this.ty = t[5]
    }
    set(t, e, r, i, s, o) {
        return this.a = t,
        this.b = e,
        this.c = r,
        this.d = i,
        this.tx = s,
        this.ty = o,
        this
    }
    toArray(t, e) {
        this.array || (this.array = new Float32Array(9));
        const r = e || this.array;
        return t ? (r[0] = this.a,
        r[1] = this.b,
        r[2] = 0,
        r[3] = this.c,
        r[4] = this.d,
        r[5] = 0,
        r[6] = this.tx,
        r[7] = this.ty,
        r[8] = 1) : (r[0] = this.a,
        r[1] = this.c,
        r[2] = this.tx,
        r[3] = this.b,
        r[4] = this.d,
        r[5] = this.ty,
        r[6] = 0,
        r[7] = 0,
        r[8] = 1),
        r
    }
    apply(t, e) {
        e = e || new Be;
        const r = t.x
          , i = t.y;
        return e.x = this.a * r + this.c * i + this.tx,
        e.y = this.b * r + this.d * i + this.ty,
        e
    }
    applyInverse(t, e) {
        e = e || new Be;
        const r = this.a
          , i = this.b
          , s = this.c
          , o = this.d
          , a = this.tx
          , l = this.ty
          , u = 1 / (r * o + s * -i)
          , c = t.x
          , f = t.y;
        return e.x = o * u * c + -s * u * f + (l * s - a * o) * u,
        e.y = r * u * f + -i * u * c + (-l * r + a * i) * u,
        e
    }
    translate(t, e) {
        return this.tx += t,
        this.ty += e,
        this
    }
    scale(t, e) {
        return this.a *= t,
        this.d *= e,
        this.c *= t,
        this.b *= e,
        this.tx *= t,
        this.ty *= e,
        this
    }
    rotate(t) {
        const e = Math.cos(t)
          , r = Math.sin(t)
          , i = this.a
          , s = this.c
          , o = this.tx;
        return this.a = i * e - this.b * r,
        this.b = i * r + this.b * e,
        this.c = s * e - this.d * r,
        this.d = s * r + this.d * e,
        this.tx = o * e - this.ty * r,
        this.ty = o * r + this.ty * e,
        this
    }
    append(t) {
        const e = this.a
          , r = this.b
          , i = this.c
          , s = this.d;
        return this.a = t.a * e + t.b * i,
        this.b = t.a * r + t.b * s,
        this.c = t.c * e + t.d * i,
        this.d = t.c * r + t.d * s,
        this.tx = t.tx * e + t.ty * i + this.tx,
        this.ty = t.tx * r + t.ty * s + this.ty,
        this
    }
    appendFrom(t, e) {
        const r = t.a
          , i = t.b
          , s = t.c
          , o = t.d
          , a = t.tx
          , l = t.ty
          , u = e.a
          , c = e.b
          , f = e.c
          , d = e.d;
        return this.a = r * u + i * f,
        this.b = r * c + i * d,
        this.c = s * u + o * f,
        this.d = s * c + o * d,
        this.tx = a * u + l * f + e.tx,
        this.ty = a * c + l * d + e.ty,
        this
    }
    setTransform(t, e, r, i, s, o, a, l, u) {
        return this.a = Math.cos(a + u) * s,
        this.b = Math.sin(a + u) * s,
        this.c = -Math.sin(a - l) * o,
        this.d = Math.cos(a - l) * o,
        this.tx = t - (r * this.a + i * this.c),
        this.ty = e - (r * this.b + i * this.d),
        this
    }
    prepend(t) {
        const e = this.tx;
        if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
            const r = this.a
              , i = this.c;
            this.a = r * t.a + this.b * t.c,
            this.b = r * t.b + this.b * t.d,
            this.c = i * t.a + this.d * t.c,
            this.d = i * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx,
        this.ty = e * t.b + this.ty * t.d + t.ty,
        this
    }
    decompose(t) {
        const e = this.a
          , r = this.b
          , i = this.c
          , s = this.d
          , o = t.pivot
          , a = -Math.atan2(-i, s)
          , l = Math.atan2(r, e)
          , u = Math.abs(a + l);
        return u < 1e-5 || Math.abs(Y_ - u) < 1e-5 ? (t.rotation = l,
        t.skew.x = t.skew.y = 0) : (t.rotation = 0,
        t.skew.x = a,
        t.skew.y = l),
        t.scale.x = Math.sqrt(e * e + r * r),
        t.scale.y = Math.sqrt(i * i + s * s),
        t.position.x = this.tx + (o.x * e + o.y * i),
        t.position.y = this.ty + (o.x * r + o.y * s),
        t
    }
    invert() {
        const t = this.a
          , e = this.b
          , r = this.c
          , i = this.d
          , s = this.tx
          , o = t * i - e * r;
        return this.a = i / o,
        this.b = -e / o,
        this.c = -r / o,
        this.d = t / o,
        this.tx = (r * this.ty - i * s) / o,
        this.ty = -(t * this.ty - e * s) / o,
        this
    }
    isIdentity() {
        return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0
    }
    identity() {
        return this.a = 1,
        this.b = 0,
        this.c = 0,
        this.d = 1,
        this.tx = 0,
        this.ty = 0,
        this
    }
    clone() {
        const t = new Ot;
        return t.a = this.a,
        t.b = this.b,
        t.c = this.c,
        t.d = this.d,
        t.tx = this.tx,
        t.ty = this.ty,
        t
    }
    copyTo(t) {
        return t.a = this.a,
        t.b = this.b,
        t.c = this.c,
        t.d = this.d,
        t.tx = this.tx,
        t.ty = this.ty,
        t
    }
    copyFrom(t) {
        return this.a = t.a,
        this.b = t.b,
        this.c = t.c,
        this.d = t.d,
        this.tx = t.tx,
        this.ty = t.ty,
        this
    }
    equals(t) {
        return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty
    }
    toString() {
        return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
    }
    static get IDENTITY() {
        return K_.identity()
    }
    static get shared() {
        return q_.identity()
    }
}
const q_ = new Ot
  , K_ = new Ot
  , mi = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
  , gi = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
  , xi = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
  , vi = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
  , yc = []
  , Lm = []
  , ma = Math.sign;
function Z_() {
    for (let n = 0; n < 16; n++) {
        const t = [];
        yc.push(t);
        for (let e = 0; e < 16; e++) {
            const r = ma(mi[n] * mi[e] + xi[n] * gi[e])
              , i = ma(gi[n] * mi[e] + vi[n] * gi[e])
              , s = ma(mi[n] * xi[e] + xi[n] * vi[e])
              , o = ma(gi[n] * xi[e] + vi[n] * vi[e]);
            for (let a = 0; a < 16; a++)
                if (mi[a] === r && gi[a] === i && xi[a] === s && vi[a] === o) {
                    t.push(a);
                    break
                }
        }
    }
    for (let n = 0; n < 16; n++) {
        const t = new Ot;
        t.set(mi[n], gi[n], xi[n], vi[n], 0, 0),
        Lm.push(t)
    }
}
Z_();
const qt = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: n => mi[n],
    uY: n => gi[n],
    vX: n => xi[n],
    vY: n => vi[n],
    inv: n => n & 8 ? n & 15 : -n & 7,
    add: (n, t) => yc[n][t],
    sub: (n, t) => yc[n][qt.inv(t)],
    rotate180: n => n ^ 4,
    isVertical: n => (n & 3) === 2,
    byDirection: (n, t) => Math.abs(n) * 2 <= Math.abs(t) ? t >= 0 ? qt.S : qt.N : Math.abs(t) * 2 <= Math.abs(n) ? n > 0 ? qt.E : qt.W : t > 0 ? n > 0 ? qt.SE : qt.SW : n > 0 ? qt.NE : qt.NW,
    matrixAppendRotationInv: (n, t, e=0, r=0) => {
        const i = Lm[qt.inv(t)];
        i.tx = e,
        i.ty = r,
        n.append(i)
    }
}
  , ga = [new Be, new Be, new Be, new Be];
class ce {
    constructor(t=0, e=0, r=0, i=0) {
        this.type = "rectangle",
        this.x = Number(t),
        this.y = Number(e),
        this.width = Number(r),
        this.height = Number(i)
    }
    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }
    isEmpty() {
        return this.left === this.right || this.top === this.bottom
    }
    static get EMPTY() {
        return new ce(0,0,0,0)
    }
    clone() {
        return new ce(this.x,this.y,this.width,this.height)
    }
    copyFromBounds(t) {
        return this.x = t.minX,
        this.y = t.minY,
        this.width = t.maxX - t.minX,
        this.height = t.maxY - t.minY,
        this
    }
    copyFrom(t) {
        return this.x = t.x,
        this.y = t.y,
        this.width = t.width,
        this.height = t.height,
        this
    }
    copyTo(t) {
        return t.copyFrom(this),
        t
    }
    contains(t, e) {
        return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
    }
    strokeContains(t, e, r) {
        const {width: i, height: s} = this;
        if (i <= 0 || s <= 0)
            return !1;
        const o = this.x
          , a = this.y
          , l = o - r / 2
          , u = o + i + r / 2
          , c = a - r / 2
          , f = a + s + r / 2
          , d = o + r / 2
          , h = o + i - r / 2
          , m = a + r / 2
          , p = a + s - r / 2;
        return t >= l && t <= u && e >= c && e <= f && !(t > d && t < h && e > m && e < p)
    }
    intersects(t, e) {
        if (!e) {
            const P = this.x < t.x ? t.x : this.x;
            if ((this.right > t.right ? t.right : this.right) <= P)
                return !1;
            const M = this.y < t.y ? t.y : this.y;
            return (this.bottom > t.bottom ? t.bottom : this.bottom) > M
        }
        const r = this.left
          , i = this.right
          , s = this.top
          , o = this.bottom;
        if (i <= r || o <= s)
            return !1;
        const a = ga[0].set(t.left, t.top)
          , l = ga[1].set(t.left, t.bottom)
          , u = ga[2].set(t.right, t.top)
          , c = ga[3].set(t.right, t.bottom);
        if (u.x <= a.x || l.y <= a.y)
            return !1;
        const f = Math.sign(e.a * e.d - e.b * e.c);
        if (f === 0 || (e.apply(a, a),
        e.apply(l, l),
        e.apply(u, u),
        e.apply(c, c),
        Math.max(a.x, l.x, u.x, c.x) <= r || Math.min(a.x, l.x, u.x, c.x) >= i || Math.max(a.y, l.y, u.y, c.y) <= s || Math.min(a.y, l.y, u.y, c.y) >= o))
            return !1;
        const d = f * (l.y - a.y)
          , h = f * (a.x - l.x)
          , m = d * r + h * s
          , p = d * i + h * s
          , g = d * r + h * o
          , x = d * i + h * o;
        if (Math.max(m, p, g, x) <= d * a.x + h * a.y || Math.min(m, p, g, x) >= d * c.x + h * c.y)
            return !1;
        const v = f * (a.y - u.y)
          , _ = f * (u.x - a.x)
          , y = v * r + _ * s
          , S = v * i + _ * s
          , O = v * r + _ * o
          , w = v * i + _ * o;
        return !(Math.max(y, S, O, w) <= v * a.x + _ * a.y || Math.min(y, S, O, w) >= v * c.x + _ * c.y)
    }
    pad(t=0, e=t) {
        return this.x -= t,
        this.y -= e,
        this.width += t * 2,
        this.height += e * 2,
        this
    }
    fit(t) {
        const e = Math.max(this.x, t.x)
          , r = Math.min(this.x + this.width, t.x + t.width)
          , i = Math.max(this.y, t.y)
          , s = Math.min(this.y + this.height, t.y + t.height);
        return this.x = e,
        this.width = Math.max(r - e, 0),
        this.y = i,
        this.height = Math.max(s - i, 0),
        this
    }
    ceil(t=1, e=.001) {
        const r = Math.ceil((this.x + this.width - e) * t) / t
          , i = Math.ceil((this.y + this.height - e) * t) / t;
        return this.x = Math.floor((this.x + e) * t) / t,
        this.y = Math.floor((this.y + e) * t) / t,
        this.width = r - this.x,
        this.height = i - this.y,
        this
    }
    enlarge(t) {
        const e = Math.min(this.x, t.x)
          , r = Math.max(this.x + this.width, t.x + t.width)
          , i = Math.min(this.y, t.y)
          , s = Math.max(this.y + this.height, t.y + t.height);
        return this.x = e,
        this.width = r - e,
        this.y = i,
        this.height = s - i,
        this
    }
    getBounds(t) {
        return t = t || new ce,
        t.copyFrom(this),
        t
    }
    toString() {
        return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
    }
}
const su = {
    default: -1
};
function me(n="default") {
    return su[n] === void 0 && (su[n] = -1),
    ++su[n]
}
const Wf = {}
  , zt = "8.0.0"
  , Q_ = "8.3.4";
function J(n, t, e=3) {
    if (Wf[t])
        return;
    let r = new Error().stack;
    typeof r > "u" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${n}`) : (r = r.split(`
`).splice(e).join(`
`),
    console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${n}`),
    console.warn(r),
    console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${n}`),
    console.warn(r))),
    Wf[t] = !0
}
const Dm = () => {}
;
function bl(n) {
    return n += n === 0 ? 1 : 0,
    --n,
    n |= n >>> 1,
    n |= n >>> 2,
    n |= n >>> 4,
    n |= n >>> 8,
    n |= n >>> 16,
    n + 1
}
function Xf(n) {
    return !(n & n - 1) && !!n
}
function J_(n) {
    const t = {};
    for (const e in n)
        n[e] !== void 0 && (t[e] = n[e]);
    return t
}
const Hf = Object.create(null);
function ty(n) {
    const t = Hf[n];
    return t === void 0 && (Hf[n] = me("resource")),
    t
}
const Bm = class Um extends Jr {
    constructor(t={}) {
        super(),
        this._resourceType = "textureSampler",
        this._touched = 0,
        this._maxAnisotropy = 1,
        this.destroyed = !1,
        t = {
            ...Um.defaultOptions,
            ...t
        },
        this.addressMode = t.addressMode,
        this.addressModeU = t.addressModeU ?? this.addressModeU,
        this.addressModeV = t.addressModeV ?? this.addressModeV,
        this.addressModeW = t.addressModeW ?? this.addressModeW,
        this.scaleMode = t.scaleMode,
        this.magFilter = t.magFilter ?? this.magFilter,
        this.minFilter = t.minFilter ?? this.minFilter,
        this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter,
        this.lodMinClamp = t.lodMinClamp,
        this.lodMaxClamp = t.lodMaxClamp,
        this.compare = t.compare,
        this.maxAnisotropy = t.maxAnisotropy ?? 1
    }
    set addressMode(t) {
        this.addressModeU = t,
        this.addressModeV = t,
        this.addressModeW = t
    }
    get addressMode() {
        return this.addressModeU
    }
    set wrapMode(t) {
        J(zt, "TextureStyle.wrapMode is now TextureStyle.addressMode"),
        this.addressMode = t
    }
    get wrapMode() {
        return this.addressMode
    }
    set scaleMode(t) {
        this.magFilter = t,
        this.minFilter = t,
        this.mipmapFilter = t
    }
    get scaleMode() {
        return this.magFilter
    }
    set maxAnisotropy(t) {
        this._maxAnisotropy = Math.min(t, 16),
        this._maxAnisotropy > 1 && (this.scaleMode = "linear")
    }
    get maxAnisotropy() {
        return this._maxAnisotropy
    }
    get _resourceId() {
        return this._sharedResourceId || this._generateResourceId()
    }
    update() {
        this.emit("change", this),
        this._sharedResourceId = null
    }
    _generateResourceId() {
        const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
        return this._sharedResourceId = ty(t),
        this._resourceId
    }
    destroy() {
        this.destroyed = !0,
        this.emit("destroy", this),
        this.emit("change", this),
        this.removeAllListeners()
    }
}
;
Bm.defaultOptions = {
    addressMode: "clamp-to-edge",
    scaleMode: "linear"
};
let ey = Bm;
const $m = class Nm extends Jr {
    constructor(t={}) {
        super(),
        this.options = t,
        this.uid = me("textureSource"),
        this._resourceType = "textureSource",
        this._resourceId = me("resource"),
        this.uploadMethodId = "unknown",
        this._resolution = 1,
        this.pixelWidth = 1,
        this.pixelHeight = 1,
        this.width = 1,
        this.height = 1,
        this.sampleCount = 1,
        this.mipLevelCount = 1,
        this.autoGenerateMipmaps = !1,
        this.format = "rgba8unorm",
        this.dimension = "2d",
        this.antialias = !1,
        this._touched = 0,
        this._batchTick = -1,
        this._textureBindLocation = -1,
        t = {
            ...Nm.defaultOptions,
            ...t
        },
        this.label = t.label ?? "",
        this.resource = t.resource,
        this.autoGarbageCollect = t.autoGarbageCollect,
        this._resolution = t.resolution,
        t.width ? this.pixelWidth = t.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1,
        t.height ? this.pixelHeight = t.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1,
        this.width = this.pixelWidth / this._resolution,
        this.height = this.pixelHeight / this._resolution,
        this.format = t.format,
        this.dimension = t.dimensions,
        this.mipLevelCount = t.mipLevelCount,
        this.autoGenerateMipmaps = t.autoGenerateMipmaps,
        this.sampleCount = t.sampleCount,
        this.antialias = t.antialias,
        this.alphaMode = t.alphaMode,
        this.style = new ey(J_(t)),
        this.destroyed = !1,
        this._refreshPOT()
    }
    get source() {
        return this
    }
    get style() {
        return this._style
    }
    set style(t) {
        this.style !== t && (this._style?.off("change", this._onStyleChange, this),
        this._style = t,
        this._style?.on("change", this._onStyleChange, this),
        this._onStyleChange())
    }
    get addressMode() {
        return this._style.addressMode
    }
    set addressMode(t) {
        this._style.addressMode = t
    }
    get repeatMode() {
        return this._style.addressMode
    }
    set repeatMode(t) {
        this._style.addressMode = t
    }
    get magFilter() {
        return this._style.magFilter
    }
    set magFilter(t) {
        this._style.magFilter = t
    }
    get minFilter() {
        return this._style.minFilter
    }
    set minFilter(t) {
        this._style.minFilter = t
    }
    get mipmapFilter() {
        return this._style.mipmapFilter
    }
    set mipmapFilter(t) {
        this._style.mipmapFilter = t
    }
    get lodMinClamp() {
        return this._style.lodMinClamp
    }
    set lodMinClamp(t) {
        this._style.lodMinClamp = t
    }
    get lodMaxClamp() {
        return this._style.lodMaxClamp
    }
    set lodMaxClamp(t) {
        this._style.lodMaxClamp = t
    }
    _onStyleChange() {
        this.emit("styleChange", this)
    }
    update() {
        if (this.resource) {
            const t = this._resolution;
            if (this.resize(this.resourceWidth / t, this.resourceHeight / t))
                return
        }
        this.emit("update", this)
    }
    destroy() {
        this.destroyed = !0,
        this.emit("destroy", this),
        this.emit("change", this),
        this._style && (this._style.destroy(),
        this._style = null),
        this.uploadMethodId = null,
        this.resource = null,
        this.removeAllListeners()
    }
    unload() {
        this._resourceId = me("resource"),
        this.emit("change", this),
        this.emit("unload", this)
    }
    get resourceWidth() {
        const {resource: t} = this;
        return t.naturalWidth || t.videoWidth || t.displayWidth || t.width
    }
    get resourceHeight() {
        const {resource: t} = this;
        return t.naturalHeight || t.videoHeight || t.displayHeight || t.height
    }
    get resolution() {
        return this._resolution
    }
    set resolution(t) {
        this._resolution !== t && (this._resolution = t,
        this.width = this.pixelWidth / t,
        this.height = this.pixelHeight / t)
    }
    resize(t, e, r) {
        r = r || this._resolution,
        t = t || this.width,
        e = e || this.height;
        const i = Math.round(t * r)
          , s = Math.round(e * r);
        return this.width = i / r,
        this.height = s / r,
        this._resolution = r,
        this.pixelWidth === i && this.pixelHeight === s ? !1 : (this._refreshPOT(),
        this.pixelWidth = i,
        this.pixelHeight = s,
        this.emit("resize", this),
        this._resourceId = me("resource"),
        this.emit("change", this),
        !0)
    }
    updateMipmaps() {
        this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this)
    }
    set wrapMode(t) {
        this._style.wrapMode = t
    }
    get wrapMode() {
        return this._style.wrapMode
    }
    set scaleMode(t) {
        this._style.scaleMode = t
    }
    get scaleMode() {
        return this._style.scaleMode
    }
    _refreshPOT() {
        this.isPowerOfTwo = Xf(this.pixelWidth) && Xf(this.pixelHeight)
    }
    static test(t) {
        throw new Error("Unimplemented")
    }
}
;
$m.defaultOptions = {
    resolution: 1,
    format: "bgra8unorm",
    alphaMode: "premultiply-alpha-on-upload",
    dimensions: "2d",
    mipLevelCount: 1,
    autoGenerateMipmaps: !1,
    sampleCount: 1,
    antialias: !1,
    autoGarbageCollect: !1
};
let fr = $m;
class $h extends fr {
    constructor(t) {
        const e = t.resource || new Float32Array(t.width * t.height * 4);
        let r = t.format;
        r || (e instanceof Float32Array ? r = "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? r = "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? r = "rgba16uint" : (e instanceof Int8Array,
        r = "bgra8unorm")),
        super({
            ...t,
            resource: e,
            format: r
        }),
        this.uploadMethodId = "buffer"
    }
    static test(t) {
        return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array
    }
}
$h.extension = Q.TextureSource;
const Yf = new Ot;
class ry {
    constructor(t, e) {
        this.mapCoord = new Ot,
        this.uClampFrame = new Float32Array(4),
        this.uClampOffset = new Float32Array(2),
        this._textureID = -1,
        this._updateID = 0,
        this.clampOffset = 0,
        typeof e > "u" ? this.clampMargin = t.width < 10 ? 0 : .5 : this.clampMargin = e,
        this.isSimple = !1,
        this.texture = t
    }
    get texture() {
        return this._texture
    }
    set texture(t) {
        this.texture !== t && (this._texture?.removeListener("update", this.update, this),
        this._texture = t,
        this._texture.addListener("update", this.update, this),
        this.update())
    }
    multiplyUvs(t, e) {
        e === void 0 && (e = t);
        const r = this.mapCoord;
        for (let i = 0; i < t.length; i += 2) {
            const s = t[i]
              , o = t[i + 1];
            e[i] = s * r.a + o * r.c + r.tx,
            e[i + 1] = s * r.b + o * r.d + r.ty
        }
        return e
    }
    update() {
        const t = this._texture;
        this._updateID++;
        const e = t.uvs;
        this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
        const r = t.orig
          , i = t.trim;
        i && (Yf.set(r.width / i.width, 0, 0, r.height / i.height, -i.x / i.width, -i.y / i.height),
        this.mapCoord.append(Yf));
        const s = t.source
          , o = this.uClampFrame
          , a = this.clampMargin / s._resolution
          , l = this.clampOffset / s._resolution;
        return o[0] = (t.frame.x + a + l) / s.width,
        o[1] = (t.frame.y + a + l) / s.height,
        o[2] = (t.frame.x + t.frame.width - a + l) / s.width,
        o[3] = (t.frame.y + t.frame.height - a + l) / s.height,
        this.uClampOffset[0] = this.clampOffset / s.pixelWidth,
        this.uClampOffset[1] = this.clampOffset / s.pixelHeight,
        this.isSimple = t.frame.width === s.width && t.frame.height === s.height && t.rotate === 0,
        !0
    }
}
class ct extends Jr {
    constructor({source: t, label: e, frame: r, orig: i, trim: s, defaultAnchor: o, defaultBorders: a, rotate: l, dynamic: u}={}) {
        if (super(),
        this.uid = me("texture"),
        this.uvs = {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            x3: 0,
            y3: 0
        },
        this.frame = new ce,
        this.noFrame = !1,
        this.dynamic = !1,
        this.isTexture = !0,
        this.label = e,
        this.source = t?.source ?? new fr,
        this.noFrame = !r,
        r)
            this.frame.copyFrom(r);
        else {
            const {width: c, height: f} = this._source;
            this.frame.width = c,
            this.frame.height = f
        }
        this.orig = i || this.frame,
        this.trim = s,
        this.rotate = l ?? 0,
        this.defaultAnchor = o,
        this.defaultBorders = a,
        this.destroyed = !1,
        this.dynamic = u || !1,
        this.updateUvs()
    }
    set source(t) {
        this._source && this._source.off("resize", this.update, this),
        this._source = t,
        t.on("resize", this.update, this),
        this.emit("update", this)
    }
    get source() {
        return this._source
    }
    get textureMatrix() {
        return this._textureMatrix || (this._textureMatrix = new ry(this)),
        this._textureMatrix
    }
    get width() {
        return this.orig.width
    }
    get height() {
        return this.orig.height
    }
    updateUvs() {
        const {uvs: t, frame: e} = this
          , {width: r, height: i} = this._source
          , s = e.x / r
          , o = e.y / i
          , a = e.width / r
          , l = e.height / i;
        let u = this.rotate;
        if (u) {
            const c = a / 2
              , f = l / 2
              , d = s + c
              , h = o + f;
            u = qt.add(u, qt.NW),
            t.x0 = d + c * qt.uX(u),
            t.y0 = h + f * qt.uY(u),
            u = qt.add(u, 2),
            t.x1 = d + c * qt.uX(u),
            t.y1 = h + f * qt.uY(u),
            u = qt.add(u, 2),
            t.x2 = d + c * qt.uX(u),
            t.y2 = h + f * qt.uY(u),
            u = qt.add(u, 2),
            t.x3 = d + c * qt.uX(u),
            t.y3 = h + f * qt.uY(u)
        } else
            t.x0 = s,
            t.y0 = o,
            t.x1 = s + a,
            t.y1 = o,
            t.x2 = s + a,
            t.y2 = o + l,
            t.x3 = s,
            t.y3 = o + l
    }
    destroy(t=!1) {
        this._source && t && (this._source.destroy(),
        this._source = null),
        this._textureMatrix = null,
        this.destroyed = !0,
        this.emit("destroy", this),
        this.removeAllListeners()
    }
    update() {
        this.noFrame && (this.frame.width = this._source.width,
        this.frame.height = this._source.height),
        this.updateUvs(),
        this.emit("update", this)
    }
    get baseTexture() {
        return J(zt, "Texture.baseTexture is now Texture.source"),
        this._source
    }
}
ct.EMPTY = new ct({
    label: "EMPTY",
    source: new fr({
        label: "EMPTY"
    })
});
ct.EMPTY.destroy = Dm;
ct.WHITE = new ct({
    source: new $h({
        resource: new Uint8Array([255, 255, 255, 255]),
        width: 1,
        height: 1,
        alphaMode: "premultiply-alpha-on-upload",
        label: "WHITE"
    }),
    label: "WHITE"
});
ct.WHITE.destroy = Dm;
function ny(n, t, e, r) {
    const {width: i, height: s} = e.orig
      , o = e.trim;
    if (o) {
        const a = o.width
          , l = o.height;
        n.minX = o.x - t._x * i - r,
        n.maxX = n.minX + a,
        n.minY = o.y - t._y * s - r,
        n.maxY = n.minY + l
    } else
        n.minX = -t._x * i - r,
        n.maxX = n.minX + i,
        n.minY = -t._y * s - r,
        n.maxY = n.minY + s
}
const jf = new Ot;
class _n {
    constructor(t=1 / 0, e=1 / 0, r=-1 / 0, i=-1 / 0) {
        this.minX = 1 / 0,
        this.minY = 1 / 0,
        this.maxX = -1 / 0,
        this.maxY = -1 / 0,
        this.matrix = jf,
        this.minX = t,
        this.minY = e,
        this.maxX = r,
        this.maxY = i
    }
    isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY
    }
    get rectangle() {
        this._rectangle || (this._rectangle = new ce);
        const t = this._rectangle;
        return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0,
        t.y = 0,
        t.width = 0,
        t.height = 0) : t.copyFromBounds(this),
        t
    }
    clear() {
        return this.minX = 1 / 0,
        this.minY = 1 / 0,
        this.maxX = -1 / 0,
        this.maxY = -1 / 0,
        this.matrix = jf,
        this
    }
    set(t, e, r, i) {
        this.minX = t,
        this.minY = e,
        this.maxX = r,
        this.maxY = i
    }
    addFrame(t, e, r, i, s) {
        s || (s = this.matrix);
        const o = s.a
          , a = s.b
          , l = s.c
          , u = s.d
          , c = s.tx
          , f = s.ty;
        let d = this.minX
          , h = this.minY
          , m = this.maxX
          , p = this.maxY
          , g = o * t + l * e + c
          , x = a * t + u * e + f;
        g < d && (d = g),
        x < h && (h = x),
        g > m && (m = g),
        x > p && (p = x),
        g = o * r + l * e + c,
        x = a * r + u * e + f,
        g < d && (d = g),
        x < h && (h = x),
        g > m && (m = g),
        x > p && (p = x),
        g = o * t + l * i + c,
        x = a * t + u * i + f,
        g < d && (d = g),
        x < h && (h = x),
        g > m && (m = g),
        x > p && (p = x),
        g = o * r + l * i + c,
        x = a * r + u * i + f,
        g < d && (d = g),
        x < h && (h = x),
        g > m && (m = g),
        x > p && (p = x),
        this.minX = d,
        this.minY = h,
        this.maxX = m,
        this.maxY = p
    }
    addRect(t, e) {
        this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e)
    }
    addBounds(t, e) {
        this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e)
    }
    addBoundsMask(t) {
        this.minX = this.minX > t.minX ? this.minX : t.minX,
        this.minY = this.minY > t.minY ? this.minY : t.minY,
        this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX,
        this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY
    }
    applyMatrix(t) {
        const e = this.minX
          , r = this.minY
          , i = this.maxX
          , s = this.maxY
          , {a: o, b: a, c: l, d: u, tx: c, ty: f} = t;
        let d = o * e + l * r + c
          , h = a * e + u * r + f;
        this.minX = d,
        this.minY = h,
        this.maxX = d,
        this.maxY = h,
        d = o * i + l * r + c,
        h = a * i + u * r + f,
        this.minX = d < this.minX ? d : this.minX,
        this.minY = h < this.minY ? h : this.minY,
        this.maxX = d > this.maxX ? d : this.maxX,
        this.maxY = h > this.maxY ? h : this.maxY,
        d = o * e + l * s + c,
        h = a * e + u * s + f,
        this.minX = d < this.minX ? d : this.minX,
        this.minY = h < this.minY ? h : this.minY,
        this.maxX = d > this.maxX ? d : this.maxX,
        this.maxY = h > this.maxY ? h : this.maxY,
        d = o * i + l * s + c,
        h = a * i + u * s + f,
        this.minX = d < this.minX ? d : this.minX,
        this.minY = h < this.minY ? h : this.minY,
        this.maxX = d > this.maxX ? d : this.maxX,
        this.maxY = h > this.maxY ? h : this.maxY
    }
    fit(t) {
        return this.minX < t.left && (this.minX = t.left),
        this.maxX > t.right && (this.maxX = t.right),
        this.minY < t.top && (this.minY = t.top),
        this.maxY > t.bottom && (this.maxY = t.bottom),
        this
    }
    fitBounds(t, e, r, i) {
        return this.minX < t && (this.minX = t),
        this.maxX > e && (this.maxX = e),
        this.minY < r && (this.minY = r),
        this.maxY > i && (this.maxY = i),
        this
    }
    pad(t, e=t) {
        return this.minX -= t,
        this.maxX += t,
        this.minY -= e,
        this.maxY += e,
        this
    }
    ceil() {
        return this.minX = Math.floor(this.minX),
        this.minY = Math.floor(this.minY),
        this.maxX = Math.ceil(this.maxX),
        this.maxY = Math.ceil(this.maxY),
        this
    }
    clone() {
        return new _n(this.minX,this.minY,this.maxX,this.maxY)
    }
    scale(t, e=t) {
        return this.minX *= t,
        this.minY *= e,
        this.maxX *= t,
        this.maxY *= e,
        this
    }
    get x() {
        return this.minX
    }
    set x(t) {
        const e = this.maxX - this.minX;
        this.minX = t,
        this.maxX = t + e
    }
    get y() {
        return this.minY
    }
    set y(t) {
        const e = this.maxY - this.minY;
        this.minY = t,
        this.maxY = t + e
    }
    get width() {
        return this.maxX - this.minX
    }
    set width(t) {
        this.maxX = this.minX + t
    }
    get height() {
        return this.maxY - this.minY
    }
    set height(t) {
        this.maxY = this.minY + t
    }
    get left() {
        return this.minX
    }
    get right() {
        return this.maxX
    }
    get top() {
        return this.minY
    }
    get bottom() {
        return this.maxY
    }
    get isPositive() {
        return this.maxX - this.minX > 0 && this.maxY - this.minY > 0
    }
    get isValid() {
        return this.minX + this.minY !== 1 / 0
    }
    addVertexData(t, e, r, i) {
        let s = this.minX
          , o = this.minY
          , a = this.maxX
          , l = this.maxY;
        i || (i = this.matrix);
        const u = i.a
          , c = i.b
          , f = i.c
          , d = i.d
          , h = i.tx
          , m = i.ty;
        for (let p = e; p < r; p += 2) {
            const g = t[p]
              , x = t[p + 1]
              , v = u * g + f * x + h
              , _ = c * g + d * x + m;
            s = v < s ? v : s,
            o = _ < o ? _ : o,
            a = v > a ? v : a,
            l = _ > l ? _ : l
        }
        this.minX = s,
        this.minY = o,
        this.maxX = a,
        this.maxY = l
    }
    containsPoint(t, e) {
        return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e
    }
    toString() {
        return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`
    }
}
var iy = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}
  , Sn = function(n) {
    return typeof n == "string" ? n.length > 0 : typeof n == "number"
}
  , Ae = function(n, t, e) {
    return t === void 0 && (t = 0),
    e === void 0 && (e = Math.pow(10, t)),
    Math.round(e * n) / e + 0
}
  , Br = function(n, t, e) {
    return t === void 0 && (t = 0),
    e === void 0 && (e = 1),
    n > e ? e : n > t ? n : t
}
  , Gm = function(n) {
    return (n = isFinite(n) ? n % 360 : 0) > 0 ? n : n + 360
}
  , qf = function(n) {
    return {
        r: Br(n.r, 0, 255),
        g: Br(n.g, 0, 255),
        b: Br(n.b, 0, 255),
        a: Br(n.a)
    }
}
  , ou = function(n) {
    return {
        r: Ae(n.r),
        g: Ae(n.g),
        b: Ae(n.b),
        a: Ae(n.a, 3)
    }
}
  , sy = /^#([0-9a-f]{3,8})$/i
  , xa = function(n) {
    var t = n.toString(16);
    return t.length < 2 ? "0" + t : t
}
  , Vm = function(n) {
    var t = n.r
      , e = n.g
      , r = n.b
      , i = n.a
      , s = Math.max(t, e, r)
      , o = s - Math.min(t, e, r)
      , a = o ? s === t ? (e - r) / o : s === e ? 2 + (r - t) / o : 4 + (t - e) / o : 0;
    return {
        h: 60 * (a < 0 ? a + 6 : a),
        s: s ? o / s * 100 : 0,
        v: s / 255 * 100,
        a: i
    }
}
  , Wm = function(n) {
    var t = n.h
      , e = n.s
      , r = n.v
      , i = n.a;
    t = t / 360 * 6,
    e /= 100,
    r /= 100;
    var s = Math.floor(t)
      , o = r * (1 - e)
      , a = r * (1 - (t - s) * e)
      , l = r * (1 - (1 - t + s) * e)
      , u = s % 6;
    return {
        r: 255 * [r, a, o, o, l, r][u],
        g: 255 * [l, r, r, a, o, o][u],
        b: 255 * [o, o, l, r, r, a][u],
        a: i
    }
}
  , Kf = function(n) {
    return {
        h: Gm(n.h),
        s: Br(n.s, 0, 100),
        l: Br(n.l, 0, 100),
        a: Br(n.a)
    }
}
  , Zf = function(n) {
    return {
        h: Ae(n.h),
        s: Ae(n.s),
        l: Ae(n.l),
        a: Ae(n.a, 3)
    }
}
  , Qf = function(n) {
    return Wm((e = (t = n).s,
    {
        h: t.h,
        s: (e *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0 ? 2 * e / (r + e) * 100 : 0,
        v: r + e,
        a: t.a
    }));
    var t, e, r
}
  , wo = function(n) {
    return {
        h: (t = Vm(n)).h,
        s: (i = (200 - (e = t.s)) * (r = t.v) / 100) > 0 && i < 200 ? e * r / 100 / (i <= 100 ? i : 200 - i) * 100 : 0,
        l: i / 2,
        a: t.a
    };
    var t, e, r, i
}
  , oy = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , ay = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , ly = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , uy = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , bc = {
    string: [[function(n) {
        var t = sy.exec(n);
        return t ? (n = t[1]).length <= 4 ? {
            r: parseInt(n[0] + n[0], 16),
            g: parseInt(n[1] + n[1], 16),
            b: parseInt(n[2] + n[2], 16),
            a: n.length === 4 ? Ae(parseInt(n[3] + n[3], 16) / 255, 2) : 1
        } : n.length === 6 || n.length === 8 ? {
            r: parseInt(n.substr(0, 2), 16),
            g: parseInt(n.substr(2, 2), 16),
            b: parseInt(n.substr(4, 2), 16),
            a: n.length === 8 ? Ae(parseInt(n.substr(6, 2), 16) / 255, 2) : 1
        } : null : null
    }
    , "hex"], [function(n) {
        var t = ly.exec(n) || uy.exec(n);
        return t ? t[2] !== t[4] || t[4] !== t[6] ? null : qf({
            r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
            g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
            b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
            a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
        }) : null
    }
    , "rgb"], [function(n) {
        var t = oy.exec(n) || ay.exec(n);
        if (!t)
            return null;
        var e, r, i = Kf({
            h: (e = t[1],
            r = t[2],
            r === void 0 && (r = "deg"),
            Number(e) * (iy[r] || 1)),
            s: Number(t[3]),
            l: Number(t[4]),
            a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
        });
        return Qf(i)
    }
    , "hsl"]],
    object: [[function(n) {
        var t = n.r
          , e = n.g
          , r = n.b
          , i = n.a
          , s = i === void 0 ? 1 : i;
        return Sn(t) && Sn(e) && Sn(r) ? qf({
            r: Number(t),
            g: Number(e),
            b: Number(r),
            a: Number(s)
        }) : null
    }
    , "rgb"], [function(n) {
        var t = n.h
          , e = n.s
          , r = n.l
          , i = n.a
          , s = i === void 0 ? 1 : i;
        if (!Sn(t) || !Sn(e) || !Sn(r))
            return null;
        var o = Kf({
            h: Number(t),
            s: Number(e),
            l: Number(r),
            a: Number(s)
        });
        return Qf(o)
    }
    , "hsl"], [function(n) {
        var t = n.h
          , e = n.s
          , r = n.v
          , i = n.a
          , s = i === void 0 ? 1 : i;
        if (!Sn(t) || !Sn(e) || !Sn(r))
            return null;
        var o = function(a) {
            return {
                h: Gm(a.h),
                s: Br(a.s, 0, 100),
                v: Br(a.v, 0, 100),
                a: Br(a.a)
            }
        }({
            h: Number(t),
            s: Number(e),
            v: Number(r),
            a: Number(s)
        });
        return Wm(o)
    }
    , "hsv"]]
}
  , Jf = function(n, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e][0](n);
        if (r)
            return [r, t[e][1]]
    }
    return [null, void 0]
}
  , cy = function(n) {
    return typeof n == "string" ? Jf(n.trim(), bc.string) : typeof n == "object" && n !== null ? Jf(n, bc.object) : [null, void 0]
}
  , au = function(n, t) {
    var e = wo(n);
    return {
        h: e.h,
        s: Br(e.s + 100 * t, 0, 100),
        l: e.l,
        a: e.a
    }
}
  , lu = function(n) {
    return (299 * n.r + 587 * n.g + 114 * n.b) / 1e3 / 255
}
  , td = function(n, t) {
    var e = wo(n);
    return {
        h: e.h,
        s: e.s,
        l: Br(e.l + 100 * t, 0, 100),
        a: e.a
    }
}
  , Sc = function() {
    function n(t) {
        this.parsed = cy(t)[0],
        this.rgba = this.parsed || {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }
    }
    return n.prototype.isValid = function() {
        return this.parsed !== null
    }
    ,
    n.prototype.brightness = function() {
        return Ae(lu(this.rgba), 2)
    }
    ,
    n.prototype.isDark = function() {
        return lu(this.rgba) < .5
    }
    ,
    n.prototype.isLight = function() {
        return lu(this.rgba) >= .5
    }
    ,
    n.prototype.toHex = function() {
        return t = ou(this.rgba),
        e = t.r,
        r = t.g,
        i = t.b,
        o = (s = t.a) < 1 ? xa(Ae(255 * s)) : "",
        "#" + xa(e) + xa(r) + xa(i) + o;
        var t, e, r, i, s, o
    }
    ,
    n.prototype.toRgb = function() {
        return ou(this.rgba)
    }
    ,
    n.prototype.toRgbString = function() {
        return t = ou(this.rgba),
        e = t.r,
        r = t.g,
        i = t.b,
        (s = t.a) < 1 ? "rgba(" + e + ", " + r + ", " + i + ", " + s + ")" : "rgb(" + e + ", " + r + ", " + i + ")";
        var t, e, r, i, s
    }
    ,
    n.prototype.toHsl = function() {
        return Zf(wo(this.rgba))
    }
    ,
    n.prototype.toHslString = function() {
        return t = Zf(wo(this.rgba)),
        e = t.h,
        r = t.s,
        i = t.l,
        (s = t.a) < 1 ? "hsla(" + e + ", " + r + "%, " + i + "%, " + s + ")" : "hsl(" + e + ", " + r + "%, " + i + "%)";
        var t, e, r, i, s
    }
    ,
    n.prototype.toHsv = function() {
        return t = Vm(this.rgba),
        {
            h: Ae(t.h),
            s: Ae(t.s),
            v: Ae(t.v),
            a: Ae(t.a, 3)
        };
        var t
    }
    ,
    n.prototype.invert = function() {
        return ln({
            r: 255 - (t = this.rgba).r,
            g: 255 - t.g,
            b: 255 - t.b,
            a: t.a
        });
        var t
    }
    ,
    n.prototype.saturate = function(t) {
        return t === void 0 && (t = .1),
        ln(au(this.rgba, t))
    }
    ,
    n.prototype.desaturate = function(t) {
        return t === void 0 && (t = .1),
        ln(au(this.rgba, -t))
    }
    ,
    n.prototype.grayscale = function() {
        return ln(au(this.rgba, -1))
    }
    ,
    n.prototype.lighten = function(t) {
        return t === void 0 && (t = .1),
        ln(td(this.rgba, t))
    }
    ,
    n.prototype.darken = function(t) {
        return t === void 0 && (t = .1),
        ln(td(this.rgba, -t))
    }
    ,
    n.prototype.rotate = function(t) {
        return t === void 0 && (t = 15),
        this.hue(this.hue() + t)
    }
    ,
    n.prototype.alpha = function(t) {
        return typeof t == "number" ? ln({
            r: (e = this.rgba).r,
            g: e.g,
            b: e.b,
            a: t
        }) : Ae(this.rgba.a, 3);
        var e
    }
    ,
    n.prototype.hue = function(t) {
        var e = wo(this.rgba);
        return typeof t == "number" ? ln({
            h: t,
            s: e.s,
            l: e.l,
            a: e.a
        }) : Ae(e.h)
    }
    ,
    n.prototype.isEqual = function(t) {
        return this.toHex() === ln(t).toHex()
    }
    ,
    n
}()
  , ln = function(n) {
    return n instanceof Sc ? n : new Sc(n)
}
  , ed = []
  , hy = function(n) {
    n.forEach(function(t) {
        ed.indexOf(t) < 0 && (t(Sc, bc),
        ed.push(t))
    })
};
function fy(n, t) {
    var e = {
        white: "#ffffff",
        bisque: "#ffe4c4",
        blue: "#0000ff",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        azure: "#f0ffff",
        whitesmoke: "#f5f5f5",
        papayawhip: "#ffefd5",
        plum: "#dda0dd",
        blanchedalmond: "#ffebcd",
        black: "#000000",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        cornsilk: "#fff8dc",
        cornflowerblue: "#6495ed",
        burlywood: "#deb887",
        aquamarine: "#7fffd4",
        beige: "#f5f5dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkkhaki: "#bdb76b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        peachpuff: "#ffdab9",
        darkmagenta: "#8b008b",
        darkred: "#8b0000",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkslateblue: "#483d8b",
        gray: "#808080",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        wheat: "#f5deb3",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        ghostwhite: "#f8f8ff",
        darkviolet: "#9400d3",
        magenta: "#ff00ff",
        green: "#008000",
        dodgerblue: "#1e90ff",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        blueviolet: "#8a2be2",
        forestgreen: "#228b22",
        lawngreen: "#7cfc00",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        fuchsia: "#ff00ff",
        brown: "#a52a2a",
        maroon: "#800000",
        mediumblue: "#0000cd",
        lightcoral: "#f08080",
        darkturquoise: "#00ced1",
        lightcyan: "#e0ffff",
        ivory: "#fffff0",
        lightyellow: "#ffffe0",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        linen: "#faf0e6",
        mediumaquamarine: "#66cdaa",
        lemonchiffon: "#fffacd",
        lime: "#00ff00",
        khaki: "#f0e68c",
        mediumseagreen: "#3cb371",
        limegreen: "#32cd32",
        mediumspringgreen: "#00fa9a",
        lightskyblue: "#87cefa",
        lightblue: "#add8e6",
        midnightblue: "#191970",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        mintcream: "#f5fffa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        navajowhite: "#ffdead",
        navy: "#000080",
        mediumvioletred: "#c71585",
        powderblue: "#b0e0e6",
        palegoldenrod: "#eee8aa",
        oldlace: "#fdf5e6",
        paleturquoise: "#afeeee",
        mediumturquoise: "#48d1cc",
        mediumorchid: "#ba55d3",
        rebeccapurple: "#663399",
        lightsteelblue: "#b0c4de",
        mediumslateblue: "#7b68ee",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        orchid: "#da70d6",
        mediumpurple: "#9370db",
        purple: "#800080",
        pink: "#ffc0cb",
        skyblue: "#87ceeb",
        springgreen: "#00ff7f",
        palegreen: "#98fb98",
        red: "#ff0000",
        yellow: "#ffff00",
        slateblue: "#6a5acd",
        lavenderblush: "#fff0f5",
        peru: "#cd853f",
        palevioletred: "#db7093",
        violet: "#ee82ee",
        teal: "#008080",
        slategray: "#708090",
        slategrey: "#708090",
        aliceblue: "#f0f8ff",
        darkseagreen: "#8fbc8f",
        darkolivegreen: "#556b2f",
        greenyellow: "#adff2f",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        tomato: "#ff6347",
        silver: "#c0c0c0",
        sienna: "#a0522d",
        lavender: "#e6e6fa",
        lightgreen: "#90ee90",
        orange: "#ffa500",
        orangered: "#ff4500",
        steelblue: "#4682b4",
        royalblue: "#4169e1",
        turquoise: "#40e0d0",
        yellowgreen: "#9acd32",
        salmon: "#fa8072",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        darksalmon: "#e9967a",
        lightgoldenrodyellow: "#fafad2",
        snow: "#fffafa",
        lightgrey: "#d3d3d3",
        lightgray: "#d3d3d3",
        dimgray: "#696969",
        dimgrey: "#696969",
        olivedrab: "#6b8e23",
        olive: "#808000"
    }
      , r = {};
    for (var i in e)
        r[e[i]] = i;
    var s = {};
    n.prototype.toName = function(o) {
        if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
            return "transparent";
        var a, l, u = r[this.toHex()];
        if (u)
            return u;
        if (o?.closest) {
            var c = this.toRgb()
              , f = 1 / 0
              , d = "black";
            if (!s.length)
                for (var h in e)
                    s[h] = new n(e[h]).toRgb();
            for (var m in e) {
                var p = (a = c,
                l = s[m],
                Math.pow(a.r - l.r, 2) + Math.pow(a.g - l.g, 2) + Math.pow(a.b - l.b, 2));
                p < f && (f = p,
                d = m)
            }
            return d
        }
    }
    ,
    t.string.push([function(o) {
        var a = o.toLowerCase()
          , l = a === "transparent" ? "#0000" : e[a];
        return l ? new n(l).toRgb() : null
    }
    , "name"])
}
hy([fy]);
const Ds = class lo {
    constructor(t=16777215) {
        this._value = null,
        this._components = new Float32Array(4),
        this._components.fill(1),
        this._int = 16777215,
        this.value = t
    }
    get red() {
        return this._components[0]
    }
    get green() {
        return this._components[1]
    }
    get blue() {
        return this._components[2]
    }
    get alpha() {
        return this._components[3]
    }
    setValue(t) {
        return this.value = t,
        this
    }
    set value(t) {
        if (t instanceof lo)
            this._value = this._cloneSource(t._value),
            this._int = t._int,
            this._components.set(t._components);
        else {
            if (t === null)
                throw new Error("Cannot set Color#value to null");
            (this._value === null || !this._isSourceEqual(this._value, t)) && (this._value = this._cloneSource(t),
            this._normalize(this._value))
        }
    }
    get value() {
        return this._value
    }
    _cloneSource(t) {
        return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? {
            ...t
        } : t
    }
    _isSourceEqual(t, e) {
        const r = typeof t;
        if (r !== typeof e)
            return !1;
        if (r === "number" || r === "string" || t instanceof Number)
            return t === e;
        if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
            return t.length !== e.length ? !1 : t.every( (s, o) => s === e[o]);
        if (t !== null && e !== null) {
            const s = Object.keys(t)
              , o = Object.keys(e);
            return s.length !== o.length ? !1 : s.every(a => t[a] === e[a])
        }
        return t === e
    }
    toRgba() {
        const [t,e,r,i] = this._components;
        return {
            r: t,
            g: e,
            b: r,
            a: i
        }
    }
    toRgb() {
        const [t,e,r] = this._components;
        return {
            r: t,
            g: e,
            b: r
        }
    }
    toRgbaString() {
        const [t,e,r] = this.toUint8RgbArray();
        return `rgba(${t},${e},${r},${this.alpha})`
    }
    toUint8RgbArray(t) {
        const [e,r,i] = this._components;
        return this._arrayRgb || (this._arrayRgb = []),
        t = t || this._arrayRgb,
        t[0] = Math.round(e * 255),
        t[1] = Math.round(r * 255),
        t[2] = Math.round(i * 255),
        t
    }
    toArray(t) {
        this._arrayRgba || (this._arrayRgba = []),
        t = t || this._arrayRgba;
        const [e,r,i,s] = this._components;
        return t[0] = e,
        t[1] = r,
        t[2] = i,
        t[3] = s,
        t
    }
    toRgbArray(t) {
        this._arrayRgb || (this._arrayRgb = []),
        t = t || this._arrayRgb;
        const [e,r,i] = this._components;
        return t[0] = e,
        t[1] = r,
        t[2] = i,
        t
    }
    toNumber() {
        return this._int
    }
    toBgrNumber() {
        const [t,e,r] = this.toUint8RgbArray();
        return (r << 16) + (e << 8) + t
    }
    toLittleEndianNumber() {
        const t = this._int;
        return (t >> 16) + (t & 65280) + ((t & 255) << 16)
    }
    multiply(t) {
        const [e,r,i,s] = lo._temp.setValue(t)._components;
        return this._components[0] *= e,
        this._components[1] *= r,
        this._components[2] *= i,
        this._components[3] *= s,
        this._refreshInt(),
        this._value = null,
        this
    }
    premultiply(t, e=!0) {
        return e && (this._components[0] *= t,
        this._components[1] *= t,
        this._components[2] *= t),
        this._components[3] = t,
        this._refreshInt(),
        this._value = null,
        this
    }
    toPremultiplied(t, e=!0) {
        if (t === 1)
            return (255 << 24) + this._int;
        if (t === 0)
            return e ? 0 : this._int;
        let r = this._int >> 16 & 255
          , i = this._int >> 8 & 255
          , s = this._int & 255;
        return e && (r = r * t + .5 | 0,
        i = i * t + .5 | 0,
        s = s * t + .5 | 0),
        (t * 255 << 24) + (r << 16) + (i << 8) + s
    }
    toHex() {
        const t = this._int.toString(16);
        return `#${"000000".substring(0, 6 - t.length) + t}`
    }
    toHexa() {
        const e = Math.round(this._components[3] * 255).toString(16);
        return this.toHex() + "00".substring(0, 2 - e.length) + e
    }
    setAlpha(t) {
        return this._components[3] = this._clamp(t),
        this
    }
    _normalize(t) {
        let e, r, i, s;
        if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
            const o = t;
            e = (o >> 16 & 255) / 255,
            r = (o >> 8 & 255) / 255,
            i = (o & 255) / 255,
            s = 1
        } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t),
            [e,r,i,s=1] = t;
        else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t, 0, 255),
            [e,r,i,s=255] = t,
            e /= 255,
            r /= 255,
            i /= 255,
            s /= 255;
        else if (typeof t == "string" || typeof t == "object") {
            if (typeof t == "string") {
                const a = lo.HEX_PATTERN.exec(t);
                a && (t = `#${a[2]}`)
            }
            const o = ln(t);
            o.isValid() && ({r: e, g: r, b: i, a: s} = o.rgba,
            e /= 255,
            r /= 255,
            i /= 255)
        }
        if (e !== void 0)
            this._components[0] = e,
            this._components[1] = r,
            this._components[2] = i,
            this._components[3] = s,
            this._refreshInt();
        else
            throw new Error(`Unable to convert color ${t}`)
    }
    _refreshInt() {
        this._clamp(this._components);
        const [t,e,r] = this._components;
        this._int = (t * 255 << 16) + (e * 255 << 8) + (r * 255 | 0)
    }
    _clamp(t, e=0, r=1) {
        return typeof t == "number" ? Math.min(Math.max(t, e), r) : (t.forEach( (i, s) => {
            t[s] = Math.min(Math.max(i, e), r)
        }
        ),
        t)
    }
    static isColorLike(t) {
        return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof lo || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0
    }
}
;
Ds.shared = new Ds;
Ds._temp = new Ds;
Ds.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let At = Ds;
const dy = {
    cullArea: null,
    cullable: !1,
    cullableChildren: !0
};
class Nh {
    constructor(t, e) {
        this._pool = [],
        this._count = 0,
        this._index = 0,
        this._classType = t,
        e && this.prepopulate(e)
    }
    prepopulate(t) {
        for (let e = 0; e < t; e++)
            this._pool[this._index++] = new this._classType;
        this._count += t
    }
    get(t) {
        let e;
        return this._index > 0 ? e = this._pool[--this._index] : e = new this._classType,
        e.init?.(t),
        e
    }
    return(t) {
        t.reset?.(),
        this._pool[this._index++] = t
    }
    get totalSize() {
        return this._count
    }
    get totalFree() {
        return this._index
    }
    get totalUsed() {
        return this._count - this._index
    }
    clear() {
        this._pool.length = 0,
        this._index = 0
    }
}
class py {
    constructor() {
        this._poolsByClass = new Map
    }
    prepopulate(t, e) {
        this.getPool(t).prepopulate(e)
    }
    get(t, e) {
        return this.getPool(t).get(e)
    }
    return(t) {
        this.getPool(t.constructor).return(t)
    }
    getPool(t) {
        return this._poolsByClass.has(t) || this._poolsByClass.set(t, new Nh(t)),
        this._poolsByClass.get(t)
    }
    stats() {
        const t = {};
        return this._poolsByClass.forEach(e => {
            const r = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
            t[r] = {
                free: e.totalFree,
                used: e.totalUsed,
                size: e.totalSize
            }
        }
        ),
        t
    }
}
const In = new py;
function my(n, t, e) {
    const r = n.length;
    let i;
    if (t >= r || e === 0)
        return;
    e = t + e > r ? r - t : e;
    const s = r - e;
    for (i = t; i < s; ++i)
        n[i] = n[i + e];
    n.length = s
}
const gy = {
    allowChildren: !0,
    removeChildren(n=0, t) {
        const e = t ?? this.children.length
          , r = e - n
          , i = [];
        if (r > 0 && r <= e) {
            for (let o = e - 1; o >= n; o--) {
                const a = this.children[o];
                a && (i.push(a),
                a.parent = null)
            }
            my(this.children, n, e);
            const s = this.renderGroup || this.parentRenderGroup;
            s && s.removeChildren(i);
            for (let o = 0; o < i.length; ++o)
                this.emit("childRemoved", i[o], this, o),
                i[o].emit("removed", this);
            return i
        } else if (r === 0 && this.children.length === 0)
            return i;
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    },
    removeChildAt(n) {
        const t = this.getChildAt(n);
        return this.removeChild(t)
    },
    getChildAt(n) {
        if (n < 0 || n >= this.children.length)
            throw new Error(`getChildAt: Index (${n}) does not exist.`);
        return this.children[n]
    },
    setChildIndex(n, t) {
        if (t < 0 || t >= this.children.length)
            throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
        this.getChildIndex(n),
        this.addChildAt(n, t)
    },
    getChildIndex(n) {
        const t = this.children.indexOf(n);
        if (t === -1)
            throw new Error("The supplied Container must be a child of the caller");
        return t
    },
    addChildAt(n, t) {
        this.allowChildren || J(zt, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
        const {children: e} = this;
        if (t < 0 || t > e.length)
            throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);
        if (n.parent) {
            const i = n.parent.children.indexOf(n);
            if (n.parent === this && i === t)
                return n;
            i !== -1 && n.parent.children.splice(i, 1)
        }
        t === e.length ? e.push(n) : e.splice(t, 0, n),
        n.parent = this,
        n.didChange = !0,
        n._updateFlags = 15;
        const r = this.renderGroup || this.parentRenderGroup;
        return r && r.addChild(n),
        this.sortableChildren && (this.sortDirty = !0),
        this.emit("childAdded", n, this, t),
        n.emit("added", this),
        n
    },
    swapChildren(n, t) {
        if (n === t)
            return;
        const e = this.getChildIndex(n)
          , r = this.getChildIndex(t);
        this.children[e] = t,
        this.children[r] = n;
        const i = this.renderGroup || this.parentRenderGroup;
        i && (i.structureDidChange = !0),
        this._didContainerChangeTick++
    },
    removeFromParent() {
        this.parent?.removeChild(this)
    },
    reparentChild(...n) {
        return n.length === 1 ? this.reparentChildAt(n[0], this.children.length) : (n.forEach(t => this.reparentChildAt(t, this.children.length)),
        n[0])
    },
    reparentChildAt(n, t) {
        if (n.parent === this)
            return this.setChildIndex(n, t),
            n;
        const e = n.worldTransform.clone();
        n.removeFromParent(),
        this.addChildAt(n, t);
        const r = this.worldTransform.clone();
        return r.invert(),
        e.prepend(r),
        n.setFromMatrix(e),
        n
    }
};
class rd {
    constructor() {
        this.pipe = "filter",
        this.priority = 1
    }
    destroy() {
        for (let t = 0; t < this.filters.length; t++)
            this.filters[t].destroy();
        this.filters = null,
        this.filterArea = null
    }
}
class xy {
    constructor() {
        this._effectClasses = [],
        this._tests = [],
        this._initialized = !1
    }
    init() {
        this._initialized || (this._initialized = !0,
        this._effectClasses.forEach(t => {
            this.add({
                test: t.test,
                maskClass: t
            })
        }
        ))
    }
    add(t) {
        this._tests.push(t)
    }
    getMaskEffect(t) {
        this._initialized || this.init();
        for (let e = 0; e < this._tests.length; e++) {
            const r = this._tests[e];
            if (r.test(t))
                return In.get(r.maskClass, t)
        }
        return t
    }
    returnMaskEffect(t) {
        In.return(t)
    }
}
const wc = new xy;
Qe.handleByList(Q.MaskEffect, wc._effectClasses);
const vy = {
    _maskEffect: null,
    _maskOptions: {
        inverse: !1
    },
    _filterEffect: null,
    effects: [],
    addEffect(n) {
        if (this.effects.indexOf(n) !== -1)
            return;
        this.effects.push(n),
        this.effects.sort( (r, i) => r.priority - i.priority);
        const e = this.renderGroup || this.parentRenderGroup;
        e && (e.structureDidChange = !0),
        this._updateIsSimple()
    },
    removeEffect(n) {
        const t = this.effects.indexOf(n);
        t !== -1 && (this.effects.splice(t, 1),
        this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
        this._updateIsSimple())
    },
    set mask(n) {
        const t = this._maskEffect;
        t?.mask !== n && (t && (this.removeEffect(t),
        wc.returnMaskEffect(t),
        this._maskEffect = null),
        n != null && (this._maskEffect = wc.getMaskEffect(n),
        this.addEffect(this._maskEffect)))
    },
    setMask(n) {
        this._maskOptions = {
            ...this._maskOptions,
            ...n
        },
        n.mask && (this.mask = n.mask)
    },
    get mask() {
        return this._maskEffect?.mask
    },
    set filters(n) {
        !Array.isArray(n) && n && (n = [n]);
        const t = this._filterEffect || (this._filterEffect = new rd);
        n = n;
        const e = n?.length > 0
          , r = t.filters?.length > 0
          , i = e !== r;
        n = Array.isArray(n) ? n.slice(0) : n,
        t.filters = Object.freeze(n),
        i && (e ? this.addEffect(t) : (this.removeEffect(t),
        t.filters = n ?? null))
    },
    get filters() {
        return this._filterEffect?.filters
    },
    set filterArea(n) {
        this._filterEffect || (this._filterEffect = new rd),
        this._filterEffect.filterArea = n
    },
    get filterArea() {
        return this._filterEffect?.filterArea
    }
}
  , _y = {
    label: null,
    get name() {
        return J(zt, "Container.name property has been removed, use Container.label instead"),
        this.label
    },
    set name(n) {
        J(zt, "Container.name property has been removed, use Container.label instead"),
        this.label = n
    },
    getChildByName(n, t=!1) {
        return this.getChildByLabel(n, t)
    },
    getChildByLabel(n, t=!1) {
        const e = this.children;
        for (let r = 0; r < e.length; r++) {
            const i = e[r];
            if (i.label === n || n instanceof RegExp && n.test(i.label))
                return i
        }
        if (t)
            for (let r = 0; r < e.length; r++) {
                const s = e[r].getChildByLabel(n, !0);
                if (s)
                    return s
            }
        return null
    },
    getChildrenByLabel(n, t=!1, e=[]) {
        const r = this.children;
        for (let i = 0; i < r.length; i++) {
            const s = r[i];
            (s.label === n || n instanceof RegExp && n.test(s.label)) && e.push(s)
        }
        if (t)
            for (let i = 0; i < r.length; i++)
                r[i].getChildrenByLabel(n, !0, e);
        return e
    }
}
  , kn = new Nh(Ot)
  , Bs = new Nh(_n);
function Xm(n, t, e) {
    e.clear();
    let r, i;
    return n.parent ? t ? r = n.parent.worldTransform : (i = kn.get().identity(),
    r = Sl(n, i)) : r = Ot.IDENTITY,
    Hm(n, e, r, t),
    i && kn.return(i),
    e.isValid || e.set(0, 0, 0, 0),
    e
}
function Hm(n, t, e, r) {
    if (!n.visible || !n.measurable)
        return;
    let i;
    r ? i = n.worldTransform : (n.updateLocalTransform(),
    i = kn.get(),
    i.appendFrom(n.localTransform, e));
    const s = t
      , o = !!n.effects.length;
    if (o && (t = Bs.get().clear()),
    n.boundsArea)
        t.addRect(n.boundsArea, i);
    else {
        n.addBounds && (t.matrix = i,
        n.addBounds(t));
        for (let a = 0; a < n.children.length; a++)
            Hm(n.children[a], t, i, r)
    }
    if (o) {
        for (let a = 0; a < n.effects.length; a++)
            n.effects[a].addBounds?.(t);
        s.addBounds(t, Ot.IDENTITY),
        Bs.return(t)
    }
    r || kn.return(i)
}
function Sl(n, t) {
    const e = n.parent;
    return e && (Sl(e, t),
    e.updateLocalTransform(),
    t.append(e.localTransform)),
    t
}
let uu = 0;
const nd = 500;
function ge(...n) {
    uu !== nd && (uu++,
    uu === nd ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...n))
}
function Ym(n, t, e) {
    return t.clear(),
    e || (e = Ot.IDENTITY),
    jm(n, t, e, n, !0),
    t.isValid || t.set(0, 0, 0, 0),
    t
}
function jm(n, t, e, r, i) {
    let s;
    if (i)
        s = kn.get(),
        s = e.copyTo(s);
    else {
        if (!n.visible || !n.measurable)
            return;
        n.updateLocalTransform();
        const l = n.localTransform;
        s = kn.get(),
        s.appendFrom(l, e)
    }
    const o = t
      , a = !!n.effects.length;
    if (a && (t = Bs.get().clear()),
    n.boundsArea)
        t.addRect(n.boundsArea, s);
    else {
        n.renderPipeId && (t.matrix = s,
        n.addBounds(t));
        const l = n.children;
        for (let u = 0; u < l.length; u++)
            jm(l[u], t, s, r, !1)
    }
    if (a) {
        for (let l = 0; l < n.effects.length; l++)
            n.effects[l].addLocalBounds?.(t, r);
        o.addBounds(t, Ot.IDENTITY),
        Bs.return(t)
    }
    kn.return(s)
}
function qm(n, t) {
    const e = n.children;
    for (let r = 0; r < e.length; r++) {
        const i = e[r]
          , s = i.uid
          , o = (i._didViewChangeTick & 65535) << 16 | i._didContainerChangeTick & 65535
          , a = t.index;
        (t.data[a] !== s || t.data[a + 1] !== o) && (t.data[t.index] = s,
        t.data[t.index + 1] = o,
        t.didChange = !0),
        t.index = a + 2,
        i.children.length && qm(i, t)
    }
    return t.didChange
}
const yy = new Ot
  , by = {
    _localBoundsCacheId: -1,
    _localBoundsCacheData: null,
    _setWidth(n, t) {
        const e = Math.sign(this.scale.x) || 1;
        t !== 0 ? this.scale.x = n / t * e : this.scale.x = e
    },
    _setHeight(n, t) {
        const e = Math.sign(this.scale.y) || 1;
        t !== 0 ? this.scale.y = n / t * e : this.scale.y = e
    },
    getLocalBounds() {
        this._localBoundsCacheData || (this._localBoundsCacheData = {
            data: [],
            index: 1,
            didChange: !1,
            localBounds: new _n
        });
        const n = this._localBoundsCacheData;
        return n.index = 1,
        n.didChange = !1,
        n.data[0] !== this._didViewChangeTick && (n.didChange = !0,
        n.data[0] = this._didViewChangeTick),
        qm(this, n),
        n.didChange && Ym(this, n.localBounds, yy),
        n.localBounds
    },
    getBounds(n, t) {
        return Xm(this, n, t || new _n)
    }
}
  , Sy = {
    _onRender: null,
    set onRender(n) {
        const t = this.renderGroup || this.parentRenderGroup;
        if (!n) {
            this._onRender && t?.removeOnRender(this),
            this._onRender = null;
            return
        }
        this._onRender || t?.addOnRender(this),
        this._onRender = n
    },
    get onRender() {
        return this._onRender
    }
}
  , wy = {
    _zIndex: 0,
    sortDirty: !1,
    sortableChildren: !1,
    get zIndex() {
        return this._zIndex
    },
    set zIndex(n) {
        this._zIndex !== n && (this._zIndex = n,
        this.depthOfChildModified())
    },
    depthOfChildModified() {
        this.parent && (this.parent.sortableChildren = !0,
        this.parent.sortDirty = !0),
        this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0)
    },
    sortChildren() {
        this.sortDirty && (this.sortDirty = !1,
        this.children.sort(Cy))
    }
};
function Cy(n, t) {
    return n._zIndex - t._zIndex
}
const Ty = {
    getGlobalPosition(n=new Be, t=!1) {
        return this.parent ? this.parent.toGlobal(this._position, n, t) : (n.x = this._position.x,
        n.y = this._position.y),
        n
    },
    toGlobal(n, t, e=!1) {
        if (!e) {
            this.updateLocalTransform();
            const r = Sl(this, new Ot);
            return r.append(this.localTransform),
            r.apply(n, t)
        }
        return this.worldTransform.apply(n, t)
    },
    toLocal(n, t, e, r) {
        if (t && (n = t.toGlobal(n, e, r)),
        !r) {
            this.updateLocalTransform();
            const i = Sl(this, new Ot);
            return i.append(this.localTransform),
            i.applyInverse(n, e)
        }
        return this.worldTransform.applyInverse(n, e)
    }
};
let Ay = 0;
class Km {
    constructor() {
        this.uid = me("instructionSet"),
        this.instructions = [],
        this.instructionSize = 0,
        this.renderables = [],
        this.tick = 0
    }
    reset() {
        this.instructionSize = 0,
        this.tick = Ay++
    }
    add(t) {
        this.instructions[this.instructionSize++] = t
    }
    log() {
        this.instructions.length = this.instructionSize,
        console.table(this.instructions, ["type", "action"])
    }
}
class Py {
    constructor() {
        this.renderPipeId = "renderGroup",
        this.root = null,
        this.canBundle = !1,
        this.renderGroupParent = null,
        this.renderGroupChildren = [],
        this.worldTransform = new Ot,
        this.worldColorAlpha = 4294967295,
        this.worldColor = 16777215,
        this.worldAlpha = 1,
        this.childrenToUpdate = Object.create(null),
        this.updateTick = 0,
        this.childrenRenderablesToUpdate = {
            list: [],
            index: 0
        },
        this.structureDidChange = !0,
        this.instructionSet = new Km,
        this._onRenderContainers = []
    }
    init(t) {
        this.root = t,
        t._onRender && this.addOnRender(t),
        t.didChange = !0;
        const e = t.children;
        for (let r = 0; r < e.length; r++)
            this.addChild(e[r])
    }
    reset() {
        this.renderGroupChildren.length = 0;
        for (const t in this.childrenToUpdate) {
            const e = this.childrenToUpdate[t];
            e.list.fill(null),
            e.index = 0
        }
        this.childrenRenderablesToUpdate.index = 0,
        this.childrenRenderablesToUpdate.list.fill(null),
        this.root = null,
        this.updateTick = 0,
        this.structureDidChange = !0,
        this._onRenderContainers.length = 0,
        this.renderGroupParent = null
    }
    get localTransform() {
        return this.root.localTransform
    }
    addRenderGroupChild(t) {
        t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t),
        t.renderGroupParent = this,
        this.renderGroupChildren.push(t)
    }
    _removeRenderGroupChild(t) {
        const e = this.renderGroupChildren.indexOf(t);
        e > -1 && this.renderGroupChildren.splice(e, 1),
        t.renderGroupParent = null
    }
    addChild(t) {
        if (this.structureDidChange = !0,
        t.parentRenderGroup = this,
        t.updateTick = -1,
        t.parent === this.root ? t.relativeRenderGroupDepth = 1 : t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1,
        t.didChange = !0,
        this.onChildUpdate(t),
        t.renderGroup) {
            this.addRenderGroupChild(t.renderGroup);
            return
        }
        t._onRender && this.addOnRender(t);
        const e = t.children;
        for (let r = 0; r < e.length; r++)
            this.addChild(e[r])
    }
    removeChild(t) {
        if (this.structureDidChange = !0,
        t._onRender && (t.renderGroup || this.removeOnRender(t)),
        t.parentRenderGroup = null,
        t.renderGroup) {
            this._removeRenderGroupChild(t.renderGroup);
            return
        }
        const e = t.children;
        for (let r = 0; r < e.length; r++)
            this.removeChild(e[r])
    }
    removeChildren(t) {
        for (let e = 0; e < t.length; e++)
            this.removeChild(t[e])
    }
    onChildUpdate(t) {
        let e = this.childrenToUpdate[t.relativeRenderGroupDepth];
        e || (e = this.childrenToUpdate[t.relativeRenderGroupDepth] = {
            index: 0,
            list: []
        }),
        e.list[e.index++] = t
    }
    updateRenderable(t) {
        t.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),
        t.didViewUpdate = !1)
    }
    onChildViewUpdate(t) {
        this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = t
    }
    get isRenderable() {
        return this.root.localDisplayStatus === 7 && this.worldAlpha > 0
    }
    addOnRender(t) {
        this._onRenderContainers.push(t)
    }
    removeOnRender(t) {
        this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1)
    }
    runOnRender() {
        for (let t = 0; t < this._onRenderContainers.length; t++)
            this._onRenderContainers[t]._onRender()
    }
    destroy() {
        this.renderGroupParent = null,
        this.root = null,
        this.childrenRenderablesToUpdate = null,
        this.childrenToUpdate = null,
        this.renderGroupChildren = null,
        this._onRenderContainers = null,
        this.instructionSet = null
    }
    getChildren(t=[]) {
        const e = this.root.children;
        for (let r = 0; r < e.length; r++)
            this._getChildren(e[r], t);
        return t
    }
    _getChildren(t, e=[]) {
        if (e.push(t),
        t.renderGroup)
            return e;
        const r = t.children;
        for (let i = 0; i < r.length; i++)
            this._getChildren(r[i], e);
        return e
    }
}
function My(n, t, e={}) {
    for (const r in t)
        !e[r] && t[r] !== void 0 && (n[r] = t[r])
}
const cu = new or(null)
  , hu = new or(null)
  , fu = new or(null,1,1)
  , id = 1
  , Oy = 2
  , du = 4;
class tr extends Jr {
    constructor(t={}) {
        super(),
        this.uid = me("renderable"),
        this._updateFlags = 15,
        this.renderGroup = null,
        this.parentRenderGroup = null,
        this.parentRenderGroupIndex = 0,
        this.didChange = !1,
        this.didViewUpdate = !1,
        this.relativeRenderGroupDepth = 0,
        this.children = [],
        this.parent = null,
        this.includeInBuild = !0,
        this.measurable = !0,
        this.isSimple = !0,
        this.updateTick = -1,
        this.localTransform = new Ot,
        this.relativeGroupTransform = new Ot,
        this.groupTransform = this.relativeGroupTransform,
        this.destroyed = !1,
        this._position = new or(this,0,0),
        this._scale = fu,
        this._pivot = hu,
        this._skew = cu,
        this._cx = 1,
        this._sx = 0,
        this._cy = 0,
        this._sy = 1,
        this._rotation = 0,
        this.localColor = 16777215,
        this.localAlpha = 1,
        this.groupAlpha = 1,
        this.groupColor = 16777215,
        this.groupColorAlpha = 4294967295,
        this.localBlendMode = "inherit",
        this.groupBlendMode = "normal",
        this.localDisplayStatus = 7,
        this.globalDisplayStatus = 7,
        this._didContainerChangeTick = 0,
        this._didViewChangeTick = 0,
        this._didLocalTransformChangeId = -1,
        this.effects = [],
        My(this, t, {
            children: !0,
            parent: !0,
            effects: !0
        }),
        t.children?.forEach(e => this.addChild(e)),
        t.parent?.addChild(this)
    }
    static mixin(t) {
        Object.defineProperties(tr.prototype, Object.getOwnPropertyDescriptors(t))
    }
    set _didChangeId(t) {
        this._didViewChangeTick = t >> 12 & 4095,
        this._didContainerChangeTick = t & 4095
    }
    get _didChangeId() {
        return this._didContainerChangeTick & 4095 | (this._didViewChangeTick & 4095) << 12
    }
    addChild(...t) {
        if (this.allowChildren || J(zt, "addChild: Only Containers will be allowed to add children in v8.0.0"),
        t.length > 1) {
            for (let i = 0; i < t.length; i++)
                this.addChild(t[i]);
            return t[0]
        }
        const e = t[0];
        if (e.parent === this)
            return this.children.splice(this.children.indexOf(e), 1),
            this.children.push(e),
            this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
            e;
        e.parent && e.parent.removeChild(e),
        this.children.push(e),
        this.sortableChildren && (this.sortDirty = !0),
        e.parent = this,
        e.didChange = !0,
        e._updateFlags = 15;
        const r = this.renderGroup || this.parentRenderGroup;
        return r && r.addChild(e),
        this.emit("childAdded", e, this, this.children.length - 1),
        e.emit("added", this),
        this._didViewChangeTick++,
        e._zIndex !== 0 && e.depthOfChildModified(),
        e
    }
    removeChild(...t) {
        if (t.length > 1) {
            for (let i = 0; i < t.length; i++)
                this.removeChild(t[i]);
            return t[0]
        }
        const e = t[0]
          , r = this.children.indexOf(e);
        return r > -1 && (this._didViewChangeTick++,
        this.children.splice(r, 1),
        this.renderGroup ? this.renderGroup.removeChild(e) : this.parentRenderGroup && this.parentRenderGroup.removeChild(e),
        e.parent = null,
        this.emit("childRemoved", e, this, r),
        e.emit("removed", this)),
        e
    }
    _onUpdate(t) {
        t && t === this._skew && this._updateSkew(),
        this._didContainerChangeTick++,
        !this.didChange && (this.didChange = !0,
        this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this))
    }
    set isRenderGroup(t) {
        !!this.renderGroup !== t && (t ? this.enableRenderGroup() : this.disableRenderGroup())
    }
    get isRenderGroup() {
        return !!this.renderGroup
    }
    enableRenderGroup() {
        if (this.renderGroup)
            return;
        const t = this.parentRenderGroup;
        t?.removeChild(this),
        this.renderGroup = In.get(Py, this),
        this.groupTransform = Ot.IDENTITY,
        t?.addChild(this),
        this._updateIsSimple()
    }
    disableRenderGroup() {
        if (!this.renderGroup)
            return;
        const t = this.parentRenderGroup;
        t?.removeChild(this),
        In.return(this.renderGroup),
        this.renderGroup = null,
        this.groupTransform = this.relativeGroupTransform,
        t?.addChild(this),
        this._updateIsSimple()
    }
    _updateIsSimple() {
        this.isSimple = !this.renderGroup && this.effects.length === 0
    }
    get worldTransform() {
        return this._worldTransform || (this._worldTransform = new Ot),
        this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform),
        this._worldTransform
    }
    get x() {
        return this._position.x
    }
    set x(t) {
        this._position.x = t
    }
    get y() {
        return this._position.y
    }
    set y(t) {
        this._position.y = t
    }
    get position() {
        return this._position
    }
    set position(t) {
        this._position.copyFrom(t)
    }
    get rotation() {
        return this._rotation
    }
    set rotation(t) {
        this._rotation !== t && (this._rotation = t,
        this._onUpdate(this._skew))
    }
    get angle() {
        return this.rotation * j_
    }
    set angle(t) {
        this.rotation = t * Ls
    }
    get pivot() {
        return this._pivot === hu && (this._pivot = new or(this,0,0)),
        this._pivot
    }
    set pivot(t) {
        this._pivot === hu && (this._pivot = new or(this,0,0)),
        typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t)
    }
    get skew() {
        return this._skew === cu && (this._skew = new or(this,0,0)),
        this._skew
    }
    set skew(t) {
        this._skew === cu && (this._skew = new or(this,0,0)),
        this._skew.copyFrom(t)
    }
    get scale() {
        return this._scale === fu && (this._scale = new or(this,1,1)),
        this._scale
    }
    set scale(t) {
        this._scale === fu && (this._scale = new or(this,0,0)),
        typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t)
    }
    get width() {
        return Math.abs(this.scale.x * this.getLocalBounds().width)
    }
    set width(t) {
        const e = this.getLocalBounds().width;
        this._setWidth(t, e)
    }
    get height() {
        return Math.abs(this.scale.y * this.getLocalBounds().height)
    }
    set height(t) {
        const e = this.getLocalBounds().height;
        this._setHeight(t, e)
    }
    getSize(t) {
        t || (t = {});
        const e = this.getLocalBounds();
        return t.width = Math.abs(this.scale.x * e.width),
        t.height = Math.abs(this.scale.y * e.height),
        t
    }
    setSize(t, e) {
        const r = this.getLocalBounds();
        typeof t == "object" ? (e = t.height ?? t.width,
        t = t.width) : e ?? (e = t),
        t !== void 0 && this._setWidth(t, r.width),
        e !== void 0 && this._setHeight(e, r.height)
    }
    _updateSkew() {
        const t = this._rotation
          , e = this._skew;
        this._cx = Math.cos(t + e._y),
        this._sx = Math.sin(t + e._y),
        this._cy = -Math.sin(t - e._x),
        this._sy = Math.cos(t - e._x)
    }
    updateTransform(t) {
        return this.position.set(typeof t.x == "number" ? t.x : this.position.x, typeof t.y == "number" ? t.y : this.position.y),
        this.scale.set(typeof t.scaleX == "number" ? t.scaleX || 1 : this.scale.x, typeof t.scaleY == "number" ? t.scaleY || 1 : this.scale.y),
        this.rotation = typeof t.rotation == "number" ? t.rotation : this.rotation,
        this.skew.set(typeof t.skewX == "number" ? t.skewX : this.skew.x, typeof t.skewY == "number" ? t.skewY : this.skew.y),
        this.pivot.set(typeof t.pivotX == "number" ? t.pivotX : this.pivot.x, typeof t.pivotY == "number" ? t.pivotY : this.pivot.y),
        this
    }
    setFromMatrix(t) {
        t.decompose(this)
    }
    updateLocalTransform() {
        const t = this._didContainerChangeTick;
        if (this._didLocalTransformChangeId === t)
            return;
        this._didLocalTransformChangeId = t;
        const e = this.localTransform
          , r = this._scale
          , i = this._pivot
          , s = this._position
          , o = r._x
          , a = r._y
          , l = i._x
          , u = i._y;
        e.a = this._cx * o,
        e.b = this._sx * o,
        e.c = this._cy * a,
        e.d = this._sy * a,
        e.tx = s._x - (l * e.a + u * e.c),
        e.ty = s._y - (l * e.b + u * e.d)
    }
    set alpha(t) {
        t !== this.localAlpha && (this.localAlpha = t,
        this._updateFlags |= id,
        this._onUpdate())
    }
    get alpha() {
        return this.localAlpha
    }
    set tint(t) {
        const r = At.shared.setValue(t ?? 16777215).toBgrNumber();
        r !== this.localColor && (this.localColor = r,
        this._updateFlags |= id,
        this._onUpdate())
    }
    get tint() {
        const t = this.localColor;
        return ((t & 255) << 16) + (t & 65280) + (t >> 16 & 255)
    }
    set blendMode(t) {
        this.localBlendMode !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
        this._updateFlags |= Oy,
        this.localBlendMode = t,
        this._onUpdate())
    }
    get blendMode() {
        return this.localBlendMode
    }
    get visible() {
        return !!(this.localDisplayStatus & 2)
    }
    set visible(t) {
        const e = t ? 2 : 0;
        (this.localDisplayStatus & 2) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
        this._updateFlags |= du,
        this.localDisplayStatus ^= 2,
        this._onUpdate())
    }
    get culled() {
        return !(this.localDisplayStatus & 4)
    }
    set culled(t) {
        const e = t ? 0 : 4;
        (this.localDisplayStatus & 4) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
        this._updateFlags |= du,
        this.localDisplayStatus ^= 4,
        this._onUpdate())
    }
    get renderable() {
        return !!(this.localDisplayStatus & 1)
    }
    set renderable(t) {
        const e = t ? 1 : 0;
        (this.localDisplayStatus & 1) !== e && (this._updateFlags |= du,
        this.localDisplayStatus ^= 1,
        this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
        this._onUpdate())
    }
    get isRenderable() {
        return this.localDisplayStatus === 7 && this.groupAlpha > 0
    }
    destroy(t=!1) {
        if (this.destroyed)
            return;
        this.destroyed = !0;
        let e;
        if (this.children.length && (e = this.removeChildren(0, this.children.length)),
        this.removeFromParent(),
        this.parent = null,
        this._maskEffect = null,
        this._filterEffect = null,
        this.effects = null,
        this._position = null,
        this._scale = null,
        this._pivot = null,
        this._skew = null,
        this.emit("destroyed", this),
        this.removeAllListeners(),
        (typeof t == "boolean" ? t : t?.children) && e)
            for (let i = 0; i < e.length; ++i)
                e[i].destroy(t);
        this.renderGroup?.destroy(),
        this.renderGroup = null
    }
}
tr.mixin(gy);
tr.mixin(Ty);
tr.mixin(Sy);
tr.mixin(by);
tr.mixin(vy);
tr.mixin(_y);
tr.mixin(wy);
tr.mixin(dy);
class Zm extends tr {
    constructor() {
        super(...arguments),
        this.canBundle = !0,
        this.allowChildren = !1,
        this._roundPixels = 0,
        this._lastUsed = 0,
        this._lastInstructionTick = -1,
        this._bounds = new _n(0,1,0,0),
        this._boundsDirty = !0
    }
    _updateBounds() {}
    get roundPixels() {
        return !!this._roundPixels
    }
    set roundPixels(t) {
        this._roundPixels = t ? 1 : 0
    }
    containsPoint(t) {
        const e = this.bounds
          , {x: r, y: i} = t;
        return r >= e.minX && r <= e.maxX && i >= e.minY && i <= e.maxY
    }
    onViewUpdate() {
        if (this._didViewChangeTick++,
        this.didViewUpdate)
            return;
        this.didViewUpdate = !0;
        const t = this.renderGroup || this.parentRenderGroup;
        t && t.onChildViewUpdate(this)
    }
    destroy(t) {
        super.destroy(t),
        this._bounds = null
    }
}
class Us extends Zm {
    constructor(t=ct.EMPTY) {
        t instanceof ct && (t = {
            texture: t
        });
        const {texture: e=ct.EMPTY, anchor: r, roundPixels: i, width: s, height: o, ...a} = t;
        super({
            label: "Sprite",
            ...a
        }),
        this.renderPipeId = "sprite",
        this.batched = !0,
        this._sourceBounds = {
            minX: 0,
            maxX: 1,
            minY: 0,
            maxY: 0
        },
        this._sourceBoundsDirty = !0,
        this._anchor = new or({
            _onUpdate: () => {
                this.onViewUpdate()
            }
        }),
        r ? this.anchor = r : e.defaultAnchor && (this.anchor = e.defaultAnchor),
        this.texture = e,
        this.allowChildren = !1,
        this.roundPixels = i ?? !1,
        s !== void 0 && (this.width = s),
        o !== void 0 && (this.height = o)
    }
    static from(t, e=!1) {
        return t instanceof ct ? new Us(t) : new Us(ct.from(t, e))
    }
    set texture(t) {
        t || (t = ct.EMPTY);
        const e = this._texture;
        e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this),
        t.dynamic && t.on("update", this.onViewUpdate, this),
        this._texture = t,
        this._width && this._setWidth(this._width, this._texture.orig.width),
        this._height && this._setHeight(this._height, this._texture.orig.height),
        this.onViewUpdate())
    }
    get texture() {
        return this._texture
    }
    get bounds() {
        return this._boundsDirty && (this._updateBounds(),
        this._boundsDirty = !1),
        this._bounds
    }
    get sourceBounds() {
        return this._sourceBoundsDirty && (this._updateSourceBounds(),
        this._sourceBoundsDirty = !1),
        this._sourceBounds
    }
    containsPoint(t) {
        const e = this.sourceBounds;
        return t.x >= e.maxX && t.x <= e.minX && t.y >= e.maxY && t.y <= e.minY
    }
    addBounds(t) {
        const e = this._texture.trim ? this.sourceBounds : this.bounds;
        t.addFrame(e.minX, e.minY, e.maxX, e.maxY)
    }
    onViewUpdate() {
        this._sourceBoundsDirty = this._boundsDirty = !0,
        super.onViewUpdate()
    }
    _updateBounds() {
        ny(this._bounds, this._anchor, this._texture, 0)
    }
    _updateSourceBounds() {
        const t = this._anchor
          , e = this._texture
          , r = this._sourceBounds
          , {width: i, height: s} = e.orig;
        r.maxX = -t._x * i,
        r.minX = r.maxX + i,
        r.maxY = -t._y * s,
        r.minY = r.maxY + s
    }
    destroy(t=!1) {
        if (super.destroy(t),
        typeof t == "boolean" ? t : t?.texture) {
            const r = typeof t == "boolean" ? t : t?.textureSource;
            this._texture.destroy(r)
        }
        this._texture = null,
        this._bounds = null,
        this._sourceBounds = null,
        this._anchor = null
    }
    get anchor() {
        return this._anchor
    }
    set anchor(t) {
        typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t)
    }
    get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width
    }
    set width(t) {
        this._setWidth(t, this._texture.orig.width),
        this._width = t
    }
    get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height
    }
    set height(t) {
        this._setHeight(t, this._texture.orig.height),
        this._height = t
    }
    getSize(t) {
        return t || (t = {}),
        t.width = Math.abs(this.scale.x) * this._texture.orig.width,
        t.height = Math.abs(this.scale.y) * this._texture.orig.height,
        t
    }
    setSize(t, e) {
        typeof t == "object" ? (e = t.height ?? t.width,
        t = t.width) : e ?? (e = t),
        t !== void 0 && this._setWidth(t, this._texture.orig.width),
        e !== void 0 && this._setHeight(e, this._texture.orig.height)
    }
}
const Fy = new _n;
function Qm(n, t, e) {
    const r = Fy;
    n.measurable = !0,
    Xm(n, e, r),
    t.addBoundsMask(r),
    n.measurable = !1
}
function Jm(n, t, e) {
    const r = Bs.get();
    n.measurable = !0;
    const i = kn.get().identity()
      , s = tg(n, e, i);
    Ym(n, r, s),
    n.measurable = !1,
    t.addBoundsMask(r),
    kn.return(i),
    Bs.return(r)
}
function tg(n, t, e) {
    return n ? (n !== t && (tg(n.parent, t, e),
    n.updateLocalTransform(),
    e.append(n.localTransform)),
    e) : (ge("Mask bounds, renderable is not inside the root container"),
    e)
}
class eg {
    constructor(t) {
        this.priority = 0,
        this.inverse = !1,
        this.pipe = "alphaMask",
        t?.mask && this.init(t.mask)
    }
    init(t) {
        this.mask = t,
        this.renderMaskToTexture = !(t instanceof Us),
        this.mask.renderable = this.renderMaskToTexture,
        this.mask.includeInBuild = !this.renderMaskToTexture,
        this.mask.measurable = !1
    }
    reset() {
        this.mask.measurable = !0,
        this.mask = null
    }
    addBounds(t, e) {
        this.inverse || Qm(this.mask, t, e)
    }
    addLocalBounds(t, e) {
        Jm(this.mask, t, e)
    }
    containsPoint(t, e) {
        const r = this.mask;
        return e(r, t)
    }
    destroy() {
        this.reset()
    }
    static test(t) {
        return t instanceof Us
    }
}
eg.extension = Q.MaskEffect;
class rg {
    constructor(t) {
        this.priority = 0,
        this.pipe = "colorMask",
        t?.mask && this.init(t.mask)
    }
    init(t) {
        this.mask = t
    }
    destroy() {}
    static test(t) {
        return typeof t == "number"
    }
}
rg.extension = Q.MaskEffect;
class ng {
    constructor(t) {
        this.priority = 0,
        this.pipe = "stencilMask",
        t?.mask && this.init(t.mask)
    }
    init(t) {
        this.mask = t,
        this.mask.includeInBuild = !1,
        this.mask.measurable = !1
    }
    reset() {
        this.mask.measurable = !0,
        this.mask.includeInBuild = !0,
        this.mask = null
    }
    addBounds(t, e) {
        Qm(this.mask, t, e)
    }
    addLocalBounds(t, e) {
        Jm(this.mask, t, e)
    }
    containsPoint(t, e) {
        const r = this.mask;
        return e(r, t)
    }
    destroy() {
        this.reset()
    }
    static test(t) {
        return t instanceof tr
    }
}
ng.extension = Q.MaskEffect;
const Ey = {
    createCanvas: (n, t) => {
        const e = document.createElement("canvas");
        return e.width = n,
        e.height = t,
        e
    }
    ,
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (n, t) => fetch(n, t),
    parseXML: n => new DOMParser().parseFromString(n, "text/xml")
};
let sd = Ey;
const Jt = {
    get() {
        return sd
    },
    set(n) {
        sd = n
    }
};
class Gh extends fr {
    constructor(t) {
        t.resource || (t.resource = Jt.get().createCanvas()),
        t.width || (t.width = t.resource.width,
        t.autoDensity || (t.width /= t.resolution)),
        t.height || (t.height = t.resource.height,
        t.autoDensity || (t.height /= t.resolution)),
        super(t),
        this.uploadMethodId = "image",
        this.autoDensity = t.autoDensity;
        const e = t.resource;
        (this.pixelWidth !== e.width || this.pixelWidth !== e.height) && this.resizeCanvas(),
        this.transparent = !!t.transparent
    }
    resizeCanvas() {
        this.autoDensity && (this.resource.style.width = `${this.width}px`,
        this.resource.style.height = `${this.height}px`),
        (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth,
        this.resource.height = this.pixelHeight)
    }
    resize(t=this.width, e=this.height, r=this._resolution) {
        const i = super.resize(t, e, r);
        return i && this.resizeCanvas(),
        i
    }
    static test(t) {
        return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && t instanceof OffscreenCanvas
    }
    get context2D() {
        return this._context2D || (this._context2D = this.resource.getContext("2d"))
    }
}
Gh.extension = Q.TextureSource;
class Ki extends fr {
    constructor(t) {
        if (t.resource && globalThis.HTMLImageElement && t.resource instanceof HTMLImageElement) {
            const e = Jt.get().createCanvas(t.resource.width, t.resource.height);
            e.getContext("2d").drawImage(t.resource, 0, 0, t.resource.width, t.resource.height),
            t.resource = e,
            ge("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")
        }
        super(t),
        this.uploadMethodId = "image",
        this.autoGarbageCollect = !0
    }
    static test(t) {
        return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame
    }
}
Ki.extension = Q.TextureSource;
var Cc = (n => (n[n.INTERACTION = 50] = "INTERACTION",
n[n.HIGH = 25] = "HIGH",
n[n.NORMAL = 0] = "NORMAL",
n[n.LOW = -25] = "LOW",
n[n.UTILITY = -50] = "UTILITY",
n))(Cc || {});
class pu {
    constructor(t, e=null, r=0, i=!1) {
        this.next = null,
        this.previous = null,
        this._destroyed = !1,
        this._fn = t,
        this._context = e,
        this.priority = r,
        this._once = i
    }
    match(t, e=null) {
        return this._fn === t && this._context === e
    }
    emit(t) {
        this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t));
        const e = this.next;
        return this._once && this.destroy(!0),
        this._destroyed && (this.next = null),
        e
    }
    connect(t) {
        this.previous = t,
        t.next && (t.next.previous = this),
        this.next = t.next,
        t.next = this
    }
    destroy(t=!1) {
        this._destroyed = !0,
        this._fn = null,
        this._context = null,
        this.previous && (this.previous.next = this.next),
        this.next && (this.next.previous = this.previous);
        const e = this.next;
        return this.next = t ? null : e,
        this.previous = null,
        e
    }
}
const ig = class xr {
    constructor() {
        this.autoStart = !1,
        this.deltaTime = 1,
        this.lastTime = -1,
        this.speed = 1,
        this.started = !1,
        this._requestId = null,
        this._maxElapsedMS = 100,
        this._minElapsedMS = 0,
        this._protected = !1,
        this._lastFrame = -1,
        this._head = new pu(null,null,1 / 0),
        this.deltaMS = 1 / xr.targetFPMS,
        this.elapsedMS = 1 / xr.targetFPMS,
        this._tick = t => {
            this._requestId = null,
            this.started && (this.update(t),
            this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
        }
    }
    _requestIfNeeded() {
        this._requestId === null && this._head.next && (this.lastTime = performance.now(),
        this._lastFrame = this.lastTime,
        this._requestId = requestAnimationFrame(this._tick))
    }
    _cancelIfNeeded() {
        this._requestId !== null && (cancelAnimationFrame(this._requestId),
        this._requestId = null)
    }
    _startIfPossible() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }
    add(t, e, r=Cc.NORMAL) {
        return this._addListener(new pu(t,e,r))
    }
    addOnce(t, e, r=Cc.NORMAL) {
        return this._addListener(new pu(t,e,r,!0))
    }
    _addListener(t) {
        let e = this._head.next
          , r = this._head;
        if (!e)
            t.connect(r);
        else {
            for (; e; ) {
                if (t.priority > e.priority) {
                    t.connect(r);
                    break
                }
                r = e,
                e = e.next
            }
            t.previous || t.connect(r)
        }
        return this._startIfPossible(),
        this
    }
    remove(t, e) {
        let r = this._head.next;
        for (; r; )
            r.match(t, e) ? r = r.destroy() : r = r.next;
        return this._head.next || this._cancelIfNeeded(),
        this
    }
    get count() {
        if (!this._head)
            return 0;
        let t = 0
          , e = this._head;
        for (; e = e.next; )
            t++;
        return t
    }
    start() {
        this.started || (this.started = !0,
        this._requestIfNeeded())
    }
    stop() {
        this.started && (this.started = !1,
        this._cancelIfNeeded())
    }
    destroy() {
        if (!this._protected) {
            this.stop();
            let t = this._head.next;
            for (; t; )
                t = t.destroy(!0);
            this._head.destroy(),
            this._head = null
        }
    }
    update(t=performance.now()) {
        let e;
        if (t > this.lastTime) {
            if (e = this.elapsedMS = t - this.lastTime,
            e > this._maxElapsedMS && (e = this._maxElapsedMS),
            e *= this.speed,
            this._minElapsedMS) {
                const s = t - this._lastFrame | 0;
                if (s < this._minElapsedMS)
                    return;
                this._lastFrame = t - s % this._minElapsedMS
            }
            this.deltaMS = e,
            this.deltaTime = this.deltaMS * xr.targetFPMS;
            const r = this._head;
            let i = r.next;
            for (; i; )
                i = i.emit(this);
            r.next || this._cancelIfNeeded()
        } else
            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t
    }
    get FPS() {
        return 1e3 / this.elapsedMS
    }
    get minFPS() {
        return 1e3 / this._maxElapsedMS
    }
    set minFPS(t) {
        const e = Math.min(this.maxFPS, t)
          , r = Math.min(Math.max(0, e) / 1e3, xr.targetFPMS);
        this._maxElapsedMS = 1 / r
    }
    get maxFPS() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
    }
    set maxFPS(t) {
        if (t === 0)
            this._minElapsedMS = 0;
        else {
            const e = Math.max(this.minFPS, t);
            this._minElapsedMS = 1 / (e / 1e3)
        }
    }
    static get shared() {
        if (!xr._shared) {
            const t = xr._shared = new xr;
            t.autoStart = !0,
            t._protected = !0
        }
        return xr._shared
    }
    static get system() {
        if (!xr._system) {
            const t = xr._system = new xr;
            t.autoStart = !0,
            t._protected = !0
        }
        return xr._system
    }
}
;
ig.targetFPMS = .06;
let va = ig, mu;
async function sg() {
    return mu ?? (mu = (async () => {
        const t = document.createElement("canvas").getContext("webgl");
        if (!t)
            return "premultiply-alpha-on-upload";
        const e = await new Promise(o => {
            const a = document.createElement("video");
            a.onloadeddata = () => o(a),
            a.onerror = () => o(null),
            a.autoplay = !1,
            a.crossOrigin = "anonymous",
            a.preload = "auto",
            a.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",
            a.load()
        }
        );
        if (!e)
            return "premultiply-alpha-on-upload";
        const r = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, r);
        const i = t.createFramebuffer();
        t.bindFramebuffer(t.FRAMEBUFFER, i),
        t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0),
        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
        t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE),
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
        const s = new Uint8Array(4);
        return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, s),
        t.deleteFramebuffer(i),
        t.deleteTexture(r),
        t.getExtension("WEBGL_lose_context")?.loseContext(),
        s[0] <= s[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload"
    }
    )()),
    mu
}
const $l = class og extends fr {
    constructor(t) {
        super(t),
        this.isReady = !1,
        this.uploadMethodId = "video",
        t = {
            ...og.defaultOptions,
            ...t
        },
        this._autoUpdate = !0,
        this._isConnectedToTicker = !1,
        this._updateFPS = t.updateFPS || 0,
        this._msToNextUpdate = 0,
        this.autoPlay = t.autoPlay !== !1,
        this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload",
        this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this),
        this._videoFrameRequestCallbackHandle = null,
        this._load = null,
        this._resolve = null,
        this._reject = null,
        this._onCanPlay = this._onCanPlay.bind(this),
        this._onCanPlayThrough = this._onCanPlayThrough.bind(this),
        this._onError = this._onError.bind(this),
        this._onPlayStart = this._onPlayStart.bind(this),
        this._onPlayStop = this._onPlayStop.bind(this),
        this._onSeeked = this._onSeeked.bind(this),
        t.autoLoad !== !1 && this.load()
    }
    updateFrame() {
        if (!this.destroyed) {
            if (this._updateFPS) {
                const t = va.shared.elapsedMS * this.resource.playbackRate;
                this._msToNextUpdate = Math.floor(this._msToNextUpdate - t)
            }
            (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0),
            this.isValid && this.update()
        }
    }
    _videoFrameRequestCallback() {
        this.updateFrame(),
        this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)
    }
    get isValid() {
        return !!this.resource.videoWidth && !!this.resource.videoHeight
    }
    async load() {
        if (this._load)
            return this._load;
        const t = this.resource
          , e = this.options;
        return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0),
        t.addEventListener("play", this._onPlayStart),
        t.addEventListener("pause", this._onPlayStop),
        t.addEventListener("seeked", this._onSeeked),
        this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay),
        t.addEventListener("canplaythrough", this._onCanPlayThrough),
        t.addEventListener("error", this._onError, !0)),
        this.alphaMode = await sg(),
        this._load = new Promise( (r, i) => {
            this.isValid ? r(this) : (this._resolve = r,
            this._reject = i,
            e.preloadTimeoutMs !== void 0 && (this._preloadTimeout = setTimeout( () => {
                this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))
            }
            )),
            t.load())
        }
        ),
        this._load
    }
    _onError(t) {
        this.resource.removeEventListener("error", this._onError, !0),
        this.emit("error", t),
        this._reject && (this._reject(t),
        this._reject = null,
        this._resolve = null)
    }
    _isSourcePlaying() {
        const t = this.resource;
        return !t.paused && !t.ended
    }
    _isSourceReady() {
        return this.resource.readyState > 2
    }
    _onPlayStart() {
        this.isValid || this._mediaReady(),
        this._configureAutoUpdate()
    }
    _onPlayStop() {
        this._configureAutoUpdate()
    }
    _onSeeked() {
        this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0,
        this.updateFrame(),
        this._msToNextUpdate = 0)
    }
    _onCanPlay() {
        this.resource.removeEventListener("canplay", this._onCanPlay),
        this._mediaReady()
    }
    _onCanPlayThrough() {
        this.resource.removeEventListener("canplaythrough", this._onCanPlay),
        this._preloadTimeout && (clearTimeout(this._preloadTimeout),
        this._preloadTimeout = void 0),
        this._mediaReady()
    }
    _mediaReady() {
        const t = this.resource;
        this.isValid && (this.isReady = !0,
        this.resize(t.videoWidth, t.videoHeight)),
        this._msToNextUpdate = 0,
        this.updateFrame(),
        this._msToNextUpdate = 0,
        this._resolve && (this._resolve(this),
        this._resolve = null,
        this._reject = null),
        this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play()
    }
    destroy() {
        this._configureAutoUpdate();
        const t = this.resource;
        t && (t.removeEventListener("play", this._onPlayStart),
        t.removeEventListener("pause", this._onPlayStop),
        t.removeEventListener("seeked", this._onSeeked),
        t.removeEventListener("canplay", this._onCanPlay),
        t.removeEventListener("canplaythrough", this._onCanPlayThrough),
        t.removeEventListener("error", this._onError, !0),
        t.pause(),
        t.src = "",
        t.load()),
        super.destroy()
    }
    get autoUpdate() {
        return this._autoUpdate
    }
    set autoUpdate(t) {
        t !== this._autoUpdate && (this._autoUpdate = t,
        this._configureAutoUpdate())
    }
    get updateFPS() {
        return this._updateFPS
    }
    set updateFPS(t) {
        t !== this._updateFPS && (this._updateFPS = t,
        this._configureAutoUpdate())
    }
    _configureAutoUpdate() {
        this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (va.shared.remove(this.updateFrame, this),
        this._isConnectedToTicker = !1,
        this._msToNextUpdate = 0),
        this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
        this._videoFrameRequestCallbackHandle = null),
        this._isConnectedToTicker || (va.shared.add(this.updateFrame, this),
        this._isConnectedToTicker = !0,
        this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
        this._videoFrameRequestCallbackHandle = null),
        this._isConnectedToTicker && (va.shared.remove(this.updateFrame, this),
        this._isConnectedToTicker = !1,
        this._msToNextUpdate = 0))
    }
    static test(t) {
        return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement
    }
}
;
$l.extension = Q.TextureSource;
$l.defaultOptions = {
    ...fr.defaultOptions,
    autoLoad: !0,
    autoPlay: !0,
    updateFPS: 0,
    crossorigin: !0,
    loop: !1,
    muted: !0,
    playsinline: !0,
    preload: !1
};
$l.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
};
let Xa = $l;
const Kr = (n, t, e=!1) => (Array.isArray(n) || (n = [n]),
t ? n.map(r => typeof r == "string" || e ? t(r) : r) : n);
class Iy {
    constructor() {
        this._parsers = [],
        this._cache = new Map,
        this._cacheMap = new Map
    }
    reset() {
        this._cacheMap.clear(),
        this._cache.clear()
    }
    has(t) {
        return this._cache.has(t)
    }
    get(t) {
        const e = this._cache.get(t);
        return e || ge(`[Assets] Asset id ${t} was not found in the Cache`),
        e
    }
    set(t, e) {
        const r = Kr(t);
        let i;
        for (let l = 0; l < this.parsers.length; l++) {
            const u = this.parsers[l];
            if (u.test(e)) {
                i = u.getCacheableAssets(r, e);
                break
            }
        }
        const s = new Map(Object.entries(i || {}));
        i || r.forEach(l => {
            s.set(l, e)
        }
        );
        const o = [...s.keys()]
          , a = {
            cacheKeys: o,
            keys: r
        };
        r.forEach(l => {
            this._cacheMap.set(l, a)
        }
        ),
        o.forEach(l => {
            const u = i ? i[l] : e;
            this._cache.has(l) && this._cache.get(l) !== u && ge("[Cache] already has key:", l),
            this._cache.set(l, s.get(l))
        }
        )
    }
    remove(t) {
        if (!this._cacheMap.has(t)) {
            ge(`[Assets] Asset id ${t} was not found in the Cache`);
            return
        }
        const e = this._cacheMap.get(t);
        e.cacheKeys.forEach(i => {
            this._cache.delete(i)
        }
        ),
        e.keys.forEach(i => {
            this._cacheMap.delete(i)
        }
        )
    }
    get parsers() {
        return this._parsers
    }
}
const ne = new Iy
  , Tc = [];
Qe.handleByList(Q.TextureSource, Tc);
function ag(n={}) {
    const t = n && n.resource
      , e = t ? n.resource : n
      , r = t ? n : {
        resource: n
    };
    for (let i = 0; i < Tc.length; i++) {
        const s = Tc[i];
        if (s.test(e))
            return new s(r)
    }
    throw new Error(`Could not find a source type for resource: ${r.resource}`)
}
function ky(n={}, t=!1) {
    const e = n && n.resource
      , r = e ? n.resource : n
      , i = e ? n : {
        resource: n
    };
    if (!t && ne.has(r))
        return ne.get(r);
    const s = new ct({
        source: ag(i)
    });
    return s.on("destroy", () => {
        ne.has(r) && ne.remove(r)
    }
    ),
    t || ne.set(r, s),
    s
}
function zy(n, t=!1) {
    return typeof n == "string" ? ne.get(n) : n instanceof fr ? new ct({
        source: n
    }) : ky(n, t)
}
ct.from = zy;
fr.from = ag;
Qe.add(eg, rg, ng, Xa, Ki, Gh, $h);
var ai = (n => (n[n.Low = 0] = "Low",
n[n.Normal = 1] = "Normal",
n[n.High = 2] = "High",
n))(ai || {});
function Xr(n) {
    if (typeof n != "string")
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)
}
function Qs(n) {
    return n.split("?")[0].split("#")[0]
}
function Ry(n) {
    return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
function Ly(n, t, e) {
    return n.replace(new RegExp(Ry(t),"g"), e)
}
function Dy(n, t) {
    let e = ""
      , r = 0
      , i = -1
      , s = 0
      , o = -1;
    for (let a = 0; a <= n.length; ++a) {
        if (a < n.length)
            o = n.charCodeAt(a);
        else {
            if (o === 47)
                break;
            o = 47
        }
        if (o === 47) {
            if (!(i === a - 1 || s === 1))
                if (i !== a - 1 && s === 2) {
                    if (e.length < 2 || r !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                        if (e.length > 2) {
                            const l = e.lastIndexOf("/");
                            if (l !== e.length - 1) {
                                l === -1 ? (e = "",
                                r = 0) : (e = e.slice(0, l),
                                r = e.length - 1 - e.lastIndexOf("/")),
                                i = a,
                                s = 0;
                                continue
                            }
                        } else if (e.length === 2 || e.length === 1) {
                            e = "",
                            r = 0,
                            i = a,
                            s = 0;
                            continue
                        }
                    }
                } else
                    e.length > 0 ? e += `/${n.slice(i + 1, a)}` : e = n.slice(i + 1, a),
                    r = a - i - 1;
            i = a,
            s = 0
        } else
            o === 46 && s !== -1 ? ++s : s = -1
    }
    return e
}
const Ar = {
    toPosix(n) {
        return Ly(n, "\\", "/")
    },
    isUrl(n) {
        return /^https?:/.test(this.toPosix(n))
    },
    isDataUrl(n) {
        return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)
    },
    isBlobUrl(n) {
        return n.startsWith("blob:")
    },
    hasProtocol(n) {
        return /^[^/:]+:/.test(this.toPosix(n))
    },
    getProtocol(n) {
        Xr(n),
        n = this.toPosix(n);
        const t = /^file:\/\/\//.exec(n);
        if (t)
            return t[0];
        const e = /^[^/:]+:\/{0,2}/.exec(n);
        return e ? e[0] : ""
    },
    toAbsolute(n, t, e) {
        if (Xr(n),
        this.isDataUrl(n) || this.isBlobUrl(n))
            return n;
        const r = Qs(this.toPosix(t ?? Jt.get().getBaseUrl()))
          , i = Qs(this.toPosix(e ?? this.rootname(r)));
        return n = this.toPosix(n),
        n.startsWith("/") ? Ar.join(i, n.slice(1)) : this.isAbsolute(n) ? n : this.join(r, n)
    },
    normalize(n) {
        if (Xr(n),
        n.length === 0)
            return ".";
        if (this.isDataUrl(n) || this.isBlobUrl(n))
            return n;
        n = this.toPosix(n);
        let t = "";
        const e = n.startsWith("/");
        this.hasProtocol(n) && (t = this.rootname(n),
        n = n.slice(t.length));
        const r = n.endsWith("/");
        return n = Dy(n),
        n.length > 0 && r && (n += "/"),
        e ? `/${n}` : t + n
    },
    isAbsolute(n) {
        return Xr(n),
        n = this.toPosix(n),
        this.hasProtocol(n) ? !0 : n.startsWith("/")
    },
    join(...n) {
        if (n.length === 0)
            return ".";
        let t;
        for (let e = 0; e < n.length; ++e) {
            const r = n[e];
            if (Xr(r),
            r.length > 0)
                if (t === void 0)
                    t = r;
                else {
                    const i = n[e - 1] ?? "";
                    this.joinExtensions.includes(this.extname(i).toLowerCase()) ? t += `/../${r}` : t += `/${r}`
                }
        }
        return t === void 0 ? "." : this.normalize(t)
    },
    dirname(n) {
        if (Xr(n),
        n.length === 0)
            return ".";
        n = this.toPosix(n);
        let t = n.charCodeAt(0);
        const e = t === 47;
        let r = -1
          , i = !0;
        const s = this.getProtocol(n)
          , o = n;
        n = n.slice(s.length);
        for (let a = n.length - 1; a >= 1; --a)
            if (t = n.charCodeAt(a),
            t === 47) {
                if (!i) {
                    r = a;
                    break
                }
            } else
                i = !1;
        return r === -1 ? e ? "/" : this.isUrl(o) ? s + n : s : e && r === 1 ? "//" : s + n.slice(0, r)
    },
    rootname(n) {
        Xr(n),
        n = this.toPosix(n);
        let t = "";
        if (n.startsWith("/") ? t = "/" : t = this.getProtocol(n),
        this.isUrl(n)) {
            const e = n.indexOf("/", t.length);
            e !== -1 ? t = n.slice(0, e) : t = n,
            t.endsWith("/") || (t += "/")
        }
        return t
    },
    basename(n, t) {
        Xr(n),
        t && Xr(t),
        n = Qs(this.toPosix(n));
        let e = 0, r = -1, i = !0, s;
        if (t !== void 0 && t.length > 0 && t.length <= n.length) {
            if (t.length === n.length && t === n)
                return "";
            let o = t.length - 1
              , a = -1;
            for (s = n.length - 1; s >= 0; --s) {
                const l = n.charCodeAt(s);
                if (l === 47) {
                    if (!i) {
                        e = s + 1;
                        break
                    }
                } else
                    a === -1 && (i = !1,
                    a = s + 1),
                    o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (r = s) : (o = -1,
                    r = a))
            }
            return e === r ? r = a : r === -1 && (r = n.length),
            n.slice(e, r)
        }
        for (s = n.length - 1; s >= 0; --s)
            if (n.charCodeAt(s) === 47) {
                if (!i) {
                    e = s + 1;
                    break
                }
            } else
                r === -1 && (i = !1,
                r = s + 1);
        return r === -1 ? "" : n.slice(e, r)
    },
    extname(n) {
        Xr(n),
        n = Qs(this.toPosix(n));
        let t = -1
          , e = 0
          , r = -1
          , i = !0
          , s = 0;
        for (let o = n.length - 1; o >= 0; --o) {
            const a = n.charCodeAt(o);
            if (a === 47) {
                if (!i) {
                    e = o + 1;
                    break
                }
                continue
            }
            r === -1 && (i = !1,
            r = o + 1),
            a === 46 ? t === -1 ? t = o : s !== 1 && (s = 1) : t !== -1 && (s = -1)
        }
        return t === -1 || r === -1 || s === 0 || s === 1 && t === r - 1 && t === e + 1 ? "" : n.slice(t, r)
    },
    parse(n) {
        Xr(n);
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (n.length === 0)
            return t;
        n = Qs(this.toPosix(n));
        let e = n.charCodeAt(0);
        const r = this.isAbsolute(n);
        let i;
        t.root = this.rootname(n),
        r || this.hasProtocol(n) ? i = 1 : i = 0;
        let s = -1
          , o = 0
          , a = -1
          , l = !0
          , u = n.length - 1
          , c = 0;
        for (; u >= i; --u) {
            if (e = n.charCodeAt(u),
            e === 47) {
                if (!l) {
                    o = u + 1;
                    break
                }
                continue
            }
            a === -1 && (l = !1,
            a = u + 1),
            e === 46 ? s === -1 ? s = u : c !== 1 && (c = 1) : s !== -1 && (c = -1)
        }
        return s === -1 || a === -1 || c === 0 || c === 1 && s === a - 1 && s === o + 1 ? a !== -1 && (o === 0 && r ? t.base = t.name = n.slice(1, a) : t.base = t.name = n.slice(o, a)) : (o === 0 && r ? (t.name = n.slice(1, s),
        t.base = n.slice(1, a)) : (t.name = n.slice(o, s),
        t.base = n.slice(o, a)),
        t.ext = n.slice(s, a)),
        t.dir = this.dirname(n),
        t
    },
    sep: "/",
    delimiter: ":",
    joinExtensions: [".html"]
};
function lg(n, t, e, r, i) {
    const s = t[e];
    for (let o = 0; o < s.length; o++) {
        const a = s[o];
        e < t.length - 1 ? lg(n.replace(r[e], a), t, e + 1, r, i) : i.push(n.replace(r[e], a))
    }
}
function By(n) {
    const t = /\{(.*?)\}/g
      , e = n.match(t)
      , r = [];
    if (e) {
        const i = [];
        e.forEach(s => {
            const o = s.substring(1, s.length - 1).split(",");
            i.push(o)
        }
        ),
        lg(n, i, 0, e, r)
    } else
        r.push(n);
    return r
}
const wl = n => !Array.isArray(n);
class Vs {
    constructor() {
        this._defaultBundleIdentifierOptions = {
            connector: "-",
            createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
            extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
        },
        this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector,
        this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId,
        this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,
        this._assetMap = {},
        this._preferredOrder = [],
        this._parsers = [],
        this._resolverHash = {},
        this._bundles = {}
    }
    setBundleIdentifier(t) {
        if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector,
        this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId,
        this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle,
        this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
            throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")
    }
    prefer(...t) {
        t.forEach(e => {
            this._preferredOrder.push(e),
            e.priority || (e.priority = Object.keys(e.params))
        }
        ),
        this._resolverHash = {}
    }
    set basePath(t) {
        this._basePath = t
    }
    get basePath() {
        return this._basePath
    }
    set rootPath(t) {
        this._rootPath = t
    }
    get rootPath() {
        return this._rootPath
    }
    get parsers() {
        return this._parsers
    }
    reset() {
        this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
        this._assetMap = {},
        this._preferredOrder = [],
        this._resolverHash = {},
        this._rootPath = null,
        this._basePath = null,
        this._manifest = null,
        this._bundles = {},
        this._defaultSearchParams = null
    }
    setDefaultSearchParams(t) {
        if (typeof t == "string")
            this._defaultSearchParams = t;
        else {
            const e = t;
            this._defaultSearchParams = Object.keys(e).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&")
        }
    }
    getAlias(t) {
        const {alias: e, src: r} = t;
        return Kr(e || r, s => typeof s == "string" ? s : Array.isArray(s) ? s.map(o => o?.src ?? o) : s?.src ? s.src : s, !0)
    }
    addManifest(t) {
        this._manifest && ge("[Resolver] Manifest already exists, this will be overwritten"),
        this._manifest = t,
        t.bundles.forEach(e => {
            this.addBundle(e.name, e.assets)
        }
        )
    }
    addBundle(t, e) {
        const r = [];
        let i = e;
        Array.isArray(e) || (i = Object.entries(e).map( ([s,o]) => typeof o == "string" || Array.isArray(o) ? {
            alias: s,
            src: o
        } : {
            alias: s,
            ...o
        })),
        i.forEach(s => {
            const o = s.src
              , a = s.alias;
            let l;
            if (typeof a == "string") {
                const u = this._createBundleAssetId(t, a);
                r.push(u),
                l = [a, u]
            } else {
                const u = a.map(c => this._createBundleAssetId(t, c));
                r.push(...u),
                l = [...a, ...u]
            }
            this.add({
                ...s,
                alias: l,
                src: o
            })
        }
        ),
        this._bundles[t] = r
    }
    add(t) {
        const e = [];
        Array.isArray(t) ? e.push(...t) : e.push(t);
        let r;
        r = s => {
            this.hasKey(s) && ge(`[Resolver] already has key: ${s} overwriting`)
        }
        ,
        Kr(e).forEach(s => {
            const {src: o} = s;
            let {data: a, format: l, loadParser: u} = s;
            const c = Kr(o).map(h => typeof h == "string" ? By(h) : Array.isArray(h) ? h : [h])
              , f = this.getAlias(s);
            Array.isArray(f) ? f.forEach(r) : r(f);
            const d = [];
            c.forEach(h => {
                h.forEach(m => {
                    let p = {};
                    if (typeof m != "object") {
                        p.src = m;
                        for (let g = 0; g < this._parsers.length; g++) {
                            const x = this._parsers[g];
                            if (x.test(m)) {
                                p = x.parse(m);
                                break
                            }
                        }
                    } else
                        a = m.data ?? a,
                        l = m.format ?? l,
                        u = m.loadParser ?? u,
                        p = {
                            ...p,
                            ...m
                        };
                    if (!f)
                        throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);
                    p = this._buildResolvedAsset(p, {
                        aliases: f,
                        data: a,
                        format: l,
                        loadParser: u
                    }),
                    d.push(p)
                }
                )
            }
            ),
            f.forEach(h => {
                this._assetMap[h] = d
            }
            )
        }
        )
    }
    resolveBundle(t) {
        const e = wl(t);
        t = Kr(t);
        const r = {};
        return t.forEach(i => {
            const s = this._bundles[i];
            if (s) {
                const o = this.resolve(s)
                  , a = {};
                for (const l in o) {
                    const u = o[l];
                    a[this._extractAssetIdFromBundle(i, l)] = u
                }
                r[i] = a
            }
        }
        ),
        e ? r[t[0]] : r
    }
    resolveUrl(t) {
        const e = this.resolve(t);
        if (typeof t != "string") {
            const r = {};
            for (const i in e)
                r[i] = e[i].src;
            return r
        }
        return e.src
    }
    resolve(t) {
        const e = wl(t);
        t = Kr(t);
        const r = {};
        return t.forEach(i => {
            if (!this._resolverHash[i])
                if (this._assetMap[i]) {
                    let s = this._assetMap[i];
                    const o = this._getPreferredOrder(s);
                    o?.priority.forEach(a => {
                        o.params[a].forEach(l => {
                            const u = s.filter(c => c[a] ? c[a] === l : !1);
                            u.length && (s = u)
                        }
                        )
                    }
                    ),
                    this._resolverHash[i] = s[0]
                } else
                    this._resolverHash[i] = this._buildResolvedAsset({
                        alias: [i],
                        src: i
                    }, {});
            r[i] = this._resolverHash[i]
        }
        ),
        e ? r[t[0]] : r
    }
    hasKey(t) {
        return !!this._assetMap[t]
    }
    hasBundle(t) {
        return !!this._bundles[t]
    }
    _getPreferredOrder(t) {
        for (let e = 0; e < t.length; e++) {
            const r = t[0]
              , i = this._preferredOrder.find(s => s.params.format.includes(r.format));
            if (i)
                return i
        }
        return this._preferredOrder[0]
    }
    _appendDefaultSearchParams(t) {
        if (!this._defaultSearchParams)
            return t;
        const e = /\?/.test(t) ? "&" : "?";
        return `${t}${e}${this._defaultSearchParams}`
    }
    _buildResolvedAsset(t, e) {
        const {aliases: r, data: i, loadParser: s, format: o} = e;
        return (this._basePath || this._rootPath) && (t.src = Ar.toAbsolute(t.src, this._basePath, this._rootPath)),
        t.alias = r ?? t.alias ?? [t.src],
        t.src = this._appendDefaultSearchParams(t.src),
        t.data = {
            ...i || {},
            ...t.data
        },
        t.loadParser = s ?? t.loadParser,
        t.format = o ?? t.format ?? Uy(t.src),
        t
    }
}
Vs.RETINA_PREFIX = /@([0-9\.]+)x/;
function Uy(n) {
    return n.split(".").pop().split("?").shift().split("#").shift()
}
const Ac = (n, t) => {
    const e = t.split("?")[1];
    return e && (n += `?${e}`),
    n
}
  , ug = class uo {
    constructor(t, e) {
        this.linkedSheets = [],
        this._texture = t instanceof ct ? t : null,
        this.textureSource = t.source,
        this.textures = {},
        this.animations = {},
        this.data = e;
        const r = parseFloat(e.meta.scale);
        r ? (this.resolution = r,
        t.source.resolution = this.resolution) : this.resolution = t.source._resolution,
        this._frames = this.data.frames,
        this._frameKeys = Object.keys(this._frames),
        this._batchIndex = 0,
        this._callback = null
    }
    parse() {
        return new Promise(t => {
            this._callback = t,
            this._batchIndex = 0,
            this._frameKeys.length <= uo.BATCH_SIZE ? (this._processFrames(0),
            this._processAnimations(),
            this._parseComplete()) : this._nextBatch()
        }
        )
    }
    _processFrames(t) {
        let e = t;
        const r = uo.BATCH_SIZE;
        for (; e - t < r && e < this._frameKeys.length; ) {
            const i = this._frameKeys[e]
              , s = this._frames[i]
              , o = s.frame;
            if (o) {
                let a = null
                  , l = null;
                const u = s.trimmed !== !1 && s.sourceSize ? s.sourceSize : s.frame
                  , c = new ce(0,0,Math.floor(u.w) / this.resolution,Math.floor(u.h) / this.resolution);
                s.rotated ? a = new ce(Math.floor(o.x) / this.resolution,Math.floor(o.y) / this.resolution,Math.floor(o.h) / this.resolution,Math.floor(o.w) / this.resolution) : a = new ce(Math.floor(o.x) / this.resolution,Math.floor(o.y) / this.resolution,Math.floor(o.w) / this.resolution,Math.floor(o.h) / this.resolution),
                s.trimmed !== !1 && s.spriteSourceSize && (l = new ce(Math.floor(s.spriteSourceSize.x) / this.resolution,Math.floor(s.spriteSourceSize.y) / this.resolution,Math.floor(o.w) / this.resolution,Math.floor(o.h) / this.resolution)),
                this.textures[i] = new ct({
                    source: this.textureSource,
                    frame: a,
                    orig: c,
                    trim: l,
                    rotate: s.rotated ? 2 : 0,
                    defaultAnchor: s.anchor,
                    defaultBorders: s.borders,
                    label: i.toString()
                })
            }
            e++
        }
    }
    _processAnimations() {
        const t = this.data.animations || {};
        for (const e in t) {
            this.animations[e] = [];
            for (let r = 0; r < t[e].length; r++) {
                const i = t[e][r];
                this.animations[e].push(this.textures[i])
            }
        }
    }
    _parseComplete() {
        const t = this._callback;
        this._callback = null,
        this._batchIndex = 0,
        t.call(this, this.textures)
    }
    _nextBatch() {
        this._processFrames(this._batchIndex * uo.BATCH_SIZE),
        this._batchIndex++,
        setTimeout( () => {
            this._batchIndex * uo.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(),
            this._parseComplete())
        }
        , 0)
    }
    destroy(t=!1) {
        for (const e in this.textures)
            this.textures[e].destroy();
        this._frames = null,
        this._frameKeys = null,
        this.data = null,
        this.textures = null,
        t && (this._texture?.destroy(),
        this.textureSource.destroy()),
        this._texture = null,
        this.textureSource = null,
        this.linkedSheets = []
    }
}
;
ug.BATCH_SIZE = 1e3;
let od = ug;
const $y = ["jpg", "png", "jpeg", "avif", "webp", "basis", "etc2", "bc7", "bc6h", "bc5", "bc4", "bc3", "bc2", "bc1", "eac", "astc"];
function cg(n, t, e) {
    const r = {};
    if (n.forEach(i => {
        r[i] = t
    }
    ),
    Object.keys(t.textures).forEach(i => {
        r[i] = t.textures[i]
    }
    ),
    !e) {
        const i = Ar.dirname(n[0]);
        t.linkedSheets.forEach( (s, o) => {
            const a = cg([`${i}/${t.data.meta.related_multi_packs[o]}`], s, !0);
            Object.assign(r, a)
        }
        )
    }
    return r
}
const Ny = {
    extension: Q.Asset,
    cache: {
        test: n => n instanceof od,
        getCacheableAssets: (n, t) => cg(n, t, !1)
    },
    resolver: {
        extension: {
            type: Q.ResolveParser,
            name: "resolveSpritesheet"
        },
        test: n => {
            const e = n.split("?")[0].split(".")
              , r = e.pop()
              , i = e.pop();
            return r === "json" && $y.includes(i)
        }
        ,
        parse: n => {
            const t = n.split(".");
            return {
                resolution: parseFloat(Vs.RETINA_PREFIX.exec(n)?.[1] ?? "1"),
                format: t[t.length - 2],
                src: n
            }
        }
    },
    loader: {
        name: "spritesheetLoader",
        extension: {
            type: Q.LoadParser,
            priority: ai.Normal,
            name: "spritesheetLoader"
        },
        async testParse(n, t) {
            return Ar.extname(t.src).toLowerCase() === ".json" && !!n.frames
        },
        async parse(n, t, e) {
            const {texture: r, imageFilename: i} = t?.data ?? {};
            let s = Ar.dirname(t.src);
            s && s.lastIndexOf("/") !== s.length - 1 && (s += "/");
            let o;
            if (r instanceof ct)
                o = r;
            else {
                const u = Ac(s + (i ?? n.meta.image), t.src);
                o = (await e.load([u]))[u]
            }
            const a = new od(o.source,n);
            await a.parse();
            const l = n?.meta?.related_multi_packs;
            if (Array.isArray(l)) {
                const u = [];
                for (const f of l) {
                    if (typeof f != "string")
                        continue;
                    let d = s + f;
                    t.data?.ignoreMultiPack || (d = Ac(d, t.src),
                    u.push(e.load({
                        src: d,
                        data: {
                            ignoreMultiPack: !0
                        }
                    })))
                }
                const c = await Promise.all(u);
                a.linkedSheets = c,
                c.forEach(f => {
                    f.linkedSheets = [a].concat(a.linkedSheets.filter(d => d !== f))
                }
                )
            }
            return a
        },
        async unload(n, t, e) {
            await e.unload(n.textureSource._sourceOrigin),
            n.destroy(!1)
        }
    }
};
Qe.add(Ny);
const gu = Object.create(null)
  , ad = Object.create(null);
function Vh(n, t) {
    let e = ad[n];
    return e === void 0 && (gu[t] === void 0 && (gu[t] = 1),
    ad[n] = e = gu[t]++),
    e
}
let _a;
function hg() {
    return (!_a || _a?.isContextLost()) && (_a = Jt.get().createCanvas().getContext("webgl", {})),
    _a
}
let ya;
function Gy() {
    if (!ya) {
        ya = "mediump";
        const n = hg();
        n && n.getShaderPrecisionFormat && (ya = n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision ? "highp" : "mediump")
    }
    return ya
}
function Vy(n, t, e) {
    return t ? n : e ? (n = n.replace("out vec4 finalColor;", ""),
    `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `) : `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `
}
function Wy(n, t, e) {
    const r = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
    if (n.substring(0, 9) !== "precision") {
        let i = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
        return i === "highp" && r !== "highp" && (i = "mediump"),
        `precision ${i} float;
${n}`
    } else if (r !== "highp" && n.substring(0, 15) === "precision highp")
        return n.replace("precision highp", "precision mediump");
    return n
}
function Xy(n, t) {
    return t ? `#version 300 es
${n}` : n
}
const Hy = {}
  , Yy = {};
function jy(n, {name: t="pixi-program"}, e=!0) {
    t = t.replace(/\s+/g, "-"),
    t += e ? "-fragment" : "-vertex";
    const r = e ? Hy : Yy;
    return r[t] ? (r[t]++,
    t += `-${r[t]}`) : r[t] = 1,
    n.indexOf("#define SHADER_NAME") !== -1 ? n : `${`#define SHADER_NAME ${t}`}
${n}`
}
function qy(n, t) {
    return t ? n.replace("#version 300 es", "") : n
}
const xu = {
    stripVersion: qy,
    ensurePrecision: Wy,
    addProgramDefines: Vy,
    setProgramName: jy,
    insertVersion: Xy
}
  , vu = Object.create(null)
  , fg = class Pc {
    constructor(t) {
        t = {
            ...Pc.defaultOptions,
            ...t
        };
        const e = t.fragment.indexOf("#version 300 es") !== -1
          , r = {
            stripVersion: e,
            ensurePrecision: {
                requestedFragmentPrecision: t.preferredFragmentPrecision,
                requestedVertexPrecision: t.preferredVertexPrecision,
                maxSupportedVertexPrecision: "highp",
                maxSupportedFragmentPrecision: Gy()
            },
            setProgramName: {
                name: t.name
            },
            addProgramDefines: e,
            insertVersion: e
        };
        let i = t.fragment
          , s = t.vertex;
        Object.keys(xu).forEach(o => {
            const a = r[o];
            i = xu[o](i, a, !0),
            s = xu[o](s, a, !1)
        }
        ),
        this.fragment = i,
        this.vertex = s,
        this._key = Vh(`${this.vertex}:${this.fragment}`, "gl-program")
    }
    destroy() {
        this.fragment = null,
        this.vertex = null,
        this._attributeData = null,
        this._uniformData = null,
        this._uniformBlockData = null,
        this.transformFeedbackVaryings = null
    }
    static from(t) {
        const e = `${t.vertex}:${t.fragment}`;
        return vu[e] || (vu[e] = new Pc(t)),
        vu[e]
    }
}
;
fg.defaultOptions = {
    preferredVertexPrecision: "highp",
    preferredFragmentPrecision: "mediump"
};
let xt = fg;
const ld = {
    uint8x2: {
        size: 2,
        stride: 2,
        normalised: !1
    },
    uint8x4: {
        size: 4,
        stride: 4,
        normalised: !1
    },
    sint8x2: {
        size: 2,
        stride: 2,
        normalised: !1
    },
    sint8x4: {
        size: 4,
        stride: 4,
        normalised: !1
    },
    unorm8x2: {
        size: 2,
        stride: 2,
        normalised: !0
    },
    unorm8x4: {
        size: 4,
        stride: 4,
        normalised: !0
    },
    snorm8x2: {
        size: 2,
        stride: 2,
        normalised: !0
    },
    snorm8x4: {
        size: 4,
        stride: 4,
        normalised: !0
    },
    uint16x2: {
        size: 2,
        stride: 4,
        normalised: !1
    },
    uint16x4: {
        size: 4,
        stride: 8,
        normalised: !1
    },
    sint16x2: {
        size: 2,
        stride: 4,
        normalised: !1
    },
    sint16x4: {
        size: 4,
        stride: 8,
        normalised: !1
    },
    unorm16x2: {
        size: 2,
        stride: 4,
        normalised: !0
    },
    unorm16x4: {
        size: 4,
        stride: 8,
        normalised: !0
    },
    snorm16x2: {
        size: 2,
        stride: 4,
        normalised: !0
    },
    snorm16x4: {
        size: 4,
        stride: 8,
        normalised: !0
    },
    float16x2: {
        size: 2,
        stride: 4,
        normalised: !1
    },
    float16x4: {
        size: 4,
        stride: 8,
        normalised: !1
    },
    float32: {
        size: 1,
        stride: 4,
        normalised: !1
    },
    float32x2: {
        size: 2,
        stride: 8,
        normalised: !1
    },
    float32x3: {
        size: 3,
        stride: 12,
        normalised: !1
    },
    float32x4: {
        size: 4,
        stride: 16,
        normalised: !1
    },
    uint32: {
        size: 1,
        stride: 4,
        normalised: !1
    },
    uint32x2: {
        size: 2,
        stride: 8,
        normalised: !1
    },
    uint32x3: {
        size: 3,
        stride: 12,
        normalised: !1
    },
    uint32x4: {
        size: 4,
        stride: 16,
        normalised: !1
    },
    sint32: {
        size: 1,
        stride: 4,
        normalised: !1
    },
    sint32x2: {
        size: 2,
        stride: 8,
        normalised: !1
    },
    sint32x3: {
        size: 3,
        stride: 12,
        normalised: !1
    },
    sint32x4: {
        size: 4,
        stride: 16,
        normalised: !1
    }
};
function Ky(n) {
    return ld[n] ?? ld.float32
}
const Zy = {
    f32: "float32",
    "vec2<f32>": "float32x2",
    "vec3<f32>": "float32x3",
    "vec4<f32>": "float32x4",
    vec2f: "float32x2",
    vec3f: "float32x3",
    vec4f: "float32x4",
    i32: "sint32",
    "vec2<i32>": "sint32x2",
    "vec3<i32>": "sint32x3",
    "vec4<i32>": "sint32x4",
    u32: "uint32",
    "vec2<u32>": "uint32x2",
    "vec3<u32>": "uint32x3",
    "vec4<u32>": "uint32x4",
    bool: "uint32",
    "vec2<bool>": "uint32x2",
    "vec3<bool>": "uint32x3",
    "vec4<bool>": "uint32x4"
};
function Qy({source: n, entryPoint: t}) {
    const e = {}
      , r = n.indexOf(`fn ${t}`);
    if (r !== -1) {
        const i = n.indexOf("->", r);
        if (i !== -1) {
            const s = n.substring(r, i)
              , o = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
            let a;
            for (; (a = o.exec(s)) !== null; ) {
                const l = Zy[a[3]] ?? "float32";
                e[a[2]] = {
                    location: parseInt(a[1], 10),
                    format: l,
                    stride: Ky(l).stride,
                    offset: 0,
                    instance: !1,
                    start: 0
                }
            }
        }
    }
    return e
}
function _u(n) {
    const t = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g
      , e = /@group\((\d+)\)/
      , r = /@binding\((\d+)\)/
      , i = /var(<[^>]+>)? (\w+)/
      , s = /:\s*(\w+)/
      , o = /struct\s+(\w+)\s*{([^}]+)}/g
      , a = /(\w+)\s*:\s*([\w\<\>]+)/g
      , l = /struct\s+(\w+)/
      , u = n.match(t)?.map(f => ({
        group: parseInt(f.match(e)[1], 10),
        binding: parseInt(f.match(r)[1], 10),
        name: f.match(i)[2],
        isUniform: f.match(i)[1] === "<uniform>",
        type: f.match(s)[1]
    }));
    if (!u)
        return {
            groups: [],
            structs: []
        };
    const c = n.match(o)?.map(f => {
        const d = f.match(l)[1]
          , h = f.match(a).reduce( (m, p) => {
            const [g,x] = p.split(":");
            return m[g.trim()] = x.trim(),
            m
        }
        , {});
        return h ? {
            name: d,
            members: h
        } : null
    }
    ).filter( ({name: f}) => u.some(d => d.type === f)) ?? [];
    return {
        groups: u,
        structs: c
    }
}
var co = (n => (n[n.VERTEX = 1] = "VERTEX",
n[n.FRAGMENT = 2] = "FRAGMENT",
n[n.COMPUTE = 4] = "COMPUTE",
n))(co || {});
function Jy({groups: n}) {
    const t = [];
    for (let e = 0; e < n.length; e++) {
        const r = n[e];
        t[r.group] || (t[r.group] = []),
        r.isUniform ? t[r.group].push({
            binding: r.binding,
            visibility: co.VERTEX | co.FRAGMENT,
            buffer: {
                type: "uniform"
            }
        }) : r.type === "sampler" ? t[r.group].push({
            binding: r.binding,
            visibility: co.FRAGMENT,
            sampler: {
                type: "filtering"
            }
        }) : r.type === "texture_2d" && t[r.group].push({
            binding: r.binding,
            visibility: co.FRAGMENT,
            texture: {
                sampleType: "float",
                viewDimension: "2d",
                multisampled: !1
            }
        })
    }
    return t
}
function t2({groups: n}) {
    const t = [];
    for (let e = 0; e < n.length; e++) {
        const r = n[e];
        t[r.group] || (t[r.group] = {}),
        t[r.group][r.name] = r.binding
    }
    return t
}
function e2(n, t) {
    const e = new Set
      , r = new Set
      , i = [...n.structs, ...t.structs].filter(o => e.has(o.name) ? !1 : (e.add(o.name),
    !0))
      , s = [...n.groups, ...t.groups].filter(o => {
        const a = `${o.name}-${o.binding}`;
        return r.has(a) ? !1 : (r.add(a),
        !0)
    }
    );
    return {
        structs: i,
        groups: s
    }
}
const yu = Object.create(null);
class dt {
    constructor(t) {
        this._layoutKey = 0,
        this._attributeLocationsKey = 0;
        const {fragment: e, vertex: r, layout: i, gpuLayout: s, name: o} = t;
        if (this.name = o,
        this.fragment = e,
        this.vertex = r,
        e.source === r.source) {
            const a = _u(e.source);
            this.structsAndGroups = a
        } else {
            const a = _u(r.source)
              , l = _u(e.source);
            this.structsAndGroups = e2(a, l)
        }
        this.layout = i ?? t2(this.structsAndGroups),
        this.gpuLayout = s ?? Jy(this.structsAndGroups),
        this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== void 0,
        this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== void 0,
        this._generateProgramKey()
    }
    _generateProgramKey() {
        const {vertex: t, fragment: e} = this
          , r = t.source + e.source + t.entryPoint + e.entryPoint;
        this._layoutKey = Vh(r, "program")
    }
    get attributeData() {
        return this._attributeData ?? (this._attributeData = Qy(this.vertex)),
        this._attributeData
    }
    destroy() {
        this.gpuLayout = null,
        this.layout = null,
        this.structsAndGroups = null,
        this.fragment = null,
        this.vertex = null
    }
    static from(t) {
        const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;
        return yu[e] || (yu[e] = new dt(t)),
        yu[e]
    }
}
const dg = ["f32", "i32", "vec2<f32>", "vec3<f32>", "vec4<f32>", "mat2x2<f32>", "mat3x3<f32>", "mat4x4<f32>", "mat3x2<f32>", "mat4x2<f32>", "mat2x3<f32>", "mat4x3<f32>", "mat2x4<f32>", "mat3x4<f32>"]
  , r2 = dg.reduce( (n, t) => (n[t] = !0,
n), {});
function n2(n, t) {
    switch (n) {
    case "f32":
        return 0;
    case "vec2<f32>":
        return new Float32Array(2 * t);
    case "vec3<f32>":
        return new Float32Array(3 * t);
    case "vec4<f32>":
        return new Float32Array(4 * t);
    case "mat2x2<f32>":
        return new Float32Array([1, 0, 0, 1]);
    case "mat3x3<f32>":
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4x4<f32>":
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    return null
}
const pg = class mg {
    constructor(t, e) {
        this._touched = 0,
        this.uid = me("uniform"),
        this._resourceType = "uniformGroup",
        this._resourceId = me("resource"),
        this.isUniformGroup = !0,
        this._dirtyId = 0,
        this.destroyed = !1,
        e = {
            ...mg.defaultOptions,
            ...e
        },
        this.uniformStructures = t;
        const r = {};
        for (const i in t) {
            const s = t[i];
            if (s.name = i,
            s.size = s.size ?? 1,
            !r2[s.type])
                throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${dg.join(", ")}`);
            s.value ?? (s.value = n2(s.type, s.size)),
            r[i] = s.value
        }
        this.uniforms = r,
        this._dirtyId = 1,
        this.ubo = e.ubo,
        this.isStatic = e.isStatic,
        this._signature = Vh(Object.keys(r).map(i => `${i}-${t[i].type}`).join("-"), "uniform-group")
    }
    update() {
        this._dirtyId++
    }
}
;
pg.defaultOptions = {
    ubo: !1,
    isStatic: !1
};
let Wh = pg;
class Ha {
    constructor(t) {
        this.resources = Object.create(null),
        this._dirty = !0;
        let e = 0;
        for (const r in t) {
            const i = t[r];
            this.setResource(i, e++)
        }
        this._updateKey()
    }
    _updateKey() {
        if (!this._dirty)
            return;
        this._dirty = !1;
        const t = [];
        let e = 0;
        for (const r in this.resources)
            t[e++] = this.resources[r]._resourceId;
        this._key = t.join("|")
    }
    setResource(t, e) {
        const r = this.resources[e];
        t !== r && (r && t.off?.("change", this.onResourceChange, this),
        t.on?.("change", this.onResourceChange, this),
        this.resources[e] = t,
        this._dirty = !0)
    }
    getResource(t) {
        return this.resources[t]
    }
    _touch(t) {
        const e = this.resources;
        for (const r in e)
            e[r]._touched = t
    }
    destroy() {
        const t = this.resources;
        for (const e in t)
            t[e].off?.("change", this.onResourceChange, this);
        this.resources = null
    }
    onResourceChange(t) {
        if (this._dirty = !0,
        t.destroyed) {
            const e = this.resources;
            for (const r in e)
                e[r] === t && (e[r] = null)
        } else
            this._updateKey()
    }
}
var Cl = (n => (n[n.WEBGL = 1] = "WEBGL",
n[n.WEBGPU = 2] = "WEBGPU",
n[n.BOTH = 3] = "BOTH",
n))(Cl || {});
class Nl extends Jr {
    constructor(t) {
        super(),
        this._uniformBindMap = Object.create(null),
        this._ownedBindGroups = [];
        let {gpuProgram: e, glProgram: r, groups: i, resources: s, compatibleRenderers: o, groupMap: a} = t;
        this.gpuProgram = e,
        this.glProgram = r,
        o === void 0 && (o = 0,
        e && (o |= Cl.WEBGPU),
        r && (o |= Cl.WEBGL)),
        this.compatibleRenderers = o;
        const l = {};
        if (!s && !i && (s = {}),
        s && i)
            throw new Error("[Shader] Cannot have both resources and groups");
        if (!e && i && !a)
            throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
        if (!e && i && a)
            for (const u in a)
                for (const c in a[u]) {
                    const f = a[u][c];
                    l[f] = {
                        group: u,
                        binding: c,
                        name: f
                    }
                }
        else if (e && i && !a) {
            const u = e.structsAndGroups.groups;
            a = {},
            u.forEach(c => {
                a[c.group] = a[c.group] || {},
                a[c.group][c.binding] = c.name,
                l[c.name] = c
            }
            )
        } else if (s) {
            i = {},
            a = {},
            e && e.structsAndGroups.groups.forEach(f => {
                a[f.group] = a[f.group] || {},
                a[f.group][f.binding] = f.name,
                l[f.name] = f
            }
            );
            let u = 0;
            for (const c in s)
                l[c] || (i[99] || (i[99] = new Ha,
                this._ownedBindGroups.push(i[99])),
                l[c] = {
                    group: 99,
                    binding: u,
                    name: c
                },
                a[99] = a[99] || {},
                a[99][u] = c,
                u++);
            for (const c in s) {
                const f = c;
                let d = s[c];
                !d.source && !d._resourceType && (d = new Wh(d));
                const h = l[f];
                h && (i[h.group] || (i[h.group] = new Ha,
                this._ownedBindGroups.push(i[h.group])),
                i[h.group].setResource(d, h.binding))
            }
        }
        this.groups = i,
        this._uniformBindMap = a,
        this.resources = this._buildResourceAccessor(i, l)
    }
    addResource(t, e, r) {
        var i, s;
        (i = this._uniformBindMap)[e] || (i[e] = {}),
        (s = this._uniformBindMap[e])[r] || (s[r] = t),
        this.groups[e] || (this.groups[e] = new Ha,
        this._ownedBindGroups.push(this.groups[e]))
    }
    _buildResourceAccessor(t, e) {
        const r = {};
        for (const i in e) {
            const s = e[i];
            Object.defineProperty(r, s.name, {
                get() {
                    return t[s.group].getResource(s.binding)
                },
                set(o) {
                    t[s.group].setResource(o, s.binding)
                }
            })
        }
        return r
    }
    destroy(t=!1) {
        this.emit("destroy", this),
        t && (this.gpuProgram?.destroy(),
        this.glProgram?.destroy()),
        this.gpuProgram = null,
        this.glProgram = null,
        this.removeAllListeners(),
        this._uniformBindMap = null,
        this._ownedBindGroups.forEach(e => {
            e.destroy()
        }
        ),
        this._ownedBindGroups = null,
        this.resources = null,
        this.groups = null
    }
    static from(t) {
        const {gpu: e, gl: r, ...i} = t;
        let s, o;
        return e && (s = dt.from(e)),
        r && (o = xt.from(r)),
        new Nl({
            gpuProgram: s,
            glProgram: o,
            ...i
        })
    }
}
const i2 = {
    normal: 0,
    add: 1,
    multiply: 2,
    screen: 3,
    overlay: 4,
    erase: 5,
    "normal-npm": 6,
    "add-npm": 7,
    "screen-npm": 8,
    min: 9,
    max: 10
}
  , bu = 0
  , Su = 1
  , wu = 2
  , Cu = 3
  , Tu = 4
  , Au = 5
  , Mc = class gg {
    constructor() {
        this.data = 0,
        this.blendMode = "normal",
        this.polygonOffset = 0,
        this.blend = !0,
        this.depthMask = !0
    }
    get blend() {
        return !!(this.data & 1 << bu)
    }
    set blend(t) {
        !!(this.data & 1 << bu) !== t && (this.data ^= 1 << bu)
    }
    get offsets() {
        return !!(this.data & 1 << Su)
    }
    set offsets(t) {
        !!(this.data & 1 << Su) !== t && (this.data ^= 1 << Su)
    }
    set cullMode(t) {
        if (t === "none") {
            this.culling = !1;
            return
        }
        this.culling = !0,
        this.clockwiseFrontFace = t === "front"
    }
    get cullMode() {
        return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none"
    }
    get culling() {
        return !!(this.data & 1 << wu)
    }
    set culling(t) {
        !!(this.data & 1 << wu) !== t && (this.data ^= 1 << wu)
    }
    get depthTest() {
        return !!(this.data & 1 << Cu)
    }
    set depthTest(t) {
        !!(this.data & 1 << Cu) !== t && (this.data ^= 1 << Cu)
    }
    get depthMask() {
        return !!(this.data & 1 << Au)
    }
    set depthMask(t) {
        !!(this.data & 1 << Au) !== t && (this.data ^= 1 << Au)
    }
    get clockwiseFrontFace() {
        return !!(this.data & 1 << Tu)
    }
    set clockwiseFrontFace(t) {
        !!(this.data & 1 << Tu) !== t && (this.data ^= 1 << Tu)
    }
    get blendMode() {
        return this._blendMode
    }
    set blendMode(t) {
        this.blend = t !== "none",
        this._blendMode = t,
        this._blendModeId = i2[t] || 0
    }
    get polygonOffset() {
        return this._polygonOffset
    }
    set polygonOffset(t) {
        this.offsets = !!t,
        this._polygonOffset = t
    }
    toString() {
        return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`
    }
    static for2d() {
        const t = new gg;
        return t.depthTest = !1,
        t.blend = !0,
        t
    }
}
;
Mc.default2d = Mc.for2d();
let s2 = Mc;
const xg = class Oc extends Nl {
    constructor(t) {
        t = {
            ...Oc.defaultOptions,
            ...t
        },
        super(t),
        this.enabled = !0,
        this._state = s2.for2d(),
        this.blendMode = t.blendMode,
        this.padding = t.padding,
        typeof t.antialias == "boolean" ? this.antialias = t.antialias ? "on" : "off" : this.antialias = t.antialias,
        this.resolution = t.resolution,
        this.blendRequired = t.blendRequired,
        this.clipToViewport = t.clipToViewport,
        this.addResource("uTexture", 0, 1)
    }
    apply(t, e, r, i) {
        t.applyFilter(this, e, r, i)
    }
    get blendMode() {
        return this._state.blendMode
    }
    set blendMode(t) {
        this._state.blendMode = t
    }
    static from(t) {
        const {gpu: e, gl: r, ...i} = t;
        let s, o;
        return e && (s = dt.from(e)),
        r && (o = xt.from(r)),
        new Oc({
            gpuProgram: s,
            glProgram: o,
            ...i
        })
    }
}
;
xg.defaultOptions = {
    blendMode: "normal",
    resolution: 1,
    padding: 0,
    antialias: "off",
    blendRequired: !1,
    clipToViewport: !0
};
let Ct = xg;
const Fc = [];
Qe.handleByNamedList(Q.Environment, Fc);
async function o2(n) {
    if (!n)
        for (let t = 0; t < Fc.length; t++) {
            const e = Fc[t];
            if (e.value.test()) {
                await e.value.load();
                return
            }
        }
}
let Js;
function a2() {
    if (typeof Js == "boolean")
        return Js;
    try {
        Js = new Function("param1","param2","param3","return param1[param2] === param3;")({
            a: "b"
        }, "a", "b") === !0
    } catch {
        Js = !1
    }
    return Js
}
var Xh = {
    exports: {}
};
Xh.exports = Gl;
Xh.exports.default = Gl;
function Gl(n, t, e) {
    e = e || 2;
    var r = t && t.length
      , i = r ? t[0] * e : n.length
      , s = vg(n, 0, i, e, !0)
      , o = [];
    if (!s || s.next === s.prev)
        return o;
    var a, l, u, c, f, d, h;
    if (r && (s = f2(n, t, s, e)),
    n.length > 80 * e) {
        a = u = n[0],
        l = c = n[1];
        for (var m = e; m < i; m += e)
            f = n[m],
            d = n[m + 1],
            f < a && (a = f),
            d < l && (l = d),
            f > u && (u = f),
            d > c && (c = d);
        h = Math.max(u - a, c - l),
        h = h !== 0 ? 32767 / h : 0
    }
    return jo(s, o, e, a, l, h, 0),
    o
}
function vg(n, t, e, r, i) {
    var s, o;
    if (i === kc(n, t, e, r) > 0)
        for (s = t; s < e; s += r)
            o = ud(s, n[s], n[s + 1], o);
    else
        for (s = e - r; s >= t; s -= r)
            o = ud(s, n[s], n[s + 1], o);
    return o && Vl(o, o.next) && (Ko(o),
    o = o.next),
    o
}
function Gi(n, t) {
    if (!n)
        return n;
    t || (t = n);
    var e = n, r;
    do
        if (r = !1,
        !e.steiner && (Vl(e, e.next) || Qt(e.prev, e, e.next) === 0)) {
            if (Ko(e),
            e = t = e.prev,
            e === e.next)
                break;
            r = !0
        } else
            e = e.next;
    while (r || e !== t);
    return t
}
function jo(n, t, e, r, i, s, o) {
    if (n) {
        !o && s && x2(n, r, i, s);
        for (var a = n, l, u; n.prev !== n.next; ) {
            if (l = n.prev,
            u = n.next,
            s ? u2(n, r, i, s) : l2(n)) {
                t.push(l.i / e | 0),
                t.push(n.i / e | 0),
                t.push(u.i / e | 0),
                Ko(n),
                n = u.next,
                a = u.next;
                continue
            }
            if (n = u,
            n === a) {
                o ? o === 1 ? (n = c2(Gi(n), t, e),
                jo(n, t, e, r, i, s, 2)) : o === 2 && h2(n, t, e, r, i, s) : jo(Gi(n), t, e, r, i, s, 1);
                break
            }
        }
    }
}
function l2(n) {
    var t = n.prev
      , e = n
      , r = n.next;
    if (Qt(t, e, r) >= 0)
        return !1;
    for (var i = t.x, s = e.x, o = r.x, a = t.y, l = e.y, u = r.y, c = i < s ? i < o ? i : o : s < o ? s : o, f = a < l ? a < u ? a : u : l < u ? l : u, d = i > s ? i > o ? i : o : s > o ? s : o, h = a > l ? a > u ? a : u : l > u ? l : u, m = r.next; m !== t; ) {
        if (m.x >= c && m.x <= d && m.y >= f && m.y <= h && ms(i, a, s, l, o, u, m.x, m.y) && Qt(m.prev, m, m.next) >= 0)
            return !1;
        m = m.next
    }
    return !0
}
function u2(n, t, e, r) {
    var i = n.prev
      , s = n
      , o = n.next;
    if (Qt(i, s, o) >= 0)
        return !1;
    for (var a = i.x, l = s.x, u = o.x, c = i.y, f = s.y, d = o.y, h = a < l ? a < u ? a : u : l < u ? l : u, m = c < f ? c < d ? c : d : f < d ? f : d, p = a > l ? a > u ? a : u : l > u ? l : u, g = c > f ? c > d ? c : d : f > d ? f : d, x = Ec(h, m, t, e, r), v = Ec(p, g, t, e, r), _ = n.prevZ, y = n.nextZ; _ && _.z >= x && y && y.z <= v; ) {
        if (_.x >= h && _.x <= p && _.y >= m && _.y <= g && _ !== i && _ !== o && ms(a, c, l, f, u, d, _.x, _.y) && Qt(_.prev, _, _.next) >= 0 || (_ = _.prevZ,
        y.x >= h && y.x <= p && y.y >= m && y.y <= g && y !== i && y !== o && ms(a, c, l, f, u, d, y.x, y.y) && Qt(y.prev, y, y.next) >= 0))
            return !1;
        y = y.nextZ
    }
    for (; _ && _.z >= x; ) {
        if (_.x >= h && _.x <= p && _.y >= m && _.y <= g && _ !== i && _ !== o && ms(a, c, l, f, u, d, _.x, _.y) && Qt(_.prev, _, _.next) >= 0)
            return !1;
        _ = _.prevZ
    }
    for (; y && y.z <= v; ) {
        if (y.x >= h && y.x <= p && y.y >= m && y.y <= g && y !== i && y !== o && ms(a, c, l, f, u, d, y.x, y.y) && Qt(y.prev, y, y.next) >= 0)
            return !1;
        y = y.nextZ
    }
    return !0
}
function c2(n, t, e) {
    var r = n;
    do {
        var i = r.prev
          , s = r.next.next;
        !Vl(i, s) && _g(i, r, r.next, s) && qo(i, s) && qo(s, i) && (t.push(i.i / e | 0),
        t.push(r.i / e | 0),
        t.push(s.i / e | 0),
        Ko(r),
        Ko(r.next),
        r = n = s),
        r = r.next
    } while (r !== n);
    return Gi(r)
}
function h2(n, t, e, r, i, s) {
    var o = n;
    do {
        for (var a = o.next.next; a !== o.prev; ) {
            if (o.i !== a.i && y2(o, a)) {
                var l = yg(o, a);
                o = Gi(o, o.next),
                l = Gi(l, l.next),
                jo(o, t, e, r, i, s, 0),
                jo(l, t, e, r, i, s, 0);
                return
            }
            a = a.next
        }
        o = o.next
    } while (o !== n)
}
function f2(n, t, e, r) {
    var i = [], s, o, a, l, u;
    for (s = 0,
    o = t.length; s < o; s++)
        a = t[s] * r,
        l = s < o - 1 ? t[s + 1] * r : n.length,
        u = vg(n, a, l, r, !1),
        u === u.next && (u.steiner = !0),
        i.push(_2(u));
    for (i.sort(d2),
    s = 0; s < i.length; s++)
        e = p2(i[s], e);
    return e
}
function d2(n, t) {
    return n.x - t.x
}
function p2(n, t) {
    var e = m2(n, t);
    if (!e)
        return t;
    var r = yg(e, n);
    return Gi(r, r.next),
    Gi(e, e.next)
}
function m2(n, t) {
    var e = t, r = n.x, i = n.y, s = -1 / 0, o;
    do {
        if (i <= e.y && i >= e.next.y && e.next.y !== e.y) {
            var a = e.x + (i - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
            if (a <= r && a > s && (s = a,
            o = e.x < e.next.x ? e : e.next,
            a === r))
                return o
        }
        e = e.next
    } while (e !== t);
    if (!o)
        return null;
    var l = o, u = o.x, c = o.y, f = 1 / 0, d;
    e = o;
    do
        r >= e.x && e.x >= u && r !== e.x && ms(i < c ? r : s, i, u, c, i < c ? s : r, i, e.x, e.y) && (d = Math.abs(i - e.y) / (r - e.x),
        qo(e, n) && (d < f || d === f && (e.x > o.x || e.x === o.x && g2(o, e))) && (o = e,
        f = d)),
        e = e.next;
    while (e !== l);
    return o
}
function g2(n, t) {
    return Qt(n.prev, n, t.prev) < 0 && Qt(t.next, n, n.next) < 0
}
function x2(n, t, e, r) {
    var i = n;
    do
        i.z === 0 && (i.z = Ec(i.x, i.y, t, e, r)),
        i.prevZ = i.prev,
        i.nextZ = i.next,
        i = i.next;
    while (i !== n);
    i.prevZ.nextZ = null,
    i.prevZ = null,
    v2(i)
}
function v2(n) {
    var t, e, r, i, s, o, a, l, u = 1;
    do {
        for (e = n,
        n = null,
        s = null,
        o = 0; e; ) {
            for (o++,
            r = e,
            a = 0,
            t = 0; t < u && (a++,
            r = r.nextZ,
            !!r); t++)
                ;
            for (l = u; a > 0 || l > 0 && r; )
                a !== 0 && (l === 0 || !r || e.z <= r.z) ? (i = e,
                e = e.nextZ,
                a--) : (i = r,
                r = r.nextZ,
                l--),
                s ? s.nextZ = i : n = i,
                i.prevZ = s,
                s = i;
            e = r
        }
        s.nextZ = null,
        u *= 2
    } while (o > 1);
    return n
}
function Ec(n, t, e, r, i) {
    return n = (n - e) * i | 0,
    t = (t - r) * i | 0,
    n = (n | n << 8) & 16711935,
    n = (n | n << 4) & 252645135,
    n = (n | n << 2) & 858993459,
    n = (n | n << 1) & 1431655765,
    t = (t | t << 8) & 16711935,
    t = (t | t << 4) & 252645135,
    t = (t | t << 2) & 858993459,
    t = (t | t << 1) & 1431655765,
    n | t << 1
}
function _2(n) {
    var t = n
      , e = n;
    do
        (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t),
        t = t.next;
    while (t !== n);
    return e
}
function ms(n, t, e, r, i, s, o, a) {
    return (i - o) * (t - a) >= (n - o) * (s - a) && (n - o) * (r - a) >= (e - o) * (t - a) && (e - o) * (s - a) >= (i - o) * (r - a)
}
function y2(n, t) {
    return n.next.i !== t.i && n.prev.i !== t.i && !b2(n, t) && (qo(n, t) && qo(t, n) && S2(n, t) && (Qt(n.prev, n, t.prev) || Qt(n, t.prev, t)) || Vl(n, t) && Qt(n.prev, n, n.next) > 0 && Qt(t.prev, t, t.next) > 0)
}
function Qt(n, t, e) {
    return (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y)
}
function Vl(n, t) {
    return n.x === t.x && n.y === t.y
}
function _g(n, t, e, r) {
    var i = Sa(Qt(n, t, e))
      , s = Sa(Qt(n, t, r))
      , o = Sa(Qt(e, r, n))
      , a = Sa(Qt(e, r, t));
    return !!(i !== s && o !== a || i === 0 && ba(n, e, t) || s === 0 && ba(n, r, t) || o === 0 && ba(e, n, r) || a === 0 && ba(e, t, r))
}
function ba(n, t, e) {
    return t.x <= Math.max(n.x, e.x) && t.x >= Math.min(n.x, e.x) && t.y <= Math.max(n.y, e.y) && t.y >= Math.min(n.y, e.y)
}
function Sa(n) {
    return n > 0 ? 1 : n < 0 ? -1 : 0
}
function b2(n, t) {
    var e = n;
    do {
        if (e.i !== n.i && e.next.i !== n.i && e.i !== t.i && e.next.i !== t.i && _g(e, e.next, n, t))
            return !0;
        e = e.next
    } while (e !== n);
    return !1
}
function qo(n, t) {
    return Qt(n.prev, n, n.next) < 0 ? Qt(n, t, n.next) >= 0 && Qt(n, n.prev, t) >= 0 : Qt(n, t, n.prev) < 0 || Qt(n, n.next, t) < 0
}
function S2(n, t) {
    var e = n
      , r = !1
      , i = (n.x + t.x) / 2
      , s = (n.y + t.y) / 2;
    do
        e.y > s != e.next.y > s && e.next.y !== e.y && i < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x && (r = !r),
        e = e.next;
    while (e !== n);
    return r
}
function yg(n, t) {
    var e = new Ic(n.i,n.x,n.y)
      , r = new Ic(t.i,t.x,t.y)
      , i = n.next
      , s = t.prev;
    return n.next = t,
    t.prev = n,
    e.next = i,
    i.prev = e,
    r.next = e,
    e.prev = r,
    s.next = r,
    r.prev = s,
    r
}
function ud(n, t, e, r) {
    var i = new Ic(n,t,e);
    return r ? (i.next = r.next,
    i.prev = r,
    r.next.prev = i,
    r.next = i) : (i.prev = i,
    i.next = i),
    i
}
function Ko(n) {
    n.next.prev = n.prev,
    n.prev.next = n.next,
    n.prevZ && (n.prevZ.nextZ = n.nextZ),
    n.nextZ && (n.nextZ.prevZ = n.prevZ)
}
function Ic(n, t, e) {
    this.i = n,
    this.x = t,
    this.y = e,
    this.prev = null,
    this.next = null,
    this.z = 0,
    this.prevZ = null,
    this.nextZ = null,
    this.steiner = !1
}
Gl.deviation = function(n, t, e, r) {
    var i = t && t.length
      , s = i ? t[0] * e : n.length
      , o = Math.abs(kc(n, 0, s, e));
    if (i)
        for (var a = 0, l = t.length; a < l; a++) {
            var u = t[a] * e
              , c = a < l - 1 ? t[a + 1] * e : n.length;
            o -= Math.abs(kc(n, u, c, e))
        }
    var f = 0;
    for (a = 0; a < r.length; a += 3) {
        var d = r[a] * e
          , h = r[a + 1] * e
          , m = r[a + 2] * e;
        f += Math.abs((n[d] - n[m]) * (n[h + 1] - n[d + 1]) - (n[d] - n[h]) * (n[m + 1] - n[d + 1]))
    }
    return o === 0 && f === 0 ? 0 : Math.abs((f - o) / o)
}
;
function kc(n, t, e, r) {
    for (var i = 0, s = t, o = e - r; s < e; s += r)
        i += (n[o] - n[s]) * (n[s + 1] + n[o + 1]),
        o = s;
    return i
}
Gl.flatten = function(n) {
    for (var t = n[0][0].length, e = {
        vertices: [],
        holes: [],
        dimensions: t
    }, r = 0, i = 0; i < n.length; i++) {
        for (var s = 0; s < n[i].length; s++)
            for (var o = 0; o < t; o++)
                e.vertices.push(n[i][s][o]);
        i > 0 && (r += n[i - 1].length,
        e.holes.push(r))
    }
    return e
}
;
var w2 = Xh.exports;
const C2 = Uh(w2);
var bg = (n => (n[n.NONE = 0] = "NONE",
n[n.COLOR = 16384] = "COLOR",
n[n.STENCIL = 1024] = "STENCIL",
n[n.DEPTH = 256] = "DEPTH",
n[n.COLOR_DEPTH = 16640] = "COLOR_DEPTH",
n[n.COLOR_STENCIL = 17408] = "COLOR_STENCIL",
n[n.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL",
n[n.ALL = 17664] = "ALL",
n))(bg || {});
class T2 {
    constructor(t) {
        this.items = [],
        this._name = t
    }
    emit(t, e, r, i, s, o, a, l) {
        const {name: u, items: c} = this;
        for (let f = 0, d = c.length; f < d; f++)
            c[f][u](t, e, r, i, s, o, a, l);
        return this
    }
    add(t) {
        return t[this._name] && (this.remove(t),
        this.items.push(t)),
        this
    }
    remove(t) {
        const e = this.items.indexOf(t);
        return e !== -1 && this.items.splice(e, 1),
        this
    }
    contains(t) {
        return this.items.indexOf(t) !== -1
    }
    removeAll() {
        return this.items.length = 0,
        this
    }
    destroy() {
        this.removeAll(),
        this.items = null,
        this._name = null
    }
    get empty() {
        return this.items.length === 0
    }
    get name() {
        return this._name
    }
}
const A2 = ["init", "destroy", "contextChange", "resolutionChange", "reset", "renderEnd", "renderStart", "render", "update", "postrender", "prerender"]
  , Sg = class wg extends Jr {
    constructor(t) {
        super(),
        this.runners = Object.create(null),
        this.renderPipes = Object.create(null),
        this._initOptions = {},
        this._systemsHash = Object.create(null),
        this.type = t.type,
        this.name = t.name,
        this.config = t;
        const e = [...A2, ...this.config.runners ?? []];
        this._addRunners(...e),
        this._unsafeEvalCheck()
    }
    async init(t={}) {
        const e = t.skipExtensionImports === !0 ? !0 : t.manageImports === !1;
        await o2(e),
        this._addSystems(this.config.systems),
        this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
        for (const r in this._systemsHash)
            t = {
                ...this._systemsHash[r].constructor.defaultOptions,
                ...t
            };
        t = {
            ...wg.defaultOptions,
            ...t
        },
        this._roundPixels = t.roundPixels ? 1 : 0;
        for (let r = 0; r < this.runners.init.items.length; r++)
            await this.runners.init.items[r].init(t);
        this._initOptions = t
    }
    render(t, e) {
        let r = t;
        if (r instanceof tr && (r = {
            container: r
        },
        e && (J(zt, "passing a second argument is deprecated, please use render options instead"),
        r.target = e.renderTexture)),
        r.target || (r.target = this.view.renderTarget),
        r.target === this.view.renderTarget && (this._lastObjectRendered = r.container,
        r.clearColor = this.background.colorRgba),
        r.clearColor) {
            const i = Array.isArray(r.clearColor) && r.clearColor.length === 4;
            r.clearColor = i ? r.clearColor : At.shared.setValue(r.clearColor).toArray()
        }
        r.transform || (r.container.updateLocalTransform(),
        r.transform = r.container.localTransform),
        this.runners.prerender.emit(r),
        this.runners.renderStart.emit(r),
        this.runners.render.emit(r),
        this.runners.renderEnd.emit(r),
        this.runners.postrender.emit(r)
    }
    resize(t, e, r) {
        const i = this.view.resolution;
        this.view.resize(t, e, r),
        this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution),
        r !== void 0 && r !== i && this.runners.resolutionChange.emit(r)
    }
    clear(t={}) {
        const e = this;
        t.target || (t.target = e.renderTarget.renderTarget),
        t.clearColor || (t.clearColor = this.background.colorRgba),
        t.clear ?? (t.clear = bg.ALL);
        const {clear: r, clearColor: i, target: s} = t;
        At.shared.setValue(i ?? this.background.colorRgba),
        e.renderTarget.clear(s, r, At.shared.toArray())
    }
    get resolution() {
        return this.view.resolution
    }
    set resolution(t) {
        this.view.resolution = t,
        this.runners.resolutionChange.emit(t)
    }
    get width() {
        return this.view.texture.frame.width
    }
    get height() {
        return this.view.texture.frame.height
    }
    get canvas() {
        return this.view.canvas
    }
    get lastObjectRendered() {
        return this._lastObjectRendered
    }
    get renderingToScreen() {
        return this.renderTarget.renderingToScreen
    }
    get screen() {
        return this.view.screen
    }
    _addRunners(...t) {
        t.forEach(e => {
            this.runners[e] = new T2(e)
        }
        )
    }
    _addSystems(t) {
        let e;
        for (e in t) {
            const r = t[e];
            this._addSystem(r.value, r.name)
        }
    }
    _addSystem(t, e) {
        const r = new t(this);
        if (this[e])
            throw new Error(`Whoops! The name "${e}" is already in use`);
        this[e] = r,
        this._systemsHash[e] = r;
        for (const i in this.runners)
            this.runners[i].add(r);
        return this
    }
    _addPipes(t, e) {
        const r = e.reduce( (i, s) => (i[s.name] = s.value,
        i), {});
        t.forEach(i => {
            const s = i.value
              , o = i.name
              , a = r[o];
            this.renderPipes[o] = new s(this,a ? new a : null)
        }
        )
    }
    destroy(t=!1) {
        this.runners.destroy.items.reverse(),
        this.runners.destroy.emit(t),
        Object.values(this.runners).forEach(e => {
            e.destroy()
        }
        ),
        this._systemsHash = null,
        this.renderPipes = null
    }
    generateTexture(t) {
        return this.textureGenerator.generateTexture(t)
    }
    get roundPixels() {
        return !!this._roundPixels
    }
    _unsafeEvalCheck() {
        if (!a2())
            throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")
    }
}
;
Sg.defaultOptions = {
    resolution: 1,
    failIfMajorPerformanceCaveat: !1,
    roundPixels: !1
};
let Cg = Sg, wa;
function P2(n) {
    return wa !== void 0 || (wa = ( () => {
        const t = {
            stencil: !0,
            failIfMajorPerformanceCaveat: n ?? Cg.defaultOptions.failIfMajorPerformanceCaveat
        };
        try {
            if (!Jt.get().getWebGLRenderingContext())
                return !1;
            let r = Jt.get().createCanvas().getContext("webgl", t);
            const i = !!r?.getContextAttributes()?.stencil;
            if (r) {
                const s = r.getExtension("WEBGL_lose_context");
                s && s.loseContext()
            }
            return r = null,
            i
        } catch {
            return !1
        }
    }
    )()),
    wa
}
let Ca;
async function M2(n={}) {
    return Ca !== void 0 || (Ca = await (async () => {
        const t = Jt.get().getNavigator().gpu;
        if (!t)
            return !1;
        try {
            return await (await t.requestAdapter(n)).requestDevice(),
            !0
        } catch {
            return !1
        }
    }
    )()),
    Ca
}
const cd = ["webgl", "webgpu", "canvas"];
async function O2(n) {
    let t = [];
    n.preference ? (t.push(n.preference),
    cd.forEach(s => {
        s !== n.preference && t.push(s)
    }
    )) : t = cd.slice();
    let e, r = {};
    for (let s = 0; s < t.length; s++) {
        const o = t[s];
        if (o === "webgpu" && await M2()) {
            const {WebGPURenderer: a} = await yl(async () => {
                const {WebGPURenderer: l} = await import("./WebGPURenderer.wV-uZUc6.js");
                return {
                    WebGPURenderer: l
                }
            }
            , __vite__mapDeps([3, 2, 4]));
            e = a,
            r = {
                ...n,
                ...n.webgpu
            };
            break
        } else if (o === "webgl" && P2(n.failIfMajorPerformanceCaveat ?? Cg.defaultOptions.failIfMajorPerformanceCaveat)) {
            const {WebGLRenderer: a} = await yl(async () => {
                const {WebGLRenderer: l} = await import("./WebGLRenderer.BRxGlJXR.js");
                return {
                    WebGLRenderer: l
                }
            }
            , __vite__mapDeps([5, 2, 4]));
            e = a,
            r = {
                ...n,
                ...n.webgl
            };
            break
        } else if (o === "canvas")
            throw r = {
                ...n
            },
            new Error("CanvasRenderer is not yet implemented")
    }
    if (delete r.webgpu,
    delete r.webgl,
    !e)
        throw new Error("No available renderer for the current environment");
    const i = new e;
    return await i.init(r),
    i
}
const Tg = "8.5.2";
class Ag {
    static init() {
        globalThis.__PIXI_APP_INIT__?.(this, Tg)
    }
    static destroy() {}
}
Ag.extension = Q.Application;
class F2 {
    constructor(t) {
        this._renderer = t
    }
    init() {
        globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, Tg)
    }
    destroy() {
        this._renderer = null
    }
}
F2.extension = {
    type: [Q.WebGLSystem, Q.WebGPUSystem],
    name: "initHook",
    priority: -10
};
const Pg = class zc {
    constructor(...t) {
        this.stage = new tr,
        t[0] !== void 0 && J(zt, "Application constructor options are deprecated, please use Application.init() instead.")
    }
    async init(t) {
        t = {
            ...t
        },
        this.renderer = await O2(t),
        zc._plugins.forEach(e => {
            e.init.call(this, t)
        }
        )
    }
    render() {
        this.renderer.render({
            container: this.stage
        })
    }
    get canvas() {
        return this.renderer.canvas
    }
    get view() {
        return J(zt, "Application.view is deprecated, please use Application.canvas instead."),
        this.renderer.canvas
    }
    get screen() {
        return this.renderer.screen
    }
    destroy(t=!1, e=!1) {
        const r = zc._plugins.slice(0);
        r.reverse(),
        r.forEach(i => {
            i.destroy.call(this)
        }
        ),
        this.stage.destroy(e),
        this.stage = null,
        this.renderer.destroy(t),
        this.renderer = null
    }
}
;
Pg._plugins = [];
let Mg = Pg;
Qe.handleByList(Q.Application, Mg._plugins);
Qe.add(Ag);
class Og extends Jr {
    constructor() {
        super(...arguments),
        this.chars = Object.create(null),
        this.lineHeight = 0,
        this.fontFamily = "",
        this.fontMetrics = {
            fontSize: 0,
            ascent: 0,
            descent: 0
        },
        this.baseLineOffset = 0,
        this.distanceField = {
            type: "none",
            range: 0
        },
        this.pages = [],
        this.applyFillAsTint = !0,
        this.baseMeasurementFontSize = 100,
        this.baseRenderedFontSize = 100
    }
    get font() {
        return J(zt, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),
        this.fontFamily
    }
    get pageTextures() {
        return J(zt, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),
        this.pages
    }
    get size() {
        return J(zt, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),
        this.fontMetrics.fontSize
    }
    get distanceFieldRange() {
        return J(zt, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),
        this.distanceField.range
    }
    get distanceFieldType() {
        return J(zt, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),
        this.distanceField.type
    }
    destroy(t=!1) {
        this.emit("destroy", this),
        this.removeAllListeners();
        for (const e in this.chars)
            this.chars[e].texture?.destroy();
        this.chars = null,
        t && (this.pages.forEach(e => e.texture.destroy(!0)),
        this.pages = null)
    }
}
const Fg = class Rc {
    constructor(t, e, r, i) {
        this.uid = me("fillGradient"),
        this.type = "linear",
        this.gradientStops = [],
        this._styleKey = null,
        this.x0 = t,
        this.y0 = e,
        this.x1 = r,
        this.y1 = i
    }
    addColorStop(t, e) {
        return this.gradientStops.push({
            offset: t,
            color: At.shared.setValue(e).toHexa()
        }),
        this._styleKey = null,
        this
    }
    buildLinearGradient() {
        const t = Rc.defaultTextureSize
          , {gradientStops: e} = this
          , r = Jt.get().createCanvas();
        r.width = t,
        r.height = t;
        const i = r.getContext("2d")
          , s = i.createLinearGradient(0, 0, Rc.defaultTextureSize, 1);
        for (let p = 0; p < e.length; p++) {
            const g = e[p];
            s.addColorStop(g.offset, g.color)
        }
        i.fillStyle = s,
        i.fillRect(0, 0, t, t),
        this.texture = new ct({
            source: new Ki({
                resource: r,
                addressModeU: "clamp-to-edge",
                addressModeV: "repeat"
            })
        });
        const {x0: o, y0: a, x1: l, y1: u} = this
          , c = new Ot
          , f = l - o
          , d = u - a
          , h = Math.sqrt(f * f + d * d)
          , m = Math.atan2(d, f);
        c.translate(-o, -a),
        c.scale(1 / t, 1 / t),
        c.rotate(-m),
        c.scale(256 / h, 1),
        this.transform = c,
        this._styleKey = null
    }
    get styleKey() {
        if (this._styleKey)
            return this._styleKey;
        const t = this.gradientStops.map(i => `${i.offset}-${i.color}`).join("-")
          , e = this.texture.uid
          , r = this.transform.toArray().join("-");
        return `fill-gradient-${this.uid}-${t}-${e}-${r}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`
    }
}
;
Fg.defaultTextureSize = 256;
let Zo = Fg;
const hd = {
    repeat: {
        addressModeU: "repeat",
        addressModeV: "repeat"
    },
    "repeat-x": {
        addressModeU: "repeat",
        addressModeV: "clamp-to-edge"
    },
    "repeat-y": {
        addressModeU: "clamp-to-edge",
        addressModeV: "repeat"
    },
    "no-repeat": {
        addressModeU: "clamp-to-edge",
        addressModeV: "clamp-to-edge"
    }
};
class Wl {
    constructor(t, e) {
        this.uid = me("fillPattern"),
        this.transform = new Ot,
        this._styleKey = null,
        this.texture = t,
        this.transform.scale(1 / t.frame.width, 1 / t.frame.height),
        e && (t.source.style.addressModeU = hd[e].addressModeU,
        t.source.style.addressModeV = hd[e].addressModeV)
    }
    setTransform(t) {
        const e = this.texture;
        this.transform.copyFrom(t),
        this.transform.invert(),
        this.transform.scale(1 / e.frame.width, 1 / e.frame.height),
        this._styleKey = null
    }
    get styleKey() {
        return this._styleKey ? this._styleKey : (this._styleKey = `fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,
        this._styleKey)
    }
}
var E2 = k2
  , Pu = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
}
  , I2 = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
function k2(n) {
    var t = [];
    return n.replace(I2, function(e, r, i) {
        var s = r.toLowerCase();
        for (i = R2(i),
        s == "m" && i.length > 2 && (t.push([r].concat(i.splice(0, 2))),
        s = "l",
        r = r == "m" ? "l" : "L"); ; ) {
            if (i.length == Pu[s])
                return i.unshift(r),
                t.push(i);
            if (i.length < Pu[s])
                throw new Error("malformed path data");
            t.push([r].concat(i.splice(0, Pu[s])))
        }
    }),
    t
}
var z2 = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
function R2(n) {
    var t = n.match(z2);
    return t ? t.map(Number) : []
}
const L2 = Uh(E2);
function D2(n, t) {
    const e = L2(n)
      , r = [];
    let i = null
      , s = 0
      , o = 0;
    for (let a = 0; a < e.length; a++) {
        const l = e[a]
          , u = l[0]
          , c = l;
        switch (u) {
        case "M":
            s = c[1],
            o = c[2],
            t.moveTo(s, o);
            break;
        case "m":
            s += c[1],
            o += c[2],
            t.moveTo(s, o);
            break;
        case "H":
            s = c[1],
            t.lineTo(s, o);
            break;
        case "h":
            s += c[1],
            t.lineTo(s, o);
            break;
        case "V":
            o = c[1],
            t.lineTo(s, o);
            break;
        case "v":
            o += c[1],
            t.lineTo(s, o);
            break;
        case "L":
            s = c[1],
            o = c[2],
            t.lineTo(s, o);
            break;
        case "l":
            s += c[1],
            o += c[2],
            t.lineTo(s, o);
            break;
        case "C":
            s = c[5],
            o = c[6],
            t.bezierCurveTo(c[1], c[2], c[3], c[4], s, o);
            break;
        case "c":
            t.bezierCurveTo(s + c[1], o + c[2], s + c[3], o + c[4], s + c[5], o + c[6]),
            s += c[5],
            o += c[6];
            break;
        case "S":
            s = c[3],
            o = c[4],
            t.bezierCurveToShort(c[1], c[2], s, o);
            break;
        case "s":
            t.bezierCurveToShort(s + c[1], o + c[2], s + c[3], o + c[4]),
            s += c[3],
            o += c[4];
            break;
        case "Q":
            s = c[3],
            o = c[4],
            t.quadraticCurveTo(c[1], c[2], s, o);
            break;
        case "q":
            t.quadraticCurveTo(s + c[1], o + c[2], s + c[3], o + c[4]),
            s += c[3],
            o += c[4];
            break;
        case "T":
            s = c[1],
            o = c[2],
            t.quadraticCurveToShort(s, o);
            break;
        case "t":
            s += c[1],
            o += c[2],
            t.quadraticCurveToShort(s, o);
            break;
        case "A":
            s = c[6],
            o = c[7],
            t.arcToSvg(c[1], c[2], c[3], c[4], c[5], s, o);
            break;
        case "a":
            s += c[6],
            o += c[7],
            t.arcToSvg(c[1], c[2], c[3], c[4], c[5], s, o);
            break;
        case "Z":
        case "z":
            t.closePath(),
            r.length > 0 && (i = r.pop(),
            i ? (s = i.startX,
            o = i.startY) : (s = 0,
            o = 0)),
            i = null;
            break;
        default:
            ge(`Unknown SVG path command: ${u}`)
        }
        u !== "Z" && u !== "z" && i === null && (i = {
            startX: s,
            startY: o
        },
        r.push(i))
    }
    return t
}
class Hh {
    constructor(t=0, e=0, r=0) {
        this.type = "circle",
        this.x = t,
        this.y = e,
        this.radius = r
    }
    clone() {
        return new Hh(this.x,this.y,this.radius)
    }
    contains(t, e) {
        if (this.radius <= 0)
            return !1;
        const r = this.radius * this.radius;
        let i = this.x - t
          , s = this.y - e;
        return i *= i,
        s *= s,
        i + s <= r
    }
    strokeContains(t, e, r) {
        if (this.radius === 0)
            return !1;
        const i = this.x - t
          , s = this.y - e
          , o = this.radius
          , a = r / 2
          , l = Math.sqrt(i * i + s * s);
        return l < o + a && l > o - a
    }
    getBounds(t) {
        return t = t || new ce,
        t.x = this.x - this.radius,
        t.y = this.y - this.radius,
        t.width = this.radius * 2,
        t.height = this.radius * 2,
        t
    }
    copyFrom(t) {
        return this.x = t.x,
        this.y = t.y,
        this.radius = t.radius,
        this
    }
    copyTo(t) {
        return t.copyFrom(this),
        t
    }
    toString() {
        return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`
    }
}
class Yh {
    constructor(t=0, e=0, r=0, i=0) {
        this.type = "ellipse",
        this.x = t,
        this.y = e,
        this.halfWidth = r,
        this.halfHeight = i
    }
    clone() {
        return new Yh(this.x,this.y,this.halfWidth,this.halfHeight)
    }
    contains(t, e) {
        if (this.halfWidth <= 0 || this.halfHeight <= 0)
            return !1;
        let r = (t - this.x) / this.halfWidth
          , i = (e - this.y) / this.halfHeight;
        return r *= r,
        i *= i,
        r + i <= 1
    }
    strokeContains(t, e, r) {
        const {halfWidth: i, halfHeight: s} = this;
        if (i <= 0 || s <= 0)
            return !1;
        const o = r / 2
          , a = i - o
          , l = s - o
          , u = i + o
          , c = s + o
          , f = t - this.x
          , d = e - this.y
          , h = f * f / (a * a) + d * d / (l * l)
          , m = f * f / (u * u) + d * d / (c * c);
        return h > 1 && m <= 1
    }
    getBounds(t) {
        return t = t || new ce,
        t.x = this.x - this.halfWidth,
        t.y = this.y - this.halfHeight,
        t.width = this.halfWidth * 2,
        t.height = this.halfHeight * 2,
        t
    }
    copyFrom(t) {
        return this.x = t.x,
        this.y = t.y,
        this.halfWidth = t.halfWidth,
        this.halfHeight = t.halfHeight,
        this
    }
    copyTo(t) {
        return t.copyFrom(this),
        t
    }
    toString() {
        return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`
    }
}
function B2(n, t, e, r, i, s) {
    const o = n - e
      , a = t - r
      , l = i - e
      , u = s - r
      , c = o * l + a * u
      , f = l * l + u * u;
    let d = -1;
    f !== 0 && (d = c / f);
    let h, m;
    d < 0 ? (h = e,
    m = r) : d > 1 ? (h = i,
    m = s) : (h = e + d * l,
    m = r + d * u);
    const p = n - h
      , g = t - m;
    return p * p + g * g
}
class Co {
    constructor(...t) {
        this.type = "polygon";
        let e = Array.isArray(t[0]) ? t[0] : t;
        if (typeof e[0] != "number") {
            const r = [];
            for (let i = 0, s = e.length; i < s; i++)
                r.push(e[i].x, e[i].y);
            e = r
        }
        this.points = e,
        this.closePath = !0
    }
    clone() {
        const t = this.points.slice()
          , e = new Co(t);
        return e.closePath = this.closePath,
        e
    }
    contains(t, e) {
        let r = !1;
        const i = this.points.length / 2;
        for (let s = 0, o = i - 1; s < i; o = s++) {
            const a = this.points[s * 2]
              , l = this.points[s * 2 + 1]
              , u = this.points[o * 2]
              , c = this.points[o * 2 + 1];
            l > e != c > e && t < (u - a) * ((e - l) / (c - l)) + a && (r = !r)
        }
        return r
    }
    strokeContains(t, e, r) {
        const i = r / 2
          , s = i * i
          , {points: o} = this
          , a = o.length - (this.closePath ? 0 : 2);
        for (let l = 0; l < a; l += 2) {
            const u = o[l]
              , c = o[l + 1]
              , f = o[(l + 2) % o.length]
              , d = o[(l + 3) % o.length];
            if (B2(t, e, u, c, f, d) <= s)
                return !0
        }
        return !1
    }
    getBounds(t) {
        t = t || new ce;
        const e = this.points;
        let r = 1 / 0
          , i = -1 / 0
          , s = 1 / 0
          , o = -1 / 0;
        for (let a = 0, l = e.length; a < l; a += 2) {
            const u = e[a]
              , c = e[a + 1];
            r = u < r ? u : r,
            i = u > i ? u : i,
            s = c < s ? c : s,
            o = c > o ? c : o
        }
        return t.x = r,
        t.width = i - r,
        t.y = s,
        t.height = o - s,
        t
    }
    copyFrom(t) {
        return this.points = t.points.slice(),
        this.closePath = t.closePath,
        this
    }
    copyTo(t) {
        return t.copyFrom(this),
        t
    }
    toString() {
        return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce( (t, e) => `${t}, ${e}`, "")}]`
    }
    get lastX() {
        return this.points[this.points.length - 2]
    }
    get lastY() {
        return this.points[this.points.length - 1]
    }
    get x() {
        return this.points[this.points.length - 2]
    }
    get y() {
        return this.points[this.points.length - 1]
    }
}
const Ta = (n, t, e, r, i, s) => {
    const o = n - e
      , a = t - r
      , l = Math.sqrt(o * o + a * a);
    return l >= i - s && l <= i + s
}
;
class jh {
    constructor(t=0, e=0, r=0, i=0, s=20) {
        this.type = "roundedRectangle",
        this.x = t,
        this.y = e,
        this.width = r,
        this.height = i,
        this.radius = s
    }
    getBounds(t) {
        return t = t || new ce,
        t.x = this.x,
        t.y = this.y,
        t.width = this.width,
        t.height = this.height,
        t
    }
    clone() {
        return new jh(this.x,this.y,this.width,this.height,this.radius)
    }
    copyFrom(t) {
        return this.x = t.x,
        this.y = t.y,
        this.width = t.width,
        this.height = t.height,
        this
    }
    copyTo(t) {
        return t.copyFrom(this),
        t
    }
    contains(t, e) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
            const r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
            if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r)
                return !0;
            let i = t - (this.x + r)
              , s = e - (this.y + r);
            const o = r * r;
            if (i * i + s * s <= o || (i = t - (this.x + this.width - r),
            i * i + s * s <= o) || (s = e - (this.y + this.height - r),
            i * i + s * s <= o) || (i = t - (this.x + r),
            i * i + s * s <= o))
                return !0
        }
        return !1
    }
    strokeContains(t, e, r) {
        const {x: i, y: s, width: o, height: a, radius: l} = this
          , u = r / 2
          , c = i + l
          , f = s + l
          , d = o - l * 2
          , h = a - l * 2
          , m = i + o
          , p = s + a;
        return (t >= i - u && t <= i + u || t >= m - u && t <= m + u) && e >= f && e <= f + h || (e >= s - u && e <= s + u || e >= p - u && e <= p + u) && t >= c && t <= c + d ? !0 : t < c && e < f && Ta(t, e, c, f, l, u) || t > m - l && e < f && Ta(t, e, m - l, f, l, u) || t > m - l && e > p - l && Ta(t, e, m - l, p - l, l, u) || t < c && e > p - l && Ta(t, e, c, p - l, l, u)
    }
    toString() {
        return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`
    }
}
const U2 = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function $2(n) {
    let t = "";
    for (let e = 0; e < n; ++e)
        e > 0 && (t += `
else `),
        e < n - 1 && (t += `if(test == ${e}.0){}`);
    return t
}
function N2(n, t) {
    if (n === 0)
        throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    const e = t.createShader(t.FRAGMENT_SHADER);
    try {
        for (; ; ) {
            const r = U2.replace(/%forloop%/gi, $2(n));
            if (t.shaderSource(e, r),
            t.compileShader(e),
            !t.getShaderParameter(e, t.COMPILE_STATUS))
                n = n / 2 | 0;
            else
                break
        }
    } finally {
        t.deleteShader(e)
    }
    return n
}
let Ji = null;
function Eg() {
    if (Ji)
        return Ji;
    const n = hg();
    return Ji = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
    Ji = N2(Ji, n),
    n.getExtension("WEBGL_lose_context")?.loseContext(),
    Ji
}
const Ig = {};
function G2(n, t) {
    let e = 2166136261;
    for (let r = 0; r < t; r++)
        e ^= n[r].uid,
        e = Math.imul(e, 16777619),
        e >>>= 0;
    return Ig[e] || V2(n, t, e)
}
let Mu = 0;
function V2(n, t, e) {
    const r = {};
    let i = 0;
    Mu || (Mu = Eg());
    for (let o = 0; o < Mu; o++) {
        const a = o < t ? n[o] : ct.EMPTY.source;
        r[i++] = a.source,
        r[i++] = a.style
    }
    const s = new Ha(r);
    return Ig[e] = s,
    s
}
class fd {
    constructor(t) {
        typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t,
        this.uint32View = new Uint32Array(this.rawBinaryData),
        this.float32View = new Float32Array(this.rawBinaryData),
        this.size = this.rawBinaryData.byteLength
    }
    get int8View() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
        this._int8View
    }
    get uint8View() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
        this._uint8View
    }
    get int16View() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
        this._int16View
    }
    get int32View() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
        this._int32View
    }
    get float64View() {
        return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)),
        this._float64Array
    }
    get bigUint64View() {
        return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)),
        this._bigUint64Array
    }
    view(t) {
        return this[`${t}View`]
    }
    destroy() {
        this.rawBinaryData = null,
        this._int8View = null,
        this._uint8View = null,
        this._int16View = null,
        this.uint16View = null,
        this._int32View = null,
        this.uint32View = null,
        this.float32View = null
    }
    static sizeOf(t) {
        switch (t) {
        case "int8":
        case "uint8":
            return 1;
        case "int16":
        case "uint16":
            return 2;
        case "int32":
        case "uint32":
        case "float32":
            return 4;
        default:
            throw new Error(`${t} isn't a valid view type`)
        }
    }
}
function dd(n, t) {
    const e = n.byteLength / 8 | 0
      , r = new Float64Array(n,0,e);
    new Float64Array(t,0,e).set(r);
    const s = n.byteLength - e * 8;
    if (s > 0) {
        const o = new Uint8Array(n,e * 8,s);
        new Uint8Array(t,e * 8,s).set(o)
    }
}
const W2 = {
    normal: "normal-npm",
    add: "add-npm",
    screen: "screen-npm"
};
var X2 = (n => (n[n.DISABLED = 0] = "DISABLED",
n[n.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD",
n[n.MASK_ACTIVE = 2] = "MASK_ACTIVE",
n[n.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE",
n[n.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE",
n[n.NONE = 5] = "NONE",
n))(X2 || {});
function pd(n, t) {
    return t.alphaMode === "no-premultiply-alpha" && W2[n] || n
}
class H2 {
    constructor() {
        this.ids = Object.create(null),
        this.textures = [],
        this.count = 0
    }
    clear() {
        for (let t = 0; t < this.count; t++) {
            const e = this.textures[t];
            this.textures[t] = null,
            this.ids[e.uid] = null
        }
        this.count = 0
    }
}
class Y2 {
    constructor() {
        this.renderPipeId = "batch",
        this.action = "startBatch",
        this.start = 0,
        this.size = 0,
        this.textures = new H2,
        this.blendMode = "normal",
        this.canBundle = !0
    }
    destroy() {
        this.textures = null,
        this.gpuBindGroup = null,
        this.bindGroup = null,
        this.batcher = null
    }
}
const kg = [];
let Lc = 0;
function md() {
    return Lc > 0 ? kg[--Lc] : new Y2
}
function gd(n) {
    kg[Lc++] = n
}
let to = 0;
const zg = class Ya {
    constructor(t={}) {
        this.uid = me("batcher"),
        this.dirty = !0,
        this.batchIndex = 0,
        this.batches = [],
        this._elements = [],
        Ya.defaultOptions.maxTextures = Ya.defaultOptions.maxTextures ?? Eg(),
        t = {
            ...Ya.defaultOptions,
            ...t
        };
        const {maxTextures: e, attributesInitialSize: r, indicesInitialSize: i} = t;
        this.attributeBuffer = new fd(r * 4),
        this.indexBuffer = new Uint16Array(i),
        this.maxTextures = e
    }
    begin() {
        this.elementSize = 0,
        this.elementStart = 0,
        this.indexSize = 0,
        this.attributeSize = 0;
        for (let t = 0; t < this.batchIndex; t++)
            gd(this.batches[t]);
        this.batchIndex = 0,
        this._batchIndexStart = 0,
        this._batchIndexSize = 0,
        this.dirty = !0
    }
    add(t) {
        this._elements[this.elementSize++] = t,
        t._indexStart = this.indexSize,
        t._attributeStart = this.attributeSize,
        t._batcher = this,
        this.indexSize += t.indexSize,
        this.attributeSize += t.attributeSize * this.vertexSize
    }
    checkAndUpdateTexture(t, e) {
        const r = t._batch.textures.ids[e._source.uid];
        return !r && r !== 0 ? !1 : (t._textureId = r,
        t.texture = e,
        !0)
    }
    updateElement(t) {
        this.dirty = !0;
        const e = this.attributeBuffer;
        t.packAsQuad ? this.packQuadAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId) : this.packAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId)
    }
    break(t) {
        const e = this._elements;
        if (!e[this.elementStart])
            return;
        let r = md()
          , i = r.textures;
        i.clear();
        const s = e[this.elementStart];
        let o = pd(s.blendMode, s.texture._source);
        this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4),
        this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
        const a = this.attributeBuffer.float32View
          , l = this.attributeBuffer.uint32View
          , u = this.indexBuffer;
        let c = this._batchIndexSize
          , f = this._batchIndexStart
          , d = "startBatch";
        const h = this.maxTextures;
        for (let m = this.elementStart; m < this.elementSize; ++m) {
            const p = e[m];
            e[m] = null;
            const x = p.texture._source
              , v = pd(p.blendMode, x)
              , _ = o !== v;
            if (x._batchTick === to && !_) {
                p._textureId = x._textureBindLocation,
                c += p.indexSize,
                p.packAsQuad ? (this.packQuadAttributes(p, a, l, p._attributeStart, p._textureId),
                this.packQuadIndex(u, p._indexStart, p._attributeStart / this.vertexSize)) : (this.packAttributes(p, a, l, p._attributeStart, p._textureId),
                this.packIndex(p, u, p._indexStart, p._attributeStart / this.vertexSize)),
                p._batch = r;
                continue
            }
            x._batchTick = to,
            (i.count >= h || _) && (this._finishBatch(r, f, c - f, i, o, t, d),
            d = "renderBatch",
            f = c,
            o = v,
            r = md(),
            i = r.textures,
            i.clear(),
            ++to),
            p._textureId = x._textureBindLocation = i.count,
            i.ids[x.uid] = i.count,
            i.textures[i.count++] = x,
            p._batch = r,
            c += p.indexSize,
            p.packAsQuad ? (this.packQuadAttributes(p, a, l, p._attributeStart, p._textureId),
            this.packQuadIndex(u, p._indexStart, p._attributeStart / this.vertexSize)) : (this.packAttributes(p, a, l, p._attributeStart, p._textureId),
            this.packIndex(p, u, p._indexStart, p._attributeStart / this.vertexSize))
        }
        i.count > 0 && (this._finishBatch(r, f, c - f, i, o, t, d),
        f = c,
        ++to),
        this.elementStart = this.elementSize,
        this._batchIndexStart = f,
        this._batchIndexSize = c
    }
    _finishBatch(t, e, r, i, s, o, a) {
        t.gpuBindGroup = null,
        t.bindGroup = null,
        t.action = a,
        t.batcher = this,
        t.textures = i,
        t.blendMode = s,
        t.start = e,
        t.size = r,
        ++to,
        this.batches[this.batchIndex++] = t,
        o.add(t)
    }
    finish(t) {
        this.break(t)
    }
    ensureAttributeBuffer(t) {
        t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4)
    }
    ensureIndexBuffer(t) {
        t <= this.indexBuffer.length || this._resizeIndexBuffer(t)
    }
    _resizeAttributeBuffer(t) {
        const e = Math.max(t, this.attributeBuffer.size * 2)
          , r = new fd(e);
        dd(this.attributeBuffer.rawBinaryData, r.rawBinaryData),
        this.attributeBuffer = r
    }
    _resizeIndexBuffer(t) {
        const e = this.indexBuffer;
        let r = Math.max(t, e.length * 1.5);
        r += r % 2;
        const i = r > 65535 ? new Uint32Array(r) : new Uint16Array(r);
        if (i.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT)
            for (let s = 0; s < e.length; s++)
                i[s] = e[s];
        else
            dd(e.buffer, i.buffer);
        this.indexBuffer = i
    }
    packQuadIndex(t, e, r) {
        t[e] = r + 0,
        t[e + 1] = r + 1,
        t[e + 2] = r + 2,
        t[e + 3] = r + 0,
        t[e + 4] = r + 2,
        t[e + 5] = r + 3
    }
    packIndex(t, e, r, i) {
        const s = t.indices
          , o = t.indexSize
          , a = t.indexOffset
          , l = t.attributeOffset;
        for (let u = 0; u < o; u++)
            e[r++] = i + s[u + a] - l
    }
    destroy() {
        for (let t = 0; t < this.batches.length; t++)
            gd(this.batches[t]);
        this.batches = null;
        for (let t = 0; t < this._elements.length; t++)
            this._elements[t]._batch = null;
        this._elements = null,
        this.indexBuffer = null,
        this.attributeBuffer.destroy(),
        this.attributeBuffer = null
    }
}
;
zg.defaultOptions = {
    maxTextures: null,
    attributesInitialSize: 4,
    indicesInitialSize: 6
};
let j2 = zg;
var ar = (n => (n[n.MAP_READ = 1] = "MAP_READ",
n[n.MAP_WRITE = 2] = "MAP_WRITE",
n[n.COPY_SRC = 4] = "COPY_SRC",
n[n.COPY_DST = 8] = "COPY_DST",
n[n.INDEX = 16] = "INDEX",
n[n.VERTEX = 32] = "VERTEX",
n[n.UNIFORM = 64] = "UNIFORM",
n[n.STORAGE = 128] = "STORAGE",
n[n.INDIRECT = 256] = "INDIRECT",
n[n.QUERY_RESOLVE = 512] = "QUERY_RESOLVE",
n[n.STATIC = 1024] = "STATIC",
n))(ar || {});
class Qo extends Jr {
    constructor(t) {
        let {data: e, size: r} = t;
        const {usage: i, label: s, shrinkToFit: o} = t;
        super(),
        this.uid = me("buffer"),
        this._resourceType = "buffer",
        this._resourceId = me("resource"),
        this._touched = 0,
        this._updateID = 1,
        this.shrinkToFit = !0,
        this.destroyed = !1,
        e instanceof Array && (e = new Float32Array(e)),
        this._data = e,
        r = r ?? e?.byteLength;
        const a = !!e;
        this.descriptor = {
            size: r,
            usage: i,
            mappedAtCreation: a,
            label: s
        },
        this.shrinkToFit = o ?? !0
    }
    get data() {
        return this._data
    }
    set data(t) {
        this.setDataWithSize(t, t.length, !0)
    }
    get static() {
        return !!(this.descriptor.usage & ar.STATIC)
    }
    set static(t) {
        t ? this.descriptor.usage |= ar.STATIC : this.descriptor.usage &= ~ar.STATIC
    }
    setDataWithSize(t, e, r) {
        if (this._updateID++,
        this._updateSize = e * t.BYTES_PER_ELEMENT,
        this._data === t) {
            r && this.emit("update", this);
            return
        }
        const i = this._data;
        if (this._data = t,
        i.length !== t.length) {
            !this.shrinkToFit && t.byteLength < i.byteLength ? r && this.emit("update", this) : (this.descriptor.size = t.byteLength,
            this._resourceId = me("resource"),
            this.emit("change", this));
            return
        }
        r && this.emit("update", this)
    }
    update(t) {
        this._updateSize = t ?? this._updateSize,
        this._updateID++,
        this.emit("update", this)
    }
    destroy() {
        this.destroyed = !0,
        this.emit("destroy", this),
        this.emit("change", this),
        this._data = null,
        this.descriptor = null,
        this.removeAllListeners()
    }
}
function Rg(n, t) {
    if (!(n instanceof Qo)) {
        let e = t ? ar.INDEX : ar.VERTEX;
        n instanceof Array && (t ? (n = new Uint32Array(n),
        e = ar.INDEX | ar.COPY_DST) : (n = new Float32Array(n),
        e = ar.VERTEX | ar.COPY_DST)),
        n = new Qo({
            data: n,
            label: t ? "index-mesh-buffer" : "vertex-mesh-buffer",
            usage: e
        })
    }
    return n
}
function q2(n, t, e) {
    const r = n.getAttribute(t);
    if (!r)
        return e.minX = 0,
        e.minY = 0,
        e.maxX = 0,
        e.maxY = 0,
        e;
    const i = r.buffer.data;
    let s = 1 / 0
      , o = 1 / 0
      , a = -1 / 0
      , l = -1 / 0;
    const u = i.BYTES_PER_ELEMENT
      , c = (r.offset || 0) / u
      , f = (r.stride || 2 * 4) / u;
    for (let d = c; d < i.length; d += f) {
        const h = i[d]
          , m = i[d + 1];
        h > a && (a = h),
        m > l && (l = m),
        h < s && (s = h),
        m < o && (o = m)
    }
    return e.minX = s,
    e.minY = o,
    e.maxX = a,
    e.maxY = l,
    e
}
function K2(n) {
    return (n instanceof Qo || Array.isArray(n) || n.BYTES_PER_ELEMENT) && (n = {
        buffer: n
    }),
    n.buffer = Rg(n.buffer, !1),
    n
}
class Z2 extends Jr {
    constructor(t={}) {
        super(),
        this.uid = me("geometry"),
        this._layoutKey = 0,
        this.instanceCount = 1,
        this._bounds = new _n,
        this._boundsDirty = !0;
        const {attributes: e, indexBuffer: r, topology: i} = t;
        if (this.buffers = [],
        this.attributes = {},
        e)
            for (const s in e)
                this.addAttribute(s, e[s]);
        this.instanceCount = t.instanceCount || 1,
        r && this.addIndex(r),
        this.topology = i || "triangle-list"
    }
    onBufferUpdate() {
        this._boundsDirty = !0,
        this.emit("update", this)
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    getIndex() {
        return this.indexBuffer
    }
    getBuffer(t) {
        return this.getAttribute(t).buffer
    }
    getSize() {
        for (const t in this.attributes) {
            const e = this.attributes[t];
            return e.buffer.data.length / (e.stride / 4 || e.size)
        }
        return 0
    }
    addAttribute(t, e) {
        const r = K2(e);
        this.buffers.indexOf(r.buffer) === -1 && (this.buffers.push(r.buffer),
        r.buffer.on("update", this.onBufferUpdate, this),
        r.buffer.on("change", this.onBufferUpdate, this)),
        this.attributes[t] = r
    }
    addIndex(t) {
        this.indexBuffer = Rg(t, !0),
        this.buffers.push(this.indexBuffer)
    }
    get bounds() {
        return this._boundsDirty ? (this._boundsDirty = !1,
        q2(this, "aPosition", this._bounds)) : this._bounds
    }
    destroy(t=!1) {
        this.emit("destroy", this),
        this.removeAllListeners(),
        t && this.buffers.forEach(e => e.destroy()),
        this.attributes = null,
        this.buffers = null,
        this.indexBuffer = null,
        this._bounds = null
    }
}
const Q2 = new Float32Array(1)
  , J2 = new Uint32Array(1);
class t1 extends Z2 {
    constructor() {
        const e = new Qo({
            data: Q2,
            label: "attribute-batch-buffer",
            usage: ar.VERTEX | ar.COPY_DST,
            shrinkToFit: !1
        })
          , r = new Qo({
            data: J2,
            label: "index-batch-buffer",
            usage: ar.INDEX | ar.COPY_DST,
            shrinkToFit: !1
        })
          , i = 6 * 4;
        super({
            attributes: {
                aPosition: {
                    buffer: e,
                    format: "float32x2",
                    stride: i,
                    offset: 0
                },
                aUV: {
                    buffer: e,
                    format: "float32x2",
                    stride: i,
                    offset: 2 * 4
                },
                aColor: {
                    buffer: e,
                    format: "unorm8x4",
                    stride: i,
                    offset: 4 * 4
                },
                aTextureIdAndRound: {
                    buffer: e,
                    format: "uint16x2",
                    stride: i,
                    offset: 5 * 4
                }
            },
            indexBuffer: r
        })
    }
}
function xd(n, t, e) {
    if (n)
        for (const r in n) {
            const i = r.toLocaleLowerCase()
              , s = t[i];
            if (s) {
                let o = n[r];
                r === "header" && (o = o.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")),
                e && s.push(`//----${e}----//`),
                s.push(o)
            } else
                ge(`${r} placement hook does not exist in shader`)
        }
}
const e1 = /\{\{(.*?)\}\}/g;
function vd(n) {
    const t = {};
    return (n.match(e1)?.map(r => r.replace(/[{()}]/g, "")) ?? []).forEach(r => {
        t[r] = []
    }
    ),
    t
}
function _d(n, t) {
    let e;
    const r = /@in\s+([^;]+);/g;
    for (; (e = r.exec(n)) !== null; )
        t.push(e[1])
}
function yd(n, t, e=!1) {
    const r = [];
    _d(t, r),
    n.forEach(a => {
        a.header && _d(a.header, r)
    }
    );
    const i = r;
    e && i.sort();
    const s = i.map( (a, l) => `       @location(${l}) ${a},`).join(`
`);
    let o = t.replace(/@in\s+[^;]+;\s*/g, "");
    return o = o.replace("{{in}}", `
${s}
`),
    o
}
function bd(n, t) {
    let e;
    const r = /@out\s+([^;]+);/g;
    for (; (e = r.exec(n)) !== null; )
        t.push(e[1])
}
function r1(n) {
    const e = /\b(\w+)\s*:/g.exec(n);
    return e ? e[1] : ""
}
function n1(n) {
    const t = /@.*?\s+/g;
    return n.replace(t, "")
}
function i1(n, t) {
    const e = [];
    bd(t, e),
    n.forEach(l => {
        l.header && bd(l.header, e)
    }
    );
    let r = 0;
    const i = e.sort().map(l => l.indexOf("builtin") > -1 ? l : `@location(${r++}) ${l}`).join(`,
`)
      , s = e.sort().map(l => `       var ${n1(l)};`).join(`
`)
      , o = `return VSOutput(
                ${e.sort().map(l => ` ${r1(l)}`).join(`,
`)});`;
    let a = t.replace(/@out\s+[^;]+;\s*/g, "");
    return a = a.replace("{{struct}}", `
${i}
`),
    a = a.replace("{{start}}", `
${s}
`),
    a = a.replace("{{return}}", `
${o}
`),
    a
}
function Sd(n, t) {
    let e = n;
    for (const r in t) {
        const i = t[r];
        i.join(`
`).length ? e = e.replace(`{{${r}}}`, `//-----${r} START-----//
${i.join(`
`)}
//----${r} FINISH----//`) : e = e.replace(`{{${r}}}`, "")
    }
    return e
}
const qn = Object.create(null)
  , Ou = new Map;
let s1 = 0;
function o1({template: n, bits: t}) {
    const e = Lg(n, t);
    if (qn[e])
        return qn[e];
    const {vertex: r, fragment: i} = l1(n, t);
    return qn[e] = Dg(r, i, t),
    qn[e]
}
function a1({template: n, bits: t}) {
    const e = Lg(n, t);
    return qn[e] || (qn[e] = Dg(n.vertex, n.fragment, t)),
    qn[e]
}
function l1(n, t) {
    const e = t.map(o => o.vertex).filter(o => !!o)
      , r = t.map(o => o.fragment).filter(o => !!o);
    let i = yd(e, n.vertex, !0);
    i = i1(e, i);
    const s = yd(r, n.fragment, !0);
    return {
        vertex: i,
        fragment: s
    }
}
function Lg(n, t) {
    return t.map(e => (Ou.has(e) || Ou.set(e, s1++),
    Ou.get(e))).sort( (e, r) => e - r).join("-") + n.vertex + n.fragment
}
function Dg(n, t, e) {
    const r = vd(n)
      , i = vd(t);
    return e.forEach(s => {
        xd(s.vertex, r, s.name),
        xd(s.fragment, i, s.name)
    }
    ),
    {
        vertex: Sd(n, r),
        fragment: Sd(t, i)
    }
}
const u1 = `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`
  , c1 = `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`
  , h1 = `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`
  , f1 = `
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`
  , d1 = {
    name: "global-uniforms-bit",
    vertex: {
        header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
    }
}
  , p1 = {
    name: "global-uniforms-bit",
    vertex: {
        header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
    }
};
function m1({bits: n, name: t}) {
    const e = o1({
        template: {
            fragment: c1,
            vertex: u1
        },
        bits: [d1, ...n]
    });
    return dt.from({
        name: t,
        vertex: {
            source: e.vertex,
            entryPoint: "main"
        },
        fragment: {
            source: e.fragment,
            entryPoint: "main"
        }
    })
}
function g1({bits: n, name: t}) {
    return new xt({
        name: t,
        ...a1({
            template: {
                vertex: h1,
                fragment: f1
            },
            bits: [p1, ...n]
        })
    })
}
const x1 = {
    name: "color-bit",
    vertex: {
        header: `
            @in aColor: vec4<f32>;
        `,
        main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
    }
}
  , v1 = {
    name: "color-bit",
    vertex: {
        header: `
            in vec4 aColor;
        `,
        main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
    }
}
  , Fu = {};
function _1(n) {
    const t = [];
    if (n === 1)
        t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),
        t.push("@group(1) @binding(1) var textureSampler1: sampler;");
    else {
        let e = 0;
        for (let r = 0; r < n; r++)
            t.push(`@group(1) @binding(${e++}) var textureSource${r + 1}: texture_2d<f32>;`),
            t.push(`@group(1) @binding(${e++}) var textureSampler${r + 1}: sampler;`)
    }
    return t.join(`
`)
}
function y1(n) {
    const t = [];
    if (n === 1)
        t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
    else {
        t.push("switch vTextureId {");
        for (let e = 0; e < n; e++)
            e === n - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`),
            t.push(`      outColor = textureSampleGrad(textureSource${e + 1}, textureSampler${e + 1}, vUV, uvDx, uvDy);`),
            t.push("      break;}");
        t.push("}")
    }
    return t.join(`
`)
}
function b1(n) {
    return Fu[n] || (Fu[n] = {
        name: "texture-batch-bit",
        vertex: {
            header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
            main: `
                vTextureId = aTextureIdAndRound.y;
            `,
            end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
        },
        fragment: {
            header: `
                @in @interpolate(flat) vTextureId: u32;

                ${_1(n)}
            `,
            main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${y1(n)}
            `
        }
    }),
    Fu[n]
}
const Eu = {};
function S1(n) {
    const t = [];
    for (let e = 0; e < n; e++)
        e > 0 && t.push("else"),
        e < n - 1 && t.push(`if(vTextureId < ${e}.5)`),
        t.push("{"),
        t.push(`	outColor = texture(uTextures[${e}], vUV);`),
        t.push("}");
    return t.join(`
`)
}
function w1(n) {
    return Eu[n] || (Eu[n] = {
        name: "texture-batch-bit",
        vertex: {
            header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,
            main: `
                vTextureId = aTextureIdAndRound.y;
            `,
            end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
        },
        fragment: {
            header: `
                in float vTextureId;

                uniform sampler2D uTextures[${n}];

            `,
            main: `

                ${S1(n)}
            `
        }
    }),
    Eu[n]
}
const C1 = {
    name: "round-pixels-bit",
    vertex: {
        header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
    }
}
  , T1 = {
    name: "round-pixels-bit",
    vertex: {
        header: `   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
    }
}
  , wd = {};
function A1(n) {
    let t = wd[n];
    if (t)
        return t;
    const e = new Int32Array(n);
    for (let r = 0; r < n; r++)
        e[r] = r;
    return t = wd[n] = new Wh({
        uTextures: {
            value: e,
            type: "i32",
            size: n
        }
    },{
        isStatic: !0
    }),
    t
}
class P1 extends Nl {
    constructor(t) {
        const e = g1({
            name: "batch",
            bits: [v1, w1(t), T1]
        })
          , r = m1({
            name: "batch",
            bits: [x1, b1(t), C1]
        });
        super({
            glProgram: e,
            gpuProgram: r,
            resources: {
                batchSamplers: A1(t)
            }
        })
    }
}
let Cd = null;
const Bg = class Ug extends j2 {
    constructor() {
        super(...arguments),
        this.geometry = new t1,
        this.shader = Cd || (Cd = new P1(this.maxTextures)),
        this.name = Ug.extension.name,
        this.vertexSize = 6
    }
    packAttributes(t, e, r, i, s) {
        const o = s << 16 | t.roundPixels & 65535
          , a = t.transform
          , l = a.a
          , u = a.b
          , c = a.c
          , f = a.d
          , d = a.tx
          , h = a.ty
          , {positions: m, uvs: p} = t
          , g = t.color
          , x = t.attributeOffset
          , v = x + t.attributeSize;
        for (let _ = x; _ < v; _++) {
            const y = _ * 2
              , S = m[y]
              , O = m[y + 1];
            e[i++] = l * S + c * O + d,
            e[i++] = f * O + u * S + h,
            e[i++] = p[y],
            e[i++] = p[y + 1],
            r[i++] = g,
            r[i++] = o
        }
    }
    packQuadAttributes(t, e, r, i, s) {
        const o = t.texture
          , a = t.transform
          , l = a.a
          , u = a.b
          , c = a.c
          , f = a.d
          , d = a.tx
          , h = a.ty
          , m = t.bounds
          , p = m.maxX
          , g = m.minX
          , x = m.maxY
          , v = m.minY
          , _ = o.uvs
          , y = t.color
          , S = s << 16 | t.roundPixels & 65535;
        e[i + 0] = l * g + c * v + d,
        e[i + 1] = f * v + u * g + h,
        e[i + 2] = _.x0,
        e[i + 3] = _.y0,
        r[i + 4] = y,
        r[i + 5] = S,
        e[i + 6] = l * p + c * v + d,
        e[i + 7] = f * v + u * p + h,
        e[i + 8] = _.x1,
        e[i + 9] = _.y1,
        r[i + 10] = y,
        r[i + 11] = S,
        e[i + 12] = l * p + c * x + d,
        e[i + 13] = f * x + u * p + h,
        e[i + 14] = _.x2,
        e[i + 15] = _.y2,
        r[i + 16] = y,
        r[i + 17] = S,
        e[i + 18] = l * g + c * x + d,
        e[i + 19] = f * x + u * g + h,
        e[i + 20] = _.x3,
        e[i + 21] = _.y3,
        r[i + 22] = y,
        r[i + 23] = S
    }
}
;
Bg.extension = {
    type: [Q.Batcher],
    name: "default"
};
let M1 = Bg;
function O1(n, t, e, r, i, s, o, a=null) {
    let l = 0;
    e *= t,
    i *= s;
    const u = a.a
      , c = a.b
      , f = a.c
      , d = a.d
      , h = a.tx
      , m = a.ty;
    for (; l < o; ) {
        const p = n[e]
          , g = n[e + 1];
        r[i] = u * p + f * g + h,
        r[i + 1] = c * p + d * g + m,
        i += s,
        e += t,
        l++
    }
}
function F1(n, t, e, r) {
    let i = 0;
    for (t *= e; i < r; )
        n[t] = 0,
        n[t + 1] = 0,
        t += e,
        i++
}
function $g(n, t, e, r, i) {
    const s = t.a
      , o = t.b
      , a = t.c
      , l = t.d
      , u = t.tx
      , c = t.ty;
    e = e || 0,
    r = r || 2,
    i = i || n.length / r - e;
    let f = e * r;
    for (let d = 0; d < i; d++) {
        const h = n[f]
          , m = n[f + 1];
        n[f] = s * h + a * m + u,
        n[f + 1] = o * h + l * m + c,
        f += r
    }
}
function E1(n, t) {
    if (n === 16777215 || !t)
        return t;
    if (t === 16777215 || !n)
        return n;
    const e = n >> 16 & 255
      , r = n >> 8 & 255
      , i = n & 255
      , s = t >> 16 & 255
      , o = t >> 8 & 255
      , a = t & 255
      , l = e * s / 255
      , u = r * o / 255
      , c = i * a / 255;
    return (l << 16) + (u << 8) + c
}
const I1 = new Ot;
class Ng {
    constructor() {
        this.packAsQuad = !1,
        this.batcherName = "default",
        this.applyTransform = !0,
        this.roundPixels = 0,
        this._batcher = null,
        this._batch = null
    }
    get uvs() {
        return this.geometryData.uvs
    }
    get positions() {
        return this.geometryData.vertices
    }
    get indices() {
        return this.geometryData.indices
    }
    get blendMode() {
        return this.applyTransform ? this.renderable.groupBlendMode : "normal"
    }
    get color() {
        const t = this.baseColor
          , e = t >> 16 | t & 65280 | (t & 255) << 16
          , r = this.renderable;
        return r ? E1(e, r.groupColor) + (this.alpha * r.groupAlpha * 255 << 24) : e + (this.alpha * 255 << 24)
    }
    get transform() {
        return this.renderable?.groupTransform || I1
    }
    copyTo(t) {
        t.indexOffset = this.indexOffset,
        t.indexSize = this.indexSize,
        t.attributeOffset = this.attributeOffset,
        t.attributeSize = this.attributeSize,
        t.baseColor = this.baseColor,
        t.alpha = this.alpha,
        t.texture = this.texture,
        t.geometryData = this.geometryData
    }
    reset() {
        this.applyTransform = !0,
        this.renderable = null
    }
}
const Jo = {
    extension: {
        type: Q.ShapeBuilder,
        name: "circle"
    },
    build(n, t) {
        let e, r, i, s, o, a;
        if (n.type === "circle") {
            const y = n;
            e = y.x,
            r = y.y,
            o = a = y.radius,
            i = s = 0
        } else if (n.type === "ellipse") {
            const y = n;
            e = y.x,
            r = y.y,
            o = y.halfWidth,
            a = y.halfHeight,
            i = s = 0
        } else {
            const y = n
              , S = y.width / 2
              , O = y.height / 2;
            e = y.x + S,
            r = y.y + O,
            o = a = Math.max(0, Math.min(y.radius, Math.min(S, O))),
            i = S - o,
            s = O - a
        }
        if (!(o >= 0 && a >= 0 && i >= 0 && s >= 0))
            return t;
        const l = Math.ceil(2.3 * Math.sqrt(o + a))
          , u = l * 8 + (i ? 4 : 0) + (s ? 4 : 0);
        if (u === 0)
            return t;
        if (l === 0)
            return t[0] = t[6] = e + i,
            t[1] = t[3] = r + s,
            t[2] = t[4] = e - i,
            t[5] = t[7] = r - s,
            t;
        let c = 0
          , f = l * 4 + (i ? 2 : 0) + 2
          , d = f
          , h = u
          , m = i + o
          , p = s
          , g = e + m
          , x = e - m
          , v = r + p;
        if (t[c++] = g,
        t[c++] = v,
        t[--f] = v,
        t[--f] = x,
        s) {
            const y = r - p;
            t[d++] = x,
            t[d++] = y,
            t[--h] = y,
            t[--h] = g
        }
        for (let y = 1; y < l; y++) {
            const S = Math.PI / 2 * (y / l)
              , O = i + Math.cos(S) * o
              , w = s + Math.sin(S) * a
              , P = e + O
              , T = e - O
              , M = r + w
              , B = r - w;
            t[c++] = P,
            t[c++] = M,
            t[--f] = M,
            t[--f] = T,
            t[d++] = T,
            t[d++] = B,
            t[--h] = B,
            t[--h] = P
        }
        m = i,
        p = s + a,
        g = e + m,
        x = e - m,
        v = r + p;
        const _ = r - p;
        return t[c++] = g,
        t[c++] = v,
        t[--h] = _,
        t[--h] = g,
        i && (t[c++] = x,
        t[c++] = v,
        t[--h] = _,
        t[--h] = x),
        t
    },
    triangulate(n, t, e, r, i, s) {
        if (n.length === 0)
            return;
        let o = 0
          , a = 0;
        for (let c = 0; c < n.length; c += 2)
            o += n[c],
            a += n[c + 1];
        o /= n.length / 2,
        a /= n.length / 2;
        let l = r;
        t[l * e] = o,
        t[l * e + 1] = a;
        const u = l++;
        for (let c = 0; c < n.length; c += 2)
            t[l * e] = n[c],
            t[l * e + 1] = n[c + 1],
            c > 0 && (i[s++] = l,
            i[s++] = u,
            i[s++] = l - 1),
            l++;
        i[s++] = u + 1,
        i[s++] = u,
        i[s++] = l - 1
    }
}
  , k1 = {
    ...Jo,
    extension: {
        ...Jo.extension,
        name: "ellipse"
    }
}
  , z1 = {
    ...Jo,
    extension: {
        ...Jo.extension,
        name: "roundedRectangle"
    }
}
  , R1 = 1e-4
  , Td = 1e-4;
function L1(n) {
    const t = n.length;
    if (t < 6)
        return 1;
    let e = 0;
    for (let r = 0, i = n[t - 2], s = n[t - 1]; r < t; r += 2) {
        const o = n[r]
          , a = n[r + 1];
        e += (o - i) * (a + s),
        i = o,
        s = a
    }
    return e < 0 ? -1 : 1
}
function Ad(n, t, e, r, i, s, o, a) {
    const l = n - e * i
      , u = t - r * i
      , c = n + e * s
      , f = t + r * s;
    let d, h;
    o ? (d = r,
    h = -e) : (d = -r,
    h = e);
    const m = l + d
      , p = u + h
      , g = c + d
      , x = f + h;
    return a.push(m, p),
    a.push(g, x),
    2
}
function hi(n, t, e, r, i, s, o, a) {
    const l = e - n
      , u = r - t;
    let c = Math.atan2(l, u)
      , f = Math.atan2(i - n, s - t);
    a && c < f ? c += Math.PI * 2 : !a && c > f && (f += Math.PI * 2);
    let d = c;
    const h = f - c
      , m = Math.abs(h)
      , p = Math.sqrt(l * l + u * u)
      , g = (15 * m * Math.sqrt(p) / Math.PI >> 0) + 1
      , x = h / g;
    if (d += x,
    a) {
        o.push(n, t),
        o.push(e, r);
        for (let v = 1, _ = d; v < g; v++,
        _ += x)
            o.push(n, t),
            o.push(n + Math.sin(_) * p, t + Math.cos(_) * p);
        o.push(n, t),
        o.push(i, s)
    } else {
        o.push(e, r),
        o.push(n, t);
        for (let v = 1, _ = d; v < g; v++,
        _ += x)
            o.push(n + Math.sin(_) * p, t + Math.cos(_) * p),
            o.push(n, t);
        o.push(i, s),
        o.push(n, t)
    }
    return g * 2
}
function D1(n, t, e, r, i, s, o, a, l) {
    const u = R1;
    if (n.length === 0)
        return;
    const c = t;
    let f = c.alignment;
    if (t.alignment !== .5) {
        let Y = L1(n);
        f = (f - .5) * Y + .5
    }
    const d = new Be(n[0],n[1])
      , h = new Be(n[n.length - 2],n[n.length - 1])
      , m = r
      , p = Math.abs(d.x - h.x) < u && Math.abs(d.y - h.y) < u;
    if (m) {
        n = n.slice(),
        p && (n.pop(),
        n.pop(),
        h.set(n[n.length - 2], n[n.length - 1]));
        const Y = (d.x + h.x) * .5
          , ht = (h.y + d.y) * .5;
        n.unshift(Y, ht),
        n.push(Y, ht)
    }
    const g = i
      , x = n.length / 2;
    let v = n.length;
    const _ = g.length / 2
      , y = c.width / 2
      , S = y * y
      , O = c.miterLimit * c.miterLimit;
    let w = n[0]
      , P = n[1]
      , T = n[2]
      , M = n[3]
      , B = 0
      , U = 0
      , z = -(P - M)
      , L = w - T
      , V = 0
      , G = 0
      , k = Math.sqrt(z * z + L * L);
    z /= k,
    L /= k,
    z *= y,
    L *= y;
    const X = f
      , $ = (1 - X) * 2
      , b = X * 2;
    m || (c.cap === "round" ? v += hi(w - z * ($ - b) * .5, P - L * ($ - b) * .5, w - z * $, P - L * $, w + z * b, P + L * b, g, !0) + 2 : c.cap === "square" && (v += Ad(w, P, z, L, $, b, !0, g))),
    g.push(w - z * $, P - L * $),
    g.push(w + z * b, P + L * b);
    for (let Y = 1; Y < x - 1; ++Y) {
        w = n[(Y - 1) * 2],
        P = n[(Y - 1) * 2 + 1],
        T = n[Y * 2],
        M = n[Y * 2 + 1],
        B = n[(Y + 1) * 2],
        U = n[(Y + 1) * 2 + 1],
        z = -(P - M),
        L = w - T,
        k = Math.sqrt(z * z + L * L),
        z /= k,
        L /= k,
        z *= y,
        L *= y,
        V = -(M - U),
        G = T - B,
        k = Math.sqrt(V * V + G * G),
        V /= k,
        G /= k,
        V *= y,
        G *= y;
        const ht = T - w
          , nt = P - M
          , Rt = T - B
          , wt = U - M
          , It = ht * Rt + nt * wt
          , ft = nt * Rt - wt * ht
          , Nt = ft < 0;
        if (Math.abs(ft) < .001 * Math.abs(It)) {
            g.push(T - z * $, M - L * $),
            g.push(T + z * b, M + L * b),
            It >= 0 && (c.join === "round" ? v += hi(T, M, T - z * $, M - L * $, T - V * $, M - G * $, g, !1) + 4 : v += 2,
            g.push(T - V * b, M - G * b),
            g.push(T + V * $, M + G * $));
            continue
        }
        const he = (-z + w) * (-L + M) - (-z + T) * (-L + P)
          , Dt = (-V + B) * (-G + M) - (-V + T) * (-G + U)
          , Ht = (ht * Dt - Rt * he) / ft
          , ot = (wt * he - nt * Dt) / ft
          , lt = (Ht - T) * (Ht - T) + (ot - M) * (ot - M)
          , rt = T + (Ht - T) * $
          , Wt = M + (ot - M) * $
          , F = T - (Ht - T) * b
          , Tt = M - (ot - M) * b
          , Ne = Math.min(ht * ht + nt * nt, Rt * Rt + wt * wt)
          , er = Nt ? $ : b
          , Gt = Ne + er * er * S;
        lt <= Gt ? c.join === "bevel" || lt / S > O ? (Nt ? (g.push(rt, Wt),
        g.push(T + z * b, M + L * b),
        g.push(rt, Wt),
        g.push(T + V * b, M + G * b)) : (g.push(T - z * $, M - L * $),
        g.push(F, Tt),
        g.push(T - V * $, M - G * $),
        g.push(F, Tt)),
        v += 2) : c.join === "round" ? Nt ? (g.push(rt, Wt),
        g.push(T + z * b, M + L * b),
        v += hi(T, M, T + z * b, M + L * b, T + V * b, M + G * b, g, !0) + 4,
        g.push(rt, Wt),
        g.push(T + V * b, M + G * b)) : (g.push(T - z * $, M - L * $),
        g.push(F, Tt),
        v += hi(T, M, T - z * $, M - L * $, T - V * $, M - G * $, g, !1) + 4,
        g.push(T - V * $, M - G * $),
        g.push(F, Tt)) : (g.push(rt, Wt),
        g.push(F, Tt)) : (g.push(T - z * $, M - L * $),
        g.push(T + z * b, M + L * b),
        c.join === "round" ? Nt ? v += hi(T, M, T + z * b, M + L * b, T + V * b, M + G * b, g, !0) + 2 : v += hi(T, M, T - z * $, M - L * $, T - V * $, M - G * $, g, !1) + 2 : c.join === "miter" && lt / S <= O && (Nt ? (g.push(F, Tt),
        g.push(F, Tt)) : (g.push(rt, Wt),
        g.push(rt, Wt)),
        v += 2),
        g.push(T - V * $, M - G * $),
        g.push(T + V * b, M + G * b),
        v += 2)
    }
    w = n[(x - 2) * 2],
    P = n[(x - 2) * 2 + 1],
    T = n[(x - 1) * 2],
    M = n[(x - 1) * 2 + 1],
    z = -(P - M),
    L = w - T,
    k = Math.sqrt(z * z + L * L),
    z /= k,
    L /= k,
    z *= y,
    L *= y,
    g.push(T - z * $, M - L * $),
    g.push(T + z * b, M + L * b),
    m || (c.cap === "round" ? v += hi(T - z * ($ - b) * .5, M - L * ($ - b) * .5, T - z * $, M - L * $, T + z * b, M + L * b, g, !1) + 2 : c.cap === "square" && (v += Ad(T, M, z, L, $, b, !1, g)));
    const tt = Td * Td;
    for (let Y = _; Y < v + _ - 2; ++Y)
        w = g[Y * 2],
        P = g[Y * 2 + 1],
        T = g[(Y + 1) * 2],
        M = g[(Y + 1) * 2 + 1],
        B = g[(Y + 2) * 2],
        U = g[(Y + 2) * 2 + 1],
        !(Math.abs(w * (M - U) + T * (U - P) + B * (P - M)) < tt) && a.push(Y, Y + 1, Y + 2)
}
function Gg(n, t, e, r, i, s, o) {
    const a = C2(n, t, 2);
    if (!a)
        return;
    for (let u = 0; u < a.length; u += 3)
        s[o++] = a[u] + i,
        s[o++] = a[u + 1] + i,
        s[o++] = a[u + 2] + i;
    let l = i * r;
    for (let u = 0; u < n.length; u += 2)
        e[l] = n[u],
        e[l + 1] = n[u + 1],
        l += r
}
const B1 = []
  , U1 = {
    extension: {
        type: Q.ShapeBuilder,
        name: "polygon"
    },
    build(n, t) {
        for (let e = 0; e < n.points.length; e++)
            t[e] = n.points[e];
        return t
    },
    triangulate(n, t, e, r, i, s) {
        Gg(n, B1, t, e, r, i, s)
    }
}
  , $1 = {
    extension: {
        type: Q.ShapeBuilder,
        name: "rectangle"
    },
    build(n, t) {
        const e = n
          , r = e.x
          , i = e.y
          , s = e.width
          , o = e.height;
        return s >= 0 && o >= 0 && (t[0] = r,
        t[1] = i,
        t[2] = r + s,
        t[3] = i,
        t[4] = r + s,
        t[5] = i + o,
        t[6] = r,
        t[7] = i + o),
        t
    },
    triangulate(n, t, e, r, i, s) {
        let o = 0;
        r *= e,
        t[r + o] = n[0],
        t[r + o + 1] = n[1],
        o += e,
        t[r + o] = n[2],
        t[r + o + 1] = n[3],
        o += e,
        t[r + o] = n[6],
        t[r + o + 1] = n[7],
        o += e,
        t[r + o] = n[4],
        t[r + o + 1] = n[5],
        o += e;
        const a = r / e;
        i[s++] = a,
        i[s++] = a + 1,
        i[s++] = a + 2,
        i[s++] = a + 1,
        i[s++] = a + 3,
        i[s++] = a + 2
    }
}
  , N1 = {
    extension: {
        type: Q.ShapeBuilder,
        name: "triangle"
    },
    build(n, t) {
        return t[0] = n.x,
        t[1] = n.y,
        t[2] = n.x2,
        t[3] = n.y2,
        t[4] = n.x3,
        t[5] = n.y3,
        t
    },
    triangulate(n, t, e, r, i, s) {
        let o = 0;
        r *= e,
        t[r + o] = n[0],
        t[r + o + 1] = n[1],
        o += e,
        t[r + o] = n[2],
        t[r + o + 1] = n[3],
        o += e,
        t[r + o] = n[4],
        t[r + o + 1] = n[5];
        const a = r / e;
        i[s++] = a,
        i[s++] = a + 1,
        i[s++] = a + 2
    }
}
  , Xl = {};
Qe.handleByMap(Q.ShapeBuilder, Xl);
Qe.add($1, U1, N1, Jo, k1, z1);
const G1 = new ce;
function V1(n, t) {
    const {geometryData: e, batches: r} = t;
    r.length = 0,
    e.indices.length = 0,
    e.vertices.length = 0,
    e.uvs.length = 0;
    for (let i = 0; i < n.instructions.length; i++) {
        const s = n.instructions[i];
        if (s.action === "texture")
            W1(s.data, r, e);
        else if (s.action === "fill" || s.action === "stroke") {
            const o = s.action === "stroke"
              , a = s.data.path.shapePath
              , l = s.data.style
              , u = s.data.hole;
            o && u && Pd(u.shapePath, l, null, !0, r, e),
            Pd(a, l, u, o, r, e)
        }
    }
}
function W1(n, t, e) {
    const {vertices: r, uvs: i, indices: s} = e
      , o = s.length
      , a = r.length / 2
      , l = []
      , u = Xl.rectangle
      , c = G1
      , f = n.image;
    c.x = n.dx,
    c.y = n.dy,
    c.width = n.dw,
    c.height = n.dh;
    const d = n.transform;
    u.build(c, l),
    d && $g(l, d),
    u.triangulate(l, r, 2, a, s, o);
    const h = f.uvs;
    i.push(h.x0, h.y0, h.x1, h.y1, h.x3, h.y3, h.x2, h.y2);
    const m = In.get(Ng);
    m.indexOffset = o,
    m.indexSize = s.length - o,
    m.attributeOffset = a,
    m.attributeSize = r.length / 2 - a,
    m.baseColor = n.style,
    m.alpha = n.alpha,
    m.texture = f,
    m.geometryData = e,
    t.push(m)
}
function Pd(n, t, e, r, i, s) {
    const {vertices: o, uvs: a, indices: l} = s
      , u = n.shapePrimitives.length - 1;
    n.shapePrimitives.forEach( ({shape: c, transform: f}, d) => {
        const h = l.length
          , m = o.length / 2
          , p = []
          , g = Xl[c.type];
        if (g.build(c, p),
        f && $g(p, f),
        r) {
            const y = c.closePath ?? !0;
            D1(p, t, !1, y, o, 2, m, l)
        } else if (e && u === d) {
            u !== 0 && console.warn("[Pixi Graphics] only the last shape have be cut out");
            const y = []
              , S = p.slice();
            X1(e.shapePath).forEach(w => {
                y.push(S.length / 2),
                S.push(...w)
            }
            ),
            Gg(S, y, o, 2, m, l, h)
        } else
            g.triangulate(p, o, 2, m, l, h);
        const x = a.length / 2
          , v = t.texture;
        if (v !== ct.WHITE) {
            const y = t.matrix;
            y && (f && y.append(f.clone().invert()),
            O1(o, 2, m, a, x, 2, o.length / 2 - m, y))
        } else
            F1(a, x, 2, o.length / 2 - m);
        const _ = In.get(Ng);
        _.indexOffset = h,
        _.indexSize = l.length - h,
        _.attributeOffset = m,
        _.attributeSize = o.length / 2 - m,
        _.baseColor = t.color,
        _.alpha = t.alpha,
        _.texture = v,
        _.geometryData = s,
        i.push(_)
    }
    )
}
function X1(n) {
    if (!n)
        return [];
    const t = n.shapePrimitives
      , e = [];
    for (let r = 0; r < t.length; r++) {
        const i = t[r].shape
          , s = [];
        Xl[i.type].build(i, s),
        e.push(s)
    }
    return e
}
class H1 {
    constructor() {
        this.batches = [],
        this.geometryData = {
            vertices: [],
            uvs: [],
            indices: []
        }
    }
}
class Y1 {
    constructor() {
        this.batcher = new M1,
        this.instructions = new Km
    }
    init() {
        this.instructions.reset()
    }
    get geometry() {
        return J(Q_, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),
        this.batcher.geometry
    }
}
const qh = class Dc {
    constructor(t) {
        this._gpuContextHash = {},
        this._graphicsDataContextHash = Object.create(null),
        t.renderableGC.addManagedHash(this, "_gpuContextHash"),
        t.renderableGC.addManagedHash(this, "_graphicsDataContextHash")
    }
    init(t) {
        Dc.defaultOptions.bezierSmoothness = t?.bezierSmoothness ?? Dc.defaultOptions.bezierSmoothness
    }
    getContextRenderData(t) {
        return this._graphicsDataContextHash[t.uid] || this._initContextRenderData(t)
    }
    updateGpuContext(t) {
        let e = this._gpuContextHash[t.uid] || this._initContext(t);
        if (t.dirty) {
            e ? this._cleanGraphicsContextData(t) : e = this._initContext(t),
            V1(t, e);
            const r = t.batchMode;
            t.customShader || r === "no-batch" ? e.isBatchable = !1 : r === "auto" && (e.isBatchable = e.geometryData.vertices.length < 400),
            t.dirty = !1
        }
        return e
    }
    getGpuContext(t) {
        return this._gpuContextHash[t.uid] || this._initContext(t)
    }
    _initContextRenderData(t) {
        const e = In.get(Y1)
          , {batches: r, geometryData: i} = this._gpuContextHash[t.uid]
          , s = i.vertices.length
          , o = i.indices.length;
        for (let c = 0; c < r.length; c++)
            r[c].applyTransform = !1;
        const a = e.batcher;
        a.ensureAttributeBuffer(s),
        a.ensureIndexBuffer(o),
        a.begin();
        for (let c = 0; c < r.length; c++) {
            const f = r[c];
            a.add(f)
        }
        a.finish(e.instructions);
        const l = a.geometry;
        l.indexBuffer.setDataWithSize(a.indexBuffer, a.indexSize, !0),
        l.buffers[0].setDataWithSize(a.attributeBuffer.float32View, a.attributeSize, !0);
        const u = a.batches;
        for (let c = 0; c < u.length; c++) {
            const f = u[c];
            f.bindGroup = G2(f.textures.textures, f.textures.count)
        }
        return this._graphicsDataContextHash[t.uid] = e,
        e
    }
    _initContext(t) {
        const e = new H1;
        return e.context = t,
        this._gpuContextHash[t.uid] = e,
        t.on("destroy", this.onGraphicsContextDestroy, this),
        this._gpuContextHash[t.uid]
    }
    onGraphicsContextDestroy(t) {
        this._cleanGraphicsContextData(t),
        t.off("destroy", this.onGraphicsContextDestroy, this),
        this._gpuContextHash[t.uid] = null
    }
    _cleanGraphicsContextData(t) {
        const e = this._gpuContextHash[t.uid];
        e.isBatchable || this._graphicsDataContextHash[t.uid] && (In.return(this.getContextRenderData(t)),
        this._graphicsDataContextHash[t.uid] = null),
        e.batches && e.batches.forEach(r => {
            In.return(r)
        }
        )
    }
    destroy() {
        for (const t in this._gpuContextHash)
            this._gpuContextHash[t] && this.onGraphicsContextDestroy(this._gpuContextHash[t].context)
    }
}
;
qh.extension = {
    type: [Q.WebGLSystem, Q.WebGPUSystem, Q.CanvasSystem],
    name: "graphicsContext"
};
qh.defaultOptions = {
    bezierSmoothness: .5
};
let Vg = qh;
const j1 = 8
  , Aa = 11920929e-14
  , q1 = 1;
function Wg(n, t, e, r, i, s, o, a, l, u) {
    const f = Math.min(.99, Math.max(0, u ?? Vg.defaultOptions.bezierSmoothness));
    let d = (q1 - f) / 1;
    return d *= d,
    K1(t, e, r, i, s, o, a, l, n, d),
    n
}
function K1(n, t, e, r, i, s, o, a, l, u) {
    Bc(n, t, e, r, i, s, o, a, l, u, 0),
    l.push(o, a)
}
function Bc(n, t, e, r, i, s, o, a, l, u, c) {
    if (c > j1)
        return;
    const f = (n + e) / 2
      , d = (t + r) / 2
      , h = (e + i) / 2
      , m = (r + s) / 2
      , p = (i + o) / 2
      , g = (s + a) / 2
      , x = (f + h) / 2
      , v = (d + m) / 2
      , _ = (h + p) / 2
      , y = (m + g) / 2
      , S = (x + _) / 2
      , O = (v + y) / 2;
    if (c > 0) {
        let w = o - n
          , P = a - t;
        const T = Math.abs((e - o) * P - (r - a) * w)
          , M = Math.abs((i - o) * P - (s - a) * w);
        if (T > Aa && M > Aa) {
            if ((T + M) * (T + M) <= u * (w * w + P * P)) {
                l.push(S, O);
                return
            }
        } else if (T > Aa) {
            if (T * T <= u * (w * w + P * P)) {
                l.push(S, O);
                return
            }
        } else if (M > Aa) {
            if (M * M <= u * (w * w + P * P)) {
                l.push(S, O);
                return
            }
        } else if (w = S - (n + o) / 2,
        P = O - (t + a) / 2,
        w * w + P * P <= u) {
            l.push(S, O);
            return
        }
    }
    Bc(n, t, f, d, x, v, S, O, l, u, c + 1),
    Bc(S, O, _, y, p, g, o, a, l, u, c + 1)
}
const Z1 = 8
  , Q1 = 11920929e-14
  , J1 = 1;
function tb(n, t, e, r, i, s, o, a) {
    const u = Math.min(.99, Math.max(0, a ?? Vg.defaultOptions.bezierSmoothness));
    let c = (J1 - u) / 1;
    return c *= c,
    eb(t, e, r, i, s, o, n, c),
    n
}
function eb(n, t, e, r, i, s, o, a) {
    Uc(o, n, t, e, r, i, s, a, 0),
    o.push(i, s)
}
function Uc(n, t, e, r, i, s, o, a, l) {
    if (l > Z1)
        return;
    const u = (t + r) / 2
      , c = (e + i) / 2
      , f = (r + s) / 2
      , d = (i + o) / 2
      , h = (u + f) / 2
      , m = (c + d) / 2;
    let p = s - t
      , g = o - e;
    const x = Math.abs((r - s) * g - (i - o) * p);
    if (x > Q1) {
        if (x * x <= a * (p * p + g * g)) {
            n.push(h, m);
            return
        }
    } else if (p = h - (t + s) / 2,
    g = m - (e + o) / 2,
    p * p + g * g <= a) {
        n.push(h, m);
        return
    }
    Uc(n, t, e, u, c, h, m, a, l + 1),
    Uc(n, h, m, f, d, s, o, a, l + 1)
}
function Xg(n, t, e, r, i, s, o, a) {
    let l = Math.abs(i - s);
    (!o && i > s || o && s > i) && (l = 2 * Math.PI - l),
    a = a || Math.max(6, Math.floor(6 * Math.pow(r, 1 / 3) * (l / Math.PI))),
    a = Math.max(a, 3);
    let u = l / a
      , c = i;
    u *= o ? -1 : 1;
    for (let f = 0; f < a + 1; f++) {
        const d = Math.cos(c)
          , h = Math.sin(c)
          , m = t + d * r
          , p = e + h * r;
        n.push(m, p),
        c += u
    }
}
function rb(n, t, e, r, i, s) {
    const o = n[n.length - 2]
      , l = n[n.length - 1] - e
      , u = o - t
      , c = i - e
      , f = r - t
      , d = Math.abs(l * f - u * c);
    if (d < 1e-8 || s === 0) {
        (n[n.length - 2] !== t || n[n.length - 1] !== e) && n.push(t, e);
        return
    }
    const h = l * l + u * u
      , m = c * c + f * f
      , p = l * c + u * f
      , g = s * Math.sqrt(h) / d
      , x = s * Math.sqrt(m) / d
      , v = g * p / h
      , _ = x * p / m
      , y = g * f + x * u
      , S = g * c + x * l
      , O = u * (x + v)
      , w = l * (x + v)
      , P = f * (g + _)
      , T = c * (g + _)
      , M = Math.atan2(w - S, O - y)
      , B = Math.atan2(T - S, P - y);
    Xg(n, y + t, S + e, s, M, B, u * c > f * l)
}
const To = Math.PI * 2
  , Iu = {
    centerX: 0,
    centerY: 0,
    ang1: 0,
    ang2: 0
}
  , ku = ({x: n, y: t}, e, r, i, s, o, a, l) => {
    n *= e,
    t *= r;
    const u = i * n - s * t
      , c = s * n + i * t;
    return l.x = u + o,
    l.y = c + a,
    l
}
;
function nb(n, t) {
    const e = t === -1.5707963267948966 ? -.551915024494 : 1.3333333333333333 * Math.tan(t / 4)
      , r = t === 1.5707963267948966 ? .551915024494 : e
      , i = Math.cos(n)
      , s = Math.sin(n)
      , o = Math.cos(n + t)
      , a = Math.sin(n + t);
    return [{
        x: i - s * r,
        y: s + i * r
    }, {
        x: o + a * r,
        y: a - o * r
    }, {
        x: o,
        y: a
    }]
}
const Md = (n, t, e, r) => {
    const i = n * r - t * e < 0 ? -1 : 1;
    let s = n * e + t * r;
    return s > 1 && (s = 1),
    s < -1 && (s = -1),
    i * Math.acos(s)
}
  , ib = (n, t, e, r, i, s, o, a, l, u, c, f, d) => {
    const h = Math.pow(i, 2)
      , m = Math.pow(s, 2)
      , p = Math.pow(c, 2)
      , g = Math.pow(f, 2);
    let x = h * m - h * g - m * p;
    x < 0 && (x = 0),
    x /= h * g + m * p,
    x = Math.sqrt(x) * (o === a ? -1 : 1);
    const v = x * i / s * f
      , _ = x * -s / i * c
      , y = u * v - l * _ + (n + e) / 2
      , S = l * v + u * _ + (t + r) / 2
      , O = (c - v) / i
      , w = (f - _) / s
      , P = (-c - v) / i
      , T = (-f - _) / s
      , M = Md(1, 0, O, w);
    let B = Md(O, w, P, T);
    a === 0 && B > 0 && (B -= To),
    a === 1 && B < 0 && (B += To),
    d.centerX = y,
    d.centerY = S,
    d.ang1 = M,
    d.ang2 = B
}
;
function sb(n, t, e, r, i, s, o, a=0, l=0, u=0) {
    if (s === 0 || o === 0)
        return;
    const c = Math.sin(a * To / 360)
      , f = Math.cos(a * To / 360)
      , d = f * (t - r) / 2 + c * (e - i) / 2
      , h = -c * (t - r) / 2 + f * (e - i) / 2;
    if (d === 0 && h === 0)
        return;
    s = Math.abs(s),
    o = Math.abs(o);
    const m = Math.pow(d, 2) / Math.pow(s, 2) + Math.pow(h, 2) / Math.pow(o, 2);
    m > 1 && (s *= Math.sqrt(m),
    o *= Math.sqrt(m)),
    ib(t, e, r, i, s, o, l, u, c, f, d, h, Iu);
    let {ang1: p, ang2: g} = Iu;
    const {centerX: x, centerY: v} = Iu;
    let _ = Math.abs(g) / (To / 4);
    Math.abs(1 - _) < 1e-7 && (_ = 1);
    const y = Math.max(Math.ceil(_), 1);
    g /= y;
    let S = n[n.length - 2]
      , O = n[n.length - 1];
    const w = {
        x: 0,
        y: 0
    };
    for (let P = 0; P < y; P++) {
        const T = nb(p, g)
          , {x: M, y: B} = ku(T[0], s, o, f, c, x, v, w)
          , {x: U, y: z} = ku(T[1], s, o, f, c, x, v, w)
          , {x: L, y: V} = ku(T[2], s, o, f, c, x, v, w);
        Wg(n, S, O, M, B, U, z, L, V),
        S = L,
        O = V,
        p += g
    }
}
function ob(n, t, e) {
    const r = (o, a) => {
        const l = a.x - o.x
          , u = a.y - o.y
          , c = Math.sqrt(l * l + u * u)
          , f = l / c
          , d = u / c;
        return {
            len: c,
            nx: f,
            ny: d
        }
    }
      , i = (o, a) => {
        o === 0 ? n.moveTo(a.x, a.y) : n.lineTo(a.x, a.y)
    }
    ;
    let s = t[t.length - 1];
    for (let o = 0; o < t.length; o++) {
        const a = t[o % t.length]
          , l = a.radius ?? e;
        if (l <= 0) {
            i(o, a),
            s = a;
            continue
        }
        const u = t[(o + 1) % t.length]
          , c = r(a, s)
          , f = r(a, u);
        if (c.len < 1e-4 || f.len < 1e-4) {
            i(o, a),
            s = a;
            continue
        }
        let d = Math.asin(c.nx * f.ny - c.ny * f.nx)
          , h = 1
          , m = !1;
        c.nx * f.nx - c.ny * -f.ny < 0 ? d < 0 ? d = Math.PI + d : (d = Math.PI - d,
        h = -1,
        m = !0) : d > 0 && (h = -1,
        m = !0);
        const p = d / 2;
        let g, x = Math.abs(Math.cos(p) * l / Math.sin(p));
        x > Math.min(c.len / 2, f.len / 2) ? (x = Math.min(c.len / 2, f.len / 2),
        g = Math.abs(x * Math.sin(p) / Math.cos(p))) : g = l;
        const v = a.x + f.nx * x + -f.ny * g * h
          , _ = a.y + f.ny * x + f.nx * g * h
          , y = Math.atan2(c.ny, c.nx) + Math.PI / 2 * h
          , S = Math.atan2(f.ny, f.nx) - Math.PI / 2 * h;
        o === 0 && n.moveTo(v + Math.cos(y) * g, _ + Math.sin(y) * g),
        n.arc(v, _, g, y, S, m),
        s = a
    }
}
function ab(n, t, e, r) {
    const i = (a, l) => Math.sqrt((a.x - l.x) ** 2 + (a.y - l.y) ** 2)
      , s = (a, l, u) => ({
        x: a.x + (l.x - a.x) * u,
        y: a.y + (l.y - a.y) * u
    })
      , o = t.length;
    for (let a = 0; a < o; a++) {
        const l = t[(a + 1) % o]
          , u = l.radius ?? e;
        if (u <= 0) {
            a === 0 ? n.moveTo(l.x, l.y) : n.lineTo(l.x, l.y);
            continue
        }
        const c = t[a]
          , f = t[(a + 2) % o]
          , d = i(c, l);
        let h;
        if (d < 1e-4)
            h = l;
        else {
            const g = Math.min(d / 2, u);
            h = s(l, c, g / d)
        }
        const m = i(f, l);
        let p;
        if (m < 1e-4)
            p = l;
        else {
            const g = Math.min(m / 2, u);
            p = s(l, f, g / m)
        }
        a === 0 ? n.moveTo(h.x, h.y) : n.lineTo(h.x, h.y),
        n.quadraticCurveTo(l.x, l.y, p.x, p.y, r)
    }
}
const lb = new ce;
class ub {
    constructor(t) {
        this.shapePrimitives = [],
        this._currentPoly = null,
        this._bounds = new _n,
        this._graphicsPath2D = t
    }
    moveTo(t, e) {
        return this.startPoly(t, e),
        this
    }
    lineTo(t, e) {
        this._ensurePoly();
        const r = this._currentPoly.points
          , i = r[r.length - 2]
          , s = r[r.length - 1];
        return (i !== t || s !== e) && r.push(t, e),
        this
    }
    arc(t, e, r, i, s, o) {
        this._ensurePoly(!1);
        const a = this._currentPoly.points;
        return Xg(a, t, e, r, i, s, o),
        this
    }
    arcTo(t, e, r, i, s) {
        this._ensurePoly();
        const o = this._currentPoly.points;
        return rb(o, t, e, r, i, s),
        this
    }
    arcToSvg(t, e, r, i, s, o, a) {
        const l = this._currentPoly.points;
        return sb(l, this._currentPoly.lastX, this._currentPoly.lastY, o, a, t, e, r, i, s),
        this
    }
    bezierCurveTo(t, e, r, i, s, o, a) {
        this._ensurePoly();
        const l = this._currentPoly;
        return Wg(this._currentPoly.points, l.lastX, l.lastY, t, e, r, i, s, o, a),
        this
    }
    quadraticCurveTo(t, e, r, i, s) {
        this._ensurePoly();
        const o = this._currentPoly;
        return tb(this._currentPoly.points, o.lastX, o.lastY, t, e, r, i, s),
        this
    }
    closePath() {
        return this.endPoly(!0),
        this
    }
    addPath(t, e) {
        this.endPoly(),
        e && !e.isIdentity() && (t = t.clone(!0),
        t.transform(e));
        for (let r = 0; r < t.instructions.length; r++) {
            const i = t.instructions[r];
            this[i.action](...i.data)
        }
        return this
    }
    finish(t=!1) {
        this.endPoly(t)
    }
    rect(t, e, r, i, s) {
        return this.drawShape(new ce(t,e,r,i), s),
        this
    }
    circle(t, e, r, i) {
        return this.drawShape(new Hh(t,e,r), i),
        this
    }
    poly(t, e, r) {
        const i = new Co(t);
        return i.closePath = e,
        this.drawShape(i, r),
        this
    }
    regularPoly(t, e, r, i, s=0, o) {
        i = Math.max(i | 0, 3);
        const a = -1 * Math.PI / 2 + s
          , l = Math.PI * 2 / i
          , u = [];
        for (let c = 0; c < i; c++) {
            const f = c * l + a;
            u.push(t + r * Math.cos(f), e + r * Math.sin(f))
        }
        return this.poly(u, !0, o),
        this
    }
    roundPoly(t, e, r, i, s, o=0, a) {
        if (i = Math.max(i | 0, 3),
        s <= 0)
            return this.regularPoly(t, e, r, i, o);
        const l = r * Math.sin(Math.PI / i) - .001;
        s = Math.min(s, l);
        const u = -1 * Math.PI / 2 + o
          , c = Math.PI * 2 / i
          , f = (i - 2) * Math.PI / i / 2;
        for (let d = 0; d < i; d++) {
            const h = d * c + u
              , m = t + r * Math.cos(h)
              , p = e + r * Math.sin(h)
              , g = h + Math.PI + f
              , x = h - Math.PI - f
              , v = m + s * Math.cos(g)
              , _ = p + s * Math.sin(g)
              , y = m + s * Math.cos(x)
              , S = p + s * Math.sin(x);
            d === 0 ? this.moveTo(v, _) : this.lineTo(v, _),
            this.quadraticCurveTo(m, p, y, S, a)
        }
        return this.closePath()
    }
    roundShape(t, e, r=!1, i) {
        return t.length < 3 ? this : (r ? ab(this, t, e, i) : ob(this, t, e),
        this.closePath())
    }
    filletRect(t, e, r, i, s) {
        if (s === 0)
            return this.rect(t, e, r, i);
        const o = Math.min(r, i) / 2
          , a = Math.min(o, Math.max(-o, s))
          , l = t + r
          , u = e + i
          , c = a < 0 ? -a : 0
          , f = Math.abs(a);
        return this.moveTo(t, e + f).arcTo(t + c, e + c, t + f, e, f).lineTo(l - f, e).arcTo(l - c, e + c, l, e + f, f).lineTo(l, u - f).arcTo(l - c, u - c, t + r - f, u, f).lineTo(t + f, u).arcTo(t + c, u - c, t, u - f, f).closePath()
    }
    chamferRect(t, e, r, i, s, o) {
        if (s <= 0)
            return this.rect(t, e, r, i);
        const a = Math.min(s, Math.min(r, i) / 2)
          , l = t + r
          , u = e + i
          , c = [t + a, e, l - a, e, l, e + a, l, u - a, l - a, u, t + a, u, t, u - a, t, e + a];
        for (let f = c.length - 1; f >= 2; f -= 2)
            c[f] === c[f - 2] && c[f - 1] === c[f - 3] && c.splice(f - 1, 2);
        return this.poly(c, !0, o)
    }
    ellipse(t, e, r, i, s) {
        return this.drawShape(new Yh(t,e,r,i), s),
        this
    }
    roundRect(t, e, r, i, s, o) {
        return this.drawShape(new jh(t,e,r,i,s), o),
        this
    }
    drawShape(t, e) {
        return this.endPoly(),
        this.shapePrimitives.push({
            shape: t,
            transform: e
        }),
        this
    }
    startPoly(t, e) {
        let r = this._currentPoly;
        return r && this.endPoly(),
        r = new Co,
        r.points.push(t, e),
        this._currentPoly = r,
        this
    }
    endPoly(t=!1) {
        const e = this._currentPoly;
        return e && e.points.length > 2 && (e.closePath = t,
        this.shapePrimitives.push({
            shape: e
        })),
        this._currentPoly = null,
        this
    }
    _ensurePoly(t=!0) {
        if (!this._currentPoly && (this._currentPoly = new Co,
        t)) {
            const e = this.shapePrimitives[this.shapePrimitives.length - 1];
            if (e) {
                let r = e.shape.x
                  , i = e.shape.y;
                if (e.transform && !e.transform.isIdentity()) {
                    const s = e.transform
                      , o = r;
                    r = s.a * r + s.c * i + s.tx,
                    i = s.b * o + s.d * i + s.ty
                }
                this._currentPoly.points.push(r, i)
            } else
                this._currentPoly.points.push(0, 0)
        }
    }
    buildPath() {
        const t = this._graphicsPath2D;
        this.shapePrimitives.length = 0,
        this._currentPoly = null;
        for (let e = 0; e < t.instructions.length; e++) {
            const r = t.instructions[e];
            this[r.action](...r.data)
        }
        this.finish()
    }
    get bounds() {
        const t = this._bounds;
        t.clear();
        const e = this.shapePrimitives;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , s = i.shape.getBounds(lb);
            i.transform ? t.addRect(s, i.transform) : t.addRect(s)
        }
        return t
    }
}
class $s {
    constructor(t) {
        this.instructions = [],
        this.uid = me("graphicsPath"),
        this._dirty = !0,
        typeof t == "string" ? D2(t, this) : this.instructions = t?.slice() ?? []
    }
    get shapePath() {
        return this._shapePath || (this._shapePath = new ub(this)),
        this._dirty && (this._dirty = !1,
        this._shapePath.buildPath()),
        this._shapePath
    }
    addPath(t, e) {
        return t = t.clone(),
        this.instructions.push({
            action: "addPath",
            data: [t, e]
        }),
        this._dirty = !0,
        this
    }
    arc(...t) {
        return this.instructions.push({
            action: "arc",
            data: t
        }),
        this._dirty = !0,
        this
    }
    arcTo(...t) {
        return this.instructions.push({
            action: "arcTo",
            data: t
        }),
        this._dirty = !0,
        this
    }
    arcToSvg(...t) {
        return this.instructions.push({
            action: "arcToSvg",
            data: t
        }),
        this._dirty = !0,
        this
    }
    bezierCurveTo(...t) {
        return this.instructions.push({
            action: "bezierCurveTo",
            data: t
        }),
        this._dirty = !0,
        this
    }
    bezierCurveToShort(t, e, r, i, s) {
        const o = this.instructions[this.instructions.length - 1]
          , a = this.getLastPoint(Be.shared);
        let l = 0
          , u = 0;
        if (!o || o.action !== "bezierCurveTo")
            l = a.x,
            u = a.y;
        else {
            l = o.data[2],
            u = o.data[3];
            const c = a.x
              , f = a.y;
            l = c + (c - l),
            u = f + (f - u)
        }
        return this.instructions.push({
            action: "bezierCurveTo",
            data: [l, u, t, e, r, i, s]
        }),
        this._dirty = !0,
        this
    }
    closePath() {
        return this.instructions.push({
            action: "closePath",
            data: []
        }),
        this._dirty = !0,
        this
    }
    ellipse(...t) {
        return this.instructions.push({
            action: "ellipse",
            data: t
        }),
        this._dirty = !0,
        this
    }
    lineTo(...t) {
        return this.instructions.push({
            action: "lineTo",
            data: t
        }),
        this._dirty = !0,
        this
    }
    moveTo(...t) {
        return this.instructions.push({
            action: "moveTo",
            data: t
        }),
        this
    }
    quadraticCurveTo(...t) {
        return this.instructions.push({
            action: "quadraticCurveTo",
            data: t
        }),
        this._dirty = !0,
        this
    }
    quadraticCurveToShort(t, e, r) {
        const i = this.instructions[this.instructions.length - 1]
          , s = this.getLastPoint(Be.shared);
        let o = 0
          , a = 0;
        if (!i || i.action !== "quadraticCurveTo")
            o = s.x,
            a = s.y;
        else {
            o = i.data[0],
            a = i.data[1];
            const l = s.x
              , u = s.y;
            o = l + (l - o),
            a = u + (u - a)
        }
        return this.instructions.push({
            action: "quadraticCurveTo",
            data: [o, a, t, e, r]
        }),
        this._dirty = !0,
        this
    }
    rect(t, e, r, i, s) {
        return this.instructions.push({
            action: "rect",
            data: [t, e, r, i, s]
        }),
        this._dirty = !0,
        this
    }
    circle(t, e, r, i) {
        return this.instructions.push({
            action: "circle",
            data: [t, e, r, i]
        }),
        this._dirty = !0,
        this
    }
    roundRect(...t) {
        return this.instructions.push({
            action: "roundRect",
            data: t
        }),
        this._dirty = !0,
        this
    }
    poly(...t) {
        return this.instructions.push({
            action: "poly",
            data: t
        }),
        this._dirty = !0,
        this
    }
    regularPoly(...t) {
        return this.instructions.push({
            action: "regularPoly",
            data: t
        }),
        this._dirty = !0,
        this
    }
    roundPoly(...t) {
        return this.instructions.push({
            action: "roundPoly",
            data: t
        }),
        this._dirty = !0,
        this
    }
    roundShape(...t) {
        return this.instructions.push({
            action: "roundShape",
            data: t
        }),
        this._dirty = !0,
        this
    }
    filletRect(...t) {
        return this.instructions.push({
            action: "filletRect",
            data: t
        }),
        this._dirty = !0,
        this
    }
    chamferRect(...t) {
        return this.instructions.push({
            action: "chamferRect",
            data: t
        }),
        this._dirty = !0,
        this
    }
    star(t, e, r, i, s, o, a) {
        s = s || i / 2;
        const l = -1 * Math.PI / 2 + o
          , u = r * 2
          , c = Math.PI * 2 / u
          , f = [];
        for (let d = 0; d < u; d++) {
            const h = d % 2 ? s : i
              , m = d * c + l;
            f.push(t + h * Math.cos(m), e + h * Math.sin(m))
        }
        return this.poly(f, !0, a),
        this
    }
    clone(t=!1) {
        const e = new $s;
        if (!t)
            e.instructions = this.instructions.slice();
        else
            for (let r = 0; r < this.instructions.length; r++) {
                const i = this.instructions[r];
                e.instructions.push({
                    action: i.action,
                    data: i.data.slice()
                })
            }
        return e
    }
    clear() {
        return this.instructions.length = 0,
        this._dirty = !0,
        this
    }
    transform(t) {
        if (t.isIdentity())
            return this;
        const e = t.a
          , r = t.b
          , i = t.c
          , s = t.d
          , o = t.tx
          , a = t.ty;
        let l = 0
          , u = 0
          , c = 0
          , f = 0
          , d = 0
          , h = 0
          , m = 0
          , p = 0;
        for (let g = 0; g < this.instructions.length; g++) {
            const x = this.instructions[g]
              , v = x.data;
            switch (x.action) {
            case "moveTo":
            case "lineTo":
                l = v[0],
                u = v[1],
                v[0] = e * l + i * u + o,
                v[1] = r * l + s * u + a;
                break;
            case "bezierCurveTo":
                c = v[0],
                f = v[1],
                d = v[2],
                h = v[3],
                l = v[4],
                u = v[5],
                v[0] = e * c + i * f + o,
                v[1] = r * c + s * f + a,
                v[2] = e * d + i * h + o,
                v[3] = r * d + s * h + a,
                v[4] = e * l + i * u + o,
                v[5] = r * l + s * u + a;
                break;
            case "quadraticCurveTo":
                c = v[0],
                f = v[1],
                l = v[2],
                u = v[3],
                v[0] = e * c + i * f + o,
                v[1] = r * c + s * f + a,
                v[2] = e * l + i * u + o,
                v[3] = r * l + s * u + a;
                break;
            case "arcToSvg":
                l = v[5],
                u = v[6],
                m = v[0],
                p = v[1],
                v[0] = e * m + i * p,
                v[1] = r * m + s * p,
                v[5] = e * l + i * u + o,
                v[6] = r * l + s * u + a;
                break;
            case "circle":
                v[4] = eo(v[3], t);
                break;
            case "rect":
                v[4] = eo(v[4], t);
                break;
            case "ellipse":
                v[8] = eo(v[8], t);
                break;
            case "roundRect":
                v[5] = eo(v[5], t);
                break;
            case "addPath":
                v[0].transform(t);
                break;
            case "poly":
                v[2] = eo(v[2], t);
                break;
            default:
                ge("unknown transform action", x.action);
                break
            }
        }
        return this._dirty = !0,
        this
    }
    get bounds() {
        return this.shapePath.bounds
    }
    getLastPoint(t) {
        let e = this.instructions.length - 1
          , r = this.instructions[e];
        if (!r)
            return t.x = 0,
            t.y = 0,
            t;
        for (; r.action === "closePath"; ) {
            if (e--,
            e < 0)
                return t.x = 0,
                t.y = 0,
                t;
            r = this.instructions[e]
        }
        switch (r.action) {
        case "moveTo":
        case "lineTo":
            t.x = r.data[0],
            t.y = r.data[1];
            break;
        case "quadraticCurveTo":
            t.x = r.data[2],
            t.y = r.data[3];
            break;
        case "bezierCurveTo":
            t.x = r.data[4],
            t.y = r.data[5];
            break;
        case "arc":
        case "arcToSvg":
            t.x = r.data[5],
            t.y = r.data[6];
            break;
        case "addPath":
            r.data[0].getLastPoint(t);
            break
        }
        return t
    }
}
function eo(n, t) {
    return n ? n.prepend(t) : t.clone()
}
function cb(n, t) {
    if (typeof n == "string") {
        const r = document.createElement("div");
        r.innerHTML = n.trim(),
        n = r.querySelector("svg")
    }
    const e = {
        context: t,
        path: new $s
    };
    return Hg(n, e, null, null),
    t
}
function Hg(n, t, e, r) {
    const i = n.children
      , {fillStyle: s, strokeStyle: o} = hb(n);
    s && e ? e = {
        ...e,
        ...s
    } : s && (e = s),
    o && r ? r = {
        ...r,
        ...o
    } : o && (r = o),
    t.context.fillStyle = e,
    t.context.strokeStyle = r;
    let a, l, u, c, f, d, h, m, p, g, x, v, _, y, S, O, w;
    switch (n.nodeName.toLowerCase()) {
    case "path":
        y = n.getAttribute("d"),
        S = new $s(y),
        t.context.path(S),
        e && t.context.fill(),
        r && t.context.stroke();
        break;
    case "circle":
        h = Se(n, "cx", 0),
        m = Se(n, "cy", 0),
        p = Se(n, "r", 0),
        t.context.ellipse(h, m, p, p),
        e && t.context.fill(),
        r && t.context.stroke();
        break;
    case "rect":
        a = Se(n, "x", 0),
        l = Se(n, "y", 0),
        O = Se(n, "width", 0),
        w = Se(n, "height", 0),
        g = Se(n, "rx", 0),
        x = Se(n, "ry", 0),
        g || x ? t.context.roundRect(a, l, O, w, g || x) : t.context.rect(a, l, O, w),
        e && t.context.fill(),
        r && t.context.stroke();
        break;
    case "ellipse":
        h = Se(n, "cx", 0),
        m = Se(n, "cy", 0),
        g = Se(n, "rx", 0),
        x = Se(n, "ry", 0),
        t.context.beginPath(),
        t.context.ellipse(h, m, g, x),
        e && t.context.fill(),
        r && t.context.stroke();
        break;
    case "line":
        u = Se(n, "x1", 0),
        c = Se(n, "y1", 0),
        f = Se(n, "x2", 0),
        d = Se(n, "y2", 0),
        t.context.beginPath(),
        t.context.moveTo(u, c),
        t.context.lineTo(f, d),
        r && t.context.stroke();
        break;
    case "polygon":
        _ = n.getAttribute("points"),
        v = _.match(/\d+/g).map(P => parseInt(P, 10)),
        t.context.poly(v, !0),
        e && t.context.fill(),
        r && t.context.stroke();
        break;
    case "polyline":
        _ = n.getAttribute("points"),
        v = _.match(/\d+/g).map(P => parseInt(P, 10)),
        t.context.poly(v, !1),
        r && t.context.stroke();
        break;
    case "g":
    case "svg":
        break;
    default:
        {
            console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);
            break
        }
    }
    for (let P = 0; P < i.length; P++)
        Hg(i[P], t, e, r)
}
function Se(n, t, e) {
    const r = n.getAttribute(t);
    return r ? Number(r) : e
}
function hb(n) {
    const t = n.getAttribute("style")
      , e = {}
      , r = {};
    let i = !1
      , s = !1;
    if (t) {
        const o = t.split(";");
        for (let a = 0; a < o.length; a++) {
            const l = o[a]
              , [u,c] = l.split(":");
            switch (u) {
            case "stroke":
                c !== "none" && (e.color = At.shared.setValue(c).toNumber(),
                s = !0);
                break;
            case "stroke-width":
                e.width = Number(c);
                break;
            case "fill":
                c !== "none" && (i = !0,
                r.color = At.shared.setValue(c).toNumber());
                break;
            case "fill-opacity":
                r.alpha = Number(c);
                break;
            case "stroke-opacity":
                e.alpha = Number(c);
                break;
            case "opacity":
                r.alpha = Number(c),
                e.alpha = Number(c);
                break
            }
        }
    } else {
        const o = n.getAttribute("stroke");
        o && o !== "none" && (s = !0,
        e.color = At.shared.setValue(o).toNumber(),
        e.width = Se(n, "stroke-width", 1));
        const a = n.getAttribute("fill");
        a && a !== "none" && (i = !0,
        r.color = At.shared.setValue(a).toNumber())
    }
    return {
        strokeStyle: s ? e : null,
        fillStyle: i ? r : null
    }
}
function fb(n) {
    return At.isColorLike(n)
}
function Od(n) {
    return n instanceof Wl
}
function Fd(n) {
    return n instanceof Zo
}
function db(n, t, e) {
    const r = At.shared.setValue(t ?? 0);
    return n.color = r.toNumber(),
    n.alpha = r.alpha === 1 ? e.alpha : r.alpha,
    n.texture = ct.WHITE,
    {
        ...e,
        ...n
    }
}
function Ed(n, t, e) {
    return n.fill = t,
    n.color = 16777215,
    n.texture = t.texture,
    n.matrix = t.transform,
    {
        ...e,
        ...n
    }
}
function Id(n, t, e) {
    return t.buildLinearGradient(),
    n.fill = t,
    n.color = 16777215,
    n.texture = t.texture,
    n.matrix = t.transform,
    {
        ...e,
        ...n
    }
}
function pb(n, t) {
    const e = {
        ...t,
        ...n
    };
    if (e.texture) {
        if (e.texture !== ct.WHITE) {
            const s = e.matrix?.invert() || new Ot;
            s.translate(e.texture.frame.x, e.texture.frame.y),
            s.scale(1 / e.texture.source.width, 1 / e.texture.source.height),
            e.matrix = s
        }
        const i = e.texture.source.style;
        i.addressMode === "clamp-to-edge" && (i.addressMode = "repeat",
        i.update())
    }
    const r = At.shared.setValue(e.color);
    return e.alpha *= r.alpha,
    e.color = r.toNumber(),
    e.matrix = e.matrix ? e.matrix.clone() : null,
    e
}
function Ti(n, t) {
    if (n == null)
        return null;
    const e = {}
      , r = n;
    return fb(n) ? db(e, n, t) : Od(n) ? Ed(e, n, t) : Fd(n) ? Id(e, n, t) : r.fill && Od(r.fill) ? Ed(r, r.fill, t) : r.fill && Fd(r.fill) ? Id(r, r.fill, t) : pb(r, t)
}
function Tl(n, t) {
    const {width: e, alignment: r, miterLimit: i, cap: s, join: o, ...a} = t
      , l = Ti(n, a);
    return l ? {
        width: e,
        alignment: r,
        miterLimit: i,
        cap: s,
        join: o,
        ...l
    } : null
}
const mb = new Be
  , kd = new Ot
  , Kh = class un extends Jr {
    constructor() {
        super(...arguments),
        this.uid = me("graphicsContext"),
        this.dirty = !0,
        this.batchMode = "auto",
        this.instructions = [],
        this._activePath = new $s,
        this._transform = new Ot,
        this._fillStyle = {
            ...un.defaultFillStyle
        },
        this._strokeStyle = {
            ...un.defaultStrokeStyle
        },
        this._stateStack = [],
        this._tick = 0,
        this._bounds = new _n,
        this._boundsDirty = !0
    }
    clone() {
        const t = new un;
        return t.batchMode = this.batchMode,
        t.instructions = this.instructions.slice(),
        t._activePath = this._activePath.clone(),
        t._transform = this._transform.clone(),
        t._fillStyle = {
            ...this._fillStyle
        },
        t._strokeStyle = {
            ...this._strokeStyle
        },
        t._stateStack = this._stateStack.slice(),
        t._bounds = this._bounds.clone(),
        t._boundsDirty = !0,
        t
    }
    get fillStyle() {
        return this._fillStyle
    }
    set fillStyle(t) {
        this._fillStyle = Ti(t, un.defaultFillStyle)
    }
    get strokeStyle() {
        return this._strokeStyle
    }
    set strokeStyle(t) {
        this._strokeStyle = Tl(t, un.defaultStrokeStyle)
    }
    setFillStyle(t) {
        return this._fillStyle = Ti(t, un.defaultFillStyle),
        this
    }
    setStrokeStyle(t) {
        return this._strokeStyle = Ti(t, un.defaultStrokeStyle),
        this
    }
    texture(t, e, r, i, s, o) {
        return this.instructions.push({
            action: "texture",
            data: {
                image: t,
                dx: r || 0,
                dy: i || 0,
                dw: s || t.frame.width,
                dh: o || t.frame.height,
                transform: this._transform.clone(),
                alpha: this._fillStyle.alpha,
                style: e ? At.shared.setValue(e).toNumber() : 16777215
            }
        }),
        this.onUpdate(),
        this
    }
    beginPath() {
        return this._activePath = new $s,
        this
    }
    fill(t, e) {
        let r;
        const i = this.instructions[this.instructions.length - 1];
        return this._tick === 0 && i && i.action === "stroke" ? r = i.data.path : r = this._activePath.clone(),
        r ? (t != null && (e !== void 0 && typeof t == "number" && (J(zt, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),
        t = {
            color: t,
            alpha: e
        }),
        this._fillStyle = Ti(t, un.defaultFillStyle)),
        this.instructions.push({
            action: "fill",
            data: {
                style: this.fillStyle,
                path: r
            }
        }),
        this.onUpdate(),
        this._initNextPathLocation(),
        this._tick = 0,
        this) : this
    }
    _initNextPathLocation() {
        const {x: t, y: e} = this._activePath.getLastPoint(Be.shared);
        this._activePath.clear(),
        this._activePath.moveTo(t, e)
    }
    stroke(t) {
        let e;
        const r = this.instructions[this.instructions.length - 1];
        return this._tick === 0 && r && r.action === "fill" ? e = r.data.path : e = this._activePath.clone(),
        e ? (t != null && (this._strokeStyle = Tl(t, un.defaultStrokeStyle)),
        this.instructions.push({
            action: "stroke",
            data: {
                style: this.strokeStyle,
                path: e
            }
        }),
        this.onUpdate(),
        this._initNextPathLocation(),
        this._tick = 0,
        this) : this
    }
    cut() {
        for (let t = 0; t < 2; t++) {
            const e = this.instructions[this.instructions.length - 1 - t]
              , r = this._activePath.clone();
            if (e && (e.action === "stroke" || e.action === "fill"))
                if (e.data.hole)
                    e.data.hole.addPath(r);
                else {
                    e.data.hole = r;
                    break
                }
        }
        return this._initNextPathLocation(),
        this
    }
    arc(t, e, r, i, s, o) {
        this._tick++;
        const a = this._transform;
        return this._activePath.arc(a.a * t + a.c * e + a.tx, a.b * t + a.d * e + a.ty, r, i, s, o),
        this
    }
    arcTo(t, e, r, i, s) {
        this._tick++;
        const o = this._transform;
        return this._activePath.arcTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * r + o.c * i + o.tx, o.b * r + o.d * i + o.ty, s),
        this
    }
    arcToSvg(t, e, r, i, s, o, a) {
        this._tick++;
        const l = this._transform;
        return this._activePath.arcToSvg(t, e, r, i, s, l.a * o + l.c * a + l.tx, l.b * o + l.d * a + l.ty),
        this
    }
    bezierCurveTo(t, e, r, i, s, o, a) {
        this._tick++;
        const l = this._transform;
        return this._activePath.bezierCurveTo(l.a * t + l.c * e + l.tx, l.b * t + l.d * e + l.ty, l.a * r + l.c * i + l.tx, l.b * r + l.d * i + l.ty, l.a * s + l.c * o + l.tx, l.b * s + l.d * o + l.ty, a),
        this
    }
    closePath() {
        return this._tick++,
        this._activePath?.closePath(),
        this
    }
    ellipse(t, e, r, i) {
        return this._tick++,
        this._activePath.ellipse(t, e, r, i, this._transform.clone()),
        this
    }
    circle(t, e, r) {
        return this._tick++,
        this._activePath.circle(t, e, r, this._transform.clone()),
        this
    }
    path(t) {
        return this._tick++,
        this._activePath.addPath(t, this._transform.clone()),
        this
    }
    lineTo(t, e) {
        this._tick++;
        const r = this._transform;
        return this._activePath.lineTo(r.a * t + r.c * e + r.tx, r.b * t + r.d * e + r.ty),
        this
    }
    moveTo(t, e) {
        this._tick++;
        const r = this._transform
          , i = this._activePath.instructions
          , s = r.a * t + r.c * e + r.tx
          , o = r.b * t + r.d * e + r.ty;
        return i.length === 1 && i[0].action === "moveTo" ? (i[0].data[0] = s,
        i[0].data[1] = o,
        this) : (this._activePath.moveTo(s, o),
        this)
    }
    quadraticCurveTo(t, e, r, i, s) {
        this._tick++;
        const o = this._transform;
        return this._activePath.quadraticCurveTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * r + o.c * i + o.tx, o.b * r + o.d * i + o.ty, s),
        this
    }
    rect(t, e, r, i) {
        return this._tick++,
        this._activePath.rect(t, e, r, i, this._transform.clone()),
        this
    }
    roundRect(t, e, r, i, s) {
        return this._tick++,
        this._activePath.roundRect(t, e, r, i, s, this._transform.clone()),
        this
    }
    poly(t, e) {
        return this._tick++,
        this._activePath.poly(t, e, this._transform.clone()),
        this
    }
    regularPoly(t, e, r, i, s=0, o) {
        return this._tick++,
        this._activePath.regularPoly(t, e, r, i, s, o),
        this
    }
    roundPoly(t, e, r, i, s, o) {
        return this._tick++,
        this._activePath.roundPoly(t, e, r, i, s, o),
        this
    }
    roundShape(t, e, r, i) {
        return this._tick++,
        this._activePath.roundShape(t, e, r, i),
        this
    }
    filletRect(t, e, r, i, s) {
        return this._tick++,
        this._activePath.filletRect(t, e, r, i, s),
        this
    }
    chamferRect(t, e, r, i, s, o) {
        return this._tick++,
        this._activePath.chamferRect(t, e, r, i, s, o),
        this
    }
    star(t, e, r, i, s=0, o=0) {
        return this._tick++,
        this._activePath.star(t, e, r, i, s, o, this._transform.clone()),
        this
    }
    svg(t) {
        return this._tick++,
        cb(t, this),
        this
    }
    restore() {
        const t = this._stateStack.pop();
        return t && (this._transform = t.transform,
        this._fillStyle = t.fillStyle,
        this._strokeStyle = t.strokeStyle),
        this
    }
    save() {
        return this._stateStack.push({
            transform: this._transform.clone(),
            fillStyle: {
                ...this._fillStyle
            },
            strokeStyle: {
                ...this._strokeStyle
            }
        }),
        this
    }
    getTransform() {
        return this._transform
    }
    resetTransform() {
        return this._transform.identity(),
        this
    }
    rotate(t) {
        return this._transform.rotate(t),
        this
    }
    scale(t, e=t) {
        return this._transform.scale(t, e),
        this
    }
    setTransform(t, e, r, i, s, o) {
        return t instanceof Ot ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty),
        this) : (this._transform.set(t, e, r, i, s, o),
        this)
    }
    transform(t, e, r, i, s, o) {
        return t instanceof Ot ? (this._transform.append(t),
        this) : (kd.set(t, e, r, i, s, o),
        this._transform.append(kd),
        this)
    }
    translate(t, e=t) {
        return this._transform.translate(t, e),
        this
    }
    clear() {
        return this._activePath.clear(),
        this.instructions.length = 0,
        this.resetTransform(),
        this.onUpdate(),
        this
    }
    onUpdate() {
        this.dirty || (this.emit("update", this, 16),
        this.dirty = !0,
        this._boundsDirty = !0)
    }
    get bounds() {
        if (!this._boundsDirty)
            return this._bounds;
        const t = this._bounds;
        t.clear();
        for (let e = 0; e < this.instructions.length; e++) {
            const r = this.instructions[e]
              , i = r.action;
            if (i === "fill") {
                const s = r.data;
                t.addBounds(s.path.bounds)
            } else if (i === "texture") {
                const s = r.data;
                t.addFrame(s.dx, s.dy, s.dx + s.dw, s.dy + s.dh, s.transform)
            }
            if (i === "stroke") {
                const s = r.data
                  , o = s.style.width / 2
                  , a = s.path.bounds;
                t.addFrame(a.minX - o, a.minY - o, a.maxX + o, a.maxY + o)
            }
        }
        return t
    }
    containsPoint(t) {
        if (!this.bounds.containsPoint(t.x, t.y))
            return !1;
        const e = this.instructions;
        let r = !1;
        for (let i = 0; i < e.length; i++) {
            const s = e[i]
              , o = s.data
              , a = o.path;
            if (!s.action || !a)
                continue;
            const l = o.style
              , u = a.shapePath.shapePrimitives;
            for (let c = 0; c < u.length; c++) {
                const f = u[c].shape;
                if (!l || !f)
                    continue;
                const d = u[c].transform
                  , h = d ? d.applyInverse(t, mb) : t;
                s.action === "fill" ? r = f.contains(h.x, h.y) : r = f.strokeContains(h.x, h.y, l.width);
                const m = o.hole;
                if (m) {
                    const p = m.shapePath?.shapePrimitives;
                    if (p)
                        for (let g = 0; g < p.length; g++)
                            p[g].shape.contains(h.x, h.y) && (r = !1)
                }
                if (r)
                    return !0
            }
        }
        return r
    }
    destroy(t=!1) {
        if (this._stateStack.length = 0,
        this._transform = null,
        this.emit("destroy", this),
        this.removeAllListeners(),
        typeof t == "boolean" ? t : t?.texture) {
            const r = typeof t == "boolean" ? t : t?.textureSource;
            this._fillStyle.texture && this._fillStyle.texture.destroy(r),
            this._strokeStyle.texture && this._strokeStyle.texture.destroy(r)
        }
        this._fillStyle = null,
        this._strokeStyle = null,
        this.instructions = null,
        this._activePath = null,
        this._bounds = null,
        this._stateStack = null,
        this.customShader = null,
        this._transform = null
    }
}
;
Kh.defaultFillStyle = {
    color: 16777215,
    alpha: 1,
    texture: ct.WHITE,
    matrix: null,
    fill: null
};
Kh.defaultStrokeStyle = {
    width: 1,
    color: 16777215,
    alpha: 1,
    alignment: .5,
    miterLimit: 10,
    cap: "butt",
    join: "miter",
    texture: ct.WHITE,
    matrix: null,
    fill: null
};
let kr = Kh;
const zd = ["align", "breakWords", "cssOverrides", "fontVariant", "fontWeight", "leading", "letterSpacing", "lineHeight", "padding", "textBaseline", "trim", "whiteSpace", "wordWrap", "wordWrapWidth", "fontFamily", "fontStyle", "fontSize"];
function gb(n) {
    const t = [];
    let e = 0;
    for (let r = 0; r < zd.length; r++) {
        const i = `_${zd[r]}`;
        t[e++] = n[i]
    }
    return e = Yg(n._fill, t, e),
    e = xb(n._stroke, t, e),
    e = vb(n.dropShadow, t, e),
    t.join("-")
}
function Yg(n, t, e) {
    return n && (t[e++] = n.color,
    t[e++] = n.alpha,
    t[e++] = n.fill?.styleKey),
    e
}
function xb(n, t, e) {
    return n && (e = Yg(n, t, e),
    t[e++] = n.width,
    t[e++] = n.alignment,
    t[e++] = n.cap,
    t[e++] = n.join,
    t[e++] = n.miterLimit),
    e
}
function vb(n, t, e) {
    return n && (t[e++] = n.alpha,
    t[e++] = n.angle,
    t[e++] = n.blur,
    t[e++] = n.distance,
    t[e++] = At.shared.setValue(n.color).toNumber()),
    e
}
const Zh = class ss extends Jr {
    constructor(t={}) {
        super(),
        _b(t);
        const e = {
            ...ss.defaultTextStyle,
            ...t
        };
        for (const r in e) {
            const i = r;
            this[i] = e[r]
        }
        this.update()
    }
    get align() {
        return this._align
    }
    set align(t) {
        this._align = t,
        this.update()
    }
    get breakWords() {
        return this._breakWords
    }
    set breakWords(t) {
        this._breakWords = t,
        this.update()
    }
    get dropShadow() {
        return this._dropShadow
    }
    set dropShadow(t) {
        t !== null && typeof t == "object" ? this._dropShadow = this._createProxy({
            ...ss.defaultDropShadow,
            ...t
        }) : this._dropShadow = t ? this._createProxy({
            ...ss.defaultDropShadow
        }) : null,
        this.update()
    }
    get fontFamily() {
        return this._fontFamily
    }
    set fontFamily(t) {
        this._fontFamily = t,
        this.update()
    }
    get fontSize() {
        return this._fontSize
    }
    set fontSize(t) {
        typeof t == "string" ? this._fontSize = parseInt(t, 10) : this._fontSize = t,
        this.update()
    }
    get fontStyle() {
        return this._fontStyle
    }
    set fontStyle(t) {
        this._fontStyle = t.toLowerCase(),
        this.update()
    }
    get fontVariant() {
        return this._fontVariant
    }
    set fontVariant(t) {
        this._fontVariant = t,
        this.update()
    }
    get fontWeight() {
        return this._fontWeight
    }
    set fontWeight(t) {
        this._fontWeight = t,
        this.update()
    }
    get leading() {
        return this._leading
    }
    set leading(t) {
        this._leading = t,
        this.update()
    }
    get letterSpacing() {
        return this._letterSpacing
    }
    set letterSpacing(t) {
        this._letterSpacing = t,
        this.update()
    }
    get lineHeight() {
        return this._lineHeight
    }
    set lineHeight(t) {
        this._lineHeight = t,
        this.update()
    }
    get padding() {
        return this._padding
    }
    set padding(t) {
        this._padding = t,
        this.update()
    }
    get trim() {
        return this._trim
    }
    set trim(t) {
        this._trim = t,
        this.update()
    }
    get textBaseline() {
        return this._textBaseline
    }
    set textBaseline(t) {
        this._textBaseline = t,
        this.update()
    }
    get whiteSpace() {
        return this._whiteSpace
    }
    set whiteSpace(t) {
        this._whiteSpace = t,
        this.update()
    }
    get wordWrap() {
        return this._wordWrap
    }
    set wordWrap(t) {
        this._wordWrap = t,
        this.update()
    }
    get wordWrapWidth() {
        return this._wordWrapWidth
    }
    set wordWrapWidth(t) {
        this._wordWrapWidth = t,
        this.update()
    }
    get fill() {
        return this._originalFill
    }
    set fill(t) {
        t !== this._originalFill && (this._originalFill = t,
        this._isFillStyle(t) && (this._originalFill = this._createProxy({
            ...kr.defaultFillStyle,
            ...t
        }, () => {
            this._fill = Ti({
                ...this._originalFill
            }, kr.defaultFillStyle)
        }
        )),
        this._fill = Ti(t === 0 ? "black" : t, kr.defaultFillStyle),
        this.update())
    }
    get stroke() {
        return this._originalStroke
    }
    set stroke(t) {
        t !== this._originalStroke && (this._originalStroke = t,
        this._isFillStyle(t) && (this._originalStroke = this._createProxy({
            ...kr.defaultStrokeStyle,
            ...t
        }, () => {
            this._stroke = Tl({
                ...this._originalStroke
            }, kr.defaultStrokeStyle)
        }
        )),
        this._stroke = Tl(t, kr.defaultStrokeStyle),
        this.update())
    }
    _generateKey() {
        return this._styleKey = gb(this),
        this._styleKey
    }
    update() {
        this._styleKey = null,
        this.emit("update", this)
    }
    reset() {
        const t = ss.defaultTextStyle;
        for (const e in t)
            this[e] = t[e]
    }
    get styleKey() {
        return this._styleKey || this._generateKey()
    }
    clone() {
        return new ss({
            align: this.align,
            breakWords: this.breakWords,
            dropShadow: this._dropShadow ? {
                ...this._dropShadow
            } : null,
            fill: this._fill,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            fontStyle: this.fontStyle,
            fontVariant: this.fontVariant,
            fontWeight: this.fontWeight,
            leading: this.leading,
            letterSpacing: this.letterSpacing,
            lineHeight: this.lineHeight,
            padding: this.padding,
            stroke: this._stroke,
            textBaseline: this.textBaseline,
            whiteSpace: this.whiteSpace,
            wordWrap: this.wordWrap,
            wordWrapWidth: this.wordWrapWidth
        })
    }
    destroy(t=!1) {
        if (this.removeAllListeners(),
        typeof t == "boolean" ? t : t?.texture) {
            const r = typeof t == "boolean" ? t : t?.textureSource;
            this._fill?.texture && this._fill.texture.destroy(r),
            this._originalFill?.texture && this._originalFill.texture.destroy(r),
            this._stroke?.texture && this._stroke.texture.destroy(r),
            this._originalStroke?.texture && this._originalStroke.texture.destroy(r)
        }
        this._fill = null,
        this._stroke = null,
        this.dropShadow = null,
        this._originalStroke = null,
        this._originalFill = null
    }
    _createProxy(t, e) {
        return new Proxy(t,{
            set: (r, i, s) => (r[i] = s,
            e?.(i, s),
            this.update(),
            !0)
        })
    }
    _isFillStyle(t) {
        return (t ?? null) !== null && !(At.isColorLike(t) || t instanceof Zo || t instanceof Wl)
    }
}
;
Zh.defaultDropShadow = {
    alpha: 1,
    angle: Math.PI / 6,
    blur: 0,
    color: "black",
    distance: 5
};
Zh.defaultTextStyle = {
    align: "left",
    breakWords: !1,
    dropShadow: null,
    fill: "black",
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    leading: 0,
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    stroke: null,
    textBaseline: "alphabetic",
    trim: !1,
    whiteSpace: "pre",
    wordWrap: !1,
    wordWrapWidth: 100
};
let ta = Zh;
function _b(n) {
    const t = n;
    if (typeof t.dropShadow == "boolean" && t.dropShadow) {
        const e = ta.defaultDropShadow;
        n.dropShadow = {
            alpha: t.dropShadowAlpha ?? e.alpha,
            angle: t.dropShadowAngle ?? e.angle,
            blur: t.dropShadowBlur ?? e.blur,
            color: t.dropShadowColor ?? e.color,
            distance: t.dropShadowDistance ?? e.distance
        }
    }
    if (t.strokeThickness !== void 0) {
        J(zt, "strokeThickness is now a part of stroke");
        const e = t.stroke;
        let r = {};
        if (At.isColorLike(e))
            r.color = e;
        else if (e instanceof Zo || e instanceof Wl)
            r.fill = e;
        else if (Object.hasOwnProperty.call(e, "color") || Object.hasOwnProperty.call(e, "fill"))
            r = e;
        else
            throw new Error("Invalid stroke value.");
        n.stroke = {
            ...r,
            width: t.strokeThickness
        }
    }
    if (Array.isArray(t.fillGradientStops)) {
        J(zt, "gradient fill is now a fill pattern: `new FillGradient(...)`");
        let e;
        n.fontSize == null ? n.fontSize = ta.defaultTextStyle.fontSize : typeof n.fontSize == "string" ? e = parseInt(n.fontSize, 10) : e = n.fontSize;
        const r = new Zo(0,0,0,e * 1.7)
          , i = t.fillGradientStops.map(s => At.shared.setValue(s).toNumber());
        i.forEach( (s, o) => {
            const a = o / (i.length - 1);
            r.addColorStop(a, s)
        }
        ),
        n.fill = {
            fill: r
        }
    }
}
class yb {
    constructor(t) {
        this._canvasPool = Object.create(null),
        this.canvasOptions = t || {},
        this.enableFullScreen = !1
    }
    _createCanvasAndContext(t, e) {
        const r = Jt.get().createCanvas();
        r.width = t,
        r.height = e;
        const i = r.getContext("2d");
        return {
            canvas: r,
            context: i
        }
    }
    getOptimalCanvasAndContext(t, e, r=1) {
        t = Math.ceil(t * r - 1e-6),
        e = Math.ceil(e * r - 1e-6),
        t = bl(t),
        e = bl(e);
        const i = (t << 17) + (e << 1);
        this._canvasPool[i] || (this._canvasPool[i] = []);
        let s = this._canvasPool[i].pop();
        return s || (s = this._createCanvasAndContext(t, e)),
        s
    }
    returnCanvasAndContext(t) {
        const e = t.canvas
          , {width: r, height: i} = e
          , s = (r << 17) + (i << 1);
        t.context.clearRect(0, 0, r, i),
        this._canvasPool[s].push(t)
    }
    clear() {
        this._canvasPool = {}
    }
}
const Rd = new yb
  , bb = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
function $c(n) {
    const t = typeof n.fontSize == "number" ? `${n.fontSize}px` : n.fontSize;
    let e = n.fontFamily;
    Array.isArray(n.fontFamily) || (e = n.fontFamily.split(","));
    for (let r = e.length - 1; r >= 0; r--) {
        let i = e[r].trim();
        !/([\"\'])[^\'\"]+\1/.test(i) && !bb.includes(i) && (i = `"${i}"`),
        e[r] = i
    }
    return `${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`
}
const zu = {
    willReadFrequently: !0
}
  , tn = class Z {
    static get experimentalLetterSpacingSupported() {
        let t = Z._experimentalLetterSpacingSupported;
        if (t !== void 0) {
            const e = Jt.get().getCanvasRenderingContext2D().prototype;
            t = Z._experimentalLetterSpacingSupported = "letterSpacing"in e || "textLetterSpacing"in e
        }
        return t
    }
    constructor(t, e, r, i, s, o, a, l, u) {
        this.text = t,
        this.style = e,
        this.width = r,
        this.height = i,
        this.lines = s,
        this.lineWidths = o,
        this.lineHeight = a,
        this.maxLineWidth = l,
        this.fontProperties = u
    }
    static measureText(t=" ", e, r=Z._canvas, i=e.wordWrap) {
        const s = `${t}:${e.styleKey}`;
        if (Z._measurementCache[s])
            return Z._measurementCache[s];
        const o = $c(e)
          , a = Z.measureFont(o);
        a.fontSize === 0 && (a.fontSize = e.fontSize,
        a.ascent = e.fontSize);
        const l = Z.__context;
        l.font = o;
        const c = (i ? Z._wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/)
          , f = new Array(c.length);
        let d = 0;
        for (let v = 0; v < c.length; v++) {
            const _ = Z._measureText(c[v], e.letterSpacing, l);
            f[v] = _,
            d = Math.max(d, _)
        }
        const h = e._stroke?.width || 0;
        let m = d + h;
        e.dropShadow && (m += e.dropShadow.distance);
        const p = e.lineHeight || a.fontSize;
        let g = Math.max(p, a.fontSize + h) + (c.length - 1) * (p + e.leading);
        return e.dropShadow && (g += e.dropShadow.distance),
        new Z(t,e,m,g,c,f,p + e.leading,d,a)
    }
    static _measureText(t, e, r) {
        let i = !1;
        Z.experimentalLetterSpacingSupported && (Z.experimentalLetterSpacing ? (r.letterSpacing = `${e}px`,
        r.textLetterSpacing = `${e}px`,
        i = !0) : (r.letterSpacing = "0px",
        r.textLetterSpacing = "0px"));
        const s = r.measureText(t);
        let o = s.width;
        const a = -s.actualBoundingBoxLeft;
        let u = s.actualBoundingBoxRight - a;
        if (o > 0)
            if (i)
                o -= e,
                u -= e;
            else {
                const c = (Z.graphemeSegmenter(t).length - 1) * e;
                o += c,
                u += c
            }
        return Math.max(o, u)
    }
    static _wordWrap(t, e, r=Z._canvas) {
        const i = r.getContext("2d", zu);
        let s = 0
          , o = ""
          , a = "";
        const l = Object.create(null)
          , {letterSpacing: u, whiteSpace: c} = e
          , f = Z._collapseSpaces(c)
          , d = Z._collapseNewlines(c);
        let h = !f;
        const m = e.wordWrapWidth + u
          , p = Z._tokenize(t);
        for (let g = 0; g < p.length; g++) {
            let x = p[g];
            if (Z._isNewline(x)) {
                if (!d) {
                    a += Z._addLine(o),
                    h = !f,
                    o = "",
                    s = 0;
                    continue
                }
                x = " "
            }
            if (f) {
                const _ = Z.isBreakingSpace(x)
                  , y = Z.isBreakingSpace(o[o.length - 1]);
                if (_ && y)
                    continue
            }
            const v = Z._getFromCache(x, u, l, i);
            if (v > m)
                if (o !== "" && (a += Z._addLine(o),
                o = "",
                s = 0),
                Z.canBreakWords(x, e.breakWords)) {
                    const _ = Z.wordWrapSplit(x);
                    for (let y = 0; y < _.length; y++) {
                        let S = _[y]
                          , O = S
                          , w = 1;
                        for (; _[y + w]; ) {
                            const T = _[y + w];
                            if (!Z.canBreakChars(O, T, x, y, e.breakWords))
                                S += T;
                            else
                                break;
                            O = T,
                            w++
                        }
                        y += w - 1;
                        const P = Z._getFromCache(S, u, l, i);
                        P + s > m && (a += Z._addLine(o),
                        h = !1,
                        o = "",
                        s = 0),
                        o += S,
                        s += P
                    }
                } else {
                    o.length > 0 && (a += Z._addLine(o),
                    o = "",
                    s = 0);
                    const _ = g === p.length - 1;
                    a += Z._addLine(x, !_),
                    h = !1,
                    o = "",
                    s = 0
                }
            else
                v + s > m && (h = !1,
                a += Z._addLine(o),
                o = "",
                s = 0),
                (o.length > 0 || !Z.isBreakingSpace(x) || h) && (o += x,
                s += v)
        }
        return a += Z._addLine(o, !1),
        a
    }
    static _addLine(t, e=!0) {
        return t = Z._trimRight(t),
        t = e ? `${t}
` : t,
        t
    }
    static _getFromCache(t, e, r, i) {
        let s = r[t];
        return typeof s != "number" && (s = Z._measureText(t, e, i) + e,
        r[t] = s),
        s
    }
    static _collapseSpaces(t) {
        return t === "normal" || t === "pre-line"
    }
    static _collapseNewlines(t) {
        return t === "normal"
    }
    static _trimRight(t) {
        if (typeof t != "string")
            return "";
        for (let e = t.length - 1; e >= 0; e--) {
            const r = t[e];
            if (!Z.isBreakingSpace(r))
                break;
            t = t.slice(0, -1)
        }
        return t
    }
    static _isNewline(t) {
        return typeof t != "string" ? !1 : Z._newlines.includes(t.charCodeAt(0))
    }
    static isBreakingSpace(t, e) {
        return typeof t != "string" ? !1 : Z._breakingSpaces.includes(t.charCodeAt(0))
    }
    static _tokenize(t) {
        const e = [];
        let r = "";
        if (typeof t != "string")
            return e;
        for (let i = 0; i < t.length; i++) {
            const s = t[i]
              , o = t[i + 1];
            if (Z.isBreakingSpace(s, o) || Z._isNewline(s)) {
                r !== "" && (e.push(r),
                r = ""),
                e.push(s);
                continue
            }
            r += s
        }
        return r !== "" && e.push(r),
        e
    }
    static canBreakWords(t, e) {
        return e
    }
    static canBreakChars(t, e, r, i, s) {
        return !0
    }
    static wordWrapSplit(t) {
        return Z.graphemeSegmenter(t)
    }
    static measureFont(t) {
        if (Z._fonts[t])
            return Z._fonts[t];
        const e = Z._context;
        e.font = t;
        const r = e.measureText(Z.METRICS_STRING + Z.BASELINE_SYMBOL)
          , i = {
            ascent: r.actualBoundingBoxAscent,
            descent: r.actualBoundingBoxDescent,
            fontSize: r.actualBoundingBoxAscent + r.actualBoundingBoxDescent
        };
        return Z._fonts[t] = i,
        i
    }
    static clearMetrics(t="") {
        t ? delete Z._fonts[t] : Z._fonts = {}
    }
    static get _canvas() {
        if (!Z.__canvas) {
            let t;
            try {
                const e = new OffscreenCanvas(0,0);
                if (e.getContext("2d", zu)?.measureText)
                    return Z.__canvas = e,
                    e;
                t = Jt.get().createCanvas()
            } catch {
                t = Jt.get().createCanvas()
            }
            t.width = t.height = 10,
            Z.__canvas = t
        }
        return Z.__canvas
    }
    static get _context() {
        return Z.__context || (Z.__context = Z._canvas.getContext("2d", zu)),
        Z.__context
    }
}
;
tn.METRICS_STRING = "|ÉqÅ";
tn.BASELINE_SYMBOL = "M";
tn.BASELINE_MULTIPLIER = 1.4;
tn.HEIGHT_MULTIPLIER = 2;
tn.graphemeSegmenter = ( () => {
    if (typeof Intl?.Segmenter == "function") {
        const n = new Intl.Segmenter;
        return t => [...n.segment(t)].map(e => e.segment)
    }
    return n => [...n]
}
)();
tn.experimentalLetterSpacing = !1;
tn._fonts = {};
tn._newlines = [10, 13];
tn._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
tn._measurementCache = {};
let Ld = tn;
function Dd(n, t) {
    if (n.texture === ct.WHITE && !n.fill)
        return At.shared.setValue(n.color).setAlpha(n.alpha ?? 1).toHexa();
    if (n.fill) {
        if (n.fill instanceof Wl) {
            const e = n.fill
              , r = t.createPattern(e.texture.source.resource, "repeat")
              , i = e.transform.copyTo(Ot.shared);
            return i.scale(e.texture.frame.width, e.texture.frame.height),
            r.setTransform(i),
            r
        } else if (n.fill instanceof Zo) {
            const e = n.fill;
            if (e.type === "linear") {
                const r = t.createLinearGradient(e.x0, e.y0, e.x1, e.y1);
                return e.gradientStops.forEach(i => {
                    r.addColorStop(i.offset, At.shared.setValue(i.color).toHex())
                }
                ),
                r
            }
        }
    } else {
        const e = t.createPattern(n.texture.source.resource, "repeat")
          , r = n.matrix.copyTo(Ot.shared);
        return r.scale(n.texture.frame.width, n.texture.frame.height),
        e.setTransform(r),
        e
    }
    return ge("FillStyle not recognised", n),
    "red"
}
function jg(n) {
    if (n === "")
        return [];
    typeof n == "string" && (n = [n]);
    const t = [];
    for (let e = 0, r = n.length; e < r; e++) {
        const i = n[e];
        if (Array.isArray(i)) {
            if (i.length !== 2)
                throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);
            if (i[0].length === 0 || i[1].length === 0)
                throw new Error("[BitmapFont]: Invalid character delimiter.");
            const s = i[0].charCodeAt(0)
              , o = i[1].charCodeAt(0);
            if (o < s)
                throw new Error("[BitmapFont]: Invalid character range.");
            for (let a = s, l = o; a <= l; a++)
                t.push(String.fromCharCode(a))
        } else
            t.push(...Array.from(i))
    }
    if (t.length === 0)
        throw new Error("[BitmapFont]: Empty set when resolving characters.");
    return t
}
const qg = class Kg extends Og {
    constructor(t) {
        super(),
        this.resolution = 1,
        this.pages = [],
        this._padding = 0,
        this._measureCache = Object.create(null),
        this._currentChars = [],
        this._currentX = 0,
        this._currentY = 0,
        this._currentPageIndex = -1,
        this._skipKerning = !1;
        const e = {
            ...Kg.defaultOptions,
            ...t
        };
        this._textureSize = e.textureSize,
        this._mipmap = e.mipmap;
        const r = e.style.clone();
        e.overrideFill && (r._fill.color = 16777215,
        r._fill.alpha = 1,
        r._fill.texture = ct.WHITE,
        r._fill.fill = null),
        this.applyFillAsTint = e.overrideFill;
        const i = r.fontSize;
        r.fontSize = this.baseMeasurementFontSize;
        const s = $c(r);
        e.overrideSize ? r._stroke && (r._stroke.width *= this.baseRenderedFontSize / i) : r.fontSize = this.baseRenderedFontSize = i,
        this._style = r,
        this._skipKerning = e.skipKerning ?? !1,
        this.resolution = e.resolution ?? 1,
        this._padding = e.padding ?? 4,
        this.fontMetrics = Ld.measureFont(s),
        this.lineHeight = r.lineHeight || this.fontMetrics.fontSize || r.fontSize
    }
    ensureCharacters(t) {
        const e = jg(t).filter(m => !this._currentChars.includes(m)).filter( (m, p, g) => g.indexOf(m) === p);
        if (!e.length)
            return;
        this._currentChars = [...this._currentChars, ...e];
        let r;
        this._currentPageIndex === -1 ? r = this._nextPage() : r = this.pages[this._currentPageIndex];
        let {canvas: i, context: s} = r.canvasAndContext
          , o = r.texture.source;
        const a = this._style;
        let l = this._currentX
          , u = this._currentY;
        const c = this.baseRenderedFontSize / this.baseMeasurementFontSize
          , f = this._padding * c;
        let d = 0
          , h = !1;
        for (let m = 0; m < e.length; m++) {
            const p = e[m]
              , g = Ld.measureText(p, a, i, !1)
              , x = Math.ceil((a.fontStyle === "italic" ? 2 : 1) * g.width);
            g.lineHeight = g.height;
            const v = g.width * c
              , _ = g.height * c
              , y = x + f * 2
              , S = _ + f * 2;
            if (h = !1,
            p !== `
` && p !== "\r" && p !== "	" && p !== " " && (h = !0,
            d = Math.ceil(Math.max(S, d))),
            l + y > this._textureSize && (u += d,
            d = S,
            l = 0,
            u + d > this._textureSize)) {
                o.update();
                const w = this._nextPage();
                i = w.canvasAndContext.canvas,
                s = w.canvasAndContext.context,
                o = w.texture.source,
                u = 0
            }
            const O = v / c - (a.dropShadow?.distance ?? 0) - (a._stroke?.width ?? 0);
            if (this.chars[p] = {
                id: p.codePointAt(0),
                xOffset: -this._padding,
                yOffset: -this._padding,
                xAdvance: O,
                kerning: {}
            },
            h) {
                this._drawGlyph(s, g, l + f, u + f, c, a);
                const w = o.width * c
                  , P = o.height * c
                  , T = new ce(l / w * o.width,u / P * o.height,y / w * o.width,S / P * o.height);
                this.chars[p].texture = new ct({
                    source: o,
                    frame: T
                }),
                l += Math.ceil(y)
            }
        }
        o.update(),
        this._currentX = l,
        this._currentY = u,
        this._skipKerning && this._applyKerning(e, s)
    }
    get pageTextures() {
        return J(zt, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),
        this.pages
    }
    _applyKerning(t, e) {
        const r = this._measureCache;
        for (let i = 0; i < t.length; i++) {
            const s = t[i];
            for (let o = 0; o < this._currentChars.length; o++) {
                const a = this._currentChars[o];
                let l = r[s];
                l || (l = r[s] = e.measureText(s).width);
                let u = r[a];
                u || (u = r[a] = e.measureText(a).width);
                let c = e.measureText(s + a).width
                  , f = c - (l + u);
                f && (this.chars[s].kerning[a] = f),
                c = e.measureText(s + a).width,
                f = c - (l + u),
                f && (this.chars[a].kerning[s] = f)
            }
        }
    }
    _nextPage() {
        this._currentPageIndex++;
        const t = this.resolution
          , e = Rd.getOptimalCanvasAndContext(this._textureSize, this._textureSize, t);
        this._setupContext(e.context, this._style, t);
        const r = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize)
          , i = new ct({
            source: new Ki({
                resource: e.canvas,
                resolution: r,
                alphaMode: "premultiply-alpha-on-upload",
                autoGenerateMipmaps: this._mipmap
            })
        })
          , s = {
            canvasAndContext: e,
            texture: i
        };
        return this.pages[this._currentPageIndex] = s,
        s
    }
    _setupContext(t, e, r) {
        e.fontSize = this.baseRenderedFontSize,
        t.scale(r, r),
        t.font = $c(e),
        e.fontSize = this.baseMeasurementFontSize,
        t.textBaseline = e.textBaseline;
        const i = e._stroke
          , s = i?.width ?? 0;
        if (i && (t.lineWidth = s,
        t.lineJoin = i.join,
        t.miterLimit = i.miterLimit,
        t.strokeStyle = Dd(i, t)),
        e._fill && (t.fillStyle = Dd(e._fill, t)),
        e.dropShadow) {
            const o = e.dropShadow
              , a = At.shared.setValue(o.color).toArray()
              , l = o.blur * r
              , u = o.distance * r;
            t.shadowColor = `rgba(${a[0] * 255},${a[1] * 255},${a[2] * 255},${o.alpha})`,
            t.shadowBlur = l,
            t.shadowOffsetX = Math.cos(o.angle) * u,
            t.shadowOffsetY = Math.sin(o.angle) * u
        } else
            t.shadowColor = "black",
            t.shadowBlur = 0,
            t.shadowOffsetX = 0,
            t.shadowOffsetY = 0
    }
    _drawGlyph(t, e, r, i, s, o) {
        const a = e.text
          , l = e.fontProperties
          , c = (o._stroke?.width ?? 0) * s
          , f = r + c / 2
          , d = i - c / 2
          , h = l.descent * s
          , m = e.lineHeight * s;
        o.stroke && c && t.strokeText(a, f, d + m - h),
        o._fill && t.fillText(a, f, d + m - h)
    }
    destroy() {
        super.destroy();
        for (let t = 0; t < this.pages.length; t++) {
            const {canvasAndContext: e, texture: r} = this.pages[t];
            Rd.returnCanvasAndContext(e),
            r.destroy(!0)
        }
        this.pages = null
    }
}
;
qg.defaultOptions = {
    textureSize: 512,
    style: new ta,
    mipmap: !0
};
let Bd = qg;
function Sb(n, t, e, r) {
    const i = {
        width: 0,
        height: 0,
        offsetY: 0,
        scale: t.fontSize / e.baseMeasurementFontSize,
        lines: [{
            width: 0,
            charPositions: [],
            spaceWidth: 0,
            spacesIndex: [],
            chars: []
        }]
    };
    i.offsetY = e.baseLineOffset;
    let s = i.lines[0]
      , o = null
      , a = !0;
    const l = {
        spaceWord: !1,
        width: 0,
        start: 0,
        index: 0,
        positions: [],
        chars: []
    }
      , u = m => {
        const p = s.width;
        for (let g = 0; g < l.index; g++) {
            const x = m.positions[g];
            s.chars.push(m.chars[g]),
            s.charPositions.push(x + p)
        }
        s.width += m.width,
        a = !1,
        l.width = 0,
        l.index = 0,
        l.chars.length = 0
    }
      , c = () => {
        let m = s.chars.length - 1;
        if (r) {
            let p = s.chars[m];
            for (; p === " "; )
                s.width -= e.chars[p].xAdvance,
                p = s.chars[--m]
        }
        i.width = Math.max(i.width, s.width),
        s = {
            width: 0,
            charPositions: [],
            chars: [],
            spaceWidth: 0,
            spacesIndex: []
        },
        a = !0,
        i.lines.push(s),
        i.height += e.lineHeight
    }
      , f = e.baseMeasurementFontSize / t.fontSize
      , d = t.letterSpacing * f
      , h = t.wordWrapWidth * f;
    for (let m = 0; m < n.length + 1; m++) {
        let p;
        const g = m === n.length;
        g || (p = n[m]);
        const x = e.chars[p] || e.chars[" "];
        if (/(?:\s)/.test(p) || p === "\r" || p === `
` || g) {
            if (!a && t.wordWrap && s.width + l.width - d > h ? (c(),
            u(l),
            g || s.charPositions.push(0)) : (l.start = s.width,
            u(l),
            g || s.charPositions.push(0)),
            p === "\r" || p === `
`)
                s.width !== 0 && c();
            else if (!g) {
                const S = x.xAdvance + (x.kerning[o] || 0) + d;
                s.width += S,
                s.spaceWidth = S,
                s.spacesIndex.push(s.charPositions.length),
                s.chars.push(p)
            }
        } else {
            const y = x.kerning[o] || 0
              , S = x.xAdvance + y + d;
            l.positions[l.index++] = l.width + y,
            l.chars.push(p),
            l.width += S
        }
        o = p
    }
    return c(),
    t.align === "center" ? wb(i) : t.align === "right" ? Cb(i) : t.align === "justify" && Tb(i),
    i
}
function wb(n) {
    for (let t = 0; t < n.lines.length; t++) {
        const e = n.lines[t]
          , r = n.width / 2 - e.width / 2;
        for (let i = 0; i < e.charPositions.length; i++)
            e.charPositions[i] += r
    }
}
function Cb(n) {
    for (let t = 0; t < n.lines.length; t++) {
        const e = n.lines[t]
          , r = n.width - e.width;
        for (let i = 0; i < e.charPositions.length; i++)
            e.charPositions[i] += r
    }
}
function Tb(n) {
    const t = n.width;
    for (let e = 0; e < n.lines.length; e++) {
        const r = n.lines[e];
        let i = 0
          , s = r.spacesIndex[i++]
          , o = 0;
        const a = r.spacesIndex.length
          , u = (t - r.width) / a;
        for (let c = 0; c < r.charPositions.length; c++)
            c === s && (s = r.spacesIndex[i++],
            o += u),
            r.charPositions[c] += o
    }
}
let Pa = 0;
class Ab {
    constructor() {
        this.ALPHA = [["a", "z"], ["A", "Z"], " "],
        this.NUMERIC = [["0", "9"]],
        this.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "],
        this.ASCII = [[" ", "~"]],
        this.defaultOptions = {
            chars: this.ALPHANUMERIC,
            resolution: 1,
            padding: 4,
            skipKerning: !1
        }
    }
    getFont(t, e) {
        let r = `${e.fontFamily}-bitmap`
          , i = !0;
        if (e._fill.fill && !e._stroke)
            r += e._fill.fill.styleKey,
            i = !1;
        else if (e._stroke || e.dropShadow) {
            let o = e.styleKey;
            o = o.substring(0, o.lastIndexOf("-")),
            r = `${o}-bitmap`,
            i = !1
        }
        if (!ne.has(r)) {
            const o = new Bd({
                style: e,
                overrideFill: i,
                overrideSize: !0,
                ...this.defaultOptions
            });
            Pa++,
            Pa > 50 && ge("BitmapText", `You have dynamically created ${Pa} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),
            o.once("destroy", () => {
                Pa--,
                ne.remove(r)
            }
            ),
            ne.set(r, o)
        }
        const s = ne.get(r);
        return s.ensureCharacters?.(t),
        s
    }
    getLayout(t, e, r=!0) {
        const i = this.getFont(t, e);
        return Sb([...t], e, i, r)
    }
    measureText(t, e, r=!0) {
        return this.getLayout(t, e, r)
    }
    install(...t) {
        let e = t[0];
        typeof e == "string" && (e = {
            name: e,
            style: t[1],
            chars: t[2]?.chars,
            resolution: t[2]?.resolution,
            padding: t[2]?.padding,
            skipKerning: t[2]?.skipKerning
        },
        J(zt, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));
        const r = e?.name;
        if (!r)
            throw new Error("[BitmapFontManager] Property `name` is required.");
        e = {
            ...this.defaultOptions,
            ...e
        };
        const i = e.style
          , s = i instanceof ta ? i : new ta(i)
          , o = s._fill.fill !== null && s._fill.fill !== void 0
          , a = new Bd({
            style: s,
            overrideFill: o,
            skipKerning: e.skipKerning,
            padding: e.padding,
            resolution: e.resolution,
            overrideSize: !1
        })
          , l = jg(e.chars);
        return a.ensureCharacters(l.join("")),
        ne.set(`${r}-bitmap`, a),
        a.once("destroy", () => ne.remove(`${r}-bitmap`)),
        a
    }
    uninstall(t) {
        const e = `${t}-bitmap`
          , r = ne.get(e);
        r && r.destroy()
    }
}
const Ud = new Ab;
class Zg extends Og {
    constructor(t, e) {
        super();
        const {textures: r, data: i} = t;
        Object.keys(i.pages).forEach(s => {
            const o = i.pages[parseInt(s, 10)]
              , a = r[o.id];
            this.pages.push({
                texture: a
            })
        }
        ),
        Object.keys(i.chars).forEach(s => {
            const o = i.chars[s]
              , {frame: a, source: l} = r[o.page]
              , u = new ce(o.x + a.x,o.y + a.y,o.width,o.height)
              , c = new ct({
                source: l,
                frame: u
            });
            this.chars[s] = {
                id: s.codePointAt(0),
                xOffset: o.xOffset,
                yOffset: o.yOffset,
                xAdvance: o.xAdvance,
                kerning: o.kerning ?? {},
                texture: c
            }
        }
        ),
        this.baseRenderedFontSize = i.fontSize,
        this.baseMeasurementFontSize = i.fontSize,
        this.fontMetrics = {
            ascent: 0,
            descent: 0,
            fontSize: i.fontSize
        },
        this.baseLineOffset = i.baseLineOffset,
        this.lineHeight = i.lineHeight,
        this.fontFamily = i.fontFamily,
        this.distanceField = i.distanceField ?? {
            type: "none",
            range: 0
        },
        this.url = e
    }
    destroy() {
        super.destroy();
        for (let t = 0; t < this.pages.length; t++) {
            const {texture: e} = this.pages[t];
            e.destroy(!0)
        }
        this.pages = null
    }
    static install(t) {
        Ud.install(t)
    }
    static uninstall(t) {
        Ud.uninstall(t)
    }
}
const Ru = {
    test(n) {
        return typeof n == "string" && n.startsWith("info face=")
    },
    parse(n) {
        const t = n.match(/^[a-z]+\s+.+$/gm)
          , e = {
            info: [],
            common: [],
            page: [],
            char: [],
            chars: [],
            kerning: [],
            kernings: [],
            distanceField: []
        };
        for (const f in t) {
            const d = t[f].match(/^[a-z]+/gm)[0]
              , h = t[f].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm)
              , m = {};
            for (const p in h) {
                const g = h[p].split("=")
                  , x = g[0]
                  , v = g[1].replace(/"/gm, "")
                  , _ = parseFloat(v)
                  , y = isNaN(_) ? v : _;
                m[x] = y
            }
            e[d].push(m)
        }
        const r = {
            chars: {},
            pages: [],
            lineHeight: 0,
            fontSize: 0,
            fontFamily: "",
            distanceField: null,
            baseLineOffset: 0
        }
          , [i] = e.info
          , [s] = e.common
          , [o] = e.distanceField ?? [];
        o && (r.distanceField = {
            range: parseInt(o.distanceRange, 10),
            type: o.fieldType
        }),
        r.fontSize = parseInt(i.size, 10),
        r.fontFamily = i.face,
        r.lineHeight = parseInt(s.lineHeight, 10);
        const a = e.page;
        for (let f = 0; f < a.length; f++)
            r.pages.push({
                id: parseInt(a[f].id, 10) || 0,
                file: a[f].file
            });
        const l = {};
        r.baseLineOffset = r.lineHeight - parseInt(s.base, 10);
        const u = e.char;
        for (let f = 0; f < u.length; f++) {
            const d = u[f]
              , h = parseInt(d.id, 10);
            let m = d.letter ?? d.char ?? String.fromCharCode(h);
            m === "space" && (m = " "),
            l[h] = m,
            r.chars[m] = {
                id: h,
                page: parseInt(d.page, 10) || 0,
                x: parseInt(d.x, 10),
                y: parseInt(d.y, 10),
                width: parseInt(d.width, 10),
                height: parseInt(d.height, 10),
                xOffset: parseInt(d.xoffset, 10),
                yOffset: parseInt(d.yoffset, 10),
                xAdvance: parseInt(d.xadvance, 10),
                kerning: {}
            }
        }
        const c = e.kerning || [];
        for (let f = 0; f < c.length; f++) {
            const d = parseInt(c[f].first, 10)
              , h = parseInt(c[f].second, 10)
              , m = parseInt(c[f].amount, 10);
            r.chars[l[h]].kerning[l[d]] = m
        }
        return r
    }
}
  , $d = {
    test(n) {
        const t = n;
        return typeof t != "string" && "getElementsByTagName"in t && t.getElementsByTagName("page").length && t.getElementsByTagName("info")[0].getAttribute("face") !== null
    },
    parse(n) {
        const t = {
            chars: {},
            pages: [],
            lineHeight: 0,
            fontSize: 0,
            fontFamily: "",
            distanceField: null,
            baseLineOffset: 0
        }
          , e = n.getElementsByTagName("info")[0]
          , r = n.getElementsByTagName("common")[0]
          , i = n.getElementsByTagName("distanceField")[0];
        i && (t.distanceField = {
            type: i.getAttribute("fieldType"),
            range: parseInt(i.getAttribute("distanceRange"), 10)
        });
        const s = n.getElementsByTagName("page")
          , o = n.getElementsByTagName("char")
          , a = n.getElementsByTagName("kerning");
        t.fontSize = parseInt(e.getAttribute("size"), 10),
        t.fontFamily = e.getAttribute("face"),
        t.lineHeight = parseInt(r.getAttribute("lineHeight"), 10);
        for (let u = 0; u < s.length; u++)
            t.pages.push({
                id: parseInt(s[u].getAttribute("id"), 10) || 0,
                file: s[u].getAttribute("file")
            });
        const l = {};
        t.baseLineOffset = t.lineHeight - parseInt(r.getAttribute("base"), 10);
        for (let u = 0; u < o.length; u++) {
            const c = o[u]
              , f = parseInt(c.getAttribute("id"), 10);
            let d = c.getAttribute("letter") ?? c.getAttribute("char") ?? String.fromCharCode(f);
            d === "space" && (d = " "),
            l[f] = d,
            t.chars[d] = {
                id: f,
                page: parseInt(c.getAttribute("page"), 10) || 0,
                x: parseInt(c.getAttribute("x"), 10),
                y: parseInt(c.getAttribute("y"), 10),
                width: parseInt(c.getAttribute("width"), 10),
                height: parseInt(c.getAttribute("height"), 10),
                xOffset: parseInt(c.getAttribute("xoffset"), 10),
                yOffset: parseInt(c.getAttribute("yoffset"), 10),
                xAdvance: parseInt(c.getAttribute("xadvance"), 10),
                kerning: {}
            }
        }
        for (let u = 0; u < a.length; u++) {
            const c = parseInt(a[u].getAttribute("first"), 10)
              , f = parseInt(a[u].getAttribute("second"), 10)
              , d = parseInt(a[u].getAttribute("amount"), 10);
            t.chars[l[f]].kerning[l[c]] = d
        }
        return t
    }
}
  , Nd = {
    test(n) {
        return typeof n == "string" && n.includes("<font>") ? $d.test(Jt.get().parseXML(n)) : !1
    },
    parse(n) {
        return $d.parse(Jt.get().parseXML(n))
    }
}
  , Pb = [".xml", ".fnt"]
  , Mb = {
    extension: {
        type: Q.CacheParser,
        name: "cacheBitmapFont"
    },
    test: n => n instanceof Zg,
    getCacheableAssets(n, t) {
        const e = {};
        return n.forEach(r => {
            e[r] = t,
            e[`${r}-bitmap`] = t
        }
        ),
        e[`${t.fontFamily}-bitmap`] = t,
        e
    }
}
  , Ob = {
    extension: {
        type: Q.LoadParser,
        priority: ai.Normal
    },
    name: "loadBitmapFont",
    test(n) {
        return Pb.includes(Ar.extname(n).toLowerCase())
    },
    async testParse(n) {
        return Ru.test(n) || Nd.test(n)
    },
    async parse(n, t, e) {
        const r = Ru.test(n) ? Ru.parse(n) : Nd.parse(n)
          , {src: i} = t
          , {pages: s} = r
          , o = []
          , a = r.distanceField ? {
            scaleMode: "linear",
            alphaMode: "premultiply-alpha-on-upload",
            autoGenerateMipmaps: !1,
            resolution: 1
        } : {};
        for (let f = 0; f < s.length; ++f) {
            const d = s[f].file;
            let h = Ar.join(Ar.dirname(i), d);
            h = Ac(h, i),
            o.push({
                src: h,
                data: a
            })
        }
        const l = await e.load(o)
          , u = o.map(f => l[f.src]);
        return new Zg({
            data: r,
            textures: u
        },i)
    },
    async load(n, t) {
        return await (await Jt.get().fetch(n)).text()
    },
    async unload(n, t, e) {
        await Promise.all(n.pages.map(r => e.unload(r.texture.source._sourceOrigin))),
        n.destroy()
    }
};
class Fb {
    constructor(t, e=!1) {
        this._loader = t,
        this._assetList = [],
        this._isLoading = !1,
        this._maxConcurrent = 1,
        this.verbose = e
    }
    add(t) {
        t.forEach(e => {
            this._assetList.push(e)
        }
        ),
        this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList),
        this._isActive && !this._isLoading && this._next()
    }
    async _next() {
        if (this._assetList.length && this._isActive) {
            this._isLoading = !0;
            const t = []
              , e = Math.min(this._assetList.length, this._maxConcurrent);
            for (let r = 0; r < e; r++)
                t.push(this._assetList.pop());
            await this._loader.load(t),
            this._isLoading = !1,
            this._next()
        }
    }
    get active() {
        return this._isActive
    }
    set active(t) {
        this._isActive !== t && (this._isActive = t,
        t && !this._isLoading && this._next())
    }
}
const Eb = {
    extension: {
        type: Q.CacheParser,
        name: "cacheTextureArray"
    },
    test: n => Array.isArray(n) && n.every(t => t instanceof ct),
    getCacheableAssets: (n, t) => {
        const e = {};
        return n.forEach(r => {
            t.forEach( (i, s) => {
                e[r + (s === 0 ? "" : s + 1)] = i
            }
            )
        }
        ),
        e
    }
};
async function Qg(n) {
    if ("Image"in globalThis)
        return new Promise(t => {
            const e = new Image;
            e.onload = () => {
                t(!0)
            }
            ,
            e.onerror = () => {
                t(!1)
            }
            ,
            e.src = n
        }
        );
    if ("createImageBitmap"in globalThis && "fetch"in globalThis) {
        try {
            const t = await (await fetch(n)).blob();
            await createImageBitmap(t)
        } catch {
            return !1
        }
        return !0
    }
    return !1
}
const Ib = {
    extension: {
        type: Q.DetectionParser,
        priority: 1
    },
    test: async () => Qg("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
    add: async n => [...n, "avif"],
    remove: async n => n.filter(t => t !== "avif")
}
  , Gd = ["png", "jpg", "jpeg"]
  , kb = {
    extension: {
        type: Q.DetectionParser,
        priority: -1
    },
    test: () => Promise.resolve(!0),
    add: async n => [...n, ...Gd],
    remove: async n => n.filter(t => !Gd.includes(t))
}
  , zb = "WorkerGlobalScope"in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function Qh(n) {
    return zb ? !1 : document.createElement("video").canPlayType(n) !== ""
}
const Rb = {
    extension: {
        type: Q.DetectionParser,
        priority: 0
    },
    test: async () => Qh("video/mp4"),
    add: async n => [...n, "mp4", "m4v"],
    remove: async n => n.filter(t => t !== "mp4" && t !== "m4v")
}
  , Lb = {
    extension: {
        type: Q.DetectionParser,
        priority: 0
    },
    test: async () => Qh("video/ogg"),
    add: async n => [...n, "ogv"],
    remove: async n => n.filter(t => t !== "ogv")
}
  , Db = {
    extension: {
        type: Q.DetectionParser,
        priority: 0
    },
    test: async () => Qh("video/webm"),
    add: async n => [...n, "webm"],
    remove: async n => n.filter(t => t !== "webm")
}
  , Bb = {
    extension: {
        type: Q.DetectionParser,
        priority: 0
    },
    test: async () => Qg("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
    add: async n => [...n, "webp"],
    remove: async n => n.filter(t => t !== "webp")
};
class Ub {
    constructor() {
        this._parsers = [],
        this._parsersValidated = !1,
        this.parsers = new Proxy(this._parsers,{
            set: (t, e, r) => (this._parsersValidated = !1,
            t[e] = r,
            !0)
        }),
        this.promiseCache = {}
    }
    reset() {
        this._parsersValidated = !1,
        this.promiseCache = {}
    }
    _getLoadPromiseAndParser(t, e) {
        const r = {
            promise: null,
            parser: null
        };
        return r.promise = (async () => {
            let i = null
              , s = null;
            if (e.loadParser && (s = this._parserHash[e.loadParser],
            s || ge(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),
            !s) {
                for (let o = 0; o < this.parsers.length; o++) {
                    const a = this.parsers[o];
                    if (a.load && a.test?.(t, e, this)) {
                        s = a;
                        break
                    }
                }
                if (!s)
                    return ge(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),
                    null
            }
            i = await s.load(t, e, this),
            r.parser = s;
            for (let o = 0; o < this.parsers.length; o++) {
                const a = this.parsers[o];
                a.parse && a.parse && await a.testParse?.(i, e, this) && (i = await a.parse(i, e, this) || i,
                r.parser = a)
            }
            return i
        }
        )(),
        r
    }
    async load(t, e) {
        this._parsersValidated || this._validateParsers();
        let r = 0;
        const i = {}
          , s = wl(t)
          , o = Kr(t, u => ({
            alias: [u],
            src: u,
            data: {}
        }))
          , a = o.length
          , l = o.map(async u => {
            const c = Ar.toAbsolute(u.src);
            if (!i[u.src])
                try {
                    this.promiseCache[c] || (this.promiseCache[c] = this._getLoadPromiseAndParser(c, u)),
                    i[u.src] = await this.promiseCache[c].promise,
                    e && e(++r / a)
                } catch (f) {
                    throw delete this.promiseCache[c],
                    delete i[u.src],
                    new Error(`[Loader.load] Failed to load ${c}.
${f}`)
                }
        }
        );
        return await Promise.all(l),
        s ? i[o[0].src] : i
    }
    async unload(t) {
        const r = Kr(t, i => ({
            alias: [i],
            src: i
        })).map(async i => {
            const s = Ar.toAbsolute(i.src)
              , o = this.promiseCache[s];
            if (o) {
                const a = await o.promise;
                delete this.promiseCache[s],
                await o.parser?.unload?.(a, i, this)
            }
        }
        );
        await Promise.all(r)
    }
    _validateParsers() {
        this._parsersValidated = !0,
        this._parserHash = this._parsers.filter(t => t.name).reduce( (t, e) => (e.name ? t[e.name] && ge(`[Assets] loadParser name conflict "${e.name}"`) : ge("[Assets] loadParser should have a name"),
        {
            ...t,
            [e.name]: e
        }), {})
    }
}
function Ws(n, t) {
    if (Array.isArray(t)) {
        for (const e of t)
            if (n.startsWith(`data:${e}`))
                return !0;
        return !1
    }
    return n.startsWith(`data:${t}`)
}
function Xs(n, t) {
    const e = n.split("?")[0]
      , r = Ar.extname(e).toLowerCase();
    return Array.isArray(t) ? t.includes(r) : r === t
}
const $b = ".json"
  , Nb = "application/json"
  , Gb = {
    extension: {
        type: Q.LoadParser,
        priority: ai.Low
    },
    name: "loadJson",
    test(n) {
        return Ws(n, Nb) || Xs(n, $b)
    },
    async load(n) {
        return await (await Jt.get().fetch(n)).json()
    }
}
  , Vb = ".txt"
  , Wb = "text/plain"
  , Xb = {
    name: "loadTxt",
    extension: {
        type: Q.LoadParser,
        priority: ai.Low,
        name: "loadTxt"
    },
    test(n) {
        return Ws(n, Wb) || Xs(n, Vb)
    },
    async load(n) {
        return await (await Jt.get().fetch(n)).text()
    }
}
  , Hb = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
  , Yb = [".ttf", ".otf", ".woff", ".woff2"]
  , jb = ["font/ttf", "font/otf", "font/woff", "font/woff2"]
  , qb = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function Kb(n) {
    const t = Ar.extname(n)
      , i = Ar.basename(n, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1));
    let s = i.length > 0;
    for (const a of i)
        if (!a.match(qb)) {
            s = !1;
            break
        }
    let o = i.join(" ");
    return s || (o = `"${o.replace(/[\\"]/g, "\\$&")}"`),
    o
}
const Zb = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function Qb(n) {
    return Zb.test(n) ? n : encodeURI(n)
}
const Jb = {
    extension: {
        type: Q.LoadParser,
        priority: ai.Low
    },
    name: "loadWebFont",
    test(n) {
        return Ws(n, jb) || Xs(n, Yb)
    },
    async load(n, t) {
        const e = Jt.get().getFontFaceSet();
        if (e) {
            const r = []
              , i = t.data?.family ?? Kb(n)
              , s = t.data?.weights?.filter(a => Hb.includes(a)) ?? ["normal"]
              , o = t.data ?? {};
            for (let a = 0; a < s.length; a++) {
                const l = s[a]
                  , u = new FontFace(i,`url(${Qb(n)})`,{
                    ...o,
                    weight: l
                });
                await u.load(),
                e.add(u),
                r.push(u)
            }
            return ne.set(`${i}-and-url`, {
                url: n,
                fontFaces: r
            }),
            r.length === 1 ? r[0] : r
        }
        return ge("[loadWebFont] FontFace API is not supported. Skipping loading font"),
        null
    },
    unload(n) {
        (Array.isArray(n) ? n : [n]).forEach(t => {
            ne.remove(t.family),
            Jt.get().getFontFaceSet().delete(t)
        }
        )
    }
};
function Jh(n, t=1) {
    const e = Vs.RETINA_PREFIX?.exec(n);
    return e ? parseFloat(e[1]) : t
}
function tf(n, t, e) {
    n.label = e,
    n._sourceOrigin = e;
    const r = new ct({
        source: n,
        label: e
    })
      , i = () => {
        delete t.promiseCache[e],
        ne.has(e) && ne.remove(e)
    }
    ;
    return r.source.once("destroy", () => {
        t.promiseCache[e] && (ge("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),
        i())
    }
    ),
    r.once("destroy", () => {
        n.destroyed || (ge("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),
        i())
    }
    ),
    r
}
const tS = ".svg"
  , eS = "image/svg+xml"
  , rS = {
    extension: {
        type: Q.LoadParser,
        priority: ai.Low,
        name: "loadSVG"
    },
    name: "loadSVG",
    config: {
        crossOrigin: "anonymous",
        parseAsGraphicsContext: !1
    },
    test(n) {
        return Ws(n, eS) || Xs(n, tS)
    },
    async load(n, t, e) {
        return t.data.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext ? iS(n) : nS(n, t, e, this.config.crossOrigin)
    },
    unload(n) {
        n.destroy(!0)
    }
};
async function nS(n, t, e, r) {
    const s = await (await Jt.get().fetch(n)).blob()
      , o = URL.createObjectURL(s)
      , a = new Image;
    a.src = o,
    a.crossOrigin = r,
    await a.decode(),
    URL.revokeObjectURL(o);
    const l = document.createElement("canvas")
      , u = l.getContext("2d")
      , c = t.data?.resolution || Jh(n)
      , f = t.data?.width ?? a.width
      , d = t.data?.height ?? a.height;
    l.width = f * c,
    l.height = d * c,
    u.drawImage(a, 0, 0, f * c, d * c);
    const {parseAsGraphicsContext: h, ...m} = t.data
      , p = new Ki({
        resource: l,
        alphaMode: "premultiply-alpha-on-upload",
        resolution: c,
        ...m
    });
    return tf(p, e, n)
}
async function iS(n) {
    const e = await (await Jt.get().fetch(n)).text()
      , r = new kr;
    return r.svg(e),
    r
}
const sS = `(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;
let ws = null
  , Nc = class {
    constructor() {
        ws || (ws = URL.createObjectURL(new Blob([sS],{
            type: "application/javascript"
        }))),
        this.worker = new Worker(ws)
    }
}
;
Nc.revokeObjectURL = function() {
    ws && (URL.revokeObjectURL(ws),
    ws = null)
}
;
const oS = `(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;
let Cs = null;
class Jg {
    constructor() {
        Cs || (Cs = URL.createObjectURL(new Blob([oS],{
            type: "application/javascript"
        }))),
        this.worker = new Worker(Cs)
    }
}
Jg.revokeObjectURL = function() {
    Cs && (URL.revokeObjectURL(Cs),
    Cs = null)
}
;
let Vd = 0, Lu;
class aS {
    constructor() {
        this._initialized = !1,
        this._createdWorkers = 0,
        this._workerPool = [],
        this._queue = [],
        this._resolveHash = {}
    }
    isImageBitmapSupported() {
        return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise(t => {
            const {worker: e} = new Nc;
            e.addEventListener("message", r => {
                e.terminate(),
                Nc.revokeObjectURL(),
                t(r.data)
            }
            )
        }
        ),
        this._isImageBitmapSupported)
    }
    loadImageBitmap(t, e) {
        return this._run("loadImageBitmap", [t, e?.data?.alphaMode])
    }
    async _initWorkers() {
        this._initialized || (this._initialized = !0)
    }
    _getWorker() {
        Lu === void 0 && (Lu = navigator.hardwareConcurrency || 4);
        let t = this._workerPool.pop();
        return !t && this._createdWorkers < Lu && (this._createdWorkers++,
        t = new Jg().worker,
        t.addEventListener("message", e => {
            this._complete(e.data),
            this._returnWorker(e.target),
            this._next()
        }
        )),
        t
    }
    _returnWorker(t) {
        this._workerPool.push(t)
    }
    _complete(t) {
        t.error !== void 0 ? this._resolveHash[t.uuid].reject(t.error) : this._resolveHash[t.uuid].resolve(t.data),
        this._resolveHash[t.uuid] = null
    }
    async _run(t, e) {
        await this._initWorkers();
        const r = new Promise( (i, s) => {
            this._queue.push({
                id: t,
                arguments: e,
                resolve: i,
                reject: s
            })
        }
        );
        return this._next(),
        r
    }
    _next() {
        if (!this._queue.length)
            return;
        const t = this._getWorker();
        if (!t)
            return;
        const e = this._queue.pop()
          , r = e.id;
        this._resolveHash[Vd] = {
            resolve: e.resolve,
            reject: e.reject
        },
        t.postMessage({
            data: e.arguments,
            uuid: Vd++,
            id: r
        })
    }
}
const Wd = new aS
  , lS = [".jpeg", ".jpg", ".png", ".webp", ".avif"]
  , uS = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function cS(n, t) {
    const e = await Jt.get().fetch(n);
    if (!e.ok)
        throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${e.status} ${e.statusText}`);
    const r = await e.blob();
    return t?.data?.alphaMode === "premultiplied-alpha" ? createImageBitmap(r, {
        premultiplyAlpha: "none"
    }) : createImageBitmap(r)
}
const t0 = {
    name: "loadTextures",
    extension: {
        type: Q.LoadParser,
        priority: ai.High,
        name: "loadTextures"
    },
    config: {
        preferWorkers: !0,
        preferCreateImageBitmap: !0,
        crossOrigin: "anonymous"
    },
    test(n) {
        return Ws(n, uS) || Xs(n, lS)
    },
    async load(n, t, e) {
        let r = null;
        globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await Wd.isImageBitmapSupported() ? r = await Wd.loadImageBitmap(n, t) : r = await cS(n, t) : r = await new Promise(s => {
            r = new Image,
            r.crossOrigin = this.config.crossOrigin,
            r.src = n,
            r.complete ? s(r) : r.onload = () => {
                s(r)
            }
        }
        );
        const i = new Ki({
            resource: r,
            alphaMode: "premultiply-alpha-on-upload",
            resolution: t.data?.resolution || Jh(n),
            ...t.data
        });
        return tf(i, e, n)
    },
    unload(n) {
        n.destroy(!0)
    }
}
  , e0 = [".mp4", ".m4v", ".webm", ".ogg", ".ogv", ".h264", ".avi", ".mov"]
  , hS = e0.map(n => `video/${n.substring(1)}`);
function fS(n, t, e) {
    e === void 0 && !t.startsWith("data:") ? n.crossOrigin = pS(t) : e !== !1 && (n.crossOrigin = typeof e == "string" ? e : "anonymous")
}
function dS(n) {
    return new Promise( (t, e) => {
        n.addEventListener("canplaythrough", r),
        n.addEventListener("error", i),
        n.load();
        function r() {
            s(),
            t()
        }
        function i(o) {
            s(),
            e(o)
        }
        function s() {
            n.removeEventListener("canplaythrough", r),
            n.removeEventListener("error", i)
        }
    }
    )
}
function pS(n, t=globalThis.location) {
    if (n.startsWith("data:"))
        return "";
    t = t || globalThis.location;
    const e = new URL(n,document.baseURI);
    return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : ""
}
const mS = {
    name: "loadVideo",
    extension: {
        type: Q.LoadParser,
        name: "loadVideo"
    },
    test(n) {
        const t = Ws(n, hS)
          , e = Xs(n, e0);
        return t || e
    },
    async load(n, t, e) {
        const r = {
            ...Xa.defaultOptions,
            resolution: t.data?.resolution || Jh(n),
            alphaMode: t.data?.alphaMode || await sg(),
            ...t.data
        }
          , i = document.createElement("video")
          , s = {
            preload: r.autoLoad !== !1 ? "auto" : void 0,
            "webkit-playsinline": r.playsinline !== !1 ? "" : void 0,
            playsinline: r.playsinline !== !1 ? "" : void 0,
            muted: r.muted === !0 ? "" : void 0,
            loop: r.loop === !0 ? "" : void 0,
            autoplay: r.autoPlay !== !1 ? "" : void 0
        };
        Object.keys(s).forEach(l => {
            const u = s[l];
            u !== void 0 && i.setAttribute(l, u)
        }
        ),
        r.muted === !0 && (i.muted = !0),
        fS(i, n, r.crossorigin);
        const o = document.createElement("source");
        let a;
        if (n.startsWith("data:"))
            a = n.slice(5, n.indexOf(";"));
        else if (!n.startsWith("blob:")) {
            const l = n.split("?")[0].slice(n.lastIndexOf(".") + 1).toLowerCase();
            a = Xa.MIME_TYPES[l] || `video/${l}`
        }
        return o.src = n,
        a && (o.type = a),
        new Promise(l => {
            const u = async () => {
                const c = new Xa({
                    ...r,
                    resource: i
                });
                i.removeEventListener("canplay", u),
                t.data.preload && await dS(i),
                l(tf(c, e, n))
            }
            ;
            i.addEventListener("canplay", u),
            i.appendChild(o)
        }
        )
    },
    unload(n) {
        n.destroy(!0)
    }
}
  , r0 = {
    extension: {
        type: Q.ResolveParser,
        name: "resolveTexture"
    },
    test: t0.test,
    parse: n => ({
        resolution: parseFloat(Vs.RETINA_PREFIX.exec(n)?.[1] ?? "1"),
        format: n.split(".").pop(),
        src: n
    })
}
  , gS = {
    extension: {
        type: Q.ResolveParser,
        priority: -2,
        name: "resolveJson"
    },
    test: n => Vs.RETINA_PREFIX.test(n) && n.endsWith(".json"),
    parse: r0.parse
};
class xS {
    constructor() {
        this._detections = [],
        this._initialized = !1,
        this.resolver = new Vs,
        this.loader = new Ub,
        this.cache = ne,
        this._backgroundLoader = new Fb(this.loader),
        this._backgroundLoader.active = !0,
        this.reset()
    }
    async init(t={}) {
        if (this._initialized) {
            ge("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
            return
        }
        if (this._initialized = !0,
        t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams),
        t.basePath && (this.resolver.basePath = t.basePath),
        t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier),
        t.manifest) {
            let s = t.manifest;
            typeof s == "string" && (s = await this.load(s)),
            this.resolver.addManifest(s)
        }
        const e = t.texturePreference?.resolution ?? 1
          , r = typeof e == "number" ? [e] : e
          , i = await this._detectFormats({
            preferredFormats: t.texturePreference?.format,
            skipDetections: t.skipDetections,
            detections: this._detections
        });
        this.resolver.prefer({
            params: {
                format: i,
                resolution: r
            }
        }),
        t.preferences && this.setPreferences(t.preferences)
    }
    add(t) {
        this.resolver.add(t)
    }
    async load(t, e) {
        this._initialized || await this.init();
        const r = wl(t)
          , i = Kr(t).map(a => {
            if (typeof a != "string") {
                const l = this.resolver.getAlias(a);
                return l.some(u => !this.resolver.hasKey(u)) && this.add(a),
                Array.isArray(l) ? l[0] : l
            }
            return this.resolver.hasKey(a) || this.add({
                alias: a,
                src: a
            }),
            a
        }
        )
          , s = this.resolver.resolve(i)
          , o = await this._mapLoadToResolve(s, e);
        return r ? o[i[0]] : o
    }
    addBundle(t, e) {
        this.resolver.addBundle(t, e)
    }
    async loadBundle(t, e) {
        this._initialized || await this.init();
        let r = !1;
        typeof t == "string" && (r = !0,
        t = [t]);
        const i = this.resolver.resolveBundle(t)
          , s = {}
          , o = Object.keys(i);
        let a = 0
          , l = 0;
        const u = () => {
            e?.(++a / l)
        }
          , c = o.map(f => {
            const d = i[f];
            return l += Object.keys(d).length,
            this._mapLoadToResolve(d, u).then(h => {
                s[f] = h
            }
            )
        }
        );
        return await Promise.all(c),
        r ? s[t[0]] : s
    }
    async backgroundLoad(t) {
        this._initialized || await this.init(),
        typeof t == "string" && (t = [t]);
        const e = this.resolver.resolve(t);
        this._backgroundLoader.add(Object.values(e))
    }
    async backgroundLoadBundle(t) {
        this._initialized || await this.init(),
        typeof t == "string" && (t = [t]);
        const e = this.resolver.resolveBundle(t);
        Object.values(e).forEach(r => {
            this._backgroundLoader.add(Object.values(r))
        }
        )
    }
    reset() {
        this.resolver.reset(),
        this.loader.reset(),
        this.cache.reset(),
        this._initialized = !1
    }
    get(t) {
        if (typeof t == "string")
            return ne.get(t);
        const e = {};
        for (let r = 0; r < t.length; r++)
            e[r] = ne.get(t[r]);
        return e
    }
    async _mapLoadToResolve(t, e) {
        const r = [...new Set(Object.values(t))];
        this._backgroundLoader.active = !1;
        const i = await this.loader.load(r, e);
        this._backgroundLoader.active = !0;
        const s = {};
        return r.forEach(o => {
            const a = i[o.src]
              , l = [o.src];
            o.alias && l.push(...o.alias),
            l.forEach(u => {
                s[u] = a
            }
            ),
            ne.set(l, a)
        }
        ),
        s
    }
    async unload(t) {
        this._initialized || await this.init();
        const e = Kr(t).map(i => typeof i != "string" ? i.src : i)
          , r = this.resolver.resolve(e);
        await this._unloadFromResolved(r)
    }
    async unloadBundle(t) {
        this._initialized || await this.init(),
        t = Kr(t);
        const e = this.resolver.resolveBundle(t)
          , r = Object.keys(e).map(i => this._unloadFromResolved(e[i]));
        await Promise.all(r)
    }
    async _unloadFromResolved(t) {
        const e = Object.values(t);
        e.forEach(r => {
            ne.remove(r.src)
        }
        ),
        await this.loader.unload(e)
    }
    async _detectFormats(t) {
        let e = [];
        t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]);
        for (const r of t.detections)
            t.skipDetections || await r.test() ? e = await r.add(e) : t.skipDetections || (e = await r.remove(e));
        return e = e.filter( (r, i) => e.indexOf(r) === i),
        e
    }
    get detections() {
        return this._detections
    }
    setPreferences(t) {
        this.loader.parsers.forEach(e => {
            e.config && Object.keys(e.config).filter(r => r in t).forEach(r => {
                e.config[r] = t[r]
            }
            )
        }
        )
    }
}
const Ai = new xS;
Qe.handleByList(Q.LoadParser, Ai.loader.parsers).handleByList(Q.ResolveParser, Ai.resolver.parsers).handleByList(Q.CacheParser, Ai.cache.parsers).handleByList(Q.DetectionParser, Ai.detections);
Qe.add(Eb, kb, Ib, Bb, Rb, Lb, Db, Gb, Xb, Jb, rS, t0, mS, Ob, Mb, r0, gS);
const Xd = {
    loader: Q.LoadParser,
    resolver: Q.ResolveParser,
    cache: Q.CacheParser,
    detection: Q.DetectionParser
};
Qe.handle(Q.Asset, n => {
    const t = n.ref;
    Object.entries(Xd).filter( ([e]) => !!t[e]).forEach( ([e,r]) => Qe.add(Object.assign(t[e], {
        extension: t[e].extension ?? r
    })))
}
, n => {
    const t = n.ref;
    Object.keys(Xd).filter(e => !!t[e]).forEach(e => Qe.remove(t[e]))
}
);
var vS = `in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`
  , _S = `
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`
  , Hd = `struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;
const n0 = class i0 extends Ct {
    constructor(t) {
        t = {
            ...i0.defaultOptions,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Hd,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: Hd,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: vS,
            fragment: _S,
            name: "alpha-filter"
        })
          , {alpha: i, ...s} = t
          , o = new Wh({
            uAlpha: {
                value: i,
                type: "f32"
            }
        });
        super({
            ...s,
            gpuProgram: e,
            glProgram: r,
            resources: {
                alphaUniforms: o
            }
        })
    }
    get alpha() {
        return this.resources.alphaUniforms.uniforms.uAlpha
    }
    set alpha(t) {
        this.resources.alphaUniforms.uniforms.uAlpha = t
    }
}
;
n0.defaultOptions = {
    alpha: 1
};
let yS = n0
  , bS = 0;
class SS {
    constructor(t) {
        this._poolKeyHash = Object.create(null),
        this._texturePool = {},
        this.textureOptions = t || {},
        this.enableFullScreen = !1
    }
    createTexture(t, e, r) {
        const i = new fr({
            ...this.textureOptions,
            width: t,
            height: e,
            resolution: 1,
            antialias: r,
            autoGarbageCollect: !0
        });
        return new ct({
            source: i,
            label: `texturePool_${bS++}`
        })
    }
    getOptimalTexture(t, e, r=1, i) {
        let s = Math.ceil(t * r - 1e-6)
          , o = Math.ceil(e * r - 1e-6);
        s = bl(s),
        o = bl(o);
        const a = (s << 17) + (o << 1) + (i ? 1 : 0);
        this._texturePool[a] || (this._texturePool[a] = []);
        let l = this._texturePool[a].pop();
        return l || (l = this.createTexture(s, o, i)),
        l.source._resolution = r,
        l.source.width = s / r,
        l.source.height = o / r,
        l.source.pixelWidth = s,
        l.source.pixelHeight = o,
        l.frame.x = 0,
        l.frame.y = 0,
        l.frame.width = t,
        l.frame.height = e,
        l.updateUvs(),
        this._poolKeyHash[l.uid] = a,
        l
    }
    getSameSizeTexture(t, e=!1) {
        const r = t.source;
        return this.getOptimalTexture(t.width, t.height, r._resolution, e)
    }
    returnTexture(t) {
        const e = this._poolKeyHash[t.uid];
        this._texturePool[e].push(t)
    }
    clear(t) {
        if (t = t !== !1,
        t)
            for (const e in this._texturePool) {
                const r = this._texturePool[e];
                if (r)
                    for (let i = 0; i < r.length; i++)
                        r[i].destroy(!0)
            }
        this._texturePool = {}
    }
}
const Ur = new SS
  , s0 = {
    5: [.153388, .221461, .250301],
    7: [.071303, .131514, .189879, .214607],
    9: [.028532, .067234, .124009, .179044, .20236],
    11: [.0093, .028002, .065984, .121703, .175713, .198596],
    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
}
  , wS = ["in vec2 vBlurTexCoords[%size%];", "uniform sampler2D uTexture;", "out vec4 finalColor;", "void main(void)", "{", "    finalColor = vec4(0.0);", "    %blur%", "}"].join(`
`);
function CS(n) {
    const t = s0[n]
      , e = t.length;
    let r = wS
      , i = "";
    const s = "finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";
    let o;
    for (let a = 0; a < n; a++) {
        let l = s.replace("%index%", a.toString());
        o = a,
        a >= e && (o = n - a - 1),
        l = l.replace("%value%", t[o].toString()),
        i += l,
        i += `
`
    }
    return r = r.replace("%blur%", i),
    r = r.replace("%size%", n.toString()),
    r
}
const TS = `
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function AS(n, t) {
    const e = Math.ceil(n / 2);
    let r = TS, i = "", s;
    t ? s = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);" : s = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";
    for (let o = 0; o < n; o++) {
        let a = s.replace("%index%", o.toString());
        a = a.replace("%sampleIndex%", `${o - (e - 1)}.0`),
        i += a,
        i += `
`
    }
    return r = r.replace("%blur%", i),
    r = r.replace("%size%", n.toString()),
    r = r.replace("%dimension%", t ? "z" : "w"),
    r
}
function PS(n, t) {
    const e = AS(t, n)
      , r = CS(t);
    return xt.from({
        vertex: e,
        fragment: r,
        name: `blur-${n ? "horizontal" : "vertical"}-pass-filter`
    })
}
var MS = `

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;
function OS(n, t) {
    const e = s0[t]
      , r = e.length
      , i = []
      , s = []
      , o = [];
    for (let f = 0; f < t; f++) {
        i[f] = `@location(${f}) offset${f}: vec2<f32>,`,
        n ? s[f] = `filteredCord + vec2(${f - r + 1} * pixelStrength, 0.0),` : s[f] = `filteredCord + vec2(0.0, ${f - r + 1} * pixelStrength),`;
        const d = f < r ? f : t - f - 1
          , h = e[d].toString();
        o[f] = `finalColor += textureSample(uTexture, uSampler, offset${f}) * ${h};`
    }
    const a = i.join(`
`)
      , l = s.join(`
`)
      , u = o.join(`
`)
      , c = MS.replace("%blur-struct%", a).replace("%blur-vertex-out%", l).replace("%blur-fragment-in%", a).replace("%blur-sampling%", u).replace("%dimension%", n ? "z" : "w");
    return dt.from({
        vertex: {
            source: c,
            entryPoint: "mainVertex"
        },
        fragment: {
            source: c,
            entryPoint: "mainFragment"
        }
    })
}
const o0 = class a0 extends Ct {
    constructor(t) {
        t = {
            ...a0.defaultOptions,
            ...t
        };
        const e = PS(t.horizontal, t.kernelSize)
          , r = OS(t.horizontal, t.kernelSize);
        super({
            glProgram: e,
            gpuProgram: r,
            resources: {
                blurUniforms: {
                    uStrength: {
                        value: 0,
                        type: "f32"
                    }
                }
            },
            ...t
        }),
        this.horizontal = t.horizontal,
        this._quality = 0,
        this.quality = t.quality,
        this.blur = t.strength,
        this._uniforms = this.resources.blurUniforms.uniforms
    }
    apply(t, e, r, i) {
        if (this._uniforms.uStrength = this.strength / this.passes,
        this.passes === 1)
            t.applyFilter(this, e, r, i);
        else {
            const s = Ur.getSameSizeTexture(e);
            let o = e
              , a = s;
            this._state.blend = !1;
            const l = t.renderer.type === Cl.WEBGPU;
            for (let u = 0; u < this.passes - 1; u++) {
                t.applyFilter(this, o, a, u === 0 ? !0 : l);
                const c = a;
                a = o,
                o = c
            }
            this._state.blend = !0,
            t.applyFilter(this, o, r, i),
            Ur.returnTexture(s)
        }
    }
    get blur() {
        return this.strength
    }
    set blur(t) {
        this.padding = 1 + Math.abs(t) * 2,
        this.strength = t
    }
    get quality() {
        return this._quality
    }
    set quality(t) {
        this._quality = t,
        this.passes = t
    }
}
;
o0.defaultOptions = {
    strength: 8,
    quality: 4,
    kernelSize: 5
};
let Yd = o0;
class Al extends Zm {
    constructor(t) {
        t instanceof kr && (t = {
            context: t
        });
        const {context: e, roundPixels: r, ...i} = t || {};
        super({
            label: "Graphics",
            ...i
        }),
        this.renderPipeId = "graphics",
        e ? this._context = e : this._context = this._ownedContext = new kr,
        this._context.on("update", this.onViewUpdate, this),
        this.allowChildren = !1,
        this.roundPixels = r ?? !1
    }
    set context(t) {
        t !== this._context && (this._context.off("update", this.onViewUpdate, this),
        this._context = t,
        this._context.on("update", this.onViewUpdate, this),
        this.onViewUpdate())
    }
    get context() {
        return this._context
    }
    get bounds() {
        return this._context.bounds
    }
    addBounds(t) {
        t.addBounds(this._context.bounds)
    }
    containsPoint(t) {
        return this._context.containsPoint(t)
    }
    destroy(t) {
        this._ownedContext && !t ? this._ownedContext.destroy(t) : (t === !0 || t?.context === !0) && this._context.destroy(t),
        this._ownedContext = null,
        this._context = null,
        super.destroy(t)
    }
    _callContextMethod(t, e) {
        return this.context[t](...e),
        this
    }
    setFillStyle(...t) {
        return this._callContextMethod("setFillStyle", t)
    }
    setStrokeStyle(...t) {
        return this._callContextMethod("setStrokeStyle", t)
    }
    fill(...t) {
        return this._callContextMethod("fill", t)
    }
    stroke(...t) {
        return this._callContextMethod("stroke", t)
    }
    texture(...t) {
        return this._callContextMethod("texture", t)
    }
    beginPath() {
        return this._callContextMethod("beginPath", [])
    }
    cut() {
        return this._callContextMethod("cut", [])
    }
    arc(...t) {
        return this._callContextMethod("arc", t)
    }
    arcTo(...t) {
        return this._callContextMethod("arcTo", t)
    }
    arcToSvg(...t) {
        return this._callContextMethod("arcToSvg", t)
    }
    bezierCurveTo(...t) {
        return this._callContextMethod("bezierCurveTo", t)
    }
    closePath() {
        return this._callContextMethod("closePath", [])
    }
    ellipse(...t) {
        return this._callContextMethod("ellipse", t)
    }
    circle(...t) {
        return this._callContextMethod("circle", t)
    }
    path(...t) {
        return this._callContextMethod("path", t)
    }
    lineTo(...t) {
        return this._callContextMethod("lineTo", t)
    }
    moveTo(...t) {
        return this._callContextMethod("moveTo", t)
    }
    quadraticCurveTo(...t) {
        return this._callContextMethod("quadraticCurveTo", t)
    }
    rect(...t) {
        return this._callContextMethod("rect", t)
    }
    roundRect(...t) {
        return this._callContextMethod("roundRect", t)
    }
    poly(...t) {
        return this._callContextMethod("poly", t)
    }
    regularPoly(...t) {
        return this._callContextMethod("regularPoly", t)
    }
    roundPoly(...t) {
        return this._callContextMethod("roundPoly", t)
    }
    roundShape(...t) {
        return this._callContextMethod("roundShape", t)
    }
    filletRect(...t) {
        return this._callContextMethod("filletRect", t)
    }
    chamferRect(...t) {
        return this._callContextMethod("chamferRect", t)
    }
    star(...t) {
        return this._callContextMethod("star", t)
    }
    svg(...t) {
        return this._callContextMethod("svg", t)
    }
    restore(...t) {
        return this._callContextMethod("restore", t)
    }
    save() {
        return this._callContextMethod("save", [])
    }
    getTransform() {
        return this.context.getTransform()
    }
    resetTransform() {
        return this._callContextMethod("resetTransform", [])
    }
    rotateTransform(...t) {
        return this._callContextMethod("rotate", t)
    }
    scaleTransform(...t) {
        return this._callContextMethod("scale", t)
    }
    setTransform(...t) {
        return this._callContextMethod("setTransform", t)
    }
    transform(...t) {
        return this._callContextMethod("transform", t)
    }
    translateTransform(...t) {
        return this._callContextMethod("translate", t)
    }
    clear() {
        return this._callContextMethod("clear", [])
    }
    get fillStyle() {
        return this._context.fillStyle
    }
    set fillStyle(t) {
        this._context.fillStyle = t
    }
    get strokeStyle() {
        return this._context.strokeStyle
    }
    set strokeStyle(t) {
        this._context.strokeStyle = t
    }
    clone(t=!1) {
        return t ? new Al(this._context.clone()) : (this._ownedContext = null,
        new Al(this._context))
    }
    lineStyle(t, e, r) {
        J(zt, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
        const i = {};
        return t && (i.width = t),
        e && (i.color = e),
        r && (i.alpha = r),
        this.context.strokeStyle = i,
        this
    }
    beginFill(t, e) {
        J(zt, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
        const r = {};
        return t && (r.color = t),
        e && (r.alpha = e),
        this.context.fillStyle = r,
        this
    }
    endFill() {
        J(zt, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),
        this.context.fill();
        const t = this.context.strokeStyle;
        return (t.width !== kr.defaultStrokeStyle.width || t.color !== kr.defaultStrokeStyle.color || t.alpha !== kr.defaultStrokeStyle.alpha) && this.context.stroke(),
        this
    }
    drawCircle(...t) {
        return J(zt, "Graphics#drawCircle has been renamed to Graphics#circle"),
        this._callContextMethod("circle", t)
    }
    drawEllipse(...t) {
        return J(zt, "Graphics#drawEllipse has been renamed to Graphics#ellipse"),
        this._callContextMethod("ellipse", t)
    }
    drawPolygon(...t) {
        return J(zt, "Graphics#drawPolygon has been renamed to Graphics#poly"),
        this._callContextMethod("poly", t)
    }
    drawRect(...t) {
        return J(zt, "Graphics#drawRect has been renamed to Graphics#rect"),
        this._callContextMethod("rect", t)
    }
    drawRoundedRect(...t) {
        return J(zt, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),
        this._callContextMethod("roundRect", t)
    }
    drawStar(...t) {
        return J(zt, "Graphics#drawStar has been renamed to Graphics#star"),
        this._callContextMethod("star", t)
    }
}
const ro = new Map;
function FS(n, t) {
    if (!ro.has(n)) {
        const e = new ct({
            source: new Gh({
                resource: n,
                ...t
            })
        })
          , r = () => {
            ro.get(n) === e && ro.delete(n)
        }
        ;
        e.once("destroy", r),
        e.source.once("destroy", r),
        ro.set(n, e)
    }
    return ro.get(n)
}
const l0 = class u0 {
    constructor(t={}) {
        if (this.uid = me("renderTarget"),
        this.colorTextures = [],
        this.dirtyId = 0,
        this.isRoot = !1,
        this._size = new Float32Array(2),
        this._managedColorTextures = !1,
        t = {
            ...u0.defaultOptions,
            ...t
        },
        this.stencil = t.stencil,
        this.depth = t.depth,
        this.isRoot = t.isRoot,
        typeof t.colorTextures == "number") {
            this._managedColorTextures = !0;
            for (let e = 0; e < t.colorTextures; e++)
                this.colorTextures.push(new fr({
                    width: t.width,
                    height: t.height,
                    resolution: t.resolution,
                    antialias: t.antialias
                }))
        } else {
            this.colorTextures = [...t.colorTextures.map(r => r.source)];
            const e = this.colorTexture.source;
            this.resize(e.width, e.height, e._resolution)
        }
        this.colorTexture.source.on("resize", this.onSourceResize, this),
        (t.depthStencilTexture || this.stencil) && (t.depthStencilTexture instanceof ct || t.depthStencilTexture instanceof fr ? this.depthStencilTexture = t.depthStencilTexture.source : this.ensureDepthStencilTexture())
    }
    get size() {
        const t = this._size;
        return t[0] = this.pixelWidth,
        t[1] = this.pixelHeight,
        t
    }
    get width() {
        return this.colorTexture.source.width
    }
    get height() {
        return this.colorTexture.source.height
    }
    get pixelWidth() {
        return this.colorTexture.source.pixelWidth
    }
    get pixelHeight() {
        return this.colorTexture.source.pixelHeight
    }
    get resolution() {
        return this.colorTexture.source._resolution
    }
    get colorTexture() {
        return this.colorTextures[0]
    }
    onSourceResize(t) {
        this.resize(t.width, t.height, t._resolution, !0)
    }
    ensureDepthStencilTexture() {
        this.depthStencilTexture || (this.depthStencilTexture = new fr({
            width: this.width,
            height: this.height,
            resolution: this.resolution,
            format: "depth24plus-stencil8",
            autoGenerateMipmaps: !1,
            antialias: !1,
            mipLevelCount: 1
        }))
    }
    resize(t, e, r=this.resolution, i=!1) {
        this.dirtyId++,
        this.colorTextures.forEach( (s, o) => {
            i && o === 0 || s.source.resize(t, e, r)
        }
        ),
        this.depthStencilTexture && this.depthStencilTexture.source.resize(t, e, r)
    }
    destroy() {
        this.colorTexture.source.off("resize", this.onSourceResize, this),
        this._managedColorTextures && this.colorTextures.forEach(t => {
            t.destroy()
        }
        ),
        this.depthStencilTexture && (this.depthStencilTexture.destroy(),
        delete this.depthStencilTexture)
    }
}
;
l0.defaultOptions = {
    width: 0,
    height: 0,
    resolution: 1,
    colorTextures: 1,
    stencil: !1,
    depth: !1,
    antialias: !1,
    isRoot: !1
};
let ES = l0;
const ef = class c0 {
    get autoDensity() {
        return this.texture.source.autoDensity
    }
    set autoDensity(t) {
        this.texture.source.autoDensity = t
    }
    get resolution() {
        return this.texture.source._resolution
    }
    set resolution(t) {
        this.texture.source.resize(this.texture.source.width, this.texture.source.height, t)
    }
    init(t) {
        t = {
            ...c0.defaultOptions,
            ...t
        },
        t.view && (J(zt, "ViewSystem.view has been renamed to ViewSystem.canvas"),
        t.canvas = t.view),
        this.screen = new ce(0,0,t.width,t.height),
        this.canvas = t.canvas || Jt.get().createCanvas(),
        this.antialias = !!t.antialias,
        this.texture = FS(this.canvas, t),
        this.renderTarget = new ES({
            colorTextures: [this.texture],
            depth: !!t.depth,
            isRoot: !0
        }),
        this.texture.source.transparent = t.backgroundAlpha < 1,
        this.resolution = t.resolution
    }
    resize(t, e, r) {
        this.texture.source.resize(t, e, r),
        this.screen.width = this.texture.frame.width,
        this.screen.height = this.texture.frame.height
    }
    destroy(t=!1) {
        (typeof t == "boolean" ? t : !!t?.removeView) && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas)
    }
}
;
ef.extension = {
    type: [Q.WebGLSystem, Q.WebGPUSystem, Q.CanvasSystem],
    name: "view",
    priority: 0
};
ef.defaultOptions = {
    width: 800,
    height: 600,
    autoDensity: !1,
    antialias: !1
};
let IS = ef;
Qe.add(W_, X_);
var Ft = `in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`
  , Et = `struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`
  , kS = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`
  , zS = `struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`
  , RS = Object.defineProperty
  , LS = (n, t, e) => t in n ? RS(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , h0 = (n, t, e) => (LS(n, typeof t != "symbol" ? t + "" : t, e),
e);
const DS = class f0 extends Ct {
    constructor(t) {
        t = {
            ...f0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: zS,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: kS,
            name: "adjustment-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                adjustmentUniforms: {
                    uGamma: {
                        value: t.gamma,
                        type: "f32"
                    },
                    uContrast: {
                        value: t.contrast,
                        type: "f32"
                    },
                    uSaturation: {
                        value: t.saturation,
                        type: "f32"
                    },
                    uBrightness: {
                        value: t.brightness,
                        type: "f32"
                    },
                    uColor: {
                        value: [t.red, t.green, t.blue, t.alpha],
                        type: "vec4<f32>"
                    }
                }
            }
        }),
        h0(this, "uniforms"),
        this.uniforms = this.resources.adjustmentUniforms.uniforms
    }
    get gamma() {
        return this.uniforms.uGamma
    }
    set gamma(t) {
        this.uniforms.uGamma = t
    }
    get contrast() {
        return this.uniforms.uContrast
    }
    set contrast(t) {
        this.uniforms.uContrast = t
    }
    get saturation() {
        return this.uniforms.uSaturation
    }
    set saturation(t) {
        this.uniforms.uSaturation = t
    }
    get brightness() {
        return this.uniforms.uBrightness
    }
    set brightness(t) {
        this.uniforms.uBrightness = t
    }
    get red() {
        return this.uniforms.uColor[0]
    }
    set red(t) {
        this.uniforms.uColor[0] = t
    }
    get green() {
        return this.uniforms.uColor[1]
    }
    set green(t) {
        this.uniforms.uColor[1] = t
    }
    get blue() {
        return this.uniforms.uColor[2]
    }
    set blue(t) {
        this.uniforms.uColor[2] = t
    }
    get alpha() {
        return this.uniforms.uColor[3]
    }
    set alpha(t) {
        this.uniforms.uColor[3] = t
    }
}
;
h0(DS, "DEFAULT_OPTIONS", {
    gamma: 1,
    contrast: 1,
    saturation: 1,
    brightness: 1,
    red: 1,
    green: 1,
    blue: 1,
    alpha: 1
});
var BS = `
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`
  , US = `struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`
  , $S = `
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`
  , NS = `struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`
  , GS = Object.defineProperty
  , VS = (n, t, e) => t in n ? GS(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , _i = (n, t, e) => (VS(n, typeof t != "symbol" ? t + "" : t, e),
e);
const d0 = class p0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        (typeof e == "number" || Array.isArray(e)) && (J("6.0.0", "KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),
        e = {
            strength: e
        },
        t[1] !== void 0 && (e.quality = t[1]),
        t[2] !== void 0 && (e.clamp = t[2])),
        e = {
            ...p0.DEFAULT_OPTIONS,
            ...e
        };
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: e?.clamp ? NS : US,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: e?.clamp ? $S : BS,
            name: "kawase-blur-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                kawaseBlurUniforms: {
                    uOffset: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        _i(this, "uniforms"),
        _i(this, "_pixelSize", {
            x: 0,
            y: 0
        }),
        _i(this, "_clamp"),
        _i(this, "_kernels", []),
        _i(this, "_blur"),
        _i(this, "_quality"),
        this.uniforms = this.resources.kawaseBlurUniforms.uniforms,
        this.pixelSize = e.pixelSize ?? {
            x: 1,
            y: 1
        },
        Array.isArray(e.strength) ? this.kernels = e.strength : typeof e.strength == "number" && (this._blur = e.strength,
        this.quality = e.quality ?? 3),
        this._clamp = !!e.clamp
    }
    apply(t, e, r, i) {
        const s = this.pixelSizeX / e.source.width
          , o = this.pixelSizeY / e.source.height;
        let a;
        if (this._quality === 1 || this._blur === 0)
            a = this._kernels[0] + .5,
            this.uniforms.uOffset[0] = a * s,
            this.uniforms.uOffset[1] = a * o,
            t.applyFilter(this, e, r, i);
        else {
            const l = Ur.getSameSizeTexture(e);
            let u = e, c = l, f;
            const d = this._quality - 1;
            for (let h = 0; h < d; h++)
                a = this._kernels[h] + .5,
                this.uniforms.uOffset[0] = a * s,
                this.uniforms.uOffset[1] = a * o,
                t.applyFilter(this, u, c, !0),
                f = u,
                u = c,
                c = f;
            a = this._kernels[d] + .5,
            this.uniforms.uOffset[0] = a * s,
            this.uniforms.uOffset[1] = a * o,
            t.applyFilter(this, u, r, i),
            Ur.returnTexture(l)
        }
    }
    get strength() {
        return this._blur
    }
    set strength(t) {
        this._blur = t,
        this._generateKernels()
    }
    get quality() {
        return this._quality
    }
    set quality(t) {
        this._quality = Math.max(1, Math.round(t)),
        this._generateKernels()
    }
    get kernels() {
        return this._kernels
    }
    set kernels(t) {
        Array.isArray(t) && t.length > 0 ? (this._kernels = t,
        this._quality = t.length,
        this._blur = Math.max(...t)) : (this._kernels = [0],
        this._quality = 1)
    }
    get pixelSize() {
        return this._pixelSize
    }
    set pixelSize(t) {
        if (typeof t == "number") {
            this.pixelSizeX = this.pixelSizeY = t;
            return
        }
        if (Array.isArray(t)) {
            this.pixelSizeX = t[0],
            this.pixelSizeY = t[1];
            return
        }
        this._pixelSize = t
    }
    get pixelSizeX() {
        return this.pixelSize.x
    }
    set pixelSizeX(t) {
        this.pixelSize.x = t
    }
    get pixelSizeY() {
        return this.pixelSize.y
    }
    set pixelSizeY(t) {
        this.pixelSize.y = t
    }
    get clamp() {
        return this._clamp
    }
    _updatePadding() {
        this.padding = Math.ceil(this._kernels.reduce( (t, e) => t + e + .5, 0))
    }
    _generateKernels() {
        const t = this._blur
          , e = this._quality
          , r = [t];
        if (t > 0) {
            let i = t;
            const s = t / e;
            for (let o = 1; o < e; o++)
                i -= s,
                r.push(i)
        }
        this._kernels = r,
        this._updatePadding()
    }
}
;
_i(d0, "DEFAULT_OPTIONS", {
    strength: 4,
    quality: 3,
    clamp: !1,
    pixelSize: {
        x: 1,
        y: 1
    }
});
let m0 = d0;
var WS = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`
  , XS = `struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`
  , HS = `
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`
  , YS = `struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`
  , jS = Object.defineProperty
  , qS = (n, t, e) => t in n ? jS(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , g0 = (n, t, e) => (qS(n, typeof t != "symbol" ? t + "" : t, e),
e);
const x0 = class v0 extends Ct {
    constructor(t) {
        t = {
            ...v0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: YS,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: HS,
            name: "extract-brightness-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                extractBrightnessUniforms: {
                    uThreshold: {
                        value: t.threshold,
                        type: "f32"
                    }
                }
            }
        }),
        g0(this, "uniforms"),
        this.uniforms = this.resources.extractBrightnessUniforms.uniforms
    }
    get threshold() {
        return this.uniforms.uThreshold
    }
    set threshold(t) {
        this.uniforms.uThreshold = t
    }
}
;
g0(x0, "DEFAULT_OPTIONS", {
    threshold: .5
});
let KS = x0;
var ZS = Object.defineProperty
  , QS = (n, t, e) => t in n ? ZS(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , os = (n, t, e) => (QS(n, typeof t != "symbol" ? t + "" : t, e),
e);
const JS = class _0 extends Ct {
    constructor(t) {
        t = {
            ..._0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: XS,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: WS,
            name: "advanced-bloom-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                advancedBloomUniforms: {
                    uBloomScale: {
                        value: t.bloomScale,
                        type: "f32"
                    },
                    uBrightness: {
                        value: t.brightness,
                        type: "f32"
                    }
                },
                uMapTexture: ct.WHITE
            }
        }),
        os(this, "uniforms"),
        os(this, "bloomScale", 1),
        os(this, "brightness", 1),
        os(this, "_extractFilter"),
        os(this, "_blurFilter"),
        this.uniforms = this.resources.advancedBloomUniforms.uniforms,
        this._extractFilter = new KS({
            threshold: t.threshold
        }),
        this._blurFilter = new m0({
            strength: t.kernels ?? t.blur,
            quality: t.kernels ? void 0 : t.quality
        }),
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        const s = Ur.getSameSizeTexture(e);
        this._extractFilter.apply(t, e, s, !0);
        const o = Ur.getSameSizeTexture(e);
        this._blurFilter.apply(t, s, o, !0),
        this.uniforms.uBloomScale = this.bloomScale,
        this.uniforms.uBrightness = this.brightness,
        this.resources.uMapTexture = o.source,
        t.applyFilter(this, e, r, i),
        Ur.returnTexture(o),
        Ur.returnTexture(s)
    }
    get threshold() {
        return this._extractFilter.threshold
    }
    set threshold(t) {
        this._extractFilter.threshold = t
    }
    get kernels() {
        return this._blurFilter.kernels
    }
    set kernels(t) {
        this._blurFilter.kernels = t
    }
    get blur() {
        return this._blurFilter.strength
    }
    set blur(t) {
        this._blurFilter.strength = t
    }
    get quality() {
        return this._blurFilter.quality
    }
    set quality(t) {
        this._blurFilter.quality = t
    }
    get pixelSize() {
        return this._blurFilter.pixelSize
    }
    set pixelSize(t) {
        typeof t == "number" && (t = {
            x: t,
            y: t
        }),
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this._blurFilter.pixelSize = t
    }
    get pixelSizeX() {
        return this._blurFilter.pixelSizeX
    }
    set pixelSizeX(t) {
        this._blurFilter.pixelSizeX = t
    }
    get pixelSizeY() {
        return this._blurFilter.pixelSizeY
    }
    set pixelSizeY(t) {
        this._blurFilter.pixelSizeY = t
    }
}
;
os(JS, "DEFAULT_OPTIONS", {
    threshold: .5,
    bloomScale: 1,
    brightness: 1,
    blur: 8,
    quality: 4,
    pixelSize: {
        x: 1,
        y: 1
    }
});
var tw = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`
  , ew = `struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`
  , rw = Object.defineProperty
  , nw = (n, t, e) => t in n ? rw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Gc = (n, t, e) => (nw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const iw = class y0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        typeof e == "number" && (J("6.0.0", "AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),
        e = {
            size: e
        });
        const r = e?.color && e.replaceColor !== !1;
        e = {
            ...y0.DEFAULT_OPTIONS,
            ...e
        };
        const i = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: ew,
                entryPoint: "mainFragment"
            }
        })
          , s = xt.from({
            vertex: Ft,
            fragment: tw,
            name: "ascii-filter"
        });
        super({
            gpuProgram: i,
            glProgram: s,
            resources: {
                asciiUniforms: {
                    uSize: {
                        value: e.size,
                        type: "f32"
                    },
                    uColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uReplaceColor: {
                        value: Number(r),
                        type: "f32"
                    }
                }
            }
        }),
        Gc(this, "uniforms"),
        Gc(this, "_color"),
        this.uniforms = this.resources.asciiUniforms.uniforms,
        this._color = new At,
        this.color = e.color ?? 16777215
    }
    get size() {
        return this.uniforms.uSize
    }
    set size(t) {
        this.uniforms.uSize = t
    }
    get color() {
        return this._color.value
    }
    set color(t) {
        this._color.setValue(t);
        const [e,r,i] = this._color.toArray();
        this.uniforms.uColor[0] = e,
        this.uniforms.uColor[1] = r,
        this.uniforms.uColor[2] = i
    }
    get replaceColor() {
        return this.uniforms.uReplaceColor > .5
    }
    set replaceColor(t) {
        this.uniforms.uReplaceColor = t ? 1 : 0
    }
}
;
Gc(iw, "DEFAULT_OPTIONS", {
    size: 8,
    color: 16777215,
    replaceColor: !1
});
var sw = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`
  , ow = `struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`
  , aw = Object.defineProperty
  , lw = (n, t, e) => t in n ? aw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , as = (n, t, e) => (lw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const uw = class b0 extends Ct {
    constructor(t) {
        t = {
            ...b0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: ow,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: sw,
            name: "bevel-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                bevelUniforms: {
                    uLightColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uLightAlpha: {
                        value: t.lightAlpha,
                        type: "f32"
                    },
                    uShadowColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uShadowAlpha: {
                        value: t.shadowAlpha,
                        type: "f32"
                    },
                    uTransform: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                }
            },
            padding: 1
        }),
        as(this, "uniforms"),
        as(this, "_thickness"),
        as(this, "_rotation"),
        as(this, "_lightColor"),
        as(this, "_shadowColor"),
        this.uniforms = this.resources.bevelUniforms.uniforms,
        this._lightColor = new At,
        this._shadowColor = new At,
        this.lightColor = t.lightColor ?? 16777215,
        this.shadowColor = t.shadowColor ?? 0,
        Object.assign(this, t)
    }
    get rotation() {
        return this._rotation / Ls
    }
    set rotation(t) {
        this._rotation = t * Ls,
        this._updateTransform()
    }
    get thickness() {
        return this._thickness
    }
    set thickness(t) {
        this._thickness = t,
        this._updateTransform()
    }
    get lightColor() {
        return this._lightColor.value
    }
    set lightColor(t) {
        this._lightColor.setValue(t);
        const [e,r,i] = this._lightColor.toArray();
        this.uniforms.uLightColor[0] = e,
        this.uniforms.uLightColor[1] = r,
        this.uniforms.uLightColor[2] = i
    }
    get lightAlpha() {
        return this.uniforms.uLightAlpha
    }
    set lightAlpha(t) {
        this.uniforms.uLightAlpha = t
    }
    get shadowColor() {
        return this._shadowColor.value
    }
    set shadowColor(t) {
        this._shadowColor.setValue(t);
        const [e,r,i] = this._shadowColor.toArray();
        this.uniforms.uShadowColor[0] = e,
        this.uniforms.uShadowColor[1] = r,
        this.uniforms.uShadowColor[2] = i
    }
    get shadowAlpha() {
        return this.uniforms.uShadowAlpha
    }
    set shadowAlpha(t) {
        this.uniforms.uShadowAlpha = t
    }
    _updateTransform() {
        this.uniforms.uTransform[0] = this.thickness * Math.cos(this._rotation),
        this.uniforms.uTransform[1] = this.thickness * Math.sin(this._rotation)
    }
}
;
as(uw, "DEFAULT_OPTIONS", {
    rotation: 45,
    thickness: 2,
    lightColor: 16777215,
    lightAlpha: .7,
    shadowColor: 0,
    shadowAlpha: .7
});
var cw = Object.defineProperty
  , hw = (n, t, e) => t in n ? cw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , ja = (n, t, e) => (hw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const fw = class S0 extends yS {
    constructor(...t) {
        let e = t[0] ?? {};
        if (typeof e == "number" || Array.isArray(e) || "x"in e && "y"in e) {
            J("6.0.0", "BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");
            let r = e;
            Array.isArray(r) && (r = {
                x: r[0],
                y: r[1]
            }),
            e = {
                strength: r
            },
            t[1] !== void 0 && (e.quality = t[1]),
            t[2] !== void 0 && (e.resolution = t[2]),
            t[3] !== void 0 && (e.kernelSize = t[3])
        }
        e = {
            ...S0.DEFAULT_OPTIONS,
            ...e
        },
        super(),
        ja(this, "_blurXFilter"),
        ja(this, "_blurYFilter"),
        ja(this, "_strength"),
        this._strength = {
            x: 2,
            y: 2
        },
        e.strength && (typeof e.strength == "number" ? (this._strength.x = e.strength,
        this._strength.y = e.strength) : (this._strength.x = e.strength.x,
        this._strength.y = e.strength.y)),
        this._blurXFilter = new Yd({
            ...e,
            horizontal: !0,
            strength: this.strengthX
        }),
        this._blurYFilter = new Yd({
            ...e,
            horizontal: !1,
            strength: this.strengthY
        }),
        this._blurYFilter.blendMode = "screen",
        Object.assign(this, e)
    }
    apply(t, e, r, i) {
        const s = Ur.getSameSizeTexture(e);
        t.applyFilter(this, e, r, i),
        this._blurXFilter.apply(t, e, s, !0),
        this._blurYFilter.apply(t, s, r, !1),
        Ur.returnTexture(s)
    }
    get strength() {
        return this._strength
    }
    set strength(t) {
        this._strength = typeof t == "number" ? {
            x: t,
            y: t
        } : t,
        this._updateStrength()
    }
    get strengthX() {
        return this.strength.x
    }
    set strengthX(t) {
        this.strength.x = t,
        this._updateStrength()
    }
    get strengthY() {
        return this.strength.y
    }
    set strengthY(t) {
        this.strength.y = t,
        this._updateStrength()
    }
    _updateStrength() {
        this._blurXFilter.blur = this.strengthX,
        this._blurYFilter.blur = this.strengthY
    }
    get blur() {
        return J("6.0.0", "BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),
        this.strengthX
    }
    set blur(t) {
        J("6.0.0", "BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),
        this.strength = t
    }
    get blurX() {
        return J("6.0.0", "BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),
        this.strengthX
    }
    set blurX(t) {
        J("6.0.0", "BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),
        this.strengthX = t
    }
    get blurY() {
        return J("6.0.0", "BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),
        this.strengthY
    }
    set blurY(t) {
        J("6.0.0", "BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),
        this.strengthY = t
    }
}
;
ja(fw, "DEFAULT_OPTIONS", {
    strength: {
        x: 2,
        y: 2
    },
    quality: 4,
    resolution: 1,
    kernelSize: 5
});
var dw = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`
  , pw = `struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`
  , mw = Object.defineProperty
  , gw = (n, t, e) => t in n ? mw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , w0 = (n, t, e) => (gw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const C0 = class T0 extends Ct {
    constructor(t) {
        t = {
            ...T0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: pw,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: dw,
            name: "bulge-pinch-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                bulgePinchUniforms: {
                    uDimensions: {
                        value: [0, 0],
                        type: "vec2<f32>"
                    },
                    uCenter: {
                        value: t.center,
                        type: "vec2<f32>"
                    },
                    uRadius: {
                        value: t.radius,
                        type: "f32"
                    },
                    uStrength: {
                        value: t.strength,
                        type: "f32"
                    }
                }
            }
        }),
        w0(this, "uniforms"),
        this.uniforms = this.resources.bulgePinchUniforms.uniforms,
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        this.uniforms.uDimensions[0] = e.frame.width,
        this.uniforms.uDimensions[1] = e.frame.height,
        t.applyFilter(this, e, r, i)
    }
    get center() {
        return this.uniforms.uCenter
    }
    set center(t) {
        typeof t == "number" && (t = {
            x: t,
            y: t
        }),
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uCenter = t
    }
    get centerX() {
        return this.uniforms.uCenter.x
    }
    set centerX(t) {
        this.uniforms.uCenter.x = t
    }
    get centerY() {
        return this.uniforms.uCenter.y
    }
    set centerY(t) {
        this.uniforms.uCenter.y = t
    }
    get radius() {
        return this.uniforms.uRadius
    }
    set radius(t) {
        this.uniforms.uRadius = t
    }
    get strength() {
        return this.uniforms.uStrength
    }
    set strength(t) {
        this.uniforms.uStrength = t
    }
}
;
w0(C0, "DEFAULT_OPTIONS", {
    center: {
        x: .5,
        y: .5
    },
    radius: 100,
    strength: 1
});
let xw = C0;
var vw = `precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`
  , _w = `in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`
  , jd = `struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`
  , Zi = Zi || {};
Zi.stringify = function() {
    var n = {
        "visit_linear-gradient": function(t) {
            return n.visit_gradient(t)
        },
        "visit_repeating-linear-gradient": function(t) {
            return n.visit_gradient(t)
        },
        "visit_radial-gradient": function(t) {
            return n.visit_gradient(t)
        },
        "visit_repeating-radial-gradient": function(t) {
            return n.visit_gradient(t)
        },
        visit_gradient: function(t) {
            var e = n.visit(t.orientation);
            return e && (e += ", "),
            t.type + "(" + e + n.visit(t.colorStops) + ")"
        },
        visit_shape: function(t) {
            var e = t.value
              , r = n.visit(t.at)
              , i = n.visit(t.style);
            return i && (e += " " + i),
            r && (e += " at " + r),
            e
        },
        "visit_default-radial": function(t) {
            var e = ""
              , r = n.visit(t.at);
            return r && (e += r),
            e
        },
        "visit_extent-keyword": function(t) {
            var e = t.value
              , r = n.visit(t.at);
            return r && (e += " at " + r),
            e
        },
        "visit_position-keyword": function(t) {
            return t.value
        },
        visit_position: function(t) {
            return n.visit(t.value.x) + " " + n.visit(t.value.y)
        },
        "visit_%": function(t) {
            return t.value + "%"
        },
        visit_em: function(t) {
            return t.value + "em"
        },
        visit_px: function(t) {
            return t.value + "px"
        },
        visit_literal: function(t) {
            return n.visit_color(t.value, t)
        },
        visit_hex: function(t) {
            return n.visit_color("#" + t.value, t)
        },
        visit_rgb: function(t) {
            return n.visit_color("rgb(" + t.value.join(", ") + ")", t)
        },
        visit_rgba: function(t) {
            return n.visit_color("rgba(" + t.value.join(", ") + ")", t)
        },
        visit_color: function(t, e) {
            var r = t
              , i = n.visit(e.length);
            return i && (r += " " + i),
            r
        },
        visit_angular: function(t) {
            return t.value + "deg"
        },
        visit_directional: function(t) {
            return "to " + t.value
        },
        visit_array: function(t) {
            var e = ""
              , r = t.length;
            return t.forEach(function(i, s) {
                e += n.visit(i),
                s < r - 1 && (e += ", ")
            }),
            e
        },
        visit: function(t) {
            if (!t)
                return "";
            var e = "";
            if (t instanceof Array)
                return n.visit_array(t, e);
            if (t.type) {
                var r = n["visit_" + t.type];
                if (r)
                    return r(t);
                throw Error("Missing visitor visit_" + t.type)
            } else
                throw Error("Invalid node.")
        }
    };
    return function(t) {
        return n.visit(t)
    }
}();
var Zi = Zi || {};
Zi.parse = function() {
    var n = {
        linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
        repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
        radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
        repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
        sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
        extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
        positionKeywords: /^(left|center|right|top|bottom)/i,
        pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
        percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
        emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
        angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
        startCall: /^\(/,
        endCall: /^\)/,
        comma: /^,/,
        hexColor: /^\#([0-9a-fA-F]+)/,
        literalColor: /^([a-zA-Z]+)/,
        rgbColor: /^rgb/i,
        rgbaColor: /^rgba/i,
        number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
    }
      , t = "";
    function e(k) {
        var X = new Error(t + ": " + k);
        throw X.source = t,
        X
    }
    function r() {
        var k = i();
        return t.length > 0 && e("Invalid input not EOF"),
        k
    }
    function i() {
        return _(s)
    }
    function s() {
        return o("linear-gradient", n.linearGradient, l) || o("repeating-linear-gradient", n.repeatingLinearGradient, l) || o("radial-gradient", n.radialGradient, f) || o("repeating-radial-gradient", n.repeatingRadialGradient, f)
    }
    function o(k, X, $) {
        return a(X, function(b) {
            var tt = $();
            return tt && (V(n.comma) || e("Missing comma before color stops")),
            {
                type: k,
                orientation: tt,
                colorStops: _(y)
            }
        })
    }
    function a(k, X) {
        var $ = V(k);
        if ($) {
            V(n.startCall) || e("Missing (");
            var b = X($);
            return V(n.endCall) || e("Missing )"),
            b
        }
    }
    function l() {
        return u() || c()
    }
    function u() {
        return L("directional", n.sideOrCorner, 1)
    }
    function c() {
        return L("angular", n.angleValue, 1)
    }
    function f() {
        var k, X = d(), $;
        return X && (k = [],
        k.push(X),
        $ = t,
        V(n.comma) && (X = d(),
        X ? k.push(X) : t = $)),
        k
    }
    function d() {
        var k = h() || m();
        if (k)
            k.at = g();
        else {
            var X = p();
            if (X) {
                k = X;
                var $ = g();
                $ && (k.at = $)
            } else {
                var b = x();
                b && (k = {
                    type: "default-radial",
                    at: b
                })
            }
        }
        return k
    }
    function h() {
        var k = L("shape", /^(circle)/i, 0);
        return k && (k.style = z() || p()),
        k
    }
    function m() {
        var k = L("shape", /^(ellipse)/i, 0);
        return k && (k.style = B() || p()),
        k
    }
    function p() {
        return L("extent-keyword", n.extentKeywords, 1)
    }
    function g() {
        if (L("position", /^at/, 0)) {
            var k = x();
            return k || e("Missing positioning value"),
            k
        }
    }
    function x() {
        var k = v();
        if (k.x || k.y)
            return {
                type: "position",
                value: k
            }
    }
    function v() {
        return {
            x: B(),
            y: B()
        }
    }
    function _(k) {
        var X = k()
          , $ = [];
        if (X)
            for ($.push(X); V(n.comma); )
                X = k(),
                X ? $.push(X) : e("One extra comma");
        return $
    }
    function y() {
        var k = S();
        return k || e("Expected color definition"),
        k.length = B(),
        k
    }
    function S() {
        return w() || T() || P() || O()
    }
    function O() {
        return L("literal", n.literalColor, 0)
    }
    function w() {
        return L("hex", n.hexColor, 1)
    }
    function P() {
        return a(n.rgbColor, function() {
            return {
                type: "rgb",
                value: _(M)
            }
        })
    }
    function T() {
        return a(n.rgbaColor, function() {
            return {
                type: "rgba",
                value: _(M)
            }
        })
    }
    function M() {
        return V(n.number)[1]
    }
    function B() {
        return L("%", n.percentageValue, 1) || U() || z()
    }
    function U() {
        return L("position-keyword", n.positionKeywords, 1)
    }
    function z() {
        return L("px", n.pixelValue, 1) || L("em", n.emValue, 1)
    }
    function L(k, X, $) {
        var b = V(X);
        if (b)
            return {
                type: k,
                value: b[$]
            }
    }
    function V(k) {
        var X, $;
        return $ = /^[\n\r\t\s]+/.exec(t),
        $ && G($[0].length),
        X = k.exec(t),
        X && G(X[0].length),
        X
    }
    function G(k) {
        t = t.substr(k)
    }
    return function(k) {
        return t = k.toString(),
        r()
    }
}();
var yw = Zi.parse;
Zi.stringify;
function bw(n) {
    const t = yw(Ow(n));
    if (t.length === 0)
        throw new Error("Invalid CSS gradient.");
    if (t.length !== 1)
        throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");
    const e = t[0]
      , r = Sw(e.type)
      , i = ww(e.colorStops)
      , s = Pw(e.orientation);
    return {
        type: r,
        stops: i,
        angle: s
    }
}
function Sw(n) {
    const t = {
        "linear-gradient": 0,
        "radial-gradient": 1
    };
    if (!(n in t))
        throw new Error(`Unsupported gradient type "${n}"`);
    return t[n]
}
function ww(n) {
    const t = Tw(n)
      , e = []
      , r = new At;
    for (let i = 0; i < n.length; i++) {
        const s = Cw(n[i])
          , o = r.setValue(s).toArray();
        e.push({
            offset: t[i],
            color: o.slice(0, 3),
            alpha: o[3]
        })
    }
    return e
}
function Cw(n) {
    switch (n.type) {
    case "hex":
        return `#${n.value}`;
    case "literal":
        return n.value;
    default:
        return `${n.type}(${n.value.join(",")})`
    }
}
function Tw(n) {
    const t = [];
    for (let s = 0; s < n.length; s++) {
        const o = n[s];
        let a = -1;
        o.type === "literal" && o.length && "type"in o.length && o.length.type === "%" && "value"in o.length && (a = parseFloat(o.length.value) / 100),
        t.push(a)
    }
    const r = s => {
        for (let o = s; o < t.length; o++)
            if (t[o] !== -1)
                return {
                    indexDelta: o - s,
                    offset: t[o]
                };
        return {
            indexDelta: t.length - 1 - s,
            offset: 1
        }
    }
    ;
    let i = 0;
    for (let s = 0; s < t.length; s++) {
        const o = t[s];
        if (o !== -1)
            i = o;
        else if (s === 0)
            t[s] = 0;
        else if (s + 1 === t.length)
            t[s] = 1;
        else {
            const a = r(s)
              , u = (a.offset - i) / (1 + a.indexDelta);
            for (let c = 0; c <= a.indexDelta; c++)
                t[s + c] = i + (c + 1) * u;
            s += a.indexDelta,
            i = t[s]
        }
    }
    return t.map(Aw)
}
function Aw(n) {
    return n.toString().length > 6 ? parseFloat(n.toString().substring(0, 6)) : n
}
function Pw(n) {
    if (typeof n > "u")
        return 0;
    if ("type"in n && "value"in n)
        switch (n.type) {
        case "angular":
            return parseFloat(n.value);
        case "directional":
            return Mw(n.value)
        }
    return 0
}
function Mw(n) {
    const t = {
        left: 270,
        top: 0,
        bottom: 180,
        right: 90,
        "left top": 315,
        "top left": 315,
        "left bottom": 225,
        "bottom left": 225,
        "right top": 45,
        "top right": 45,
        "right bottom": 135,
        "bottom right": 135
    };
    if (!(n in t))
        throw new Error(`Unsupported directional value "${n}"`);
    return t[n]
}
function Ow(n) {
    let t = n.replace(/\s{2,}/gu, " ");
    return t = t.replace(/;/g, ""),
    t = t.replace(/ ,/g, ","),
    t = t.replace(/\( /g, "("),
    t = t.replace(/ \)/g, ")"),
    t.trim()
}
var Fw = Object.defineProperty
  , Ew = (n, t, e) => t in n ? Fw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , ki = (n, t, e) => (Ew(n, typeof t != "symbol" ? t + "" : t, e),
e);
const Du = 90;
function Iw(n) {
    return [...n].sort( (t, e) => t.offset - e.offset)
}
const ea = class qa extends Ct {
    constructor(t) {
        if (t && "css"in t ? t = {
            ...bw(t.css || ""),
            alpha: t.alpha ?? qa.defaults.alpha,
            maxColors: t.maxColors ?? qa.defaults.maxColors
        } : t = {
            ...qa.defaults,
            ...t
        },
        !t.stops || t.stops.length < 2)
            throw new Error("ColorGradientFilter requires at least 2 color stops.");
        const e = dt.from({
            vertex: {
                source: jd,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: jd,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: _w,
            fragment: vw,
            name: "color-gradient-filter"
        })
          , i = 32;
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                baseUniforms: {
                    uOptions: {
                        value: [t.type, t.angle ?? Du, t.alpha, t.replace ? 1 : 0],
                        type: "vec4<f32>"
                    },
                    uCounts: {
                        value: [t.stops.length, t.maxColors],
                        type: "vec2<f32>"
                    }
                },
                stopsUniforms: {
                    uColors: {
                        value: new Float32Array(i * 3),
                        type: "vec3<f32>",
                        size: i
                    },
                    uStops: {
                        value: new Float32Array(i * 4),
                        type: "vec4<f32>",
                        size: i
                    }
                }
            }
        }),
        ki(this, "baseUniforms"),
        ki(this, "stopsUniforms"),
        ki(this, "_stops", []),
        this.baseUniforms = this.resources.baseUniforms.uniforms,
        this.stopsUniforms = this.resources.stopsUniforms.uniforms,
        Object.assign(this, t)
    }
    get stops() {
        return this._stops
    }
    set stops(t) {
        const e = Iw(t)
          , r = new At;
        let i, s, o;
        for (let a = 0; a < e.length; a++) {
            r.setValue(e[a].color);
            const l = a * 3;
            [i,s,o] = r.toArray(),
            this.stopsUniforms.uColors[l] = i,
            this.stopsUniforms.uColors[l + 1] = s,
            this.stopsUniforms.uColors[l + 2] = o,
            this.stopsUniforms.uStops[a * 4] = e[a].offset,
            this.stopsUniforms.uStops[a * 4 + 1] = e[a].alpha
        }
        this.baseUniforms.uCounts[0] = e.length,
        this._stops = e
    }
    get type() {
        return this.baseUniforms.uOptions[0]
    }
    set type(t) {
        this.baseUniforms.uOptions[0] = t
    }
    get angle() {
        return this.baseUniforms.uOptions[1] + Du
    }
    set angle(t) {
        this.baseUniforms.uOptions[1] = t - Du
    }
    get alpha() {
        return this.baseUniforms.uOptions[2]
    }
    set alpha(t) {
        this.baseUniforms.uOptions[2] = t
    }
    get maxColors() {
        return this.baseUniforms.uCounts[1]
    }
    set maxColors(t) {
        this.baseUniforms.uCounts[1] = t
    }
    get replace() {
        return this.baseUniforms.uOptions[3] > .5
    }
    set replace(t) {
        this.baseUniforms.uOptions[3] = t ? 1 : 0
    }
}
;
ki(ea, "LINEAR", 0);
ki(ea, "RADIAL", 1);
ki(ea, "CONIC", 2);
ki(ea, "defaults", {
    type: ea.LINEAR,
    stops: [{
        offset: 0,
        color: 16711680,
        alpha: 1
    }, {
        offset: 1,
        color: 255,
        alpha: 1
    }],
    alpha: 1,
    angle: 90,
    maxColors: 0,
    replace: !1
});
var kw = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`
  , zw = `struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`
  , Rw = Object.defineProperty
  , Lw = (n, t, e) => t in n ? Rw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , wn = (n, t, e) => (Lw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const Dw = class A0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        if ((e instanceof ct || e instanceof fr) && (J("6.0.0", "ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),
        e = {
            colorMap: e
        },
        t[1] !== void 0 && (e.nearest = t[1]),
        t[2] !== void 0 && (e.mix = t[2])),
        e = {
            ...A0.DEFAULT_OPTIONS,
            ...e
        },
        !e.colorMap)
            throw Error("No color map texture source was provided to ColorMapFilter");
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: zw,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: kw,
            name: "color-map-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                colorMapUniforms: {
                    uMix: {
                        value: e.mix,
                        type: "f32"
                    },
                    uSize: {
                        value: 0,
                        type: "f32"
                    },
                    uSliceSize: {
                        value: 0,
                        type: "f32"
                    },
                    uSlicePixelSize: {
                        value: 0,
                        type: "f32"
                    },
                    uSliceInnerSize: {
                        value: 0,
                        type: "f32"
                    }
                },
                uMapTexture: e.colorMap.source,
                uMapSampler: e.colorMap.source.style
            }
        }),
        wn(this, "uniforms"),
        wn(this, "_size", 0),
        wn(this, "_sliceSize", 0),
        wn(this, "_slicePixelSize", 0),
        wn(this, "_sliceInnerSize", 0),
        wn(this, "_nearest", !1),
        wn(this, "_scaleMode", "linear"),
        wn(this, "_colorMap"),
        this.uniforms = this.resources.colorMapUniforms.uniforms,
        Object.assign(this, e)
    }
    get mix() {
        return this.uniforms.uMix
    }
    set mix(t) {
        this.uniforms.uMix = t
    }
    get colorSize() {
        return this._size
    }
    get colorMap() {
        return this._colorMap
    }
    set colorMap(t) {
        if (!t || t === this.colorMap)
            return;
        const e = t instanceof ct ? t.source : t;
        e.style.scaleMode = this._scaleMode,
        e.autoGenerateMipmaps = !1,
        this._size = e.height,
        this._sliceSize = 1 / this._size,
        this._slicePixelSize = this._sliceSize / this._size,
        this._sliceInnerSize = this._slicePixelSize * (this._size - 1),
        this.uniforms.uSize = this._size,
        this.uniforms.uSliceSize = this._sliceSize,
        this.uniforms.uSlicePixelSize = this._slicePixelSize,
        this.uniforms.uSliceInnerSize = this._sliceInnerSize,
        this.resources.uMapTexture = e,
        this._colorMap = t
    }
    get nearest() {
        return this._nearest
    }
    set nearest(t) {
        this._nearest = t,
        this._scaleMode = t ? "nearest" : "linear";
        const e = this._colorMap;
        e && e.source && (e.source.scaleMode = this._scaleMode,
        e.source.autoGenerateMipmaps = !1,
        e.source.style.update(),
        e.source.update())
    }
    updateColorMap() {
        const t = this._colorMap;
        t?.source && (t.source.update(),
        this.colorMap = t)
    }
    destroy() {
        this._colorMap?.destroy(),
        super.destroy()
    }
}
;
wn(Dw, "DEFAULT_OPTIONS", {
    colorMap: ct.WHITE,
    nearest: !1,
    mix: 1
});
var Bw = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`
  , Uw = `struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`
  , $w = Object.defineProperty
  , Nw = (n, t, e) => t in n ? $w(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Vc = (n, t, e) => (Nw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const Gw = class P0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        (typeof e == "number" || Array.isArray(e) || e instanceof Float32Array) && (J("6.0.0", "ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),
        e = {
            color: e
        },
        t[1] !== void 0 && (e.alpha = t[1])),
        e = {
            ...P0.DEFAULT_OPTIONS,
            ...e
        };
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: Uw,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: Bw,
            name: "color-overlay-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                colorOverlayUniforms: {
                    uColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uAlpha: {
                        value: e.alpha,
                        type: "f32"
                    }
                }
            }
        }),
        Vc(this, "uniforms"),
        Vc(this, "_color"),
        this.uniforms = this.resources.colorOverlayUniforms.uniforms,
        this._color = new At,
        this.color = e.color ?? 0
    }
    get color() {
        return this._color.value
    }
    set color(t) {
        this._color.setValue(t);
        const [e,r,i] = this._color.toArray();
        this.uniforms.uColor[0] = e,
        this.uniforms.uColor[1] = r,
        this.uniforms.uColor[2] = i
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
}
;
Vc(Gw, "DEFAULT_OPTIONS", {
    color: 0,
    alpha: 1
});
var Vw = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`
  , Ww = `struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`
  , Xw = Object.defineProperty
  , Hw = (n, t, e) => t in n ? Xw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Ka = (n, t, e) => (Hw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const Yw = class M0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        (typeof e == "number" || Array.isArray(e) || e instanceof Float32Array) && (J("6.0.0", "ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),
        e = {
            originalColor: e
        },
        t[1] !== void 0 && (e.targetColor = t[1]),
        t[2] !== void 0 && (e.tolerance = t[2])),
        e = {
            ...M0.DEFAULT_OPTIONS,
            ...e
        };
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: Ww,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: Vw,
            name: "color-replace-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                colorReplaceUniforms: {
                    uOriginalColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uTargetColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uTolerance: {
                        value: e.tolerance,
                        type: "f32"
                    }
                }
            }
        }),
        Ka(this, "uniforms"),
        Ka(this, "_originalColor"),
        Ka(this, "_targetColor"),
        this.uniforms = this.resources.colorReplaceUniforms.uniforms,
        this._originalColor = new At,
        this._targetColor = new At,
        this.originalColor = e.originalColor ?? 16711680,
        this.targetColor = e.targetColor ?? 0,
        Object.assign(this, e)
    }
    get originalColor() {
        return this._originalColor.value
    }
    set originalColor(t) {
        this._originalColor.setValue(t);
        const [e,r,i] = this._originalColor.toArray();
        this.uniforms.uOriginalColor[0] = e,
        this.uniforms.uOriginalColor[1] = r,
        this.uniforms.uOriginalColor[2] = i
    }
    get targetColor() {
        return this._targetColor.value
    }
    set targetColor(t) {
        this._targetColor.setValue(t);
        const [e,r,i] = this._targetColor.toArray();
        this.uniforms.uTargetColor[0] = e,
        this.uniforms.uTargetColor[1] = r,
        this.uniforms.uTargetColor[2] = i
    }
    get tolerance() {
        return this.uniforms.uTolerance
    }
    set tolerance(t) {
        this.uniforms.uTolerance = t
    }
    set newColor(t) {
        J("6.0.0", "ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),
        this.targetColor = t
    }
    get newColor() {
        return J("6.0.0", "ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),
        this.targetColor
    }
    set epsilon(t) {
        J("6.0.0", "ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),
        this.tolerance = t
    }
    get epsilon() {
        return J("6.0.0", "ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),
        this.tolerance
    }
}
;
Ka(Yw, "DEFAULT_OPTIONS", {
    originalColor: 16711680,
    targetColor: 0,
    tolerance: .4
});
var jw = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`
  , qw = `struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`
  , Kw = Object.defineProperty
  , Zw = (n, t, e) => t in n ? Kw(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , O0 = (n, t, e) => (Zw(n, typeof t != "symbol" ? t + "" : t, e),
e);
const Qw = class F0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        Array.isArray(e) && (J("6.0.0", "ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),
        e = {
            matrix: e
        },
        t[1] !== void 0 && (e.width = t[1]),
        t[2] !== void 0 && (e.height = t[2])),
        e = {
            ...F0.DEFAULT_OPTIONS,
            ...e
        };
        const r = e.width ?? 200
          , i = e.height ?? 200
          , s = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: qw,
                entryPoint: "mainFragment"
            }
        })
          , o = xt.from({
            vertex: Ft,
            fragment: jw,
            name: "convolution-filter"
        });
        super({
            gpuProgram: s,
            glProgram: o,
            resources: {
                convolutionUniforms: {
                    uMatrix: {
                        value: e.matrix,
                        type: "mat3x3<f32>"
                    },
                    uTexelSize: {
                        value: {
                            x: 1 / r,
                            y: 1 / i
                        },
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        O0(this, "uniforms"),
        this.uniforms = this.resources.convolutionUniforms.uniforms,
        this.width = r,
        this.height = i
    }
    get matrix() {
        return this.uniforms.uMatrix
    }
    set matrix(t) {
        t.forEach( (e, r) => {
            this.uniforms.uMatrix[r] = e
        }
        )
    }
    get width() {
        return 1 / this.uniforms.uTexelSize.x
    }
    set width(t) {
        this.uniforms.uTexelSize.x = 1 / t
    }
    get height() {
        return 1 / this.uniforms.uTexelSize.y
    }
    set height(t) {
        this.uniforms.uTexelSize.y = 1 / t
    }
}
;
O0(Qw, "DEFAULT_OPTIONS", {
    matrix: new Float32Array(9),
    width: 200,
    height: 200
});
var Jw = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`
  , tC = `struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`
  , eC = Object.defineProperty
  , rC = (n, t, e) => t in n ? eC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Za = (n, t, e) => (rC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const nC = class E0 extends Ct {
    constructor(t) {
        t = {
            ...E0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: tC,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: Jw,
            name: "crt-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                crtUniforms: {
                    uLine: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uNoise: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    },
                    uVignette: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uSeed: {
                        value: t.seed,
                        type: "f32"
                    },
                    uTime: {
                        value: t.time,
                        type: "f32"
                    },
                    uDimensions: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        Za(this, "uniforms"),
        Za(this, "seed"),
        Za(this, "time"),
        this.uniforms = this.resources.crtUniforms.uniforms,
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        this.uniforms.uDimensions[0] = e.frame.width,
        this.uniforms.uDimensions[1] = e.frame.height,
        this.uniforms.uSeed = this.seed,
        this.uniforms.uTime = this.time,
        t.applyFilter(this, e, r, i)
    }
    get curvature() {
        return this.uniforms.uLine[0]
    }
    set curvature(t) {
        this.uniforms.uLine[0] = t
    }
    get lineWidth() {
        return this.uniforms.uLine[1]
    }
    set lineWidth(t) {
        this.uniforms.uLine[1] = t
    }
    get lineContrast() {
        return this.uniforms.uLine[2]
    }
    set lineContrast(t) {
        this.uniforms.uLine[2] = t
    }
    get verticalLine() {
        return this.uniforms.uLine[3] > .5
    }
    set verticalLine(t) {
        this.uniforms.uLine[3] = t ? 1 : 0
    }
    get noise() {
        return this.uniforms.uNoise[0]
    }
    set noise(t) {
        this.uniforms.uNoise[0] = t
    }
    get noiseSize() {
        return this.uniforms.uNoise[1]
    }
    set noiseSize(t) {
        this.uniforms.uNoise[1] = t
    }
    get vignetting() {
        return this.uniforms.uVignette[0]
    }
    set vignetting(t) {
        this.uniforms.uVignette[0] = t
    }
    get vignettingAlpha() {
        return this.uniforms.uVignette[1]
    }
    set vignettingAlpha(t) {
        this.uniforms.uVignette[1] = t
    }
    get vignettingBlur() {
        return this.uniforms.uVignette[2]
    }
    set vignettingBlur(t) {
        this.uniforms.uVignette[2] = t
    }
}
;
Za(nC, "DEFAULT_OPTIONS", {
    curvature: 1,
    lineWidth: 1,
    lineContrast: .25,
    verticalLine: !1,
    noise: 0,
    noiseSize: 1,
    vignetting: .3,
    vignettingAlpha: 1,
    vignettingBlur: .3,
    time: 0,
    seed: 0
});
var iC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`
  , sC = `struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`
  , oC = Object.defineProperty
  , aC = (n, t, e) => t in n ? oC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , lC = (n, t, e) => (aC(n, t + "", e),
e);
const uC = class I0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        typeof e == "number" && (J("6.0.0", "DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),
        e = {
            scale: e
        },
        t[1] !== void 0 && (e.angle = t[1]),
        t[2] !== void 0 && (e.grayscale = t[2])),
        e = {
            ...I0.DEFAULT_OPTIONS,
            ...e
        };
        const r = {
            uScale: {
                value: e.scale,
                type: "f32"
            },
            uAngle: {
                value: e.angle,
                type: "f32"
            },
            uGrayScale: {
                value: e.grayscale ? 1 : 0,
                type: "f32"
            }
        }
          , i = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: sC,
                entryPoint: "mainFragment"
            }
        })
          , s = xt.from({
            vertex: Ft,
            fragment: iC,
            name: "dot-filter"
        });
        super({
            gpuProgram: i,
            glProgram: s,
            resources: {
                dotUniforms: r
            }
        })
    }
    get scale() {
        return this.resources.dotUniforms.uniforms.uScale
    }
    set scale(t) {
        this.resources.dotUniforms.uniforms.uScale = t
    }
    get angle() {
        return this.resources.dotUniforms.uniforms.uAngle
    }
    set angle(t) {
        this.resources.dotUniforms.uniforms.uAngle = t
    }
    get grayscale() {
        return this.resources.dotUniforms.uniforms.uGrayScale === 1
    }
    set grayscale(t) {
        this.resources.dotUniforms.uniforms.uGrayScale = t ? 1 : 0
    }
}
;
lC(uC, "DEFAULT_OPTIONS", {
    scale: 1,
    angle: 5,
    grayscale: !0
});
var cC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`
  , hC = `struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`
  , fC = Object.defineProperty
  , dC = (n, t, e) => t in n ? fC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , ls = (n, t, e) => (dC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const pC = class k0 extends Ct {
    constructor(t) {
        t = {
            ...k0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: hC,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: cC,
            name: "drop-shadow-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                dropShadowUniforms: {
                    uAlpha: {
                        value: t.alpha,
                        type: "f32"
                    },
                    uColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uOffset: {
                        value: t.offset,
                        type: "vec2<f32>"
                    }
                }
            },
            resolution: t.resolution
        }),
        ls(this, "uniforms"),
        ls(this, "shadowOnly", !1),
        ls(this, "_color"),
        ls(this, "_blurFilter"),
        ls(this, "_basePass"),
        this.uniforms = this.resources.dropShadowUniforms.uniforms,
        this._color = new At,
        this.color = t.color ?? 0,
        this._blurFilter = new m0({
            strength: t.kernels ?? t.blur,
            quality: t.kernels ? void 0 : t.quality
        }),
        this._basePass = new Ct({
            gpuProgram: dt.from({
                vertex: {
                    source: Et,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: `
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,
                    entryPoint: "mainFragment"
                }
            }),
            glProgram: xt.from({
                vertex: Ft,
                fragment: `
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,
                name: "drop-shadow-filter"
            }),
            resources: {}
        }),
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        const s = Ur.getSameSizeTexture(e);
        t.applyFilter(this, e, s, !0),
        this._blurFilter.apply(t, s, r, i),
        this.shadowOnly || t.applyFilter(this._basePass, e, r, !1),
        Ur.returnTexture(s)
    }
    get offset() {
        return this.uniforms.uOffset
    }
    set offset(t) {
        this.uniforms.uOffset = t,
        this._updatePadding()
    }
    get offsetX() {
        return this.offset.x
    }
    set offsetX(t) {
        this.offset.x = t,
        this._updatePadding()
    }
    get offsetY() {
        return this.offset.y
    }
    set offsetY(t) {
        this.offset.y = t,
        this._updatePadding()
    }
    get color() {
        return this._color.value
    }
    set color(t) {
        this._color.setValue(t);
        const [e,r,i] = this._color.toArray();
        this.uniforms.uColor[0] = e,
        this.uniforms.uColor[1] = r,
        this.uniforms.uColor[2] = i
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
    get blur() {
        return this._blurFilter.strength
    }
    set blur(t) {
        this._blurFilter.strength = t,
        this._updatePadding()
    }
    get quality() {
        return this._blurFilter.quality
    }
    set quality(t) {
        this._blurFilter.quality = t,
        this._updatePadding()
    }
    get kernels() {
        return this._blurFilter.kernels
    }
    set kernels(t) {
        this._blurFilter.kernels = t
    }
    get pixelSize() {
        return this._blurFilter.pixelSize
    }
    set pixelSize(t) {
        typeof t == "number" && (t = {
            x: t,
            y: t
        }),
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this._blurFilter.pixelSize = t
    }
    get pixelSizeX() {
        return this._blurFilter.pixelSizeX
    }
    set pixelSizeX(t) {
        this._blurFilter.pixelSizeX = t
    }
    get pixelSizeY() {
        return this._blurFilter.pixelSizeY
    }
    set pixelSizeY(t) {
        this._blurFilter.pixelSizeY = t
    }
    _updatePadding() {
        const t = Math.max(Math.abs(this.offsetX), Math.abs(this.offsetY));
        this.padding = t + this.blur * 2 + this.quality * 4
    }
}
;
ls(pC, "DEFAULT_OPTIONS", {
    offset: {
        x: 4,
        y: 4
    },
    color: 0,
    alpha: .5,
    shadowOnly: !1,
    kernels: void 0,
    blur: 2,
    quality: 3,
    pixelSize: {
        x: 1,
        y: 1
    },
    resolution: 1
});
var mC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`
  , gC = `struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`
  , xC = Object.defineProperty
  , vC = (n, t, e) => t in n ? xC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , cn = (n, t, e) => (vC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const _C = class z0 extends Ct {
    constructor(t) {
        t = {
            ...z0.defaults,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: gC,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: mC,
            name: "glitch-filter"
        })
          , i = document.createElement("canvas");
        i.width = 4,
        i.height = t.sampleSize ?? 512;
        const s = new ct({
            source: new Ki({
                resource: i
            })
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                glitchUniforms: {
                    uSeed: {
                        value: t?.seed ?? 0,
                        type: "f32"
                    },
                    uDimensions: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    },
                    uAspect: {
                        value: 1,
                        type: "f32"
                    },
                    uFillMode: {
                        value: t?.fillMode ?? 0,
                        type: "f32"
                    },
                    uOffset: {
                        value: t?.offset ?? 100,
                        type: "f32"
                    },
                    uDirection: {
                        value: t?.direction ?? 0,
                        type: "f32"
                    },
                    uRed: {
                        value: t.red,
                        type: "vec2<f32>"
                    },
                    uGreen: {
                        value: t.green,
                        type: "vec2<f32>"
                    },
                    uBlue: {
                        value: t.blue,
                        type: "vec2<f32>"
                    }
                },
                uDisplacementMap: s.source,
                uDisplacementSampler: s.source.style
            }
        }),
        cn(this, "uniforms"),
        cn(this, "average", !1),
        cn(this, "minSize", 8),
        cn(this, "sampleSize", 512),
        cn(this, "_canvas"),
        cn(this, "texture"),
        cn(this, "_slices", 0),
        cn(this, "_sizes", new Float32Array(1)),
        cn(this, "_offsets", new Float32Array(1)),
        this.uniforms = this.resources.glitchUniforms.uniforms,
        this._canvas = i,
        this.texture = s,
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        const {width: s, height: o} = e.frame;
        this.uniforms.uDimensions[0] = s,
        this.uniforms.uDimensions[1] = o,
        this.uniforms.uAspect = o / s,
        t.applyFilter(this, e, r, i)
    }
    _randomizeSizes() {
        const t = this._sizes
          , e = this._slices - 1
          , r = this.sampleSize
          , i = Math.min(this.minSize / r, .9 / this._slices);
        if (this.average) {
            const s = this._slices;
            let o = 1;
            for (let a = 0; a < e; a++) {
                const l = o / (s - a)
                  , u = Math.max(l * (1 - Math.random() * .6), i);
                t[a] = u,
                o -= u
            }
            t[e] = o
        } else {
            let s = 1;
            const o = Math.sqrt(1 / this._slices);
            for (let a = 0; a < e; a++) {
                const l = Math.max(o * s * Math.random(), i);
                t[a] = l,
                s -= l
            }
            t[e] = s
        }
        this.shuffle()
    }
    shuffle() {
        const t = this._sizes
          , e = this._slices - 1;
        for (let r = e; r > 0; r--) {
            const i = Math.random() * r >> 0
              , s = t[r];
            t[r] = t[i],
            t[i] = s
        }
    }
    _randomizeOffsets() {
        for (let t = 0; t < this._slices; t++)
            this._offsets[t] = Math.random() * (Math.random() < .5 ? -1 : 1)
    }
    refresh() {
        this._randomizeSizes(),
        this._randomizeOffsets(),
        this.redraw()
    }
    redraw() {
        const t = this.sampleSize
          , e = this.texture
          , r = this._canvas.getContext("2d");
        r.clearRect(0, 0, 8, t);
        let i, s = 0;
        for (let o = 0; o < this._slices; o++) {
            i = Math.floor(this._offsets[o] * 256);
            const a = this._sizes[o] * t
              , l = i > 0 ? i : 0
              , u = i < 0 ? -i : 0;
            r.fillStyle = `rgba(${l}, ${u}, 0, 1)`,
            r.fillRect(0, s >> 0, t, a + 1 >> 0),
            s += a
        }
        e.source.update()
    }
    set sizes(t) {
        const e = Math.min(this._slices, t.length);
        for (let r = 0; r < e; r++)
            this._sizes[r] = t[r]
    }
    get sizes() {
        return this._sizes
    }
    set offsets(t) {
        const e = Math.min(this._slices, t.length);
        for (let r = 0; r < e; r++)
            this._offsets[r] = t[r]
    }
    get offsets() {
        return this._offsets
    }
    get slices() {
        return this._slices
    }
    set slices(t) {
        this._slices !== t && (this._slices = t,
        this._sizes = new Float32Array(t),
        this._offsets = new Float32Array(t),
        this.refresh())
    }
    get offset() {
        return this.uniforms.uOffset
    }
    set offset(t) {
        this.uniforms.uOffset = t
    }
    get seed() {
        return this.uniforms.uSeed
    }
    set seed(t) {
        this.uniforms.uSeed = t
    }
    get fillMode() {
        return this.uniforms.uFillMode
    }
    set fillMode(t) {
        this.uniforms.uFillMode = t
    }
    get direction() {
        return this.uniforms.uDirection / Ls
    }
    set direction(t) {
        this.uniforms.uDirection = t * Ls
    }
    get red() {
        return this.uniforms.uRed
    }
    set red(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uRed = t
    }
    get green() {
        return this.uniforms.uGreen
    }
    set green(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uGreen = t
    }
    get blue() {
        return this.uniforms.uBlue
    }
    set blue(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uBlue = t
    }
    destroy() {
        this.texture?.destroy(!0),
        this.texture = this._canvas = this.red = this.green = this.blue = this._sizes = this._offsets = null
    }
}
;
cn(_C, "defaults", {
    slices: 5,
    offset: 100,
    direction: 0,
    fillMode: 0,
    average: !1,
    seed: 0,
    red: {
        x: 0,
        y: 0
    },
    green: {
        x: 0,
        y: 0
    },
    blue: {
        x: 0,
        y: 0
    },
    minSize: 8,
    sampleSize: 512
});
var yC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`
  , bC = `struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`
  , SC = Object.defineProperty
  , wC = (n, t, e) => t in n ? SC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Wc = (n, t, e) => (wC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const CC = class R0 extends Ct {
    constructor(t) {
        t = {
            ...R0.DEFAULT_OPTIONS,
            ...t
        };
        const e = t.distance ?? 10
          , r = t.quality ?? .1
          , i = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: bC,
                entryPoint: "mainFragment"
            }
        })
          , s = xt.from({
            vertex: Ft,
            fragment: yC.replace(/__ANGLE_STEP_SIZE__/gi, `${(1 / r / e).toFixed(7)}`).replace(/__DIST__/gi, `${e.toFixed(0)}.0`),
            name: "glow-filter"
        });
        super({
            gpuProgram: i,
            glProgram: s,
            resources: {
                glowUniforms: {
                    uDistance: {
                        value: e,
                        type: "f32"
                    },
                    uStrength: {
                        value: [t.innerStrength, t.outerStrength],
                        type: "vec2<f32>"
                    },
                    uColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uAlpha: {
                        value: t.alpha,
                        type: "f32"
                    },
                    uQuality: {
                        value: r,
                        type: "f32"
                    },
                    uKnockout: {
                        value: t?.knockout ?? !1 ? 1 : 0,
                        type: "f32"
                    }
                }
            },
            padding: e
        }),
        Wc(this, "uniforms"),
        Wc(this, "_color"),
        this.uniforms = this.resources.glowUniforms.uniforms,
        this._color = new At,
        this.color = t.color ?? 16777215
    }
    get distance() {
        return this.uniforms.uDistance
    }
    set distance(t) {
        this.uniforms.uDistance = this.padding = t
    }
    get innerStrength() {
        return this.uniforms.uStrength[0]
    }
    set innerStrength(t) {
        this.uniforms.uStrength[0] = t
    }
    get outerStrength() {
        return this.uniforms.uStrength[1]
    }
    set outerStrength(t) {
        this.uniforms.uStrength[1] = t
    }
    get color() {
        return this._color.value
    }
    set color(t) {
        this._color.setValue(t);
        const [e,r,i] = this._color.toArray();
        this.uniforms.uColor[0] = e,
        this.uniforms.uColor[1] = r,
        this.uniforms.uColor[2] = i
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
    get quality() {
        return this.uniforms.uQuality
    }
    set quality(t) {
        this.uniforms.uQuality = t
    }
    get knockout() {
        return this.uniforms.uKnockout === 1
    }
    set knockout(t) {
        this.uniforms.uKnockout = t ? 1 : 0
    }
}
;
Wc(CC, "DEFAULT_OPTIONS", {
    distance: 10,
    outerStrength: 4,
    innerStrength: 0,
    color: 16777215,
    alpha: 1,
    quality: .1,
    knockout: !1
});
var TC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`
  , AC = `struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`
  , PC = `vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`
  , MC = `// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`
  , OC = Object.defineProperty
  , FC = (n, t, e) => t in n ? OC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , us = (n, t, e) => (FC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const EC = class L0 extends Ct {
    constructor(t) {
        t = {
            ...L0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: AC.replace("${PERLIN}", MC),
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: TC.replace("${PERLIN}", PC),
            name: "god-ray-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                godrayUniforms: {
                    uLight: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    },
                    uParallel: {
                        value: 0,
                        type: "f32"
                    },
                    uAspect: {
                        value: 0,
                        type: "f32"
                    },
                    uTime: {
                        value: t.time,
                        type: "f32"
                    },
                    uRay: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uDimensions: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        us(this, "uniforms"),
        us(this, "time", 0),
        us(this, "_angleLight", [0, 0]),
        us(this, "_angle", 0),
        us(this, "_center"),
        this.uniforms = this.resources.godrayUniforms.uniforms,
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        const s = e.frame.width
          , o = e.frame.height;
        this.uniforms.uLight[0] = this.parallel ? this._angleLight[0] : this._center.x,
        this.uniforms.uLight[1] = this.parallel ? this._angleLight[1] : this._center.y,
        this.uniforms.uDimensions[0] = s,
        this.uniforms.uDimensions[1] = o,
        this.uniforms.uAspect = o / s,
        this.uniforms.uTime = this.time,
        t.applyFilter(this, e, r, i)
    }
    get angle() {
        return this._angle
    }
    set angle(t) {
        this._angle = t;
        const e = t * Ls;
        this._angleLight[0] = Math.cos(e),
        this._angleLight[1] = Math.sin(e)
    }
    get parallel() {
        return this.uniforms.uParallel > .5
    }
    set parallel(t) {
        this.uniforms.uParallel = t ? 1 : 0
    }
    get center() {
        return this._center
    }
    set center(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this._center = t
    }
    get centerX() {
        return this.center.x
    }
    set centerX(t) {
        this.center.x = t
    }
    get centerY() {
        return this.center.y
    }
    set centerY(t) {
        this.center.y = t
    }
    get gain() {
        return this.uniforms.uRay[0]
    }
    set gain(t) {
        this.uniforms.uRay[0] = t
    }
    get lacunarity() {
        return this.uniforms.uRay[1]
    }
    set lacunarity(t) {
        this.uniforms.uRay[1] = t
    }
    get alpha() {
        return this.uniforms.uRay[2]
    }
    set alpha(t) {
        this.uniforms.uRay[2] = t
    }
}
;
us(EC, "DEFAULT_OPTIONS", {
    angle: 30,
    gain: .5,
    lacunarity: 2.5,
    parallel: !0,
    time: 0,
    center: {
        x: 0,
        y: 0
    },
    alpha: 1
});
var IC = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`
  , kC = `struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`
  , zC = Object.defineProperty
  , RC = (n, t, e) => t in n ? zC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Xc = (n, t, e) => (RC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const LC = class D0 extends Ct {
    constructor(t) {
        t = {
            ...D0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: kC,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: IC,
            name: "hsl-adjustment-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                hslUniforms: {
                    uHsl: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uColorize: {
                        value: t.colorize ? 1 : 0,
                        type: "f32"
                    },
                    uAlpha: {
                        value: t.alpha,
                        type: "f32"
                    }
                }
            }
        }),
        Xc(this, "uniforms"),
        Xc(this, "_hue"),
        this.uniforms = this.resources.hslUniforms.uniforms,
        Object.assign(this, t)
    }
    get hue() {
        return this._hue
    }
    set hue(t) {
        this._hue = t,
        this.uniforms.uHsl[0] = t * (Math.PI / 180)
    }
    get saturation() {
        return this.uniforms.uHsl[1]
    }
    set saturation(t) {
        this.uniforms.uHsl[1] = t
    }
    get lightness() {
        return this.uniforms.uHsl[2]
    }
    set lightness(t) {
        this.uniforms.uHsl[2] = t
    }
    get colorize() {
        return this.uniforms.uColorize === 1
    }
    set colorize(t) {
        this.uniforms.uColorize = t ? 1 : 0
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
}
;
Xc(LC, "DEFAULT_OPTIONS", {
    hue: 0,
    saturation: 0,
    lightness: 0,
    colorize: !1,
    alpha: 1
});
var DC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`
  , BC = `struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`
  , UC = Object.defineProperty
  , $C = (n, t, e) => t in n ? UC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Hc = (n, t, e) => ($C(n, typeof t != "symbol" ? t + "" : t, e),
e);
const NC = class B0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        if (Array.isArray(e) || "x"in e && "y"in e || e instanceof or) {
            J("6.0.0", "MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");
            const s = "x"in e ? e.x : e[0]
              , o = "y"in e ? e.y : e[1];
            e = {
                velocity: {
                    x: s,
                    y: o
                }
            },
            t[1] !== void 0 && (e.kernelSize = t[1]),
            t[2] !== void 0 && (e.offset = t[2])
        }
        e = {
            ...B0.DEFAULT_OPTIONS,
            ...e
        };
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: BC,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: DC,
            name: "motion-blur-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                motionBlurUniforms: {
                    uVelocity: {
                        value: e.velocity,
                        type: "vec2<f32>"
                    },
                    uKernelSize: {
                        value: Math.trunc(e.kernelSize ?? 5),
                        type: "i32"
                    },
                    uOffset: {
                        value: e.offset,
                        type: "f32"
                    }
                }
            }
        }),
        Hc(this, "uniforms"),
        Hc(this, "_kernelSize"),
        this.uniforms = this.resources.motionBlurUniforms.uniforms,
        Object.assign(this, e)
    }
    get velocity() {
        return this.uniforms.uVelocity
    }
    set velocity(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uVelocity = t,
        this._updateDirty()
    }
    get velocityX() {
        return this.velocity.x
    }
    set velocityX(t) {
        this.velocity.x = t,
        this._updateDirty()
    }
    get velocityY() {
        return this.velocity.y
    }
    set velocityY(t) {
        this.velocity.y = t,
        this._updateDirty()
    }
    get kernelSize() {
        return this._kernelSize
    }
    set kernelSize(t) {
        this._kernelSize = t,
        this._updateDirty()
    }
    get offset() {
        return this.uniforms.uOffset
    }
    set offset(t) {
        this.uniforms.uOffset = t
    }
    _updateDirty() {
        this.padding = (Math.max(Math.abs(this.velocityX), Math.abs(this.velocityY)) >> 0) + 1,
        this.uniforms.uKernelSize = this.velocityX !== 0 || this.velocityY !== 0 ? this._kernelSize : 0
    }
}
;
Hc(NC, "DEFAULT_OPTIONS", {
    velocity: {
        x: 0,
        y: 0
    },
    kernelSize: 5,
    offset: 0
});
var GC = `in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`
  , VC = `struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`
  , WC = Object.defineProperty
  , XC = (n, t, e) => t in n ? WC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Qa = (n, t, e) => (XC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const HC = class U0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        Array.isArray(e) && (J("6.0.0", "MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),
        e = {
            replacements: e
        },
        t[1] && (e.tolerance = t[1]),
        t[2] && (e.maxColors = t[2])),
        e = {
            ...U0.DEFAULT_OPTIONS,
            ...e
        };
        const r = e.maxColors ?? e.replacements.length
          , i = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: VC.replace(/\$\{MAX_COLORS\}/g, r.toFixed(0)),
                entryPoint: "mainFragment"
            }
        })
          , s = xt.from({
            vertex: Ft,
            fragment: GC.replace(/\$\{MAX_COLORS\}/g, r.toFixed(0)),
            name: "multi-color-replace-filter"
        });
        super({
            gpuProgram: i,
            glProgram: s,
            resources: {
                multiColorReplaceUniforms: {
                    uOriginalColors: {
                        value: new Float32Array(3 * r),
                        type: "vec3<f32>",
                        size: r
                    },
                    uTargetColors: {
                        value: new Float32Array(3 * r),
                        type: "vec3<f32>",
                        size: r
                    },
                    uTolerance: {
                        value: e.tolerance,
                        type: "f32"
                    }
                }
            }
        }),
        Qa(this, "uniforms"),
        Qa(this, "_replacements", []),
        Qa(this, "_maxColors"),
        this._maxColors = r,
        this.uniforms = this.resources.multiColorReplaceUniforms.uniforms,
        this.replacements = e.replacements
    }
    set replacements(t) {
        const e = this.uniforms.uOriginalColors
          , r = this.uniforms.uTargetColors
          , i = t.length
          , s = new At;
        if (i > this._maxColors)
            throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);
        e[i * 3] = -1;
        let o, a, l;
        for (let u = 0; u < i; u++) {
            const c = t[u];
            s.setValue(c[0]),
            [o,a,l] = s.toArray(),
            e[u * 3] = o,
            e[u * 3 + 1] = a,
            e[u * 3 + 2] = l,
            s.setValue(c[1]),
            [o,a,l] = s.toArray(),
            r[u * 3] = o,
            r[u * 3 + 1] = a,
            r[u * 3 + 2] = l
        }
        this._replacements = t
    }
    get replacements() {
        return this._replacements
    }
    refresh() {
        this.replacements = this._replacements
    }
    get maxColors() {
        return this._maxColors
    }
    get tolerance() {
        return this.uniforms.uTolerance
    }
    set tolerance(t) {
        this.uniforms.uTolerance = t
    }
    set epsilon(t) {
        J("6.0.0", "MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),
        this.tolerance = t
    }
    get epsilon() {
        return J("6.0.0", "MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),
        this.tolerance
    }
}
;
Qa(HC, "DEFAULT_OPTIONS", {
    replacements: [[16711680, 255]],
    tolerance: .05,
    maxColors: void 0
});
var YC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`
  , jC = `struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`
  , qC = Object.defineProperty
  , KC = (n, t, e) => t in n ? qC(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Yc = (n, t, e) => (KC(n, typeof t != "symbol" ? t + "" : t, e),
e);
const ZC = class $0 extends Ct {
    constructor(t) {
        t = {
            ...$0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: jC,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: YC,
            name: "old-film-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                oldFilmUniforms: {
                    uSepia: {
                        value: t.sepia,
                        type: "f32"
                    },
                    uNoise: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    },
                    uScratch: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uVignetting: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uSeed: {
                        value: t.seed,
                        type: "f32"
                    },
                    uDimensions: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        Yc(this, "uniforms"),
        Yc(this, "seed"),
        this.uniforms = this.resources.oldFilmUniforms.uniforms,
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        this.uniforms.uDimensions[0] = e.frame.width,
        this.uniforms.uDimensions[1] = e.frame.height,
        this.uniforms.uSeed = this.seed,
        t.applyFilter(this, e, r, i)
    }
    get sepia() {
        return this.uniforms.uSepia
    }
    set sepia(t) {
        this.uniforms.uSepia = t
    }
    get noise() {
        return this.uniforms.uNoise[0]
    }
    set noise(t) {
        this.uniforms.uNoise[0] = t
    }
    get noiseSize() {
        return this.uniforms.uNoise[1]
    }
    set noiseSize(t) {
        this.uniforms.uNoise[1] = t
    }
    get scratch() {
        return this.uniforms.uScratch[0]
    }
    set scratch(t) {
        this.uniforms.uScratch[0] = t
    }
    get scratchDensity() {
        return this.uniforms.uScratch[1]
    }
    set scratchDensity(t) {
        this.uniforms.uScratch[1] = t
    }
    get scratchWidth() {
        return this.uniforms.uScratch[2]
    }
    set scratchWidth(t) {
        this.uniforms.uScratch[2] = t
    }
    get vignetting() {
        return this.uniforms.uVignetting[0]
    }
    set vignetting(t) {
        this.uniforms.uVignetting[0] = t
    }
    get vignettingAlpha() {
        return this.uniforms.uVignetting[1]
    }
    set vignettingAlpha(t) {
        this.uniforms.uVignetting[1] = t
    }
    get vignettingBlur() {
        return this.uniforms.uVignetting[2]
    }
    set vignettingBlur(t) {
        this.uniforms.uVignetting[2] = t
    }
}
;
Yc(ZC, "DEFAULT_OPTIONS", {
    sepia: .3,
    noise: .3,
    noiseSize: 1,
    scratch: .5,
    scratchDensity: .3,
    scratchWidth: 1,
    vignetting: .3,
    vignettingAlpha: 1,
    vignettingBlur: .3,
    seed: 0
});
var QC = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`
  , JC = `struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`
  , t3 = Object.defineProperty
  , e3 = (n, t, e) => t in n ? t3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Pi = (n, t, e) => (e3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const rf = class yi extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        typeof e == "number" && (J("6.0.0", "OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),
        e = {
            thickness: e
        },
        t[1] !== void 0 && (e.color = t[1]),
        t[2] !== void 0 && (e.quality = t[2]),
        t[3] !== void 0 && (e.alpha = t[3]),
        t[4] !== void 0 && (e.knockout = t[4])),
        e = {
            ...yi.DEFAULT_OPTIONS,
            ...e
        };
        const r = e.quality ?? .1
          , i = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: JC,
                entryPoint: "mainFragment"
            }
        })
          , s = xt.from({
            vertex: Ft,
            fragment: QC.replace(/\$\{ANGLE_STEP\}/, yi.getAngleStep(r).toFixed(7)),
            name: "outline-filter"
        });
        super({
            gpuProgram: i,
            glProgram: s,
            resources: {
                outlineUniforms: {
                    uThickness: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    },
                    uColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uAlpha: {
                        value: e.alpha,
                        type: "f32"
                    },
                    uAngleStep: {
                        value: 0,
                        type: "f32"
                    },
                    uKnockout: {
                        value: e.knockout ? 1 : 0,
                        type: "f32"
                    }
                }
            }
        }),
        Pi(this, "uniforms"),
        Pi(this, "_thickness"),
        Pi(this, "_quality"),
        Pi(this, "_color"),
        this.uniforms = this.resources.outlineUniforms.uniforms,
        this.uniforms.uAngleStep = yi.getAngleStep(r),
        this._color = new At,
        this.color = e.color ?? 0,
        Object.assign(this, e)
    }
    apply(t, e, r, i) {
        this.uniforms.uThickness[0] = this.thickness / e.source.width,
        this.uniforms.uThickness[1] = this.thickness / e.source.height,
        t.applyFilter(this, e, r, i)
    }
    static getAngleStep(t) {
        return parseFloat((Math.PI * 2 / Math.max(t * yi.MAX_SAMPLES, yi.MIN_SAMPLES)).toFixed(7))
    }
    get thickness() {
        return this._thickness
    }
    set thickness(t) {
        this._thickness = this.padding = t
    }
    get color() {
        return this._color.value
    }
    set color(t) {
        this._color.setValue(t);
        const [e,r,i] = this._color.toArray();
        this.uniforms.uColor[0] = e,
        this.uniforms.uColor[1] = r,
        this.uniforms.uColor[2] = i
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
    get quality() {
        return this._quality
    }
    set quality(t) {
        this._quality = t,
        this.uniforms.uAngleStep = yi.getAngleStep(t)
    }
    get knockout() {
        return this.uniforms.uKnockout === 1
    }
    set knockout(t) {
        this.uniforms.uKnockout = t ? 1 : 0
    }
}
;
Pi(rf, "DEFAULT_OPTIONS", {
    thickness: 1,
    color: 0,
    alpha: 1,
    quality: .1,
    knockout: !1
});
Pi(rf, "MIN_SAMPLES", 1);
Pi(rf, "MAX_SAMPLES", 100);
var r3 = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`
  , n3 = `struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`
  , i3 = Object.defineProperty
  , s3 = (n, t, e) => t in n ? i3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Ja = (n, t, e) => (s3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const o3 = class N0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        if (typeof e == "number") {
            if (J("6.0.0", "RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),
            e = {
                angle: e
            },
            t[1]) {
                const s = "x"in t[1] ? t[1].x : t[1][0]
                  , o = "y"in t[1] ? t[1].y : t[1][1];
                e.center = {
                    x: s,
                    y: o
                }
            }
            t[2] && (e.kernelSize = t[2]),
            t[3] && (e.radius = t[3])
        }
        e = {
            ...N0.DEFAULT_OPTIONS,
            ...e
        };
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: n3,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: r3,
            name: "radial-blur-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                radialBlurUniforms: {
                    uRadian: {
                        value: 0,
                        type: "f32"
                    },
                    uCenter: {
                        value: e.center,
                        type: "vec2<f32>"
                    },
                    uKernelSize: {
                        value: e.kernelSize,
                        type: "i32"
                    },
                    uRadius: {
                        value: e.radius,
                        type: "f32"
                    }
                }
            }
        }),
        Ja(this, "uniforms"),
        Ja(this, "_angle"),
        Ja(this, "_kernelSize"),
        this.uniforms = this.resources.radialBlurUniforms.uniforms,
        Object.assign(this, e)
    }
    _updateKernelSize() {
        this.uniforms.uKernelSize = this._angle !== 0 ? this.kernelSize : 0
    }
    get angle() {
        return this._angle
    }
    set angle(t) {
        this._angle = t,
        this.uniforms.uRadian = t * Math.PI / 180,
        this._updateKernelSize()
    }
    get center() {
        return this.uniforms.uCenter
    }
    set center(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uCenter = t
    }
    get centerX() {
        return this.center.x
    }
    set centerX(t) {
        this.center.x = t
    }
    get centerY() {
        return this.center.y
    }
    set centerY(t) {
        this.center.y = t
    }
    get kernelSize() {
        return this._kernelSize
    }
    set kernelSize(t) {
        this._kernelSize = t,
        this._updateKernelSize()
    }
    get radius() {
        return this.uniforms.uRadius
    }
    set radius(t) {
        this.uniforms.uRadius = t < 0 || t === 1 / 0 ? -1 : t
    }
}
;
Ja(o3, "DEFAULT_OPTIONS", {
    angle: 0,
    center: {
        x: 0,
        y: 0
    },
    kernelSize: 5,
    radius: -1
});
var a3 = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`
  , l3 = `struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`
  , u3 = Object.defineProperty
  , c3 = (n, t, e) => t in n ? u3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , jc = (n, t, e) => (c3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const h3 = class G0 extends Ct {
    constructor(t) {
        t = {
            ...G0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: l3,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: a3,
            name: "reflection-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                reflectionUniforms: {
                    uMirror: {
                        value: t.mirror ? 1 : 0,
                        type: "f32"
                    },
                    uBoundary: {
                        value: t.boundary,
                        type: "f32"
                    },
                    uAmplitude: {
                        value: t.amplitude,
                        type: "vec2<f32>"
                    },
                    uWavelength: {
                        value: t.waveLength,
                        type: "vec2<f32>"
                    },
                    uAlpha: {
                        value: t.alpha,
                        type: "vec2<f32>"
                    },
                    uTime: {
                        value: t.time,
                        type: "f32"
                    },
                    uDimensions: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        jc(this, "uniforms"),
        jc(this, "time", 0),
        this.uniforms = this.resources.reflectionUniforms.uniforms,
        Object.assign(this, t)
    }
    apply(t, e, r, i) {
        this.uniforms.uDimensions[0] = e.frame.width,
        this.uniforms.uDimensions[1] = e.frame.height,
        this.uniforms.uTime = this.time,
        t.applyFilter(this, e, r, i)
    }
    get mirror() {
        return this.uniforms.uMirror > .5
    }
    set mirror(t) {
        this.uniforms.uMirror = t ? 1 : 0
    }
    get boundary() {
        return this.uniforms.uBoundary
    }
    set boundary(t) {
        this.uniforms.uBoundary = t
    }
    get amplitude() {
        return Array.from(this.uniforms.uAmplitude)
    }
    set amplitude(t) {
        this.uniforms.uAmplitude[0] = t[0],
        this.uniforms.uAmplitude[1] = t[1]
    }
    get amplitudeStart() {
        return this.uniforms.uAmplitude[0]
    }
    set amplitudeStart(t) {
        this.uniforms.uAmplitude[0] = t
    }
    get amplitudeEnd() {
        return this.uniforms.uAmplitude[1]
    }
    set amplitudeEnd(t) {
        this.uniforms.uAmplitude[1] = t
    }
    get waveLength() {
        return Array.from(this.uniforms.uWavelength)
    }
    set waveLength(t) {
        this.uniforms.uWavelength[0] = t[0],
        this.uniforms.uWavelength[1] = t[1]
    }
    get wavelengthStart() {
        return this.uniforms.uWavelength[0]
    }
    set wavelengthStart(t) {
        this.uniforms.uWavelength[0] = t
    }
    get wavelengthEnd() {
        return this.uniforms.uWavelength[1]
    }
    set wavelengthEnd(t) {
        this.uniforms.uWavelength[1] = t
    }
    get alpha() {
        return Array.from(this.uniforms.uAlpha)
    }
    set alpha(t) {
        this.uniforms.uAlpha[0] = t[0],
        this.uniforms.uAlpha[1] = t[1]
    }
    get alphaStart() {
        return this.uniforms.uAlpha[0]
    }
    set alphaStart(t) {
        this.uniforms.uAlpha[0] = t
    }
    get alphaEnd() {
        return this.uniforms.uAlpha[1]
    }
    set alphaEnd(t) {
        this.uniforms.uAlpha[1] = t
    }
}
;
jc(h3, "DEFAULT_OPTIONS", {
    mirror: !0,
    boundary: .5,
    amplitude: [0, 20],
    waveLength: [30, 100],
    alpha: [1, 1],
    time: 0
});
var f3 = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`
  , d3 = `struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`
  , p3 = Object.defineProperty
  , m3 = (n, t, e) => t in n ? p3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , V0 = (n, t, e) => (m3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const g3 = class W0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        (Array.isArray(e) || "x"in e && "y"in e) && (J("6.0.0", "RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),
        e = {
            red: e
        },
        t[1] !== void 0 && (e.green = t[1]),
        t[2] !== void 0 && (e.blue = t[2])),
        e = {
            ...W0.DEFAULT_OPTIONS,
            ...e
        };
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: d3,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: f3,
            name: "rgb-split-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                rgbSplitUniforms: {
                    uRed: {
                        value: e.red,
                        type: "vec2<f32>"
                    },
                    uGreen: {
                        value: e.green,
                        type: "vec2<f32>"
                    },
                    uBlue: {
                        value: e.blue,
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        V0(this, "uniforms"),
        this.uniforms = this.resources.rgbSplitUniforms.uniforms,
        Object.assign(this, e)
    }
    get red() {
        return this.uniforms.uRed
    }
    set red(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uRed = t
    }
    get redX() {
        return this.red.x
    }
    set redX(t) {
        this.red.x = t
    }
    get redY() {
        return this.red.y
    }
    set redY(t) {
        this.red.y = t
    }
    get green() {
        return this.uniforms.uGreen
    }
    set green(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uGreen = t
    }
    get greenX() {
        return this.green.x
    }
    set greenX(t) {
        this.green.x = t
    }
    get greenY() {
        return this.green.y
    }
    set greenY(t) {
        this.green.y = t
    }
    get blue() {
        return this.uniforms.uBlue
    }
    set blue(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uBlue = t
    }
    get blueX() {
        return this.blue.x
    }
    set blueX(t) {
        this.blue.x = t
    }
    get blueY() {
        return this.blue.y
    }
    set blueY(t) {
        this.blue.y = t
    }
}
;
V0(g3, "DEFAULT_OPTIONS", {
    red: {
        x: -10,
        y: 0
    },
    green: {
        x: 0,
        y: 10
    },
    blue: {
        x: 0,
        y: 0
    }
});
var x3 = `
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`
  , v3 = `
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`
  , _3 = Object.defineProperty
  , y3 = (n, t, e) => t in n ? _3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , qc = (n, t, e) => (y3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const b3 = class X0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        (Array.isArray(e) || "x"in e && "y"in e) && (J("6.0.0", "ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),
        e = {
            center: e,
            ...t[1]
        },
        t[2] !== void 0 && (e.time = t[2])),
        e = {
            ...X0.DEFAULT_OPTIONS,
            ...e
        };
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: v3,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: x3,
            name: "shockwave-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                shockwaveUniforms: {
                    uTime: {
                        value: e.time,
                        type: "f32"
                    },
                    uCenter: {
                        value: e.center,
                        type: "vec2<f32>"
                    },
                    uSpeed: {
                        value: e.speed,
                        type: "f32"
                    },
                    uWave: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    }
                }
            }
        }),
        qc(this, "uniforms"),
        qc(this, "time"),
        this.time = 0,
        this.uniforms = this.resources.shockwaveUniforms.uniforms,
        Object.assign(this, e)
    }
    apply(t, e, r, i) {
        this.uniforms.uTime = this.time,
        t.applyFilter(this, e, r, i)
    }
    get center() {
        return this.uniforms.uCenter
    }
    set center(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uCenter = t
    }
    get centerX() {
        return this.uniforms.uCenter.x
    }
    set centerX(t) {
        this.uniforms.uCenter.x = t
    }
    get centerY() {
        return this.uniforms.uCenter.y
    }
    set centerY(t) {
        this.uniforms.uCenter.y = t
    }
    get speed() {
        return this.uniforms.uSpeed
    }
    set speed(t) {
        this.uniforms.uSpeed = t
    }
    get amplitude() {
        return this.uniforms.uWave[0]
    }
    set amplitude(t) {
        this.uniforms.uWave[0] = t
    }
    get wavelength() {
        return this.uniforms.uWave[1]
    }
    set wavelength(t) {
        this.uniforms.uWave[1] = t
    }
    get brightness() {
        return this.uniforms.uWave[2]
    }
    set brightness(t) {
        this.uniforms.uWave[2] = t
    }
    get radius() {
        return this.uniforms.uWave[3]
    }
    set radius(t) {
        this.uniforms.uWave[3] = t
    }
}
;
qc(b3, "DEFAULT_OPTIONS", {
    center: {
        x: 0,
        y: 0
    },
    speed: 500,
    amplitude: 30,
    wavelength: 160,
    brightness: 1,
    radius: -1
});
var S3 = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`
  , w3 = `struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`
  , C3 = Object.defineProperty
  , T3 = (n, t, e) => t in n ? C3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , tl = (n, t, e) => (T3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const A3 = class H0 extends Ct {
    constructor(...t) {
        let e = t[0] ?? {};
        if (e instanceof ct && (J("6.0.0", "SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),
        e = {
            lightMap: e
        },
        t[1] !== void 0 && (e.color = t[1]),
        t[2] !== void 0 && (e.alpha = t[2])),
        e = {
            ...H0.DEFAULT_OPTIONS,
            ...e
        },
        !e.lightMap)
            throw Error("No light map texture source was provided to SimpleLightmapFilter");
        const r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: w3,
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: S3,
            name: "simple-lightmap-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                simpleLightmapUniforms: {
                    uColor: {
                        value: new Float32Array(3),
                        type: "vec3<f32>"
                    },
                    uAlpha: {
                        value: e.alpha,
                        type: "f32"
                    },
                    uDimensions: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                },
                uMapTexture: e.lightMap.source,
                uMapSampler: e.lightMap.source.style
            }
        }),
        tl(this, "uniforms"),
        tl(this, "_color"),
        tl(this, "_lightMap"),
        this.uniforms = this.resources.simpleLightmapUniforms.uniforms,
        this._color = new At,
        this.color = e.color ?? 0,
        Object.assign(this, e)
    }
    apply(t, e, r, i) {
        this.uniforms.uDimensions[0] = e.frame.width,
        this.uniforms.uDimensions[1] = e.frame.height,
        t.applyFilter(this, e, r, i)
    }
    get lightMap() {
        return this._lightMap
    }
    set lightMap(t) {
        this._lightMap = t,
        this.resources.uMapTexture = t.source,
        this.resources.uMapSampler = t.source.style
    }
    get color() {
        return this._color.value
    }
    set color(t) {
        this._color.setValue(t);
        const [e,r,i] = this._color.toArray();
        this.uniforms.uColor[0] = e,
        this.uniforms.uColor[1] = r,
        this.uniforms.uColor[2] = i
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
}
;
tl(A3, "DEFAULT_OPTIONS", {
    lightMap: ct.WHITE,
    color: 0,
    alpha: 1
});
var P3 = `in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`
  , M3 = `struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`
  , O3 = Object.defineProperty
  , F3 = (n, t, e) => t in n ? O3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , Kc = (n, t, e) => (F3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const E3 = class Y0 extends Ct {
    constructor(t) {
        const {width: e, height: r} = IS.defaultOptions;
        t = {
            ...Y0.DEFAULT_OPTIONS,
            start: {
                x: 0,
                y: r / 2
            },
            end: {
                x: e,
                y: r / 2
            },
            ...t
        };
        const i = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: M3,
                entryPoint: "mainFragment"
            }
        })
          , s = xt.from({
            vertex: Ft,
            fragment: P3,
            name: "tilt-shift-axis-filter"
        });
        super({
            gpuProgram: i,
            glProgram: s,
            resources: {
                tiltShiftUniforms: {
                    uBlur: {
                        value: new Float32Array([t.blur, t.gradientBlur]),
                        type: "vec2<f32>"
                    },
                    uStart: {
                        value: t.start,
                        type: "vec2<f32>"
                    },
                    uEnd: {
                        value: t.end,
                        type: "vec2<f32>"
                    },
                    uDelta: {
                        value: new Float32Array([0, 0]),
                        type: "vec2<f32>"
                    },
                    uDimensions: {
                        value: new Float32Array([e, r]),
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        Kc(this, "uniforms"),
        Kc(this, "_tiltAxis"),
        this.uniforms = this.resources.tiltShiftUniforms.uniforms,
        this._tiltAxis = t.axis
    }
    updateDimensions(t) {
        const {uDimensions: e} = this.uniforms;
        e[0] = t.frame.width,
        e[1] = t.frame.height
    }
    updateDelta() {
        if (this.uniforms.uDelta[0] = 0,
        this.uniforms.uDelta[1] = 0,
        this._tiltAxis === void 0)
            return;
        const t = this.uniforms.uEnd
          , e = this.uniforms.uStart
          , r = t.x - e.x
          , i = t.y - e.y
          , s = Math.sqrt(r * r + i * i)
          , o = this._tiltAxis === "vertical";
        this.uniforms.uDelta[0] = o ? -i / s : r / s,
        this.uniforms.uDelta[1] = o ? r / s : i / s
    }
}
;
Kc(E3, "DEFAULT_OPTIONS", {
    blur: 100,
    gradientBlur: 600
});
var I3 = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`
  , k3 = `struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`
  , z3 = Object.defineProperty
  , R3 = (n, t, e) => t in n ? z3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , j0 = (n, t, e) => (R3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const L3 = class q0 extends Ct {
    constructor(t) {
        t = {
            ...q0.DEFAULT_OPTIONS,
            ...t
        };
        const e = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: k3,
                entryPoint: "mainFragment"
            }
        })
          , r = xt.from({
            vertex: Ft,
            fragment: I3,
            name: "twist-filter"
        });
        super({
            gpuProgram: e,
            glProgram: r,
            resources: {
                twistUniforms: {
                    uTwist: {
                        value: [t.radius ?? 0, t.angle ?? 0],
                        type: "vec2<f32>"
                    },
                    uOffset: {
                        value: t.offset,
                        type: "vec2<f32>"
                    }
                }
            },
            ...t
        }),
        j0(this, "uniforms"),
        this.uniforms = this.resources.twistUniforms.uniforms
    }
    get radius() {
        return this.uniforms.uTwist[0]
    }
    set radius(t) {
        this.uniforms.uTwist[0] = t
    }
    get angle() {
        return this.uniforms.uTwist[1]
    }
    set angle(t) {
        this.uniforms.uTwist[1] = t
    }
    get offset() {
        return this.uniforms.uOffset
    }
    set offset(t) {
        this.uniforms.uOffset = t
    }
    get offsetX() {
        return this.offset.x
    }
    set offsetX(t) {
        this.offset.x = t
    }
    get offsetY() {
        return this.offset.y
    }
    set offsetY(t) {
        this.offset.y = t
    }
}
;
j0(L3, "DEFAULT_OPTIONS", {
    padding: 20,
    radius: 200,
    angle: 4,
    offset: {
        x: 0,
        y: 0
    }
});
var D3 = `precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`
  , B3 = `struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`
  , U3 = Object.defineProperty
  , $3 = (n, t, e) => t in n ? U3(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e
  , K0 = (n, t, e) => ($3(n, typeof t != "symbol" ? t + "" : t, e),
e);
const N3 = class Z0 extends Ct {
    constructor(t) {
        t = {
            ...Z0.DEFAULT_OPTIONS,
            ...t
        };
        const e = t.maxKernelSize ?? 32
          , r = dt.from({
            vertex: {
                source: Et,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: B3.replace("${MAX_KERNEL_SIZE}", e.toFixed(1)),
                entryPoint: "mainFragment"
            }
        })
          , i = xt.from({
            vertex: Ft,
            fragment: D3.replace("${MAX_KERNEL_SIZE}", e.toFixed(1)),
            name: "zoom-blur-filter"
        });
        super({
            gpuProgram: r,
            glProgram: i,
            resources: {
                zoomBlurUniforms: {
                    uStrength: {
                        value: t.strength,
                        type: "f32"
                    },
                    uCenter: {
                        value: t.center,
                        type: "vec2<f32>"
                    },
                    uRadii: {
                        value: new Float32Array(2),
                        type: "vec2<f32>"
                    }
                }
            }
        }),
        K0(this, "uniforms"),
        this.uniforms = this.resources.zoomBlurUniforms.uniforms,
        Object.assign(this, t)
    }
    get strength() {
        return this.uniforms.uStrength
    }
    set strength(t) {
        this.uniforms.uStrength = t
    }
    get center() {
        return this.uniforms.uCenter
    }
    set center(t) {
        Array.isArray(t) && (t = {
            x: t[0],
            y: t[1]
        }),
        this.uniforms.uCenter = t
    }
    get centerX() {
        return this.uniforms.uCenter.x
    }
    set centerX(t) {
        this.uniforms.uCenter.x = t
    }
    get centerY() {
        return this.uniforms.uCenter.y
    }
    set centerY(t) {
        this.uniforms.uCenter.y = t
    }
    get innerRadius() {
        return this.uniforms.uRadii[0]
    }
    set innerRadius(t) {
        this.uniforms.uRadii[0] = t
    }
    get radius() {
        return this.uniforms.uRadii[1]
    }
    set radius(t) {
        this.uniforms.uRadii[1] = t < 0 || t === 1 / 0 ? -1 : t
    }
}
;
K0(N3, "DEFAULT_OPTIONS", {
    strength: .1,
    center: {
        x: 0,
        y: 0
    },
    innerRadius: 0,
    radius: -1,
    maxKernelSize: 32
});
/*!
 * matrix 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var On, zi, nf, Hl, ho, el, Pl, Ao, Zr = "transform", Zc = Zr + "Origin", Q0, J0 = function(t) {
    var e = t.ownerDocument || t;
    for (!(Zr in t.style) && ("msTransform"in t.style) && (Zr = "msTransform",
    Zc = Zr + "Origin"); e.parentNode && (e = e.parentNode); )
        ;
    if (zi = window,
    Pl = new Vi,
    e) {
        On = e,
        nf = e.documentElement,
        Hl = e.body,
        Ao = On.createElementNS("http://www.w3.org/2000/svg", "g"),
        Ao.style.transform = "none";
        var r = e.createElement("div")
          , i = e.createElement("div")
          , s = e && (e.body || e.firstElementChild);
        s && s.appendChild && (s.appendChild(r),
        r.appendChild(i),
        r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"),
        Q0 = i.offsetParent !== r,
        s.removeChild(r))
    }
    return e
}, G3 = function(t) {
    for (var e, r; t && t !== Hl; )
        r = t._gsap,
        r && r.uncache && r.get(t, "x"),
        r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4,
        r.renderTransform(1, r),
        e ? e.push(r) : e = [r]),
        t = t.parentNode;
    return e
}, tx = [], ex = [], V3 = function() {
    return zi.pageYOffset || On.scrollTop || nf.scrollTop || Hl.scrollTop || 0
}, W3 = function() {
    return zi.pageXOffset || On.scrollLeft || nf.scrollLeft || Hl.scrollLeft || 0
}, sf = function(t) {
    return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null)
}, X3 = function n(t) {
    if (zi.getComputedStyle(t).position === "fixed")
        return !0;
    if (t = t.parentNode,
    t && t.nodeType === 1)
        return n(t)
}, Bu = function n(t, e) {
    if (t.parentNode && (On || J0(t))) {
        var r = sf(t)
          , i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
          , s = r ? e ? "rect" : "g" : "div"
          , o = e !== 2 ? 0 : 100
          , a = e === 3 ? 100 : 0
          , l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
          , u = On.createElementNS ? On.createElementNS(i.replace(/^https/, "http"), s) : On.createElement(s);
        return e && (r ? (el || (el = n(t)),
        u.setAttribute("width", .01),
        u.setAttribute("height", .01),
        u.setAttribute("transform", "translate(" + o + "," + a + ")"),
        el.appendChild(u)) : (ho || (ho = n(t),
        ho.style.cssText = l),
        u.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + o + "px",
        ho.appendChild(u))),
        u
    }
    throw "Need document and parent."
}, H3 = function(t) {
    for (var e = new Vi, r = 0; r < t.numberOfItems; r++)
        e.multiply(t.getItem(r).matrix);
    return e
}, Y3 = function(t) {
    var e = t.getCTM(), r;
    return e || (r = t.style[Zr],
    t.style[Zr] = "none",
    t.appendChild(Ao),
    e = Ao.getCTM(),
    t.removeChild(Ao),
    r ? t.style[Zr] = r : t.style.removeProperty(Zr.replace(/([A-Z])/g, "-$1").toLowerCase())),
    e || Pl.clone()
}, j3 = function(t, e) {
    var r = sf(t), i = t === r, s = r ? tx : ex, o = t.parentNode, a, l, u, c, f, d;
    if (t === zi)
        return t;
    if (s.length || s.push(Bu(t, 1), Bu(t, 2), Bu(t, 3)),
    a = r ? el : ho,
    r)
        i ? (u = Y3(t),
        c = -u.e / u.a,
        f = -u.f / u.d,
        l = Pl) : t.getBBox ? (u = t.getBBox(),
        l = t.transform ? t.transform.baseVal : {},
        l = l.numberOfItems ? l.numberOfItems > 1 ? H3(l) : l.getItem(0).matrix : Pl,
        c = l.a * u.x + l.c * u.y,
        f = l.b * u.x + l.d * u.y) : (l = new Vi,
        c = f = 0),
        (i ? r : o).appendChild(a),
        a.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + c) + "," + (l.f + f) + ")");
    else {
        if (c = f = 0,
        Q0)
            for (l = t.offsetParent,
            u = t; u && (u = u.parentNode) && u !== l && u.parentNode; )
                (zi.getComputedStyle(u)[Zr] + "").length > 4 && (c = u.offsetLeft,
                f = u.offsetTop,
                u = 0);
        if (d = zi.getComputedStyle(t),
        d.position !== "absolute" && d.position !== "fixed")
            for (l = t.offsetParent; o && o !== l; )
                c += o.scrollLeft || 0,
                f += o.scrollTop || 0,
                o = o.parentNode;
        u = a.style,
        u.top = t.offsetTop - f + "px",
        u.left = t.offsetLeft - c + "px",
        u[Zr] = d[Zr],
        u[Zc] = d[Zc],
        u.position = d.position === "fixed" ? "fixed" : "absolute",
        t.parentNode.appendChild(a)
    }
    return a
}, Uu = function(t, e, r, i, s, o, a) {
    return t.a = e,
    t.b = r,
    t.c = i,
    t.d = s,
    t.e = o,
    t.f = a,
    t
}, Vi = function() {
    function n(e, r, i, s, o, a) {
        e === void 0 && (e = 1),
        r === void 0 && (r = 0),
        i === void 0 && (i = 0),
        s === void 0 && (s = 1),
        o === void 0 && (o = 0),
        a === void 0 && (a = 0),
        Uu(this, e, r, i, s, o, a)
    }
    var t = n.prototype;
    return t.inverse = function() {
        var r = this.a
          , i = this.b
          , s = this.c
          , o = this.d
          , a = this.e
          , l = this.f
          , u = r * o - i * s || 1e-10;
        return Uu(this, o / u, -i / u, -s / u, r / u, (s * l - o * a) / u, -(r * l - i * a) / u)
    }
    ,
    t.multiply = function(r) {
        var i = this.a
          , s = this.b
          , o = this.c
          , a = this.d
          , l = this.e
          , u = this.f
          , c = r.a
          , f = r.c
          , d = r.b
          , h = r.d
          , m = r.e
          , p = r.f;
        return Uu(this, c * i + d * o, c * s + d * a, f * i + h * o, f * s + h * a, l + m * i + p * o, u + m * s + p * a)
    }
    ,
    t.clone = function() {
        return new n(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    t.equals = function(r) {
        var i = this.a
          , s = this.b
          , o = this.c
          , a = this.d
          , l = this.e
          , u = this.f;
        return i === r.a && s === r.b && o === r.c && a === r.d && l === r.e && u === r.f
    }
    ,
    t.apply = function(r, i) {
        i === void 0 && (i = {});
        var s = r.x
          , o = r.y
          , a = this.a
          , l = this.b
          , u = this.c
          , c = this.d
          , f = this.e
          , d = this.f;
        return i.x = s * a + o * u + f || 0,
        i.y = s * l + o * c + d || 0,
        i
    }
    ,
    n
}();
function wi(n, t, e, r) {
    if (!n || !n.parentNode || (On || J0(n)).documentElement === n)
        return new Vi;
    var i = G3(n)
      , s = sf(n)
      , o = s ? tx : ex
      , a = j3(n)
      , l = o[0].getBoundingClientRect()
      , u = o[1].getBoundingClientRect()
      , c = o[2].getBoundingClientRect()
      , f = a.parentNode
      , d = X3(n)
      , h = new Vi((u.left - l.left) / 100,(u.top - l.top) / 100,(c.left - l.left) / 100,(c.top - l.top) / 100,l.left + (d ? 0 : W3()),l.top + (d ? 0 : V3()));
    if (f.removeChild(a),
    i)
        for (l = i.length; l--; )
            u = i[l],
            u.scaleX = u.scaleY = 0,
            u.renderTransform(1, u);
    return t ? h.inverse() : h
}
function qd(n) {
    if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}
function q3(n, t) {
    n.prototype = Object.create(t.prototype),
    n.prototype.constructor = n,
    n.__proto__ = t
}
var yt, Ut, Sr, Qr, Fn, $u, Pn, Qc, fo, Kn, rx, Jc, ra, of, po, Hr, mo, rl, nx, th, Ml = 0, ix = function() {
    return typeof window < "u"
}, sx = function() {
    return yt || ix() && (yt = window.gsap) && yt.registerPlugin && yt
}, Wn = function(t) {
    return typeof t == "function"
}, Po = function(t) {
    return typeof t == "object"
}, jr = function(t) {
    return typeof t > "u"
}, nl = function() {
    return !1
}, Mo = "transform", eh = "transformOrigin", $n = function(t) {
    return Math.round(t * 1e4) / 1e4
}, no = Array.isArray, Ma = function(t, e) {
    var r = Sr.createElementNS ? Sr.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/, "http"), t) : Sr.createElement(t);
    return r.style ? r : Sr.createElement(t)
}, Kd = 180 / Math.PI, fi = 1e20, K3 = new Vi, Nn = Date.now || function() {
    return new Date().getTime()
}
, Ri = [], Ts = {}, Z3 = 0, Q3 = /^(?:a|input|textarea|button|select)$/i, Zd = 0, ts = {}, Cn = {}, ox = function(t, e) {
    var r = {}, i;
    for (i in t)
        r[i] = e ? t[i] * e : t[i];
    return r
}, J3 = function(t, e) {
    for (var r in e)
        r in t || (t[r] = e[r]);
    return t
}, Qd = function n(t, e) {
    for (var r = t.length, i; r--; )
        e ? t[r].style.touchAction = e : t[r].style.removeProperty("touch-action"),
        i = t[r].children,
        i && i.length && n(i, e)
}, ax = function() {
    return Ri.forEach(function(t) {
        return t()
    })
}, tT = function(t) {
    Ri.push(t),
    Ri.length === 1 && yt.ticker.add(ax)
}, Jd = function() {
    return !Ri.length && yt.ticker.remove(ax)
}, tp = function(t) {
    for (var e = Ri.length; e--; )
        Ri[e] === t && Ri.splice(e, 1);
    yt.to(Jd, {
        overwrite: !0,
        delay: 15,
        duration: 0,
        onComplete: Jd,
        data: "_draggable"
    })
}, eT = function(t, e) {
    for (var r in e)
        r in t || (t[r] = e[r]);
    return t
}, _e = function(t, e, r, i) {
    if (t.addEventListener) {
        var s = ra[e];
        i = i || (rx ? {
            passive: !1
        } : null),
        t.addEventListener(s || e, r, i),
        s && e !== s && t.addEventListener(e, r, i)
    }
}, fe = function(t, e, r, i) {
    if (t.removeEventListener) {
        var s = ra[e];
        t.removeEventListener(s || e, r, i),
        s && e !== s && t.removeEventListener(e, r, i)
    }
}, Or = function(t) {
    t.preventDefault && t.preventDefault(),
    t.preventManipulation && t.preventManipulation()
}, rT = function(t, e) {
    for (var r = t.length; r--; )
        if (t[r].identifier === e)
            return !0
}, nT = function n(t) {
    of = t.touches && Ml < t.touches.length,
    fe(t.target, "touchend", n)
}, ep = function(t) {
    of = t.touches && Ml < t.touches.length,
    _e(t.target, "touchend", nT)
}, As = function(t) {
    return Ut.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
}, Ps = function(t) {
    return Ut.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
}, rp = function n(t, e) {
    _e(t, "scroll", e),
    Ns(t.parentNode) || n(t.parentNode, e)
}, np = function n(t, e) {
    fe(t, "scroll", e),
    Ns(t.parentNode) || n(t.parentNode, e)
}, Ns = function(t) {
    return !t || t === Qr || t.nodeType === 9 || t === Sr.body || t === Ut || !t.nodeType || !t.parentNode
}, ip = function(t, e) {
    var r = e === "x" ? "Width" : "Height"
      , i = "scroll" + r
      , s = "client" + r;
    return Math.max(0, Ns(t) ? Math.max(Qr[i], Fn[i]) - (Ut["inner" + r] || Qr[s] || Fn[s]) : t[i] - t[s])
}, Nu = function n(t, e) {
    var r = ip(t, "x")
      , i = ip(t, "y");
    Ns(t) ? t = Cn : n(t.parentNode, e),
    t._gsMaxScrollX = r,
    t._gsMaxScrollY = i,
    e || (t._gsScrollX = t.scrollLeft || 0,
    t._gsScrollY = t.scrollTop || 0)
}, Gu = function(t, e, r) {
    var i = t.style;
    i && (jr(i[e]) && (e = fo(e, t) || e),
    r == null ? i.removeProperty && i.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[e] = r)
}, na = function(t) {
    return Ut.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
}, di = {}, es = function(t) {
    if (t === Ut)
        return di.left = di.top = 0,
        di.width = di.right = Qr.clientWidth || t.innerWidth || Fn.clientWidth || 0,
        di.height = di.bottom = (t.innerHeight || 0) - 20 < Qr.clientHeight ? Qr.clientHeight : t.innerHeight || Fn.clientHeight || 0,
        di;
    var e = t.ownerDocument || Sr
      , r = jr(t.pageX) ? !t.nodeType && !jr(t.left) && !jr(t.top) ? t : Kn(t)[0].getBoundingClientRect() : {
        left: t.pageX - Ps(e),
        top: t.pageY - As(e),
        right: t.pageX - Ps(e) + 1,
        bottom: t.pageY - As(e) + 1
    };
    return jr(r.right) && !jr(r.width) ? (r.right = r.left + r.width,
    r.bottom = r.top + r.height) : jr(r.width) && (r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
    }),
    r
}, ae = function(t, e, r) {
    var i = t.vars, s = i[r], o = t._listeners[e], a;
    return Wn(s) && (a = s.apply(i.callbackScope || t, i[r + "Params"] || [t.pointerEvent])),
    o && t.dispatchEvent(e) === !1 && (a = !1),
    a
}, sp = function(t, e) {
    var r = Kn(t)[0], i, s, o;
    return !r.nodeType && r !== Ut ? jr(t.left) ? (s = t.min || t.minX || t.minRotation || 0,
    i = t.min || t.minY || 0,
    {
        left: s,
        top: i,
        width: (t.max || t.maxX || t.maxRotation || 0) - s,
        height: (t.max || t.maxY || 0) - i
    }) : (o = {
        x: 0,
        y: 0
    },
    {
        left: t.left - o.x,
        top: t.top - o.y,
        width: t.width,
        height: t.height
    }) : iT(r, e)
}, Fr = {}, iT = function(t, e) {
    e = Kn(e)[0];
    var r = t.getBBox && t.ownerSVGElement, i = t.ownerDocument || Sr, s, o, a, l, u, c, f, d, h, m, p, g, x;
    if (t === Ut)
        a = As(i),
        s = Ps(i),
        o = s + (i.documentElement.clientWidth || t.innerWidth || i.body.clientWidth || 0),
        l = a + ((t.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : t.innerHeight || i.body.clientHeight || 0);
    else {
        if (e === Ut || jr(e))
            return t.getBoundingClientRect();
        s = a = 0,
        r ? (m = t.getBBox(),
        p = m.width,
        g = m.height) : (t.viewBox && (m = t.viewBox.baseVal) && (s = m.x || 0,
        a = m.y || 0,
        p = m.width,
        g = m.height),
        p || (x = na(t),
        m = x.boxSizing === "border-box",
        p = (parseFloat(x.width) || t.clientWidth || 0) + (m ? 0 : parseFloat(x.borderLeftWidth) + parseFloat(x.borderRightWidth)),
        g = (parseFloat(x.height) || t.clientHeight || 0) + (m ? 0 : parseFloat(x.borderTopWidth) + parseFloat(x.borderBottomWidth)))),
        o = p,
        l = g
    }
    return t === e ? {
        left: s,
        top: a,
        width: o - s,
        height: l - a
    } : (u = wi(e, !0).multiply(wi(t)),
    c = u.apply({
        x: s,
        y: a
    }),
    f = u.apply({
        x: o,
        y: a
    }),
    d = u.apply({
        x: o,
        y: l
    }),
    h = u.apply({
        x: s,
        y: l
    }),
    s = Math.min(c.x, f.x, d.x, h.x),
    a = Math.min(c.y, f.y, d.y, h.y),
    {
        left: s,
        top: a,
        width: Math.max(c.x, f.x, d.x, h.x) - s,
        height: Math.max(c.y, f.y, d.y, h.y) - a
    })
}, Vu = function(t, e, r, i, s, o) {
    var a = {}, l, u, c;
    if (e)
        if (s !== 1 && e instanceof Array) {
            if (a.end = l = [],
            c = e.length,
            Po(e[0]))
                for (u = 0; u < c; u++)
                    l[u] = ox(e[u], s);
            else
                for (u = 0; u < c; u++)
                    l[u] = e[u] * s;
            r += 1.1,
            i -= 1.1
        } else
            Wn(e) ? a.end = function(f) {
                var d = e.call(t, f), h, m;
                if (s !== 1)
                    if (Po(d)) {
                        h = {};
                        for (m in d)
                            h[m] = d[m] * s;
                        d = h
                    } else
                        d *= s;
                return d
            }
            : a.end = e;
    return (r || r === 0) && (a.max = r),
    (i || i === 0) && (a.min = i),
    o && (a.velocity = 0),
    a
}, sT = function n(t) {
    var e;
    return !t || !t.getAttribute || t === Fn ? !1 : (e = t.getAttribute("data-clickable")) === "true" || e !== "false" && (Q3.test(t.nodeName + "") || t.getAttribute("contentEditable") === "true") ? !0 : n(t.parentNode)
}, Oa = function(t, e) {
    for (var r = t.length, i; r--; )
        i = t[r],
        i.ondragstart = i.onselectstart = e ? null : nl,
        yt.set(i, {
            lazy: !0,
            userSelect: e ? "text" : "none"
        })
}, oT = function n(t) {
    if (na(t).position === "fixed")
        return !0;
    if (t = t.parentNode,
    t && t.nodeType === 1)
        return n(t)
}, lx, rh, aT = function(t, e) {
    t = yt.utils.toArray(t)[0],
    e = e || {};
    var r = document.createElement("div"), i = r.style, s = t.firstChild, o = 0, a = 0, l = t.scrollTop, u = t.scrollLeft, c = t.scrollWidth, f = t.scrollHeight, d = 0, h = 0, m = 0, p, g, x, v, _, y;
    lx && e.force3D !== !1 ? (_ = "translate3d(",
    y = "px,0px)") : Mo && (_ = "translate(",
    y = "px)"),
    this.scrollTop = function(S, O) {
        if (!arguments.length)
            return -this.top();
        this.top(-S, O)
    }
    ,
    this.scrollLeft = function(S, O) {
        if (!arguments.length)
            return -this.left();
        this.left(-S, O)
    }
    ,
    this.left = function(S, O) {
        if (!arguments.length)
            return -(t.scrollLeft + a);
        var w = t.scrollLeft - u
          , P = a;
        if ((w > 2 || w < -2) && !O) {
            u = t.scrollLeft,
            yt.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            }),
            this.left(-u),
            e.onKill && e.onKill();
            return
        }
        S = -S,
        S < 0 ? (a = S - .5 | 0,
        S = 0) : S > h ? (a = S - h | 0,
        S = h) : a = 0,
        (a || P) && (this._skip || (i[Mo] = _ + -a + "px," + -o + y),
        a + d >= 0 && (i.paddingRight = a + d + "px")),
        t.scrollLeft = S | 0,
        u = t.scrollLeft
    }
    ,
    this.top = function(S, O) {
        if (!arguments.length)
            return -(t.scrollTop + o);
        var w = t.scrollTop - l
          , P = o;
        if ((w > 2 || w < -2) && !O) {
            l = t.scrollTop,
            yt.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            }),
            this.top(-l),
            e.onKill && e.onKill();
            return
        }
        S = -S,
        S < 0 ? (o = S - .5 | 0,
        S = 0) : S > m ? (o = S - m | 0,
        S = m) : o = 0,
        (o || P) && (this._skip || (i[Mo] = _ + -a + "px," + -o + y)),
        t.scrollTop = S | 0,
        l = t.scrollTop
    }
    ,
    this.maxScrollTop = function() {
        return m
    }
    ,
    this.maxScrollLeft = function() {
        return h
    }
    ,
    this.disable = function() {
        for (s = r.firstChild; s; )
            v = s.nextSibling,
            t.appendChild(s),
            s = v;
        t === r.parentNode && t.removeChild(r)
    }
    ,
    this.enable = function() {
        if (s = t.firstChild,
        s !== r) {
            for (; s; )
                v = s.nextSibling,
                r.appendChild(s),
                s = v;
            t.appendChild(r),
            this.calibrate()
        }
    }
    ,
    this.calibrate = function(S) {
        var O = t.clientWidth === p, w, P, T;
        l = t.scrollTop,
        u = t.scrollLeft,
        !(O && t.clientHeight === g && r.offsetHeight === x && c === t.scrollWidth && f === t.scrollHeight && !S) && ((o || a) && (P = this.left(),
        T = this.top(),
        this.left(-t.scrollLeft),
        this.top(-t.scrollTop)),
        w = na(t),
        (!O || S) && (i.display = "block",
        i.width = "auto",
        i.paddingRight = "0px",
        d = Math.max(0, t.scrollWidth - t.clientWidth),
        d && (d += parseFloat(w.paddingLeft) + (rh ? parseFloat(w.paddingRight) : 0))),
        i.display = "inline-block",
        i.position = "relative",
        i.overflow = "visible",
        i.verticalAlign = "top",
        i.boxSizing = "content-box",
        i.width = "100%",
        i.paddingRight = d + "px",
        rh && (i.paddingBottom = w.paddingBottom),
        p = t.clientWidth,
        g = t.clientHeight,
        c = t.scrollWidth,
        f = t.scrollHeight,
        h = t.scrollWidth - p,
        m = t.scrollHeight - g,
        x = r.offsetHeight,
        i.display = "block",
        (P || T) && (this.left(P),
        this.top(T)))
    }
    ,
    this.content = r,
    this.element = t,
    this._skip = !1,
    this.enable()
}, Wu = function(t) {
    if (ix() && document.body) {
        var e = window && window.navigator;
        Ut = window,
        Sr = document,
        Qr = Sr.documentElement,
        Fn = Sr.body,
        $u = Ma("div"),
        rl = !!window.PointerEvent,
        Pn = Ma("div"),
        Pn.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
        mo = Pn.style.cursor === "grab" ? "grab" : "move",
        po = e && e.userAgent.toLowerCase().indexOf("android") !== -1,
        Jc = "ontouchstart"in Qr && "orientation"in Ut || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0),
        rh = function() {
            var r = Ma("div"), i = Ma("div"), s = i.style, o = Fn, a;
            return s.display = "inline-block",
            s.position = "relative",
            r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
            r.appendChild(i),
            o.appendChild(r),
            a = i.offsetHeight + 18 > r.scrollHeight,
            o.removeChild(r),
            a
        }(),
        ra = function(r) {
            for (var i = r.split(","), s = ("onpointerdown"in $u ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in $u ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : r).split(","), o = {}, a = 4; --a > -1; )
                o[i[a]] = s[a],
                o[s[a]] = i[a];
            try {
                Qr.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        rx = 1
                    }
                }))
            } catch {}
            return o
        }("touchstart,touchmove,touchend,touchcancel"),
        _e(Sr, "touchcancel", nl),
        _e(Ut, "touchmove", nl),
        Fn && Fn.addEventListener("touchstart", nl),
        _e(Sr, "contextmenu", function() {
            for (var r in Ts)
                Ts[r].isPressed && Ts[r].endDrag()
        }),
        yt = Qc = sx()
    }
    yt ? (Hr = yt.plugins.inertia,
    nx = yt.core.context || function() {}
    ,
    fo = yt.utils.checkPrefix,
    Mo = fo(Mo),
    eh = fo(eh),
    Kn = yt.utils.toArray,
    th = yt.core.getStyleSaver,
    lx = !!fo("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
}, lT = function() {
    function n(e) {
        this._listeners = {},
        this.target = e || this
    }
    var t = n.prototype;
    return t.addEventListener = function(r, i) {
        var s = this._listeners[r] || (this._listeners[r] = []);
        ~s.indexOf(i) || s.push(i)
    }
    ,
    t.removeEventListener = function(r, i) {
        var s = this._listeners[r]
          , o = s && s.indexOf(i);
        o >= 0 && s.splice(o, 1)
    }
    ,
    t.dispatchEvent = function(r) {
        var i = this, s;
        return (this._listeners[r] || []).forEach(function(o) {
            return o.call(i, {
                type: r,
                target: i.target
            }) === !1 && (s = !1)
        }),
        s
    }
    ,
    n
}(), Hs = function(n) {
    q3(t, n);
    function t(e, r) {
        var i;
        i = n.call(this) || this,
        Qc || Wu(1),
        e = Kn(e)[0],
        i.styles = th && th(e, "transform,left,top"),
        Hr || (Hr = yt.plugins.inertia),
        i.vars = r = ox(r || {}),
        i.target = e,
        i.x = i.y = i.rotation = 0,
        i.dragResistance = parseFloat(r.dragResistance) || 0,
        i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0,
        i.lockAxis = r.lockAxis,
        i.autoScroll = r.autoScroll || 0,
        i.lockedAxis = null,
        i.allowEventDefault = !!r.allowEventDefault,
        yt.getProperty(e, "x");
        var s = (r.type || "x,y").toLowerCase(), o = ~s.indexOf("x") || ~s.indexOf("y"), a = s.indexOf("rotation") !== -1, l = a ? "rotation" : o ? "x" : "left", u = o ? "y" : "top", c = !!(~s.indexOf("x") || ~s.indexOf("left") || s === "scroll"), f = !!(~s.indexOf("y") || ~s.indexOf("top") || s === "scroll"), d = r.minimumMovement || 2, h = qd(i), m = Kn(r.trigger || r.handle || e), p = {}, g = 0, x = !1, v = r.autoScrollMarginTop || 40, _ = r.autoScrollMarginRight || 40, y = r.autoScrollMarginBottom || 40, S = r.autoScrollMarginLeft || 40, O = r.clickableTest || sT, w = 0, P = e._gsap || yt.core.getCache(e), T = oT(e), M = function(C, E) {
            return parseFloat(P.get(e, C, E))
        }, B = e.ownerDocument || Sr, U, z, L, V, G, k, X, $, b, tt, Y, ht, nt, Rt, wt, It, ft, Nt, he, Dt, Ht, ot, lt, rt, Wt, F, Tt, Ne, er, Gt, te, en, rn, ee = function(C) {
            return Or(C),
            C.stopImmediatePropagation && C.stopImmediatePropagation(),
            !1
        }, Pt = function K(C) {
            if (h.autoScroll && h.isDragging && (x || ft)) {
                var E = e, A = h.autoScroll * 15, R, N, I, W, D, H, et, q;
                for (x = !1,
                Cn.scrollTop = Ut.pageYOffset != null ? Ut.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop,
                Cn.scrollLeft = Ut.pageXOffset != null ? Ut.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft,
                W = h.pointerX - Cn.scrollLeft,
                D = h.pointerY - Cn.scrollTop; E && !N; )
                    N = Ns(E.parentNode),
                    R = N ? Cn : E.parentNode,
                    I = N ? {
                        bottom: Math.max(Qr.clientHeight, Ut.innerHeight || 0),
                        right: Math.max(Qr.clientWidth, Ut.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : R.getBoundingClientRect(),
                    H = et = 0,
                    f && (q = R._gsMaxScrollY - R.scrollTop,
                    q < 0 ? et = q : D > I.bottom - y && q ? (x = !0,
                    et = Math.min(q, A * (1 - Math.max(0, I.bottom - D) / y) | 0)) : D < I.top + v && R.scrollTop && (x = !0,
                    et = -Math.min(R.scrollTop, A * (1 - Math.max(0, D - I.top) / v) | 0)),
                    et && (R.scrollTop += et)),
                    c && (q = R._gsMaxScrollX - R.scrollLeft,
                    q < 0 ? H = q : W > I.right - _ && q ? (x = !0,
                    H = Math.min(q, A * (1 - Math.max(0, I.right - W) / _) | 0)) : W < I.left + S && R.scrollLeft && (x = !0,
                    H = -Math.min(R.scrollLeft, A * (1 - Math.max(0, W - I.left) / S) | 0)),
                    H && (R.scrollLeft += H)),
                    N && (H || et) && (Ut.scrollTo(R.scrollLeft, R.scrollTop),
                    gr(h.pointerX + H, h.pointerY + et)),
                    E = R
            }
            if (ft) {
                var at = h.x
                  , Mt = h.y;
                a ? (h.deltaX = at - parseFloat(P.rotation),
                h.rotation = at,
                P.rotation = at + "deg",
                P.renderTransform(1, P)) : z ? (f && (h.deltaY = Mt - z.top(),
                z.top(Mt)),
                c && (h.deltaX = at - z.left(),
                z.left(at))) : o ? (f && (h.deltaY = Mt - parseFloat(P.y),
                P.y = Mt + "px"),
                c && (h.deltaX = at - parseFloat(P.x),
                P.x = at + "px"),
                P.renderTransform(1, P)) : (f && (h.deltaY = Mt - parseFloat(e.style.top || 0),
                e.style.top = Mt + "px"),
                c && (h.deltaX = at - parseFloat(e.style.left || 0),
                e.style.left = at + "px")),
                $ && !C && !Ne && (Ne = !0,
                ae(h, "drag", "onDrag") === !1 && (c && (h.x -= h.deltaX),
                f && (h.y -= h.deltaY),
                K(!0)),
                Ne = !1)
            }
            ft = !1
        }, xe = function(C, E) {
            var A = h.x, R = h.y, N, I;
            e._gsap || (P = yt.core.getCache(e)),
            P.uncache && yt.getProperty(e, "x"),
            o ? (h.x = parseFloat(P.x),
            h.y = parseFloat(P.y)) : a ? h.x = h.rotation = parseFloat(P.rotation) : z ? (h.y = z.top(),
            h.x = z.left()) : (h.y = parseFloat(e.style.top || (I = na(e)) && I.top) || 0,
            h.x = parseFloat(e.style.left || (I || {}).left) || 0),
            (he || Dt || Ht) && !E && (h.isDragging || h.isThrowing) && (Ht && (ts.x = h.x,
            ts.y = h.y,
            N = Ht(ts),
            N.x !== h.x && (h.x = N.x,
            ft = !0),
            N.y !== h.y && (h.y = N.y,
            ft = !0)),
            he && (N = he(h.x),
            N !== h.x && (h.x = N,
            a && (h.rotation = N),
            ft = !0)),
            Dt && (N = Dt(h.y),
            N !== h.y && (h.y = N),
            ft = !0)),
            ft && Pt(!0),
            C || (h.deltaX = h.x - A,
            h.deltaY = h.y - R,
            ae(h, "throwupdate", "onThrowUpdate"))
        }, Ge = function(C, E, A, R) {
            return E == null && (E = -fi),
            A == null && (A = fi),
            Wn(C) ? function(N) {
                var I = h.isPressed ? 1 - h.edgeResistance : 1;
                return C.call(h, (N > A ? A + (N - A) * I : N < E ? E + (N - E) * I : N) * R) * R
            }
            : no(C) ? function(N) {
                for (var I = C.length, W = 0, D = fi, H, et; --I > -1; )
                    H = C[I],
                    et = H - N,
                    et < 0 && (et = -et),
                    et < D && H >= E && H <= A && (W = I,
                    D = et);
                return C[W]
            }
            : isNaN(C) ? function(N) {
                return N
            }
            : function() {
                return C * R
            }
        }, yn = function(C, E, A, R, N, I, W) {
            return I = I && I < fi ? I * I : fi,
            Wn(C) ? function(D) {
                var H = h.isPressed ? 1 - h.edgeResistance : 1, et = D.x, q = D.y, at, Mt, Lt;
                return D.x = et = et > A ? A + (et - A) * H : et < E ? E + (et - E) * H : et,
                D.y = q = q > N ? N + (q - N) * H : q < R ? R + (q - R) * H : q,
                at = C.call(h, D),
                at !== D && (D.x = at.x,
                D.y = at.y),
                W !== 1 && (D.x *= W,
                D.y *= W),
                I < fi && (Mt = D.x - et,
                Lt = D.y - q,
                Mt * Mt + Lt * Lt > I && (D.x = et,
                D.y = q)),
                D
            }
            : no(C) ? function(D) {
                for (var H = C.length, et = 0, q = fi, at, Mt, Lt, vt; --H > -1; )
                    Lt = C[H],
                    at = Lt.x - D.x,
                    Mt = Lt.y - D.y,
                    vt = at * at + Mt * Mt,
                    vt < q && (et = H,
                    q = vt);
                return q <= I ? C[et] : D
            }
            : function(D) {
                return D
            }
        }, pr = function() {
            var C, E, A, R;
            X = !1,
            z ? (z.calibrate(),
            h.minX = Y = -z.maxScrollLeft(),
            h.minY = nt = -z.maxScrollTop(),
            h.maxX = tt = h.maxY = ht = 0,
            X = !0) : r.bounds && (C = sp(r.bounds, e.parentNode),
            a ? (h.minX = Y = C.left,
            h.maxX = tt = C.left + C.width,
            h.minY = nt = h.maxY = ht = 0) : !jr(r.bounds.maxX) || !jr(r.bounds.maxY) ? (C = r.bounds,
            h.minX = Y = C.minX,
            h.minY = nt = C.minY,
            h.maxX = tt = C.maxX,
            h.maxY = ht = C.maxY) : (E = sp(e, e.parentNode),
            h.minX = Y = Math.round(M(l, "px") + C.left - E.left),
            h.minY = nt = Math.round(M(u, "px") + C.top - E.top),
            h.maxX = tt = Math.round(Y + (C.width - E.width)),
            h.maxY = ht = Math.round(nt + (C.height - E.height))),
            Y > tt && (h.minX = tt,
            h.maxX = tt = Y,
            Y = h.minX),
            nt > ht && (h.minY = ht,
            h.maxY = ht = nt,
            nt = h.minY),
            a && (h.minRotation = Y,
            h.maxRotation = tt),
            X = !0),
            r.liveSnap && (A = r.liveSnap === !0 ? r.snap || {} : r.liveSnap,
            R = no(A) || Wn(A),
            a ? (he = Ge(R ? A : A.rotation, Y, tt, 1),
            Dt = null) : A.points ? Ht = yn(R ? A : A.points, Y, tt, nt, ht, A.radius, z ? -1 : 1) : (c && (he = Ge(R ? A : A.x || A.left || A.scrollLeft, Y, tt, z ? -1 : 1)),
            f && (Dt = Ge(R ? A : A.y || A.top || A.scrollTop, nt, ht, z ? -1 : 1))))
        }, Mr = function() {
            h.isThrowing = !1,
            ae(h, "throwcomplete", "onThrowComplete")
        }, Ie = function() {
            h.isThrowing = !1
        }, Gr = function(C, E) {
            var A, R, N, I;
            C && Hr ? (C === !0 && (A = r.snap || r.liveSnap || {},
            R = no(A) || Wn(A),
            C = {
                resistance: (r.throwResistance || r.resistance || 1e3) / (a ? 10 : 1)
            },
            a ? C.rotation = Vu(h, R ? A : A.rotation, tt, Y, 1, E) : (c && (C[l] = Vu(h, R ? A : A.points || A.x || A.left, tt, Y, z ? -1 : 1, E || h.lockedAxis === "x")),
            f && (C[u] = Vu(h, R ? A : A.points || A.y || A.top, ht, nt, z ? -1 : 1, E || h.lockedAxis === "y")),
            (A.points || no(A) && Po(A[0])) && (C.linkedProps = l + "," + u,
            C.radius = A.radius))),
            h.isThrowing = !0,
            I = isNaN(r.overshootTolerance) ? r.edgeResistance === 1 ? 0 : 1 - h.edgeResistance + .2 : r.overshootTolerance,
            C.duration || (C.duration = {
                max: Math.max(r.minDuration || 0, "maxDuration"in r ? r.maxDuration : 2),
                min: isNaN(r.minDuration) ? I === 0 || Po(C) && C.resistance > 1e3 ? 0 : .5 : r.minDuration,
                overshoot: I
            }),
            h.tween = N = yt.to(z || e, {
                inertia: C,
                data: "_draggable",
                onComplete: Mr,
                onInterrupt: Ie,
                onUpdate: r.fastMode ? ae : xe,
                onUpdateParams: r.fastMode ? [h, "onthrowupdate", "onThrowUpdate"] : A && A.radius ? [!1, !0] : []
            }),
            r.fastMode || (z && (z._skip = !0),
            N.render(1e9, !0, !0),
            xe(!0, !0),
            h.endX = h.x,
            h.endY = h.y,
            a && (h.endRotation = h.x),
            N.play(0),
            xe(!0, !0),
            z && (z._skip = !1))) : X && h.applyBounds()
        }, bn = function(C) {
            var E = rt, A;
            rt = wi(e.parentNode, !0),
            C && h.isPressed && !rt.equals(E || new Vi) && (A = E.inverse().apply({
                x: L,
                y: V
            }),
            rt.apply(A, A),
            L = A.x,
            V = A.y),
            rt.equals(K3) && (rt = null)
        }, Vr = function() {
            var C = 1 - h.edgeResistance, E = T ? Ps(B) : 0, A = T ? As(B) : 0, R, N, I;
            o && (P.x = M(l, "px") + "px",
            P.y = M(u, "px") + "px",
            P.renderTransform()),
            bn(!1),
            Fr.x = h.pointerX - E,
            Fr.y = h.pointerY - A,
            rt && rt.apply(Fr, Fr),
            L = Fr.x,
            V = Fr.y,
            ft && (gr(h.pointerX, h.pointerY),
            Pt(!0)),
            en = wi(e),
            z ? (pr(),
            k = z.top(),
            G = z.left()) : (mr() ? (xe(!0, !0),
            pr()) : h.applyBounds(),
            a ? (R = e.ownerSVGElement ? [P.xOrigin - e.getBBox().x, P.yOrigin - e.getBBox().y] : (na(e)[eh] || "0 0").split(" "),
            It = h.rotationOrigin = wi(e).apply({
                x: parseFloat(R[0]) || 0,
                y: parseFloat(R[1]) || 0
            }),
            xe(!0, !0),
            N = h.pointerX - It.x - E,
            I = It.y - h.pointerY + A,
            G = h.x,
            k = h.y = Math.atan2(I, N) * Kd) : (k = M(u, "px"),
            G = M(l, "px"))),
            X && C && (G > tt ? G = tt + (G - tt) / C : G < Y && (G = Y - (Y - G) / C),
            a || (k > ht ? k = ht + (k - ht) / C : k < nt && (k = nt - (nt - k) / C))),
            h.startX = G = $n(G),
            h.startY = k = $n(k)
        }, mr = function() {
            return h.tween && h.tween.isActive()
        }, nn = function() {
            Pn.parentNode && !mr() && !h.isDragging && Pn.parentNode.removeChild(Pn)
        }, rr = function(C, E) {
            var A;
            if (!U || h.isPressed || !C || (C.type === "mousedown" || C.type === "pointerdown") && !E && Nn() - w < 30 && ra[h.pointerEvent.type]) {
                te && C && U && Or(C);
                return
            }
            if (Wt = mr(),
            rn = !1,
            h.pointerEvent = C,
            ra[C.type] ? (lt = ~C.type.indexOf("touch") ? C.currentTarget || C.target : B,
            _e(lt, "touchend", Yt),
            _e(lt, "touchmove", ut),
            _e(lt, "touchcancel", Yt),
            _e(B, "touchstart", ep)) : (lt = null,
            _e(B, "mousemove", ut)),
            Tt = null,
            (!rl || !lt) && (_e(B, "mouseup", Yt),
            C && C.target && _e(C.target, "mouseup", Yt)),
            ot = O.call(h, C.target) && r.dragClickables === !1 && !E,
            ot) {
                _e(C.target, "change", Yt),
                ae(h, "pressInit", "onPressInit"),
                ae(h, "press", "onPress"),
                Oa(m, !0),
                te = !1;
                return
            }
            if (F = !lt || c === f || h.vars.allowNativeTouchScrolling === !1 || h.vars.allowContextMenu && C && (C.ctrlKey || C.which > 2) ? !1 : c ? "y" : "x",
            te = !F && !h.allowEventDefault,
            te && (Or(C),
            _e(Ut, "touchforcechange", Or)),
            C.changedTouches ? (C = Rt = C.changedTouches[0],
            wt = C.identifier) : C.pointerId ? wt = C.pointerId : Rt = wt = null,
            Ml++,
            tT(Pt),
            V = h.pointerY = C.pageY,
            L = h.pointerX = C.pageX,
            ae(h, "pressInit", "onPressInit"),
            (F || h.autoScroll) && Nu(e.parentNode),
            e.parentNode && h.autoScroll && !z && !a && e.parentNode._gsMaxScrollX && !Pn.parentNode && !e.getBBox && (Pn.style.width = e.parentNode.scrollWidth + "px",
            e.parentNode.appendChild(Pn)),
            Vr(),
            h.tween && h.tween.kill(),
            h.isThrowing = !1,
            yt.killTweensOf(z || e, p, !0),
            z && yt.killTweensOf(e, {
                scrollTo: 1
            }, !0),
            h.tween = h.lockedAxis = null,
            (r.zIndexBoost || !a && !z && r.zIndexBoost !== !1) && (e.style.zIndex = t.zIndex++),
            h.isPressed = !0,
            $ = !!(r.onDrag || h._listeners.drag),
            b = !!(r.onMove || h._listeners.move),
            r.cursor !== !1 || r.activeCursor)
                for (A = m.length; --A > -1; )
                    yt.set(m[A], {
                        cursor: r.activeCursor || r.cursor || (mo === "grab" ? "grabbing" : mo)
                    });
            ae(h, "press", "onPress")
        }, ut = function(C) {
            var E = C, A, R, N, I, W, D;
            if (!U || of || !h.isPressed || !C) {
                te && C && U && Or(C);
                return
            }
            if (h.pointerEvent = C,
            A = C.changedTouches,
            A) {
                if (C = A[0],
                C !== Rt && C.identifier !== wt) {
                    for (I = A.length; --I > -1 && (C = A[I]).identifier !== wt && C.target !== e; )
                        ;
                    if (I < 0)
                        return
                }
            } else if (C.pointerId && wt && C.pointerId !== wt)
                return;
            if (lt && F && !Tt && (Fr.x = C.pageX - (T ? Ps(B) : 0),
            Fr.y = C.pageY - (T ? As(B) : 0),
            rt && rt.apply(Fr, Fr),
            R = Fr.x,
            N = Fr.y,
            W = Math.abs(R - L),
            D = Math.abs(N - V),
            (W !== D && (W > d || D > d) || po && F === Tt) && (Tt = W > D && c ? "x" : "y",
            F && Tt !== F && _e(Ut, "touchforcechange", Or),
            h.vars.lockAxisOnTouchScroll !== !1 && c && f && (h.lockedAxis = Tt === "x" ? "y" : "x",
            Wn(h.vars.onLockAxis) && h.vars.onLockAxis.call(h, E)),
            po && F === Tt))) {
                Yt(E);
                return
            }
            !h.allowEventDefault && (!F || Tt && F !== Tt) && E.cancelable !== !1 ? (Or(E),
            te = !0) : te && (te = !1),
            h.autoScroll && (x = !0),
            gr(C.pageX, C.pageY, b)
        }, gr = function(C, E, A) {
            var R = 1 - h.dragResistance, N = 1 - h.edgeResistance, I = h.pointerX, W = h.pointerY, D = k, H = h.x, et = h.y, q = h.endX, at = h.endY, Mt = h.endRotation, Lt = ft, vt, _t, kt, st, Oe, re;
            h.pointerX = C,
            h.pointerY = E,
            T && (C -= Ps(B),
            E -= As(B)),
            a ? (st = Math.atan2(It.y - E, C - It.x) * Kd,
            Oe = h.y - st,
            Oe > 180 ? (k -= 360,
            h.y = st) : Oe < -180 && (k += 360,
            h.y = st),
            h.x !== G || Math.abs(k - st) > d ? (h.y = st,
            kt = G + (k - st) * R) : kt = G) : (rt && (re = C * rt.a + E * rt.c + rt.e,
            E = C * rt.b + E * rt.d + rt.f,
            C = re),
            _t = E - V,
            vt = C - L,
            _t < d && _t > -d && (_t = 0),
            vt < d && vt > -d && (vt = 0),
            (h.lockAxis || h.lockedAxis) && (vt || _t) && (re = h.lockedAxis,
            re || (h.lockedAxis = re = c && Math.abs(vt) > Math.abs(_t) ? "y" : f ? "x" : null,
            re && Wn(h.vars.onLockAxis) && h.vars.onLockAxis.call(h, h.pointerEvent)),
            re === "y" ? _t = 0 : re === "x" && (vt = 0)),
            kt = $n(G + vt * R),
            st = $n(k + _t * R)),
            (he || Dt || Ht) && (h.x !== kt || h.y !== st && !a) && (Ht && (ts.x = kt,
            ts.y = st,
            re = Ht(ts),
            kt = $n(re.x),
            st = $n(re.y)),
            he && (kt = $n(he(kt))),
            Dt && (st = $n(Dt(st)))),
            X && (kt > tt ? kt = tt + Math.round((kt - tt) * N) : kt < Y && (kt = Y + Math.round((kt - Y) * N)),
            a || (st > ht ? st = Math.round(ht + (st - ht) * N) : st < nt && (st = Math.round(nt + (st - nt) * N)))),
            (h.x !== kt || h.y !== st && !a) && (a ? (h.endRotation = h.x = h.endX = kt,
            ft = !0) : (f && (h.y = h.endY = st,
            ft = !0),
            c && (h.x = h.endX = kt,
            ft = !0)),
            !A || ae(h, "move", "onMove") !== !1 ? !h.isDragging && h.isPressed && (h.isDragging = rn = !0,
            ae(h, "dragstart", "onDragStart")) : (h.pointerX = I,
            h.pointerY = W,
            k = D,
            h.x = H,
            h.y = et,
            h.endX = q,
            h.endY = at,
            h.endRotation = Mt,
            ft = Lt))
        }, Yt = function K(C, E) {
            if (!U || !h.isPressed || C && wt != null && !E && (C.pointerId && C.pointerId !== wt && C.target !== e || C.changedTouches && !rT(C.changedTouches, wt))) {
                te && C && U && Or(C);
                return
            }
            h.isPressed = !1;
            var A = C, R = h.isDragging, N = h.vars.allowContextMenu && C && (C.ctrlKey || C.which > 2), I = yt.delayedCall(.001, nn), W, D, H, et, q;
            if (lt ? (fe(lt, "touchend", K),
            fe(lt, "touchmove", ut),
            fe(lt, "touchcancel", K),
            fe(B, "touchstart", ep)) : fe(B, "mousemove", ut),
            fe(Ut, "touchforcechange", Or),
            (!rl || !lt) && (fe(B, "mouseup", K),
            C && C.target && fe(C.target, "mouseup", K)),
            ft = !1,
            R && (g = Zd = Nn(),
            h.isDragging = !1),
            tp(Pt),
            ot && !N) {
                C && (fe(C.target, "change", K),
                h.pointerEvent = A),
                Oa(m, !1),
                ae(h, "release", "onRelease"),
                ae(h, "click", "onClick"),
                ot = !1;
                return
            }
            for (D = m.length; --D > -1; )
                Gu(m[D], "cursor", r.cursor || (r.cursor !== !1 ? mo : null));
            if (Ml--,
            C) {
                if (W = C.changedTouches,
                W && (C = W[0],
                C !== Rt && C.identifier !== wt)) {
                    for (D = W.length; --D > -1 && (C = W[D]).identifier !== wt && C.target !== e; )
                        ;
                    if (D < 0 && !E)
                        return
                }
                h.pointerEvent = A,
                h.pointerX = C.pageX,
                h.pointerY = C.pageY
            }
            return N && A ? (Or(A),
            te = !0,
            ae(h, "release", "onRelease")) : A && !R ? (te = !1,
            Wt && (r.snap || r.bounds) && Gr(r.inertia || r.throwProps),
            ae(h, "release", "onRelease"),
            (!po || A.type !== "touchmove") && A.type.indexOf("cancel") === -1 && (ae(h, "click", "onClick"),
            Nn() - w < 300 && ae(h, "doubleclick", "onDoubleClick"),
            et = A.target || e,
            w = Nn(),
            q = function() {
                w !== er && h.enabled() && !h.isPressed && !A.defaultPrevented && (et.click ? et.click() : B.createEvent && (H = B.createEvent("MouseEvents"),
                H.initMouseEvent("click", !0, !0, Ut, 1, h.pointerEvent.screenX, h.pointerEvent.screenY, h.pointerX, h.pointerY, !1, !1, !1, !1, 0, null),
                et.dispatchEvent(H)))
            }
            ,
            !po && !A.defaultPrevented && yt.delayedCall(.05, q))) : (Gr(r.inertia || r.throwProps),
            !h.allowEventDefault && A && (r.dragClickables !== !1 || !O.call(h, A.target)) && R && (!F || Tt && F === Tt) && A.cancelable !== !1 ? (te = !0,
            Or(A)) : te = !1,
            ae(h, "release", "onRelease")),
            mr() && I.duration(h.tween.duration()),
            R && ae(h, "dragend", "onDragEnd"),
            !0
        }, ke = function(C) {
            if (C && h.isDragging && !z) {
                var E = C.target || e.parentNode
                  , A = E.scrollLeft - E._gsScrollX
                  , R = E.scrollTop - E._gsScrollY;
                (A || R) && (rt ? (L -= A * rt.a + R * rt.c,
                V -= R * rt.d + A * rt.b) : (L -= A,
                V -= R),
                E._gsScrollX += A,
                E._gsScrollY += R,
                gr(h.pointerX, h.pointerY))
            }
        }, nr = function(C) {
            var E = Nn()
              , A = E - w < 100
              , R = E - g < 50
              , N = A && er === w
              , I = h.pointerEvent && h.pointerEvent.defaultPrevented
              , W = A && Gt === w
              , D = C.isTrusted || C.isTrusted == null && A && N;
            if ((N || R && h.vars.suppressClickOnDrag !== !1) && C.stopImmediatePropagation && C.stopImmediatePropagation(),
            A && !(h.pointerEvent && h.pointerEvent.defaultPrevented) && (!N || D && !W)) {
                D && N && (Gt = w),
                er = w;
                return
            }
            (h.isPressed || R || A) && (!D || !C.detail || !A || I) && Or(C),
            !A && !R && !rn && (C && C.target && (h.pointerEvent = C),
            ae(h, "click", "onClick"))
        }, sn = function(C) {
            return rt ? {
                x: C.x * rt.a + C.y * rt.c + rt.e,
                y: C.x * rt.b + C.y * rt.d + rt.f
            } : {
                x: C.x,
                y: C.y
            }
        };
        return Nt = t.get(e),
        Nt && Nt.kill(),
        i.startDrag = function(K, C) {
            var E, A, R, N;
            rr(K || h.pointerEvent, !0),
            C && !h.hitTest(K || h.pointerEvent) && (E = es(K || h.pointerEvent),
            A = es(e),
            R = sn({
                x: E.left + E.width / 2,
                y: E.top + E.height / 2
            }),
            N = sn({
                x: A.left + A.width / 2,
                y: A.top + A.height / 2
            }),
            L -= R.x - N.x,
            V -= R.y - N.y),
            h.isDragging || (h.isDragging = rn = !0,
            ae(h, "dragstart", "onDragStart"))
        }
        ,
        i.drag = ut,
        i.endDrag = function(K) {
            return Yt(K || h.pointerEvent, !0)
        }
        ,
        i.timeSinceDrag = function() {
            return h.isDragging ? 0 : (Nn() - g) / 1e3
        }
        ,
        i.timeSinceClick = function() {
            return (Nn() - w) / 1e3
        }
        ,
        i.hitTest = function(K, C) {
            return t.hitTest(h.target, K, C)
        }
        ,
        i.getDirection = function(K, C) {
            var E = K === "velocity" && Hr ? K : Po(K) && !a ? "element" : "start", A, R, N, I, W, D;
            return E === "element" && (W = es(h.target),
            D = es(K)),
            A = E === "start" ? h.x - G : E === "velocity" ? Hr.getVelocity(e, l) : W.left + W.width / 2 - (D.left + D.width / 2),
            a ? A < 0 ? "counter-clockwise" : "clockwise" : (C = C || 2,
            R = E === "start" ? h.y - k : E === "velocity" ? Hr.getVelocity(e, u) : W.top + W.height / 2 - (D.top + D.height / 2),
            N = Math.abs(A / R),
            I = N < 1 / C ? "" : A < 0 ? "left" : "right",
            N < C && (I !== "" && (I += "-"),
            I += R < 0 ? "up" : "down"),
            I)
        }
        ,
        i.applyBounds = function(K, C) {
            var E, A, R, N, I, W;
            if (K && r.bounds !== K)
                return r.bounds = K,
                h.update(!0, C);
            if (xe(!0),
            pr(),
            X && !mr()) {
                if (E = h.x,
                A = h.y,
                E > tt ? E = tt : E < Y && (E = Y),
                A > ht ? A = ht : A < nt && (A = nt),
                (h.x !== E || h.y !== A) && (R = !0,
                h.x = h.endX = E,
                a ? h.endRotation = E : h.y = h.endY = A,
                ft = !0,
                Pt(!0),
                h.autoScroll && !h.isDragging))
                    for (Nu(e.parentNode),
                    N = e,
                    Cn.scrollTop = Ut.pageYOffset != null ? Ut.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop,
                    Cn.scrollLeft = Ut.pageXOffset != null ? Ut.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft; N && !W; )
                        W = Ns(N.parentNode),
                        I = W ? Cn : N.parentNode,
                        f && I.scrollTop > I._gsMaxScrollY && (I.scrollTop = I._gsMaxScrollY),
                        c && I.scrollLeft > I._gsMaxScrollX && (I.scrollLeft = I._gsMaxScrollX),
                        N = I;
                h.isThrowing && (R || h.endX > tt || h.endX < Y || h.endY > ht || h.endY < nt) && Gr(r.inertia || r.throwProps, R)
            }
            return h
        }
        ,
        i.update = function(K, C, E) {
            if (C && h.isPressed) {
                var A = wi(e)
                  , R = en.apply({
                    x: h.x - G,
                    y: h.y - k
                })
                  , N = wi(e.parentNode, !0);
                N.apply({
                    x: A.e - R.x,
                    y: A.f - R.y
                }, R),
                h.x -= R.x - N.e,
                h.y -= R.y - N.f,
                Pt(!0),
                Vr()
            }
            var I = h.x
              , W = h.y;
            return bn(!C),
            K ? h.applyBounds() : (ft && E && Pt(!0),
            xe(!0)),
            C && (gr(h.pointerX, h.pointerY),
            ft && Pt(!0)),
            h.isPressed && !C && (c && Math.abs(I - h.x) > .01 || f && Math.abs(W - h.y) > .01 && !a) && Vr(),
            h.autoScroll && (Nu(e.parentNode, h.isDragging),
            x = h.isDragging,
            Pt(!0),
            np(e, ke),
            rp(e, ke)),
            h
        }
        ,
        i.enable = function(K) {
            var C = {
                lazy: !0
            }, E, A, R;
            if (r.cursor !== !1 && (C.cursor = r.cursor || mo),
            yt.utils.checkPrefix("touchCallout") && (C.touchCallout = "none"),
            K !== "soft") {
                for (Qd(m, c === f ? "none" : r.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || r.allowEventDefault ? "manipulation" : c ? "pan-y" : "pan-x"),
                A = m.length; --A > -1; )
                    R = m[A],
                    rl || _e(R, "mousedown", rr),
                    _e(R, "touchstart", rr),
                    _e(R, "click", nr, !0),
                    yt.set(R, C),
                    R.getBBox && R.ownerSVGElement && c !== f && yt.set(R.ownerSVGElement, {
                        touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : c ? "pan-y" : "pan-x"
                    }),
                    r.allowContextMenu || _e(R, "contextmenu", ee);
                Oa(m, !1)
            }
            return rp(e, ke),
            U = !0,
            Hr && K !== "soft" && Hr.track(z || e, o ? "x,y" : a ? "rotation" : "top,left"),
            e._gsDragID = E = "d" + Z3++,
            Ts[E] = h,
            z && (z.enable(),
            z.element._gsDragID = E),
            (r.bounds || a) && Vr(),
            r.bounds && h.applyBounds(),
            h
        }
        ,
        i.disable = function(K) {
            for (var C = h.isDragging, E = m.length, A; --E > -1; )
                Gu(m[E], "cursor", null);
            if (K !== "soft") {
                for (Qd(m, null),
                E = m.length; --E > -1; )
                    A = m[E],
                    Gu(A, "touchCallout", null),
                    fe(A, "mousedown", rr),
                    fe(A, "touchstart", rr),
                    fe(A, "click", nr, !0),
                    fe(A, "contextmenu", ee);
                Oa(m, !0),
                lt && (fe(lt, "touchcancel", Yt),
                fe(lt, "touchend", Yt),
                fe(lt, "touchmove", ut)),
                fe(B, "mouseup", Yt),
                fe(B, "mousemove", ut)
            }
            return np(e, ke),
            U = !1,
            Hr && K !== "soft" && (Hr.untrack(z || e, o ? "x,y" : a ? "rotation" : "top,left"),
            h.tween && h.tween.kill()),
            z && z.disable(),
            tp(Pt),
            h.isDragging = h.isPressed = ot = !1,
            C && ae(h, "dragend", "onDragEnd"),
            h
        }
        ,
        i.enabled = function(K, C) {
            return arguments.length ? K ? h.enable(C) : h.disable(C) : U
        }
        ,
        i.kill = function() {
            return h.isThrowing = !1,
            h.tween && h.tween.kill(),
            h.disable(),
            yt.set(m, {
                clearProps: "userSelect"
            }),
            delete Ts[e._gsDragID],
            h
        }
        ,
        i.revert = function() {
            this.kill(),
            this.styles && this.styles.revert()
        }
        ,
        ~s.indexOf("scroll") && (z = i.scrollProxy = new aT(e,J3({
            onKill: function() {
                h.isPressed && Yt(null)
            }
        }, r)),
        e.style.overflowY = f && !Jc ? "auto" : "hidden",
        e.style.overflowX = c && !Jc ? "auto" : "hidden",
        e = z.content),
        a ? p.rotation = 1 : (c && (p[l] = 1),
        f && (p[u] = 1)),
        P.force3D = "force3D"in r ? r.force3D : !0,
        nx(qd(i)),
        i.enable(),
        i
    }
    return t.register = function(r) {
        yt = r,
        Wu()
    }
    ,
    t.create = function(r, i) {
        return Qc || Wu(!0),
        Kn(r).map(function(s) {
            return new t(s,i)
        })
    }
    ,
    t.get = function(r) {
        return Ts[(Kn(r)[0] || {})._gsDragID]
    }
    ,
    t.timeSinceDrag = function() {
        return (Nn() - Zd) / 1e3
    }
    ,
    t.hitTest = function(r, i, s) {
        if (r === i)
            return !1;
        var o = es(r), a = es(i), l = o.top, u = o.left, c = o.right, f = o.bottom, d = o.width, h = o.height, m = a.left > c || a.right < u || a.top > f || a.bottom < l, p, g, x;
        return m || !s ? !m : (x = (s + "").indexOf("%") !== -1,
        s = parseFloat(s) || 0,
        p = {
            left: Math.max(u, a.left),
            top: Math.max(l, a.top)
        },
        p.width = Math.min(c, a.right) - p.left,
        p.height = Math.min(f, a.bottom) - p.top,
        p.width < 0 || p.height < 0 ? !1 : x ? (s *= .01,
        g = p.width * p.height,
        g >= d * h * s || g >= a.width * a.height * s) : p.width > s && p.height > s)
    }
    ,
    t
}(lT);
eT(Hs.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
Hs.zIndex = 1e3;
Hs.version = "3.12.4";
sx() && yt.registerPlugin(Hs);
/*!
 * VelocityTracker: 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var fn, nh, Oo, ux, cs, gs, ih, cx, hx = function() {
    return fn || typeof window < "u" && (fn = window.gsap)
}, sh = {}, uT = function(t) {
    return Math.round(t * 1e4) / 1e4
}, oh = function(t) {
    return cx(t).id
}, go = function(t) {
    return sh[oh(typeof t == "string" ? Oo(t)[0] : t)]
}, op = function(t) {
    var e = cs, r;
    if (t - ih >= .05)
        for (ih = t; e; )
            r = e.g(e.t, e.p),
            (r !== e.v1 || t - e.t1 > .2) && (e.v2 = e.v1,
            e.v1 = r,
            e.t2 = e.t1,
            e.t1 = t),
            e = e._next
}, cT = {
    deg: 360,
    rad: Math.PI * 2
}, Xu = function() {
    fn = hx(),
    fn && (Oo = fn.utils.toArray,
    ux = fn.utils.getUnit,
    cx = fn.core.getCache,
    gs = fn.ticker,
    nh = 1)
}, hT = function(t, e, r, i) {
    this.t = t,
    this.p = e,
    this.g = t._gsap.get,
    this.rCap = cT[r || ux(this.g(t, e))],
    this.v1 = this.v2 = 0,
    this.t1 = this.t2 = gs.time,
    i && (this._next = i,
    i._prev = this)
}, la = function() {
    function n(e, r) {
        nh || Xu(),
        this.target = Oo(e)[0],
        sh[oh(this.target)] = this,
        this._props = {},
        r && this.add(r)
    }
    n.register = function(r) {
        fn = r,
        Xu()
    }
    ;
    var t = n.prototype;
    return t.get = function(r, i) {
        var s = this._props[r] || console.warn("Not tracking " + r + " velocity."), o, a, l;
        return o = parseFloat(i ? s.v1 : s.g(s.t, s.p)),
        a = o - parseFloat(s.v2),
        l = s.rCap,
        l && (a = a % l,
        a !== a % (l / 2) && (a = a < 0 ? a + l : a - l)),
        uT(a / ((i ? s.t1 : gs.time) - s.t2))
    }
    ,
    t.getAll = function() {
        var r = {}, i = this._props, s;
        for (s in i)
            r[s] = this.get(s);
        return r
    }
    ,
    t.isTracking = function(r) {
        return r in this._props
    }
    ,
    t.add = function(r, i) {
        r in this._props || (cs || (gs.add(op),
        ih = gs.time),
        cs = this._props[r] = new hT(this.target,r,i,cs))
    }
    ,
    t.remove = function(r) {
        var i = this._props[r], s, o;
        i && (s = i._prev,
        o = i._next,
        s && (s._next = o),
        o ? o._prev = s : cs === i && (gs.remove(op),
        cs = 0),
        delete this._props[r])
    }
    ,
    t.kill = function(r) {
        for (var i in this._props)
            this.remove(i);
        r || delete sh[oh(this.target)]
    }
    ,
    n.track = function(r, i, s) {
        nh || Xu();
        for (var o = [], a = Oo(r), l = i.split(","), u = (s || "").split(","), c = a.length, f, d; c--; ) {
            for (f = go(a[c]) || new n(a[c]),
            d = l.length; d--; )
                f.add(l[d], u[d] || u[0]);
            o.push(f)
        }
        return o
    }
    ,
    n.untrack = function(r, i) {
        var s = (i || "").split(",");
        Oo(r).forEach(function(o) {
            var a = go(o);
            a && (s.length ? s.forEach(function(l) {
                return a.remove(l)
            }) : a.kill(1))
        })
    }
    ,
    n.isTracking = function(r, i) {
        var s = go(r);
        return s && s.isTracking(i)
    }
    ,
    n.getVelocity = function(r, i) {
        var s = go(r);
        return !s || !s.isTracking(i) ? console.warn("Not tracking velocity of " + i) : s.get(i)
    }
    ,
    n
}();
la.getByTarget = go;
hx() && fn.registerPlugin(la);
/*!
 * InertiaPlugin 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ye, fx, ap, dx, ah, Fo, px, mx, gx, af, xx, Eo, lh, vx, Ol = la.getByTarget, _x = function() {
    return ye || typeof window < "u" && (ye = window.gsap) && ye.registerPlugin && ye
}, fT = function(t) {
    return typeof t == "string"
}, ia = function(t) {
    return typeof t == "number"
}, ei = function(t) {
    return typeof t == "object"
}, uh = function(t) {
    return typeof t == "function"
}, dT = 1, yx = Array.isArray, pT = function(t) {
    return t
}, Li = 1e10, lp = 1 / Li, bx = .05, mT = function(t) {
    return Math.round(t * 1e4) / 1e4
}, gT = function(t, e, r) {
    for (var i in e)
        !(i in t) && i !== r && (t[i] = e[i]);
    return t
}, xT = function n(t) {
    var e = {}, r, i;
    for (r in t)
        e[r] = ei(i = t[r]) && !yx(i) ? n(i) : i;
    return e
}, up = function(t, e, r, i, s) {
    var o = e.length, a = 0, l = Li, u, c, f, d;
    if (ei(t)) {
        for (; o--; ) {
            u = e[o],
            c = 0;
            for (f in t)
                d = u[f] - t[f],
                c += d * d;
            c < l && (a = o,
            l = c)
        }
        if ((s || Li) < Li && s < Math.sqrt(l))
            return t
    } else
        for (; o--; )
            u = e[o],
            c = u - t,
            c < 0 && (c = -c),
            c < l && u >= i && u <= r && (a = o,
            l = c);
    return e[a]
}, Sx = function(t, e, r, i, s, o, a) {
    if (t.end === "auto")
        return t;
    var l = t.end, u, c;
    if (r = isNaN(r) ? Li : r,
    i = isNaN(i) ? -Li : i,
    ei(e)) {
        if (u = e.calculated ? e : (uh(l) ? l(e, a) : up(e, l, r, i, o)) || e,
        !e.calculated) {
            for (c in u)
                e[c] = u[c];
            e.calculated = !0
        }
        u = u[s]
    } else
        u = uh(l) ? l(e, a) : yx(l) ? up(e, l, r, i, o) : parseFloat(l);
    return u > r ? u = r : u < i && (u = i),
    {
        max: u,
        min: u,
        unitFactor: t.unitFactor
    }
}, Fl = function(t, e, r) {
    return isNaN(t[e]) ? r : +t[e]
}, lf = function(t, e) {
    return e * bx * t / af
}, cp = function(t, e, r) {
    return Math.abs((e - t) * af / r / bx)
}, wx = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
}, Cx = function(t, e, r, i) {
    if (e.linkedProps) {
        var s = e.linkedProps.split(","), o = {}, a, l, u, c, f, d;
        for (a = 0; a < s.length; a++)
            l = s[a],
            u = e[l],
            u && (ia(u.velocity) ? c = u.velocity : (f = f || Ol(t),
            c = f && f.isTracking(l) ? f.get(l) : 0),
            d = Math.abs(c / Fl(u, "resistance", i)),
            o[l] = parseFloat(r(t, l)) + lf(c, d));
        return o
    }
}, vT = function(t, e, r, i, s, o) {
    if (r === void 0 && (r = 10),
    i === void 0 && (i = .2),
    s === void 0 && (s = 1),
    fT(t) && (t = dx(t)[0]),
    !t)
        return 0;
    var a = 0, l = Li, u = e.inertia || e, c = gx(t).get, f = Fl(u, "resistance", Fo.resistance), d, h, m, p, g, x, v, _, y, S;
    S = Cx(t, u, c, f);
    for (d in u)
        wx[d] || (h = u[d],
        ei(h) || (_ = _ || Ol(t),
        _ && _.isTracking(d) ? h = ia(h) ? {
            velocity: h
        } : {
            velocity: _.get(d)
        } : (p = +h || 0,
        m = Math.abs(p / f))),
        ei(h) && (ia(h.velocity) ? p = h.velocity : (_ = _ || Ol(t),
        p = _ && _.isTracking(d) ? _.get(d) : 0),
        m = xx(i, r, Math.abs(p / Fl(h, "resistance", f))),
        g = parseFloat(c(t, d)) || 0,
        x = g + lf(p, m),
        "end"in h && (h = Sx(h, S && d in S ? S : x, h.max, h.min, d, u.radius, p),
        Eo === e && (Eo = u = xT(e)),
        u[d] = gT(h, u[d], "end")),
        "max"in h && x > +h.max + lp ? (y = h.unitFactor || Fo.unitFactors[d] || 1,
        v = g > h.max && h.min !== h.max || p * y > -15 && p * y < 45 ? i + (r - i) * .1 : cp(g, h.max, p),
        v + s < l && (l = v + s)) : "min"in h && x < +h.min - lp && (y = h.unitFactor || Fo.unitFactors[d] || 1,
        v = g < h.min && h.min !== h.max || p * y > -45 && p * y < 15 ? i + (r - i) * .1 : cp(g, h.min, p),
        v + s < l && (l = v + s)),
        v > a && (a = v)),
        m > a && (a = m));
    return a > l && (a = l),
    a > r ? r : a < i ? i : a
}, hp = function() {
    ye = _x(),
    ye && (ap = ye.parseEase,
    dx = ye.utils.toArray,
    px = ye.utils.getUnit,
    gx = ye.core.getCache,
    xx = ye.utils.clamp,
    lh = ye.core.getStyleSaver,
    vx = ye.core.reverting || function() {}
    ,
    ah = ap("power3"),
    af = ah(.05),
    mx = ye.core.PropTween,
    ye.config({
        resistance: 100,
        unitFactors: {
            time: 1e3,
            totalTime: 1e3,
            progress: 1e3,
            totalProgress: 1e3
        }
    }),
    Fo = ye.config(),
    ye.registerPlugin(la),
    fx = 1)
}, uf = {
    version: "3.12.4",
    name: "inertia",
    register: function(t) {
        ye = t,
        hp()
    },
    init: function(t, e, r, i, s) {
        fx || hp();
        var o = Ol(t);
        if (e === "auto") {
            if (!o) {
                console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
                return
            }
            e = o.getAll()
        }
        this.styles = lh && typeof t.style == "object" && lh(t),
        this.target = t,
        this.tween = r,
        Eo = e;
        var a = t._gsap, l = a.get, u = e.duration, c = ei(u), f = e.preventOvershoot || c && u.overshoot === 0, d = Fl(e, "resistance", Fo.resistance), h = ia(u) ? u : vT(t, e, c && u.max || 10, c && u.min || .2, c && "overshoot"in u ? +u.overshoot : f ? 0 : 1), m, p, g, x, v, _, y, S, O;
        e = Eo,
        Eo = 0,
        O = Cx(t, e, l, d);
        for (m in e)
            wx[m] || (p = e[m],
            uh(p) && (p = p(i, t, s)),
            ia(p) ? v = p : ei(p) && !isNaN(p.velocity) ? v = +p.velocity : o && o.isTracking(m) ? v = o.get(m) : console.warn("ERROR: No velocity was defined for " + t + " property: " + m),
            _ = lf(v, h),
            S = 0,
            g = l(t, m),
            x = px(g),
            g = parseFloat(g),
            ei(p) && (y = g + _,
            "end"in p && (p = Sx(p, O && m in O ? O : y, p.max, p.min, m, e.radius, v)),
            "max"in p && +p.max < y ? f || p.preventOvershoot ? _ = p.max - g : S = p.max - g - _ : "min"in p && +p.min > y && (f || p.preventOvershoot ? _ = p.min - g : S = p.min - g - _)),
            this._props.push(m),
            this.styles && this.styles.save(m),
            this._pt = new mx(this._pt,t,m,g,0,pT,0,a.set(t, m, this)),
            this._pt.u = x || 0,
            this._pt.c1 = _,
            this._pt.c2 = S);
        return r.duration(h),
        dT
    },
    render: function(t, e) {
        var r = e._pt;
        if (t = ah(e.tween._time / e.tween._dur),
        t || !vx())
            for (; r; )
                r.set(r.t, r.p, mT(r.s + r.c1 * t + r.c2 * t * t) + r.u, r.d, t),
                r = r._next;
        else
            e.styles.revert()
    }
};
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(n) {
    return uf[n] = la[n]
});
_x() && ye.registerPlugin(uf);
function _T(n, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(n, r.key, r)
    }
}
function yT(n, t, e) {
    return t && _T(n.prototype, t),
    n
}
/*!
 * Observer 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ee, il, wr, Zn, Qn, Ms, Tx, bi, Io, Ax, En, Yr, Px, Mx = function() {
    return Ee || typeof window < "u" && (Ee = window.gsap) && Ee.registerPlugin && Ee
}, Ox = 1, xs = [], mt = [], xn = [], ko = Date.now, ch = function(t, e) {
    return e
}, bT = function() {
    var t = Io.core
      , e = t.bridge || {}
      , r = t._scrollers
      , i = t._proxies;
    r.push.apply(r, mt),
    i.push.apply(i, xn),
    mt = r,
    xn = i,
    ch = function(o, a) {
        return e[o](a)
    }
}, ri = function(t, e) {
    return ~xn.indexOf(t) && xn[xn.indexOf(t) + 1][e]
}, zo = function(t) {
    return !!~Ax.indexOf(t)
}, We = function(t, e, r, i, s) {
    return t.addEventListener(e, r, {
        passive: !i,
        capture: !!s
    })
}, Ve = function(t, e, r, i) {
    return t.removeEventListener(e, r, !!i)
}, Fa = "scrollLeft", Ea = "scrollTop", hh = function() {
    return En && En.isPressed || mt.cache++
}, El = function(t, e) {
    var r = function i(s) {
        if (s || s === 0) {
            Ox && (wr.history.scrollRestoration = "manual");
            var o = En && En.isPressed;
            s = i.v = Math.round(s) || (En && En.iOS ? 1 : 0),
            t(s),
            i.cacheID = mt.cache,
            o && ch("ss", s)
        } else
            (e || mt.cache !== i.cacheID || ch("ref")) && (i.cacheID = mt.cache,
            i.v = t());
        return i.v + i.offset
    };
    return r.offset = 0,
    t && r
}, Ke = {
    s: Fa,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: El(function(n) {
        return arguments.length ? wr.scrollTo(n, be.sc()) : wr.pageXOffset || Zn[Fa] || Qn[Fa] || Ms[Fa] || 0
    })
}, be = {
    s: Ea,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ke,
    sc: El(function(n) {
        return arguments.length ? wr.scrollTo(Ke.sc(), n) : wr.pageYOffset || Zn[Ea] || Qn[Ea] || Ms[Ea] || 0
    })
}, sr = function(t, e) {
    return (e && e._ctx && e._ctx.selector || Ee.utils.toArray)(t)[0] || (typeof t == "string" && Ee.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null)
}, si = function(t, e) {
    var r = e.s
      , i = e.sc;
    zo(t) && (t = Zn.scrollingElement || Qn);
    var s = mt.indexOf(t)
      , o = i === be.sc ? 1 : 2;
    !~s && (s = mt.push(t) - 1),
    mt[s + o] || We(t, "scroll", hh);
    var a = mt[s + o]
      , l = a || (mt[s + o] = El(ri(t, r), !0) || (zo(t) ? i : El(function(u) {
        return arguments.length ? t[r] = u : t[r]
    })));
    return l.target = t,
    a || (l.smooth = Ee.getProperty(t, "scrollBehavior") === "smooth"),
    l
}, fh = function(t, e, r) {
    var i = t
      , s = t
      , o = ko()
      , a = o
      , l = e || 50
      , u = Math.max(500, l * 3)
      , c = function(m, p) {
        var g = ko();
        p || g - o > l ? (s = i,
        i = m,
        a = o,
        o = g) : r ? i += m : i = s + (m - s) / (g - a) * (o - a)
    }
      , f = function() {
        s = i = r ? 0 : i,
        a = o = 0
    }
      , d = function(m) {
        var p = a
          , g = s
          , x = ko();
        return (m || m === 0) && m !== i && c(m),
        o === a || x - a > u ? 0 : (i + (r ? g : -g)) / ((r ? x : o) - p) * 1e3
    };
    return {
        update: c,
        reset: f,
        getVelocity: d
    }
}, io = function(t, e) {
    return e && !t._gsapAllow && t.preventDefault(),
    t.changedTouches ? t.changedTouches[0] : t
}, fp = function(t) {
    var e = Math.max.apply(Math, t)
      , r = Math.min.apply(Math, t);
    return Math.abs(e) >= Math.abs(r) ? e : r
}, Fx = function() {
    Io = Ee.core.globals().ScrollTrigger,
    Io && Io.core && bT()
}, Ex = function(t) {
    return Ee = t || Mx(),
    !il && Ee && typeof document < "u" && document.body && (wr = window,
    Zn = document,
    Qn = Zn.documentElement,
    Ms = Zn.body,
    Ax = [wr, Zn, Qn, Ms],
    Ee.utils.clamp,
    Px = Ee.core.context || function() {}
    ,
    bi = "onpointerenter"in Ms ? "pointer" : "mouse",
    Tx = oe.isTouch = wr.matchMedia && wr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in wr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Yr = oe.eventTypes = ("ontouchstart"in Qn ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Qn ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return Ox = 0
    }, 500),
    Fx(),
    il = 1),
    il
};
Ke.op = be;
mt.cache = 0;
var oe = function() {
    function n(e) {
        this.init(e)
    }
    var t = n.prototype;
    return t.init = function(r) {
        il || Ex(Ee) || console.warn("Please gsap.registerPlugin(Observer)"),
        Io || Fx();
        var i = r.tolerance
          , s = r.dragMinimum
          , o = r.type
          , a = r.target
          , l = r.lineHeight
          , u = r.debounce
          , c = r.preventDefault
          , f = r.onStop
          , d = r.onStopDelay
          , h = r.ignore
          , m = r.wheelSpeed
          , p = r.event
          , g = r.onDragStart
          , x = r.onDragEnd
          , v = r.onDrag
          , _ = r.onPress
          , y = r.onRelease
          , S = r.onRight
          , O = r.onLeft
          , w = r.onUp
          , P = r.onDown
          , T = r.onChangeX
          , M = r.onChangeY
          , B = r.onChange
          , U = r.onToggleX
          , z = r.onToggleY
          , L = r.onHover
          , V = r.onHoverEnd
          , G = r.onMove
          , k = r.ignoreCheck
          , X = r.isNormalizer
          , $ = r.onGestureStart
          , b = r.onGestureEnd
          , tt = r.onWheel
          , Y = r.onEnable
          , ht = r.onDisable
          , nt = r.onClick
          , Rt = r.scrollSpeed
          , wt = r.capture
          , It = r.allowClicks
          , ft = r.lockAxis
          , Nt = r.onLockAxis;
        this.target = a = sr(a) || Qn,
        this.vars = r,
        h && (h = Ee.utils.toArray(h)),
        i = i || 1e-9,
        s = s || 0,
        m = m || 1,
        Rt = Rt || 1,
        o = o || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(wr.getComputedStyle(Ms).lineHeight) || 22);
        var he, Dt, Ht, ot, lt, rt, Wt, F = this, Tt = 0, Ne = 0, er = si(a, Ke), Gt = si(a, be), te = er(), en = Gt(), rn = ~o.indexOf("touch") && !~o.indexOf("pointer") && Yr[0] === "pointerdown", ee = zo(a), Pt = a.ownerDocument || Zn, xe = [0, 0, 0], Ge = [0, 0, 0], yn = 0, pr = function() {
            return yn = ko()
        }, Mr = function(A, R) {
            return (F.event = A) && h && ~h.indexOf(A.target) || R && rn && A.pointerType !== "touch" || k && k(A, R)
        }, Ie = function() {
            F._vx.reset(),
            F._vy.reset(),
            Dt.pause(),
            f && f(F)
        }, Gr = function() {
            var A = F.deltaX = fp(xe)
              , R = F.deltaY = fp(Ge)
              , N = Math.abs(A) >= i
              , I = Math.abs(R) >= i;
            B && (N || I) && B(F, A, R, xe, Ge),
            N && (S && F.deltaX > 0 && S(F),
            O && F.deltaX < 0 && O(F),
            T && T(F),
            U && F.deltaX < 0 != Tt < 0 && U(F),
            Tt = F.deltaX,
            xe[0] = xe[1] = xe[2] = 0),
            I && (P && F.deltaY > 0 && P(F),
            w && F.deltaY < 0 && w(F),
            M && M(F),
            z && F.deltaY < 0 != Ne < 0 && z(F),
            Ne = F.deltaY,
            Ge[0] = Ge[1] = Ge[2] = 0),
            (ot || Ht) && (G && G(F),
            Ht && (v(F),
            Ht = !1),
            ot = !1),
            rt && !(rt = !1) && Nt && Nt(F),
            lt && (tt(F),
            lt = !1),
            he = 0
        }, bn = function(A, R, N) {
            xe[N] += A,
            Ge[N] += R,
            F._vx.update(A),
            F._vy.update(R),
            u ? he || (he = requestAnimationFrame(Gr)) : Gr()
        }, Vr = function(A, R) {
            ft && !Wt && (F.axis = Wt = Math.abs(A) > Math.abs(R) ? "x" : "y",
            rt = !0),
            Wt !== "y" && (xe[2] += A,
            F._vx.update(A, !0)),
            Wt !== "x" && (Ge[2] += R,
            F._vy.update(R, !0)),
            u ? he || (he = requestAnimationFrame(Gr)) : Gr()
        }, mr = function(A) {
            if (!Mr(A, 1)) {
                A = io(A, c);
                var R = A.clientX
                  , N = A.clientY
                  , I = R - F.x
                  , W = N - F.y
                  , D = F.isDragging;
                F.x = R,
                F.y = N,
                (D || Math.abs(F.startX - R) >= s || Math.abs(F.startY - N) >= s) && (v && (Ht = !0),
                D || (F.isDragging = !0),
                Vr(I, W),
                D || g && g(F))
            }
        }, nn = F.onPress = function(E) {
            Mr(E, 1) || E && E.button || (F.axis = Wt = null,
            Dt.pause(),
            F.isPressed = !0,
            E = io(E),
            Tt = Ne = 0,
            F.startX = F.x = E.clientX,
            F.startY = F.y = E.clientY,
            F._vx.reset(),
            F._vy.reset(),
            We(X ? a : Pt, Yr[1], mr, c, !0),
            F.deltaX = F.deltaY = 0,
            _ && _(F))
        }
        , rr = F.onRelease = function(E) {
            if (!Mr(E, 1)) {
                Ve(X ? a : Pt, Yr[1], mr, !0);
                var A = !isNaN(F.y - F.startY)
                  , R = F.isDragging
                  , N = R && (Math.abs(F.x - F.startX) > 3 || Math.abs(F.y - F.startY) > 3)
                  , I = io(E);
                !N && A && (F._vx.reset(),
                F._vy.reset(),
                c && It && Ee.delayedCall(.08, function() {
                    if (ko() - yn > 300 && !E.defaultPrevented) {
                        if (E.target.click)
                            E.target.click();
                        else if (Pt.createEvent) {
                            var W = Pt.createEvent("MouseEvents");
                            W.initMouseEvent("click", !0, !0, wr, 1, I.screenX, I.screenY, I.clientX, I.clientY, !1, !1, !1, !1, 0, null),
                            E.target.dispatchEvent(W)
                        }
                    }
                })),
                F.isDragging = F.isGesturing = F.isPressed = !1,
                f && R && !X && Dt.restart(!0),
                x && R && x(F),
                y && y(F, N)
            }
        }
        , ut = function(A) {
            return A.touches && A.touches.length > 1 && (F.isGesturing = !0) && $(A, F.isDragging)
        }, gr = function() {
            return (F.isGesturing = !1) || b(F)
        }, Yt = function(A) {
            if (!Mr(A)) {
                var R = er()
                  , N = Gt();
                bn((R - te) * Rt, (N - en) * Rt, 1),
                te = R,
                en = N,
                f && Dt.restart(!0)
            }
        }, ke = function(A) {
            if (!Mr(A)) {
                A = io(A, c),
                tt && (lt = !0);
                var R = (A.deltaMode === 1 ? l : A.deltaMode === 2 ? wr.innerHeight : 1) * m;
                bn(A.deltaX * R, A.deltaY * R, 0),
                f && !X && Dt.restart(!0)
            }
        }, nr = function(A) {
            if (!Mr(A)) {
                var R = A.clientX
                  , N = A.clientY
                  , I = R - F.x
                  , W = N - F.y;
                F.x = R,
                F.y = N,
                ot = !0,
                f && Dt.restart(!0),
                (I || W) && Vr(I, W)
            }
        }, sn = function(A) {
            F.event = A,
            L(F)
        }, K = function(A) {
            F.event = A,
            V(F)
        }, C = function(A) {
            return Mr(A) || io(A, c) && nt(F)
        };
        Dt = F._dc = Ee.delayedCall(d || .25, Ie).pause(),
        F.deltaX = F.deltaY = 0,
        F._vx = fh(0, 50, !0),
        F._vy = fh(0, 50, !0),
        F.scrollX = er,
        F.scrollY = Gt,
        F.isDragging = F.isGesturing = F.isPressed = !1,
        Px(this),
        F.enable = function(E) {
            return F.isEnabled || (We(ee ? Pt : a, "scroll", hh),
            o.indexOf("scroll") >= 0 && We(ee ? Pt : a, "scroll", Yt, c, wt),
            o.indexOf("wheel") >= 0 && We(a, "wheel", ke, c, wt),
            (o.indexOf("touch") >= 0 && Tx || o.indexOf("pointer") >= 0) && (We(a, Yr[0], nn, c, wt),
            We(Pt, Yr[2], rr),
            We(Pt, Yr[3], rr),
            It && We(a, "click", pr, !1, !0),
            nt && We(a, "click", C),
            $ && We(Pt, "gesturestart", ut),
            b && We(Pt, "gestureend", gr),
            L && We(a, bi + "enter", sn),
            V && We(a, bi + "leave", K),
            G && We(a, bi + "move", nr)),
            F.isEnabled = !0,
            E && E.type && nn(E),
            Y && Y(F)),
            F
        }
        ,
        F.disable = function() {
            F.isEnabled && (xs.filter(function(E) {
                return E !== F && zo(E.target)
            }).length || Ve(ee ? Pt : a, "scroll", hh),
            F.isPressed && (F._vx.reset(),
            F._vy.reset(),
            Ve(X ? a : Pt, Yr[1], mr, !0)),
            Ve(ee ? Pt : a, "scroll", Yt, wt),
            Ve(a, "wheel", ke, wt),
            Ve(a, Yr[0], nn, wt),
            Ve(Pt, Yr[2], rr),
            Ve(Pt, Yr[3], rr),
            Ve(a, "click", pr, !0),
            Ve(a, "click", C),
            Ve(Pt, "gesturestart", ut),
            Ve(Pt, "gestureend", gr),
            Ve(a, bi + "enter", sn),
            Ve(a, bi + "leave", K),
            Ve(a, bi + "move", nr),
            F.isEnabled = F.isPressed = F.isDragging = !1,
            ht && ht(F))
        }
        ,
        F.kill = F.revert = function() {
            F.disable();
            var E = xs.indexOf(F);
            E >= 0 && xs.splice(E, 1),
            En === F && (En = 0)
        }
        ,
        xs.push(F),
        X && zo(a) && (En = F),
        F.enable(p)
    }
    ,
    yT(n, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    n
}();
oe.version = "3.12.4";
oe.create = function(n) {
    return new oe(n)
}
;
oe.register = Ex;
oe.getAll = function() {
    return xs.slice()
}
;
oe.getById = function(n) {
    return xs.filter(function(t) {
        return t.vars.id === n
    })[0]
}
;
Mx() && Ee.registerPlugin(oe);
it.registerPlugin(Hs, uf, oe);
class ST extends qi {
    #e = null;
    #i = null;
    #n = null;
    #r = !1;
    #s = 0;
    #o = {
        value: 0
    };
    #t = !1;
    #a = !1;
    constructor() {
        super("ArchiveCanvas")
    }
    async mount() {
        this.$dragTarget = this.domAttr("dummy")[0],
        this.$header = this.domAttr("header")[0],
        this.$offset = {
            x: 0,
            y: 0
        },
        this.$sprites = [],
        this.$draggable = null,
        this.$pointerdownTimeline = null,
        this.$tweenProgressTo = it.quickTo(this.#o, "value", {
            duration: 1.8,
            snap: "value",
            ease: "power2.out",
            onUpdate: () => {
                document.body.querySelector('[data-dom="archive-canvas-loader-counter"]').textContent = `${this.#o.value}%`
            }
        }),
        this.$assets = JSON.parse(this.domAttr("items")[0].dataset.items).map(t => ({
            alias: `image_${t.id}`,
            src: t.filename.replace("https://a.storyblok.com", "https://s3.amazonaws.com/a.storyblok.com")
        })),
        document.body.querySelector('[data-dom="archive-canvas-loader"]').classList.add("is-visible"),
        Xt.emit(ue.SHOW_ARCHIVE_LOADER),
        this.setBreakpoint(),
        await this.createApp(),
        this.createBackdrop(),
        this.createPostprocess(),
        await this.loadAssets(),
        this.setAssetsPosition(),
        await this.animateInImages(),
        this.createMouse(),
        Xt.emit(ue.HIDE_ARCHIVE_LOADER),
        this.on("resize", window, this.onResize),
        this.$draggable = Hs.create(this.$dragTarget, {
            trigger: this.$app.canvas,
            inertia: !0,
            onDrag: this.updateImagesPositions.bind(this),
            onThrowUpdate: this.updateImagesPositions.bind(this)
        })[0]
    }
    unmount() {
        this.$draggable.kill(),
        Ai.unload(JSON.parse(this.domAttr("items")[0].dataset.items).map(t => t.filename.replace("https://a.storyblok.com", "https://s3.amazonaws.com/a.storyblok.com"))),
        this.off("resize", window, this.onResize),
        this.$app.destroy(!0, {
            children: !0
        })
    }
    async createApp() {
        this.$app = new Mg,
        await this.$app.init({
            resizeTo: this,
            antialias: !0,
            backgroundAlpha: 0
        }),
        this.appendChild(this.$app.canvas),
        Object.assign(this.$app.canvas.style, {
            gridRowStart: 1,
            gridColumnStart: 1,
            width: "100%",
            height: "100%"
        })
    }
    async loadImage(t, e) {
        Ai.add(t);
        const r = await Ai.load(t.alias)
          , i = new Us(r);
        i.anchor.set(.5),
        i.alpha = .3;
        const s = Math.min(400, this.$app.screen.width * .65)
          , o = this.setImageRealSize(i, s) * it.utils.random(.8, 1.2, .01);
        i.scale.set(o),
        i.position.set(this.$app.screen.width * .5, this.$app.screen.height * .5),
        i.eventMode = "static",
        i.cursor = "pointer",
        i.on("pointerdown", this.onCardPointerdown.bind(this)).on("pointerup", this.onCardPointerup.bind(this)),
        Object.assign(i, {
            userData: {
                originalScale: o,
                speed: o * .6
            }
        }),
        this.$container.addChild(i),
        this.$sprites.push(i);
        const a = new it.timeline({
            paused: !0,
            delay: .1 * this.$sprites.length
        });
        a.addLabel("start"),
        a.fromTo(i, {
            alpha: 0
        }, {
            alpha: 1,
            duration: 1
        }, "start");
        const l = it.utils.random([!0, !1])
          , u = this.$app.screen.width * .5
          , c = this.$app.screen.height * .5;
        return a.fromTo(i.position, {
            x: () => l ? u + it.utils.random([-40, 40]) : u,
            y: () => l ? c : c + it.utils.random([-40, 40])
        }, {
            x: () => u,
            y: () => c,
            duration: .55,
            ease: "power2.out"
        }, "start"),
        this.#s++,
        this.$tweenProgressTo(Math.floor(this.#s / this.$assets.length * 100)),
        a.play()
    }
    setAssetsPosition() {
        const t = Math.floor(Math.sqrt(this.$sprites.length))
          , e = it.utils.distribute({
            base: this.$app.screen.width * (this.#t ? -1 : -.25),
            amount: this.$app.screen.width * (this.#t ? 2 : 1.25),
            grid: [t, t],
            axis: "x"
        })
          , r = it.utils.distribute({
            base: this.$app.screen.height * (this.#t ? -.75 : -.25),
            amount: this.$app.screen.height * (this.#t ? 1.75 : 1.25),
            grid: [t, t],
            axis: "y"
        });
        let i;
        for (i = 0; i < this.$sprites.length; i++) {
            const s = this.$sprites[i]
              , o = it.utils.random(-this.$app.screen.width * .2, this.$app.screen.width * .2)
              , a = it.utils.random(-this.$app.screen.height * .2, this.$app.screen.height * .2)
              , l = e(i, s, this.$sprites) + o
              , u = r(i, s, this.$sprites) + a;
            Object.assign(s.userData, {
                originalPosition: {
                    x: l,
                    y: u
                },
                positionOnOpen: {
                    x: l,
                    y: u
                }
            })
        }
    }
    createPostprocess() {
        this.$container = new tr,
        this.$container.filterArea = new ce(this.$app.screen.width * -.25,this.$app.screen.height * -.25,this.$app.screen.width * 1.5,this.$app.screen.height * 1.5),
        this.$app.stage.addChild(this.$container),
        this.$bulgeFilter = new xw({
            radius: Math.max(this.$app.screen.width * 1.5, this.$app.screen.height * 1.5),
            strength: 0
        }),
        this.$container.filters = [this.$bulgeFilter]
    }
    createMouse() {
        this.$mouse = new oe({
            type: "pointer,touch",
            target: this.$app.canvas,
            onPress: () => {
                this.#r || it.to(this.$bulgeFilter, {
                    strength: .25,
                    duration: .4,
                    ease: "power2.out",
                    delay: .1,
                    overwrite: !0
                })
            }
            ,
            onRelease: () => {
                it.to(this.$bulgeFilter, {
                    strength: 0,
                    duration: .5,
                    ease: "power2.out",
                    overwrite: !0
                })
            }
            ,
            onMove: t => {
                this.$bulgeFilter.centerX = 1 - t.x / this.$app.screen.width,
                this.$bulgeFilter.centerY = 1 - t.y / this.$app.screen.height
            }
        })
    }
    async loadAssets() {
        const t = this.$assets.map( (e, r) => this.loadImage(e, r));
        await Promise.allSettled(t)
    }
    async animateInImages() {
        const t = new it.timeline({
            paused: !0
        });
        t.addLabel("start");
        let e;
        for (e = 0; e < this.$sprites.length; e++)
            t.to(this.$sprites[e].position, {
                x: this.$sprites[e].userData.originalPosition.x,
                y: this.$sprites[e].userData.originalPosition.y,
                duration: 1,
                ease: "power2.out"
            }, `start+=${.1 * e}`);
        return t.play()
    }
    createBackdrop() {
        this.$backdrop = new Al,
        this.$backdrop.rect(0, 0, 9999, 9999),
        this.$backdrop.fill(255),
        this.$backdrop.zIndex = -1,
        this.$backdrop.alpha = 0,
        this.$backdrop.eventMode = "static",
        this.$app.stage.addChild(this.$backdrop),
        this.$backdrop.on("pointerdown", this.onBackdropPointerdown.bind(this)).on("pointerup", this.onBackdropPointerup.bind(this))
    }
    offsetImages(t, e) {
        Object.assign(this.$offset, {
            x: t,
            y: e
        });
        for (let r = 0; r < this.$sprites.length; r++) {
            const i = this.$sprites[r]
              , s = it.utils.wrap(this.$app.screen.width * (this.#t ? -1 : -.5), this.$app.screen.width * (this.#t ? 2 : 1.5), i.userData.originalPosition.x + this.$offset.x * i.userData.speed)
              , o = it.utils.wrap(this.$app.screen.height * (this.#t ? -1.25 : -.5), this.$app.screen.height * (this.#t ? 2.25 : 1.5), i.userData.originalPosition.y + this.$offset.y * i.userData.speed);
            i.position.set(s, o)
        }
    }
    setImageRealSize(t, e) {
        return e / Math.max(t.width, t.height)
    }
    updateImagesPositions() {
        this.offsetImages(it.getProperty(this.$dragTarget, "x") * 3, it.getProperty(this.$dragTarget, "y") * 3)
    }
    onCardPointerdown(t) {
        this.#i = this.#e,
        this.#e = t.target.uid
    }
    onCardPointerup(t) {
        if (this.#r && this.#n === t.target.uid) {
            this.closeSlide(this.#n),
            this.$draggable.enable();
            return
        }
        if (this.#e !== t.target.uid)
            return console.warn(`selected slide (${this.#e}) is not the same as the current slide (${t.target.uid})`);
        this.$draggable.disable(),
        this.openSlide(t.target.uid, this.#r),
        this.#i && this.#i !== t.target.uid && this.closeSlide(this.#i)
    }
    onBackdropPointerdown() {
        this.#e = null
    }
    onBackdropPointerup() {
        this.#r && (this.closeSlide(this.#n),
        this.$draggable.enable())
    }
    openSlide(t, e=!1) {
        const r = this.$sprites.find(l => l.uid === t)
          , i = this.$sprites.filter(l => l.uid !== t)
          , s = {
            value: r.userData.originalScale
        }
          , o = {
            x: r.x,
            y: r.y
        };
        r.userData.positionOnOpen = {
            ...o
        },
        r.zIndex = 1,
        it.delayedCall(.1, () => {
            this.#n = r.uid,
            this.#r = !0,
            this.dataset.slideOpen = !0
        }
        );
        const a = new it.timeline;
        a.addLabel("start"),
        a.to(s, {
            value: s.value * (this.#t ? 1.5 : 2.3),
            duration: .4,
            overwrite: !0,
            onUpdate: () => {
                r.scale.set(s.value)
            }
        }, "start"),
        a.to(o, {
            x: this.$app.screen.width * .5,
            y: this.$app.screen.height * .5,
            duration: .4,
            overwrite: !0,
            onUpdate: () => {
                r.position.set(o.x, o.y)
            }
        }, "start"),
        a.to(i, {
            alpha: .3,
            duration: .35,
            overwrite: !0
        }, "start"),
        e && a.to(r, {
            alpha: 1,
            duration: .35,
            overwrite: !0
        }, "start")
    }
    closeSlide(t) {
        this.dataset.slideOpen = !1,
        this.#n = null,
        this.#r = !1;
        const e = this.$sprites.find(a => a.uid === t)
          , r = this.$sprites.filter(a => a.uid !== t)
          , i = {
            value: e.scale.x
        }
          , s = {
            x: e.position.x,
            y: e.position.y
        }
          , o = new it.timeline({
            paused: !0
        });
        return o.addLabel("start"),
        o.to(i, {
            value: e.userData.originalScale,
            duration: .4,
            overwrite: !0,
            onUpdate: () => {
                e.scale.set(i.value)
            }
            ,
            onComplete: () => {
                e.zIndex = 0
            }
        }, "start"),
        o.to(s, {
            x: e.userData.positionOnOpen.x,
            y: e.userData.positionOnOpen.y,
            duration: .4,
            overwrite: !0,
            onUpdate: () => {
                e.position.set(s.x, s.y)
            }
        }, "start"),
        o.to(r, {
            alpha: 1,
            duration: .35,
            overwrite: !0
        }, "start"),
        o.play()
    }
    onResize() {
        this.setBreakpoint(),
        this.$container.filterArea.x = this.$app.screen.width * (this.#t ? -.75 : -.25),
        this.$container.filterArea.y = this.$app.screen.height * (this.#t ? -.75 : -.25),
        this.$container.filterArea.width = this.$app.screen.width * (this.#t ? 2.5 : 1.5),
        this.$container.filterArea.height = this.$app.screen.height * (this.#t ? 2.5 : 1.5),
        this.$bulgeFilter.radius = Math.max(this.$app.screen.width * (this.#t ? 2.5 : 1.5), this.$app.screen.height * (this.#t ? 2.5 : 1.5))
    }
    setBreakpoint() {
        this.#t = window.innerWidth <= 767,
        this.#a = window.innerWidth >= 768
    }
}
customElements.define("c-archive-canvas", ST);
var wT = "1.1.14";
function Ix(n, t, e) {
    return Math.max(n, Math.min(t, e))
}
function CT(n, t, e) {
    return (1 - e) * n + e * t
}
function TT(n, t, e, r) {
    return CT(n, t, 1 - Math.exp(-e * r))
}
function AT(n, t) {
    return (n % t + t) % t
}
var PT = class {
    isRunning = !1;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(n) {
        if (!this.isRunning)
            return;
        let t = !1;
        if (this.duration && this.easing) {
            this.currentTime += n;
            const e = Ix(0, this.currentTime / this.duration, 1);
            t = e >= 1;
            const r = t ? 1 : this.easing(e);
            this.value = this.from + (this.to - this.from) * r
        } else
            this.lerp ? (this.value = TT(this.value, this.to, this.lerp * 60, n),
            Math.round(this.value) === this.to && (this.value = this.to,
            t = !0)) : (this.value = this.to,
            t = !0);
        t && this.stop(),
        this.onUpdate?.(this.value, t)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(n, t, {lerp: e, duration: r, easing: i, onStart: s, onUpdate: o}) {
        this.from = this.value = n,
        this.to = t,
        this.lerp = e,
        this.duration = r,
        this.easing = i,
        this.currentTime = 0,
        this.isRunning = !0,
        s?.(),
        this.onUpdate = o
    }
}
;
function MT(n, t) {
    let e;
    return function(...r) {
        let i = this;
        clearTimeout(e),
        e = setTimeout( () => {
            e = void 0,
            n.apply(i, r)
        }
        , t)
    }
}
var OT = class {
    constructor(n, t, {autoResize: e=!0, debounce: r=250}={}) {
        this.wrapper = n,
        this.content = t,
        e && (this.debouncedResize = MT(this.resize, r),
        this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
        this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
    }
    resize = () => {
        this.onWrapperResize(),
        this.onContentResize()
    }
    ;
    onWrapperResize = () => {
        this.wrapper instanceof Window ? (this.width = window.innerWidth,
        this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
        this.height = this.wrapper.clientHeight)
    }
    ;
    onContentResize = () => {
        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight,
        this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
        this.scrollWidth = this.wrapper.scrollWidth)
    }
    ;
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
  , kx = class {
    events = {};
    emit(n, ...t) {
        let e = this.events[n] || [];
        for (let r = 0, i = e.length; r < i; r++)
            e[r]?.(...t)
    }
    on(n, t) {
        return this.events[n]?.push(t) || (this.events[n] = [t]),
        () => {
            this.events[n] = this.events[n]?.filter(e => t !== e)
        }
    }
    off(n, t) {
        this.events[n] = this.events[n]?.filter(e => t !== e)
    }
    destroy() {
        this.events = {}
    }
}
  , dp = 100 / 6
  , Gn = {
    passive: !1
}
  , FT = class {
    constructor(n, t={
        wheelMultiplier: 1,
        touchMultiplier: 1
    }) {
        this.element = n,
        this.options = t,
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, Gn),
        this.element.addEventListener("touchstart", this.onTouchStart, Gn),
        this.element.addEventListener("touchmove", this.onTouchMove, Gn),
        this.element.addEventListener("touchend", this.onTouchEnd, Gn)
    }
    touchStart = {
        x: 0,
        y: 0
    };
    lastDelta = {
        x: 0,
        y: 0
    };
    window = {
        width: 0,
        height: 0
    };
    emitter = new kx;
    on(n, t) {
        return this.emitter.on(n, t)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, Gn),
        this.element.removeEventListener("touchstart", this.onTouchStart, Gn),
        this.element.removeEventListener("touchmove", this.onTouchMove, Gn),
        this.element.removeEventListener("touchend", this.onTouchEnd, Gn)
    }
    onTouchStart = n => {
        const {clientX: t, clientY: e} = n.targetTouches ? n.targetTouches[0] : n;
        this.touchStart.x = t,
        this.touchStart.y = e,
        this.lastDelta = {
            x: 0,
            y: 0
        },
        this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event: n
        })
    }
    ;
    onTouchMove = n => {
        const {clientX: t, clientY: e} = n.targetTouches ? n.targetTouches[0] : n
          , r = -(t - this.touchStart.x) * this.options.touchMultiplier
          , i = -(e - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = t,
        this.touchStart.y = e,
        this.lastDelta = {
            x: r,
            y: i
        },
        this.emitter.emit("scroll", {
            deltaX: r,
            deltaY: i,
            event: n
        })
    }
    ;
    onTouchEnd = n => {
        this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n
        })
    }
    ;
    onWheel = n => {
        let {deltaX: t, deltaY: e, deltaMode: r} = n;
        const i = r === 1 ? dp : r === 2 ? this.window.width : 1
          , s = r === 1 ? dp : r === 2 ? this.window.height : 1;
        t *= i,
        e *= s,
        t *= this.options.wheelMultiplier,
        e *= this.options.wheelMultiplier,
        this.emitter.emit("scroll", {
            deltaX: t,
            deltaY: e,
            event: n
        })
    }
    ;
    onWindowResize = () => {
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}
  , ET = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    isTouching;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new PT;
    emitter = new kx;
    dimensions;
    virtualScroll;
    constructor({wrapper: n=window, content: t=document.documentElement, eventsTarget: e=n, smoothWheel: r=!0, syncTouch: i=!1, syncTouchLerp: s=.075, touchInertiaMultiplier: o=35, duration: a, easing: l=y => Math.min(1, 1.001 - Math.pow(2, -10 * y)), lerp: u=.1, infinite: c=!1, orientation: f="vertical", gestureOrientation: d="vertical", touchMultiplier: h=1, wheelMultiplier: m=1, autoResize: p=!0, prevent: g, virtualScroll: x, overscroll: v=!0, __experimental__naiveDimensions: _=!1}={}) {
        window.lenisVersion = wT,
        (!n || n === document.documentElement || n === document.body) && (n = window),
        this.options = {
            wrapper: n,
            content: t,
            eventsTarget: e,
            smoothWheel: r,
            syncTouch: i,
            syncTouchLerp: s,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: d,
            orientation: f,
            touchMultiplier: h,
            wheelMultiplier: m,
            autoResize: p,
            prevent: g,
            virtualScroll: x,
            overscroll: v,
            __experimental__naiveDimensions: _
        },
        this.dimensions = new OT(n,t,{
            autoResize: p
        }),
        this.updateClassName(),
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll = new FT(e,{
            touchMultiplier: h,
            wheelMultiplier: m
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName()
    }
    on(n, t) {
        return this.emitter.on(n, t)
    }
    off(n, t) {
        return this.emitter.off(n, t)
    }
    setScroll(n) {
        this.isHorizontal ? this.rootElement.scrollLeft = n : this.rootElement.scrollTop = n
    }
    onPointerDown = n => {
        n.button === 1 && this.reset()
    }
    ;
    onVirtualScroll = n => {
        if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(n) === !1)
            return;
        const {deltaX: t, deltaY: e, event: r} = n;
        if (this.emitter.emit("virtual-scroll", {
            deltaX: t,
            deltaY: e,
            event: r
        }),
        r.ctrlKey || r.lenisStopPropagation)
            return;
        const i = r.type.includes("touch")
          , s = r.type.includes("wheel");
        if (this.isTouching = r.type === "touchstart" || r.type === "touchmove",
        this.options.syncTouch && i && r.type === "touchstart" && !this.isStopped && !this.isLocked) {
            this.reset();
            return
        }
        const a = t === 0 && e === 0
          , l = this.options.gestureOrientation === "vertical" && e === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
        if (a || l)
            return;
        let u = r.composedPath();
        u = u.slice(0, u.indexOf(this.rootElement));
        const c = this.options.prevent;
        if (u.find(g => g instanceof HTMLElement && (typeof c == "function" && c?.(g) || g.hasAttribute?.("data-lenis-prevent") || i && g.hasAttribute?.("data-lenis-prevent-touch") || s && g.hasAttribute?.("data-lenis-prevent-wheel"))))
            return;
        if (this.isStopped || this.isLocked) {
            r.preventDefault();
            return
        }
        if (!(this.options.syncTouch && i || this.options.smoothWheel && s)) {
            this.isScrolling = "native",
            this.animate.stop(),
            r.lenisStopPropagation = !0;
            return
        }
        let d = e;
        this.options.gestureOrientation === "both" ? d = Math.abs(e) > Math.abs(t) ? e : t : this.options.gestureOrientation === "horizontal" && (d = t),
        (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && e > 0 || this.animatedScroll === this.limit && e < 0)) && (r.lenisStopPropagation = !0),
        r.preventDefault();
        const h = i && this.options.syncTouch
          , p = i && r.type === "touchend" && Math.abs(d) > 5;
        p && (d = this.velocity * this.options.touchInertiaMultiplier),
        this.scrollTo(this.targetScroll + d, {
            programmatic: !1,
            ...h ? {
                lerp: p ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }
        })
    }
    ;
    resize() {
        this.dimensions.resize(),
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.emit()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    onNativeScroll = () => {
        if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout),
        this._resetVelocityTimeout = null),
        this._preventNextNativeScrollEvent) {
            this._preventNextNativeScrollEvent = !1;
            return
        }
        if (this.isScrolling === !1 || this.isScrolling === "native") {
            const n = this.animatedScroll;
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.lastVelocity = this.velocity,
            this.velocity = this.animatedScroll - n,
            this.direction = Math.sign(this.animatedScroll - n),
            this.isScrolling = "native",
            this.emit(),
            this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout( () => {
                this.lastVelocity = this.velocity,
                this.velocity = 0,
                this.isScrolling = !1,
                this.emit()
            }
            , 400))
        }
    }
    ;
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.lastVelocity = this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1,
        this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0,
        this.animate.stop(),
        this.reset())
    }
    raf(n) {
        const t = n - (this.time || n);
        this.time = n,
        this.animate.advance(t * .001)
    }
    scrollTo(n, {offset: t=0, immediate: e=!1, lock: r=!1, duration: i=this.options.duration, easing: s=this.options.easing, lerp: o=this.options.lerp, onStart: a, onComplete: l, force: u=!1, programmatic: c=!0, userData: f}={}) {
        if (!((this.isStopped || this.isLocked) && !u)) {
            if (typeof n == "string" && ["top", "left", "start"].includes(n))
                n = 0;
            else if (typeof n == "string" && ["bottom", "right", "end"].includes(n))
                n = this.limit;
            else {
                let d;
                if (typeof n == "string" ? d = document.querySelector(n) : n instanceof HTMLElement && n?.nodeType && (d = n),
                d) {
                    if (this.options.wrapper !== window) {
                        const m = this.rootElement.getBoundingClientRect();
                        t -= this.isHorizontal ? m.left : m.top
                    }
                    const h = d.getBoundingClientRect();
                    n = (this.isHorizontal ? h.left : h.top) + this.animatedScroll
                }
            }
            if (typeof n == "number") {
                if (n += t,
                n = Math.round(n),
                this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : n = Ix(0, n, this.limit),
                n === this.targetScroll) {
                    a?.(this),
                    l?.(this);
                    return
                }
                if (this.userData = f ?? {},
                e) {
                    this.animatedScroll = this.targetScroll = n,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    l?.(this),
                    this.userData = {};
                    return
                }
                c || (this.targetScroll = n),
                this.animate.fromTo(this.animatedScroll, n, {
                    duration: i,
                    easing: s,
                    lerp: o,
                    onStart: () => {
                        r && (this.isLocked = !0),
                        this.isScrolling = "smooth",
                        a?.(this)
                    }
                    ,
                    onUpdate: (d, h) => {
                        this.isScrolling = "smooth",
                        this.lastVelocity = this.velocity,
                        this.velocity = d - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = d,
                        this.setScroll(this.scroll),
                        c && (this.targetScroll = d),
                        h || this.emit(),
                        h && (this.reset(),
                        this.emit(),
                        l?.(this),
                        this.userData = {},
                        this.preventNextNativeScrollEvent())
                    }
                })
            }
        }
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0,
        requestAnimationFrame( () => {
            this._preventNextNativeScrollEvent = !1
        }
        )
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? AT(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this._isScrolling
    }
    set isScrolling(n) {
        this._isScrolling !== n && (this._isScrolling = n,
        this.updateClassName())
    }
    get isStopped() {
        return this._isStopped
    }
    set isStopped(n) {
        this._isStopped !== n && (this._isStopped = n,
        this.updateClassName())
    }
    get isLocked() {
        return this._isLocked
    }
    set isLocked(n) {
        this._isLocked !== n && (this._isLocked = n,
        this.updateClassName())
    }
    get isSmooth() {
        return this.isScrolling === "smooth"
    }
    get className() {
        let n = "lenis";
        return this.isStopped && (n += " lenis-stopped"),
        this.isLocked && (n += " lenis-locked"),
        this.isScrolling && (n += " lenis-scrolling"),
        this.isScrolling === "smooth" && (n += " lenis-smooth"),
        n
    }
    updateClassName() {
        this.cleanUpClassName(),
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
}
;
/*!
 * ScrollTrigger 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var j, hs, bt, jt, qr, Vt, zx, Il, sa, vs, sl, Ia, Le, Yl, dh, He, pp, mp, fs, Rx, Hu, Lx, Xe, Dx, Bx, Ux, Vn, ph, cf, Os, hf, kl, mh, Yu, ka = 1, je = Date.now, ju = je(), $r = 0, xo = 0, gp = function(t, e, r) {
    var i = _r(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return r["_" + e + "Clamp"] = i,
    i ? t.substr(6, t.length - 7) : t
}, xp = function(t, e) {
    return e && (!_r(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t
}, IT = function n() {
    return xo && requestAnimationFrame(n)
}, vp = function() {
    return Yl = 1
}, _p = function() {
    return Yl = 0
}, hn = function(t) {
    return t
}, vo = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, $x = function() {
    return typeof window < "u"
}, Nx = function() {
    return j || $x() && (j = window.gsap) && j.registerPlugin && j
}, Wi = function(t) {
    return !!~zx.indexOf(t)
}, Gx = function(t) {
    return (t === "Height" ? hf : bt["inner" + t]) || qr["client" + t] || Vt["client" + t]
}, Vx = function(t) {
    return ri(t, "getBoundingClientRect") || (Wi(t) ? function() {
        return hl.width = bt.innerWidth,
        hl.height = hf,
        hl
    }
    : function() {
        return Mn(t)
    }
    )
}, kT = function(t, e, r) {
    var i = r.d
      , s = r.d2
      , o = r.a;
    return (o = ri(t, "getBoundingClientRect")) ? function() {
        return o()[i]
    }
    : function() {
        return (e ? Gx(s) : t["client" + s]) || 0
    }
}, zT = function(t, e) {
    return !e || ~xn.indexOf(t) ? Vx(t) : function() {
        return hl
    }
}, mn = function(t, e) {
    var r = e.s
      , i = e.d2
      , s = e.d
      , o = e.a;
    return Math.max(0, (r = "scroll" + i) && (o = ri(t, r)) ? o() - Vx(t)()[s] : Wi(t) ? (qr[r] || Vt[r]) - Gx(i) : t[r] - t["offset" + i])
}, za = function(t, e) {
    for (var r = 0; r < fs.length; r += 3)
        (!e || ~e.indexOf(fs[r + 1])) && t(fs[r], fs[r + 1], fs[r + 2])
}, _r = function(t) {
    return typeof t == "string"
}, Ze = function(t) {
    return typeof t == "function"
}, ol = function(t) {
    return typeof t == "number"
}, Si = function(t) {
    return typeof t == "object"
}, so = function(t, e, r) {
    return t && t.progress(e ? 0 : 1) && r && t.pause()
}, qu = function(t, e) {
    if (t.enabled) {
        var r = t._ctx ? t._ctx.add(function() {
            return e(t)
        }) : e(t);
        r && r.totalTime && (t.callbackAnimation = r)
    }
}, rs = Math.abs, Wx = "left", Xx = "top", ff = "right", df = "bottom", Di = "width", Bi = "height", Ro = "Right", Lo = "Left", Do = "Top", Bo = "Bottom", de = "padding", zr = "margin", Gs = "Width", pf = "Height", we = "px", Rr = function(t) {
    return bt.getComputedStyle(t)
}, RT = function(t) {
    var e = Rr(t).position;
    t.style.position = e === "absolute" || e === "fixed" ? e : "relative"
}, yp = function(t, e) {
    for (var r in e)
        r in t || (t[r] = e[r]);
    return t
}, Mn = function(t, e) {
    var r = e && Rr(t)[dh] !== "matrix(1, 0, 0, 1, 0, 0)" && j.to(t, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = t.getBoundingClientRect();
    return r && r.progress(0).kill(),
    i
}, gh = function(t, e) {
    var r = e.d2;
    return t["offset" + r] || t["client" + r] || 0
}, Hx = function(t) {
    var e = [], r = t.labels, i = t.duration(), s;
    for (s in r)
        e.push(r[s] / i);
    return e
}, LT = function(t) {
    return function(e) {
        return j.utils.snap(Hx(t), e)
    }
}, mf = function(t) {
    var e = j.utils.snap(t)
      , r = Array.isArray(t) && t.slice(0).sort(function(i, s) {
        return i - s
    });
    return r ? function(i, s, o) {
        o === void 0 && (o = .001);
        var a;
        if (!s)
            return e(i);
        if (s > 0) {
            for (i -= o,
            a = 0; a < r.length; a++)
                if (r[a] >= i)
                    return r[a];
            return r[a - 1]
        } else
            for (a = r.length,
            i += o; a--; )
                if (r[a] <= i)
                    return r[a];
        return r[0]
    }
    : function(i, s, o) {
        o === void 0 && (o = .001);
        var a = e(i);
        return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : e(s < 0 ? i - t : i + t)
    }
}, DT = function(t) {
    return function(e, r) {
        return mf(Hx(t))(e, r.direction)
    }
}, Ra = function(t, e, r, i) {
    return r.split(",").forEach(function(s) {
        return t(e, s, i)
    })
}, Te = function(t, e, r, i, s) {
    return t.addEventListener(e, r, {
        passive: !i,
        capture: !!s
    })
}, Ce = function(t, e, r, i) {
    return t.removeEventListener(e, r, !!i)
}, La = function(t, e, r) {
    r = r && r.wheelHandler,
    r && (t(e, "wheel", r),
    t(e, "touchmove", r))
}, bp = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Da = {
    toggleActions: "play",
    anticipatePin: 0
}, zl = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, al = function(t, e) {
    if (_r(t)) {
        var r = t.indexOf("=")
          , i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (i *= e / 100),
        t = t.substr(0, r - 1)),
        t = i + (t in zl ? zl[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
    }
    return t
}, Ba = function(t, e, r, i, s, o, a, l) {
    var u = s.startColor
      , c = s.endColor
      , f = s.fontSize
      , d = s.indent
      , h = s.fontWeight
      , m = jt.createElement("div")
      , p = Wi(r) || ri(r, "pinType") === "fixed"
      , g = t.indexOf("scroller") !== -1
      , x = p ? Vt : r
      , v = t.indexOf("start") !== -1
      , _ = v ? u : c
      , y = "border-color:" + _ + ";font-size:" + f + ";color:" + _ + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((g || l) && p ? "fixed;" : "absolute;"),
    (g || l || !p) && (y += (i === be ? ff : df) + ":" + (o + parseFloat(d)) + "px;"),
    a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    m._isStart = v,
    m.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
    m.style.cssText = y,
    m.innerText = e || e === 0 ? t + "-" + e : t,
    x.children[0] ? x.insertBefore(m, x.children[0]) : x.appendChild(m),
    m._offset = m["offset" + i.op.d2],
    ll(m, 0, i, v),
    m
}, ll = function(t, e, r, i) {
    var s = {
        display: "block"
    }
      , o = r[i ? "os2" : "p2"]
      , a = r[i ? "p2" : "os2"];
    t._isFlipped = i,
    s[r.a + "Percent"] = i ? -100 : 0,
    s[r.a] = i ? "1px" : 0,
    s["border" + o + Gs] = 1,
    s["border" + a + Gs] = 0,
    s[r.p] = e + "px",
    j.set(t, s)
}, pt = [], xh = {}, oa, Sp = function() {
    return je() - $r > 34 && (oa || (oa = requestAnimationFrame(zn)))
}, ns = function() {
    (!Xe || !Xe.isPressed || Xe.startX > Vt.clientWidth) && (mt.cache++,
    Xe ? oa || (oa = requestAnimationFrame(zn)) : zn(),
    $r || Hi("scrollStart"),
    $r = je())
}, Ku = function() {
    Ux = bt.innerWidth,
    Bx = bt.innerHeight
}, _o = function() {
    mt.cache++,
    !Le && !Lx && !jt.fullscreenElement && !jt.webkitFullscreenElement && (!Dx || Ux !== bt.innerWidth || Math.abs(bt.innerHeight - Bx) > bt.innerHeight * .25) && Il.restart(!0)
}, Xi = {}, BT = [], Yx = function n() {
    return Ce(gt, "scrollEnd", n) || Mi(!0)
}, Hi = function(t) {
    return Xi[t] && Xi[t].map(function(e) {
        return e()
    }) || BT
}, vr = [], jx = function(t) {
    for (var e = 0; e < vr.length; e += 5)
        (!t || vr[e + 4] && vr[e + 4].query === t) && (vr[e].style.cssText = vr[e + 1],
        vr[e].getBBox && vr[e].setAttribute("transform", vr[e + 2] || ""),
        vr[e + 3].uncache = 1)
}, gf = function(t, e) {
    var r;
    for (He = 0; He < pt.length; He++)
        r = pt[He],
        r && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
    kl = !0,
    e && jx(e),
    e || Hi("revert")
}, qx = function(t, e) {
    mt.cache++,
    (e || !Ye) && mt.forEach(function(r) {
        return Ze(r) && r.cacheID++ && (r.rec = 0)
    }),
    _r(t) && (bt.history.scrollRestoration = cf = t)
}, Ye, Ui = 0, wp, UT = function() {
    if (wp !== Ui) {
        var t = wp = Ui;
        requestAnimationFrame(function() {
            return t === Ui && Mi(!0)
        })
    }
}, Kx = function() {
    Vt.appendChild(Os),
    hf = !Xe && Os.offsetHeight || bt.innerHeight,
    Vt.removeChild(Os)
}, Cp = function(t) {
    return sa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
        return e.style.display = t ? "none" : "block"
    })
}, Mi = function(t, e) {
    if ($r && !t && !kl) {
        Te(gt, "scrollEnd", Yx);
        return
    }
    Kx(),
    Ye = gt.isRefreshing = !0,
    mt.forEach(function(i) {
        return Ze(i) && ++i.cacheID && (i.rec = i())
    });
    var r = Hi("refreshInit");
    Rx && gt.sort(),
    e || gf(),
    mt.forEach(function(i) {
        Ze(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    pt.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    kl = !1,
    pt.forEach(function(i) {
        if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , o = i.pin[s];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[s] - o),
            i.refresh()
        }
    }),
    mh = 1,
    Cp(!0),
    pt.forEach(function(i) {
        var s = mn(i.scroller, i._dir)
          , o = i.vars.end === "max" || i._endClamp && i.end > s
          , a = i._startClamp && i.start >= s;
        (o || a) && i.setPositions(a ? s - 1 : i.start, o ? Math.max(a ? s : i.start + 1, s) : i.end, !0)
    }),
    Cp(!1),
    mh = 0,
    r.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    mt.forEach(function(i) {
        Ze(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    qx(cf, 1),
    Il.pause(),
    Ui++,
    Ye = 2,
    zn(2),
    pt.forEach(function(i) {
        return Ze(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    Ye = gt.isRefreshing = !1,
    Hi("refresh")
}, vh = 0, ul = 1, Uo, zn = function(t) {
    if (t === 2 || !Ye && !kl) {
        gt.isUpdating = !0,
        Uo && Uo.update(0);
        var e = pt.length
          , r = je()
          , i = r - ju >= 50
          , s = e && pt[0].scroll();
        if (ul = vh > s ? -1 : 1,
        Ye || (vh = s),
        i && ($r && !Yl && r - $r > 200 && ($r = 0,
        Hi("scrollEnd")),
        sl = ju,
        ju = r),
        ul < 0) {
            for (He = e; He-- > 0; )
                pt[He] && pt[He].update(0, i);
            ul = 1
        } else
            for (He = 0; He < e; He++)
                pt[He] && pt[He].update(0, i);
        gt.isUpdating = !1
    }
    oa = 0
}, _h = [Wx, Xx, df, ff, zr + Bo, zr + Ro, zr + Do, zr + Lo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], cl = _h.concat([Di, Bi, "boxSizing", "max" + Gs, "max" + pf, "position", zr, de, de + Do, de + Ro, de + Bo, de + Lo]), $T = function(t, e, r) {
    Fs(r);
    var i = t._gsap;
    if (i.spacerIsNative)
        Fs(i.spacerState);
    else if (t._gsap.swappedIn) {
        var s = e.parentNode;
        s && (s.insertBefore(t, e),
        s.removeChild(e))
    }
    t._gsap.swappedIn = !1
}, Zu = function(t, e, r, i) {
    if (!t._gsap.swappedIn) {
        for (var s = _h.length, o = e.style, a = t.style, l; s--; )
            l = _h[s],
            o[l] = r[l];
        o.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (o.display = "inline-block"),
        a[df] = a[ff] = "auto",
        o.flexBasis = r.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[Di] = gh(t, Ke) + we,
        o[Bi] = gh(t, be) + we,
        o[de] = a[zr] = a[Xx] = a[Wx] = "0",
        Fs(i),
        a[Di] = a["max" + Gs] = r[Di],
        a[Bi] = a["max" + pf] = r[Bi],
        a[de] = r[de],
        t.parentNode !== e && (t.parentNode.insertBefore(e, t),
        e.appendChild(t)),
        t._gsap.swappedIn = !0
    }
}, NT = /([A-Z])/g, Fs = function(t) {
    if (t) {
        var e = t.t.style, r = t.length, i = 0, s, o;
        for ((t.t._gsap || j.core.getCache(t.t)).uncache = 1; i < r; i += 2)
            o = t[i + 1],
            s = t[i],
            o ? e[s] = o : e[s] && e.removeProperty(s.replace(NT, "-$1").toLowerCase())
    }
}, Ua = function(t) {
    for (var e = cl.length, r = t.style, i = [], s = 0; s < e; s++)
        i.push(cl[s], r[cl[s]]);
    return i.t = t,
    i
}, GT = function(t, e, r) {
    for (var i = [], s = t.length, o = r ? 8 : 0, a; o < s; o += 2)
        a = t[o],
        i.push(a, a in e ? e[a] : t[o + 1]);
    return i.t = t.t,
    i
}, hl = {
    left: 0,
    top: 0
}, Tp = function(t, e, r, i, s, o, a, l, u, c, f, d, h, m) {
    Ze(t) && (t = t(l)),
    _r(t) && t.substr(0, 3) === "max" && (t = d + (t.charAt(4) === "=" ? al("0" + t.substr(3), r) : 0));
    var p = h ? h.time() : 0, g, x, v;
    if (h && h.seek(0),
    isNaN(t) || (t = +t),
    ol(t))
        h && (t = j.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, d, t)),
        a && ll(a, r, i, !0);
    else {
        Ze(e) && (e = e(l));
        var _ = (t || "0").split(" "), y, S, O, w;
        v = sr(e, l) || Vt,
        y = Mn(v) || {},
        (!y || !y.left && !y.top) && Rr(v).display === "none" && (w = v.style.display,
        v.style.display = "block",
        y = Mn(v),
        w ? v.style.display = w : v.style.removeProperty("display")),
        S = al(_[0], y[i.d]),
        O = al(_[1] || "0", r),
        t = y[i.p] - u[i.p] - c + S + s - O,
        a && ll(a, O, i, r - O < 20 || a._isStart && O > 20),
        r -= r - O
    }
    if (m && (l[m] = t || -.001,
    t < 0 && (t = 0)),
    o) {
        var P = t + r
          , T = o._isStart;
        g = "scroll" + i.d2,
        ll(o, P, i, T && P > 20 || !T && (f ? Math.max(Vt[g], qr[g]) : o.parentNode[g]) <= P + 1),
        f && (u = Mn(a),
        f && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + we))
    }
    return h && v && (g = Mn(v),
    h.seek(d),
    x = Mn(v),
    h._caScrollDist = g[i.p] - x[i.p],
    t = t / h._caScrollDist * d),
    h && h.seek(p),
    h ? t : Math.round(t)
}, VT = /(webkit|moz|length|cssText|inset)/i, Ap = function(t, e, r, i) {
    if (t.parentNode !== e) {
        var s = t.style, o, a;
        if (e === Vt) {
            t._stOrig = s.cssText,
            a = Rr(t);
            for (o in a)
                !+o && !VT.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
            s.top = r,
            s.left = i
        } else
            s.cssText = t._stOrig;
        j.core.getCache(t).uncache = 1,
        e.appendChild(t)
    }
}, Zx = function(t, e, r) {
    var i = e
      , s = i;
    return function(o) {
        var a = Math.round(t());
        return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && (o = a,
        r && r()),
        s = i,
        i = o,
        o
    }
}, $a = function(t, e, r) {
    var i = {};
    i[e.p] = "+=" + r,
    j.set(t, i)
}, Pp = function(t, e) {
    var r = si(t, e)
      , i = "_scroll" + e.p2
      , s = function o(a, l, u, c, f) {
        var d = o.tween
          , h = l.onComplete
          , m = {};
        u = u || r();
        var p = Zx(r, u, function() {
            d.kill(),
            o.tween = 0
        });
        return f = c && f || 0,
        c = c || a - u,
        d && d.kill(),
        l[i] = a,
        l.modifiers = m,
        m[i] = function() {
            return p(u + c * d.ratio + f * d.ratio * d.ratio)
        }
        ,
        l.onUpdate = function() {
            mt.cache++,
            o.tween && zn()
        }
        ,
        l.onComplete = function() {
            o.tween = 0,
            h && h.call(d)
        }
        ,
        d = o.tween = j.to(t, l),
        d
    };
    return t[i] = r,
    r.wheelHandler = function() {
        return s.tween && s.tween.kill() && (s.tween = 0)
    }
    ,
    Te(t, "wheel", r.wheelHandler),
    gt.isTouch && Te(t, "touchmove", r.wheelHandler),
    s
}, gt = function() {
    function n(e, r) {
        hs || n.register(j) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        ph(this),
        this.init(e, r)
    }
    var t = n.prototype;
    return t.init = function(r, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !xo) {
            this.update = this.refresh = this.kill = hn;
            return
        }
        r = yp(_r(r) || ol(r) || r.nodeType ? {
            trigger: r
        } : r, Da);
        var s = r, o = s.onUpdate, a = s.toggleClass, l = s.id, u = s.onToggle, c = s.onRefresh, f = s.scrub, d = s.trigger, h = s.pin, m = s.pinSpacing, p = s.invalidateOnRefresh, g = s.anticipatePin, x = s.onScrubComplete, v = s.onSnapComplete, _ = s.once, y = s.snap, S = s.pinReparent, O = s.pinSpacer, w = s.containerAnimation, P = s.fastScrollEnd, T = s.preventOverlaps, M = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Ke : be, B = !f && f !== 0, U = sr(r.scroller || bt), z = j.core.getCache(U), L = Wi(U), V = ("pinType"in r ? r.pinType : ri(U, "pinType") || L && "fixed") === "fixed", G = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], k = B && r.toggleActions.split(" "), X = "markers"in r ? r.markers : Da.markers, $ = L ? 0 : parseFloat(Rr(U)["border" + M.p2 + Gs]) || 0, b = this, tt = r.onRefreshInit && function() {
            return r.onRefreshInit(b)
        }
        , Y = kT(U, L, M), ht = zT(U, L), nt = 0, Rt = 0, wt = 0, It = si(U, M), ft, Nt, he, Dt, Ht, ot, lt, rt, Wt, F, Tt, Ne, er, Gt, te, en, rn, ee, Pt, xe, Ge, yn, pr, Mr, Ie, Gr, bn, Vr, mr, nn, rr, ut, gr, Yt, ke, nr, sn, K, C;
        if (b._startClamp = b._endClamp = !1,
        b._dir = M,
        g *= 45,
        b.scroller = U,
        b.scroll = w ? w.time.bind(w) : It,
        Dt = It(),
        b.vars = r,
        i = i || r.animation,
        "refreshPriority"in r && (Rx = 1,
        r.refreshPriority === -9999 && (Uo = b)),
        z.tweenScroll = z.tweenScroll || {
            top: Pp(U, be),
            left: Pp(U, Ke)
        },
        b.tweenTo = ft = z.tweenScroll[M.p],
        b.scrubDuration = function(I) {
            gr = ol(I) && I,
            gr ? ut ? ut.duration(I) : ut = j.to(i, {
                ease: "expo",
                totalProgress: "+=0",
                duration: gr,
                paused: !0,
                onComplete: function() {
                    return x && x(b)
                }
            }) : (ut && ut.progress(1).kill(),
            ut = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted && !b.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        b.animation = i.pause(),
        i.scrollTrigger = b,
        b.scrubDuration(f),
        nn = 0,
        l || (l = i.vars.id)),
        y && ((!Si(y) || y.push) && (y = {
            snapTo: y
        }),
        "scrollBehavior"in Vt.style && j.set(L ? [Vt, qr] : U, {
            scrollBehavior: "auto"
        }),
        mt.forEach(function(I) {
            return Ze(I) && I.target === (L ? jt.scrollingElement || qr : U) && (I.smooth = !1)
        }),
        he = Ze(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? LT(i) : y.snapTo === "labelsDirectional" ? DT(i) : y.directional !== !1 ? function(I, W) {
            return mf(y.snapTo)(I, je() - Rt < 500 ? 0 : W.direction)
        }
        : j.utils.snap(y.snapTo),
        Yt = y.duration || {
            min: .1,
            max: 2
        },
        Yt = Si(Yt) ? vs(Yt.min, Yt.max) : vs(Yt, Yt),
        ke = j.delayedCall(y.delay || gr / 2 || .1, function() {
            var I = It()
              , W = je() - Rt < 500
              , D = ft.tween;
            if ((W || Math.abs(b.getVelocity()) < 10) && !D && !Yl && nt !== I) {
                var H = (I - ot) / Gt
                  , et = i && !B ? i.totalProgress() : H
                  , q = W ? 0 : (et - rr) / (je() - sl) * 1e3 || 0
                  , at = j.utils.clamp(-H, 1 - H, rs(q / 2) * q / .185)
                  , Mt = H + (y.inertia === !1 ? 0 : at)
                  , Lt = vs(0, 1, he(Mt, b))
                  , vt = Math.round(ot + Lt * Gt)
                  , _t = y
                  , kt = _t.onStart
                  , st = _t.onInterrupt
                  , Oe = _t.onComplete;
                if (I <= lt && I >= ot && vt !== I) {
                    if (D && !D._initted && D.data <= rs(vt - I))
                        return;
                    y.inertia === !1 && (at = Lt - H),
                    ft(vt, {
                        duration: Yt(rs(Math.max(rs(Mt - et), rs(Lt - et)) * .185 / q / .05 || 0)),
                        ease: y.ease || "power3",
                        data: rs(vt - I),
                        onInterrupt: function() {
                            return ke.restart(!0) && st && st(b)
                        },
                        onComplete: function() {
                            b.update(),
                            nt = It(),
                            ut && i && i.progress(Lt),
                            nn = rr = i && !B ? i.totalProgress() : b.progress,
                            v && v(b),
                            Oe && Oe(b)
                        }
                    }, I, at * Gt, vt - I - at * Gt),
                    kt && kt(b, ft.tween)
                }
            } else
                b.isActive && nt !== I && ke.restart(!0)
        }).pause()),
        l && (xh[l] = b),
        d = b.trigger = sr(d || h !== !0 && h),
        C = d && d._gsap && d._gsap.stRevert,
        C && (C = C(b)),
        h = h === !0 ? d : sr(h),
        _r(a) && (a = {
            targets: d,
            className: a
        }),
        h && (m === !1 || m === zr || (m = !m && h.parentNode && h.parentNode.style && Rr(h.parentNode).display === "flex" ? !1 : de),
        b.pin = h,
        Nt = j.core.getCache(h),
        Nt.spacer ? te = Nt.pinState : (O && (O = sr(O),
        O && !O.nodeType && (O = O.current || O.nativeElement),
        Nt.spacerIsNative = !!O,
        O && (Nt.spacerState = Ua(O))),
        Nt.spacer = ee = O || jt.createElement("div"),
        ee.classList.add("pin-spacer"),
        l && ee.classList.add("pin-spacer-" + l),
        Nt.pinState = te = Ua(h)),
        r.force3D !== !1 && j.set(h, {
            force3D: !0
        }),
        b.spacer = ee = Nt.spacer,
        mr = Rr(h),
        Mr = mr[m + M.os2],
        xe = j.getProperty(h),
        Ge = j.quickSetter(h, M.a, we),
        Zu(h, ee, mr),
        rn = Ua(h)),
        X) {
            Ne = Si(X) ? yp(X, bp) : bp,
            F = Ba("scroller-start", l, U, M, Ne, 0),
            Tt = Ba("scroller-end", l, U, M, Ne, 0, F),
            Pt = F["offset" + M.op.d2];
            var E = sr(ri(U, "content") || U);
            rt = this.markerStart = Ba("start", l, E, M, Ne, Pt, 0, w),
            Wt = this.markerEnd = Ba("end", l, E, M, Ne, Pt, 0, w),
            w && (K = j.quickSetter([rt, Wt], M.a, we)),
            !V && !(xn.length && ri(U, "fixedMarkers") === !0) && (RT(L ? Vt : U),
            j.set([F, Tt], {
                force3D: !0
            }),
            Gr = j.quickSetter(F, M.a, we),
            Vr = j.quickSetter(Tt, M.a, we))
        }
        if (w) {
            var A = w.vars.onUpdate
              , R = w.vars.onUpdateParams;
            w.eventCallback("onUpdate", function() {
                b.update(0, 0, 1),
                A && A.apply(w, R || [])
            })
        }
        if (b.previous = function() {
            return pt[pt.indexOf(b) - 1]
        }
        ,
        b.next = function() {
            return pt[pt.indexOf(b) + 1]
        }
        ,
        b.revert = function(I, W) {
            if (!W)
                return b.kill(!0);
            var D = I !== !1 || !b.enabled
              , H = Le;
            D !== b.isReverted && (D && (nr = Math.max(It(), b.scroll.rec || 0),
            wt = b.progress,
            sn = i && i.progress()),
            rt && [rt, Wt, F, Tt].forEach(function(et) {
                return et.style.display = D ? "none" : "block"
            }),
            D && (Le = b,
            b.update(D)),
            h && (!S || !b.isActive) && (D ? $T(h, ee, te) : Zu(h, ee, Rr(h), Ie)),
            D || b.update(D),
            Le = H,
            b.isReverted = D)
        }
        ,
        b.refresh = function(I, W, D, H) {
            if (!((Le || !b.enabled) && !W)) {
                if (h && I && $r) {
                    Te(n, "scrollEnd", Yx);
                    return
                }
                !Ye && tt && tt(b),
                Le = b,
                ft.tween && !D && (ft.tween.kill(),
                ft.tween = 0),
                ut && ut.pause(),
                p && i && i.revert({
                    kill: !1
                }).invalidate(),
                b.isReverted || b.revert(!0, !0),
                b._subPinOffset = !1;
                var et = Y(), q = ht(), at = w ? w.duration() : mn(U, M), Mt = Gt <= .01, Lt = 0, vt = H || 0, _t = Si(D) ? D.end : r.end, kt = r.endTrigger || d, st = Si(D) ? D.start : r.start || (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"), Oe = b.pinnedContainer = r.pinnedContainer && sr(r.pinnedContainer, b), re = d && Math.max(0, pt.indexOf(b)) || 0, ir = re, Fe, ze, li, ua, Re, ve, on, jl, xf, Ys, an, js, ca;
                for (X && Si(D) && (js = j.getProperty(F, M.p),
                ca = j.getProperty(Tt, M.p)); ir--; )
                    ve = pt[ir],
                    ve.end || ve.refresh(0, 1) || (Le = b),
                    on = ve.pin,
                    on && (on === d || on === h || on === Oe) && !ve.isReverted && (Ys || (Ys = []),
                    Ys.unshift(ve),
                    ve.revert(!0, !0)),
                    ve !== pt[ir] && (re--,
                    ir--);
                for (Ze(st) && (st = st(b)),
                st = gp(st, "start", b),
                ot = Tp(st, d, et, M, It(), rt, F, b, q, $, V, at, w, b._startClamp && "_startClamp") || (h ? -.001 : 0),
                Ze(_t) && (_t = _t(b)),
                _r(_t) && !_t.indexOf("+=") && (~_t.indexOf(" ") ? _t = (_r(st) ? st.split(" ")[0] : "") + _t : (Lt = al(_t.substr(2), et),
                _t = _r(st) ? st : (w ? j.utils.mapRange(0, w.duration(), w.scrollTrigger.start, w.scrollTrigger.end, ot) : ot) + Lt,
                kt = d)),
                _t = gp(_t, "end", b),
                lt = Math.max(ot, Tp(_t || (kt ? "100% 0" : at), kt, et, M, It() + Lt, Wt, Tt, b, q, $, V, at, w, b._endClamp && "_endClamp")) || -.001,
                Lt = 0,
                ir = re; ir--; )
                    ve = pt[ir],
                    on = ve.pin,
                    on && ve.start - ve._pinPush <= ot && !w && ve.end > 0 && (Fe = ve.end - (b._startClamp ? Math.max(0, ve.start) : ve.start),
                    (on === d && ve.start - ve._pinPush < ot || on === Oe) && isNaN(st) && (Lt += Fe * (1 - ve.progress)),
                    on === h && (vt += Fe));
                if (ot += Lt,
                lt += Lt,
                b._startClamp && (b._startClamp += Lt),
                b._endClamp && !Ye && (b._endClamp = lt || -.001,
                lt = Math.min(lt, mn(U, M))),
                Gt = lt - ot || (ot -= .01) && .001,
                Mt && (wt = j.utils.clamp(0, 1, j.utils.normalize(ot, lt, nr))),
                b._pinPush = vt,
                rt && Lt && (Fe = {},
                Fe[M.a] = "+=" + Lt,
                Oe && (Fe[M.p] = "-=" + It()),
                j.set([rt, Wt], Fe)),
                h && !(mh && b.end >= mn(U, M)))
                    Fe = Rr(h),
                    ua = M === be,
                    li = It(),
                    yn = parseFloat(xe(M.a)) + vt,
                    !at && lt > 1 && (an = (L ? jt.scrollingElement || qr : U).style,
                    an = {
                        style: an,
                        value: an["overflow" + M.a.toUpperCase()]
                    },
                    L && Rr(Vt)["overflow" + M.a.toUpperCase()] !== "scroll" && (an.style["overflow" + M.a.toUpperCase()] = "scroll")),
                    Zu(h, ee, Fe),
                    rn = Ua(h),
                    ze = Mn(h, !0),
                    jl = V && si(U, ua ? Ke : be)(),
                    m && (Ie = [m + M.os2, Gt + vt + we],
                    Ie.t = ee,
                    ir = m === de ? gh(h, M) + Gt + vt : 0,
                    ir && (Ie.push(M.d, ir + we),
                    ee.style.flexBasis !== "auto" && (ee.style.flexBasis = ir + we)),
                    Fs(Ie),
                    Oe && pt.forEach(function(qs) {
                        qs.pin === Oe && qs.vars.pinSpacing !== !1 && (qs._subPinOffset = !0)
                    }),
                    V && It(nr)),
                    V && (Re = {
                        top: ze.top + (ua ? li - ot : jl) + we,
                        left: ze.left + (ua ? jl : li - ot) + we,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    Re[Di] = Re["max" + Gs] = Math.ceil(ze.width) + we,
                    Re[Bi] = Re["max" + pf] = Math.ceil(ze.height) + we,
                    Re[zr] = Re[zr + Do] = Re[zr + Ro] = Re[zr + Bo] = Re[zr + Lo] = "0",
                    Re[de] = Fe[de],
                    Re[de + Do] = Fe[de + Do],
                    Re[de + Ro] = Fe[de + Ro],
                    Re[de + Bo] = Fe[de + Bo],
                    Re[de + Lo] = Fe[de + Lo],
                    en = GT(te, Re, S),
                    Ye && It(0)),
                    i ? (xf = i._initted,
                    Hu(1),
                    i.render(i.duration(), !0, !0),
                    pr = xe(M.a) - yn + Gt + vt,
                    bn = Math.abs(Gt - pr) > 1,
                    V && bn && en.splice(en.length - 2, 2),
                    i.render(0, !0, !0),
                    xf || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    Hu(0)) : pr = Gt,
                    an && (an.value ? an.style["overflow" + M.a.toUpperCase()] = an.value : an.style.removeProperty("overflow-" + M.a));
                else if (d && It() && !w)
                    for (ze = d.parentNode; ze && ze !== Vt; )
                        ze._pinOffset && (ot -= ze._pinOffset,
                        lt -= ze._pinOffset),
                        ze = ze.parentNode;
                Ys && Ys.forEach(function(qs) {
                    return qs.revert(!1, !0)
                }),
                b.start = ot,
                b.end = lt,
                Dt = Ht = Ye ? nr : It(),
                !w && !Ye && (Dt < nr && It(nr),
                b.scroll.rec = 0),
                b.revert(!1, !0),
                Rt = je(),
                ke && (nt = -1,
                ke.restart(!0)),
                Le = 0,
                i && B && (i._initted || sn) && i.progress() !== sn && i.progress(sn || 0, !0).render(i.time(), !0, !0),
                (Mt || wt !== b.progress || w) && (i && !B && i.totalProgress(w && ot < -.001 && !wt ? j.utils.normalize(ot, lt, 0) : wt, !0),
                b.progress = Mt || (Dt - ot) / Gt === wt ? 0 : wt),
                h && m && (ee._pinOffset = Math.round(b.progress * pr)),
                ut && ut.invalidate(),
                isNaN(js) || (js -= j.getProperty(F, M.p),
                ca -= j.getProperty(Tt, M.p),
                $a(F, M, js),
                $a(rt, M, js - (H || 0)),
                $a(Tt, M, ca),
                $a(Wt, M, ca - (H || 0))),
                Mt && !Ye && b.update(),
                c && !Ye && !er && (er = !0,
                c(b),
                er = !1)
            }
        }
        ,
        b.getVelocity = function() {
            return (It() - Ht) / (je() - sl) * 1e3 || 0
        }
        ,
        b.endAnimation = function() {
            so(b.callbackAnimation),
            i && (ut ? ut.progress(1) : i.paused() ? B || so(i, b.direction < 0, 1) : so(i, i.reversed()))
        }
        ,
        b.labelToScroll = function(I) {
            return i && i.labels && (ot || b.refresh() || ot) + i.labels[I] / i.duration() * Gt || 0
        }
        ,
        b.getTrailing = function(I) {
            var W = pt.indexOf(b)
              , D = b.direction > 0 ? pt.slice(0, W).reverse() : pt.slice(W + 1);
            return (_r(I) ? D.filter(function(H) {
                return H.vars.preventOverlaps === I
            }) : D).filter(function(H) {
                return b.direction > 0 ? H.end <= ot : H.start >= lt
            })
        }
        ,
        b.update = function(I, W, D) {
            if (!(w && !D && !I)) {
                var H = Ye === !0 ? nr : b.scroll(), et = I ? 0 : (H - ot) / Gt, q = et < 0 ? 0 : et > 1 ? 1 : et || 0, at = b.progress, Mt, Lt, vt, _t, kt, st, Oe, re;
                if (W && (Ht = Dt,
                Dt = w ? It() : H,
                y && (rr = nn,
                nn = i && !B ? i.totalProgress() : q)),
                g && !q && h && !Le && !ka && $r && ot < H + (H - Ht) / (je() - sl) * g && (q = 1e-4),
                q !== at && b.enabled) {
                    if (Mt = b.isActive = !!q && q < 1,
                    Lt = !!at && at < 1,
                    st = Mt !== Lt,
                    kt = st || !!q != !!at,
                    b.direction = q > at ? 1 : -1,
                    b.progress = q,
                    kt && !Le && (vt = q && !at ? 0 : q === 1 ? 1 : at === 1 ? 2 : 3,
                    B && (_t = !st && k[vt + 1] !== "none" && k[vt + 1] || k[vt],
                    re = i && (_t === "complete" || _t === "reset" || _t in i))),
                    T && (st || re) && (re || f || !i) && (Ze(T) ? T(b) : b.getTrailing(T).forEach(function(li) {
                        return li.endAnimation()
                    })),
                    B || (ut && !Le && !ka ? (ut._dp._time - ut._start !== ut._time && ut.render(ut._dp._time - ut._start),
                    ut.resetTo ? ut.resetTo("totalProgress", q, i._tTime / i._tDur) : (ut.vars.totalProgress = q,
                    ut.invalidate().restart())) : i && i.totalProgress(q, !!(Le && (Rt || I)))),
                    h) {
                        if (I && m && (ee.style[m + M.os2] = Mr),
                        !V)
                            Ge(vo(yn + pr * q));
                        else if (kt) {
                            if (Oe = !I && q > at && lt + 1 > H && H + 1 >= mn(U, M),
                            S)
                                if (!I && (Mt || Oe)) {
                                    var ir = Mn(h, !0)
                                      , Fe = H - ot;
                                    Ap(h, Vt, ir.top + (M === be ? Fe : 0) + we, ir.left + (M === be ? 0 : Fe) + we)
                                } else
                                    Ap(h, ee);
                            Fs(Mt || Oe ? en : rn),
                            bn && q < 1 && Mt || Ge(yn + (q === 1 && !Oe ? pr : 0))
                        }
                    }
                    y && !ft.tween && !Le && !ka && ke.restart(!0),
                    a && (st || _ && q && (q < 1 || !Yu)) && sa(a.targets).forEach(function(li) {
                        return li.classList[Mt || _ ? "add" : "remove"](a.className)
                    }),
                    o && !B && !I && o(b),
                    kt && !Le ? (B && (re && (_t === "complete" ? i.pause().totalProgress(1) : _t === "reset" ? i.restart(!0).pause() : _t === "restart" ? i.restart(!0) : i[_t]()),
                    o && o(b)),
                    (st || !Yu) && (u && st && qu(b, u),
                    G[vt] && qu(b, G[vt]),
                    _ && (q === 1 ? b.kill(!1, 1) : G[vt] = 0),
                    st || (vt = q === 1 ? 1 : 3,
                    G[vt] && qu(b, G[vt]))),
                    P && !Mt && Math.abs(b.getVelocity()) > (ol(P) ? P : 2500) && (so(b.callbackAnimation),
                    ut ? ut.progress(1) : so(i, _t === "reverse" ? 1 : !q, 1))) : B && o && !Le && o(b)
                }
                if (Vr) {
                    var ze = w ? H / w.duration() * (w._caScrollDist || 0) : H;
                    Gr(ze + (F._isFlipped ? 1 : 0)),
                    Vr(ze)
                }
                K && K(-H / w.duration() * (w._caScrollDist || 0))
            }
        }
        ,
        b.enable = function(I, W) {
            b.enabled || (b.enabled = !0,
            Te(U, "resize", _o),
            L || Te(U, "scroll", ns),
            tt && Te(n, "refreshInit", tt),
            I !== !1 && (b.progress = wt = 0,
            Dt = Ht = nt = It()),
            W !== !1 && b.refresh())
        }
        ,
        b.getTween = function(I) {
            return I && ft ? ft.tween : ut
        }
        ,
        b.setPositions = function(I, W, D, H) {
            if (w) {
                var et = w.scrollTrigger
                  , q = w.duration()
                  , at = et.end - et.start;
                I = et.start + at * I / q,
                W = et.start + at * W / q
            }
            b.refresh(!1, !1, {
                start: xp(I, D && !!b._startClamp),
                end: xp(W, D && !!b._endClamp)
            }, H),
            b.update()
        }
        ,
        b.adjustPinSpacing = function(I) {
            if (Ie && I) {
                var W = Ie.indexOf(M.d) + 1;
                Ie[W] = parseFloat(Ie[W]) + I + we,
                Ie[1] = parseFloat(Ie[1]) + I + we,
                Fs(Ie)
            }
        }
        ,
        b.disable = function(I, W) {
            if (b.enabled && (I !== !1 && b.revert(!0, !0),
            b.enabled = b.isActive = !1,
            W || ut && ut.pause(),
            nr = 0,
            Nt && (Nt.uncache = 1),
            tt && Ce(n, "refreshInit", tt),
            ke && (ke.pause(),
            ft.tween && ft.tween.kill() && (ft.tween = 0)),
            !L)) {
                for (var D = pt.length; D--; )
                    if (pt[D].scroller === U && pt[D] !== b)
                        return;
                Ce(U, "resize", _o),
                L || Ce(U, "scroll", ns)
            }
        }
        ,
        b.kill = function(I, W) {
            b.disable(I, W),
            ut && !W && ut.kill(),
            l && delete xh[l];
            var D = pt.indexOf(b);
            D >= 0 && pt.splice(D, 1),
            D === He && ul > 0 && He--,
            D = 0,
            pt.forEach(function(H) {
                return H.scroller === b.scroller && (D = 1)
            }),
            D || Ye || (b.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            I && i.revert({
                kill: !1
            }),
            W || i.kill()),
            rt && [rt, Wt, F, Tt].forEach(function(H) {
                return H.parentNode && H.parentNode.removeChild(H)
            }),
            Uo === b && (Uo = 0),
            h && (Nt && (Nt.uncache = 1),
            D = 0,
            pt.forEach(function(H) {
                return H.pin === h && D++
            }),
            D || (Nt.spacer = 0)),
            r.onKill && r.onKill(b)
        }
        ,
        pt.push(b),
        b.enable(!1, !1),
        C && C(b),
        i && i.add && !Gt) {
            var N = b.update;
            b.update = function() {
                b.update = N,
                ot || lt || b.refresh()
            }
            ,
            j.delayedCall(.01, b.update),
            Gt = .01,
            ot = lt = 0
        } else
            b.refresh();
        h && UT()
    }
    ,
    n.register = function(r) {
        return hs || (j = r || Nx(),
        $x() && window.document && n.enable(),
        hs = xo),
        hs
    }
    ,
    n.defaults = function(r) {
        if (r)
            for (var i in r)
                Da[i] = r[i];
        return Da
    }
    ,
    n.disable = function(r, i) {
        xo = 0,
        pt.forEach(function(o) {
            return o[i ? "kill" : "disable"](r)
        }),
        Ce(bt, "wheel", ns),
        Ce(jt, "scroll", ns),
        clearInterval(Ia),
        Ce(jt, "touchcancel", hn),
        Ce(Vt, "touchstart", hn),
        Ra(Ce, jt, "pointerdown,touchstart,mousedown", vp),
        Ra(Ce, jt, "pointerup,touchend,mouseup", _p),
        Il.kill(),
        za(Ce);
        for (var s = 0; s < mt.length; s += 3)
            La(Ce, mt[s], mt[s + 1]),
            La(Ce, mt[s], mt[s + 2])
    }
    ,
    n.enable = function() {
        if (bt = window,
        jt = document,
        qr = jt.documentElement,
        Vt = jt.body,
        j && (sa = j.utils.toArray,
        vs = j.utils.clamp,
        ph = j.core.context || hn,
        Hu = j.core.suppressOverwrites || hn,
        cf = bt.history.scrollRestoration || "auto",
        vh = bt.pageYOffset,
        j.core.globals("ScrollTrigger", n),
        Vt)) {
            xo = 1,
            Os = document.createElement("div"),
            Os.style.height = "100vh",
            Os.style.position = "absolute",
            Kx(),
            IT(),
            oe.register(j),
            n.isTouch = oe.isTouch,
            Vn = oe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Te(bt, "wheel", ns),
            zx = [bt, jt, qr, Vt],
            j.matchMedia ? (n.matchMedia = function(l) {
                var u = j.matchMedia(), c;
                for (c in l)
                    u.add(c, l[c]);
                return u
            }
            ,
            j.addEventListener("matchMediaInit", function() {
                return gf()
            }),
            j.addEventListener("matchMediaRevert", function() {
                return jx()
            }),
            j.addEventListener("matchMedia", function() {
                Mi(0, 1),
                Hi("matchMedia")
            }),
            j.matchMedia("(orientation: portrait)", function() {
                return Ku(),
                Ku
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Ku(),
            Te(jt, "scroll", ns);
            var r = Vt.style, i = r.borderTopStyle, s = j.core.Animation.prototype, o, a;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            o = Mn(Vt),
            be.m = Math.round(o.top + be.sc()) || 0,
            Ke.m = Math.round(o.left + Ke.sc()) || 0,
            i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
            Ia = setInterval(Sp, 250),
            j.delayedCall(.5, function() {
                return ka = 0
            }),
            Te(jt, "touchcancel", hn),
            Te(Vt, "touchstart", hn),
            Ra(Te, jt, "pointerdown,touchstart,mousedown", vp),
            Ra(Te, jt, "pointerup,touchend,mouseup", _p),
            dh = j.utils.checkPrefix("transform"),
            cl.push(dh),
            hs = je(),
            Il = j.delayedCall(.2, Mi).pause(),
            fs = [jt, "visibilitychange", function() {
                var l = bt.innerWidth
                  , u = bt.innerHeight;
                jt.hidden ? (pp = l,
                mp = u) : (pp !== l || mp !== u) && _o()
            }
            , jt, "DOMContentLoaded", Mi, bt, "load", Mi, bt, "resize", _o],
            za(Te),
            pt.forEach(function(l) {
                return l.enable(0, 1)
            }),
            a = 0; a < mt.length; a += 3)
                La(Ce, mt[a], mt[a + 1]),
                La(Ce, mt[a], mt[a + 2])
        }
    }
    ,
    n.config = function(r) {
        "limitCallbacks"in r && (Yu = !!r.limitCallbacks);
        var i = r.syncInterval;
        i && clearInterval(Ia) || (Ia = i) && setInterval(Sp, i),
        "ignoreMobileResize"in r && (Dx = n.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (za(Ce) || za(Te, r.autoRefreshEvents || "none"),
        Lx = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    n.scrollerProxy = function(r, i) {
        var s = sr(r)
          , o = mt.indexOf(s)
          , a = Wi(s);
        ~o && mt.splice(o, a ? 6 : 2),
        i && (a ? xn.unshift(bt, i, Vt, i, qr, i) : xn.unshift(s, i))
    }
    ,
    n.clearMatchMedia = function(r) {
        pt.forEach(function(i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
        })
    }
    ,
    n.isInViewport = function(r, i, s) {
        var o = (_r(r) ? sr(r) : r).getBoundingClientRect()
          , a = o[s ? Di : Bi] * i || 0;
        return s ? o.right - a > 0 && o.left + a < bt.innerWidth : o.bottom - a > 0 && o.top + a < bt.innerHeight
    }
    ,
    n.positionInViewport = function(r, i, s) {
        _r(r) && (r = sr(r));
        var o = r.getBoundingClientRect()
          , a = o[s ? Di : Bi]
          , l = i == null ? a / 2 : i in zl ? zl[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
        return s ? (o.left + l) / bt.innerWidth : (o.top + l) / bt.innerHeight
    }
    ,
    n.killAll = function(r) {
        if (pt.slice(0).forEach(function(s) {
            return s.vars.id !== "ScrollSmoother" && s.kill()
        }),
        r !== !0) {
            var i = Xi.killAll || [];
            Xi = {},
            i.forEach(function(s) {
                return s()
            })
        }
    }
    ,
    n
}();
gt.version = "3.12.4";
gt.saveStyles = function(n) {
    return n ? sa(n).forEach(function(t) {
        if (t && t.style) {
            var e = vr.indexOf(t);
            e >= 0 && vr.splice(e, 5),
            vr.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), j.core.getCache(t), ph())
        }
    }) : vr
}
;
gt.revert = function(n, t) {
    return gf(!n, t)
}
;
gt.create = function(n, t) {
    return new gt(n,t)
}
;
gt.refresh = function(n) {
    return n ? _o() : (hs || gt.register()) && Mi(!0)
}
;
gt.update = function(n) {
    return ++mt.cache && zn(n === !0 ? 2 : 0)
}
;
gt.clearScrollMemory = qx;
gt.maxScroll = function(n, t) {
    return mn(n, t ? Ke : be)
}
;
gt.getScrollFunc = function(n, t) {
    return si(sr(n), t ? Ke : be)
}
;
gt.getById = function(n) {
    return xh[n]
}
;
gt.getAll = function() {
    return pt.filter(function(n) {
        return n.vars.id !== "ScrollSmoother"
    })
}
;
gt.isScrolling = function() {
    return !!$r
}
;
gt.snapDirectional = mf;
gt.addEventListener = function(n, t) {
    var e = Xi[n] || (Xi[n] = []);
    ~e.indexOf(t) || e.push(t)
}
;
gt.removeEventListener = function(n, t) {
    var e = Xi[n]
      , r = e && e.indexOf(t);
    r >= 0 && e.splice(r, 1)
}
;
gt.batch = function(n, t) {
    var e = [], r = {}, i = t.interval || .016, s = t.batchMax || 1e9, o = function(u, c) {
        var f = []
          , d = []
          , h = j.delayedCall(i, function() {
            c(f, d),
            f = [],
            d = []
        }).pause();
        return function(m) {
            f.length || h.restart(!0),
            f.push(m.trigger),
            d.push(m),
            s <= f.length && h.progress(1)
        }
    }, a;
    for (a in t)
        r[a] = a.substr(0, 2) === "on" && Ze(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
    return Ze(s) && (s = s(),
    Te(gt, "refresh", function() {
        return s = t.batchMax()
    })),
    sa(n).forEach(function(l) {
        var u = {};
        for (a in r)
            u[a] = r[a];
        u.trigger = l,
        e.push(gt.create(u))
    }),
    e
}
;
var Mp = function(t, e, r, i) {
    return e > i ? t(i) : e < 0 && t(0),
    r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1
}, Qu = function n(t, e) {
    e === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (oe.isTouch ? " pinch-zoom" : "") : "none",
    t === qr && n(Vt, e)
}, Na = {
    auto: 1,
    scroll: 1
}, WT = function(t) {
    var e = t.event, r = t.target, i = t.axis, s = (e.changedTouches ? e.changedTouches[0] : e).target, o = s._gsap || j.core.getCache(s), a = je(), l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; s && s !== Vt && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(Na[(l = Rr(s)).overflowY] || Na[l.overflowX])); )
            s = s.parentNode;
        o._isScroll = s && s !== r && !Wi(s) && (Na[(l = Rr(s)).overflowY] || Na[l.overflowX]),
        o._isScrollT = a
    }
    (o._isScroll || i === "x") && (e.stopPropagation(),
    e._gsapAllow = !0)
}, Qx = function(t, e, r, i) {
    return oe.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: i = i && WT,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return r && Te(jt, oe.eventTypes[0], Fp, !1, !0)
        },
        onDisable: function() {
            return Ce(jt, oe.eventTypes[0], Fp, !0)
        }
    })
}, XT = /(input|label|select|textarea)/i, Op, Fp = function(t) {
    var e = XT.test(t.target.tagName);
    (e || Op) && (t._gsapAllow = !0,
    Op = e)
}, HT = function(t) {
    Si(t) || (t = {}),
    t.preventDefault = t.isNormalizer = t.allowClicks = !0,
    t.type || (t.type = "wheel,touch"),
    t.debounce = !!t.debounce,
    t.id = t.id || "normalizer";
    var e = t, r = e.normalizeScrollX, i = e.momentum, s = e.allowNestedScroll, o = e.onRelease, a, l, u = sr(t.target) || qr, c = j.core.globals().ScrollSmoother, f = c && c.get(), d = Vn && (t.content && sr(t.content) || f && t.content !== !1 && !f.smooth() && f.content()), h = si(u, be), m = si(u, Ke), p = 1, g = (oe.isTouch && bt.visualViewport ? bt.visualViewport.scale * bt.visualViewport.width : bt.outerWidth) / bt.innerWidth, x = 0, v = Ze(i) ? function() {
        return i(a)
    }
    : function() {
        return i || 2.8
    }
    , _, y, S = Qx(u, t.type, !0, s), O = function() {
        return y = !1
    }, w = hn, P = hn, T = function() {
        l = mn(u, be),
        P = vs(Vn ? 1 : 0, l),
        r && (w = vs(0, mn(u, Ke))),
        _ = Ui
    }, M = function() {
        d._gsap.y = vo(parseFloat(d._gsap.y) + h.offset) + "px",
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)",
        h.offset = h.cacheID = 0
    }, B = function() {
        if (y) {
            requestAnimationFrame(O);
            var X = vo(a.deltaY / 2)
              , $ = P(h.v - X);
            if (d && $ !== h.v + h.offset) {
                h.offset = $ - h.v;
                var b = vo((parseFloat(d && d._gsap.y) || 0) - h.offset);
                d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + b + ", 0, 1)",
                d._gsap.y = b + "px",
                h.cacheID = mt.cache,
                zn()
            }
            return !0
        }
        h.offset && M(),
        y = !0
    }, U, z, L, V, G = function() {
        T(),
        U.isActive() && U.vars.scrollY > l && (h() > l ? U.progress(1) && h(l) : U.resetTo("scrollY", l))
    };
    return d && j.set(d, {
        y: "+=0"
    }),
    t.ignoreCheck = function(k) {
        return Vn && k.type === "touchmove" && B() || p > 1.05 && k.type !== "touchstart" || a.isGesturing || k.touches && k.touches.length > 1
    }
    ,
    t.onPress = function() {
        y = !1;
        var k = p;
        p = vo((bt.visualViewport && bt.visualViewport.scale || 1) / g),
        U.pause(),
        k !== p && Qu(u, p > 1.01 ? !0 : r ? !1 : "x"),
        z = m(),
        L = h(),
        T(),
        _ = Ui
    }
    ,
    t.onRelease = t.onGestureStart = function(k, X) {
        if (h.offset && M(),
        !X)
            V.restart(!0);
        else {
            mt.cache++;
            var $ = v(), b, tt;
            r && (b = m(),
            tt = b + $ * .05 * -k.velocityX / .227,
            $ *= Mp(m, b, tt, mn(u, Ke)),
            U.vars.scrollX = w(tt)),
            b = h(),
            tt = b + $ * .05 * -k.velocityY / .227,
            $ *= Mp(h, b, tt, mn(u, be)),
            U.vars.scrollY = P(tt),
            U.invalidate().duration($).play(.01),
            (Vn && U.vars.scrollY >= l || b >= l - 1) && j.to({}, {
                onUpdate: G,
                duration: $
            })
        }
        o && o(k)
    }
    ,
    t.onWheel = function() {
        U._ts && U.pause(),
        je() - x > 1e3 && (_ = 0,
        x = je())
    }
    ,
    t.onChange = function(k, X, $, b, tt) {
        if (Ui !== _ && T(),
        X && r && m(w(b[2] === X ? z + (k.startX - k.x) : m() + X - b[1])),
        $) {
            h.offset && M();
            var Y = tt[2] === $
              , ht = Y ? L + k.startY - k.y : h() + $ - tt[1]
              , nt = P(ht);
            Y && ht !== nt && (L += nt - ht),
            h(nt)
        }
        ($ || X) && zn()
    }
    ,
    t.onEnable = function() {
        Qu(u, r ? !1 : "x"),
        gt.addEventListener("refresh", G),
        Te(bt, "resize", G),
        h.smooth && (h.target.style.scrollBehavior = "auto",
        h.smooth = m.smooth = !1),
        S.enable()
    }
    ,
    t.onDisable = function() {
        Qu(u, !0),
        Ce(bt, "resize", G),
        gt.removeEventListener("refresh", G),
        S.kill()
    }
    ,
    t.lockAxis = t.lockAxis !== !1,
    a = new oe(t),
    a.iOS = Vn,
    Vn && !h() && h(1),
    Vn && j.ticker.add(hn),
    V = a._dc,
    U = j.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: Zx(h, h(), function() {
                return U.pause()
            })
        },
        onUpdate: zn,
        onComplete: V.vars.onComplete
    }),
    a
};
gt.sort = function(n) {
    return pt.sort(n || function(t, e) {
        return (t.vars.refreshPriority || 0) * -1e6 + t.start - (e.start + (e.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
gt.observe = function(n) {
    return new oe(n)
}
;
gt.normalizeScroll = function(n) {
    if (typeof n > "u")
        return Xe;
    if (n === !0 && Xe)
        return Xe.enable();
    if (n === !1) {
        Xe && Xe.kill(),
        Xe = n;
        return
    }
    var t = n instanceof oe ? n : HT(n);
    return Xe && Xe.target === t.target && Xe.kill(),
    Wi(t.target) && (Xe = t),
    t
}
;
gt.core = {
    _getVelocityProp: fh,
    _inputObserver: Qx,
    _scrollers: mt,
    _proxies: xn,
    bridge: {
        ss: function() {
            $r || Hi("scrollStart"),
            $r = je()
        },
        ref: function() {
            return Le
        }
    }
};
Nx() && j.registerPlugin(gt);
it.registerPlugin(gt);
const Yi = new ET({
    duration: .08,
    easing: n => Math.min(1, 1.001 - Math.pow(2, -10 * n)),
    orientation: "vertical",
    smoothWheel: !0,
    wheelMultiplier: 3
});
!zm() && Yi.stop();
Yi.on("scroll", YT);
it.ticker.add(jT);
it.ticker.lagSmoothing(0);
function YT(n) {
    gt.update()
}
function jT(n, t, e) {
    Yi.raf(e)
}
Ul.listen( () => {
    switch (zm()) {
    case !0:
        Yi.start();
        break;
    case !1:
        Yi.stop();
        break
    }
}
);
Xt.on(ue.SCROLL_TOP, () => {
    Yi.scrollTo(0, {
        immediate: !0,
        force: !0
    })
}
);
Xt.on(ue.SCROLL_TO_HEADER, () => {
    Yi.scrollTo("#site-header", {
        lock: !0
    })
}
);
document.documentElement.style.setProperty("--scrollbar-width", `${Jx()}px`);
document.documentElement.dataset.theme = Ep();
navigator.serviceWorker.getRegistrations().then(n => {
    for (const t of n)
        t.unregister()
}
);
export {du as $, Cg as A, ar as B, tr as C, Jt as D, Q as E, Ct as F, dt as G, Xm as H, Ur as I, _n as J, rd as K, Us as L, Ot as M, Ky as N, a2 as O, Be as P, ce as Q, Cl as R, s2 as S, va as T, Cc as U, T2 as V, FS as W, ES as X, me as Y, id as Z, Oy as _, Jr as a, At as a0, Ym as a1, Tg as a2, IS as a3, F2 as a4, Z2 as a5, g1 as a6, v1 as a7, w1 as a8, T1 as a9, A1 as aa, Bs as ab, J as ac, zt as ad, ta as ae, gb as af, Ng as ag, pd as ah, fd as ai, ey as aj, Ud as ak, Sb as al, Al as am, ne as an, ny as ao, Ld as ap, $c as aq, Dd as ar, bl as as, Vg as at, X2 as b, Qo as c, Ha as d, Qe as e, dd as f, G2 as g, Vh as h, bg as i, Gh as j, fr as k, Wh as l, Rd as m, m1 as n, x1 as o, b1 as p, Eg as q, my as r, C1 as s, Nl as t, ct as u, ry as v, ge as w, xt as x, M1 as y, In as z};
