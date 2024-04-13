import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRowsWithMissingValuesApi,
  uploadFileApi,
} from "../../api/dataset.api";

interface IngredientsState {
  data: {
    dataset: any[];
    imputed_dataset: any[];
    missing_percentage: any;
    total_missing_percentage: number;
    num_rows: number;
    num_columns: number;
  };
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: IngredientsState = {
  data: {
    dataset: [],
    imputed_dataset: [],
    missing_percentage: null,
    total_missing_percentage: 0,
    num_rows: 0,
    num_columns: 0,
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
    return data;
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
      });
  },
});

export default dataInfoSlice.reducer;