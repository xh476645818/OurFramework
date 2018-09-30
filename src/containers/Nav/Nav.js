/**
 * Created by xiaohe on 2018/5/7.
 */
import {NavLink} from 'react-router-dom';
import AppRedux from "../AppRedux/AppRedux";
// import "./MockTest.css"
export default class App extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render() {
        return (
            <div>
                <p>这算是一个教程，阅读顺序是如下</p>
                <p>1了解react的周期，点击链接周期，看组件Conclusion</p>
                <p>2了解react的父子传值，点击链接AppA，看组件AppA</p>
                <p>3了解react的redux与thunk，点击链接AppB，看组件AppB</p>
                <li><NavLink to="/appTest" replace>测试</NavLink></li>
                <li><NavLink to="/conclusion" replace>周期</NavLink></li>
                <li><NavLink to="/appA" replace>AppA</NavLink></li>
                <li><NavLink to="/appB" replace>AppB</NavLink></li>
                <li><NavLink to="/appC" replace>AppC</NavLink></li>
                <li><NavLink to="/appD" replace>AppD</NavLink></li>
                <li><NavLink to="/appLogin" replace>AppLogin</NavLink></li>
                <li><NavLink to="/appImg" replace>AppImg</NavLink></li>
                <li><NavLink to="/appRenderCallback" replace>AppRenderCallback</NavLink></li>
                <li><NavLink to="/appRedux" replace>AppRedux</NavLink></li>
            </div>
        )
    }
};
