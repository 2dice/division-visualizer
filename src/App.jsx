import { useState } from 'react';
import './App.css';
import GroupDivisionTab from './GroupDivisionTab';

function App() {
  const [activeTab, setActiveTab] = useState('group');
  const [dividend, setDividend] = useState(12);
  const [divisor, setDivisor] = useState(3);

  return (
    <>
      <div>
        <button onClick={() => setActiveTab('group')}>グループ分け</button>
        <button onClick={() => setActiveTab('equal')}>等分</button>
        <button onClick={() => setActiveTab('numberLine')}>数直線</button>
      </div>
      {activeTab === 'group' && (
        <GroupDivisionTab
          dividend={dividend}
          divisor={divisor}
          onDividendChange={setDividend}
          onDivisorChange={setDivisor}
        />
      )}
      {activeTab === 'equal' && <div>等分タブの内容</div>}
      {activeTab === 'numberLine' && <div>数直線タブの内容</div>}
    </>
  );
}

export default App;
