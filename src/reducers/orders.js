const initialState = {
  qrcode: '',
  data: null,
  loading: false,
  isFetching: false,
  error: null
}

const orders = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_ORDERS_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'CREATE_ORDERS_FULFILLED': 
      return{
        ...state,
        loading: false,
        qrcode: action.payload && action.payload.data && action.payload.data.data && action.payload.data.data.qrcode,
        data: action.payload && action.payload.data && action.payload.data.data && action.payload.data.data.orders
      }
    case 'CREATE_ORDERS_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
      }
    case 'FETCH_ORDER_PENDING':
        return {
          ...state,
          isFetching: true,
          loading: true,
        }
    case 'FETCH_ORDER_FULFILLED': 
      console.log(action);
      return{
        ...state,
        isFetching: false,
        loading: false,
        data: action.payload && action.payload.data && action.payload.data.data && action.payload.data.data.order
      }
    case 'FETCH_ORDER_REJECTED':
      return {
        ...state,
        isFetching: false,
        loading: false,
        error: true,
      }
    default: 
      return state;
  }
}

export default orders;