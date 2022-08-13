import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './DetailsProductStyles';
import {Header, Separator, TextView} from '../../components';
import {rupiah} from '../../helpers';

const DetailsProduct = ({navigation, route}) => {
  console.log('cek data', route.params);
  const data = route.params?.data;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Detail Product'}
        centered
        onDismiss={() => navigation.goBack()}
      />
      <Image style={styles.image} source={{uri: data.cover}} />

      <View style={styles.wrapper}>
        <TextView>{data.name}</TextView>

        <TextView style={styles.price}>{`Rp${rupiah(data.price)}`}</TextView>
      </View>

      <Separator />

      <View style={styles.wrapper}>
        <TextView style={styles.title}>{'Description'}</TextView>
        <TextView style={styles.desc}>{data.desc}</TextView>
      </View>
    </SafeAreaView>
  );
};

export default DetailsProduct;
