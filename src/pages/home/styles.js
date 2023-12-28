import { StyleSheet } from 'react-native';
import {theme}from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2D3142',
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: theme.colors.textInfor,
    borderRadius: 8,
    padding: 6,
  },
  areaSlider: {
    height: 50,
  },
  button: {
    backgroundColor: theme.colors.buttonColor,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: theme.colors.textColor,
    fontSize: 20,
  },
});
