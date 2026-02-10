import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.title = `${count} My App`;
    } else {
      document.title = "My App";
    }
  }, [count]);

  const handleClear = () => {
    setCount(count == 0);
  };

  return (
    <div>
      <h1>Notification:{count}</h1>
      <button onClick={() => setCount(count + 1)}>New Notification</button>
      <button onClick={handleClear}>clear</button>
    </div>
  );
}

export default App;
