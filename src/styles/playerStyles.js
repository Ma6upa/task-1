import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    flex: 1
  },

  trackTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 200
  },

  trackTitle: {
    fontSize: 24
  },

  mediaButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 200,
    marginTop: 200,
    position: 'absolute'
  },

  mediaButtonsText: {
    fontSize: 20
  }
});