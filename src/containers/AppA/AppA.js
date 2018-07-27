/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dom from "../../component/Dom/Dom.js";
import Result from "../../component/Result/Result.js";
import Clear from "../../component/Clear/Clear.js";
import "./App.scss";

export default class App extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            text: [],
            list: [1, 2, 3, 4, 5]
        }
        this.handle = this.handle.bind(this);
        this.clearEvent = this.clearEvent.bind(this);
    }

    componentWillMount() {
        fetch("../../public/data/data.json").then(
            function (res) {
                return res.json();
            }
        ).then((data) => {
            console.log("获取数据data", data.result.AppA);
            this.setState({
                list: data.result.AppA
            })
        });
    }

    handle(a) {
        console.log(1111, this.context.store.getState())
        this.setState({
            text: this.state.text.concat(a.target.innerHTML)
        })
    }

    clearEvent() {
        this.setState({
            text: []
        })
    }

    render() {
        return (
            <div>
                <strong className={"strong"}>最普通的react,父传子子传父，没有调用redux，无状态子组件，在周期里获取数据，用的fetch非ajax</strong>
                <ul>
                    {

                        this.state.list.map((data, i) => {
                            return <Dom text={data.name} key={i} handle={this.handle}/>
                        })
                    }
                </ul>

                < Result text={this.state.text}/>
                <Clear handle={this.clearEvent}/>
            </div>

        )
    }
};
App.contextTypes = {
    store: PropTypes.object
}
