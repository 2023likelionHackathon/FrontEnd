import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import Ddukdo_info from "../components/Sijang_info/Ddukdo_info";
const Ddukdo = () => {
  return (
    <div>
      <SearchBar />
      <Ddukdo_info />
      <BottomBar index={"시장 검색"} />
    </div>
  );
};

export default Ddukdo;
