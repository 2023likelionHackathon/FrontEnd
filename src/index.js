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
import Ddukdo from "./pages/Ddukdo";
import Gn from "./pages/Gn";
import Jumpo_show from "./pages/Jumpo_show";
import Jumpo_show2 from "./pages/Jumpo_show2";
import Jumpo_show3 from "./pages/Jumpo_show3";
import Jumpo_show4 from "./pages/Jumpo_show4";
import Jumpo_show5 from "./pages/Jumpo_show5";
import Jumpo_show6 from "./pages/Jumpo_show6";
import Jumpo_show7 from "./pages/Jumpo_show7";
import Jumpo_show8 from "./pages/Jumpo_show8";
import Jumpo_show9 from "./pages/Jumpo_show9";
import Jumpo_show10 from "./pages/Jumpo_show10";
import Jumpo_show11 from "./pages/Jumpo_show11";
import Jumpo_show12 from "./pages/Jumpo_show12";
import Jumpo_show13 from "./pages/Jumpo_show13";
import Jumpo_show14 from "./pages/Jumpo_show14";
import Jumpo_show15 from "./pages/Jumpo_show15";
import Jumpo_show16 from "./pages/Jumpo_show16";
import Jumpo_show17 from "./pages/Jumpo_show17";
import Profile from "./pages/Profile";
import Comment_page from "./pages/Comment_page";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed_page></Feed_page>,
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
    path: "/find_id",
    element: <FindMyInfo_page />,
  },
  {
    path: "/find_pwd",
    element: <FindMyInfo_page />,
  },
  {
    path: "/ddukdo",
    element: <Ddukdo />,
  },
  {
    path: "/gn",
    element: <Gn />,
  },
  {
    path: "/sijang_detail", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show />,
  },
  {
    path: "/sijang_detail2", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show2 />,
  },
  {
    path: "/sijang_detail3", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show3 />,
  },
  {
    path: "/sijang_detail4", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show4 />,
  },
  {
    path: "/sijang_detail5", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show5 />,
  },
  {
    path: "/sijang_detail6", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show6 />,
  },
  {
    path: "/sijang_detail7", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show7 />,
  },
  {
    path: "/sijang_detail8", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show8 />,
  },
  {
    path: "/sijang_detail9", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show9 />,
  },
  {
    path: "/sijang_detail10", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show10 />,
  },
  {
    path: "/sijang_detail11", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show11 />,
  },
  {
    path: "/sijang_detail12", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show12 />,
  },
  {
    path: "/sijang_detail13", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show13 />,
  },
  {
    path: "/sijang_detail14", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show14 />,
  },
  {
    path: "/sijang_detail15", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show15 />,
  },
  {
    path: "/sijang_detail16", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show16 />,
  },
  {
    path: "/sijang_detail17", // 가게이름 불러와서 하게 만들기(임시임)
    element: <Jumpo_show17 />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/comment/:boardId",
    element: <Comment_page />,
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
