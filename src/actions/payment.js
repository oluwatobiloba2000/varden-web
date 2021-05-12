import API from "../services/api.services";
import * as Endpoints from "../services/Endpoints";

import * as Types from "./constants";

export const makePayment = produceId => {
  let url = `${Endpoints.api.payment.chargeCard}`;
  return dispatch => {
    dispatch(makePaymentPending());
    return API({ "Content-Type": "application/json" })({
      method: "POST",
      url: `${Endpoints.api.baseUrl}${url}`
    })
      .then(res => {
        if (res.data.status === 200) {
          const carts = res.data.data;
          // window.localStorage.setItem("cart", JSON.stringify(carts));
          dispatch({
            type: Types.ADD_TO_CART_FULFILLED,
            payload: carts
          });
        }
      })
      .catch(error => {
        const err = { error };
        return dispatch(makePaymentRejected(err.error.response.data));
      });
  };
};

const makePaymentPending = () => ({
  type: Types.MAKE_PAYMENT_PENDING
});

const makePaymentRejected = error => ({
  type: Types.MAKE_PAYMENT_REJECTED,
  error
});

export const fetchPaymentHistory = () => {
  let url = `${Endpoints.api.user.payment}`;
  return dispatch => {
    dispatch({
      type: "FETCH_PAYMENT_HISTORY",
      payload: API({ "Content-Type": "application/json" })({
        method: "GET",
        url: `${Endpoints.api.baseUrl}${url}`
      })
    }).catch(error => {
      const err = { error };
      dispatch({
        type: "FETCH_PAYMENT_HISTORY_REJECTED",
        loading: false,
        success: false,
        error: err.error
      });
    });
  };
};

export const chargeCard = data => {
  let url = `${Endpoints.api.payment.chargeCard}`;
  return dispatch => {
    dispatch(makePaymentPending());
    return API({ "Content-Type": "application/json" })({
      method: "POST",
      url: `${Endpoints.api.baseUrl}${url}`,
      data
    })
      .then(res => {
        console.log(res.data);
        if (res.data.status === 200) {
          console.log("normal charge");
          console.log(res);
          console.log(res.data.data);
          const details = {
            reference: res.data.data.card.reference,
            token: res.data.data.card.token
          };
          window.localStorage.setItem("paymentDetails", JSON.stringify(details));
          dispatch({
            type: Types.MAKE_PAYMENT_FULFILLED,
            paymentRef: res.data.data.card.reference,
            token: res.data.data.card.token
          });
          dispatch(createOrder(details.reference));
        } else if (res.data.status === 201) {
          console.log("requires pin");
          console.log(res);
        } else if (res.data.status === 202) {
        } else if (res.data.status === 203) {
        } else if (res.data.status === 204) {
        }
      })
      .catch(error => {
        const err = { error };
        return dispatch(makePaymentRejected(err.error.response.data));
      });
  };
};

export const createOrder = paymentRef => {
  let url = `${Endpoints.api.createOrder}`;
  return dispatch => {
    dispatch({
      type: "CREATE_ORDERS",
      payload: API({ "Content-Type": "application/json" })({
        method: "GET",
        url: `${Endpoints.api.baseUrl}${url}?payref=${paymentRef}`
      })
      .catch(error => {
        const err = { error };
        dispatch({
          type: "CREATE_ORDERS_REJECTED",
          loading: false,
          success: false,
          error: err.error
        });
      })
    });
  };
};
