import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignInApi, updateUserData } from "../API/api";

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

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (newData, { dispatch, rejectWithValue }) => {
    const { userId, name, extra_details, skills, profession, details } =
      newData;
    try {
      const response = await updateUserData(
        userId,
        name,
        extra_details,
        skills,
        profession,
        details
      );
      dispatch(resetUser());
      dispatch(setInfo(response?.data));
      return response.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  user: {},
  status: "idle",
  updateStatus: "idle",
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
    resetStatus: (state) => {
      state.updateStatus = "idle";
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
    builder
      .addCase(updateUserInfo.pending, (state) => {
        state.updateStatus = "loading";
      })
      .addCase(updateUserInfo.fulfilled, (state) => {
        state.updateStatus = "success";
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const userData = (state) => state.userInfo.user;
export const userDataStatus = (state) => state.userInfo.status;
export const updatedUserDataStatus = (state) => state.userInfo.updateStatus;

export const { setInfo, resetUser, editUser, resetStatus } = userInfo.actions;

export default userInfo.reducer;
