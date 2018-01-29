/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Home from "./Home";
import {Navigator} from "react-native-deprecated-custom-components";


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
            <Navigator initialRoute={{
                name: 'home',
                component: Home
            }} configureScene={(route) => {
                return Navigator.SceneConfigs.FloatFromRight;
            }}
                       renderScene={(route, navigator) => {
                           const Component = route.component;
                           return <Component {...route.params} navigator={navigator}/>
                       }}
            />
        );
    }
};
