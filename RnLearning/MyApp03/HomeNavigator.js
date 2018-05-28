import * as React from "react";
import {Component} from "react";
import {TabNavigator} from "react-navigation";
import Home, {ModalStack} from "./Home";
import More from "./More";
import {Button, Container, Content, Header, Input, Item, View} from "native-base";

export const HNavigator = TabNavigator({
    Home: {
        screen: Home, navigationOptions: {
            tabBarLabel: 'a'
        }
    },
    More: {
        screen: More, navigationOptions: {
            tabBarLabel: 'b'
        }
    }
}, {
    tabBarPosition: 'top',
    lazy: true, // 是否懒加载
    initialRouteName: 'Home',
    swipeEnabled: true,
    tabBarOptions: {
        pressOpacity: 0.8,
        style: {
            backgroundColor: '#ffffff',
            zIndex: 0,
            position: 'relative',
        },
        labelStyle: {
            fontSize: 11,
            color: 'red',
            paddingVertical: 0,
        },
        iconStyle: {
            marginTop: -3
        },
        tabStyle: {
            backgroundColor: '#00A0E9',
            height: 20,
        },
    }
})


export default class HomeNavigator extends Component {
    render() {
        return (<HNavigator/>);
    }
}