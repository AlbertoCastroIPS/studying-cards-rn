import { useContext } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import { ThemeContext } from '../../contexts'
import Header from './header'
import Modal from './modal'

export default function Dialog({
    title,
    children,
    onClose,
}) {
    const {dialogBackground} = useContext(ThemeContext)

    return <Modal>
        <View style={{
            ...styles.dialog,
            backgroundColor: dialogBackground,
        }}>
            <Header
                title={title}
                onClose={onClose}
            />
            {children}
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    dialog: {
        height: '90%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: '2.5rem',
        paddingHorizontal: '2rem',
    },
})