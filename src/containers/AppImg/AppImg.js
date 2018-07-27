/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';
import * as AppImgCss from "./AppImg.scss";
import Img from '../../public/images/timg.jpg';

export default class AppImg extends React.Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        return (
            <div>
                <strong className={"strong"}>这里进行图片压缩的，确保这个脚手架可以进行对图片的编译</strong>
                <br/>
                <img style={{
                    "width": "200px",
                    "height": "auto"
                }} src={Img}/>
                <br/>
                <img style={{
                    "width": "200px",
                    "height": "auto"
                }} src={require("../../public/images/234.jpg")}/>
                <br/>
                <img style={{
                    "width": "200px",
                    "height": "auto"
                }} src={"../../public/images/345.jpeg"}/>
                <br/>
                <div className={"ImgClass"}></div>
            </div>

        )
    }
};
