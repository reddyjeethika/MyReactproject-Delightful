// src/Store/store.js
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import ordersReducer from "./ordersSlice"; 

// Load cart state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

// Save cart state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const preloadedState = {
  cart: loadState() || { items: [] }, // if nothing in storage, start fresh
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,  // ✅ add orders slice
  },
  preloadedState,
});


// Subscribe to store changes and persist to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
