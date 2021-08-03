import Main from './pages/main'
import Slider from './pages/slider'
import React from 'react';
import {StyleSheet} from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import Player from './pages/player';
import store from './redux/index'
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Route exact path="/" component={Main}></Route>
          <Route path="/slider" component={Slider}></Route>
          <Route path="/player" component={Player}></Route>
        </NativeRouter>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0.2
  },

  footerElement: {
    position: 'relative',
    backgroundColor: 'black',
    height: 100,
    width: 100,
    alignItems: 'center',
  },

  footerElementText: {
    color: 'white',
    zIndex: 9999,
    paddingTop: 40,
    alignItems: 'center'
  }
});

export default App;
export { styles };