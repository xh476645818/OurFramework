/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';

const Dom = ({text, handle}) => (
    <li onClick={handle}>{text}</li>
)
export default Dom;
