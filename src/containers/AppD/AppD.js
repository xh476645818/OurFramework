/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppDdo,AppDdoAsyn} from '../../Redux/Action/action';
import Dom from '../../component/Dom/Dom';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handle = this.props.handle.bind(this);
        this.handleAsyn = this.props.handleAsyn.bind(this);
    }

    componentWillMount() {
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps', this.props)
    }

    render() {
        return (
            <div>
                <strong>父组件与store链接，采用redux，并采用redux-saga进行异步</strong>
                <div onClick={this.handle}>点击获取数据(这个可能很快就执行)</div>
                <div onClick={this.handleAsyn}>点击获取数据(让执行飞一会儿)</div>
                <ul>
                    {this.props.list.map((data, i) => (
                        <Dom key={i} text={data.name}/>
                    ))}
                </ul>
            </div>

        )
    }
};
App.contextTypes = {
    store: PropTypes.object
}
const mapStateToProps = (state) => (
    {
        list: state.AppD
    })
const mapDispatchToProps = (dispatch) => ({
    handle: (e) => {
        dispatch(AppDdo())
    },
    handleAsyn: (e) => {
        dispatch(AppDdoAsyn())
    }
})
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App