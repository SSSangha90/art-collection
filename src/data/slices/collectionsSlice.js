import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
};

export const fetchCollections = createAsyncThunk(
  "collections/getAll",
  async () => {
    const res = await fetch("https://api.artic.edu/api/v1/artworks").then(
      (res) => res.json().then((data) => data.data)
    );
    return res;
  }
);

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.pending, (state) => {
      state.collections = [];
    });
    builder.addCase(fetchCollections.fulfilled, (state, { payload }) => {
      state.collections = payload;
    });
  },
});

export const collectionsSelector = (state) => state.collections;
export default collectionsSlice.reducer;
