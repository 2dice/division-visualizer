import { useState } from 'react';
import './App.css';
import Slider from './Slider';

function App() {
  const [activeTab, setActiveTab] = useState('group');
  const [dividend, setDividend] = useState(12);
  const [divisor, setDivisor] = useState(3);

  const result = dividend / divisor;
  const remainder = dividend % divisor;

  return (
    <>
      <div>
        <button onClick={() => setActiveTab('group')}>グループ分け</button>
        <button onClick={() => setActiveTab('equal')}>等分</button>
        <button onClick={() => setActiveTab('numberLine')}>数直線</button>
      </div>
      <div>
        <Slider
          label="割られる数"
          value={dividend}
          min={1}
          max={50}
          onChange={setDividend}
        />
        <Slider
          label="割る数"
          value={divisor}
          min={1}
          max={10}
          onChange={setDivisor}
        />
      </div>
      <div className="calculation">
        {dividend} ÷ {divisor} = {Math.floor(result)}
        {remainder !== 0 && `... ${remainder}`}
      </div>
      {activeTab === 'group' && <div>グループ分けタブの内容</div>}
      {activeTab === 'equal' && <div>等分タブの内容</div>}
      {activeTab === 'numberLine' && <div>数直線タブの内容</div>}
    </>
  );
}

export default App;
