import React, { useEffect } from "react";
import {useState} from 'react';
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import data from "../mockData/data"
import AddForm from "./components/AddForm";


const App = () => {
  let [products, setProducts]= useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  console.log("data:", data)

  return (
    <div id="app">
      <Header />
      <ProductListing products={data} />
      <AddForm/>
    </ div >
  )
}

export default App