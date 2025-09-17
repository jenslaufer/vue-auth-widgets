(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-300{border-color:var(--color-gray-300)}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-indigo-500{color:var(--color-indigo-500)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media (hover:hover){.hover\\:bg-indigo-600:hover{background-color:var(--color-indigo-600)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:border-indigo-500:focus{border-color:var(--color-indigo-500)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-indigo-500:focus{--tw-ring-color:var(--color-indigo-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-indigo-400:disabled{background-color:var(--color-indigo-400)}@media (min-width:40rem){.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { ref as h, onMounted as K, createElementBlock as o, openBlock as s, Fragment as g, createElementVNode as r, createCommentVNode as b, toDisplayString as f, withDirectives as x, vModelText as $, unref as l, renderList as w, createBlock as C, createTextVNode as L } from "vue";
import V from "axios";
import { useVuelidate as I } from "@vuelidate/core";
import { required as k, email as S, minLength as U } from "@vuelidate/validators";
const D = {
  key: 0,
  class: "text-red-500 mt-1"
}, M = { class: "mb-4" }, R = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, F = { class: "mb-6" }, T = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, P = ["disabled"], q = "api-key-change", B = {
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
  emits: [q],
  setup(c, { emit: N }) {
    const y = c, p = N, a = h(""), u = h({
      email: "",
      password: ""
    }), d = I({
      email: { required: k, email: S },
      password: { required: k }
    }, u), m = (v) => {
      p(q, { key: v });
    }, _ = async (v) => {
      v.preventDefault(), a.value = "";
      const n = {
        "credentials.email": u.value.email,
        "credentials.product": y.productName,
        password: u.value.password
      };
      try {
        let e, t;
        if (e = await V.get(`${y.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(n))}`), !e.data._items || e.data._items.length === 0) {
          a.value = "Invalid login";
          return;
        }
        t = e.data._items[0].key, m(t);
      } catch (e) {
        a.value = `${e}`;
      }
    };
    return K(() => {
      d.value.$touch();
    }), (v, n) => (s(), o(g, null, [
      n[4] || (n[4] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Login", -1)),
      a.value ? (s(), o("p", D, f(a.value), 1)) : b("", !0),
      r("div", M, [
        n[2] || (n[2] = r("label", {
          for: "email",
          class: "block text-gray-700 font-semibold"
        }, "Email", -1)),
        x(r("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": n[0] || (n[0] = (e) => u.value.email = e),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, u.value.email]
        ]),
        l(d).email.$errors.length ? (s(), o("div", R, [
          (s(!0), o(g, null, w(l(d).email.$errors, (e) => (s(), o("div", {
            key: e.$uid
          }, f(e.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", F, [
        n[3] || (n[3] = r("label", {
          for: "password",
          class: "block text-gray-700 font-semibold"
        }, "Password", -1)),
        x(r("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": n[1] || (n[1] = (e) => u.value.password = e),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, u.value.password]
        ]),
        l(d).password.$errors.length ? (s(), o("div", T, [
          (s(!0), o(g, null, w(l(d).password.$errors, (e) => (s(), o("div", {
            key: e.$uid
          }, f(e.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("button", {
        onClick: _,
        disabled: l(d).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Login", 8, P)
    ], 64));
  }
}, G = {
  key: 0,
  class: "text-red-500 mt-1"
}, H = { class: "mb-4" }, O = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, Y = { class: "mb-4" }, j = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, J = { class: "mb-4" }, z = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, Q = { class: "mb-6" }, W = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, X = ["disabled"], E = "api-key-change", Z = {
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
  emits: [E],
  setup(c, { emit: N }) {
    const y = c, p = N, a = h(""), u = h(crypto.randomUUID()), i = h({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }), d = {
      firstName: { required: k, minLength: U(2) },
      lastName: { required: k, minLength: U(2) },
      email: { required: k, email: S },
      password: { required: k, minLength: U(8) }
    }, m = I(d, i), _ = (n) => {
      p(E, { key: n });
    }, v = async (n) => {
      n.preventDefault(), a.value = "";
      const e = {
        "credentials.email": i.value.email,
        "credentials.product": y.productName,
        password: i.value.password,
        key: u.value
      };
      try {
        let t;
        e.firstname = i.value.firstName, e.lastname = i.value.lastName, await V.post(`${y.baseUrl}/user`, e, {
          headers: { "Content-Type": "application/json" }
        }), t = e.key, _(t);
      } catch (t) {
        t.response?.status === 422 ? a.value = "User is already registered" : a.value = `${t}`;
      }
    };
    return K(() => {
      m.value.$touch();
    }), (n, e) => (s(), o(g, null, [
      e[8] || (e[8] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Registration", -1)),
      a.value ? (s(), o("p", G, f(a.value), 1)) : b("", !0),
      r("div", H, [
        e[4] || (e[4] = r("label", {
          for: "firstName",
          class: "block text-gray-700 font-semibold"
        }, "First Name", -1)),
        x(r("input", {
          type: "text",
          id: "firstName",
          "onUpdate:modelValue": e[0] || (e[0] = (t) => i.value.firstName = t),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.firstName]
        ]),
        l(m).firstName.$errors.length ? (s(), o("div", O, [
          (s(!0), o(g, null, w(l(m).firstName.$errors, (t) => (s(), o("div", {
            key: t.$uid
          }, f(t.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", Y, [
        e[5] || (e[5] = r("label", {
          for: "lastName",
          class: "block text-gray-700 font-semibold"
        }, "Last Name", -1)),
        x(r("input", {
          type: "text",
          id: "lastName",
          "onUpdate:modelValue": e[1] || (e[1] = (t) => i.value.lastName = t),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.lastName]
        ]),
        l(m).lastName.$errors.length ? (s(), o("div", j, [
          (s(!0), o(g, null, w(l(m).lastName.$errors, (t) => (s(), o("div", {
            key: t.$uid
          }, f(t.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", J, [
        e[6] || (e[6] = r("label", {
          for: "email",
          class: "block text-gray-700 font-semibold"
        }, "Email", -1)),
        x(r("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": e[2] || (e[2] = (t) => i.value.email = t),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.email]
        ]),
        l(m).email.$errors.length ? (s(), o("div", z, [
          (s(!0), o(g, null, w(l(m).email.$errors, (t) => (s(), o("div", {
            key: t.$uid
          }, f(t.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", Q, [
        e[7] || (e[7] = r("label", {
          for: "password",
          class: "block text-gray-700 font-semibold"
        }, "Password", -1)),
        x(r("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": e[3] || (e[3] = (t) => i.value.password = t),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.password]
        ]),
        l(m).password.$errors.length ? (s(), o("div", W, [
          (s(!0), o(g, null, w(l(m).password.$errors, (t) => (s(), o("div", {
            key: t.$uid
          }, f(t.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("button", {
        onClick: v,
        disabled: l(m).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Let me in!", 8, X)
    ], 64));
  }
}, ee = { class: "bg-white p-8 rounded-lg w-full max-w-2xl" }, te = { class: "mt-4 text-center" }, se = {
  key: 0,
  class: "text-gray-600"
}, oe = {
  key: 1,
  class: "text-gray-700 font-regular"
}, A = "api-key-change", le = {
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
  emits: [A],
  setup(c, { emit: N }) {
    const y = N, p = h(!0), a = (i) => {
      y(A, i);
    }, u = () => {
      p.value = !p.value;
    };
    return (i, d) => (s(), o("div", ee, [
      p.value ? (s(), C(B, {
        key: 0,
        "product-name": c.productName,
        "base-url": c.baseUrl,
        onApiKeyChange: a
      }, null, 8, ["product-name", "base-url"])) : (s(), C(Z, {
        key: 1,
        "product-name": c.productName,
        "base-url": c.baseUrl,
        onApiKeyChange: a
      }, null, 8, ["product-name", "base-url"])),
      r("div", te, [
        p.value ? (s(), o("p", se, [
          d[0] || (d[0] = L(" Don't have an account? ", -1)),
          r("button", {
            onClick: u,
            class: "text-indigo-500 hover:underline"
          }, "Registration")
        ])) : (s(), o("p", oe, [
          d[1] || (d[1] = L(" Do you have an account? ", -1)),
          r("button", {
            onClick: u,
            class: "text-indigo-500 hover:underline"
          }, "Login")
        ]))
      ])
    ]));
  }
};
export {
  B as LoginForm,
  le as LoginOrRegistration,
  Z as RegistrationForm
};
