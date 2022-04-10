import React from "react";
import { TextInput, View, StyleSheet } from "react-native";


export default function Input() {

    const [text, onChangeText] = React.useState(text);

    return ( 
      <View>
          <TextInput placeholder={"Insira aqui"} value={text} onChangeText={onChangeText} style={Styles.input}></TextInput>
      </View>
    );
  }

const Styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });