import { Link, NavLink  } from "react-router-dom";

const Header = () =>{
    return(
        <div className="header">
            <div className="container">
                <div className="logo-col">
                    <span className="f">F</span>
                    <span className="o">o</span>
                    <span className="o">o</span>
                    <span className="d">D</span>
                    <span className="healthy">healthy</span>
                </div>
                <div className="nav-col">
                    <ul>
                        <li><NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink ></li>
                        <li><NavLink  to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink ></li>
                        <li><NavLink  to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink ></li>
                        <li><NavLink  to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink ></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
export default Header;