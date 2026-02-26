(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-500:oklch(62.3% .214 259.815);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.block{display:block}.table{display:table}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-red-500{border-color:var(--color-red-500)}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-red-600{background-color:var(--color-red-600)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing) * 8)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-indigo-500{color:var(--color-indigo-500)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}@media(hover:hover){.hover\\:bg-indigo-600:hover{background-color:var(--color-indigo-600)}.hover\\:bg-red-700:hover{background-color:var(--color-red-700)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:bg-red-700:focus{background-color:var(--color-red-700)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-indigo-500:focus{--tw-ring-color:var(--color-indigo-500)}.focus\\:ring-red-500:focus{--tw-ring-color:var(--color-red-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-indigo-400:disabled{background-color:var(--color-indigo-400)}.disabled\\:bg-red-400:disabled{background-color:var(--color-red-400)}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { ref as C, onMounted as U, openBlock as r, createElementBlock as a, Fragment as p, createElementVNode as l, normalizeClass as n, toDisplayString as b, createCommentVNode as v, withDirectives as w, unref as o, vModelText as N, renderList as q, createBlock as M, createTextVNode as E, renderSlot as D } from "vue";
import B from "axios";
import { useVuelidate as V } from "@vuelidate/core";
import { required as h, email as R, minLength as S } from "@vuelidate/validators";
const T = { class: "mb-4" }, P = { class: "mb-6" }, F = ["disabled"], A = "api-key-change", G = {
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
  emits: [A],
  setup(e, { emit: $ }) {
    const f = e, y = $, u = C(""), g = C({
      email: "",
      password: ""
    }), i = V({
      email: { required: h, email: R },
      password: { required: h }
    }, g), c = (k) => {
      y(A, { key: k });
    }, x = async (k) => {
      k.preventDefault(), u.value = "";
      const m = {
        "credentials.email": g.value.email,
        "credentials.product": f.productName,
        password: g.value.password
      };
      try {
        let t, s;
        if (console.log(`${f.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(m))}`), t = await B.get(`${f.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(m))}`), !t.data._items || t.data._items.length === 0) {
          u.value = "Invalid login";
          return;
        }
        s = t.data._items[0].key, c(s);
      } catch (t) {
        console.error(t), u.value = `${t}`;
      }
    };
    return U(() => {
      i.value.$touch();
    }), (k, m) => (r(), a(p, null, [
      m[2] || (m[2] = l("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Login", -1)),
      u.value ? (r(), a("p", {
        key: 0,
        class: n(e.errorMessageClass)
      }, b(u.value), 3)) : v("", !0),
      l("div", T, [
        l("label", {
          for: "email",
          class: n(e.labelClass)
        }, "Email", 2),
        w(l("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": m[0] || (m[0] = (t) => g.value.email = t),
          class: n([
            `${e.inputClass}`,
            o(i).email.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, g.value.email]
        ]),
        o(i).email.$errors.length ? (r(), a("div", {
          key: 0,
          class: n(e.errorMessageClass)
        }, [
          (r(!0), a(p, null, q(o(i).email.$errors, (t) => (r(), a("div", {
            key: t.$uid
          }, b(t.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      l("div", P, [
        l("label", {
          for: "password",
          class: n(e.labelClass)
        }, "Password", 2),
        w(l("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": m[1] || (m[1] = (t) => g.value.password = t),
          class: n([
            `${e.inputClass}`,
            o(i).password.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, g.value.password]
        ]),
        o(i).password.$errors.length ? (r(), a("div", {
          key: 0,
          class: n(e.errorMessageClass)
        }, [
          (r(!0), a(p, null, q(o(i).password.$errors, (t) => (r(), a("div", {
            key: t.$uid
          }, b(t.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      l("button", {
        onClick: x,
        disabled: o(i).$invalid,
        class: n(e.buttonClass)
      }, b(e.buttonLabel), 11, F)
    ], 64));
  }
}, H = { class: "mb-4" }, Y = { class: "mb-4" }, O = { class: "mb-4" }, J = { class: "mb-6" }, z = ["disabled"], I = "api-key-change", j = {
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
  emits: [I],
  setup(e, { emit: $ }) {
    const f = e, y = $, u = C(""), g = C(crypto.randomUUID()), d = C({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }), i = {
      firstName: { required: h, minLength: S(2) },
      lastName: { required: h, minLength: S(2) },
      email: { required: h, email: R },
      password: { required: h, minLength: S(8) }
    }, c = V(i, d), x = (m) => {
      y(I, { key: m });
    }, k = async (m) => {
      m.preventDefault(), u.value = "";
      const t = {
        "credentials.email": d.value.email,
        "credentials.product": f.productName,
        password: d.value.password,
        key: g.value
      };
      try {
        let s;
        t.firstname = d.value.firstName, t.lastname = d.value.lastName, await B.post(`${f.baseUrl}/user`, t, {
          headers: { "Content-Type": "application/json" }
        }), s = t.key, x(s);
      } catch (s) {
        s.response?.status === 422 ? u.value = "User is already registered" : u.value = `${s}`;
      }
    };
    return U(() => {
      c.value.$touch();
    }), (m, t) => (r(), a(p, null, [
      t[4] || (t[4] = l("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Registration", -1)),
      u.value ? (r(), a("p", {
        key: 0,
        class: n(e.errorMessageClass)
      }, b(u.value), 3)) : v("", !0),
      l("div", H, [
        l("label", {
          for: "firstName",
          class: n(e.labelClass)
        }, "First Name", 2),
        w(l("input", {
          type: "text",
          id: "firstName",
          "onUpdate:modelValue": t[0] || (t[0] = (s) => d.value.firstName = s),
          class: n([
            `${e.inputClass}`,
            o(c).firstName.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, d.value.firstName]
        ]),
        o(c).firstName.$errors.length ? (r(), a("div", {
          key: 0,
          class: n(e.errorMessageClass)
        }, [
          (r(!0), a(p, null, q(o(c).firstName.$errors, (s) => (r(), a("div", {
            key: s.$uid
          }, b(s.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      l("div", Y, [
        l("label", {
          for: "lastName",
          class: n(e.labelClass)
        }, "Last Name", 2),
        w(l("input", {
          type: "text",
          id: "lastName",
          "onUpdate:modelValue": t[1] || (t[1] = (s) => d.value.lastName = s),
          class: n([
            `${e.inputClass}`,
            o(c).lastName.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, d.value.lastName]
        ]),
        o(c).lastName.$errors.length ? (r(), a("div", {
          key: 0,
          class: n(e.errorMessageClass)
        }, [
          (r(!0), a(p, null, q(o(c).lastName.$errors, (s) => (r(), a("div", {
            key: s.$uid
          }, b(s.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      l("div", O, [
        l("label", {
          for: "email",
          class: n(e.labelClass)
        }, "Email", 2),
        w(l("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": t[2] || (t[2] = (s) => d.value.email = s),
          class: n([
            `${e.inputClass}`,
            o(c).email.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, d.value.email]
        ]),
        o(c).email.$errors.length ? (r(), a("div", {
          key: 0,
          class: n(e.errorMessageClass)
        }, [
          (r(!0), a(p, null, q(o(c).email.$errors, (s) => (r(), a("div", {
            key: s.$uid
          }, b(s.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      l("div", J, [
        l("label", {
          for: "password",
          class: n(e.labelClass)
        }, "Password", 2),
        w(l("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": t[3] || (t[3] = (s) => d.value.password = s),
          class: n([
            `${e.inputClass}`,
            o(c).password.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, d.value.password]
        ]),
        o(c).password.$errors.length ? (r(), a("div", {
          key: 0,
          class: n(e.errorMessageClass)
        }, [
          (r(!0), a(p, null, q(o(c).password.$errors, (s) => (r(), a("div", {
            key: s.$uid
          }, b(s.$message), 1))), 128))
        ], 2)) : v("", !0)
      ]),
      l("button", {
        onClick: k,
        disabled: o(c).$invalid,
        class: n(e.buttonClass)
      }, b(e.buttonLabel), 11, z)
    ], 64));
  }
}, Q = { class: "p-8 rounded-lg w-full max-w-2xl" }, W = { class: "mt-4 text-center" }, X = {
  key: 0,
  class: "text-gray-600"
}, Z = {
  key: 1,
  class: "text-gray-700 font-regular"
}, K = "api-key-change", _ = {
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
      default: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
    },
    errorMessageClass: {
      type: String,
      required: !1,
      default: "text-red-500 text-sm mt-1 font-semibold"
    },
    loginButtonLabel: {
      type: String,
      required: !1,
      default: "Login"
    },
    registrationButtonLabel: {
      type: String,
      required: !1,
      default: "Register"
    }
  },
  emits: [K],
  setup(e, { emit: $ }) {
    const f = $, y = C(!0), u = (d) => {
      f(K, d);
    }, g = () => {
      y.value = !y.value;
    };
    return (d, i) => (r(), a("div", Q, [
      y.value ? (r(), M(G, {
        key: 0,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        "button-class": e.buttonClass,
        "label-class": e.labelClass,
        "input-class": e.inputClass,
        "error-message-class": e.errorMessageClass,
        "button-label": e.loginButtonLabel,
        onApiKeyChange: u
      }, null, 8, ["product-name", "base-url", "button-class", "label-class", "input-class", "error-message-class", "button-label"])) : (r(), M(j, {
        key: 1,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        "button-class": e.buttonClass,
        "label-class": e.labelClass,
        "input-class": e.inputClass,
        "error-message-class": e.errorMessageClass,
        "button-label": e.registrationButtonLabel,
        onApiKeyChange: u
      }, null, 8, ["product-name", "base-url", "button-class", "label-class", "input-class", "error-message-class", "button-label"])),
      l("div", W, [
        y.value ? (r(), a("p", X, [
          i[0] || (i[0] = E(" Don't have an account? ", -1)),
          l("button", {
            onClick: g,
            class: n(e.linkClass)
          }, b(e.registrationButtonLabel), 3)
        ])) : (r(), a("p", Z, [
          i[1] || (i[1] = E(" Do you have an account? ", -1)),
          l("button", {
            onClick: g,
            class: n(e.linkClass)
          }, b(e.loginButtonLabel), 3)
        ]))
      ])
    ]));
  }
}, L = "api-key-change", ae = {
  __name: "Registered",
  props: {
    keyName: {
      type: String,
      required: !0
    },
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
      default: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
    },
    errorMessageClass: {
      type: String,
      required: !1,
      default: "text-red-500 text-sm mt-1 font-semibold"
    },
    loginButtonLabel: {
      type: String,
      required: !1,
      default: "Login"
    },
    registrationButtonLabel: {
      type: String,
      required: !1,
      default: "Register"
    },
    buttonLabel: {
      type: String,
      required: !0
    }
  },
  emits: [L],
  setup(e, { emit: $ }) {
    const f = e, y = $, u = C(""), g = C(!0), d = (i) => {
      u.value = i.key, localStorage.setItem(f.keyName, u.value), g.value = !1, y(L, i.key);
    };
    return U(() => {
      u.value = localStorage.getItem(f.keyName);
      const i = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      u.value && i.test(u.value) ? (g.value = !1, y(L, u.value)) : g.value = !0;
    }), (i, c) => g.value ? (r(), M(_, {
      key: 1,
      "product-name": e.productName,
      "base-url": e.baseUrl,
      "input-class": "w-full bg-white px-3 py-3 text-2xl border border-gray-400 rounded-md focus:outline-none focus:ring-2",
      "button-class": "w-full mt-6 text-white text-2xl bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150",
      onApiKeyChange: d
    }, null, 8, ["product-name", "base-url"])) : D(i.$slots, "default", { key: 0 });
  }
};
export {
  ae as Registered
};
