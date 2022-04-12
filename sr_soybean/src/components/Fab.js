import React, {useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Fab({navigation}) {

  const [open, setOpen] = useState(0);
  const animation = new Animated.Value(open);


  const toggleMenu = () => {
    setOpen(open == 0?1:0);
    const toValue = open;

  
    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: false
    }).start();



    
  }

  console.log(setOpen)



  const layersStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60]
        })
      }
    ]
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  }


  return (



    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('addTalhoes')}>
        <Animated.View style={[styles.button, styles.submenu, layersStyle]}>
          <Ionicons name='layers' size={20} color='#fff' />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Ionicons name='add' size={24} color='#fff' />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //position: 'absolute',
    backgroundColor: 'yellow',
    flex: 1,
  },
  button: {
    margin: 5,
    right: 0,
    top: 400,
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    }
  },
  menu: {
    backgroundColor: '#00213B'
  },
  submenu: {
    margin: 10,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#00213B'
  }
});
