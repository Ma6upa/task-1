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
    console.log(this.props.content)
    return (
      <p>
        o
      </p>
    )
  }
}


const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return changeValue()
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)