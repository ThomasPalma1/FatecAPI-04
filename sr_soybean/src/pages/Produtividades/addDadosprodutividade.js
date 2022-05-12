import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {cssDadosProdutividade} from '../../../assets/css/cssDadosProdutividade';

export default function App() {

  const [pesograos, setPesograos] = useState('null');
  const [plantasmetros, setPlantasmetros] = useState('null');
  const [distancia, setDistancia] = useState('null');
  const [vagensplantas, setVagensplantas] = useState('null');
  const [qtdgraos, setQtdgraos] = useState('null');
  const [qtdvagens, setQtdvagens] = useState('null');

async function sendForm(){

}

  return (
    <View style={cssDadosProdutividade.container}>
        <StatusBar hidden />
        <Text style={cssDadosProdutividade.title}>    Dados da Produtividade </Text>
        <Text style={cssDadosProdutividade.subtitle}> Peso de mil grãos </Text>
        <TextInput style={cssDadosProdutividade.textInput} onChangeText={text=>setPesograos(text)}/>
        <Text style={cssDadosProdutividade.subtitle}> Qtd. Plantas em 10 metros </Text>
        <TextInput style={cssDadosProdutividade.textInput} onChangeText={text=>setPlantasmetros(text)}/>
        <Text style={cssDadosProdutividade.subtitle}> Distância entre linhas</Text>
        <TextInput style={cssDadosProdutividade.textInput} onChangeText={text=>setDistancia(text)}/>
        <Text style={cssDadosProdutividade.subtitle}> Vagens por plantas </Text>
        <TextInput style={cssDadosProdutividade.textInput} onChangeText={text=>setVagensplantas(text)}/>
        <Text style={cssDadosProdutividade.subtitle}> Qtd. grãos </Text>
        <TextInput style={cssDadosProdutividade.textInput} onChangeText={text=>setQtdgraos(text)}/>
        <Text style={cssDadosProdutividade.subtitle}> Qtd. vagens </Text>
        <TextInput style={cssDadosProdutividade.textInput} onChangeText={text=>setQtdvagens(text)}/>

        <TouchableOpacity style={cssDadosProdutividade.buttonVoltar} onPress={()=>sendForm()}>
          <Text style={cssDadosProdutividade.buttonText}>Voltar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={cssDadosProdutividade.buttonOk} onPress={()=>sendForm()}>
          <Text style={cssDadosProdutividade.buttonText}>OK</Text>
        </TouchableOpacity>
    </View>
  );
}