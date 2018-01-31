import {Component} from "react";
import {Text, View, Alert, WebView, Dimensions} from "react-native";
import * as React from "react";

const Picker = require("react-native").Picker;

export default class More extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>picker</Text>
                <Picker style={{width: 200, height: 100}} selectedValue={this.state.pickerDefaultSelected}
                        onValueChange={(lang) => {
                            this.state.pickerDefaultSelected = lang;
                            Alert.alert(this.state.pickerDefaultSelected, null, null);
                        }}>
                    <Picker.Item label="JAVA" value="java"/>
                    <Picker.Item label="JAVASCRIPT" value="javascript"/>
                </Picker>
                {/*<WebView style={{height: 200, width: Dimensions.get('window').width}}*/}
                {/*source={{uri: 'http://www.baidu.com'}}>*/}
                {/*</WebView>*/}
            </View>)
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.state.pickerDefaultSelected = "javascript";
    }
}