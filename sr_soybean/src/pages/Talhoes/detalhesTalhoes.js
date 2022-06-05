
import React, { useEffect, useState } from "react";
import config from "../../../config/config_config";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated,
  Text,
  Pressable,
}
  from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { cssTalhao } from '../../../assets/css/cssTalhao';

export default function FazendasScreen({ navigation }) {

  const [open, setOpen] = useState(0);
  const animation = new Animated.Value(open);
  const [talhoes, setTalhoes] = useState([]);

  const toggleMenu = () => {
    setOpen(open == 0 ? 1 : 0);
    const toValue = open;


    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: false
    }).start();


  }

  const colheitaStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70]
        })
      }
    ]
  }

  const layersStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60]
        })
      }
    ]
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      top: 30,
      paddingTop: 20,
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
      padding: 10,
      alignItems: 'center',
    },
    textInput: {
      fontSize: 12,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#6E7B58',
    },
    graos: {
      fontSize: 50,
      fontWeight: '200',
      color: '#6E7B58',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 150,
      height: 100,
      margin: 20,
    },
    cardText: {
      padding: 5,
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#6E7B58',
    },
    card: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 350,
      height: 100,
      margin: 5,
    },
    fab: {
      margin: 5,
      right: 0,
      bottom: 0,
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      shadowRadius: 10,
      shadowColor: '#00213B',
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 10,
      }
    },
    submenu: {
      margin: 10,
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
      backgroundColor: '#00213B'
    },
    fabmenu: {
      backgroundColor: '#00213B'
    },
    div: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    arrow: {
      position: 'absolute',
      top: 20,
      left: 10,
    },
  });




  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.arrow} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="arrow-undo" size={30} color="#79B078" />
        </Pressable>
        <Text style={cssTalhao.title}>Talhão A</Text>
        <Text style={styles.text}>Confira as estatisticas do seu talhão</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.div}>
          <View style={styles.button}>
            <Text style={styles.textInput}>QNTD. PLANTAS</Text>
            <Text style={styles.graos}>50</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.textInput}>GRÃOS POR PLANTAS</Text>
            <Text style={styles.graos}>5</Text>
          </View>
        </View>
        <View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Estimativa de produtividade</Text>
          <Text style={styles.graos}>120.000</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Produtividade real</Text>
          <Text style={styles.graos}>120.000</Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('CadastroInfo')}>
        <Animated.View style={[styles.fab, styles.submenu, layersStyle]}>
          <AntDesign name="addfile" size={20} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.fab, styles.fabmenu, rotation]}>
          <Ionicons name='add' size={24} color='#fff' />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
    </>
  );
}
