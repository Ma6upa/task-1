import React from 'react';
import { Text, View } from 'react-native';
import Menu from './menu';
import styles from '../styles/player.component.styles';
import { connect } from 'react-redux';
import { setRemote } from '../redux/actions';
import TrackPlayer from 'react-native-track-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [
        'https://music.yandex.ru/album/3595068/track/28124',
        'https://music.yandex.ru/album/2490405/track/7788',
        'https://music.yandex.ru/album/62233/track/630670',
      ],
    }
  }

  componentDidMount() {
    this.remoteTracks()
    this.getTracks()
  }

  remoteTracks = async () => {
    let response = await fetch('https://imagesapi.osora.ru/?isAudio=true');
    let result = await response.json();
    this.props.setRemote(result);
  }

  getTracks = () => {
    this.setState({ playlist: this.state.playlist.concat(this.props.remote) })
    console.log(this.state.playlist)
  }

  start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('track.mp3'),
      title: 'Track Title',
      artist: 'Track Artist',
      artwork: require('track.png')
    });

    // Start playing it
    await TrackPlayer.play();
  };
  //start();
  render() {
    this.state.getTracks();
    return (
      <View style={styles.contentContainer}>
        <View>
          <Text>Здесь будет Плеер</Text>
        </View>
        <Menu />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { setRemote })(Player)