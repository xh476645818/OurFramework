/**
 * Created by xiaohe on 2018/8/5.
 */
import * as MockList from 'mock/mock.list';
/*
* InterfaceSwitch全局启用mock
* InterfaceList，当全局mock开启时，每个接口是否使用mock或是真实
* */
import {InterfaceSwitch, InterfaceList} from 'config/Interface.config'

const Mock = require('mockjs');
/*
* rurl接口名
* rtype是接口方式post/get
* template是数据模板
* cb用于生成响应数据的函数。
* */
//这个函数还没做好内部的判断和验证，以及post的处理
const MockCreate = (rurl, rtype, template, cb) => {
    //如果连接地址是一个数组
    if (rurl instanceof Array === true) {
        rurl.map((i, j) => {
            let meRurl = new RegExp(i);
            judgeCb(meRurl, rtype, template, cb)

        })
        return;
    }
    let meRurl = new RegExp(rurl);
    console.log('meRurl',meRurl)
    judgeCb(meRurl, rtype, template, cb)

}
//用来判断是否有返回函数的方法，生成相应数据
const judgeCb = (meRurl, rtype, template, cb) => {
    switch (typeof cb) {
        case undefined || "undefined":
            return Mock.mock(meRurl, rtype, template)
        default:
            return Mock.mock(meRurl, rtype, cb)
    }
}
//遍历接口列表
if (InterfaceSwitch === true || InterfaceSwitch == 'true') {
    Object.keys(InterfaceList).map((i, j) => {
        console.log(InterfaceList[i])
        if (InterfaceList[i] === true || InterfaceList[i] == "true") {
            MockCreate(
                MockList[i].rurl,
                MockList[i].rtype,
                MockList[i].template,
                MockList[i].cb)
        }
    })
}
