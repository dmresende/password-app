import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    style={styles.logo}
                    source={require('../../assets/image/logo.png')}
                />
            </View>

            <Animatable.View
                delay={1000}
                animation='fadeInUp'
                style={styles.containerForm}
            >

                <Text style={styles.title}>Gere senhas com um toque</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity 
                onPress={() => navigation.navigate('SignIn')}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3142'

    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#2D3142',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: '100%',
        resizeMode: 'contain'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#EF8354',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})
