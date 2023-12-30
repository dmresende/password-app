import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './styles/theme';
import Welcome from '../src/pages/welcome';
import SignIn from '../src/pages/signIn';
import { Home } from './pages/home';
import { Password } from './pages/passwords/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Configuração de rotas
export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Navegação principal com as abas
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={theme.colors.secondary} name="home" />;
            }
            return <Ionicons size={size} color={theme.colors.secondary} name="home-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="passwords"
        component={Password}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={theme.colors.secondary} name="lock-closed" />;
            }
            return <Ionicons size={size} color={theme.colors.secondary} name="lock-closed-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
