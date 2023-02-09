import { useContext } from 'react'
import {
    StyleSheet,
    View,
    Modal as CoreModal
} from 'react-native'
import { ThemeContext } from '../../contexts'

export default function Modal({
    children,
}) {
    const {dimmedBackground} = useContext(ThemeContext)

    return <CoreModal
        transparent={true}
    >
        <View style={{
            ...styles.modal,
            backgroundColor: dimmedBackground,
        }}>
            {children}
        </View>
    </CoreModal>
}

const styles = StyleSheet.create({
    modal: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        left: 0,
    }
})