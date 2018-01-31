/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Navigator} from "react-native-deprecated-custom-components";
import Main from "./Main";


export default class App extends Component<{}> {

    /**
     * 构造函数
     * @param props 上一级传递过来的参数
     */
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Navigator initialRoute={{ //应用启动时加载的路由
                name: 'main',
                component: Main
            }} configureScene={(route) => { //页面之间跳转的动画
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
                       renderScene={(route, navigator) => {
                           const Component = route.component;
                           return <Component {...route.params} navigator={navigator}/>
                       }}
            />
        );
    }
};
