import {StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {selectDestination, selectOrigin} from '../../slices/navSlice';
import {useSelector} from 'react-redux';
import tw from 'twrnc';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';

const index = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        top: 10,
        left: 10,
        bottom: 10,
        right: 10,
      },
    });
  }, [origin, destination]);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="terrain"
      ref={mapRef}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_API_KEY}
          strokeColor="black"
          strokeWidth={5}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          // identifier="origin"
        />
      )}
    </MapView>
  );
};

export default index;

const styles = StyleSheet.create({});
