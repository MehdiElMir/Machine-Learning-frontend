import { Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Plotly from "react-plotly.js";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CrossValidationForm from "../../components/crossValidation/CrossValidationForm";
import DecisionTreeForm from "../../components/decisionTree/DecisionTreeForm";

export const DecisionTreePage: React.FC = () => {
  const [plotData, setPlotData] = useState<any>(null);
  const { loading } = useSelector((state: RootState) => state.linearRegression);

  const isLoading: boolean =
    loading !== "idle" && loading !== "succeeded" && loading !== "failed";

  return (
    <Row justify={"center"}>
      <DecisionTreeForm setPlotData={setPlotData} />

      <div>
        {plotData && <Plotly data={plotData.data} layout={plotData.layout} />}
      </div>
    </Row>
  );
};
