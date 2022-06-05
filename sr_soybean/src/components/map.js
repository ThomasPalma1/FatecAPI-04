import { NavigationContainer } from "@react-navigation/native";
import { cssTalhao } from '../../../sr_soybean/assets/css/cssTalhao';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, View, Pressable, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import config from '../../config/config';

export default function Map() {
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState([]);
  const [coordenadasTalhao, setCoordenadasTalhao] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de acesso ao local negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421
      })
    })();
  }, []);
  
  //passando coordenadas pro marker.
  const handleNewMarker = (coordinate) => {
    setMarker([...marker, coordinate]);
  };

  var events = []
  //puxando coordenadas de talhoes.
fetch(`${config.URL}/readTalhaos`, {
  method:"GET"
    }).then(function(res) {return res.json(); })
    .then( function(data){
      for (var j = 0; j < data.talhoes.length; j++){
       
        events.push({'latitude': data.talhoes[j].latitude})
      }
      console.log(events)

    })

      // const coordTalhao = {
      //   longitude: json.longitude,
      //   latitude: json.latitude,
      // };

     
    
    .catch((error) => {
      console.log(error)
    Alert.alert('Erro', 'Não foi possível carregar os dados do Talhão');
    });


    
  return (
    <View> 
    <MapView
      //pega coordenadas ao clicar.
      onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
      initialRegion={location}
      showsUserLocation={true}
      style={styles.map}
      mapType="hybrid"
    >
      {marker.length > 0 &&
        marker.map((m) => {
          return (
            <Marker coordinate={m} key={Math.random().toString()} />
          );
        })}
  
        
    </MapView>
     </View>
  );
}


const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
})