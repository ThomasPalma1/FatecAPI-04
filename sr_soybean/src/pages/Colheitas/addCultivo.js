
import React, { useState } from 'react';
import config from '../../../config/config_config';
import DatePicker from 'react-native-datepicker';
import { View, Image, StyleSheet, Text, Pressable, TextInput, Alert, TouchableOpacity, Button, ScrollView } from 'react-native';
import { cssTalhao } from '../../../assets/css/cssTalhao';
import { Ionicons } from '@expo/vector-icons';

export default function AddCultivoScreen({ navigation }) {

  const [fenologico, setFenologico] = useState(null);
  const [tipoCultivo, setTipoCultivo] = useState(null);
  const [date, setDate] = useState(new Date);
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
    })
  }



  const handleConfirm = (date) => {
    setDate(date);
  };

  const getDate = () => {
    let tempDate = date.toLocaleString().split(' ');
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
      width: 280,
      height: 50,
      marginLeft: 15,
      top: '25%'
    },
    login: {
      width: 318,
      height: 750,
      padding: 5,
      borderRadius: 20,
      borderColor: '#79B078',
      borderStyle: 'solid',
      borderWidth: 2,
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
      top: 30,
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
    date:{
      alignSelf: 'center',
      backgroundColor: 'white',
    }
  });

  return (
    <>
     <ScrollView>
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
          customStyles={{
            dateInput: {
                borderWidth: 0,
            }
        }}
            style={styles.date}
            date={getDate()}
            format='DD/MM/YYYY'
            mode="date"
            onDateChange={handleConfirm}
          />
          <Text style={styles.text}>CULTIVARES</Text>
          <Text style={cssTalhao.talhao_inputText}>Tipo de cultivo</Text>
          <TextInput style={styles.input} placeholder="" onChangeText={text => setTipoCultivo(text)} />
          <Text style={cssTalhao.talhao_inputText}>Tempo fenológico</Text>
          <TextInput style={styles.input} placeholder="" onChangeText={text => setFenologico(text)} />
          <Pressable style={styles.button} onPress={() => sendForm()}>
            <Text style={cssTalhao.talhao_buttonText}>Salvar</Text>
          </Pressable>
        </View>
      </View>
     </ScrollView>
    </>
  );
}
