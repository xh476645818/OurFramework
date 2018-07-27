/**
 * Created by xiaohe on 2018/6/20.
 */

import {delay} from 'redux-saga'
import {put, call, takeEvery, take, fork, all} from 'redux-saga/effects'

import * as Action from '../Action/action.type.js';
import axios from 'axios';

function* AppDSaga() {
    console.log('AppDSaga')
    const todos = yield call(axios.get, "/a");
    yield put({type: Action.AppDresult, result: todos});
}

function* AppDSagaAsyn(e) {
    console.log('AppDSagaAsyn', e)
    let todos = yield call(axios.get, "/a");
    yield delay(1000)
    yield put({type: Action.AppDresult, result: todos});
}

function* LoginSaga(e) {
    console.log(e)
    let todos = yield call(axios.post, "/login", {
        'name': e.result.name,
        'password': e.result.password
    });
    console.log(222222222, todos.data);
    let text;
    switch (todos.data.success) {
        case true || 'true':
            text = '看来是成功了';
            break;
        default:
            text = '肯定是失败了';
            break;
    }
    yield put({type: Action.AppLoginSaga, result: text});
}

//观测方法
function* WatchSaga() {
    yield takeEvery(Action.AppD, AppDSaga)
    yield takeEvery(Action.AppDasyn, AppDSagaAsyn)
    yield takeEvery(Action.AppLoginButtonToSaga,LoginSaga)
}

//根方法
function* Saga() {
    yield all([
        WatchSaga()
    ])
}

export default Saga;