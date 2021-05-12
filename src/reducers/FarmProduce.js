const initialState = {
  produces: [],
  produce: {},
  loading: false,
  success: false,
  error: null,
  isSingleLoading: false,
  isSingleFailed: false,
  isFiltered: false
};

const FarmProduceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "FETCH_PRODUCE_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        produces: action.payload.data.data
      };
    case "FETCH_PRODUCE_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        produces: null,
        error: action.error
      };
    case "FETCH_SINGLE_PENDING":
      return {
        ...state,
        isSingleLoading: true,
      }
    case "FETCH_SINGLE_FULFILLED":
      return {
        ...state,
        isSingleLoading: false,
        isSingleFailed: false,
        produce: action.payload.data.data,
      }
    case "FETCH_SINGLE_REJECTED": 
      return {
        ...state,
        isSingleFailed: true,
        isSingleLoading: false,
      }
    case "FILTER_PRODUCT_PENDING": 
      return {
        ...state,
        loading: true,
        isFiltered: false
      }
    case "FILTER_PRODUCT_FULFILLED":
      console.log(action)
      return {
        ...state,
        loading: false,
        produces: action.payload.data.data,
        isFiltered: true
      }
    case "FILTER_PRODUCT_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
        isFiltered: true
      }
    default:
      return {
        ...state
      };
  }
};

export default FarmProduceReducer;
