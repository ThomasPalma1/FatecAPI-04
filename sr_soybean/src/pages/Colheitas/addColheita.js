import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity  } from 'react-native';
import {cssColheita} from '../../../assets/css/cssColheita';



export default function App() {

  const [sementescolhidas, setSementescolhidas] = useState('null');
  const [produtividadereal, setProdutividadereal] = useState('null');
  const [perdas, setPerdas] = useState('null');
  

async function sendForm(){

}

  return (
    <View style={cssColheita.container}>
        <StatusBar hidden />
        <Text style={cssColheita.title}> Colheita </Text>
        <Text style={cssColheita.subtitle}> Sementes Colhidas(kg) </Text>
        <TextInput style={cssColheita.textInput} onChangeText={text=>setSementescolhidas(text)}/>
        <Text style={cssColheita.subtitle}> Produtividade Real </Text>
        <TextInput style={cssColheita.textInput} onChangeText={text=>setProdutividadereal(text)}/>
        <Text style={cssColheita.subtitle}> Perdas </Text>
        <TextInput style={cssColheita.textInput} onChangeText={text=>setPerdas(text)}/>


        <TouchableOpacity style={cssColheita.buttonVoltar} onPress={()=>sendForm()}>
          <Text style={cssColheita.buttonText}>Voltar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={cssColheita.buttonOk} onPress={()=>sendForm()}>
          <Text style={cssColheita.buttonText}>OK</Text>
        </TouchableOpacity>
    </View>
  );
}