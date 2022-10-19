import { SET_LOADING } from './AuthTypes'

const authReducer = (state: any, action: any) => {
  const { type, payload } = action
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      }

    default:
      return state
  }
}

export default authReducer
