import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function GraficoMenuScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      flex: 1,
      flexDirection: "column",
      paddingTop: 5,
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
    },
    menu: {
      flex: 3.5,
      display: "flex",
      backgroundColor: "#79B078",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 50,
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
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#9DF59B",
      borderColor: "#6E7B58",
      borderStyle: "solid",
      borderRadius: 16,
      borderWidth: 2,
      padding: 10,
      width: 318,
      height: 110,
      margin: 5,
    },
    configuracoes: {
      position: "relative",
      right: "-45%",
      top: 15,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.configuracoes}>
          <Ionicons name="settings-sharp" size={24} color="black" />
        </Pressable>
        <View>
          <Image
            style={styles.logo}
            source={require("../../../assets/img/icon.png")}
          />
        </View>
        <Text style={styles.text}>Bem-vindo Teste!</Text>
      </View>
      <View style={styles.menu}>
        <View styles={styles.submenu}>
          <View style={styles.buttons}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("GraficoFazenda")}
            >
              <Text style={styles.textInput}>Plantação Município</Text>
              <FontAwesome5 name="warehouse" size={40} color="white" />
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Talhoes")}
            >
              <Text style={styles.textInput}>Produtividade Município</Text>
              <FontAwesome5 name="leaf" size={40} color="white" />
            </Pressable>
            {/* <Pressable style={styles.button} onPress={() => navigation.navigate('addCusto')}>
              <Text style={styles.textInput}>Custos</Text>
              <FontAwesome5 name="dollar-sign" size={40} color="white" />
            </Pressable> */}
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("addAreaMunicipio")}
            >
              <Text style={styles.textInput}>Preço do saco da soja</Text>
              <Octicons name="graph" size={40} color="white" />
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.textInput}>Meteorologia</Text>
              <Entypo name="cloud" size={40} color="white" />
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.textInput}>Minha produtividade</Text>
              <Entypo name="cloud" size={40} color="white" />
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.textInput}>Meu Custo de Produção</Text>
              <Entypo name="cloud" size={40} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
