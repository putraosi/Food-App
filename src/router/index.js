import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ComingSoon, DetailsProduct, Features, Product, Splash} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRoute] = useState('Splash');

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Features"
        component={Features}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DetailsProduct"
        component={DetailsProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
