import { Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Plotly from "react-plotly.js";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CrossValidationForm from "../../components/crossValidation/CrossValidationForm";
import DecisionTreeForm from "../../components/decisionTree/DecisionTreeForm";
import DecisionTreeVisualisationForm from "../../components/decisionTree/DecisionTreeVisualisationForm";

export const DecisionTreeVisualisationPage: React.FC = () => {
  const [image, setImage] = useState("");
  const { loading } = useSelector((state: RootState) => state.linearRegression);

  const isLoading: boolean =
    loading !== "idle" && loading !== "succeeded" && loading !== "failed";

  return (
    <Row gutter={16}>
      <DecisionTreeVisualisationForm setImage={setImage} />

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {image && <img src={image} alt="Decision Tree" />}
      </div>
    </Row>
  );
};
