import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  collection: [],
  selected: {},
};

export const fetchCollection = createAsyncThunk(
  "collections/getAll",
  async () => {
    const res = await fetch("https://api.artic.edu/api/v1/artworks").then(
      (res) => res.json().then((data) => data.data)
    );
    return res;
  }
);

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    selectedArtwork: (state, { payload }) => {
      const selectedPiece = state.collection.filter(
        (col) => col.id === payload
      );
      state.selected = selectedPiece;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state) => {
      state.collection = [];
    });
    builder.addCase(fetchCollection.rejected, (state) => {
      state.collection = [];
    });
    builder.addCase(fetchCollection.fulfilled, (state, { payload }) => {
      state.collection = payload;
    });
  },
});

export const { selectedArtwork } = collectionSlice.actions;
export const collectionSelector = (state) => state.collection;
export default collectionSlice.reducer;
