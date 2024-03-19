import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],  // Corrected the key name here
  status:"idle",
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getProduct.fulfilled, (state, action)=>{
        state.data = action.payload;
        state.status="idle";
    })
    .addCase(getProduct.pending,(state, action)=>{
        state.status="Loading";
    })
    .addCase(getProduct.rejected,(state,action)=>{
        state.status="Error"
    })
  }
});

export const { fetchProducts } = productSlice.actions;  // Corrected the export name here
export default productSlice.reducer;

export const getProduct= createAsyncThunk("products/get", async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();  
    return result;
});
// export function getProduct() {
//   return async function getProductsThunk(dispatch, state) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();  // Added the 'await' keyword here
//     dispatch(fetchProducts(result));
//   };
// }
