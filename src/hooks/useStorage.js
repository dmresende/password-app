import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

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
            passwords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (error) {
            console.log('Erro ao salvar', error);
        }
    }

    //remove item storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            //remove item que queremo remover
            let myPasswords = passwords.filter((password) => {
                //retorna lista sem o item removido.
                return (password !== item)
            });


            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;

        } catch (erro) {
            console.log('Eror ao deletar', erro);
        }

    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage