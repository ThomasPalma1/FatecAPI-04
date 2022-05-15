
import React, { useState } from 'react';
import config from '../../../config/config_config';
import { Picker } from '@react-native-picker/picker';
import { View, Image, StyleSheet, Text, Pressable, TextInput, Alert, TouchableOpacity } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import { Ionicons } from '@expo/vector-icons';

export default function AddProdutividadeScreen({ navigation }) {

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [campo, setCampo] = useState(null);
  const [latitudeTalhao, setLatitude] = useState(null);
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
    login: {
      width: 318,
      height: 254,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2,
      alignItems: 'center',
    },
    input: {
      width: '100%',
      backgroundColor: "#FFFFFF",
      height: 50,
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
    }
  });

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
        <Text style={cssTalhao.title}>Produtividade</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.login}>
          <Text style={cssTalhao.talhao_inputText}>Peso de mil grãos</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={text => setCampo(text)} />
          <Text style={cssTalhao.talhao_inputText}>Qntd. Plantas em 10 metros</Text>
          <TextInput style={styles.input} placeholder="" onChangeText={text => setLatitude(text)} />
          <Text style={cssTalhao.talhao_inputText}>Distância entre linhas</Text>
          <TextInput style={styles.input} placeholder="" onChangeText={text => setLongitude(text)} />
          <Text style={cssTalhao.talhao_inputText}>Vagens por planta</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={text => setAreaTalhao(text)} />
          <Text style={cssTalhao.talhao_inputText}>Qntd. grãos</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={text => setAreaTalhao(text)} />
          <Text style={cssTalhao.talhao_inputText}>Qntd. vagens</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={text => setAreaTalhao(text)} />
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => sendForm()}>
            <Text style={cssTalhao.talhao_buttonText}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}