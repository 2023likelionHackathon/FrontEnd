import React, { useState } from "react";
import styles from "../../css/Join_Membership.module.css";
import axios from "axios";
const Join_Membership = () => {
  const [formData, setFormData] = useState({
    userId: "",
    pw: "",
    pw_check: "",
    email: "",
    name: "",
    nickname: "",
    role: "",
    code: "",
    // name: '',
    // id: '',
    // pwd: '',
    // pwd_check: '',
    // nickname: '',
    // email: ''
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData, //이전값 복사 코드
      [name]: value, //새값 업데이트
    }));
    console.log(formData);
  };
  const handlePasswordCheck = () => {
    //비번 확인 비교 함수
    setPasswordMatch(formData.pwd === formData.pwd_check);
  };
  const handleDuplicateCheck = (field) => {
    //서버로 중복확인 요청 보내고 결과 받는 함수
    //예시로 true 나 false만  -> 로컬에서
    const isDuplicate = field === "id" ? false : true;
    return isDuplicate;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.pwd !== formData.pwd_check) {
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
          onClick={() => {
            const isDuplicate = handleDuplicateCheck("id");
            console.log("id Duplicated?:", isDuplicate);
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
          value={formData.pwd}
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
          name="pw_check"
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
          <p className={styles.error}>비밀번호가 일치하지 않습니다.</p>
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
          onClick={() => {
            const isDuplicate = handleDuplicateCheck("id");
            console.log("nickname Duplicated?:", isDuplicate);
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
