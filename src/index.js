/**
 * Created by xiaohe on 2018/5/7.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './containers/Router/Router.js';
import {Provider} from 'react-redux'

import store from './Redux/Store/index';

import Mock from './Mock/index';
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
    , document.getElementById('main')
)