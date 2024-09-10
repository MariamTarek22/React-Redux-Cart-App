import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [], // if  cartItems found in localStorage set items to the returned value from localStorage after coverting it from string to JSON , if not set it to an empty array
  isCartOpen: false,
};

let cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    changeCartStatus: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    //in addProduct cant check for instock or not because count change dont affect count in products
    addProductToCart: (state, action) => {
      //checking if the item i want to add is already in the cart items
      const item = state.items.find((item) => item.id === action.payload.id);
      //so if find returned the refrence to the item tell user it is already in the cart
      if (item) {
        // Clear any existing toasts before showing the new one
        toast.dismiss();
        toast.success("This Product is already in your cart ");
      }
      // and if not add item to the cart with quantity 1
      else {
        //add quatity property the to item object when the item first added to cart
        //structuredClone action.payload to avoid shallow copy that return a reference to readonly action.payload
        //newItem is a deep copy from action.payload
        let newItem = structuredClone(action.payload);
        state.items.push({ ...newItem, quantity: 1 });        
        const item = state.items.find((item) => item.id === action.payload.id);
        item.rating.count -= 1;
        // Clear any existing toasts before showing the new one
        toast.dismiss();
        toast.success("Product added Successfully to your Cart ");
        localStorage.setItem("cartItems", JSON.stringify(state.items)); // Coverting JSON to string that local storge accept when setting value of cartItems
      }
    },
    removeProductFromCart: (state, action) => {
      //return allitems Except item i want to remove
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // Coverting JSON to string that local storge accept when setting value of cartItems
    },
    incrementItemCount(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.rating.count >= 1) {
          item.quantity += 1; //increment quantity
          item.rating.count -= 1; //decrement product count
          localStorage.setItem("cartItems", JSON.stringify(state.items)); // Coverting JSON to string that local storge accept when setting value of cartItems
        } else {
          toast.dismiss();
          toast.error("Product Out of Stock");
        }
      } else {
        // Clear any existing toasts before showing the new one
        toast.dismiss();
        toast.error("Product not found in the cart");
      }
    },
    decrementItemCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrease quantity
          item.rating.count += 1; //increment product count
        } else {
          //this mean quatity is 1 so remove product from cart by filtering items and all items returned except the removed one
          // Remove item if quantity is 1
          //state.items = state.items.filter((i) => i.id !== item.id);
          cartSlice.caseReducers.removeProductFromCart(state, action);
          item.rating.count += 1;
          // Clear any existing toasts before showing the new one
          toast.dismiss();
          toast.success("Product Removed");
        }
        localStorage.setItem("cartItems", JSON.stringify(state.items)); // Coverting JSON to string that local storge accept when setting value of cartItems
      }
    },
    clearCart: (state) => {
      state.items = [];
      // Clear any existing toasts before showing the new one
      toast.dismiss();
      toast.success("Cart Cleared Successfully");
      localStorage.removeItem("cartItems"); //removing cartItems from localStorage
    },
  },
});

export let cartReducer = cartSlice.reducer;
export const {
  changeCartStatus,
  addProductToCart,
  incrementItemCount,
  decrementItemCount,
  clearCart,
} = cartSlice.actions;

//Return Total cart price by accummalting every item quantity* one piece price
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
