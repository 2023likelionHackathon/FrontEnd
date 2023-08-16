import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar";
import Profile_info from "../components/Profile_info";
import axios from "axios";
const Profile = () => {
  const [posts, setPosts] = useState();
  const [user, setUser] = useState();

  axios.defaults.withCredentials = true; // 전역 설정
  const getUserInfo = async () => {
    const resp = await axios.get("http://localhost:8080/user/profile");
    setPosts(resp.data.boardList);
    setUser(resp.data.user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div>
      <SearchBar />
      <Profile_info user={user} posts={posts} />
      <BottomBar index={"프로필"} />
    </div>
  );
};

export default Profile;
