import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  View,
  Animated,
  Text,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cssTalhao } from "../../../assets/css/cssTalhao";
import config from '../../../config/config';


export default function TalhoesScreen({ navigation }) {
  const [open, setOpen] = useState(0);
  const animation = new Animated.Value(open);
  const [talhoes, setTalhoes] = useState([]);

  const toggleMenu = () => {
    setOpen(open == 0 ? 1 : 0);
    const toValue = open;

    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: false,
    }).start();
  };

  const layersStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      flex: 1,
      flexDirection: "column",
      top: 30,
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
      fontWeight: "bold",
      color: "#1C1C1C",
      top: 0,
      textAlign: "center",
    },
    menu: {
      flex: 3.5,
      display: "flex",
      backgroundColor: "#79B078",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 10,
      alignItems: "center",
    },
    textInput: {
      padding: 5,
      fontSize: 20,
      lineHeight: 21,
      fontWeight: "bold",
      color: "#6E7B58",
      top: 0,
    },
    button: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      backgroundColor: "#FFF",
      borderColor: "#6E7B58",
      borderStyle: "solid",
      borderRadius: 16,
      borderWidth: 2,
      padding: 10,
      width: 350,
      height: 150,
      margin: 5,
    },
    configuracoes: {
      position: "relative",
      right: "-45%",
      top: 15,
    },
    fab: {
      margin: 5,
      right: 0,
      bottom: 0,
      position: "absolute",
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      justifyContent: "center",
      alignItems: "center",
      shadowRadius: 10,
      shadowColor: "#00213B",
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 10,
      },
    },
    fabmenu: {
      backgroundColor: "#00213B",
    },
    submenu: {
      margin: 10,
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
      backgroundColor: "#00213B",
    },
  });

  //Puxando e setando os dados dos talhões
 useEffect(() => { fetch(`${config.URL}/readTalhaos`, {
  method: "GET",
  cache: "no-cache",
})
  .then((response) => response.json())
  .then((data) => {
    const eventsTalhao = [];

    for (var j = 0; j < data.talhoes.length; j++){
      eventsTalhao.push({
        'latitude': data.talhoes[j].latitude,
        'longitude': data.talhoes[j].longitude,
        'nome': data.talhoes[j].nomeCampo,
        'areaPlantada': data.talhoes[j].areaPlantada,
        'idTalhao': data.talhoes[j].id
      })
    }
    //console.log(eventsTalhao)
    setTalhoes(eventsTalhao);
  })
  .catch((error) => {
    console.log(error)
    Alert.alert("Erro", "Não foi possível carregar os dados do Talhão");
  });
}, [])    


async function deleteTalhao(idTalhao){
 await fetch(`${config.URL}/deleteTalhao`, {
    method: "DELETE",
    cache: "no-cache",
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({idTalhao}) 
  })
    .then((response) => response.json())
    .then((data) =>{
        console.log(data)
        Alert.alert("Sucesso", "Verificar console do server")
    })
   
}

const excluir = (nome, idTalhao) => {
  Alert.alert(


    null,
    `Excluir o talhao ${nome}?`,
    [
      {  text: "Sim",
      onPress: () => {
        deleteTalhao(idTalhao)
      }
    
    },
    {
      text: "Não",
    }]
  )
}

 //Renderizando a view do Talhão para um card
  const renderItem = ({item}) =>(
  <Pressable style={styles.button}>
    <Text style={styles.textInput}>{item.nome}</Text>
    <Text>Área plantada: {item.areaPlantada} Hectares</Text>
    <Text>Latitude: {item.latitude}</Text>
    <Text>Longitude: {item.longitude}</Text>
    <TouchableOpacity style={cssTalhao.talhao_button} onPress={()=> excluir (item.nome, item.idTalhao)}>
       <Text style={cssTalhao.talhao_buttonText}>Excluir</Text>
    </TouchableOpacity>
  </Pressable>

  )

  return (
    <>
      <View style={styles.container}>
        <Text style={cssTalhao.title}>Talhões</Text>
        <Text style={styles.text}>
          Visualize todas seus talhões registrados
        </Text>
      </View>
      <View style={styles.menu}>
        <View styles={styles.submenu}>
          <View style={styles.buttons}>

            {/* //Puxando a redenrização para exibir na tela */}
          <FlatList
            data={talhoes}
            renderItem={renderItem}
            keyExtractor={item => item.idTalhao}
            />

          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("addTalhoes")}
        >
          <Animated.View style={[styles.fab, styles.submenu, layersStyle]}>
            <Ionicons name="md-layers" size={24} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <Animated.View style={[styles.fab, styles.fabmenu, rotation]}>
            <Ionicons name="add" size={24} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}
