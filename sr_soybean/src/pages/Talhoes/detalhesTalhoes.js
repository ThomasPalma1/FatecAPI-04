
import React, { useEffect, useState } from "react";
import config from "../../../config/config_config";
import {
  Alert,
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
import { useTheme } from "react-navigation";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from 'react-native'  
export default function FazendasScreen({ navigation }) {

  const [open, setOpen] = useState(0);
  const animation = new Animated.Value(open);
  const [talhoes, setTalhoes] = useState([]);
  const [prodEstimada, setProdutividadeEstimada] = useState([]);
  const [prodReal, setProdutividadeReal] = useState([]);
  const [custo, setCustos] = useState([])


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
      textAlign:'center',
      margin: 2
    },
    buttonCard:{
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 250,
      height: 100,
      margin: 3,
    },
    graos: {
      fontSize: 40,
      fontWeight: '200',
      color: '#6E7B58',
      textAlign:'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderColor: '#6E7B58',
      borderStyle: 'solid',
      borderRadius: 16,
      borderWidth: 2,
      width: 170,
      height: 100,
      margin: 3,
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
      height: 140,
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


  useEffect(() => {
    fetch(`${config.URL}/readTalhaos`, {
      method: "GET",
      cache: "no-cache",
    })
    .then((response) => response.json())
    .then((data) => {
        const nome = data.talhoes[0].nomeCampo
        const id =  data.talhoes[0].id
      //console.log(eventsTalhao)
      setTalhoes({nome, id});
    })
    .catch((error) => {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar os dados do Talhão");
    })

    fetch(`${config.URL}/readProdEstimada`, {
      method: "GET",
      cache: "no-cache",
    })
    .then((response) => response.json())
    .then((data) => {
       const graosPlantas = data.produtividade[3].graosVagem
       const ProdutividadeEstimada = data.produtividade[3].prodEstimada
       const convert = ProdutividadeEstimada.toFixed(2)
       const prodCorrect = convert.toString().replace(".", ",") + `                                              Sacos/Hectare`
       const id = data.produtividade[3].id
       setProdutividadeEstimada({graosPlantas,prodCorrect,id});
    })
    .catch((error) => {
      console.log(error)
    })
    
    fetch(`${config.URL}/readProdReal`, {
      method: "GET",
      cache: "no-cache",
    })
    .then((response) => response.json())
    .then((data) => {
   
       const graosPlantas = data.colheita[1].graosVagem
       const produtividadeReal = data.colheita[1].prodReal
       const convert = produtividadeReal.toFixed(2)
       const id = data.colheita[1].id
       const prodCorrect = convert.toString().replace(".", ",")+ `                                              Sacos/Hectare`
       setProdutividadeReal({graosPlantas,prodCorrect,id});
    })
    .catch((error) => {
      console.log(error)
    })

    fetch(`${config.URL}/readCustos`, {
      method: "GET",
      cache: "no-cache",
    })
    .then((response) => response.json())
    .then((data) => {
       
       const maoObra = data.custos[0].maoObra
       const maquinas = data.custos[0].maquinas
       const insumos = data.custos[0].insumos
       const sementes = data.custos[0].valorSementes
       const id = data.custos[0].id

       const custoTotal = maoObra+ maquinas+insumos+sementes
       const custoTotalCorrect = custoTotal.toString().replace(".", ",") + ` R$`
       setCustos({custoTotalCorrect, id});
    })
    .catch((error) => {
      console.log(error)
    })
    
  }, [])

  
  const dataGraph = {
      labels: ['Prod Estimada', 'Prod Real', ''],
      datasets: [{
        data:  [1.88,1.33,0], 
      }]
    }


  // const prodEstimadaGraph = (prodEstimada.prodCorrect).toString().replace(",", ".")
  // const prodRealGraph =  (prodReal.prodCorrect).toString().replace(",", ".")
  // const dataGraph = {
  //   labels: ['Produtividade Estimada', 'Produtividade Real'],
  //   datasets: [{
  //     data:  [prodEstimadaGraph, prodRealGraph],
      
  //   }]
  // }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable style={styles.arrow} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="arrow-undo" size={30} color="#79B078" />
        </Pressable>
        <Text style={cssTalhao.title}>{talhoes.nome}</Text>
        <Text style={styles.text}>Confira as estatisticas do seu talhão</Text>
      </View>
     
      <View style={styles.menu}>
        <View style={styles.div}>
          <View style={styles.button}>
            <Text style={styles.textInput}>GRÃOS POR PLANTA ESTIMADO</Text>
            <Text style={styles.graos}>{prodEstimada.graosPlantas}</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.textInput}>GRÃOS POR PLANTA                 REAL</Text>
            <Text style={styles.graos}>{prodReal.graosPlantas}</Text>
          </View>
        </View>
        <View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Estimativa de produtividade</Text>
          <Text style={styles.graos}>{prodEstimada.prodCorrect}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Produtividade real</Text>
          <Text style={styles.graos}>{prodReal.prodCorrect}</Text>
        </View>
      </View>
      <View styles={styles.submenu}>
      <BarChart
        data={dataGraph}
        width={(Dimensions.get('window').width)-20} 
        height={300}
        
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#16c459',
          backgroundGradientTo: '#000000',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
       
      />

      </View>
      <View style={styles.buttonCard}>
            <Text style={styles.textInput}>GASTO TOTAL</Text>
            <Text style={styles.graos}>{custo.custoTotalCorrect}</Text>
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
    </ScrollView>
    
  );
}
