import React, { useState } from 'react';
import Navbar from './Cart components/Navbar';
import Amazon from './Cart components/Amazon';
import Shopcart from './Cart components/Shopcart';

const Cartform = () => {
  const [show,setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    //console.log(item);
    cart.push(item);
    console.log(cart);
  };

  return (
    <div>
        <Navbar setShow = {setShow}/>
        {/* <Amazon/> */}
        {show ? <Amazon handleClick={handleClick} /> : }
        <Shopcart/>
        
    </div>
  );
};

export default Cartform;