import { useState } from "react";
import products from "../data/products";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";

function ProductsList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Coffee", "Chocolate", "Warm Moments"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="container">
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;