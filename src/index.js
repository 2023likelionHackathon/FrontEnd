import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login_page from "./pages/Login_page";
import Feed_page from "./pages/Feed_page";
import Main_page from "./pages/Main_page";
import Search_page from "./pages/Search_page";
import Join_page from "./pages/Join_page ";
import FindMyInfo_page from "./pages/FindMyInfo_page";
import Write_page from "./pages/Write_page";
import MarketDetail from "./pages/MarketDetail";
import Profile from "./pages/Profile";
import Comment_page from "./pages/Comment_page";
import { createStore } from "redux";
import reducer from "./store/Stored_info";
import { Provider } from "react-redux";
import StoreDetail from "./components/Sijang_info/StoreDetail";

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
    path: "/find_id",
    element: <FindMyInfo_page />,
  },
  {
    path: "/find_pwd",
    element: <FindMyInfo_page />,
  },
  {
    path: "/market/:marketId",
    element: <MarketDetail />,
  },
  {
    path: "/market/:marketId/store/:storeId", // 가게이름 불러와서 하게 만들기(임시임)
    element: <StoreDetail />,
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

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

