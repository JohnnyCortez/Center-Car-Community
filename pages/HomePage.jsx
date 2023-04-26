import MakePost from "../components/MakePost"
import { supabase } from "../src/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Home = (props) => {
    const [posts, setPosts] = useState([]);
    const [toggle, setToggle] = useState(false);


    const handleToggle = () => {
        setToggle(!toggle);
      };

    useEffect(()=> {
        const fetchPost = async () => {
            const { data } = await supabase
            .from("PostTable")
            .select()
            .order("created_at", { ascending: true });
    
            // set state of posts
            setPosts(data);    
            }
            fetchPost()
        }, [posts]);

    return(
        <div>
    <div> <h3>Home</h3>
        {posts.length > 0 ? <div className="gallery">{(posts.map((post) => {
        return (<div className="post">
           <p>{post.title}</p>

        </div>
        )
    }))}</div> : ""}
    </div>
    <button onClick={handleToggle}>Create New Post</button>
    {toggle ? <MakePost user={props.user}/> : ""}

        </div>
    )
}

export default Home