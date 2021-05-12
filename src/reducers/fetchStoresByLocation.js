const intialState = {
  stores: [],
  loading: false,
  success: false,
  error: null,
};


const storesByLocation = (state = intialState, action) => {
  switch(action.type){
    case 'FETCH_STORES_BY_LOCATION_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_STORES_BY_LOCATION_FULFILLED': 
    console.log(action.payload.data.data) 
      return {
        ...state,
        loading: false,
        success: true,
        stores: action.payload.data.data
      }
    case 'FETCH_STORES_BY_LOCATION_REJECTED':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.data
      }
    case 'FETCH_STORES_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_STORES_FULFILLED': 
      return {
        ...state,
        loading: false,
        success: true,
        stores: action.payload && action.payload.data && action.payload.data.data
      }
    case 'FETCH_STORES_REJECTED':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default storesByLocation;