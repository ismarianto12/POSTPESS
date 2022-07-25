import { createSlice } from "@reduxjs/toolkit"
import { axios } from "axios"


// export async function listData() {
//     const response = await axios('api/jenis')
//     return response.data
// }
export const jenisSlice = createSlice({
    name: 'jenis',
    initialState: { value: [] },
    reducers: {
        createJenis: (state, action) => {
             state.value.push(action.payload)
            console.log('test' + action.payload.id)
        },
        deleteJenis: (state, action) => {
            state.value.push(action, payload)
        },
        updateJenis: (state, action) => {
            state.value.push(action, payload)
            console.log(action.payload)
        },

    }
})
export const { createJenis, deleteJenis, updateJenis } = jenisSlice.actions
export default jenisSlice.reducer
