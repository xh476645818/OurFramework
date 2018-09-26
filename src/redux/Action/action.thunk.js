/**
 * Created by xiaohe on 2018/5/17.
 */
import * as Action from 'action/index';
import {thunk} from 'redux-thunk';
import axios from 'axios';
import {actionCreate} from 'action/index.js'

//action
//action创建函数
const AppBasynDo = (text) => dispatch => {
    axios.get("/a").then((response) => {
        console.log('APPB_ASYN', response)
        dispatch({
            type: Action.APPB_ASYN,
            'APPB_ASYN': response.data.AppB
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
    let name = getState().AppLoginThunk.name;
    let password = getState().AppLoginThunk.password;
    if (name == '' || password == '') {
        alert('请输入正确内容');
        return
    }
    axios.post('/login', {
        'name': name,
        'password': password
    }).then((res) => {
        console.log(res.data.success);
        switch (res.data.success) {
            case true || 'true':
                dispatch({
                    type: Action.APPLOGIN_BUTTON_THUNK,
                    text: '看来是成功了'
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

export {
    AppBasynDo,
    AppCdoAsync,
    AppLoginButtonThunkDo
};