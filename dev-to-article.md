---
title: "I added callbacks, i18n, sorting & pagination to my React accounting component — here's what changed"
published: false
description: "react-accounting-diary v2.2.0: now with onChange/onAdd/onDelete, 30+ i18n labels, sortable columns, pagination, balance validation, and keyboard navigation."
tags: react, typescript, opensource, webdev
cover_image:
---

## TL;DR

[react-accounting-diary](https://www.npmjs.com/package/react-accounting-diary) is a lightweight React component for generating accounting diaries with export to PNG, JPEG, PDF, CSV, and Excel.

**v2.2.0** just dropped with 10 new features that make it actually usable in production apps. Here's what changed and why.

---

## The problem with v2.1

The component worked — you could render transactions, export them, undo/redo. But you couldn't **do anything with the data**. No callbacks, no way to sync with your state, no way to know when a user added or deleted a transaction.

It was a demo, not a library.

## What's new in v2.2.0

### 1. Callback props

The biggest missing piece. You can now hook into every data change:

```jsx
<AccountingDiary
  data={transactions}
  onChange={setTransactions}
  onAdd={(item) => api.post('/transactions', item)}
  onEdit={(old, updated) => api.put(`/transactions/${old.id}`, updated)}
  onDelete={(item) => api.delete(`/transactions/${item.id}`)}
/>
```

`onChange` fires on every mutation (add, edit, delete, undo, redo, clear). The specific callbacks (`onAdd`, `onEdit`, `onDelete`) give you granular control.

### 2. Controlled mode

Works with any state management — React state, Redux, Zustand, whatever:

```jsx
const [data, setData] = useState([]);

<AccountingDiary
  data={data}
  onChange={setData}
/>
```

### 3. i18n / Localisation

Every label is now customizable. 30+ keys:

```jsx
<AccountingDiary
  labels={{
    debit: 'Débit',
    credit: 'Crédit',
    addTransaction: 'Ajouter une transaction',
    grandTotal: 'Total Général',
    balanced: 'Équilibré',
    unbalanced: 'Déséquilibré',
    search: 'Rechercher...',
    noData: 'Aucune transaction.',
    // ... 22 more keys
  }}
/>
```

Only override what you need. English defaults for everything else.

### 4. Grand total & balance validation

Automatic debit vs credit totals with a visual badge:

- ✅ **✓ Balanced** (green) when debit = credit
- ⚠️ **⚠ Unbalanced** (red) with the exact difference

Computed on all filtered data, not just the current page.

### 5. Sortable columns

Click any column header to sort:

- **Date** — chronological
- **Account** — alphabetical
- **Amount** — numerical

Click again to toggle asc/desc. Sort indicator (↑↓) shows current state.

### 6. Pagination

```jsx
<AccountingDiary pageSize={20} />
```

Simple. Page navigation appears automatically when needed.

### 7. Delete transactions

Each row now has a context menu (⋮) with **Edit** and **Delete**. The old standalone edit button is gone — everything is grouped in a clean green dropdown.

### 8. Empty state

When there are no transactions, instead of a blank space you get an icon, a message, and a CTA button that opens the add dialog directly.

### 9. Keyboard navigation

- **Tab** through rows
- **Enter/Space** to open the actions menu
- **Escape** to close menus and dialogs
- Full ARIA attributes (`role="row"`, `role="menu"`, `aria-haspopup`, etc.)

### 10. Project cleanup

- Removed dev server from the lib package
- Externalized `react/jsx-runtime` (fixes the `ReactCurrentDispatcher` error with React 19)
- Dropped unused deps (prettier, terser, vitest)
- Modernized TypeScript config

---

## Install

```bash
npm install react-accounting-diary
```

## Minimal example

```jsx
import AccountingDiary from 'react-accounting-diary';

function App() {
  return (
    <AccountingDiary
      title="My Company"
      columnHeader={true}
      showGrandTotal={true}
      pageSize={10}
      onChange={(data) => console.log(data)}
    />
  );
}
```

## Numbers

- **Bundle:** ~18KB gzipped (ESM)
- **React:** 16.8+ / 17 / 18 / 19
- **TypeScript:** full support
- **Zero external CSS**

---

## What's next

- [ ] Live demo on GitHub Pages
- [ ] Storybook playground
- [ ] `onExport` callback
- [ ] Row drag & drop reordering

---

**GitHub:** [ruthel/react-accounting-diary](https://github.com/ruthel/react-accounting-diary)
**npm:** [react-accounting-diary](https://www.npmjs.com/package/react-accounting-diary)

If this is useful, a ⭐ on GitHub helps a lot. Feedback and PRs welcome.
