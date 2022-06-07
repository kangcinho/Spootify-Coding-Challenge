import { createSlice } from "@reduxjs/toolkit";

const NewReleaseStore = createSlice({
  name: "newrelease",
  initialState: [],
  reducers:{
    get: (state, action) => {
      state = action.payload;
      return state;
    }
  }
})

export const NewReleaseAction = NewReleaseStore.actions;
export default NewReleaseStore.reducer;
