import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

// const intial statte here
const initialState = {
    cartVal : 0,

}

export const UserCartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addBtn : ()=>{
            

        },
        removeBtn : ()=>{

        }
    }

})

// these are the main properties of redux
export const{addBtn , removeBtn} = UserCartSlice.actions;
export default UserCartSlice.reducer;