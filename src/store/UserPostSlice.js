import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createNewPostAPI,
  deletePostApi,
  editPost,
  fetchPostsByUserId,
} from "API/api";

export const fetchNewPost = createAsyncThunk(
  "userPosts/fetchNewPost",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await createNewPostAPI({ data });
      dispatch(setPost(response.data));
      return response?.data;
    } catch (err) {
      console.log(err.response?.data);
      return rejectWithValue(
        err.response?.data?.error[0]?.message || err.response?.data?.error
      );
    }
  }
);

export const deletePostById = createAsyncThunk(
  "userPosts/deletePostById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await deletePostApi(id);
      dispatch(deletePost(id));
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const fetchPostByUserId = createAsyncThunk(
  "userPosts/fetchPostByUserId",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchPostsByUserId(id);
      dispatch(fetchPostByUser(response?.data.data));
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response);
    }
  }
);

export const updatePostById = createAsyncThunk(
  "userPosts/updatePostById",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await editPost({ userData });
      console.log(response);
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(
        err.response?.data?.error[0]?.message || err.response?.data?.error
      );
    }
  }
);

const initialState = {
  userPosts: [],
  status: "idle",
  error: null,
  postsStatus: "idle",
  postsError: null,
  editPostStatus: "idle",
  EditPostError: null,
};

const userPostSlice = createSlice({
  name: "userPosts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.userPosts.push(action.payload);
    },
    reset: (state) => {
      state.status = initialState.status;
      state.error = initialState.error;
      state.editPostStatus = initialState.staeditPostStatustus;
      state.EditPostError = initialState.EditPostError;
    },
    resetPost: (state) => {
      state.userPosts = [];
    },
    deletePost: (state, action) => {
      const newPosts = state.userPosts.filter(
        (post) => post._id !== action.payload
      );
      state.userPosts = newPosts;
    },
    fetchPostByUser: (state, action) => {
      state.userPosts.push(...action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchNewPost.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(fetchNewPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchPostByUserId.pending, (state) => {
        state.postsStatus = "loading";
      })
      .addCase(fetchPostByUserId.fulfilled, (state) => {
        state.postsStatus = "succeeded";
      })
      .addCase(fetchPostByUserId.rejected, (state, action) => {
        state.postsStatus = "failed";
        state.postsError = action.payload;
      })
      .addCase(updatePostById.pending, (state) => {
        state.editPostStatus = "loading";
      })
      .addCase(updatePostById.fulfilled, (state) => {
        state.editPostStatus = "succeeded";
      })
      .addCase(updatePostById.rejected, (state, action) => {
        state.editPostStatus = "failed";
        state.EditPostError = action.payload;
      });
  },
});

export const userPosts = (state) => state.userPosts.userPosts;
export const postsStatus = (state) => state.userPosts.status;
export const postsError = (state) => state.userPosts.error;
export const postsStatusById = (state) => state.userPosts.postsStatus;
export const postsErrorById = (state) => state.userPosts.postsError;
export const editStatus = (state) => state.userPosts.editPostStatus;
export const editError = (state) => state.userPosts.EditPostError;

export const { setPost, deletePost, reset, fetchPostByUser, resetPost } =
  userPostSlice.actions;

export default userPostSlice.reducer;
