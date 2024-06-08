import { configureStore } from '@reduxjs/toolkit'
import CartCatalog from '@/page/CartCatalog'
import ProductSlice from '../ProductSlice'
export const MainStore = configureStore({
  reducer: {
    AddCart: ProductSlice,
    Carts: CartCatalog,
  },
})