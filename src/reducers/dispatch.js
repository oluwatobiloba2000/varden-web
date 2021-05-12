const initialState = {
  loading: false,
  success: false,
  error: false,
  data: {},

  isVerifying: false,
  isVerified: false,
  isVerifyFailed: null,
};

const dispatchRider = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_DISPATCHER_PENDING":
      return {
        ...state,
        loading: true
      };
    case "CREATE_DISPATCHER_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload.data.data
      };
    case "CREATE_DISPATCHER_REJECTED":
    console.log(action.payload)
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case "VERIFY_DISPATCH_PENDING": 
      return {
        ...state,
        isVerifying: true,
      }
    case "VERIFY_DISPATCH_FULFILLED": 
      return {
        ...state,
        isVerified: true,
      }
    case "VERIFY_DISPATCH_REJECTED":
     console.log(action.payload)
      return {
        ...state,
        isVerifyFailed: "failed to verify dispatch rider",
      }
    case "FETCH_DISPATCHER_PENDING":
        return {
          ...state,
          loading: true
        };
    case "FETCH_DISPATCHER_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload.data.data
      };
    case "FETCH_DISPATCHER_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};

export default dispatchRider;
