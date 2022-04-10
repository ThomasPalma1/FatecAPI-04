import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Talhoes from '../pages/Talhoes/Talhoes'


export default class Fab extends Component{

  animation = new Animated.Value(0);


  toggleMenu = () => {
    const toValue = this.open ? 0 : 1
    console.log(toValue);

    Animated.spring(this.animation, {
      toValue,
      friction: 6,
    }).start();


    this.open = !this.open;
  }



  openTalhoes = () => {
    
  }


  render() {

    const layersStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60]
          })
        }
      ]
    }

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
          })
        }
      ]
    }


    return (



      <View style={styles.container, this.props.style}>
        <TouchableWithoutFeedback  onPress={()=>this.props.navigation.navigate("addTalhoes")}>
          <Animated.View style={[styles.button, styles.submenu, layersStyle]}>
            <Ionicons name='layers' size={20} color='#fff' />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <Ionicons name='add' size={24} color='#fff' />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',

  },
  button: {
    margin: '5px',
    right: 0,
    top: '78vh',
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

