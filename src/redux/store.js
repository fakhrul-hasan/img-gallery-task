import { configureStore } from '@reduxjs/toolkit';
import imagesSlice from './feature/imagesSlice';

export const store = configureStore({
    reducer: {
        imageData: imagesSlice,
    },
  })

export default store;