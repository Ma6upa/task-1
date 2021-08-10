import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginTop: 300,
  },

  mainText: {
    fontSize: 30,
  },

  mainButton: {
    backgroundColor: 'black',
    fontSize: 30,
    color: 'white'
  },

  mainButtonText: {
    fontSize: 30,
    color: 'white',
    padding: 11,
    textDecorationLine: 'underline'
  },

  contentContainer: {
    flex: 1
  }
});
