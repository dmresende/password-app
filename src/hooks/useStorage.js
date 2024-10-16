import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = () => {

    //busca itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];

        } catch (error) {
            console.log('Erro ao buscar', error)
            return []
        }
    }

    //salva item storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);
            // Verifica se passwords é um array
            if (!Array.isArray(passwords)) {
                passwords = [];
            }
            // Adiciona o novo valor ao array
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (error) {
            console.log('Erro ao salvar', error);
        }
    }

    //remove item storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);
            // Verifica se passwords é um array
            if (!Array.isArray(passwords)) {
                return [];
            }
            // Remove o item que queremos remover
            let myPasswords = passwords.filter((password) => password.id !== item.id);
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;

        } catch (erro) {
            console.log('Eror ao deletar', erro);
            return [];
        }

    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}
