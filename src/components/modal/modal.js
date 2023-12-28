import { Text, View, TouchableOpacity, Pressable, Alert, Image } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";
import { showCopyAlert, showSavedAlert } from "../alerts/alerts";
import { styles } from "./styles";



export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        await saveItem('@pass', password)

        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada!</Text>

                <Pressable
                    style={styles.innerPassword}
                    onLongPress={() => showCopyAlert(handleCopyPassword)}>

                    <Text style={styles.text}>{password}</Text>

                    <Image style={styles.imgCopy} source={require("../../assets/image/copy.png")} />

                </Pressable>
                <Text style={styles.textInfor}>Pressione e segure para copiar a senha</Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonSave]}
                        onPress={() => showSavedAlert(handleCopyPassword)}
                    >

                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



