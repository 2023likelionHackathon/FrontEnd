import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import MarketDetail from "../components/Sijang_info/MarketDetail";
const Ddukdo = () => {
  return (
    <div>
      <SearchBar />
      <MarketDetail />
      <BottomBar index={"시장 검색"} />
    </div>
  );
};

export default Ddukdo;
