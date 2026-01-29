import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        © {new Date().getFullYear()} Ember; Made By Satayesh Esmaily
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Collection</Link>
      </div>
    </footer>
  );
}

export default Footer;