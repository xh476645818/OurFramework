/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';
import axios from 'axios';
export default class Test extends React.Component {
    constructor(props, context) {
        super(props);
        this.handle = this.handle.bind(this);
    }

    componentWillMount() {
    }

    handle() {
        axios.post("http://192.168.1.41:8770/login",{
            username:"zhangsan",
            password:"hydata"
        }).then((response) => {
            console.log('zhangsan', response)

        })
    }

    render() {
        return (
            <div>
                <span onClick={this.handle}>点击</span>
            </div>

        )
    }
};
