import React, { PureComponent } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Footer from "../../components/Footer/landingpagefooter";
import Navbar from "../../components/Header/Navbar";

import { Wrapper, Masthead, ProduceCardWrapper } from "./index.styles";
// import { SwiperWrapper } from "../../components/Header/custom-swiper.styles";
import Swiper from 'react-id-swiper';

const MastheadSwiper = (props) => {
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  const data = [
    {
      img: "https://images.pexels.com/photos/259763/pexels-photo-259763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      headerText: "Want to eat 100% Organic Food?",
      subText: "Order 'organic' fresh from farm produce",
    }, {
      img: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      headerText: "Want Fresh From Farm Produce?",
      subText: "Order 'organic' fresh from farm produce"
    }, {
      img: "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      headerText: "Want already prepared organic food items?",
      subText: "Order 'organic' fresh from farm produce"
    }
  ]

  return (
    <Swiper {...params} >
      {
        data.map((item, i) => {
          return (
            <Masthead img={item.img}>
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-sm-7 col-md-7 col-lg-7 top-margin">
                    <div className="animated fadeIn">
                      <h1 className="animated zoomIn">{item.headerText}</h1>
                      <h3 className="animated fadeInUps">{item.subText}</h3>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-3s mt-4">
                    <a href="/shop"><Button buttonText="Start Ordering now" className="btn" /></a>
                  </div>
                </div>
              </div>
            </Masthead>
          )
        })
      }
    </Swiper>
  )
}

const ProduceSwiper = (props) => {
  const params = {
    slidesPerView: props.visibleSmall ? 1 : 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  const data = [
    {
      img: "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
      headerText: "Tomato",
      subText: "Fresh from farm"
    }, {
      img: "https://images.pexels.com/photos/214158/pexels-photo-214158.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      headerText: "Banana",
      subText: "Fresh from farm"
    }, {
      img: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
      headerText: "Eggs",
      subText: "Fresh from farm"
    }
  ]

  return (
    <Swiper {...params} >
      {
        data.map((item, i) => {
          return (
            <div className="col-sm-4 col-md-4 animated slideInLeft">
              <ProduceCardWrapper>
                <div className="text-center">
                  <div className="text-right">
                    <span className="rating-box">
                      <img src={require("../../assets/star.svg")} width="10px" alt="" className="img-fluid" /> <span className="inner">4.2</span>
                    </span>
                  </div>
                  <img src={item.img} alt="" className="img-fluid product-image" />
                  <h4>{item.headerText}</h4>
                  <p className="mt-2">{item.subText}</p>
                </div>
              </ProduceCardWrapper>
            </div>
          )
        })
      }
    </Swiper>
  )
}


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
      .catch((error) => {
        this.setState({ error: "Failed to fetch farm produces" });
      });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <Wrapper>
        <Navbar white />
        <MastheadSwiper />
        <section className="how-it-works">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="heading">In 3 easy steps</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="how-it-works-item">
                  <div className="img row align-items-end">
                    <img src={require("../../assets/menu2.png")} alt="" width="80%" className="img-fluid" />
                  </div>
                  <div className="content">
                    <p className="content-verb">Choose your</p>
                    <h3 className="content-noun">Farm Produce</h3>
                    <p className="content-description">First select the kind of food that you want</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="how-it-works-item">
                  <div className="img row align-items-end">
                    <img src={require("../../assets/location.png")} alt="" className="img-fluid" />
                  </div>
                  <div className="content">
                    <p className="content-verb">Add your</p>
                    <h3 className="content-noun">Location</h3>
                    <p className="content-description">Now add your location for the delivery.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="how-it-works-item">
                  <div className="img row align-items-end">
                    <img src={require("../../assets/delivery2.png")} alt="" className="img-fluid" />
                  </div>
                  <div className="content">
                    <p className="content-verb">Await your</p>
                    <h3 className="content-noun">Delivery</h3>
                    <p className="content-description">Lastly, wait for the delivery of your order.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fresh-from-farm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-12">
                {/* <div className="navigation float-right">
                  <button className="swiper-button-prev"> <img src={require("../../assets/chevron-left.svg")} width="8px" alt="" /> </button>
                  <button className="swiper-button-next"> <img src={require("../../assets/chevron-right.svg")} width="8px" alt="" /> </button>
                </div> */}
                <h3>Fresh from farm</h3>
              </div>
            </div>
            <div className="d-none d-sm-block">
              <div className="row justify-content-centers">
                <ProduceSwiper visibleSmall={false} />
              </div>
            </div>
            <div className="d-block d-sm-none">
              <div className="row justify-content-centers">
                <ProduceSwiper visibleSmall={true} />
              </div>
            </div>
          </div>
        </section>

        <section className="all-produce">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a href="/shop"><button className="float-right">view all</button></a>
                <h3>Order "farm to table" items</h3>
              </div>
            </div>
            <div className="row justify-content">
              <div className="col-md-6">
                <div className="col-1-cell-1 row align-items-end">
                  <div>
                    <h2>Roasted Chicken</h2>
                    <p><img src={require("../../assets/star.svg")} width="10px" alt="" className="img-fluid" /> <span className="inner">4.2</span> (20 Reviews)</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-content-between justify-content-between" style={{ height: '560px' }}>
                  <div className="col-md-6">
                    <div className="col-2-cell-1 row align-items-end">
                      <div>
                        <h6>Hamburger</h6>
                        <p><img src={require("../../assets/star.svg")} width="10px" alt="" className="img-fluid" /> <span className="inner">4.2</span> (20 Reviews)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col-2-cell-2 row align-items-end">
                      <div>
                        <h6>Chips</h6>
                        <p><img src={require("../../assets/star.svg")} width="10px" alt="" className="img-fluid" /> <span className="inner">4.2</span> (20 Reviews)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col-2-cell-3 row align-items-end">
                      <div>
                        <h6>Rice & Varieties </h6>
                        <p><img src={require("../../assets/star.svg")} width="10px" alt="" className="img-fluid" /> <span className="inner">4.2</span> (20 Reviews)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6"> 
                    <div className="col-2-cell-4 row align-items-end">
                      <div>
                        <h6>Shredded Beef</h6>
                        <p><img src={require("../../assets/star.svg")} width="10px" alt="" className="img-fluid" /> <span className="inner">4.2</span> (20 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="location-section">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12 text-center">
                <h1>Where we deliver for now</h1>
              </div>
              <div className="col-md-12">
                <div className="row justify-content-center align-items-center">
                  {/* <div className="col-md-4">
                    <img src="https://cdn.dribbble.com/users/158919/screenshots/6267284/group_1336_4x.png" className="img-fluid" />
                  </div> */}
                  {
                    ["Lekki, Lagos", "Surulere, Lagos", "Ikeja, Lagos", "Lakowe, Lagos"].map((item, i) => {
                      return (
                        <div className="col-md-3 text-center mb-4" key={i}>
                          <span style={{ color: '#fff' }}><i className="mdi mdi-map-marker" /> {item}</span>
                        </div>
                      )
                    })
                  }
                  {/* {
                  [1,2,3,4,5,6].map((item) => {
                    return (
                      <div className="location-item col-md-3 text-center">
                        <img className="img-fluid mb-2" width="100%" src={require('./../../assets/delivery.png')} />
                        <p>Lagos</p>
                      </div>
                    )
                  })
                } */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="app-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 mb-4">
                <h1>Donwload App & Get Quick Service</h1>
                <p>Donwload the varden app today. Then you can order anywhere, anytime.</p>
                <button className="btn-app mr-2"><i className="mdi mdi-android" /> Play Store </button>
                <button className="btn-app"><i className="mdi mdi-android" /> Apple Store </button>
              </div>
              <div className="col-md-7">
                <img src={require("../../assets/phones.svg")} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Wrapper >
    );
  }
}

export default LandingPage;
