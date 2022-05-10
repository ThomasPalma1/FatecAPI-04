
import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


export default function MenuScreen({ navigation }) {


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
      fontFamily: 'Century Gothic',
    },
    menu: {
      flex: 4,
      backgroundColor: '#79B078',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 30,
      alignItems: 'center',
    },
    textInput: {
      padding: 5,
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#6E7B58',
      top: 0,
      fontFamily: 'Century Gothic',
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
      height: 150,
    },
    configuracoes: {
      display: 'flex',
      position: 'relative',
      right: '-45%',
    }
  });

  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.configuracoes}>
          <Ionicons name="settings" size={30} color="#40535B" />
        </Pressable>
        <View>
          <Image
            style={styles.logo}
            source={require('../../../assets/img/icon.png')}
          />
        </View>
        <Text style={styles.text}>Bem-vindo Fulano!</Text>
      </View>
      <View style={styles.menu}>
        <View styles={styles.submenu}>
          <View style={styles.buttons}>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Propriedades</Text>
              <FontAwesome5 name="warehouse" size={50} color="white" />
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Custos</Text>
              <FontAwesome5 name="dollar-sign" size={50} color="white" />
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Estátisticas</Text>
              <Octicons name="graph" size={50} color="white" />
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textInput}>Clima</Text>
              <MaterialCommunityIcons name="weather-cloudy" size={50} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
