import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: () => 'under construction', // Remove the 'state' parameter
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
