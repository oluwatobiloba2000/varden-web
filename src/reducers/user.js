const initialState = {
  loading: false,
  error: false,
  user: {},
  isUserUpdating: false,
  isUserError: null,
  isUserUpdated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_PENDING":
      return {
        ...state,
        loading: true
      };
    case "FETCH_USER_FULFILLED":
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload.data.data
      };
    case "FETCH_USER_REJECTED":
      return {
        ...state,
        loading: false,
        error: true
      };
    case 'UPDATE_USER_PENDING': 
      return {
        ...state,
        isUserUpdating: true,
      }
    case 'UPDATE_USER_FULFILLED':
      return {
        ...state,
        isUserUpdating: false,
        isUserUpdated: true,
        user: action.payload.data.data
      }
    case 'UPDATE_USER_REJECTED': 
    console.log('Rejected action reducer', action.payload)
      return {
        ...state,
        isUserUpdating: false,
        isUserUpdated: false,
        isUserError: true,
      }
    default:
      return state;
  }
};


export default userReducer;