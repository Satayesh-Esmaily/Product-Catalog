import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="details glass">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>

<button className="btn" onClick={() => navigate(-1)}>
  ← Back to Products
</button>
    </div>
  );
}

export default ProductDetails;