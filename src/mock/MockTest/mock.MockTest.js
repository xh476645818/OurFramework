const rurl = '/MockTest';
const rtype = 'get';
let mockTestAppB = () => {
    return Mock.mock({
        "array|1-20": [
            {
                "name": "Mock生成的测试组件"
            }
        ]
    })
};
let mockTestAppD = () => {
    return Mock.mock({
        "array|1-20": [
            {
                "name": "Mock生成的测试组件"
            }
        ]
    })
}
const template = {
    "code": 1,
    "msg": "众创空间基本信息列表查询成功！",
    "result": {
        "AppB": "",
        "AppD": "",
    }
}
const cb = () => {
    template.result.AppB = mockTestAppB().array;
    template.result.AppD = mockTestAppD().array;
    return template
}
export {
    rurl,
    rtype,
    cb
};
