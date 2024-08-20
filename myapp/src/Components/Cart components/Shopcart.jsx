import React from "react";

const Shopcart = ({ item }) => {
  if (item) {
    const { title, price, img } = item;
    return (
      <div className="cards">
        <div className="image_box">
          <div className="details">
            <p>{title}</p>
            <p>{price}</p>
            <p>{img}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>there is no item</p>
  }
};

export default Shopcart;
