import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from "../components/Counter"
import { decrease, increase } from '../modules/counter';


const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    return <Counter number={number} />;
};

export default CounterContainer;
//useSelector Hook을 사용하영 connect함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.