import { useReducer } from 'react'
import './Todo.css'

const ToDoList = () => {
    function reducer(state, action) {
        if (action.type == 'add') {
            let item = document.getElementById('txt').value;
            if (item == '') return state;
            return [...state, item];
        }
        else if (action.type == 'remove') {
            return state.filter((task, idx) => idx !== action.index)
        }
        // else if (action.type == 'edit') {
        //     state[idx] = 
        // }
        return state;
    }
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <div style={{ border: '2px solid white' }}>
            <h1 class= "heading">To-Do List</h1>
            <input className='inp' id='txt' type="text" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="btn" onClick={() => dispatch({ type: 'add' })}>add</button>

            <ol>
                {state.map((a, idx) => {
                    return (
                        <li key={idx}>
                            {a}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button class = "btn_remove" onClick={() => dispatch({ type: 'remove', index: idx })}>🗑</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=><input type="text" />} class = "edit" onClick={() => dispatch({ type: 'edit', index: idx })}>edit</button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default ToDoList