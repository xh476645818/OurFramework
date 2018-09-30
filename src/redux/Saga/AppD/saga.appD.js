import {delay} from 'redux-saga'
import {put, call, takeEvery, all} from 'redux-saga/effects'

import {
    APPD_RESULT,
    APPLOGIN_SAGA,
    APPLOGIN_BUTTON_TO_SAGA,
    APPD_ASYN,
    APPD
} from 'action/index';

function* AppDSaga() {
    const result = yield call(axios.get, "/MockTest")
    yield put({type: APPD_RESULT, result: result.data.result.AppD})
}

function* AppDSagaAsyn() {
    const result = yield call(axios.get, "/MockTest")
    yield delay(1000);
    yield put({type: APPD_RESULT, result: result.data.result.AppD})
}

function* AppDWatchSaga() {
    yield takeEvery(APPD, AppDSaga);
    yield takeEvery(APPD_ASYN, AppDSagaAsyn);
}

export default AppDWatchSaga;