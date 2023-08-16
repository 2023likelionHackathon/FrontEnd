import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Sijang_detail2 from "../components/Sijang_info/Sijang_detail/Sijang_detail2";
import BottomBar from "../components/BottomBar";
import axios from "axios";

const Jumpo_show2 = () => {
  const [posts, setPosts] = useState();
  const [store, setStore] = useState();
  const getPostList = async () => {
    const resp = await axios.get("http://api.domarketdodo.shop/store/view/1");
    setPosts(resp.data.boardList); // posts에 data 할당
    setStore(resp.data.store);
    console.log("resp", resp.data);
  };

  useEffect(() => {
    getPostList(); // 1) feed 조회 함수 호출
  }, []);
  return (
    <div>
      <SearchBar />
      <Sijang_detail2 posts={posts} store={store} />
      <BottomBar index={"시장 검색"} />
    </div>
  );
};

export default Jumpo_show2;
