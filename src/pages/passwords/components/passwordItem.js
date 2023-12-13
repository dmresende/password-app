import React from "react";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";

export function PasswordItem({ data, removePassword }) {

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
                <Text style={styles.text}>{data}</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0E0E0E',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#FFF'
    }

})