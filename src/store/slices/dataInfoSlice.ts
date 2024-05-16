import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRowsWithMissingValuesApi,
  deleteSelectedColumnsApi,
  imputateSelectedColumnsApi,
  uploadFileApi,
} from "../../api/dataset.api";
import { notificationController } from "../../controllers/notificationController";

interface DataInfoState {
  data: {
    dataset: any[];
    imputed_dataset: any[];
    missing_percentage: any;
    total_missing_percentage: number;
    num_rows: number;
    num_columns: number;
    numeric_columns_names: string[];
    categorical_columns_names: string[];
  };
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: DataInfoState = {
  data: {
    dataset: [],
    imputed_dataset: [],
    missing_percentage: null,
    total_missing_percentage: 0,
    num_rows: 0,
    num_columns: 0,
    numeric_columns_names: [],
    categorical_columns_names: []
  },
  loading: "idle",
};

export const uploadFile: any = createAsyncThunk(
  "dataInfo/uploadFile",
  async (file: any) => {
    const data = await uploadFileApi(file, "/process-csv/");
    return data;
  }
);

export const deletingRowsWithMissingValues: any = createAsyncThunk(
  "dataInfo/deletingRows",
  async (requestData: any) => {
    const data = await deleteRowsWithMissingValuesApi(
      requestData,
      "/delete_missing_row/"
    );
    notificationController.success({
      message: "Rows with missing values deleted successfully",
    });
    return data;
  }
);
export const deletingSelectedColumns: any = createAsyncThunk(
  "dataInfo/deletingColumns",
  async (requestData: any) => {
    const data = await deleteSelectedColumnsApi(
      requestData,
      "/delete_selected_columns/"
    );
    notificationController.success({
      message: "Column(s) deleted successfully",
    });
    return data;
  }
);

export const imputateSelectedColumns: any = createAsyncThunk(
  "dataInfo/imputateColumns",
  async (requestData: any) => {
    try {
      const data = await imputateSelectedColumnsApi(
        requestData,
        "/imputate_selected_column/"
      );
      notificationController.success({
        message: "Column imputated successfully",
      });
      return data;
    } catch (e) {
      notificationController.error({
        message: `${e} due to column's type. Try another Mode method`,
      });
      throw e;
    }
  }
);

const dataInfoSlice = createSlice({
  name: "dataInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(uploadFile.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deletingRowsWithMissingValues.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deletingRowsWithMissingValues.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(deletingRowsWithMissingValues.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deletingSelectedColumns.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deletingSelectedColumns.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(deletingSelectedColumns.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(imputateSelectedColumns.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(imputateSelectedColumns.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(imputateSelectedColumns.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default dataInfoSlice.reducer;
