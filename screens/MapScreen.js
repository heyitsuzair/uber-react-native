import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionsCard';
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-16 left-8 p-3 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" size={24} />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
