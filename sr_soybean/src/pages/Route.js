import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home'
import SettingsScreen from '../pages/Profile/Profile';
import AddTalhoesScreen from '../pages/Talhoes/addTalhoes';
import TalhoesScreen from '../pages/Talhoes/Talhoes';
import Ionicons from 'react-native-vector-icons/Ionicons';




const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Configuracoes" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const TalhoesStack = createNativeStackNavigator();

function TalhoesStackScreen() {
  return (
    <TalhoesStack.Navigator>
      <TalhoesStack.Screen name="Talhoes" component={TalhoesScreen} />
      <TalhoesStack.Screen name="addTalhoes" component={AddTalhoesScreen} />
    </TalhoesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Layers" component={TalhoesStackScreen}
        options={{
          tabBarLabel: 'Talhões',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Settings" component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>

  );
}
