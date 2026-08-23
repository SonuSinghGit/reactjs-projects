import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      if (data && data.length) setData(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Learn useEffect</h1>
      {data.map((items) => (
        <li>{items.title}</li>
      ))}
    </div>
  );
};

export default App;
