import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk("product/getproduct", async () => {
    const response = await axios.get('api/products')
    return response.data;
})
const productEntity = createEntityAdapter({
    selectId: (product) => product.id
})

export const penjualanSlice = createSlice({
    name: 'penjualan',
    initialState: productEntity.getInitialState,
    reducers: {
        allProduct: (state, action) => {
            // state.value.push(action.payload)
        },
        addProduct: (state, action) => {

        },
        editProduct: (state, action) => {

        },

        deleteProduct: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);

        }
    }
})

export const {
    allProduct,
    addProduct,
    editProduct,
    deleteProduct,
} = penjualanSlice.actions;
export default penjualanSlice.reducer;