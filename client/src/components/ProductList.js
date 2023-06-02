import React from "react";
import ProductListing from "./ProductListing";

const ProductList = ({ products, onAddToCart, onDeleteProduct, onEditProduct }) => {
  return (
    <ul className="product">
      {products.map(product => {
        return (
            <ProductListing product={product}
              key={product._id}
              productId={product._id}
              title={product.title}
              quantity={product.quantity}
              price={product.price}
              handleEditProduct={onEditProduct}
              onDeleteProduct={onDeleteProduct}
              onAddToCart={onAddToCart}
            />
          )
      })}
    </ul>
  )
}


export default ProductList;