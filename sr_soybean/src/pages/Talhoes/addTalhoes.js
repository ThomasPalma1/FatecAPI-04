import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, TextInput, Text, View } from 'react-native';
import {cssTalhao} from '../../../assets/css/cssTalhao';
import DatePicker from 'react-native-datepicker';

export default function AddTalhoesScreen({navigation}) {

  const [campo, setCampo]=useState(null);
  const [latitudeTalhao, setLatitude]=useState(null);
  const [longitudeTalhao, setLongitude]=useState(null);
  const [areaDoTalhao, setAreaTalhao]=useState(null);

 //Envio do form
  async function sendForm(){
    let response=await fetch('http://192.168.1.119:3100/createTalhao',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nome: campo,
        latitude: latitudeTalhao,
        longitude: longitudeTalhao,
        areaTalhao: areaDoTalhao
      })

    })
  }

  return (
    <KeyboardAvoidingView  
     behavior={Platform.OS == "ios" ? "padding" : "height"}
     style={cssTalhao.container}
     keyboardVerticalOffset={222}>

      <ScrollView contentContainerStyle={{alignItems: 'center', width: '100%'}}>

      <View>

        <Text style={cssTalhao.title}>Adicionar talhões</Text>
        <Text style={cssTalhao.subtitle}>Adicione a longitude e latitude de seu campo.</Text>
      </View>

      <View style={cssTalhao.talhao_form}>

        <Text style={cssTalhao.talhao_inputText}>Nome do talhão</Text>
        <TextInput style={cssTalhao.talhao_input} placeholder='Insira o nome do campo.' onChangeText={text=>setCampo(text)}/>

        <Text style={cssTalhao.talhao_inputText}>Longitude</Text>
        <TextInput style={cssTalhao.talhao_input} placeholder='Insira a longitude.'onChangeText={text=>setLatitude(text)}/>

        <Text style={cssTalhao.talhao_inputText}>Latitude</Text>
        <TextInput style={cssTalhao.talhao_input} placeholder='Insira a latitude.'onChangeText={text=>setLongitude(text)}/>  

        <Text style={cssTalhao.talhao_inputText}>Área do talhão (ha)</Text>
        <TextInput style={cssTalhao.talhao_input} placeholder='Insira a área do talhão.' onChangeText={text=>setAreaTalhao(text)}/>  

        <TouchableOpacity style={cssTalhao.talhao_button} onPress={()=>sendForm()}>
          <Text style={cssTalhao.talhao_buttonText}>Salvar</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}