import {
    createContext,
    useReducer,
} from 'react'

const initialState = {
    title: '',
    dispatch: () => {},
    onAdd: () => {},
}

function reducer(state, action) {
    switch (action.type) {
        case 'set-title':
            return {...state, title: action.value}

        case 'set-on-add':
            return {...state, onAdd: action.value}
    }

    return state
}

export const NavigationContext = createContext(initialState);

export default function NavigationContextComponent({
    children,
}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <NavigationContext.Provider value={{...state, dispatch}}>
        {children}
    </NavigationContext.Provider>
}