/**
 * Created by xiaohe on 2018/5/8.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, NavLink, Link, Switch} from 'react-router-dom';

import Conclusion from '../Conclusion/ParentAssembly';
import AppA from '../AppA/AppA.js';
import AppB from '../AppB/AppB.js';
import AppC from '../AppC/AppC.js';
import AppD from '../AppD/AppD.js';
import Nav from '../Nav/Nav.js';
import AppLogin from '../AppLogin/AppLogin.js';
import AppImg from '../AppImg/AppImg';

export default class router extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route path="/conclusion" component={Conclusion}/>
                        <Route path="/appA" component={AppA}/>
                        <Route path="/appB" component={AppB}/>
                        <Route path="/appC" component={AppC}/>
                        <Route path="/appD" component={AppD}/>
                        <Route path="/appLogin" component={AppLogin}/>
                        <Route path="/appImg" component={AppImg}/>
                    </Switch>
                </div>

            </HashRouter>

        )
    }
}
router.contextTypes = {
    store: PropTypes.object
}
