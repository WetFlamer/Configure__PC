import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: false,
  users: [],
  token: localStorage.getItem("token")
};

export const authSignIn = createAsyncThunk(
  "auth/signIn",
  async ({login, password}, thunkAPI) => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ login, password }),
      });
      const user = await res.json();

      if(user.error) {
     return thunkAPI.rejectWithValue(user.error); 
    }
    localStorage.setItem('token', user.token)
    return thunkAPI.fulfillWithValue(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder 
    .addCase(authSignIn.pending, (state) => {
        state.loading = true;
        state.error = false;
    })
    .addCase(authSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(authSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
    })
  },
});

export default usersSlice.reducer;
