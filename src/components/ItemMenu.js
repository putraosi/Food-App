import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {IcHome} from '../assets';
import {colors, ToastAlert} from '../utils';
import TextView from './TextView';

const ItemMenu = ({style, data}) => {
  if (data && data.empty)
    return <View style={[styles.container, style]}></View>;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={1}
      onPress={() => ToastAlert()}>
      <View style={styles.menu}>
        <Image style={styles.icon} source={IcHome} />
      </View>

      <TextView>{'Menu Item'}</TextView>
    </TouchableOpacity>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.primary,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 24,
    heigh: 24,
  },
});
