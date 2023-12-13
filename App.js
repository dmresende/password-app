import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Image  style={styles.logo} source={require("./src/assets/logo.png")}/>
      <StatusBar style="auto" />

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        {/* componente intalado e importado */}
        <Slider
          style={styles.areaSlider}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#000'
          minimumTrackTintColor='#33CC66'
          thumbTintColor='#392de9'
        />
      </View>
      <TouchableOpacity style={styles.button}>
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
  logo:{
    marginBottom: 60,
  },
  title:{
    fontSize:30,
    fontWeight: 'bold',
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#FFF',
    borderRadius:8,
    padding:6,
    
  },
  areaSlider:{
    height: 50,
  },
  button:{
    backgroundColor:'#392de9',
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent: "center",
    borderRadius:8,
    marginBottom:18,
  },
  buttonText:{
    color: '#FFF',
    fontSize:20,
  },
});
