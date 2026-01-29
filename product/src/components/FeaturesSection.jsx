import coffeeDark from "../assets/coffee.jpg";
import darkChoco from "../assets/choco.jpg";
import candle from "../assets/warm.jpg";

function FeaturesSection() {
  return (
    <section className="features" style={{ marginTop: "100px" }}>
      <div className="products-grid">
        <div className="product-card">
          <img src={coffeeDark} alt="Artisan Coffee" className="product-image" />
          <h3>Artisan Coffee</h3>
          <p>Carefully roasted beans with deep aroma and balanced flavor.</p>
        </div>

        <div className="product-card">
          <img src={darkChoco} alt="Premium Chocolate" className="product-image" />
          <h3>Premium Chocolate</h3>
          <p>Handcrafted chocolate made from the finest cocoa.</p>
        </div>

        <div className="product-card">
          <img src={candle} alt="Warm Moments" className="product-image" />
          <h3>Warm Moments</h3>
          <p>Simple pleasures designed for calm and comfort.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;