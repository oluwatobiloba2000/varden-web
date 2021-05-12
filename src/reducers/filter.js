const intialState = {
  produce: [],
  loading: false,
  success: false,
  isFiltered: false,
  error: null,
};

const filterReducer = (state = intialState, action) => {
  // switch (action.type) {
  //   case "FILTER_PRODUCT_PENDING":
  //     return {
  //       ...state,
  //       loading: true,
  //       isFiltered: false
  //     };
  //   case "FILTER_PRODUCT_FULFILLED":
  //     console.log("action", action)
  //     return {
  //       ...state,
  //       loading: false,
  //       success: true,
  //       isFiltered: true,
  //       produces: action.payload
  //     };
  //   case "FILTER_PRODUCT_REJECTED":
  //     console.log(action.payload);
  //     return {
  //       ...state,
  //       loading: false,
  //       success: false,
  //       isFiltered: true,
  //       error: true
  //     };
  //   default:
  //     return {
  //       ...state
  //     };
  // }
};

export default filterReducer;
