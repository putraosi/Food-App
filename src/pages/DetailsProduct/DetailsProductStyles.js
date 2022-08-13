import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },

  image: {
    width: width,
    height: width * 0.7,
  },

  wrapper: {
    padding: 8,
  },

  price: {
    fontWeight: '700',
    fontSize: 20,
  },

  title: {
    fontWeight: '700',
    marginTop: 8,
  },

  desc: {
    color: colors.text.secondary,
  },
});

export default styles;
