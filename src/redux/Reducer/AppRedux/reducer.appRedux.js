/**
 * Created by xiaohe on 2018/8/3.
 */
import {APP_REDUX} from 'action/index';

export const AppReduxRequest = (state = '狗子不存在', action) => {
    console.log('AppReduxRequest',state,action)
    switch (action.type) {
        case APP_REDUX:
            return action.value+'做成狗肉汤';
        default:
            return state;
    }
}

