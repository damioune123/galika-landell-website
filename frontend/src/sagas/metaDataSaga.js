import request from '../requests'
import { call, put, takeLatest, fork } from 'redux-saga/effects';
import {
    GET_META_DATA,
    getMetaDataSuccessAction,
    getMetaDataFailureAction,
} from "../actions";

function* watchGetMetaData() {
    yield takeLatest(GET_META_DATA, callGetMetaData);
}

function* callGetMetaData() {
    try {
        const response = yield call(request.getMetaData);
        yield put(getMetaDataSuccessAction(response));
    } catch(error) {
        yield put(getMetaDataFailureAction(error));
    }
}

export default function* metaDataSaga() {
    yield (fork(watchGetMetaData))
}
