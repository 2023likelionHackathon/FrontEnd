import React, { useState } from "react";
import "../../css/LoginForm.css";
import SearchBar from "../SearchBar";
const LoginForm = () => {
  // 아이디와 비밀번호를 저장할 상태(state) 정의
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setsearch] = useState("");

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
  };

  // 회원가입 버튼을 클릭했을 때 동작하는 함수
  const handleSignUp = () => {
    console.log("Go to sign up page");
    window.location.href = "/signup";
  };

  return (
    <div className="container">
      <div className="white_page">
        <img src="pics/NewLogo.png"></img>
      </div>
      <div className="idPassword">
        <label>
          <input
            className="id"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder=" 아이디"
          />
        </label>
        <label>
          <input
            className="password"
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
      <div>
        <input
          type="checkbox"
          className="autoLogin"
          placeholder="자동로그인"
        ></input>
        자동로그인
        <input type=""></input>
      </div>
    </div>
    // <div className="container">
    //   <div className="white_page">
    //     <div className="loginForm">
    //
    //       <br />
    //     </div>

    //   </div>
    // </div>
  );
};

export default LoginForm;
