import './scss/index.scss';
import Main from './js/pages/main';
import store from './js/redux/index'
import { Provider } from 'react-redux';
import Slider from './js/pages/slider';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/slider">
          <SliderWithStore />
        </Route>
        <Redirect to="/main"></Redirect>
      </Switch>
    </Router>
  );
}

const SliderWithStore = () => (
  <Provider store={store}>
    <Slider />
  </Provider>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<SliderWithStore />, rootElement)

export default App;
