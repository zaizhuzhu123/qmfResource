import {Component} from "react";
import * as React from "react";
import {StyleSheet, Text, View} from "react-native";

var Swiper = require('react-native-swiper')
export default class More2 extends Component {
    render() {
        if (this.state.swiperShow) {
            return (
                <Swiper style={[styles.wrapper, {height: 100}]} horizontal={true} autoplay={true} loop={true} index={0}
                        height={50}
                >
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
        else {
            return (
                <View style={[styles.slide1]}>
                    <Text style={[styles.text]}>我是第一页</Text>
                </View>
            );
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true
            });
        }, 200)
    }
}

const
    styles = StyleSheet.create({
        wrapper: {},
        slide1: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#9DD6EB',
            height: 100
        },
        slide2: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#97CAE5',
            height: 100
        },
        slide3: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#92BBD9',
            height: 100
        },
        text: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
        }
    });