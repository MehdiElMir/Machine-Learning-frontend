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
