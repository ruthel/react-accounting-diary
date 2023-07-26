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
    <div style={{margin: 32}}>
      <AccountingDiary
        height={650}
        width={1200}
        data={data}
        title='Entreprise SANOGO'
        titleBg='#b0d0a3'
        titleBorder={true}
        titleAllCaps={true}
        titleCorner={4}
        titleColor={'#202020'}
        account={{
          width: 120,
          color: '#f50545'
        }}
        columnHeader={true}
        columnHeaderColor='#ffffff'
        saveColor='#fff44b'
        columnHeaderBgColor='#00b050'
        footer={{
          color: '#000',
          background: '#fcf7fc',
          fontWeight: '500x'
        }}
        amount={{
          width: 120
        }}/>
    </div>
  );
}

export default App;
