import { supabase } from "../src/client";
import { useState } from "react";

const Register = () => {

    const [user, setUser] = useState(null)
    const [pass, setPass] = useState(null)
    const [Name, setName] = useState(null)
    const [location, setLocation] = useState(null)
    const [description, setDescription] = useState(null)
    const [picture, setPicture] = useState(null)


    const createAccount = async () => {
        await supabase
          .from("UserTable")
          .insert({
            userName: user,
            password: pass,
            name: Name,
            location: location,
            description: description,
            profilePicture: picture,
          })
          .select();
        window.location = "/";
      };

      function handleClick() {
        createAccount();
      }


    return(
        <div>
      <h4> Create New Account</h4>
      <br />
      <label>Username:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label>Speed (mph):</label>
      <input
        type="number"
        id="speed"
        name="speed"
        onChange={(e) => setSpeed(e.target.value)}
      />

      <label>Description:</label>
      <textarea
        id="description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label>Color:</label>
      <select
        id="color"
        name="color"
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Yellow">Yellow</option>
        <option value="Pink">Pink</option>
        <option value="Orange">Orange</option>
        <option value="Rainbow">Rainbow</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
        <option value="Brown">Brown</option>
        <option value="Teal">Teal</option>
      </select>
      <button onClick={handleClick}>Submit</button>
      <br />
      <img
        src="https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2020/09/character-creator-among-us.jpg"
        height="200"
        width="350"
      />
    </div>
    )
}

export default Register