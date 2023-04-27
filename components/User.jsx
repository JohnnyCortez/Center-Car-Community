import { useState } from "react";
import { supabase } from "../src/client";
import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  console.log(location);
  const { user } = location.state;

  return (
    <div>
      <div>
        <p>{user.userName}</p>
        <img src={"jpeg"}></img>
        <p>{`Name: ${user.name}`}</p>
        <p>{`Location: ${user.location}`}</p>
        <p>{`Description: ${user.description}`}</p>
      </div>
    </div>
  );
};

export default User;
