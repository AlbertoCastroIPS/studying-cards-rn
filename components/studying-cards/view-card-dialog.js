import { useContext } from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native'
import { ThemeContext } from '../../contexts'
import { MainButton } from '../buttons'
import { Dialog } from '../dialogs'

export default function ViewCardDialog({
    card,
    onClose,
    onEdit,
}) {
    const hasCard = card != null && card != undefined

    if (!hasCard) {
        return null
    }

    const {normalText} = useContext(ThemeContext)
    const {name, text} = card

    return <Dialog
        title={name}
        onClose={onClose}
    >
        <View style={styles.container}>
            <ScrollView>
                <Text style={{
                    ...styles.text,
                    color: normalText,
                }}>
                    {text}
                </Text>
            </ScrollView>
            <MainButton
                label='Edit'
                style={styles.button}
                onPress={onEdit}
            />
        </View>
    </Dialog>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        paddingVertical: '1rem',
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1rem',
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
    }
})