import React from 'react';

const KakaoLogin = () => {
    const REST_API_KEY = 'a70365b5c0824113b77af873d457df02';
    const REDIRECT_URI = 'http://localhost:3000/kakao/oauth';
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const KAKAOLOGIN = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    return (
        <React.Fragment>
            <button onClick={KAKAOLOGIN}>
                카카오로 로그인
            </button>
        </React.Fragment>
    );
};

export default KakaoLogin;