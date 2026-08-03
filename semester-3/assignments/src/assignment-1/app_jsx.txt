import React from 'react';
import Ques1 from './assignment-1/ques-1/Ques1';
import Ques2 from './assignment-1/ques-2/Ques2';
import Ques3 from './assignment-1/ques-3/Ques3';
import Ques4 from './assignment-1/ques-4/Ques4';
import Ques5 from './assignment-1/ques-5/Ques5';

function App() {
  return (
    <div style={{ margin: 'auto', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center', fontSize: '45px' ,textDecoration:'underline'}}>Assignment 1</h1>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', gap: '30px',marginLeft:'35px'}}>
        <Ques1 />
        <Ques2 />
        <Ques3 />
        <Ques4 />
        <Ques5 />
      </div>
    </div>
  );
}

export default App;
