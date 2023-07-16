import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchGithubUser = createAsyncThunk(
  "user/fetchGithubUser",
  async (username) => {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  }
);

const initialState = {
  userData: null,
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGithubUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(fetchGithubUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUserData = (state) => state.user.userData;
export const getUserStatus = (state) => state.user.status;
export const getUserError = (state) => state.user.error;

export default userSlice.reducer;
