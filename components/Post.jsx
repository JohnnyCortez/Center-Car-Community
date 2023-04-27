import { useState } from "react";
import { supabase } from "../src/client";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const { post } = location.state;

  return (
    <div>
      <div>
        <p>{post.title}</p>
        <img src={"jpeg"}></img>
        <p>{`Posted by ${post.username}`}</p>
      </div>
    </div>
  );
};

export default Post;
