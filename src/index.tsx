import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import AppLayout from "./components/layout/AppLayout";
import { PreprocessingPage } from "./pages/PreprocessingPage/PreprocessingPage";
import { LinearRegressionPage } from "./pages/LinearRegression/LinearRegression";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
