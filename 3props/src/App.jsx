import { useState } from "react";
import Card1 from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold underline mb-6">Hello Tailwind</h1>
      <Card1 username="sonu singh" h2tag="This is the Best Image"/>
      <Card1 username="sunny sharma" btntxt="Click me"/>
    </>
  );
}

export default App;
