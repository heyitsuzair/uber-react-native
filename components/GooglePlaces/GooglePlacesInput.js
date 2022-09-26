import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../../slices/navSlice';
import {useNavigation} from '@react-navigation/native';

const GooglePlacesInput = ({styles, placeholder, screen}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      styles={styles}
      minLength={2}
      enablePoweredByContainer={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        {
          screen === 'home' ? (
            <>
              {dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                }),
              )}
              {dispatch(setDestination(null))}
            </>
          ) : (
            <>
              {dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
              )}
              {navigation.navigate('RideOptionsCard')}
            </>
          );
        }
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;
