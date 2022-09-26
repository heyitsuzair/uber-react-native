import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import GooglePlacesInput from '../components/GooglePlaces/GooglePlacesInput';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={[tw`p-5`, styles.parent]}>
        <Text style={styles.text}>Uber</Text>
        <GooglePlacesInput />
        <NavOptions />
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