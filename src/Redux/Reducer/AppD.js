/**
 * Created by xiaohe on 2018/5/16.
 */
import * as Action from "../Action/action.type.js";

const AppD = (state = [], action) => {
    switch (action.type) {
        case Action.AppDresult:
            console.log('Action.AppDasyn.state', state)
            console.log('Action.AppDasyn.action', action.result)
            return state = action.result.data.AppD;
            break;
        default:
            return state;
    }

};
export default AppD;