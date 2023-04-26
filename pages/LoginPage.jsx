import { supabase } from "../src/client";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function getUserByUsernameAndPassword(username, password) {
    const { data, error } = await supabase
      .from("UserTable")
      .select("*")
      .eq("userName", username)
      .eq("password", password)
      .single();

    if (error) {
      console.error(error);
      return null;
    }

    return data;
  }

  async function handleLogin(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const user = await getUserByUsernameAndPassword(username, password);

    if (user) {
      // Login successful, do something with the user data
    } else {
      // Login failed, show an error message
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>

      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
