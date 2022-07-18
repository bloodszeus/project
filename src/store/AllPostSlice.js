import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "API/api";

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (params, { rejectWithValue, dispatch }) => {
    dispatch(statusReset());
    try {
      const response = await fetchPosts({ params });
      dispatch(getPosts(response.data.data || []));
      dispatch(getParams(response.data.pagination) || {});
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  posts: [],
  allParams: {},
  status: false,
  firstLoad: false,
  error: null,
};

export const allPosts = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    getParams: (state, action) => {
      state.allParams = action.payload;
    },
    removePost: (state, action) => {
      const newPosts = state.posts.filter(
        (post) => post._id !== action.payload
      );
      state.posts = newPosts;
    },
    statusReset: (state) => {
      state.status = false;
      state.error = null;
    },
    postsReset: (state) => {
      state.posts = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.status = false;
      })
      .addCase(getAllPosts.fulfilled, (state) => {
        state.status = true;
        state.firstLoad = true;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const postsAll = (state) => state.allPosts.posts;
export const allParams = (state) => state.allPosts.allParams;
export const postsStatus = (state) => state.allPosts.status;
export const error = (state) => state.allPosts.error;
export const firstLoad = (state) => state.allPosts.firstLoad;

export const { getPosts, statusReset, postsRese, getParams, removePost } =
  allPosts.actions;

export default allPosts.reducer;
