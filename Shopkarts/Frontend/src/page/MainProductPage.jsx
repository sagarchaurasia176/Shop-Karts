import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductApi } from "@/Constant/Slice/AddCartSlice";
import { StatusCode } from "@/lib/StatusCode";
import Spinner from "./Spinner";

// main Product page apply here
const MainProductPage = () => {
  const dispatch = useDispatch();
  const { post: AddCart, Status } = useSelector((state) => state.AddCart);

  // useEffect apply here
  useEffect(() => {
    dispatch(ProductApi());
  }, []);

  // check the status code
  if (Status === StatusCode.LOADING) return <Spinner />;
  // error
  if (Status === StatusCode.ERROR) return alert("error in the product page");

  // Main page
  return (
    <div>
      {/* main product page apply here */}
      <div className=" w-full p-1 m-auto rounded-md md:w-2/3 ">
        <div className=" lg:grid p-2  gap-1  lg:grid-cols-3">
          {AddCart.map((details) => (
            <>
              <div key={details.id} className=" ">
                <div
                  className=" cursor-pointer 
                  flex flex-col  items-center justify-between 
                   transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 
                  rounded-lg  outline"
                >
                  <div className="h-[130px]">
                    <img
                      className=" h-full w-full  rounded-t-lg"
                      src={details.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                      {details.description.split(" ").slice(0, 10).join(" ") +
                        "..."}
                    </p>
                  </div>
                  {/* price  */}
                  <div className="flex justify-between gap-12 items-center w-full mt-5">
                    <div>
                      <p className="text-green-600 font-semibold">
                        ${details.price}
                      </p>
                    </div>
                  </div>
                  {/* buttons */}
                  <div className=",  flex flex-row gap-7">
                    <button className=" bg-orange-600 p-2 text-white rounded-lg">
                      Add To Cart
                    </button>
                    <button className="  bg-slate-300 p-3 rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;
