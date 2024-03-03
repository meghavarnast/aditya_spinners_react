import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import HomePage from "./pages/homePage/homePage";

import ReportPage from "./pages/reportPage/reportPage";
import ProductionDetailPage from "./pages/productionDetailPage/productionDetailPage";
import RawMaterialPage from "./pages/rawMaterialPage/rawMaterialPage";
import SignUpPage from "./pages/signUpPage/signUpPage";
import AdminPage from "./pages/adminPage/adminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/report",
    element: <ReportPage />,
  },
  {
    path: "/admin",
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
