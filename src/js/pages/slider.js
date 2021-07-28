import React from 'react';
import { connect } from 'react-redux';
import { changeValue } from '../redux/actions';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { variable: 'test' }
    console.log(this.state.variable)
  }

  handleChangeValue = () => {
    this.props.changeValue(this.state.variable)
  }

  render() {
    this.handleChangeValue()
    return (
      <p>
        хд
      </p>
    )
  }
}

export default connect(null, { changeValue })(Slider)