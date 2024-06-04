import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import StatusCode from "@/lib/StatusCode";
import Spinner from "./Spinner";
import UserCarts from "./UserCarts";

const CartCatalog = () => {
  const { Carts } = useSelector((states) => states);
  const { Status } = useSelector((Status) => Status.AddCart);
  const [load, setLod] = useState(false);
  // const [Amount, setAmount] = useState(0);
  // amount of the total product is :-
  // useEffect(() => {
  //   setAmount(CartPage.reduce((acc, curr) => acc + curr.price , 0))
  // }, [CartPage]);

  if (Status === StatusCode.LOADING) return <Spinner />;
  if (Status === StatusCode.ERROR)
    return (
      <h2>
        <b>Error in catalog</b>
      </h2>
    );

  return (
    <>
      <div>
        <div className=" h-screen   ">
          <div className=" lg:flex  lg:justify-evenly  lg:items-center  flex flex-row">
            {/* cart page  */}
            <div className=" ">
              {load ? (
                <Spinner />
              ) : Carts && Carts.length > 0 ? (
                <>
                  <div>
                    {Carts.map((val) => {
                      return <UserCarts key={val.id} val={val} />;
                    })}
                    
                  </div>
                  {/* SUMMARY */}
                  <div>
                    <div>
                      <h2>Your Cart</h2>
                      <h3>Summary</h3>
                    </div>
                    <div>
                      <span>Total item {Carts.length}</span>
                    </div>

                    {/* TOTAL AMOUNT */}

                    <div>
                      <div>{/* <p>Total Amount : ${Amount}</p> */}</div>
                      <div>
                        <button>CheckOuty</button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // false state here
                <>
                  <div className="  text-center  p-4 h-screen mr-20 ">
                    <h1 className=" lg:text-2xl text-center  sm:text-2xl  font-extralight ">
                      Cart is Empty<span className="  text-3xl">😔</span>Add
                      Something
                    </h1>
                    <NavLink to="/">
                      <div
                        className=" flex justify-center items-center  w-44 rounded-lg m-auto cursor-pointer 
                          transition-all duration-100 hover:bg-slate-300
                        bg-green-400 outline p-3"
                      >
                        <button className=" w-44">Shop Now</button>
                      </div>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
            {/* summary start */}
          </div>
          {/* last vreak points here */}
        </div>
      </div>
    </>
  );
};

export default CartCatalog;
