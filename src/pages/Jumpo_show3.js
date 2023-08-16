import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sijang_detail3 from "../components/Sijang_info/Sijang_detail/Sijang_detail3";
import BottomBar from "../components/BottomBar";
import axios from "axios";

const Jumpo_show3 = () => {
  const [posts, setPosts] = useState();
  const [store, setStore] = useState();
  const getPostList = async () => {
    const resp = await axios.get("http://api.domarketdodo.shop/store/view/2");
    setPosts(resp.data.boardList); // posts에 data 할당
    setStore(resp.data.store);
    console.log("resp", resp.data);
  };
  return (
    <div>
      <SearchBar />
      <Sijang_detail3 posts={posts} store={store} />
      <BottomBar />
    </div>
  );
};

export default Jumpo_show3;
