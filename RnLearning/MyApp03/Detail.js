import * as React from "react";
import {Component} from "react";
import {Text, View} from "react-native";

export default class Detail extends Component {
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>{params.title}</Text>
            </View>)
    }

    /**
     * 构造函数
     * @param props 上一级传递过来的参数
     */
    constructor(props) {
        super(props);
    }
}