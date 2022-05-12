import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity  } from 'react-native';
import {cssCustos} from '../../../assets/css/cssCustos';



export default function App() {

  const [maodeobra, setMaodeobra] = useState('null');
  const [maquinas, setMaquinas] = useState('null');
  const [insumos, setInsumos] = useState('null');
  const [valorsementes, setValorSementes] = useState('null');



  return (
    <View style={cssCustos.container}>
        <StatusBar hidden />
        <Text style={cssCustos.title}> Custos </Text>
        <Text style={cssCustos.subtitle}> Mão de Obra </Text>
        <TextInput style={cssCustos.textInput} onChangeText={text=>setMaodeobra(text)}/>
        <Text style={cssCustos.subtitle}> Máquinas </Text>
        <TextInput style={cssCustos.textInput} onChangeText={text=>setMaquinas(text)}/>
        <Text style={cssCustos.subtitle}> Insumos </Text>
        <TextInput style={cssCustos.textInput} onChangeText={text=>setInsumos(text)}/>
        <Text style={cssCustos.subtitle}> Valor das sementes </Text>
         <TextInput style={cssCustos.textInput} onChangeText={text=>setValorSementes(text)}/>

        <TouchableOpacity style={cssCustos.buttonVoltar} onPress={()=>sendForm()}>
          <Text style={cssCustos.buttonText}>Voltar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={cssCustos.buttonOk} onPress={()=>sendForm()}>
          <Text style={cssCustos.buttonText}>OK</Text>
        </TouchableOpacity>
    </View>
  );
}