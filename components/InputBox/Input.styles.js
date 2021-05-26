import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 5,
    backgroundColor: '#37474F',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
  },
  textbox: {
    margin: 5,
    marginLeft: 12,
    marginRight: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    fontSize: 20,
    color: 'white',
  },
  touchable: {
    backgroundColor: '#808080',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  touchable_text: {
    fontSize: 18,
  },
});
