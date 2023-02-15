import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cart: 0,
    total: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, slug, quantity, price, description, image } =
        action.payload;
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        item.quantity += quantity;
      } else {
        state.items.push({
          product: { id, title, slug, price, description, image },
          quantity,
        });
      }
      state.cart += quantity;
      state.total += quantity * price;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        state.items = state.items.filter((item) => item.product.id !== id);
      } else {
        console.warn(
          `Can't remove product (id: ${id}) as its not in the cart!`
        );
      }
    },
    addOneToCart: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        item.quantity += 1;
        state.cart += 1;
        state.total += item.product.price;
      } else {
        console.warn(
          `Can't remove product (id: ${id}) as its not in the cart!`
        );
      }
    },
    removeOneFromCart: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.cart -= 1;
          state.total -= item.product.price;
        } else {
          state.items = state.items.filter((item) => item.product.id !== id);
          state.cart -= 1;
          state.total -= item.product.price;
        }
      } else {
        console.warn(
          `Can't remove product (id: ${id}) as its not in the cart! fuck it for real???`
        );
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    resetCart: (state) => {
      state.items = [];
      state.cart = 0;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return { ...state, ...action.payload.cart };
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart,
  resetCart,
  removeOneFromCart,
  addOneToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
