import React from "react";
import list from "../data";
import Shopcart from "./Shopcart";

const Amazon = () => {
  return (
    <section>
      {list.map((list) => (
        <Shopcart item={list} key={list.id} />
      ))}
    </section>
  );
};

export default Amazon;
