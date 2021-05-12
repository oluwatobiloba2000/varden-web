import React, { PureComponent } from "react";
import Swiper from "react-id-swiper";
import "swiper/dist/css/swiper.min.css";

import {withRouter} from "react-router-dom"

import { PrevIcon, NextIcon, MobilePrevIcon, MobileNextIcon } from "../Icons";
import { SwiperWrapper } from "./custom-swiper.styles";
import Button from "../Button";

/**
 * @param {String} isSingleProductView: specifies if it's a SingleProductView,
 * @param {String} quantityLeft: the quantity of food item left,
 * @param {Function} onClick: a callback function
 * @param {String} image: the url of the farm product image
 */

class CustomSwiper extends PureComponent {
  
  render() {
    const { images } = this.props;
    const isSingleProductView = this.props.isSingleProductView || false
    const params = !isSingleProductView
      ? {
          centeredSlides: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: ".next-icon",
            prevEl: ".prev-icon",
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
          },
          renderPrevButton: () =>
            window.innerWidth > 480 ? (
              <PrevIcon className="prev-icon" />
            ) : (
              <MobilePrevIcon className="prev-icon" />
            ),
          renderNextButton: () =>
            window.innerWidth > 480 ? (
              <NextIcon className="next-icon" />
            ) : (
              <MobileNextIcon className="next-icon" />
            )
        }
      : null;

    return (
      <SwiperWrapper isSingleProductView={isSingleProductView}>
        
        <Swiper {...params} shouldSwiperUpdate>
          {images.map((slide, key) => (
            <div
              key={key}
              className="d-flex align-items-center slide-container"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
                  slide.imgSrc
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            >
              <div className="slide-text-container">
                <h1>{slide.header}</h1>
                <p>{slide.lead}</p>
                {isSingleProductView ? (
                  <div>
                    <h4>N1000</h4>
                    <div className="actions">
                      <Button className="buy_button" buttonText="Buy now" onClick={() => this.props.history.push('/checkout')}/>
                      <Button
                        className="add_cart_button"
                        buttonText="Add to cart"
                        
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </Swiper>
      </SwiperWrapper>
    );
  }
}

export default withRouter(CustomSwiper);
