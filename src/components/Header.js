import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import TextView from './TextView';
import {IcBack} from '../assets/';
import {colors} from '../utils';

const Header = ({title, centered, onDismiss}) => {
  return (
    <View style={styles.container}>
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss}>
          <Image style={styles.icon} source={IcBack} />
        </TouchableOpacity>
      )}

      <TextView
        style={[
          styles.title,
          {
            textAlign: centered ? 'center' : 'left',
          },
        ]}>
        {title}
      </TextView>

      {onDismiss && <View style={styles.gap} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: colors.primary,
  },

  icon: {
    width: 24,
    height: 24,
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
    marginHorizontal: 16,
  },

  gap: {
    width: 24,
  },
});
