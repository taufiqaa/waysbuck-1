import React from "react"

export const UserContext = React.createContext()
const defaultState = {
    isLogin: false,
    user: {}
}

function reducer(user, action) {
    const { type, payload } = action

    switch (type) {
        case 'USER_SUCCESS':
        case 'LOG_IN':
            return {
                isLogin: true,
                user: payload
            }
        case 'AUTH_ERR':
        case 'LOG_OUT':
            return {
                isLogin: false,
                user: {}
            }
        default: throw new Error()
    }
}

export function UserContextProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, defaultState)

    return (
        <UserContext.Provider value={ [state, dispatch] }>
            { children }
        </UserContext.Provider>
    )
}
