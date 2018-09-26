/**
 * Created by xiaohe on 2018/9/26.
 */
var Random = Mock.Random;

const rurl = '/login';
const rtype = 'post';
const result = '';
let template = ""
const cb = (e) => {
    let data = JSON.parse(e.body);
    if (data.username == "admin" && data.password == '123456') {
        template = {
            "code": 1,
            "msg": "mock登录成功！",
            "result": {
                "userInfo": {
                    "id": 1,
                    "username": "admin",
                    "nickname": "管理员"
                },
                "resources": "",
                "token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNTJkNGJiOC0zNDQ5LTQ2NTMtYjg0ZS1iNzk2ZWM1MGQ5NjEiLCJpYXQiOjE1MzQzMTkzMDIsInN1YiI6ImFkbWluIiwiaXNzIjoiaGl5bm4iLCJleHAiOjE1MzQzMjIzMDJ9.EskQ7tiDWYbramVHdTWgydKPMoqBeVgm_0k8jCHdGRQ"
            }
        }

    } else {
        template = {
            "code": 0,
            "msg": "网关异常，请联系管理员！",
            "result": "认证失败"
        }
    }
    return template;

}
export {
    rurl,
    rtype,
    cb
};

