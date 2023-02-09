import {
    useState,
} from 'react'

export default function useVisible(initialValue) {
    const [isVisible, setIsVisible] = useState(initialValue)

    function show() {
        setIsVisible(true)
    }

    function hide() {
        setIsVisible(false)
    }

    function toggle() {
        setIsVisible(!isVisible)
    }

    return [
        isVisible,
        show,
        hide,
        toggle,
        setIsVisible,
    ]
}