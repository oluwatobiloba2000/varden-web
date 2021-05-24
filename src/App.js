import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  //  Private, 
  Guest } from "./HOC/Auth";

import * as LoadableRoutes from './routes'

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>

        <Route exact path="/" component={LoadableRoutes.Landing} />
        <Route exact path="/login" component={Guest(LoadableRoutes.Login)} />
        <Route exact path="/signup" component={Guest(LoadableRoutes.Signup)} />
        <Route exact path="/reset-password" component={Guest(LoadableRoutes.Reset)} />
        {/* <Route exact path="/verification/:token" component={Guest(LoadableRoutes.Verification)} /> */}
        <Route path="/shop/:filter?" component={LoadableRoutes.Home} />
        <Route path="/payment/success/:orderNumber" component={LoadableRoutes.PaymentSuccess} />
        <Route exact path="/products/:id" component={LoadableRoutes.SingleProductView} />
        {/* <Route exact path="/love-meals" component={LoadableRoutes.Lovemeals} /> */}
        {/* <Route exact path="/farm-to-table" component={LoadableRoutes.FarmToTable} /> */}
        <Route exact path="/cart" component={LoadableRoutes.Cart} />
        <Route exact path="/checkout" component={LoadableRoutes.Checkout} />
        <Route exact path="/checkout/payment" component={LoadableRoutes.Payment} />
        <Route exact path="/delivery-partners" component={LoadableRoutes.Dispatch} />
        <Route exact path="/dispatch/register" component={LoadableRoutes.DispatchRegister} />
        <Route exact path="/barcode" component={LoadableRoutes.Barcode} />
        <Route exact path="/about" component={LoadableRoutes.About} />
        <Route exact path="/privacy" component={LoadableRoutes.Privacy} />
        <Route exact path="/terms" component={LoadableRoutes.Terms} />
        {/* <Route path="/dashboard" component={Private(LoadableRoutes.Dashboard)} /> */}
        <Route exact path="/mobile-terms-and-condition" component={LoadableRoutes.MobileTermsAndCondition} />
        <Route exact path="/mobile-privacy-policy" component={LoadableRoutes.MobilePrivacyPolicy} />
        <Route component={LoadableRoutes.NotFound} />
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
