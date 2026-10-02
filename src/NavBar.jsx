import { NavLink } from "react-router-dom";

//Navigation between pages
export default function NavBar() {
    return(
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/problem">Problems</NavLink>
        </nav>
    )
}