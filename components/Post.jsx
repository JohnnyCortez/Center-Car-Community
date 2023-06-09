import { useState } from "react";
import { supabase } from "../src/client";
import { useLocation } from "react-router-dom";


const Post = () => {
  const location = useLocation();
  console.log(location)
  const { post } = location.state;
    console.log(post)
  return (
    <div>
      <div>
        <p>{post.title}</p>
        <img src={"jpeg"}></img>
        <p>{`posted by ${post.username}`}</p>
        <p>{`make: ${post.make}`}</p>
        <p>{`model: ${post.model}`}</p>
        <p>{`year: ${post.username}`}</p>
        <p>{`posted by ${post.username}`}</p>
        <p>{`short description: ${post.shortDescr}`}</p>
        <p>{`story ${post.description}`}</p>
        <p>{`specs ${post.specs}`}</p>
        <p>{`modifications ${post.modifications}`}</p>


      </div>
    </div>
  );
};

export default Post;
