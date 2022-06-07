import { createSlice } from "@reduxjs/toolkit";

const PlaylistStore = createSlice({
  name: "playlist",
  initialState: [],
  reducers:{
    get: (state, action) => {
      state = action.payload;
      return state;
    }
  }
})

export const PlaylistAction = PlaylistStore.actions;
export default PlaylistStore.reducer;
