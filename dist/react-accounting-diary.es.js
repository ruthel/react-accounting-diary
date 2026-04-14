(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('@charset "UTF-8";.dialog-overlay{position:fixed;inset:0;z-index:1000;background:#0006;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;animation:overlayIn .15s ease}@keyframes overlayIn{0%{opacity:0}to{opacity:1}}.dialog-modal{background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:calc(var(--rad-radius) + 4px);box-shadow:0 16px 70px -12px #00000040;width:440px;max-width:calc(100vw - 32px);max-height:calc(100vh - 64px);overflow-y:auto;font-family:var(--rad-font);animation:modalIn .2s cubic-bezier(.16,1,.3,1)}@keyframes modalIn{0%{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}.dialog-header{display:flex;justify-content:space-between;align-items:flex-start;padding:24px 24px 0}.dialog-title{margin:0;font-weight:600;font-size:16px;color:var(--rad-text);letter-spacing:-.02em;line-height:1.4}.dialog-description{margin:4px 0 0;font-size:13px;color:var(--rad-text-muted);line-height:1.4}.dialog-close{background:none;border:none;cursor:pointer;padding:6px;border-radius:var(--rad-radius-sm);color:var(--rad-text-muted);transition:all var(--rad-transition);flex-shrink:0}.dialog-close:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.dialog-body{padding:20px 24px;display:flex;flex-direction:column;gap:16px}.dialog-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:end}.dialog-footer{display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--rad-border-color);background:var(--rad-bg-muted);border-radius:0 0 calc(var(--rad-radius) + 4px) calc(var(--rad-radius) + 4px)}.btn-cancel,.btn-confirm{padding:8px 16px;border-radius:var(--rad-radius-sm);font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition)}.btn-cancel:active,.btn-confirm:active{transform:scale(.98)}.btn-cancel:focus-visible,.btn-confirm:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-cancel{background:var(--rad-bg);color:var(--rad-text-secondary);border:1px solid var(--rad-border-color);box-shadow:var(--rad-shadow-sm)}.btn-cancel:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.btn-confirm{background:var(--rad-text);color:#fff;border:none;box-shadow:var(--rad-shadow-sm)}.btn-confirm:hover{opacity:.9}.control{display:flex;flex-direction:column;margin:0}.control label{display:block;font-size:12px;margin-bottom:6px;font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.control input,.control select,.control textarea{width:100%;height:36px;padding:0 10px;border-radius:var(--rad-radius-sm);box-sizing:border-box;border:1px solid var(--rad-border-color);font-size:13px;font-family:inherit;transition:all var(--rad-transition);background:var(--rad-bg);color:var(--rad-text)}.control input::placeholder,.control select::placeholder,.control textarea::placeholder{color:var(--rad-text-muted)}.control input:hover,.control select:hover,.control textarea:hover{border-color:#c5cad3}.control input:focus,.control select:focus,.control textarea:focus{outline:none;border-color:var(--rad-primary);box-shadow:0 0 0 3px var(--rad-primary-ring)}.control textarea{height:auto;min-height:60px;padding:8px 10px;resize:vertical;line-height:1.5}.control select{cursor:pointer}.control-check{display:flex;align-items:center;margin:0;gap:8px;height:36px}.control-check label{font-size:13px;font-weight:500;color:var(--rad-text);margin:0;cursor:pointer;-webkit-user-select:none;user-select:none}.control-check input{width:16px;height:16px;cursor:pointer;accent-color:var(--rad-primary);border-radius:4px;flex-shrink:0}:root{--rad-font: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-border: 1px;--rad-border-color: hsl(220, 13%, 91%);--rad-primary: hsl(221, 83%, 53%);--rad-primary-hover: hsl(221, 83%, 46%);--rad-primary-ring: hsla(221, 83%, 53%, .15);--rad-danger: hsl(0, 84%, 60%);--rad-danger-hover: hsl(0, 84%, 53%);--rad-danger-ring: hsla(0, 84%, 60%, .15);--rad-success: hsl(142, 71%, 45%);--rad-success-hover: hsl(142, 71%, 38%);--rad-success-ring: hsla(142, 71%, 45%, .15);--rad-bg: hsl(0, 0%, 100%);--rad-bg-muted: hsl(220, 14%, 96%);--rad-bg-hover: hsl(220, 14%, 96%);--rad-text: hsl(224, 71%, 4%);--rad-text-muted: hsl(220, 9%, 46%);--rad-text-secondary: hsl(220, 9%, 36%);--rad-radius: 8px;--rad-radius-sm: 6px;--rad-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--rad-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);--rad-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--rad-transition: .15s cubic-bezier(.4, 0, .2, 1)}.insertion{display:flex;width:100%;font-size:13px;font-family:var(--rad-font);border-bottom:var(--rad-border) solid var(--rad-border-color);transition:background var(--rad-transition);align-items:stretch}.insertion:hover{background:var(--rad-bg-hover)}.flex-col{display:flex;flex-direction:column;justify-content:center}.description{border-left:var(--rad-border) solid var(--rad-border-color)!important;border-right:var(--rad-border) solid var(--rad-border-color)!important;padding:8px 16px;flex:1;min-width:150px;min-height:36px;box-sizing:border-box}.border-bottom{border-bottom:var(--rad-border) solid var(--rad-border-color)!important}.border-top{border-top:2px solid var(--rad-border-color)!important}.date,.transaction-title{text-align:center;padding:6px 0;font-size:13px}.date{font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.transaction-content{flex:1;color:var(--rad-text-muted);line-height:1.5}.debit,.credit{padding:8px 12px;border-left:var(--rad-border) solid var(--rad-border-color)!important;text-align:center;font-weight:500;color:var(--rad-text);min-width:140px;max-width:160px;min-height:36px;box-sizing:border-box;flex-shrink:0}.debit div,.credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-debit,.amount-credit{padding:8px 12px;border-right:var(--rad-border) solid var(--rad-border-color)!important;text-align:right;font-weight:500;color:var(--rad-text);font-variant-numeric:tabular-nums;font-family:var(--rad-font-mono);min-width:120px;max-width:180px;min-height:36px;box-sizing:border-box;flex-shrink:0}.amount-debit div,.amount-credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}html,body,#root{height:100%}#root{overflow-y:auto;padding:32px;box-sizing:border-box;background:var(--rad-bg-muted)}.btn-export{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 16px;height:36px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;font-weight:500;font-size:13px;cursor:pointer;box-shadow:var(--rad-shadow-sm);transition:all var(--rad-transition);letter-spacing:-.01em}.btn-export:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-export:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-export:active{transform:scale(.98)}.btn-save-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-save-accounting:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-save-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-add-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-add-accounting:hover{opacity:.9;box-shadow:var(--rad-shadow)}.btn-add-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-text)}.btn-add-accounting:active{transform:scale(.96)}.export{display:inline-flex;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);overflow:hidden;background:var(--rad-bg);box-shadow:var(--rad-shadow-sm)}.export button{background:var(--rad-bg);border:none;cursor:pointer;padding:8px 14px;transition:all var(--rad-transition);font-weight:500;font-size:12px;color:var(--rad-text-muted);border-right:1px solid var(--rad-border-color)}.export button:last-child{border-right:none}.export button:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.export button:active,.export button#active{background:var(--rad-text);color:#fff}.global-action{display:flex;gap:6px;align-items:center}.global-action button{padding:8px 12px;cursor:pointer;font-size:12px;font-weight:500;border-radius:var(--rad-radius-sm);transition:all var(--rad-transition);border:1px solid var(--rad-border-color);background:var(--rad-bg);color:var(--rad-text-secondary);box-shadow:var(--rad-shadow-sm)}.global-action button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text);box-shadow:var(--rad-shadow)}.global-action button:active:not(:disabled){transform:scale(.98)}.global-action button:disabled{opacity:.5;cursor:not-allowed}.global-action .reset{border-color:var(--rad-danger);color:var(--rad-danger);background:var(--rad-bg)}.global-action .reset:hover:not(:disabled){background:var(--rad-danger-ring);color:var(--rad-danger-hover)}.global-action .sample.doer{background:var(--rad-text);border-color:var(--rad-text);color:#fff;padding:8px 10px}.global-action .sample.doer:hover:not(:disabled){opacity:.9;background:var(--rad-text);color:#fff}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px;gap:12px}.empty-state .empty-state-icon{color:var(--rad-border-color);margin-bottom:4px}.empty-state .empty-state-text{color:var(--rad-text-muted);font-size:14px;margin:0}.empty-state .empty-state-cta{margin-top:8px;padding:8px 20px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.empty-state .empty-state-cta:hover{opacity:.9;box-shadow:var(--rad-shadow)}.empty-state .empty-state-cta:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.insertion:focus{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary-ring);background:var(--rad-bg-hover)}.insertion:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary);background:var(--rad-bg-hover)}.grand-total{margin-top:16px;padding:12px 16px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg-muted);font-family:var(--rad-font)}.grand-total .grand-total-row{display:flex;justify-content:space-between;align-items:center;padding:4px 0}.grand-total .grand-total-row:not(:last-child){border-bottom:1px solid var(--rad-border-color);padding-bottom:8px;margin-bottom:8px}.grand-total .grand-total-label{font-weight:600;font-size:13px;color:var(--rad-text);text-transform:uppercase;letter-spacing:.02em}.grand-total .grand-total-amounts{display:flex;gap:24px;font-size:13px;font-weight:600;font-family:var(--rad-font-mono);font-variant-numeric:tabular-nums}.grand-total .grand-total-debit,.grand-total .grand-total-credit{color:var(--rad-text)}.balance-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600}.balance-badge.balanced{background:var(--rad-success-ring);color:var(--rad-success)}.balance-badge.unbalanced{background:var(--rad-danger-ring);color:var(--rad-danger)}.pagination{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:16px;font-family:var(--rad-font);font-size:13px;color:var(--rad-text-muted)}.pagination button{padding:6px 12px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg);cursor:pointer;font-size:13px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.pagination button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text)}.pagination button:disabled{opacity:.4;cursor:not-allowed}.row-actions{position:relative;display:flex;align-items:center;width:32px;justify-content:center}.row-actions .row-actions-trigger{background:none;border:none;cursor:pointer;padding:4px;border-radius:var(--rad-radius-sm);opacity:.6;transition:all var(--rad-transition);display:flex;align-items:center;justify-content:center}.row-actions .row-actions-trigger:hover{background:var(--rad-success);color:#fff;opacity:1}.row-actions .row-actions-menu{position:absolute;right:0;top:100%;z-index:10;background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);box-shadow:var(--rad-shadow-md);min-width:120px;overflow:hidden}.row-actions .row-actions-menu button{display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;border:none;background:none;cursor:pointer;font-size:12px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition)}.row-actions .row-actions-menu button:hover{background:var(--rad-success);color:#fff}.row-actions .row-actions-menu button.danger:hover{background:var(--rad-danger);color:#fff}')),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsx as c, jsxs as d, Fragment as F } from "react/jsx-runtime";
import Pt, { useState as _, useCallback as M, useContext as W, useEffect as nt, useRef as ut, useMemo as K, forwardRef as It, useImperativeHandle as Xt, createContext as Kt } from "react";
let Yt = 0;
const J = () => `txn_${Date.now()}_${++Yt}`, Qt = {
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
  actions: "Actions",
  category: "Category",
  tags: "Tags",
  ledgerView: "Ledger View",
  diaryView: "Diary View",
  runningBalance: "Running Balance",
  importJSON: "Import JSON"
}, H = Pt.createContext(void 0), Zt = ({ children: t, labels: e, pageSize: n, onAdd: r, onDelete: o, onEdit: a, onChange: i, onBeforeAdd: l, onBeforeEdit: h, onBeforeDelete: p }) => {
  const u = { ...Qt, ...e }, [b, s] = _({
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
    currentPage: 1,
    viewMode: "diary"
  }), g = M(() => {
    s((f) => {
      if (f.doIndex > 0) {
        const w = f.history[f.doIndex - 1];
        return i?.(w), {
          ...f,
          data: w,
          doIndex: f.doIndex - 1
        };
      }
      return f;
    });
  }, [i]), R = M(() => {
    s((f) => {
      let w = f.doIndex + 1;
      if (w < f.history.length) {
        const k = f.history[w];
        return i?.(k), {
          ...f,
          data: k,
          doIndex: w
        };
      }
      return f;
    });
  }, [i]), E = M((f) => {
    s((w) => {
      if ("data" in f && !("doIndex" in f)) {
        const k = f.data, x = [...[...w.history].slice(0, w.doIndex + 1), k];
        return i?.(k), {
          ...w,
          ...f,
          data: k,
          history: x,
          doIndex: x.length - 1
        };
      }
      return { ...w, ...f };
    });
  }, [i]), D = {
    state: b,
    labels: u,
    pageSize: n,
    undo: g,
    redo: R,
    updateState: E,
    onAdd: r,
    onDelete: o,
    onEdit: a,
    onChange: i,
    onBeforeAdd: l,
    onBeforeEdit: h,
    onBeforeDelete: p
  };
  return /* @__PURE__ */ c(H.Provider, { value: D, children: t });
}, U = "var(--rad-border) solid var(--rad-border-color)", it = ({ field: t }) => {
  const e = W(H);
  if (!e) return null;
  const { state: n } = e;
  return n.sortField !== t ? /* @__PURE__ */ c("span", { style: { opacity: 0.3, marginLeft: 4, fontSize: 10 }, children: "↕" }) : /* @__PURE__ */ c("span", { style: { marginLeft: 4, fontSize: 10 }, children: n.sortOrder === "asc" ? "↑" : "↓" });
}, te = (t) => {
  const e = W(H);
  if (!e) return null;
  const { labels: n, state: r, updateState: o } = e;
  let { date: a, index: i, columnHeader: l, columnHeaderColor: h, columnHeaderBgColor: p } = t;
  const u = i === 0 && l, b = `${a.split("-")[2]}/${a.split("-")[1]}/${a.split("-")[0]}`, { width: s, ...g } = t.account || {}, { width: R, ...E } = t.amount || {}, D = (w) => {
    const k = r.sortField === w && r.sortOrder === "asc" ? "desc" : "asc";
    o({ sortField: w, sortOrder: k });
  }, f = u ? { cursor: "pointer", userSelect: "none" } : {};
  return /* @__PURE__ */ d("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...g,
          borderTop: u ? U : "",
          borderBottom: u ? U : "",
          background: u ? p : ""
        },
        role: "columnheader",
        onClick: u ? () => D("account") : void 0,
        children: u ? /* @__PURE__ */ d("div", { className: "date", style: { color: h, ...f }, children: [
          n.debit,
          /* @__PURE__ */ c(it, { field: "account" })
        ] }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...g,
          borderTop: u ? U : "",
          borderBottom: u ? U : "",
          background: u ? p : ""
        },
        role: "columnheader",
        children: u ? /* @__PURE__ */ c("div", { className: "date", style: { color: h }, children: n.credit }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        style: {
          flex: 1,
          minWidth: 150,
          borderTop: u ? U : "",
          borderBottom: u ? U : "",
          background: u ? p : ""
        },
        role: "columnheader",
        onClick: u ? () => D("date") : void 0,
        children: u ? /* @__PURE__ */ d("div", { className: "date", style: { color: h, ...f }, children: [
          b,
          /* @__PURE__ */ c(it, { field: "date" })
        ] }) : /* @__PURE__ */ c(
          "div",
          {
            className: `flex-col description ${i === 0 ? "border-top" : ""}`,
            style: {
              borderTopLeftRadius: i === 0 && !l ? 6 : 0,
              borderTopRightRadius: i === 0 && !l ? 6 : 0,
              borderBottom: "none"
            },
            children: /* @__PURE__ */ c("div", { className: "date", children: b })
          }
        )
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "amount-debit flex-col",
        style: {
          ...E,
          borderTop: u ? U : "",
          borderBottom: u ? U : "",
          background: u ? p : ""
        },
        role: "columnheader",
        onClick: u ? () => D("amount") : void 0,
        children: u ? /* @__PURE__ */ d("div", { className: "date", style: { color: h, ...f }, children: [
          n.debit,
          /* @__PURE__ */ c(it, { field: "amount" })
        ] }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...E,
          borderTop: u ? U : "",
          borderBottom: u ? U : "",
          background: u ? p : ""
        },
        role: "columnheader",
        children: u ? /* @__PURE__ */ c("div", { className: "date", style: { color: h }, children: n.credit }) : /* @__PURE__ */ c("div", { className: "date", children: " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ c("div", { style: { width: 32, flexShrink: 0 } })
  ] });
};
let lt = null;
const ee = async () => (lt || (lt = (await import("pdfmake")).default), lt), ne = async (t) => {
  (await ee()).createPdf({
    pageMargins: 0,
    content: [
      {
        image: t,
        width: 595
      }
    ]
  }).download();
};
class N {
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
    ne(e);
  }
}
const et = "var(--rad-border) solid var(--rad-border-color)", ae = (t) => {
  const e = W(H);
  if (!e) return null;
  const { labels: n } = e, r = (t.data || []).filter((b) => b.isDebit).reduce((b, s) => b + s.amount, 0), o = (t.data || []).filter((b) => !b.isDebit).reduce((b, s) => b + s.amount, 0), a = t.data?.[0]?.currency || "USD", i = t.data?.[0]?.local, { width: l, ...h } = t.account || {}, { width: p, ...u } = t.amount || {};
  return /* @__PURE__ */ d("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...h,
          borderBottom: t.columnHeader ? et : ""
        },
        children: /* @__PURE__ */ c("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...h,
          borderBottom: t.columnHeader ? et : ""
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
              ...t.footer,
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
          ...u,
          borderBottom: t.columnHeader ? et : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ c("div", { className: "transaction-title", children: r > 0 ? N.currency(r, a, i) : " " })
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...u,
          borderBottom: t.columnHeader ? et : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ c("div", { className: "transaction-title", children: o > 0 ? N.currency(o, a, i) : " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ c("div", { style: { width: 32, flexShrink: 0 } })
  ] });
}, L = { size: 16, strokeWidth: 2 }, $ = (t, e) => /* @__PURE__ */ c(
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
), re = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("polyline", { points: "1 4 1 10 7 10" }),
    /* @__PURE__ */ c("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
  ] }));
}, ce = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("polyline", { points: "23 4 23 10 17 10" }),
    /* @__PURE__ */ c("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })
  ] }));
}, oe = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ c("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ c("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] }));
}, wt = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ c("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ c("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
  ] }));
}, ie = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ c("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }));
}, le = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ c("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] }));
}, se = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ c(F, { children: /* @__PURE__ */ c("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }) }));
}, de = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ c("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ] }));
}, ue = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ c("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ c("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ c("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }));
}, vt = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ c("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ c("circle", { cx: "10", cy: "13", r: "2" }),
    /* @__PURE__ */ c("path", { d: "m20 17-1.1-1.1a2 2 0 0 0-2.81 0L10 22" })
  ] }));
}, he = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ c("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ c("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ c("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ c("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
  ] }));
}, Nt = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("polyline", { points: "3 6 5 6 21 6" }),
    /* @__PURE__ */ c("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    /* @__PURE__ */ c("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    /* @__PURE__ */ c("line", { x1: "14", y1: "11", x2: "14", y2: "17" })
  ] }));
}, me = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    /* @__PURE__ */ c("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    /* @__PURE__ */ c("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ] }));
}, fe = (t = {}) => {
  const e = { ...L, ...t };
  return $(e, /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ c("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ c("circle", { cx: "12", cy: "19", r: "1" })
  ] }));
}, ge = [
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
], St = {
  open: !1,
  isDebit: !1,
  amount: "",
  account: "",
  text: "",
  date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  currency: "USD",
  category: "",
  tags: ""
}, ye = () => {
  const t = W(H), [e, n] = _(St);
  nt(() => {
    const s = t?.state.editingTransaction;
    s && n({
      open: !0,
      isDebit: s.isDebit ?? !1,
      amount: s.amount,
      account: s.account,
      text: s.text,
      date: s.date,
      currency: s.currency || "USD",
      category: s.category || "",
      tags: s.tags?.join(", ") || ""
    });
  }, [t?.state.editingTransaction]), nt(() => {
    t?.state.openAddDialog && (n((s) => ({ ...s, open: !0 })), t.updateState({ openAddDialog: !1 }));
  }, [t?.state.openAddDialog]), nt(() => {
    if (!e.open) return;
    const s = (g) => {
      g.key === "Escape" && o();
    };
    return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [e.open]);
  const r = M(() => {
    n((s) => ({ ...s, open: !0 }));
  }, []), o = M(() => {
    n(St), t?.state.editingTransaction && t.updateState({ editingTransaction: void 0 });
  }, [t]);
  if (!t) return null;
  const { labels: a, onAdd: i, onEdit: l, onBeforeAdd: h, onBeforeEdit: p } = t, u = async () => {
    const s = Number(e.amount), g = e.account.trim(), R = e.text.trim(), E = e.date, D = e.category.trim() || void 0, f = e.tags.trim() ? e.tags.split(",").map((B) => B.trim()).filter(Boolean) : void 0;
    if (!s || s <= 0 || !g || !R || !E || isNaN(new Date(E).getTime())) return;
    const w = [...t.state.data || []], k = t.state.editingTransaction;
    if (k) {
      const B = w.findIndex((x) => x.id === k.id);
      if (B !== -1) {
        const x = { ...w[B], amount: s, account: g, isDebit: e.isDebit, text: R, date: E, currency: e.currency, category: D, tags: f };
        if (p && !await p(w[B], x)) return;
        l?.(w[B], x), w[B] = x;
      }
      t.updateState({ data: w, editingTransaction: void 0 });
    } else {
      const B = { id: J(), amount: s, account: g, isDebit: e.isDebit, text: R, date: E, currency: e.currency, category: D, tags: f };
      if (h && !await h(B)) return;
      i?.(B), w.push(B), t.updateState({ data: w });
    }
    o();
  }, b = !!t.state.editingTransaction;
  return /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ c("button", { onClick: r, className: "btn-add-accounting", title: a.addTransaction, children: /* @__PURE__ */ c(ie, { size: 20 }) }),
    e.open && /* @__PURE__ */ c("div", { className: "dialog-overlay", onClick: o, children: /* @__PURE__ */ d("div", { className: "dialog-modal", onClick: (s) => s.stopPropagation(), children: [
      /* @__PURE__ */ d("div", { className: "dialog-header", children: [
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ c("h3", { className: "dialog-title", children: b ? a.editTransaction : a.addTransaction }),
          /* @__PURE__ */ c("p", { className: "dialog-description", children: b ? a.modifyDescription : a.addDescription })
        ] }),
        /* @__PURE__ */ c("button", { onClick: o, className: "dialog-close", children: /* @__PURE__ */ c(le, { size: 16 }) })
      ] }),
      /* @__PURE__ */ d("div", { className: "dialog-body", children: [
        /* @__PURE__ */ d("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-amount", children: a.amount }),
            /* @__PURE__ */ c(
              "input",
              {
                id: "rad-amount",
                placeholder: "0.00",
                type: "number",
                step: "0.01",
                min: "0",
                value: e.amount || "",
                onChange: (s) => n((g) => ({ ...g, amount: s.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-currency", children: a.currency }),
            /* @__PURE__ */ c(
              "select",
              {
                id: "rad-currency",
                value: e.currency,
                onChange: (s) => n((g) => ({ ...g, currency: s.target.value })),
                children: ge.map((s) => /* @__PURE__ */ c("option", { value: s[1], children: s[0] }, s[1]))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-account", children: a.account }),
            /* @__PURE__ */ c(
              "input",
              {
                autoFocus: !0,
                id: "rad-account",
                placeholder: "e.g., Cash, Bank, Rent",
                value: e.account,
                onChange: (s) => n((g) => ({ ...g, account: s.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-date", children: a.date }),
            /* @__PURE__ */ c(
              "input",
              {
                id: "rad-date",
                type: "date",
                value: e.date,
                onChange: (s) => n((g) => ({ ...g, date: s.target.value }))
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
              checked: e.isDebit,
              onChange: (s) => n((g) => ({ ...g, isDebit: s.target.checked }))
            }
          ),
          /* @__PURE__ */ c("label", { htmlFor: "rad-isDebit", children: a.debitTransaction })
        ] }),
        /* @__PURE__ */ d("div", { className: "control", children: [
          /* @__PURE__ */ c("label", { htmlFor: "rad-description", children: a.description }),
          /* @__PURE__ */ c(
            "textarea",
            {
              id: "rad-description",
              rows: 2,
              placeholder: "Describe the transaction...",
              value: e.text,
              onChange: (s) => n((g) => ({ ...g, text: s.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-category", children: a.category }),
            /* @__PURE__ */ c(
              "input",
              {
                id: "rad-category",
                placeholder: "e.g., Operating, Investing",
                value: e.category,
                onChange: (s) => n((g) => ({ ...g, category: s.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "control", children: [
            /* @__PURE__ */ c("label", { htmlFor: "rad-tags", children: a.tags }),
            /* @__PURE__ */ c(
              "input",
              {
                id: "rad-tags",
                placeholder: "e.g., rent, monthly (comma-separated)",
                value: e.tags,
                onChange: (s) => n((g) => ({ ...g, tags: s.target.value }))
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "dialog-footer", children: [
        /* @__PURE__ */ c("button", { onClick: o, className: "btn-cancel", children: a.cancel }),
        /* @__PURE__ */ c("button", { onClick: u, className: "btn-confirm", children: b ? a.update : a.save })
      ] })
    ] }) })
  ] });
};
function pe(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), o = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(o), e && (r.href = e), o.href = t, o.href;
}
const xe = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function V(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
let G = null;
function At(t = {}) {
  return G || (t.includeStyleProperties ? (G = t.includeStyleProperties, G) : (G = V(window.getComputedStyle(document.documentElement)), G));
}
function at(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function be(t) {
  const e = at(t, "border-left-width"), n = at(t, "border-right-width");
  return t.clientWidth + e + n;
}
function we(t) {
  const e = at(t, "border-top-width"), n = at(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function mt(t, e = {}) {
  const n = e.width || be(t), r = e.height || we(t);
  return { width: n, height: r };
}
function ve() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const z = 16384;
function Se(t) {
  (t.width > z || t.height > z) && (t.width > z && t.height > z ? t.width > t.height ? (t.height *= z / t.width, t.width = z) : (t.width *= z / t.height, t.height = z) : t.width > z ? (t.height *= z / t.width, t.width = z) : (t.width *= z / t.height, t.height = z));
}
function Ce(t, e = {}) {
  return t.toBlob ? new Promise((n) => {
    t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1);
  }) : new Promise((n) => {
    const r = window.atob(t.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1]), o = r.length, a = new Uint8Array(o);
    for (let i = 0; i < o; i += 1)
      a[i] = r.charCodeAt(i);
    n(new Blob([a], {
      type: e.type ? e.type : "image/png"
    }));
  });
}
function rt(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => e(r));
      });
    }, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function De(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Ee(t, e, n) {
  const r = "http://www.w3.org/2000/svg", o = document.createElementNS(r, "svg"), a = document.createElementNS(r, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${n}`), o.setAttribute("viewBox", `0 0 ${e} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(t), De(o);
}
const A = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || A(n, e);
};
function Te(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function ke(t, e) {
  return At(e).map((n) => {
    const r = t.getPropertyValue(n), o = t.getPropertyPriority(n);
    return `${n}: ${r}${o ? " !important" : ""};`;
  }).join(" ");
}
function Be(t, e, n, r) {
  const o = `.${t}:${e}`, a = n.cssText ? Te(n) : ke(n, r);
  return document.createTextNode(`${o}{${a}}`);
}
function Ct(t, e, n, r) {
  const o = window.getComputedStyle(t, n), a = o.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const i = xe();
  try {
    e.className = `${e.className} ${i}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild(Be(i, n, o, r)), e.appendChild(l);
}
function Fe(t, e, n) {
  Ct(t, e, ":before", n), Ct(t, e, ":after", n);
}
const Dt = "application/font-woff", Et = "image/jpeg", Re = {
  woff: Dt,
  woff2: Dt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Et,
  jpeg: Et,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Pe(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function ft(t) {
  const e = Pe(t).toLowerCase();
  return Re[e] || "";
}
function Ie(t) {
  return t.split(/,/)[1];
}
function ht(t) {
  return t.search(/^(data:)/) !== -1;
}
function Ne(t, e) {
  return `data:${e};base64,${t}`;
}
async function Lt(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const o = await r.blob();
  return new Promise((a, i) => {
    const l = new FileReader();
    l.onerror = i, l.onloadend = () => {
      try {
        a(n({ res: r, result: l.result }));
      } catch (h) {
        i(h);
      }
    }, l.readAsDataURL(o);
  });
}
const st = {};
function Ae(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function gt(t, e, n) {
  const r = Ae(t, e, n.includeQueryParams);
  if (st[r] != null)
    return st[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const a = await Lt(t, n.fetchRequestInit, ({ res: i, result: l }) => (e || (e = i.headers.get("Content-Type") || ""), Ie(l)));
    o = Ne(a, e);
  } catch (a) {
    o = n.imagePlaceholder || "";
    let i = `Failed to fetch resource: ${t}`;
    a && (i = typeof a == "string" ? a : a.message), i && console.warn(i);
  }
  return st[r] = o, o;
}
async function Le(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : rt(e);
}
async function $e(t, e) {
  if (t.currentSrc) {
    const a = document.createElement("canvas"), i = a.getContext("2d");
    a.width = t.clientWidth, a.height = t.clientHeight, i?.drawImage(t, 0, 0, a.width, a.height);
    const l = a.toDataURL();
    return rt(l);
  }
  const n = t.poster, r = ft(n), o = await gt(n, r, e);
  return rt(o);
}
async function ze(t, e) {
  var n;
  try {
    if (!((n = t?.contentDocument) === null || n === void 0) && n.body)
      return await ct(t.contentDocument.body, e, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Me(t, e) {
  return A(t, HTMLCanvasElement) ? Le(t) : A(t, HTMLVideoElement) ? $e(t, e) : A(t, HTMLIFrameElement) ? ze(t, e) : t.cloneNode($t(t));
}
const Ue = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT", $t = (t) => t.tagName != null && t.tagName.toUpperCase() === "SVG";
async function Oe(t, e, n) {
  var r, o;
  if ($t(e))
    return e;
  let a = [];
  return Ue(t) && t.assignedNodes ? a = V(t.assignedNodes()) : A(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? a = V(t.contentDocument.body.childNodes) : a = V(((o = t.shadowRoot) !== null && o !== void 0 ? o : t).childNodes), a.length === 0 || A(t, HTMLVideoElement) || await a.reduce((i, l) => i.then(() => ct(l, n)).then((h) => {
    h && e.appendChild(h);
  }), Promise.resolve()), e;
}
function He(t, e, n) {
  const r = e.style;
  if (!r)
    return;
  const o = window.getComputedStyle(t);
  o.cssText ? (r.cssText = o.cssText, r.transformOrigin = o.transformOrigin) : At(n).forEach((a) => {
    let i = o.getPropertyValue(a);
    a === "font-size" && i.endsWith("px") && (i = `${Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1}px`), A(t, HTMLIFrameElement) && a === "display" && i === "inline" && (i = "block"), a === "d" && e.getAttribute("d") && (i = `path(${e.getAttribute("d")})`), r.setProperty(a, i, o.getPropertyPriority(a));
  });
}
function Ve(t, e) {
  A(t, HTMLTextAreaElement) && (e.innerHTML = t.value), A(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function We(t, e) {
  if (A(t, HTMLSelectElement)) {
    const r = Array.from(e.children).find((o) => t.value === o.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function je(t, e, n) {
  return A(e, Element) && (He(t, e, n), Fe(t, e, n), Ve(t, e), We(t, e)), e;
}
async function Je(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let a = 0; a < n.length; a++) {
    const l = n[a].getAttribute("xlink:href");
    if (l) {
      const h = t.querySelector(l), p = document.querySelector(l);
      !h && p && !r[l] && (r[l] = await ct(p, e, !0));
    }
  }
  const o = Object.values(r);
  if (o.length) {
    const a = "http://www.w3.org/1999/xhtml", i = document.createElementNS(a, "svg");
    i.setAttribute("xmlns", a), i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.overflow = "hidden", i.style.display = "none";
    const l = document.createElementNS(a, "defs");
    i.appendChild(l);
    for (let h = 0; h < o.length; h++)
      l.appendChild(o[h]);
    t.appendChild(i);
  }
  return t;
}
async function ct(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => Me(r, e)).then((r) => Oe(t, r, e)).then((r) => je(t, r, e)).then((r) => Je(r, e));
}
const zt = /url\((['"]?)([^'"]+?)\1\)/g, _e = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Ge = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function qe(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function Xe(t) {
  const e = [];
  return t.replace(zt, (n, r, o) => (e.push(o), n)), e.filter((n) => !ht(n));
}
async function Ke(t, e, n, r, o) {
  try {
    const a = n ? pe(e, n) : e, i = ft(e);
    let l;
    return o || (l = await gt(a, i, r)), t.replace(qe(e), `$1${l}$3`);
  } catch {
  }
  return t;
}
function Ye(t, { preferredFontFormat: e }) {
  return e ? t.replace(Ge, (n) => {
    for (; ; ) {
      const [r, , o] = _e.exec(n) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${r};`;
    }
  }) : t;
}
function Mt(t) {
  return t.search(zt) !== -1;
}
async function Ut(t, e, n) {
  if (!Mt(t))
    return t;
  const r = Ye(t, n);
  return Xe(r).reduce((a, i) => a.then((l) => Ke(l, i, e, n)), Promise.resolve(r));
}
async function q(t, e, n) {
  var r;
  const o = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (o) {
    const a = await Ut(o, null, n);
    return e.style.setProperty(t, a, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function Qe(t, e) {
  await q("background", t, e) || await q("background-image", t, e), await q("mask", t, e) || await q("-webkit-mask", t, e) || await q("mask-image", t, e) || await q("-webkit-mask-image", t, e);
}
async function Ze(t, e) {
  const n = A(t, HTMLImageElement);
  if (!(n && !ht(t.src)) && !(A(t, SVGImageElement) && !ht(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, o = await gt(r, ft(r), e);
  await new Promise((a, i) => {
    t.onload = a, t.onerror = e.onImageErrorHandler ? (...h) => {
      try {
        a(e.onImageErrorHandler(...h));
      } catch (p) {
        i(p);
      }
    } : i;
    const l = t;
    l.decode && (l.decode = a), l.loading === "lazy" && (l.loading = "eager"), n ? (t.srcset = "", t.src = o) : t.href.baseVal = o;
  });
}
async function tn(t, e) {
  const r = V(t.childNodes).map((o) => Ot(o, e));
  await Promise.all(r).then(() => t);
}
async function Ot(t, e) {
  A(t, Element) && (await Qe(t, e), await Ze(t, e), await tn(t, e));
}
function en(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((o) => {
    n[o] = r[o];
  }), t;
}
const Tt = {};
async function kt(t) {
  let e = Tt[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, Tt[t] = e, e;
}
async function Bt(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, a = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
    let l = i.replace(r, "$1");
    return l.startsWith("https://") || (l = new URL(l, t.url).href), Lt(l, e.fetchRequestInit, ({ result: h }) => (n = n.replace(i, `url(${h})`), [i, h]));
  });
  return Promise.all(a).then(() => n);
}
function Ft(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const h = o.exec(r);
    if (h === null)
      break;
    e.push(h[0]);
  }
  r = r.replace(o, "");
  const a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, i = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", l = new RegExp(i, "gi");
  for (; ; ) {
    let h = a.exec(r);
    if (h === null) {
      if (h = l.exec(r), h === null)
        break;
      a.lastIndex = l.lastIndex;
    } else
      l.lastIndex = a.lastIndex;
    e.push(h[0]);
  }
  return e;
}
async function nn(t, e) {
  const n = [], r = [];
  return t.forEach((o) => {
    if ("cssRules" in o)
      try {
        V(o.cssRules || []).forEach((a, i) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let l = i + 1;
            const h = a.href, p = kt(h).then((u) => Bt(u, e)).then((u) => Ft(u).forEach((b) => {
              try {
                o.insertRule(b, b.startsWith("@import") ? l += 1 : o.cssRules.length);
              } catch (s) {
                console.error("Error inserting rule from remote css", {
                  rule: b,
                  error: s
                });
              }
            })).catch((u) => {
              console.error("Error loading remote css", u.toString());
            });
            r.push(p);
          }
        });
      } catch (a) {
        const i = t.find((l) => l.href == null) || document.styleSheets[0];
        o.href != null && r.push(kt(o.href).then((l) => Bt(l, e)).then((l) => Ft(l).forEach((h) => {
          i.insertRule(h, i.cssRules.length);
        })).catch((l) => {
          console.error("Error loading remote stylesheet", l);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(r).then(() => (t.forEach((o) => {
    if ("cssRules" in o)
      try {
        V(o.cssRules || []).forEach((a) => {
          n.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${o.href}`, a);
      }
  }), n));
}
function an(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => Mt(e.style.getPropertyValue("src")));
}
async function rn(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = V(t.ownerDocument.styleSheets), r = await nn(n, e);
  return an(r);
}
function Ht(t) {
  return t.trim().replace(/["']/g, "");
}
function cn(t) {
  const e = /* @__PURE__ */ new Set();
  function n(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((a) => {
      e.add(Ht(a));
    }), Array.from(r.children).forEach((a) => {
      a instanceof HTMLElement && n(a);
    });
  }
  return n(t), e;
}
async function Vt(t, e) {
  const n = await rn(t, e), r = cn(t);
  return (await Promise.all(n.filter((a) => r.has(Ht(a.style.fontFamily))).map((a) => {
    const i = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return Ut(a.cssText, i, e);
  }))).join(`
`);
}
async function on(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await Vt(t, e);
  if (n) {
    const r = document.createElement("style"), o = document.createTextNode(n);
    r.appendChild(o), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function Wt(t, e = {}) {
  const { width: n, height: r } = mt(t, e), o = await ct(t, e, !0);
  return await on(o, e), await Ot(o, e), en(o, e), await Ee(o, n, r);
}
async function Y(t, e = {}) {
  const { width: n, height: r } = mt(t, e), o = await Wt(t, e), a = await rt(o), i = document.createElement("canvas"), l = i.getContext("2d"), h = e.pixelRatio || ve(), p = e.canvasWidth || n, u = e.canvasHeight || r;
  return i.width = p * h, i.height = u * h, e.skipAutoScale || Se(i), i.style.width = `${p}`, i.style.height = `${u}`, e.backgroundColor && (l.fillStyle = e.backgroundColor, l.fillRect(0, 0, i.width, i.height)), l.drawImage(a, 0, 0, i.width, i.height), i;
}
async function ln(t, e = {}) {
  const { width: n, height: r } = mt(t, e);
  return (await Y(t, e)).getContext("2d").getImageData(0, 0, n, r).data;
}
async function sn(t, e = {}) {
  return (await Y(t, e)).toDataURL();
}
async function dn(t, e = {}) {
  return (await Y(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
async function un(t, e = {}) {
  const n = await Y(t, e);
  return await Ce(n);
}
async function hn(t, e = {}) {
  return Vt(t, e);
}
const mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFontEmbedCSS: hn,
  toBlob: un,
  toCanvas: Y,
  toJpeg: dn,
  toPixelData: ln,
  toPng: sn,
  toSvg: Wt
}, Symbol.toStringTag, { value: "Module" })), fn = (t, e) => t.reduce((n, r) => {
  const o = String(r[e]);
  return n[o] || (n[o] = []), n[o].push(r), n;
}, {}), gn = (t, e, n = "asc") => [...t].sort((r, o) => {
  const a = r[e], i = o[e], l = a > i ? 1 : a < i ? -1 : 0;
  return n === "asc" ? l : -l;
}), yn = (t) => {
  const { value: e } = t, n = W(H), [r, o] = _(!1), a = ut(null);
  if (!n) return null;
  const { state: i, labels: l, updateState: h, onDelete: p, onBeforeDelete: u } = n, { width: b, ...s } = t.account || {}, { width: g, ...R } = t.amount || {};
  nt(() => {
    const f = (w) => {
      a.current && !a.current.contains(w.target) && o(!1);
    };
    return r && document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [r]);
  const E = () => {
    h({ editingTransaction: e }), o(!1);
  }, D = async () => {
    if (u && !await u(e)) return;
    const f = (i.data || []).filter((w) => w !== e);
    p?.(e), h({ data: f }), o(!1);
  };
  return /* @__PURE__ */ d(
    "div",
    {
      className: "insertion",
      role: "row",
      tabIndex: 0,
      onKeyDown: (f) => {
        f.key === "Enter" || f.key === " " ? (f.preventDefault(), o(!r)) : f.key === "Escape" && o(!1);
      },
      children: [
        /* @__PURE__ */ c("div", { className: "debit flex-col", style: s, title: e.isDebit ? e.account : "", role: "cell", children: /* @__PURE__ */ c("div", { children: e.isDebit ? e.account : "" }) }),
        /* @__PURE__ */ c("div", { className: "credit flex-col", style: s, title: e.isDebit ? "" : e.account, role: "cell", children: /* @__PURE__ */ c("div", { children: e.isDebit ? "" : e.account }) }),
        /* @__PURE__ */ c("div", { className: "flex-col description", role: "cell", children: /* @__PURE__ */ c(
          "div",
          {
            className: "transaction-content",
            style: { marginLeft: e.isDebit ? 0 : 72 },
            children: e.text
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "amount-debit flex-col", style: R, role: "cell", children: /* @__PURE__ */ c("div", { children: e.isDebit ? N.currency(e.amount, e.currency, e.local) : "" }) }),
        /* @__PURE__ */ c("div", { className: "amount-credit flex-col", style: R, role: "cell", children: /* @__PURE__ */ c("div", { children: e.isDebit ? "" : N.currency(e.amount, e.currency, e.local) }) }),
        t.showEdit !== !1 && /* @__PURE__ */ d("div", { className: "row-actions", ref: a, children: [
          /* @__PURE__ */ c(
            "button",
            {
              className: "row-actions-trigger",
              onClick: () => o(!r),
              title: l.actions,
              "aria-haspopup": "true",
              "aria-expanded": r,
              children: /* @__PURE__ */ c(fe, { size: 14 })
            }
          ),
          r && /* @__PURE__ */ d("div", { className: "row-actions-menu", role: "menu", children: [
            /* @__PURE__ */ d("button", { role: "menuitem", onClick: E, onKeyDown: (f) => f.key === "Enter" && E(), children: [
              /* @__PURE__ */ c(se, { size: 13 }),
              " ",
              l.edit
            ] }),
            /* @__PURE__ */ d("button", { role: "menuitem", className: "danger", onClick: D, onKeyDown: (f) => f.key === "Enter" && D(), children: [
              /* @__PURE__ */ c(Nt, { size: 13 }),
              " ",
              l.delete
            ] })
          ] })
        ] })
      ]
    }
  );
}, dt = {
  padding: "8px 10px",
  border: "1px solid hsl(220, 13%, 91%)",
  borderRadius: "6px",
  fontSize: "13px",
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  background: "white",
  color: "hsl(224, 71%, 4%)"
}, pn = () => {
  const t = W(H);
  if (!t) return null;
  const { state: e, labels: n, updateState: r } = t;
  return /* @__PURE__ */ d("div", { style: { display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ d("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ c(de, { size: 14, style: { position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ c(
        "input",
        {
          type: "text",
          placeholder: n.search,
          value: e.searchTerm || "",
          onChange: (o) => r({ searchTerm: o.target.value }),
          style: { ...dt, paddingLeft: "32px", width: "180px" }
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
      /* @__PURE__ */ c(ue, { size: 14, style: { color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ c(
        "input",
        {
          type: "date",
          value: e.dateFilter?.start || "",
          onChange: (o) => r({
            dateFilter: { ...e.dateFilter, start: o.target.value }
          }),
          style: dt
        }
      ),
      /* @__PURE__ */ c("span", { style: { color: "hsl(220, 9%, 46%)", fontSize: "12px" }, children: n.to }),
      /* @__PURE__ */ c(
        "input",
        {
          type: "date",
          value: e.dateFilter?.end || "",
          onChange: (o) => r({
            dateFilter: { ...e.dateFilter, end: o.target.value }
          }),
          style: dt
        }
      ),
      (e.searchTerm || e.dateFilter?.start || e.dateFilter?.end) && /* @__PURE__ */ c(
        "button",
        {
          onClick: () => r({ searchTerm: "", dateFilter: {} }),
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
}, xn = ({ data: t }) => {
  const e = W(H);
  if (!e) return null;
  const { labels: n } = e, r = K(() => {
    const i = {};
    for (const l of t)
      i[l.account] || (i[l.account] = []), i[l.account].push(l);
    return Object.entries(i).sort(([l], [h]) => l.localeCompare(h)).map(([l, h]) => {
      let p = 0;
      const b = [...h].sort((s, g) => s.date.localeCompare(g.date)).map((s) => (p += s.isDebit ? s.amount : -s.amount, { ...s, runningBalance: p }));
      return {
        account: l,
        entries: b,
        totalDebit: h.filter((s) => s.isDebit).reduce((s, g) => s + g.amount, 0),
        totalCredit: h.filter((s) => !s.isDebit).reduce((s, g) => s + g.amount, 0),
        balance: p
      };
    });
  }, [t]), o = t[0]?.currency || "USD", a = t[0]?.local;
  return /* @__PURE__ */ c("div", { className: "ledger-view", style: { display: "flex", flexDirection: "column", gap: 16 }, children: r.map((i) => /* @__PURE__ */ d("div", { style: { border: "1px solid var(--rad-border-color, hsl(220,13%,91%))", borderRadius: 8, overflow: "hidden" }, children: [
    /* @__PURE__ */ d("div", { style: { padding: "10px 14px", fontWeight: 600, fontSize: 14, background: "var(--rad-surface, #f8f9fa)", borderBottom: "1px solid var(--rad-border-color, hsl(220,13%,91%))" }, children: [
      i.account,
      /* @__PURE__ */ d("span", { style: { float: "right", fontWeight: 500, fontSize: 13, color: i.balance >= 0 ? "#198754" : "#dc3545" }, children: [
        n.runningBalance,
        ": ",
        N.currency(Math.abs(i.balance), o, a),
        " ",
        i.balance >= 0 ? `(${n.debit})` : `(${n.credit})`
      ] })
    ] }),
    /* @__PURE__ */ d("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, children: [
      /* @__PURE__ */ c("thead", { children: /* @__PURE__ */ d("tr", { style: { background: "var(--rad-surface, #f8f9fa)" }, children: [
        /* @__PURE__ */ c("th", { style: X, children: n.date }),
        /* @__PURE__ */ c("th", { style: X, children: n.description }),
        /* @__PURE__ */ c("th", { style: { ...X, textAlign: "right" }, children: n.debit }),
        /* @__PURE__ */ c("th", { style: { ...X, textAlign: "right" }, children: n.credit }),
        /* @__PURE__ */ c("th", { style: { ...X, textAlign: "right" }, children: n.runningBalance })
      ] }) }),
      /* @__PURE__ */ c("tbody", { children: i.entries.map((l, h) => /* @__PURE__ */ d("tr", { style: { borderBottom: "1px solid var(--rad-border-color, hsl(220,13%,91%))" }, children: [
        /* @__PURE__ */ c("td", { style: O, children: l.date }),
        /* @__PURE__ */ c("td", { style: O, children: l.text }),
        /* @__PURE__ */ c("td", { style: { ...O, textAlign: "right" }, children: l.isDebit ? N.currency(l.amount, o, a) : "" }),
        /* @__PURE__ */ c("td", { style: { ...O, textAlign: "right" }, children: l.isDebit ? "" : N.currency(l.amount, o, a) }),
        /* @__PURE__ */ c("td", { style: { ...O, textAlign: "right", fontWeight: 500, color: l.runningBalance >= 0 ? "#198754" : "#dc3545" }, children: N.currency(Math.abs(l.runningBalance), o, a) })
      ] }, l.id || h)) }),
      /* @__PURE__ */ c("tfoot", { children: /* @__PURE__ */ d("tr", { style: { fontWeight: 600, background: "var(--rad-surface, #f8f9fa)" }, children: [
        /* @__PURE__ */ c("td", { style: O, colSpan: 2, children: n.grandTotal }),
        /* @__PURE__ */ c("td", { style: { ...O, textAlign: "right" }, children: N.currency(i.totalDebit, o, a) }),
        /* @__PURE__ */ c("td", { style: { ...O, textAlign: "right" }, children: N.currency(i.totalCredit, o, a) }),
        /* @__PURE__ */ c("td", { style: O })
      ] }) })
    ] })
  ] }, i.account)) });
}, X = { padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12, textTransform: "uppercase", color: "#6c757d" }, O = { padding: "8px 12px" }, Rt = [
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
], bn = (t, e = "accounting-diary.csv") => {
  const r = [
    ["Date", "Account", "Description", "Debit", "Credit", "Currency"].join(","),
    ...t.map((o) => [
      o.date,
      `"${(o.account || "").replace(/"/g, '""')}"`,
      `"${(o.text || "").replace(/"/g, '""')}"`,
      o.isDebit ? o.amount : "",
      o.isDebit ? "" : o.amount,
      o.currency || "USD"
    ].join(","))
  ].join(`
`);
  yt(r, e, "text/csv;charset=utf-8;");
}, wn = (t, e = "accounting-diary.xls") => {
  const n = (a) => String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), o = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head><meta charset="UTF-8"></head>
    <body>
      <table>
        <thead><tr><th>Date</th><th>Account</th><th>Description</th><th>Debit</th><th>Credit</th><th>Currency</th></tr></thead>
        <tbody>${t.map(
    (a) => `<tr>
      <td>${n(a.date)}</td>
      <td>${n(a.account)}</td>
      <td>${n(a.text)}</td>
      <td>${a.isDebit ? a.amount : ""}</td>
      <td>${a.isDebit ? "" : a.amount}</td>
      <td>${n(a.currency || "USD")}</td>
    </tr>`
  ).join("")}</tbody>
      </table>
    </body>
    </html>`;
  yt(o, e, "application/vnd.ms-excel;charset=utf-8;");
}, vn = (t) => new Promise((e, n) => {
  const r = new FileReader();
  r.onload = (o) => {
    try {
      const l = (o.target?.result).split(`
`).slice(1).filter((h) => h.trim()).map((h) => {
        const p = h.split(","), u = parseFloat(p[3]) || 0, b = parseFloat(p[4]) || 0;
        return {
          date: p[0],
          account: p[1].replace(/"/g, ""),
          text: p[2].replace(/"/g, ""),
          amount: u || b,
          isDebit: u > 0,
          currency: (p[5] || "USD").trim()
        };
      });
      e(l);
    } catch (a) {
      n(a);
    }
  }, r.readAsText(t);
}), Sn = (t, e = "accounting-diary.json") => {
  yt(JSON.stringify(t, null, 2), e, "application/json;charset=utf-8;");
}, Cn = (t) => new Promise((e, n) => {
  const r = new FileReader();
  r.onload = (o) => {
    try {
      const a = JSON.parse(o.target?.result), i = Array.isArray(a) ? a : [a];
      e(i);
    } catch (a) {
      n(a);
    }
  }, r.readAsText(t);
});
function yt(t, e, n) {
  const r = new Blob([t], { type: n }), o = document.createElement("a");
  o.href = URL.createObjectURL(r), o.download = e, o.click(), URL.revokeObjectURL(o.href);
}
const Dn = (t) => {
  if (!t || t.length === 0) return [];
  const e = fn(t, "date");
  return Object.entries(e).map(([n, r]) => ({ date: n, content: r }));
}, jt = It((t, e) => {
  const [n, r] = _("toPng"), o = W(H);
  if (!o) return null;
  const { state: a, labels: i, pageSize: l, undo: h, redo: p, updateState: u } = o, s = a.history.length > 1 ? a.data || [] : t.data && t.data.length > 0 ? t.data : a.data && a.data.length > 0 ? a.data : Rt, g = K(() => {
    let m = s;
    if (a.searchTerm) {
      const y = a.searchTerm.toLowerCase();
      m = m.filter(
        (C) => C.text.toLowerCase().includes(y) || C.account.toLowerCase().includes(y) || C.category && C.category.toLowerCase().includes(y) || C.tags && C.tags.some((T) => T.toLowerCase().includes(y))
      );
    }
    return a.dateFilter?.start && (m = m.filter((y) => y.date >= a.dateFilter.start)), a.dateFilter?.end && (m = m.filter((y) => y.date <= a.dateFilter.end)), m;
  }, [s, a.searchTerm, a.dateFilter]), R = K(() => a.sortField ? [...g].sort((m, y) => {
    let C, T;
    a.sortField === "date" ? (C = m.date, T = y.date) : a.sortField === "account" ? (C = m.account, T = y.account) : (C = m.amount, T = y.amount);
    const I = C > T ? 1 : C < T ? -1 : 0;
    return a.sortOrder === "desc" ? -I : I;
  }) : g, [g, a.sortField, a.sortOrder]), E = l ? Math.max(1, Math.ceil(R.length / l)) : 1, D = Math.min(a.currentPage, E), f = l ? R.slice((D - 1) * l, D * l) : R, w = g.filter((m) => m.isDebit).reduce((m, y) => m + y.amount, 0), k = g.filter((m) => !m.isDebit).reduce((m, y) => m + y.amount, 0), B = Math.abs(w - k) < 0.01, x = g[0]?.currency || "USD", v = g[0]?.local, S = ut(null), P = ut(null), Q = () => {
    const m = {};
    for (const y of s)
      m[y.account] || (m[y.account] = { debit: 0, credit: 0, balance: 0 }), y.isDebit ? m[y.account].debit += y.amount : m[y.account].credit += y.amount, m[y.account].balance = m[y.account].debit - m[y.account].credit;
    return m;
  }, j = (m) => {
    const y = document.getElementById("diary");
    return y ? mn[m === "toPdf" ? "toPng" : m](y, { backgroundColor: "#fff", quality: 1, pixelRatio: 10 }).then((C) => {
      let T = C.split(","), I = T[0].match(/:(.*?);/)?.[1], xt = atob(T[1]), Z = xt.length, bt = new Uint8Array(Z);
      for (; Z--; ) bt[Z] = xt.charCodeAt(Z);
      const qt = new File([bt], "filename", { type: I });
      if (m === "toPdf") N.extractDoc(C);
      else if (I) {
        const tt = document.createElement("a");
        tt.href = URL.createObjectURL(qt), tt.download = "export." + I.split("/")[1], tt.click(), URL.revokeObjectURL(tt.href);
      }
    }).catch((C) => console.error("Export failed:", C)) : Promise.resolve();
  };
  Xt(e, () => ({
    exportToPNG: () => j("toPng").then(() => {
    }),
    exportToJPEG: () => j("toJpeg").then(() => {
    }),
    exportToPDF: () => j("toPdf").then(() => {
    }),
    exportToCSV: () => bn(s),
    exportToExcel: () => wn(s),
    exportToJSON: () => Sn(s),
    importJSON: (m) => {
      try {
        const C = JSON.parse(m).map((T) => ({ ...T, id: T.id || J() }));
        u({ data: [...a.data || [], ...C] });
      } catch {
      }
    },
    addTransaction: (m) => {
      const y = { ...m, id: J() };
      u({ data: [...a.data || [], y] });
    },
    undo: h,
    redo: p,
    getData: () => s,
    getTotals: () => ({
      debit: w,
      credit: k,
      balance: w - k,
      isBalanced: B
    }),
    getAccountSummary: Q
  }));
  const ot = async (m) => {
    const y = m.target.files?.[0];
    if (y) {
      try {
        const T = (await vn(y)).map((I) => ({ ...I, id: I.id || J() }));
        u({ data: [...a.data || [], ...T] });
      } catch {
      }
      S.current && (S.current.value = "");
    }
  }, Jt = async (m) => {
    const y = m.target.files?.[0];
    if (y) {
      try {
        const T = (await Cn(y)).map((I) => ({ ...I, id: I.id || J() }));
        u({ data: [...a.data || [], ...T] });
      } catch {
      }
      P.current && (P.current.value = "");
    }
  }, _t = () => j(n), pt = (m) => {
    u({ currentPage: Math.max(1, Math.min(m, E)) });
  }, Gt = () => {
    u({ viewMode: a.viewMode === "diary" ? "ledger" : "diary" });
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
                  id: n === "toJpeg" ? "active" : "",
                  onClick: () => r("toJpeg"),
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(vt, { size: t.compactButtons ? 10 : 12 }),
                    t.compactButtons ? "JPG" : "JPEG"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  id: n === "toPng" ? "active" : "",
                  onClick: () => r("toPng"),
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(vt, { size: t.compactButtons ? 10 : 12 }),
                    "PNG"
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  id: n === "toPdf" ? "active" : "",
                  onClick: () => r("toPdf"),
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(he, { size: t.compactButtons ? 10 : 12 }),
                    "PDF"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "global-action", style: { display: "flex", gap: t.compactButtons ? 2 : 8 }, children: [
              t.showUndo !== !1 && /* @__PURE__ */ d(F, { children: [
                /* @__PURE__ */ c(
                  "button",
                  {
                    className: "sample doer",
                    disabled: !(a.history.length > 1 && a.doIndex > 0),
                    onClick: () => h(),
                    title: "Undo",
                    style: { padding: t.compactButtons ? "4px" : "8px" },
                    children: /* @__PURE__ */ c(re, { strokeWidth: 2.5, size: t.compactButtons ? 12 : 14 })
                  }
                ),
                /* @__PURE__ */ c(
                  "button",
                  {
                    className: "sample doer",
                    onClick: () => p(),
                    disabled: !(a.doIndex + 1 < a.history.length),
                    title: "Redo",
                    style: { padding: t.compactButtons ? "4px" : "8px" },
                    children: /* @__PURE__ */ c(ce, { strokeWidth: 2.5, size: t.compactButtons ? 12 : 14 })
                  }
                )
              ] }),
              t.showSample !== !1 && /* @__PURE__ */ d(
                "button",
                {
                  className: "sample",
                  onClick: () => u({ data: Rt }),
                  title: i.sample,
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(me, { size: t.compactButtons ? 10 : 12 }),
                    t.compactButtons ? "Sample" : i.sample
                  ]
                }
              ),
              t.showClear !== !1 && /* @__PURE__ */ d(
                "button",
                {
                  className: "reset",
                  onClick: () => u({ data: [] }),
                  title: i.clear,
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px", display: "inline-flex", alignItems: "center", gap: 4 },
                  children: [
                    /* @__PURE__ */ c(Nt, { size: t.compactButtons ? 10 : 12 }),
                    i.clear
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  className: "sample",
                  onClick: () => S.current?.click(),
                  title: "Import CSV",
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px" },
                  children: [
                    /* @__PURE__ */ c(wt, { size: t.compactButtons ? 10 : 12 }),
                    !t.compactButtons && /* @__PURE__ */ c("span", { style: { marginLeft: 4 }, children: "CSV" })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  className: "sample",
                  onClick: () => P.current?.click(),
                  title: i.importJSON,
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px" },
                  children: [
                    /* @__PURE__ */ c(wt, { size: t.compactButtons ? 10 : 12 }),
                    !t.compactButtons && /* @__PURE__ */ c("span", { style: { marginLeft: 4 }, children: "JSON" })
                  ]
                }
              ),
              /* @__PURE__ */ c(
                "input",
                {
                  ref: S,
                  type: "file",
                  accept: ".csv",
                  style: { display: "none" },
                  onChange: ot
                }
              ),
              /* @__PURE__ */ c(
                "input",
                {
                  ref: P,
                  type: "file",
                  accept: ".json",
                  style: { display: "none" },
                  onChange: Jt
                }
              ),
              t.showLedgerToggle !== !1 && /* @__PURE__ */ c(
                "button",
                {
                  className: "sample",
                  onClick: Gt,
                  title: a.viewMode === "diary" ? i.ledgerView : i.diaryView,
                  style: { padding: t.compactButtons ? "4px 8px" : "8px 12px", fontSize: t.compactButtons ? "12px" : "14px" },
                  children: a.viewMode === "diary" ? i.ledgerView : i.diaryView
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
                title: i.export,
                onClick: _t,
                "aria-label": "Export accounting diary",
                role: "button",
                tabIndex: 0,
                children: [
                  /* @__PURE__ */ c(oe, { size: t.compactButtons ? 16 : 20, "aria-hidden": "true" }),
                  /* @__PURE__ */ c("span", { children: t.compactButtons ? "" : i.export })
                ]
              }
            ),
            t.showAdd !== !1 && /* @__PURE__ */ c(ye, {})
          ] })
        ] }),
        t.showSearch !== !1 && /* @__PURE__ */ c(pn, {}),
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
              f.length === 0 ? /* @__PURE__ */ d("div", { className: "empty-state", children: [
                /* @__PURE__ */ c("div", { className: "empty-state-icon", children: /* @__PURE__ */ d("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ c("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
                  /* @__PURE__ */ c("polyline", { points: "14 2 14 8 20 8" }),
                  /* @__PURE__ */ c("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
                  /* @__PURE__ */ c("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
                ] }) }),
                /* @__PURE__ */ c("p", { className: "empty-state-text", children: i.noData }),
                t.showAdd !== !1 && /* @__PURE__ */ c(
                  "button",
                  {
                    className: "empty-state-cta",
                    onClick: () => u({ openAddDialog: !0 }),
                    "aria-label": i.addTransaction,
                    children: i.addTransaction
                  }
                )
              ] }) : a.viewMode === "ledger" ? /* @__PURE__ */ c(xn, { data: f }) : Dn(f).map((m, y, C) => /* @__PURE__ */ d(Pt.Fragment, { children: [
                /* @__PURE__ */ c(
                  te,
                  {
                    date: m.date,
                    columnHeader: t.columnHeader,
                    columnHeaderColor: t.columnHeaderColor,
                    columnHeaderBgColor: t.columnHeaderBgColor,
                    index: y,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  }
                ),
                gn(m.content, "isDebit", "asc").map((T, I) => /* @__PURE__ */ c(
                  yn,
                  {
                    value: T,
                    length: C.length,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  },
                  T.id || I
                )),
                /* @__PURE__ */ c(
                  ae,
                  {
                    account: t.account,
                    columnHeader: t.columnHeader,
                    index: y,
                    footer: t.footer,
                    amount: t.amount,
                    data: m.content,
                    showEdit: t.showEdit
                  }
                )
              ] }, m.date)),
              t.showGrandTotal !== !1 && g.length > 0 && /* @__PURE__ */ d("div", { className: "grand-total", children: [
                /* @__PURE__ */ d("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ c("span", { className: "grand-total-label", children: i.grandTotal }),
                  /* @__PURE__ */ d("span", { className: "grand-total-amounts", children: [
                    /* @__PURE__ */ d("span", { className: "grand-total-debit", children: [
                      i.debit,
                      ": ",
                      N.currency(w, x, v)
                    ] }),
                    /* @__PURE__ */ d("span", { className: "grand-total-credit", children: [
                      i.credit,
                      ": ",
                      N.currency(k, x, v)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ d("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ c("span", { className: "grand-total-label", children: i.balance }),
                  /* @__PURE__ */ c("span", { className: `balance-badge ${B ? "balanced" : "unbalanced"}`, children: B ? `✓ ${i.balanced}` : `⚠ ${i.unbalanced} (${N.currency(Math.abs(w - k), x, v)})` })
                ] })
              ] })
            ]
          }
        ),
        l && E > 1 && /* @__PURE__ */ d("div", { className: "pagination", children: [
          /* @__PURE__ */ c("button", { disabled: D <= 1, onClick: () => pt(D - 1), children: "←" }),
          /* @__PURE__ */ d("span", { children: [
            i.page,
            " ",
            D,
            " ",
            i.of,
            " ",
            E
          ] }),
          /* @__PURE__ */ c("button", { disabled: D >= E, onClick: () => pt(D + 1), children: "→" })
        ] })
      ]
    }
  );
});
jt.displayName = "AccountingDiary";
const En = {
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
}, Tn = {
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
}, kn = Kt(void 0), Bn = ({ children: t }) => {
  const [e, n] = _(!1), r = e ? Tn : En, o = () => n(!e);
  return /* @__PURE__ */ c(kn.Provider, { value: { theme: r, toggleTheme: o }, children: t });
}, Fn = It((t, e) => /* @__PURE__ */ c(Bn, { children: /* @__PURE__ */ c(
  Zt,
  {
    labels: t.labels,
    pageSize: t.pageSize,
    onAdd: t.onAdd,
    onDelete: t.onDelete,
    onEdit: t.onEdit,
    onChange: t.onChange,
    onBeforeAdd: t.onBeforeAdd,
    onBeforeEdit: t.onBeforeEdit,
    onBeforeDelete: t.onBeforeDelete,
    children: /* @__PURE__ */ c(jt, { ref: e, ...t })
  }
) }));
Fn.displayName = "AccountingDiaryWrapper";
const In = (t = {}) => {
  const { initialData: e = [], onChange: n, onBeforeAdd: r, onBeforeEdit: o, onBeforeDelete: a } = t, [i, l] = _([e]), [h, p] = _(0), u = i[h], b = M((x) => {
    l((v) => [...v.slice(0, h + 1), x]), p((v) => v + 1), n?.(x);
  }, [h, n]), s = M(async (x) => {
    const v = { ...x, id: J() };
    return r && !await r(v) ? !1 : (b([...u, v]), !0);
  }, [u, b, r]), g = M(async (x, v) => {
    const S = u.findIndex((ot) => ot.id === x);
    if (S === -1) return !1;
    const P = u[S], Q = { ...P, ...v };
    if (o && !await o(P, Q)) return !1;
    const j = [...u];
    return j[S] = Q, b(j), !0;
  }, [u, b, o]), R = M(async (x) => {
    const v = u.find((S) => S.id === x);
    return !v || a && !await a(v) ? !1 : (b(u.filter((S) => S.id !== x)), !0);
  }, [u, b, a]), E = M(() => {
    h > 0 && (p((x) => x - 1), n?.(i[h - 1]));
  }, [h, i, n]), D = M(() => {
    h + 1 < i.length && (p((x) => x + 1), n?.(i[h + 1]));
  }, [h, i, n]), f = K(() => {
    const x = u.filter((S) => S.isDebit).reduce((S, P) => S + P.amount, 0), v = u.filter((S) => !S.isDebit).reduce((S, P) => S + P.amount, 0);
    return { debit: x, credit: v, balance: x - v, isBalanced: Math.abs(x - v) < 0.01 };
  }, [u]), w = K(() => {
    const x = {};
    for (const v of u)
      x[v.account] || (x[v.account] = { debit: 0, credit: 0, balance: 0 }), v.isDebit ? x[v.account].debit += v.amount : x[v.account].credit += v.amount, x[v.account].balance = x[v.account].debit - x[v.account].credit;
    return x;
  }, [u]), k = M((x) => {
    try {
      const S = JSON.parse(x).map((P) => ({ ...P, id: P.id || J() }));
      b([...u, ...S]);
    } catch {
    }
  }, [u, b]), B = M(() => JSON.stringify(u, null, 2), [u]);
  return {
    data: u,
    addTransaction: s,
    editTransaction: g,
    deleteTransaction: R,
    undo: E,
    redo: D,
    canUndo: h > 0,
    canRedo: h + 1 < i.length,
    totals: f,
    accountSummary: w,
    importJSON: k,
    exportJSON: B
  };
};
export {
  jt as AccountingDiary,
  Fn as AccountingDiaryWrapper,
  ye as DialogOperation,
  ae as Footer,
  Zt as GlobalProvider,
  te as Header,
  xn as LedgerView,
  Fn as default,
  Qt as defaultLabels,
  bn as exportToCSV,
  wn as exportToExcel,
  Sn as exportToJSON,
  vn as importFromCSV,
  Cn as importFromJSON,
  In as useAccountingDiary
};
