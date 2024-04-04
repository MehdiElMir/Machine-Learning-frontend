import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import AppLayout from "./components/layout/AppLayout";
import { PreprocessingPage } from "./pages/PreprocessingPage/PreprocessingPage";
import { LinearRegressionPage } from "./pages/LinearRegression/LinearRegression";

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
        path: "linear-regression",
        element: <LinearRegressionPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
