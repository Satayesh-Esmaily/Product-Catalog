import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
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

      {/* Features / Categories */}
      <section className="features" style={{ marginTop: "100px" }}>
        <div className="products-grid">
          <div className="product-card">
            <h3>Artisan Coffee</h3>
            <p>
              Carefully roasted beans with deep aroma and balanced flavor.
            </p>
          </div>

          <div className="product-card">
            <h3>Premium Chocolate</h3>
            <p>
              Handcrafted chocolate made from the finest cocoa.
            </p>
          </div>

          <div className="product-card">
            <h3>Warm Moments</h3>
            <p>
              Simple pleasures designed for calm and comfort.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;