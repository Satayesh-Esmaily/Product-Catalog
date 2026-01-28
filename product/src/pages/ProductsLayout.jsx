import { Outlet } from "react-router-dom";


function ProductsLayout() {
return (
<div className="container">
<h1>Products</h1>
<p>
A curated selection of digital products designed with
clarity, performance, and timeless aesthetics.
</p>


<Outlet />
</div>
);
}


export default ProductsLayout;