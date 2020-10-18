import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
      language: "hun",
  },
  reducers: {
    setlanguage: (state, action) => {
      state.language = action.payload.language;
    },
  },
});

export const { setlanguage} = appSlice.actions;

export const selectlanguage = state => state.app.language;
export default appSlice.reducer;
