import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: [],   // store past orders here
  },
  reducers: {
    addOrder: (state, action) => {
      state.list.push(action.payload);
    },
    clearOrders: (state) => {
      state.list = [];
    },
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
