import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: relative;
  display: flex;
`;
export const IconWrap = styled.div`
  width: 100px;
  height: 50px;
  background-color: #21a74669;
  position: relative;
  :after {
    content: "";
    position: absolute;
    right: 0;
    top: 45%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left-color: #21a74669;
    border-right: 0;
    margin-top: -7px;
    margin-right: -10px;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0px;
  }
`;
