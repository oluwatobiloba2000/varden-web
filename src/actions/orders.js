import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';


export const fetchOrder = id => {
  let url = `${Endpoints.api.orders}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_ORDER',
      payload: API({'Content-Type': 'application/json'})({
        method:'GET',
        url: `${Endpoints.api.baseUrl}${url}/${id}`,
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'FETCH_ORDER_REJECTED',
        loading: false,
        success: false,
        error: err.error
      })
    })
  }
}
