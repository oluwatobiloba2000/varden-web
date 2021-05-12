import React, { PureComponent } from "react";
import { connect } from "react-redux";

// Styles
import "rodal/lib/rodal.css";
import { Wrapper, PaymentMethod, DeliveryMethod, SelectDelivery, DeliveryWrapper } from "./payment.styles";
import "react-credit-cards/es/styles-compiled.css";

// Actions
import { updateUser } from "../../actions/user";
import { fetchCart } from "../../actions/cart";
import { makePayment, chargeCard } from "../../actions/payment";
import { fetchStoreByLocale, fetchAllStores } from "../../actions/fetchStoreByLocation";

// Components
import Navbar from "../../components/Header/Navbar";
import Button from "../../components/Button";
import Footer from "../../components/Footer/generalfooter";
import Modal from "../../components/Modal";
import Rodal from "rodal";

// Extra utilities
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "../../utils";


class Payment extends PureComponent {
  state = {
    email: "juwonanthony@example.com", // customer email
    amount: 0, //equals NGN100,
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    pin: "",
    issuer: "",
    focused: "",
    formData: null,
    deliveryMethod: "location",
    address: "",
    pickupStoreID: "",
    isSetupAddress: false,
    isPickupSelected: false,
    data: {},
    showPaymentOnly: false,
    totalPrice: '',
    mapTrackingDetails: {
      rider: {
        latitude: 6.5244,
        longitude: 3.3792
      },
      destination: {
        latitude: 6.5244,
        longitude: 3.3792
      }
    }
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value }, () => {
      console.log(this.state)
    });
  };

  onSetDeliveryAddressFromPrevious = async address => {
    window.localStorage.setItem("varden_guest_addresss", address);
    const data = {
      address
    }
    this.setState({address});
    const isAddressGeocodable = await this.isAddressGeocodable(address);

    console.log(isAddressGeocodable);

    if (isAddressGeocodable) {
      let varden_guest_addressses = JSON.parse(window.localStorage.getItem("varden_guest_addressses"));
      if (!varden_guest_addressses) {
        varden_guest_addressses = [];
      }
      varden_guest_addressses.push(address);
      window.localStorage.setItem("varden_guest_addressses", JSON.stringify(varden_guest_addressses));
      this.props.updateUser(data);
      this.setState({ isSetupAddress: false });
      this.getDeliveryLocationCoordinates();
    } else {
      alert('Your address cannot be mapped, please try some other closer location');
    }
  };

  onSetDeliveryAddress = async e => {
    e.preventDefault();
    window.localStorage.setItem("varden_guest_addresss", this.state.address);
    const data = {
      address: this.state.address
    }
    const isAddressGeocodable = await this.isAddressGeocodable(this.state.address);

    if (isAddressGeocodable) {
      let varden_guest_addressses = JSON.parse(window.localStorage.getItem("varden_guest_addressses"));
      if (!varden_guest_addressses) {
        varden_guest_addressses = [];
      }
      varden_guest_addressses.push(this.state.address);
      window.localStorage.setItem("varden_guest_addressses", JSON.stringify(varden_guest_addressses));
      this.props.updateUser(data);
      this.setState({ isSetupAddress: false });
      this.getDeliveryLocationCoordinates();
    } else {
      alert('Your address cannot be mapped, please try some other closer location');
    }
  };

  setPickupStoreLocation = (e) => {
    e.preventDefault();
    this.setState({pickupStoreID: e.target.value});
  }

  isAddressGeocodable = (address) => {
    return geocodeByAddress(address)
      .then(results => {
        console.log(results);
        return getLatLng(results[0]);
      })
      .then(latLng => {
        console.log('Success', latLng)
        return true;
      })
      .catch(error => {
        // this.setState({ address: "" }); 
        console.error('Error', error)
        return false;
      });
  }

  getDeliveryAddress = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // const { issuer } = this.state;
    geocodeByAddress(this.state.address)
      .then(results => {
        console.log(results)
        getLatLng(results[0])
      })
      .then(latLng => console.log('Success', latLng))
      .catch(error => {
        // this.setState({ address: "" }); 
        return alert('Please put in an autocompleted location')
        // console.error('Error', error)
      });
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    const data = {
      amount: this.state.amount,
      number: formData.number.replace(/\s/g, ""),
      cvv: formData.cvc,
      expiry_month: parseInt(formData.expiry.split("/")[0]),
      expiry_year: parseInt(formData.expiry.split("/")[1])
    };
    if (this.state.address.length > 0) {
      this.props.chargeCard(data);
    } else {
      alert('Please enter delivery address')
    }
  };

  async componentDidMount() {
    this.getLinkFrom();
    const current_user = JSON.parse(
      window.localStorage.getItem("current_user")
    );
    await this.props.fetchCart();
    await this.fetchAllStores();

    let varden_guest_addresss = window.localStorage.getItem(
      "varden_guest_addresss"
    );
    if (this.props.cart) {
      const totalPrice = this.props.cart.totalPrice;
      if (totalPrice === 0) {
        window.location.replace('/shop')
      }
      console.log("totalPrice", totalPrice, this.props);
      this.setState(
        {
          amount: totalPrice * 100 //convert to kobo
        },
        () => console.log(this.state)
      );
    }
    if (!current_user) {
      alert("you need to login first");
      window.location.replace("/login");
    } else if (current_user.address) {
      this.setState({ address: current_user.address });
    } else {
      this.setState({ address: varden_guest_addresss });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.address !== this.state.address) {
      return true;
    }
    if (nextState.isSetupAddress !== this.state.isSetupAddress) {
      return true;
    }
    if (nextState.isCoordinateSet) {
      return true;
    }
    return false;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (!this.props.isFetching) {
      if (!this.state.isCoordinateSet) {
        await this.getDeliveryLocationCoordinates();
      }
    }
  }

  setDeliveryMethod = method => {
    this.setState({ deliveryMethod: method }, () => {
      if (method === "store") {
        this.setState({
          // isPickupSelected: true
        });
      }
    });
  };

  getUserLocation = () => {
    if (navigator.geolocation) {
      let _this = this;
      navigator.geolocation.getCurrentPosition(function (pos) {
        _this.setState(
          {
            data: {
              lat: pos.coords.latitude,
              long: pos.coords.longitude
            }
          },
          () => _this.fetchStores()
        );
        console.log(
          `latitide ${pos.coords.latitude} longitude ${pos.coords.longitude}`
        );
      }, this.showGeolocationError);
    }
  };

  calculateDeliveryTime = (distance) => {
    const averageDrivingSpeed = 60; //--- km/hr
    const time = distance/averageDrivingSpeed;
    return Math.ceil(time);
  }

  showGeolocationError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
      default:
        return;
    }
  };

  fetchStores = () => {
    let data = this.state.data;
    this.props.fetchStoreByLocale(data);
  };

  fetchAllStores = () => {
    this.props.fetchAllStores();
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.qrcode, this.props.qrcode)
    if (nextProps.qrcode !== this.props.qrcode && nextProps.success) {
      this.setState({ success: true }, () => {
        window.localStorage.setItem("qrcode", nextProps.qrcode);
        window.location.replace("/barcode");
      });
    }
  }

  getLinkFrom = () => {
    let prevLink = window.localStorage.getItem("prevLink");
    const totalPrice = this.props.cart.totalPrice;
    if (prevLink === "love-meals") {
      this.setState({ showPaymentOnly: true, totalPrice });
    } else {
      this.setState({ totalPrice });
    }

  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        this.setState({ address });
        getLatLng(results[0])
      })
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  getDeliveryLocationCoordinates = async() => {
    const mapTrackingDetails = this.state.mapTrackingDetails;
    const deliveryLocation = this.state.address || '';
    geocodeByAddress(deliveryLocation)
      .then(results => {
        return getLatLng(results[0]);
      })
      .then(latLng => {
        // return latLng;
        const destination = {
          latitude: latLng && latLng.lat,
          longitude: latLng && latLng.lng
        }
        mapTrackingDetails['destination'] = destination;
        this.setState({mapTrackingDetails, isCoordinateSet: true});
      }) 
      .catch(error => {
        console.error('Error', error)
        return {
          lat: 6.5244,
          lng: 3.3792
        }
      });    
  }

  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    // var radlon1 = Math.PI * lon1/180
    // var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit==="K") { dist = dist * 1.609344 }
    if (unit==="N") { dist = dist * 0.8684 }
    return dist
  }

  getDistance = (origin, destination, travelMode) => {
    var distance = this.distance(origin[0], origin[1], destination[0], destination[1], 'K');
    //round to 3 decimal places
    console.log(origin[0], destination[0]);
    return (Math.round(distance*1000)/1000);
  }

  onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  render() {
    const { address } = this.state;
    const varden_guest_addressses = JSON.parse(window.localStorage.getItem("varden_guest_addressses")) || [];
    const varden_guest_addresssesComponent = varden_guest_addressses && (varden_guest_addressses.filter(this.onlyUnique).map((item, i) => {
      return (<span class="badge badge-dark mr-2" onClick={this.onSetDeliveryAddressFromPrevious.bind(this, item)}>{item}</span>)
    }) || <small>No previous preferred location stored on this device</small>)

    const { mapTrackingDetails } = this.state;
    console.log(mapTrackingDetails);

    const origin = [mapTrackingDetails['rider']['latitude'], mapTrackingDetails['rider']['longitude']];
    const destination = [mapTrackingDetails['destination']['latitude'], mapTrackingDetails['destination']['longitude']];

    const travelMode = 'driving';
    const distance = this.state.isCoordinateSet ? this.getDistance(origin, destination, travelMode) || 0 : <i className="mdi mdi-loading fa fa-spin" /> ;
    const time = this.calculateDeliveryTime(distance) || <i className="mdi mdi-loading fa fa-spin" />;
    return (
      <Wrapper>
        <Navbar white />
        <div className="container">
          <div className="row align-items-center justify-content-center padding-tb_sm">
            <div className="col-sm-5">
              <div className="row">
                {this.state.showPaymentOnly ? (
                  <div className="col-sm-12">
                    {!this.props.loading && this.props.error ? (
                      <h5>Failed to make payment please try again</h5>
                    ) : null}

                    <PaymentMethod>
                      <h5 style={{ marginTop: 50 }}>Total Payment: N{this.state.totalPrice && this.state.totalPrice}</h5>
                      <div className="payment payment-box">
                        <form
                          ref={c => (this.form = c)}
                          onSubmit={this.handleSubmit}
                        >
                          <div className="form-group">
                            <input
                              type="tel"
                              name="number"
                              className="form-control"
                              placeholder="Card Number"
                              pattern="[\d| ]{16,22}"
                              required
                              onChange={this.handleInputChange}
                              onFocus={this.handleInputFocus}
                            />
                          </div>
                          <div className="row form-group">
                            <div className="col-6">
                              <input
                                type="tel"
                                name="expiry"
                                className="form-control"
                                placeholder="Valid Thru (MM/YY)"
                                pattern="\d\d/\d\d"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                              />
                            </div>
                            <div className="col-6">
                              <input
                                type="tel"
                                name="cvc"
                                className="form-control"
                                placeholder="CVC"
                                pattern="\d{1,3}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                              />
                            </div>
                          </div>
                          <input
                            type="number"
                            name="pin"
                            className="form-control"
                            placeholder="Card pin"
                            pattern="\d{3,4}"
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                          />
                          <div className="form-actions">
                            <Button
                              className="pay-btn"
                              buttonText="PAY"
                              isLoading={
                                this.props.loading && this.props.loading
                              }
                            />
                          </div>
                        </form>
                      </div>
                    </PaymentMethod>
                  </div>
                ) : (
                    <React.Fragment>
                      <div className="col-sm-12">
                        <DeliveryWrapper>
                          <SelectDelivery>
                            <div className="row">
                              <div className="col-sm-12 d-flex align-items-center justify-content-center">
                                <DeliveryMethod
                                  className={
                                    this.state.deliveryMethod === "location"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    this.setDeliveryMethod("location")
                                  }
                                >
                                  <img
                                    src={require("../../assets/motorbike.svg")}
                                    alt=""
                                  />
                                  <p>Delivered to my location</p>
                                </DeliveryMethod>
                                <DeliveryMethod
                                  className={
                                    this.state.deliveryMethod === "store"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() => this.setDeliveryMethod("store")}
                                >
                                  <img
                                    src={require("../../assets/store.svg")}
                                    alt=""
                                  />
                                  <p>Pickup from store</p>
                                </DeliveryMethod>

                              </div>
                            </div>
                            <div className="col-md-12 p-0">
                              {
                                this.state.deliveryMethod === "location"
                                  ? <div className="address-card">
                                    <div className="flex">
                                      <span>
                                        {
                                          this.props.isUserUpdating
                                            ? <i className="mdi mdi-loading fa fa-spin" />
                                            : ''
                                        }
                                        <img
                                          src={require("../../assets/placeholder.svg")}
                                          alt=""
                                        />
                                      </span>
                                      <span>
                                        {address
                                          ? address
                                          : "You currently don't have an address"}
                                      </span>
                                    </div>

                                    <p>
                                      {address
                                        ? "would you like to change delivery address? "
                                        : "setup delivery address: "}
                                      {address ? (
                                        <React.Fragment>
                                          <Button
                                            buttonText="Yes"
                                            className="secondary-btn"
                                            onClick={() =>
                                              this.setState({ isSetupAddress: true })
                                            }
                                          />
                                        </React.Fragment>
                                      ) : (
                                          <Button
                                            buttonText="Setup an address"
                                            className="main-btn"
                                            onClick={() =>
                                              this.setState({ isSetupAddress: true })
                                            }
                                          />
                                        )}
                                    </p>
                                  </div>
                                  : <div className="address-card">
                                    <div className="flex">
                                      <label>Select Preferred Store for Pickup</label>
                                      <select className="form-control" onClick={this.setPickupStoreLocation}>
                                        <option value="">Select preferred store location</option>
                                        {
                                          this.props.stores && this.props.stores.map((item, i) => {
                                            const { state, name, city } = item;
                                            return(
                                              <option>{`${name}, ${city}, ${state}`}</option>
                                            )
                                          })
                                        }
                                      </select>
                                    </div>
                                  </div>
                              }
                            </div>
                          </SelectDelivery>
                        </DeliveryWrapper>
                      </div>
                      <div className="col-sm-12">
                        {!this.props.loading && this.props.error ? (
                          <h5>Failed to make payment please try again</h5>
                        ) : null}

                        {
                          this.state.deliveryMethod === "location"
                            ? <React.Fragment>
                                <h6>Distance: {distance} km</h6>
                                <h6 className="mb-4">Estimated Time: {time}hrs (delivery + preparation)</h6>
                              </React.Fragment>
                            : <h6 className="mb-4">Estimated Pickup Time: {time}hrs</h6>
                        }


                        <PaymentMethod>
                          {
                            !this.props.isFetching
                              ? <h5>Total Payment: N{this.state.amount / 100}</h5>
                              : ''
                          }
                          <div className="payment payment-box">
                            <form
                              ref={c => (this.form = c)}
                              onSubmit={this.handleSubmit}
                            >
                              <div className="form-group">
                                <input
                                  type="tel"
                                  name="number"
                                  className="form-control"
                                  placeholder="Card Number"
                                  pattern="[\d| ]{16,22}"
                                  required
                                  onChange={this.handleInputChange}
                                  onFocus={this.handleInputFocus}
                                />
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <input
                                    type="tel"
                                    name="expiry"
                                    className="form-control"
                                    placeholder="Valid Thru (MM/YY)"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                  />
                                </div>
                                <div className="col-6">
                                  <input
                                    type="tel"
                                    name="cvc"
                                    className="form-control"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                  />
                                </div>
                              </div>
                              {
                                !this.props.isFetching
                                  ? <div className="form-actions">
                                    <Button
                                      className="pay-btn"
                                      buttonText="PAY"
                                      isLoading={
                                        this.props.loading && this.props.loading
                                      }
                                    />
                                  </div> : ''
                              }

                            </form>
                          </div>
                        </PaymentMethod>
                      </div>
                    </React.Fragment>
                  )}
              </div>
            </div>
          </div>
        </div>
        <Rodal
          visible={this.state.isSetupAddress}
          onClose={() => this.setState({ isSetupAddress: false })}
        >
          <div className="container">
            <form onSubmit={this.onSetDeliveryAddress}>
              <div className="row">
                <div className="col-12">
                  <h5>Set up Delivery Address</h5>
                </div>
                <div className="col-12">
                  <p style={{margin: 0}}>Click to select from previous delivery locations</p>
                  {varden_guest_addresssesComponent}
                </div>
                <div className="col-12" style={{ marginTop: 10 }}>
                  <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      // <Input
                      //   type="text"
                      //   name="address"
                      //   height="50px"
                      //   width="100%"
                      //   onChange={this.getDeliveryAddress}
                      // />
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input form-control',
                          })}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>Loading...</div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? 'suggestion-item--active'
                              : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                              : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </div>

                <div className="col-12">
                  {
                    this.props.isUserUpdating
                      ? <Button
                        buttonText="Saving..."
                        className="pay-btn"
                      />
                      : <Button
                        buttonText="Save delivery address"
                        className="pay-btn"
                      />
                  }
                </div>
              </div>
            </form>
          </div>
        </Rodal>

        {/**
            Modal for pick up from store logics
        */}

        <Rodal
          visible={this.state.isPickupSelected}
          onClose={() => this.setState({ isPickupSelected: false })}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h6>Fetch Nearest stores to your location</h6>
              </div>

              <div className="col-sm-6 " style={{ marginTop: 20 }}>
                <Button
                  buttonText="Yes"
                  className="pay-btn"
                  onClick={() => this.getUserLocation()}
                />
              </div>
              <div className="col-sm-6" style={{ marginTop: 20 }}>
                <Button
                  buttonText="No"
                  className="No"
                  onClick={() => this.setState({ isPickupSelected: false })}
                />
              </div>
            </div>
          </div>
        </Rodal>
        <Footer />
        <Modal>
          <div className="container">
            <div className="row">
              <div class="col-sm-3 text-center" />
            </div>
          </div>
        </Modal>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Payment.loading,
    success: state.Payment.success,
    error: state.Payment.error,
    reference: state.Payment.paymentRef,
    isStoreFetching: state.Stores.loading,
    // isStore: state.Stores.stores,
    stores: state.Stores.stores,
    isStoreFailed: state.Stores.error,
    qrcode: state.Orders.qrcode,
    order: state.Orders.data,
    isOrderLoading: state.Orders.loading,
    isFetching: state.Cart.isFetching,
    isOrderFailed: state.Orders.error,
    cart: state.Cart.cart,
    isUserUpdating: state.User.isUserUpdating,
    isUserUpdated: state.User.isUserUpdated
  };
};

export default connect(
  mapStateToProps,
  { makePayment, chargeCard, fetchStoreByLocale, fetchCart, updateUser, fetchAllStores }
)(Payment);
