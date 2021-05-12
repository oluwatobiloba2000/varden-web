import API from "../services/api.services";
import * as Endpoints from "../services/Endpoints";

import * as Types from './constants';

export const addToCart = (payload) => {
  let url = `${Endpoints.api.cart}`;
  return dispatch => {
    dispatch(addToCartPending());
    return API({'Content-Type': 'application/json'})({
      method: "POST",
      url: `${Endpoints.api.baseUrl}${url}`,
      data: {
        items: payload
      }
    })
    .then( res => {
      if(res.data.status === 200){
        const carts = res.data.data;
        dispatch({
          type: Types.ADD_TO_CART_FULFILLED,
          payload: carts
        })
        dispatch(fetchCart()).then(() => {
          localStorage.removeItem('cartItems');
        })
        // window.location.replace('/checkout/payment');
      }else{
        console.log(res)
      }
    })
    .catch(error => {
      const err = {error};
      return dispatch(addToCartRejected(err.error.response && err.error.response.data))
    })
  }
};


const addToCartPending = () =>  ({
  type: Types.ADD_TO_CART_PENDING
});

const addToCartRejected = (error) =>  ({
  type: Types.ADD_TO_CART_REJECTED,
  error
});


export const fetchCart = () => {
  let url = `${Endpoints.api.cart}`;
  return dispatch => {
    dispatch({
      type: Types.FETCH_CART_PENDING
    });
    return API({'Content-Type': 'application/json'})({
      method: "GET",
      url: `${Endpoints.api.baseUrl}${url}`,
    })
    .then( res => {
      if(res.data.status === 200){
        const carts = res.data.data;
        window.localStorage.setItem('cart', JSON.stringify(carts))
        dispatch({
          type: Types.FETCH_CART_FULFILLED,
          payload: carts
        })
      }
    })
    .catch(error => {
      return dispatch({
        type: Types.FETCH_CART_REJECTED,
        error
      })
    })
  }
};


export const updateCartQuantity = (cartId, quantity) => {
  let url = `${Endpoints.api.cart}`;
  return dispatch => {
    dispatch({
      type: 'UPDATING_CART_PENDING'
    });
    return API({'Content-Type': 'application/json'})({
      method: "PUT",
      url: `${Endpoints.api.baseUrl}${url}/quantity/${cartId}`,
      data: {
        quantity
      }
    })
    .then( res => {
      if(res.data.status === 200){
        dispatch({
          type: 'UPDATING_CART_FULFILLED',
          payload: res.data.data.message
        })
        dispatch(fetchCart())
      }
    })
    .catch(error => {
      return dispatch({
        type: 'UPDATING_CART_REJECTED',
        error
      })
    })
  }
}



export const deleteCartItem = produceId => {
  let url = `${Endpoints.api.cart}`;
  return dispatch => {
    dispatch({
      type: Types.DELETE_CART_ITEM_PENDING
    });
    return API({'Content-Type': 'application/json'})({
      method: "DELETE",
      url: `${Endpoints.api.baseUrl}${url}/${produceId}`,
      data: {
        id: produceId
      }
    })
    .then( res => {
      if(res.data.status === 200){
        dispatch({
          type: Types.DELETE_CART_ITEM_FULFILLED,
          payload: res.data.data.message
        })
        dispatch(fetchCart())
      }
    })
    .catch(error => {

      return dispatch({
        type: Types.DELETE_CART_ITEM_REJECTED,
        error
      })
    })
  }
};