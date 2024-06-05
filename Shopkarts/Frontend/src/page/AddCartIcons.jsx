import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const AddCart = () => {
  const cartSItem = useSelector((states) => states.Carts);
  return (
    <div>
      {/* ciShopping Carrts */}
      <sub
        className=" text-white  font-semibold text-1xl rounded-full 
         p-1 ml-2  bg-slate-500  animate-bounce "
      >
        {cartSItem.length}
      </sub>
      <CiShoppingCart
        className=" size-8 cursor-pointer
       text-red-500"
      />
    </div>
  );
};

export default AddCart;
