/**
 * Created by xiaohe on 2018/5/16.
 */
import {APPC, APPC_CLEAR} from 'action/index';

const AppC = (state = "", action) => {
    switch (action.type) {
        case APPC:
            return [...state,action.text];
            break;
        case APPC_CLEAR:
            return action.text="";
            break;
        default:
            return state;
    }

};
export default AppC;