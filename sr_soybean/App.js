import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import Route from "./src/pages/Route";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
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
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421
      })
    })();
  }, []);

  console.log(location)




  return (

    <><MapView initialRegion={location} showsUserLocation={true}/><NavigationContainer>
      <Route />
    </NavigationContainer></>

  );

}
