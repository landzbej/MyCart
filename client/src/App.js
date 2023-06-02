import React, { useEffect } from "react";
import {useState} from 'react';
import Header from "./components/Header";
import ProductList from "./components/ProductList";
// import data from "../mockData/data"
import AddForm from "./components/AddForm";
import axios from "axios";


const App = () => {
  let [products, setProducts]= useState([])
  // const data;
  useEffect(() => {
    const fetch = async() => {
    const response = await axios.get("/api/products");
    const data = response.data;
    setProducts(data);
    }
    fetch();
  }, [])

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

  return (
    <div id="app">
      <Header />
      <main>
      <ProductList products={products} />
      <AddForm onAddProduct={handleAddProduct}/>
      </main>
    </ div >
  )
}

export default App