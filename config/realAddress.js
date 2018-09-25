/**
 * Created by xiaohe on 2018/8/5.
 */
import config from 'config/project.config.json';
const ip ='192.168.1.41';
const port =8770;
const protocol ='http://';
const realAddress =protocol+ip+':'+port;
console.log(realAddress)
export {realAddress}