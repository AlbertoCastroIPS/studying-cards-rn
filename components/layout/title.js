import { useContext } from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'
import { ThemeContext } from '../../contexts'
import { TitleFont } from '../../utils/fonts'

export default function Title({title}) {
    const {normalText} = useContext(ThemeContext)

    return <Text
        style={{
            ...styles.title,
            color: normalText,
        }}>
        {title}
    </Text>
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        fontSize: '2rem',
        fontFamily: TitleFont,
        fontWeight: 'bold',
    }
})