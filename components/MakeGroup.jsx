import { supabase } from "../src/client";
import { useState } from "react";

const MakeGroup = (props) => {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  const createAccount = async () => {
  await supabase
  .from("UserTable")
  .insert({
    userName: user,
    password: pass,
    name: null,
    location: null,
    description: null,
    profilePicture: null,
  })
  .select();
  console.log("success")
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

  <button onClick={handleClick}>Submit</button>
  <br />
</div>
);
  };

export default MakeGroup;