import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import React, { PureComponent } from "react";
import NumberFormat from 'react-number-format';
// import { CardWrapper } from "./card.styles";

// import Button from "../Button";

/**
 * @param {String} title: the title of the food item,
 * @param {String} quantityLeft: the quantity of food item left,
 * @param {Function} onClick: a callback function
 * @param {String} image: the url of the farm product image
 * @param {Function} onBuyNowClick: callback function for buy now click
 */
class Card extends PureComponent {

  render() {
    const { title,
      //  reviewCount, reviewRating, quantityLeft,
       price, onCardClick, image } = this.props;
    return (
      <Box  _hover={{
        color: "#ef761e",
        border: "1px solid #ef761e",
      }} onClick={onCardClick} style={{cursor: 'pointer', border: '1px solid #ef761e3b',
      borderRadius: '5px', marginRight: '5px'}} className="col-sm-3 col-md-3 col-lg-3" itemScope itemType="http://schema.org/Product">
        <div>
          <img src={image} style={{marginBottom: '5px'}} alt="title" loading="lazy" width="300px" height="300px"/>
        </div>
        <div className="food_image">
            <Text _hover={{
              color: "#ef761e"
            }} style={{marginBottom: '5px'}}>{title}</Text>
            <p><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={(value, props) => <span {...props}>{value}</span>} /></p>
        </div>
      </Box>
    );
  }
}

export default Card;