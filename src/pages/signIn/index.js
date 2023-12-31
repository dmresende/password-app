import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
    const navigation = useNavigation();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [reload, setReload] = useState(false);



    const handleLogin = () => {
        if (login.trim() !== '' && senha.trim() !== '') {
            setLogin('');
            setSenha('');
            setReload(!reload);

            navigation.navigate('MainTabs', { screen: 'home' })
        } else {
            alert('Por favor, preencha todos os campos.')
        }
    }

    return (
        <View key={reload} style={styles.container}>
            <Animatable.View
                animation='fadeInLeft'
                delay={500}
                style={styles.containerHeader}
            >
                <Text style={styles.message}> Bem-vindo(a) </Text>

            </Animatable.View>
            <Animatable.View
                Animatable='fadeInUp'
                style={styles.containerForm}

            >
                <Text style={styles.title}>Login</Text>
                <TextInput
                    placeholder="seu login"
                    style={styles.input}
                    value={login}
                    onChangeText={(text) => setLogin(text)}>
                </TextInput>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="sua senha"
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry>
                </TextInput>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonTextCadastro}>Não possui uma conta? Cadastre-se</Text>
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
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    containerForm: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title: {
        fontSize: 20,
        marginTop: 28,

    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12.,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#EF8354',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonCadastro: {
        marginTop: 14,
        alignSelf: 'center',

    },
    buttonTextCadastro: {
        color: '#a1a1a1'
    }
})