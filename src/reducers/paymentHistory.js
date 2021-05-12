const initialState = {
  loading: false,
  error: false,
  success: false,
  paymentHistory: []
};

const paymentHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PAYMENT_HISTORY_PENDING":
      return {
        ...state,
        loading: true
      };
    case "FETCH_PAYMENT_HISTORY_FULFILLED":
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        paymentHistory: action.payload.data.data.paymentHistory
      };
    case "FETCH_PAYMENT_HISTORY_REJECTED":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};


export default paymentHistoryReducer;