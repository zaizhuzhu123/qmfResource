import {Component} from "react";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";

export default class Detail extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    backgroundColor: '#41B4DB',
                    height: 50,
                    width: Dimensions.get('window').width,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={this._pressBackButton.bind(this)}>
                        <Text style={{fontSize: 20}}>返回</Text>
                    </TouchableOpacity>
                </View>
                <Text>{this.props.title}</Text>
            </View>)
    }

    _pressBackButton() {
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.pop();
        }
    }

    /**
     * 构造函数
     * @param props 上一级传递过来的参数
     */
    constructor(props) {
        super(props);
    }
}