import './App.css';
import AccountingDiary from "./lib/AccountingDiary";

function App() {
  const data = [
    {
      date: '2021-01-01',
      text: "Received Capital worth",
      isDebit: true,
      amount: 90000,
      account: 'Cash',
      currency: 'USD',
      local: 'en-US'
    },
    {
      date: '2021-01-01',
      text: "Received Capital worth",
      amount: 90000,
      account: 'Common Stock',
      currency: 'USD'
    },
    {
      date: '2021-01-01',
      text: "Paid $2,000 for the first month’s rent.",
      isDebit: true,
      amount: 80000,
      account: 'Rent',
      currency: 'JPY'
    },
    {
      date: '2021-01-01',
      text: "Paid $2,000 for the first month’s rent.",
      amount: 80000,
      account: 'Cash',
      currency: 'JPY',
      local: 'en-US'
    },
  ]
  return (
    <div>
      <AccountingDiary
        height={650}
        width={1200}
        data={data}
        title='Entreprise SANOGO'
        account={{
          width: 120,
          color: '#ff00ff'
        }}
        amount={{
          width: 120
        }}/>
    </div>
  );
}

export default App;
