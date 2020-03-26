import * as React from 'react';
import {View, StyleSheet, SafeAreaView,
    TextInput, StatusBar, ScrollView,
    Text, Image, Dimensions, Animated} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {Component} from "react";

import Category from "../components/Explore/Category";
import Home from "../components/Explore/Home";
import Tag from "../components/Explore/Tag";

const {height, width} = Dimensions.get('window');

export default class Explore extends Component{

    UNSAFE_componentWillMount() {
        this.scrollY = new Animated.Value(0);

        this.startHeaderHeight = 80;
        this.endHeaderHeight = 50;
        if (Platform.OS === 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
            this.endHeaderHeight = 70 + StatusBar.currentHeight;
        }

        this.animatedHeaderHeight  = this.scrollY.interpolate({
            inputRange:[0,50],
            outputRange:[this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        });

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });

        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 1}}>
                    <Animated.View style={{
                        height: this.animatedHeaderHeight, backgroundColor: 'white',
                        borderBottomWidth: 1, borderBottomColor: '#ddd'
                    }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: {width: 0, height: 0},
                            shadowColor: 'black', shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS === 'android' ? 30 : null
                        }}>
                            <Ionicons name='ios-search' size={20} style={{marginRight: 10}}/>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                            />
                        </View>
                        <Animated.View style={{flexDirection: 'row', marginHorizontal: 20,
                                                position: 'relative', opacity: this.animatedOpacity,
                                                top: this.animatedTagTop}}>
                            <Tag title='Guests'/>
                            <Tag title='Dates'/>
                        </Animated.View>
                    </Animated.View>
                    <ScrollView onScroll={Animated.event([{ nativeEvent: {contentOffset: {y: this.scrollY}}}])}
                                scrollEventThrottle={16}>
                        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                What can we help you find?
                            </Text>

                            <View style={{height: 130, marginTop: 20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category name="Bali" imageUri={require('../assets/images/airbnb-bali-hideout.jpg')}/>
                                    <Category name="Iceland" imageUri={require('../assets/images/airbnb-akureyri-iceland.jpg')}/>
                                    <Category name="Lake Tahoe" imageUri={require('../assets/images/airbnb-lake-tahoe.jpg')}/>
                                    <Category name="Ashfield" imageUri={require('../assets/images/airbnb-pondhouse.jpg')}/>
                                    <Category name="The Shire" imageUri={require('../assets/images/airbnb-underground-hygge.jpg')}/>
                                </ScrollView>
                            </View>
                            <View style={{marginTop: 40, paddingHorizontal: 20}}>
                                <Text style={{fontSize: 24, fontWeight: '700'}}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{fontWeight: '100', marginTop: 10}}>
                                    A new selection of homes verified for quality & comfort
                                </Text>
                                <View style={{width: width-40, height: 200, marginTop: 20}}>
                                    <Image style={{flex:1, height:null, width:null, resizeMode: 'cover',
                                        borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}}
                                           source={require('../assets/images/airbnb-bali-hideout.jpg')} />
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 40}}>
                            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                Homes around the world
                            </Text>
                            <View style={{paddingHorizontal: 20, marginTop: 20,
                                        flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Home width={width} name='The Cozy Place' type='PRIVATE ROOM - 2 BEDS'
                                      price={82} rating={4}/>
                                <Home width={width} name='The Cozy Place 2' type='PRIVATE ROOM - 1 BEDS'
                                      price={76} rating={5}/>
                                <Home width={width} name='The Cozy Place 3' type='PRIVATE ROOM - 3 BEDS'
                                      price={88} rating={4.7}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
