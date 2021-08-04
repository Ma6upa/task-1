import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginTop: 200,
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },

  imagesBlock: {
    backgroundColor: 'black',
    width: 250,
    height: 200,
    margin: 10,
  },

  buttonBlock: {
    backgroundColor: 'black',
    minWidth: 40,
    padding: 5
  },

  buttonText: {
    fontSize: 16,
    color: 'white'
  },

  buttonsContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
  },

  buttonTextUnderline: {
    fontSize: 16,
    color: 'white',
    padding: 5,
    textDecorationLine: 'underline'
  },

  contentContainer: {
    flex: 1
  }
});

