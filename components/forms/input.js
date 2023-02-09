import { useContext } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native'
import { ThemeContext } from '../../contexts'
import { isStringEmpty } from '../../utils/string'
import { Visible } from '../utils'
import Error from './error'
import InputContainer from './input-container'

export default function Input({
    label,
    value,
    onValueChange,
    name,
    autoFocus = false,
    multiline = false,
    style = {},
    placeholder = '',
    rightIcon = ()=>{},
    errors = {},
}) {
    const {errorText, mainBackground, inputBorder, normalText} = useContext(ThemeContext)
    const error = errors[name]
    const hasError = !isStringEmpty(error)

    function handleChange(newValue) {
        onValueChange(name, newValue)
    }

    function getInputBackgroundStyle() {
        const inputBackgroundStyle = {
            ...styles.inputBackground,
            backgroundColor: mainBackground,
            borderColor: inputBorder,
            ...style,
        }

        if (hasError) {
            inputBackgroundStyle.borderColor = errorText
        }

        return inputBackgroundStyle
    }

    return <InputContainer
        label={label}>
            <View style={getInputBackgroundStyle()}>
                {rightIcon({style: {
                    ...styles.rightIcon,
                    color: normalText,
                }})}
                <TextInput
                    autoFocus={autoFocus}
                    multiline={multiline}
                    textAlignVertical='top'
                    value={value}
                    numberOfLines={5}
                    onChangeText={handleChange}
                    style={{
                        outline: 'none',
                        color: normalText,
                    }}
                    placeholder={placeholder}
                />
            </View>
            <Visible visible={hasError}>
                <Error
                    text={error}
                    style={styles.error}
                />
            </Visible>
    </InputContainer>
}

const styles = StyleSheet.create({
    inputBackground: {
        padding: '0.9rem',
        borderRadius: 10,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
    },
    rightIcon: {
        marginRight: 5,
    },
    error: {
        marginTop: 0,
    }
})