import React, { useState } from "react";
import styles from "../../css/Join_Membership.module.css";
import axios from "axios";
import { Height } from "@mui/icons-material";
const Join_Membership = () => {
  const [formData, setFormData] = useState({
    userId: "",
    pw: "",
    pwd_check: "",
    email: "",
    name: "",
    nickname: "",
    role: "",
    code: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData, //이전값 복사 코드
      [name]: value, //새값 업데이트
    }));
  };
  const handlePasswordCheck = () => {
    //비번 확인 비교 함수
    console.log("비교:", formData.pw === formData.pwd_check);
    if (formData.pw === formData.pwd_check) {
      setPasswordMatch(true);
    }
    //setPasswordMatch(formData.pw === formData.pwd_check);
    console.log("pwd", formData.pw);
    console.log("pwd_check", formData.pwd_check);
    console.log(passwordMatch);
  };
  const handleDuplicateCheckId = async (checkValue) => {
    //서버로 중복확인 요청 보내고 결과 받는 함수
    //예시로 true 나 false만  -> 로컬에서
    axios
      .get(`http://api.domarketdodo.shop/user/userId/${checkValue}/exists`)
      .then((res) => {
        console.log("res", res);
        alert("사용 가능한 아이디 입니다!");
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
        alert(error.response.data.message);
      });
  };
  const handleDuplicateCheckNickname = async (checkValue) => {
    //서버로 중복확인 요청 보내고 결과 받는 함수
    //예시로 true 나 false만  -> 로컬에서
    axios
      .get(`http://api.domarketdodo.shop/user/nickname/${checkValue}/exists`)
      .then((res) => {
        console.log("res", res);
        alert("사용 가능한 닉네임 입니다!");
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
        alert(error.response.data.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(!passwordMatch);
    if (passwordMatch) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("Form Data:", formData);
    axios
      .post("http://api.domarketdodo.shop/user/join", {
        userId: formData.userId,
        pw: formData.pw,
        email: formData.email,
        name: formData.name,
        nickname: formData.nickname,
        role: formData.role,
        code: formData.code,
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
        alert(error.response.data.message);
      });
    document.location.href = "/";
  };
  return (
    <div className={styles.container}>
      <div className={styles.margin_div}></div>
      <div className={styles.field}>
        <input
          type="text"
          name="name"
          autoComplete="off"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <label for="name" className={styles.label_wrapper}>
          <span className={styles.label_text}>이름</span>
        </label>
      </div>
      <div className={styles.field}>
        <input
          type="text"
          name="userId"
          autoComplete="off"
          required
          value={formData.userId}
          onChange={handleInputChange}
        />
        <label for="userId" className={styles.label_wrapper}>
          <span className={styles.label_text}>아이디</span>
        </label>

        <button
          className={styles.duplicate}
          onClick={(e) => {
            handleDuplicateCheckId(formData.userId);
          }}
        >
          중복확인
        </button>
      </div>
      <div className={styles.field}>
        <input
          type="password"
          name="pw"
          autoComplete="off"
          required
          value={formData.pw}
          onChange={(event) => {
            handleInputChange(event);
            handlePasswordCheck();
          }}
        />
        <label for="pw" className={styles.label_wrapper}>
          <span className={styles.label_text}>비밀번호</span>
        </label>
      </div>
      <div className={styles.field}>
        <input
          type="password"
          name="pwd_check"
          autoComplete="off"
          required
          value={formData.pwd_check}
          onChange={handleInputChange}
          onBlur={handlePasswordCheck}
        />
        <label for="pw_check" className={styles.label_wrapper}>
          <span className={styles.label_text}>비밀번호 확인</span>
        </label>
        {!passwordMatch && (
          <p className={styles.error__}>비밀번호가 일치하지 않습니다.</p>
        )}
      </div>
      <div className={styles.field}>
        <input
          type="text"
          name="nickname"
          autoComplete="off"
          required
          value={formData.nickname}
          onChange={handleInputChange}
        />
        <label for="nickname" className={styles.label_wrapper}>
          <span className={styles.label_text}>닉네임</span>
        </label>
        <button
          className={styles.duplicate}
          onClick={(e) => {
            handleDuplicateCheckNickname(formData.nickname);
          }}
        >
          중복확인
        </button>
      </div>
      <div className={styles.field}>
        <input
          type="text"
          name="email"
          autoComplete="off"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <label for="email" className={styles.label_wrapper}>
          <span className={styles.label_text}>이메일</span>
        </label>
      </div>
      <div className={styles.role_field}>
        <label className={styles.radioButtonLabel}>
          <input
            type="radio"
            name="role"
            value="USER"
            checked={formData.role === "USER"}
            onChange={handleInputChange}
          />
          일반 사용자
        </label>
        <label className={styles.radioButtonLabel}>
          <input
            type="radio"
            name="role"
            value="MERCHANT"
            checked={formData.role === "MERCHANT"}
            onChange={handleInputChange}
          />
          사장님
        </label>
      </div>
      {formData.role === "MERCHANT" && (
        <div className={styles.field}>
          <input
            type="text"
            name="code"
            autoComplete="off"
            required
            value={formData.code}
            onChange={handleInputChange}
            style={{
              paddingTop: "15px",
              Height: "40px",
            }}
          />
          <label for="code" className={styles.label_wrapper}>
            <span className={styles.label_text}>사장님 코드</span>
          </label>
        </div>
      )}
      <div>
        <button className={styles.btn} onClick={handleSubmit}>
          회원가입
        </button>
        <div className={styles.emptySpace}></div>
      </div>
    </div>
  );
};

export default Join_Membership;
