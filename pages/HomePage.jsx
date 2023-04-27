import MakePost from "../components/MakePost"
import { supabase } from "../src/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
    console.log(props)
    const [posts, setPosts] = useState([]);

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
        }, []);

    return(
        <div>
    <div> <h3>Home</h3>
        {posts.length > 0 ? <div className="gallery">{(posts.map((post) => {
        return (<div className="post">           
            <p>{post.title}</p>
            <img src={"jpeg"}></img>
            <p>{`Posted by ${post.username}`}</p>
            <Link to="/post" state={{post}}>learn more</Link>


        </div>
        )
    }))}</div> : ""}
    </div>
    <Link to="/makePost" state={props}>Create New Post</Link>

        </div>
    )
}

export default Home