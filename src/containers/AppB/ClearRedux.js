/**
 * Created by xiaohe on 2018/6/11.
 */
import {AppBclearDo, actionCreate, APPB_CLEAR} from 'action/index'

const Clear =({handle})=>{
    return <div onClick={handle}>清除</div>
};


const appCclear = (e, dispatch) => {
    dispatch(actionCreate(APPB_CLEAR))
}
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        handle: (e) => (appCclear(e,dispatch))
    }
);
export default connect('',mapDispatchToProps)(Clear);