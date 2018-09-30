/**
 * Created by xiaohe on 2018/5/8.
 */
import {HashRouter, Route, NavLink, Link, Switch} from 'react-router-dom';

import {AppA,AppB,AppC,AppD,Nav,AppLogin,AppImg,Conclusion,AppRenderCallback,AppTest,AppRedux} from 'con/index.js'

export default class router extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route path="/appTest" component={AppTest}/>
                        <Route path="/conclusion" component={Conclusion}/>
                        <Route path="/appA" component={AppA}/>
                        <Route path="/appB" component={AppB}/>
                        <Route path="/appC" component={AppC}/>
                        <Route path="/appD" component={AppD}/>
                        <Route path="/appLogin" component={AppLogin}/>
                        <Route path="/appImg" component={AppImg}/>
                        <Route path="/appRenderCallback" component={AppRenderCallback}/>
                        <Route path="/appRedux" component={AppRedux}/>
                    </Switch>
                </div>

            </HashRouter>

        )
    }
}
router.contextTypes = {
    store: PropTypes.object
}
