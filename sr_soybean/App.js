import React from 'react';
import Route from './pages/Route';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return(

    <NavigationContainer>
      <Route/>
    </NavigationContainer>

  );
}