import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Talhoes from "./Talhoes/Talhoes";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import { Screen } from "react-native-screens";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Screen>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Talhoes"
          component={Talhoes}
          options={{
            tabBarLabel: "Talhões",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="layers-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Configurações",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </Screen>
  );
}
