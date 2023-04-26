import { Link } from "react-router-dom"

const SideDisplay = (props) => {

    return (
        <div>
            <Link to={{
                pathname: "/login"
            }}>Login</Link>
            <br />
            <Link to="/register">Register</Link>
        </div>
    )
}

export default SideDisplay;