import React from "react";
const ProductListing = ({ products }) => {
  console.log("products:", products)
  return (
    <ul className="product">
      {products.map(product => (<Product key={product.id} title={product.title} quantity={product.quantity} price={product.price} />))}
    </ul>
  )
}

const Product = ({ title, price, quantity }) => {
  return (
    React.createElement("li", {
      className: "product",
      children: [
        React.createElement("div", {
          className: "product-details",
          children: [
            React.createElement("h3", null, title),
            React.createElement("p", {
              className: "price"
            }, price),
            React.createElement("p", {
              className: "quantity"
            }, `${quantity} left in stock`),
            React.createElement("div", {
              className: "actions product-actions",
              children: [
                React.createElement("button", {
                  className: "add-to-cart"
                }, "Add to Cart"
                ),
                React.createElement("button", {
                  className: "edit"
                }, "Edit"
                )
              ]
            },)
          ]
        })
      ]
    })
  )
}





export default ProductListing;