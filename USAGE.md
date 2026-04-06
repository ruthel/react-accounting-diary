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
    },
    {
      date: '2024-01-01',
      text: 'Received Capital',
      amount: 90000,
      account: 'Common Stock',
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
    />
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

  const handleAdd = (item) => {
    console.log('New transaction:', item);
    // Sync with your backend, Redux store, etc.
  };

  const handleEdit = (oldItem, newItem) => {
    console.log('Updated:', oldItem.id, '->', newItem);
  };

  const handleDelete = (item) => {
    console.log('Deleted:', item.id);
  };

  return (
    <AccountingDiary
      data={transactions}
      title="My Company"
      columnHeader={true}
      onChange={setTransactions}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
```

## Pagination

Enable pagination by setting `pageSize`:

```jsx
<AccountingDiary
  data={data}
  title="Large Dataset"
  pageSize={20}
  columnHeader={true}
/>
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

```jsx
<AccountingDiary
  data={data}
  showGrandTotal={true}  // default
/>
```

## i18n / Localisation

Customize all labels via the `labels` prop:

```jsx
<AccountingDiary
  title="Mon Entreprise"
  labels={{
    debit: 'Débit',
    credit: 'Crédit',
    description: 'Description',
    transactionEntries: 'Écritures comptables',
    addTransaction: 'Ajouter une transaction',
    editTransaction: 'Modifier la transaction',
    modifyDescription: 'Modifier les détails de la transaction.',
    addDescription: 'Ajouter une nouvelle écriture.',
    amount: 'Montant',
    currency: 'Devise',
    account: 'Compte',
    date: 'Date',
    debitTransaction: 'Transaction débit',
    save: 'Enregistrer',
    update: 'Mettre à jour',
    cancel: 'Annuler',
    export: 'Exporter',
    clear: 'Effacer',
    sample: 'Données exemple',
    search: 'Rechercher...',
    to: 'au',
    noData: 'Aucune transaction.',
    grandTotal: 'Total Général',
    balance: 'Solde',
    balanced: 'Équilibré',
    unbalanced: 'Déséquilibré',
    page: 'Page',
    of: 'sur',
    edit: 'Modifier',
    delete: 'Supprimer',
    actions: 'Actions',
  }}
/>
```

All keys are optional — only override what you need.

## Advanced Usage

Multiple diary instances with separate contexts:

```jsx
import { AccountingDiary, GlobalProvider } from 'react-accounting-diary';

function App() {
  return (
    <GlobalProvider
      labels={{ debit: 'Débit', credit: 'Crédit' }}
      pageSize={10}
      onChange={(data) => console.log(data)}
    >
      <AccountingDiary title="Diary 1" />
      <AccountingDiary title="Diary 2" />
    </GlobalProvider>
  );
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
  Header,
  Footer,
  DialogOperation,
  defaultLabels,
} from 'react-accounting-diary';

import type {
  IDataItem,
  IStyleConfig,
  ILabels,
  SortField,
  SortOrder,
} from 'react-accounting-diary';
```
