import { combineReducers } from "redux";

import LoginReducer from "./Login";
import FarmProduceReducer from "./FarmProduce";
import userReducer from "./user";
import paymentHistory from "./paymentHistory";
import cartReducer from "./cart";
import dispatchRider from './dispatch';
import paymentReducer from './payment'
import orderHistory from './orderHistory';
// import filterReducer from './filter';
import orders from './orders';
import storesByLocation from './fetchStoresByLocation';
import reviews from "./reviews";

export default combineReducers({
  Login: LoginReducer,
  Produces: FarmProduceReducer,
  User: userReducer,
  PaymentHistory: paymentHistory,
  Reviews: reviews,
  // Filter: filterReducer,
  Cart: cartReducer,
  Dispatcher: dispatchRider,
  Payment: paymentReducer,
  OrderHistory: orderHistory,
  Stores: storesByLocation,
  Orders: orders
});
