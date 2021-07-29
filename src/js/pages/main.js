import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
      <div>
        HELLO
        <Link to="/slider"><div className="buttonBlock">Слайдер</div></Link>
      </div>
    )
  }
}

export default Main