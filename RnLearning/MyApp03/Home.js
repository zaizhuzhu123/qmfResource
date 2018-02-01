/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ListView,
    Alert, TouchableOpacity, Image, RefreshControl
} from 'react-native';
import Detail from "./Detail";
import Swiper from "react-native-swiper";
import {Button, Container, Content, Footer, FooterTab, Header, Input, InputGroup, Item} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator} from "react-navigation";


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
        for (let i = 0; i < 20; i++) {
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
            isRefresh: false,
            swiperShow: false
        }
        console.log(this.state.goods);
        console.log("this.state.goods=" + this.state.goods._cachedRowCount);
    }


    render() {
        if (this.state.swiperShow) {
            return (<Container>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" size={20} style={{marginLeft: 10}}/>
                            <Input placeholder="Search"/>
                            <Icon name="ios-people" size={20} style={{marginRight: 10}}/>
                        </Item>
                        <Button>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                    <Content>
                        <View>
                            <Swiper
                                height={150}
                                loop={true}
                                horizontal={true}
                                autoplay={true}
                                autoplayTimeout={2}
                            >
                                {this.state.adImage.map((ad, index) => {
                                    return (<TouchableOpacity key={index} onPress={this._clickScroll}>
                                        <Image style={[styles.ad]} source={ad.url}></Image>
                                    </TouchableOpacity>)
                                })
                                }
                            </Swiper>
                        </View>
                        <ListView dataSource={this.state.goods}
                                  renderRow={this._renderRow}
                                  renderSeparator={this._renderSeperator}
                                  refreshControl={this._renderRefreshControl()}
                        />
                    </Content>
                </Container>
            );
        } else {
            return (

                <Container>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-add" style={{color: '#000'}}/>
                            <Input placeholder="Search"/>
                            <Icon name="ios-add" style={{color: '#000'}}/>
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                    <Content>
                        <ListView dataSource={this.state.goods}
                                  renderRow={this._renderRow}
                                  renderSeparator={this._renderSeperator}
                                  refreshControl={this._renderRefreshControl()}
                        />
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
    }

    _scrollContent() {
        this.state.adImage.map((ad, index) => {
            return (<TouchableOpacity key={index} onPress={this._clickScroll}>
                <Image style={[styles.ad]} source={{uri: ad.url}}></Image>
            </TouchableOpacity>)
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
        return (<TouchableOpacity onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('Detail', {title: rowData.title})
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
        </TouchableOpacity>);
    }

    _clickScroll = () => {
        Alert.alert("单击轮播图", null, null);
    }


    /**
     * render之后执行 渲染完成执行
     */
    componentDidMount() {
        // this._startTimer();
        setTimeout(() => {
            this.setState({
                swiperShow: true
            });
        }, 0)
    }

    /**
     * 组件卸载中执行
     */
    componentWillUnmount() {
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
        height: 150
    },

    wrapper: {
        height: 100
    },
});

//生成路由关系
export const ModalStack = StackNavigator({
    Home: {
        //对应界面MyHomeScreen
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                display: 'none'
            }
        })
    },
    Detail: {
        screen: Detail,
        navigationOptions: ({navigation}) => ({
            headerTitle: '详情'
        })

    },
});
