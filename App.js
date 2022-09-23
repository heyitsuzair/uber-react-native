/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';

// 1) Setup Redux

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Lets Buld </Text>
      </View>
    </Provider>
  );
};

export default App;
