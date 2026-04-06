(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('@charset "UTF-8";.dialog-overlay{position:fixed;inset:0;z-index:1000;background:#0006;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;animation:overlayIn .15s ease}@keyframes overlayIn{0%{opacity:0}to{opacity:1}}.dialog-modal{background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:calc(var(--rad-radius) + 4px);box-shadow:0 16px 70px -12px #00000040;width:440px;max-width:calc(100vw - 32px);max-height:calc(100vh - 64px);overflow-y:auto;font-family:var(--rad-font);animation:modalIn .2s cubic-bezier(.16,1,.3,1)}@keyframes modalIn{0%{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}.dialog-header{display:flex;justify-content:space-between;align-items:flex-start;padding:24px 24px 0}.dialog-title{margin:0;font-weight:600;font-size:16px;color:var(--rad-text);letter-spacing:-.02em;line-height:1.4}.dialog-description{margin:4px 0 0;font-size:13px;color:var(--rad-text-muted);line-height:1.4}.dialog-close{background:none;border:none;cursor:pointer;padding:6px;border-radius:var(--rad-radius-sm);color:var(--rad-text-muted);transition:all var(--rad-transition);flex-shrink:0}.dialog-close:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.dialog-body{padding:20px 24px;display:flex;flex-direction:column;gap:16px}.dialog-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:end}.dialog-footer{display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--rad-border-color);background:var(--rad-bg-muted);border-radius:0 0 calc(var(--rad-radius) + 4px) calc(var(--rad-radius) + 4px)}.btn-cancel,.btn-confirm{padding:8px 16px;border-radius:var(--rad-radius-sm);font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition)}.btn-cancel:active,.btn-confirm:active{transform:scale(.98)}.btn-cancel:focus-visible,.btn-confirm:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-cancel{background:var(--rad-bg);color:var(--rad-text-secondary);border:1px solid var(--rad-border-color);box-shadow:var(--rad-shadow-sm)}.btn-cancel:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.btn-confirm{background:var(--rad-text);color:#fff;border:none;box-shadow:var(--rad-shadow-sm)}.btn-confirm:hover{opacity:.9}.control{display:flex;flex-direction:column;margin:0}.control label{display:block;font-size:12px;margin-bottom:6px;font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.control input,.control select,.control textarea{width:100%;height:36px;padding:0 10px;border-radius:var(--rad-radius-sm);box-sizing:border-box;border:1px solid var(--rad-border-color);font-size:13px;font-family:inherit;transition:all var(--rad-transition);background:var(--rad-bg);color:var(--rad-text)}.control input::placeholder,.control select::placeholder,.control textarea::placeholder{color:var(--rad-text-muted)}.control input:hover,.control select:hover,.control textarea:hover{border-color:#c5cad3}.control input:focus,.control select:focus,.control textarea:focus{outline:none;border-color:var(--rad-primary);box-shadow:0 0 0 3px var(--rad-primary-ring)}.control textarea{height:auto;min-height:60px;padding:8px 10px;resize:vertical;line-height:1.5}.control select{cursor:pointer}.control-check{display:flex;align-items:center;margin:0;gap:8px;height:36px}.control-check label{font-size:13px;font-weight:500;color:var(--rad-text);margin:0;cursor:pointer;-webkit-user-select:none;user-select:none}.control-check input{width:16px;height:16px;cursor:pointer;accent-color:var(--rad-primary);border-radius:4px;flex-shrink:0}:root{--rad-font: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-border: 1px;--rad-border-color: hsl(220, 13%, 91%);--rad-primary: hsl(221, 83%, 53%);--rad-primary-hover: hsl(221, 83%, 46%);--rad-primary-ring: hsla(221, 83%, 53%, .15);--rad-danger: hsl(0, 84%, 60%);--rad-danger-hover: hsl(0, 84%, 53%);--rad-danger-ring: hsla(0, 84%, 60%, .15);--rad-success: hsl(142, 71%, 45%);--rad-success-hover: hsl(142, 71%, 38%);--rad-success-ring: hsla(142, 71%, 45%, .15);--rad-bg: hsl(0, 0%, 100%);--rad-bg-muted: hsl(220, 14%, 96%);--rad-bg-hover: hsl(220, 14%, 96%);--rad-text: hsl(224, 71%, 4%);--rad-text-muted: hsl(220, 9%, 46%);--rad-text-secondary: hsl(220, 9%, 36%);--rad-radius: 8px;--rad-radius-sm: 6px;--rad-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--rad-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);--rad-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--rad-transition: .15s cubic-bezier(.4, 0, .2, 1)}.insertion{display:flex;width:100%;font-size:13px;font-family:var(--rad-font);border-bottom:var(--rad-border) solid var(--rad-border-color);transition:background var(--rad-transition);align-items:stretch}.insertion:hover{background:var(--rad-bg-hover)}.flex-col{display:flex;flex-direction:column;justify-content:center}.description{border-left:var(--rad-border) solid var(--rad-border-color)!important;border-right:var(--rad-border) solid var(--rad-border-color)!important;padding:8px 16px;flex:1;min-width:150px;min-height:36px;box-sizing:border-box}.border-bottom{border-bottom:var(--rad-border) solid var(--rad-border-color)!important}.border-top{border-top:2px solid var(--rad-border-color)!important}.date,.transaction-title{text-align:center;padding:6px 0;font-size:13px}.date{font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.transaction-content{flex:1;color:var(--rad-text-muted);line-height:1.5}.debit,.credit{padding:8px 12px;border-left:var(--rad-border) solid var(--rad-border-color)!important;text-align:center;font-weight:500;color:var(--rad-text);min-width:140px;max-width:160px;min-height:36px;box-sizing:border-box;flex-shrink:0}.debit div,.credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-debit,.amount-credit{padding:8px 12px;border-right:var(--rad-border) solid var(--rad-border-color)!important;text-align:right;font-weight:500;color:var(--rad-text);font-variant-numeric:tabular-nums;font-family:var(--rad-font-mono);min-width:120px;max-width:180px;min-height:36px;box-sizing:border-box;flex-shrink:0}.amount-debit div,.amount-credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}html,body,#root{height:100%}#root{overflow-y:auto;padding:32px;box-sizing:border-box;background:var(--rad-bg-muted)}.btn-export{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 16px;height:36px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;font-weight:500;font-size:13px;cursor:pointer;box-shadow:var(--rad-shadow-sm);transition:all var(--rad-transition);letter-spacing:-.01em}.btn-export:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-export:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-export:active{transform:scale(.98)}.btn-save-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-save-accounting:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-save-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-add-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-add-accounting:hover{opacity:.9;box-shadow:var(--rad-shadow)}.btn-add-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-text)}.btn-add-accounting:active{transform:scale(.96)}.export{display:inline-flex;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);overflow:hidden;background:var(--rad-bg);box-shadow:var(--rad-shadow-sm)}.export button{background:var(--rad-bg);border:none;cursor:pointer;padding:8px 14px;transition:all var(--rad-transition);font-weight:500;font-size:12px;color:var(--rad-text-muted);border-right:1px solid var(--rad-border-color)}.export button:last-child{border-right:none}.export button:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.export button:active,.export button#active{background:var(--rad-text);color:#fff}.global-action{display:flex;gap:6px;align-items:center}.global-action button{padding:8px 12px;cursor:pointer;font-size:12px;font-weight:500;border-radius:var(--rad-radius-sm);transition:all var(--rad-transition);border:1px solid var(--rad-border-color);background:var(--rad-bg);color:var(--rad-text-secondary);box-shadow:var(--rad-shadow-sm)}.global-action button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text);box-shadow:var(--rad-shadow)}.global-action button:active:not(:disabled){transform:scale(.98)}.global-action button:disabled{opacity:.5;cursor:not-allowed}.global-action .reset{border-color:var(--rad-danger);color:var(--rad-danger);background:var(--rad-bg)}.global-action .reset:hover:not(:disabled){background:var(--rad-danger-ring);color:var(--rad-danger-hover)}.global-action .sample.doer{background:var(--rad-text);border-color:var(--rad-text);color:#fff;padding:8px 10px}.global-action .sample.doer:hover:not(:disabled){opacity:.9;background:var(--rad-text);color:#fff}.edit-action button{transition:all var(--rad-transition);border-radius:var(--rad-radius-sm)}.edit-action button:hover{background:var(--rad-bg-muted)!important;opacity:1!important}')),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsxs as d, jsx as i, Fragment as y } from "react/jsx-runtime";
import ot, { useState as z, useCallback as P, useContext as M, useEffect as Y, useMemo as wt, useRef as vt, createContext as St } from "react";
const v = "var(--rad-border) solid var(--rad-border-color)", Ct = (t) => {
  let { date: e, index: n, columnHeader: r, columnHeaderColor: a, columnHeaderBgColor: o } = t;
  const l = n === 0 && r, c = `${e.split("-")[2]}/${e.split("-")[1]}/${e.split("-")[0]}`, { width: s, ...u } = t.account || {}, { width: h, ...m } = t.amount || {};
  return /* @__PURE__ */ d("div", { className: "insertion", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...u,
          borderTop: l ? v : "",
          borderBottom: l ? v : "",
          background: l ? o : ""
        },
        children: l ? /* @__PURE__ */ i("div", { className: "date", style: { color: a }, children: "Debit" }) : /* @__PURE__ */ i("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...u,
          borderTop: l ? v : "",
          borderBottom: l ? v : "",
          background: l ? o : ""
        },
        children: l ? /* @__PURE__ */ i("div", { className: "date", style: { color: a }, children: "Credit" }) : /* @__PURE__ */ i("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "",
        style: {
          flex: 1,
          minWidth: 150,
          borderTop: l ? v : "",
          borderBottom: l ? v : "",
          background: l ? o : ""
        },
        children: l ? /* @__PURE__ */ i("div", { className: "date", style: { color: a }, children: c }) : /* @__PURE__ */ i(
          "div",
          {
            className: `flex-col description ${n === 0 ? "border-top" : ""}`,
            style: {
              borderTopLeftRadius: n === 0 && !r ? 6 : 0,
              borderTopRightRadius: n === 0 && !r ? 6 : 0,
              borderBottom: "none"
            },
            children: /* @__PURE__ */ i("div", { className: "date", children: c })
          }
        )
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "amount-debit flex-col",
        style: {
          ...m,
          borderTop: l ? v : "",
          borderBottom: l ? v : "",
          background: l ? o : ""
        },
        children: l ? /* @__PURE__ */ i("div", { className: "date", style: { color: a }, children: "Debit" }) : /* @__PURE__ */ i("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...m,
          borderTop: l ? v : "",
          borderBottom: l ? v : "",
          background: l ? o : ""
        },
        children: l ? /* @__PURE__ */ i("div", { className: "date", style: { color: a }, children: "Credit" }) : /* @__PURE__ */ i("div", { className: "date", children: " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ i("div", { style: { width: 32, flexShrink: 0 } })
  ] });
};
let W = null;
const Et = async () => (W || (W = (await import("./pdfmake-CaUiNrns.mjs").then((e) => e.p)).default), W), kt = async (t) => {
  (await Et()).createPdf({
    pageMargins: 0,
    content: [
      {
        image: t,
        width: 595
      }
    ]
  }).download();
};
class I {
  static currency(e, n = "XAF", r = "de-DE") {
    return new Intl.NumberFormat(r, {
      style: "currency",
      currency: n
    }).format(e) || "0,00";
  }
  static number(e) {
    return new Intl.NumberFormat("en-IN", { minimumIntegerDigits: 2 }).format(
      e || 0
    );
  }
  static date(e) {
    return new Date(e).toLocaleDateString("fr-FR", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  static extractDoc(e) {
    kt(e);
  }
}
const N = "var(--rad-border) solid var(--rad-border-color)", Dt = (t) => {
  const e = (t.data || []).filter((u) => u.isDebit).reduce((u, h) => u + h.amount, 0), n = (t.data || []).filter((u) => !u.isDebit).reduce((u, h) => u + h.amount, 0), r = t.data?.[0]?.currency || "USD", a = t.data?.[0]?.local, { width: o, ...l } = t.account || {}, { width: c, ...s } = t.amount || {};
  return /* @__PURE__ */ d("div", { className: "insertion", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...l,
          borderBottom: t.columnHeader ? N : ""
        },
        children: /* @__PURE__ */ i("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...l,
          borderBottom: t.columnHeader ? N : ""
        },
        children: /* @__PURE__ */ i("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "flex-col description border-bottom",
        style: { padding: 0 },
        children: /* @__PURE__ */ i(
          "div",
          {
            className: "transaction-title",
            style: {
              ...t.footer,
              fontSize: 11,
              marginTop: 7,
              textTransform: "uppercase"
            },
            children: "transactions entries"
          }
        )
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "amount-debit flex-col",
        style: {
          ...s,
          borderBottom: t.columnHeader ? N : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ i("div", { className: "transaction-title", children: e > 0 ? I.currency(e, r, a) : " " })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...s,
          borderBottom: t.columnHeader ? N : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ i("div", { className: "transaction-title", children: n > 0 ? I.currency(n, r, a) : " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ i("div", { style: { width: 32, flexShrink: 0 } })
  ] });
}, B = ot.createContext(void 0), Rt = ({ children: t }) => {
  const [e, n] = z({
    data: [],
    doIndex: 0,
    openSb: !1,
    messageSb: "",
    history: [[]],
    severitySb: "success",
    editingTransaction: void 0,
    searchTerm: "",
    dateFilter: {}
  }), r = P(() => {
    n((c) => c.doIndex > 0 ? {
      ...c,
      data: c.history[c.doIndex - 1],
      doIndex: c.doIndex - 1
    } : c);
  }, []), a = P(() => {
    n((c) => {
      let s = c.doIndex + 1;
      return s < c.history.length ? {
        ...c,
        data: c.history[s],
        doIndex: s
      } : c;
    });
  }, []), o = P((c) => {
    n((s) => {
      if ("data" in c && !("doIndex" in c)) {
        const u = c.data, m = [...[...s.history].slice(0, s.doIndex + 1), u];
        return {
          ...s,
          data: u,
          history: m,
          doIndex: m.length - 1
        };
      }
      return { ...s, ...c };
    });
  }, []), l = {
    state: e,
    undo: r,
    redo: a,
    updateState: o
  };
  return /* @__PURE__ */ i(B.Provider, { value: l, children: t });
}, b = { size: 16, strokeWidth: 2 }, w = (t, e) => /* @__PURE__ */ i(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t.size,
    height: t.size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: t.strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t.className,
    style: t.style,
    "aria-hidden": "true",
    children: e
  }
), Ft = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("polyline", { points: "1 4 1 10 7 10" }),
    /* @__PURE__ */ i("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
  ] }));
}, Tt = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("polyline", { points: "23 4 23 10 17 10" }),
    /* @__PURE__ */ i("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })
  ] }));
}, Pt = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ i("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] }));
}, It = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ i("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
  ] }));
}, Bt = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ i("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }));
}, Lt = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ i("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] }));
}, At = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ i(y, { children: /* @__PURE__ */ i("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }) }));
}, $t = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ i("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ] }));
}, Nt = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }));
}, K = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("circle", { cx: "10", cy: "13", r: "2" }),
    /* @__PURE__ */ i("path", { d: "m20 17-1.1-1.1a2 2 0 0 0-2.81 0L10 22" })
  ] }));
}, Ut = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ i("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
  ] }));
}, Ht = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("polyline", { points: "3 6 5 6 21 6" }),
    /* @__PURE__ */ i("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    /* @__PURE__ */ i("line", { x1: "14", y1: "11", x2: "14", y2: "17" })
  ] }));
}, zt = (t = {}) => {
  const e = { ...b, ...t };
  return w(e, /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    /* @__PURE__ */ i("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    /* @__PURE__ */ i("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ] }));
}, Mt = [
  [
    "US dollar (USD)",
    "USD"
  ],
  [
    "Euro (EUR)",
    "EUR"
  ],
  [
    "Japanese yen (JPY)",
    "JPY"
  ],
  [
    "Pound sterling (GBP)",
    "GBP"
  ],
  [
    "Swiss franc (CHF)",
    "CHF"
  ],
  [
    "Cameroonian franc (XAF)",
    "XAF"
  ]
];
let Vt = 0;
const lt = () => `txn_${Date.now()}_${++Vt}`, Q = {
  open: !1,
  isDebit: !1,
  amount: "",
  account: "",
  text: "",
  date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  currency: "USD"
}, Wt = () => {
  const t = M(B), [e, n] = z(Q);
  Y(() => {
    const c = t?.state.editingTransaction;
    c && n({
      open: !0,
      isDebit: c.isDebit ?? !1,
      amount: c.amount,
      account: c.account,
      text: c.text,
      date: c.date,
      currency: c.currency || "USD"
    });
  }, [t?.state.editingTransaction]), Y(() => {
    if (!e.open) return;
    const c = (s) => {
      s.key === "Escape" && a();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [e.open]);
  const r = P(() => {
    n((c) => ({ ...c, open: !0 }));
  }, []), a = P(() => {
    n(Q), t?.state.editingTransaction && t.updateState({ editingTransaction: void 0 });
  }, [t]);
  if (!t) return null;
  const o = () => {
    const c = Number(e.amount), s = e.account.trim(), u = e.text.trim(), h = e.date;
    if (!c || c <= 0 || !s || !u || !h || isNaN(new Date(h).getTime())) return;
    const m = [...t.state.data || []], D = t.state.editingTransaction;
    if (D) {
      const T = m.findIndex((f) => f.id === D.id);
      T !== -1 && (m[T] = { ...m[T], amount: c, account: s, isDebit: e.isDebit, text: u, date: h, currency: e.currency }), t.updateState({ data: m, editingTransaction: void 0 });
    } else
      m.push({ id: lt(), amount: c, account: s, isDebit: e.isDebit, text: u, date: h, currency: e.currency }), t.updateState({ data: m });
    a();
  }, l = !!t.state.editingTransaction;
  return /* @__PURE__ */ d(y, { children: [
    /* @__PURE__ */ i("button", { onClick: r, className: "btn-add-accounting", title: "Add transaction", children: /* @__PURE__ */ i(Bt, { size: 20 }) }),
    e.open && /* @__PURE__ */ i("div", { className: "dialog-overlay", onClick: a, children: /* @__PURE__ */ d("div", { className: "dialog-modal", onClick: (c) => c.stopPropagation(), children: [
      /* @__PURE__ */ d("div", { className: "dialog-header", children: [
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ i("h3", { className: "dialog-title", children: l ? "Edit Transaction" : "Add Transaction" }),
          /* @__PURE__ */ i("p", { className: "dialog-description", children: l ? "Modify the transaction details." : "Add a new entry to your accounting diary." })
        ] }),
        /* @__PURE__ */ i("button", { onClick: a, className: "dialog-close", children: /* @__PURE__ */ i(Lt, { size: 16 }) })
      ] }),
      /* @__PURE__ */ d("div", { className: "dialog-body", children: [
        /* @__PURE__ */ d("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ i("label", { htmlFor: "rad-amount", children: "Amount" }),
            /* @__PURE__ */ i(
              "input",
              {
                id: "rad-amount",
                placeholder: "0.00",
                type: "number",
                step: "0.01",
                min: "0",
                value: e.amount || "",
                onChange: (c) => n((s) => ({ ...s, amount: c.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ i("label", { htmlFor: "rad-currency", children: "Currency" }),
            /* @__PURE__ */ i(
              "select",
              {
                id: "rad-currency",
                value: e.currency,
                onChange: (c) => n((s) => ({ ...s, currency: c.target.value })),
                children: Mt.map((c) => /* @__PURE__ */ i("option", { value: c[1], children: c[0] }, c[1]))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ i("label", { htmlFor: "rad-account", children: "Account" }),
            /* @__PURE__ */ i(
              "input",
              {
                autoFocus: !0,
                id: "rad-account",
                placeholder: "e.g., Cash, Bank, Rent",
                value: e.account,
                onChange: (c) => n((s) => ({ ...s, account: c.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ i("label", { htmlFor: "rad-date", children: "Date" }),
            /* @__PURE__ */ i(
              "input",
              {
                id: "rad-date",
                type: "date",
                value: e.date,
                onChange: (c) => n((s) => ({ ...s, date: c.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "control-check", children: [
          /* @__PURE__ */ i(
            "input",
            {
              id: "rad-isDebit",
              type: "checkbox",
              checked: e.isDebit,
              onChange: (c) => n((s) => ({ ...s, isDebit: c.target.checked }))
            }
          ),
          /* @__PURE__ */ i("label", { htmlFor: "rad-isDebit", children: "Debit transaction" })
        ] }),
        /* @__PURE__ */ d("div", { className: "control", children: [
          /* @__PURE__ */ i("label", { htmlFor: "rad-description", children: "Description" }),
          /* @__PURE__ */ i(
            "textarea",
            {
              id: "rad-description",
              rows: 2,
              placeholder: "Describe the transaction...",
              value: e.text,
              onChange: (c) => n((s) => ({ ...s, text: c.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "dialog-footer", children: [
        /* @__PURE__ */ i("button", { onClick: a, className: "btn-cancel", children: "Cancel" }),
        /* @__PURE__ */ i("button", { onClick: o, className: "btn-confirm", children: l ? "Update" : "Save" })
      ] })
    ] }) })
  ] });
};
function _t(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), a = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(a), e && (r.href = e), a.href = t, a.href;
}
const Ot = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function C(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
let R = null;
function st(t = {}) {
  return R || (t.includeStyleProperties ? (R = t.includeStyleProperties, R) : (R = C(window.getComputedStyle(document.documentElement)), R));
}
function U(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function jt(t) {
  const e = U(t, "border-left-width"), n = U(t, "border-right-width");
  return t.clientWidth + e + n;
}
function qt(t) {
  const e = U(t, "border-top-width"), n = U(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function q(t, e = {}) {
  const n = e.width || jt(t), r = e.height || qt(t);
  return { width: n, height: r };
}
function Gt() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const p = 16384;
function Jt(t) {
  (t.width > p || t.height > p) && (t.width > p && t.height > p ? t.width > t.height ? (t.height *= p / t.width, t.width = p) : (t.width *= p / t.height, t.height = p) : t.width > p ? (t.height *= p / t.width, t.width = p) : (t.width *= p / t.height, t.height = p));
}
function Xt(t, e = {}) {
  return t.toBlob ? new Promise((n) => {
    t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1);
  }) : new Promise((n) => {
    const r = window.atob(t.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1]), a = r.length, o = new Uint8Array(a);
    for (let l = 0; l < a; l += 1)
      o[l] = r.charCodeAt(l);
    n(new Blob([o], {
      type: e.type ? e.type : "image/png"
    }));
  });
}
function H(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => e(r));
      });
    }, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function Yt(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Kt(t, e, n) {
  const r = "http://www.w3.org/2000/svg", a = document.createElementNS(r, "svg"), o = document.createElementNS(r, "foreignObject");
  return a.setAttribute("width", `${e}`), a.setAttribute("height", `${n}`), a.setAttribute("viewBox", `0 0 ${e} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), a.appendChild(o), o.appendChild(t), Yt(a);
}
const x = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || x(n, e);
};
function Qt(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Zt(t, e) {
  return st(e).map((n) => {
    const r = t.getPropertyValue(n), a = t.getPropertyPriority(n);
    return `${n}: ${r}${a ? " !important" : ""};`;
  }).join(" ");
}
function te(t, e, n, r) {
  const a = `.${t}:${e}`, o = n.cssText ? Qt(n) : Zt(n, r);
  return document.createTextNode(`${a}{${o}}`);
}
function Z(t, e, n, r) {
  const a = window.getComputedStyle(t, n), o = a.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const l = Ot();
  try {
    e.className = `${e.className} ${l}`;
  } catch {
    return;
  }
  const c = document.createElement("style");
  c.appendChild(te(l, n, a, r)), e.appendChild(c);
}
function ee(t, e, n) {
  Z(t, e, ":before", n), Z(t, e, ":after", n);
}
const tt = "application/font-woff", et = "image/jpeg", ne = {
  woff: tt,
  woff2: tt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: et,
  jpeg: et,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function re(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function G(t) {
  const e = re(t).toLowerCase();
  return ne[e] || "";
}
function ae(t) {
  return t.split(/,/)[1];
}
function j(t) {
  return t.search(/^(data:)/) !== -1;
}
function ie(t, e) {
  return `data:${e};base64,${t}`;
}
async function dt(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const a = await r.blob();
  return new Promise((o, l) => {
    const c = new FileReader();
    c.onerror = l, c.onloadend = () => {
      try {
        o(n({ res: r, result: c.result }));
      } catch (s) {
        l(s);
      }
    }, c.readAsDataURL(a);
  });
}
const _ = {};
function ce(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function J(t, e, n) {
  const r = ce(t, e, n.includeQueryParams);
  if (_[r] != null)
    return _[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let a;
  try {
    const o = await dt(t, n.fetchRequestInit, ({ res: l, result: c }) => (e || (e = l.headers.get("Content-Type") || ""), ae(c)));
    a = ie(o, e);
  } catch (o) {
    a = n.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${t}`;
    o && (l = typeof o == "string" ? o : o.message), l && console.warn(l);
  }
  return _[r] = a, a;
}
async function oe(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : H(e);
}
async function le(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), l = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, l?.drawImage(t, 0, 0, o.width, o.height);
    const c = o.toDataURL();
    return H(c);
  }
  const n = t.poster, r = G(n), a = await J(n, r, e);
  return H(a);
}
async function se(t, e) {
  var n;
  try {
    if (!((n = t?.contentDocument) === null || n === void 0) && n.body)
      return await V(t.contentDocument.body, e, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function de(t, e) {
  return x(t, HTMLCanvasElement) ? oe(t) : x(t, HTMLVideoElement) ? le(t, e) : x(t, HTMLIFrameElement) ? se(t, e) : t.cloneNode(ut(t));
}
const ue = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT", ut = (t) => t.tagName != null && t.tagName.toUpperCase() === "SVG";
async function he(t, e, n) {
  var r, a;
  if (ut(e))
    return e;
  let o = [];
  return ue(t) && t.assignedNodes ? o = C(t.assignedNodes()) : x(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? o = C(t.contentDocument.body.childNodes) : o = C(((a = t.shadowRoot) !== null && a !== void 0 ? a : t).childNodes), o.length === 0 || x(t, HTMLVideoElement) || await o.reduce((l, c) => l.then(() => V(c, n)).then((s) => {
    s && e.appendChild(s);
  }), Promise.resolve()), e;
}
function me(t, e, n) {
  const r = e.style;
  if (!r)
    return;
  const a = window.getComputedStyle(t);
  a.cssText ? (r.cssText = a.cssText, r.transformOrigin = a.transformOrigin) : st(n).forEach((o) => {
    let l = a.getPropertyValue(o);
    o === "font-size" && l.endsWith("px") && (l = `${Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1}px`), x(t, HTMLIFrameElement) && o === "display" && l === "inline" && (l = "block"), o === "d" && e.getAttribute("d") && (l = `path(${e.getAttribute("d")})`), r.setProperty(o, l, a.getPropertyPriority(o));
  });
}
function fe(t, e) {
  x(t, HTMLTextAreaElement) && (e.innerHTML = t.value), x(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function ge(t, e) {
  if (x(t, HTMLSelectElement)) {
    const r = Array.from(e.children).find((a) => t.value === a.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function ye(t, e, n) {
  return x(e, Element) && (me(t, e, n), ee(t, e, n), fe(t, e), ge(t, e)), e;
}
async function xe(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const c = n[o].getAttribute("xlink:href");
    if (c) {
      const s = t.querySelector(c), u = document.querySelector(c);
      !s && u && !r[c] && (r[c] = await V(u, e, !0));
    }
  }
  const a = Object.values(r);
  if (a.length) {
    const o = "http://www.w3.org/1999/xhtml", l = document.createElementNS(o, "svg");
    l.setAttribute("xmlns", o), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const c = document.createElementNS(o, "defs");
    l.appendChild(c);
    for (let s = 0; s < a.length; s++)
      c.appendChild(a[s]);
    t.appendChild(l);
  }
  return t;
}
async function V(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => de(r, e)).then((r) => he(t, r, e)).then((r) => ye(t, r, e)).then((r) => xe(r, e));
}
const ht = /url\((['"]?)([^'"]+?)\1\)/g, pe = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, be = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function we(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function ve(t) {
  const e = [];
  return t.replace(ht, (n, r, a) => (e.push(a), n)), e.filter((n) => !j(n));
}
async function Se(t, e, n, r, a) {
  try {
    const o = n ? _t(e, n) : e, l = G(e);
    let c;
    return a || (c = await J(o, l, r)), t.replace(we(e), `$1${c}$3`);
  } catch {
  }
  return t;
}
function Ce(t, { preferredFontFormat: e }) {
  return e ? t.replace(be, (n) => {
    for (; ; ) {
      const [r, , a] = pe.exec(n) || [];
      if (!a)
        return "";
      if (a === e)
        return `src: ${r};`;
    }
  }) : t;
}
function mt(t) {
  return t.search(ht) !== -1;
}
async function ft(t, e, n) {
  if (!mt(t))
    return t;
  const r = Ce(t, n);
  return ve(r).reduce((o, l) => o.then((c) => Se(c, l, e, n)), Promise.resolve(r));
}
async function F(t, e, n) {
  var r;
  const a = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (a) {
    const o = await ft(a, null, n);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function Ee(t, e) {
  await F("background", t, e) || await F("background-image", t, e), await F("mask", t, e) || await F("-webkit-mask", t, e) || await F("mask-image", t, e) || await F("-webkit-mask-image", t, e);
}
async function ke(t, e) {
  const n = x(t, HTMLImageElement);
  if (!(n && !j(t.src)) && !(x(t, SVGImageElement) && !j(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, a = await J(r, G(r), e);
  await new Promise((o, l) => {
    t.onload = o, t.onerror = e.onImageErrorHandler ? (...s) => {
      try {
        o(e.onImageErrorHandler(...s));
      } catch (u) {
        l(u);
      }
    } : l;
    const c = t;
    c.decode && (c.decode = o), c.loading === "lazy" && (c.loading = "eager"), n ? (t.srcset = "", t.src = a) : t.href.baseVal = a;
  });
}
async function De(t, e) {
  const r = C(t.childNodes).map((a) => gt(a, e));
  await Promise.all(r).then(() => t);
}
async function gt(t, e) {
  x(t, Element) && (await Ee(t, e), await ke(t, e), await De(t, e));
}
function Re(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((a) => {
    n[a] = r[a];
  }), t;
}
const nt = {};
async function rt(t) {
  let e = nt[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, nt[t] = e, e;
}
async function at(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let c = l.replace(r, "$1");
    return c.startsWith("https://") || (c = new URL(c, t.url).href), dt(c, e.fetchRequestInit, ({ result: s }) => (n = n.replace(l, `url(${s})`), [l, s]));
  });
  return Promise.all(o).then(() => n);
}
function it(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const a = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const s = a.exec(r);
    if (s === null)
      break;
    e.push(s[0]);
  }
  r = r.replace(a, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c = new RegExp(l, "gi");
  for (; ; ) {
    let s = o.exec(r);
    if (s === null) {
      if (s = c.exec(r), s === null)
        break;
      o.lastIndex = c.lastIndex;
    } else
      c.lastIndex = o.lastIndex;
    e.push(s[0]);
  }
  return e;
}
async function Fe(t, e) {
  const n = [], r = [];
  return t.forEach((a) => {
    if ("cssRules" in a)
      try {
        C(a.cssRules || []).forEach((o, l) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let c = l + 1;
            const s = o.href, u = rt(s).then((h) => at(h, e)).then((h) => it(h).forEach((m) => {
              try {
                a.insertRule(m, m.startsWith("@import") ? c += 1 : a.cssRules.length);
              } catch (D) {
                console.error("Error inserting rule from remote css", {
                  rule: m,
                  error: D
                });
              }
            })).catch((h) => {
              console.error("Error loading remote css", h.toString());
            });
            r.push(u);
          }
        });
      } catch (o) {
        const l = t.find((c) => c.href == null) || document.styleSheets[0];
        a.href != null && r.push(rt(a.href).then((c) => at(c, e)).then((c) => it(c).forEach((s) => {
          l.insertRule(s, l.cssRules.length);
        })).catch((c) => {
          console.error("Error loading remote stylesheet", c);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(r).then(() => (t.forEach((a) => {
    if ("cssRules" in a)
      try {
        C(a.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${a.href}`, o);
      }
  }), n));
}
function Te(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => mt(e.style.getPropertyValue("src")));
}
async function Pe(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = C(t.ownerDocument.styleSheets), r = await Fe(n, e);
  return Te(r);
}
function yt(t) {
  return t.trim().replace(/["']/g, "");
}
function Ie(t) {
  const e = /* @__PURE__ */ new Set();
  function n(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((o) => {
      e.add(yt(o));
    }), Array.from(r.children).forEach((o) => {
      o instanceof HTMLElement && n(o);
    });
  }
  return n(t), e;
}
async function xt(t, e) {
  const n = await Pe(t, e), r = Ie(t);
  return (await Promise.all(n.filter((o) => r.has(yt(o.style.fontFamily))).map((o) => {
    const l = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return ft(o.cssText, l, e);
  }))).join(`
`);
}
async function Be(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await xt(t, e);
  if (n) {
    const r = document.createElement("style"), a = document.createTextNode(n);
    r.appendChild(a), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function pt(t, e = {}) {
  const { width: n, height: r } = q(t, e), a = await V(t, e, !0);
  return await Be(a, e), await gt(a, e), Re(a, e), await Kt(a, n, r);
}
async function L(t, e = {}) {
  const { width: n, height: r } = q(t, e), a = await pt(t, e), o = await H(a), l = document.createElement("canvas"), c = l.getContext("2d"), s = e.pixelRatio || Gt(), u = e.canvasWidth || n, h = e.canvasHeight || r;
  return l.width = u * s, l.height = h * s, e.skipAutoScale || Jt(l), l.style.width = `${u}`, l.style.height = `${h}`, e.backgroundColor && (c.fillStyle = e.backgroundColor, c.fillRect(0, 0, l.width, l.height)), c.drawImage(o, 0, 0, l.width, l.height), l;
}
async function Le(t, e = {}) {
  const { width: n, height: r } = q(t, e);
  return (await L(t, e)).getContext("2d").getImageData(0, 0, n, r).data;
}
async function Ae(t, e = {}) {
  return (await L(t, e)).toDataURL();
}
async function $e(t, e = {}) {
  return (await L(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
async function Ne(t, e = {}) {
  const n = await L(t, e);
  return await Xt(n);
}
async function Ue(t, e = {}) {
  return xt(t, e);
}
const He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFontEmbedCSS: Ue,
  toBlob: Ne,
  toCanvas: L,
  toJpeg: $e,
  toPixelData: Le,
  toPng: Ae,
  toSvg: pt
}, Symbol.toStringTag, { value: "Module" })), ze = (t, e) => t.reduce((n, r) => {
  const a = String(r[e]);
  return n[a] || (n[a] = []), n[a].push(r), n;
}, {}), Me = (t, e, n = "asc") => [...t].sort((r, a) => {
  const o = r[e], l = a[e], c = o > l ? 1 : o < l ? -1 : 0;
  return n === "asc" ? c : -c;
}), Ve = (t) => {
  const { value: e } = t, n = M(B);
  if (!n) return null;
  const { updateState: r } = n, { width: a, ...o } = t.account || {}, { width: l, ...c } = t.amount || {}, s = () => {
    r({ editingTransaction: e });
  };
  return /* @__PURE__ */ d("div", { className: "insertion", children: [
    /* @__PURE__ */ i("div", { className: "debit flex-col", style: o, title: e.isDebit ? e.account : "", children: /* @__PURE__ */ i("div", { children: e.isDebit ? e.account : "" }) }),
    /* @__PURE__ */ i("div", { className: "credit flex-col", style: o, title: e.isDebit ? "" : e.account, children: /* @__PURE__ */ i("div", { children: e.isDebit ? "" : e.account }) }),
    /* @__PURE__ */ i("div", { className: "flex-col description", children: /* @__PURE__ */ i(
      "div",
      {
        className: "transaction-content",
        style: { marginLeft: e.isDebit ? 0 : 72 },
        children: e.text
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "amount-debit flex-col", style: c, children: /* @__PURE__ */ i("div", { children: e.isDebit ? I.currency(e.amount, e.currency, e.local) : "" }) }),
    /* @__PURE__ */ i("div", { className: "amount-credit flex-col", style: c, children: /* @__PURE__ */ i("div", { children: e.isDebit ? "" : I.currency(e.amount, e.currency, e.local) }) }),
    t.showEdit !== !1 && /* @__PURE__ */ i("div", { className: "edit-action", style: { width: 32, textAlign: "center" }, children: /* @__PURE__ */ i(
      "button",
      {
        onClick: s,
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          borderRadius: "4px",
          opacity: 0.6
        },
        title: "Edit transaction",
        children: /* @__PURE__ */ i(At, { size: 14 })
      }
    ) })
  ] });
}, O = {
  padding: "8px 10px",
  border: "1px solid hsl(220, 13%, 91%)",
  borderRadius: "6px",
  fontSize: "13px",
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  background: "white",
  color: "hsl(224, 71%, 4%)"
}, We = () => {
  const t = M(B);
  if (!t) return null;
  const { state: e, updateState: n } = t;
  return /* @__PURE__ */ d("div", { style: { display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ d("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ i($t, { size: 14, style: { position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ i(
        "input",
        {
          type: "text",
          placeholder: "Search...",
          value: e.searchTerm || "",
          onChange: (r) => n({ searchTerm: r.target.value }),
          style: { ...O, paddingLeft: "32px", width: "180px" }
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
      /* @__PURE__ */ i(Nt, { size: 14, style: { color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ i(
        "input",
        {
          type: "date",
          value: e.dateFilter?.start || "",
          onChange: (r) => n({
            dateFilter: { ...e.dateFilter, start: r.target.value }
          }),
          style: O
        }
      ),
      /* @__PURE__ */ i("span", { style: { color: "hsl(220, 9%, 46%)", fontSize: "12px" }, children: "to" }),
      /* @__PURE__ */ i(
        "input",
        {
          type: "date",
          value: e.dateFilter?.end || "",
          onChange: (r) => n({
            dateFilter: { ...e.dateFilter, end: r.target.value }
          }),
          style: O
        }
      ),
      (e.searchTerm || e.dateFilter?.start || e.dateFilter?.end) && /* @__PURE__ */ i(
        "button",
        {
          onClick: () => n({ searchTerm: "", dateFilter: {} }),
          style: {
            padding: "8px 12px",
            background: "white",
            border: "1px solid hsl(220, 13%, 91%)",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 500,
            color: "hsl(220, 9%, 46%)",
            transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)"
          },
          children: "Clear"
        }
      )
    ] })
  ] });
}, ct = [
  {
    date: "2021-01-01",
    text: "Received Capital worth",
    isDebit: !0,
    amount: 9e4,
    account: "Cash",
    currency: "USD",
    local: "en-US"
  },
  {
    date: "2021-01-01",
    text: "Received Capital worth",
    amount: 9e4,
    account: "Common Stock",
    currency: "USD"
  },
  {
    date: "2021-01-01",
    text: "Paid $2,000 for the first month’s rent.",
    isDebit: !0,
    amount: 8e4,
    account: "Rent",
    currency: "JPY"
  },
  {
    date: "2021-01-01",
    text: "Paid $2,000 for the first month’s rent.",
    amount: 8e4,
    account: "Cash",
    currency: "JPY",
    local: "en-US"
  }
], _e = (t) => new Promise((e, n) => {
  const r = new FileReader();
  r.onload = (a) => {
    try {
      const c = (a.target?.result).split(`
`).slice(1).filter((s) => s.trim()).map((s) => {
        const u = s.split(","), h = parseFloat(u[3]) || 0, m = parseFloat(u[4]) || 0;
        return {
          date: u[0],
          account: u[1].replace(/"/g, ""),
          text: u[2].replace(/"/g, ""),
          amount: h || m,
          isDebit: h > 0,
          currency: (u[5] || "USD").trim()
        };
      });
      e(c);
    } catch (o) {
      n(o);
    }
  }, r.readAsText(t);
}), Oe = (t) => {
  if (!t || t.length === 0) return [];
  const e = ze(t, "date");
  return Object.entries(e).map(([n, r]) => ({ date: n, content: r }));
}, je = (t) => {
  const [e, n] = z("toPng"), r = M(B);
  if (!r) return null;
  const { state: a, undo: o, redo: l, updateState: c } = r, u = a.history.length > 1 ? a.data || [] : t.data && t.data.length > 0 ? t.data : a.data && a.data.length > 0 ? a.data : ct, h = wt(() => {
    let f = u;
    if (a.searchTerm) {
      const g = a.searchTerm.toLowerCase();
      f = f.filter(
        (S) => S.text.toLowerCase().includes(g) || S.account.toLowerCase().includes(g)
      );
    }
    return a.dateFilter?.start && (f = f.filter((g) => g.date >= a.dateFilter.start)), a.dateFilter?.end && (f = f.filter((g) => g.date <= a.dateFilter.end)), f;
  }, [u, a.searchTerm, a.dateFilter]), m = vt(null), D = async (f) => {
    const g = f.target.files?.[0];
    if (g) {
      try {
        const E = (await _e(g)).map((k) => ({ ...k, id: k.id || lt() }));
        c({ data: [...a.data || [], ...E] });
      } catch {
      }
      m.current && (m.current.value = "");
    }
  }, T = () => {
    const f = document.getElementById("diary");
    f && He[e === "toPdf" ? "toPng" : e](f, {
      backgroundColor: "#fff",
      quality: 1,
      pixelRatio: 10
    }).then((g) => {
      let S = g.split(","), E = S[0].match(/:(.*?);/)?.[1], k = atob(S[1]), A = k.length, X = new Uint8Array(A);
      for (; A--; ) X[A] = k.charCodeAt(A);
      const bt = new File([X], "filename", {
        type: E
      });
      if (e === "toPdf")
        I.extractDoc(g);
      else if (E) {
        const $ = document.createElement("a");
        $.href = URL.createObjectURL(bt), $.download = "export." + E.split("/")[1], $.click(), URL.revokeObjectURL($.href);
      }
    }).catch(function(g) {
      console.error("oops, something went wrong!", g);
    });
  };
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        border: "1px solid hsl(220, 13%, 91%)",
        minHeight: "650px",
        height: t.height,
        width: t.width,
        position: "relative",
        padding: 24,
        borderRadius: 12,
        boxSizing: "border-box",
        background: "white",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
        fontFamily: "var(--rad-font)"
      },
      children: [
        /* @__PURE__ */ d("div", { style: { display: "flex", marginBottom: 16, gap: t.compactButtons ? 4 : 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ d("div", { style: { display: "flex", gap: t.compactButtons ? 4 : 12, alignItems: "center", flexWrap: "wrap" }, children: [
            t.showExport !== !1 && /* @__PURE__ */ d("div", { className: "export", children: [
              /* @__PURE__ */ d(
                "button",
                {
                  id: e === "toJpeg" ? "active" : "",
                  onClick: () => n("toJpeg"),
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ i(K, { size: t.compactButtons ? 10 : 12 }),
                    t.compactButtons ? "JPG" : "JPEG"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  id: e === "toPng" ? "active" : "",
                  onClick: () => n("toPng"),
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ i(K, { size: t.compactButtons ? 10 : 12 }),
                    "PNG"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  id: e === "toPdf" ? "active" : "",
                  onClick: () => n("toPdf"),
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ i(Ut, { size: t.compactButtons ? 10 : 12 }),
                    "PDF"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "global-action", style: { display: "flex", gap: t.compactButtons ? 2 : 8 }, children: [
              t.showUndo !== !1 && /* @__PURE__ */ d(y, { children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    className: "sample doer",
                    disabled: !(a.history.length > 1 && a.doIndex > 0),
                    onClick: () => o(),
                    title: "Undo",
                    style: { padding: t.compactButtons ? "4px" : "8px" },
                    children: /* @__PURE__ */ i(Ft, { strokeWidth: 2.5, size: t.compactButtons ? 12 : 14 })
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    className: "sample doer",
                    onClick: () => l(),
                    disabled: !(a.doIndex + 1 < a.history.length),
                    title: "Redo",
                    style: { padding: t.compactButtons ? "4px" : "8px" },
                    children: /* @__PURE__ */ i(Tt, { strokeWidth: 2.5, size: t.compactButtons ? 12 : 14 })
                  }
                )
              ] }),
              t.showSample !== !1 && /* @__PURE__ */ d(
                "button",
                {
                  className: "sample",
                  onClick: () => c({ data: ct }),
                  title: "Load sample data",
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ i(zt, { size: t.compactButtons ? 10 : 12 }),
                    t.compactButtons ? "Sample" : "Data Sample"
                  ]
                }
              ),
              t.showClear !== !1 && /* @__PURE__ */ d(
                "button",
                {
                  className: "reset",
                  onClick: () => c({ data: [] }),
                  title: "Clear all transactions",
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ i(Ht, { size: t.compactButtons ? 10 : 12 }),
                    "Clear"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  className: "sample",
                  onClick: () => m.current?.click(),
                  title: "Import CSV",
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px" },
                  children: [
                    /* @__PURE__ */ i(It, { size: t.compactButtons ? 10 : 12 }),
                    !t.compactButtons && /* @__PURE__ */ i("span", { style: { marginLeft: 4 }, children: "CSV" })
                  ]
                }
              ),
              /* @__PURE__ */ i(
                "input",
                {
                  ref: m,
                  type: "file",
                  accept: ".csv",
                  style: { display: "none" },
                  onChange: D
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ d("div", { style: { display: "flex", gap: t.compactButtons ? 4 : 12, alignItems: "center" }, children: [
            t.showExport !== !1 && /* @__PURE__ */ d(
              "button",
              {
                className: "btn-export",
                style: {
                  backgroundColor: t.saveColor,
                  padding: t.compactButtons ? "6px 12px" : "8px 16px",
                  fontSize: t.compactButtons ? "12px" : "14px"
                },
                title: "Export diary",
                onClick: T,
                "aria-label": "Export accounting diary",
                role: "button",
                tabIndex: 0,
                children: [
                  /* @__PURE__ */ i(Pt, { size: t.compactButtons ? 16 : 20, "aria-hidden": "true" }),
                  /* @__PURE__ */ i("span", { children: t.compactButtons ? "" : "Export" })
                ]
              }
            ),
            t.showAdd !== !1 && /* @__PURE__ */ i(Wt, {})
          ] })
        ] }),
        t.showSearch !== !1 && /* @__PURE__ */ i(We, {}),
        /* @__PURE__ */ d(
          "div",
          {
            id: "diary",
            style: { padding: 8 },
            role: "table",
            "aria-label": "Accounting diary entries",
            children: [
              /* @__PURE__ */ d(
                "div",
                {
                  style: {
                    textAlign: "center",
                    marginBottom: 16,
                    fontWeight: 600,
                    padding: 12,
                    fontSize: 18,
                    fontFamily: "var(--rad-font)",
                    color: t.titleColor || "#000",
                    border: `${t.titleBorder ? "2px" : "0"} solid rgba(0,0,0,.1)`,
                    background: t.titleBg,
                    textTransform: t.titleAllCaps ? "uppercase" : "none",
                    borderRadius: t.titleCorner || 8
                  },
                  role: "heading",
                  "aria-level": 1,
                  children: [
                    "Accounting diary for ",
                    t.title || "Test Model"
                  ]
                }
              ),
              Oe(h || []).map((f, g, S) => /* @__PURE__ */ d(ot.Fragment, { children: [
                /* @__PURE__ */ i(
                  Ct,
                  {
                    date: f.date,
                    columnHeader: t.columnHeader,
                    columnHeaderColor: t.columnHeaderColor,
                    columnHeaderBgColor: t.columnHeaderBgColor,
                    index: g,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  }
                ),
                Me(f.content, "isDebit", "asc").map((E, k) => /* @__PURE__ */ i(
                  Ve,
                  {
                    value: E,
                    length: S.length,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  },
                  k
                )),
                /* @__PURE__ */ i(
                  Dt,
                  {
                    account: t.account,
                    columnHeader: t.columnHeader,
                    index: g,
                    footer: t.footer,
                    amount: t.amount,
                    data: f.content,
                    showEdit: t.showEdit
                  }
                )
              ] }, f.date))
            ]
          }
        )
      ]
    }
  );
}, qe = {
  mode: "light",
  colors: {
    background: "#ffffff",
    surface: "#f8f9fa",
    text: "#212529",
    textSecondary: "#6c757d",
    border: "#dee2e6",
    primary: "#0d6efd",
    success: "#198754",
    error: "#dc3545"
  }
}, Ge = {
  mode: "dark",
  colors: {
    background: "#1a1a1a",
    surface: "#2d2d2d",
    text: "#ffffff",
    textSecondary: "#adb5bd",
    border: "#495057",
    primary: "#0d6efd",
    success: "#198754",
    error: "#dc3545"
  }
}, Je = St(void 0), Xe = ({ children: t }) => {
  const [e, n] = z(!1), r = e ? Ge : qe, a = () => n(!e);
  return /* @__PURE__ */ i(Je.Provider, { value: { theme: r, toggleTheme: a }, children: t });
}, Qe = (t) => /* @__PURE__ */ i(Xe, { children: /* @__PURE__ */ i(Rt, { children: /* @__PURE__ */ i(je, { ...t }) }) });
export {
  je as AccountingDiary,
  Qe as AccountingDiaryWrapper,
  Wt as DialogOperation,
  Dt as Footer,
  Rt as GlobalProvider,
  Ct as Header,
  Qe as default
};
