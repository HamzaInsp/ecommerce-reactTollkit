import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};
console.log(initialState, "----thunk")

const productSlice = createSlice({

    name: "products",
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload
        }
    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

//we call all products API here in thunk create 
export function getProducts() {
    return (
        async function getProductsThunk(dispatch, getState) {
            const data = await fetch('https://fakestoreapi.com/products')
            const result = await data.json()
            dispatch(fetchProducts(result))
        }
    )
}