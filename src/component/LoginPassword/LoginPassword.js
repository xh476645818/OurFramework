/**
 * Created by xiaohe on 2018/6/28.
 */
import Format from 'method/Format'

const LoginPassword = (props) => {
    return <input type={"password"} onBlur={Format.bind(this,props)}/>
}

export default LoginPassword;