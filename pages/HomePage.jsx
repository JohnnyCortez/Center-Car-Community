import MakePost from "../components/MakePost";
import { supabase } from "../src/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(props)
  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("PostTable")
        .select()
        .order("created_at", { ascending: true });

      // set state of posts
      setPosts(data);
    };
    fetchPost();
  }, []);

  const fetchMyPost = async () => {
    const { data } = await supabase
      .from("PostTable")
      .select()
      .order("created_at", { ascending: true })
      .eq("ownerID", props.user.id);

    // set state of posts
    setMyPosts(data);
    setToggle(!toggle);
    console.log(myPosts)
  };

  return (
    <div>
      <h3>Home</h3>
      {!props.user.id === null > 0? <Link to="/makePost" state={props}>
        Create New Post
      </Link> : ""}
      <br />
      {!props.user.id === null > 0? <button onClick={fetchMyPost}>My Posts</button> : ""}
      {posts.length > 0 && !toggle? (
        <div className="gallery">
          {posts.map((post) => {
            return (
              <div className="post">
                <p>{post.title}</p>
                {post.created_at}
                <img src={"jpeg"}></img>
                <p>{`Posted by ${post.username}`}</p>
                <Link to="/post" state={{ post }}>
                  learn more
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

    {myPosts.length > 0 && toggle ? (
        <div className="gallery">
          {myPosts.map((post) => {
            return (
              <div className="post">
                <p>{post.title}</p>
                <p>{post.created_at}</p>
                
                <img src={"jpeg"}></img>
                <p>{`Posted by ${post.username}`}</p>
                <Link to="/loginpost" state={{ post }}>
                  learn more
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
