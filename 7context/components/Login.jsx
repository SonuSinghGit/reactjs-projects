import React, { useState, useContext } from "react";
import UserContext from "../src/context/Context";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleFormSubmit = (e) => {
    // console.log(username)
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      {" "}
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
}

export default Login;
