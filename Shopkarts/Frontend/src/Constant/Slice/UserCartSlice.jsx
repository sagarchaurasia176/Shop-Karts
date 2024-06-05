import React from "react";
import { createSlice } from "@reduxjs/toolkit";

// const intial statte here
export const UserCartSlice = createSlice({
  name: "Carts",
  initialState: [],
  reducers: {
    addBtn: (state, action) => {
      state.push(action.payload);
    },
    removeBtn: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});
// these are the main properties of redux
export const { addBtn, removeBtn } = UserCartSlice.actions;
export default UserCartSlice.reducer;
