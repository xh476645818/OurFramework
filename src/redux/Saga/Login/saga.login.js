import {put, call, takeEvery} from 'redux-saga/effects'
import {
    APPLOGIN_BUTTON_TO_SAGA,
    APPLOGIN_SAGA
} from 'action/index';

function* LoginSaga(e) {
    console.log('LoginSaga',e);
    let todos = yield call(axios.post, "/login", {
        'username': e.value.name,
        'password': e.value.password
    });
    let text;
    switch (todos.data.code) {
        case 1:
            text = '看来是成功了' + todos.data.result.userInfo.nickname;
            break;
        default:
            text = '肯定是失败了';
            break;
    }
    yield put({type: APPLOGIN_SAGA, result: text});
}

//观测方法
function* LoginWatchSaga() {
    yield takeEvery(APPLOGIN_BUTTON_TO_SAGA, LoginSaga)
}

export default LoginWatchSaga