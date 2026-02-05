(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-500:oklch(62.3% .214 259.815);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.table{display:table}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-red-500{border-color:var(--color-red-500)}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-red-600{background-color:var(--color-red-600)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-indigo-500{color:var(--color-indigo-500)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}@media(hover:hover){.hover\\:bg-indigo-600:hover{background-color:var(--color-indigo-600)}.hover\\:bg-red-700:hover{background-color:var(--color-red-700)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:bg-red-700:focus{background-color:var(--color-red-700)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-indigo-500:focus{--tw-ring-color:var(--color-indigo-500)}.focus\\:ring-red-500:focus{--tw-ring-color:var(--color-red-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-indigo-400:disabled{background-color:var(--color-indigo-400)}.disabled\\:bg-red-400:disabled{background-color:var(--color-red-400)}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { ref as v, onMounted as q, openBlock as i, createElementBlock as u, Fragment as x, createElementVNode as d, normalizeClass as c, toDisplayString as f, createCommentVNode as w, withDirectives as $, unref as y, vModelText as N, renderList as h, createBlock as Q, createTextVNode as B, renderSlot as k, watch as J } from "vue";
import F from "axios";
import { useVuelidate as G } from "@vuelidate/core";
import { required as S, email as H, minLength as M } from "@vuelidate/validators";
const j = { class: "mb-4" }, W = { class: "mb-6" }, X = ["disabled"], T = "api-key-change", Z = {
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
  emits: [T],
  setup(e, { emit: t }) {
    const l = e, g = t, a = v(""), m = v({
      email: "",
      password: ""
    }), n = G({
      email: { required: S, email: H },
      password: { required: S }
    }, m), p = (C) => {
      g(T, { key: C });
    }, E = async (C) => {
      C.preventDefault(), a.value = "";
      const b = {
        "credentials.email": m.value.email,
        "credentials.product": l.productName,
        password: m.value.password
      };
      try {
        let r, o;
        if (console.log(`${l.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(b))}`), r = await F.get(`${l.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(b))}`), !r.data._items || r.data._items.length === 0) {
          a.value = "Invalid login";
          return;
        }
        o = r.data._items[0].key, p(o);
      } catch (r) {
        console.error(r), a.value = `${r}`;
      }
    };
    return q(() => {
      n.value.$touch();
    }), (C, b) => (i(), u(x, null, [
      b[2] || (b[2] = d("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Login", -1)),
      a.value ? (i(), u("p", {
        key: 0,
        class: c(e.errorMessageClass)
      }, f(a.value), 3)) : w("", !0),
      d("div", j, [
        d("label", {
          for: "email",
          class: c(e.labelClass)
        }, "Email", 2),
        $(d("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": b[0] || (b[0] = (r) => m.value.email = r),
          class: c([
            `${e.inputClass}`,
            y(n).email.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, m.value.email]
        ]),
        y(n).email.$errors.length ? (i(), u("div", {
          key: 0,
          class: c(e.errorMessageClass)
        }, [
          (i(!0), u(x, null, h(y(n).email.$errors, (r) => (i(), u("div", {
            key: r.$uid
          }, f(r.$message), 1))), 128))
        ], 2)) : w("", !0)
      ]),
      d("div", W, [
        d("label", {
          for: "password",
          class: c(e.labelClass)
        }, "Password", 2),
        $(d("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": b[1] || (b[1] = (r) => m.value.password = r),
          class: c([
            `${e.inputClass}`,
            y(n).password.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, m.value.password]
        ]),
        y(n).password.$errors.length ? (i(), u("div", {
          key: 0,
          class: c(e.errorMessageClass)
        }, [
          (i(!0), u(x, null, h(y(n).password.$errors, (r) => (i(), u("div", {
            key: r.$uid
          }, f(r.$message), 1))), 128))
        ], 2)) : w("", !0)
      ]),
      d("button", {
        onClick: E,
        disabled: y(n).$invalid,
        class: c(e.buttonClass)
      }, f(e.buttonLabel), 11, X)
    ], 64));
  }
}, _ = { class: "mb-4" }, ee = { class: "mb-4" }, te = { class: "mb-4" }, ae = { class: "mb-6" }, re = ["disabled"], R = "api-key-change", se = {
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
  emits: [R],
  setup(e, { emit: t }) {
    const l = e, g = t, a = v(""), m = v(crypto.randomUUID()), s = v({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }), n = {
      firstName: { required: S, minLength: M(2) },
      lastName: { required: S, minLength: M(2) },
      email: { required: S, email: H },
      password: { required: S, minLength: M(8) }
    }, p = G(n, s), E = (b) => {
      g(R, { key: b });
    }, C = async (b) => {
      b.preventDefault(), a.value = "";
      const r = {
        "credentials.email": s.value.email,
        "credentials.product": l.productName,
        password: s.value.password,
        key: m.value
      };
      try {
        let o;
        r.firstname = s.value.firstName, r.lastname = s.value.lastName, await F.post(`${l.baseUrl}/user`, r, {
          headers: { "Content-Type": "application/json" }
        }), o = r.key, E(o);
      } catch (o) {
        o.response?.status === 422 ? a.value = "User is already registered" : a.value = `${o}`;
      }
    };
    return q(() => {
      p.value.$touch();
    }), (b, r) => (i(), u(x, null, [
      r[4] || (r[4] = d("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Registration", -1)),
      a.value ? (i(), u("p", {
        key: 0,
        class: c(e.errorMessageClass)
      }, f(a.value), 3)) : w("", !0),
      d("div", _, [
        d("label", {
          for: "firstName",
          class: c(e.labelClass)
        }, "First Name", 2),
        $(d("input", {
          type: "text",
          id: "firstName",
          "onUpdate:modelValue": r[0] || (r[0] = (o) => s.value.firstName = o),
          class: c([
            `${e.inputClass}`,
            y(p).firstName.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, s.value.firstName]
        ]),
        y(p).firstName.$errors.length ? (i(), u("div", {
          key: 0,
          class: c(e.errorMessageClass)
        }, [
          (i(!0), u(x, null, h(y(p).firstName.$errors, (o) => (i(), u("div", {
            key: o.$uid
          }, f(o.$message), 1))), 128))
        ], 2)) : w("", !0)
      ]),
      d("div", ee, [
        d("label", {
          for: "lastName",
          class: c(e.labelClass)
        }, "Last Name", 2),
        $(d("input", {
          type: "text",
          id: "lastName",
          "onUpdate:modelValue": r[1] || (r[1] = (o) => s.value.lastName = o),
          class: c([
            `${e.inputClass}`,
            y(p).lastName.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, s.value.lastName]
        ]),
        y(p).lastName.$errors.length ? (i(), u("div", {
          key: 0,
          class: c(e.errorMessageClass)
        }, [
          (i(!0), u(x, null, h(y(p).lastName.$errors, (o) => (i(), u("div", {
            key: o.$uid
          }, f(o.$message), 1))), 128))
        ], 2)) : w("", !0)
      ]),
      d("div", te, [
        d("label", {
          for: "email",
          class: c(e.labelClass)
        }, "Email", 2),
        $(d("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": r[2] || (r[2] = (o) => s.value.email = o),
          class: c([
            `${e.inputClass}`,
            y(p).email.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, s.value.email]
        ]),
        y(p).email.$errors.length ? (i(), u("div", {
          key: 0,
          class: c(e.errorMessageClass)
        }, [
          (i(!0), u(x, null, h(y(p).email.$errors, (o) => (i(), u("div", {
            key: o.$uid
          }, f(o.$message), 1))), 128))
        ], 2)) : w("", !0)
      ]),
      d("div", ae, [
        d("label", {
          for: "password",
          class: c(e.labelClass)
        }, "Password", 2),
        $(d("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": r[3] || (r[3] = (o) => s.value.password = o),
          class: c([
            `${e.inputClass}`,
            y(p).password.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          ]),
          required: ""
        }, null, 2), [
          [N, s.value.password]
        ]),
        y(p).password.$errors.length ? (i(), u("div", {
          key: 0,
          class: c(e.errorMessageClass)
        }, [
          (i(!0), u(x, null, h(y(p).password.$errors, (o) => (i(), u("div", {
            key: o.$uid
          }, f(o.$message), 1))), 128))
        ], 2)) : w("", !0)
      ]),
      d("button", {
        onClick: C,
        disabled: y(p).$invalid,
        class: c(e.buttonClass)
      }, f(e.buttonLabel), 11, re)
    ], 64));
  }
}, le = { class: "p-8 rounded-lg w-full max-w-2xl" }, ne = { class: "mt-4 text-center" }, oe = {
  key: 0,
  class: "text-gray-600"
}, ie = {
  key: 1,
  class: "text-gray-700 font-regular"
}, P = "api-key-change", ue = {
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
  emits: [P],
  setup(e, { emit: t }) {
    const l = t, g = v(!0), a = (s) => {
      l(P, s);
    }, m = () => {
      g.value = !g.value;
    };
    return (s, n) => (i(), u("div", le, [
      g.value ? (i(), Q(Z, {
        key: 0,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        "button-class": e.buttonClass,
        "label-class": e.labelClass,
        "input-class": e.inputClass,
        "error-message-class": e.errorMessageClass,
        "button-label": e.loginButtonLabel,
        onApiKeyChange: a
      }, null, 8, ["product-name", "base-url", "button-class", "label-class", "input-class", "error-message-class", "button-label"])) : (i(), Q(se, {
        key: 1,
        "product-name": e.productName,
        "base-url": e.baseUrl,
        "button-class": e.buttonClass,
        "label-class": e.labelClass,
        "input-class": e.inputClass,
        "error-message-class": e.errorMessageClass,
        "button-label": e.registrationButtonLabel,
        onApiKeyChange: a
      }, null, 8, ["product-name", "base-url", "button-class", "label-class", "input-class", "error-message-class", "button-label"])),
      d("div", ne, [
        g.value ? (i(), u("p", oe, [
          n[0] || (n[0] = B(" Don't have an account? ", -1)),
          d("button", {
            onClick: m,
            class: c(e.linkClass)
          }, f(e.registrationButtonLabel), 3)
        ])) : (i(), u("p", ie, [
          n[1] || (n[1] = B(" Do you have an account? ", -1)),
          d("button", {
            onClick: m,
            class: c(e.linkClass)
          }, f(e.loginButtonLabel), 3)
        ]))
      ])
    ]));
  }
}, L = "api-key-change", ve = {
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
  setup(e, { emit: t }) {
    const l = e, g = t, a = v(""), m = v(!0), s = (n) => {
      a.value = n.key, localStorage.setItem(l.keyName, a.value), m.value = !1, g(L, n.key);
    };
    return q(() => {
      a.value = localStorage.getItem(l.keyName);
      const n = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      a.value && n.test(a.value) ? (m.value = !1, g(L, a.value)) : m.value = !0;
    }), (n, p) => m.value ? (i(), Q(ue, {
      key: 1,
      "product-name": e.productName,
      "base-url": e.baseUrl,
      "input-class": "w-full bg-white px-3 py-3 text-2xl border border-gray-400 rounded-md focus:outline-none focus:ring-2",
      "button-class": "w-full mt-6 text-white text-2xl bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150",
      onApiKeyChange: s
    }, null, 8, ["product-name", "base-url"])) : k(n.$slots, "default", { key: 0 });
  }
}, Y = typeof chrome < "u" && chrome.storage?.local, z = typeof globalThis < "u" && globalThis.localStorage && typeof globalThis.localStorage == "object", A = async (e) => {
  if (Y)
    return (await chrome.storage.local.get(e))[e] ?? null;
  if (z) {
    const t = localStorage.getItem(e);
    return t === null ? null : JSON.parse(t);
  }
  throw new Error("No supported storage backend available");
}, I = async (e, t) => {
  if (Y) {
    await chrome.storage.local.set({ [e]: t });
    return;
  }
  if (z) {
    localStorage.setItem(e, JSON.stringify(t));
    return;
  }
  throw new Error("No supported storage backend available");
}, U = "n8eneere88chbpbp8766bc97", K = (e) => btoa(String.fromCodePoint(...new TextEncoder().encode(JSON.stringify(e)).map(
  (t, l) => t ^ U.codePointAt(l % U.length)
))), D = (e) => {
  try {
    const t = new Uint8Array(
      atob(e).split("").map(
        (l, g) => l.codePointAt(0) ^ U.codePointAt(g % U.length)
      )
    );
    return JSON.parse(new TextDecoder().decode(t));
  } catch (t) {
    return console.warn("Failed to decrypt data:", t.message), null;
  }
}, de = async (e) => {
  const t = await A(e);
  return t ? D(t) : null;
}, ce = async (e, t) => {
  const l = K(t);
  return I(e, l);
}, ge = async (e) => {
  const t = await A(e);
  return t ? D(t) : null;
}, V = async (e, t) => {
  const l = K(t);
  return I(e, l);
}, xe = {
  __name: "Quota",
  props: {
    quotaName: {
      type: String,
      default: "quota"
    },
    maxQuotaName: {
      type: String,
      default: "maxQuota"
    },
    maxQuota: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const t = e, l = v(0), g = v(0), a = async () => {
      const s = await ge(t.maxQuotaName), n = s ?? t.maxQuota;
      s === null && await V(t.maxQuotaName, t.maxQuota), g.value = n;
    }, m = async () => {
      const s = await de(t.quotaName) ?? 0, n = Number(s) <= g.value ? Number(s) + 1 : Number(s);
      await ce(t.quotaName, n), l.value = n;
    };
    return J(() => t.maxQuota, async (s) => {
      g.value = s, await V(t.maxQuotaName, s);
    }), q(async () => {
      await a(), await m();
    }), (s, n) => l.value <= g.value ? k(s.$slots, "withinQuota", { key: 0 }) : k(s.$slots, "exceededQuota", { key: 1 });
  }
}, me = async (e) => {
  const t = await A(e);
  return t ? D(t) : null;
}, O = async (e, t) => {
  const l = K(t);
  return I(e, l);
}, we = {
  __name: "Expiry",
  props: {
    expiry: {
      type: String
    },
    expiryName: {
      type: String,
      default: "expiry"
    }
  },
  setup(e) {
    const t = e, l = v(/* @__PURE__ */ new Date()), g = v(/* @__PURE__ */ new Date());
    return J(() => t.expiry, async (a) => {
      l.value = new Date(a), await O(t.expiryName, a);
    }), q(async () => {
      console.log("Expiry", t.expiry);
      const a = await me(t.expiryName);
      a ? (console.log("Using saved expiry:", a), l.value = new Date(a)) : (console.log("Using initial expiry:", t.expiry), l.value = new Date(t.expiry), await O(t.expiryName, t.expiry));
    }), (a, m) => g.value <= l.value ? k(a.$slots, "withinExpiry", { key: 0 }) : k(a.$slots, "exceededExpiry", { key: 1 });
  }
};
export {
  we as Expiry,
  xe as Quota,
  ve as Registered
};
