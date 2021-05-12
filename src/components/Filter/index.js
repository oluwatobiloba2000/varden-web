import React, { PureComponent } from "react";
import InputRange from 'react-input-range';


import "react-input-range/lib/css/index.css";
import { FilterWrapper } from "./filter.styles";
import Button from "../Button";

class Filter extends PureComponent {
  render() {
    const { filterValues, updateFilter, rangeValues, onInputChange} = this.props;
    return (
      <FilterWrapper>
        <h2>Filter</h2>
        <div className="card">
          <div className="food_type_div">
            <h4>Type</h4>
            <div>
              <Button
                className={filterValues.foodType === "fresh" ? "active" : ""}
                onClick={() => updateFilter("foodType", "fresh")}
                buttonText="Fresh Food"
              />
              <Button
                className={filterValues.foodType === "raw" ? "active" : ""}
                onClick={() => updateFilter("foodType", "raw")}
                buttonText="Raw Food"
              />
            </div>
          </div>
          <div className="price_div">
            <h4>Price</h4>
            <div className="price-range">
              <InputRange 
                formatLabel={rangeValues => `N${rangeValues}`}
                maxValue={20}
                minValue={0}
                value={rangeValues}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
      </FilterWrapper>
    );
  }
}

export default Filter;
