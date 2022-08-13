import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Header, ItemMenu, Loading, Space} from '../../components';
import {Api} from '../../services';
import {SimpleAlert} from '../../utils';
import ItemProduct from './ItemProduct';
import styles from './ProductStyles';

const Product = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getLists();
  }, []);

  const getLists = async () => {
    try {
      const res = await Api.get({
        url: '52c41978-6e31-4ea3-b917-01899e3ed373',
      });

      setData(res);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      setLoading(false);
      setRefreshing(false);
      SimpleAlert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header title={'List Product'} centered />

          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            data={data}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              getLists();
            }}
            renderItem={({item, index}) => (
              <ItemProduct
                key={index}
                data={item}
                onPress={() =>
                  navigation.navigate('DetailsProduct', {data: item})
                }
              />
            )}
          />

          <TouchableOpacity
            style={styles.containerMenu}
            onPress={() => navigation.navigate('Features')}
            activeOpacity={1}>
            <View style={styles.swipe} />

            <Space>
              <ItemMenu />
              <ItemMenu />
              <ItemMenu />
              <ItemMenu />
            </Space>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default Product;
