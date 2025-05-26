import React from 'react';
import TariffsList from './TariffsList'; 

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Тарифные планы</h1>
      <TariffsList />
    </div>
  );
}

export default App;
