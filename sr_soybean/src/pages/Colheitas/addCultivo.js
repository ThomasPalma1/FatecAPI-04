
import React, { useState } from 'react';
import config from '../../../config/config_config';
import DatePicker from 'react-native-datepicker';
import { Picker } from '@react-native-picker/picker';
import { View, Image, StyleSheet, Text, Pressable, TextInput, Alert, TouchableOpacity, Button } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import { Ionicons } from '@expo/vector-icons';

export default function AddCultivoScreen({ navigation }) {

  const [fenologico, setFenologico] = useState(null);
  const [tipoCultivo, setTipoCultivo] = useState(null);

  //Envio do form
  async function sendForm() {
    await fetch(`${config.URL}/createCultivo`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      tipoCultivo: tipoCultivo,
      fenologico: fenologico
      })
    }).then((response) => {
      Alert.alert("Sucesso", `sucesso ao salvar cultivo`)
    }).catch(() => {
      Alert.alert("Sucesso", "Sucesso ao salvar cultivo!")
    })
  }



  const handleConfirm = (date) => {
    setDate(date);
  };

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };


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
      padding: 20,
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#fff',
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
        <Text style={cssTalhao.title}>Cultivo</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.login}>
          <Text style={styles.text}>DADOS DA COLHEITA</Text>
          <Text style={cssTalhao.talhao_inputText}>Data da colheita prevista</Text>
          <DatePicker
            styles={styles.input}
            date={getDate()}
            format='DD/MM/YYYY'
            mode="date"
            onDateChange={handleConfirm}
          />
          <Text style={styles.text}>CULTIVARES</Text>
          <Text style={cssTalhao.talhao_inputText}>Tipo de cultivo</Text>
          <TextInput style={styles.input} placeholder="" onChangeText={text => setTipoCultivo(text)} />
          {/* <Picker
            selectedValue={selectedLanguage}
            onValueChange={selectedLanguage => setSelectedLanguage(selectedLanguage)}
            style={styles.dropdown}
            mode="dropdown">
            <Picker.Item label="Tipo de cultivo" value="Tipo de cultivo" />
            <Picker.Item label="Soja" value="Soja" />
            <Picker.Item label="Café" value="Café" />
          </Picker> */}
          <Text style={cssTalhao.talhao_inputText}>Tempo fenológico</Text>
          <TextInput style={styles.input} placeholder="" onChangeText={text => setFenologico(text)} />
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
