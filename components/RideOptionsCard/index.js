import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 'Uber-X-1',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-X-2',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-X-3',
    title: 'UberX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const RideOptionCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);

  return (
    <View style={tw`bg-white h-full`}>
      <TouchableOpacity
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" color="black" size={20} />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>Select A Ride</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10`}>
            <Image
              source={{uri: item.image}}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`font-bold text-black`}>{item.title}</Text>
              <Text>Time...</Text>
            </View>
            <Text style={tw`text-xl`}>$90</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
