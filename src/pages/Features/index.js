import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Gap, Header, ItemMenu, Space, TextView} from '../../components';
import styles from './FeaturesStyles';

const dummyMenu = [
  {key: 'A'},
  {key: 'B'},
  {key: 'C'},
  {key: 'D'},
  {key: 'E'},
  {key: 'F'},
  {key: 'G'},
  {key: 'H'},
  {key: 'I'},
  {key: 'J'},
  {key: 'K'},
];

const Features = ({navigation}) => {
  const [menu] = useState(dummyMenu);
  const numColumns = 4;

  const formatRow = (data, _numColumns) => {
    const numberOfFullRows = Math.floor(data.length / _numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * _numColumns;
    while (
      numberOfElementsLastRow !== _numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    return data;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Back'} onDismiss={() => navigation.goBack()} />
      <View style={styles.content}>
        <TextView style={styles.title}>{'Featuress'}</TextView>

        <FlatList
          style={styles.wrapper}
          data={formatRow(menu, numColumns)}
          numColumns={numColumns}
          renderItem={({item, index}) => (
            <ItemMenu key={index} style={styles.containerMenu} data={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Features;
