
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import {cssTalhao} from '../../../assets/css/cssTalhao';

export default function FazendasScreen({ navigation }) {


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      paddingTop: 20,
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
      flex: 3.5,
      display: 'flex',
      backgroundColor: '#79B078',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 10,
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
      padding: 10,
      width: 318,
      height: 110,
      margin: 5,
    },
    configuracoes: {
      position: 'relative',
      right: '-45%',
      top: 15,
    }
  });

  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.configuracoes}>
        <Ionicons name="settings-sharp" size={24} color="black" />
        </Pressable>
        <Text style={cssTalhao.title}>Propriedades</Text>
        <Text style={styles.text}>Visualize todas suas propriedades registradas</Text>
      </View>
      <View style={styles.menu}>
        <View styles={styles.submenu}>
          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Inicio')}>
              <Text style={styles.textInput}>Propriedades</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Talhões</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Custos</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Estátisticas</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Clima</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
