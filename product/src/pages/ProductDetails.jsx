import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="details glass">
        <h2>Product not found</h2>
        <Link className="btn" to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="details glass">
      <h2 className="details-title">{product.name}</h2>

      <p className="details-category">{product.category}</p>

      <p className="details-description">
        {product.description}
      </p>

      <div className="details-info">
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Origin:</strong> {product.origin}
        </p>
        <p>
          <strong>Intensity:</strong> {product.intensity}
        </p>
        <p>
          <strong>Weight:</strong> {product.weight}
        </p>
      </div>

      <button className="btn" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>
    </div>
  );
}

export default ProductDetails;