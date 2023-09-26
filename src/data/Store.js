import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./slices/collectionSlice";

const Store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
});

export default Store;
