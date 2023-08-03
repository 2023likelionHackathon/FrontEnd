import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/LoginForm.css";
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
    <div className="white-page">
      <div className="logoBar">
        <img src="pics/Logo.png"></img>
        <input
          type="search"
          value={search}
          onChange={handlePasswordChange}
          placeholder="       시장 또는 가계명을 검색해보세요"
        />
      </div>
      <hr />
      <div className="loginForm">
        <label>
          아이디
          <br />
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          비밀번호
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
      </div>

      <center>
        <button onClick={handleLogin}>로그인</button>
      </center>
      {/* Link 컴포넌트를 사용하여 회원가입 페이지로 이동 */}
      {/* <Link to="/signup">Sign Up</Link> */}
    </div>
  );
};

export default LoginForm;
