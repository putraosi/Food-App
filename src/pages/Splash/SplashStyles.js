import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lable: {
    color: colors.white,
    fontSize: 50,
    fontWeight: '700',
  },
});

export default styles;
