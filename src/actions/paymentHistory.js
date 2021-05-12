import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';


export const fetchPaymentHistory = () => {
  let url = `${Endpoints.api.user.payment}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_PAYMENT_HISTORY',
      payload: API({
        method:'GET',
        url: `${Endpoints.api.baseUrl}${url}`,
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'FETCH_PAYMENT_HISTORY_REJECTED',
        loading: false,
        success: false,
        error: err.error
      })
    })
  }
}


export const updateUser = data => {
  let url = `${Endpoints.api.user.user}`;
  return dispatch => {
    dispatch({
      type: 'UPDATE_USER',
      payload: API({
        method:'POST',
        url: `${Endpoints.api.baseUrl}${url}`,
        data
      })
    }).catch(err => {
      console.log(err)
    })
  }
}