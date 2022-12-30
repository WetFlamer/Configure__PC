import { configureStore } from "@reduxjs/toolkit";
import categories from "../features/categoriesSlice";
import users from '../features/usersSlice';

export const store = configureStore({
  reducer: {
    users,
    categories,
  },
});
