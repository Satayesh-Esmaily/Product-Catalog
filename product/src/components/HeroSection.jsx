import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <h1>EMBER</h1>
      <p>
        Crafted coffee & chocolate experiences —  
        rich flavors, warm moments, and timeless taste.
      </p>

      <Link className="btn" to="/products">
        Explore Our Collection →
      </Link>
    </section>
  );
}

export default HeroSection;