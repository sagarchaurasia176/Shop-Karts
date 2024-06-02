import { configureStore } from '@reduxjs/toolkit'
import AddCartSlice from '../Slice/AddCartSlice'

export const MainStore = configureStore({
  reducer: {
    AddCart : AddCartSlice
  },
})