import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [
    { id: 1, name: "type" },
    { id: 2, name: "type2" },
  ],
  brands: [
    { id: 1, name: "brand1" },
    { id: 2, name: "brand2" },
  ],
  products: [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
  ],
  selectedType: {},
  selectedBrand: {},
  currentPage: 1,
  totalCount: 0,
  limitProductsOnPage: 3,
};

const shopSlice = createSlice({
  name: "shop",
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
export const productsAction = shopSlice.actions;
export default shopSlice;
