import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit"; // intial state
import { data } from "autoprefixer";

// add cart slice fucntions RTK
// loading parts apply here
export const AddCartSlice = createSlice({
  name: "AddCart",
  initialState:[],
  reducers: {
    // add cart 
    add:()=>{

    },
    // remove Product items
    removeProduct:()=>{
      increment:()=>{
        console.log(data)
      }
    },
   
  },
});
// exports the funcitons here
export const {add , removeProduct} = AddCartSlice.actions;
export default AddCartSlice.reducer;
