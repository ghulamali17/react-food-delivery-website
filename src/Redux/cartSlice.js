import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItems: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        toast.error("Already in cart!");
      } else {
        state.push({ ...action.payload, qty: 1 });
        toast.success("Added to cart!");
      }
    },
    RemoveItems: (state, action) => {
      const removedItem = state.find((item) => item.id === action.payload);
      if (removedItem) {
        toast.info(`Successfully Removed "${removedItem.name}" from cart.`);
      }
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { AddItems, RemoveItems } = cartSlice.actions;
export default cartSlice.reducer;
