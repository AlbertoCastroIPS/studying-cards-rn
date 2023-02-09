import {
    StyleSheet,
    View,
} from 'react-native'

import Title from './title'
import { CloseButton } from '../buttons'

export default function Header({
    title,
    onClose,
}) {
    return <View style={styles.header}>
        <Title text={title} />
        <CloseButton onPress={onClose} />
    </View>
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})