import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./slices/collectionsSlice";

const Store = configureStore({
  reducer: {
    collections: collectionsReducer,
  },
});

export default Store;
