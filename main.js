var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => StFlowPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// node_modules/@solothought/text2chart/dist_/index.mjs
function t() {
}
function e(t4, e2) {
  for (const n2 in e2) t4[n2] = e2[n2];
  return t4;
}
function n(t4) {
  return t4();
}
function o() {
  return /* @__PURE__ */ Object.create(null);
}
function i(t4) {
  t4.forEach(n);
}
function r(t4) {
  return "function" == typeof t4;
}
function s(t4, e2) {
  return t4 != t4 ? e2 == e2 : t4 !== e2 || t4 && "object" == typeof t4 || "function" == typeof t4;
}
function a(t4, e2) {
  return t4 != t4 ? e2 == e2 : t4 !== e2;
}
function l(e2, ...n2) {
  if (null == e2) {
    for (const t4 of n2) t4(void 0);
    return t;
  }
  const o2 = e2.subscribe(...n2);
  return o2.unsubscribe ? () => o2.unsubscribe() : o2;
}
function c(t4) {
  let e2;
  return l(t4, (t5) => e2 = t5)(), e2;
}
function d(t4, e2, n2) {
  t4.$$.on_destroy.push(l(e2, n2));
}
function u(t4, e2, n2, o2) {
  if (t4) {
    const i2 = h(t4, e2, n2, o2);
    return t4[0](i2);
  }
}
function h(t4, n2, o2, i2) {
  return t4[1] && i2 ? e(o2.ctx.slice(), t4[1](i2(n2))) : o2.ctx;
}
function p(t4, e2, n2, o2) {
  if (t4[2] && o2) {
    const i2 = t4[2](o2(n2));
    if (void 0 === e2.dirty) return i2;
    if ("object" == typeof i2) {
      const t5 = [], n3 = Math.max(e2.dirty.length, i2.length);
      for (let o3 = 0; o3 < n3; o3 += 1) t5[o3] = e2.dirty[o3] | i2[o3];
      return t5;
    }
    return e2.dirty | i2;
  }
  return e2.dirty;
}
function f(t4, e2, n2, o2, i2, r2) {
  if (i2) {
    const s2 = h(e2, n2, o2, r2);
    t4.p(s2, i2);
  }
}
function g(t4) {
  if (t4.ctx.length > 32) {
    const e2 = [], n2 = t4.ctx.length / 32;
    for (let t5 = 0; t5 < n2; t5++) e2[t5] = -1;
    return e2;
  }
  return -1;
}
function m(t4) {
  const e2 = {};
  for (const n2 in t4) "$" !== n2[0] && (e2[n2] = t4[n2]);
  return e2;
}
function y(t4, e2) {
  const n2 = {};
  e2 = new Set(e2);
  for (const o2 in t4) e2.has(o2) || "$" === o2[0] || (n2[o2] = t4[o2]);
  return n2;
}
function w(t4) {
  return null == t4 ? "" : t4;
}
function $(t4, e2, n2) {
  return t4.set(n2), e2;
}
function v(e2) {
  return e2 && r(e2.destroy) ? e2.destroy : t;
}
var x = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
function b(t4, e2) {
  t4.appendChild(e2);
}
function k(t4, e2, n2) {
  t4.insertBefore(e2, n2 || null);
}
function _(t4) {
  t4.parentNode && t4.parentNode.removeChild(t4);
}
function S(t4, e2) {
  for (let n2 = 0; n2 < t4.length; n2 += 1) t4[n2] && t4[n2].d(e2);
}
function E(t4) {
  return document.createElement(t4);
}
function C(t4) {
  return document.createElementNS("http://www.w3.org/2000/svg", t4);
}
function O(t4) {
  return document.createTextNode(t4);
}
function P() {
  return O(" ");
}
function M() {
  return O("");
}
function z(t4, e2, n2, o2) {
  return t4.addEventListener(e2, n2, o2), () => t4.removeEventListener(e2, n2, o2);
}
function N(t4, e2, n2) {
  null == n2 ? t4.removeAttribute(e2) : t4.getAttribute(e2) !== n2 && t4.setAttribute(e2, n2);
}
var L = ["width", "height"];
function I(t4, e2) {
  const n2 = Object.getOwnPropertyDescriptors(t4.__proto__);
  for (const o2 in e2) null == e2[o2] ? t4.removeAttribute(o2) : "style" === o2 ? t4.style.cssText = e2[o2] : "__value" === o2 ? t4.value = t4[o2] = e2[o2] : n2[o2] && n2[o2].set && -1 === L.indexOf(o2) ? t4[o2] = e2[o2] : N(t4, o2, e2[o2]);
}
function D(t4, e2) {
  e2 = "" + e2, t4.data !== e2 && (t4.data = e2);
}
function A(t4, e2, n2, o2) {
  null == n2 ? t4.style.removeProperty(e2) : t4.style.setProperty(e2, n2, o2 ? "important" : "");
}
function T(t4, e2, n2) {
  for (let n3 = 0; n3 < t4.options.length; n3 += 1) {
    const o2 = t4.options[n3];
    if (o2.__value === e2) return void (o2.selected = true);
  }
  n2 && void 0 === e2 || (t4.selectedIndex = -1);
}
var H;
var V;
function F() {
  if (void 0 === H) {
    H = false;
    try {
      "undefined" != typeof window && window.parent && window.parent.document;
    } catch (t4) {
      H = true;
    }
  }
  return H;
}
function W(t4, e2, n2) {
  t4.classList.toggle(e2, !!n2);
}
function X(t4, e2) {
  return new t4(e2);
}
function Y(t4) {
  V = t4;
}
function R() {
  if (!V) throw new Error("Function called outside component initialization");
  return V;
}
function Z(t4) {
  R().$$.on_mount.push(t4);
}
function B(t4) {
  R().$$.on_destroy.push(t4);
}
function K() {
  const t4 = R();
  return (e2, n2, { cancelable: o2 = false } = {}) => {
    const i2 = t4.$$.callbacks[e2];
    if (i2) {
      const r2 = function(t5, e3, { bubbles: n3 = false, cancelable: o3 = false } = {}) {
        return new CustomEvent(t5, { detail: e3, bubbles: n3, cancelable: o3 });
      }(e2, n2, { cancelable: o2 });
      return i2.slice().forEach((e3) => {
        e3.call(t4, r2);
      }), !r2.defaultPrevented;
    }
    return true;
  };
}
function G(t4, e2) {
  return R().$$.context.set(t4, e2), e2;
}
function j(t4) {
  return R().$$.context.get(t4);
}
function q(t4, e2) {
  const n2 = t4.$$.callbacks[e2.type];
  n2 && n2.slice().forEach((t5) => t5.call(this, e2));
}
var Q = [];
var U = [];
var J = [];
var tt = [];
var et = Promise.resolve();
var nt = false;
function ot() {
  nt || (nt = true, et.then(lt));
}
function it(t4) {
  J.push(t4);
}
function rt(t4) {
  tt.push(t4);
}
var st = /* @__PURE__ */ new Set();
var at = 0;
function lt() {
  if (0 !== at) return;
  const t4 = V;
  do {
    try {
      for (; at < Q.length; ) {
        const t5 = Q[at];
        at++, Y(t5), ct(t5.$$);
      }
    } catch (t5) {
      throw Q.length = 0, at = 0, t5;
    }
    for (Y(null), Q.length = 0, at = 0; U.length; ) U.pop()();
    for (let t5 = 0; t5 < J.length; t5 += 1) {
      const e2 = J[t5];
      st.has(e2) || (st.add(e2), e2());
    }
    J.length = 0;
  } while (Q.length);
  for (; tt.length; ) tt.pop()();
  nt = false, st.clear(), Y(t4);
}
function ct(t4) {
  if (null !== t4.fragment) {
    t4.update(), i(t4.before_update);
    const e2 = t4.dirty;
    t4.dirty = [-1], t4.fragment && t4.fragment.p(t4.ctx, e2), t4.after_update.forEach(it);
  }
}
var dt = /* @__PURE__ */ new Set();
var ut;
function ht() {
  ut = { r: 0, c: [], p: ut };
}
function pt() {
  ut.r || i(ut.c), ut = ut.p;
}
function ft(t4, e2) {
  t4 && t4.i && (dt.delete(t4), t4.i(e2));
}
function gt(t4, e2, n2, o2) {
  if (t4 && t4.o) {
    if (dt.has(t4)) return;
    dt.add(t4), ut.c.push(() => {
      dt.delete(t4), o2 && (n2 && t4.d(1), o2());
    }), t4.o(e2);
  } else o2 && o2();
}
function mt(t4) {
  return void 0 !== (t4 == null ? void 0 : t4.length) ? t4 : Array.from(t4);
}
function yt(t4, e2) {
  gt(t4, 1, 1, () => {
    e2.delete(t4.key);
  });
}
function wt(t4, e2, n2, o2, r2, s2, a2, l2, c2, d2, u2, h2) {
  let p2 = t4.length, f2 = s2.length, g2 = p2;
  const m2 = {};
  for (; g2--; ) m2[t4[g2].key] = g2;
  const y2 = [], w2 = /* @__PURE__ */ new Map(), $2 = /* @__PURE__ */ new Map(), v2 = [];
  for (g2 = f2; g2--; ) {
    const t5 = h2(r2, s2, g2), i2 = n2(t5);
    let l3 = a2.get(i2);
    l3 ? o2 && v2.push(() => l3.p(t5, e2)) : (l3 = d2(i2, t5), l3.c()), w2.set(i2, y2[g2] = l3), i2 in m2 && $2.set(i2, Math.abs(g2 - m2[i2]));
  }
  const x2 = /* @__PURE__ */ new Set(), b2 = /* @__PURE__ */ new Set();
  function k2(t5) {
    ft(t5, 1), t5.m(l2, u2), a2.set(t5.key, t5), u2 = t5.first, f2--;
  }
  for (; p2 && f2; ) {
    const e3 = y2[f2 - 1], n3 = t4[p2 - 1], o3 = e3.key, i2 = n3.key;
    e3 === n3 ? (u2 = e3.first, p2--, f2--) : w2.has(i2) ? !a2.has(o3) || x2.has(o3) ? k2(e3) : b2.has(i2) ? p2-- : $2.get(o3) > $2.get(i2) ? (b2.add(o3), k2(e3)) : (x2.add(i2), p2--) : (c2(n3, a2), p2--);
  }
  for (; p2--; ) {
    const e3 = t4[p2];
    w2.has(e3.key) || c2(e3, a2);
  }
  for (; f2; ) k2(y2[f2 - 1]);
  return i(v2), y2;
}
function $t(t4, e2) {
  const n2 = {}, o2 = {}, i2 = { $$scope: 1 };
  let r2 = t4.length;
  for (; r2--; ) {
    const s2 = t4[r2], a2 = e2[r2];
    if (a2) {
      for (const t5 in s2) t5 in a2 || (o2[t5] = 1);
      for (const t5 in a2) i2[t5] || (n2[t5] = a2[t5], i2[t5] = 1);
      t4[r2] = a2;
    } else for (const t5 in s2) i2[t5] = 1;
  }
  for (const t5 in o2) t5 in n2 || (n2[t5] = void 0);
  return n2;
}
function vt(t4) {
  return "object" == typeof t4 && null !== t4 ? t4 : {};
}
function xt(t4, e2, n2) {
  const o2 = t4.$$.props[e2];
  void 0 !== o2 && (t4.$$.bound[o2] = n2, n2(t4.$$.ctx[o2]));
}
function bt(t4) {
  t4 && t4.c();
}
function kt(t4, e2, o2) {
  const { fragment: s2, after_update: a2 } = t4.$$;
  s2 && s2.m(e2, o2), it(() => {
    const e3 = t4.$$.on_mount.map(n).filter(r);
    t4.$$.on_destroy ? t4.$$.on_destroy.push(...e3) : i(e3), t4.$$.on_mount = [];
  }), a2.forEach(it);
}
function _t(t4, e2) {
  const n2 = t4.$$;
  null !== n2.fragment && (!function(t5) {
    const e3 = [], n3 = [];
    J.forEach((o2) => -1 === t5.indexOf(o2) ? e3.push(o2) : n3.push(o2)), n3.forEach((t6) => t6()), J = e3;
  }(n2.after_update), i(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
}
function St(e2, n2, r2, s2, a2, l2, c2 = null, d2 = [-1]) {
  const u2 = V;
  Y(e2);
  const h2 = e2.$$ = { fragment: null, ctx: [], props: l2, update: t, not_equal: a2, bound: o(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(n2.context || (u2 ? u2.$$.context : [])), callbacks: o(), dirty: d2, skip_bound: false, root: n2.target || u2.$$.root };
  c2 && c2(h2.root);
  let p2 = false;
  if (h2.ctx = r2 ? r2(e2, n2.props || {}, (t4, n3, ...o2) => {
    const i2 = o2.length ? o2[0] : n3;
    return h2.ctx && a2(h2.ctx[t4], h2.ctx[t4] = i2) && (!h2.skip_bound && h2.bound[t4] && h2.bound[t4](i2), p2 && function(t5, e3) {
      -1 === t5.$$.dirty[0] && (Q.push(t5), ot(), t5.$$.dirty.fill(0)), t5.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
    }(e2, t4)), n3;
  }) : [], h2.update(), p2 = true, i(h2.before_update), h2.fragment = !!s2 && s2(h2.ctx), n2.target) {
    if (n2.hydrate) {
      const t4 = function(t5) {
        return Array.from(t5.childNodes);
      }(n2.target);
      h2.fragment && h2.fragment.l(t4), t4.forEach(_);
    } else h2.fragment && h2.fragment.c();
    n2.intro && ft(e2.$$.fragment), kt(e2, n2.target, n2.anchor), lt();
  }
  Y(u2);
}
var Et = class {
  constructor() {
    __publicField(this, "$$");
    __publicField(this, "$$set");
  }
  $destroy() {
    _t(this, 1), this.$destroy = t;
  }
  $on(e2, n2) {
    if (!r(n2)) return t;
    const o2 = this.$$.callbacks[e2] || (this.$$.callbacks[e2] = []);
    return o2.push(n2), () => {
      const t4 = o2.indexOf(n2);
      -1 !== t4 && o2.splice(t4, 1);
    };
  }
  $set(t4) {
    var e2;
    this.$$set && (e2 = t4, 0 !== Object.keys(e2).length) && (this.$$.skip_bound = true, this.$$set(t4), this.$$.skip_bound = false);
  }
};
"undefined" != typeof window && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add("4");
var Ct = /* @__PURE__ */ (() => {
  let t4 = 0;
  return () => (t4 += 1, `u${`0000${(Math.random() * 36 ** 4 | 0).toString(36)}`.slice(-4)}${t4}`);
})();
function Ot(t4) {
  const e2 = [];
  for (let n2 = 0, o2 = t4.length; n2 < o2; n2++) e2.push(t4[n2]);
  return e2;
}
function Pt(t4, e2) {
  const n2 = (t4.ownerDocument.defaultView || window).getComputedStyle(t4).getPropertyValue(e2);
  return n2 ? parseFloat(n2.replace("px", "")) : 0;
}
function Mt(t4, e2 = {}) {
  return { width: e2.width || function(t5) {
    const e3 = Pt(t5, "border-left-width"), n2 = Pt(t5, "border-right-width");
    return t5.clientWidth + e3 + n2;
  }(t4), height: e2.height || function(t5) {
    const e3 = Pt(t5, "border-top-width"), n2 = Pt(t5, "border-bottom-width");
    return t5.clientHeight + e3 + n2;
  }(t4) };
}
var zt = 16384;
function Nt(t4) {
  return new Promise((e2, n2) => {
    const o2 = new Image();
    o2.decode = () => e2(o2), o2.onload = () => e2(o2), o2.onerror = n2, o2.crossOrigin = "anonymous", o2.decoding = "async", o2.src = t4;
  });
}
function Lt(t4, e2, n2) {
  return __async(this, null, function* () {
    const o2 = "http://www.w3.org/2000/svg", i2 = document.createElementNS(o2, "svg"), r2 = document.createElementNS(o2, "foreignObject");
    return i2.setAttribute("width", `${e2}`), i2.setAttribute("height", `${n2}`), i2.setAttribute("viewBox", `0 0 ${e2} ${n2}`), r2.setAttribute("width", "100%"), r2.setAttribute("height", "100%"), r2.setAttribute("x", "0"), r2.setAttribute("y", "0"), r2.setAttribute("externalResourcesRequired", "true"), i2.appendChild(r2), r2.appendChild(t4), function(t5) {
      return __async(this, null, function* () {
        return Promise.resolve().then(() => new XMLSerializer().serializeToString(t5)).then(encodeURIComponent).then((t6) => `data:image/svg+xml;charset=utf-8,${t6}`);
      });
    }(i2);
  });
}
var It = (t4, e2) => {
  if (t4 instanceof e2) return true;
  const n2 = Object.getPrototypeOf(t4);
  return null !== n2 && (n2.constructor.name === e2.name || It(n2, e2));
};
function Dt(t4, e2, n2) {
  const o2 = `.${t4}:${e2}`, i2 = n2.cssText ? function(t5) {
    const e3 = t5.getPropertyValue("content");
    return `${t5.cssText} content: '${e3.replace(/'|"/g, "")}';`;
  }(n2) : function(t5) {
    return Ot(t5).map((e3) => `${e3}: ${t5.getPropertyValue(e3)}${t5.getPropertyPriority(e3) ? " !important" : ""};`).join(" ");
  }(n2);
  return document.createTextNode(`${o2}{${i2}}`);
}
function At(t4, e2, n2) {
  const o2 = window.getComputedStyle(t4, n2), i2 = o2.getPropertyValue("content");
  if ("" === i2 || "none" === i2) return;
  const r2 = Ct();
  try {
    e2.className = `${e2.className} ${r2}`;
  } catch (t5) {
    return;
  }
  const s2 = document.createElement("style");
  s2.appendChild(Dt(r2, n2, o2)), e2.appendChild(s2);
}
var Tt = "application/font-woff";
var Ht = "image/jpeg";
var Vt = { woff: Tt, woff2: Tt, ttf: "application/font-truetype", eot: "application/vnd.ms-fontobject", png: "image/png", jpg: Ht, jpeg: Ht, gif: "image/gif", tiff: "image/tiff", svg: "image/svg+xml", webp: "image/webp" };
function Ft(t4) {
  const e2 = function(t5) {
    const e3 = /\.([^./]*?)$/g.exec(t5);
    return e3 ? e3[1] : "";
  }(t4).toLowerCase();
  return Vt[e2] || "";
}
function Wt(t4) {
  return -1 !== t4.search(/^(data:)/);
}
function Xt(t4, e2) {
  return `data:${e2};base64,${t4}`;
}
function Yt(t4, e2, n2) {
  return __async(this, null, function* () {
    const o2 = yield fetch(t4, e2);
    if (404 === o2.status) throw new Error(`Resource "${o2.url}" not found`);
    const i2 = yield o2.blob();
    return new Promise((t5, e3) => {
      const r2 = new FileReader();
      r2.onerror = e3, r2.onloadend = () => {
        try {
          t5(n2({ res: o2, result: r2.result }));
        } catch (t6) {
          e3(t6);
        }
      }, r2.readAsDataURL(i2);
    });
  });
}
var Rt = {};
function Zt(t4, e2, n2) {
  return __async(this, null, function* () {
    const o2 = function(t5, e3, n3) {
      let o3 = t5.replace(/\?.*/, "");
      return n3 && (o3 = t5), /ttf|otf|eot|woff2?/i.test(o3) && (o3 = o3.replace(/.*\//, "")), e3 ? `[${e3}]${o3}` : o3;
    }(t4, e2, n2.includeQueryParams);
    if (null != Rt[o2]) return Rt[o2];
    let i2;
    n2.cacheBust && (t4 += (/\?/.test(t4) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
    try {
      const o3 = yield Yt(t4, n2.fetchRequestInit, ({ res: t5, result: n3 }) => (e2 || (e2 = t5.headers.get("Content-Type") || ""), function(t6) {
        return t6.split(/,/)[1];
      }(n3)));
      i2 = Xt(o3, e2);
    } catch (e3) {
      i2 = n2.imagePlaceholder || "";
      let o3 = `Failed to fetch resource: ${t4}`;
      e3 && (o3 = "string" == typeof e3 ? e3 : e3.message), o3 && console.warn(o3);
    }
    return Rt[o2] = i2, i2;
  });
}
function Bt(t4, e2) {
  return __async(this, null, function* () {
    return It(t4, HTMLCanvasElement) ? function(t5) {
      return __async(this, null, function* () {
        const e3 = t5.toDataURL();
        return "data:," === e3 ? t5.cloneNode(false) : Nt(e3);
      });
    }(t4) : It(t4, HTMLVideoElement) ? function(t5, e3) {
      return __async(this, null, function* () {
        if (t5.currentSrc) {
          const e4 = document.createElement("canvas"), n3 = e4.getContext("2d");
          return e4.width = t5.clientWidth, e4.height = t5.clientHeight, null == n3 || n3.drawImage(t5, 0, 0, e4.width, e4.height), Nt(e4.toDataURL());
        }
        const n2 = t5.poster, o2 = Ft(n2);
        return Nt(yield Zt(n2, o2, e3));
      });
    }(t4, e2) : It(t4, HTMLIFrameElement) ? function(t5) {
      return __async(this, null, function* () {
        var e3;
        try {
          if (null === (e3 = null == t5 ? void 0 : t5.contentDocument) || void 0 === e3 ? void 0 : e3.body) return yield jt(t5.contentDocument.body, {}, true);
        } catch (t6) {
        }
        return t5.cloneNode(false);
      });
    }(t4) : t4.cloneNode(false);
  });
}
var Kt = (t4) => null != t4.tagName && "SLOT" === t4.tagName.toUpperCase();
function Gt(t4, e2) {
  return It(e2, Element) && (function(t5, e3) {
    const n2 = e3.style;
    if (!n2) return;
    const o2 = window.getComputedStyle(t5);
    o2.cssText ? (n2.cssText = o2.cssText, n2.transformOrigin = o2.transformOrigin) : Ot(o2).forEach((i2) => {
      let r2 = o2.getPropertyValue(i2);
      if ("font-size" === i2 && r2.endsWith("px")) {
        const t6 = Math.floor(parseFloat(r2.substring(0, r2.length - 2))) - 0.1;
        r2 = `${t6}px`;
      }
      It(t5, HTMLIFrameElement) && "display" === i2 && "inline" === r2 && (r2 = "block"), "d" === i2 && e3.getAttribute("d") && (r2 = `path(${e3.getAttribute("d")})`), n2.setProperty(i2, r2, o2.getPropertyPriority(i2));
    });
  }(t4, e2), function(t5, e3) {
    At(t5, e3, ":before"), At(t5, e3, ":after");
  }(t4, e2), function(t5, e3) {
    It(t5, HTMLTextAreaElement) && (e3.innerHTML = t5.value), It(t5, HTMLInputElement) && e3.setAttribute("value", t5.value);
  }(t4, e2), function(t5, e3) {
    if (It(t5, HTMLSelectElement)) {
      const n2 = e3, o2 = Array.from(n2.children).find((e4) => t5.value === e4.getAttribute("value"));
      o2 && o2.setAttribute("selected", "");
    }
  }(t4, e2)), e2;
}
function jt(t4, e2, n2) {
  return __async(this, null, function* () {
    return n2 || !e2.filter || e2.filter(t4) ? Promise.resolve(t4).then((t5) => Bt(t5, e2)).then((n3) => function(t5, e3, n4) {
      return __async(this, null, function* () {
        var o2, i2;
        let r2 = [];
        return r2 = Kt(t5) && t5.assignedNodes ? Ot(t5.assignedNodes()) : It(t5, HTMLIFrameElement) && (null === (o2 = t5.contentDocument) || void 0 === o2 ? void 0 : o2.body) ? Ot(t5.contentDocument.body.childNodes) : Ot((null !== (i2 = t5.shadowRoot) && void 0 !== i2 ? i2 : t5).childNodes), 0 === r2.length || It(t5, HTMLVideoElement) || (yield r2.reduce((t6, o3) => t6.then(() => jt(o3, n4)).then((t7) => {
          t7 && e3.appendChild(t7);
        }), Promise.resolve())), e3;
      });
    }(t4, n3, e2)).then((e3) => Gt(t4, e3)).then((t5) => function(t6, e3) {
      return __async(this, null, function* () {
        const n3 = t6.querySelectorAll ? t6.querySelectorAll("use") : [];
        if (0 === n3.length) return t6;
        const o2 = {};
        for (let i3 = 0; i3 < n3.length; i3++) {
          const r2 = n3[i3].getAttribute("xlink:href");
          if (r2) {
            const n4 = t6.querySelector(r2), i4 = document.querySelector(r2);
            n4 || !i4 || o2[r2] || (o2[r2] = yield jt(i4, e3, true));
          }
        }
        const i2 = Object.values(o2);
        if (i2.length) {
          const e4 = "http://www.w3.org/1999/xhtml", n4 = document.createElementNS(e4, "svg");
          n4.setAttribute("xmlns", e4), n4.style.position = "absolute", n4.style.width = "0", n4.style.height = "0", n4.style.overflow = "hidden", n4.style.display = "none";
          const o3 = document.createElementNS(e4, "defs");
          n4.appendChild(o3);
          for (let t7 = 0; t7 < i2.length; t7++) o3.appendChild(i2[t7]);
          t6.appendChild(n4);
        }
        return t6;
      });
    }(t5, e2)) : null;
  });
}
var qt = /url\((['"]?)([^'"]+?)\1\)/g;
var Qt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
var Ut = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Jt(t4, e2, n2, o2, i2) {
  return __async(this, null, function* () {
    try {
      const r2 = n2 ? function(t5, e3) {
        if (t5.match(/^[a-z]+:\/\//i)) return t5;
        if (t5.match(/^\/\//)) return window.location.protocol + t5;
        if (t5.match(/^[a-z]+:/i)) return t5;
        const n3 = document.implementation.createHTMLDocument(), o3 = n3.createElement("base"), i3 = n3.createElement("a");
        return n3.head.appendChild(o3), n3.body.appendChild(i3), e3 && (o3.href = e3), i3.href = t5, i3.href;
      }(e2, n2) : e2, s2 = Ft(e2);
      let a2;
      if (i2) {
        a2 = Xt(yield i2(r2), s2);
      } else a2 = yield Zt(r2, s2, o2);
      return t4.replace(function(t5) {
        const e3 = t5.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
        return new RegExp(`(url\\(['"]?)(${e3})(['"]?\\))`, "g");
      }(e2), `$1${a2}$3`);
    } catch (t5) {
    }
    return t4;
  });
}
function te(t4) {
  return -1 !== t4.search(qt);
}
function ee(t4, e2, n2) {
  return __async(this, null, function* () {
    if (!te(t4)) return t4;
    const o2 = function(t5, { preferredFontFormat: e3 }) {
      return e3 ? t5.replace(Ut, (t6) => {
        for (; ; ) {
          const [n3, , o3] = Qt.exec(t6) || [];
          if (!o3) return "";
          if (o3 === e3) return `src: ${n3};`;
        }
      }) : t5;
    }(t4, n2), i2 = function(t5) {
      const e3 = [];
      return t5.replace(qt, (t6, n3, o3) => (e3.push(o3), t6)), e3.filter((t6) => !Wt(t6));
    }(o2);
    return i2.reduce((t5, o3) => t5.then((t6) => Jt(t6, o3, e2, n2)), Promise.resolve(o2));
  });
}
function ne(t4, e2, n2) {
  return __async(this, null, function* () {
    var o2;
    const i2 = null === (o2 = e2.style) || void 0 === o2 ? void 0 : o2.getPropertyValue(t4);
    if (i2) {
      const o3 = yield ee(i2, null, n2);
      return e2.style.setProperty(t4, o3, e2.style.getPropertyPriority(t4)), true;
    }
    return false;
  });
}
function oe(t4, e2) {
  return __async(this, null, function* () {
    It(t4, Element) && (yield function(t5, e3) {
      return __async(this, null, function* () {
        (yield ne("background", t5, e3)) || (yield ne("background-image", t5, e3)), (yield ne("mask", t5, e3)) || (yield ne("mask-image", t5, e3));
      });
    }(t4, e2), yield function(t5, e3) {
      return __async(this, null, function* () {
        const n2 = It(t5, HTMLImageElement);
        if ((!n2 || Wt(t5.src)) && (!It(t5, SVGImageElement) || Wt(t5.href.baseVal))) return;
        const o2 = n2 ? t5.src : t5.href.baseVal, i2 = yield Zt(o2, Ft(o2), e3);
        yield new Promise((e4, o3) => {
          t5.onload = e4, t5.onerror = o3;
          const r2 = t5;
          r2.decode && (r2.decode = e4), "lazy" === r2.loading && (r2.loading = "eager"), n2 ? (t5.srcset = "", t5.src = i2) : t5.href.baseVal = i2;
        });
      });
    }(t4, e2), yield function(t5, e3) {
      return __async(this, null, function* () {
        const n2 = Ot(t5.childNodes).map((t6) => oe(t6, e3));
        yield Promise.all(n2).then(() => t5);
      });
    }(t4, e2));
  });
}
var ie = {};
function re(t4) {
  return __async(this, null, function* () {
    let e2 = ie[t4];
    if (null != e2) return e2;
    const n2 = yield fetch(t4);
    return e2 = { url: t4, cssText: yield n2.text() }, ie[t4] = e2, e2;
  });
}
function se(t4, e2) {
  return __async(this, null, function* () {
    let n2 = t4.cssText;
    const o2 = /url\(["']?([^"')]+)["']?\)/g, i2 = (n2.match(/url\([^)]+\)/g) || []).map((i3) => __async(this, null, function* () {
      let r2 = i3.replace(o2, "$1");
      return r2.startsWith("https://") || (r2 = new URL(r2, t4.url).href), Yt(r2, e2.fetchRequestInit, ({ result: t5 }) => (n2 = n2.replace(i3, `url(${t5})`), [i3, t5]));
    }));
    return Promise.all(i2).then(() => n2);
  });
}
function ae(t4) {
  if (null == t4) return [];
  const e2 = [];
  let n2 = t4.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
  const o2 = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const t5 = o2.exec(n2);
    if (null === t5) break;
    e2.push(t5[0]);
  }
  n2 = n2.replace(o2, "");
  const i2 = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, r2 = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
  for (; ; ) {
    let t5 = i2.exec(n2);
    if (null === t5) {
      if (t5 = r2.exec(n2), null === t5) break;
      i2.lastIndex = r2.lastIndex;
    } else r2.lastIndex = i2.lastIndex;
    e2.push(t5[0]);
  }
  return e2;
}
function le(t4, e2) {
  return __async(this, null, function* () {
    if (null == t4.ownerDocument) throw new Error("Provided element is not within a Document");
    const n2 = Ot(t4.ownerDocument.styleSheets), o2 = yield function(t5, e3) {
      return __async(this, null, function* () {
        const n3 = [], o3 = [];
        return t5.forEach((n4) => {
          if ("cssRules" in n4) try {
            Ot(n4.cssRules || []).forEach((t6, i2) => {
              if (t6.type === CSSRule.IMPORT_RULE) {
                let r2 = i2 + 1;
                const s2 = re(t6.href).then((t7) => se(t7, e3)).then((t7) => ae(t7).forEach((t8) => {
                  try {
                    n4.insertRule(t8, t8.startsWith("@import") ? r2 += 1 : n4.cssRules.length);
                  } catch (e4) {
                    console.error("Error inserting rule from remote css", { rule: t8, error: e4 });
                  }
                })).catch((t7) => {
                  console.error("Error loading remote css", t7.toString());
                });
                o3.push(s2);
              }
            });
          } catch (i2) {
            const r2 = t5.find((t6) => null == t6.href) || document.styleSheets[0];
            null != n4.href && o3.push(re(n4.href).then((t6) => se(t6, e3)).then((t6) => ae(t6).forEach((t7) => {
              r2.insertRule(t7, n4.cssRules.length);
            })).catch((t6) => {
              console.error("Error loading remote stylesheet", t6);
            })), console.error("Error inlining remote css file", i2);
          }
        }), Promise.all(o3).then(() => (t5.forEach((t6) => {
          if ("cssRules" in t6) try {
            Ot(t6.cssRules || []).forEach((t7) => {
              n3.push(t7);
            });
          } catch (e4) {
            console.error(`Error while reading CSS rules from ${t6.href}`, e4);
          }
        }), n3));
      });
    }(n2, e2);
    return function(t5) {
      return t5.filter((t6) => t6.type === CSSRule.FONT_FACE_RULE).filter((t6) => te(t6.style.getPropertyValue("src")));
    }(o2);
  });
}
function ce(t4, e2) {
  return __async(this, null, function* () {
    const n2 = null != e2.fontEmbedCSS ? e2.fontEmbedCSS : e2.skipFonts ? null : yield function(t5, e3) {
      return __async(this, null, function* () {
        const n3 = yield le(t5, e3);
        return (yield Promise.all(n3.map((t6) => {
          const n4 = t6.parentStyleSheet ? t6.parentStyleSheet.href : null;
          return ee(t6.cssText, n4, e3);
        }))).join("\n");
      });
    }(t4, e2);
    if (n2) {
      const e3 = document.createElement("style"), o2 = document.createTextNode(n2);
      e3.appendChild(o2), t4.firstChild ? t4.insertBefore(e3, t4.firstChild) : t4.appendChild(e3);
    }
  });
}
function de(_0) {
  return __async(this, arguments, function* (t4, e2 = {}) {
    const { width: n2, height: o2 } = Mt(t4, e2), i2 = yield jt(t4, e2, true);
    yield ce(i2, e2), yield oe(i2, e2), function(t5, e3) {
      const { style: n3 } = t5;
      e3.backgroundColor && (n3.backgroundColor = e3.backgroundColor), e3.width && (n3.width = `${e3.width}px`), e3.height && (n3.height = `${e3.height}px`);
      const o3 = e3.style;
      null != o3 && Object.keys(o3).forEach((t6) => {
        n3[t6] = o3[t6];
      });
    }(i2, e2);
    return yield Lt(i2, n2, o2);
  });
}
function ue(_0) {
  return __async(this, arguments, function* (t4, e2 = {}) {
    const { width: n2, height: o2 } = Mt(t4, e2), i2 = yield de(t4, e2), r2 = yield Nt(i2), s2 = document.createElement("canvas"), a2 = s2.getContext("2d"), l2 = e2.pixelRatio || function() {
      let t5, e3;
      try {
        e3 = process;
      } catch (t6) {
      }
      const n3 = e3 && e3.env ? e3.env.devicePixelRatio : null;
      return n3 && (t5 = parseInt(n3, 10), Number.isNaN(t5) && (t5 = 1)), t5 || window.devicePixelRatio || 1;
    }(), c2 = e2.canvasWidth || n2, d2 = e2.canvasHeight || o2;
    return s2.width = c2 * l2, s2.height = d2 * l2, e2.skipAutoScale || function(t5) {
      (t5.width > zt || t5.height > zt) && (t5.width > zt && t5.height > zt ? t5.width > t5.height ? (t5.height *= zt / t5.width, t5.width = zt) : (t5.width *= zt / t5.height, t5.height = zt) : t5.width > zt ? (t5.height *= zt / t5.width, t5.width = zt) : (t5.width *= zt / t5.height, t5.height = zt));
    }(s2), s2.style.width = `${c2}`, s2.style.height = `${d2}`, e2.backgroundColor && (a2.fillStyle = e2.backgroundColor, a2.fillRect(0, 0, s2.width, s2.height)), a2.drawImage(r2, 0, 0, s2.width, s2.height), s2;
  });
}
var he = [];
function pe(t4, e2) {
  return { subscribe: fe(t4, e2).subscribe };
}
function fe(e2, n2 = t) {
  let o2;
  const i2 = /* @__PURE__ */ new Set();
  function r2(t4) {
    if (s(e2, t4) && (e2 = t4, o2)) {
      const t5 = !he.length;
      for (const t6 of i2) t6[1](), he.push(t6, e2);
      if (t5) {
        for (let t6 = 0; t6 < he.length; t6 += 2) he[t6][0](he[t6 + 1]);
        he.length = 0;
      }
    }
  }
  function a2(t4) {
    r2(t4(e2));
  }
  return { set: r2, update: a2, subscribe: function(s2, l2 = t) {
    const c2 = [s2, l2];
    return i2.add(c2), 1 === i2.size && (o2 = n2(r2, a2) || t), s2(e2), () => {
      i2.delete(c2), 0 === i2.size && o2 && (o2(), o2 = null);
    };
  } };
}
function ge(e2, n2, o2) {
  const s2 = !Array.isArray(e2), a2 = s2 ? [e2] : e2;
  if (!a2.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
  const c2 = n2.length < 2;
  return pe(o2, (e3, o3) => {
    let d2 = false;
    const u2 = [];
    let h2 = 0, p2 = t;
    const f2 = () => {
      if (h2) return;
      p2();
      const i2 = n2(s2 ? u2[0] : u2, e3, o3);
      c2 ? e3(i2) : p2 = r(i2) ? i2 : t;
    }, g2 = a2.map((t4, e4) => l(t4, (t5) => {
      u2[e4] = t5, h2 &= ~(1 << e4), d2 && f2();
    }, () => {
      h2 |= 1 << e4;
    }));
    return d2 = true, f2(), function() {
      i(g2), p2(), d2 = false;
    };
  });
}
function me(t4) {
  if ("string" == typeof t4 || "number" == typeof t4) return "" + t4;
  let e2 = "";
  if (Array.isArray(t4)) for (let n2, o2 = 0; o2 < t4.length; o2++) "" !== (n2 = me(t4[o2])) && (e2 += (e2 && " ") + n2);
  else for (let n2 in t4) t4[n2] && (e2 += (e2 && " ") + n2);
  return e2;
}
var ye = { value: () => {
} };
function we() {
  for (var t4, e2 = 0, n2 = arguments.length, o2 = {}; e2 < n2; ++e2) {
    if (!(t4 = arguments[e2] + "") || t4 in o2 || /[\s.]/.test(t4)) throw new Error("illegal type: " + t4);
    o2[t4] = [];
  }
  return new $e(o2);
}
function $e(t4) {
  this._ = t4;
}
function ve(t4, e2) {
  for (var n2, o2 = 0, i2 = t4.length; o2 < i2; ++o2) if ((n2 = t4[o2]).name === e2) return n2.value;
}
function xe(t4, e2, n2) {
  for (var o2 = 0, i2 = t4.length; o2 < i2; ++o2) if (t4[o2].name === e2) {
    t4[o2] = ye, t4 = t4.slice(0, o2).concat(t4.slice(o2 + 1));
    break;
  }
  return null != n2 && t4.push({ name: e2, value: n2 }), t4;
}
$e.prototype = we.prototype = { constructor: $e, on: function(t4, e2) {
  var n2, o2, i2 = this._, r2 = (o2 = i2, (t4 + "").trim().split(/^|\s+/).map(function(t5) {
    var e3 = "", n3 = t5.indexOf(".");
    if (n3 >= 0 && (e3 = t5.slice(n3 + 1), t5 = t5.slice(0, n3)), t5 && !o2.hasOwnProperty(t5)) throw new Error("unknown type: " + t5);
    return { type: t5, name: e3 };
  })), s2 = -1, a2 = r2.length;
  if (!(arguments.length < 2)) {
    if (null != e2 && "function" != typeof e2) throw new Error("invalid callback: " + e2);
    for (; ++s2 < a2; ) if (n2 = (t4 = r2[s2]).type) i2[n2] = xe(i2[n2], t4.name, e2);
    else if (null == e2) for (n2 in i2) i2[n2] = xe(i2[n2], t4.name, null);
    return this;
  }
  for (; ++s2 < a2; ) if ((n2 = (t4 = r2[s2]).type) && (n2 = ve(i2[n2], t4.name))) return n2;
}, copy: function() {
  var t4 = {}, e2 = this._;
  for (var n2 in e2) t4[n2] = e2[n2].slice();
  return new $e(t4);
}, call: function(t4, e2) {
  if ((n2 = arguments.length - 2) > 0) for (var n2, o2, i2 = new Array(n2), r2 = 0; r2 < n2; ++r2) i2[r2] = arguments[r2 + 2];
  if (!this._.hasOwnProperty(t4)) throw new Error("unknown type: " + t4);
  for (r2 = 0, n2 = (o2 = this._[t4]).length; r2 < n2; ++r2) o2[r2].value.apply(e2, i2);
}, apply: function(t4, e2, n2) {
  if (!this._.hasOwnProperty(t4)) throw new Error("unknown type: " + t4);
  for (var o2 = this._[t4], i2 = 0, r2 = o2.length; i2 < r2; ++i2) o2[i2].value.apply(e2, n2);
} };
var be = "http://www.w3.org/1999/xhtml";
var ke = { svg: "http://www.w3.org/2000/svg", xhtml: be, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
function _e(t4) {
  var e2 = t4 += "", n2 = e2.indexOf(":");
  return n2 >= 0 && "xmlns" !== (e2 = t4.slice(0, n2)) && (t4 = t4.slice(n2 + 1)), ke.hasOwnProperty(e2) ? { space: ke[e2], local: t4 } : t4;
}
function Se(t4) {
  return function() {
    var e2 = this.ownerDocument, n2 = this.namespaceURI;
    return n2 === be && e2.documentElement.namespaceURI === be ? e2.createElement(t4) : e2.createElementNS(n2, t4);
  };
}
function Ee(t4) {
  return function() {
    return this.ownerDocument.createElementNS(t4.space, t4.local);
  };
}
function Ce(t4) {
  var e2 = _e(t4);
  return (e2.local ? Ee : Se)(e2);
}
function Oe() {
}
function Pe(t4) {
  return null == t4 ? Oe : function() {
    return this.querySelector(t4);
  };
}
function Me() {
  return [];
}
function ze(t4) {
  return null == t4 ? Me : function() {
    return this.querySelectorAll(t4);
  };
}
function Ne(t4) {
  return function() {
    return null == (e2 = t4.apply(this, arguments)) ? [] : Array.isArray(e2) ? e2 : Array.from(e2);
    var e2;
  };
}
function Le(t4) {
  return function() {
    return this.matches(t4);
  };
}
function Ie(t4) {
  return function(e2) {
    return e2.matches(t4);
  };
}
var De = Array.prototype.find;
function Ae() {
  return this.firstElementChild;
}
var Te = Array.prototype.filter;
function He() {
  return Array.from(this.children);
}
function Ve(t4) {
  return new Array(t4.length);
}
function Fe(t4, e2) {
  this.ownerDocument = t4.ownerDocument, this.namespaceURI = t4.namespaceURI, this._next = null, this._parent = t4, this.__data__ = e2;
}
function We(t4, e2, n2, o2, i2, r2) {
  for (var s2, a2 = 0, l2 = e2.length, c2 = r2.length; a2 < c2; ++a2) (s2 = e2[a2]) ? (s2.__data__ = r2[a2], o2[a2] = s2) : n2[a2] = new Fe(t4, r2[a2]);
  for (; a2 < l2; ++a2) (s2 = e2[a2]) && (i2[a2] = s2);
}
function Xe(t4, e2, n2, o2, i2, r2, s2) {
  var a2, l2, c2, d2 = /* @__PURE__ */ new Map(), u2 = e2.length, h2 = r2.length, p2 = new Array(u2);
  for (a2 = 0; a2 < u2; ++a2) (l2 = e2[a2]) && (p2[a2] = c2 = s2.call(l2, l2.__data__, a2, e2) + "", d2.has(c2) ? i2[a2] = l2 : d2.set(c2, l2));
  for (a2 = 0; a2 < h2; ++a2) c2 = s2.call(t4, r2[a2], a2, r2) + "", (l2 = d2.get(c2)) ? (o2[a2] = l2, l2.__data__ = r2[a2], d2.delete(c2)) : n2[a2] = new Fe(t4, r2[a2]);
  for (a2 = 0; a2 < u2; ++a2) (l2 = e2[a2]) && d2.get(p2[a2]) === l2 && (i2[a2] = l2);
}
function Ye(t4) {
  return t4.__data__;
}
function Re(t4) {
  return "object" == typeof t4 && "length" in t4 ? t4 : Array.from(t4);
}
function Ze(t4, e2) {
  return t4 < e2 ? -1 : t4 > e2 ? 1 : t4 >= e2 ? 0 : NaN;
}
function Be(t4) {
  return function() {
    this.removeAttribute(t4);
  };
}
function Ke(t4) {
  return function() {
    this.removeAttributeNS(t4.space, t4.local);
  };
}
function Ge(t4, e2) {
  return function() {
    this.setAttribute(t4, e2);
  };
}
function je(t4, e2) {
  return function() {
    this.setAttributeNS(t4.space, t4.local, e2);
  };
}
function qe(t4, e2) {
  return function() {
    var n2 = e2.apply(this, arguments);
    null == n2 ? this.removeAttribute(t4) : this.setAttribute(t4, n2);
  };
}
function Qe(t4, e2) {
  return function() {
    var n2 = e2.apply(this, arguments);
    null == n2 ? this.removeAttributeNS(t4.space, t4.local) : this.setAttributeNS(t4.space, t4.local, n2);
  };
}
function Ue(t4) {
  return t4.ownerDocument && t4.ownerDocument.defaultView || t4.document && t4 || t4.defaultView;
}
function Je(t4) {
  return function() {
    this.style.removeProperty(t4);
  };
}
function tn(t4, e2, n2) {
  return function() {
    this.style.setProperty(t4, e2, n2);
  };
}
function en(t4, e2, n2) {
  return function() {
    var o2 = e2.apply(this, arguments);
    null == o2 ? this.style.removeProperty(t4) : this.style.setProperty(t4, o2, n2);
  };
}
function nn(t4, e2) {
  return t4.style.getPropertyValue(e2) || Ue(t4).getComputedStyle(t4, null).getPropertyValue(e2);
}
function on(t4) {
  return function() {
    delete this[t4];
  };
}
function rn(t4, e2) {
  return function() {
    this[t4] = e2;
  };
}
function sn(t4, e2) {
  return function() {
    var n2 = e2.apply(this, arguments);
    null == n2 ? delete this[t4] : this[t4] = n2;
  };
}
function an(t4) {
  return t4.trim().split(/^|\s+/);
}
function ln(t4) {
  return t4.classList || new cn(t4);
}
function cn(t4) {
  this._node = t4, this._names = an(t4.getAttribute("class") || "");
}
function dn(t4, e2) {
  for (var n2 = ln(t4), o2 = -1, i2 = e2.length; ++o2 < i2; ) n2.add(e2[o2]);
}
function un(t4, e2) {
  for (var n2 = ln(t4), o2 = -1, i2 = e2.length; ++o2 < i2; ) n2.remove(e2[o2]);
}
function hn(t4) {
  return function() {
    dn(this, t4);
  };
}
function pn(t4) {
  return function() {
    un(this, t4);
  };
}
function fn(t4, e2) {
  return function() {
    (e2.apply(this, arguments) ? dn : un)(this, t4);
  };
}
function gn() {
  this.textContent = "";
}
function mn(t4) {
  return function() {
    this.textContent = t4;
  };
}
function yn(t4) {
  return function() {
    var e2 = t4.apply(this, arguments);
    this.textContent = null == e2 ? "" : e2;
  };
}
function wn() {
  this.innerHTML = "";
}
function $n(t4) {
  return function() {
    this.innerHTML = t4;
  };
}
function vn(t4) {
  return function() {
    var e2 = t4.apply(this, arguments);
    this.innerHTML = null == e2 ? "" : e2;
  };
}
function xn() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function bn() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function kn() {
  return null;
}
function _n() {
  var t4 = this.parentNode;
  t4 && t4.removeChild(this);
}
function Sn() {
  var t4 = this.cloneNode(false), e2 = this.parentNode;
  return e2 ? e2.insertBefore(t4, this.nextSibling) : t4;
}
function En() {
  var t4 = this.cloneNode(true), e2 = this.parentNode;
  return e2 ? e2.insertBefore(t4, this.nextSibling) : t4;
}
function Cn(t4) {
  return function() {
    var e2 = this.__on;
    if (e2) {
      for (var n2, o2 = 0, i2 = -1, r2 = e2.length; o2 < r2; ++o2) n2 = e2[o2], t4.type && n2.type !== t4.type || n2.name !== t4.name ? e2[++i2] = n2 : this.removeEventListener(n2.type, n2.listener, n2.options);
      ++i2 ? e2.length = i2 : delete this.__on;
    }
  };
}
function On(t4, e2, n2) {
  return function() {
    var o2, i2 = this.__on, r2 = /* @__PURE__ */ function(t5) {
      return function(e3) {
        t5.call(this, e3, this.__data__);
      };
    }(e2);
    if (i2) {
      for (var s2 = 0, a2 = i2.length; s2 < a2; ++s2) if ((o2 = i2[s2]).type === t4.type && o2.name === t4.name) return this.removeEventListener(o2.type, o2.listener, o2.options), this.addEventListener(o2.type, o2.listener = r2, o2.options = n2), void (o2.value = e2);
    }
    this.addEventListener(t4.type, r2, n2), o2 = { type: t4.type, name: t4.name, value: e2, listener: r2, options: n2 }, i2 ? i2.push(o2) : this.__on = [o2];
  };
}
function Pn(t4, e2, n2) {
  var o2 = Ue(t4), i2 = o2.CustomEvent;
  "function" == typeof i2 ? i2 = new i2(e2, n2) : (i2 = o2.document.createEvent("Event"), n2 ? (i2.initEvent(e2, n2.bubbles, n2.cancelable), i2.detail = n2.detail) : i2.initEvent(e2, false, false)), t4.dispatchEvent(i2);
}
function Mn(t4, e2) {
  return function() {
    return Pn(this, t4, e2);
  };
}
function zn(t4, e2) {
  return function() {
    return Pn(this, t4, e2.apply(this, arguments));
  };
}
Fe.prototype = { constructor: Fe, appendChild: function(t4) {
  return this._parent.insertBefore(t4, this._next);
}, insertBefore: function(t4, e2) {
  return this._parent.insertBefore(t4, e2);
}, querySelector: function(t4) {
  return this._parent.querySelector(t4);
}, querySelectorAll: function(t4) {
  return this._parent.querySelectorAll(t4);
} }, cn.prototype = { add: function(t4) {
  this._names.indexOf(t4) < 0 && (this._names.push(t4), this._node.setAttribute("class", this._names.join(" ")));
}, remove: function(t4) {
  var e2 = this._names.indexOf(t4);
  e2 >= 0 && (this._names.splice(e2, 1), this._node.setAttribute("class", this._names.join(" ")));
}, contains: function(t4) {
  return this._names.indexOf(t4) >= 0;
} };
var Nn = [null];
function Ln(t4, e2) {
  this._groups = t4, this._parents = e2;
}
function In() {
  return new Ln([[document.documentElement]], Nn);
}
function Dn(t4) {
  return "string" == typeof t4 ? new Ln([[document.querySelector(t4)]], [document.documentElement]) : new Ln([[t4]], Nn);
}
function An(t4, e2) {
  if (t4 = function(t5) {
    let e3;
    for (; e3 = t5.sourceEvent; ) t5 = e3;
    return t5;
  }(t4), void 0 === e2 && (e2 = t4.currentTarget), e2) {
    var n2 = e2.ownerSVGElement || e2;
    if (n2.createSVGPoint) {
      var o2 = n2.createSVGPoint();
      return o2.x = t4.clientX, o2.y = t4.clientY, [(o2 = o2.matrixTransform(e2.getScreenCTM().inverse())).x, o2.y];
    }
    if (e2.getBoundingClientRect) {
      var i2 = e2.getBoundingClientRect();
      return [t4.clientX - i2.left - e2.clientLeft, t4.clientY - i2.top - e2.clientTop];
    }
  }
  return [t4.pageX, t4.pageY];
}
Ln.prototype = In.prototype = { constructor: Ln, select: function(t4) {
  "function" != typeof t4 && (t4 = Pe(t4));
  for (var e2 = this._groups, n2 = e2.length, o2 = new Array(n2), i2 = 0; i2 < n2; ++i2) for (var r2, s2, a2 = e2[i2], l2 = a2.length, c2 = o2[i2] = new Array(l2), d2 = 0; d2 < l2; ++d2) (r2 = a2[d2]) && (s2 = t4.call(r2, r2.__data__, d2, a2)) && ("__data__" in r2 && (s2.__data__ = r2.__data__), c2[d2] = s2);
  return new Ln(o2, this._parents);
}, selectAll: function(t4) {
  t4 = "function" == typeof t4 ? Ne(t4) : ze(t4);
  for (var e2 = this._groups, n2 = e2.length, o2 = [], i2 = [], r2 = 0; r2 < n2; ++r2) for (var s2, a2 = e2[r2], l2 = a2.length, c2 = 0; c2 < l2; ++c2) (s2 = a2[c2]) && (o2.push(t4.call(s2, s2.__data__, c2, a2)), i2.push(s2));
  return new Ln(o2, i2);
}, selectChild: function(t4) {
  return this.select(null == t4 ? Ae : /* @__PURE__ */ function(t5) {
    return function() {
      return De.call(this.children, t5);
    };
  }("function" == typeof t4 ? t4 : Ie(t4)));
}, selectChildren: function(t4) {
  return this.selectAll(null == t4 ? He : /* @__PURE__ */ function(t5) {
    return function() {
      return Te.call(this.children, t5);
    };
  }("function" == typeof t4 ? t4 : Ie(t4)));
}, filter: function(t4) {
  "function" != typeof t4 && (t4 = Le(t4));
  for (var e2 = this._groups, n2 = e2.length, o2 = new Array(n2), i2 = 0; i2 < n2; ++i2) for (var r2, s2 = e2[i2], a2 = s2.length, l2 = o2[i2] = [], c2 = 0; c2 < a2; ++c2) (r2 = s2[c2]) && t4.call(r2, r2.__data__, c2, s2) && l2.push(r2);
  return new Ln(o2, this._parents);
}, data: function(t4, e2) {
  if (!arguments.length) return Array.from(this, Ye);
  var n2, o2 = e2 ? Xe : We, i2 = this._parents, r2 = this._groups;
  "function" != typeof t4 && (n2 = t4, t4 = function() {
    return n2;
  });
  for (var s2 = r2.length, a2 = new Array(s2), l2 = new Array(s2), c2 = new Array(s2), d2 = 0; d2 < s2; ++d2) {
    var u2 = i2[d2], h2 = r2[d2], p2 = h2.length, f2 = Re(t4.call(u2, u2 && u2.__data__, d2, i2)), g2 = f2.length, m2 = l2[d2] = new Array(g2), y2 = a2[d2] = new Array(g2);
    o2(u2, h2, m2, y2, c2[d2] = new Array(p2), f2, e2);
    for (var w2, $2, v2 = 0, x2 = 0; v2 < g2; ++v2) if (w2 = m2[v2]) {
      for (v2 >= x2 && (x2 = v2 + 1); !($2 = y2[x2]) && ++x2 < g2; ) ;
      w2._next = $2 || null;
    }
  }
  return (a2 = new Ln(a2, i2))._enter = l2, a2._exit = c2, a2;
}, enter: function() {
  return new Ln(this._enter || this._groups.map(Ve), this._parents);
}, exit: function() {
  return new Ln(this._exit || this._groups.map(Ve), this._parents);
}, join: function(t4, e2, n2) {
  var o2 = this.enter(), i2 = this, r2 = this.exit();
  return "function" == typeof t4 ? (o2 = t4(o2)) && (o2 = o2.selection()) : o2 = o2.append(t4 + ""), null != e2 && (i2 = e2(i2)) && (i2 = i2.selection()), null == n2 ? r2.remove() : n2(r2), o2 && i2 ? o2.merge(i2).order() : i2;
}, merge: function(t4) {
  for (var e2 = t4.selection ? t4.selection() : t4, n2 = this._groups, o2 = e2._groups, i2 = n2.length, r2 = o2.length, s2 = Math.min(i2, r2), a2 = new Array(i2), l2 = 0; l2 < s2; ++l2) for (var c2, d2 = n2[l2], u2 = o2[l2], h2 = d2.length, p2 = a2[l2] = new Array(h2), f2 = 0; f2 < h2; ++f2) (c2 = d2[f2] || u2[f2]) && (p2[f2] = c2);
  for (; l2 < i2; ++l2) a2[l2] = n2[l2];
  return new Ln(a2, this._parents);
}, selection: function() {
  return this;
}, order: function() {
  for (var t4 = this._groups, e2 = -1, n2 = t4.length; ++e2 < n2; ) for (var o2, i2 = t4[e2], r2 = i2.length - 1, s2 = i2[r2]; --r2 >= 0; ) (o2 = i2[r2]) && (s2 && 4 ^ o2.compareDocumentPosition(s2) && s2.parentNode.insertBefore(o2, s2), s2 = o2);
  return this;
}, sort: function(t4) {
  function e2(e3, n3) {
    return e3 && n3 ? t4(e3.__data__, n3.__data__) : !e3 - !n3;
  }
  t4 || (t4 = Ze);
  for (var n2 = this._groups, o2 = n2.length, i2 = new Array(o2), r2 = 0; r2 < o2; ++r2) {
    for (var s2, a2 = n2[r2], l2 = a2.length, c2 = i2[r2] = new Array(l2), d2 = 0; d2 < l2; ++d2) (s2 = a2[d2]) && (c2[d2] = s2);
    c2.sort(e2);
  }
  return new Ln(i2, this._parents).order();
}, call: function() {
  var t4 = arguments[0];
  return arguments[0] = this, t4.apply(null, arguments), this;
}, nodes: function() {
  return Array.from(this);
}, node: function() {
  for (var t4 = this._groups, e2 = 0, n2 = t4.length; e2 < n2; ++e2) for (var o2 = t4[e2], i2 = 0, r2 = o2.length; i2 < r2; ++i2) {
    var s2 = o2[i2];
    if (s2) return s2;
  }
  return null;
}, size: function() {
  let t4 = 0;
  for (const e2 of this) ++t4;
  return t4;
}, empty: function() {
  return !this.node();
}, each: function(t4) {
  for (var e2 = this._groups, n2 = 0, o2 = e2.length; n2 < o2; ++n2) for (var i2, r2 = e2[n2], s2 = 0, a2 = r2.length; s2 < a2; ++s2) (i2 = r2[s2]) && t4.call(i2, i2.__data__, s2, r2);
  return this;
}, attr: function(t4, e2) {
  var n2 = _e(t4);
  if (arguments.length < 2) {
    var o2 = this.node();
    return n2.local ? o2.getAttributeNS(n2.space, n2.local) : o2.getAttribute(n2);
  }
  return this.each((null == e2 ? n2.local ? Ke : Be : "function" == typeof e2 ? n2.local ? Qe : qe : n2.local ? je : Ge)(n2, e2));
}, style: function(t4, e2, n2) {
  return arguments.length > 1 ? this.each((null == e2 ? Je : "function" == typeof e2 ? en : tn)(t4, e2, null == n2 ? "" : n2)) : nn(this.node(), t4);
}, property: function(t4, e2) {
  return arguments.length > 1 ? this.each((null == e2 ? on : "function" == typeof e2 ? sn : rn)(t4, e2)) : this.node()[t4];
}, classed: function(t4, e2) {
  var n2 = an(t4 + "");
  if (arguments.length < 2) {
    for (var o2 = ln(this.node()), i2 = -1, r2 = n2.length; ++i2 < r2; ) if (!o2.contains(n2[i2])) return false;
    return true;
  }
  return this.each(("function" == typeof e2 ? fn : e2 ? hn : pn)(n2, e2));
}, text: function(t4) {
  return arguments.length ? this.each(null == t4 ? gn : ("function" == typeof t4 ? yn : mn)(t4)) : this.node().textContent;
}, html: function(t4) {
  return arguments.length ? this.each(null == t4 ? wn : ("function" == typeof t4 ? vn : $n)(t4)) : this.node().innerHTML;
}, raise: function() {
  return this.each(xn);
}, lower: function() {
  return this.each(bn);
}, append: function(t4) {
  var e2 = "function" == typeof t4 ? t4 : Ce(t4);
  return this.select(function() {
    return this.appendChild(e2.apply(this, arguments));
  });
}, insert: function(t4, e2) {
  var n2 = "function" == typeof t4 ? t4 : Ce(t4), o2 = null == e2 ? kn : "function" == typeof e2 ? e2 : Pe(e2);
  return this.select(function() {
    return this.insertBefore(n2.apply(this, arguments), o2.apply(this, arguments) || null);
  });
}, remove: function() {
  return this.each(_n);
}, clone: function(t4) {
  return this.select(t4 ? En : Sn);
}, datum: function(t4) {
  return arguments.length ? this.property("__data__", t4) : this.node().__data__;
}, on: function(t4, e2, n2) {
  var o2, i2, r2 = function(t5) {
    return t5.trim().split(/^|\s+/).map(function(t6) {
      var e3 = "", n3 = t6.indexOf(".");
      return n3 >= 0 && (e3 = t6.slice(n3 + 1), t6 = t6.slice(0, n3)), { type: t6, name: e3 };
    });
  }(t4 + ""), s2 = r2.length;
  if (!(arguments.length < 2)) {
    for (a2 = e2 ? On : Cn, o2 = 0; o2 < s2; ++o2) this.each(a2(r2[o2], e2, n2));
    return this;
  }
  var a2 = this.node().__on;
  if (a2) {
    for (var l2, c2 = 0, d2 = a2.length; c2 < d2; ++c2) for (o2 = 0, l2 = a2[c2]; o2 < s2; ++o2) if ((i2 = r2[o2]).type === l2.type && i2.name === l2.name) return l2.value;
  }
}, dispatch: function(t4, e2) {
  return this.each(("function" == typeof e2 ? zn : Mn)(t4, e2));
}, [Symbol.iterator]: function* () {
  for (var t4 = this._groups, e2 = 0, n2 = t4.length; e2 < n2; ++e2) for (var o2, i2 = t4[e2], r2 = 0, s2 = i2.length; r2 < s2; ++r2) (o2 = i2[r2]) && (yield o2);
} };
var Tn = { passive: false };
var Hn = { capture: true, passive: false };
function Vn(t4) {
  t4.stopImmediatePropagation();
}
function Fn(t4) {
  t4.preventDefault(), t4.stopImmediatePropagation();
}
function Wn(t4) {
  var e2 = t4.document.documentElement, n2 = Dn(t4).on("dragstart.drag", Fn, Hn);
  "onselectstart" in e2 ? n2.on("selectstart.drag", Fn, Hn) : (e2.__noselect = e2.style.MozUserSelect, e2.style.MozUserSelect = "none");
}
function Xn(t4, e2) {
  var n2 = t4.document.documentElement, o2 = Dn(t4).on("dragstart.drag", null);
  e2 && (o2.on("click.drag", Fn, Hn), setTimeout(function() {
    o2.on("click.drag", null);
  }, 0)), "onselectstart" in n2 ? o2.on("selectstart.drag", null) : (n2.style.MozUserSelect = n2.__noselect, delete n2.__noselect);
}
var Yn = (t4) => () => t4;
function Rn(t4, { sourceEvent: e2, subject: n2, target: o2, identifier: i2, active: r2, x: s2, y: a2, dx: l2, dy: c2, dispatch: d2 }) {
  Object.defineProperties(this, { type: { value: t4, enumerable: true, configurable: true }, sourceEvent: { value: e2, enumerable: true, configurable: true }, subject: { value: n2, enumerable: true, configurable: true }, target: { value: o2, enumerable: true, configurable: true }, identifier: { value: i2, enumerable: true, configurable: true }, active: { value: r2, enumerable: true, configurable: true }, x: { value: s2, enumerable: true, configurable: true }, y: { value: a2, enumerable: true, configurable: true }, dx: { value: l2, enumerable: true, configurable: true }, dy: { value: c2, enumerable: true, configurable: true }, _: { value: d2 } });
}
function Zn(t4) {
  return !t4.ctrlKey && !t4.button;
}
function Bn() {
  return this.parentNode;
}
function Kn(t4, e2) {
  return null == e2 ? { x: t4.x, y: t4.y } : e2;
}
function Gn() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function jn(t4, e2, n2) {
  t4.prototype = e2.prototype = n2, n2.constructor = t4;
}
function qn(t4, e2) {
  var n2 = Object.create(t4.prototype);
  for (var o2 in e2) n2[o2] = e2[o2];
  return n2;
}
function Qn() {
}
Rn.prototype.on = function() {
  var t4 = this._.on.apply(this._, arguments);
  return t4 === this._ ? this : t4;
};
var Un = 0.7;
var Jn = 1 / Un;
var to = "\\s*([+-]?\\d+)\\s*";
var eo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var no = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var oo = /^#([0-9a-f]{3,8})$/;
var io = new RegExp(`^rgb\\(${to},${to},${to}\\)$`);
var ro = new RegExp(`^rgb\\(${no},${no},${no}\\)$`);
var so = new RegExp(`^rgba\\(${to},${to},${to},${eo}\\)$`);
var ao = new RegExp(`^rgba\\(${no},${no},${no},${eo}\\)$`);
var lo = new RegExp(`^hsl\\(${eo},${no},${no}\\)$`);
var co = new RegExp(`^hsla\\(${eo},${no},${no},${eo}\\)$`);
var uo = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
function ho() {
  return this.rgb().formatHex();
}
function po() {
  return this.rgb().formatRgb();
}
function fo(t4) {
  var e2, n2;
  return t4 = (t4 + "").trim().toLowerCase(), (e2 = oo.exec(t4)) ? (n2 = e2[1].length, e2 = parseInt(e2[1], 16), 6 === n2 ? go(e2) : 3 === n2 ? new wo(e2 >> 8 & 15 | e2 >> 4 & 240, e2 >> 4 & 15 | 240 & e2, (15 & e2) << 4 | 15 & e2, 1) : 8 === n2 ? mo(e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, (255 & e2) / 255) : 4 === n2 ? mo(e2 >> 12 & 15 | e2 >> 8 & 240, e2 >> 8 & 15 | e2 >> 4 & 240, e2 >> 4 & 15 | 240 & e2, ((15 & e2) << 4 | 15 & e2) / 255) : null) : (e2 = io.exec(t4)) ? new wo(e2[1], e2[2], e2[3], 1) : (e2 = ro.exec(t4)) ? new wo(255 * e2[1] / 100, 255 * e2[2] / 100, 255 * e2[3] / 100, 1) : (e2 = so.exec(t4)) ? mo(e2[1], e2[2], e2[3], e2[4]) : (e2 = ao.exec(t4)) ? mo(255 * e2[1] / 100, 255 * e2[2] / 100, 255 * e2[3] / 100, e2[4]) : (e2 = lo.exec(t4)) ? _o(e2[1], e2[2] / 100, e2[3] / 100, 1) : (e2 = co.exec(t4)) ? _o(e2[1], e2[2] / 100, e2[3] / 100, e2[4]) : uo.hasOwnProperty(t4) ? go(uo[t4]) : "transparent" === t4 ? new wo(NaN, NaN, NaN, 0) : null;
}
function go(t4) {
  return new wo(t4 >> 16 & 255, t4 >> 8 & 255, 255 & t4, 1);
}
function mo(t4, e2, n2, o2) {
  return o2 <= 0 && (t4 = e2 = n2 = NaN), new wo(t4, e2, n2, o2);
}
function yo(t4, e2, n2, o2) {
  return 1 === arguments.length ? ((i2 = t4) instanceof Qn || (i2 = fo(i2)), i2 ? new wo((i2 = i2.rgb()).r, i2.g, i2.b, i2.opacity) : new wo()) : new wo(t4, e2, n2, null == o2 ? 1 : o2);
  var i2;
}
function wo(t4, e2, n2, o2) {
  this.r = +t4, this.g = +e2, this.b = +n2, this.opacity = +o2;
}
function $o() {
  return `#${ko(this.r)}${ko(this.g)}${ko(this.b)}`;
}
function vo() {
  const t4 = xo(this.opacity);
  return `${1 === t4 ? "rgb(" : "rgba("}${bo(this.r)}, ${bo(this.g)}, ${bo(this.b)}${1 === t4 ? ")" : `, ${t4})`}`;
}
function xo(t4) {
  return isNaN(t4) ? 1 : Math.max(0, Math.min(1, t4));
}
function bo(t4) {
  return Math.max(0, Math.min(255, Math.round(t4) || 0));
}
function ko(t4) {
  return ((t4 = bo(t4)) < 16 ? "0" : "") + t4.toString(16);
}
function _o(t4, e2, n2, o2) {
  return o2 <= 0 ? t4 = e2 = n2 = NaN : n2 <= 0 || n2 >= 1 ? t4 = e2 = NaN : e2 <= 0 && (t4 = NaN), new Eo(t4, e2, n2, o2);
}
function So(t4) {
  if (t4 instanceof Eo) return new Eo(t4.h, t4.s, t4.l, t4.opacity);
  if (t4 instanceof Qn || (t4 = fo(t4)), !t4) return new Eo();
  if (t4 instanceof Eo) return t4;
  var e2 = (t4 = t4.rgb()).r / 255, n2 = t4.g / 255, o2 = t4.b / 255, i2 = Math.min(e2, n2, o2), r2 = Math.max(e2, n2, o2), s2 = NaN, a2 = r2 - i2, l2 = (r2 + i2) / 2;
  return a2 ? (s2 = e2 === r2 ? (n2 - o2) / a2 + 6 * (n2 < o2) : n2 === r2 ? (o2 - e2) / a2 + 2 : (e2 - n2) / a2 + 4, a2 /= l2 < 0.5 ? r2 + i2 : 2 - r2 - i2, s2 *= 60) : a2 = l2 > 0 && l2 < 1 ? 0 : s2, new Eo(s2, a2, l2, t4.opacity);
}
function Eo(t4, e2, n2, o2) {
  this.h = +t4, this.s = +e2, this.l = +n2, this.opacity = +o2;
}
function Co(t4) {
  return (t4 = (t4 || 0) % 360) < 0 ? t4 + 360 : t4;
}
function Oo(t4) {
  return Math.max(0, Math.min(1, t4 || 0));
}
function Po(t4, e2, n2) {
  return 255 * (t4 < 60 ? e2 + (n2 - e2) * t4 / 60 : t4 < 180 ? n2 : t4 < 240 ? e2 + (n2 - e2) * (240 - t4) / 60 : e2);
}
jn(Qn, fo, { copy(t4) {
  return Object.assign(new this.constructor(), this, t4);
}, displayable() {
  return this.rgb().displayable();
}, hex: ho, formatHex: ho, formatHex8: function() {
  return this.rgb().formatHex8();
}, formatHsl: function() {
  return So(this).formatHsl();
}, formatRgb: po, toString: po }), jn(wo, yo, qn(Qn, { brighter(t4) {
  return t4 = null == t4 ? Jn : Math.pow(Jn, t4), new wo(this.r * t4, this.g * t4, this.b * t4, this.opacity);
}, darker(t4) {
  return t4 = null == t4 ? Un : Math.pow(Un, t4), new wo(this.r * t4, this.g * t4, this.b * t4, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new wo(bo(this.r), bo(this.g), bo(this.b), xo(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: $o, formatHex: $o, formatHex8: function() {
  return `#${ko(this.r)}${ko(this.g)}${ko(this.b)}${ko(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
}, formatRgb: vo, toString: vo })), jn(Eo, function(t4, e2, n2, o2) {
  return 1 === arguments.length ? So(t4) : new Eo(t4, e2, n2, null == o2 ? 1 : o2);
}, qn(Qn, { brighter(t4) {
  return t4 = null == t4 ? Jn : Math.pow(Jn, t4), new Eo(this.h, this.s, this.l * t4, this.opacity);
}, darker(t4) {
  return t4 = null == t4 ? Un : Math.pow(Un, t4), new Eo(this.h, this.s, this.l * t4, this.opacity);
}, rgb() {
  var t4 = this.h % 360 + 360 * (this.h < 0), e2 = isNaN(t4) || isNaN(this.s) ? 0 : this.s, n2 = this.l, o2 = n2 + (n2 < 0.5 ? n2 : 1 - n2) * e2, i2 = 2 * n2 - o2;
  return new wo(Po(t4 >= 240 ? t4 - 240 : t4 + 120, i2, o2), Po(t4, i2, o2), Po(t4 < 120 ? t4 + 240 : t4 - 120, i2, o2), this.opacity);
}, clamp() {
  return new Eo(Co(this.h), Oo(this.s), Oo(this.l), xo(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const t4 = xo(this.opacity);
  return `${1 === t4 ? "hsl(" : "hsla("}${Co(this.h)}, ${100 * Oo(this.s)}%, ${100 * Oo(this.l)}%${1 === t4 ? ")" : `, ${t4})`}`;
} }));
var Mo = (t4) => () => t4;
function zo(t4) {
  return 1 == (t4 = +t4) ? No : function(e2, n2) {
    return n2 - e2 ? function(t5, e3, n3) {
      return t5 = Math.pow(t5, n3), e3 = Math.pow(e3, n3) - t5, n3 = 1 / n3, function(o2) {
        return Math.pow(t5 + o2 * e3, n3);
      };
    }(e2, n2, t4) : Mo(isNaN(e2) ? n2 : e2);
  };
}
function No(t4, e2) {
  var n2 = e2 - t4;
  return n2 ? /* @__PURE__ */ function(t5, e3) {
    return function(n3) {
      return t5 + n3 * e3;
    };
  }(t4, n2) : Mo(isNaN(t4) ? e2 : t4);
}
var Lo = function t2(e2) {
  var n2 = zo(e2);
  function o2(t4, e3) {
    var o3 = n2((t4 = yo(t4)).r, (e3 = yo(e3)).r), i2 = n2(t4.g, e3.g), r2 = n2(t4.b, e3.b), s2 = No(t4.opacity, e3.opacity);
    return function(e4) {
      return t4.r = o3(e4), t4.g = i2(e4), t4.b = r2(e4), t4.opacity = s2(e4), t4 + "";
    };
  }
  return o2.gamma = t2, o2;
}(1);
function Io(t4, e2) {
  return t4 = +t4, e2 = +e2, function(n2) {
    return t4 * (1 - n2) + e2 * n2;
  };
}
var Do = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var Ao = new RegExp(Do.source, "g");
function To(t4, e2) {
  var n2, o2, i2, r2 = Do.lastIndex = Ao.lastIndex = 0, s2 = -1, a2 = [], l2 = [];
  for (t4 += "", e2 += ""; (n2 = Do.exec(t4)) && (o2 = Ao.exec(e2)); ) (i2 = o2.index) > r2 && (i2 = e2.slice(r2, i2), a2[s2] ? a2[s2] += i2 : a2[++s2] = i2), (n2 = n2[0]) === (o2 = o2[0]) ? a2[s2] ? a2[s2] += o2 : a2[++s2] = o2 : (a2[++s2] = null, l2.push({ i: s2, x: Io(n2, o2) })), r2 = Ao.lastIndex;
  return r2 < e2.length && (i2 = e2.slice(r2), a2[s2] ? a2[s2] += i2 : a2[++s2] = i2), a2.length < 2 ? l2[0] ? /* @__PURE__ */ function(t5) {
    return function(e3) {
      return t5(e3) + "";
    };
  }(l2[0].x) : /* @__PURE__ */ function(t5) {
    return function() {
      return t5;
    };
  }(e2) : (e2 = l2.length, function(t5) {
    for (var n3, o3 = 0; o3 < e2; ++o3) a2[(n3 = l2[o3]).i] = n3.x(t5);
    return a2.join("");
  });
}
var Ho;
var Vo = 180 / Math.PI;
var Fo = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function Wo(t4, e2, n2, o2, i2, r2) {
  var s2, a2, l2;
  return (s2 = Math.sqrt(t4 * t4 + e2 * e2)) && (t4 /= s2, e2 /= s2), (l2 = t4 * n2 + e2 * o2) && (n2 -= t4 * l2, o2 -= e2 * l2), (a2 = Math.sqrt(n2 * n2 + o2 * o2)) && (n2 /= a2, o2 /= a2, l2 /= a2), t4 * o2 < e2 * n2 && (t4 = -t4, e2 = -e2, l2 = -l2, s2 = -s2), { translateX: i2, translateY: r2, rotate: Math.atan2(e2, t4) * Vo, skewX: Math.atan(l2) * Vo, scaleX: s2, scaleY: a2 };
}
function Xo(t4, e2, n2, o2) {
  function i2(t5) {
    return t5.length ? t5.pop() + " " : "";
  }
  return function(r2, s2) {
    var a2 = [], l2 = [];
    return r2 = t4(r2), s2 = t4(s2), function(t5, o3, i3, r3, s3, a3) {
      if (t5 !== i3 || o3 !== r3) {
        var l3 = s3.push("translate(", null, e2, null, n2);
        a3.push({ i: l3 - 4, x: Io(t5, i3) }, { i: l3 - 2, x: Io(o3, r3) });
      } else (i3 || r3) && s3.push("translate(" + i3 + e2 + r3 + n2);
    }(r2.translateX, r2.translateY, s2.translateX, s2.translateY, a2, l2), function(t5, e3, n3, r3) {
      t5 !== e3 ? (t5 - e3 > 180 ? e3 += 360 : e3 - t5 > 180 && (t5 += 360), r3.push({ i: n3.push(i2(n3) + "rotate(", null, o2) - 2, x: Io(t5, e3) })) : e3 && n3.push(i2(n3) + "rotate(" + e3 + o2);
    }(r2.rotate, s2.rotate, a2, l2), function(t5, e3, n3, r3) {
      t5 !== e3 ? r3.push({ i: n3.push(i2(n3) + "skewX(", null, o2) - 2, x: Io(t5, e3) }) : e3 && n3.push(i2(n3) + "skewX(" + e3 + o2);
    }(r2.skewX, s2.skewX, a2, l2), function(t5, e3, n3, o3, r3, s3) {
      if (t5 !== n3 || e3 !== o3) {
        var a3 = r3.push(i2(r3) + "scale(", null, ",", null, ")");
        s3.push({ i: a3 - 4, x: Io(t5, n3) }, { i: a3 - 2, x: Io(e3, o3) });
      } else 1 === n3 && 1 === o3 || r3.push(i2(r3) + "scale(" + n3 + "," + o3 + ")");
    }(r2.scaleX, r2.scaleY, s2.scaleX, s2.scaleY, a2, l2), r2 = s2 = null, function(t5) {
      for (var e3, n3 = -1, o3 = l2.length; ++n3 < o3; ) a2[(e3 = l2[n3]).i] = e3.x(t5);
      return a2.join("");
    };
  };
}
var Yo = Xo(function(t4) {
  const e2 = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t4 + "");
  return e2.isIdentity ? Fo : Wo(e2.a, e2.b, e2.c, e2.d, e2.e, e2.f);
}, "px, ", "px)", "deg)");
var Ro = Xo(function(t4) {
  return null == t4 ? Fo : (Ho || (Ho = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ho.setAttribute("transform", t4), (t4 = Ho.transform.baseVal.consolidate()) ? Wo((t4 = t4.matrix).a, t4.b, t4.c, t4.d, t4.e, t4.f) : Fo);
}, ", ", ")", ")");
function Zo(t4) {
  return ((t4 = Math.exp(t4)) + 1 / t4) / 2;
}
var Bo;
var Ko;
var Go = function t3(e2, n2, o2) {
  function i2(t4, i3) {
    var r2, s2, a2 = t4[0], l2 = t4[1], c2 = t4[2], d2 = i3[0], u2 = i3[1], h2 = i3[2], p2 = d2 - a2, f2 = u2 - l2, g2 = p2 * p2 + f2 * f2;
    if (g2 < 1e-12) s2 = Math.log(h2 / c2) / e2, r2 = function(t5) {
      return [a2 + t5 * p2, l2 + t5 * f2, c2 * Math.exp(e2 * t5 * s2)];
    };
    else {
      var m2 = Math.sqrt(g2), y2 = (h2 * h2 - c2 * c2 + o2 * g2) / (2 * c2 * n2 * m2), w2 = (h2 * h2 - c2 * c2 - o2 * g2) / (2 * h2 * n2 * m2), $2 = Math.log(Math.sqrt(y2 * y2 + 1) - y2), v2 = Math.log(Math.sqrt(w2 * w2 + 1) - w2);
      s2 = (v2 - $2) / e2, r2 = function(t5) {
        var o3, i4 = t5 * s2, r3 = Zo($2), d3 = c2 / (n2 * m2) * (r3 * (o3 = e2 * i4 + $2, ((o3 = Math.exp(2 * o3)) - 1) / (o3 + 1)) - function(t6) {
          return ((t6 = Math.exp(t6)) - 1 / t6) / 2;
        }($2));
        return [a2 + d3 * p2, l2 + d3 * f2, c2 * r3 / Zo(e2 * i4 + $2)];
      };
    }
    return r2.duration = 1e3 * s2 * e2 / Math.SQRT2, r2;
  }
  return i2.rho = function(e3) {
    var n3 = Math.max(1e-3, +e3), o3 = n3 * n3;
    return t3(n3, o3, o3 * o3);
  }, i2;
}(Math.SQRT2, 2, 4);
var jo = 0;
var qo = 0;
var Qo = 0;
var Uo = 0;
var Jo = 0;
var ti = 0;
var ei = "object" == typeof performance && performance.now ? performance : Date;
var ni = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t4) {
  setTimeout(t4, 17);
};
function oi() {
  return Jo || (ni(ii), Jo = ei.now() + ti);
}
function ii() {
  Jo = 0;
}
function ri() {
  this._call = this._time = this._next = null;
}
function si(t4, e2, n2) {
  var o2 = new ri();
  return o2.restart(t4, e2, n2), o2;
}
function ai() {
  Jo = (Uo = ei.now()) + ti, jo = qo = 0;
  try {
    !function() {
      oi(), ++jo;
      for (var t4, e2 = Bo; e2; ) (t4 = Jo - e2._time) >= 0 && e2._call.call(void 0, t4), e2 = e2._next;
      --jo;
    }();
  } finally {
    jo = 0, function() {
      var t4, e2, n2 = Bo, o2 = 1 / 0;
      for (; n2; ) n2._call ? (o2 > n2._time && (o2 = n2._time), t4 = n2, n2 = n2._next) : (e2 = n2._next, n2._next = null, n2 = t4 ? t4._next = e2 : Bo = e2);
      Ko = t4, ci(o2);
    }(), Jo = 0;
  }
}
function li() {
  var t4 = ei.now(), e2 = t4 - Uo;
  e2 > 1e3 && (ti -= e2, Uo = t4);
}
function ci(t4) {
  jo || (qo && (qo = clearTimeout(qo)), t4 - Jo > 24 ? (t4 < 1 / 0 && (qo = setTimeout(ai, t4 - ei.now() - ti)), Qo && (Qo = clearInterval(Qo))) : (Qo || (Uo = ei.now(), Qo = setInterval(li, 1e3)), jo = 1, ni(ai)));
}
function di(t4, e2, n2) {
  var o2 = new ri();
  return e2 = null == e2 ? 0 : +e2, o2.restart((n3) => {
    o2.stop(), t4(n3 + e2);
  }, e2, n2), o2;
}
ri.prototype = si.prototype = { constructor: ri, restart: function(t4, e2, n2) {
  if ("function" != typeof t4) throw new TypeError("callback is not a function");
  n2 = (null == n2 ? oi() : +n2) + (null == e2 ? 0 : +e2), this._next || Ko === this || (Ko ? Ko._next = this : Bo = this, Ko = this), this._call = t4, this._time = n2, ci();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, ci());
} };
var ui = we("start", "end", "cancel", "interrupt");
var hi = [];
function pi(t4, e2, n2, o2, i2, r2) {
  var s2 = t4.__transition;
  if (s2) {
    if (n2 in s2) return;
  } else t4.__transition = {};
  !function(t5, e3, n3) {
    var o3, i3 = t5.__transition;
    function r3(t6) {
      n3.state = 1, n3.timer.restart(s3, n3.delay, n3.time), n3.delay <= t6 && s3(t6 - n3.delay);
    }
    function s3(r4) {
      var c2, d2, u2, h2;
      if (1 !== n3.state) return l2();
      for (c2 in i3) if ((h2 = i3[c2]).name === n3.name) {
        if (3 === h2.state) return di(s3);
        4 === h2.state ? (h2.state = 6, h2.timer.stop(), h2.on.call("interrupt", t5, t5.__data__, h2.index, h2.group), delete i3[c2]) : +c2 < e3 && (h2.state = 6, h2.timer.stop(), h2.on.call("cancel", t5, t5.__data__, h2.index, h2.group), delete i3[c2]);
      }
      if (di(function() {
        3 === n3.state && (n3.state = 4, n3.timer.restart(a2, n3.delay, n3.time), a2(r4));
      }), n3.state = 2, n3.on.call("start", t5, t5.__data__, n3.index, n3.group), 2 === n3.state) {
        for (n3.state = 3, o3 = new Array(u2 = n3.tween.length), c2 = 0, d2 = -1; c2 < u2; ++c2) (h2 = n3.tween[c2].value.call(t5, t5.__data__, n3.index, n3.group)) && (o3[++d2] = h2);
        o3.length = d2 + 1;
      }
    }
    function a2(e4) {
      for (var i4 = e4 < n3.duration ? n3.ease.call(null, e4 / n3.duration) : (n3.timer.restart(l2), n3.state = 5, 1), r4 = -1, s4 = o3.length; ++r4 < s4; ) o3[r4].call(t5, i4);
      5 === n3.state && (n3.on.call("end", t5, t5.__data__, n3.index, n3.group), l2());
    }
    function l2() {
      for (var o4 in n3.state = 6, n3.timer.stop(), delete i3[e3], i3) return;
      delete t5.__transition;
    }
    i3[e3] = n3, n3.timer = si(r3, 0, n3.time);
  }(t4, n2, { name: e2, index: o2, group: i2, on: ui, tween: hi, time: r2.time, delay: r2.delay, duration: r2.duration, ease: r2.ease, timer: null, state: 0 });
}
function fi(t4, e2) {
  var n2 = mi(t4, e2);
  if (n2.state > 0) throw new Error("too late; already scheduled");
  return n2;
}
function gi(t4, e2) {
  var n2 = mi(t4, e2);
  if (n2.state > 3) throw new Error("too late; already running");
  return n2;
}
function mi(t4, e2) {
  var n2 = t4.__transition;
  if (!n2 || !(n2 = n2[e2])) throw new Error("transition not found");
  return n2;
}
function yi(t4, e2) {
  var n2, o2, i2, r2 = t4.__transition, s2 = true;
  if (r2) {
    for (i2 in e2 = null == e2 ? null : e2 + "", r2) (n2 = r2[i2]).name === e2 ? (o2 = n2.state > 2 && n2.state < 5, n2.state = 6, n2.timer.stop(), n2.on.call(o2 ? "interrupt" : "cancel", t4, t4.__data__, n2.index, n2.group), delete r2[i2]) : s2 = false;
    s2 && delete t4.__transition;
  }
}
function wi(t4, e2) {
  var n2, o2;
  return function() {
    var i2 = gi(this, t4), r2 = i2.tween;
    if (r2 !== n2) {
      for (var s2 = 0, a2 = (o2 = n2 = r2).length; s2 < a2; ++s2) if (o2[s2].name === e2) {
        (o2 = o2.slice()).splice(s2, 1);
        break;
      }
    }
    i2.tween = o2;
  };
}
function $i(t4, e2, n2) {
  var o2, i2;
  if ("function" != typeof n2) throw new Error();
  return function() {
    var r2 = gi(this, t4), s2 = r2.tween;
    if (s2 !== o2) {
      i2 = (o2 = s2).slice();
      for (var a2 = { name: e2, value: n2 }, l2 = 0, c2 = i2.length; l2 < c2; ++l2) if (i2[l2].name === e2) {
        i2[l2] = a2;
        break;
      }
      l2 === c2 && i2.push(a2);
    }
    r2.tween = i2;
  };
}
function vi(t4, e2, n2) {
  var o2 = t4._id;
  return t4.each(function() {
    var t5 = gi(this, o2);
    (t5.value || (t5.value = {}))[e2] = n2.apply(this, arguments);
  }), function(t5) {
    return mi(t5, o2).value[e2];
  };
}
function xi(t4, e2) {
  var n2;
  return ("number" == typeof e2 ? Io : e2 instanceof fo ? Lo : (n2 = fo(e2)) ? (e2 = n2, Lo) : To)(t4, e2);
}
function bi(t4) {
  return function() {
    this.removeAttribute(t4);
  };
}
function ki(t4) {
  return function() {
    this.removeAttributeNS(t4.space, t4.local);
  };
}
function _i(t4, e2, n2) {
  var o2, i2, r2 = n2 + "";
  return function() {
    var s2 = this.getAttribute(t4);
    return s2 === r2 ? null : s2 === o2 ? i2 : i2 = e2(o2 = s2, n2);
  };
}
function Si(t4, e2, n2) {
  var o2, i2, r2 = n2 + "";
  return function() {
    var s2 = this.getAttributeNS(t4.space, t4.local);
    return s2 === r2 ? null : s2 === o2 ? i2 : i2 = e2(o2 = s2, n2);
  };
}
function Ei(t4, e2, n2) {
  var o2, i2, r2;
  return function() {
    var s2, a2, l2 = n2(this);
    if (null != l2) return (s2 = this.getAttribute(t4)) === (a2 = l2 + "") ? null : s2 === o2 && a2 === i2 ? r2 : (i2 = a2, r2 = e2(o2 = s2, l2));
    this.removeAttribute(t4);
  };
}
function Ci(t4, e2, n2) {
  var o2, i2, r2;
  return function() {
    var s2, a2, l2 = n2(this);
    if (null != l2) return (s2 = this.getAttributeNS(t4.space, t4.local)) === (a2 = l2 + "") ? null : s2 === o2 && a2 === i2 ? r2 : (i2 = a2, r2 = e2(o2 = s2, l2));
    this.removeAttributeNS(t4.space, t4.local);
  };
}
function Oi(t4, e2) {
  var n2, o2;
  function i2() {
    var i3 = e2.apply(this, arguments);
    return i3 !== o2 && (n2 = (o2 = i3) && /* @__PURE__ */ function(t5, e3) {
      return function(n3) {
        this.setAttributeNS(t5.space, t5.local, e3.call(this, n3));
      };
    }(t4, i3)), n2;
  }
  return i2._value = e2, i2;
}
function Pi(t4, e2) {
  var n2, o2;
  function i2() {
    var i3 = e2.apply(this, arguments);
    return i3 !== o2 && (n2 = (o2 = i3) && /* @__PURE__ */ function(t5, e3) {
      return function(n3) {
        this.setAttribute(t5, e3.call(this, n3));
      };
    }(t4, i3)), n2;
  }
  return i2._value = e2, i2;
}
function Mi(t4, e2) {
  return function() {
    fi(this, t4).delay = +e2.apply(this, arguments);
  };
}
function zi(t4, e2) {
  return e2 = +e2, function() {
    fi(this, t4).delay = e2;
  };
}
function Ni(t4, e2) {
  return function() {
    gi(this, t4).duration = +e2.apply(this, arguments);
  };
}
function Li(t4, e2) {
  return e2 = +e2, function() {
    gi(this, t4).duration = e2;
  };
}
var Ii = In.prototype.constructor;
function Di(t4) {
  return function() {
    this.style.removeProperty(t4);
  };
}
var Ai = 0;
function Ti(t4, e2, n2, o2) {
  this._groups = t4, this._parents = e2, this._name = n2, this._id = o2;
}
function Hi() {
  return ++Ai;
}
var Vi = In.prototype;
Ti.prototype = { constructor: Ti, select: function(t4) {
  var e2 = this._name, n2 = this._id;
  "function" != typeof t4 && (t4 = Pe(t4));
  for (var o2 = this._groups, i2 = o2.length, r2 = new Array(i2), s2 = 0; s2 < i2; ++s2) for (var a2, l2, c2 = o2[s2], d2 = c2.length, u2 = r2[s2] = new Array(d2), h2 = 0; h2 < d2; ++h2) (a2 = c2[h2]) && (l2 = t4.call(a2, a2.__data__, h2, c2)) && ("__data__" in a2 && (l2.__data__ = a2.__data__), u2[h2] = l2, pi(u2[h2], e2, n2, h2, u2, mi(a2, n2)));
  return new Ti(r2, this._parents, e2, n2);
}, selectAll: function(t4) {
  var e2 = this._name, n2 = this._id;
  "function" != typeof t4 && (t4 = ze(t4));
  for (var o2 = this._groups, i2 = o2.length, r2 = [], s2 = [], a2 = 0; a2 < i2; ++a2) for (var l2, c2 = o2[a2], d2 = c2.length, u2 = 0; u2 < d2; ++u2) if (l2 = c2[u2]) {
    for (var h2, p2 = t4.call(l2, l2.__data__, u2, c2), f2 = mi(l2, n2), g2 = 0, m2 = p2.length; g2 < m2; ++g2) (h2 = p2[g2]) && pi(h2, e2, n2, g2, p2, f2);
    r2.push(p2), s2.push(l2);
  }
  return new Ti(r2, s2, e2, n2);
}, selectChild: Vi.selectChild, selectChildren: Vi.selectChildren, filter: function(t4) {
  "function" != typeof t4 && (t4 = Le(t4));
  for (var e2 = this._groups, n2 = e2.length, o2 = new Array(n2), i2 = 0; i2 < n2; ++i2) for (var r2, s2 = e2[i2], a2 = s2.length, l2 = o2[i2] = [], c2 = 0; c2 < a2; ++c2) (r2 = s2[c2]) && t4.call(r2, r2.__data__, c2, s2) && l2.push(r2);
  return new Ti(o2, this._parents, this._name, this._id);
}, merge: function(t4) {
  if (t4._id !== this._id) throw new Error();
  for (var e2 = this._groups, n2 = t4._groups, o2 = e2.length, i2 = n2.length, r2 = Math.min(o2, i2), s2 = new Array(o2), a2 = 0; a2 < r2; ++a2) for (var l2, c2 = e2[a2], d2 = n2[a2], u2 = c2.length, h2 = s2[a2] = new Array(u2), p2 = 0; p2 < u2; ++p2) (l2 = c2[p2] || d2[p2]) && (h2[p2] = l2);
  for (; a2 < o2; ++a2) s2[a2] = e2[a2];
  return new Ti(s2, this._parents, this._name, this._id);
}, selection: function() {
  return new Ii(this._groups, this._parents);
}, transition: function() {
  for (var t4 = this._name, e2 = this._id, n2 = Hi(), o2 = this._groups, i2 = o2.length, r2 = 0; r2 < i2; ++r2) for (var s2, a2 = o2[r2], l2 = a2.length, c2 = 0; c2 < l2; ++c2) if (s2 = a2[c2]) {
    var d2 = mi(s2, e2);
    pi(s2, t4, n2, c2, a2, { time: d2.time + d2.delay + d2.duration, delay: 0, duration: d2.duration, ease: d2.ease });
  }
  return new Ti(o2, this._parents, t4, n2);
}, call: Vi.call, nodes: Vi.nodes, node: Vi.node, size: Vi.size, empty: Vi.empty, each: Vi.each, on: function(t4, e2) {
  var n2 = this._id;
  return arguments.length < 2 ? mi(this.node(), n2).on.on(t4) : this.each(function(t5, e3, n3) {
    var o2, i2, r2 = function(t6) {
      return (t6 + "").trim().split(/^|\s+/).every(function(t7) {
        var e4 = t7.indexOf(".");
        return e4 >= 0 && (t7 = t7.slice(0, e4)), !t7 || "start" === t7;
      });
    }(e3) ? fi : gi;
    return function() {
      var s2 = r2(this, t5), a2 = s2.on;
      a2 !== o2 && (i2 = (o2 = a2).copy()).on(e3, n3), s2.on = i2;
    };
  }(n2, t4, e2));
}, attr: function(t4, e2) {
  var n2 = _e(t4), o2 = "transform" === n2 ? Ro : xi;
  return this.attrTween(t4, "function" == typeof e2 ? (n2.local ? Ci : Ei)(n2, o2, vi(this, "attr." + t4, e2)) : null == e2 ? (n2.local ? ki : bi)(n2) : (n2.local ? Si : _i)(n2, o2, e2));
}, attrTween: function(t4, e2) {
  var n2 = "attr." + t4;
  if (arguments.length < 2) return (n2 = this.tween(n2)) && n2._value;
  if (null == e2) return this.tween(n2, null);
  if ("function" != typeof e2) throw new Error();
  var o2 = _e(t4);
  return this.tween(n2, (o2.local ? Oi : Pi)(o2, e2));
}, style: function(t4, e2, n2) {
  var o2 = "transform" == (t4 += "") ? Yo : xi;
  return null == e2 ? this.styleTween(t4, /* @__PURE__ */ function(t5, e3) {
    var n3, o3, i2;
    return function() {
      var r2 = nn(this, t5), s2 = (this.style.removeProperty(t5), nn(this, t5));
      return r2 === s2 ? null : r2 === n3 && s2 === o3 ? i2 : i2 = e3(n3 = r2, o3 = s2);
    };
  }(t4, o2)).on("end.style." + t4, Di(t4)) : "function" == typeof e2 ? this.styleTween(t4, /* @__PURE__ */ function(t5, e3, n3) {
    var o3, i2, r2;
    return function() {
      var s2 = nn(this, t5), a2 = n3(this), l2 = a2 + "";
      return null == a2 && (this.style.removeProperty(t5), l2 = a2 = nn(this, t5)), s2 === l2 ? null : s2 === o3 && l2 === i2 ? r2 : (i2 = l2, r2 = e3(o3 = s2, a2));
    };
  }(t4, o2, vi(this, "style." + t4, e2))).each(function(t5, e3) {
    var n3, o3, i2, r2, s2 = "style." + e3, a2 = "end." + s2;
    return function() {
      var l2 = gi(this, t5), c2 = l2.on, d2 = null == l2.value[s2] ? r2 || (r2 = Di(e3)) : void 0;
      c2 === n3 && i2 === d2 || (o3 = (n3 = c2).copy()).on(a2, i2 = d2), l2.on = o3;
    };
  }(this._id, t4)) : this.styleTween(t4, function(t5, e3, n3) {
    var o3, i2, r2 = n3 + "";
    return function() {
      var s2 = nn(this, t5);
      return s2 === r2 ? null : s2 === o3 ? i2 : i2 = e3(o3 = s2, n3);
    };
  }(t4, o2, e2), n2).on("end.style." + t4, null);
}, styleTween: function(t4, e2, n2) {
  var o2 = "style." + (t4 += "");
  if (arguments.length < 2) return (o2 = this.tween(o2)) && o2._value;
  if (null == e2) return this.tween(o2, null);
  if ("function" != typeof e2) throw new Error();
  return this.tween(o2, function(t5, e3, n3) {
    var o3, i2;
    function r2() {
      var r3 = e3.apply(this, arguments);
      return r3 !== i2 && (o3 = (i2 = r3) && /* @__PURE__ */ function(t6, e4, n4) {
        return function(o4) {
          this.style.setProperty(t6, e4.call(this, o4), n4);
        };
      }(t5, r3, n3)), o3;
    }
    return r2._value = e3, r2;
  }(t4, e2, null == n2 ? "" : n2));
}, text: function(t4) {
  return this.tween("text", "function" == typeof t4 ? /* @__PURE__ */ function(t5) {
    return function() {
      var e2 = t5(this);
      this.textContent = null == e2 ? "" : e2;
    };
  }(vi(this, "text", t4)) : /* @__PURE__ */ function(t5) {
    return function() {
      this.textContent = t5;
    };
  }(null == t4 ? "" : t4 + ""));
}, textTween: function(t4) {
  var e2 = "text";
  if (arguments.length < 1) return (e2 = this.tween(e2)) && e2._value;
  if (null == t4) return this.tween(e2, null);
  if ("function" != typeof t4) throw new Error();
  return this.tween(e2, function(t5) {
    var e3, n2;
    function o2() {
      var o3 = t5.apply(this, arguments);
      return o3 !== n2 && (e3 = (n2 = o3) && /* @__PURE__ */ function(t6) {
        return function(e4) {
          this.textContent = t6.call(this, e4);
        };
      }(o3)), e3;
    }
    return o2._value = t5, o2;
  }(t4));
}, remove: function() {
  return this.on("end.remove", /* @__PURE__ */ function(t4) {
    return function() {
      var e2 = this.parentNode;
      for (var n2 in this.__transition) if (+n2 !== t4) return;
      e2 && e2.removeChild(this);
    };
  }(this._id));
}, tween: function(t4, e2) {
  var n2 = this._id;
  if (t4 += "", arguments.length < 2) {
    for (var o2, i2 = mi(this.node(), n2).tween, r2 = 0, s2 = i2.length; r2 < s2; ++r2) if ((o2 = i2[r2]).name === t4) return o2.value;
    return null;
  }
  return this.each((null == e2 ? wi : $i)(n2, t4, e2));
}, delay: function(t4) {
  var e2 = this._id;
  return arguments.length ? this.each(("function" == typeof t4 ? Mi : zi)(e2, t4)) : mi(this.node(), e2).delay;
}, duration: function(t4) {
  var e2 = this._id;
  return arguments.length ? this.each(("function" == typeof t4 ? Ni : Li)(e2, t4)) : mi(this.node(), e2).duration;
}, ease: function(t4) {
  var e2 = this._id;
  return arguments.length ? this.each(function(t5, e3) {
    if ("function" != typeof e3) throw new Error();
    return function() {
      gi(this, t5).ease = e3;
    };
  }(e2, t4)) : mi(this.node(), e2).ease;
}, easeVarying: function(t4) {
  if ("function" != typeof t4) throw new Error();
  return this.each(/* @__PURE__ */ function(t5, e2) {
    return function() {
      var n2 = e2.apply(this, arguments);
      if ("function" != typeof n2) throw new Error();
      gi(this, t5).ease = n2;
    };
  }(this._id, t4));
}, end: function() {
  var t4, e2, n2 = this, o2 = n2._id, i2 = n2.size();
  return new Promise(function(r2, s2) {
    var a2 = { value: s2 }, l2 = { value: function() {
      0 == --i2 && r2();
    } };
    n2.each(function() {
      var n3 = gi(this, o2), i3 = n3.on;
      i3 !== t4 && ((e2 = (t4 = i3).copy())._.cancel.push(a2), e2._.interrupt.push(a2), e2._.end.push(l2)), n3.on = e2;
    }), 0 === i2 && r2();
  });
}, [Symbol.iterator]: Vi[Symbol.iterator] };
var Fi = { time: null, delay: 0, duration: 250, ease: function(t4) {
  return ((t4 *= 2) <= 1 ? t4 * t4 * t4 : (t4 -= 2) * t4 * t4 + 2) / 2;
} };
function Wi(t4, e2) {
  for (var n2; !(n2 = t4.__transition) || !(n2 = n2[e2]); ) if (!(t4 = t4.parentNode)) throw new Error(`transition ${e2} not found`);
  return n2;
}
In.prototype.interrupt = function(t4) {
  return this.each(function() {
    yi(this, t4);
  });
}, In.prototype.transition = function(t4) {
  var e2, n2;
  t4 instanceof Ti ? (e2 = t4._id, t4 = t4._name) : (e2 = Hi(), (n2 = Fi).time = oi(), t4 = null == t4 ? null : t4 + "");
  for (var o2 = this._groups, i2 = o2.length, r2 = 0; r2 < i2; ++r2) for (var s2, a2 = o2[r2], l2 = a2.length, c2 = 0; c2 < l2; ++c2) (s2 = a2[c2]) && pi(s2, t4, e2, c2, a2, n2 || Wi(s2, e2));
  return new Ti(o2, this._parents, t4, e2);
};
var Xi = (t4) => () => t4;
function Yi(t4, { sourceEvent: e2, target: n2, transform: o2, dispatch: i2 }) {
  Object.defineProperties(this, { type: { value: t4, enumerable: true, configurable: true }, sourceEvent: { value: e2, enumerable: true, configurable: true }, target: { value: n2, enumerable: true, configurable: true }, transform: { value: o2, enumerable: true, configurable: true }, _: { value: i2 } });
}
function Ri(t4, e2, n2) {
  this.k = t4, this.x = e2, this.y = n2;
}
Ri.prototype = { constructor: Ri, scale: function(t4) {
  return 1 === t4 ? this : new Ri(this.k * t4, this.x, this.y);
}, translate: function(t4, e2) {
  return 0 === t4 & 0 === e2 ? this : new Ri(this.k, this.x + this.k * t4, this.y + this.k * e2);
}, apply: function(t4) {
  return [t4[0] * this.k + this.x, t4[1] * this.k + this.y];
}, applyX: function(t4) {
  return t4 * this.k + this.x;
}, applyY: function(t4) {
  return t4 * this.k + this.y;
}, invert: function(t4) {
  return [(t4[0] - this.x) / this.k, (t4[1] - this.y) / this.k];
}, invertX: function(t4) {
  return (t4 - this.x) / this.k;
}, invertY: function(t4) {
  return (t4 - this.y) / this.k;
}, rescaleX: function(t4) {
  return t4.copy().domain(t4.range().map(this.invertX, this).map(t4.invert, t4));
}, rescaleY: function(t4) {
  return t4.copy().domain(t4.range().map(this.invertY, this).map(t4.invert, t4));
}, toString: function() {
  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
} };
var Zi = new Ri(1, 0, 0);
function Bi(t4) {
  for (; !t4.__zoom; ) if (!(t4 = t4.parentNode)) return Zi;
  return t4.__zoom;
}
function Ki(t4) {
  t4.stopImmediatePropagation();
}
function Gi(t4) {
  t4.preventDefault(), t4.stopImmediatePropagation();
}
function ji(t4) {
  return !(t4.ctrlKey && "wheel" !== t4.type || t4.button);
}
function qi() {
  var t4 = this;
  return t4 instanceof SVGElement ? (t4 = t4.ownerSVGElement || t4).hasAttribute("viewBox") ? [[(t4 = t4.viewBox.baseVal).x, t4.y], [t4.x + t4.width, t4.y + t4.height]] : [[0, 0], [t4.width.baseVal.value, t4.height.baseVal.value]] : [[0, 0], [t4.clientWidth, t4.clientHeight]];
}
function Qi() {
  return this.__zoom || Zi;
}
function Ui(t4) {
  return -t4.deltaY * (1 === t4.deltaMode ? 0.05 : t4.deltaMode ? 1 : 2e-3) * (t4.ctrlKey ? 10 : 1);
}
function Ji() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tr(t4, e2, n2) {
  var o2 = t4.invertX(e2[0][0]) - n2[0][0], i2 = t4.invertX(e2[1][0]) - n2[1][0], r2 = t4.invertY(e2[0][1]) - n2[0][1], s2 = t4.invertY(e2[1][1]) - n2[1][1];
  return t4.translate(i2 > o2 ? (o2 + i2) / 2 : Math.min(0, o2) || Math.max(0, i2), s2 > r2 ? (r2 + s2) / 2 : Math.min(0, r2) || Math.max(0, s2));
}
function er() {
  var t4, e2, n2, o2 = ji, i2 = qi, r2 = tr, s2 = Ui, a2 = Ji, l2 = [0, 1 / 0], c2 = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], d2 = 250, u2 = Go, h2 = we("start", "zoom", "end"), p2 = 0, f2 = 10;
  function g2(t5) {
    t5.property("__zoom", Qi).on("wheel.zoom", b2, { passive: false }).on("mousedown.zoom", k2).on("dblclick.zoom", _2).filter(a2).on("touchstart.zoom", S2).on("touchmove.zoom", E2).on("touchend.zoom touchcancel.zoom", C2).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function m2(t5, e3) {
    return (e3 = Math.max(l2[0], Math.min(l2[1], e3))) === t5.k ? t5 : new Ri(e3, t5.x, t5.y);
  }
  function y2(t5, e3, n3) {
    var o3 = e3[0] - n3[0] * t5.k, i3 = e3[1] - n3[1] * t5.k;
    return o3 === t5.x && i3 === t5.y ? t5 : new Ri(t5.k, o3, i3);
  }
  function w2(t5) {
    return [(+t5[0][0] + +t5[1][0]) / 2, (+t5[0][1] + +t5[1][1]) / 2];
  }
  function $2(t5, e3, n3, o3) {
    t5.on("start.zoom", function() {
      v2(this, arguments).event(o3).start();
    }).on("interrupt.zoom end.zoom", function() {
      v2(this, arguments).event(o3).end();
    }).tween("zoom", function() {
      var t6 = this, r3 = arguments, s3 = v2(t6, r3).event(o3), a3 = i2.apply(t6, r3), l3 = null == n3 ? w2(a3) : "function" == typeof n3 ? n3.apply(t6, r3) : n3, c3 = Math.max(a3[1][0] - a3[0][0], a3[1][1] - a3[0][1]), d3 = t6.__zoom, h3 = "function" == typeof e3 ? e3.apply(t6, r3) : e3, p3 = u2(d3.invert(l3).concat(c3 / d3.k), h3.invert(l3).concat(c3 / h3.k));
      return function(t7) {
        if (1 === t7) t7 = h3;
        else {
          var e4 = p3(t7), n4 = c3 / e4[2];
          t7 = new Ri(n4, l3[0] - e4[0] * n4, l3[1] - e4[1] * n4);
        }
        s3.zoom(null, t7);
      };
    });
  }
  function v2(t5, e3, n3) {
    return !n3 && t5.__zooming || new x2(t5, e3);
  }
  function x2(t5, e3) {
    this.that = t5, this.args = e3, this.active = 0, this.sourceEvent = null, this.extent = i2.apply(t5, e3), this.taps = 0;
  }
  function b2(t5, ...e3) {
    if (o2.apply(this, arguments)) {
      var n3 = v2(this, e3).event(t5), i3 = this.__zoom, a3 = Math.max(l2[0], Math.min(l2[1], i3.k * Math.pow(2, s2.apply(this, arguments)))), d3 = An(t5);
      if (n3.wheel) n3.mouse[0][0] === d3[0] && n3.mouse[0][1] === d3[1] || (n3.mouse[1] = i3.invert(n3.mouse[0] = d3)), clearTimeout(n3.wheel);
      else {
        if (i3.k === a3) return;
        n3.mouse = [d3, i3.invert(d3)], yi(this), n3.start();
      }
      Gi(t5), n3.wheel = setTimeout(function() {
        n3.wheel = null, n3.end();
      }, 150), n3.zoom("mouse", r2(y2(m2(i3, a3), n3.mouse[0], n3.mouse[1]), n3.extent, c2));
    }
  }
  function k2(t5, ...e3) {
    if (!n2 && o2.apply(this, arguments)) {
      var i3 = t5.currentTarget, s3 = v2(this, e3, true).event(t5), a3 = Dn(t5.view).on("mousemove.zoom", function(t6) {
        if (Gi(t6), !s3.moved) {
          var e4 = t6.clientX - d3, n3 = t6.clientY - u3;
          s3.moved = e4 * e4 + n3 * n3 > p2;
        }
        s3.event(t6).zoom("mouse", r2(y2(s3.that.__zoom, s3.mouse[0] = An(t6, i3), s3.mouse[1]), s3.extent, c2));
      }, true).on("mouseup.zoom", function(t6) {
        a3.on("mousemove.zoom mouseup.zoom", null), Xn(t6.view, s3.moved), Gi(t6), s3.event(t6).end();
      }, true), l3 = An(t5, i3), d3 = t5.clientX, u3 = t5.clientY;
      Wn(t5.view), Ki(t5), s3.mouse = [l3, this.__zoom.invert(l3)], yi(this), s3.start();
    }
  }
  function _2(t5, ...e3) {
    if (o2.apply(this, arguments)) {
      var n3 = this.__zoom, s3 = An(t5.changedTouches ? t5.changedTouches[0] : t5, this), a3 = n3.invert(s3), l3 = n3.k * (t5.shiftKey ? 0.5 : 2), u3 = r2(y2(m2(n3, l3), s3, a3), i2.apply(this, e3), c2);
      Gi(t5), d2 > 0 ? Dn(this).transition().duration(d2).call($2, u3, s3, t5) : Dn(this).call(g2.transform, u3, s3, t5);
    }
  }
  function S2(n3, ...i3) {
    if (o2.apply(this, arguments)) {
      var r3, s3, a3, l3, c3 = n3.touches, d3 = c3.length, u3 = v2(this, i3, n3.changedTouches.length === d3).event(n3);
      for (Ki(n3), s3 = 0; s3 < d3; ++s3) l3 = [l3 = An(a3 = c3[s3], this), this.__zoom.invert(l3), a3.identifier], u3.touch0 ? u3.touch1 || u3.touch0[2] === l3[2] || (u3.touch1 = l3, u3.taps = 0) : (u3.touch0 = l3, r3 = true, u3.taps = 1 + !!t4);
      t4 && (t4 = clearTimeout(t4)), r3 && (u3.taps < 2 && (e2 = l3[0], t4 = setTimeout(function() {
        t4 = null;
      }, 500)), yi(this), u3.start());
    }
  }
  function E2(t5, ...e3) {
    if (this.__zooming) {
      var n3, o3, i3, s3, a3 = v2(this, e3).event(t5), l3 = t5.changedTouches, d3 = l3.length;
      for (Gi(t5), n3 = 0; n3 < d3; ++n3) i3 = An(o3 = l3[n3], this), a3.touch0 && a3.touch0[2] === o3.identifier ? a3.touch0[0] = i3 : a3.touch1 && a3.touch1[2] === o3.identifier && (a3.touch1[0] = i3);
      if (o3 = a3.that.__zoom, a3.touch1) {
        var u3 = a3.touch0[0], h3 = a3.touch0[1], p3 = a3.touch1[0], f3 = a3.touch1[1], g3 = (g3 = p3[0] - u3[0]) * g3 + (g3 = p3[1] - u3[1]) * g3, w3 = (w3 = f3[0] - h3[0]) * w3 + (w3 = f3[1] - h3[1]) * w3;
        o3 = m2(o3, Math.sqrt(g3 / w3)), i3 = [(u3[0] + p3[0]) / 2, (u3[1] + p3[1]) / 2], s3 = [(h3[0] + f3[0]) / 2, (h3[1] + f3[1]) / 2];
      } else {
        if (!a3.touch0) return;
        i3 = a3.touch0[0], s3 = a3.touch0[1];
      }
      a3.zoom("touch", r2(y2(o3, i3, s3), a3.extent, c2));
    }
  }
  function C2(t5, ...o3) {
    if (this.__zooming) {
      var i3, r3, s3 = v2(this, o3).event(t5), a3 = t5.changedTouches, l3 = a3.length;
      for (Ki(t5), n2 && clearTimeout(n2), n2 = setTimeout(function() {
        n2 = null;
      }, 500), i3 = 0; i3 < l3; ++i3) r3 = a3[i3], s3.touch0 && s3.touch0[2] === r3.identifier ? delete s3.touch0 : s3.touch1 && s3.touch1[2] === r3.identifier && delete s3.touch1;
      if (s3.touch1 && !s3.touch0 && (s3.touch0 = s3.touch1, delete s3.touch1), s3.touch0) s3.touch0[1] = this.__zoom.invert(s3.touch0[0]);
      else if (s3.end(), 2 === s3.taps && (r3 = An(r3, this), Math.hypot(e2[0] - r3[0], e2[1] - r3[1]) < f2)) {
        var c3 = Dn(this).on("dblclick.zoom");
        c3 && c3.apply(this, arguments);
      }
    }
  }
  return g2.transform = function(t5, e3, n3, o3) {
    var i3 = t5.selection ? t5.selection() : t5;
    i3.property("__zoom", Qi), t5 !== i3 ? $2(t5, e3, n3, o3) : i3.interrupt().each(function() {
      v2(this, arguments).event(o3).start().zoom(null, "function" == typeof e3 ? e3.apply(this, arguments) : e3).end();
    });
  }, g2.scaleBy = function(t5, e3, n3, o3) {
    g2.scaleTo(t5, function() {
      return this.__zoom.k * ("function" == typeof e3 ? e3.apply(this, arguments) : e3);
    }, n3, o3);
  }, g2.scaleTo = function(t5, e3, n3, o3) {
    g2.transform(t5, function() {
      var t6 = i2.apply(this, arguments), o4 = this.__zoom, s3 = null == n3 ? w2(t6) : "function" == typeof n3 ? n3.apply(this, arguments) : n3, a3 = o4.invert(s3), l3 = "function" == typeof e3 ? e3.apply(this, arguments) : e3;
      return r2(y2(m2(o4, l3), s3, a3), t6, c2);
    }, n3, o3);
  }, g2.translateBy = function(t5, e3, n3, o3) {
    g2.transform(t5, function() {
      return r2(this.__zoom.translate("function" == typeof e3 ? e3.apply(this, arguments) : e3, "function" == typeof n3 ? n3.apply(this, arguments) : n3), i2.apply(this, arguments), c2);
    }, null, o3);
  }, g2.translateTo = function(t5, e3, n3, o3, s3) {
    g2.transform(t5, function() {
      var t6 = i2.apply(this, arguments), s4 = this.__zoom, a3 = null == o3 ? w2(t6) : "function" == typeof o3 ? o3.apply(this, arguments) : o3;
      return r2(Zi.translate(a3[0], a3[1]).scale(s4.k).translate("function" == typeof e3 ? -e3.apply(this, arguments) : -e3, "function" == typeof n3 ? -n3.apply(this, arguments) : -n3), t6, c2);
    }, o3, s3);
  }, x2.prototype = { event: function(t5) {
    return t5 && (this.sourceEvent = t5), this;
  }, start: function() {
    return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this;
  }, zoom: function(t5, e3) {
    return this.mouse && "mouse" !== t5 && (this.mouse[1] = e3.invert(this.mouse[0])), this.touch0 && "touch" !== t5 && (this.touch0[1] = e3.invert(this.touch0[0])), this.touch1 && "touch" !== t5 && (this.touch1[1] = e3.invert(this.touch1[0])), this.that.__zoom = e3, this.emit("zoom"), this;
  }, end: function() {
    return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
  }, emit: function(t5) {
    var e3 = Dn(this.that).datum();
    h2.call(t5, this.that, new Yi(t5, { sourceEvent: this.sourceEvent, target: g2, type: t5, transform: this.that.__zoom, dispatch: h2 }), e3);
  } }, g2.wheelDelta = function(t5) {
    return arguments.length ? (s2 = "function" == typeof t5 ? t5 : Xi(+t5), g2) : s2;
  }, g2.filter = function(t5) {
    return arguments.length ? (o2 = "function" == typeof t5 ? t5 : Xi(!!t5), g2) : o2;
  }, g2.touchable = function(t5) {
    return arguments.length ? (a2 = "function" == typeof t5 ? t5 : Xi(!!t5), g2) : a2;
  }, g2.extent = function(t5) {
    return arguments.length ? (i2 = "function" == typeof t5 ? t5 : Xi([[+t5[0][0], +t5[0][1]], [+t5[1][0], +t5[1][1]]]), g2) : i2;
  }, g2.scaleExtent = function(t5) {
    return arguments.length ? (l2[0] = +t5[0], l2[1] = +t5[1], g2) : [l2[0], l2[1]];
  }, g2.translateExtent = function(t5) {
    return arguments.length ? (c2[0][0] = +t5[0][0], c2[1][0] = +t5[1][0], c2[0][1] = +t5[0][1], c2[1][1] = +t5[1][1], g2) : [[c2[0][0], c2[0][1]], [c2[1][0], c2[1][1]]];
  }, g2.constrain = function(t5) {
    return arguments.length ? (r2 = t5, g2) : r2;
  }, g2.duration = function(t5) {
    return arguments.length ? (d2 = +t5, g2) : d2;
  }, g2.interpolate = function(t5) {
    return arguments.length ? (u2 = t5, g2) : u2;
  }, g2.on = function() {
    var t5 = h2.on.apply(h2, arguments);
    return t5 === h2 ? g2 : t5;
  }, g2.clickDistance = function(t5) {
    return arguments.length ? (p2 = (t5 = +t5) * t5, g2) : Math.sqrt(p2);
  }, g2.tapDistance = function(t5) {
    return arguments.length ? (f2 = +t5, g2) : f2;
  }, g2;
}
Bi.prototype = Ri.prototype;
var nr = (t4) => `Node type "${t4}" not found. Using fallback type "default".`;
var or = () => "Only child nodes can use a parent extent.";
var ir = (t4, { id: e2, sourceHandle: n2, targetHandle: o2 }) => `Couldn't create edge for ${t4} handle id: "${"source" === t4 ? n2 : o2}", edge id: ${e2}.`;
var rr = (t4) => `Node with id "${t4}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`;
var sr = [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]];
var ar;
var lr;
var cr;
!function(t4) {
  t4.Strict = "strict", t4.Loose = "loose";
}(ar || (ar = {})), function(t4) {
  t4.Free = "free", t4.Vertical = "vertical", t4.Horizontal = "horizontal";
}(lr || (lr = {})), function(t4) {
  t4.Partial = "partial", t4.Full = "full";
}(cr || (cr = {}));
var dr = { inProgress: false, isValid: null, from: null, fromHandle: null, fromPosition: null, fromNode: null, to: null, toHandle: null, toPosition: null, toNode: null };
var ur;
var hr;
var pr;
!function(t4) {
  t4.Bezier = "default", t4.Straight = "straight", t4.Step = "step", t4.SmoothStep = "smoothstep", t4.SimpleBezier = "simplebezier";
}(ur || (ur = {})), function(t4) {
  t4.Arrow = "arrow", t4.ArrowClosed = "arrowclosed";
}(hr || (hr = {})), function(t4) {
  t4.Left = "left", t4.Top = "top", t4.Right = "right", t4.Bottom = "bottom";
}(pr || (pr = {}));
var fr = { [pr.Left]: pr.Right, [pr.Right]: pr.Left, [pr.Top]: pr.Bottom, [pr.Bottom]: pr.Top };
function gr(t4, e2, n2) {
  if (!n2) return;
  const o2 = [];
  t4.forEach((t5, n3) => {
    (e2 == null ? void 0 : e2.has(n3)) || o2.push(t5);
  }), o2.length && n2(o2);
}
function mr(t4) {
  return null === t4 ? null : t4 ? "valid" : "invalid";
}
var yr = (t4) => "id" in t4 && "internals" in t4 && !("source" in t4) && !("target" in t4);
var wr = (t4, e2 = [0, 0]) => {
  var _a2;
  const { width: n2, height: o2 } = Gr(t4), i2 = (_a2 = t4.origin) != null ? _a2 : e2, r2 = n2 * i2[0], s2 = o2 * i2[1];
  return { x: t4.position.x - r2, y: t4.position.y - s2 };
};
var $r = (t4, e2 = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (0 === t4.length) return { x: 0, y: 0, width: 0, height: 0 };
  const n2 = t4.reduce((t5, n3) => {
    const o2 = "string" == typeof n3;
    let i2 = e2.nodeLookup || o2 ? void 0 : n3;
    e2.nodeLookup && (i2 = o2 ? e2.nodeLookup.get(n3) : yr(n3) ? n3 : e2.nodeLookup.get(n3.id));
    const r2 = i2 ? Ar(i2, e2.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Nr(t5, r2);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ir(n2);
};
var vr = (t4, e2 = {}) => {
  if (0 === t4.size) return { x: 0, y: 0, width: 0, height: 0 };
  let n2 = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return t4.forEach((t5) => {
    if (void 0 === e2.filter || e2.filter(t5)) {
      const e3 = Ar(t5);
      n2 = Nr(n2, e3);
    }
  }), Ir(n2);
};
var xr = (t4, e2, [n2, o2, i2] = [0, 0, 1], r2 = false, s2 = false) => {
  var _a2, _b, _c2, _d2, _e2, _f;
  const a2 = __spreadProps(__spreadValues({}, Yr(e2, [n2, o2, i2])), { width: e2.width / i2, height: e2.height / i2 }), l2 = [];
  for (const e3 of t4.values()) {
    const { measured: t5, selectable: n3 = true, hidden: o3 = false } = e3;
    if (s2 && !n3 || o3) continue;
    const i3 = (_c2 = (_b = (_a2 = t5.width) != null ? _a2 : e3.width) != null ? _b : e3.initialWidth) != null ? _c2 : null, c2 = (_f = (_e2 = (_d2 = t5.height) != null ? _d2 : e3.height) != null ? _e2 : e3.initialHeight) != null ? _f : null, d2 = Hr(a2, Dr(e3)), u2 = (i3 != null ? i3 : 0) * (c2 != null ? c2 : 0), h2 = r2 && d2 > 0;
    (!e3.internals.handleBounds || h2 || d2 >= u2 || e3.dragging) && l2.push(e3);
  }
  return l2;
};
var br = (t4, e2) => {
  const n2 = /* @__PURE__ */ new Set();
  return t4.forEach((t5) => {
    n2.add(t5.id);
  }), e2.filter((t5) => n2.has(t5.source) || n2.has(t5.target));
};
function kr(t4, e2) {
  const n2 = /* @__PURE__ */ new Map(), o2 = (e2 == null ? void 0 : e2.nodes) ? new Set(e2.nodes.map((t5) => t5.id)) : null;
  return t4.forEach((t5) => {
    !(t5.measured.width && t5.measured.height && ((e2 == null ? void 0 : e2.includeHiddenNodes) || !t5.hidden)) || o2 && !o2.has(t5.id) || n2.set(t5.id, t5);
  }), n2;
}
function _r(_0, _1) {
  return __async(this, arguments, function* ({ nodes: t4, width: e2, height: n2, panZoom: o2, minZoom: i2, maxZoom: r2 }, s2) {
    var _a2, _b, _c2;
    if (0 === t4.size) return Promise.resolve(false);
    const a2 = vr(t4), l2 = Zr(a2, e2, n2, (_a2 = s2 == null ? void 0 : s2.minZoom) != null ? _a2 : i2, (_b = s2 == null ? void 0 : s2.maxZoom) != null ? _b : r2, (_c2 = s2 == null ? void 0 : s2.padding) != null ? _c2 : 0.1);
    return yield o2.setViewport(l2, { duration: s2 == null ? void 0 : s2.duration }), Promise.resolve(true);
  });
}
function Sr({ nodeId: t4, nextPosition: e2, nodeLookup: n2, nodeOrigin: o2 = [0, 0], nodeExtent: i2, onError: r2 }) {
  var _a2;
  const s2 = n2.get(t4), a2 = s2.parentId ? n2.get(s2.parentId) : void 0, { x: l2, y: c2 } = a2 ? a2.internals.positionAbsolute : { x: 0, y: 0 }, d2 = (_a2 = s2.origin) != null ? _a2 : o2;
  let u2 = i2;
  if ("parent" !== s2.extent || s2.expandParent) a2 && Kr(s2.extent) && (u2 = [[s2.extent[0][0] + l2, s2.extent[0][1] + c2], [s2.extent[1][0] + l2, s2.extent[1][1] + c2]]);
  else if (a2) {
    const t5 = a2.measured.width, e3 = a2.measured.height;
    t5 && e3 && (u2 = [[l2, c2], [l2 + t5, c2 + e3]]);
  } else r2 == null ? void 0 : r2("005", or());
  const h2 = Kr(u2) ? Or(e2, u2, s2.measured) : e2;
  return { position: { x: h2.x - l2 + s2.measured.width * d2[0], y: h2.y - c2 + s2.measured.height * d2[1] }, positionAbsolute: h2 };
}
function Er(_0) {
  return __async(this, arguments, function* ({ nodesToRemove: t4 = [], edgesToRemove: e2 = [], nodes: n2, edges: o2, onBeforeDelete: i2 }) {
    const r2 = new Set(t4.map((t5) => t5.id)), s2 = [];
    for (const t5 of n2) {
      if (false === t5.deletable) continue;
      const e3 = r2.has(t5.id), n3 = !e3 && t5.parentId && s2.find((e4) => e4.id === t5.parentId);
      (e3 || n3) && s2.push(t5);
    }
    const a2 = new Set(e2.map((t5) => t5.id)), l2 = o2.filter((t5) => false !== t5.deletable), c2 = br(s2, l2);
    for (const t5 of l2) {
      a2.has(t5.id) && !c2.find((e3) => e3.id === t5.id) && c2.push(t5);
    }
    if (!i2) return { edges: c2, nodes: s2 };
    const d2 = yield i2({ nodes: s2, edges: c2 });
    return "boolean" == typeof d2 ? d2 ? { edges: c2, nodes: s2 } : { edges: [], nodes: [] } : d2;
  });
}
var Cr = (t4, e2 = 0, n2 = 1) => Math.min(Math.max(t4, e2), n2);
var Or = (t4 = { x: 0, y: 0 }, e2, n2) => {
  var _a2, _b;
  return { x: Cr(t4.x, e2[0][0], e2[1][0] - ((_a2 = n2 == null ? void 0 : n2.width) != null ? _a2 : 0)), y: Cr(t4.y, e2[0][1], e2[1][1] - ((_b = n2 == null ? void 0 : n2.height) != null ? _b : 0)) };
};
function Pr(t4, e2, n2) {
  const { width: o2, height: i2 } = Gr(n2), { x: r2, y: s2 } = n2.internals.positionAbsolute;
  return Or(t4, [[r2, s2], [r2 + o2, s2 + i2]], e2);
}
var Mr = (t4, e2, n2) => t4 < e2 ? Cr(Math.abs(t4 - e2), 1, e2) / e2 : t4 > n2 ? -Cr(Math.abs(t4 - n2), 1, e2) / e2 : 0;
var zr = (t4, e2, n2 = 15, o2 = 40) => [Mr(t4.x, o2, e2.width - o2) * n2, Mr(t4.y, o2, e2.height - o2) * n2];
var Nr = (t4, e2) => ({ x: Math.min(t4.x, e2.x), y: Math.min(t4.y, e2.y), x2: Math.max(t4.x2, e2.x2), y2: Math.max(t4.y2, e2.y2) });
var Lr = ({ x: t4, y: e2, width: n2, height: o2 }) => ({ x: t4, y: e2, x2: t4 + n2, y2: e2 + o2 });
var Ir = ({ x: t4, y: e2, x2: n2, y2: o2 }) => ({ x: t4, y: e2, width: n2 - t4, height: o2 - e2 });
var Dr = (t4, e2 = [0, 0]) => {
  var _a2, _b, _c2, _d2, _e2, _f, _g, _h2;
  const { x: n2, y: o2 } = yr(t4) ? t4.internals.positionAbsolute : wr(t4, e2);
  return { x: n2, y: o2, width: (_d2 = (_c2 = (_b = (_a2 = t4.measured) == null ? void 0 : _a2.width) != null ? _b : t4.width) != null ? _c2 : t4.initialWidth) != null ? _d2 : 0, height: (_h2 = (_g = (_f = (_e2 = t4.measured) == null ? void 0 : _e2.height) != null ? _f : t4.height) != null ? _g : t4.initialHeight) != null ? _h2 : 0 };
};
var Ar = (t4, e2 = [0, 0]) => {
  var _a2, _b, _c2, _d2, _e2, _f, _g, _h2;
  const { x: n2, y: o2 } = yr(t4) ? t4.internals.positionAbsolute : wr(t4, e2);
  return { x: n2, y: o2, x2: n2 + ((_d2 = (_c2 = (_b = (_a2 = t4.measured) == null ? void 0 : _a2.width) != null ? _b : t4.width) != null ? _c2 : t4.initialWidth) != null ? _d2 : 0), y2: o2 + ((_h2 = (_g = (_f = (_e2 = t4.measured) == null ? void 0 : _e2.height) != null ? _f : t4.height) != null ? _g : t4.initialHeight) != null ? _h2 : 0) };
};
var Tr = (t4, e2) => Ir(Nr(Lr(t4), Lr(e2)));
var Hr = (t4, e2) => {
  const n2 = Math.max(0, Math.min(t4.x + t4.width, e2.x + e2.width) - Math.max(t4.x, e2.x)), o2 = Math.max(0, Math.min(t4.y + t4.height, e2.y + e2.height) - Math.max(t4.y, e2.y));
  return Math.ceil(n2 * o2);
};
var Vr = (t4) => Fr(t4.width) && Fr(t4.height) && Fr(t4.x) && Fr(t4.y);
var Fr = (t4) => !isNaN(t4) && isFinite(t4);
var Wr = (t4, e2) => {
};
var Xr = (t4, e2 = [1, 1]) => ({ x: e2[0] * Math.round(t4.x / e2[0]), y: e2[1] * Math.round(t4.y / e2[1]) });
var Yr = ({ x: t4, y: e2 }, [n2, o2, i2], r2 = false, s2 = [1, 1]) => {
  const a2 = { x: (t4 - n2) / i2, y: (e2 - o2) / i2 };
  return r2 ? Xr(a2, s2) : a2;
};
var Rr = ({ x: t4, y: e2 }, [n2, o2, i2]) => ({ x: t4 * i2 + n2, y: e2 * i2 + o2 });
var Zr = (t4, e2, n2, o2, i2, r2) => {
  const s2 = e2 / (t4.width * (1 + r2)), a2 = n2 / (t4.height * (1 + r2)), l2 = Math.min(s2, a2), c2 = Cr(l2, o2, i2);
  return { x: e2 / 2 - (t4.x + t4.width / 2) * c2, y: n2 / 2 - (t4.y + t4.height / 2) * c2, zoom: c2 };
};
var Br = () => {
  var _a2;
  return "undefined" != typeof navigator && ((_a2 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a2.indexOf("Mac")) >= 0;
};
function Kr(t4) {
  return void 0 !== t4 && "parent" !== t4;
}
function Gr(t4) {
  var _a2, _b, _c2, _d2, _e2, _f, _g, _h2;
  return { width: (_d2 = (_c2 = (_b = (_a2 = t4.measured) == null ? void 0 : _a2.width) != null ? _b : t4.width) != null ? _c2 : t4.initialWidth) != null ? _d2 : 0, height: (_h2 = (_g = (_f = (_e2 = t4.measured) == null ? void 0 : _e2.height) != null ? _f : t4.height) != null ? _g : t4.initialHeight) != null ? _h2 : 0 };
}
function jr(t4) {
  var _a2, _b, _c2, _d2, _e2, _f;
  return void 0 !== ((_c2 = (_b = (_a2 = t4.measured) == null ? void 0 : _a2.width) != null ? _b : t4.width) != null ? _c2 : t4.initialWidth) && void 0 !== ((_f = (_e2 = (_d2 = t4.measured) == null ? void 0 : _d2.height) != null ? _e2 : t4.height) != null ? _f : t4.initialHeight);
}
function qr(t4, { snapGrid: e2 = [0, 0], snapToGrid: n2 = false, transform: o2 }) {
  const { x: i2, y: r2 } = ts(t4), s2 = Yr({ x: i2, y: r2 }, o2), { x: a2, y: l2 } = n2 ? Xr(s2, e2) : s2;
  return __spreadValues({ xSnapped: a2, ySnapped: l2 }, s2);
}
var Qr = (t4) => ({ width: t4.offsetWidth, height: t4.offsetHeight });
var Ur = ["INPUT", "SELECT", "TEXTAREA"];
var Jr = (t4) => "clientX" in t4;
var ts = (t4, e2) => {
  var _a2, _b, _c2, _d2;
  const n2 = Jr(t4), o2 = n2 ? t4.clientX : (_a2 = t4.touches) == null ? void 0 : _a2[0].clientX, i2 = n2 ? t4.clientY : (_b = t4.touches) == null ? void 0 : _b[0].clientY;
  return { x: o2 - ((_c2 = e2 == null ? void 0 : e2.left) != null ? _c2 : 0), y: i2 - ((_d2 = e2 == null ? void 0 : e2.top) != null ? _d2 : 0) };
};
var es = (t4, e2, n2, o2, i2) => {
  const r2 = e2.querySelectorAll(`.${t4}`);
  return r2 && r2.length ? Array.from(r2).map((e3) => {
    const r3 = e3.getBoundingClientRect();
    return __spreadValues({ id: e3.getAttribute("data-handleid"), type: t4, nodeId: i2, position: e3.getAttribute("data-handlepos"), x: (r3.left - n2.left) / o2, y: (r3.top - n2.top) / o2 }, Qr(e3));
  }) : null;
};
function ns(t4, e2) {
  return t4 >= 0 ? 0.5 * t4 : 25 * e2 * Math.sqrt(-t4);
}
function os({ pos: t4, x1: e2, y1: n2, x2: o2, y2: i2, c: r2 }) {
  switch (t4) {
    case pr.Left:
      return [e2 - ns(e2 - o2, r2), n2];
    case pr.Right:
      return [e2 + ns(o2 - e2, r2), n2];
    case pr.Top:
      return [e2, n2 - ns(n2 - i2, r2)];
    case pr.Bottom:
      return [e2, n2 + ns(i2 - n2, r2)];
  }
}
function is({ sourceX: t4, sourceY: e2, sourcePosition: n2 = pr.Bottom, targetX: o2, targetY: i2, targetPosition: r2 = pr.Top, curvature: s2 = 0.25 }) {
  const [a2, l2] = os({ pos: n2, x1: t4, y1: e2, x2: o2, y2: i2, c: s2 }), [c2, d2] = os({ pos: r2, x1: o2, y1: i2, x2: t4, y2: e2, c: s2 }), [u2, h2, p2, f2] = function({ sourceX: t5, sourceY: e3, targetX: n3, targetY: o3, sourceControlX: i3, sourceControlY: r3, targetControlX: s3, targetControlY: a3 }) {
    const l3 = 0.125 * t5 + 0.375 * i3 + 0.375 * s3 + 0.125 * n3, c3 = 0.125 * e3 + 0.375 * r3 + 0.375 * a3 + 0.125 * o3;
    return [l3, c3, Math.abs(l3 - t5), Math.abs(c3 - e3)];
  }({ sourceX: t4, sourceY: e2, targetX: o2, targetY: i2, sourceControlX: a2, sourceControlY: l2, targetControlX: c2, targetControlY: d2 });
  return [`M${t4},${e2} C${a2},${l2} ${c2},${d2} ${o2},${i2}`, u2, h2, p2, f2];
}
function rs({ sourceX: t4, sourceY: e2, targetX: n2, targetY: o2 }) {
  const i2 = Math.abs(n2 - t4) / 2, r2 = n2 < t4 ? n2 + i2 : n2 - i2, s2 = Math.abs(o2 - e2) / 2;
  return [r2, o2 < e2 ? o2 + s2 : o2 - s2, i2, s2];
}
function ss({ sourceNode: t4, targetNode: e2, selected: n2 = false, zIndex: o2 = 0, elevateOnSelect: i2 = false }) {
  if (!i2) return o2;
  const r2 = n2 || e2.selected || t4.selected, s2 = Math.max(t4.internals.z || 0, e2.internals.z || 0, 1e3);
  return o2 + (r2 ? s2 : 0);
}
var as = ({ source: t4, sourceHandle: e2, target: n2, targetHandle: o2 }) => `xy-edge__${t4}${e2 || ""}-${n2}${o2 || ""}`;
function ls({ sourceX: t4, sourceY: e2, targetX: n2, targetY: o2 }) {
  const [i2, r2, s2, a2] = rs({ sourceX: t4, sourceY: e2, targetX: n2, targetY: o2 });
  return [`M ${t4},${e2}L ${n2},${o2}`, i2, r2, s2, a2];
}
var cs = { [pr.Left]: { x: -1, y: 0 }, [pr.Right]: { x: 1, y: 0 }, [pr.Top]: { x: 0, y: -1 }, [pr.Bottom]: { x: 0, y: 1 } };
var ds = (t4, e2) => Math.sqrt(Math.pow(e2.x - t4.x, 2) + Math.pow(e2.y - t4.y, 2));
function us({ source: t4, sourcePosition: e2 = pr.Bottom, target: n2, targetPosition: o2 = pr.Top, center: i2, offset: r2 }) {
  var _a2, _b;
  const s2 = cs[e2], a2 = cs[o2], l2 = { x: t4.x + s2.x * r2, y: t4.y + s2.y * r2 }, c2 = { x: n2.x + a2.x * r2, y: n2.y + a2.y * r2 }, d2 = (({ source: t5, sourcePosition: e3 = pr.Bottom, target: n3 }) => e3 === pr.Left || e3 === pr.Right ? t5.x < n3.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t5.y < n3.y ? { x: 0, y: 1 } : { x: 0, y: -1 })({ source: l2, sourcePosition: e2, target: c2 }), u2 = 0 !== d2.x ? "x" : "y", h2 = d2[u2];
  let p2, f2, g2 = [];
  const m2 = { x: 0, y: 0 }, y2 = { x: 0, y: 0 }, [w2, $2, v2, x2] = rs({ sourceX: t4.x, sourceY: t4.y, targetX: n2.x, targetY: n2.y });
  if (s2[u2] * a2[u2] == -1) {
    p2 = (_a2 = i2.x) != null ? _a2 : w2, f2 = (_b = i2.y) != null ? _b : $2;
    const t5 = [{ x: p2, y: l2.y }, { x: p2, y: c2.y }], e3 = [{ x: l2.x, y: f2 }, { x: c2.x, y: f2 }];
    g2 = s2[u2] === h2 ? "x" === u2 ? t5 : e3 : "x" === u2 ? e3 : t5;
  } else {
    const i3 = [{ x: l2.x, y: c2.y }], d3 = [{ x: c2.x, y: l2.y }];
    if (g2 = "x" === u2 ? s2.x === h2 ? d3 : i3 : s2.y === h2 ? i3 : d3, e2 === o2) {
      const e3 = Math.abs(t4[u2] - n2[u2]);
      if (e3 <= r2) {
        const o3 = Math.min(r2 - 1, r2 - e3);
        s2[u2] === h2 ? m2[u2] = (l2[u2] > t4[u2] ? -1 : 1) * o3 : y2[u2] = (c2[u2] > n2[u2] ? -1 : 1) * o3;
      }
    }
    if (e2 !== o2) {
      const t5 = "x" === u2 ? "y" : "x", e3 = s2[u2] === a2[t5], n3 = l2[t5] > c2[t5], o3 = l2[t5] < c2[t5];
      (1 === s2[u2] && (!e3 && n3 || e3 && o3) || 1 !== s2[u2] && (!e3 && o3 || e3 && n3)) && (g2 = "x" === u2 ? i3 : d3);
    }
    const w3 = { x: l2.x + m2.x, y: l2.y + m2.y }, $3 = { x: c2.x + y2.x, y: c2.y + y2.y };
    Math.max(Math.abs(w3.x - g2[0].x), Math.abs($3.x - g2[0].x)) >= Math.max(Math.abs(w3.y - g2[0].y), Math.abs($3.y - g2[0].y)) ? (p2 = (w3.x + $3.x) / 2, f2 = g2[0].y) : (p2 = g2[0].x, f2 = (w3.y + $3.y) / 2);
  }
  return [[t4, { x: l2.x + m2.x, y: l2.y + m2.y }, ...g2, { x: c2.x + y2.x, y: c2.y + y2.y }, n2], p2, f2, v2, x2];
}
function hs({ sourceX: t4, sourceY: e2, sourcePosition: n2 = pr.Bottom, targetX: o2, targetY: i2, targetPosition: r2 = pr.Top, borderRadius: s2 = 5, centerX: a2, centerY: l2, offset: c2 = 20 }) {
  const [d2, u2, h2, p2, f2] = us({ source: { x: t4, y: e2 }, sourcePosition: n2, target: { x: o2, y: i2 }, targetPosition: r2, center: { x: a2, y: l2 }, offset: c2 });
  return [d2.reduce((t5, e3, n3) => {
    let o3 = "";
    return o3 = n3 > 0 && n3 < d2.length - 1 ? function(t6, e4, n4, o4) {
      const i3 = Math.min(ds(t6, e4) / 2, ds(e4, n4) / 2, o4), { x: r3, y: s3 } = e4;
      if (t6.x === r3 && r3 === n4.x || t6.y === s3 && s3 === n4.y) return `L${r3} ${s3}`;
      if (t6.y === s3) return `L ${r3 + i3 * (t6.x < n4.x ? -1 : 1)},${s3}Q ${r3},${s3} ${r3},${s3 + i3 * (t6.y < n4.y ? 1 : -1)}`;
      const a3 = t6.x < n4.x ? 1 : -1;
      return `L ${r3},${s3 + i3 * (t6.y < n4.y ? -1 : 1)}Q ${r3},${s3} ${r3 + i3 * a3},${s3}`;
    }(d2[n3 - 1], e3, d2[n3 + 1], s2) : `${0 === n3 ? "M" : "L"}${e3.x} ${e3.y}`, t5 += o3;
  }, ""), u2, h2, p2, f2];
}
function ps(t4) {
  var _a2;
  return t4 && !(!t4.internals.handleBounds && !((_a2 = t4.handles) == null ? void 0 : _a2.length)) && !!(t4.measured.width || t4.width || t4.initialWidth);
}
function fs(t4) {
  var _a2, _b;
  if (!t4) return null;
  const e2 = [], n2 = [];
  for (const o2 of t4) o2.width = (_a2 = o2.width) != null ? _a2 : 1, o2.height = (_b = o2.height) != null ? _b : 1, "source" === o2.type ? e2.push(o2) : "target" === o2.type && n2.push(o2);
  return { source: e2, target: n2 };
}
function gs(t4, e2, n2 = pr.Left, o2 = false) {
  var _a2, _b, _c2;
  const i2 = ((_a2 = e2 == null ? void 0 : e2.x) != null ? _a2 : 0) + t4.internals.positionAbsolute.x, r2 = ((_b = e2 == null ? void 0 : e2.y) != null ? _b : 0) + t4.internals.positionAbsolute.y, { width: s2, height: a2 } = e2 != null ? e2 : Gr(t4);
  if (o2) return { x: i2 + s2 / 2, y: r2 + a2 / 2 };
  switch ((_c2 = e2 == null ? void 0 : e2.position) != null ? _c2 : n2) {
    case pr.Top:
      return { x: i2 + s2 / 2, y: r2 };
    case pr.Right:
      return { x: i2 + s2, y: r2 + a2 / 2 };
    case pr.Bottom:
      return { x: i2 + s2 / 2, y: r2 + a2 };
    case pr.Left:
      return { x: i2, y: r2 + a2 / 2 };
  }
}
function ms(t4, e2) {
  return t4 && (e2 ? t4.find((t5) => t5.id === e2) : t4[0]) || null;
}
function ys(t4, e2) {
  if (!t4) return "";
  if ("string" == typeof t4) return t4;
  return `${e2 ? `${e2}__` : ""}${Object.keys(t4).sort().map((e3) => `${e3}=${t4[e3]}`).join("&")}`;
}
var ws = { nodeOrigin: [0, 0], nodeExtent: sr, elevateNodesOnSelect: true, defaults: {} };
var $s = __spreadProps(__spreadValues({}, ws), { checkEquality: true });
function vs(t4, e2) {
  const n2 = __spreadValues({}, t4);
  for (const t5 in e2) void 0 !== e2[t5] && (n2[t5] = e2[t5]);
  return n2;
}
function xs(t4, e2, n2, o2) {
  var _a2, _b;
  const i2 = vs($s, o2), r2 = new Map(e2), s2 = (i2 == null ? void 0 : i2.elevateNodesOnSelect) ? 1e3 : 0;
  e2.clear(), n2.clear();
  for (const a2 of t4) {
    let t5 = r2.get(a2.id);
    if (i2.checkEquality && a2 === (t5 == null ? void 0 : t5.internals.userNode)) e2.set(a2.id, t5);
    else {
      const n3 = wr(a2, i2.nodeOrigin), o3 = Kr(a2.extent) ? a2.extent : i2.nodeExtent, r3 = Or(n3, o3, Gr(a2));
      t5 = __spreadProps(__spreadValues(__spreadValues({}, i2.defaults), a2), { measured: { width: (_a2 = a2.measured) == null ? void 0 : _a2.width, height: (_b = a2.measured) == null ? void 0 : _b.height }, internals: { positionAbsolute: r3, handleBounds: a2.measured ? t5 == null ? void 0 : t5.internals.handleBounds : void 0, z: ks(a2, s2), userNode: a2 } }), e2.set(a2.id, t5);
    }
    a2.parentId && bs(t5, e2, n2, o2);
  }
}
function bs(t4, e2, n2, o2) {
  const { elevateNodesOnSelect: i2, nodeOrigin: r2, nodeExtent: s2 } = vs(ws, o2), a2 = t4.parentId, l2 = e2.get(a2);
  if (!l2) return void console.warn(`Parent node ${a2} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
  !function(t5, e3) {
    if (!t5.parentId) return;
    const n3 = e3.get(t5.parentId);
    n3 ? n3.set(t5.id, t5) : e3.set(t5.parentId, /* @__PURE__ */ new Map([[t5.id, t5]]));
  }(t4, n2);
  const c2 = i2 ? 1e3 : 0, { x: d2, y: u2, z: h2 } = function(t5, e3, n3, o3, i3) {
    var _a2;
    const { x: r3, y: s3 } = e3.internals.positionAbsolute, a3 = Gr(t5), l3 = wr(t5, n3), c3 = Kr(t5.extent) ? Or(l3, t5.extent, a3) : l3;
    let d3 = Or({ x: r3 + c3.x, y: s3 + c3.y }, o3, a3);
    "parent" === t5.extent && (d3 = Pr(d3, a3, e3));
    const u3 = ks(t5, i3), h3 = (_a2 = e3.internals.z) != null ? _a2 : 0;
    return { x: d3.x, y: d3.y, z: h3 > u3 ? h3 : u3 };
  }(t4, l2, r2, s2, c2), { positionAbsolute: p2 } = t4.internals, f2 = d2 !== p2.x || u2 !== p2.y;
  (f2 || h2 !== t4.internals.z) && (t4.internals = __spreadProps(__spreadValues({}, t4.internals), { positionAbsolute: f2 ? { x: d2, y: u2 } : p2, z: h2 }));
}
function ks(t4, e2) {
  return (Fr(t4.zIndex) ? t4.zIndex : 0) + (t4.selected ? e2 : 0);
}
function _s(t4, e2, n2, o2, i2, r2) {
  const s2 = o2 == null ? void 0 : o2.querySelector(".xyflow__viewport");
  let a2 = false;
  if (!s2) return { changes: [], updatedInternals: a2 };
  const l2 = [], c2 = window.getComputedStyle(s2), { m22: d2 } = new window.DOMMatrixReadOnly(c2.transform), u2 = [];
  for (const o3 of t4.values()) {
    const t5 = e2.get(o3.id);
    if (t5) if (t5.hidden) t5.internals = __spreadProps(__spreadValues({}, t5.internals), { handleBounds: void 0 }), a2 = true;
    else {
      const s3 = Qr(o3.nodeElement), c3 = t5.measured.width !== s3.width || t5.measured.height !== s3.height;
      if (!(!s3.width || !s3.height || !c3 && t5.internals.handleBounds && !o3.force)) {
        const h2 = o3.nodeElement.getBoundingClientRect(), p2 = Kr(t5.extent) ? t5.extent : r2;
        let { positionAbsolute: f2 } = t5.internals;
        t5.parentId && "parent" === t5.extent ? f2 = Pr(f2, s3, e2.get(t5.parentId)) : p2 && (f2 = Or(f2, p2, s3)), t5.measured = s3, t5.internals = __spreadProps(__spreadValues({}, t5.internals), { positionAbsolute: f2, handleBounds: { source: es("source", o3.nodeElement, h2, d2, t5.id), target: es("target", o3.nodeElement, h2, d2, t5.id) } }), t5.parentId && bs(t5, e2, n2, { nodeOrigin: i2 }), a2 = true, c3 && (l2.push({ id: t5.id, type: "dimensions", dimensions: s3 }), t5.expandParent && t5.parentId && u2.push({ id: t5.id, parentId: t5.parentId, rect: Dr(t5, i2) }));
      }
    }
  }
  if (u2.length > 0) {
    const t5 = function(t6, e3, n3, o3 = [0, 0]) {
      var _a2, _b;
      const i3 = [], r3 = /* @__PURE__ */ new Map();
      for (const n4 of t6) {
        const t7 = e3.get(n4.parentId);
        if (!t7) continue;
        const o4 = (_b = (_a2 = r3.get(n4.parentId)) == null ? void 0 : _a2.expandedRect) != null ? _b : Dr(t7), i4 = Tr(o4, n4.rect);
        r3.set(n4.parentId, { expandedRect: i4, parent: t7 });
      }
      return r3.size > 0 && r3.forEach(({ expandedRect: e4, parent: r4 }, s3) => {
        var _a3, _b2;
        const a3 = r4.internals.positionAbsolute, l3 = Gr(r4), c3 = (_a3 = r4.origin) != null ? _a3 : o3, d3 = e4.x < a3.x ? Math.round(Math.abs(a3.x - e4.x)) : 0, u3 = e4.y < a3.y ? Math.round(Math.abs(a3.y - e4.y)) : 0, h2 = Math.max(l3.width, Math.round(e4.width)), p2 = Math.max(l3.height, Math.round(e4.height)), f2 = (h2 - l3.width) * c3[0], g2 = (p2 - l3.height) * c3[1];
        (d3 > 0 || u3 > 0 || f2 || g2) && (i3.push({ id: s3, type: "position", position: { x: r4.position.x - d3 + f2, y: r4.position.y - u3 + g2 } }), (_b2 = n3.get(s3)) == null ? void 0 : _b2.forEach((e5) => {
          t6.some((t7) => t7.id === e5.id) || i3.push({ id: e5.id, type: "position", position: { x: e5.position.x + d3, y: e5.position.y + u3 } });
        })), (l3.width < e4.width || l3.height < e4.height || d3 || u3) && i3.push({ id: s3, type: "dimensions", setAttributes: true, dimensions: { width: h2 + (d3 ? c3[0] * d3 - f2 : 0), height: p2 + (u3 ? c3[1] * u3 - g2 : 0) } });
      }), i3;
    }(u2, e2, n2, i2);
    l2.push(...t5);
  }
  return { changes: l2, updatedInternals: a2 };
}
function Ss(t4, e2, n2) {
  t4.clear(), e2.clear();
  for (const o2 of n2) {
    const { source: n3, target: i2, sourceHandle: r2 = null, targetHandle: s2 = null } = o2, a2 = `${n3}-source-${r2}`, l2 = `${i2}-target-${s2}`, c2 = t4.get(a2) || /* @__PURE__ */ new Map(), d2 = t4.get(l2) || /* @__PURE__ */ new Map(), u2 = { edgeId: o2.id, source: n3, target: i2, sourceHandle: r2, targetHandle: s2 };
    e2.set(o2.id, o2), t4.set(a2, c2.set(`${i2}-${s2}`, u2)), t4.set(l2, d2.set(`${n3}-${r2}`, u2));
  }
}
function Es(t4, e2) {
  if (!t4.parentId) return false;
  const n2 = e2.get(t4.parentId);
  return !!n2 && (!!n2.selected || Es(n2, e2));
}
function Cs(t4, e2, n2) {
  let o2 = t4;
  do {
    if (o2 == null ? void 0 : o2.matches(e2)) return true;
    if (o2 === n2) return false;
    o2 = o2.parentElement;
  } while (o2);
  return false;
}
function Os({ nodeId: t4, dragItems: e2, nodeLookup: n2, dragging: o2 = true }) {
  var _a2, _b, _c2;
  const i2 = [];
  for (const [t5, r3] of e2) {
    const e3 = (_a2 = n2.get(t5)) == null ? void 0 : _a2.internals.userNode;
    e3 && i2.push(__spreadProps(__spreadValues({}, e3), { position: r3.position, dragging: o2 }));
  }
  if (!t4) return [i2[0], i2];
  const r2 = (_b = n2.get(t4)) == null ? void 0 : _b.internals.userNode;
  return [r2 ? __spreadProps(__spreadValues({}, r2), { position: ((_c2 = e2.get(t4)) == null ? void 0 : _c2.position) || r2.position, dragging: o2 }) : i2[0], i2];
}
function Ps({ onNodeMouseDown: t4, getStoreItems: e2, onDragStart: n2, onDrag: o2, onDragStop: i2 }) {
  let r2 = { x: null, y: null }, s2 = 0, a2 = /* @__PURE__ */ new Map(), l2 = false, c2 = { x: 0, y: 0 }, d2 = null, u2 = false, h2 = null, p2 = false;
  return { update: function({ noDragClassName: f2, handleSelector: g2, domNode: m2, isSelectable: y2, nodeId: w2, nodeClickDistance: $2 = 0 }) {
    function v2({ x: t5, y: n3 }, i3) {
      const { nodeLookup: s3, nodeExtent: l3, snapGrid: c3, snapToGrid: d3, nodeOrigin: u3, onNodeDrag: h3, onSelectionDrag: p3, onError: f3, updateNodePositions: g3 } = e2();
      r2 = { x: t5, y: n3 };
      let m3 = false, y3 = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a2.size > 1 && l3) {
        const t6 = vr(a2);
        y3 = Lr(t6);
      }
      for (const [e3, o3] of a2) {
        if (!s3.has(e3)) continue;
        let i4 = { x: t5 - o3.distance.x, y: n3 - o3.distance.y };
        d3 && (i4 = Xr(i4, c3));
        let r3 = [[l3[0][0], l3[0][1]], [l3[1][0], l3[1][1]]];
        if (a2.size > 1 && l3 && !o3.extent) {
          const { positionAbsolute: t6 } = o3.internals, e4 = t6.x - y3.x + l3[0][0], n4 = t6.x + o3.measured.width - y3.x2 + l3[1][0];
          r3 = [[e4, t6.y - y3.y + l3[0][1]], [n4, t6.y + o3.measured.height - y3.y2 + l3[1][1]]];
        }
        const { position: h4, positionAbsolute: p4 } = Sr({ nodeId: e3, nextPosition: i4, nodeLookup: s3, nodeExtent: r3, nodeOrigin: u3, onError: f3 });
        m3 = m3 || o3.position.x !== h4.x || o3.position.y !== h4.y, o3.position = h4, o3.internals.positionAbsolute = p4;
      }
      if (m3 && (g3(a2, true), i3 && (o2 || h3 || !w2 && p3))) {
        const [t6, e3] = Os({ nodeId: w2, dragItems: a2, nodeLookup: s3 });
        o2 == null ? void 0 : o2(i3, a2, t6, e3), h3 == null ? void 0 : h3(i3, t6, e3), w2 || (p3 == null ? void 0 : p3(i3, e3));
      }
    }
    function x2() {
      return __async(this, null, function* () {
        var _a2, _b;
        if (!d2) return;
        const { transform: t5, panBy: n3, autoPanSpeed: o3 } = e2(), [i3, a3] = zr(c2, d2, o3);
        0 === i3 && 0 === a3 || (r2.x = ((_a2 = r2.x) != null ? _a2 : 0) - i3 / t5[2], r2.y = ((_b = r2.y) != null ? _b : 0) - a3 / t5[2], (yield n3({ x: i3, y: a3 })) && v2(r2, null)), s2 = requestAnimationFrame(x2);
      });
    }
    function b2(o3) {
      var _a2;
      const { nodeLookup: i3, multiSelectionActive: s3, nodesDraggable: l3, transform: c3, snapGrid: d3, snapToGrid: h3, selectNodesOnDrag: p3, onNodeDragStart: f3, onSelectionDragStart: g3, unselectNodesAndEdges: m3 } = e2();
      u2 = true, p3 && y2 || s3 || !w2 || ((_a2 = i3.get(w2)) == null ? void 0 : _a2.selected) || m3(), y2 && p3 && w2 && (t4 == null ? void 0 : t4(w2));
      const $3 = qr(o3.sourceEvent, { transform: c3, snapGrid: d3, snapToGrid: h3 });
      if (r2 = $3, a2 = function(t5, e3, n3, o4) {
        var _a3, _b;
        const i4 = /* @__PURE__ */ new Map();
        for (const [r3, s4] of t5) if ((s4.selected || s4.id === o4) && (!s4.parentId || !Es(s4, t5)) && (s4.draggable || e3 && void 0 === s4.draggable)) {
          const e4 = t5.get(r3);
          e4 && i4.set(r3, { id: r3, position: e4.position || { x: 0, y: 0 }, distance: { x: n3.x - e4.internals.positionAbsolute.x, y: n3.y - e4.internals.positionAbsolute.y }, extent: e4.extent, parentId: e4.parentId, origin: e4.origin, expandParent: e4.expandParent, internals: { positionAbsolute: e4.internals.positionAbsolute || { x: 0, y: 0 } }, measured: { width: (_a3 = e4.measured.width) != null ? _a3 : 0, height: (_b = e4.measured.height) != null ? _b : 0 } });
        }
        return i4;
      }(i3, l3, $3, w2), a2.size > 0 && (n2 || f3 || !w2 && g3)) {
        const [t5, e3] = Os({ nodeId: w2, dragItems: a2, nodeLookup: i3 });
        n2 == null ? void 0 : n2(o3.sourceEvent, a2, t5, e3), f3 == null ? void 0 : f3(o3.sourceEvent, t5, e3), w2 || (g3 == null ? void 0 : g3(o3.sourceEvent, e3));
      }
    }
    h2 = Dn(m2);
    const k2 = function() {
      var t5, e3, n3, o3, i3 = Zn, r3 = Bn, s3 = Kn, a3 = Gn, l3 = {}, c3 = we("start", "drag", "end"), d3 = 0, u3 = 0;
      function h3(t6) {
        t6.on("mousedown.drag", p3).filter(a3).on("touchstart.drag", m3).on("touchmove.drag", y3, Tn).on("touchend.drag touchcancel.drag", w3).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function p3(s4, a4) {
        if (!o3 && i3.call(this, s4, a4)) {
          var l4 = $3(this, r3.call(this, s4, a4), s4, a4, "mouse");
          l4 && (Dn(s4.view).on("mousemove.drag", f3, Hn).on("mouseup.drag", g3, Hn), Wn(s4.view), Vn(s4), n3 = false, t5 = s4.clientX, e3 = s4.clientY, l4("start", s4));
        }
      }
      function f3(o4) {
        if (Fn(o4), !n3) {
          var i4 = o4.clientX - t5, r4 = o4.clientY - e3;
          n3 = i4 * i4 + r4 * r4 > u3;
        }
        l3.mouse("drag", o4);
      }
      function g3(t6) {
        Dn(t6.view).on("mousemove.drag mouseup.drag", null), Xn(t6.view, n3), Fn(t6), l3.mouse("end", t6);
      }
      function m3(t6, e4) {
        if (i3.call(this, t6, e4)) {
          var n4, o4, s4 = t6.changedTouches, a4 = r3.call(this, t6, e4), l4 = s4.length;
          for (n4 = 0; n4 < l4; ++n4) (o4 = $3(this, a4, t6, e4, s4[n4].identifier, s4[n4])) && (Vn(t6), o4("start", t6, s4[n4]));
        }
      }
      function y3(t6) {
        var e4, n4, o4 = t6.changedTouches, i4 = o4.length;
        for (e4 = 0; e4 < i4; ++e4) (n4 = l3[o4[e4].identifier]) && (Fn(t6), n4("drag", t6, o4[e4]));
      }
      function w3(t6) {
        var e4, n4, i4 = t6.changedTouches, r4 = i4.length;
        for (o3 && clearTimeout(o3), o3 = setTimeout(function() {
          o3 = null;
        }, 500), e4 = 0; e4 < r4; ++e4) (n4 = l3[i4[e4].identifier]) && (Vn(t6), n4("end", t6, i4[e4]));
      }
      function $3(t6, e4, n4, o4, i4, r4) {
        var a4, u4, p4, f4 = c3.copy(), g4 = An(r4 || n4, e4);
        if (null != (p4 = s3.call(t6, new Rn("beforestart", { sourceEvent: n4, target: h3, identifier: i4, active: d3, x: g4[0], y: g4[1], dx: 0, dy: 0, dispatch: f4 }), o4))) return a4 = p4.x - g4[0] || 0, u4 = p4.y - g4[1] || 0, function n5(r5, s4, c4) {
          var m4, y4 = g4;
          switch (r5) {
            case "start":
              l3[i4] = n5, m4 = d3++;
              break;
            case "end":
              delete l3[i4], --d3;
            case "drag":
              g4 = An(c4 || s4, e4), m4 = d3;
          }
          f4.call(r5, t6, new Rn(r5, { sourceEvent: s4, subject: p4, target: h3, identifier: i4, active: m4, x: g4[0] + a4, y: g4[1] + u4, dx: g4[0] - y4[0], dy: g4[1] - y4[1], dispatch: f4 }), o4);
        };
      }
      return h3.filter = function(t6) {
        return arguments.length ? (i3 = "function" == typeof t6 ? t6 : Yn(!!t6), h3) : i3;
      }, h3.container = function(t6) {
        return arguments.length ? (r3 = "function" == typeof t6 ? t6 : Yn(t6), h3) : r3;
      }, h3.subject = function(t6) {
        return arguments.length ? (s3 = "function" == typeof t6 ? t6 : Yn(t6), h3) : s3;
      }, h3.touchable = function(t6) {
        return arguments.length ? (a3 = "function" == typeof t6 ? t6 : Yn(!!t6), h3) : a3;
      }, h3.on = function() {
        var t6 = c3.on.apply(c3, arguments);
        return t6 === c3 ? h3 : t6;
      }, h3.clickDistance = function(t6) {
        return arguments.length ? (u3 = (t6 = +t6) * t6, h3) : Math.sqrt(u3);
      }, h3;
    }().clickDistance($2).on("start", (t5) => {
      const { domNode: n3, nodeDragThreshold: o3, transform: i3, snapGrid: s3, snapToGrid: a3 } = e2();
      p2 = false, 0 === o3 && b2(t5);
      const l3 = qr(t5.sourceEvent, { transform: i3, snapGrid: s3, snapToGrid: a3 });
      r2 = l3, d2 = (n3 == null ? void 0 : n3.getBoundingClientRect()) || null, c2 = ts(t5.sourceEvent, d2);
    }).on("drag", (t5) => {
      var _a2, _b;
      const { autoPanOnNodeDrag: n3, transform: o3, snapGrid: i3, snapToGrid: s3, nodeDragThreshold: h3, nodeLookup: f3 } = e2(), g3 = qr(t5.sourceEvent, { transform: o3, snapGrid: i3, snapToGrid: s3 });
      if (("touchmove" === t5.sourceEvent.type && t5.sourceEvent.touches.length > 1 || w2 && !f3.has(w2)) && (p2 = true), !p2) {
        if (!l2 && n3 && u2 && (l2 = true, x2()), !u2) {
          const e3 = g3.xSnapped - ((_a2 = r2.x) != null ? _a2 : 0), n4 = g3.ySnapped - ((_b = r2.y) != null ? _b : 0);
          Math.sqrt(e3 * e3 + n4 * n4) > h3 && b2(t5);
        }
        (r2.x !== g3.xSnapped || r2.y !== g3.ySnapped) && a2 && u2 && (c2 = ts(t5.sourceEvent, d2), v2(g3, t5.sourceEvent));
      }
    }).on("end", (t5) => {
      if (u2 && !p2 && (l2 = false, u2 = false, cancelAnimationFrame(s2), a2.size > 0)) {
        const { nodeLookup: n3, updateNodePositions: o3, onNodeDragStop: r3, onSelectionDragStop: s3 } = e2();
        if (o3(a2, false), i2 || r3 || !w2 && s3) {
          const [e3, o4] = Os({ nodeId: w2, dragItems: a2, nodeLookup: n3, dragging: false });
          i2 == null ? void 0 : i2(t5.sourceEvent, a2, e3, o4), r3 == null ? void 0 : r3(t5.sourceEvent, e3, o4), w2 || (s3 == null ? void 0 : s3(t5.sourceEvent, o4));
        }
      }
    }).filter((t5) => {
      const e3 = t5.target;
      return !t5.button && (!f2 || !Cs(e3, `.${f2}`, m2)) && (!g2 || Cs(e3, g2, m2));
    });
    h2.call(k2);
  }, destroy: function() {
    h2 == null ? void 0 : h2.on(".drag", null);
  } };
}
function Ms(t4, e2, n2, o2) {
  var _a2, _b, _c2, _d2, _e2;
  let i2 = [], r2 = 1 / 0;
  const s2 = function(t5, e3, n3) {
    const o3 = [], i3 = { x: t5.x - n3, y: t5.y - n3, width: 2 * n3, height: 2 * n3 };
    for (const t6 of e3.values()) Hr(i3, Dr(t6)) > 0 && o3.push(t6);
    return o3;
  }(t4, n2, e2 + 250);
  for (const n3 of s2) {
    const s3 = [...(_b = (_a2 = n3.internals.handleBounds) == null ? void 0 : _a2.source) != null ? _b : [], ...(_d2 = (_c2 = n3.internals.handleBounds) == null ? void 0 : _c2.target) != null ? _d2 : []];
    for (const a2 of s3) {
      if (o2.nodeId === a2.nodeId && o2.type === a2.type && o2.id === a2.id) continue;
      const { x: s4, y: l2 } = gs(n3, a2, a2.position, true), c2 = Math.sqrt(Math.pow(s4 - t4.x, 2) + Math.pow(l2 - t4.y, 2));
      c2 > e2 || (c2 < r2 ? (i2 = [__spreadProps(__spreadValues({}, a2), { x: s4, y: l2 })], r2 = c2) : c2 === r2 && i2.push(__spreadProps(__spreadValues({}, a2), { x: s4, y: l2 })));
    }
  }
  if (!i2.length) return null;
  if (i2.length > 1) {
    const t5 = "source" === o2.type ? "target" : "source";
    return (_e2 = i2.find((e3) => e3.type === t5)) != null ? _e2 : i2[0];
  }
  return i2[0];
}
function zs(t4, e2, n2, o2, i2, r2 = false) {
  var _a2, _b, _c2, _d2, _e2, _f;
  const s2 = o2.get(t4);
  if (!s2) return null;
  const a2 = "strict" === i2 ? (_a2 = s2.internals.handleBounds) == null ? void 0 : _a2[e2] : [...(_c2 = (_b = s2.internals.handleBounds) == null ? void 0 : _b.source) != null ? _c2 : [], ...(_e2 = (_d2 = s2.internals.handleBounds) == null ? void 0 : _d2.target) != null ? _e2 : []], l2 = (_f = n2 ? a2 == null ? void 0 : a2.find((t5) => t5.id === n2) : a2 == null ? void 0 : a2[0]) != null ? _f : null;
  return l2 && r2 ? __spreadValues(__spreadValues({}, l2), gs(s2, l2, l2.position, true)) : l2;
}
function Ns(t4, e2) {
  return t4 || ((e2 == null ? void 0 : e2.classList.contains("target")) ? "target" : (e2 == null ? void 0 : e2.classList.contains("source")) ? "source" : null);
}
var Ls = () => true;
function Is(t4, { handle: e2, connectionMode: n2, fromNodeId: o2, fromHandleId: i2, fromType: r2, doc: s2, lib: a2, flowId: l2, isValidConnection: c2 = Ls, nodeLookup: d2 }) {
  const u2 = "target" === r2, h2 = e2 ? s2.querySelector(`.${a2}-flow__handle[data-id="${l2}-${e2 == null ? void 0 : e2.nodeId}-${e2 == null ? void 0 : e2.id}-${e2 == null ? void 0 : e2.type}"]`) : null, { x: p2, y: f2 } = ts(t4), g2 = s2.elementFromPoint(p2, f2), m2 = (g2 == null ? void 0 : g2.classList.contains(`${a2}-flow__handle`)) ? g2 : h2, y2 = { handleDomNode: m2, isValid: false, connection: null, toHandle: null };
  if (m2) {
    const t5 = Ns(void 0, m2), e3 = m2.getAttribute("data-nodeid"), r3 = m2.getAttribute("data-handleid"), s3 = m2.classList.contains("connectable"), a3 = m2.classList.contains("connectableend");
    if (!e3 || !t5) return y2;
    const l3 = { source: u2 ? e3 : o2, sourceHandle: u2 ? r3 : i2, target: u2 ? o2 : e3, targetHandle: u2 ? i2 : r3 };
    y2.connection = l3;
    const h3 = s3 && a3 && (n2 === ar.Strict ? u2 && "source" === t5 || !u2 && "target" === t5 : e3 !== o2 || r3 !== i2);
    y2.isValid = h3 && c2(l3), y2.toHandle = zs(e3, t5, r3, d2, n2, false);
  }
  return y2;
}
var Ds = { onPointerDown: function(t4, { connectionMode: e2, connectionRadius: n2, handleId: o2, nodeId: i2, edgeUpdaterType: r2, isTarget: s2, domNode: a2, nodeLookup: l2, lib: c2, autoPanOnConnect: d2, flowId: u2, panBy: h2, cancelConnection: p2, onConnectStart: f2, onConnect: g2, onConnectEnd: m2, isValidConnection: y2 = Ls, onReconnectEnd: w2, updateConnection: $2, getTransform: v2, getFromHandle: x2, autoPanSpeed: b2 }) {
  const k2 = ((t5) => {
    var _a2;
    return ((_a2 = t5.getRootNode) == null ? void 0 : _a2.call(t5)) || (window == null ? void 0 : window.document);
  })(t4.target);
  let _2, S2 = 0;
  const { x: E2, y: C2 } = ts(t4), O2 = k2 == null ? void 0 : k2.elementFromPoint(E2, C2), P2 = Ns(r2, O2), M2 = a2 == null ? void 0 : a2.getBoundingClientRect();
  if (!M2 || !P2) return;
  const z2 = zs(i2, P2, o2, l2, e2);
  if (!z2) return;
  let N2 = ts(t4, M2), L2 = false, I2 = null, D2 = false, A2 = null;
  function T2() {
    if (!d2 || !M2) return;
    const [t5, e3] = zr(N2, M2, b2);
    h2({ x: t5, y: e3 }), S2 = requestAnimationFrame(T2);
  }
  const H2 = __spreadProps(__spreadValues({}, z2), { nodeId: i2, type: P2, position: z2.position }), V2 = l2.get(i2), F2 = { inProgress: true, isValid: null, from: gs(V2, H2, pr.Left, true), fromHandle: H2, fromPosition: H2.position, fromNode: V2, to: N2, toHandle: null, toPosition: fr[H2.position], toNode: null };
  $2(F2);
  let W2 = F2;
  function X2(t5) {
    if (!x2() || !H2) return void Y2(t5);
    const r3 = v2();
    N2 = ts(t5, M2), _2 = Ms(Yr(N2, r3, false, [1, 1]), n2, l2, H2), L2 || (T2(), L2 = true);
    const a3 = Is(t5, { handle: _2, connectionMode: e2, fromNodeId: i2, fromHandleId: o2, fromType: s2 ? "target" : "source", isValidConnection: y2, doc: k2, lib: c2, flowId: u2, nodeLookup: l2 });
    A2 = a3.handleDomNode, I2 = a3.connection, D2 = function(t6, e3) {
      let n3 = null;
      return e3 ? n3 = true : t6 && !e3 && (n3 = false), n3;
    }(!!_2, a3.isValid);
    const d3 = __spreadProps(__spreadValues({}, W2), { isValid: D2, to: _2 && D2 ? Rr({ x: _2.x, y: _2.y }, r3) : N2, toHandle: a3.toHandle, toPosition: D2 && a3.toHandle ? a3.toHandle.position : fr[H2.position], toNode: a3.toHandle ? l2.get(a3.toHandle.nodeId) : null });
    D2 && _2 && W2.toHandle && d3.toHandle && W2.toHandle.type === d3.toHandle.type && W2.toHandle.nodeId === d3.toHandle.nodeId && W2.toHandle.id === d3.toHandle.id && W2.to.x === d3.to.x && W2.to.y === d3.to.y || ($2(d3), W2 = d3);
  }
  function Y2(t5) {
    (_2 || A2) && I2 && D2 && (g2 == null ? void 0 : g2(I2));
    const _a2 = W2, { inProgress: e3 } = _a2, n3 = __objRest(_a2, ["inProgress"]), o3 = __spreadProps(__spreadValues({}, n3), { toPosition: W2.toHandle ? W2.toPosition : null });
    m2 == null ? void 0 : m2(t5, o3), r2 && (w2 == null ? void 0 : w2(t5, o3)), p2(), cancelAnimationFrame(S2), L2 = false, D2 = false, I2 = null, A2 = null, k2.removeEventListener("mousemove", X2), k2.removeEventListener("mouseup", Y2), k2.removeEventListener("touchmove", X2), k2.removeEventListener("touchend", Y2);
  }
  f2 == null ? void 0 : f2(t4, { nodeId: i2, handleId: o2, handleType: P2 }), k2.addEventListener("mousemove", X2), k2.addEventListener("mouseup", Y2), k2.addEventListener("touchmove", X2), k2.addEventListener("touchend", Y2);
}, isValid: Is };
var As = (t4) => ({ x: t4.x, y: t4.y, zoom: t4.k });
var Ts = ({ x: t4, y: e2, zoom: n2 }) => Zi.translate(t4, e2).scale(n2);
var Hs = (t4, e2) => t4.target.closest(`.${e2}`);
var Vs = (t4, e2) => 2 === e2 && Array.isArray(t4) && t4.includes(2);
var Fs = (t4, e2 = 0, n2 = () => {
}) => {
  const o2 = "number" == typeof e2 && e2 > 0;
  return o2 || n2(), o2 ? t4.transition().duration(e2).on("end", n2) : t4;
};
var Ws = (t4) => {
  const e2 = t4.ctrlKey && Br() ? 10 : 1;
  return -t4.deltaY * (1 === t4.deltaMode ? 0.05 : t4.deltaMode ? 1 : 2e-3) * e2;
};
function Xs({ domNode: t4, minZoom: e2, maxZoom: n2, paneClickDistance: o2, translateExtent: i2, viewport: r2, onPanZoom: s2, onPanZoomStart: a2, onPanZoomEnd: l2, onDraggingChange: c2 }) {
  const d2 = { isZoomingOrPanning: false, usedRightMouseButton: false, prevViewport: { x: 0, y: 0, zoom: 0 }, mouseButton: 0, timerId: void 0, panScrollTimeout: void 0, isPanScrolling: false }, u2 = t4.getBoundingClientRect(), h2 = er().clickDistance(!Fr(o2) || o2 < 0 ? 0 : o2).scaleExtent([e2, n2]).translateExtent(i2), p2 = Dn(t4).call(h2);
  w2({ x: r2.x, y: r2.y, zoom: Cr(r2.zoom, e2, n2) }, [[0, 0], [u2.width, u2.height]], i2);
  const f2 = p2.on("wheel.zoom"), g2 = p2.on("dblclick.zoom");
  function m2(t5, e3) {
    return p2 ? new Promise((n3) => {
      h2 == null ? void 0 : h2.transform(Fs(p2, e3 == null ? void 0 : e3.duration, () => n3(true)), t5);
    }) : Promise.resolve(false);
  }
  function y2() {
    h2.on("zoom", null);
  }
  function w2(t5, e3, n3) {
    return __async(this, null, function* () {
      const o3 = Ts(t5), i3 = h2 == null ? void 0 : h2.constrain()(o3, e3, n3);
      return i3 && (yield m2(i3)), new Promise((t6) => t6(i3));
    });
  }
  return h2.wheelDelta(Ws), { update: function({ noWheelClassName: t5, noPanClassName: e3, onPaneContextMenu: n3, userSelectionActive: o3, panOnScroll: i3, panOnDrag: r3, panOnScrollMode: u3, panOnScrollSpeed: m3, preventScrolling: w3, zoomOnPinch: $2, zoomOnScroll: v2, zoomOnDoubleClick: x2, zoomActivationKeyPressed: b2, lib: k2, onTransformChange: _2 }) {
    o3 && !d2.isZoomingOrPanning && y2();
    const S2 = i3 && !b2 && !o3 ? function({ zoomPanValues: t6, noWheelClassName: e4, d3Selection: n4, d3Zoom: o4, panOnScrollMode: i4, panOnScrollSpeed: r4, zoomOnPinch: s3, onPanZoomStart: a3, onPanZoom: l3, onPanZoomEnd: c3 }) {
      return (d3) => {
        if (Hs(d3, e4)) return false;
        d3.preventDefault(), d3.stopImmediatePropagation();
        const u4 = n4.property("__zoom").k || 1;
        if (d3.ctrlKey && s3) {
          const t7 = An(d3), e5 = Ws(d3), i5 = u4 * Math.pow(2, e5);
          return void o4.scaleTo(n4, i5, t7, d3);
        }
        const h3 = 1 === d3.deltaMode ? 20 : 1;
        let p3 = i4 === lr.Vertical ? 0 : d3.deltaX * h3, f3 = i4 === lr.Horizontal ? 0 : d3.deltaY * h3;
        !Br() && d3.shiftKey && i4 !== lr.Vertical && (p3 = d3.deltaY * h3, f3 = 0), o4.translateBy(n4, -p3 / u4 * r4, -f3 / u4 * r4, { internal: true });
        const g3 = As(n4.property("__zoom"));
        clearTimeout(t6.panScrollTimeout), t6.isPanScrolling || (t6.isPanScrolling = true, a3 == null ? void 0 : a3(d3, g3)), t6.isPanScrolling && (l3 == null ? void 0 : l3(d3, g3), t6.panScrollTimeout = setTimeout(() => {
          c3 == null ? void 0 : c3(d3, g3), t6.isPanScrolling = false;
        }, 150));
      };
    }({ zoomPanValues: d2, noWheelClassName: t5, d3Selection: p2, d3Zoom: h2, panOnScrollMode: u3, panOnScrollSpeed: m3, zoomOnPinch: $2, onPanZoomStart: a2, onPanZoom: s2, onPanZoomEnd: l2 }) : function({ noWheelClassName: t6, preventScrolling: e4, d3ZoomHandler: n4 }) {
      return function(o4, i4) {
        if (!e4 && "wheel" === o4.type && !o4.ctrlKey || Hs(o4, t6)) return null;
        o4.preventDefault(), n4.call(this, o4, i4);
      };
    }({ noWheelClassName: t5, preventScrolling: w3, d3ZoomHandler: f2 });
    if (p2.on("wheel.zoom", S2, { passive: false }), !o3) {
      const t6 = function({ zoomPanValues: t7, onDraggingChange: e5, onPanZoomStart: n4 }) {
        return (o5) => {
          var _a2, _b, _c2;
          if ((_a2 = o5.sourceEvent) == null ? void 0 : _a2.internal) return;
          const i4 = As(o5.transform);
          t7.mouseButton = ((_b = o5.sourceEvent) == null ? void 0 : _b.button) || 0, t7.isZoomingOrPanning = true, t7.prevViewport = i4, "mousedown" === ((_c2 = o5.sourceEvent) == null ? void 0 : _c2.type) && e5(true), n4 && (n4 == null ? void 0 : n4(o5.sourceEvent, i4));
        };
      }({ zoomPanValues: d2, onDraggingChange: c2, onPanZoomStart: a2 });
      h2.on("start", t6);
      const e4 = function({ zoomPanValues: t7, panOnDrag: e5, onPaneContextMenu: n4, onTransformChange: o5, onPanZoom: i4 }) {
        return (r4) => {
          var _a2, _b, _c2;
          t7.usedRightMouseButton = !(!n4 || !Vs(e5, (_a2 = t7.mouseButton) != null ? _a2 : 0)), ((_b = r4.sourceEvent) == null ? void 0 : _b.sync) || o5([r4.transform.x, r4.transform.y, r4.transform.k]), i4 && !((_c2 = r4.sourceEvent) == null ? void 0 : _c2.internal) && (i4 == null ? void 0 : i4(r4.sourceEvent, As(r4.transform)));
        };
      }({ zoomPanValues: d2, panOnDrag: r3, onPaneContextMenu: !!n3, onPanZoom: s2, onTransformChange: _2 });
      h2.on("zoom", e4);
      const o4 = function({ zoomPanValues: t7, panOnDrag: e5, panOnScroll: n4, onDraggingChange: o5, onPanZoomEnd: i4, onPaneContextMenu: r4 }) {
        return (s3) => {
          var _a2, _b;
          var a3, l3;
          if (!((_a2 = s3.sourceEvent) == null ? void 0 : _a2.internal) && (t7.isZoomingOrPanning = false, r4 && Vs(e5, (_b = t7.mouseButton) != null ? _b : 0) && !t7.usedRightMouseButton && s3.sourceEvent && r4(s3.sourceEvent), t7.usedRightMouseButton = false, o5(false), i4 && (a3 = t7.prevViewport, l3 = s3.transform, a3.x !== l3.x || a3.y !== l3.y || a3.zoom !== l3.k))) {
            const e6 = As(s3.transform);
            t7.prevViewport = e6, clearTimeout(t7.timerId), t7.timerId = setTimeout(() => {
              i4 == null ? void 0 : i4(s3.sourceEvent, e6);
            }, n4 ? 150 : 0);
          }
        };
      }({ zoomPanValues: d2, panOnDrag: r3, panOnScroll: i3, onPaneContextMenu: n3, onPanZoomEnd: l2, onDraggingChange: c2 });
      h2.on("end", o4);
    }
    const E2 = function({ zoomActivationKeyPressed: t6, zoomOnScroll: e4, zoomOnPinch: n4, panOnDrag: o4, panOnScroll: i4, zoomOnDoubleClick: r4, userSelectionActive: s3, noWheelClassName: a3, noPanClassName: l3, lib: c3 }) {
      return (d3) => {
        var _a2;
        const u4 = t6 || e4, h3 = n4 && d3.ctrlKey;
        if (1 === d3.button && "mousedown" === d3.type && (Hs(d3, `${c3}-flow__node`) || Hs(d3, `${c3}-flow__edge`))) return true;
        if (!(o4 || u4 || i4 || r4 || n4)) return false;
        if (s3) return false;
        if (Hs(d3, a3) && "wheel" === d3.type) return false;
        if (Hs(d3, l3) && ("wheel" !== d3.type || i4 && "wheel" === d3.type && !t6)) return false;
        if (!n4 && d3.ctrlKey && "wheel" === d3.type) return false;
        if (!n4 && "touchstart" === d3.type && ((_a2 = d3.touches) == null ? void 0 : _a2.length) > 1) return d3.preventDefault(), false;
        if (!u4 && !i4 && !h3 && "wheel" === d3.type) return false;
        if (!o4 && ("mousedown" === d3.type || "touchstart" === d3.type)) return false;
        if (Array.isArray(o4) && !o4.includes(d3.button) && "mousedown" === d3.type) return false;
        const p3 = Array.isArray(o4) && o4.includes(d3.button) || !d3.button || d3.button <= 1;
        return (!d3.ctrlKey || "wheel" === d3.type) && p3;
      };
    }({ zoomActivationKeyPressed: b2, panOnDrag: r3, zoomOnScroll: v2, panOnScroll: i3, zoomOnDoubleClick: x2, zoomOnPinch: $2, userSelectionActive: o3, noPanClassName: e3, noWheelClassName: t5, lib: k2 });
    h2.filter(E2), x2 ? p2.on("dblclick.zoom", g2) : p2.on("dblclick.zoom", null);
  }, destroy: y2, setViewport: function(t5, e3) {
    return __async(this, null, function* () {
      const n3 = Ts(t5);
      return yield m2(n3, e3), new Promise((t6) => t6(n3));
    });
  }, setViewportConstrained: w2, getViewport: function() {
    const t5 = p2 ? Bi(p2.node()) : { x: 0, y: 0, k: 1 };
    return { x: t5.x, y: t5.y, zoom: t5.k };
  }, scaleTo: function(t5, e3) {
    return p2 ? new Promise((n3) => {
      h2 == null ? void 0 : h2.scaleTo(Fs(p2, e3 == null ? void 0 : e3.duration, () => n3(true)), t5);
    }) : Promise.resolve(false);
  }, scaleBy: function(t5, e3) {
    return p2 ? new Promise((n3) => {
      h2 == null ? void 0 : h2.scaleBy(Fs(p2, e3 == null ? void 0 : e3.duration, () => n3(true)), t5);
    }) : Promise.resolve(false);
  }, setScaleExtent: function(t5) {
    h2 == null ? void 0 : h2.scaleExtent(t5);
  }, setTranslateExtent: function(t5) {
    h2 == null ? void 0 : h2.translateExtent(t5);
  }, syncViewport: function(t5) {
    if (p2) {
      const e3 = Ts(t5), n3 = p2.property("__zoom");
      n3.k === t5.zoom && n3.x === t5.x && n3.y === t5.y || (h2 == null ? void 0 : h2.transform(p2, e3, null, { sync: true }));
    }
  }, setClickDistance: function(t5) {
    const e3 = !Fr(t5) || t5 < 0 ? 0 : t5;
    h2 == null ? void 0 : h2.clickDistance(e3);
  } };
}
var Ys;
function Rs(t4) {
  let e2, n2, o2, r2, s2, a2;
  const l2 = t4[45].default, c2 = u(l2, t4, t4[44], null);
  return { c() {
    e2 = E("div"), c2 && c2.c(), N(e2, "data-handleid", t4[6]), N(e2, "data-nodeid", t4[14]), N(e2, "data-handlepos", t4[2]), N(e2, "data-id", n2 = t4[13] + "-" + t4[14] + "-" + (t4[0] || null) + "-" + t4[1]), N(e2, "class", o2 = me(["svelte-flow__handle", `svelte-flow__handle-${t4[2]}`, "nodrag", "nopan", t4[2], t4[4]])), N(e2, "style", t4[3]), N(e2, "role", "button"), N(e2, "tabindex", "-1"), W(e2, "valid", t4[7]), W(e2, "connectingto", t4[5]), W(e2, "connectingfrom", t4[9]), W(e2, "source", !t4[11]), W(e2, "target", t4[11]), W(e2, "connectablestart", t4[12]), W(e2, "connectableend", t4[12]), W(e2, "connectable", t4[12]), W(e2, "connectionindicator", t4[12] && (!t4[10] || t4[8]));
  }, m(n3, o3) {
    k(n3, e2, o3), c2 && c2.m(e2, null), r2 = true, s2 || (a2 = [z(e2, "mousedown", t4[32]), z(e2, "touchstart", t4[32])], s2 = true);
  }, p(t5, i2) {
    c2 && c2.p && (!r2 || 8192 & i2[1]) && f(c2, l2, t5, t5[44], r2 ? p(l2, t5[44], i2, null) : g(t5[44]), null), (!r2 || 64 & i2[0]) && N(e2, "data-handleid", t5[6]), (!r2 || 4 & i2[0]) && N(e2, "data-handlepos", t5[2]), (!r2 || 8195 & i2[0] && n2 !== (n2 = t5[13] + "-" + t5[14] + "-" + (t5[0] || null) + "-" + t5[1])) && N(e2, "data-id", n2), (!r2 || 20 & i2[0] && o2 !== (o2 = me(["svelte-flow__handle", `svelte-flow__handle-${t5[2]}`, "nodrag", "nopan", t5[2], t5[4]]))) && N(e2, "class", o2), (!r2 || 8 & i2[0]) && N(e2, "style", t5[3]), (!r2 || 148 & i2[0]) && W(e2, "valid", t5[7]), (!r2 || 52 & i2[0]) && W(e2, "connectingto", t5[5]), (!r2 || 532 & i2[0]) && W(e2, "connectingfrom", t5[9]), (!r2 || 2068 & i2[0]) && W(e2, "source", !t5[11]), (!r2 || 2068 & i2[0]) && W(e2, "target", t5[11]), (!r2 || 4116 & i2[0]) && W(e2, "connectablestart", t5[12]), (!r2 || 4116 & i2[0]) && W(e2, "connectableend", t5[12]), (!r2 || 4116 & i2[0]) && W(e2, "connectable", t5[12]), (!r2 || 5396 & i2[0]) && W(e2, "connectionindicator", t5[12] && (!t5[10] || t5[8]));
  }, i(t5) {
    r2 || (ft(c2, t5), r2 = true);
  }, o(t5) {
    gt(c2, t5), r2 = false;
  }, d(t5) {
    t5 && _(e2), c2 && c2.d(t5), s2 = false, i(a2);
  } };
}
function Zs(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, c2, u2, h2, p2, f2, g2, m2, y2, w2, $2, v2, x2, b2, k2, _2, S2, E2, C2, O2, { $$slots: P2 = {}, $$scope: M2 } = e2, { id: z2 } = e2, { type: N2 = "source" } = e2, { position: L2 = pr.Top } = e2, { style: I2 } = e2, { isValidConnection: D2 } = e2, { onconnect: A2 } = e2, { ondisconnect: T2 } = e2, { isConnectable: H2 } = e2, { class: V2 } = e2;
  const F2 = j("svelteflow__node_id"), W2 = j("svelteflow__node_connectable");
  d(t4, W2, (t5) => n2(43, O2 = t5));
  const X2 = Va(), { connectionMode: Y2, domNode: R2, nodeLookup: Z2, connectionRadius: B2, viewport: K2, isValidConnection: G2, lib: q2, addEdge: Q2, onedgecreate: U2, panBy: J2, cancelConnection: tt2, updateConnection: et2, autoPanOnConnect: nt2, edges: ot2, connectionLookup: it2, onconnect: rt2, onconnectstart: st2, onconnectend: at2, flowId: lt2, connection: ct2 } = X2;
  d(t4, Y2, (t5) => n2(40, p2 = t5)), d(t4, R2, (t5) => n2(55, E2 = t5)), d(t4, Z2, (t5) => n2(54, S2 = t5)), d(t4, B2, (t5) => n2(56, C2 = t5)), d(t4, K2, (t5) => n2(46, m2 = t5)), d(t4, G2, (t5) => n2(51, x2 = t5)), d(t4, q2, (t5) => n2(53, _2 = t5)), d(t4, U2, (t5) => n2(50, v2 = t5)), d(t4, nt2, (t5) => n2(52, k2 = t5)), d(t4, ot2, (t5) => n2(42, g2 = t5)), d(t4, it2, (t5) => n2(41, f2 = t5)), d(t4, rt2, (t5) => n2(49, $2 = t5)), d(t4, st2, (t5) => n2(48, w2 = t5)), d(t4, at2, (t5) => n2(47, y2 = t5)), d(t4, lt2, (t5) => n2(13, b2 = t5)), d(t4, ct2, (t5) => n2(39, h2 = t5));
  let dt2, ut2 = null;
  return t4.$$set = (t5) => {
    "id" in t5 && n2(0, z2 = t5.id), "type" in t5 && n2(1, N2 = t5.type), "position" in t5 && n2(2, L2 = t5.position), "style" in t5 && n2(3, I2 = t5.style), "isValidConnection" in t5 && n2(33, D2 = t5.isValidConnection), "onconnect" in t5 && n2(34, A2 = t5.onconnect), "ondisconnect" in t5 && n2(35, T2 = t5.ondisconnect), "isConnectable" in t5 && n2(36, H2 = t5.isConnectable), "class" in t5 && n2(4, V2 = t5.class), "$$scope" in t5 && n2(44, M2 = t5.$$scope);
  }, t4.$$.update = () => {
    var _a2, _b, _c2, _d2, _e2, _f, _g, _h2, _i2;
    if (2 & t4.$$.dirty[0] && n2(11, o2 = "target" === N2), 4128 & t4.$$.dirty[1] && n2(12, i2 = void 0 !== H2 ? H2 : O2), 1 & t4.$$.dirty[0] && n2(6, r2 = z2 || null), 3 & t4.$$.dirty[0] | 3096 & t4.$$.dirty[1] && (A2 || T2) && n2(38, dt2 = f2.get(`${F2}-${N2}-${z2 || null}`)), 216 & t4.$$.dirty[1]) {
      if (ut2 && !function(t5, e3) {
        if (!t5 && !e3) return true;
        if (!t5 || !e3 || t5.size !== e3.size) return false;
        if (!t5.size && !e3.size) return true;
        for (const n3 of t5.keys()) if (!e3.has(n3)) return false;
        return true;
      }(dt2, ut2)) {
        const t5 = dt2 != null ? dt2 : /* @__PURE__ */ new Map();
        gr(ut2, t5, T2), gr(t5, ut2, A2);
      }
      n2(37, ut2 = dt2 != null ? dt2 : /* @__PURE__ */ new Map());
    }
    256 & t4.$$.dirty[1] && n2(10, s2 = !!h2.fromHandle), 66 & t4.$$.dirty[0] | 256 & t4.$$.dirty[1] && n2(9, a2 = ((_a2 = h2.fromHandle) == null ? void 0 : _a2.nodeId) === F2 && ((_b = h2.fromHandle) == null ? void 0 : _b.type) === N2 && ((_c2 = h2.fromHandle) == null ? void 0 : _c2.id) === r2), 66 & t4.$$.dirty[0] | 256 & t4.$$.dirty[1] && n2(5, l2 = ((_d2 = h2.toHandle) == null ? void 0 : _d2.nodeId) === F2 && ((_e2 = h2.toHandle) == null ? void 0 : _e2.type) === N2 && ((_f = h2.toHandle) == null ? void 0 : _f.id) === r2), 66 & t4.$$.dirty[0] | 768 & t4.$$.dirty[1] && n2(8, c2 = p2 === ar.Strict ? ((_g = h2.fromHandle) == null ? void 0 : _g.type) !== N2 : F2 !== ((_h2 = h2.fromHandle) == null ? void 0 : _h2.nodeId) || r2 !== ((_i2 = h2.fromHandle) == null ? void 0 : _i2.id)), 32 & t4.$$.dirty[0] | 256 & t4.$$.dirty[1] && n2(7, u2 = l2 && h2.isValid);
  }, [z2, N2, L2, I2, V2, l2, r2, u2, c2, a2, s2, o2, i2, b2, F2, W2, Y2, R2, Z2, B2, K2, G2, q2, U2, nt2, ot2, it2, rt2, st2, at2, lt2, ct2, function(t5) {
    const e3 = Jr(t5);
    (e3 && 0 === t5.button || !e3) && Ds.onPointerDown(t5, { handleId: r2, nodeId: F2, isTarget: o2, connectionRadius: C2, domNode: E2, nodeLookup: S2, connectionMode: p2, lib: _2, autoPanOnConnect: k2, flowId: b2, isValidConnection: D2 != null ? D2 : x2, updateConnection: et2, cancelConnection: tt2, panBy: J2, onConnect: (t6) => {
      const e4 = v2 ? v2(t6) : t6;
      e4 && (Q2(e4), $2 == null ? void 0 : $2(t6));
    }, onConnectStart: (t6, e4) => {
      w2 == null ? void 0 : w2(t6, { nodeId: e4.nodeId, handleId: e4.handleId, handleType: e4.handleType });
    }, onConnectEnd: (t6, e4) => {
      y2 == null ? void 0 : y2(t6, e4);
    }, getTransform: () => [m2.x, m2.y, m2.zoom], getFromHandle: () => h2.fromHandle });
  }, D2, A2, T2, H2, ut2, dt2, h2, p2, f2, g2, O2, M2, P2];
}
!function(t4) {
  t4.Line = "line", t4.Handle = "handle";
}(Ys || (Ys = {}));
var Bs = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Zs, Rs, s, { id: 0, type: 1, position: 2, style: 3, isValidConnection: 33, onconnect: 34, ondisconnect: 35, isConnectable: 36, class: 4 }, null, [-1, -1]);
  }
};
function Ks(t4) {
  var _a2, _b, _c2;
  let e2, n2, o2, i2, r2, s2, a2 = ((_a2 = t4[0]) == null ? void 0 : _a2.label) + "";
  return e2 = new Bs({ props: { type: "target", position: (_b = t4[1]) != null ? _b : pr.Top } }), r2 = new Bs({ props: { type: "source", position: (_c2 = t4[2]) != null ? _c2 : pr.Bottom } }), { c() {
    bt(e2.$$.fragment), n2 = P(), o2 = O(a2), i2 = P(), bt(r2.$$.fragment);
  }, m(t5, a3) {
    kt(e2, t5, a3), k(t5, n2, a3), k(t5, o2, a3), k(t5, i2, a3), kt(r2, t5, a3), s2 = true;
  }, p(t5, [n3]) {
    var _a3, _b2, _c3;
    const i3 = {};
    2 & n3 && (i3.position = (_a3 = t5[1]) != null ? _a3 : pr.Top), e2.$set(i3), (!s2 || 1 & n3) && a2 !== (a2 = ((_b2 = t5[0]) == null ? void 0 : _b2.label) + "") && D(o2, a2);
    const l2 = {};
    4 & n3 && (l2.position = (_c3 = t5[2]) != null ? _c3 : pr.Bottom), r2.$set(l2);
  }, i(t5) {
    s2 || (ft(e2.$$.fragment, t5), ft(r2.$$.fragment, t5), s2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), gt(r2.$$.fragment, t5), s2 = false;
  }, d(t5) {
    t5 && (_(n2), _(o2), _(i2)), _t(e2, t5), _t(r2, t5);
  } };
}
function Gs(t4, n2, o2) {
  const i2 = ["data", "targetPosition", "sourcePosition"];
  y(n2, i2);
  let { data: r2 = { label: "Node" } } = n2, { targetPosition: s2 } = n2, { sourcePosition: a2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(3, y(n2, i2)), "data" in t5 && o2(0, r2 = t5.data), "targetPosition" in t5 && o2(1, s2 = t5.targetPosition), "sourcePosition" in t5 && o2(2, a2 = t5.sourcePosition);
  }, [r2, s2, a2];
}
var js = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Gs, Ks, s, { data: 0, targetPosition: 1, sourcePosition: 2 });
  }
};
function qs(t4) {
  var _a2, _b;
  let e2, n2, o2, i2, r2 = ((_a2 = t4[0]) == null ? void 0 : _a2.label) + "";
  return o2 = new Bs({ props: { type: "source", position: (_b = t4[1]) != null ? _b : pr.Bottom } }), { c() {
    e2 = O(r2), n2 = P(), bt(o2.$$.fragment);
  }, m(t5, r3) {
    k(t5, e2, r3), k(t5, n2, r3), kt(o2, t5, r3), i2 = true;
  }, p(t5, [n3]) {
    var _a3, _b2;
    (!i2 || 1 & n3) && r2 !== (r2 = ((_a3 = t5[0]) == null ? void 0 : _a3.label) + "") && D(e2, r2);
    const s2 = {};
    2 & n3 && (s2.position = (_b2 = t5[1]) != null ? _b2 : pr.Bottom), o2.$set(s2);
  }, i(t5) {
    i2 || (ft(o2.$$.fragment, t5), i2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), i2 = false;
  }, d(t5) {
    t5 && (_(e2), _(n2)), _t(o2, t5);
  } };
}
function Qs(t4, n2, o2) {
  const i2 = ["data", "sourcePosition"];
  y(n2, i2);
  let { data: r2 = { label: "Node" } } = n2, { sourcePosition: s2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(2, y(n2, i2)), "data" in t5 && o2(0, r2 = t5.data), "sourcePosition" in t5 && o2(1, s2 = t5.sourcePosition);
  }, [r2, s2];
}
var Us = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Qs, qs, s, { data: 0, sourcePosition: 1 });
  }
};
function Js(t4) {
  var _a2, _b;
  let e2, n2, o2, i2, r2 = ((_a2 = t4[0]) == null ? void 0 : _a2.label) + "";
  return o2 = new Bs({ props: { type: "target", position: (_b = t4[1]) != null ? _b : pr.Top } }), { c() {
    e2 = O(r2), n2 = P(), bt(o2.$$.fragment);
  }, m(t5, r3) {
    k(t5, e2, r3), k(t5, n2, r3), kt(o2, t5, r3), i2 = true;
  }, p(t5, [n3]) {
    var _a3, _b2;
    (!i2 || 1 & n3) && r2 !== (r2 = ((_a3 = t5[0]) == null ? void 0 : _a3.label) + "") && D(e2, r2);
    const s2 = {};
    2 & n3 && (s2.position = (_b2 = t5[1]) != null ? _b2 : pr.Top), o2.$set(s2);
  }, i(t5) {
    i2 || (ft(o2.$$.fragment, t5), i2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), i2 = false;
  }, d(t5) {
    t5 && (_(e2), _(n2)), _t(o2, t5);
  } };
}
function ta(t4, n2, o2) {
  const i2 = ["data", "targetPosition"];
  y(n2, i2);
  let { data: r2 = { label: "Node" } } = n2, { targetPosition: s2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(2, y(n2, i2)), "data" in t5 && o2(0, r2 = t5.data), "targetPosition" in t5 && o2(1, s2 = t5.targetPosition);
  }, [r2, s2];
}
var ea = class extends Et {
  constructor(t4) {
    super(), St(this, t4, ta, Js, s, { data: 0, targetPosition: 1 });
  }
};
function na(t4, n2, o2) {
  const i2 = [];
  return y(n2, i2), t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(0, y(n2, i2));
  }, [];
}
var oa = class extends Et {
  constructor(t4) {
    super(), St(this, t4, na, null, s, {});
  }
};
function ia(t4, e2, n2) {
  if (!e2) return;
  const o2 = n2 ? e2.querySelector(n2) : e2;
  o2 && o2.appendChild(t4);
}
function ra(t4, { target: e2, domNode: n2 }) {
  return ia(t4, n2, e2), { update(_0) {
    return __async(this, arguments, function* ({ target: e3, domNode: n3 }) {
      ia(t4, n3, e3);
    });
  }, destroy() {
    t4.parentNode && t4.parentNode.removeChild(t4);
  } };
}
function sa(t4) {
  let e2, n2, o2, i2, s2;
  const a2 = t4[3].default, l2 = u(a2, t4, t4[2], null);
  return { c() {
    e2 = E("div"), l2 && l2.c();
  }, m(r2, a3) {
    k(r2, e2, a3), l2 && l2.m(e2, null), o2 = true, i2 || (s2 = v(n2 = ra.call(null, e2, { target: ".svelte-flow__edgelabel-renderer", domNode: t4[0] })), i2 = true);
  }, p(t5, [e3]) {
    l2 && l2.p && (!o2 || 4 & e3) && f(l2, a2, t5, t5[2], o2 ? p(a2, t5[2], e3, null) : g(t5[2]), null), n2 && r(n2.update) && 1 & e3 && n2.update.call(null, { target: ".svelte-flow__edgelabel-renderer", domNode: t5[0] });
  }, i(t5) {
    o2 || (ft(l2, t5), o2 = true);
  }, o(t5) {
    gt(l2, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), l2 && l2.d(t5), i2 = false, s2();
  } };
}
function aa(t4, e2, n2) {
  let o2, { $$slots: i2 = {}, $$scope: r2 } = e2;
  const { domNode: s2 } = Va();
  return d(t4, s2, (t5) => n2(0, o2 = t5)), t4.$$set = (t5) => {
    "$$scope" in t5 && n2(2, r2 = t5.$$scope);
  }, [o2, s2, r2, i2];
}
var la = class extends Et {
  constructor(t4) {
    super(), St(this, t4, aa, sa, s, {});
  }
};
function ca() {
  const { edgeLookup: t4, selectionRect: e2, selectionRectMode: n2, multiselectionKeyPressed: o2, addSelectedEdges: i2, unselectNodesAndEdges: r2, elementsSelectable: s2 } = Va();
  return (a2) => {
    const l2 = c(t4).get(a2);
    if (!l2) return void console.warn("012", rr(a2));
    (l2.selectable || c(s2) && void 0 === l2.selectable) && (e2.set(null), n2.set(null), l2.selected ? l2.selected && c(o2) && r2({ nodes: [], edges: [l2] }) : i2([a2]));
  };
}
function da(t4) {
  let e2, n2, o2, r2, s2, a2 = `translate(-50%, -50%) translate(${t4[1]}px,${t4[2]}px)`;
  const l2 = t4[5].default, c2 = u(l2, t4, t4[7], null);
  return { c() {
    e2 = E("div"), c2 && c2.c(), N(e2, "class", "svelte-flow__edge-label"), N(e2, "style", n2 = "pointer-events: all;" + t4[0]), N(e2, "role", "button"), N(e2, "tabindex", "-1"), A(e2, "transform", a2);
  }, m(n3, i2) {
    k(n3, e2, i2), c2 && c2.m(e2, null), o2 = true, r2 || (s2 = [z(e2, "keyup", ha), z(e2, "click", t4[6])], r2 = true);
  }, p(t5, i2) {
    c2 && c2.p && (!o2 || 128 & i2) && f(c2, l2, t5, t5[7], o2 ? p(l2, t5[7], i2, null) : g(t5[7]), null), (!o2 || 1 & i2 && n2 !== (n2 = "pointer-events: all;" + t5[0])) && N(e2, "style", n2);
    const r3 = 1 & i2;
    (7 & i2 && a2 !== (a2 = `translate(-50%, -50%) translate(${t5[1]}px,${t5[2]}px)`) || r3) && A(e2, "transform", a2);
  }, i(t5) {
    o2 || (ft(c2, t5), o2 = true);
  }, o(t5) {
    gt(c2, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), c2 && c2.d(t5), r2 = false, i(s2);
  } };
}
function ua(t4) {
  let e2, n2;
  return e2 = new la({ props: { $$slots: { default: [da] }, $$scope: { ctx: t4 } } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, [n3]) {
    const o2 = {};
    135 & n3 && (o2.$$scope = { dirty: n3, ctx: t5 }), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
var ha = () => {
};
function pa(t4, e2, n2) {
  let { $$slots: o2 = {}, $$scope: i2 } = e2, { style: r2 } = e2, { x: s2 } = e2, { y: a2 } = e2;
  const l2 = ca(), c2 = j("svelteflow__edge_id");
  return t4.$$set = (t5) => {
    "style" in t5 && n2(0, r2 = t5.style), "x" in t5 && n2(1, s2 = t5.x), "y" in t5 && n2(2, a2 = t5.y), "$$scope" in t5 && n2(7, i2 = t5.$$scope);
  }, [r2, s2, a2, l2, c2, o2, () => {
    c2 && l2(c2);
  }, i2];
}
var fa = class extends Et {
  constructor(t4) {
    super(), St(this, t4, pa, ua, s, { style: 0, x: 1, y: 2 });
  }
};
function ga(t4) {
  let e2, n2;
  return e2 = new fa({ props: { x: t4[3], y: t4[4], style: t4[5], $$slots: { default: [ma] }, $$scope: { ctx: t4 } } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    8 & n3 && (o2.x = t5[3]), 16 & n3 && (o2.y = t5[4]), 32 & n3 && (o2.style = t5[5]), 4100 & n3 && (o2.$$scope = { dirty: n3, ctx: t5 }), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function ma(t4) {
  let e2;
  return { c() {
    e2 = O(t4[2]);
  }, m(t5, n2) {
    k(t5, e2, n2);
  }, p(t5, n2) {
    4 & n2 && D(e2, t5[2]);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function ya(t4) {
  let e2, n2, o2, i2, r2, s2, a2 = t4[10] && /* @__PURE__ */ function(t5) {
    let e3;
    return { c() {
      e3 = C("path"), N(e3, "d", t5[1]), N(e3, "stroke-opacity", 0), N(e3, "stroke-width", t5[10]), N(e3, "fill", "none"), N(e3, "class", "svelte-flow__edge-interaction");
    }, m(t6, n3) {
      k(t6, e3, n3);
    }, p(t6, n3) {
      2 & n3 && N(e3, "d", t6[1]);
    }, d(t6) {
      t6 && _(e3);
    } };
  }(t4), l2 = t4[2] && ga(t4);
  return { c() {
    e2 = C("path"), o2 = P(), a2 && a2.c(), i2 = P(), l2 && l2.c(), r2 = M(), N(e2, "id", t4[0]), N(e2, "d", t4[1]), N(e2, "class", n2 = me(["svelte-flow__edge-path", t4[9]])), N(e2, "marker-start", t4[6]), N(e2, "marker-end", t4[7]), N(e2, "fill", "none"), N(e2, "style", t4[8]);
  }, m(t5, n3) {
    k(t5, e2, n3), k(t5, o2, n3), a2 && a2.m(t5, n3), k(t5, i2, n3), l2 && l2.m(t5, n3), k(t5, r2, n3), s2 = true;
  }, p(t5, [o3]) {
    (!s2 || 1 & o3) && N(e2, "id", t5[0]), (!s2 || 2 & o3) && N(e2, "d", t5[1]), (!s2 || 512 & o3 && n2 !== (n2 = me(["svelte-flow__edge-path", t5[9]]))) && N(e2, "class", n2), (!s2 || 64 & o3) && N(e2, "marker-start", t5[6]), (!s2 || 128 & o3) && N(e2, "marker-end", t5[7]), (!s2 || 256 & o3) && N(e2, "style", t5[8]), t5[10] && a2.p(t5, o3), t5[2] ? l2 ? (l2.p(t5, o3), 4 & o3 && ft(l2, 1)) : (l2 = ga(t5), l2.c(), ft(l2, 1), l2.m(r2.parentNode, r2)) : l2 && (ht(), gt(l2, 1, 1, () => {
      l2 = null;
    }), pt());
  }, i(t5) {
    s2 || (ft(l2), s2 = true);
  }, o(t5) {
    gt(l2), s2 = false;
  }, d(t5) {
    t5 && (_(e2), _(o2), _(i2), _(r2)), a2 && a2.d(t5), l2 && l2.d(t5);
  } };
}
function wa(t4, e2, n2) {
  let { id: o2 } = e2, { path: i2 } = e2, { label: r2 } = e2, { labelX: s2 } = e2, { labelY: a2 } = e2, { labelStyle: l2 } = e2, { markerStart: c2 } = e2, { markerEnd: d2 } = e2, { style: u2 } = e2, { interactionWidth: h2 = 20 } = e2, { class: p2 } = e2, f2 = void 0 === h2 ? 20 : h2;
  return t4.$$set = (t5) => {
    "id" in t5 && n2(0, o2 = t5.id), "path" in t5 && n2(1, i2 = t5.path), "label" in t5 && n2(2, r2 = t5.label), "labelX" in t5 && n2(3, s2 = t5.labelX), "labelY" in t5 && n2(4, a2 = t5.labelY), "labelStyle" in t5 && n2(5, l2 = t5.labelStyle), "markerStart" in t5 && n2(6, c2 = t5.markerStart), "markerEnd" in t5 && n2(7, d2 = t5.markerEnd), "style" in t5 && n2(8, u2 = t5.style), "interactionWidth" in t5 && n2(11, h2 = t5.interactionWidth), "class" in t5 && n2(9, p2 = t5.class);
  }, [o2, i2, r2, s2, a2, l2, c2, d2, u2, p2, f2, h2];
}
var $a = class extends Et {
  constructor(t4) {
    super(), St(this, t4, wa, ya, s, { id: 0, path: 1, label: 2, labelX: 3, labelY: 4, labelStyle: 5, markerStart: 6, markerEnd: 7, style: 8, interactionWidth: 11, class: 9 });
  }
};
function va(t4) {
  let e2, n2;
  return e2 = new $a({ props: { path: t4[8], labelX: t4[7], labelY: t4[6], label: t4[0], labelStyle: t4[1], markerStart: t4[3], markerEnd: t4[4], interactionWidth: t4[5], style: t4[2] } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, [n3]) {
    const o2 = {};
    256 & n3 && (o2.path = t5[8]), 128 & n3 && (o2.labelX = t5[7]), 64 & n3 && (o2.labelY = t5[6]), 1 & n3 && (o2.label = t5[0]), 2 & n3 && (o2.labelStyle = t5[1]), 8 & n3 && (o2.markerStart = t5[3]), 16 & n3 && (o2.markerEnd = t5[4]), 32 & n3 && (o2.interactionWidth = t5[5]), 4 & n3 && (o2.style = t5[2]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function xa(t4, n2, o2) {
  let i2, r2, s2;
  const a2 = ["label", "labelStyle", "style", "markerStart", "markerEnd", "interactionWidth", "sourceX", "sourceY", "sourcePosition", "targetX", "targetY", "targetPosition"];
  y(n2, a2);
  let { label: l2 } = n2, { labelStyle: c2 } = n2, { style: d2 } = n2, { markerStart: u2 } = n2, { markerEnd: h2 } = n2, { interactionWidth: p2 } = n2, { sourceX: f2 } = n2, { sourceY: g2 } = n2, { sourcePosition: w2 } = n2, { targetX: $2 } = n2, { targetY: v2 } = n2, { targetPosition: x2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(15, y(n2, a2)), "label" in t5 && o2(0, l2 = t5.label), "labelStyle" in t5 && o2(1, c2 = t5.labelStyle), "style" in t5 && o2(2, d2 = t5.style), "markerStart" in t5 && o2(3, u2 = t5.markerStart), "markerEnd" in t5 && o2(4, h2 = t5.markerEnd), "interactionWidth" in t5 && o2(5, p2 = t5.interactionWidth), "sourceX" in t5 && o2(9, f2 = t5.sourceX), "sourceY" in t5 && o2(10, g2 = t5.sourceY), "sourcePosition" in t5 && o2(11, w2 = t5.sourcePosition), "targetX" in t5 && o2(12, $2 = t5.targetX), "targetY" in t5 && o2(13, v2 = t5.targetY), "targetPosition" in t5 && o2(14, x2 = t5.targetPosition);
  }, t4.$$.update = () => {
    32256 & t4.$$.dirty && o2(8, [i2, r2, s2] = is({ sourceX: f2, sourceY: g2, targetX: $2, targetY: v2, sourcePosition: w2, targetPosition: x2 }), i2, (o2(7, r2), o2(9, f2), o2(10, g2), o2(12, $2), o2(13, v2), o2(11, w2), o2(14, x2)), (o2(6, s2), o2(9, f2), o2(10, g2), o2(12, $2), o2(13, v2), o2(11, w2), o2(14, x2)));
  }, [l2, c2, d2, u2, h2, p2, s2, r2, i2, f2, g2, w2, $2, v2, x2];
}
var ba = class extends Et {
  constructor(t4) {
    super(), St(this, t4, xa, va, s, { label: 0, labelStyle: 1, style: 2, markerStart: 3, markerEnd: 4, interactionWidth: 5, sourceX: 9, sourceY: 10, sourcePosition: 11, targetX: 12, targetY: 13, targetPosition: 14 });
  }
};
function ka(t4) {
  let e2, n2;
  return e2 = new $a({ props: { path: t4[8], labelX: t4[7], labelY: t4[6], label: t4[0], labelStyle: t4[1], markerStart: t4[3], markerEnd: t4[4], interactionWidth: t4[5], style: t4[2] } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, [n3]) {
    const o2 = {};
    256 & n3 && (o2.path = t5[8]), 128 & n3 && (o2.labelX = t5[7]), 64 & n3 && (o2.labelY = t5[6]), 1 & n3 && (o2.label = t5[0]), 2 & n3 && (o2.labelStyle = t5[1]), 8 & n3 && (o2.markerStart = t5[3]), 16 & n3 && (o2.markerEnd = t5[4]), 32 & n3 && (o2.interactionWidth = t5[5]), 4 & n3 && (o2.style = t5[2]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function _a(t4, n2, o2) {
  let i2, r2, s2;
  const a2 = ["label", "labelStyle", "style", "markerStart", "markerEnd", "interactionWidth", "sourceX", "sourceY", "sourcePosition", "targetX", "targetY", "targetPosition"];
  y(n2, a2);
  let { label: l2 } = n2, { labelStyle: c2 } = n2, { style: d2 } = n2, { markerStart: u2 } = n2, { markerEnd: h2 } = n2, { interactionWidth: p2 } = n2, { sourceX: f2 } = n2, { sourceY: g2 } = n2, { sourcePosition: w2 } = n2, { targetX: $2 } = n2, { targetY: v2 } = n2, { targetPosition: x2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(15, y(n2, a2)), "label" in t5 && o2(0, l2 = t5.label), "labelStyle" in t5 && o2(1, c2 = t5.labelStyle), "style" in t5 && o2(2, d2 = t5.style), "markerStart" in t5 && o2(3, u2 = t5.markerStart), "markerEnd" in t5 && o2(4, h2 = t5.markerEnd), "interactionWidth" in t5 && o2(5, p2 = t5.interactionWidth), "sourceX" in t5 && o2(9, f2 = t5.sourceX), "sourceY" in t5 && o2(10, g2 = t5.sourceY), "sourcePosition" in t5 && o2(11, w2 = t5.sourcePosition), "targetX" in t5 && o2(12, $2 = t5.targetX), "targetY" in t5 && o2(13, v2 = t5.targetY), "targetPosition" in t5 && o2(14, x2 = t5.targetPosition);
  }, t4.$$.update = () => {
    32256 & t4.$$.dirty && o2(8, [i2, r2, s2] = hs({ sourceX: f2, sourceY: g2, targetX: $2, targetY: v2, sourcePosition: w2, targetPosition: x2 }), i2, (o2(7, r2), o2(9, f2), o2(10, g2), o2(12, $2), o2(13, v2), o2(11, w2), o2(14, x2)), (o2(6, s2), o2(9, f2), o2(10, g2), o2(12, $2), o2(13, v2), o2(11, w2), o2(14, x2)));
  }, [l2, c2, d2, u2, h2, p2, s2, r2, i2, f2, g2, w2, $2, v2, x2];
}
var Sa = class extends Et {
  constructor(t4) {
    super(), St(this, t4, _a, ka, s, { label: 0, labelStyle: 1, style: 2, markerStart: 3, markerEnd: 4, interactionWidth: 5, sourceX: 9, sourceY: 10, sourcePosition: 11, targetX: 12, targetY: 13, targetPosition: 14 });
  }
};
function Ea(t4) {
  let e2, n2;
  return e2 = new $a({ props: { path: t4[8], labelX: t4[7], labelY: t4[6], label: t4[0], labelStyle: t4[1], markerStart: t4[3], markerEnd: t4[4], interactionWidth: t4[5], style: t4[2] } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, [n3]) {
    const o2 = {};
    256 & n3 && (o2.path = t5[8]), 128 & n3 && (o2.labelX = t5[7]), 64 & n3 && (o2.labelY = t5[6]), 1 & n3 && (o2.label = t5[0]), 2 & n3 && (o2.labelStyle = t5[1]), 8 & n3 && (o2.markerStart = t5[3]), 16 & n3 && (o2.markerEnd = t5[4]), 32 & n3 && (o2.interactionWidth = t5[5]), 4 & n3 && (o2.style = t5[2]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Ca(t4, n2, o2) {
  let i2, r2, s2;
  const a2 = ["label", "labelStyle", "style", "markerStart", "markerEnd", "interactionWidth", "sourceX", "sourceY", "targetX", "targetY"];
  y(n2, a2);
  let { label: l2 } = n2, { labelStyle: c2 } = n2, { style: d2 } = n2, { markerStart: u2 } = n2, { markerEnd: h2 } = n2, { interactionWidth: p2 } = n2, { sourceX: f2 } = n2, { sourceY: g2 } = n2, { targetX: w2 } = n2, { targetY: $2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(13, y(n2, a2)), "label" in t5 && o2(0, l2 = t5.label), "labelStyle" in t5 && o2(1, c2 = t5.labelStyle), "style" in t5 && o2(2, d2 = t5.style), "markerStart" in t5 && o2(3, u2 = t5.markerStart), "markerEnd" in t5 && o2(4, h2 = t5.markerEnd), "interactionWidth" in t5 && o2(5, p2 = t5.interactionWidth), "sourceX" in t5 && o2(9, f2 = t5.sourceX), "sourceY" in t5 && o2(10, g2 = t5.sourceY), "targetX" in t5 && o2(11, w2 = t5.targetX), "targetY" in t5 && o2(12, $2 = t5.targetY);
  }, t4.$$.update = () => {
    7680 & t4.$$.dirty && o2(8, [i2, r2, s2] = ls({ sourceX: f2, sourceY: g2, targetX: w2, targetY: $2 }), i2, (o2(7, r2), o2(9, f2), o2(10, g2), o2(11, w2), o2(12, $2)), (o2(6, s2), o2(9, f2), o2(10, g2), o2(11, w2), o2(12, $2)));
  }, [l2, c2, d2, u2, h2, p2, s2, r2, i2, f2, g2, w2, $2];
}
var Oa = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Ca, Ea, s, { label: 0, labelStyle: 1, style: 2, markerStart: 3, markerEnd: 4, interactionWidth: 5, sourceX: 9, sourceY: 10, targetX: 11, targetY: 12 });
  }
};
function Pa(t4) {
  let e2, n2;
  return e2 = new $a({ props: { path: t4[8], labelX: t4[7], labelY: t4[6], label: t4[0], labelStyle: t4[1], markerStart: t4[3], markerEnd: t4[4], interactionWidth: t4[5], style: t4[2] } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, [n3]) {
    const o2 = {};
    256 & n3 && (o2.path = t5[8]), 128 & n3 && (o2.labelX = t5[7]), 64 & n3 && (o2.labelY = t5[6]), 1 & n3 && (o2.label = t5[0]), 2 & n3 && (o2.labelStyle = t5[1]), 8 & n3 && (o2.markerStart = t5[3]), 16 & n3 && (o2.markerEnd = t5[4]), 32 & n3 && (o2.interactionWidth = t5[5]), 4 & n3 && (o2.style = t5[2]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Ma(t4, n2, o2) {
  let i2, r2, s2;
  const a2 = ["label", "labelStyle", "style", "markerStart", "markerEnd", "interactionWidth", "sourceX", "sourceY", "sourcePosition", "targetX", "targetY", "targetPosition"];
  y(n2, a2);
  let { label: l2 } = n2, { labelStyle: c2 } = n2, { style: d2 } = n2, { markerStart: u2 } = n2, { markerEnd: h2 } = n2, { interactionWidth: p2 } = n2, { sourceX: f2 } = n2, { sourceY: g2 } = n2, { sourcePosition: w2 } = n2, { targetX: $2 } = n2, { targetY: v2 } = n2, { targetPosition: x2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(15, y(n2, a2)), "label" in t5 && o2(0, l2 = t5.label), "labelStyle" in t5 && o2(1, c2 = t5.labelStyle), "style" in t5 && o2(2, d2 = t5.style), "markerStart" in t5 && o2(3, u2 = t5.markerStart), "markerEnd" in t5 && o2(4, h2 = t5.markerEnd), "interactionWidth" in t5 && o2(5, p2 = t5.interactionWidth), "sourceX" in t5 && o2(9, f2 = t5.sourceX), "sourceY" in t5 && o2(10, g2 = t5.sourceY), "sourcePosition" in t5 && o2(11, w2 = t5.sourcePosition), "targetX" in t5 && o2(12, $2 = t5.targetX), "targetY" in t5 && o2(13, v2 = t5.targetY), "targetPosition" in t5 && o2(14, x2 = t5.targetPosition);
  }, t4.$$.update = () => {
    32256 & t4.$$.dirty && o2(8, [i2, r2, s2] = hs({ sourceX: f2, sourceY: g2, targetX: $2, targetY: v2, sourcePosition: w2, targetPosition: x2, borderRadius: 0 }), i2, (o2(7, r2), o2(9, f2), o2(10, g2), o2(12, $2), o2(13, v2), o2(11, w2), o2(14, x2)), (o2(6, s2), o2(9, f2), o2(10, g2), o2(12, $2), o2(13, v2), o2(11, w2), o2(14, x2)));
  }, [l2, c2, d2, u2, h2, p2, s2, r2, i2, f2, g2, w2, $2, v2, x2];
}
var za = (t4, e2, n2, o2 = [0, 0], i2 = sr) => {
  const { subscribe: r2, set: s2, update: a2 } = fe([]);
  let l2 = t4, c2 = {}, d2 = true;
  const u2 = (t5) => (xs(t5, e2, n2, { elevateNodesOnSelect: d2, nodeOrigin: o2, nodeExtent: i2, defaults: c2, checkEquality: false }), l2 = t5, s2(l2), l2);
  return u2(l2), { subscribe: r2, set: u2, update: (t5) => u2(t5(l2)), setDefaultOptions: (t5) => {
    c2 = t5;
  }, setOptions: (t5) => {
    var _a2;
    d2 = (_a2 = t5.elevateNodesOnSelect) != null ? _a2 : d2;
  } };
};
var Na = (t4, e2, n2, o2) => {
  const { subscribe: i2, set: r2, update: s2 } = fe([]);
  let a2 = t4, l2 = o2 || {};
  const c2 = (t5) => {
    const o3 = l2 ? t5.map((t6) => __spreadValues(__spreadValues({}, l2), t6)) : t5;
    Ss(e2, n2, o3), a2 = o3, r2(a2);
  };
  return c2(a2), { subscribe: i2, set: c2, update: (t5) => c2(t5(a2)), setDefaultOptions: (t5) => {
    l2 = t5;
  } };
};
var La = { input: Us, output: ea, default: js, group: oa };
var Ia = { straight: Oa, smoothstep: Sa, default: ba, step: class extends Et {
  constructor(t4) {
    super(), St(this, t4, Ma, Pa, s, { label: 0, labelStyle: 1, style: 2, markerStart: 3, markerEnd: 4, interactionWidth: 5, sourceX: 9, sourceY: 10, sourcePosition: 11, targetX: 12, targetY: 13, targetPosition: 14 });
  }
} };
function Da(t4) {
  const e2 = ge([t4.edges, t4.nodes, t4.nodeLookup, t4.onlyRenderVisibleElements, t4.viewport, t4.width, t4.height], ([t5, , e3, n2, o2, i2, r2]) => {
    const s2 = n2 && i2 && r2 ? t5.filter((t6) => {
      const n3 = e3.get(t6.source), s3 = e3.get(t6.target);
      return n3 && s3 && function({ sourceNode: t7, targetNode: e4, width: n4, height: o3, transform: i3 }) {
        const r3 = Nr(Ar(t7), Ar(e4));
        r3.x === r3.x2 && (r3.x2 += 1), r3.y === r3.y2 && (r3.y2 += 1);
        const s4 = { x: -i3[0] / i3[2], y: -i3[1] / i3[2], width: n4 / i3[2], height: o3 / i3[2] };
        return Hr(s4, Ir(r3)) > 0;
      }({ sourceNode: n3, targetNode: s3, width: i2, height: r2, transform: [o2.x, o2.y, o2.zoom] });
    }) : t5;
    return s2;
  });
  return ge([e2, t4.nodes, t4.nodeLookup, t4.connectionMode, t4.onerror], ([t5, , e3, n2, o2]) => t5.reduce((t6, i2) => {
    const r2 = e3.get(i2.source), s2 = e3.get(i2.target);
    if (!r2 || !s2) return t6;
    const a2 = function(t7) {
      var _a2, _b, _c2, _d2, _e2;
      const { sourceNode: e4, targetNode: n3 } = t7;
      if (!ps(e4) || !ps(n3)) return null;
      const o3 = e4.internals.handleBounds || fs(e4.handles), i3 = n3.internals.handleBounds || fs(n3.handles), r3 = ms((_a2 = o3 == null ? void 0 : o3.source) != null ? _a2 : [], t7.sourceHandle), s3 = ms(t7.connectionMode === ar.Strict ? (_b = i3 == null ? void 0 : i3.target) != null ? _b : [] : ((_c2 = i3 == null ? void 0 : i3.target) != null ? _c2 : []).concat((_d2 = i3 == null ? void 0 : i3.source) != null ? _d2 : []), t7.targetHandle);
      if (!r3 || !s3) return (_e2 = t7.onError) == null ? void 0 : _e2.call(t7, "008", ir(r3 ? "target" : "source", { id: t7.id, sourceHandle: t7.sourceHandle, targetHandle: t7.targetHandle })), null;
      const a3 = (r3 == null ? void 0 : r3.position) || pr.Bottom, l2 = (s3 == null ? void 0 : s3.position) || pr.Top, c2 = gs(e4, r3, a3), d2 = gs(n3, s3, l2);
      return { sourceX: c2.x, sourceY: c2.y, targetX: d2.x, targetY: d2.y, sourcePosition: a3, targetPosition: l2 };
    }({ id: i2.id, sourceNode: r2, targetNode: s2, sourceHandle: i2.sourceHandle || null, targetHandle: i2.targetHandle || null, connectionMode: n2, onError: o2 });
    return a2 && t6.push(__spreadValues(__spreadProps(__spreadValues({}, i2), { zIndex: ss({ selected: i2.selected, zIndex: i2.zIndex, sourceNode: r2, targetNode: s2, elevateOnSelect: false }) }), a2)), t6;
  }, []));
}
function Aa(t4) {
  return ge([t4.nodeLookup, t4.onlyRenderVisibleElements, t4.width, t4.height, t4.viewport, t4.nodes], ([t5, e2, n2, o2, i2]) => {
    const r2 = [i2.x, i2.y, i2.zoom];
    return e2 ? xr(t5, { x: 0, y: 0, width: n2, height: o2 }, r2, true) : Array.from(t5.values());
  });
}
var Ta = Symbol();
function Ha({ nodes: t4, edges: e2, width: n2, height: o2, fitView: i2, nodeOrigin: r2, nodeExtent: s2 }) {
  const a2 = (({ nodes: t5 = [], edges: e3 = [], width: n3, height: o3, fitView: i3, nodeOrigin: r3, nodeExtent: s3 }) => {
    const a3 = /* @__PURE__ */ new Map(), l3 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), d3 = /* @__PURE__ */ new Map(), u3 = r3 != null ? r3 : [0, 0], h3 = s3 != null ? s3 : sr;
    xs(t5, a3, l3, { nodeExtent: h3, nodeOrigin: u3, elevateNodesOnSelect: false, checkEquality: false }), Ss(c2, d3, e3);
    let p3 = { x: 0, y: 0, zoom: 1 };
    if (i3 && n3 && o3) {
      const t6 = vr(a3, { filter: (t7) => !(!t7.width && !t7.initialWidth || !t7.height && !t7.initialHeight) });
      p3 = Zr(t6, n3, o3, 0.5, 2, 0.1);
    }
    return { flowId: fe(null), nodes: za(t5, a3, l3, u3, h3), nodeLookup: pe(a3), parentLookup: pe(l3), edgeLookup: pe(d3), visibleNodes: pe([]), edges: Na(e3, c2, d3), visibleEdges: pe([]), connectionLookup: pe(c2), height: fe(500), width: fe(500), minZoom: fe(0.5), maxZoom: fe(2), nodeOrigin: fe(u3), nodeDragThreshold: fe(1), nodeExtent: fe(h3), translateExtent: fe(sr), autoPanOnNodeDrag: fe(true), autoPanOnConnect: fe(true), fitViewOnInit: fe(false), fitViewOnInitDone: fe(false), fitViewOptions: fe(void 0), panZoom: fe(null), snapGrid: fe(null), dragging: fe(false), selectionRect: fe(null), selectionKeyPressed: fe(false), multiselectionKeyPressed: fe(false), deleteKeyPressed: fe(false), panActivationKeyPressed: fe(false), zoomActivationKeyPressed: fe(false), selectionRectMode: fe(null), selectionMode: fe(cr.Partial), nodeTypes: fe(La), edgeTypes: fe(Ia), viewport: fe(p3), connectionMode: fe(ar.Strict), domNode: fe(null), connection: pe(dr), connectionLineType: fe(ur.Bezier), connectionRadius: fe(20), isValidConnection: fe(() => true), nodesDraggable: fe(true), nodesConnectable: fe(true), elementsSelectable: fe(true), selectNodesOnDrag: fe(true), markers: pe([]), defaultMarkerColor: fe("#b1b1b7"), lib: pe("svelte"), onlyRenderVisibleElements: fe(false), onerror: fe(Wr), ondelete: fe(void 0), onedgecreate: fe(void 0), onconnect: fe(void 0), onconnectstart: fe(void 0), onconnectend: fe(void 0), onbeforedelete: fe(void 0), nodesInitialized: fe(false), edgesInitialized: fe(false), viewportInitialized: fe(false), initialized: pe(false) };
  })({ nodes: t4, edges: e2, width: n2, height: o2, fitView: i2, nodeOrigin: r2, nodeExtent: s2 });
  function l2(t5, e3) {
    const n3 = c(a2.panZoom);
    return n3 ? n3.scaleBy(t5, e3) : Promise.resolve(false);
  }
  function d2(t5) {
    let e3 = false;
    return t5.forEach((t6) => {
      t6.selected && (t6.selected = false, e3 = true);
    }), e3;
  }
  function u2(t5) {
    d2((t5 == null ? void 0 : t5.nodes) || c(a2.nodes)) && a2.nodes.set(c(a2.nodes));
    d2((t5 == null ? void 0 : t5.edges) || c(a2.edges)) && a2.edges.set(c(a2.edges));
  }
  function h2(t5) {
    const e3 = c(a2.multiselectionKeyPressed);
    a2.nodes.update((n3) => n3.map((n4) => {
      const o3 = t5.includes(n4.id), i3 = e3 && n4.selected || o3;
      return n4.selected = i3, n4;
    })), e3 || a2.edges.update((t6) => t6.map((t7) => (t7.selected = false, t7)));
  }
  a2.deleteKeyPressed.subscribe((t5) => __async(this, null, function* () {
    var _a2;
    if (t5) {
      const t6 = c(a2.nodes), e3 = c(a2.edges), n3 = t6.filter((t7) => t7.selected), o3 = e3.filter((t7) => t7.selected), { nodes: i3, edges: r3 } = yield Er({ nodesToRemove: n3, edgesToRemove: o3, nodes: t6, edges: e3, onBeforeDelete: c(a2.onbeforedelete) });
      (i3.length || r3.length) && (a2.nodes.update((t7) => t7.filter((t8) => !i3.some((e4) => e4.id === t8.id))), a2.edges.update((t7) => t7.filter((t8) => !r3.some((e4) => e4.id === t8.id))), (_a2 = c(a2.ondelete)) == null ? void 0 : _a2({ nodes: i3, edges: r3 }));
    }
  }));
  const p2 = fe(dr);
  function f2() {
    p2.set(dr);
  }
  return __spreadProps(__spreadValues({}, a2), { visibleEdges: Da(a2), visibleNodes: Aa(a2), connection: ge([p2, a2.viewport], ([t5, e3]) => t5.inProgress ? __spreadProps(__spreadValues({}, t5), { to: Yr(t5.to, [e3.x, e3.y, e3.zoom]) }) : __spreadValues({}, t5)), markers: ge([a2.edges, a2.defaultMarkerColor, a2.flowId], ([t5, e3, n3]) => function(t6, { id: e4, defaultColor: n4, defaultMarkerStart: o3, defaultMarkerEnd: i3 }) {
    const r3 = /* @__PURE__ */ new Set();
    return t6.reduce((t7, s3) => ([s3.markerStart || o3, s3.markerEnd || i3].forEach((o4) => {
      if (o4 && "object" == typeof o4) {
        const i4 = ys(o4, e4);
        r3.has(i4) || (t7.push(__spreadValues({ id: i4, color: o4.color || n4 }, o4)), r3.add(i4));
      }
    }), t7), []).sort((t7, e5) => t7.id.localeCompare(e5.id));
  }(t5, { defaultColor: e3, id: n3 })), initialized: (() => {
    let t5 = false;
    const e3 = c(a2.nodes).length, n3 = c(a2.edges).length;
    return ge([a2.nodesInitialized, a2.edgesInitialized, a2.viewportInitialized], ([o3, i3, r3]) => t5 || (t5 = 0 === e3 ? r3 : 0 === n3 ? r3 && o3 : r3 && o3 && i3, t5));
  })(), syncNodeStores: (t5) => function(t6, e3) {
    const n3 = t6.set, o3 = e3.set, i3 = c(t6), r3 = c(e3);
    let s3 = 0 === i3.length && r3.length > 0 ? r3 : i3;
    t6.set(s3);
    const a3 = (t7) => {
      const e4 = n3(t7);
      return s3 = e4, o3(s3), e4;
    };
    t6.set = e3.set = a3, t6.update = e3.update = (t7) => a3(t7(s3));
  }(a2.nodes, t5), syncEdgeStores: (t5) => function(t6, e3) {
    const n3 = t6.set, o3 = e3.set;
    let i3 = c(e3);
    t6.set(i3);
    const r3 = (t7) => {
      n3(t7), o3(t7), i3 = t7;
    };
    t6.set = e3.set = r3, t6.update = e3.update = (t7) => r3(t7(i3));
  }(a2.edges, t5), syncViewport: (t5) => ((t6, e3, n3) => {
    if (!n3) return;
    const o3 = c(t6), i3 = e3.set, r3 = n3.set;
    let s3 = n3 ? c(n3) : { x: 0, y: 0, zoom: 1 };
    e3.set(s3), e3.set = (t7) => (i3(t7), r3(t7), s3 = t7, t7), n3.set = (t7) => (o3 == null ? void 0 : o3.syncViewport(t7), i3(t7), r3(t7), s3 = t7, t7), e3.update = (t7) => {
      e3.set(t7(s3));
    }, n3.update = (t7) => {
      n3.set(t7(s3));
    };
  })(a2.panZoom, a2.viewport, t5), setNodeTypes: function(t5) {
    a2.nodeTypes.set(__spreadValues(__spreadValues({}, La), t5));
  }, setEdgeTypes: function(t5) {
    a2.edgeTypes.set(__spreadValues(__spreadValues({}, Ia), t5));
  }, addEdge: function(t5) {
    const e3 = c(a2.edges);
    a2.edges.set(((t6, e4) => {
      if (!t6.source || !t6.target) return e4;
      let n3;
      return n3 = ((t7) => "id" in t7 && "source" in t7 && "target" in t7)(t6) ? __spreadValues({}, t6) : __spreadProps(__spreadValues({}, t6), { id: as(t6) }), ((t7, e5) => e5.some((e6) => !(e6.source !== t7.source || e6.target !== t7.target || e6.sourceHandle !== t7.sourceHandle && (e6.sourceHandle || t7.sourceHandle) || e6.targetHandle !== t7.targetHandle && (e6.targetHandle || t7.targetHandle))))(n3, e4) ? e4 : (null === n3.sourceHandle && delete n3.sourceHandle, null === n3.targetHandle && delete n3.targetHandle, e4.concat(n3));
    })(t5, e3));
  }, updateNodePositions: (t5, e3 = false) => {
    var _a2;
    const n3 = c(a2.nodeLookup);
    for (const [o3, i3] of t5) {
      const t6 = (_a2 = n3.get(o3)) == null ? void 0 : _a2.internals.userNode;
      t6 && (t6.position = i3.position, t6.dragging = e3);
    }
    a2.nodes.update((t6) => t6);
  }, updateNodeInternals: function(t5) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const e3 = c(a2.nodeLookup), n3 = c(a2.parentLookup), { changes: o3, updatedInternals: i3 } = _s(t5, e3, c(a2.parentLookup), c(a2.domNode), c(a2.nodeOrigin));
    if (i3) {
      if (function(t6, e4, n4) {
        const o4 = vs(ws, n4);
        for (const n5 of t6.values()) if (n5.parentId) bs(n5, t6, e4, o4);
        else {
          const t7 = wr(n5, o4.nodeOrigin), e5 = Kr(n5.extent) ? n5.extent : o4.nodeExtent, i4 = Or(t7, e5, Gr(n5));
          n5.internals.positionAbsolute = i4;
        }
      }(e3, n3, { nodeOrigin: r2, nodeExtent: s2 }), !c(a2.fitViewOnInitDone) && c(a2.fitViewOnInit)) {
        const t6 = c(a2.fitViewOptions), e4 = function(t7) {
          const e5 = c(a2.panZoom);
          if (!e5) return false;
          const n4 = kr(c(a2.nodeLookup), t7);
          return _r({ nodes: n4, width: c(a2.width), height: c(a2.height), minZoom: c(a2.minZoom), maxZoom: c(a2.maxZoom), panZoom: e5 }, t7), n4.size > 0;
        }(__spreadProps(__spreadValues({}, t6), { nodes: t6 == null ? void 0 : t6.nodes }));
        a2.fitViewOnInitDone.set(e4);
      }
      for (const t6 of o3) {
        const n4 = (_a2 = e3.get(t6.id)) == null ? void 0 : _a2.internals.userNode;
        if (n4) switch (t6.type) {
          case "dimensions": {
            const e4 = __spreadValues(__spreadValues({}, n4.measured), t6.dimensions);
            t6.setAttributes && (n4.width = (_c2 = (_b = t6.dimensions) == null ? void 0 : _b.width) != null ? _c2 : n4.width, n4.height = (_e2 = (_d2 = t6.dimensions) == null ? void 0 : _d2.height) != null ? _e2 : n4.height), n4.measured = e4;
            break;
          }
          case "position":
            n4.position = (_f = t6.position) != null ? _f : n4.position;
        }
      }
      a2.nodes.update((t6) => t6), c(a2.nodesInitialized) || a2.nodesInitialized.set(true);
    }
  }, zoomIn: function(t5) {
    return l2(1.2, t5);
  }, zoomOut: function(t5) {
    return l2(1 / 1.2, t5);
  }, fitView: (t5) => function(t6) {
    const e3 = c(a2.panZoom), n3 = c(a2.domNode);
    if (!e3 || !n3) return Promise.resolve(false);
    const { width: o3, height: i3 } = Qr(n3);
    return _r({ nodes: kr(c(a2.nodeLookup), t6), width: o3, height: i3, minZoom: c(a2.minZoom), maxZoom: c(a2.maxZoom), panZoom: e3 }, t6);
  }(t5), setMinZoom: function(t5) {
    const e3 = c(a2.panZoom);
    e3 && (e3.setScaleExtent([t5, c(a2.maxZoom)]), a2.minZoom.set(t5));
  }, setMaxZoom: function(t5) {
    const e3 = c(a2.panZoom);
    e3 && (e3.setScaleExtent([c(a2.minZoom), t5]), a2.maxZoom.set(t5));
  }, setTranslateExtent: function(t5) {
    const e3 = c(a2.panZoom);
    e3 && (e3.setTranslateExtent(t5), a2.translateExtent.set(t5));
  }, setPaneClickDistance: function(t5) {
    var _a2;
    (_a2 = c(a2.panZoom)) == null ? void 0 : _a2.setClickDistance(t5);
  }, unselectNodesAndEdges: u2, addSelectedNodes: h2, addSelectedEdges: function(t5) {
    const e3 = c(a2.multiselectionKeyPressed);
    a2.edges.update((n3) => n3.map((n4) => {
      const o3 = t5.includes(n4.id), i3 = e3 && n4.selected || o3;
      return n4.selected = i3, n4;
    })), e3 || a2.nodes.update((t6) => t6.map((t7) => (t7.selected = false, t7)));
  }, handleNodeSelection: function(t5) {
    var _a2;
    const e3 = (_a2 = c(a2.nodes)) == null ? void 0 : _a2.find((e4) => e4.id === t5);
    e3 ? (a2.selectionRect.set(null), a2.selectionRectMode.set(null), e3.selected ? e3.selected && c(a2.multiselectionKeyPressed) && u2({ nodes: [e3], edges: [] }) : h2([t5])) : console.warn("012", rr(t5));
  }, panBy: function(t5) {
    const e3 = c(a2.viewport);
    return function(_0) {
      return __async(this, arguments, function* ({ delta: t6, panZoom: e4, transform: n3, translateExtent: o3, width: i3, height: r3 }) {
        if (!e4 || !t6.x && !t6.y) return Promise.resolve(false);
        const s3 = yield e4.setViewportConstrained({ x: n3[0] + t6.x, y: n3[1] + t6.y, zoom: n3[2] }, [[0, 0], [i3, r3]], o3), a3 = !!s3 && (s3.x !== n3[0] || s3.y !== n3[1] || s3.k !== n3[2]);
        return Promise.resolve(a3);
      });
    }({ delta: t5, panZoom: c(a2.panZoom), transform: [e3.x, e3.y, e3.zoom], translateExtent: c(a2.translateExtent), width: c(a2.width), height: c(a2.height) });
  }, updateConnection: (t5) => {
    p2.set(__spreadValues({}, t5));
  }, cancelConnection: f2, reset: function() {
    a2.fitViewOnInitDone.set(false), a2.selectionRect.set(null), a2.selectionRectMode.set(null), a2.snapGrid.set(null), a2.isValidConnection.set(() => true), u2(), f2();
  } });
}
function Va() {
  const t4 = j(Ta);
  if (!t4) throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return t4.getStore();
}
function Fa(t4, e2) {
  const { panZoom: n2, minZoom: o2, maxZoom: i2, initialViewport: r2, viewport: s2, dragging: a2, translateExtent: l2, paneClickDistance: c2 } = e2, d2 = Xs({ domNode: t4, minZoom: o2, maxZoom: i2, translateExtent: l2, viewport: r2, paneClickDistance: c2, onDraggingChange: a2.set }), u2 = d2.getViewport();
  return s2.set(u2), n2.set(d2), d2.update(e2), { update(t5) {
    d2.update(t5);
  } };
}
function Wa(t4) {
  let e2, n2, o2, i2, s2;
  const a2 = t4[35].default, l2 = u(a2, t4, t4[34], null);
  return { c() {
    e2 = E("div"), l2 && l2.c(), N(e2, "class", "svelte-flow__zoom svelte-4xkw84");
  }, m(r2, a3) {
    k(r2, e2, a3), l2 && l2.m(e2, null), o2 = true, i2 || (s2 = v(n2 = Fa.call(null, e2, { viewport: t4[18], minZoom: t4[12], maxZoom: t4[13], initialViewport: t4[11], dragging: t4[23], panZoom: t4[19], onPanZoomStart: t4[0], onPanZoom: t4[1], onPanZoomEnd: t4[2], zoomOnScroll: t4[5], zoomOnDoubleClick: t4[6], zoomOnPinch: t4[7], panOnScroll: t4[9], panOnDrag: t4[10], panOnScrollSpeed: 0.5, panOnScrollMode: t4[3] || lr.Free, zoomActivationKeyPressed: t4[14], preventScrolling: "boolean" != typeof t4[4] || t4[4], noPanClassName: "nopan", noWheelClassName: "nowheel", userSelectionActive: !!t4[15], translateExtent: t4[16], lib: t4[17], paneClickDistance: t4[8], onTransformChange: t4[29] })), i2 = true);
  }, p(t5, e3) {
    l2 && l2.p && (!o2 || 8 & e3[1]) && f(l2, a2, t5, t5[34], o2 ? p(a2, t5[34], e3, null) : g(t5[34]), null), n2 && r(n2.update) && 262143 & e3[0] && n2.update.call(null, { viewport: t5[18], minZoom: t5[12], maxZoom: t5[13], initialViewport: t5[11], dragging: t5[23], panZoom: t5[19], onPanZoomStart: t5[0], onPanZoom: t5[1], onPanZoomEnd: t5[2], zoomOnScroll: t5[5], zoomOnDoubleClick: t5[6], zoomOnPinch: t5[7], panOnScroll: t5[9], panOnDrag: t5[10], panOnScrollSpeed: 0.5, panOnScrollMode: t5[3] || lr.Free, zoomActivationKeyPressed: t5[14], preventScrolling: "boolean" != typeof t5[4] || t5[4], noPanClassName: "nopan", noWheelClassName: "nowheel", userSelectionActive: !!t5[15], translateExtent: t5[16], lib: t5[17], paneClickDistance: t5[8], onTransformChange: t5[29] });
  }, i(t5) {
    o2 || (ft(l2, t5), o2 = true);
  }, o(t5) {
    gt(l2, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), l2 && l2.d(t5), i2 = false, s2();
  } };
}
function Xa(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, c2, u2, h2, p2, f2, { $$slots: g2 = {}, $$scope: m2 } = e2, { initialViewport: y2 } = e2, { onMoveStart: w2 } = e2, { onMove: v2 } = e2, { onMoveEnd: x2 } = e2, { panOnScrollMode: b2 } = e2, { preventScrolling: k2 } = e2, { zoomOnScroll: _2 } = e2, { zoomOnDoubleClick: S2 } = e2, { zoomOnPinch: E2 } = e2, { panOnDrag: C2 } = e2, { panOnScroll: O2 } = e2, { paneClickDistance: P2 } = e2;
  const { viewport: M2, panZoom: z2, selectionRect: N2, minZoom: L2, maxZoom: I2, dragging: D2, translateExtent: A2, lib: T2, panActivationKeyPressed: H2, zoomActivationKeyPressed: V2, viewportInitialized: F2 } = Va();
  d(t4, N2, (t5) => n2(15, h2 = t5)), d(t4, L2, (t5) => n2(12, l2 = t5)), d(t4, I2, (t5) => n2(13, c2 = t5)), d(t4, A2, (t5) => n2(16, p2 = t5)), d(t4, T2, (t5) => n2(17, f2 = t5)), d(t4, H2, (t5) => n2(33, a2 = t5)), d(t4, V2, (t5) => n2(14, u2 = t5)), d(t4, F2, (t5) => n2(36, s2 = t5));
  return Z(() => {
    $(F2, s2 = true, s2);
  }), t4.$$set = (t5) => {
    "initialViewport" in t5 && n2(30, y2 = t5.initialViewport), "onMoveStart" in t5 && n2(0, w2 = t5.onMoveStart), "onMove" in t5 && n2(1, v2 = t5.onMove), "onMoveEnd" in t5 && n2(2, x2 = t5.onMoveEnd), "panOnScrollMode" in t5 && n2(3, b2 = t5.panOnScrollMode), "preventScrolling" in t5 && n2(4, k2 = t5.preventScrolling), "zoomOnScroll" in t5 && n2(5, _2 = t5.zoomOnScroll), "zoomOnDoubleClick" in t5 && n2(6, S2 = t5.zoomOnDoubleClick), "zoomOnPinch" in t5 && n2(7, E2 = t5.zoomOnPinch), "panOnDrag" in t5 && n2(31, C2 = t5.panOnDrag), "panOnScroll" in t5 && n2(32, O2 = t5.panOnScroll), "paneClickDistance" in t5 && n2(8, P2 = t5.paneClickDistance), "$$scope" in t5 && n2(34, m2 = t5.$$scope);
  }, t4.$$.update = () => {
    1073741824 & t4.$$.dirty[0] && n2(11, o2 = y2 || { x: 0, y: 0, zoom: 1 }), 5 & t4.$$.dirty[1] && n2(10, i2 = a2 || C2), 6 & t4.$$.dirty[1] && n2(9, r2 = a2 || O2);
  }, [w2, v2, x2, b2, k2, _2, S2, E2, P2, r2, i2, o2, l2, c2, u2, h2, p2, f2, M2, z2, N2, L2, I2, D2, A2, T2, H2, V2, F2, (t5) => M2.set({ x: t5[0], y: t5[1], zoom: t5[2] }), y2, C2, O2, a2, m2, g2];
}
var Ya = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Xa, Wa, s, { initialViewport: 30, onMoveStart: 0, onMove: 1, onMoveEnd: 2, panOnScrollMode: 3, preventScrolling: 4, zoomOnScroll: 5, zoomOnDoubleClick: 6, zoomOnPinch: 7, panOnDrag: 31, panOnScroll: 32, paneClickDistance: 8 }, null, [-1, -1]);
  }
};
function Ra(t4) {
  let e2, n2, o2, s2;
  const a2 = t4[28].default, l2 = u(a2, t4, t4[27], null);
  return { c() {
    e2 = E("div"), l2 && l2.c(), N(e2, "class", "svelte-flow__pane svelte-1esy7hx"), W(e2, "draggable", true === t4[0] || Array.isArray(t4[0]) && t4[0].includes(0)), W(e2, "dragging", t4[4]), W(e2, "selection", t4[1]);
  }, m(i2, a3) {
    k(i2, e2, a3), l2 && l2.m(e2, null), t4[29](e2), n2 = true, o2 || (s2 = [z(e2, "click", function() {
      r(t4[3] ? void 0 : Za(t4[15], t4[2])) && (t4[3] ? void 0 : Za(t4[15], t4[2])).apply(this, arguments);
    }), z(e2, "pointerdown", function() {
      r(t4[3] ? t4[16] : void 0) && (t4[3] ? t4[16] : void 0).apply(this, arguments);
    }), z(e2, "pointermove", function() {
      r(t4[3] ? t4[17] : void 0) && (t4[3] ? t4[17] : void 0).apply(this, arguments);
    }), z(e2, "pointerup", function() {
      r(t4[3] ? t4[18] : void 0) && (t4[3] ? t4[18] : void 0).apply(this, arguments);
    }), z(e2, "contextmenu", function() {
      r(Za(t4[19], t4[2])) && Za(t4[19], t4[2]).apply(this, arguments);
    })], o2 = true);
  }, p(o3, i2) {
    t4 = o3, l2 && l2.p && (!n2 || 134217728 & i2[0]) && f(l2, a2, t4, t4[27], n2 ? p(a2, t4[27], i2, null) : g(t4[27]), null), (!n2 || 1 & i2[0]) && W(e2, "draggable", true === t4[0] || Array.isArray(t4[0]) && t4[0].includes(0)), (!n2 || 16 & i2[0]) && W(e2, "dragging", t4[4]), (!n2 || 2 & i2[0]) && W(e2, "selection", t4[1]);
  }, i(t5) {
    n2 || (ft(l2, t5), n2 = true);
  }, o(t5) {
    gt(l2, t5), n2 = false;
  }, d(n3) {
    n3 && _(e2), l2 && l2.d(n3), t4[29](null), o2 = false, i(s2);
  } };
}
function Za(t4, e2) {
  return (n2) => {
    n2.target === e2 && (t4 == null ? void 0 : t4(n2));
  };
}
function Ba(t4) {
  return (e2) => {
    const n2 = t4.includes(e2.id);
    return e2.selected !== n2 && (e2.selected = n2), e2;
  };
}
function Ka(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, c2, u2, h2, p2, f2, g2, m2, { $$slots: y2 = {}, $$scope: w2 } = e2, { panOnDrag: v2 } = e2, { selectionOnDrag: x2 } = e2;
  const b2 = K(), { nodes: k2, nodeLookup: _2, edges: S2, viewport: E2, dragging: C2, elementsSelectable: O2, selectionRect: P2, selectionRectMode: M2, selectionKeyPressed: z2, selectionMode: N2, panActivationKeyPressed: L2, unselectNodesAndEdges: I2 } = Va();
  let D2;
  d(t4, _2, (t5) => n2(36, h2 = t5)), d(t4, S2, (t5) => n2(33, l2 = t5)), d(t4, E2, (t5) => n2(35, u2 = t5)), d(t4, C2, (t5) => n2(4, m2 = t5)), d(t4, O2, (t5) => n2(25, f2 = t5)), d(t4, P2, (t5) => n2(24, p2 = t5)), d(t4, M2, (t5) => n2(23, a2 = t5)), d(t4, z2, (t5) => n2(22, s2 = t5)), d(t4, N2, (t5) => n2(34, c2 = t5)), d(t4, L2, (t5) => n2(26, g2 = t5));
  let A2 = null, T2 = [], H2 = false;
  function V2(t5) {
    H2 ? H2 = false : (b2("paneclick", { event: t5 }), I2(), M2.set(null));
  }
  return t4.$$set = (t5) => {
    "panOnDrag" in t5 && n2(0, v2 = t5.panOnDrag), "selectionOnDrag" in t5 && n2(20, x2 = t5.selectionOnDrag), "$$scope" in t5 && n2(27, w2 = t5.$$scope);
  }, t4.$$.update = () => {
    67108865 & t4.$$.dirty[0] && n2(21, o2 = g2 || v2), 24117248 & t4.$$.dirty[0] && n2(1, i2 = s2 || p2 || x2 && true !== o2), 41943042 & t4.$$.dirty[0] && n2(3, r2 = f2 && (i2 || "user" === a2));
  }, [v2, i2, D2, r2, m2, _2, S2, E2, C2, O2, P2, M2, z2, N2, L2, V2, function(t5) {
    var _a2, _b;
    if (A2 = D2.getBoundingClientRect(), !O2 || !i2 || 0 !== t5.button || t5.target !== D2 || !A2) return;
    (_b = (_a2 = t5.target) == null ? void 0 : _a2.setPointerCapture) == null ? void 0 : _b.call(_a2, t5.pointerId);
    const { x: e3, y: n3 } = ts(t5, A2);
    I2(), P2.set({ width: 0, height: 0, startX: e3, startY: n3, x: e3, y: n3 });
  }, function(t5) {
    var _a2, _b;
    if (!i2 || !A2 || !p2) return;
    H2 = true;
    const e3 = ts(t5, A2), n3 = (_a2 = p2.startX) != null ? _a2 : 0, o3 = (_b = p2.startY) != null ? _b : 0, r3 = __spreadProps(__spreadValues({}, p2), { x: e3.x < n3 ? e3.x : n3, y: e3.y < o3 ? e3.y : o3, width: Math.abs(e3.x - n3), height: Math.abs(e3.y - o3) }), s3 = T2.map((t6) => t6.id), a3 = br(T2, l2).map((t6) => t6.id);
    T2 = xr(h2, r3, [u2.x, u2.y, u2.zoom], c2 === cr.Partial, true);
    const d2 = br(T2, l2).map((t6) => t6.id), f3 = T2.map((t6) => t6.id);
    (s3.length !== f3.length || f3.some((t6) => !s3.includes(t6))) && k2.update((t6) => t6.map(Ba(f3))), (a3.length !== d2.length || d2.some((t6) => !a3.includes(t6))) && S2.update((t6) => t6.map(Ba(d2))), M2.set("user"), P2.set(r3);
  }, function(t5) {
    var _a2, _b;
    0 === t5.button && ((_b = (_a2 = t5.target) == null ? void 0 : _a2.releasePointerCapture) == null ? void 0 : _b.call(_a2, t5.pointerId), i2 || "user" !== a2 || t5.target !== D2 || (V2 == null ? void 0 : V2(t5)), P2.set(null), T2.length > 0 && $(M2, a2 = "nodes", a2), s2 && (H2 = false));
  }, (t5) => {
    Array.isArray(o2) && (o2 == null ? void 0 : o2.includes(2)) ? t5.preventDefault() : b2("panecontextmenu", { event: t5 });
  }, x2, o2, s2, a2, p2, f2, g2, w2, y2, function(t5) {
    U[t5 ? "unshift" : "push"](() => {
      D2 = t5, n2(2, D2);
    });
  }];
}
var Ga = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Ka, Ra, s, { panOnDrag: 0, selectionOnDrag: 20 }, null, [-1, -1]);
  }
};
function ja(t4) {
  let e2, n2;
  const o2 = t4[3].default, i2 = u(o2, t4, t4[2], null);
  return { c() {
    e2 = E("div"), i2 && i2.c(), N(e2, "class", "svelte-flow__viewport xyflow__viewport svelte-1floaup"), A(e2, "transform", "translate(" + t4[0].x + "px, " + t4[0].y + "px) scale(" + t4[0].zoom + ")");
  }, m(t5, o3) {
    k(t5, e2, o3), i2 && i2.m(e2, null), n2 = true;
  }, p(t5, [r2]) {
    i2 && i2.p && (!n2 || 4 & r2) && f(i2, o2, t5, t5[2], n2 ? p(o2, t5[2], r2, null) : g(t5[2]), null), (!n2 || 1 & r2) && A(e2, "transform", "translate(" + t5[0].x + "px, " + t5[0].y + "px) scale(" + t5[0].zoom + ")");
  }, i(t5) {
    n2 || (ft(i2, t5), n2 = true);
  }, o(t5) {
    gt(i2, t5), n2 = false;
  }, d(t5) {
    t5 && _(e2), i2 && i2.d(t5);
  } };
}
function qa(t4, e2, n2) {
  let o2, { $$slots: i2 = {}, $$scope: r2 } = e2;
  const { viewport: s2 } = Va();
  return d(t4, s2, (t5) => n2(0, o2 = t5)), t4.$$set = (t5) => {
    "$$scope" in t5 && n2(2, r2 = t5.$$scope);
  }, [o2, s2, r2, i2];
}
var Qa = class extends Et {
  constructor(t4) {
    super(), St(this, t4, qa, ja, s, {});
  }
};
function Ua(t4, e2) {
  const { store: n2, onDrag: o2, onDragStart: i2, onDragStop: r2, onNodeMouseDown: s2 } = e2, a2 = Ps({ onDrag: o2, onDragStart: i2, onDragStop: r2, onNodeMouseDown: s2, getStoreItems: () => {
    const t5 = c(n2.snapGrid), e3 = c(n2.viewport);
    return { nodes: c(n2.nodes), nodeLookup: c(n2.nodeLookup), edges: c(n2.edges), nodeExtent: c(n2.nodeExtent), snapGrid: t5 || [0, 0], snapToGrid: !!t5, nodeOrigin: c(n2.nodeOrigin), multiSelectionActive: c(n2.multiselectionKeyPressed), domNode: c(n2.domNode), transform: [e3.x, e3.y, e3.zoom], autoPanOnNodeDrag: c(n2.autoPanOnNodeDrag), nodesDraggable: c(n2.nodesDraggable), selectNodesOnDrag: c(n2.selectNodesOnDrag), nodeDragThreshold: c(n2.nodeDragThreshold), unselectNodesAndEdges: n2.unselectNodesAndEdges, updateNodePositions: n2.updateNodePositions, panBy: n2.panBy };
  } });
  function l2(t5, e3) {
    e3.disabled ? a2.destroy() : a2.update({ domNode: t5, noDragClassName: e3.noDragClass, handleSelector: e3.handleSelector, nodeId: e3.nodeId, isSelectable: e3.isSelectable, nodeClickDistance: e3.nodeClickDistance });
  }
  return l2(t4, e2), { update(e3) {
    l2(t4, e3);
  }, destroy() {
    a2.destroy();
  } };
}
function Ja(t4) {
  let e2, n2, o2, s2, a2, l2, c2, d2, u2 = `translate(${t4[12]}px, ${t4[13]}px)`;
  var h2 = t4[27];
  function p2(t5, e3) {
    return { props: { data: t5[2], id: t5[1], selected: t5[3], selectable: t5[5], deletable: t5[7], sourcePosition: t5[14], targetPosition: t5[15], zIndex: t5[16], dragging: t5[9], draggable: t5[4], dragHandle: t5[19], parentId: t5[21], type: t5[25], isConnectable: t5[28], positionAbsoluteX: t5[12], positionAbsoluteY: t5[13], width: t5[17], height: t5[18] } };
  }
  return h2 && (n2 = X(h2, p2(t4))), { c() {
    var _a2;
    e2 = E("div"), n2 && bt(n2.$$.fragment), N(e2, "data-id", t4[1]), N(e2, "class", o2 = me(["svelte-flow__node", `svelte-flow__node-${t4[25]}`, t4[23]])), N(e2, "style", s2 = ((_a2 = t4[10]) != null ? _a2 : "") + ";" + t4[26].width + t4[26].height), W(e2, "dragging", t4[9]), W(e2, "selected", t4[3]), W(e2, "draggable", t4[4]), W(e2, "connectable", t4[6]), W(e2, "selectable", t4[5]), W(e2, "nopan", t4[4]), W(e2, "parent", t4[11]), A(e2, "z-index", t4[16]), A(e2, "transform", u2), A(e2, "visibility", t4[20] ? "visible" : "hidden");
  }, m(o3, i2) {
    k(o3, e2, i2), n2 && kt(n2, e2, null), t4[50](e2), l2 = true, c2 || (d2 = [v(a2 = Ua.call(null, e2, { nodeId: t4[1], isSelectable: t4[5], disabled: false, handleSelector: t4[19], noDragClass: "nodrag", nodeClickDistance: t4[22], onNodeMouseDown: t4[31], onDrag: t4[47], onDragStart: t4[48], onDragStop: t4[49], store: t4[29] })), z(e2, "click", t4[34]), z(e2, "mouseenter", t4[51]), z(e2, "mouseleave", t4[52]), z(e2, "mousemove", t4[53]), z(e2, "contextmenu", t4[54])], c2 = true);
  }, p(t5, i2) {
    var _a2;
    if (134217728 & i2[0] && h2 !== (h2 = t5[27])) {
      if (n2) {
        ht();
        const t6 = n2;
        gt(t6.$$.fragment, 1, 0, () => {
          _t(t6, 1);
        }), pt();
      }
      h2 ? (n2 = X(h2, p2(t5)), bt(n2.$$.fragment), ft(n2.$$.fragment, 1), kt(n2, e2, null)) : n2 = null;
    } else if (h2) {
      const e3 = {};
      4 & i2[0] && (e3.data = t5[2]), 2 & i2[0] && (e3.id = t5[1]), 8 & i2[0] && (e3.selected = t5[3]), 32 & i2[0] && (e3.selectable = t5[5]), 128 & i2[0] && (e3.deletable = t5[7]), 16384 & i2[0] && (e3.sourcePosition = t5[14]), 32768 & i2[0] && (e3.targetPosition = t5[15]), 65536 & i2[0] && (e3.zIndex = t5[16]), 512 & i2[0] && (e3.dragging = t5[9]), 16 & i2[0] && (e3.draggable = t5[4]), 524288 & i2[0] && (e3.dragHandle = t5[19]), 2097152 & i2[0] && (e3.parentId = t5[21]), 33554432 & i2[0] && (e3.type = t5[25]), 268435456 & i2[0] && (e3.isConnectable = t5[28]), 4096 & i2[0] && (e3.positionAbsoluteX = t5[12]), 8192 & i2[0] && (e3.positionAbsoluteY = t5[13]), 131072 & i2[0] && (e3.width = t5[17]), 262144 & i2[0] && (e3.height = t5[18]), n2.$set(e3);
    }
    (!l2 || 2 & i2[0]) && N(e2, "data-id", t5[1]), (!l2 || 41943040 & i2[0] && o2 !== (o2 = me(["svelte-flow__node", `svelte-flow__node-${t5[25]}`, t5[23]]))) && N(e2, "class", o2), (!l2 || 67109888 & i2[0] && s2 !== (s2 = ((_a2 = t5[10]) != null ? _a2 : "") + ";" + t5[26].width + t5[26].height)) && N(e2, "style", s2), a2 && r(a2.update) && 4718626 & i2[0] && a2.update.call(null, { nodeId: t5[1], isSelectable: t5[5], disabled: false, handleSelector: t5[19], noDragClass: "nodrag", nodeClickDistance: t5[22], onNodeMouseDown: t5[31], onDrag: t5[47], onDragStart: t5[48], onDragStop: t5[49], store: t5[29] }), (!l2 || 41943552 & i2[0]) && W(e2, "dragging", t5[9]), (!l2 || 41943048 & i2[0]) && W(e2, "selected", t5[3]), (!l2 || 41943056 & i2[0]) && W(e2, "draggable", t5[4]), (!l2 || 41943104 & i2[0]) && W(e2, "connectable", t5[6]), (!l2 || 41943072 & i2[0]) && W(e2, "selectable", t5[5]), (!l2 || 41943056 & i2[0]) && W(e2, "nopan", t5[4]), (!l2 || 41945088 & i2[0]) && W(e2, "parent", t5[11]);
    const c3 = 67109888 & i2[0];
    (67175424 & i2[0] || c3) && A(e2, "z-index", t5[16]), (67122176 & i2[0] && u2 !== (u2 = `translate(${t5[12]}px, ${t5[13]}px)`) || c3) && A(e2, "transform", u2), (68158464 & i2[0] || c3) && A(e2, "visibility", t5[20] ? "visible" : "hidden");
  }, i(t5) {
    l2 || (n2 && ft(n2.$$.fragment, t5), l2 = true);
  }, o(t5) {
    n2 && gt(n2.$$.fragment, t5), l2 = false;
  }, d(o3) {
    o3 && _(e2), n2 && _t(n2), t4[50](null), c2 = false, i(d2);
  } };
}
function tl(t4) {
  let e2, n2, o2 = !t4[8] && Ja(t4);
  return { c() {
    o2 && o2.c(), e2 = M();
  }, m(t5, i2) {
    o2 && o2.m(t5, i2), k(t5, e2, i2), n2 = true;
  }, p(t5, n3) {
    t5[8] ? o2 && (ht(), gt(o2, 1, 1, () => {
      o2 = null;
    }), pt()) : o2 ? (o2.p(t5, n3), 256 & n3[0] && ft(o2, 1)) : (o2 = Ja(t5), o2.c(), ft(o2, 1), o2.m(e2.parentNode, e2));
  }, i(t5) {
    n2 || (ft(o2), n2 = true);
  }, o(t5) {
    gt(o2), n2 = false;
  }, d(t5) {
    t5 && _(e2), o2 && o2.d(t5);
  } };
}
function el(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, { node: u2 } = e2, { id: h2 } = e2, { data: p2 = {} } = e2, { selected: f2 = false } = e2, { draggable: g2 } = e2, { selectable: m2 } = e2, { connectable: y2 = true } = e2, { deletable: w2 = true } = e2, { hidden: $2 = false } = e2, { dragging: v2 = false } = e2, { resizeObserver: x2 = null } = e2, { style: b2 } = e2, { type: k2 = "default" } = e2, { isParent: _2 = false } = e2, { positionX: S2 } = e2, { positionY: E2 } = e2, { sourcePosition: C2 } = e2, { targetPosition: O2 } = e2, { zIndex: P2 } = e2, { measuredWidth: M2 } = e2, { measuredHeight: z2 } = e2, { initialWidth: N2 } = e2, { initialHeight: L2 } = e2, { width: I2 } = e2, { height: D2 } = e2, { dragHandle: A2 } = e2, { initialized: T2 = false } = e2, { parentId: H2 } = e2, { nodeClickDistance: V2 } = e2, { class: F2 = "" } = e2;
  const W2 = Va(), { nodeTypes: X2, nodeDragThreshold: Y2, selectNodesOnDrag: R2, handleNodeSelection: Z2, updateNodeInternals: j2 } = W2;
  let q2;
  d(t4, X2, (t5) => n2(46, a2 = t5));
  let Q2 = null;
  const J2 = K(), tt2 = fe(y2);
  let et2, nt2, ot2;
  d(t4, tt2, (t5) => n2(28, l2 = t5)), G("svelteflow__node_id", h2), G("svelteflow__node_connectable", tt2), B(() => {
    Q2 && (x2 == null ? void 0 : x2.unobserve(Q2));
  });
  return t4.$$set = (t5) => {
    "node" in t5 && n2(0, u2 = t5.node), "id" in t5 && n2(1, h2 = t5.id), "data" in t5 && n2(2, p2 = t5.data), "selected" in t5 && n2(3, f2 = t5.selected), "draggable" in t5 && n2(4, g2 = t5.draggable), "selectable" in t5 && n2(5, m2 = t5.selectable), "connectable" in t5 && n2(6, y2 = t5.connectable), "deletable" in t5 && n2(7, w2 = t5.deletable), "hidden" in t5 && n2(8, $2 = t5.hidden), "dragging" in t5 && n2(9, v2 = t5.dragging), "resizeObserver" in t5 && n2(35, x2 = t5.resizeObserver), "style" in t5 && n2(10, b2 = t5.style), "type" in t5 && n2(36, k2 = t5.type), "isParent" in t5 && n2(11, _2 = t5.isParent), "positionX" in t5 && n2(12, S2 = t5.positionX), "positionY" in t5 && n2(13, E2 = t5.positionY), "sourcePosition" in t5 && n2(14, C2 = t5.sourcePosition), "targetPosition" in t5 && n2(15, O2 = t5.targetPosition), "zIndex" in t5 && n2(16, P2 = t5.zIndex), "measuredWidth" in t5 && n2(37, M2 = t5.measuredWidth), "measuredHeight" in t5 && n2(38, z2 = t5.measuredHeight), "initialWidth" in t5 && n2(39, N2 = t5.initialWidth), "initialHeight" in t5 && n2(40, L2 = t5.initialHeight), "width" in t5 && n2(17, I2 = t5.width), "height" in t5 && n2(18, D2 = t5.height), "dragHandle" in t5 && n2(19, A2 = t5.dragHandle), "initialized" in t5 && n2(20, T2 = t5.initialized), "parentId" in t5 && n2(21, H2 = t5.parentId), "nodeClickDistance" in t5 && n2(22, V2 = t5.nodeClickDistance), "class" in t5 && n2(23, F2 = t5.class);
  }, t4.$$.update = () => {
    if (32 & t4.$$.dirty[1] && n2(25, o2 = k2 || "default"), 33554432 & t4.$$.dirty[0] | 32768 & t4.$$.dirty[1] && n2(45, i2 = !!a2[o2]), 33554432 & t4.$$.dirty[0] | 32768 & t4.$$.dirty[1] && n2(27, r2 = a2[o2] || js), 16416 & t4.$$.dirty[1] && (i2 || console.warn("003", nr(k2))), 393216 & t4.$$.dirty[0] | 960 & t4.$$.dirty[1] && n2(26, s2 = function({ width: t5, height: e3, initialWidth: n3, initialHeight: o3, measuredWidth: i3, measuredHeight: r3 }) {
      if (void 0 === i3 && void 0 === r3) {
        const i4 = t5 != null ? t5 : n3, r4 = e3 != null ? e3 : o3;
        return { width: i4 ? `width:${i4}px;` : "", height: r4 ? `height:${r4}px;` : "" };
      }
      return { width: t5 ? `width:${t5}px;` : "", height: e3 ? `height:${e3}px;` : "" };
    }({ width: I2, height: D2, initialWidth: N2, initialHeight: L2, measuredWidth: M2, measuredHeight: z2 })), 64 & t4.$$.dirty[0] && tt2.set(!!y2), 50380802 & t4.$$.dirty[0] | 14336 & t4.$$.dirty[1]) {
      (et2 && o2 !== et2 || nt2 && C2 !== nt2 || ot2 && O2 !== ot2) && requestAnimationFrame(() => j2(/* @__PURE__ */ new Map([[h2, { id: h2, nodeElement: q2, force: true }]]))), n2(42, et2 = o2), n2(43, nt2 = C2), n2(44, ot2 = O2);
    }
    17825792 & t4.$$.dirty[0] | 1040 & t4.$$.dirty[1] && (!x2 || q2 === Q2 && T2 || (Q2 && x2.unobserve(Q2), q2 && x2.observe(q2), n2(41, Q2 = q2)));
  }, [u2, h2, p2, f2, g2, m2, y2, w2, $2, v2, b2, _2, S2, E2, C2, O2, P2, I2, D2, A2, T2, H2, V2, F2, q2, o2, s2, r2, l2, W2, X2, Z2, J2, tt2, function(t5) {
    m2 && (!c(R2) || !g2 || c(Y2) > 0) && Z2(h2), J2("nodeclick", { node: u2.internals.userNode, event: t5 });
  }, x2, k2, M2, z2, N2, L2, Q2, et2, nt2, ot2, i2, a2, (t5, e3, n3, o3) => {
    J2("nodedrag", { event: t5, targetNode: n3, nodes: o3 });
  }, (t5, e3, n3, o3) => {
    J2("nodedragstart", { event: t5, targetNode: n3, nodes: o3 });
  }, (t5, e3, n3, o3) => {
    J2("nodedragstop", { event: t5, targetNode: n3, nodes: o3 });
  }, function(t5) {
    U[t5 ? "unshift" : "push"](() => {
      q2 = t5, n2(24, q2);
    });
  }, (t5) => J2("nodemouseenter", { node: u2, event: t5 }), (t5) => J2("nodemouseleave", { node: u2, event: t5 }), (t5) => J2("nodemousemove", { node: u2, event: t5 }), (t5) => J2("nodecontextmenu", { node: u2, event: t5 })];
}
var nl = class extends Et {
  constructor(t4) {
    super(), St(this, t4, el, tl, a, { node: 0, id: 1, data: 2, selected: 3, draggable: 4, selectable: 5, connectable: 6, deletable: 7, hidden: 8, dragging: 9, resizeObserver: 35, style: 10, type: 36, isParent: 11, positionX: 12, positionY: 13, sourcePosition: 14, targetPosition: 15, zIndex: 16, measuredWidth: 37, measuredHeight: 38, initialWidth: 39, initialHeight: 40, width: 17, height: 18, dragHandle: 19, initialized: 20, parentId: 21, nodeClickDistance: 22, class: 23 }, null, [-1, -1]);
  }
};
var { Map: ol } = x;
function il(t4, e2, n2) {
  const o2 = t4.slice();
  return o2[21] = e2[n2], o2;
}
function rl(t4, e2) {
  var _a2, _b, _c2;
  let n2, o2, i2;
  return o2 = new nl({ props: { node: e2[21], id: e2[21].id, data: e2[21].data, selected: !!e2[21].selected, hidden: !!e2[21].hidden, draggable: !!(e2[21].draggable || e2[2] && void 0 === e2[21].draggable), selectable: !!(e2[21].selectable || e2[3] && void 0 === e2[21].selectable), connectable: !!(e2[21].connectable || e2[4] && void 0 === e2[21].connectable), deletable: (_a2 = e2[21].deletable) != null ? _a2 : true, positionX: e2[21].internals.positionAbsolute.x, positionY: e2[21].internals.positionAbsolute.y, isParent: e2[5].has(e2[21].id), style: e2[21].style, class: e2[21].class, type: (_b = e2[21].type) != null ? _b : "default", sourcePosition: e2[21].sourcePosition, targetPosition: e2[21].targetPosition, dragging: e2[21].dragging, zIndex: (_c2 = e2[21].internals.z) != null ? _c2 : 0, dragHandle: e2[21].dragHandle, initialized: jr(e2[21]), width: e2[21].width, height: e2[21].height, initialWidth: e2[21].initialWidth, initialHeight: e2[21].initialHeight, measuredWidth: e2[21].measured.width, measuredHeight: e2[21].measured.height, parentId: e2[21].parentId, resizeObserver: e2[11], nodeClickDistance: e2[0] } }), o2.$on("nodeclick", e2[12]), o2.$on("nodemouseenter", e2[13]), o2.$on("nodemousemove", e2[14]), o2.$on("nodemouseleave", e2[15]), o2.$on("nodedrag", e2[16]), o2.$on("nodedragstart", e2[17]), o2.$on("nodedragstop", e2[18]), o2.$on("nodecontextmenu", e2[19]), { key: t4, first: null, c() {
    n2 = M(), bt(o2.$$.fragment), this.first = n2;
  }, m(t5, e3) {
    k(t5, n2, e3), kt(o2, t5, e3), i2 = true;
  }, p(t5, n3) {
    var _a3, _b2, _c3;
    e2 = t5;
    const i3 = {};
    2 & n3 && (i3.node = e2[21]), 2 & n3 && (i3.id = e2[21].id), 2 & n3 && (i3.data = e2[21].data), 2 & n3 && (i3.selected = !!e2[21].selected), 2 & n3 && (i3.hidden = !!e2[21].hidden), 6 & n3 && (i3.draggable = !!(e2[21].draggable || e2[2] && void 0 === e2[21].draggable)), 10 & n3 && (i3.selectable = !!(e2[21].selectable || e2[3] && void 0 === e2[21].selectable)), 18 & n3 && (i3.connectable = !!(e2[21].connectable || e2[4] && void 0 === e2[21].connectable)), 2 & n3 && (i3.deletable = (_a3 = e2[21].deletable) != null ? _a3 : true), 2 & n3 && (i3.positionX = e2[21].internals.positionAbsolute.x), 2 & n3 && (i3.positionY = e2[21].internals.positionAbsolute.y), 34 & n3 && (i3.isParent = e2[5].has(e2[21].id)), 2 & n3 && (i3.style = e2[21].style), 2 & n3 && (i3.class = e2[21].class), 2 & n3 && (i3.type = (_b2 = e2[21].type) != null ? _b2 : "default"), 2 & n3 && (i3.sourcePosition = e2[21].sourcePosition), 2 & n3 && (i3.targetPosition = e2[21].targetPosition), 2 & n3 && (i3.dragging = e2[21].dragging), 2 & n3 && (i3.zIndex = (_c3 = e2[21].internals.z) != null ? _c3 : 0), 2 & n3 && (i3.dragHandle = e2[21].dragHandle), 2 & n3 && (i3.initialized = jr(e2[21])), 2 & n3 && (i3.width = e2[21].width), 2 & n3 && (i3.height = e2[21].height), 2 & n3 && (i3.initialWidth = e2[21].initialWidth), 2 & n3 && (i3.initialHeight = e2[21].initialHeight), 2 & n3 && (i3.measuredWidth = e2[21].measured.width), 2 & n3 && (i3.measuredHeight = e2[21].measured.height), 2 & n3 && (i3.parentId = e2[21].parentId), 1 & n3 && (i3.nodeClickDistance = e2[0]), o2.$set(i3);
  }, i(t5) {
    i2 || (ft(o2.$$.fragment, t5), i2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), i2 = false;
  }, d(t5) {
    t5 && _(n2), _t(o2, t5);
  } };
}
function sl(t4) {
  let e2, n2, o2 = [], i2 = new ol(), r2 = mt(t4[1]);
  const s2 = (t5) => t5[21].id;
  for (let e3 = 0; e3 < r2.length; e3 += 1) {
    let n3 = il(t4, r2, e3), a2 = s2(n3);
    i2.set(a2, o2[e3] = rl(a2, n3));
  }
  return { c() {
    e2 = E("div");
    for (let t5 = 0; t5 < o2.length; t5 += 1) o2[t5].c();
    N(e2, "class", "svelte-flow__nodes svelte-tf4uy4");
  }, m(t5, i3) {
    k(t5, e2, i3);
    for (let t6 = 0; t6 < o2.length; t6 += 1) o2[t6] && o2[t6].m(e2, null);
    n2 = true;
  }, p(t5, [n3]) {
    2111 & n3 && (r2 = mt(t5[1]), ht(), o2 = wt(o2, n3, s2, 1, t5, r2, i2, e2, yt, rl, null, il), pt());
  }, i(t5) {
    if (!n2) {
      for (let t6 = 0; t6 < r2.length; t6 += 1) ft(o2[t6]);
      n2 = true;
    }
  }, o(t5) {
    for (let t6 = 0; t6 < o2.length; t6 += 1) gt(o2[t6]);
    n2 = false;
  }, d(t5) {
    t5 && _(e2);
    for (let t6 = 0; t6 < o2.length; t6 += 1) o2[t6].d();
  } };
}
function al(t4, e2, n2) {
  let o2, i2, r2, s2, a2, { nodeClickDistance: l2 = 0 } = e2;
  const { visibleNodes: c2, nodesDraggable: u2, nodesConnectable: h2, elementsSelectable: p2, updateNodeInternals: f2, parentLookup: g2 } = Va();
  d(t4, c2, (t5) => n2(1, o2 = t5)), d(t4, u2, (t5) => n2(2, i2 = t5)), d(t4, h2, (t5) => n2(4, s2 = t5)), d(t4, p2, (t5) => n2(3, r2 = t5)), d(t4, g2, (t5) => n2(5, a2 = t5));
  const m2 = "undefined" == typeof ResizeObserver ? null : new ResizeObserver((t5) => {
    const e3 = /* @__PURE__ */ new Map();
    t5.forEach((t6) => {
      const n3 = t6.target.getAttribute("data-id");
      e3.set(n3, { id: n3, nodeElement: t6.target, force: true });
    }), f2(e3);
  });
  return B(() => {
    m2 == null ? void 0 : m2.disconnect();
  }), t4.$$set = (t5) => {
    "nodeClickDistance" in t5 && n2(0, l2 = t5.nodeClickDistance);
  }, [l2, o2, i2, r2, s2, a2, c2, u2, h2, p2, g2, m2, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }];
}
var ll = class extends Et {
  constructor(t4) {
    super(), St(this, t4, al, sl, s, { nodeClickDistance: 0 });
  }
};
function cl(t4) {
  let e2, n2, o2, r2, s2, a2, l2, c2;
  var d2 = t4[27];
  function u2(t5, e3) {
    var _a2;
    return { props: { id: t5[0], source: t5[1], target: t5[2], sourceX: t5[14], sourceY: t5[15], targetX: t5[16], targetY: t5[17], sourcePosition: t5[18], targetPosition: t5[19], animated: t5[6], selected: t5[7], label: t5[10], labelStyle: t5[11], data: t5[3], style: t5[4], interactionWidth: t5[21], selectable: t5[24], deletable: (_a2 = t5[8]) != null ? _a2 : true, type: t5[23], sourceHandleId: t5[12], targetHandleId: t5[13], markerStart: t5[26], markerEnd: t5[25] } };
  }
  return d2 && (o2 = X(d2, u2(t4))), { c() {
    e2 = C("svg"), n2 = C("g"), o2 && bt(o2.$$.fragment), N(n2, "class", r2 = me(["svelte-flow__edge", t4[22]])), N(n2, "data-id", t4[0]), N(n2, "aria-label", s2 = null === t4[20] ? void 0 : t4[20] ? t4[20] : `Edge from ${t4[1]} to ${t4[2]}`), N(n2, "role", "img"), W(n2, "animated", t4[6]), W(n2, "selected", t4[7]), W(n2, "selectable", t4[24]), A(e2, "z-index", t4[5]);
  }, m(i2, r3) {
    k(i2, e2, r3), b(e2, n2), o2 && kt(o2, n2, null), a2 = true, l2 || (c2 = [z(n2, "click", t4[32]), z(n2, "contextmenu", t4[41]), z(n2, "mouseenter", t4[42]), z(n2, "mouseleave", t4[43])], l2 = true);
  }, p(t5, i2) {
    var _a2;
    if (134217728 & i2[0] && d2 !== (d2 = t5[27])) {
      if (o2) {
        ht();
        const t6 = o2;
        gt(t6.$$.fragment, 1, 0, () => {
          _t(t6, 1);
        }), pt();
      }
      d2 ? (o2 = X(d2, u2(t5)), bt(o2.$$.fragment), ft(o2.$$.fragment, 1), kt(o2, n2, null)) : o2 = null;
    } else if (d2) {
      const e3 = {};
      1 & i2[0] && (e3.id = t5[0]), 2 & i2[0] && (e3.source = t5[1]), 4 & i2[0] && (e3.target = t5[2]), 16384 & i2[0] && (e3.sourceX = t5[14]), 32768 & i2[0] && (e3.sourceY = t5[15]), 65536 & i2[0] && (e3.targetX = t5[16]), 131072 & i2[0] && (e3.targetY = t5[17]), 262144 & i2[0] && (e3.sourcePosition = t5[18]), 524288 & i2[0] && (e3.targetPosition = t5[19]), 64 & i2[0] && (e3.animated = t5[6]), 128 & i2[0] && (e3.selected = t5[7]), 1024 & i2[0] && (e3.label = t5[10]), 2048 & i2[0] && (e3.labelStyle = t5[11]), 8 & i2[0] && (e3.data = t5[3]), 16 & i2[0] && (e3.style = t5[4]), 2097152 & i2[0] && (e3.interactionWidth = t5[21]), 16777216 & i2[0] && (e3.selectable = t5[24]), 256 & i2[0] && (e3.deletable = (_a2 = t5[8]) != null ? _a2 : true), 8388608 & i2[0] && (e3.type = t5[23]), 4096 & i2[0] && (e3.sourceHandleId = t5[12]), 8192 & i2[0] && (e3.targetHandleId = t5[13]), 67108864 & i2[0] && (e3.markerStart = t5[26]), 33554432 & i2[0] && (e3.markerEnd = t5[25]), o2.$set(e3);
    }
    (!a2 || 4194304 & i2[0] && r2 !== (r2 = me(["svelte-flow__edge", t5[22]]))) && N(n2, "class", r2), (!a2 || 1 & i2[0]) && N(n2, "data-id", t5[0]), (!a2 || 1048582 & i2[0] && s2 !== (s2 = null === t5[20] ? void 0 : t5[20] ? t5[20] : `Edge from ${t5[1]} to ${t5[2]}`)) && N(n2, "aria-label", s2), (!a2 || 4194368 & i2[0]) && W(n2, "animated", t5[6]), (!a2 || 4194432 & i2[0]) && W(n2, "selected", t5[7]), (!a2 || 20971520 & i2[0]) && W(n2, "selectable", t5[24]), 32 & i2[0] && A(e2, "z-index", t5[5]);
  }, i(t5) {
    a2 || (o2 && ft(o2.$$.fragment, t5), a2 = true);
  }, o(t5) {
    o2 && gt(o2.$$.fragment, t5), a2 = false;
  }, d(t5) {
    t5 && _(e2), o2 && _t(o2), l2 = false, i(c2);
  } };
}
function dl(t4) {
  let e2, n2, o2 = !t4[9] && cl(t4);
  return { c() {
    o2 && o2.c(), e2 = M();
  }, m(t5, i2) {
    o2 && o2.m(t5, i2), k(t5, e2, i2), n2 = true;
  }, p(t5, n3) {
    t5[9] ? o2 && (ht(), gt(o2, 1, 1, () => {
      o2 = null;
    }), pt()) : o2 ? (o2.p(t5, n3), 512 & n3[0] && ft(o2, 1)) : (o2 = cl(t5), o2.c(), ft(o2, 1), o2.m(e2.parentNode, e2));
  }, i(t5) {
    n2 || (ft(o2), n2 = true);
  }, o(t5) {
    gt(o2), n2 = false;
  }, d(t5) {
    t5 && _(e2), o2 && o2.d(t5);
  } };
}
function ul(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, c2, u2, h2, { id: p2 } = e2, { type: f2 = "default" } = e2, { source: g2 = "" } = e2, { target: m2 = "" } = e2, { data: y2 = {} } = e2, { style: w2 } = e2, { zIndex: $2 } = e2, { animated: v2 = false } = e2, { selected: x2 = false } = e2, { selectable: b2 } = e2, { deletable: k2 } = e2, { hidden: _2 = false } = e2, { label: S2 } = e2, { labelStyle: E2 } = e2, { markerStart: C2 } = e2, { markerEnd: O2 } = e2, { sourceHandle: P2 } = e2, { targetHandle: M2 } = e2, { sourceX: z2 } = e2, { sourceY: N2 } = e2, { targetX: L2 } = e2, { targetY: I2 } = e2, { sourcePosition: D2 } = e2, { targetPosition: A2 } = e2, { ariaLabel: T2 } = e2, { interactionWidth: H2 } = e2, { class: V2 = "" } = e2;
  G("svelteflow__edge_id", p2);
  const { edgeLookup: F2, edgeTypes: W2, flowId: X2, elementsSelectable: Y2 } = Va();
  d(t4, F2, (t5) => n2(44, l2 = t5)), d(t4, W2, (t5) => n2(40, h2 = t5)), d(t4, X2, (t5) => n2(39, u2 = t5)), d(t4, Y2, (t5) => n2(38, c2 = t5));
  const R2 = K(), Z2 = ca();
  function B2(t5, e3) {
    const n3 = l2.get(p2);
    n3 && R2(e3, { event: t5, edge: n3 });
  }
  return t4.$$set = (t5) => {
    "id" in t5 && n2(0, p2 = t5.id), "type" in t5 && n2(34, f2 = t5.type), "source" in t5 && n2(1, g2 = t5.source), "target" in t5 && n2(2, m2 = t5.target), "data" in t5 && n2(3, y2 = t5.data), "style" in t5 && n2(4, w2 = t5.style), "zIndex" in t5 && n2(5, $2 = t5.zIndex), "animated" in t5 && n2(6, v2 = t5.animated), "selected" in t5 && n2(7, x2 = t5.selected), "selectable" in t5 && n2(35, b2 = t5.selectable), "deletable" in t5 && n2(8, k2 = t5.deletable), "hidden" in t5 && n2(9, _2 = t5.hidden), "label" in t5 && n2(10, S2 = t5.label), "labelStyle" in t5 && n2(11, E2 = t5.labelStyle), "markerStart" in t5 && n2(36, C2 = t5.markerStart), "markerEnd" in t5 && n2(37, O2 = t5.markerEnd), "sourceHandle" in t5 && n2(12, P2 = t5.sourceHandle), "targetHandle" in t5 && n2(13, M2 = t5.targetHandle), "sourceX" in t5 && n2(14, z2 = t5.sourceX), "sourceY" in t5 && n2(15, N2 = t5.sourceY), "targetX" in t5 && n2(16, L2 = t5.targetX), "targetY" in t5 && n2(17, I2 = t5.targetY), "sourcePosition" in t5 && n2(18, D2 = t5.sourcePosition), "targetPosition" in t5 && n2(19, A2 = t5.targetPosition), "ariaLabel" in t5 && n2(20, T2 = t5.ariaLabel), "interactionWidth" in t5 && n2(21, H2 = t5.interactionWidth), "class" in t5 && n2(22, V2 = t5.class);
  }, t4.$$.update = () => {
    8 & t4.$$.dirty[1] && n2(23, o2 = f2 || "default"), 8388608 & t4.$$.dirty[0] | 512 & t4.$$.dirty[1] && n2(27, i2 = h2[o2] || ba), 288 & t4.$$.dirty[1] && n2(26, r2 = C2 ? `url('#${ys(C2, u2)}')` : void 0), 320 & t4.$$.dirty[1] && n2(25, s2 = O2 ? `url('#${ys(O2, u2)}')` : void 0), 144 & t4.$$.dirty[1] && n2(24, a2 = b2 != null ? b2 : c2);
  }, [p2, g2, m2, y2, w2, $2, v2, x2, k2, _2, S2, E2, P2, M2, z2, N2, L2, I2, D2, A2, T2, H2, V2, o2, a2, s2, r2, i2, F2, W2, X2, Y2, function(t5) {
    const e3 = l2.get(p2);
    e3 && (Z2(p2), R2("edgeclick", { event: t5, edge: e3 }));
  }, B2, f2, b2, C2, O2, c2, u2, h2, (t5) => {
    B2(t5, "edgecontextmenu");
  }, (t5) => {
    B2(t5, "edgemouseenter");
  }, (t5) => {
    B2(t5, "edgemouseleave");
  }];
}
var hl = class extends Et {
  constructor(t4) {
    super(), St(this, t4, ul, dl, a, { id: 0, type: 34, source: 1, target: 2, data: 3, style: 4, zIndex: 5, animated: 6, selected: 7, selectable: 35, deletable: 8, hidden: 9, label: 10, labelStyle: 11, markerStart: 36, markerEnd: 37, sourceHandle: 12, targetHandle: 13, sourceX: 14, sourceY: 15, targetX: 16, targetY: 17, sourcePosition: 18, targetPosition: 19, ariaLabel: 20, interactionWidth: 21, class: 22 }, null, [-1, -1]);
  }
};
function pl(t4, e2, n2) {
  let { onMount: o2 } = e2, { onDestroy: i2 } = e2;
  return Z(() => (o2 == null ? void 0 : o2(), i2)), t4.$$set = (t5) => {
    "onMount" in t5 && n2(0, o2 = t5.onMount), "onDestroy" in t5 && n2(1, i2 = t5.onDestroy);
  }, [o2, i2];
}
var fl = class extends Et {
  constructor(t4) {
    super(), St(this, t4, pl, null, s, { onMount: 0, onDestroy: 1 });
  }
};
function gl(t4, e2, n2) {
  const o2 = t4.slice();
  return o2[2] = e2[n2], o2;
}
function ml(t4, n2) {
  let o2, i2, r2;
  const s2 = [n2[2]];
  let a2 = {};
  for (let t5 = 0; t5 < s2.length; t5 += 1) a2 = e(a2, s2[t5]);
  return i2 = new _l({ props: a2 }), { key: t4, first: null, c() {
    o2 = M(), bt(i2.$$.fragment), this.first = o2;
  }, m(t5, e2) {
    k(t5, o2, e2), kt(i2, t5, e2), r2 = true;
  }, p(t5, e2) {
    n2 = t5;
    const o3 = 1 & e2 ? $t(s2, [vt(n2[2])]) : {};
    i2.$set(o3);
  }, i(t5) {
    r2 || (ft(i2.$$.fragment, t5), r2 = true);
  }, o(t5) {
    gt(i2.$$.fragment, t5), r2 = false;
  }, d(t5) {
    t5 && _(o2), _t(i2, t5);
  } };
}
function yl(t4) {
  let e2, n2, o2 = [], i2 = /* @__PURE__ */ new Map(), r2 = mt(t4[0]);
  const s2 = (t5) => t5[2].id;
  for (let e3 = 0; e3 < r2.length; e3 += 1) {
    let n3 = gl(t4, r2, e3), a2 = s2(n3);
    i2.set(a2, o2[e3] = ml(a2, n3));
  }
  return { c() {
    e2 = C("defs");
    for (let t5 = 0; t5 < o2.length; t5 += 1) o2[t5].c();
  }, m(t5, i3) {
    k(t5, e2, i3);
    for (let t6 = 0; t6 < o2.length; t6 += 1) o2[t6] && o2[t6].m(e2, null);
    n2 = true;
  }, p(t5, [n3]) {
    1 & n3 && (r2 = mt(t5[0]), ht(), o2 = wt(o2, n3, s2, 1, t5, r2, i2, e2, yt, ml, null, gl), pt());
  }, i(t5) {
    if (!n2) {
      for (let t6 = 0; t6 < r2.length; t6 += 1) ft(o2[t6]);
      n2 = true;
    }
  }, o(t5) {
    for (let t6 = 0; t6 < o2.length; t6 += 1) gt(o2[t6]);
    n2 = false;
  }, d(t5) {
    t5 && _(e2);
    for (let t6 = 0; t6 < o2.length; t6 += 1) o2[t6].d();
  } };
}
function wl(t4, e2, n2) {
  let o2;
  const { markers: i2 } = Va();
  return d(t4, i2, (t5) => n2(0, o2 = t5)), [o2, i2];
}
var $l = class extends Et {
  constructor(t4) {
    super(), St(this, t4, wl, yl, s, {});
  }
};
function vl(t4) {
  let e2;
  return { c() {
    e2 = C("polyline"), N(e2, "stroke", t4[6]), N(e2, "stroke-linecap", "round"), N(e2, "stroke-linejoin", "round"), N(e2, "stroke-width", t4[7]), N(e2, "fill", t4[6]), N(e2, "points", "-5,-4 0,0 -5,4 -5,-4");
  }, m(t5, n2) {
    k(t5, e2, n2);
  }, p(t5, n2) {
    64 & n2 && N(e2, "stroke", t5[6]), 128 & n2 && N(e2, "stroke-width", t5[7]), 64 & n2 && N(e2, "fill", t5[6]);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function xl(t4) {
  let e2;
  return { c() {
    e2 = C("polyline"), N(e2, "stroke", t4[6]), N(e2, "stroke-linecap", "round"), N(e2, "stroke-linejoin", "round"), N(e2, "stroke-width", t4[7]), N(e2, "fill", "none"), N(e2, "points", "-5,-4 0,0 -5,4");
  }, m(t5, n2) {
    k(t5, e2, n2);
  }, p(t5, n2) {
    64 & n2 && N(e2, "stroke", t5[6]), 128 & n2 && N(e2, "stroke-width", t5[7]);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function bl(e2) {
  let n2, o2, i2;
  function r2(t4, e3) {
    return t4[1] === hr.Arrow ? xl : t4[1] === hr.ArrowClosed ? vl : void 0;
  }
  let s2 = r2(e2), a2 = s2 && s2(e2);
  return { c() {
    n2 = C("marker"), a2 && a2.c(), N(n2, "class", "svelte-flow__arrowhead"), N(n2, "id", e2[0]), N(n2, "markerWidth", o2 = `${e2[2]}`), N(n2, "markerHeight", i2 = `${e2[3]}`), N(n2, "viewBox", "-10 -10 20 20"), N(n2, "markerUnits", e2[4]), N(n2, "orient", e2[5]), N(n2, "refX", "0"), N(n2, "refY", "0");
  }, m(t4, e3) {
    k(t4, n2, e3), a2 && a2.m(n2, null);
  }, p(t4, [e3]) {
    s2 === (s2 = r2(t4)) && a2 ? a2.p(t4, e3) : (a2 && a2.d(1), a2 = s2 && s2(t4), a2 && (a2.c(), a2.m(n2, null))), 1 & e3 && N(n2, "id", t4[0]), 4 & e3 && o2 !== (o2 = `${t4[2]}`) && N(n2, "markerWidth", o2), 8 & e3 && i2 !== (i2 = `${t4[3]}`) && N(n2, "markerHeight", i2), 16 & e3 && N(n2, "markerUnits", t4[4]), 32 & e3 && N(n2, "orient", t4[5]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2), a2 && a2.d();
  } };
}
function kl(t4, e2, n2) {
  let { id: o2 } = e2, { type: i2 } = e2, { width: r2 = 12.5 } = e2, { height: s2 = 12.5 } = e2, { markerUnits: a2 = "strokeWidth" } = e2, { orient: l2 = "auto-start-reverse" } = e2, { color: c2 } = e2, { strokeWidth: d2 } = e2;
  return t4.$$set = (t5) => {
    "id" in t5 && n2(0, o2 = t5.id), "type" in t5 && n2(1, i2 = t5.type), "width" in t5 && n2(2, r2 = t5.width), "height" in t5 && n2(3, s2 = t5.height), "markerUnits" in t5 && n2(4, a2 = t5.markerUnits), "orient" in t5 && n2(5, l2 = t5.orient), "color" in t5 && n2(6, c2 = t5.color), "strokeWidth" in t5 && n2(7, d2 = t5.strokeWidth);
  }, [o2, i2, r2, s2, a2, l2, c2, d2];
}
var _l = class extends Et {
  constructor(t4) {
    super(), St(this, t4, kl, bl, s, { id: 0, type: 1, width: 2, height: 3, markerUnits: 4, orient: 5, color: 6, strokeWidth: 7 });
  }
};
function Sl(t4, e2, n2) {
  const o2 = t4.slice();
  return o2[14] = e2[n2], o2;
}
function El(t4, e2) {
  var _a2;
  let n2, o2, i2;
  return o2 = new hl({ props: { id: e2[14].id, source: e2[14].source, target: e2[14].target, data: e2[14].data, style: e2[14].style, animated: e2[14].animated, selected: e2[14].selected, selectable: (_a2 = e2[14].selectable) != null ? _a2 : e2[1], deletable: e2[14].deletable, hidden: e2[14].hidden, label: e2[14].label, labelStyle: e2[14].labelStyle, markerStart: e2[14].markerStart, markerEnd: e2[14].markerEnd, sourceHandle: e2[14].sourceHandle, targetHandle: e2[14].targetHandle, sourceX: e2[14].sourceX, sourceY: e2[14].sourceY, targetX: e2[14].targetX, targetY: e2[14].targetY, sourcePosition: e2[14].sourcePosition, targetPosition: e2[14].targetPosition, ariaLabel: e2[14].ariaLabel, interactionWidth: e2[14].interactionWidth, class: e2[14].class, type: e2[14].type || "default", zIndex: e2[14].zIndex } }), o2.$on("edgeclick", e2[7]), o2.$on("edgecontextmenu", e2[8]), o2.$on("edgemouseenter", e2[9]), o2.$on("edgemouseleave", e2[10]), { key: t4, first: null, c() {
    n2 = M(), bt(o2.$$.fragment), this.first = n2;
  }, m(t5, e3) {
    k(t5, n2, e3), kt(o2, t5, e3), i2 = true;
  }, p(t5, n3) {
    var _a3;
    e2 = t5;
    const i3 = {};
    1 & n3 && (i3.id = e2[14].id), 1 & n3 && (i3.source = e2[14].source), 1 & n3 && (i3.target = e2[14].target), 1 & n3 && (i3.data = e2[14].data), 1 & n3 && (i3.style = e2[14].style), 1 & n3 && (i3.animated = e2[14].animated), 1 & n3 && (i3.selected = e2[14].selected), 3 & n3 && (i3.selectable = (_a3 = e2[14].selectable) != null ? _a3 : e2[1]), 1 & n3 && (i3.deletable = e2[14].deletable), 1 & n3 && (i3.hidden = e2[14].hidden), 1 & n3 && (i3.label = e2[14].label), 1 & n3 && (i3.labelStyle = e2[14].labelStyle), 1 & n3 && (i3.markerStart = e2[14].markerStart), 1 & n3 && (i3.markerEnd = e2[14].markerEnd), 1 & n3 && (i3.sourceHandle = e2[14].sourceHandle), 1 & n3 && (i3.targetHandle = e2[14].targetHandle), 1 & n3 && (i3.sourceX = e2[14].sourceX), 1 & n3 && (i3.sourceY = e2[14].sourceY), 1 & n3 && (i3.targetX = e2[14].targetX), 1 & n3 && (i3.targetY = e2[14].targetY), 1 & n3 && (i3.sourcePosition = e2[14].sourcePosition), 1 & n3 && (i3.targetPosition = e2[14].targetPosition), 1 & n3 && (i3.ariaLabel = e2[14].ariaLabel), 1 & n3 && (i3.interactionWidth = e2[14].interactionWidth), 1 & n3 && (i3.class = e2[14].class), 1 & n3 && (i3.type = e2[14].type || "default"), 1 & n3 && (i3.zIndex = e2[14].zIndex), o2.$set(i3);
  }, i(t5) {
    i2 || (ft(o2.$$.fragment, t5), i2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), i2 = false;
  }, d(t5) {
    t5 && _(n2), _t(o2, t5);
  } };
}
function Cl(t4) {
  let e2, n2;
  return e2 = new fl({ props: { onMount: t4[11], onDestroy: t4[12] } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    4 & n3 && (o2.onMount = t5[11]), 4 & n3 && (o2.onDestroy = t5[12]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Ol(t4) {
  let e2, n2, o2, i2, r2, s2, a2 = [], l2 = /* @__PURE__ */ new Map();
  o2 = new $l({});
  let c2 = mt(t4[0]);
  const d2 = (t5) => t5[14].id;
  for (let e3 = 0; e3 < c2.length; e3 += 1) {
    let n3 = Sl(t4, c2, e3), o3 = d2(n3);
    l2.set(o3, a2[e3] = El(o3, n3));
  }
  let u2 = t4[0].length > 0 && Cl(t4);
  return { c() {
    e2 = E("div"), n2 = C("svg"), bt(o2.$$.fragment), i2 = P();
    for (let t5 = 0; t5 < a2.length; t5 += 1) a2[t5].c();
    r2 = P(), u2 && u2.c(), N(n2, "class", "svelte-flow__marker"), N(e2, "class", "svelte-flow__edges");
  }, m(t5, l3) {
    k(t5, e2, l3), b(e2, n2), kt(o2, n2, null), b(e2, i2);
    for (let t6 = 0; t6 < a2.length; t6 += 1) a2[t6] && a2[t6].m(e2, null);
    b(e2, r2), u2 && u2.m(e2, null), s2 = true;
  }, p(t5, [n3]) {
    3 & n3 && (c2 = mt(t5[0]), ht(), a2 = wt(a2, n3, d2, 1, t5, c2, l2, e2, yt, El, r2, Sl), pt()), t5[0].length > 0 ? u2 ? (u2.p(t5, n3), 1 & n3 && ft(u2, 1)) : (u2 = Cl(t5), u2.c(), ft(u2, 1), u2.m(e2, null)) : u2 && (ht(), gt(u2, 1, 1, () => {
      u2 = null;
    }), pt());
  }, i(t5) {
    if (!s2) {
      ft(o2.$$.fragment, t5);
      for (let t6 = 0; t6 < c2.length; t6 += 1) ft(a2[t6]);
      ft(u2), s2 = true;
    }
  }, o(t5) {
    gt(o2.$$.fragment, t5);
    for (let t6 = 0; t6 < a2.length; t6 += 1) gt(a2[t6]);
    gt(u2), s2 = false;
  }, d(t5) {
    t5 && _(e2), _t(o2);
    for (let t6 = 0; t6 < a2.length; t6 += 1) a2[t6].d();
    u2 && u2.d();
  } };
}
function Pl(t4, e2, n2) {
  let o2, i2, r2, { defaultEdgeOptions: s2 } = e2;
  const { visibleEdges: a2, edgesInitialized: l2, edges: { setDefaultOptions: c2 }, elementsSelectable: u2 } = Va();
  d(t4, a2, (t5) => n2(0, o2 = t5)), d(t4, l2, (t5) => n2(2, r2 = t5)), d(t4, u2, (t5) => n2(1, i2 = t5)), Z(() => {
    s2 && c2(s2);
  });
  return t4.$$set = (t5) => {
    "defaultEdgeOptions" in t5 && n2(6, s2 = t5.defaultEdgeOptions);
  }, [o2, i2, r2, a2, l2, u2, s2, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, function(e3) {
    q.call(this, t4, e3);
  }, () => {
    $(l2, r2 = true, r2);
  }, () => {
    $(l2, r2 = false, r2);
  }];
}
var Ml = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Pl, Ol, s, { defaultEdgeOptions: 6 });
  }
};
function zl(t4) {
  let e2;
  return { c() {
    e2 = E("div"), N(e2, "class", "svelte-flow__selection svelte-1iugwpu"), A(e2, "width", "string" == typeof t4[2] ? t4[2] : `${t4[2]}px`), A(e2, "height", "string" == typeof t4[3] ? t4[3] : `${t4[3]}px`), A(e2, "transform", `translate(${t4[0]}px, ${t4[1]}px)`);
  }, m(t5, n2) {
    k(t5, e2, n2);
  }, p(t5, n2) {
    4 & n2 && A(e2, "width", "string" == typeof t5[2] ? t5[2] : `${t5[2]}px`), 8 & n2 && A(e2, "height", "string" == typeof t5[3] ? t5[3] : `${t5[3]}px`), 3 & n2 && A(e2, "transform", `translate(${t5[0]}px, ${t5[1]}px)`);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function Nl(e2) {
  let n2, o2 = e2[4] && zl(e2);
  return { c() {
    o2 && o2.c(), n2 = M();
  }, m(t4, e3) {
    o2 && o2.m(t4, e3), k(t4, n2, e3);
  }, p(t4, [e3]) {
    t4[4] ? o2 ? o2.p(t4, e3) : (o2 = zl(t4), o2.c(), o2.m(n2.parentNode, n2)) : o2 && (o2.d(1), o2 = null);
  }, i: t, o: t, d(t4) {
    t4 && _(n2), o2 && o2.d(t4);
  } };
}
function Ll(t4, e2, n2) {
  let { x: o2 = 0 } = e2, { y: i2 = 0 } = e2, { width: r2 = 0 } = e2, { height: s2 = 0 } = e2, { isVisible: a2 = true } = e2;
  return t4.$$set = (t5) => {
    "x" in t5 && n2(0, o2 = t5.x), "y" in t5 && n2(1, i2 = t5.y), "width" in t5 && n2(2, r2 = t5.width), "height" in t5 && n2(3, s2 = t5.height), "isVisible" in t5 && n2(4, a2 = t5.isVisible);
  }, [o2, i2, r2, s2, a2];
}
var Il = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Ll, Nl, s, { x: 0, y: 1, width: 2, height: 3, isVisible: 4 });
  }
};
function Dl(t4) {
  var _a2, _b, _c2, _d2;
  let e2, n2;
  return e2 = new Il({ props: { isVisible: !(!t4[0] || "user" !== t4[1]), width: (_a2 = t4[0]) == null ? void 0 : _a2.width, height: (_b = t4[0]) == null ? void 0 : _b.height, x: (_c2 = t4[0]) == null ? void 0 : _c2.x, y: (_d2 = t4[0]) == null ? void 0 : _d2.y } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, [n3]) {
    var _a3, _b2, _c3, _d3;
    const o2 = {};
    3 & n3 && (o2.isVisible = !(!t5[0] || "user" !== t5[1])), 1 & n3 && (o2.width = (_a3 = t5[0]) == null ? void 0 : _a3.width), 1 & n3 && (o2.height = (_b2 = t5[0]) == null ? void 0 : _b2.height), 1 & n3 && (o2.x = (_c3 = t5[0]) == null ? void 0 : _c3.x), 1 & n3 && (o2.y = (_d3 = t5[0]) == null ? void 0 : _d3.y), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Al(t4, e2, n2) {
  let o2, i2;
  const { selectionRect: r2, selectionRectMode: s2 } = Va();
  return d(t4, r2, (t5) => n2(0, o2 = t5)), d(t4, s2, (t5) => n2(1, i2 = t5)), [o2, i2, r2, s2];
}
var Tl = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Al, Dl, s, {});
  }
};
function Hl(t4) {
  let e2, n2, o2, r2, s2;
  return n2 = new Il({ props: { width: "100%", height: "100%", x: 0, y: 0 } }), { c() {
    e2 = E("div"), bt(n2.$$.fragment), N(e2, "class", "selection-wrapper nopan svelte-5pxri"), A(e2, "width", t4[1].width + "px"), A(e2, "height", t4[1].height + "px"), A(e2, "transform", "translate(" + t4[1].x + "px, " + t4[1].y + "px)"), N(e2, "role", "button"), N(e2, "tabindex", "-1");
  }, m(i2, a2) {
    k(i2, e2, a2), kt(n2, e2, null), o2 = true, r2 || (s2 = [v(Ua.call(null, e2, { disabled: false, store: t4[2], onDrag: t4[11], onDragStart: t4[12], onDragStop: t4[13] })), z(e2, "contextmenu", t4[7]), z(e2, "click", t4[8]), z(e2, "keyup", Fl)], r2 = true);
  }, p(t5, n3) {
    (!o2 || 2 & n3) && A(e2, "width", t5[1].width + "px"), (!o2 || 2 & n3) && A(e2, "height", t5[1].height + "px"), (!o2 || 2 & n3) && A(e2, "transform", "translate(" + t5[1].x + "px, " + t5[1].y + "px)");
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), _t(n2), r2 = false, i(s2);
  } };
}
function Vl(t4) {
  let e2, n2, o2 = "nodes" === t4[0] && t4[1] && Fr(t4[1].x) && Fr(t4[1].y), i2 = o2 && Hl(t4);
  return { c() {
    i2 && i2.c(), e2 = M();
  }, m(t5, o3) {
    i2 && i2.m(t5, o3), k(t5, e2, o3), n2 = true;
  }, p(t5, [n3]) {
    3 & n3 && (o2 = "nodes" === t5[0] && t5[1] && Fr(t5[1].x) && Fr(t5[1].y)), o2 ? i2 ? (i2.p(t5, n3), 3 & n3 && ft(i2, 1)) : (i2 = Hl(t5), i2.c(), ft(i2, 1), i2.m(e2.parentNode, e2)) : i2 && (ht(), gt(i2, 1, 1, () => {
      i2 = null;
    }), pt());
  }, i(t5) {
    n2 || (ft(i2), n2 = true);
  }, o(t5) {
    gt(i2), n2 = false;
  }, d(t5) {
    t5 && _(e2), i2 && i2.d(t5);
  } };
}
var Fl = () => {
};
function Wl(t4, e2, n2) {
  let o2, i2, r2;
  const s2 = Va(), { selectionRectMode: a2, nodes: l2, nodeLookup: c2 } = s2;
  d(t4, a2, (t5) => n2(0, r2 = t5)), d(t4, l2, (t5) => n2(9, o2 = t5)), d(t4, c2, (t5) => n2(10, i2 = t5));
  const u2 = K();
  let h2 = null;
  return t4.$$.update = () => {
    1537 & t4.$$.dirty && "nodes" === r2 && n2(1, h2 = vr(i2, { filter: (t5) => !!t5.selected }));
  }, [r2, h2, s2, a2, l2, c2, u2, function(t5) {
    const e3 = o2.filter((t6) => t6.selected);
    u2("selectioncontextmenu", { nodes: e3, event: t5 });
  }, function(t5) {
    const e3 = o2.filter((t6) => t6.selected);
    u2("selectionclick", { nodes: e3, event: t5 });
  }, o2, i2, (t5, e3, n3, o3) => {
    u2("nodedrag", { event: t5, targetNode: null, nodes: o3 });
  }, (t5, e3, n3, o3) => {
    u2("nodedragstart", { event: t5, targetNode: null, nodes: o3 });
  }, (t5, e3, n3, o3) => {
    u2("nodedragstop", { event: t5, targetNode: null, nodes: o3 });
  }];
}
var Xl = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Wl, Vl, s, {});
  }
};
function Yl(t4, e2) {
  let { enabled: n2 = true, trigger: o2, type: i2 = "keydown" } = e2;
  function r2(e3) {
    const n3 = Array.isArray(o2) ? o2 : [o2], i3 = { alt: e3.altKey, ctrl: e3.ctrlKey, shift: e3.shiftKey, meta: e3.metaKey };
    for (const o3 of n3) {
      const n4 = __spreadValues({ modifier: [], preventDefault: false, enabled: true }, o3), { modifier: r3, key: s2, callback: a2, preventDefault: l2, enabled: c2 } = n4;
      if (c2) {
        if (r3.length) {
          if (!(Array.isArray(r3) ? r3 : [r3]).map((t5) => "string" == typeof t5 ? [t5] : t5).some((t5) => t5.every((t6) => i3[t6]))) continue;
        }
        if (e3.key === s2) {
          l2 && e3.preventDefault();
          const o4 = { node: t4, trigger: n4, originalEvent: e3 };
          t4.dispatchEvent(new CustomEvent("shortcut", { detail: o4 })), a2 == null ? void 0 : a2(o4);
        }
      }
    }
  }
  return n2 && t4.addEventListener(i2, r2), { update: (e3) => {
    const { enabled: s2 = true, type: a2 = "keydown" } = e3;
    !n2 || s2 && i2 === a2 ? !n2 && s2 && t4.addEventListener(a2, r2) : t4.removeEventListener(i2, r2), n2 = s2, i2 = a2, o2 = e3.trigger;
  }, destroy: () => {
    t4.removeEventListener(i2, r2);
  } };
}
function Rl(e2) {
  let n2, o2, s2, a2, l2, c2, d2, u2, h2, p2, f2, g2;
  return { c: t, m(t4, i2) {
    f2 || (g2 = [v(n2 = Yl.call(null, window, { trigger: Kl(e2[0], e2[11]), type: "keydown" })), v(o2 = Yl.call(null, window, { trigger: Kl(e2[0], e2[12]), type: "keyup" })), v(s2 = Yl.call(null, window, { trigger: Kl(e2[1], e2[13]), type: "keydown" })), v(a2 = Yl.call(null, window, { trigger: Kl(e2[1], e2[14]), type: "keyup" })), v(l2 = Yl.call(null, window, { trigger: Kl(e2[2], e2[15]), type: "keydown" })), v(c2 = Yl.call(null, window, { trigger: Kl(e2[2], e2[16]), type: "keyup" })), v(d2 = Yl.call(null, window, { trigger: Kl(e2[3], e2[17]), type: "keydown" })), v(u2 = Yl.call(null, window, { trigger: Kl(e2[3], e2[18]), type: "keyup" })), v(h2 = Yl.call(null, window, { trigger: Kl(e2[4], e2[19]), type: "keydown" })), v(p2 = Yl.call(null, window, { trigger: Kl(e2[4], e2[20]), type: "keyup" })), z(window, "blur", e2[10]), z(window, "contextmenu", e2[10])], f2 = true);
  }, p(t4, [e3]) {
    n2 && r(n2.update) && 1 & e3 && n2.update.call(null, { trigger: Kl(t4[0], t4[11]), type: "keydown" }), o2 && r(o2.update) && 1 & e3 && o2.update.call(null, { trigger: Kl(t4[0], t4[12]), type: "keyup" }), s2 && r(s2.update) && 2 & e3 && s2.update.call(null, { trigger: Kl(t4[1], t4[13]), type: "keydown" }), a2 && r(a2.update) && 2 & e3 && a2.update.call(null, { trigger: Kl(t4[1], t4[14]), type: "keyup" }), l2 && r(l2.update) && 4 & e3 && l2.update.call(null, { trigger: Kl(t4[2], t4[15]), type: "keydown" }), c2 && r(c2.update) && 4 & e3 && c2.update.call(null, { trigger: Kl(t4[2], t4[16]), type: "keyup" }), d2 && r(d2.update) && 8 & e3 && d2.update.call(null, { trigger: Kl(t4[3], t4[17]), type: "keydown" }), u2 && r(u2.update) && 8 & e3 && u2.update.call(null, { trigger: Kl(t4[3], t4[18]), type: "keyup" }), h2 && r(h2.update) && 16 & e3 && h2.update.call(null, { trigger: Kl(t4[4], t4[19]), type: "keydown" }), p2 && r(p2.update) && 16 & e3 && p2.update.call(null, { trigger: Kl(t4[4], t4[20]), type: "keyup" });
  }, i: t, o: t, d(t4) {
    f2 = false, i(g2);
  } };
}
function Zl(t4) {
  return null !== t4 && "object" == typeof t4;
}
function Bl(t4) {
  return Zl(t4) && t4.modifier || [];
}
function Kl(t4, e2) {
  return (Array.isArray(t4) ? t4 : [t4]).map((t5) => {
    const n2 = function(t6) {
      return null == t6 ? "" : Zl(t6) ? t6.key : t6;
    }(t5);
    return { key: n2, modifier: Bl(t5), enabled: null !== n2, callback: e2 };
  });
}
function Gl(t4, e2, n2) {
  let { selectionKey: o2 = "Shift" } = e2, { multiSelectionKey: i2 = Br() ? "Meta" : "Control" } = e2, { deleteKey: r2 = "Backspace" } = e2, { panActivationKey: s2 = " " } = e2, { zoomActivationKey: a2 = Br() ? "Meta" : "Control" } = e2;
  const { selectionKeyPressed: l2, multiselectionKeyPressed: c2, deleteKeyPressed: d2, panActivationKeyPressed: u2, zoomActivationKeyPressed: h2, selectionRect: p2 } = Va();
  return t4.$$set = (t5) => {
    "selectionKey" in t5 && n2(0, o2 = t5.selectionKey), "multiSelectionKey" in t5 && n2(1, i2 = t5.multiSelectionKey), "deleteKey" in t5 && n2(2, r2 = t5.deleteKey), "panActivationKey" in t5 && n2(3, s2 = t5.panActivationKey), "zoomActivationKey" in t5 && n2(4, a2 = t5.zoomActivationKey);
  }, [o2, i2, r2, s2, a2, l2, c2, d2, u2, h2, function() {
    p2.set(null), l2.set(false), c2.set(false), d2.set(false), u2.set(false), h2.set(false);
  }, () => l2.set(true), () => l2.set(false), () => c2.set(true), () => c2.set(false), (t5) => {
    t5.originalEvent.ctrlKey || t5.originalEvent.metaKey || t5.originalEvent.shiftKey || function(t6) {
      var _a2, _b;
      const e3 = ((_b = (_a2 = t6.composedPath) == null ? void 0 : _a2.call(t6)) == null ? void 0 : _b[0]) || t6.target;
      return Ur.includes(e3 == null ? void 0 : e3.nodeName) || (e3 == null ? void 0 : e3.hasAttribute("contenteditable")) || !!(e3 == null ? void 0 : e3.closest(".nokey"));
    }(t5.originalEvent) || d2.set(true);
  }, () => d2.set(false), () => u2.set(true), () => u2.set(false), () => h2.set(true), () => h2.set(false)];
}
var jl = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Gl, Rl, s, { selectionKey: 0, multiSelectionKey: 1, deleteKey: 2, panActivationKey: 3, zoomActivationKey: 4 });
  }
};
var ql = (t4) => ({});
var Ql = (t4) => ({});
function Ul(t4) {
  let e2, n2, o2, i2;
  const r2 = t4[13].connectionLine, s2 = u(r2, t4, t4[12], Ql);
  let a2 = !t4[2] && Jl(t4);
  return { c() {
    e2 = C("svg"), n2 = C("g"), s2 && s2.c(), a2 && a2.c(), N(n2, "class", o2 = me(["svelte-flow__connection", mr(t4[3].isValid)])), N(e2, "width", t4[5]), N(e2, "height", t4[6]), N(e2, "class", "svelte-flow__connectionline"), N(e2, "style", t4[0]);
  }, m(t5, o3) {
    k(t5, e2, o3), b(e2, n2), s2 && s2.m(n2, null), a2 && a2.m(n2, null), i2 = true;
  }, p(t5, l2) {
    s2 && s2.p && (!i2 || 4096 & l2) && f(s2, r2, t5, t5[12], i2 ? p(r2, t5[12], l2, ql) : g(t5[12]), Ql), t5[2] ? a2 && (a2.d(1), a2 = null) : a2 ? a2.p(t5, l2) : (a2 = Jl(t5), a2.c(), a2.m(n2, null)), (!i2 || 8 & l2 && o2 !== (o2 = me(["svelte-flow__connection", mr(t5[3].isValid)]))) && N(n2, "class", o2), (!i2 || 32 & l2) && N(e2, "width", t5[5]), (!i2 || 64 & l2) && N(e2, "height", t5[6]), (!i2 || 1 & l2) && N(e2, "style", t5[0]);
  }, i(t5) {
    i2 || (ft(s2, t5), i2 = true);
  }, o(t5) {
    gt(s2, t5), i2 = false;
  }, d(t5) {
    t5 && _(e2), s2 && s2.d(t5), a2 && a2.d();
  } };
}
function Jl(t4) {
  let e2;
  return { c() {
    e2 = C("path"), N(e2, "d", t4[4]), N(e2, "style", t4[1]), N(e2, "fill", "none"), N(e2, "class", "svelte-flow__connection-path");
  }, m(t5, n2) {
    k(t5, e2, n2);
  }, p(t5, n2) {
    16 & n2 && N(e2, "d", t5[4]), 2 & n2 && N(e2, "style", t5[1]);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function tc(t4) {
  let e2, n2, o2 = t4[3].inProgress && Ul(t4);
  return { c() {
    o2 && o2.c(), e2 = M();
  }, m(t5, i2) {
    o2 && o2.m(t5, i2), k(t5, e2, i2), n2 = true;
  }, p(t5, [n3]) {
    t5[3].inProgress ? o2 ? (o2.p(t5, n3), 8 & n3 && ft(o2, 1)) : (o2 = Ul(t5), o2.c(), ft(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (ht(), gt(o2, 1, 1, () => {
      o2 = null;
    }), pt());
  }, i(t5) {
    n2 || (ft(o2), n2 = true);
  }, o(t5) {
    gt(o2), n2 = false;
  }, d(t5) {
    t5 && _(e2), o2 && o2.d(t5);
  } };
}
function ec(t4, e2, n2) {
  let o2, i2, r2, s2, { $$slots: a2 = {}, $$scope: l2 } = e2, { containerStyle: c2 = "" } = e2, { style: u2 = "" } = e2, { isCustomComponent: h2 = false } = e2;
  const { width: p2, height: f2, connection: g2, connectionLineType: m2 } = Va();
  d(t4, p2, (t5) => n2(5, r2 = t5)), d(t4, f2, (t5) => n2(6, s2 = t5)), d(t4, g2, (t5) => n2(3, i2 = t5)), d(t4, m2, (t5) => n2(11, o2 = t5));
  let y2 = null;
  return t4.$$set = (t5) => {
    "containerStyle" in t5 && n2(0, c2 = t5.containerStyle), "style" in t5 && n2(1, u2 = t5.style), "isCustomComponent" in t5 && n2(2, h2 = t5.isCustomComponent), "$$scope" in t5 && n2(12, l2 = t5.$$scope);
  }, t4.$$.update = () => {
    if (2060 & t4.$$.dirty && i2.inProgress && !h2) {
      const { from: t5, to: e3, fromPosition: r3, toPosition: s3 } = i2, a3 = { sourceX: t5.x, sourceY: t5.y, sourcePosition: r3, targetX: e3.x, targetY: e3.y, targetPosition: s3 };
      switch (o2) {
        case ur.Bezier:
          n2(4, [y2] = is(a3), y2);
          break;
        case ur.Step:
          n2(4, [y2] = hs(__spreadProps(__spreadValues({}, a3), { borderRadius: 0 })), y2);
          break;
        case ur.SmoothStep:
          n2(4, [y2] = hs(a3), y2);
          break;
        default:
          n2(4, [y2] = ls(a3), y2);
      }
    }
  }, [c2, u2, h2, i2, y2, r2, s2, p2, f2, g2, m2, o2, l2, a2];
}
var nc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, ec, tc, s, { containerStyle: 0, style: 1, isCustomComponent: 2 });
  }
};
function oc(t4) {
  let n2, o2, i2;
  const r2 = t4[8].default, s2 = u(r2, t4, t4[7], null);
  let a2 = [{ class: o2 = me(["svelte-flow__panel", t4[1], ...t4[2]]) }, { style: t4[0] }, t4[5]], l2 = {};
  for (let t5 = 0; t5 < a2.length; t5 += 1) l2 = e(l2, a2[t5]);
  return { c() {
    n2 = E("div"), s2 && s2.c(), I(n2, l2), A(n2, "pointer-events", t4[3] ? "none" : "");
  }, m(t5, e2) {
    k(t5, n2, e2), s2 && s2.m(n2, null), i2 = true;
  }, p(t5, [e2]) {
    s2 && s2.p && (!i2 || 128 & e2) && f(s2, r2, t5, t5[7], i2 ? p(r2, t5[7], e2, null) : g(t5[7]), null), I(n2, l2 = $t(a2, [(!i2 || 6 & e2 && o2 !== (o2 = me(["svelte-flow__panel", t5[1], ...t5[2]]))) && { class: o2 }, (!i2 || 1 & e2) && { style: t5[0] }, 32 & e2 && t5[5]])), A(n2, "pointer-events", t5[3] ? "none" : "");
  }, i(t5) {
    i2 || (ft(s2, t5), i2 = true);
  }, o(t5) {
    gt(s2, t5), i2 = false;
  }, d(t5) {
    t5 && _(n2), s2 && s2.d(t5);
  } };
}
function ic(t4, n2, o2) {
  let i2;
  const r2 = ["position", "style", "class"];
  let s2, a2 = y(n2, r2), { $$slots: l2 = {}, $$scope: c2 } = n2, { position: u2 = "top-right" } = n2, { style: h2 } = n2, { class: p2 } = n2;
  const { selectionRectMode: f2 } = Va();
  return d(t4, f2, (t5) => o2(3, s2 = t5)), t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(5, a2 = y(n2, r2)), "position" in t5 && o2(6, u2 = t5.position), "style" in t5 && o2(0, h2 = t5.style), "class" in t5 && o2(1, p2 = t5.class), "$$scope" in t5 && o2(7, c2 = t5.$$scope);
  }, t4.$$.update = () => {
    64 & t4.$$.dirty && o2(2, i2 = `${u2}`.split("-"));
  }, [h2, p2, i2, s2, f2, a2, u2, c2, l2];
}
var rc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, ic, oc, s, { position: 6, style: 0, class: 1 });
  }
};
function sc(t4) {
  let e2, n2;
  return e2 = new rc({ props: { position: t4[1], class: "svelte-flow__attribution", "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us", $$slots: { default: [ac] }, $$scope: { ctx: t4 } } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    2 & n3 && (o2.position = t5[1]), 4 & n3 && (o2.$$scope = { dirty: n3, ctx: t5 }), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function ac(e2) {
  let n2;
  return { c() {
    n2 = E("a"), n2.textContent = "Svelte Flow", N(n2, "href", "https://svelteflow.dev"), N(n2, "target", "_blank"), N(n2, "rel", "noopener noreferrer"), N(n2, "aria-label", "Svelte Flow attribution");
  }, m(t4, e3) {
    k(t4, n2, e3);
  }, p: t, d(t4) {
    t4 && _(n2);
  } };
}
function lc(t4) {
  var _a2;
  let e2, n2, o2 = !((_a2 = t4[0]) == null ? void 0 : _a2.hideAttribution) && sc(t4);
  return { c() {
    o2 && o2.c(), e2 = M();
  }, m(t5, i2) {
    o2 && o2.m(t5, i2), k(t5, e2, i2), n2 = true;
  }, p(t5, [n3]) {
    var _a3;
    ((_a3 = t5[0]) == null ? void 0 : _a3.hideAttribution) ? o2 && (ht(), gt(o2, 1, 1, () => {
      o2 = null;
    }), pt()) : o2 ? (o2.p(t5, n3), 1 & n3 && ft(o2, 1)) : (o2 = sc(t5), o2.c(), ft(o2, 1), o2.m(e2.parentNode, e2));
  }, i(t5) {
    n2 || (ft(o2), n2 = true);
  }, o(t5) {
    gt(o2), n2 = false;
  }, d(t5) {
    t5 && _(e2), o2 && o2.d(t5);
  } };
}
function cc(t4, e2, n2) {
  let { proOptions: o2 } = e2, { position: i2 = "bottom-right" } = e2;
  return t4.$$set = (t5) => {
    "proOptions" in t5 && n2(0, o2 = t5.proOptions), "position" in t5 && n2(1, i2 = t5.position);
  }, [o2, i2];
}
var dc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, cc, lc, s, { proOptions: 0, position: 1 });
  }
};
function uc(t4, { nodeTypes: e2, edgeTypes: n2, minZoom: o2, maxZoom: i2, translateExtent: r2, paneClickDistance: s2 }) {
  void 0 !== e2 && t4.setNodeTypes(e2), void 0 !== n2 && t4.setEdgeTypes(n2), void 0 !== o2 && t4.setMinZoom(o2), void 0 !== i2 && t4.setMaxZoom(i2), void 0 !== r2 && t4.setTranslateExtent(r2), void 0 !== s2 && t4.setPaneClickDistance(s2);
}
function hc(t4, e2) {
  var n2;
  (n2 = e2, Object.keys(n2)).forEach((n3) => {
    const o2 = e2[n3];
    void 0 !== o2 && t4[n3].set(o2);
  });
}
function pc(t4 = "light") {
  const e2 = pe("light", (e3) => {
    if ("system" !== t4) return void e3(t4);
    const n2 = "undefined" != typeof window && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null, o2 = () => e3((n2 == null ? void 0 : n2.matches) ? "dark" : "light");
    return e3((n2 == null ? void 0 : n2.matches) ? "dark" : "light"), n2 == null ? void 0 : n2.addEventListener("change", o2), () => {
      n2 == null ? void 0 : n2.removeEventListener("change", o2);
    };
  });
  return e2;
}
var fc = (t4) => ({});
var gc = (t4) => ({ slot: "connectionLine" });
function mc(t4) {
  let e2;
  const n2 = t4[75].connectionLine, o2 = u(n2, t4, t4[99], gc);
  return { c() {
    o2 && o2.c();
  }, m(t5, n3) {
    o2 && o2.m(t5, n3), e2 = true;
  }, p(t5, i2) {
    o2 && o2.p && (!e2 || 64 & i2[3]) && f(o2, n2, t5, t5[99], e2 ? p(n2, t5[99], i2, fc) : g(t5[99]), gc);
  }, i(t5) {
    e2 || (ft(o2, t5), e2 = true);
  }, o(t5) {
    gt(o2, t5), e2 = false;
  }, d(t5) {
    o2 && o2.d(t5);
  } };
}
function yc(t4) {
  let e2, n2, o2, i2, r2, s2, a2, l2, c2, d2, u2, h2;
  return e2 = new Ml({ props: { defaultEdgeOptions: t4[21] } }), e2.$on("edgeclick", t4[78]), e2.$on("edgecontextmenu", t4[79]), e2.$on("edgemouseenter", t4[80]), e2.$on("edgemouseleave", t4[81]), o2 = new nc({ props: { containerStyle: t4[7], style: t4[6], isCustomComponent: t4[34].connectionLine, $$slots: { connectionLine: [mc] }, $$scope: { ctx: t4 } } }), c2 = new ll({ props: { nodeClickDistance: t4[23] } }), c2.$on("nodeclick", t4[82]), c2.$on("nodemouseenter", t4[83]), c2.$on("nodemousemove", t4[84]), c2.$on("nodemouseleave", t4[85]), c2.$on("nodedragstart", t4[86]), c2.$on("nodedrag", t4[87]), c2.$on("nodedragstop", t4[88]), c2.$on("nodecontextmenu", t4[89]), u2 = new Xl({}), u2.$on("selectionclick", t4[90]), u2.$on("selectioncontextmenu", t4[91]), u2.$on("nodedragstart", t4[92]), u2.$on("nodedrag", t4[93]), u2.$on("nodedragstop", t4[94]), { c() {
    bt(e2.$$.fragment), n2 = P(), bt(o2.$$.fragment), i2 = P(), r2 = E("div"), s2 = P(), a2 = E("div"), l2 = P(), bt(c2.$$.fragment), d2 = P(), bt(u2.$$.fragment), N(r2, "class", "svelte-flow__edgelabel-renderer"), N(a2, "class", "svelte-flow__viewport-portal");
  }, m(t5, p2) {
    kt(e2, t5, p2), k(t5, n2, p2), kt(o2, t5, p2), k(t5, i2, p2), k(t5, r2, p2), k(t5, s2, p2), k(t5, a2, p2), k(t5, l2, p2), kt(c2, t5, p2), k(t5, d2, p2), kt(u2, t5, p2), h2 = true;
  }, p(t5, n3) {
    const i3 = {};
    2097152 & n3[0] && (i3.defaultEdgeOptions = t5[21]), e2.$set(i3);
    const r3 = {};
    128 & n3[0] && (r3.containerStyle = t5[7]), 64 & n3[0] && (r3.style = t5[6]), 8 & n3[1] && (r3.isCustomComponent = t5[34].connectionLine), 64 & n3[3] && (r3.$$scope = { dirty: n3, ctx: t5 }), o2.$set(r3);
    const s3 = {};
    8388608 & n3[0] && (s3.nodeClickDistance = t5[23]), c2.$set(s3);
  }, i(t5) {
    h2 || (ft(e2.$$.fragment, t5), ft(o2.$$.fragment, t5), ft(c2.$$.fragment, t5), ft(u2.$$.fragment, t5), h2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), gt(o2.$$.fragment, t5), gt(c2.$$.fragment, t5), gt(u2.$$.fragment, t5), h2 = false;
  }, d(t5) {
    t5 && (_(n2), _(i2), _(r2), _(s2), _(a2), _(l2), _(d2)), _t(e2, t5), _t(o2, t5), _t(c2, t5), _t(u2, t5);
  } };
}
function wc(t4) {
  let e2, n2, o2, i2;
  return e2 = new Qa({ props: { $$slots: { default: [yc] }, $$scope: { ctx: t4 } } }), o2 = new Tl({}), { c() {
    bt(e2.$$.fragment), n2 = P(), bt(o2.$$.fragment);
  }, m(t5, r2) {
    kt(e2, t5, r2), k(t5, n2, r2), kt(o2, t5, r2), i2 = true;
  }, p(t5, n3) {
    const o3 = {};
    10485952 & n3[0] | 8 & n3[1] | 64 & n3[3] && (o3.$$scope = { dirty: n3, ctx: t5 }), e2.$set(o3);
  }, i(t5) {
    i2 || (ft(e2.$$.fragment, t5), ft(o2.$$.fragment, t5), i2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), gt(o2.$$.fragment, t5), i2 = false;
  }, d(t5) {
    t5 && _(n2), _t(e2, t5), _t(o2, t5);
  } };
}
function $c(t4) {
  let e2, n2;
  return e2 = new Ga({ props: { panOnDrag: void 0 === t4[17] || t4[17], selectionOnDrag: t4[18], $$slots: { default: [wc] }, $$scope: { ctx: t4 } } }), e2.$on("paneclick", t4[95]), e2.$on("panecontextmenu", t4[96]), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    131072 & n3[0] && (o2.panOnDrag = void 0 === t5[17] || t5[17]), 262144 & n3[0] && (o2.selectionOnDrag = t5[18]), 10485952 & n3[0] | 8 & n3[1] | 64 & n3[3] && (o2.$$scope = { dirty: n3, ctx: t5 }), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function vc(t4) {
  let n2, o2, r2, s2, a2, l2, c2, d2, h2, m2, y2, w2;
  o2 = new jl({ props: { selectionKey: t4[1], deleteKey: t4[5], panActivationKey: t4[2], multiSelectionKey: t4[3], zoomActivationKey: t4[4] } }), s2 = new Ya({ props: { initialViewport: t4[31], onMoveStart: t4[8], onMove: t4[9], onMoveEnd: t4[10], panOnScrollMode: void 0 === t4[11] ? lr.Free : t4[11], preventScrolling: void 0 === t4[12] || t4[12], zoomOnScroll: void 0 === t4[13] || t4[13], zoomOnDoubleClick: void 0 === t4[14] || t4[14], zoomOnPinch: void 0 === t4[15] || t4[15], panOnScroll: void 0 !== t4[16] && t4[16], panOnDrag: void 0 === t4[17] || t4[17], paneClickDistance: void 0 === t4[22] ? 0 : t4[22], $$slots: { default: [$c] }, $$scope: { ctx: t4 } } }), l2 = new dc({ props: { proOptions: t4[20], position: t4[19] } });
  const $2 = t4[75].default, v2 = u($2, t4, t4[99], null);
  let x2 = [{ style: t4[24] }, { class: d2 = me(["svelte-flow", t4[25], t4[30]]) }, { "data-testid": "svelte-flow__wrapper" }, t4[33], { role: "application" }], S2 = {};
  for (let t5 = 0; t5 < x2.length; t5 += 1) S2 = e(S2, x2[t5]);
  return { c() {
    n2 = E("div"), bt(o2.$$.fragment), r2 = P(), bt(s2.$$.fragment), a2 = P(), bt(l2.$$.fragment), c2 = P(), v2 && v2.c(), I(n2, S2), it(() => t4[98].call(n2)), W(n2, "svelte-12wlba6", true);
  }, m(e2, i2) {
    k(e2, n2, i2), kt(o2, n2, null), b(n2, r2), kt(s2, n2, null), b(n2, a2), kt(l2, n2, null), b(n2, c2), v2 && v2.m(n2, null), t4[97](n2), h2 = function(t5, e3) {
      "static" === getComputedStyle(t5).position && (t5.style.position = "relative");
      const n3 = E("iframe");
      n3.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n3.setAttribute("aria-hidden", "true"), n3.tabIndex = -1;
      const o3 = F();
      let i3;
      return o3 ? (n3.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i3 = z(window, "message", (t6) => {
        t6.source === n3.contentWindow && e3();
      })) : (n3.src = "about:blank", n3.onload = () => {
        i3 = z(n3.contentWindow, "resize", e3), e3();
      }), b(t5, n3), () => {
        (o3 || i3 && n3.contentWindow) && i3(), _(n3);
      };
    }(n2, t4[98].bind(n2)), m2 = true, y2 || (w2 = [z(n2, "dragover", t4[76]), z(n2, "drop", t4[77])], y2 = true);
  }, p(t5, e2) {
    const i2 = {};
    2 & e2[0] && (i2.selectionKey = t5[1]), 32 & e2[0] && (i2.deleteKey = t5[5]), 4 & e2[0] && (i2.panActivationKey = t5[2]), 8 & e2[0] && (i2.multiSelectionKey = t5[3]), 16 & e2[0] && (i2.zoomActivationKey = t5[4]), o2.$set(i2);
    const r3 = {};
    256 & e2[0] && (r3.onMoveStart = t5[8]), 512 & e2[0] && (r3.onMove = t5[9]), 1024 & e2[0] && (r3.onMoveEnd = t5[10]), 2048 & e2[0] && (r3.panOnScrollMode = void 0 === t5[11] ? lr.Free : t5[11]), 4096 & e2[0] && (r3.preventScrolling = void 0 === t5[12] || t5[12]), 8192 & e2[0] && (r3.zoomOnScroll = void 0 === t5[13] || t5[13]), 16384 & e2[0] && (r3.zoomOnDoubleClick = void 0 === t5[14] || t5[14]), 32768 & e2[0] && (r3.zoomOnPinch = void 0 === t5[15] || t5[15]), 65536 & e2[0] && (r3.panOnScroll = void 0 !== t5[16] && t5[16]), 131072 & e2[0] && (r3.panOnDrag = void 0 === t5[17] || t5[17]), 4194304 & e2[0] && (r3.paneClickDistance = void 0 === t5[22] ? 0 : t5[22]), 10879168 & e2[0] | 8 & e2[1] | 64 & e2[3] && (r3.$$scope = { dirty: e2, ctx: t5 }), s2.$set(r3);
    const a3 = {};
    1048576 & e2[0] && (a3.proOptions = t5[20]), 524288 & e2[0] && (a3.position = t5[19]), l2.$set(a3), v2 && v2.p && (!m2 || 64 & e2[3]) && f(v2, $2, t5, t5[99], m2 ? p($2, t5[99], e2, null) : g(t5[99]), null), I(n2, S2 = $t(x2, [(!m2 || 16777216 & e2[0]) && { style: t5[24] }, (!m2 || 1107296256 & e2[0] && d2 !== (d2 = me(["svelte-flow", t5[25], t5[30]]))) && { class: d2 }, { "data-testid": "svelte-flow__wrapper" }, 4 & e2[1] && t5[33], { role: "application" }])), W(n2, "svelte-12wlba6", true);
  }, i(t5) {
    m2 || (ft(o2.$$.fragment, t5), ft(s2.$$.fragment, t5), ft(l2.$$.fragment, t5), ft(v2, t5), m2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), gt(s2.$$.fragment, t5), gt(l2.$$.fragment, t5), gt(v2, t5), m2 = false;
  }, d(e2) {
    e2 && _(n2), _t(o2), _t(s2), _t(l2), v2 && v2.d(e2), t4[97](null), h2(), y2 = false, i(w2);
  } };
}
function xc(n2, o2, i2) {
  let r2;
  const s2 = ["id", "nodes", "edges", "fitView", "fitViewOptions", "minZoom", "maxZoom", "initialViewport", "viewport", "nodeTypes", "edgeTypes", "selectionKey", "selectionMode", "panActivationKey", "multiSelectionKey", "zoomActivationKey", "nodesDraggable", "nodesConnectable", "nodeDragThreshold", "elementsSelectable", "snapGrid", "deleteKey", "connectionRadius", "connectionLineType", "connectionMode", "connectionLineStyle", "connectionLineContainerStyle", "onMoveStart", "onMove", "onMoveEnd", "isValidConnection", "translateExtent", "nodeExtent", "onlyRenderVisibleElements", "panOnScrollMode", "preventScrolling", "zoomOnScroll", "zoomOnDoubleClick", "zoomOnPinch", "panOnScroll", "panOnDrag", "selectionOnDrag", "autoPanOnConnect", "autoPanOnNodeDrag", "onerror", "ondelete", "onedgecreate", "attributionPosition", "proOptions", "defaultEdgeOptions", "width", "height", "colorMode", "onconnect", "onconnectstart", "onconnectend", "onbeforedelete", "oninit", "nodeOrigin", "paneClickDistance", "nodeClickDistance", "defaultMarkerColor", "style", "class"];
  let a2, u2, h2, p2 = y(o2, s2), f2 = t, g2 = () => (f2(), f2 = l(M2, (t4) => i2(100, u2 = t4)), M2), w2 = t;
  n2.$$.on_destroy.push(() => f2()), n2.$$.on_destroy.push(() => w2());
  let { $$slots: $2 = {}, $$scope: v2 } = o2;
  const x2 = function(t4) {
    const e2 = {};
    for (const n3 in t4) e2[n3] = true;
    return e2;
  }($2);
  let { id: b2 = "1" } = o2, { nodes: k2 } = o2, { edges: _2 } = o2, { fitView: S2 } = o2, { fitViewOptions: E2 } = o2, { minZoom: C2 } = o2, { maxZoom: O2 } = o2, { initialViewport: P2 } = o2, { viewport: M2 } = o2;
  g2();
  let z2, N2, L2, { nodeTypes: I2 } = o2, { edgeTypes: D2 } = o2, { selectionKey: A2 } = o2, { selectionMode: T2 } = o2, { panActivationKey: H2 } = o2, { multiSelectionKey: V2 } = o2, { zoomActivationKey: F2 } = o2, { nodesDraggable: W2 } = o2, { nodesConnectable: X2 } = o2, { nodeDragThreshold: Y2 } = o2, { elementsSelectable: B2 } = o2, { snapGrid: K2 } = o2, { deleteKey: j2 } = o2, { connectionRadius: Q2 } = o2, { connectionLineType: J2 } = o2, { connectionMode: tt2 = ar.Strict } = o2, { connectionLineStyle: et2 = "" } = o2, { connectionLineContainerStyle: nt2 = "" } = o2, { onMoveStart: ot2 } = o2, { onMove: it2 } = o2, { onMoveEnd: rt2 } = o2, { isValidConnection: st2 } = o2, { translateExtent: at2 } = o2, { nodeExtent: lt2 } = o2, { onlyRenderVisibleElements: ct2 } = o2, { panOnScrollMode: dt2 = lr.Free } = o2, { preventScrolling: ut2 = true } = o2, { zoomOnScroll: ht2 = true } = o2, { zoomOnDoubleClick: pt2 = true } = o2, { zoomOnPinch: ft2 = true } = o2, { panOnScroll: gt2 = false } = o2, { panOnDrag: mt2 = true } = o2, { selectionOnDrag: yt2 } = o2, { autoPanOnConnect: wt2 = true } = o2, { autoPanOnNodeDrag: $t2 = true } = o2, { onerror: vt2 } = o2, { ondelete: xt2 } = o2, { onedgecreate: bt2 } = o2, { attributionPosition: kt2 } = o2, { proOptions: _t2 } = o2, { defaultEdgeOptions: St2 } = o2, { width: Et2 } = o2, { height: Ct2 } = o2, { colorMode: Ot2 = "light" } = o2, { onconnect: Pt2 } = o2, { onconnectstart: Mt2 } = o2, { onconnectend: zt2 } = o2, { onbeforedelete: Nt2 } = o2, { oninit: Lt2 } = o2, { nodeOrigin: It2 } = o2, { paneClickDistance: Dt2 = 0 } = o2, { nodeClickDistance: At2 = 0 } = o2, { defaultMarkerColor: Tt2 = "#b1b1b7" } = o2, { style: Ht2 } = o2, { class: Vt2 } = o2;
  const Ft2 = u2 || P2, Wt2 = function(t4) {
    return R().$$.context.has(t4);
  }(Ta) ? Va() : function({ nodes: t4, edges: e2, width: n3, height: o3, fitView: i3, nodeOrigin: r3, nodeExtent: s3 }) {
    const a3 = Ha({ nodes: t4, edges: e2, width: n3, height: o3, fitView: i3, nodeOrigin: r3, nodeExtent: s3 });
    return G(Ta, { getStore: () => a3 }), a3;
  }({ nodes: c(k2), edges: c(_2), width: Et2, height: Ct2, fitView: S2, nodeOrigin: It2, nodeExtent: lt2 });
  Z(() => (Wt2.width.set(N2), Wt2.height.set(L2), Wt2.domNode.set(z2), Wt2.syncNodeStores(k2), Wt2.syncEdgeStores(_2), Wt2.syncViewport(M2), void 0 !== S2 && Wt2.fitViewOnInit.set(S2), E2 && Wt2.fitViewOptions.set(E2), uc(Wt2, { nodeTypes: I2, edgeTypes: D2, minZoom: C2, maxZoom: O2, translateExtent: at2, paneClickDistance: Dt2 }), () => {
    Wt2.reset();
  }));
  const { initialized: Xt2 } = Wt2;
  d(n2, Xt2, (t4) => i2(74, a2 = t4));
  let Yt2 = false;
  return n2.$$set = (t4) => {
    o2 = e(e({}, o2), m(t4)), i2(33, p2 = y(o2, s2)), "id" in t4 && i2(35, b2 = t4.id), "nodes" in t4 && i2(36, k2 = t4.nodes), "edges" in t4 && i2(37, _2 = t4.edges), "fitView" in t4 && i2(38, S2 = t4.fitView), "fitViewOptions" in t4 && i2(39, E2 = t4.fitViewOptions), "minZoom" in t4 && i2(40, C2 = t4.minZoom), "maxZoom" in t4 && i2(41, O2 = t4.maxZoom), "initialViewport" in t4 && i2(42, P2 = t4.initialViewport), "viewport" in t4 && g2(i2(0, M2 = t4.viewport)), "nodeTypes" in t4 && i2(43, I2 = t4.nodeTypes), "edgeTypes" in t4 && i2(44, D2 = t4.edgeTypes), "selectionKey" in t4 && i2(1, A2 = t4.selectionKey), "selectionMode" in t4 && i2(45, T2 = t4.selectionMode), "panActivationKey" in t4 && i2(2, H2 = t4.panActivationKey), "multiSelectionKey" in t4 && i2(3, V2 = t4.multiSelectionKey), "zoomActivationKey" in t4 && i2(4, F2 = t4.zoomActivationKey), "nodesDraggable" in t4 && i2(46, W2 = t4.nodesDraggable), "nodesConnectable" in t4 && i2(47, X2 = t4.nodesConnectable), "nodeDragThreshold" in t4 && i2(48, Y2 = t4.nodeDragThreshold), "elementsSelectable" in t4 && i2(49, B2 = t4.elementsSelectable), "snapGrid" in t4 && i2(50, K2 = t4.snapGrid), "deleteKey" in t4 && i2(5, j2 = t4.deleteKey), "connectionRadius" in t4 && i2(51, Q2 = t4.connectionRadius), "connectionLineType" in t4 && i2(52, J2 = t4.connectionLineType), "connectionMode" in t4 && i2(53, tt2 = t4.connectionMode), "connectionLineStyle" in t4 && i2(6, et2 = t4.connectionLineStyle), "connectionLineContainerStyle" in t4 && i2(7, nt2 = t4.connectionLineContainerStyle), "onMoveStart" in t4 && i2(8, ot2 = t4.onMoveStart), "onMove" in t4 && i2(9, it2 = t4.onMove), "onMoveEnd" in t4 && i2(10, rt2 = t4.onMoveEnd), "isValidConnection" in t4 && i2(54, st2 = t4.isValidConnection), "translateExtent" in t4 && i2(55, at2 = t4.translateExtent), "nodeExtent" in t4 && i2(56, lt2 = t4.nodeExtent), "onlyRenderVisibleElements" in t4 && i2(57, ct2 = t4.onlyRenderVisibleElements), "panOnScrollMode" in t4 && i2(11, dt2 = t4.panOnScrollMode), "preventScrolling" in t4 && i2(12, ut2 = t4.preventScrolling), "zoomOnScroll" in t4 && i2(13, ht2 = t4.zoomOnScroll), "zoomOnDoubleClick" in t4 && i2(14, pt2 = t4.zoomOnDoubleClick), "zoomOnPinch" in t4 && i2(15, ft2 = t4.zoomOnPinch), "panOnScroll" in t4 && i2(16, gt2 = t4.panOnScroll), "panOnDrag" in t4 && i2(17, mt2 = t4.panOnDrag), "selectionOnDrag" in t4 && i2(18, yt2 = t4.selectionOnDrag), "autoPanOnConnect" in t4 && i2(58, wt2 = t4.autoPanOnConnect), "autoPanOnNodeDrag" in t4 && i2(59, $t2 = t4.autoPanOnNodeDrag), "onerror" in t4 && i2(60, vt2 = t4.onerror), "ondelete" in t4 && i2(61, xt2 = t4.ondelete), "onedgecreate" in t4 && i2(62, bt2 = t4.onedgecreate), "attributionPosition" in t4 && i2(19, kt2 = t4.attributionPosition), "proOptions" in t4 && i2(20, _t2 = t4.proOptions), "defaultEdgeOptions" in t4 && i2(21, St2 = t4.defaultEdgeOptions), "width" in t4 && i2(63, Et2 = t4.width), "height" in t4 && i2(64, Ct2 = t4.height), "colorMode" in t4 && i2(65, Ot2 = t4.colorMode), "onconnect" in t4 && i2(66, Pt2 = t4.onconnect), "onconnectstart" in t4 && i2(67, Mt2 = t4.onconnectstart), "onconnectend" in t4 && i2(68, zt2 = t4.onconnectend), "onbeforedelete" in t4 && i2(69, Nt2 = t4.onbeforedelete), "oninit" in t4 && i2(70, Lt2 = t4.oninit), "nodeOrigin" in t4 && i2(71, It2 = t4.nodeOrigin), "paneClickDistance" in t4 && i2(22, Dt2 = t4.paneClickDistance), "nodeClickDistance" in t4 && i2(23, At2 = t4.nodeClickDistance), "defaultMarkerColor" in t4 && i2(72, Tt2 = t4.defaultMarkerColor), "style" in t4 && i2(24, Ht2 = t4.style), "class" in t4 && i2(25, Vt2 = t4.class), "$$scope" in t4 && i2(99, v2 = t4.$$scope);
  }, n2.$$.update = () => {
    if (201326592 & n2.$$.dirty[0] && void 0 !== N2 && void 0 !== L2 && (Wt2.width.set(N2), Wt2.height.set(L2)), 6400 & n2.$$.dirty[2] && !Yt2 && a2 && (Lt2 == null ? void 0 : Lt2(), i2(73, Yt2 = true)), 2097135632 & n2.$$.dirty[1] | 1777 & n2.$$.dirty[2]) {
      hc(Wt2, { flowId: b2, connectionLineType: J2, connectionRadius: Q2, selectionMode: T2, snapGrid: K2, defaultMarkerColor: Tt2, nodesDraggable: W2, nodesConnectable: X2, elementsSelectable: B2, onlyRenderVisibleElements: ct2, isValidConnection: st2, autoPanOnConnect: wt2, autoPanOnNodeDrag: $t2, onerror: vt2, ondelete: xt2, onedgecreate: bt2, connectionMode: tt2, nodeDragThreshold: Y2, onconnect: Pt2, onconnectstart: Mt2, onconnectend: zt2, onbeforedelete: Nt2, nodeOrigin: It2 });
    }
    4194304 & n2.$$.dirty[0] | 16791040 & n2.$$.dirty[1] && uc(Wt2, { nodeTypes: I2, edgeTypes: D2, minZoom: C2, maxZoom: O2, translateExtent: at2, paneClickDistance: Dt2 }), 8 & n2.$$.dirty[2] && (i2(29, r2 = pc(Ot2)), w2(), w2 = l(r2, (t4) => i2(30, h2 = t4)));
  }, [M2, A2, H2, V2, F2, j2, et2, nt2, ot2, it2, rt2, dt2, ut2, ht2, pt2, ft2, gt2, mt2, yt2, kt2, _t2, St2, Dt2, At2, Ht2, Vt2, N2, L2, z2, r2, h2, Ft2, Xt2, p2, x2, b2, k2, _2, S2, E2, C2, O2, P2, I2, D2, T2, W2, X2, Y2, B2, K2, Q2, J2, tt2, st2, at2, lt2, ct2, wt2, $t2, vt2, xt2, bt2, Et2, Ct2, Ot2, Pt2, Mt2, zt2, Nt2, Lt2, It2, Tt2, Yt2, a2, $2, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    q.call(this, n2, t4);
  }, function(t4) {
    U[t4 ? "unshift" : "push"](() => {
      z2 = t4, i2(28, z2);
    });
  }, function() {
    N2 = this.clientWidth, L2 = this.clientHeight, i2(26, N2), i2(27, L2);
  }, v2];
}
var bc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, xc, vc, s, { id: 35, nodes: 36, edges: 37, fitView: 38, fitViewOptions: 39, minZoom: 40, maxZoom: 41, initialViewport: 42, viewport: 0, nodeTypes: 43, edgeTypes: 44, selectionKey: 1, selectionMode: 45, panActivationKey: 2, multiSelectionKey: 3, zoomActivationKey: 4, nodesDraggable: 46, nodesConnectable: 47, nodeDragThreshold: 48, elementsSelectable: 49, snapGrid: 50, deleteKey: 5, connectionRadius: 51, connectionLineType: 52, connectionMode: 53, connectionLineStyle: 6, connectionLineContainerStyle: 7, onMoveStart: 8, onMove: 9, onMoveEnd: 10, isValidConnection: 54, translateExtent: 55, nodeExtent: 56, onlyRenderVisibleElements: 57, panOnScrollMode: 11, preventScrolling: 12, zoomOnScroll: 13, zoomOnDoubleClick: 14, zoomOnPinch: 15, panOnScroll: 16, panOnDrag: 17, selectionOnDrag: 18, autoPanOnConnect: 58, autoPanOnNodeDrag: 59, onerror: 60, ondelete: 61, onedgecreate: 62, attributionPosition: 19, proOptions: 20, defaultEdgeOptions: 21, width: 63, height: 64, colorMode: 65, onconnect: 66, onconnectstart: 67, onconnectend: 68, onbeforedelete: 69, oninit: 70, nodeOrigin: 71, paneClickDistance: 22, nodeClickDistance: 23, defaultMarkerColor: 72, style: 24, class: 25 }, null, [-1, -1, -1, -1]);
  }
};
function kc(t4) {
  let e2;
  const n2 = t4[7].default, o2 = u(n2, t4, t4[6], null);
  return { c() {
    o2 && o2.c();
  }, m(t5, n3) {
    o2 && o2.m(t5, n3), e2 = true;
  }, p(t5, [i2]) {
    o2 && o2.p && (!e2 || 64 & i2) && f(o2, n2, t5, t5[6], e2 ? p(n2, t5[6], i2, null) : g(t5[6]), null);
  }, i(t5) {
    e2 || (ft(o2, t5), e2 = true);
  }, o(t5) {
    gt(o2, t5), e2 = false;
  }, d(t5) {
    o2 && o2.d(t5);
  } };
}
function _c(t4, e2, n2) {
  let { $$slots: o2 = {}, $$scope: i2 } = e2, { initialNodes: r2 } = e2, { initialEdges: s2 } = e2, { initialWidth: a2 } = e2, { initialHeight: l2 } = e2, { fitView: c2 } = e2, { nodeOrigin: d2 } = e2;
  const u2 = Ha({ nodes: r2, edges: s2, width: a2, height: l2, nodeOrigin: d2, fitView: c2 });
  return G(Ta, { getStore: () => u2 }), B(() => {
    u2.reset();
  }), t4.$$set = (t5) => {
    "initialNodes" in t5 && n2(0, r2 = t5.initialNodes), "initialEdges" in t5 && n2(1, s2 = t5.initialEdges), "initialWidth" in t5 && n2(2, a2 = t5.initialWidth), "initialHeight" in t5 && n2(3, l2 = t5.initialHeight), "fitView" in t5 && n2(4, c2 = t5.fitView), "nodeOrigin" in t5 && n2(5, d2 = t5.nodeOrigin), "$$scope" in t5 && n2(6, i2 = t5.$$scope);
  }, [r2, s2, a2, l2, c2, d2, i2, o2];
}
var Sc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, _c, kc, s, { initialNodes: 0, initialEdges: 1, initialWidth: 2, initialHeight: 3, fitView: 4, nodeOrigin: 5 });
  }
};
var Ec = (t4) => ({});
var Cc = (t4) => ({ class: "button-svg" });
function Oc(t4) {
  let n2, o2, i2, r2, s2;
  const a2 = t4[8].default, l2 = u(a2, t4, t4[7], Cc);
  let c2 = [{ type: "button" }, { class: o2 = me(["svelte-flow__controls-button", t4[0]]) }, t4[6]], d2 = {};
  for (let t5 = 0; t5 < c2.length; t5 += 1) d2 = e(d2, c2[t5]);
  return { c() {
    n2 = E("button"), l2 && l2.c(), I(n2, d2), A(n2, "--xy-controls-button-background-color-props", t4[1]), A(n2, "--xy-controls-button-background-color-hover-props", t4[2]), A(n2, "--xy-controls-button-color-props", t4[3]), A(n2, "--xy-controls-button-color-hover-props", t4[4]), A(n2, "--xy-controls-button-border-color-props", t4[5]);
  }, m(e2, o3) {
    k(e2, n2, o3), l2 && l2.m(n2, null), n2.autofocus && n2.focus(), i2 = true, r2 || (s2 = z(n2, "click", t4[9]), r2 = true);
  }, p(t5, [e2]) {
    l2 && l2.p && (!i2 || 128 & e2) && f(l2, a2, t5, t5[7], i2 ? p(a2, t5[7], e2, Ec) : g(t5[7]), Cc), I(n2, d2 = $t(c2, [{ type: "button" }, (!i2 || 1 & e2 && o2 !== (o2 = me(["svelte-flow__controls-button", t5[0]]))) && { class: o2 }, 64 & e2 && t5[6]])), A(n2, "--xy-controls-button-background-color-props", t5[1]), A(n2, "--xy-controls-button-background-color-hover-props", t5[2]), A(n2, "--xy-controls-button-color-props", t5[3]), A(n2, "--xy-controls-button-color-hover-props", t5[4]), A(n2, "--xy-controls-button-border-color-props", t5[5]);
  }, i(t5) {
    i2 || (ft(l2, t5), i2 = true);
  }, o(t5) {
    gt(l2, t5), i2 = false;
  }, d(t5) {
    t5 && _(n2), l2 && l2.d(t5), r2 = false, s2();
  } };
}
function Pc(t4, n2, o2) {
  const i2 = ["class"];
  let r2, s2, a2, l2, c2, d2 = y(n2, i2), { $$slots: u2 = {}, $$scope: h2 } = n2, { class: p2 } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(6, d2 = y(n2, i2)), "class" in t5 && o2(0, p2 = t5.class), "$$scope" in t5 && o2(7, h2 = t5.$$scope);
  }, [p2, r2, s2, a2, l2, c2, d2, h2, u2, function(e2) {
    q.call(this, t4, e2);
  }];
}
var Mc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Pc, Oc, s, { class: 0 });
  }
};
function zc(e2) {
  let n2, o2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), N(o2, "d", "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "viewBox", "0 0 32 32");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2);
  }, p: t, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
var Nc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, null, zc, s, {});
  }
};
function Lc(e2) {
  let n2, o2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), N(o2, "d", "M0 0h32v4.2H0z"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "viewBox", "0 0 32 5");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2);
  }, p: t, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
var Ic = class extends Et {
  constructor(t4) {
    super(), St(this, t4, null, Lc, s, {});
  }
};
function Dc(e2) {
  let n2, o2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), N(o2, "d", "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "viewBox", "0 0 32 30");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2);
  }, p: t, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
var Ac = class extends Et {
  constructor(t4) {
    super(), St(this, t4, null, Dc, s, {});
  }
};
function Tc(e2) {
  let n2, o2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), N(o2, "d", "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "viewBox", "0 0 25 32");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2);
  }, p: t, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
var Hc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, null, Tc, s, {});
  }
};
function Vc(e2) {
  let n2, o2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), N(o2, "d", "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "viewBox", "0 0 25 32");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2);
  }, p: t, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
var Fc = class extends Et {
  constructor(t4) {
    super(), St(this, t4, null, Vc, s, {});
  }
};
var Wc = (t4) => ({});
var Xc = (t4) => ({});
var Yc = (t4) => ({});
var Rc = (t4) => ({});
function Zc(t4) {
  let n2, o2, i2, r2;
  const s2 = [{ class: "svelte-flow__controls-zoomin" }, { title: "zoom in" }, { "aria-label": "zoom in" }, { disabled: t4[9] }, t4[17]];
  let a2 = { $$slots: { default: [Bc] }, $$scope: { ctx: t4 } };
  for (let t5 = 0; t5 < s2.length; t5 += 1) a2 = e(a2, s2[t5]);
  n2 = new Mc({ props: a2 }), n2.$on("click", t4[18]);
  const l2 = [{ class: "svelte-flow__controls-zoomout" }, { title: "zoom out" }, { "aria-label": "zoom out" }, { disabled: t4[10] }, t4[17]];
  let c2 = { $$slots: { default: [Kc] }, $$scope: { ctx: t4 } };
  for (let t5 = 0; t5 < l2.length; t5 += 1) c2 = e(c2, l2[t5]);
  return i2 = new Mc({ props: c2 }), i2.$on("click", t4[19]), { c() {
    bt(n2.$$.fragment), o2 = P(), bt(i2.$$.fragment);
  }, m(t5, e2) {
    kt(n2, t5, e2), k(t5, o2, e2), kt(i2, t5, e2), r2 = true;
  }, p(t5, e2) {
    const o3 = 131584 & e2[0] ? $t(s2, [s2[0], s2[1], s2[2], 512 & e2[0] && { disabled: t5[9] }, 131072 & e2[0] && vt(t5[17])]) : {};
    32 & e2[1] && (o3.$$scope = { dirty: e2, ctx: t5 }), n2.$set(o3);
    const r3 = 132096 & e2[0] ? $t(l2, [l2[0], l2[1], l2[2], 1024 & e2[0] && { disabled: t5[10] }, 131072 & e2[0] && vt(t5[17])]) : {};
    32 & e2[1] && (r3.$$scope = { dirty: e2, ctx: t5 }), i2.$set(r3);
  }, i(t5) {
    r2 || (ft(n2.$$.fragment, t5), ft(i2.$$.fragment, t5), r2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), gt(i2.$$.fragment, t5), r2 = false;
  }, d(t5) {
    t5 && _(o2), _t(n2, t5), _t(i2, t5);
  } };
}
function Bc(t4) {
  let e2, n2;
  return e2 = new Nc({}), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Kc(t4) {
  let e2, n2;
  return e2 = new Ic({}), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Gc(t4) {
  let n2, o2;
  const i2 = [{ class: "svelte-flow__controls-fitview" }, { title: "fit view" }, { "aria-label": "fit view" }, t4[17]];
  let r2 = { $$slots: { default: [jc] }, $$scope: { ctx: t4 } };
  for (let t5 = 0; t5 < i2.length; t5 += 1) r2 = e(r2, i2[t5]);
  return n2 = new Mc({ props: r2 }), n2.$on("click", t4[20]), { c() {
    bt(n2.$$.fragment);
  }, m(t5, e2) {
    kt(n2, t5, e2), o2 = true;
  }, p(t5, e2) {
    const o3 = 131072 & e2[0] ? $t(i2, [i2[0], i2[1], i2[2], vt(t5[17])]) : {};
    32 & e2[1] && (o3.$$scope = { dirty: e2, ctx: t5 }), n2.$set(o3);
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    _t(n2, t5);
  } };
}
function jc(t4) {
  let e2, n2;
  return e2 = new Ac({}), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function qc(t4) {
  let n2, o2;
  const i2 = [{ class: "svelte-flow__controls-interactive" }, { title: "toggle interactivity" }, { "aria-label": "toggle interactivity" }, t4[17]];
  let r2 = { $$slots: { default: [Jc] }, $$scope: { ctx: t4 } };
  for (let t5 = 0; t5 < i2.length; t5 += 1) r2 = e(r2, i2[t5]);
  return n2 = new Mc({ props: r2 }), n2.$on("click", t4[21]), { c() {
    bt(n2.$$.fragment);
  }, m(t5, e2) {
    kt(n2, t5, e2), o2 = true;
  }, p(t5, e2) {
    const o3 = 131072 & e2[0] ? $t(i2, [i2[0], i2[1], i2[2], vt(t5[17])]) : {};
    256 & e2[0] | 32 & e2[1] && (o3.$$scope = { dirty: e2, ctx: t5 }), n2.$set(o3);
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    _t(n2, t5);
  } };
}
function Qc(t4) {
  let e2, n2;
  return e2 = new Hc({}), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Uc(t4) {
  let e2, n2;
  return e2 = new Fc({}), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Jc(t4) {
  let e2, n2, o2, i2;
  const r2 = [Uc, Qc], s2 = [];
  function a2(t5, e3) {
    return t5[8] ? 0 : 1;
  }
  return e2 = a2(t4), n2 = s2[e2] = r2[e2](t4), { c() {
    n2.c(), o2 = M();
  }, m(t5, n3) {
    s2[e2].m(t5, n3), k(t5, o2, n3), i2 = true;
  }, p(t5, i3) {
    let l2 = e2;
    e2 = a2(t5), e2 !== l2 && (ht(), gt(s2[l2], 1, 1, () => {
      s2[l2] = null;
    }), pt(), n2 = s2[e2], n2 || (n2 = s2[e2] = r2[e2](t5), n2.c()), ft(n2, 1), n2.m(o2.parentNode, o2));
  }, i(t5) {
    i2 || (ft(n2), i2 = true);
  }, o(t5) {
    gt(n2), i2 = false;
  }, d(t5) {
    t5 && _(o2), s2[e2].d(t5);
  } };
}
function td(t4) {
  let e2, n2, o2, i2, r2, s2;
  const a2 = t4[35].before, l2 = u(a2, t4, t4[36], Rc);
  let c2 = t4[1] && Zc(t4), d2 = t4[2] && Gc(t4), h2 = t4[3] && qc(t4);
  const m2 = t4[35].default, y2 = u(m2, t4, t4[36], null), w2 = t4[35].after, $2 = u(w2, t4, t4[36], Xc);
  return { c() {
    l2 && l2.c(), e2 = P(), c2 && c2.c(), n2 = P(), d2 && d2.c(), o2 = P(), h2 && h2.c(), i2 = P(), y2 && y2.c(), r2 = P(), $2 && $2.c();
  }, m(t5, a3) {
    l2 && l2.m(t5, a3), k(t5, e2, a3), c2 && c2.m(t5, a3), k(t5, n2, a3), d2 && d2.m(t5, a3), k(t5, o2, a3), h2 && h2.m(t5, a3), k(t5, i2, a3), y2 && y2.m(t5, a3), k(t5, r2, a3), $2 && $2.m(t5, a3), s2 = true;
  }, p(t5, e3) {
    l2 && l2.p && (!s2 || 32 & e3[1]) && f(l2, a2, t5, t5[36], s2 ? p(a2, t5[36], e3, Yc) : g(t5[36]), Rc), t5[1] ? c2 ? (c2.p(t5, e3), 2 & e3[0] && ft(c2, 1)) : (c2 = Zc(t5), c2.c(), ft(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (ht(), gt(c2, 1, 1, () => {
      c2 = null;
    }), pt()), t5[2] ? d2 ? (d2.p(t5, e3), 4 & e3[0] && ft(d2, 1)) : (d2 = Gc(t5), d2.c(), ft(d2, 1), d2.m(o2.parentNode, o2)) : d2 && (ht(), gt(d2, 1, 1, () => {
      d2 = null;
    }), pt()), t5[3] ? h2 ? (h2.p(t5, e3), 8 & e3[0] && ft(h2, 1)) : (h2 = qc(t5), h2.c(), ft(h2, 1), h2.m(i2.parentNode, i2)) : h2 && (ht(), gt(h2, 1, 1, () => {
      h2 = null;
    }), pt()), y2 && y2.p && (!s2 || 32 & e3[1]) && f(y2, m2, t5, t5[36], s2 ? p(m2, t5[36], e3, null) : g(t5[36]), null), $2 && $2.p && (!s2 || 32 & e3[1]) && f($2, w2, t5, t5[36], s2 ? p(w2, t5[36], e3, Wc) : g(t5[36]), Xc);
  }, i(t5) {
    s2 || (ft(l2, t5), ft(c2), ft(d2), ft(h2), ft(y2, t5), ft($2, t5), s2 = true);
  }, o(t5) {
    gt(l2, t5), gt(c2), gt(d2), gt(h2), gt(y2, t5), gt($2, t5), s2 = false;
  }, d(t5) {
    t5 && (_(e2), _(n2), _(o2), _(i2), _(r2)), l2 && l2.d(t5), c2 && c2.d(t5), d2 && d2.d(t5), h2 && h2.d(t5), y2 && y2.d(t5), $2 && $2.d(t5);
  } };
}
function ed(t4) {
  var _a2;
  let e2, n2;
  return e2 = new rc({ props: { class: me(["svelte-flow__controls", t4[7], t4[6]]), position: t4[0], "data-testid": "svelte-flow__controls", "aria-label": (_a2 = t4[4]) != null ? _a2 : "Svelte Flow controls", style: t4[5], $$slots: { default: [td] }, $$scope: { ctx: t4 } } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    var _a3;
    const o2 = {};
    192 & n3[0] && (o2.class = me(["svelte-flow__controls", t5[7], t5[6]])), 1 & n3[0] && (o2.position = t5[0]), 16 & n3[0] && (o2["aria-label"] = (_a3 = t5[4]) != null ? _a3 : "Svelte Flow controls"), 32 & n3[0] && (o2.style = t5[5]), 1806 & n3[0] | 32 & n3[1] && (o2.$$scope = { dirty: n3, ctx: t5 }), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function nd(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, c2, u2, h2, p2, { $$slots: f2 = {}, $$scope: g2 } = e2, { position: m2 = "bottom-left" } = e2, { showZoom: y2 = true } = e2, { showFitView: w2 = true } = e2, { showLock: $2 = true } = e2, { buttonBgColor: v2 } = e2, { buttonBgColorHover: x2 } = e2, { buttonColor: b2 } = e2, { buttonColorHover: k2 } = e2, { buttonBorderColor: _2 } = e2, { ariaLabel: S2 } = e2, { style: E2 } = e2, { orientation: C2 = "vertical" } = e2, { fitViewOptions: O2 } = e2, { class: P2 = "" } = e2;
  const { zoomIn: M2, zoomOut: z2, fitView: N2, viewport: L2, minZoom: I2, maxZoom: D2, nodesDraggable: A2, nodesConnectable: T2, elementsSelectable: H2 } = Va();
  d(t4, L2, (t5) => n2(30, l2 = t5)), d(t4, I2, (t5) => n2(31, c2 = t5)), d(t4, D2, (t5) => n2(29, a2 = t5)), d(t4, A2, (t5) => n2(34, p2 = t5)), d(t4, T2, (t5) => n2(33, h2 = t5)), d(t4, H2, (t5) => n2(32, u2 = t5));
  const V2 = { bgColor: v2, bgColorHover: x2, color: b2, colorHover: k2, borderColor: _2 };
  return t4.$$set = (t5) => {
    "position" in t5 && n2(0, m2 = t5.position), "showZoom" in t5 && n2(1, y2 = t5.showZoom), "showFitView" in t5 && n2(2, w2 = t5.showFitView), "showLock" in t5 && n2(3, $2 = t5.showLock), "buttonBgColor" in t5 && n2(22, v2 = t5.buttonBgColor), "buttonBgColorHover" in t5 && n2(23, x2 = t5.buttonBgColorHover), "buttonColor" in t5 && n2(24, b2 = t5.buttonColor), "buttonColorHover" in t5 && n2(25, k2 = t5.buttonColorHover), "buttonBorderColor" in t5 && n2(26, _2 = t5.buttonBorderColor), "ariaLabel" in t5 && n2(4, S2 = t5.ariaLabel), "style" in t5 && n2(5, E2 = t5.style), "orientation" in t5 && n2(27, C2 = t5.orientation), "fitViewOptions" in t5 && n2(28, O2 = t5.fitViewOptions), "class" in t5 && n2(6, P2 = t5.class), "$$scope" in t5 && n2(36, g2 = t5.$$scope);
  }, t4.$$.update = () => {
    14 & t4.$$.dirty[1] && n2(8, o2 = p2 || h2 || u2), 1073741824 & t4.$$.dirty[0] | 1 & t4.$$.dirty[1] && n2(10, i2 = l2.zoom <= c2), 1610612736 & t4.$$.dirty[0] && n2(9, r2 = l2.zoom >= a2), 134217728 & t4.$$.dirty[0] && n2(7, s2 = "horizontal" === C2 ? "horizontal" : "vertical");
  }, [m2, y2, w2, $2, S2, E2, P2, s2, o2, r2, i2, L2, I2, D2, A2, T2, H2, V2, () => {
    M2();
  }, () => {
    z2();
  }, () => {
    N2(O2);
  }, () => {
    n2(8, o2 = !o2), A2.set(o2), T2.set(o2), H2.set(o2);
  }, v2, x2, b2, k2, _2, C2, O2, a2, l2, c2, u2, h2, p2, f2, g2];
}
var od;
var id = class extends Et {
  constructor(t4) {
    super(), St(this, t4, nd, ed, s, { position: 0, showZoom: 1, showFitView: 2, showLock: 3, buttonBgColor: 22, buttonBgColorHover: 23, buttonColor: 24, buttonColorHover: 25, buttonBorderColor: 26, ariaLabel: 4, style: 5, orientation: 27, fitViewOptions: 28, class: 6 }, null, [-1, -1]);
  }
};
function rd(e2) {
  let n2, o2;
  return { c() {
    n2 = C("circle"), N(n2, "cx", e2[0]), N(n2, "cy", e2[0]), N(n2, "r", e2[0]), N(n2, "class", o2 = me(["svelte-flow__background-pattern", "dots", e2[1]]));
  }, m(t4, e3) {
    k(t4, n2, e3);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "cx", t4[0]), 1 & e3 && N(n2, "cy", t4[0]), 1 & e3 && N(n2, "r", t4[0]), 2 & e3 && o2 !== (o2 = me(["svelte-flow__background-pattern", "dots", t4[1]])) && N(n2, "class", o2);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function sd(t4, e2, n2) {
  let { radius: o2 = 5 } = e2, { class: i2 = "" } = e2;
  return t4.$$set = (t5) => {
    "radius" in t5 && n2(0, o2 = t5.radius), "class" in t5 && n2(1, i2 = t5.class);
  }, [o2, i2];
}
!function(t4) {
  t4.Lines = "lines", t4.Dots = "dots", t4.Cross = "cross";
}(od || (od = {}));
var ad = class extends Et {
  constructor(t4) {
    super(), St(this, t4, sd, rd, s, { radius: 0, class: 1 });
  }
};
function ld(e2) {
  let n2, o2, i2;
  return { c() {
    n2 = C("path"), N(n2, "stroke-width", e2[0]), N(n2, "d", o2 = `M${e2[1][0] / 2} 0 V${e2[1][1]} M0 ${e2[1][1] / 2} H${e2[1][0]}`), N(n2, "class", i2 = me(["svelte-flow__background-pattern", e2[2], e2[3]]));
  }, m(t4, e3) {
    k(t4, n2, e3);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "stroke-width", t4[0]), 2 & e3 && o2 !== (o2 = `M${t4[1][0] / 2} 0 V${t4[1][1]} M0 ${t4[1][1] / 2} H${t4[1][0]}`) && N(n2, "d", o2), 12 & e3 && i2 !== (i2 = me(["svelte-flow__background-pattern", t4[2], t4[3]])) && N(n2, "class", i2);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function cd(t4, e2, n2) {
  let { lineWidth: o2 = 1 } = e2, { dimensions: i2 } = e2, { variant: r2 } = e2, { class: s2 = "" } = e2;
  return t4.$$set = (t5) => {
    "lineWidth" in t5 && n2(0, o2 = t5.lineWidth), "dimensions" in t5 && n2(1, i2 = t5.dimensions), "variant" in t5 && n2(2, r2 = t5.variant), "class" in t5 && n2(3, s2 = t5.class);
  }, [o2, i2, r2, s2];
}
var dd = class extends Et {
  constructor(t4) {
    super(), St(this, t4, cd, ld, s, { lineWidth: 0, dimensions: 1, variant: 2, class: 3 });
  }
};
function ud(t4) {
  let e2, n2;
  return e2 = new dd({ props: { dimensions: t4[6], variant: t4[0], lineWidth: t4[1], class: t4[4] } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    64 & n3 && (o2.dimensions = t5[6]), 1 & n3 && (o2.variant = t5[0]), 2 & n3 && (o2.lineWidth = t5[1]), 16 & n3 && (o2.class = t5[4]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function hd(t4) {
  let e2, n2;
  return e2 = new ad({ props: { radius: t4[7] / 2, class: t4[4] } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    128 & n3 && (o2.radius = t5[7] / 2), 16 & n3 && (o2.class = t5[4]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function pd(t4) {
  let e2, n2, o2, i2, r2, s2, a2, l2, c2, d2, u2, h2, p2;
  const f2 = [hd, ud], g2 = [];
  return o2 = function(t5) {
    return t5[14] ? 0 : 1;
  }(t4), i2 = g2[o2] = f2[o2](t4), { c() {
    e2 = C("svg"), n2 = C("pattern"), i2.c(), d2 = C("rect"), N(n2, "id", t4[11]), N(n2, "x", r2 = t4[9].x % t4[8][0]), N(n2, "y", s2 = t4[9].y % t4[8][1]), N(n2, "width", a2 = t4[8][0]), N(n2, "height", l2 = t4[8][1]), N(n2, "patternUnits", "userSpaceOnUse"), N(n2, "patternTransform", c2 = `translate(-${t4[10][0]},-${t4[10][1]})`), N(d2, "x", "0"), N(d2, "y", "0"), N(d2, "width", "100%"), N(d2, "height", "100%"), N(d2, "fill", u2 = `url(#${t4[11]})`), N(e2, "class", h2 = w(me(["svelte-flow__background", t4[5]])) + " svelte-1r7pe8d"), N(e2, "data-testid", "svelte-flow__background"), A(e2, "--xy-background-color-props", t4[2]), A(e2, "--xy-background-pattern-color-props", t4[3]);
  }, m(t5, i3) {
    k(t5, e2, i3), b(e2, n2), g2[o2].m(n2, null), b(e2, d2), p2 = true;
  }, p(t5, [o3]) {
    i2.p(t5, o3), (!p2 || 2048 & o3) && N(n2, "id", t5[11]), (!p2 || 768 & o3 && r2 !== (r2 = t5[9].x % t5[8][0])) && N(n2, "x", r2), (!p2 || 768 & o3 && s2 !== (s2 = t5[9].y % t5[8][1])) && N(n2, "y", s2), (!p2 || 256 & o3 && a2 !== (a2 = t5[8][0])) && N(n2, "width", a2), (!p2 || 256 & o3 && l2 !== (l2 = t5[8][1])) && N(n2, "height", l2), (!p2 || 1024 & o3 && c2 !== (c2 = `translate(-${t5[10][0]},-${t5[10][1]})`)) && N(n2, "patternTransform", c2), (!p2 || 2048 & o3 && u2 !== (u2 = `url(#${t5[11]})`)) && N(d2, "fill", u2), (!p2 || 32 & o3 && h2 !== (h2 = w(me(["svelte-flow__background", t5[5]])) + " svelte-1r7pe8d")) && N(e2, "class", h2), 4 & o3 && A(e2, "--xy-background-color-props", t5[2]), 8 & o3 && A(e2, "--xy-background-pattern-color-props", t5[3]);
  }, i(t5) {
    p2 || (ft(i2), p2 = true);
  }, o(t5) {
    gt(i2), p2 = false;
  }, d(t5) {
    t5 && _(e2), g2[o2].d();
  } };
}
var fd = { [od.Dots]: 1, [od.Lines]: 1, [od.Cross]: 6 };
function gd(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, c2, { id: u2 } = e2, { variant: h2 = od.Dots } = e2, { gap: p2 = 20 } = e2, { size: f2 = 1 } = e2, { lineWidth: g2 = 1 } = e2, { bgColor: m2 } = e2, { patternColor: y2 } = e2, { patternClass: w2 } = e2, { class: $2 = "" } = e2;
  const { viewport: v2, flowId: x2 } = Va();
  d(t4, v2, (t5) => n2(9, l2 = t5)), d(t4, x2, (t5) => n2(18, c2 = t5));
  const b2 = f2 || fd[h2], k2 = h2 === od.Dots, _2 = h2 === od.Cross, S2 = Array.isArray(p2) ? p2 : [p2, p2];
  return t4.$$set = (t5) => {
    "id" in t5 && n2(15, u2 = t5.id), "variant" in t5 && n2(0, h2 = t5.variant), "gap" in t5 && n2(16, p2 = t5.gap), "size" in t5 && n2(17, f2 = t5.size), "lineWidth" in t5 && n2(1, g2 = t5.lineWidth), "bgColor" in t5 && n2(2, m2 = t5.bgColor), "patternColor" in t5 && n2(3, y2 = t5.patternColor), "patternClass" in t5 && n2(4, w2 = t5.patternClass), "class" in t5 && n2(5, $2 = t5.class);
  }, t4.$$.update = () => {
    294912 & t4.$$.dirty && n2(11, o2 = `background-pattern-${c2}-${u2 || ""}`), 512 & t4.$$.dirty && n2(8, i2 = [S2[0] * l2.zoom || 1, S2[1] * l2.zoom || 1]), 512 & t4.$$.dirty && n2(7, r2 = b2 * l2.zoom), 384 & t4.$$.dirty && n2(6, s2 = _2 ? [r2, r2] : i2), 192 & t4.$$.dirty && n2(10, a2 = k2 ? [r2 / 2, r2 / 2] : [s2[0] / 2, s2[1] / 2]);
  }, [h2, g2, m2, y2, w2, $2, s2, r2, i2, l2, a2, o2, v2, x2, k2, u2, p2, f2, c2];
}
var md = class extends Et {
  constructor(t4) {
    super(), St(this, t4, gd, pd, s, { id: 15, variant: 0, gap: 16, size: 17, lineWidth: 1, bgColor: 2, patternColor: 3, patternClass: 4, class: 5 });
  }
};
function yd(e2) {
  let n2, o2, i2;
  return { c() {
    n2 = C("rect"), N(n2, "class", o2 = me(["svelte-flow__minimap-node", e2[10]])), N(n2, "x", e2[0]), N(n2, "y", e2[1]), N(n2, "rx", e2[4]), N(n2, "ry", e2[4]), N(n2, "width", e2[2]), N(n2, "height", e2[3]), N(n2, "style", i2 = `${e2[5] ? `fill: ${e2[5]};` : ""}${e2[7] ? `stroke: ${e2[7]};` : ""}${e2[8] ? `stroke-width: ${e2[8]};` : ""}`), N(n2, "shape-rendering", e2[6]), W(n2, "selected", e2[9]);
  }, m(t4, e3) {
    k(t4, n2, e3);
  }, p(t4, [e3]) {
    1024 & e3 && o2 !== (o2 = me(["svelte-flow__minimap-node", t4[10]])) && N(n2, "class", o2), 1 & e3 && N(n2, "x", t4[0]), 2 & e3 && N(n2, "y", t4[1]), 16 & e3 && N(n2, "rx", t4[4]), 16 & e3 && N(n2, "ry", t4[4]), 4 & e3 && N(n2, "width", t4[2]), 8 & e3 && N(n2, "height", t4[3]), 416 & e3 && i2 !== (i2 = `${t4[5] ? `fill: ${t4[5]};` : ""}${t4[7] ? `stroke: ${t4[7]};` : ""}${t4[8] ? `stroke-width: ${t4[8]};` : ""}`) && N(n2, "style", i2), 64 & e3 && N(n2, "shape-rendering", t4[6]), 1536 & e3 && W(n2, "selected", t4[9]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function wd(t4, e2, n2) {
  let { x: o2 } = e2, { y: i2 } = e2, { width: r2 = 0 } = e2, { height: s2 = 0 } = e2, { borderRadius: a2 = 5 } = e2, { color: l2 } = e2, { shapeRendering: c2 } = e2, { strokeColor: d2 } = e2, { strokeWidth: u2 = 2 } = e2, { selected: h2 = false } = e2, { class: p2 = "" } = e2;
  return t4.$$set = (t5) => {
    "x" in t5 && n2(0, o2 = t5.x), "y" in t5 && n2(1, i2 = t5.y), "width" in t5 && n2(2, r2 = t5.width), "height" in t5 && n2(3, s2 = t5.height), "borderRadius" in t5 && n2(4, a2 = t5.borderRadius), "color" in t5 && n2(5, l2 = t5.color), "shapeRendering" in t5 && n2(6, c2 = t5.shapeRendering), "strokeColor" in t5 && n2(7, d2 = t5.strokeColor), "strokeWidth" in t5 && n2(8, u2 = t5.strokeWidth), "selected" in t5 && n2(9, h2 = t5.selected), "class" in t5 && n2(10, p2 = t5.class);
  }, [o2, i2, r2, s2, a2, l2, c2, d2, u2, h2, p2];
}
var $d = class extends Et {
  constructor(t4) {
    super(), St(this, t4, wd, yd, s, { x: 0, y: 1, width: 2, height: 3, borderRadius: 4, color: 5, shapeRendering: 6, strokeColor: 7, strokeWidth: 8, selected: 9, class: 10 });
  }
};
function vd(t4, e2) {
  const n2 = function({ domNode: t5, panZoom: e3, getTransform: n3, getViewScale: o2 }) {
    const i2 = Dn(t5);
    return { update: function({ translateExtent: t6, width: r2, height: s2, zoomStep: a2 = 10, pannable: l2 = true, zoomable: c2 = true, inversePan: d2 = false }) {
      let u2 = [0, 0];
      const h2 = er().on("start", (t7) => {
        var _a2, _b;
        "mousedown" !== t7.sourceEvent.type && "touchstart" !== t7.sourceEvent.type || (u2 = [(_a2 = t7.sourceEvent.clientX) != null ? _a2 : t7.sourceEvent.touches[0].clientX, (_b = t7.sourceEvent.clientY) != null ? _b : t7.sourceEvent.touches[0].clientY]);
      }).on("zoom", l2 ? (i3) => {
        var _a2, _b;
        const a3 = n3();
        if ("mousemove" !== i3.sourceEvent.type && "touchmove" !== i3.sourceEvent.type || !e3) return;
        const l3 = [(_a2 = i3.sourceEvent.clientX) != null ? _a2 : i3.sourceEvent.touches[0].clientX, (_b = i3.sourceEvent.clientY) != null ? _b : i3.sourceEvent.touches[0].clientY], c3 = [l3[0] - u2[0], l3[1] - u2[1]];
        u2 = l3;
        const h3 = o2() * Math.max(a3[2], Math.log(a3[2])) * (d2 ? -1 : 1), p2 = { x: a3[0] - c3[0] * h3, y: a3[1] - c3[1] * h3 }, f2 = [[0, 0], [r2, s2]];
        e3.setViewportConstrained({ x: p2.x, y: p2.y, zoom: a3[2] }, f2, t6);
      } : null).on("zoom.wheel", c2 ? (t7) => {
        const o3 = n3();
        if ("wheel" !== t7.sourceEvent.type || !e3) return;
        const i3 = -t7.sourceEvent.deltaY * (1 === t7.sourceEvent.deltaMode ? 0.05 : t7.sourceEvent.deltaMode ? 1 : 2e-3) * a2, r3 = o3[2] * Math.pow(2, i3);
        e3.scaleTo(r3);
      } : null);
      i2.call(h2, {});
    }, destroy: function() {
      i2.on("zoom", null);
    }, pointer: An };
  }({ domNode: t4, panZoom: e2.panZoom, getTransform: () => {
    const t5 = c(e2.viewport);
    return [t5.x, t5.y, t5.zoom];
  }, getViewScale: e2.getViewScale });
  return { update: function(t5) {
    n2.update({ translateExtent: t5.translateExtent, width: t5.width, height: t5.height, inversePan: t5.inversePan, zoomStep: t5.zoomStep, pannable: t5.pannable, zoomable: t5.zoomable });
  }, destroy() {
    n2.destroy();
  } };
}
function xd(t4, e2, n2) {
  const o2 = t4.slice();
  o2[55] = e2[n2];
  const i2 = o2[20].get(o2[55].id);
  return o2[56] = i2, o2;
}
function bd(t4) {
  const e2 = t4.slice(), n2 = Gr(e2[56]);
  return e2[59] = n2, e2;
}
function kd(t4) {
  let e2, n2, o2, i2, s2, a2, l2, c2, d2, u2 = [], h2 = /* @__PURE__ */ new Map(), p2 = t4[1] && _d(t4), f2 = mt(t4[19]);
  const g2 = (t5) => t5[55].id;
  for (let e3 = 0; e3 < f2.length; e3 += 1) {
    let n3 = xd(t4, f2, e3), o3 = g2(n3);
    h2.set(o3, u2[e3] = Ed(o3, n3));
  }
  return { c() {
    e2 = C("svg"), p2 && p2.c(), n2 = M();
    for (let t5 = 0; t5 < u2.length; t5 += 1) u2[t5].c();
    o2 = C("path"), N(o2, "class", "svelte-flow__minimap-mask"), N(o2, "d", i2 = "M" + (t4[26] - t4[15]) + "," + (t4[25] - t4[15]) + "h" + (t4[24] + 2 * t4[15]) + "v" + (t4[23] + 2 * t4[15]) + "h" + (-t4[24] - 2 * t4[15]) + "z\n      M" + t4[18].x + "," + t4[18].y + "h" + t4[18].width + "v" + t4[18].height + "h" + -t4[18].width + "z"), N(o2, "fill-rule", "evenodd"), N(o2, "pointer-events", "none"), N(e2, "width", t4[17]), N(e2, "height", t4[16]), N(e2, "viewBox", s2 = t4[26] + " " + t4[25] + " " + t4[24] + " " + t4[23]), N(e2, "class", "svelte-flow__minimap-svg"), N(e2, "role", "img"), N(e2, "aria-labelledby", t4[41]), A(e2, "--xy-minimap-mask-background-color-props", t4[5]), A(e2, "--xy-minimap-mask-stroke-color-props", t4[6]), A(e2, "--xy-minimap-mask-stroke-width-props", t4[7] ? t4[7] * t4[14] : void 0);
  }, m(i3, r2) {
    k(i3, e2, r2), p2 && p2.m(e2, null), b(e2, n2);
    for (let t5 = 0; t5 < u2.length; t5 += 1) u2[t5] && u2[t5].m(e2, null);
    b(e2, o2), l2 = true, c2 || (d2 = v(a2 = vd.call(null, e2, { panZoom: t4[27], viewport: t4[31], getViewScale: t4[42], translateExtent: t4[28], width: t4[22], height: t4[21], inversePan: t4[10], zoomStep: t4[11], pannable: t4[8], zoomable: t4[9] })), c2 = true);
  }, p(t5, c3) {
    t5[1] ? p2 ? p2.p(t5, c3) : (p2 = _d(t5), p2.c(), p2.m(e2, n2)) : p2 && (p2.d(1), p2 = null), 1572876 & c3[0] | 960 & c3[1] && (f2 = mt(t5[19]), ht(), u2 = wt(u2, c3, g2, 1, t5, f2, h2, e2, yt, Ed, o2, xd), pt()), (!l2 || 126124032 & c3[0] && i2 !== (i2 = "M" + (t5[26] - t5[15]) + "," + (t5[25] - t5[15]) + "h" + (t5[24] + 2 * t5[15]) + "v" + (t5[23] + 2 * t5[15]) + "h" + (-t5[24] - 2 * t5[15]) + "z\n      M" + t5[18].x + "," + t5[18].y + "h" + t5[18].width + "v" + t5[18].height + "h" + -t5[18].width + "z")) && N(o2, "d", i2), (!l2 || 131072 & c3[0]) && N(e2, "width", t5[17]), (!l2 || 65536 & c3[0]) && N(e2, "height", t5[16]), (!l2 || 125829120 & c3[0] && s2 !== (s2 = t5[26] + " " + t5[25] + " " + t5[24] + " " + t5[23])) && N(e2, "viewBox", s2), a2 && r(a2.update) && 408948480 & c3[0] && a2.update.call(null, { panZoom: t5[27], viewport: t5[31], getViewScale: t5[42], translateExtent: t5[28], width: t5[22], height: t5[21], inversePan: t5[10], zoomStep: t5[11], pannable: t5[8], zoomable: t5[9] }), 32 & c3[0] && A(e2, "--xy-minimap-mask-background-color-props", t5[5]), 64 & c3[0] && A(e2, "--xy-minimap-mask-stroke-color-props", t5[6]), 16512 & c3[0] && A(e2, "--xy-minimap-mask-stroke-width-props", t5[7] ? t5[7] * t5[14] : void 0);
  }, i(t5) {
    if (!l2) {
      for (let t6 = 0; t6 < f2.length; t6 += 1) ft(u2[t6]);
      l2 = true;
    }
  }, o(t5) {
    for (let t6 = 0; t6 < u2.length; t6 += 1) gt(u2[t6]);
    l2 = false;
  }, d(t5) {
    t5 && _(e2), p2 && p2.d();
    for (let t6 = 0; t6 < u2.length; t6 += 1) u2[t6].d();
    c2 = false, d2();
  } };
}
function _d(t4) {
  let e2, n2;
  return { c() {
    e2 = C("title"), n2 = O(t4[1]), N(e2, "id", t4[41]);
  }, m(t5, o2) {
    k(t5, e2, o2), b(e2, n2);
  }, p(t5, e3) {
    2 & e3[0] && D(n2, t5[1]);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function Sd(t4) {
  var _a2;
  let n2, o2;
  const i2 = [{ x: t4[56].internals.positionAbsolute.x }, { y: t4[56].internals.positionAbsolute.y }, t4[59], { selected: t4[56].selected }, { color: (_a2 = t4[37]) == null ? void 0 : _a2.call(t4, t4[56]) }, { borderRadius: t4[2] }, { strokeColor: t4[38](t4[56]) }, { strokeWidth: t4[3] }, { shapeRendering: t4[40] }, { class: t4[39](t4[56]) }];
  let r2 = {};
  for (let t5 = 0; t5 < i2.length; t5 += 1) r2 = e(r2, i2[t5]);
  return n2 = new $d({ props: r2 }), { c() {
    bt(n2.$$.fragment);
  }, m(t5, e2) {
    kt(n2, t5, e2), o2 = true;
  }, p(t5, e2) {
    var _a3;
    const o3 = 1572876 & e2[0] | 960 & e2[1] ? $t(i2, [1572864 & e2[0] && { x: t5[56].internals.positionAbsolute.x }, 1572864 & e2[0] && { y: t5[56].internals.positionAbsolute.y }, 1572864 & e2[0] && vt(t5[59]), 1572864 & e2[0] && { selected: t5[56].selected }, 1572864 & e2[0] | 64 & e2[1] && { color: (_a3 = t5[37]) == null ? void 0 : _a3.call(t5, t5[56]) }, 4 & e2[0] && { borderRadius: t5[2] }, 1572864 & e2[0] | 128 & e2[1] && { strokeColor: t5[38](t5[56]) }, 8 & e2[0] && { strokeWidth: t5[3] }, 512 & e2[1] && { shapeRendering: t5[40] }, 1572864 & e2[0] | 256 & e2[1] && { class: t5[39](t5[56]) }]) : {};
    n2.$set(o3);
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    _t(n2, t5);
  } };
}
function Ed(t4, e2) {
  let n2, o2, i2, r2 = e2[56] && jr(e2[56]), s2 = r2 && Sd(bd(e2));
  return { key: t4, first: null, c() {
    n2 = M(), s2 && s2.c(), o2 = M(), this.first = n2;
  }, m(t5, e3) {
    k(t5, n2, e3), s2 && s2.m(t5, e3), k(t5, o2, e3), i2 = true;
  }, p(t5, n3) {
    e2 = t5, 1572864 & n3[0] && (r2 = e2[56] && jr(e2[56])), r2 ? s2 ? (s2.p(bd(e2), n3), 1572864 & n3[0] && ft(s2, 1)) : (s2 = Sd(bd(e2)), s2.c(), ft(s2, 1), s2.m(o2.parentNode, o2)) : s2 && (ht(), gt(s2, 1, 1, () => {
      s2 = null;
    }), pt());
  }, i(t5) {
    i2 || (ft(s2), i2 = true);
  }, o(t5) {
    gt(s2), i2 = false;
  }, d(t5) {
    t5 && (_(n2), _(o2)), s2 && s2.d(t5);
  } };
}
function Cd(t4) {
  let e2, n2, o2 = t4[27] && kd(t4);
  return { c() {
    o2 && o2.c(), e2 = M();
  }, m(t5, i2) {
    o2 && o2.m(t5, i2), k(t5, e2, i2), n2 = true;
  }, p(t5, n3) {
    t5[27] ? o2 ? (o2.p(t5, n3), 134217728 & n3[0] && ft(o2, 1)) : (o2 = kd(t5), o2.c(), ft(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (ht(), gt(o2, 1, 1, () => {
      o2 = null;
    }), pt());
  }, i(t5) {
    n2 || (ft(o2), n2 = true);
  }, o(t5) {
    gt(o2), n2 = false;
  }, d(t5) {
    t5 && _(e2), o2 && o2.d(t5);
  } };
}
function Od(t4) {
  let e2, n2;
  return e2 = new rc({ props: { position: t4[0], style: t4[12] + (t4[4] ? `;--xy-minimap-background-color-props:${t4[4]}` : ""), class: me(["svelte-flow__minimap", t4[13]]), "data-testid": "svelte-flow__minimap", $$slots: { default: [Cd] }, $$scope: { ctx: t4 } } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    1 & n3[0] && (o2.position = t5[0]), 4112 & n3[0] && (o2.style = t5[12] + (t5[4] ? `;--xy-minimap-background-color-props:${t5[4]}` : "")), 8192 & n3[0] && (o2.class = me(["svelte-flow__minimap", t5[13]])), 536858606 & n3[0] | 536870912 & n3[1] && (o2.$$scope = { dirty: n3, ctx: t5 }), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
var Pd = (t4) => t4 instanceof Function ? t4 : () => t4;
function Md(t4, e2, n2) {
  let o2, i2, r2, s2, a2, l2, c2, u2, h2, p2, f2, g2, m2, y2, w2, $2, v2, x2, b2, k2, _2, { position: S2 = "bottom-right" } = e2, { ariaLabel: E2 = "Mini map" } = e2, { nodeStrokeColor: C2 = "transparent" } = e2, { nodeColor: O2 } = e2, { nodeClass: P2 = "" } = e2, { nodeBorderRadius: M2 = 5 } = e2, { nodeStrokeWidth: z2 = 2 } = e2, { bgColor: N2 } = e2, { maskColor: L2 } = e2, { maskStrokeColor: I2 } = e2, { maskStrokeWidth: D2 } = e2, { width: A2 } = e2, { height: T2 } = e2, { pannable: H2 = true } = e2, { zoomable: V2 = true } = e2, { inversePan: F2 } = e2, { zoomStep: W2 } = e2, { style: X2 = "" } = e2, { class: Y2 = "" } = e2;
  const { nodes: R2, nodeLookup: Z2, viewport: B2, width: K2, height: G2, flowId: j2, panZoom: q2, translateExtent: Q2 } = Va();
  d(t4, R2, (t5) => n2(19, y2 = t5)), d(t4, Z2, (t5) => n2(20, w2 = t5)), d(t4, B2, (t5) => n2(53, $2 = t5)), d(t4, K2, (t5) => n2(22, x2 = t5)), d(t4, G2, (t5) => n2(21, v2 = t5)), d(t4, j2, (t5) => n2(54, b2 = t5)), d(t4, q2, (t5) => n2(27, k2 = t5)), d(t4, Q2, (t5) => n2(28, _2 = t5));
  const U2 = void 0 === O2 ? void 0 : Pd(O2), J2 = Pd(C2), tt2 = Pd(P2), et2 = "undefined" == typeof window || window.chrome ? "crispEdges" : "geometricPrecision", nt2 = `svelte-flow__minimap-desc-${b2}`;
  let ot2 = o2;
  return t4.$$set = (t5) => {
    "position" in t5 && n2(0, S2 = t5.position), "ariaLabel" in t5 && n2(1, E2 = t5.ariaLabel), "nodeStrokeColor" in t5 && n2(43, C2 = t5.nodeStrokeColor), "nodeColor" in t5 && n2(44, O2 = t5.nodeColor), "nodeClass" in t5 && n2(45, P2 = t5.nodeClass), "nodeBorderRadius" in t5 && n2(2, M2 = t5.nodeBorderRadius), "nodeStrokeWidth" in t5 && n2(3, z2 = t5.nodeStrokeWidth), "bgColor" in t5 && n2(4, N2 = t5.bgColor), "maskColor" in t5 && n2(5, L2 = t5.maskColor), "maskStrokeColor" in t5 && n2(6, I2 = t5.maskStrokeColor), "maskStrokeWidth" in t5 && n2(7, D2 = t5.maskStrokeWidth), "width" in t5 && n2(46, A2 = t5.width), "height" in t5 && n2(47, T2 = t5.height), "pannable" in t5 && n2(8, H2 = t5.pannable), "zoomable" in t5 && n2(9, V2 = t5.zoomable), "inversePan" in t5 && n2(10, F2 = t5.inversePan), "zoomStep" in t5 && n2(11, W2 = t5.zoomStep), "style" in t5 && n2(12, X2 = t5.style), "class" in t5 && n2(13, Y2 = t5.class);
  }, t4.$$.update = () => {
    6291456 & t4.$$.dirty[0] | 4194304 & t4.$$.dirty[1] && n2(18, o2 = { x: -$2.x / $2.zoom, y: -$2.y / $2.zoom, width: x2 / $2.zoom, height: v2 / $2.zoom }), 1835008 & t4.$$.dirty[0] && n2(48, ot2 = w2.size > 0 ? Tr(vr(w2), o2) : o2), 32768 & t4.$$.dirty[1] && n2(17, i2 = A2 != null ? A2 : 200), 65536 & t4.$$.dirty[1] && n2(16, r2 = T2 != null ? T2 : 150), 131072 & t4.$$.dirty[0] | 131072 & t4.$$.dirty[1] && n2(52, s2 = ot2.width / i2), 65536 & t4.$$.dirty[0] | 131072 & t4.$$.dirty[1] && n2(51, a2 = ot2.height / r2), 3145728 & t4.$$.dirty[1] && n2(14, l2 = Math.max(s2, a2)), 147456 & t4.$$.dirty[0] && n2(50, c2 = l2 * i2), 81920 & t4.$$.dirty[0] && n2(49, u2 = l2 * r2), 16384 & t4.$$.dirty[0] && n2(15, h2 = 5 * l2), 32768 & t4.$$.dirty[0] | 655360 & t4.$$.dirty[1] && n2(26, p2 = ot2.x - (c2 - ot2.width) / 2 - h2), 32768 & t4.$$.dirty[0] | 393216 & t4.$$.dirty[1] && n2(25, f2 = ot2.y - (u2 - ot2.height) / 2 - h2), 32768 & t4.$$.dirty[0] | 524288 & t4.$$.dirty[1] && n2(24, g2 = c2 + 2 * h2), 32768 & t4.$$.dirty[0] | 262144 & t4.$$.dirty[1] && n2(23, m2 = u2 + 2 * h2);
  }, [S2, E2, M2, z2, N2, L2, I2, D2, H2, V2, F2, W2, X2, Y2, l2, h2, r2, i2, o2, y2, w2, v2, x2, m2, g2, f2, p2, k2, _2, R2, Z2, B2, K2, G2, j2, q2, Q2, U2, J2, tt2, et2, nt2, () => l2, C2, O2, P2, A2, T2, ot2, u2, c2, a2, s2, $2];
}
var zd = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Md, Od, s, { position: 0, ariaLabel: 1, nodeStrokeColor: 43, nodeColor: 44, nodeClass: 45, nodeBorderRadius: 2, nodeStrokeWidth: 3, bgColor: 4, maskColor: 5, maskStrokeColor: 6, maskStrokeWidth: 7, width: 46, height: 47, pannable: 8, zoomable: 9, inversePan: 10, zoomStep: 11, style: 12, class: 13 }, null, [-1, -1]);
  }
};
var Nd = (t4) => ((t5) => "id" in t5 && "position" in t5 && !("source" in t5) && !("target" in t5))(t4);
function Ld(t4, e2) {
  var _a2;
  const n2 = [];
  for (const o2 of e2) {
    const e3 = t4.get(o2);
    if (e3) {
      const t5 = "internals" in e3 ? (_a2 = e3.internals) == null ? void 0 : _a2.userNode : e3;
      n2.push(t5);
    }
  }
  return n2;
}
function Id(e2) {
  let n2, o2, i2, r2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), i2 = C("path"), r2 = C("path"), N(o2, "d", "M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"), N(o2, "stroke", "#000000"), N(o2, "stroke-width", "2"), N(o2, "stroke-linecap", "round"), N(o2, "stroke-linejoin", "round"), N(i2, "d", "M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"), N(i2, "stroke", "#000000"), N(i2, "stroke-width", "2"), N(i2, "stroke-linecap", "round"), N(i2, "stroke-linejoin", "round"), N(r2, "d", "M18 3V8M18 8L16 6M18 8L20 6"), N(r2, "stroke", "#000000"), N(r2, "stroke-width", "2"), N(r2, "stroke-linecap", "round"), N(r2, "stroke-linejoin", "round"), N(n2, "fill", "none"), N(n2, "width", e2[0]), N(n2, "height", e2[1]), N(n2, "viewBox", "0 0 24 24"), N(n2, "xmlns", "http://www.w3.org/2000/svg");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2), b(n2, i2), b(n2, r2);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "width", t4[0]), 2 & e3 && N(n2, "height", t4[1]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function Dd(t4, e2, n2) {
  let { width: o2 = "25px" } = e2, { height: i2 = "25px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var Ad = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Dd, Id, s, { width: 0, height: 1 });
  }
};
function Td(t4) {
  let n2, o2, i2, r2, s2;
  o2 = new Ad({});
  let a2 = [t4[1], { alt: "save as image" }, { placeholder: "save chart as image" }], l2 = {};
  for (let t5 = 0; t5 < a2.length; t5 += 1) l2 = e(l2, a2[t5]);
  return { c() {
    n2 = E("button"), bt(o2.$$.fragment), I(n2, l2);
  }, m(e2, a3) {
    k(e2, n2, a3), kt(o2, n2, null), n2.autofocus && n2.focus(), i2 = true, r2 || (s2 = z(n2, "click", t4[0]), r2 = true);
  }, p(t5, [e2]) {
    I(n2, l2 = $t(a2, [2 & e2 && t5[1], { alt: "save as image" }, { placeholder: "save chart as image" }]));
  }, i(t5) {
    i2 || (ft(o2.$$.fragment, t5), i2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), i2 = false;
  }, d(t5) {
    t5 && _(n2), _t(o2), r2 = false, s2();
  } };
}
var Hd = 1024;
function Vd(t4, n2, o2) {
  const i2 = ["nodes", "fileName"];
  let r2 = y(n2, i2), { nodes: s2 = [] } = n2, { fileName: a2 = "" } = n2;
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(1, r2 = y(n2, i2)), "nodes" in t5 && o2(2, s2 = t5.nodes), "fileName" in t5 && o2(3, a2 = t5.fileName);
  }, [function() {
    if (!Array.isArray(s2) || 0 === s2.length) return void console.error("No nodes available to generate image.");
    const t5 = $r(s2), e2 = Zr(t5, Hd, 768, 0.5, 2, 0.2), n3 = document.querySelector(".svelte-flow__viewport");
    e2 && function(_0) {
      return __async(this, arguments, function* (t6, e3 = {}) {
        return (yield ue(t6, e3)).toDataURL();
      });
    }(n3, { width: Hd, height: 768, style: { width: "1024px", height: "768px", transform: `translate(${e2.x}px, ${e2.y}px) scale(${e2.zoom})` } }).then((t6) => {
      const e3 = document.createElement("a");
      e3.download = `${a2 || ""}_solothought-flowchart.png`, e3.href = t6, e3.click();
    });
  }, r2, s2, a2];
}
var Fd = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Vd, Td, s, { nodes: 2, fileName: 3 });
  }
};
function Wd(e2) {
  let n2, o2, i2, r2, s2, a2, l2;
  return { c() {
    n2 = C("svg"), o2 = C("defs"), i2 = C("style"), r2 = O(".cls-1 {\n        fill: none;\n      }\n    "), s2 = C("title"), a2 = O("fork"), l2 = C("path"), N(l2, "d", "M26,18a3.9955,3.9955,0,0,0-3.858,3H18a3.0033,3.0033,0,0,1-3-3V14a4.9514,4.9514,0,0,0-1.0256-3H22.142a4,4,0,1,0,0-2H9.858a4,4,0,1,0,0,2H10a3.0033,3.0033,0,0,1,3,3v4a5.0059,5.0059,0,0,0,5,5h4.142A3.9935,3.9935,0,1,0,26,18ZM26,8a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,8ZM6,12a2,2,0,1,1,2-2A2.002,2.002,0,0,1,6,12ZM26,24a2,2,0,1,1,2-2A2.0027,2.0027,0,0,1,26,24Z"), N(n2, "fill", "#000000"), N(n2, "width", e2[0]), N(n2, "height", e2[1]), N(n2, "viewBox", "0 0 32 32"), N(n2, "id", "icon"), N(n2, "xmlns", "http://www.w3.org/2000/svg");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2), b(o2, i2), b(i2, r2), b(n2, s2), b(s2, a2), b(n2, l2);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "width", t4[0]), 2 & e3 && N(n2, "height", t4[1]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function Xd(t4, e2, n2) {
  let { width: o2 = "25px" } = e2, { height: i2 = "25px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var Yd = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Xd, Wd, s, { width: 0, height: 1 });
  }
};
function Rd(t4, e2, n2) {
  const o2 = t4.slice();
  return o2[9] = e2[n2], o2[11] = n2, o2;
}
function Zd(t4) {
  let e2, n2 = mt(t4[0]), o2 = [];
  for (let e3 = 0; e3 < n2.length; e3 += 1) o2[e3] = Bd(Rd(t4, n2, e3));
  return { c() {
    e2 = E("div");
    for (let t5 = 0; t5 < o2.length; t5 += 1) o2[t5].c();
    N(e2, "class", "paths-dropdown svelte-1ofxkkf");
  }, m(t5, n3) {
    k(t5, e2, n3);
    for (let t6 = 0; t6 < o2.length; t6 += 1) o2[t6] && o2[t6].m(e2, null);
  }, p(t5, i2) {
    if (19 & i2) {
      let r2;
      for (n2 = mt(t5[0]), r2 = 0; r2 < n2.length; r2 += 1) {
        const s2 = Rd(t5, n2, r2);
        o2[r2] ? o2[r2].p(s2, i2) : (o2[r2] = Bd(s2), o2[r2].c(), o2[r2].m(e2, null));
      }
      for (; r2 < o2.length; r2 += 1) o2[r2].d(1);
      o2.length = n2.length;
    }
  }, d(t5) {
    t5 && _(e2), S(o2, t5);
  } };
}
function Bd(t4) {
  let e2, n2, o2, r2, s2, a2, l2, c2, d2, u2, h2, p2, f2, g2 = t4[11] + 1 + "", m2 = t4[9].length + "", y2 = t4[1][t4[9][t4[9].length - 1]].id + "";
  function w2() {
    return t4[6](t4[11]);
  }
  function $2() {
    return t4[7](t4[11]);
  }
  return { c() {
    e2 = E("div"), n2 = E("span"), n2.textContent = "\u25B6\uFE0F", o2 = P(), r2 = E("span"), s2 = O("Path "), a2 = O(g2), l2 = O(" ("), c2 = O(m2), d2 = O(" steps) ends at Step "), u2 = O(y2), h2 = P(), N(e2, "class", "path-item svelte-1ofxkkf");
  }, m(t5, i2) {
    k(t5, e2, i2), b(e2, n2), b(e2, o2), b(e2, r2), b(r2, s2), b(r2, a2), b(r2, l2), b(r2, c2), b(r2, d2), b(r2, u2), b(e2, h2), p2 || (f2 = [z(n2, "click", w2), z(r2, "click", $2)], p2 = true);
  }, p(e3, n3) {
    t4 = e3, 1 & n3 && m2 !== (m2 = t4[9].length + "") && D(c2, m2), 3 & n3 && y2 !== (y2 = t4[1][t4[9][t4[9].length - 1]].id + "") && D(u2, y2);
  }, d(t5) {
    t5 && _(e2), p2 = false, i(f2);
  } };
}
function Kd(t4) {
  let e2, n2, o2, i2, r2, s2, a2;
  o2 = new Yd({});
  let l2 = t4[2] && t4[0].length > 0 && Zd(t4);
  return { c() {
    e2 = E("div"), n2 = E("button"), bt(o2.$$.fragment), i2 = P(), l2 && l2.c(), N(e2, "class", "paths-dropdown-container svelte-1ofxkkf");
  }, m(c2, d2) {
    k(c2, e2, d2), b(e2, n2), kt(o2, n2, null), b(e2, i2), l2 && l2.m(e2, null), r2 = true, s2 || (a2 = z(n2, "click", t4[3]), s2 = true);
  }, p(t5, [n3]) {
    t5[2] && t5[0].length > 0 ? l2 ? l2.p(t5, n3) : (l2 = Zd(t5), l2.c(), l2.m(e2, null)) : l2 && (l2.d(1), l2 = null);
  }, i(t5) {
    r2 || (ft(o2.$$.fragment, t5), r2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), r2 = false;
  }, d(t5) {
    t5 && _(e2), _t(o2), l2 && l2.d(), s2 = false, a2();
  } };
}
function Gd(t4, e2, n2) {
  let { paths: o2 = [] } = e2, { nodes: i2 = [] } = e2, { selectedFlowIndex: r2 = 0 } = e2, s2 = false;
  const a2 = K();
  function l2(t5, e3 = "select") {
    if (o2 && o2[t5]) {
      const n3 = o2[t5];
      a2("pathSelected", { mode: e3, flowIndex: r2, nodeIndexes: n3.filter((t6) => -1 !== t6) });
    }
    n2(2, s2 = false);
  }
  return t4.$$set = (t5) => {
    "paths" in t5 && n2(0, o2 = t5.paths), "nodes" in t5 && n2(1, i2 = t5.nodes), "selectedFlowIndex" in t5 && n2(5, r2 = t5.selectedFlowIndex);
  }, [o2, i2, s2, function() {
    n2(2, s2 = !s2);
  }, l2, r2, (t5) => l2(t5, "play"), (t5) => l2(t5)];
}
var jd = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Gd, Kd, s, { paths: 0, nodes: 1, selectedFlowIndex: 5 });
  }
};
function qd(e2) {
  let n2, o2, i2;
  return { c() {
    n2 = C("svg"), o2 = C("g"), i2 = C("path"), N(i2, "id", "circle34669"), N(i2, "d", "M165.862,46.682c-0.688-0.009-1.376-0.009-2.064,0.002c-13.223,0.207-26.518,4.065-38.291,11.84\r\n		c-5.703,3.645-0.079,12.159,5.512,8.344c27.088-17.889,63.28-11.773,82.986,14.023c19.706,25.797,16.09,62.324-8.293,83.754\r\n		c-24.383,21.43-61.073,20.33-84.127-2.525c-4.735-4.798-11.88,2.408-7.041,7.102c23.295,23.094,58.803,27.024,86.25,11.193\r\n		l53.785,61.211c1.906,2.169,5.248,2.278,7.291,0.236l26.666-26.666c2.016-2.016,1.941-5.306-0.164-7.229l-60.518-55.236\r\n		c13.22-24.202,11.725-54.835-5.902-77.91C208.123,56.718,187.193,46.961,165.862,46.682z M162.426,75.754\r\n		c-2.76,0.041-4.965,2.31-4.926,5.07v47.5h-7.5v-6.666c0.04-2.818-2.256-5.112-5.074-5.07c-2.76,0.041-4.965,2.31-4.926,5.07v6.666\r\n		h-7.5V92.492c0.04-2.818-2.256-5.112-5.074-5.07c-2.76,0.041-4.965,2.31-4.926,5.07v35.832h-7.5v-18.332\r\n		c0.04-2.818-2.256-5.112-5.074-5.07c-2.76,0.041-4.965,2.31-4.926,5.07v18.332h-7.5v-0.832c0.04-2.818-2.256-5.112-5.074-5.07\r\n		c-2.76,0.041-4.965,2.31-4.926,5.07v0.832h-25v-24.166c0.04-2.818-2.256-5.112-5.074-5.07c-2.76,0.041-4.965,2.31-4.926,5.07\r\n		v24.166h-25V86.658c0.04-2.818-2.256-5.112-5.074-5.07c-2.76,0.041-4.965,2.31-4.926,5.07v41.666h-7.5v-30\r\n		c0.04-2.818-2.256-5.112-5.074-5.07c-2.76,0.041-4.965,2.31-4.926,5.07v35c0,2.761,2.239,5,5,5h30v12.5\r\n		c-0.096,6.762,10.096,6.762,10,0v-12.5h25v12.5c-0.096,6.762,10.096,6.762,10,0v-12.5h100c2.761,0,5-2.239,5-5v-17.5\r\n		c0.096-6.762-10.096-6.762-10,0v12.5h-7.5v-47.5C167.54,78.006,165.244,75.712,162.426,75.754z M215.223,115.789\r\n		c-1.379,0.021-2.48,1.156-2.461,2.535c0,26.407-21.355,47.762-47.762,47.762c-3.381-0.048-3.381,5.048,0,5\r\n		c29.109,0,52.762-23.652,52.762-52.762C217.782,116.915,216.633,115.767,215.223,115.789z M222.368,161.264l43.764,39.943\r\n		l-18.584,17.27l-38.402-43.707c1.073-0.84,2.133-1.704,3.168-2.613C216.105,168.824,219.449,165.162,222.368,161.264z\r\n		 M269.838,204.59l7.926,7.234l-19.195,19.195l-7.719-8.785L269.838,204.59z"), N(n2, "fill", "#000000"), N(n2, "height", e2[1]), N(n2, "width", e2[0]), N(n2, "version", "1.1"), N(n2, "id", "Capa_1"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "xmlns:xlink", "http://www.w3.org/1999/xlink"), N(n2, "viewBox", "0 0 290 290"), N(n2, "xml:space", "preserve");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2), b(o2, i2);
  }, p(t4, [e3]) {
    2 & e3 && N(n2, "height", t4[1]), 1 & e3 && N(n2, "width", t4[0]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function Qd(t4, e2, n2) {
  let { width: o2 = "45px" } = e2, { height: i2 = "35px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var Ud = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Qd, qd, s, { width: 0, height: 1 });
  }
};
function Jd(t4) {
  let e2, n2, o2, i2, r2, s2, a2, l2, c2, d2, u2, h2, p2, f2, g2, m2, y2, w2, $2, v2, x2, S2, C2, M2, z2, L2, I2, A2, T2, H2, V2, F2, W2, X2, Y2, R2, Z2, B2, K2, G2, j2, q2, Q2, U2, J2, tt2, et2, nt2, ot2, it2 = t4[0].cyclomaticComplexity + "", rt2 = t4[0].depth + "", st2 = t4[0].decisionPoints + "", at2 = t4[0].stepsCount + "", lt2 = t4[0].nestingLoops.length + "", ct2 = t4[1][0].length + "", dt2 = t4[1][t4[1].length - 1].length + "";
  return { c() {
    e2 = E("div"), n2 = E("table"), o2 = E("tbody"), i2 = E("tr"), r2 = E("td"), r2.textContent = "Cyclomatic Complexity", s2 = P(), a2 = E("td"), l2 = O(it2), c2 = P(), d2 = E("tr"), u2 = E("td"), u2.textContent = "Depth", h2 = P(), p2 = E("td"), f2 = O(rt2), g2 = P(), m2 = E("tr"), y2 = E("td"), y2.textContent = "Decision Points", w2 = P(), $2 = E("td"), v2 = O(st2), x2 = P(), S2 = E("tr"), C2 = E("td"), C2.textContent = "Number of Steps", M2 = P(), z2 = E("td"), L2 = O(at2), I2 = P(), A2 = E("tr"), T2 = E("td"), T2.textContent = "Loop Complexity", H2 = P(), V2 = E("td"), F2 = O("O(n"), W2 = E("sup"), X2 = O(lt2), Y2 = O(")"), R2 = P(), Z2 = E("tr"), B2 = E("td"), B2.textContent = "Shortest path has", K2 = P(), G2 = E("td"), j2 = O(ct2), q2 = O(" Steps"), Q2 = P(), U2 = E("tr"), J2 = E("td"), J2.textContent = "Longest path has", tt2 = P(), et2 = E("td"), nt2 = O(dt2), ot2 = O(" Steps"), N(n2, "class", "analysis-table svelte-12s5nu2"), N(e2, "class", "analysis-dropdown svelte-12s5nu2");
  }, m(t5, _2) {
    k(t5, e2, _2), b(e2, n2), b(n2, o2), b(o2, i2), b(i2, r2), b(i2, s2), b(i2, a2), b(a2, l2), b(o2, c2), b(o2, d2), b(d2, u2), b(d2, h2), b(d2, p2), b(p2, f2), b(o2, g2), b(o2, m2), b(m2, y2), b(m2, w2), b(m2, $2), b($2, v2), b(o2, x2), b(o2, S2), b(S2, C2), b(S2, M2), b(S2, z2), b(z2, L2), b(o2, I2), b(o2, A2), b(A2, T2), b(A2, H2), b(A2, V2), b(V2, F2), b(V2, W2), b(W2, X2), b(V2, Y2), b(o2, R2), b(o2, Z2), b(Z2, B2), b(Z2, K2), b(Z2, G2), b(G2, j2), b(G2, q2), b(o2, Q2), b(o2, U2), b(U2, J2), b(U2, tt2), b(U2, et2), b(et2, nt2), b(et2, ot2);
  }, p(t5, e3) {
    1 & e3 && it2 !== (it2 = t5[0].cyclomaticComplexity + "") && D(l2, it2), 1 & e3 && rt2 !== (rt2 = t5[0].depth + "") && D(f2, rt2), 1 & e3 && st2 !== (st2 = t5[0].decisionPoints + "") && D(v2, st2), 1 & e3 && at2 !== (at2 = t5[0].stepsCount + "") && D(L2, at2), 1 & e3 && lt2 !== (lt2 = t5[0].nestingLoops.length + "") && D(X2, lt2), 2 & e3 && ct2 !== (ct2 = t5[1][0].length + "") && D(j2, ct2), 2 & e3 && dt2 !== (dt2 = t5[1][t5[1].length - 1].length + "") && D(nt2, dt2);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function tu(t4) {
  let e2, n2, o2, i2, r2, s2, a2;
  o2 = new Ud({});
  let l2 = t4[2] && Jd(t4);
  return { c() {
    e2 = E("div"), n2 = E("button"), bt(o2.$$.fragment), i2 = P(), l2 && l2.c(), N(e2, "class", "analysis-dropdown-container svelte-12s5nu2");
  }, m(c2, d2) {
    k(c2, e2, d2), b(e2, n2), kt(o2, n2, null), b(e2, i2), l2 && l2.m(e2, null), r2 = true, s2 || (a2 = z(n2, "click", t4[3]), s2 = true);
  }, p(t5, [n3]) {
    t5[2] ? l2 ? l2.p(t5, n3) : (l2 = Jd(t5), l2.c(), l2.m(e2, null)) : l2 && (l2.d(1), l2 = null);
  }, i(t5) {
    r2 || (ft(o2.$$.fragment, t5), r2 = true);
  }, o(t5) {
    gt(o2.$$.fragment, t5), r2 = false;
  }, d(t5) {
    t5 && _(e2), _t(o2), l2 && l2.d(), s2 = false, a2();
  } };
}
function eu(t4, e2, n2) {
  let { stats: o2 = {} } = e2, { paths: i2 = [] } = e2, r2 = false;
  return t4.$$set = (t5) => {
    "stats" in t5 && n2(0, o2 = t5.stats), "paths" in t5 && n2(1, i2 = t5.paths);
  }, [o2, i2, r2, function() {
    n2(2, r2 = !r2);
  }];
}
var nu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, eu, tu, s, { stats: 0, paths: 1 });
  }
};
function ou(e2) {
  let n2, o2, i2;
  return { c() {
    n2 = E("div"), n2.innerHTML = '<div class="popup-box svelte-d7b5l7"><p><a href="https://github.com/NaturalIntelligence/text2obj" target="_blank">Algorithm Syntax</a></p> <div><h3>Hover a Node</h3> <table class="help-table svelte-d7b5l7"><tbody><tr><td class="svelte-d7b5l7">with <kbd>a</kbd></td> <td class="svelte-d7b5l7">Highlight all the paths passing through</td></tr> <tr><td class="svelte-d7b5l7">with <kbd>q</kbd></td> <td class="svelte-d7b5l7">Highlight all the steps after</td></tr> <tr><td class="svelte-d7b5l7">with <kbd>b</kbd></td> <td class="svelte-d7b5l7">Highlight all the steps before</td></tr> <tr><td class="svelte-d7b5l7">with <kbd>s</kbd></td> <td class="svelte-d7b5l7">Highlight shortest path passing through</td></tr></tbody></table></div> <small>Keep the key held and hover out from the node to remove the selection.</small> <div><h3>Click a Node</h3> <table class="help-table svelte-d7b5l7"><tbody><tr><td class="svelte-d7b5l7">No key</td> <td class="svelte-d7b5l7">Expand/Collapse child steps</td></tr> <tr><td class="svelte-d7b5l7">with <kbd>]</kbd></td> <td class="svelte-d7b5l7">Collapse all nested branches</td></tr> <tr><td class="svelte-d7b5l7">with <kbd>[</kbd></td> <td class="svelte-d7b5l7">Expand all nested branches</td></tr></tbody></table></div></div>', N(n2, "class", "popup-container svelte-d7b5l7");
  }, m(t4, r2) {
    k(t4, n2, r2), o2 || (i2 = z(n2, "click", e2[2]), o2 = true);
  }, p: t, d(t4) {
    t4 && _(n2), o2 = false, i2();
  } };
}
function iu(e2) {
  let n2, o2, i2, r2, s2, a2 = e2[0] && ou(e2);
  return { c() {
    n2 = E("a"), n2.textContent = "Help", o2 = P(), a2 && a2.c(), i2 = M(), N(n2, "class", "help-link svelte-d7b5l7");
  }, m(t4, l2) {
    k(t4, n2, l2), k(t4, o2, l2), a2 && a2.m(t4, l2), k(t4, i2, l2), r2 || (s2 = z(n2, "click", e2[1]), r2 = true);
  }, p(t4, [e3]) {
    t4[0] ? a2 ? a2.p(t4, e3) : (a2 = ou(t4), a2.c(), a2.m(i2.parentNode, i2)) : a2 && (a2.d(1), a2 = null);
  }, i: t, o: t, d(t4) {
    t4 && (_(n2), _(o2), _(i2)), a2 && a2.d(t4), r2 = false, s2();
  } };
}
function ru(t4, e2, n2) {
  let o2 = false;
  return [o2, function() {
    n2(0, o2 = !o2);
  }, function(t5) {
    t5.target === t5.currentTarget && n2(0, o2 = false);
  }];
}
var su = class extends Et {
  constructor(t4) {
    super(), St(this, t4, ru, iu, s, {});
  }
};
function au(e2) {
  let n2, o2, i2, r2, s2, a2, l2, c2, d2, u2, h2, p2, f2, g2, m2, y2, w2, $2, v2, x2, S2, E2, P2, M2, z2, L2, I2, D2, T2, H2, V2, F2;
  return { c() {
    n2 = C("svg"), o2 = C("defs"), i2 = C("style"), r2 = O("@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter:wght@400;500);&#xa;\n    "), s2 = C("rect"), a2 = C("g"), l2 = C("g"), c2 = C("g"), d2 = C("g"), u2 = C("g"), h2 = C("g"), p2 = C("g"), f2 = C("g"), g2 = C("g"), m2 = C("g"), y2 = C("g"), w2 = C("rect"), $2 = C("g"), v2 = C("g"), x2 = C("path"), S2 = C("g"), E2 = C("g"), P2 = C("path"), M2 = C("g"), z2 = C("g"), L2 = C("path"), I2 = C("g"), D2 = C("g"), T2 = C("path"), H2 = C("g"), V2 = C("g"), F2 = C("g"), N(i2, "type", "text/css"), N(s2, "fill", "#ffffff"), N(s2, "width", "100%"), N(s2, "height", "100%"), N(s2, "x", "0"), N(s2, "y", "0"), A(s2, "fill", "light-dark(#ffffff, var(--ge-dark-color, #121212))"), N(d2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-1"), N(u2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-2"), N(h2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-3"), N(p2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-4"), N(f2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-5"), N(g2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-6"), N(w2, "x", "2"), N(w2, "y", "2"), N(w2, "width", "100"), N(w2, "height", "100"), N(w2, "rx", "13"), N(w2, "ry", "13"), N(w2, "fill", "none"), N(w2, "stroke", "#000000"), N(w2, "stroke-width", "4"), N(w2, "pointer-events", "all"), A(w2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N(m2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-7"), N(x2, "d", "M 18 28 L 88 28"), N(x2, "fill", "none"), N(x2, "stroke", "#000000"), N(x2, "stroke-width", "4"), N(x2, "stroke-miterlimit", "10"), N(x2, "pointer-events", "stroke"), A(x2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N($2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-10"), N(P2, "d", "M 18 44 L 88 44"), N(P2, "fill", "none"), N(P2, "stroke", "#000000"), N(P2, "stroke-width", "4"), N(P2, "stroke-miterlimit", "10"), N(P2, "pointer-events", "stroke"), A(P2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N(S2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-14"), N(L2, "d", "M 18 60 L 88 60"), N(L2, "fill", "none"), N(L2, "stroke", "#000000"), N(L2, "stroke-width", "4"), N(L2, "stroke-miterlimit", "10"), N(L2, "pointer-events", "stroke"), A(L2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N(M2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-27"), N(T2, "d", "M 18 76 L 88 76"), N(T2, "fill", "none"), N(T2, "stroke", "#000000"), N(T2, "stroke-width", "4"), N(T2, "stroke-miterlimit", "10"), N(T2, "pointer-events", "stroke"), A(T2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N(I2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-28"), N(H2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-30"), N(V2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-31"), N(F2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-32"), N(c2, "data-cell-id", "1"), N(l2, "data-cell-id", "0"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "width", e2[0]), N(n2, "height", e2[1]), N(n2, "viewBox", "-0.5 -0.5 104 104");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2), b(o2, i2), b(i2, r2), b(n2, s2), b(n2, a2), b(a2, l2), b(l2, c2), b(c2, d2), b(c2, u2), b(c2, h2), b(c2, p2), b(c2, f2), b(c2, g2), b(c2, m2), b(m2, y2), b(y2, w2), b(c2, $2), b($2, v2), b(v2, x2), b(c2, S2), b(S2, E2), b(E2, P2), b(c2, M2), b(M2, z2), b(z2, L2), b(c2, I2), b(I2, D2), b(D2, T2), b(c2, H2), b(c2, V2), b(c2, F2);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "width", t4[0]), 2 & e3 && N(n2, "height", t4[1]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function lu(t4, e2, n2) {
  let { width: o2 = "25px" } = e2, { height: i2 = "25px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var cu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, lu, au, s, { width: 0, height: 1 });
  }
};
function du(e2) {
  let n2, o2, i2, r2, s2, a2, l2, c2, d2, u2, h2, p2, f2, g2, m2, y2, w2, $2, v2, x2, S2, E2, P2, M2, z2, L2, I2, D2;
  return { c() {
    n2 = C("svg"), o2 = C("defs"), i2 = C("style"), r2 = O("@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter:wght@400;500);&#xa;\n    "), s2 = C("rect"), a2 = C("g"), l2 = C("g"), c2 = C("g"), d2 = C("g"), u2 = C("g"), h2 = C("g"), p2 = C("g"), f2 = C("g"), g2 = C("g"), m2 = C("g"), y2 = C("g"), w2 = C("g"), $2 = C("g"), v2 = C("g"), x2 = C("g"), S2 = C("g"), E2 = C("rect"), P2 = C("g"), M2 = C("g"), z2 = C("path"), L2 = C("g"), I2 = C("g"), D2 = C("path"), N(i2, "type", "text/css"), N(s2, "fill", "#ffffff"), N(s2, "width", "100%"), N(s2, "height", "100%"), N(s2, "x", "0"), N(s2, "y", "0"), A(s2, "fill", "light-dark(#ffffff, var(--ge-dark-color, #121212))"), N(d2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-1"), N(u2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-2"), N(h2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-3"), N(p2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-4"), N(f2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-5"), N(g2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-6"), N(m2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-7"), N(y2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-10"), N(w2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-14"), N($2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-27"), N(v2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-28"), N(E2, "x", "2"), N(E2, "y", "2"), N(E2, "width", "100"), N(E2, "height", "100"), N(E2, "rx", "13"), N(E2, "ry", "13"), N(E2, "fill", "none"), N(E2, "stroke", "#000000"), N(E2, "stroke-width", "4"), N(E2, "pointer-events", "all"), A(E2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N(x2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-30"), N(z2, "d", "M 18 31 L 88 31"), N(z2, "fill", "none"), N(z2, "stroke", "#000000"), N(z2, "stroke-width", "4"), N(z2, "stroke-miterlimit", "10"), N(z2, "pointer-events", "stroke"), A(z2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N(P2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-31"), N(D2, "d", "M 18 47 L 88 47"), N(D2, "fill", "none"), N(D2, "stroke", "#000000"), N(D2, "stroke-width", "4"), N(D2, "stroke-miterlimit", "10"), N(D2, "pointer-events", "stroke"), A(D2, "stroke", "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))"), N(L2, "data-cell-id", "9eGFOFwpmL9Wt3psQl19-32"), N(c2, "data-cell-id", "1"), N(l2, "data-cell-id", "0"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "width", e2[0]), N(n2, "height", e2[1]), N(n2, "viewBox", "-0.5 -0.5 104 104");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2), b(o2, i2), b(i2, r2), b(n2, s2), b(n2, a2), b(a2, l2), b(l2, c2), b(c2, d2), b(c2, u2), b(c2, h2), b(c2, p2), b(c2, f2), b(c2, g2), b(c2, m2), b(c2, y2), b(c2, w2), b(c2, $2), b(c2, v2), b(c2, x2), b(x2, S2), b(S2, E2), b(c2, P2), b(P2, M2), b(M2, z2), b(c2, L2), b(L2, I2), b(I2, D2);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "width", t4[0]), 2 & e3 && N(n2, "height", t4[1]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function uu(t4, e2, n2) {
  let { width: o2 = "25px" } = e2, { height: i2 = "25px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var hu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, uu, du, s, { width: 0, height: 1 });
  }
};
function pu(e2) {
  let n2, o2, i2, r2, s2, a2, l2, c2, d2, u2;
  return { c() {
    n2 = C("svg"), o2 = C("title"), i2 = O("focus_point_round [#844]"), r2 = C("desc"), s2 = O("Created with Sketch."), a2 = C("defs"), l2 = C("g"), c2 = C("g"), d2 = C("g"), u2 = C("path"), N(u2, "d", "M264,4281 L264,4286 C264,4286.552 263.552,4287 263,4287 C262.448,4287 262,4286.552 262,4286 L262,4282 C262,4281.448 261.552,4281 261,4281 L257,4281 C256.448,4281 256,4280.552 256,4280 C256,4279.448 256.448,4279 257,4279 L262,4279 C263.105,4279 264,4279.895 264,4281 L264,4281 Z M262,4299 L257,4299 C256.448,4299 256,4298.552 256,4298 C256,4297.448 256.448,4297 257,4297 L261,4297 C261.552,4297 262,4296.552 262,4296 L262,4292 C262,4291.448 262.448,4291 263,4291 C263.552,4291 264,4291.448 264,4292 L264,4297 C264,4298.105 263.105,4299 262,4299 L262,4299 Z M244,4297 L244,4292 C244,4291.448 244.448,4291 245,4291 C245.552,4291 246,4291.448 246,4292 L246,4296 C246,4296.552 246.448,4297 247,4297 L251,4297 C251.552,4297 252,4297.448 252,4298 C252,4298.552 251.552,4299 251,4299 L246,4299 C244.895,4299 244,4298.105 244,4297 L244,4297 Z M244,4286 L244,4281 C244,4279.895 244.895,4279 246,4279 L251,4279 C251.552,4279 252,4279.448 252,4280 C252,4280.552 251.552,4281 251,4281 L247,4281 C246.448,4281 246,4281.448 246,4282 L246,4286 C246,4286.552 245.552,4287 245,4287 C244.448,4287 244,4286.552 244,4286 L244,4286 Z M244.01,4289 L244,4289.01 L244,4288.99 L244.01,4289 Z M254,4291 C252.897,4291 252,4290.103 252,4289 C252,4287.897 252.897,4287 254,4287 C255.103,4287 256,4287.897 256,4289 C256,4290.103 255.103,4291 254,4291 L254,4291 Z M257.859,4290 L259,4290 C259.552,4290 260,4289.552 260,4289 C260,4288.448 259.552,4288 259,4288 L257.859,4288 C257.496,4286.599 256.401,4285.504 255,4285.141 L255,4284 C255,4283.448 254.552,4283 254,4283 C253.448,4283 253,4283.448 253,4284 L253,4285.141 C251.599,4285.504 250.504,4286.599 250.141,4288 L249,4288 C248.448,4288 248,4288.448 248,4289 C248,4289.552 248.448,4290 249,4290 L250.141,4290 C250.504,4291.401 251.599,4292.496 253,4292.859 L253,4294 C253,4294.552 253.448,4295 254,4295 C254.552,4295 255,4294.552 255,4294 L255,4292.859 C256.401,4292.496 257.496,4291.401 257.859,4290 L257.859,4290 Z"), N(u2, "id", "focus_point_round-[#844]"), N(d2, "id", "icons"), N(d2, "transform", "translate(56.000000, 160.000000)"), N(c2, "id", "Dribbble-Light-Preview"), N(c2, "transform", "translate(-300.000000, -4439.000000)"), N(c2, "fill", "#000000"), N(l2, "id", "Page-1"), N(l2, "stroke", "none"), N(l2, "stroke-width", "1"), N(l2, "fill", "none"), N(l2, "fill-rule", "evenodd"), N(n2, "width", e2[0]), N(n2, "height", e2[1]), N(n2, "viewBox", "0 0 20 20"), N(n2, "version", "1.1"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "xmlns:xlink", "http://www.w3.org/1999/xlink");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2), b(o2, i2), b(n2, r2), b(r2, s2), b(n2, a2), b(n2, l2), b(l2, c2), b(c2, d2), b(d2, u2);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "width", t4[0]), 2 & e3 && N(n2, "height", t4[1]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function fu(t4, e2, n2) {
  let { width: o2 = "24px" } = e2, { height: i2 = "24px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var gu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, fu, pu, s, { width: 0, height: 1 });
  }
};
function mu(t4, e2, n2) {
  const o2 = t4.slice();
  return o2[12] = e2[n2], o2[14] = n2, o2;
}
function yu(t4) {
  let e2, n2, o2 = t4[12].flowName + "";
  return { c() {
    var i2, r2;
    e2 = E("option"), n2 = O(o2), e2.__value = t4[14], i2 = e2, r2 = e2.__value, i2.value = null == r2 ? "" : r2;
  }, m(t5, o3) {
    k(t5, e2, o3), b(e2, n2);
  }, p(t5, e3) {
    4 & e3 && o2 !== (o2 = t5[12].flowName + "") && D(n2, o2);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function wu(t4) {
  let e2, n2;
  return e2 = new cu({ props: { height: "24px" } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function $u(t4) {
  let e2, n2;
  return e2 = new hu({ props: { height: "24px" } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function vu(t4) {
  let e2, n2;
  return e2 = new jd({ props: { nodes: t4[5], paths: t4[2][t4[0]].paths, selectedFlowIndex: t4[0] } }), e2.$on("pathSelected", t4[8]), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    32 & n3 && (o2.nodes = t5[5]), 5 & n3 && (o2.paths = t5[2][t5[0]].paths), 1 & n3 && (o2.selectedFlowIndex = t5[0]), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function xu(t4) {
  let e2, n2;
  return e2 = new nu({ props: { stats: t4[2][t4[0]].stats, paths: t4[2][t4[0]].paths } }), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, p(t5, n3) {
    const o2 = {};
    5 & n3 && (o2.stats = t5[2][t5[0]].stats), 5 & n3 && (o2.paths = t5[2][t5[0]].paths), e2.$set(o2);
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function bu(t4) {
  let e2, n2, o2, s2, a2, l2, c2, d2, u2, h2, p2, f2, g2, m2, y2, $2, v2, x2, C2 = mt(t4[2]), O2 = [];
  for (let e3 = 0; e3 < C2.length; e3 += 1) O2[e3] = yu(mu(t4, C2, e3));
  let M2 = !t4[4] && wu(), L2 = t4[4] && $u();
  c2 = new Fd({ props: { nodes: t4[5], fileName: t4[3] } });
  let I2 = t4[2][t4[0]] && t4[2][t4[0]].paths && vu(t4), D2 = t4[2][t4[0]] && t4[2][t4[0]].stats && xu(t4);
  return f2 = new gu({}), y2 = new su({}), { c() {
    e2 = E("div"), n2 = E("select");
    for (let t5 = 0; t5 < O2.length; t5 += 1) O2[t5].c();
    o2 = P(), s2 = E("button"), M2 && M2.c(), a2 = P(), L2 && L2.c(), l2 = P(), bt(c2.$$.fragment), d2 = P(), I2 && I2.c(), u2 = P(), D2 && D2.c(), h2 = P(), p2 = E("button"), bt(f2.$$.fragment), m2 = P(), bt(y2.$$.fragment), N(n2, "class", "st-flow-chart-tool svelte-19rdvv3"), void 0 === t4[0] && it(() => t4[10].call(n2)), N(s2, "class", "svelte-19rdvv3"), N(p2, "class", g2 = w(t4[1] ? "" : "passive") + " svelte-19rdvv3"), N(e2, "class", "st-toolbox svelte-19rdvv3");
  }, m(i2, g3) {
    k(i2, e2, g3), b(e2, n2);
    for (let t5 = 0; t5 < O2.length; t5 += 1) O2[t5] && O2[t5].m(n2, null);
    T(n2, t4[0], true), b(e2, o2), b(e2, s2), M2 && M2.m(s2, null), b(s2, a2), L2 && L2.m(s2, null), b(e2, l2), kt(c2, e2, null), b(e2, d2), I2 && I2.m(e2, null), b(e2, u2), D2 && D2.m(e2, null), b(e2, h2), b(e2, p2), kt(f2, p2, null), b(e2, m2), kt(y2, e2, null), $2 = true, v2 || (x2 = [z(n2, "change", function() {
      r(t4[6]) && t4[6].apply(this, arguments);
    }), z(n2, "change", t4[10]), z(s2, "click", function() {
      r(t4[7]) && t4[7].apply(this, arguments);
    }), z(p2, "click", t4[9])], v2 = true);
  }, p(o3, [i2]) {
    if (t4 = o3, 4 & i2) {
      let e3;
      for (C2 = mt(t4[2]), e3 = 0; e3 < C2.length; e3 += 1) {
        const o4 = mu(t4, C2, e3);
        O2[e3] ? O2[e3].p(o4, i2) : (O2[e3] = yu(o4), O2[e3].c(), O2[e3].m(n2, null));
      }
      for (; e3 < O2.length; e3 += 1) O2[e3].d(1);
      O2.length = C2.length;
    }
    1 & i2 && T(n2, t4[0]), t4[4] ? M2 && (ht(), gt(M2, 1, 1, () => {
      M2 = null;
    }), pt()) : M2 ? 16 & i2 && ft(M2, 1) : (M2 = wu(), M2.c(), ft(M2, 1), M2.m(s2, a2)), t4[4] ? L2 ? 16 & i2 && ft(L2, 1) : (L2 = $u(), L2.c(), ft(L2, 1), L2.m(s2, null)) : L2 && (ht(), gt(L2, 1, 1, () => {
      L2 = null;
    }), pt());
    const r2 = {};
    32 & i2 && (r2.nodes = t4[5]), 8 & i2 && (r2.fileName = t4[3]), c2.$set(r2), t4[2][t4[0]] && t4[2][t4[0]].paths ? I2 ? (I2.p(t4, i2), 5 & i2 && ft(I2, 1)) : (I2 = vu(t4), I2.c(), ft(I2, 1), I2.m(e2, u2)) : I2 && (ht(), gt(I2, 1, 1, () => {
      I2 = null;
    }), pt()), t4[2][t4[0]] && t4[2][t4[0]].stats ? D2 ? (D2.p(t4, i2), 5 & i2 && ft(D2, 1)) : (D2 = xu(t4), D2.c(), ft(D2, 1), D2.m(e2, h2)) : D2 && (ht(), gt(D2, 1, 1, () => {
      D2 = null;
    }), pt()), (!$2 || 2 & i2 && g2 !== (g2 = w(t4[1] ? "" : "passive") + " svelte-19rdvv3")) && N(p2, "class", g2);
  }, i(t5) {
    $2 || (ft(M2), ft(L2), ft(c2.$$.fragment, t5), ft(I2), ft(D2), ft(f2.$$.fragment, t5), ft(y2.$$.fragment, t5), $2 = true);
  }, o(t5) {
    gt(M2), gt(L2), gt(c2.$$.fragment, t5), gt(I2), gt(D2), gt(f2.$$.fragment, t5), gt(y2.$$.fragment, t5), $2 = false;
  }, d(t5) {
    t5 && _(e2), S(O2, t5), M2 && M2.d(), L2 && L2.d(), _t(c2), I2 && I2.d(), D2 && D2.d(), _t(f2), _t(y2), v2 = false, i(x2);
  } };
}
function ku(t4, e2, n2) {
  let { flowsData: o2 = [] } = e2, { selectedFlowIndex: i2 } = e2, { flowName: r2 = "" } = e2, { hideMsgDetail: s2 = true } = e2, { nodes: a2 = [] } = e2, { handleFlowChange: l2 } = e2, { hideStepMsgDetail: c2 } = e2, { focusOn: d2 = true } = e2;
  const u2 = K();
  return t4.$$set = (t5) => {
    "flowsData" in t5 && n2(2, o2 = t5.flowsData), "selectedFlowIndex" in t5 && n2(0, i2 = t5.selectedFlowIndex), "flowName" in t5 && n2(3, r2 = t5.flowName), "hideMsgDetail" in t5 && n2(4, s2 = t5.hideMsgDetail), "nodes" in t5 && n2(5, a2 = t5.nodes), "handleFlowChange" in t5 && n2(6, l2 = t5.handleFlowChange), "hideStepMsgDetail" in t5 && n2(7, c2 = t5.hideStepMsgDetail), "focusOn" in t5 && n2(1, d2 = t5.focusOn);
  }, [i2, d2, o2, r2, s2, a2, l2, c2, function(t5) {
    u2("pathSelected", t5.detail);
  }, function() {
    n2(1, d2 = !d2);
  }, function() {
    i2 = function(t5) {
      const e3 = t5.querySelector(":checked");
      return e3 && e3.__value;
    }(this), n2(0, i2);
  }];
}
var _u = class extends Et {
  constructor(t4) {
    super(), St(this, t4, ku, bu, s, { flowsData: 2, selectedFlowIndex: 0, flowName: 3, hideMsgDetail: 4, nodes: 5, handleFlowChange: 6, hideStepMsgDetail: 7, focusOn: 1 });
  }
};
function Su(t4, e2, n2) {
  let o2, { selection: i2 } = e2, { nodes: r2 } = e2, { focusOn: s2 = true } = e2;
  return t4.$$set = (t5) => {
    "selection" in t5 && n2(0, i2 = t5.selection), "nodes" in t5 && n2(1, r2 = t5.nodes), "focusOn" in t5 && n2(2, s2 = t5.focusOn);
  }, t4.$$.update = () => {
    7 & t4.$$.dirty && i2 && i2.nodeIds && s2 && function(t5, e3) {
      if (t5.length > 0) {
        const n3 = e3.filter((e4) => t5.includes(e4.id));
        o2.fitView({ nodes: n3, maxZoom: 1, duration: 200 });
      }
    }(i2.nodeIds, r2);
  }, o2 = function() {
    const { zoomIn: t5, zoomOut: e3, fitView: n3, onbeforedelete: o3, snapGrid: i3, viewport: r3, width: s3, height: a2, minZoom: l2, maxZoom: d2, panZoom: u2, nodes: h2, edges: p2, domNode: f2, nodeLookup: g2, nodeOrigin: m2, edgeLookup: y2, connectionLookup: w2 } = Va(), $2 = (t6) => {
      var _a2, _b, _c2, _d2;
      const e4 = c(g2), n4 = Nd(t6) ? t6 : e4.get(t6.id), o4 = n4.parentId ? function(t7, e5 = { width: 0, height: 0 }, n5, o5, i5) {
        var _a3, _b2;
        let r4 = n5;
        const s4 = __spreadValues({}, t7);
        for (; r4; ) {
          const t8 = o5.get(r4);
          if (r4 = t8 == null ? void 0 : t8.parentId, t8) {
            const n6 = t8.origin || i5;
            s4.x += t8.internals.positionAbsolute.x - ((_a3 = e5.width) != null ? _a3 : 0) * n6[0], s4.y += t8.internals.positionAbsolute.y - ((_b2 = e5.height) != null ? _b2 : 0) * n6[1];
          }
        }
        return s4;
      }(n4.position, n4.measured, n4.parentId, e4, c(m2)) : n4.position, i4 = { id: n4.id, position: o4, width: (_b = (_a2 = n4.measured) == null ? void 0 : _a2.width) != null ? _b : n4.width, height: (_d2 = (_c2 = n4.measured) == null ? void 0 : _c2.height) != null ? _d2 : n4.height, data: n4.data };
      return Dr(i4);
    }, v2 = (t6) => c(g2).get(t6);
    return { zoomIn: t5, zoomOut: e3, getInternalNode: v2, getNode: (t6) => {
      var _a2;
      return (_a2 = v2(t6)) == null ? void 0 : _a2.internals.userNode;
    }, getNodes: (t6) => void 0 === t6 ? c(h2) : Ld(c(g2), t6), getEdge: (t6) => c(y2).get(t6), getEdges: (t6) => void 0 === t6 ? c(p2) : Ld(c(y2), t6), setZoom: (t6, e4) => {
      const n4 = c(u2);
      return n4 ? n4.scaleTo(t6, { duration: e4 == null ? void 0 : e4.duration }) : Promise.resolve(false);
    }, getZoom: () => c(r3).zoom, setViewport: (t6, e4) => __async(this, null, function* () {
      var _a2, _b, _c2;
      const n4 = c(r3), o4 = c(u2);
      return o4 ? (yield o4.setViewport({ x: (_a2 = t6.x) != null ? _a2 : n4.x, y: (_b = t6.y) != null ? _b : n4.y, zoom: (_c2 = t6.zoom) != null ? _c2 : n4.zoom }, { duration: e4 == null ? void 0 : e4.duration }), Promise.resolve(true)) : Promise.resolve(false);
    }), getViewport: () => c(r3), setCenter: (t6, e4, n4) => __async(this, null, function* () {
      const o4 = void 0 !== (n4 == null ? void 0 : n4.zoom) ? n4.zoom : c(d2), i4 = c(u2);
      return i4 ? (yield i4.setViewport({ x: c(s3) / 2 - t6 * o4, y: c(a2) / 2 - e4 * o4, zoom: o4 }, { duration: n4 == null ? void 0 : n4.duration }), Promise.resolve(true)) : Promise.resolve(false);
    }), fitView: n3, fitBounds: (t6, e4) => __async(this, null, function* () {
      var _a2;
      const n4 = c(u2);
      if (!n4) return Promise.resolve(false);
      const o4 = Zr(t6, c(s3), c(a2), c(l2), c(d2), (_a2 = e4 == null ? void 0 : e4.padding) != null ? _a2 : 0.1);
      return yield n4.setViewport(o4, { duration: e4 == null ? void 0 : e4.duration }), Promise.resolve(true);
    }), getIntersectingNodes: (t6, e4 = true, n4) => {
      const o4 = Vr(t6), i4 = o4 ? t6 : $2(t6);
      return i4 ? (n4 || c(h2)).filter((n5) => {
        const r4 = c(g2).get(n5.id);
        if (!r4 || !o4 && n5.id === t6.id) return false;
        const s4 = Dr(r4), a3 = Hr(s4, i4);
        return e4 && a3 > 0 || a3 >= i4.width * i4.height;
      }) : [];
    }, isNodeIntersecting: (t6, e4, n4 = true) => {
      const o4 = Vr(t6) ? t6 : $2(t6);
      if (!o4) return false;
      const i4 = Hr(o4, e4);
      return n4 && i4 > 0 || i4 >= o4.width * o4.height;
    }, deleteElements: (_0) => __async(this, [_0], function* ({ nodes: t6 = [], edges: e4 = [] }) {
      const { nodes: n4, edges: i4 } = yield Er({ nodesToRemove: t6, edgesToRemove: e4, nodes: c(h2), edges: c(p2), onBeforeDelete: c(o3) });
      return n4 && h2.update((t7) => t7.filter((t8) => !n4.some(({ id: e5 }) => e5 === t8.id))), i4 && p2.update((t7) => t7.filter((t8) => !i4.some(({ id: e5 }) => e5 === t8.id))), { deletedNodes: n4, deletedEdges: i4 };
    }), screenToFlowPosition: (t6, e4 = { snapToGrid: true }) => {
      const n4 = c(f2);
      if (!n4) return t6;
      const o4 = !!e4.snapToGrid && c(i3), { x: s4, y: a3, zoom: l3 } = c(r3), { x: d3, y: u3 } = n4.getBoundingClientRect(), h3 = { x: t6.x - d3, y: t6.y - u3 };
      return Yr(h3, [s4, a3, l3], null !== o4, o4 || [1, 1]);
    }, flowToScreenPosition: (t6) => {
      const e4 = c(f2);
      if (!e4) return t6;
      const { x: n4, y: o4, zoom: i4 } = c(r3), { x: s4, y: a3 } = e4.getBoundingClientRect(), l3 = Rr(t6, [n4, o4, i4]);
      return { x: l3.x + s4, y: l3.y + a3 };
    }, toObject: () => ({ nodes: c(h2).map((t6) => __spreadProps(__spreadValues({}, t6), { position: __spreadValues({}, t6.position), data: __spreadValues({}, t6.data) })), edges: c(p2).map((t6) => __spreadValues({}, t6)), viewport: __spreadValues({}, c(r3)) }), updateNode: (t6, e4, n4 = { replace: false }) => {
      var _a2;
      const o4 = (_a2 = c(g2).get(t6)) == null ? void 0 : _a2.internals.userNode;
      if (!o4) return;
      const i4 = "function" == typeof e4 ? e4(o4) : e4;
      n4.replace ? h2.update((e5) => e5.map((e6) => e6.id === t6 ? Nd(i4) ? i4 : __spreadValues(__spreadValues({}, e6), i4) : e6)) : (Object.assign(o4, i4), h2.update((t7) => t7));
    }, updateNodeData: (t6, e4, n4) => {
      var _a2;
      const o4 = (_a2 = c(g2).get(t6)) == null ? void 0 : _a2.internals.userNode;
      if (!o4) return;
      const i4 = "function" == typeof e4 ? e4(o4) : e4;
      o4.data = (n4 == null ? void 0 : n4.replace) ? i4 : __spreadValues(__spreadValues({}, o4.data), i4), h2.update((t7) => t7);
    }, getNodesBounds: (t6) => {
      const e4 = c(g2), n4 = c(m2);
      return $r(t6, { nodeLookup: e4, nodeOrigin: n4 });
    }, getHandleConnections: ({ type: t6, id: e4, nodeId: n4 }) => {
      var _a2, _b;
      return Array.from((_b = (_a2 = c(w2).get(`${n4}-${t6}-${e4 != null ? e4 : null}`)) == null ? void 0 : _a2.values()) != null ? _b : []);
    }, viewport: r3 };
  }(), [i2, r2, s2];
}
var Eu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Su, null, s, { selection: 0, nodes: 1, focusOn: 2 });
  }
};
var Cu = 180;
var Ou = 72;
function Pu(e2) {
  let n2, o2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), N(o2, "d", "M4.70710678,18 L6.85355339,20.1464466 C7.04881554,20.3417088 7.04881554,20.6582912 6.85355339,20.8535534 C6.65829124,21.0488155 6.34170876,21.0488155 6.14644661,20.8535534 L3.14644661,17.8535534 C2.95118446,17.6582912 2.95118446,17.3417088 3.14644661,17.1464466 L6.14644661,14.1464466 C6.34170876,13.9511845 6.65829124,13.9511845 6.85355339,14.1464466 C7.04881554,14.3417088 7.04881554,14.6582912 6.85355339,14.8535534 L4.70710678,17 L18.5,17 C19.3284271,17 20,16.3284271 20,15.5 L20,12.5 C20,12.2238576 20.2238576,12 20.5,12 C20.7761424,12 21,12.2238576 21,12.5 L21,15.5 C21,16.8807119 19.8807119,18 18.5,18 L4.70710678,18 Z M19.2928932,7 L17.1464466,4.85355339 C16.9511845,4.65829124 16.9511845,4.34170876 17.1464466,4.14644661 C17.3417088,3.95118446 17.6582912,3.95118446 17.8535534,4.14644661 L20.8535534,7.14644661 C21.0488155,7.34170876 21.0488155,7.65829124 20.8535534,7.85355339 L17.8535534,10.8535534 C17.6582912,11.0488155 17.3417088,11.0488155 17.1464466,10.8535534 C16.9511845,10.6582912 16.9511845,10.3417088 17.1464466,10.1464466 L19.2928932,8 L5.5,8 C4.67157288,8 4,8.67157288 4,9.5 L4,12.5 C4,12.7761424 3.77614237,13 3.5,13 C3.22385763,13 3,12.7761424 3,12.5 L3,9.5 C3,8.11928813 4.11928813,7 5.5,7 L19.2928932,7 Z"), N(n2, "fill", "#000000"), N(n2, "width", e2[0]), N(n2, "height", e2[1]), N(n2, "viewBox", "0 0 24 24"), N(n2, "xmlns", "http://www.w3.org/2000/svg");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "width", t4[0]), 2 & e3 && N(n2, "height", t4[1]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function Mu(t4, e2, n2) {
  let { width: o2 = "25px" } = e2, { height: i2 = "25px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var zu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Mu, Pu, s, { width: 0, height: 1 });
  }
};
function Nu(e2) {
  let n2, o2, i2, r2;
  return { c() {
    n2 = C("svg"), o2 = C("circle"), i2 = C("polyline"), r2 = C("polyline"), A(o2, "fill", "#D75A4A"), N(o2, "cx", e2[0]), N(o2, "cy", e2[0]), N(o2, "r", e2[0]), A(i2, "fill", "none"), A(i2, "stroke", "#FFFFFF"), A(i2, "stroke-width", "2"), A(i2, "stroke-linecap", "round"), A(i2, "stroke-miterlimit", "10"), N(i2, "points", "16,34 25,25 34,16 \n	"), A(r2, "fill", "none"), A(r2, "stroke", "#FFFFFF"), A(r2, "stroke-width", "2"), A(r2, "stroke-linecap", "round"), A(r2, "stroke-miterlimit", "10"), N(r2, "points", "16,16 25,25 34,34 \n	"), N(n2, "version", "1.1"), N(n2, "id", "Capa_1"), N(n2, "xmlns", "http://www.w3.org/2000/svg"), N(n2, "xmlns:xlink", "http://www.w3.org/1999/xlink"), N(n2, "viewBox", "0 0 50 50"), N(n2, "xml:space", "preserve");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2), b(n2, i2), b(n2, r2);
  }, p(t4, [e3]) {
    1 & e3 && N(o2, "cx", t4[0]), 1 & e3 && N(o2, "cy", t4[0]), 1 & e3 && N(o2, "r", t4[0]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function Lu(t4, e2, n2) {
  let { size: o2 = "25" } = e2;
  return t4.$$set = (t5) => {
    "size" in t5 && n2(0, o2 = t5.size);
  }, [o2];
}
var Iu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Lu, Nu, s, { size: 0 });
  }
};
function Du(e2) {
  let n2, o2;
  return { c() {
    n2 = C("svg"), o2 = C("path"), N(o2, "d", "M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"), N(o2, "stroke", "#000000"), N(o2, "stroke-width", "2"), N(o2, "stroke-linecap", "round"), N(o2, "stroke-linejoin", "round"), N(n2, "width", e2[0]), N(n2, "height", e2[1]), N(n2, "viewBox", "0 0 24 24"), N(n2, "fill", "none"), N(n2, "xmlns", "http://www.w3.org/2000/svg");
  }, m(t4, e3) {
    k(t4, n2, e3), b(n2, o2);
  }, p(t4, [e3]) {
    1 & e3 && N(n2, "width", t4[0]), 2 & e3 && N(n2, "height", t4[1]);
  }, i: t, o: t, d(t4) {
    t4 && _(n2);
  } };
}
function Au(t4, e2, n2) {
  let { width: o2 = "25px" } = e2, { height: i2 = "25px" } = e2;
  return t4.$$set = (t5) => {
    "width" in t5 && n2(0, o2 = t5.width), "height" in t5 && n2(1, i2 = t5.height);
  }, [o2, i2];
}
var Tu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Au, Du, s, { width: 0, height: 1 });
  }
};
function Hu(t4) {
  let e2, n2, o2;
  return n2 = new zu({}), { c() {
    e2 = E("div"), bt(n2.$$.fragment), N(e2, "class", "step-icon svelte-kj30v6");
  }, m(t5, i2) {
    k(t5, e2, i2), kt(n2, e2, null), o2 = true;
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), _t(n2);
  } };
}
function Vu(t4) {
  let e2, n2, o2;
  return n2 = new Yd({}), { c() {
    e2 = E("div"), bt(n2.$$.fragment), N(e2, "class", "step-icon svelte-kj30v6");
  }, m(t5, i2) {
    k(t5, e2, i2), kt(n2, e2, null), o2 = true;
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), _t(n2);
  } };
}
function Fu(t4) {
  let e2, n2, o2;
  return n2 = new Iu({}), { c() {
    e2 = E("div"), bt(n2.$$.fragment), N(e2, "class", "step-icon svelte-kj30v6");
  }, m(t5, i2) {
    k(t5, e2, i2), kt(n2, e2, null), o2 = true;
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), _t(n2);
  } };
}
function Wu(t4) {
  let e2, n2, o2;
  return n2 = new Tu({}), { c() {
    e2 = E("div"), bt(n2.$$.fragment), N(e2, "class", "step-icon svelte-kj30v6");
  }, m(t5, i2) {
    k(t5, e2, i2), kt(n2, e2, null), o2 = true;
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), _t(n2);
  } };
}
function Xu(t4) {
  let e2, n2, o2, i2 = t4[0].collapsable ? "-" : "+";
  return { c() {
    e2 = E("div"), n2 = E("span"), o2 = O(i2), N(n2, "class", "expand svelte-kj30v6");
  }, m(t5, i3) {
    k(t5, e2, i3), b(e2, n2), b(n2, o2);
  }, p(t5, e3) {
    1 & e3 && i2 !== (i2 = t5[0].collapsable ? "-" : "+") && D(o2, i2);
  }, d(t5) {
    t5 && _(e2);
  } };
}
function Yu(t4) {
  let e2, n2, o2, i2, r2, s2, a2, l2, c2, d2, u2, h2, p2, f2, g2, m2, y2, w2, $2, v2, x2, S2, C2, M2, z2, L2, I2, T2 = (t4[0].hideMsgDetail ? t4[0].msg : t4[0].rawMsg) + "", H2 = "LOOP" === t4[0].type && Hu(), V2 = ("IF" === t4[0].type || "ELSE_IF" === t4[0].type) && Vu(), F2 = "ERR" === t4[0].type && Fu(), W2 = "FOLLOW" === t4[0].type && Wu();
  a2 = new Bs({ props: { class: "hndl", id: "t", type: "target", position: pr.Top } }), f2 = new Bs({ props: { class: "hndl", id: "b", type: "source", position: pr.Bottom } }), m2 = new Bs({ props: { class: "hndl", id: "bt", type: "target", position: pr.Bottom } }), w2 = new Bs({ props: { class: "hndl", id: "l", type: "source", position: pr.Left } }), v2 = new Bs({ props: { class: "hndl", id: "lt", type: "target", position: pr.Left } }), S2 = new Bs({ props: { class: "hndl", id: "r", type: "source", position: pr.Right } }), M2 = new Bs({ props: { class: "hndl", id: "rt", type: "target", position: pr.Right } });
  let X2 = ("IF" === t4[0].type || "ELSE_IF" === t4[0].type || "LOOP" === t4[0].type) && Xu(t4);
  return { c() {
    e2 = E("div"), H2 && H2.c(), n2 = P(), V2 && V2.c(), o2 = P(), F2 && F2.c(), i2 = P(), W2 && W2.c(), r2 = P(), s2 = E("div"), bt(a2.$$.fragment), l2 = P(), c2 = E("div"), d2 = E("div"), u2 = E("p"), h2 = O(T2), p2 = P(), bt(f2.$$.fragment), g2 = P(), bt(m2.$$.fragment), y2 = P(), bt(w2.$$.fragment), $2 = P(), bt(v2.$$.fragment), x2 = P(), bt(S2.$$.fragment), C2 = P(), bt(M2.$$.fragment), z2 = P(), X2 && X2.c(), A(e2, "position", "absolute"), N(d2, "class", "msgWrapper svelte-kj30v6"), N(c2, "class", "step-container svelte-kj30v6"), A(c2, "width", Cu + "px"), A(c2, "height", Ou + "px"), N(s2, "class", L2 = (t4[0].highlight ? "hovered" : "") + " " + (t4[0].isEnd ? "endStep" : "step") + " " + ("FOLLOW" === t4[0].type ? "clickable" : "") + " svelte-kj30v6");
  }, m(_2, E2) {
    k(_2, e2, E2), H2 && H2.m(e2, null), b(e2, n2), V2 && V2.m(e2, null), b(e2, o2), F2 && F2.m(e2, null), b(e2, i2), W2 && W2.m(e2, null), k(_2, r2, E2), k(_2, s2, E2), kt(a2, s2, null), b(s2, l2), b(s2, c2), b(c2, d2), b(d2, u2), b(u2, h2), t4[7](u2), t4[8](c2), b(s2, p2), kt(f2, s2, null), b(s2, g2), kt(m2, s2, null), b(s2, y2), kt(w2, s2, null), b(s2, $2), kt(v2, s2, null), b(s2, x2), kt(S2, s2, null), b(s2, C2), kt(M2, s2, null), b(s2, z2), X2 && X2.m(s2, null), I2 = true;
  }, p(t5, [r3]) {
    "LOOP" === t5[0].type ? H2 ? 1 & r3 && ft(H2, 1) : (H2 = Hu(), H2.c(), ft(H2, 1), H2.m(e2, n2)) : H2 && (ht(), gt(H2, 1, 1, () => {
      H2 = null;
    }), pt()), "IF" === t5[0].type || "ELSE_IF" === t5[0].type ? V2 ? 1 & r3 && ft(V2, 1) : (V2 = Vu(), V2.c(), ft(V2, 1), V2.m(e2, o2)) : V2 && (ht(), gt(V2, 1, 1, () => {
      V2 = null;
    }), pt()), "ERR" === t5[0].type ? F2 ? 1 & r3 && ft(F2, 1) : (F2 = Fu(), F2.c(), ft(F2, 1), F2.m(e2, i2)) : F2 && (ht(), gt(F2, 1, 1, () => {
      F2 = null;
    }), pt()), "FOLLOW" === t5[0].type ? W2 ? 1 & r3 && ft(W2, 1) : (W2 = Wu(), W2.c(), ft(W2, 1), W2.m(e2, null)) : W2 && (ht(), gt(W2, 1, 1, () => {
      W2 = null;
    }), pt()), (!I2 || 1 & r3) && T2 !== (T2 = (t5[0].hideMsgDetail ? t5[0].msg : t5[0].rawMsg) + "") && D(h2, T2), "IF" === t5[0].type || "ELSE_IF" === t5[0].type || "LOOP" === t5[0].type ? X2 ? X2.p(t5, r3) : (X2 = Xu(t5), X2.c(), X2.m(s2, null)) : X2 && (X2.d(1), X2 = null), (!I2 || 1 & r3 && L2 !== (L2 = (t5[0].highlight ? "hovered" : "") + " " + (t5[0].isEnd ? "endStep" : "step") + " " + ("FOLLOW" === t5[0].type ? "clickable" : "") + " svelte-kj30v6")) && N(s2, "class", L2);
  }, i(t5) {
    I2 || (ft(H2), ft(V2), ft(F2), ft(W2), ft(a2.$$.fragment, t5), ft(f2.$$.fragment, t5), ft(m2.$$.fragment, t5), ft(w2.$$.fragment, t5), ft(v2.$$.fragment, t5), ft(S2.$$.fragment, t5), ft(M2.$$.fragment, t5), I2 = true);
  }, o(t5) {
    gt(H2), gt(V2), gt(F2), gt(W2), gt(a2.$$.fragment, t5), gt(f2.$$.fragment, t5), gt(m2.$$.fragment, t5), gt(w2.$$.fragment, t5), gt(v2.$$.fragment, t5), gt(S2.$$.fragment, t5), gt(M2.$$.fragment, t5), I2 = false;
  }, d(n3) {
    n3 && (_(e2), _(r2), _(s2)), H2 && H2.d(), V2 && V2.d(), F2 && F2.d(), W2 && W2.d(), _t(a2), t4[7](null), t4[8](null), _t(f2), _t(m2), _t(w2), _t(v2), _t(S2), _t(M2), X2 && X2.d();
  } };
}
function Ru(t4, e2, n2) {
  const o2 = { desire: 15, min: 10, max: 80 };
  let i2, r2;
  function s2() {
    return __async(this, null, function* () {
      i2 && r2 && (yield (ot(), et), function(t5, e3) {
        let n3 = o2.min, i3 = o2.max, r3 = n3;
        for (; n3 <= i3; ) r3 = Math.floor((n3 + i3) / 2), t5.style.fontSize = `${r3}px`, (s3 = e3).scrollWidth > s3.clientWidth || s3.scrollHeight > s3.clientHeight ? i3 = --r3 : n3 = ++r3;
        var s3;
        t5.style.fontSize = `${i3}px`;
      }(r2, i2));
    });
  }
  var a2;
  Z(() => __async(this, null, function* () {
    yield s2();
  })), a2 = () => {
    s2();
  }, R().$$.after_update.push(a2);
  let { data: l2 } = e2, { position: c2 } = e2, { id: d2 } = e2, { hidden: u2 = false } = e2;
  return t4.$$set = (t5) => {
    "data" in t5 && n2(0, l2 = t5.data), "position" in t5 && n2(4, c2 = t5.position), "id" in t5 && n2(5, d2 = t5.id), "hidden" in t5 && n2(6, u2 = t5.hidden);
  }, [l2, i2, r2, o2, c2, d2, u2, function(t5) {
    U[t5 ? "unshift" : "push"](() => {
      r2 = t5, n2(2, r2);
    });
  }, function(t5) {
    U[t5 ? "unshift" : "push"](() => {
      i2 = t5, n2(1, i2);
    });
  }];
}
var Zu = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Ru, Yu, s, { fontSize: 3, data: 0, position: 4, id: 5, hidden: 6 });
  }
  get fontSize() {
    return this.$$.ctx[3];
  }
};
function Bu(t4, e2, n2 = {}, o2 = null) {
  return o2 ? t4.forEach((t5) => {
    o2.has(t5.id) && (t5.data = __spreadValues(__spreadValues(__spreadValues({}, t5.data), e2), n2));
  }) : t4.forEach((t5) => {
    t5.data = __spreadValues(__spreadValues(__spreadValues({}, t5.data), e2), n2);
  }), t4;
}
var Ku = "stroke-width: 2px; stroke: #cac2c2;";
var Gu = { type: hr.ArrowClosed, width: 20, height: 20, color: "#cac2c2" };
var ju = { type: hr.ArrowClosed, width: 20, height: 20, color: "#FF4000" };
var qu = { type: "smoothstep", markerEnd: Gu, style: Ku };
var Qu = class {
  constructor(t4, e2, n2) {
    this.nodes = t4, this.edges = e2, this.nodeState = n2, this.selectedNodes = /* @__PURE__ */ new Set(), this.selectedEdges = /* @__PURE__ */ new Set();
  }
  update(t4, e2) {
    this.nodes = t4, this.edges = e2;
  }
  selectPath(t4, e2, n2 = {}) {
    this.selectNodes(t4), e2 && this.selectEdges(e2, th);
  }
  selectNodes(t4) {
    Bu(this.nodes, this.nodeState, { highlight: true }, t4), this.selectedNodes = t4;
  }
  selectNodesByIndexes(t4) {
    !function(t5, e2, n2 = {}, o2 = []) {
      o2.forEach((o3) => {
        t5[o3].data = __spreadValues(__spreadValues(__spreadValues({}, t5[o3].data), e2), n2);
      });
    }(this.nodes, this.nodeState, { highlight: true }, t4);
  }
  selectEdges(t4) {
    Uu(this.edges, t4, th), this.selectedEdges = t4;
  }
  unselectPath() {
    this.unselectNodes(), this.selectedEdges.size > 0 && this.unselectEdges(th);
  }
  unselectNodes() {
    Bu(this.nodes, this.nodeState, { highlight: false }, this.selectedNodes), this.selectedNodes.clear();
  }
  unselectAllNodes() {
    Bu(this.nodes, this.nodeState, { highlight: false }), this.selectedNodes.clear();
  }
  unselectEdges() {
    Uu(this.edges, this.selectedEdges, Ju), this.selectedEdges.clear();
  }
  unselectAllEdges() {
    Uu(this.edges, null, Ju), this.selectedEdges.clear();
  }
  toggleEdge(t4) {
    this.selectedEdges.has(t4) ? (this.selectedEdges.delete(t4), Uu(this.edges, /* @__PURE__ */ new Set([t4]), Ju)) : (this.selectedEdges.add(t4), Uu(this.edges, /* @__PURE__ */ new Set([t4]), th));
  }
};
function Uu(t4, e2, n2) {
  e2 ? t4.forEach((t5) => {
    e2.has(t5.id) && n2(t5);
  }) : t4.forEach((t5) => {
    n2(t5);
  });
}
function Ju(t4) {
  t4.style = Ku, t4.markerEnd = Gu, t4.labelStyle = "font-size: 10px; font-weight: inherit; color: inherit;";
}
function th(t4) {
  t4.style = "stroke-width: 2px; stroke: #FF4000", t4.markerEnd = ju, t4.labelStyle = "font-size: 16px; font-weight: bold; color: #ff6347;";
}
function eh(t4, e2, n2, o2) {
  oh(t4, e2, n2.data.collapsable, function(t5, e3) {
    const n3 = [], o3 = e3.data.indent;
    for (let i2 = e3.data.index + 1; i2 < t5.length; i2++) {
      const e4 = t5[i2];
      if (e4.data.indent <= o3) break;
      false === e4.data.collapsable && (i2 = nh(t5, i2)), n3.push(e4.id);
    }
    return n3;
  }(t4, n2), n2, o2), n2.data = __spreadProps(__spreadValues({}, n2.data), { collapsable: !n2.data.collapsable });
}
function nh(t4, e2) {
  const n2 = t4[e2].data.indent;
  for (let o2 = e2 + 1; o2 < t4.length; o2++) {
    if (n2 >= t4[o2].data.indent) return --o2;
  }
}
function oh(t4, e2, n2, o2, i2, r2) {
  for (let e3 = 0; e3 < t4.length; e3++) {
    const i3 = t4[e3];
    o2.includes(i3.id) && (i3.hidden = n2);
  }
  n2 ? function(t5, e3, n3, o3) {
    e3.forEach((e4) => {
      (t5[o3[e4.target]].hidden || t5[o3[e4.source]].hidden || e4.source === n3.id) && (e4.hidden = true);
    });
  }(t4, e2, i2, r2) : function(t5, e3, n3, o3) {
    e3.forEach((e4) => {
      t5[o3[e4.target]].hidden || t5[o3[e4.source]].hidden ? e4.source === n3.id && (e4.hidden = false) : e4.hidden = false;
    });
  }(t4, e2, i2, r2);
}
function ih(t4) {
  let e2, n2;
  return e2 = new zd({}), { c() {
    bt(e2.$$.fragment);
  }, m(t5, o2) {
    kt(e2, t5, o2), n2 = true;
  }, i(t5) {
    n2 || (ft(e2.$$.fragment, t5), n2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), n2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function rh(t4) {
  let e2, n2, o2, i2, r2, s2;
  e2 = new id({}), o2 = new md({});
  let a2 = t4[5] && ih();
  return { c() {
    bt(e2.$$.fragment), n2 = P(), bt(o2.$$.fragment), i2 = P(), a2 && a2.c(), r2 = M();
  }, m(t5, l2) {
    kt(e2, t5, l2), k(t5, n2, l2), kt(o2, t5, l2), k(t5, i2, l2), a2 && a2.m(t5, l2), k(t5, r2, l2), s2 = true;
  }, p(t5, e3) {
    t5[5] ? a2 ? 32 & e3 && ft(a2, 1) : (a2 = ih(), a2.c(), ft(a2, 1), a2.m(r2.parentNode, r2)) : a2 && (ht(), gt(a2, 1, 1, () => {
      a2 = null;
    }), pt());
  }, i(t5) {
    s2 || (ft(e2.$$.fragment, t5), ft(o2.$$.fragment, t5), ft(a2), s2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), gt(o2.$$.fragment, t5), gt(a2), s2 = false;
  }, d(t5) {
    t5 && (_(n2), _(i2), _(r2)), _t(e2, t5), _t(o2, t5), a2 && a2.d(t5);
  } };
}
function sh(t4) {
  let e2, n2, o2, i2, r2, s2;
  function a2(e3) {
    t4[22](e3);
  }
  function l2(e3) {
    t4[23](e3);
  }
  e2 = new Eu({ props: { selection: t4[0], nodes: t4[1], focusOn: t4[4] } });
  let c2 = { nodeTypes: t4[8], fitView: true, defaultEdgeOptions: qu, $$slots: { default: [rh] }, $$scope: { ctx: t4 } };
  return void 0 !== t4[6] && (c2.nodes = t4[6]), void 0 !== t4[7] && (c2.edges = t4[7]), o2 = new bc({ props: c2 }), U.push(() => xt(o2, "nodes", a2)), U.push(() => xt(o2, "edges", l2)), o2.$on("nodemouseenter", t4[9]), o2.$on("nodemouseleave", t4[10]), o2.$on("nodeclick", t4[14]), o2.$on("edgeclick", t4[11]), { c() {
    bt(e2.$$.fragment), n2 = P(), bt(o2.$$.fragment);
  }, m(t5, i3) {
    kt(e2, t5, i3), k(t5, n2, i3), kt(o2, t5, i3), s2 = true;
  }, p(t5, n3) {
    const s3 = {};
    1 & n3 && (s3.selection = t5[0]), 2 & n3 && (s3.nodes = t5[1]), 16 & n3 && (s3.focusOn = t5[4]), e2.$set(s3);
    const a3 = {};
    67108896 & n3 && (a3.$$scope = { dirty: n3, ctx: t5 }), !i2 && 64 & n3 && (i2 = true, a3.nodes = t5[6], rt(() => i2 = false)), !r2 && 128 & n3 && (r2 = true, a3.edges = t5[7], rt(() => r2 = false)), o2.$set(a3);
  }, i(t5) {
    s2 || (ft(e2.$$.fragment, t5), ft(o2.$$.fragment, t5), s2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), gt(o2.$$.fragment, t5), s2 = false;
  }, d(t5) {
    t5 && _(n2), _t(e2, t5), _t(o2, t5);
  } };
}
function ah(t4) {
  let e2, n2, o2, r2, s2;
  return n2 = new Sc({ props: { $$slots: { default: [sh] }, $$scope: { ctx: t4 } } }), { c() {
    e2 = E("div"), bt(n2.$$.fragment), N(e2, "style", t4[2]), N(e2, "class", t4[3]);
  }, m(i2, a2) {
    k(i2, e2, a2), kt(n2, e2, null), o2 = true, r2 || (s2 = [z(window, "keyup", t4[13]), z(window, "keydown", t4[12])], r2 = true);
  }, p(t5, [i2]) {
    const r3 = {};
    67109107 & i2 && (r3.$$scope = { dirty: i2, ctx: t5 }), n2.$set(r3), (!o2 || 4 & i2) && N(e2, "style", t5[2]), (!o2 || 8 & i2) && N(e2, "class", t5[3]);
  }, i(t5) {
    o2 || (ft(n2.$$.fragment, t5), o2 = true);
  }, o(t5) {
    gt(n2.$$.fragment, t5), o2 = false;
  }, d(t5) {
    t5 && _(e2), _t(n2), r2 = false, i(s2);
  } };
}
function lh(t4, e2, n2) {
  const o2 = K(), i2 = { step: Zu };
  let { nodes: r2 = [] } = e2, { edges: s2 = [] } = e2, { nodeState: a2 = {} } = e2, { paths: l2 = [] } = e2, { nodesIndex: c2 = {} } = e2, { style: d2 = "" } = e2, { clazz: u2 = "" } = e2, { selection: h2 = {} } = e2, { focusOn: p2 = true } = e2, { minimap: f2 = true } = e2, { selectedFlowIndex: g2 = -1 } = e2, m2 = new Qu(r2, s2, a2), y2 = fe(r2), w2 = fe(s2), $2 = -1;
  function v2(t5, e3) {
    m2.update(t5, e3), y2.set(t5), w2.set(e3);
  }
  return B(() => {
    v2([], []);
  }), t4.$$set = (t5) => {
    "nodes" in t5 && n2(1, r2 = t5.nodes), "edges" in t5 && n2(15, s2 = t5.edges), "nodeState" in t5 && n2(16, a2 = t5.nodeState), "paths" in t5 && n2(17, l2 = t5.paths), "nodesIndex" in t5 && n2(18, c2 = t5.nodesIndex), "style" in t5 && n2(2, d2 = t5.style), "clazz" in t5 && n2(3, u2 = t5.clazz), "selection" in t5 && n2(0, h2 = t5.selection), "focusOn" in t5 && n2(4, p2 = t5.focusOn), "minimap" in t5 && n2(5, f2 = t5.minimap), "selectedFlowIndex" in t5 && n2(19, g2 = t5.selectedFlowIndex);
  }, t4.$$.update = () => {
    65536 & t4.$$.dirty && n2(21, m2.nodeState = a2, m2), 2097219 & t4.$$.dirty && (h2 && h2.nodeIds && h2.nodeIds.length > 0 ? (m2.unselectAllNodes(), m2.selectNodes(new Set(h2.nodeIds)), y2.set(r2)) : h2 && h2.nodeIndexes && h2.nodeIndexes.length > 0 && (m2.unselectAllNodes(), m2.selectNodesByIndexes(new Set(h2.nodeIndexes)), y2.set(r2)));
  }, [h2, r2, d2, u2, p2, f2, y2, w2, i2, function(t5) {
    const e3 = t5.detail.node;
    let o3 = null;
    if (-1 !== $2) {
      switch ($2) {
        case "a":
          o3 = function(t6, e4) {
            return t6.filter((t7) => t7.includes(String(e4))).flat();
          }(l2, e3.data.index);
          break;
        case "q":
          o3 = function(t6, e4) {
            return t6.filter((t7) => t7.includes(String(e4))).flatMap((t7) => {
              let n3 = t7.indexOf(String(e4));
              return -1 !== n3 && n3 < t7.length - 1 ? t7.slice(n3 + 1) : [];
            });
          }(l2, e3.data.index);
          break;
        case "b":
          o3 = function(t6, e4) {
            return t6.filter((t7) => t7.includes(String(e4))).flatMap((t7) => {
              let n3 = t7.indexOf(String(e4));
              return n3 > 0 ? t7.slice(0, n3) : [];
            });
          }(l2, e3.data.index);
          break;
        case "l":
          o3 = function(t6, e4) {
            let n3 = t6.filter((t7) => t7.includes(String(e4)));
            return 0 === n3.length ? [] : n3.reduce((t7, e5) => e5.length > t7.length ? e5 : t7);
          }(l2, e3.data.index);
          break;
        case "s":
          o3 = function(t6, e4) {
            let n3 = t6.filter((t7) => t7.includes(String(e4)));
            return 0 === n3.length ? [] : n3.reduce((t7, e5) => e5.length < t7.length ? e5 : t7);
          }(l2, e3.data.index);
      }
      m2.unselectAllNodes(), m2.selectNodesByIndexes(new Set(o3)), y2.set(r2), n2(0, h2 = { flowIndex: g2, nodeIndexes: o3 });
    }
  }, function() {
    -1 !== $2 && (m2.unselectAllNodes(), y2.set(r2), n2(0, h2 = { flowIndex: g2, nodeIndexes: [] }));
  }, function(t5) {
    m2.toggleEdge(t5.detail.edge.id), w2.set(s2);
  }, function(t5) {
    $2 = t5.key;
  }, function(t5) {
    $2 = -1;
  }, function(t5) {
    const e3 = t5.detail.node;
    "FOLLOW" === e3.data.type ? o2("flowChange", { flowName: e3.data.msg }) : "IF" !== e3.data.type && "ELSE_IF" !== e3.data.type && "LOOP" !== e3.data.type || ("]" === $2 ? function(t6, e4, n3, o3) {
      const i3 = [], r3 = n3.data.indent;
      for (let e5 = n3.data.index + 1; e5 < t6.length; e5++) {
        const n4 = t6[e5];
        if (n4.data.indent <= r3) break;
        false !== n4.data.collapsable && true !== n4.data.collapsable || (n4.data = __spreadProps(__spreadValues({}, n4.data), { collapsable: false })), i3.push(n4.id);
      }
      oh(t6, e4, true, i3, n3, o3), n3.data = __spreadProps(__spreadValues({}, n3.data), { collapsable: false });
    }(r2, s2, e3, c2) : "[" === $2 ? function(t6, e4, n3, o3) {
      const i3 = [], r3 = n3.data.indent;
      for (let e5 = n3.data.index + 1; e5 < t6.length; e5++) {
        const n4 = t6[e5];
        if (n4.data.indent <= r3) break;
        false !== n4.data.collapsable && true !== n4.data.collapsable || (n4.data = __spreadProps(__spreadValues({}, n4.data), { collapsable: true })), i3.push(n4.id);
      }
      oh(t6, e4, false, i3, n3, o3), n3.data = __spreadProps(__spreadValues({}, n3.data), { collapsable: true });
    }(r2, s2, e3, c2) : eh(r2, s2, e3, c2), v2(r2, s2));
  }, s2, a2, l2, c2, g2, v2, m2, function(t5) {
    y2 = t5, n2(6, y2);
  }, function(t5) {
    w2 = t5, n2(7, w2);
  }];
}
var ch = class extends Et {
  constructor(t4) {
    super(), St(this, t4, lh, ah, s, { nodes: 1, edges: 15, nodeState: 16, paths: 17, nodesIndex: 18, style: 2, clazz: 3, selection: 0, focusOn: 4, minimap: 5, selectedFlowIndex: 19, updateStore: 20 });
  }
  get updateStore() {
    return this.$$.ctx[20];
  }
};
function dh(t4) {
  return t4 && t4.__esModule && Object.prototype.hasOwnProperty.call(t4, "default") ? t4.default : t4;
}
var uh;
var hh;
var ph;
var fh;
var gh = function() {
  if (fh) return ph;
  fh = 1;
  const t4 = function() {
    if (hh) return uh;
    hh = 1;
    const t5 = ["IF", "ELSE_IF", "ELSE", "LOOP"], e3 = ["GOTO", "SKIP", "STOP", "END"];
    function n3(e4) {
      return t5.includes(e4.type);
    }
    function o3(t6) {
      return e3.includes(t6.type);
    }
    function i3(t6, e4, n4, o4) {
      let r4 = -2;
      if (void 0 !== n4) {
        const o5 = t6[n4], i4 = t6[e4].indent;
        for (let s3 = e4 + 1; s3 < t6.length; s3++) {
          const e5 = t6[s3].indent;
          if (e5 === i4) {
            r4 = s3;
            break;
          }
          if (e5 < i4) {
            r4 = e5 > o5.indent ? s3 : n4;
            break;
          }
        }
        -2 === r4 && (r4 = n4);
      } else {
        for (let n5 = e4 + 1; n5 < t6.length; n5++) if (t6[n5].indent <= t6[e4].indent) {
          r4 = n5;
          break;
        }
        -2 === r4 && (r4 = -1);
      }
      return r4 > -1 && t6[r4].type.startsWith("ELSE") && (o4 || t6[e4].indent !== t6[r4].indent || "IF" !== t6[e4].type && "ELSE_IF" !== t6[e4].type) && (r4 = i3(t6, r4, n4, true)), r4;
    }
    function r3(t6, e4, n4, o4) {
      const r4 = i3(t6, e4, h2(o4));
      n4[e4].push(r4);
    }
    function s2(t6, e4) {
      const n4 = t6[e4].indent;
      for (let o4 = e4 - 1; o4 > -1; o4--) if (n4 === t6[o4].indent) return o4;
      throw new Error("Unable to find last step of same indent level");
    }
    function a2(t6, e4, n4, o4, r4) {
      if ("ELSE" === t6.type) return void delete n4[o4];
      const s3 = t6.indent;
      e4[o4 + 1] && e4[o4 + 1].indent > s3 ? n4[o4].push(o4 + 1) : n4[o4].push(void 0);
      let a3 = i3(e4, o4, h2(r4));
      -1 !== a3 && "ELSE" === e4[a3].type && a3++, n4[o4].push(a3), "LOOP" === t6.type && r4.push(o4);
    }
    function l2(t6, e4) {
      if (0 === e4) throw new Error(`${t6[e4].type} can't be first step of the flow`);
    }
    function c2(t6, e4, n4, o4, i4) {
      if (l2(t6, i4), void 0 === n4[e4.msg]) throw new Error(`GOTO is pointing to ${e4.msg} that doesn't specified with any step`);
      u2(t6, o4, i4, n4[e4.msg]);
    }
    function d2(t6, e4, n4, o4) {
      l2(t6, e4);
      const r4 = t6[e4];
      if ("SKIP" === r4.type) {
        if (o4.length < 1) throw new Error("SKIP must be inside LOOP");
        u2(t6, n4, e4, o4[o4.length - 1]);
      } else if ("STOP" === r4.type) {
        if (o4.length < 1) throw new Error("STOP must be inside LOOP");
        u2(t6, n4, e4, i3(t6, h2(o4)));
      } else "END" === r4.type && u2(t6, n4, e4, -1);
    }
    function u2(t6, e4, n4, o4) {
      for (let i4 = 0; i4 < n4; i4++) {
        let r4 = e4[i4];
        if (void 0 !== r4) {
          const e5 = r4.indexOf(n4);
          -1 !== e5 && ("ELSE" === t6[i4].type && (r4 = s2(t6, r4)), r4[e5] = o4);
        }
      }
      delete e4[n4];
    }
    function h2(t6) {
      return t6[t6.length - 1];
    }
    return uh = function(t6, e4, i4) {
      const s3 = [];
      for (let l3 = 0; l3 < t6.length; l3++) {
        const u3 = t6[l3], h3 = u3.indent;
        if (s3.length > 0) for (let e5 = s3.length - 1; e5 > -1; e5--) h3 <= t6[s3[e5]].indent && s3.pop();
        "GOTO" === u3.type ? c2(t6, u3, e4, i4, l3) : n3(u3) ? a2(u3, t6, i4, l3, s3) : o3(u3) ? d2(t6, l3, i4, s3) : r3(t6, l3, i4, s3);
      }
    };
  }(), e2 = ["IF", "ELSE_IF", "LOOP", "ELSE"], n2 = ["GOTO", "SKIP", "STOP", "END"], o2 = ["AND", "THEN", "BUT", "FOLLOW", "ERR"];
  class i2 {
    constructor(t5) {
      this.name = t5, this.headers = {}, this.steps = [], this.links = {}, this.leveledSteps = [[]];
    }
  }
  function r2(t5) {
    return -1 !== n2.indexOf(t5) || -1 !== e2.indexOf(t5) || -1 !== o2.indexOf(t5);
  }
  return ph = function(e3) {
    const n3 = e3.split("\n"), o3 = [];
    let s2 = {}, a2 = [], l2 = 0, c2 = -1, d2 = null, u2 = false;
    return n3.forEach((e4, n4) => {
      const h2 = e4.trim();
      if (!h2 || "#" === h2[0]) return;
      if (h2.startsWith("FLOW:")) return d2 && t4(d2.steps, s2, d2.links), s2 = {}, a2 = [], l2 = 0, c2 = -1, d2 = new i2(h2.substring(6)), o3.push(d2), void (u2 = true);
      if (u2 && h2.match(/^[a-z]{1,70}:/)) {
        const [t5, n5] = e4.split(":");
        return void (d2.headers[t5.trim()] = n5.trim());
      }
      u2 = false, c2++;
      const p2 = e4.search(/\S/);
      let f2;
      if (void 0 !== a2[l2] ? f2 = a2[l2] : (f2 = p2, a2[l2] = p2), f2 === p2) d2.leveledSteps[l2].push(c2);
      else if (f2 < p2) a2[++l2] = p2, d2.leveledSteps[l2] ? d2.leveledSteps[l2].push(c2) : d2.leveledSteps.push([c2]);
      else {
        for (; l2 > -1; l2--) {
          if (a2[l2] === p2) break;
        }
        if (-1 === l2) throw new Error(`Indentation issue with line |${e4}|`);
        d2.leveledSteps[l2].push(c2);
      }
      let g2 = function(t5) {
        const e5 = { msg: "", rawMsg: "", type: "" };
        if ("[" === t5[0]) {
          const n6 = t5.indexOf("]");
          e5.index = t5.substring(1, n6).trim(), t5 = t5.substring(n6 + 1).trimStart();
        }
        const n5 = t5.indexOf(" ");
        if (n5 < 1) r2(t5) ? e5.type = t5 : e5.msg = e5.rawMsg = t5;
        else {
          const o4 = t5.substring(0, n5), i3 = t5.substring(n5 + 1);
          r2(o4) && (e5.type = o4, t5 = i3), e5.rawMsg = t5.replace(/\s+/g, " "), e5.msg = function(t6) {
            let e6 = 0, n6 = "";
            for (let o5 = 0; o5 < t6.length; o5++) {
              const i4 = t6[o5];
              if ("(" === i4) e6++;
              else if (")" === i4) e6--;
              else {
                if (e6 > 0) continue;
                n6 += i4;
              }
            }
            return n6.trim();
          }(t5).replace(/\s+/g, " ");
        }
        return e5;
      }(e4.trim());
      g2.indent = l2, g2.index && (s2[g2.index] = c2), d2.steps.push(g2), d2.links[c2] = [];
    }), t4(d2.steps, s2, d2.links), o3;
  }, ph;
}();
var mh = dh(gh);
var yh = Cu + 1.1 * Cu;
var wh = Ou + 1.5 * Ou;
function $h(t4, e2, n2) {
  return { id: t4 + "", type: "step", data: e2, position: n2 };
}
function vh(t4, e2, n2, o2 = "", i2) {
  let r2 = false, s2 = "", a2 = "", l2 = "";
  return kh(o2) && 0 == n2 && (s2 = "r", a2 = "lt"), t4 > e2 && (s2 = "l", r2 = true), "IF" === o2 || "ELSE_IF" === o2 ? 0 === n2 ? l2 = "True" : 1 === n2 && (l2 = "False") : "LOOP" === o2 && 1 === n2 && (l2 = "Exit"), { id: `${t4}-${e2}`, source: t4 + "", target: e2 + "", data: {}, sourceHandle: s2, targetHandle: a2, animated: r2, label: l2 };
}
function xh(t4) {
  const e2 = [], n2 = [];
  let o2;
  const i2 = [];
  let r2 = 0, s2 = -1;
  const a2 = {};
  let l2 = 0;
  for (; r2 < t4.steps.length; r2++) {
    const c3 = t4.steps[r2];
    if (t4.links[r2]) {
      let d3;
      if (s2++, o2) {
        const e3 = t4.steps[o2.id];
        if (e3.indent === c3.indent) d3 = { x: o2.position.x, y: o2.position.y + wh };
        else if (e3.indent < c3.indent) s2--, d3 = { x: o2.position.x + yh, y: o2.position.y };
        else {
          let t5, n3 = e3.indent - c3.indent;
          for (; n3-- > 0; ) t5 = i2.pop();
          d3 = { x: t5.position.x, y: s2 * wh };
        }
        "ELSE" === t4.steps[r2 - 1].type && (d3 = { x: d3.x - yh, y: d3.y });
      } else d3 = { x: 0, y: 0 };
      const u2 = $h(r2, { msg: c3.msg, rawMsg: c3.rawMsg, type: c3.type, indent: c3.indent }, d3);
      kh(c3.type) ? (l2++, u2.data.collapsable = true) : "GOTO" === c3.type && l2++, e2.push(u2), u2.data.index = e2.length - 1, a2[r2] = e2.length - 1, o2 = u2, kh(c3.type) && i2.push(u2);
      for (let e3 = 0; e3 < t4.links[r2].length; e3++) {
        const o3 = t4.links[r2][e3];
        if (-1 === o3) u2.data.isEnd = true;
        else {
          if (!t4.links[o3]) throw new Error(`Link for Step ${o3} is not present`);
          const i3 = vh(r2, o3, e3, c3.type, t4.steps[o3].type);
          n2.push(i3);
        }
      }
    }
  }
  e2[0].data.isStart = true;
  let c2 = function(t5, e3) {
    const n3 = [];
    function o3(i3, r3, s3) {
      const a3 = e3[i3];
      if (r3.push(String(a3)), -1 === i3) n3.push([...r3.slice(0, -1)]);
      else for (const e4 of t5[i3] || []) void 0 === s3[e4] && (s3[e4] = 0), (s3[e4] < 2 || -1 === e4) && (s3[e4]++, o3(e4, r3, __spreadValues({}, s3)), s3[e4]--);
      r3.pop();
    }
    return o3(0, [], { 0: 1 }), n3;
  }(t4.links, a2);
  c2 = c2.sort((t5, e3) => t5.length - e3.length);
  const d2 = {};
  return d2.cyclomaticComplexity = l2 + 1, d2.depth = t4.leveledSteps.length, d2.stepsCount = t4.steps.length, d2.decisionPoints = l2, d2.nestingLoops = function(t5) {
    const e3 = [];
    let n3 = 0;
    return t5.forEach((t6, o3) => {
      "LOOP" === t6.type ? (n3++, e3[n3 - 1] || (e3[n3 - 1] = []), e3[n3 - 1].push(o3)) : "END" === t6.type && n3--;
    }), e3;
  }(t4.steps), { flowName: t4.name, nodes: e2, edges: n2, paths: c2, nodesIndex: a2, stats: d2 };
}
var bh = ["IF", "ELSE_IF", "LOOP"];
function kh(t4) {
  return -1 !== bh.indexOf(t4);
}
function _h(t4) {
  let e2, n2, o2, i2, r2;
  function s2(e3) {
    t4[22](e3);
  }
  function a2(e3) {
    t4[23](e3);
  }
  function l2(e3) {
    t4[24](e3);
  }
  let c2 = { flowsData: t4[1], flowName: t4[13], nodes: t4[9], handleFlowChange: t4[16], hideStepMsgDetail: t4[18] };
  return void 0 !== t4[7] && (c2.selectedFlowIndex = t4[7]), void 0 !== t4[14].hideMsgDetail && (c2.hideMsgDetail = t4[14].hideMsgDetail), void 0 !== t4[2] && (c2.focusOn = t4[2]), e2 = new _u({ props: c2 }), U.push(() => xt(e2, "selectedFlowIndex", s2)), U.push(() => xt(e2, "hideMsgDetail", a2)), U.push(() => xt(e2, "focusOn", l2)), e2.$on("pathSelected", t4[19]), { c() {
    bt(e2.$$.fragment);
  }, m(t5, n3) {
    kt(e2, t5, n3), r2 = true;
  }, p(t5, r3) {
    const s3 = {};
    2 & r3 && (s3.flowsData = t5[1]), 8192 & r3 && (s3.flowName = t5[13]), 512 & r3 && (s3.nodes = t5[9]), !n2 && 128 & r3 && (n2 = true, s3.selectedFlowIndex = t5[7], rt(() => n2 = false)), !o2 && 16384 & r3 && (o2 = true, s3.hideMsgDetail = t5[14].hideMsgDetail, rt(() => o2 = false)), !i2 && 4 & r3 && (i2 = true, s3.focusOn = t5[2], rt(() => i2 = false)), e2.$set(s3);
  }, i(t5) {
    r2 || (ft(e2.$$.fragment, t5), r2 = true);
  }, o(t5) {
    gt(e2.$$.fragment, t5), r2 = false;
  }, d(t5) {
    _t(e2, t5);
  } };
}
function Sh(t4) {
  let n2, o2, i2, r2, s2, a2 = t4[6] && _h(t4);
  const l2 = [{ nodes: t4[9] }, { edges: t4[10] }, { nodeState: t4[14] }, { paths: t4[11] }, { nodesIndex: t4[12] }, { selectedFlowIndex: t4[7] }, t4[20], { focusOn: t4[2] }, { minimap: t4[5] }, { style: "width: " + t4[3] + "; height: " + t4[8] + ";" }];
  function c2(e2) {
    t4[26](e2);
  }
  let d2 = {};
  for (let t5 = 0; t5 < l2.length; t5 += 1) d2 = e(d2, l2[t5]);
  return void 0 !== t4[0] && (d2.selection = t4[0]), i2 = new ch({ props: d2 }), t4[25](i2), U.push(() => xt(i2, "selection", c2)), i2.$on("flowChange", t4[17]), { c() {
    n2 = E("div"), a2 && a2.c(), o2 = P(), bt(i2.$$.fragment), N(n2, "class", "solothought_text2chart_flow"), A(n2, "width", t4[3]), A(n2, "height", t4[4]);
  }, m(t5, e2) {
    k(t5, n2, e2), a2 && a2.m(n2, null), b(n2, o2), kt(i2, n2, null), s2 = true;
  }, p(t5, [e2]) {
    t5[6] ? a2 ? (a2.p(t5, e2), 64 & e2 && ft(a2, 1)) : (a2 = _h(t5), a2.c(), ft(a2, 1), a2.m(n2, o2)) : a2 && (ht(), gt(a2, 1, 1, () => {
      a2 = null;
    }), pt());
    const c3 = 1073068 & e2 ? $t(l2, [512 & e2 && { nodes: t5[9] }, 1024 & e2 && { edges: t5[10] }, 16384 & e2 && { nodeState: t5[14] }, 2048 & e2 && { paths: t5[11] }, 4096 & e2 && { nodesIndex: t5[12] }, 128 & e2 && { selectedFlowIndex: t5[7] }, 1048576 & e2 && vt(t5[20]), 4 & e2 && { focusOn: t5[2] }, 32 & e2 && { minimap: t5[5] }, 264 & e2 && { style: "width: " + t5[3] + "; height: " + t5[8] + ";" }]) : {};
    !r2 && 1 & e2 && (r2 = true, c3.selection = t5[0], rt(() => r2 = false)), i2.$set(c3), (!s2 || 8 & e2) && A(n2, "width", t5[3]), (!s2 || 16 & e2) && A(n2, "height", t5[4]);
  }, i(t5) {
    s2 || (ft(a2), ft(i2.$$.fragment, t5), s2 = true);
  }, o(t5) {
    gt(a2), gt(i2.$$.fragment, t5), s2 = false;
  }, d(e2) {
    e2 && _(n2), a2 && a2.d(), t4[25](null), _t(i2);
  } };
}
function Eh(t4, n2, o2) {
  const i2 = ["text", "selection", "focusOn", "width", "height", "flowsData", "minimap", "toolbar"];
  let r2 = y(n2, i2), { text: s2 = "" } = n2, { selection: a2 = {} } = n2, { focusOn: l2 = true } = n2, { width: c2 = "100%" } = n2, { height: d2 = "100%" } = n2, { flowsData: u2 = [] } = n2, { minimap: h2 = true } = n2, { toolbar: p2 = true } = n2, f2 = "";
  f2 = p2 ? `calc(${d2} - 50px)` : d2;
  let g2, w2 = 0, $2 = [], v2 = [], x2 = [], b2 = {}, k2 = "", _2 = { hideMsgDetail: false, standardShape: false };
  function S2(t5) {
    if (o2(7, w2 = t5), u2[w2]) {
      const e2 = u2[w2];
      o2(9, $2 = e2.nodes), o2(10, v2 = e2.edges), o2(11, x2 = e2.paths), o2(12, b2 = e2.nodesIndex), o2(13, k2 = e2.flowName), o2(0, a2 = { flowIndex: t5, nodesIndex: b2 }), Bu($2, _2), g2 && "function" == typeof g2.updateStore && g2.updateStore($2, v2);
    }
  }
  return t4.$$set = (t5) => {
    n2 = e(e({}, n2), m(t5)), o2(20, r2 = y(n2, i2)), "text" in t5 && o2(21, s2 = t5.text), "selection" in t5 && o2(0, a2 = t5.selection), "focusOn" in t5 && o2(2, l2 = t5.focusOn), "width" in t5 && o2(3, c2 = t5.width), "height" in t5 && o2(4, d2 = t5.height), "flowsData" in t5 && o2(1, u2 = t5.flowsData), "minimap" in t5 && o2(5, h2 = t5.minimap), "toolbar" in t5 && o2(6, p2 = t5.toolbar);
  }, t4.$$.update = () => {
    2097280 & t4.$$.dirty && s2.length > 0 && (o2(1, u2 = function(t5) {
      const e2 = [];
      try {
        const n3 = mh(t5);
        for (let t6 = 0; t6 < n3.length; t6++) {
          const o3 = n3[t6];
          if (o3.steps.length > 0) {
            const t7 = xh(o3);
            e2.push(t7);
          }
        }
      } catch (t6) {
        console.error(t6);
      }
      return e2;
    }(s2)), S2(w2)), 130 & t4.$$.dirty && u2.length > 0 && S2(w2), 129 & t4.$$.dirty && a2 && a2.nodeIds && a2.nodeIds.length && a2.flowIndex !== w2 && S2(a2.flowIndex);
  }, [a2, u2, l2, c2, d2, h2, p2, w2, f2, $2, v2, x2, b2, k2, _2, g2, function(t5) {
    S2(parseInt(t5.target.value));
  }, function(t5) {
    if (t5.detail.flowName) {
      const e2 = t5.detail.flowName;
      u2.forEach((t6, n3) => {
        t6.flowName === e2 && S2(n3);
      });
    }
  }, function() {
    o2(14, _2.hideMsgDetail = !_2.hideMsgDetail, _2), Bu($2, { hideMsgDetail: _2.hideMsgDetail }), g2.updateStore($2, v2);
  }, function(t5) {
    "play" === t5.detail.mode ? function(t6) {
      const e2 = t6.detail.flowIndex, n3 = t6.detail.nodeIndexes;
      function i3(t7) {
        if (t7 < n3.length) {
          const r3 = n3[t7];
          o2(0, a2 = { flowIndex: e2, nodeIndexes: [r3] }), setTimeout(() => {
            i3(t7 + 1);
          }, 400);
        } else o2(0, a2 = { flowIndex: -1, nodeIndexes: [] });
      }
      i3(0);
    }(t5) : o2(0, a2 = { flowIndex: t5.detail.flowIndex, nodeIndexes: t5.detail.nodeIndexes });
  }, r2, s2, function(t5) {
    w2 = t5, o2(7, w2);
  }, function(e2) {
    t4.$$.not_equal(_2.hideMsgDetail, e2) && (_2.hideMsgDetail = e2, o2(14, _2));
  }, function(t5) {
    l2 = t5, o2(2, l2);
  }, function(t5) {
    U[t5 ? "unshift" : "push"](() => {
      g2 = t5, o2(15, g2);
    });
  }, function(t5) {
    a2 = t5, o2(0, a2);
  }];
}
var Ch = class extends Et {
  constructor(t4) {
    super(), St(this, t4, Eh, Sh, s, { text: 21, selection: 0, focusOn: 2, width: 3, height: 4, flowsData: 1, minimap: 5, toolbar: 6 });
  }
};

// node_modules/@solothought/text2chart/dist_/bundle.css
var bundle_default = ".svelte-flow__zoom.svelte-4xkw84{width:100%;height:100%;position:absolute;top:0;left:0;z-index:4}\n.svelte-flow__pane.svelte-1esy7hx{position:absolute;top:0;left:0;width:100%;height:100%}\n.svelte-flow__viewport.svelte-1floaup{width:100%;height:100%;position:absolute;top:0;left:0}\n.svelte-flow__nodes.svelte-tf4uy4{width:100%;height:100%;position:absolute;left:0;top:0}\n.svelte-flow__selection.svelte-1iugwpu{position:absolute;top:0;left:0}\n.selection-wrapper.svelte-5pxri{position:absolute;top:0;left:0;z-index:7;pointer-events:all}\n.svelte-flow.svelte-12wlba6{width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default))}:root{--background-color-default:#fff;--background-pattern-color-default:#ddd;--minimap-mask-color-default:rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default:none;--minimap-mask-stroke-width-default:1;--controls-button-background-color-default:#fefefe;--controls-button-background-color-hover-default:#f4f4f4;--controls-button-color-default:inherit;--controls-button-color-hover-default:inherit;--controls-button-border-color-default:#eee}\n.svelte-flow__background.svelte-1r7pe8d{position:absolute;width:100%;height:100%;top:0;left:0}\n.paths-dropdown-container.svelte-1ofxkkf{position:relative;display:inline-block}.paths-dropdown.svelte-1ofxkkf{position:absolute;top:100%;background-color:white;border:1px solid #ccc;z-index:1000;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);min-width:400px}.path-item.svelte-1ofxkkf{padding:8px 16px;cursor:pointer}.path-item.svelte-1ofxkkf:hover{background-color:#f0f0f0}\n.analysis-dropdown-container.svelte-12s5nu2{position:relative;display:inline-block}.analysis-dropdown.svelte-12s5nu2{position:absolute;top:100%;background-color:white;border:1px solid #ccc;z-index:1000;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);min-width:400px}.analysis-table.svelte-12s5nu2{width:100%;border-collapse:collapse;margin:10px}\n.help-link.svelte-d7b5l7.svelte-d7b5l7{color:blue;text-decoration:underline;cursor:pointer}.popup-container.svelte-d7b5l7.svelte-d7b5l7{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;z-index:1000}.popup-box.svelte-d7b5l7.svelte-d7b5l7{background:white;padding:20px;border-radius:8px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);max-width:700px;width:100%}.help-table.svelte-d7b5l7.svelte-d7b5l7{border-collapse:collapse;margin:10px}.help-table.svelte-d7b5l7 td.svelte-d7b5l7{min-width:200px}\n.passive.svelte-19rdvv3.svelte-19rdvv3{opacity:50%}.st-toolbox{height:50px;display:flex;align-items:center;gap:0.5rem}.st-toolbox button{background-color:#FFFFFF;border-width:0;padding:5px;cursor:pointer}.st-toolbox button:hover{outline:1px dashed black}.st-flow-chart-tool.svelte-19rdvv3.svelte-19rdvv3{height:32px;padding:5px 10px;border:1px solid #ccc;border-radius:4px}.st-flow-chart-tool.svelte-19rdvv3.svelte-19rdvv3,.st-toolbox.svelte-19rdvv3 button.svelte-19rdvv3{vertical-align:middle}\n/* this gets exported as style.css and can be used for the default theming */\n/* these are the necessary styles for React/Svelte Flow, they get used by base.css and style.css */\n.svelte-flow {\n  direction: ltr;\n\n  --xy-edge-stroke-default: #b1b1b7;\n  --xy-edge-stroke-width-default: 1;\n  --xy-edge-stroke-selected-default: #555;\n\n  --xy-connectionline-stroke-default: #b1b1b7;\n  --xy-connectionline-stroke-width-default: 1;\n\n  --xy-attribution-background-color-default: rgba(255, 255, 255, 0.5);\n\n  --xy-minimap-background-color-default: #fff;\n  --xy-minimap-mask-background-color-default: rgb(240, 240, 240, 0.6);\n  --xy-minimap-mask-stroke-color-default: transparent;\n  --xy-minimap-mask-stroke-width-default: 1;\n  --xy-minimap-node-background-color-default: #e2e2e2;\n  --xy-minimap-node-stroke-color-default: transparent;\n  --xy-minimap-node-stroke-width-default: 2;\n\n  --xy-background-color-default: transparent;\n  --xy-background-pattern-dots-color-default: #91919a;\n  --xy-background-pattern-lines-color-default: #eee;\n  --xy-background-pattern-cross-color-default: #e2e2e2;\n  background-color: var(--xy-background-color, var(--xy-background-color-default));\n  --xy-node-color-default: inherit;\n  --xy-node-border-default: 1px solid #1a192b;\n  --xy-node-background-color-default: #fff;\n  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);\n  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, 0.08);\n  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #1a192b;\n  --xy-node-border-radius-default: 3px;\n\n  --xy-handle-background-color-default: #1a192b;\n  --xy-handle-border-color-default: #fff;\n\n  --xy-selection-background-color-default: rgba(0, 89, 220, 0.08);\n  --xy-selection-border-default: 1px dotted rgba(0, 89, 220, 0.8);\n\n  --xy-controls-button-background-color-default: #fefefe;\n  --xy-controls-button-background-color-hover-default: #f4f4f4;\n  --xy-controls-button-color-default: inherit;\n  --xy-controls-button-color-hover-default: inherit;\n  --xy-controls-button-border-color-default: #eee;\n  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);\n\n  --xy-edge-label-background-color-default: #ffffff;\n  --xy-edge-label-color-default: inherit;\n  --xy-resize-background-color-default: #3367d9;\n}\n.svelte-flow.dark {\n  --xy-edge-stroke-default: #3e3e3e;\n  --xy-edge-stroke-width-default: 1;\n  --xy-edge-stroke-selected-default: #727272;\n\n  --xy-connectionline-stroke-default: #b1b1b7;\n  --xy-connectionline-stroke-width-default: 1;\n\n  --xy-attribution-background-color-default: rgba(150, 150, 150, 0.25);\n\n  --xy-minimap-background-color-default: #141414;\n  --xy-minimap-mask-background-color-default: rgb(60, 60, 60, 0.6);\n  --xy-minimap-mask-stroke-color-default: transparent;\n  --xy-minimap-mask-stroke-width-default: 1;\n  --xy-minimap-node-background-color-default: #2b2b2b;\n  --xy-minimap-node-stroke-color-default: transparent;\n  --xy-minimap-node-stroke-width-default: 2;\n\n  --xy-background-color-default: #141414;\n  --xy-background-pattern-dots-color-default: #777;\n  --xy-background-pattern-lines-color-default: #777;\n  --xy-background-pattern-cross-color-default: #777;\n  --xy-node-color-default: #f8f8f8;\n  --xy-node-border-default: 1px solid #3c3c3c;\n  --xy-node-background-color-default: #1e1e1e;\n  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);\n  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, 0.08);\n  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #999;\n\n  --xy-handle-background-color-default: #bebebe;\n  --xy-handle-border-color-default: #1e1e1e;\n\n  --xy-selection-background-color-default: rgba(200, 200, 220, 0.08);\n  --xy-selection-border-default: 1px dotted rgba(200, 200, 220, 0.8);\n\n  --xy-controls-button-background-color-default: #2b2b2b;\n  --xy-controls-button-background-color-hover-default: #3e3e3e;\n  --xy-controls-button-color-default: #f8f8f8;\n  --xy-controls-button-color-hover-default: #fff;\n  --xy-controls-button-border-color-default: #5b5b5b;\n  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);\n\n  --xy-edge-label-background-color-default: #141414;\n  --xy-edge-label-color-default: #f8f8f8;\n}\n.svelte-flow__background {\n  background-color: var(--xy-background-color, var(--xy-background-color-props, var(--xy-background-color-default)));\n  pointer-events: none;\n  z-index: -1;\n}\n.svelte-flow__container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.svelte-flow__pane {\n  z-index: 1;\n}\n.svelte-flow__pane.draggable {\n    cursor: grab;\n  }\n.svelte-flow__pane.dragging {\n    cursor: grabbing;\n  }\n.svelte-flow__pane.selection {\n    cursor: pointer;\n  }\n.svelte-flow__viewport {\n  transform-origin: 0 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.svelte-flow__renderer {\n  z-index: 4;\n}\n.svelte-flow__selection {\n  z-index: 6;\n}\n.svelte-flow__nodesselection-rect:focus,\n.svelte-flow__nodesselection-rect:focus-visible {\n  outline: none;\n}\n.svelte-flow__edge-path {\n  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));\n  stroke-width: var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));\n  fill: none;\n}\n.svelte-flow__connection-path {\n  stroke: var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));\n  stroke-width: var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));\n  fill: none;\n}\n.svelte-flow .svelte-flow__edges {\n  position: absolute;\n}\n.svelte-flow .svelte-flow__edges svg {\n    overflow: visible;\n    position: absolute;\n    pointer-events: none;\n  }\n.svelte-flow__edge {\n  pointer-events: visibleStroke;\n}\n.svelte-flow__edge.selectable {\n    cursor: pointer;\n  }\n.svelte-flow__edge.animated path {\n    stroke-dasharray: 5;\n    animation: dashdraw 0.5s linear infinite;\n  }\n.svelte-flow__edge.animated path.svelte-flow__edge-interaction {\n    stroke-dasharray: none;\n    animation: none;\n  }\n.svelte-flow__edge.inactive {\n    pointer-events: none;\n  }\n.svelte-flow__edge.selected,\n  .svelte-flow__edge:focus,\n  .svelte-flow__edge:focus-visible {\n    outline: none;\n  }\n.svelte-flow__edge.selected .svelte-flow__edge-path,\n  .svelte-flow__edge.selectable:focus .svelte-flow__edge-path,\n  .svelte-flow__edge.selectable:focus-visible .svelte-flow__edge-path {\n    stroke: var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default));\n  }\n.svelte-flow__edge-textwrapper {\n    pointer-events: all;\n  }\n.svelte-flow__edge .svelte-flow__edge-text {\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n.svelte-flow__connection {\n  pointer-events: none;\n}\n.svelte-flow__connection .animated {\n    stroke-dasharray: 5;\n    animation: dashdraw 0.5s linear infinite;\n  }\nsvg.svelte-flow__connectionline {\n  z-index: 1001;\n  overflow: visible;\n  position: absolute;\n}\n.svelte-flow__nodes {\n  pointer-events: none;\n  transform-origin: 0 0;\n}\n.svelte-flow__node {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  pointer-events: all;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  cursor: default;\n}\n.svelte-flow__node.selectable {\n    cursor: pointer;\n  }\n.svelte-flow__node.draggable {\n    cursor: grab;\n    pointer-events: all;\n  }\n.svelte-flow__node.draggable.dragging {\n      cursor: grabbing;\n    }\n.svelte-flow__nodesselection {\n  z-index: 3;\n  transform-origin: left top;\n  pointer-events: none;\n}\n.svelte-flow__nodesselection-rect {\n    position: absolute;\n    pointer-events: all;\n    cursor: grab;\n  }\n.svelte-flow__handle {\n  position: absolute;\n  pointer-events: none;\n  min-width: 5px;\n  min-height: 5px;\n  width: 6px;\n  height: 6px;\n  background-color: var(--xy-handle-background-color, var(--xy-handle-background-color-default));\n  border: 1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));\n  border-radius: 100%;\n}\n.svelte-flow__handle.connectingfrom {\n    pointer-events: all;\n  }\n.svelte-flow__handle.connectionindicator {\n    pointer-events: all;\n    cursor: crosshair;\n  }\n.svelte-flow__handle-bottom {\n    top: auto;\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 50%);\n  }\n.svelte-flow__handle-top {\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n.svelte-flow__handle-left {\n    top: 50%;\n    left: 0;\n    transform: translate(-50%, -50%);\n  }\n.svelte-flow__handle-right {\n    top: 50%;\n    right: 0;\n    transform: translate(50%, -50%);\n  }\n.svelte-flow__edgeupdater {\n  cursor: move;\n  pointer-events: all;\n}\n.svelte-flow__panel {\n  position: absolute;\n  z-index: 5;\n  margin: 15px;\n}\n.svelte-flow__panel.top {\n    top: 0;\n  }\n.svelte-flow__panel.bottom {\n    bottom: 0;\n  }\n.svelte-flow__panel.left {\n    left: 0;\n  }\n.svelte-flow__panel.right {\n    right: 0;\n  }\n.svelte-flow__panel.center {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n.svelte-flow__attribution {\n  font-size: 10px;\n  background: var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));\n  padding: 2px 3px;\n  margin: 0;\n}\n.svelte-flow__attribution a {\n    text-decoration: none;\n    color: #999;\n  }\n@keyframes dashdraw {\n  from {\n    stroke-dashoffset: 10;\n  }\n}\n.svelte-flow__edgelabel-renderer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  left: 0;\n  top: 0;\n}\n.svelte-flow__viewport-portal {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.svelte-flow__minimap {\n  background: var(\n    --xy-minimap-background-color-props,\n    var(--xy-minimap-background-color, var(--xy-minimap-background-color-default))\n  );\n}\n.svelte-flow__minimap-svg {\n    display: block;\n  }\n.svelte-flow__minimap-mask {\n    fill: var(\n      --xy-minimap-mask-background-color-props,\n      var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default))\n    );\n    stroke: var(\n      --xy-minimap-mask-stroke-color-props,\n      var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default))\n    );\n    stroke-width: var(\n      --xy-minimap-mask-stroke-width-props,\n      var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default))\n    );\n  }\n.svelte-flow__minimap-node {\n    fill: var(\n      --xy-minimap-node-background-color-props,\n      var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default))\n    );\n    stroke: var(\n      --xy-minimap-node-stroke-color-props,\n      var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default))\n    );\n    stroke-width: var(\n      --xy-minimap-node-stroke-width-props,\n      var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default))\n    );\n  }\n.svelte-flow__background-pattern.dots {\n    fill: var(\n      --xy-background-pattern-color-props,\n      var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default))\n    );\n  }\n.svelte-flow__background-pattern.lines {\n    stroke: var(\n      --xy-background-pattern-color-props,\n      var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default))\n    );\n  }\n.svelte-flow__background-pattern.cross {\n    stroke: var(\n      --xy-background-pattern-color-props,\n      var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default))\n    );\n  }\n.svelte-flow__controls {\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default));\n}\n.svelte-flow__controls.horizontal {\n    flex-direction: row;\n  }\n.svelte-flow__controls-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 26px;\n    width: 26px;\n    padding: 4px;\n    border: none;\n    background: var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));\n    border-bottom: 1px solid\n      var(\n        --xy-controls-button-border-color-props,\n        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))\n      );\n    color: var(\n      --xy-controls-button-color-props,\n      var(--xy-controls-button-color, var(--xy-controls-button-color-default))\n    );\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n.svelte-flow__controls-button svg {\n      width: 100%;\n      max-width: 12px;\n      max-height: 12px;\n      fill: currentColor;\n    }\n.svelte-flow__edge.updating .svelte-flow__edge-path {\n      stroke: #777;\n    }\n.svelte-flow__edge-text {\n    font-size: 10px;\n  }\n.svelte-flow__node.selectable:focus,\n  .svelte-flow__node.selectable:focus-visible {\n    outline: none;\n  }\n.svelte-flow__node-input,\n.svelte-flow__node-default,\n.svelte-flow__node-output,\n.svelte-flow__node-group {\n  padding: 10px;\n  border-radius: var(--xy-node-border-radius, var(--xy-node-border-radius-default));\n  width: 150px;\n  font-size: 12px;\n  color: var(--xy-node-color, var(--xy-node-color-default));\n  text-align: center;\n  border: var(--xy-node-border, var(--xy-node-border-default));\n  background-color: var(--xy-node-background-color, var(--xy-node-background-color-default));\n}\n.svelte-flow__node-input.selectable:hover, .svelte-flow__node-default.selectable:hover, .svelte-flow__node-output.selectable:hover, .svelte-flow__node-group.selectable:hover {\n      box-shadow: var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default));\n    }\n.svelte-flow__node-input.selectable.selected,\n    .svelte-flow__node-input.selectable:focus,\n    .svelte-flow__node-input.selectable:focus-visible,\n    .svelte-flow__node-default.selectable.selected,\n    .svelte-flow__node-default.selectable:focus,\n    .svelte-flow__node-default.selectable:focus-visible,\n    .svelte-flow__node-output.selectable.selected,\n    .svelte-flow__node-output.selectable:focus,\n    .svelte-flow__node-output.selectable:focus-visible,\n    .svelte-flow__node-group.selectable.selected,\n    .svelte-flow__node-group.selectable:focus,\n    .svelte-flow__node-group.selectable:focus-visible {\n      box-shadow: var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default));\n    }\n.svelte-flow__node-group {\n  background-color: var(--xy-node-group-background-color, var(--xy-node-group-background-color-default));\n}\n.svelte-flow__nodesselection-rect,\n.svelte-flow__selection {\n  background: var(--xy-selection-background-color, var(--xy-selection-background-color-default));\n  border: var(--xy-selection-border, var(--xy-selection-border-default));\n}\n.svelte-flow__nodesselection-rect:focus,\n  .svelte-flow__nodesselection-rect:focus-visible,\n  .svelte-flow__selection:focus,\n  .svelte-flow__selection:focus-visible {\n    outline: none;\n  }\n.svelte-flow__controls-button:hover {\n      background: var(\n        --xy-controls-button-background-color-hover-props,\n        var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default))\n      );\n      color: var(\n        --xy-controls-button-color-hover-props,\n        var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default))\n      );\n    }\n.svelte-flow__controls-button:disabled {\n      pointer-events: none;\n    }\n.svelte-flow__controls-button:disabled svg {\n        fill-opacity: 0.4;\n      }\n.svelte-flow__controls-button:last-child {\n    border-bottom: none;\n  }\n.svelte-flow__resize-control {\n  position: absolute;\n}\n.svelte-flow__resize-control.left,\n.svelte-flow__resize-control.right {\n  cursor: ew-resize;\n}\n.svelte-flow__resize-control.top,\n.svelte-flow__resize-control.bottom {\n  cursor: ns-resize;\n}\n.svelte-flow__resize-control.top.left,\n.svelte-flow__resize-control.bottom.right {\n  cursor: nwse-resize;\n}\n.svelte-flow__resize-control.bottom.left,\n.svelte-flow__resize-control.top.right {\n  cursor: nesw-resize;\n}\n/* handle styles */\n.svelte-flow__resize-control.handle {\n  width: 4px;\n  height: 4px;\n  border: 1px solid #fff;\n  border-radius: 1px;\n  background-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));\n  transform: translate(-50%, -50%);\n}\n.svelte-flow__resize-control.handle.left {\n  left: 0;\n  top: 50%;\n}\n.svelte-flow__resize-control.handle.right {\n  left: 100%;\n  top: 50%;\n}\n.svelte-flow__resize-control.handle.top {\n  left: 50%;\n  top: 0;\n}\n.svelte-flow__resize-control.handle.bottom {\n  left: 50%;\n  top: 100%;\n}\n.svelte-flow__resize-control.handle.top.left {\n  left: 0;\n}\n.svelte-flow__resize-control.handle.bottom.left {\n  left: 0;\n}\n.svelte-flow__resize-control.handle.top.right {\n  left: 100%;\n}\n.svelte-flow__resize-control.handle.bottom.right {\n  left: 100%;\n}\n/* line styles */\n.svelte-flow__resize-control.line {\n  border-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));\n  border-width: 0;\n  border-style: solid;\n}\n.svelte-flow__resize-control.line.left,\n.svelte-flow__resize-control.line.right {\n  width: 1px;\n  transform: translate(-50%, 0);\n  top: 0;\n  height: 100%;\n}\n.svelte-flow__resize-control.line.left {\n  left: 0;\n  border-left-width: 1px;\n}\n.svelte-flow__resize-control.line.right {\n  left: 100%;\n  border-right-width: 1px;\n}\n.svelte-flow__resize-control.line.top,\n.svelte-flow__resize-control.line.bottom {\n  height: 1px;\n  transform: translate(0, -50%);\n  left: 0;\n  width: 100%;\n}\n.svelte-flow__resize-control.line.top {\n  top: 0;\n  border-top-width: 1px;\n}\n.svelte-flow__resize-control.line.bottom {\n  border-bottom-width: 1px;\n  top: 100%;\n}\n.svelte-flow__edge-label {\n  text-align: center;\n  position: absolute;\n  padding: 2px;\n  font-size: 10px;\n  cursor: pointer;\n  color: var(--xy-edge-label-color, var(--xy-edge-label-color-default));\n  background: var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default));\n}\n.svelte-flow__nodes {\n  z-index: 0;\n}\n.svelte-flow__edgelabel-renderer {\n  z-index: 0;\n}\n\n.msgWrapper.svelte-kj30v6{display:inline-block;width:100%;height:100%}.hndl{visibility:hidden}.clickable.svelte-kj30v6{cursor:pointer}.endStep.svelte-kj30v6{padding:5px;border-radius:5px;background-color:black;color:white;border:1px solid #555}.step.svelte-kj30v6{padding:5px;border-radius:5px;background:white;color:inherit;border:1px solid #555}.step-container.svelte-kj30v6{position:relative;text-align:center}.hovered.svelte-kj30v6{border:2px solid #FF4000;background-color:lightgrey;color:inherit}.step-icon.svelte-kj30v6{width:25px;height:25px;top:-35px;position:absolute}.expand.svelte-kj30v6{color:black;font-size:1.5rem;top:-15px;right:-20px;position:absolute}\n";

// main.ts
var DEFAULT_SETTINGS = {
  defaultWidth: "800px",
  defaultHeight: "600px"
};
var StFlowPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.fullscreenChart = null;
  }
  // Track fullscreen instance
  onload() {
    return __async(this, null, function* () {
      console.log("Loading StFlow Plugin");
      console.log(bundle_default.substring(0, 50));
      yield this.loadSettings();
      this.addStyle();
      this.registerMarkdownCodeBlockProcessor("stflow", this.processStFlow.bind(this));
      this.addSettingTab(new StFlowSettingTab(this.app, this));
    });
  }
  addStyle() {
    console.log("Adding style for stflow");
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(bundle_default + `
            .stflow-container {
                position: relative;
                display: inline-block;
            }
            .stflow-fullscreen-icon {
                position: absolute;
                top: 0px;
                right: 40px;
                cursor: pointer;
                z-index: 10;
                font-size: 1.5rem;
                color: var(--text-muted);
            }
            .stflow-fullscreen-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
                z-index: 1000;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .stflow-fullscreen-content {
                position: relative;
                width: 90vw;
                height: 90vh;
                background: white;
                overflow: auto; /* Scroll if needed */
            }
            .stflow-fullscreen-close {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-muted);
            }
            .svelte-flow__attribution{
                display: none;
            }
        `));
    document.head.appendChild(style);
  }
  processStFlow(source, el2, ctx) {
    return __async(this, null, function* () {
      try {
        let width = this.settings.defaultWidth;
        let height = this.settings.defaultHeight;
        let flowchartText = source;
        const lines = source.split("\n");
        let metadataEnd = 0;
        for (let i2 = 0; i2 < lines.length; i2++) {
          const line = lines[i2].trim();
          if (!line.startsWith("#")) {
            metadataEnd = i2;
            break;
          }
          const parts = line.substring(1).split(";").map((part) => part.trim());
          for (const part of parts) {
            if (part.startsWith("width:")) {
              width = part.split(":")[1].trim();
            } else if (part.startsWith("height:")) {
              height = part.split(":")[1].trim();
            } else if (part.match(/^\s*width\s*:/)) {
              width = part.split(":")[1].trim();
            } else if (part.match(/^\s*height\s*:/)) {
              height = part.split(":")[1].trim();
            }
          }
          if (i2 === lines.length - 1) metadataEnd = lines.length;
        }
        flowchartText = lines.slice(metadataEnd).join("\n");
        const container = el2.createEl("div", { cls: "stflow-container" });
        const chartContainer = container.createEl("div", { cls: "stflow-chart" });
        const chart = new Ch({
          target: chartContainer,
          props: {
            text: flowchartText,
            width,
            height,
            minimap: false,
            toolbar: false
          }
        });
        const fullscreenIcon = el2.createEl("span", {
          cls: "stflow-fullscreen-icon",
          text: "\u26F6"
        });
        fullscreenIcon.addEventListener("click", () => {
          if (!this.fullscreenChart) {
            const overlay = document.body.appendChild(document.createElement("div"));
            overlay.className = "stflow-fullscreen-overlay";
            const content = overlay.appendChild(document.createElement("div"));
            content.className = "stflow-fullscreen-content";
            this.fullscreenChart = new Ch({
              target: content,
              props: {
                text: flowchartText,
                width: "90vw",
                height: "90vh"
              }
            });
            const closeButton = content.appendChild(document.createElement("span"));
            closeButton.className = "stflow-fullscreen-close";
            closeButton.textContent = "\u2716";
            closeButton.addEventListener("click", () => {
              var _a2;
              overlay.remove();
              (_a2 = this.fullscreenChart) == null ? void 0 : _a2.$destroy();
              this.fullscreenChart = null;
              fullscreenIcon.textContent = "\u26F6";
            });
            fullscreenIcon.textContent = "\u{1F5D5}";
          }
        });
      } catch (error) {
        const errorEl = el2.createEl("div", { cls: "stflow-error" });
        errorEl.textContent = `Error rendering flowchart: ${error.message}`;
        errorEl.style.color = "red";
        errorEl.style.fontFamily = "monospace";
      }
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
  onunload() {
    console.log("Unloading StFlow Plugin");
    if (this.fullscreenChart) {
      this.fullscreenChart.$destroy();
      this.fullscreenChart = null;
    }
  }
};
var StFlowSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Default Flowchart Width").setDesc("Set the default width (e.g., 800px, 100%)").addText((text) => text.setPlaceholder("800px").setValue(this.plugin.settings.defaultWidth).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.defaultWidth = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Default Flowchart Height").setDesc("Set the default height (e.g., 600px, 100%)").addText((text) => text.setPlaceholder("600px").setValue(this.plugin.settings.defaultHeight).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.defaultHeight = value;
      yield this.plugin.saveSettings();
    })));
  }
};
