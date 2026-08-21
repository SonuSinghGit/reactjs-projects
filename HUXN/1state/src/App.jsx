import React from 'react'
import { useState } from 'react'

function App() {

  const [count,setCount] = useState(0);
  
  const handleIncrease = ()=>{
    setCount(count+1);
  }
  const handleDecrease = ()=>{
    setCount(count-1);
  }

  return (
    <div>
      <h1>Helllo State</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>Increase +</button>
      <button onClick={handleDecrease}>Decrease -</button>


    </div>
  )
}

export default App
