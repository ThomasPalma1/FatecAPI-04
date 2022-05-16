
import React, { useState } from 'react';
import config from '../../../config/config_config';
import { Picker } from '@react-native-picker/picker';
import { View, Image, StyleSheet, Text, Pressable, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function NovaSenhaScreen({ navigation }) {

  const [sementeColhidas, setSementeColhidas] = useState(null);
  const [ProdReal, setProdReal] = useState(null);
  const [perdas, setPerdas] = useState(null);
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //Envio do form
  async function sendForm() {
    await fetch(`${config.URL}/createColheita`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sementeColhidas: sementeColhidas,
        ProdReal: ProdReal,
        perdas: perdas
      })
    }).then((response) => {
      Alert.alert("Sucesso", `sucesso ao salvar talhao`)
    }).catch(() => {
      Alert.alert("Sucesso", "Sucesso ao salvar colheita!")
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
      backgroundColor: '#fff',
      borderColor: '#6E7B58',
      borderStyle: 'dotted',
      borderRadius: 16,
      borderWidth: 2,
      width: 318,
      height: 80,
      margin: 5,
      top: '37%',
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
      top: '50%',
    },
    login: {
      width: 318,
      height: 254,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2
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
    buttonText:{
      fontWeight:"bold",
      fontSize: 22,
      alignSelf: 'center',
      color: "#fff"
  },
  buttonText:{
    fontWeight:"bold",
    fontSize: 22,
    alignSelf: 'center',
    color: "#79B078"
  },
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
        <Text style={cssTalhao.title}>Colheita</Text>
      </View>
      <View style={styles.menu}>
      <ScrollView style={styles.login}>
          <Text style={cssTalhao.talhao_inputText}>Sementes colhidas (kg)</Text>
          <TextInput style={styles.input} keyboardType='decimal-pad' onChangeText={text => setSementeColhidas(text)}  />
          <Text style={cssTalhao.talhao_inputText}>Produtividade real</Text>
          <TextInput style={styles.input} onChangeText={text => setProdReal(text)} />
          <Text style={cssTalhao.talhao_inputText}>Perdas (kg)</Text>
          <TextInput style={styles.input} keyboardType='decimal-pad' onChangeText={text => setPerdas(text)} />
          <Pressable style={styles.button} onPress={() => sendForm()}>
            <Text style={cssTalhao.talhao_buttonText}>Salvar</Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
}
