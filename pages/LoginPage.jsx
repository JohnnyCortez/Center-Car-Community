import { Link } from "react-router-dom";


const Login = (props) => {
    const handleLogin = props.handleLogin;
    const username = props.username;
    const password = props.password;
    const handleUsernameChange = props.handleUsernameChange;
    const handlePasswordChange = props.handlePasswordChange;
  
    return (
      <div>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Log in</button>
        </form>
  
        <Link to="/register">Register</Link>
      </div>
    );
  };

export default Login;
