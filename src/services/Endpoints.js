export const api = {
  // baseUrl: "https://varden-api.herokuapp.com",
  baseUrl: "https://appetite-api-stage.herokuapp.com",
  verify: "/api/verification",
  createUser: "/api/customer",
  loginUser: "/api/login",
  forgotPass: "/api/forgot",
  produce: "/api/product/display",
  cart: "/api/carts",
  dispatch: '/api/rider',
  stores: "/api/store/near",
  allStores: "/api/store",
  reviews: {
    addReview: "/api/review",
    deleteReview: "/api/review"
  },
  payment: {
    chargeCard: '/api/cards/charge',
  },
  createOrder: '/api/orders/create',
  orders: '/api/orders',
  user: {
    user: "/api/users",
    orders: "/api/orders/history",
    payment: "/api/payment/history"
  }
};
