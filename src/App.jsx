import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('group');

  return (
    <>
      <div>
        <button onClick={() => setActiveTab('group')}>グループ分け</button>
        <button onClick={() => setActiveTab('equal')}>等分</button>
        <button onClick={() => setActiveTab('numberLine')}>数直線</button>
      </div>
      {activeTab === 'group' && <div>グループ分けタブの内容</div>}
      {activeTab === 'equal' && <div>等分タブの内容</div>}
      {activeTab === 'numberLine' && <div>数直線タブの内容</div>}
    </>
  );
}

export default App;
