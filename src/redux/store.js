import { configureStore } from '@reduxjs/toolkit';
import imagesSlice from './feature/imagesSlice';

export const store = configureStore({
    reducer: {
        images: imagesSlice,
    },
  })

export default store;