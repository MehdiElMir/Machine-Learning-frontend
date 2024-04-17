import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { linearRegression2DApi } from "../../api/regression.api";
import { notificationController } from "../../controllers/notificationController";

interface LinearRegressionState {
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: LinearRegressionState = {
  loading: "idle",
};

export const linearRegression2D: any = createAsyncThunk(
  "linearRegression/fetch2D",
  async (requestData: any) => {
    try {
      const response = await linearRegression2DApi(
        requestData,
        "/regression_linear_sckitlearn/"
      );
      return response;
    } catch (e) {
      notificationController.error({
        message: `${e}`,
      });
      throw e;
    }
  }
);

const linearRegressionSlice = createSlice({
  name: "linearRegression",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(linearRegression2D.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(linearRegression2D.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(linearRegression2D.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default linearRegressionSlice.reducer;
