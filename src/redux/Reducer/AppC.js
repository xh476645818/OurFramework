/**
 * Created by xiaohe on 2018/5/16.
 */
import * as Action from "action/index";

const AppC = (state = "", action) => {
    switch (action.type) {
        case Action.AppC:
            return [...state,action.text];
            break;
        case Action.AppCclear:
            return action.text="";
            break;
        default:
            return state;
    }

};
export default AppC;