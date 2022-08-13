import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils';
import {TextView} from '../components';

const Loading = ({type}) => {
  let backgroundColor = colors.white;
  let loadingColor = colors.primary;

  return (
    <View style={styles.container(backgroundColor)}>
      <ActivityIndicator size={'large'} color={loadingColor} />
      <TextView style={styles.label}>{'Loading...'}</TextView>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
    padding: 16,
  }),

  label: {
    color: colors.primary,
    marginTop: 12,
  },
});
