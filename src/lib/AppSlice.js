import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    language: localStorage.getItem("language") || "hu",
    busesData: [],
    muzeumData: [],
    snackbar: {},
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
    setsnackbar: (state, action) => {
      state.snackbar = action.payload.snackbar;
    },

  },
});

export const { setlanguage, setbusesData, setmuzeumData, setsnackbar } = appSlice.actions;

export const selectlanguage = state => state.app.language;
export const selectBusesData = state => state.app.busesData;
export const selectMuzeumData = state => state.app.muzeumData;
export const selectsnackbar = state => state.app.snackbar;

export default appSlice.reducer;
