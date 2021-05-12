import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';

export const fetchStoreByLocale = data => {
  let url = `${Endpoints.api.stores}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_STORES_BY_LOCATION',
      payload: API()({
        method:'GET',
        url: `${Endpoints.api.baseUrl}${url}?lng=${data.long}&lat=${data.lat}`,
        data
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'FETCH_STORES_BY_LOCATION_REJECTED',
        loading: false,
        success: false,
        error: err.error.response.data
      })
    })
  }
}

export const fetchAllStores = () => {
  let url = `${Endpoints.api.allStores}`;
  return dispatch => {
    dispatch({
      type: "FETCH_STORES",
      payload: API()({
        method: 'GET',
        url: `${Endpoints.api.baseUrl}${url}`
      })
    }).catch(err => {
      console.log(err, err.response)
      dispatch({
        type: "FETCH_STORES_REJECTED",
        error: err.response
      })
    })
  }
}