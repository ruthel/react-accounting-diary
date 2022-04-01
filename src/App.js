import './App.css';
import AccountingDiary from "./lib/components/AccountingDiary";

function App() {
  return (
    <div>
      <AccountingDiary
        title='My new test in dev'
        account={{
          width: 120,
          color:'#ff00ff'
        }}
        amount={{
          width: 120
        }}/>
    </div>
  );
}

export default App;
