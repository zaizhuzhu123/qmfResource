/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Button,
    ListView,
    Alert, TouchableHighlight, StatusBar
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const ds = new ListView.DataSource({ // 创建ListView.DataSource 数据源
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#41B4DB'} // 设置背景色为蓝色
                           barStyle={'default'} // 设置默认样式
                           networkActivityIndicatorVisible={true}
                    // 显示正在请求网络的状态
                ></StatusBar>
                <View style={styles.searchbar}>
                    <TextInput style={{width: '80%'}} placeholder="搜索关键字"></TextInput>
                    <Button title="点击搜索" onPress={() => {
                        Alert.alert("搜索", "哈哈2333");
                    }}></Button>
                </View>
                <View style={styles.content}>
                    <ScrollView ref="scrollView" style={{flexDirection: 'row', height: 100}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}>
                        <Text style={{
                            backgroundColor: "#0000FF",
                            width: Dimensions.get('window').width
                        }}>1</Text>
                        <Text style={{
                            backgroundColor: "#00FF00",
                            width: Dimensions.get('window').width
                        }}>2</Text>
                        <Text style={{
                            backgroundColor: "#FF0000",
                            width: Dimensions.get('window').width
                        }}>3</Text>
                        <Text style={{
                            backgroundColor: "#FFFF00",
                            width: Dimensions.get('window').width
                        }}>4</Text>
                    </ScrollView>
                    <ListView dataSource={this.state.goods}
                              renderRow={this._renderRow}/>
                </View>
                <View style={styles.footer}>
                    <Text>底部</Text>
                </View>
            </View>
        );
    }

    _renderRow = (rowData, rowHasChanged) => {
        return (<TouchableHighlight onPress={() => {
            Alert.alert("列表", "点击列表");
        }}><View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: Dimensions.get('window').width,
        }}><Text> {rowData}</Text></View></TouchableHighlight>);
    }

    /**
     * 构造函数
     * @param props 上一级传递过来的参数
     */
    constructor(props) {
        super(props);
        let goods = [];
        for (let i = 0; i < 50; i++) {
            goods.push("商品" + (i + 1));
        }
        console.log("goods=" + goods.length);
        this.state = {
            scrollView: {
                currentPage: 0
            },
            goods: ds.cloneWithRows(goods)
        };
        console.log(this.state.goods);
        console.log("this.state.goods=" + this.state.goods._cachedRowCount);
    }


    /**
     * render之后执行 渲染完成执行
     */
    componentDidMount() {
        this._startTimer();
    }

    /**
     * 组件卸载中执行
     */
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    _startTimer() {
        this.interval = setInterval(() => { // 使用 setInterval()创建定时器
            let nextPage = this.state.scrollView.currentPage + 1;
            if (nextPage >= 4) {
                nextPage = 0; // 如果已经滚动到最后一页，下次返回第一页
            }
            this.state.scrollView.currentPage = nextPage;
            // 更新 this.state 中 currentPage 的值
            const offSetX = nextPage * Dimensions.get('window').width;
            // 计算 ScrollView 滚动的 X 轴偏移量（因为是横向滚动）
            this.refs.scrollView.scrollResponderScrollTo({
                x: offSetX,
                y: 0, animated: true
            });
        }, 2000); // 设置定时器的间隔为 2s
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchbar: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#41B4DB',
        height: 50,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    content: {
        position: 'absolute',
        top: 50,
        bottom: 50,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#41B4DB',
        height: 50,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
