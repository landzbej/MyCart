import React from "react";
// import EditForm from "./EditForm";
import ProductListing from "./ProductListing";
const ProductList = ({ products }) => {
  console.log("products:", products)
  return (
    <ul className="product">
      {products.map(product => (
        <>
      <ProductListing product={product} products={products} key={product._id} title={product.title} quantity={product.quantity} price={product.price} />
      {/* <EditForm /> */}
      </>
      ))}
    </ul>
  )
}


export default ProductList;