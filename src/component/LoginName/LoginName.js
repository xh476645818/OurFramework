/**
 * Created by xiaohe on 2018/6/28.
 */
import React, {Component} from 'react';
import Format from '../../public/method/Format'

const LoginName = (props) => {
    return <input onBlur={Format.bind(this,props)}/>
}
export default LoginName;