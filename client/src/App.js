import React, { useEffect } from "react";
import {useState} from 'react';
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
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
    //adds product through post
    // const formData = passIn;
    try {
    const added = await axios.post("/api/products", formData)
    //updates state of products
    console.log("added", added);
    setProducts(products.concat(added.data));
    //add ability to invoke a callback that cleans up fields
    callback();
    } catch (error) {
      console.log(error);
    }
  }
  // console.log("data:", data)

  return (
    <div id="app">
      <Header />
      <main>
      <ProductListing products={products} />
      <AddForm onAddProduct={handleAddProduct}/>
      </main>
    </ div >
  )
}

export default App