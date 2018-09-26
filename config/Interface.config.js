/*
* 这个文档为了设置接口，真实接口和mock接口
* true开启mock接口 false关闭mock接口
* InterfaceSwitch全局启用mock
* InterfaceList，当全局mock开启时，每个接口是否使用mock或是真实
* */

export const InterfaceSwitch = true;
export const InterfaceList = {
    //登录用的接口
    LoginMock: true,
    AppB: true
}
