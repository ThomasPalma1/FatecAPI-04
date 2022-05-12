import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home'
import SettingsScreen from '../pages/Profile/Profile';
import AddTalhoesScreen from '../pages/Talhoes/addTalhoes';
import TalhoesScreen from '../pages/Talhoes/Talhoes';
import LoginScreen from './Login/Login';
import MenuScreen from './Home/Menu';
import CadastroScreen from './Login/Cadastro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapScreen from '../components/map';

export default function App() {

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='Login' component={LoginScreen} />
      <HomeStack.Screen name='Cadastro' component={CadastroScreen} />
      <HomeStack.Screen name='Map' component={MapScreen} />
      <HomeStack.Screen name='Menu' component={MenuScreen} />
      <HomeStack.Screen name="Inicio" component={HomeScreen} />
      <HomeStack.Screen name="addTalhoes" component={AddTalhoesScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Configuracoes" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const TalhoesStack = createNativeStackNavigator();

function TalhoesStackScreen() {
  return (
    <TalhoesStack.Navigator screenOptions={{ headerShown: false }}>
      <TalhoesStack.Screen name="Talhoes" component={TalhoesScreen} />
      <TalhoesStack.Screen name="addTalhoes" component={AddTalhoesScreen} />
    </TalhoesStack.Navigator>
  );
}

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <LoginsStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginsStack.Screen name="Login" component={LoginsScreen} />
      <LoginsStack.Screen name="Cadastro" component={CadastroScreen} />
    </LoginsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();


  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarStyle: { display: "none" },
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
