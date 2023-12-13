import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_-+=^[]{}'

export default function App() {
  const [size, setSize] = useState(10);
  const [password, setPasswordValue] = useState('')

  function generatorPassword() {
    let password = '';
    // busca caracter aleatorio
    for (let i = 0, n = charset.length; i < size; i++) {
      // charAt pega caracater
      // Math.floor pega valor inteiro
      //Math.random pega valor aleatorio
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    //muda status
    setPasswordValue(password);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./src/assets/logo.png")} />
      <StatusBar style="auto" />

      <Text style={styles.title}>{size} caracteres</Text>

      {/* Uma biblioteca de componentes React Native que fornece acesso à IU do sistema para um controle deslizante. */}
      <View style={styles.area}>
        <Slider
          style={styles.areaSlider}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#000'
          minimumTrackTintColor='#33CC66'
          thumbTintColor='#392de9'
          value={size}

          // Propriedade slider que permite fazer a troca do valor
          onValueChange={(value) => setSize(value.toFixed(0))}

        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={generatorPassword}
      >
        <Text style={styles.buttonText}>
          Gerar senha
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 6,

  },
  areaSlider: {
    height: 50,
  },
  button: {
    backgroundColor: '#392de9',
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
