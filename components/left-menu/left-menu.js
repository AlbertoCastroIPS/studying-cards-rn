import {
	Home,
	InfoCircle,
	Moon,
} from 'react-native-unicons'
import Container from './container'
import Item from './item'
import { Visible } from '../utils'
import { View } from 'react-native'
import CloseButton from './close-button'
import About from './about'
import { useVisible } from '../../hooks'
import DarkThemeSwitch from './dark-theme-switch'

export default function LeftMenu({
	onGoHome,
	visible,
	onClose,
}) {
	const [isAboutVisible, showAbout, hideAbout] = useVisible(false)

	return <Visible visible={visible}>
		<Container>
			<View>
				<CloseButton
					onClose={onClose}
				/>
				<Item
					text='Home'
					icon={<Home />}
					onPress={onGoHome}
				/>
				<Item
					text='Dark theme'
					icon={<Moon />}
					onPress={() => {}}
					rightComponent={<DarkThemeSwitch />}
				/>
			</View>
			<Item
				text='About'
				icon={<InfoCircle />}
				onPress={showAbout}
			/>
		</Container>
		<About
			visible={isAboutVisible}
			onClose={hideAbout}
		/>
	</Visible>
}