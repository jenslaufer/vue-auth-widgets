(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.static{position:static}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.table{display:table}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-300{border-color:var(--color-gray-300)}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-indigo-500{color:var(--color-indigo-500)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){.hover\\:bg-indigo-600:hover{background-color:var(--color-indigo-600)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:border-indigo-500:focus{border-color:var(--color-indigo-500)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-indigo-500:focus{--tw-ring-color:var(--color-indigo-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-indigo-400:disabled{background-color:var(--color-indigo-400)}@media (min-width:40rem){.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
import { ref as h, onMounted as K, createElementBlock as l, openBlock as a, Fragment as p, createElementVNode as r, createCommentVNode as v, normalizeClass as i, toDisplayString as b, withDirectives as $, vModelText as k, unref as d, renderList as w, createBlock as L, createTextVNode as U } from "vue";
import V from "axios";
import { useVuelidate as B } from "@vuelidate/core";
import { required as N, email as I, minLength as x } from "@vuelidate/validators";
const D = { class: "mb-4" }, R = { class: "mb-6" }, F = ["disabled"], M = "api-key-change", T = {
  __name: "LoginForm",
  props: {
    productName: {
      type: String,
      required: !0
    },
    baseUrl: {
      type: String,
      required: !0
    },
    buttonClass: {
      type: String,
      required: !0
    },
    labelClass: {
      type: String,
      required: !0
    },
    inputClass: {
      type: String,
      required: !0
    },
    errorMessageClass: {
      type: String,
      required: !0
    },
    buttonLabel: {
      type: String,
      required: !0
    }
  },
  emits: [M],
  setup(e, { emit: q }) {
    const f = e, y = q, o = h(""), c = h({
      email: "",
      password: ""
    }), m = B({
      email: { required: N, email: I },
      password: { required: N }
    }, c), g = (C) => {
      y(M, { key: C });
    }, S = async (C) => {
      C.preventDefault(), o.value = "";
      const n = {
        "credentials.email": c.value.email,
        "credentials.product": f.productName,
        password: c.value.password
      };
      try {
        let s, t;
        if (s = await V.get(`${f.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(n))}`), !s.data._items || s.data._items.length === 0) {
          o.value = "Invalid login";
          return;
        }
        t = s.data._items[0].key, g(t);
      } catch (s) {
        o.value = `${s}`;
      }
    };
    return K(() => {
      m.value.$touch();
    }), (C, n) => (a(), l(p, null, [
      n[2] || (n[2] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Login", -1)),
      o.value ? (a(), l("p", {
        key: 0,
        class: i(e.errorMessageClass)
      }, b(o.value), 3)) : v("", !0),
      r("div", D, [
        r("label", {
          for: "email",
          class: i(e.labelClass)
        }, "Email", 2),
        $(r("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": n[0] || (n[0] = (s) => c.value.email = s),
          class: i(e.inputClass),
          required: ""
        }, null, 2), [
          [k, c.value.email]
        ]),
        d(m).email.$errors.length ? (a(), l("div", {
          key: 0,
          class: i(e.errorMessageClass)
        }, [
          (a(!0), l(p, null, w(d(m).email.$errors, (s) => (a(), l("div", {
            key: s.$uid
          }, b(s.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      r("div", R, [
        r("label", {
          for: "password",
          class: i(e.labelClass)
        }, "Password", 2),
        $(r("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": n[1] || (n[1] = (s) => c.value.password = s),
          class: i(e.inputClass),
          required: ""
        }, null, 2), [
          [k, c.value.password]
        ]),
        d(m).password.$errors.length ? (a(), l("div", {
          key: 0,
          class: i(e.errorMessageClass)
        }, [
          (a(!0), l(p, null, w(d(m).password.$errors, (s) => (a(), l("div", {
            key: s.$uid
          }, b(s.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      r("button", {
        onClick: S,
        disabled: d(m).$invalid,
        class: i(e.buttonClass)
      }, b(e.buttonLabel), 11, F)
    ], 64));
  }
}, P = { class: "mb-4" }, G = { class: "mb-4" }, H = { class: "mb-4" }, O = { class: "mb-6" }, Y = ["disabled"], E = "api-key-change", j = {
  __name: "RegistrationForm",
  props: {
    productName: {
      type: String,
      required: !0
    },
    baseUrl: {
      type: String,
      required: !0
    },
    buttonClass: {
      type: String,
      required: !0
    },
    labelClass: {
      type: String,
      required: !0
    },
    inputClass: {
      type: String,
      required: !0
    },
    errorMessageClass: {
      type: String,
      required: !0
    },
    buttonLabel: {
      type: String,
      required: !0
    }
  },
  emits: [E],
  setup(e, { emit: q }) {
    const f = e, y = q, o = h(""), c = h(crypto.randomUUID()), u = h({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }), m = {
      firstName: { required: N, minLength: x(2) },
      lastName: { required: N, minLength: x(2) },
      email: { required: N, email: I },
      password: { required: N, minLength: x(8) }
    }, g = B(m, u), S = (n) => {
      y(E, { key: n });
    }, C = async (n) => {
      n.preventDefault(), o.value = "";
      const s = {
        "credentials.email": u.value.email,
        "credentials.product": f.productName,
        password: u.value.password,
        key: c.value
      };
      try {
        let t;
        s.firstname = u.value.firstName, s.lastname = u.value.lastName, await V.post(`${f.baseUrl}/user`, s, {
          headers: { "Content-Type": "application/json" }
        }), t = s.key, S(t);
      } catch (t) {
        t.response?.status === 422 ? o.value = "User is already registered" : o.value = `${t}`;
      }
    };
    return K(() => {
      g.value.$touch();
    }), (n, s) => (a(), l(p, null, [
      s[4] || (s[4] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Registration", -1)),
      o.value ? (a(), l("p", {
        key: 0,
        class: i(n.errorClass)
      }, b(o.value), 3)) : v("", !0),
      r("div", P, [
        r("label", {
          for: "firstName",
          class: i(e.labelClass)
        }, "First Name", 2),
        $(r("input", {
          type: "text",
          id: "firstName",
          "onUpdate:modelValue": s[0] || (s[0] = (t) => u.value.firstName = t),
          class: i(e.inputClass),
          required: ""
        }, null, 2), [
          [k, u.value.firstName]
        ]),
        d(g).firstName.$errors.length ? (a(), l("div", {
          key: 0,
          class: i(n.errorClass)
        }, [
          (a(!0), l(p, null, w(d(g).firstName.$errors, (t) => (a(), l("div", {
            key: t.$uid
          }, b(t.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      r("div", G, [
        r("label", {
          for: "lastName",
          class: i(e.labelClass)
        }, "Last Name", 2),
        $(r("input", {
          type: "text",
          id: "lastName",
          "onUpdate:modelValue": s[1] || (s[1] = (t) => u.value.lastName = t),
          class: i(e.inputClass),
          required: ""
        }, null, 2), [
          [k, u.value.lastName]
        ]),
        d(g).lastName.$errors.length ? (a(), l("div", {
          key: 0,
          class: i(n.errorClass)
        }, [
          (a(!0), l(p, null, w(d(g).lastName.$errors, (t) => (a(), l("div", {
            key: t.$uid
          }, b(t.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      r("div", H, [
        r("label", {
          for: "email",
          class: i(e.labelClass)
        }, "Email", 2),
        $(r("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": s[2] || (s[2] = (t) => u.value.email = t),
          class: i(e.inputClass),
          required: ""
        }, null, 2), [
          [k, u.value.email]
        ]),
        d(g).email.$errors.length ? (a(), l("div", {
          key: 0,
          class: i(n.errorClass)
        }, [
          (a(!0), l(p, null, w(d(g).email.$errors, (t) => (a(), l("div", {
            key: t.$uid
          }, b(t.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      r("div", O, [
        r("label", {
          for: "password",
          class: i(e.labelClass)
        }, "Password", 2),
        $(r("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": s[3] || (s[3] = (t) => u.value.password = t),
          class: i(e.inputClass),
          required: ""
        }, null, 2), [
          [k, u.value.password]
        ]),
        d(g).password.$errors.length ? (a(), l("div", {
          key: 0,
          class: i(n.errorClass)
        }, [
          (a(!0), l(p, null, w(d(g).password.$errors, (t) => (a(), l("div", {
            key: t.$uid
          }, b(t.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      r("button", {
        onClick: C,
        disabled: d(g).$invalid,
        class: i(e.buttonClass)
      }, b(e.buttonLabel), 11, Y)
    ], 64));
  }
}, z = { class: "bg-white p-8 rounded-lg w-full max-w-2xl" }, J = { class: "mt-4 text-center" }, Q = {
  key: 0,
  class: "text-gray-600"
}, W = {
  key: 1,
  class: "text-gray-700 font-regular"
}, A = "api-key-change", se = {
  __name: "LoginOrRegistration",
  props: {
    productName: {
      type: String,
      required: !0
    },
    baseUrl: {
      type: String,
      required: !0
    },
    linkClass: {
      type: String,
      required: !1,
      default: "text-indigo-500 hover:underline"
    },
    buttonClass: {
      type: String,
      required: !1,
      default: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    },
    labelClass: {
      type: String,
      required: !1,
      default: "block text-gray-700 font-semibold"
    },
    inputClass: {
      type: String,
      required: !1,
      default: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    },
    errorMessageClass: {
      type: String,
      required: !1,
      default: "text-red-500 text-sm mt-1 font-semibold"
    },
    loginButtonLabel: {
      type: String,
      required: !1,
      default: "Register"
    },
    registrationButtonLabel: {
      type: String,
      required: !1,
      default: "Login"
    }
  },
  emits: [A],
  setup(e, { emit: q }) {
    const f = q, y = h(!0), o = (u) => {
      f(A, u);
    }, c = () => {
      y.value = !y.value;
    };
    return (u, m) => (a(), l("div", z, [
      y.value ? (a(), L(T, {
        key: 0,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        "button-class": e.buttonClass,
        "label-class": e.labelClass,
        "input-class": e.inputClass,
        "error-message-class": e.errorMessageClass,
        "button-label": e.loginButtonLabel,
        onApiKeyChange: o
      }, null, 8, ["product-name", "base-url", "button-class", "label-class", "input-class", "error-message-class", "button-label"])) : (a(), L(j, {
        key: 1,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        "button-class": e.buttonClass,
        "label-class": e.labelClass,
        "input-class": e.inputClass,
        "error-message-class": e.errorMessageClass,
        "button-label": e.registrationButtonLabel,
        onApiKeyChange: o
      }, null, 8, ["product-name", "base-url", "button-class", "label-class", "input-class", "error-message-class", "button-label"])),
      r("div", J, [
        y.value ? (a(), l("p", Q, [
          m[0] || (m[0] = U(" Don't have an account? ", -1)),
          r("button", {
            onClick: c,
            class: i(e.linkClass)
          }, b(e.registrationButtonLabel), 3)
        ])) : (a(), l("p", W, [
          m[1] || (m[1] = U(" Do you have an account? ", -1)),
          r("button", {
            onClick: c,
            class: i(e.linkClass)
          }, b(e.loginButtonLabel), 3)
        ]))
      ])
    ]));
  }
};
export {
  T as LoginForm,
  se as LoginOrRegistration,
  j as RegistrationForm
};
