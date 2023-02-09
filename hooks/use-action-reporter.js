import {
    useEffect
} from 'react'

export default function useActionReporter({
    trigger,
    callback,
}) {
    useEffect(() => {
        if (trigger) {
            callback()
        }
    }, [trigger])
}