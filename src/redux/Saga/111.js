import {all} from 'redux-saga/effects'
import {LoginWatchSaga} from './Login/saga.login'

function * Saga() {
    yield all([
        LoginWatchSaga
    ])
}
export default Saga;