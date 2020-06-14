import request from '../requests'
import { call, put, takeLatest, fork} from 'redux-saga/effects';
import {
    GET_REALTORS,
    getRealtorsFailureAction,
    getRealtorsSuccessAction,
} from "../actions/realtorActions";

function* watchGetRealtors() {
    yield takeLatest(GET_REALTORS, callGetRealtors);
}

function* callGetRealtors() {
    try {
        const response = yield call(request.getRealtors);
        yield put(getRealtorsSuccessAction(response));
    } catch(error) {
        yield put(getRealtorsFailureAction(error));
    }
}

export default function* realtorSaga() {
    yield (fork(watchGetRealtors))
}
