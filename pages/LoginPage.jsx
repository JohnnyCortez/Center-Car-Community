import { Link } from "react-router-dom";
import { useState } from "react";


const Login = (props) => {
    const [toggle, setToggle] = useState(false)

    const handleLogin = props.handleLogin;
    const username = props.username;
    const password = props.password;
    const handleUsernameChange = props.handleUsernameChange;
    const handlePasswordChange = props.handlePasswordChange;

    const handleClick = () => {
        setToggle(!toggle)
    }
  
    return (
      <div>

        <button onClick={handleClick}>Login</button>

        {toggle ? <div><form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="user" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form> </div> : ""}
      </div>
    );
  };

export default Login;
