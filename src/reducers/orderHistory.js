const initialState = {
  loading: false,
  error: false,
  success: false,
  orderHistory: []
};

const orderHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDER_HISTORY_PENDING":
      return {
        ...state,
        loading: true
      };
    case "FETCH_ORDER_HISTORY_FULFILLED":
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        orderHistory: action.payload.data.data.ordersHistory
      };
    case "FETCH_ORDER_HISTORY_REJECTED":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};


export default orderHistoryReducer;