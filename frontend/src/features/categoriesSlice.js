import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "get/categories/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/api/categories");
      const categories = await res.json();

      if (categories.error) {
        return thunkAPI.rejectWithValue(categories.error);
      }
      return thunkAPI.fulfillWithValue(categories);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
