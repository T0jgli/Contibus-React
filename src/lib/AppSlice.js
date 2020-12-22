import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    language: localStorage.getItem("language") || "hu",
    busesData: [],
    muzeumData: [],
  },
  reducers: {
    setlanguage: (state, action) => {
      state.language = action.payload.language;
    },
    setbusesData: (state, action) => {
      state.busesData = action.payload.busesData;
    },
    setmuzeumData: (state, action) => {
      state.muzeumData = action.payload.muzeumData;
    },

  },
});

export const { setlanguage, setbusesData, setmuzeumData } = appSlice.actions;

export const selectlanguage = state => state.app.language;
export const selectBusesData = state => state.app.busesData;
export const selectMuzeumData = state => state.app.muzeumData;

export default appSlice.reducer;
