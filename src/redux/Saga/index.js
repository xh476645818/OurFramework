import AppDWatchSaga from './AppD/saga.appD';
import LoginWatchSaga from './Login/saga.login';
import {all} from 'redux-saga/effects'
function * Saga() {
    yield all([
        AppDWatchSaga(),
        LoginWatchSaga()
    ])
}
export default Saga;