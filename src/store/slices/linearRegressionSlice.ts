import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  crossValidationApi,
  decisionTreeApi,
  knnClassificationApi,
  knnRegressionApi,
  linearRegression2DApi,
} from "../../api/regression.api";
import { notificationController } from "../../controllers/notificationController";

interface LinearRegressionState {
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: LinearRegressionState = {
  loading: "idle",
};

export const linearRegression2D: any = createAsyncThunk(
  "regression/fetch2D",
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

export const decisionTree: any = createAsyncThunk(
  "regression/fetchDecisionTree",
  async (requestData: any) => {
    try {
      const response = await decisionTreeApi(requestData, "/decision_tree/");
      return response;
    } catch (e) {
      notificationController.error({
        message: `${e}`,
      });
      throw e;
    }
  }
);

export const crossValidation: any = createAsyncThunk(
  "regression/fetchCrossValidation",
  async (requestData: any) => {
    try {
      const response = await crossValidationApi(
        requestData,
        "/cross_validation/"
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

export const knnClassification: any = createAsyncThunk(
  "regression/fetchKnnClassification",
  async (requestData: any) => {
    try {
      const response = await knnClassificationApi(
        requestData,
        "/knn_classification/"
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

export const knnRegression: any = createAsyncThunk(
  "regression/fetchKnnRegression",
  async (requestData: any) => {
    try {
      const response = await knnRegressionApi(requestData, "/knn_regression/");
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
  name: "regression",
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
      })
      .addCase(crossValidation.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(crossValidation.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(crossValidation.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(decisionTree.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(decisionTree.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(decisionTree.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(knnClassification.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(knnClassification.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(knnClassification.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default linearRegressionSlice.reducer;
