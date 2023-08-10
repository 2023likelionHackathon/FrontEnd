import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join_Membership from "./components/About_Login/Join_Membership";
import Login_page from "./pages/Login_page";
import Feed_page from "./pages/Feed_page";
import Main_page from "./pages/Main_page";
import Search_page from "./pages/Search_page";
import Join_page from "./pages/Join_page ";
import FindMyInfo_page from "./pages/FindMyInfo_page";
import SijangInfo_page from "./pages/SijangInfo_page";
import Write_page from "./pages/Write_page";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/feed",
    element: <Feed_page></Feed_page>,
  },
  {
    path: "/main",
    element: <Main_page></Main_page>,
  },
  {
    path: "/login",
    element: <Login_page></Login_page>,
  },
  {
    path: "/search",
    element: <Search_page></Search_page>,
  },
  {
    path: "/write",
    element: <Write_page></Write_page>,
  },
  {
    path: "/join",
    element: <Join_page></Join_page>,
  },
  {
    path: "/find",
    element: <FindMyInfo_page></FindMyInfo_page>,
  },
  {
    path: "/sijang",
    element: <SijangInfo_page></SijangInfo_page>,
  },
  {
    path:"/find_id",
    element: <FindMyInfo_page/>,
  },
  {
    path:"/find_pwd",
    element: <FindMyInfo_page/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
