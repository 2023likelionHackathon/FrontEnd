import React, { useState } from "react";
import "../../css/LoginForm.css";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  // 아이디와 비밀번호를 저장할 상태(state) 정의
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // 아이디와 비밀번호를 입력할 때마다 상태(state)를 업데이트하는 핸들러 함수들
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼을 클릭했을 때 동작하는 함수
  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    // 여기서 실제로 서버에 로그인 요청을 보내는 등의 로그인 처리를 할 수 있습니다.
    axios
      .post("http://localhost:8080/authorize", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
        alert(error.response.data.message);
      });
  };
  return (
    <div className="container">
      <div className="white_page">
        <img src="pics/NewLogo.png"></img>
      </div>
      <div className="idPassword">
        <label className="label_">
          <input
            className="input_"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder=" 아이디"
          />
        </label>
        <label>
          <input
            className="input_"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder=" 비밀번호"
          />
        </label>
        <button className="Button" onClick={handleLogin}>
          로그인
        </button>
      </div>
      <div className="find_info">
        <div className="join_member">
          <Link to="/join" className="join_link">
            회원가입
          </Link>
        </div>
        <div className="find">
          <Link to="/find_id" className="find__id">
            아이디 찾기
          </Link>{" "}
          |{" "}
          <Link to="/find_id" className="find__pwd">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
