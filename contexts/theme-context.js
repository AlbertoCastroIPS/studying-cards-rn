import {
	createContext,
	useEffect,
	useReducer,
} from 'react'
import { useColorScheme } from 'react-native'
import { useVisible } from '../hooks'
import { DarkColors, LightColors } from '../utils/colors'

const TurnOnDarkThemeAction = 'turn-on-dark-theme'
const TurnOffDarkThemeAction = 'turn-off-dark-theme'

const defaultTheme = {
	isDarkThemeOn: false,
	toggleDarkTheme: ()=>{},

	...LightColors,
}

export const ThemeContext = createContext(defaultTheme)

function themeReducer(state, action) {
	const needToTurnOnDarkTheme = action == TurnOnDarkThemeAction

	if (needToTurnOnDarkTheme) {
		return {
			...state,
			...DarkColors,
		}
	}

	return {
		...state,
		...LightColors,
	}
}

export default function ThemeContextComponent({
	children,
}) {
	const colorScheme = useColorScheme()
	const [isDarkThemeOn, , , toggleDarkTheme, setIsDarkThemeOn] = useVisible(getDarkThemeOnBasedOnSystem())
	const [state, dispatch] = useReducer(themeReducer, defaultTheme)

	useEffect(() => {
		const action = isDarkThemeOn ? TurnOnDarkThemeAction : TurnOffDarkThemeAction
		dispatch(action)
	}, [isDarkThemeOn])

	useEffect(() => {
		setIsDarkThemeOn(getDarkThemeOnBasedOnSystem())
	}, [colorScheme])

	function getDarkThemeOnBasedOnSystem() {
		return colorScheme == 'dark'
	}

	return <ThemeContext.Provider
		value={{
			...state,
			isDarkThemeOn,
			toggleDarkTheme,
		}}
	>
		{children}
	</ThemeContext.Provider>
}