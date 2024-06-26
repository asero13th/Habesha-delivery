import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const ProductCard = (props) => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const { id, title, image01, price } = props.item;
  const [isAddedToCart, setIsAddedToCart] = useState(
    cartItems.some((item) => item.id === props.item.id)
  );

  const productInCart = cartItems.find((item) => item.id === props.item.id);
  const [quantity, setQuantity] = useState(
    productInCart
      ? cartItems.find((item) => item.id === props.item.id).quantity
      : 1
  );

  const { item } = props;

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    addToCart(item);
  };

  const onincrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    increaseQuantity(item.id);
  };

  const ondecrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    decreaseQuantity(item.id);
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          {!isAddedToCart ? (
            <button className="addTOCart__btn" onClick={handleAddToCart}>
              Add to cart
            </button>
          ) : (
            <div>
              <button
                className="decreaseCart_btn"
                onClick={ondecrementQuantity}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="increaseCart_btn"
                onClick={onincrementQuantity}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
