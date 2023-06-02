import { React, useState } from "react";
import EditForm from "./EditForm";
import axios from "axios";

const ProductListing = (product, setProducts, products) => {
    console.log("products", products)
    const [editDisplay, setEditDisplay] = useState(false);
    const handleEditClick = () => {
        setEditDisplay(!editDisplay);
    }

    const handleEditProduct = async (formData, callback) => {
        //getting an axios error on the post
        //handlerId works
        const handlerId = (product.product._id.toString());
        try {
        const edited = await axios.put(`/api/products/${handlerId}`, formData)
        //updates state of products
        console.log("edited", edited);
        //line 24 edited is returning, but not with the edited value
        //line 28 now saying that products is undefined, so can't map
        //why is this running before products is fetched? why is it not seeing the state of products
        setProducts(products.map(product => {
            if(product.id === handlerId) {
                return edited;
            } else {
                return product;
            }
        }));
        callback();
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <li className="product">
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p className="quantity">{product.quantity} left in stock</p>
              <div className="actions product-actions">
                <button className="add-to-cart">Add to Cart</button>
                <button className="edit" onClick={handleEditClick}>Edit</button>
              </div>
              <button className="delete-button"><span>X</span></button>
            </div>
            {editDisplay ? <EditForm title={product.title} quantity={product.quantity} price={product.price} onEditProduct={handleEditProduct}/> : null}
          </li>
          
    )
  }
  
  export default ProductListing;