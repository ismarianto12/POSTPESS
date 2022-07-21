import { createSlice, } from "@reduxjs/toolkit"
import { axios } from "axios"


export async function listData() {
    const response = await axios('api/jenis')
    return response.data
}
export const jenisSlice = createSlice({
    name: 'jenis',
    initialState: listData.getInitialState,
    reducers: {
        getJenis: (state, action) => {
            console.log('rest' + state)
            state.value.push(action.payload)
        },
        addJenis: (state, action) => {
            // state.value.push(action, payload)
            console.log(payload)
        },
        deleteJenis: (state, action) => {
            state.value.push(action, payload)
        },
        updateJenis: (state, action) => {
            state.value.push(action, payload)
            // state.value.push(action, payload)
            console.log(action.payload)

        }
    }

})

export const {
    getJenis,
    addJenis,
    updateJenis,
    deleteJenis } = jenisSlice.actions
export default jenisSlice.reducer
