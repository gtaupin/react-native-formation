// ./src/components/Offline.tsx

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useIsConnected} from 'react-native-offline';

const Offline = () => {
    if (!useIsConnected()) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Offline, reconnection in progress...</Text>
                <ActivityIndicator color={Colors.red800}></ActivityIndicator>
            </View>
        );
    } else {
        return null
    }

};

export default Offline;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginHorizontal: 20,
        position: 'absolute',
        top: 55,
        width: '90%',
        borderRadius: 10,
        backgroundColor: Colors.red100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    message: {
        color: Colors.red800,
    },
});