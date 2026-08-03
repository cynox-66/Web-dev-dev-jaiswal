
import React, { useState } from 'react';

function Ques1() {
  const[count,setcount] = useState(0);
  function increase(){
    if(count < 10){
      setcount(count + 1);
    }
  }
  function decrease(){
    if(count > 0){
      setcount(count - 1);
    }
  }

  return (
    <div style={{border: '2px solid #38e02dff', padding: '15px', borderRadius: '2px'}}>
      <h3>Q1. Counter with Limit</h3>
      <h2>Count: {count}</h2>
      <button onClick={(increase)}>Increase</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={(decrease)}>Decrease</button>

    </div>
  );
}

export default Ques1;
