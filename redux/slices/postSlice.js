import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosSetup";

export const likePost= createAsyncThunk('post/like',async(body)=>{

    try {
       
        const response = await axiosClient.post('/post/like',body);
        

        return response.result.post;
        
    } catch (e) {
        return Promise.reject(e);
        
    }
    
})





const postSlice = createSlice({
    name: "userSlice",
    initialState: {
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(getMyposts.fulfilled, (state, action) => {
          state.myPosts = action.payload.posts.reverse();
        })
        
    },
  });
  
  export default postSlice.reducer;