import React, {useState}from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const inCart = isInCart ? "in-cart" : "";
  function toggleIsInCart() {
    setIsInCart((inCart) =>!inCart);
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={toggleIsInCart}className="add">{inCart ? "Add to Cart" : "Remove" }</button>
    </li>
  );
}

export default Item;
