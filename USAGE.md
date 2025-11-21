# Usage Guide

## Installation

```bash
npm install react-accounting-diary react react-dom
```

## Basic Usage (Recommended)

Use the wrapper component which includes GlobalProvider:

```jsx
import AccountingDiary from 'react-accounting-diary';

function App() {
  const data = [
    {
      date: '2021-01-01',
      text: "Received Capital",
      isDebit: true,
      amount: 90000,
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
    />
  );
}

export default App;
```

## Advanced Usage

If you need multiple AccountingDiary instances or custom context management:

```jsx
import { AccountingDiary, GlobalProvider } from 'react-accounting-diary';

function App() {
  return (
    <GlobalProvider>
      <div>
        <AccountingDiary title="Diary 1" />
        <AccountingDiary title="Diary 2" />
      </div>
    </GlobalProvider>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `IDataItem[]` | `[]` | Array of transactions |
| `title` | `string` | `"Test Model"` | Diary title |
| `width` | `number` | `undefined` | Component width |
| `height` | `number` | `300` | Component height |
| `titleBg` | `string` | `undefined` | Title background color |
| `titleColor` | `string` | `"#000"` | Title text color |
| `titleBorder` | `boolean` | `false` | Show title border |
| `titleAllCaps` | `boolean` | `false` | Uppercase title |
| `titleCorner` | `number` | `undefined` | Title border radius |
| `columnHeader` | `boolean` | `false` | Show column headers |
| `columnHeaderColor` | `string` | `undefined` | Header text color |
| `columnHeaderBgColor` | `string` | `undefined` | Header background |
| `saveColor` | `string` | `"#ffffff"` | Save button color |
| `account` | `IStyleConfig` | `{ width: 128, color: '#646464' }` | Account column style |
| `amount` | `IStyleConfig` | `{ width: 128, color: '#646464' }` | Amount column style |
| `footer` | `IStyleConfig` | `undefined` | Footer style |

## Data Format

```typescript
interface IDataItem {
  date: string;           // YYYY-MM-DD
  text: string;           // Transaction description
  isDebit: boolean;       // true for debit, false for credit
  amount: number;         // Transaction amount
  account: string;        // Account name
  currency: string;       // Currency code (USD, EUR, etc.)
  local?: string;         // Locale for formatting (en-US, fr-FR, etc.)
}
```

## Features

- ✅ Add transactions with dialog form
- ✅ Export to PNG, JPEG, PDF
- ✅ Undo/Redo functionality
- ✅ Responsive design
- ✅ Multi-currency support
- ✅ Customizable styling
