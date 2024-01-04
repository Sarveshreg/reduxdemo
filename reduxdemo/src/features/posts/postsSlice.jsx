import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:"1", title: "title 1", content: "This is my 1st post!"},
    {id:"12", title: "title 2", content: "This is my 2nd post!"},
    {id:"123", title: "title 3", content: "This is my 2nd post!"}
]

const postsSlice=createSlice({
    name:'post',
    initialState,
    reducer:{
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})

export const selectAllPosts=(state)=>state.posts;
export const { postAdded }=postsSlice.actions;
export default postsSlice.reducer;