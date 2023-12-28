import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StatusBar } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal/modal';
import { styles } from './styles';
import { generatePassword } from './controller';
import {theme} from '../../styles/theme';


export function Home() {
    const [size, setSize] = useState(10);
    const [passwordValue, setPasswordValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleGeneratePassword = () => {
        const password = generatePassword(size);
        setPasswordValue(password);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/image/icon.png")} />
            <StatusBar style="auto" />

            <Text style={styles.title}>{size} caracteres</Text>

            {/* Uma biblioteca de componentes React Native que fornece acesso à IU do sistema para um controle deslizante. */}
            <View style={styles.area}>
                <Slider
                    style={styles.areaSlider}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor={theme.colors.secondary}
                    minimumTrackTintColor={theme.colors.secondary}
                    thumbTintColor={theme.colors.outhers}
                    value={size}

                    // Propriedade slider que permite fazer a troca do valor
                    onValueChange={(value) => setSize(parseInt(value.toFixed(0), 10))}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleGeneratePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>
        </View>
    );
}
