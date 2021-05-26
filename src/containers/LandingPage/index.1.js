import React, { PureComponent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";

import Button from "../../components/Button";
import Footer from "../../components/Footer/landingpagefooter";
import Navbar from "../../components/Header/Navbar";

import { Wrapper, Masthead } from "./index.styles";

class LandingPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      produces: []
    };
  }

  _onChange = e => {
    e.preventDefault();
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };
  
  _onSubmitAddress = e => {
    e.preventDefault();
    const { address } = this.state.data;
    //save address to localstorage;
    window.localStorage.setItem("varden_guest_address", address);
    this.props.history.push("/shop");
  };

  fetchProducts = () => {
    axios
      .get("https://varden-api.herokuapp.com/api/produce")
      .then(({ data }) => {
        this.setState({ produces: data.data });
      })
      .catch(function(error) {
        this.setState({ error: "Failed to fetch farm produces" });
      });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const params = {
      loop: true,
      slidesPerView: 3,
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        411: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        414: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      },
      autoplay: true,
    };

    console.log(this.state);

    return (
      <Wrapper>
        <Navbar white />
        <Masthead>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 top-margin">
                <div className="animated fadeIn delay-1s">
                  <h1>Order fresh from the farm produces</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <Button buttonText="Order now" className="btn" onClick={ () => window.location.replace('/shop')}/>
              </div>
            </div>
          </div>
        </Masthead>
        <section className="how-it-works">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="heading">How it works</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 d-flex justify-content-between align-items-center mb-top-margin">
                <img
                  src={require("../../assets/fruits.svg")}
                  alt=""
                  className="how-it-works-img"
                />
                <div className="workings">
                  <h5 className="is_underlined underlined">Place your order</h5>
                  <p>
                    add products and foods items to your cart, checkout and make
                    payments.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-between align-items-center mb-top-margin">
                <img
                  src={require("../../assets/cooking.svg")}
                  alt=""
                  className="how-it-works-img"
                />
                <div className="workings">
                  <h5 className="is_underlined underlined">
                    We package it for delivery
                  </h5>
                  <p>
                    We get your order ready for delivery to your doorpost or
                    pickup
                  </p>
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-between align-items-center mb-top-margin">
                <img
                  src={require("../../assets/scooter.svg")}
                  alt=""
                  className="how-it-works-img"
                />
                <div className="workings">
                  <h5 className="is_underlined underlined">
                    Ready for Delivery/Pickup
                  </h5>
                  <p>Once confirmed, your order would be delivered to you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="food-category">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-md-11">
                <div className="food-category_usp">
                  <h2 className="is_underlined underlined">Fresh from shop</h2>
                </div>
              </div>
              <div className="col-sm-1 col-md-1">
                <Link to="/shop">View All</Link>
              </div>
            </div>
            <div className="row" style={{marginBottom: 70}}>
              <Swiper {...params}>
                {this.state.produces &&
                  this.state.produces.map(produce => (
                    <div
                      className="col-sm-3 col-md-3 col-lg-3"
                      key={produce._id}
                    >
                      <div className="product_item">
                        <Link to={`products/${produce._id}`}>
                          <img
                            src={produce && produce.images && produce.images[0]}
                            alt=""
                          />
                        </Link>
                        {/* <div className="d-flex product_item-details justify-content-between">
                          <h6>{produce.name}</h6>
                          <h6>N{produce.price}</h6>
                        </div> */}
                      </div>
                    </div>
                  ))}
                   
                  
              </Swiper>
            </div>
            <div className="row margin-top-sm">
              <div className="col-sm-6 col-md-6 mb-top-margin">
                <a href="/love-meals" className="food-category_img">
                  <div className="bg_same-height love-meal" />

                  <div className="details">
                    <h4>Love Meals</h4>
                    <p>
                      {" "}
                      Send a love meal with a note. We don't just deliver food,
                      we are #anorderaway to love letters.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-6 mb-top-margin">
                <a href="/shop" className="food-category_img">
                  <div className="bg_same-height organic">
                    <div className="place_ontop">
                      <button>Order Now</button>
                    </div>
                  </div>
                  <div className="details">
                    <h4>Shop Organic</h4>
                    <p>
                      Step in to our farm to table shop for an experience; our
                      tasty organic and healthy meals, at the best prices you
                      can find.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-6 mb-top-margin">
                <a href="/recipes" className="food-category_img">
                  <div className="bg_same-height recipes" />
                  <div className="details">
                    <h4>Appetite Recipes</h4>
                    <p>Learn to cook delicious meals everyday</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-6 mb-top-margin">
                <a href="/events" className="food-category_img">
                  <div className="bg_same-height varden-events" />
                  <div className="details">
                    <h4>Appetite Events</h4>
                    <p>Food Events that would blow you minds</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <Button
                  buttonText={"Place an order Now"}
                  className="main_btn"
                  onClick={() => window.location.replace("/shop")}
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Wrapper>
    );
  }
}

export default LandingPage;
