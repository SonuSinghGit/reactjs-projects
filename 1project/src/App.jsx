import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount]=useState(0);

  const handleIncrease =()=>{
    setCount(count+1)
    console.log(count, Math.random())
  }
  const handleDecrease=()=>{
    setCount(count-1);
  }
  const resetCount = ()=>{
    setCount(count==0);
  }


  return (

    <div>
      <h1>Counter App</h1>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrease}>Increase Count</button>
      <br/>
      <button onClick={handleDecrease}>Decrease Count</button>
      <br/>
      <br/>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
}

export default App;
