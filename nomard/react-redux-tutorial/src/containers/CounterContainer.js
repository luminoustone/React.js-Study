import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from "../components/Counter"
import { decrease, increase } from '../modules/counter';


const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter 
            number={number} 
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default CounterContainer;
//성능 최적화를 하려면 useCallback으로 한번 감싼다.