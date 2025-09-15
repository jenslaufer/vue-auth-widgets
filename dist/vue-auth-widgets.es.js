import { ref as h, onMounted as V, createElementBlock as o, openBlock as t, Fragment as g, createElementVNode as r, createCommentVNode as b, toDisplayString as f, withDirectives as x, vModelText as $, unref as l, renderList as w, createBlock as L, createTextVNode as q } from "vue";
import I from "axios";
import { useVuelidate as S } from "@vuelidate/core";
import { required as k, email as D, minLength as C } from "@vuelidate/validators";
const M = {
  key: 0,
  class: "text-red-500 mt-1"
}, R = { class: "mb-4" }, F = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, T = { class: "mb-6" }, P = {
  key: 0,
  class: "text-red-500 text-sm mt-1 font-semibold"
}, B = ["disabled"], E = "api-key-change", G = {
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
  emits: [E],
  setup(c, { emit: N }) {
    const y = c, p = N, a = h(""), u = h({
      email: "",
      password: ""
    }), d = S({
      email: { required: k, email: D },
      password: { required: k }
    }, u), m = (v) => {
      p(E, { key: v });
    }, U = async (v) => {
      v.preventDefault(), a.value = "";
      const n = {
        "credentials.email": u.value.email,
        "credentials.product": y.productName,
        password: u.value.password
      };
      try {
        let e, s;
        if (e = await I.get(`${y.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(n))}`), !e.data._items || e.data._items.length === 0) {
          a.value = "Invalid login";
          return;
        }
        s = e.data._items[0].key, m(s);
      } catch (e) {
        a.value = `${e}`;
      }
    };
    return V(() => {
      d.value.$touch();
    }), (v, n) => (t(), o(g, null, [
      n[4] || (n[4] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Login", -1)),
      a.value ? (t(), o("p", M, f(a.value), 1)) : b("", !0),
      r("div", R, [
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
        l(d).email.$errors.length ? (t(), o("div", F, [
          (t(!0), o(g, null, w(l(d).email.$errors, (e) => (t(), o("div", {
            key: e.$uid
          }, f(e.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", T, [
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
        l(d).password.$errors.length ? (t(), o("div", P, [
          (t(!0), o(g, null, w(l(d).password.$errors, (e) => (t(), o("div", {
            key: e.$uid
          }, f(e.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("button", {
        onClick: U,
        disabled: l(d).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Login", 8, B)
    ], 64));
  }
}, H = {
  key: 0,
  class: "text-red-500 mt-1"
}, O = { class: "mb-4" }, Y = {
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
}, Z = ["disabled"], A = "api-key-change", ee = {
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
  emits: [A],
  setup(c, { emit: N }) {
    const y = c, p = N, a = h(""), u = h(crypto.randomUUID()), i = h({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }), d = {
      firstName: { required: k, minLength: C(2) },
      lastName: { required: k, minLength: C(2) },
      email: { required: k, email: D },
      password: { required: k, minLength: C(8) }
    }, m = S(d, i), U = (n) => {
      p(A, { key: n });
    }, v = async (n) => {
      var s;
      n.preventDefault(), a.value = "";
      const e = {
        "credentials.email": i.value.email,
        "credentials.product": y.productName,
        password: i.value.password,
        key: u.value
      };
      try {
        let _;
        e.firstname = i.value.firstName, e.lastname = i.value.lastName, await I.post(`${y.baseUrl}/user`, e, {
          headers: { "Content-Type": "application/json" }
        }), _ = e.key, U(_);
      } catch (_) {
        ((s = _.response) == null ? void 0 : s.status) === 422 ? a.value = "User is already registered" : a.value = `${_}`;
      }
    };
    return V(() => {
      m.value.$touch();
    }), (n, e) => (t(), o(g, null, [
      e[8] || (e[8] = r("h2", { class: "text-2xl font-bold mb-6 text-center" }, "Registration", -1)),
      a.value ? (t(), o("p", H, f(a.value), 1)) : b("", !0),
      r("div", O, [
        e[4] || (e[4] = r("label", {
          for: "firstName",
          class: "block text-gray-700 font-semibold"
        }, "First Name", -1)),
        x(r("input", {
          type: "text",
          id: "firstName",
          "onUpdate:modelValue": e[0] || (e[0] = (s) => i.value.firstName = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.firstName]
        ]),
        l(m).firstName.$errors.length ? (t(), o("div", Y, [
          (t(!0), o(g, null, w(l(m).firstName.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, f(s.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", j, [
        e[5] || (e[5] = r("label", {
          for: "lastName",
          class: "block text-gray-700 font-semibold"
        }, "Last Name", -1)),
        x(r("input", {
          type: "text",
          id: "lastName",
          "onUpdate:modelValue": e[1] || (e[1] = (s) => i.value.lastName = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.lastName]
        ]),
        l(m).lastName.$errors.length ? (t(), o("div", J, [
          (t(!0), o(g, null, w(l(m).lastName.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, f(s.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", z, [
        e[6] || (e[6] = r("label", {
          for: "email",
          class: "block text-gray-700 font-semibold"
        }, "Email", -1)),
        x(r("input", {
          type: "email",
          id: "email",
          "onUpdate:modelValue": e[2] || (e[2] = (s) => i.value.email = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.email]
        ]),
        l(m).email.$errors.length ? (t(), o("div", Q, [
          (t(!0), o(g, null, w(l(m).email.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, f(s.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("div", W, [
        e[7] || (e[7] = r("label", {
          for: "password",
          class: "block text-gray-700 font-semibold"
        }, "Password", -1)),
        x(r("input", {
          type: "password",
          id: "password",
          "onUpdate:modelValue": e[3] || (e[3] = (s) => i.value.password = s),
          class: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          required: ""
        }, null, 512), [
          [$, i.value.password]
        ]),
        l(m).password.$errors.length ? (t(), o("div", X, [
          (t(!0), o(g, null, w(l(m).password.$errors, (s) => (t(), o("div", {
            key: s.$uid
          }, f(s.$message), 1))), 128))
        ])) : b("", !0)
      ]),
      r("button", {
        onClick: v,
        disabled: l(m).$invalid,
        class: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, "Let me in!", 8, Z)
    ], 64));
  }
}, te = { class: "bg-white p-8 rounded-lg w-full max-w-2xl" }, se = { class: "mt-4 text-center" }, oe = {
  key: 0,
  class: "text-gray-600"
}, re = {
  key: 1,
  class: "text-gray-700 font-regular"
}, K = "api-key-change", de = {
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
  emits: [K],
  setup(c, { emit: N }) {
    const y = N, p = h(!0), a = (i) => {
      y(K, i);
    }, u = () => {
      p.value = !p.value;
    };
    return (i, d) => (t(), o("div", te, [
      p.value ? (t(), L(G, {
        key: 0,
        "product-name": c.productName,
        "base-url": c.baseUrl,
        onApiKeyChange: a
      }, null, 8, ["product-name", "base-url"])) : (t(), L(ee, {
        key: 1,
        "product-name": c.productName,
        "base-url": c.baseUrl,
        onApiKeyChange: a
      }, null, 8, ["product-name", "base-url"])),
      r("div", se, [
        p.value ? (t(), o("p", oe, [
          d[0] || (d[0] = q(" Don't have an account? ", -1)),
          r("button", {
            onClick: u,
            class: "text-indigo-500 hover:underline"
          }, "Registration")
        ])) : (t(), o("p", re, [
          d[1] || (d[1] = q(" Do you have an account? ", -1)),
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
  G as LoginForm,
  de as LoginOrRegistration,
  ee as RegistrationForm
};
