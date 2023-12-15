import React, { useContext, useReducer } from "react"



export enum UserActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

type UserAction = {
    type: UserActionType;
    payload: {
        name : string
    }
}


type UserState = {
    user: {
        name: string
    } | null
}

const initialState =  { 
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || "{}") : null
}
const AppContext = React.createContext<any>(undefined)

const reducer = (state: UserState, action: UserAction) => {
    const { type, payload } = action    
    switch (type) {
        case UserActionType.LOGIN:
            localStorage.setItem('user', JSON.stringify(payload))
            return {
                ...state,
                user: payload,
            };
        case UserActionType.LOGOUT:
            localStorage.removeItem('user')
            return {
                ...state,
                user: null,
            };
        default:
            return state
    }
}

export const AppWrapper = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={{
        state,
        dispatch
    }}>
        <div>
            {children}
        </div>
    </AppContext.Provider>
}


export function useAppContext(){
    return useContext(AppContext)
}

