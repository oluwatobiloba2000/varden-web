import * as Types from '../actions/constants';

const initialState = {
  error: null,
  loading: false,
  success: null,
  data: {}
}

const LoginReducer = (state = initialState, action) => {
  switch(action.type){
    case Types.LOGIN_USER_PENDING: 
      return {
        ...state,
        loading: true,
      }
    case Types.LOGIN_USER_FULFILLED: 
    console.log(action.payload)
      return {
        ...state,
        loading: false,
        success: true,
      }
    case Types.LOGIN_USER_REJECTED: 
    console.log(action)
      return{
        ...state,
        loading: false,
        success: false,
        error: action.error
      }
    case Types.CLEAR_ERROR_MESSAGE:
      return {
        ...initialState
      }
    default:
      return {
        ...state
      }
  }
}

export default LoginReducer;