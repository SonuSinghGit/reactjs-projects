import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodo([...todo, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  return (
    <div className="text-center">
      <h1 className="text-center mt-2 text-3xl"> TODO APP </h1>
      <div className="px-2">
        <input
          type="text"
          placeholder="Enter your todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>

        {todo.map((todo, index) => {
          return (
            <ul key={index}>
              <div className="flex justify-center gap-4">
                <li>{todo}</li>
                <button
                  className="text-red-400"
                  onClick={() => handleDelete(index)}
                >
                  delete
                </button>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;