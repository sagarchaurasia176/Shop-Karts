import React, { useEffect, useState } from "react";
// call the redux here
// import { ApiCalling } from "../Constant/Slice/AddCartSlice";
import Spinner from "./Spinner";
// main Product page apply here
const MainProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  //   calling the api here so therefore we get
  const ProductApi = async () => {
    try {
      setLoading(true);
      const fetchApi = await fetch("https://fakestoreapi.com/products");
      const response = await fetchApi.json();
      setPost(response);
      setLoading(false);
    } catch {
      toast.error("Internal errors!");
    }
  };
  useEffect(() => {
    ProductApi();
  }, []);
  return (
    <div>
      {/* main product page apply here */}
      <div className=" w-full p-1 m-auto rounded-md md:w-2/3 ">
        <div className=" lg:grid p-2  gap-1  lg:grid-cols-3">
          {loading ? (
            <Spinner />
          ) : // nested terniary apply here
          post.length >= 0 ? (
            <>
              {post.map((details) => {
                return (
                  <>
                    {/* card components apply here */}
                    <div key={details.id} className=" ">
                      <div
                        className=" cursor-pointer 
                        flex flex-col  items-center justify-between 
                         transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 
                        rounded-lg  outline">
                        <div className="h-[130px]"
                        >
                          <img
                            className=" h-full w-full  rounded-t-lg"
                            src={details.image}
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                            {details.description
                              .split(" ")
                              .slice(0, 10)
                              .join(" ") + "..."}
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
                        <div className="  flex flex-row gap-7">
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
                );
              })}
            </>
          ) : (
            //   false conditions apply here
            <>
              <b>
                <h1 classNameName="  flex items-center sm:mt-10 justify-center text-3xl  text-green-950  font-light">
                  Data Not Found Here
                </h1>
              </b>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;
