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
                const url = URL.createObjectURL(payload);
                state.images.push({id: 1, url: url});
            }else{
                const url = URL.createObjectURL(payload);
                const lastElement = state.images.at(-1);
                state.images.push({
                    id: lastElement.id + 1,
                    url: url
                })
            }
        },
        handleCheckBox: (state, {payload})=>{
            if(state.checkbox.includes(payload)){
                state.checkbox = state.checkbox.filter(item=>item !== payload);
            }else{
                state.checkbox.push(payload);
            }
        }
    },
});

export const {addImage, handleCheckBox} = imagesSlice.actions;

export default imagesSlice.reducer;