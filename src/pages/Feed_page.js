import React, { useEffect, useState } from "react";
import Feed_main from "../components/Feed/Feed_main";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import Timeline from "../components/Feed/timeline/Timeline";
import axios from "axios";
const Feed_page = () => {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState("");
  const getPostList = async () => {
    const resp = await axios.get("http://api.domarketdodo.shop/board/viewAll", {
      withCredentials: true,
    });
    setPosts(resp.data); // posts에 data 할당
    console.log("resp", resp.data);
  };

  useEffect(() => {
    getPostList(); // 1) feed 조회 함수 호출
  }, []);
  return (
    <div>
      <SearchBar isSearch search={search} setSearch={setSearch}/>
      <Timeline posts={posts?.filter(post => post.storeName.indexOf(search) !== -1)} />
      <BottomBar />
    </div>
  );
};

export default Feed_page;
