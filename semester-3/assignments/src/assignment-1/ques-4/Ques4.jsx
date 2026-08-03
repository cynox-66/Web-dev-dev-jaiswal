import React, { useState } from 'react';
import Badge from './Badge';

function Ques4() {
  const [tasks, setTasks] = useState(['Task1', 'Task2']);
  const [text, setText] = useState('');

  function addTask() {
    if (text !== '') {
      setTasks([...tasks, text]);
      setText('');
    }
  }

  return (
    <div style={{ border: '2px solid #38e02dff', padding: '15px', borderRadius: '2px' }}>
      <h3>Q4. Todo Count Badge</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      &nbsp;&nbsp;
      <button onClick={addTask}>Add</button>
      
      <Badge count={tasks.length} />

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}

export default Ques4;
