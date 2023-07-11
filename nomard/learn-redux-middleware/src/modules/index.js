import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import { all } from 'redux-saga/effects';
import sample, { sampleSaga } from './sample';
import loading from './loading';

const rootReducer = combineReducers({
    counter,
    sample,
    loading
})

export function* rootSaga(){
    yield all([ counterSaga(), sampleSaga() ]);
}

export default rootReducer;