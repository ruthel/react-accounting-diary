(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('@charset "UTF-8";.dialog-overlay{position:fixed;inset:0;z-index:1000;background:#0006;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;animation:overlayIn .15s ease}@keyframes overlayIn{0%{opacity:0}to{opacity:1}}.dialog-modal{background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:calc(var(--rad-radius) + 4px);box-shadow:0 16px 70px -12px #00000040;width:440px;max-width:calc(100vw - 32px);max-height:calc(100vh - 64px);overflow-y:auto;font-family:var(--rad-font);animation:modalIn .2s cubic-bezier(.16,1,.3,1)}@keyframes modalIn{0%{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}.dialog-header{display:flex;justify-content:space-between;align-items:flex-start;padding:24px 24px 0}.dialog-title{margin:0;font-weight:600;font-size:16px;color:var(--rad-text);letter-spacing:-.02em;line-height:1.4}.dialog-description{margin:4px 0 0;font-size:13px;color:var(--rad-text-muted);line-height:1.4}.dialog-close{background:none;border:none;cursor:pointer;padding:6px;border-radius:var(--rad-radius-sm);color:var(--rad-text-muted);transition:all var(--rad-transition);flex-shrink:0}.dialog-close:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.dialog-body{padding:20px 24px;display:flex;flex-direction:column;gap:16px}.dialog-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:end}.dialog-footer{display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--rad-border-color);background:var(--rad-bg-muted);border-radius:0 0 calc(var(--rad-radius) + 4px) calc(var(--rad-radius) + 4px)}.btn-cancel,.btn-confirm{padding:8px 16px;border-radius:var(--rad-radius-sm);font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition)}.btn-cancel:active,.btn-confirm:active{transform:scale(.98)}.btn-cancel:focus-visible,.btn-confirm:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-cancel{background:var(--rad-bg);color:var(--rad-text-secondary);border:1px solid var(--rad-border-color);box-shadow:var(--rad-shadow-sm)}.btn-cancel:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.btn-confirm{background:var(--rad-text);color:#fff;border:none;box-shadow:var(--rad-shadow-sm)}.btn-confirm:hover{opacity:.9}.control{display:flex;flex-direction:column;margin:0}.control label{display:block;font-size:12px;margin-bottom:6px;font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.control input,.control select,.control textarea{width:100%;height:36px;padding:0 10px;border-radius:var(--rad-radius-sm);box-sizing:border-box;border:1px solid var(--rad-border-color);font-size:13px;font-family:inherit;transition:all var(--rad-transition);background:var(--rad-bg);color:var(--rad-text)}.control input::placeholder,.control select::placeholder,.control textarea::placeholder{color:var(--rad-text-muted)}.control input:hover,.control select:hover,.control textarea:hover{border-color:#c5cad3}.control input:focus,.control select:focus,.control textarea:focus{outline:none;border-color:var(--rad-primary);box-shadow:0 0 0 3px var(--rad-primary-ring)}.control textarea{height:auto;min-height:60px;padding:8px 10px;resize:vertical;line-height:1.5}.control select{cursor:pointer}.control-check{display:flex;align-items:center;margin:0;gap:8px;height:36px}.control-check label{font-size:13px;font-weight:500;color:var(--rad-text);margin:0;cursor:pointer;-webkit-user-select:none;user-select:none}.control-check input{width:16px;height:16px;cursor:pointer;accent-color:var(--rad-primary);border-radius:4px;flex-shrink:0}:root{--rad-font: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-border: 1px;--rad-border-color: hsl(220, 13%, 91%);--rad-primary: hsl(221, 83%, 53%);--rad-primary-hover: hsl(221, 83%, 46%);--rad-primary-ring: hsla(221, 83%, 53%, .15);--rad-danger: hsl(0, 84%, 60%);--rad-danger-hover: hsl(0, 84%, 53%);--rad-danger-ring: hsla(0, 84%, 60%, .15);--rad-success: hsl(142, 71%, 45%);--rad-success-hover: hsl(142, 71%, 38%);--rad-success-ring: hsla(142, 71%, 45%, .15);--rad-bg: hsl(0, 0%, 100%);--rad-bg-muted: hsl(220, 14%, 96%);--rad-bg-hover: hsl(220, 14%, 96%);--rad-text: hsl(224, 71%, 4%);--rad-text-muted: hsl(220, 9%, 46%);--rad-text-secondary: hsl(220, 9%, 36%);--rad-radius: 8px;--rad-radius-sm: 6px;--rad-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--rad-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);--rad-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--rad-transition: .15s cubic-bezier(.4, 0, .2, 1)}.insertion{display:flex;width:100%;font-size:13px;font-family:var(--rad-font);border-bottom:var(--rad-border) solid var(--rad-border-color);transition:background var(--rad-transition);align-items:stretch}.insertion:hover{background:var(--rad-bg-hover)}.flex-col{display:flex;flex-direction:column;justify-content:center}.description{border-left:var(--rad-border) solid var(--rad-border-color)!important;border-right:var(--rad-border) solid var(--rad-border-color)!important;padding:8px 16px;flex:1;min-width:150px;min-height:36px;box-sizing:border-box}.border-bottom{border-bottom:var(--rad-border) solid var(--rad-border-color)!important}.border-top{border-top:2px solid var(--rad-border-color)!important}.date,.transaction-title{text-align:center;padding:6px 0;font-size:13px}.date{font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.transaction-content{flex:1;color:var(--rad-text-muted);line-height:1.5}.debit,.credit{padding:8px 12px;border-left:var(--rad-border) solid var(--rad-border-color)!important;text-align:center;font-weight:500;color:var(--rad-text);min-width:140px;max-width:160px;min-height:36px;box-sizing:border-box;flex-shrink:0}.debit div,.credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-debit,.amount-credit{padding:8px 12px;border-right:var(--rad-border) solid var(--rad-border-color)!important;text-align:right;font-weight:500;color:var(--rad-text);font-variant-numeric:tabular-nums;font-family:var(--rad-font-mono);min-width:120px;max-width:180px;min-height:36px;box-sizing:border-box;flex-shrink:0}.amount-debit div,.amount-credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}html,body,#root{height:100%}#root{overflow-y:auto;padding:32px;box-sizing:border-box;background:var(--rad-bg-muted)}.btn-export{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 16px;height:36px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;font-weight:500;font-size:13px;cursor:pointer;box-shadow:var(--rad-shadow-sm);transition:all var(--rad-transition);letter-spacing:-.01em}.btn-export:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-export:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-export:active{transform:scale(.98)}.btn-save-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-save-accounting:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-save-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-add-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-add-accounting:hover{opacity:.9;box-shadow:var(--rad-shadow)}.btn-add-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-text)}.btn-add-accounting:active{transform:scale(.96)}.export{display:inline-flex;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);overflow:hidden;background:var(--rad-bg);box-shadow:var(--rad-shadow-sm)}.export button{background:var(--rad-bg);border:none;cursor:pointer;padding:8px 14px;transition:all var(--rad-transition);font-weight:500;font-size:12px;color:var(--rad-text-muted);border-right:1px solid var(--rad-border-color)}.export button:last-child{border-right:none}.export button:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.export button:active,.export button#active{background:var(--rad-text);color:#fff}.global-action{display:flex;gap:6px;align-items:center}.global-action button{padding:8px 12px;cursor:pointer;font-size:12px;font-weight:500;border-radius:var(--rad-radius-sm);transition:all var(--rad-transition);border:1px solid var(--rad-border-color);background:var(--rad-bg);color:var(--rad-text-secondary);box-shadow:var(--rad-shadow-sm)}.global-action button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text);box-shadow:var(--rad-shadow)}.global-action button:active:not(:disabled){transform:scale(.98)}.global-action button:disabled{opacity:.5;cursor:not-allowed}.global-action .reset{border-color:var(--rad-danger);color:var(--rad-danger);background:var(--rad-bg)}.global-action .reset:hover:not(:disabled){background:var(--rad-danger-ring);color:var(--rad-danger-hover)}.global-action .sample.doer{background:var(--rad-text);border-color:var(--rad-text);color:#fff;padding:8px 10px}.global-action .sample.doer:hover:not(:disabled){opacity:.9;background:var(--rad-text);color:#fff}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px;gap:12px}.empty-state .empty-state-icon{color:var(--rad-border-color);margin-bottom:4px}.empty-state .empty-state-text{color:var(--rad-text-muted);font-size:14px;margin:0}.empty-state .empty-state-cta{margin-top:8px;padding:8px 20px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.empty-state .empty-state-cta:hover{opacity:.9;box-shadow:var(--rad-shadow)}.empty-state .empty-state-cta:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.insertion:focus{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary-ring);background:var(--rad-bg-hover)}.insertion:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary);background:var(--rad-bg-hover)}.grand-total{margin-top:16px;padding:12px 16px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg-muted);font-family:var(--rad-font)}.grand-total .grand-total-row{display:flex;justify-content:space-between;align-items:center;padding:4px 0}.grand-total .grand-total-row:not(:last-child){border-bottom:1px solid var(--rad-border-color);padding-bottom:8px;margin-bottom:8px}.grand-total .grand-total-label{font-weight:600;font-size:13px;color:var(--rad-text);text-transform:uppercase;letter-spacing:.02em}.grand-total .grand-total-amounts{display:flex;gap:24px;font-size:13px;font-weight:600;font-family:var(--rad-font-mono);font-variant-numeric:tabular-nums}.grand-total .grand-total-debit,.grand-total .grand-total-credit{color:var(--rad-text)}.balance-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600}.balance-badge.balanced{background:var(--rad-success-ring);color:var(--rad-success)}.balance-badge.unbalanced{background:var(--rad-danger-ring);color:var(--rad-danger)}.pagination{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:16px;font-family:var(--rad-font);font-size:13px;color:var(--rad-text-muted)}.pagination button{padding:6px 12px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg);cursor:pointer;font-size:13px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.pagination button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text)}.pagination button:disabled{opacity:.4;cursor:not-allowed}.row-actions{position:relative;display:flex;align-items:center;width:32px;justify-content:center}.row-actions .row-actions-trigger{background:none;border:none;cursor:pointer;padding:4px;border-radius:var(--rad-radius-sm);opacity:.6;transition:all var(--rad-transition);display:flex;align-items:center;justify-content:center}.row-actions .row-actions-trigger:hover{background:var(--rad-success);color:#fff;opacity:1}.row-actions .row-actions-menu{position:absolute;right:0;top:100%;z-index:10;background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);box-shadow:var(--rad-shadow-md);min-width:120px;overflow:hidden}.row-actions .row-actions-menu button{display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;border:none;background:none;cursor:pointer;font-size:12px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition)}.row-actions .row-actions-menu button:hover{background:var(--rad-success);color:#fff}.row-actions .row-actions-menu button.danger:hover{background:var(--rad-danger);color:#fff}')),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsx as c, jsxs as d, Fragment as S } from "react/jsx-runtime";
import be, { useState as U, useCallback as M, useContext as A, useEffect as G, useRef as we, useMemo as le, createContext as $e } from "react";
let ze = 0;
const ve = () => `txn_${Date.now()}_${++ze}`, Me = {
  debit: "Debit",
  credit: "Credit",
  description: "Description",
  transactionEntries: "Transaction entries",
  addTransaction: "Add Transaction",
  editTransaction: "Edit Transaction",
  modifyDescription: "Modify the transaction details.",
  addDescription: "Add a new entry to your accounting diary.",
  amount: "Amount",
  currency: "Currency",
  account: "Account",
  date: "Date",
  debitTransaction: "Debit transaction",
  save: "Save",
  update: "Update",
  cancel: "Cancel",
  export: "Export",
  clear: "Clear",
  sample: "Data Sample",
  search: "Search...",
  to: "to",
  noData: "No transactions yet.",
  grandTotal: "Grand Total",
  balance: "Balance",
  balanced: "Balanced",
  unbalanced: "Unbalanced",
  page: "Page",
  of: "of",
  edit: "Edit",
  delete: "Delete",
  actions: "Actions"
}, N = be.createContext(void 0), Ue = ({ children: e, labels: t, pageSize: n, onAdd: a, onDelete: r, onEdit: i, onChange: o }) => {
  const s = { ...Me, ...t }, [u, m] = U({
    data: [],
    doIndex: 0,
    openSb: !1,
    messageSb: "",
    history: [[]],
    severitySb: "success",
    editingTransaction: void 0,
    openAddDialog: !1,
    searchTerm: "",
    dateFilter: {},
    sortField: void 0,
    sortOrder: "asc",
    currentPage: 1
  }), l = M(() => {
    m((f) => {
      if (f.doIndex > 0) {
        const p = f.history[f.doIndex - 1];
        return o?.(p), {
          ...f,
          data: p,
          doIndex: f.doIndex - 1
        };
      }
      return f;
    });
  }, [o]), h = M(() => {
    m((f) => {
      let p = f.doIndex + 1;
      if (p < f.history.length) {
        const g = f.history[p];
        return o?.(g), {
          ...f,
          data: g,
          doIndex: p
        };
      }
      return f;
    });
  }, [o]), b = M((f) => {
    m((p) => {
      if ("data" in f && !("doIndex" in f)) {
        const g = f.data, I = [...[...p.history].slice(0, p.doIndex + 1), g];
        return o?.(g), {
          ...p,
          ...f,
          data: g,
          history: I,
          doIndex: I.length - 1
        };
      }
      return { ...p, ...f };
    });
  }, [o]), v = {
    state: u,
    labels: s,
    pageSize: n,
    undo: l,
    redo: h,
    updateState: b,
    onAdd: a,
    onDelete: r,
    onEdit: i,
    onChange: o
  };
  return /* @__PURE__ */ c(N.Provider, { value: v, children: e });
}, R = "var(--rad-border) solid var(--rad-border-color)", Q = ({ field: e }) => {
  const t = A(N);
  if (!t) return null;
  const { state: n } = t;
  return n.sortField !== e ? /* @__PURE__ */ c("span", { style: { opacity: 0.3, marginLeft: 4, fontSize: 10 }, children: "↕" }) : /* @__PURE__ */ c("span", { style: { marginLeft: 4, fontSize: 10 }, children: n.sortOrder === "asc" ? "↑" : "↓" });
}, He = (e) => {
  const t = A(N);
  if (!t) return null;
  const { labels: n, state: a, updateState: r } = t;
  let { date: i, index: o, columnHeader: s, columnHeaderColor: u, columnHeaderBgColor: m } = e;
  const l = o === 0 && s, h = `${i.split("-")[2]}/${i.split("-")[1]}/${i.split("-")[0]}`, { width: b, ...v } = e.account || {}, { width: f, ...p } = e.amount || {}, g = (I) => {
    const V = a.sortField === I && a.sortOrder === "asc" ? "desc" : "asc";
    r({ sortField: I, sortOrder: V });
  }, w = l ? { cursor: "pointer", userSelect: "none" } : {};
  return /* @__PURE__ */ d("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...v,
          borderTop: l ? R : "",
          borderBottom: l ? R : "",
          background: l ? m : ""
        },
        role: "columnheader",
        onClick: l ? () => g("account") : void 0,
        children: l ? /* @__PURE__ */ d("div", { className: "date", style: { color: u, ...w }, children: [
          n.debit,
          /* @__PURE__ */ c(Q, { field: "account" })
        ] }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...v,
          borderTop: l ? R : "",
          borderBottom: l ? R : "",
          background: l ? m : ""
        },
        role: "columnheader",
        children: l ? /* @__PURE__ */ c("div", { className: "date", style: { color: u }, children: n.credit }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        style: {
          flex: 1,
          minWidth: 150,
          borderTop: l ? R : "",
          borderBottom: l ? R : "",
          background: l ? m : ""
        },
        role: "columnheader",
        onClick: l ? () => g("date") : void 0,
        children: l ? /* @__PURE__ */ d("div", { className: "date", style: { color: u, ...w }, children: [
          h,
          /* @__PURE__ */ c(Q, { field: "date" })
        ] }) : /* @__PURE__ */ c(
          "div",
          {
            className: `flex-col description ${o === 0 ? "border-top" : ""}`,
            style: {
              borderTopLeftRadius: o === 0 && !s ? 6 : 0,
              borderTopRightRadius: o === 0 && !s ? 6 : 0,
              borderBottom: "none"
            },
            children: /* @__PURE__ */ c("div", { className: "date", children: h })
          }
        )
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "amount-debit flex-col",
        style: {
          ...p,
          borderTop: l ? R : "",
          borderBottom: l ? R : "",
          background: l ? m : ""
        },
        role: "columnheader",
        onClick: l ? () => g("amount") : void 0,
        children: l ? /* @__PURE__ */ d("div", { className: "date", style: { color: u, ...w }, children: [
          n.debit,
          /* @__PURE__ */ c(Q, { field: "amount" })
        ] }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...p,
          borderTop: l ? R : "",
          borderBottom: l ? R : "",
          background: l ? m : ""
        },
        role: "columnheader",
        children: l ? /* @__PURE__ */ c("div", { className: "date", style: { color: u }, children: n.credit }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    e.showEdit !== !1 && /* @__PURE__ */ c("div", { style: { width: 32, flexShrink: 0 } })
  ] });
};
let Z = null;
const Ve = async () => (Z || (Z = (await import("./pdfmake-CaUiNrns.mjs").then((t) => t.p)).default), Z), Oe = async (e) => {
  (await Ve()).createPdf({
    pageMargins: 0,
    content: [
      {
        image: e,
        width: 595
      }
    ]
  }).download();
};
class B {
  static currency(t, n = "XAF", a = "de-DE") {
    return new Intl.NumberFormat(a, {
      style: "currency",
      currency: n
    }).format(t) || "0,00";
  }
  static number(t) {
    return new Intl.NumberFormat("en-IN", { minimumIntegerDigits: 2 }).format(
      t || 0
    );
  }
  static date(t) {
    return new Date(t).toLocaleDateString("fr-FR", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  static extractDoc(t) {
    Oe(t);
  }
}
const j = "var(--rad-border) solid var(--rad-border-color)", We = (e) => {
  const t = A(N);
  if (!t) return null;
  const { labels: n } = t, a = (e.data || []).filter((h) => h.isDebit).reduce((h, b) => h + b.amount, 0), r = (e.data || []).filter((h) => !h.isDebit).reduce((h, b) => h + b.amount, 0), i = e.data?.[0]?.currency || "USD", o = e.data?.[0]?.local, { width: s, ...u } = e.account || {}, { width: m, ...l } = e.amount || {};
  return /* @__PURE__ */ d("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...u,
          borderBottom: e.columnHeader ? j : ""
        },
        children: /* @__PURE__ */ c("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...u,
          borderBottom: e.columnHeader ? j : ""
        },
        children: /* @__PURE__ */ c("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "flex-col description border-bottom",
        style: { padding: 0 },
        children: /* @__PURE__ */ c(
          "div",
          {
            className: "transaction-title",
            style: {
              ...e.footer,
              fontSize: 11,
              marginTop: 7,
              textTransform: "uppercase"
            },
            children: n.transactionEntries
          }
        )
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "amount-debit flex-col",
        style: {
          ...l,
          borderBottom: e.columnHeader ? j : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ c("div", { className: "transaction-title", children: a > 0 ? B.currency(a, i, o) : " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...l,
          borderBottom: e.columnHeader ? j : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ c("div", { className: "transaction-title", children: r > 0 ? B.currency(r, i, o) : " " })
      }
    ),
    e.showEdit !== !1 && /* @__PURE__ */ c("div", { style: { width: 32, flexShrink: 0 } })
  ] });
}, k = { size: 16, strokeWidth: 2 }, T = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e.size,
    height: e.size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: e.strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: e.className,
    style: e.style,
    "aria-hidden": "true",
    children: t
  }
), _e = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("polyline", { points: "1 4 1 10 7 10" }),
    /* @__PURE__ */ c("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
  ] }));
}, je = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("polyline", { points: "23 4 23 10 17 10" }),
    /* @__PURE__ */ c("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })
  ] }));
}, Ge = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ c("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ c("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] }));
}, qe = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ c("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ c("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
  ] }));
}, Je = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ c("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }));
}, Xe = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ c("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] }));
}, Ke = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ c(S, { children: /* @__PURE__ */ c("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }) }));
}, Ye = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ c("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ] }));
}, Qe = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ c("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ c("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ c("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }));
}, se = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ c("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ c("circle", { cx: "10", cy: "13", r: "2" }),
    /* @__PURE__ */ c("path", { d: "m20 17-1.1-1.1a2 2 0 0 0-2.81 0L10 22" })
  ] }));
}, Ze = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ c("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ c("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ c("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ c("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
  ] }));
}, Se = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("polyline", { points: "3 6 5 6 21 6" }),
    /* @__PURE__ */ c("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    /* @__PURE__ */ c("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    /* @__PURE__ */ c("line", { x1: "14", y1: "11", x2: "14", y2: "17" })
  ] }));
}, et = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    /* @__PURE__ */ c("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    /* @__PURE__ */ c("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ] }));
}, tt = (e = {}) => {
  const t = { ...k, ...e };
  return T(t, /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ c("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ c("circle", { cx: "12", cy: "19", r: "1" })
  ] }));
}, nt = [
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
], de = {
  open: !1,
  isDebit: !1,
  amount: "",
  account: "",
  text: "",
  date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  currency: "USD"
}, at = () => {
  const e = A(N), [t, n] = U(de);
  G(() => {
    const l = e?.state.editingTransaction;
    l && n({
      open: !0,
      isDebit: l.isDebit ?? !1,
      amount: l.amount,
      account: l.account,
      text: l.text,
      date: l.date,
      currency: l.currency || "USD"
    });
  }, [e?.state.editingTransaction]), G(() => {
    e?.state.openAddDialog && (n((l) => ({ ...l, open: !0 })), e.updateState({ openAddDialog: !1 }));
  }, [e?.state.openAddDialog]), G(() => {
    if (!t.open) return;
    const l = (h) => {
      h.key === "Escape" && r();
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [t.open]);
  const a = M(() => {
    n((l) => ({ ...l, open: !0 }));
  }, []), r = M(() => {
    n(de), e?.state.editingTransaction && e.updateState({ editingTransaction: void 0 });
  }, [e]);
  if (!e) return null;
  const { labels: i, onAdd: o, onEdit: s } = e, u = () => {
    const l = Number(t.amount), h = t.account.trim(), b = t.text.trim(), v = t.date;
    if (!l || l <= 0 || !h || !b || !v || isNaN(new Date(v).getTime())) return;
    const f = [...e.state.data || []], p = e.state.editingTransaction;
    if (p) {
      const g = f.findIndex((w) => w.id === p.id);
      if (g !== -1) {
        const w = { ...f[g], amount: l, account: h, isDebit: t.isDebit, text: b, date: v, currency: t.currency };
        s?.(f[g], w), f[g] = w;
      }
      e.updateState({ data: f, editingTransaction: void 0 });
    } else {
      const g = { id: ve(), amount: l, account: h, isDebit: t.isDebit, text: b, date: v, currency: t.currency };
      o?.(g), f.push(g), e.updateState({ data: f });
    }
    r();
  }, m = !!e.state.editingTransaction;
  return /* @__PURE__ */ d(S, { children: [
    /* @__PURE__ */ c("button", { onClick: a, className: "btn-add-accounting", title: i.addTransaction, children: /* @__PURE__ */ c(Je, { size: 20 }) }),
    t.open && /* @__PURE__ */ c("div", { className: "dialog-overlay", onClick: r, children: /* @__PURE__ */ d("div", { className: "dialog-modal", onClick: (l) => l.stopPropagation(), children: [
      /* @__PURE__ */ d("div", { className: "dialog-header", children: [
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ c("h3", { className: "dialog-title", children: m ? i.editTransaction : i.addTransaction }),
          /* @__PURE__ */ c("p", { className: "dialog-description", children: m ? i.modifyDescription : i.addDescription })
        ] }),
        /* @__PURE__ */ c("button", { onClick: r, className: "dialog-close", children: /* @__PURE__ */ c(Xe, { size: 16 }) })
      ] }),
      /* @__PURE__ */ d("div", { className: "dialog-body", children: [
        /* @__PURE__ */ d("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-amount", children: i.amount }),
            /* @__PURE__ */ c(
              "input",
              {
                id: "rad-amount",
                placeholder: "0.00",
                type: "number",
                step: "0.01",
                min: "0",
                value: t.amount || "",
                onChange: (l) => n((h) => ({ ...h, amount: l.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-currency", children: i.currency }),
            /* @__PURE__ */ c(
              "select",
              {
                id: "rad-currency",
                value: t.currency,
                onChange: (l) => n((h) => ({ ...h, currency: l.target.value })),
                children: nt.map((l) => /* @__PURE__ */ c("option", { value: l[1], children: l[0] }, l[1]))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-account", children: i.account }),
            /* @__PURE__ */ c(
              "input",
              {
                autoFocus: !0,
                id: "rad-account",
                placeholder: "e.g., Cash, Bank, Rent",
                value: t.account,
                onChange: (l) => n((h) => ({ ...h, account: l.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-date", children: i.date }),
            /* @__PURE__ */ c(
              "input",
              {
                id: "rad-date",
                type: "date",
                value: t.date,
                onChange: (l) => n((h) => ({ ...h, date: l.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "control-check", children: [
          /* @__PURE__ */ c(
            "input",
            {
              id: "rad-isDebit",
              type: "checkbox",
              checked: t.isDebit,
              onChange: (l) => n((h) => ({ ...h, isDebit: l.target.checked }))
            }
          ),
          /* @__PURE__ */ c("label", { htmlFor: "rad-isDebit", children: i.debitTransaction })
        ] }),
        /* @__PURE__ */ d("div", { className: "control", children: [
          /* @__PURE__ */ c("label", { htmlFor: "rad-description", children: i.description }),
          /* @__PURE__ */ c(
            "textarea",
            {
              id: "rad-description",
              rows: 2,
              placeholder: "Describe the transaction...",
              value: t.text,
              onChange: (l) => n((h) => ({ ...h, text: l.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "dialog-footer", children: [
        /* @__PURE__ */ c("button", { onClick: r, className: "btn-cancel", children: i.cancel }),
        /* @__PURE__ */ c("button", { onClick: u, className: "btn-confirm", children: m ? i.update : i.save })
      ] })
    ] }) })
  ] });
};
function rt(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), a = n.createElement("base"), r = n.createElement("a");
  return n.head.appendChild(a), n.body.appendChild(r), t && (a.href = t), r.href = e, r.href;
}
const ct = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function L(e) {
  const t = [];
  for (let n = 0, a = e.length; n < a; n++)
    t.push(e[n]);
  return t;
}
let $ = null;
function Ce(e = {}) {
  return $ || (e.includeStyleProperties ? ($ = e.includeStyleProperties, $) : ($ = L(window.getComputedStyle(document.documentElement)), $));
}
function q(e, t) {
  const a = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return a ? parseFloat(a.replace("px", "")) : 0;
}
function it(e) {
  const t = q(e, "border-left-width"), n = q(e, "border-right-width");
  return e.clientWidth + t + n;
}
function ot(e) {
  const t = q(e, "border-top-width"), n = q(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function ae(e, t = {}) {
  const n = t.width || it(e), a = t.height || ot(e);
  return { width: n, height: a };
}
function lt() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const F = 16384;
function st(e) {
  (e.width > F || e.height > F) && (e.width > F && e.height > F ? e.width > e.height ? (e.height *= F / e.width, e.width = F) : (e.width *= F / e.height, e.height = F) : e.width > F ? (e.height *= F / e.width, e.width = F) : (e.width *= F / e.height, e.height = F));
}
function dt(e, t = {}) {
  return e.toBlob ? new Promise((n) => {
    e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
  }) : new Promise((n) => {
    const a = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]), r = a.length, i = new Uint8Array(r);
    for (let o = 0; o < r; o += 1)
      i[o] = a.charCodeAt(o);
    n(new Blob([i], {
      type: t.type ? t.type : "image/png"
    }));
  });
}
function J(e) {
  return new Promise((t, n) => {
    const a = new Image();
    a.onload = () => {
      a.decode().then(() => {
        requestAnimationFrame(() => t(a));
      });
    }, a.onerror = n, a.crossOrigin = "anonymous", a.decoding = "async", a.src = e;
  });
}
async function ut(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function ht(e, t, n) {
  const a = "http://www.w3.org/2000/svg", r = document.createElementNS(a, "svg"), i = document.createElementNS(a, "foreignObject");
  return r.setAttribute("width", `${t}`), r.setAttribute("height", `${n}`), r.setAttribute("viewBox", `0 0 ${t} ${n}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), r.appendChild(i), i.appendChild(e), ut(r);
}
const E = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || E(n, t);
};
function mt(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function ft(e, t) {
  return Ce(t).map((n) => {
    const a = e.getPropertyValue(n), r = e.getPropertyPriority(n);
    return `${n}: ${a}${r ? " !important" : ""};`;
  }).join(" ");
}
function gt(e, t, n, a) {
  const r = `.${e}:${t}`, i = n.cssText ? mt(n) : ft(n, a);
  return document.createTextNode(`${r}{${i}}`);
}
function ue(e, t, n, a) {
  const r = window.getComputedStyle(e, n), i = r.getPropertyValue("content");
  if (i === "" || i === "none")
    return;
  const o = ct();
  try {
    t.className = `${t.className} ${o}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(gt(o, n, r, a)), t.appendChild(s);
}
function yt(e, t, n) {
  ue(e, t, ":before", n), ue(e, t, ":after", n);
}
const he = "application/font-woff", me = "image/jpeg", pt = {
  woff: he,
  woff2: he,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: me,
  jpeg: me,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function xt(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function re(e) {
  const t = xt(e).toLowerCase();
  return pt[t] || "";
}
function bt(e) {
  return e.split(/,/)[1];
}
function ne(e) {
  return e.search(/^(data:)/) !== -1;
}
function wt(e, t) {
  return `data:${t};base64,${e}`;
}
async function De(e, t, n) {
  const a = await fetch(e, t);
  if (a.status === 404)
    throw new Error(`Resource "${a.url}" not found`);
  const r = await a.blob();
  return new Promise((i, o) => {
    const s = new FileReader();
    s.onerror = o, s.onloadend = () => {
      try {
        i(n({ res: a, result: s.result }));
      } catch (u) {
        o(u);
      }
    }, s.readAsDataURL(r);
  });
}
const ee = {};
function vt(e, t, n) {
  let a = e.replace(/\?.*/, "");
  return n && (a = e), /ttf|otf|eot|woff2?/i.test(a) && (a = a.replace(/.*\//, "")), t ? `[${t}]${a}` : a;
}
async function ce(e, t, n) {
  const a = vt(e, t, n.includeQueryParams);
  if (ee[a] != null)
    return ee[a];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let r;
  try {
    const i = await De(e, n.fetchRequestInit, ({ res: o, result: s }) => (t || (t = o.headers.get("Content-Type") || ""), bt(s)));
    r = wt(i, t);
  } catch (i) {
    r = n.imagePlaceholder || "";
    let o = `Failed to fetch resource: ${e}`;
    i && (o = typeof i == "string" ? i : i.message), o && console.warn(o);
  }
  return ee[a] = r, r;
}
async function St(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : J(t);
}
async function Ct(e, t) {
  if (e.currentSrc) {
    const i = document.createElement("canvas"), o = i.getContext("2d");
    i.width = e.clientWidth, i.height = e.clientHeight, o?.drawImage(e, 0, 0, i.width, i.height);
    const s = i.toDataURL();
    return J(s);
  }
  const n = e.poster, a = re(n), r = await ce(n, a, t);
  return J(r);
}
async function Dt(e, t) {
  var n;
  try {
    if (!((n = e?.contentDocument) === null || n === void 0) && n.body)
      return await X(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Et(e, t) {
  return E(e, HTMLCanvasElement) ? St(e) : E(e, HTMLVideoElement) ? Ct(e, t) : E(e, HTMLIFrameElement) ? Dt(e, t) : e.cloneNode(Ee(e));
}
const kt = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Ee = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Tt(e, t, n) {
  var a, r;
  if (Ee(t))
    return t;
  let i = [];
  return kt(e) && e.assignedNodes ? i = L(e.assignedNodes()) : E(e, HTMLIFrameElement) && (!((a = e.contentDocument) === null || a === void 0) && a.body) ? i = L(e.contentDocument.body.childNodes) : i = L(((r = e.shadowRoot) !== null && r !== void 0 ? r : e).childNodes), i.length === 0 || E(e, HTMLVideoElement) || await i.reduce((o, s) => o.then(() => X(s, n)).then((u) => {
    u && t.appendChild(u);
  }), Promise.resolve()), t;
}
function Ft(e, t, n) {
  const a = t.style;
  if (!a)
    return;
  const r = window.getComputedStyle(e);
  r.cssText ? (a.cssText = r.cssText, a.transformOrigin = r.transformOrigin) : Ce(n).forEach((i) => {
    let o = r.getPropertyValue(i);
    i === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), E(e, HTMLIFrameElement) && i === "display" && o === "inline" && (o = "block"), i === "d" && t.getAttribute("d") && (o = `path(${t.getAttribute("d")})`), a.setProperty(i, o, r.getPropertyPriority(i));
  });
}
function Pt(e, t) {
  E(e, HTMLTextAreaElement) && (t.innerHTML = e.value), E(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function Rt(e, t) {
  if (E(e, HTMLSelectElement)) {
    const a = Array.from(t.children).find((r) => e.value === r.getAttribute("value"));
    a && a.setAttribute("selected", "");
  }
}
function It(e, t, n) {
  return E(t, Element) && (Ft(e, t, n), yt(e, t, n), Pt(e, t), Rt(e, t)), t;
}
async function Bt(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const a = {};
  for (let i = 0; i < n.length; i++) {
    const s = n[i].getAttribute("xlink:href");
    if (s) {
      const u = e.querySelector(s), m = document.querySelector(s);
      !u && m && !a[s] && (a[s] = await X(m, t, !0));
    }
  }
  const r = Object.values(a);
  if (r.length) {
    const i = "http://www.w3.org/1999/xhtml", o = document.createElementNS(i, "svg");
    o.setAttribute("xmlns", i), o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.overflow = "hidden", o.style.display = "none";
    const s = document.createElementNS(i, "defs");
    o.appendChild(s);
    for (let u = 0; u < r.length; u++)
      s.appendChild(r[u]);
    e.appendChild(o);
  }
  return e;
}
async function X(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((a) => Et(a, t)).then((a) => Tt(e, a, t)).then((a) => It(e, a, t)).then((a) => Bt(a, t));
}
const ke = /url\((['"]?)([^'"]+?)\1\)/g, Lt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Nt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function At(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function $t(e) {
  const t = [];
  return e.replace(ke, (n, a, r) => (t.push(r), n)), t.filter((n) => !ne(n));
}
async function zt(e, t, n, a, r) {
  try {
    const i = n ? rt(t, n) : t, o = re(t);
    let s;
    return r || (s = await ce(i, o, a)), e.replace(At(t), `$1${s}$3`);
  } catch {
  }
  return e;
}
function Mt(e, { preferredFontFormat: t }) {
  return t ? e.replace(Nt, (n) => {
    for (; ; ) {
      const [a, , r] = Lt.exec(n) || [];
      if (!r)
        return "";
      if (r === t)
        return `src: ${a};`;
    }
  }) : e;
}
function Te(e) {
  return e.search(ke) !== -1;
}
async function Fe(e, t, n) {
  if (!Te(e))
    return e;
  const a = Mt(e, n);
  return $t(a).reduce((i, o) => i.then((s) => zt(s, o, t, n)), Promise.resolve(a));
}
async function z(e, t, n) {
  var a;
  const r = (a = t.style) === null || a === void 0 ? void 0 : a.getPropertyValue(e);
  if (r) {
    const i = await Fe(r, null, n);
    return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function Ut(e, t) {
  await z("background", e, t) || await z("background-image", e, t), await z("mask", e, t) || await z("-webkit-mask", e, t) || await z("mask-image", e, t) || await z("-webkit-mask-image", e, t);
}
async function Ht(e, t) {
  const n = E(e, HTMLImageElement);
  if (!(n && !ne(e.src)) && !(E(e, SVGImageElement) && !ne(e.href.baseVal)))
    return;
  const a = n ? e.src : e.href.baseVal, r = await ce(a, re(a), t);
  await new Promise((i, o) => {
    e.onload = i, e.onerror = t.onImageErrorHandler ? (...u) => {
      try {
        i(t.onImageErrorHandler(...u));
      } catch (m) {
        o(m);
      }
    } : o;
    const s = e;
    s.decode && (s.decode = i), s.loading === "lazy" && (s.loading = "eager"), n ? (e.srcset = "", e.src = r) : e.href.baseVal = r;
  });
}
async function Vt(e, t) {
  const a = L(e.childNodes).map((r) => Pe(r, t));
  await Promise.all(a).then(() => e);
}
async function Pe(e, t) {
  E(e, Element) && (await Ut(e, t), await Ht(e, t), await Vt(e, t));
}
function Ot(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const a = t.style;
  return a != null && Object.keys(a).forEach((r) => {
    n[r] = a[r];
  }), e;
}
const fe = {};
async function ge(e) {
  let t = fe[e];
  if (t != null)
    return t;
  const a = await (await fetch(e)).text();
  return t = { url: e, cssText: a }, fe[e] = t, t;
}
async function ye(e, t) {
  let n = e.cssText;
  const a = /url\(["']?([^"')]+)["']?\)/g, i = (n.match(/url\([^)]+\)/g) || []).map(async (o) => {
    let s = o.replace(a, "$1");
    return s.startsWith("https://") || (s = new URL(s, e.url).href), De(s, t.fetchRequestInit, ({ result: u }) => (n = n.replace(o, `url(${u})`), [o, u]));
  });
  return Promise.all(i).then(() => n);
}
function pe(e) {
  if (e == null)
    return [];
  const t = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let a = e.replace(n, "");
  const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const u = r.exec(a);
    if (u === null)
      break;
    t.push(u[0]);
  }
  a = a.replace(r, "");
  const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, o = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", s = new RegExp(o, "gi");
  for (; ; ) {
    let u = i.exec(a);
    if (u === null) {
      if (u = s.exec(a), u === null)
        break;
      i.lastIndex = s.lastIndex;
    } else
      s.lastIndex = i.lastIndex;
    t.push(u[0]);
  }
  return t;
}
async function Wt(e, t) {
  const n = [], a = [];
  return e.forEach((r) => {
    if ("cssRules" in r)
      try {
        L(r.cssRules || []).forEach((i, o) => {
          if (i.type === CSSRule.IMPORT_RULE) {
            let s = o + 1;
            const u = i.href, m = ge(u).then((l) => ye(l, t)).then((l) => pe(l).forEach((h) => {
              try {
                r.insertRule(h, h.startsWith("@import") ? s += 1 : r.cssRules.length);
              } catch (b) {
                console.error("Error inserting rule from remote css", {
                  rule: h,
                  error: b
                });
              }
            })).catch((l) => {
              console.error("Error loading remote css", l.toString());
            });
            a.push(m);
          }
        });
      } catch (i) {
        const o = e.find((s) => s.href == null) || document.styleSheets[0];
        r.href != null && a.push(ge(r.href).then((s) => ye(s, t)).then((s) => pe(s).forEach((u) => {
          o.insertRule(u, o.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s);
        })), console.error("Error inlining remote css file", i);
      }
  }), Promise.all(a).then(() => (e.forEach((r) => {
    if ("cssRules" in r)
      try {
        L(r.cssRules || []).forEach((i) => {
          n.push(i);
        });
      } catch (i) {
        console.error(`Error while reading CSS rules from ${r.href}`, i);
      }
  }), n));
}
function _t(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Te(t.style.getPropertyValue("src")));
}
async function jt(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = L(e.ownerDocument.styleSheets), a = await Wt(n, t);
  return _t(a);
}
function Re(e) {
  return e.trim().replace(/["']/g, "");
}
function Gt(e) {
  const t = /* @__PURE__ */ new Set();
  function n(a) {
    (a.style.fontFamily || getComputedStyle(a).fontFamily).split(",").forEach((i) => {
      t.add(Re(i));
    }), Array.from(a.children).forEach((i) => {
      i instanceof HTMLElement && n(i);
    });
  }
  return n(e), t;
}
async function Ie(e, t) {
  const n = await jt(e, t), a = Gt(e);
  return (await Promise.all(n.filter((i) => a.has(Re(i.style.fontFamily))).map((i) => {
    const o = i.parentStyleSheet ? i.parentStyleSheet.href : null;
    return Fe(i.cssText, o, t);
  }))).join(`
`);
}
async function qt(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await Ie(e, t);
  if (n) {
    const a = document.createElement("style"), r = document.createTextNode(n);
    a.appendChild(r), e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a);
  }
}
async function Be(e, t = {}) {
  const { width: n, height: a } = ae(e, t), r = await X(e, t, !0);
  return await qt(r, t), await Pe(r, t), Ot(r, t), await ht(r, n, a);
}
async function H(e, t = {}) {
  const { width: n, height: a } = ae(e, t), r = await Be(e, t), i = await J(r), o = document.createElement("canvas"), s = o.getContext("2d"), u = t.pixelRatio || lt(), m = t.canvasWidth || n, l = t.canvasHeight || a;
  return o.width = m * u, o.height = l * u, t.skipAutoScale || st(o), o.style.width = `${m}`, o.style.height = `${l}`, t.backgroundColor && (s.fillStyle = t.backgroundColor, s.fillRect(0, 0, o.width, o.height)), s.drawImage(i, 0, 0, o.width, o.height), o;
}
async function Jt(e, t = {}) {
  const { width: n, height: a } = ae(e, t);
  return (await H(e, t)).getContext("2d").getImageData(0, 0, n, a).data;
}
async function Xt(e, t = {}) {
  return (await H(e, t)).toDataURL();
}
async function Kt(e, t = {}) {
  return (await H(e, t)).toDataURL("image/jpeg", t.quality || 1);
}
async function Yt(e, t = {}) {
  const n = await H(e, t);
  return await dt(n);
}
async function Qt(e, t = {}) {
  return Ie(e, t);
}
const Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFontEmbedCSS: Qt,
  toBlob: Yt,
  toCanvas: H,
  toJpeg: Kt,
  toPixelData: Jt,
  toPng: Xt,
  toSvg: Be
}, Symbol.toStringTag, { value: "Module" })), en = (e, t) => e.reduce((n, a) => {
  const r = String(a[t]);
  return n[r] || (n[r] = []), n[r].push(a), n;
}, {}), tn = (e, t, n = "asc") => [...e].sort((a, r) => {
  const i = a[t], o = r[t], s = i > o ? 1 : i < o ? -1 : 0;
  return n === "asc" ? s : -s;
}), nn = (e) => {
  const { value: t } = e, n = A(N), [a, r] = U(!1), i = we(null);
  if (!n) return null;
  const { state: o, labels: s, updateState: u, onDelete: m } = n, { width: l, ...h } = e.account || {}, { width: b, ...v } = e.amount || {};
  G(() => {
    const g = (w) => {
      i.current && !i.current.contains(w.target) && r(!1);
    };
    return a && document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [a]);
  const f = () => {
    u({ editingTransaction: t }), r(!1);
  }, p = () => {
    const g = (o.data || []).filter((w) => w !== t);
    m?.(t), u({ data: g }), r(!1);
  };
  return /* @__PURE__ */ d(
    "div",
    {
      className: "insertion",
      role: "row",
      tabIndex: 0,
      onKeyDown: (g) => {
        g.key === "Enter" || g.key === " " ? (g.preventDefault(), r(!a)) : g.key === "Escape" && r(!1);
      },
      children: [
        /* @__PURE__ */ c("div", { className: "debit flex-col", style: h, title: t.isDebit ? t.account : "", role: "cell", children: /* @__PURE__ */ c("div", { children: t.isDebit ? t.account : "" }) }),
        /* @__PURE__ */ c("div", { className: "credit flex-col", style: h, title: t.isDebit ? "" : t.account, role: "cell", children: /* @__PURE__ */ c("div", { children: t.isDebit ? "" : t.account }) }),
        /* @__PURE__ */ c("div", { className: "flex-col description", role: "cell", children: /* @__PURE__ */ c(
          "div",
          {
            className: "transaction-content",
            style: { marginLeft: t.isDebit ? 0 : 72 },
            children: t.text
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "amount-debit flex-col", style: v, role: "cell", children: /* @__PURE__ */ c("div", { children: t.isDebit ? B.currency(t.amount, t.currency, t.local) : "" }) }),
        /* @__PURE__ */ c("div", { className: "amount-credit flex-col", style: v, role: "cell", children: /* @__PURE__ */ c("div", { children: t.isDebit ? "" : B.currency(t.amount, t.currency, t.local) }) }),
        e.showEdit !== !1 && /* @__PURE__ */ d("div", { className: "row-actions", ref: i, children: [
          /* @__PURE__ */ c(
            "button",
            {
              className: "row-actions-trigger",
              onClick: () => r(!a),
              title: s.actions,
              "aria-haspopup": "true",
              "aria-expanded": a,
              children: /* @__PURE__ */ c(tt, { size: 14 })
            }
          ),
          a && /* @__PURE__ */ d("div", { className: "row-actions-menu", role: "menu", children: [
            /* @__PURE__ */ d("button", { role: "menuitem", onClick: f, onKeyDown: (g) => g.key === "Enter" && f(), children: [
              /* @__PURE__ */ c(Ke, { size: 13 }),
              " ",
              s.edit
            ] }),
            /* @__PURE__ */ d("button", { role: "menuitem", className: "danger", onClick: p, onKeyDown: (g) => g.key === "Enter" && p(), children: [
              /* @__PURE__ */ c(Se, { size: 13 }),
              " ",
              s.delete
            ] })
          ] })
        ] })
      ]
    }
  );
}, te = {
  padding: "8px 10px",
  border: "1px solid hsl(220, 13%, 91%)",
  borderRadius: "6px",
  fontSize: "13px",
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  background: "white",
  color: "hsl(224, 71%, 4%)"
}, an = () => {
  const e = A(N);
  if (!e) return null;
  const { state: t, labels: n, updateState: a } = e;
  return /* @__PURE__ */ d("div", { style: { display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ d("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ c(Ye, { size: 14, style: { position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ c(
        "input",
        {
          type: "text",
          placeholder: n.search,
          value: t.searchTerm || "",
          onChange: (r) => a({ searchTerm: r.target.value }),
          style: { ...te, paddingLeft: "32px", width: "180px" }
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
      /* @__PURE__ */ c(Qe, { size: 14, style: { color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ c(
        "input",
        {
          type: "date",
          value: t.dateFilter?.start || "",
          onChange: (r) => a({
            dateFilter: { ...t.dateFilter, start: r.target.value }
          }),
          style: te
        }
      ),
      /* @__PURE__ */ c("span", { style: { color: "hsl(220, 9%, 46%)", fontSize: "12px" }, children: n.to }),
      /* @__PURE__ */ c(
        "input",
        {
          type: "date",
          value: t.dateFilter?.end || "",
          onChange: (r) => a({
            dateFilter: { ...t.dateFilter, end: r.target.value }
          }),
          style: te
        }
      ),
      (t.searchTerm || t.dateFilter?.start || t.dateFilter?.end) && /* @__PURE__ */ c(
        "button",
        {
          onClick: () => a({ searchTerm: "", dateFilter: {} }),
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
          children: n.clear
        }
      )
    ] })
  ] });
}, xe = [
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
], rn = (e) => new Promise((t, n) => {
  const a = new FileReader();
  a.onload = (r) => {
    try {
      const s = (r.target?.result).split(`
`).slice(1).filter((u) => u.trim()).map((u) => {
        const m = u.split(","), l = parseFloat(m[3]) || 0, h = parseFloat(m[4]) || 0;
        return {
          date: m[0],
          account: m[1].replace(/"/g, ""),
          text: m[2].replace(/"/g, ""),
          amount: l || h,
          isDebit: l > 0,
          currency: (m[5] || "USD").trim()
        };
      });
      t(s);
    } catch (i) {
      n(i);
    }
  }, a.readAsText(e);
}), cn = (e) => {
  if (!e || e.length === 0) return [];
  const t = en(e, "date");
  return Object.entries(t).map(([n, a]) => ({ date: n, content: a }));
}, on = (e) => {
  const [t, n] = U("toPng"), a = A(N);
  if (!a) return null;
  const { state: r, labels: i, pageSize: o, undo: s, redo: u, updateState: m } = a, h = r.history.length > 1 ? r.data || [] : e.data && e.data.length > 0 ? e.data : r.data && r.data.length > 0 ? r.data : xe, b = le(() => {
    let y = h;
    if (r.searchTerm) {
      const x = r.searchTerm.toLowerCase();
      y = y.filter(
        (C) => C.text.toLowerCase().includes(x) || C.account.toLowerCase().includes(x)
      );
    }
    return r.dateFilter?.start && (y = y.filter((x) => x.date >= r.dateFilter.start)), r.dateFilter?.end && (y = y.filter((x) => x.date <= r.dateFilter.end)), y;
  }, [h, r.searchTerm, r.dateFilter]), v = le(() => r.sortField ? [...b].sort((y, x) => {
    let C, D;
    r.sortField === "date" ? (C = y.date, D = x.date) : r.sortField === "account" ? (C = y.account, D = x.account) : (C = y.amount, D = x.amount);
    const P = C > D ? 1 : C < D ? -1 : 0;
    return r.sortOrder === "desc" ? -P : P;
  }) : b, [b, r.sortField, r.sortOrder]), f = o ? Math.max(1, Math.ceil(v.length / o)) : 1, p = Math.min(r.currentPage, f), g = o ? v.slice((p - 1) * o, p * o) : v, w = b.filter((y) => y.isDebit).reduce((y, x) => y + x.amount, 0), I = b.filter((y) => !y.isDebit).reduce((y, x) => y + x.amount, 0), V = Math.abs(w - I) < 0.01, K = b[0]?.currency || "USD", Y = b[0]?.local, O = we(null), Le = async (y) => {
    const x = y.target.files?.[0];
    if (x) {
      try {
        const D = (await rn(x)).map((P) => ({ ...P, id: P.id || ve() }));
        m({ data: [...r.data || [], ...D] });
      } catch {
      }
      O.current && (O.current.value = "");
    }
  }, Ne = () => {
    const y = document.getElementById("diary");
    y && Zt[t === "toPdf" ? "toPng" : t](y, { backgroundColor: "#fff", quality: 1, pixelRatio: 10 }).then((x) => {
      let C = x.split(","), D = C[0].match(/:(.*?);/)?.[1], P = atob(C[1]), W = P.length, oe = new Uint8Array(W);
      for (; W--; ) oe[W] = P.charCodeAt(W);
      const Ae = new File([oe], "filename", { type: D });
      if (t === "toPdf") B.extractDoc(x);
      else if (D) {
        const _ = document.createElement("a");
        _.href = URL.createObjectURL(Ae), _.download = "export." + D.split("/")[1], _.click(), URL.revokeObjectURL(_.href);
      }
    }).catch((x) => console.error("Export failed:", x));
  }, ie = (y) => {
    m({ currentPage: Math.max(1, Math.min(y, f)) });
  };
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        border: "1px solid hsl(220, 13%, 91%)",
        minHeight: "650px",
        height: e.height,
        width: e.width,
        position: "relative",
        padding: 24,
        borderRadius: 12,
        boxSizing: "border-box",
        background: "white",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
        fontFamily: "var(--rad-font)"
      },
      children: [
        /* @__PURE__ */ d("div", { style: { display: "flex", marginBottom: 16, gap: e.compactButtons ? 4 : 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ d("div", { style: { display: "flex", gap: e.compactButtons ? 4 : 12, alignItems: "center", flexWrap: "wrap" }, children: [
            e.showExport !== !1 && /* @__PURE__ */ d("div", { className: "export", children: [
              /* @__PURE__ */ d(
                "button",
                {
                  id: t === "toJpeg" ? "active" : "",
                  onClick: () => n("toJpeg"),
                  style: { padding: e.compactButtons ? "4px 8px" : "8px 12px", fontSize: e.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(se, { size: e.compactButtons ? 10 : 12 }),
                    e.compactButtons ? "JPG" : "JPEG"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  id: t === "toPng" ? "active" : "",
                  onClick: () => n("toPng"),
                  style: { padding: e.compactButtons ? "4px 8px" : "8px 12px", fontSize: e.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(se, { size: e.compactButtons ? 10 : 12 }),
                    "PNG"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  id: t === "toPdf" ? "active" : "",
                  onClick: () => n("toPdf"),
                  style: { padding: e.compactButtons ? "4px 8px" : "8px 12px", fontSize: e.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(Ze, { size: e.compactButtons ? 10 : 12 }),
                    "PDF"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "global-action", style: { display: "flex", gap: e.compactButtons ? 2 : 8 }, children: [
              e.showUndo !== !1 && /* @__PURE__ */ d(S, { children: [
                /* @__PURE__ */ c(
                  "button",
                  {
                    className: "sample doer",
                    disabled: !(r.history.length > 1 && r.doIndex > 0),
                    onClick: () => s(),
                    title: "Undo",
                    style: { padding: e.compactButtons ? "4px" : "8px" },
                    children: /* @__PURE__ */ c(_e, { strokeWidth: 2.5, size: e.compactButtons ? 12 : 14 })
                  }
                ),
                /* @__PURE__ */ c(
                  "button",
                  {
                    className: "sample doer",
                    onClick: () => u(),
                    disabled: !(r.doIndex + 1 < r.history.length),
                    title: "Redo",
                    style: { padding: e.compactButtons ? "4px" : "8px" },
                    children: /* @__PURE__ */ c(je, { strokeWidth: 2.5, size: e.compactButtons ? 12 : 14 })
                  }
                )
              ] }),
              e.showSample !== !1 && /* @__PURE__ */ d(
                "button",
                {
                  className: "sample",
                  onClick: () => m({ data: xe }),
                  title: i.sample,
                  style: { padding: e.compactButtons ? "4px 8px" : "8px 12px", fontSize: e.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(et, { size: e.compactButtons ? 10 : 12 }),
                    e.compactButtons ? "Sample" : i.sample
                  ]
                }
              ),
              e.showClear !== !1 && /* @__PURE__ */ d(
                "button",
                {
                  className: "reset",
                  onClick: () => m({ data: [] }),
                  title: i.clear,
                  style: { padding: e.compactButtons ? "4px 8px" : "8px 12px", fontSize: e.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(Se, { size: e.compactButtons ? 10 : 12 }),
                    i.clear
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  className: "sample",
                  onClick: () => O.current?.click(),
                  title: "Import CSV",
                  style: { padding: e.compactButtons ? "4px 8px" : "8px 12px", fontSize: e.compactButtons ? "12px" : "14px" },
                  children: [
                    /* @__PURE__ */ c(qe, { size: e.compactButtons ? 10 : 12 }),
                    !e.compactButtons && /* @__PURE__ */ c("span", { style: { marginLeft: 4 }, children: "CSV" })
                  ]
                }
              ),
              /* @__PURE__ */ c(
                "input",
                {
                  ref: O,
                  type: "file",
                  accept: ".csv",
                  style: { display: "none" },
                  onChange: Le
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ d("div", { style: { display: "flex", gap: e.compactButtons ? 4 : 12, alignItems: "center" }, children: [
            e.showExport !== !1 && /* @__PURE__ */ d(
              "button",
              {
                className: "btn-export",
                style: {
                  backgroundColor: e.saveColor,
                  padding: e.compactButtons ? "6px 12px" : "8px 16px",
                  fontSize: e.compactButtons ? "12px" : "14px"
                },
                title: i.export,
                onClick: Ne,
                "aria-label": "Export accounting diary",
                role: "button",
                tabIndex: 0,
                children: [
                  /* @__PURE__ */ c(Ge, { size: e.compactButtons ? 16 : 20, "aria-hidden": "true" }),
                  /* @__PURE__ */ c("span", { children: e.compactButtons ? "" : i.export })
                ]
              }
            ),
            e.showAdd !== !1 && /* @__PURE__ */ c(at, {})
          ] })
        ] }),
        e.showSearch !== !1 && /* @__PURE__ */ c(an, {}),
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
                    color: e.titleColor || "#000",
                    border: `${e.titleBorder ? "2px" : "0"} solid rgba(0,0,0,.1)`,
                    background: e.titleBg,
                    textTransform: e.titleAllCaps ? "uppercase" : "none",
                    borderRadius: e.titleCorner || 8
                  },
                  role: "heading",
                  "aria-level": 1,
                  children: [
                    "Accounting diary for ",
                    e.title || "Test Model"
                  ]
                }
              ),
              g.length === 0 ? /* @__PURE__ */ d("div", { className: "empty-state", children: [
                /* @__PURE__ */ c("div", { className: "empty-state-icon", children: /* @__PURE__ */ d("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ c("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
                  /* @__PURE__ */ c("polyline", { points: "14 2 14 8 20 8" }),
                  /* @__PURE__ */ c("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
                  /* @__PURE__ */ c("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
                ] }) }),
                /* @__PURE__ */ c("p", { className: "empty-state-text", children: i.noData }),
                e.showAdd !== !1 && /* @__PURE__ */ c(
                  "button",
                  {
                    className: "empty-state-cta",
                    onClick: () => m({ openAddDialog: !0 }),
                    "aria-label": i.addTransaction,
                    children: i.addTransaction
                  }
                )
              ] }) : cn(g).map((y, x, C) => /* @__PURE__ */ d(be.Fragment, { children: [
                /* @__PURE__ */ c(
                  He,
                  {
                    date: y.date,
                    columnHeader: e.columnHeader,
                    columnHeaderColor: e.columnHeaderColor,
                    columnHeaderBgColor: e.columnHeaderBgColor,
                    index: x,
                    account: e.account,
                    amount: e.amount,
                    showEdit: e.showEdit
                  }
                ),
                tn(y.content, "isDebit", "asc").map((D, P) => /* @__PURE__ */ c(
                  nn,
                  {
                    value: D,
                    length: C.length,
                    account: e.account,
                    amount: e.amount,
                    showEdit: e.showEdit
                  },
                  D.id || P
                )),
                /* @__PURE__ */ c(
                  We,
                  {
                    account: e.account,
                    columnHeader: e.columnHeader,
                    index: x,
                    footer: e.footer,
                    amount: e.amount,
                    data: y.content,
                    showEdit: e.showEdit
                  }
                )
              ] }, y.date)),
              e.showGrandTotal !== !1 && b.length > 0 && /* @__PURE__ */ d("div", { className: "grand-total", children: [
                /* @__PURE__ */ d("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ c("span", { className: "grand-total-label", children: i.grandTotal }),
                  /* @__PURE__ */ d("span", { className: "grand-total-amounts", children: [
                    /* @__PURE__ */ d("span", { className: "grand-total-debit", children: [
                      i.debit,
                      ": ",
                      B.currency(w, K, Y)
                    ] }),
                    /* @__PURE__ */ d("span", { className: "grand-total-credit", children: [
                      i.credit,
                      ": ",
                      B.currency(I, K, Y)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ d("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ c("span", { className: "grand-total-label", children: i.balance }),
                  /* @__PURE__ */ c("span", { className: `balance-badge ${V ? "balanced" : "unbalanced"}`, children: V ? `✓ ${i.balanced}` : `⚠ ${i.unbalanced} (${B.currency(Math.abs(w - I), K, Y)})` })
                ] })
              ] })
            ]
          }
        ),
        o && f > 1 && /* @__PURE__ */ d("div", { className: "pagination", children: [
          /* @__PURE__ */ c("button", { disabled: p <= 1, onClick: () => ie(p - 1), children: "←" }),
          /* @__PURE__ */ d("span", { children: [
            i.page,
            " ",
            p,
            " ",
            i.of,
            " ",
            f
          ] }),
          /* @__PURE__ */ c("button", { disabled: p >= f, onClick: () => ie(p + 1), children: "→" })
        ] })
      ]
    }
  );
}, ln = {
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
}, sn = {
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
}, dn = $e(void 0), un = ({ children: e }) => {
  const [t, n] = U(!1), a = t ? sn : ln, r = () => n(!t);
  return /* @__PURE__ */ c(dn.Provider, { value: { theme: a, toggleTheme: r }, children: e });
}, fn = (e) => /* @__PURE__ */ c(un, { children: /* @__PURE__ */ c(
  Ue,
  {
    labels: e.labels,
    pageSize: e.pageSize,
    onAdd: e.onAdd,
    onDelete: e.onDelete,
    onEdit: e.onEdit,
    onChange: e.onChange,
    children: /* @__PURE__ */ c(on, { ...e })
  }
) });
export {
  on as AccountingDiary,
  fn as AccountingDiaryWrapper,
  at as DialogOperation,
  We as Footer,
  Ue as GlobalProvider,
  He as Header,
  fn as default,
  Me as defaultLabels
};
