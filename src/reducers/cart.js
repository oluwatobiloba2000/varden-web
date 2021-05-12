const intialState = {
  cart: [],
  loading: false,
  success: false,
  error: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  isDeleting: false,
  hasDeleted: false,
  isDeleteError: null
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART_PENDING":
      return {
        ...state,
        isFetching: true,
        loading: true
      };
    case "ADD_TO_CART_FULFILLED":
      return {
        ...state,
        loading: false,
        isFetching: true,
        success: true,
        cart: action.payload
      };
    case "ADD_TO_CART_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };
    case "FETCH_CART_PENDING":
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_CART_FULFILLED': 
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        cart: action.payload
      }
    case 'FETCH_CART_REJECTED':
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        isError: true,
      }
    case 'DELETE_CART_ITEM_PENDING': 
      return {
        ...state,
        isDeleting: true,
      }
    case 'DELETE_CART_ITEM_FULFILLED':
      return {
        ...state,
        isDeleting: false,
        hasDeleted: true,
      }
    case 'DELETE_CART_ITEM_REJECTED':
      return {
        ...state,
        isDeleting: false,
        hasDeleted: false,
        isDeleteError: action.error
      }
    case 'UPDATING_CART_PENDING':
      return {
        ...state,
        isCartUpdating: true,
      }
    case 'UPDATING_CART_FULFILLED': 
      return {
        ...state,
        isCartUpdating: false,
        isCartUpdated: true
      }
    case 'UPDATING_CART_REJECTED':
      return {
        ...state,
        updatingError: 'failed to update',
      }
    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
