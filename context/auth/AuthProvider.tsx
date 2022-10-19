import React, { FC, useReducer } from 'react'
import AuthContext from './AuthContext'
import authReducer from './AuthReducer'
import { SET_LOADING } from './AuthTypes'

const Provider = AuthContext.Provider

const initialState = {
  loading: false,
  user: {},
  error: {},
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  console.log(Provider)
  // functions
  const userLogin = () => {
    dispatch({ type: SET_LOADING })
  }

  const authState = {
    ...state,
    userLogin,
  }

  return <Provider value={authState}>{children}</Provider>
}
