import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import Loc_with_sijang from "../components/Sijang_info/Loc_with_sijang";
const Search_page = ({ props }) => {
  return (
    <div>
      <SearchBar />
      <Loc_with_sijang/>
      <BottomBar />
    </div>
  );
};

export default Search_page;
