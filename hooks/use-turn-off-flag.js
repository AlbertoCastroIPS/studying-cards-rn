import { useEffect } from 'react'
import { ToggleFlag } from '../contexts/actions'

export default function useTurnOffFlag({
    flag,
    flagName,
    dispatch,
}) {
    useEffect(() => {
        if (flag) {
            dispatch({
                type: ToggleFlag,
                flagName,
            })
        }
    }, [flag])
}