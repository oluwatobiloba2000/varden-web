import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';


export const fetchOrderHistory = () => {
  let url = `${Endpoints.api.user.orders}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_ORDER_HISTORY',
      payload: API({'Content-Type': 'application/json'})({
        method:'GET',
        url: `${Endpoints.api.baseUrl}${url}`,
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'FETCH_ORDER_HISTORY_REJECTED',
        loading: false,
        success: false,
        error: err.error
      })
    })
  }
}
