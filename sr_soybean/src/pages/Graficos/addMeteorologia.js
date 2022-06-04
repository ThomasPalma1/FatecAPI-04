import React, { useState, useEffect } from 'react';
import config from '../../../config/config_config';
import DatePicker from 'react-native-datepicker';
import { View, Image, FlatList, StyleSheet, Text, Pressable, TextInput, Alert } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { getWeather, dailyForecast, showWeather} from 'react-native-weather-api';
import { Feather } from '@expo/vector-icons';

export default function MeteorologiaScreen({ navigation }) {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      paddingTop: 30,
    },
    logo: {
      width: 80,
      height: 80,
    },
    text: {
      padding: 20,
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#fff',
      top: 0,
      textAlign: 'center',
    },
    menu: {
      flex: 5,
      display: 'flex',
      backgroundColor: '#79B078',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: 'center',
    },
    buttonMap: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9DF59B',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 200,
      height: 40,
      margin: 5,
      top: '41%',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9DF59B',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 318,
      height: 56,
      margin: 5,
    },
    buttons: {
      top: '50%',
    },
    weather: {
      width: 318,
      height: 254,
      height: 400,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2,
      alignItems: 'center',
      marginTop: 20,
      justifyContent: 'center',
      margin: 10,
      backgroundColor: '#FFED00',
    },
    input: {
      width: '100%',
      backgroundColor: "#FFFFFF",
      height: 60,
      borderRadius: 15,
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderWidth: 2,
      padding: 10,
      marginBottom: 10,
      fontSize: 15,
    },
    arrow: {
      position: 'absolute',
      top: 20,
      left: 10,
    },
    dropdown: {
      width: '100%',
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
      fontSize: 15,
    },
    weatherText: {
      fontSize: 17,
      lineHeight: 30,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      flexDirection: 'row',
    },
  });

  const [location, setLocation] = useState(null);
  const [Clima, setClima] = useState([]);

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

        //console.log(data)
        //NÃO APAGAR O COD
        //const max =data.daily[0].temp.max;
        //const alert = data.alerts[0].event;
        //const min =
        //const currentTemp = data.current.temp;
        //const currentHumidity = data.current.humidity;
        //const currentDescription = data.current.weather[0].description;

        const eventsClima = [];
        for (var i = 0; i<8; i++){
          eventsClima.push({
            max: data.daily[i].temp.min,
            min: data.daily[i].temp.max,
            tempAtual: data.current.temp,
            umidade:data.current.humidity // VERIFICAR PRA VER COMO PEGA POR DIA, SEM TEMPO IRMÃO, VOU SAIR
          })
        }        
        setClima(eventsClima);
      })
    })
      ();
  }, []);

  console.log(Clima)

  const renderItem = ({ item }) => (
    <Pressable style={styles.weather}>


      {/* <Text style={styles.weatherText}>Temperatura Atual: {item.tempAtual} °C</Text> --> SE COLOCAR ESSA FITA 
      DENTRO DA LISTA ELA VAI RETORNAR O MESMO VALOR, ALIÁS É SÓ A TEMPERATURA ATUAL, VERIFICAR ONDE VAI COLOCAR ELA, E AJUSTAR O CSS DA BUDEGA */}




      <Text style={styles.weatherText}>Temperatura Máxima: {item.max} °C</Text>
      <Text style={styles.weatherText}>Temperatura Mínima: {item.min} °C</Text>
      {/* <Text style={styles.weatherText}>Alerta de {Clima.alertas}</Text> */}
      <Text style={styles.weatherText}>Umidade: {item.umidade}%</Text>
      <Text style={styles.weatherText}></Text>
      {/*{/*Clima.nome usado no setClima linha 154*/}
    </Pressable>
  );

  return (
 
    <>
      <View style={styles.container}>
        <Pressable style={styles.arrow} onPress={() => navigation.navigate('CadastroInfo')}>
          <Ionicons name="arrow-undo" size={30} color="#79B078" />
        </Pressable>
        <View>
          <Image
            style={styles.logo}
            source={require('../../../assets/img/icon.png')}
          />
        </View>
        <Text style={cssTalhao.title}>Insira a meteorologia nesse kct</Text>

      </View>
      <View style={styles.menu}>
      <Feather style={{marginTop: 50}} name="sun" size={40} color="orange" />
      <Text style={styles.weatherText}>Temperatura Atual: {Clima.currentTemp}°C</Text>


      {/*PEGANDO A FUNÇÃO RENDERITEM VERIFICAR ELA PRA VER CERTIN*/}
      <FlatList
            data={Clima}
            renderItem={renderItem}
            keyExtractor={(item) => item.min}
          />
      </View>
    </>
  );
}
