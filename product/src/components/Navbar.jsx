import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Home
      </NavLink>
      <NavLink 
        to="/products" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;