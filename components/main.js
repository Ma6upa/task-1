import React from 'react';
import { Text, View } from 'react-native';
import Menu from './menu';
import { StyleSheet } from 'react-native';
import { Link } from "react-router-native";

class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.mainText}>HELLO</Text>
          <Link to="/slider">
            <View style={styles.mainButton}>
              <Text style={styles.mainButtonText}>Слайдер</Text>
            </View>
          </Link>
        </View>
        <Menu></Menu>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginTop: 300,
  },
  mainText: {
    fontSize: 30,
  },
  mainButton: {
    backgroundColor: 'black',
    fontSize: 30,
    color: 'white'
  },
  mainButtonText: {
    fontSize: 30,
    color: 'white',
    padding: 11,
    textDecorationLine: 'underline'
  }
});

export default Main