import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignInApi } from "../API/api";

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await SignInApi();
      dispatch(setInfo(response?.data));
    } catch (err) {
      console.log(err.response?.data?.error);
      return rejectWithValue(err.response?.data?.error);
    }
  }
);

const initialState = {
  user: {},
  status: "idle",
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.user = { ...action.payload };
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserInfo.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const userData = (state) => state.userInfo.user;
export const userDataStatus = (state) => state.userInfo.status;

export const { setInfo, resetUser } = userInfo.actions;

export default userInfo.reducer;
