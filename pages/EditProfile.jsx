import { supabase } from "../src/client";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const EditProfile = () => {
const local = useLocation();
const { account } = local.state;
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [Name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState(null);
  const [picture, setPicture] = useState(null);

  const createAccount = async () => {
    await supabase
      .from("UserTable")
      .update({
        userName: user,
        password: pass,
        name: Name,
        location: location,
        description: description,
        profilePicture: picture,
      })
      .eq("id", account.id)
      .select();
    window.location = "/";
  };

  function handleClick() {
    createAccount();
  }

  return (
    <div>
      <h4> Create New Account</h4>
      <br />
      <label>Username:</label>
      <input
        type="text"
        id="user"
        name="user"
        onChange={(e) => setUser(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="text"
        id="pass"
        name="pass"
        onChange={(e) => setPass(e.target.value)}
      />

      <label>Name:</label>
      <input
        type="text"
        id="Name"
        name="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <label>Description:</label>
      <textarea
        id="description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label>Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <label>Profile Picture URL:</label>
      <input
        type="text"
        id="picture"
        name="picture"
        onChange={(e) => setPicture(e.target.value)}
      />

      <button onClick={handleClick}>Submit</button>
      <br />
    </div>
  );
};

export default EditProfile;