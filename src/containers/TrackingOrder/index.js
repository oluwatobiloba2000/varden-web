import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  Wrapper,
  // MapWrapper,
  // DetailsCard,
  OrderDetails,
  DriversDetails,
  DriversCard,
  LocationDetails
} from "./index.styles";

import { CloseIcon, ArrowUpIcon, ArrowDownIcon } from "../../components/Icons";

import { fetchDispatcher } from "../../actions/dispatchRider";
import { fetchOrder } from "../../actions/orders";

import {Map,
  //  InfoWindow, Polyline, 
  Marker, GoogleApiWrapper} from 'google-maps-react';


import socketIO from 'socket.io-client'
import
//  PlacesAutocomplete,
  {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

// const AnyReactComponent = ({ text }) => (
//   <div style={{
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)'
//   }}>
//     <div className="col-md-12">
//       <img width="30px" src={require('./../../assets/location.svg')} alt="location svg" className="mb-2 img-fluid" /> 
//       {/* <b>{text}</b> */}
//     </div>
//   </div>
// ) 



class Tracking extends PureComponent {
  constructor(props) {
    super(props);

    this.socket = socketIO('http://varden-api.herokuapp.com', {
      transports: ['websocket'], jsonp: false 
    });   
    this.socket.connect();

    this.state = {
      viewOrderDetails: false,
      coordinates: [],
      isCoordinateSet: false,
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
  }

  async componentDidMount () {
    const orderId = this.props.match.params.orderId;
    await this.fetchOrder(orderId);

    const dispatcherId = 'hello';
    await this.fetchDispatcherDetails(dispatcherId);
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
    const { order } = this.props;
    const dispatchRiderID = (order && order.dispatcher && order.dispatcher._id) || "";
    const listenerID = `${order._id}${dispatchRiderID}`;

    if (!this.props.isFetching) {
      if (!this.state.isCoordinateSet) {
        await this.getDeliveryLocationCoordinates(order);
      }
      if (dispatchRiderID !== "") {
        this.updateRiderCoordinates(listenerID);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { mapTrackingDetails } = this.state;

    const origin = [mapTrackingDetails['rider']['latitude'], mapTrackingDetails['rider']['longitude']];
    const destination = [mapTrackingDetails['destination']['latitude'], mapTrackingDetails['destination']['longitude']];

    const travelMode = 'driving';

    const distance = this.getDistance(origin, destination, travelMode);
    if (nextState.mapTrackingDetails !== this.state.mapTrackingDetails) {
      return true;
    }
    if (!nextProps.isFetching) {
      return true;
    }
    if (nextState.isCoordinateSet) {
      return true;
    } 
    if (distance > 0.2) {
      return true;
    }
    return false;
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
    return (Math.round(distance*1000)/1000);
  }

  // Get the delivery location coordinates 
  getDeliveryLocationCoordinates = async(order) => {
    const mapTrackingDetails = this.state.mapTrackingDetails;
    const deliveryLocation = (order && order.deliveryAddress) || '';
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
        console.log("getDeliveryLocationCoordinates")
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

  // Update the location coordinates of the rider from the socket
  updateRiderCoordinates = (listenerID) => {
    const { mapTrackingDetails } = this.state;
    this.socket.on(listenerID, (data) => {
      console.log("new coordinates data", data);
      const rider = {
        latitude: data && data[0],
        longitude: data && data[1]
      }
      mapTrackingDetails['rider'] = rider;
      this.setState({ mapTrackingDetails })
    });
  }

  fetchOrder = (orderId) => {
    this.props.fetchOrder(orderId);
  }

  fetchDispatcherDetails = () => {
    this.props.fetchDispatcher();
  }

  toggleDetailsView = () => {
    this.setState({ viewOrderDetails: !this.state.viewOrderDetails });
  };

  calculateDeliveryTime = (distance) => {
    const averageDrivingSpeed = 60; //--- km/hr
    const time = distance/averageDrivingSpeed;
    return Math.ceil(time);
  }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    const { mapTrackingDetails } = this.state;

    const origin = [mapTrackingDetails['rider']['latitude'], mapTrackingDetails['rider']['longitude']];
    const destination = [mapTrackingDetails['destination']['latitude'], mapTrackingDetails['rider']['longitude']];

    const travelMode = 'driving';
    const distance = this.getDistance(origin, destination, travelMode) || 0;
    const time = this.calculateDeliveryTime(distance) || <i className="mdi mdi-loading fa fa-spin" />;

    return (
      <Wrapper>
        <div className="pad-container" />
        <main>
          <div className="row m-0">
            <div className="col-sm-12 p-0">
              <div className="map-outer">
                <div className="gmap-canvas">
                  <div style={{ height: 'calc(100vh - 130px)', width: '100%' }}>
                    <Map
                      google={this.props.google}
                      style={style}
                      initialCenter={{
                        lat: 6.5244,
                        lng: 3.3792
                      }}
                      zoom={5}
                      onClick={this.onMapClicked}
                    >
                      {
                        this.state.isCoordinateSet
                        ? Object.values(mapTrackingDetails).map((item, i) => {
                          console.log(item);
                          return (
                            <Marker
                              key={i}
                              position={{lat: item.latitude, lng: item.longitude}}
                              name="My Marker"
                            />
                          )
                        })
                        : ''
                      }
                    </Map>
                  </div>
                </div>
                <div
                  onClick={this.toggleDetailsView}
                  className="order-details-toggle float-right"
                >
                  <span>View Order Details</span>
                </div>
                <div
                  className={`side-div ${
                    this.state.viewOrderDetails ? "" : "hidden"
                  }`}
                >
                  <div className="container pt-3">
                    <OrderDetails>
                      <div className="text-right mb-4">
                        <CloseIcon color="white" onClick={this.toggleDetailsView} />
                      </div>
                      <h4>Order Details</h4>
                      <p style={{color: '#fff'}}>Order Number: {this.props.order && this.props.order.orderNumber}</p>
                      
                      {
                        !this.props.isFetching
                        ? <div className="order-item mt-2">
                           {
                             this.props.order && this.props.order.produce && this.props.order.produce.map((item, i) => {
                                return (
                                  <div key={i} className="order-item-img col-md-12">
                                    <p>{i+1}. {item.name} <span className="small">({item.quantity} QTY @ <strike>N</strike>{item.price})</span></p>
                                  </div>
                                )
                              })
                           }
                            <h5 className="price mt-2">Total: <strike>N</strike>{this.props.order && (this.props.order.total || 0)}</h5>
                          </div>
                        : '' 
                      }
                    </OrderDetails>
                    <DriversDetails>
                      <h4 className="my-3">Rider's Details</h4>
                      {
                        this.props.order && this.props.order.dispatcher
                        ? <React.Fragment>
                            <DriversCard>
                              <div className="driver-photo">
                                <img
                                  src={require("../../assets/driver-photo.png")}
                                  alt=""
                                  className="mr-3"
                                />
                              </div>
                              <div className="name mr-3">
                                <h5>Name</h5>
                                <p>{this.props.order.dispatcher.name}</p>
                              </div>
                            </DriversCard>

                            <div className="mt-5 px-3s text-white">
                              <div className="d-flex justify-content-between">
                                <span>Status</span>
                                <span>{this.props.order.status}</span>
                              </div>

                              <div className="d-flex justify-content-between">
                                <span>Phone</span>
                                <span>{this.props.order.dispatcher.phoneNumber}</span>
                              </div>
                              <div className="d-flex justify-content-between">
                                <span>Email</span>
                                <span>{this.props.order.dispatcher.email}</span>
                              </div>
                            </div>
                        </React.Fragment>
                        : <p style={{color: '#fff'}}>No rider assigned yet</p>
                      }
                    </DriversDetails>
                  </div>
                </div>
                <LocationDetails>
                  <div className="container pt-3">
                    <div className="row ">
                      <div className="col-6">
                        <h3><ArrowUpIcon width="16px" height="20px" /> Pick up</h3>
                        <h4>Varden Store</h4>
                        <p>Estimated distance: {distance}km</p>
                      </div>
                      <div className="col-6">
                        <h3><ArrowDownIcon width="16px" height="20px"/> Drop off</h3>
                        <h4>{(this.props.order && this.props.order.deliveryAddress) || 'No address given'}</h4>
                        <p>Estimated time of arrival: {time} hrs</p>
                      </div>
                      <div className="col-12">
                        <p className="status">
                          <b>Status: </b> 
                          {
                            this.props.order.status === "approved"
                            ? <span>Delivery Confirmed <i>(You have confirmed delivery)</i></span>
                            : this.props.order.status === "in-transit"
                            ? <span>In-Transit <i>(Delivery is on its way)</i></span>
                            : this.props.order.status === "pending"
                            ? <span>Pending <i>(Items have not left store yet)</i></span>
                            : ''
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </LocationDetails>
              </div>
            </div>
          </div>
        </main>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Produces.isSingleLoading,
    error: state.Produces.isSingleFailed,
    order: state.Orders.data,
    isFetching: state.Orders.isFetching,
    dispatcher: state.Dispatcher.data,
  };
};
export default connect(
  mapStateToProps,
  { fetchOrder, fetchDispatcher }
)(GoogleApiWrapper({
  apiKey: ('AIzaSyAwILIIJmDuSapQdZQxRMbVYv7dQb7ai1g')
})(Tracking));