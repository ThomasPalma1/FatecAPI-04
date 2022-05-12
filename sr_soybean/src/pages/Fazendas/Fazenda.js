
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Animated, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cssTalhao } from '../../../assets/css/cssTalhao';

export default function FazendasScreen({ navigation }) {

    const [open, setOpen] = useState(0);
    const animation = new Animated.Value(open);


    const toggleMenu = () => {
        setOpen(open == 0 ? 1 : 0);
        const toValue = open;


        Animated.spring(animation, {
            toValue,
            friction: 6,
            useNativeDriver: false
        }).start();


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


    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            top: 30,
            paddingTop: 20,
        },
        logo: {
            width: 80,
            height: 80,
        },
        text: {
            paddingTop: 20,
            fontSize: 20,
            lineHeight: 21,
            fontWeight: 'bold',
            color: '#1C1C1C',
            top: 0,
            textAlign: 'center',
        },
        menu: {
            flex: 3.5,
            display: 'flex',
            backgroundColor: '#79B078',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 10,
            alignItems: 'center',
        },
        textInput: {
            padding: 5,
            fontSize: 20,
            lineHeight: 21,
            fontWeight: 'bold',
            color: '#6E7B58',
            top: 0,
            position: 'relative'
        },
        button: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            backgroundColor: '#FFF',
            borderColor: '#6E7B58',
            borderStyle: 'solid',
            borderRadius: 16,
            borderWidth: 2,
            padding: 10,
            width: 350,
            height: 150,
            margin: 5,
        },
        configuracoes: {
            position: 'relative',
            display: 'flex',
            right: '-45%',
            top: 15,
        },
        fab: {
            margin: 5,
            right: 0,
            bottom: 0,
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
        fabmenu: {
            backgroundColor: '#00213B'
        },
        submenu: {
            margin: 10,
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            backgroundColor: '#00213B'
        },
        options: {
            position: 'relative',
            left: 300,
            top: 20,
        },
        estatisticas: {
            position: 'relative',
        }
    });

    return (
        <>
            <View style={styles.container}>
                <Text style={cssTalhao.title}>Propriedades</Text>
                <Text style={styles.text}>Visualize todas suas propriedades registradas</Text>
            </View>
            <View style={styles.menu}>
                <View styles={styles.submenu}>
                    <View style={styles.buttons}>
                        <Pressable style={styles.options} onPress={() => navigation.navigate('Inicio')}>
                            <MaterialCommunityIcons name="home-plus" size={24} color="black" />
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Inicio')}>
                            <Text style={styles.textInput}>TITULO 1</Text>
                            <Text style={styles.estatisticas}>CCIR: 111.111.111.111-7</Text>
                            <Text>Área: 10 Hectares</Text>
                            <Text>Total de talhões: 10</Text>
                            <Text>CEP: 11.111-111</Text>
                            <Text>Caçapava-SP</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Text style={styles.textInput}>TITULO 2</Text>
                            <Text>CCIR: 111.111.111.111-7</Text>
                            <Text>Área: 10 Hectares</Text>
                            <Text>Total de talhões: 10</Text>
                            <Text>CEP: 11.111-111</Text>
                            <Text>Caçapava-SP</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Text style={styles.textInput}>TITULO 3</Text>
                            <Text>CCIR: 111.111.111.111-7</Text>
                            <Text>Área: 10 Hectares</Text>
                            <Text>Total de talhões: 10</Text>
                            <Text>CEP: 11.111-111</Text>
                            <Text>Caçapava-SP</Text>
                        </Pressable>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('addFazendas')}>
                    <Animated.View style={[styles.fab, styles.submenu, layersStyle]}>
                        <MaterialCommunityIcons name="home-plus" size={24} color="#fff" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <Animated.View style={[styles.fab, styles.fabmenu, rotation]}>
                        <Ionicons name='add' size={24} color='#fff' />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}
