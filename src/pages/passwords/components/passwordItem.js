import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function PasswordItem({ data, removePassword }) {
    const [hidePass, setHidePass] = useState(true);
    const showSaveAlert = () => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que excluir essa senha?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'excluir', onPress: removePassword },
            ],
            { cancelable: false }
        );
    };

    return (
        <View>
            <Pressable style={styles.container} onLongPress={showSaveAlert}>
                <TextInput
                    style={styles.text}
                    secureTextEntry={hidePass}
                // disableFullscreenUI={true}
                >{data}
                </TextInput>

                {/* esconde senha */}
                <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                    {/* condiçao que mostra a troca de icone */}
                    {hidePass ?
                        <Ionicons name="eye-off" color='#ABA7DE' size={25} />
                        :
                        <Ionicons name="eye" color='#ABA7DE' size={25} />
                    }
                </TouchableOpacity>
            </Pressable>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1d1d1d',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#FFF',
    }
})