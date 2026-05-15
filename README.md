# react-accounting-diary

[![npm version](https://badge.fury.io/js/react-accounting-diary.svg)](https://www.npmjs.com/package/react-accounting-diary)
[![npm downloads](https://img.shields.io/npm/dw/react-accounting-diary)](https://www.npmjs.com/package/react-accounting-diary)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![CI](https://github.com/ruthel/react-accounting-diary/actions/workflows/ci.yml/badge.svg)](https://github.com/ruthel/react-accounting-diary/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

> **[Live Demo →](https://react-accounting-diary-demo.vercel.app)**

Lightweight React component to generate accounting diaries with export to PNG, JPEG, PDF, CSV, Excel, and JSON. Features a headless hook, imperative ref API, ledger view, validation callbacks, i18n support, sortable columns, pagination, balance validation, and more.

## Installation

```bash
npm install react-accounting-diary
```

**Requirements:**
- React 16.8+ or 17.x or 18.x or 19.x
- Node.js 18.0.0 or higher

## Quick Start

```jsx
import AccountingDiary from 'react-accounting-diary';

function App() {
  const data = [
    {
      date: '2024-01-01',
      text: 'Opening balance',
      isDebit: true,
      amount: 10000,
      account: 'Cash',
      currency: 'USD',
    },
  ];

  return (
    <AccountingDiary
      width={1200}
      data={data}
      title="My Company"
      titleBg="#b0d0a3"
      columnHeader={true}
      onChange={(data) => console.log('Data changed:', data)}
    />
  );
}
```

## Headless Hook — `useAccountingDiary`

Build your own UI with full control over the data layer:

```jsx
import { useAccountingDiary } from 'react-accounting-diary';

function CustomDiary() {
  const {
    data,
    addTransaction,
    editTransaction,
    deleteTransaction,
    undo,
    redo,
    canUndo,
    canRedo,
    totals,
    accountSummary,
    importJSON,
    exportJSON,
  } = useAccountingDiary({
    initialData: [],
    onChange: (data) => console.log('Changed:', data),
    onBeforeAdd: (item) => item.amount > 0,       // validate before adding
    onBeforeEdit: (old, updated) => true,          // validate before editing
    onBeforeDelete: (item) => confirm('Delete?'),  // confirm before deleting
  });

  return (
    <div>
      <p>Total Debit: {totals.debit} | Credit: {totals.credit}</p>
      <p>Balanced: {totals.isBalanced ? '✓' : '✗'}</p>
      <button onClick={() => addTransaction({ date: '2024-01-01', text: 'Rent', isDebit: true, amount: 1000, account: 'Rent', currency: 'USD' })}>
        Add
      </button>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
    </div>
  );
}
```

## Imperative Ref API

Control the component programmatically from a parent:

```jsx
import AccountingDiary from 'react-accounting-diary';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);

  return (
    <>
      <button onClick={() => ref.current?.exportToPDF()}>Export PDF</button>
      <button onClick={() => ref.current?.exportToJSON()}>Export JSON</button>
      <button onClick={() => ref.current?.addTransaction({ date: '2024-01-01', text: 'Salary', isDebit: true, amount: 5000, account: 'Payroll', currency: 'USD' })}>
        Add via Ref
      </button>
      <button onClick={() => console.log(ref.current?.getTotals())}>Log Totals</button>
      <button onClick={() => console.log(ref.current?.getAccountSummary())}>Account Summary</button>
      <AccountingDiary ref={ref} title="My Company" columnHeader={true} />
    </>
  );
}
```

### Ref API Methods

| Method | Return | Description |
|---|---|---|
| `exportToPNG()` | `Promise<void>` | Export diary as PNG |
| `exportToJPEG()` | `Promise<void>` | Export diary as JPEG |
| `exportToPDF()` | `Promise<void>` | Export diary as PDF |
| `exportToCSV()` | `void` | Export data as CSV |
| `exportToExcel()` | `void` | Export data as Excel |
| `exportToJSON()` | `void` | Export data as JSON file |
| `importJSON(json)` | `void` | Import transactions from JSON string |
| `addTransaction(item)` | `void` | Add a transaction programmatically |
| `undo()` | `void` | Undo last action |
| `redo()` | `void` | Redo last undone action |
| `getData()` | `IDataItem[]` | Get current data |
| `getTotals()` | `object` | Get debit, credit, balance, isBalanced |
| `getAccountSummary()` | `object` | Get per-account debit/credit/balance |

## Controlled Mode

Integrate with your state management (Redux, Zustand, React state, etc.):

```jsx
import AccountingDiary from 'react-accounting-diary';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <AccountingDiary
      data={transactions}
      title="My Company"
      columnHeader={true}
      onChange={setTransactions}
      onAdd={(item) => console.log('Added:', item)}
      onEdit={(old, updated) => console.log('Edited:', old, '->', updated)}
      onDelete={(item) => console.log('Deleted:', item)}
    />
  );
}
```

## Validation Callbacks — `onBefore*`

Intercept and validate before any mutation:

```jsx
<AccountingDiary
  data={data}
  onBeforeAdd={(item) => {
    if (item.amount > 100000) {
      alert('Amount too high!');
      return false; // blocks the add
    }
    return true;
  }}
  onBeforeEdit={(oldItem, newItem) => {
    return confirm(`Change ${oldItem.account} to ${newItem.account}?`);
  }}
  onBeforeDelete={(item) => {
    return confirm(`Delete "${item.text}"?`);
  }}
  onChange={setData}
/>
```

Callbacks can be synchronous (`boolean`) or asynchronous (`Promise<boolean>`).

## Ledger View

Toggle between diary view (grouped by date) and ledger view (grouped by account with running balance):

```jsx
<AccountingDiary
  data={data}
  showLedgerToggle={true}  // default: true
  columnHeader={true}
/>
```

The ledger view shows:
- Transactions grouped by account name
- Running balance per account
- Per-account debit/credit totals
- Color-coded balances (green for debit, red for credit)

## Category & Tags

Classify transactions with optional `category` and `tags` fields:

```jsx
const data = [
  {
    date: '2024-01-01',
    text: 'Office rent',
    isDebit: true,
    amount: 2000,
    account: 'Rent',
    currency: 'USD',
    category: 'Operating',
    tags: ['monthly', 'fixed'],
  },
];
```

Categories and tags are searchable via the search filter.

## JSON Import/Export

Import and export data as JSON, in addition to CSV and Excel:

```jsx
// Via toolbar buttons (JSON button in toolbar)
// Or via ref API:
const ref = useRef(null);
ref.current?.exportToJSON();
ref.current?.importJSON('[{"date":"2024-01-01","text":"Test","amount":100,"account":"Cash","currency":"USD","isDebit":true}]');

// Or via the headless hook:
const { importJSON, exportJSON } = useAccountingDiary({ initialData: [] });
const json = exportJSON(); // returns JSON string
importJSON(json);          // imports from JSON string
```

## i18n / Localisation

All labels are customizable via the `labels` prop:

```jsx
<AccountingDiary
  title="Mon Entreprise"
  labels={{
    debit: 'Débit',
    credit: 'Crédit',
    addTransaction: 'Ajouter une transaction',
    editTransaction: 'Modifier la transaction',
    save: 'Enregistrer',
    cancel: 'Annuler',
    search: 'Rechercher...',
    noData: 'Aucune transaction.',
    grandTotal: 'Total Général',
    balance: 'Solde',
    balanced: 'Équilibré',
    unbalanced: 'Déséquilibré',
    category: 'Catégorie',
    tags: 'Étiquettes',
    ledgerView: 'Vue Grand Livre',
    diaryView: 'Vue Journal',
    runningBalance: 'Solde Courant',
    importJSON: 'Importer JSON',
  }}
/>
```

See [USAGE.md](USAGE.md) for the full list of label keys.

## Features

- ✅ **Transaction templates** — reusable presets (rent, salary, etc.)
- ✅ **Drag & drop import** — drop CSV/JSON files onto the component
- ✅ **Filter dropdown** — filter by account/category
- ✅ **Headless hook** (`useAccountingDiary`) — build your own UI
- ✅ **Imperative ref API** — programmatic control (export, add, undo, etc.)
- ✅ **Validation callbacks** (`onBeforeAdd`, `onBeforeEdit`, `onBeforeDelete`)
- ✅ **Ledger view** — group by account with running balance
- ✅ **Category & tags** — classify and search transactions
- ✅ **JSON import/export** — full data backup/restore
- ✅ Add, edit & delete transactions with interactive dialog
- ✅ Export to PNG, JPEG, PDF, CSV, Excel, JSON
- ✅ Import from CSV and JSON files
- ✅ Search & filter by date range (searches category & tags too)
- ✅ Sortable columns (date, account, amount)
- ✅ Pagination support
- ✅ Grand total & balance validation (debit vs credit)
- ✅ Callback props (`onChange`, `onAdd`, `onEdit`, `onDelete`)
- ✅ i18n / Localisation via `labels` prop
- ✅ Undo/Redo functionality
- ✅ Dark/Light theme support
- ✅ Multi-currency support
- ✅ Print-ready CSS
- ✅ Keyboard navigation & ARIA labels
- ✅ Empty state with CTA
- ✅ Customizable styling
- ✅ Responsive design
- ✅ Zero external CSS

## Props

### Layout & Styling

| Name | Type | Default | Description |
|---|---|---|---|
| `height` | `number` | `undefined` | Height of the component (min 650px). |
| `width` | `number` | `undefined` | Width of the component. |
| `title` | `string` | `"Test Model"` | Title of the accounting diary. |
| `titleColor` | `string` | `"#000"` | Text color of the title. |
| `titleBg` | `string` | `undefined` | Background color of the title. |
| `titleBorder` | `boolean` | `false` | Whether the title has a border. |
| `titleAllCaps` | `boolean` | `false` | Transform title to uppercase. |
| `titleCorner` | `number` | `8` | Corner radius of the title box. |
| `columnHeader` | `boolean` | `false` | Show column headers. |
| `columnHeaderColor` | `string` | `undefined` | Column header text color. |
| `columnHeaderBgColor` | `string` | `undefined` | Column header background color. |
| `saveColor` | `string` | `undefined` | Export button background color. Uses primary theme color if not set. |
| `saveIcon` | `React.ReactNode` | `undefined` | Custom icon for the export button. |
| `account` | `IStyleConfig` | `undefined` | Account column styles (color, width, etc.). |
| `amount` | `IStyleConfig` | `undefined` | Amount column styles (color, width, etc.). |
| `footer` | `IStyleConfig` | `undefined` | Footer styles. |
| `compactButtons` | `boolean` | `false` | Use compact button layout. |

### Data & Callbacks

| Name | Type | Default | Description |
|---|---|---|---|
| `data` | `IDataItem[]` | `undefined` | Array of accounting entries. |
| `onChange` | `(data: IDataItem[]) => void` | `undefined` | Called when data changes (add, edit, delete, undo, redo). |
| `onAdd` | `(item: IDataItem) => void` | `undefined` | Called when a transaction is added. |
| `onEdit` | `(old: IDataItem, new: IDataItem) => void` | `undefined` | Called when a transaction is edited. |
| `onDelete` | `(item: IDataItem) => void` | `undefined` | Called when a transaction is deleted. |
| `onBeforeAdd` | `(item: IDataItem) => boolean \| Promise<boolean>` | `undefined` | Validate before adding. Return `false` to block. |
| `onBeforeEdit` | `(old: IDataItem, new: IDataItem) => boolean \| Promise<boolean>` | `undefined` | Validate before editing. Return `false` to block. |
| `onBeforeDelete` | `(item: IDataItem) => boolean \| Promise<boolean>` | `undefined` | Validate before deleting. Return `false` to block. |

### Features Toggle

| Name | Type | Default | Description |
|---|---|---|---|
| `showExport` | `boolean` | `true` | Show export buttons. |
| `showUndo` | `boolean` | `true` | Show undo/redo buttons. |
| `showSample` | `boolean` | `true` | Show sample data button. |
| `showClear` | `boolean` | `true` | Show clear button. |
| `showAdd` | `boolean` | `true` | Show add transaction button. |
| `showEdit` | `boolean` | `true` | Show edit/delete actions on rows. |
| `showSearch` | `boolean` | `true` | Show search & date filter. |
| `showGrandTotal` | `boolean` | `true` | Show grand total & balance check. |
| `showLedgerToggle` | `boolean` | `true` | Show diary/ledger view toggle button. |
| `onExport` | `(format: string, data: IDataItem[]) => void` | `undefined` | Called when data is exported. |

### Pagination & i18n

| Name | Type | Default | Description |
|---|---|---|---|
| `pageSize` | `number` | `undefined` | Transactions per page. Enables pagination when set. |
| `labels` | `ILabels` | `defaultLabels` | Custom labels for i18n. See [USAGE.md](USAGE.md). |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme mode (light/dark styling). |

## Data Format

```typescript
interface IDataItem {
  id?: string;        // Auto-generated if not provided
  date: string;       // YYYY-MM-DD
  text: string;       // Transaction description
  isDebit?: boolean;  // true = debit, false/undefined = credit
  amount: number;     // Transaction amount
  account: string;    // Account name
  currency: string;   // Currency code (USD, EUR, XAF, etc.)
  local?: string;     // Locale for formatting (en-US, fr-FR, de-DE)
  category?: string;  // Transaction category (Operating, Investing, etc.)
  tags?: string[];    // Tags for classification (searchable)
}
```

## Performance

- **Bundle size:** ~21KB (ESM, gzipped)
- **Zero external CSS:** Styles are scoped and included
- **Tree-shakeable:** ESM exports with `sideEffects: false`

## Roadmap

**Coming in v2.5.0:**
- Mini chart — debit/credit visualization by month (`showChart` prop)
- Multi-journal support (purchases, sales, bank, cash)
- Reconciliation — mark transactions as reconciled

**Future ideas:**
- Virtualization for large datasets
- Recurring transactions
- Multi-currency conversion with exchange rates
- Chart of accounts presets (OHADA, SYSCOHADA, IFRS)
- Plugin system for custom columns/actions

See the full [ROADMAP](https://github.com/ruthel/react-accounting-diary/blob/main/ROADMAP.md) for details.

## Contributing

Please check [issues](https://github.com/ruthel/react-accounting-diary/issues) for bug reports or suggestions.

To contribute, follow our [contributing guide](CONTRIBUTING.md).

## License

MIT - see [LICENSE](LICENSE) file for details.
