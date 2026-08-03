import react from 'react'
import { useReducer } from 'react'

const UseReducerDemo = () => {
    function reducer(state,action){
        if(action.type == 'add'){
            return state+1;
        }
        else if (action.type == 'decrease'){
            return state-1;
        }
        else if (action.type == 'reset'){
            return 0;
        }
        else{
            return state;
        }
    }

  let[state,dispatch] = useReducer(reducer,0);
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'add'})}>add</button>
        <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>

  )
}

export default UseReducerDemo