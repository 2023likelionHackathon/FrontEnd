import React, { useState } from 'react';

const Join_Membership = () => {
  // 각 입력값을 저장할 상태(state) 정의
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  // 입력값이 변경될 때마다 상태(state)를 업데이트하는 핸들러 함수들
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Birthdate:
        <input type="text" value={birthdate} onChange={handleBirthdateChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
    </div>
  );
};

export default Join_Membership;
