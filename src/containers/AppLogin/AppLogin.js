/**
 * Created by xiaohe on 2018/6/28.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import LoginName from '../../component/LoginName/LoginName'
import LoginPassword from '../../component/LoginPassword/LoginPassword'
import Button from '../../component/Button/Button'

import {AppLoginNameThunk, AppLoginPasswordThunk,AppLoginNameSaga,AppLoginPasswordSaga, AppLoginButtonThunk, AppLoginButtonToSaga} from '../../Redux/Action/action';

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
            dispatch(AppLoginNameThunk(e))
        },
        LoginPasswordThunk: (e) => {
            dispatch(AppLoginPasswordThunk(e))
        },
        LoginNameSaga: (e) => {
            dispatch(AppLoginNameSaga(e))
        },
        LoginPasswordSaga: (e) => {
            dispatch(AppLoginPasswordSaga(e))
        },
        ThunkLogin: () => {
            dispatch(AppLoginButtonThunk())
        },
        SagaLogin: (e) => {
            console.log(e.store.getState())
            let store = e.store.getState().AppLoginSaga;
            let result = format(store);
            switchResult(result, AppLoginButtonToSaga, dispatch)
        }
    });
AppLogin.contextTypes = {
    store: PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(AppLogin);
