import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리엑트 라우터 기초를 실슬해 보는 에제 프로젝트이다......</p>
            {showDetail &&<p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;