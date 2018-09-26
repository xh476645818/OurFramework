/**
 * Created by xiaohe on 2018/5/17.
 */
import * as Action from 'action/index';
import {thunk} from 'redux-thunk';
import {actionCreate} from 'action/index.js'

//action
//action创建函数
const AppBasynDo = (text) => dispatch => {
    axios.get("/AppB").then((response) => {
        console.log('APPB_ASYN', response)
        dispatch({
            type: Action.APPB_ASYN,
            'APPB_ASYN': response.data.result.AppB
        })
    })
}


const AppCdoAsync = (text) => dispatch => {
    setTimeout(() => {
        // dispatch(AppCdo(text))
        dispatch(actionCreate(Action.APPC,text))
    }, 1000)
}

//登录
const AppLoginButtonThunkDo = (e) => (dispatch, getState) => {
    console.log('AppLoginButtonThunk', getState().AppLoginThunk.name)
    let username = getState().AppLoginThunk.name;
    let password = getState().AppLoginThunk.password;
    if (username == '' || password == '') {
        alert('请输入正确内容');
        return
    }
    axios.post('/login', {
        'username': username,
        'password': password
    }).then((res) => {
        console.log(res);
        switch (res.data.code) {
            case 1:
                dispatch({
                    type: Action.APPLOGIN_BUTTON_THUNK,
                    text: '看来是成功了'+res.data.result.userInfo.nickname
                })
                break;
            default:
                dispatch({
                    type: Action.APPLOGIN_BUTTON_THUNK,
                    text: '肯定是失败了'
                })
                break;
        }
    })
}
const AppLoginButtonToSagaDo = (e) => (
    {
        type: Action.APPLOGIN_BUTTON_TO_SAGA,
        result: e
    }
)
export {
    AppBasynDo,
    AppCdoAsync,
    AppLoginButtonThunkDo,
    AppLoginButtonToSagaDo
};