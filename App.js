import {
    NavigationContainer,
    DefaultTheme,
} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {
    Themes,
    Theme,
    Topic,
} from './components/screens'
import {
    ThemesContextComponent,
    ThemeContextComponent,
    ThemeContext,
} from './contexts'

const Stack = createNativeStackNavigator()

export default function App() {
    return <ThemesContextComponent>
        <ThemeContextComponent>
            <ThemeContext.Consumer>
                {({mainBackground}) =>
                    <NavigationContainer
                        theme={{
                            ...DefaultTheme,
                            colors: {
                                ...DefaultTheme.colors,
                                background: mainBackground,
                            }
                        }}>
                        <Stack.Navigator
                            screenOptions={{headerShown: false}}>
                            <Stack.Screen
                                name='home'
                                component={Themes}
                            />
                            <Stack.Screen
                                name='theme'
                                component={Theme}
                            />
                            <Stack.Screen
                                name='topic'
                                component={Topic}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                }
            </ThemeContext.Consumer>
        </ThemeContextComponent>
    </ThemesContextComponent>
}
