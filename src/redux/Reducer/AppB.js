/**
 * Created by xiaohe on 2018/5/16.
 */
import {APPB, APPB_ASYN, APPB_CLEAR} from 'action/index';

const AppB = (state = [], action) => {

    switch (action.type) {
        case APPB:
            console.log('actionB',action)
            return [...state, {value: action.value}];
            break;
        case APPB_CLEAR:
            return [];
            break;
        default:
            return state;
    }
};
const AppBasyn = (state = [], action) => {
    switch (action.type) {
        case APPB_ASYN:
            console.log('APPB_ASYN', state, action);
            return action.APPB_ASYN;
            break;
        default:
            return state;
    }
};
export {AppB,AppBasyn};