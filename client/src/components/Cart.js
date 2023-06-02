import React from "react";

const CartItem = ({ title, quantity, price }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  );
};
export const Cart = ({ cartItems, onCheckout }) => {
  const currentTotal = (() => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      .toFixed(2);
  })();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => <CartItem
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            key={item._id} />)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total">Total: ${currentTotal}</td>
          </tr>
        </tfoot>
      </table>
      <div className="checkout-button">
        <button className="checkout" onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};
