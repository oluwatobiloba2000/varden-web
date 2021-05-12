import React, { PureComponent } from "react";

import { CardWrapper } from "./card.styles";

import Button from "../Button";

/**
 * @param {String} title: the title of the food item,
 * @param {String} quantityLeft: the quantity of food item left,
 * @param {Function} onClick: a callback function
 * @param {String} image: the url of the farm product image
 * @param {Function} onBuyNowClick: callback function for buy now click
 */
class Card extends PureComponent {

  render() {
    const { title, quantityLeft, price, onCardClick, image } = this.props;
    return (
      <div className="col-sm-3 col-md-3 col-lg-3" itemScope itemType="http://schema.org/Product">
        <CardWrapper onClick={onCardClick}>
          {/* <div>
            <span className="price_tag">Price: N{price}</span>
          </div> */}
          <div className="food_content">
            <div className="food_image">
              <img src={image} alt="" />
            </div>
            <h4 className="food_title" itemProp="name">{title}</h4>
            <h6 className="food_quantity">Quantity Left: {quantityLeft}</h6>
          </div>
          <div className="actions">
            {/* <Button
              className="add_cart_button"
              buttonText="View Product"
              onClick={this.props.onAddToCart}
            /> */}
          </div>
        </CardWrapper>
      </div>
    );
  }
}

export default Card;
