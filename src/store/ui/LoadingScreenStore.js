import { createSlice } from "@reduxjs/toolkit";

const LoadingScreenStore = createSlice({
  name: "notification",
  initialState: false,
  reducers: {
    isLoading: (state, action) => {
      state = action.payload;
      return state;
    }
  }
})

export const loadingScreenAction = LoadingScreenStore.actions;
export default LoadingScreenStore.reducer;