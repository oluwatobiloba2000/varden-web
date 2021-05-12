import React, { PureComponent } from "react";

import { Wrapper } from "./listitem.styles";

/**
 * @param {String} image: product item image
 * @param {String} name: Name of the product
 * @param {String} price: The price of the product
 * @param {String} marginBottom the distance between the top of the second item and the bottom of the first item
 * @param {Function} onDeleteItem: a callback function to delete an item from the cart
 * @param {Function} onIncreaseItem: a callback function to increase the item in the cart
 * @param {Function} onDecreaseItem: a callback function to decrease the item in the cart
 * @param {Function} onChange a callback funtion that gets the value of typed in the input
 * 
 */
class ListItem extends PureComponent {
  render() {
    const {
      img,
      name,
      price,
      onDecreaseItem,
      onDeleteItem,
      onIncreaseItem,
      quantity,
      onChange,
      marginBottom,
      id
    } = this.props;
    console.log(id)
    return (
      <Wrapper marginBottom={marginBottom}>
        <div className="col-sm-12">
          <div className="flexify">
            <div className="img-and-details">
              <img
                src={require(`../../assets/${img}`)}
                alt=""
                className="food-img-size"
              />
              <div className="details">
                <h4>{name}</h4>
                <p>N{price}</p>
              </div>
            </div>
            <div className="buttons">
              <div className="delete" onClick={onDeleteItem}>
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2L22 21.5745" stroke="#EF771D" stroke-width="3" />
                  <path
                    d="M22 2L2.42554 21.1489"
                    stroke="#EF771D"
                    stroke-width="3"
                  />
                </svg>
              </div>
              <div className="cart-button">
                <div className="subtract" onClick={() => onDecreaseItem(id)}>
                  <svg
                    width="20"
                    height="2"
                    viewBox="0 0 20 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1H20" stroke="black" stroke-width="2" />
                  </svg>
                </div>
                <div className="add">
                  <input type="text" name="quantity"  defaultValue={quantity} placeholder={quantity} onChange={onChange}/>
                </div>
                <div className="add" onClick={onIncreaseItem}>
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.74805 0V18.4874" stroke="black" />
                    <path d="M0 9.41174H20" stroke="black" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ListItem;
