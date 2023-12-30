import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/router';
import { StatusBar } from 'react-native';
import {theme} from './src/styles/theme'; 

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.secondary} barStyle='light-content'/>

      <Routes />

    </NavigationContainer>
  )
}