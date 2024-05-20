import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  crossValidationApi,
  decisionTreeApi,
  decisionTreeVisualisationApi,
  knnClassificationApi,
  knnRegressionApi,
  knnRegressionMixApi,
  linearRegression2DApi,
  multipleLinearRegressionApi,
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

export const linearRegression3D: any = createAsyncThunk(
  "regression/fetch3D",
  async (requestData: any) => {
    try {
      const response = await linearRegression2DApi(
        requestData,
        "/regression_linear_3D/"
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

export const decisionTreeVisualisation: any = createAsyncThunk(
  "regression/fetchDecisionTreeVisualisation",
  async (requestData: any) => {
    try {
      const response = await decisionTreeVisualisationApi(
        requestData,
        "/decision_tree_visualisation/"
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

export const knnRegressionMix: any = createAsyncThunk(
  "regression/fetchKnnRegressionMix",
  async (requestData: any) => {
    try {
      const response = await knnRegressionMixApi(requestData, "/knn_mix/");
      return response;
    } catch (e) {
      notificationController.error({
        message: `${e}`,
      });
      throw e;
    }
  }
);
export const multipleLinearRegression: any = createAsyncThunk(
  "regression/fetchMultipleLinearRegression",
  async (requestData: any) => {
    try {
      const response = await multipleLinearRegressionApi(
        requestData,
        "/multiple_linear_regression/"
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
      .addCase(linearRegression3D.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(linearRegression3D.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(linearRegression3D.rejected, (state) => {
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
      })
      .addCase(knnRegressionMix.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(knnRegressionMix.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(knnRegressionMix.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(knnRegression.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(knnRegression.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(knnRegression.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(decisionTreeVisualisation.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(decisionTreeVisualisation.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(decisionTreeVisualisation.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default linearRegressionSlice.reducer;
