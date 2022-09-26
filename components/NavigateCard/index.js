import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import GooglePlacesInput from '../GooglePlaces/GooglePlacesInput';

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
      </View>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
