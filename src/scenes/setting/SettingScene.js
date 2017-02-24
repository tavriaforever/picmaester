import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SettingScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.welcome}
                    onPress={() => Actions.home()}
                >Настройки</Text>
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

export { SettingScene };
