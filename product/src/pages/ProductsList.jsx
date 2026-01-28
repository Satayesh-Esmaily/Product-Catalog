import { Link } from "react-router-dom";
import products from "../data/products";

function ProductsList() {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <span>
            {product.category} — ${product.price}
          </span>

          <Link className="btn" to={`/products/${product.id}`}>
            View Product
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;