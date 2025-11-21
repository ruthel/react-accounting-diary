import './App.css';
import AccountingDiary from "./lib/AccountingDiary.tsx";
import { GlobalProvider } from "./lib/context.tsx";
import data from './lib/data/sample.json';

function App() {
  return (
    <GlobalProvider>
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '40px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            <h1 style={{
              margin: '0 0 8px 0',
              color: '#1a1a1a',
              fontSize: '32px',
              fontWeight: '700'
            }}>
              Accounting Diary
            </h1>
            <p style={{
              margin: 0,
              color: '#666',
              fontSize: '14px'
            }}>
              Professional financial record management
            </p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <AccountingDiary
              width={1200}
              data={data}
              title="Entreprise SANOGO"
              titleBg="#b0d0a3"
              titleBorder={true}
              titleAllCaps={true}
              titleCorner={8}
              titleColor={'#202020'}
              account={{
                width: 120,
                color: '#f50545',
              }}
              columnHeader={true}
              columnHeaderColor="#ffffff"
              saveColor="#fff44b"
              columnHeaderBgColor="#00b050"
              footer={{
                color: '#000',
                background: '#fcf7fc',
                fontWeight: '500',
              }}
              amount={{
                width: 120,
              }}
            />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
