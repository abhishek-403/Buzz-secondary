import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../utils/axiosClient';


const appConfigSlice = createSlice({
    name: "appConfig",
    initialState: {
        isLoading: false,
        myProfile: {},


    },
    reducers: {
        setLoader: (state, action) => {
            state.isLoading = action.payload;
        },       
       
        


    },
    // extraReducers: (builder) => {
    //     builder
    //         // .addCase(getMyInfo.fulfilled, (state, action) => {
    //         //     state.myProfile = action.payload.user;
    //         // })
    //         // .addCase(updateProfile.fulfilled, (state, action) => {
    //         //     state.myProfile = action.payload.user;
    //         // })
          
    // }
})

export default appConfigSlice.reducer;
export const { setLoader } = appConfigSlice.actions;