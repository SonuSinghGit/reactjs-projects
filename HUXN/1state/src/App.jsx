import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(["Aman", "Sonu", "Ankit", "Ajay"]);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  const addFriend = ()=>{
    setFriends([...friends,"Amit Shinha"])
  }

  const removeFriend = ()=>{
    setFriends(friends.filter((name)=>name !== "Aman"));
  }
  const updateFriend = ()=>{
    setFriends(friends.map((name)=>name === "Sonu" ? "Sunny Sharma":name));
  }

  return (
    <div>
      <h1>Helllo State</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>Increase +</button>
      <button onClick={handleDecrease}>Decrease -</button>

      <h1>project 2 </h1>
      {friends.map((name) => (
        <li>{name}</li>
      ))}
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriend}>Update Friend</button>
    </div>
  );
}

export default App;
