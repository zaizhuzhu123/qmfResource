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
    ListView,
    Alert, TouchableHighlight, Image, RefreshControl
} from 'react-native';
import Detail from "./Detail";
import Swiper from "react-native-swiper";
import {Button, Container, Content, Footer, FooterTab, Header, Input, Icon, InputGroup, Item} from "native-base";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const ds = new ListView.DataSource({ // 创建ListView.DataSource 数据源
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class Home extends Component<{}> {

    /**
     * 构造函数
     * @param props 上一级传递过来的参数
     */
    constructor(props) {
        super(props);
        let goods = [];
        for (let i = 0; i < 50; i++) {
            goods.push({
                image: require("./images/scroll1.jpg"),
                title: "商品" + (i + 1),
                des: "描述" + (i + 1)
            });
        }
        console.log("goods=" + goods.length);
        this.state = {
            scrollView: {
                currentPage: 0
            },
            goods: ds.cloneWithRows(goods),
            searchText: '',
            adImage: [{
                url: require("./images/scroll1.jpg")
            }, {
                url: require("./images/scroll2.jpg")
            }, {
                url: require("./images/scroll3.jpg")
            }, {
                url: require("./images/scroll4.jpg")
            }],
            isRefresh: false
        }
        console.log(this.state.goods);
        console.log("this.state.goods=" + this.state.goods._cachedRowCount);
    }


    render() {
        return (

            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="smile-o"/>
                        <Input placeholder="Search"/>
                        <Icon name="smile-o"/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content padder>
                    < View
                        style={styles.content
                        }>
                        <
                            Swiper
                            loop={true}
                            heigh={190}
                            autoPlay={true}>
                            {this.state.adImage.map((ad, index) => {
                                return (<TouchableHighlight key={index} onPress={this._clickScroll}>
                                    <Image style={[styles.ad]} source={ad.url}></Image>
                                </TouchableHighlight>)
                            })
                            }
                        </Swiper>
                        <ScrollView ref="scrollView" style={{flexDirection: 'row'}}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    pagingEnabled={true}>
                            {this.state.adImage.map((ad, index) => {
                                return (<TouchableHighlight key={index} onPress={this._clickScroll}>
                                    <Image style={[styles.ad]} source={ad.url}></Image>
                                </TouchableHighlight>)
                            })}
                        </ScrollView>
                        <ListView dataSource={this.state.goods}
                                  renderRow={this._renderRow}
                                  renderSeparator={this._renderSeperator}
                                  refreshControl={this._renderRefreshControl()}
                        />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Text>Apps</Text>
                        </Button>
                        <Button>
                            <Text>Camera</Text>
                        </Button>
                        <Button active>
                            <Text>Navigate</Text>
                        </Button>
                        <Button>
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    _scrollContent() {
        this.state.adImage.map((ad, index) => {
            return (<TouchableHighlight key={index} onPress={this._clickScroll}>
                <Image style={[styles.ad]} source={{uri: ad.url}}></Image>
            </TouchableHighlight>)
        })
    }

    _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
        return (<View key={'${sectionID}-${rowID}'} style={{
            height: 1,
            backgroundColor: 'gray',
            width: Dimensions.get('window').width - 20,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5
        }}></View>)
    }

    _renderRefreshControl() {
        return (<RefreshControl
            refreshing={this.state.isRefresh} //通过this.state.isRefreshing 设置是否正在刷新
            tintColor={'#FF0000'}
            title={'正在刷新数据，请稍后...'}
            titleColor={'#0000FF'}
            onRefresh={this._onRefresh}
        ></RefreshControl>)
    }

    _onRefresh = () => {
        this.state.isRefresh = true;
        setTimeout(() => {
            this.state.isRefresh = false;
        }, 2000)
    }


    _renderRow = (rowData, rowHasChanged) => {
        return (<TouchableHighlight onPress={() => {
            const navigator = this.props.navigator;
            if (navigator) {
                navigator.push({
                    name: 'detail', component: Detail, params: {
                        title: rowData.title
                    }
                });
            }
        }}><View style={{
            alignItems: 'center',
            height: 50,
            width: Dimensions.get('window').width,
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10
        }}><Image style={{width: 100, height: 50}}
                  source={rowData.image}></Image>
            <View>
                <Text> {rowData.title}</Text>
                <Text> {rowData.des}</Text>
            </View>
        </View>
        </TouchableHighlight>);
    }

    _clickScroll = () => {
        Alert.alert("单击轮播图", null, null);
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
        bottom: 0,
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
    },

    ad: {
        width: Dimensions.get('window').width,
        height: 150
    }
});
