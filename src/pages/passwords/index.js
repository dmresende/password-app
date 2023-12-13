import { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage';

import { PasswordItem } from './components/passwordItem';


export function Password() {
    const [listPassword, setListPassword] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass');
            setListPassword(passwords);
        }
        loadPasswords();
    }, [focused])


    async function handleDeletePassword(item) {
        //chama função de remover que devolve um valor e coloca nessa variavel
        const password = await removeItem('@pass', item);
        setListPassword(password);
        // alert('Atenção', 'Senha removida com sucesso!')

    }

    const showDeleteAlert = () => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja salvar a senha?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Salvar', onPress: handleCopyPassword },
            ],
            { cancelable: false }
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>

            </View >
            <View style={styles.content}>
                <FlatList
                    style={styles.list}
                    data={listPassword}
                    keyExtractor={(item) => {
                        String(item)
                    }}
                    renderItem={({ item }) => <PasswordItem data={item}
                        removePassword={() => {
                            handleDeletePassword(item)
                        }}

                    />}

                />


            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#392de9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    content: {
        flex: 1
    },
    list: {
        flex: 1,
        paddingTop: 14,
    }
})