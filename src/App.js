import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is picmaester!</Text>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 20
    }
});
