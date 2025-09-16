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
