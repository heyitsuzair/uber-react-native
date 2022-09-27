import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectDestination, selectTravelTime} from '../../slices/navSlice';
import PushNotification from 'react-native-push-notification';

const data = [
  {
    id: 'Uber-X-1',
    title: 'Uber X',
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
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const RideOptionCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);

  const TravelTime = useSelector(selectTravelTime);
  const destination = useSelector(selectDestination);

  const SURGE_CHARGE_TYPE = 20;

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  const handleChoose = () => {
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Ride Booked!',
      message: 'Ride To ' + destination.description,
      bigText: 'Your ' + selected?.title + ' Will Arrive Soon. Get Ready!',
      color: 'black',
    });
    PushNotification.localNotificationSchedule({
      channelId: 'test-channel',
      title: '40% Off On Second Ride!',
      message: 'Get 40% Off On Second Ride!',
      bigText: 'Book Your Ride Now!',
      date: new Date(Date.now() + 43200 * 1000),
      allowWhileIdle: true,
    });
    navigation.navigate('HomeScreen');
  };

  useEffect(() => {
    createChannels();
  }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <TouchableOpacity
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" color="black" size={20} />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>
        Select A Ride - {TravelTime?.distance.text}
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && 'bg-gray-200'
            }`}>
            <Image
              source={{uri: item.image}}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`font-bold text-black`}>{item.title}</Text>
              <Text>{TravelTime?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'PKR',
              }).format(
                (TravelTime?.duration.value *
                  SURGE_CHARGE_TYPE *
                  item.multiplier) /
                  100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          onPress={() => handleChoose()}
          disabled={!selected}
          style={tw`bg-black py-3 m-3 rounded-md  ${
            !selected && 'bg-gray-300'
          }`}>
          <Text style={tw`text-center text-xl text-white`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
