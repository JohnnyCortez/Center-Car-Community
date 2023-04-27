import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/nav";
import Home from "../pages/HomePage";
import Groups from "../pages/GroupsPage";
import Community from "../pages/CommunityPage";
import Register from "../pages/Register";
import Login from "../pages/LoginPage";
import MyAccount from "../pages/MyAccount";
import { supabase } from "../src/client";
import Post from "../components/Post";
import MakePost from "../components/MakePost";
import User from "../components/User";
import LoginPost from "../components/LoginPost"
import EditPost from "../components/EditPost"


const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignIn] = useState(false);
  const [id, setID] = useState(0)
  const [data, setData] = useState({})

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
      .single()


    if (error) {
      console.error(error);
      return null;
    }

    return data;
  }

  async function handleLogin(event) {
    event.preventDefault();
    const Finalusername = event.target.user.value;
    const Finalpassword = event.target.password.value;
  

    const user = await getUserByUsernameAndPassword(Finalusername, Finalpassword);

    if (user) {
      setID(user.id)
      setData(user)
      setSignIn(true)
    }
  }

  return (
    <div className="App">
      <h1>Center Car Community</h1>
      <h4>Meet others who love cars as much as you do!</h4>
      {username && signedIn ? <h3>{`Hello ${username}`}</h3> : " "}
      {!signedIn ? <Login
            handleLogin={handleLogin}
            username={username}
            password={password}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
          /> : ""}
      {!signedIn ? <Register /> : ""}
      {signedIn ? <MyAccount user={data} /> : ""}


      <Nav />
      <Routes>
        <Route index={true} exact path="/home" element={<Home user={data}/>} />
        <Route index={true} exact path="/groups" element={<Groups />} />
        <Route index={true} exact path="/community" element={<Community />} />
        <Route index={true} exact path="/post" element={<Post />} />
        <Route index={true} exact path="/loginpost" element={<LoginPost />} />
        <Route index={true} exact path="/editpost" element={<EditPost />} />
        <Route index={true} exact path="/makePost" element={<MakePost />} />
        <Route index={true} exact path="/user" element={<User />} />




      </Routes>
      
    </div>
  );
};

export default App;
