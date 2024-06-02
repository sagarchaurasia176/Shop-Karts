import React from "react";
import CategoryName from "../api/CategoryAPI";
const CategoryNav = () => {
  return (
    <div>
      <div className=" p-3   bg-slate-300  m-auto">
        <div className=" text-center flex justify-around">
          <span className=" text-orange-600 ">All Categories</span>
          <ul className=" cursor-pointer space-x-12">
            {CategoryName.map((category) => (
              <span key={category.id} className=" hover:bg-orange-200 rounded-md hover:transition-all p-2  hover:text-black  text-black">
                {category.productType}
              </span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
