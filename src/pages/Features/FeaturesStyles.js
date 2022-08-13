import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  content: {
    flex: 1,
    backgroundColor: colors.background.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
  },

  wrapper: {
    marginHorizontal: 40,
  },

  containerMenu: {
    marginVertical: 20,
  },

  gap: {
    flex: 1,
  },
});

export default styles;
