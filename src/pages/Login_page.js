import React from "react";
import BottomBar from "../components/BottomBar";
import LoginForm from "../components/About_Login/LoginForm";
import SearchBar from "../components/SearchBar";
const Login_page = () => {
  return (
    <div>
      <SearchBar />
      <LoginForm />
      <BottomBar index={"프로필"} />
    </div>
  );
};

export default Login_page;
