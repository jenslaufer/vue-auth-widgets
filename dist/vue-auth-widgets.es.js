import { ref as w, onMounted as I, createElementBlock as o, openBlock as t, Fragment as c, createElementVNode as r, createCommentVNode as g, toDisplayString as p, withDirectives as y, vModelText as v, unref as d, renderList as x, createBlock as U, createTextVNode as E } from "vue";
import q from "axios";
import { useVuelidate as D } from "@vuelidate/core";
import { required as $, email as M, minLength as N } from "@vuelidate/validators";
const R = {
  key: 0,
  class: "text-red-500 mt-1"
}, F = { class: "mb-4" }, T = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, P = { class: "mb-6" }, B = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, G = ["disabled"], A = "api-key-change", H = {
  __name: "LoginForm",
  emits: [A],
  setup(C, { emit: k }) {
    const _ = k, a = w(""), u = w({
      email: "",
      password: ""
    }), m = D({
      email: { required: $, email: M },
      password: { required: $ }
    }, u), n = (f) => {
      _(A, { key: f });
    }, h = async (f) => {
      f.preventDefault(), a.value = "";
      const l = {
        "credentials.email": u.value.email,
        "credentials.product": "undefined",
        password: u.value.password
      };
      try {
        let s, b;
        if (s = await q.get(`undefined/user?where=${encodeURIComponent(JSON.stringify(l))}`), !s.data._items || s.data._items.length === 0) {
          a.value = "Invalid login";
          return;
        }
        b = s.data._items[0].key, n(b);
      } catch (e) {
        a.value = `${e}`;
      }
    };
    return I(() => {
      m.value.$touch();
    }), (f, l) => (t(), o(c, null, [
      l[4] || (l[4] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Login", -1)),
      a.value ? (t(), o("p", R, p(a.value), 1)) : g("", !0),
      r("div", F, [
        l[2] || (l[2] = r("label", {
          for: "email",
          class: "block text-gray-700 font-semibold"
        }, "Email", -1)),
        y(r("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": l[0] || (l[0] = (e) => u.value.email = e),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [v, u.value.email]
        ]),
        d(m).email.$errors.length ? (t(), o("div", T, [
          (t(!0), o(c, null, x(d(m).email.$errors, (e) => (t(), o("div", {
            key: e.$uid
          }, p(e.$message), 1))), 128))
        ])) : g("", !0)
      ]),
      r("div", P, [
        l[3] || (l[3] = r("label", {
          for: "password",
          class: "block text-gray-700 font-semibold"
        }, "Password", -1)),
        y(r("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": l[1] || (l[1] = (e) => u.value.password = e),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [v, u.value.password]
        ]),
        d(m).password.$errors.length ? (t(), o("div", B, [
          (t(!0), o(c, null, x(d(m).password.$errors, (e) => (t(), o("div", {
            key: e.$uid
          }, p(e.$message), 1))), 128))
        ])) : g("", !0)
      ]),
      r("button", {
        onClick: h,
        disabled: d(m).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Login", 8, G)
    ], 64));
  }
}, O = {
  key: 0,
  class: "text-red-500 mt-1"
}, Y = { class: "mb-4" }, S = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, j = { class: "mb-4" }, J = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, z = { class: "mb-4" }, Q = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, W = { class: "mb-6" }, X = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, Z = ["disabled"], K = "api-key-change", ee = {
  __name: "RegistrationForm",
  emits: [K],
  setup(C, { emit: k }) {
    const _ = k, a = w(""), u = w(crypto.randomUUID()), i = w({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }), m = {
      firstName: { required: $, minLength: N(2) },
      lastName: { required: $, minLength: N(2) },
      email: { required: $, email: M },
      password: { required: $, minLength: N(8) }
    }, n = D(m, i), h = (l) => {
      _(K, { key: l });
    }, f = async (l) => {
      var s;
      l.preventDefault(), a.value = "";
      const e = {
        "credentials.email": i.value.email,
        "credentials.product": "undefined",
        password: i.value.password,
        key: u.value
      };
      try {
        let L;
        e.firstname = i.value.firstName, e.lastname = i.value.lastName, await q.post("undefined/user", e, {
          headers: { "Content-Type": "application/json" }
        }), L = e.key, h(L);
      } catch (b) {
        ((s = b.response) == null ? void 0 : s.status) === 422 ? a.value = "User is already registered" : a.value = `${b}`;
      }
    };
    return I(() => {
      n.value.$touch();
    }), (l, e) => (t(), o(c, null, [
      e[8] || (e[8] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Registration", -1)),
      a.value ? (t(), o("p", O, p(a.value), 1)) : g("", !0),
      r("div", Y, [
        e[4] || (e[4] = r("label", {
          for: "firstName",
          class: "block text-gray-700 font-semibold"
        }, "First Name", -1)),
        y(r("input", {
          type: "text",
          id: "firstName",
          "onUpdate:modelValue": e[0] || (e[0] = (s) => i.value.firstName = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [v, i.value.firstName]
        ]),
        d(n).firstName.$errors.length ? (t(), o("div", S, [
          (t(!0), o(c, null, x(d(n).firstName.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, p(s.$message), 1))), 128))
        ])) : g("", !0)
      ]),
      r("div", j, [
        e[5] || (e[5] = r("label", {
          for: "lastName",
          class: "block text-gray-700 font-semibold"
        }, "Last Name", -1)),
        y(r("input", {
          type: "text",
          id: "lastName",
          "onUpdate:modelValue": e[1] || (e[1] = (s) => i.value.lastName = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [v, i.value.lastName]
        ]),
        d(n).lastName.$errors.length ? (t(), o("div", J, [
          (t(!0), o(c, null, x(d(n).lastName.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, p(s.$message), 1))), 128))
        ])) : g("", !0)
      ]),
      r("div", z, [
        e[6] || (e[6] = r("label", {
          for: "email",
          class: "block text-gray-700 font-semibold"
        }, "Email", -1)),
        y(r("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": e[2] || (e[2] = (s) => i.value.email = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [v, i.value.email]
        ]),
        d(n).email.$errors.length ? (t(), o("div", Q, [
          (t(!0), o(c, null, x(d(n).email.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, p(s.$message), 1))), 128))
        ])) : g("", !0)
      ]),
      r("div", W, [
        e[7] || (e[7] = r("label", {
          for: "password",
          class: "block text-gray-700 font-semibold"
        }, "Password", -1)),
        y(r("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": e[3] || (e[3] = (s) => i.value.password = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [v, i.value.password]
        ]),
        d(n).password.$errors.length ? (t(), o("div", X, [
          (t(!0), o(c, null, x(d(n).password.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, p(s.$message), 1))), 128))
        ])) : g("", !0)
      ]),
      r("button", {
        onClick: f,
        disabled: d(n).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Let me in!", 8, Z)
    ], 64));
  }
}, se = { class: "bg-white p-8 rounded-lg w-full max-w-2xl" }, te = { class: "mt-4 text-center" }, oe = {
  key: 0,
  class: "text-gray-600"
}, re = {
  key: 1,
  class: "text-gray-700 font-regular"
}, V = "api-key-change", de = {
  __name: "LoginOrRegistration",
  emits: [V],
  setup(C, { emit: k }) {
    const _ = k, a = w(!0), u = (m) => {
      _(V, m);
    }, i = () => {
      a.value = !a.value;
    };
    return (m, n) => (t(), o("div", se, [
      a.value ? (t(), U(H, {
        key: 0,
        onApiKeyChange: u
      })) : (t(), U(ee, {
        key: 1,
        onApiKeyChange: u
      })),
      r("div", te, [
        a.value ? (t(), o("p", oe, [
          n[0] || (n[0] = E(" Don't have an account? ", -1)),
          r("button", {
            onClick: i,
            class: "text-indigo-500 hover:underline"
          }, "Registration")
        ])) : (t(), o("p", re, [
          n[1] || (n[1] = E(" Do you have an account? ", -1)),
          r("button", {
            onClick: i,
            class: "text-indigo-500 hover:underline"
          }, "Login")
        ]))
      ])
    ]));
  }
};
export {
  H as LoginForm,
  de as LoginOrRegistration,
  ee as RegistrationForm
};
