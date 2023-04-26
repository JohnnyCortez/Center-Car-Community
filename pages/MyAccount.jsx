import { useState } from "react"
import EditProfile from "./EditProfile"

const MyAccount = (props) => {
    console.log(props)
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
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
                       </div>
             : ""}
        </div>
    )
}

export default MyAccount