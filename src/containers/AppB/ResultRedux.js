/**
 * Created by xiaohe on 2018/5/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                显示结果:{this.props.text}
            </div>
        )
    }
}

const textFilter = (state) => {
    if (state.length >= 1) {
        var Atext = [];
        for (let i = 0; i < state.length; i++) {
            Atext.push(state[i].text);
        }
        return Atext;
    }
    return state.text
}

const mapStateToProps = (state, ownProps) => (
    /*    console.log("ResultReduxState", state),
            console.log("ResultReduxOwnProps", ownProps), */{
        text: textFilter(state.AppB)
    }
)
Result = connect(mapStateToProps)(Result)
export default Result;