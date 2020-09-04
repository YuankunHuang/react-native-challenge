import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, Keyboard } from 'react-native';

import SearchBar from './SearchBar';
import Colors from '../constants/colors';
import MyButton from './MyButton';
import Tag from './Tag';

const Header = props => {

    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.storeTitle}>Store</Text>
                <View style={styles.cartButton}>
                    <MyButton image={<Image source={require('../assets/cart.png')} />} onPress={() => alert('Cart')} />
                </View>
            </View>
            <SearchBar />
            <View style={styles.tagContainer}>
                <View style={styles.tags}>
                    <Tag image={<Image source={require('../assets/food.png')} style={styles.tagImage} />} title='Food' />
                    <Tag image={<Image source={require('../assets/meat.png')} style={styles.tagImage} />} title='Meat' />
                    <Tag image={<Image source={require('../assets/seafood.png')} style={styles.tagImage} />} title='Seafood' />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 178.5,
        backgroundColor: Colors.test
    },
    storeTitle: {
        paddingLeft: 14,
        paddingTop: 36,
        //fontFamily: 'PingFangFC-semibold',
        fontSize: 30,
        color: Colors.major,
    },
    cartButton: {
        paddingTop: 45,
        paddingLeft: 280,
    },
    tagImage: {
        width: 30,
        height: 30
    },
    tagContainer: {
        paddingHorizontal: 50,
        alignContent: 'center'
    },
    tags: {
        paddingTop: 5,
        flexDirection: 'row',
        overflow: 'hidden',
    },
});

export default Header;