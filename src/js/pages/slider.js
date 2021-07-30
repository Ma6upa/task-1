import React from 'react';
import { connect } from 'react-redux';
import { setNextImage, setPrevImage, setSource, setRemote } from '../redux/actions';
import { Link } from 'react-router-dom';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: 'local',
      length: 0,
    }
  }

  componentDidMount() {
    this.remoteImages()
    this.setLength()
  }

  remoteImages = async () => {
    let response = await fetch('https://imagesapi.osora.ru/');
    let result = await response.json();
    this.props.setRemote(result)
  }

  switchSource = () => {
    if (this.props.imgSource === 'local') {
      this.props.setSource('remote')
    } else if (this.props.imgSource === 'remote') {
      this.props.setSource('local')
    }
    this.setLength()
  }

  setLength = () => {
    if (this.props.imgSource === 'local') {
      this.setState({ length: this.props.local.length })
    } else {
      this.setState({ length: this.props.remote.length })
    }
  }

  nextImage = () => {
    if (this.props.imageId !== this.state.length - 1) {
      this.props.setNextImage(this.props.imageId + 1)
    } else {
      this.props.setNextImage(0)
    }
  }

  prevImage = () => {
    if (this.props.imageId !== 0) {
      this.props.setPrevImage(this.props.imageId - 1)
    } else {
      this.props.setPrevImage(this.state.length - 1)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="slider__container">
          <div className="buttonBlock" onClick={this.prevImage}>prev</div>
          {(this.props.imgSource === 'local') ?
            <img className="imagesBlock" alt="local" src={this.props.local[this.props.imageId]} />
            :
            <img className="imagesBlock" alt="remote" src={this.props.remote[this.props.imageId]} />
          }
          <div className="buttonBlock" onClick={this.nextImage}>next</div>
        </div>
        <div className="buttons__container">
          <div className="buttonBlockSwitch" onClick={this.switchSource}>
            switch to {this.props.imgSource === 'local' ? 'remote' : 'local'}</div>
          <Link to="/"><div className="buttonBlockUnderline">back to main</div></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { setPrevImage, setNextImage, setSource, setRemote })(Slider)