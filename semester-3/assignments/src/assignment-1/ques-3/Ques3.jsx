import React, { useState } from 'react';
import Display from './Display';
import Controls from './Controls';

function Ques3() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '2px solid #38e02dff', padding: '15px', borderRadius: '2px' }}>
      <h3>Q3. Counter Split into Two Components</h3>
      <Display count={count} />
      <Controls count={count} setCount={setCount} />
    </div>
  );
}

export default Ques3;
