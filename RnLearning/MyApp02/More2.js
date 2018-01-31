import {Component} from "react";
import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
var Swiper = require('react-native-swiper2')
export default class More2 extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} horizontal={true} loop={true} index={0}>
                <View style={[styles.slide1]}>
                    <Text style={[styles.text]}>我是第一页</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>我是第二页</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>我是第三页</Text>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        width: 500,
        height: '100%'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});