import { StyleSheet, Text, View, TouchableOpacity, Pressable, Alert, Image } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";


export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        await saveItem('@pass', password)

        // Alert.alert('Atenção', 'Senha salva com sucesso!');
        handleClose();
    }

    //rafatorar alerts
    const showCopyAlert = () => {
        Alert.alert(
            'Confirmação',
            'Senha copiada com sucesso!',
            [
                { text: 'Ok', onPress: handleCopyPassword }
            ],
        );
    };

    const showSalvedAlert = () => {
        Alert.alert(
            'Confirmação',
            'Senha Salva com sucesso!',
            [
                { text: 'Ok', onPress: handleCopyPassword }
            ],
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada!</Text>

                <Pressable style={styles.innerPassword} onLongPress={showCopyAlert}>

                    <Text style={styles.text}>
                        {password}
                    </Text>
                    <Image style={styles.imgCopy} source={require("../../assets/copy.png")} />
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonSave]}
                        onPress={showSalvedAlert}
                    >

                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '85%',
        padding: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1d1d1d',
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: '#1d1d1d',
        width: '90%',
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    imgCopy: {
        width: 20,
        height: 20,
        padding: 0
    },
    text: {
        color: '#FFF',
        textAlign: 'center'
    },
    buttonArea: {
        flexDirection: "row",
        width: '90%',
        marginTop: 8,
        alignContent: 'center',
        justifyContent: 'space-between',

    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 14,
        marginTop: 14,
        padding: 8,
    },
    buttonText: {},
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,
    },
    buttonSaveText: {
        color: '#FFF',
        fontWeight: 'bold',
    }
})

