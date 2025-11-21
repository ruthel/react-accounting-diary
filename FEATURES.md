# 🚀 Features Guide

## ✨ New in v2.0.0

### 1. Edit Transactions
Click the edit button (✏️) on any transaction to modify it.

```jsx
// Transactions now have edit buttons automatically
<AccountingDiary data={transactions} />
```

### 2. Search & Filter
Real-time search and date range filtering.

```jsx
import SearchFilter from 'react-accounting-diary/SearchFilter';

<SearchFilter />
<AccountingDiary data={filteredTransactions} />
```

### 3. Dark Mode Support
Built-in theme system with dark/light modes.

```jsx
import { ThemeProvider } from 'react-accounting-diary/ThemeProvider';

<ThemeProvider>
  <AccountingDiary 
    titleBg="#1a1a1a" 
    titleColor="#ffffff"
    columnHeaderBgColor="#2d2d2d"
  />
</ThemeProvider>
```

### 4. CSV/Excel Export
Export your data to CSV or Excel formats.

```jsx
import { exportToCSV, exportToExcel } from 'react-accounting-diary/exportUtils';

// Export to CSV
exportToCSV(transactions, 'my-diary.csv');

// Export to Excel
exportToExcel(transactions, 'my-diary.xlsx');
```

### 5. CSV Import
Import transactions from CSV files.

```jsx
import { importFromCSV } from 'react-accounting-diary/exportUtils';

const handleFileUpload = async (file) => {
  const transactions = await importFromCSV(file);
  setData(transactions);
};
```

### 6. Print Support
Optimized CSS for direct printing.

```jsx
// Add print styles
import 'react-accounting-diary/print.css';

// Print button
<button onClick={() => window.print()}>
  Print Diary
</button>
```

## 🎨 Styling Features

### Custom Themes
```jsx
const customTheme = {
  titleBg: '#4f46e5',
  titleColor: '#ffffff',
  columnHeaderBgColor: '#e0e7ff',
  columnHeaderColor: '#3730a3'
};

<AccountingDiary {...customTheme} />
```

### Responsive Design
```jsx
// Mobile-first approach
<AccountingDiary
  width="100%"
  height={300}
  columnHeader={false} // Better for mobile
/>
```

## 🔧 Advanced Usage

### Multi-Currency Support
```jsx
const transactions = [
  { amount: 1000, currency: 'USD', ... },
  { amount: 850, currency: 'EUR', ... },
  { amount: 750, currency: 'GBP', ... }
];
```

### Custom Export Formats
```jsx
const handleCustomExport = () => {
  const node = document.getElementById('diary');
  htmlToImage.toPng(node).then(dataUrl => {
    // Custom processing
  });
};
```

### Keyboard Navigation
- `Tab` - Navigate between buttons
- `Enter/Space` - Activate buttons
- `Esc` - Close dialogs

### Screen Reader Support
All elements include proper ARIA labels:
- `role="table"` for diary container
- `aria-label` for buttons
- `aria-level` for headings

## 📊 Performance Features

### Lazy Loading
PDF export is lazy-loaded to reduce initial bundle size.

### Tree Shaking
Import only what you need:
```jsx
import AccountingDiary from 'react-accounting-diary';
import { exportToCSV } from 'react-accounting-diary/exportUtils';
```

### Bundle Analysis
Check bundle impact:
```bash
npm run build -- --analyze
```

## 🔒 Security Features

### Data Validation
All imported data is validated before processing.

### XSS Protection
User input is sanitized automatically.

### No External Dependencies
Core functionality works offline.

## 🌐 Internationalization

### Currency Formatting
Automatic formatting based on currency code:
```jsx
{ amount: 1000, currency: 'EUR' } // €1,000.00
{ amount: 1000, currency: 'JPY' } // ¥1,000
```

### Date Formatting
Supports various date formats:
```jsx
{ date: '2024-01-15' }    // ISO format
{ date: '01/15/2024' }    // US format
{ date: '15/01/2024' }    // EU format
```

## 🧪 Testing Features

### Test Utilities
```jsx
import { render } from '@testing-library/react';
import AccountingDiary from 'react-accounting-diary';

test('renders accounting diary', () => {
  render(<AccountingDiary data={mockData} />);
});
```

### Mock Data
```jsx
import { mockTransactions } from 'react-accounting-diary/test-utils';

<AccountingDiary data={mockTransactions} />
```

## 📱 Mobile Features

### Touch Gestures
- Swipe to scroll horizontally
- Tap to edit transactions
- Pinch to zoom (on supported devices)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

### PWA Ready
Works offline and can be installed as a PWA.

## 🔄 Migration Guide

### From v1.x to v2.0
```jsx
// v1.x
<AccountingDiary data={data} />

// v2.0 - Same API, new features available
<AccountingDiary data={data} />
// Edit buttons appear automatically
// Search/filter available as separate component
```

No breaking changes - v2.0 is fully backward compatible!