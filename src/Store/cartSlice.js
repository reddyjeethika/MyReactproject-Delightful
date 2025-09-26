import { createSlice } from "@reduxjs/toolkit";
import { getCouponDiscount } from "../discountUtils";

const initialState = {
  items: [],
  totalPrice: 0,
  coupon: null,
  discount: 0,
  orders: [],   // ✅ all previous orders will be stored here
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.items = state.items.filter((product) => product.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.coupon = null;
      state.discount = 0;
      state.totalPrice = 0;
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
      const total = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
      const { discountAmount } = getCouponDiscount(action.payload, total);
      state.discount = discountAmount;
      state.totalPrice = total - discountAmount;
    },
    handlePurchase: (state) => {
  const total = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const { discountAmount } = getCouponDiscount(state.coupon, total);

  state.totalPrice = total - discountAmount;
  

 
},

handlePurchase: (state) => {
  const newOrder = {
    orderId: "ORDER" + Math.floor(Math.random() * 10000),
    items: [...state.items],   // current cart items
    total: state.totalPrice,
    date: new Date().toLocaleString(),
  };

  state.orders.push(newOrder); // ✅ store order

  // Clear cart
  state.items = [];
  state.totalPrice = 0;
  state.coupon = null;
  state.discount = 0;
},


  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  applyCoupon,
  handlePurchase,
} = cartSlice.actions;

export default cartSlice.reducer;
