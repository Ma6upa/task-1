import React from 'react';
import styles from '../styles/menu.component.styles'
import { Text, View, Linking, TouchableOpacity, BackHandler } from 'react-native';
import { Link } from "react-router-native";

const Menu = () => {
  const list = [
    {
      key: 1,
      link: '/',
      text: 'Главная',
      touchHandler: () => { },
    },
    {
      key: 2,
      link: '/slider',
      text: 'Слайдер',
      touchHandler: () => { },
    },
    {
      key: 3,
      link: '/player',
      text: 'Плеер',
      touchHandler: () => { },
    },
    {
      key: 4,
      text: 'Ссылка',
      touchHandler: () => Linking.openURL('https://q-digital.org'),
    },
    {
      key: 5,
      touchHandler: BackHandler.exitApp,
      text: 'Выйти',
    }
  ];

  const menu = () => {
    return list.map((element) => {
      const Content = element.link ? Link : View
      return (
        <TouchableOpacity onPress={element.touchHandler}>
          <Content to={element.link}>
            <View style={styles.footerElement}>
              <Text style={styles.footerElementText}>{element.text}</Text>
            </View>
          </Content>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.footer}>
      {menu()}
    </View>
  );
}

export default Menu;