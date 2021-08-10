import React from 'react'
import { AppState, Text, TouchableOpacity, View } from 'react-native';
import Menu from '../components/menu';
import TrackPlayer, { pause, play, TrackPlayerEvents } from "react-native-track-player";
import localAudio from '../audio/audio'
import { connect } from 'react-redux'
import { setRemoteAudio } from '../redux/actions'
import styles from '../styles/playerStyles'

const APP_STATES = {
  active: 'active',
  inactive: 'inactive',
  background: 'background'
}

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      playlist: [],
      artist: '',
      title: '',
      appState: AppState.currentState,
    }
  }

  async componentDidMount() {
    let response = await fetch("https://imagesapi.osora.ru/?isAudio=true");
    let result = await response.json();
    this.props.setRemoteAudio(result)
    this.setState({ playlist: localAudio.concat(this.props.remoteAudio.map(url => { return { url } })) });
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      ]
    });
    TrackPlayer.setupPlayer();
    TrackPlayer.add(this.state.playlist);
    this.addListeners();
    //this.useListeners();
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount = () => {
    this.removeListeners();
    AppState.removeEventListener("change", this._handleAppStateChange);
    TrackPlayer.destroy();
    this.setState({ isPlaying: false })
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState === APP_STATES.active && nextAppState === APP_STATES.inactive || APP_STATES.background) {
      TrackPlayer.destroy()
      this.setState({ appState: nextAppState });
      this.setState({ isPlaying: false })
    }
  };

  addListeners = () => {
    this.playListener = TrackPlayer.addEventListener('remote-play', this.playPause)
    this.pauseListener = TrackPlayer.addEventListener('remote-play', this.playPause)
    this.stopListener = TrackPlayer.addEventListener('remote-stop', this.stop)
    this.prevListener = TrackPlayer.addEventListener('remote-previous', this.prev)
    this.nextListener = TrackPlayer.addEventListener('remote-next', this.next)
    this.metaChangedListener = TrackPlayer.addEventListener('playback-metadata-changed', this.updateMetadata)
    this.metaReceivedListener = TrackPlayer.addEventListener('playback-metadata-received', this.updateMetadata)
  }

  removeListeners = () => {
    this.playListener.remove()
    this.pauseListener.remove()
    this.stopListener.remove()
    this.prevListener.remove()
    this.nextListener.remove()
    this.metaChangedListener.remove()
    this.metaReceivedListener.remove()
  }

  updateMetadata = async (event) => {
    this.setState({ title: event.title, artist: event.artist });
    const currentTrack = await TrackPlayer.getCurrentTrack();
    await TrackPlayer.updateMetadataForTrack(currentTrack, { title: event.title, artist: event.artist });
  }

  playPause = async () => {
    await TrackPlayer.play();
    if (this.state.isPlaying) {
      await TrackPlayer.pause()
      this.setState({ isPlaying: false })
    } else {
      await TrackPlayer.play()
      this.setState({ isPlaying: true })
    }
  }

  stop = async () => {
    TrackPlayer.stop()
    this.setState({ isPlaying: false })
  }

  next = async () => {
    try {
      await TrackPlayer.skipToNext();
      await TrackPlayer.play();
      this.setState({ isPlaying: true })
    } catch { }
  }

  prev = async () => {
    try {
      await TrackPlayer.skipToPrevious();
      await TrackPlayer.play();
      this.setState({ isPlaying: true })
    } catch { }
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.trackTitleContainer}>
          <Text style={styles.trackTitle}>{this.state.artist}</Text>
          <Text style={styles.trackTitle}>{this.state.title}</Text>
          <View style={styles.mediaButtonsContainer}>
            <TouchableOpacity onPress={this.prev}>
              <Text style={styles.mediaButtonsText}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.playPause}>
              <Text style={styles.mediaButtonsText}> {this.state.isPlaying === true ? 'Pause' : 'Play'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.next}>
              <Text style={styles.mediaButtonsText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Menu />
      </View >
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { setRemoteAudio })(Player)