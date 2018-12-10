/**
 * Created by xiaohe on 2018/5/7.
 */
//mock加载
import 'mock/index';
//路由
import Router from 'con/Router/Router.js';
//react-redux的组件
import {Provider} from 'react-redux'
//所有挂在store
import store from 'store/index.js';

ReactDOM.render(
    <Provider store={store}>
            <Router/>
    </Provider>
    , document.getElementById('main')
)
