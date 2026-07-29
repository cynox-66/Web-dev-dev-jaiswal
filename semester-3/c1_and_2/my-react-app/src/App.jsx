import React from 'react'
import { useState, useEffect } from 'react'
import Home from "./Home";

const App = () => {
  let [count, setCount] = useState(0);
  return (

    <div>

      <Component2 />
      <Home />

      <h1>{count}</h1>
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => setCount(0)}>
        Reset
      </button>
      <br></br>
      <br></br>
      <Screen />
      <br></br>
      <br></br>
      <UseEffectDemo />
    </div>
  )
}

export default App

const Component2 = () => { // component name always CAPITALLLLLLLLLLLLLL
  console.log("noteee")
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Counter App</h1>
    </div>
  )
}

const Screen = () => {
  let [Color, setColor] = useState("red")
  return (
    <div style={{ backgroundColor: Color }}>
      <h2>Screen Color: {Color}</h2>
      <button style={{ backgroundColor: 'black', color: 'white', margin: '10px' }} onClick={() => setColor('red')}>
        Red
      </button>
      <button style={{ backgroundColor: 'black', color: 'white', margin: '10px' }} onClick={() => setColor('green')}>
        Green
      </button>
      <button style={{ backgroundColor: 'black', color: 'white', margin: '10px' }} onClick={() => setColor('blue')}>
        Blue
      </button>
    </div>
  )
}

const UseEffectDemo = () => {
  let [City, SetCity] = useState("pune")
  let [apiData, SetApiData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
      SetApiData(data);
    }).catch((err) => {
      console.error("Fetch error:", err);
    })
  }, [City])
  return (
    <div >
      <section style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <button onClick={() => SetCity("Mumbai")}>Mumbai</button>
        <button onClick={() => SetCity("Delhi")}>Delhi</button>
        <button onClick={() => SetCity("Bangalore")}>Bangalore</button>
        <h2 style={{ color: 'black' }}>City: {City}</h2>
      </section>
      <br />
      <div style={{border:'2px solid white',padding:'10px'}}>
        <h1 >API DATA</h1>
        <br />
        {apiData.map((item, index) => {
          if (index < 5) {
            return <h1 key={item.id}>{item.id}&nbsp;&nbsp;&nbsp;{item.title}</h1>
          }
          return null;
        })}

      </div>

    </div>

  )
}





