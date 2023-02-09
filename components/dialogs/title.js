import { useContext } from 'react'
import {
    Text,
    StyleSheet,
} from 'react-native'
import { ThemeContext } from '../../contexts'
import { TitleFont } from '../../utils/fonts'

export default function Title({
    text,
}) {
    const {normalText} = useContext(ThemeContext)

    return <Text style={{
        ...styles.title,
        color: normalText,
    }}>
        {text}
    </Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: '1.5rem',
        fontFamily: TitleFont,
        fontWeight: 'bold',
    }
})