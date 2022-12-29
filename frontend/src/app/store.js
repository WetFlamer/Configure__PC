import { configureStore } from "@reduxjs/toolkit";
import categories from "../features/categoriesSlice";
export const store = configureStore({
  reducer: {
    categories,
  },
});
