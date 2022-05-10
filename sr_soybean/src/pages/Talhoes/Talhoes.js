import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function TalhoesScreen() {
  const [campo, setCampo] = useState([]);
  const [latitudeTalhao, setLatitude] = useState([]);
  const [longitudeTalhao, setLongitude] = useState([]);
  const [areaDoTalhao, setAreaTalhao] = useState([]);

  //Envio do form
  async function sendForm() {
    const resposta = await axios.get("http://192.168.1.117:3000/Talhao");

    setCampo(resposta.data);
    console.log(resposta.data);
  }

  useEffect(() => {
    sendForm();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: "bold" }}>Lista de Talhoes</Text>
      {campo.map((item) => (
        <Text>{item.nomeCampo}</Text>
      ))}
    </View>
  );
}