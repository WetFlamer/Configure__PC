import { configureStore } from "@reduxjs/toolkit";
import categories from "../features/categoriesSlice";
import users from '../features/usersSlice';
import accessories from "../features/accessoriesSlice";
export const store = configureStore({
  reducer: {
    users,
    categories,
    accessories
  },
});
