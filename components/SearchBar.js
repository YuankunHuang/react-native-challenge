import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

import MyButton from './MyButton';

import Colors from '../constants/colors';

const SearchBar = props => {
    const [searchInput, setSearchInput] = useState('');

    const searchInputHandler = input => {
        setSearchInput(input);
        props.onChangeText(input);
    };

    const search = () => {
    };

    const clearSearchInput = () => {
        setSearchInput('');
        props.onChangeText('');
    };

    return (
        <View style={styles.searchBar}>
            <View style={styles.searchButton}>
                <MyButton image={<Image source={require('../assets/search.png')} />} onPress={search} />
            </View>
            <TextInput
                style={styles.textInput}
                blurOnSubmit
                placeholder='Please search the item name'
                placeholderTextColor={Colors.placeHolderText}
                maxLength={28}
                onChangeText={searchInputHandler}
                value={searchInput}
            />
            <View style={styles.clearButton}>
            <MyButton image={<Image source={require('../assets/clear.png')} />} onPress={clearSearchInput} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        marginHorizontal: 14,
        marginVertical: 5,
        height: 45,
        padding: 5,
        borderRadius: 5,
        backgroundColor: Colors.searchBarBackground,
        flexDirection: 'row',
    },
    searchButton: {
        flex: 8,
        paddingTop: 8,
        paddingLeft: 5
    },
    textInput: {
        flex: 100,
        fontSize: 18,
        overflow: 'hidden'
    },
    clearButton: {
        flex: 10,
        paddingTop: 8,
    },
});

export default SearchBar;