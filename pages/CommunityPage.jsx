import MakePost from "../components/MakePost"
import { supabase } from "../src/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Community = (props) => {
    console.log(props)
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        const fetchPost = async () => {
            const { data } = await supabase
            .from("UserTable")
            .select()
            .order("created_at", { ascending: true });
    
            // set state of posts
            setUsers(data);    
            }
            fetchPost()
        }, []);

    return(
        <div>
    <div> <h3>Community</h3>
        {users.length > 0 ? <div className="gallery">{(users.map((user) => {
        return (<div className="user">           
            <p>{user.userName}</p>
            <img src={"jpeg"}></img>
            <p>{`Name: ${user.name}`}</p>
            <p>{`Location: ${user.location}`}</p>
            <Link to="/user" state={{user}}>learn more</Link>


        </div>
        )
    }))}</div> : ""}
    </div>
    </div>
    )
}

export default Community