import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import Write_content from "../components/Write/Write_content";
const Write_page = () => {
  return (
    <div>
      <SearchBar />
      <Write_content/>
      <BottomBar />
    </div>
  );
};

export default Write_page;
