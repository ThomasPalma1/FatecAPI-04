import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Talhoes from './Talhoes/Talhoes';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Talhoes" component={Talhoes} 
      options={{
        tabBarLabel: 'Talhões',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="layers-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>

  );
}