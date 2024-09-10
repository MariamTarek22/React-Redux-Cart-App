import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartslice";

export let store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
