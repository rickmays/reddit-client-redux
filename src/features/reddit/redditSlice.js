import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  error: false,
  searchTerm: "",
  subreddit: "reactjs",
};

const redditSlice = createSlice({
  name: "redditPosts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});
