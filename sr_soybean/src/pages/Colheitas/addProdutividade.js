
import React, { useState } from 'react';
import config from '../../../config/config_config';
import { Picker } from '@react-native-picker/picker';
import { View, Image, StyleSheet, Text, Pressable, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import { Ionicons } from '@expo/vector-icons';

export default function AddProdutividadeScreen({ navigation }) {

 const [pesoMilGraos, setPesoMilGraos] = useState(null);
 const [qtdPlantas10m, setPlantas10m] = useState(null);
 const [distanciaLinhas, setDistanciaLinhas] = useState(null);

  //Envio do form
  async function sendForm() {
    await fetch(`${config.URL}/createProdutividade`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pesoMilGraos: pesoMilGraos,
        qtdPlantas10m: qtdPlantas10m,
        distanciaLinhas: distanciaLinhas
      })
    }).then((response) => {
      Alert.alert("Sucesso", `sucesso ao salvar talhao`)
    }).catch(() => {
      Alert.alert("Sucesso", "Sucesso ao salvar produtividade!")
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
      <ScrollView style={styles.login}>
          <Text style={cssTalhao.talhao_inputText}>Peso de mil grãos</Text>
         
          <TextInput style={styles.input} placeholder='' onChangeText={text => setPesoMilGraos(text)} />
          <Text style={cssTalhao.talhao_inputText}>Qntd. Plantas em 10 metros</Text>
          
          <TextInput style={styles.input} placeholder="" keyboardType='decimal-pad' onChangeText={text => setPlantas10m(text)} />
          <Text style={cssTalhao.talhao_inputText}>Distância entre linhas</Text>
         
          <TextInput style={styles.input} placeholder=""keyboardType='decimal-pad' onChangeText={text => setDistanciaLinhas(text)} />
          <Pressable style={styles.button} onPress={() => sendForm()}>
            <Text style={cssTalhao.talhao_buttonText}>Salvar</Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
}
