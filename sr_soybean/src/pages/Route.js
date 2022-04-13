import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home'
import SettingsScreen from '../pages/Profile/Profile';
import addTalhoesScreen from '../pages/Talhoes/addTalhoes';
import TalhoesScreen from '../pages/Talhoes/Talhoes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View } from 'react-native';



function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const TalhoesStack = createNativeStackNavigator();

function TalhoesStackScreen() {
  return (
    <TalhoesStack.Navigator>
      <TalhoesStack.Screen name="Talhoes" component={TalhoesScreen} />
      <TalhoesStack.Screen name="addTalhoes" component={addTalhoesScreen} />
    </TalhoesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Talhoes" component={TalhoesStackScreen} />
      </Tab.Navigator>
    
  );
}