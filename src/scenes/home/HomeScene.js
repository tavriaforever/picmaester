import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';

class HomeScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Главная</Text>
                <Text>{this.props.text}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
});

export { HomeScene };
