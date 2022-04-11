import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Route from "./src/pages/Route";



export default function App() {


  return (
    <NavigationContainer >
      <Route />
    </NavigationContainer>
  );
}
