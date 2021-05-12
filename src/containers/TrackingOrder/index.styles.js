import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  height: 100vh;

  .pad-container {
    height: 130px;
  }

  main {
    height: calc(100vh - 130px);
  }

  .map-outer {
    width: 100%;
    position: relative;

    .gmap-canvas iframe {
      width: 100%;
      height: calc(100vh - 130px);
      filter: grayscale(0.8);
    }

    // button for toggling side-div
    .order-details-toggle {
      position: absolute;
      top: 50px;
      right: 10px;
      cursor: pointer !important;

      span {
        padding: 8px 16px;
        background: #ffffff;
        border-radius: 3px;
      }
    }

    .side-div {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      min-width: 300px;
      margin-left: 0px;
      background-color: #3c2f63;
      z-index: 3;
      transition: 0.7s ease-in-out all;

      &.hidden {
        margin-left: -600px;
      }
    }

    @media (max-width: 400px) {
        width: 100%;
    }
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  min-height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.mapImage});
  background-size: cover;
  background-position: center center;
  position: relative;
`;

export const DetailsCard = styled.div`
  width: 30%;
  background-color: #3c2f63;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const OrderDetails = styled.div`
  width: 100%;
  h4 {
    font-size: 20px;
    color: #fff;
  }
  .order-item {
    display: block;
    .order-item-img {
      display: flex;
      padding: 0;
      color: #fff;
      line-height: 40px;
      p {
        font-size: 16px;
      }
      img {
        width: 12px;
        height: 12px;
        object-fit: cover;
      }
    }
    p {
      font-size: 14px;
      color: #fff;
      margin: 0;
      padding: 0;
    }
    .price {
      color: ${colors.orange};
    }
    .order-item-btn {
      flex: 0.3;
    }
    .order-item-title {
      flex: 4;
      margin-left: 10px;
    }
  }
`;

export const DriversDetails = styled.div`
  width: 100%;
  margin-top: 50px;
  h4 {
    font-size: 20px;
    color: #fff;
  }
`;

export const DriversCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .driver-photo {
    img {
      width: 60px;
      height: 60px;
      border-radius: 100px;
      object-fit: cover;
    }
  }
  .name,
  .delivered {
    h5 {
      font-size: 16px;
      color: #fff;
    }
    h5,
    p {
      margin: 0;
      padding: 0;
    }
    p {
      font-size: 14px;
      color: ${colors.orange};
    }
  }
`;

export const LocationDetails = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 60vw;
  height: 150px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 3px;

  h3, h4 {
    font-size: 20px
  }

  h3 {
    color : #EF771D;
  }

  p {
    font-size: 16px;
  }

  .status {
    color : #EF771D;
    span {
      color: #222 
    }
  }

  @media (max-width: 400px) {
    width: 100vw;
    bottom: 0;
    right: 0;
    left: 0;

    h3, h4 {
      font-size: 16px
    }
  
    p {
      font-size: 12px;
    }
  
}
`;
