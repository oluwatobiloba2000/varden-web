import Styled from 'styled-components';
import colors from '../../colors';

export const Wrapper = Styled.div`
  position: relative;
  border-radius: 2px;
  border: 1px solid ${colors.inputBorderColor};
  overflow: hidden;
  min-height:${props => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
  background-color:${colors.containerBackgroundColor};
  height: ${ props => props.height};
  cursor: pointer;

  .preview-image{
    height:100%;
    width:100%:
    object-fit:cover;
  }
  .preview-image #preview{
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-sizing: border-box;
    object-fit: cover;
    img {
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }

  .close{
    position: absolute;
    top: 5px;
    left: 10px;
    cursor: pointer;
    width:20px;
    height:20px;
    img{
      width:100%;
      object-fit:cover;
    }
  }

  #upload{
    display:none;
  }

  label{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    img{
      margin-bottom: 10px;
      width:20px;
    }
  }
  input[type="file"]{
    display:none;
  }
`;


export const Text = Styled.p`
  color: ${colors.blackColor};
  font-size: 14px;
`
