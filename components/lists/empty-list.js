import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import { DiceTwo } from 'react-native-unicons'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts'

export default function EmptyList() {
    const {lightText} = useContext(ThemeContext)

    return <View style={styles.emptyList}>
        <DiceTwo
            height={128}
            width={128}
            style={{color: lightText}} />
        <Text style={{
            ...styles.message,
            color: lightText,
        }}>
            Nothing here!
        </Text>
    </View>
}

const styles = StyleSheet.create({
    emptyList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    message: {
        fontSize: '1.25rem',
    }
})