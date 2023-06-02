import { React, useState } from "react";
import EditForm from "./EditForm";

const ProductListing = ({ title, quantity, price, productId, handleEditProduct, onDeleteProduct, onAddToCart }) => {
  const [editDisplay, setEditDisplay] = useState(false);
  const handleEditClick = () => {
    setEditDisplay(!editDisplay);
  }

  const handleCancelEdit = () => {
    setEditDisplay(false);
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={
            () => {
              onAddToCart({ title, price, productId })
            }
          }>Add to Cart</button>
          <button className="edit" onClick={handleEditClick}>Edit</button>
        </div>
        <button className="delete-button"
          onClick={(e) => onDeleteProduct(productId)}>
          <span>X</span></button>
      </div>
      {editDisplay ?
        <EditForm
          title={title}
          quantity={quantity}
          price={price}
          onEditProduct={handleEditProduct}
          onCancelEdit={handleCancelEdit}
          productId={productId} /> : null}
    </li>

  )
}

export default ProductListing;