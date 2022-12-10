import { configureStore } from '@reduxjs/toolkit'
import cart from './Cart/cart'

export const store = configureStore({
  reducer: {
    cart,
  },
})