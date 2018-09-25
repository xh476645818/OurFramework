/*
* 这个文档为了设置接口，真实接口和mock接口
* true开启mock接口 false关闭mock接口
* InterfaceSwitch全局启用mock
* InterfaceList，当全局mock开启时，每个接口是否使用mock或是真实
* */

export const InterfaceSwitch = false;
export const InterfaceList = {
    //基本信息详情
    TableMockBaseInfo: true,
    //上报信息详情
    TableMockReportInfo: true,
    //基本信息列表
    TableMockBaseInfos: true,
    //上报信息列表
    TableMockReportInfos: true,
    //菜单数据
    MenuMock: true,
    //token接口
    TokenMock: true,
    //上报详情所属单位
    AgencyMock: true,
    //测试用的接口
    TestMock: true
}
