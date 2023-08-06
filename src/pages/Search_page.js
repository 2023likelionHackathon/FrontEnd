import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import "../css/Search.css";
import { useState } from "react";
const Search_page = ({ props }) => {
  const [posts, setPost] = useState([
    {
      postImage:
        "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/32cba5e4-4d70-488c-a246-1ff2bdff8094.jpg",
      location: "이히히",
      title: "금남시장",
    },
    {
      postImage:
        "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/32cba5e4-4d70-488c-a246-1ff2bdff8094.jpg",
      location: "유후훟",
      title: "뚝도청춘시장",
    },
  ]);
  // const sijangList = posts.map(sijang);
  return (
    <div>
      <SearchBar />
      <div className="locationBar">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="location1">광진구</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="location2">강북구</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="location3">성동구</span>
        </Link>
      </div>
      {/* <div className="sijangSelect"> */}
      {/* <div className="whatSijang"> {post.map((post) => (
              {posts.title}
          ))}</div>
      </div> */}
      {/* <div className="sijang">{sijangList}</div> */}
      <BottomBar />
    </div>
  );
};

export default Search_page;
