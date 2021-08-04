import React from 'react';
import { Text, View } from 'react-native';
import Menu from './menu';
import styles from '../styles/player.component.styles'

class Player extends React.Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <View >
          <Text>Здесь будет Плеер</Text>
        </View>
        <Menu />
      </View>
    )
  }
}

export default Player