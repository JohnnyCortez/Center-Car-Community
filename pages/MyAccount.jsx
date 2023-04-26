import { useState } from "react"
import EditProfile from "./EditProfile"
import { supabase } from "../src/client";


const MyAccount = (props) => {
    console.log(props)
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    const deletePost = async () => {
        await supabase.from("UserTable").delete().eq("id", props.user.id);
        window.location = "/";
      };

    function handleDelete() {
        deletePost();
      }

    return(
        <div>
            <button onClick={handleClick}> My Account</button>
            {toggle ? 
            <div>
                       <h6>{props.user.userName}</h6>
                       <h6>{props.user.name}</h6>
                       <h6>{props.user.location}</h6>
                       <h6>{props.user.description}</h6>
                       <h6>{props.user.profilePicture}</h6>
                       <EditProfile user={props}></EditProfile>
                       <button onClick={handleDelete}>Delete Account</button>
                       </div>
             : ""}
        </div>
    )
}

export default MyAccount