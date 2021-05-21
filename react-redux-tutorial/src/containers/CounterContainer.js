import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from "../components/Counter"
import { decrease, increase } from '../modules/counter';


const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateToProps = state => ({
    number: state.counter.number,
});

export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => //p.452 다양한 방식 확인 할 것
        bindActionCreators(
            {
                increase,
                decrease,
            },
            dispatch,
        ),
)(CounterContainer); 