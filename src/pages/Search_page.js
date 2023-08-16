import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import MarketList from "../components/Sijang_info/MarketList";
const Search_page = ({ props }) => {
  return (
    <div>
      <SearchBar />
      <MarketList />
      <BottomBar index={"시장 검색"} />
    </div>
  );
};

export default Search_page;
