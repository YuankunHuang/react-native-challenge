import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const Tag = props => {
    // props: image, title
    return (
        <View style={styles.tag}>
            {props.image}
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tag: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        borderColor: 'blue',
        borderWidth: 2
    },
    text: {
        paddingHorizontal: 5,
        paddingTop: 5,
        fontSize: 16
    }
});

export default Tag;