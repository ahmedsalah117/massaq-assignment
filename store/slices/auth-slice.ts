import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";

import { axios } from "@/lib/axios";
import { User } from "@/types";

export type AuthSliceStateType = {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: AuthSliceStateType = {
  user: null,
  status: "idle"
};

export const fetchAuth = createAsyncThunk("auth/me", async (headers?: AxiosRequestConfig["headers"]) => {
  return await axios
    .get("/auth/me", {
      headers
    })
    .then(({ data }) => {
      return data;
    });
});

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMember(state, action) {
      state.user = action.payload;
      state.status = "succeeded";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "failed";
      });
  }
});

export default AuthSlice.reducer;
