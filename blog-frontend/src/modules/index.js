import { combineReducers } from 'redux';
import auth, { authSaga } from "./auth";
import loading from './loading';
import user, { userSaga } from './user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
});

export function* rootSaga() {
    yield all([ authSaga(), userSaga() ]);
}

export default rootReducer;