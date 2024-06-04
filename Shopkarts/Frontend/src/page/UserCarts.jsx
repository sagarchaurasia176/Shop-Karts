import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const UserCarts = ({ post }) => {
  return (
    <div>
      <div>
        {/* cart page here */}
        <img src={post.image} alt="" />
      </div>
      <div>
        <span>{post.title}</span>
      </div>
      <div>
        <span>{post.price}</span>
      </div>
      <div>
        <MdDeleteOutline />
      </div>
    </div>
  );
};

export default UserCarts;
