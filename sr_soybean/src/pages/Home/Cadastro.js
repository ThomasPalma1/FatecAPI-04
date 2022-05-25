
import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroInfoScreen({ navigation }) {


    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            paddingTop: 30,
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
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#9DF59B',
            borderColor: '#6E7B58',
            borderStyle: 'solid',
            borderRadius: 16,
            borderWidth: 2,
            padding: 20,
            width: 318,
            height: 110,
            margin: 5,
        },
        arrow: {
            position: 'absolute',
            top: 30,
            left: 10,
          },
    });

    return (
        <>
            <View style={styles.container}>
                <Pressable style={styles.arrow} onPress={() => navigation.navigate('Detalhes')}>
                    <Ionicons name="arrow-undo" size={30} color="#79B078" />
                </Pressable>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/img/icon.png')}
                    />
                </View>
                <Text style={styles.text}>Cadastre as informações sobre o seu talhão</Text>
            </View>
            <View style={styles.menu}>
                <View>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('addAmostra')}>
                        <Text style={styles.textInput}>Amostras</Text>
                        <FontAwesome5 name="seedling" size={40} color="white" />
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('addColheita')}>
                        <Text style={styles.textInput}>Colheita</Text>
                        <FontAwesome5 name="tractor" size={40} color="white" />
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('addCultivo')}>
                        <Text style={styles.textInput}>Cultivo</Text>
                        <FontAwesome5 name="hand-holding-medical" size={40} color="white" />
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('addProdutividade')}>
                        <Text style={styles.textInput}>Produtividade</Text>
                        <FontAwesome5 name="chart-pie" size={40} color="white" />
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('addCusto')}>
                        <Text style={styles.textInput}>Custos</Text>
                        <FontAwesome5 name="dollar-sign" size={40} color="white" />
                    </Pressable>
                </View>
            </View>
        </>
    );
}
