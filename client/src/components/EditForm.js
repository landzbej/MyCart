const { React, useState } = require("react");

const EditForm = ({ title, quantity, price, onEditProduct }) =>  {
  const [formTitle, setFormTitle] = useState(title);
  const [formQuantity, setFormQuantity] = useState(quantity);
  const [formPrice, setFormPrice] = useState(price);
    return (
<div className="edit-form">
              <h3>Edit Product</h3>
              <form onSubmit={ (e) => {
                  e.preventDefault();
                  onEditProduct({title, price, quantity, key});
                }
              }>
                <div className="input-group">
                  <label htmlFor="product-name">Product Name</label>
                  <input
                    type="text"
                    id="product-name"
                    value={formTitle}
                    onChange={(e) => {
                      setFormTitle(e.target.value)
                    }}
                    aria-label="Product Name"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="product-price">Price</label>
                  <input
                    type="number"
                    id="product-price"
                    value={formPrice}
                    onChange={(e) => {
                      setFormPrice(e.target.value)
                    }}
                    aria-label="Product Price"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="product-quantity">Quantity</label>
                  <input
                    type="number"
                    id="product-quantity"
                    value={formQuantity}
                    onChange={(e) => {
                      setFormQuantity(e.target.value)
                    }}
                    aria-label="Product Quantity"
                  />
                </div>

                <div className="actions form-actions">
                  <button type="submit">Update</button>
                  <button type="button">Cancel</button>
                </div>
              </form>
            </div>
 )           
}

export default EditForm;