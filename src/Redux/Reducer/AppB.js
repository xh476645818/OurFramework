/**
 * Created by xiaohe on 2018/5/16.
 */
import * as Action from '../Action/action.type.js';

const AppB = (state = [], action) => {
    switch (action.type) {
        case Action.AppB:
            return [...state, {text: action.text}];
            break;
        case Action.AppBclear:
            return [];
            break;
        default:
            return state;
    }
};
const AppBasyn = (state = [], action) => {
    switch (action.type) {
        case Action.AppBasyn:
            console.log('AppBasyn', state, action);
            return action.AppBasyn;
            break;
        default:
            return state;
    }
};
export {AppB,AppBasyn};