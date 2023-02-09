import {
	View,
	StyleSheet,
} from 'react-native'
import { Modal } from '../dialogs'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts'

export default function Container({
	children,
}) {
	const {dialogBackground} = useContext(ThemeContext)

	return <Modal>
		<View style={{
			...styles.container,
			backgroundColor: dialogBackground,
		}}>
			{children}
		</View>
	</Modal>
}

const styles = StyleSheet.create({
	container: {
		width: '80%',
		height: '100%',
		paddingVertical: '3rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
})