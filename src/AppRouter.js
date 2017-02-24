import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import {
    LoginScene,
    HomeScene,
    SettingScene,
    CollectionsScene,
    AboutScene
} from './scenes/index';

const TabIcon = (props) => {
    return (
        <Text style={{ color: props.selected ? 'red' : 'black' }}>
            {props.iconName}
        </Text>
    );
};

export default AppRouter = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene initial key='login' component={LoginScene} title='Login' />
                <Scene
                    key='tabbar'
                    type={ActionConst.RESET}
                    tabs
                    tabBarStyle={styles.tabBarStyle}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                >
                        <Scene key='home' iconName={'Home'} icon={TabIcon} title='Home' component={HomeScene} ></Scene>
                        <Scene key='setting' iconName={'Setting'} icon={TabIcon} title='Setting' component={SettingScene} ></Scene>
                        <Scene key='collections' iconName={'Collections'} icon={TabIcon} title='Organize collections' component={CollectionsScene} ></Scene>
                        <Scene key='about' iconName={'About'} icon={TabIcon} title='About picmaesters' component={AboutScene} ></Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        borderTopWidth : .5,
        borderColor    : '#b7b7b7',
        backgroundColor: 'white',
        opacity        : 1
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
