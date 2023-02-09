import {
	View,
	StyleSheet,
} from 'react-native'
import { CloseButton as CoreCloseButton } from '../buttons'

export default function CloseButton({
	onClose,
}) {
	return <View style={styles.container}>
		<CoreCloseButton
			onPress={onClose}
		/>
	</View>
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingRight: '2rem',
	},
})