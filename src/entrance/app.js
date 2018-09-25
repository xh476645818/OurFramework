/**
 * Created by xiaohe on 2018/5/7.
 */
import Router from 'con/Router/Router.js';
import {Provider} from 'react-redux'
import store from 'store/index.js';

import Mock from 'mock/index';
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
    , document.getElementById('main')
)