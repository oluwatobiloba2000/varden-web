import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';

/**
 * 
 * @param {String} type: set the type, if its a login or signup type 
 * @param {Object} data: this is an object of what to be sent to the api 
 */
export const AllFarmProduce = () => {
  let url = `${Endpoints.api.produce}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_PRODUCE',
      payload: API({'Content-Type': 'application/json'})({
        method:'GET',
        url: `${Endpoints.api.baseUrl}${url}`,
      })
    }).catch(error => {
      const err = {error};
      if(err.name === 'Error'){
        dispatch({
          type: 'FETCH_PRODUCE_REJECTED',
          loading: false,
          success: false,
          error: "A network error occurred, please check your internet connnection"
        })
      }
    })
  }
}


export const SingleFarmProduce = id => {
  // let url = `${}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_SINGLE',
      payload: API({'Content-Type': 'application/json'})({
        method:'GET',
        url: `${Endpoints.api.baseUrl}/api/product/${id}`,
      })
    }).catch(error => {
      const err = {error};
      if(err.name === 'Error'){
        dispatch({
          type: 'FETCH_PRODUCE_REJECTED',
          isSingleLoading: false,
          success: false,
          isSingleFailed: "A network error occurred, please check your internet connnection"
        })
      }
    })
  }
}