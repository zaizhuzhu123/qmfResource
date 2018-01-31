/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import More from "./More";
import {StackNavigator} from "react-navigation";
import Home from "./Home";
import Detail from "./Detail";

export const SimpleApp = StackNavigator({
    Home: {
        screen: Home, navigationOptions: {
            title: '首页',
            headerStyle: {
                display: 'none'
            },
            tabBarIcon: ({tintColor, focused}) => (
                <IconFont
                    font="&#xe7d8;"
                    style={{color: tintColor, fontSize: 26}}
                />
            ),
        },
    },
    More: {
        screen: More, navigationOptions: ({navigation}) => ({
            title: '更多',
            tabBarIcon: ({tintColor, focused}) => (
                <IconFont
                    font="&#xe751;"
                    style={{color: tintColor, fontSize: 26}}
                />
            )
        }),
    },
    Detail: {
        screen: Detail, navigationOptions: ({navigation}) => ({
            title: '详情1 ',
            tabBarIcon: ({tintColor, focused}) => (
                <IconFont
                    font="&#xe751;"
                    style={{color: tintColor, fontSize: 26}}
                />
            )
        }),
    }
}, {
    initialRouteName: 'Home',
    mode: 'card'
});
export default class App extends Component<{}> {

    /**
     * 构造函数
     * @param props 上一级传递过来的参数
     */
    constructor(props) {
        super(props);
    }


    render() {
        return <SimpleApp/>
    }
};
