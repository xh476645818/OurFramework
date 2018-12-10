/**
 * Created by xiaohe on 2018/8/5.
 */
import config from 'config/project.config.json';
const ip = config.realUrl;
const port = config.realPort;
const protocol = 'http://';
const realAddress = protocol + ip + ':' + port;
console.log("%c真实接口地址:" + realAddress, "color:red;font-weight:bold")
export { realAddress }