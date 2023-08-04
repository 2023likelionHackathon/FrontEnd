import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BottomBar from "./components/BottomBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join_Memebership from "./components/About_Login/Join_Memebership";
import Login_page from "./pages/Login_page";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/bottom",
    element: <BottomBar></BottomBar>,
  },
  {
    path: "/join",
    element: <Join_Memebership></Join_Memebership>,
  },
  {
    path: "/login",
    element: <Login_page></Login_page>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
