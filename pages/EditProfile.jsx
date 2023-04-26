import { supabase } from "../src/client";
import { useState } from "react";


const EditProfile = (props) => {

    console.log(props.user.user.userName)

  const [user, setUser] = useState(props.user.user.userName);
  const [pass, setPass] = useState(props.user.user.password);
  const [Name, setName] = useState(props.user.user.name);
  const [location, setLocation] = useState(props.user.user.location);
  const [description, setDescription] = useState(props.user.user.description);
  const [picture, setPicture] = useState(props.user.user.profilePicture);

  const updateAccount = async () => {
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
      .eq("id", props.user.user.id)
      .select();
      window.location = "/groups";
    };

  function handleClick() {
    updateAccount();
  }

  return (
    <div>
      <h4> Edit Profile </h4>
      <br />
      <label>Username:</label>
      <input
        type="text"
        id="user"
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        id="pass"
        name="pass"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <label>Name:</label>
      <input
        type="text"
        id="Name"
        name="Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label>Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label>Profile Picture URL:</label>
      <input
        type="text"
        id="picture"
        name="picture"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />

      <button onClick={handleClick}>Submit</button>
      <br />
    </div>
  );
};

export default EditProfile;