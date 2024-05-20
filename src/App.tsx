import AppLayout from "./components/layout/AppLayout";
import UploadPage from "./pages/UploadPage/UploadPage";
import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { PreprocessingPage } from "./pages/PreprocessingPage/PreprocessingPage";
import { LinearRegressionPage } from "./pages/LinearRegression/LinearRegression";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ConfigProvider } from "antd";
import { TestingPage } from "./pages/TestingPage/TestingPage";
import { CrossValidationPage } from "./pages/CrossValidationPage/CrossValdationPage";
import { DecisionTreePage } from "./pages/DecisionTreePage/DecisionTreePage";
import { KnnClassificationPage } from "./pages/KnnClassificationPage/KnnClassificationPage";
import { DecisionTreeVisualisationPage } from "./pages/DecisionTreeVisualisationPage/DecisionTreeVisualisationPage";
import { KnnMixPage } from "./pages/KnnMixPage/KnnMixPage";
import { MultipleLinearRegressionPage } from "./pages/MultipleLinearRegressionPage/MultipleLinearRegressionPage";
import { KnnRegressionPage } from "./pages/KnnRegressionPage/KnnClassificationPage";
import { LinearRegression3DPage } from "./pages/LinearRegression/LinearRegression3D";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UploadPage />,
  },
  {
    path: "/app/",
    element: <AppLayout />,
    children: [
      {
        path: "preprocessing",
        element: <PreprocessingPage />,
      },
      {
        path: "2d-linear-regression",
        element: <LinearRegressionPage />,
      },
      {
        path: "3d-linear-regression",
        element: <LinearRegression3DPage />,
      },
      {
        path: "multiple_linear_regression",
        element: <MultipleLinearRegressionPage />,
      },
      {
        path: "crossValidation",
        element: <CrossValidationPage />,
      },
      {
        path: "DecisionTree",
        element: <DecisionTreePage />,
      },
      {
        path: "DecisionTreeVizualisation",
        element: <DecisionTreeVisualisationPage />,
      },
      {
        path: "KnnRegression",
        element: <KnnRegressionPage />,
      },
      {
        path: "KnnClassification",
        element: <KnnClassificationPage />,
      },
      {
        path: "KnnMix",
        element: <KnnMixPage />,
      },
      {
        path: "testing",
        element: <TestingPage />,
      },
    ],
  },
]);
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6047ed",
          fontFamily: "Roboto",
        },
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
}

export default App;
