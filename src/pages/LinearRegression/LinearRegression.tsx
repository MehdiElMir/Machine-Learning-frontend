import { Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Plotly from "react-plotly.js";
import LinearRegressionForm from "../../components/linearRegression/LinearRegressionForm/LinearRegression";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LoadingOutlined } from "@ant-design/icons";

export const LinearRegressionPage: React.FC = () => {
  const [plotData, setPlotData] = useState<any>(null);
  const { loading } = useSelector((state: RootState) => state.linearRegression);

  const isLoading: boolean =
    loading !== "idle" && loading !== "succeeded" && loading !== "failed";

  return (
    <Row justify={"center"}>
      <LinearRegressionForm setPlotData={setPlotData} />

      <div>
        {plotData && <Plotly data={plotData.data} layout={plotData.layout} />}
      </div>
    </Row>
  );
};
