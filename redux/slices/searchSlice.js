import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosSetup";

export const getSearchedUser = createAsyncThunk("search/user/", async (body) => {
  try {
    const response = await axiosClient.post("search/searchusers", body);
    return response.result;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
});

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    userCards: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getSearchedUser.fulfilled, (state, action) => {
      state.userCards = action.payload.data;
    });
  },
});

export default searchSlice.reducer;
