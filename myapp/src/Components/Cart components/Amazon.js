import React from "react";
import list from "../data";
import Shopcart from "./Shopcart";
import "../styles/amazon.css"

const Amazon = () => {
  return (
    <div>
      {list.map((list) => (
        <Shopcart key={list.id} list={list} />
      ))}
    </div>
  );
};

export default Amazon;
