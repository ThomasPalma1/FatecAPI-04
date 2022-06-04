import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'

const MainCard = (props) => {

    const Icon = () => {
        if(props.icon === 'morning'){
            return(
                <AntDesign style={styles.cardIcon} name="arrowup" size={40} color="white" />
            )   
        }
        if(props.icon === 'night'){
            return(
                <AntDesign style={styles.cardIcon} name="arrowdown" size={40} color="white" />
            )   
        }         
    }

    return(
        <View style={[styles.card, {backgroundColor: props.backgroundColor}]}>
            <Text style={styles.cardHourText}>{props.title}</Text>
                <Icon></Icon>
            <Text style={styles.cardTemparatureText}>{props.temperature}</Text>
         </View>
    )
}

const styles = StyleSheet.create({   
    card:{    
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      margin: 10,
      width: 160,
      height: 210,
    },
    cardHourText:{
      color: 'white',
      margin: 15,
      fontSize: 20,
      textAlign: 'center'
    },
    cardTemparatureText:{
      color: 'white',
      margin: 15,
      fontSize: 20,
    },
    cardIcon: {
      color: 'white',
      margin: 15,
    },  
  });

export default MainCard;