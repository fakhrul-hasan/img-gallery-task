import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
    checkbox: [],
}

const imagesSlice = createSlice({
    name: 'imagesSlice',
    initialState,
    reducers: {
        addImage: (state, {payload})=>{
            if(state.images.length === 0){
                // const url = URL.createObjectURL(payload);
                state.images.push({id: 1, url: payload});
            }else{
                // const url = URL.createObjectURL(payload);
                const lastElement = state.images.at(-1);
                state.images.push({
                    id: lastElement.id + 1,
                    url: payload
                })
            }
        },
        removeImage: (state)=>{
            if(state.checkbox.length > 0){
                state.images = state.images.filter(item=> !state.checkbox.includes(item?.url));
                state.checkbox = [];
            }
        },
        handleCheckBox: (state, {payload})=>{
            if(state.checkbox.includes(payload)){
                state.checkbox = state.checkbox.filter(item=>item !== payload);
            }else{
                state.checkbox.push(payload);
            }
        },
        reorderImages: (state, {payload})=>{
            const { startIndex, endIndex } = payload;
            const reorderedImages = [...state.images];
            const [movedImage] = reorderedImages.splice(startIndex, 1);
            reorderedImages.splice(endIndex, 0, movedImage);
            state.images = reorderedImages;
        }
    },
});

export const {addImage, removeImage, handleCheckBox, reorderImages} = imagesSlice.actions;

export default imagesSlice.reducer;