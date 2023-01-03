import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    configures: [],
    configure: localStorage.getItem('configure')
}
export const addConfigure = createAsyncThunk('add/configure', async (data, thunkAPI) => {
    try {
        const res = await fetch("/configure", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const configure = await res.json()
        localStorage.setItem('configure', configure._id)
        thunkAPI.fulfillWithValue(configure)
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
}
)
export const configuresSlice = createSlice({
    name: "configures",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    },
});


export default configuresSlice.reducer;
