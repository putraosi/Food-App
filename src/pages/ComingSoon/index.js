import React from 'react';
import {View} from 'react-native';
import {TextView} from '../../components';
import styles from './ComingSoonStyles';

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <TextView>{'Coming Soon'}</TextView>
    </View>
  );
};

export default ComingSoon;
