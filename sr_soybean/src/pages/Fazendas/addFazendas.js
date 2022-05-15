
import React, { useState, useEffect } from 'react';
import config from '../../../config/config_config';
import { View, Image, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import { Ionicons } from '@expo/vector-icons'; 

export default function NovaSenhaScreen({ navigation }) {

  const [nome, setNome] = useState(null);
  const [ccir, setCcir] = useState(null);

    //Envio do form
  async function sendForm(){
    let response=await fetch(`${config.URL}/createFazenda`,{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nome: nome
      })

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
      flex: 2.5,
      display: 'flex',
      backgroundColor: '#79B078',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: 'center',
    },
    textInput: {
      padding: 5,
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#6E7B58',
      top: 0,
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
      top: '35%',
    },
    login: {
      width: 318,
      height: 254,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2,
      top: '15%',
      alignItems: 'center',
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
      marginBottom: 15,
      fontSize: 15,
    },
    arrow:{
      position: 'absolute',
      top: 20,
      left: 10,
    }
  });

  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.arrow} onPress={() => navigation.navigate('Fazenda')}>
          <Ionicons name="arrow-undo" size={30} color="#79B078" />
        </Pressable>
        <View>
          <Image
            style={styles.logo}
            source={require('../../../assets/img/icon.png')}
          />
        </View>
        <Text style={cssTalhao.title}>Cadastrar propriedade</Text>
        <Text style={styles.text}>Cadastre sua propriedade</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.login}>
          <Text style={cssTalhao.talhao_inputText}>Nome da sua propriedade</Text>
          <TextInput style={styles.input} placeholder='Ex: Fazendinha' onChangeText={text => setNome(text)}/>
          <Text style={cssTalhao.talhao_inputText}>CCRI</Text>
          <TextInput style={styles.input} onChangeText={text => setCcir(text)} placeholder='Ex: 111.111.111.111-1' />
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={()=>sendForm()}>
            <Text style={cssTalhao.talhao_buttonText}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
