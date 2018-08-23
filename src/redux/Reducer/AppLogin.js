/**
 * Created by xiaohe on 2018/5/16.
 */
import {
    APPLOGIN_NAME_THUNK,
    APPLOGIN_NAME_SAGA,
    APPLOGIN_PASSWORD_THUNK,
    APPLOGIN_PASSWORD_SAGA,
    APPLOGIN_BUTTON_THUNK,
    APPLOGIN_SAGA,
    APPLOGIN_BUTTON_SAGA,
    APPLOGIN_BUTTON_TO_SAGA,
} from 'action/index'

//thunk方式时，name，pwd，的监听方法，特意做的区分
const AppLoginThunk = (state = {"name": "", "password": ""}, action) => {
    switch (action.type) {
        case APPLOGIN_NAME_THUNK:
            state.name = action.value
            return state
            break;
        case APPLOGIN_PASSWORD_THUNK:
            state.password = action.value
            return state
            break;
        default:
            return state;
    }

};
//saga方式时，name，pwd，的监听方法，特意做的区分
const AppLoginSaga = (state = {"name": "", "password": ""}, action) => {
    switch (action.type) {
        case APPLOGIN_NAME_SAGA:
            state.name = action.value
            return state
            break;
        case APPLOGIN_PASSWORD_SAGA:
            state.password = action.value
            return state
            break;
        default:
            return state;
    }

};
//thunk时候监听登陆按钮
const AppLoginButtonThunk = (state = "", action) => {
    switch (action.type) {
        case APPLOGIN_BUTTON_THUNK:
            state = action.text;
            return state;
            break
        default:
            return state;
            break;
    }
}
//Saga，时候监听登陆按钮从saga内推过来的结果
const AppLoginButtonSaga = (state = "", action) => {
    switch (action.type) {
        case APPLOGIN_SAGA:
            state = action.result
            return state;
            break
        default:
            return state;
            break;
    }
}
export {AppLoginThunk, AppLoginButtonThunk,AppLoginSaga,AppLoginButtonSaga};