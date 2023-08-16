import React from "react";
import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar";
import Join_Membership from "../components/About_Login/Join_Membership";
const Join_page = () => {
  return (
    <div>
      <SearchBar />
      <Join_Membership />
      <BottomBar index={"프로필"} />
    </div>
  );
};

export default Join_page;
