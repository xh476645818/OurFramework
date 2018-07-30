/**
 * Created by xiaohe on 2018/5/17.
 */
import * as Action from 'action/index';
import {thunk} from 'redux-thunk';
import axios from 'axios';

//action
//action创建函数
const AppBdo = (text) => ({
    type: Action.AppB,
    text
})

const AppBasynDo = (text) => dispatch => {
    axios.get("/a").then((response) => {
        console.log('AppBasyn', response)
        dispatch({
            type: Action.AppBasyn,
            'AppBasyn': response.data.AppB
        })
    })

}

const AppCdo = (text) => (
    console.log('Action:Action.AppC', Action.AppC),
        {
            type: Action.AppC,
            text
        }
);
const AppDdo = () => (
    console.log('输出的action', Action.AppD),
        {
            type: Action.AppD
        }
);
const AppDdoAsyn = (e) => (
    console.log('输出的action', Action.AppDasyn),
        {
            type: Action.AppDasyn
        }
);
const AppDdoResult = (e) => (
    console.log('输出的action', Action.AppDasyn),
        {
            type: Action.AppDasyn,
            e
        }
);
const AppCdoAsync = (text) => dispatch => {
    setTimeout(() => {
        dispatch(AppCdo(text))
    }, 1000)
}
const AppBclearDo = (e) => ({
    type: Action.AppBclear
})
const AppCclearDo = (e) => (
    console.log('Action:AppCclear', '清除'),
        {
            type: Action.AppCclear
        })

//登录
const AppLoginNameThunkDo = (e) => (
    {
        type: Action.AppLoginNameThunk,
        name: e
    });
const AppLoginPasswordThunkDo = (e) => (
    {
        type: Action.AppLoginPasswordThunk,
        password: e
    })
const AppLoginNameSagaDo = (e) => (
    {
        type: Action.AppLoginNameSaga,
        name: e
    });
const AppLoginPasswordSagaDo = (e) => (
    {
        type: Action.AppLoginPasswordSaga,
        password: e
    })
const AppLoginButtonThunkDo = (e) => (dispatch, getState) => {
    console.log('AppLoginButtonThunk', getState().AppLoginThunk.name)
    let name = getState().AppLoginThunk.name;
    let password = getState().AppLoginThunk.password;
    if (name==''||password=='') {
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
                    type: Action.AppLoginButtonThunk,
                    text: '看来是成功了'
                })
                break;
            default:
                dispatch({
                    type: Action.AppLoginButtonThunk,
                    text: '肯定是失败了'
                })
                break;
        }
    })
}
const AppLoginButtonToSagaDo = (e) => (
    {
        type: Action.AppLoginButtonToSaga,
        result: e
    }
)
export {
    AppBdo,
    AppBasynDo,
    AppCdo,
    AppDdo,
    AppBclearDo,
    AppCclearDo,
    AppCdoAsync,
    AppDdoAsyn,
    AppDdoResult,
    AppLoginNameThunkDo,
    AppLoginNameSagaDo,
    AppLoginPasswordThunkDo,
    AppLoginPasswordSagaDo,
    AppLoginButtonThunkDo,
    AppLoginButtonToSagaDo
};