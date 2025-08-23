import "./css/Nav.css"
import {Link} from "react-router-dom"

function Nav(){
    console.log("Hello there")
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <Link to="/" className="Title">Kahass</Link>
                </div>
                
                <div className="navbar-links">
                    <Link to="/members" className="link">members</Link>
                    <Link to="/contacts" className="link">contact us </Link>
                    <Link to="/apply" className="link Apply">Apply</Link>
                </div>
            </nav>
        </>
        )
}

export default Nav