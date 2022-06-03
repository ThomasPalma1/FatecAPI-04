import React, { useContext, useEffect, useState } from "react";
import config from "../../../config/config_config";
import { StyleSheet, TouchableWithoutFeedback, View, Animated, Text, Pressable, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cssTalhao } from "../../../assets/css/cssTalhao";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default function FazendasScreen({ navigation }) {
  const [open, setOpen] = useState(0);
  const animation = new Animated.Value(open);
  const [fazendas, setFazendas] = useState([]);

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
      position: "absolute",
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
      height: 100,
      margin: 5,
    },
    textCCIR: {
      marginTop: 20,
    },
    configuracoes: {
      position: "relative",
      display: "flex",
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
    options: {
      position: "absolute",
      left: 310,
      top: 10,
    },
    estatisticas: {
      paddingTop: 20,
    },
    arrow: {
      position: "absolute",
      top: 20,
      left: 10,
    },
  });

  //Puxando e setando os dados dos talhões
  // useEffect(() => {
  //   fetch(`${config.URL}/readFazendas`, {
  //     method: "GET",
  //     cache: "no-cache",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const eventsFazendas = [];

  //       for (var j = 0; j < data.fazendas.length; j++) {
  //         eventsFazendas.push({
  //           nome: data.fazendas[j].nomeFazenda,
  //           ccri: data.fazendas[j].ccri,
  //           idFazenda: data.fazendas[j].id,
  //         });
  //       }
  //       //console.log(eventsFazendas)
  //       setFazendas(eventsFazendas);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       Alert.alert("Erro", "Não foi possível carregar os dados das Fazendas");
  //     });
  // }, []);

  return (
    <>
    <View style={styles.container}>
      <Pressable style={styles.arrow} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="arrow-undo" size={30} color="#79B078" />
      </Pressable>
      <Text style={cssTalhao.title}>PROPRIEDADES</Text>
      <Text style={styles.text}>Visualize todas suas propriedades registradas</Text>
    </View>
    <View style={styles.menu}>


<View styles={styles.submenu}>
      <Text style={styles.text}>Gráfico TESTE</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={410} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      </View>

    </View>
    </>
  );
}
