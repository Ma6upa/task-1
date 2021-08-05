import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Menu from './menu';
import styles from '../styles/player.component.styles';
import { connect } from 'react-redux';
import { setRemote } from '../redux/actions';
import TrackPlayer, { Capability } from 'react-native-track-player';

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playlist: [
        {
          url: '../audio/blink.mp3',
          title: 'Stay',
          artist: 'Blink-182'
        },
        {
          url: '../audio/sum.mp3',
          titlle: 'in too deep',
          artist: 'Sum-41'
        },
        {
          url: '../audio/off.mp3',
          title: 'go far',
          artist: 'The Offspring'
        }
      ],
    }
  }

  async componentDidMount() {
    await this.remoteTracks()
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ]
    });
    TrackPlayer.registerPlaybackService(() => require('../service'));
    TrackPlayer.setupPlayer()
    TrackPlayer.add(this.state.playlist)
    this.capability()
  }

  remoteTracks = async () => {
    let response = await fetch('https://imagesapi.osora.ru/?isAudio=true');
    let result = await response.json();
    this.props.setRemote(result);
  }

  // getTracks = () => {
  //   this.setState({ playlist: this.state.playlist.concat(this.props.remote) })
  //   return this.state.playlist
  // }

  render() {
    return (
      <View style={styles.contentContainer}>
        <View >
          <View >
            <TouchableOpacity
              onPress={() => this.TrackPlayer.pause()}>
              <Text >Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.TrackPlayer.play()}>
              <Text >Play</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity
              onPress={() => this.TrackPlayer.skipToPrevious()}>
              <Text>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.TrackPlayer.skipToNext()}>
              <Text >Next</Text>
            </TouchableOpacity>
          </View>
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