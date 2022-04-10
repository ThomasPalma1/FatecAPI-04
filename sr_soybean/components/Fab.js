import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { FAB } from 'react-native-paper';
import Talhoes from '../pages/Talhoes/Talhoes';


const Fab = () => (
  <FAB
    style={styles.fab}
    
    color='white'
    medium
    icon="plus"
    onPress={()=>this.props.navigation.navigate("Talhoes")}   
  />
);



const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#E2FFD4',
    position: 'absolute',
    display: 'flex',
    margin: 16,
    right: 0,
    bottom: -680,
  },
})

export default Fab;