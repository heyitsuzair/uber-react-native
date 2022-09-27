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
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  const data = [
    {
      id: '1',
      title: 'Get A Ride',
      image: require('../assets/images/car.jpg'),
      screen: 'MapScreen',
    },
    // {
    //   id: '2',
    //   title: 'Order Food',
    //   image: require('../assets/images/deliver.png'),
    //   screen: 'EatScreen',
    // },
  ];

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`rounded-md p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}>
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              style={{width: 120, height: 120, resizeMode: 'contain'}}
              source={item.image}
            />
            <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              size={23}
            />
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
