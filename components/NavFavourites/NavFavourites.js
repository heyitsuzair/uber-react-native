import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import tw from 'twrnc';

const data = [
  {
    id: '1',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street,London,UK',
  },
  {
    id: '2',
    icon: 'briefcase',
    location: 'Office',
    destination: 'Office Street,London,UK',
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 1}]} />
      )}
      renderItem={({item}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 bg-black rounded-full p-3`}
            name={item.icon}
            color="white"
            size={20}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
