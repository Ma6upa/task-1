import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
          <div>
            HELLO
            <Link to="/slider"><button>Слайдер</button></Link>
          </div>
    )
  }
}

export default Main