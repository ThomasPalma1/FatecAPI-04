import React from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, ImageBackground } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';

export default function LoginScreen({ navigation }) {


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    input: {
      width: '100%',
      backgroundColor: "#FFFFFF",
      height: 60,
      borderRadius: 15,
      padding:10,
      marginBottom:15,
      fontSize: 15,
    },
    login: {
      backgroundColor: '#D2FFC2',
      width: 318,
      height: 254,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2,
      top: '15%',
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
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#1C1C1C',
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
            <Text style={cssTalhao.talhao_inputText}>Email</Text>
            <TextInput style={styles.input} placeholder='Ex: abc@example.com' />
            <Text style={cssTalhao.talhao_inputText}>Senha</Text>
            <TextInput style={styles.input} placeholder='******' />
            <Text style={{ textDecorationLine: 'underline' }}>Esqueci minha senha</Text>
          </View>
          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Menu')}>
              <Text style={cssTalhao.talhao_buttonText}>Acessar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={cssTalhao.talhao_buttonText}>Cadastrar-se</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
