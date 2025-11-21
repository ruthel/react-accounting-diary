# ⚡ Quick Start Guide

## 🚀 Try it Now (30 seconds)

[![Edit react-accounting-diary](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-accounting-diary-demo)

Click above for **instant demo** - no setup required!

## 📦 Installation (1 minute)

```bash
npm install react-accounting-diary
# or
yarn add react-accounting-diary
```

## 🎯 Basic Usage (2 minutes)

```jsx
import AccountingDiary from 'react-accounting-diary';

function App() {
  const transactions = [
    {
      date: '2024-01-01',
      text: 'Opening Balance',
      isDebit: true,
      amount: 10000,
      account: 'Cash',
      currency: 'USD',
    },
    {
      date: '2024-01-02',
      text: 'Office Rent',
      isDebit: false,
      amount: 2500,
      account: 'Rent Expense',
      currency: 'USD',
    }
  ];

  return (
    <AccountingDiary
      data={transactions}
      title="My Company"
      width={1200}
      columnHeader={true}
    />
  );
}
```

**That's it!** You now have a fully functional accounting diary with:
- ✅ Export to PNG, JPEG, PDF, CSV, Excel
- ✅ Add/Edit transactions
- ✅ Undo/Redo
- ✅ Search & Filter

## 🎨 Customize (30 seconds)

```jsx
<AccountingDiary
  data={transactions}
  title="My Company"
  titleBg="#4f46e5"        // Purple background
  titleColor="white"       // White text
  columnHeader={true}      // Show headers
  width={1200}
/>
```

## 🌙 Dark Mode (15 seconds)

```jsx
<AccountingDiary
  data={transactions}
  title="My Company"
  titleBg="#1a1a1a"        // Dark background
  titleColor="#ffffff"     // White text
  columnHeaderBgColor="#2d2d2d"
/>
```

## 📊 Export Data (10 seconds)

```jsx
import { exportToCSV } from 'react-accounting-diary/exportUtils';

// Export button
<button onClick={() => exportToCSV(transactions)}>
  Export CSV
</button>
```

## 🔍 Add Search (20 seconds)

```jsx
import SearchFilter from 'react-accounting-diary/SearchFilter';

function App() {
  return (
    <div>
      <SearchFilter />
      <AccountingDiary data={filteredTransactions} />
    </div>
  );
}
```

## 📱 Mobile Responsive (5 seconds)

```jsx
<AccountingDiary
  data={transactions}
  width="100%"             // Full width
  height={300}             // Fixed height
  columnHeader={false}     // Hide headers on mobile
/>
```

## 🎯 Common Patterns

### Multi-Currency
```jsx
const transactions = [
  { amount: 1000, currency: 'USD', ... },
  { amount: 850, currency: 'EUR', ... },
  { amount: 750, currency: 'GBP', ... }
];
```

### Real-time Updates
```jsx
const [transactions, setTransactions] = useState([]);

useEffect(() => {
  // Fetch from API
  fetchTransactions().then(setTransactions);
}, []);
```

### Print Support
```jsx
import 'react-accounting-diary/print.css';

<button onClick={() => window.print()}>
  Print
</button>
```

## 🚨 Troubleshooting

### Bundle Size Too Large?
```jsx
// Use dynamic imports
const AccountingDiary = lazy(() => import('react-accounting-diary'));
```

### TypeScript Errors?
```bash
npm install @types/react @types/react-dom
```

### Styling Issues?
```jsx
// Ensure container has proper width
<div style={{ width: '100%' }}>
  <AccountingDiary width={1200} />
</div>
```

## 📚 Next Steps

1. **[Live Demo](https://codesandbox.io/s/react-accounting-diary-demo)** - Try all features
2. **[Full Documentation](./README.md)** - Complete API reference  
3. **[Examples](./examples/)** - TypeScript examples
4. **[Templates](./templates/)** - Invoice, Balance Sheet templates
5. **[Features Guide](./FEATURES.md)** - All v2.0 features

## 💡 Pro Tips

- Start with basic implementation, add features gradually
- Use `titleBg` and `titleColor` to match your brand
- Enable `columnHeader` for better readability
- Test on mobile devices early
- Leverage built-in exports before building custom ones

## 🆘 Need Help?

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/ruthel/react-accounting-diary/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/ruthel/react-accounting-diary/discussions)  
- 📧 **Email**: support@react-accounting-diary.com

---

**⭐ Star us on GitHub if this helped you!**