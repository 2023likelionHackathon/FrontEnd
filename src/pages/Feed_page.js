import React from "react";
import Feed_main from "../components/Feed/Feed_main";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import Timeline from "../components/Feed/timeline/Timeline";
import axios from "axios";
const Feed_page = () => {
  return (
    <div>
      {/* async function getData() {
      try {
        //응답 성공
        const response = await axios.get('http://54.180.53.205/board/viewAll',{
          params:{
            //url 뒤에 붙는 param id값
            id: 12345
          }
        });
        console.log(response);
      } catch (error) {
        //응답 실패
        console.error(error);
      }
    } */}

      <SearchBar />
      <Timeline />
      <BottomBar />
    </div>
  );
};

export default Feed_page;
