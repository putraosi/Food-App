import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },

  containerMenu: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3,
    borderRadius: 999,
    backgroundColor: colors.white,
  },

  swipe: {
    width: 30,
    height: 3,
    backgroundColor: colors.primary,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 16,
  },
});

export default styles;
