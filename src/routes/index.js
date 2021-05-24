import Loadable from 'react-loadable';
import loadingSpinner from './loading.js';


export const Landing = Loadable({
  loader: () => import('../containers/LandingPage'),
  loading: loadingSpinner
})
export const Home = Loadable({
  loader: () => import('../containers/HomeContainers'),
  loading: loadingSpinner
})

export const Login = Loadable({
  loader: () => import('../containers/LoginContainers'),
  loading: loadingSpinner
})

export const Signup = Loadable({
  loader: () => import('../containers/SignupContainers'),
  loading: loadingSpinner
})

export const Reset = Loadable({
  loader: () => import('../containers/ResetPasswordContainers'),
  loading: loadingSpinner
})

export const NotFound = Loadable({
  loader: () => import('../containers/NotFoundContainers'),
  loading: loadingSpinner
})

export const Cart = Loadable({
  loader: () => import('../containers/CheckoutContainers/cart'),
  loading: loadingSpinner
})

export const Checkout = Loadable({
  loader: () => import('../containers/CheckoutContainers'),
  loading: loadingSpinner
})

export const Payment = Loadable({
  loader: () => import("../containers/Payment"),
  loading: loadingSpinner
})

export const PaymentSuccess = Loadable({
  loader: () => import("../containers/Payment/paymentSuccess"),
  loading: loadingSpinner
})

export const Barcode = Loadable({
  loader: () => import('../containers/BarcodeContainer'),
  loading: loadingSpinner
})

export const Dashboard = Loadable({
  loader: () => import('../containers/Dashboard'),
  loading: loadingSpinner
})

export const Notifications = Loadable({
  loader: () => import('../containers/Notifications'),
  loading: loadingSpinner
})

export const Dispatch = Loadable({
  loader: () => import('../containers/DispatchLanding'),
  loading: loadingSpinner
})

export const DispatchPrimaryContent = Loadable({
  loader: () => import('../containers/DispatchLanding/PrimaryContent'),
  loading: loadingSpinner
})

export const DispatchRegister = Loadable({
  loader: () => import("../containers/DispatchLanding/AccountSetup"),
  loading: loadingSpinner
})

export const SingleProductView = Loadable({
  loader: () => import('../containers/SingleProductView'),
  loading: loadingSpinner
})

export const Lovemeals = Loadable({
  loader: () => import('../containers/LoveMeals'),
  loading: loadingSpinner
})

// export const FarmToTable = Loadable({
//   loader: () => import('../containers/HomeContainers/FarmToTable'),
//   loading: loadingSpinner
// })

export const Test = Loadable({
  loader: () => import('../testpage'),
  loading: loadingSpinner
})

export const Verification = Loadable({
  loader: () => import('../containers/Verification'),
  loading: loadingSpinner
})

export const Terms = Loadable({
  loader: () => import('../containers/PolicyContainer/Terms'),
  loading: loadingSpinner
})

export const Privacy = Loadable({
  loader: () => import('../containers/PolicyContainer/Privacy'),
  loading: loadingSpinner
})

export const Tracking = Loadable({
  loader: () => import("../containers/TrackingOrder"),
  loading: loadingSpinner
})

export const Profile = Loadable({
  loader: () => import("../containers/Profile"),
  loading: loadingSpinner
})

export const OrderHistory = Loadable({
  loader: () => import("../containers/OrderHistory"),
  loading: loadingSpinner
})

export const OverviewPage = Loadable({
  loader: () => import("../containers/OverviewPage"),
  loading: loadingSpinner
})

export const PaymentHistory = Loadable({
  loader: () => import("../containers/PaymentHistory"),
  loading: loadingSpinner
})

export const About = Loadable({
  loader: () => import("../containers/Aboutus"),
  loading: loadingSpinner
})

export const MobileTermsAndCondition = Loadable({
  loader: () => import("../containers/MobileTermsAndCondition"),
  loading: loadingSpinner
})

export const MobilePrivacyPolicy = Loadable({
  loader: () => import("../containers/MobilePrivacyPolicy"),
  loading: loadingSpinner
})
