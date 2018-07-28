/**
 * Created by xiaohe on 2018/5/16.
 */
import * as Action from "../Action/action.type.js";

//thunk方式时，name，pwd，的监听方法，特意做的区分
const AppLoginThunk = (state = {"name": "", "password": ""}, action) => {
    switch (action.type) {
        case Action.AppLoginNameThunk:
            state.name = action.name
            return state
            break;
        case Action.AppLoginPasswordThunk:
            state.password = action.password
            return state
            break;
        default:
            return state;
    }

};
//saga方式时，name，pwd，的监听方法，特意做的区分
const AppLoginSaga = (state = {"name": "", "password": ""}, action) => {
    switch (action.type) {
        case Action.AppLoginNameSaga:
            state.name = action.name
            return state
            break;
        case Action.AppLoginPasswordSaga:
            state.password = action.password
            return state
            break;
        default:
            return state;
    }

};
//thunk时候监听登陆按钮
const AppLoginButtonThunk = (state = "", action) => {
    switch (action.type) {
        case Action.AppLoginButtonThunk:
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
        case Action.AppLoginSaga:
            state = action.result
            return state;
            break
        default:
            return state;
            break;
    }
}
export {AppLoginThunk, AppLoginButtonThunk,AppLoginSaga,AppLoginButtonSaga};