/**
 * Created by xiaohe on 2018/5/7.
 */
import {NavLink} from 'react-router-dom';
// import "./AppB.css"
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
                <li><NavLink to="/appTest">测试</NavLink></li>
                <li><NavLink to="/conclusion">周期</NavLink></li>
                <li><NavLink to="/appA">AppA</NavLink></li>
                <li><NavLink to="/appB">AppB</NavLink></li>
                <li><NavLink to="/appC">AppC</NavLink></li>
                <li><NavLink to="/appD">AppD</NavLink></li>
                <li><NavLink to="/appLogin">AppLogin</NavLink></li>
                <li><NavLink to="/appImg">AppImg</NavLink></li>
                <li><NavLink to="/appRenderCallback">AppRenderCallback</NavLink></li>
            </div>
        )
    }
};
