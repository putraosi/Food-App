import {Alert} from 'react-native';

export const SimpleAlert = (message = 'Coming Soon') => {
  Alert.alert('', message, [{text: 'OK', onPress: () => null}]);
};
