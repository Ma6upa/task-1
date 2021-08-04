import Main from './pages/main'
import Slider from './pages/slider'
import React from 'react';
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

export default App;
