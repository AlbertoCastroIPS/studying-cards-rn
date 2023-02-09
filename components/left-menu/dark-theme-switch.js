import {
	useContext,
} from 'react'
import { Switch } from 'react-native'
import { ThemeContext } from '../../contexts'

export default function DarkThemeSwitch() {
	const {isDarkThemeOn, toggleDarkTheme} = useContext(ThemeContext)

	return <Switch
		value={isDarkThemeOn}
		onValueChange={toggleDarkTheme}
	/>
}