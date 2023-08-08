import React from "react";
import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar";
import Join_Membership from "../components/About_Login/Join_Memebership"
const Join_page = () => {
  return (
    <div>
      <SearchBar />
      <Join_Membership />
      <BottomBar />
    </div>
  );
};

export default Join_page;
