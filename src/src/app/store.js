import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '../../features/AppSlice';


export default configureStore({
  reducer: {
    app: AppReducer
  },
});
