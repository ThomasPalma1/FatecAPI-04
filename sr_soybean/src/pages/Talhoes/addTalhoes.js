import React, { useState } from 'react';
import config from '../../../config/config_config';
import { Picker } from '@react-native-picker/picker';
import { View, Image, StyleSheet, Text, Pressable, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NovaSenhaScreen({ navigation }) {

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [campo, setCampo] = useState(null);
  const [latitudeTalhao, setLatitude] = useState(null);
  const [location, setLocation] = useState(null);
  const [longitudeTalhao, setLongitude] = useState(null);
  const [areaDoTalhao, setAreaTalhao] = useState(null);

  //Envio do form
  async function sendForm() {
    await fetch(`${config.URL}/createTalhao`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: campo,
        latitude: latitudeTalhao,
        longitude: longitudeTalhao,
        areaTalhao: areaDoTalhao
      })
    }).then((response) => {
      Alert.alert("Sucesso", `sucesso ao salvar talhao`)
    })
  }

  const puxarCoords = async () => {
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
    })

  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 50,
    },
    logo: {
      width: 80,
      height: 80,
    },
    text: {
      paddingTop: 20,
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#1C1C1C',
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
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#9DF59B',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 200,
      height: 40,
      margin: 5,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9DF59B',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 280,
      height: 50,
      marginLeft: 15,
    },
    buttons: {
      top: '40%',
    },
    login: {
      marginTop: 10,
      width: 318,
      height: 750,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
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
      top: 40,
      left: 10,
    },
    dropdown: {
      width: '100%',
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
      fontSize: 15,
    }
  });

  return (
    <>
    <ScrollView >
      <View style={styles.container}>
      
        <Pressable style={styles.arrow} onPress={() => navigation.navigate('Talhoes')}>
          <Ionicons name="arrow-undo" size={30} color="#79B078" />
        </Pressable>
        <View>
          <Image
            style={styles.logo}
            source={require('../../../assets/img/icon.png')}
          />
        </View>
        <Text style={cssTalhao.title}>Cadastrar talhão</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.login}>
          <Text style={cssTalhao.talhao_inputText}>Atribuir talhão a uma propriedade</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={selectedLanguage => setSelectedLanguage(selectedLanguage)}
            style={styles.dropdown}
            mode="dropdown">
            <Picker.Item label="Selecione uma propriedade" value="Fazenda teste 1" />
            <Picker.Item label="Fazenda teste1" value="Fazenda teste1" />
          </Picker>
          <Text style={cssTalhao.talhao_inputText}>Nome do seu talhão</Text>
          <TextInput style={styles.input} placeholder='Ex: Talhão 1' onChangeText={text => setCampo(text)} />
          <Text style={cssTalhao.talhao_inputText}>Longitude</Text>
          <TextInput style={styles.input} placeholder="Ex: 23°09'30.3'S" onChangeText={text => setLatitude(text)} />
          <Text style={cssTalhao.talhao_inputText}>Latitude</Text>
          <TextInput style={styles.input} placeholder="Ex: 45°47'38.9'W" onChangeText={text => setLongitude(text)} />
          <Pressable style={styles.buttonMap}>
            <Text style={cssTalhao.talhao_buttonText}  onPress={() => puxarCoords()}>Usar localização</Text>
          </Pressable>
          <Text style={cssTalhao.talhao_inputText}>Área do talhão (ha)</Text>
          <TextInput style={styles.input} placeholder='Ex:10000' onChangeText={text => setAreaTalhao(text)} />
          
          <Pressable style={styles.button} onPress={() => sendForm()}>
            <Text style={cssTalhao.talhao_buttonText}>Salvar</Text>
          </Pressable>
          </View>
        
</View>
</ScrollView>
    </>
    
  );
}
