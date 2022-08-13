import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {TextView} from '../../components';
import styles from './SplashStyles';

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
