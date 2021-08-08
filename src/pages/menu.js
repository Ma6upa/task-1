import React from 'react';
import styles from '../styles/menu.component.styles'
import { Text, View, Linking, TouchableOpacity, BackHandler } from 'react-native';
import { Link } from "react-router-native";

const list = [
  {
    link: '/',
    text: 'Главная',
  },
  {
    link: '/slider',
    text: 'Слайдер',
  },
  {
    link: '/player',
    text: 'Плеер',
  },
  {
    text: 'Ссылка',
    onPress: () => Linking.openURL('https://q-digital.org'),
  },
  {
    text: 'Выйти',
    onPress: BackHandler.exitApp,
  }
];

const _onPress = () => false;

const Menu = () => {
  return (
    <View style={styles.footer}>
      {list.map((element, key) => {
        const Content = element.link ? Link : View;
        const onPress = element.onPress || _onPress;

        return (
          <TouchableOpacity key={key} onPress={onPress}>
            <Content to={element.link}>
              <View style={styles.footerElement}>
                <Text style={styles.footerElementText}>{element.text}</Text>
              </View>
            </Content>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

export default Menu;