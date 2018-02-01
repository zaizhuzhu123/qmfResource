import {Component} from "react";
import * as React from "react";
import {Text, View} from "react-native";

export default class More2 extends Component {
    render() {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>更多2</Text></View>)
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
}