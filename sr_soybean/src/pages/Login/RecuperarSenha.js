
import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';

export default function Login(props) {

  const { onPress } = props;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      paddingTop: 20,
      justifyContent: 'space-between',
    },
    logo: {
      width: 69,
      height: 69,
    },
    login: {
      backgroundColor: '#D2FFC2',
      width: 318,
      height: 250,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2,
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
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#1C1C1C',
    },
  });

    return (
      <>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require('../../../assets/img/icon.png')}
            />
            <Text style={styles.title}>Tec Soja</Text>
            <Text style={cssTalhao.title}>Esqueceu sua senha?</Text>
            <Text style={cssTalhao.subtitle}>Digite seu e-mail para receber seu código de verificação.</Text>
          </View>
          <View style={styles.login}>
            <Text style={cssTalhao.talhao_inputText}>Email</Text>
            <TextInput style={cssTalhao.talhao_input} placeholder='Ex: abc@example.com' />
          </View>
          <View>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.text}>Enviar código</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.text}>Já tem uma conta? Acesse</Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }
