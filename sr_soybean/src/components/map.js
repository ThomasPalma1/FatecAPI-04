import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421
      })
    })();
  }, []);



  return (

    <MapView initialRegion={location} showsUserLocation={true} style={styles.map} />
    ); 
}


const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})