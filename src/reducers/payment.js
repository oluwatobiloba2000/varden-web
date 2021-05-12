const intialState = {
  orders: [],
  loading: false,
  success: false,
  error: null,
  paymentRef: null
};

const paymentReducer = (state = intialState, action) => {
  switch (action.type) {
    case "MAKE_PAYMENT_PENDING":
      return {
        ...state,
        loading: true
      };
    case "MAKE_PAYMENT_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        orders: action.payload
      };
    case "MAKE_PAYMENT_REJECTED":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: false,
        error: true
      };
    default:
      return {
        ...state
      };
  }
};

export default paymentReducer;
