import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

import Colors from '../constants/colors';

const tagImageStyleNormal = {
    flexDirection: 'row',
    alignSelf: 'center',
    tintColor: Colors.major
};

const tagImageStyleSelected = {
    flexDirection: 'row',
    alignSelf: 'center',
    tintColor: Colors.selected,
};

const tagTextStyleNormal = {
    fontSize: 16,
    alignSelf: 'center',
    paddingHorizontal: 5,
    color: Colors.major
};

const tagTextStyleSelected = {
    fontSize: 16,
    alignSelf: 'center',
    paddingHorizontal: 5,
    color: Colors.selected,
    fontWeight: 'bold'
};

const Tag = props => {
    // props: image, title
    const [tagImageStyle, setTagImageStyle] = useState({
        flexDirection: 'row',
        alignSelf: 'center',
    });

    const [tagTextStyle, setTagTextStyle] = useState({
        fontSize: 16,
        alignSelf: 'center',
        paddingHorizontal: 5
    });

    useEffect(() => {
        if (props.isChosen)
        {
            setTagImageStyle(tagImageStyleSelected);
            setTagTextStyle(tagTextStyleSelected);
        }
        else
        {
            setTagImageStyle(tagImageStyleNormal);
            setTagTextStyle(tagTextStyleNormal);
        }
    }, [props.isChosen]);

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=> {
                props.onPress(props.title);
            }}>
            <View style={tagImageStyle}>
                {props.image}
                <Text style={tagTextStyle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tag: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    text: {
        fontSize: 16,
        alignSelf: 'center',
        paddingHorizontal: 5
    }
});

export default Tag;