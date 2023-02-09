import { useContext } from 'react'
import {
	Text,
	TouchableHighlight,
	StyleSheet,
	View,
} from 'react-native'
import { ThemeContext } from '../../contexts'

export default function Item({
	text,
	icon,
	onPress,
	rightComponent = null,
}) {
	const {normalText} = useContext(ThemeContext)

	return <TouchableHighlight
		onPress={onPress}
	>
		<View style={{
			...styles.container,
			color: normalText,
		}}>
			{icon}
			<Text style={{
				...styles.text,
				color: normalText,
			}}>
				{text}
			</Text>
			{rightComponent}
		</View>
	</TouchableHighlight>
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingVertical: '1rem',
		paddingLeft: '2rem',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 15,
	},
	text: {
		fontSize: '1.15rem',
	},
})