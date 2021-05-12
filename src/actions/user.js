import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';


export const getUser = () => {
  let url = `${Endpoints.api.user.user}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_USER',
      payload: API({'Content-Type': 'application/json'})({
        method:'GET',
        url: `${Endpoints.api.baseUrl}${url}`,
      })
    }).catch(err => {
      console.log(err)
    })
  }
}


export const updateUser = (data) => {
  let url = `${Endpoints.api.user.user}`;
  const header = {'Content-Type': 'application/json'};
  return dispatch => {
    dispatch({
      type: 'UPDATE_USER',
      payload: API(header)({
        method:'PUT',
        url: `${Endpoints.api.baseUrl}${url}/update`,
        data
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'UPDATE_USER_REJECTED',
        isUserUpdating: false,
        isUserUpdated: false,
        isUserError: err.error,
      })
    })
  }
}