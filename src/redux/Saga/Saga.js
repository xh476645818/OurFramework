/**
 * Created by xiaohe on 2018/6/20.
 */

import {delay} from 'redux-saga'
import {put, call, takeEvery, take, fork, all} from 'redux-saga/effects'

import {
    APPD_RESULT,
    APPLOGIN_SAGA,
    APPLOGIN_BUTTON_TO_SAGA,
    APPD_ASYN,
    APPD
} from 'action/index';

import axios from 'axios';

function* AppDSaga() {
    const todos = yield call(axios.get, "/MockTest");
    console.log(todos)
    yield put({type: APPD_RESULT, result: todos.data.result.AppD});
}

function* AppDSagaAsyn(e) {
    let todos = yield call(axios.get, "/MockTest");
    yield delay(1000)
    yield put({type: APPD_RESULT, result: todos.data.result.AppD});
}

function* LoginSaga(e) {
    let todos = yield call(axios.post, "/login", {
        'username': e.value.name,
        'password': e.value.password
    });
    let text;
    switch (todos.data.code) {
        case 1:
            text = '看来是成功了'+todos.data.result.userInfo.nickname;
            break;
        default:
            text = '肯定是失败了';
            break;
    }
    yield put({type: APPLOGIN_SAGA, result: text});
}

//观测方法
function* WatchSaga() {
    yield takeEvery(APPD, AppDSaga)
    yield takeEvery(APPD_ASYN, AppDSagaAsyn)
    yield takeEvery(APPLOGIN_BUTTON_TO_SAGA,LoginSaga)
}

//根方法
function* Saga() {
    yield all([
        WatchSaga()
    ])
}

export default Saga;