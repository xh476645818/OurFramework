/**
 * Created by xiaohe on 2018/6/29.
 */
import React, {Component} from 'react';

class SubAssembly extends Component {
    constructor(props, context) {
        super(props, context);
        console.log('子-周期:constructor');
        this.state = {
            data: this.props.data
        }
        this.handle = this.props.handle.bind(this)
    }

    componentWillMount() {
        console.log('子-周期:componentWillMount')
    }

    componentWillReceiveProps() {
        console.log('子-周期:componentWillReceiveProps');

        /*有个异步函数，会让你感觉不太一样*/
        /*setTimeout(() => {*/
            this.setState({
                data: this.props.data
            }, () => {
                console.log(this.state)
            })
        /*}, 0)*/

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('子-周期:shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('props', this.props);
        console.log('nextState', nextState);
        console.log('state', this.state);
        // 选择注释或放开以下代码，会有不同发现
         /* if(nextState.data == this.state.data){
              return false
          }*/
        return true
    }

    componentWillUpdate() {
        console.log('子-周期:componentWillUpdate');

    }

    componentDidUpdate() {
        console.log('子-周期:componentDidUpdate')
    }

    componentDidMount() {
        console.log('子-周期:componentDidMount')
    }

    componentWillUnmount() {
        console.log('子-周期:componentWillUnmount')
    }

    render() {
        {
            console.log('render', this.state.data)
            console.log('render', this.props.data)
        }
        return (
            <div onClick={this.handle}>
                <strong>子：</strong>
                <br/>
                state:{this.state.data}
                <br/>
                <br/>
                上述state是个坑哦，为了更好的让你理解props和state，请看SubAssembly的componentWillReceiveProps
                <br/>
                <br/>
                props:{this.props.data}
            </div>
        )
    }
}

export default SubAssembly;
