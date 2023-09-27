import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  collection: [],
  images: {},
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

export const fetchImages = createAsyncThunk(
  "collections/getImages",
  async (imageIds) => {
    const res = await fetch(
      `https://api.artic.edu/api/v1/artworks?ids=${imageIds}&fields=id,title,image_id`
    ).then((res) => res.json());
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

    builder.addCase(fetchImages.pending, (state) => {
      state.images = {};
    });
    builder.addCase(fetchImages.rejected, (state) => {
      state.images = {};
    });
    builder.addCase(fetchImages.fulfilled, (state, { payload }) => {
      state.images = payload;
    });
  },
});

export const { selectedArtwork } = collectionSlice.actions;
export const collectionSelector = (state) => state.collection;
export default collectionSlice.reducer;
