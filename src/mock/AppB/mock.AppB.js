const rurl = '/AppB';
const rtype = 'get';
let AppB = [];

const template = {
    "code": 1,
    "msg": "众创空间基本信息列表查询成功！",
    "result": {
        "AppB": [
            {
                'name': "AppB的测试数据"
            }, {
                'name': "AppB的测试数据"
            }
        ],
        "AppD": [{
            'name':Mock.mock('@ctitle()')
        }],
    }
}
export {
    rurl,
    rtype,
    template
};
