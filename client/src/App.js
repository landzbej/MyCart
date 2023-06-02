import React, { useEffect } from "react";
import { useState } from 'react';
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddForm from "./components/AddForm";
import axios from "axios";


const App = () => {
  let [products, setProducts] = useState([])
  let [addFormDisplay, setAddFormDisplay] = useState(false);
  let [addFormButtonDisplay, setAddFormButtonDisplay] = useState(true);
  let [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/api/cart");
      const data = response.data;
      setCartItems(data);
    }
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/api/products");
      const data = response.data;
      setProducts(data);
    }
    fetch();
  }, [])

  const handleClickAddForm = () => {
    setAddFormButtonDisplay(false);
    setAddFormDisplay(true);
  }

  const handleCancel = () => {
    setAddFormButtonDisplay(true);
    setAddFormDisplay(false);
  }

  const handleCheckout = async () => {
    try {
      await axios.post("/api/cart/checkout")
      setCartItems([])
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddToCart = async ({ title, price, productId }) => {
    try {
      const added = await axios.post("/api/cart", {
        title, price, productId
      })
      if (!cartItems.some(item => item.title == title)) {
        setCartItems(cartItems.concat(added.data));
      } else {
        setCartItems(cartItems.map(item => {
          if (item.title == title) {
            return added.data
          } else {
            return item;
          }
        }))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteProduct = async (productId) => {
    try {
      const deleted = await axios.delete(`api/products/${productId}`);
      console.log("deleted", deleted);
      setProducts(products.filter(product => product._id !== productId))
    } catch (error) {
      console.log("error occurred", error)
    }
  }

  const handleAddProduct = async (formData, callback) => {
    try {
      const added = await axios.post("/api/products", formData)
      console.log("added", added);
      setProducts(products.concat(added.data));
      callback();
    } catch (error) {
      console.log(error);
    }
  }

  const handleEditProduct = async (formData, callback) => {
    try {
      const urlString = `/api/products/${formData.productId}`
      const edited = await axios.put(urlString, {
        title: formData.formTitle,
        price: formData.formPrice,
        quantity: formData.formQuantity,
      })
      setProducts(products.map(product => {
        if (product._id === formData.productId) {
          return edited.data;
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
    <div id="app">
      <Header
        cartItems={cartItems}
        onCheckout={handleCheckout}
      />
      <main>
        <ProductList
          products={products}
          setProducts={setProducts}
          onAddToCart={handleAddToCart}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />

        {addFormButtonDisplay ?
          <p><button className="add-product-button"
            onClick={handleClickAddForm}>Add A Product</button></p> : null}

        {addFormDisplay ?
          <AddForm onAddProduct={handleAddProduct}
            onCancel={handleCancel}
          /> : null}

      </main>
    </ div >
  )
}

export default App