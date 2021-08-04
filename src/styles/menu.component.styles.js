import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footer: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0.2
  },

  footerElement: {
    position: 'relative',
    backgroundColor: 'black',
    height: 100,
    width: 100,
    alignItems: 'center',
  },

  footerElementText: {
    color: 'white',
    zIndex: 9999,
    paddingTop: 40,
    alignItems: 'center'
  }
});