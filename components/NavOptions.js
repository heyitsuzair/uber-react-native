import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const NavOptions = () => {
  const data = [
    {
      id: '1',
      title: 'Get A Ride',
      image: require('../assets/images/car.jpg'),
      screen: 'MapScreen',
    },
    {
      id: '2',
      title: 'Order Food',
      image: require('../assets/images/deliver.png'),
      screen: 'EatScreen',
    },
  ];

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{width: 120, height: 120, resizeMode: 'contain'}}
              source={item.image}
            />
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
