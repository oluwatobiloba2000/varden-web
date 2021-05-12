import jwtDecode from 'jwt-decode';
import API from '../services/api.services';
import * as Endpoints from '../services/Endpoints';
import * as Types from './constants';


const LoginUser = data => {
  return dispatch => {
    dispatch({type: Types.CLEAR_ERROR_MESSAGE});
    dispatch(loginUserPending());
    return API({'Content-Type': 'application/json'})({
      url: `${Endpoints.api.baseUrl}${Endpoints.api.loginUser}`,
      method: "POST",
      data
    })
      .then(res => {
        console.log({res})
        const decodedUserData = jwtDecode(res.data.data.token);
        console.log("🚀 ~ file: login.js ~ line 20 ~ decodedUserData", {decodedUserData})
        const userData = {token: res.data.data.token, ...decodedUserData}
        window.localStorage.setItem('current_user', JSON.stringify(userData));
        dispatch({
          type: Types.LOGIN_USER_FULFILLED,
          payload: userData
        })
      })
      .catch(error => {
        console.log(error && error.response && error.response.message)
        console.log({error})
        if(error.message === 'Network Error'){
          return dispatch(loginUserRejected('A network error occurred, please check your internet connnection'));
        }else if (error && error.response && error.response.status === 400) {
          return dispatch(loginUserRejected(error && error.response && error.response.data && error.response.data.message))
        }else if(error && error.response && error.response.status === 401){
          return dispatch(loginUserRejected("Invalid login credentials"))
        }
      });
  };
};

const loginUserPending = () => ({
  type: Types.LOGIN_USER_PENDING
});

const loginUserRejected = error => {
  return {
    type: Types.LOGIN_USER_REJECTED,
    error
  };
};

export default LoginUser;
