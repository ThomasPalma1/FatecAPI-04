import React from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, ImageBackground } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';

export default function LoginScreen({ navigation }) {


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      display: 'flex',
    },
    input: {
      width: '100%',
      backgroundColor: "#FFFFFF",
      height: 50,
      borderRadius: 15,
      padding:10,
      marginBottom:15,
      fontSize: 15,
    },
    login: {
      backgroundColor: '#D2FFC2',
      width: 318,
      height: 350,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2,
      top: '18%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
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
      top: '20%',
    },
    input_text:{
      fontWeight:"bold",
      fontSize: 15,
      alignSelf: 'center',
      color: "#fff"
    },
    text: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#1C1C1C',
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  });


  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/img/home.png')} style={styles.image}>
          <View style={styles.login}>
          <Text style={styles.input_text}>Nome completo</Text>
            <TextInput style={styles.input} placeholder='Ex: João Silva' />
            <Text style={styles.input_text}>Email</Text>
            <TextInput style={styles.input} placeholder='Ex: abc@example.com' />
            <Text style={styles.input_text}>Senha</Text>
            <TextInput style={styles.input} placeholder='******' />
            <Text style={styles.input_text}>Confirme sua senha</Text>
            <TextInput style={styles.input} placeholder='******' />
          </View>
          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={cssTalhao.talhao_buttonText}>Cadastrar</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>Já tem uma conta? Acesse</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
