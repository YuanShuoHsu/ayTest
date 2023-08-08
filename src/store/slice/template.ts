import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    initalTemplate: (state, data) => {
      state.value = data.payload;
    },
  },
});

export const { initalTemplate } = templateSlice.actions;

export default templateSlice.reducer;
