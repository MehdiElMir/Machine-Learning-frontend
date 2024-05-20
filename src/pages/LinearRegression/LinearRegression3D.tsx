import { Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Plotly from "react-plotly.js";
import LinearRegressionForm from "../../components/linearRegression/LinearRegressionForm/LinearRegressionForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LoadingOutlined } from "@ant-design/icons";
import LinearRegression3DForm from "../../components/linearRegression/LinearRegressionForm/LinearRegression3DForm";

export const LinearRegression3DPage: React.FC = () => {
  const [plotData, setPlotData] = useState<any>(null);
  const { loading } = useSelector((state: RootState) => state.linearRegression);

  const isLoading: boolean =
    loading !== "idle" && loading !== "succeeded" && loading !== "failed";

  return (
    <Row justify={"center"}>
      <LinearRegression3DForm setPlotData={setPlotData} />

      <div>
        {plotData && <Plotly data={plotData.data} layout={plotData.layout} />}
      </div>
    </Row>
  );
};
