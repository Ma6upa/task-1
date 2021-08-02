import React from 'react';
import { connect } from 'react-redux';
import { setRemote } from '../redux/actions';
import { Link } from 'react-router-dom';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      isRemote: false,
      imageId: 0,
      local: [
        "https://example-reactjs-task2.public.osora.ru/static/media/0.c3b84712.jpg",
        "https://example-reactjs-task2.public.osora.ru/static/media/1.67af6503.jpg",
        "https://example-reactjs-task2.public.osora.ru/static/media/2.a6db64e7.jpg"
      ],
    }
  }

  componentDidMount() {
    this.remoteImages()
  }

  remoteImages = async () => {
    let response = await fetch('https://imagesapi.osora.ru/');
    let result = await response.json();
    this.props.setRemote(result)
  }

  switchSource = () => {
    this.setState({ isRemote: !this.state.isRemote })
  }

  getImages = () => {
    return this.state.isRemote ? this.props.remote : this.state.local
  }

  nextImage = () => {
    if (this.state.imageId !== this.getImages().length - 1) {
      this.setState({ imageId: this.state.imageId + 1 })
    } else {
      this.setState({ imageId: 0 })
    }
  }

  prevImage = () => {
    if (this.state.imageId !== 0) {
      this.setState({ imageId: this.state.imageId - 1 })
    } else {
      this.setState({ imageId: this.getImages().length - 1 })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="slider__container">
          <div className="buttonBlock" onClick={this.prevImage}>prev</div>
          <img className="imagesBlock" alt="" src={this.getImages()[this.state.imageId]} />
          <div className="buttonBlock" onClick={this.nextImage}>next</div>
        </div>
        <div className="buttons__container">
          <div className="buttonBlockSwitch" onClick={this.switchSource}>
            switch to {this.state.isRemote === false ? 'remote' : 'local'}</div>
          <Link to="/"><div className="buttonBlockUnderline">back to main</div></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { setRemote })(Slider)
