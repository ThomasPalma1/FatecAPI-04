import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import { EvilIcons } from '@expo/vector-icons' 

import InfoCard from './InfoCard'
import MainCard from "./MainCard"

import getCurrentWeather from './api'

export default function App() {

  const axios = require('axios')
  
  const [currentTemperature, setCurrentTemperature] = useState('31')

  const [locationCoords, setLocationCoords] = useState(null);

  const [locationName, setLocationName] = useState('Brasil, Fortaleza')
  
  const [temperatureMin, setTemperatureMin] = useState('21')
  const [temperatureMax, setTemperatureMax] = useState('32')
  const [wind, setWind] = useState('7')
  const [humidity, setHumidity] = useState('68')

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

  async function getLocation(){
    let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
      }else{
        let location = await Location.getCurrentPositionAsync({})
        await setLocationCoords(location.coords)
      }
  }

  async function setCurrentWeather(){
    await getLocation()
    const data = await getCurrentWeather(locationCoords)

    // Vem da api nessa ordem [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]

    setCurrentTemperature(convertKelvinToC(data[0]))
    setTemperatureMin(convertKelvinToC(data[1]))
    setTemperatureMax(convertKelvinToC(data[2]))
    setLocationName(data[3])
    setWind(data[4])
    setHumidity(data[5])
    
  }

  function convertKelvinToC(kelvin){
    return parseInt(kelvin - 273)
  }

  useEffect(() => {
    setCurrentWeather()
  }, [])

  return (
      <View style={styles.container}>
      
        <TouchableOpacity style={styles.refreshButton} onPress={() => setCurrentWeather()}>
          <EvilIcons name="refresh" color={'white'} size={24}/>
        </TouchableOpacity>

        <Feather style={{marginTop: 50}} name="sun" size={40} color="orange" />

        <View style={styles.temperatureView}>
          <Text style={styles.temperatureText}>{currentTemperature}</Text>
          <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
        </View>
        
        <Text style={styles.localizationText}>{locationName}</Text>

        <View style={styles.cardsView}>
          <MainCard title={"Temperatura Máxima"} icon={'morning'} temperature={temperatureMin} backgroundColor={  '#CC6E30'} ></MainCard>
          <MainCard title={"Temperatura Minima"} icon={'night'} temperature={temperatureMax} backgroundColor={'#008081'} ></MainCard>
        </View>
    
        <View style={styles.info}>
          <Text style={styles.infoText}>Informações adcionais:</Text>
          <View style={styles.addtionalInfo}>
            <InfoCard title={'Vento'} variable={wind} ></InfoCard>
            <InfoCard title={'Umidade'} variable={humidity} ></InfoCard>
            <InfoCard title={'Sensação'} variable={temperatureMin} ></InfoCard>
            <InfoCard title={'Chuva'} variable={temperatureMax} ></InfoCard>
          </View>
        </View>       
      </View>
  );
}