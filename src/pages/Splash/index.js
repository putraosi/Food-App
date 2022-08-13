import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './SplashStyles';
import {TextView} from '../../components';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.replace('Product');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} hidden={true} />

      <TextView style={styles.lable}>{'Food App'}</TextView>
    </SafeAreaView>
  );
};

export default Splash;
