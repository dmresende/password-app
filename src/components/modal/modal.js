import { Text, View, TouchableOpacity, Pressable, TextInput, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import { useStorage } from "../../hooks/useStorage";
import { showCopyAlert, showSavedAlert } from "../alerts/alerts";
import { styles } from "./styles";
import { useState } from "react";

export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();
    const [title, setTitle] = useState('');

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        handleClose();
    }

    async function handleSavePassword() {
        if (!title.trim()) {
            Alert.alert("Erro", "Por favor, insira um título para a senha.");
            return;
        }

        const newPassword = {
            id: Date.now(),
            title: title,
            password: password
        };
        
        await saveItem('@pass', newPassword);
        console.log('Nova senha salva:', newPassword);
        showSavedAlert(handleClose);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada!</Text>

                <Pressable
                    style={styles.innerPassword}
                    onLongPress={() => showCopyAlert(handleCopyPassword)}>

                    <Text style={styles.text}>{password}</Text>
                </Pressable>
                <Text style={styles.textInfor}>Pressione e segure para copiar a senha</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite um título para a senha"
                    value={title}
                    onChangeText={setTitle}
                />

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonSave]}
                        onPress={handleSavePassword}
                    >
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
