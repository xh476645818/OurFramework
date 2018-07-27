/**
 * Created by xiaohe on 2018/6/27.
 */
var Mock = require('mockjs');
Mock.mock('/a', {
    "AppB|1-15": [
        {
            "name|+1": "AppB的测试数据"
        }
    ],
    "AppD|1-10": [
        {
            "name|1": Mock.mock('@ctitle()')
        }
    ]
});
Mock.mock('/login', 'post', (res) => {
    console.log('login',res)
    let obj = {}, data = JSON.parse(res.body);
//简单的验证，暂时先这样
    if (data.name == 'admin' && data.password == 123456) {
        obj.success = true;
        obj.text = '可能成功了';
    } else {
        obj.success = false;
        obj.text = '肯定失败了';
    }
    return obj;
});
// console.log(JSON.stringify(data, null, 4))