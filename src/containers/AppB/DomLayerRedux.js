/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';

//获取action，应用action的方法发起改变
import {AppBdo, AppBasyn} from '../../Redux/Action/action.js'
import {connect} from 'react-redux';

import Dom from "../../component/Dom/Dom.js";

class DomLayer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.list)
        this.state = {
            list: this.props.list
        }
        this.handle = this.props.handle.bind(this);
        this.con = this.props.con.bind(this);
    }

    componentDidMount() {
        this.con()
        console.log("componentDidMount", this.props);
        console.log("componentDidMount", this.state);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate", this.props);
    }

    render() {
        return (

            <div>

                <ul>
                    {
                        this.props.list.map((data, i) => (<Dom key={i} text={data.name} handle={this.handle}/>))
                    }
                </ul>
            </div>
        )
    }
};

//获取当前对象的内容，替换什么方法都可以
const appBdo = (text) => {
    return text.target.innerHTML
}

const mapDispatchToProps = (dispatch) => (
        {
            handle: (text) => {
                dispatch(AppBdo(appBdo(text)))
            },
            con: () => {
                dispatch(AppBasyn())
            }
        }
    )
;
const mapStateToProps = (state, ownProps) => (
        {
            list: state.AppBasyn
        }
)
DomLayer = connect(mapStateToProps, mapDispatchToProps)(DomLayer)
export default DomLayer;