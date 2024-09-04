import React, { useEffect, useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handlechange }) => {
  const [price, setprice] = useState(0);

  const handleremove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setprice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      <article>
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="img" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handlechange(item, +1)}> + </button>
              <button>{item.amount}</button>
              <button onClick={() => handlechange(item, -1)}> - </button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleremove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total price of your cart</span>
          <span>=$ {price}</span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
