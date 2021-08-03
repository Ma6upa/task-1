import React from 'react';
import { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Menu from './menu';
import { connect } from 'react-redux';
import { setRemote } from '../redux/actions';

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
        this.getImages()
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
        if (this.state.isRemote) {
          return this.state.remote = this.props.remote
        } else {
          return this.state.local
        }
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
            <View style={{ flex: 1 }}>
                <View ><Text>Слайдер</Text></View>
                <Menu></Menu>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
  
  export default connect(mapStateToProps, { setRemote })(Slider)