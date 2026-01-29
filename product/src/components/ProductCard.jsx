
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <span>
        {product.category} — ${product.price}
      </span>
      <Link className="btn" to={`/products/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;