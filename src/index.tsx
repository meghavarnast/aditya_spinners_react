import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import HomePage from "./pages/homePage/homePage";

import ReportPage from "./pages/reportPage/reportPage";
import ProductionDetailPage from "./pages/productionDetailPage/productionDetailPage";
import RawMaterialPage from "./pages/rawMaterialPage/rawMaterialPage";
import SignUpPage from "./pages/signUpPage/signUpPage";
import AdminPage from "./pages/adminPage/adminPage";
import DispatchDetailPage from "./pages/dispatchDetailPage/dispatchDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/raw-material",
    element: <RawMaterialPage />,
  },
  {
    path: "/production-detail",
    element: <ProductionDetailPage />,
  },
  {
    path: "/dispatch-detail",
    element: <DispatchDetailPage />,
  },
  {
    path: "/report",
    element: <ReportPage />,
  },
  {
    path: "/admin-setting",
    element: <AdminPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
