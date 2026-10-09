(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('@charset "UTF-8";.dialog-overlay{position:fixed;inset:0;z-index:1000;background:#0006;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;animation:overlayIn .15s ease}@keyframes overlayIn{0%{opacity:0}to{opacity:1}}.dialog-modal{background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:calc(var(--rad-radius) + 4px);box-shadow:0 16px 70px -12px #00000040;width:440px;max-width:calc(100vw - 32px);max-height:calc(100vh - 64px);overflow-y:auto;font-family:var(--rad-font);animation:modalIn .2s cubic-bezier(.16,1,.3,1)}@keyframes modalIn{0%{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}.dialog-header{display:flex;justify-content:space-between;align-items:flex-start;padding:24px 24px 0}.dialog-title{margin:0;font-weight:600;font-size:16px;color:var(--rad-text);letter-spacing:-.02em;line-height:1.4}.dialog-description{margin:4px 0 0;font-size:13px;color:var(--rad-text-muted);line-height:1.4}.dialog-close{background:none;border:none;cursor:pointer;padding:6px;border-radius:var(--rad-radius-sm);color:var(--rad-text-muted);transition:all var(--rad-transition);flex-shrink:0}.dialog-close:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.dialog-body{padding:20px 24px;display:flex;flex-direction:column;gap:16px}.dialog-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:end}.dialog-footer{display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--rad-border-color);background:var(--rad-bg-muted);border-radius:0 0 calc(var(--rad-radius) + 4px) calc(var(--rad-radius) + 4px)}.btn-cancel,.btn-confirm{padding:8px 16px;border-radius:var(--rad-radius-sm);font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition)}.btn-cancel:active,.btn-confirm:active{transform:scale(.98)}.btn-cancel:focus-visible,.btn-confirm:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-cancel{background:var(--rad-bg);color:var(--rad-text-secondary);border:1px solid var(--rad-border-color);box-shadow:var(--rad-shadow-sm)}.btn-cancel:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.btn-confirm{background:var(--rad-text);color:#fff;border:none;box-shadow:var(--rad-shadow-sm)}.btn-confirm:hover{opacity:.9}.control{display:flex;flex-direction:column;margin:0}.control label{display:block;font-size:12px;margin-bottom:6px;font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.control input,.control select,.control textarea{width:100%;height:36px;padding:0 10px;border-radius:var(--rad-radius-sm);box-sizing:border-box;border:1px solid var(--rad-border-color);font-size:13px;font-family:inherit;transition:all var(--rad-transition);background:var(--rad-bg);color:var(--rad-text)}.control input::placeholder,.control select::placeholder,.control textarea::placeholder{color:var(--rad-text-muted)}.control input:hover,.control select:hover,.control textarea:hover{border-color:#c5cad3}.control input:focus,.control select:focus,.control textarea:focus{outline:none;border-color:var(--rad-primary);box-shadow:0 0 0 3px var(--rad-primary-ring)}.control textarea{height:auto;min-height:60px;padding:8px 10px;resize:vertical;line-height:1.5}.control select{cursor:pointer}.control-check{display:flex;align-items:center;margin:0;gap:8px;height:36px}.control-check label{font-size:13px;font-weight:500;color:var(--rad-text);margin:0;cursor:pointer;-webkit-user-select:none;user-select:none}.control-check input{width:16px;height:16px;cursor:pointer;accent-color:var(--rad-primary);border-radius:4px;flex-shrink:0}:root{--rad-font: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--rad-border: 1px;--rad-border-color: hsl(220, 13%, 91%);--rad-primary: hsl(221, 83%, 53%);--rad-primary-hover: hsl(221, 83%, 46%);--rad-primary-ring: hsla(221, 83%, 53%, .15);--rad-danger: hsl(0, 84%, 60%);--rad-danger-hover: hsl(0, 84%, 53%);--rad-danger-ring: hsla(0, 84%, 60%, .15);--rad-success: hsl(142, 71%, 45%);--rad-success-hover: hsl(142, 71%, 38%);--rad-success-ring: hsla(142, 71%, 45%, .15);--rad-bg: hsl(0, 0%, 100%);--rad-bg-muted: hsl(220, 14%, 96%);--rad-bg-hover: hsl(220, 14%, 96%);--rad-text: hsl(224, 71%, 4%);--rad-text-muted: hsl(220, 9%, 46%);--rad-text-secondary: hsl(220, 9%, 36%);--rad-radius: 8px;--rad-radius-sm: 6px;--rad-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--rad-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);--rad-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--rad-transition: .15s cubic-bezier(.4, 0, .2, 1)}.insertion{display:flex;width:100%;font-size:13px;font-family:var(--rad-font);border-bottom:var(--rad-border) solid var(--rad-border-color);transition:background var(--rad-transition);align-items:stretch}.insertion:hover{background:var(--rad-bg-hover)}.flex-col{display:flex;flex-direction:column;justify-content:center}.description{border-left:var(--rad-border) solid var(--rad-border-color)!important;border-right:var(--rad-border) solid var(--rad-border-color)!important;padding:8px 16px;flex:1;min-width:150px;min-height:36px;box-sizing:border-box}.border-bottom{border-bottom:var(--rad-border) solid var(--rad-border-color)!important}.border-top{border-top:2px solid var(--rad-border-color)!important}.date,.transaction-title{text-align:center;padding:6px 0;font-size:13px}.date{font-weight:500;color:var(--rad-text);letter-spacing:-.01em}.transaction-content{flex:1;color:var(--rad-text-muted);line-height:1.5}.debit,.credit{padding:8px 12px;border-left:var(--rad-border) solid var(--rad-border-color)!important;text-align:center;font-weight:500;color:var(--rad-text);min-width:140px;max-width:160px;min-height:36px;box-sizing:border-box;flex-shrink:0}.debit div,.credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-debit,.amount-credit{padding:8px 12px;border-right:var(--rad-border) solid var(--rad-border-color)!important;text-align:right;font-weight:500;color:var(--rad-text);font-variant-numeric:tabular-nums;font-family:var(--rad-font-mono);min-width:120px;max-width:180px;min-height:36px;box-sizing:border-box;flex-shrink:0}.amount-debit div,.amount-credit div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}html,body,#root{height:100%}#root{overflow-y:auto;padding:32px;box-sizing:border-box;background:var(--rad-bg-muted)}.btn-export{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 16px;height:36px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;font-weight:500;font-size:13px;cursor:pointer;box-shadow:var(--rad-shadow-sm);transition:all var(--rad-transition);letter-spacing:-.01em}.btn-export:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-export:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-export:active{transform:scale(.98)}.btn-save-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-primary);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-save-accounting:hover{background:var(--rad-primary-hover);box-shadow:var(--rad-shadow)}.btn-save-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.btn-add-accounting{width:36px;height:36px;cursor:pointer;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm);display:flex;align-items:center;justify-content:center}.btn-add-accounting:hover{opacity:.9;box-shadow:var(--rad-shadow)}.btn-add-accounting:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-text)}.btn-add-accounting:active{transform:scale(.96)}.export{display:inline-flex;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);overflow:hidden;background:var(--rad-bg);box-shadow:var(--rad-shadow-sm)}.export button{background:var(--rad-bg);border:none;cursor:pointer;padding:8px 14px;transition:all var(--rad-transition);font-weight:500;font-size:12px;color:var(--rad-text-muted);border-right:1px solid var(--rad-border-color)}.export button:last-child{border-right:none}.export button:hover{background:var(--rad-bg-muted);color:var(--rad-text)}.export button:active,.export button#active{background:var(--rad-text);color:#fff}.global-action{display:flex;gap:6px;align-items:center}.global-action button{padding:8px 12px;cursor:pointer;font-size:12px;font-weight:500;border-radius:var(--rad-radius-sm);transition:all var(--rad-transition);border:1px solid var(--rad-border-color);background:var(--rad-bg);color:var(--rad-text-secondary);box-shadow:var(--rad-shadow-sm)}.global-action button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text);box-shadow:var(--rad-shadow)}.global-action button:active:not(:disabled){transform:scale(.98)}.global-action button:disabled{opacity:.5;cursor:not-allowed}.global-action .reset{border-color:var(--rad-danger);color:var(--rad-danger);background:var(--rad-bg)}.global-action .reset:hover:not(:disabled){background:var(--rad-danger-ring);color:var(--rad-danger-hover)}.global-action .sample.doer{background:var(--rad-text);border-color:var(--rad-text);color:#fff;padding:8px 10px}.global-action .sample.doer:hover:not(:disabled){opacity:.9;background:var(--rad-text);color:#fff}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px;gap:12px}.empty-state .empty-state-icon{color:var(--rad-border-color);margin-bottom:4px}.empty-state .empty-state-text{color:var(--rad-text-muted);font-size:14px;margin:0}.empty-state .empty-state-cta{margin-top:8px;padding:8px 20px;border-radius:var(--rad-radius-sm);border:none;background:var(--rad-text);color:#fff;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.empty-state .empty-state-cta:hover{opacity:.9;box-shadow:var(--rad-shadow)}.empty-state .empty-state-cta:focus-visible{outline:none;box-shadow:0 0 0 2px var(--rad-bg),0 0 0 4px var(--rad-primary)}.insertion:focus{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary-ring);background:var(--rad-bg-hover)}.insertion:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--rad-primary);background:var(--rad-bg-hover)}.grand-total{margin-top:16px;padding:12px 16px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg-muted);font-family:var(--rad-font)}.grand-total .grand-total-row{display:flex;justify-content:space-between;align-items:center;padding:4px 0}.grand-total .grand-total-row:not(:last-child){border-bottom:1px solid var(--rad-border-color);padding-bottom:8px;margin-bottom:8px}.grand-total .grand-total-label{font-weight:600;font-size:13px;color:var(--rad-text);text-transform:uppercase;letter-spacing:.02em}.grand-total .grand-total-amounts{display:flex;gap:24px;font-size:13px;font-weight:600;font-family:var(--rad-font-mono);font-variant-numeric:tabular-nums}.grand-total .grand-total-debit,.grand-total .grand-total-credit{color:var(--rad-text)}.balance-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600}.balance-badge.balanced{background:var(--rad-success-ring);color:var(--rad-success)}.balance-badge.unbalanced{background:var(--rad-danger-ring);color:var(--rad-danger)}.pagination{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:16px;font-family:var(--rad-font);font-size:13px;color:var(--rad-text-muted)}.pagination button{padding:6px 12px;border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);background:var(--rad-bg);cursor:pointer;font-size:13px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition);box-shadow:var(--rad-shadow-sm)}.pagination button:hover:not(:disabled){background:var(--rad-bg-muted);color:var(--rad-text)}.pagination button:disabled{opacity:.4;cursor:not-allowed}.row-actions{position:relative;display:flex;align-items:center;width:32px;justify-content:center}.row-actions .row-actions-trigger{background:none;border:none;cursor:pointer;padding:4px;border-radius:var(--rad-radius-sm);opacity:.6;transition:all var(--rad-transition);display:flex;align-items:center;justify-content:center}.row-actions .row-actions-trigger:hover{background:var(--rad-success);color:#fff;opacity:1}.row-actions .row-actions-menu{position:absolute;right:0;top:100%;z-index:10;background:var(--rad-bg);border:1px solid var(--rad-border-color);border-radius:var(--rad-radius-sm);box-shadow:var(--rad-shadow-md);min-width:120px;overflow:hidden}.row-actions .row-actions-menu button{display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;border:none;background:none;cursor:pointer;font-size:12px;font-weight:500;color:var(--rad-text-secondary);transition:all var(--rad-transition)}.row-actions .row-actions-menu button:hover{background:var(--rad-success);color:#fff}.row-actions .row-actions-menu button.danger:hover{background:var(--rad-danger);color:#fff}.reconciliation-status{display:block;font-size:11px;opacity:.75;margin-top:4px}.period-chart{margin:16px 0;padding:16px;border:1px solid var(--rad-border-color, #dee2e6);border-radius:8px;color:var(--rad-text, #212529);background:var(--rad-surface, #f8f9fa)}.period-chart h2{font-size:15px;margin:0 0 12px}.period-chart .period-chart-scroll{overflow-x:auto}.period-chart table{width:100%;border-collapse:collapse;font-size:13px}.period-chart th,.period-chart td{padding:8px;text-align:left}.period-chart td{position:relative;min-width:70px}.period-chart td span{position:relative}.period-chart .period-bar{position:absolute;left:0;top:4px;bottom:4px;opacity:.2}.period-chart .period-bar.debit{background:#198754}.period-chart .period-bar.credit{background:#0d6efd}@media print{.export,.global-action,.btn-export,.row-actions,.pagination{display:none!important}#diary{padding:0!important;margin:0!important;box-shadow:none!important;border:none!important}.insertion{page-break-inside:avoid;break-inside:avoid}.insertion{border-bottom:1px solid #000!important}*{color:#000!important;background:#fff!important}.insertion{display:flex!important;width:100%!important}body{font-size:12pt!important;line-height:1.4!important}@page{margin:1cm;size:A4}.debit,.credit{flex:1!important}.amount-debit,.amount-credit{width:100px!important;text-align:right!important}}')),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsx as e, jsxs as c, Fragment as R } from "react/jsx-runtime";
import ie, { useRef as V, useState as H, useEffect as Y, useCallback as z, useContext as q, useMemo as X, forwardRef as ve, useImperativeHandle as Ee, createContext as ze } from "react";
let Re = 0;
const $ = () => `txn_${Date.now()}_${++Re}`, De = {
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
  dropFileHere: "Drop CSV or JSON file here",
  reconciliation: "Reconciliation",
  allTransactions: "All",
  reconciled: "Reconciled",
  unreconciled: "Unreconciled",
  periodSummary: "Debit / credit by period",
  period: "Period"
}, j = ie.createContext(void 0), Ae = ({ children: t, initialData: n, labels: a, pageSize: r, onAdd: o, onDelete: u, onEdit: d, onChange: i, onBeforeAdd: y, onBeforeEdit: f, onBeforeDelete: s }) => {
  const w = { ...De, ...a }, h = V(void 0), [m, N] = H(() => {
    const x = (n || []).map((k) => ({ ...k, id: k.id || $() }));
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
      reconciliationFilter: "all",
      templateItem: void 0
    };
  }), b = V(m);
  b.current = m, Y(() => {
    h.current === m.data && (h.current = void 0, i?.(m.data || []));
  }, [m.data, i]), Y(() => {
    n !== void 0 && N((x) => {
      if (x.data === n || JSON.stringify(x.data) === JSON.stringify(n)) return x;
      const k = n.map((O) => ({ ...O, id: O.id || $() }));
      return { ...x, data: k, history: [k], doIndex: 0, currentPage: 1 };
    });
  }, [n]);
  const C = z(() => {
    N((x) => {
      if (x.doIndex > 0) {
        const k = x.history[x.doIndex - 1];
        return h.current = k, {
          ...x,
          data: k,
          doIndex: x.doIndex - 1
        };
      }
      return x;
    });
  }, [i]), l = z(() => {
    N((x) => {
      let k = x.doIndex + 1;
      if (k < x.history.length) {
        const O = x.history[k];
        return h.current = O, {
          ...x,
          data: O,
          doIndex: k
        };
      }
      return x;
    });
  }, [i]), g = z((x) => {
    N((k) => {
      if ("data" in x && !("doIndex" in x)) {
        const O = x.data, P = [...[...k.history].slice(0, k.doIndex + 1), O];
        return h.current = O, {
          ...k,
          ...x,
          data: O,
          history: P,
          doIndex: P.length - 1
        };
      }
      return { ...k, ...x };
    });
  }, [i]), T = {
    state: m,
    labels: w,
    pageSize: r,
    undo: C,
    redo: l,
    setReconciled: async (x, k) => {
      if ((b.current.data || []).indexOf(x) < 0) return !1;
      const F = { ...x, reconciled: k };
      if (f && !await f(x, F)) return !1;
      const P = b.current.data || [], U = P.indexOf(x);
      if (U < 0) return !1;
      const W = [...P];
      return W[U] = F, d?.(x, F), g({ data: W }), !0;
    },
    updateState: g,
    onAdd: o,
    onDelete: u,
    onEdit: d,
    onChange: i,
    onBeforeAdd: y,
    onBeforeEdit: f,
    onBeforeDelete: s
  };
  return /* @__PURE__ */ e(j.Provider, { value: T, children: t });
}, _ = "var(--rad-border) solid var(--rad-border-color)", se = ({ field: t }) => {
  const n = q(j);
  if (!n) return null;
  const { state: a } = n;
  return a.sortField !== t ? /* @__PURE__ */ e("span", { style: { opacity: 0.3, marginLeft: 4, fontSize: 10 }, children: "↕" }) : /* @__PURE__ */ e("span", { style: { marginLeft: 4, fontSize: 10 }, children: a.sortOrder === "asc" ? "↑" : "↓" });
}, Be = (t) => {
  const n = q(j);
  if (!n) return null;
  const { labels: a, state: r, updateState: o } = n;
  let { date: u, index: d, columnHeader: i, columnHeaderColor: y, columnHeaderBgColor: f } = t;
  const s = d === 0 && i, w = `${u.split("-")[2]}/${u.split("-")[1]}/${u.split("-")[0]}`, { width: h, ...m } = t.account || {}, { width: N, ...b } = t.amount || {}, C = (g) => {
    const T = r.sortField === g && r.sortOrder === "asc" ? "desc" : "asc";
    o({ sortField: g, sortOrder: T });
  }, l = s ? { cursor: "pointer", userSelect: "none" } : {};
  return /* @__PURE__ */ c("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...m,
          borderTop: s ? _ : "",
          borderBottom: s ? _ : "",
          background: s ? f : ""
        },
        role: "columnheader",
        onClick: s ? () => C("account") : void 0,
        children: s ? /* @__PURE__ */ c("div", { className: "date", style: { color: y, ...l }, children: [
          a.debit,
          /* @__PURE__ */ e(se, { field: "account" })
        ] }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...m,
          borderTop: s ? _ : "",
          borderBottom: s ? _ : "",
          background: s ? f : ""
        },
        role: "columnheader",
        children: s ? /* @__PURE__ */ e("div", { className: "date", style: { color: y }, children: a.credit }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        style: {
          flex: 1,
          minWidth: 150,
          borderTop: s ? _ : "",
          borderBottom: s ? _ : "",
          background: s ? f : ""
        },
        role: "columnheader",
        onClick: s ? () => C("date") : void 0,
        children: s ? /* @__PURE__ */ c("div", { className: "date", style: { color: y, ...l }, children: [
          w,
          /* @__PURE__ */ e(se, { field: "date" })
        ] }) : /* @__PURE__ */ e(
          "div",
          {
            className: `flex-col description ${d === 0 ? "border-top" : ""}`,
            style: {
              borderTopLeftRadius: d === 0 && !i ? 6 : 0,
              borderTopRightRadius: d === 0 && !i ? 6 : 0,
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
          ...b,
          borderTop: s ? _ : "",
          borderBottom: s ? _ : "",
          background: s ? f : ""
        },
        role: "columnheader",
        onClick: s ? () => C("amount") : void 0,
        children: s ? /* @__PURE__ */ c("div", { className: "date", style: { color: y, ...l }, children: [
          a.debit,
          /* @__PURE__ */ e(se, { field: "amount" })
        ] }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...b,
          borderTop: s ? _ : "",
          borderBottom: s ? _ : "",
          background: s ? f : ""
        },
        role: "columnheader",
        children: s ? /* @__PURE__ */ e("div", { className: "date", style: { color: y }, children: a.credit }) : /* @__PURE__ */ e("div", { className: "date", children: " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ e("div", { style: { width: 32, flexShrink: 0 } })
  ] });
};
let de = null;
const Me = async () => (de || (de = (await import("pdfmake")).default), de), Pe = async (t) => {
  (await Me()).createPdf({
    pageMargins: 0,
    content: [
      {
        image: t,
        width: 595
      }
    ]
  }).download();
};
class J {
  static currency(n, a = "USD", r = "en-US") {
    return new Intl.NumberFormat(r, {
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
    Pe(n);
  }
}
const oe = "var(--rad-border) solid var(--rad-border-color)", Le = (t) => {
  const n = q(j);
  if (!n) return null;
  const { labels: a } = n, r = (t.data || []).filter((w) => w.isDebit).reduce((w, h) => w + h.amount, 0), o = (t.data || []).filter((w) => !w.isDebit).reduce((w, h) => w + h.amount, 0), u = t.data?.[0]?.currency || "USD", d = t.data?.[0]?.local, { width: i, ...y } = t.account || {}, { width: f, ...s } = t.amount || {};
  return /* @__PURE__ */ c("div", { className: "insertion", role: "row", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "debit flex-col",
        style: {
          ...y,
          borderBottom: t.columnHeader ? oe : ""
        },
        children: /* @__PURE__ */ e("div", { className: "transaction-title", children: " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "credit flex-col",
        style: {
          ...y,
          borderBottom: t.columnHeader ? oe : ""
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
          ...s,
          borderBottom: t.columnHeader ? oe : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ e("div", { className: "transaction-title", children: r > 0 ? J.currency(r, u, d) : " " })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "amount-credit flex-col",
        style: {
          ...s,
          borderBottom: t.columnHeader ? oe : "",
          fontWeight: 600,
          fontSize: 12
        },
        children: /* @__PURE__ */ e("div", { className: "transaction-title", children: o > 0 ? J.currency(o, u, d) : " " })
      }
    ),
    t.showEdit !== !1 && /* @__PURE__ */ e("div", { style: { width: 32, flexShrink: 0 } })
  ] });
}, B = { size: 16, strokeWidth: 2 }, M = (t, n) => /* @__PURE__ */ e(
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
), We = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("polyline", { points: "1 4 1 10 7 10" }),
    /* @__PURE__ */ e("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
  ] }));
}, Je = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("polyline", { points: "23 4 23 10 17 10" }),
    /* @__PURE__ */ e("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })
  ] }));
}, He = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ e("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] }));
}, he = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ e("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
  ] }));
}, $e = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }));
}, Ve = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] }));
}, je = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }) }));
}, Ge = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ] }));
}, _e = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }));
}, me = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("circle", { cx: "10", cy: "13", r: "2" }),
    /* @__PURE__ */ e("path", { d: "m20 17-1.1-1.1a2 2 0 0 0-2.81 0L10 22" })
  ] }));
}, qe = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
  ] }));
}, Se = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("polyline", { points: "3 6 5 6 21 6" }),
    /* @__PURE__ */ e("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    /* @__PURE__ */ e("line", { x1: "14", y1: "11", x2: "14", y2: "17" })
  ] }));
}, Ke = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    /* @__PURE__ */ e("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    /* @__PURE__ */ e("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ] }));
}, Xe = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "19", r: "1" })
  ] }));
}, pe = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }) }));
}, we = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "13", x2: "16", y2: "13" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "17", x2: "16", y2: "17" })
  ] }));
}, fe = (t = {}) => {
  const n = { ...B, ...t };
  return M(n, /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" }) }));
}, Ye = [
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
], Ce = [
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
], xe = {
  open: !1,
  isDebit: !1,
  reconciled: !1,
  amount: "",
  account: "",
  text: "",
  date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  currency: "USD",
  category: "",
  tags: ""
}, Ze = () => {
  const t = q(j), [n, a] = H(xe), [r, o] = H(!1), u = V(null), d = V(0);
  Y(() => {
    const l = t?.state.editingTransaction;
    l && a({
      open: !0,
      isDebit: l.isDebit ?? !1,
      reconciled: l.reconciled === !0,
      amount: l.amount,
      account: l.account,
      text: l.text,
      date: l.date,
      currency: l.currency || "USD",
      category: l.category || "",
      tags: l.tags?.join(", ") || ""
    });
  }, [t?.state.editingTransaction]), Y(() => {
    const l = t?.state.openAddDialogCount || 0;
    if (l > d.current) {
      const g = t?.state.templateItem;
      g ? (a({
        open: !0,
        isDebit: g.isDebit ?? !1,
        reconciled: g.reconciled === !0,
        amount: g.amount || "",
        account: g.account || "",
        text: g.text || "",
        date: g.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        currency: g.currency || "USD",
        category: g.category || "",
        tags: g.tags?.join(", ") || ""
      }), t?.updateState({ templateItem: void 0 })) : a((T) => ({ ...T, open: !0 }));
    }
    d.current = l;
  }, [t?.state.openAddDialogCount]), Y(() => {
    if (!n.open) return;
    const l = (g) => {
      g.key === "Escape" && y();
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [n.open]), Y(() => {
    const l = (g) => {
      u.current && !u.current.contains(g.target) && o(!1);
    };
    return r && document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, [r]);
  const i = z(() => {
    a((l) => ({ ...l, open: !0 }));
  }, []), y = z(() => {
    a(xe), o(!1), t?.state.editingTransaction && t.updateState({ editingTransaction: void 0 });
  }, [t]), f = (l) => {
    a((g) => ({
      ...g,
      isDebit: l.isDebit ?? g.isDebit,
      account: l.account || g.account,
      text: l.text || g.text,
      currency: l.currency || g.currency,
      category: l.category || g.category,
      tags: l.tags?.join(", ") || g.tags
    })), o(!1);
  };
  if (!t) return null;
  const { labels: s, onAdd: w, onEdit: h, onBeforeAdd: m, onBeforeEdit: N } = t, b = async () => {
    const l = Number(n.amount), g = n.account.trim(), T = n.text.trim(), x = n.date, k = n.category.trim() || void 0, O = n.tags.trim() ? n.tags.split(",").map((U) => U.trim()).filter(Boolean) : void 0;
    if (!l || l <= 0 || !g || !T || !x || isNaN(new Date(x).getTime())) return;
    const F = [...t.state.data || []], P = t.state.editingTransaction;
    if (P) {
      const U = F.findIndex((W) => W.id === P.id);
      if (U !== -1) {
        const W = { ...F[U], amount: l, account: g, isDebit: n.isDebit, reconciled: n.reconciled, text: T, date: x, currency: n.currency, category: k, tags: O };
        if (N && !await N(F[U], W)) return;
        h?.(F[U], W), F[U] = W;
      }
      t.updateState({ data: F, editingTransaction: void 0 });
    } else {
      const U = { id: $(), amount: l, account: g, isDebit: n.isDebit, reconciled: n.reconciled, text: T, date: x, currency: n.currency, category: k, tags: O };
      if (m && !await m(U)) return;
      w?.(U), F.push(U), t.updateState({ data: F });
    }
    y();
  }, C = !!t.state.editingTransaction;
  return /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ e("button", { onClick: i, className: "btn-add-accounting", title: s.addTransaction, children: /* @__PURE__ */ e($e, { size: 20 }) }),
    n.open && /* @__PURE__ */ e("div", { className: "dialog-overlay", onClick: y, children: /* @__PURE__ */ c("div", { className: "dialog-modal", onClick: (l) => l.stopPropagation(), children: [
      /* @__PURE__ */ c("div", { className: "dialog-header", children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ e("h3", { className: "dialog-title", children: C ? s.editTransaction : s.addTransaction }),
          /* @__PURE__ */ e("p", { className: "dialog-description", children: C ? s.modifyDescription : s.addDescription })
        ] }),
        /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          !C && /* @__PURE__ */ c("div", { ref: u, style: { position: "relative" }, children: [
            /* @__PURE__ */ c(
              "button",
              {
                onClick: () => o(!r),
                title: s.templates,
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
                  /* @__PURE__ */ e(we, { size: 12 }),
                  " ",
                  s.templates
                ]
              }
            ),
            r && /* @__PURE__ */ e("div", { style: {
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
            }, children: Ce.map((l, g) => /* @__PURE__ */ e(
              "button",
              {
                onClick: () => f(l),
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
                onMouseEnter: (T) => T.currentTarget.style.background = "hsl(220, 14%, 96%)",
                onMouseLeave: (T) => T.currentTarget.style.background = "none",
                children: l.name
              },
              g
            )) })
          ] }),
          /* @__PURE__ */ e("button", { onClick: y, className: "dialog-close", children: /* @__PURE__ */ e(Ve, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "dialog-body", children: [
        /* @__PURE__ */ c("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ c("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-amount", children: s.amount }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-amount",
                placeholder: "0.00",
                type: "number",
                step: "0.01",
                min: "0",
                value: n.amount || "",
                onChange: (l) => a((g) => ({ ...g, amount: l.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-currency", children: s.currency }),
            /* @__PURE__ */ e(
              "select",
              {
                id: "rad-currency",
                value: n.currency,
                onChange: (l) => a((g) => ({ ...g, currency: l.target.value })),
                children: Ye.map((l) => /* @__PURE__ */ e("option", { value: l[1], children: l[0] }, l[1]))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ c("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-account", children: s.account }),
            /* @__PURE__ */ e(
              "input",
              {
                autoFocus: !0,
                id: "rad-account",
                placeholder: "e.g., Cash, Bank, Rent",
                value: n.account,
                onChange: (l) => a((g) => ({ ...g, account: l.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-date", children: s.date }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-date",
                type: "date",
                value: n.date,
                onChange: (l) => a((g) => ({ ...g, date: l.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "control-check", children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: "rad-reconciled",
              type: "checkbox",
              checked: n.reconciled,
              onChange: (l) => a((g) => ({ ...g, reconciled: l.target.checked }))
            }
          ),
          /* @__PURE__ */ e("label", { htmlFor: "rad-reconciled", children: s.reconciled })
        ] }),
        /* @__PURE__ */ c("div", { className: "control-check", children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: "rad-isDebit",
              type: "checkbox",
              checked: n.isDebit,
              onChange: (l) => a((g) => ({ ...g, isDebit: l.target.checked }))
            }
          ),
          /* @__PURE__ */ e("label", { htmlFor: "rad-isDebit", children: s.debitTransaction })
        ] }),
        /* @__PURE__ */ c("div", { className: "control", children: [
          /* @__PURE__ */ e("label", { htmlFor: "rad-description", children: s.description }),
          /* @__PURE__ */ e(
            "textarea",
            {
              id: "rad-description",
              rows: 2,
              placeholder: "Describe the transaction...",
              value: n.text,
              onChange: (l) => a((g) => ({ ...g, text: l.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "dialog-grid-2", children: [
          /* @__PURE__ */ c("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-category", children: s.category }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-category",
                placeholder: "e.g., Operating, Investing",
                value: n.category,
                onChange: (l) => a((g) => ({ ...g, category: l.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "control", children: [
            /* @__PURE__ */ e("label", { htmlFor: "rad-tags", children: s.tags }),
            /* @__PURE__ */ e(
              "input",
              {
                id: "rad-tags",
                placeholder: "e.g., rent, monthly (comma-separated)",
                value: n.tags,
                onChange: (l) => a((g) => ({ ...g, tags: l.target.value }))
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "dialog-footer", children: [
        /* @__PURE__ */ e("button", { onClick: y, className: "btn-cancel", children: s.cancel }),
        /* @__PURE__ */ e("button", { onClick: b, className: "btn-confirm", children: C ? s.update : s.save })
      ] })
    ] }) })
  ] });
}, ke = (t, n = "png", a = 3) => new Promise((r, o) => {
  const u = t.offsetWidth, d = t.offsetHeight, i = t.cloneNode(!0);
  Ne(t, i);
  const f = new XMLSerializer().serializeToString(i), s = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${d}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">${f}</div>
        </foreignObject>
      </svg>`, w = new Image();
  w.onload = () => {
    const h = document.createElement("canvas");
    h.width = u * a, h.height = d * a;
    const m = h.getContext("2d");
    m.scale(a, a), m.fillStyle = "#ffffff", m.fillRect(0, 0, u, d), m.drawImage(w, 0, 0, u, d);
    const N = n === "jpeg" ? "image/jpeg" : "image/png";
    r(h.toDataURL(N, 1));
  }, w.onerror = o, w.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
}), Qe = async (t, n = "png") => {
  const a = await ke(t, n), r = document.createElement("a");
  r.download = `export.${n}`, r.href = a, r.click();
};
function Ne(t, n) {
  const a = window.getComputedStyle(t), r = n, o = [
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
  for (const i of o)
    r.style.setProperty(i, a.getPropertyValue(i));
  const u = t.children, d = n.children;
  for (let i = 0; i < u.length; i++)
    d[i] && Ne(u[i], d[i]);
}
const et = (t, n) => t.reduce((a, r) => {
  const o = String(r[n]);
  return a[o] || (a[o] = []), a[o].push(r), a;
}, {}), tt = (t, n, a = "asc") => [...t].sort((r, o) => {
  const u = r[n], d = o[n], i = u > d ? 1 : u < d ? -1 : 0;
  return a === "asc" ? i : -i;
}), nt = (t) => {
  const { value: n } = t, a = q(j), [r, o] = H(!1), u = V(null);
  if (!a) return null;
  const { state: d, labels: i, updateState: y, onDelete: f, onBeforeDelete: s } = a, { width: w, ...h } = t.account || {}, { width: m, ...N } = t.amount || {};
  Y(() => {
    const l = (g) => {
      u.current && !u.current.contains(g.target) && o(!1);
    };
    return r && document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, [r]);
  const b = () => {
    y({ editingTransaction: n }), o(!1);
  }, C = async () => {
    if (s && !await s(n)) return;
    const l = (d.data || []).filter((g) => g !== n);
    f?.(n), y({ data: l }), o(!1);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: "insertion",
      role: "row",
      tabIndex: 0,
      onKeyDown: (l) => {
        l.key === "Enter" || l.key === " " ? (l.preventDefault(), o(!r)) : l.key === "Escape" && o(!1);
      },
      children: [
        /* @__PURE__ */ e("div", { className: "debit flex-col", style: h, title: n.isDebit ? n.account : "", role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? n.account : "" }) }),
        /* @__PURE__ */ e("div", { className: "credit flex-col", style: h, title: n.isDebit ? "" : n.account, role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? "" : n.account }) }),
        /* @__PURE__ */ e("div", { className: "flex-col description", role: "cell", children: /* @__PURE__ */ c(
          "div",
          {
            className: "transaction-content",
            style: { marginLeft: n.isDebit ? 0 : 72 },
            children: [
              n.text,
              /* @__PURE__ */ e("small", { className: "reconciliation-status", children: n.reconciled === !0 ? i.reconciled : i.unreconciled })
            ]
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "amount-debit flex-col", style: N, role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? J.currency(n.amount, n.currency, n.local) : "" }) }),
        /* @__PURE__ */ e("div", { className: "amount-credit flex-col", style: N, role: "cell", children: /* @__PURE__ */ e("div", { children: n.isDebit ? "" : J.currency(n.amount, n.currency, n.local) }) }),
        t.showEdit !== !1 && /* @__PURE__ */ c("div", { className: "row-actions", ref: u, children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "row-actions-trigger",
              onClick: () => o(!r),
              title: i.actions,
              "aria-haspopup": "true",
              "aria-expanded": r,
              children: /* @__PURE__ */ e(Xe, { size: 14 })
            }
          ),
          r && /* @__PURE__ */ c("div", { className: "row-actions-menu", role: "menu", children: [
            /* @__PURE__ */ e("button", { role: "menuitem", onClick: async () => {
              await a.setReconciled(n, n.reconciled !== !0) && o(!1);
            }, children: n.reconciled === !0 ? i.unreconciled : i.reconciled }),
            /* @__PURE__ */ c("button", { role: "menuitem", onClick: b, onKeyDown: (l) => l.key === "Enter" && b(), children: [
              /* @__PURE__ */ e(je, { size: 13 }),
              " ",
              i.edit
            ] }),
            /* @__PURE__ */ c("button", { role: "menuitem", className: "danger", onClick: C, onKeyDown: (l) => l.key === "Enter" && C(), children: [
              /* @__PURE__ */ e(Se, { size: 13 }),
              " ",
              i.delete
            ] })
          ] })
        ] })
      ]
    }
  );
}, ue = {
  padding: "8px 10px",
  border: "1px solid hsl(220, 13%, 91%)",
  borderRadius: "6px",
  fontSize: "13px",
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  background: "white",
  color: "hsl(224, 71%, 4%)"
}, at = () => {
  const t = q(j);
  if (!t) return null;
  const { state: n, labels: a, updateState: r } = t;
  return /* @__PURE__ */ c("div", { style: { display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ c("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ e(Ge, { size: 14, style: { position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          placeholder: a.search,
          value: n.searchTerm || "",
          onChange: (o) => r({ searchTerm: o.target.value }),
          style: { ...ue, paddingLeft: "32px", width: "180px" }
        }
      )
    ] }),
    /* @__PURE__ */ c("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
      /* @__PURE__ */ e(_e, { size: 14, style: { color: "hsl(220, 9%, 46%)" } }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "date",
          value: n.dateFilter?.start || "",
          onChange: (o) => r({
            dateFilter: { ...n.dateFilter, start: o.target.value }
          }),
          style: ue
        }
      ),
      /* @__PURE__ */ e("span", { style: { color: "hsl(220, 9%, 46%)", fontSize: "12px" }, children: a.to }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "date",
          value: n.dateFilter?.end || "",
          onChange: (o) => r({
            dateFilter: { ...n.dateFilter, end: o.target.value }
          }),
          style: ue
        }
      ),
      (n.searchTerm || n.dateFilter?.start || n.dateFilter?.end) && /* @__PURE__ */ e(
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
          children: a.clear
        }
      )
    ] })
  ] });
}, be = {
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
}, ce = {
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
}, rt = () => {
  const t = q(j), [n, a] = H(!1), [r, o] = H(!1), u = V(null), d = V(null);
  if (!t) return null;
  const { state: i, labels: y, updateState: f } = t, s = i.data || [], w = [...new Set(s.map((b) => b.account).filter(Boolean))].sort(), h = [...new Set(s.map((b) => b.category).filter(Boolean))].sort();
  Y(() => {
    const b = (C) => {
      u.current && !u.current.contains(C.target) && a(!1), d.current && !d.current.contains(C.target) && o(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []);
  const m = {
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
  }, N = {
    ...m,
    borderColor: "hsl(221, 83%, 53%)",
    color: "hsl(221, 83%, 53%)",
    background: "hsla(221, 83%, 53%, 0.05)"
  };
  return /* @__PURE__ */ c("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
    /* @__PURE__ */ c(
      "select",
      {
        "aria-label": y.reconciliation,
        style: m,
        value: i.reconciliationFilter || "all",
        onChange: (b) => f({ reconciliationFilter: b.target.value, currentPage: 1 }),
        children: [
          /* @__PURE__ */ e("option", { value: "all", children: y.allTransactions }),
          /* @__PURE__ */ e("option", { value: "reconciled", children: y.reconciled }),
          /* @__PURE__ */ e("option", { value: "unreconciled", children: y.unreconciled })
        ]
      }
    ),
    w.length > 0 && /* @__PURE__ */ c("div", { ref: u, style: { position: "relative" }, children: [
      /* @__PURE__ */ c(
        "button",
        {
          style: i.filterAccount ? N : m,
          onClick: () => {
            a(!n), o(!1);
          },
          title: y.filterByAccount,
          children: [
            /* @__PURE__ */ e(pe, { size: 12 }),
            i.filterAccount || y.allAccounts,
            /* @__PURE__ */ e(fe, { size: 10 })
          ]
        }
      ),
      n && /* @__PURE__ */ c("div", { style: be, children: [
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...ce, fontWeight: i.filterAccount ? 500 : 600 },
            onClick: () => {
              f({ filterAccount: void 0 }), a(!1);
            },
            onMouseEnter: (b) => b.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (b) => b.currentTarget.style.background = "none",
            children: y.allAccounts
          }
        ),
        w.map((b) => /* @__PURE__ */ e(
          "button",
          {
            style: { ...ce, fontWeight: i.filterAccount === b ? 600 : 500 },
            onClick: () => {
              f({ filterAccount: b }), a(!1);
            },
            onMouseEnter: (C) => C.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (C) => C.currentTarget.style.background = "none",
            children: b
          },
          b
        ))
      ] })
    ] }),
    h.length > 0 && /* @__PURE__ */ c("div", { ref: d, style: { position: "relative" }, children: [
      /* @__PURE__ */ c(
        "button",
        {
          style: i.filterCategory ? N : m,
          onClick: () => {
            o(!r), a(!1);
          },
          title: y.filterByCategory,
          children: [
            /* @__PURE__ */ e(pe, { size: 12 }),
            i.filterCategory || y.allCategories,
            /* @__PURE__ */ e(fe, { size: 10 })
          ]
        }
      ),
      r && /* @__PURE__ */ c("div", { style: be, children: [
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...ce, fontWeight: i.filterCategory ? 500 : 600 },
            onClick: () => {
              f({ filterCategory: void 0 }), o(!1);
            },
            onMouseEnter: (b) => b.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (b) => b.currentTarget.style.background = "none",
            children: y.allCategories
          }
        ),
        h.map((b) => /* @__PURE__ */ e(
          "button",
          {
            style: { ...ce, fontWeight: i.filterCategory === b ? 600 : 500 },
            onClick: () => {
              f({ filterCategory: b }), o(!1);
            },
            onMouseEnter: (C) => C.currentTarget.style.background = "hsl(220, 14%, 96%)",
            onMouseLeave: (C) => C.currentTarget.style.background = "none",
            children: b
          },
          b
        ))
      ] })
    ] })
  ] });
}, ot = (t, n = "accounting-diary.csv") => {
  const r = [
    ["Date", "Account", "Description", "Debit", "Credit", "Currency", "Reconciled"].join(","),
    ...t.map((o) => [
      o.date,
      `"${(o.account || "").replace(/"/g, '""')}"`,
      `"${(o.text || "").replace(/"/g, '""')}"`,
      o.isDebit ? o.amount : "",
      o.isDebit ? "" : o.amount,
      o.currency || "USD",
      o.reconciled === !0
    ].join(","))
  ].join(`
`);
  ge(r, n, "text/csv;charset=utf-8;");
}, ct = (t, n = "accounting-diary.xls") => {
  const a = (u) => String(u).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), o = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head><meta charset="UTF-8"></head>
    <body>
      <table>
        <thead><tr><th>Date</th><th>Account</th><th>Description</th><th>Debit</th><th>Credit</th><th>Currency</th><th>Reconciled</th></tr></thead>
        <tbody>${t.map(
    (u) => `<tr>
      <td>${a(u.date)}</td>
      <td>${a(u.account)}</td>
      <td>${a(u.text)}</td>
      <td>${u.isDebit ? u.amount : ""}</td>
      <td>${u.isDebit ? "" : u.amount}</td>
      <td>${a(u.currency || "USD")}</td>
      <td>${u.reconciled === !0}</td>
    </tr>`
  ).join("")}</tbody>
      </table>
    </body>
    </html>`;
  ge(o, n, "application/vnd.ms-excel;charset=utf-8;");
}, Te = (t) => new Promise((n, a) => {
  const r = new FileReader();
  r.onload = (o) => {
    try {
      const u = o.target?.result, d = lt(u), i = d[0]?.findIndex((f) => f.trim().toLowerCase() === "reconciled") ?? -1, y = d.slice(1).filter((f) => f.some((s) => s.trim())).map((f) => {
        const s = parseFloat(f[3]) || 0, w = parseFloat(f[4]) || 0;
        return {
          date: f[0],
          account: f[1],
          text: f[2],
          amount: s || w,
          isDebit: s > 0,
          currency: (f[5] || "USD").trim(),
          ...i >= 0 ? { reconciled: f[i]?.trim().toLowerCase() === "true" } : {}
        };
      });
      n(y);
    } catch (u) {
      a(u);
    }
  }, r.readAsText(t);
}), it = (t, n = "accounting-diary.json") => {
  ge(JSON.stringify(t, null, 2), n, "application/json;charset=utf-8;");
}, Ie = (t) => new Promise((n, a) => {
  const r = new FileReader();
  r.onload = (o) => {
    try {
      const u = JSON.parse(o.target?.result), d = Array.isArray(u) ? u : [u];
      n(d);
    } catch (u) {
      a(u);
    }
  }, r.readAsText(t);
});
function ge(t, n, a) {
  const r = new Blob([t], { type: a }), o = document.createElement("a");
  o.href = URL.createObjectURL(r), o.download = n, o.click(), URL.revokeObjectURL(o.href);
}
function lt(t) {
  const n = [];
  let a = [], r = "", o = !1;
  for (let u = 0; u < t.length; u++) {
    const d = t[u];
    d === '"' ? o && t[u + 1] === '"' ? (r += '"', u++) : o = !o : d === "," && !o ? (a.push(r), r = "") : d === `
` && !o ? (a.push(r.replace(/\r$/, "")), n.push(a), a = [], r = "") : r += d;
  }
  return a.push(r.replace(/\r$/, "")), n.push(a), n;
}
const st = () => {
  const [t, n] = H(!1), a = z((o) => {
    o.preventDefault(), n(!0);
  }, []), r = z((o) => {
    o.preventDefault(), o.currentTarget === o.target && n(!1);
  }, []);
  return { isDragging: t, setIsDragging: n, onDragOver: a, onDragLeave: r };
}, dt = ({ onDone: t }) => {
  const n = q(j);
  if (!n) return null;
  const { state: a, labels: r, updateState: o } = n;
  return /* @__PURE__ */ e(
    "div",
    {
      onDragOver: (d) => d.preventDefault(),
      onDragLeave: (d) => {
        d.preventDefault(), t();
      },
      onDrop: async (d) => {
        d.preventDefault(), d.stopPropagation(), t();
        const i = d.dataTransfer.files?.[0];
        if (i)
          try {
            let y;
            if (i.name.endsWith(".csv"))
              y = await Te(i);
            else if (i.name.endsWith(".json"))
              y = await Ie(i);
            else
              return;
            const f = y.map((s) => ({ ...s, id: s.id || $() }));
            o({ data: [...a.data || [], ...f] });
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
      children: /* @__PURE__ */ c("div", { style: { textAlign: "center", color: "hsl(221, 83%, 53%)" }, children: [
        /* @__PURE__ */ e(he, { size: 32 }),
        /* @__PURE__ */ e("p", { style: { margin: "8px 0 0", fontSize: 14, fontWeight: 600 }, children: r.dropFileHere })
      ] })
    }
  );
}, ut = ({ data: t }) => {
  const n = q(j);
  if (!n) return null;
  const { labels: a } = n, r = X(() => {
    const d = {};
    for (const i of t)
      d[i.account] || (d[i.account] = []), d[i.account].push(i);
    return Object.entries(d).sort(([i], [y]) => i.localeCompare(y)).map(([i, y]) => {
      let f = 0;
      const w = [...y].sort((h, m) => h.date.localeCompare(m.date)).map((h) => (f += h.isDebit ? h.amount : -h.amount, { ...h, runningBalance: f }));
      return {
        account: i,
        entries: w,
        totalDebit: y.filter((h) => h.isDebit).reduce((h, m) => h + m.amount, 0),
        totalCredit: y.filter((h) => !h.isDebit).reduce((h, m) => h + m.amount, 0),
        balance: f
      };
    });
  }, [t]), o = t[0]?.currency || "USD", u = t[0]?.local;
  return /* @__PURE__ */ e("div", { className: "ledger-view", style: { display: "flex", flexDirection: "column", gap: 16 }, children: r.map((d) => /* @__PURE__ */ c("div", { style: { border: "1px solid var(--rad-border-color, hsl(220,13%,91%))", borderRadius: 8, overflow: "hidden" }, children: [
    /* @__PURE__ */ c("div", { style: { padding: "10px 14px", fontWeight: 600, fontSize: 14, background: "var(--rad-surface, #f8f9fa)", borderBottom: "1px solid var(--rad-border-color, hsl(220,13%,91%))" }, children: [
      d.account,
      /* @__PURE__ */ c("span", { style: { float: "right", fontWeight: 500, fontSize: 13, color: d.balance >= 0 ? "#198754" : "#dc3545" }, children: [
        a.runningBalance,
        ": ",
        J.currency(Math.abs(d.balance), o, u),
        " ",
        d.balance >= 0 ? `(${a.debit})` : `(${a.credit})`
      ] })
    ] }),
    /* @__PURE__ */ c("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ c("tr", { style: { background: "var(--rad-surface, #f8f9fa)" }, children: [
        /* @__PURE__ */ e("th", { style: te, children: a.date }),
        /* @__PURE__ */ e("th", { style: te, children: a.description }),
        /* @__PURE__ */ e("th", { style: { ...te, textAlign: "right" }, children: a.debit }),
        /* @__PURE__ */ e("th", { style: { ...te, textAlign: "right" }, children: a.credit }),
        /* @__PURE__ */ e("th", { style: { ...te, textAlign: "right" }, children: a.runningBalance })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: d.entries.map((i, y) => /* @__PURE__ */ c("tr", { style: { borderBottom: "1px solid var(--rad-border-color, hsl(220,13%,91%))" }, children: [
        /* @__PURE__ */ e("td", { style: K, children: i.date }),
        /* @__PURE__ */ c("td", { style: K, children: [
          i.text,
          /* @__PURE__ */ e("small", { className: "reconciliation-status", children: i.reconciled === !0 ? a.reconciled : a.unreconciled })
        ] }),
        /* @__PURE__ */ e("td", { style: { ...K, textAlign: "right" }, children: i.isDebit ? J.currency(i.amount, o, u) : "" }),
        /* @__PURE__ */ e("td", { style: { ...K, textAlign: "right" }, children: i.isDebit ? "" : J.currency(i.amount, o, u) }),
        /* @__PURE__ */ e("td", { style: { ...K, textAlign: "right", fontWeight: 500, color: i.runningBalance >= 0 ? "#198754" : "#dc3545" }, children: J.currency(Math.abs(i.runningBalance), o, u) })
      ] }, i.id || y)) }),
      /* @__PURE__ */ e("tfoot", { children: /* @__PURE__ */ c("tr", { style: { fontWeight: 600, background: "var(--rad-surface, #f8f9fa)" }, children: [
        /* @__PURE__ */ e("td", { style: K, colSpan: 2, children: a.grandTotal }),
        /* @__PURE__ */ e("td", { style: { ...K, textAlign: "right" }, children: J.currency(d.totalDebit, o, u) }),
        /* @__PURE__ */ e("td", { style: { ...K, textAlign: "right" }, children: J.currency(d.totalCredit, o, u) }),
        /* @__PURE__ */ e("td", { style: K })
      ] }) })
    ] })
  ] }, d.account)) });
}, te = { padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12, textTransform: "uppercase", color: "#6c757d" }, K = { padding: "8px 12px" }, Oe = [
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
];
function Ue(t, n = {}) {
  const a = n.searchTerm?.toLowerCase();
  return t.filter((r) => n.reconciliation === "reconciled" && r.reconciled !== !0 || n.reconciliation === "unreconciled" && r.reconciled === !0 || n.start && r.date < n.start || n.end && r.date > n.end || n.account && r.account !== n.account || n.category && r.category !== n.category ? !1 : !a || [r.text, r.account, r.category, ...r.tags || []].some((o) => o?.toLowerCase().includes(a)));
}
function ye(t, n = "month") {
  const a = /* @__PURE__ */ new Map();
  for (const r of t) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) continue;
    const o = /* @__PURE__ */ new Date(`${r.date}T00:00:00Z`);
    if (!Number.isFinite(o.getTime()) || o.toISOString().slice(0, 10) !== r.date) continue;
    const u = r.date.slice(0, n === "year" ? 4 : n === "month" ? 7 : 10), d = r.currency || "USD", i = JSON.stringify([u, d]), y = a.get(i) || { period: u, currency: d, debit: 0, credit: 0, balance: 0, count: 0, isBalanced: !0 };
    r.isDebit ? y.debit += r.amount : y.credit += r.amount, y.count++, y.balance = y.debit - y.credit, y.isBalanced = Math.abs(y.balance) < 0.01, a.set(i, y);
  }
  return [...a.values()].sort((r, o) => r.period.localeCompare(o.period) || r.currency.localeCompare(o.currency));
}
const ht = ({ data: t, periodGranularity: n = "month", labels: a }) => {
  const r = { ...De, ...a }, o = X(() => ye(t, n), [t, n]), u = X(() => {
    const d = /* @__PURE__ */ new Map();
    for (const i of o) d.set(i.currency, Math.max(d.get(i.currency) || 0, Math.abs(i.debit), Math.abs(i.credit)));
    return d;
  }, [o]);
  return /* @__PURE__ */ c("section", { className: "period-chart", "aria-label": r.periodSummary, children: [
    /* @__PURE__ */ e("h2", { children: r.periodSummary }),
    o.length === 0 ? /* @__PURE__ */ e("p", { children: r.noData }) : /* @__PURE__ */ e("div", { className: "period-chart-scroll", children: /* @__PURE__ */ c("table", { children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ c("tr", { children: [
        /* @__PURE__ */ e("th", { scope: "col", children: r.period }),
        /* @__PURE__ */ e("th", { scope: "col", children: r.currency }),
        /* @__PURE__ */ e("th", { scope: "col", children: r.debit }),
        /* @__PURE__ */ e("th", { scope: "col", children: r.credit }),
        /* @__PURE__ */ e("th", { scope: "col", children: r.balance })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: o.map((d) => /* @__PURE__ */ c("tr", { children: [
        /* @__PURE__ */ e("th", { scope: "row", children: d.period }),
        /* @__PURE__ */ e("td", { children: d.currency }),
        ["debit", "credit"].map((i) => /* @__PURE__ */ c("td", { children: [
          /* @__PURE__ */ e("span", { className: `period-bar ${i}`, "aria-hidden": "true", style: { width: `${Math.abs(d[i]) / (u.get(d.currency) || 1) * 100}%` } }),
          /* @__PURE__ */ e("span", { children: d[i].toLocaleString(void 0, { maximumFractionDigits: 2 }) })
        ] }, i)),
        /* @__PURE__ */ e("td", { children: d.balance.toLocaleString(void 0, { maximumFractionDigits: 2 }) })
      ] }, JSON.stringify([d.period, d.currency]))) })
    ] }) })
  ] });
}, gt = (t) => {
  if (!t || t.length === 0) return [];
  const n = et(t, "date");
  return Object.entries(n).map(([a, r]) => ({ date: a, content: r }));
}, Fe = ve((t, n) => {
  const [a, r] = H("toPng"), [o, u] = H(!1), d = V(null), i = q(j), { isDragging: y, setIsDragging: f, onDragOver: s, onDragLeave: w } = st();
  if (!i) return null;
  const { state: h, labels: m, pageSize: N, undo: b, redo: C, updateState: l } = i, g = h.data || [], T = X(() => Ue(g, {
    searchTerm: h.searchTerm,
    start: h.dateFilter?.start,
    end: h.dateFilter?.end,
    account: h.filterAccount,
    category: h.filterCategory,
    reconciliation: h.reconciliationFilter
  }), [g, h.searchTerm, h.dateFilter, h.filterAccount, h.filterCategory, h.reconciliationFilter]), x = X(() => h.sortField ? [...T].sort((p, D) => {
    let I, A;
    h.sortField === "date" ? (I = p.date, A = D.date) : h.sortField === "account" ? (I = p.account, A = D.account) : (I = p.amount, A = D.amount);
    const G = I > A ? 1 : I < A ? -1 : 0;
    return h.sortOrder === "desc" ? -G : G;
  }) : T, [T, h.sortField, h.sortOrder]), k = N ? Math.max(1, Math.ceil(x.length / N)) : 1, O = Math.min(h.currentPage, k), F = N ? x.slice((O - 1) * N, O * N) : x, P = T.filter((p) => p.isDebit).reduce((p, D) => p + D.amount, 0), U = T.filter((p) => !p.isDebit).reduce((p, D) => p + D.amount, 0), W = Math.abs(P - U) < 0.01, Z = T[0]?.currency || "USD", Q = T[0]?.local, v = V(null), S = V(null);
  ie.useEffect(() => {
    const p = (D) => {
      d.current && !d.current.contains(D.target) && u(!1);
    };
    return o && document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [o]);
  const E = () => {
    const p = {};
    for (const D of g)
      p[D.account] || (p[D.account] = { debit: 0, credit: 0, balance: 0 }), D.isDebit ? p[D.account].debit += D.amount : p[D.account].credit += D.amount, p[D.account].balance = p[D.account].debit - p[D.account].credit;
    return p;
  }, L = (p) => {
    const D = document.getElementById("diary");
    return D ? p === "toPdf" ? ke(D, "png", 2).then((I) => J.extractDoc(I)).catch((I) => console.error("Export failed:", I)) : Qe(D, p === "toJpeg" ? "jpeg" : "png").catch((I) => console.error("Export failed:", I)) : Promise.resolve();
  };
  Ee(n, () => ({
    exportToPNG: () => L("toPng").then(() => {
    }),
    exportToJPEG: () => L("toJpeg").then(() => {
    }),
    exportToPDF: () => L("toPdf").then(() => {
    }),
    exportToCSV: () => ot(g),
    exportToExcel: () => ct(g),
    exportToJSON: () => it(g),
    importJSON: (p) => {
      try {
        const I = JSON.parse(p).map((A) => ({ ...A, id: A.id || $() }));
        l({ data: [...h.data || [], ...I] });
      } catch {
      }
    },
    addTransaction: (p) => {
      const D = { ...p, id: $() };
      l({ data: [...h.data || [], D] });
    },
    undo: b,
    redo: C,
    getData: () => g,
    getTotals: () => ({
      debit: P,
      credit: U,
      balance: P - U,
      isBalanced: W
    }),
    getAccountSummary: E,
    setReconciled: async (p, D) => {
      const I = g.find((A) => A.id === p);
      return I ? i.setReconciled(I, D) : !1;
    },
    setReconciliationFilter: (p) => l({ reconciliationFilter: p, currentPage: 1 }),
    getFilteredData: () => T,
    getPeriodSummary: (p = t.periodGranularity || "month") => ye(T, p)
  }));
  const ne = async (p) => {
    const D = p.target.files?.[0];
    if (D) {
      try {
        const A = (await Te(D)).map((G) => ({ ...G, id: G.id || $() }));
        l({ data: [...h.data || [], ...A] });
      } catch {
      }
      v.current && (v.current.value = "");
    }
  }, ae = async (p) => {
    const D = p.target.files?.[0];
    if (D) {
      try {
        const A = (await Ie(D)).map((G) => ({ ...G, id: G.id || $() }));
        l({ data: [...h.data || [], ...A] });
      } catch {
      }
      S.current && (S.current.value = "");
    }
  }, re = () => L(a), ee = (p) => {
    l({ currentPage: Math.max(1, Math.min(p, k)) });
  }, le = () => {
    l({ viewMode: h.viewMode === "diary" ? "ledger" : "diary" });
  };
  return /* @__PURE__ */ c(
    "div",
    {
      onDragOver: s,
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
        y && /* @__PURE__ */ e(dt, { onDone: () => f(!1) }),
        /* @__PURE__ */ c("div", { style: { display: "flex", marginBottom: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }, children: [
          /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            t.showExport !== !1 && /* @__PURE__ */ c("div", { className: "export", children: [
              /* @__PURE__ */ c("button", { id: a === "toJpeg" ? "active" : "", onClick: () => r("toJpeg"), style: { padding: "8px 12px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ e(me, { size: 12 }),
                " JPEG"
              ] }),
              /* @__PURE__ */ c("button", { id: a === "toPng" ? "active" : "", onClick: () => r("toPng"), style: { padding: "8px 12px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ e(me, { size: 12 }),
                " PNG"
              ] }),
              /* @__PURE__ */ c("button", { id: a === "toPdf" ? "active" : "", onClick: () => r("toPdf"), style: { padding: "8px 12px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ e(qe, { size: 12 }),
                " PDF"
              ] })
            ] }),
            t.showUndo !== !1 && /* @__PURE__ */ c("div", { className: "global-action", style: { display: "flex", gap: 4 }, children: [
              /* @__PURE__ */ e("button", { className: "sample doer", disabled: !(h.history.length > 1 && h.doIndex > 0), onClick: () => b(), title: "Undo", style: { padding: "8px" }, children: /* @__PURE__ */ e(We, { strokeWidth: 2.5, size: 14 }) }),
              /* @__PURE__ */ e("button", { className: "sample doer", onClick: () => C(), disabled: !(h.doIndex + 1 < h.history.length), title: "Redo", style: { padding: "8px" }, children: /* @__PURE__ */ e(Je, { strokeWidth: 2.5, size: 14 }) })
            ] })
          ] }),
          /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            t.showExport !== !1 && /* @__PURE__ */ c("button", { className: "btn-export", style: { backgroundColor: t.saveColor, padding: "8px 16px", fontSize: "13px" }, title: m.export, onClick: re, "aria-label": "Export accounting diary", children: [
              /* @__PURE__ */ e(He, { size: 16, "aria-hidden": "true" }),
              /* @__PURE__ */ e("span", { children: m.export })
            ] }),
            t.showAdd !== !1 && /* @__PURE__ */ e(Ze, {})
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "global-action", style: { display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }, children: [
          t.showSample !== !1 && /* @__PURE__ */ c("button", { className: "sample", onClick: () => l({ data: Oe.map((p) => ({ ...p, id: $() })) }), title: m.sample, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(Ke, { size: 11 }),
            " ",
            m.sample
          ] }),
          t.showClear !== !1 && /* @__PURE__ */ c("button", { className: "reset", onClick: () => l({ data: [] }), title: m.clear, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(Se, { size: 11 }),
            " ",
            m.clear
          ] }),
          /* @__PURE__ */ e("div", { style: { width: 1, height: 20, background: "hsl(220, 13%, 91%)" } }),
          /* @__PURE__ */ c("button", { className: "sample", onClick: () => v.current?.click(), title: "Import CSV", style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(he, { size: 11 }),
            " CSV"
          ] }),
          /* @__PURE__ */ c("button", { className: "sample", onClick: () => S.current?.click(), title: m.importJSON, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ e(he, { size: 11 }),
            " JSON"
          ] }),
          /* @__PURE__ */ e("input", { ref: v, type: "file", accept: ".csv", style: { display: "none" }, onChange: ne }),
          /* @__PURE__ */ e("input", { ref: S, type: "file", accept: ".json", style: { display: "none" }, onChange: ae }),
          /* @__PURE__ */ e("div", { style: { width: 1, height: 20, background: "hsl(220, 13%, 91%)" } }),
          t.showLedgerToggle !== !1 && /* @__PURE__ */ e("button", { className: "sample", onClick: le, title: h.viewMode === "diary" ? m.ledgerView : m.diaryView, style: { padding: "6px 10px", fontSize: "12px" }, children: h.viewMode === "diary" ? m.ledgerView : m.diaryView }),
          /* @__PURE__ */ c("div", { ref: d, style: { position: "relative", display: "inline-block" }, children: [
            /* @__PURE__ */ c("button", { className: "sample", onClick: () => u(!o), title: m.templates, style: { padding: "6px 10px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ e(we, { size: 11 }),
              " ",
              m.templates
            ] }),
            o && /* @__PURE__ */ e("div", { style: {
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
            }, children: Ce.map((p, D) => /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  l({ templateItem: p, openAddDialogCount: (h.openAddDialogCount || 0) + 1 }), u(!1);
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
                onMouseEnter: (I) => I.currentTarget.style.background = "hsl(220, 14%, 96%)",
                onMouseLeave: (I) => I.currentTarget.style.background = "none",
                children: p.name
              },
              D
            )) })
          ] })
        ] }),
        t.showSearch !== !1 && /* @__PURE__ */ c("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ e(at, {}),
          /* @__PURE__ */ e(rt, {})
        ] }),
        t.showPeriodChart && /* @__PURE__ */ e(ht, { data: T, periodGranularity: t.periodGranularity, labels: m }),
        /* @__PURE__ */ c(
          "div",
          {
            id: "diary",
            style: { padding: 8 },
            role: "table",
            "aria-label": "Accounting diary entries",
            children: [
              /* @__PURE__ */ c(
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
              F.length === 0 ? /* @__PURE__ */ c("div", { className: "empty-state", children: [
                /* @__PURE__ */ e("div", { className: "empty-state-icon", children: /* @__PURE__ */ c("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ e("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
                  /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
                  /* @__PURE__ */ e("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
                  /* @__PURE__ */ e("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
                ] }) }),
                /* @__PURE__ */ e("p", { className: "empty-state-text", children: m.noData }),
                t.showAdd !== !1 && /* @__PURE__ */ e(
                  "button",
                  {
                    className: "empty-state-cta",
                    onClick: () => l({ openAddDialogCount: (h.openAddDialogCount || 0) + 1 }),
                    "aria-label": m.addTransaction,
                    children: m.addTransaction
                  }
                )
              ] }) : h.viewMode === "ledger" ? /* @__PURE__ */ e(ut, { data: F }) : gt(F).map((p, D, I) => /* @__PURE__ */ c(ie.Fragment, { children: [
                /* @__PURE__ */ e(
                  Be,
                  {
                    date: p.date,
                    columnHeader: t.columnHeader,
                    columnHeaderColor: t.columnHeaderColor,
                    columnHeaderBgColor: t.columnHeaderBgColor,
                    index: D,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  }
                ),
                tt(p.content, "isDebit", "asc").map((A, G) => /* @__PURE__ */ e(
                  nt,
                  {
                    value: A,
                    length: I.length,
                    account: t.account,
                    amount: t.amount,
                    showEdit: t.showEdit
                  },
                  A.id || G
                )),
                /* @__PURE__ */ e(
                  Le,
                  {
                    account: t.account,
                    columnHeader: t.columnHeader,
                    index: D,
                    footer: t.footer,
                    amount: t.amount,
                    data: p.content,
                    showEdit: t.showEdit
                  }
                )
              ] }, p.date)),
              t.showGrandTotal !== !1 && T.length > 0 && /* @__PURE__ */ c("div", { className: "grand-total", children: [
                /* @__PURE__ */ c("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ e("span", { className: "grand-total-label", children: m.grandTotal }),
                  /* @__PURE__ */ c("span", { className: "grand-total-amounts", children: [
                    /* @__PURE__ */ c("span", { className: "grand-total-debit", children: [
                      m.debit,
                      ": ",
                      J.currency(P, Z, Q)
                    ] }),
                    /* @__PURE__ */ c("span", { className: "grand-total-credit", children: [
                      m.credit,
                      ": ",
                      J.currency(U, Z, Q)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ c("div", { className: "grand-total-row", children: [
                  /* @__PURE__ */ e("span", { className: "grand-total-label", children: m.balance }),
                  /* @__PURE__ */ e("span", { className: `balance-badge ${W ? "balanced" : "unbalanced"}`, children: W ? `✓ ${m.balanced}` : `⚠ ${m.unbalanced} (${J.currency(Math.abs(P - U), Z, Q)})` })
                ] })
              ] })
            ]
          }
        ),
        N && k > 1 && /* @__PURE__ */ c("div", { className: "pagination", children: [
          /* @__PURE__ */ e("button", { disabled: O <= 1, onClick: () => ee(O - 1), children: "←" }),
          /* @__PURE__ */ c("span", { children: [
            m.page,
            " ",
            O,
            " ",
            m.of,
            " ",
            k
          ] }),
          /* @__PURE__ */ e("button", { disabled: O >= k, onClick: () => ee(O + 1), children: "→" })
        ] })
      ]
    }
  );
});
Fe.displayName = "AccountingDiary";
const yt = {
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
}, mt = {
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
}, pt = ze(void 0), ft = ({ children: t, theme: n }) => {
  const [a, r] = H(n === "dark");
  ie.useEffect(() => {
    n && r(n === "dark");
  }, [n]);
  const o = a ? mt : yt, u = () => r(!a);
  return /* @__PURE__ */ e(pt.Provider, { value: { theme: o, toggleTheme: u }, children: t });
}, xt = ve((t, n) => /* @__PURE__ */ e(ft, { theme: t.theme, children: /* @__PURE__ */ e(
  Ae,
  {
    initialData: t.data ?? Oe,
    labels: t.labels,
    pageSize: t.pageSize,
    onAdd: t.onAdd,
    onDelete: t.onDelete,
    onEdit: t.onEdit,
    onChange: t.onChange,
    onBeforeAdd: t.onBeforeAdd,
    onBeforeEdit: t.onBeforeEdit,
    onBeforeDelete: t.onBeforeDelete,
    children: /* @__PURE__ */ e(Fe, { ref: n, ...t })
  }
) }));
xt.displayName = "AccountingDiaryWrapper";
const Dt = (t = {}) => {
  const { initialData: n = [], onChange: a, onBeforeAdd: r, onBeforeEdit: o, onBeforeDelete: u } = t, [d, i] = H(() => [n.map((v) => ({ ...v, id: v.id || $() }))]), [y, f] = H(0), s = d[y], w = V({ data: s, doIndex: y });
  w.current = { data: s, doIndex: y };
  const [h, m] = H(t.initialFilters || {}), N = X(() => Ue(s, h), [s, h]), b = z((v) => {
    m((S) => ({ ...S, reconciliation: v }));
  }, []), C = z((v = t.periodGranularity || "month") => ye(N, v), [N, t.periodGranularity]), l = X(() => C(), [C]), g = z((v) => {
    i((S) => [...S.slice(0, w.current.doIndex + 1), v]), f((S) => S + 1), a?.(v);
  }, [y, a]), T = z(async (v) => {
    const S = { ...v, id: $() };
    return r && !await r(S) ? !1 : (g([...s, S]), !0);
  }, [s, g, r]), x = z(async (v, S) => {
    const E = s.findIndex((le) => le.id === v);
    if (E === -1) return !1;
    const L = s[E], ne = { ...L, ...S };
    if (o && !await o(L, ne)) return !1;
    const ae = w.current.data, re = ae.indexOf(L);
    if (re < 0) return !1;
    const ee = [...ae];
    return ee[re] = ne, g(ee), !0;
  }, [s, g, o]), k = z(async (v) => {
    const S = s.find((E) => E.id === v);
    return !S || u && !await u(S) ? !1 : (g(s.filter((E) => E.id !== v)), !0);
  }, [s, g, u]), O = z((v, S) => x(v, { reconciled: S }), [x]), F = z(() => {
    y > 0 && (f((v) => v - 1), a?.(d[y - 1]));
  }, [y, d, a]), P = z(() => {
    y + 1 < d.length && (f((v) => v + 1), a?.(d[y + 1]));
  }, [y, d, a]), U = X(() => {
    const v = s.filter((E) => E.isDebit).reduce((E, L) => E + L.amount, 0), S = s.filter((E) => !E.isDebit).reduce((E, L) => E + L.amount, 0);
    return { debit: v, credit: S, balance: v - S, isBalanced: Math.abs(v - S) < 0.01 };
  }, [s]), W = X(() => {
    const v = {};
    for (const S of s)
      v[S.account] || (v[S.account] = { debit: 0, credit: 0, balance: 0 }), S.isDebit ? v[S.account].debit += S.amount : v[S.account].credit += S.amount, v[S.account].balance = v[S.account].debit - v[S.account].credit;
    return v;
  }, [s]), Z = z((v) => {
    try {
      const E = JSON.parse(v).map((L) => ({ ...L, id: L.id || $() }));
      g([...s, ...E]);
    } catch {
    }
  }, [s, g]), Q = z(() => JSON.stringify(s, null, 2), [s]);
  return {
    data: s,
    filters: h,
    setFilters: m,
    filteredData: N,
    setReconciled: O,
    setReconciliationFilter: b,
    periodSummary: l,
    getPeriodSummary: C,
    addTransaction: T,
    editTransaction: x,
    deleteTransaction: k,
    undo: F,
    redo: P,
    canUndo: y > 0,
    canRedo: y + 1 < d.length,
    totals: U,
    accountSummary: W,
    importJSON: Z,
    exportJSON: Q
  };
};
export {
  Fe as AccountingDiary,
  xt as AccountingDiaryWrapper,
  Ze as DialogOperation,
  dt as DropZoneOverlay,
  rt as FilterDropdown,
  Le as Footer,
  Ae as GlobalProvider,
  Be as Header,
  ut as LedgerView,
  ht as PeriodChart,
  xt as default,
  De as defaultLabels,
  ot as exportToCSV,
  ct as exportToExcel,
  it as exportToJSON,
  Ue as filterTransactions,
  Te as importFromCSV,
  Ie as importFromJSON,
  ye as summarizeByPeriod,
  Dt as useAccountingDiary
};
