import React from 'react';
import { connect } from 'react-redux';
import { setVariable } from '../redux/actions';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { variables: 'test' }
    console.log(this.state.variables)
  }

  render() {
    this.props.setVariable(this.state.variables)
    console.log(this.props.variable)
    return (
      <p>
        o
      </p>
    )
  }
}

const mapStateToProps = state => ({
  variable: state.variable
})

export default connect(mapStateToProps, { setVariable })(Slider)