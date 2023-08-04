import './App.css';
import AccountingDiary from "react-accounting-diary/lib/AccountingDiary";
import data from './lib/data/sample.json'
function App() {

  return (
    <div style={{margin: 32}}>
      <AccountingDiary
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
