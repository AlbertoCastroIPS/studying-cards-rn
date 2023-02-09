import { Visible } from '../utils'
import { Input } from '../forms'
import {
	View,
	StyleSheet,
} from 'react-native'
import { IconButton } from '../buttons'
import { Search, Times } from 'react-native-unicons'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts'

export default function SearchInput({
	visible,
	onHide,
	onSearch,
}) {
	const {searchInputBackground, normalText} = useContext(ThemeContext)
	const [search, setSearch] = useState('')

	function handleValueChange(_, value) {
		setSearch(value)
	}

	function hide() {
		setSearch('')
		onHide()
	}

	useEffect(() => {
		onSearch(search)
	}, [search])

	return <Visible visible={visible}>
		<View style={styles.container}>
			<Input
				placeholder='Search'
				rightIcon={Search}
				onValueChange={handleValueChange}
				autoFocus={true}
				style={{
					...styles.input,
					backgroundColor: searchInputBackground,
				}}
			/>
			<IconButton
				onPress={hide}
				style={styles.icon}
			>
				<Times color={normalText} />
			</IconButton>
		</View>
	</Visible>
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	input: {
		marginBottom: 0,
	},
	icon: {
		marginLeft: 10,
	}
})