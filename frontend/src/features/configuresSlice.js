import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    configures: [],
    configure: '63b0179bbaabfe23ec67d477'
}

export const configuresSlice = createSlice({
    name: "configures",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    },
  });
  
  
  export default configuresSlice.reducer;
  