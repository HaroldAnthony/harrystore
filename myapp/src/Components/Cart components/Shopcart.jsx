import React from "react";
import "../styles/shopcart.css";

const Shopcart = ({ item}) => {
  if (item) {
    const { title, price, img } = item;
    return (
      <div className="cards">
        <div className="image_box">
          <img className="imgbottle" src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>Price :$ {price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
};

export default Shopcart;
