import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal/modal';


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_-+=^'

export function Home() {
    const [size, setSize] = useState(10);
    const [passwordValue, setPasswordValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false)

    function generatorPassword() {
        let password = '';
        // busca caracter aleatorio
        for (let i = 0, n = charset.length; i < size; i++) {
            // charAt pega caracater
            // Math.floor pega valor inteiro
            //Math.random pega valor aleatorio
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        //muda status
        setPasswordValue(password);
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/icon.png")} />
            <StatusBar style="auto" />

            <Text style={styles.title}>{size} caracteres</Text>

            {/* Uma biblioteca de componentes React Native que fornece acesso à IU do sistema para um controle deslizante. */}
            <View style={styles.area}>
                <Slider
                    style={styles.areaSlider}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor='#2D3142'
                    minimumTrackTintColor='#2D3142'
                    thumbTintColor='#4F5D75'
                    value={size}

                    // Propriedade slider que permite fazer a troca do valor
                    onValueChange={(value) => setSize(parseInt(value.toFixed(0), 10))}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={generatorPassword}
            >
                <Text style={styles.buttonText}>
                    Gerar senha
                </Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}  />
            </Modal>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 60,
        width: 200,
        height: 200
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2D3142',
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: '#BFC0C0',
        borderRadius: 8,
        padding: 6,

    },
    areaSlider: {
        height: 50,
    },
    button: {
        // backgroundColor: '#392de9',
        backgroundColor: '#EF8354',
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 18,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});
