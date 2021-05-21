import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from "../components/Counter"
import { decrease, increase } from '../modules/counter';


const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    return (
        <Counter 
            number={number} 
            onIncrease={() => dispatch(increase())}
            onDecrease={() => dispatch(decrease())}
        />
    );
};

export default CounterContainer;
// container component에서 action을 dispatch해야 한다면 이 Hook을 사용한다.