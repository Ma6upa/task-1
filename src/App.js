import Main from './js/pages/main';
import store from './js/redux/index'
import { Provider } from 'react-redux';
import Slider from './js/pages/slider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/slider">
            <Slider />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
