import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    error: null,
    accessories: [],
};


export const fetchAccesories = createAsyncThunk(
    "get/accessories",
    async (data, thunkAPI) => {
        try {
            const res = await fetch(`/category/${data.categoryId}`);
            const accessories = await res.json();
            if (accessories.error) {
                return thunkAPI.rejectWithValue(accessories.error);
            }
            return thunkAPI.fulfillWithValue(accessories);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const accesoriesSlice = createSlice({
    name: "accessories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAccesories.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchAccesories.pending, (state, action) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAccesories.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.accessories = action.payload;
        });
    },
  });

  
export default accesoriesSlice.reducer;
