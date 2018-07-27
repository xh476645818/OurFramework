/**
 * Created by xiaohe on 2018/6/8.
 */
import React, {Component} from 'react';
const Input =({text,handle})=>{
    return <input onKeyDown={handle}/>
}

export default Input;