import { Link } from "react-router-dom";
import '../src/App.css'



const Nav = () => {

    return (
        <div className="nav">
            <Link to="/home">            
                <h2 className="tab">Home</h2>
            </Link>
            <Link to="/community">            
                <h2 className="tab">Community Page</h2>
            </Link>
            <Link to="/groups">            
                <h2 className="tab">Groups Page</h2>
            </Link>
        </div>
    )
}

export default Nav;