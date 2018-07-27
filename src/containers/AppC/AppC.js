/**
 * Created by xiaohe on 2018/6/4.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppCdo,AppCclear,AppCdoAsync} from '../../Redux/Action/action.js'
import Input from "../../component/Input/InputRedux.js"
import Clear from "../../component/Clear/Clear.js"
import Result from "../../component/Result/Result.js"

var AppC = ({text, InputEvent,InputEventAsync, clearEvent}) => (
    <div>
        <strong>父组件是无状态组件，父组件与store链接，采用redux，并采用redux-thunk进行异步</strong>
        <br/>
        同步的
        <Input handle={InputEvent}/>
        <br/>
        异步的
        <Input handle={InputEventAsync}/>
        <Result text={text}/>
        <Clear text={text} handle={clearEvent}/>
    </div>
)

const appCdo = (e, dispatch) => {
    switch (e.keyCode) {
        case 13 || "13":
            dispatch(AppCdo(e.target.value))
            break;
        default:
            break;
    }
}
const appCdoAsync = (e, dispatch) => {
    switch (e.keyCode) {
        case 13 || "13":
            dispatch(AppCdoAsync(e.target.value))
            break;
        default:
            break;
    }
}
const appCclear = (e, dispatch) => {
    dispatch(AppCclear())
}
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        text: state.AppC
    }
}

const mapDispatchToProps = (dispatch, ownProps) => (
        {
            InputEvent: (text) => (appCdo(text, dispatch)),
            InputEventAsync: (text) => (appCdoAsync(text, dispatch)),
            clearEvent: (e) => (appCclear(e,dispatch))
        }
    );
export default connect(mapStateToProps, mapDispatchToProps)(AppC);