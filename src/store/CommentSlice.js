import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  commentLike,
  deleteCommentReq,
  fetchComments,
  patchCommentText,
  postCommentApi,
} from "API/api";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (postId, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetchComments(postId);
      dispatch(getPostComments(response.data));
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const likeToComment = createAsyncThunk(
  "comments/likeToComment",
  async (commentId) => {
    try {
      await commentLike(commentId);
    } catch (err) {
      console.log(err.response);
    }
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async (allData, { dispatch }) => {
    const response = await postCommentApi({ allData });
    dispatch(addComment(response.data));
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId, { dispatch }) => {
    await deleteCommentReq(commentId);
    dispatch(delComment(commentId));
  }
);

export const upadateCommentText = createAsyncThunk(
  "comments/updateCommentText",
  async (newData) => {
    try {
      await patchCommentText({ newData });
    } catch (err) {
      console.log(err.response);
    }
  }
);

const initialState = {
  comments: [],
  status: "idle",
  error: null,
};

export const postComments = createSlice({
  name: "postComment",
  initialState,
  reducers: {
    getPostComments: (state, action) => {
      state.comments.push(...action.payload);
    },
    resetComment: (state) => {
      state.comments = [];
      state.status = "idle";
      state.error = null;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    delComment: (state, action) => {
      const newComments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
      state.comments = newComments;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComments.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(getComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const commenstData = (state) => state.comments.comments;
export const commentsStatus = (state) => state.comments.status;
export const commentsError = (state) => state.comments.error;

export const { resetComment, getPostComments, addComment, delComment } =
  postComments.actions;

export default postComments.reducer;
