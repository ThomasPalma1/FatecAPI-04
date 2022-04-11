import React, { Component, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainerRefContext } from '@react-navigation/native';


const Fab = props => {

  const [animation] = useState(new Animated.Value(0))

  const toggleMenu = () => {

    const toValue = this.open ? 0 : 1

    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: true
    }).start()

    this.open = !this.open;

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


  return (

    <View style={{ ...styles.container, ...props.style }}>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.submenu, layersStyle]}>
          <Ionicons name='layers' size={20} color='#fff' />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => { toggleMenu() }}>
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
    position: 'absolute',

  },
  button: {
    margin: '5px',
    right: 0,
    top: '60vh',
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

export default Fab;