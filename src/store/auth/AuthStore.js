import { createSlice } from "@reduxjs/toolkit";

const AuthStore = createSlice({
  name: "auth",
  initialState: {token: null},
  reducers:{
    login: (state, action) => {
      state.token = action.payload.access_token
      return state;
    },
  }
})

export const AuthAction = AuthStore.actions;
export default AuthStore.reducer;
