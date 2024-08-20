import React from 'react';
import Navbar from './Cart components/Navbar';
import Amazon from './Cart components/Amazon';
import Shopcart from './Cart components/Shopcart';

const Cartform = () => {
  return (
    <div>
        <Navbar/>
        <Amazon/>
        <Shopcart/>
        
    </div>
  );
};

export default Cartform;