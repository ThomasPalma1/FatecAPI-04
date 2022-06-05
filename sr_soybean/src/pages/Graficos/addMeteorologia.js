import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import { EvilIcons } from '@expo/vector-icons'
import { getWeather, dailyForecast, showWeather} from 'react-native-weather-api';

import InfoCard from './InfoCard'
import MainCard from "./MainCard"

export default function App({ navigation }) {
  const [Clima, setClima] = useState([]);
  const [location, setLocation] = useState(null);
  const axios = require('axios')
  
  const [locationName, setLocationName] = useState('Brasil, Fortaleza')
  
  const [wind, setWind] = useState('7')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
    },
    refreshButton: {
      position: 'absolute',
      alignSelf: 'flex-start', 
      margin: 30,
    },  
    themeButtonCircle:{
      alignSelf: 'flex-end',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50,
      backgroundColor: '#232634' , 
    },   
    temperatureView: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: '#e0e0e0'  ,
      fontSize: 50,
    },
    cardsView:{
      color:  'white',
      margin: 10,
      alignItems: 'center',
      flexDirection: 'row',
    },
    localizationText:{
      color: 'black',
    },  
    info: {
      alignItems: 'center',
      borderRadius: 20,
      width: 350,
      height: 230,
      backgroundColor: '#8F8F8F',
      
    },
    infoText: {
      color:  'white',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    addtionalInfo:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    themeButton: {
      margin: 10,
      marginLeft: 300,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    themeButtonSquare: {
      backgroundColor: '#8F8F8F', 
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,
    },  
  });

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
      await dailyForecast({
        key: "b6fd8e9dbbe23332fcf1a56b08dd8acc",
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        unit: "metric",
        lang: "pt_br"
      }).then((data) => {
        const clima = data;
        //console.log(clima)
        const max = clima.daily[0].temp.max;
        const min = clima.daily[0].temp.min;
        const currentTemp = clima.current.temp;
        const currentHumidity = clima.current.humidity;
        const currentDescription = clima.current.weather[0].description;
        const sensacaoReal = clima.current.feels_like;
        var maxRound = Math.round(max) + `°C`;
        var minRound = Math.round(min) + `°C`;
        var tempAtual = Math.round(currentTemp);
        var sensacao = Math.round(sensacaoReal) + `°C`;
        var descriptionMaiuscula =  currentDescription[0].toUpperCase() + currentDescription.substr(1);
       
        setClima({
          maxima: maxRound,
          minima: minRound,
          currentTemp: tempAtual,
          currentHumidity: currentHumidity,
          currentDescription: descriptionMaiuscula,
          sensacao: sensacao
        })
      })

      await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=40a5f7559101e8312445dfae9a9b0db1`)
        .then(function (response){
            const data = response.data 
            //console.log(data)
            const locationName = (data.sys.country + ', ' + ' ' + data.name)
            const wind = data.wind.speed
            setLocationName(locationName)
            setWind(wind)
            
        })
        .catch(function (error) {
            console.log(error)
        })
    })
      ();
  }, []);
  
  return (
      <View style={styles.container}>
      
        <TouchableOpacity style={styles.refreshButton} onPress={() => navigation.navigate('addMeteorologia')}>
          <EvilIcons name="refresh" color={'white'} size={24}/>
        </TouchableOpacity>

        <Feather style={{marginTop: 50}} name="sun" size={40} color="orange" />

        <View style={styles.temperatureView}>
          <Text style={styles.temperatureText}>{Clima.currentTemp}</Text>
          <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
        </View>
        
        <Text style={styles.localizationText}>{locationName}</Text>

        <View style={styles.cardsView}>
          <MainCard title={"Temperatura Máxima"} icon={'morning'} temperature={Clima.maxima} backgroundColor={'#CC6E30'} ></MainCard>
          <MainCard title={"Temperatura Minima"} icon={'night'} temperature={Clima.minima} backgroundColor={'#008081'} ></MainCard>
        </View>
    
        <View style={styles.info}>
          <Text style={styles.infoText}>Informações adicionais:</Text>
          <View style={styles.addtionalInfo}>
            <InfoCard title={'Vento'} variable={wind} ></InfoCard>
            <InfoCard title={'Umidade'} variable={Clima.currentHumidity + `%`}></InfoCard>
            <InfoCard title={'Sensação'} variable={Clima.sensacao} ></InfoCard>
            <InfoCard title={'Clima'} variable={Clima.currentDescription} ></InfoCard>
          </View>
        </View>       
      </View>
  );
}