/**
 * Created by xiaohe on 2018/5/16.
 */
import {APPD_RESULT} from 'action/index';

const AppD = (state = [], action) => {
    switch (action.type) {
        case APPD_RESULT:
            console.log('Action.AppDasyn.state', state)
            console.log('Action.AppDasyn.action', action.result)
            return state = action.result.data.AppD;
            break;
        default:
            return state;
    }

};
export default AppD;