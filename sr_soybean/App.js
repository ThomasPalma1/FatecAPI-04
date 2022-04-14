import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Route from "./src/pages/Route";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {

  return (

    <NavigationContainer>
      <Route />
    </NavigationContainer>

  ); 
}

