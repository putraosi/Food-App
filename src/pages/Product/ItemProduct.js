import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextView} from '../../components';
import {rupiah} from '../../helpers';

const ItemProduct = ({data}) => {
  console.log('cek item', data);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.cover}} />
      <TextView style={styles.title}>{data.name}</TextView>
      <TextView style={styles.price}>{`Rp${rupiah(data.price)}`}</TextView>
    </View>
  );
};

export default ItemProduct;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    elevation: 1,
    margin: 8,
  },

  image: {
    maxWidth: width,
    height: (width / 3) * 0.7,
    borderRadius: 8,
    marginBottom: 8,
  },

  price: {
    fontWeight: '700',
    fontSize: 20,
  },
});