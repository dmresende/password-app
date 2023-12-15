import { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage';

import { PasswordItem } from './components/passwordItem-components';


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
                    renderItem={({ item }) => <PasswordItem data={item} key={undefined}
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
        backgroundColor: '#2D3142',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: '#BFC0C0',
        fontWeight: 'bold'
    },
    content: {
        flex: 1
    },
    list: {
        flex: 1,
        paddingTop: 14,
        margin: 10
    }
})