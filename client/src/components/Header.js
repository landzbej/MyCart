import React from "react";
import { Cart } from "./Cart";

const Header = ({ cartItems, onCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        < Cart cartItems={cartItems} onCheckout={onCheckout} />
      </div>
    </ header>
  )
}
export default Header;