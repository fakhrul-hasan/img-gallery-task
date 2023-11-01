import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
}

const imagesSlice = createSlice({
    name: 'imagesSlice',
    initialState,
    reducers: {
        addImage: (state, {payload})=>{
            state.images.push(payload);
        }
    },
});

export const {addImage} = imagesSlice.actions;

export default imagesSlice.reducer;