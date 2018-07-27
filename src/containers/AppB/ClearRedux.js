/**
 * Created by xiaohe on 2018/6/11.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppBclear} from '../../Redux/Action/action.js'

const Clear =({handle})=>{
    return <div onClick={handle}>清除</div>
};


const appCclear = (e, dispatch) => {
    dispatch(AppBclear())
}
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        handle: (e) => (appCclear(e,dispatch))
    }
);
export default connect('',mapDispatchToProps)(Clear);