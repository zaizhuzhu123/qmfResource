import {Component} from "react";
import * as React from "react";
import {Text, View, ViewPagerAndroid} from "react-native";
import Home from "./Home";
import More from "./More";
import More2 from "./More2";


export default class Main extends Component {
    render() {
        return (<ViewPagerAndroid style={{flex: 1}} initialPage={0}>
            <View>
                <Home navigator={this.props.navigator}><Text>Home</Text></Home>
            </View>
            <View>
                <More navigator={this.props.navigator}><Text>More</Text></More>
            </View>
            <View>
                <More2 navigator={this.props.navigator}><Text>More2</Text></More2>
            </View>
        </ViewPagerAndroid>)
    }

    constructor(props) {
        super(props);
    }
}