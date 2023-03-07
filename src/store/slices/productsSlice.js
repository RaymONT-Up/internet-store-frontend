import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [],
  brands: [],
  products: [],
  selectedType: {},
  selectedBrand: {},
  currentPage: 1,
  totalCount: 0,
  limitProductsOnPage: 3,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setTypes(state, action) {
      state.types = action.payload;
    },
    setBrands(state, action) {
      state.brands = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setProduct(state, action) {},
  },
});
export const cartActions = productsSlice.actions;
export default productsSlice;
