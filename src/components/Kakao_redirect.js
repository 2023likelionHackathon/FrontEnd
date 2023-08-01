import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../redux/user'; // 경로를 적절하게 수정
import Spinner from './Spinner';
import axios from 'axios'; // axios 라이브러리를 import

const Kakao_redirect = (props) => {
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get('code');

  // 백엔드 서버로 인증 코드를 전달하여 인증 처리를 요청하는 비동기 함수
  const Hand_over = async () => {
    try {
      // 백엔드 서버의 API 엔드포인트 주소와 인증 코드를 전달하여 요청
      const result = await axios.get(
        `${process.env.REACT_APP_BACK_LOCALHOST_URL}/api/v1/oauth2/authorization/kakao?code=${code}`
      );

      // 인증 처리가 완료되었다고 가정하고, 사용자 정보를 리덕스 스토어에 저장
      dispatch(userActions.setUser(result.data));
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 백엔드 서버에 인증 처리 요청
    Hand_over();
  }, []);

  return <Spinner />; // 인증 처리가 완료되기 전에는 스피너를 표시
};

export default Kakao_redirect;
