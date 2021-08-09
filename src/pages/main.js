import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Menu from '../components/menu';
import styles from '../styles/main.component.styles'
import { Link } from "react-router-native";

class Main extends React.Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.mainText}>HELLO</Text>
          <TouchableOpacity>
            <Link to="/slider">
              <View style={styles.mainButton}>
                <Text style={styles.mainButtonText}>Слайдер</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
        <Menu />
      </View>
    )
  }
}

export default Main