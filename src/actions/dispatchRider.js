import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';

export const createDispatcher = data => {
  let url = `${Endpoints.api.dispatch}`;
  console.log("we dey")
  return dispatch => {
    dispatch({
      type: 'CREATE_DISPATCHER',
      payload: API()({
        method:'POST',
        url: `${Endpoints.api.baseUrl}${url}`,
        data
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'CREATE_DISPATCHER_REJECTED',
        loading: false,
        success: false,
        error: err && err.error && err.error.response && err.error.response.data
      })
    })
  }
}

export const fetchDispatcher = id => {
  let url = `${Endpoints.api.dispatch}`;
  console.log("we dey")
  return dispatch => {
    dispatch({
      type: 'FETCH_DISPATCHER',
      payload: API()({
        method:'GET',
        url: `${Endpoints.api.baseUrl}${url}/${id}`
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'FETCH_DISPATCHER_REJECTED',
        loading: false,
        success: false,
        error: err && err.error && err.error.response && err.error.response.data
      })
    })
  }
}

export const verifyDispatchRider = (status, riderID) => {
  return dispatch => {
    dispatch({
      type: 'VERIFY_DISPATCH',
      payload: API()({
        method: "POST",
        url: `${Endpoints.api.baseUrl}/api/rider/verify/${riderID}`,
        data: {
          status
        }
      }).catch( error => {
        const err = { error };
        dispatch({
          type: 'VERIFY_DISPATCH_REJECTED',
          isVerifying: false,
          isSuccess: false,
          isVerifyFailed: err && err.error && err.error.response && err.error.response.data
        })
      })
    })
  }
}