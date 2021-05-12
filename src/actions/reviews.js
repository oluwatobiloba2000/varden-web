import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';

export const addReviews = (data) => {
  let url = `${Endpoints.api.reviews.addReview}`;
  return dispatch => {
    dispatch({
      type: 'ADD_REVIEW',
      payload: API()({
        method:'POST',
        url: `${Endpoints.api.baseUrl}${url}`,
        data
      })
    }).catch(error => {
      const err = {error};
      dispatch({
        type: 'ADD_REVIEW_REJECTED',
        loading: false,
        success: false,
        error: err && err.error && err.error.response && err.error.response.data
      })
    })
  }
}