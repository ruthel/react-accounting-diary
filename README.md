# react-accounting-diary

[![npm version](https://badge.fury.io/js/react-accounting-diary.svg)](https://www.npmjs.com/package/react-accounting-diary)
[![npm downloads](https://img.shields.io/npm/dw/react-accounting-diary)](https://www.npmjs.com/package/react-accounting-diary)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![CI](https://github.com/ruthel/react-accounting-diary/actions/workflows/ci.yml/badge.svg)](https://github.com/ruthel/react-accounting-diary/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

<!-- TODO: Replace with actual screenshot/GIF -->
<!-- ![Demo](https://raw.githubusercontent.com/ruthel/react-accounting-diary/main/demo.gif) -->

Lightweight React component to generate accounting diaries with export to PNG, JPEG, or PDF. Features callbacks for full integration, i18n support, sortable columns, pagination, balance validation, and more.

## Installation

```bash
npm install react-accounting-diary react react-dom
# or
yarn add react-accounting-diary react react-dom
# or
pnpm add react-accounting-diary react react-dom
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
  }}
/>
```

See [USAGE.md](USAGE.md) for the full list of label keys.

## Features

- ✅ Add, edit & delete transactions with interactive dialog
- ✅ Export to PNG, JPEG, PDF, CSV, Excel
- ✅ Import from CSV files
- ✅ Search & filter by date range
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
| `height` | `number` | `300` | Height of the component. |
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
| `saveColor` | `string` | `"#ffffff"` | Export button color. |
| `account` | `IStyleConfig` | `{ width: 128, color: '#646464' }` | Account column styles. |
| `amount` | `IStyleConfig` | `{ width: 128, color: '#646464' }` | Amount column styles. |
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

### Pagination & i18n

| Name | Type | Default | Description |
|---|---|---|---|
| `pageSize` | `number` | `undefined` | Transactions per page. Enables pagination when set. |
| `labels` | `ILabels` | `defaultLabels` | Custom labels for i18n. See [USAGE.md](USAGE.md). |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme mode. |

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
}
```

## Performance

- **Bundle size:** ~18KB (ESM, gzipped)
- **Zero external CSS:** Styles are scoped and included
- **Tree-shakeable:** ESM exports with `sideEffects: false`

## Contributing

Please check [issues](https://github.com/ruthel/react-accounting-diary/issues) for bug reports or suggestions.

To contribute, follow our [contributing guide](CONTRIBUTING.md).

## License

MIT - see [LICENSE](LICENSE) file for details.
