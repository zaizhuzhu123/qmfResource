/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import More from "./More";
import {TabNavigator} from "react-navigation";
import More2 from "./More2";
import Icon from 'react-native-vector-icons/Ionicons';
import {ModalStack} from "./Home";

export const FrameApp = TabNavigator({
    ModalStack: {
        screen: ModalStack, navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-home-outline" size={20} style={{color: tintColor}}/>
            )
        }
    },
    More: {
        screen: More, navigationOptions: {
            tabBarLabel: '更多1',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-keypad-outline" size={20} style={{color: tintColor}}/>
            )
        }
    },
    More2: {
        screen: More2, navigationOptions: {
            tabBarLabel: '更多2',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-leaf-outline" size={20} style={{color: tintColor}}/>
            )
        }
    }
}, {
    tabBarPosition: 'bottom',
    lazy: true, // 是否懒加载
    initialRouteName: 'ModalStack',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        showIcon: true,
        style: {
            height: 40,
            zIndex: 0,
            position: 'relative',
            backgroundColor: 'white',
        },
        labelStyle: {
            fontSize: 11,
            paddingVertical: 0,
            marginTop: -5
        },
        iconStyle: {
            marginTop: -4
        },
        indicatorStyle: {
            height: 0
        }
    }
})

export default class App extends Component<{}> {

    /**
     * 构造函数
     * @param props 上一级传递过来的参数
     */
    constructor(props) {
        super(props);
    }


    render() {
        return <FrameApp/>
    }
};
