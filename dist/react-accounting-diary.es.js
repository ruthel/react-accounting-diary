(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('@charset "UTF-8";.dialog-overlay{position:fixed;inset:0;z-index:1000;background:#0006;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;animation:overlayIn .15s ease}@keyframes overlayIn{0%{opacity:0}to{opacity:1}}.dialog-modal{background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:calc(var(--rad-radius) + 4px);box-shadow:0 16px 70px -12px #00000040;width:440px;max-width:calc(100vw - 32px);max-height:calc(100vh - 64px);overflow-y:auto;font-family:var(--rad-font);animation:modalIn .2s cubic-bezier(.16,1,.3,1)}@keyframes modalIn{0%{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}.dialog-header{display:flex;justify-content:space-between;align-items:flex-start;padding:24px 24px 0}.dialog-title{margin:0;font-weight:600;font-size:16px;color:var(--rad-text);letter-spacing:-.02em;line-height:1.4}.dialog-description{margin:4px 0 0;font-size:13px;color:var(--rad-text-muted);line-height:1.4}.dialog-close{background:none;border:none;cursor:pointer;padding:6px;border-radius:var(--rad-radius-sm);color:var(--rad-text-muted);transition:all var(--rad-transition);flex-shrink:0}.dialog-close:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.dialog-body{padding:20px 24px;display:flex;flex-direction:column;gap:16px}.dialog-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:end}.dialog-footer{display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--rad-border-color);background:var(--rad-bg-muted);border-radius:0 0 calc(var(--rad-radius) + 4px) calc(var(--rad-radius) + 4px)}.btn-cancel,.btn-confirm{padding:8px 16px;border-radius:var(--rad-radius-sm);font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition)}.btn-cancel:active,.btn-confirm:active{transform:scale(.98)}.btn-cancel:focus-visible,.btn-confirm:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-cancel{background:var(--rad-bg);color:var(--rad-text-secondary);border:1px solid var(--rad-border-color);box-shadow:var(--rad-shadow-sm)}.btn-cancel:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.btn-confirm{background:var(--rad-text);color:#fff;border:none;box-shadow:var(--rad-shadow-sm)}.btn-confirm:hover{opacity:.9}.control{display:flex;flex-direction:column;margin:0}.control label{display:block;font-size:12px;margin-bottom:6px;font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.control input,.control select,.control textarea{width:100%;height:36px;padding:0 10px;border-radius:var(--rad-radius-sm);box-sizing:border-box;border:1px solid var(--rad-border-color);font-size:13px;font-family:inherit;transition:all var(--rad-transition);background:var(--rad-bg);color:var(--rad-text)}.control input::placeholder,.control select::placeholder,.control textarea::placeholder{color:var(--rad-text-muted)}.control input:hover,.control select:hover,.control textarea:hover{border-color:#c5cad3}.control input:focus,.control select:focus,.control textarea:focus{outline:none;border-color:var(--rad-primary);box-shadow:0 0 0 3px var(--rad-primary-ring)}.control textarea{height:auto;min-height:60px;padding:8px 10px;resize:vertical;line-height:1.5}.control select{cursor:pointer}.control-check{display:flex;align-items:center;margin:0;gap:8px;height:36px}.control-check label{font-size:13px;font-weight:500;color:var(--rad-text);margin:0;cursor:pointer;-webkit-user-select:none;user-select:none}.control-check input{width:16px;height:16px;cursor:pointer;accent-color:var(--rad-primary);border-radius:4px;flex-shrink:0}:root{--rad-font: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-border: 1px;--rad-border-color: hsl(220, 13%, 91%);--rad-primary: hsl(221, 83%, 53%);--rad-primary-hover: hsl(221, 83%, 46%);--rad-primary-ring: hsla(221, 83%, 53%, .15);--rad-danger: hsl(0, 84%, 60%);--rad-danger-hover: hsl(0, 84%, 53%);--rad-danger-ring: hsla(0, 84%, 60%, .15);--rad-success: hsl(142, 71%, 45%);--rad-success-hover: hsl(142, 71%, 38%);--rad-success-ring: hsla(142, 71%, 45%, .15);--rad-bg: hsl(0, 0%, 100%);--rad-bg-muted: hsl(220, 14%, 96%);--rad-bg-hover: hsl(220, 14%, 96%);--rad-text: hsl(224, 71%, 4%);--rad-text-muted: hsl(220, 9%, 46%);--rad-text-secondary: hsl(220, 9%, 36%);--rad-radius: 8px;--rad-radius-sm: 6px;--rad-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--rad-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);--rad-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--rad-transition: .15s cubic-bezier(.4, 0, .2, 1)}.insertion{display:flex;width:100%;font-size:13px;font-family:var(--rad-font);border-bottom:var(--rad-border) solid var(--rad-border-color);transition:background var(--rad-transition);align-items:stretch}.insertion:hover{background:var(--rad-bg-hover)}.flex-col{display:flex;flex-direction:column;justify-content:center}.description{border-left:var(--rad-border) solid var(--rad-border-color)!important;border-right:var(--rad-border) solid var(--rad-border-color)!important;padding:8px 16px;flex:1;min-width:150px;min-height:36px;box-sizing:border-box}.border-bottom{border-bottom:var(--rad-border) solid var(--rad-border-color)!important}.border-top{border-top:2px solid var(--rad-border-color)!important}.date,.transaction-title{text-align:center;padding:6px 0;font-size:13px}.date{font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.transaction-content{flex:1;color:var(--rad-text-muted);line-height:1.5}.debit,.credit{padding:8px 12px;border-left:var(--rad-border) solid var(--rad-border-color)!important;text-align:center;font-weight:500;color:var(--rad-text);min-width:140px;max-width:160px;min-height:36px;box-sizing:border-box;flex-shrink:0}.debit div,.credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-debit,.amount-credit{padding:8px 12px;border-right:var(--rad-border) solid var(--rad-border-color)!important;text-align:right;font-weight:500;color:var(--rad-text);font-variant-numeric:tabular-nums;font-family:var(--rad-font-mono);min-width:120px;max-width:180px;min-height:36px;box-sizing:border-box;flex-shrink:0}.amount-debit div,.amount-credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}html,body,#root{height:100%}#root{overflow-y:auto;padding:32px;box-sizing:border-box;background:var(--rad-bg-muted)}.btn-export{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 16px;height:36px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;font-weight:500;font-size:13px;cursor:pointer;box-shadow:var(--rad-shadow-sm);transition:all var(--rad-transition);letter-spacing:-.01em}.btn-export:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-export:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-export:active{transform:scale(.98)}.btn-save-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-save-accounting:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-save-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-add-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-add-accounting:hover{opacity:.9;box-shadow:var(--rad-shadow)}.btn-add-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-text)}.btn-add-accounting:active{transform:scale(.96)}.export{display:inline-flex;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);overflow:hidden;background:var(--rad-bg);box-shadow:var(--rad-shadow-sm)}.export button{background:var(--rad-bg);border:none;cursor:pointer;padding:8px 14px;transition:all var(--rad-transition);font-weight:500;font-size:12px;color:var(--rad-text-muted);border-right:1px solid var(--rad-border-color)}.export button:last-child{border-right:none}.export button:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.export button:active,.export button#active{background:var(--rad-text);color:#fff}.global-action{display:flex;gap:6px;align-items:center}.global-action button{padding:8px 12px;cursor:pointer;font-size:12px;font-weight:500;border-radius:var(--rad-radius-sm);transition:all var(--rad-transition);border:1px solid var(--rad-border-color);background:var(--rad-bg);color:var(--rad-text-secondary);box-shadow:var(--rad-shadow-sm)}.global-action button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text);box-shadow:var(--rad-shadow)}.global-action button:active:not(:disabled){transform:scale(.98)}.global-action button:disabled{opacity:.5;cursor:not-allowed}.global-action .reset{border-color:var(--rad-danger);color:var(--rad-danger);background:var(--rad-bg)}.global-action .reset:hover:not(:disabled){background:var(--rad-danger-ring);color:var(--rad-danger-hover)}.global-action .sample.doer{background:var(--rad-text);border-color:var(--rad-text);color:#fff;padding:8px 10px}.global-action .sample.doer:hover:not(:disabled){opacity:.9;background:var(--rad-text);color:#fff}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px;gap:12px}.empty-state .empty-state-icon{color:var(--rad-border-color);margin-bottom:4px}.empty-state .empty-state-text{color:var(--rad-text-muted);font-size:14px;margin:0}.empty-state .empty-state-cta{margin-top:8px;padding:8px 20px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.empty-state .empty-state-cta:hover{opacity:.9;box-shadow:var(--rad-shadow)}.empty-state .empty-state-cta:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.insertion:focus{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary-ring);background:var(--rad-bg-hover)}.insertion:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary);background:var(--rad-bg-hover)}.grand-total{margin-top:16px;padding:12px 16px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg-muted);font-family:var(--rad-font)}.grand-total .grand-total-row{display:flex;justify-content:space-between;align-items:center;padding:4px 0}.grand-total .grand-total-row:not(:last-child){border-bottom:1px solid var(--rad-border-color);padding-bottom:8px;margin-bottom:8px}.grand-total .grand-total-label{font-weight:600;font-size:13px;color:var(--rad-text);text-transform:uppercase;letter-spacing:.02em}.grand-total .grand-total-amounts{display:flex;gap:24px;font-size:13px;font-weight:600;font-family:var(--rad-font-mono);font-variant-numeric:tabular-nums}.grand-total .grand-total-debit,.grand-total .grand-total-credit{color:var(--rad-text)}.balance-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600}.balance-badge.balanced{background:var(--rad-success-ring);color:var(--rad-success)}.balance-badge.unbalanced{background:var(--rad-danger-ring);color:var(--rad-danger)}.pagination{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:16px;font-family:var(--rad-font);font-size:13px;color:var(--rad-text-muted)}.pagination button{padding:6px 12px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg);cursor:pointer;font-size:13px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.pagination button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text)}.pagination button:disabled{opacity:.4;cursor:not-allowed}.row-actions{position:relative;display:flex;align-items:center;width:32px;justify-content:center}.row-actions .row-actions-trigger{background:none;border:none;cursor:pointer;padding:4px;border-radius:var(--rad-radius-sm);opacity:.6;transition:all var(--rad-transition);display:flex;align-items:center;justify-content:center}.row-actions .row-actions-trigger:hover{background:var(--rad-success);color:#fff;opacity:1}.row-actions .row-actions-menu{position:absolute;right:0;top:100%;z-index:10;background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);box-shadow:var(--rad-shadow-md);min-width:120px;overflow:hidden}.row-actions .row-actions-menu button{display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;border:none;background:none;cursor:pointer;font-size:12px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition)}.row-actions .row-actions-menu button:hover{background:var(--rad-success);color:#fff}.row-actions .row-actions-menu button.danger:hover{background:var(--rad-danger);color:#fff}@media print{.export,.global-action,.btn-export,.row-actions,.pagination{display:none!important}#diary{padding:0!important;margin:0!important;box-shadow:none!important;border:none!important}.insertion{page-break-inside:avoid;break-inside:avoid}.insertion{border-bottom:1px solid #000!important}*{color:#000!important;background:#fff!important}.insertion{display:flex!important;width:100%!important}body{font-size:12pt!important;line-height:1.4!important}@page{margin:1cm;size:A4}.debit,.credit{flex:1!important}.amount-debit,.amount-credit{width:100px!important;text-align:right!important}}')),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsx as e, jsxs as r, Fragment as O } from "react/jsx-runtime";
import te, { useRef as j, useState as M, useEffect as G, useCallback as B, useContext as H, useMemo as K, forwardRef as pe, useImperativeHandle as Oe, createContext as Ee } from "react";
let ze = 0;
const $ = () => `txn_${Date.now()}_${++ze}`, Ae = {
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
  importJSON: "Import JSON",
  templates: "Templates",
  filterByAccount: "Filter by account",
  filterByCategory: "Filter by category",
  allAccounts: "All accounts",
  allCategories: "All categories",
  dropFileHere: "Drop CSV or JSON file here"
}, P = te.createContext(void 0), Fe = ({ children: t, initialData: n, labels: a, pageSize: d, onAdd: i, onDelete: u, onEdit: g, onChange: s, onBeforeAdd: h, onBeforeEdit: D, onBeforeDelete: c }) => {
  const w = { ...Ae, ...a }, l = j(!1), [f, I] = M(() => {
    const x = n || [];
    return {
      data: x,
      doIndex: 0,
      openSb: !1,
      messageSb: "",
      history: [x],
      severitySb: "success",
      editingTransaction: void 0,
      openAddDialogCount: 0,
      searchTerm: "",
      dateFilter: {},
      sortField: void 0,
      sortOrder: "asc",
      currentPage: 1,
      viewMode: "diary",
      filterAccount: void 0,
      filterCategory: void 0,
      templateItem: void 0
    };
  });
  G(() => {
    if (l.current) {
      l.current = !1;
      return;
    }
    n !== void 0 && I((x) => x.data === n || JSON.stringify(x.data) === JSON.stringify(n) ? x : { ...x, data: n });
  }, [n]);
  const v = B(() => {
    I((x) => {
      if (x.doIndex > 0) {
        const T = x.history[x.doIndex - 1];
        return s?.(T), {
          ...x,
          data: T,
          doIndex: x.doIndex - 1
        };
      }
      return x;
    });
  }, [s]), k = B(() => {
    I((x) => {
      let T = x.doIndex + 1;
      if (T < x.history.length) {
        const b = x.history[T];
        return s?.(b), {
          ...x,
          data: b,
          doIndex: T
        };
      }
      return x;
    });
  }, [s]), o = B((x) => {
    I((T) => {
      if ("data" in x && !("doIndex" in x)) {
        const b = x.data, S = [...[...T.history].slice(0, T.doIndex + 1), b];
        return l.current = !0, s?.(b), {
          ...T,
          ...x,
          data: b,
          history: S,
          doIndex: S.length - 1
        };
      }
      return { ...T, ...x };
    });
  }, [s]), m = {
    state: f,
    labels: w,
    pageSize: d,
    undo: v,
    redo: k,
    updateState: o,
    onAdd: i,
    onDelete: u,
    onEdit: g,
    onChange: s,
    onBeforeAdd: h,
    onBeforeEdit: D,
    onBeforeDelete: c
  };
  return /* @__PURE__ */ e(P.Provider, { value: m, children: t });
}, J = "var(--rad-border) solid var(--rad-border-color)", re = ({ field: t }) => {
  const n = H(P);
  if (!n) return null;
  const { state: a } = n;
  return a.sortField !== t ? /* @__PURE__ */ e("span", { style: { opacity: 0.3, marginLeft: 4, fontSize: 10 }, children: "↕" }) : /* @__PURE__ */ e("span", { style: { marginLeft: 4, fontSize: 10 }, children: a.sortOrder === "asc" ? "↑" : "↓" });
}, Be = (t) => {
  const n = H(P);
  if (!n) return null;
  const { labels: a, state: d, updateState: i } = n;
  let { date: u, index: g, columnHeader: s, columnHeaderColor: h, columnHeaderBgColor: D } = t;
  const c = g === 0 && s, w = `${u.split("-")[2]}/${u.split("-")[1]}/${u.split("-")[0]}`, { width: l, ...f } = t.account || {}, { width: I, ...v } = t.amount || {}, k = (m) => {
    const x = d.sortField === m && d.sortOrder === "asc" ? "desc" : "asc";
    i({ sortField: m, sortOrder: x });
  }, o = c ? { cursor: "pointer", userSelect: "none" } : {};
  return /* @__PURE__ */ r("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...f,
          borderTop: c ? J : "",
          borderBottom: c ? J : "",
          background: c ? D : ""
        },
        role: "columnheader",
        onClick: c ? () => k("account") : void 0,
        children: c ? /* @__PURE__ */ r("div", { className: "date", style: { color: h, ...o }, children: [
          a.debit,
          /* @__PURE__ */ e(re, { field: "account" })
        ] }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...f,
          borderTop: c ? J : "",
          borderBottom: c ? J : "",
          background: c ? D : ""
        },
        role: "columnheader",
        children: c ? /* @__PURE__ */ e("div", { className: "date", style: { color: h }, children: a.credit }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        style: {
          flex: 1,
          minWidth: 150,
          borderTop: c ? J : "",
          borderBottom: c ? J : "",
          background: c ? D : ""
        },
        role: "columnheader",
        onClick: c ? () => k("date") : void 0,
        children: c ? /* @__PURE__ */ r("div", { className: "date", style: { color: h, ...o }, children: [
          w,
          /* @__PURE__ */ e(re, { field: "date" })
        ] }) : /* @__PURE__ */ e(
          "div",
          {
            className: `flex-col description ${g === 0 ? "border-top" : ""}`,
            style: {
              borderTopLeftRadius: g === 0 && !s ? 6 : 0,
              borderTopRightRadius: g === 0 && !s ? 6 : 0,
              borderBottom: "none"
            },
            children: /* @__PURE__ */ e("div", { className: "date", children: w })
          }
        )
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "amount-debit flex-col",
        style: {
          ...v,
          borderTop: c ? J : "",
          borderBottom: c ? J : "",
          background: c ? D : ""
        },
        role: "columnheader",
        onClick: c ? () => k("amount") : void 0,
        children: c ? /* @__PURE__ */ r("div", { className: "date", style: { color: h, ...o }, children: [
          a.debit,
          /* @__PURE__ */ e(re, { field: "amount" })
        ] }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...v,
          borderTop: c ? J : "",
          borderBottom: c ? J : "",
          background: c ? D : ""
        },
        role: "columnheader",
        children: c ? /* @__PURE__ */ e("div", { className: "date", style: { color: h }, children: a.credit }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ e("div", { style: { width: 32, flexShrink: 0 } })
  ] });
};
let oe = null;
const Re = async () => (oe || (oe = (await import("pdfmake")).default), oe), Le = async (t) => {
  (await Re()).createPdf({
    pageMargins: 0,
    content: [
      {
        image: t,
        width: 595
      }
    ]
  }).download();
};
class L {
  static currency(n, a = "USD", d = "en-US") {
    return new Intl.NumberFormat(d, {
      style: "currency",
      currency: a
    }).format(n) || "0.00";
  }
  static number(n) {
    return new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(
      n || 0
    );
  }
  static date(n) {
    return new Date(n).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  static extractDoc(n) {
    Le(n);
  }
}
const Q = "var(--rad-border) solid var(--rad-border-color)", Me = (t) => {
  const n = H(P);
  if (!n) return null;
  const { labels: a } = n, d = (t.data || []).filter((w) => w.isDebit).reduce((w, l) => w + l.amount, 0), i = (t.data || []).filter((w) => !w.isDebit).reduce((w, l) => w + l.amount, 0), u = t.data?.[0]?.currency || "USD", g = t.data?.[0]?.local, { width: s, ...h } = t.account || {}, { width: D, ...c } = t.amount || {};
  return /* @__PURE__ */ r("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...h,
          borderBottom: t.columnHeader ? Q : ""
        },
        children: /* @__PURE__ */ e("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...h,
          borderBottom: t.columnHeader ? Q : ""
        },
        children: /* @__PURE__ */ e("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "flex-col description border-bottom",
        style: { padding: 0 },
        children: /* @__PURE__ */ e(
          "div",
          {
            className: "transaction-title",
            style: {
              ...t.footer,
              fontSize: 11,
              marginTop: 7,
              textTransform: "uppercase"
            },
            children: a.transactionEntries
          }
        )
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "amount-debit flex-col",
        style: {
          ...c,
          borderBottom: t.columnHeader ? Q : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ e("div", { className: "transaction-title", children: d > 0 ? L.currency(d, u, g) : " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...c,
          borderBottom: t.columnHeader ? Q : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ e("div", { className: "transaction-title", children: i > 0 ? L.currency(i, u, g) : " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ e("div", { style: { width: 32, flexShrink: 0 } })
  ] });
}, z = { size: 16, strokeWidth: 2 }, A = (t, n) => /* @__PURE__ */ e(
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
    children: n
  }
), Pe = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("polyline", { points: "1 4 1 10 7 10" }),
    /* @__PURE__ */ e("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
  ] }));
}, We = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("polyline", { points: "23 4 23 10 17 10" }),
    /* @__PURE__ */ e("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })
  ] }));
}, Je = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ e("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] }));
}, ce = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ e("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
  ] }));
}, He = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }));
}, Ve = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] }));
}, je = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ e(O, { children: /* @__PURE__ */ e("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }) }));
}, $e = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ] }));
}, Ge = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }));
}, de = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("circle", { cx: "10", cy: "13", r: "2" }),
    /* @__PURE__ */ e("path", { d: "m20 17-1.1-1.1a2 2 0 0 0-2.81 0L10 22" })
  ] }));
}, _e = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
  ] }));
}, fe = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("polyline", { points: "3 6 5 6 21 6" }),
    /* @__PURE__ */ e("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    /* @__PURE__ */ e("line", { x1: "14", y1: "11", x2: "14", y2: "17" })
  ] }));
}, qe = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    /* @__PURE__ */ e("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    /* @__PURE__ */ e("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ] }));
}, Ke = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "19", r: "1" })
  ] }));
}, ue = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ e(O, { children: /* @__PURE__ */ e("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }) }));
}, xe = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "13", x2: "16", y2: "13" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "17", x2: "16", y2: "17" })
  ] }));
}, ge = (t = {}) => {
  const n = { ...z, ...t };
  return A(n, /* @__PURE__ */ e(O, { children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" }) }));
}, Xe = [
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
], be = [
  {
    name: "Rent Payment",
    date: "",
    text: "Monthly rent payment",
    isDebit: !0,
    amount: 0,
    account: "Rent",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "fixed"
    ]
  },
  {
    name: "Salary Payment",
    date: "",
    text: "Employee salary payment",
    isDebit: !0,
    amount: 0,
    account: "Payroll",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    name: "Sales Revenue",
    date: "",
    text: "Sales revenue received",
    isDebit: !0,
    amount: 0,
    account: "Cash",
    currency: "USD",
    category: "Revenue",
    tags: [
      "sales"
    ]
  },
  {
    name: "Utility Bill",
    date: "",
    text: "Utility bill payment",
    isDebit: !0,
    amount: 0,
    account: "Utilities",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "utilities"
    ]
  },
  {
    name: "Office Supplies",
    date: "",
    text: "Office supplies purchase",
    isDebit: !0,
    amount: 0,
    account: "Supplies",
    currency: "USD",
    category: "Operating",
    tags: [
      "supplies"
    ]
  },
  {
    name: "Loan Repayment",
    date: "",
    text: "Loan repayment",
    isDebit: !0,
    amount: 0,
    account: "Loan",
    currency: "USD",
    category: "Financing",
    tags: [
      "loan",
      "monthly"
    ]
  }
], he = {
  open: !1,
  isDebit: !1,
  amount: "",
  account: "",
  text: "",
  date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  currency: "USD",
  category: "",
  tags: ""
}, Ye = () => {
  const t = H(P), [n, a] = M(he), [d, i] = M(!1), u = j(null), g = j(0);
  G(() => {
    const o = t?.state.editingTransaction;
    o && a({
      open: !0,
      isDebit: o.isDebit ?? !1,
      amount: o.amount,
      account: o.account,
      text: o.text,
      date: o.date,
      currency: o.currency || "USD",
      category: o.category || "",
      tags: o.tags?.join(", ") || ""
    });
  }, [t?.state.editingTransaction]), G(() => {
    const o = t?.state.openAddDialogCount || 0;
    if (o > g.current) {
      const m = t?.state.templateItem;
      m ? (a({
        open: !0,
        isDebit: m.isDebit ?? !1,
        amount: m.amount || "",
        account: m.account || "",
        text: m.text || "",
        date: m.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        currency: m.currency || "USD",
        category: m.category || "",
        tags: m.tags?.join(", ") || ""
      }), t?.updateState({ templateItem: void 0 })) : a((x) => ({ ...x, open: !0 }));
    }
    g.current = o;
  }, [t?.state.openAddDialogCount]), G(() => {
    if (!n.open) return;
    const o = (m) => {
      m.key === "Escape" && h();
    };
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [n.open]), G(() => {
    const o = (m) => {
      u.current && !u.current.contains(m.target) && i(!1);
    };
    return d && document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, [d]);
  const s = B(() => {
    a((o) => ({ ...o, open: !0 }));
  }, []), h = B(() => {
    a(he), i(!1), t?.state.editingTransaction && t.updateState({ editingTransaction: void 0 });
  }, [t]), D = (o) => {
    a((m) => ({
      ...m,
      isDebit: o.isDebit ?? m.isDebit,
      account: o.account || m.account,
      text: o.text || m.text,
      currency: o.currency || m.currency,
      category: o.category || m.category,
      tags: o.tags?.join(", ") || m.tags
    })), i(!1);
  };
  if (!t) return null;
  const { labels: c, onAdd: w, onEdit: l, onBeforeAdd: f, onBeforeEdit: I } = t, v = async () => {
    const o = Number(n.amount), m = n.account.trim(), x = n.text.trim(), T = n.date, b = n.category.trim() || void 0, C = n.tags.trim() ? n.tags.split(",").map((U) => U.trim()).filter(Boolean) : void 0;
    if (!o || o <= 0 || !m || !x || !T || isNaN(new Date(T).getTime())) return;
    const S = [...t.state.data || []], F = t.state.editingTransaction;
    if (F) {
      const U = S.findIndex((R) => R.id === F.id);
      if (U !== -1) {
        const R = { ...S[U], amount: o, account: m, isDebit: n.isDebit, text: x, date: T, currency: n.currency, category: b, tags: C };
        if (I && !await I(S[U], R)) return;
        l?.(S[U], R), S[U] = R;
      }
      t.updateState({ data: S, editingTransaction: void 0 });
    } else {
      const U = { id: $(), amount: o, account: m, isDebit: n.isDebit, text: x, date: T, currency: n.currency, category: b, tags: C };
      if (f && !await f(U)) return;
      w?.(U), S.push(U), t.updateState({ data: S });
    }
    h();
  }, k = !!t.state.editingTransaction;
  return /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e("button", { onClick: s, className: "btn-add-accounting", title: c.addTransaction, children: /* @__PURE__ */ e(He, { size: 20 }) }),
    n.open && /* @__PURE__ */ e("div", { className: "dialog-overlay", onClick: h, children: /* @__PURE__ */ r("div", { className: "dialog-modal", onClick: (o) => o.stopPropagation(), children: [
      /* @__PURE__ */ r("div", { className: "dialog-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ e("h3", { className: "dialog-title", children: k ? c.editTransaction : c.addTransaction }),
          /* @__PURE__ */ e("p", { className: "dialog-description", children: k ? c.modifyDescription : c.addDescription })
        ] }),
        /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          !k && /* @__PURE__ */ r("div", { ref: u, style: { position: "relative" }, children: [
            /* @__PURE__ */ r(
              "button",
              {
                onClick: () => i(!d),
                title: c.templates,
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "6px 10px",
                  fontSize: 12,
                  fontWeight: 500,
                  border: "1px solid hsl(220, 13%, 91%)",
                  borderRadius: 6,
                  background: "white",
                  cursor: "pointer",
                  color: "hsl(220, 9%, 46%)",
                  transition: "all 150ms"
                },
                children: [
                  /* @__PURE__ */ e(xe, { size: 12 }),
                  " ",
                  c.templates
                ]
              }
            ),
            d && /* @__PURE__ */ e("div", { style: {
              position: "absolute",
              top: "100%",
              right: 0,
              zIndex: 30,
              marginTop: 4,
              background: "white",
              border: "1px solid hsl(220, 13%, 91%)",
              borderRadius: 6,
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              minWidth: 180,
              padding: "4px 0"
            }, children: be.map((o, m) => /* @__PURE__ */ e(
              "button",
              {
                onClick: () => D(o),
                style: {
                  display: "block",
                  width: "100%",
                  padding: "8px 14px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "hsl(224, 71%, 4%)",
                  transition: "background 150ms"
                },
                onMouseEnter: (x) => x.currentTarget.style.background = "hsl(220, 14%, 96%)",
                onMouseLeave: (x) => x.currentTarget.style.background = "none",
                children: o.name
              },
              m
            )) })
          ] }),
          /* @__PURE__ */ e("button", { onClick: h, className: "dialog-close", children: /* @__PURE__ */ e(Ve, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "dialog-body", children: [
        /* @__PURE__ */ r("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ r("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-amount", children: c.amount }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-amount",
                placeholder: "0.00",
                type: "number",
                step: "0.01",
                min: "0",
                value: n.amount || "",
                onChange: (o) => a((m) => ({ ...m, amount: o.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-currency", children: c.currency }),
            /* @__PURE__ */ e(
              "select",
              {
                id: "rad-currency",
                value: n.currency,
                onChange: (o) => a((m) => ({ ...m, currency: o.target.value })),
                children: Xe.map((o) => /* @__PURE__ */ e("option", { value: o[1], children: o[0] }, o[1]))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ r("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-account", children: c.account }),
            /* @__PURE__ */ e(
              "input",
              {
                autoFocus: !0,
                id: "rad-account",
                placeholder: "e.g., Cash, Bank, Rent",
                value: n.account,
                onChange: (o) => a((m) => ({ ...m, account: o.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-date", children: c.date }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-date",
                type: "date",
                value: n.date,
                onChange: (o) => a((m) => ({ ...m, date: o.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "control-check", children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: "rad-isDebit",
              type: "checkbox",
              checked: n.isDebit,
              onChange: (o) => a((m) => ({ ...m, isDebit: o.target.checked }))
            }
          ),
          /* @__PURE__ */ e("label", { htmlFor: "rad-isDebit", children: c.debitTransaction })
        ] }),
        /* @__PURE__ */ r("div", { className: "control", children: [
          /* @__PURE__ */ e("label", { htmlFor: "rad-description", children: c.description }),
          /* @__PURE__ */ e(
            "textarea",
            {
              id: "rad-description",
              rows: 2,
              placeholder: "Describe the transaction...",
              value: n.text,
              onChange: (o) => a((m) => ({ ...m, text: o.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ r("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-category", children: c.category }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-category",
                placeholder: "e.g., Operating, Investing",
                value: n.category,
                onChange: (o) => a((m) => ({ ...m, category: o.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-tags", children: c.tags }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-tags",
                placeholder: "e.g., rent, monthly (comma-separated)",
                value: n.tags,
                onChange: (o) => a((m) => ({ ...m, tags: o.target.value }))
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "dialog-footer", children: [
        /* @__PURE__ */ e("button", { onClick: h, className: "btn-cancel", children: c.cancel }),
        /* @__PURE__ */ e("button", { onClick: v, className: "btn-confirm", children: k ? c.update : c.save })
      ] })
    ] }) })
  ] });
}, ve = (t, n = "png", a = 3) => new Promise((d, i) => {
  const u = t.offsetWidth, g = t.offsetHeight, s = t.cloneNode(!0);
  De(t, s);
  const D = new XMLSerializer().serializeToString(s), c = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${g}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">${D}</div>
        </foreignObject>
      </svg>`, w = new Image();
  w.onload = () => {
    const l = document.createElement("canvas");
    l.width = u * a, l.height = g * a;
    const f = l.getContext("2d");
    f.scale(a, a), f.fillStyle = "#ffffff", f.fillRect(0, 0, u, g), f.drawImage(w, 0, 0, u, g);
    const I = n === "jpeg" ? "image/jpeg" : "image/png";
    d(l.toDataURL(I, 1));
  }, w.onerror = i, w.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(c);
}), Ze = async (t, n = "png") => {
  const a = await ve(t, n), d = document.createElement("a");
  d.download = `export.${n}`, d.href = a, d.click();
};
function De(t, n) {
  const a = window.getComputedStyle(t), d = n, i = [
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "color",
    "background-color",
    "background",
    "border",
    "border-radius",
    "border-color",
    "border-width",
    "border-style",
    "padding",
    "margin",
    "display",
    "flex-direction",
    "align-items",
    "justify-content",
    "gap",
    "flex",
    "flex-wrap",
    "flex-shrink",
    "flex-grow",
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "text-align",
    "text-transform",
    "text-decoration",
    "letter-spacing",
    "line-height",
    "overflow",
    "white-space",
    "text-overflow",
    "box-sizing",
    "position",
    "top",
    "left",
    "right",
    "bottom",
    "opacity",
    "visibility",
    "border-collapse",
    "table-layout",
    "vertical-align"
  ];
  for (const s of i)
    d.style.setProperty(s, a.getPropertyValue(s));
  const u = t.children, g = n.children;
  for (let s = 0; s < u.length; s++)
    g[s] && De(u[s], g[s]);
}
const Qe = (t, n) => t.reduce((a, d) => {
  const i = String(d[n]);
  return a[i] || (a[i] = []), a[i].push(d), a;
}, {}), et = (t, n, a = "asc") => [...t].sort((d, i) => {
  const u = d[n], g = i[n], s = u > g ? 1 : u < g ? -1 : 0;
  return a === "asc" ? s : -s;
}), tt = (t) => {
  const { value: n } = t, a = H(P), [d, i] = M(!1), u = j(null);
  if (!a) return null;
  const { state: g, labels: s, updateState: h, onDelete: D, onBeforeDelete: c } = a, { width: w, ...l } = t.account || {}, { width: f, ...I } = t.amount || {};
  G(() => {
    const o = (m) => {
      u.current && !u.current.contains(m.target) && i(!1);
    };
    return d && document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, [d]);
  const v = () => {
    h({ editingTransaction: n }), i(!1);
  }, k = async () => {
    if (c && !await c(n)) return;
    const o = (g.data || []).filter((m) => m !== n);
    D?.(n), h({ data: o }), i(!1);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: "insertion",
      role: "row",
      tabIndex: 0,
      onKeyDown: (o) => {
        o.key === "Enter" || o.key === " " ? (o.preventDefault(), i(!d)) : o.key === "Escape" && i(!1);
      },
      children: [
        /* @__PURE__ */ e("div", { className: "debit flex-col", style: l, title: n.isDebit ? n.account : "", role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? n.account : "" }) }),
        /* @__PURE__ */ e("div", { className: "credit flex-col", style: l, title: n.isDebit ? "" : n.account, role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? "" : n.account }) }),
        /* @__PURE__ */ e("div", { className: "flex-col description", role: "cell", children: /* @__PURE__ */ e(
          "div",
          {
            className: "transaction-content",
            style: { marginLeft: n.isDebit ? 0 : 72 },
            children: n.text
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "amount-debit flex-col", style: I, role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? L.currency(n.amount, n.currency, n.local) : "" }) }),
        /* @__PURE__ */ e("div", { className: "amount-credit flex-col", style: I, role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? "" : L.currency(n.amount, n.currency, n.local) }) }),
        t.showEdit !== !1 && /* @__PURE__ */ r("div", { className: "row-actions", ref: u, children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "row-actions-trigger",
              onClick: () => i(!d),
              title: s.actions,
              "aria-haspopup": "true",
              "aria-expanded": d,
              children: /* @__PURE__ */ e(Ke, { size: 14 })
            }
          ),
          d && /* @__PURE__ */ r("div", { className: "row-actions-menu", role: "menu", children: [
            /* @__PURE__ */ r("button", { role: "menuitem", onClick: v, onKeyDown: (o) => o.key === "Enter" && v(), children: [
              /* @__PURE__ */ e(je, { size: 13 }),
              " ",
              s.edit
            ] }),
            /* @__PURE__ */ r("button", { role: "menuitem", className: "danger", onClick: k, onKeyDown: (o) => o.key === "Enter" && k(), children: [
              /* @__PURE__ */ e(fe, { size: 13 }),
              " ",
              s.delete
            ] })
          ] })
        ] })
      ]
    }
  );
}, ie = {
  padding: "8px 10px",
  border: "1px solid hsl(220, 13%, 91%)",
  borderRadius: "6px",
  fontSize: "13px",
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  background: "white",
  color: "hsl(224, 71%, 4%)"
}, nt = () => {
  const t = H(P);
  if (!t) return null;
  const { state: n, labels: a, updateState: d } = t;
  return /* @__PURE__ */ r("div", { style: { display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ r("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ e($e, { size: 14, style: { position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          placeholder: a.search,
          value: n.searchTerm || "",
          onChange: (i) => d({ searchTerm: i.target.value }),
          style: { ...ie, paddingLeft: "32px", width: "180px" }
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
      /* @__PURE__ */ e(Ge, { size: 14, style: { color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "date",
          value: n.dateFilter?.start || "",
          onChange: (i) => d({
            dateFilter: { ...n.dateFilter, start: i.target.value }
          }),
          style: ie
        }
      ),
      /* @__PURE__ */ e("span", { style: { color: "hsl(220, 9%, 46%)", fontSize: "12px" }, children: a.to }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "date",
          value: n.dateFilter?.end || "",
          onChange: (i) => d({
            dateFilter: { ...n.dateFilter, end: i.target.value }
          }),
          style: ie
        }
      ),
      (n.searchTerm || n.dateFilter?.start || n.dateFilter?.end) && /* @__PURE__ */ e(
        "button",
        {
          onClick: () => d({ searchTerm: "", dateFilter: {} }),
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
          children: a.clear
        }
      )
    ] })
  ] });
}, ye = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: 20,
  marginTop: 4,
  background: "white",
  border: "1px solid hsl(220, 13%, 91%)",
  borderRadius: 6,
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
  minWidth: 160,
  maxHeight: 200,
  overflowY: "auto",
  padding: "4px 0"
}, ee = {
  display: "block",
  width: "100%",
  padding: "6px 12px",
  border: "none",
  background: "none",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  color: "hsl(224, 71%, 4%)",
  transition: "background 150ms"
}, at = () => {
  const t = H(P), [n, a] = M(!1), [d, i] = M(!1), u = j(null), g = j(null);
  if (!t) return null;
  const { state: s, labels: h, updateState: D } = t, c = s.data || [], w = [...new Set(c.map((v) => v.account).filter(Boolean))].sort(), l = [...new Set(c.map((v) => v.category).filter(Boolean))].sort();
  G(() => {
    const v = (k) => {
      u.current && !u.current.contains(k.target) && a(!1), g.current && !g.current.contains(k.target) && i(!1);
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, []);
  const f = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "8px 10px",
    border: "1px solid hsl(220, 13%, 91%)",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    background: "white",
    cursor: "pointer",
    color: "hsl(220, 9%, 46%)",
    transition: "all 150ms"
  }, I = {
    ...f,
    borderColor: "hsl(221, 83%, 53%)",
    color: "hsl(221, 83%, 53%)",
    background: "hsla(221, 83%, 53%, 0.05)"
  };
  return /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
    w.length > 0 && /* @__PURE__ */ r("div", { ref: u, style: { position: "relative" }, children: [
      /* @__PURE__ */ r(
        "button",
        {
          style: s.filterAccount ? I : f,
          onClick: () => {
            a(!n), i(!1);
          },
          title: h.filterByAccount,
          children: [
            /* @__PURE__ */ e(ue, { size: 12 }),
            s.filterAccount || h.allAccounts,
            /* @__PURE__ */ e(ge, { size: 10 })
          ]
        }
      ),
      n && /* @__PURE__ */ r("div", { style: ye, children: [
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...ee, fontWeight: s.filterAccount ? 500 : 600 },
            onClick: () => {
              D({ filterAccount: void 0 }), a(!1);
            },
            onMouseEnter: (v) => v.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (v) => v.currentTarget.style.background = "none",
            children: h.allAccounts
          }
        ),
        w.map((v) => /* @__PURE__ */ e(
          "button",
          {
            style: { ...ee, fontWeight: s.filterAccount === v ? 600 : 500 },
            onClick: () => {
              D({ filterAccount: v }), a(!1);
            },
            onMouseEnter: (k) => k.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (k) => k.currentTarget.style.background = "none",
            children: v
          },
          v
        ))
      ] })
    ] }),
    l.length > 0 && /* @__PURE__ */ r("div", { ref: g, style: { position: "relative" }, children: [
      /* @__PURE__ */ r(
        "button",
        {
          style: s.filterCategory ? I : f,
          onClick: () => {
            i(!d), a(!1);
          },
          title: h.filterByCategory,
          children: [
            /* @__PURE__ */ e(ue, { size: 12 }),
            s.filterCategory || h.allCategories,
            /* @__PURE__ */ e(ge, { size: 10 })
          ]
        }
      ),
      d && /* @__PURE__ */ r("div", { style: ye, children: [
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...ee, fontWeight: s.filterCategory ? 500 : 600 },
            onClick: () => {
              D({ filterCategory: void 0 }), i(!1);
            },
            onMouseEnter: (v) => v.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (v) => v.currentTarget.style.background = "none",
            children: h.allCategories
          }
        ),
        l.map((v) => /* @__PURE__ */ e(
          "button",
          {
            style: { ...ee, fontWeight: s.filterCategory === v ? 600 : 500 },
            onClick: () => {
              D({ filterCategory: v }), i(!1);
            },
            onMouseEnter: (k) => k.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (k) => k.currentTarget.style.background = "none",
            children: v
          },
          v
        ))
      ] })
    ] })
  ] });
}, rt = (t, n = "accounting-diary.csv") => {
  const d = [
    ["Date", "Account", "Description", "Debit", "Credit", "Currency"].join(","),
    ...t.map((i) => [
      i.date,
      `"${(i.account || "").replace(/"/g, '""')}"`,
      `"${(i.text || "").replace(/"/g, '""')}"`,
      i.isDebit ? i.amount : "",
      i.isDebit ? "" : i.amount,
      i.currency || "USD"
    ].join(","))
  ].join(`
`);
  le(d, n, "text/csv;charset=utf-8;");
}, ot = (t, n = "accounting-diary.xls") => {
  const a = (u) => String(u).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), i = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head><meta charset="UTF-8"></head>
    <body>
      <table>
        <thead><tr><th>Date</th><th>Account</th><th>Description</th><th>Debit</th><th>Credit</th><th>Currency</th></tr></thead>
        <tbody>${t.map(
    (u) => `<tr>
      <td>${a(u.date)}</td>
      <td>${a(u.account)}</td>
      <td>${a(u.text)}</td>
      <td>${u.isDebit ? u.amount : ""}</td>
      <td>${u.isDebit ? "" : u.amount}</td>
      <td>${a(u.currency || "USD")}</td>
    </tr>`
  ).join("")}</tbody>
      </table>
    </body>
    </html>`;
  le(i, n, "application/vnd.ms-excel;charset=utf-8;");
}, we = (t) => new Promise((n, a) => {
  const d = new FileReader();
  d.onload = (i) => {
    try {
      const s = (i.target?.result).split(`
`).slice(1).filter((h) => h.trim()).map((h) => {
        const D = h.split(","), c = parseFloat(D[3]) || 0, w = parseFloat(D[4]) || 0;
        return {
          date: D[0],
          account: D[1].replace(/"/g, ""),
          text: D[2].replace(/"/g, ""),
          amount: c || w,
          isDebit: c > 0,
          currency: (D[5] || "USD").trim()
        };
      });
      n(s);
    } catch (u) {
      a(u);
    }
  }, d.readAsText(t);
}), it = (t, n = "accounting-diary.json") => {
  le(JSON.stringify(t, null, 2), n, "application/json;charset=utf-8;");
}, Se = (t) => new Promise((n, a) => {
  const d = new FileReader();
  d.onload = (i) => {
    try {
      const u = JSON.parse(i.target?.result), g = Array.isArray(u) ? u : [u];
      n(g);
    } catch (u) {
      a(u);
    }
  }, d.readAsText(t);
});
function le(t, n, a) {
  const d = new Blob([t], { type: a }), i = document.createElement("a");
  i.href = URL.createObjectURL(d), i.download = n, i.click(), URL.revokeObjectURL(i.href);
}
const ct = () => {
  const [t, n] = M(!1), a = B((i) => {
    i.preventDefault(), n(!0);
  }, []), d = B((i) => {
    i.preventDefault(), i.currentTarget === i.target && n(!1);
  }, []);
  return { isDragging: t, setIsDragging: n, onDragOver: a, onDragLeave: d };
}, lt = ({ onDone: t }) => {
  const n = H(P);
  if (!n) return null;
  const { state: a, labels: d, updateState: i } = n;
  return /* @__PURE__ */ e(
    "div",
    {
      onDragOver: (g) => g.preventDefault(),
      onDragLeave: (g) => {
        g.preventDefault(), t();
      },
      onDrop: async (g) => {
        g.preventDefault(), g.stopPropagation(), t();
        const s = g.dataTransfer.files?.[0];
        if (s)
          try {
            let h;
            if (s.name.endsWith(".csv"))
              h = await we(s);
            else if (s.name.endsWith(".json"))
              h = await Se(s);
            else
              return;
            const D = h.map((c) => ({ ...c, id: c.id || $() }));
            i({ data: [...a.data || [], ...D] });
          } catch {
          }
      },
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "hsla(221, 83%, 53%, 0.08)",
        border: "2px dashed hsl(221, 83%, 53%)",
        borderRadius: 12,
        backdropFilter: "blur(2px)"
      },
      children: /* @__PURE__ */ r("div", { style: { textAlign: "center", color: "hsl(221, 83%, 53%)" }, children: [
        /* @__PURE__ */ e(ce, { size: 32 }),
        /* @__PURE__ */ e("p", { style: { margin: "8px 0 0", fontSize: 14, fontWeight: 600 }, children: d.dropFileHere })
      ] })
    }
  );
}, st = ({ data: t }) => {
  const n = H(P);
  if (!n) return null;
  const { labels: a } = n, d = K(() => {
    const g = {};
    for (const s of t)
      g[s.account] || (g[s.account] = []), g[s.account].push(s);
    return Object.entries(g).sort(([s], [h]) => s.localeCompare(h)).map(([s, h]) => {
      let D = 0;
      const w = [...h].sort((l, f) => l.date.localeCompare(f.date)).map((l) => (D += l.isDebit ? l.amount : -l.amount, { ...l, runningBalance: D }));
      return {
        account: s,
        entries: w,
        totalDebit: h.filter((l) => l.isDebit).reduce((l, f) => l + f.amount, 0),
        totalCredit: h.filter((l) => !l.isDebit).reduce((l, f) => l + f.amount, 0),
        balance: D
      };
    });
  }, [t]), i = t[0]?.currency || "USD", u = t[0]?.local;
  return /* @__PURE__ */ e("div", { className: "ledger-view", style: { display: "flex", flexDirection: "column", gap: 16 }, children: d.map((g) => /* @__PURE__ */ r("div", { style: { border: "1px solid var(--rad-border-color, hsl(220,13%,91%))", borderRadius: 8, overflow: "hidden" }, children: [
    /* @__PURE__ */ r("div", { style: { padding: "10px 14px", fontWeight: 600, fontSize: 14, background: "var(--rad-surface, #f8f9fa)", borderBottom: "1px solid var(--rad-border-color, hsl(220,13%,91%))" }, children: [
      g.account,
      /* @__PURE__ */ r("span", { style: { float: "right", fontWeight: 500, fontSize: 13, color: g.balance >= 0 ? "#198754" : "#dc3545" }, children: [
        a.runningBalance,
        ": ",
        L.currency(Math.abs(g.balance), i, u),
        " ",
        g.balance >= 0 ? `(${a.debit})` : `(${a.credit})`
      ] })
    ] }),
    /* @__PURE__ */ r("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { style: { background: "var(--rad-surface, #f8f9fa)" }, children: [
        /* @__PURE__ */ e("th", { style: q, children: a.date }),
        /* @__PURE__ */ e("th", { style: q, children: a.description }),
        /* @__PURE__ */ e("th", { style: { ...q, textAlign: "right" }, children: a.debit }),
        /* @__PURE__ */ e("th", { style: { ...q, textAlign: "right" }, children: a.credit }),
        /* @__PURE__ */ e("th", { style: { ...q, textAlign: "right" }, children: a.runningBalance })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: g.entries.map((s, h) => /* @__PURE__ */ r("tr", { style: { borderBottom: "1px solid var(--rad-border-color, hsl(220,13%,91%))" }, children: [
        /* @__PURE__ */ e("td", { style: V, children: s.date }),
        /* @__PURE__ */ e("td", { style: V, children: s.text }),
        /* @__PURE__ */ e("td", { style: { ...V, textAlign: "right" }, children: s.isDebit ? L.currency(s.amount, i, u) : "" }),
        /* @__PURE__ */ e("td", { style: { ...V, textAlign: "right" }, children: s.isDebit ? "" : L.currency(s.amount, i, u) }),
        /* @__PURE__ */ e("td", { style: { ...V, textAlign: "right", fontWeight: 500, color: s.runningBalance >= 0 ? "#198754" : "#dc3545" }, children: L.currency(Math.abs(s.runningBalance), i, u) })
      ] }, s.id || h)) }),
      /* @__PURE__ */ e("tfoot", { children: /* @__PURE__ */ r("tr", { style: { fontWeight: 600, background: "var(--rad-surface, #f8f9fa)" }, children: [
        /* @__PURE__ */ e("td", { style: V, colSpan: 2, children: a.grandTotal }),
        /* @__PURE__ */ e("td", { style: { ...V, textAlign: "right" }, children: L.currency(g.totalDebit, i, u) }),
        /* @__PURE__ */ e("td", { style: { ...V, textAlign: "right" }, children: L.currency(g.totalCredit, i, u) }),
        /* @__PURE__ */ e("td", { style: V })
      ] }) })
    ] })
  ] }, g.account)) });
}, q = { padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12, textTransform: "uppercase", color: "#6c757d" }, V = { padding: "8px 12px" }, me = [
  {
    date: "2024-01-01",
    text: "Received capital from shareholders",
    isDebit: !0,
    amount: 9e4,
    account: "Cash",
    currency: "USD",
    category: "Equity",
    tags: [
      "opening"
    ]
  },
  {
    date: "2024-01-01",
    text: "Received capital from shareholders",
    amount: 9e4,
    account: "Common Stock",
    currency: "USD",
    category: "Equity",
    tags: [
      "opening"
    ]
  },
  {
    date: "2024-01-05",
    text: "Paid rent for January",
    isDebit: !0,
    amount: 2e3,
    account: "Rent",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "fixed"
    ]
  },
  {
    date: "2024-01-05",
    text: "Paid rent for January",
    amount: 2e3,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "fixed"
    ]
  },
  {
    date: "2024-01-08",
    text: "Purchased office furniture",
    isDebit: !0,
    amount: 5e3,
    account: "Furniture",
    currency: "USD",
    category: "Investing",
    tags: [
      "equipment"
    ]
  },
  {
    date: "2024-01-08",
    text: "Purchased office furniture",
    amount: 5e3,
    account: "Cash",
    currency: "USD",
    category: "Investing",
    tags: [
      "equipment"
    ]
  },
  {
    date: "2024-01-10",
    text: "Office supplies purchase",
    isDebit: !0,
    amount: 500,
    account: "Supplies",
    currency: "USD",
    category: "Operating",
    tags: [
      "supplies"
    ]
  },
  {
    date: "2024-01-10",
    text: "Office supplies purchase",
    amount: 500,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "supplies"
    ]
  },
  {
    date: "2024-01-12",
    text: "Received payment from client A",
    isDebit: !0,
    amount: 12e3,
    account: "Cash",
    currency: "USD",
    category: "Revenue",
    tags: [
      "sales",
      "client-a"
    ]
  },
  {
    date: "2024-01-12",
    text: "Received payment from client A",
    amount: 12e3,
    account: "Sales Revenue",
    currency: "USD",
    category: "Revenue",
    tags: [
      "sales",
      "client-a"
    ]
  },
  {
    date: "2024-01-15",
    text: "Sales revenue from online store",
    isDebit: !0,
    amount: 8500,
    account: "Cash",
    currency: "USD",
    category: "Revenue",
    tags: [
      "sales",
      "online"
    ]
  },
  {
    date: "2024-01-15",
    text: "Sales revenue from online store",
    amount: 8500,
    account: "Sales Revenue",
    currency: "USD",
    category: "Revenue",
    tags: [
      "sales",
      "online"
    ]
  },
  {
    date: "2024-01-18",
    text: "Paid internet and phone bill",
    isDebit: !0,
    amount: 350,
    account: "Utilities",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "utilities"
    ]
  },
  {
    date: "2024-01-18",
    text: "Paid internet and phone bill",
    amount: 350,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "utilities"
    ]
  },
  {
    date: "2024-01-20",
    text: "Employee salary - John",
    isDebit: !0,
    amount: 4500,
    account: "Payroll",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    date: "2024-01-20",
    text: "Employee salary - John",
    amount: 4500,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    date: "2024-01-20",
    text: "Employee salary - Sarah",
    isDebit: !0,
    amount: 3800,
    account: "Payroll",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    date: "2024-01-20",
    text: "Employee salary - Sarah",
    amount: 3800,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    date: "2024-01-22",
    text: "Insurance premium payment",
    isDebit: !0,
    amount: 1200,
    account: "Insurance",
    currency: "USD",
    category: "Operating",
    tags: [
      "quarterly",
      "insurance"
    ]
  },
  {
    date: "2024-01-22",
    text: "Insurance premium payment",
    amount: 1200,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "quarterly",
      "insurance"
    ]
  },
  {
    date: "2024-01-25",
    text: "Electricity bill payment",
    isDebit: !0,
    amount: 450,
    account: "Utilities",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "utilities"
    ]
  },
  {
    date: "2024-01-25",
    text: "Electricity bill payment",
    amount: 450,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "utilities"
    ]
  },
  {
    date: "2024-01-28",
    text: "Consulting service revenue",
    isDebit: !0,
    amount: 6e3,
    account: "Cash",
    currency: "USD",
    category: "Revenue",
    tags: [
      "consulting"
    ]
  },
  {
    date: "2024-01-28",
    text: "Consulting service revenue",
    amount: 6e3,
    account: "Service Revenue",
    currency: "USD",
    category: "Revenue",
    tags: [
      "consulting"
    ]
  },
  {
    date: "2024-01-30",
    text: "Marketing campaign expense",
    isDebit: !0,
    amount: 3e3,
    account: "Marketing",
    currency: "USD",
    category: "Operating",
    tags: [
      "marketing",
      "ads"
    ]
  },
  {
    date: "2024-01-30",
    text: "Marketing campaign expense",
    amount: 3e3,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "marketing",
      "ads"
    ]
  },
  {
    date: "2024-02-01",
    text: "Paid rent for February",
    isDebit: !0,
    amount: 2e3,
    account: "Rent",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "fixed"
    ]
  },
  {
    date: "2024-02-01",
    text: "Paid rent for February",
    amount: 2e3,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "fixed"
    ]
  },
  {
    date: "2024-02-05",
    text: "Received payment from client B",
    isDebit: !0,
    amount: 9500,
    account: "Cash",
    currency: "USD",
    category: "Revenue",
    tags: [
      "sales",
      "client-b"
    ]
  },
  {
    date: "2024-02-05",
    text: "Received payment from client B",
    amount: 9500,
    account: "Sales Revenue",
    currency: "USD",
    category: "Revenue",
    tags: [
      "sales",
      "client-b"
    ]
  },
  {
    date: "2024-02-10",
    text: "Software subscription renewal",
    isDebit: !0,
    amount: 800,
    account: "Software",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "software"
    ]
  },
  {
    date: "2024-02-10",
    text: "Software subscription renewal",
    amount: 800,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "software"
    ]
  },
  {
    date: "2024-02-15",
    text: "Loan repayment - principal",
    isDebit: !0,
    amount: 2500,
    account: "Loan Payable",
    currency: "USD",
    category: "Financing",
    tags: [
      "loan",
      "monthly"
    ]
  },
  {
    date: "2024-02-15",
    text: "Loan repayment - principal",
    amount: 2500,
    account: "Cash",
    currency: "USD",
    category: "Financing",
    tags: [
      "loan",
      "monthly"
    ]
  },
  {
    date: "2024-02-15",
    text: "Loan interest expense",
    isDebit: !0,
    amount: 375,
    account: "Interest Expense",
    currency: "USD",
    category: "Financing",
    tags: [
      "loan",
      "interest"
    ]
  },
  {
    date: "2024-02-15",
    text: "Loan interest expense",
    amount: 375,
    account: "Cash",
    currency: "USD",
    category: "Financing",
    tags: [
      "loan",
      "interest"
    ]
  },
  {
    date: "2024-02-20",
    text: "Employee salary - John",
    isDebit: !0,
    amount: 4500,
    account: "Payroll",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    date: "2024-02-20",
    text: "Employee salary - John",
    amount: 4500,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    date: "2024-02-20",
    text: "Employee salary - Sarah",
    isDebit: !0,
    amount: 3800,
    account: "Payroll",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  },
  {
    date: "2024-02-20",
    text: "Employee salary - Sarah",
    amount: 3800,
    account: "Cash",
    currency: "USD",
    category: "Operating",
    tags: [
      "monthly",
      "salary"
    ]
  }
], dt = (t) => {
  if (!t || t.length === 0) return [];
  const n = Qe(t, "date");
  return Object.entries(n).map(([a, d]) => ({ date: a, content: d }));
}, Ce = pe((t, n) => {
  const [a, d] = M("toPng"), [i, u] = M(!1), g = j(null), s = H(P), { isDragging: h, setIsDragging: D, onDragOver: c, onDragLeave: w } = ct();
  if (!s) return null;
  const { state: l, labels: f, pageSize: I, undo: v, redo: k, updateState: o } = s, x = l.history.length > 1 || l.data && l.data.length > 0 ? l.data || [] : me, T = K(() => {
    let y = x;
    if (l.searchTerm) {
      const p = l.searchTerm.toLowerCase();
      y = y.filter(
        (N) => N.text.toLowerCase().includes(p) || N.account.toLowerCase().includes(p) || N.category && N.category.toLowerCase().includes(p) || N.tags && N.tags.some((E) => E.toLowerCase().includes(p))
      );
    }
    return l.dateFilter?.start && (y = y.filter((p) => p.date >= l.dateFilter.start)), l.dateFilter?.end && (y = y.filter((p) => p.date <= l.dateFilter.end)), l.filterAccount && (y = y.filter((p) => p.account === l.filterAccount)), l.filterCategory && (y = y.filter((p) => p.category === l.filterCategory)), y;
  }, [x, l.searchTerm, l.dateFilter, l.filterAccount, l.filterCategory]), b = K(() => l.sortField ? [...T].sort((y, p) => {
    let N, E;
    l.sortField === "date" ? (N = y.date, E = p.date) : l.sortField === "account" ? (N = y.account, E = p.account) : (N = y.amount, E = p.amount);
    const W = N > E ? 1 : N < E ? -1 : 0;
    return l.sortOrder === "desc" ? -W : W;
  }) : T, [T, l.sortField, l.sortOrder]), C = I ? Math.max(1, Math.ceil(b.length / I)) : 1, S = Math.min(l.currentPage, C), F = I ? b.slice((S - 1) * I, S * I) : b, U = T.filter((y) => y.isDebit).reduce((y, p) => y + p.amount, 0), R = T.filter((y) => !y.isDebit).reduce((y, p) => y + p.amount, 0), _ = Math.abs(U - R) < 0.01, ne = T[0]?.currency || "USD", ae = T[0]?.local, X = j(null), Y = j(null);
  te.useEffect(() => {
    const y = (p) => {
      g.current && !g.current.contains(p.target) && u(!1);
    };
    return i && document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [i]);
  const ke = () => {
    const y = {};
    for (const p of x)
      y[p.account] || (y[p.account] = { debit: 0, credit: 0, balance: 0 }), p.isDebit ? y[p.account].debit += p.amount : y[p.account].credit += p.amount, y[p.account].balance = y[p.account].debit - y[p.account].credit;
    return y;
  }, Z = (y) => {
    const p = document.getElementById("diary");
    return p ? y === "toPdf" ? ve(p, "png", 2).then((N) => L.extractDoc(N)).catch((N) => console.error("Export failed:", N)) : Ze(p, y === "toJpeg" ? "jpeg" : "png").catch((N) => console.error("Export failed:", N)) : Promise.resolve();
  };
  Oe(n, () => ({
    exportToPNG: () => Z("toPng").then(() => {
    }),
    exportToJPEG: () => Z("toJpeg").then(() => {
    }),
    exportToPDF: () => Z("toPdf").then(() => {
    }),
    exportToCSV: () => rt(x),
    exportToExcel: () => ot(x),
    exportToJSON: () => it(x),
    importJSON: (y) => {
      try {
        const N = JSON.parse(y).map((E) => ({ ...E, id: E.id || $() }));
        o({ data: [...l.data || [], ...N] });
      } catch {
      }
    },
    addTransaction: (y) => {
      const p = { ...y, id: $() };
      o({ data: [...l.data || [], p] });
    },
    undo: v,
    redo: k,
    getData: () => x,
    getTotals: () => ({
      debit: U,
      credit: R,
      balance: U - R,
      isBalanced: _
    }),
    getAccountSummary: ke
  }));
  const Ne = async (y) => {
    const p = y.target.files?.[0];
    if (p) {
      try {
        const E = (await we(p)).map((W) => ({ ...W, id: W.id || $() }));
        o({ data: [...l.data || [], ...E] });
      } catch {
      }
      X.current && (X.current.value = "");
    }
  }, Te = async (y) => {
    const p = y.target.files?.[0];
    if (p) {
      try {
        const E = (await Se(p)).map((W) => ({ ...W, id: W.id || $() }));
        o({ data: [...l.data || [], ...E] });
      } catch {
      }
      Y.current && (Y.current.value = "");
    }
  }, Ie = () => Z(a), se = (y) => {
    o({ currentPage: Math.max(1, Math.min(y, C)) });
  }, Ue = () => {
    o({ viewMode: l.viewMode === "diary" ? "ledger" : "diary" });
  };
  return /* @__PURE__ */ r(
    "div",
    {
      onDragOver: c,
      onDragLeave: w,
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
        h && /* @__PURE__ */ e(lt, { onDone: () => D(!1) }),
        /* @__PURE__ */ r("div", { style: { display: "flex", marginBottom: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }, children: [
          /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            t.showExport !== !1 && /* @__PURE__ */ r("div", { className: "export", children: [
              /* @__PURE__ */ r("button", { id: a === "toJpeg" ? "active" : "", onClick: () => d("toJpeg"), style: { padding: "8px 12px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ e(de, { size: 12 }),
                " JPEG"
              ] }),
              /* @__PURE__ */ r("button", { id: a === "toPng" ? "active" : "", onClick: () => d("toPng"), style: { padding: "8px 12px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ e(de, { size: 12 }),
                " PNG"
              ] }),
              /* @__PURE__ */ r("button", { id: a === "toPdf" ? "active" : "", onClick: () => d("toPdf"), style: { padding: "8px 12px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ e(_e, { size: 12 }),
                " PDF"
              ] })
            ] }),
            t.showUndo !== !1 && /* @__PURE__ */ r("div", { className: "global-action", style: { display: "flex", gap: 4 }, children: [
              /* @__PURE__ */ e("button", { className: "sample doer", disabled: !(l.history.length > 1 && l.doIndex > 0), onClick: () => v(), title: "Undo", style: { padding: "8px" }, children: /* @__PURE__ */ e(Pe, { strokeWidth: 2.5, size: 14 }) }),
              /* @__PURE__ */ e("button", { className: "sample doer", onClick: () => k(), disabled: !(l.doIndex + 1 < l.history.length), title: "Redo", style: { padding: "8px" }, children: /* @__PURE__ */ e(We, { strokeWidth: 2.5, size: 14 }) })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            t.showExport !== !1 && /* @__PURE__ */ r("button", { className: "btn-export", style: { backgroundColor: t.saveColor, padding: "8px 16px", fontSize: "13px" }, title: f.export, onClick: Ie, "aria-label": "Export accounting diary", children: [
              /* @__PURE__ */ e(Je, { size: 16, "aria-hidden": "true" }),
              /* @__PURE__ */ e("span", { children: f.export })
            ] }),
            t.showAdd !== !1 && /* @__PURE__ */ e(Ye, {})
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "global-action", style: { display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }, children: [
          t.showSample !== !1 && /* @__PURE__ */ r("button", { className: "sample", onClick: () => o({ data: me }), title: f.sample, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(qe, { size: 11 }),
            " ",
            f.sample
          ] }),
          t.showClear !== !1 && /* @__PURE__ */ r("button", { className: "reset", onClick: () => o({ data: [] }), title: f.clear, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(fe, { size: 11 }),
            " ",
            f.clear
          ] }),
          /* @__PURE__ */ e("div", { style: { width: 1, height: 20, background: "hsl(220, 13%, 91%)" } }),
          /* @__PURE__ */ r("button", { className: "sample", onClick: () => X.current?.click(), title: "Import CSV", style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(ce, { size: 11 }),
            " CSV"
          ] }),
          /* @__PURE__ */ r("button", { className: "sample", onClick: () => Y.current?.click(), title: f.importJSON, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(ce, { size: 11 }),
            " JSON"
          ] }),
          /* @__PURE__ */ e("input", { ref: X, type: "file", accept: ".csv", style: { display: "none" }, onChange: Ne }),
          /* @__PURE__ */ e("input", { ref: Y, type: "file", accept: ".json", style: { display: "none" }, onChange: Te }),
          /* @__PURE__ */ e("div", { style: { width: 1, height: 20, background: "hsl(220, 13%, 91%)" } }),
          t.showLedgerToggle !== !1 && /* @__PURE__ */ e("button", { className: "sample", onClick: Ue, title: l.viewMode === "diary" ? f.ledgerView : f.diaryView, style: { padding: "6px 10px", fontSize: "12px" }, children: l.viewMode === "diary" ? f.ledgerView : f.diaryView }),
          /* @__PURE__ */ r("div", { ref: g, style: { position: "relative", display: "inline-block" }, children: [
            /* @__PURE__ */ r("button", { className: "sample", onClick: () => u(!i), title: f.templates, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ e(xe, { size: 11 }),
              " ",
              f.templates
            ] }),
            i && /* @__PURE__ */ e("div", { style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 20,
              marginTop: 4,
              background: "white",
              border: "1px solid hsl(220, 13%, 91%)",
              borderRadius: 6,
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
              minWidth: 200,
              padding: "4px 0"
            }, children: be.map((y, p) => /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  o({ templateItem: y, openAddDialogCount: (l.openAddDialogCount || 0) + 1 }), u(!1);
                },
                style: {
                  display: "block",
                  width: "100%",
                  padding: "8px 14px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "hsl(224, 71%, 4%)",
                  transition: "background 150ms"
                },
                onMouseEnter: (N) => N.currentTarget.style.background = "hsl(220, 14%, 96%)",
                onMouseLeave: (N) => N.currentTarget.style.background = "none",
                children: y.name
              },
              p
            )) })
          ] })
        ] }),
        t.showSearch !== !1 && /* @__PURE__ */ r("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ e(nt, {}),
          /* @__PURE__ */ e(at, {})
        ] }),
        /* @__PURE__ */ r(
          "div",
          {
            id: "diary",
            style: { padding: 8 },
            role: "table",
            "aria-label": "Accounting diary entries",
            children: [
              /* @__PURE__ */ r(
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
              F.length === 0 ? /* @__PURE__ */ r("div", { className: "empty-state", children: [
                /* @__PURE__ */ e("div", { className: "empty-state-icon", children: /* @__PURE__ */ r("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
                  /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
                  /* @__PURE__ */ e("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
                  /* @__PURE__ */ e("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
                ] }) }),
                /* @__PURE__ */ e("p", { className: "empty-state-text", children: f.noData }),
                t.showAdd !== !1 && /* @__PURE__ */ e(
                  "button",
                  {
                    className: "empty-state-cta",
                    onClick: () => o({ openAddDialogCount: (l.openAddDialogCount || 0) + 1 }),
                    "aria-label": f.addTransaction,
                    children: f.addTransaction
                  }
                )
              ] }) : l.viewMode === "ledger" ? /* @__PURE__ */ e(st, { data: F }) : dt(F).map((y, p, N) => /* @__PURE__ */ r(te.Fragment, { children: [
                /* @__PURE__ */ e(
                  Be,
                  {
                    date: y.date,
                    columnHeader: t.columnHeader,
                    columnHeaderColor: t.columnHeaderColor,
                    columnHeaderBgColor: t.columnHeaderBgColor,
                    index: p,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  }
                ),
                et(y.content, "isDebit", "asc").map((E, W) => /* @__PURE__ */ e(
                  tt,
                  {
                    value: E,
                    length: N.length,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  },
                  E.id || W
                )),
                /* @__PURE__ */ e(
                  Me,
                  {
                    account: t.account,
                    columnHeader: t.columnHeader,
                    index: p,
                    footer: t.footer,
                    amount: t.amount,
                    data: y.content,
                    showEdit: t.showEdit
                  }
                )
              ] }, y.date)),
              t.showGrandTotal !== !1 && T.length > 0 && /* @__PURE__ */ r("div", { className: "grand-total", children: [
                /* @__PURE__ */ r("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ e("span", { className: "grand-total-label", children: f.grandTotal }),
                  /* @__PURE__ */ r("span", { className: "grand-total-amounts", children: [
                    /* @__PURE__ */ r("span", { className: "grand-total-debit", children: [
                      f.debit,
                      ": ",
                      L.currency(U, ne, ae)
                    ] }),
                    /* @__PURE__ */ r("span", { className: "grand-total-credit", children: [
                      f.credit,
                      ": ",
                      L.currency(R, ne, ae)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ e("span", { className: "grand-total-label", children: f.balance }),
                  /* @__PURE__ */ e("span", { className: `balance-badge ${_ ? "balanced" : "unbalanced"}`, children: _ ? `✓ ${f.balanced}` : `⚠ ${f.unbalanced} (${L.currency(Math.abs(U - R), ne, ae)})` })
                ] })
              ] })
            ]
          }
        ),
        I && C > 1 && /* @__PURE__ */ r("div", { className: "pagination", children: [
          /* @__PURE__ */ e("button", { disabled: S <= 1, onClick: () => se(S - 1), children: "←" }),
          /* @__PURE__ */ r("span", { children: [
            f.page,
            " ",
            S,
            " ",
            f.of,
            " ",
            C
          ] }),
          /* @__PURE__ */ e("button", { disabled: S >= C, onClick: () => se(S + 1), children: "→" })
        ] })
      ]
    }
  );
});
Ce.displayName = "AccountingDiary";
const ut = {
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
}, gt = {
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
}, ht = Ee(void 0), yt = ({ children: t, theme: n }) => {
  const [a, d] = M(n === "dark");
  te.useEffect(() => {
    n && d(n === "dark");
  }, [n]);
  const i = a ? gt : ut, u = () => d(!a);
  return /* @__PURE__ */ e(ht.Provider, { value: { theme: i, toggleTheme: u }, children: t });
}, mt = pe((t, n) => /* @__PURE__ */ e(yt, { theme: t.theme, children: /* @__PURE__ */ e(
  Fe,
  {
    initialData: t.data,
    labels: t.labels,
    pageSize: t.pageSize,
    onAdd: t.onAdd,
    onDelete: t.onDelete,
    onEdit: t.onEdit,
    onChange: t.onChange,
    onBeforeAdd: t.onBeforeAdd,
    onBeforeEdit: t.onBeforeEdit,
    onBeforeDelete: t.onBeforeDelete,
    children: /* @__PURE__ */ e(Ce, { ref: n, ...t })
  }
) }));
mt.displayName = "AccountingDiaryWrapper";
const xt = (t = {}) => {
  const { initialData: n = [], onChange: a, onBeforeAdd: d, onBeforeEdit: i, onBeforeDelete: u } = t, [g, s] = M([n]), [h, D] = M(0), c = g[h], w = B((b) => {
    s((C) => [...C.slice(0, h + 1), b]), D((C) => C + 1), a?.(b);
  }, [h, a]), l = B(async (b) => {
    const C = { ...b, id: $() };
    return d && !await d(C) ? !1 : (w([...c, C]), !0);
  }, [c, w, d]), f = B(async (b, C) => {
    const S = c.findIndex((_) => _.id === b);
    if (S === -1) return !1;
    const F = c[S], U = { ...F, ...C };
    if (i && !await i(F, U)) return !1;
    const R = [...c];
    return R[S] = U, w(R), !0;
  }, [c, w, i]), I = B(async (b) => {
    const C = c.find((S) => S.id === b);
    return !C || u && !await u(C) ? !1 : (w(c.filter((S) => S.id !== b)), !0);
  }, [c, w, u]), v = B(() => {
    h > 0 && (D((b) => b - 1), a?.(g[h - 1]));
  }, [h, g, a]), k = B(() => {
    h + 1 < g.length && (D((b) => b + 1), a?.(g[h + 1]));
  }, [h, g, a]), o = K(() => {
    const b = c.filter((S) => S.isDebit).reduce((S, F) => S + F.amount, 0), C = c.filter((S) => !S.isDebit).reduce((S, F) => S + F.amount, 0);
    return { debit: b, credit: C, balance: b - C, isBalanced: Math.abs(b - C) < 0.01 };
  }, [c]), m = K(() => {
    const b = {};
    for (const C of c)
      b[C.account] || (b[C.account] = { debit: 0, credit: 0, balance: 0 }), C.isDebit ? b[C.account].debit += C.amount : b[C.account].credit += C.amount, b[C.account].balance = b[C.account].debit - b[C.account].credit;
    return b;
  }, [c]), x = B((b) => {
    try {
      const S = JSON.parse(b).map((F) => ({ ...F, id: F.id || $() }));
      w([...c, ...S]);
    } catch {
    }
  }, [c, w]), T = B(() => JSON.stringify(c, null, 2), [c]);
  return {
    data: c,
    addTransaction: l,
    editTransaction: f,
    deleteTransaction: I,
    undo: v,
    redo: k,
    canUndo: h > 0,
    canRedo: h + 1 < g.length,
    totals: o,
    accountSummary: m,
    importJSON: x,
    exportJSON: T
  };
};
export {
  Ce as AccountingDiary,
  mt as AccountingDiaryWrapper,
  Ye as DialogOperation,
  lt as DropZoneOverlay,
  at as FilterDropdown,
  Me as Footer,
  Fe as GlobalProvider,
  Be as Header,
  st as LedgerView,
  mt as default,
  Ae as defaultLabels,
  rt as exportToCSV,
  ot as exportToExcel,
  it as exportToJSON,
  we as importFromCSV,
  Se as importFromJSON,
  xt as useAccountingDiary
};
