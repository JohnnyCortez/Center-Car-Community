import { useState } from "react";
import { supabase } from "../src/client";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPost = () => {
  const location = useLocation();
  const { post } = location.state;
    console.log(post.id)



    const deletePost = async () => {
        await supabase.from("PostTable").delete().eq("id", post.id);
      };


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
        <Link to="/editpost" state={{ post }}>Edit Post</Link>
        <button onClick={deletePost} >Delete Post</button>

      </div>
    </div>
  );
};

export default LoginPost;
