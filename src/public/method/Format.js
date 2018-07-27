/**
 * Created by xiaohe on 2018/7/3.
 */
const Format = (e, i) => {
    let name = i.target.value.trim();
    e.handle(name);
}
export default Format;