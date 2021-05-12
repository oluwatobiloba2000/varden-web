import API from "../services/api.services";
import * as Endpoints from "../services/Endpoints";

/**
 *
 * api/produce/price?gte=1&lte=2
 */

export const filterByType = data => {
  console.log(`the type from the action filter ${JSON.stringify(data)}`);
  let url = `${Endpoints.api.produce}`;
  if (data.type && data.category && data.price) {
    return dispatch => {
      const response = dispatch({
        type: "FILTER_PRODUCT",
        isFiltered: false,
        payload: API({ "Content-Type": "application/json" })({
          method: "GET",
          url: `${Endpoints.api.baseUrl}${url}/type?t=${data.type}`
        })
      });
      response
        .then(() => {
          console.log("hello")
          dispatch({
            type: "FILTER_PRODUCT",
            isFiltered: false,
            payload: API({ "Content-Type": "application/json" })({
              method: "GET",
              url: `${Endpoints.api.baseUrl}${url}/price?gte=${
                data.price.max
              }&lte=${data.price.min}`
            })
          });
        })
        .catch(error => {
          const err = { error };
          if (err.name === "Error") {
            dispatch({
              type: "FILTER_PRODUCT_REJECTED",
              loading: false,
              success: false,
              isFiltered: true,
              error:
                "A network error occurred, please check your internet connnection"
            });
          }
        });
    };
  } else if (data.price) {
    return dispatch => {
      dispatch({
        type: "FILTER_PRODUCT",
        isFiltered: true,
        payload: API({ "Content-Type": "application/json" })({
          method: "GET",
          url: `${Endpoints.api.baseUrl}${url}/price?gte=${
            data.price.max
          }&lte=${data.price.min}`
        })
      }).catch(error => {
        const err = { error };
        if (err.name === "Error") {
          dispatch({
            type: "FILTER_PRODUCT_REJECTED",
            loading: false,
            success: false,
            isFiltered: true,
            error:
              "A network error occurred, please check your internet connnection"
          });
        }
      });
    };
  } else if (data.type) {
    return dispatch => {
      dispatch({
        type: "FILTER_PRODUCT",
        isFiltered: true,
        payload: API({ "Content-Type": "application/json" })({
          method: "GET",
          url: `${Endpoints.api.baseUrl}${url}/type?t=${data.type}`
        })
      }).catch(error => {
        const err = { error };
        if (err.name === "Error") {
          dispatch({
            type: "FILTER_PRODUCT_REJECTED",
            loading: false,
            success: false,
            isFiltered: true,
            error:
              "A network error occurred, please check your internet connnection"
          });
        }
      });
    };
  }
};
