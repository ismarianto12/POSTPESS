import { createSlice } from "@reduxjs/toolkit"
import { axios } from "axios"


export async function listData() {
    const response = await axios('api/barang')
    return response.data
}
export const barangSlice = createSlice({
    name: 'barang',
    initialState: { value: [] },
    reducers: {
        createbarang: (state, action) => {
            state.value.push(action.payload)
            console.log('test' + action.payload.id)
        },
        deletebarang: (state, action) => {
            state.value.push(action, payload)
        },
        updatebarang: (state, action) => {
            state.value.push(action, payload)
            console.log(action.payload)
        },

    }
})
export const { createbarang, deletebarang, updatebarang } = barangSlice.actions
export default barangSlice.reducer
