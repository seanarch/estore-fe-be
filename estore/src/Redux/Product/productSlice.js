import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
  products: [],
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const filteredData = action.payload.products.filter((elem) => {
        return elem.category_id === action.payload.selectedCategory.id;
      });

      state.products = filteredData;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "Loading...";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "Success.";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "Rejected!";
      state.error = action.error.message;
    },
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
