import React from 'react';
import { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Menu from './menu';

class Player extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View ><Text>Здесь будет Плеер</Text></View>
                <Menu></Menu>
            </View>
        )
    }
}

export default Player