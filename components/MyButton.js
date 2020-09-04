import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const MyButton = props => {
    // props: image, text, onPress

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.image} onPress={props.onPress} >
            {props.image}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignContent: 'center',
    }
});

export default MyButton;