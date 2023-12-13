import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Password } from './pages/passwords';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

// configuração de rotas
export function Routes() {
    return (

        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name='home' />
                        }
                        return <Ionicons size={size} color={color} name='home-outline' />

                    }
                }}
            />

            <Tab.Screen
                name='passwords'
                component={Password}
                options={{
                    tabBarShowLabel: false,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name='lock-closed' />
                        }
                        return <Ionicons size={size} color={color} name='lock-closed-outline' />

                    }
                }}
            />

        </Tab.Navigator>
    )
}