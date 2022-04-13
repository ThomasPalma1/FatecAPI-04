import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, useRef } from 'react';
import Route from "./src/pages/Route";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from "react-native-maps";
import { View } from "react-native";



export default function App() {

  const [origin, setOrigin]=useState(null);
    const [destination, setDestination]=useState(null);

    useEffect(()=>{
        (async function(){

                const { status } = await Permissions.askAsync(Permissions.LOCATION);
                if (status === 'granted'){
                    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
                    setOrigin({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    })
                } else {
                 throw new Error('Location permission not granted');
                }
        })();
    },[]);


  return (
    
      <><View>
      <MapView
        // style={styles.map}
        initialRegion={{ origin }}
        showsUserLocation={true} />
    </View><NavigationContainer>
        <Route />
      </NavigationContainer></>
    
  );
}
