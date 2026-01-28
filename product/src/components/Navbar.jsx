import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar glass">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/products" className="nav-link">
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;