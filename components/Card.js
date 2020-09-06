import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';

const timeStampToString = timeStamp => {
    let datetime = new Date();
    datetime.setTime(timeStamp);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    return year + "-" + month + "-" + date;
};

const Card = props => {
    // props: id, name, description, timestamp
    let date = timeStampToString(props.timestamp);

    return (
        <View style={styles.card}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.timestamp}>{date}</Text>
            </View>
            <Text style={styles.id}>Item ID: {props.id}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    name: {
        fontFamily: 'PingFangSC-semibold',
        fontSize: 18
    },
    id: {
        fontFamily: 'PingFangSC-regular',
        fontSize: 12,
        color: Colors.id,
        paddingVertical: 5
    },
    description: {
        fontFamily: 'PingFangSC-regular',
        fontSize: 12,
        color: Colors.description,
        paddingVertical: 5
    },
    timestamp: {
        fontFamily: 'PingFangSC-medium',
        fontSize: 12,
        color: Colors.time
    }
});

export default Card;