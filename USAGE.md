# Usage Guide

## Installation

```bash
npm install react-accounting-diary react react-dom
```

## Basic Usage

```jsx
import AccountingDiary from 'react-accounting-diary';

function App() {
  const data = [
    {
      date: '2024-01-01',
      text: 'Received Capital',
      isDebit: true,
      amount: 90000,
      account: 'Cash',
      currency: 'USD',
      category: 'Equity',
      tags: ['opening'],
    },
    {
      date: '2024-01-01',
      text: 'Received Capital',
      amount: 90000,
      account: 'Common Stock',
      currency: 'USD',
      category: 'Equity',
      tags: ['opening'],
    },
  ];

  return (
    <AccountingDiary
      width={1200}
      data={data}
      title="My Company"
      titleBg="#b0d0a3"
      columnHeader={true}
    />
  );
}
```

## Headless Hook — `useAccountingDiary`

Use the hook to build your own UI while leveraging the full data layer:

```jsx
import { useAccountingDiary } from 'react-accounting-diary';

function CustomDiary() {
  const {
    data,
    addTransaction,
    editTransaction,
    deleteTransaction,
    undo, redo, canUndo, canRedo,
    totals,
    accountSummary,
    importJSON, exportJSON,
  } = useAccountingDiary({
    initialData: [],
    onChange: (data) => saveToBackend(data),
    onBeforeAdd: (item) => item.amount > 0,
    onBeforeDelete: (item) => confirm(`Delete "${item.text}"?`),
  });

  return (
    <div>
      <h2>Totals: {totals.debit} / {totals.credit}</h2>
      <p>{totals.isBalanced ? '✓ Balanced' : '⚠ Unbalanced'}</p>

      {Object.entries(accountSummary).map(([account, summary]) => (
        <div key={account}>
          {account}: D={summary.debit} C={summary.credit} B={summary.balance}
        </div>
      ))}

      <button onClick={() => addTransaction({
        date: '2024-01-15', text: 'Rent', isDebit: true,
        amount: 1000, account: 'Rent Expense', currency: 'USD',
        category: 'Operating', tags: ['monthly', 'fixed'],
      })}>Add Rent</button>

      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
      <button onClick={() => navigator.clipboard.writeText(exportJSON())}>Copy JSON</button>
    </div>
  );
}
```

### Hook Options

| Option | Type | Description |
|---|---|---|
| `initialData` | `IDataItem[]` | Starting data |
| `onChange` | `(data) => void` | Called on every data change |
| `onBeforeAdd` | `(item) => boolean \| Promise<boolean>` | Validate before add. Return `false` to block. |
| `onBeforeEdit` | `(old, new) => boolean \| Promise<boolean>` | Validate before edit. Return `false` to block. |
| `onBeforeDelete` | `(item) => boolean \| Promise<boolean>` | Validate before delete. Return `false` to block. |

### Hook Return Values

| Value | Type | Description |
|---|---|---|
| `data` | `IDataItem[]` | Current transactions |
| `addTransaction` | `(item) => Promise<boolean>` | Add a transaction (respects `onBeforeAdd`) |
| `editTransaction` | `(id, updates) => Promise<boolean>` | Edit by ID (respects `onBeforeEdit`) |
| `deleteTransaction` | `(id) => Promise<boolean>` | Delete by ID (respects `onBeforeDelete`) |
| `undo` / `redo` | `() => void` | Undo/redo |
| `canUndo` / `canRedo` | `boolean` | Whether undo/redo is available |
| `totals` | `{ debit, credit, balance, isBalanced }` | Computed totals |
| `accountSummary` | `Record<string, { debit, credit, balance }>` | Per-account summary |
| `importJSON` | `(json: string) => void` | Import from JSON string |
| `exportJSON` | `() => string` | Export to JSON string |

## Imperative Ref API

Control the component from a parent via ref:

```jsx
import AccountingDiary from 'react-accounting-diary';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);

  return (
    <>
      <button onClick={() => ref.current?.exportToPDF()}>PDF</button>
      <button onClick={() => ref.current?.exportToCSV()}>CSV</button>
      <button onClick={() => ref.current?.exportToJSON()}>JSON</button>
      <button onClick={() => ref.current?.addTransaction({
        date: '2024-02-01', text: 'Salary', isDebit: true,
        amount: 5000, account: 'Payroll', currency: 'USD',
      })}>Add</button>
      <button onClick={() => console.log(ref.current?.getTotals())}>Totals</button>
      <button onClick={() => console.log(ref.current?.getAccountSummary())}>Accounts</button>
      <AccountingDiary ref={ref} title="My Company" />
    </>
  );
}
```

## Controlled Mode with Callbacks

Use `onChange`, `onAdd`, `onEdit`, and `onDelete` to integrate with your app state:

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
      onAdd={(item) => console.log('New transaction:', item)}
      onEdit={(oldItem, newItem) => console.log('Updated:', oldItem.id, '->', newItem)}
      onDelete={(item) => console.log('Deleted:', item.id)}
    />
  );
}
```

## Validation Callbacks — `onBefore*`

Block mutations based on custom logic:

```jsx
<AccountingDiary
  data={data}
  onBeforeAdd={(item) => {
    if (item.amount > 100000) return false; // block
    return true;
  }}
  onBeforeEdit={async (old, updated) => {
    return await checkWithServer(updated); // async validation
  }}
  onBeforeDelete={(item) => confirm(`Delete "${item.text}"?`)}
  onChange={setData}
/>
```

## Ledger View

Toggle between diary (by date) and ledger (by account) views:

```jsx
<AccountingDiary
  data={data}
  showLedgerToggle={true}
  columnHeader={true}
/>
```

The ledger view displays:
- Transactions grouped by account
- Running balance per account
- Per-account debit/credit totals

## Category & Tags

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

Both `category` and `tags` are searchable via the search filter.

## JSON Import/Export

In addition to CSV and Excel, you can import/export JSON:

- **Toolbar**: Click the JSON import button
- **Ref API**: `ref.current.exportToJSON()` / `ref.current.importJSON(jsonString)`
- **Hook**: `exportJSON()` / `importJSON(jsonString)`

## Pagination

Enable pagination by setting `pageSize`:

```jsx
<AccountingDiary data={data} title="Large Dataset" pageSize={20} columnHeader={true} />
```

Grand totals and balance are calculated on all filtered data, not just the current page.

## Sortable Columns

Column headers are clickable when `columnHeader={true}`. Click to sort by:
- **Date** — chronological order
- **Account** — alphabetical order
- **Amount** — numerical order

Click again to toggle ascending/descending.

## Grand Total & Balance Validation

Enabled by default (`showGrandTotal={true}`). Displays:
- Total debit and credit amounts
- A **✓ Balanced** badge (green) when debit equals credit
- A **⚠ Unbalanced** badge (red) with the difference when they don't match

## i18n / Localisation

Customize all labels via the `labels` prop. All keys are optional — only override what you need.

### Full Label Keys

```typescript
interface ILabels {
  debit?: string;               // "Debit"
  credit?: string;              // "Credit"
  description?: string;         // "Description"
  transactionEntries?: string;  // "Transaction entries"
  addTransaction?: string;      // "Add Transaction"
  editTransaction?: string;     // "Edit Transaction"
  modifyDescription?: string;   // "Modify the transaction details."
  addDescription?: string;      // "Add a new entry to your accounting diary."
  amount?: string;              // "Amount"
  currency?: string;            // "Currency"
  account?: string;             // "Account"
  date?: string;                // "Date"
  debitTransaction?: string;    // "Debit transaction"
  save?: string;                // "Save"
  update?: string;              // "Update"
  cancel?: string;              // "Cancel"
  export?: string;              // "Export"
  clear?: string;               // "Clear"
  sample?: string;              // "Data Sample"
  search?: string;              // "Search..."
  to?: string;                  // "to"
  noData?: string;              // "No transactions yet."
  grandTotal?: string;          // "Grand Total"
  balance?: string;             // "Balance"
  balanced?: string;            // "Balanced"
  unbalanced?: string;          // "Unbalanced"
  page?: string;                // "Page"
  of?: string;                  // "of"
  edit?: string;                // "Edit"
  delete?: string;              // "Delete"
  actions?: string;             // "Actions"
  category?: string;            // "Category"
  tags?: string;                // "Tags"
  ledgerView?: string;          // "Ledger View"
  diaryView?: string;           // "Diary View"
  runningBalance?: string;      // "Running Balance"
  importJSON?: string;          // "Import JSON"
}
```

## Hiding Features

Toggle individual features on/off:

```jsx
<AccountingDiary
  data={data}
  title="Minimal View"
  showExport={false}
  showUndo={false}
  showSample={false}
  showClear={false}
  showAdd={false}
  showEdit={false}
  showSearch={false}
  showGrandTotal={false}
  showLedgerToggle={false}
/>
```

## Data Format

```typescript
interface IDataItem {
  id?: string;        // Auto-generated if not provided
  date: string;       // YYYY-MM-DD
  text: string;       // Transaction description
  isDebit?: boolean;  // true = debit, false/undefined = credit
  amount: number;     // Transaction amount
  account: string;    // Account name
  currency: string;   // Currency code (USD, EUR, XAF, JPY, etc.)
  local?: string;     // Locale for number formatting (en-US, fr-FR, de-DE)
  category?: string;  // Transaction category
  tags?: string[];    // Tags for classification
}
```

## Keyboard Navigation

- **Tab** — navigate between rows
- **Enter / Space** — open the actions menu on a focused row
- **Escape** — close the actions menu or dialog
- All interactive elements have ARIA labels for screen readers

## Exports

Available named exports:

```typescript
import AccountingDiaryWrapper, {
  AccountingDiary,
  GlobalProvider,
  LedgerView,
  Header,
  Footer,
  DialogOperation,
  useAccountingDiary,
  defaultLabels,
  exportToCSV,
  exportToExcel,
  exportToJSON,
  importFromCSV,
  importFromJSON,
} from 'react-accounting-diary';

import type {
  IDataItem,
  IStyleConfig,
  ILabels,
  SortField,
  SortOrder,
  ViewMode,
  AccountingDiaryHandle,
  UseAccountingDiaryOptions,
  UseAccountingDiaryReturn,
} from 'react-accounting-diary';
```
