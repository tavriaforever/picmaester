// Компонент предназначен для верстки. Занимает область "статус бара" мобильной ОС.
import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native';

export default () => {
    return (
        <View style={styles.bar}></View>
    );
};

const styles = StyleSheet.create({
    bar: {
        alignSelf: 'stretch',
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
    }
});
