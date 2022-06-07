import { createSlice } from "@reduxjs/toolkit";

//Category Get: text, id, data, imagesKey
const CategoryStore = createSlice({
  name: "category",
  initialState: [],
  reducers:{
    get: (state, action) => {
      state = action.payload;
      return state;
    }
  }
})

export const CategoryAction = CategoryStore.actions;
export default CategoryStore.reducer;
