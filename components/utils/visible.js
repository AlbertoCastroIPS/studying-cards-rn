import {
    View,
} from 'react-native'

export default function Visible({
    visible,
    children
}) {
    return visible ?
        children :
        null;
}