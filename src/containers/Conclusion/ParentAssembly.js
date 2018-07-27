/**
 * Created by xiaohe on 2018/6/29.
 */
import React, {Component} from 'react';
import SubAssembly from './SubAssembly'

class Conclusion extends Component {
    constructor(props, context) {
        super(props, context);
        console.clear();
        console.log('父-周期constructor');
        this.state={
            text:'我是一初始的值',
            data:'我就是一个简单的子组件，你点我一下试试？'
        }
        this.handle = this.handle.bind(this);
        this.myHandle = this.myHandle.bind(this);
    }

    componentWillMount() {
        console.log('父-周期componentWillMount')
    }

    componentWillReceiveProps() {
        console.log('父-周期componentWillReceiveProps')
    }

    /*shouldComponentUpdate() {
        console.log('父-周期shouldComponentUpdate');
    }*/

    componentWillUpdate() {
        console.log('父-周期componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('父-周期componentDidUpdate')
    }

    componentDidMount() {
        console.log('父-周期componentDidMount')
    }

    componentWillUnmount() {
        console.log('父-周期componentWillUnmount')
    }
    handle(e) {
        this.setState({
            text:'这是一次成功的子传父',
            data:'我成功的呼叫了我爸爸'
        })
        console.log('这是一次成功的子传父');
    }
    myHandle(){
        this.setState({
            text:'这是一次成功的父传子',
            data:'你好小崽子们'
        });
        console.log('这是一次成功的父传子');
    }
    render() {
        return (
            <div>
                <strong>如果我是你，我会打开控制台看console</strong>
                <br/>
                <strong>父：</strong>
                <div onClick={this.myHandle}>{this.state.text}</div>
                <br/>

                <SubAssembly data={this.state.data} handle={this.handle}/>
            </div>
        )
    }
}

export default Conclusion;
