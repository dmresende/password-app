import { Alert } from "react-native";

export const showCopyAlert = (onPressHandler) => {
    Alert.alert(
        'Confirmação',
        'Senha copiada com sucesso!',
        [
            { text: 'Ok', onPress: onPressHandler }
        ],
    );
};

export const showSavedAlert = (onPressHandler) => {
    Alert.alert(
        'Confirmação',
        'Senha Salva com sucesso!',
        [
            { text: 'Ok', onPress: onPressHandler }
        ],
    );
};

export const showDeleteAlert = (onPressHandler) => {
    Alert.alert(
        'Confirmação',
        'Tem certeza que excluir essa senha?',
        [
            {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'excluir', onPress: onPressHandler },
        ],
        { cancelable: false }
    );
};
