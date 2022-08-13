import React from 'react';
import {StyleSheet, View} from 'react-native';

const Space = ({justify = 'space-between', children}) => {
  return (
    <View style={[styles.container, {justifyContent: justify}]}>
      {children}
    </View>
  );
};

export default Space;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
