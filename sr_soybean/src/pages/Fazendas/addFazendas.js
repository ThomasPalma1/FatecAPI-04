import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {cssFazenda} from '../../../assets/css/cssFazenda';
import config from '../../../config/config';

export default function AddFazendaScreen() {

    const [nome, setNome] = useState(null);
    const [ccir, setCcir] = useState(null);

    //Envio do form
  async function sendForm(){
    let response=await fetch(`${config.URL}/createFazenda`,{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nome: nome
      })

    })
  }

    return (
        <View style={cssFazenda.container}>

            <StatusBar style="auto" />


            <Text style={cssFazenda.title1}>Qual o nome da sua Fazenda?</Text>

            <Text style={cssFazenda.title}>Digite o nome da sua fazenda</Text>
            <TextInput style={cssFazenda.textInput} placeholder='Digite o nome da sua fazenda...' onChangeText={text => setNome(text)} />

            <Text style={cssFazenda.title}>CCIR</Text>
            <TextInput style={cssFazenda.textInput} placeholder='Digite seu número de CCIR...' onChangeText={text => setCcir(text)} />


            
            <TouchableOpacity style={cssFazenda.talhao_button} onPress={()=>sendForm()}>
                <Text style={cssFazenda.talhao_button}>Salvar</Text>
        </TouchableOpacity>

        </View>


    );
}