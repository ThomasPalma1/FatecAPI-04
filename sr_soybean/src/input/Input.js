import React from "react";
import { TextInput, View } from "react-native";
import { Styles } from "./styles/Styles.js";

export default function Input() {

    const [text, onChangeText] = React.useState(text);

    return ( 
      <View>
          <TextInput placeholder={"Insira aqui"} value={text} onChangeText={onChangeText} style={Styles.input}></TextInput>
      </View>
    );
  }