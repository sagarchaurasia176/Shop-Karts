import { configureStore } from '@reduxjs/toolkit'
import UserCartSlice from '../Slice/UserCartSlice'
import ProductSlice from '../Slice/ProductSlice'

export const MainStore = configureStore({
  reducer: {
    AddCart: ProductSlice,
    Cart: UserCartSlice
  },
})