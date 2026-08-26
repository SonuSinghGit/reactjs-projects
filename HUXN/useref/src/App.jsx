import React, { useState } from "react";
import { useRef } from "react";

function App() {
  const [input, setInput] = useState();

  const inputRef= useRef(null);
  console.log(inputRef);


  const handleAutoFocus = ()=>{
     inputRef.current.focus();
     inputRef.current.value = "sonu kumar"
  }

  return (
    <div>
      <h1>Use Ref Hooks</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleAutoFocus}>Auto Focus & Write</button>
    </div>
  );
}

export default App;
