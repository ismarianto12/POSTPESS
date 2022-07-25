import { createSlice, } from "@reduxjs/toolkit"
import { axios } from "axios"


export async function listData() {
    const response = await axios('api/jenis')
    return response.data
}

export const jenisSlice = createSlice({
    name: 'jenis',
    initialState: { value: [] },
    reducers: {
        getJenis: (state, action) => {
            state.push(action.payload)
        },
        addJenis: (state, action) => {
            console.log(action.payload)
        },
        deleteJenis: (state, action) => {
            state.value.push(action, payload)
        },
        updateJenis: (state, action) => {
            state.value.push(action, payload)
            console.log(action.payload)
        }
    }
})
// console.log(jenisSlice.getJenis(42))
export const {
    getJenis,
    addJenis,
    deleteJenis,
    updateJenis
} = jenisSlice.actions;
export default jenisSlice.reducer;
