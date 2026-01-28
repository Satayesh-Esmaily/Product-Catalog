import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Digital Studio</h1>
        <p>
          We create modern, minimal, and high-impact digital products
          with a focus on clarity, performance, and timeless design.
        </p>

        <Link className="btn" to="/products">
          Browse Products →
        </Link>
      </section>

      {/* Optional Features Section */}
      <section className="features" style={{ marginTop: "80px" }}>
        <div className="products-grid">
          <div className="product-card">
            <h3>Web Design</h3>
            <p>Pixel-perfect designs that scale across all devices.</p>
          </div>
          <div className="product-card">
            <h3>Mobile Apps</h3>
            <p>Seamless and fast experiences for iOS and Android.</p>
          </div>
          <div className="product-card">
            <h3>Product Strategy</h3>
            <p>Solutions focused on users, growth, and engagement.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;