/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';

import Result from './ResultRedux.js';
import Clear from './ClearRedux.js';
import DomLayer from "./DomLayerRedux";

import "./App.css"

class AppB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                "name": ""
            }]
        };
    }

    componentWillMount() {

    }


    componentDidMount() {
      
    }

    render() {
        return (
            <div>
                <strong>父组件是普通的react，子组件DomLayer中通过axios/thunk获取数据，子组件与store相连接，采用redux</strong>
                <DomLayer list={this.state.list}/>
                <Result/>
                <Clear/>
            </div>
        )
    }
}

export default AppB;