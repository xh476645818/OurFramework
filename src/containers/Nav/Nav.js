/**
 * Created by xiaohe on 2018/5/7.
 */
import {NavLink} from 'react-router-dom';
// import "./AppB.css"
export default class App extends React.Component {
    render() {
        return (
            <div>
                <li><NavLink to="/conclusion" replace>周期</NavLink></li>
                <li><NavLink to="/appA">AppA</NavLink></li>
                <li><NavLink to="/appB">AppB</NavLink></li>
                <li><NavLink to="/appC">AppC</NavLink></li>
                <li><NavLink to="/appD">AppD</NavLink></li>
                <li><NavLink to="/appLogin">AppLogin</NavLink></li>
                <li><NavLink to="/appImg">AppImg</NavLink></li>
            </div>
        )
    }
};
