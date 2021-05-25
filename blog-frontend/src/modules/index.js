import { combineReducers } from 'redux';
import auth from "./auth";
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    loading
});

export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;