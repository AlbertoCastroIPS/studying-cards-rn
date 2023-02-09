import {
    useEffect,
    useState
} from 'react'
import { isStringEmpty } from '../utils/string'

export default function useForm(initialData) {
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState({})

    function setField(fieldName, value) {
        const newData = {...data}
        newData[fieldName] = value
        setData(newData)
    }

    function verifyFields() {
        const newErrors = {}

        for (const key in data) {
            const value = data[key]
            if (isStringEmpty(value)) {
                newErrors[key] = `${key} is required`
            }
        }

        setErrors(newErrors)

        const areFieldsValid = Object.keys(newErrors).length == 0
        return areFieldsValid
    }

    useEffect(() => {
        const hasErrors = Object.keys(errors).length != 0
        if (hasErrors) {
            verifyFields()
        }
    }, [data])

    return [data, setField, verifyFields, errors]
}