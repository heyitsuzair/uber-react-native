import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import GooglePlacesInput from '../components/GooglePlaces/GooglePlacesInput';
import NavFavourites from '../components/NavFavourites/NavFavourites';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Text style={styles.text}>Uber</Text>
        <GooglePlacesInput
          placeholder="Where From?"
          screen="home"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  text: {
    fontWeight: '600',
    fontSize: 50,
    color: 'black',
  },
});
