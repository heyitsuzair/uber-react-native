import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import GooglePlacesInput from '../GooglePlaces/GooglePlacesInput';
import NavFavourites from '../NavFavourites/NavFavourites';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ioni from 'react-native-vector-icons/Ionicons';

const NavigateCard = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesInput
            placeholder="Where To?"
            screen="map"
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
                backgroundColor: '#DDDDDF',
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" color="white" size={16} />
          <Text style={tw`text-center text-white`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Ioni name="fast-food-outline" color="black" size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
