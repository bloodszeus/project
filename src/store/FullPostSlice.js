import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostById } from "API/api";

export const getPostApi = createAsyncThunk(
  "post/getPostApi",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await getPostById(id);
      dispatch(getPost(response?.data || []));
    } catch (err) {
      return rejectWithValue(err.response.data?.error);
    }
  }
);

const initialState = {
  post: [],
  status: "idle",
  error: null,
};

export const postById = createSlice({
  name: "postById",
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.post.push(action.payload);
    },
    statusReset: (state) => {
      state.status = "idle";
      state.error = null;
    },
    stateReset: (state) => {
      state.post = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPostApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostApi.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(getPostApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const post = (state) => state.postById.post;
export const postStatus = (state) => state.postById.status;
export const postError = (state) => state.postById.error;

export const { getPost, statusReset, stateReset } = postById.actions;

export default postById.reducer;
