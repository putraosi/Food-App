import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils';

const Separator = ({style, backgroundColor = colors.separator.primary}) => {
  return <View style={[styles.container(backgroundColor), style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    width: '100%',
    height: 1,
    backgroundColor,
  }),
});
