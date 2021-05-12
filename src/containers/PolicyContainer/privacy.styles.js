import styled from "styled-components";

// import colors from "../../colors";

export const PrivacyWrapper = styled.div`
  width: 100%;
  .content {
    h2 {
      font-weight: 600;
    }
    p {
      line-height: 33px;
    }
  }
`;

export const Masthead = styled.div`
  width: 100%;
  height: 300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1468408816249-a6778cf9ace2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  h1 {
    font-size: 50px;
    font-weight: 600;
    color: #fff;
  }
  p {
    font-size: 20px;
    color: #fff;
  }
  .top-margin {
    margin-top: 80px;
  }

`