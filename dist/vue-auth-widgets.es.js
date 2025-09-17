(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.table{display:table}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-300{border-color:var(--color-gray-300)}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-indigo-500{color:var(--color-indigo-500)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media (hover:hover){.hover\\:bg-indigo-600:hover{background-color:var(--color-indigo-600)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:border-indigo-500:focus{border-color:var(--color-indigo-500)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-indigo-500:focus{--tw-ring-color:var(--color-indigo-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-indigo-400:disabled{background-color:var(--color-indigo-400)}@media (min-width:40rem){.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Qe = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, js = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ue = () => {
}, Us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), be = Object.assign, Ms = Object.prototype.hasOwnProperty, sn = (e, t) => Ms.call(e, t), C = Array.isArray, Se = (e) => Vt(e) === "[object Map]", vr = (e) => Vt(e) === "[object Set]", I = (e) => typeof e == "function", ee = (e) => typeof e == "string", Te = (e) => typeof e == "symbol", M = (e) => e !== null && typeof e == "object", Hs = (e) => (M(e) || I(e)) && I(e.then) && I(e.catch), Sr = Object.prototype.toString, Vt = (e) => Sr.call(e), Rr = (e) => Vt(e).slice(8, -1), Or = (e) => Vt(e) === "[object Object]", En = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $r = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, xr = $r((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bs = $r(
  (e) => e ? `on${xr(e)}` : ""
), ye = (e, t) => !Object.is(e, t), qs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Un = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Mn;
const Ft = () => Mn || (Mn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ee(r) ? Js(r) : vn(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (ee(e) || M(e))
    return e;
}
const zs = /;(?![^(]*\))/g, Ks = /:([^]+)/, Ws = /\/\*[^]*?\*\//g;
function Js(e) {
  const t = {};
  return e.replace(Ws, "").split(zs).forEach((n) => {
    if (n) {
      const r = n.split(Ks);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Sn(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const r = Sn(e[n]);
      r && (t += r + " ");
    }
  else if (M(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Nr = (e) => !!(e && e.__v_isRef === !0), ue = (e) => ee(e) ? e : e == null ? "" : C(e) || M(e) && (e.toString === Sr || !I(e.toString)) ? Nr(e) ? ue(e.value) : JSON.stringify(e, Tr, 2) : String(e), Tr = (e, t) => Nr(t) ? Tr(e, t.value) : Se(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[zt(r, o) + " =>"] = s, n),
    {}
  )
} : vr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => zt(n))
} : Te(t) ? zt(t) : M(t) && !C(t) && !Or(t) ? String(t) : t, zt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Te(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ie(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let S;
const Kt = /* @__PURE__ */ new WeakSet();
class Gs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Kt.has(this) && (Kt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ar(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hn(this), Dr(this);
    const t = S, n = Q;
    S = this, Q = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && S !== this && ie(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Pr(this), S = t, Q = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $n(t);
      this.deps = this.depsTail = void 0, Hn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Kt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    on(this) && this.run();
  }
  get dirty() {
    return on(this);
  }
}
let Cr = 0, Xe, Ze;
function Ar(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ze, Ze = e;
    return;
  }
  e.next = Xe, Xe = e;
}
function Rn() {
  Cr++;
}
function On() {
  if (--Cr > 0)
    return;
  if (Ze) {
    let t = Ze;
    for (Ze = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xe; ) {
    let t = Xe;
    for (Xe = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Dr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pr(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), $n(r), Ys(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function on(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (kr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function kr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === et) || (e.globalVersion = et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !on(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = S, r = Q;
  S = e, Q = !0;
  try {
    Dr(e);
    const s = e.fn(e._value);
    (t.version === 0 || ye(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    S = n, Q = r, Pr(e), e.flags &= -3;
  }
}
function $n(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      $n(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ys(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Q = !0;
const Vr = [];
function Be() {
  Vr.push(Q), Q = !1;
}
function qe() {
  const e = Vr.pop();
  Q = e === void 0 ? !0 : e;
}
function Hn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = S;
    S = void 0;
    try {
      t();
    } finally {
      S = n;
    }
  }
}
let et = 0;
class Xs {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!S || !Q || S === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== S)
      n = this.activeLink = new Xs(S, this), S.deps ? (n.prevDep = S.depsTail, S.depsTail.nextDep = n, S.depsTail = n) : S.deps = S.depsTail = n, Fr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = S.depsTail, n.nextDep = void 0, S.depsTail.nextDep = n, S.depsTail = n, S.deps === n && (S.deps = r);
    }
    return process.env.NODE_ENV !== "production" && S.onTrack && S.onTrack(
      be(
        {
          effect: S
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, et++, this.notify(t);
  }
  notify(t) {
    Rn();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            be(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      On();
    }
  }
}
function Fr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Fr(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const an = /* @__PURE__ */ new WeakMap(), Re = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), cn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), tt = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function K(e, t, n) {
  if (Q && S) {
    let r = an.get(e);
    r || an.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new xn()), s.map = r, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function he(e, t, n, r, s, o) {
  const i = an.get(e);
  if (!i) {
    et++;
    return;
  }
  const a = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: s,
      oldTarget: o
    }) : l.trigger());
  };
  if (Rn(), t === "clear")
    i.forEach(a);
  else {
    const l = C(e), f = l && En(n);
    if (l && n === "length") {
      const d = Number(r);
      i.forEach((c, h) => {
        (h === "length" || h === tt || !Te(h) && h >= d) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(tt)), t) {
        case "add":
          l ? f && a(i.get("length")) : (a(i.get(Re)), Se(e) && a(i.get(cn)));
          break;
        case "delete":
          l || (a(i.get(Re)), Se(e) && a(i.get(cn)));
          break;
        case "set":
          Se(e) && a(i.get(Re));
          break;
      }
  }
  On();
}
function Pe(e) {
  const t = v(e);
  return t === e ? t : (K(t, "iterate", tt), z(e) ? t : t.map(F));
}
function It(e) {
  return K(e = v(e), "iterate", tt), e;
}
const Zs = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wt(this, Symbol.iterator, F);
  },
  concat(...e) {
    return Pe(this).concat(
      ...e.map((t) => C(t) ? Pe(t) : t)
    );
  },
  entries() {
    return Wt(this, "entries", (e) => (e[1] = F(e[1]), e));
  },
  every(e, t) {
    return ce(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ce(this, "filter", e, t, (n) => n.map(F), arguments);
  },
  find(e, t) {
    return ce(this, "find", e, t, F, arguments);
  },
  findIndex(e, t) {
    return ce(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ce(this, "findLast", e, t, F, arguments);
  },
  findLastIndex(e, t) {
    return ce(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ce(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jt(this, "includes", e);
  },
  indexOf(...e) {
    return Jt(this, "indexOf", e);
  },
  join(e) {
    return Pe(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jt(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ce(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Je(this, "pop");
  },
  push(...e) {
    return Je(this, "push", e);
  },
  reduce(e, ...t) {
    return Bn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bn(this, "reduceRight", e, t);
  },
  shift() {
    return Je(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ce(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Je(this, "splice", e);
  },
  toReversed() {
    return Pe(this).toReversed();
  },
  toSorted(e) {
    return Pe(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pe(this).toSpliced(...e);
  },
  unshift(...e) {
    return Je(this, "unshift", e);
  },
  values() {
    return Wt(this, "values", F);
  }
};
function Wt(e, t, n) {
  const r = It(e), s = r[t]();
  return r !== e && !z(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const Qs = Array.prototype;
function ce(e, t, n, r, s, o) {
  const i = It(e), a = i !== e && !z(e), l = i[t];
  if (l !== Qs[t]) {
    const c = l.apply(e, o);
    return a ? F(c) : c;
  }
  let f = n;
  i !== e && (a ? f = function(c, h) {
    return n.call(this, F(c), h, e);
  } : n.length > 2 && (f = function(c, h) {
    return n.call(this, c, h, e);
  }));
  const d = l.call(i, f, r);
  return a && s ? s(d) : d;
}
function Bn(e, t, n, r) {
  const s = It(e);
  let o = n;
  return s !== e && (z(e) ? n.length > 3 && (o = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : o = function(i, a, l) {
    return n.call(this, i, F(a), l, e);
  }), s[t](o, ...r);
}
function Jt(e, t, n) {
  const r = v(e);
  K(r, "iterate", tt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && $t(n[0]) ? (n[0] = v(n[0]), r[t](...n)) : s;
}
function Je(e, t, n = []) {
  Be(), Rn();
  const r = v(e)[t].apply(e, n);
  return On(), qe(), r;
}
const eo = /* @__PURE__ */ Ls("__proto__,__v_isRef,__isVue"), Ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Te)
);
function to(e) {
  Te(e) || (e = String(e));
  const t = v(this);
  return K(t, "has", e), t.hasOwnProperty(e);
}
class Lr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? fo : Mr : o ? uo : Ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = C(t);
    if (!s) {
      let l;
      if (i && (l = Zs[n]))
        return l;
      if (n === "hasOwnProperty")
        return to;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      H(t) ? t : r
    );
    return (Te(n) ? Ir.has(n) : eo(n)) || (s || K(t, "get", n), o) ? a : H(a) ? i && En(n) ? a : a.value : M(a) ? s ? Hr(a) : it(a) : a;
  }
}
class no extends Lr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = te(o);
      if (!z(r) && !te(r) && (o = v(o), r = v(r)), !C(t) && H(o) && !H(r))
        return l ? (process.env.NODE_ENV !== "production" && ie(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (o.value = r, !0);
    }
    const i = C(t) && En(n) ? Number(n) < t.length : sn(t, n), a = Reflect.set(
      t,
      n,
      r,
      H(t) ? t : s
    );
    return t === v(s) && (i ? ye(r, o) && he(t, "set", n, r, o) : he(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = sn(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && he(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Te(n) || !Ir.has(n)) && K(t, "has", n), r;
  }
  ownKeys(t) {
    return K(
      t,
      "iterate",
      C(t) ? "length" : Re
    ), Reflect.ownKeys(t);
  }
}
class ro extends Lr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && ie(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && ie(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const so = /* @__PURE__ */ new no(), oo = /* @__PURE__ */ new ro(), ln = (e) => e, mt = (e) => Reflect.getPrototypeOf(e);
function io(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = v(s), i = Se(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = s[e](...r), d = n ? ln : t ? xt : F;
    return !t && K(
      o,
      "iterate",
      l ? cn : Re
    ), {
      // iterator protocol
      next() {
        const { value: c, done: h } = f.next();
        return h ? { value: c, done: h } : {
          value: a ? [d(c[0]), d(c[1])] : d(c),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function gt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      ie(
        `${xr(e)} operation ${n}failed: target is readonly.`,
        v(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ao(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = v(o), a = v(s);
      e || (ye(s, a) && K(i, "get", s), K(i, "get", a));
      const { has: l } = mt(i), f = t ? ln : e ? xt : F;
      if (l.call(i, s))
        return f(o.get(s));
      if (l.call(i, a))
        return f(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && K(v(s), "iterate", Re), s.size;
    },
    has(s) {
      const o = this.__v_raw, i = v(o), a = v(s);
      return e || (ye(s, a) && K(i, "has", s), K(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, l = v(a), f = t ? ln : e ? xt : F;
      return !e && K(l, "iterate", Re), a.forEach((d, c) => s.call(o, f(d), f(c), i));
    }
  };
  return be(
    n,
    e ? {
      add: gt("add"),
      set: gt("set"),
      delete: gt("delete"),
      clear: gt("clear")
    } : {
      add(s) {
        !t && !z(s) && !te(s) && (s = v(s));
        const o = v(this);
        return mt(o).has.call(o, s) || (o.add(s), he(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !z(o) && !te(o) && (o = v(o));
        const i = v(this), { has: a, get: l } = mt(i);
        let f = a.call(i, s);
        f ? process.env.NODE_ENV !== "production" && qn(i, a, s) : (s = v(s), f = a.call(i, s));
        const d = l.call(i, s);
        return i.set(s, o), f ? ye(o, d) && he(i, "set", s, o, d) : he(i, "add", s, o), this;
      },
      delete(s) {
        const o = v(this), { has: i, get: a } = mt(o);
        let l = i.call(o, s);
        l ? process.env.NODE_ENV !== "production" && qn(o, i, s) : (s = v(s), l = i.call(o, s));
        const f = a ? a.call(o, s) : void 0, d = o.delete(s);
        return l && he(o, "delete", s, void 0, f), d;
      },
      clear() {
        const s = v(this), o = s.size !== 0, i = process.env.NODE_ENV !== "production" ? Se(s) ? new Map(s) : new Set(s) : void 0, a = s.clear();
        return o && he(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = io(s, e, t);
  }), n;
}
function jr(e, t) {
  const n = ao(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    sn(n, s) && s in r ? n : r,
    s,
    o
  );
}
const co = {
  get: /* @__PURE__ */ jr(!1, !1)
}, lo = {
  get: /* @__PURE__ */ jr(!0, !1)
};
function qn(e, t, n) {
  const r = v(n);
  if (r !== n && t.call(e, r)) {
    const s = Rr(e);
    ie(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ur = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap();
function po(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ho(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : po(Rr(e));
}
function it(e) {
  return te(e) ? e : Br(
    e,
    !1,
    so,
    co,
    Ur
  );
}
function Hr(e) {
  return Br(
    e,
    !0,
    oo,
    lo,
    Mr
  );
}
function Br(e, t, n, r, s) {
  if (!M(e))
    return process.env.NODE_ENV !== "production" && ie(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = ho(e);
  if (o === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const a = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, a), a;
}
function Oe(e) {
  return te(e) ? Oe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function te(e) {
  return !!(e && e.__v_isReadonly);
}
function z(e) {
  return !!(e && e.__v_isShallow);
}
function $t(e) {
  return e ? !!e.__v_raw : !1;
}
function v(e) {
  const t = e && e.__v_raw;
  return t ? v(t) : e;
}
const F = (e) => M(e) ? it(e) : e, xt = (e) => M(e) ? Hr(e) : e;
function H(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function L(e) {
  return mo(e, !1);
}
function mo(e, t) {
  return H(e) ? e : new go(e, t);
}
class go {
  constructor(t, n) {
    this.dep = new xn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : v(t), this._value = n ? t : F(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || z(t) || te(t);
    t = r ? t : v(t), ye(t, n) && (this._rawValue = t, this._value = r ? t : F(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function _(e) {
  return H(e) ? e.value : e;
}
class yo {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new xn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    S !== this)
      return Ar(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return kr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && ie("Write operation failed: computed value is readonly");
  }
}
function bo(e, t, n = !1) {
  let r, s;
  I(e) ? r = e : (r = e.get, s = e.set);
  const o = new yo(r, s, n);
  return process.env.NODE_ENV, o;
}
const yt = {}, Nt = /* @__PURE__ */ new WeakMap();
let Ee;
function wo(e, t = !1, n = Ee) {
  if (n) {
    let r = Nt.get(n);
    r || Nt.set(n, r = []), r.push(e);
  } else process.env.NODE_ENV !== "production" && !t && ie(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function _o(e, t, n = Qe) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, f = (b) => {
    (n.onWarn || ie)(
      "Invalid watch source: ",
      b,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (b) => s ? b : z(b) || s === !1 || s === 0 ? me(b, 1) : me(b);
  let c, h, m, u, y = !1, g = !1;
  if (H(e) ? (h = () => e.value, y = z(e)) : Oe(e) ? (h = () => d(e), y = !0) : C(e) ? (g = !0, y = e.some((b) => Oe(b) || z(b)), h = () => e.map((b) => {
    if (H(b))
      return b.value;
    if (Oe(b))
      return d(b);
    if (I(b))
      return l ? l(b, 2) : b();
    process.env.NODE_ENV !== "production" && f(b);
  })) : I(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (m) {
      Be();
      try {
        m();
      } finally {
        qe();
      }
    }
    const b = Ee;
    Ee = c;
    try {
      return l ? l(e, 3, [u]) : e(u);
    } finally {
      Ee = b;
    }
  } : (h = Ue, process.env.NODE_ENV !== "production" && f(e)), t && s) {
    const b = h, x = s === !0 ? 1 / 0 : s;
    h = () => me(b(), x);
  }
  const w = () => {
    c.stop();
  };
  if (o && t) {
    const b = t;
    t = (...x) => {
      b(...x), w();
    };
  }
  let A = g ? new Array(e.length).fill(yt) : yt;
  const O = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const x = c.run();
        if (s || y || (g ? x.some((B, k) => ye(B, A[k])) : ye(x, A))) {
          m && m();
          const B = Ee;
          Ee = c;
          try {
            const k = [
              x,
              // pass undefined as the old value when it's changed for the first time
              A === yt ? void 0 : g && A[0] === yt ? [] : A,
              u
            ];
            A = x, l ? l(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            Ee = B;
          }
        }
      } else
        c.run();
  };
  return a && a(O), c = new Gs(h), c.scheduler = i ? () => i(O, !1) : O, u = (b) => wo(b, !1, c), m = c.onStop = () => {
    const b = Nt.get(c);
    if (b) {
      if (l)
        l(b, 4);
      else
        for (const x of b) x();
      Nt.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? r ? O(!0) : A = c.run() : i ? i(O.bind(null, !0), !0) : c.run(), w.pause = c.pause.bind(c), w.resume = c.resume.bind(c), w.stop = w, w;
}
function me(e, t = 1 / 0, n) {
  if (t <= 0 || !M(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, H(e))
    me(e.value, t, n);
  else if (C(e))
    for (let r = 0; r < e.length; r++)
      me(e[r], t, n);
  else if (vr(e) || Se(e))
    e.forEach((r) => {
      me(r, t, n);
    });
  else if (Or(e)) {
    for (const r in e)
      me(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && me(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const $e = [];
function Eo(e) {
  $e.push(e);
}
function vo() {
  $e.pop();
}
let Gt = !1;
function V(e, ...t) {
  if (Gt) return;
  Gt = !0, Be();
  const n = $e.length ? $e[$e.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = So();
  if (r)
    Lt(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, a;
          return (a = (i = o.toString) == null ? void 0 : i.call(o)) != null ? a : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${is(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Ro(s)), console.warn(...o);
  }
  qe(), Gt = !1;
}
function So() {
  let e = $e[$e.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Ro(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Oo(n));
  }), t;
}
function Oo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${is(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...$o(e.props), o] : [s + o];
}
function $o(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...qr(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function qr(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : H(t) ? (t = qr(e, v(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = v(t), n ? t : [`${e}=`, t]);
}
const Nn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Lt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Cn(s, t, n);
  }
}
function Tn(e, t, n, r) {
  if (I(e)) {
    const s = Lt(e, t, n, r);
    return s && Hs(s) && s.catch((o) => {
      Cn(o, t, n);
    }), s;
  }
  if (C(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(Tn(e[o], t, n, r));
    return s;
  } else process.env.NODE_ENV !== "production" && V(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Cn(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Qe;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = process.env.NODE_ENV !== "production" ? Nn[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, l, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Be(), Lt(o, null, 10, [
        e,
        l,
        f
      ]), qe();
      return;
    }
  }
  xo(e, n, s, r, i);
}
function xo(e, t, n, r = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const o = Nn[t];
    if (n && Eo(n), V(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && vo(), r)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const Y = [];
let le = -1;
const Me = [];
let de = null, ke = 0;
const zr = /* @__PURE__ */ Promise.resolve();
let Tt = null;
const No = 100;
function zn(e) {
  const t = Tt || zr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function To(e) {
  let t = le + 1, n = Y.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Y[r], o = nt(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Kr(e) {
  if (!(e.flags & 1)) {
    const t = nt(e), n = Y[Y.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nt(n) ? Y.push(e) : Y.splice(To(t), 0, e), e.flags |= 1, Wr();
  }
}
function Wr() {
  Tt || (Tt = zr.then(Gr));
}
function Jr(e) {
  C(e) ? Me.push(...e) : de && e.id === -1 ? de.splice(ke + 1, 0, e) : e.flags & 1 || (Me.push(e), e.flags |= 1), Wr();
}
function Co(e) {
  if (Me.length) {
    const t = [...new Set(Me)].sort(
      (n, r) => nt(n) - nt(r)
    );
    if (Me.length = 0, de) {
      de.push(...t);
      return;
    }
    for (de = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ke = 0; ke < de.length; ke++) {
      const n = de[ke];
      process.env.NODE_ENV !== "production" && Yr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    de = null, ke = 0;
  }
}
const nt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Gr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Yr(e, n) : Ue;
  try {
    for (le = 0; le < Y.length; le++) {
      const n = Y[le];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Lt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; le < Y.length; le++) {
      const n = Y[le];
      n && (n.flags &= -2);
    }
    le = -1, Y.length = 0, Co(e), Tt = null, (Y.length || Me.length) && Gr(e);
  }
}
function Yr(e, t) {
  const n = e.get(t) || 0;
  if (n > No) {
    const r = t.i, s = r && os(r.type);
    return Cn(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Yt = /* @__PURE__ */ new Map();
if (process.env.NODE_ENV !== "production") {
  const e = Ft();
  e.__VUE_HMR_RUNTIME__ || (e.__VUE_HMR_RUNTIME__ = {
    createRecord: Xt(Ao),
    rerender: Xt(Do),
    reload: Xt(Po)
  });
}
const Ct = /* @__PURE__ */ new Map();
function Ao(e, t) {
  return Ct.has(e) ? !1 : (Ct.set(e, {
    initialDef: At(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function At(e) {
  return as(e) ? e.__vccOpts : e;
}
function Do(e, t) {
  const n = Ct.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, At(r.type).render = t), r.renderCache = [], r.job.flags & 8 || r.update();
  }));
}
function Po(e, t) {
  const n = Ct.get(e);
  if (!n) return;
  t = At(t), Kn(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = At(o.type);
    let a = Yt.get(i);
    a || (i !== n.initialDef && Kn(i, t), Yt.set(i, a = /* @__PURE__ */ new Set())), a.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (a.add(o), o.ceReload(t.styles), a.delete(o)) : o.parent ? Kr(() => {
      o.job.flags & 8 || (o.parent.update(), a.delete(o));
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  Jr(() => {
    Yt.clear();
  });
}
function Kn(e, t) {
  be(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Xt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ve, bt = [];
function Xr(e, t) {
  var n, r;
  Ve = e, Ve ? (Ve.enabled = !0, bt.forEach(({ event: s, args: o }) => Ve.emit(s, ...o)), bt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Xr(o, t);
  }), setTimeout(() => {
    Ve || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, bt = []);
  }, 3e3)) : bt = [];
}
let rt = null, ko = null;
function Fe(e, t) {
  return process.env.NODE_ENV !== "production" && V("withDirectives can only be used inside render functions."), e;
}
const Vo = (e) => e.__isTeleport;
function Zr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
Ft().requestIdleCallback;
Ft().cancelIdleCallback;
function Fo(e, t, n = X, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Be();
      const a = ti(n), l = Tn(t, n, e, i);
      return a(), qe(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Bs(Nn[e].replace(/ hook$/, ""));
    V(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const An = (e) => (t, n = X) => {
  (!ot || e === "sp") && Fo(e, (...r) => t(...r), n);
}, Io = An("bm"), Qr = An("m"), Lo = An(
  "bum"
), jo = Symbol.for("v-ndc");
function Ie(e, t, n, r) {
  let s;
  const o = n, i = C(e);
  if (i || ee(e)) {
    const a = i && Oe(e);
    let l = !1, f = !1;
    a && (l = !z(e), f = te(e), e = It(e)), s = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      s[d] = t(
        l ? f ? xt(F(e[d])) : F(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && V(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (M(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const d = a[l];
        s[l] = t(e[d], d, l, o);
      }
    }
  else
    s = [];
  return s;
}
const Uo = {};
process.env.NODE_ENV !== "production" && (Uo.ownKeys = (e) => (V(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
let Mo = null;
function Wn(e, t) {
  if (!X)
    process.env.NODE_ENV !== "production" && V("provide() can only be used inside setup().");
  else {
    let n = X.provides;
    const r = X.parent && X.parent.provides;
    r === n && (n = X.provides = Object.create(r)), n[e] = t;
  }
}
function un(e, t, n = !1) {
  const r = kn();
  if (r || Mo) {
    let s = r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && V(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && V("inject() can only be used inside setup() or functional components.");
}
const Ho = {}, es = (e) => Object.getPrototypeOf(e) === Ho, Bo = Jo, qo = Symbol.for("v-scx"), zo = () => {
  {
    const e = un(qo);
    return e || process.env.NODE_ENV !== "production" && V(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function st(e, t, n) {
  return process.env.NODE_ENV !== "production" && !I(t) && V(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ko(e, t, n);
}
function Ko(e, t, n = Qe) {
  const { immediate: r, deep: s, flush: o, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (r !== void 0 && V(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && V(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && V(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = be({}, n);
  process.env.NODE_ENV !== "production" && (a.onWarn = V);
  const l = t && r || !t && o !== "post";
  let f;
  if (ot) {
    if (o === "sync") {
      const m = zo();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = Ue, m.resume = Ue, m.pause = Ue, m;
    }
  }
  const d = X;
  a.call = (m, u, y) => Tn(m, d, u, y);
  let c = !1;
  o === "post" ? a.scheduler = (m) => {
    Bo(m, d && d.suspense);
  } : o !== "sync" && (c = !0, a.scheduler = (m, u) => {
    u ? m() : Kr(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = _o(e, t, a);
  return ot && (f ? f.push(h) : l && h()), h;
}
const Wo = (e) => e.__isSuspense;
function Jo(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Jr(e);
}
const oe = Symbol.for("v-fgt"), Go = Symbol.for("v-txt"), fn = Symbol.for("v-cmt"), _t = [];
let Z = null;
function R(e = !1) {
  _t.push(Z = e ? null : []);
}
function Yo() {
  _t.pop(), Z = _t[_t.length - 1] || null;
}
function ts(e) {
  return e.dynamicChildren = Z || js, Yo(), Z && Z.push(e), e;
}
function N(e, t, n, r, s, o) {
  return ts(
    $(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function dn(e, t, n, r, s) {
  return ts(
    Dn(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Zo = (...e) => rs(
  ...e
), ns = ({ key: e }) => e ?? null, Et = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ee(e) || H(e) || I(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function $(e, t = null, n = null, r = 0, s = null, o = e === oe ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ns(t),
    ref: t && Et(t),
    scopeId: ko,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: rt
  };
  return a ? (Pn(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && V("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !i && // has current parent block
  Z && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Z.push(l), l;
}
const Dn = process.env.NODE_ENV !== "production" ? Zo : rs;
function rs(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === jo) && (process.env.NODE_ENV !== "production" && !e && V(`Invalid vnode type when creating vnode: ${e}.`), e = fn), Xo(e)) {
    const a = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pn(a, n), !o && Z && (a.shapeFlag & 6 ? Z[Z.indexOf(e)] = a : Z.push(a)), a.patchFlag = -2, a;
  }
  if (as(e) && (e = e.__vccOpts), t) {
    t = Qo(t);
    let { class: a, style: l } = t;
    a && !ee(a) && (t.class = Sn(a)), M(l) && ($t(l) && !C(l) && (l = be({}, l)), t.style = vn(l));
  }
  const i = ee(e) ? 1 : Wo(e) ? 128 : Vo(e) ? 64 : M(e) ? 4 : I(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && $t(e) && (e = v(e), V(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), $(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Qo(e) {
  return e ? $t(e) || es(e) ? be({}, e) : e : null;
}
function Dt(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, f = t ? ei(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && ns(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? C(o) ? o.concat(Et(t)) : [o, Et(t)] : Et(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && C(a) ? a.map(ss) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== oe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Zr(
    d,
    l.clone(d)
  ), d;
}
function ss(e) {
  const t = Dt(e);
  return C(e.children) && (t.children = e.children.map(ss)), t;
}
function pn(e = " ", t = 0) {
  return Dn(Go, null, e, t);
}
function ge(e = "", t = !1) {
  return t ? (R(), dn(fn, null, e)) : Dn(fn, null, e);
}
function Pn(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Pn(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !es(t) && (t._ctx = rt);
  else I(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [pn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ei(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Sn([t.class, r.class]));
      else if (s === "style")
        t.style = vn([t.style, r.style]);
      else if (Us(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(C(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let X = null;
const kn = () => X || rt;
let hn;
{
  const e = Ft(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  hn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => X = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => ot = n
  );
}
const ti = (e) => {
  const t = X;
  return hn(e), e.scope.on(), () => {
    e.scope.off(), hn(t);
  };
};
let ot = !1;
process.env.NODE_ENV;
const ni = /(?:^|[-_])\w/g, ri = (e) => e.replace(ni, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function os(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function is(e, t, n = !1) {
  let r = os(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? ri(r) : n ? "App" : "Anonymous";
}
function as(e) {
  return I(e) && "__vccOpts" in e;
}
const T = (e, t) => {
  const n = bo(e, t, ot);
  if (process.env.NODE_ENV !== "production") {
    const r = kn();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function si() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!M(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (H(c)) {
        Be();
        const h = c.value;
        return qe(), [
          "div",
          {},
          ["span", e, d(c)],
          "<",
          a(h),
          ">"
        ];
      } else {
        if (Oe(c))
          return [
            "div",
            {},
            ["span", e, z(c) ? "ShallowReactive" : "Reactive"],
            "<",
            a(c),
            `>${te(c) ? " (readonly)" : ""}`
          ];
        if (te(c))
          return [
            "div",
            {},
            ["span", e, z(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const h = [];
    c.type.props && c.props && h.push(i("props", v(c.props))), c.setupState !== Qe && h.push(i("setup", c.setupState)), c.data !== Qe && h.push(i("data", v(c.data)));
    const m = l(c, "computed");
    m && h.push(i("computed", m));
    const u = l(c, "inject");
    return u && h.push(i("injected", u)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), h;
  }
  function i(c, h) {
    return h = be({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          a(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, h = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : M(c) ? ["object", { object: h ? v(c) : c }] : ["span", n, String(c)];
  }
  function l(c, h) {
    const m = c.type;
    if (I(m))
      return;
    const u = {};
    for (const y in c.ctx)
      f(m, y, h) && (u[y] = c.ctx[y]);
    return u;
  }
  function f(c, h, m) {
    const u = c[m];
    if (C(u) && u.includes(h) || M(u) && h in u || c.extends && f(c.extends, h, m) || c.mixins && c.mixins.some((y) => f(y, h, m)))
      return !0;
  }
  function d(c) {
    return z(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const oi = process.env.NODE_ENV !== "production" ? V : Ue;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ii;
const Jn = typeof window < "u" && window.trustedTypes;
if (Jn)
  try {
    ii = /* @__PURE__ */ Jn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && oi(`Error creating trusted types policy: ${e}`);
  }
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Ge(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const Gn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => qs(t, n) : t;
};
function ai(e) {
  e.target.composing = !0;
}
function Yn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Zt = Symbol("_assign"), Le = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[Zt] = Gn(s);
    const o = r || s.props && s.props.type === "number";
    Ge(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), o && (a = Un(a)), e[Zt](a);
    }), n && Ge(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ge(e, "compositionstart", ai), Ge(e, "compositionend", Yn), Ge(e, "change", Yn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[Zt] = Gn(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Un(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l));
  }
};
/**
* vue v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ci() {
  si();
}
process.env.NODE_ENV !== "production" && ci();
function cs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: li } = Object.prototype, { getPrototypeOf: Vn } = Object, { iterator: jt, toStringTag: ls } = Symbol, Ut = /* @__PURE__ */ ((e) => (t) => {
  const n = li.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ne = (e) => (e = e.toLowerCase(), (t) => Ut(t) === e), Mt = (e) => (t) => typeof t === e, { isArray: ze } = Array, He = Mt("undefined");
function at(e) {
  return e !== null && !He(e) && e.constructor !== null && !He(e.constructor) && W(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const us = ne("ArrayBuffer");
function ui(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && us(e.buffer), t;
}
const fi = Mt("string"), W = Mt("function"), fs = Mt("number"), ct = (e) => e !== null && typeof e == "object", di = (e) => e === !0 || e === !1, vt = (e) => {
  if (Ut(e) !== "object")
    return !1;
  const t = Vn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ls in e) && !(jt in e);
}, pi = (e) => {
  if (!ct(e) || at(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, hi = ne("Date"), mi = ne("File"), gi = ne("Blob"), yi = ne("FileList"), bi = (e) => ct(e) && W(e.pipe), wi = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || W(e.append) && ((t = Ut(e)) === "formdata" || // detect form-data instance
  t === "object" && W(e.toString) && e.toString() === "[object FormData]"));
}, _i = ne("URLSearchParams"), [Ei, vi, Si, Ri] = ["ReadableStream", "Request", "Response", "Headers"].map(ne), Oi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), ze(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (at(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function ds(e, t) {
  if (at(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const ve = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ps = (e) => !He(e) && e !== ve;
function mn() {
  const { caseless: e, skipUndefined: t } = ps(this) && this || {}, n = {}, r = (s, o) => {
    const i = e && ds(n, o) || o;
    vt(n[i]) && vt(s) ? n[i] = mn(n[i], s) : vt(s) ? n[i] = mn({}, s) : ze(s) ? n[i] = s.slice() : (!t || !He(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && lt(arguments[s], r);
  return n;
}
const $i = (e, t, n, { allOwnKeys: r } = {}) => (lt(t, (s, o) => {
  n && W(s) ? e[o] = cs(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), xi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ni = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ti = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Vn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ci = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ai = (e) => {
  if (!e) return null;
  if (ze(e)) return e;
  let t = e.length;
  if (!fs(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Di = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Vn(Uint8Array)), Pi = (e, t) => {
  const r = (e && e[jt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, ki = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Vi = ne("HTMLFormElement"), Fi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Xn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ii = ne("RegExp"), hs = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  lt(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Li = (e) => {
  hs(e, (t, n) => {
    if (W(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (W(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ji = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return ze(e) ? r(e) : r(String(e).split(t)), n;
}, Ui = () => {
}, Mi = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Hi(e) {
  return !!(e && W(e.append) && e[ls] === "FormData" && e[jt]);
}
const Bi = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ct(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (at(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = ze(r) ? [] : {};
        return lt(r, (i, a) => {
          const l = n(i, s + 1);
          !He(l) && (o[a] = l);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, qi = ne("AsyncFunction"), zi = (e) => e && (ct(e) || W(e)) && W(e.then) && W(e.catch), ms = ((e, t) => e ? setImmediate : t ? ((n, r) => (ve.addEventListener("message", ({ source: s, data: o }) => {
  s === ve && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), ve.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  W(ve.postMessage)
), Ki = typeof queueMicrotask < "u" ? queueMicrotask.bind(ve) : typeof process < "u" && process.nextTick || ms, Wi = (e) => e != null && W(e[jt]), p = {
  isArray: ze,
  isArrayBuffer: us,
  isBuffer: at,
  isFormData: wi,
  isArrayBufferView: ui,
  isString: fi,
  isNumber: fs,
  isBoolean: di,
  isObject: ct,
  isPlainObject: vt,
  isEmptyObject: pi,
  isReadableStream: Ei,
  isRequest: vi,
  isResponse: Si,
  isHeaders: Ri,
  isUndefined: He,
  isDate: hi,
  isFile: mi,
  isBlob: gi,
  isRegExp: Ii,
  isFunction: W,
  isStream: bi,
  isURLSearchParams: _i,
  isTypedArray: Di,
  isFileList: yi,
  forEach: lt,
  merge: mn,
  extend: $i,
  trim: Oi,
  stripBOM: xi,
  inherits: Ni,
  toFlatObject: Ti,
  kindOf: Ut,
  kindOfTest: ne,
  endsWith: Ci,
  toArray: Ai,
  forEachEntry: Pi,
  matchAll: ki,
  isHTMLForm: Vi,
  hasOwnProperty: Xn,
  hasOwnProp: Xn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hs,
  freezeMethods: Li,
  toObjectSet: ji,
  toCamelCase: Fi,
  noop: Ui,
  toFiniteNumber: Mi,
  findKey: ds,
  global: ve,
  isContextDefined: ps,
  isSpecCompliantForm: Hi,
  toJSONObject: Bi,
  isAsyncFn: qi,
  isThenable: zi,
  setImmediate: ms,
  asap: Ki,
  isIterable: Wi
};
function E(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
p.inherits(E, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const gs = E.prototype, ys = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ys[e] = { value: e };
});
Object.defineProperties(E, ys);
Object.defineProperty(gs, "isAxiosError", { value: !0 });
E.from = (e, t, n, r, s, o) => {
  const i = Object.create(gs);
  p.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (f) => f !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", l = t == null && e ? e.code : t;
  return E.call(i, a, l, n, r, s), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", o && Object.assign(i, o), i;
};
const Ji = null;
function gn(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function bs(e) {
  return p.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zn(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = bs(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Gi(e) {
  return p.isArray(e) && !e.some(gn);
}
const Yi = p.toFlatObject(p, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ht(e, t, n) {
  if (!p.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, g) {
    return !p.isUndefined(g[y]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(t);
  if (!p.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(u) {
    if (u === null) return "";
    if (p.isDate(u))
      return u.toISOString();
    if (p.isBoolean(u))
      return u.toString();
    if (!l && p.isBlob(u))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(u) || p.isTypedArray(u) ? l && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function d(u, y, g) {
    let w = u;
    if (u && !g && typeof u == "object") {
      if (p.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), u = JSON.stringify(u);
      else if (p.isArray(u) && Gi(u) || (p.isFileList(u) || p.endsWith(y, "[]")) && (w = p.toArray(u)))
        return y = bs(y), w.forEach(function(O, b) {
          !(p.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Zn([y], b, o) : i === null ? y : y + "[]",
            f(O)
          );
        }), !1;
    }
    return gn(u) ? !0 : (t.append(Zn(g, y, o), f(u)), !1);
  }
  const c = [], h = Object.assign(Yi, {
    defaultVisitor: d,
    convertValue: f,
    isVisitable: gn
  });
  function m(u, y) {
    if (!p.isUndefined(u)) {
      if (c.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      c.push(u), p.forEach(u, function(w, A) {
        (!(p.isUndefined(w) || w === null) && s.call(
          t,
          w,
          p.isString(A) ? A.trim() : A,
          y,
          h
        )) === !0 && m(w, y ? y.concat(A) : [A]);
      }), c.pop();
    }
  }
  if (!p.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Qn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Fn(e, t) {
  this._pairs = [], e && Ht(e, this, t);
}
const ws = Fn.prototype;
ws.append = function(t, n) {
  this._pairs.push([t, n]);
};
ws.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Qn);
  } : Qn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Xi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function _s(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Xi;
  p.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = p.isURLSearchParams(t) ? t.toString() : new Fn(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class er {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    p.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Es = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Zi = typeof URLSearchParams < "u" ? URLSearchParams : Fn, Qi = typeof FormData < "u" ? FormData : null, ea = typeof Blob < "u" ? Blob : null, ta = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Zi,
    FormData: Qi,
    Blob: ea
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, In = typeof window < "u" && typeof document < "u", yn = typeof navigator == "object" && navigator || void 0, na = In && (!yn || ["ReactNative", "NativeScript", "NS"].indexOf(yn.product) < 0), ra = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", sa = In && window.location.href || "http://localhost", oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: In,
  hasStandardBrowserEnv: na,
  hasStandardBrowserWebWorkerEnv: ra,
  navigator: yn,
  origin: sa
}, Symbol.toStringTag, { value: "Module" })), U = {
  ...oa,
  ...ta
};
function ia(e, t) {
  return Ht(e, new U.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return U.isNode && p.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function aa(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ca(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function vs(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = o >= n.length;
    return i = !i && p.isArray(s) ? s.length : i, l ? (p.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !p.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && p.isArray(s[i]) && (s[i] = ca(s[i])), !a);
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const n = {};
    return p.forEachEntry(e, (r, s) => {
      t(aa(r), s, n, 0);
    }), n;
  }
  return null;
}
function la(e, t, n) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ut = {
  transitional: Es,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = p.isObject(t);
    if (o && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))
      return s ? JSON.stringify(vs(t)) : t;
    if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t) || p.isReadableStream(t))
      return t;
    if (p.isArrayBufferView(t))
      return t.buffer;
    if (p.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ia(t, this.formSerializer).toString();
      if ((a = p.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ht(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), la(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ut.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (p.isResponse(t) || p.isReadableStream(t))
      return t;
    if (t && p.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? E.from(a, E.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: U.classes.FormData,
    Blob: U.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
p.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ut.headers[e] = {};
});
const ua = p.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), fa = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && ua[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, tr = Symbol("internals");
function Ye(e) {
  return e && String(e).trim().toLowerCase();
}
function St(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(St) : String(e);
}
function da(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const pa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qt(e, t, n, r, s) {
  if (p.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!p.isString(t)) {
    if (p.isString(r))
      return t.indexOf(r) !== -1;
    if (p.isRegExp(r))
      return r.test(t);
  }
}
function ha(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ma(e, t) {
  const n = p.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let J = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, l, f) {
      const d = Ye(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const c = p.findKey(s, d);
      (!c || s[c] === void 0 || f === !0 || f === void 0 && s[c] !== !1) && (s[c || l] = St(a));
    }
    const i = (a, l) => p.forEach(a, (f, d) => o(f, d, l));
    if (p.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (p.isString(t) && (t = t.trim()) && !pa(t))
      i(fa(t), n);
    else if (p.isObject(t) && p.isIterable(t)) {
      let a = {}, l, f;
      for (const d of t) {
        if (!p.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = d[0]] = (l = a[f]) ? p.isArray(l) ? [...l, d[1]] : [l, d[1]] : d[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ye(t), t) {
      const r = p.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return da(s);
        if (p.isFunction(n))
          return n.call(this, s, r);
        if (p.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ye(t), t) {
      const r = p.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Qt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Ye(i), i) {
        const a = p.findKey(r, i);
        a && (!n || Qt(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return p.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Qt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return p.forEach(this, (s, o) => {
      const i = p.findKey(r, o);
      if (i) {
        n[i] = St(s), delete n[o];
        return;
      }
      const a = t ? ha(o) : String(o).trim();
      a !== o && delete n[o], n[a] = St(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && p.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[tr] = this[tr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Ye(i);
      r[a] || (ma(s, i), r[a] = !0);
    }
    return p.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
J.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(J.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
p.freezeMethods(J);
function en(e, t) {
  const n = this || ut, r = t || n, s = J.from(r.headers);
  let o = r.data;
  return p.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ss(e) {
  return !!(e && e.__CANCEL__);
}
function Ke(e, t, n) {
  E.call(this, e ?? "canceled", E.ERR_CANCELED, t, n), this.name = "CanceledError";
}
p.inherits(Ke, E, {
  __CANCEL__: !0
});
function Rs(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new E(
    "Request failed with status code " + n.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ga(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ya(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const f = Date.now(), d = r[o];
    i || (i = f), n[s] = l, r[s] = f;
    let c = o, h = 0;
    for (; c !== s; )
      h += n[c++], c = c % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const m = d && f - d;
    return m ? Math.round(h * 1e3 / m) : void 0;
  };
}
function ba(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (f, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...f);
  };
  return [(...f) => {
    const d = Date.now(), c = d - n;
    c >= r ? i(f, d) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - c)));
  }, () => s && i(s)];
}
const Pt = (e, t, n = 3) => {
  let r = 0;
  const s = ya(50, 250);
  return ba((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - r, f = s(l), d = i <= a;
    r = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && a && d ? (a - i) / f : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, nr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, rr = (e) => (...t) => p.asap(() => e(...t)), wa = U.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, U.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(U.origin),
  U.navigator && /(msie|trident)/i.test(U.navigator.userAgent)
) : () => !0, _a = U.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      p.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), p.isString(r) && i.push("path=" + r), p.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ea(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function va(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Os(e, t, n) {
  let r = !Ea(t);
  return e && (r || n == !1) ? va(e, t) : t;
}
const sr = (e) => e instanceof J ? { ...e } : e;
function Ne(e, t) {
  t = t || {};
  const n = {};
  function r(f, d, c, h) {
    return p.isPlainObject(f) && p.isPlainObject(d) ? p.merge.call({ caseless: h }, f, d) : p.isPlainObject(d) ? p.merge({}, d) : p.isArray(d) ? d.slice() : d;
  }
  function s(f, d, c, h) {
    if (p.isUndefined(d)) {
      if (!p.isUndefined(f))
        return r(void 0, f, c, h);
    } else return r(f, d, c, h);
  }
  function o(f, d) {
    if (!p.isUndefined(d))
      return r(void 0, d);
  }
  function i(f, d) {
    if (p.isUndefined(d)) {
      if (!p.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, d);
  }
  function a(f, d, c) {
    if (c in t)
      return r(f, d);
    if (c in e)
      return r(void 0, f);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (f, d, c) => s(sr(f), sr(d), c, !0)
  };
  return p.forEach(Object.keys({ ...e, ...t }), function(d) {
    const c = l[d] || s, h = c(e[d], t[d], d);
    p.isUndefined(h) && c !== a || (n[d] = h);
  }), n;
}
const $s = (e) => {
  const t = Ne({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  if (t.headers = i = J.from(i), t.url = _s(Os(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), p.isFormData(n)) {
    if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (p.isFunction(n.getHeaders)) {
      const l = n.getHeaders(), f = ["content-type", "content-length"];
      Object.entries(l).forEach(([d, c]) => {
        f.includes(d.toLowerCase()) && i.set(d, c);
      });
    }
  }
  if (U.hasStandardBrowserEnv && (r && p.isFunction(r) && (r = r(t)), r || r !== !1 && wa(t.url))) {
    const l = s && o && _a.read(o);
    l && i.set(s, l);
  }
  return t;
}, Sa = typeof XMLHttpRequest < "u", Ra = Sa && function(e) {
  return new Promise(function(n, r) {
    const s = $s(e);
    let o = s.data;
    const i = J.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: f } = s, d, c, h, m, u;
    function y() {
      m && m(), u && u(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let g = new XMLHttpRequest();
    g.open(s.method.toUpperCase(), s.url, !0), g.timeout = s.timeout;
    function w() {
      if (!g)
        return;
      const O = J.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: O,
        config: e,
        request: g
      };
      Rs(function(k) {
        n(k), y();
      }, function(k) {
        r(k), y();
      }, x), g = null;
    }
    "onloadend" in g ? g.onloadend = w : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, g.onabort = function() {
      g && (r(new E("Request aborted", E.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(b) {
      const x = b && b.message ? b.message : "Network Error", B = new E(x, E.ERR_NETWORK, e, g);
      B.event = b || null, r(B), g = null;
    }, g.ontimeout = function() {
      let b = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || Es;
      s.timeoutErrorMessage && (b = s.timeoutErrorMessage), r(new E(
        b,
        x.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        e,
        g
      )), g = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in g && p.forEach(i.toJSON(), function(b, x) {
      g.setRequestHeader(x, b);
    }), p.isUndefined(s.withCredentials) || (g.withCredentials = !!s.withCredentials), a && a !== "json" && (g.responseType = s.responseType), f && ([h, u] = Pt(f, !0), g.addEventListener("progress", h)), l && g.upload && ([c, m] = Pt(l), g.upload.addEventListener("progress", c), g.upload.addEventListener("loadend", m)), (s.cancelToken || s.signal) && (d = (O) => {
      g && (r(!O || O.type ? new Ke(null, e, g) : O), g.abort(), g = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const A = ga(s.url);
    if (A && U.protocols.indexOf(A) === -1) {
      r(new E("Unsupported protocol " + A + ":", E.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(o || null);
  });
}, Oa = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, a();
        const d = f instanceof Error ? f : this.reason;
        r.abort(d instanceof E ? d : new Ke(d instanceof Error ? d.message : d));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new E(`timeout ${t} of ms exceeded`, E.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: l } = r;
    return l.unsubscribe = () => p.asap(a), l;
  }
}, $a = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, xa = async function* (e, t) {
  for await (const n of Na(e))
    yield* $a(n, t);
}, Na = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, or = (e, t, n, r) => {
  const s = xa(e, t);
  let o = 0, i, a = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: f, value: d } = await s.next();
        if (f) {
          a(), l.close();
          return;
        }
        let c = d.byteLength;
        if (n) {
          let h = o += c;
          n(h);
        }
        l.enqueue(new Uint8Array(d));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(l) {
      return a(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, ir = 64 * 1024, { isFunction: wt } = p, Ta = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(p.global), {
  ReadableStream: ar,
  TextEncoder: cr
} = p.global, lr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ca = (e) => {
  e = p.merge.call({
    skipUndefined: !0
  }, Ta, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? wt(t) : typeof fetch == "function", o = wt(n), i = wt(r);
  if (!s)
    return !1;
  const a = s && wt(ar), l = s && (typeof cr == "function" ? /* @__PURE__ */ ((u) => (y) => u.encode(y))(new cr()) : async (u) => new Uint8Array(await new n(u).arrayBuffer())), f = o && a && lr(() => {
    let u = !1;
    const y = new n(U.origin, {
      body: new ar(),
      method: "POST",
      get duplex() {
        return u = !0, "half";
      }
    }).headers.has("Content-Type");
    return u && !y;
  }), d = i && a && lr(() => p.isReadableStream(new r("").body)), c = {
    stream: d && ((u) => u.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
    !c[u] && (c[u] = (y, g) => {
      let w = y && y[u];
      if (w)
        return w.call(y);
      throw new E(`Response type '${u}' is not supported`, E.ERR_NOT_SUPPORT, g);
    });
  });
  const h = async (u) => {
    if (u == null)
      return 0;
    if (p.isBlob(u))
      return u.size;
    if (p.isSpecCompliantForm(u))
      return (await new n(U.origin, {
        method: "POST",
        body: u
      }).arrayBuffer()).byteLength;
    if (p.isArrayBufferView(u) || p.isArrayBuffer(u))
      return u.byteLength;
    if (p.isURLSearchParams(u) && (u = u + ""), p.isString(u))
      return (await l(u)).byteLength;
  }, m = async (u, y) => {
    const g = p.toFiniteNumber(u.getContentLength());
    return g ?? h(y);
  };
  return async (u) => {
    let {
      url: y,
      method: g,
      data: w,
      signal: A,
      cancelToken: O,
      timeout: b,
      onDownloadProgress: x,
      onUploadProgress: B,
      responseType: k,
      headers: we,
      withCredentials: Ae = "same-origin",
      fetchOptions: ft
    } = $s(u), De = t || fetch;
    k = k ? (k + "").toLowerCase() : "text";
    let fe = Oa([A, O && O.toAbortSignal()], b), _e = null;
    const ae = fe && fe.unsubscribe && (() => {
      fe.unsubscribe();
    });
    let We;
    try {
      if (B && f && g !== "get" && g !== "head" && (We = await m(we, w)) !== 0) {
        let j = new n(y, {
          method: "POST",
          body: w,
          duplex: "half"
        }), q;
        if (p.isFormData(w) && (q = j.headers.get("content-type")) && we.setContentType(q), j.body) {
          const [qt, ht] = nr(
            We,
            Pt(rr(B))
          );
          w = or(j.body, ir, qt, ht);
        }
      }
      p.isString(Ae) || (Ae = Ae ? "include" : "omit");
      const G = o && "credentials" in n.prototype, dt = {
        ...ft,
        signal: fe,
        method: g.toUpperCase(),
        headers: we.normalize().toJSON(),
        body: w,
        duplex: "half",
        credentials: G ? Ae : void 0
      };
      _e = o && new n(y, dt);
      let re = await (o ? De(_e, ft) : De(y, dt));
      const pt = d && (k === "stream" || k === "response");
      if (d && (x || pt && ae)) {
        const j = {};
        ["status", "statusText", "headers"].forEach((jn) => {
          j[jn] = re[jn];
        });
        const q = p.toFiniteNumber(re.headers.get("content-length")), [qt, ht] = x && nr(
          q,
          Pt(rr(x), !0)
        ) || [];
        re = new r(
          or(re.body, ir, qt, () => {
            ht && ht(), ae && ae();
          }),
          j
        );
      }
      k = k || "text";
      let D = await c[p.findKey(c, k) || "text"](re, u);
      return !pt && ae && ae(), await new Promise((j, q) => {
        Rs(j, q, {
          data: D,
          headers: J.from(re.headers),
          status: re.status,
          statusText: re.statusText,
          config: u,
          request: _e
        });
      });
    } catch (G) {
      throw ae && ae(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new E("Network Error", E.ERR_NETWORK, u, _e),
        {
          cause: G.cause || G
        }
      ) : E.from(G, G && G.code, u, _e);
    }
  };
}, Aa = /* @__PURE__ */ new Map(), xs = (e) => {
  let t = e ? e.env : {};
  const { fetch: n, Request: r, Response: s } = t, o = [
    r,
    s,
    n
  ];
  let i = o.length, a = i, l, f, d = Aa;
  for (; a--; )
    l = o[a], f = d.get(l), f === void 0 && d.set(l, f = a ? /* @__PURE__ */ new Map() : Ca(t)), d = f;
  return f;
};
xs();
const bn = {
  http: Ji,
  xhr: Ra,
  fetch: {
    get: xs
  }
};
p.forEach(bn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ur = (e) => `- ${e}`, Da = (e) => p.isFunction(e) || e === null || e === !1, Ns = {
  getAdapter: (e, t) => {
    e = p.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, s;
    const o = {};
    for (let i = 0; i < n; i++) {
      r = e[i];
      let a;
      if (s = r, !Da(r) && (s = bn[(a = String(r)).toLowerCase()], s === void 0))
        throw new E(`Unknown adapter '${a}'`);
      if (s && (p.isFunction(s) || (s = s.get(t))))
        break;
      o[a || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(o).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = n ? i.length > 1 ? `since :
` + i.map(ur).join(`
`) : " " + ur(i[0]) : "as no adapter specified";
      throw new E(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: bn
};
function tn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ke(null, e);
}
function fr(e) {
  return tn(e), e.headers = J.from(e.headers), e.data = en.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ns.getAdapter(e.adapter || ut.adapter, e)(e).then(function(r) {
    return tn(e), r.data = en.call(
      e,
      e.transformResponse,
      r
    ), r.headers = J.from(r.headers), r;
  }, function(r) {
    return Ss(r) || (tn(e), r && r.response && (r.response.data = en.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = J.from(r.response.headers))), Promise.reject(r);
  });
}
const Ts = "1.12.2", Bt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const dr = {};
Bt.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ts + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new E(
        s(i, " has been removed" + (n ? " in " + n : "")),
        E.ERR_DEPRECATED
      );
    return n && !dr[i] && (dr[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
Bt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Pa(e, t, n) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], l = a === void 0 || i(a, o, e);
      if (l !== !0)
        throw new E("option " + o + " must be " + l, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new E("Unknown option " + o, E.ERR_BAD_OPTION);
  }
}
const Rt = {
  assertOptions: Pa,
  validators: Bt
}, se = Rt.validators;
let xe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new er(),
      response: new er()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ne(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Rt.assertOptions(r, {
      silentJSONParsing: se.transitional(se.boolean),
      forcedJSONParsing: se.transitional(se.boolean),
      clarifyTimeoutError: se.transitional(se.boolean)
    }, !1), s != null && (p.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Rt.assertOptions(s, {
      encode: se.function,
      serialize: se.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Rt.assertOptions(n, {
      baseUrl: se.spelling("baseURL"),
      withXsrfToken: se.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && p.merge(
      o.common,
      o[n.method]
    );
    o && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (u) => {
        delete o[u];
      }
    ), n.headers = J.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (l = l && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(y) {
      f.push(y.fulfilled, y.rejected);
    });
    let d, c = 0, h;
    if (!l) {
      const u = [fr.bind(this), void 0];
      for (u.unshift(...a), u.push(...f), h = u.length, d = Promise.resolve(n); c < h; )
        d = d.then(u[c++], u[c++]);
      return d;
    }
    h = a.length;
    let m = n;
    for (; c < h; ) {
      const u = a[c++], y = a[c++];
      try {
        m = u(m);
      } catch (g) {
        y.call(this, g);
        break;
      }
    }
    try {
      d = fr.call(this, m);
    } catch (u) {
      return Promise.reject(u);
    }
    for (c = 0, h = f.length; c < h; )
      d = d.then(f[c++], f[c++]);
    return d;
  }
  getUri(t) {
    t = Ne(this.defaults, t);
    const n = Os(t.baseURL, t.url, t.allowAbsoluteUrls);
    return _s(n, t.params, t.paramsSerializer);
  }
};
p.forEach(["delete", "get", "head", "options"], function(t) {
  xe.prototype[t] = function(n, r) {
    return this.request(Ne(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(Ne(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  xe.prototype[t] = n(), xe.prototype[t + "Form"] = n(!0);
});
let ka = class Cs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new Ke(o, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Cs(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Va(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Fa(e) {
  return p.isObject(e) && e.isAxiosError === !0;
}
const wn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(wn).forEach(([e, t]) => {
  wn[t] = e;
});
function As(e) {
  const t = new xe(e), n = cs(xe.prototype.request, t);
  return p.extend(n, xe.prototype, t, { allOwnKeys: !0 }), p.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return As(Ne(e, s));
  }, n;
}
const P = As(ut);
P.Axios = xe;
P.CanceledError = Ke;
P.CancelToken = ka;
P.isCancel = Ss;
P.VERSION = Ts;
P.toFormData = Ht;
P.AxiosError = E;
P.Cancel = P.CanceledError;
P.all = function(t) {
  return Promise.all(t);
};
P.spread = Va;
P.isAxiosError = Fa;
P.mergeConfig = Ne;
P.AxiosHeaders = J;
P.formToJSON = (e) => vs(p.isHTMLForm(e) ? new FormData(e) : e);
P.getAdapter = Ns.getAdapter;
P.HttpStatusCode = wn;
P.default = P;
const {
  Axios: Oc,
  AxiosError: $c,
  CanceledError: xc,
  isCancel: Nc,
  CancelToken: Tc,
  VERSION: Cc,
  all: Ac,
  Cancel: Dc,
  isAxiosError: Pc,
  spread: kc,
  toFormData: Vc,
  AxiosHeaders: Fc,
  HttpStatusCode: Ic,
  formToJSON: Lc,
  getAdapter: jc,
  mergeConfig: Uc
} = P;
function pr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pr(Object(n), !0).forEach(function(r) {
      Ia(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ia(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((n, r) => (t.includes(r) || (n[r] = _(e[r])), n), {});
}
function kt(e) {
  return typeof e == "function";
}
function La(e) {
  return Oe(e) || te(e);
}
function Ds(e, t, n) {
  let r = e;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    if (!r[s[o]]) return n;
    r = r[s[o]];
  }
  return r;
}
function nn(e, t, n) {
  return T(() => e.some((r) => Ds(t, r, {
    [n]: !1
  })[n]));
}
function mr(e, t, n) {
  return T(() => e.reduce((r, s) => {
    const o = Ds(t, s, {
      [n]: !1
    })[n] || [];
    return r.concat(o);
  }, []));
}
function Ps(e, t, n, r) {
  return e.call(r, _(t), _(n), r);
}
function ks(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function ja(e, t, n, r, s, o, i) {
  let {
    $lazy: a,
    $rewardEarly: l
  } = s, f = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], d = arguments.length > 8 ? arguments[8] : void 0, c = arguments.length > 9 ? arguments[9] : void 0, h = arguments.length > 10 ? arguments[10] : void 0;
  const m = L(!!r.value), u = L(0);
  n.value = !1;
  const y = st([t, r].concat(f, h), () => {
    if (a && !r.value || l && !c.value && !n.value)
      return;
    let g;
    try {
      g = Ps(e, t, d, i);
    } catch (w) {
      g = Promise.reject(w);
    }
    u.value++, n.value = !!u.value, m.value = !1, Promise.resolve(g).then((w) => {
      u.value--, n.value = !!u.value, o.value = w, m.value = ks(w);
    }).catch((w) => {
      u.value--, n.value = !!u.value, o.value = w, m.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: m,
    $unwatch: y
  };
}
function Ua(e, t, n, r, s, o, i, a) {
  let {
    $lazy: l,
    $rewardEarly: f
  } = r;
  const d = () => ({}), c = T(() => {
    if (l && !n.value || f && !a.value)
      return !1;
    let h = !0;
    try {
      const m = Ps(e, t, i, o);
      s.value = m, h = ks(m);
    } catch (m) {
      s.value = m;
    }
    return h;
  });
  return {
    $unwatch: d,
    $invalid: c
  };
}
function Ma(e, t, n, r, s, o, i, a, l, f, d) {
  const c = L(!1), h = e.$params || {}, m = L(null);
  let u, y;
  e.$async ? {
    $invalid: u,
    $unwatch: y
  } = ja(e.$validator, t, c, n, r, m, s, e.$watchTargets, l, f, d) : {
    $invalid: u,
    $unwatch: y
  } = Ua(e.$validator, t, n, r, m, s, l, f);
  const g = e.$message;
  return {
    $message: kt(g) ? T(() => g(hr({
      $pending: c,
      $invalid: u,
      $params: hr(h),
      $model: t,
      $response: m,
      $validator: o,
      $propertyPath: a,
      $property: i
    }))) : g || "",
    $params: h,
    $pending: c,
    $invalid: u,
    $response: m,
    $unwatch: y
  };
}
function Ha() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = _(e), n = Object.keys(t), r = {}, s = {}, o = {};
  let i = null;
  return n.forEach((a) => {
    const l = t[a];
    switch (!0) {
      case kt(l.$validator):
        r[a] = l;
        break;
      case kt(l):
        r[a] = {
          $validator: l
        };
        break;
      case a === "$validationGroups":
        i = l;
        break;
      case a.startsWith("$"):
        o[a] = l;
        break;
      default:
        s[a] = l;
    }
  }), {
    rules: r,
    nestedValidators: s,
    config: o,
    validationGroups: i
  };
}
const Ba = "__root";
function qa(e, t, n, r, s, o, i, a, l) {
  const f = Object.keys(e), d = r.get(s, e), c = L(!1), h = L(!1), m = L(0);
  if (d) {
    if (!d.$partial) return d;
    d.$unwatch(), c.value = d.$dirty.value;
  }
  const u = {
    $dirty: c,
    $path: s,
    $touch: () => {
      c.value || (c.value = !0);
    },
    $reset: () => {
      c.value && (c.value = !1);
    },
    $commit: () => {
    }
  };
  return f.length ? (f.forEach((y) => {
    u[y] = Ma(e[y], t, u.$dirty, o, i, y, n, s, l, h, m);
  }), u.$externalResults = T(() => a.value ? [].concat(a.value).map((y, g) => ({
    $propertyPath: s,
    $property: n,
    $validator: "$externalResults",
    $uid: `${s}-externalResult-${g}`,
    $message: y,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), u.$invalid = T(() => {
    const y = f.some((g) => _(u[g].$invalid));
    return h.value = y, !!u.$externalResults.value.length || y;
  }), u.$pending = T(() => f.some((y) => _(u[y].$pending))), u.$error = T(() => u.$dirty.value ? u.$pending.value || u.$invalid.value : !1), u.$silentErrors = T(() => f.filter((y) => _(u[y].$invalid)).map((y) => {
    const g = u[y];
    return it({
      $propertyPath: s,
      $property: n,
      $validator: y,
      $uid: `${s}-${y}`,
      $message: g.$message,
      $params: g.$params,
      $response: g.$response,
      $pending: g.$pending
    });
  }).concat(u.$externalResults.value)), u.$errors = T(() => u.$dirty.value ? u.$silentErrors.value : []), u.$unwatch = () => f.forEach((y) => {
    u[y].$unwatch();
  }), u.$commit = () => {
    h.value = !0, m.value = Date.now();
  }, r.set(s, e, u), u) : (d && r.set(s, e, u), u);
}
function za(e, t, n, r, s, o, i) {
  const a = Object.keys(e);
  return a.length ? a.reduce((l, f) => (l[f] = _n({
    validations: e[f],
    state: t,
    key: f,
    parentKey: n,
    resultsCache: r,
    globalConfig: s,
    instance: o,
    externalResults: i
  }), l), {}) : {};
}
function Ka(e, t, n) {
  const r = T(() => [t, n].filter((u) => u).reduce((u, y) => u.concat(Object.values(_(y))), [])), s = T({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((u) => u.$dirty) : !1);
    },
    set(u) {
      e.$dirty.value = u;
    }
  }), o = T(() => {
    const u = _(e.$silentErrors) || [], y = r.value.filter((g) => (_(g).$silentErrors || []).length).reduce((g, w) => g.concat(...w.$silentErrors), []);
    return u.concat(y);
  }), i = T(() => {
    const u = _(e.$errors) || [], y = r.value.filter((g) => (_(g).$errors || []).length).reduce((g, w) => g.concat(...w.$errors), []);
    return u.concat(y);
  }), a = T(() => r.value.some((u) => u.$invalid) || _(e.$invalid) || !1), l = T(() => r.value.some((u) => _(u.$pending)) || _(e.$pending) || !1), f = T(() => r.value.some((u) => u.$dirty) || r.value.some((u) => u.$anyDirty) || s.value), d = T(() => s.value ? l.value || a.value : !1), c = () => {
    e.$touch(), r.value.forEach((u) => {
      u.$touch();
    });
  }, h = () => {
    e.$commit(), r.value.forEach((u) => {
      u.$commit();
    });
  }, m = () => {
    e.$reset(), r.value.forEach((u) => {
      u.$reset();
    });
  };
  return r.value.length && r.value.every((u) => u.$dirty) && c(), {
    $dirty: s,
    $errors: i,
    $invalid: a,
    $anyDirty: f,
    $error: d,
    $pending: l,
    $touch: c,
    $reset: m,
    $silentErrors: o,
    $commit: h
  };
}
function _n(e) {
  let {
    validations: t,
    state: n,
    key: r,
    parentKey: s,
    childResults: o,
    resultsCache: i,
    globalConfig: a = {},
    instance: l,
    externalResults: f
  } = e;
  const d = s ? `${s}.${r}` : r, {
    rules: c,
    nestedValidators: h,
    config: m,
    validationGroups: u
  } = Ha(t), y = pe(pe({}, a), m), g = r ? T(() => {
    const D = _(n);
    return D ? _(D[r]) : void 0;
  }) : n, w = pe({}, _(f) || {}), A = T(() => {
    const D = _(f);
    return r ? D ? _(D[r]) : void 0 : D;
  }), O = qa(c, g, r, i, d, y, l, A, n), b = za(h, g, d, i, y, l, A), x = {};
  u && Object.entries(u).forEach((D) => {
    let [j, q] = D;
    x[j] = {
      $invalid: nn(q, b, "$invalid"),
      $error: nn(q, b, "$error"),
      $pending: nn(q, b, "$pending"),
      $errors: mr(q, b, "$errors"),
      $silentErrors: mr(q, b, "$silentErrors")
    };
  });
  const {
    $dirty: B,
    $errors: k,
    $invalid: we,
    $anyDirty: Ae,
    $error: ft,
    $pending: De,
    $touch: fe,
    $reset: _e,
    $silentErrors: ae,
    $commit: We
  } = Ka(O, b, o), G = r ? T({
    get: () => _(g),
    set: (D) => {
      B.value = !0;
      const j = _(n), q = _(f);
      q && (q[r] = w[r]), H(j[r]) ? j[r].value = D : j[r] = D;
    }
  }) : null;
  r && y.$autoDirty && st(g, () => {
    B.value || fe();
    const D = _(f);
    D && (D[r] = w[r]);
  }, {
    flush: "sync"
  });
  async function dt() {
    return fe(), y.$rewardEarly && (We(), await zn()), await zn(), new Promise((D) => {
      if (!De.value) return D(!we.value);
      const j = st(De, () => {
        D(!we.value), j();
      });
    });
  }
  function re(D) {
    return (o.value || {})[D];
  }
  function pt() {
    H(f) ? f.value = w : Object.keys(w).length === 0 ? Object.keys(f).forEach((D) => {
      delete f[D];
    }) : Object.assign(f, w);
  }
  return it(pe(pe(pe({}, O), {}, {
    $model: G,
    $dirty: B,
    $error: ft,
    $errors: k,
    $invalid: we,
    $anyDirty: Ae,
    $pending: De,
    $touch: fe,
    $reset: _e,
    $path: d || Ba,
    $silentErrors: ae,
    $validate: dt,
    $commit: We
  }, o && {
    $getResultsForChild: re,
    $clearExternalResults: pt,
    $validationGroups: x
  }), b));
}
class Wa {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(t, n, r) {
    this.storage.set(t, {
      rules: n,
      result: r
    });
  }
  checkRulesValidity(t, n, r) {
    const s = Object.keys(r), o = Object.keys(n);
    return o.length !== s.length || !o.every((a) => s.includes(a)) ? !1 : o.every((a) => n[a].$params ? Object.keys(n[a].$params).every((l) => _(r[a].$params[l]) === _(n[a].$params[l])) : !0);
  }
  get(t, n) {
    const r = this.storage.get(t);
    if (!r) return;
    const {
      rules: s,
      result: o
    } = r, i = this.checkRulesValidity(t, n, s), a = o.$unwatch ? o.$unwatch : () => ({});
    return i ? o : {
      $dirty: o.$dirty,
      $partial: !0,
      $unwatch: a
    };
  }
}
const Ot = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, gr = Symbol("vuelidate#injectChildResults"), yr = Symbol("vuelidate#removeChildResults");
function Ja(e) {
  let {
    $scope: t,
    instance: n
  } = e;
  const r = {}, s = L([]), o = T(() => s.value.reduce((d, c) => (d[c] = _(r[c]), d), {}));
  function i(d, c) {
    let {
      $registerAs: h,
      $scope: m,
      $stopPropagation: u
    } = c;
    u || t === Ot.COLLECT_NONE || m === Ot.COLLECT_NONE || t !== Ot.COLLECT_ALL && t !== m || (r[h] = d, s.value.push(h));
  }
  n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], i);
  function a(d) {
    s.value = s.value.filter((c) => c !== d), delete r[d];
  }
  n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], a);
  const l = un(gr, []);
  Wn(gr, n.__vuelidateInjectInstances);
  const f = un(yr, []);
  return Wn(yr, n.__vuelidateRemoveInstances), {
    childResults: o,
    sendValidationResultsToParent: l,
    removeValidationResultsFromParent: f
  };
}
function Vs(e) {
  return new Proxy(e, {
    get(t, n) {
      return typeof t[n] == "object" ? Vs(t[n]) : T(() => t[n]);
    }
  });
}
let br = 0;
function Fs(e, t) {
  var n;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: s,
    $scope: o = Ot.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: a,
    currentVueInstance: l
  } = r;
  const f = l || ((n = kn()) === null || n === void 0 ? void 0 : n.proxy), d = f ? f.$options : {};
  s || (br += 1, s = `_vuelidate_${br}`);
  const c = L({}), h = new Wa(), {
    childResults: m,
    sendValidationResultsToParent: u,
    removeValidationResultsFromParent: y
  } = f ? Ja({
    $scope: o,
    instance: f
  }) : {
    childResults: L({})
  };
  if (!e && d.validations) {
    const g = d.validations;
    t = L({}), Io(() => {
      t.value = f, st(() => kt(g) ? g.call(t.value, new Vs(t.value)) : g, (w) => {
        c.value = _n({
          validations: w,
          state: t,
          childResults: m,
          resultsCache: h,
          globalConfig: r,
          instance: f,
          externalResults: a || f.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), r = d.validationsConfig || r;
  } else {
    const g = H(e) || La(e) ? e : it(e || {});
    st(g, (w) => {
      c.value = _n({
        validations: w,
        state: t,
        childResults: m,
        resultsCache: h,
        globalConfig: r,
        instance: f ?? {},
        externalResults: a
      });
    }, {
      immediate: !0
    });
  }
  return f && (u.forEach((g) => g(c, {
    $registerAs: s,
    $scope: o,
    $stopPropagation: i
  })), Lo(() => y.forEach((g) => g(s)))), T(() => pe(pe({}, _(c.value)), m.value));
}
const Ln = (e) => {
  if (e = _(e), Array.isArray(e)) return !!e.length;
  if (e == null)
    return !1;
  if (e === !1)
    return !0;
  if (e instanceof Date)
    return !isNaN(e.getTime());
  if (typeof e == "object") {
    for (let t in e) return !0;
    return !1;
  }
  return !!String(e).length;
}, Ga = (e) => (e = _(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function Ce() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return (r) => (r = _(r), !Ln(r) || t.every((s) => (s.lastIndex = 0, s.test(r))));
}
Ce(/^[a-zA-Z]*$/);
Ce(/^[a-zA-Z0-9]*$/);
Ce(/^\d*(\.\d+)?$/);
const Ya = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
var Xa = Ce(Ya), Is = {
  $validator: Xa,
  $message: "Value is not a valid email address",
  $params: {
    type: "email"
  }
};
function Za(e) {
  return (t) => !Ln(t) || Ga(t) >= _(e);
}
function rn(e) {
  return {
    $validator: Za(e),
    $message: (t) => {
      let {
        $params: n
      } = t;
      return `This field should be at least ${n.min} characters long`;
    },
    $params: {
      min: e,
      type: "minLength"
    }
  };
}
function Qa(e) {
  return typeof e == "string" && (e = e.trim()), Ln(e);
}
var je = {
  $validator: Qa,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
const ec = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
Ce(ec);
Ce(/(^[0-9]*$)|(^-[0-9]+$)/);
Ce(/^[-]?\d*(\.\d+)?$/);
const tc = {
  key: 0,
  class: "text-red-500 mt-1"
}, nc = { class: "mb-4" }, rc = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, sc = { class: "mb-6" }, oc = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, ic = ["disabled"], wr = "api-key-change", ac = {
  __name: "LoginForm",
  props: {
    productName: {
      type: String,
      required: !0
    },
    baseUrl: {
      type: String,
      required: !0
    }
  },
  emits: [wr],
  setup(e, { emit: t }) {
    const n = e, r = t, s = L(""), o = L({
      email: "",
      password: ""
    }), a = Fs({
      email: { required: je, email: Is },
      password: { required: je }
    }, o), l = (d) => {
      r(wr, { key: d });
    }, f = async (d) => {
      d.preventDefault(), s.value = "";
      const c = {
        "credentials.email": o.value.email,
        "credentials.product": n.productName,
        password: o.value.password
      };
      try {
        let h, m;
        if (h = await P.get(`${n.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(c))}`), !h.data._items || h.data._items.length === 0) {
          s.value = "Invalid login";
          return;
        }
        m = h.data._items[0].key, l(m);
      } catch (h) {
        s.value = `${h}`;
      }
    };
    return Qr(() => {
      a.value.$touch();
    }), (d, c) => (R(), N(oe, null, [
      c[4] || (c[4] = $("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Login", -1)),
      s.value ? (R(), N("p", tc, ue(s.value), 1)) : ge("", !0),
      $("div", nc, [
        c[2] || (c[2] = $("label", {
          for: "email",
          class: "block text-gray-700 font-semibold"
        }, "Email", -1)),
        Fe($("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": c[0] || (c[0] = (h) => o.value.email = h),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [Le, o.value.email]
        ]),
        _(a).email.$errors.length ? (R(), N("div", rc, [
          (R(!0), N(oe, null, Ie(_(a).email.$errors, (h) => (R(), N("div", {
            key: h.$uid
          }, ue(h.$message), 1))), 128))
        ])) : ge("", !0)
      ]),
      $("div", sc, [
        c[3] || (c[3] = $("label", {
          for: "password",
          class: "block text-gray-700 font-semibold"
        }, "Password", -1)),
        Fe($("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": c[1] || (c[1] = (h) => o.value.password = h),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [Le, o.value.password]
        ]),
        _(a).password.$errors.length ? (R(), N("div", oc, [
          (R(!0), N(oe, null, Ie(_(a).password.$errors, (h) => (R(), N("div", {
            key: h.$uid
          }, ue(h.$message), 1))), 128))
        ])) : ge("", !0)
      ]),
      $("button", {
        onClick: f,
        disabled: _(a).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Login", 8, ic)
    ], 64));
  }
}, cc = {
  key: 0,
  class: "text-red-500 mt-1"
}, lc = { class: "mb-4" }, uc = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, fc = { class: "mb-4" }, dc = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, pc = { class: "mb-4" }, hc = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, mc = { class: "mb-6" }, gc = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, yc = ["disabled"], _r = "api-key-change", bc = {
  __name: "RegistrationForm",
  props: {
    productName: {
      type: String,
      required: !0
    },
    baseUrl: {
      type: String,
      required: !0
    }
  },
  emits: [_r],
  setup(e, { emit: t }) {
    const n = e, r = t, s = L(""), o = L(crypto.randomUUID()), i = L({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }), a = {
      firstName: { required: je, minLength: rn(2) },
      lastName: { required: je, minLength: rn(2) },
      email: { required: je, email: Is },
      password: { required: je, minLength: rn(8) }
    }, l = Fs(a, i), f = (c) => {
      r(_r, { key: c });
    }, d = async (c) => {
      c.preventDefault(), s.value = "";
      const h = {
        "credentials.email": i.value.email,
        "credentials.product": n.productName,
        password: i.value.password,
        key: o.value
      };
      try {
        let m;
        h.firstname = i.value.firstName, h.lastname = i.value.lastName, await P.post(`${n.baseUrl}/user`, h, {
          headers: { "Content-Type": "application/json" }
        }), m = h.key, f(m);
      } catch (m) {
        m.response?.status === 422 ? s.value = "User is already registered" : s.value = `${m}`;
      }
    };
    return Qr(() => {
      l.value.$touch();
    }), (c, h) => (R(), N(oe, null, [
      h[8] || (h[8] = $("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Registration", -1)),
      s.value ? (R(), N("p", cc, ue(s.value), 1)) : ge("", !0),
      $("div", lc, [
        h[4] || (h[4] = $("label", {
          for: "firstName",
          class: "block text-gray-700 font-semibold"
        }, "First Name", -1)),
        Fe($("input", {
          type: "text",
          id: "firstName",
          "onUpdate:modelValue": h[0] || (h[0] = (m) => i.value.firstName = m),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [Le, i.value.firstName]
        ]),
        _(l).firstName.$errors.length ? (R(), N("div", uc, [
          (R(!0), N(oe, null, Ie(_(l).firstName.$errors, (m) => (R(), N("div", {
            key: m.$uid
          }, ue(m.$message), 1))), 128))
        ])) : ge("", !0)
      ]),
      $("div", fc, [
        h[5] || (h[5] = $("label", {
          for: "lastName",
          class: "block text-gray-700 font-semibold"
        }, "Last Name", -1)),
        Fe($("input", {
          type: "text",
          id: "lastName",
          "onUpdate:modelValue": h[1] || (h[1] = (m) => i.value.lastName = m),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [Le, i.value.lastName]
        ]),
        _(l).lastName.$errors.length ? (R(), N("div", dc, [
          (R(!0), N(oe, null, Ie(_(l).lastName.$errors, (m) => (R(), N("div", {
            key: m.$uid
          }, ue(m.$message), 1))), 128))
        ])) : ge("", !0)
      ]),
      $("div", pc, [
        h[6] || (h[6] = $("label", {
          for: "email",
          class: "block text-gray-700 font-semibold"
        }, "Email", -1)),
        Fe($("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": h[2] || (h[2] = (m) => i.value.email = m),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [Le, i.value.email]
        ]),
        _(l).email.$errors.length ? (R(), N("div", hc, [
          (R(!0), N(oe, null, Ie(_(l).email.$errors, (m) => (R(), N("div", {
            key: m.$uid
          }, ue(m.$message), 1))), 128))
        ])) : ge("", !0)
      ]),
      $("div", mc, [
        h[7] || (h[7] = $("label", {
          for: "password",
          class: "block text-gray-700 font-semibold"
        }, "Password", -1)),
        Fe($("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": h[3] || (h[3] = (m) => i.value.password = m),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [Le, i.value.password]
        ]),
        _(l).password.$errors.length ? (R(), N("div", gc, [
          (R(!0), N(oe, null, Ie(_(l).password.$errors, (m) => (R(), N("div", {
            key: m.$uid
          }, ue(m.$message), 1))), 128))
        ])) : ge("", !0)
      ]),
      $("button", {
        onClick: d,
        disabled: _(l).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Let me in!", 8, yc)
    ], 64));
  }
}, wc = { class: "bg-white p-8 rounded-lg w-full max-w-2xl" }, _c = { class: "mt-4 text-center" }, Ec = {
  key: 0,
  class: "text-gray-600"
}, vc = {
  key: 1,
  class: "text-gray-700 font-regular"
}, Er = "api-key-change", Mc = {
  __name: "LoginOrRegistration",
  props: {
    productName: {
      type: String,
      required: !0
    },
    baseUrl: {
      type: String,
      required: !0
    }
  },
  emits: [Er],
  setup(e, { emit: t }) {
    const n = t, r = L(!0), s = (i) => {
      n(Er, i);
    }, o = () => {
      r.value = !r.value;
    };
    return (i, a) => (R(), N("div", wc, [
      r.value ? (R(), dn(ac, {
        key: 0,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        onApiKeyChange: s
      }, null, 8, ["product-name", "base-url"])) : (R(), dn(bc, {
        key: 1,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        onApiKeyChange: s
      }, null, 8, ["product-name", "base-url"])),
      $("div", _c, [
        r.value ? (R(), N("p", Ec, [
          a[0] || (a[0] = pn(" Don't have an account? ", -1)),
          $("button", {
            onClick: o,
            class: "text-indigo-500 hover:underline"
          }, "Registration")
        ])) : (R(), N("p", vc, [
          a[1] || (a[1] = pn(" Do you have an account? ", -1)),
          $("button", {
            onClick: o,
            class: "text-indigo-500 hover:underline"
          }, "Login")
        ]))
      ])
    ]));
  }
};
export {
  ac as LoginForm,
  Mc as LoginOrRegistration,
  bc as RegistrationForm
};
