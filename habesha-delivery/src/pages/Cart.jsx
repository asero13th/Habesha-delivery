import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cartItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            marginBottom: "20px",
            maxWidth: "50%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          className="product__item"
        >
          <div style={{ flex: 0.2 }} className="product__img">
            <img
              className="w-50"
              src={item.product.image01}
              alt={item.product.title}
            />
          </div>

          {/* Product Details on the Left */}
          <div style={{ flex: 1 }}>
            <h2>{item.product.title}</h2>
            <p>Price: ${item.product.price}</p>
            <p>Total: ${item.quantity * item.product.price}</p>
            <button
              className="decreaseCart_btn"
              onClick={() => decreaseQuantity(item.product.id)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="increaseCart_btn"
              onClick={() => increaseQuantity(item.product.id)}
            >
              +
            </button>
          </div>
          {/* Image on the Right */}
          <div>
            <button
              className="increaseCart_btn"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
