import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile';
import Talhoes from '../pages/Talhoes/Talhoes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import addTalhoes from './Talhoes/addTalhoes';


const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Talhoes" component={TalhoesStackScreen}
        options={{
          tabBarLabel: 'Talhões',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }} />
     
    </Tab.Navigator>

  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Inicio' component={Home} />
    </HomeStack.Navigator>
  );
}

const TalhoesStack = createNativeStackNavigator();

function TalhoesStackScreen() {
  return (
    <TalhoesStack.Navigator>
      <TalhoesStack.Screen name="Talhoes" component={Talhoes} />
      <TalhoesStack.Screen name="addTalhoes" component={addTalhoes} />
    </TalhoesStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}