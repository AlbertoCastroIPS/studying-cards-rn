import { useContext } from 'react'
import {
	StyleSheet,
	Text,
} from 'react-native'
import { ThemeContext } from '../../contexts'
import { Dialog } from '../dialogs'
import { Visible } from '../utils'

export default function About({
	onClose,
	visible,
}) {
	const {normalText} = useContext(ThemeContext)

	return <Visible visible={visible}>
		<Dialog
			onClose={onClose}
			title='About'
		>
			<Text style={{
				...styles.text,
				color: normalText,
			}}>
				This application was developed using React Native
			</Text>
		</Dialog>
	</Visible>
}

const styles = StyleSheet.create({
	text: {
		marginTop: '1rem',
		fontSize: '1.25rem',
	},
})