import React from 'react';
import { styles } from '../App'
import { Text, View, Linking, Pressable, BackHandler } from 'react-native';
import { Link } from "react-router-native";

const Menu = () => {
  return (
    <View style={styles.footer}>
      <Link to="/"><View style={styles.footerElement}><Text style={styles.footerElementText}>Главная</Text></View></Link>
      <Link to="/slider"><View style={styles.footerElement}><Text style={styles.footerElementText}>Слайдер</Text></View></Link>
      <Link to="/player"><View style={styles.footerElement}><Text style={styles.footerElementText}>Плеер</Text></View></Link>
      <Pressable onPress={() => Linking.openURL('https://q-digital.org')}><View style={styles.footerElement}><Text style={styles.footerElementText}>Ссылка</Text></View></Pressable>
      <Pressable onPress={BackHandler.exitApp}><View style={styles.footerElement}><Text style={styles.footerElementText}>Выйти</Text></View></Pressable>
    </View>
  );
}

export default Menu;