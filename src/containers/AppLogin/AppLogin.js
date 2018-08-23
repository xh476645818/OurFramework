/**
 * Created by xiaohe on 2018/6/28.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import {LoginName, LoginPassword, Button} from 'com/index.js';

import {
    APPLOGIN_NAME_THUNK,
    APPLOGIN_NAME_SAGA,
    APPLOGIN_PASSWORD_THUNK,
    APPLOGIN_PASSWORD_SAGA,
    APPLOGIN_BUTTON_THUNK,
    APPLOGIN_SAGA,
    APPLOGIN_BUTTON_SAGA,
    APPLOGIN_BUTTON_TO_SAGA,
    AppLoginButtonThunkDo,
    AppLoginButtonToSagaDo,
    actionCreate
} from 'action/index';

class AppLogin extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            password: ""
        }
    }

    componentWillReceiveProps() {
        console.log('componentWillUpdate', this.props.text)
        console.log(this.context)
    }

    render() {
        return (
            <div>
                <strong>账号admin 密码123456</strong>
                <div>
                    <strong>登录验证的异步使用了redux-thunk，很多逻辑在action里，拦截模拟用了mock</strong>
                    <br/>
                    账号
                    <LoginName key={'ThunkName'} handle={this.props.LoginNameThunk}/>
                    <br/>
                    密码
                    <LoginPassword key={'ThunkPassword'} handle={this.props.LoginPasswordThunk}/>
                    <br/>
                    <Button key={'ThunkButton'} handle={this.props.ThunkLogin.bind(this)}/>
                    <br/>
                    <p>thunk的登录{this.props.textA}</p>
                </div>
                <div>
                    <strong>登录验证的异步使用了redux-thunk，很多逻辑在saga和自身组件里，拦截模拟用了mock</strong>
                    <br/>
                    账号
                    <LoginName key={'SagaName'} handle={this.props.LoginNameSaga}/>
                    <br/>
                    密码
                    <LoginPassword key={'SagaPassword'} handle={this.props.LoginPasswordSaga}/>
                    <br/>
                    <Button key={'ThunkButton'} handle={this.props.SagaLogin.bind(this, this.context)}/>
                    <br/>
                    <p>saga的登录{this.props.textB}</p>
                </div>
            </div>
        )
    }
}

//判断内容是否为空
const format = (e) => {
    let name = e.name, password = e.password;
    if (name == '' || password == '') {
        return false
    }
    return e;
}
const switchResult = (e, callback, event) => {
    switch (e) {
        case false:
            alert('请输入正确内容')
            break;
        default:
            event(callback(e))
            break;
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        textA: state.AppLoginButtonThunk,
        textB: state.AppLoginButtonSaga
    }
)
const mapDispatchToProps = (dispatch, state) => (
    {
        LoginNameThunk: (e) => {
            dispatch(actionCreate(APPLOGIN_NAME_THUNK, e))
        },
        LoginPasswordThunk: (e) => {
            dispatch(actionCreate(APPLOGIN_PASSWORD_THUNK, e))
        },
        LoginNameSaga: (e) => {
            dispatch(actionCreate(APPLOGIN_NAME_SAGA, e))
        },
        LoginPasswordSaga: (e) => {
            dispatch(actionCreate(APPLOGIN_PASSWORD_SAGA, e))
        },
        ThunkLogin: () => {
            dispatch(AppLoginButtonThunkDo())
        },
        SagaLogin: (e) => {
            console.log(e.store.getState())
            let store = e.store.getState().AppLoginSaga;
            let result = format(store);
            switchResult(result, AppLoginButtonToSagaDo, dispatch)
        }
    });
AppLogin.contextTypes = {
    store: PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(AppLogin);
